import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, ShieldCheck, Lock, Eye, EyeOff, Search, Filter, CheckCircle2, 
  AlertCircle, Award, Sparkles, User, Users, FileText, Download, Upload, 
  Phone, Video, MessageSquare, Calendar, Clock, ChevronRight, ChevronLeft, 
  RefreshCw, Sliders, Check, X, Share2, Bookmark, Flag, ShieldAlert, 
  BarChart2, TrendingUp, Bell, Key, Briefcase, MapPin, GraduationCap, 
  DollarSign, Activity, HelpCircle, CheckCircle
} from 'lucide-react';
import { Language } from '../types';
import ReCAPTCHA from 'react-google-recaptcha';

interface SecondMarriagePortalProps {
  currentLanguage: Language;
}

// Mock profiles with AI Compatibility Score and Second Marriage specific attributes
interface SecondMarriageProfile {
  id: string;
  nameEn: string;
  nameHi: string;
  nameUr: string;
  gender: 'F' | 'M';
  age: number;
  heightCm: number;
  category: 'Widow Bride' | 'Widow Groom' | 'Divorced Bride' | 'Divorced Groom' | 'Khula Completed' | 'Annulled Marriage' | 'Special Cases' | 'Single Parent';
  previousStatus: 'Widow' | 'Widower' | 'Divorced' | 'Khula Completed' | 'Annulled';
  childrenCount: number;
  childrenLivingWith: 'Self' | 'Other Parent' | 'Grandparents' | 'None';
  readyToAcceptChildren: boolean;
  education: string;
  occupation: string;
  income: string;
  district: string;
  state: string;
  photoUrl: string;
  aiScore: number;
  aiBreakdown: string[];
  isVerified: boolean;
  adminApproved: boolean;
  privacyMask: {
    hideName: boolean;
    blurPhoto: boolean;
    hidePhone: boolean;
    hideAddress: boolean;
    showInitialsOnly: boolean;
    contactAfterInterestOnly: boolean;
  };
  shortBioEn: string;
  shortBioHi: string;
}

const initialProfiles: SecondMarriageProfile[] = [
  {
    id: 'SMP-2026-841',
    nameEn: 'Sultana Ahmed (Z. A.)',
    nameHi: 'सुलताना अहमद (Z. A.)',
    nameUr: 'سلطانہ احمد',
    gender: 'F',
    age: 31,
    heightCm: 162,
    category: 'Widow Bride',
    previousStatus: 'Widow',
    childrenCount: 1,
    childrenLivingWith: 'Self',
    readyToAcceptChildren: true,
    education: 'M.Sc Biochemistry, B.Ed',
    occupation: 'Senior High School Faculty',
    income: '₹ 8.5 Lakhs / Annum',
    district: 'Bhopal',
    state: 'Madhya Pradesh',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    aiScore: 95,
    aiBreakdown: ['99% Educational Synergy', '94% Family Values & Deen', '92% Lifestyle & Parenting Alignment'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: true, hidePhone: true, hideAddress: true, showInitialsOnly: false, contactAfterInterestOnly: true },
    shortBioEn: 'Dignified and compassionate educator seeking a mature, understanding life partner with strong family values. Respects traditional Islamic ethos and open to accepting partner children.',
    shortBioHi: 'गरिमामयी और संवेदनशील शिक्षिका, पारिवारिक मूल्यों के साथ एक परिपक्व और समझदार जीवनसाथी की तलाश में। पारंपरिक इस्लामी आचार विचार और जीवनसाथी के बच्चों को अपनाने हेतु तैयार।'
  },
  {
    id: 'SMP-2026-902',
    nameEn: 'Mohd. Imran Rangrez',
    nameHi: 'मो. इमरान रंगरेज',
    nameUr: 'محمد عمران رنگریز',
    gender: 'M',
    age: 36,
    heightCm: 178,
    category: 'Widow Groom',
    previousStatus: 'Widower',
    childrenCount: 1,
    childrenLivingWith: 'Self',
    readyToAcceptChildren: true,
    education: 'B.Tech Civil Engineering',
    occupation: 'Assistant Engineer (State PWD)',
    income: '₹ 14.2 Lakhs / Annum',
    district: 'Indore',
    state: 'Madhya Pradesh',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    aiScore: 89,
    aiBreakdown: ['92% Professional Stability', '88% Parenting Harmony', '87% Religious Compatibility'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: false, hidePhone: true, hideAddress: true, showInitialsOnly: false, contactAfterInterestOnly: true },
    shortBioEn: 'Responsible civil engineer and caring father. Seeking a cultured bride who values mutual respect, emotional stability, and harmonious family life.',
    shortBioHi: 'जिम्मेदार सिविल इंजीनियर और संवेदनशील पिता। एक संस्कारी वधु की तलाश जो आपसी सम्मान, भावनात्मक स्थिरता और पारिवारिक समरसता को महत्व दे।'
  },
  {
    id: 'SMP-2026-753',
    nameEn: 'Dr. Ayesha Siddiqui',
    nameHi: 'डॉ. आयशा सिद्दीकी',
    nameUr: 'ڈاکٹر عائشہ صدیقی',
    gender: 'F',
    age: 33,
    heightCm: 165,
    category: 'Khula Completed',
    previousStatus: 'Khula Completed',
    childrenCount: 0,
    childrenLivingWith: 'None',
    readyToAcceptChildren: true,
    education: 'MBBS, DGO (Gynecology)',
    occupation: 'Consultant Gynecologist',
    income: '₹ 18.0 Lakhs / Annum',
    district: 'Jaipur',
    state: 'Rajasthan',
    photoUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    aiScore: 92,
    aiBreakdown: ['96% Intellect & Profession', '91% Cultural Ethos', '89% Mutual Respect Score'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: true, hidePhone: true, hideAddress: true, showInitialsOnly: false, contactAfterInterestOnly: true },
    shortBioEn: 'Practicing gynecologist with a progressive mindset grounded in Islamic traditions. Khula completed amicably through Sharia Council. Looking for a well-educated professional.',
    shortBioHi: 'इस्लामी परंपराओं से जुड़ी और आधुनिक विचार रखने वाली महिला चिकित्सक। शरिया परिषद द्वारा सम्मानपूर्वक खुला संपन्न। उच्च शिक्षित जीवनसाथी की तलाश।'
  },
  {
    id: 'SMP-2026-614',
    nameEn: 'Tariq Anwar Khan',
    nameHi: 'तारिक अनवर खान',
    nameUr: 'طارق انور خان',
    gender: 'M',
    age: 39,
    heightCm: 174,
    category: 'Divorced Groom',
    previousStatus: 'Divorced',
    childrenCount: 2,
    childrenLivingWith: 'Self',
    readyToAcceptChildren: true,
    education: 'MBA Finance, B.Com',
    occupation: 'Senior Branch Manager (National Bank)',
    income: '₹ 16.5 Lakhs / Annum',
    district: 'Delhi NCR',
    state: 'Delhi',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    aiScore: 76,
    aiBreakdown: ['84% Economic Security', '75% Lifestyle Match', '70% Geographic Proximity'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: false, hidePhone: true, hideAddress: true, showInitialsOnly: false, contactAfterInterestOnly: true },
    shortBioEn: 'Senior banking professional residing in Delhi. Mutual legal divorce completed 3 years ago. Seeking a caring homemaker or working professional for a peaceful second innings.',
    shortBioHi: 'दिल्ली निवासी वरिष्ठ बैंकिंग अधिकारी। 3 वर्ष पूर्व आपसी सहमति से कानूनी तलाक संपन्न। जीवन की शांतिपूर्ण दूसरी पारी हेतु एक संवेदनशील जीवनसाथी की तलाश।'
  },
  {
    id: 'SMP-2026-550',
    nameEn: 'Saira Banu Rangrez',
    nameHi: 'सायरा बानो रंगरेज',
    nameUr: 'سائرہ بانو رنگریز',
    gender: 'F',
    age: 28,
    heightCm: 158,
    category: 'Annulled Marriage',
    previousStatus: 'Annulled',
    childrenCount: 0,
    childrenLivingWith: 'None',
    readyToAcceptChildren: true,
    education: 'M.A. English Literature',
    occupation: 'Content Strategist & Translator',
    income: '₹ 6.0 Lakhs / Annum',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    aiScore: 88,
    aiBreakdown: ['93% Personality Harmony', '87% Educational Background', '84% Family Background'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: true, hidePhone: true, hideAddress: true, showInitialsOnly: true, contactAfterInterestOnly: true },
    shortBioEn: 'Brief marriage annulled within 2 months due to non-compatibility. Gentle, articulate, and family-oriented girl from a respectable Rangrez family in Lucknow.',
    shortBioHi: 'असंगति के कारण 2 माह के भीतर विवाह शून्य। लखनऊ के सम्मानित रंगरेज परिवार की सुशील, सुशिक्षित और पारिवारिक मूल्यों वाली युवती।'
  },
  {
    id: 'SMP-2026-421',
    nameEn: 'Janab Rehan Ahmed',
    nameHi: 'जनाब रेहान अहमद',
    nameUr: 'جناب ریحان احمد',
    gender: 'M',
    age: 42,
    heightCm: 172,
    category: 'Single Parent',
    previousStatus: 'Widower',
    childrenCount: 2,
    childrenLivingWith: 'Self',
    readyToAcceptChildren: true,
    education: 'M.Com, Chartered Accountant (Inter)',
    occupation: 'Senior Financial Auditor',
    income: '₹ 15.0 Lakhs / Annum',
    district: 'Ahmedabad',
    state: 'Gujarat',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    aiScore: 91,
    aiBreakdown: ['95% Financial Maturity', '90% Parental Empathy', '88% Religious Devotion'],
    isVerified: true,
    adminApproved: true,
    privacyMask: { hideName: false, blurPhoto: false, hidePhone: true, hideAddress: true, showInitialsOnly: false, contactAfterInterestOnly: true },
    shortBioEn: 'Widower and dedicated father raising two daughters with love and Islamic morals. Seeking a virtuous lady who values companionship and family bonding.',
    shortBioHi: 'विधुर और समर्पित पिता, दो बेटियों का इस्लामिक संस्कारों के साथ पालन-पोषण। एक नेक और संस्कारी जीवनसाथी की तलाश जो परिवार को प्रेम से जोड़ सके।'
  }
];

