import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Home, 
  Phone, 
  Compass, 
  Users, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  AlertCircle, 
  ArrowUpRight, 
  Star, 
  Info,
  Mail,
  User,
  Layers,
  Map,
  X,
  FileText
} from 'lucide-react';
import { ENGINEERING_COLLEGES, EngineeringCollegeProfile } from '../data/engineeringCollegesData';

interface EngineeringCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'aicte',
    name: 'AICTE',
    fullName: 'All India Council for Technical Education',
    website: 'https://www.aicte-india.org/',
    description: {
      en: 'The statutory body and national-level council for technical education, under the Department of Higher Education.',
      ur: 'اعلیٰ تعلیم کے محکمہ کے تحت تکنیکی تعلیم کے لیے قانونی ادارہ اور قومی سطح کی کونسل۔',
      hi: 'उच्च शिक्षा विभाग के तहत तकनीकी शिक्षा के लिए वैधानिक निकाय और राष्ट्रीय स्तर की परिषद।'
    },
    roles: ['Approval of new technical institutions', 'Introduction of new courses', 'Approval of intake capacity']
  },
  {
    id: 'nba',
    name: 'NBA',
    fullName: 'National Board of Accreditation',
    website: 'https://www.nbaind.org/',
    description: {
      en: 'An autonomous body that accredits professional programs (engineering, management, pharmacy) offered by Indian institutions.',
      ur: 'ایک خود مختار ادارہ جو ہندوستانی اداروں کے ذریعہ پیش کردہ پیشہ ورانہ پروگراموں کی توثیق کرتا ہے۔',
      hi: 'एक स्वायत्त निकाय जो भारतीय संस्थानों द्वारा प्रदान किए जाने वाले व्यावसायिक कार्यक्रमों को मान्यता देता है।'
    },
    roles: ['Quality assurance of engineering courses', 'Outcome-based education evaluation', 'Tier-I and Tier-II accreditation']
  },
  {
    id: 'josaa',
    name: 'JoSAA',
    fullName: 'Joint Seat Allocation Authority',
    website: 'https://josaa.nic.in/',
    description: {
      en: 'Manages and regulates joint seat allocation for admissions to IITs, NITs, IIITs, and other GFTIs.',
      ur: 'آئی آئی ٹیز، این آئی ٹیز اور ٹرپل آئی ٹیز میں داخلوں کے لیے مشترکہ سیٹوں کی تقسیم کا انتظام کرتا ہے۔',
      hi: 'IITs, NITs, IIITs और अन्य GFTIs में प्रवेश के लिए संयुक्त सीट आवंटन का प्रबंधन और नियमन करता है।'
    },
    roles: ['Centralized seat allocation', 'JEE Advanced and JEE Main counselling coordination', 'Seat withdrawal and refund rules']
  }
];

const COUNSELLING_BOARDS = [
  { name: 'Joint Seat Allocation Authority (JoSAA)', url: 'https://josaa.nic.in/', desc: 'Admissions to all IITs, NITs, IIITs, and central government funded technical institutes.' },
  { name: 'Central Seat Allocation Board (CSAB)', url: 'https://csab.nic.in/', desc: 'Conducts special counselling rounds for vacant seats in NITs, IIITs, and GFTIs after JoSAA.' },
  { name: 'DTE Maharashtra CET Counselling', url: 'https://cetcell.mahacet.org/', desc: 'State-level counselling for engineering admissions in COEP, VJTI, and other Maharashtra colleges.' },
  { name: 'UPTAC Uttar Pradesh (AKTU)', url: 'https://uptac.admissions.nic.in/', desc: 'Engineering admissions in Dr. APJ Abdul Kalam Technical University and affiliated private/govt colleges.' },
  { name: 'KEA Karnataka (KCET/COMEDK)', url: 'https://cetonline.karnataka.gov.in/kea/', desc: 'Undergraduate professional engineering seats counselling for Karnataka students.' },
  { name: 'TNEA Tamil Nadu Engineering Admissions', url: 'https://tneaonline.org/', desc: 'Single-window online counselling system for admissions to engineering colleges in Tamil Nadu.' }
];

