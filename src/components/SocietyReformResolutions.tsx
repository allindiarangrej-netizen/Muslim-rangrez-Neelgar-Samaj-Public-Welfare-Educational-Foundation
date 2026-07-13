import React, { useState, useMemo } from 'react';
import { 
  Check, ChevronUp, ChevronDown, Scroll, Target, Zap, Award, 
  CheckCircle2, Sparkles, Search, Filter, Layers, RefreshCw 
} from 'lucide-react';
import { Language } from '../types';
import { societyResolutions, ResolutionItem } from '../data/societyResolutionsData';

interface SocietyReformResolutionsProps {
  currentLanguage: Language;
}

export default function SocietyReformResolutions({ currentLanguage }: SocietyReformResolutionsProps) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<'all' | 'marriages' | 'education' | 'welfare' | 'governance'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const isUrdu = currentLanguage === 'ur';

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allIds: Record<string, boolean> = {};
    societyResolutions.forEach(r => { allIds[r.id] = true; });
    setExpandedCards(allIds);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  const filteredResolutions = useMemo(() => {
    return societyResolutions.filter(res => {
      const matchesCategory = activeFilter === 'all' || res.category === activeFilter;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;
      
      const query = searchQuery.toLowerCase();
      return (
        res.titleEn.toLowerCase().includes(query) ||
        res.titleHi.toLowerCase().includes(query) ||
        res.titleUr.toLowerCase().includes(query) ||
        res.number.toLowerCase().includes(query) ||
        res.shortDescEn.toLowerCase().includes(query) ||
        res.shortDescHi.toLowerCase().includes(query) ||
        res.shortDescUr.toLowerCase().includes(query) ||
        res.objectiveEn.toLowerCase().includes(query)
      );
    });
  }, [activeFilter, searchQuery]);

  const getCatCount = (cat: string) => {
    if (cat === 'all') return societyResolutions.length;
    return societyResolutions.filter(r => r.category === cat).length;
  };

  const categories = [
    { id: 'all', labelEn: `All (${getCatCount('all')})`, labelHi: `सभी (${getCatCount('all')})`, labelUr: `تمام (${getCatCount('all')})` },
    { id: 'marriages', labelEn: `💍 Marriages (${getCatCount('marriages')})`, labelHi: `💍 विवाह (${getCatCount('marriages')})`, labelUr: `💍 شادیاں (${getCatCount('marriages')})` },
    { id: 'welfare', labelEn: `🤝 Welfare (${getCatCount('welfare')})`, labelHi: `🤝 कल्याण (${getCatCount('welfare')})`, labelUr: `🤝 فلاح (${getCatCount('welfare')})` },
    { id: 'education', labelEn: `🎓 Education (${getCatCount('education')})`, labelHi: `🎓 शिक्षा (${getCatCount('education')})`, labelUr: `🎓 تعلیم (${getCatCount('education')})` },
    { id: 'governance', labelEn: `⚖️ Governance (${getCatCount('governance')})`, labelHi: `⚖️ व्यवस्था (${getCatCount('governance')})`, labelUr: `⚖️ نظم و نسق (${getCatCount('governance')})` }
  ];

  return (
    <div className="space-y-6 relative z-10 pt-4" dir={isUrdu ? 'rtl' : 'ltr'} id="society_reform_resolutions_grid">
      {/* Section Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs sm:text-sm font-mono font-extrabold text-[#004B23] uppercase tracking-widest block mb-1.5">
            📜 {getText('SAMAJ SUDHAR MAHAPANCHAYAT – JAURA (27 JULY 2025)', 'समाज सुधार महापंचायत – जौरा (27 जुलाई 2025)', 'سماج سدھار مہاپنچایت – جورا (27 جولائی 2025)')}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-[#0B132B]">
            {getText('14 Reform Resolutions Passed by Mahapanchayat', 'महापंचायत द्वारा पारित 14 समाज सुधार मौजू', 'مہاپنچایت کے ذریعہ منظور کردہ 14 سماجی اصلاحاتی موضوعات')}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {getText(
              'Click any resolution card below to read the original resolution text, objectives, purpose, and social benefits.',
              'मूल प्रस्ताव पाठ, उद्देश्य और सामाजिक लाभ पढ़ने के लिए नीचे दिए गए किसी भी संकल्प कार्ड पर क्लिक करें।',
              'اصل قرارداد کا متن، مقاصد، اور سماجی فوائد پڑھنے کے لیے نیچے دیے گئے کسی بھی قرارداد کے کارڈ پر کلک کریں۔'
            )}
          </p>
        </div>

        {/* Search Bar & Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <div className="relative">
            <Search className={`absolute ${isUrdu ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getText('Search 14 resolutions...', '14 संकल्पों में खोजें...', '14 قراردادوں میں تلاش کریں...')}
              className={`w-full sm:w-56 bg-gray-50 border border-gray-200 rounded-xl py-1.5 ${isUrdu ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'} text-xs focus:outline-none focus:ring-2 focus:ring-[#004B23]/20 focus:border-[#004B23] font-mono transition`}
            />
          </div>

          <div className="flex gap-1.5 shrink-0 justify-end">
            <button
              onClick={expandAll}
              type="button"
              className="px-3 py-1.5 text-xs font-mono font-bold bg-emerald-50 hover:bg-emerald-100 text-[#004B23] rounded-xl border border-emerald-200/80 transition flex items-center gap-1 shadow-2xs"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{getText('Expand All', 'सभी खोलें', 'سب کھولیں')}</span>
            </button>
            <button
              onClick={collapseAll}
              type="button"
              className="px-3 py-1.5 text-xs font-mono font-bold bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl border border-gray-200 transition flex items-center gap-1"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>{getText('Collapse All', 'सभी बंद करें', 'سب بند کریں')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50/80 p-2 rounded-2xl border border-gray-100">
        <div className="flex flex-wrap gap-1.5 text-xs font-mono">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              type="button"
              className={`px-3 py-1.5 rounded-xl font-bold transition duration-200 flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? 'bg-[#004B23] text-white shadow-sm scale-[1.02]'
                  : 'text-gray-600 hover:bg-white hover:shadow-2xs border border-transparent hover:border-gray-200/60'
              }`}
            >
              {getText(cat.labelEn, cat.labelHi, cat.labelUr)}
            </button>
          ))}
        </div>

        {searchQuery && (
          <span className="text-xs font-mono text-gray-500 px-2">
            {getText(`Showing ${filteredResolutions.length} matching resolutions`, `${filteredResolutions.length} मेल खाते संकल्प प्रदर्शित`, `${filteredResolutions.length} مماثل قراردادیں ظاہر ہیں`)}
          </span>
        )}
      </div>

      {/* Resolution Cards Grid */}
      {filteredResolutions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <Scroll className="h-10 w-10 text-gray-300 mx-auto mb-3 animate-pulse" />
          <h4 className="text-base font-serif font-bold text-gray-600">
            {getText('No resolutions match your search or filter', 'आपकी खोज या फ़िल्टर से कोई संकल्प मेल नहीं खाता', 'آپ کی تلاش یا فلٹر سے کوئی قرارداد میل نہیں کھاتی')}
          </h4>
          <button
            onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-mono font-bold text-[#004B23] hover:underline"
          >
            {getText('Reset filters and search', 'फ़िल्टर और खोज रीसेट करें', 'فلٹر اور تلاش ری سیٹ کریں')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredResolutions.map((res) => {
            const isExpanded = !!expandedCards[res.id];
            return (
              <div
                key={res.id}
                className={`group relative rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'p-[2px] bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23] shadow-xl scale-[1.002]' 
                    : 'p-[1.5px] bg-gradient-to-r from-gray-200 via-emerald-400/50 to-gray-200 hover:from-[#004B23] hover:via-[#FFD54A] hover:to-[#004B23] shadow-xs hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Shimmer / Glow background effect inside running border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="bg-white rounded-[15px] overflow-hidden h-full flex flex-col relative z-10">
                  {/* Card Header (Always Visible & Clickable) */}
                  <div 
                    onClick={() => toggleCard(res.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-white via-gray-50/40 to-white hover:bg-gray-50/80 transition"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center shrink-0 font-mono shadow-inner group-hover:bg-emerald-50/80 group-hover:border-emerald-200 transition-colors">
                        <span className="text-xs font-black text-[#004B23]">{res.number}</span>
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider border ${res.badgeBg}`}>
                            {res.badgeText}
                          </span>
                          <span className="text-xs text-emerald-700 font-mono font-semibold flex items-center gap-1">
                            <Check className="h-3.5 w-3.5" /> Adopted & Active
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-serif font-bold text-[#0B132B] group-hover:text-[#004B23] transition leading-snug">
                          {getText(res.titleEn, res.titleHi, res.titleUr)}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-600 leading-normal font-normal max-w-4xl">
                          {getText(res.shortDescEn, res.shortDescHi, res.shortDescUr)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                      <span className="text-xs font-mono font-bold text-gray-400 md:hidden">
                        {isExpanded ? 'Click to minimize' : 'Click to read full details'}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(res.id);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-extrabold flex items-center gap-1.5 transition ${
                          isExpanded
                            ? 'bg-[#004B23] text-white shadow-2xs'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-[#004B23] border border-emerald-200/80'
                        }`}
                      >
                        <span>{isExpanded ? getText('Close View', 'बंद करें', 'بند کریں') : getText('Read More', 'विस्तार से पढ़ें', 'مزید پڑھیں')}</span>
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Card Expanded View (Smooth Expand) */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-gray-50/70 p-5 sm:p-8 space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left: Original Resolution & Objective */}
                        <div className="space-y-4">
                          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs space-y-2">
                            <span className="text-[11px] font-mono font-bold text-[#004B23] uppercase tracking-wider flex items-center gap-1.5">
                              <Scroll className="h-3.5 w-3.5 text-amber-600" />
                              <span>{getText('Original Resolution Text', 'मूल प्रस्ताव पाठ', 'اصل قرارداد کا متن')}</span>
                            </span>
                            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-serif italic bg-amber-50/40 p-3.5 rounded-lg border-l-4 border-amber-500">
                              "{getText(res.originalResEn, res.originalResHi, res.originalResUr)}"
                            </p>
                          </div>

                          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs space-y-2">
                            <span className="text-[11px] font-mono font-bold text-[#004B23] uppercase tracking-wider flex items-center gap-1.5">
                              <Target className="h-3.5 w-3.5 text-blue-600" />
                              <span>{getText('Core Objective', 'मुख्य उद्देश्य', 'بنیادی مقصد')}</span>
                            </span>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                              {getText(res.objectiveEn, res.objectiveHi, res.objectiveUr)}
                            </p>
                          </div>
                        </div>

                        {/* Right: Purpose, Benefits & Status */}
                        <div className="space-y-4">
                          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs space-y-2">
                            <span className="text-[11px] font-mono font-bold text-[#004B23] uppercase tracking-wider flex items-center gap-1.5">
                              <Zap className="h-3.5 w-3.5 text-purple-600" />
                              <span>{getText('Purpose & Intent', 'प्रयोजन एवं लक्ष्य', 'مقصد اور نیت')}</span>
                            </span>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                              {getText(res.purposeEn, res.purposeHi, res.purposeUr)}
                            </p>
                          </div>

                          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs space-y-2">
                            <span className="text-[11px] font-mono font-bold text-[#004B23] uppercase tracking-wider flex items-center gap-1.5">
                              <Award className="h-3.5 w-3.5 text-rose-600" />
                              <span>{getText('Expected Social Benefits', 'अपेक्षित सामाजिक लाभ', 'متوقع سماجی فوائد')}</span>
                            </span>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans font-semibold text-emerald-800">
                              {getText(res.benefitsEn, res.benefitsHi, res.benefitsUr)}
                            </p>
                          </div>

                          <div className="bg-emerald-900 text-white p-4 rounded-xl border border-emerald-700 shadow-sm flex items-center justify-between gap-3 font-mono">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-[#FFD54A] shrink-0" />
                              <div>
                                <span className="text-[10px] text-emerald-300 block uppercase font-bold">Current Status</span>
                                <span className="text-xs font-bold text-white leading-tight block">{getText(res.statusEn, res.statusHi, res.statusUr)}</span>
                              </div>
                            </div>
                            <span className="bg-[#FFD54A] text-[#004B23] px-2.5 py-1 rounded text-[10px] font-black uppercase shrink-0">
                              Verified ✓
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
