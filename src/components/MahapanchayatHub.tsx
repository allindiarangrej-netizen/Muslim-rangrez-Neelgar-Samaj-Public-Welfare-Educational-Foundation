import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Vote,
  MessageSquare,
  History,
  TrendingUp,
  Building2,
  FileText,
  Calendar,
  Image as ImageIcon,
  FileCheck,
  Award,
  Users,
  BookOpen,
  Download,
  Search,
  ChevronRight,
  Eye,
  Heart,
  Share2,
  Filter,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';
import MahapanchayatSystem from './MahapanchayatSystem';
import MahapanchayatHistoryReader from './MahapanchayatHistoryReader';
import SocietyReformResolutions from './SocietyReformResolutions';

interface MahapanchayatHubProps {
  currentLanguage: 'en' | 'hi' | 'ur';
  activeSubTab?: string;
  onNavigate?: (tab: string) => void;
}

const MahapanchayatHub: React.FC<MahapanchayatHubProps> = ({
  currentLanguage,
  activeSubTab = 'mahapanchayat-about',
  onNavigate
}) => {
  // Normalize tab selection
  const getNormalizedTab = (tab?: string): string => {
    if (!tab || tab === 'mahapanchayat' || tab === 'governance-mahapanchayat') return 'mahapanchayat-about';
    if (tab === 'governance-surveys') return 'mahapanchayat-surveys';
    if (tab === 'governance-opinion-poll') return 'mahapanchayat-polls';
    if (tab === 'agendas') return 'mahapanchayat-agenda';
    if (tab === 'governance-resolutions' || tab === 'archive') return 'mahapanchayat-resolutions';
    if (tab === 'implementation') return 'mahapanchayat-progress';
    if (tab === 'committees') return 'mahapanchayat-committees';
    if (tab === 'governance-reports' || tab === 'reports_notif') return 'mahapanchayat-reports';
    return tab;
  };

  const currentTab = getNormalizedTab(activeSubTab);

  const [pledged, setPledged] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('All');
  const [activeHistorySubSection, setActiveHistorySubSection] = useState<'book' | 'timeline' | 'resolutions' | 'committees'>('book');

  const handleTabChange = (tabId: string) => {
    if (onNavigate) {
      onNavigate(tabId);
    }
  };

  const tabs = [
    { id: 'mahapanchayat-about', icon: <Sparkles className="w-4 h-4" />, labelEn: 'About Mahapanchayat', labelHi: 'महापंचायत के बारे में', labelUr: 'مہاپنچایت کے بارے میں' },
    { id: 'mahapanchayat-mission', icon: <Heart className="w-4 h-4 text-red-400" />, labelEn: 'Society Reform Mission', labelHi: 'समाज सुधार मिशन', labelUr: 'سماجی اصلاح کا مشن' },
    { id: 'mahapanchayat-history', icon: <History className="w-4 h-4 text-amber-400" />, labelEn: 'Mahapanchayat History', labelHi: 'महापंचायत का इतिहास', labelUr: 'مہاپنچایت کی تاریخ' },
    { id: 'mahapanchayat-surveys', icon: <Vote className="w-4 h-4 text-emerald-400" />, labelEn: 'Digital Surveys', labelHi: 'डिजिटल सर्वेक्षण', labelUr: 'ڈیجیٹل سروے' },
    { id: 'mahapanchayat-polls', icon: <Users className="w-4 h-4 text-blue-400" />, labelEn: 'Community Opinion Polls', labelHi: 'सामुदायिक जनमत संग्रह', labelUr: 'کمیونٹی رائے عامہ' },
    { id: 'mahapanchayat-agenda', icon: <MessageSquare className="w-4 h-4 text-purple-400" />, labelEn: 'Current Agenda', labelHi: 'वर्तमान एजेंडा', labelUr: 'موجودہ ایجنڈا' },
    { id: 'mahapanchayat-resolutions', icon: <FileCheck className="w-4 h-4 text-yellow-400" />, labelEn: 'Approved Resolutions', labelHi: 'पारित प्रस्ताव (Resolutions)', labelUr: 'منظور شدہ قراردادیں' },
    { id: 'mahapanchayat-progress', icon: <TrendingUp className="w-4 h-4 text-teal-400" />, labelEn: 'Resolution Progress', labelHi: 'प्रस्ताव क्रियान्वयन प्रगति', labelUr: 'قراردادوں پر پیشرفت' },
    { id: 'mahapanchayat-committees', icon: <Building2 className="w-4 h-4 text-indigo-400" />, labelEn: 'Committees', labelHi: 'समितियां', labelUr: 'کمیٹیاں' },
    { id: 'mahapanchayat-reports', icon: <FileText className="w-4 h-4 text-orange-400" />, labelEn: 'Committee Reports', labelHi: 'समिति रिपोर्ट', labelUr: 'کمیٹی رپورٹس' },
    { id: 'mahapanchayat-reviews', icon: <Calendar className="w-4 h-4 text-pink-400" />, labelEn: 'Annual Reviews', labelHi: 'वार्षिक समीक्षा', labelUr: 'سالانہ جائزہ' },
    { id: 'mahapanchayat-gallery', icon: <ImageIcon className="w-4 h-4 text-cyan-400" />, labelEn: 'Gallery', labelHi: 'गैलरी', labelUr: 'گیلری' },
    { id: 'mahapanchayat-documents', icon: <BookOpen className="w-4 h-4 text-[#F4C430]" />, labelEn: 'Documents', labelHi: 'दस्तावेज़ एवं रिपोर्ट', labelUr: 'دستاویزات' },
  ];

  const categories = [
    {
      id: 'intro',
      titleEn: 'Introduction',
      titleHi: 'परिचय',
      titleUr: 'تعارف',
      icon: '🏛️',
      items: ['mahapanchayat-about', 'mahapanchayat-mission', 'mahapanchayat-history']
    },
    {
      id: 'participation',
      titleEn: 'Participation',
      titleHi: 'सहभागिता',
      titleUr: 'شمولیت',
      icon: '🗳️',
      items: ['mahapanchayat-surveys', 'mahapanchayat-polls', 'mahapanchayat-agenda']
    },
    {
      id: 'decisions',
      titleEn: 'Decisions',
      titleHi: 'निर्णय',
      titleUr: 'فیصلے',
      icon: '📜',
      items: ['mahapanchayat-resolutions', 'mahapanchayat-progress']
    },
    {
      id: 'org',
      titleEn: 'Organization',
      titleHi: 'संगठन',
      titleUr: 'تنظیم',
      icon: '🏢',
      items: ['mahapanchayat-committees', 'mahapanchayat-reports', 'mahapanchayat-reviews', 'mahapanchayat-gallery', 'mahapanchayat-documents']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4C430] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>
                  {currentLanguage === 'en' ? 'NATIONAL APEX GOVERNANCE & REFORM BODY' : currentLanguage === 'ur' ? 'قومی اعلیٰ حکومتی اور اصلاحی ادارہ' : 'राष्ट्रीय सर्वोच्च शासन एवं समाज सुधार निकाय'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
                {currentLanguage === 'en' ? 'Mahapanchayat Portal' : currentLanguage === 'ur' ? 'مہاپنچایت پورٹل' : 'महापंचायत पोर्टल'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 max-w-3xl leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Welcome to the unified digital governance, consensus, and social reform portal of All India Rangrej Samaj. Here, community voices shape democratic policies, eradicate social evils, track approved resolutions, and empower collective progress.'
                  : currentLanguage === 'ur'
                  ? 'آل انڈیا رنگریز سماج کے متحدہ ڈیجیٹل حکومتی، مشاورت اور سماجی اصلاح کے پورٹل میں خوش آمدید۔ یہاں کمیونٹی کی آواز جمہوری پالیسیوں کی تشکیل اور سماجی ترقی کی ضامن ہے۔'
                  : 'ऑल इंडिया रंगरेज़ समाज के एकीकृत डिजिटल शासन, जनमत एवं समाज सुधार पोर्टल में आपका स्वागत है। यहां सामुदायिक भागीदारी से लोकतांत्रिक नीतियां बनती हैं और सुधार प्रस्ताव लागू होते हैं।'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl shrink-0 shadow-inner">
              <div className="text-center px-4 border-r border-white/10">
                <div className="text-xl sm:text-2xl font-black text-[#F4C430]">42+</div>
                <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{currentLanguage === 'en' ? 'Resolutions' : 'पारित प्रस्ताव'}</div>
              </div>
              <div className="text-center px-4 border-r border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">14.5K</div>
                <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{currentLanguage === 'en' ? 'Active Voters' : 'सक्रिय मतदाता'}</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{currentLanguage === 'en' ? 'Transparency' : 'पारदर्शिता'}</div>
              </div>
            </div>
          </div>

          {/* Redesigned Sub-Navigation - Enterprise Wrapping Style */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                      isActive
                        ? 'bg-[#F4C430] text-[#0B132B] border-transparent shadow-lg scale-105 z-10'
                        : 'bg-white/10 text-white hover:bg-white/20 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className={`shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {tab.icon}
                    </span>
                    <span className="leading-tight">
                      {currentLanguage === 'en' ? tab.labelEn : currentLanguage === 'ur' ? tab.labelUr : tab.labelHi}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* 1. ABOUT MAHAPANCHAYAT */}
        {currentTab === 'mahapanchayat-about' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Overview Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#004B23] bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    ℹ️ {currentLanguage === 'en' ? 'Core Governance Foundation' : 'मूल शासन संरचना'}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B] mt-4">
                    {currentLanguage === 'en' ? 'About The National Mahapanchayat' : currentLanguage === 'ur' ? 'قومی مہاپنچایت کے بارے میں' : 'राष्ट्रीय महापंचायत के बारे में'}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTabChange('mahapanchayat-mission')}
                    className="px-5 py-2.5 rounded-xl bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer border border-[#FFD54A]/30"
                  >
                    <span>🌟</span>
                    <span>{currentLanguage === 'en' ? 'View Reform Mission' : 'समाज सुधार मिशन देखें'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-4 hover:border-emerald-300 transition-colors min-h-[220px] flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#004B23] flex items-center justify-center text-[#FFD54A] text-2xl shadow-lg shrink-0 mb-2">
                    🏛️
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] leading-snug">
                    {currentLanguage === 'en' ? 'Supreme Decision Body' : 'सर्वोच्च निर्णय निकाय'}
                  </h3>
                  <div className="text-sm text-gray-600 leading-relaxed break-words whitespace-normal">
                    {currentLanguage === 'en'
                      ? 'The National Mahapanchayat is the highest democratic assembly of All India Rangrej Samaj, bringing together delegates, state presidents, scholars, and youth leaders to formulate binding social rules and community welfare policies.'
                      : 'राष्ट्रीय महापंचायत समाज की सर्वोच्च लोकतांत्रिक सभा है, जो प्रतिनिधियों, प्रदेश अध्यक्षों, बुद्धिजीवियों व युवाओं को जोड़कर सामाजिक नियम और नीतियां तय करती है।'}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-4 hover:border-amber-300 transition-colors min-h-[220px] flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 text-2xl shadow-lg border border-amber-200 shrink-0 mb-2">
                    ⚖️
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] leading-snug">
                    {currentLanguage === 'en' ? 'Consensus & Justice' : 'सर्वसम्मति एवं न्याय'}
                  </h3>
                  <div className="text-sm text-gray-600 leading-relaxed break-words whitespace-normal">
                    {currentLanguage === 'en'
                      ? 'Decisions are taken through transparent digital surveys, open consultations, and consensus resolutions. We ensure impartial dispute resolution, constitutional awareness, and protection of citizen rights.'
                      : 'निर्णय पारदर्शी डिजिटल सर्वे, खुली चर्चा और सर्वसम्मति से लिए जाते हैं। हम निष्पक्ष विवाद निवारण, संवैधानिक जागरूकता और नागरिक अधिकारों की सुरक्षा सुनिश्चित करते हैं।'}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-4 hover:border-blue-300 transition-colors min-h-[220px] flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl shadow-lg border border-blue-200 shrink-0 mb-2">
                    🌐
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] leading-snug">
                    {currentLanguage === 'en' ? 'E-Governance 2.0' : 'ई-गवर्नेंस 2.0 तकनीक'}
                  </h3>
                  <div className="text-sm text-gray-600 leading-relaxed break-words whitespace-normal">
                    {currentLanguage === 'en'
                      ? 'By transitioning to E-Governance 2.0, every registered Rangrej family member across India and the global diaspora can directly vote on reform agendas and track resolution progress in real time.'
                      : 'ई-गवर्नेंस 2.0 के साथ, देश-विदेश का प्रत्येक पंजीकृत समाज सदस्य सुधार प्रस्तावों पर सीधे ऑनलाइन मतदान कर सकता है और निर्णयों की प्रगति ट्रैक कर सकता है।'}
                  </div>
                </div>
              </div>
            </div>

            {/* Render MahapanchayatSystem Objectives */}
            <div className="pt-8">
              <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] mb-6 flex items-center gap-3">
                <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600">🎯</span>
                <span>{currentLanguage === 'en' ? 'Detailed E-Governance Objectives & Framework' : 'विस्तृत ई-गवर्नेंस उद्देश्य एवं रूपरेखा'}</span>
              </h3>
              <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="objectives" />
            </div>
          </div>
        )}

        {/* 2. SOCIETY REFORM MISSION */}
        {currentTab === 'mahapanchayat-mission' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-12 shadow-sm text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-[#F4C430]"></div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-100">
                🌟 {currentLanguage === 'en' ? 'Social Transformation Charter' : 'समाज सुधार संकल्प'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Society Reform Mission' : currentLanguage === 'ur' ? 'سماجی اصلاح کا مشن' : 'समाज सुधार मिशन'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Our mission is to modernize community traditions while maintaining Islamic and cultural dignity. We actively campaign against dowry, extravagant weddings, illiteracy, and social divisions.'
                  : 'हमारा उद्देश्य इस्लामी व सांस्कृतिक गरिमा बनाए रखते हुए समाज की कुरीतियों को समाप्त करना है। हम दहेज, खर्चीली शादियों, अशिक्षा और सामाजिक भेदभाव के विरुद्ध निरंतर अभियान चला रहे हैं।'}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  titleEn: '1. Eradication of Dowry & Extravagant Weddings',
                  titleHi: '1. दहेज प्रथा एवं खर्चीली शादियों पर रोक',
                  descEn: 'Mandatory enforcement of simple, dignified Nikah / marriages. Strict prohibition on demanding dowry, excessive feast expenses, and lavish display of wealth that burdens families.',
                  descHi: 'सरल एवं सादगीपूर्ण निकाह/विवाह को प्रोत्साहन। दहेज की मांग, अनावश्यक दावत खर्च और दिखावे पर पूर्ण रोक जिससे गरीब परिवारों पर कर्ज का बोझ न पड़े।',
                  icon: '🚫',
                  bgColor: 'bg-red-50',
                  iconColor: 'text-red-600',
                  borderColor: 'border-red-100 hover:border-red-300'
                },
                {
                  titleEn: '2. 100% Literacy & Girl Child Education',
                  titleHi: '2. 100% साक्षरता एवं बालिका शिक्षा',
                  descEn: 'Every child in the community must receive higher education. Special scholarships, mentoring, and financial aid allocated specifically to ensure no girl child drops out of school or college.',
                  descHi: 'समाज के प्रत्येक बच्चे को उच्च शिक्षा। विशेषकर बालिकाओं की शिक्षा के लिए स्कॉलरशिप और आर्थिक सहायता ताकि कोई भी बेटी शिक्षा से वंचित न रहे।',
                  icon: '🎓',
                  bgColor: 'bg-emerald-50',
                  iconColor: 'text-emerald-600',
                  borderColor: 'border-emerald-100 hover:border-emerald-300'
                },
                {
                  titleEn: '3. Youth Entrepreneurship & Skill Development',
                  titleHi: '3. युवा उद्यमिता एवं कौशल विकास',
                  descEn: 'Shifting youth from traditional low-paying labor to modern businesses, digital careers, competitive exams (UPSC/PSC), and technical trades through community incubation hubs.',
                  descHi: 'युवाओं को पारंपरिक कम आय वाले कार्यों से निकालकर आधुनिक व्यापार, डिजिटल करियर, प्रशासनिक सेवाओं (UPSC/PSC) व तकनीकी उद्यमों की ओर बढ़ाना।',
                  icon: '🚀',
                  bgColor: 'bg-blue-50',
                  iconColor: 'text-blue-600',
                  borderColor: 'border-blue-100 hover:border-blue-300'
                },
                {
                  titleEn: '4. Social Unity & Local Dispute Settlement',
                  titleHi: '4. सामाजिक एकता एवं स्थानीय विवाद निपटारा',
                  descEn: 'Establishing Sulah Samitis (Arbitration Councils) at the district level to settle family, property, and matrimonial disputes through mutual consensus rather than costly litigation.',
                  descHi: 'महंगे मुकदमों के बजाय आपसी सहमति से पारिवारिक, संपत्ति व वैवाहिक विवादों को सुलझाने के लिए जिला स्तर पर सुलह समितियों (मध्यस्थता परिषदों) की स्थापना।',
                  icon: '⚖️',
                  bgColor: 'bg-amber-50',
                  iconColor: 'text-amber-600',
                  borderColor: 'border-amber-100 hover:border-amber-300'
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-2xl border ${item.borderColor} ${item.bgColor} transition duration-300 flex flex-col justify-between`}>
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${item.iconColor} bg-white shadow-sm border border-gray-100`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {currentLanguage === 'en' ? item.descEn : item.descHi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. MAHAPANCHAYAT HISTORY */}
        {currentTab === 'mahapanchayat-history' && (
          <div className="space-y-12 animate-fadeIn" id="mahapanchayat-history-tab">
            <div className="bg-gradient-to-br from-[#004B23] via-[#053218] to-[#0B132B] text-white rounded-3xl p-6 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD54A]/20 text-[#FFD54A] text-xs font-bold uppercase tracking-wider border border-[#FFD54A]/30">
                📖 {currentLanguage === 'en' ? 'Evolution History Archives' : 'विकास यात्रा अभिलेखागार'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
                {currentLanguage === 'en' ? 'Mahapanchayat Evolution History' : 'महापंचायत विकास यात्रा का इतिहास'}
              </h2>
              <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                {currentLanguage === 'en'
                  ? 'Explore our premium digital book, chronological timeline of organizational milestones, the fourteen historic resolutions of Joura, and our decentralized Regional Committee movement.'
                  : 'हमारे प्रीमियम डिजिटल ग्रंथ, संगठनात्मक ऐतिहासिक पड़ावों के कालक्रम, जौरा के चौदह ऐतिहासिक प्रस्तावों और हमारे विकेंद्रीकृत क्षेत्रीय समिति आंदोलन का अध्ययन करें।'}
              </p>
            </div>

            {/* Premium Interactive History Sub-Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-gray-200 pb-5" id="history-sub-nav">
              {[
                { id: 'book', icon: '📖', labelEn: 'Digital Book Reader', labelHi: 'डिजिटल बुक रीडर' },
                { id: 'timeline', icon: '🗓️', labelEn: 'Chronological Timeline', labelHi: 'ऐतिहासिक कालक्रम' },
                { id: 'resolutions', icon: '📜', labelEn: '14 Historic Resolutions', labelHi: '14 ऐतिहासिक प्रस्ताव' },
                { id: 'committees', icon: '🏢', labelEn: 'Regional Committee Wings', labelHi: 'क्षेत्रीय समितियां एवं विंग' },
              ].map((subTab) => (
                <button
                  key={subTab.id}
                  onClick={() => setActiveHistorySubSection(subTab.id as any)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-serif font-black transition-all duration-300 flex items-center gap-2 border shadow-2xs cursor-pointer ${
                    activeHistorySubSection === subTab.id
                      ? 'bg-[#004B23] text-white border-[#FFD54A]/30 scale-[1.02]'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <span>{subTab.icon}</span>
                  <span>{currentLanguage === 'en' ? subTab.labelEn : subTab.labelHi}</span>
                </button>
              ))}
            </div>

            {/* 3.1 DIGITAL BOOK READER */}
            {activeHistorySubSection === 'book' && (
              <div className="space-y-6 animate-fadeIn">
                <MahapanchayatHistoryReader currentLanguage={currentLanguage} />
              </div>
            )}

            {/* 3.2 CHRONOLOGICAL TIMELINE */}
            {activeHistorySubSection === 'timeline' && (
              <div className="space-y-8 animate-fadeIn" id="history-timeline-section">
                <div className="text-center space-y-2 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-serif font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Milestones of Collective Progress' : 'सामूहिक प्रगति के ऐतिहासिक पड़ाव'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {currentLanguage === 'en'
                      ? 'Tracing the historic development of All India Rangrez Samaj organization over seven decades.'
                      : 'सात दशकों से अधिक समय में ऑल इंडिया रंगरेज़ समाज संगठन के ऐतिहासिक विकास की यात्रा का कालक्रम।'}
                  </p>
                </div>

                <div className="relative border-l-4 border-emerald-100 ml-4 sm:ml-10 pl-6 sm:pl-12 space-y-12 my-12">
                  {[
                    {
                      year: '1952',
                      titleEn: 'First National Delegates Assembly',
                      titleHi: 'प्रथम राष्ट्रीय प्रतिनिधि सभा (दिल्ली)',
                      descEn: 'Post-independence gathering of community elders and regional leaders in Delhi to establish formal communication channels across North and Central India.',
                      descHi: 'स्वतंत्रता के बाद दिल्ली में समाज के बुजुर्गों और क्षेत्रीय नेताओं की पहली ऐतिहासिक बैठक, जिसमें उत्तर और मध्य भारत में सामाजिक संपर्क की नींव रखी गई।'
                    },
                    {
                      year: '1985',
                      titleEn: 'Adoption of Zonal Councils',
                      titleHi: 'क्षेत्रीय परिषदें एवं सामाजिक नियमावली लागू',
                      descEn: 'Establishment of state-level zonal committees in UP, MP, Rajasthan, Bihar, Maharashtra, and Gujarat to address localized educational and trade challenges.',
                      descHi: 'यूपी, एमपी, राजस्थान, बिहार, महाराष्ट्र और गुजरात में राज्य स्तरीय क्षेत्रीय समितियों का गठन ताकि स्थानीय व्यावसायिक और शैक्षणिक समस्याओं का हल निकाला जा सके।'
                    },
                    {
                      year: '2004',
                      titleEn: 'National Social Reform Charter',
                      titleHi: 'राष्ट्रीय समाज सुधार चार्टर पर हस्ताक्षर',
                      descEn: 'Landmark Mahapanchayat resolution banning lavish wedding feasts and launching the All India Educational Scholarship & Relief Fund.',
                      descHi: 'खर्चीली शादियों व मृत्युभोज पर रोक लगाने का ऐतिहासिक महापंचायत निर्णय और अखिल भारतीय शिक्षा छात्रवृत्ति कोष की शुरुआत।'
                    },
                    {
                      year: '2018',
                      titleEn: 'Unified National Census Initiative',
                      titleHi: 'एकीकृत राष्ट्रीय जनगणना एवं डायरेक्टरी अभियान',
                      descEn: 'Launch of systematic data collection across 500+ districts to connect families, preserve ancestral roots, and streamline matrimonial verified profiles.',
                      descHi: '500+ जिलों में परिवारों को जोड़ने, वंशावली सुरक्षित रखने और वैवाहिक प्रोफाइल को सत्यापित करने के लिए व्यवस्थित डाटा संग्रह की शुरुआत।'
                    },
                    {
                      year: '2024 - Present',
                      titleEn: 'E-Governance 2.0 Digital Portal',
                      titleHi: 'ई-गवर्नेंस 2.0 एवं डिजिटल महापंचायत पोर्टल',
                      descEn: 'Revolutionary digital leap enabling real-time online voting, transparent resolution tracking, RTI legal assistance, and instant global diaspora participation.',
                      descHi: 'क्रांतिकारी डिजिटल कदम जिससे ऑनलाइन मतदान, प्रस्ताव निगरानी, RTI कानूनी सहायता और देश-विदेश के सदस्यों की सीधी भागीदारी संभव हुई।'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[35px] sm:-left-[58px] top-1 w-8 sm:w-12 h-8 sm:h-12 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center text-xs font-black text-emerald-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                        {idx + 1}
                      </div>
                      <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:border-emerald-500 hover:shadow-lg transition-all duration-300 space-y-3 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-[#004B23] opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <span className="inline-block text-xs font-black text-[#004B23] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                          📅 {item.year}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] group-hover:text-[#004B23] transition duration-200">
                          {currentLanguage === 'en' ? item.titleEn : item.titleHi}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                          {currentLanguage === 'en' ? item.descEn : item.descHi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3.3 FOURTEEN HISTORIC RESOLUTIONS */}
            {activeHistorySubSection === 'resolutions' && (
              <div className="space-y-6 animate-fadeIn" id="history-resolutions-section">
                <SocietyReformResolutions currentLanguage={currentLanguage} />
              </div>
            )}

            {/* 3.4 REGIONAL COMMITTEE MOVEMENT */}
            {activeHistorySubSection === 'committees' && (
              <div className="space-y-8 animate-fadeIn" id="history-committees-section">
                <div className="bg-[#FAF6EC] border border-[#E8DFC9] p-6 sm:p-10 rounded-3xl space-y-8 relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="border-b border-[#EBE3CD] pb-4">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#004B23] font-mono text-[10px] font-black uppercase tracking-widest inline-block mb-3">
                      🛡️ Grassroots Execution System
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-amber-950 leading-tight">
                      {currentLanguage === 'en' ? 'The Regional Committee Movement' : 'क्षेत्रीय समिति आंदोलन एवं विकेंद्रीकृत प्रशासन'}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-900 mt-2 leading-relaxed font-light">
                      {currentLanguage === 'en'
                        ? 'To ensure that the social reforms are not just documented on paper but actively monitored on the ground, the All India Rangrez Samaj established decentralized regional monitoring cells across states, districts, and tehsils.'
                        : 'यह सुनिश्चित करने के लिए कि सामाजिक सुधार केवल कागजों पर सीमित न रहें, बल्कि जमीनी स्तर पर सक्रिय रूप से लागू किए जाएं, ऑल इंडिया रंगरेज़ समाज ने राज्यों, जिलों और तहसीलों में विकेंद्रीकृत क्षेत्रीय निगरानी इकाइयों की स्थापना की है।'}
                    </p>
                  </div>

                  {/* Wings Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        titleEn: 'Dispute Settlement Councils (Sulah Samitis)',
                        titleHi: 'आपसी सुलह समितियां (Arbitration)',
                        descEn: 'Establishing local alternative dispute resolution councils to resolve matrimonial, family, and land issues out of court, reducing litigation costs and protecting family dignity.',
                        descHi: 'अदालतों के बाहर पारिवारिक, वैवाहिक और भूमि विवादों को सुलझाने के लिए स्थानीय सुलह समितियों का गठन, जिससे अदालती खर्चों में कमी और सामाजिक प्रतिष्ठा की रक्षा होती है।',
                        icon: '⚖️',
                        color: 'from-amber-500/10 to-amber-600/5 border-[#E8DFC9]/70 text-amber-950'
                      },
                      {
                        titleEn: 'Education Vigilance Squads',
                        titleHi: 'शिक्षा निगरानी दल (Vigilance)',
                        descEn: 'Grassroots teams that monitor primary and secondary school attendance, track and resolve girl child dropout cases, and manage local disbursement of scholarship funds.',
                        descHi: 'जमीनी स्तर के दल जो प्राथमिक और माध्यमिक स्कूलों में बच्चों की उपस्थिति की निगरानी करते हैं, बालिकाओं के स्कूल छोड़ने के मामलों को हल करते हैं और छात्रवृत्ति वितरण को पारदर्शी बनाते हैं।',
                        icon: '🎓',
                        color: 'from-emerald-500/10 to-emerald-600/5 border-[#DFD8BF]/70 text-emerald-950'
                      },
                      {
                        titleEn: 'Socio-Economic Survey Wings',
                        titleHi: 'सामाजिक-आर्थिक सर्वेक्षण विंग (Survey)',
                        descEn: 'Conducting systematic house-to-house demographic surveys, maintaining the unified national database, and verifying matrimonial profiles on the secure central portal.',
                        descHi: 'घर-घर जाकर जनसांख्यिकीय सर्वेक्षण करना, एकीकृत राष्ट्रीय डेटाबेस का प्रबंधन करना और सुरक्षित केंद्रीय पोर्टल पर वैवाहिक प्रोफाइल को सत्यापित व पंजीकृत करना।',
                        icon: '📋',
                        color: 'from-blue-500/10 to-blue-600/5 border-[#E8DFC9]/70 text-blue-950'
                      }
                    ].map((wing, idx) => (
                      <div key={idx} className={`bg-gradient-to-b ${wing.color} p-6 rounded-2xl border shadow-2xs space-y-3 hover:scale-[1.02] transition-transform duration-300`}>
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-inner shrink-0 border border-[#E8DFC9]/50">
                          {wing.icon}
                        </div>
                        <h4 className="font-serif font-black text-base leading-snug">{currentLanguage === 'en' ? wing.titleEn : wing.titleHi}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed font-light">{currentLanguage === 'en' ? wing.descEn : wing.descHi}</p>
                      </div>
                    ))}
                  </div>

                  {/* Governance Card */}
                  <div className="bg-white border border-[#EBE3CD] p-6 rounded-2xl space-y-4">
                    <h4 className="font-serif font-extrabold text-amber-950 text-base flex items-center gap-2">
                      <span>📌</span>
                      <span>{currentLanguage === 'en' ? 'Administrative Integration & Responsibility' : 'प्रशासनिक एकीकरण एवं जवाबदेही'}</span>
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-light">
                      {currentLanguage === 'en'
                        ? 'Each regional committee is linked directly to the Central e-Governance portal. Local secretaries upload monthly compliance checklists, report on girl-child educational enrollments, and coordinate with district Qazis for simple, dowry-free mass wedding programs.'
                        : 'प्रत्येक क्षेत्रीय समिति सीधे केंद्रीय ई-गवर्नेंस पोर्टल से जुड़ी होती है। स्थानीय सचिव मासिक अनुपालन रिपोर्ट अपलोड करते हैं, बालिकाओं के स्कूल नामांकन की जानकारी दर्ज करते हैं और सामूहिक सादगीपूर्ण विवाह के लिए जिला काजी के साथ समन्वय करते हैं।'}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200/50 p-4 rounded-xl text-xs text-[#004B23] font-mono font-bold flex items-center gap-2">
                      <span>✓</span>
                      <span>ACTIVE IMPLEMENTATION TRACKING SYSTEM OPERATIONAL</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. DIGITAL SURVEYS */}
        {currentTab === 'mahapanchayat-surveys' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex items-center justify-between flex-wrap gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                  <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Vote className="w-6 h-6" /></span>
                  <span>{currentLanguage === 'en' ? 'Active Digital Surveys & Voting' : 'सक्रिय डिजिटल सर्वेक्षण एवं मतदान'}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {currentLanguage === 'en' ? 'Cast your verified vote on ongoing community policies. One vote per registered member ID.' : 'चालू सामुदायिक नीतियों पर अपना सत्यापित वोट डालें। प्रति पंजीकृत सदस्य एक वोट मान्य।'}
                </p>
              </div>
              <button
                onClick={() => handleTabChange('mahapanchayat-polls')}
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#004B23] text-xs font-bold transition flex items-center gap-2 border border-emerald-200 shadow-sm cursor-pointer"
              >
                <span>🗳️</span>
                <span>{currentLanguage === 'en' ? 'Switch to Opinion Polls' : 'जनमत संग्रह देखें'}</span>
              </button>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="surveys" />
          </div>
        )}

        {/* 5. COMMUNITY OPINION POLLS */}
        {currentTab === 'mahapanchayat-polls' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex items-center justify-between flex-wrap gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                  <span className="p-2 bg-blue-50 rounded-lg text-blue-600"><Users className="w-6 h-6" /></span>
                  <span>{currentLanguage === 'en' ? 'Opinion Polls & Community Feedback' : 'जनमत संग्रह एवं सामुदायिक फीडबैक'}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {currentLanguage === 'en' ? 'Express your opinion on emerging social topics, youth initiatives, and welfare priorities.' : 'उभरते सामाजिक विषयों, युवा पहलों और कल्याणकारी प्राथमिकताओं पर अपनी राय व्यक्त करें।'}
                </p>
              </div>
              <button
                onClick={() => handleTabChange('mahapanchayat-surveys')}
                className="px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition flex items-center gap-2 border border-blue-200 shadow-sm cursor-pointer"
              >
                <span>📊</span>
                <span>{currentLanguage === 'en' ? 'View Formal Surveys' : 'औपचारिक सर्वेक्षण देखें'}</span>
              </button>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="polls" />
          </div>
        )}

        {/* 6. CURRENT AGENDA */}
        {currentTab === 'mahapanchayat-agenda' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                <span className="p-2 bg-purple-50 rounded-lg text-purple-600"><MessageSquare className="w-6 h-6" /></span>
                <span>{currentLanguage === 'en' ? 'Current Agenda & Reform Proposals' : 'वर्तमान एजेंडा एवं सुधार प्रस्ताव'}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {currentLanguage === 'en' ? 'Submit new proposals for upcoming Mahapanchayat sessions or discuss active community agendas.' : 'आगामी महापंचायत बैठकों के लिए नए प्रस्ताव प्रस्तुत करें या सक्रिय सामाजिक विषयों पर चर्चा करें।'}
              </p>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="agendas" />
          </div>
        )}

        {/* 7. APPROVED RESOLUTIONS */}
        {currentTab === 'mahapanchayat-resolutions' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex items-center justify-between flex-wrap gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                  <span className="p-2 bg-amber-50 rounded-lg text-amber-600"><FileCheck className="w-6 h-6" /></span>
                  <span>{currentLanguage === 'en' ? 'Approved Resolutions & Decision Archive' : 'पारित प्रस्ताव एवं निर्णय अभिलेख'}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {currentLanguage === 'en' ? 'Browse official binding resolutions passed by the National Mahapanchayat with full vote breakdown.' : 'राष्ट्रीय महापंचायत द्वारा पारित आधिकारिक प्रस्तावों एवं मतदान परिणामों की पूरी सूची देखें।'}
                </p>
              </div>
              <button
                onClick={() => handleTabChange('mahapanchayat-progress')}
                className="px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold transition flex items-center gap-2 border border-amber-200 shadow-sm cursor-pointer"
              >
                <span>📈</span>
                <span>{currentLanguage === 'en' ? 'Track Implementation' : 'क्रियान्वयन प्रगति देखें'}</span>
              </button>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="archive" />
          </div>
        )}

        {/* 8. RESOLUTION PROGRESS */}
        {currentTab === 'mahapanchayat-progress' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                <span className="p-2 bg-teal-50 rounded-lg text-teal-600"><TrendingUp className="w-6 h-6" /></span>
                <span>{currentLanguage === 'en' ? 'Resolution Implementation Tracker' : 'प्रस्ताव क्रियान्वयन निगरानी'}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {currentLanguage === 'en' ? 'Monitor live ground-level progress, responsible committees, and completion percentages of approved resolutions.' : 'पारित प्रस्तावों की जमीनी प्रगति, जिम्मेदार समितियों और पूर्णता प्रतिशत की लाइव निगरानी करें।'}
              </p>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="implementation" />
          </div>
        )}

        {/* 9. COMMITTEES */}
        {currentTab === 'mahapanchayat-committees' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-serif font-extrabold text-[#0B132B] flex items-center gap-3">
                <span className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><Building2 className="w-6 h-6" /></span>
                <span>{currentLanguage === 'en' ? 'Mahapanchayat Committees' : 'महापंचायत समितियां'}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {currentLanguage === 'en' ? 'Explore specialized committees responsible for education, legal aid, social reforms, finance, and youth welfare.' : 'शिक्षा, कानूनी सहायता, समाज सुधार, वित्त और युवा कल्याण के लिए जिम्मेदार विशेष समितियों की जानकारी लें।'}
              </p>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="committees" />
          </div>
        )}

        {/* 10. COMMITTEE REPORTS */}
        {currentTab === 'mahapanchayat-reports' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#004B23] flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>{currentLanguage === 'en' ? 'Committee Reports & Official Notifications' : 'समिति रिपोर्ट एवं आधिकारिक सूचनाएं'}</span>
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {currentLanguage === 'en' ? 'Read periodic inspection reports, financial audits, and official notifications issued by Mahapanchayat committees.' : 'महापंचायत समितियों द्वारा जारी समय-समय की निरीक्षण रिपोर्ट, वित्तीय ऑडिट और आधिकारिक सूचनाएं पढ़ें।'}
              </p>
            </div>
            <MahapanchayatSystem currentLanguage={currentLanguage} defaultTab="reports_notif" />
          </div>
        )}

        {/* 11. ANNUAL REVIEWS */}
        {currentTab === 'mahapanchayat-reviews' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-pink-50 text-pink-700 px-4 py-1.5 rounded-full border border-pink-100">
                📅 {currentLanguage === 'en' ? 'Social Audit & Performance' : 'सामाजिक ऑडिट एवं समीक्षा'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Annual Governance Reviews & Audit' : currentLanguage === 'ur' ? 'سالانہ انتظامی جائزہ اور آڈٹ' : 'वार्षिक शासन समीक्षा एवं ऑडिट'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Comprehensive year-on-year evaluation of Mahapanchayat resolutions, financial transparency, educational disbursements, and community welfare impact.'
                  : 'महापंचायत प्रस्तावों, वित्तीय पारदर्शिता, शैक्षिक सहयोग और सामुदायिक कल्याण प्रभाव का वर्ष-दर-वर्ष विस्तृत मूल्यांकन।'}
              </p>
            </div>

            {/* Annual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  year: '2025 - 2026',
                  statusEn: 'Current Active Year',
                  statusHi: 'वर्तमान सक्रिय वर्ष',
                  highlightsEn: ['42 Active Resolutions Tracked', '₹1.5 Cr Education Fund Target', '18 State Chapters Onboarded', '100% Digital Ballot Transition'],
                  highlightsHi: ['42 सक्रिय प्रस्तावों की निगरानी', '₹1.5 करोड़ शिक्षा फंड लक्ष्य', '18 प्रदेश इकाइयां जुड़ीं', '100% डिजिटल मतदान बदलाव'],
                  color: 'border-[#F4C430] bg-white'
                },
                {
                  year: '2024 - 2025',
                  statusEn: 'Completed Audit Report',
                  statusHi: 'पूर्ण ऑडिट रिपोर्ट',
                  highlightsEn: ['38 Resolutions Passed', '₹1.1 Cr Scholarships Distributed', '450+ Dowry-Free Nikah Conducted', '92% Member Satisfaction'],
                  highlightsHi: ['38 प्रस्ताव पारित', '₹1.1 करोड़ छात्रवृत्ति वितरित', '450+ सादगीपूर्ण निकाह संपन्न', '92% सदस्य संतुष्टि'],
                  color: 'border-emerald-200 bg-white'
                },
                {
                  year: '2023 - 2024',
                  statusEn: 'Archived Review',
                  statusHi: 'पुराना समीक्षा रिकॉर्ड',
                  highlightsEn: ['Launch of E-Governance Portal', 'National Directory Survey Begun', 'Zonal Dispute Panels Established', '₹85 Lakh Relief Granted'],
                  highlightsHi: ['ई-गवर्नेंस पोर्टल का शुभारंभ', 'राष्ट्रीय डायरेक्टरी सर्वे शुरू', 'क्षेत्रीय सुलाह पैनल गठित', '₹85 लाख राहत राशि वितरित'],
                  color: 'border-blue-200 bg-white'
                }
              ].map((rev, idx) => (
                <div key={idx} className={`border p-6 sm:p-8 rounded-3xl space-y-5 shadow-sm flex flex-col justify-between ${rev.color}`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-mono font-extrabold text-[#004B23]">{rev.year}</span>
                      <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                        {currentLanguage === 'en' ? rev.statusEn : rev.statusHi}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B132B]">
                      {currentLanguage === 'en' ? `Annual Review Report ${rev.year}` : `वार्षिक समीक्षा रिपोर्ट ${rev.year}`}
                    </h3>
                    <ul className="space-y-2.5 pt-2">
                      {(currentLanguage === 'en' ? rev.highlightsEn : rev.highlightsHi).map((item, idx2) => (
                        <li key={idx2} className="text-xs text-gray-600 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => alert(currentLanguage === 'en' ? `Downloading Annual Report PDF for ${rev.year}...` : `${rev.year} की वार्षिक रिपोर्ट PDF डाउनलोड हो रही है...`)}
                    className="w-full mt-4 py-2.5 rounded-xl bg-[#004B23] hover:bg-emerald-800 text-[#FFD54A] font-bold text-xs transition flex items-center justify-center gap-2 border border-emerald-700 cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>{currentLanguage === 'en' ? 'Download Full PDF Report' : 'पूरी PDF रिपोर्ट डाउनलोड करें'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. GALLERY */}
        {currentTab === 'mahapanchayat-gallery' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full border border-cyan-100">
                🖼️ {currentLanguage === 'en' ? 'Visual Archives & Assemblies' : 'चित्र दीर्घा एवं ऐतिहासिक सभाएं'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Mahapanchayat Event & Photo Gallery' : currentLanguage === 'ur' ? 'مہاپنچایت تصویر گیلری' : 'महापंचायत कार्यक्रम एवं फोटो गैलरी'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Glimpses of National Delegates Conferences, State Summits, Social Reform Rallies, and Youth Leadership Workshops across India.'
                  : 'भारत भर में आयोजित राष्ट्रीय प्रतिनिधि सम्मेलनों, प्रदेश बैठकों, समाज सुधार रैलियों और युवा नेतृत्व कार्यशालाओं की झलकियां।'}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex justify-center flex-wrap gap-2">
              {[
                { id: 'all', labelEn: 'All Events', labelHi: 'सभी कार्यक्रम' },
                { id: 'national', labelEn: 'National Conventions', labelHi: 'राष्ट्रीय अधिवेशन' },
                { id: 'reforms', labelEn: 'Reform Rallies', labelHi: 'सुधार रैलियां' },
                { id: 'youth', labelEn: 'Youth & Awards', labelHi: 'युवा एवं सम्मान' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                    selectedGalleryCategory === cat.id
                      ? 'bg-[#004B23] text-[#FFD54A]'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {currentLanguage === 'en' ? cat.labelEn : cat.labelHi}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  cat: 'national',
                  titleEn: 'National Mahapanchayat Summit 2025 (Delhi)',
                  titleHi: 'राष्ट्रीय महापंचायत शिखर सम्मेलन 2025 (दिल्ली)',
                  date: 'Nov 2025',
                  loc: 'New Delhi',
                  img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
                },
                {
                  cat: 'reforms',
                  titleEn: 'Anti-Dowry & Simple Marriage Pledge Rally',
                  titleHi: 'दहेज मुक्त एवं सादगीपूर्ण विवाह संकल्प रैली',
                  date: 'Aug 2025',
                  loc: 'Jaipur, Rajasthan',
                  img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
                },
                {
                  cat: 'youth',
                  titleEn: 'National Youth Leadership & Scholarship Summit',
                  titleHi: 'राष्ट्रीय युवा नेतृत्व एवं स्कॉलरशिप सम्मान',
                  date: 'Jan 2026',
                  loc: 'Lucknow, UP',
                  img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
                },
                {
                  cat: 'national',
                  titleEn: 'Zonal Delegates Council & Legal Rights Workshop',
                  titleHi: 'क्षेत्रीय प्रतिनिधि परिषद एवं कानूनी अधिकार संगोष्ठी',
                  date: 'Dec 2025',
                  loc: 'Bhopal, MP',
                  img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
                },
                {
                  cat: 'reforms',
                  titleEn: 'Community Educational Relief Distribution Camp',
                  titleHi: 'सामुदायिक शिक्षा सहायता वितरण शिविर',
                  date: 'Sep 2025',
                  loc: 'Patna, Bihar',
                  img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
                },
                {
                  cat: 'youth',
                  titleEn: 'All India Rangrej Entrepreneurship Conclave',
                  titleHi: 'ऑल इंडिया रंगरेज़ उद्यमिता महासम्मेलन',
                  date: 'Feb 2026',
                  loc: 'Ahmedabad, Gujarat',
                  img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
                }
              ]
                .filter((item) => selectedGalleryCategory === 'all' || item.cat === selectedGalleryCategory)
                .map((photo, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group hover:border-emerald-300 transition">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={photo.img}
                        alt={photo.titleEn}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-[#004B23] border border-emerald-100 shadow-sm">
                        📍 {photo.loc}
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-mono text-gray-500">📅 {photo.date}</span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-emerald-700 transition">
                        {currentLanguage === 'en' ? photo.titleEn : photo.titleHi}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* 13. DOCUMENTS */}
        {currentTab === 'mahapanchayat-documents' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full border border-yellow-100">
                📂 {currentLanguage === 'en' ? 'Official Repository & Charters' : 'आधिकारिक दस्तावेज़ एवं रिपोर्ट'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Mahapanchayat Documents Repository' : currentLanguage === 'ur' ? 'مہاپنچایت دستاویزات کا خزانہ' : 'महापंचायत दस्तावेज़ एवं रिपोर्ट रिपॉजिटरी'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Download official constitutions, meeting minutes, resolution charters, RTI guidebooks, and standard forms for community governance.'
                  : 'सामुदायिक शासन के लिए आधिकारिक संविधान, बैठक कार्यवृत्त, प्रस्ताव चार्टर, RTI मार्गदर्शिका और मानक फॉर्म डाउनलोड करें।'}
              </p>
            </div>

            {/* Documents List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  titleEn: 'All India Rangrej Samaj Constitution (Revised Edition 2025)',
                  titleHi: 'ऑल इंडिया रंगरेज़ समाज संविधान (संशोधित संस्करण 2025)',
                  size: '4.8 MB',
                  type: 'PDF Document',
                  icon: '📜',
                  badge: 'Primary Charter'
                },
                {
                  titleEn: 'Standard Mahapanchayat Resolution Charter & Rules of Procedure',
                  titleHi: 'मानक महापंचायत प्रस्ताव चार्टर एवं कार्यप्रणाली नियमावली',
                  size: '2.1 MB',
                  type: 'PDF Handbook',
                  icon: '⚖️',
                  badge: 'Governance'
                },
                {
                  titleEn: 'National Socio-Economic Census Summary Report',
                  titleHi: 'राष्ट्रीय सामाजिक-आर्थिक जनगणना सारांश रिपोर्ट',
                  size: '6.5 MB',
                  type: 'Data Report',
                  icon: '📊',
                  badge: 'Census Data'
                },
                {
                  titleEn: 'RTI Guidance Handbook for Community Citizens',
                  titleHi: 'नागरिकों के लिए सूचना का अधिकार (RTI) मार्गदर्शन पुस्तिका',
                  size: '1.9 MB',
                  type: 'Legal Guide',
                  icon: '📋',
                  badge: 'Legal Aid'
                },
                {
                  titleEn: 'Local Dispute Settlement & Mediation Protocol Manual',
                  titleHi: 'स्थानीय विवाद समाधान एवं सुलाह समिति प्रोटोकॉल मैनुअल',
                  size: '3.2 MB',
                  type: 'Protocol Doc',
                  icon: '🤝',
                  badge: 'Mediation'
                },
                {
                  titleEn: 'Committee Terms of Reference (ToR) & Delegation Powers',
                  titleHi: 'समिति अधिकार क्षेत्र एवं कार्य आवंटन नियमावली',
                  size: '2.4 MB',
                  type: 'Official Charter',
                  icon: '🏛️',
                  badge: 'Committees'
                }
              ].map((doc, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:border-emerald-300 transition flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl p-3 bg-gray-50 rounded-xl border border-gray-100 shrink-0">
                      {doc.icon}
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004B23] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                        {doc.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B132B] mt-1">
                        {currentLanguage === 'en' ? doc.titleEn : doc.titleHi}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>📄 {doc.type}</span>
                        <span>•</span>
                        <span>💾 {doc.size}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(currentLanguage === 'en' ? `Downloading ${doc.titleEn}...` : `${doc.titleHi} डाउनलोड हो रहा है...`)}
                    className="p-3 rounded-xl bg-[#004B23] hover:bg-emerald-800 text-[#FFD54A] transition shrink-0 cursor-pointer border border-emerald-700 shadow-sm"
                    title={currentLanguage === 'en' ? 'Download Document' : 'दस्तावेज़ डाउनलोड करें'}
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MahapanchayatHub;
