import React, { useState } from 'react';
import { 
  Search, BookOpen, Briefcase, Award, GraduationCap, Building2, 
  ChevronRight, Sparkles, Bell, ArrowUpRight, ShieldCheck, CheckCircle2, 
  Users, Calendar, Compass, Layers, Globe, Star, Heart, FileText, TrendingUp,
  BarChart3, Bookmark, Settings, Check, MapPin, Zap
} from 'lucide-react';
import { Language } from '../types';
import EducationStudentDashboard from './EducationStudentDashboard';
import UniversalEducationSearch from './UniversalEducationSearch';

interface EducationOverviewProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function EducationOverview({ currentLanguage, onNavigate }: EducationOverviewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUnifiedDashboard, setShowUnifiedDashboard] = useState(false);
  const [showUniversalSearch, setShowUniversalSearch] = useState(false);
  const [activeRoadmap, setActiveRoadmap] = useState<'school' | 'college' | 'civil' | 'tech'>('school');
  const [activeAlertsTab, setActiveAlertsTab] = useState<'all' | 'news' | 'admissions' | 'scholarships'>('all');

  const labels = {
    title: {
      en: 'Unified Education, Exams & Careers Ecosystem',
      hi: 'एकीकृत शिक्षा, परीक्षा एवं करियर इकोसिस्टम',
      ur: 'متحدہ تعلیم، امتحانات اور کیریئر ایکوسسٹم'
    },
    subtitle: {
      en: 'A one-stop national educational and professional portal empowering students, parents, teachers, and job seekers with comprehensive mentorship, accredited college directories, government recruitment updates, and verified scholarship programs.',
      hi: 'छात्रों, अभिभावकों, शिक्षकों और नौकरी चाहने वालों को संपूर्ण मार्गदर्शन, मान्यता प्राप्त कॉलेज निर्देशिका, सरकारी भर्ती अपडेट और सत्यापित छात्रवृत्ति कार्यक्रमों के साथ सशक्त बनाने वाला एक वन-स्टॉप राष्ट्रीय पोर्टल।',
      ur: 'طلباء، والدین، اساتذہ اور ملازمت کے متلاشیوں کو جامع رہنمائی، تسلیم شدہ کالجز کی ڈائریکٹری، سرکاری بھرتی کی اپ ڈیٹس اور تصدیق شدہ اسکالرشپ پروگراموں کے ساتھ بااختیار بنانے والا ایک قومی تعلیمی پورٹل۔'
    },
    searchPlaceholder: {
      en: 'Search colleges, entrance exams, government jobs, scholarships, or mentorship...',
      hi: 'कॉलेज, प्रवेश परीक्षा, सरकारी नौकरी, छात्रवृत्ति या मेंटरशिप खोजें...',
      ur: 'کالجز، انٹری ٹیسٹ، سرکاری ملازمتیں، اسکالرشپس یا رہنمائی تلاش کریں...'
    },
    quickNav: {
      en: 'Explore 7 Core Pillars of Excellence',
      hi: 'उत्कृष्टता के 7 मुख्य स्तंभों का अन्वेषण करें',
      ur: 'اعلیٰ کارکردگی کے 7 بنیادی ستون تلاش کریں'
    },
    latestNotif: {
      en: 'Latest Notifications & Live Updates',
      hi: 'नवीनतम सूचनाएं और लाइव अपडेट',
      ur: 'تازہ ترین اطلاعات اور لائیو اپ ڈیٹس'
    },
    stats: {
      en: 'National Ecosystem Impact',
      hi: 'राष्ट्रीय इकोसिस्टम प्रभाव',
      ur: 'قومی ایکوسسٹم کے اثرات'
    }
  };

  const quickNavCards = [
    {
      id: 'education-hub',
      titleEn: 'Education & Mentorship Hub',
      titleHi: 'शिक्षा और मेंटरशिप हब',
      titleUr: 'تعلیم اور رہنمائی ہب',
      descEn: 'School to PG guidance, digital library, video learning, notes, and community mentorship.',
      descHi: 'स्कूली शिक्षा से पीजी तक मार्गदर्शन, डिजिटल लाइब्रेरी, वीडियो लर्निंग और मेंटरशिप।',
      descUr: 'اسکول سے پی جی تک رہنمائی، ڈیجیٹل لائبریری، ویڈیو لرننگ اور کمیونٹی مینٹورشپ۔',
      icon: BookOpen,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:border-emerald-500',
      badge: '15+ Levels'
    },
    {
      id: 'competitive-exams',
      titleEn: 'Competitive Exams Portal',
      titleHi: 'प्रतियोगी परीक्षा पोर्टल',
      titleUr: 'مسابقتی امتحانات پورٹل',
      descEn: 'UPSC, SSC, NEET, JEE, GATE, Banking, Railways syllabus, admit cards & mock tests.',
      descHi: 'यूपीएससी, एसएससी, नीट, जेईई, गेट, बैंकिंग, रेलवे सिलेबस और मॉक टेस्ट।',
      descUr: 'یو پی ایس سی، ایس ایس سی، نیٹ، جے ای ای، بینکنگ، ریلوے سلیبس اور ٹیسٹ۔',
      icon: FileText,
      color: 'bg-blue-50 border-blue-200 text-blue-800 hover:border-blue-500',
      badge: '20+ Categories'
    },
    {
      id: 'jobs-careers',
      titleEn: 'Jobs & Employment Portal',
      titleHi: 'नौकरियां एवं रोजगार पोर्टल',
      titleUr: 'ملازمتیں اور روزگار پورٹل',
      descEn: 'Govt jobs, PSUs, MNC internships, Gulf overseas recruitment, CV builder & roadmaps.',
      descHi: 'सरकारी नौकरियां, पीएसयू, इंटर्नशिप, विदेशी रोजगार, सीवी बिल्डर और रोडमैप।',
      descUr: 'سرکاری ملازمتیں، پی ایس یو، انٹرنشپ، بیرون ملک روزگار، سی وی بلڈر اور روڈ میپس۔',
      icon: Briefcase,
      color: 'bg-purple-50 border-purple-200 text-purple-800 hover:border-purple-500',
      badge: 'Live Openings'
    },
    {
      id: 'colleges-directory',
      titleEn: 'Master Colleges Directory',
      titleHi: 'मास्टर कॉलेज निर्देशिका',
      titleUr: 'ماسٹر کالجز ڈائریکٹری',
      descEn: '19 specialized streams: Medical, Engineering, Law, Pharmacy, Agriculture, Aviation & more.',
      descHi: '19 स्ट्रीम: मेडिकल, इंजीनियरिंग, कानून, फार्मेसी, कृषि, एविएशन और अन्य।',
      descUr: '19 شعبے: میڈیکل، انجینئرنگ، قانون، فارمیسی، زراعت، ایوی ایشن اور دیگر۔',
      icon: Building2,
      color: 'bg-amber-50 border-amber-200 text-amber-800 hover:border-amber-500',
      badge: '19 Streams'
    },
    {
      id: 'scholarships',
      titleEn: 'Scholarships & Grants Portal',
      titleHi: 'छात्रवृत्ति एवं अनुदान पोर्टल',
      titleUr: 'اسکالرشپس اور گرانٹس پورٹل',
      descEn: 'National NSP, state minority scholarships, girls merit awards, and education loan guidance.',
      descHi: 'राष्ट्रीय एनएसपी, राज्य अल्पसंख्यक छात्रवृत्ति, मेधावी पुरस्कार और शिक्षा ऋण सहायता।',
      descUr: 'قومی این ایس پی، ریاستی اقلیتی اسکالرشپ، میرٹ ایوارڈز اور تعلیمی قرض کی رہنمائی۔',
      icon: Award,
      color: 'bg-rose-50 border-rose-200 text-rose-800 hover:border-rose-500',
      badge: '100% Verified'
    },
    {
      id: 'career-counselling',
      titleEn: 'Career Counselling & AI Guide',
      titleHi: 'करियर काउंसलिंग एवं एआई गाइड',
      titleUr: 'کیریئر کونسلنگ اور اے آئی گائیڈ',
      descEn: 'Expert guidance, stream selection assessment, parents FAQ, soft skills, and interview prep.',
      descHi: 'विशेषज्ञ मार्गदर्शन, स्ट्रीम चयन, अभिभावक सहायता, सॉफ्ट स्किल्स और साक्षात्कार तैयारी।',
      descUr: 'ماہرانہ رہنمائی، شعبہ کا انتخاب، والدین کی رہنمائی، سوفٹ اسکلز اور انٹرویو کی تیاری۔',
      icon: Compass,
      color: 'bg-teal-50 border-teal-200 text-teal-800 hover:border-teal-500',
      badge: 'Expert Mentors'
    },
    {
      id: 'legal-awareness',
      titleEn: 'Legal Awareness & Rights',
      titleHi: 'कानूनी जागरूकता एवं अधिकार',
      titleUr: 'قانونی آگاہی اور حقوق',
      descEn: 'Fundamental constitution rights, RTI, student laws, workplace rights, and legal aid directory.',
      descHi: 'संविधान के मौलिक अधिकार, आरटीआई, छात्र कानून, कार्यस्थल अधिकार और कानूनी सहायता।',
      descUr: 'بنیادی آئینی حقوق، آر ٹی آئی، طلبہ کے قوانین، کام کی جگہ کے حقوق اور قانونی امداد۔',
      icon: ShieldCheck,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:border-indigo-500',
      badge: 'Know Your Rights'
    }
  ];

  const notifications = [
    { titleEn: 'UPSC Civil Services 2026 Preliminary Exam Notification Released', date: '02 Jul 2026', tag: 'Exam Alert', type: 'exam' },
    { titleEn: 'NSP Maulana Azad National Scholarship Online Applications Open for 2026-27', date: '01 Jul 2026', tag: 'Scholarship', type: 'scholarship' },
    { titleEn: 'AICTE Approved Engineering & Pharmacy Counseling Schedule Announced', date: '28 Jun 2026', tag: 'Admissions', type: 'college' },
    { titleEn: 'Railway Recruitment Board (RRB) NTPC & Level 1 45,000 Vacancies Live', date: '25 Jun 2026', tag: 'Govt Jobs', type: 'job' }
  ];

  const featuredOpportunities = [
    {
      title: 'Maulana Azad National Merit Scholarship 2026',
      category: 'Featured Scholarship',
      desc: '100% tuition fee support and monthly stipend for minority students pursuing higher education.',
      linkText: 'Check Eligibility',
      tab: 'scholarships'
    },
    {
      title: 'All India Medical & Engineering Entrance Guidance 2026',
      category: 'Featured Examination',
      desc: 'Complete NEET & JEE preparation resources, syllabus cut-offs, and free digital study material.',
      linkText: 'Explore Exams',
      tab: 'competitive-exams'
    },
    {
      title: 'Community Career Mentorship & Internship Program',
      category: 'Featured Career Guide',
      desc: '1-on-1 mentorship with established community doctors, IAS officers, lawyers, and tech leaders.',
      linkText: 'Connect with Mentor',
      tab: 'education-hub'
    },
    {
      title: 'Top 500 Accredited Government & Private Medical Colleges',
      category: 'Featured College Directory',
      desc: 'Verified NMC approved seats, fee structures, hostel facilities, and state counseling links.',
      linkText: 'Browse Directory',
      tab: 'colleges-directory'
    }
  ];

  const handleCardClick = (tabId: string) => {
    if (onNavigate) {
      onNavigate(tabId);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen font-sans animate-fadeIn">
      {/* 1. HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border-2 border-[#D4AF37]/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? 'NATIONAL MASTER ECOSYSTEM' : currentLanguage === 'ur' ? 'قومی ماسٹر ایکوسسٹم' : 'राष्ट्रीय मास्टर इकोसिस्टम'}</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              {labels.title[currentLanguage]}
            </h1>
            
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {labels.subtitle[currentLanguage]}
            </p>

            {/* SEARCH BAR */}
            <div className="mt-6 relative max-w-2xl flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.length > 1) setShowUniversalSearch(true);
                  }}
                  onFocus={() => setShowUniversalSearch(true)}
                  placeholder={labels.searchPlaceholder[currentLanguage]}
                  className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-800 rounded-2xl text-sm sm:text-base font-medium outline-none focus:ring-4 focus:ring-[#D4AF37]/50 shadow-inner transition placeholder:text-slate-400"
                />
              </div>
              <button
                onClick={() => setShowUniversalSearch(true)}
                className="px-5 py-3.5 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLanguage === 'en' ? 'Advanced Search' : 'विस्तृत खोज'}</span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#FFD54A] font-semibold">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Official Regulatory Data
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Guidance & Counselling
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Globe className="w-4 h-4 text-emerald-400" /> All India Coverage
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 1.2. UNIVERSAL EDUCATION SEARCH ENGINE SECTION */}
      {showUniversalSearch && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 animate-fadeIn">
          <UniversalEducationSearch 
            currentLanguage={currentLanguage} 
            onNavigate={onNavigate} 
            initialQuery={searchQuery} 
            onClose={() => setShowUniversalSearch(false)} 
          />
        </div>
      )}

      {/* 1.5. UNIFIED STUDENT DASHBOARD LAUNCHER & ADMIN ACCESS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border-2 border-[#D4AF37] rounded-3xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#004B23] text-[#FFD54A] flex items-center justify-center font-bold text-xl shadow">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Student Dashboard, Saved Bookmarks & Analytics Center' : 'छात्र डैशबोर्ड, बुकमार्क एवं विश्लेषण केंद्र'}
              </h3>
              <p className="text-xs text-slate-600">
                {currentLanguage === 'en' ? 'Access your saved colleges, track active exam applications, download offline prospectuses, or inspect national education telemetry.' : 'अपने सहेजे गए कॉलेज देखें, परीक्षा आवेदन ट्रैक करें और राष्ट्रीय शिक्षा आंकड़े देखें।'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowUnifiedDashboard(!showUnifiedDashboard)}
            className="px-6 py-3.5 bg-[#0B132B] hover:bg-[#004B23] text-[#FFD54A] font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Settings className="w-4 h-4" />
            <span>{showUnifiedDashboard ? (currentLanguage === 'en' ? 'Close Portal Dashboard' : 'डैशबोर्ड बंद करें') : (currentLanguage === 'en' ? 'Open Student & Admin Dashboard' : 'छात्र एवं एडमिन डैशबोर्ड खोलें')}</span>
          </button>
        </div>

        {showUnifiedDashboard && (
          <EducationStudentDashboard currentLanguage={currentLanguage} onClose={() => setShowUnifiedDashboard(false)} />
        )}
      </div>

      {/* 2. QUICK NAVIGATION CARDS (6 PILLARS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B] flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#004B23]" />
              <span>{labels.quickNav[currentLanguage]}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {currentLanguage === 'en' ? 'Click any card below to open its dedicated portal with complete resources, filters, and interactive tools.' : 'संपूर्ण संसाधनों और उपकरणों के लिए नीचे किसी भी कार्ड पर क्लिक करें।'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickNavCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`rounded-3xl p-6 border-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between group bg-white ${card.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3.5 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#004B23]" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#004B23] transition-colors">
                    {currentLanguage === 'en' ? card.titleEn : currentLanguage === 'ur' ? card.titleUr : card.titleHi}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {currentLanguage === 'en' ? card.descEn : currentLanguage === 'ur' ? card.descUr : card.descHi}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-bold text-xs text-[#004B23]">
                  <span>Explore Portal</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. QUICK STATISTICS BLOCK */}
      <div className="bg-[#0B132B] text-white py-12 mb-14 border-y-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD54A] mb-1">
              {currentLanguage === 'en' ? 'MEASURABLE COMMUNITY EXCELLENCE' : 'मापनीय सामुदायिक उत्कृष्टता'}
            </h3>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              {labels.stats[currentLanguage]}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">3,500+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Verified Colleges</div>
              <div className="text-[11px] text-slate-400 mt-1">Across 19 Disciplines</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">19,000+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Accredited Courses</div>
              <div className="text-[11px] text-slate-400 mt-1">UG, PG & Vocational</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">₹1.5 Cr+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Scholarships Tracked</div>
              <div className="text-[11px] text-slate-400 mt-1">NSP & Trust Grants</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">35,000+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Government Jobs</div>
              <div className="text-[11px] text-slate-400 mt-1">UPSC, SSC, Railways</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-purple-400">50,000+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Private & Gulf Jobs</div>
              <div className="text-[11px] text-slate-400 mt-1">Corporate & Middle East</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">120+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Entrance Exams</div>
              <div className="text-[11px] text-slate-400 mt-1">NEET, JEE, CUET, GATE</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">500+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Expert Mentors</div>
              <div className="text-[11px] text-slate-400 mt-1">IAS, Doctors & Engineers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FFD54A]/50 transition">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">1,25,000+</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-2">Students Guided</div>
              <div className="text-[11px] text-slate-400 mt-1">All India Community Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.5. EDUCATIONAL ROADMAPS & CAREER ROADMAPS INTERACTIVE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#004B23] text-xs font-bold uppercase mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Interactive Career Guidance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Educational Roadmaps & Career Pathways' : 'शैक्षणिक रोडमैप एवं करियर दिशा'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {currentLanguage === 'en' ? 'Select your current level or career interest to view verified step-by-step guidance, required entrance exams, and salary growth.' : 'सत्यापित मार्गदर्शन, आवश्यक प्रवेश परीक्षाएं और वेतन वृद्धि देखने के लिए अपने वर्तमान स्तर का चयन करें।'}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button onClick={() => setActiveRoadmap('school')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${activeRoadmap === 'school' ? 'bg-[#004B23] text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}>After 10th & 12th</button>
              <button onClick={() => setActiveRoadmap('college')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${activeRoadmap === 'college' ? 'bg-[#004B23] text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}>Graduation & PG</button>
              <button onClick={() => setActiveRoadmap('civil')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${activeRoadmap === 'civil' ? 'bg-[#004B23] text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}>UPSC & Civil Services</button>
              <button onClick={() => setActiveRoadmap('tech')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${activeRoadmap === 'tech' ? 'bg-[#004B23] text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}>Tech, AI & Medical</button>
            </div>
          </div>

          {activeRoadmap === 'school' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-[#004B23] bg-emerald-100 px-2.5 py-0.5 rounded">Stage 1</span><span className="text-xs font-bold text-slate-500">Age 15-16</span></div>
                <h4 className="font-bold text-slate-900 text-sm">Class 10th Board Exams & Stream Assessment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Appear for AISSE/State Boards. Take our scientific Interest Mapping Assessment to decide between PCM, PCB, Commerce, or Humanities.</p>
                <button onClick={() => handleCardClick('career-counselling')} className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">Launch Stream Assessment &rarr;</button>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded">Stage 2</span><span className="text-xs font-bold text-slate-500">Age 17-18</span></div>
                <h4 className="font-bold text-slate-900 text-sm">Class 12th & Competitive Entrance Preparation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Integrated preparation for NEET UG, JEE Main, CUET, or CLAT alongside CBSE/State board exams. Apply for NSP Post-Matric scholarships.</p>
                <button onClick={() => handleCardClick('competitive-exams')} className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer">Explore Exam Syllabus & Dates &rarr;</button>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded">Stage 3</span><span className="text-xs font-bold text-slate-500">Age 18+</span></div>
                <h4 className="font-bold text-slate-900 text-sm">College Counselling & Admission Entry</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Participate in JoSAA, MCC, or State counseling. Filter NIRF ranked govt and minority institutions in our Colleges Directory with fee waivers.</p>
                <button onClick={() => handleCardClick('colleges-directory')} className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1 cursor-pointer">Open Colleges Directory &rarr;</button>
              </div>
            </div>
          )}

          {activeRoadmap === 'college' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-[#004B23] bg-emerald-100 px-2.5 py-0.5 rounded">Year 1-2</span><span className="text-xs font-bold text-slate-500">Foundation</span></div>
                <h4 className="font-bold text-slate-900 text-sm">UG Degree & Core Competency Building</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Maintain 7.5+ CGPA. Engage in digital library reading, technical workshops, and soft skills module certifications.</p>
                <button onClick={() => handleCardClick('education-hub')} className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">Access Digital Library & Notes &rarr;</button>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded">Year 3-4</span><span className="text-xs font-bold text-slate-500">Placement Preparation</span></div>
                <h4 className="font-bold text-slate-900 text-sm">Internships, GATE / CAT Prep & Campus Placements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Build ATS-friendly resume using our CV Builder. Complete industrial internships and practice Group Discussions & Mock Interviews.</p>
                <button onClick={() => handleCardClick('jobs-careers')} className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer">Open CV Builder & Jobs &rarr;</button>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded">Post-Grad</span><span className="text-xs font-bold text-slate-500">Advanced Career</span></div>
                <h4 className="font-bold text-slate-900 text-sm">Master's Degree, Research Fellowships & PSU Jobs</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Secure Maulana Azad National Fellowship (MANF) or CSIR NET for PhD, or join Maharatna PSUs (BHEL, ONGC, NTPC) through GATE score.</p>
                <button onClick={() => handleCardClick('scholarships')} className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer">View Research Fellowships &rarr;</button>
              </div>
            </div>
          )}

          {activeRoadmap === 'civil' && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] to-[#142244] text-white flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-[#FFD54A] text-[#0B132B] font-extrabold text-[10px] uppercase">UPSC IAS / IPS Roadmap</span>
                <h4 className="text-lg font-serif font-black text-white">4-Stage Civil Services Preparation Ecosystem</h4>
                <p className="text-xs text-slate-300 max-w-2xl">From NCERT foundation reading (Class 6-12) to Prelims mock series, Mains answer writing evaluation, and Personality Test (Interview) guidance by retired IAS/IPS officers in our Community Mentorship network.</p>
              </div>
              <button onClick={() => handleCardClick('education-hub')} className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-bold text-xs rounded-xl shadow transition shrink-0 cursor-pointer">Connect with IAS/IPS Mentors &rarr;</button>
            </div>
          )}

          {activeRoadmap === 'tech' && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-emerald-400 text-slate-900 font-extrabold text-[10px] uppercase">Corporate Tech & Medical Careers</span>
                <h4 className="text-lg font-serif font-black text-white">High-Growth Technical & Healthcare Pathways</h4>
                <p className="text-xs text-slate-300 max-w-2xl">Discover structured pathways to become a Full-Stack AI Engineer, Data Scientist, NMC Registered Surgeon, or Commercial Pilot with DGCA approved aviation institutes.</p>
              </div>
              <button onClick={() => handleCardClick('jobs-careers')} className="px-6 py-3 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-bold text-xs rounded-xl shadow transition shrink-0 cursor-pointer">Explore Tech & Medical Openings &rarr;</button>
            </div>
          )}
        </div>
      </div>

      {/* 3.8. COMMUNITY SUCCESS STORIES CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-serif font-black text-[#0B132B] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Community Success Stories & Role Models' : 'सामुदायिक सफलता की कहानियां'}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">Inspiring achievements of Rangrez community youths breaking barriers in Civil Services, IITs, AIIMS, and Corporate leadership.</p>
            </div>
            <button onClick={() => handleCardClick('education-hub')} className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">View All 150+ Success Stories &rarr;</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#004B23] text-white font-bold flex items-center justify-center text-sm shadow">SR</div>
                  <div><h4 className="font-bold text-sm text-slate-900">Suhail Rangrez</h4><p className="text-[10px] text-emerald-700 font-bold">UPSC CSE 2025 (AIR 84) • IAS Officer</p></div>
                </div>
                <p className="text-xs text-slate-600 italic">"The mentorship from senior government officers on this portal gave me exact strategy for Mains ethics paper and personality interview."</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase">Bhopal, Madhya Pradesh</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center text-sm shadow">FR</div>
                  <div><h4 className="font-bold text-sm text-slate-900">Dr. Fatima Rangrez</h4><p className="text-[10px] text-blue-700 font-bold">MBBS AIIMS Delhi • Gold Medalist</p></div>
                </div>
                <p className="text-xs text-slate-600 italic">"Securing an AICTE Pragati scholarship and utilizing the Medical Colleges directory helped my parents choose the safest NMC approved hostel."</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase">Indore, Madhya Pradesh</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-sm shadow">AR</div>
                  <div><h4 className="font-bold text-sm text-slate-900">Aadils K. Rangrez</h4><p className="text-[10px] text-purple-700 font-bold">Senior AI Engineer • Google Dubai</p></div>
                </div>
                <p className="text-xs text-slate-600 italic">"The international Gulf job alerts and resume builder on the Jobs portal connected me directly with tech recruiters in UAE."</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase">Mumbai, Maharashtra</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FEATURED OPPORTUNITIES & LATEST NOTIFICATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Highlights (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-black text-[#0B132B] flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>{currentLanguage === 'en' ? 'Featured Opportunities & Roadmaps' : 'प्रमुख अवसर एवं रोडमैप'}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredOpportunities.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#004B23] transition flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#004B23]/10 text-[#004B23] px-2.5 py-1 rounded-full inline-block mb-3">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => handleCardClick(item.tab)}
                    className="mt-5 text-xs font-bold text-[#004B23] hover:text-[#00381a] flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{item.linkText}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Notifications Feed (1 col) */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
                <Bell className="w-5 h-5 text-rose-600 animate-pulse" />
                <h3 className="text-base font-bold text-[#0B132B]">
                  {labels.latestNotif[currentLanguage]}
                </h3>
              </div>

              <div className="space-y-4">
                {notifications.map((notif, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
                      <span className="text-rose-600 uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-100">{notif.tag}</span>
                      <span>{notif.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 leading-snug mt-1">{notif.titleEn}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => handleCardClick('competitive-exams')}
                className="w-full bg-[#0B132B] hover:bg-[#004B23] text-white text-xs font-bold py-3 rounded-xl transition shadow cursor-pointer"
              >
                View All Examination & Job Alerts &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
