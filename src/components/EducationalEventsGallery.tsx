import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Folder, Calendar, Filter, Search, RefreshCw, ZoomIn, ZoomOut, 
  X, ChevronLeft, ChevronRight, GraduationCap, Award, Sparkles, 
  Layers, Maximize2, CheckCircle2, Image as ImageIcon
} from 'lucide-react';
import { educationGalleryImages, EducationImageItem } from '../data/educationGalleryImages';
import { Language } from '../types';
import OptimizedEduImage from './common/OptimizedEduImage';
import PremiumLightbox from './common/PremiumLightbox';

interface EducationalEventsGalleryProps {
  currentLanguage: Language;
}

export default function EducationalEventsGallery({ currentLanguage }: EducationalEventsGalleryProps) {
  // 1. Filter States
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 2. Infinite Scroll State
  const BATCH_SIZE = 20;
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // 3. Full HD Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Available Years
  const years = ['All', '2026', '2025', '2024', '2023'];

  // Categories
  const categories = [
    { id: 'All', en: 'All Educational Events', hi: 'सभी शैक्षणिक कार्यक्रम' },
    { id: 'Care Point Classes', en: 'Care Point Classes', hi: 'केयर पॉइंट क्लासेज' },
    { id: 'Educational Seminar', en: 'Educational Seminars', hi: 'शैक्षणिक सेमिनार' },
    { id: 'Community Movement', en: 'Community Movement', hi: 'सामुदायिक आंदोलन' },
    { id: 'General Education', en: 'Student Awards & Merit', hi: 'छात्र सम्मान व प्रतिभा' }
  ];

  // Folder style groupings
  const eventFolders = useMemo(() => {
    return [
      {
        id: 'folder_care_point',
        categoryKey: 'Care Point Classes',
        titleEn: 'Care Point Classes Archives',
        titleHi: 'केयर पॉइंट क्लासेज आर्काइव',
        descEn: 'NEET/IIT foundation classroom sessions & science education in Kailaras',
        descHi: 'केलारस में नीट/आईआईटी फाउंडेशन एवं विज्ञान कोचिंग कक्षाएं',
        count: educationGalleryImages.filter(i => i.category === 'Care Point Classes').length,
        coverUrl: educationGalleryImages.find(i => i.category === 'Care Point Classes')?.url || educationGalleryImages[0].url,
        year: '2026'
      },
      {
        id: 'folder_seminars',
        categoryKey: 'Educational Seminar',
        titleEn: 'National Educational Seminars',
        titleHi: 'राष्ट्रीय शैक्षणिक सेमिनार एवं मार्गदर्शन',
        descEn: 'Career counseling, civil services bootcamps, and merit guidance programs',
        descHi: 'करियर मार्गदर्शन, सिविल सेवा बूटकैंप एवं प्रतिभा सम्मान समारोह',
        count: educationGalleryImages.filter(i => i.category === 'Educational Seminar').length,
        coverUrl: educationGalleryImages.find(i => i.category === 'Educational Seminar')?.url || educationGalleryImages[1].url,
        year: '2026'
      },
      {
        id: 'folder_movement',
        categoryKey: 'Community Movement',
        titleEn: 'Educational Reform Rallies',
        titleHi: 'शिक्षा क्रांति एवं सामुदायिक सम्मेलन',
        descEn: 'Socio-educational reform summits and community awareness gatherings',
        descHi: 'सामाजिक-शैक्षणिक सुधार शिखर सम्मेलन एवं सामुदायिक जागरूकता अभियान',
        count: educationGalleryImages.filter(i => i.category === 'Community Movement').length,
        coverUrl: educationGalleryImages.find(i => i.category === 'Community Movement')?.url || educationGalleryImages[2].url,
        year: '2025'
      },
      {
        id: 'folder_merit',
        categoryKey: 'General Education',
        titleEn: 'Academic Merit & Honors',
        titleHi: 'अकादमिक मेधावी एवं प्रतिभा सम्मान',
        descEn: 'Honoring top achievers, board exam toppers, and competitive qualifiers',
        descHi: 'बोर्ड टॉपर, नीट/आईआईटी व सिविल सेवा में चयनित होनहार विद्यार्थियों का सम्मान',
        count: educationGalleryImages.filter(i => i.category === 'General Education').length,
        coverUrl: educationGalleryImages.find(i => i.category === 'General Education')?.url || educationGalleryImages[3].url,
        year: '2026'
      }
    ];
  }, []);

  // Filter Logic
  const filteredImages = useMemo(() => {
    return educationGalleryImages.filter((item, idx) => {
      // 1. Folder filter
      if (activeFolder) {
        const folder = eventFolders.find(f => f.id === activeFolder);
        if (folder && item.category !== folder.categoryKey) return false;
      }

      // 2. Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;

      // 3. Year filter (synthetic year tag or distribution based on drive ID)
      if (selectedYear !== 'All') {
        const itemYear = (idx % 2 === 0) ? '2026' : (idx % 3 === 0) ? '2025' : '2024';
        if (itemYear !== selectedYear) return false;
      }

      // 4. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitleEn = item.titleEn.toLowerCase().includes(q);
        const matchTitleHi = item.titleHi.includes(q);
        const matchCat = item.category?.toLowerCase().includes(q);
        const matchId = item.driveId?.toLowerCase().includes(q);
        if (!matchTitleEn && !matchTitleHi && !matchCat && !matchId) return false;
      }

      return true;
    });
  }, [activeFolder, selectedCategory, selectedYear, searchQuery, eventFolders]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // Infinite scroll intersection observer
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredImages.length && !isLoadingMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredImages.length));
            setIsLoadingMore(false);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredImages.length, isLoadingMore]);

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeFolder, selectedCategory, selectedYear, searchQuery]);

  const currentLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  const lightboxItems = useMemo(() => {
    return filteredImages.map(img => ({
      src: img.url,
      title: currentLanguage === 'en' ? img.titleEn : img.titleHi,
      description: `Category: ${img.category} • Drive ID: ${img.driveId}`,
      category: img.category,
      album: 'Educational Gallery'
    }));
  }, [filteredImages, currentLanguage]);

  return (
    <div className="space-y-8 py-4 sm:py-6" id="educational_events_gallery_root">
      {/* 1. SECTION HEADER */}
      <div className="bg-gradient-to-r from-[#041A0E] via-[#004B23] to-[#041A0E] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#F4C430] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B23]/90 border border-[#F4C430] text-[#FFD54A] text-xs font-black uppercase tracking-wider shadow">
            <GraduationCap className="w-4 h-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'SPECIAL CATEGORY: EDUCATIONAL EVENTS' : 'विशेष श्रेणी: शैक्षणिक कार्यक्रम एवं आयोजन'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] tracking-tight">
            Educational Events Gallery
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
            {currentLanguage === 'en'
              ? 'Automatically loaded HD photographs from the Education Image Library capturing Care Point Classes, career guidance seminars, academic honor rallies, and youth bootcamps.'
              : 'केयर पॉइंट क्लासेज, करियर मार्गदर्शन सेमिनार, मेधावी सम्मान रैलियों एवं युवा सम्मेलनों की उच्च-गुणवत्ता वाली एचडी फोटो संग्रह।'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-amber-200 font-mono">
            <span className="bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700">
              508 HD Educational Assets
            </span>
            <span className="bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700">
              Infinite Vertical Scroll
            </span>
          </div>
        </div>
      </div>

      {/* 2. FOLDER STYLE LAYOUT (4 Interactive Folders) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-serif font-bold text-gray-900 flex items-center gap-2">
            <Folder className="w-5 h-5 text-[#004B23]" />
            <span>{currentLanguage === 'en' ? 'Event Albums (Folder Style)' : 'कार्यक्रम एल्बम (फ़ोल्डर शैली)'}</span>
          </h3>

          {activeFolder && (
            <button
              onClick={() => setActiveFolder(null)}
              className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full border border-red-200 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Show All Folders</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventFolders.map((folder) => {
            const isSelected = activeFolder === folder.id;
            return (
              <div
                key={folder.id}
                onClick={() => {
                  if (isSelected) {
                    setActiveFolder(null);
                  } else {
                    setActiveFolder(folder.id);
                    setSelectedCategory('All');
                  }
                }}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                  isSelected
                    ? 'bg-[#004B23] text-white border-[#F4C430] scale-102'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-[#004B23]'
                }`}
              >
                {/* Folder Top Tab Simulation */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl flex items-center justify-center ${isSelected ? 'bg-[#F4C430] text-[#004B23]' : 'bg-emerald-50 text-[#004B23] group-hover:bg-[#004B23] group-hover:text-white transition'}`}>
                    <Folder className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full font-mono ${isSelected ? 'bg-emerald-950 text-[#FFD54A]' : 'bg-gray-100 text-gray-700'}`}>
                    {folder.count} Photos
                  </span>
                </div>

                {/* Folder Cover Image Preview */}
                <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-gray-900 border border-black/10">
                  <img
                    src={folder.coverUrl}
                    alt={folder.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                    {folder.year}
                  </span>
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? 'text-[#FFD54A]' : 'text-gray-900'}`}>
                    {currentLanguage === 'en' ? folder.titleEn : folder.titleHi}
                  </h4>
                  <p className={`text-[11px] line-clamp-2 mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-gray-500'}`}>
                    {currentLanguage === 'en' ? folder.descEn : folder.descHi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. FILTERS BAR (Search, Event Filter, Year Filter) */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Search educational events...' : 'शैक्षणिक कार्यक्रम खोजें...'}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 focus:outline-none focus:border-[#004B23]"
            />
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Year:
            </span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedYear === y
                    ? 'bg-[#004B23] text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveFolder(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat.id && !activeFolder
                  ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430] scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {currentLanguage === 'en' ? cat.en : cat.hi}
            </button>
          ))}
        </div>
      </div>

      {/* 4. INFINITE SCROLL MASONRY PHOTO GRID */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl p-6">
          <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-800">No educational event photos found</h3>
          <p className="text-xs text-gray-500 mt-1">Try resetting your search query or year filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map((item, idx) => (
            <motion.div
              key={`${item.id}_${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (idx % 12) * 0.02 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#F4C430] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              onClick={() => {
                setLightboxIndex(idx);
                setZoomScale(1);
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <OptimizedEduImage
                  src={item.url}
                  alt={currentLanguage === 'en' ? item.titleEn : item.titleHi}
                  className="w-full h-full"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#F4C430] text-[#004B23] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-black uppercase text-white bg-[#004B23]/90 px-2.5 py-0.5 rounded border border-[#FFD54A]/40 font-mono">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-3 bg-white border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">
                  {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* 5. INFINITE SCROLL TRIGGER */}
      <div ref={observerRef} className="py-6 text-center">
        {isLoadingMore ? (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-[#004B23] font-bold text-xs border border-emerald-200 shadow-sm animate-pulse">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Loading more HD educational photos...</span>
          </div>
        ) : visibleCount >= filteredImages.length && filteredImages.length > 0 ? (
          <div className="text-xs font-bold text-gray-500 bg-gray-100 py-2 px-5 rounded-full inline-block border border-gray-200">
            Showing all {filteredImages.length} HD Educational Event Photos
          </div>
        ) : null}
      </div>

      {/* 6. FULL HD LIGHTBOX & IMAGE VIEWER */}
      <PremiumLightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={lightboxItems}
        initialIndex={lightboxIndex ?? 0}
        albumTitle="Educational Events Gallery"
      />
    </div>
  );
}
