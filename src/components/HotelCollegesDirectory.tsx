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
  Globe, 
  Compass, 
  Sliders, 
  X, 
  FileText, 
  ChevronLeft, 
  GraduationCap, 
  Utensils, 
  Wine, 
  Briefcase, 
  Ship, 
  Coffee, 
  Layers, 
  Building, 
  Star,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Language } from '../types';
import { HOTEL_COLLEGES, HotelCollegeProfile } from '../data/hotelCollegesData';

interface HotelCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function HotelCollegesDirectory({ currentLanguage }: HotelCollegesDirectoryProps) {
  // Navigation / View State
  const [activeTab, setActiveTab] = useState<'directory' | 'nchm' | 'culinary' | 'careers'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [nchmctOnly, setNchmctOnly] = useState<boolean>(true);
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<HotelCollegeProfile | null>(null);

  // Dynamic States list
  const statesList = useMemo(() => {
    const states = new Set(HOTEL_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Predefined programmes list
  const programmesList = [
    "B.Sc Hospitality & Hotel Administration", "Bachelor of Hotel Management (BHM)",
    "Bachelor of Hotel Management & Catering Technology (BHMCT)", "BBA Hospitality Management",
    "BBA Tourism Management", "BTTM (Bachelor of Travel & Tourism Management)",
    "MBA Hospitality Management", "MBA Tourism Management", "M.Sc Hospitality",
    "MHM (Master of Hotel Management)", "Diploma in Food Production",
    "Diploma in Bakery & Confectionery", "Diploma in Front Office", "Diploma in Housekeeping",
    "Diploma in Culinary Arts", "Certificate in Food & Beverage Service"
  ];

  // Predefined specializations list
  const specializationsList = [
    "Hotel Operations", "Hospitality Management", "Food Production", "Bakery & Confectionery",
    "International Cuisine", "Front Office", "Housekeeping", "Food & Beverage Service",
    "Restaurant Management", "Resort Management", "Cruise Hospitality", "Airline Hospitality",
    "Travel Management", "Tourism Management", "Event Management", "Luxury Hotel Management",
    "Hospitality Marketing", "Revenue Management", "Sustainable Tourism"
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedCourse('All');
    setSelectedSpecialization('All');
    setSelectedType('All');
    setNchmctOnly(true);
    setMinorityOnly(false);
    setHostelOnly(false);
    setScholarshipOnly(false);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Sync current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, nchmctOnly, minorityOnly, hostelOnly, scholarshipOnly, activeTab]);

  // Main Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    let result = [...HOTEL_COLLEGES];

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.universityAffiliation.toLowerCase().includes(q) ||
        c.programmes.some(p => p.toLowerCase().includes(q)) ||
        c.specializations.some(s => s.toLowerCase().includes(q))
      );
    }

    // State Filter
    if (selectedState !== 'All States & UTs') {
      result = result.filter(c => c.state === selectedState);
    }

    // Course Filter
    if (selectedCourse !== 'All') {
      result = result.filter(c => c.programmes.includes(selectedCourse));
    }

    // Specialization Filter
    if (selectedSpecialization !== 'All') {
      result = result.filter(c => c.specializations.includes(selectedSpecialization));
    }

    // Institution Type Filter
    if (selectedType !== 'All') {
      result = result.filter(c => c.ownership === selectedType);
    }

    // NCHMCT Affiliated
    if (nchmctOnly) {
      result = result.filter(c => c.nchmctAffiliated);
    }

    // Minority Institution
    if (minorityOnly) {
      result = result.filter(c => c.isMinorityInstitution);
    }

    // Hostel Available
    if (hostelOnly) {
      result = result.filter(c => c.trainingFacilities.includes('Hostel'));
    }

    // Scholarship Available
    if (scholarshipOnly) {
      result = result.filter(c => c.financialInfo.govtScholarships || c.financialInfo.minorityScholarships);
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
      if (sortBy === 'NAAC Grade') {
        return a.naacGrade.localeCompare(b.naacGrade);
      }
      if (sortBy === 'Placement') {
        const aSal = parseFloat(a.placement.averagePackage.replace(/[^0-9.]/g, '')) || 0;
        const bSal = parseFloat(b.placement.averagePackage.replace(/[^0-9.]/g, '')) || 0;
        return bSal - aSal;
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
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, nchmctOnly, minorityOnly, hostelOnly, scholarshipOnly, sortBy]);