export default function SecondMarriagePortal({ currentLanguage }: SecondMarriagePortalProps) {
  const [activeTab, setActiveTab] = useState<'explore' | 'wizard' | 'privacy' | 'communication' | 'verification' | 'admin'>('explore');
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [genderFilter, setGenderFilter] = useState<'ALL' | 'F' | 'M'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [profiles, setProfiles] = useState<SecondMarriageProfile[]>(initialProfiles);
  const [unlockedPhotos, setUnlockedPhotos] = useState<Record<string, boolean>>({});
  const [selectedProfileModal, setSelectedProfileModal] = useState<SecondMarriageProfile | null>(null);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  // Wizard state
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    name: '',
    gender: 'F',
    dob: '',
    education: 'Post Graduate',
    occupation: 'Professional / Corporate',
    district: '',
    state: '',
    previousStatus: 'Widow',
    reasonOptional: '',
    marriageDuration: '3 Years',
    childrenCount: '1',
    childrenLivingWith: 'Self',
    readyToAcceptPartnerChildren: true,
    futureFamilyPlanning: 'Open to discussion',
    guardianName: '',
    guardianRelation: 'Father',
    guardianPhone: '',
    privacyHideName: false,
    privacyBlurPhoto: true,
    privacyHidePhone: true,
    privacyShowInitialsOnly: false,
  });

  // Privacy Center state
  const [privacySettings, setPrivacySettings] = useState({
    hideName: false,
    blurPhoto: true,
    hidePhone: true,
    hideAddress: true,
    showInitialsOnly: false,
    contactAfterInterestOnly: true,
    privateProfileMode: false,
    invisibleBrowsing: false,
    documentPrivacy: true,
    adminVerifiedBadge: true
  });

  // Communication state
  const [activeChatTab, setActiveChatTab] = useState<'interests' | 'messages' | 'meetings'>('interests');
  const [interestRequests, setInterestRequests] = useState([
    { id: 'INT-101', fromName: 'Mohd. Imran Rangrez', fromId: 'SMP-2026-902', date: '04 July 2026', status: 'Pending Guardian Review', matchScore: '89%' },
    { id: 'INT-102', fromName: 'Janab Rehan Ahmed', fromId: 'SMP-2026-421', date: '02 July 2026', status: 'Mutual Interest Confirmed', matchScore: '91%' }
  ]);

  // Admin state
  const [adminSection, setAdminSection] = useState<'stats' | 'approvals' | 'reported' | 'audit'>('stats');

  const categoriesList = [
    { name: 'Widow Bride', labelHi: 'विधवा वधु', icon: '🌸', count: 142, color: 'from-emerald-900/40 to-teal-900/40 border-emerald-500/30' },
    { name: 'Widow Groom', labelHi: 'विधुर वर', icon: '🌿', count: 118, color: 'from-slate-900/60 to-emerald-950/40 border-slate-700' },
    { name: 'Divorced Bride', labelHi: 'तलाकशुदा वधु', icon: '🕊️', count: 165, color: 'from-amber-950/40 to-yellow-950/30 border-amber-500/30' },
    { name: 'Divorced Groom', labelHi: 'तलाकशुदा वर', icon: '🛡️', count: 134, color: 'from-indigo-950/40 to-slate-900/60 border-indigo-500/30' },
    { name: 'Khula Completed', labelHi: 'खुला संपन्न वधु', icon: '⚖️', count: 89, color: 'from-teal-950/50 to-emerald-900/40 border-teal-500/30' },
    { name: 'Annulled Marriage', labelHi: 'शून्य विवाह', icon: '✨', count: 48, color: 'from-purple-950/40 to-slate-900/60 border-purple-500/30' },
    { name: 'Special Cases', labelHi: 'विशेष परिस्थितियाँ', icon: '🤝', count: 62, color: 'from-rose-950/40 to-amber-950/30 border-rose-500/30' },
    { name: 'Single Parent', labelHi: 'एकल अभिभावक', icon: '👨‍👧', count: 110, color: 'from-green-950/50 to-slate-900/60 border-green-500/30' },
  ];

  const handleRequestUnblur = (id: string) => {
    alert(currentLanguage === 'en' ? 'Photo unlock request sent to the candidate guardian. You will be notified upon approval.' : 'फोटो देखने का अनुरोध अभिभावक को भेजा गया। स्वीकृति मिलने पर सूचित किया जाएगा।');
    setUnlockedPhotos(prev => ({ ...prev, [id]: true }));
  };

  const handleWizardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await captchaRef.current?.executeAsync();
    if (!token) return;

    alert(currentLanguage === 'en' ? '✨ Your Second Marriage Matrimonial Profile has been submitted successfully for Sharia & Guardian verification!' : '✨ आपका द्वितीय विवाह प्रोफाइल शरिया और अभिभावक सत्यापन हेतु सफलतापूर्वक जमा कर दिया गया है!');
    setActiveTab('explore');
  };

  const filteredProfiles = profiles.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (genderFilter !== 'ALL' && p.gender !== genderFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = p.nameEn.toLowerCase().includes(q) || p.nameHi.includes(q) || p.nameUr.includes(q);
      const matchDistrict = p.district.toLowerCase().includes(q) || p.state.toLowerCase().includes(q);
      const matchEdu = p.education.toLowerCase().includes(q) || p.occupation.toLowerCase().includes(q);
      return matchName || matchDistrict || matchEdu;
    }
    return true;
  });

  return (
    <div className="bg-[#070D18] text-gray-100 min-h-screen py-8 px-3 sm:px-6 lg:px-8 selection:bg-[#F4C430] selection:text-black">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TOP BRANDING BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0D2418] to-[#0B132B] border-2 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] p-6 sm:p-10 text-center relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-[#F4C430]/60 px-4 py-1.5 rounded-full shadow-inner">
              <Sparkles className="h-4 w-4 text-[#F4C430] animate-spin" />
              <span className="text-xs font-mono font-extrabold tracking-widest text-[#F4C430] uppercase">
                {currentLanguage === 'en' ? 'EXCLUSIVE COMMUNITY SUBSECTION • ENTERPRISE SAAS GRADE' : 'विशेष समाज विभाग • पूर्णतः सुरक्षित एवं गोपनीय'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white bg-gradient-to-r from-white via-amber-100 to-emerald-200 bg-clip-text text-transparent">
              {currentLanguage === 'en' ? 'Second Marriage' : currentLanguage === 'ur' ? 'دوسری شادی (شاندار اور باوقار)' : 'द्वितीय विवाह एवं पुनर्विवाह केंद्र'}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
              {currentLanguage === 'en'
                ? '“A respectful, verified and confidential matrimonial platform dedicated to widows, widowers, divorced individuals and special matrimonial cases.”'
                : '“विधवाओं, विधुरों, तलाकशुदा व्यक्तियों और विशेष वैवाहिक मामलों के लिए समर्पित एक सम्मानजनक, सत्यापित और पूर्णतः गोपनीय वैवाहिक मंच।”'}
            </p>

            {/* Sub-navigation Pills inside Second Marriage Portal */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {[
                { id: 'explore', labelEn: 'Explore & AI Match', labelHi: 'प्रोफाइल व AI मैच', icon: Sparkles },
                { id: 'wizard', labelEn: 'Smart Registration Wizard', labelHi: 'पंजीकरण विज़ार्ड', icon: User },
                { id: 'privacy', labelEn: 'Privacy Center', labelHi: 'गोपनीयता नियंत्रण', icon: Lock },
                { id: 'communication', labelEn: 'Secure Communication', labelHi: 'सुरक्षित संदेश केंद्र', icon: MessageSquare },
                { id: 'verification', labelEn: 'Verification & Safety', labelHi: 'सत्यापन व सुरक्षा', icon: ShieldCheck },
                { id: 'admin', labelEn: 'Admin Governance', labelHi: 'एडमिन डैशबोर्ड', icon: Sliders },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center space-x-2 cursor-pointer shadow-lg ${
                      isActive
                        ? 'bg-gradient-to-r from-[#004B23] to-emerald-700 text-[#FFD54A] border-2 border-[#FFD54A] shadow-[0_0_20px_rgba(255,213,74,0.3)] scale-105'
                        : 'bg-[#0E1A35]/80 hover:bg-[#14264E] text-gray-300 hover:text-white border border-gray-700/60'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-[#FFD54A]' : 'text-emerald-400'}`} />
                    <span>{currentLanguage === 'en' ? tab.labelEn : tab.labelHi}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: EXPLORE PROFILES & AI MATCH ENGINE
           ========================================================================= */}
        {activeTab === 'explore' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
            
            {/* Premium Categories Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-widest block">
                    {currentLanguage === 'en' ? 'SPECIALIZED MATRIMONIAL CATEGORIES' : 'विशेष वैवाहिक श्रेणियाँ'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    {currentLanguage === 'en' ? 'Select Marital Status Category' : 'वैवाहिक स्थिति के अनुसार चयन करें'}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                    selectedCategory === 'All' ? 'bg-[#F4C430] text-black border-[#F4C430]' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                  }`}
                >
                  {currentLanguage === 'en' ? 'Show All Categories' : 'सभी श्रेणियाँ देखें'}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                {categoriesList.map((cat, idx) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedCategory(isSelected ? 'All' : cat.name)}
                      className={`p-4 rounded-2xl bg-gradient-to-b ${cat.color} border transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] group relative overflow-hidden ${
                        isSelected ? 'ring-2 ring-[#F4C430] border-[#F4C430] bg-emerald-950/80' : ''
                      }`}
                    >
                      <div className="text-3xl mb-2 transform group-hover:scale-110 transition">{cat.icon}</div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-100 group-hover:text-[#F4C430] transition leading-tight">
                        {currentLanguage === 'en' ? cat.name : cat.labelHi}
                      </h4>
                      <div className="mt-3 pt-2 border-t border-white/10 w-full flex items-center justify-center space-x-1">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-black/40 px-2 py-0.5 rounded-full">
                          {cat.count} Active
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Match Engine Highlights Banner */}
            <div className="bg-gradient-to-r from-[#0A1A2F] via-[#0F2D1F] to-[#0A1A2F] p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-[#F4C430]/10 border border-[#F4C430]/40 px-3 py-1 rounded-full text-[#F4C430] text-xs font-bold font-mono">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>AI MATCH ENGINE 3.0 • SHARIA COMPLIANT COMPATIBILITY</span>
                </div>
                <h3 className="text-2xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? 'Intelligent Multi-Factor Match Recommendations' : 'एआई-संचालित बहु-आयामी अनुकूलता विश्लेषण'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Our proprietary algorithm computes compatibility across 12 vital dimensions: Age, Education, Religion, Community, Profession, Income, Lifestyle, Location, Children Status, Marital History, Partner Preferences, and Family Values.'
                    : 'हमारा एआई एल्गोरिदम 12 महत्वपूर्ण मापदंडों पर संगतता का विश्लेषण करता है: आयु, शिक्षा, धार्मिक मूल्य, पेशा, आय, जीवनशैली, बच्चे, पूर्व वैवाहिक इतिहास और पारिवारिक मूल्य।'}
                </p>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
                {[
                  { score: '95%', label: 'Top Compatibility', color: 'text-emerald-400 border-emerald-500' },
                  { score: '89%', label: 'High Synergy', color: 'text-[#F4C430] border-[#F4C430]' },
                  { score: '76%', label: 'Good Potential', color: 'text-teal-300 border-teal-500' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center bg-black/40 p-4 rounded-2xl border border-white/10 text-center w-28 sm:w-32 shadow-inner">
                    <div className={`text-2xl sm:text-3xl font-black font-mono ${item.color} border-b border-white/10 pb-1 w-full`}>
                      {item.score}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-2">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Search & Advanced Filters Toolbar */}
            <div className="bg-[#0E172B] p-5 sm:p-6 rounded-2xl border border-gray-800 space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Gender Pill Buttons */}
                <div className="flex items-center space-x-2 bg-black/40 p-1.5 rounded-xl border border-gray-800 w-full md:w-auto">
                  <button
                    onClick={() => setGenderFilter('ALL')}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                      genderFilter === 'ALL' ? 'bg-[#004B23] text-white shadow' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    All Profiles ({profiles.length})
                  </button>
                  <button
                    onClick={() => setGenderFilter('F')}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer flex items-center justify-center space-x-1 ${
                      genderFilter === 'F' ? 'bg-rose-900 text-white shadow border border-rose-500/50' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>🌸 Brides (वधु)</span>
                  </button>
                  <button
                    onClick={() => setGenderFilter('M')}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer flex items-center justify-center space-x-1 ${
                      genderFilter === 'M' ? 'bg-blue-900 text-white shadow border border-blue-500/50' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>🛡️ Grooms (वर)</span>
                  </button>
                </div>

                {/* Search Bar & Advanced Filter Toggle */}
                <div className="flex items-center space-x-3 w-full md:w-auto flex-1 md:max-w-md">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={currentLanguage === 'en' ? 'Search by name, district, education, or occupation...' : 'नाम, जिला, शिक्षा या व्यवसाय से खोजें...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-black/60 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430] transition"
                    />
                  </div>
                  <button
                    onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center space-x-1.5 shrink-0 cursor-pointer border ${
                      showFiltersPanel ? 'bg-[#F4C430] text-black border-[#F4C430]' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    <Sliders className="h-3.5 w-3.5" />
                    <span>{currentLanguage === 'en' ? 'Advanced Filters' : 'विस्तृत फिल्टर'}</span>
                  </button>
                </div>
              </div>

              {/* Expandable Advanced Filter Panel */}
              <AnimatePresence>
                {showFiltersPanel && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-4 border-t border-gray-800"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-4 bg-black/40 rounded-xl border border-gray-800 text-xs">
                      <div>
                        <label className="block text-gray-400 mb-1 font-bold">Age Range</label>
                        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white">
                          <option>All Ages (24 - 65+)</option>
                          <option>25 - 35 Years</option>
                          <option>36 - 45 Years</option>
                          <option>46 - 60 Years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1 font-bold">Children Status</label>
                        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white">
                          <option>Any Status</option>
                          <option>Without Children</option>
                          <option>With Children (Living With Self)</option>
                          <option>Children Living With Other Parent</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1 font-bold">Education Level</label>
                        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white">
                          <option>All Degrees</option>
                          <option>Doctorate / MD / MBBS</option>
                          <option>Engineering / B.Tech / MBA</option>
                          <option>Post Graduate / M.A. / M.Sc</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1 font-bold">State / District</label>
                        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white">
                          <option>All India & NRI</option>
                          <option>Madhya Pradesh (Bhopal, Indore)</option>
                          <option>Rajasthan (Jaipur, Jodhpur)</option>
                          <option>Delhi NCR & UP West</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1 font-bold">Verification Status</label>
                        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white">
                          <option>Verified Only ✔</option>
                          <option>All Profiles</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={() => alert('Applied advanced filtering across 12 matrimonial attributes!')}
                          className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold p-2 rounded-lg transition text-center cursor-pointer shadow"
                        >
                          Apply Search
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium Profile Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredProfiles.length === 0 ? (
                <div className="col-span-2 text-center py-16 bg-black/30 rounded-3xl border border-gray-800">
                  <AlertCircle className="h-12 w-12 text-[#F4C430] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white">No Profiles Found Matching Criteria</h4>
                  <p className="text-xs text-gray-400 mt-1">Try resetting your category or advanced search filters.</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setGenderFilter('ALL'); setSearchQuery(''); }}
                    className="mt-4 px-5 py-2 bg-[#F4C430] text-black font-bold text-xs rounded-xl cursor-pointer hover:bg-amber-400 transition"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                filteredProfiles.map((p) => {
                  const isUnlocked = unlockedPhotos[p.id] || !p.privacyMask.blurPhoto;
                  
                  return (
                    <div
                      key={p.id}
                      className="bg-gradient-to-br from-[#0D182E] to-[#0A1222] rounded-3xl border border-gray-800 hover:border-[#D4AF37]/60 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Top Golden Border Glow */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent opacity-40 group-hover:opacity-100 transition duration-500"></div>

                      <div className="flex flex-col sm:flex-row gap-5">
                        
                        {/* Profile Photo with Privacy Blur & Lock */}
                        <div className="w-full sm:w-40 h-48 relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 shrink-0">
                          <img
                            src={p.photoUrl}
                            alt={p.nameEn}
                            referrerPolicy="no-referrer"
                            className={`w-full h-full object-cover object-top transition duration-700 ${!isUnlocked ? 'blur-md filter scale-110 brightness-75' : 'group-hover:scale-105'}`}
                          />

                          {!isUnlocked && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center text-center p-3 space-y-2">
                              <div className="p-2 bg-[#F4C430]/20 rounded-full border border-[#F4C430]/50">
                                <Lock className="h-5 w-5 text-[#F4C430]" />
                              </div>
                              <span className="text-[10px] uppercase font-mono font-bold text-white tracking-widest">
                                {currentLanguage === 'en' ? 'PHOTO LOCKED' : 'फोटो लॉक है'}
                              </span>
                              <button
                                onClick={() => handleRequestUnblur(p.id)}
                                className="px-3 py-1.5 bg-gradient-to-r from-[#004B23] to-emerald-700 text-[#FFD54A] font-extrabold text-[10px] rounded-xl shadow hover:scale-105 transition flex items-center space-x-1 cursor-pointer"
                              >
                                <Eye className="h-3 w-3 text-[#FFD54A]" />
                                <span>{currentLanguage === 'en' ? 'Request View' : 'अनुमति लें'}</span>
                              </button>
                            </div>
                          )}

                          {isUnlocked && p.privacyMask.blurPhoto && (
                            <span className="absolute bottom-2 left-2 bg-[#004B23] text-[#FFD54A] font-mono font-bold text-[8px] px-2 py-0.5 rounded-md uppercase tracking-wider shadow">
                              UNLOCKED ✔
                            </span>
                          )}

                          {/* AI Score Badge overlay */}
                          <div className="absolute top-2 right-2 bg-[#0B132B]/90 border border-[#F4C430] text-[#F4C430] font-mono font-black text-xs px-2.5 py-1 rounded-xl shadow-lg flex items-center space-x-1">
                            <Sparkles className="h-3 w-3 animate-pulse" />
                            <span>{p.aiScore}% Match</span>
                          </div>
                        </div>

                        {/* Profile Info Details */}
                        <div className="flex-1 space-y-2.5 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-[10px] font-mono text-gray-400 bg-black/40 px-2.5 py-1 rounded-lg border border-gray-800">
                              {p.id}
                            </span>
                            <div className="flex items-center space-x-1.5">
                              <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-[#F4C430] border border-amber-500/30">
                                {p.category}
                              </span>
                              {p.isVerified && (
                                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800 flex items-center space-x-1">
                                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                                  <span>Verified</span>
                                </span>
                              )}
                            </div>
                          </div>

                          <h4 className="text-lg font-serif font-extrabold text-white truncate group-hover:text-[#F4C430] transition">
                            {currentLanguage === 'en' ? (p.privacyMask.showInitialsOnly ? p.nameEn.replace(/([A-Za-z]+)/g, '$1.') : p.nameEn) : p.nameHi}
                          </h4>

                          <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-xs text-gray-300">
                            <div className="flex items-center space-x-1.5 truncate">
                              <span className="text-gray-500 font-mono">Age:</span>
                              <strong className="text-gray-200">{p.age} Yrs ({p.heightCm}cm)</strong>
                            </div>
                            <div className="flex items-center space-x-1.5 truncate">
                              <span className="text-gray-500 font-mono">Status:</span>
                              <strong className="text-emerald-400">{p.previousStatus}</strong>
                            </div>
                            <div className="col-span-2 flex items-center space-x-1.5 truncate">
                              <GraduationCap className="h-3.5 w-3.5 text-[#F4C430] shrink-0" />
                              <span className="truncate">{p.education}</span>
                            </div>
                            <div className="col-span-2 flex items-center space-x-1.5 truncate">
                              <Briefcase className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                              <span className="truncate">{p.occupation} ({p.income})</span>
                            </div>
                            <div className="col-span-2 flex items-center space-x-1.5 truncate text-emerald-300 font-semibold">
                              <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              <span>{p.district}, {p.state}</span>
                            </div>
                          </div>

                          {/* Children & Acceptance Status */}
                          <div className="bg-black/40 p-2 rounded-xl border border-gray-800/80 text-[11px] text-gray-300 flex items-center justify-between">
                            <span>👶 Children: <strong className="text-white">{p.childrenCount} ({p.childrenLivingWith})</strong></span>
                            {p.readyToAcceptChildren && (
                              <span className="text-emerald-400 font-bold text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                                ✔ Accepts Children
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bio Snippet */}
                      <p className="text-xs text-gray-400 mt-4 line-clamp-2 italic bg-black/30 p-3 rounded-2xl border border-gray-800">
                        "{currentLanguage === 'en' ? p.shortBioEn : p.shortBioHi}"
                      </p>

                      {/* AI Synergy Breakdown Pills */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.aiBreakdown.map((synergy, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/60">
                            ⚡ {synergy}
                          </span>
                        ))}
                      </div>

                      {/* Action Button Toolbar */}
                      <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedProfileModal(p)}
                          className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition cursor-pointer flex items-center space-x-1"
                        >
                          <Eye className="h-3.5 w-3.5 text-[#F4C430]" />
                          <span>{currentLanguage === 'en' ? 'Full Preview' : 'पूरा विवरण देखें'}</span>
                        </button>

                        <div className="flex items-center space-x-2 flex-1 justify-end">
                          <button
                            onClick={() => alert(`Added ${p.nameEn} to your private favorites shortlist.`)}
                            className="p-2.5 bg-gray-800/80 hover:bg-rose-900/50 hover:text-rose-400 text-gray-400 rounded-xl transition cursor-pointer border border-gray-700"
                            title="Add to Favorites"
                          >
                            <Bookmark className="h-4 w-4" />
                          </button>
                          
                          <button
                            onClick={() => alert(`Initiating secure, Sharia-compliant mutual interest request for profile ${p.id}. A notification will be dispatched to their verified Guardian.`)}
                            className="px-5 py-2.5 bg-gradient-to-r from-[#004B23] to-emerald-700 hover:from-emerald-800 hover:to-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition cursor-pointer flex items-center space-x-1.5 border border-emerald-500/30 flex-1 justify-center max-w-[200px]"
                          >
                            <Heart className="h-4 w-4 text-[#FFD54A] fill-current" />
                            <span>{currentLanguage === 'en' ? 'Send Interest' : 'प्रस्ताव भेजें'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Profile Detail Modal */}
            <AnimatePresence>
              {selectedProfileModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#0B132B] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/60 relative my-8 text-gray-100 max-h-[90vh] overflow-y-auto"
                  >
                    <button
                      onClick={() => setSelectedProfileModal(null)}
                      className="absolute top-6 right-6 text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full cursor-pointer transition"
                    >
                      ✕
                    </button>

                    <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-gray-800 pb-6">
                      <img
                        src={selectedProfileModal.photoUrl}
                        alt={selectedProfileModal.nameEn}
                        referrerPolicy="no-referrer"
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-[#F4C430]/60 shadow-xl"
                      />
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-[#F4C430] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                            {selectedProfileModal.category}
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                            ✔ Guardian Verified
                          </span>
                        </div>
                        <h3 className="text-2xl font-serif font-black text-white">
                          {currentLanguage === 'en' ? selectedProfileModal.nameEn : selectedProfileModal.nameHi}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {selectedProfileModal.education} • {selectedProfileModal.occupation}
                        </p>
                        <p className="text-xs text-emerald-400 font-semibold">
                          📍 {selectedProfileModal.district}, {selectedProfileModal.state} | Income: {selectedProfileModal.income}
                        </p>
                      </div>
                    </div>

                    <div className="py-6 space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4C430] mb-2 font-mono">
                          {currentLanguage === 'en' ? 'AI Compatibility Breakdown (95% Match)' : 'एआई अनुकूलता विश्लेषण'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {selectedProfileModal.aiBreakdown.map((item, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs font-bold text-emerald-300 text-center">
                              ✨ {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/40 p-4 rounded-2xl border border-gray-800 text-xs">
                        <div>
                          <span className="text-gray-400 block font-mono">Previous Status:</span>
                          <strong className="text-white text-sm">{selectedProfileModal.previousStatus}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-mono">Children:</span>
                          <strong className="text-white text-sm">{selectedProfileModal.childrenCount} ({selectedProfileModal.childrenLivingWith})</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-mono">Accepts Partner Children:</span>
                          <strong className="text-emerald-400 text-sm">{selectedProfileModal.readyToAcceptChildren ? 'Yes ✔' : 'No'}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-mono">Age / Height:</span>
                          <strong className="text-white text-sm">{selectedProfileModal.age} Yrs / {selectedProfileModal.heightCm} cm</strong>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 font-mono">
                          {currentLanguage === 'en' ? 'Personal Bio & Expectations' : 'व्यक्तिगत परिचय और अपेक्षाएं'}
                        </h4>
                        <p className="text-sm text-gray-200 leading-relaxed bg-gray-900/80 p-4 rounded-2xl border border-gray-800 italic">
                          "{currentLanguage === 'en' ? selectedProfileModal.shortBioEn : selectedProfileModal.shortBioHi}"
                        </p>
                      </div>

                      {/* Guardian & Sharia Protocol Notice */}
                      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-start space-x-3 text-xs text-amber-200">
                        <ShieldCheck className="h-5 w-5 text-[#F4C430] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#F4C430] font-bold">Confidential Guardian Contact Protocol</strong>
                          <span>In accordance with Rangrez Community guidelines and Sharia privacy rules, direct phone numbers and residential addresses are released only after mutual interest approval between both family guardians.</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex items-center justify-end space-x-4">
                      <button
                        onClick={() => setSelectedProfileModal(null)}
                        className="px-5 py-2.5 rounded-xl text-gray-400 font-bold text-xs hover:bg-gray-800 transition cursor-pointer"
                      >
                        Close Preview
                      </button>
                      <button
                        onClick={() => {
                          alert(`Mutual interest sent to Guardian of ${selectedProfileModal.nameEn}!`);
                          setSelectedProfileModal(null);
                        }}
                        className="bg-gradient-to-r from-[#004B23] to-emerald-700 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs transition shadow-lg hover:scale-105 cursor-pointer flex items-center space-x-2"
                      >
                        <Heart className="h-4 w-4 text-[#FFD54A] fill-current" />
                        <span>Send Proposal Interest Now</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* =========================================================================
            TAB 2: SMART REGISTRATION WIZARD
           ========================================================================= */}
        {activeTab === 'wizard' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
            
            {/* Wizard Progress Bar */}
            <div className="bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-wider block">
                    {currentLanguage === 'en' ? 'MULTI-STEP ENTERPRISE REGISTRATION' : 'बहु-चरणीय सुरक्षित पंजीकरण'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                    {currentLanguage === 'en' ? `Step ${wizardStep} of 5: ` : `चरण ${wizardStep} / 5: `}
                    {wizardStep === 1 && (currentLanguage === 'en' ? 'Personal & Education Details' : 'व्यक्तिगत और शिक्षा विवरण')}
                    {wizardStep === 2 && (currentLanguage === 'en' ? 'Marital History & Status' : 'वैवाहिक इतिहास और स्थिति')}
                    {wizardStep === 3 && (currentLanguage === 'en' ? 'Children & Future Planning' : 'बच्चे और भविष्य की योजना')}
                    {wizardStep === 4 && (currentLanguage === 'en' ? 'Privacy Settings & Documents' : 'गोपनीयता सेटिंग्स और दस्तावेज़')}
                    {wizardStep === 5 && (currentLanguage === 'en' ? 'Final Review & Declaration' : 'अंतिम समीक्षा और घोषणा')}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-800 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Cloud Auto-Saved ✨</span>
                </div>
              </div>

              {/* Step indicator pills */}
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    onClick={() => step < wizardStep && setWizardStep(step)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      step === wizardStep ? 'bg-[#F4C430] shadow-[0_0_10px_#F4C430]' : step < wizardStep ? 'bg-emerald-500 cursor-pointer' : 'bg-gray-800'
                    }`}
                  ></div>
                ))}
              </div>

              {/* WIZARD FORM CONTENT */}
              <form onSubmit={handleWizardSubmit} className="space-y-6 pt-2">
                
                {/* STEP 1: PERSONAL & EDUCATION */}
                {wizardStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Candidate Full Name *</label>
                        <input
                          type="text"
                          required
                          value={wizardData.name}
                          onChange={(e) => setWizardData({ ...wizardData, name: e.target.value })}
                          placeholder="e.g. Smt. Fatima Banu"
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Gender *</label>
                        <select
                          value={wizardData.gender}
                          onChange={(e) => setWizardData({ ...wizardData, gender: e.target.value as any })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        >
                          <option value="F">Female (Bride Profile)</option>
                          <option value="M">Male (Groom Profile)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Highest Education *</label>
                        <input
                          type="text"
                          required
                          value={wizardData.education}
                          onChange={(e) => setWizardData({ ...wizardData, education: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Occupation / Profession *</label>
                        <input
                          type="text"
                          required
                          value={wizardData.occupation}
                          onChange={(e) => setWizardData({ ...wizardData, occupation: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">District / City *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Bhopal, Jaipur"
                          value={wizardData.district}
                          onChange={(e) => setWizardData({ ...wizardData, district: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: MARITAL HISTORY */}
                {wizardStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Previous Marital Status *</label>
                        <select
                          value={wizardData.previousStatus}
                          onChange={(e) => setWizardData({ ...wizardData, previousStatus: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        >
                          <option value="Widow">Widow (विधवा)</option>
                          <option value="Widower">Widower (विधुर)</option>
                          <option value="Divorce Completed">Divorce Completed (कानूनी तलाक संपन्न)</option>
                          <option value="Khula Completed">Khula Completed (खुला संपन्न)</option>
                          <option value="Marriage Annulled">Marriage Annulled (शून्य विवाह)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Duration of Previous Marriage *</label>
                        <input
                          type="text"
                          placeholder="e.g. 2 Years, 6 Months"
                          value={wizardData.marriageDuration}
                          onChange={(e) => setWizardData({ ...wizardData, marriageDuration: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">Reason / Context (Optional & Confidential) *</label>
                      <textarea
                        rows={3}
                        placeholder="Brief dignified context if you wish to share with verified guardians..."
                        value={wizardData.reasonOptional}
                        onChange={(e) => setWizardData({ ...wizardData, reasonOptional: e.target.value })}
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CHILDREN & FUTURE PLANNING */}
                {wizardStep === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Number of Children *</label>
                        <select
                          value={wizardData.childrenCount}
                          onChange={(e) => setWizardData({ ...wizardData, childrenCount: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        >
                          <option value="0">None (0 Children)</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                          <option value="3+">3 or more Children</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Children Living With *</label>
                        <select
                          value={wizardData.childrenLivingWith}
                          onChange={(e) => setWizardData({ ...wizardData, childrenLivingWith: e.target.value })}
                          className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F4C430] outline-none"
                        >
                          <option value="Self">Living with Self</option>
                          <option value="Other Parent">Living with Other Parent</option>
                          <option value="Grandparents">Living with Grandparents</option>
                          <option value="None">Not Applicable</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-black/40 p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
                      <div>
                        <strong className="text-sm text-white block">Ready to Accept Partner's Children?</strong>
                        <span className="text-xs text-gray-400">Shows your openness to harmonious mixed family bonding.</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={wizardData.readyToAcceptPartnerChildren}
                        onChange={(e) => setWizardData({ ...wizardData, readyToAcceptPartnerChildren: e.target.checked })}
                        className="w-5 h-5 rounded text-emerald-600 focus:ring-[#F4C430]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: PRIVACY SETTINGS & DOCUMENTS */}
                {wizardStep === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#F4C430] uppercase">Configure Privacy Locks & Guardian Contact</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/40 p-4 rounded-2xl border border-gray-800">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Guardian Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Janab Abdul Rahman (Father)"
                          required
                          value={wizardData.guardianName}
                          onChange={(e) => setWizardData({ ...wizardData, guardianName: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1.5">Guardian Phone (Hidden from Public) *</label>
                        <input
                          type="tel"
                          placeholder="+91 98XXX XXXXX"
                          required
                          value={wizardData.guardianPhone}
                          onChange={(e) => setWizardData({ ...wizardData, guardianPhone: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                        <span className="text-xs text-gray-200 font-medium">🔒 Blur Photograph to all general users (Unlock only upon Guardian request)</span>
                        <input
                          type="checkbox"
                          checked={wizardData.privacyBlurPhoto}
                          onChange={(e) => setWizardData({ ...wizardData, privacyBlurPhoto: e.target.checked })}
                          className="w-4 h-4 rounded text-emerald-600"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                        <span className="text-xs text-gray-200 font-medium">🛡️ Show Only Initials (e.g. S. A. instead of Sultana Ahmed)</span>
                        <input
                          type="checkbox"
                          checked={wizardData.privacyShowInitialsOnly}
                          onChange={(e) => setWizardData({ ...wizardData, privacyShowInitialsOnly: e.target.checked })}
                          className="w-4 h-4 rounded text-emerald-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: REVIEW & DECLARATION */}
                {wizardStep === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 bg-black/40 p-6 rounded-2xl border border-emerald-500/30">
                    <div className="flex items-center space-x-3 text-emerald-400">
                      <ShieldCheck className="h-8 w-8 text-[#F4C430] shrink-0" />
                      <div>
                        <h4 className="font-bold text-base text-white">Ready for Sharia & Guardian Verification</h4>
                        <p className="text-xs text-gray-400">By clicking Submit, you declare that all information is accurate and authorized by your family guardian.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-gray-900 p-4 rounded-xl">
                      <div><span className="text-gray-500 block">Name:</span> <strong className="text-white">{wizardData.name || 'Fatima Banu'}</strong></div>
                      <div><span className="text-gray-500 block">Status:</span> <strong className="text-emerald-400">{wizardData.previousStatus}</strong></div>
                      <div><span className="text-gray-500 block">Children:</span> <strong className="text-white">{wizardData.childrenCount}</strong></div>
                      <div><span className="text-gray-500 block">Photo Lock:</span> <strong className="text-[#F4C430]">{wizardData.privacyBlurPhoto ? 'Enabled ✔' : 'Disabled'}</strong></div>
                    </div>
                  </motion.div>
                )}

                {/* Wizard Navigation Buttons */}
                <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                  <ReCAPTCHA
                    ref={captchaRef}
                    size="invisible"
                    sitekey={(import.meta as any).env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                  />
                  {wizardStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setWizardStep(wizardStep - 1)}
                      className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold text-xs transition cursor-pointer flex items-center space-x-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous Step</span>
                    </button>
                  ) : <div></div>}

                  {wizardStep < 5 ? (
                    <button
                      type="button"
                      onClick={() => setWizardStep(wizardStep + 1)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#004B23] to-emerald-700 hover:from-emerald-800 text-[#FFD54A] font-extrabold text-xs transition cursor-pointer shadow-lg flex items-center space-x-1"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#F4C430] to-amber-500 hover:from-amber-400 text-black font-black text-sm transition cursor-pointer shadow-[0_0_25px_rgba(244,196,48,0.4)] flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Submit Verified Profile Now</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            TAB 3: PRIVACY CENTER
           ========================================================================= */}
        {activeTab === 'privacy' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-wider block">
                  {currentLanguage === 'en' ? 'ENTERPRISE PRIVACY CONTROLS' : 'उच्चतम गोपनीयता नियंत्रण केंद्र'}
                </span>
                <h3 className="text-2xl font-serif font-black text-white mt-1">
                  {currentLanguage === 'en' ? 'Granular Privacy & Anonymity Settings' : 'सुरक्षित गोपनीयता और पहचान संरक्षण'}
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'hideName', title: 'Hide Candidate Full Name', desc: 'Display only family lineage or anonymized identifier to unverified users.' },
                  { key: 'blurPhoto', title: 'Blur Photograph by Default', desc: 'Requires candidate or guardian approval before photo is unblurred for any suitor.' },
                  { key: 'hidePhone', title: 'Hide Direct Phone Numbers', desc: 'All initial communication is mediated safely through the verified portal desk.' },
                  { key: 'hideAddress', title: 'Hide Exact Residential Address', desc: 'Display only District and State until mutual guardian approval is achieved.' },
                  { key: 'showInitialsOnly', title: 'Show Initials Only (e.g. S. A.)', desc: 'High-security mode for corporate professionals and sensitive cases.' },
                  { key: 'contactAfterInterestOnly', title: 'Show Contact Only After Mutual Interest', desc: 'Zero spam guarantee. Contacts unlock only when both families click Accept.' },
                  { key: 'privateProfileMode', title: 'Private Profile Mode (Invisible Browsing)', desc: 'Your profile remains hidden from public search; only recommended to AI matches.' },
                  { key: 'documentPrivacy', title: 'Document Privacy Shield', desc: 'Legal decrees (Divorce / Khula / Death certificates) are encrypted and visible only to verification admins.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-gray-700 transition">
                    <div className="space-y-0.5 pr-4">
                      <h4 className="font-bold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => {
                        setPrivacySettings(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }));
                        alert(`Privacy rule "${item.title}" updated successfully!`);
                      }}
                      className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer shrink-0 ${
                        privacySettings[item.key as keyof typeof privacySettings] ? 'bg-emerald-600' : 'bg-gray-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        privacySettings[item.key as keyof typeof privacySettings] ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Preview Card */}
            <div className="bg-gradient-to-b from-[#0E1A35] to-[#0A1222] p-6 rounded-3xl border border-emerald-500/40 shadow-xl space-y-4 h-fit sticky top-6">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5 border-b border-gray-800 pb-3">
                <Eye className="h-4 w-4 text-[#F4C430]" />
                <span>Live Public Preview Card</span>
              </h4>
              
              <div className="p-5 rounded-2xl bg-black/60 border border-gray-800 space-y-4">
                <div className="w-full h-40 rounded-xl bg-gray-800 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                    alt="Preview"
                    className={`w-full h-full object-cover ${privacySettings.blurPhoto ? 'blur-md filter scale-110' : ''}`}
                  />
                  {privacySettings.blurPhoto && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center font-mono text-xs font-bold text-[#F4C430]">
                      🔒 PHOTO LOCKED
                    </div>
                  )}
                </div>

                <div>
                  <h5 className="font-serif font-black text-white text-lg">
                    {privacySettings.showInitialsOnly ? 'S. A. (Bhopal)' : privacySettings.hideName ? 'Verified Member #841' : 'Sultana Ahmed'}
                  </h5>
                  <p className="text-xs text-gray-400 mt-1">
                    {privacySettings.hideAddress ? '📍 District: Bhopal (Exact address hidden)' : '📍 Bhopal, Madhya Pradesh'}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-2">
                    {privacySettings.contactAfterInterestOnly ? '🛡️ Contact Mediated by Guardian Desk' : '📞 Direct Contact Unlocked'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            TAB 4: SECURE COMMUNICATION DESK
           ========================================================================= */}
        {activeTab === 'communication' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-wider block">
                  {currentLanguage === 'en' ? 'END-TO-END PROTECTED INTERACTION' : 'सुरक्षित और एनक्रिप्टेड संवाद केंद्र'}
                </span>
                <h3 className="text-2xl font-serif font-black text-white mt-1">
                  {currentLanguage === 'en' ? 'Mutual Interests & Guardian Desk' : 'पारिवारिक सहमति एवं संदेश केंद्र'}
                </h3>
              </div>
              <div className="flex space-x-2 bg-black/40 p-1 rounded-xl border border-gray-800 text-xs font-bold">
                <button
                  onClick={() => setActiveChatTab('interests')}
                  className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeChatTab === 'interests' ? 'bg-[#004B23] text-[#FFD54A]' : 'text-gray-400 hover:text-white'}`}
                >
                  Interests ({interestRequests.length})
                </button>
                <button
                  onClick={() => setActiveChatTab('messages')}
                  className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeChatTab === 'messages' ? 'bg-[#004B23] text-[#FFD54A]' : 'text-gray-400 hover:text-white'}`}
                >
                  Private Chat (1)
                </button>
                <button
                  onClick={() => setActiveChatTab('meetings')}
                  className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeChatTab === 'meetings' ? 'bg-[#004B23] text-[#FFD54A]' : 'text-gray-400 hover:text-white'}`}
                >
                  Video Meetings
                </button>
              </div>
            </div>

            {activeChatTab === 'interests' && (
              <div className="space-y-4">
                {interestRequests.map((req, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#F4C430] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                          ⚡ {req.matchScore} AI Match
                        </span>
                        <span className="text-xs text-gray-400 font-mono">Date: {req.date}</span>
                      </div>
                      <h4 className="font-bold text-base text-white">{req.fromName} <span className="text-xs text-gray-500">({req.fromId})</span></h4>
                      <p className="text-xs text-emerald-400 font-semibold">Status: {req.status}</p>
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto">
                      <button
                        onClick={() => alert(`Mutual Interest accepted! Guardian phone contact unblurred for ${req.fromName}.`)}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow cursor-pointer transition"
                      >
                        Accept & Unlock Contact
                      </button>
                      <button
                        onClick={() => alert('Proposal politely declined with complete privacy preservation.')}
                        className="px-4 py-2.5 bg-gray-800 hover:bg-rose-900/50 text-gray-300 hover:text-rose-400 font-bold text-xs rounded-xl cursor-pointer transition"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeChatTab === 'messages' && (
              <div className="bg-black/40 rounded-2xl border border-gray-800 p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl">
                  🔒
                </div>
                <h4 className="text-lg font-bold text-white">End-to-End Encrypted Sharia Chat Desk</h4>
                <p className="text-xs text-gray-400 max-w-lg mx-auto">
                  Direct conversation window between family guardians of Profile #SMP-2026-841 and #SMP-2026-421. All documents shared here are watermarked and copy-protected.
                </p>
                <div className="max-w-md mx-auto bg-gray-900/80 p-4 rounded-xl text-left space-y-3 text-xs">
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50 text-emerald-200">
                    <strong>Janab Rehan Ahmed (Guardian):</strong> Assalamu Alaikum. We have reviewed the biodata and would like to schedule a formal family telephone call.
                  </div>
                  <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 text-gray-200 text-right">
                    <strong>Your Guardian:</strong> Wa Alaikum Assalam. We welcome the proposal. Let us schedule a video meeting this Sunday at 5:00 PM.
                  </div>
                </div>
              </div>
            )}

            {activeChatTab === 'meetings' && (
              <div className="bg-black/40 rounded-2xl border border-gray-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#F4C430] bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                    🗓️ UPCOMING GUARDIAN MEETING
                  </span>
                  <h4 className="text-lg font-bold text-white">Sunday, 12 July 2026 • 5:00 PM IST</h4>
                  <p className="text-xs text-gray-400">Secure Video Conference Room (Hosted by Central Sharia Desk)</p>
                </div>
                <button
                  onClick={() => alert('Launching Secure Video Conference Room with recording locked...')}
                  className="px-6 py-3 bg-gradient-to-r from-[#F4C430] to-amber-500 text-black font-black text-xs uppercase tracking-wide rounded-xl shadow-[0_0_20px_rgba(244,196,48,0.3)] hover:scale-105 transition cursor-pointer flex items-center space-x-2"
                >
                  <Video className="h-4 w-4" />
                  <span>Join Secure Video Room</span>
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* =========================================================================
            TAB 5: VERIFICATION & SAFETY SHIELD
           ========================================================================= */}
        {activeTab === 'verification' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  {currentLanguage === 'en' ? 'MANDATORY DOCUMENT VERIFICATION' : 'अनिवार्य दस्तावेज़ सत्यापन'}
                </span>
                <h3 className="text-xl font-serif font-black text-white mt-1">
                  {currentLanguage === 'en' ? '10-Point Trust & Authenticity Checklist' : '10-सूत्रीय प्रमाणिकता जांच'}
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Government ID Proof (Aadhaar / Passport / Voter ID)', status: 'Verified ✔', color: 'text-emerald-400' },
                  { label: 'Community Lineage & Jamaat Verification', status: 'Verified ✔', color: 'text-emerald-400' },
                  { label: 'Guardian / Father Consent Verification', status: 'Verified ✔', color: 'text-emerald-400' },
                  { label: 'Death Certificate (for Widow / Widower profiles)', status: 'Uploaded & Verified ✔', color: 'text-emerald-400' },
                  { label: 'Legal Divorce Decree / Khula Sharia Certificate', status: 'Not Applicable', color: 'text-gray-500' },
                  { label: 'Marriage Annulment Proof (if applicable)', status: 'Not Applicable', color: 'text-gray-500' },
                  { label: 'OTP & Email Two-Factor Authentication', status: 'Active ✔', color: 'text-emerald-400' },
                  { label: 'Admin Moderation Approval Badge', status: 'Approved ✔', color: 'text-[#F4C430]' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-gray-800 text-xs">
                    <span className="text-gray-200 font-medium">{item.label}</span>
                    <span className={`font-mono font-bold ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Safety Engine Controls */}
            <div className="bg-[#0E172B] p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
                  {currentLanguage === 'en' ? 'AI FRAUD & SPAM PROTECTION ENGINE' : 'एआई सुरक्षा एवं धोखाधड़ी निवारण'}
                </span>
                <h3 className="text-xl font-serif font-black text-white mt-1">
                  {currentLanguage === 'en' ? '24x7 Real-time Safety Monitoring' : '24x7 वास्तविक समय सुरक्षा निगरानी'}
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-black/50 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>🛡️ AI Duplicate & Fake Profile Detection</span>
                    <span className="text-emerald-400">ACTIVE 99.9%</span>
                  </div>
                  <p className="text-gray-400">Automatic facial biometrics matching and phone number cross-verification prevent duplicate identities.</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/50 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>⚡ Rate Limiting & Anti-Scraping Shield</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <p className="text-gray-400">Prevents mass scraping of matrimonial biodatas and blocks suspicious IP addresses instantly.</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/50 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>🚩 One-Click Profile Reporting Desk</span>
                    <span className="text-amber-400">24h Response</span>
                  </div>
                  <p className="text-gray-400">Report any misbehavior or inaccurate information directly to the Central Sharia Governance Committee.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            TAB 6: ADMIN GOVERNANCE DASHBOARD
           ========================================================================= */}
        {activeTab === 'admin' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/50 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-wider block">
                    {currentLanguage === 'en' ? 'CENTRAL GOVERNANCE & MODERATION' : 'केंद्रीय प्रशासनिक नियंत्रण बोर्ड'}
                  </span>
                  <h3 className="text-2xl font-serif font-black text-white mt-1">
                    {currentLanguage === 'en' ? 'Second Marriage Admin Dashboard' : 'द्वितीय विवाह प्रबंधन डैशबोर्ड'}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => alert('Exporting all 482 Second Marriage verified profiles to Excel...')}
                    className="px-4 py-2 bg-[#004B23] hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center space-x-1.5 shadow"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Export Excel (.xlsx)</span>
                  </button>
                  <button
                    onClick={() => alert('Generating Administrative Audit PDF report...')}
                    className="px-4 py-2 bg-rose-900/80 hover:bg-rose-800 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center space-x-1.5 shadow"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Audit Report (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Admin Stat KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Total Active Profiles', value: '482', change: '+24 This Month', color: 'text-white border-gray-800' },
                  { label: 'Pending Approvals', value: '18', change: 'Needs Review', color: 'text-[#F4C430] border-amber-500/40' },
                  { label: 'Successful Nikahs', value: '94', change: 'Verified Unions', color: 'text-emerald-400 border-emerald-500/40' },
                  { label: 'Reported / Blocked', value: '3', change: 'Zero Tolerance', color: 'text-rose-400 border-rose-500/40' },
                ].map((stat, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl bg-black/40 border ${stat.color} space-y-1`}>
                    <span className="text-xs text-gray-400 font-medium block">{stat.label}</span>
                    <div className="text-3xl font-serif font-black">{stat.value}</div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 block pt-1">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Verification Queue Table Simulator */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-mono font-bold text-[#F4C430] uppercase">Pending Document Verification Queue</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-gray-800 text-gray-400 font-mono">
                        <th className="py-3 px-4">Candidate ID</th>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Document Uploaded</th>
                        <th className="py-3 px-4 text-right">Moderation Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60">
                      {[
                        { id: 'SMP-2026-991', name: 'Zainab Bibi', cat: 'Widow Bride', doc: 'Death Certificate + Father Consent' },
                        { id: 'SMP-2026-992', name: 'Mohd. Shakir Khan', cat: 'Divorced Groom', doc: 'Mutual Divorce Order (Family Court)' },
                        { id: 'SMP-2026-993', name: 'Dr. Fareeda Banu', cat: 'Khula Completed', doc: 'Sharia Council Khula Decree' }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/5 transition">
                          <td className="py-3 px-4 font-mono text-gray-300 font-bold">{row.id}</td>
                          <td className="py-3 px-4 font-bold text-white">{row.name}</td>
                          <td className="py-3 px-4 text-emerald-400">{row.cat}</td>
                          <td className="py-3 px-4 text-gray-300">{row.doc}</td>
                          <td className="py-3 px-4 text-right space-x-2">
                            <button
                              onClick={() => alert(`Approved profile ${row.id} and issued Verified Badge!`)}
                              className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg transition cursor-pointer"
                            >
                              Approve ✔
                            </button>
                            <button
                              onClick={() => alert(`Requested re-upload of unclear documents for ${row.id}.`)}
                              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-lg transition cursor-pointer"
                            >
                              Query
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