export default function EngineeringCollegesDirectory({ currentLanguage = 'en' }: EngineeringCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'minority' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States & UTs');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedFeeCategory, setSelectedFeeCategory] = useState('All');
  const [selectedNirf, setSelectedNirf] = useState('All');
  const [hasHostelOnly, setHasHostelOnly] = useState(false);
  const [hasPlacementCellOnly, setHasPlacementCellOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'nirf' | 'alphabetical' | 'fee-asc' | 'fee-desc' | 'established-asc' | 'established-desc'>('nirf');

  const [selectedCollege, setSelectedCollege] = useState<EngineeringCollegeProfile | null>(null);

  // States list extraction
  const statesList = useMemo(() => {
    const states = new Set(ENGINEERING_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    let result = [...ENGINEERING_COLLEGES];

    if (activeTab === 'minority') {
      result = result.filter(c => c.ownership === 'Minority');
    }

    // Search Query (Name, District, State, City, University, Branches)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        (c.city && c.city.toLowerCase().includes(q)) ||
        c.affiliatedUniversity.toLowerCase().includes(q) ||
        c.btechBranches.some(b => b.toLowerCase().includes(q))
      );
    }

    // State filter
    if (selectedState !== 'All States & UTs') {
      result = result.filter(c => c.state === selectedState);
    }

    // Type filter
    if (selectedType !== 'All') {
      result = result.filter(c => {
        if (selectedType === 'IIT') return c.name.startsWith('Indian Institute of Technology');
        if (selectedType === 'NIT') return c.name.startsWith('National Institute of Technology');
        if (selectedType === 'IIIT') return c.name.startsWith('Indian Institute of Information Technology') || c.name.startsWith('IIIT');
        return c.ownership === selectedType;
      });
    }

    // Branch filter
    if (selectedBranch !== 'All') {
      result = result.filter(c => c.btechBranches.some(b => b.includes(selectedBranch)));
    }

    // Fee range filter
    if (selectedFeeCategory !== 'All') {
      result = result.filter(c => {
        const feeStr = c.tuitionFees.replace(/[^0-9]/g, '');
        const fee = parseInt(feeStr) || 0;
        if (selectedFeeCategory === 'Under ₹50,000/yr') return fee < 50000;
        if (selectedFeeCategory === '₹50,000 - ₹1.5 Lakhs/yr') return fee >= 50000 && fee <= 150000;
        if (selectedFeeCategory === '₹1.5 Lakhs - ₹3 Lakhs/yr') return fee > 150000 && fee <= 300000;
        if (selectedFeeCategory === 'Above ₹3 Lakhs/yr') return fee > 300000;
        return true;
      });
    }

    // NIRF filter
    if (selectedNirf !== 'All') {
      result = result.filter(c => {
        const rank = parseInt(c.nirfRanking || '1000');
        if (selectedNirf === 'Top 25') return rank <= 25;
        if (selectedNirf === 'Top 50') return rank <= 50;
        if (selectedNirf === 'Top 100') return rank <= 100;
        if (selectedNirf === 'Top 200') return rank <= 200;
        return true;
      });
    }

    // Facilities toggles
    if (hasHostelOnly) {
      result = result.filter(c => c.facilities.includes('Hostel'));
    }
    if (hasPlacementCellOnly) {
      result = result.filter(c => c.hasPlacementCell);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'nirf') {
        const rA = parseInt(a.nirfRanking || '999');
        const rB = parseInt(b.nirfRanking || '999');
        return rA - rB;
      }
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'fee-asc') {
        const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        return feeA - feeB;
      }
      if (sortBy === 'fee-desc') {
        const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        return feeB - feeA;
      }
      if (sortBy === 'established-asc') {
        return a.yearEstablished - b.yearEstablished;
      }
      if (sortBy === 'established-desc') {
        return b.yearEstablished - a.yearEstablished;
      }
      return 0;
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedType, selectedBranch, selectedFeeCategory, selectedNirf, hasHostelOnly, hasPlacementCellOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedType('All');
    setSelectedBranch('All');
    setSelectedFeeCategory('All');
    setSelectedNirf('All');
    setHasHostelOnly(false);
    setHasPlacementCellOnly(false);
    setSortBy('nirf');
  };

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23] border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <GraduationCap className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Engineering Guidance Portal • National Database'
                  : currentLanguage === 'ur'
                  ? 'انجینئرنگ گائیڈنس پورٹل • قومی ڈیٹا بیس'
                  : 'इंजीनियरिंग मार्गदर्शन पोर्टल • राष्ट्रीय डेटाबेस'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {currentLanguage === 'en'
                  ? 'Live AICTE Approved & NBA Accredited Feeds'
                  : currentLanguage === 'ur'
                  ? 'اے آئی سی ٹی ای سے منظور شدہ اور این بی اے سند یافتہ'
                  : 'AICTE स्वीकृत एवं NBA प्रत्यायित लाइव फीड'}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Engineering Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی انجینئرنگ کالجز ڈائریکٹری'
              : 'राष्ट्रीय इंजीनियरिंग कॉलेज निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Access verified, direct-sourced engineering academic matrices, official fees, hostel availability, and direct counselling links across India. Empowering the community with transparent information to avoid unaccredited institutions.'
              : currentLanguage === 'ur'
              ? 'ہندوستان بھر کے انجینئرنگ کالجوں کی فیس، ہوسٹل، کٹ آف اور آفیشل کونسلنگ لنکس تک براہ راست رسائی حاصل کریں۔ ہماری برادری کو بااختیار بنانے کے لیے ایک جامع پورٹل۔'
              : 'भारत भर के इंजीनियरिंग कॉलेजों के शैक्षणिक विवरण, आधिकारिक शुल्क, छात्रावास उपलब्धता और काउंसलिंग लिंक तक सीधी पहुंच। छात्रों को सही मार्गदर्शन देने के लिए एक विश्वसनीय मंच।'}
          </p>

          {/* MAIN SUB-NAVIGATION TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setActiveTab('directory');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory'
                  ? 'bg-[#FFD54A] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'All Engineering Colleges'
                  : currentLanguage === 'ur'
                  ? 'تمام انجینئرنگ کالجز'
                  : 'सभी इंजीनियरिंग कॉलेज'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('minority');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'minority'
                  ? 'bg-[#004B23] text-[#FFD54A] scale-105 border-2 border-[#FFD54A]'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en'
                  ? 'Minority Engineering Institutions'
                  : currentLanguage === 'ur'
                  ? 'اقلیتی انجینئرنگ ادارے'
                  : 'अल्पसंख्यक इंजीनियरिंग संस्थान'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory'
                  ? 'bg-[#D4AF37] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'Official Regulatory Bodies (AICTE / NBA)'
                  : currentLanguage === 'ur'
                  ? 'سرکاری ریگولیٹری ادارے'
                  : 'आधिकारिक नियामक निकाय'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('counselling')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'counselling'
                  ? 'bg-[#D4AF37] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'JEE & State CET Counselling Portals'
                  : currentLanguage === 'ur'
                  ? 'جے ای ای اور اسٹیٹ کونسلنگ پورٹل'
                  : 'जेईई एवं राज्य काउंसलिंग पोर्टल'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. REGULATORY GUARANTEE BANNER */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900 font-medium">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Crucial Notice:</strong> This national directory is strictly filtered to only display recognized technical institutions holding active approval codes from AICTE and accredited divisions. Every listed college features direct verified source links.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Regulatory Verification</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {(activeTab === 'directory' || activeTab === 'minority') && (
          <div className="space-y-6">
            {/* MINORITY BANNER */}
            {activeTab === 'minority' && (
              <div className="bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#FFD54A]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-48 h-48 text-[#FFD54A]" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFD54A] text-[#0B132B] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>Special Segment • National Minority Engineering Institutions</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A] mb-2">
                    Minority Engineering Institutions of India
                  </h2>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    Explore recognized Muslim Minority and Christian Minority engineering colleges across India. Under Article 30(1) of the Constitution of India, minority technical institutes reserve up to 50% of their seats for respective minority candidates with relaxed cutoff matrices via official State/National counselling procedures.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ Integral University Lucknow</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ B.S. Abdur Rahman Crescent Chennai</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ Lords & Muffakham Jah Hyderabad</span>
                  </div>
                </div>
              </div>
            )}

            {/* SEARCH AND FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search engineering colleges by name, city, state, branch or affiliation...'
                        : currentLanguage === 'ur'
                        ? 'نام، شہر، ریاست، برانچ یا الحاق سے تلاش کریں...'
                        : 'कॉलेज नाम, शहर, राज्य, ब्रांच या संबद्धता से खोजें...'
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#004B23] text-sm font-medium transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#004B23] cursor-pointer"
                  >
                    <option value="nirf">Sort: NIRF Ranking</option>
                    <option value="alphabetical">Sort: Alphabetical</option>
                    <option value="fee-asc">Sort: Fee (Low to High)</option>
                    <option value="fee-desc">Sort: Fee (High to Low)</option>
                    <option value="established-asc">Sort: Established Year (Oldest)</option>
                    <option value="established-desc">Sort: Established Year (Newest)</option>
                  </select>

                  <button
                    onClick={resetFilters}
                    className="bg-stone-100 hover:bg-stone-200 text-stone-600 px-4 py-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Advanced Multi-Criteria Filter Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-stone-100">
                {/* 1. State */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">State & UT</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    {statesList.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Type / Ownership */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Institution Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    <option value="All">All Types</option>
                    <option value="IIT">IITs</option>
                    <option value="NIT">NITs</option>
                    <option value="IIIT">IIITs</option>
                    <option value="Government">Government Colleges</option>
                    <option value="Autonomous">Autonomous Colleges</option>
                    <option value="Private">Private Universities</option>
                    <option value="Deemed">Deemed Universities</option>
                  </select>
                </div>

                {/* 3. Branch */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Engineering Branch</label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    <option value="All">All Disciplines</option>
                    <option value="Computer Science">Computer Science & Engg</option>
                    <option value="Artificial Intelligence">AI & Data Science</option>
                    <option value="Electronics & Communication">Electronics (ECE)</option>
                    <option value="Electrical & Electronics">Electrical (EEE)</option>
                    <option value="Mechanical">Mechanical Engg</option>
                    <option value="Civil">Civil Engg</option>
                    <option value="Chemical">Chemical Engg</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Robotics">Robotics & Automation</option>
                  </select>
                </div>

                {/* 4. Fees */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Tuition Fees</label>
                  <select
                    value={selectedFeeCategory}
                    onChange={(e) => setSelectedFeeCategory(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    <option value="All">All Budgets</option>
                    <option value="Under ₹50,000/yr">Under ₹50,000 / yr</option>
                    <option value="₹50,000 - ₹1.5 Lakhs/yr">₹50,000 - ₹1.5 Lakhs / yr</option>
                    <option value="₹1.5 Lakhs - ₹3 Lakhs/yr">₹1.5 Lakhs - ₹3 Lakhs / yr</option>
                    <option value="Above ₹3 Lakhs/yr">Above ₹3 Lakhs / yr</option>
                  </select>
                </div>

                {/* 5. NIRF Rank */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">NIRF Ranking Range</label>
                  <select
                    value={selectedNirf}
                    onChange={(e) => setSelectedNirf(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    <option value="All">All NIRF Rankings</option>
                    <option value="Top 25">Top 25 National</option>
                    <option value="Top 50">Top 50 National</option>
                    <option value="Top 100">Top 100 National</option>
                    <option value="Top 200">Top 200 National</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap gap-4 pt-3 text-xs font-bold text-stone-700 items-center justify-start border-t border-stone-100">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasHostelOnly}
                    onChange={(e) => setHasHostelOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span>Hostel Accommodation Available</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPlacementCellOnly}
                    onChange={(e) => setHasPlacementCellOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span>Active Corporate Placement Cell</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNT */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="text-sm font-black text-stone-800">
                Showing <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Engineering Colleges
              </div>

              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>All colleges cross-referenced with live statutory regulatory database.</span>
              </div>
            </div>

            {/* COLLEGES GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No colleges match your filter selections</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try clearing some of your filters or broaden your search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#004B23] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#00381a] transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredColleges.map((college) => (
                    <motion.div
                      key={college.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#004B23]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Accent Header Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                        college.ownership === 'Government' || college.ownership === 'Autonomous'
                          ? 'bg-[#004B23]'
                          : college.ownership === 'Minority'
                          ? 'bg-[#D4AF37]'
                          : 'bg-indigo-600'
                      }`} />

                      <div>
                        {/* Upper Badges */}
                        <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                          <span className="inline-flex items-center gap-1.5 bg-[#0B132B] text-[#FFD54A] text-xs font-black uppercase px-2.5 py-1 rounded-xl shadow-xs">
                            <BookOpen className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>B.Tech / B.E</span>
                          </span>

                          <div className="flex items-center gap-1.5">
                            {college.ownership === 'Minority' && (
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-1 rounded-lg border border-amber-300">
                                ⭐ Minority
                              </span>
                            )}
                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${
                              college.ownership === 'Government' || college.ownership === 'Autonomous'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-purple-50 text-purple-800 border-purple-300'
                            }`}>
                              {college.ownership}
                            </span>
                          </div>
                        </div>

                        {/* College Info */}
                        <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 mb-1.5">
                          {college.name}
                        </h3>
                        <p className="text-xs text-stone-500 font-medium line-clamp-1 mb-3">
                          🎓 Affiliated to: {college.affiliatedUniversity}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#004B23] shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* Statutory Accreditation Status */}
                        <div className="flex flex-col gap-1 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/80 mb-3 text-[11px] font-bold text-stone-700">
                          <div className="flex items-center gap-1 text-emerald-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>AICTE Approved (State & National Intake Authorized)</span>
                          </div>
                          {college.nbaAccredited && (
                            <div className="flex items-center gap-1 text-blue-800">
                              <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>National Board of Accreditation (NBA) Certified</span>
                            </div>
                          )}
                        </div>

                        {/* Key Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/60 mb-4">
                          <div>
                            <span className="text-[10px] uppercase font-black text-stone-400 block">Est. Year</span>
                            <span className="font-bold text-stone-900 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[#004B23]" />
                              {college.yearEstablished}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-black text-stone-400 block">NIRF Rank</span>
                            <span className="font-bold text-stone-900 flex items-center gap-1">
                              <Award className="w-3.5 h-3.5 text-amber-500" />
                              Rank {college.nirfRanking}
                            </span>
                          </div>
                        </div>

                        {/* Fees & Hostel */}
                        <div className="flex flex-wrap gap-1.5 mb-5 text-[11px]">
                          <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{college.tuitionFees}</span>
                          </span>

                          <span className="bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1">
                            <Home className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>Hostel Accommodation</span>
                          </span>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="space-y-2 pt-3 border-t border-stone-100 mt-auto">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setSelectedCollege(college)}
                            className="w-full py-2 px-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                          >
                            <span>Full Profile</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={college.counsellingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 px-3 bg-[#0B132B] hover:bg-slate-900 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1 shadow-sm"
                          >
                            <span>Counselling</span>
                            <ExternalLink className="w-3 h-3 text-[#FFD54A]" />
                          </a>
                        </div>

                        {/* Verify Source Button */}
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on Official College Website</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: REGULATORY AUTHORITIES */}
        {activeTab === 'regulatory' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Statutory Technical Regulators of India</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official Regulatory Councils & Directories
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                By statutory mandate under the Parliament of India, no institution can legally offer engineering courses without AICTE approval or NBA accreditation structures. Always verify institution affiliation IDs directly on statutory registries before locking admissions during counseling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGULATORY_BODIES.map((body) => (
                <div key={body.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-md hover:border-[#004B23] transition flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#0B132B] text-[#FFD54A] font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm">
                    {body.name}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-stone-900 leading-tight mb-1">
                      {body.fullName}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Official Central Board Portal</p>

                    <p className="text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                      {body.description[currentLanguage] || body.description.en}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold uppercase text-stone-400 tracking-wider mb-2">Core Statutory Mandates</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                        {body.roles.map((role, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004B23] shrink-0" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={body.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md mt-auto"
                  >
                    <span>Visit Live {body.name} Portal</span>
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: JEE & STATE COUNSELLING PORTALS */}
        {activeTab === 'counselling' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Centralized Counselling Systems</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official Central & State Counselling Portals
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Admissions to premium national institutes are fully coordinated online via Central Seat Allocation procedures (JoSAA/CSAB), based on national JEE ranks. Affiliated colleges of state universities are filled directly through the respective state-level engineering counselling portals listed below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COUNSELLING_BOARDS.map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-3xl border-2 border-[#004B23]/30 hover:border-[#004B23] shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-0.5 rounded-lg">
                        Admissions Portal
                      </span>
                      <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#004B23]" />
                    </div>
                    <h4 className="font-black text-stone-900 group-hover:text-[#004B23] transition text-base mb-2">
                      {portal.name}
                    </h4>
                    <p className="text-xs text-stone-600 mb-4">{portal.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-700 underline flex items-center gap-1 mt-auto">
                    Visit Official Counselling Site →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. DETAILED PROFILE MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCollege(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-[#004B23] overflow-hidden my-auto"
            >
              {/* Cover & Header */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={selectedCollege.coverImageUrl || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"} 
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col justify-end p-6 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-[#FFD54A] text-[#0B132B] font-black text-xs px-2.5 py-1 rounded-full uppercase">
                      NIRF RANK {selectedCollege.nirfRanking}
                    </span>
                    <span className="bg-[#004B23] text-white font-bold text-xs px-2.5 py-1 rounded-full uppercase">
                      {selectedCollege.ownership} Institution
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-serif font-black text-white leading-tight">
                    {selectedCollege.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-1.5 font-medium mt-1">
                    <MapPin className="w-4 h-4 text-[#FFD54A] shrink-0" />
                    <span>{selectedCollege.address}</span>
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center font-bold text-lg transition cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* AICTE & NBA Status Alert */}
                <div className="bg-emerald-50 border-2 border-emerald-300 p-4 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-black text-emerald-950 text-sm">Regulatory & Approval Verification Matrix</h4>
                    <p className="text-xs text-emerald-800 font-medium mt-0.5">
                      Statutory AICTE Approval active. NBA Programmatic accreditation holds: <strong>{selectedCollege.nbaAccredited ? 'Yes, Certified' : 'Verified AICTE Approved'}</strong>. NAAC accreditation: <strong>{selectedCollege.naacGrade || 'Accredited'}</strong>.
                    </p>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Affiliation</span>
                    <span className="text-xs font-bold text-stone-900 block truncate" title={selectedCollege.affiliatedUniversity}>{selectedCollege.affiliatedUniversity}</span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Established</span>
                    <span className="text-xs font-bold text-stone-900 block flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#004B23]" />
                      Established {selectedCollege.yearEstablished}
                    </span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Tuition Fees</span>
                    <span className="text-xs font-black text-emerald-800 block flex items-center gap-0.5">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      {selectedCollege.tuitionFees}
                    </span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">NIRF Rating</span>
                    <span className="text-xs font-black text-amber-700 block flex items-center gap-1">
                      <Award className="w-4 h-4 text-amber-500" />
                      National Rank {selectedCollege.nirfRanking}
                    </span>
                  </div>
                </div>

                {/* Academic Details & Branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 space-y-4">
                    <h3 className="font-serif font-black text-[#0B132B] text-base flex items-center gap-2 border-b border-stone-200 pb-2">
                      <BookOpen className="w-5 h-5 text-[#004B23]" />
                      <span>Approved B.Tech / B.E Branches</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedCollege.btechBranches.map((branch, bIdx) => (
                        <span key={bIdx} className="bg-white px-2.5 py-1 rounded-xl border border-stone-200 text-xs font-bold text-stone-700">
                          ⚙️ {branch}
                        </span>
                      ))}
                    </div>

                    {selectedCollege.mtechBranches.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-xs font-extrabold uppercase text-stone-400 tracking-wider mb-2">M.Tech Program Specializations</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCollege.mtechBranches.map((mBranch, mIdx) => (
                            <span key={mIdx} className="bg-stone-100 px-2.5 py-1 rounded-xl text-xs font-bold text-stone-600">
                              🎓 {mBranch}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCollege.diplomaCourses.length > 0 && (
                      <div className="pt-2 border-t border-stone-200/60">
                        <h4 className="text-xs font-extrabold uppercase text-[#004B23] tracking-wider mb-2">Diploma Courses Offered</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCollege.diplomaCourses.map((dip, dIdx) => (
                            <span key={dIdx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-bold">
                              📄 {dip}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Career & Placements Panel */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 space-y-4">
                    <h3 className="font-serif font-black text-[#0B132B] text-base flex items-center gap-2 border-b border-stone-200 pb-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      <span>Placement cell & Corporate Records</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                        <span className="text-[10px] font-black uppercase text-stone-400 block mb-0.5">Highest CTC</span>
                        <span className="text-sm font-black text-[#004B23]">{selectedCollege.highestPackage}</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                        <span className="text-[10px] font-black uppercase text-stone-400 block mb-0.5">Average CTC</span>
                        <span className="text-sm font-black text-amber-700">{selectedCollege.averagePackage}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Top Corporate Recruiters</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedCollege.topRecruiters.map((rec, rIdx) => (
                          <span key={rIdx} className="bg-white text-stone-700 border border-stone-200 px-2.5 py-1 rounded-xl text-xs font-bold">
                            💼 {rec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-200/60">
                      <strong>Internship Matrix:</strong> {selectedCollege.internshipOpportunities}
                    </p>
                  </div>
                </div>

                {/* Admission & Cutoffs Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-4">
                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1.5">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        <span>Accepted Entrance Examination Codes</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.entranceExams.map((ex, exIdx) => (
                          <span key={exIdx} className="bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-1 rounded-xl text-xs font-black">
                            ⚡ {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Info className="w-4 h-4 text-stone-500" />
                        <span>Academic Admission Criteria</span>
                      </h4>
                      <p className="text-xs text-stone-700 leading-relaxed">{selectedCollege.eligibility}</p>
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <AlertCircle className="w-4 h-4 text-rose-500" />
                        <span>Closing Cutoff Trends</span>
                      </h4>
                      <p className="text-xs text-rose-800 bg-rose-50 p-2.5 rounded-xl border border-rose-200 font-bold">
                        {selectedCollege.cutoffInfo}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Layers className="w-4 h-4 text-teal-600" />
                        <span>Residential & Campus Facilities</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.facilities.map((fac, fIdx) => (
                          <span key={fIdx} className="bg-teal-50 text-teal-900 border border-teal-200/60 px-2.5 py-1 rounded-xl text-xs font-bold">
                            ✔ {fac}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <DollarSign className="w-4 h-4 text-amber-600" />
                        <span>Scholarships & Minority Benefits</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        <p className="bg-stone-50 p-2 rounded-xl border border-stone-200">
                          <strong>General Scholarships:</strong> {selectedCollege.scholarships}
                        </p>
                        <p className="bg-amber-50/50 p-2 rounded-xl border border-amber-200 text-amber-900">
                          <strong>Minority Benefits:</strong> {selectedCollege.minorityScholarships}
                        </p>
                        <p className="bg-blue-50/50 p-2 rounded-xl border border-blue-200 text-blue-900">
                          <strong>Loan Assistance:</strong> {selectedCollege.educationLoanAssistance}
                        </p>
                      </div>
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>Contact & Directory Particulars</span>
                      </h4>
                      <div className="space-y-1 text-xs font-semibold">
                        <p>📞 Phone: <a href={`tel:${selectedCollege.phone}`} className="text-blue-700 hover:underline">{selectedCollege.phone}</a></p>
                        <p>✉ Email: <a href={`mailto:${selectedCollege.email}`} className="text-blue-700 hover:underline">{selectedCollege.email}</a></p>
                        <p>📍 Admissions Office: <span className="text-stone-600 font-medium">{selectedCollege.admissionOffice}</span></p>
                        <p>👤 Director/Principal: <span className="text-stone-600 font-medium">{selectedCollege.principalDirector}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campus Gallery */}
                {selectedCollege.campusGallery && selectedCollege.campusGallery.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5">
                      <Map className="w-4 h-4 text-amber-500" />
                      <span>Campus Gallery & Facilities Showcase</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedCollege.campusGallery.map((img, idx) => (
                        <div key={idx} className="h-32 sm:h-40 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:scale-105 transition duration-300">
                          <img src={img} alt={`Campus View ${idx+1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Geotag maps routing */}
                <div className="pt-2">
                  <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-2">
                    <Compass className="w-4 h-4 text-rose-500" />
                    <span>Campus Geolocation Route</span>
                  </h4>
                  <a
                    href={selectedCollege.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-800 px-4 py-2.5 rounded-xl text-xs font-bold border border-stone-300 transition shadow-sm"
                  >
                    <Compass className="w-4.5 h-4.5 text-rose-500" />
                    <span>Launch Google Maps GPS Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>

                {/* Verification Notice footer */}
                <div className="text-[10px] text-stone-400 font-semibold text-center border-t border-stone-100 pt-4">
                  Last verified date of this listing: {selectedCollege.lastVerifiedDate || '2026-07-01'} • Source database AICTE official council matrix.
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setSelectedCollege(null)}
                    className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-2xl font-bold text-xs transition"
                  >
                    Close
                  </button>

                  <a
                    href={selectedCollege.admissionPortalUrl || selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#0B132B] hover:bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xl"
                  >
                    <span>Admission Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFD54A]" />
                  </a>

                  <a
                    href={selectedCollege.counsellingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-md"
                  >
                    <span>Counselling Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFD54A]" />
                  </a>

                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#D4AF37] hover:bg-amber-600 text-stone-950 rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-md"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
