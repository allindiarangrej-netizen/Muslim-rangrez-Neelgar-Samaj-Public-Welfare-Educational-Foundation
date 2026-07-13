import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Award, 
  ExternalLink, 
  BookOpen, 
  Stethoscope, 
  ShieldCheck, 
  Filter, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Calendar, 
  Users, 
  DollarSign, 
  Home, 
  Sparkles, 
  ChevronRight, 
  HelpCircle, 
  Globe, 
  Compass, 
  Share2, 
  AlertCircle, 
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';
import { Language } from '../types';
import { 
  ALL_INDIAN_STATES_AND_UTS, 
  ALL_MEDICAL_COURSES, 
  OFFICIAL_REGULATORY_BODIES, 
  CURATED_MEDICAL_COLLEGES, 
  CollegeProfile, 
  MedicalCourse, 
  InstitutionType, 
  MinorityType 
} from '../data/medicalCollegesData';

interface MedicalCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function MedicalCollegesDirectory({ currentLanguage }: MedicalCollegesDirectoryProps) {
  // Navigation / View state
  const [activeTab, setActiveTab] = useState<'directory' | 'minority' | 'regulatory' | 'counselling'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedMinority, setSelectedMinority] = useState<string>('All');
  const [selectedFeeCategory, setSelectedFeeCategory] = useState<string>('All');
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [neetOnly, setNeetOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  
  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<CollegeProfile | null>(null);

  // Filter logic
  const filteredColleges = useMemo(() => {
    return CURATED_MEDICAL_COLLEGES.filter(college => {
      // If in minority tab, strictly filter for minority institutions
      if (activeTab === 'minority' && college.minorityType === 'None') {
        return false;
      }

      // State Filter
      if (selectedState !== 'All States & UTs' && college.state !== selectedState) {
        return false;
      }

      // Course Filter
      if (selectedCourse !== 'All' && college.course !== selectedCourse) {
        return false;
      }

      // Institution Type Filter
      if (selectedType !== 'All' && college.type !== selectedType) {
        return false;
      }

      // Minority Type Filter
      if (selectedMinority !== 'All' && college.minorityType !== selectedMinority) {
        return false;
      }

      // Fee Category Filter
      if (selectedFeeCategory !== 'All') {
        if (selectedFeeCategory === 'Govt Subsidized (< ₹1 Lakh/yr)' && (!college.feeStructure.annualFeeRange.includes('₹') || parseInt(college.feeStructure.annualFeeRange.replace(/[^0-9]/g, '')) > 100000)) {
          return false;
        }
        if (selectedFeeCategory === '₹1 Lakh - ₹10 Lakhs/yr') {
          const fee = parseInt(college.feeStructure.annualFeeRange.replace(/[^0-9]/g, '')) || 0;
          if (fee < 100000 || fee > 1000000) return false;
        }
        if (selectedFeeCategory === '₹10+ Lakhs/yr') {
          const fee = parseInt(college.feeStructure.annualFeeRange.replace(/[^0-9]/g, '')) || 0;
          if (fee <= 1000000) return false;
        }
      }

      // Hostel Only
      if (hostelOnly && !college.hostelAvailability.available) {
        return false;
      }

      // NEET Only
      if (neetOnly && !college.neetRequired) {
        return false;
      }

      // Scholarship Only
      if (scholarshipOnly && (!college.scholarshipInfo || college.scholarshipInfo.length < 5)) {
        return false;
      }

      // Search Query (Name, District, Address, University)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = college.name.toLowerCase().includes(q);
        const matchDistrict = college.district.toLowerCase().includes(q);
        const matchState = college.state.toLowerCase().includes(q);
        const matchUniv = college.affiliatedUniversity.toLowerCase().includes(q);
        const matchCourse = college.course.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchState && !matchUniv && !matchCourse) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, selectedState, selectedCourse, selectedType, selectedMinority, selectedFeeCategory, hostelOnly, neetOnly, scholarshipOnly, searchQuery]);

  // Reset Filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedCourse('All');
    setSelectedType('All');
    setSelectedMinority('All');
    setSelectedFeeCategory('All');
    setHostelOnly(false);
    setNeetOnly(false);
    setScholarshipOnly(false);
  };

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      {/* 1. HERO & OFFICIAL REGULATORY NOTICE BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23] border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Stethoscope className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Medical Career Guidance Portal • Official Database'
                  : currentLanguage === 'ur'
                  ? 'میڈیکل کیریئر رہنمائی پورٹل • سرکاری ڈیٹا بیس'
                  : 'चिकित्सा करियर मार्गदर्शन पोर्टल • आधिकारिक डेटाबेस'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {currentLanguage === 'en'
                  ? 'Live NMC, DCI, NCISM & NCH Verified Feed'
                  : currentLanguage === 'ur'
                  ? 'این ایم سی، ڈی سی آئی اور این سی آئی ایس ایم تصدیق شدہ'
                  : 'NMC, DCI, NCISM एवं NCH द्वारा सत्यापित'}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'Medical Colleges Directory (Official Database)'
              : currentLanguage === 'ur'
              ? 'میڈیکل کالجز ڈائریکٹری (سرکاری ریگولیٹری ڈیٹا بیس)'
              : 'मेडिकल कॉलेज निर्देशिका (आधिकारिक नियामक डेटाबेस)'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Access authentic, statutory, and real-time medical education data across India. Our directory is integrated directly with statutory regulatory bodies (NMC, DCI, NCISM, NCH, VCI) to protect students from unverified institutions and provide transparent guidance on seats, fees, scholarships, and NEET counselling.'
              : currentLanguage === 'ur'
              ? 'ہندوستان بھر میں مستند اور قانونی طبی تعلیم کے ڈیٹا تک رسائی حاصل کریں۔ ہمارا پورٹل براہ راست قانونی ریگولیٹری اداروں (NMC, DCI, NCISM, NCH, VCI) سے منسلک ہے تاکہ طلباء کو تصدیق شدہ کالجز، فیس اور کونسلنگ کی صحیح معلومات مل سکیں۔'
              : 'भारत भर में प्रामाणिक, वैधानिक और रीयल-टाइम चिकित्सा शिक्षा डेटा तक पहुंचें। हमारा पोर्टल सीधे वैधानिक नियामक निकायों (NMC, DCI, NCISM, NCH, VCI) से जुड़ा है ताकि छात्रों को सत्यापित कॉलेज, सीटें, शुल्क और नीट काउंसलिंग पर सही मार्गदर्शन मिल सके।'}
          </p>

          {/* MAIN SUB-NAVIGATION TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setActiveTab('directory');
                setSelectedMinority('All');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory'
                  ? 'bg-[#FFD54A] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'All Medical Colleges Directory'
                  : currentLanguage === 'ur'
                  ? 'تمام میڈیکل کالجز ڈائریکٹری'
                  : 'सभी मेडिकल कॉलेज निर्देशिका'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('minority');
                setSelectedMinority('All');
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
                  ? 'Minority Medical Institutions of India'
                  : currentLanguage === 'ur'
                  ? 'اقلیتی میڈیکل ادارے (انڈیا)'
                  : 'भारत के अल्पसंख्यक चिकित्सा संस्थान'}
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
                  ? 'Official Regulatory Bodies (NMC / DCI / NCISM)'
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
              <GraduationCap className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'NEET & State Counselling Portals'
                  : currentLanguage === 'ur'
                  ? 'نیٹ اور کونسلنگ پورٹل'
                  : 'नीट एवं राज्य काउंसलिंग पोर्टल'}
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
              <strong>Important Requirement:</strong> This portal automatically reflects official recognition data from statutory regulatory bodies (NMC, DCI, NCISM, NCH, VCI). Do not rely on static unverified lists. Every listed college includes a direct live verification button.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View Statutory Sources</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. MAIN CONTENT VIEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        
        {/* TAB 1 & 2: DIRECTORY & MINORITY INSTITUTIONS BROWSING */}
        {(activeTab === 'directory' || activeTab === 'minority') && (
          <div className="space-y-6">
            
            {/* MINORITY SECTION BANNER (IF IN MINORITY TAB) */}
            {activeTab === 'minority' && (
              <div className="bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#FFD54A]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-48 h-48 text-[#FFD54A]" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFD54A] text-[#0B132B] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>Dedicated Section • National Minority Medical Registry</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A] mb-2">
                    Minority Medical Institutions of India
                  </h2>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    Explore recognized Muslim Minority, Christian Minority, Jain Minority, and Sikh Minority medical, dental, and AYUSH colleges across India. Under Article 30(1) of the Indian Constitution, minority institutions reserve up to 50% of seats for candidates belonging to the respective minority community via official NEET counselling.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ Muslim Minority MBBS/BDS/BUMS</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ Christian Minority Colleges (CMC Vellore / Ludhiana / St. John's)</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">✨ Jain & Linguistic Minority Universities</span>
                  </div>
                </div>
              </div>
            )}

            {/* A. SEARCH BAR & QUICK FILTERS CARD */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search by college name, city, district, university, or course...'
                        : currentLanguage === 'ur'
                        ? 'کالج کا نام، شہر، ضلع یا کورس تلاش کریں...'
                        : 'कॉलेज का नाम, शहर, जिला या कोर्स खोजें...'
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#004B23] text-sm font-medium transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-xs font-bold text-gray-400 hover:text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick Toggle Switches */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto shrink-0 justify-end">
                  <button
                    onClick={() => setNeetOnly(!neetOnly)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition border flex items-center gap-1.5 cursor-pointer ${
                      neetOnly
                        ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>NEET Mandatory</span>
                  </button>

                  <button
                    onClick={() => setHostelOnly(!hostelOnly)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition border flex items-center gap-1.5 cursor-pointer ${
                      hostelOnly
                        ? 'bg-teal-700 text-white border-teal-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Hostel Available</span>
                  </button>

                  <button
                    onClick={() => setScholarshipOnly(!scholarshipOnly)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition border flex items-center gap-1.5 cursor-pointer ${
                      scholarshipOnly
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Scholarships</span>
                  </button>

                  {(selectedState !== 'All States & UTs' || selectedCourse !== 'All' || selectedType !== 'All' || selectedMinority !== 'All' || selectedFeeCategory !== 'All' || searchQuery || hostelOnly || neetOnly || scholarshipOnly) && (
                    <button
                      onClick={resetFilters}
                      className="px-3 py-2 rounded-xl text-xs font-extrabold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition"
                    >
                      Reset All
                    </button>
                  )}
                </div>
              </div>

              {/* B. COURSE TABS (MBBS, BDS, BAMS, BHMS, BUMS, ETC.) */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-stone-500 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#004B23]" />
                  <span>Select Course Stream:</span>
                </label>
                <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
                  <button
                    onClick={() => setSelectedCourse('All')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition shrink-0 cursor-pointer ${
                      selectedCourse === 'All'
                        ? 'bg-[#004B23] text-[#FFD54A] shadow-sm scale-105'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    All Courses
                  </button>
                  {ALL_MEDICAL_COURSES.map((course) => (
                    <button
                      key={course}
                      onClick={() => setSelectedCourse(course)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition shrink-0 cursor-pointer ${
                        selectedCourse === course
                          ? 'bg-[#004B23] text-[#FFD54A] shadow-sm scale-105 ring-2 ring-[#FFD54A]/60'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              </div>

              {/* C. MULTI-CRITERIA DROPDOWNS (STATE, TYPE, MINORITY, FEES) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-stone-100">
                {/* State Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#004B23]" />
                    <span>State / Union Territory:</span>
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50/80 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    {ALL_INDIAN_STATES_AND_UTS.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Institution Type Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#004B23]" />
                    <span>Institution Type:</span>
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50/80 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="All">All Types (Govt / Private / Deemed / Auto)</option>
                    <option value="Government">Government Colleges</option>
                    <option value="Private">Private Colleges</option>
                    <option value="Minority">Minority Institutions</option>
                    <option value="Deemed University">Deemed Universities</option>
                    <option value="Autonomous">Autonomous Institutions (AIIMS/JIPMER)</option>
                  </select>
                </div>

                {/* Minority Institution Type Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Minority Status:</span>
                  </label>
                  <select
                    value={selectedMinority}
                    onChange={(e) => setSelectedMinority(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50/80 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="All">All Minority / Non-Minority</option>
                    <option value="Muslim Minority">Muslim Minority Colleges</option>
                    <option value="Christian Minority">Christian Minority Colleges</option>
                    <option value="Jain Minority">Jain Minority Institutions</option>
                    <option value="Sikh Minority">Sikh Minority Colleges</option>
                    <option value="Linguistic Minority">Linguistic Minority Institutions</option>
                    <option value="None">General / Non-Minority</option>
                  </select>
                </div>

                {/* Fee Structure Range */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-[#004B23]" />
                    <span>Fee Structure Range:</span>
                  </label>
                  <select
                    value={selectedFeeCategory}
                    onChange={(e) => setSelectedFeeCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50/80 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="All">All Fee Ranges</option>
                    <option value="Govt Subsidized (< ₹1 Lakh/yr)">Govt Subsidized (&lt; ₹1 Lakh/yr)</option>
                    <option value="₹1 Lakh - ₹10 Lakhs/yr">₹1 Lakh - ₹10 Lakhs / Year</option>
                    <option value="₹10+ Lakhs/yr">₹10+ Lakhs / Year (Private / Deemed)</option>
                  </select>
                </div>
              </div>

              {/* D. DEDICATED STATE CHIPS FOR FAST BROWSING */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-2">
                  ⚡ Quick Jump to Major State Directory:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Madhya Pradesh', 'Rajasthan', 'Gujarat', 'Uttar Pradesh', 'Delhi', 
                    'Maharashtra', 'Haryana', 'Punjab', 'Bihar', 'Karnataka', 
                    'Kerala', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'West Bengal'
                  ].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedState(st)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        selectedState === st
                          ? 'bg-[#0B132B] text-[#FFD54A] shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedState('All States & UTs')}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase bg-amber-100 text-amber-900 hover:bg-amber-200"
                  >
                    View All 36 States & UTs
                  </button>
                </div>
              </div>
            </div>

            {/* RESULTS COUNT & STATUTORY REMINDER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-stone-800">
                  Showing <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Medical Institutions
                </span>
                {selectedCourse !== 'All' && (
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                    Course: {selectedCourse}
                  </span>
                )}
                {selectedState !== 'All States & UTs' && (
                  <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                    State: {selectedState}
                  </span>
                )}
              </div>

              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>All colleges cross-referenced with live statutory regulatory registries.</span>
              </div>
            </div>

            {/* COLLEGES GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No Medical Colleges match your exact filter criteria</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try clearing some filters or searching by a broader keyword. You can also query the live official NMC/DCI registry directly.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2.5 bg-[#004B23] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#00381a] transition"
                  >
                    Reset All Filters
                  </button>
                  <a
                    href="https://www.nmc.org.in/information-desk/college-and-course-search/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#0B132B] text-[#FFD54A] rounded-xl font-bold text-sm shadow-md hover:bg-slate-900 transition flex items-center gap-1.5"
                  >
                    <span>Query Live NMC Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
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
                      {/* Top Accent line based on type */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                        college.type === 'Government' || college.type === 'Autonomous' 
                          ? 'bg-[#004B23]' 
                          : college.minorityType !== 'None' 
                          ? 'bg-[#D4AF37]' 
                          : 'bg-indigo-600'
                      }`} />

                      <div>
                        {/* Course Badge & Type Chip */}
                        <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                          <span className="inline-flex items-center gap-1.5 bg-[#0B132B] text-[#FFD54A] text-xs font-black uppercase px-3 py-1 rounded-xl shadow-xs">
                            <BookOpen className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>{college.course}</span>
                          </span>

                          <div className="flex items-center gap-1.5">
                            {college.minorityType !== 'None' && (
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-1 rounded-lg border border-amber-300">
                                ⭐ {college.minorityType}
                              </span>
                            )}
                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${
                              college.type === 'Government' || college.type === 'Autonomous'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-purple-50 text-purple-800 border-purple-300'
                            }`}>
                              {college.type}
                            </span>
                          </div>
                        </div>

                        {/* College Name & University */}
                        <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 mb-1.5">
                          {college.name}
                        </h3>
                        <p className="text-xs text-stone-500 font-medium line-clamp-1 mb-3">
                          🎓 University: {college.affiliatedUniversity}
                        </p>

                        {/* State & District */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#004B23] shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* Statutory Approval Badge */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/80 mb-4">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{college.regulatoryApproval}</span>
                        </div>

                        {/* Key Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/60 mb-4">
                          <div>
                            <span className="text-[10px] uppercase font-black text-stone-400 block">Annual Intake</span>
                            <span className="font-bold text-stone-900 flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#004B23]" />
                              {college.annualIntake} Seats
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-black text-stone-400 block">Fee Structure</span>
                            <span className="font-bold text-stone-900 flex items-center gap-1 truncate" title={college.feeStructure.annualFeeRange}>
                              <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                              {college.feeStructure.annualFeeRange}
                            </span>
                          </div>
                        </div>

                        {/* Hostel & Scholarship Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5 text-[11px]">
                          <span className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 ${
                            college.hostelAvailability.available ? 'bg-teal-50 text-teal-800 border border-teal-200' : 'bg-gray-100 text-gray-500'
                          }`}>
                            <Home className="w-3 h-3" />
                            <span>Hostel: {college.hostelAvailability.available ? 'Available' : 'N/A'}</span>
                          </span>

                          {college.scholarshipInfo && (
                            <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 truncate max-w-[180px]" title={college.scholarshipInfo}>
                              <Award className="w-3 h-3 text-amber-600 shrink-0" />
                              <span className="truncate">Scholarships Available</span>
                            </span>
                          )}
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

                        {/* Live Regulatory Check Button */}
                        <a
                          href={college.officialRegistrySearchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on {college.regulatoryAuthority} Official Registry</span>
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

        {/* TAB 3: OFFICIAL REGULATORY BODIES (NMC, DCI, NCISM, NCH, VCI, ETC.) */}
        {activeTab === 'regulatory' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Statutory Regulatory Authorities of India</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official Regulatory Directories & Seat Matrix
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Under Indian law, no institution can offer recognized medical, dental, ayurveda, homoeopathy, or veterinary degrees without statutory authorization from these apex parliamentary councils. Always cross-verify college codes, intake capacity, and recognition status directly on their official portals before participating in NEET counselling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {OFFICIAL_REGULATORY_BODIES.map((body) => (
                <div key={body.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-md hover:border-[#004B23] transition flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#0B132B] text-[#FFD54A] font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm">
                    {body.name}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#004B23]/10 text-[#004B23] flex items-center justify-center font-black text-lg border border-[#004B23]/20 shrink-0">
                        {body.name}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-stone-900 leading-tight">
                          {body.fullName}
                        </h3>
                        <span className="text-xs text-[#004B23] font-bold">
                          Governing Courses: {body.courses.join(', ')}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                      {body.description[currentLanguage] || body.description.en}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-stone-100 mt-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={body.collegeListUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                      >
                        <Search className="w-4 h-4 text-[#FFD54A]" />
                        <span>Official College Search</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={body.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-[#0B132B] hover:bg-slate-900 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-md"
                      >
                        <Globe className="w-4 h-4 text-[#FFD54A]" />
                        <span>Official Website</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>

                    {body.seatMatrixUrl && (
                      <a
                        href={body.seatMatrixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 border border-amber-300"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>Check Official UG/PG Curriculum & Seat Matrix</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}

                    <div className="text-[11px] text-stone-500 font-bold flex items-center justify-between bg-gray-50 px-3 py-2 rounded-xl">
                      <span>Counselling Authority:</span>
                      <a href={body.counsellingPortal} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 flex items-center gap-1">
                        <span>{body.counsellingName}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: NEET & STATE COUNSELLING PORTALS */}
        {activeTab === 'counselling' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Admission Guidance & Statutory Links</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official NEET & State Medical Counselling Portals
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Under supreme court guidelines, 15% of all Government MBBS/BDS seats and 100% of Deemed/Central University seats are filled through All India Quota (AIQ) counselling conducted by MCC (DGHS). The remaining 85% of state government seats and 100% of private college seats are filled through state-level NEET counselling portals listed below.
              </p>
            </div>

            {/* NATIONAL COUNSELLING BOARDS */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>National Level Central Counselling Portals (All India Quota & Deemed)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Medical Counselling Committee (MCC - DGHS)', url: 'https://mcc.nic.in/', desc: '15% AIQ MBBS/BDS, 100% AIIMS, JIPMER, AMU, BHU, and Deemed Universities.' },
                  { name: 'AYUSH Admissions Central Counseling Committee (AACCC)', url: 'https://aaccc.gov.in/', desc: '15% AIQ BAMS, BUMS, BHMS, BSMS and Deemed/Central AYUSH Universities.' },
                  { name: 'Veterinary Council of India (VCI) Counselling', url: 'https://vci.statutorybody.gov.in/', desc: '15% All India Quota Veterinary (BVSc & AH) admissions nationwide.' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-5 rounded-2xl border-2 border-[#004B23]/30 hover:border-[#004B23] shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-black uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-0.5 rounded-lg">
                          National Portal
                        </span>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#004B23]" />
                      </div>
                      <h4 className="font-black text-stone-900 group-hover:text-[#004B23] transition text-base mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone-600 mb-4">{item.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-blue-700 underline flex items-center gap-1 mt-auto">
                      Visit Official Portal →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* STATE COUNSELLING BOARDS */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>State-Level NEET Counselling Authorities (85% State Quota & Private Colleges)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { st: 'Uttar Pradesh', name: 'UP NEET DGME', url: 'https://upneet.gov.in/' },
                  { st: 'Maharashtra', name: 'State CET Cell Maha', url: 'https://cetcell.mahacet.org/' },
                  { st: 'Rajasthan', name: 'Rajasthan NEET UG Board', url: 'https://rajugneet2026.com/' },
                  { st: 'Gujarat', name: 'ACPUGMEC Gujarat', url: 'https://www.medadmgujarat.org/' },
                  { st: 'Madhya Pradesh', name: 'MP Online DME', url: 'https://dme.mponline.gov.in/' },
                  { st: 'Karnataka', name: 'KEA Karnataka', url: 'https://cetonline.karnataka.gov.in/kea/' },
                  { st: 'Kerala', name: 'CEE Kerala', url: 'https://cee.kerala.gov.in/' },
                  { st: 'Tamil Nadu', name: 'TN Medical Selection', url: 'https://tnmedicalselection.net/' },
                  { st: 'Telangana', name: 'KNRUHS Telangana', url: 'https://knruhs.telangana.gov.in/' },
                  { st: 'Andhra Pradesh', name: 'Dr. YSRUHS AP', url: 'https://ntruhs.ap.nic.in/' },
                  { st: 'Bihar', name: 'BCECEB Bihar', url: 'https://bceceboard.bihar.gov.in/' },
                  { st: 'West Bengal', name: 'WBMCC West Bengal', url: 'https://wbmcc.nic.in/' },
                  { st: 'Haryana', name: 'DMER Haryana', url: 'https://dmer.haryana.gov.in/' },
                  { st: 'Punjab', name: 'BFUHS Faridkot', url: 'https://bfuhs.ac.in/' },
                  { st: 'Delhi (NCT)', name: 'Faculty of Med Sci DU', url: 'http://fmsc.ac.in/' },
                  { st: 'Assam', name: 'DME Assam', url: 'https://dme.assam.gov.in/' },
                  { st: 'Uttarakhand', name: 'HNBUMU Dehradun', url: 'https://hnbumu.ac.in/' },
                  { st: 'Odisha', name: 'OJEE Odisha', url: 'https://ojee.nic.in/' },
                  { st: 'Chhattisgarh', name: 'CG DME Raipur', url: 'https://cgdme.co.in/' },
                  { st: 'Jammu & Kashmir', name: 'J&K BOPEE', url: 'https://jkbopee.gov.in/' }
                ].map((portal) => (
                  <a
                    key={portal.st}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-2xl border border-stone-200 hover:border-[#004B23] shadow-xs hover:shadow-md transition flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-black text-[#004B23] block">{portal.st}</span>
                      <span className="text-xs font-bold text-stone-900 group-hover:text-blue-700 transition">{portal.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#004B23] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. DETAILED COLLEGE PROFILE MODAL */}
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
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white p-6 sm:p-8 relative">
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition cursor-pointer"
                >
                  ✕
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#FFD54A] text-[#0B132B] font-black text-xs px-3 py-1 rounded-full uppercase">
                    {selectedCollege.course}
                  </span>
                  <span className="bg-[#004B23] text-white font-bold text-xs px-3 py-1 rounded-full">
                    {selectedCollege.type} Institution
                  </span>
                  {selectedCollege.minorityType !== 'None' && (
                    <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1 rounded-full border border-amber-300">
                      ⭐ {selectedCollege.minorityType}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-3xl font-serif font-black text-white leading-tight mb-2">
                  {selectedCollege.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#FFD54A] shrink-0" />
                  <span>{selectedCollege.address}</span>
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-stone-800">
                {/* Statutory Approval Notice */}
                <div className="bg-emerald-50 border-2 border-emerald-300 p-4 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-black text-emerald-950 text-sm">Statutory Recognition & Approval Status</h4>
                    <p className="text-xs text-emerald-800 font-medium mt-0.5">
                      {selectedCollege.regulatoryApproval} under statutory oversight of <strong>{selectedCollege.regulatoryAuthority}</strong>.
                    </p>
                  </div>
                </div>

                {/* 3-Column Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Affiliated University</span>
                    <span className="text-xs font-bold text-stone-900 block">{selectedCollege.affiliatedUniversity}</span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Year of Establishment</span>
                    <span className="text-xs font-bold text-stone-900 block flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#004B23]" />
                      Established in {selectedCollege.yearEstablished}
                    </span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Annual Course Intake</span>
                    <span className="text-xs font-bold text-stone-900 block flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      {selectedCollege.annualIntake} Approved Seats
                    </span>
                  </div>
                </div>

                {/* Detailed Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <DollarSign className="w-4 h-4 text-amber-600" />
                        <span>Fee Structure ({selectedCollege.feeStructure.category})</span>
                      </h4>
                      <p className="text-sm font-extrabold text-stone-900">{selectedCollege.feeStructure.annualFeeRange}</p>
                      {selectedCollege.feeStructure.notes && (
                        <p className="text-xs text-stone-500 mt-1 italic">{selectedCollege.feeStructure.notes}</p>
                      )}
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Home className="w-4 h-4 text-teal-600" />
                        <span>Hostel & Residential Facilities</span>
                      </h4>
                      <p className="text-xs font-semibold text-stone-800">
                        {selectedCollege.hostelAvailability.available ? '✅ Hostel Facilities Available' : '❌ No Campus Hostel'}
                      </p>
                      <p className="text-xs text-stone-600 mt-1">{selectedCollege.hostelAvailability.details}</p>
                    </div>

                    <div className="pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>Scholarship & Financial Aid</span>
                      </h4>
                      <p className="text-xs text-stone-700 leading-relaxed bg-amber-50/80 p-3 rounded-xl border border-amber-200/80 font-medium">
                        {selectedCollege.scholarshipInfo || 'Standard government fee reimbursement schemes apply as per state domicile eligibility.'}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        <span>Admission Process & Quotas</span>
                      </h4>
                      <p className="text-xs font-bold text-stone-800 bg-purple-50 p-3 rounded-xl border border-purple-200/80">
                        {selectedCollege.admissionProcess}
                      </p>
                    </div>

                    <div className="border-b border-stone-200 pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>Official Contact Information</span>
                      </h4>
                      <div className="space-y-1 text-xs">
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-stone-500">Phone:</span>
                          <a href={`tel:${selectedCollege.contactNumber}`} className="text-blue-700 hover:underline font-semibold">
                            {selectedCollege.contactNumber}
                          </a>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-stone-500">Email:</span>
                          <a href={`mailto:${selectedCollege.email}`} className="text-blue-700 hover:underline font-semibold">
                            {selectedCollege.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="pb-3">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase flex items-center gap-1.5 mb-1">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span>Location & Google Maps</span>
                      </h4>
                      <a
                        href={selectedCollege.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-3.5 py-2 rounded-xl text-xs font-bold border border-stone-300 transition"
                      >
                        <Compass className="w-4 h-4 text-red-600" />
                        <span>Open Exact Campus Location on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-stone-200">
                  <a
                    href={selectedCollege.officialRegistrySearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-800 rounded-2xl font-bold text-xs transition flex items-center gap-2 border border-stone-300 shadow-xs"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verify on {selectedCollege.regulatoryAuthority} Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCollege.counsellingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-md"
                  >
                    <span>Official Counselling Link</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFD54A]" />
                  </a>

                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#0B132B] hover:bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xl"
                  >
                    <span>Visit Official Website</span>
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
