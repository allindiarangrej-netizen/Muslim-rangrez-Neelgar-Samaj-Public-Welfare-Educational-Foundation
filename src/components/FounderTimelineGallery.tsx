import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Milestone, Calendar, GraduationCap, Award, Sparkles, RefreshCw, 
  ZoomIn, ChevronRight, CheckCircle2, BookOpen, Layers, X, Users
} from 'lucide-react';
import { educationGalleryImages, EducationImageItem } from '../data/educationGalleryImages';
import { Language } from '../types';
import OptimizedEduImage from './common/OptimizedEduImage';
import PremiumLightbox from './common/PremiumLightbox';

interface FounderTimelineGalleryProps {
  currentLanguage: Language;
}

interface TimelineMilestone {
  id: string;
  stageEn: string;
  stageHi: string;
  year: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  categoryMatch: string[];
}

// Helper to pick random unique N items from an array
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function FounderTimelineGallery({ currentLanguage }: FounderTimelineGalleryProps) {
  const milestones: TimelineMilestone[] = [
    {
      id: 'beginning',
      stageEn: 'Beginning',
      stageHi: 'शुरुआत (Beginning)',
      year: '2012 - 2014',
      titleEn: '1. Grassroots Vision & Academic Upliftment',
      titleHi: '1. ग्रामीण शिक्षा क्रांति एवं प्रारंभिक विचार',
      descEn: 'Lecturer Imtiyaz Khan initiated free science guidance and educational awareness meetings in Kailaras, Morena to motivate rural youth towards higher education and competitive goals.',
      descHi: 'व्याख्याता इम्तियाज खान द्वारा केलारस (मुरैना) में ग्रामीण युवाओं को उच्च शिक्षा व प्रतियोगी परीक्षाओं के लिए प्रेरित करने हेतु निशुल्क विज्ञान मार्गदर्शन की शुरुआत।',
      categoryMatch: ['Community Movement', 'General Education']
    },
    {
      id: 'early_classroom',
      stageEn: 'Early Classroom',
      stageHi: 'प्रारंभिक कक्षाएं (Early Classroom)',
      year: '2015 - 2017',
      titleEn: '2. Early Classroom & Care Point Foundation',
      titleHi: '2. प्रथम कोचिंग सेंटर एवं केयर पॉइंट क्लासेज',
      descEn: 'Establishment of formal science classrooms with structured board exam coaching, physics-chemistry lab demonstrations, and discipline-oriented study circles.',
      descHi: 'भौतिकी, रसायन व जीवविज्ञान विषय की गहन कोचिंग के साथ केयर POINT क्लासेज की स्थापना एवं नियमित टेस्ट सीरीज़ का शुभारंभ।',
      categoryMatch: ['Care Point Classes']
    },
    {
      id: 'coaching_growth',
      stageEn: 'Coaching Growth',
      stageHi: 'कोचिंग विस्तार (Coaching Growth)',
      year: '2018 - 2021',
      titleEn: '3. Coaching Growth & Expansion',
      titleHi: '3. कोचिंग विस्तार एवं नीट/आईआईटी फाउंडेशन',
      descEn: 'Scaling up Care Point Classes to coach hundreds of students annually with specialized NEET, JEE, and NTSE competitive examination modules.',
      descHi: 'सैकड़ों विद्यार्थियों हेतु NEET, JEE एवं प्रतियोगी परीक्षाओं के लिए विशेष बैचों की शुरुआत एवं उच्च-स्तरीय अध्ययन सामग्री वितरण।',
      categoryMatch: ['Care Point Classes', 'Educational Seminar']
    },
    {
      id: 'student_success',
      stageEn: 'Student Success',
      stageHi: 'छात्र सफलता (Student Success)',
      year: '2022 - 2024',
      titleEn: '4. Student Success & Hall of Fame',
      titleHi: '4. मेधावी सफलता एवं सम्मान समारोह',
      descEn: 'Dozens of students qualifying NEET medical admissions, IIT/NIT engineering selections, state merit ranks, and government employment exams.',
      descHi: 'मेडिकल (NEET), इंजीनियरिंग (JEE) और शासकीय सेवाओं में चयनित होनहार विद्यार्थियों का विशाल नागरिक सम्मान समारोह एवं छात्रवृत्ति वितरण।',
      categoryMatch: ['General Education', 'Educational Seminar']
    },
    {
      id: 'present_day',
      stageEn: 'Present Day',
      stageHi: 'वर्तमान स्वरूप (Present Day)',
      year: '2025 - Present',
      titleEn: '5. Present Day & Digital Community Legacy',
      titleHi: '5. वर्तमान समय एवं अखिल भारतीय डिजिटल पोर्टल',
      descEn: 'Centralizing 508+ high-resolution education assets, online career counseling, and nationwide scholarship portals to empower future generations.',
      descHi: '508 से अधिक एचडी शिक्षा चित्रों का डिजिटल संग्रह, ऑनलाइन करियर मार्गदर्शन एवं अखिल भारतीय स्तर पर समाज के होनहारों को प्रोत्साहन।',
      categoryMatch: ['Care Point Classes', 'Community Movement', 'Educational Seminar', 'General Education']
    }
  ];

  // Random image mapping state for each milestone
  const [milestoneImages, setMilestoneImages] = useState<Record<string, EducationImageItem[]>>({});
  const [selectedImage, setSelectedImage] = useState<EducationImageItem | null>(null);

  // Generate random images for each milestone on mount
  const refreshRandomImages = () => {
    const newMap: Record<string, EducationImageItem[]> = {};
    milestones.forEach((m) => {
      const candidates = educationGalleryImages.filter((img) =>
        m.categoryMatch.includes(img.category)
      );
      const pool = candidates.length >= 3 ? candidates : educationGalleryImages;
      newMap[m.id] = getRandomItems(pool, 3);
    });
    setMilestoneImages(newMap);
  };

  useEffect(() => {
    refreshRandomImages();
  }, []);

  return (
    <div className="bg-gradient-to-b from-stone-900 via-[#004B23] to-stone-950 text-white rounded-3xl p-6 sm:p-10 border-2 border-[#F4C430] shadow-2xl relative overflow-hidden my-10" id="founder_timeline_gallery_root">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-emerald-800/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] border border-[#F4C430] text-[#FFD54A] text-xs font-black uppercase tracking-wider mb-2">
            <Milestone className="w-4 h-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'FOUNDER PROFILE TIMELINE GALLERY' : 'संस्थापक प्रोफ़ाइल टाइमलाइन गैलरी'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A]">
            Lecturer Imtiyaz Khan Journey Milestone Timeline
          </h3>

          <p className="text-xs sm:text-sm text-emerald-100 font-light mt-1 max-w-2xl">
            {currentLanguage === 'en'
              ? 'Chronological progression of Founder Lecturer Imtiyaz Khan and Care Point Classes, paired automatically with random photos from the Education Image Library.'
              : 'संस्थापक व्याख्याता इम्तियाज खान एवं केयर पॉइंट क्लासेज की ऐतिहासिक यात्रा के 5 मुख्य पड़ाव तथा शिक्षा पुस्तकालय के चित्र।'}
          </p>
        </div>

        <button
          onClick={refreshRandomImages}
          className="px-4 py-2.5 bg-[#F4C430] hover:bg-amber-400 text-[#004B23] rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg transition transform hover:scale-105 cursor-pointer shrink-0"
        >
          <RefreshCw className="w-4 h-4 text-[#004B23]" />
          <span>{currentLanguage === 'en' ? 'Shuffle Milestone Photos' : 'चित्र बदलें (Random Photos)'}</span>
        </button>
      </div>

      {/* Timeline List */}
      <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-1 before:bg-gradient-to-b before:from-[#F4C430] before:via-emerald-500 before:to-[#F4C430]">
        {milestones.map((m, idx) => {
          const imgs = milestoneImages[m.id] || [];
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-center justify-between gap-6 ${
                isEven ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Badge */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#F4C430] text-[#004B23] border-4 border-stone-900 font-black flex items-center justify-center text-xs shadow-xl z-10">
                {idx + 1}
              </div>

              {/* Text Card */}
              <div className="w-full sm:w-[45%] bg-stone-900/90 p-5 rounded-2xl border border-emerald-700/60 shadow-xl ml-10 sm:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-950 text-[#FFD54A] px-2.5 py-1 rounded-full border border-emerald-700 font-mono">
                    • {currentLanguage === 'en' ? m.stageEn : m.stageHi}
                  </span>
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F4C430]" />
                    {m.year}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-amber-300 mb-1.5">
                  {currentLanguage === 'en' ? m.titleEn : m.titleHi}
                </h4>

                <p className="text-xs text-gray-200 leading-relaxed font-light">
                  {currentLanguage === 'en' ? m.descEn : m.descHi}
                </p>
              </div>

              {/* Images Container Beside Timeline Milestone */}
              <div className="w-full sm:w-[45%] bg-emerald-950/70 p-3 rounded-2xl border border-emerald-800/80 ml-10 sm:ml-0">
                <div className="text-[10px] font-bold text-amber-300 mb-2 flex items-center gap-1 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EDUCATION LIBRARY ASSETS ({imgs.length} PHOTOS)</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {imgs.map((imgItem, i) => (
                    <div
                      key={`${imgItem.id}_${i}`}
                      onClick={() => setSelectedImage(imgItem)}
                      className="relative h-24 rounded-xl overflow-hidden bg-stone-900 border border-emerald-600/40 hover:border-[#F4C430] transition cursor-pointer group shadow"
                    >
                      <OptimizedEduImage
                        src={imgItem.url}
                        alt={currentLanguage === 'en' ? imgItem.titleEn : imgItem.titleHi}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-[#F4C430]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Universal Premium Lightbox */}
      <PremiumLightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        initialIndex={0}
        items={selectedImage ? [{
          src: selectedImage.url,
          title: currentLanguage === 'en' ? selectedImage.titleEn : selectedImage.titleHi,
          category: selectedImage.category,
          description: `Educational Mission Timeline Asset • Category: ${selectedImage.category}`
        }] : []}
      />
    </div>
  );
}
