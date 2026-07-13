import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Building2, MapPin, Globe, Phone, Mail, ExternalLink, 
  BookOpen, Award, CheckCircle2, HelpCircle, Briefcase, ShieldCheck, 
  PlusCircle, ChevronRight, GraduationCap, Users, Calendar, DollarSign, 
  FileText, Sparkles, Compass, Layers, Settings, Star, Heart, Share2,
  X, AlertCircle, Bookmark, Check
} from 'lucide-react';
import { 
  ProfessionalCollege, STREAM_CATEGORIES, PROFESSIONAL_COLLEGES_LIST, 
  CAREER_GUIDANCE_FAQ, StreamCategoryInfo 
} from '../data/professionalCollegesData';

interface ProfessionalCollegesDirectoryProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

const ProfessionalCollegesDirectory: React.FC<ProfessionalCollegesDirectoryProps> = ({ currentLanguage }) => {
  // Navigation tabs within the directory
  const [activeSubTab, setActiveSubTab] = useState<'streams' | 'directory' | 'guidance' | 'resources' | 'expansion'>('streams');
  
  // Filtering & Search state
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedOwnership, setSelectedOwnership] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modal for College Details
  const [selectedCollege, setSelectedCollege] = useState<ProfessionalCollege | null>(null);
  
  // Admin Expansion Demo state
  const [newStreamName, setNewStreamName] = useState<string>('');
  const [newStreamIcon, setNewStreamIcon] = useState<string>('🎓');
  const [customStreams, setCustomStreams] = useState<{ id: string; title: string; icon: string }[]>([
    { id: 'veterinary', title: 'Veterinary Science (BVSc & AH)', icon: '🐾' },
    { id: 'dental', title: 'Dental Sciences (BDS / MDS)', icon: '🦷' },
    { id: 'ayurveda', title: 'Ayurvedic Medicine (BAMS)', icon: '🌿' },
    { id: 'education', title: 'Teacher Education (B.Ed / M.Ed)', icon: '📚' }
  ]);
  const [showAdminNotice, setShowAdminNotice] = useState<boolean>(false);

  // Filtered colleges calculation
  const filteredColleges = useMemo(() => {
    return PROFESSIONAL_COLLEGES_LIST.filter(college => {
      const matchesStream = selectedStream === 'all' || college.stream === selectedStream;
      const matchesState = selectedState === 'all' || college.state.toLowerCase() === selectedState.toLowerCase();
      const matchesOwnership = selectedOwnership === 'all' || college.ownership.toLowerCase() === selectedOwnership.toLowerCase();
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        college.name.toLowerCase().includes(q) || 
        college.city.toLowerCase().includes(q) || 
        college.state.toLowerCase().includes(q) || 
        college.affiliatedUniversity.toLowerCase().includes(q) ||
        college.coursesOffered.some(c => c.toLowerCase().includes(q)) ||
        (college.branchesOffered && college.branchesOffered.some(b => b.toLowerCase().includes(q)));

      return matchesStream && matchesState && matchesOwnership && matchesSearch;
    });
  }, [selectedStream, selectedState, selectedOwnership, searchQuery]);

  // Unique states for filter dropdown
  const availableStates = useMemo(() => {
    const states = new Set<string>();
    PROFESSIONAL_COLLEGES_LIST.forEach(c => states.add(c.state));
    return ['all', ...Array.from(states)];
  }, []);

  // Quick select stream handler
  const handleSelectStreamFromCard = (streamId: string) => {
    setSelectedStream(streamId);
    setActiveSubTab('directory');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleAddCustomStream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStreamName.trim()) return;
    setCustomStreams([...customStreams, { id: Date.now().toString(), title: newStreamName, icon: newStreamIcon }]);
    setNewStreamName('');
    setShowAdminNotice(true);
    setTimeout(() => setShowAdminNotice(false), 4000);
  };

  // Helper labels based on language
  const labels = {
    title: {
      en: 'National Professional Colleges Directory Portal',
      hi: 'राष्ट्रीय व्यावसायिक कॉलेज निर्देशिका पोर्टल',
      ur: 'قومی پروفیشنل کالجز ڈائریکٹری پورٹل'
    },
    subtitle: {
      en: 'Explore thousands of recognized colleges across India with official information, eligibility, admission guidance, counselling links, scholarships, career opportunities, and official college websites.',
      hi: 'भारत भर के मान्यता प्राप्त कॉलेजों का अन्वेषण करें - आधिकारिक जानकारी, पात्रता, प्रवेश मार्गदर्शन, काउंसलिंग लिंक, छात्रवृत्ति और करियर के अवसर।',
      ur: 'ہندوستان بھر کے تسلیم شدہ کالجز تلاش کریں - سرکاری معلومات، اہلیت، داخلہ رہنمائی، کونسلنگ لنکس، اسکالرشپس اور کیریئر کے مواقع۔'
    },
    streamsTab: { en: '🏗️ Stream Categories & Councils', hi: '🏗️ स्ट्रीम श्रेणियां और परिषद', ur: '🏗️ شعبہ جات اور کونسلز' },
    directoryTab: { en: '🏛️ Colleges Directory & Filter', hi: '🏛️ कॉलेज निर्देशिका और खोज', ur: '🏛️ کالجز ڈائریکٹری اور تلاش' },
    guidanceTab: { en: '🧭 Career Guidance & FAQs', hi: '🧭 करियर मार्गदर्शन एवं FAQ', ur: '🧭 کیریئر رہنمائی اور سوالات' },
    resourcesTab: { en: '📋 Entrance Exams & Scholarships', hi: '📋 प्रवेश परीक्षाएं एवं छात्रवृत्ति', ur: '📋 امتحانات اور اسکالرشپس' },
    expansionTab: { en: '⚙️ Future Expansion / Admin', hi: '⚙️ भविष्य विस्तार / एडमिन', ur: '⚙️ مستقبل کی توسیع / ایڈمن' },
    searchPlaceholder: { en: 'Search by College Name, City, State, Course (e.g. B.Tech, LLB, Nursing)...', hi: 'कॉलेज का नाम, शहर, राज्य या कोर्स खोजें...', ur: 'کالج کا نام، شہر، ریاست یا کورس تلاش کریں...' },
    filterStream: { en: 'Stream / Discipline', hi: 'स्ट्रीम / विषय', ur: 'شعبہ / مضمون' },
    filterState: { en: 'State / Territory', hi: 'राज्य / क्षेत्र', ur: 'ریاست / علاقہ' },
    filterOwnership: { en: 'Institution Type', hi: 'संस्थान का प्रकार', ur: 'ادارے کی قسم' },
    allStreams: { en: 'All Streams (Engineering, Pharmacy, Law, Nursing...)', hi: 'सभी स्ट्रीम', ur: 'تمام شعبے' },
    allStates: { en: 'All India (All States & UTs)', hi: 'संपूर्ण भारत (सभी राज्य)', ur: 'پورا ہندوستان (تمام ریاستیں)' },
    allOwnership: { en: 'All Types (Govt, Private, Deemed...)', hi: 'सभी प्रकार (सरकारी, निजी, डीम्ड)', ur: 'تمام اقسام (سرکاری، نجی...)' },
    viewDetails: { en: 'View Complete Profile & Admissions', hi: 'संपूर्ण प्रोफ़ाइल एवं प्रवेश देखें', ur: 'مکمل پروفائل اور داخلہ دیکھیں' },
    counsellingLink: { en: 'Official Counselling Portal', hi: 'आधिकारिक काउंसलिंग पोर्टल', ur: 'سرکاری کونسلنگ پورٹل' },
    verifyOfficial: { en: 'Verified Official Registry', hi: 'सत्यापित आधिकारिक रिकॉर्ड', ur: 'تصدیق شدہ سرکاری ریکارڈ' }
  };

  const getStreamTitle = (cat: StreamCategoryInfo) => {
    if (currentLanguage === 'hi') return cat.titleHi;
    if (currentLanguage === 'ur') return cat.titleUr;
    return cat.titleEn;
  };

  const getStreamDesc = (cat: StreamCategoryInfo) => {
    if (currentLanguage === 'hi') return cat.descriptionHi;
    if (currentLanguage === 'ur') return cat.descriptionUr;
    return cat.descriptionEn;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16 font-sans">
      {/* 1. HERO BANNER SECTION */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[#D4AF37] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#004B23]/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'en' ? 'NATIONAL MEGA DIRECTORY • ONE-STOP EDUCATION PORTAL' : currentLanguage === 'ur' ? 'قومی میگا ڈائریکٹری • یکجہتی تعلیمی پورٹل' : 'राष्ट्रीय मेगा निर्देशिका • वन-स्टॉप शिक्षा पोर्टल'}</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
                {labels.title[currentLanguage]}
              </h1>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-light">
                {labels.subtitle[currentLanguage]}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#FFD54A] font-semibold">
                <span className="flex items-center gap-1.5 bg-[#004B23]/80 px-3 py-1.5 rounded-lg border border-[#FFD54A]/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> AICTE Approved
                </span>
                <span className="flex items-center gap-1.5 bg-[#004B23]/80 px-3 py-1.5 rounded-lg border border-[#FFD54A]/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> PCI Pharmacy Council
                </span>
                <span className="flex items-center gap-1.5 bg-[#004B23]/80 px-3 py-1.5 rounded-lg border border-[#FFD54A]/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> BCI Bar Council
                </span>
                <span className="flex items-center gap-1.5 bg-[#004B23]/80 px-3 py-1.5 rounded-lg border border-[#FFD54A]/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> INC Indian Nursing Council
                </span>
                <span className="flex items-center gap-1.5 bg-[#004B23]/80 px-3 py-1.5 rounded-lg border border-[#FFD54A]/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> JoSAA & State DTEs
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg text-center shrink-0 w-full md:w-auto">
              <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">100%</div>
              <div className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">Official & Verified Data</div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-around gap-4 text-xs">
                <div>
                  <div className="font-bold text-white text-base">8+</div>
                  <div className="text-slate-400">Streams</div>
                </div>
                <div>
                  <div className="font-bold text-white text-base">All India</div>
                  <div className="text-slate-400">Coverage</div>
                </div>
                <div>
                  <div className="font-bold text-white text-base">Govt & Pvt</div>
                  <div className="text-slate-400">Institutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUB-NAVIGATION PILLS */}
      <div className="sticky top-0 z-30 bg-[#0B132B] text-white border-b border-[#D4AF37] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 sm:space-x-2 py-2.5 min-w-max">
            <button
              onClick={() => setActiveSubTab('streams')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'streams'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
              }`}
            >
              <span>{labels.streamsTab[currentLanguage]}</span>
            </button>

            <button
              onClick={() => setActiveSubTab('directory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'directory'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
              }`}
            >
              <span>{labels.directoryTab[currentLanguage]}</span>
              <span className="bg-[#D4AF37] text-[#0B132B] px-1.5 py-0.5 rounded-full text-[10px] font-black">{filteredColleges.length}</span>
            </button>

            <button
              onClick={() => setActiveSubTab('guidance')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'guidance'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
              }`}
            >
              <span>{labels.guidanceTab[currentLanguage]}</span>
            </button>

            <button
              onClick={() => setActiveSubTab('resources')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'resources'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
              }`}
            >
              <span>{labels.resourcesTab[currentLanguage]}</span>
            </button>

            <button
              onClick={() => setActiveSubTab('expansion')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'expansion'
                  ? 'bg-amber-600 text-white border-2 border-[#FFD54A] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-amber-400 border border-transparent'
              }`}
            >
              <span>{labels.expansionTab[currentLanguage]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT MODULES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* ========================================================= */}
        {/* TAB 1: STREAM CATEGORIES & REGULATORY AUTHORITIES HUB    */}
        {/* ========================================================= */}
        {activeSubTab === 'streams' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Intro Header */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Explore By Professional Stream' : currentLanguage === 'ur' ? 'پروفیشنل شعبہ جات کے لحاظ سے تلاش کریں' : 'व्यावसायिक स्ट्रीम के अनुसार अन्वेषण करें'}
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                {currentLanguage === 'en' ? 'Select any educational stream below to access official regulatory authorities, entrance exams, and view recognized colleges across India.' : currentLanguage === 'ur' ? 'سرکاری ریگولیٹری اداروں، امتحانات اور تسلیم شدہ کالجز کی معلومات کے لیے نیچے کسی بھی شعبے کا انتخاب کریں۔' : 'आधिकारिक नियामक संस्थाओं, प्रवेश परीक्षाओं और मान्यता प्राप्त कॉलेजों की जानकारी के लिए नीचे किसी भी स्ट्रीम का चयन करें।'}
              </p>
            </div>

            {/* Stream Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STREAM_CATEGORIES.map((cat) => (
                <div 
                  key={cat.id} 
                  className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-[#004B23] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#004B23]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl p-2.5 bg-slate-100 rounded-2xl group-hover:bg-[#004B23]/10 transition-colors">
                        {cat.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#004B23] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        {cat.courses.length} Courses
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#004B23] transition-colors line-clamp-1">
                      {getStreamTitle(cat)}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                      {getStreamDesc(cat)}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Official Regulatory Body:</div>
                      <div className="text-xs font-bold text-[#0B132B] mt-0.5 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#004B23] shrink-0" />
                        <span className="line-clamp-1">{cat.regulatoryBody}</span>
                      </div>
                    </div>

                    {/* Courses pills */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cat.courses.slice(0, 3).map((c, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {c}
                        </span>
                      ))}
                      {cat.courses.length > 3 && (
                        <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-bold">
                          +{cat.courses.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSelectStreamFromCard(cat.id)}
                      className="flex-1 bg-[#0B132B] hover:bg-[#004B23] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow group-hover:shadow-md cursor-pointer"
                    >
                      <span>Browse Colleges</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <a
                      href={cat.regulatoryWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Official Regulatory Website"
                      className="p-2.5 bg-slate-100 hover:bg-[#D4AF37] hover:text-[#0B132B] text-slate-700 rounded-xl transition flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted Official Regulatory Authorities Box */}
            <div className="bg-gradient-to-br from-[#142244] to-[#0B132B] rounded-3xl p-6 sm:p-8 text-white border-2 border-[#D4AF37]/50 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider mb-2">
                    <span>🏛️</span>
                    <span>{currentLanguage === 'en' ? 'OFFICIAL REGULATORY AUTHORITIES & COUNSELLING PORTALS' : currentLanguage === 'ur' ? 'سرکاری ریگولیٹری ادارے اور کونسلنگ پورٹلز' : 'आधिकारिक नियामक प्राधिकरण और काउंसलिंग पोर्टल'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'National & State Level Admission Portals' : currentLanguage === 'ur' ? 'قومی اور ریاستی سطح کے داخلہ پورٹلز' : 'राष्ट्रीय और राज्य स्तर के प्रवेश पोर्टल'}
                  </h3>
                </div>
                <div className="text-xs text-slate-300 max-w-sm">
                  {currentLanguage === 'en' ? 'Always verify college approval, seat matrix, and admission counselling schedule only on official government portals below.' : currentLanguage === 'ur' ? 'کالج کی منظوری، سیٹوں کی تعداد اور کونسلنگ شیڈول ہمیشہ صرف نیچے دیے گئے سرکاری پورٹلز پر چیک کریں۔' : 'कॉलेज की मान्यता, सीट संख्या और काउंसलिंग अनुसूची हमेशा नीचे दिए गए आधिकारिक सरकारी पोर्टलों पर ही जांचें।'}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">AICTE India</div>
                    <div className="text-[11px] text-slate-300">Technical & Engg Approval</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">JoSAA / CSAB</div>
                    <div className="text-[11px] text-slate-300">IITs, NITs, IIITs Counselling</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://www.pci.nic.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">PCI Pharmacy</div>
                    <div className="text-[11px] text-slate-300">Pharmacy Council of India</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="http://www.barcouncilofindia.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">BCI Law Council</div>
                    <div className="text-[11px] text-slate-300">Bar Council of India</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://consortiumofnlus.ac.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">CLAT Consortium</div>
                    <div className="text-[11px] text-slate-300">National Law Universities</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://indiannursingcouncil.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">INC Nursing</div>
                    <div className="text-[11px] text-slate-300">Indian Nursing Council</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://dte.mponline.gov.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">DTE MP Online</div>
                    <div className="text-[11px] text-slate-300">Madhya Pradesh Admissions</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a href="https://uptac.admissions.nic.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/15 transition flex items-center justify-between group">
                  <div>
                    <div className="text-sm font-bold text-[#FFD54A]">UPTAC Uttar Pradesh</div>
                    <div className="text-[11px] text-slate-300">UP Technical Counselling</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* State-wise Quick Jump Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-[#004B23]" />
                <h3 className="text-xl font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'State-Wise Navigation Highlights' : currentLanguage === 'ur' ? 'ریاستی سطح کی نیویگیشن جھلکیاں' : 'राज्य-वार नेविगेशन हाइलाइट्स'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {currentLanguage === 'en' ? 'Browse accredited professional institutions directly across major Indian states and territories:' : currentLanguage === 'ur' ? 'ہندوستان کی اہم ریاستوں اور علاقوں کے تسلیم شدہ پروفیشنل اداروں کو براہ راست تلاش کریں:' : 'भारत के प्रमुख राज्यों और क्षेत्रों में मान्यता प्राप्त व्यावसायिक संस्थानों को सीधे खोजें:'}
              </p>

              <div className="flex flex-wrap gap-3">
                {['Madhya Pradesh', 'Rajasthan', 'Gujarat', 'Uttar Pradesh', 'Delhi', 'Karnataka', 'Maharashtra', 'Bihar', 'West Bengal', 'Tamil Nadu', 'Telangana'].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setSelectedState(st.toLowerCase());
                      setSelectedStream('all');
                      setActiveSubTab('directory');
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-[#004B23] hover:text-[#FFD54A] text-slate-800 text-xs sm:text-sm font-bold rounded-xl border border-slate-300 hover:border-[#FFD54A] transition flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>📍</span>
                    <span>{st}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: COLLEGES DIRECTORY & ADVANCED MULTI-CRITERIA FILTER */}
        {/* ========================================================= */}
        {activeSubTab === 'directory' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Advanced Search Bar & Filters Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0B132B] shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-2">
                    <Filter className="w-6 h-6 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Advanced Multi-Criteria College Search' : currentLanguage === 'ur' ? 'اعلیٰ کثیر المعیار کالج تلاش' : 'उन्नत बहु-मानदंड कॉलेज खोज'}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Filter by professional stream, state, institution ownership, or search by name and courses.' : currentLanguage === 'ur' ? 'شعبہ، ریاست، ادارے کی قسم کے لحاظ سے فلٹر کریں یا نام اور کورس کے ذریعے تلاش کریں۔' : 'व्यावसायिक स्ट्रीम, राज्य, संस्थान के प्रकार या नाम और कोर्स के अनुसार फ़िल्टर करें।'}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700">
                  <span>Showing:</span>
                  <span className="text-[#004B23] text-sm">{filteredColleges.length}</span>
                  <span>Colleges</span>
                  {(selectedStream !== 'all' || selectedState !== 'all' || selectedOwnership !== 'all' || searchQuery) && (
                    <button 
                      onClick={() => {
                        setSelectedStream('all');
                        setSelectedState('all');
                        setSelectedOwnership('all');
                        setSearchQuery('');
                      }}
                      className="ml-2 text-rose-600 hover:text-rose-800 underline font-semibold text-[11px]"
                    >
                      Reset All
                    </button>
                  )}
                </div>
              </div>

              {/* Main Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={labels.searchPlaceholder[currentLanguage]}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-300 focus:border-[#004B23] rounded-2xl text-sm sm:text-base text-slate-800 font-medium outline-none transition shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter Dropdowns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Stream Filter */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    {labels.filterStream[currentLanguage]}
                  </label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="all">{labels.allStreams[currentLanguage]}</option>
                    <option value="engineering">🏗️ Engineering Colleges (B.Tech / M.Tech / Poly)</option>
                    <option value="pharmacy">💊 Pharmacy Colleges (B.Pharm / Pharm.D / M.Pharm)</option>
                    <option value="law">⚖️ Law Colleges (BA LLB / 3-Yr LLB / LLM)</option>
                    <option value="nursing">👩‍⚕️ Nursing Colleges (B.Sc Nursing / GNM / M.Sc)</option>
                    <option value="agriculture">🌱 Agriculture & Veterinary Colleges</option>
                    <option value="architecture">🏛️ Architecture & Planning (B.Arch)</option>
                    <option value="management">💼 Management & B-Schools (MBA / PGDM)</option>
                    <option value="polytechnic">⚙️ Polytechnic Diploma & ITI Trades</option>
                  </select>
                </div>

                {/* State Filter */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    {labels.filterState[currentLanguage]}
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="all">{labels.allStates[currentLanguage]}</option>
                    {availableStates.filter(s => s !== 'all').map((st) => (
                      <option key={st} value={st.toLowerCase()}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Ownership Filter */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    {labels.filterOwnership[currentLanguage]}
                  </label>
                  <select
                    value={selectedOwnership}
                    onChange={(e) => setSelectedOwnership(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="all">{labels.allOwnership[currentLanguage]}</option>
                    <option value="government">🏛️ Government / Central Universities</option>
                    <option value="private">🏢 Private Recognized Institutes</option>
                    <option value="deemed university">🎓 Deemed to be Universities</option>
                    <option value="minority">🌟 Minority Institutions (Govt Aided / Private)</option>
                    <option value="autonomous">⚙️ Autonomous Institutes of National Importance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* College Cards Grid */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-slate-800">
                  {currentLanguage === 'en' ? 'No Colleges Found Matching Your Filters' : currentLanguage === 'ur' ? 'آپ کے فلٹرز کے مطابق کوئی کالج نہیں ملا' : 'आपके फ़िल्टर से मेल खाता कोई कॉलेज नहीं मिला'}
                </h4>
                <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
                  {currentLanguage === 'en' ? 'Try resetting your search query or switching the state and stream filters to view all recognized institutes.' : currentLanguage === 'ur' ? 'تلاش کا الفاظ تبدیل کریں یا تمام تسلیم شدہ ادارے دیکھنے کے لیے فلٹرز ری سیٹ کریں۔' : 'अपनी खोज शब्दावली बदलें या सभी संस्थानों को देखने के लिए फ़िल्टर रीसेट करें।'}
                </p>
                <button
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedState('all');
                    setSelectedOwnership('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#004B23] text-white font-bold rounded-xl shadow hover:bg-[#00381a] transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredColleges.map((college) => (
                  <div
                    key={college.id}
                    className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#004B23] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Ribbon for Featured / Govt */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                        college.ownership === 'Government'
                          ? 'bg-emerald-50 text-[#004B23] border-emerald-200'
                          : college.ownership === 'Deemed University'
                          ? 'bg-purple-50 text-purple-800 border-purple-200'
                          : 'bg-blue-50 text-blue-800 border-blue-200'
                      }`}>
                        {college.ownership}
                      </span>

                      <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-lg">
                        <MapPin className="w-3 h-3 text-rose-600" />
                        {college.city}, {college.state}
                      </span>
                    </div>

                    {/* College Title & Affiliation */}
                    <div>
                      <h4 className="text-lg font-bold text-[#0B132B] group-hover:text-[#004B23] transition-colors line-clamp-2 leading-snug">
                        {college.name}
                      </h4>

                      <div className="text-xs text-slate-500 font-medium mt-1.5 flex items-start gap-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">Affiliated: {college.affiliatedUniversity}</span>
                      </div>

                      <div className="mt-3 bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Approval:</span>
                          <span className="font-bold text-[#004B23] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {college.approvalBody}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Annual Intake:</span>
                          <span className="font-bold text-slate-800">{college.annualIntake} Seats</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Entrance Exam:</span>
                          <span className="font-bold text-amber-700 line-clamp-1 max-w-[160px] text-right">{college.entranceExam}</span>
                        </div>
                      </div>

                      {/* Courses Pills */}
                      <div className="mt-3">
                        <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Courses Offered:</div>
                        <div className="flex flex-wrap gap-1">
                          {college.coursesOffered.map((course, idx) => (
                            <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold border border-slate-200">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Accreditation Badge */}
                      <div className="mt-3 text-xs font-semibold text-slate-700 bg-amber-50/70 p-2 rounded-lg border border-amber-200/60 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="line-clamp-1">{college.accreditation}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                      <button
                        onClick={() => setSelectedCollege(college)}
                        className="w-full bg-[#0B132B] hover:bg-[#004B23] text-white text-xs font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow group-hover:shadow-md cursor-pointer"
                      >
                        <span>{labels.viewDetails[currentLanguage]}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={college.counsellingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-[#004B23] text-[11px] font-extrabold py-2 px-3 rounded-xl border border-emerald-200 transition flex items-center justify-center gap-1 text-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{labels.counsellingLink[currentLanguage]}</span>
                        </a>

                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Visit Official College Website"
                          className="p-2 bg-slate-100 hover:bg-[#D4AF37] hover:text-[#0B132B] text-slate-700 rounded-xl transition"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: CAREER GUIDANCE & FAQ HUB                         */}
        {/* ========================================================= */}
        {activeSubTab === 'guidance' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Professional Career Guidance & Prospects' : currentLanguage === 'ur' ? 'پروفیشنل کیریئر رہنمائی اور مستقبل کے مواقع' : 'व्यावसायिक करियर मार्गदर्शन और संभावनाएं'}
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                {currentLanguage === 'en' ? 'Understand career roadmaps, government job recruitment pathways (UPSC, PSUs, NORCET, Bank AFO), salary structures, and professional licensing rules.' : currentLanguage === 'ur' ? 'سرکاری نوکریوں کے راستے (UPSC, PSUs)، تنخواہ کے اسٹرکچر اور پروفیشنل لائسنس کے اصول سمجھیں۔' : 'सरकारी नौकरी के रास्ते (UPSC, PSUs, NORCET), वेतन संरचना और व्यावसायिक लाइसेंसिंग नियमों को समझें।'}
              </p>
            </div>

            {/* Stream Career Summaries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STREAM_CATEGORIES.slice(0, 4).map((cat) => (
                <div key={cat.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-3xl p-2 bg-slate-100 rounded-2xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B132B]">{getStreamTitle(cat)}</h3>
                      <div className="text-xs text-[#004B23] font-bold">{cat.regulatoryBody}</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-1">🎯 Eligibility & Entrance Criteria:</span>
                      <p className="text-slate-600 leading-relaxed font-normal">{cat.eligibilitySummary}</p>
                    </div>

                    <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200/80">
                      <span className="font-bold text-[#004B23] block mb-1">💰 Average Salary Range:</span>
                      <p className="text-slate-800 font-extrabold text-sm">{cat.avgSalaryRange}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 text-xs block mb-2">🚀 Top Career & Government Job Opportunities:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.careerOpportunities.map((op, i) => (
                          <span key={i} className="bg-[#0B132B] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                            {op}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comprehensive FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Frequently Asked Questions (Professional Education)' : currentLanguage === 'ur' ? 'اکثر پوچھے جانے والے سوالات' : 'अक्सर पूछे जाने वाले प्रश्न'}</span>
              </h3>

              <div className="space-y-6">
                {Object.entries(CAREER_GUIDANCE_FAQ).map(([streamKey, faqList]) => (
                  <div key={streamKey} className="border-t border-slate-100 pt-6 first:border-0 first:pt-0">
                    <h4 className="text-sm font-extrabold text-[#004B23] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span>{streamKey === 'engineering' ? '🏗️ Engineering & Technology' : streamKey === 'pharmacy' ? '💊 Pharmacy & Drugs' : streamKey === 'law' ? '⚖️ Law & Judicial Services' : '👩‍⚕️ Nursing & Medical Care'}</span>
                    </h4>

                    <div className="space-y-4">
                      {faqList.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
                          <h5 className="text-sm sm:text-base font-bold text-[#0B132B] flex items-start gap-2">
                            <span className="text-[#D4AF37] font-black shrink-0">Q.</span>
                            <span>{currentLanguage === 'hi' ? faq.qHi : currentLanguage === 'ur' ? faq.qUr : faq.qEn}</span>
                          </h5>
                          <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-6 border-l-2 border-[#004B23]">
                            {currentLanguage === 'hi' ? faq.aHi : currentLanguage === 'ur' ? faq.aUr : faq.aEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: STUDENT RESOURCES, CALENDARS & SCHOLARSHIPS       */}
        {/* ========================================================= */}
        {activeSubTab === 'resources' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Student Admission Resources & Calendars' : currentLanguage === 'ur' ? 'طلباء کے لیے داخلہ وسائل اور شیڈول' : 'छात्र प्रवेश संसाधन और परीक्षा अनुसूची'}
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                {currentLanguage === 'en' ? 'Access official entrance examination calendars, minority scholarship guidance, education loan assistance, and mandatory admission document checklists.' : currentLanguage === 'ur' ? 'امتحانات کا شیڈول، اقلیتی اسکالرشپ رہنمائی، تعلیمی قرض اور ضروری دستاویزی چیک لسٹ حاصل کریں۔' : 'आधिकारिक प्रवेश परीक्षा कैलेंडर, अल्पसंख्यक छात्रवृत्ति मार्गदर्शन, शिक्षा ऋण सहायता और आवश्यक दस्तावेज चेकलिस्ट देखें।'}
              </p>
            </div>

            {/* Entrance Exam Calendar Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Key National Entrance Examination Calendar 2026-2027' : currentLanguage === 'ur' ? 'اہم قومی امتحانات کا شیڈول 2026-2027' : 'प्रमुख राष्ट्रीय प्रवेश परीक्षा कैलेंडर 2026-2027'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { exam: 'JEE Main 2026 / 2027', body: 'NTA (National Testing Agency)', stream: 'Engineering & Arch', date: 'Session 1: Jan • Session 2: Apr', link: 'https://jeemain.nta.nic.in' },
                  { exam: 'JEE Advanced', body: 'IIT Organizing Committee', stream: 'IIT B.Tech / Dual Degree', date: 'May / June Annually', link: 'https://jeeadv.ac.in' },
                  { exam: 'CLAT Consortium', body: 'Consortium of 24 NLUs', stream: '5-Yr BA LLB & LLM', date: 'December (For next academic yr)', link: 'https://consortiumofnlus.ac.in' },
                  { exam: 'NEET-UG National', body: 'NTA & NMC', stream: 'B.Sc Nursing / Pharma / Med', date: 'May First Sunday Annually', link: 'https://neet.nta.nic.in' },
                  { exam: 'AIIMS NORCET', body: 'AIIMS New Delhi Exam Cell', stream: 'Govt Nursing Officers', date: 'Twice a year (Sept & April)', link: 'https://aiimsexams.ac.in' },
                  { exam: 'NATA Architecture', body: 'Council of Architecture (CoA)', stream: 'B.Arch 5 Years Degree', date: 'Multiple Sessions (Apr-July)', link: 'https://www.nata.in' },
                  { exam: 'CAT (IIMs Entrance)', body: 'IIM Organizing Committee', stream: 'MBA & PGDM Management', date: 'Last Sunday of November', link: 'https://iimcat.ac.in' },
                  { exam: 'ICAR AIEEA (CUET-UG)', body: 'NTA & ICAR', stream: 'B.Sc Agriculture & Veterinary', date: 'May / June (via CUET)', link: 'https://icar.org.in' },
                  { exam: 'GATE Examination', body: 'IITs & IISc Bangalore', stream: 'M.Tech & PSU Govt Jobs', date: 'February First/Second Week', link: 'https://gate2026.iitr.ac.in' }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#004B23] uppercase">{item.stream}</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">{item.date}</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#0B132B] mt-1">{item.exam}</h4>
                      <p className="text-xs text-slate-500 font-medium">Conducted by: {item.body}</p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-[#004B23] hover:text-[#0B132B] flex items-center justify-between"
                    >
                      <span>Visit Official Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships & Document Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scholarships Box */}
              <div className="bg-gradient-to-br from-[#004B23] to-[#00381a] rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-[#FFD54A]/30">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-6 h-6 text-[#FFD54A]" />
                  <h3 className="text-xl font-bold text-white">
                    {currentLanguage === 'en' ? 'Minority & Merit Scholarships' : currentLanguage === 'ur' ? 'اقلیتی اور میرٹ اسکالرشپس' : 'अल्पसंख्यक एवं मेधावी छात्रवृत्ति'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mb-6 leading-relaxed font-light">
                  {currentLanguage === 'en' ? 'Government of India and State authorities offer extensive 100% tuition waivers and maintenance stipends for professional course students:' : currentLanguage === 'ur' ? 'حکومت ہند اور ریاستی حکومتیں پروفیشنل کورسز کے طلباء کے لیے 100 فیصد فیس معافی اور وظائف فراہم کرتی ہیں:' : 'भारत सरकार और राज्य सरकारें व्यावसायिक कोर्स के छात्रों के लिए 100% शुल्क माफी और वजीफा प्रदान करती हैं:'}
                </p>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <Check className="w-4 h-4 text-[#FFD54A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">NSP Ministry of Minority Affairs Merit-cum-Means:</span>
                      <span className="text-slate-300 block text-xs">For Muslim, Sikh, Christian, Jain, Buddhist & Parsi students pursuing B.Tech, MBBS, B.Pharm, LLB, Nursing (Family income &lt; ₹2.5 LPA).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <Check className="w-4 h-4 text-[#FFD54A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">AICTE Pragati & Saksham Scholarships:</span>
                      <span className="text-slate-300 block text-xs">₹50,000 per annum for girl students and specially-abled students in AICTE approved technical colleges.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <Check className="w-4 h-4 text-[#FFD54A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">State Fee Waivers (MMVY MP, REAP Rajasthan, UP Tut):</span>
                      <span className="text-slate-300 block text-xs">100% tuition reimbursement by state governments for meritorious students scoring &gt; 70% in board exams.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mandatory Documents Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-[#0B132B]" />
                  <h3 className="text-xl font-bold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Mandatory Documents Checklist' : currentLanguage === 'ur' ? 'ضروری دستاویزات کی چیک لسٹ' : 'आवश्यक दस्तावेज चेकलिस्ट'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
                  {currentLanguage === 'en' ? 'Keep original and digital copies of these mandatory documents ready during admission counselling:' : currentLanguage === 'ur' ? 'داخلہ کونسلنگ کے دوران ان ضروری دستاویزات کی اصل اور ڈیجیٹل کاپیاں تیار رکھیں:' : 'काउंसलिंग के दौरान इन अनिवार्य दस्तावेजों की मूल और डिजिटल प्रतियां तैयार रखें:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
                  {[
                    '10th & 12th Marksheets & Certificates',
                    'Entrance Exam Admit Card & Score Card',
                    'Domicile / Resident Certificate',
                    'Caste / Category / Minority Certificate',
                    'Income Certificate (For Scholarship/Waiver)',
                    'Aadhar Card & Photo ID Proof',
                    'Transfer Certificate (TC) & Migration',
                    'Medical Fitness Certificate (From Medical Officer)',
                    'Passport Size Photographs (10-15 copies)',
                    'Seat Allotment Letter (JoSAA/State DTE)'
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: FUTURE EXPANSION & ADMIN PREVIEW                  */}
        {/* ========================================================= */}
        {activeSubTab === 'expansion' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-amber-900 via-slate-900 to-[#0B132B] rounded-3xl p-6 sm:p-10 text-white border-2 border-[#FFD54A] shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-[#FFD54A] border border-[#FFD54A]/40 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Settings className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'en' ? 'ADMINISTRATOR SCALABILITY ARCHITECTURE' : currentLanguage === 'ur' ? 'ایڈمنسٹریٹر اسکیل ایبلٹی اسٹرکچر' : 'प्रशासक स्केलेबिलिटी वास्तुकला'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  {currentLanguage === 'en' ? 'Seamless Future Expansion Without Redesign' : currentLanguage === 'ur' ? 'بغیر ڈیزائن بدلے مستقبل کی آسان توسیع' : 'बिना पुनर्निर्माण के सहज भविष्य विस्तार'}
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {currentLanguage === 'en' ? 'This portal is built on a dynamic, modular JSON architecture. As requested in the Master AI Prompt, administrators can instantly add new professional streams (Agriculture, Veterinary, Dental, Ayurveda, Architecture, Management, ITI, B.Ed, etc.), update college intake, upload fee structures, and publish placement reports without writing a single line of code or modifying the website design.' : currentLanguage === 'ur' ? 'یہ پورٹل ڈائنامک ماڈیولر اسٹرکچر پر مبنی ہے۔ ایڈمنسٹریٹرز بغیر کوئی کوڈ لکھے یا ویب سائٹ ڈیزائن تبدیل کیے نئے شعبے، کالجز اور فیس کی تفصیلات شامل کر سکتے ہیں۔' : 'यह पोर्टल एक गतिशील मॉड्यूलर वास्तुकला पर बना है। प्रशासक बिना कोई कोड लिखे या वेबसाइट डिजाइन बदले नए स्ट्रीम, कॉलेज और शुल्क संरचना आसानी से जोड़ सकते हैं।'}
                </p>
              </div>

              {/* Interactive Admin Stream Adder Demo */}
              <div className="mt-8 pt-8 border-t border-white/15">
                <h3 className="text-base font-bold text-[#FFD54A] mb-4 flex items-center gap-2">
                  <PlusCircle className="w-5 h-5" />
                  <span>{currentLanguage === 'en' ? 'Live Interactive Preview: Try Adding a New Professional Stream Below' : currentLanguage === 'ur' ? 'لائیو ڈیمو: نیچے نیا شعبہ شامل کر کے دیکھیں' : 'लाइव डेमो: नीचे नया स्ट्रीम जोड़कर देखें'}</span>
                </h3>

                <form onSubmit={handleAddCustomStream} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                  <select 
                    value={newStreamIcon} 
                    onChange={(e) => setNewStreamIcon(e.target.value)}
                    className="p-3.5 bg-white/10 border border-white/20 rounded-xl text-lg text-white font-bold outline-none focus:border-[#FFD54A]"
                  >
                    <option value="🎓" className="text-black">🎓 General Edu</option>
                    <option value="🐾" className="text-black">🐾 Veterinary</option>
                    <option value="🦷" className="text-black">🦷 Dental BDS</option>
                    <option value="🌿" className="text-black">🌿 Ayurveda BAMS</option>
                    <option value="🧪" className="text-black">🧪 Homeopathy BHMS</option>
                    <option value="🦿" className="text-black">🦿 Physiotherapy</option>
                    <option value="📚" className="text-black">📚 Teacher B.Ed</option>
                    <option value="👗" className="text-black">👗 Fashion Design</option>
                    <option value="🏨" className="text-black">🏨 Hotel Mgmt</option>
                    <option value="✈️" className="text-black">✈️ Aviation / Pilot</option>
                    <option value="⚓" className="text-black">⚓ Marine Navy</option>
                    <option value="🎨" className="text-black">🎨 Fine Arts</option>
                  </select>

                  <input
                    type="text"
                    value={newStreamName}
                    onChange={(e) => setNewStreamName(e.target.value)}
                    placeholder="Enter Stream Name (e.g. Veterinary & Animal Sciences, Marine Engineering...)"
                    className="flex-1 p-3.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-slate-400 outline-none focus:border-[#FFD54A]"
                  />

                  <button
                    type="submit"
                    className="bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold px-6 py-3.5 rounded-xl transition shadow-lg cursor-pointer shrink-0"
                  >
                    + Add Stream
                  </button>
                </form>

                {showAdminNotice && (
                  <div className="mt-3 bg-emerald-600 text-white text-xs font-bold p-3 rounded-xl flex items-center gap-2 animate-bounce">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Success! The stream has been dynamically appended to the scalable directory structure without UI disruption.</span>
                  </div>
                )}

                {/* Display Custom Stream Pills */}
                <div className="mt-6">
                  <div className="text-xs text-slate-300 font-semibold mb-3">Available Expansion Streams in Registry:</div>
                  <div className="flex flex-wrap gap-2">
                    {customStreams.map((cs) => (
                      <div key={cs.id} className="bg-white/15 hover:bg-white/25 border border-white/20 px-3.5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 transition">
                        <span>{cs.icon}</span>
                        <span>{cs.title}</span>
                        <span className="text-[10px] bg-emerald-500/80 text-white px-1.5 py-0.5 rounded uppercase">Active</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Capabilities List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B132B] mb-6">
                {currentLanguage === 'en' ? 'Supported Dynamic Content Updates' : currentLanguage === 'ur' ? 'تائید شدہ ڈائنامک اپ ڈیٹس' : 'समर्थित गतिशील सामग्री अपडेट'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Add New Professional Streams', desc: 'Add agriculture, veterinary, dental, ayurveda, B.Ed, architecture instantly.', icon: '🏗️' },
                  { title: 'Add & Edit Colleges', desc: 'Update annual intake, entrance exam cut-offs, and contact details live.', icon: '🏛️' },
                  { title: 'Upload Official Fee Structures', desc: 'Attach downloadable PDF fee structure charts when officially notified.', icon: '💰' },
                  { title: 'Upload Placement Reports', desc: 'Publish annual average and highest package statistics from placement cells.', icon: '📈' },
                  { title: 'Add Alumni Stories & Reviews', desc: 'Highlight real career journeys of community students in top colleges.', icon: '🌟' },
                  { title: 'Publish Counselling Updates', desc: 'Broadcast urgent JoSAA, NEET, CLAT, and state DTE registration deadlines.', icon: '📢' }
                ].map((cap, i) => (
                  <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="text-2xl mb-2">{cap.icon}</div>
                    <h4 className="text-base font-bold text-[#0B132B]">{cap.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* 4. COMPREHENSIVE COLLEGE DETAILS MODAL                     */}
      {/* ========================================================= */}
      {selectedCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#0B132B] relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#0B132B] text-white p-6 border-b-2 border-[#D4AF37] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-1 rounded-full border border-[#FFD54A]/30">
                    {selectedCollege.streamNameEn} • {selectedCollege.ownership}
                  </span>
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {selectedCollege.city}, {selectedCollege.state}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">
                  {selectedCollege.name}
                </h3>
                
                <div className="text-xs text-[#FFD54A] font-semibold mt-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{selectedCollege.accreditation} (Est. {selectedCollege.yearEstablished})</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCollege(null)}
                className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-full transition cursor-pointer shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Affiliated University:</span>
                  <span className="font-bold text-[#0B132B]">{selectedCollege.affiliatedUniversity}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Regulatory Approval:</span>
                  <span className="font-bold text-[#004B23]">{selectedCollege.approvalBody}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Annual Seat Intake:</span>
                  <span className="font-bold text-slate-800">{selectedCollege.annualIntake} Seats</span>
                </div>
              </div>

              {/* Courses & Branches */}
              <div>
                <h4 className="text-sm font-extrabold text-[#0B132B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#004B23]" />
                  <span>Courses & Specializations Offered</span>
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedCollege.coursesOffered.map((c, i) => (
                    <span key={i} className="bg-[#0B132B] text-[#FFD54A] text-xs font-bold px-3 py-1.5 rounded-xl">
                      {c}
                    </span>
                  ))}
                </div>
                {selectedCollege.branchesOffered && (
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-600 uppercase block mb-2">Available Branches / Departments:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCollege.branchesOffered.map((b, i) => (
                        <span key={i} className="text-xs bg-white text-slate-700 border border-slate-300 px-2.5 py-1 rounded-lg font-medium">
                          • {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Admission & Eligibility */}
              <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200 space-y-3">
                <h4 className="text-sm font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Admission Process & Entrance Exam</span>
                </h4>
                <div className="text-xs sm:text-sm space-y-2 text-slate-800">
                  <div><strong className="text-amber-900">Mandatory Entrance Exam:</strong> <span className="font-bold text-[#004B23] bg-white px-2 py-0.5 rounded border border-emerald-200 ml-1">{selectedCollege.entranceExam}</span></div>
                  <div><strong className="text-amber-900">Eligibility Criteria:</strong> {selectedCollege.eligibility}</div>
                  <div><strong className="text-amber-900">Counselling & Selection:</strong> {selectedCollege.admissionProcess}</div>
                </div>
              </div>

              {/* Campus Infrastructure & Facilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2">
                  <h5 className="font-extrabold text-[#0B132B] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#004B23]" />
                    <span>Hostel & Living Infrastructure</span>
                  </h5>
                  <p className="text-slate-600 font-normal leading-relaxed">{selectedCollege.hostel}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2">
                  <h5 className="font-extrabold text-[#0B132B] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#004B23]" />
                    <span>Library & Advanced Laboratories</span>
                  </h5>
                  <p className="text-slate-600 font-normal leading-relaxed">{selectedCollege.library} • {selectedCollege.laboratory}</p>
                </div>
              </div>

              {/* Placements & Scholarships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 text-xs sm:text-sm space-y-2">
                  <h5 className="font-extrabold text-[#004B23] flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#004B23]" />
                    <span>Placement Cell & Internships</span>
                  </h5>
                  <p className="text-slate-700 font-normal leading-relaxed">{selectedCollege.placementCell}</p>
                  <p className="text-xs text-slate-500 italic mt-1">{selectedCollege.internshipOpportunities}</p>
                </div>

                <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-200 text-xs sm:text-sm space-y-2">
                  <h5 className="font-extrabold text-blue-900 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-700" />
                    <span>Fee Structure & Scholarships</span>
                  </h5>
                  <p className="text-slate-800 font-bold">{selectedCollege.feeStructure}</p>
                  <p className="text-xs text-slate-600 font-normal mt-1">{selectedCollege.scholarships}</p>
                </div>
              </div>

              {/* Contact Information & Map Location */}
              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-300">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>Official Contact & Address</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#004B23] shrink-0" />
                    <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline line-clamp-1">
                      {selectedCollege.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#004B23] shrink-0" />
                    <span className="font-semibold">{selectedCollege.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#004B23] shrink-0" />
                    <span className="font-semibold">{selectedCollege.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="line-clamp-1">{selectedCollege.address}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCollege.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 shadow"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View on Google Maps</span>
                  </a>

                  <a
                    href={selectedCollege.counsellingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Official Counselling Portal</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 p-4 rounded-b-3xl border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-between px-6">
              <span>Verified with {selectedCollege.approvalBody} official records.</span>
              <button
                onClick={() => setSelectedCollege(null)}
                className="px-5 py-2 bg-[#0B132B] text-white font-bold rounded-xl hover:bg-slate-800 transition cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfessionalCollegesDirectory;
