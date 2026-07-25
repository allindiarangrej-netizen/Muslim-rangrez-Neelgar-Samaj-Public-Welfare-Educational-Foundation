import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Search, X, Bookmark, Share2, Printer, Download, 
  ChevronRight, Clock, ArrowRight, ArrowLeft, List, Sparkles, 
  CheckCircle2, Languages, Calendar, AlertCircle, Type, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mahapanchayatHistoryContent, HistoryChapter } from '../data/mahapanchayatHistory';
import OptimizedEduImage from './common/OptimizedEduImage';

interface MahapanchayatHistoryReaderProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

type TextSize = 'sm' | 'base' | 'lg' | 'xl';
type PageTheme = 'paper' | 'light' | 'dark';

export default function MahapanchayatHistoryReader({ currentLanguage }: MahapanchayatHistoryReaderProps) {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>([]);
  
  // Reading Options State
  const [textSize, setTextSize] = useState<TextSize>('base');
  const [pageTheme, setPageTheme] = useState<PageTheme>('paper');
  const [showToc, setShowToc] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  const readerContainerRef = useRef<HTMLDivElement>(null);

  // Load Bookmarks on Mount
  useEffect(() => {
    const saved = localStorage.getItem('rcb_mahapanchayat_history_bookmarks');
    if (saved) {
      try {
        setBookmarkedChapters(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse bookmarks', e);
      }
    }
  }, []);

  // Update Reading Progress Bar based on Scroll position
  const handleScroll = () => {
    if (readerContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = readerContainerRef.current;
      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable > 0) {
        const progress = (scrollTop / totalScrollable) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    }
  };

  // Trigger Toast Alert
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle Bookmark
  const toggleBookmark = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let updated: number[];
    if (bookmarkedChapters.includes(idx)) {
      updated = bookmarkedChapters.filter(i => i !== idx);
      showToast(currentLanguage === 'en' ? 'Bookmark removed' : currentLanguage === 'ur' ? 'بک مارک ہٹا دیا گیا' : 'बुकमार्क हटा दिया गया');
    } else {
      updated = [...bookmarkedChapters, idx].sort((a, b) => a - b);
      showToast(currentLanguage === 'en' ? 'Chapter bookmarked' : currentLanguage === 'ur' ? 'باب محفوظ کر لیا گیا' : 'अध्याय बुकमार्क कर लिया गया');
    }
    setBookmarkedChapters(updated);
    localStorage.setItem('rcb_mahapanchayat_history_bookmarks', JSON.stringify(updated));
  };

  // Helper translations and content getters
  const getLocalizedTitle = (ch: HistoryChapter) => {
    return ch.title[currentLanguage] || ch.title['en'];
  };

  const getLocalizedSubtitle = (ch: HistoryChapter) => {
    return ch.subtitle[currentLanguage] || ch.subtitle['en'];
  };

  const getLocalizedContent = (ch: HistoryChapter) => {
    return ch.content[currentLanguage] || ch.content['en'];
  };

  // Filter Chapters based on Search
  const filteredChapters = mahapanchayatHistoryContent.filter(ch => {
    const title = getLocalizedTitle(ch).toLowerCase();
    const subtitle = getLocalizedSubtitle(ch).toLowerCase();
    const content = getLocalizedContent(ch).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || subtitle.includes(query) || content.includes(query);
  });

  // Share Chapter
  const handleShare = (idx: number) => {
    const ch = mahapanchayatHistoryContent[idx];
    const shareText = `${ch.chapter}: ${getLocalizedTitle(ch)}\n\n${getLocalizedSubtitle(ch)}\n\nRead more on All India Rangrez Samaj Mahapanchayat Portal.`;
    navigator.clipboard.writeText(shareText);
    showToast(currentLanguage === 'en' ? '📋 Share link and snippet copied to clipboard!' : currentLanguage === 'ur' ? '📋 اقتباس کلپ بورڈ پر کاپی ہو گیا!' : '📋 अध्याय का विवरण क्लिपबोर्ड पर कॉपी हो गया!');
  };

  // Print Chapter
  const handlePrint = () => {
    window.print();
  };

  // Simulated PDF Download
  const handlePdfDownload = (idx: number) => {
    const ch = mahapanchayatHistoryContent[idx];
    showToast(currentLanguage === 'en' ? `⏳ Generating certified PDF for ${ch.chapter}...` : `⏳ پی ڈی ایف فائل تیار ہو رہی ہے...`);
    
    setTimeout(() => {
      // Simulate downloadable trigger
      const blob = new Blob([
        `ALL INDIA RANGREZ SAMAJ TRUST - OFFICIAL ARCHIVE\n\n${ch.chapter.toUpperCase()}: ${getLocalizedTitle(ch).toUpperCase()}\n\nSubtitle: ${getLocalizedSubtitle(ch)}\n\nContent:\n${getLocalizedContent(ch)}\n\nCertified Copy - All India Rangrez Samaj Trust.`
      ], { type: 'text/plain' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Mahapanchayat_History_${ch.chapter.replace(' ', '_')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast(currentLanguage === 'en' ? '✅ Certified text file downloaded successfully!' : '✅ دستاویز کامیابی کے ساتھ ڈاؤن لوڈ ہو گئی!');
    }, 1500);
  };

  // Text size classes helper
  const getTextSizeClass = () => {
    switch (textSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-lg leading-relaxed';
      case 'xl': return 'text-xl sm:text-2xl leading-loose';
      default: return 'text-base sm:text-lg leading-relaxed';
    }
  };

  // Theme configuration helper
  const getThemeClasses = () => {
    switch (pageTheme) {
      case 'dark':
        return {
          bg: 'bg-zinc-900 border-zinc-800 text-zinc-200',
          paperBg: 'bg-zinc-950 text-zinc-100',
          subtitleBg: 'bg-zinc-800/60 border-zinc-700 text-emerald-400',
          divider: 'border-zinc-800',
          buttonActive: 'bg-[#F4C430] text-[#0B132B]',
          buttonInactive: 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border-zinc-700',
          tocHighlight: 'bg-zinc-800 text-[#F4C430] border-l-4 border-[#F4C430]',
          tocNormal: 'hover:bg-zinc-800/40 text-zinc-300'
        };
      case 'light':
        return {
          bg: 'bg-gray-50 border-gray-200 text-gray-800',
          paperBg: 'bg-white text-gray-900 shadow-sm',
          subtitleBg: 'bg-emerald-50 border-emerald-100 text-[#004B23]',
          divider: 'border-gray-100',
          buttonActive: 'bg-[#004B23] text-white',
          buttonInactive: 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200',
          tocHighlight: 'bg-emerald-50 text-[#004B23] border-l-4 border-[#004B23]',
          tocNormal: 'hover:bg-gray-50 text-gray-700'
        };
      default: // 'paper' Ivory Warm Style
        return {
          bg: 'bg-[#FAF6EC] border-[#E8DFC9] text-amber-950',
          paperBg: 'bg-[#FCFAF5] text-amber-950 shadow-sm border border-[#EBE3CD]',
          subtitleBg: 'bg-[#F3EFE0] border-[#DFD8BF] text-[#004B23] font-semibold',
          divider: 'border-[#EBE3CD]',
          buttonActive: 'bg-[#004B23] text-[#FAF6EC]',
          buttonInactive: 'bg-[#FAF6EC] hover:bg-[#F3EFE0] text-amber-900 border-[#DFD8BF]',
          tocHighlight: 'bg-[#F3EFE0] text-[#004B23] border-l-4 border-[#004B23]',
          tocNormal: 'hover:bg-[#FCFAF5] text-amber-900'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className="space-y-8 animate-fadeIn" id="mahapanchayat_history_reader_main">
      
      {/* Toast Alert Portal */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold text-xs sm:text-sm shadow-2xl border border-slate-700 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER LIST VIEW / CHAPTER INDEX IF NO CHAPTER SELECTED */}
      {selectedChapterIndex === null ? (
        <div className="space-y-8">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-emerald-900 to-[#0B132B] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-emerald-700/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 bg-[#FFD54A] text-[#0B132B] rounded-full text-xs font-black font-mono uppercase tracking-wider shadow">
                📖 {currentLanguage === 'en' ? 'OFFICIAL BOOK READER' : currentLanguage === 'ur' ? 'آفیشل ڈیجیٹل کتاب' : 'आधिकारिक पुस्तक रीडर'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white leading-tight">
                {currentLanguage === 'en' ? 'Mahapanchayat History Archives' : currentLanguage === 'ur' ? 'مہاپنچایت کی تاریخی دستاویزی کتاب' : 'महापंचायत इतिहास एवं विकास गाथा'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                {currentLanguage === 'en'
                  ? 'Explore the chronological growth, community consults, democratic resolutions, and organized social changes of All India Rangrez Samaj.'
                  : currentLanguage === 'ur'
                  ? 'آل انڈیا رنگریز سماج کے ارتقاء، جمہوری اصلاحاتی قراردادوں اور تنظیمی ترقی کے مستند ابواب کا مطالعہ کریں۔'
                  : 'ऑल इंडिया रंगरेज़ समाज के विकास, सामाजिक सुधार प्रस्तावों, संगठनात्मक विस्तार और लोकतांत्रिक जागृति के इतिहास का अध्ययन करें।'}
              </p>
            </div>
            
            <div className="w-full md:w-auto text-center bg-white/10 p-5 rounded-2xl border border-white/20 shrink-0 shadow-inner">
              <BookOpen className="w-10 h-10 text-[#FFD54A] mx-auto mb-2 animate-bounce" />
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                {currentLanguage === 'en' ? '7 Complete Chapters' : '7 संपूर्ण अध्याय उपलब्ध'}
              </div>
            </div>
          </div>

          {/* Search Bar and Filter Controls */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search chapters, resolutions, milestones...' : 'अध्याय, प्रस्ताव और ऐतिहासिक क्षण खोजें...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#004B23] focus:bg-white transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-[#004B23] px-3 py-1.5 rounded-lg border border-emerald-100 font-bold">
                🎯 {filteredChapters.length} / 7 {currentLanguage === 'en' ? 'Chapters' : 'अध्याय'}
              </span>
              {bookmarkedChapters.length > 0 && (
                <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg border border-amber-100 font-bold">
                  <Bookmark className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
                  <span>{bookmarkedChapters.length} {currentLanguage === 'en' ? 'Saved' : 'सुरक्षित'}</span>
                </span>
              )}
            </div>
          </div>

          {/* Chapters Grid */}
          {filteredChapters.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-base font-bold text-gray-800">
                {currentLanguage === 'en' ? 'No history chapters match your query' : 'आपकी खोज के अनुसार कोई अध्याय नहीं मिला'}
              </h3>
              <button onClick={() => setSearchQuery('')} className="px-4 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold shadow hover:bg-[#00381a]">
                {currentLanguage === 'en' ? 'Reset Search' : 'खोज रीसेट करें'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChapters.map((ch) => {
                const globalIndex = mahapanchayatHistoryContent.findIndex(item => item.chapter === ch.chapter);
                const isBookmarked = bookmarkedChapters.includes(globalIndex);
                
                // Read time calculation helper
                const wordCount = getLocalizedContent(ch).split(/\s+/).length;
                const readMinutes = Math.max(1, Math.ceil(wordCount / 160));

                return (
                  <div
                    key={globalIndex}
                    onClick={() => setSelectedChapterIndex(globalIndex)}
                    className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden transform hover:-translate-y-1"
                  >
                    {/* Chapter Header Card Background/Top line */}
                    <div className="h-1 bg-gradient-to-r from-emerald-800 via-amber-400 to-[#004B23] opacity-80"></div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="px-3 py-1 rounded-lg bg-emerald-50 text-[#004B23] font-mono text-xs font-black uppercase tracking-wider group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition duration-300">
                          {ch.chapter}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1 font-bold">
                            <Clock className="w-3.5 h-3.5 text-amber-500" />
                            <span>{readMinutes} min read</span>
                          </span>
                          <button
                            onClick={(e) => toggleBookmark(globalIndex, e)}
                            className="text-gray-300 hover:text-amber-500 transition p-1"
                            title="Bookmark Chapter"
                          >
                            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition line-clamp-2 leading-snug">
                          {getLocalizedTitle(ch)}
                        </h3>
                        <p className="text-xs text-[#004B23] font-semibold line-clamp-1 bg-emerald-50/60 px-2 py-1 rounded border border-emerald-100/30">
                          {getLocalizedSubtitle(ch)}
                        </p>
                      </div>

                      {/* Small elegant snippet of reading content */}
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {getLocalizedContent(ch)}
                      </p>
                    </div>

                    {/* Footer Button inside chapter card */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23] group-hover:bg-emerald-50/40">
                      <span className="flex items-center gap-1 group-hover:text-emerald-800 transition">
                        <span>{currentLanguage === 'en' ? 'Open Digital Book' : currentLanguage === 'ur' ? 'کتاب پڑھیں' : 'पूरा अध्याय पढ़ें'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono font-normal">
                        {currentLanguage === 'en' ? `Ch. ${globalIndex + 1} of 7` : `अध्याय ${globalIndex + 1} / 7`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Unified Timeline Summary Segment below the book directory */}
          <div className="bg-amber-50/50 border border-[#E8DFC9] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="border-b border-[#E8DFC9] pb-4">
              <h3 className="text-xl font-serif font-black text-amber-950 flex items-center gap-2">
                <span>🗓️</span>
                <span>{currentLanguage === 'en' ? 'Mahapanchayat Evolution Timeline' : 'महापंचायत विकास कालक्रम'}</span>
              </h3>
              <p className="text-xs text-amber-900 mt-1">
                {currentLanguage === 'en' 
                  ? 'A quick chronological lookup of primary organizational turning points.'
                  : 'संगठन के विकास के महत्वपूर्ण चरणों का कालक्रम।'}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:divide-x md:divide-[#E8DFC9]">
              {mahapanchayatHistoryContent.map((ch, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedChapterIndex(index)}
                  className="w-full text-center p-3 cursor-pointer hover:bg-white rounded-xl transition duration-200"
                >
                  <span className="block text-[10px] font-mono font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block border border-emerald-100/50 mb-1">
                    {ch.timelineDate}
                  </span>
                  <div className="text-xs font-serif font-bold text-amber-950 truncate max-w-[150px] mx-auto">
                    {ch.milestoneEn && (currentLanguage === 'en' ? ch.milestoneEn : currentLanguage === 'ur' ? ch.milestoneUr : ch.milestoneHi)}
                  </div>
                  <span className="text-[10px] text-amber-800 hover:underline">{ch.chapter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* FULL-PAGE BOOK READER VIEW */
        <div className={`rounded-3xl border shadow-xl flex flex-col overflow-hidden transition-all duration-300 ${themeClasses.bg}`}>
          
          {/* STICKY TOP NAVIGATION BAR */}
          <div className="sticky top-0 z-40 bg-[#004B23] text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-800 shadow-md">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedChapterIndex(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition cursor-pointer text-emerald-200 hover:text-white"
                title="Back to Chapter List"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 h-6" />
              </button>
              
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#FFD54A] text-[#0B132B] font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    {mahapanchayatHistoryContent[selectedChapterIndex].chapter}
                  </span>
                  <span className="text-[10px] sm:text-xs text-emerald-200 font-mono">
                    • {currentLanguage === 'en' ? `Ch. ${selectedChapterIndex + 1} of 7` : `अध्याय ${selectedChapterIndex + 1} / 7`}
                  </span>
                </div>
                <h3 className="text-xs sm:text-base font-serif font-black text-white truncate max-w-[180px] sm:max-w-md">
                  {getLocalizedTitle(mahapanchayatHistoryContent[selectedChapterIndex])}
                </h3>
              </div>
            </div>

            {/* Sticky Actions Bar */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Text Sizing Dropdown Button */}
              <div className="relative group">
                <button
                  className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer flex items-center gap-1 text-xs"
                  title="Text Size"
                >
                  <Type className="w-4 h-4 sm:w-5 h-5" />
                  <span className="hidden sm:inline font-mono uppercase">{textSize}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl p-2 hidden group-hover:block z-50 text-gray-800 w-32 space-y-1">
                  {(['sm', 'base', 'lg', 'xl'] as TextSize[]).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setTextSize(sz)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition flex justify-between items-center ${
                        textSize === sz ? 'bg-emerald-50 text-[#004B23]' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="capitalize">{sz === 'base' ? 'Normal' : sz}</span>
                      {textSize === sz && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selector Controls */}
              <div className="relative group">
                <button
                  className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer flex items-center gap-1 text-xs"
                  title="Page Theme"
                >
                  <span className="w-4 h-4 rounded-full border border-white/20 inline-block bg-amber-100" style={{
                    backgroundColor: pageTheme === 'dark' ? '#18181b' : pageTheme === 'light' ? '#ffffff' : '#fcfaf5'
                  }}></span>
                  <span className="hidden sm:inline font-mono uppercase capitalize">{pageTheme}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl p-2 hidden group-hover:block z-50 text-gray-800 w-36 space-y-1">
                  {[
                    { id: 'paper', label: 'Warm Ivory', bg: 'bg-[#FCFAF5]' },
                    { id: 'light', label: 'Pure White', bg: 'bg-white' },
                    { id: 'dark', label: 'Midnight', bg: 'bg-[#18181b]' }
                  ].map((thm) => (
                    <button
                      key={thm.id}
                      onClick={() => setPageTheme(thm.id as PageTheme)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                        pageTheme === thm.id ? 'bg-emerald-50 text-[#004B23]' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full border border-gray-300 ${thm.bg}`} />
                      <span>{thm.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleBookmark(selectedChapterIndex)}
                className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer"
                title="Save Bookmark"
              >
                <Bookmark className={`w-4 h-4 sm:w-5 h-5 ${bookmarkedChapters.includes(selectedChapterIndex) ? 'text-[#FFD54A] fill-[#FFD54A]' : ''}`} />
              </button>

              <button
                onClick={() => handleShare(selectedChapterIndex)}
                className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer"
                title="Share Chapter"
              >
                <Share2 className="w-4 h-4 sm:w-5 h-5" />
              </button>

              <button
                onClick={handlePrint}
                className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer"
                title="Print Chapter"
              >
                <Printer className="w-4 h-4 sm:w-5 h-5" />
              </button>

              <button
                onClick={() => handlePdfDownload(selectedChapterIndex)}
                className="p-2 hover:bg-white/10 text-emerald-200 hover:text-white rounded-xl transition cursor-pointer"
                title="Download PDF"
              >
                <Download className="w-4 h-4 sm:w-5 h-5" />
              </button>
            </div>
          </div>

          {/* READING PROGRESS BAR AT TOP */}
          <div className="h-1 bg-emerald-950 w-full shrink-0">
            <div 
              className="h-full bg-gradient-to-r from-[#FFD54A] to-amber-500 transition-all duration-100"
              style={{ width: `${readingProgress}%` }}
            ></div>
          </div>

          {/* BOOK READER CONTENT CANVAS */}
          <div 
            ref={readerContainerRef}
            onScroll={handleScroll}
            className="p-6 sm:p-12 overflow-y-auto max-h-[72vh] space-y-8 flex-1 outline-none"
            style={{
              fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif"
            }}
          >
            <div className="max-w-3xl mx-auto space-y-8">
              
              {/* Chapter Introductory Headers */}
              <div className="text-center space-y-4 border-b border-dashed pb-8" style={{ borderColor: pageTheme === 'dark' ? '#3f3f46' : '#DFD8BF' }}>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-widest inline-block border border-amber-500/20">
                  {mahapanchayatHistoryContent[selectedChapterIndex].chapter}
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                  {getLocalizedTitle(mahapanchayatHistoryContent[selectedChapterIndex])}
                </h1>
                
                <div className={`p-4 sm:p-5 rounded-2xl ${themeClasses.subtitleBg} border italic text-center font-serif text-sm sm:text-base leading-relaxed max-w-2xl mx-auto`}>
                  {getLocalizedSubtitle(mahapanchayatHistoryContent[selectedChapterIndex])}
                </div>
              </div>

              {/* Chapter Main Image (Responsive & Optimized with Fallback) */}
              {mahapanchayatHistoryContent[selectedChapterIndex].image && (
                <div className="space-y-2 max-w-2xl mx-auto">
                  <div className="rounded-2xl overflow-hidden border border-gray-300 shadow bg-slate-100 aspect-video relative">
                    <OptimizedEduImage
                      src={mahapanchayatHistoryContent[selectedChapterIndex].image!.url}
                      alt={getLocalizedTitle(mahapanchayatHistoryContent[selectedChapterIndex])}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs text-center text-gray-500 italic px-4 font-sans">
                    📷 {currentLanguage === 'en' 
                      ? mahapanchayatHistoryContent[selectedChapterIndex].image!.captionEn 
                      : currentLanguage === 'ur' 
                      ? mahapanchayatHistoryContent[selectedChapterIndex].image!.captionUr 
                      : mahapanchayatHistoryContent[selectedChapterIndex].image!.captionHi}
                  </p>
                </div>
              )}

              {/* Main Text Content */}
              <div className={`prose max-w-none break-words whitespace-pre-line tracking-wide ${getTextSizeClass()}`}>
                {getLocalizedContent(mahapanchayatHistoryContent[selectedChapterIndex])}
              </div>

              {/* Embed Historical Milestone Timeline Card between chapters */}
              {mahapanchayatHistoryContent[selectedChapterIndex].timelineDate && (
                <div className="pt-8 border-t border-dashed" style={{ borderColor: pageTheme === 'dark' ? '#3f3f46' : '#DFD8BF' }}>
                  <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white p-6 rounded-3xl shadow border-2 border-[#F4C430] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-[#FFD54A] font-mono text-[10px] uppercase font-black tracking-widest border border-amber-500/30">
                          Milestone Marker
                        </span>
                        <span className="text-xs text-gray-300 flex items-center gap-1 font-mono font-bold">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          <span>{mahapanchayatHistoryContent[selectedChapterIndex].timelineDate}</span>
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif font-black text-white leading-tight">
                        {currentLanguage === 'en' 
                          ? mahapanchayatHistoryContent[selectedChapterIndex].milestoneEn 
                          : currentLanguage === 'ur' 
                          ? mahapanchayatHistoryContent[selectedChapterIndex].milestoneUr 
                          : mahapanchayatHistoryContent[selectedChapterIndex].milestoneHi}
                      </h4>
                    </div>
                    <span className="text-3xl shrink-0">🎗️</span>
                  </div>
                </div>
              )}

              {/* Verification Stamp Footer */}
              <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 font-sans" style={{ borderColor: pageTheme === 'dark' ? '#3f3f46' : '#DFD8BF' }}>
                <span className="flex items-center gap-1">
                  <span>📜 All India Rangrez Samaj Trust Certified Archive</span>
                </span>
                <span className="text-[#004B23] font-bold">VERIFIED RECORD ✓</span>
              </div>

            </div>
          </div>

          {/* PROFESSIONAL BOTTOM NAVIGATION CONTROLS */}
          <div className="bg-white p-4 sm:p-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 text-gray-800 font-sans">
            
            {/* Prev Button */}
            <button
              onClick={() => {
                if (selectedChapterIndex > 0) {
                  setSelectedChapterIndex(selectedChapterIndex - 1);
                  setReadingProgress(0);
                  if (readerContainerRef.current) readerContainerRef.current.scrollTop = 0;
                }
              }}
              disabled={selectedChapterIndex === 0}
              className="w-full sm:w-auto px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-50 disabled:hover:bg-gray-100 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer border border-gray-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Previous Chapter' : currentLanguage === 'ur' ? 'پچھلا باب' : 'पिछला अध्याय'}</span>
            </button>

            {/* Collapsible TOC Trigger */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowToc(!showToc)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#004B23] text-white hover:bg-[#00381a] rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-2 cursor-pointer shadow-md border border-[#FFD54A]/20"
              >
                <List className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'Table of Contents' : currentLanguage === 'ur' ? 'فہرست مضامین' : 'विषय सूची'}</span>
              </button>

              {/* Table of Contents Collapsible Overlay */}
              <AnimatePresence>
                {showToc && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 w-72 sm:w-80 max-h-80 overflow-y-auto z-50 text-gray-900 space-y-1.5"
                  >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2 font-serif font-black text-xs text-gray-500 uppercase tracking-wider font-sans">
                      <span>{currentLanguage === 'en' ? 'Chapters' : 'अध्याय अनुक्रमणिका'}</span>
                      <button onClick={() => setShowToc(false)} className="text-gray-400 hover:text-gray-600 transition p-1">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {mahapanchayatHistoryContent.map((ch, index) => {
                      const isActive = index === selectedChapterIndex;
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedChapterIndex(index);
                            setReadingProgress(0);
                            setShowToc(false);
                            if (readerContainerRef.current) readerContainerRef.current.scrollTop = 0;
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                            isActive 
                              ? 'bg-emerald-50 text-[#004B23] border-l-4 border-[#004B23] font-extrabold'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] uppercase font-bold shrink-0 ${
                            isActive ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            Ch {index + 1}
                          </span>
                          <span className="truncate leading-tight font-serif">
                            {getLocalizedTitle(ch)}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                if (selectedChapterIndex < mahapanchayatHistoryContent.length - 1) {
                  setSelectedChapterIndex(selectedChapterIndex + 1);
                  setReadingProgress(0);
                  if (readerContainerRef.current) readerContainerRef.current.scrollTop = 0;
                }
              }}
              disabled={selectedChapterIndex === mahapanchayatHistoryContent.length - 1}
              className="w-full sm:w-auto px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-50 disabled:hover:bg-gray-100 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer border border-gray-200"
            >
              <span>{currentLanguage === 'en' ? 'Next Chapter' : currentLanguage === 'ur' ? 'اگلا باب' : 'अगला अध्याय'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
