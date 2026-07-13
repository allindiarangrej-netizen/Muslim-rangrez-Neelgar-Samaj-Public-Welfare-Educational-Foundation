import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, UserPlus, FileText, Landmark, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data/mediaRegistry';

interface HeroProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

export default function Hero({ currentLanguage, onNavigate }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      titleEn: 'Empowering the Rangrez Community Nationwide',
      titleHi: 'देशभर में रंगरेज बिरादरी की तरक़्क़ी और सशक्तिकरण',
      subtitleEn: 'Fostering education, socio-economic solidarity, secure matrimonial support, and dynamic growth dashboards.',
      subtitleHi: 'तालीम, समाजी-माशी इत्तेहाद (सामाजिक-आर्थिक एकजुटता), महफ़ूज़ निकाह मंच और गतिशील तरक़्क़ी डैशबोर्ड को बढ़ावा देना।',
      ctaEn: 'Become a Member',
      ctaHi: 'मेम्बर बनें',
      target: 'membership-register',
      taglineEn: 'ESTABLISHED REGISTERED NATIONAL NGO • TRUST & VERIFICATION',
      taglineHi: 'स्थापित रजिस्टर्ड क़ौमी एनजीओ • भरोसा और तस्दीक़ (सत्यापन)',
      bgImage: IMAGES.hero.community
    },
    {
      titleEn: 'Securing the Future of our Students',
      titleHi: 'हमारे छात्रों के मुस्तक़बिल (भविष्य) को महफ़ूज़ करना',
      subtitleEn: 'Access national scholarships, educational grants, professional directories, and modern career development hubs.',
      subtitleHi: 'क़ौमी वज़ीफ़ा (राष्ट्रीय छात्रवृत्ति), तालीमी इमदाद, पेशावरान निर्देशिका और जदीद करियर तरक़्क़ी मरकज़ तक पहुंचें।',
      ctaEn: 'Explore Scholarship Funds',
      ctaHi: 'तालीमी वज़ीफ़ा (स्कॉलरशिप) फंड देखें',
      target: 'education',
      taglineEn: 'EDUCATION & SKILL DEVELOPMENT CELL',
      taglineHi: 'तालीम और हुनरमंदी (कौशल विकास) शोबा',
      bgImage: IMAGES.hero.education
    },
    {
      titleEn: 'Secure & Verified Matrimonial Portal',
      titleHi: 'महफ़ूज़ और तस्दीक़-शुदा शादी-ब्याह मंच',
      subtitleEn: 'Strict privacy controls with encrypted tokenized profiles, blur visual overlays, and authorized contact release frameworks.',
      subtitleHi: 'महफ़ूज़ टोकन प्रोफाइल, ब्लर नज़ारे और मख़सूस राब्ता (संपर्क) ज़ाहिर करने के इंतज़ाम के साथ सख़्त प्राइवेसी।',
      ctaEn: 'Search Bride/Groom Profiles',
      ctaHi: 'रिश्ते (दूल्हा/दुल्हन प्रोफाइल) तलाश करें',
      target: 'matrimonial',
      taglineEn: 'ISLAMIC FAMILY VALUES & VERIFIED PROFILES ONLY',
      taglineHi: 'सिर्फ़ इस्लामी ख़ानदानी रिवायत और तस्दीक़-शुदा प्रोफाइल',
      bgImage: IMAGES.hero.matrimonial
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
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
        <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-left">
        <div className="max-w-3xl space-y-6">
          {/* Animated Badge Tagline */}
          <div className="inline-flex items-center space-x-2 bg-[#F4C430]/15 border border-[#F4C430]/35 px-3 py-1.5 rounded-full" id="hero_badge_tag">
            <ShieldCheck className="h-4 w-4 text-[#F4C430]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#F4C430] tracking-wider uppercase">
              {currentLanguage === 'en' ? slides[activeSlide].taglineEn : slides[activeSlide].taglineHi}
            </span>
          </div>

          {/* Dynamic Slide Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight animate-fadeIn" id="hero_title">
            {currentLanguage === 'en' ? (
              slides[activeSlide].titleEn
            ) : (
              <span className="block">
                <span className="block text-white">बुराइयों और बेबुनियाद रस्मों से नज़ात,</span>
                <span className="block mt-1 text-white">
                  <span className="text-[#F4C430]">तालीम और इल्म की ओर रुख़</span> , दीन व दुनिया दोनों में तरक़्क़ी हमारा मक़सद है !
                </span>
              </span>
            )}
          </h2>

          {/* Dynamic Slide Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed max-w-2xl" id="hero_subtitle">
            {currentLanguage === 'en' ? slides[activeSlide].subtitleEn : slides[activeSlide].subtitleHi}
          </p>

          {/* Interactive CTAs */}
          <div className="pt-4 flex flex-wrap gap-4" id="hero_ctas">
            <button
              onClick={() => onNavigate(slides[activeSlide].target)}
              className="px-6 py-3.5 bg-[#F4C430] hover:bg-[#c29f2e] text-[#0b132b] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center space-x-2 transition duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              <span>{currentLanguage === 'en' ? slides[activeSlide].ctaEn : slides[activeSlide].ctaHi}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onNavigate('membership-census')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center space-x-2 transition duration-300"
            >
              <FileText className="h-4 w-4 text-[#F4C430]" />
              <span>{currentLanguage === 'en' ? 'Register Family Census' : 'खानदानी मर्दुमशुमारी दर्ज करें'}</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Action Icons inside the banner footer */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8" id="quick_access_pills">
          <div 
            onClick={() => onNavigate('schemes')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#F4C430]">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Government Schemes' : 'सरकारी स्कीमें'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Eligibility Checker Wizard' : 'पात्रता (योग्यता) जांचने का ज़रिया'}
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('membership-register')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#F4C430]">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Digital ID & Verification' : 'डिजिटल आईडी और तस्दीक़'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Download verified QR Card' : 'तस्दीक़-शुदा क्यूआर कार्ड डाउनलोड करें'}
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('education')}
            className="flex items-center space-x-4 bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <div className="p-3 bg-[#004B23] rounded-full text-[#F4C430]">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLanguage === 'en' ? 'Socio-Economic Census' : 'समाजी-माशी मर्दुमशुमारी'}
              </h4>
              <p className="text-xs text-gray-400">
                {currentLanguage === 'en' ? 'Dynamic family tree models' : 'ख़ानदानी शजरा (फैमिली ट्री) मॉडल'}
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
              className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#F4C430]' : 'w-2 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Elegant Registered Tagline & Slogan Banner */}
    <div className="bg-[#003118] border-y-2 border-[#F4C430] relative py-8 px-4 text-center overflow-hidden" id="national_tagline_banner">
      {/* Subtle light opacity Islamic geometric background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-3">
        <p className="text-[#F4C430] font-mono text-[10px] uppercase tracking-widest">
          {currentLanguage === 'en' ? 'OUR GUIDING COVENANT & REFORM VALUE' : 'ख़ास मक़सद और बुनियादी उसूल'}
        </p>
        
        {/* Primary Tagline */}
        <h3 className="text-lg sm:text-2xl font-serif font-extrabold text-[#FDFBF7] tracking-wide leading-relaxed filter drop-shadow">
          "बुराइयों और बेबुनियाद रस्मों से नजात, तालीम व इल्म की ओर रुख"
        </h3>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-2 my-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#F4C430]"></div>
          <span className="text-[#F4C430] text-xs">◆</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#F4C430]"></div>
        </div>

        {/* Secondary Motto */}
        <p className="text-emerald-300 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase">
          "दीन व दुनिया दोनों में तरक्की हमारा मकसद है"
        </p>
      </div>
    </div>
    </>
  );
}
