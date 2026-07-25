import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Image as ImageIcon, GraduationCap, Award, BookOpen } from 'lucide-react';
import { educationGalleryImages, EducationImageItem } from '../data/educationGalleryImages';
import { Language } from '../types';
import OptimizedEduImage from './common/OptimizedEduImage';

interface ImtiyazKhanSlideshowProps {
  currentLanguage: Language;
}

// Fisher-Yates shuffle array helper
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ImtiyazKhanSlideshow({ currentLanguage }: ImtiyazKhanSlideshowProps) {
  // Shuffled deck state to guarantee no repeating images until all items have been shown
  const [deck, setDeck] = useState<EducationImageItem[]>(() => shuffleArray(educationGalleryImages));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto transition every 7 seconds (7000 ms)
  useEffect(() => {
    if (isPaused || deck.length === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, deck]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= deck.length - 1) {
        // All images shown once: reshuffle to start a fresh non-repeating cycle
        setDeck(shuffleArray(educationGalleryImages));
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? deck.length - 1 : prev - 1));
  };

  const currentItem = deck[currentIndex] || educationGalleryImages[0];

  return (
    <div className="my-8 max-w-5xl mx-auto px-2 sm:px-4">
      {/* Header Badge */}
      <div className="flex items-center justify-between gap-3 mb-4 bg-[#004B23] text-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#F4C430] shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F4C430] text-[#004B23] flex items-center justify-center font-black shadow">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#FFD54A] flex items-center gap-2">
              <span>Lecturer Imtiyaz Khan Educational Mission Gallery</span>
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            </h3>
            <p className="text-[11px] text-emerald-100 font-medium">
              Care Point Classes • Science Education • Educational Reform
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-700 text-xs text-emerald-200 font-mono">
          <span>{currentIndex + 1} / {deck.length} HD Photos</span>
        </div>
      </div>

      {/* Main Slideshow Viewport */}
      <div 
        className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#F4C430] min-h-[380px] sm:min-h-[480px] md:min-h-[520px] flex flex-col justify-between bg-black group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        id="imtiyaz_khan_slideshow_container"
      >
        {/* Slightly Blurred Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={`blur_${currentItem.id}`}
              src={currentItem.url}
              alt="Blurred Background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover scale-110 filter blur-md"
            />
          </AnimatePresence>
        </div>

        {/* Dark overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none z-0"></div>

        {/* Status Badge Top Left */}
        <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23]/90 border border-[#F4C430] text-[#FFD54A] text-xs font-extrabold shadow">
            <Award className="w-3.5 h-3.5 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'Care Point Educational Library' : 'केयर पॉइंट शैक्षणिक लाइब्रेरी'}</span>
          </div>

          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-700 text-[11px] text-gray-300 font-medium">
            {isPaused ? (
              <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Pause className="w-3 h-3" />
                <span>Paused on Hover</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Play className="w-3 h-3 animate-pulse" />
                <span>Auto-Advance (7s)</span>
              </span>
            )}
          </div>
        </div>

        {/* Main Foreground Image */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-2 sm:p-4 my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full max-w-2xl h-[300px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
            >
              <OptimizedEduImage
                src={currentItem.url}
                alt={currentLanguage === 'en' ? currentItem.titleEn : currentItem.titleHi}
                className="w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Arrow Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#F4C430] text-white hover:text-[#004B23] flex items-center justify-center transition-all duration-300 border border-white/30 shadow-2xl hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#F4C430] text-white hover:text-[#004B23] flex items-center justify-center transition-all duration-300 border border-white/30 shadow-2xl hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Caption Overlay */}
        <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-black uppercase text-[#004B23] bg-[#F4C430] px-2.5 py-0.5 rounded font-mono">
                  {currentItem.category || 'Educational Asset'}
                </span>
                <span className="text-[10px] text-gray-300 font-mono">
                  Asset ID: #{currentItem.driveId?.substring(0, 8)}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {currentLanguage === 'en' ? currentItem.titleEn : currentItem.titleHi}
              </h4>
            </div>

            {/* Slide Index Counter for Mobile & Desktop */}
            <div className="shrink-0 text-right">
              <span className="text-xs font-mono font-bold text-[#FFD54A] bg-[#004B23]/80 px-3 py-1 rounded-full border border-[#FFD54A]/40 inline-block">
                {currentIndex + 1} / {deck.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
