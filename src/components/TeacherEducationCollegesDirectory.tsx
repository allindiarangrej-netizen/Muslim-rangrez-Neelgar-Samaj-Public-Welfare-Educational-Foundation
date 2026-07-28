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
  School,
  Brain,
  Laptop,
  CheckSquare
} from 'lucide-react';
import { Language } from '../types';
import { TEACHER_COLLEGES, TeacherCollegeProfile } from '../data/teacherCollegesData';

interface TeacherEducationCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function TeacherEducationCollegesDirectory({ currentLanguage }: TeacherEducationCollegesDirectoryProps) {
  // Navigation / View State
  const [activeTab, setActiveTab] = useState<'directory' | 'exam' | 'programmes' | 'counselling'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedNaac, setSelectedNaac] = useState<string>('All');
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [ncteOnly, setNcteOnly] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<TeacherCollegeProfile | null>(null);

  // Schema list of states extracted dynamically
  const statesList = useMemo(() => {
    const states = new Set(TEACHER_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Predefined programme options
  const programmesList = [
    "D.El.Ed.", "B.Ed.", "Integrated B.A. B.Ed.", "Integrated B.Sc. B.Ed.", 
    "M.Ed.", "Ph.D. in Education", "B.P.Ed.", "M.P.Ed.", 
    "Nursery Teacher Training (NTT)", "ECCE", "Diploma in Special Education"
  ];

  // Predefined specializations
  const specializationsList = [
    "Educational Psychology", "Curriculum & Instruction", "Educational Technology", 
    "Inclusive Education", "Special Education", "Guidance & Counselling", 
    "Educational Administration", "Teacher Leadership", "Mathematics Education", 
    "Science Education", "Social Science Education", "Language Education", 
    "ICT in Education", "Physical Education", "Health Education", 
    "Value Education", "Environmental Education", "Early Childhood Education", "Adult Education"
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedCourse('All');
    setSelectedSpecialization('All');
    setSelectedType('All');
    setSelectedNaac('All');
    setMinorityOnly(false);
    setHostelOnly(false);
    setScholarshipOnly(false);
    setNcteOnly(true);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Sync current page back to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, selectedNaac, minorityOnly, hostelOnly, scholarshipOnly, ncteOnly, activeTab]);

  // Main Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    let result = [...TEACHER_COLLEGES];

    // Search Query (Name, City, District, Address, University, Programmes, Specializations)
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

    // NAAC Grade Filter
    if (selectedNaac !== 'All') {
      result = result.filter(c => c.naacGrade === selectedNaac);
    }

    // Minority Institution
    if (minorityOnly) {
      result = result.filter(c => c.isMinorityInstitution);
    }

    // Hostel Available
    if (hostelOnly) {
      result = result.filter(c => c.infrastructure.includes('Hostel'));
    }

    // Scholarship Available
    if (scholarshipOnly) {
      result = result.filter(c => c.financialInfo.govtScholarships || c.financialInfo.minorityScholarships);
    }

    // NCTE Recognized
    if (ncteOnly) {
      result = result.filter(c => c.ncteRecognized);
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
        const aFee = parseInt(a.financialInfo.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        const bFee = parseInt(b.financialInfo.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        return aFee - bFee;
      }
      if (sortBy === 'Placement') {
        const aSal = parseFloat(a.careerInformation.averageSalary.replace(/[^0-9.]/g, '')) || 0;
        const bSal = parseFloat(b.careerInformation.averageSalary.replace(/[^0-9.]/g, '')) || 0;
        return bSal - aSal;
      }
      if (sortBy === 'NAAC Grade') {
        const order = { 'A++': 6, 'A+': 5, 'A': 4, 'B++': 3, 'B+': 2, 'B': 1 };
        const scoreA = order[a.naacGrade as keyof typeof order] || 0;
        const scoreB = order[b.naacGrade as keyof typeof order] || 0;
        return scoreB - scoreA;
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
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, selectedNaac, minorityOnly, hostelOnly, scholarshipOnly, ncteOnly, sortBy]);

  // Paginated Subset
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(start, start + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById('teacher_directory_top_nav');
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
      "name": "National Teacher Education & B.Ed. Colleges Directory - Rangrez Community",
      "description": "Comprehensive NCTE-recognized Teacher Training Colleges, B.Ed./M.Ed. Institutes, DIETs, CTEs, and IASEs directory across India with fees, entrance exams, and practice teaching school networks.",
      "url": "https://allindiarangrej.org/education/teacher-education-directory",
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
      <meta name="title" content="Verified NCTE Teacher Education Colleges & B.Ed. Institutes Directory" />
      <meta name="description" content="Search & filter over 150+ verified NCTE approved government DIETs, private B.Ed. colleges, CTEs, and universities with fee structures, entrance exams, and CTET/TET placement records." />

      {/* 1. HERO BRAND SECTION */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[#D4AF37]/80 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'National Teacher Training Secretariat' : 'राष्ट्रीय शिक्षक शिक्षा सचिवालय'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              {currentLanguage === 'en' ? 'Teacher Education Colleges Directory' : 'शिक्षक शिक्षा एवं बी.एड. संस्थान निर्देशिका'}
            </h1>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-medium">
              {currentLanguage === 'en'
                ? 'Empowering our community future educators with India’s most comprehensive directory of NCTE-recognized Colleges of Education, Government DIETs, CTEs, IASEs, and University Departments. Explore 150+ verified B.Ed., M.Ed., D.El.Ed., B.P.Ed., and Special Education institutes with fee structures, CTET/TET support, and practice school attachments.'
                : 'भारत के शीर्ष एनसीटीई (NCTE) स्वीकृत बी.एड., एम.एड., डी.एल.एड. एवं डाइट (DIET) शिक्षक प्रशिक्षण संस्थानों की संपूर्ण निर्देशिका। प्रवेश परीक्षा, फीस, और स्कूल इंटर्नशिप की संपूर्ण जानकारी प्राप्त करें।'}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>150+ Verified Profiles</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-stone-100">
                <ShieldCheck className="w-4 h-4 text-[#FFD54A]" />
                <span>100% NCTE & UGC Recognized</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/15 text-center min-w-[240px] shadow-lg">
            <span className="text-[11px] uppercase tracking-wider text-stone-300 font-extrabold block mb-1">NCTE Annual Educator Intake</span>
            <div className="text-3xl sm:text-4xl font-black text-[#FFD54A]">12,50,000+</div>
            <span className="text-[10px] text-stone-300 font-bold block mt-1">B.Ed. & D.El.Ed. Sanctioned Seats</span>
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-center">
              <div>
                <span className="text-[10px] text-stone-400 font-bold block">Govt DIETs/Colleges</span>
                <span className="text-sm font-black text-emerald-400">1,200+</span>
              </div>
              <div className="border-l border-white/10 px-2">
                <span className="text-[10px] text-stone-400 font-bold block">Private B.Ed.</span>
                <span className="text-sm font-black text-amber-400">14,500+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABBED NAVIGATION */}
      <div id="teacher_directory_top_nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="border-b border-stone-200 bg-white p-2 rounded-2xl flex flex-wrap gap-1 shadow-xs">
          {[
            { id: 'directory', labelEn: 'Teacher Education Directory', labelHi: 'शिक्षक शिक्षा डायरेक्टरी', icon: GraduationCap },
            { id: 'exam', labelEn: 'CTET & State TET Hub', labelHi: 'सीटीईटी एवं टीईटी हब', icon: FileCheck },
            { id: 'programmes', labelEn: 'B.Ed. / M.Ed. / D.El.Ed. Courses', labelHi: 'बी.एड. / एम.एड. कोर्सेस', icon: BookOpen },
            { id: 'counselling', labelEn: 'NCTE Recognition & Counselling', labelHi: 'एनसीटीई एवं काउंसलिंग', icon: School }
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

      {/* 3. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* ======================================================= */}
        {/* TAB 1: TEACHER EDUCATION DIRECTORY */}
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
                        ? 'Search college name, university, city, course (B.Ed, M.Ed, D.El.Ed) or specialization...'
                        : 'कॉलेज का नाम, विश्वविद्यालय, शहर, कोर्स (B.Ed, D.El.Ed) या विषय खोजें...'
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
                    onClick={() => setNcteOnly(!ncteOnly)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition border flex items-center gap-1.5 cursor-pointer ${
                      ncteOnly
                        ? 'bg-[#004B23] text-[#FFD54A] border-[#004B23] shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>NCTE Approved</span>
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

                  {(selectedState !== 'All States & UTs' || selectedCourse !== 'All' || selectedSpecialization !== 'All' || selectedType !== 'All' || selectedNaac !== 'All' || searchQuery || minorityOnly || hostelOnly || scholarshipOnly || !ncteOnly) && (
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

                {/* Course Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-[#004B23]" />
                    <span>Degree / Programme:</span>
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Programmes</option>
                    {programmesList.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Brain className="w-3 h-3 text-[#004B23]" />
                    <span>Specialization Focus:</span>
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

                {/* Ownership / Type */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#004B23]" />
                    <span>Ownership / Governance:</span>
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none"
                  >
                    <option value="All">All Ownership Types</option>
                    <option value="Government">Government (Govt / DIET)</option>
                    <option value="Private">Private College of Ed.</option>
                    <option value="Autonomous">Autonomous</option>
                    <option value="Deemed University">Deemed University</option>
                    <option value="Minority Institution">Minority Institution</option>
                  </select>
                </div>

                {/* NAAC Grade & Sort */}
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
                    <option value="NAAC Grade">Highest NAAC Grade</option>
                    <option value="Fees">Lowest Tuition Fees</option>
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
                Found <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Teacher Education Colleges
              </span>
              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>All entries cross-referenced with NCTE National Register & SCERT data.</span>
              </div>
            </div>

            {/* INSTITUTION CARDS GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No Teacher Education Colleges match your filter</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try adjusting course selection, clearing search keywords, or selecting another state.
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
                            <School className="w-3.5 h-3.5 text-[#FFD54A]" />
                            <span>{college.ownership}</span>
                          </span>

                          <div className="flex items-center gap-1">
                            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-200 uppercase">
                              NAAC {college.naacGrade}
                            </span>
                            {college.isMinorityInstitution && (
                              <span className="bg-amber-50 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded border border-amber-200 uppercase">
                                Minority
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title and establishing year */}
                        <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 leading-snug mb-1">
                          {college.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-bold mb-3">
                          📅 Established: {college.yearEstablished} • {college.nirfRanking}
                        </p>

                        {/* Geographic location details */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200 mb-3">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                          <span className="truncate">{college.district}, {college.state}</span>
                        </div>

                        {/* University Affiliation */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-900 bg-indigo-50/80 px-3 py-1.5 rounded-xl border border-indigo-200 mb-4">
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                          <span className="truncate">{college.universityAffiliation}</span>
                        </div>

                        {/* Available Programmes Chips */}
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
                            <span className="font-extrabold text-[#004B23] truncate">
                              {college.financialInfo.tuitionFees}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-black text-stone-400 block">Avg Salary / Placement</span>
                            <span className="font-extrabold text-stone-800 truncate">
                              {college.careerInformation.averageSalary.split('/')[0]}
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

                        {/* Live NCTE verification link */}
                        <a
                          href="https://ncte.gov.in/Website/RecognizedInstitutions.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[11px] transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verify Live on Official NCTE Register</span>
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
        {/* TAB 2: CTET & STATE TET GUIDANCE */}
        {/* ======================================================= */}
        {activeTab === 'exam' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Mission Banner */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-indigo-700" />
                <span>Central Teacher Eligibility Test (CTET) & TET Desk</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                National Teacher Recruitment & Eligibility Framework
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Under Section 23 of the Right of Children to Free and Compulsory Education (RTE) Act 2009, passing the Teacher Eligibility Test (TET) is mandatory for appointment as a teacher in primary and upper primary schools across KVS, NVS, Army Public Schools, and State Government cadres.
              </p>
            </div>

            {/* CTET Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Central Teacher Eligibility Test (CTET)",
                  badge: "CBSE / Ministry of Education, Govt of India",
                  desc: "Conducted twice a year by CBSE. Valid for lifetime across all Central Govt schools (KVS, NVS, Central Tibetan Schools, Union Territories) and top private international boards.",
                  features: ["Paper I: Primary Stage (Classes I to V)", "Paper II: Elementary Stage (Classes VI to VIII)", "Validity: Lifetime across India", "Minimum Qualifying Score: 60% (55% Reserved)"],
                  link: "https://ctet.nic.in"
                },
                {
                  title: "State Teacher Eligibility Tests (State TETs)",
                  badge: "State Education Boards / Examination Regulatory Authorities",
                  desc: "UPTET, REET, MAHATET, BTET, KARTET, and TNTET conducted by respective state examination boards for recruitment into state government schools and local body basic education departments.",
                  features: ["State-specific syllabus & regional language paper", "Direct weightage in State Super TET merit list", "Reserved seat quotas for domiciles", "Annual recruitment notifications"],
                  link: "https://ncte.gov.in"
                },
                {
                  title: "KVS & NVS Recruitment Exams",
                  badge: "Kendriya Vidyalaya & Navodaya Vidyalaya Samiti",
                  desc: "Direct recruitment entrance examinations for PRT (Primary Teacher), TGT (Trained Graduate Teacher), and PGT (Post Graduate Teacher) positions across 1,250+ KVS and 650+ NVS schools nationwide.",
                  features: ["Pay Matrix: Level 6 to Level 8 (7th CPC)", "Comprehensive Written + Interview + Teaching Demo", "Residential quarters provided (NVS)", "National transferability"],
                  link: "https://kvsangathan.nic.in"
                },
                {
                  title: "NTA UGC NET in Education",
                  badge: "National Testing Agency & UGC",
                  desc: "For B.Ed. and M.Ed. graduates aspiring for Assistant Professorship and Junior Research Fellowship (JRF) in University Departments of Teacher Education and Colleges of Education.",
                  features: ["Paper I: Teaching & Research Aptitude", "Paper II: Education Discipline", "Junior Research Fellowship (JRF) Monthly Stipend", "Assistant Professor eligibility"],
                  link: "https://ugcnet.nta.ac.in"
                }
              ].map((exam, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 hover:border-[#004B23] shadow-md transition flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#004B23]" />
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#004B23] tracking-wide block mb-1">{exam.badge}</span>
                    <h3 className="text-lg font-black text-stone-900 group-hover:text-[#004B23] transition leading-snug mb-3">
                      {exam.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200">
                      {exam.desc}
                    </p>

                    <h4 className="text-xs font-black text-stone-800 uppercase tracking-wider mb-2">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {exam.features.map((f, idx) => (
                        <li key={idx} className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={exam.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0B132B] hover:bg-slate-900 text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm mt-auto"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================= */}
        {/* TAB 3: B.ED. / M.ED. / D.EL.ED. PROGRAMMES & SYLLABUS */}
        {/* ======================================================= */}
        {activeTab === 'programmes' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>NCTE Curricular Regulations</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                NCTE Recognized Teacher Education Programmes
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                The National Council for Teacher Education (NCTE) prescribes standard norms and standards for 15+ teacher education courses. Explore course duration, eligibility, school internship mandates, and career pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Bachelor of Education (B.Ed.)",
                  duration: "2 Years (4 Semesters)",
                  eligibility: "Bachelor's / Master's degree with 50% marks",
                  internship: "16 Weeks School Teaching Practice",
                  target: "TGT & PGT Teachers in High Schools & Senior Secondary",
                  desc: "Professional degree preparing teachers for secondary and upper secondary schools. Covers Learner Development, Pedagogy of School Subjects, ICT, Inclusive Education, and Action Research."
                },
                {
                  name: "Diploma in Elementary Education (D.El.Ed.)",
                  duration: "2 Years",
                  eligibility: "10+2 Senior Secondary with 50% marks",
                  internship: "20 Weeks Primary School Practice",
                  target: "Primary Teachers (PRT) for Classes I to V",
                  desc: "Prepares educators for child-centric primary school teaching. Focuses on Early Literacy, Foundational Numeracy, Child Psychology, Environmental Studies pedagogy, and School Management."
                },
                {
                  name: "Master of Education (M.Ed.)",
                  duration: "2 Years",
                  eligibility: "B.Ed. / B.A.B.Ed. / B.Sc.B.Ed. with 50% marks",
                  internship: "Teacher Education Inst. & Field Attachment",
                  target: "Teacher Educators, DIET Lecturers & Educational Planners",
                  desc: "Postgraduate professional degree focusing on Educational Research, Curriculum Studies, Teacher Education System, Educational Technology, Policy Analysis, and Psychological Foundations."
                },
                {
                  name: "Integrated B.A. B.Ed. / B.Sc. B.Ed.",
                  duration: "4 Years (8 Semesters)",
                  eligibility: "10+2 Pass in Science/Arts with 50% marks",
                  internship: "Dual Subject Pedagogy & School Internship",
                  target: "Dual Qualified Graduate Teachers",
                  desc: "4-Year dual degree integrating core subject specialization (Physics, Chemistry, Maths, History, English) with professional teacher education pedagogy, saving 1 academic year."
                },
                {
                  name: "Bachelor of Physical Education (B.P.Ed.)",
                  duration: "2 Years",
                  eligibility: "Bachelor's Degree with Physical Education elective or Sports Merit",
                  internship: "Sports Coaching & School Physical Fitness Lab",
                  target: "Physical Education Teachers (PET) & Sports Directors",
                  desc: "Specialized professional programme covering Kinesiology, Sports Psychology, Athletic Training, Health Education, Officiating, Gymnasium Management, and Sports Physiology."
                },
                {
                  name: "Nursery Teacher Training (NTT) / ECCE",
                  duration: "1 Year / 2 Years",
                  eligibility: "10+2 Senior Secondary Pass",
                  internship: "Pre-Primary & Montessori School Attachment",
                  target: "Pre-Primary Teachers & Anganwadi Supervisors",
                  desc: "Aligned with NEP 2020 Foundational Stage (Ages 3-8). Focuses on Play-based Learning, Child Nutrition, Storytelling Pedagogy, Sensory Material Development, and Motor Skill Growth."
                }
              ].map((prog, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#004B23] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block mb-3">
                      {prog.duration}
                    </span>
                    <h3 className="text-lg font-black text-stone-900 mb-2">{prog.name}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
                      {prog.desc}
                    </p>

                    <div className="space-y-2 text-xs mb-4">
                      <div>
                        <span className="font-extrabold text-stone-800">Eligibility: </span>
                        <span className="text-stone-600">{prog.eligibility}</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-stone-800">School Internship: </span>
                        <span className="text-stone-600">{prog.internship}</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#004B23]">Target Cadre: </span>
                        <span className="text-stone-700 font-bold">{prog.target}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://ncte.gov.in/Website/AboutNCTE.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-stone-100 hover:bg-[#004B23] text-stone-800 hover:text-[#FFD54A] rounded-xl font-bold text-xs transition text-center border border-stone-300"
                  >
                    View Official NCTE Curriculum Regulations &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================= */}
        {/* TAB 4: ADMISSIONS & COUNSELLING PORTAL */}
        {/* ======================================================= */}
        {activeTab === 'counselling' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <School className="w-4 h-4 text-rose-700" />
                <span>NCTE Statutory Recognition Desk</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Official NCTE Approval & State Counselling Portals
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto">
                Before seeking admission into any B.Ed., D.El.Ed., or M.Ed. college, candidates MUST verify the institution’s official Recognition Order issued by the relevant NCTE Regional Committee (NRC, WRC, SRC, ERC). Admissions in unrecognised colleges are void under law.
              </p>
            </div>

            {/* Statutory Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "NCTE Official Institution Recognition Register",
                  desc: "National Council for Teacher Education central directory listing all validly recognized government and private teacher education colleges across Northern, Western, Southern, and Eastern regions.",
                  link: "https://ncte.gov.in/Website/RecognizedInstitutions.aspx",
                  badge: "NCTE Central Regulatory Portal"
                },
                {
                  title: "UP B.Ed. JEE Centralised Counselling Portal",
                  desc: "Joint Entrance Examination B.Ed. counselling portal for admission to state universities and affiliated colleges across Uttar Pradesh.",
                  link: "https://www.lkouniv.ac.in",
                  badge: "State Centralised Admission"
                },
                {
                  title: "MAH B.Ed. / M.Ed. CET Counselling Portal",
                  desc: "State Common Entrance Test Cell Maharashtra online portal for admissions into B.Ed., M.Ed., and Integrated 3-Year B.Ed.-M.Ed. colleges.",
                  link: "https://cetcell.mahacet.org",
                  badge: "Maharashtra State CET"
                },
                {
                  title: "Delhi University Faculty of Education B.Ed. Portal",
                  desc: "Centralised admission for Central Institute of Education (CIE), Lady Irwin College, Maharshi Valmiki College, and Shyama Prasad Mukherji College.",
                  link: "https://doe.du.ac.in",
                  badge: "University of Delhi"
                }
              ].map((coun, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#004B23] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block mb-3">
                      {coun.badge}
                    </span>
                    <h3 className="text-lg font-black text-stone-900 mb-2">{coun.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200">
                      {coun.desc}
                    </p>
                  </div>

                  <a
                    href={coun.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0B132B] hover:bg-slate-900 text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Access Official Web Portal</span>
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ======================================================= */}
      {/* 4. DEDICATED INSTITUTION PROFILE MODAL */}
      {/* ======================================================= */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative my-auto"
            >
              {/* Sticky Close Button */}
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Banner & Logo */}
              <div className="relative h-48 sm:h-64 w-full bg-stone-800">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* College Title & Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end gap-4">
                  <img
                    src={selectedCollege.logoUrl}
                    alt={`${selectedCollege.name} Logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white shadow-md object-cover bg-white shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#D4AF37] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                        {selectedCollege.ownership}
                      </span>
                      <span className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                        NAAC {selectedCollege.naacGrade}
                      </span>
                      <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                        NCTE RECOGNIZED
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {selectedCollege.name}
                    </h2>
                    <p className="text-xs text-stone-300 font-medium">
                      📍 {selectedCollege.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8 text-stone-800">
                
                {/* Action Buttons Row */}
                <div className="flex flex-wrap gap-2 pt-2 border-b border-stone-200 pb-6">
                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#004B23] text-[#FFD54A] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#00381a] transition flex items-center gap-1.5 shadow-xs"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCollege.admissionDetails.admissionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#0B132B] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-900 transition flex items-center gap-1.5 shadow-xs"
                  >
                    <GraduationCap className="w-4 h-4 text-[#FFD54A]" />
                    <span>Admission Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCollege.counsellingPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-amber-100 text-amber-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-200 transition flex items-center gap-1.5 border border-amber-300"
                  >
                    <School className="w-4 h-4 text-amber-800" />
                    <span>Official Counselling</span>
                  </a>

                  <a
                    href={selectedCollege.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-stone-100 text-stone-700 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-stone-200 transition flex items-center gap-1.5 border border-stone-300 ml-auto"
                  >
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <span>Google Maps</span>
                  </a>
                </div>

                {/* 1. KEY STATS & RECOGNITION */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">University Affiliation</span>
                    <span className="text-xs font-black text-stone-900 block mt-0.5">{selectedCollege.universityAffiliation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">NCTE Recognition</span>
                    <span className="text-xs font-black text-emerald-700 block mt-0.5">Approved & Verified</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">UGC Status</span>
                    <span className="text-xs font-black text-indigo-900 block mt-0.5">Section 2(f) / 12(B)</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">NIRF / Accreditation</span>
                    <span className="text-xs font-black text-amber-800 block mt-0.5">{selectedCollege.nirfRanking}</span>
                  </div>
                </div>

                {/* 2. PROGRAMMES OFFERED */}
                <div className="space-y-3">
                  <h3 className="text-base font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                    <GraduationCap className="w-5 h-5 text-[#004B23]" />
                    <span>Programmes Offered & NCTE Sanctioned Courses</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollege.programmes.map((prog, idx) => (
                      <div key={idx} className="bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-black flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. SPECIALIZATIONS */}
                <div className="space-y-3">
                  <h3 className="text-base font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                    <Brain className="w-5 h-5 text-[#004B23]" />
                    <span>Specializations & Methodologies</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCollege.specializations.map((spec, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-800 px-3 py-1 rounded-lg border border-stone-200 text-xs font-bold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. ADMISSION DETAILS & ELIGIBILITY */}
                <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#004B23]" />
                    <span>Admission Process & Entrance Exams Accepted</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <p><span className="font-extrabold text-stone-800">Eligibility Criteria: </span>{selectedCollege.admissionDetails.eligibility}</p>
                    <p><span className="font-extrabold text-stone-800">Entrance Exams: </span>{selectedCollege.admissionDetails.entranceExams.join(', ')}</p>
                    <p><span className="font-extrabold text-stone-800">Admission Process: </span>{selectedCollege.admissionDetails.admissionProcess}</p>
                  </div>
                </div>

                {/* 5. INFRASTRUCTURE & TEACHING PRACTICE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-base font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <Laptop className="w-5 h-5 text-[#004B23]" />
                      <span>Campus & Teaching Infrastructure</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-stone-700">
                      {selectedCollege.infrastructure.map((fac, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-base font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <School className="w-5 h-5 text-[#004B23]" />
                      <span>Teaching Practice & School Attachment</span>
                    </h3>
                    <div className="space-y-2 text-xs text-stone-700">
                      <p><span className="font-bold text-stone-900">Internship Duration: </span>{selectedCollege.teachingPractice.internshipDuration}</p>
                      <p><span className="font-bold text-stone-900">Practice Schools: </span>{selectedCollege.teachingPractice.practiceSchools.join(', ')}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="bg-indigo-50 text-indigo-900 text-[10px] font-black px-2 py-0.5 rounded border border-indigo-200">Micro Teaching Active</span>
                        <span className="bg-indigo-50 text-indigo-900 text-[10px] font-black px-2 py-0.5 rounded border border-indigo-200">Community Outreach</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. CAREER & PLACEMENTS */}
                <div className="space-y-3 bg-[#0B132B] text-white p-6 rounded-3xl">
                  <h3 className="text-base font-black text-[#FFD54A] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#FFD54A]" />
                    <span>Career Placement & TET Coaching Record</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-stone-400 block text-[10px] font-extrabold uppercase">Average Salary / Package</span>
                      <span className="text-lg font-black text-emerald-400">{selectedCollege.careerInformation.averageSalary}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] font-extrabold uppercase">Highest Package</span>
                      <span className="text-lg font-black text-[#FFD54A]">{selectedCollege.careerInformation.highestSalary}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-xs">
                    <span className="text-stone-400 block text-[10px] font-extrabold uppercase mb-1">Top School Recruiters & Boards:</span>
                    <p className="text-stone-200 font-bold">{selectedCollege.careerInformation.topRecruiters.join(' • ')}</p>
                  </div>
                </div>

                {/* 7. FINANCIAL & FEES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">Tuition Fees Structure</span>
                    <span className="text-sm font-black text-[#004B23]">{selectedCollege.financialInfo.tuitionFees}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-stone-400 block">Hostel Fees</span>
                    <span className="text-sm font-black text-stone-900">{selectedCollege.financialInfo.hostelFees}</span>
                  </div>
                </div>

                {/* 8. FACULTY & CONTACT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-200">
                  <div className="space-y-2 text-xs">
                    <h4 className="font-black text-stone-900 text-sm">Faculty Leadership:</h4>
                    <p><span className="font-bold text-stone-700">Principal: </span>{selectedCollege.faculty.principal}</p>
                    <p><span className="font-bold text-stone-700">Dean of Education: </span>{selectedCollege.faculty.dean}</p>
                    <p><span className="font-bold text-stone-700">Faculty Strength: </span>{selectedCollege.faculty.facultyStrength} Professors ({selectedCollege.faculty.studentFacultyRatio} Ratio)</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <h4 className="font-black text-stone-900 text-sm">Official Contact Desk:</h4>
                    <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#004B23]" /> <span>{selectedCollege.contact.phone}</span></p>
                    <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#004B23]" /> <span>{selectedCollege.contact.email}</span></p>
                  </div>
                </div>

                {/* Verification Footer */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between text-[11px] text-stone-500 font-bold">
                  <span>Last Verified: {selectedCollege.lastVerifiedDate}</span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified with NCTE & UGC Gazette Notifications</span>
                  </span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
