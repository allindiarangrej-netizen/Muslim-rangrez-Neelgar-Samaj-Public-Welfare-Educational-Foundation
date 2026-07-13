import React, { useState, useEffect, useMemo } from 'react';
import { 
  Scale, ShieldAlert, FileText, Search, ExternalLink, Info, AlertTriangle, 
  ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Bookmark, 
  Printer, HelpCircle, BookOpen, Clock, Award, Phone, Globe, Copy, Share2, Sparkles, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import {
  CONSTITUTION_TIMELINE,
  KNOW_YOUR_RIGHTS_QUIZ,
  FUNDAMENTAL_RIGHTS,
  FUNDAMENTAL_DUTIES,
  DIRECTIVE_PRINCIPLES,
  LEGAL_PROTECTIONS,
  MINORITY_RIGHTS,
  IMPORTANT_LAWS,
  IMPORTANT_INSTITUTIONS,
  LEGAL_GLOSSARY,
  TRANSLATIONS
} from '../data/legalData';

interface LegalAwarenessProps {
  currentLanguage: Language;
  defaultTab?: string;
}

export default function LegalAwareness({ currentLanguage, defaultTab = 'rights' }: LegalAwarenessProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<any>(defaultTab || 'rights');

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [quizAnswersRevealed, setQuizAnswersRevealed] = useState<Record<string, boolean>>({});
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('legal_rights_bookmarks');
      if (stored) {
        setBookmarks(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading bookmarks', e);
    }
  }, []);

  // Save bookmarks
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = bookmarks.includes(id)
      ? bookmarks.filter(b => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    try {
      localStorage.setItem('legal_rights_bookmarks', JSON.stringify(updated));
    } catch (err) {
      console.error('Error saving bookmarks', err);
    }
  };

  const toggleRevealQuiz = (id: string) => {
    setQuizAnswersRevealed(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Structured Data (JSON-LD) for SEO and accessibility
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": TRANSLATIONS.title[currentLanguage],
      "description": TRANSLATIONS.subtitle[currentLanguage],
      "publisher": {
        "@type": "Organization",
        "name": "Fundamental Rights, Legal Awareness & Constitutional Protection Hub India"
      }
    };
    const scriptId = 'legal-awareness-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(structuredData);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [currentLanguage]);

  // Search logic covering articles, acts, and topic descriptions
  const filteredRights = useMemo(() => {
    return FUNDAMENTAL_RIGHTS.filter(r => {
      if (showBookmarksOnly && !bookmarks.includes(r.id)) return false;
      const query = searchQuery.toLowerCase();
      if (!query) return true;
      return (
        r.articles.toLowerCase().includes(query) ||
        r.title.en.toLowerCase().includes(query) ||
        r.title.hi.toLowerCase().includes(query) ||
        r.title.ur.toLowerCase().includes(query) ||
        r.explanation.en.toLowerCase().includes(query) ||
        r.explanation.hi.toLowerCase().includes(query) ||
        r.explanation.ur.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, bookmarks, showBookmarksOnly]);

  const filteredProtections = useMemo(() => {
    return LEGAL_PROTECTIONS.filter(lp => {
      if (showBookmarksOnly && !bookmarks.includes(lp.id)) return false;
      const query = searchQuery.toLowerCase();
      if (!query) return true;
      return (
        lp.title.en.toLowerCase().includes(query) ||
        lp.title.hi.toLowerCase().includes(query) ||
        lp.title.ur.toLowerCase().includes(query) ||
        lp.desc.en.toLowerCase().includes(query) ||
        lp.desc.hi.toLowerCase().includes(query) ||
        lp.desc.ur.toLowerCase().includes(query) ||
        lp.authority.en.toLowerCase().includes(query) ||
        lp.authority.hi.toLowerCase().includes(query) ||
        lp.authority.ur.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, bookmarks, showBookmarksOnly]);

  const filteredLaws = useMemo(() => {
    return IMPORTANT_LAWS.filter(law => {
      if (showBookmarksOnly && !bookmarks.includes(law.id)) return false;
      const query = searchQuery.toLowerCase();
      if (!query) return true;
      return (
        law.title.en.toLowerCase().includes(query) ||
        law.title.hi.toLowerCase().includes(query) ||
        law.title.ur.toLowerCase().includes(query) ||
        law.desc.en.toLowerCase().includes(query) ||
        law.desc.hi.toLowerCase().includes(query) ||
        law.desc.ur.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, bookmarks, showBookmarksOnly]);

  const filteredInstitutions = useMemo(() => {
    return IMPORTANT_INSTITUTIONS.filter(inst => {
      if (showBookmarksOnly && !bookmarks.includes(inst.id)) return false;
      const query = searchQuery.toLowerCase();
      if (!query) return true;
      return (
        inst.title.en.toLowerCase().includes(query) ||
        inst.title.hi.toLowerCase().includes(query) ||
        inst.title.ur.toLowerCase().includes(query) ||
        inst.role.en.toLowerCase().includes(query) ||
        inst.role.hi.toLowerCase().includes(query) ||
        inst.role.ur.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, bookmarks, showBookmarksOnly]);

  const filteredGlossary = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return LEGAL_GLOSSARY;
    return LEGAL_GLOSSARY.filter(g => (
      g.term.en.toLowerCase().includes(query) ||
      g.term.hi.toLowerCase().includes(query) ||
      g.term.ur.toLowerCase().includes(query) ||
      g.definition.en.toLowerCase().includes(query) ||
      g.definition.hi.toLowerCase().includes(query) ||
      g.definition.ur.toLowerCase().includes(query)
    ));
  }, [searchQuery]);

  const isRtl = currentLanguage === 'ur';

  // Quick emergency helplines styled with pristine layouts
  const EMERGENCY_HELPLINES_LIST = [
    { name: { en: 'National Legal Aid Helpline', hi: 'राष्ट्रीय कानूनी सहायता हेल्पलाइन', ur: 'قومی قانونی امدادی ہیلپ لائن' }, phone: '15100', site: 'https://nalsa.gov.in' },
    { name: { en: 'National Cyber Crime Helpline', hi: 'राष्ट्रीय साइबर अपराध हेल्पलाइन', ur: 'قومی سائبر کرائم ہیلپ لائن' }, phone: '1930', site: 'https://cybercrime.gov.in' },
    { name: { en: 'Women Helpline Number', hi: 'महिला हेल्पलाइन नंबर', ur: 'خواتین کی ہیلپ لائن' }, phone: '181', site: 'https://ncw.nic.in' },
    { name: { en: 'Child Helpline Number', hi: 'चाइल्ड हेल्पलाइन नंबर', ur: 'بچوں کی ہیلپ لائن' }, phone: '1098', site: 'https://www.ncpcr.gov.in' },
    { name: { en: 'National Human Rights Commission', hi: 'राष्ट्रीय मानव अधिकार आयोग', ur: 'قومی حقوقِ انسانی کمیشن' }, phone: '14433', site: 'https://nhrc.nic.in' },
    { name: { en: 'National Commission for Minorities', hi: 'राष्ट्रीय अल्पसंख्यक आयोग', ur: 'قومی کمیشن برائے اقلیتی امور' }, phone: '1800110088', site: 'https://ncm.nic.in' }
  ];

  return (
    <div className={`w-full bg-[#faf9f6] text-stone-800 ${isRtl ? 'rtl-active' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Premium Elegant Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-mono tracking-wider border border-amber-500/20 mb-4"
          >
            <Scale className="w-3.5 h-3.5 animate-pulse" />
            <span>CONSTITUTION OF INDIA • भारत का संविधान • آئینِ ہند</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 ${isRtl ? 'leading-normal' : ''}`}
          >
            {TRANSLATIONS.title[currentLanguage]}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed font-sans"
          >
            {TRANSLATIONS.subtitle[currentLanguage]}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Controls Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 w-4 tracking-tight" />
            <input 
              type="text" 
              placeholder={TRANSLATIONS.searchPlaceholder[currentLanguage]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-10 pr-4 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                showBookmarksOnly 
                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm' 
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Star className={`w-4 h-4 ${showBookmarksOnly ? 'fill-white' : ''}`} />
              <span>{TRANSLATIONS.bookmarksTitle[currentLanguage]} ({bookmarks.length})</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 text-sm font-medium transition-all"
            >
              <Printer className="w-4 h-4 text-stone-500" />
              <span>{TRANSLATIONS.printBtn[currentLanguage]}</span>
            </button>
          </div>
        </div>

        {/* Interactive Constitution Timeline Section */}
        <div className="mb-12 bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-md border-b-4 border-amber-500">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white">{TRANSLATIONS.timelineTitle[currentLanguage]}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {CONSTITUTION_TIMELINE.map((evt, idx) => (
                <div key={idx} className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/60 hover:border-amber-500/40 transition-all relative">
                  <div className="text-amber-400 font-mono text-xl font-bold mb-2">{evt.year}</div>
                  <h3 className="font-serif text-base font-semibold text-white mb-2">{evt.title[currentLanguage]}</h3>
                  <p className="text-stone-300 text-xs leading-relaxed">{evt.desc[currentLanguage]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive "Know Your Rights" Quiz Game */}
        <div className="mb-12 bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-amber-950">{TRANSLATIONS.quizTitle[currentLanguage]}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KNOW_YOUR_RIGHTS_QUIZ.map((q) => (
              <div key={q.id} className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Scenario {q.id}</span>
                  </div>
                  <p className="text-stone-600 text-xs italic mb-4">"{q.scenario[currentLanguage]}"</p>
                  <h4 className="font-sans text-sm font-semibold text-stone-900 mb-4">{q.question[currentLanguage]}</h4>
                </div>

                <div>
                  <AnimatePresence>
                    {quizAnswersRevealed[q.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-stone-50 rounded-xl p-4 border border-stone-200 mb-4 overflow-hidden"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <div className="text-xs leading-relaxed text-stone-700">
                            <p className="mb-2">{q.answer[currentLanguage]}</p>
                            <p className="font-mono text-[10px] text-stone-500">
                              <span className="font-bold">{TRANSLATIONS.lawBasisLabel[currentLanguage]}</span> {q.lawBasis[currentLanguage]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleRevealQuiz(q.id)}
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>{TRANSLATIONS.revealAnswer[currentLanguage]}</span>
                    {quizAnswersRevealed[q.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-2 mb-8 overflow-x-auto no-scrollbar">
          {[
            { id: 'rights', label: TRANSLATIONS.scTab[currentLanguage], icon: Scale },
            { id: 'duties', label: TRANSLATIONS.dutiesTab[currentLanguage], icon: Award },
            { id: 'dpsp', label: TRANSLATIONS.dpspTab[currentLanguage], icon: FileText },
            { id: 'protections', label: TRANSLATIONS.protectionsTab[currentLanguage], icon: ShieldAlert },
            { id: 'minorities', label: TRANSLATIONS.minoritiesTab[currentLanguage], icon: BookOpen },
            { id: 'laws', label: TRANSLATIONS.lawsTab[currentLanguage], icon: Info },
            { id: 'rti', label: currentLanguage === 'en' ? 'RTI (Right to Info)' : currentLanguage === 'ur' ? 'حق معلومات (RTI)' : 'सूचना का अधिकार (RTI)', icon: FileText },
            { id: 'citizen_rights', label: currentLanguage === 'en' ? 'Citizen Rights' : currentLanguage === 'ur' ? 'شہری حقوق' : 'नागरिक अधिकार', icon: ShieldAlert },
            { id: 'institutions', label: TRANSLATIONS.institutionsTab[currentLanguage], icon: ExternalLink },
            { id: 'glossary', label: TRANSLATIONS.glossaryTab[currentLanguage], icon: HelpCircle }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setShowBookmarksOnly(false);
                }}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
                  isTabActive
                    ? 'border-amber-600 text-amber-950 font-semibold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isTabActive ? 'text-amber-600' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Rendering */}
        <div className="min-h-[400px]">
          
          {/* 1. Fundamental Rights */}
          {activeTab === 'rights' && (
            <div className="space-y-6">
              {filteredRights.length === 0 ? (
                <div className="text-center py-12 text-stone-500 bg-white rounded-2xl border border-stone-200">
                  {TRANSLATIONS.noBookmarks[currentLanguage]}
                </div>
              ) : (
                filteredRights.map((r) => {
                  const isExpanded = expandedCard === r.id;
                  const isBookmarked = bookmarks.includes(r.id);
                  return (
                    <div 
                      key={r.id} 
                      className="bg-white rounded-2xl border border-stone-200/80 hover:border-amber-500/40 transition-all overflow-hidden shadow-sm hover:shadow-md"
                    >
                      <div 
                        onClick={() => setExpandedCard(isExpanded ? null : r.id)}
                        className="p-5 sm:p-6 flex justify-between items-start gap-4 cursor-pointer select-none"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                              {r.articles}
                            </span>
                            <span className="text-xs text-amber-700 font-semibold">
                              {TRANSLATIONS.scTab[currentLanguage]}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">{r.title[currentLanguage]}</h3>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={(e) => toggleBookmark(r.id, e)}
                            className="p-2 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-stone-50 transition-all"
                            title={TRANSLATIONS.bookmarkButtonText[currentLanguage]}
                          >
                            <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                          </button>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-stone-500" /> : <ChevronDown className="w-5 h-5 text-stone-500" />}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="px-5 pb-6 sm:px-6 border-t border-stone-100 pt-5 space-y-4 font-sans text-stone-700 text-sm leading-relaxed">
                          <p className="text-stone-800 font-medium">{r.explanation[currentLanguage]}</p>
                          
                          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60">
                            <h4 className="font-semibold text-xs text-stone-900 mb-1 flex items-center gap-1">
                              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                              <span>{TRANSLATIONS.scInterpretationsLabel[currentLanguage]}</span>
                            </h4>
                            <p className="text-stone-600 text-xs italic">{r.scInterpretations[currentLanguage]}</p>
                          </div>

                          <div className="bg-amber-50/40 rounded-xl p-4 border border-amber-100">
                            <h4 className="font-semibold text-xs text-amber-900 mb-1 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                              <span>{TRANSLATIONS.exampleLabel[currentLanguage]}</span>
                            </h4>
                            <p className="text-amber-950 text-xs">{r.example[currentLanguage]}</p>
                          </div>

                          {/* Interactive FAQ Sub-Card */}
                          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60">
                            <h4 className="font-semibold text-xs text-stone-900 mb-1 flex items-center gap-1">
                              <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
                              <span>Q: {r.faq.q[currentLanguage]}</span>
                            </h4>
                            <p className="text-stone-600 text-xs mt-1">A: {r.faq.a[currentLanguage]}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* 2. Fundamental Duties */}
          {activeTab === 'duties' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <span className="text-xs font-mono font-bold text-amber-700">{FUNDAMENTAL_DUTIES.article}</span>
                <p className="text-stone-700 font-serif text-base sm:text-lg leading-relaxed mt-1">
                  {FUNDAMENTAL_DUTIES.explanation[currentLanguage]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FUNDAMENTAL_DUTIES.duties.map((duty, idx) => (
                  <div key={idx} className="flex gap-3 bg-stone-50 rounded-xl p-4 border border-stone-200/60">
                    <span className="font-mono text-amber-600 font-bold text-sm">{String(idx + 1).padStart(2, '0')}.</span>
                    <p className="text-stone-700 text-xs leading-relaxed font-sans">{duty[currentLanguage]}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-serif text-base font-semibold text-stone-900 mb-4">{TRANSLATIONS.exampleLabel[currentLanguage]}</h4>
                <div className="space-y-3">
                  {FUNDAMENTAL_DUTIES.examples.map((ex, idx) => (
                    <div key={idx} className="bg-amber-50/40 rounded-xl p-4 border border-amber-100 text-stone-800 text-xs leading-relaxed">
                      {ex[currentLanguage]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. Directive Principles (DPSP) */}
          {activeTab === 'dpsp' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <p className="text-stone-700 font-serif text-base leading-relaxed">
                {DIRECTIVE_PRINCIPLES.purpose[currentLanguage]}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DIRECTIVE_PRINCIPLES.importantArticles.map((art, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-stone-200/60 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-stone-200/80 rounded text-stone-600 mb-2 inline-block">
                        {art.article}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-stone-900 mb-2">{art.title[currentLanguage]}</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{art.desc[currentLanguage]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50/40 rounded-xl p-4 border border-amber-100 text-stone-800 text-xs leading-relaxed">
                <p className="font-semibold mb-1">Citizen Welfare Schemes:</p>
                {DIRECTIVE_PRINCIPLES.benefits[currentLanguage]}
              </div>

              {/* Differences Table */}
              <div className="pt-6 border-t border-stone-100">
                <h4 className="font-serif text-base font-semibold text-stone-900 mb-4">
                  Difference between Fundamental Rights & Directive Principles
                </h4>
                <div className="overflow-x-auto border border-stone-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-serif">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Fundamental Rights</th>
                        <th className="p-3">Directive Principles (DPSP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-150 text-stone-600">
                      {DIRECTIVE_PRINCIPLES.differences.map((diff, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="p-3 font-semibold text-stone-900">{diff.feature[currentLanguage]}</td>
                          <td className="p-3">{diff.fr[currentLanguage]}</td>
                          <td className="p-3">{diff.dpsp[currentLanguage]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 4. Legal Protections */}
          {activeTab === 'protections' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProtections.length === 0 ? (
                <div className="col-span-2 text-center py-12 text-stone-500 bg-white rounded-2xl border border-stone-200">
                  {TRANSLATIONS.noBookmarks[currentLanguage]}
                </div>
              ) : (
                filteredProtections.map((lp) => {
                  const isBookmarked = bookmarks.includes(lp.id);
                  return (
                    <div 
                      key={lp.id} 
                      className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h4 className="font-serif text-base font-semibold text-stone-900">{lp.title[currentLanguage]}</h4>
                          <button
                            onClick={(e) => toggleBookmark(lp.id, e)}
                            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-stone-50 transition-all shrink-0"
                          >
                            <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                          </button>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed mb-4">{lp.desc[currentLanguage]}</p>
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-500 font-mono">
                        <span>Ref: {lp.authority[currentLanguage]}</span>
                        <span className="text-stone-400">ID: {lp.id}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* 5. Rights of Religious Minorities */}
          {activeTab === 'minorities' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {TRANSLATIONS.rightsOfMinoritiesTitle[currentLanguage]}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  {TRANSLATIONS.rightsOfMinoritiesSub[currentLanguage]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MINORITY_RIGHTS.map((mr, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-stone-200/60 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-stone-200 rounded text-amber-800 mb-3 inline-block">
                        {mr.article}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-stone-900 mb-2">{mr.title[currentLanguage]}</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{mr.desc[currentLanguage]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Important Indian Laws */}
          {activeTab === 'laws' && (
            <div className="space-y-6">
              {filteredLaws.length === 0 ? (
                <div className="text-center py-12 text-stone-500 bg-white rounded-2xl border border-stone-200">
                  {TRANSLATIONS.noBookmarks[currentLanguage]}
                </div>
              ) : (
                filteredLaws.map((law) => {
                  const isBookmarked = bookmarks.includes(law.id);
                  return (
                    <div 
                      key={law.id} 
                      className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h4 className="font-serif text-lg font-bold text-stone-900">{law.title[currentLanguage]}</h4>
                        <button
                          onClick={(e) => toggleBookmark(law.id, e)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-stone-50 transition-all shrink-0"
                        >
                          <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </div>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">{law.desc[currentLanguage]}</p>
                      
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-150/80 text-xs text-stone-700 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-stone-900">Key Feature: </span>
                          <span>{law.keyBenefit[currentLanguage]}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* 7. Important Institutions */}
          {activeTab === 'institutions' && (
            <div className="space-y-6">
              {filteredInstitutions.length === 0 ? (
                <div className="text-center py-12 text-stone-500 bg-white rounded-2xl border border-stone-200">
                  {TRANSLATIONS.noBookmarks[currentLanguage]}
                </div>
              ) : (
                filteredInstitutions.map((inst) => {
                  const isBookmarked = bookmarks.includes(inst.id);
                  return (
                    <div 
                      key={inst.id} 
                      className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <h4 className="font-serif text-lg font-bold text-stone-900">{inst.title[currentLanguage]}</h4>
                        <button
                          onClick={(e) => toggleBookmark(inst.id, e)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-stone-50 transition-all shrink-0"
                        >
                          <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm leading-relaxed">
                        <div className="bg-stone-50 rounded-xl p-4 border border-stone-150/80">
                          <p className="font-bold text-stone-950 mb-1">{TRANSLATIONS.institutionsRole[currentLanguage]}</p>
                          <p className="text-stone-600 text-xs">{inst.role[currentLanguage]}</p>
                        </div>
                        <div className="bg-amber-50/30 rounded-xl p-4 border border-amber-100">
                          <p className="font-bold text-amber-950 mb-1">{TRANSLATIONS.institutionsApproach[currentLanguage]}</p>
                          <p className="text-amber-900 text-xs">{inst.approach[currentLanguage]}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-4 border border-stone-150/80">
                          <p className="font-bold text-stone-950 mb-1">{TRANSLATIONS.institutionsComplaints[currentLanguage]}</p>
                          <p className="text-stone-600 text-xs">{inst.complaints[currentLanguage]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* 8. Legal Terms Glossary */}
          {activeTab === 'glossary' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-4">
                {TRANSLATIONS.legalGlossaryTitle[currentLanguage]}
              </h3>

              <div className="divide-y divide-stone-150">
                {filteredGlossary.map((g, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 font-sans text-xs sm:text-sm">
                    <h4 className="font-bold text-stone-950 mb-1">{g.term[currentLanguage]}</h4>
                    <p className="text-stone-600 leading-relaxed">{g.definition[currentLanguage]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. Right to Information (RTI) */}
          {activeTab === 'rti' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
              <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-amber-600" />
                <span>{currentLanguage === 'en' ? 'Right to Information (RTI Act 2005)' : currentLanguage === 'ur' ? 'حق معلومات (RTI Act 2005)' : 'सूचना का अधिकार अधिनियम (RTI Act 2005)'}</span>
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'The Right to Information Act, 2005 empowers Indian citizens to seek any information from public authorities, promoting transparency and accountability in government institutions.' 
                  : currentLanguage === 'ur' 
                  ? 'حق معلومات قانون 2005 ہندوستانی شہریوں کو سرکاری اداروں سے کسی بھی قسم کی معلومات حاصل کرنے کا اختیار دیتا ہے، جس سے شفافیت اور جوابدہی کو فروغ ملتا ہے۔'
                  : 'सूचना का अधिकार अधिनियम 2005 भारतीय नागरिकों को किसी भी सरकारी या सार्वजनिक प्राधिकरण से सूचना प्राप्त करने का अधिकार देता है, जिससे पारदर्शिता और जवाबदेही बढ़ती है।'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-200/60">
                  <h4 className="font-bold text-amber-900 mb-2 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>{currentLanguage === 'en' ? 'Key Features & Time Limits' : currentLanguage === 'ur' ? 'اہم خصوصیات اور وقت کی حد' : 'मुख्य विशेषताएं और समय सीमा'}</span>
                  </h4>
                  <ul className="list-disc list-inside text-xs text-stone-700 space-y-2">
                    <li>{currentLanguage === 'en' ? 'Response time: 30 days from date of receipt.' : currentLanguage === 'ur' ? 'جواب دینے کا وقت: درخواست موصول ہونے سے 30 دن کے اندر۔' : 'उत्तर देने का समय: आवेदन प्राप्त होने की तिथि से 30 दिन।'}</li>
                    <li>{currentLanguage === 'en' ? 'Life & Liberty matters: Information within 48 hours.' : currentLanguage === 'ur' ? 'زندگی اور آزادی کے معاملات: 48 گھنٹے کے اندر معلومات۔' : 'जीवन और स्वतंत्रता से जुड़े मामले: 48 घंटे के भीतर जानकारी।'}</li>
                    <li>{currentLanguage === 'en' ? 'Application Fee: ₹10 (Free for BPL card holders).' : currentLanguage === 'ur' ? 'درخواست فیس: ₹10 (بی پی ایل کارڈ ہولڈرز کے لیے مفت)۔' : 'आवेदन शुल्क: मात्र ₹10 (BPL कार्ड धारकों के लिए निःशुल्क)।'}</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-2 text-sm flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-stone-700" />
                    <span>{currentLanguage === 'en' ? 'How to File Online RTI' : currentLanguage === 'ur' ? 'آن لائن RTI کیسے دائر کریں' : 'ऑनलाइन RTI कैसे दाखिल करें'}</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3">
                    {currentLanguage === 'en' ? 'Visit the official RTI Online Portal to submit applications to Central and State Government departments.' : currentLanguage === 'ur' ? 'مرکزی اور ریاستی سرکاری محکموں میں درخواستیں جمع کرانے کے لیے سرکاری RTI آن لائن پورٹل پر جائیں۔' : 'केंद्र और राज्य सरकार के विभागों को आवेदन भेजने के लिए आधिकारिक RTI ऑनलाइन पोर्टल पर जाएं।'}
                  </p>
                  <a 
                    href="https://rtionline.gov.in" 
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-lg hover:bg-emerald-800 transition"
                  >
                    <span>{currentLanguage === 'en' ? 'Visit rtionline.gov.in' : currentLanguage === 'ur' ? 'rtionline.gov.in پر جائیں' : 'rtionline.gov.in पर जाएं'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 10. Citizen Rights & Welfare */}
          {activeTab === 'citizen_rights' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
              <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-emerald-700" />
                <span>{currentLanguage === 'en' ? 'Citizen Rights & Social Protections' : currentLanguage === 'ur' ? 'شہری حقوق اور سماجی تحفظات' : 'नागरिक अधिकार एवं सामाजिक संरक्षण'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{currentLanguage === 'en' ? '1. Consumer Protection Rights (Act 2019)' : currentLanguage === 'ur' ? '1. صارفین کے تحفظ کے حقوق (قانون 2019)' : '1. उपभोक्ता संरक्षण अधिकार (अधिनियम 2019)'}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLanguage === 'en' ? 'Right to be protected against marketing of hazardous goods, right to be informed about quality, quantity, potency, purity, and price. File complaints online via e-Daakhil.' : currentLanguage === 'ur' ? 'مضر صحت اشیاء کی مارکیٹنگ کے خلاف تحفظ کا حق، معیار اور قیمت کے بارے میں مطلع کیے جانے کا حق۔ e-Daakhil کے ذریعے آن لائن شکایت درج کریں۔' : 'खतरनाक वस्तुओं के विपणन के खिलाफ सुरक्षा का अधिकार, गुणवत्ता, मात्रा और कीमत के बारे में जानकारी पाने का अधिकार। e-Daakhil पोर्टल से ऑनलाइन शिकायत करें।'}
                  </p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{currentLanguage === 'en' ? '2. Right to Education (RTE Act 2009)' : currentLanguage === 'ur' ? '2. حق تعلیم (RTE Act 2009)' : '2. शिक्षा का अधिकार (RTE अधिनियम 2009)'}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLanguage === 'en' ? 'Free and compulsory education for children between the ages of 6 and 14 years. Mandates 25% reservation for disadvantaged groups in private unaided schools.' : currentLanguage === 'ur' ? '6 سے 14 سال کے بچوں کے لیے مفت اور لازمی تعلیم۔ پرائیویٹ اسکولوں میں پسماندہ طبقات کے لیے 25% نشستیں مخصوص ہیں۔' : '6 से 14 वर्ष की आयु के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा। निजी स्कूलों में वंचित समूहों के लिए 25% आरक्षण अनिवार्य है।'}
                  </p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{currentLanguage === 'en' ? '3. Digital Personal Data Protection (DPDP Act 2023)' : currentLanguage === 'ur' ? '3. ڈیجیٹل ذاتی ڈیٹا کا تحفظ (DPDP Act 2023)' : '3. डिजिटल व्यक्तिगत डेटा संरक्षण (DPDP अधिनियम 2023)'}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLanguage === 'en' ? 'Right to consent before personal data processing, right to access, update, or erase personal data, and right to grievance redressal regarding digital privacy.' : currentLanguage === 'ur' ? 'ذاتی ڈیٹا کی پروسیسنگ سے پہلے رضامندی کا حق، ڈیٹا تک رسائی، تصحیح اور حذف کرنے کا حق، اور ڈیجیٹل پرائیویسی سے متعلق شکایات کے ازالے کا حق۔' : 'व्यक्तिगत डेटा के प्रसंस्करण से पहले सहमति का अधिकार, डेटा तक पहुंचने, सुधारने या मिटाने का अधिकार, और डिजिटल गोपनीयता से जुड़ी शिकायत निवारण का अधिकार।'}
                  </p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{currentLanguage === 'en' ? '4. Patient & Emergency Medical Rights' : currentLanguage === 'ur' ? '4. مریض اور ہنگامی طبی حقوق' : '4. रोगी एवं आपातकालीन चिकित्सा अधिकार'}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLanguage === 'en' ? 'Right to emergency medical care without advance payment, right to informed consent, confidentiality of medical records, and right to second opinion.' : currentLanguage === 'ur' ? 'پیشگی ادائیگی کے بغیر ہنگامی طبی امداد کا حق، باخبر رضامندی کا حق، طبی ریکارڈ کی رازداری، اور دوسری رائے لینے کا حق۔' : 'बिना अग्रिम भुगतान के आपातकालीन चिकित्सा सेवा का अधिकार, सूचित सहमति का अधिकार, रिकॉर्ड की गोपनीयता और दूसरी राय लेने का अधिकार।'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Emergency Legal Assistance Contacts (Section 8) */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-red-100/80 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">{TRANSLATIONS.legalHelpTitle[currentLanguage]}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_HELPLINES_LIST.map((help, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between hover:shadow-sm transition-all">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-stone-950 mb-1">{help.name[currentLanguage]}</h4>
                  <p className="font-mono text-base font-bold text-red-600 mb-4">{help.phone}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-200/60">
                  <a 
                    href={`tel:${help.phone}`}
                    className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold text-center transition-all"
                  >
                    {TRANSLATIONS.callNow[currentLanguage]}
                  </a>
                  <button
                    onClick={() => handleCopy(help.phone, `help-${idx}`)}
                    className="p-2 border border-stone-200 bg-white hover:bg-stone-50 rounded-lg text-stone-600 transition-all"
                    title="Copy Number"
                  >
                    {copiedId === `help-${idx}` ? (
                      <span className="text-[10px] text-emerald-600 font-bold">{TRANSLATIONS.copied[currentLanguage]}</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a 
                    href={help.site}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 border border-stone-200 bg-white hover:bg-stone-50 rounded-lg text-stone-600 transition-all flex items-center justify-center"
                    title={TRANSLATIONS.visitSite[currentLanguage]}
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="mt-12 bg-stone-100 rounded-2xl p-5 border border-stone-200/80 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
          <p className="text-stone-500 text-xs leading-relaxed font-sans italic">
            {TRANSLATIONS.disclaimerText[currentLanguage]}
          </p>
        </div>

      </div>
    </div>
  );
}
