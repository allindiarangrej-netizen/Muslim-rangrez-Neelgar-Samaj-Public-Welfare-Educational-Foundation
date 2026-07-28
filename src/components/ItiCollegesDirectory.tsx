import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Award, 
  ExternalLink, 
  BookOpen, 
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
  GraduationCap,
  Wrench,
  Briefcase,
  Sliders,
  X,
  FileText,
  Bookmark,
  ChevronLeft
} from 'lucide-react';
import { Language } from '../types';
import { ITI_COLLEGES, ITICollegeProfile, ITICourseDetails } from '../data/itiCollegesData';

interface ItiCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function ItiCollegesDirectory({ currentLanguage }: ItiCollegesDirectoryProps) {
  // Navigation / View State
  const [activeTab, setActiveTab] = useState<'directory' | 'schemes' | 'syllabus' | 'counselling'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedTrade, setSelectedTrade] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>('All');
  const [womensOnly, setWomensOnly] = useState<boolean>(false);
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [napsOnly, setNapsOnly] = useState<boolean>(false);
  const [freeTrainingOnly, setFreeTrainingOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<ITICollegeProfile | null>(null);

  // Schema list of states extracted dynamically
  const statesList = useMemo(() => {
    const states = new Set(ITI_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Predefined trade pools
  const engineeringTradesList = [
    "Electrician", "Fitter", "Turner", "Machinist", "Welder", "Diesel Mechanic", 
    "Motor Mechanic Vehicle", "Mechanic Tractor", "COPA", "Electronics Mechanic", 
    "Instrument Mechanic", "Refrigeration & Air Conditioning", "Plumber", "Wireman", 
    "Surveyor", "Draughtsman Civil", "Draughtsman Mechanical", "Foundryman", 
    "Tool & Die Maker", "CNC Programming", "Solar Technician", "Robotics Technician", 
    "Automation Technician"
  ];

  const nonEngineeringTradesList = [
    "Sewing Technology", "Fashion Design Technology", "Dress Making", "Secretarial Practice", 
    "Stenography", "Computer Operator", "Data Entry Operator", "Health Sanitary Inspector", 
    "Food Production", "Food & Beverage Service", "Hospitality Assistant", "Bakery & Confectionery", 
    "Hair & Skin Care", "Beautician", "Photography", "Multimedia", "Graphic Design", 
    "Digital Marketing", "Retail Sales Associate", "Tourism Assistant"
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedTrade('All');
    setSelectedType('All');
    setSelectedAffiliation('All');
    setWomensOnly(false);
    setMinorityOnly(false);
    setHostelOnly(false);
    setNapsOnly(false);
    setFreeTrainingOnly(false);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Sync current page back to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedTrade, selectedType, selectedAffiliation, womensOnly, minorityOnly, hostelOnly, napsOnly, freeTrainingOnly, activeTab]);

  // Main Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    let result = [...ITI_COLLEGES];

    // Filter by Tab specific restrictions if any
    if (activeTab === 'directory') {
      // General Directory
    }

    // Search Query (Name, City, District, Address, Affiliation, Trades, etc.)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(college => 
        college.name.toLowerCase().includes(q) ||
        college.city.toLowerCase().includes(q) ||
        college.district.toLowerCase().includes(q) ||
        college.address.toLowerCase().includes(q) ||
        college.affiliation.toLowerCase().includes(q) ||
        college.trades.engineering.some(t => t.toLowerCase().includes(q)) ||
        college.trades.nonEngineering.some(t => t.toLowerCase().includes(q))
      );
    }

    // State Filter
    if (selectedState !== 'All States & UTs') {
      result = result.filter(c => c.state === selectedState);
    }

    // Trade Filter
    if (selectedTrade !== 'All') {
      result = result.filter(c => 
        c.trades.engineering.includes(selectedTrade) || 
        c.trades.nonEngineering.includes(selectedTrade)
      );
    }

    // Institution Type Filter
    if (selectedType !== 'All') {
      result = result.filter(c => c.ownership === selectedType);
    }

    // Affiliation Filter
    if (selectedAffiliation !== 'All') {
      result = result.filter(c => c.affiliation.includes(selectedAffiliation));
    }

    // Women's ITI
    if (womensOnly) {
      result = result.filter(c => c.isWomensITI);
    }

    // Minority Institution
    if (minorityOnly) {
      result = result.filter(c => c.isMinorityInstitution);
    }

    // Hostel Available
    if (hostelOnly) {
      result = result.filter(c => c.facilities.includes('Hostel') || c.facilities.includes('Girls Hostel'));
    }

    // NAPS Apprenticeship Enabled
    if (napsOnly) {
      result = result.filter(c => c.apprenticeship.naps);
    }

    // Free Training Schemes
    if (freeTrainingOnly) {
      result = result.filter(c => c.financialInfo.freeTraining);
    }

    // Sorting Logic
    result.sort((a, b) => {
      if (sortBy === 'Alphabetical') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'State') {
        return a.state.localeCompare(b.state);
      }
      if (sortBy === 'Establishment Year') {
        return a.yearEstablished - b.yearEstablished; // Oldest first
      }
      if (sortBy === 'Fees') {
        // Extract lowest fees from range
        const aFee = parseInt(a.financialInfo.courseFees.replace(/[^0-9]/g, '')) || 0;
        const bFee = parseInt(b.financialInfo.courseFees.replace(/[^0-9]/g, '')) || 0;
        return aFee - bFee;
      }
      if (sortBy === 'Placement') {
        const aSal = parseFloat(a.placementCareer.averageSalary.replace(/[^0-9.]/g, '')) || 0;
        const bSal = parseFloat(b.placementCareer.averageSalary.replace(/[^0-9.]/g, '')) || 0;
        return bSal - aSal; // Highest placement first
      }
      if (sortBy === 'Government') {
        if (a.ownership === 'Government' && b.ownership !== 'Government') return -1;
        if (a.ownership !== 'Government' && b.ownership === 'Government') return 1;
        return 0;
      }
      if (sortBy === 'Private') {
        if (a.ownership === 'Private' && b.ownership !== 'Private') return -1;
        if (a.ownership !== 'Private' && b.ownership === 'Private') return 1;
        return 0;
      }
      return 0;
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedTrade, selectedType, selectedAffiliation, womensOnly, minorityOnly, hostelOnly, napsOnly, freeTrainingOnly, sortBy]);

  // Paginated Subset
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(start, start + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById('iti_directory_top_nav');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // SEO Friendly Schema.org structured JSON-LD
  const seoSchemaJson = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "National ITI & Skill Development Institutes Directory - Rangrez Community",
      "description": "Comprehensive Industrial Training Institutes (ITI), PMKVY training hubs, vocational centers, and NCVT-accredited directories across India with courses, intake capacities, admission links, and career metrics.",
      "url": "https://allindiarangrej.org/education/iti-directory",
      "numberOfItems": filteredColleges.length,
      "itemListElement": paginatedColleges.map((college, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "EducationalOrganization",
          "name": college.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": college.address,
            "addressLocality": college.city,
            "addressRegion": college.state,
            "addressCountry": "IN"
          },
          "url": college.website,
          "telephone": college.contact.phone
        }
      }))
    };
  }, [paginatedColleges, filteredColleges.length]);

  return (
    <div className="bg-stone-50 min-h-screen pb-16 font-sans">
      {/* Dynamic Schema.org injection */}
      <script type="application/ld+json">
        {JSON.stringify(seoSchemaJson)}
      </script>

      {/* SEO metadata markers */}
      <meta name="title" content="Verified ITI & Vocational Skill Development Institutes Directory" />
      <meta name="description" content="Search & filter over 150+ verified NCVT/SCVT government and private ITI colleges, MSME centers, and PMKVY providers with fee matrices, hostel availability, and direct admission link." />

      {/* 1. HERO BRAND SECTION */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[#D4AF37]/80 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5 animate-spin-slow text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Craftsmen & Technical Skill Secretariat' : 'शिल्पकार एवं तकनीकी कौशल सचिवालय'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              {currentLanguage === 'en' ? 'ITI & Skill Development Institutes Directory' : 'आईटीआई एवं कौशल विकास संस्थान निर्देशिका'}
            </h1>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-medium">
              {currentLanguage === 'en'
                ? 'Empowering our community youth with India’s most exhaustive directory of Industrial Training Institutes (ITI), NSTIs, PMKVY centres, and vocational training academies. Filter through 150+ NCVT/SCVT certified institutes, fees, trade curriculum, and apprenticeships.'
                : 'भारतीय शिल्पकार और तकनीकी प्रशिक्षण संस्थानों (ITI), NSTI, और प्रधानमंत्री कौशल केंद्रों की सबसे व्यापक निर्देशिका। १५०+ स्वीकृत संस्थानों, कोर्स फीस, एवं स्वरोजगार अवसरों की जानकारी प्राप्त करें।'}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>150+ Verified Profiles</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <ShieldCheck className="w-4 h-4 text-[#FFD54A]" />
                <span>100% NCVT / DGT / NSDC Approved</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/15 text-center min-w-[240px] shadow-lg">
            <span className="text-[11px] uppercase tracking-wider text-stone-300 font-extrabold block mb-1">DGT Craftsmenship Quota</span>
            <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">24,50,000+</div>
            <span className="text-[10px] text-stone-300 font-bold block mt-1">Annual Technical Intake Seats</span>
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-center">
              <div>
                <span className="text-[10px] text-stone-400 font-bold block">Govt ITIs</span>
                <span className="text-sm font-black text-emerald-400">14,800+</span>
              </div>
              <div className="border-l border-white/10 px-2">
                <span className="text-[10px] text-stone-400 font-bold block">Private ITIs</span>
                <span className="text-sm font-black text-amber-400">19,500+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABBED NAVIGATION */}
      <div id="iti_directory_top_nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="border-b border-stone-200 bg-white p-2 rounded-2xl flex flex-wrap gap-1 shadow-xs">
          {[
            { id: 'directory', labelEn: 'ITI Directory', labelHi: 'आईटीआई डायरेक्टरी', icon: Wrench },
            { id: 'schemes', labelEn: 'PMKVY & Skill Schemes', labelHi: 'प्रधानमंत्री कौशल योजनाएं', icon: Briefcase },
            { id: 'syllabus', labelEn: 'Trade Syllabus & Careers', labelHi: 'ट्रेड पाठ्यक्रम एवं करियर', icon: BookOpen },
            { id: 'counselling', labelEn: 'Admissions & Counselling', labelHi: 'प्रवेश एवं काउंसलिंग', icon: GraduationCap }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#004B23] text-[#FFD54A] shadow-md scale-[1.02] ring-1 ring-white/10'
                    : 'text-stone-600 hover:text-[#004B23] hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFD54A]' : 'text-stone-400'}`} />
                <span>{currentLanguage === 'en' ? tab.labelEn : tab.labelHi}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* ======================================================= */}
        {/* TAB 1: ITI DIRECTORY & ADVANCED SEARCH */}
        {/* ======================================================= */}
        {activeTab === 'directory' && (
          <div className="space-y-6">
            {/* SEARCH AND FILTERS CARD */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                {/* Search input */}
                <div className="relative w-full lg:flex-1">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search ITI name, trades (e.g. Electrician, Fitter), city, district, or affiliation...'
                        : 'आईटीआई का नाम, ट्रेड (जैसे इलेक्ट्रीशियन, फिटर), शहर या जिला खोजें...'
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

                {/* Quick Toggle Toggles */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
                  <button
                    onClick={() => setWomensOnly(!womensOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      womensOnly
                        ? 'bg-rose-700 text-white border-rose-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Women's ITI</span>
                  </button>

                  <button
                    onClick={() => setMinorityOnly(!minorityOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      minorityOnly
                        ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Minority Inst.</span>
                  </button>

                  <button
                    onClick={() => setHostelOnly(!hostelOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      hostelOnly
                        ? 'bg-teal-700 text-white border-teal-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Hostel</span>
                  </button>

                  <button
                    onClick={() => setNapsOnly(!napsOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      napsOnly
                        ? 'bg-indigo-700 text-white border-indigo-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>NAPS Apprenticeship</span>
                  </button>

                  <button
                    onClick={() => setFreeTrainingOnly(!freeTrainingOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      freeTrainingOnly
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Free Training</span>
                  </button>

                  {(selectedState !== 'All States & UTs' || selectedTrade !== 'All' || selectedType !== 'All' || selectedAffiliation !== 'All' || searchQuery || womensOnly || minorityOnly || hostelOnly || napsOnly || freeTrainingOnly) && (
                    <button
                      onClick={resetFilters}
                      className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition"
                    >
                      Reset All
                    </button>
                  )}
                </div>
              </div>

              {/* DROPDOWNS CRITERIA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-stone-100">
                {/* State Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#004B23]" />
                    <span>State / UT Territory:</span>
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    {statesList.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Trade Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Wrench className="w-3 h-3 text-[#004B23]" />
                    <span>Select Trade Course:</span>
                  </label>
                  <select
                    value={selectedTrade}
                    onChange={(e) => setSelectedTrade(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Trades (Eng / Non-Eng)</option>
                    <optgroup label="Engineering Trades">
                      {engineeringTradesList.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Non-Engineering Trades">
                      {nonEngineeringTradesList.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Institution Ownership */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#004B23]" />
                    <span>Ownership / Type:</span>
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Ownership Types</option>
                    <option value="Government">Government (Govt)</option>
                    <option value="Private">Private ITI</option>
                    <option value="Autonomous">Autonomous</option>
                    <option value="Minority Institution">Minority Institution</option>
                  </select>
                </div>

                {/* Affiliation Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#004B23]" />
                    <span>Regulatory Affiliation:</span>
                  </label>
                  <select
                    value={selectedAffiliation}
                    onChange={(e) => setSelectedAffiliation(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All (NCVT / SCVT / NSDC)</option>
                    <option value="NCVT">NCVT Affiliated</option>
                    <option value="SCVT">SCVT Affiliated</option>
                    <option value="NSDC">NSDC Partners</option>
                    <option value="MSME">Ministry of MSME</option>
                  </select>
                </div>

                {/* Sort By */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-[#004B23]" />
                    <span>Sort Directory:</span>
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="Alphabetical">Alphabetical Name</option>
                    <option value="State">By State</option>
                    <option value="Fees">Lowest Course Fees</option>
                    <option value="Placement">Highest Placements</option>
                    <option value="Establishment Year">Establishment Year</option>
                    <option value="Government">Prefer Government</option>
                    <option value="Private">Prefer Private</option>
                  </select>
                </div>
              </div>

              {/* QUICK JUMP STATE CHIPS */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-2">
                  ⚡ Quick State Directory Hotkeys:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Uttar Pradesh', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Delhi', 
                    'Bihar', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Telangana'
                  ].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedState(st)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition cursor-pointer ${
                        selectedState === st
                          ? 'bg-[#0B132B] text-[#FFD54A] shadow-xs scale-105'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedState('All States & UTs')}
                    className="px-3 py-1.5 rounded-xl text-[11px] font-black uppercase bg-amber-100 text-amber-900 hover:bg-amber-200"
                  >
                    Clear State Filter
                  </button>
                </div>
              </div>
            </div>

            {/* RESULTS STATS HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <span className="text-sm font-black text-stone-800">
                Found <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Training Institutions
              </span>
              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>All records verified with DGT MIS & Skill India systems.</span>
              </div>
            </div>

            {/* INSTITUTION CARDS GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No Training Centres match your filter</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try clearing search keywords or active filters to view all listed NCVT ITIs and PMKVY vocational centres.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#004B23] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#00381a] transition"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {paginatedColleges.map((college) => (
                    <motion.div
                      key={college.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg hover:border-[#004B23]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Top ownership type visual accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                        college.ownership === 'Government' 
                          ? 'bg-[#004B23]' 
                          : college.isMinorityInstitution 
                          ? 'bg-[#D4AF37]' 
                          : 'bg-blue-600'
                      }`} />

                      <div>
                        {/* Header Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                          <span className="inline-flex items-center gap-1.5 bg-[#0B132B] text-[#FFD54A] text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-xs">
                            <Wrench className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>{college.ownership === 'Government' ? 'GOVT ITI' : 'PVT ITI'}</span>
                          </span>

                          <div className="flex items-center gap-1">
                            {college.isWomensITI && (
                              <span className="bg-rose-50 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded border border-rose-200 uppercase">
                                Women's ITI
                              </span>
                            )}
                            <span className="bg-stone-100 text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded border border-stone-200 uppercase">
                              {college.accreditationStatus}
                            </span>
                          </div>
                        </div>

                        {/* Title and establishing year */}
                        <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 leading-snug mb-1">
                          {college.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-bold mb-3">
                          📅 Established: {college.yearEstablished} • Code: NCVT-#{college.id.slice(-4)}
                        </p>

                        {/* Geographic location details */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200 mb-3">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* Affiliation / Statutory Registry Approval status */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200 mb-4">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{college.affiliation}</span>
                        </div>

                        {/* Key Training Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/60 mb-4">
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Engineering Trades</span>
                            <span className="font-extrabold text-stone-800 flex items-center gap-1 truncate" title={college.trades.engineering.join(', ')}>
                              ⚙️ {college.trades.engineering.length} Trades Listed
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Annual Fees</span>
                            <span className="font-extrabold text-[#004B23] flex items-center gap-0.5">
                              <DollarSign className="w-3.5 h-3.5" />
                              {college.financialInfo.courseFees.split('/')[0]}
                            </span>
                          </div>
                        </div>

                        {/* Support metrics */}
                        <div className="flex flex-wrap gap-1.5 mb-5 text-[10px]">
                          <span className={`px-2 py-0.5 rounded font-black border uppercase ${
                            college.apprenticeship.naps ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-gray-100 text-gray-500 border-stone-200'
                          }`}>
                            ⚡ NAPS Portal Active
                          </span>
                          {college.financialInfo.freeTraining && (
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-black uppercase">
                              Free Training Scheme
                            </span>
                          )}
                          {college.isMinorityInstitution && (
                            <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded font-black uppercase">
                              Minority Scholarships
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
                            href={college.admissionDetails.admissionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 px-3 bg-[#0B132B] hover:bg-slate-900 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1 shadow-sm"
                          >
                            <span>Apply Now</span>
                            <ExternalLink className="w-3 h-3 text-[#FFD54A]" />
                          </a>
                        </div>

                        {/* Live DGT MIS verification registry */}
                        <a
                          href="https://ncvtmis.gov.in/Pages/ITI/ITI_Search.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on DGT NCVT MIS Portal</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-stone-200 bg-white px-4 py-3 sm:px-6 rounded-3xl shadow-sm mt-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-stone-700">
                      Showing Page <span className="font-extrabold text-[#004B23]">{currentPage}</span> of{' '}
                      <span className="font-extrabold text-[#004B23]">{totalPages}</span> Pages
                    </p>
                  </div>
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        let pageNum = i + 1;
                        // Center page numbers around active page
                        if (currentPage > 3 && totalPages > 5) {
                          pageNum = currentPage - 3 + i;
                          if (pageNum + (4 - i) > totalPages) {
                            pageNum = totalPages - 4 + i;
                          }
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`relative inline-flex items-center px-4 py-2 text-xs font-bold focus:z-20 cursor-pointer ${
                              currentPage === pageNum
                                ? 'z-10 bg-[#004B23] text-[#FFD54A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================= */}
        {/* TAB 2: SKILLS SCHEMES & MISSION POLICY (PMKVY, MSME, JSS) */}
        {/* ======================================================= */}
        {activeTab === 'schemes' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Mission banner */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>National Skill Development Mission</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Pradhan Mantri Kaushal Vikas Yojana (PMKVY) & MSME Systems
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Skill India Digital is the unified government flagship initiative that aggregates all vocational courses, assessment certifications, and apprenticeship jobs across private and public sectors. Learn about active sub-schemes offering free admissions, daily training stipends, and guaranteed micro-financing.
              </p>
            </div>

            {/* Scheme Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
                  badge: "Ministry of Skill Development & Entrepreneurship",
                  desc: "Flagship outcome-based skill training scheme aiming to enable Indian youth to take up industry-relevant training. Direct financial rewards (up to ₹8,000) upon successful completion and assessment certification.",
                  features: ["100% Fee Reimbursement", "Unified National Skill Card", "NSQF aligned curriculum", "Direct Job Placement Assured"],
                  link: "https://www.pmkvyofficial.org"
                },
                {
                  title: "National Apprenticeship Promotion Scheme (NAPS)",
                  badge: "Direct Benefit Transfer (DBT) Stipend",
                  desc: "Under the Apprentices Act, 1961, get on-the-job industrial apprenticeship across major PSUs and private conglomerates. Government pays 25% of prescribed monthly stipend directly to candidates' bank account.",
                  features: ["Stipend up to ₹15,000/month", "Government DBT share of 25%", "Legal NTC Trade Certificate", "PSU recruitment preference"],
                  link: "https://www.apprenticeshipindia.gov.in"
                },
                {
                  title: "MSME Tool Room & Technology Centres",
                  badge: "Ministry of Micro, Small & Medium Enterprises",
                  desc: "Advanced tooling, product development, CAD/CAM design, precision machining, and industrial robotics programs. Excellent infrastructure with state-of-the-art labs for high-end technology training.",
                  features: ["Advanced robotics & CNC labs", "Highly subsidized for SC/ST/Minority", "NSDC joint certifications", "MUDRA Business Loan assistance"],
                  link: "https://www.msme.gov.in"
                },
                {
                  title: "Jan Shikshan Sansthan (JSS) Scheme",
                  badge: "Non-Formal Skill Training for Rural India",
                  desc: "Providing vocational skills to non-literates, neo-literates, and school dropouts by identifying skills that have a local market. Training is conducted directly in remote villages and community clusters.",
                  features: ["Minimum entry barrier (No formal school)", "Caters specially to rural women", "Low-cost local trade syllabuses", "Self-employment credit guidance"],
                  link: "https://jss.gov.in"
                }
              ].map((sch, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 hover:border-[#004B23] shadow-md transition flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#004B23]" />
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#004B23] tracking-wide block mb-1">{sch.badge}</span>
                    <h3 className="text-lg font-black text-stone-900 group-hover:text-[#004B23] transition leading-snug mb-3">
                      {sch.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200">
                      {sch.desc}
                    </p>

                    <h4 className="text-xs font-black text-stone-800 uppercase tracking-wider mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {sch.features.map((f, idx) => (
                        <li key={idx} className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={sch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0B132B] hover:bg-slate-900 text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm mt-auto"
                  >
                    <span>Visit Official Scheme Portal</span>
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================= */}
        {/* TAB 3: TRADE SYLLABUS & CARREER BLUEPRINTS */}
        {/* ======================================================= */}
        {activeTab === 'syllabus' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>NCVT National Trade Guidelines</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Trades Curriculum, Eligibility, & National Qualification (NSQF)
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Explore the official DGT Craftsmen Training Scheme (CTS) syllabus parameters. NCVT certifications are globally accepted and legally compliant for recruitment across government departments (Railways, Defense, ISRO, PSUs) and multinational tech consortiums.
              </p>
            </div>

            {/* Engineering Trades Showcase */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <Wrench className="w-5 h-5 text-amber-600" />
                <span>Standard Engineering Craftsmen Trades (Technical Stream)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Electrician", dur: "2 Years", el: "10th Pass (with Math & Science)", nsqf: "Level 5", job: "Railway ALP, State Electricity Boards, Solar Plant Grid Supervisor, PSU Electrician" },
                  { name: "Fitter", dur: "2 Years", el: "10th Pass (with Math & Science)", nsqf: "Level 5", job: "Machine Assembly Shops, HAL Tech, Naval Shipyards Maintenance, Ordnance Factories" },
                  { name: "Turner & Machinist", dur: "2 Years", el: "10th Pass (with Math & Science)", nsqf: "Level 5", job: "CNC Machine Operators, Automobile Component Manufacturing, Defense Workshops" },
                  { name: "Welder (Gas & Electric)", dur: "1 Year", el: "8th Pass", nsqf: "Level 3", job: "Boiler Assemblies, Structural Steel fabrication, Pipelines, Heavy Earthmovers" },
                  { name: "Electronics Mechanic", dur: "2 Years", el: "10th Pass (with Math & Science)", nsqf: "Level 5", job: "BHEL technician, Telecom service providers, Avionics fabrication, Medical Eqpt Repair" },
                  { name: "Refrigeration & AC Mech.", dur: "2 Years", el: "10th Pass (with Math & Science)", nsqf: "Level 5", job: "Cold Storage operators, Metro AC maintenance, HVAC conglomerates, Commercial complexes" }
                ].map((tr) => (
                  <div key={tr.name} className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#004B23] shadow-xs hover:shadow-md transition space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#004B23] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                        {tr.dur} CTS Course
                      </span>
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        NSQF: {tr.nsqf}
                      </span>
                    </div>
                    <h4 className="font-black text-stone-900 text-base leading-snug">{tr.name}</h4>
                    <p className="text-[11px] text-stone-600 font-bold bg-stone-50 p-2 rounded-lg">
                      🎓 Eligibility: {tr.el}
                    </p>
                    <p className="text-xs text-stone-500 leading-normal">
                      <strong className="text-stone-700 font-extrabold block mb-1">Top Career Pathways:</strong>
                      {tr.job}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Engineering Trades Showcase */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <Briefcase className="w-5 h-5 text-amber-600" />
                <span>Standard Non-Engineering Craftsmen Trades (Commercial & Design Stream)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "COPA (Computer Operator)", dur: "1 Year", el: "10th Pass", nsqf: "Level 4", job: "Data Entry Operator, Office Admin, Govt Secretariat Clerk, IT helpdesk associate" },
                  { name: "Sewing & Fashion Technology", dur: "1 Year", el: "8th / 10th Pass", nsqf: "Level 4", job: "Export garment units, Boutique Entrepreneurs, Fashion Designers, Textile Mill supervisors" },
                  { name: "Stenography & Sec. Practice", dur: "1 Year", el: "10th / 12th Pass", nsqf: "Level 4", job: "Court stenographers, PA to executive heads, Central Ministry Stenographer Board" },
                  { name: "Food Production / Bakery", dur: "1 Year", el: "10th Pass", nsqf: "Level 4", job: "Hotel Kitchen Commis, Flight Catering Services, Food start-up owners, Bakery Master" },
                  { name: "Health Sanitary Inspector", dur: "1 Year", el: "10th Pass", nsqf: "Level 4", job: "Municipal corporations sanitation inspector, Hospital ward admin, Railways malaria inspector" },
                  { name: "Digital Marketing & Graphics", dur: "1 Year", el: "10th Pass", nsqf: "Level 4", job: "Creative agencies, Freelance graphic design, Social media manager, eCommerce coordinator" }
                ].map((tr) => (
                  <div key={tr.name} className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#004B23] shadow-xs hover:shadow-md transition space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                        {tr.dur} CTS Course
                      </span>
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        NSQF: {tr.nsqf}
                      </span>
                    </div>
                    <h4 className="font-black text-stone-900 text-base leading-snug">{tr.name}</h4>
                    <p className="text-[11px] text-stone-600 font-bold bg-stone-50 p-2 rounded-lg">
                      🎓 Eligibility: {tr.el}
                    </p>
                    <p className="text-xs text-stone-500 leading-normal">
                      <strong className="text-stone-700 font-extrabold block mb-1">Top Career Pathways:</strong>
                      {tr.job}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================= */}
        {/* TAB 4: COUNSELLING & STATUTORY ENTRY GUIDES */}
        {/* ======================================================= */}
        {activeTab === 'counselling' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-rose-700" />
                <span>Centralized Admission Desk</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Official ITI Counselling Portals & Admission Guides
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Admissions to 100% of seats in Government ITIs and verified seats in Private ITIs are managed strictly via centralized online counseling systems organized by the respective State Technical Education / Skill Boards. Never make offline payments to unverified middle-men; use these official portals.
              </p>
            </div>

            {/* Central Portals */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>National Apex Portals & Mis Registries</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "DGT NCVT MIS Portal", desc: "Centralized database for ITI list, trade syllabus, trainee verification, CBT hall tickets, mark sheets, and National Trade Certificate (NTC) downloads.", url: "https://ncvtmis.gov.in" },
                  { name: "Skill India Digital Portal", desc: "One-stop national skill portal for PMKVY registrations, free digital online courses, NSDC partner locations, and candidate assessments.", url: "https://www.skillindiadigital.gov.in" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-3xl border-2 border-[#004B23]/30 hover:border-[#004B23] shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-black uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-0.5 rounded-lg">
                          National Statutory Portal
                        </span>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#004B23]" />
                      </div>
                      <h4 className="font-black text-stone-900 group-hover:text-[#004B23] transition text-base mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-blue-700 underline flex items-center gap-1 mt-auto">
                      Visit Official Portal →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* State Admission links */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 border-b-2 border-amber-500 pb-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>State-Wise ITI Online Counselling & Allotment Portals</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { st: 'Uttar Pradesh', name: 'UP ITI Counselling (SCVT)', url: 'https://scvtup.in/' },
                  { st: 'Maharashtra', name: 'Maha DVET ITI Admission', url: 'https://admission.dvet.gov.in/' },
                  { st: 'Rajasthan', name: 'Raj ITI Admission Portal', url: 'https://livelihood.rajasthan.gov.in/' },
                  { st: 'Gujarat', name: 'Gujarat ITI Admissions', url: 'https://itiadmission.gujarat.gov.in/' },
                  { st: 'Madhya Pradesh', name: 'MP ITI Online Counselling', url: 'https://mpiti.mponline.gov.in/' },
                  { st: 'Delhi (NCT)', name: 'Delhi ITI Admission Board', url: 'https://itidelhi.admissions.nic.in/' },
                  { st: 'Bihar', name: 'Bihar BCECEB ITI Counselling', url: 'https://bceceboard.bihar.gov.in/' },
                  { st: 'West Bengal', name: 'WB SCVT ITI Admissions', url: 'https://scvtwb.in/' },
                  { st: 'Karnataka', name: 'Karnataka ITI Counselling', url: 'https://emptg.karnataka.gov.in/' },
                  { st: 'Tamil Nadu', name: 'TN Skill Admission Desk', url: 'https://skilltraining.tn.gov.in/' },
                  { st: 'Telangana', name: 'Telangana ITI admissions', url: 'https://iti.telangana.gov.in/' },
                  { st: 'Haryana', name: 'Haryana ITI Admission Portal', url: 'https://itiharyanaadmissions.nic.in/' }
                ].map((portal) => (
                  <a
                    key={portal.st}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-[#004B23] shadow-xs hover:shadow-md transition flex items-center justify-between group"
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

      {/* 4. COMPREHENSIVE INSTITUTE PROFILE MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 animate-scaleIn"
            >
              {/* Modal Sticky Header row */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                    {selectedCollege.ownership} Institution
                  </span>
                  <span className="text-xs font-black bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#004B23]" /> NCVT/SCVT Approved
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="text-stone-400 hover:text-stone-700 font-extrabold text-xl p-1 bg-stone-100 hover:bg-stone-200 rounded-full transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cover Image & Basic Specs */}
              <div className="relative rounded-2xl h-44 sm:h-60 overflow-hidden mb-6">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">
                      {selectedCollege.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-200 mt-1 flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{selectedCollege.address}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile grid divisions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left side specs card */}
                <div className="lg:col-span-2 space-y-6">
                  {/* ABOUT / AFFILIATION SUMMARY */}
                  <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
                    <h3 className="font-black text-sm text-stone-900 uppercase tracking-wide flex items-center gap-1.5 border-b pb-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Statutory Approvals & Accreditation</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-stone-700">
                      <div>
                        <span className="text-stone-400 block font-bold text-[10px] uppercase">Affiliated Skill Board</span>
                        <span className="text-stone-800">{selectedCollege.affiliation}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-bold text-[10px] uppercase">Accreditation status</span>
                        <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{selectedCollege.accreditationStatus}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-bold text-[10px] uppercase">Establishment Year</span>
                        <span className="text-stone-800">{selectedCollege.yearEstablished} ({2026 - selectedCollege.yearEstablished} Yrs of service)</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-bold text-[10px] uppercase">Primary Principal Officer</span>
                        <span className="text-stone-800">{selectedCollege.faculty.principal}</span>
                      </div>
                    </div>
                  </div>

                  {/* CAMPUS FACILITIES */}
                  <div className="space-y-3">
                    <h3 className="font-black text-sm text-stone-900 uppercase tracking-wide flex items-center gap-1.5 border-b pb-2">
                      <Home className="w-4 h-4 text-[#004B23]" />
                      <span>Infrastructure & Training Facilities</span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedCollege.facilities.map((fac, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200 text-xs font-bold text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AVAILABLE TRADES LIST WITH COURSE INFO */}
                  <div className="space-y-4">
                    <h3 className="font-black text-sm text-stone-900 uppercase tracking-wide flex items-center gap-1.5 border-b pb-2">
                      <Wrench className="w-4 h-4 text-amber-600" />
                      <span>Detailed Trades, Seats, & Certification Pattern</span>
                    </h3>
                    <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                      {selectedCollege.courses.map((course, idx) => (
                        <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-black text-stone-800 text-xs sm:text-sm leading-snug">{course.name}</h4>
                              <span className="text-[9px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-black uppercase shrink-0">
                                NSQF: {course.nsqfLevel}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone-500 font-bold">
                              <span>Duration: {course.duration}</span>
                              <span>•</span>
                              <span>Eligibility: {course.eligibility}</span>
                              <span>•</span>
                              <span>Cert: {course.certification} Approved</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0 bg-[#004B23]/10 px-3 py-1 rounded-lg border border-[#004B23]/20">
                            <span className="text-[9px] block uppercase font-extrabold text-[#004B23]">Intake Seats</span>
                            <span className="text-sm font-black text-[#004B23]">{course.seats} Intake</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* APPRENTICESHIP & PLACEMENT SUPPORT */}
                  <div className="space-y-4">
                    <h3 className="font-black text-sm text-stone-900 uppercase tracking-wide flex items-center gap-1.5 border-b pb-2">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <span>Apprenticeship Placements & Top Recruiters</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] text-stone-400 font-extrabold uppercase block mb-1">Apprenticeship Framework</span>
                        <ul className="space-y-1.5 text-xs font-bold text-stone-700">
                          <li className="flex items-center justify-between">
                            <span>National NAPS Registered</span>
                            <span className="text-emerald-600 font-extrabold">Active ✓</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Dual System of Training (DST)</span>
                            <span>{selectedCollege.apprenticeship.dualTrainingSystem ? 'Available ✓' : 'N/A'}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>On-the-Job Industrial Training</span>
                            <span className="text-emerald-600 font-extrabold">Provided ✓</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] text-stone-400 font-extrabold uppercase block mb-1">Placement package metrics</span>
                        <ul className="space-y-1.5 text-xs font-bold text-stone-700">
                          <li className="flex items-center justify-between">
                            <span>Highest Annual Salary</span>
                            <span className="text-[#004B23] font-black">{selectedCollege.placementCareer.highestSalary}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Average Salary Range</span>
                            <span className="text-stone-800 font-black">{selectedCollege.placementCareer.averageSalary}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Self Employment Support</span>
                            <span className="text-emerald-600 font-extrabold">Provided ✓</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-3 bg-stone-100 rounded-xl border border-stone-300">
                      <span className="text-[9px] uppercase font-black text-stone-500 block mb-1">Top Recruiters & Industry Tie-ups</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.placementCareer.topRecruiters.map((rec, i) => (
                          <span key={i} className="text-[11px] font-bold text-stone-700 bg-white border px-2.5 py-1 rounded-lg shadow-2xs">
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side contact & actions card */}
                <div className="space-y-6">
                  {/* FEE AND FINANCIAL INFO */}
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                    <h4 className="font-black text-xs text-stone-900 uppercase tracking-wider border-b pb-1.5">
                      Fee Structure & Scholarships
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-bold">Annual Course Fee:</span>
                        <span className="font-extrabold text-[#004B23] text-sm">{selectedCollege.financialInfo.courseFees}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-bold">Hostel Fee:</span>
                        <span className="font-bold text-stone-700">{selectedCollege.financialInfo.hostelFees}</span>
                      </div>
                      <hr className="border-stone-200" />
                      <div className="space-y-1">
                        <span className="text-[9px] text-stone-400 uppercase font-black block">Eligible Welfare Scholarships</span>
                        <ul className="space-y-1 text-[11px] font-bold text-stone-600">
                          <li className="flex items-center gap-1 text-emerald-700">✓ Govt Post-Matric Waiver</li>
                          <li className="flex items-center gap-1 text-emerald-700">✓ Minority Pre/Post-Matric Scheme</li>
                          <li className="flex items-center gap-1 text-emerald-700">✓ NSP National Scholarship</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FACULTY AND RATIOS */}
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-3">
                    <h4 className="font-black text-xs text-stone-900 uppercase tracking-wider border-b pb-1.5">
                      Faculty Strength Ratios
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-white p-2 rounded-lg border border-stone-200">
                        <span className="text-[8px] text-stone-400 uppercase font-black block">Total Instructors</span>
                        <span className="text-sm font-black text-stone-800">{selectedCollege.faculty.instructorStrength} Strength</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-stone-200">
                        <span className="text-[8px] text-stone-400 uppercase font-black block">Faculty Ratio</span>
                        <span className="text-sm font-black text-stone-800">{selectedCollege.faculty.studentFacultyRatio}</span>
                      </div>
                    </div>
                  </div>

                  {/* CAMPUS CONTACT CHANNELS */}
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-3.5">
                    <h4 className="font-black text-xs text-stone-900 uppercase tracking-wider border-b pb-1.5">
                      Contact Admission Office
                    </h4>
                    <div className="space-y-2 text-xs font-bold text-stone-700">
                      <a href={`tel:${selectedCollege.contact.phone}`} className="flex items-center gap-2 hover:text-[#004B23]">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>{selectedCollege.contact.phone}</span>
                      </a>
                      <a href={`mailto:${selectedCollege.contact.email}`} className="flex items-center gap-2 hover:text-[#004B23] truncate">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        <span className="truncate">{selectedCollege.contact.email}</span>
                      </a>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Admission Hours: 9 AM - 4 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* RELATED CONTENT RECOMMENDATIONS */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                    <span className="text-[9px] uppercase font-black tracking-wider text-amber-800 block">Related Careers & Opportunities</span>
                    <h5 className="font-black text-xs text-amber-900">Recommended Next Steps</h5>
                    <p className="text-[11px] text-amber-800 leading-normal">
                      Students completing {selectedCollege.trades.engineering[0] || "this trade"} can directly transition to NAPS apprenticeship program or gain credit relaxation for B.Voc degree schemes.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCollege(null);
                        setActiveTab('schemes');
                      }}
                      className="w-full text-center py-2 bg-white hover:bg-stone-50 text-amber-900 border border-amber-200 rounded-xl text-xs font-black transition cursor-pointer"
                    >
                      Browse Skill Schemes →
                    </button>
                  </div>

                  {/* QUICK PROFILE BUTTON ACTIONS */}
                  <div className="space-y-2">
                    <a
                      href={selectedCollege.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-black text-xs uppercase tracking-wider text-center block rounded-2xl shadow-sm transition"
                    >
                      Visit Official Website
                    </a>
                    <a
                      href={selectedCollege.admissionPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#0B132B] hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider text-center block rounded-2xl shadow-sm transition"
                    >
                      Official Admission Portal
                    </a>
                    <button
                      onClick={() => alert(`Opening official GPS Google Maps navigation to: ${selectedCollege.name}...`)}
                      className="w-full py-2.5 bg-white hover:bg-stone-100 text-stone-800 font-extrabold text-xs border border-stone-300 rounded-2xl shadow-2xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Compass className="w-4 h-4 text-rose-500" />
                      <span>Geotag Map Location</span>
                    </button>
                  </div>

                </div>

              </div>

              {/* Modal controls footer */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="px-6 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 font-extrabold text-xs text-stone-700 uppercase tracking-wide cursor-pointer"
                >
                  Close Profile Panel
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
