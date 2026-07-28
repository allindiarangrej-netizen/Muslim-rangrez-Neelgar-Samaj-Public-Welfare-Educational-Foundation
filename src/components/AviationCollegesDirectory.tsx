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
  Briefcase,
  Sliders,
  X,
  FileText,
  Bookmark,
  ChevronLeft,
  FileCheck,
  Plane,
  Compass as NavIcon,
  Activity,
  Wrench,
  UserCheck,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { Language } from '../types';
import { AVIATION_COLLEGES, AviationCollegeProfile } from '../data/aviationCollegesData';

interface AviationCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function AviationCollegesDirectory({ currentLanguage }: AviationCollegesDirectoryProps) {
  // Navigation / View State
  const [activeTab, setActiveTab] = useState<'directory' | 'pilot' | 'ame' | 'airport'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [dgcaOnly, setDgcaOnly] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<AviationCollegeProfile | null>(null);

  // Schema list of states extracted dynamically
  const statesList = useMemo(() => {
    const states = new Set(AVIATION_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Predefined programme categories
  const programmesList = [
    "Commercial Pilot Licence (CPL)", "Private Pilot Licence (PPL)", "Student Pilot Licence (SPL)",
    "Airline Transport Pilot Licence (ATPL)", "Aircraft Maintenance Engineering (AME - Avionics)",
    "Aircraft Maintenance Engineering (AME - Mechanical)", "B.Sc. Aviation", "MBA Aviation Management",
    "BBA Airport Management", "Cabin Crew & Air Hostess Diploma", "Flight Dispatcher Certificate",
    "Drone Technology & UAV Pilot", "Aviation Safety & Security Certificate"
  ];

  // Predefined specializations
  const specializationsList = [
    "Commercial Flying", "Airline Operations", "Airport Management", "Aircraft Engineering", 
    "Avionics", "Helicopter Flying", "Drone Technology", "UAV Operations", 
    "Flight Safety", "Air Cargo", "Aviation Law", "Air Navigation", 
    "Meteorology", "Ground Operations", "Aircraft Systems", "Aviation Finance"
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedCourse('All');
    setSelectedSpecialization('All');
    setSelectedType('All');
    setMinorityOnly(false);
    setHostelOnly(false);
    setScholarshipOnly(false);
    setDgcaOnly(true);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Sync current page back to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, minorityOnly, hostelOnly, scholarshipOnly, dgcaOnly, activeTab]);

  // Main Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    let result = [...AVIATION_COLLEGES];

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(college => 
        college.name.toLowerCase().includes(q) ||
        college.city.toLowerCase().includes(q) ||
        college.district.toLowerCase().includes(q) ||
        college.address.toLowerCase().includes(q) ||
        college.universityAffiliation.toLowerCase().includes(q) ||
        college.programmes.some(p => p.toLowerCase().includes(q)) ||
        college.specializations.some(s => s.toLowerCase().includes(q))
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

    // DGCA Approved
    if (dgcaOnly) {
      result = result.filter(c => c.dgcaApproved);
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
      if (sortBy === 'Flying Hours') {
        const aHours = parseInt(a.flightTraining.flyingHours.replace(/[^0-9]/g, '')) || 0;
        const bHours = parseInt(b.flightTraining.flyingHours.replace(/[^0-9]/g, '')) || 0;
        return bHours - aHours;
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
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, minorityOnly, hostelOnly, scholarshipOnly, dgcaOnly, sortBy]);

  // Paginated Subset
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(start, start + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById('aviation_directory_top_nav');
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
      "name": "National Aviation Colleges & Flying Training Organizations Directory - Rangrez Community",
      "description": "Comprehensive DGCA Approved Flying Training Organizations (FTOs), Pilot Academies, AME Institutes, and Airport Management Colleges in India with flying fleet details, medical requirements, and airline placements.",
      "url": "https://allindiarangrej.org/education/aviation-colleges-directory",
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

      <meta name="title" content="Verified DGCA Flying Schools, Pilot Academies & AME Colleges Directory" />
      <meta name="description" content="Find verified DGCA approved Flying Training Organizations (FTOs), CPL Pilot Training Academies, Aircraft Maintenance Engineering (AME) Colleges, and Airport Management Institutes across India." />

      {/* 1. HERO BRAND BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[#D4AF37]/80 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <Plane className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'National Directorate of Aviation Education' : 'राष्ट्रीय विमानन शिक्षा एवं पायलट प्रशिक्षण निदेशालय'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              {currentLanguage === 'en' ? 'Aviation Colleges & Flying Schools Directory' : 'विमानन संस्थान एवं फ्लाइंग ट्रेनिंग अकादमी निर्देशिका'}
            </h1>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-medium">
              {currentLanguage === 'en'
                ? 'Empowering our community youth to reach the skies with India’s definitive directory of DGCA Approved Flying Training Organizations (FTOs), Aircraft Maintenance Engineering (AME) Colleges, Cabin Crew Academies, and Airport Management Institutes. Search 150+ verified CPL pilot academies, fleet capacity, Class I medical guidance, and airline recruitment records.'
                : 'भारत के शीर्ष डीजीसीए (DGCA) स्वीकृत फ्लाइंग स्कूलों, सीपीएल पायलट प्रशिक्षण अकादमियों, एएमई इंजीनियरिंग कॉलेजों और एयरपोर्ट मैनेजमेंट संस्थानों की प्रामाणिक निर्देशिका।'}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>150+ Verified Institutes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <ShieldCheck className="w-4 h-4 text-[#FFD54A]" />
                <span>100% DGCA & CAR Approved</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/15 text-center min-w-[240px] shadow-lg">
            <span className="text-[11px] uppercase tracking-wider text-stone-300 font-extrabold block mb-1">Indian Aviation Pilot Demand</span>
            <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">15,000+</div>
            <span className="text-[10px] text-stone-300 font-bold block mt-1">New Pilots Required by 2030</span>
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-center">
              <div>
                <span className="text-[10px] text-stone-400 font-bold block">DGCA Flying Schools</span>
                <span className="text-sm font-black text-emerald-400">36+ FTOs</span>
              </div>
              <div className="border-l border-white/10 px-2">
                <span className="text-[10px] text-stone-400 font-bold block">AME Colleges</span>
                <span className="text-sm font-black text-amber-400">52+ Inst.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABBED NAVIGATION */}
      <div id="aviation_directory_top_nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="border-b border-stone-200 bg-white p-2 rounded-2xl flex flex-wrap gap-1 shadow-xs">
          {[
            { id: 'directory', labelEn: 'Aviation Institutes Directory', labelHi: 'विमानन संस्थान निर्देशिका', icon: Plane },
            { id: 'pilot', labelEn: 'Pilot Training (CPL / PPL) & DGCA Hub', labelHi: 'पायलट प्रशिक्षण एवं डीजीसीए हब', icon: Compass },
            { id: 'ame', labelEn: 'Aircraft Maintenance (AME) Guide', labelHi: 'विमान रखरखाव (AME) गाइड', icon: Wrench },
            { id: 'airport', labelEn: 'Cabin Crew & Airport Management', labelHi: 'केबिन क्रू एवं एयरपोर्ट मैनेजमेंट', icon: UserCheck }
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
        
        {/* TAB 1: AVIATION DIRECTORY */}
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
                        ? 'Search academy name, city, course (CPL, AME, Cabin Crew) or fleet...'
                        : 'अकादमी का नाम, शहर, कोर्स (CPL, AME) या विमान खोजें...'
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
                    onClick={() => setDgcaOnly(!dgcaOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      dgcaOnly
                        ? 'bg-[#004B23] text-[#FFD54A] border-[#004B23] shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DGCA Approved</span>
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

                  {(selectedState !== 'All States & UTs' || selectedCourse !== 'All' || selectedSpecialization !== 'All' || selectedType !== 'All' || searchQuery || minorityOnly || hostelOnly || scholarshipOnly || !dgcaOnly) && (
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
                    <Plane className="w-3 h-3 text-[#004B23]" />
                    <span>Aviation Discipline:</span>
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Disciplines</option>
                    {programmesList.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <NavIcon className="w-3 h-3 text-[#004B23]" />
                    <span>Aviation Specialization:</span>
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
                    <option value="Flying Hours">Most Flying Hours</option>
                    <option value="Placement">Highest Placement Salary</option>
                    <option value="Establishment Year">Oldest Established</option>
                    <option value="Government">Prefer Government</option>
                    <option value="Private">Prefer Private</option>
                  </select>
                </div>
              </div>

              {/* QUICK JUMP STATE CHIPS */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-2">
                  ⚡ Quick Aviation Hubs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Uttar Pradesh', 'Maharashtra', 'Delhi', 'Madhya Pradesh', 
                    'Gujarat', 'Telangana', 'Karnataka', 'Tamil Nadu', 'West Bengal'
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
                Found <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Aviation Institutes
              </span>
              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>All entries cross-referenced with DGCA CAR Series F & Civil Aviation Register.</span>
              </div>
            </div>

            {/* INSTITUTION CARDS GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No Aviation Institutes match your filter</h3>
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
                          : 'bg-blue-600'
                      }`} />

                      <div>
                        {/* Header Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                          <span className="inline-flex items-center gap-1.5 bg-[#0B132B] text-[#FFD54A] text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-xs">
                            <Plane className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>{college.ownership}</span>
                          </span>

                          <div className="flex items-center gap-1">
                            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-200 uppercase">
                              DGCA Approved
                            </span>
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
                          📅 Est. {college.yearEstablished} • {college.dgcaApprovalStatus}
                        </p>

                        {/* Geographic Location */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200 mb-3">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* Fleet / Flying Hours Info */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-900 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200 mb-4">
                          <Plane className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                          <span className="truncate">Fleet: {college.flightTraining.flyingFleet}</span>
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
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Course Fees</span>
                            <span className="font-extrabold text-[#004B23] truncate block">
                              {college.financialInfo.courseFees}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Avg Salary</span>
                            <span className="font-extrabold text-stone-800 truncate block">
                              {college.placement.averagePackage.split('/')[0]}
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
                          href="https://dgca.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on DGCA Official Portal</span>
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

        {/* TAB 2: PILOT TRAINING & DGCA HUB */}
        {activeTab === 'pilot' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Plane className="w-4 h-4 text-sky-700" />
                <span>Commercial Pilot Licence (CPL) Roadmap</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                DGCA Commercial Pilot Licence Steps & Regulations
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Under Civil Aviation Requirements (CAR) Section 7 Series F, obtaining an Indian CPL requires passing 5 DGCA ground theory exams, 200 flying hours, and Class I Medical Fitness from DGCA empanelled medical centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "Step 1: Class II & Class I Medical Exam",
                  body: "Obtain a DGCA Class II Medical initial assessment from a registered aviation medical examiner (AME), followed by Class I Medical Examination at Air Force Central Medical Establishment (AFCME) / IAM IAF Bangalore.",
                  badge: "DGCA Medical Desk",
                  link: "https://dgca.gov.in"
                },
                {
                  step: "Step 2: DGCA Computer-Based Ground Exams",
                  body: "Clear 5 mandatory DGCA theory papers: Air Navigation, Aviation Meteorology, Air Regulations, Aircraft & Engines General, and RTR(A) Radio Telephony conducted by WPC Wireless Planning Commission.",
                  badge: "DGCA Exam Portal",
                  link: "https://pariksha.dgca.gov.in"
                },
                {
                  step: "Step 3: 200 Hours Flying Training",
                  body: "Complete 200 flying hours logbook: 100 hrs solo, 50 hrs cross-country, 20 hrs instrument flight training, and 10 hrs night flying on Cessna 172 or DA42 twin-engine aircraft at a DGCA approved FTO.",
                  badge: "FTO Flying Desk",
                  link: "https://igrua.gov.in"
                },
                {
                  step: "Step 4: Type Rating & Airline Cadet Entry",
                  body: "Undergo Airbus A320 / Boeing 737 / ATR 72-600 Type Rating course at TRTO (Type Rating Training Organization) followed by Airline Cadet Pilot Program assessment (IndiGo, Air India, SpiceJet).",
                  badge: "Airline Placement Desk",
                  link: "https://airindia.com"
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
                    <span>Official DGCA Requirement Docs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: AIRCRAFT MAINTENANCE (AME) GUIDE */}
        {activeTab === 'ame' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-amber-700" />
                <span>DGCA CAR 147 Approved AME Stream</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Aircraft Maintenance Engineering (AME) Licence Overview
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Aircraft Maintenance Engineers certify the airworthiness of commercial jets, cargo haulers, and helicopters before every single flight takeoff under DGCA CAR 66 regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  <span>Category B1: Mechanical Stream</span>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Covers turbine jet engines, piston engines, airframes, hydraulic systems, fuel lines, landing gears, and structural sheet metal maintenance.
                </p>
                <ul className="space-y-2 text-xs font-bold text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Subcategory B1.1: Turbine Aeroplanes (Airbus, Boeing)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Subcategory B1.2: Piston Aeroplanes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Subcategory B1.3: Turbine Helicopters</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  <span>Category B2: Avionics Stream</span>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Focuses on aircraft electrical power generation, fly-by-wire flight control computers, radar navigation, VHF communications, and digital cockpit displays.
                </p>
                <ul className="space-y-2 text-xs font-bold text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Electrical System & Power Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instrument & Gyroscopic Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Radio Navigation & Radar Electronics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CABIN CREW & AIRPORT MANAGEMENT */}
        {activeTab === 'airport' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>Airline Ground & In-Flight Operations</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Cabin Crew, Ground Handling & Airport Management
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Explore lucrative career paths in international passenger services, airport operations across GMR & Adani airport networks, and cabin crew roles with global carriers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cabin Crew & Flight Attendant",
                  eligibility: "10+2 Any Stream • Age 18-26 • Min Height 155cm (Female) / 170cm (Male)",
                  desc: "Safety procedures, emergency evacuation mockups, first aid, grooming, and in-flight service excellence.",
                  salary: "₹45,000 - ₹1,20,000 / month"
                },
                {
                  title: "BBA / MBA Airport Management",
                  eligibility: "10+2 / Bachelor's Degree in any discipline",
                  desc: "Passenger terminal management, baggage logistics, airside safety, apron control, and aviation finance.",
                  salary: "₹35,000 - ₹85,000 / month"
                },
                {
                  title: "Flight Dispatcher & Operations Officer",
                  eligibility: "10+2 with PCM Physics & Mathematics",
                  desc: "Flight plan calculation, weather routing, fuel optimization, and real-time flight tracking under DGCA supervision.",
                  salary: "₹50,000 - ₹1,10,000 / month"
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-black text-stone-900">{card.title}</h3>
                    <p className="text-[11px] font-bold text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200 my-2">
                      {card.eligibility}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Avg Salary:</span>
                    <span className="text-sm font-black text-[#004B23]">{card.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ======================================================= */}
      {/* 4. INSTITUTION PROFILE DETAIL MODAL */}
      {/* ======================================================= */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-stone-900 relative"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image Banner */}
              <div className="relative h-48 sm:h-64 w-full bg-stone-900 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="bg-[#D4AF37] text-stone-900 text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-xs">
                    {selectedCollege.ownership} • Est. {selectedCollege.yearEstablished}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-black font-serif text-white drop-shadow-md">
                    {selectedCollege.name}
                  </h2>
                  <p className="text-xs text-stone-200 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{selectedCollege.address}</span>
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Accreditation & DGCA Approval Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">DGCA Status</span>
                    <span className="font-extrabold text-emerald-800">{selectedCollege.dgcaApprovalStatus}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Affiliation</span>
                    <span className="font-extrabold text-stone-800">{selectedCollege.universityAffiliation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-stone-400 block">Approval</span>
                    <span className="font-extrabold text-indigo-900">{selectedCollege.aicteApproval}</span>
                  </div>
                </div>

                {/* Quick Action Link Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#004B23] text-[#FFD54A] rounded-xl text-xs font-black uppercase flex items-center gap-1.5 shadow-sm hover:bg-[#00381a] transition"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Official Website</span>
                  </a>

                  <a
                    href={selectedCollege.admissionPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#0B132B] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-slate-900 transition"
                  >
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                    <span>Admission Portal</span>
                  </a>

                  <a
                    href={selectedCollege.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-stone-100 text-stone-800 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-stone-300 hover:bg-stone-200 transition"
                  >
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <span>Google Maps</span>
                  </a>
                </div>

                {/* Flying Fleet & Flight Training Section */}
                <div className="space-y-3 bg-sky-50/70 p-5 rounded-2xl border border-sky-200">
                  <h3 className="text-sm uppercase font-black text-sky-900 flex items-center gap-1.5">
                    <Plane className="w-4 h-4 text-sky-700" />
                    <span>Flight Training & Fleet Specs</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-bold text-stone-500 block">Fleet Details:</span>
                      <span className="font-extrabold text-stone-900">{selectedCollege.flightTraining.flyingFleet}</span>
                    </div>
                    <div>
                      <span className="font-bold text-stone-500 block">Mandatory Flying Hours:</span>
                      <span className="font-extrabold text-stone-900">{selectedCollege.flightTraining.flyingHours}</span>
                    </div>
                    <div>
                      <span className="font-bold text-stone-500 block">Simulator Training:</span>
                      <span className="font-extrabold text-stone-900">{selectedCollege.flightTraining.simulatorHours}</span>
                    </div>
                    <div>
                      <span className="font-bold text-stone-500 block">Type Rating Guidance:</span>
                      <span className="font-extrabold text-stone-900">{selectedCollege.flightTraining.typeRatingGuidance}</span>
                    </div>
                  </div>
                </div>

                {/* Admission & Medical Requirements */}
                <div className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
                  <h3 className="text-sm uppercase font-black text-amber-900 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-amber-700" />
                    <span>Admission & DGCA Medical Rules</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <p><strong>Eligibility:</strong> {selectedCollege.admissionDetails.eligibility}</p>
                    <p><strong>Medical Standards:</strong> {selectedCollege.admissionDetails.medicalRequirements}</p>
                    <p><strong>English Requirement:</strong> {selectedCollege.admissionDetails.englishProficiency}</p>
                  </div>
                </div>

                {/* Programmes Offered */}
                <div className="space-y-3">
                  <h3 className="text-sm uppercase font-black text-stone-700">Programmes Offered</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollege.programmes.map((prog, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-900 px-3 py-1.5 rounded-xl text-xs font-bold border border-stone-200">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Financial & Fees Breakdown */}
                <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  <h3 className="text-sm uppercase font-black text-stone-700 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-700" />
                    <span>Fee Structure & Financial Assistance</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-stone-500 font-bold block">Course Fees:</span>
                      <span className="font-black text-[#004B23]">{selectedCollege.financialInfo.courseFees}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 font-bold block">Flying Hour Rate:</span>
                      <span className="font-black text-stone-900">{selectedCollege.financialInfo.flyingTrainingCost}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 font-bold block">Hostel Charges:</span>
                      <span className="font-black text-stone-900">{selectedCollege.financialInfo.hostelFees}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm uppercase font-black text-stone-700">Official Campus Contact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-stone-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#004B23]" />
                      <span>Phone: {selectedCollege.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#004B23]" />
                      <span>Email: {selectedCollege.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-stone-100 rounded-b-3xl border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-stone-500 font-medium">
                  Verified Date: {selectedCollege.lastVerifiedDate} • DGCA Civil Register
                </span>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="px-6 py-2 bg-[#004B23] text-[#FFD54A] font-black text-xs uppercase rounded-xl shadow-md hover:bg-[#00381a] transition cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
