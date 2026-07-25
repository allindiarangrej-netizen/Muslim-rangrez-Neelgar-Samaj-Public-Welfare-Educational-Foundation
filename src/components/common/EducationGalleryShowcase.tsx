import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Sparkles, 
  Maximize2, 
  BookOpen, 
  Grid, 
  Layers,
  Award,
  CheckCircle2,
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';
import { useEducationImageLibrary } from '../../hooks/useEducationImageLibrary';
import SmartImage from './SmartImage';
import PremiumLightbox from './PremiumLightbox';
import { Language } from '../../types';

interface EducationGalleryShowcaseProps {
  currentLanguage?: Language;
  titleEn?: string;
  titleHi?: string;
  subtitleEn?: string;
  subtitleHi?: string;
  className?: string;
  compact?: boolean;
}

export default function EducationGalleryShowcase({
  currentLanguage = 'en',
  titleEn = 'Care Point & Community Education Image Library',
  titleHi = 'केयर पॉइंट एवं सामुदायिक शिक्षा चित्र पुस्तकालय',
  subtitleEn = 'Centralized high-resolution photo repository documenting Care Point Classes, educational achievements, seminars, and reform meetings.',
  subtitleHi = 'केयर पॉइंट क्लासेज, शैक्षणिक उपलब्धियों, सेमिनार और सुधार बैठकों को दर्शाने वाला केंद्रीय फोटो संग्रह।',
  className = '',
  compact = false
}: EducationGalleryShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const { images, validCount, totalCount, isValidating, brokenCount } = useEducationImageLibrary({
    category: selectedCategory === 'All' ? undefined : selectedCategory,
  });

  const categories = [
    { id: 'All', en: 'All Photos', hi: 'सभी चित्र' },
    { id: 'Care Point Classes', en: 'Care Point Classes', hi: 'केयर पॉइंट क्लासेज' },
    { id: 'Educational Seminar', en: 'Seminars & Guidance', hi: 'सेमिनार व मार्गदर्शन' },
    { id: 'Community Movement', en: 'Reform Movement', hi: 'सुधार आंदोलन' },
    { id: 'General Education', en: 'Student Awards', hi: 'छात्र सम्मान' },
  ];

  // Filter images by search query
  const filteredImages = images.filter(img => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      img.titleEn.toLowerCase().includes(query) ||
      img.titleHi.toLowerCase().includes(query) ||
      img.category.toLowerCase().includes(query) ||
      img.driveId.toLowerCase().includes(query)
    );
  });

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const lightboxItems = filteredImages.map(img => ({
    src: img.url,
    type: 'image' as const,
    title: currentLanguage === 'en' ? img.titleEn : img.titleHi,
    description: `${img.category} • Drive ID: ${img.driveId}`,
    metadata: 'Centralized Education Asset'
  }));

  return (
    <section className={`bg-gradient-to-b from-emerald-950/90 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-emerald-800/40 relative overflow-hidden ${className}`}>
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-lg text-emerald-950">
              <GraduationCap className="h-7 w-7 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                  Central Media Vault
                </span>
                <span className="text-xs text-amber-300/80 font-mono">
                  {images.length} Loaded Assets
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight mt-1">
                {currentLanguage === 'en' ? titleEn : titleHi}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-900/40 border border-emerald-700/50 px-4 py-2 rounded-xl text-xs font-medium text-emerald-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>
              {isValidating ? (
                <span className="inline-flex items-center gap-1.5 text-amber-300">
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  Validating Assets...
                </span>
              ) : (
                `100% Validated Central Library (${validCount} Active)`
              )}
            </span>
          </div>
        </div>

        <p className="text-sm md:text-base text-stone-300 max-w-3xl leading-relaxed">
          {currentLanguage === 'en' ? subtitleEn : subtitleHi}
        </p>
      </div>

      {/* Control Toolbar: Categories + Search */}
      {!compact && (
        <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-stone-900/80 p-3 rounded-2xl border border-stone-800">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-950/50'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700/80 hover:text-white'
                  }`}
                >
                  {currentLanguage === 'en' ? cat.en : cat.hi}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Search gallery...' : 'गैलरी में खोजें...'}
              className="w-full bg-stone-950/80 border border-stone-700/60 rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 hover:border-amber-400/60 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <SmartImage
                src={img.url}
                alt={img.titleEn}
                loading="lazy"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-1.5 bg-black/60 rounded-lg text-amber-300 backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-emerald-500/80 text-[9px] font-bold text-white rounded-md mb-1 uppercase tracking-wider">
                    {img.category}
                  </span>
                  <p className="text-[11px] font-semibold text-white line-clamp-1">
                    {currentLanguage === 'en' ? img.titleEn : img.titleHi}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredImages.length === 0 && (
        <div className="relative z-10 text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800">
          <ImageIcon className="h-12 w-12 text-stone-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-stone-300">
            {currentLanguage === 'en' ? 'No Images Found' : 'कोई चित्र नहीं मिला'}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {currentLanguage === 'en' 
              ? 'Try adjusting your search query or selected category.' 
              : 'कृपया अपनी खोज या चयनित श्रेणी बदलें।'}
          </p>
        </div>
      )}

      {/* Lightbox Viewer */}
      {lightboxOpen && (
        <PremiumLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={lightboxItems}
          initialIndex={activeImageIndex}
        />
      )}
    </section>
  );
}
