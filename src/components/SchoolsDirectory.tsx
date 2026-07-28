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
  Star,
  Bookmark,
  Layers,
  ArrowLeft,
  X,
  SlidersHorizontal,
  Bus,
  Check,
  Zap,
  Info,
  Download,
  Printer,
  FileSpreadsheet,
  Sliders,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import { 
  SchoolProfile, 
  VERIFIED_SCHOOLS_DATA, 
  ALL_SCHOOL_TYPES, 
  ALL_EDUCATION_BOARDS, 
  ALL_OWNERSHIP_TYPES 
} from '../data/schoolsData';

interface SchoolsDirectoryProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function SchoolsDirectory({ currentLanguage, onNavigate }: SchoolsDirectoryProps) {
  // Navigation tabs within directory
  const [activeTab, setActiveTab] = useState<'all' | 'govt_kv_jnv' | 'minority' | 'residential' | 'boards' | 'compare' | 'saved'>('all');
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedBoard, setSelectedBoard] = useState<string>('All Boards');
  const [selectedSchoolType, setSelectedSchoolType] = useState<string>('All Types');
  const [selectedOwnership, setSelectedOwnership] = useState<string>('All Ownerships');
  const [selectedClassLevel, setSelectedClassLevel] = useState<string>('All Classes');
  const [selectedMedium, setSelectedMedium] = useState<string>('All Mediums');
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [transportOnly, setTransportOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'alphabetical' | 'feeAsc' | 'feeDesc' | 'popularity' | 'newest' | 'oldest'>('popularity');

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Selected Profile Modal
  const [selectedSchool, setSelectedSchool] = useState<SchoolProfile | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'academics' | 'facilities' | 'admission' | 'transport_hostel' | 'parents' | 'contact'>('overview');

  // Compare & Saved Schools list
  const [savedSchoolIds, setSavedSchoolIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rcb_saved_schools');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [compareSchoolIds, setCompareSchoolIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);

  // Extract States & UTs dynamically
  const availableStates = useMemo(() => {
    const states = Array.from(new Set(VERIFIED_SCHOOLS_DATA.map(s => s.state))).sort();
    return ['All States & UTs', ...states];
  }, []);

  // Extract Districts dynamically based on selected state
  const availableDistricts = useMemo(() => {
    if (selectedState === 'All States & UTs') return ['All Districts'];
    const districts = Array.from(
      new Set(VERIFIED_SCHOOLS_DATA.filter(s => s.state === selectedState).map(s => s.district))
    ).sort();
    return ['All Districts', ...districts];
  }, [selectedState]);

  // Handle Save / Bookmark toggle
  const toggleSaveSchool = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    let updated: string[];
    if (savedSchoolIds.includes(id)) {
      updated = savedSchoolIds.filter(item => item !== id);
    } else {
      updated = [...savedSchoolIds, id];
    }
    setSavedSchoolIds(updated);
    localStorage.setItem('rcb_saved_schools', JSON.stringify(updated));
  };

  // Handle Compare toggle
  const toggleCompareSchool = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (compareSchoolIds.includes(id)) {
      setCompareSchoolIds(compareSchoolIds.filter(item => item !== id));
    } else {
      if (compareSchoolIds.length >= 4) {
        alert('You can compare a maximum of 4 schools at a time.');
        return;
      }
      setCompareSchoolIds([...compareSchoolIds, id]);
    }
  };

  // Filter & Search Logic
  const filteredSchools = useMemo(() => {
    return VERIFIED_SCHOOLS_DATA.filter(school => {
      // Sub-tab restrictions
      if (activeTab === 'govt_kv_jnv') {
        const isGovt = ['Government Schools', 'Kendriya Vidyalaya', 'Jawahar Navodaya Vidyalaya (JNV)', 'Sainik Schools', 'Eklavya Model Residential Schools (EMRS)', 'PM SHRI Schools'].some(t => school.schoolType.includes(t)) || school.ownership === 'Government';
        if (!isGovt) return false;
      }

      if (activeTab === 'minority') {
        if (!school.minorityInstitution && school.minorityType === 'None') return false;
      }

      if (activeTab === 'residential') {
        const isRes = school.facilities.hostel || school.schoolType.includes('Residential') || school.schoolType.includes('Boarding');
        if (!isRes) return false;
      }

      if (activeTab === 'saved') {
        if (!savedSchoolIds.includes(school.id)) return false;
      }

      // State Filter
      if (selectedState !== 'All States & UTs' && school.state !== selectedState) {
        return false;
      }

      // District Filter
      if (selectedDistrict !== 'All Districts' && school.district !== selectedDistrict) {
        return false;
      }

      // Board Filter
      if (selectedBoard !== 'All Boards' && school.board !== selectedBoard) {
        return false;
      }

      // School Type Filter
      if (selectedSchoolType !== 'All Types' && !school.schoolType.toLowerCase().includes(selectedSchoolType.toLowerCase())) {
        return false;
      }

      // Ownership Filter
      if (selectedOwnership !== 'All Ownerships' && school.ownership !== selectedOwnership) {
        return false;
      }

      // Class Filter
      if (selectedClassLevel !== 'All Classes' && !school.classesOffered.includes(selectedClassLevel)) {
        return false;
      }

      // Medium Filter
      if (selectedMedium !== 'All Mediums' && !school.mediumOfInstruction.includes(selectedMedium)) {
        return false;
      }

      // Hostel Only
      if (hostelOnly && !school.facilities.hostel) {
        return false;
      }

      // Transport Only
      if (transportOnly && !school.facilities.transport) {
        return false;
      }

      // Scholarship Only
      if (scholarshipOnly && (!school.scholarships || school.scholarships.length === 0)) {
        return false;
      }

      // Minority Only
      if (minorityOnly && !school.minorityInstitution) {
        return false;
      }

      // Search Query Matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = school.name.toLowerCase().includes(q) || school.shortName.toLowerCase().includes(q);
        const matchesCity = school.city.toLowerCase().includes(q) || school.district.toLowerCase().includes(q) || school.state.toLowerCase().includes(q);
        const matchesBoard = school.board.toLowerCase().includes(q);
        const matchesUdise = school.udiseCode.toLowerCase().includes(q) || school.schoolCode.toLowerCase().includes(q);
        const matchesPrincipal = school.principalName.toLowerCase().includes(q);

        if (!matchesName && !matchesCity && !matchesBoard && !matchesUdise && !matchesPrincipal) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
      if (sortBy === 'feeAsc') {
        const feeA = parseInt(a.annualFee.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.annualFee.replace(/[^0-9]/g, '')) || 0;
        return feeA - feeB;
      }
      if (sortBy === 'feeDesc') {
        const feeA = parseInt(a.annualFee.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.annualFee.replace(/[^0-9]/g, '')) || 0;
        return feeB - feeA;
      }
      if (sortBy === 'newest') return b.establishmentYear - a.establishmentYear;
      if (sortBy === 'oldest') return a.establishmentYear - b.establishmentYear;
      // popularity
      return b.studentStrength - a.studentStrength;
    });
  }, [
    activeTab, selectedState, selectedDistrict, selectedBoard, selectedSchoolType,
    selectedOwnership, selectedClassLevel, selectedMedium, hostelOnly, transportOnly,
    scholarshipOnly, minorityOnly, searchQuery, sortBy, savedSchoolIds
  ]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeTab, selectedState, selectedDistrict, selectedBoard, selectedSchoolType,
    selectedOwnership, selectedClassLevel, selectedMedium, hostelOnly, transportOnly,
    scholarshipOnly, minorityOnly, searchQuery, sortBy
  ]);

  // Paginated slice
  const paginatedSchools = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredSchools.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredSchools, currentPage]);

  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage) || 1;

  // Schema.org Structured Data Injection
  useEffect(() => {
    const scriptId = 'schools-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Rangrez Community Verified Schools Directory India",
      "description": "Comprehensive directory of 300+ accredited primary, secondary, and senior secondary schools across India.",
      "numberOfItems": filteredSchools.length,
      "itemListElement": paginatedSchools.map((school, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "EducationalOrganization",
          "name": school.name,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": school.city,
            "addressRegion": school.state,
            "addressCountry": "IN"
          },
          "telephone": school.contactPhone,
          "email": school.contactEmail,
          "url": school.websiteUrl
        }
      }))
    };

    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [paginatedSchools, filteredSchools]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans pb-16">
      {/* 1. TOP HERO HEADER */}
      <div className="bg-gradient-to-b from-[#0B132B] via-[#004B23] to-[#0B132B] text-white py-10 px-4 sm:px-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFD54A_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFD54A]/20 border border-[#FFD54A]/40 text-[#FFD54A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Verified National School Portal • Pre-Nursery to Class XII</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                <span>Schools Directory India</span>
                <span className="text-xs bg-[#004B23] text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-md font-mono">
                  {VERIFIED_SCHOOLS_DATA.length}+ Verified Schools
                </span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                Discover official information, board affiliations (CBSE, ICSE, IB, State Boards), UDISE+ codes, fee structures, hostels, transport, scholarships, and admission links for top public, government, minority, and private schools across India.
              </p>
            </div>

            {/* Quick Stats pill */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg shrink-0">
              <div className="text-center px-3 border-r border-white/20">
                <span className="block text-2xl font-black text-[#FFD54A]">300+</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Schools</span>
              </div>
              <div className="text-center px-3 border-r border-white/20">
                <span className="block text-2xl font-black text-emerald-400">28+</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">States & UTs</span>
              </div>
              <div className="text-center px-3">
                <span className="block text-2xl font-black text-cyan-300">100%</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Verified</span>
              </div>
            </div>
          </div>

          {/* Sub-Tabs Row */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏫 All Schools Directory</span>
            </button>
            <button
              onClick={() => setActiveTab('govt_kv_jnv')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'govt_kv_jnv'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏛️ Govt, KV, JNV & PM SHRI</span>
            </button>
            <button
              onClick={() => setActiveTab('minority')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'minority'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🕌 Minority Educational Schools</span>
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'residential'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏠 Residential & Boarding Schools</span>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🔖 Saved Schools ({savedSchoolIds.length})</span>
            </button>
            {compareSchoolIds.length > 0 && (
              <button
                onClick={() => setShowCompareModal(true)}
                className="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md flex items-center gap-2 cursor-pointer animate-pulse"
              >
                <Scale className="w-4 h-4" />
                <span>Compare Selected ({compareSchoolIds.length})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. ADVANCED SEARCH & FILTER CONTROLS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/80">
          {/* Main Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by School Name, City, District, State, UDISE+ Code, Board, Principal..."
              className="w-full pl-12 pr-10 py-3.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#004B23] focus:border-transparent transition outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {/* State Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">State / UT</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict('All Districts');
                }}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                {availableStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* District Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                {availableDistricts.map(dist => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
            </div>

            {/* Board Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Education Board</label>
              <select
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                {ALL_EDUCATION_BOARDS.map(board => (
                  <option key={board} value={board}>{board}</option>
                ))}
              </select>
            </div>

            {/* School Category/Type Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">School Type</label>
              <select
                value={selectedSchoolType}
                onChange={(e) => setSelectedSchoolType(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                {ALL_SCHOOL_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Ownership Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Ownership</label>
              <select
                value={selectedOwnership}
                onChange={(e) => setSelectedOwnership(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                {ALL_OWNERSHIP_TYPES.map(own => (
                  <option key={own} value={own}>{own}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="popularity">Popularity (Students)</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
                <option value="feeAsc">Fees (Low to High)</option>
                <option value="feeDesc">Fees (High to Low)</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Established Oldest</option>
              </select>
            </div>
          </div>

          {/* Quick Checkboxes Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-[#004B23]">
                <input
                  type="checkbox"
                  checked={hostelOnly}
                  onChange={(e) => setHostelOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span>🏠 Hostel & Mess Available</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-[#004B23]">
                <input
                  type="checkbox"
                  checked={transportOnly}
                  onChange={(e) => setTransportOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span>🚌 School Bus / GPS Transport</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-[#004B23]">
                <input
                  type="checkbox"
                  checked={scholarshipOnly}
                  onChange={(e) => setScholarshipOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span>🎓 Minority & Govt Scholarships</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-[#004B23]">
                <input
                  type="checkbox"
                  checked={minorityOnly}
                  onChange={(e) => setMinorityOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span>🕌 Minority Educational Status</span>
              </label>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
              <span>Showing <strong>{filteredSchools.length}</strong> matching records</span>
              {(selectedState !== 'All States & UTs' || selectedBoard !== 'All Boards' || selectedSchoolType !== 'All Types' || hostelOnly || transportOnly || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedState('All States & UTs');
                    setSelectedDistrict('All Districts');
                    setSelectedBoard('All Boards');
                    setSelectedSchoolType('All Types');
                    setSelectedOwnership('All Ownerships');
                    setSelectedClassLevel('All Classes');
                    setSelectedMedium('All Mediums');
                    setHostelOnly(false);
                    setTransportOnly(false);
                    setScholarshipOnly(false);
                    setMinorityOnly(false);
                    setSearchQuery('');
                  }}
                  className="text-red-600 hover:underline font-bold ml-2 cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. SCHOOL CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        {filteredSchools.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto my-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Verified Schools Found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try resetting your search query, state, or filter criteria to view more schools.
            </p>
            <button
              onClick={() => {
                setSelectedState('All States & UTs');
                setSelectedBoard('All Boards');
                setSelectedSchoolType('All Types');
                setSearchQuery('');
                setHostelOnly(false);
                setTransportOnly(false);
                setScholarshipOnly(false);
                setMinorityOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold hover:bg-[#00381a] transition cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedSchools.map(school => {
              const isSaved = savedSchoolIds.includes(school.id);
              const isCompared = compareSchoolIds.includes(school.id);

              return (
                <motion.div
                  key={school.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-emerald-500/50"
                >
                  {/* Card Image Header */}
                  <div className="relative h-44 bg-slate-900 overflow-hidden">
                    <img
                      src={school.coverImage}
                      alt={school.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="bg-[#004B23] text-emerald-200 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-emerald-400/30 shadow">
                        {school.board}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => toggleSaveSchool(school.id, e)}
                          title={isSaved ? "Remove Bookmark" : "Save School"}
                          className={`p-1.5 rounded-lg backdrop-blur-md transition cursor-pointer ${
                            isSaved
                              ? 'bg-[#FFD54A] text-[#004B23] shadow-md'
                              : 'bg-black/40 text-white hover:bg-black/60'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                        
                        <button
                          onClick={(e) => toggleCompareSchool(school.id, e)}
                          title={isCompared ? "Remove from Compare" : "Compare School"}
                          className={`p-1.5 rounded-lg backdrop-blur-md transition cursor-pointer text-[10px] font-bold flex items-center gap-1 ${
                            isCompared
                              ? 'bg-cyan-500 text-white shadow-md'
                              : 'bg-black/40 text-white hover:bg-black/60'
                          }`}
                        >
                          <Scale className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* School Name & Location overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg shrink-0 border border-white/20">
                        <img
                          src={school.logo}
                          alt={school.shortName}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="text-white min-w-0">
                        <h3 className="font-extrabold text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-[#FFD54A] transition-colors">
                          {school.name}
                        </h3>
                        <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5 font-medium line-clamp-1">
                          <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{school.city}, {school.state}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Key Attribute Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          UDISE+: {school.udiseCode}
                        </span>
                        <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                          {school.ownership}
                        </span>
                        {school.minorityInstitution && (
                          <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                            🕌 Minority Institution
                          </span>
                        )}
                        {school.facilities.hostel && (
                          <span className="text-[10px] font-semibold bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                            🏠 Boarding / Hostel
                          </span>
                        )}
                      </div>

                      {/* Specs List */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 mb-3">
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase font-bold">Annual Fee</span>
                          <span className="font-extrabold text-slate-800">{school.annualFee}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase font-bold">Est. Year</span>
                          <span className="font-bold text-slate-800">{school.establishmentYear}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase font-bold">Student-Teacher</span>
                          <span className="font-bold text-slate-800">{school.studentTeacherRatio} ({school.studentStrength} students)</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase font-bold">Classes</span>
                          <span className="font-bold text-slate-800 line-clamp-1">Pre-Nursery to XII</span>
                        </div>
                      </div>

                      {/* Facilities quick icons */}
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-3 font-medium">
                        {school.facilities.smartClassrooms && <span title="Smart Classes">💻 Smart Class</span>}
                        {school.facilities.scienceLabs && <span title="Labs">🔬 Science Lab</span>}
                        {school.facilities.sportsGround && <span title="Sports Ground">⚽ Sports</span>}
                        {school.facilities.transport && <span title="Transport">🚌 Bus</span>}
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedSchool(school);
                          setActiveModalTab('overview');
                        }}
                        className="flex-1 bg-[#004B23] text-white hover:bg-[#00381a] py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <span>View Profile & Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={school.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
                        title="Official Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>

                      <a
                        href={school.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-50 hover:bg-emerald-100 text-[#004B23] rounded-xl transition cursor-pointer"
                        title="Google Maps"
                      >
                        <MapPin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* 4. PAGINATION CONTROLS */}
        {filteredSchools.length > itemsPerPage && (
          <div className="flex items-center justify-between mt-10 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-medium">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredSchools.length} Total Schools)
            </span>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
              >
                Previous
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pNum = currentPage - 2 + i;
                  if (pNum > totalPages) pNum = totalPages - (4 - i);
                }
                return (
                  <button
                    key={pNum}
                    onClick={() => setCurrentPage(pNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currentPage === pNum
                        ? 'bg-[#004B23] text-white shadow'
                        : 'border border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {pNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 5. SCHOOL PROFILE DETAIL MODAL */}
      <AnimatePresence>
        {selectedSchool && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Banner Header */}
              <div className="relative h-48 sm:h-56 bg-slate-900 shrink-0">
                <img
                  src={selectedSchool.coverImage}
                  alt={selectedSchool.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedSchool(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white hover:bg-red-600 p-2 rounded-full transition cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* School Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 shadow-xl shrink-0 border border-white/30">
                    <img
                      src={selectedSchool.logo}
                      alt={selectedSchool.shortName}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="text-white min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="bg-[#FFD54A] text-[#004B23] text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                        {selectedSchool.board} Board
                      </span>
                      <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                        {selectedSchool.ownership}
                      </span>
                      {selectedSchool.minorityInstitution && (
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                          Minority Institution
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                      {selectedSchool.name}
                    </h2>
                    <p className="text-xs text-slate-300 flex items-center gap-1 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{selectedSchool.fullAddress}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Navigation Tabs */}
              <div className="bg-[#0B132B] text-white px-4 border-b border-slate-800 flex items-center gap-1 overflow-x-auto text-xs font-bold scrollbar-none shrink-0">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'overview' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Overview & Details
                </button>
                <button
                  onClick={() => setActiveModalTab('academics')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'academics' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Academics & Results
                </button>
                <button
                  onClick={() => setActiveModalTab('facilities')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'facilities' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Campus & Facilities
                </button>
                <button
                  onClick={() => setActiveModalTab('admission')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'admission' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Admission & Fees
                </button>
                <button
                  onClick={() => setActiveModalTab('transport_hostel')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'transport_hostel' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Transport & Hostel
                </button>
                <button
                  onClick={() => setActiveModalTab('parents')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'parents' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Parents Section
                </button>
                <button
                  onClick={() => setActiveModalTab('contact')}
                  className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
                    activeModalTab === 'contact' ? 'border-[#FFD54A] text-[#FFD54A]' : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  Contact & Map
                </button>
              </div>

              {/* Modal Tab Body */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700 text-sm">
                {activeModalTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-extrabold text-[#004B23] text-base mb-2">About Institution</h4>
                      <p className="leading-relaxed text-slate-600">{selectedSchool.description}</p>
                    </div>

                    {/* Key Identity Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">UDISE+ Code</span>
                        <span className="font-mono font-bold text-slate-900">{selectedSchool.udiseCode}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Affiliation No</span>
                        <span className="font-mono font-bold text-slate-900">{selectedSchool.affiliationNo}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">School Code</span>
                        <span className="font-mono font-bold text-slate-900">{selectedSchool.schoolCode}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Est. Year</span>
                        <span className="font-mono font-bold text-slate-900">{selectedSchool.establishmentYear}</span>
                      </div>
                    </div>

                    {/* Campus Gallery Preview */}
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-3">Campus Infrastructure Gallery</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {selectedSchool.campusGallery.map((imgUrl, i) => (
                          <div key={i} className="h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                            <img src={imgUrl} alt="Campus" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeModalTab === 'academics' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                        <h4 className="font-extrabold text-[#004B23] mb-1">Class 10 Board Performance</h4>
                        <p className="text-xs text-slate-700 font-medium">{selectedSchool.academics.boardResultsClass10}</p>
                      </div>

                      <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-200">
                        <h4 className="font-extrabold text-blue-900 mb-1">Class 12 Board Performance</h4>
                        <p className="text-xs text-slate-700 font-medium">{selectedSchool.academics.boardResultsClass12}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">Senior Secondary Streams Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSchool.streamsOffered.map(stream => (
                          <span key={stream} className="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-xl border border-slate-200">
                            {stream}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">NEET / JEE & Competitive Foundation</h4>
                      <p className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-medium text-amber-900">
                        {selectedSchool.academics.competitiveExamCoaching}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">Languages Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSchool.academics.languagesOffered.map(lang => (
                          <span key={lang} className="bg-slate-100 text-slate-700 font-medium text-xs px-2.5 py-1 rounded-lg">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeModalTab === 'facilities' && (
                  <div className="space-y-5">
                    <h4 className="font-extrabold text-slate-900 text-sm">Infrastructure & Labs</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.smartClassrooms ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Smart Classrooms</span>
                      </div>
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.scienceLabs ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Physics, Chemistry & Bio Labs</span>
                      </div>
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.roboticsLab ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Robotics & AI Lab</span>
                      </div>
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.swimmingPool ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Swimming Pool</span>
                      </div>
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.cctv ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>24x7 CCTV Campus</span>
                      </div>
                      <div className={`p-3 rounded-xl border font-semibold flex items-center gap-2 ${selectedSchool.facilities.wifiCampus ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Wi-Fi Campus</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">Sports & Co-Curricular Activities</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSchool.extracurricular.sports.map(sport => (
                          <span key={sport} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium">
                            ⚽ {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeModalTab === 'admission' && (
                  <div className="space-y-4 text-xs">
                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-1">
                      <span className="font-extrabold text-amber-900 block text-sm">Admission Schedule & Dates</span>
                      <p className="text-amber-800 font-medium">{selectedSchool.admission.importantDates}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Age Eligibility Criteria</span>
                        <p className="text-slate-600">{selectedSchool.admission.ageCriteria}</p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Annual Fee Structure</span>
                        <p className="text-[#004B23] font-bold text-sm">{selectedSchool.admission.feeStructure}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block mb-1">Required Documents</span>
                      <ul className="list-disc pl-5 text-slate-600 space-y-1">
                        {selectedSchool.admission.requiredDocuments.map((doc, idx) => (
                          <li key={idx}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeModalTab === 'transport_hostel' && (
                  <div className="space-y-4 text-xs">
                    <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200">
                      <h4 className="font-extrabold text-blue-900 text-sm mb-1 flex items-center gap-2">
                        <Bus className="w-4 h-4" />
                        <span>Transport & School Bus System</span>
                      </h4>
                      <p className="text-slate-700 mb-2">{selectedSchool.transportDetails.busRoutes}</p>
                      <div className="flex flex-wrap gap-3 font-semibold text-blue-950">
                        <span>GPS Live Tracking: Yes</span>
                        <span>Monthly Fee: {selectedSchool.transportDetails.charges}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">Boarding & Hostel Infrastructure</h4>
                      {selectedSchool.hostelDetails.available ? (
                        <div className="space-y-1 text-slate-700">
                          <p><strong>Capacity:</strong> {selectedSchool.hostelDetails.capacity}</p>
                          <p><strong>Hostel Fee:</strong> {selectedSchool.hostelDetails.hostelFees}</p>
                          <p><strong>Security:</strong> {selectedSchool.hostelDetails.security}</p>
                          <p><strong>Medical Support:</strong> {selectedSchool.hostelDetails.medicalSupport}</p>
                        </div>
                      ) : (
                        <p className="text-slate-500 italic">Day Boarding / Non-Residential School Campus.</p>
                      )}
                    </div>
                  </div>
                )}

                {activeModalTab === 'parents' && (
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block">PTM Conference Schedule</span>
                      <p className="text-slate-600">{selectedSchool.parentsSection.ptmSchedule}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block">Uniform & Books Policy</span>
                      <p className="text-slate-600">{selectedSchool.parentsSection.uniformDetails} • {selectedSchool.parentsSection.bookList}</p>
                    </div>
                    <div className="bg-[#004B23]/10 p-4 rounded-2xl border border-[#004B23]/30">
                      <span className="font-extrabold text-[#004B23] block text-sm mb-1">Scholarships & Fee Concessions</span>
                      <ul className="list-disc pl-5 text-slate-700 space-y-1 font-medium">
                        {selectedSchool.scholarships.map((sch, i) => (
                          <li key={i}>{sch}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeModalTab === 'contact' && (
                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <span className="text-slate-400 font-bold uppercase text-[10px] block">Official Phone</span>
                        <a href={`tel:${selectedSchool.contactPhone}`} className="font-extrabold text-[#004B23] hover:underline">
                          {selectedSchool.contactPhone}
                        </a>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <span className="text-slate-400 font-bold uppercase text-[10px] block">Official Email</span>
                        <a href={`mailto:${selectedSchool.contactEmail}`} className="font-extrabold text-[#004B23] hover:underline">
                          {selectedSchool.contactEmail}
                        </a>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Principal / Headmaster</span>
                      <p className="text-slate-700 font-medium">{selectedSchool.principalName}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={selectedSchool.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#004B23] text-white py-3 rounded-xl text-center font-bold hover:bg-[#00381a] transition cursor-pointer"
                      >
                        Visit Official School Website
                      </a>
                      <a
                        href={selectedSchool.admissionPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#FFD54A] text-[#004B23] py-3 rounded-xl text-center font-extrabold hover:bg-amber-400 transition cursor-pointer"
                      >
                        Official Admission Portal
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <span className="text-xs text-slate-500 font-mono">ID: {selectedSchool.id}</span>
                <button
                  onClick={() => setSelectedSchool(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. COMPARE SCHOOLS MODAL DRAWER */}
      <AnimatePresence>
        {showCompareModal && compareSchoolIds.length > 0 && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
            >
              <div className="bg-[#0B132B] text-white p-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#FFD54A]" />
                  <h3 className="text-lg font-extrabold text-white">Compare Selected Schools ({compareSchoolIds.length})</h3>
                </div>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full text-xs text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-3 font-extrabold text-slate-500 w-44">Attribute</th>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        if (!s) return null;
                        return (
                          <th key={id} className="p-3 font-black text-slate-900 border-l border-slate-200 text-sm min-w-[200px]">
                            {s.shortName}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Full Name</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 font-semibold border-l border-slate-200">{s?.name}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Board</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 font-bold text-[#004B23] border-l border-slate-200">{s?.board}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Location</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 border-l border-slate-200">{s?.city}, {s?.state}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Annual Fee</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 font-extrabold border-l border-slate-200 text-amber-700">{s?.annualFee}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Hostel / Boarding</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 border-l border-slate-200">{s?.facilities.hostel ? 'Yes' : 'No'}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">School Bus</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 border-l border-slate-200">{s?.facilities.transport ? 'Yes' : 'No'}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Student-Teacher</td>
                      {compareSchoolIds.map(id => {
                        const s = VERIFIED_SCHOOLS_DATA.find(item => item.id === id);
                        return <td key={id} className="p-3 border-l border-slate-200">{s?.studentTeacherRatio}</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 shrink-0">
                <button
                  onClick={() => setCompareSchoolIds([])}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-xs font-bold hover:bg-red-200 transition cursor-pointer"
                >
                  Clear Comparison
                </button>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="px-5 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold hover:bg-[#00381a] transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
