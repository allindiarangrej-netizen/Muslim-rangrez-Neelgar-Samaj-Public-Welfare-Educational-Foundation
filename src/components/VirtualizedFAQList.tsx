import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  ChevronDown, Sparkles, Copy, ThumbsUp, ExternalLink, HelpCircle,
  Building2, BookOpen, Gavel, UserCheck, GraduationCap, Landmark,
  Briefcase, HeartHandshake, ShieldCheck, FileText
} from 'lucide-react';
import { Language } from '../types';
import { FAQItem, FAQ_CATEGORIES } from '../data/faqKnowledgeBase';
import { faqService } from '../services/faqService';

interface VirtualizedFAQListProps {
  items: FAQItem[];
  currentLanguage: Language;
  expandedIds: Set<string>;
  onToggleExpand: (id: string) => void;
  userVoted: Set<string>;
  helpfulVotes: Record<string, number>;
  onVote: (id: string) => void;
  onCopyLink: (slug: string) => void;
  onAskIqra: (question: string) => void;
  onNavigate?: (tab: string) => void;
  overscan?: number;
}

// Helper to get category icon
function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case 'Building2': return <Building2 className="h-3.5 w-3.5 mr-1" />;
    case 'BookOpen': return <BookOpen className="h-3.5 w-3.5 mr-1" />;
    case 'Gavel': return <Gavel className="h-3.5 w-3.5 mr-1" />;
    case 'UserCheck': return <UserCheck className="h-3.5 w-3.5 mr-1" />;
    case 'GraduationCap': return <GraduationCap className="h-3.5 w-3.5 mr-1" />;
    case 'Landmark': return <Landmark className="h-3.5 w-3.5 mr-1" />;
    case 'Briefcase': return <Briefcase className="h-3.5 w-3.5 mr-1" />;
    case 'HeartHandshake': return <HeartHandshake className="h-3.5 w-3.5 mr-1" />;
    case 'ShieldCheck': return <ShieldCheck className="h-3.5 w-3.5 mr-1" />;
    case 'FileText': return <FileText className="h-3.5 w-3.5 mr-1" />;
    default: return <HelpCircle className="h-3.5 w-3.5 mr-1" />;
  }
}

