import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Star, ZoomIn, ZoomOut, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, GraduationCap, RefreshCw, CheckCircle2, Search, Filter } from 'lucide-react';
import { educationGalleryImages, EducationImageItem } from '../data/educationGalleryImages';
import { Language } from '../types';
import EducationalBackgroundWrapper from './common/EducationalBackgroundWrapper';

interface HallOfAchievementsProps {
  currentLanguage: Language;
}

export default function HallOfAchievements({ currentLanguage }: HallOfAchievementsProps) {
  // 1. Filter / Search
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 2. Infinite Vertical Scroll State
  const BATCH_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  
  // 3. Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Categories list
  const categories = ['All', 'Care Point Classes', 'Educational Seminar', 'Community Movement', 'General Education'];

  // Filtered Achiever Images
  const filteredImages = useMemo(() => {
    return educationGalleryImages.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = !searchQuery.trim() || 
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleHi.includes(searchQuery) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // Observer Target for Infinite Scroll
  const observerTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredImages.length && !isLoadingMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredImages.length));
            setIsLoadingMore(false);
          }, 350);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTargetRef.current) observer.observe(observerTargetRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredImages.length, isLoadingMore]);

  // Reset pagination when category or search changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory, searchQuery]);

  // Current Lightbox Image
  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <EducationalBackgroundWrapper sectionTitle="Hall of Achievements">
      <div className="space-y-8 py-4 sm:py-6" id="hall_of_achievements_root">
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#00381A] via-[#004B23] to-[#002B13] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#F4C430] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B23]/80 border border-[#F4C430] text-[#FFD54A] text-xs font-black uppercase tracking-wider shadow">
            <Trophy className="w-4 h-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'STUDENT SUCCESS & ACADEMIC EXCELLENCE' : 'विद्यार्थी सफलता एवं गौरवशाली उपलब्धियां'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FFD54A] tracking-tight">
            Hall of Achievements
          </h2>

          <p className="text-sm sm:text-base text-emerald-100 font-light leading-relaxed">
            {currentLanguage === 'en'
              ? 'Honoring student success, competitive exam qualifiers (NEET, IIT-JEE, Civil Services), academic merit awards, and educational milestones from Care Point Classes and community seminars.'
              : 'केयर पॉइंट क्लासेस एवं सामुदायिक शैक्षणिक सम्मेलनों से नीट, आईआईटी-जेईई, सिविल सेवा में चयनित होनहार विद्यार्थियों एवं शैक्षणिक उपलब्धियों का गौरवपूर्ण उत्सव।'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-200 font-mono">
            <span className="flex items-center gap-1.5 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-700">
              <GraduationCap className="w-4 h-4 text-[#F4C430]" />
              <span>508+ HD Records</span>
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-700">
              <Award className="w-4 h-4 text-[#F4C430]" />
              <span>100% Verified HD Images</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & CATEGORY FILTERS */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLanguage === 'en' ? 'Search student achievements...' : 'सफलता गाथा खोजें...'}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 focus:outline-none focus:border-[#004B23]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs ${
                activeCategory === cat
                  ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430] scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MASONRY GALLERY GRID */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl p-6">
          <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-800">No achievements found matching your query</h3>
          <p className="text-xs text-gray-500 mt-1">Try clearing your search terms or category filter.</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {visibleImages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (idx % 12) * 0.02 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#F4C430] transition-all duration-300 group cursor-pointer"
              onClick={() => {
                setLightboxIndex(idx);
                setZoomScale(1);
              }}
            >
              {/* Image Box */}
              <div className="relative overflow-hidden bg-gray-900">
                <img
                  src={item.url}
                  alt={item.titleEn}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F4C430] text-[#004B23] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform mb-2">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black text-white uppercase tracking-wider bg-[#004B23]/90 px-3 py-1 rounded-full border border-[#FFD54A]">
                    Inspect HD Lightbox
                  </span>
                </div>
              </div>

              {/* Card Caption Footer */}
              <div className="p-3.5 bg-white border-t border-gray-100">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase text-[#004B23] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {item.category || 'Achievement'}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 font-bold">
                    #{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                  {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* 4. INFINITE SCROLL LOADER */}
      <div ref={observerTargetRef} className="py-8 text-center">
        {isLoadingMore ? (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-[#004B23] font-bold text-xs border border-emerald-200 shadow-sm animate-pulse">
            <RefreshCw className="w-4 h-4 animate-spin text-[#004B23]" />
            <span>{currentLanguage === 'en' ? 'Loading student achievements...' : 'अधिक शैक्षणिक उपलब्धियां लोड हो रही हैं...'}</span>
          </div>
        ) : visibleCount >= filteredImages.length && filteredImages.length > 0 ? (
          <div className="text-xs font-bold text-gray-500 bg-gray-100 py-2.5 px-6 rounded-full inline-block border border-gray-200">
            {currentLanguage === 'en' 
              ? `🎉 Showing all ${filteredImages.length} HD Student Achievement Records` 
              : `🎉 सभी ${filteredImages.length} रिकॉर्ड प्रदर्शित किए जा चुके हैं`}
          </div>
        ) : null}
      </div>

      {/* 5. HD LIGHTBOX WITH ZOOM & NAVIGATION */}
      <AnimatePresence>
        {lightboxIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between text-white z-10 bg-black/80 p-3 sm:p-4 rounded-2xl border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-[#F4C430]" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#FFD54A] block">
                    Achievement #{lightboxIndex + 1} of {filteredImages.length}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    ID: {currentImage.driveId?.substring(0, 10)}
                  </span>
                </div>
              </div>

              {/* Zoom Controls & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomScale((z) => Math.min(z + 0.5, 3.5))}
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale((z) => Math.max(z - 0.5, 1))}
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="px-2.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white rounded-lg transition"
                >
                  Reset Zoom
                </button>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition ml-2 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Center Viewport */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
              <motion.img
                key={currentImage.id}
                src={currentImage.url}
                alt={currentImage.titleEn}
                style={{ transform: `scale(${zoomScale})` }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1));
                  setZoomScale(1);
                }}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/70 hover:bg-[#F4C430] text-white hover:text-[#004B23] transition border border-gray-700 shadow-2xl cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1));
                  setZoomScale(1);
                }}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/70 hover:bg-[#F4C430] text-white hover:text-[#004B23] transition border border-gray-700 shadow-2xl cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption Footer */}
            <div className="bg-black/90 border border-gray-800 p-4 rounded-2xl text-center max-w-2xl mx-auto w-full shadow-2xl">
              <span className="text-[10px] font-black uppercase text-[#004B23] bg-[#F4C430] px-3 py-0.5 rounded-full inline-block mb-1 font-mono">
                {currentImage.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                {currentLanguage === 'en' ? currentImage.titleEn : currentImage.titleHi}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </EducationalBackgroundWrapper>
  );
}
