import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, UserPlus, FileText, Landmark, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

export default function Hero({ currentLanguage, onNavigate }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      titleEn: 'Empowering the Rangrez Community Nationwide',
      titleHi: 'देशभर में रंगरेज समुदाय का सशक्तिकरण',
      subtitleEn: 'Fostering education, socio-economic solidarity, secure matrimonial support, and dynamic growth dashboards.',
      subtitleHi: 'शिक्षा, सामाजिक-आर्थिक एकजुटता, सुरक्षित वैवाहिक मंच और गतिशील विकास डैशबोर्ड को बढ़ावा देना।',
      ctaEn: 'Become a Member',
      ctaHi: 'सदस्य बनें',
      target: 'membership-register',
      taglineEn: 'ESTABLISHED REGISTERED NATIONAL NGO • TRUST & VERIFICATION',
      taglineHi: 'स्थापित पंजीकृत राष्ट्रीय गैर सरकारी संगठन • विश्वास एवं सत्यापन',
      bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      titleEn: 'Securing the Future of our Students',
      titleHi: 'हमारे छात्रों के भविष्य को सुरक्षित करना',
      subtitleEn: 'Access national scholarships, educational grants, professional directories, and modern career development hubs.',
      subtitleHi: 'राष्ट्रीय छात्रवृत्ति, शैक्षिक अनुदान, व्यावसायिक निर्देशिका और आधुनिक करियर विकास केंद्रों तक पहुंचें।',
      ctaEn: 'Explore Scholarship Funds',
      ctaHi: 'छात्रवृत्ति कोष देखें',
      target: 'education',
      taglineEn: 'EDUCATION & SKILL DEVELOPMENT CELL',
      taglineHi: 'शिक्षा एवं कौशल विकास प्रकोष्ठ',
      bgImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop'
    },
    {
      titleEn: 'Secure & Verified Matrimonial Portal',
      titleHi: 'सुरक्षित और सत्यापित वैवाहिक मंच',
      subtitleEn: 'Strict privacy controls with encrypted tokenized profiles, blur visual overlays, and authorized contact release frameworks.',
      subtitleHi: 'एन्क्रिप्टेड टोकन प्रोफाइल, ब्लर विजुअल ओवरले और अधिकृत संपर्क जारी करने वाले ढांचे के साथ सख्त गोपनीयता नियंत्रण।',
      ctaEn: 'Search Bride/Groom Profiles',
      ctaHi: 'दूल्हा/दुल्हन प्रोफाइल खोजें',
      target: 'matrimonial',
      taglineEn: 'ISLAMIC FAMILY VALUES & VERIFIED PROFILES ONLY',
      taglineHi: 'केवल इस्लामी पारिवारिक मूल्य और सत्यापित प्रोफाइल',
      bgImage: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900 text-white min-h-[75vh] flex items-center" id="hero_section">
      {/* Dynamic Background Slide Wrapper */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[activeSlide].bgImage}
          alt="Community Showcase"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transition-all duration-1000 transform scale-105"
        />
        {/* Multilayer gradient overlays to match branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003118]/95 via-[#004B23]/80 to-[#0B132B]/90"></div>
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-left">
        <div className="max-w-3xl space-y-6">
          {/* Animated Badge Tagline */}
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-3 py-1.5 rounded-full" id="hero_badge_tag">
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
              {currentLanguage === 'en' ? slides[activeSlide].taglineEn : slides[activeSlide].taglineHi}
            </span>
          </div>

          {/* Dynamic Slide Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight animate-fadeIn" id="hero_title">
            {currentLanguage === 'en' ? slides[activeSlide].titleEn : slides[activeSlide].titleHi}
          </h2>

          {/* Dynamic Slide Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed max-w-2xl" id="hero_subtitle">
            {currentLanguage === 'en' ? slides[activeSlide].subtitleEn : slides[activeSlide].subtitleHi}
          </p>

          {/* Interactive CTAs */}
          <div className="pt-4 flex flex-wrap gap-4" id="hero_ctas">
            <button
              onClick={() => onNavigate(slides[activeSlide].target)}
              className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c29f2e] text-[#0b132b] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center space-x-2 transition duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              <span>{currentLanguage === 'en' ? slides[activeSlide].ctaEn : slides[activeSlide].ctaHi}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onNavigate('membership-census')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center space-x-2 transition duration-300"
            >
              <FileText className="h-4 w-4 text-[#D4AF37]" />
              <span>{currentLanguage === 'en' ? 'Register Family Census' : 'पारिवारिक जनगणना दर्ज करें'}</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Action Icons inside the banner footer */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8" id="quick_access_pills">
          <div 
            onClick={() => onNavigate('schemes')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#D4AF37]">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Government Schemes' : 'सरकारी योजनाएं'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Eligibility Checker Wizard' : 'पात्रता जांचने का टूल'}
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('membership-register')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#D4AF37]">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Digital ID & Verification' : 'डिजिटल आईडी और सत्यापन'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Download verified QR Card' : 'सत्यापित क्यूआर कार्ड डाउनलोड करें'}
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('education')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#D4AF37]">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Socio-Economic Census' : 'सामाजिक-आर्थिक जनगणना'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Dynamic family tree models' : 'गतिशील पारिवारिक पेड़ मॉडल'}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8 md:mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