export const VirtualizedFAQList: React.FC<VirtualizedFAQListProps> = ({
  items,
  currentLanguage,
  expandedIds,
  onToggleExpand,
  userVoted,
  helpfulVotes,
  onVote,
  onCopyLink,
  onAskIqra,
  onNavigate,
  overscan = 6
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(800);
  
  // Height map to store measured or estimated heights per item
  const heightMapRef = useRef<Map<string, number>>(new Map());
  const [measuredHeightsVersion, setMeasuredHeightsVersion] = useState(0);

  // Measure container height on mount/resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight || window.innerHeight || 800);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Listen to scroll events on window or container
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate scroll offset relative to container top
        const offset = Math.max(0, -rect.top);
        setScrollTop(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Estimated height calculation
  const getItemEstimatedHeight = useCallback((faq: FAQItem) => {
    if (heightMapRef.current.has(faq.id)) {
      return heightMapRef.current.get(faq.id)!;
    }
    const isExpanded = expandedIds.has(faq.id);
    return isExpanded ? 240 : 92;
  }, [expandedIds]);

  // Compute item offsets and total height
  const { offsets, totalHeight } = useMemo(() => {
    const offsets: number[] = new Array(items.length);
    let currentOffset = 0;
    for (let i = 0; i < items.length; i++) {
      offsets[i] = currentOffset;
      currentOffset += getItemEstimatedHeight(items[i]);
    }
    return { offsets, totalHeight: currentOffset };
  }, [items, getItemEstimatedHeight, measuredHeightsVersion, expandedIds]);

  // Compute range of visible items
  const { startIndex, endIndex } = useMemo(() => {
    if (items.length === 0) return { startIndex: 0, endIndex: 0 };

    let start = 0;
    while (start < items.length - 1 && offsets[start] + getItemEstimatedHeight(items[start]) < scrollTop) {
      start++;
    }

    let end = start;
    const viewBottom = scrollTop + containerHeight;
    while (end < items.length - 1 && offsets[end] < viewBottom) {
      end++;
    }

    const clampedStart = Math.max(0, start - overscan);
    const clampedEnd = Math.min(items.length - 1, end + overscan);

    return { startIndex: clampedStart, endIndex: clampedEnd };
  }, [items, offsets, scrollTop, containerHeight, getItemEstimatedHeight, overscan]);

  // Visible items slice
  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1).map((item, relIdx) => {
      const absoluteIndex = startIndex + relIdx;
      return {
        item,
        index: absoluteIndex,
        topOffset: offsets[absoluteIndex]
      };
    });
  }, [items, startIndex, endIndex, offsets]);

  // Callback to update measured height from DOM
  const updateMeasuredHeight = useCallback((id: string, height: number) => {
    if (height > 0) {
      const prev = heightMapRef.current.get(id);
      if (!prev || Math.abs(prev - height) > 2) {
        heightMapRef.current.set(id, height);
        setMeasuredHeightsVersion(v => v + 1);
      }
    }
  }, []);

  // Keyboard navigation handler for accordion items
  const handleKeyDown = (e: React.KeyboardEvent, index: number, faq: FAQItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggleExpand(faq.id);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextBtn = document.getElementById(`faq-button-${items[index + 1]?.id}`);
      nextBtn?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevBtn = document.getElementById(`faq-button-${items[index - 1]?.id}`);
      prevBtn?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstBtn = document.getElementById(`faq-button-${items[0]?.id}`);
      firstBtn?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastBtn = document.getElementById(`faq-button-${items[items.length - 1]?.id}`);
      lastBtn?.focus();
    }
  };

  const ui = faqService.getUIStrings(currentLanguage);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${totalHeight}px` }}
      role="region"
      aria-label="FAQ Virtualized List"
    >
      {visibleItems.map(({ item, index, topOffset }) => {
        const isExpanded = expandedIds.has(item.id);
        const { question, answer } = faqService.getLocalizedQA(item, currentLanguage);
        const category = FAQ_CATEGORIES.find(c => c.id === item.categoryId);
        const categoryName = category
          ? (currentLanguage === 'en' ? category.nameEn : currentLanguage === 'ur' ? category.nameUr : category.nameHi)
          : 'General';

        return (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              top: `${topOffset}px`,
              left: 0,
              right: 0
            }}
            ref={(node) => {
              if (node) {
                const rect = node.getBoundingClientRect();
                updateMeasuredHeight(item.id, rect.height);
              }
            }}
            className="pb-3"
          >
            <div
              id={`faq-${item.slug}`}
              className={`group bg-gradient-to-b from-[#0B1E2E] to-[#071320] border rounded-2xl transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'border-[#FFD54A] shadow-[0_10px_30px_rgba(255,213,74,0.15)] ring-1 ring-[#FFD54A]/30'
                  : 'border-white/10 hover:border-[#FFD54A]/50'
              }`}
            >
              {/* Accordion Header Button with Full WAI-ARIA Support */}
              <button
                id={`faq-button-${item.id}`}
                role="button"
                aria-expanded={isExpanded}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => onToggleExpand(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index, item)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFD54A] focus:ring-offset-2 focus:ring-offset-[#071320] rounded-2xl"
              >
                <div className="space-y-1.5 max-w-4xl">
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#004B23]/80 text-[#FFD54A] border border-[#FFD54A]/30">
                      {category ? getCategoryIcon(category.iconName) : <HelpCircle className="h-3 w-3 mr-1" />}
                      <span>{categoryName}</span>
                    </span>

                    {item.featured && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#FFD54A]/20 text-[#FFD54A]">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {ui.featuredBadge}
                      </span>
                    )}

                    <span className="text-[10px] font-mono text-gray-400">
                      {ui.updatedLabel}: {item.lastUpdated}
                    </span>
                  </div>

                  {/* Question Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-serif font-bold text-white group-hover:text-[#FFD54A] transition leading-snug">
                    {question}
                  </h3>
                </div>

                {/* Chevron Toggle Icon */}
                <div
                  className={`p-2 rounded-xl bg-white/5 group-hover:bg-[#FFD54A]/20 text-[#FFD54A] transition-transform duration-300 shrink-0 ${
                    isExpanded ? 'rotate-180 bg-[#FFD54A]/20' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              {/* Accordion Answer Content Container with Smooth Height Transition */}
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-button-${item.id}`}
                aria-hidden={!isExpanded}
                className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-5 sm:px-5 border-t border-gray-800/80 pt-4 space-y-4">
                    {/* Answer text */}
                    <div className="text-xs sm:text-sm text-gray-200 leading-relaxed space-y-2 font-sans">
                      <p>{answer}</p>
                    </div>

                    {/* Keywords tags */}
                    {item.keywords && item.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.keywords.map((kw, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 rounded-md text-gray-400 border border-white/5">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Interactive Toolbar */}
                    <div className="pt-3 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      {/* Helpful Vote & Copy Link */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onVote(item.id)}
                          className={`inline-flex items-center px-3 py-1.5 rounded-xl font-bold transition cursor-pointer text-xs ${
                            userVoted.has(item.id)
                              ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/40'
                              : 'bg-white/5 hover:bg-white/10 text-gray-300'
                          }`}
                        >
                          <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
                          <span>
                            {ui.helpfulBtn} ({(item.helpfulCount || 0) + (helpfulVotes[item.id] || 0)})
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onCopyLink(item.slug)}
                          className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold transition cursor-pointer text-xs"
                        >
                          <Copy className="h-3.5 w-3.5 mr-1.5" />
                          <span>{ui.copyLinkBtn}</span>
                        </button>
                      </div>

                      {/* Portal Section & Ask IQRA */}
                      <div className="flex items-center gap-2">
                        {item.tabLink && onNavigate && (
                          <button
                            type="button"
                            onClick={() => onNavigate(item.tabLink!)}
                            className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 border border-blue-500/30 font-bold transition cursor-pointer text-xs"
                          >
                            <span>{ui.openPortalBtn}</span>
                            <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => onAskIqra(question)}
                          className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#004B23] hover:bg-[#00381A] text-[#FFD54A] border border-[#FFD54A]/40 font-bold transition cursor-pointer text-xs"
                        >
                          <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                          <span>{ui.askIqraFaq}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
