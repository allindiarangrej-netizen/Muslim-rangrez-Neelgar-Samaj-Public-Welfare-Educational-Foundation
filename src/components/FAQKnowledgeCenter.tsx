import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Search, HelpCircle, ChevronDown, Sparkles, Copy, Check,
  ThumbsUp, ExternalLink, Settings, Plus, Trash2, Edit3, RefreshCw,
  Download, Building2, BookOpen, Gavel, UserCheck, GraduationCap,
  Landmark, Briefcase, HeartHandshake, ShieldCheck, FileText, X,
  Layers, ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { FAQItem, FAQ_CATEGORIES } from '../data/faqKnowledgeBase';
import { faqService } from '../services/faqService';
import { VirtualizedFAQList } from './VirtualizedFAQList';

interface FAQKnowledgeCenterProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
  className?: string;
}

export default function FAQKnowledgeCenter({
  currentLanguage,
  onNavigate,
  className = ''
}: FAQKnowledgeCenterProps) {
  // Local reactive dataset state synchronized with faqService
  const [faqs, setFaqs] = useState<FAQItem[]>(() => faqService.getAll());

  // Subscribe to faqService changes
  useEffect(() => {
    const unsubscribe = faqService.subscribe((updatedFaqs) => {
      setFaqs([...updatedFaqs]);
    });
    return () => unsubscribe();
  }, []);

  // UI Localized strings service
  const ui = faqService.getUIStrings(currentLanguage);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['faq-soc-1', 'faq-maha-1', 'faq-mem-1']));
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Toast & Interaction States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [userVoted, setUserVoted] = useState<Set<string>>(new Set());

  // Admin Modal States
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Form state for Add/Edit
  const [formData, setFormData] = useState<Partial<FAQItem>>({
    categoryId: 'society-registration',
    qEn: '',
    qHi: '',
    qUr: '',
    aEn: '',
    aHi: '',
    aUr: '',
    keywords: [],
    featured: false,
    tabLink: ''
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered FAQs list using faqService
  const filteredList = useMemo(() => {
    return faqService.getFiltered(currentLanguage, searchQuery, selectedCategory, featuredOnly);
  }, [faqs, searchQuery, selectedCategory, featuredOnly, currentLanguage]);

  // Search Suggestions (top 5 matching question titles)
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return faqs.filter(f => {
      const { question } = faqService.getLocalizedQA(f, currentLanguage);
      return question.toLowerCase().includes(q) || f.keywords.some(k => k.toLowerCase().includes(q));
    }).slice(0, 5);
  }, [faqs, searchQuery, currentLanguage]);

  // Inject JSON-LD Schema into DOM head for SEO dynamically
  useEffect(() => {
    const scriptId = 'faq-jsonld-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = faqService.getSchemaJson(filteredList, currentLanguage);

    return () => {
      // Cleanup script tag on unmount
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [filteredList, currentLanguage]);

  // Accordion toggle helpers
  const toggleExpand = useCallback((id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const expandAll = () => {
    setExpandedIds(new Set(filteredList.map(f => f.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  // Handle Voting
  const handleVote = (id: string) => {
    if (userVoted.has(id)) {
      triggerToast(ui.alreadyVoted);
      return;
    }
    setHelpfulVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setUserVoted(prev => new Set(prev).add(id));
    triggerToast(ui.votedThanks);
  };

  // Copy Direct Link
  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}${window.location.pathname}#faq-${slug}`;
    navigator.clipboard.writeText(url);
    triggerToast(ui.linkCopied);
  };

  // Trigger IQRA AI Assistant for specific FAQ query
  const handleAskIqra = (question: string) => {
    window.dispatchEvent(new CustomEvent('open-iqra-ai', { detail: { query: question } }));
    triggerToast(ui.iqraOpeningToast);
  };

  // Helper for Category Icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="h-4 w-4" />;
      case 'BookOpen': return <BookOpen className="h-4 w-4" />;
      case 'Gavel': return <Gavel className="h-4 w-4" />;
      case 'UserCheck': return <UserCheck className="h-4 w-4" />;
      case 'GraduationCap': return <GraduationCap className="h-4 w-4" />;
      case 'Landmark': return <Landmark className="h-4 w-4" />;
      case 'Briefcase': return <Briefcase className="h-4 w-4" />;
      case 'HeartHandshake': return <HeartHandshake className="h-4 w-4" />;
      case 'ShieldCheck': return <ShieldCheck className="h-4 w-4" />;
      case 'FileText': return <FileText className="h-4 w-4" />;
      case 'Sparkles': return <Sparkles className="h-4 w-4" />;
      default: return <HelpCircle className="h-4 w-4" />;
    }
  };

  // Handle Admin Add / Edit Submit
  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.qEn || !formData.qHi || !formData.aEn || !formData.aHi) {
      alert('Please fill out English and Hindi questions and answers.');
      return;
    }

    const keywordsArr = typeof formData.keywords === 'string'
      ? (formData.keywords as string).split(',').map(s => s.trim()).filter(Boolean)
      : formData.keywords || [];

    if (editingFaq) {
      // Edit mode
      const updated = faqs.map(f => f.id === editingFaq.id ? {
        ...f,
        ...formData,
        keywords: keywordsArr,
        lastUpdated: new Date().toISOString().split('T')[0]
      } as FAQItem : f);
      faqService.saveAll(updated);
      triggerToast(ui.faqUpdatedToast);
    } else {
      // Create mode
      const slug = (formData.qEn || 'faq')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const newFaqItem: FAQItem = {
        id: `faq-custom-${Date.now()}`,
        slug: slug || `faq-${Date.now()}`,
        categoryId: formData.categoryId || 'society-registration',
        qEn: formData.qEn || '',
        qHi: formData.qHi || '',
        qUr: formData.qUr || formData.qHi || '',
        aEn: formData.aEn || '',
        aHi: formData.aHi || '',
        aUr: formData.aUr || formData.aHi || '',
        keywords: keywordsArr,
        lastUpdated: new Date().toISOString().split('T')[0],
        featured: formData.featured || false,
        tabLink: formData.tabLink || '',
        viewCount: 0,
        helpfulCount: 0
      };
      faqService.saveAll([newFaqItem, ...faqs]);
      triggerToast(ui.faqCreatedToast);
    }

    setEditingFaq(null);
    setIsAddingNew(false);
  };

  // Delete FAQ
  const handleDeleteFaq = (id: string) => {
    if (confirm(ui.confirmDelete)) {
      const updated = faqs.filter(f => f.id !== id);
      faqService.saveAll(updated);
      triggerToast(ui.faqDeletedToast);
    }
  };

  // Reset to default dataset
  const handleResetDefaults = () => {
    if (confirm(ui.confirmReset)) {
      faqService.resetDefaults();
      triggerToast(ui.faqResetToast);
    }
  };

  const localizedCategories = faqService.getCategories(currentLanguage);

  return (
    <div className={`w-full bg-[#071320] text-white py-12 px-4 sm:px-6 lg:px-8 relative ${className}`} id="faq_knowledge_center">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] px-5 py-3 rounded-2xl shadow-2xl font-bold text-xs sm:text-sm flex items-center gap-2 animate-bounce">
          <Check className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Enterprise Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#004B23] via-[#0B2519] to-[#071320] p-8 sm:p-10 border border-[#FFD54A]/30 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#FFD54A]/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#FFD54A]/20 text-[#FFD54A] border border-[#FFD54A]/40">
                  <Sparkles className="h-3 w-3 mr-1.5" />
                  {ui.badgeAi}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {ui.badgeVerified}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
                {ui.title}
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {ui.subtitle}
              </p>
            </div>

            {/* Quick Action Button & Stats Counter */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFD54A] border border-[#FFD54A]/40 text-xs font-bold transition shadow-lg cursor-pointer"
              >
                <Settings className="h-4 w-4 mr-2" />
                {ui.adminBtn}
              </button>

              <div className="bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-right">
                <span className="text-xl sm:text-2xl font-serif font-extrabold text-[#FFD54A] block">
                  {faqs.length}+
                </span>
                <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">
                  {ui.indexedTopics}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligent Search Bar with Live Suggestions */}
        <div className="relative z-30">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-[#FFD54A]">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={ui.searchPlaceholder}
              className="w-full bg-[#0B1E2E] border-2 border-white/20 focus:border-[#FFD54A] rounded-2xl pl-12 sm:pl-14 pr-12 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none transition shadow-xl"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Search Instant Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0B132B] border-2 border-[#FFD54A]/50 rounded-2xl shadow-2xl overflow-hidden z-50">
              <div className="p-2 border-b border-gray-800 text-[10px] font-mono text-[#FFD54A] font-bold uppercase tracking-wider px-4 flex justify-between">
                <span>{ui.instantMatches}</span>
                <span>{ui.pressEscToClose}</span>
              </div>
              <div className="divide-y divide-gray-800">
                {suggestions.map((item) => {
                  const { question } = faqService.getLocalizedQA(item, currentLanguage);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSearchQuery(question);
                        setShowSuggestions(false);
                        setExpandedIds(new Set([item.id]));
                      }}
                      className="w-full text-left p-3 sm:p-4 hover:bg-white/10 transition flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-[#FFD54A] transition line-clamp-1">
                        {question}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#FFD54A] shrink-0 ml-2" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Category Pill Filter Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <span className="text-xs font-mono font-bold text-[#FFD54A] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              {ui.categoriesLabel}
            </span>

            {/* Controls Right */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFeaturedOnly(!featuredOnly)}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition cursor-pointer flex items-center gap-1 ${
                  featuredOnly
                    ? 'bg-[#FFD54A] text-emerald-950 border-[#FFD54A]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
                }`}
              >
                <Sparkles className="h-3 w-3" />
                {ui.featuredOnly}
              </button>

              <button
                type="button"
                onClick={expandAll}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition cursor-pointer"
              >
                {ui.expandAll}
              </button>

              <button
                type="button"
                onClick={collapseAll}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition cursor-pointer"
              >
                {ui.collapseAll}
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none custom-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-[#004B23] text-[#FFD54A] border border-[#FFD54A] shadow-md'
                  : 'bg-[#0B1E2E] text-gray-300 border border-white/10 hover:border-white/30'
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>{ui.allQuestions}</span>
              <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-white/20">
                {faqs.length}
              </span>
            </button>

            {localizedCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#004B23] text-[#FFD54A] border border-[#FFD54A] shadow-md'
                      : 'bg-[#0B1E2E] text-gray-300 border border-white/10 hover:border-white/30'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.name}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-white/20">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Summary */}
        <div className="flex justify-between items-center text-xs text-gray-400 font-mono pt-1">
          <span>
            {ui.showingCount(filteredList.length, faqs.length)}
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-[#FFD54A] underline hover:text-white cursor-pointer"
            >
              {ui.clearSearch}
            </button>
          )}
        </div>

        {/* Virtualized Accordion List Component */}
        {filteredList.length === 0 ? (
          <div className="bg-[#0B1E2E] border-2 border-dashed border-gray-700 rounded-3xl p-10 text-center space-y-4">
            <HelpCircle className="h-12 w-12 text-gray-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-200">
              {ui.noResultsTitle}
            </h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              {ui.noResultsSubtitle}
            </p>
            <button
              type="button"
              onClick={() => handleAskIqra(searchQuery || 'Help with society questions')}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#004B23] text-[#FFD54A] border border-[#FFD54A] font-bold text-xs shadow-lg transition cursor-pointer"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {ui.askIqraBtn}
            </button>
          </div>
        ) : (
          <VirtualizedFAQList
            items={filteredList}
            currentLanguage={currentLanguage}
            expandedIds={expandedIds}
            onToggleExpand={toggleExpand}
            userVoted={userVoted}
            helpfulVotes={helpfulVotes}
            onVote={handleVote}
            onCopyLink={handleCopyLink}
            onAskIqra={handleAskIqra}
            onNavigate={onNavigate}
          />
        )}

      </div>

      {/* Admin Panel Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0B132B] border-2 border-[#FFD54A] rounded-3xl p-6 sm:p-8 max-w-3xl w-full text-white space-y-6 shadow-2xl relative my-8">
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <h3 className="text-xl font-serif font-bold text-[#FFD54A] flex items-center gap-2">
                <Settings className="h-5 w-5" />
                {ui.adminModalTitle}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAdminOpen(false);
                  setIsAddingNew(false);
                  setEditingFaq(null);
                }}
                className="text-gray-400 hover:text-white text-2xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Quick Actions Header */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-gray-800 pb-4">
              <button
                type="button"
                onClick={() => {
                  setIsAddingNew(true);
                  setEditingFaq(null);
                  setFormData({
                    categoryId: 'society-registration',
                    qEn: '',
                    qHi: '',
                    qUr: '',
                    aEn: '',
                    aHi: '',
                    aUr: '',
                    keywords: [],
                    featured: false,
                    tabLink: ''
                  });
                }}
                className="px-4 py-2 bg-[#FFD54A] text-emerald-950 font-bold text-xs rounded-xl shadow transition cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="h-4 w-4" />
                {ui.addNewBtn}
              </button>

              <button
                type="button"
                onClick={() => {
                  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(faqs, null, 2));
                  const downloadAnchor = document.createElement('a');
                  downloadAnchor.setAttribute("href", dataStr);
                  downloadAnchor.setAttribute("download", `rangrez_faq_export_${Date.now()}.json`);
                  document.body.appendChild(downloadAnchor);
                  downloadAnchor.click();
                  downloadAnchor.remove();
                  triggerToast('Exported FAQ dataset to JSON file');
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-200 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <Download className="h-4 w-4" />
                {ui.exportJsonBtn}
              </button>

              <button
                type="button"
                onClick={handleResetDefaults}
                className="px-4 py-2 bg-red-900/40 hover:bg-red-900/60 text-red-200 border border-red-500/30 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="h-4 w-4" />
                {ui.resetDefaultsBtn}
              </button>
            </div>

            {/* Form for Add/Edit */}
            {(isAddingNew || editingFaq) ? (
              <form onSubmit={handleSaveFaq} className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="text-sm font-bold text-[#FFD54A]">
                  {editingFaq ? ui.editModalTitle : ui.createModalTitle}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">{ui.categorySelectLabel}</label>
                    <select
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                      className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs font-bold text-white focus:outline-none focus:border-[#FFD54A]"
                    >
                      {FAQ_CATEGORIES.map(c => (
                        <option key={c.id} value={c.id} className="bg-[#0B132B]">{c.nameEn}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">{ui.tabLinkInputLabel}</label>
                    <input
                      type="text"
                      value={formData.tabLink || ''}
                      onChange={(e) => setFormData({ ...formData, tabLink: e.target.value })}
                      placeholder="e.g. society-registration"
                      className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                    />
                  </div>
                </div>

                {/* English Q&A */}
                <div className="space-y-2 border-t border-gray-800 pt-3">
                  <span className="text-xs font-bold text-[#FFD54A]">{ui.englishSectionTitle}</span>
                  <input
                    type="text"
                    required
                    value={formData.qEn || ''}
                    onChange={(e) => setFormData({ ...formData, qEn: e.target.value })}
                    placeholder="Question (English)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                  <textarea
                    required
                    rows={3}
                    value={formData.aEn || ''}
                    onChange={(e) => setFormData({ ...formData, aEn: e.target.value })}
                    placeholder="Answer (English)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                </div>

                {/* Hindi Q&A */}
                <div className="space-y-2 border-t border-gray-800 pt-3">
                  <span className="text-xs font-bold text-[#FFD54A]">{ui.hindiSectionTitle}</span>
                  <input
                    type="text"
                    required
                    value={formData.qHi || ''}
                    onChange={(e) => setFormData({ ...formData, qHi: e.target.value })}
                    placeholder="प्रश्न (हिंदी)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                  <textarea
                    required
                    rows={3}
                    value={formData.aHi || ''}
                    onChange={(e) => setFormData({ ...formData, aHi: e.target.value })}
                    placeholder="उत्तर (हिंदी)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                </div>

                {/* Urdu Q&A */}
                <div className="space-y-2 border-t border-gray-800 pt-3">
                  <span className="text-xs font-bold text-[#FFD54A]">{ui.urduSectionTitle}</span>
                  <input
                    type="text"
                    value={formData.qUr || ''}
                    onChange={(e) => setFormData({ ...formData, qUr: e.target.value })}
                    placeholder="سوال (اردو)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                  <textarea
                    rows={2}
                    value={formData.aUr || ''}
                    onChange={(e) => setFormData({ ...formData, aUr: e.target.value })}
                    placeholder="جواب (اردو)"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                  />
                </div>

                {/* Keywords & Featured */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-800 pt-3">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">{ui.keywordsLabel}</label>
                    <input
                      type="text"
                      value={Array.isArray(formData.keywords) ? formData.keywords.join(', ') : formData.keywords || ''}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value as any })}
                      placeholder="e.g. registration, certificate, 28332"
                      className="w-full bg-black/50 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#FFD54A]"
                    />
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.featured || false}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4 text-[#FFD54A] bg-black border-gray-700 rounded focus:ring-0"
                      />
                      <span className="text-xs font-bold text-white">{ui.markFeaturedLabel}</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingFaq(null);
                    }}
                    className="px-4 py-2 bg-gray-800 text-gray-300 text-xs font-bold rounded-xl"
                  >
                    {ui.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#FFD54A] text-emerald-950 text-xs font-extrabold uppercase rounded-xl shadow"
                  >
                    {ui.saveBtn}
                  </button>
                </div>
              </form>
            ) : (
              /* Existing FAQs Table / List */
              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                <span className="text-xs font-bold text-gray-400 block uppercase">
                  Existing FAQ Repository ({faqs.length} entries)
                </span>
                {faqs.map(item => (
                  <div key={item.id} className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 hover:bg-white/10 transition">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[9px] font-mono bg-emerald-900/60 text-emerald-300 rounded border border-emerald-500/30">
                          {item.categoryId}
                        </span>
                        {item.featured && <span className="text-[9px] text-[#FFD54A] font-bold">★ FEATURED</span>}
                      </div>
                      <p className="text-xs font-bold text-white line-clamp-1">{item.qEn}</p>
                      <p className="text-[11px] text-gray-400 line-clamp-1">{item.qHi}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingFaq(item);
                          setIsAddingNew(false);
                          setFormData({ ...item });
                        }}
                        className="p-1.5 rounded-lg bg-blue-900/40 text-blue-300 hover:bg-blue-800/60 transition cursor-pointer"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteFaq(item.id)}
                        className="p-1.5 rounded-lg bg-red-900/40 text-red-300 hover:bg-red-800/60 transition cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
