import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, Sparkles, BookOpen, Award } from 'lucide-react';
import { educationGalleryImages, EducationImageItem } from '../data/educationGalleryImages';
import { Language } from '../types';
import EducationalBackgroundWrapper from './common/EducationalBackgroundWrapper';
import OptimizedEduImage from './common/OptimizedEduImage';

interface EducationalExcellenceGalleryProps {
  currentLanguage: Language;
  onNavigate?: (tabId: string) => void;
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

export default function EducationalExcellenceGallery({ currentLanguage, onNavigate }: EducationalExcellenceGalleryProps) {
  // Pick random selection of images for the marquee row
  const [images] = useState<EducationImageItem[]>(() => {
    const shuffled = shuffleArray(educationGalleryImages);
    return shuffled.slice(0, 24); // 24 items for horizontal marquee
  });

  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Duplicate list for seamless infinite loop scroll
  const marqueeItems = [...images, ...images];

  return (
    <EducationalBackgroundWrapper sectionTitle="Educational Excellence">
      <section className="py-14 sm:py-16 text-white relative overflow-hidden border-y-4 border-[#F4C430]/30" id="educational_excellence_section">
      {/* Decorative Gold Stars / Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23]/90 border border-[#F4C430]/40 text-[#FFD54A] text-xs font-extrabold uppercase tracking-widest shadow-md mb-3">
          <GraduationCap className="w-4 h-4 text-[#F4C430]" />
          <span>{currentLanguage === 'en' ? 'CARE POINT & ACADEMIC MISSION' : 'शैक्षणिक उत्कृष्टता एवं कोचिंग'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
          Educational Excellence
        </h2>

        <p className="text-amber-200/90 text-sm sm:text-base font-medium max-w-2xl mx-auto mt-2 leading-relaxed">
          Empowering Students Through Quality Education
        </p>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded mt-3"></div>
      </div>

      {/* Horizontal Auto-Scrolling Marquee Gallery Container */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="horizontal_autoscroll_gallery"
      >
        {/* Soft Vignette Gradients on Left and Right Sides */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#041A0E] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#041A0E] to-transparent z-20 pointer-events-none"></div>

        <motion.div 
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear'
            }
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div 
              key={`${item.id}_${idx}`}
              className="w-60 sm:w-72 h-80 sm:h-96 shrink-0 rounded-2xl overflow-hidden bg-emerald-950 border-2 border-emerald-800/60 shadow-xl group hover:border-[#F4C430] hover:scale-105 transition-all duration-300 relative flex flex-col justify-end cursor-pointer"
              onClick={() => onNavigate && onNavigate('education-gallery')}
            >
              {/* Lazy Loading Image */}
              <OptimizedEduImage
                src={item.url}
                alt={currentLanguage === 'en' ? item.titleEn : item.titleHi}
                className="absolute inset-0 w-full h-full"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#F4C430] text-[#004B23] px-2 py-1 rounded text-[10px] font-black uppercase shadow">
                HD View
              </div>

              {/* Card Footer Content */}
              <div className="relative z-10 p-4 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD54A] bg-[#004B23]/90 px-2.5 py-0.5 rounded border border-[#FFD54A]/40 inline-block font-mono">
                  {item.category || 'Educational Asset'}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                  {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Action Link */}
      <div className="mt-6 text-center relative z-10">
        <button
          onClick={() => onNavigate && onNavigate('education-gallery')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4C430] text-[#004B23] font-black text-xs sm:text-sm hover:bg-[#FFD54A] transition shadow-lg hover:scale-105 cursor-pointer border-2 border-white/20"
        >
          <span>{currentLanguage === 'en' ? 'View Complete Education Gallery (508 HD Photos)' : 'संपूर्ण 508 फोटो गैलरी खोलें'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
    </EducationalBackgroundWrapper>
  );
}