  // Paginated Subset
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(start, start + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById('hotel_directory_top_nav');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // SEO Schema
  const seoSchemaJson = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "National Hotel Management, Culinary & Hospitality Colleges Directory - Rangrez Community",
      "description": "Comprehensive NCHMCT Affiliated Institutes of Hotel Management (IHM), Food Craft Institutes (FCI), Culinary Arts Academies, and Tourism Management Colleges in India.",
      "url": "https://allindiarangrej.org/education/hotel-management-colleges-directory",
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
      {/* Dynamic Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(seoSchemaJson)}
      </script>

      <meta name="title" content="Verified NCHMCT Hotel Management Colleges, IHMs & Culinary Academies Directory" />
      <meta name="description" content="Find verified Institutes of Hotel Management (IHM), Food Craft Institutes (FCI), Culinary Arts Colleges, B.Sc Hospitality, and Tourism Management Institutes across India." />

      {/* 1. HERO BRAND BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[#D4AF37]/80 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'National Directorate of Hospitality & Tourism Education' : 'राष्ट्रीय होटल प्रबंधन एवं पर्यटन शिक्षा निदेशालय'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              {currentLanguage === 'en' ? 'Hotel Management, Hospitality & Tourism Colleges Directory' : 'होटल प्रबंधन, हॉस्पिटैलिटी एवं पर्यटन संस्थान निर्देशिका'}
            </h1>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-medium">
              {currentLanguage === 'en'
                ? 'Empowering our community youth to excel in global luxury hospitality, culinary arts, and cruise management with India’s definitive directory of NCHMCT Affiliated IHMs, Food Craft Institutes (FCIs), Culinary Academies, and Tourism Institutes. Access 120+ verified B.Sc Hospitality, BHM, and Cruise placement records.'
                : 'भारत के शीर्ष एनसीएचएमसीटी (NCHMCT) स्वीकृत आईएचएम (IHM) संस्थानों, फूड क्राफ्ट कॉलेजों, पाक कला (Culinary Arts) अकादमियों और पर्यटन प्रबंधन कॉलेजों की प्रामाणिक निर्देशिका।'}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>120+ Verified Hospitality Institutes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <ShieldCheck className="w-4 h-4 text-[#FFD54A]" />
                <span>100% NCHMCT & AICTE Approved</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/15 text-center min-w-[240px] shadow-lg">
            <span className="text-[11px] uppercase tracking-wider text-stone-300 font-extrabold block mb-1">Global Hospitality Growth</span>
            <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">500,000+</div>
            <span className="text-[10px] text-stone-300 font-bold block mt-1">New Hospitality Jobs by 2028</span>
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-center">
              <div>
                <span className="text-[10px] text-stone-400 font-bold block">Central & State IHMs</span>
                <span className="text-sm font-black text-emerald-400">46+ IHMs</span>
              </div>
              <div className="border-l border-white/10 px-2">
                <span className="text-[10px] text-stone-400 font-bold block">Food Craft Inst.</span>
                <span className="text-sm font-black text-amber-400">18+ FCIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABBED NAVIGATION */}
      <div id="hotel_directory_top_nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="border-b border-stone-200 bg-white p-2 rounded-2xl flex flex-wrap gap-1 shadow-xs">
          {[
            { id: 'directory', labelEn: 'Hospitality Institutes Directory', labelHi: 'हॉस्पिटैलिटी संस्थान निर्देशिका', icon: Building2 },
            { id: 'nchm', labelEn: 'NCHM JEE & NCHMCT Counselling Hub', labelHi: 'एनसीएचएम जेईई एवं काउंसलिंग हब', icon: BookOpen },
            { id: 'culinary', labelEn: 'Culinary Arts & Cruise Careers', labelHi: 'कुलिनरी आर्ट्स एवं क्रूज़ करियर', icon: Ship },
            { id: 'careers', labelEn: 'Hospitality & Tourism Industry Guide', labelHi: 'होटल उद्योग एवं पर्यटन गाइड', icon: Coffee }
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

      {/* 3. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* TAB 1: DIRECTORY */}
        {activeTab === 'directory' && (
          <div className="space-y-6">
            {/* SEARCH AND FILTERS CARD */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                {/* Search Input */}
                <div className="relative w-full lg:flex-1">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search IHM, college name, city, course (B.Sc Hospitality, BHM, Culinary) or recruiters...'
                        : 'आईएचएम, कॉलेज का नाम, शहर, कोर्स या रिक्रूटर खोजें...'
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

                {/* Quick Toggle Buttons */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
                  <button
                    onClick={() => setNchmctOnly(!nchmctOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      nchmctOnly
                        ? 'bg-[#004B23] text-[#FFD54A] border-[#004B23] shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>NCHMCT Affiliated</span>
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
                    <span>Hostel Available</span>
                  </button>

                  <button
                    onClick={() => setScholarshipOnly(!scholarshipOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      scholarshipOnly
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Scholarships</span>
                  </button>

                  {(selectedState !== 'All States & UTs' || selectedCourse !== 'All' || selectedSpecialization !== 'All' || selectedType !== 'All' || searchQuery || minorityOnly || hostelOnly || scholarshipOnly || !nchmctOnly) && (
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-stone-100">
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

                {/* Course Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Utensils className="w-3 h-3 text-[#004B23]" />
                    <span>Hospitality Course:</span>
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Courses</option>
                    {programmesList.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Wine className="w-3 h-3 text-[#004B23]" />
                    <span>Specialization:</span>
                  </label>
                  <select
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Specializations</option>
                    {specializationsList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Sorting */}
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
                    <option value="Placement">Highest Placement Package</option>
                    <option value="NAAC Grade">NAAC Accreditation</option>
                    <option value="Establishment Year">Oldest Established</option>
                    <option value="Government">Prefer Government</option>
                    <option value="Private">Prefer Private</option>
                  </select>
                </div>
              </div>

              {/* QUICK JUMP STATE CHIPS */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-2">
                  ⚡ Popular Hospitality Hubs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Delhi', 'Maharashtra', 'Uttar Pradesh', 'Goa', 
                    'Rajasthan', 'Karnataka', 'Tamil Nadu', 'West Bengal'
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
                Found <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Hospitality Institutes
              </span>
              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>Cross-referenced with NCHMCT Council & Ministry of Tourism Registers.</span>
              </div>
            </div>

            {/* INSTITUTION CARDS GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No Hospitality Institutes match your filter</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try clearing search keywords, adjusting course criteria, or selecting another state.
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
                      {/* Top Accent Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                        college.ownership === 'Government' 
                          ? 'bg-[#004B23]' 
                          : college.isMinorityInstitution 
                          ? 'bg-[#D4AF37]' 
                          : 'bg-indigo-600'
                      }`} />

                      <div>
                        {/* Header Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                          <span className="inline-flex items-center gap-1.5 bg-[#0B132B] text-[#FFD54A] text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-xs">
                            <Building2 className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>{college.ownership}</span>
                          </span>

                          <div className="flex items-center gap-1">
                            {college.nchmctAffiliated && (
                              <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-200 uppercase">
                                NCHMCT Affiliated
                              </span>
                            )}
                            {college.isMinorityInstitution && (
                              <span className="bg-amber-50 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded border border-amber-200 uppercase">
                                Minority
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title and year */}
                        <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 leading-snug mb-1">
                          {college.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-bold mb-3">
                          📅 Est. {college.yearEstablished} • NAAC: {college.naacGrade}
                        </p>

                        {/* Geographic Location */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200 mb-3">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* University Affiliation */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 mb-4">
                          <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span className="truncate">{college.universityAffiliation}</span>
                        </div>

                        {/* Program Chips */}
                        <div className="mb-4 space-y-1">
                          <span className="text-[10px] uppercase font-extrabold text-stone-400 block">Programmes Offered:</span>
                          <div className="flex flex-wrap gap-1">
                            {college.programmes.slice(0, 4).map((prog, idx) => (
                              <span key={idx} className="bg-stone-100 text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded border border-stone-200">
                                {prog}
                              </span>
                            ))}
                            {college.programmes.length > 4 && (
                              <span className="text-[10px] font-bold text-[#004B23] px-1">
                                +{college.programmes.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Fees & Salary Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/60 mb-4">
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Tuition Fees</span>
                            <span className="font-extrabold text-[#004B23] truncate block">
                              {college.financialInfo.tuitionFees}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Avg Package</span>
                            <span className="font-extrabold text-stone-800 truncate block">
                              {college.placement.averagePackage}
                            </span>
                          </div>
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

                        <a
                          href="https://nchm.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on NCHMCT Official Portal</span>
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
                                ? 'z-10 bg-[#004B23] text-[#FFD54A]'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
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

        {/* TAB 2: NCHM JEE & COUNSELLING HUB */}
        {activeTab === 'nchm' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>NCHM JEE National Level Entrance Examination</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                National Council for Hotel Management (NCHM JEE) Roadmap
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Conducted by National Testing Agency (NTA), NCHM JEE is the unified entrance exam for admission to 21 Central IHMs, 25 State IHMs, 1 PSU IHM, and 29 Private IHMs for B.Sc Hospitality & Hotel Administration (JNU Degree).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "Step 1: NCHM JEE Examination Pattern",
                  body: "Computer Based Test (CBT) featuring 200 MCQs (Numerical Ability, Reasoning, General Knowledge, English Language, Aptitude for Service Sector) with +4 for correct answer and -1 for negative mark.",
                  badge: "NTA Examination Desk",
                  link: "https://nchmjee.nta.nic.in"
                },
                {
                  step: "Step 2: NCHMCT Online Centralized Counselling",
                  body: "Centralized choice filling and seat allocation rounds conducted by NCHMCT. Seats locked based on All India Rank (AIR), category reservations (OBC-NCL, EWS, SC/ST, Minority), and institute preference.",
                  badge: "NCHMCT Seat Allocation",
                  link: "https://nchmcounselling.nic.in"
                },
                {
                  step: "Step 3: 21 Central IHMs vs 25 State IHMs",
                  body: "Central IHMs (Pusa Delhi, Mumbai, Chennai, Kolkata, Bangalore) are premier autonomous institutes under Ministry of Tourism, Govt of India with top 5-star campus recruitment.",
                  badge: "Ministry of Tourism",
                  link: "https://tourism.gov.in"
                },
                {
                  step: "Step 4: 20-Week Mandatory Industrial Exposure Training",
                  body: "During Semester 3 / 4, students complete 20 weeks of hands-on industrial exposure training in 5-star luxury hotels across Front Office, Food Production, F&B Service, and Housekeeping.",
                  badge: "Industry Placement Desk",
                  link: "https://nchm.gov.in"
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-200 hover:border-[#004B23] shadow-md transition space-y-4">
                  <span className="text-[10px] font-black uppercase text-[#004B23] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">{card.badge}</span>
                  <h3 className="text-lg font-black text-stone-900">{card.step}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    {card.body}
                  </p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#004B23] hover:underline pt-2"
                  >
                    <span>Official NCHMCT Examination Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CULINARY ARTS & CRUISE CAREERS */}
        {activeTab === 'culinary' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Ship className="w-4 h-4 text-indigo-700" />
                <span>Culinary Arts, Pastry & Cruise Hospitality</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Culinary Arts, Executive Chef & Cruise Line Careers
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Explore rewarding careers as Executive Chefs, Master Pastry Chefs, and Cruise Hospitality Specialists with international liners like Royal Caribbean, Carnival, and Celebrity Cruises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-600" />
                  <span>Culinary Arts & Kitchen Operations</span>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Specialized training in Garde Manger, Classical French Cooking, Pan-Asian Gastronomy, Molecular Gastronomy, Quantity Food Production, and Food Safety Standards (HACCP).
                </p>
                <ul className="space-y-2 text-xs font-bold text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Commis Chef to Executive Sous Chef Progression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Advanced Bakery & Patisserie Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Food Cost Control & Kitchen Layout Planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-indigo-600" />
                  <span>International Cruise Line Hospitality</span>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  High-paying tax-free contracts in USD on international luxury cruise liners with STCW maritime safety certifications and CDC (Continuous Discharge Certificate) seamen record books.
                </p>
                <ul className="space-y-2 text-xs font-bold text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Royal Caribbean, Carnival, NCL Campus Interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tax-Free Salary ($1,800 - $4,500 / month)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>STCW 2010 Maritime Safety Mandatory Modules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CAREER & INDUSTRY GUIDE */}
        {activeTab === 'careers' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Coffee className="w-4 h-4 text-emerald-700" />
                <span>Hospitality Career Spectrum</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Hospitality, Hotel & Tourism Career Pathways
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                A degree in hospitality management opens doors beyond 5-star hotels into airline customer service, event management, luxury retail, and travel agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Front Office & Revenue Management",
                  eligibility: "B.Sc Hospitality / BHM • Excellent Communication • Opera PMS Software",
                  desc: "Managing guest check-ins, VIP concierge services, room tariff pricing algorithms, and property management systems in luxury hotels.",
                  salary: "₹4.5L - ₹12.0L / yr"
                },
                {
                  title: "Food & Beverage (F&B) Management",
                  eligibility: "B.Sc / Diploma F&B • Sommelier & Barista Training",
                  desc: "Overseeing fine dining restaurants, banquets, bar operations, food cost accounting, and catering services.",
                  salary: "₹5.0L - ₹15.0L / yr"
                },
                {
                  title: "Airline & Airport Hospitality",
                  eligibility: "Hospitality Graduate • Customer Service Aptitude",
                  desc: "Managing premium airport lounges (GVK, Adani, Encalm), ground handling passenger relations, and inflight catering operations.",
                  salary: "₹4.0L - ₹10.0L / yr"
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-md space-y-3">
                  <h3 className="text-base font-black text-stone-900">{card.title}</h3>
                  <p className="text-[11px] font-bold text-amber-900 bg-amber-50 p-2 rounded-xl border border-amber-200">
                    {card.eligibility}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-black">
                    <span className="text-stone-500">Typical Salary:</span>
                    <span className="text-[#004B23]">{card.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* 4. FULL DETAILED INSTITUTION PROFILE MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative text-stone-800"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image Banner */}
              <div className="relative h-48 sm:h-64 w-full bg-stone-900 overflow-hidden">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#004B23] text-[#FFD54A] text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                        {selectedCollege.ownership}
                      </span>
                      {selectedCollege.nchmctAffiliated && (
                        <span className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                          NCHMCT Affiliated
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">
                      {selectedCollege.name}
                    </h2>
                    <p className="text-xs text-stone-300 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{selectedCollege.city}, {selectedCollege.district}, {selectedCollege.state}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Key Overview Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Established</span>
                    <span className="text-sm font-extrabold text-stone-900">{selectedCollege.yearEstablished}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">NAAC Grade</span>
                    <span className="text-sm font-extrabold text-[#004B23]">{selectedCollege.naacGrade}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Tuition Fees</span>
                    <span className="text-sm font-extrabold text-stone-900 truncate block">{selectedCollege.financialInfo.tuitionFees}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Avg Salary</span>
                    <span className="text-sm font-extrabold text-emerald-700">{selectedCollege.placement.averagePackage}</span>
                  </div>
                </div>

                {/* Campus Gallery */}
                <div className="space-y-2">
                  <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider">Campus & Training Labs Gallery</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedCollege.campusGallery.map((img, idx) => (
                      <img key={idx} src={img} alt="Campus" className="h-24 w-full object-cover rounded-xl border border-stone-200" />
                    ))}
                  </div>
                </div>

                {/* Affiliations & Accreditations */}
                <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-2">
                  <h3 className="text-xs font-black uppercase text-amber-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span>Affiliations & Government Recognition</span>
                  </h3>
                  <p className="text-xs font-bold text-stone-800">
                    <span className="text-stone-500">Affiliation: </span>{selectedCollege.universityAffiliation}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[10px] font-bold bg-white text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-300">
                      NCHMCT: {selectedCollege.nchmctAffiliated ? 'Yes (Central/State Approved)' : 'University Stream'}
                    </span>
                    <span className="text-[10px] font-bold bg-white text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-300">
                      AICTE Approved: {selectedCollege.aicteApproved ? 'Yes' : 'N/A'}
                    </span>
                    <span className="text-[10px] font-bold bg-white text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-300">
                      UGC Recognized: {selectedCollege.ugcRecognized ? 'Yes' : 'N/A'}
                    </span>
                  </div>
                </div>

                {/* Programmes Offered */}
                <div className="space-y-3">
                  <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-[#004B23]" />
                    <span>Programmes Offered & Specializations</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCollege.programmes.map((prog, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-xl border border-stone-200">
                        {prog}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-stone-500 block mb-1">Specializations:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedCollege.specializations.map((spec, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-900 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Training Facilities & Labs */}
                <div className="space-y-3">
                  <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#004B23]" />
                    <span>Training Kitchens & Hospitality Infrastructure</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedCollege.trainingFacilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-stone-50 p-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry Training & Placement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                    <h4 className="text-xs font-black uppercase text-stone-900">20-Week Industrial Exposure Training</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-medium">
                      {selectedCollege.industryTraining.industrialTrainingDuration}
                    </p>
                    <div className="text-[11px] font-bold text-[#004B23] pt-1">
                      Partner Hotels: {selectedCollege.industryTraining.hotelInternship}
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                    <h4 className="text-xs font-black uppercase text-stone-900">Placement Records & Salary</h4>
                    <div className="text-xs font-bold text-stone-800 space-y-1">
                      <div>Highest Package: <span className="text-[#004B23] font-black">{selectedCollege.placement.highestPackage}</span></div>
                      <div>Average Package: <span className="text-stone-900 font-black">{selectedCollege.placement.averagePackage}</span></div>
                    </div>
                    <div className="pt-1">
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Top Recruiters:</span>
                      <p className="text-xs font-bold text-stone-700">
                        {selectedCollege.placement.topRecruiters.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Financial Info */}
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 space-y-2">
                  <h4 className="text-xs font-black uppercase text-emerald-900">Fees & Scholarship Support</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-stone-800">
                    <div>Tuition: {selectedCollege.financialInfo.tuitionFees}</div>
                    <div>Hostel: {selectedCollege.financialInfo.hostelFees}</div>
                    <div>Uniform Kit: {selectedCollege.financialInfo.uniformCharges}</div>
                    <div>Chef Tool Kit: {selectedCollege.financialInfo.trainingKitCharges}</div>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-bold pt-1">
                    ✓ Govt Scholarships Applicable: {selectedCollege.financialInfo.govtScholarships ? 'Yes' : 'No'} | Minority Scholarships: {selectedCollege.financialInfo.minorityScholarships ? 'Available' : 'Standard'}
                  </p>
                </div>

                {/* Faculty Details */}
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs font-bold text-stone-800 space-y-1">
                  <div>Principal: {selectedCollege.faculty.principal}</div>
                  <div>Faculty Strength: {selectedCollege.faculty.facultyStrength} Members (Ratio {selectedCollege.faculty.studentFacultyRatio})</div>
                  <div>Executive Chefs & Industry Experts: {selectedCollege.faculty.executiveChefsCount} Master Chefs & {selectedCollege.faculty.industryExperts} Experts</div>
                </div>

                {/* Contact & Map Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-stone-900 text-white rounded-2xl">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs font-bold text-stone-300">📞 Phone: {selectedCollege.contact.phone}</div>
                    <div className="text-xs font-bold text-stone-300">✉️ Email: {selectedCollege.contact.email}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-center">
                    <a
                      href={selectedCollege.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>Google Maps</span>
                    </a>

                    <a
                      href={selectedCollege.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl text-xs font-black flex items-center gap-1.5 transition"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Official Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
