import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, ArrowRight, UserPlus, FileText, Landmark, BookOpen, 
  MapPin, Heart, Briefcase, Sparkles, Star, Video, Calendar, Hand, 
  Coins, HelpCircle, ChevronDown, ChevronUp, Award, UserCheck, Users, 
  GraduationCap, QrCode, Search, Building2, Eye, Shield, CheckCircle
} from 'lucide-react';
import { Language } from '../types';
import AnimatedCommunityStats from './AnimatedCommunityStats';
import NationalLeadership from './NationalLeadership';

interface HomeViewProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

export default function HomeView({ currentLanguage, onNavigate }: HomeViewProps) {
  // Stat counters animation
  const [stats, setStats] = useState({
    families: 0,
    students: 0,
    volunteers: 0,
    districts: 0,
    services: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        families: Math.floor((12850 / steps) * step),
        students: Math.floor((4620 / steps) * step),
        volunteers: Math.floor((1250 / steps) * step),
        districts: Math.floor((118 / steps) * step),
        services: Math.floor((15 / steps) * step)
      });

      if (step >= steps) {
        setStats({
          families: 12850,
          students: 4620,
          volunteers: 1250,
          districts: 118,
          services: 15
        });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Matrimonial Slide / active profiles
  const [activeMatrimonialIndex, setActiveMatrimonialIndex] = useState(0);

  // Map Selected State State
  const [selectedState, setSelectedState] = useState<string>('MP');

  const indiaStatesData = {
    'MP': { nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश', families: 5200, students: 1850, centers: 'Morena, Kailaras, Joura, Gwalior, Bhopal' },
    'UP': { nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश', families: 3900, students: 1400, centers: 'Agra, Kanpur, Lucknow, Varanasi' },
    'RJ': { nameEn: 'Rajasthan', nameHi: 'राजस्थान', families: 2100, students: 820, centers: 'Jaipur, Jodhpur, Kota, Udaipur' },
    'MH': { nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र', families: 1100, students: 380, centers: 'Mumbai, Pune, Nagpur, Aurangabad' },
    'GJ': { nameEn: 'Gujarat', nameHi: 'गुजरात', families: 550, students: 170, centers: 'Ahmedabad, Surat, Vadodara' }
  };

  const faqs = [
    {
      qEn: "How does the Family Census differ from standard Membership Registration?",
      qHi: "पारिवारिक जनगणना और मानक सदस्यता पंजीकरण में क्या अंतर है?",
      aEn: "Membership is for an individual to receive their verified QR Code ID. The Family Census aggregates blood relations, helping map socio-economic status, educational requirements, and family trees.",
      aHi: "सदस्यता व्यक्तिगत रूप से सत्यापित क्यूआर कोड आईडी प्राप्त करने के लिए है। पारिवारिक जनगणना रक्त संबंधों को जोड़ती है, जिससे सामाजिक-आर्थिक स्थिति, शैक्षिक आवश्यकताओं और पारिवारिक वंश वृक्ष का मानचित्रण करने में मदद मिलती है।"
    },
    {
      qEn: "Are the Matrimonial profiles accessible to the general public?",
      qHi: "क्या वैवाहिक प्रोफाइल आम जनता के लिए उपलब्ध हैं?",
      aEn: "No. Security and dignity are our highest priorities. All photos have automated visual overlays/blur. Contact release requires digital token approval from the guardian.",
      aHi: "नहीं। सुरक्षा और गरिमा हमारी सर्वोच्च प्राथमिकताएं हैं। सभी तस्वीरों में स्वचालित ब्लर ओवरले होते हैं। संपर्क विवरण केवल अभिभावक की डिजिटल टोकन स्वीकृति के बाद ही मिलता है।"
    },
    {
      qEn: "Is my contribution eligible for Section 80G tax benefits?",
      qHi: "क्या मेरा दान आयकर की धारा 80G के तहत कर लाभ के योग्य है?",
      aEn: "Yes, our central trust (Society Reg No. 02/42/01/28332/26) is fully registered and compliant. Direct online receipts are immediately generated.",
      aHi: "हाँ, हमारी केंद्रीय ट्रस्ट (सोसाइटी पंजीकरण संख्या 02/42/01/28332/26) पूरी तरह से पंजीकृत और अनुपालन योग्य है। ऑनलाइन रसीदें तुरंत प्रदान की जाती हैं।"
    },
    {
      qEn: "Who verifies the registration profiles?",
      qHi: "पंजीकरण प्रोफाइलों का सत्यापन कौन करता है?",
      aEn: "Our state and district-level executive secretaries verify identity proofs, local addresses, and traditional craft history before granting 'Verified' status.",
      aHi: "सत्यापित (Verified) स्थिति देने से पहले हमारे राज्य और जिला स्तर के कार्यकारी सचिव पहचान प्रमाण, स्थानीय पते और पारंपरिक कला इतिहास का भौतिक सत्यापन करते हैं।"
    }
  ];

  return (
    <div className="w-full bg-[#FDFBF7] text-[#1a2e22] selection:bg-[#D4AF37]/30 selection:text-emerald-950 font-sans" id="premium_homepage_root">
      
      {/* ========================================== */}
      {/* HERO SECTION: CINEMATIC & TRADITIONAL      */}
      {/* ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#062413] via-[#09351C] to-[#041A0E] text-white py-20 px-4 sm:px-6 lg:px-8" id="hero_cinematic">
        
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Islamic Arch Border Silhouette Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 100 L 0 30 C 10 15, 30 5, 50 5 C 70 5, 90 15, 100 30 L 100 100 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* Traditional Textile Mandala Spinning Slowly */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border border-[#D4AF37]/20 pointer-events-none animate-[spin_120s_linear_infinite] opacity-30 z-0">
          <div className="w-full h-full rounded-full border-4 border-dashed border-[#D4AF37]/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-double border-[#D4AF37]/15"></div>
          </div>
        </div>

        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full border border-[#D4AF37]/20 pointer-events-none animate-[spin_90s_linear_infinite] opacity-20 z-0">
          <div className="w-full h-full rounded-full border-4 border-dashed border-[#D4AF37]/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-double border-[#D4AF37]/15"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center space-y-10">
          
          {/* Tagline / Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37]/20 to-emerald-950/40 border border-[#D4AF37]/40 px-4 py-2 rounded-full shadow-inner animate-pulse" id="hero_badge">
            <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
              {currentLanguage === 'en' 
                ? 'ALL INDIA RANGREZ WELFARE TRUST • SOCIETY NO. 02/42/01/28332/26' 
                : 'अखिल भारतीय रंगरेज कल्याण ट्रस्ट • सोसाइटी सं. 02/42/01/28332/26'}
            </span>
          </div>

          {/* Emotional Cinematic Headline */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-lg" id="hero_headline">
              {currentLanguage === 'en' ? (
                <>
                  Dignity in Heritage, <br />
                  <span className="text-[#D4AF37]">Unity</span> for Future Generations.
                </>
              ) : (
                <>
                  विरासत में सम्मान, <br />
                  भावी पीढ़ियों के लिए <span className="text-[#D4AF37]">एकता और प्रगति</span>
                </>
              )}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[#F5EFE6] font-light leading-relaxed max-w-3xl mx-auto drop-shadow" id="hero_supporting_text">
              {currentLanguage === 'en' 
                ? 'Championing verified family census, national education scholarships, secure matrimonial platforms, vocational skill directories, and minority welfare schemes to build a resilient, united, and highly educated community.'
                : 'एक मजबूत, एकजुट और उच्च शिक्षित समाज के निर्माण के लिए सत्यापित पारिवारिक जनगणना, राष्ट्रीय छात्रवृत्ति, सुरक्षित वैवाहिक मंच, व्यावसायिक कौशल और सरकारी कल्याणकारी योजनाओं का मार्ग प्रशस्त करना।'}
            </p>
          </div>

          {/* Prominent CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" id="hero_ctas">
            <button
              onClick={() => onNavigate('membership-register')}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#C59B27] text-emerald-950 font-bold text-sm uppercase tracking-wider rounded shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-[#D4AF37]"
            >
              <UserPlus className="h-5 w-5" />
              <span>{currentLanguage === 'en' ? 'Become a Verified Member' : 'सत्यापित सदस्य बनें'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onNavigate('membership-census')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-900/40 hover:bg-emerald-900/60 text-white font-bold text-sm uppercase tracking-wider rounded border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5 text-[#D4AF37]" />
              <span>{currentLanguage === 'en' ? 'Register Family Census' : 'पारिवारिक जनगणना प्रपत्र'}</span>
            </button>
          </div>

          {/* Floating Category Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4 max-w-6xl mx-auto pt-8 border-t border-white/10" id="hero_floating_pills">
            {[
              { icon: GraduationCap, labelEn: 'Education', labelHi: 'शिक्षा', tab: 'education' },
              { icon: Briefcase, labelEn: 'Careers', labelHi: 'आजीविका', tab: 'education' },
              { icon: Award, labelEn: 'Scholarships', labelHi: 'छात्रवृत्ति', tab: 'education' },
              { icon: Heart, labelEn: 'Matrimonial', labelHi: 'वैवाहिक', tab: 'matrimonial' },
              { icon: QrCode, labelEn: 'Digital ID', labelHi: 'पहचान पत्र', tab: 'membership-register' },
              { icon: Landmark, labelEn: 'Govt Schemes', labelHi: 'योजनाएं', tab: 'schemes' },
              { icon: Hand, labelEn: 'Volunteer', labelHi: 'स्वयंसेवक', tab: 'media' },
              { icon: Coins, labelEn: 'Charity', labelHi: 'दान सहयोग', tab: 'donate' },
              { icon: Users, labelEn: 'Family Tree', labelHi: 'वंश वृक्ष', tab: 'membership-census' }
            ].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => onNavigate(item.tab)}
                className="flex flex-col items-center justify-center p-3 bg-emerald-950/50 hover:bg-[#D4AF37]/15 border border-white/5 hover:border-[#D4AF37]/40 rounded transition duration-300 group"
              >
                <item.icon className="h-5 w-5 text-[#D4AF37] group-hover:scale-110 transition duration-300" />
                <span className="text-[10px] mt-2 font-medium tracking-wide text-gray-300 group-hover:text-white">
                  {currentLanguage === 'en' ? item.labelEn : item.labelHi}
                </span>
              </button>
            ))}
          </div>

          {/* Animated Statistics Counters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto pt-10 bg-emerald-950/30 border border-[#D4AF37]/10 rounded-xl p-6 backdrop-blur-sm" id="hero_counters">
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#D4AF37]">
                {stats.families.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Registered Families' : 'पंजीकृत परिवार'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#D4AF37]">
                {stats.students.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Students Maintained' : 'लाभान्वित छात्र'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#D4AF37]">
                {stats.volunteers.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Active Volunteers' : 'सक्रिय स्वयंसेवक'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#D4AF37]">
                {stats.districts}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Districts Covered' : 'कवर किए गए जिले'}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#D4AF37]">
                {stats.services}
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Active Digital Cells' : 'सक्रिय डिजिटल प्रकोष्ठ'}
              </p>
            </div>
          </div>

        </div>

        {/* Elegant bottom arch fade gradient */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none"></div>
      </section>


      {/* ========================================== */}
      {/* 1. MISSION & VISION                        */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="mission_vision_section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative" id="mission_vision_visual">
            <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-2xl blur-md"></div>
            {/* Islamic arch picture frame */}
            <div className="relative rounded-2xl border-4 border-[#D4AF37]/20 bg-[#F5F2EB] p-8 h-[400px] flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004B23_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#004B23] text-[#D4AF37] flex items-center justify-center font-serif text-2xl font-bold border border-[#D4AF37]/40 relative z-10">
                आर
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-[#004B23] text-xs font-mono font-bold uppercase tracking-wider">
                  Est. 2026 • National Registry
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-emerald-950 leading-relaxed border-l-4 border-[#D4AF37] pl-4">
                  {currentLanguage === 'en' 
                    ? '"Dyeing the fabric of community life with colors of education, solidarity, and economic independence."' 
                    : '"समुदाय के जीवन को शिक्षा, एकजुटता और आर्थिक स्वतंत्रता के रंगों से सराबोर करना।"'}
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-[#004B23]/10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-[#004B23]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase">National Board</h4>
                  <p className="text-[10px] text-gray-500 font-mono">ALL-INDIA EXECUTIVE REGISTRY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8" id="mission_vision_text">
            <div className="space-y-3">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'Core Purpose' : 'हमारा मुख्य उद्देश्य'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
                {currentLanguage === 'en' ? 'Mission & Vision Parameters' : 'मिशन और राष्ट्रीय विज़न'}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#D4AF37] rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#004B23] flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-serif">
                  {currentLanguage === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'To implement a streamlined digital registry representing every family, providing modern computer literacy, funding academic scholarships, and uplifting our traditional dyer artisans through interest-free micro-grants.' 
                    : 'प्रत्येक परिवार का एक डिजिटल डेटाबेस तैयार करना, आधुनिक कंप्यूटर साक्षरता प्रदान करना, उच्च शिक्षा छात्रवृत्ति प्रदान करना और हमारे पारंपरिक बुनकर व रंगसाज कारीगरों को लघु-ऋण से सशक्त करना।'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#004B23] flex items-center justify-center">
                  <Award className="h-5 w-5 text-[#004B23]" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-serif">
                  {currentLanguage === 'en' ? 'Our Vision' : 'हमारा दृष्टिकोण'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'To achieve 100% literacy rate within our next generation, establish verified matrimonial safety parameters for our daughters, and serve as an esteemed national advisory body advocating community welfare.' 
                    : 'हमारी अगली पीढ़ी में शत-प्रतिशत साक्षरता दर हासिल करना, हमारी बेटियों के लिए पूर्ण सुरक्षित वैवाहिक मापदंड स्थापित करना और समाज कल्याण के लिए एक सम्मानित राष्ट्रीय सलाहकार निकाय के रूप में काम करना।'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 2. COMMUNITY VALUES                        */}
      {/* ========================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden" id="community_values_section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Foundational Pillars' : 'बुनियादी मूल्य'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Our Five Core Community Values' : 'हमारे पांच मुख्य स्तंभ मूल्य'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6" id="values_grid">
            {[
              { titleEn: 'Unity', titleHi: 'एकता', icon: Users, descEn: 'We stand undivided across regions, tehsils, and states.', descHi: 'हम क्षेत्रों, तहसीलों और विभिन्न राज्यों में अविभाजित एकजुटता के साथ खड़े हैं।' },
              { titleEn: 'Education', titleHi: 'शिक्षा', icon: BookOpen, descEn: 'Guarantees academic tuition and basic computer literacy.', descHi: 'प्रत्येक बच्चे के लिए अकादमिक शिक्षा और बुनियादी कंप्यूटर ज्ञान सुनिश्चित करना।' },
              { titleEn: 'Service', titleHi: 'सेवा', icon: Hand, descEn: 'Selfless support for the needy, sick, and vulnerable.', descHi: 'जरूरतमंदों, बीमारों और समाज के कमजोर वर्गों की निःस्वार्थ सेवा।' },
              { titleEn: 'Dignity', titleHi: 'सम्मान', icon: Shield, descEn: 'Preserving traditional craft identity with national honor.', descHi: 'राष्ट्रीय गौरव के साथ अपनी पारंपरिक रंगाई शिल्पकला की रक्षा करना।' },
              { titleEn: 'Progress', titleHi: 'प्रगति', icon: Award, descEn: 'Harnessing modern database architecture for upliftment.', descHi: 'सामुदायिक उत्थान के लिए आधुनिक सूचना प्रौद्योगिकी उपकरणों का उपयोग।' }
            ].map((v, i) => (
              <div 
                key={i}
                className="bg-emerald-900/30 border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-6 text-center space-y-4 hover:bg-emerald-900/50 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mx-auto">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#D4AF37]">
                  {currentLanguage === 'en' ? v.titleEn : v.titleHi}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en' ? v.descEn : v.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* RANGREZ PREMIUM INTERACTIVE PORTAL SECTIONS */}
      {/* ========================================== */}
      <AnimatedCommunityStats currentLanguage={currentLanguage} />
      <NationalLeadership currentLanguage={currentLanguage} />


      {/* ========================================== */}
      {/* 3. NATIONAL IMPACT DASHBOARD               */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="national_dashboard_section">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'Live Transparency' : 'लाइव डेटा और पारदर्शिता'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
                {currentLanguage === 'en' ? 'National Community Impact Dashboard' : 'राष्ट्रीय सामुदायिक प्रभाव डैशबोर्ड'}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#D4AF37] rounded"></div>
            </div>

            <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-100 p-1.5 rounded-lg" id="dashboard_status_pill">
              <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="text-[10px] font-bold font-mono text-emerald-800 uppercase tracking-wide">
                {currentLanguage === 'en' ? 'SYNCED WITH NATIONAL DATABASE' : 'राष्ट्रीय डेटाबेस से सिंक'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stat Block 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-serif font-bold text-[#004B23] text-sm uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Educational Allocations' : 'शैक्षणिक वित्तीय सहायता'}
                </h3>
                <GraduationCap className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Total Disbursed Funds' : 'कुल वितरित छात्रवृत्ति'}</span>
                <p className="text-3xl font-serif font-extrabold text-[#004B23]">₹ 18,45,000</p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>Higher Education</span>
                  <span>72%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#004B23] h-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-mono italic">
                * Last audited check: May 2026
              </p>
            </div>

            {/* Stat Block 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-serif font-bold text-[#004B23] text-sm uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Census & Verification' : 'पारिवारिक सत्यापन प्रगति'}
                </h3>
                <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Verified Census Entries' : 'सत्यापित परिवार संख्या'}</span>
                <p className="text-3xl font-serif font-extrabold text-[#004B23]">8,420 Families</p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>Validation Progress</span>
                  <span>84%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D4AF37] h-full" style={{ width: '84%' }}></div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-mono italic">
                * District committee physical visits logged
              </p>
            </div>

            {/* Stat Block 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-serif font-bold text-[#004B23] text-sm uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Matrimonial Safety' : 'वैवाहिक सुरक्षा स्थिति'}
                </h3>
                <Heart className="h-5 w-5 text-red-500" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Active Token-Based Profiles' : 'टोकन-आधारित सक्रिय प्रोफाइल'}</span>
                <p className="text-3xl font-serif font-extrabold text-[#004B23]">1,150 Profiles</p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>Privacy Lock Level</span>
                  <span>100% Encrypted</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#004B23] h-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-mono italic">
                * Unauthorized screenshot blockers active
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 4. INTERACTIVE INDIA PRESENCE MAP          */}
      {/* ========================================== */}
      <section className="py-20 bg-[#F5F2EB] border-y border-[#004B23]/5" id="india_map_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Regional Coverage' : 'राष्ट्रीय भौगोलिक उपस्थिति'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Interactive India Presence Map' : 'सक्रिय भारत उपस्थिति मानचित्र'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
              {currentLanguage === 'en' 
                ? 'Click on the regional highlights below to see active household counts, student centers, and regional executive offices.' 
                : 'नीचे दिए गए क्षेत्रीय हाइलाइट्स पर क्लिक करके सक्रिय घरों, छात्र केंद्रों और क्षेत्रीय कार्यकारी कार्यालयों की जांच करें।'}
            </p>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map Visual / Stylized SVG Container */}
            <div className="lg:col-span-6 flex justify-center" id="india_map_visual">
              <div className="relative p-6 bg-white rounded-2xl border border-[#004B23]/10 shadow-lg max-w-md w-full">
                {/* SVG Representation of India */}
                <svg className="w-full h-80 text-gray-200" viewBox="0 0 400 450" fill="currentColor">
                  {/* MP Path representation */}
                  <path 
                    d="M 120 180 Q 150 170 180 180 T 210 210 T 170 240 Z" 
                    fill={selectedState === 'MP' ? '#004B23' : '#A7F3D0'} 
                    className="cursor-pointer transition duration-300 stroke-white stroke-2" 
                    onClick={() => setSelectedState('MP')}
                  />
                  {/* UP Path representation */}
                  <path 
                    d="M 170 140 Q 210 130 250 160 T 220 200 Z" 
                    fill={selectedState === 'UP' ? '#004B23' : '#A7F3D0'} 
                    className="cursor-pointer transition duration-300 stroke-white stroke-2" 
                    onClick={() => setSelectedState('UP')}
                  />
                  {/* Rajasthan Path representation */}
                  <path 
                    d="M 70 140 Q 110 130 130 170 T 90 210 Z" 
                    fill={selectedState === 'RJ' ? '#004B23' : '#A7F3D0'} 
                    className="cursor-pointer transition duration-300 stroke-white stroke-2" 
                    onClick={() => setSelectedState('RJ')}
                  />
                  {/* Maharashtra Path representation */}
                  <path 
                    d="M 110 250 Q 160 260 150 300 T 120 330 Z" 
                    fill={selectedState === 'MH' ? '#004B23' : '#A7F3D0'} 
                    className="cursor-pointer transition duration-300 stroke-white stroke-2" 
                    onClick={() => setSelectedState('MH')}
                  />
                  {/* Gujarat Path representation */}
                  <path 
                    d="M 50 210 Q 90 220 80 250 T 60 270 Z" 
                    fill={selectedState === 'GJ' ? '#004B23' : '#A7F3D0'} 
                    className="cursor-pointer transition duration-300 stroke-white stroke-2" 
                    onClick={() => setSelectedState('GJ')}
                  />
                  
                  {/* Decorative Label Dots */}
                  <circle cx="150" cy="200" r="5" fill="#D4AF37" className="animate-ping" />
                  <circle cx="150" cy="200" r="3" fill="#D4AF37" />

                  <circle cx="210" cy="160" r="5" fill="#D4AF37" />
                  <circle cx="100" cy="160" r="5" fill="#D4AF37" />
                </svg>

                <p className="text-[10px] text-center text-gray-400 mt-2 font-mono">
                  * Dynamic SVG Map Representation (Interactive Click Enabled)
                </p>
              </div>
            </div>

            {/* Region Detail Cards */}
            <div className="lg:col-span-6 space-y-6" id="india_map_details">
              <div className="flex flex-wrap gap-2">
                {Object.keys(indiaStatesData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedState(key)}
                    className={`px-4 py-2 rounded text-xs font-bold transition ${selectedState === key ? 'bg-[#004B23] text-white' : 'bg-white text-emerald-900 border border-gray-100 hover:bg-gray-50'}`}
                  >
                    {currentLanguage === 'en' ? indiaStatesData[key as keyof typeof indiaStatesData].nameEn : indiaStatesData[key as keyof typeof indiaStatesData].nameHi}
                  </button>
                ))}
              </div>

              {selectedState && (
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg space-y-4 animate-fadeIn" id="selected_state_details">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <h3 className="text-lg font-serif font-bold text-emerald-950">
                      {currentLanguage === 'en' ? indiaStatesData[selectedState as keyof typeof indiaStatesData].nameEn : indiaStatesData[selectedState as keyof typeof indiaStatesData].nameHi}
                    </h3>
                    <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#004B23] text-[10px] font-mono font-bold rounded">
                      {selectedState} REGION ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-emerald-50 rounded">
                      <p className="text-gray-500 uppercase font-mono tracking-wider text-[9px]">{currentLanguage === 'en' ? 'Registered Families' : 'पंजीकृत परिवार'}</p>
                      <p className="text-base font-bold text-emerald-950 mt-1">
                        {indiaStatesData[selectedState as keyof typeof indiaStatesData].families} Households
                      </p>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded">
                      <p className="text-gray-500 uppercase font-mono tracking-wider text-[9px]">{currentLanguage === 'en' ? 'Maintained Students' : 'सक्रिय छात्र संख्या'}</p>
                      <p className="text-base font-bold text-emerald-950 mt-1">
                        {indiaStatesData[selectedState as keyof typeof indiaStatesData].students} Recipients
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">{currentLanguage === 'en' ? 'Active Tehsil & Assembly Centers' : 'सक्रिय तहसील एवं विधानसभा केंद्र'}</h4>
                    <p className="text-xs text-gray-600 font-mono leading-relaxed bg-gray-50 p-2.5 rounded">
                      {indiaStatesData[selectedState as keyof typeof indiaStatesData].centers}
                    </p>
                  </div>

                  <button 
                    onClick={() => onNavigate('areas')}
                    className="text-xs font-bold text-[#004B23] hover:text-[#D4AF37] flex items-center space-x-1.5 transition"
                  >
                    <span>{currentLanguage === 'en' ? 'Open Detailed Regional Registry' : 'विस्तृत तहसील डेटा निर्देशिका खोलें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 5. EDUCATION & SCHOLARSHIPS               */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="education_scholarships_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Uplifting Youth' : 'युवाओं का अकादमिक उत्थान'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Education & National Scholarship Fund' : 'शिक्षा एवं राष्ट्रीय छात्रवृत्ति कोष'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                titleEn: "Maulana Azad Merit Scholarship",
                titleHi: "मौलाना आज़ाद मेधावी छात्रवृत्ति",
                amount: "₹ 15,000 / Yr",
                eligibilityEn: "Class 10-12 Students with >75% Marks",
                eligibilityHi: "75% से अधिक अंकों के साथ 10वीं-12वीं के छात्र",
                badgeEn: "MERIT-BASED",
                badgeHi: "योग्यता आधारित"
              },
              {
                titleEn: "Socio-Economic Educational Grant",
                titleHi: "सामाजिक-आर्थिक शैक्षिक अनुदान",
                amount: "₹ 12,000 / Yr",
                eligibilityEn: "Artisan and dyer families household support",
                eligibilityHi: "कारीगरों और रंगसाज परिवारों के बच्चों के लिए",
                badgeEn: "NEED-BASED",
                badgeHi: "आवश्यकता आधारित"
              },
              {
                titleEn: "Professional Technical Grant",
                titleHi: "व्यावसायिक तकनीकी शिक्षा अनुदान",
                amount: "₹ 25,000 / Yr",
                eligibilityEn: "Enrolled in B.Tech, MBBS, BBA, BCA, ITI",
                eligibilityHi: "बी.टेक, एमबीबीएस, बीबीए, बीसीए, आईटीआई छात्र",
                badgeEn: "HIGHER STUDIES",
                badgeHi: "उच्च व्यावसायिक शिक्षा"
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-[9px] font-mono font-bold rounded">
                      {currentLanguage === 'en' ? s.badgeEn : s.badgeHi}
                    </span>
                    <span className="text-base font-serif font-bold text-[#004B23]">{s.amount}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 font-serif">
                    {currentLanguage === 'en' ? s.titleEn : s.titleHi}
                  </h3>
                  <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                    <p className="text-gray-500 font-mono text-[10px] uppercase">Eligibility</p>
                    <p className="text-gray-700 font-medium">
                      {currentLanguage === 'en' ? s.eligibilityEn : s.eligibilityHi}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('education')}
                  className="w-full py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-xs uppercase tracking-wider rounded transition"
                >
                  {currentLanguage === 'en' ? 'Apply for Scholarship' : 'छात्रवृत्ति आवेदन करें'}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 6. VERIFIED MATRIMONIAL SERVICES          */}
      {/* ========================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden" id="matrimonial_section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'Family & Heritage' : 'पारिवारिक एवं वैवाहिक सुरक्षा'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
                {currentLanguage === 'en' ? 'Verified Matrimonial Protection Services' : 'सत्यापित सुरक्षित वैवाहिक प्रकोष्ट'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {currentLanguage === 'en' 
                  ? 'To prevent unauthorized profile visual access, we enforce encrypted tokenized logins, automated photo blurring overlays, and direct contact details release strictly upon guardian authorization. Build family bonds with absolute privacy.' 
                  : 'वैवाहिक प्रोफाइलों की सुरक्षा के लिए हम मजबूत एन्क्रिप्टेड सुरक्षा, फोटो पर ऑटोमैटिक ब्लर ओवरले और केवल अभिभावकों की लिखित सहमति के बाद ही विवरण जारी करने के नियमों का कड़ाई से पालन करते हैं।'}
              </p>
              
              <div className="space-y-3 font-mono text-xs text-[#D4AF37]" id="matrimonial_rules">
                <p>✓ 100% Verified Aadhaar & Community ID</p>
                <p>✓ Guardian Consent Mandatory for Contact Release</p>
                <p>✓ Screenshot Blocking Shield Integration</p>
              </div>

              <button
                onClick={() => onNavigate('matrimonial')}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C59B27] text-emerald-950 font-bold text-xs uppercase tracking-wider rounded shadow-lg transition"
              >
                {currentLanguage === 'en' ? 'Browse Matrimonial Portal' : 'वैवाहिक निर्देशिका देखें'}
              </button>
            </div>

            {/* Micro-profile carousel cards (Blurred Avatars) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="matrimonial_micro_profiles">
              {[
                { id: "RMP-2026-081", age: "24 Yrs", height: "5'4\"", educationEn: "M.Tech Computer Science", educationHi: "एम.टेक कंप्यूटर विज्ञान", jobEn: "Software Engineer, Gwalior", jobHi: "सॉफ्टवेयर इंजीनियर, ग्वालियर", gender: "Female" },
                { id: "RMP-2026-143", age: "27 Yrs", height: "5'10\"", educationEn: "MBA Finance & Accounts", educationHi: "एमबीए फाइनेंस", jobEn: "Senior Auditor, Bhopal", jobHi: "वरिष्ठ लेखा परीक्षक, भोपाल", gender: "Male" }
              ].map((p, idx) => (
                <div key={idx} className="bg-emerald-900/40 border border-white/10 rounded-2xl p-6 space-y-4 relative overflow-hidden">
                  {/* Blurred visual representation */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37]/40 to-emerald-800 flex items-center justify-center border-2 border-[#D4AF37]/20 relative overflow-hidden">
                      {/* Artistic blur visual representing high-security profile */}
                      <div className="absolute inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center font-bold text-xs text-[#D4AF37]">
                        SECURE
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono bg-emerald-800 text-[#D4AF37] px-2 py-0.5 rounded uppercase">
                        {p.gender === 'Female' ? (currentLanguage === 'en' ? 'Bride Profile' : 'कन्या पक्ष') : (currentLanguage === 'en' ? 'Groom Profile' : 'वर पक्ष')}
                      </span>
                      <h4 className="text-xs font-mono font-bold mt-1 text-gray-200">{p.id}</h4>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-1 text-gray-300">
                      <span>Age / Height:</span>
                      <span className="font-medium text-white">{p.age} • {p.height}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1 text-gray-300">
                      <span>Education:</span>
                      <span className="font-medium text-white text-right">
                        {currentLanguage === 'en' ? p.educationEn : p.educationHi}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Profession:</span>
                      <span className="font-medium text-[#D4AF37]">
                        {currentLanguage === 'en' ? p.jobEn : p.jobHi}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => onNavigate('matrimonial')}
                      className="w-full py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] hover:text-emerald-950 text-[#D4AF37] text-[10px] uppercase font-bold tracking-wider rounded border border-[#D4AF37]/30 transition"
                    >
                      {currentLanguage === 'en' ? 'Request Secure Access' : 'सुरक्षित विवरण का अनुरोध करें'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 7. FAMILY CENSUS PLATFORM                  */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="family_census_platform">
        <div className="bg-white rounded-3xl border border-[#004B23]/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Digital Census Integration' : 'डिजिटल परिवार जनगणना'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-950">
              {currentLanguage === 'en' ? 'National Family Census Registry' : 'राष्ट्रीय पारिवारिक आर्थिक जनगणना प्रविष्टि'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {currentLanguage === 'en'
                ? 'We are building the first-ever consolidated socio-economic family tree database of the Rangrez community in Bharat. Registering helps establish blood relations, track generational educational status, and directly maps eligibility for state-level welfare initiatives.'
                : 'हम भारत में रंगरेज समुदाय का पहला डिजिटल पारिवारिक डेटाबेस बना रहे हैं। जनगणना में पंजीकरण करने से रक्त संबंधों का सत्यापन करने, बच्चों की शैक्षिक प्रगति को ट्रैक करने और सीधे कल्याणकारी योजनाओं की पात्रता जांचने में मदद मिलती है।'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 rounded text-[#004B23] flex-shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? 'Consolidated Family Tree' : 'एकीकृत पारिवारिक वृक्ष'}</h4>
                  <p className="text-[11px] text-gray-500">{currentLanguage === 'en' ? 'Link parents, siblings, and children in one grid' : 'माता-पिता, भाई-बहनों और बच्चों को एक साथ जोड़ें'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 rounded text-[#004B23] flex-shrink-0">
                  <Landmark className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? 'Socio-Economic Benefit Sync' : 'सरकारी लाभ स्वतः सिंक'}</h4>
                  <p className="text-[11px] text-gray-500">{currentLanguage === 'en' ? 'Checks eligibility for weaver & minority schemes' : 'Minority व बुनकर योजनाओं हेतु पात्रता सिंक'}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('membership-census')}
                className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition"
              >
                {currentLanguage === 'en' ? 'Start Family Census Entry' : 'पारिवारिक जनगणना फॉर्म शुरू करें'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#062413] to-emerald-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-lg font-serif font-bold text-[#D4AF37]">
                {currentLanguage === 'en' ? 'Real-time Census Metric' : 'वास्तविक समय डेटा मीटर'}
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-300">Total Families Logged:</span>
                  <span className="text-[#D4AF37] font-bold">12,850</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-300">Verified QR ID Cards:</span>
                  <span className="text-[#D4AF37] font-bold">9,420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pending Physical Checks:</span>
                  <span className="text-gray-400">1,240</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <div className="bg-emerald-900/50 border border-[#D4AF37]/30 p-4 rounded-xl flex items-center space-x-4">
                <QrCode className="h-10 w-10 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {currentLanguage === 'en' ? 'Digital ID Sample' : 'डिजिटल आईडी नमूना'}
                  </p>
                  <p className="text-[10px] text-gray-300 leading-relaxed mt-0.5">
                    {currentLanguage === 'en' ? 'Every verified family census yields a downloadable QR ID card.' : 'सत्यापन के बाद प्रत्येक परिवार को विशिष्ट क्यूआर आईडी कार्ड मिलता है।'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 8. CAREER & SKILL DEVELOPMENT               */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="career_skills_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Professional Growth' : 'कैरियर और कौशल विकास'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Career & Technical Skill Development' : 'कैरियर एवं व्यावसायिक कौशल विकास प्रकोष्ठ'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#004B23] flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-[#004B23]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-emerald-950">
                {currentLanguage === 'en' ? 'Digital Literacy Workshops' : 'डिजिटल साक्षरता और कंप्यूटर कार्यशाला'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'Providing free Python coding, basic internet services, MS Office training, and digital marketing setups for community students.' 
                  : 'सामुदायिक छात्र-छात्राओं के लिए मुफ्त कंप्यूटर शिक्षा, पायथन कोडिंग, एमएस ऑफिस और डिजिटल मार्केटिंग प्रशिक्षण का आयोजन।'}
              </p>
              <button 
                onClick={() => onNavigate('education')}
                className="text-xs font-bold text-[#004B23] hover:text-[#D4AF37] flex items-center space-x-1.5 transition"
              >
                <span>{currentLanguage === 'en' ? 'Register for Next Batch' : 'अगले बैच हेतु पंजीकरण करें'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#004B23] flex items-center justify-center">
                <Landmark className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-emerald-950">
                {currentLanguage === 'en' ? 'Weaving & Dyeing Modernization' : 'ब्लॉक प्रिंटिंग एवं आधुनिक तकनीक'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'Connecting traditional handblock printers with modern chemical compliance, organic cotton exporters, and wholesale digital marketplaces.' 
                  : 'पारंपरिक ब्लॉक प्रिंटर्स को आधुनिक रसायन अनुपालन, जैविक कपास निर्यातकों और थोक डिजिटल बाजारों से जोड़ना।'}
              </p>
              <button 
                onClick={() => onNavigate('education')}
                className="text-xs font-bold text-[#004B23] hover:text-[#D4AF37] flex items-center space-x-1.5 transition"
              >
                <span>{currentLanguage === 'en' ? 'Explore Craft Modernization' : 'शिल्प आधुनिकीकरण देखें'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#004B23] flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-[#004B23]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-emerald-950">
                {currentLanguage === 'en' ? 'UPSC & Competitive Mentorship' : 'UPSC एवं प्रतियोगी परीक्षा मार्गदर्शन'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'Monthly interactive mentorship programs with retired civil servants, bank executives, and university professors of our community.' 
                  : 'सेवामुक्त सिविल सेवकों, बैंक अधिकारियों और विश्वविद्यालय के प्रोफेसरों द्वारा बच्चों के लिए विशेष मार्गदर्शन कार्यशालाएं।'}
              </p>
              <button 
                onClick={() => onNavigate('education')}
                className="text-xs font-bold text-[#004B23] hover:text-[#D4AF37] flex items-center space-x-1.5 transition"
              >
                <span>{currentLanguage === 'en' ? 'Connect with a Mentor' : 'मार्गदर्शक से संपर्क स्थापित करें'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 9. GOVERNMENT SCHEMES                     */}
      {/* ========================================== */}
      <section className="py-20 bg-[#F5F2EB] border-y border-[#004B23]/5" id="government_schemes_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'Welfare Aid' : 'सरकारी अल्पसंख्यक योजनाएं'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
                {currentLanguage === 'en' ? 'Government Scheme Eligibility Wizard' : 'सरकारी अल्पसंख्यक एवं बुनकर कल्याण योजनाएं'}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#D4AF37] rounded"></div>
            </div>

            <button 
              onClick={() => onNavigate('schemes')}
              className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded transition"
            >
              {currentLanguage === 'en' ? 'Open Eligibility Checker' : 'पात्रता जांच टूल खोलें'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-lg font-serif font-bold text-emerald-950 border-b border-gray-100 pb-2">
                {currentLanguage === 'en' ? 'PM Vishwakarma Scheme for Traditional Craftsmen' : 'पीएम विश्वकर्मा योजना (पारंपरिक कारीगरों हेतु)'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Provides collateral-free loans up to ₹3,00,000, modern tools training with ₹500/day stipend, and digital transaction incentives for traditional community weavers and dyeing artisans.'
                  : 'पारंपरिक सामुदायिक बुनकरों और रंगसाज कारीगरों के लिए बिना गारंटी के ₹3,00,000 तक का ऋण, ₹500/दिन वजीफे के साथ आधुनिक उपकरण प्रशिक्षण और डिजिटल लेनदेन प्रोत्साहन योजना।'}
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800">
                <CheckCircle className="h-4 w-4" />
                <span>Eligibility: Registered Traditional Craft families</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-lg font-serif font-bold text-emerald-950 border-b border-gray-100 pb-2">
                {currentLanguage === 'en' ? 'Post-Matric Scholarships for Minorities' : 'अल्पसंख्यकों के लिए पोस्ट-मैट्रिक छात्रवृत्ति'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Covers complete technical and non-technical university course tuition fees for eligible minority candidates whose annual family income is below ₹2.0 Lakhs.'
                  : 'उन पात्र अल्पसंख्यक उम्मीदवारों के लिए तकनीकी और गैर-तकनीकी कॉलेज पाठ्यक्रमों की पूरी ट्यूशन फीस प्रतिपूर्ति, जिनकी वार्षिक पारिवारिक आय ₹2.0 लाख से कम है।'}
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800">
                <CheckCircle className="h-4 w-4" />
                <span>Eligibility: Minority students enrolled in recognized colleges</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 10. WOMEN'S EMPOWERMENT                    */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="womens_empowerment_section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Dignity & Welfare' : 'महिला सशक्तिकरण प्रकोष्ठ'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Bibi Fatima Women Empowerment Scheme' : 'बीबी फातिमा महिला सशक्तिकरण एवं रोजगार स्वावलंबन'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {currentLanguage === 'en' 
                ? 'We operate vocational centers offering state-certified tailoring classes, apparel design courses, boutique business incubator funding, and support networks for women entrepreneurs within our community.' 
                : 'हम सामुदायिक स्तर पर राज्य-प्रमाणित सिलाई कक्षाएं, बुटीक व्यवसाय ऋण, फैशन डिजाइनिंग पाठ्यक्रम और महिला उद्यमियों के लिए विशेष सहायता नेटवर्क केंद्र संचालित करते हैं।'}
            </p>

            <div className="space-y-3 font-mono text-xs text-emerald-900" id="women_perks">
              <p>✓ Collateral-free micro-loans for home sewing startups</p>
              <p>✓ 100% Free Higher Education grants for community daughters</p>
              <p>✓ Direct-to-retail supply chain connections</p>
            </div>

            <button 
              onClick={() => onNavigate('donate')}
              className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded transition"
            >
              {currentLanguage === 'en' ? 'Support Girls Education' : 'बालिका शिक्षा कोष में सहयोग करें'}
            </button>
          </div>

          <div className="lg:col-span-5 relative" id="women_empowerment_visual">
            <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-2xl blur-md"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-emerald-950 flex flex-col justify-end p-6 text-white border border-[#D4AF37]/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              {/* Dynamic SVG background pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] z-0"></div>
              
              <div className="relative z-20 space-y-2">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider font-mono">
                  ACTIVE WOMEN SELF-HELP GROUPS (SHGs)
                </span>
                <p className="text-xl font-serif font-bold text-white">
                  {currentLanguage === 'en' ? '12 Active Boutique Circles' : '12 सक्रिय महिला बुटीक समूह'}
                </p>
                <p className="text-xs text-gray-300">
                  {currentLanguage === 'en' ? 'Empowering 250+ female artisans in Kailaras, Morena and Gwalior.' : 'कैलारस, मुरैना और ग्वालियर में 250+ महिला कारीगरों को आत्मनिर्भर बनाना।'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 11. YOUTH LEADERSHIP                       */}
      {/* ========================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden" id="youth_leadership_section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          <div className="space-y-3">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Future Builders' : 'भावी नेतृत्व निर्माण'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Youth Leadership & Career Networks' : 'युवा नेतृत्व एवं कैरियर विकास नेटवर्क'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="youth_leadership_grid">
            {[
              {
                titleEn: "Annual Sports & Unity Meets",
                titleHi: "वार्षिक खेलकूद एवं एकता सम्मेलन",
                descEn: "Organizing cricket, football, and athletics tournaments to foster teamwork and organic physical well-being.",
                descHi: "युवाओं में आपसी भाईचारे और शारीरिक स्वास्थ्य को बढ़ावा देने के लिए खेलकूद प्रतियोगिताओं का आयोजन।"
              },
              {
                titleEn: "Young Scholars Incubator",
                titleHi: "युवा स्कॉलर इनक्यूबेटर",
                descEn: "Targeted skill workshops in web development, graphic design, and artificial intelligence models.",
                descHi: "वेब डेवलपमेंट, ग्राफिक डिजाइनिंग और आधुनिक एआई का लाभ उठाने पर विशेष कौशल कार्यशालाएं।"
              },
              {
                titleEn: "National Youth Council Office",
                titleHi: "राष्ट्रीय युवा परिषद कार्यालय",
                descEn: "Engaging youth representatives from every state to organize local humanitarian and volunteer camps.",
                descHi: "प्रत्येक राज्य के युवा प्रतिनिधियों को संगठित कर स्थानीय जनकल्याण और सेवा शिविरों का संचालन करना।"
              }
            ].map((y, idx) => (
              <div 
                key={idx} 
                className="bg-emerald-900/40 border border-white/5 hover:border-[#D4AF37]/50 rounded-xl p-6 text-center space-y-4 hover:bg-emerald-900/60 transition duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#D4AF37]">
                  {currentLanguage === 'en' ? y.titleEn : y.titleHi}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en' ? y.descEn : y.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* 12. COMMUNITY SUCCESS STORIES              */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="success_stories_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Inspirational Pride' : 'गौरवशाली प्रेरक कहानियां'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Community Success Stories' : 'महासभा सफलता और गौरवगाथा'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nameEn: "Dr. Farah Rangrez, MD",
                nameHi: "डॉ. फराह रंगरेज, एम.डी.",
                descEn: "Raised in Kailaras, received national scholarship support. Now a lead pediatrician at Gwalior Civil Hospital.",
                descHi: "कैलारस में पली-बढ़ीं, छात्रवृत्ति कोष द्वारा उच्च शिक्षा पूरी की। अब ग्वालियर सिविल अस्पताल में वरिष्ठ बाल रोग विशेषज्ञ हैं।"
              },
              {
                nameEn: "Janab Arshad Ahmed, UPSC CSE",
                nameHi: "जनाब अर्शाद अहमद, यूपीएससी सीएसई",
                descEn: "Cleared state civil services exams. Mentors underprivileged youth of Morena on Sundays.",
                descHi: "राज्य सिविल सेवा परीक्षा में उत्तीर्ण। मुरैना में हर रविवार समाज के गरीब वर्ग के बच्चों को कोचिंग देते हैं।"
              },
              {
                nameEn: "Mohammad Yusuf, Textile Exporter",
                nameHi: "मोहम्मद यूसुफ, कपड़ा निर्यातक",
                descEn: "Modernized traditional dyeing workshop. Now exporting block prints directly to global design houses.",
                descHi: "पारंपरिक ब्लॉक प्रिंटिंग कार्यशाला का आधुनिकीकरण किया। अब सीधे तौर पर वैश्विक डिजाइन हाउस को निर्यात कर रहे हैं।"
              }
            ].map((story, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#004B23] flex items-center justify-center font-bold">
                    <Star className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-gray-900">{currentLanguage === 'en' ? story.nameEn : story.nameHi}</h4>
                    <p className="text-[10px] text-emerald-800 uppercase tracking-wider font-mono">Verified Achievement</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light italic">
                  {currentLanguage === 'en' ? story.descEn : story.descHi}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 13. DOCUMENTARY & MEDIA                    */}
      {/* ========================================== */}
      <section className="py-20 bg-[#F5F2EB] border-y border-[#004B23]/5" id="documentary_media_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'Our Digital Archives' : 'डिजिटल वीडियो और मीडिया'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
                {currentLanguage === 'en' ? 'Documentary & National Media Center' : 'महासभा डॉक्युमेंट्री एवं मीडिया केंद्र'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Access executive general assembly recordings, download our constitutional manifesto, and view historical documentaries highlighting traditional block dyer heritage.'
                  : 'महासभा के सामान्य अधिवेशनों के रिकॉर्डिंग वीडियो देखें, हमारी मुख्य नियमावली डाउनलोड करें और पारंपरिक ब्लॉक रंगाई विरासत पर वृत्तचित्र देखें।'}
              </p>

              <button 
                onClick={() => onNavigate('media')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#004B23] hover:text-[#D4AF37] uppercase tracking-wider transition"
              >
                <Video className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Open Media Center' : 'वीडियो गैलरी खोलें'}</span>
              </button>
            </div>

            <div className="lg:col-span-7" id="media_center_sample">
              <div className="aspect-video bg-emerald-950 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center text-white border border-[#D4AF37]/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                
                {/* Floating Play Icon */}
                <div 
                  onClick={() => onNavigate('media')}
                  className="w-16 h-16 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-emerald-950 flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 z-20"
                >
                  <Video className="h-6 w-6 ml-1" />
                </div>

                <div className="absolute bottom-4 left-4 z-20 space-y-1 text-left">
                  <span className="text-[10px] font-mono bg-emerald-800 text-[#D4AF37] px-2 py-0.5 rounded uppercase">
                    FEATURED NARRATIVE
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {currentLanguage === 'en' ? 'Heritage & Colors: The Rangrez Story' : 'विरासत और रंग: रंगरेज समुदाय की कहानी'}
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 14. UPCOMING EVENTS                        */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="upcoming_events_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Community Calendar' : 'आगामी महासभा कार्यक्रम'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Upcoming Assemblies & Gatherings' : 'आगामी राष्ट्रीय अधिवेशन एवं सामूहिक विवाह'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titleEn: "Annual Mass Marriage (Sammelan)",
                titleHi: "आदर्श सामूहिक विवाह सम्मेलन (कैलारस)",
                date: "Nov 12, 2026",
                venueEn: "Welfare Grounds, Kailaras, MP",
                venueHi: "महासभा मैदान, कैलारस, म.प्र.",
                badgeEn: "MASS WEDDING",
                badgeHi: "सामूहिक विवाह"
              },
              {
                titleEn: "National Executive Council Meet",
                titleHi: "राष्ट्रीय कार्यकारिणी परिषद बैठक",
                date: "Aug 15, 2026",
                venueEn: "Rangrez Bhawan, Morena, MP",
                venueHi: "रंगरेज भवन, मुरैना, म.प्र.",
                badgeEn: "ADMINISTRATIVE",
                badgeHi: "कार्यकारिणी बैठक"
              },
              {
                titleEn: "District Educational Merit Award",
                titleHi: "जिला मेधावी छात्र सम्मान समारोह",
                date: "Sep 05, 2026",
                venueEn: "Community Center, Gwalior",
                venueHi: "सामुदायिक केंद्र, ग्वालियर",
                badgeEn: "STUDENT AWARD",
                badgeHi: "छात्र सम्मान"
              }
            ].map((e, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 bg-[#D4AF37]/10 text-emerald-950 text-[9px] font-mono font-bold rounded">
                    {currentLanguage === 'en' ? e.badgeEn : e.badgeHi}
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-bold">{e.date}</span>
                </div>
                
                <h3 className="text-base font-bold text-emerald-950 font-serif">
                  {currentLanguage === 'en' ? e.titleEn : e.titleHi}
                </h3>

                <div className="flex items-start space-x-2 text-xs text-gray-500">
                  <MapPin className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{currentLanguage === 'en' ? e.venueEn : e.venueHi}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 15. VOLUNTEER NETWORK                      */}
      {/* ========================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden" id="volunteer_network_section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Be The Change' : 'सेवा ही सर्वोपरि है'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Join the National Volunteer Force' : 'राष्ट्रीय स्वयंसेवक दल में शामिल हों'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            {currentLanguage === 'en'
              ? 'Our community grows when our youth step forward. Join as a digital verification officer, lead free tuition batches, assist in district food-distribution camps, or coordinate local medical drives.'
              : 'हमारा समाज तब आगे बढ़ेगा जब हमारे युवा निस्वार्थ भाव से आगे आएंगे। डिजिटल सत्यापन अधिकारी के रूप में शामिल हों, जरूरतमंद बच्चों को मुफ्त ट्यूशन पढ़ाएं या जिला राहत शिविरों में अपनी सेवा दें।'}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('media')}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C59B27] text-emerald-950 font-bold text-xs uppercase tracking-wider rounded shadow-lg transition"
            >
              {currentLanguage === 'en' ? 'Register as a Volunteer' : 'स्वयंसेवक के रूप में पंजीकृत हों'}
            </button>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* 16. DONATION & TRANSPARENCY                */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="donation_transparency_section">
        <div className="bg-white rounded-3xl border border-[#004B23]/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Strategic Giving' : 'पारदर्शी दान और सहयोग'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-950">
              {currentLanguage === 'en' ? 'Donation, Transparency & Audits' : 'पूर्ण पारदर्शी दान एवं समाज कल्याण रसीद'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {currentLanguage === 'en'
                ? 'Every rupee contributed is audited. The central trust (Society Registration No: 02/42/01/28332/26) directly allocates 100% of these funds toward school tuitions, digital centers, or direct relief. No administrative leakages.'
                : 'आपके सहयोग का एक-एक पैसा पूर्णतः ऑडिट किया जाता है। केंद्रीय महासभा ट्रस्ट (सोसाइटी पंजीकरण संख्या 02/42/01/28332/26) सीधे इन निधियों का 100% शिक्षा शुल्क प्रतिपूर्ति, चिकित्सा और राहत कार्यों में खर्च करता है।'}
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 border-b border-gray-100 pb-1">
                <span>Education Grants Fund:</span>
                <span className="font-bold text-[#004B23]">₹ 8,45,000 (Allocated)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 border-b border-gray-100 pb-1">
                <span>Medical Relief Fund:</span>
                <span className="font-bold text-[#004B23]">₹ 4,20,000 (Allocated)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                <span>Administrative / Logistics Expense:</span>
                <span className="font-bold text-[#D4AF37]">0.0% (Funded by Trustees)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('donate')}
              className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded transition"
            >
              {currentLanguage === 'en' ? 'Open Donation Portal' : 'सहयोग राशि का भुगतान करें'}
            </button>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#062413] to-emerald-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider font-mono">
                COMPLIANCE & LEGALITY
              </span>
              <h3 className="text-xl font-serif font-bold">
                {currentLanguage === 'en' ? '80G Tax Exemption Eligible' : 'धारा 80G आयकर छूट योग्य'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {currentLanguage === 'en'
                  ? 'All online donations generate instant PDF receipts eligible for tax deductions under Section 80G of the Indian Income Tax Act.'
                  : 'सभी ऑनलाइन दानों के लिए तुरंत डिजिटल पीडीएफ रसीदें प्रदान की जाती हैं जो आयकर अधिनियम की धारा 80G के तहत छूट के योग्य हैं।'}
              </p>
            </div>

            <div className="pt-8 relative z-10 border-t border-white/10 text-xs text-gray-400 font-mono">
              <p>TRUST REG: 02/42/01/28332/26</p>
              <p className="mt-1">OFFICIAL BANK: STATE BANK OF INDIA</p>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 17. FREQUENTLY ASKED QUESTIONS            */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="faqs_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Information Hub' : 'सामान्य प्रश्नोत्तर'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Frequently Asked Questions' : 'सामान्य प्रश्न (FAQ)'}
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition duration-200"
                >
                  <span className="text-xs sm:text-sm font-bold text-emerald-950 pr-4">
                    {currentLanguage === 'en' ? faq.qEn : faq.qHi}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-50 bg-gray-50/30 overflow-hidden"
                    >
                      <p className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {currentLanguage === 'en' ? faq.aEn : faq.aHi}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
