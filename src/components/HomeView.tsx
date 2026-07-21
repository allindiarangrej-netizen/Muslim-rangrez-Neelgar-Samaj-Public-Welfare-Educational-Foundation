import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, ArrowRight, UserPlus, FileText, Landmark, BookOpen, 
  MapPin, Heart, Briefcase, Sparkles, Star, Video, Calendar, Hand, 
  Coins, HelpCircle, ChevronDown, ChevronUp, Award, UserCheck, Users, 
  GraduationCap, QrCode, Search, Building2, Eye, Shield, CheckCircle,
  Play, Image as ImageIcon, Mail, Phone, Copy, Check, Globe, Handshake, Lightbulb
} from 'lucide-react';
import { Language } from '../types';
import { translate } from '../utils/translator';
import AnimatedCommunityStats from './AnimatedCommunityStats';
import NationalLeadership from './NationalLeadership';
import SuccessStories from './SuccessStories';
import CommunityHighlightsGallery from './CommunityHighlightsGallery';

interface HomeViewProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

export default function HomeView({ currentLanguage, onNavigate }: HomeViewProps) {
  // Stat counters animation
  const [stats, setStats] = useState({
    families: 0,
    districts: 0,
    volunteers: 0,
    programs: 0,
    events: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        families: Math.floor((25000 / steps) * step),
        districts: Math.floor((220 / steps) * step),
        volunteers: Math.floor((1250 / steps) * step),
        programs: Math.floor((15 / steps) * step),
        events: Math.floor((18 / steps) * step)
      });

      if (step >= steps) {
        setStats({
          families: 25000,
          districts: 220,
          volunteers: 1250,
          programs: 15,
          events: 18
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
    <div className="w-full bg-[#FDFBF7] text-[#1a2e22] selection:bg-[#F4C430]/30 selection:text-emerald-950 font-sans" id="premium_homepage_root">
      
      {/* ========================================== */}
      {/* HERO SECTION: CINEMATIC & TRADITIONAL      */}
      {/* ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#062413] via-[#09351C] to-[#041A0E] text-white py-20 px-4 sm:px-6 lg:px-8" id="hero_cinematic">
        
        {/* Elegant Animated Background Motion Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = Math.floor(Math.sin(i * 9) * 4) + 8;
            const left = (i * 7) % 100;
            const top = (i * 13) % 100;
            const duration = Math.abs(Math.cos(i * 12)) * 12 + 10;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#F4C430]/15"
                style={{
                  width: size,
                  height: size,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: ['0px', '-100px', '0px'],
                  x: ['0px', '20px', '0px'],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            );
          })}
        </div>

        {/* Animated Background Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Islamic Arch Border Silhouette Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 100 L 0 30 C 10 15, 30 5, 50 5 C 70 5, 90 15, 100 30 L 100 100 Z" fill="none" stroke="#F4C430" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* Traditional Textile Mandala Spinning Slowly */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border border-[#F4C430]/20 pointer-events-none animate-[spin_120s_linear_infinite] opacity-30 z-0">
          <div className="w-full h-full rounded-full border-4 border-dashed border-[#F4C430]/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-double border-[#F4C430]/15"></div>
          </div>
        </div>

        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full border border-[#F4C430]/20 pointer-events-none animate-[spin_90s_linear_infinite] opacity-20 z-0">
          <div className="w-full h-full rounded-full border-4 border-dashed border-[#F4C430]/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-double border-[#F4C430]/15"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center space-y-10">
          
          {/* Tagline / Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F4C430]/20 to-emerald-950/40 border border-[#F4C430]/40 px-4 py-2 rounded-full shadow-inner" id="hero_badge">
            <ShieldCheck className="h-5 w-5 text-[#FFD54A]" />
            <span className="text-xs sm:text-sm font-mono font-bold text-[#FFD54A] tracking-widest uppercase">
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
                  <span className="text-[#FFD54A]">Unity</span> for Future Generations.
                </>
              ) : (
                <>
                  बुराइयों और बेबुनियाद रस्मों से नज़ात, <br />
                  <span className="text-[#FFD54A]">तालीम और इल्म की ओर रुख़</span>, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।
                </>
              )}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[#F5EFE6] font-light leading-relaxed max-w-3xl mx-auto drop-shadow" id="hero_supporting_text">
              {currentLanguage === 'en' 
                ? 'Championing verified family census, national education scholarships, secure matrimonial platforms, vocational skill directories, and minority welfare schemes to build a resilient, united, and highly educated community.'
                : 'मुस्लिम रंगरेज (नीलगर) समाज की समाजी इस्लाह, तालीम, इत्तेहाद और फ़लाही ख़िदमात के लिए समर्पित क़ौमी डिजिटल मंच। परिवार पंजीकरण, तालीमी रहनुमाई, रोज़गार, छात्रवृत्ति, सरकारी योजनाओं की मालूमात और समाज सुधार की मुहिम को हर घर तक पहुँचाना हमारा मक़सद है।'}
            </p>
          </div>

          {/* Prominent CTAs: Clear actions required */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4" id="hero_ctas">
            <button
              onClick={() => onNavigate('membership-register')}
              className="px-4 py-4 bg-[#F4C430] hover:bg-[#FFDF66] text-emerald-950 font-extrabold text-xs uppercase tracking-wider rounded shadow-xl hover:shadow-[#F4C430]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-[#F4C430] hover:border-[#FFDF66]"
            >
              <UserPlus className="h-4.5 w-4.5" />
              <span>{currentLanguage === 'en' ? 'Join Community' : 'समुदाय से जुड़ें'}</span>
            </button>

            <button
              onClick={() => onNavigate('education')}
              className="px-4 py-4 bg-emerald-800/80 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#F4C430]/50 hover:border-[#FFD54A] shadow-lg hover:shadow-[#F4C430]/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Coins className="h-4.5 w-4.5 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Education & Scholarship' : 'शिक्षा एवं छात्रवृत्ति'}</span>
            </button>

            <button
              onClick={() => onNavigate('matrimonial')}
              className="px-4 py-4 bg-emerald-950/60 hover:bg-emerald-900/60 text-white font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#F4C430]/30 hover:border-[#FFD54A]/60 shadow-lg hover:shadow-[#F4C430]/5 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FileText className="h-4.5 w-4.5 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Matrimonial Portal' : 'निकाह मंच'}</span>
            </button>

            <button
              onClick={() => onNavigate('donate')}
              className="px-4 py-4 bg-emerald-950/60 hover:bg-emerald-900/60 text-white font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#F4C430]/30 hover:border-[#FFD54A]/60 shadow-lg hover:shadow-[#F4C430]/5 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-4.5 w-4.5 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Support Us' : 'सहयोग करें'}</span>
            </button>
          </div>

          {/* Floating Category Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-4 lg:gap-2 xl:gap-3.5 max-w-7xl xl:max-w-[1550px] mx-auto pt-8 border-t border-white/10" id="hero_floating_pills">
            {[
              { icon: GraduationCap, labelEn: 'Education', labelHi: 'शिक्षा', tab: 'education' },
              { icon: Briefcase, labelEn: 'Careers', labelHi: 'आजीविका', tab: 'education' },
              { icon: Award, labelEn: 'Scholarships', labelHi: 'छात्रवृत्ति', tab: 'education' },
              { icon: Heart, labelEn: 'Matrimonial', labelHi: 'वैवाहिक', tab: 'matrimonial' },
              { icon: QrCode, labelEn: 'Digital ID', labelHi: 'पहचान पत्र', tab: 'membership-register' },
              { icon: Landmark, labelEn: 'Govt Schemes', labelHi: 'योजनाएं', tab: 'schemes' },
              { icon: Hand, labelEn: 'Community Service', labelHi: 'सामुदायिक सेवा', tab: 'volunteer-service' },
              { icon: Coins, labelEn: 'Charity', labelHi: 'दान सहयोग', tab: 'donate' },
              { icon: Users, labelEn: 'Family Tree', labelHi: 'वंश वृक्ष', tab: 'membership-census' },
              { icon: ShieldCheck, labelEn: 'Mahapanchayat', labelHi: 'महापंचायत', tab: 'mahapanchayat' }
            ].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => onNavigate(item.tab)}
                className="flex flex-col items-center justify-center p-2 sm:p-3.5 lg:p-2 xl:p-3.5 bg-emerald-950/50 hover:bg-[#F4C430]/15 border border-white/5 hover:border-[#FFD54A]/40 rounded transition duration-300 group w-full cursor-pointer"
              >
                <item.icon className="h-5 w-5 text-[#FFD54A] group-hover:scale-110 transition duration-300" />
                <span className="text-[10px] sm:text-xs lg:text-[10px] xl:text-[11px] mt-2 font-semibold tracking-wide text-gray-300 group-hover:text-white text-center leading-tight">
                  {currentLanguage === 'en' ? item.labelEn : item.labelHi}
                </span>
              </button>
            ))}
          </div>

          {/* Animated Statistics Counters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto pt-10 bg-emerald-950/30 border border-[#F4C430]/15 rounded-xl p-6 backdrop-blur-sm" id="hero_counters">
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] drop-shadow-[0_2px_4px_rgba(244,196,48,0.2)]">
                {stats.families.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Families Connected' : 'जुड़े हुए परिवार'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] drop-shadow-[0_2px_4px_rgba(244,196,48,0.2)]">
                {stats.districts.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'District Committees' : 'जिला कमेटियां'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] drop-shadow-[0_2px_4px_rgba(244,196,48,0.2)]">
                {stats.volunteers.toLocaleString()}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Volunteers Enrolled' : 'सक्रिय स्वयंसेवक'}
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] drop-shadow-[0_2px_4px_rgba(244,196,48,0.2)]">
                {stats.programs}+
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Educational Programs' : 'शैक्षिक कार्यक्रम'}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FFD54A] drop-shadow-[0_2px_4px_rgba(244,196,48,0.2)]">
                {stats.events}
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Community Events' : 'सामुदायिक कार्यक्रम'}
              </p>
            </div>
          </div>

          {/* NEW: Prominent Mahapanchayat Survey & Voting Banner */}
          <div className="max-w-5xl mx-auto pt-6" id="hero_mahapanchayat_banner">
            <div 
              onClick={() => onNavigate('mahapanchayat-surveys')}
              className="bg-gradient-to-r from-[#07351B] via-[#0b4826] to-[#07351B] p-6 sm:p-8 rounded-2xl border-2 border-[#F4C430] shadow-2xl cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,196,48,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 group text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#F4C430] text-[#0B132B] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping mr-1"></span>
                <span>{currentLanguage === 'en' ? 'LIVE BALLOT BOX OPEN' : 'सक्रिय मतदान चालू है'}</span>
              </div>

              <div className="space-y-2 max-w-2xl pr-8">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#F4C430]/20 text-[#FFD54A] border border-[#FFD54A]/40 px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                    🏛️ {currentLanguage === 'en' ? 'E-Governance 2.0 Feature' : 'ई-गवर्नेंस 2.0 सुविधा'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white group-hover:text-[#FFD54A] transition">
                  {currentLanguage === 'en' 
                    ? 'Digital Community Survey, Opinion Poll & Mahapanchayat Decisions' 
                    : 'डिजिटल सामुदायिक सर्वे, जनमत संग्रह एवं महापंचायत निर्णय व्यवस्था'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Participate in active surveys, vote on proposed social reforms (Maujoo), submit new proposals, and explore the 100% verified digital gazette archive of All India resolutions.'
                    : 'सक्रिय सर्वेक्षणों में भाग लें, प्रस्तावित सामाजिक सुधारों (मौजूं) पर मतदान करें, नए प्रस्ताव रखें और अखिल भारतीय निर्णयों के 100% सत्यापित डिजिटल अभिलेखागार को देखें।'}
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <button className="bg-gradient-to-r from-[#FFD54A] to-yellow-500 text-[#0B132B] font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-xl flex items-center space-x-2 group-hover:bg-white transition">
                  <span>{currentLanguage === 'en' ? 'Cast Your Vote Now →' : 'अभी अपना वोट डालें →'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Elegant bottom arch fade gradient */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none"></div>
      </section>

      <CommunityHighlightsGallery currentLanguage={currentLanguage} onNavigate={onNavigate} />

      {/* ========================================== */}
      {/* 1. ABOUT SOCIETY: HEROIC ENTRY & IDENTITY  */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about_society_heroic">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative" id="about_society_visual">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#F4C430]/20 to-emerald-800/10 rounded-2xl blur-lg"></div>
            {/* Islamic arch picture frame */}
            <div className="relative rounded-2xl border-4 border-[#F4C430]/30 bg-gradient-to-br from-[#062413] to-[#041A0E] p-8 h-[450px] flex flex-col justify-between overflow-hidden shadow-2xl text-white">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-950 text-[#F4C430] flex items-center justify-center font-serif text-2xl font-bold border border-[#F4C430]/40">
                  म
                </div>
                <div className="text-right text-[10px] font-mono text-emerald-400">
                  <p>REGD NO. 02/42/01/28332/26</p>
                  <p>ESTD. 2026</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10 my-auto">
                <span className="text-[#F4C430] text-xs font-mono font-bold uppercase tracking-widest block">
                  NATIONAL HERITAGE BRAND • रंगरेज
                </span>
                <p className="font-serif italic text-base sm:text-lg text-[#F5EFE6] leading-relaxed border-l-4 border-[#F4C430] pl-4">
                  {currentLanguage === 'en' 
                    ? '"Dyeing the fabric of community life with colors of education, solidarity, and economic independence."' 
                    : '"समुदाय के जीवन को शिक्षा, एकजुटता और आर्थिक स्वतंत्रता के रंगों से सराबोर करना।"'}
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center border border-[#F4C430]/25">
                  <ShieldCheck className="h-5 w-5 text-[#F4C430]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">National Foundation</h4>
                  <p className="text-[9px] text-[#F4C430] font-mono uppercase">All India Executive Board</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6" id="about_society_text">
            <div className="space-y-3">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'ABOUT THE FOUNDATION' : 'फाउंडेशन का परिचय'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight leading-tight">
                {currentLanguage === 'en' 
                  ? 'Muslim Rangrez (Neelgar) Samaj Public Welfare and Educational Foundation' 
                  : 'मुस्लिम रंगरेज (नीलगर) समाज पब्लिक वेलफेयर एंड एजुकेशनल फ़ाउंडेशन'}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#F4C430] rounded"></div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              {currentLanguage === 'en' ? (
                <>
                  <p>
                    Muslim Rangrez (Neelgar) Samaj Public Welfare and Educational Foundation is a non-political, non-profit social, educational, and public welfare organization. It is dedicated to the betterment, education, public welfare, unity, and self-reliance of the community, in accordance with the teachings of Quran and Sunnah, the values of the Indian Constitution, patriotism (Hubbul Watan), high moral character, social responsibility, and the principles of humanity.
                  </p>
                  <p>
                    The foundation of our social reform movement was laid in 1999 in village Sujarma, Tehsil Kailaras, District Morena (Madhya Pradesh). For the past 27 years, this movement has been continuously offering its services for the reform, education, unity, and social improvement of the community. From 2025, from Tehsil Joura, District Morena, Madhya Pradesh, this movement is being reorganized with a new vision, better organization, modern technology, and a national-level mindset, advancing at a new pace to provide a strong, educated, aware, and organized platform for the Muslim Rangrez (Neelgar) community across the country.
                  </p>
                  <p>
                    We believe that the real progress of any community comes not just from financial development, but from knowledge (education), good manners, piety, patriotism, moral character, unity, skills, employment, self-reliance, and social responsibility. With this vision, our movement runs awareness campaigns against baseless traditions, extravagance, dowry, addiction, illiteracy, mutual differences, and other social evils. It promotes simple marriages according to the Sunnah, education, skill development, human service, excellent manners, and moral values.
                  </p>
                  <p>
                    Alongside social reform and education, our Foundation is actively involved in Public Welfare. We consider service to humanity (Khidmat-e-Khalq) as our duty through supporting needy families, assisting meritorious yet financially weak students, organizing health awareness drives, blood donations, disaster relief, environmental protection, career counseling, skill development, spreading awareness of government schemes, and other humanitarian services. We believe that a strong, conscious, and prosperous society is built through the balanced synergy of social reform, education, and public welfare.
                  </p>
                  <p>
                    The purpose of the Foundation is not merely to speak of social reform, but to implement it in practical life. To this end, we strive to reach every need of the community through the Family Census, digital community portal, membership campaigns, scholarship assistance, career counseling, employment support, matrimonial assistance, women and youth empowerment, government schemes awareness, health drives, disaster relief, and various social and public welfare projects.
                  </p>
                  <p>
                    Our dream is of a Muslim Rangrez (Neelgar) community that is successful in both spiritual and worldly life—where every child is educated, every youth is skilled and employed, every family is united, every marriage is conducted with simplicity according to the Sunnah, every citizen understands their responsibilities toward their country, community, and humanity, and the entire society stands as an example of unity, trustworthiness, integrity, brotherhood, discipline, patriotism, and service to humanity (Khidmat-e-Khalq).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    मुस्लिम रंगरेज (नीलगर) समाज पब्लिक वेलफेयर एंड एजुकेशनल फ़ाउंडेशन एक गैर-राजनीतिक, गैर-लाभकारी (Non-Profit) समाजी, तालीमी एवं जनकल्याणकारी (Public Welfare) संस्था है, जो क़ुरआन व सुन्नत की तालीमात, भारतीय संविधान के मूल्यों, राष्ट्रप्रेम (हुब्बुल वतन), उच्च नैतिक चरित्र, सामाजिक ज़िम्मेदारी और इंसानियत के उसूलों के अनुरूप समाज की बेहतरी, शिक्षा, जनकल्याण, एकता और आत्मनिर्भरता के लिए समर्पित है।
                  </p>
                  <p>
                    हमारी समाज सुधार मुहिम की बुनियाद सन् 1999 में ग्राम सुजरमा, तहसील कैलारस, ज़िला मुरैना (मध्य प्रदेश) से रखी गई थी। पिछले 27 वर्षों से यह मुहिम समाज की इस्लाह, तालीम, इत्तेहाद और समाजी बेहतरी के लिए लगातार अपनी ख़िदमात अंजाम दे रही है। सन् 2025 से तहसील जौरा जिला मुरैना मध्य प्रदेश से इस मुहिम को नए विज़न, बेहतर संगठन, आधुनिक तकनीक और राष्ट्रीय स्तर की सोच के साथ पुनर्गठित कर एक नई रफ़्तार से आगे बढ़ाया जा रहा है, ताकि देशभर के मुस्लिम रंगरेज (नीलगर) समाज को एक मज़बूत, शिक्षित, जागरूक और संगठित मंच प्रदान किया जा सके।
                  </p>
                  <p>
                    हमारा यक़ीन है कि किसी भी क़ौम की असल तरक़्क़ी सिर्फ़ माली तरक़्क़ी से नहीं, बल्कि इल्म (शिक्षा), अच्छे अख़लाक़, दीनदारी, राष्ट्रप्रेम, नैतिक चरित्र, इत्तेहाद, हुनर, रोज़गार, आत्मनिर्भरता और समाजी ज़िम्मेदारी से होती है। इसी सोच के साथ हमारी मुहिम समाज में फैली बेबुनियाद रस्मों, फ़िज़ूलखर्ची, दहेज, नशाखोरी, अशिक्षा, आपसी मतभेद और दूसरी समाजी बुराइयों के ख़िलाफ़ जागरूकता अभियान चलाती है तथा सुन्नत के मुताबिक़ सादगीपूर्ण निकाह, तालीम, हुनर, इंसानी ख़िदमत, अच्छे अख़लाक़ और नैतिक जीवन-मूल्यों को फ़रोग़ देती है।
                  </p>
                  <p>
                    समाज सुधार और शिक्षा के साथ-साथ हमारा फ़ाउंडेशन जनकल्याण (Public Welfare) के क्षेत्र में भी सक्रिय रूप से कार्य करता है। ज़रूरतमंद परिवारों की सहायता, मेधावी एवं आर्थिक रूप से कमज़ोर विद्यार्थियों को सहयोग, स्वास्थ्य जागरूकता अभियान, रक्तदान, आपदा एवं राहत कार्य, पर्यावरण संरक्षण, करियर मार्गदर्शन, कौशल विकास, सरकारी योजनाओं की जानकारी तथा अन्य मानवीय सेवाओं के माध्यम से हम ख़िदमत-ए-ख़ल्क़ (मानव सेवा) को अपना फ़र्ज़ समझते हैं। हमारा विश्वास है कि समाज सुधार, तालीम और जनकल्याण—इन तीनों के संतुलित प्रयासों से ही एक मज़बूत, जागरूक और ख़ुशहाल समाज का निर्माण संभव है।
                  </p>
                  <p>
                    फ़ाउंडेशन का मक़सद केवल समाज सुधार की बातें करना नहीं, बल्कि उन्हें अमली ज़िंदगी में उतारना है। इसी उद्देश्य से हम परिवार जनगणना (Family Census), डिजिटल कम्युनिटी पोर्टल, सदस्यता अभियान, छात्रवृत्ति सहायता, करियर मार्गदर्शन, रोज़गार सहायता, वैवाहिक सहयोग, महिला एवं युवा सशक्तिकरण, सरकारी योजनाओं की जानकारी, स्वास्थ्य जागरूकता, राहत एवं आपदा सहायता तथा विभिन्न समाजी एवं जनकल्याणकारी परियोजनाओं के माध्यम से समाज की हर ज़रूरत तक पहुँचने का प्रयास कर रहे हैं।
                  </p>
                  <p>
                    हमारा सपना एक ऐसे मुस्लिम रंगरेज (नीलगर) समाज का है जो दीन व दुनिया दोनों में कामयाब हो—जहाँ हर बच्चा तालीमयाफ़्ता हो, हर नौजवान हुनरमंद और रोज़गार से जुड़ा हो, हर परिवार संगठित हो, हर निकाह सुन्नत के मुताबिक़ सादगी से हो, हर नागरिक अपने वतन, समाज और इंसानियत के प्रति अपनी ज़िम्मेदारियों को समझे, और पूरा समाज इत्तेहाद, अमानतदारी, नैतिकता, भाईचारे, अनुशासन, राष्ट्रप्रेम और ख़िदमत-ए-ख़ल्क़ की मिसाल बने।
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <p className="text-2xl font-serif font-extrabold text-[#004B23]">25,000+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                  {currentLanguage === 'en' ? 'Families Connected' : 'जुड़े हुए परिवार'}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-serif font-extrabold text-[#F4C430]">220+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                  {currentLanguage === 'en' ? 'District Committees' : 'जिला कमेटियां'}
                </p>
              </div>
            </div>

            {/* Verification badging / action buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <button
                onClick={() => onNavigate('about-constitution')}
                className="px-6 py-3 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] text-xs font-black uppercase tracking-wider rounded transition shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <span>📜</span>
                <span>{currentLanguage === 'en' ? 'Read Trust Constitution & By-Laws' : currentLanguage === 'ur' ? 'ٹرسٹ کا آئین پڑھیں' : 'महासभा संविधान एवं नियमावली'}</span>
              </button>

              <button
                onClick={() => onNavigate('about-certificate')}
                className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded transition shadow hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <FileText className="h-4 w-4 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'View Society Certificate' : 'सोसाइटी प्रमाण पत्र देखें'}</span>
              </button>

              <button
                onClick={() => onNavigate('about-excellence')}
                className="px-6 py-3 bg-[#0B132B] hover:bg-[#142244] text-[#FFD54A] border border-[#FFD54A]/30 text-xs font-black uppercase tracking-wider rounded transition shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <span>🏆</span>
                <span>{currentLanguage === 'en' ? 'Hall of Excellence (Achievers)' : currentLanguage === 'ur' ? 'ہال آف ایکسیلنس' : 'गौरवशाली विभूतियाँ'}</span>
              </button>

              <button
                onClick={() => onNavigate('about-certificate')}
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center space-x-2"
              >
                <QrCode className="h-4 w-4 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'Verify Trust Registration' : 'ट्रस्ट पंजीकरण सत्यापित करें'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 2. VISION, MISSION & CORE VALUES CARDS    */}
      {/* ========================================== */}
      <section className="py-20 bg-[#F5F2EB] border-y border-gray-200/45" id="vision_mission_values_cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'OUR GUIDING PRINCIPLES & GOALS' : 'हमारे उसूल-ओ-मक़ासिद'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Our Vision, Mission & Core Principles' : 'हमारा विज़न, मक़सद और बुनियादी उसूल'}
            </h2>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Vision */}
            <div 
              role="button"
              tabIndex={0}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between cursor-pointer hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F4C430] opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-[#F4C430] flex items-center justify-center border border-amber-100 group-hover:scale-110 transition duration-300">
                  <BookOpen className="h-6 w-6 text-[#F4C430]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-emerald-950">
                    {currentLanguage === 'en' ? 'Our Vision' : 'हमारा नज़रिया'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'An educated Muslim Rangrez (Neelgar) community, in the light of the Quran and Sunnah, united, self-reliant, technologically and economically strong, adorned with reformative morals (Islahi Akhlaq), filled with patriotism, humanity, and public welfare, and presenting an example of progress in both deen (faith) and duniya (world) to become an inspiration for future generations.'
                      : '“एक ऐसा मुस्लिम रंगरेज (नीलगर) समाज, जो क़ुरआन व सुन्नत की रौशनी में तालीमयाफ़्ता, संगठित, ख़ुदमुख़्तार, तकनीकी और आर्थिक तौर पर मज़बूत, इस्लाही अख़लाक़ से आरास्ता, राष्ट्रप्रेम, इंसानियत और जनकल्याण के जज़्बे से सराबोर हो तथा दीन व दुनिया दोनों में तरक़्क़ी की मिसाल बनकर आने वाली नस्लों के लिए प्रेरणा बने।”'}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Mission */}
            <div 
              role="button"
              tabIndex={0}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between cursor-pointer hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#004B23] opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#004B23] flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition duration-300">
                  <Shield className="h-6 w-6 text-[#004B23]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-emerald-950">
                    {currentLanguage === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                  </h3>
                  <ul className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-1.5 pl-4 list-disc">
                    {currentLanguage === 'en' ? (
                      <>
                        <li>Social reform and eradication of baseless rituals & traditions</li>
                        <li>Family Census & digital organization</li>
                        <li>Promotion of education, scholarships, and employment</li>
                        <li>Public welfare and building a self-reliant society</li>
                        <li>Propagation of Islamic morals (Akhlaq) based on Quran and Sunnah, patriotism, and humanity</li>
                        <li>Every possible support to women, students, the elderly, and families in need</li>
                        <li>Uniting the community under a single banner through modern technology and digital platforms</li>
                        <li>Reaching out to help everyone in need, considering public service (Khidmat-e-Khalq) as our supreme social duty</li>
                      </>
                    ) : (
                      <>
                        <li>समाज सुधार एवं बेबुनियाद रस्मों का उन्मूलन</li>
                        <li>परिवार जनगणना एवं डिजिटल संगठन</li>
                        <li>शिक्षा, छात्रवृत्ति एवं रोज़गार संवर्धन</li>
                        <li>जनकल्याण एवं आत्मनिर्भर समाज का निर्माण</li>
                        <li>क़ुरआन व सुन्नत पर आधारित इस्लामी अख़लाक़, राष्ट्रप्रेम एवं इंसानियत का प्रसार.</li>
                        <li>महिलाओं, विद्यार्थियों, बुज़ुर्गों एवं ज़रूरतमंद परिवारों को हर संभव सहयोग।</li>
                        <li>आधुनिक तकनीक एवं डिजिटल प्लेटफ़ॉर्म के माध्यम से समाज को एक सूत्र में जोड़ना।</li>
                        <li>ख़िदमत-ए-ख़ल्क़ को अपना सर्वोच्च सामाजिक दायित्व मानते हुए हर ज़रूरतमंद तक सहायता पहुँचाना।</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Core Values */}
            <div 
              role="button"
              tabIndex={0}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between cursor-pointer hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F4C430] opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-[#F4C430] flex items-center justify-center border border-amber-100 group-hover:scale-110 transition duration-300">
                  <Star className="h-6 w-6 text-[#F4C430]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-emerald-950 border-b border-gray-100 pb-2">
                    {currentLanguage === 'en' ? 'Core Values' : 'मूल मूल्य'}
                  </h3>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>{currentLanguage === 'en' ? 'Humanity' : 'मानवता'}</li>
                      <li>{currentLanguage === 'en' ? 'Compassion' : 'करुणा'}</li>
                      <li>{currentLanguage === 'en' ? 'Honesty' : 'ईमानदारी'}</li>
                      <li>{currentLanguage === 'en' ? 'Transparency' : 'पारदर्शिता'}</li>
                      <li>{currentLanguage === 'en' ? 'Accountability' : 'जवाबदेही'}</li>
                      <li>{currentLanguage === 'en' ? 'Equality' : 'समानता'}</li>
                      <li>{currentLanguage === 'en' ? 'Respect for the Constitution of India' : 'भारत के संविधान का सम्मान'}</li>
                      <li>{currentLanguage === 'en' ? 'Respect for the law' : 'कानून का सम्मान'}</li>
                      <li>{currentLanguage === 'en' ? 'Dignity of every individual' : 'प्रत्येक व्यक्ति की गरिमा'}</li>
                      <li>{currentLanguage === 'en' ? 'Non-discrimination' : 'गैर-भेदभाव'}</li>
                      <li>{currentLanguage === 'en' ? 'Volunteer safety' : 'स्वयंसेवक सुरक्षा'}</li>
                      <li>{currentLanguage === 'en' ? 'Financial transparency' : 'वित्तीय पारदर्शिता'}</li>
                      <li>{currentLanguage === 'en' ? 'Environmental responsibility' : 'पर्यावरण जिम्मेदारी'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. WHO WE ARE: COMMITMENTS GRID            */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="who_we_are_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'WHAT WE ARE COMMITTED TO' : 'हमारा संकल्प एवं प्रतिबद्धता'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Who We Are & What We Stand For' : 'हम कौन हैं और हमारे सामाजिक उद्देश्य'}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              {currentLanguage === 'en' 
                ? 'We operate strategically across eleven key community parameters to secure absolute welfare progress, literacy rate, and unity.' 
                : 'हम पूर्ण कल्याणकारी प्रगति, साक्षरता दर और अटूट एकता सुनिश्चित करने के लिए ग्यारह मुख्य स्तंभों पर रणनीतिक रूप से काम करते हैं।'}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-800 via-[#F4C430] to-emerald-800 mx-auto rounded"></div>
          </div>

          {/* 11 Commitments Beautiful Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="commitments_grid">
            {[
              {
                titleEn: "Education Support",
                titleHi: "तालीम व शिक्षा सहयोग",
                descEn: "100% scholarship funding for primary school children and tuition assistance.",
                descHi: "प्राथमिक विद्यालय के बच्चों के लिए 100% छात्रवृत्ति वित्तपोषण और ट्यूशन सहायता प्रदान करना।",
                icon: GraduationCap,
                color: "emerald"
              },
              {
                titleEn: "Community Welfare",
                titleHi: "समाज कल्याण कोष",
                descEn: "Targeted support and healthcare subsidies for widow and underprivileged families.",
                descHi: "विधवाओं और वंचित परिवारों के लिए लक्षित वित्तीय सहायता और चिकित्सा सब्सिडी योजनाएं।",
                icon: Heart,
                color: "emerald"
              },
              {
                titleEn: "Social Reform (इस्लाही सोच)",
                titleHi: "सामाजिक सुधार व इस्लाह",
                descEn: "Eradicating outdated custom systems, excessive dowry rituals, and promoting modesty.",
                descHi: "पुरानी बेबुनियाद रस्मों, अत्यधिक दहेज प्रथा को समाप्त करना और सादगी को बढ़ावा देना।",
                icon: ShieldCheck,
                color: "gold"
              },
              {
                titleEn: "Youth Development",
                titleHi: "युवा सशक्तिकरण",
                descEn: "Modern vocational coaching, computer literacy hubs, and skill development classes.",
                descHi: "आधुनिक व्यावसायिक कोचिंग, कंप्यूटर साक्षरता केंद्र और कौशल विकास कक्षाएं संचालित करना।",
                icon: Sparkles,
                color: "emerald"
              },
              {
                titleEn: "Women's Empowerment",
                titleHi: "महिला उद्यमिता",
                descEn: "Supporting cottage industries, traditional embroidery training, and tailor workshops.",
                descHi: "लघु कुटीर उद्योगों, पारंपरिक कढ़ाई प्रशिक्षण और सिलाई कार्यशालाओं को वित्तपोषित करना।",
                icon: UserCheck,
                color: "gold"
              },
              {
                titleEn: "Scholarship Support",
                titleHi: "उच्च शिक्षा स्कॉलरशिप",
                descEn: "Financial grants for university programs, engineering, and competitive exams.",
                descHi: "विश्वविद्यालय कार्यक्रमों, इंजीनियरिंग, मेडिकल और प्रतियोगी परीक्षाओं के लिए वित्तीय सहायता।",
                icon: Award,
                color: "emerald"
              },
              {
                titleEn: "Matrimonial Assistance",
                titleHi: "सत्यापित वैवाहिक मंच",
                descEn: "Secure, highly private profiles matching traditional family-first parameters.",
                descHi: "पारंपरिक पारिवारिक मूल्यों से मेल खाते सुरक्षित, अत्यधिक निजी और सत्यापित वैवाहिक रिश्ते।",
                icon: Users,
                color: "emerald"
              },
              {
                titleEn: "Employment Support",
                titleHi: "रोजगार व करियर प्लेसमेंट",
                descEn: "Connecting community professional databases to career openings and micro-grants.",
                descHi: "सामुदायिक पेशेवरों के डेटाबेस को नौकरी के अवसरों और स्वरोजगार अनुदानों से जोड़ना।",
                icon: Briefcase,
                color: "gold"
              },
              {
                titleEn: "Digital Community Dev",
                titleHi: "डिजिटल कम्युनिटी विकास",
                descEn: "Unifying all regions under a centralized cloud family directory.",
                descHi: "एक केंद्रीय सुरक्षित क्लाउड पारिवारिक निर्देशिका के तहत सभी क्षेत्रों को डिजिटल रूप से जोड़ना।",
                icon: QrCode,
                color: "emerald"
              },
              {
                titleEn: "Absolute Transparency",
                titleHi: "पूर्ण वित्तीय पारदर्शिता",
                descEn: "Real-time ledger tracking for all welfare funds, visible publicly on the dashboard.",
                descHi: "सभी कल्याणकारी कोषों के लिए रीयल-टाइम बहीखाता ट्रैकिंग, जो सार्वजनिक रूप से प्रदर्शित है।",
                icon: Landmark,
                color: "gold"
              },
              {
                titleEn: "National Integration & Unity",
                titleHi: "राष्ट्रीय एकता व भाईचारा",
                descEn: "Strengthening harmony and solidarity across all districts and states in India.",
                descHi: "भारत के सभी जिलों और राज्यों में आपसी सौहार्द, राष्ट्रीय एकता और भाईचारे को मजबूत करना।",
                icon: FileText,
                color: "emerald"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4 hover:border-[#F4C430]/40 hover:shadow-md transition duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  item.color === 'gold' 
                    ? 'bg-[#F4C430]/10 text-emerald-950 group-hover:bg-[#F4C430]/20' 
                    : 'bg-emerald-50 text-emerald-800 group-hover:bg-emerald-100'
                }`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-extrabold text-emerald-950">
                    {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {currentLanguage === 'en' ? item.descEn : item.descHi}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 3.5 KEY ACTIVITIES & WELFARE PROGRAMS       */}
      {/* ========================================== */}
      <section className="py-20 bg-white" id="key_activities_cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'OUR ACTIVE IMPACT' : 'हमारी गतिविधियां'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Our Key Activities & Welfare Programs' : 'हमारे मुख्य कार्यक्षेत्र एवं जन कल्याण गतिविधियां'}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              {currentLanguage === 'en'
                ? 'Empowering households through structured execution, technology, and traditional preservation.'
                : 'प्रणालीगत क्रियान्वयन, तकनीक और हमारी कलात्मक विरासत के संरक्षण द्वारा प्रत्येक परिवार को समृद्ध बनाना।'}
            </p>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Academic Support & IT Literacy' : 'उच्च शिक्षा स्कॉलरशिप व कंप्यूटर साक्षरता'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Setting up digital IT labs in block offices and sponsoring computer courses to ensure the younger generation secures competitive job opportunities.'
                    : 'ब्लॉक कार्यालयों में डिजिटल आईटी लैब की स्थापना और कंप्यूटर कोर्सेज को प्रायोजित करना ताकि युवा पीढ़ी को तकनीकी कौशल और रोजगार मिल सके।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F4C430] flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Medical Assistance & Blood Bank' : 'चिकित्सा सहायता और ब्लड डोनर सूची'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Managing emergency medical grants for surgeries and establishing a national digital directory of verified community blood donors.'
                    : 'गंभीर बीमारियों व सर्जरी के लिए आपातकालीन वित्तीय चिकित्सा सहायता कोष और सत्यापित रक्तदाताओं की राष्ट्रीय डिजिटल निर्देशिका का संचालन।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Mass Marriage & Reform Counseling' : 'सामूहिक आदर्श निकाह एवं सामाजिक सुधार'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Organizing highly respectable collective marriage ceremonies to protect families from crippling high-interest wedding debts and loans.'
                    : 'गरीब व मध्यमवर्गीय परिवारों को ब्याज के बोझ तले दबने से बचाने के लिए सामूहिक आदर्श विवाहों का गरिमामयी आयोजन व मार्गदर्शन करना।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F4C430] flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Preserving Traditional Textile Art' : 'पारंपरिक नीलगर ब्लॉक प्रिंटिंग कला संरक्षण'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Advocating and digitizing the ancient block printing & indigo dyeing craftsmanship of the Neelgar artisans to reach modern global markets.'
                    : 'नीलगर समुदाय के पुश्तैनी ब्लॉक प्रिंटिंग व हस्तनिर्मित इंडिगो रंगाई हुनर को वैश्विक बाजारों से जोड़कर कारीगरों को आत्मनिर्भर बनाना।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <QrCode className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Digital ID Cards & Census Registry' : 'डिजिटल पहचान पत्र एवं जनगणना डेटाबेस'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Publishing secure QR-code identity cards and cataloging families to map out local socio-economic relief initiatives efficiently.'
                    : 'समाज के प्रत्येक सदस्य को सुरक्षित डिजिटल पहचान पत्र प्रदान करना और जरूरतमंदों की पहचान हेतु जनगणना सूचकांक का संकलन करना।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-600/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F4C430] flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-950 group-hover:text-emerald-800 transition duration-300">
                  {currentLanguage === 'en' ? 'Government Scheme Guidance' : 'सरकारी अल्पसंख्यक योजनाओं का मार्गदर्शन'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Assisting members in submitting applications for official minority loans, student subsidies, and skill training programs.'
                    : 'राष्ट्रीय अल्पसंख्यक कल्याण विभाग, छात्रवृत्ति और कौशल विकास अनुदान योजनाओं के लिए हमारे सूचना केंद्रों द्वारा निःशुल्क मार्गदर्शन।'}
                </p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100/50 flex justify-between items-center">
                <span className="text-xs text-emerald-800 font-bold">{currentLanguage === 'en' ? 'Learn More' : 'विस्तार से जानें'}</span>
                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 4. CORE VALUES: THREE ANIMATED STIMULATORS */}
      {/* ========================================== */}
      <section className="py-24 bg-gradient-to-b from-emerald-950 to-[#03140A] text-white relative overflow-hidden" id="core_values_animated_section">
        {/* Intricate Islamic geometric vector grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        {/* Soft glowing particle accents */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#F4C430]/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#F4C430] font-bold text-xs uppercase tracking-widest block font-mono">
              {currentLanguage === 'en' ? 'OUR THREE FOUNDATIONAL PILLARS' : 'हमारे तीन मुख्य आधार स्तंभ'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Core Values & Islamic Reform' : 'मूल आदर्श एवं व्यावहारिक सुधार'}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded"></div>
          </div>

          {/* Premium Luxury Glassmorphic Animated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="values_animated_grid">
            
            {/* VALUE 1: एकता (Unity) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#F4C430]/60 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430] shadow-inner transition-transform duration-500 group-hover:scale-110">
                  <Users className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4C430] block">
                    {currentLanguage === 'en' ? 'PILLAR ONE' : 'प्रथम स्तंभ'}
                  </span>
                  <h3 className="text-2xl font-serif font-extrabold text-white flex items-center space-x-2">
                    <span>{currentLanguage === 'en' ? 'Unity' : 'एकता'}</span>
                    <span className="text-[#F4C430] text-xs font-serif font-bold italic ml-2 bg-emerald-900/60 px-2 py-0.5 rounded border border-[#F4C430]/20">इत्तेहाद</span>
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? "Unifying state and district levels under a single digital hub to support and streamline communications and collaborative aid distribution."
                    : "राज्य और जिला स्तरों को एक एकीकृत डिजिटल हब के अंतर्गत जोड़ना ताकि आपसी सहयोग, आपदा राहत और सुव्यवस्थित सहायता वितरण को सुगम बनाया जा सके।"}
                </p>
              </div>

              {/* Accent golden bottom line */}
              <div className="h-1 w-0 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent group-hover:w-full transition-all duration-500 mt-6 rounded"></div>
            </div>

            {/* VALUE 2: तालीम (Education) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#F4C430]/60 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430] shadow-inner transition-transform duration-500 group-hover:scale-110">
                  <BookOpen className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4C430] block">
                    {currentLanguage === 'en' ? 'PILLAR TWO' : 'द्वितीय स्तंभ'}
                  </span>
                  <h3 className="text-2xl font-serif font-extrabold text-white flex items-center space-x-2">
                    <span>{currentLanguage === 'en' ? 'Education' : 'तालीम'}</span>
                    <span className="text-[#F4C430] text-xs font-serif font-bold italic ml-2 bg-emerald-900/60 px-2 py-0.5 rounded border border-[#F4C430]/20 font-serif font-bold">इल्म</span>
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? "Absolute focus on modern scientific, computer, and academic literacy alongside moral values. We fund post-graduate, medical, and engineering scholarships."
                    : "नैतिक मूल्यों के साथ-साथ आधुनिक वैज्ञानिक, कंप्यूटर और उच्च अकादमिक साक्षरता पर पूर्ण ध्यान केंद्रित करना। हम स्नातकोत्तर, चिकित्सा और इंजीनियरिंग छात्रों को छात्रवृत्ति प्रदान करते हैं।"}
                </p>
              </div>

              {/* Accent golden bottom line */}
              <div className="h-1 w-0 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent group-hover:w-full transition-all duration-500 mt-6 rounded"></div>
            </div>

            {/* VALUE 3: इस्लाही सोच (Reform & Positive Thinking) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#F4C430]/60 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430] shadow-inner transition-transform duration-500 group-hover:scale-110">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4C430] block">
                    {currentLanguage === 'en' ? 'PILLAR THREE' : 'तृतीय स्तंभ'}
                  </span>
                  <h3 className="text-2xl font-serif font-extrabold text-white flex items-center space-x-2">
                    <span>{currentLanguage === 'en' ? 'Reformative Thinking' : 'इस्लाही सोच'}</span>
                    <span className="text-[#F4C430] text-xs font-serif font-bold italic ml-2 bg-emerald-900/60 px-2 py-0.5 rounded border border-[#F4C430]/20">इस्लाह</span>
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? "Systematic social social social campaigns against outdated custom systems, excessive dowry, wasteful wedding spends, while promoting modesty, mutual assistance, and national brotherhood."
                    : "दहेज कुप्रथा, फिजूलखर्ची और पुरानी बेबुनियाद रस्मों के खिलाफ व्यापक अभियान। इसका उद्देश्य सामाजिक सादगी, आपसी सहयोग और राष्ट्रीय भाईचारे को बढ़ावा देना है।"}
                </p>
              </div>

              {/* Accent golden bottom line */}
              <div className="h-1 w-0 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent group-hover:w-full transition-all duration-500 mt-6 rounded"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* RANGREZ PREMIUM INTERACTIVE PORTAL SECTIONS */}
      {/* ========================================== */}
      <AnimatedCommunityStats currentLanguage={currentLanguage} />
      <SuccessStories currentLanguage={currentLanguage} />
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
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#F4C430] rounded"></div>
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
                <GraduationCap className="h-5 w-5 text-[#F4C430]" />
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
                <ShieldCheck className="h-5 w-5 text-[#F4C430]" />
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
                  <div className="bg-[#F4C430] h-full" style={{ width: '84%' }}></div>
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
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
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
                  <circle cx="150" cy="200" r="5" fill="#F4C430" className="animate-ping" />
                  <circle cx="150" cy="200" r="3" fill="#F4C430" />

                  <circle cx="210" cy="160" r="5" fill="#F4C430" />
                  <circle cx="100" cy="160" r="5" fill="#F4C430" />
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
                    <span className="px-2 py-1 bg-[#F4C430]/10 text-[#004B23] text-[10px] font-mono font-bold rounded">
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
                    className="text-xs font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 transition"
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
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#F4C430] font-bold text-xs uppercase tracking-widest block">
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
              
              <div className="space-y-3 font-mono text-xs text-[#F4C430]" id="matrimonial_rules">
                <p>✓ 100% Verified Aadhaar & Community ID</p>
                <p>✓ Guardian Consent Mandatory for Contact Release</p>
                <p>✓ Screenshot Blocking Shield Integration</p>
              </div>

              <button
                onClick={() => onNavigate('matrimonial')}
                className="px-6 py-3.5 bg-[#F4C430] hover:bg-[#FFDF66] text-emerald-950 font-bold text-xs uppercase tracking-wider rounded shadow-lg transition"
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#F4C430]/40 to-emerald-800 flex items-center justify-center border-2 border-[#F4C430]/20 relative overflow-hidden">
                      {/* Artistic blur visual representing high-security profile */}
                      <div className="absolute inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center font-bold text-xs text-[#F4C430]">
                        SECURE
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono bg-emerald-800 text-[#F4C430] px-2 py-0.5 rounded uppercase">
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
                      <span className="font-medium text-[#F4C430]">
                        {currentLanguage === 'en' ? p.jobEn : p.jobHi}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => onNavigate('matrimonial')}
                      className="w-full py-2 bg-[#F4C430]/10 hover:bg-[#F4C430] hover:text-emerald-950 text-[#F4C430] text-[10px] uppercase font-bold tracking-wider rounded border border-[#F4C430]/30 transition"
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
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-lg font-serif font-bold text-[#F4C430]">
                {currentLanguage === 'en' ? 'Real-time Census Metric' : 'वास्तविक समय डेटा मीटर'}
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-300">Total Families Logged:</span>
                  <span className="text-[#F4C430] font-bold">12,850</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-300">Verified QR ID Cards:</span>
                  <span className="text-[#F4C430] font-bold">9,420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pending Physical Checks:</span>
                  <span className="text-gray-400">1,240</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <div className="bg-emerald-900/50 border border-[#F4C430]/30 p-4 rounded-xl flex items-center space-x-4">
                <QrCode className="h-10 w-10 text-[#F4C430] flex-shrink-0" />
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
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
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
                className="text-xs font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 transition"
              >
                <span>{currentLanguage === 'en' ? 'Register for Next Batch' : 'अगले बैच हेतु पंजीकरण करें'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#004B23] flex items-center justify-center">
                <Landmark className="h-6 w-6 text-[#F4C430]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-emerald-950">
                {currentLanguage === 'en' ? 'Weaving & Dyeing Modernization' : 'ब्लॉक प्रिंटिंग और जदीद तकनीक'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'Connecting traditional handblock printers with modern chemical compliance, organic cotton exporters, and wholesale digital marketplaces.' 
                  : 'पारंपरिक ब्लॉक प्रिंटर्स को जदीद केमिकल सहूलियत, आर्गेनिक कॉटन एक्सपोर्टर्स और थोक डिजिटल बाज़ारों से जोड़ना।'}
              </p>
              <button 
                onClick={() => onNavigate('education')}
                className="text-xs font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 transition"
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
                {currentLanguage === 'en' ? 'UPSC & Competitive Mentorship' : 'UPSC और प्रतियोगी इम्तिहान रहनुमाई'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' 
                  ? 'Monthly interactive mentorship programs with retired civil servants, bank executives, and university professors of our community.' 
                  : 'रिटायर्ड सिविल सेवकों, बैंक अधिकारियों और यूनिवर्सिटी प्रोफेसरों द्वारा बच्चों के लिए ख़ास रहनुमाई प्रोग्राम।'}
              </p>
              <button 
                onClick={() => onNavigate('education')}
                className="text-xs font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 transition"
              >
                <span>{currentLanguage === 'en' ? 'Connect with a Mentor' : 'रहनुमा (मार्गदर्शक) से राब्ता क़ायम करें'}</span>
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
                {currentLanguage === 'en' ? 'Welfare Aid' : 'सरकारी अक़ल्लियाती (अल्पसंख्यक) स्कीमें'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
                {currentLanguage === 'en' ? 'Government Scheme Eligibility Wizard' : 'सरकारी अक़ल्लियाती एवं बुनकर फ़लाही (कल्याण) स्कीमें'}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#004B23] to-[#F4C430] rounded"></div>
            </div>

            <button 
              onClick={() => onNavigate('schemes')}
              className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded transition"
            >
              {currentLanguage === 'en' ? 'Open Eligibility Checker' : 'पात्रता जांचने का टूल खोलें'}
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
            <div className="absolute -inset-2 bg-[#F4C430]/10 rounded-2xl blur-md"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-emerald-950 flex flex-col justify-end p-6 text-white border border-[#F4C430]/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              {/* Dynamic SVG background pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:12px_12px] z-0"></div>
              
              <div className="relative z-20 space-y-2">
                <span className="text-[#F4C430] font-bold text-xs uppercase tracking-wider font-mono">
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          <div className="space-y-3">
            <span className="text-[#F4C430] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Future Builders' : 'भावी नेतृत्व निर्माण'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Youth Leadership & Career Networks' : 'युवा नेतृत्व एवं कैरियर विकास नेटवर्क'}
            </h2>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
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
                className="bg-emerald-900/40 border border-white/5 hover:border-[#F4C430]/50 rounded-xl p-6 text-center space-y-4 hover:bg-emerald-900/60 transition duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#F4C430]/10 text-[#F4C430] flex items-center justify-center mx-auto">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#F4C430]">
                  {translate(y, 'title', currentLanguage)}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {translate(y, 'desc', currentLanguage)}
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
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
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
                    <Star className="h-5 w-5 text-[#F4C430]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-gray-900">{translate(story, 'name', currentLanguage)}</h4>
                    <p className="text-[10px] text-emerald-800 uppercase tracking-wider font-mono">Verified Achievement</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light italic">
                  {translate(story, 'desc', currentLanguage)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 13. PHOTOGRAPHIC & VIDEO GALLERY PREVIEW   */}
      {/* ========================================== */}
      <section className="py-20 bg-[#F5F2EB] border-y border-[#004B23]/5" id="documentary_media_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Digital Community Archives' : 'डिजिटल विरासत गैलरी'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Community Photo & Video Galleries' : 'डिजिटल फोटो एवं वीडियो गैलरी'}
            </h2>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Hand: Photo Gallery Grid Preview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-emerald-950">
                  {currentLanguage === 'en' ? 'Featured Photo Albums' : 'चुनिंदा फोटो एलबम'}
                </h3>
                <button
                  onClick={() => onNavigate('media')}
                  className="text-xs font-mono font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 uppercase tracking-wider transition"
                >
                  <span>{currentLanguage === 'en' ? 'View All Photos' : 'सभी फोटो देखें'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Grid of Photo Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    titleEn: "Society Registrations & Meetings",
                    titleHi: "संस्था पंजीकरण व बैठकें",
                    badgeEn: "Historical Meetings",
                    badgeHi: "बैठकें",
                    bgClass: "from-emerald-900 to-emerald-950"
                  },
                  {
                    titleEn: "Annual Sports & Cricket Meet",
                    titleHi: "वार्षिक खेलकूद प्रतियोगिताएं",
                    badgeEn: "Sports Event",
                    badgeHi: "खेलकूद",
                    bgClass: "from-amber-900 to-amber-950"
                  },
                  {
                    titleEn: "Charity Distribution Drives",
                    titleHi: "राहत सामग्री व चिकित्सा वितरण",
                    badgeEn: "Welfare Drive",
                    badgeHi: "समाज सेवा",
                    bgClass: "from-emerald-950 to-teal-950"
                  },
                  {
                    titleEn: "Academic Merit Awards",
                    titleHi: "मेधावी छात्र-छात्रा सम्मान",
                    badgeEn: "Education Hub",
                    badgeHi: "शिक्षा सम्मान",
                    bgClass: "from-blue-900 to-indigo-950"
                  }
                ].map((photo, pIdx) => (
                  <div key={pIdx} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-emerald-950 group border border-gray-200/20 shadow-md">
                    <div className={`absolute inset-0 bg-gradient-to-br ${photo.bgClass} opacity-85 group-hover:scale-105 transition-transform duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:8px_8px] z-0"></div>
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-between z-20">
                      <span className="text-[8px] font-mono font-bold bg-[#F4C430]/90 text-emerald-950 px-2 py-0.5 rounded uppercase self-start">
                        {translate(photo, 'badge', currentLanguage)}
                      </span>
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-white leading-tight">
                        {translate(photo, 'title', currentLanguage)}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hand: Video Documentary Preview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-emerald-950">
                  {currentLanguage === 'en' ? 'Featured Documentaries' : 'मुख्य वृत्तचित्र'}
                </h3>
                <button
                  onClick={() => onNavigate('media')}
                  className="text-xs font-mono font-bold text-[#004B23] hover:text-[#F4C430] flex items-center space-x-1.5 uppercase tracking-wider transition"
                >
                  <span>{currentLanguage === 'en' ? 'Watch Videos' : 'वीडियो देखें'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="aspect-video bg-emerald-950 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center text-white border border-[#F4C430]/20 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-transparent z-10"></div>
                {/* Dynamic visual effect */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:12px_12px] z-0"></div>
                
                {/* Play Button */}
                <div 
                  onClick={() => onNavigate('media')}
                  className="w-16 h-16 rounded-full bg-[#F4C430] hover:bg-[#FFDF66] text-emerald-950 flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition duration-300 z-20"
                >
                  <Video className="h-6 w-6 ml-1 text-emerald-950" />
                </div>

                <div className="absolute bottom-4 left-4 z-20 space-y-1 text-left">
                  <span className="text-[10px] font-mono bg-emerald-800 text-[#F4C430] px-2 py-0.5 rounded uppercase">
                    {currentLanguage === 'en' ? 'OFFICIAL DOCUMENTARY' : 'मुख्य वृत्तचित्र'}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {currentLanguage === 'en' ? 'Heritage & Colors: The Rangrez Story' : 'विरासत और रंग: रंगरेज समुदाय की कहानी'}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-light">
                {currentLanguage === 'en'
                  ? 'Discover national assembly sessions, local executive meet logs, and welfare highlight tapes directly inside our high-speed media server.'
                  : 'हमारे उच्च गति मीडिया सर्वर में महासभा के सत्रों, स्थानीय कमेटियों की बैठकों और लोक कल्याणकारी कार्यक्रमों के मुख्य वीडियो टेप देखें।'}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 14. LATEST NEWS & UPCOMING EVENTS          */}
      {/* ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="upcoming_events_section">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'COMMUNITY BROADCASTS' : 'सामुदायिक समाचार एवं कार्यक्रम'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
              {currentLanguage === 'en' ? 'Latest News & Upcoming Events' : 'नवीनतम समाचार एवं आगामी महासभा कार्यक्रम'}
            </h2>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* COLUMN 1: LATEST NEWS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-lg font-serif font-extrabold text-emerald-950 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4C430] animate-ping inline-block"></span>
                  <span>{currentLanguage === 'en' ? 'Latest News & Press' : 'मुख्य समाचार व प्रेस विज्ञप्ति'}</span>
                </h3>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {currentLanguage === 'en' ? 'LIVE FEED' : 'लाइव अपडेट'}
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    titleEn: "National Society Certificate Successfully Approved by Registrar",
                    titleHi: "रजिस्ट्रार द्वारा राष्ट्रीय संस्था प्रमाण पत्र को मिली कानूनी मंजूरी",
                    date: "July 2026",
                    sourceEn: "Executive Board",
                    sourceHi: "केंद्रीय कार्यकारिणी",
                    descEn: "The official registered name 'Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation' has been formally approved with register ID 02/42/01/28332/26.",
                    descHi: "संस्था के आधिकारिक पंजीकृत नाम को रजिस्ट्रार ऑफ फर्म्स एंड सोसाइटीज द्वारा कानूनी तौर पर स्वीकृत किया गया है।"
                  },
                  {
                    titleEn: "Rangrez Digital Census QR Code System Rolled Out Nationwide",
                    titleHi: "अखिल भारतीय स्तर पर डिजिटल जनगणना क्यूआर कोड प्रणाली लॉन्च",
                    date: "June 2026",
                    sourceEn: "IT Desk",
                    sourceHi: "आईटी विभाग",
                    descEn: "Phase 1 family registration registers and verified QR digital ID cards have started rolling out across Madhya Pradesh, Uttar Pradesh, and Rajasthan.",
                    descHi: "प्रथम चरण के पारिवारिक जनगणना पंजीकरण एवं डिजिटल क्यूआर आईडी कार्ड वितरण का कार्य म.प्र., यू.पी. और राजस्थान में शुरू किया जा चुका है।"
                  },
                  {
                    titleEn: "Free Healthcare & Eye Testing Camp Success in Kailaras",
                    titleHi: "कैलारस में निशुल्क चिकित्सा एवं नेत्र शिविर का भव्य आयोजन सफल",
                    date: "May 2026",
                    sourceEn: "Morena Committee",
                    sourceHi: "मुरैना जिला कमेटी",
                    descEn: "Over 450 families received free consultation, diagnostic tests, and direct prescription support under our medical transparency drive.",
                    descHi: "कैलारस स्वास्थ्य शिविर में 450 से अधिक परिवारों की निशुल्क जांच कर आवश्यक दवाओं का वितरण किया गया।"
                  }
                ].map((news, nIdx) => (
                  <div key={nIdx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition space-y-2 text-left">
                    <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                      <span>{currentLanguage === 'en' ? news.sourceEn : news.sourceHi}</span>
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-emerald-950 font-serif hover:text-[#004B23] transition cursor-pointer">
                      {currentLanguage === 'en' ? news.titleEn : news.titleHi}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                      {currentLanguage === 'en' ? news.descEn : news.descHi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: UPCOMING EVENTS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-lg font-serif font-extrabold text-emerald-950 flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Upcoming Assemblies & Gatherings' : 'आगामी महासभा कार्यक्रम'}</span>
                </h3>
                <button
                  onClick={() => onNavigate('media')}
                  className="text-xs font-mono font-bold text-[#004B23] hover:text-[#F4C430] transition uppercase"
                >
                  {currentLanguage === 'en' ? 'View Calendar' : 'कैलेंडर देखें'}
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    titleEn: "Annual Mass Marriage (Sammelan) Kailaras",
                    titleHi: "आदर्श सामूहिक विवाह सम्मेलन (कैलारस)",
                    date: "Nov 12, 2026",
                    venueEn: "Welfare Grounds, Kailaras, MP",
                    venueHi: "महासभा मैदान, कैलारस, म.प्र.",
                    badgeEn: "MASS WEDDING",
                    badgeHi: "सामूहिक विवाह"
                  },
                  {
                    titleEn: "National Executive Council Board Meet Morena",
                    titleHi: "राष्ट्रीय कार्यकारिणी परिषद बैठक (मुरैना)",
                    date: "Aug 15, 2026",
                    venueEn: "Rangrez Bhawan, Morena, MP",
                    venueHi: "रंगरेज भवन, मुरैना, म.प्र.",
                    badgeEn: "ADMINISTRATIVE",
                    badgeHi: "कार्यकारिणी बैठक"
                  },
                  {
                    titleEn: "District Educational Merit Award Gwalior",
                    titleHi: "जिला मेधावी छात्र सम्मान समारोह (ग्वालियर)",
                    date: "Sep 05, 2026",
                    venueEn: "Community Center, Gwalior",
                    venueHi: "सामुदायिक केंद्र, ग्वालियर",
                    badgeEn: "STUDENT AWARD",
                    badgeHi: "छात्र सम्मान"
                  }
                ].map((e, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 bg-[#F4C430]/10 text-emerald-950 text-[9px] font-mono font-bold rounded">
                        {currentLanguage === 'en' ? e.badgeEn : e.badgeHi}
                      </span>
                      <span className="text-xs font-mono text-gray-500 font-bold">{e.date}</span>
                    </div>
                    
                    <h4 className="text-sm font-bold text-emerald-950 font-serif">
                      {currentLanguage === 'en' ? e.titleEn : e.titleHi}
                    </h4>

                    <div className="flex items-start space-x-2 text-xs text-gray-500">
                      <MapPin className="h-4 w-4 text-[#F4C430] flex-shrink-0" />
                      <span>{currentLanguage === 'en' ? e.venueEn : e.venueHi}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* 15. VOLUNTEER NETWORK                      */}
      {/* ========================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden" id="volunteer_network_section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[#F4C430] font-bold text-xs uppercase tracking-widest block">
              {currentLanguage === 'en' ? 'Be The Change' : 'सेवा ही सर्वोपरि है'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Join the National Volunteer Force' : 'राष्ट्रीय स्वयंसेवक दल में शामिल हों'}
            </h2>
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            {currentLanguage === 'en'
              ? 'Our community grows when our youth step forward. Join as a digital verification officer, lead free tuition batches, assist in district food-distribution camps, or coordinate local medical drives.'
              : 'हमारा समाज तब आगे बढ़ेगा जब हमारे युवा निस्वार्थ भाव से आगे आएंगे। डिजिटल सत्यापन अधिकारी के रूप में शामिल हों, जरूरतमंद बच्चों को मुफ्त ट्यूशन पढ़ाएं या जिला राहत शिविरों में अपनी सेवा दें।'}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('volunteer-registration')}
              className="px-8 py-4 bg-[#F4C430] hover:bg-[#FFDF66] text-emerald-950 font-bold text-xs uppercase tracking-wider rounded shadow-lg transition"
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
                <span className="font-bold text-[#F4C430]">0.0% (Funded by Trustees)</span>
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
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[#F4C430] font-bold text-xs uppercase tracking-wider font-mono">
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
            <div className="h-1 w-20 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition duration-200"
                >
                  <span className="text-xs sm:text-sm font-bold text-emerald-950 pr-4">
                    {translate(faq, 'q', currentLanguage)}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-[#F4C430] flex-shrink-0" />
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
                        {translate(faq, 'a', currentLanguage)}
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
