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
  Music, 
  Clapperboard, 
  Theater, 
  Mic2, 
  Radio, 
  Tv, 
  Disc, 
  Sparkle, 
  Star, 
  Briefcase, 
  Video, 
  Volume2
} from 'lucide-react';
import { Language } from '../types';
import { PERFORMING_ARTS_COLLEGES, PerformingArtsCollegeProfile } from '../data/performingArtsCollegesData';

interface PerformingArtsCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function PerformingArtsCollegesDirectory({ currentLanguage }: PerformingArtsCollegesDirectoryProps) {
  // View Tab States
  const [activeTab, setActiveTab] = useState<'directory' | 'premier_institutes' | 'classical_academies' | 'careers'>('directory');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [premierOnly, setPremierOnly] = useState<boolean>(false);
  const [minorityOnly, setMinorityOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<PerformingArtsCollegeProfile | null>(null);

  // Dynamic States list
  const statesList = useMemo(() => {
    const states = new Set(PERFORMING_ARTS_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Predefined programmes list
  const programmesList = [
    "Bachelor of Performing Arts (BPA)", "Bachelor of Music", "Bachelor of Dance",
    "Bachelor of Theatre Arts", "Bachelor of Drama", "Bachelor of Film Making",
    "Bachelor of Cinema Studies", "Bachelor of Acting", "Bachelor of Direction",
    "Bachelor of Screenwriting", "Bachelor of Choreography", "Master of Performing Arts (MPA)",
    "Master of Music", "Master of Dance", "Master of Theatre", "MFA (Master of Fine & Performing Arts)",
    "MA Performing Arts", "PhD in Performing Arts & Musicology", "Diploma in Dramatic Arts",
    "Diploma in Sound Engineering & Music Production"
  ];

  // Predefined specializations list
  const specializationsList = [
    "Classical Vocal Music", "Hindustani Music", "Carnatic Music", "Instrumental Music",
    "Tabla", "Sitar", "Sarod", "Flute", "Violin", "Western Music",
    "Music Production", "Sound Engineering", "Bharatanatyam", "Kathak", "Kathakali",
    "Kuchipudi", "Odissi", "Manipuri", "Contemporary Dance", "Choreography", "Theatre",
    "Acting", "Direction", "Script Writing", "Stage Design", "Lighting Design",
    "Film Direction", "Film Editing", "Cinematography", "Screenwriting"
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States & UTs');
    setSelectedCourse('All');
    setSelectedSpecialization('All');
    setSelectedType('All');
    setPremierOnly(false);
    setMinorityOnly(false);
    setHostelOnly(false);
    setScholarshipOnly(false);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    return PERFORMING_ARTS_COLLEGES.filter(college => {
      // Tab based pre-filtering
      if (activeTab === 'premier_institutes') {
        const isPremier = college.name.includes('NSD') || college.name.includes('FTII') || college.name.includes('SRFTI') || college.name.includes('National School of Drama') || college.name.includes('Film and Television Institute') || college.name.includes('Satyajit Ray');
        if (!isPremier) return false;
      } else if (activeTab === 'classical_academies') {
        const isClassical = college.name.includes('Classical') || college.name.includes('Sangeet') || college.name.includes('Kalamandalam') || college.name.includes('Bhatkhande') || college.name.includes('Kalakshetra') || college.name.includes('Gandharva');
        if (!isClassical) return false;
      }

      // Quick check for Premier toggle
      if (premierOnly) {
        const isPremier = college.name.includes('NSD') || college.name.includes('FTII') || college.name.includes('SRFTI') || college.name.includes('National School') || college.name.includes('Film and Television') || college.name.includes('Satyajit');
        if (!isPremier) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = college.name.toLowerCase().includes(q);
        const matchesCity = college.city.toLowerCase().includes(q);
        const matchesState = college.state.toLowerCase().includes(q);
        const matchesAffil = college.universityAffiliation.toLowerCase().includes(q);
        const matchesProgs = college.programmes.some(p => p.toLowerCase().includes(q));
        const matchesSpecs = college.specializations.some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesCity && !matchesState && !matchesAffil && !matchesProgs && !matchesSpecs) {
          return false;
        }
      }

      // State Filter
      if (selectedState !== 'All States & UTs' && college.state !== selectedState) {
        return false;
      }

      // Course Filter
      if (selectedCourse !== 'All' && !college.programmes.includes(selectedCourse)) {
        return false;
      }

      // Specialization Filter
      if (selectedSpecialization !== 'All' && !college.specializations.includes(selectedSpecialization)) {
        return false;
      }

      // Ownership Filter
      if (selectedType !== 'All' && college.ownership !== selectedType) {
        return false;
      }

      // Minority Filter
      if (minorityOnly && !college.isMinorityInstitution) {
        return false;
      }

      // Hostel Filter
      if (hostelOnly && !college.trainingFacilities.includes('Hostel')) {
        return false;
      }

      // Scholarship Filter
      if (scholarshipOnly && !college.financialInfo.govtScholarships && !college.financialInfo.minorityScholarships && !college.financialInfo.meritScholarships) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'Alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'Established Year') {
        return a.yearEstablished - b.yearEstablished;
      } else if (sortBy === 'NAAC Grade') {
        return a.naacGrade.localeCompare(b.naacGrade);
      } else if (sortBy === 'Fees (Low to High)') {
        const feeA = parseInt(a.financialInfo.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.financialInfo.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        return feeA - feeB;
      } else if (sortBy === 'Highest Placement') {
        const salA = parseFloat(a.placement.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        const salB = parseFloat(b.placement.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        return salB - salA;
      }
      return 0;
    });
  }, [
    activeTab, searchQuery, selectedState, selectedCourse, selectedSpecialization,
    selectedType, premierOnly, minorityOnly, hostelOnly, scholarshipOnly, sortBy
  ]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedCourse, selectedSpecialization, selectedType, premierOnly, minorityOnly, hostelOnly, scholarshipOnly, activeTab]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(start, start + itemsPerPage);
  }, [filteredColleges, currentPage]);

  return (
    <div className="min-h-screen bg-[#070D1B] text-slate-100 font-sans pb-16">
      {/* Dynamic SEO JSON-LD Schema Insertion */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalDirectory",
          "name": "Performing Arts, Music, Drama & Film Colleges Directory - Rangrez Bharat Portal",
          "description": "Comprehensive verified directory of NSD, FTII, SRFTI, Music Universities, Classical Dance Academies, Theatre Schools & Film Institutes in India.",
          "url": "https://rangrez-portal.org/performing-arts-colleges",
          "numberOfItems": PERFORMING_ARTS_COLLEGES.length,
          "itemListElement": filteredColleges.slice(0, 10).map((col, idx) => ({
            "@type": "CollegeOrUniversity",
            "position": idx + 1,
            "name": col.name,
            "address": col.address,
            "url": col.website
          }))
        })}
      </script>

      {/* Top Banner / Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#3B0764] border-b border-[#4C1D95] pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#E9D5FF] transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="#colleges" className="hover:text-[#E9D5FF] transition-colors">Colleges Master Directory</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C084FC] font-medium">Performing Arts, Music & Film Directory</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0764] border border-[#A855F7]/40 text-[#E9D5FF] text-xs font-semibold mb-3">
                <Music className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Verified Music, Dance, Drama & Cinema Directory 2026</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Performing Arts, Music & Film Colleges Directory
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                India's most authoritative verified directory of National School of Drama (NSD), Film & Television Institute of India (FTII), SRFTI, Classical Music & Dance Universities, Theatre Academies, Sound Engineering Studios & Performing Arts Institutions.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <div className="bg-[#1E1B4B]/80 border border-[#A855F7]/30 rounded-lg p-3 text-center min-w-[130px]">
                <div className="text-xl font-bold text-[#E9D5FF]">{PERFORMING_ARTS_COLLEGES.length}+</div>
                <div className="text-[11px] text-slate-400 font-medium">Verified Institutes</div>
              </div>
              <div className="bg-[#1E1B4B]/80 border border-[#A855F7]/30 rounded-lg p-3 text-center min-w-[130px]">
                <div className="text-xl font-bold text-[#C084FC]">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Official Sources</div>
              </div>
            </div>
          </div>

          {/* Quick Category Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold mr-1">Categories:</span>
            <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-1 rounded border border-[#A855F7]/30 flex items-center gap-1">
              <Theater className="w-3 h-3 text-[#C084FC]" /> NSD & Drama Schools
            </span>
            <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-1 rounded border border-[#A855F7]/30 flex items-center gap-1">
              <Clapperboard className="w-3 h-3 text-[#C084FC]" /> FTII, SRFTI & Film Schools
            </span>
            <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-1 rounded border border-[#A855F7]/30 flex items-center gap-1">
              <Music className="w-3 h-3 text-[#C084FC]" /> Classical & Western Music
            </span>
            <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-1 rounded border border-[#A855F7]/30 flex items-center gap-1">
              <Sparkle className="w-3 h-3 text-[#C084FC]" /> Classical & Folk Dance
            </span>
            <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-1 rounded border border-[#A855F7]/30 flex items-center gap-1">
              <Volume2 className="w-3 h-3 text-[#C084FC]" /> Sound Engineering & Production
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'directory'
                ? 'bg-[#C084FC] text-slate-950 font-bold shadow-md shadow-[#C084FC]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Master Directory ({PERFORMING_ARTS_COLLEGES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('premier_institutes')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'premier_institutes'
                ? 'bg-[#C084FC] text-slate-950 font-bold shadow-md shadow-[#C084FC]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Clapperboard className="w-4 h-4" />
            <span>NSD, FTII & SRFTI Campuses</span>
          </button>

          <button
            onClick={() => setActiveTab('classical_academies')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'classical_academies'
                ? 'bg-[#C084FC] text-slate-950 font-bold shadow-md shadow-[#C084FC]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Music & Dance Academies</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'careers'
                ? 'bg-[#C084FC] text-slate-950 font-bold shadow-md shadow-[#C084FC]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Performing Arts Career Roadmap</span>
          </button>
        </div>

        {/* Tab 4: Career Roadmap Content */}
        {activeTab === 'careers' ? (
          <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#C084FC]" />
                <span>Performing Arts, Cinema & Music Careers Roadmap 2026</span>
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Discover professional creative careers across Film Production, Music Recording Industry, OTT Media Platforms, Theatre Companies, Classical Performance Academies, and Sound Engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1E1B4B]/60 border border-[#A855F7]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#3B0764] border border-[#C084FC]/40 flex items-center justify-center text-[#E9D5FF]">
                  <Music className="w-5 h-5 text-[#C084FC]" />
                </div>
                <h3 className="text-base font-bold text-white">Music & Sound Production</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Roles: Music Director, Playback Vocalist, Sound Engineer, Acoustic Technician, Studio Producer, Film Score Composer, Instrumentalist.
                </p>
                <div className="text-xs text-[#E9D5FF] font-semibold">Avg Salary: ₹6.0L - ₹22L / yr</div>
              </div>

              <div className="bg-[#1E1B4B]/60 border border-[#A855F7]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#3B0764] border border-[#C084FC]/40 flex items-center justify-center text-[#E9D5FF]">
                  <Clapperboard className="w-5 h-5 text-[#C084FC]" />
                </div>
                <h3 className="text-base font-bold text-white">Film, Acting & Cinema</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Roles: Film Director, Cinematographer, Screenwriter, Film Editor, Screen Actor, Voice Over Artist, Production Manager.
                </p>
                <div className="text-xs text-[#E9D5FF] font-semibold">Avg Salary: ₹8.0L - ₹30L / yr</div>
              </div>

              <div className="bg-[#1E1B4B]/60 border border-[#A855F7]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#3B0764] border border-[#C084FC]/40 flex items-center justify-center text-[#E9D5FF]">
                  <Theater className="w-5 h-5 text-[#C084FC]" />
                </div>
                <h3 className="text-base font-bold text-white">Theatre & Classical Dance</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Roles: Stage Director, Classical Choreographer, Stage Lighting Designer, Set Designer, Repertory Ensemble Artist, Cultural Officer.
                </p>
                <div className="text-xs text-[#E9D5FF] font-semibold">Avg Salary: ₹5.0L - ₹15L / yr</div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-3">Audition & Audition Auditing Guide</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="font-bold text-[#E9D5FF] text-sm">NSD Entrance Auditions</div>
                  <div className="text-slate-400 mt-1">Written Test + 4-Day Intensive Workshop Screening with Monologue & Stage Tests.</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="font-bold text-[#E9D5FF] text-sm">FTII JET Exam</div>
                  <div className="text-slate-400 mt-1">Joint Entrance Test followed by Orientation Workshop & Interview for Direction, Editing, Sound.</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="font-bold text-[#E9D5FF] text-sm">Music & Dance Auditions</div>
                  <div className="text-slate-400 mt-1">Live Vocal/Instrumental/Dance Performance in front of University Guru Panel.</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="font-bold text-[#E9D5FF] text-sm">CUET (UG/PG)</div>
                  <div className="text-slate-400 mt-1">National Level Computer Based Test for Central Universities Music & BPA Seats.</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Directory View (Filters & Grid) */
          <div className="mt-6 space-y-6">
            {/* Filter Bar Panel */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Sliders className="w-4 h-4 text-[#C084FC]" />
                  <span>Search & Advance Filters</span>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#E9D5FF] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>

              {/* Input & Dropdowns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search institute, city, state, course..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C084FC]"
                  />
                </div>

                {/* State Dropdown */}
                <div>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#C084FC]"
                  >
                    {statesList.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Programme Dropdown */}
                <div>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#C084FC]"
                  >
                    <option value="All">All Programmes / Degrees</option>
                    {programmesList.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization Dropdown */}
                <div>
                  <select
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#C084FC]"
                  >
                    <option value="All">All Specializations</option>
                    {specializationsList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Ownership & Sort Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Ownership Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#C084FC]"
                  >
                    <option value="All">All Ownerships (Govt & Pvt)</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Autonomous">Autonomous</option>
                    <option value="Deemed University">Deemed University</option>
                    <option value="Minority Institution">Minority Institution</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Sort Results By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#C084FC]"
                  >
                    <option value="Alphabetical">Alphabetical (A - Z)</option>
                    <option value="Established Year">Establishment Year (Oldest First)</option>
                    <option value="NAAC Grade">NAAC Grade</option>
                    <option value="Fees (Low to High)">Fees (Low to High)</option>
                    <option value="Highest Placement">Highest Placement Package</option>
                  </select>
                </div>

                {/* Quick Checkbox Toggles */}
                <div className="flex flex-wrap items-center gap-3 pt-4 sm:pt-6">
                  <label className="inline-flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={premierOnly}
                      onChange={(e) => setPremierOnly(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-[#C084FC] focus:ring-[#C084FC]"
                    />
                    <span>NSD / FTII / SRFTI Only</span>
                  </label>

                  <label className="inline-flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={minorityOnly}
                      onChange={(e) => setMinorityOnly(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-[#C084FC] focus:ring-[#C084FC]"
                    />
                    <span>Minority Institutions</span>
                  </label>

                  <label className="inline-flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hostelOnly}
                      onChange={(e) => setHostelOnly(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-[#C084FC] focus:ring-[#C084FC]"
                    />
                    <span>Hostel Campus</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results Count & Active Filters Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <div>
                Showing <span className="text-white font-bold">{filteredColleges.length}</span> institutes matching criteria
              </div>
              <div>
                Page {currentPage} of {totalPages || 1}
              </div>
            </div>

            {/* Directory Cards Grid */}
            {paginatedColleges.length === 0 ? (
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center space-y-4">
                <Music className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No Performing Arts Institutes Found</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try adjusting your search query, selecting another state, or turning off specific filter constraints.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-[#C084FC] text-slate-950 text-xs font-bold rounded-lg hover:bg-[#A855F7] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedColleges.map((college) => (
                  <motion.div
                    key={college.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-[#A855F7]/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Cover & Badges */}
                      <div className="relative h-44 overflow-hidden bg-slate-950">
                        <img
                          src={college.coverImageUrl}
                          alt={college.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wide uppercase ${
                            college.ownership === 'Government' 
                              ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/40'
                              : 'bg-indigo-950/90 text-indigo-300 border border-indigo-500/40'
                          }`}>
                            {college.ownership}
                          </span>

                          <span className="bg-slate-950/90 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-500/30 flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            NAAC {college.naacGrade}
                          </span>
                        </div>

                        {/* Logo Overlay */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-3">
                          <img
                            src={college.logoUrl}
                            alt={`${college.name} logo`}
                            className="w-12 h-12 rounded-lg object-cover border-2 border-slate-800 shadow-md bg-slate-950"
                          />
                          <div className="text-xs text-white font-semibold shadow-sm line-clamp-1">
                            Estd. {college.yearEstablished}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-bold text-white group-hover:text-[#E9D5FF] transition-colors line-clamp-2 leading-snug">
                          {college.name}
                        </h3>

                        <div className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                          <span className="truncate">{college.city}, {college.district}, {college.state}</span>
                        </div>

                        <div className="text-[11px] text-slate-300 bg-slate-950 p-2 rounded border border-slate-800 line-clamp-2">
                          <span className="font-semibold text-slate-400">Affiliation: </span>
                          {college.universityAffiliation}
                        </div>

                        {/* Programmes list pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {college.programmes.slice(0, 3).map((prog, idx) => (
                            <span key={idx} className="bg-[#1E1B4B]/80 text-[#E9D5FF] text-[10px] px-2 py-0.5 rounded border border-[#A855F7]/30">
                              {prog}
                            </span>
                          ))}
                          {college.programmes.length > 3 && (
                            <span className="text-[10px] text-slate-400 self-center">
                              +{college.programmes.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Placement Quick Stat */}
                        <div className="grid grid-cols-2 gap-2 text-center bg-slate-950/60 p-2 rounded border border-slate-800/80 text-[11px]">
                          <div>
                            <span className="text-slate-400 block text-[10px]">Avg Package</span>
                            <span className="font-bold text-white">{college.placement.averagePackage}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Highest Package</span>
                            <span className="font-bold text-[#E9D5FF]">{college.placement.highestPackage}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-slate-800/60 pt-4 mt-auto">
                      <button
                        onClick={() => setSelectedCollege(college)}
                        className="w-full bg-[#3B0764] hover:bg-[#5B1198] text-[#E9D5FF] text-xs font-semibold py-2 rounded-lg border border-[#A855F7]/40 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#C084FC]" />
                        <span>View Profile</span>
                      </button>

                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1 transition-colors text-center"
                      >
                        <span>Official Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-slate-300 px-3">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Institution Full Profile Modal */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-48 sm:h-64 bg-slate-950 shrink-0">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-4 right-4 bg-slate-950/80 text-slate-300 hover:text-white p-2 rounded-full border border-slate-700 cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCollege.logoUrl}
                      alt={selectedCollege.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-slate-800 shadow-xl bg-slate-950"
                    />
                    <div>
                      <span className="bg-[#3B0764] text-[#E9D5FF] px-2.5 py-0.5 rounded text-[10px] font-bold border border-[#A855F7]/40 uppercase tracking-wide">
                        {selectedCollege.ownership}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 line-clamp-1">
                        {selectedCollege.name}
                      </h2>
                      <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C084FC]" />
                        <span>{selectedCollege.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm">
                
                {/* Official Verification Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div>
                    <div className="text-[10px] text-slate-400">UGC Recognition</div>
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{selectedCollege.ugcRecognized ? 'Verified UGC' : 'N/A'}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">NAAC Accreditation</div>
                    <div className="font-bold text-amber-300">Grade {selectedCollege.naacGrade}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">NIRF / Performing Arts Ranking</div>
                    <div className="font-bold text-[#E9D5FF]">{selectedCollege.nirfRanking}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Last Verified</div>
                    <div className="font-bold text-slate-300">{selectedCollege.lastVerifiedDate}</div>
                  </div>
                </div>

                {/* Quick Action Buttons Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#C084FC] text-slate-950 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-[#A855F7] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Official Website</span>
                  </a>

                  <a
                    href={selectedCollege.admissionPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#3B0764] text-[#E9D5FF] border border-[#A855F7]/40 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-[#5B1198] transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#C084FC]" />
                    <span>Admission Portal</span>
                  </a>

                  <a
                    href={selectedCollege.counsellingPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Counselling Portal</span>
                  </a>

                  <a
                    href={selectedCollege.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Google Maps</span>
                  </a>
                </div>

                {/* Section: Programmes Offered */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <GraduationCap className="w-5 h-5 text-[#C084FC]" />
                    <span>Programmes Offered</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCollege.programmes.map((prog, i) => (
                      <div key={i} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0" />
                        <span className="font-semibold text-slate-200">{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Specializations */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Music className="w-5 h-5 text-[#C084FC]" />
                    <span>Available Specializations</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollege.specializations.map((spec, i) => (
                      <span key={i} className="bg-[#1E1B4B] text-[#E9D5FF] px-3 py-1 rounded-full border border-[#A855F7]/30 text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Admission & Entrance Details */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <FileText className="w-5 h-5 text-[#C084FC]" />
                    <span>Admission Process & Stage Audition Screening</span>
                  </h3>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-[#E9D5FF]">Eligibility: </span>
                      <span className="text-slate-300">{selectedCollege.admissionDetails.eligibility}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#E9D5FF]">Entrance Exams Accepted: </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedCollege.admissionDetails.entranceExams.map((exam, i) => (
                          <span key={i} className="bg-slate-800 text-white px-2 py-0.5 rounded text-[11px]">
                            {exam}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-[#E9D5FF]">Screening Stages: </span>
                      <span className="text-slate-300">
                        {selectedCollege.admissionDetails.auditionRequired && "Live Stage Audition • "}
                        {selectedCollege.admissionDetails.portfolioRequired && "Portfolio & Monologue Evaluation • "}
                        {selectedCollege.admissionDetails.interviewRequired && "Personal Interview"}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed border-t border-slate-900 pt-2">
                      {selectedCollege.admissionDetails.admissionProcess}
                    </p>
                  </div>
                </div>

                {/* Section: Training Facilities & Studios */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Home className="w-5 h-5 text-[#C084FC]" />
                    <span>Acoustic Studios & Performance Infrastructure</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedCollege.trainingFacilities.map((fac, i) => (
                      <div key={i} className="bg-slate-950 p-2 rounded border border-slate-800 flex items-center gap-2 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
                        <span className="text-slate-300">{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Industry Placements & Recruiters */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Briefcase className="w-5 h-5 text-[#C084FC]" />
                    <span>Placements, Industry Links & Top Recruiters</span>
                  </h3>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 text-[11px]">Average Package:</span>
                        <div className="text-base font-bold text-white">{selectedCollege.placement.averagePackage}</div>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Highest Package:</span>
                        <div className="text-base font-bold text-[#E9D5FF]">{selectedCollege.placement.highestPackage}</div>
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-[#E9D5FF] text-xs">Top Industry Recruiters & Repertoires:</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedCollege.placement.topRecruiters.map((rec, i) => (
                          <span key={i} className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded text-xs">
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Financial & Fees Info */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <DollarSign className="w-5 h-5 text-[#C084FC]" />
                    <span>Financial Information & Fees Structure</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <div className="text-slate-400 text-[10px]">Tuition Fees</div>
                      <div className="font-bold text-white">{selectedCollege.financialInfo.tuitionFees}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Hostel Fees</div>
                      <div className="font-bold text-white">{selectedCollege.financialInfo.hostelFees}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Studio & Rehearsal</div>
                      <div className="font-bold text-slate-300">{selectedCollege.financialInfo.studioCharges}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Scholarships</div>
                      <div className="font-bold text-emerald-400">
                        {selectedCollege.financialInfo.govtScholarships ? 'Govt & Merit Available' : 'Merit Scholarships'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Faculty Leadership */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Users className="w-5 h-5 text-[#C084FC]" />
                    <span>Faculty & Artist Mentors</span>
                  </h3>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-slate-400 text-[10px]">Director / Head</div>
                      <div className="font-bold text-white">{selectedCollege.faculty.director}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Principal / Dean</div>
                      <div className="font-bold text-white">{selectedCollege.faculty.principal}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Student-Faculty Ratio</div>
                      <div className="font-bold text-[#E9D5FF]">{selectedCollege.faculty.studentFacultyRatio}</div>
                    </div>
                  </div>
                </div>

                {/* Section: Contact & Socials */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Phone className="w-5 h-5 text-[#C084FC]" />
                    <span>Contact Details & Social Media</span>
                  </h3>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Phone Number:</span>
                      <span className="font-semibold text-white">{selectedCollege.contact.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Official Email:</span>
                      <span className="font-semibold text-white">{selectedCollege.contact.email}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
                <span className="text-xs text-slate-400">
                  Source: Official UGC / Sangeet Natak Akademi / NSD / FTII Portals
                </span>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
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
