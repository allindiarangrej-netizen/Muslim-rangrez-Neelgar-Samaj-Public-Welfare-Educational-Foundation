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
  HeartHandshake, 
  Star, 
  Briefcase, 
  Landmark, 
  Scale, 
  ScrollText, 
  Sparkle, 
  Layers, 
  CheckSquare, 
  Bookmark, 
  Share2, 
  Download, 
  Lightbulb, 
  Building, 
  Hospital, 
  Stethoscope, 
  School, 
  Laptop, 
  BookMarked
} from 'lucide-react';
import { Language } from '../types';
import { MINORITY_COLLEGES, MinorityCollegeProfile } from '../data/minorityCollegesData';

interface MinorityCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function MinorityCollegesDirectory({ currentLanguage }: MinorityCollegesDirectoryProps) {
  // Navigation View Tabs
  const [activeTab, setActiveTab] = useState<'directory' | 'article30_info' | 'central_universities' | 'scholarships' | 'medical_professional'>('directory');

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState<string>('All Communities');
  const [selectedState, setSelectedState] = useState<string>('All States & UTs');
  const [selectedInstType, setSelectedInstType] = useState<string>('All');
  const [selectedOwnership, setSelectedOwnership] = useState<string>('All');
  const [selectedApproval, setSelectedApproval] = useState<string>('All');
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [coachingOnly, setCoachingOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Selected Profile Modal
  const [selectedCollege, setSelectedCollege] = useState<MinorityCollegeProfile | null>(null);
  const [modalActiveSubTab, setModalActiveSubTab] = useState<'overview' | 'programmes' | 'minority_benefits' | 'admissions' | 'infrastructure' | 'placements' | 'scholarships' | 'contact'>('overview');

  // Saved & Compared States
  const [savedColleges, setSavedColleges] = useState<string[]>([]);
  const [comparedColleges, setComparedColleges] = useState<MinorityCollegeProfile[]>([]);
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);

  // Toggle Save
  const toggleSave = (id: string) => {
    setSavedColleges(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Toggle Compare
  const toggleCompare = (college: MinorityCollegeProfile) => {
    setComparedColleges(prev => {
      const exists = prev.some(c => c.id === college.id);
      if (exists) {
        return prev.filter(c => c.id !== college.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 institutions simultaneously.');
          return prev;
        }
        return [...prev, college];
      }
    });
  };

  // Dynamic States list
  const statesList = useMemo(() => {
    const states = new Set(MINORITY_COLLEGES.map(c => c.state));
    return ['All States & UTs', ...Array.from(states).sort()];
  }, []);

  // Minority Communities list
  const communitiesList = [
    'All Communities', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi (Zoroastrian)'
  ];

  // Institution Types list
  const instTypesList = [
    'All',
    'Central Minority University', 'State Minority University', 'Deemed Minority University',
    'Minority Medical College', 'Minority Dental College', 'Minority Engineering College',
    'Minority Nursing College', 'Minority Pharmacy College', 'Minority Law College',
    'Minority Management Institute', 'Minority Science & Commerce College', 'Minority Teacher Education College',
    'Minority Polytechnic & ITI', 'Minority Architecture College', 'Minority Agriculture College'
  ];

  // Regulatory Approvals list
  const approvalsList = [
    'All', 'UGC Recognized', 'AICTE Approved', 'NMC Approved (Medical)', 'DCI Approved (Dental)',
    'PCI Approved (Pharmacy)', 'INC Approved (Nursing)', 'BCI Approved (Law)', 'NCTE Recognized',
    'CoA Approved (Architecture)', 'ICAR Accredited'
  ];

  // Reset Filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCommunity('All Communities');
    setSelectedState('All States & UTs');
    setSelectedInstType('All');
    setSelectedOwnership('All');
    setSelectedApproval('All');
    setHostelOnly(false);
    setScholarshipOnly(false);
    setCoachingOnly(false);
    setSortBy('Alphabetical');
    setCurrentPage(1);
  };

  // Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    return MINORITY_COLLEGES.filter(college => {
      // Navigation Tab Based Pre-Filtering
      if (activeTab === 'central_universities') {
        if (!college.institutionType.includes('Central') && !college.institutionType.includes('Deemed')) {
          return false;
        }
      } else if (activeTab === 'medical_professional') {
        const isProfessional = college.institutionType.includes('Medical') || 
                               college.institutionType.includes('Dental') || 
                               college.institutionType.includes('Engineering') || 
                               college.institutionType.includes('Nursing') || 
                               college.institutionType.includes('Pharmacy') || 
                               college.institutionType.includes('Law');
        if (!isProfessional) return false;
      }

      // Community Filter
      if (selectedCommunity !== 'All Communities' && college.minorityCommunity !== selectedCommunity) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = college.name.toLowerCase().includes(q);
        const matchesCity = college.city.toLowerCase().includes(q);
        const matchesState = college.state.toLowerCase().includes(q);
        const matchesAffil = college.universityAffiliation.toLowerCase().includes(q);
        const matchesType = college.institutionType.toLowerCase().includes(q);
        const matchesProgs = college.programmes.some(p => p.toLowerCase().includes(q));
        if (!matchesName && !matchesCity && !matchesState && !matchesAffil && !matchesType && !matchesProgs) {
          return false;
        }
      }

      // State Filter
      if (selectedState !== 'All States & UTs' && college.state !== selectedState) {
        return false;
      }

      // Institution Type
      if (selectedInstType !== 'All' && college.institutionType !== selectedInstType) {
        return false;
      }

      // Ownership Filter
      if (selectedOwnership !== 'All' && college.ownership !== selectedOwnership) {
        return false;
      }

      // Approval Filter
      if (selectedApproval !== 'All' && !college.regulatoryApprovals.includes(selectedApproval)) {
        return false;
      }

      // Hostel Filter
      if (hostelOnly && !college.infrastructure.includes('Hostels (Boys & Girls)')) {
        return false;
      }

      // Scholarship Filter
      if (scholarshipOnly && !college.financialInfo.nationalScholarshipPortal && !college.financialInfo.stateMinorityScholarships) {
        return false;
      }

      // Coaching RCA Filter
      if (coachingOnly && !college.placement.civilServicesGuidance) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'Alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'Establishment Year') {
        return a.yearEstablished - b.yearEstablished;
      } else if (sortBy === 'NAAC Grade') {
        return a.naacGrade.localeCompare(b.naacGrade);
      } else if (sortBy === 'Highest Package') {
        const salA = parseFloat(a.placement.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        const salB = parseFloat(b.placement.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        return salB - salA;
      }
      return 0;
    });
  }, [
    activeTab, searchQuery, selectedCommunity, selectedState, selectedInstType,
    selectedOwnership, selectedApproval, hostelOnly, scholarshipOnly, coachingOnly, sortBy
  ]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCommunity, selectedState, selectedInstType, selectedOwnership, selectedApproval, hostelOnly, scholarshipOnly, coachingOnly, activeTab]);

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
          "name": "Minority Universities & Educational Institutions Portal - Rangrez Community Bharat",
          "description": "India's largest verified Minority Education Portal covering Article 30 Constitutionally recognized Muslim, Christian, Sikh, Jain, Buddhist & Parsi Universities, Medical, Engineering & Professional Colleges.",
          "url": "https://rangrez-portal.org/minority-educational-institutions",
          "numberOfItems": MINORITY_COLLEGES.length,
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
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#064E3B] to-[#022C22] border-b border-[#059669] pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#A7F3D0] transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <a href="#colleges" className="hover:text-[#A7F3D0] transition-colors">Education & Colleges Directory</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-[#34D399] font-medium">Minority Universities & Institutions Directory</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B] border border-[#10B981]/50 text-[#A7F3D0] text-xs font-semibold mb-3">
                <Landmark className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Article 30 Constitution of India Verified Education Portal 2026</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Minority Universities & Educational Institutions Directory
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
                India's largest single-window portal for Muslim, Christian, Sikh, Jain, Buddhist & Parsi Minority Central Universities, Medical Colleges, Engineering Institutes, Law Schools & Article 30 Recognized Higher Educational Institutions.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <div className="bg-[#022C22]/90 border border-[#10B981]/40 rounded-lg p-3 text-center min-w-[140px]">
                <div className="text-xl font-bold text-[#A7F3D0]">{MINORITY_COLLEGES.length}+</div>
                <div className="text-[11px] text-slate-300 font-medium">Verified Institutions</div>
              </div>
              <div className="bg-[#022C22]/90 border border-[#10B981]/40 rounded-lg p-3 text-center min-w-[140px]">
                <div className="text-xl font-bold text-[#34D399]">100%</div>
                <div className="text-[11px] text-slate-300 font-medium">NCMEI & UGC Verified</div>
              </div>
            </div>
          </div>

          {/* Quick Community Filter Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-300 font-semibold mr-1">Recognized Communities:</span>
            {communitiesList.slice(1).map(comm => (
              <button
                key={comm}
                onClick={() => {
                  setSelectedCommunity(comm);
                  setActiveTab('directory');
                }}
                className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  selectedCommunity === comm
                    ? 'bg-[#10B981] text-slate-950 font-bold border-[#34D399]'
                    : 'bg-[#064E3B]/80 text-[#A7F3D0] border-[#10B981]/40 hover:bg-[#047857]'
                }`}
              >
                {comm} Minority
              </button>
            ))}
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
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-md shadow-[#10B981]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Master Minority Directory ({MINORITY_COLLEGES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('central_universities')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'central_universities'
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-md shadow-[#10B981]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>Central & Deemed Universities</span>
          </button>

          <button
            onClick={() => setActiveTab('medical_professional')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'medical_professional'
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-md shadow-[#10B981]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Medical, Dental & Engineering</span>
          </button>

          <button
            onClick={() => setActiveTab('scholarships')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'scholarships'
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-md shadow-[#10B981]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Minority Scholarships & RCA Coaching</span>
          </button>

          <button
            onClick={() => setActiveTab('article30_info')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'article30_info'
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-md shadow-[#10B981]/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Article 30 Rights & NCMEI Norms</span>
          </button>

          {comparedColleges.length > 0 && (
            <button
              onClick={() => setShowCompareModal(true)}
              className="ml-auto px-3 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-md hover:bg-amber-400 cursor-pointer shrink-0"
            >
              <Layers className="w-4 h-4" />
              <span>Compare Selected ({comparedColleges.length})</span>
            </button>
          )}
        </div>

        {/* Tab Content: Article 30 & Legal Rights */}
        {activeTab === 'article30_info' && (
          <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Scale className="w-6 h-6 text-[#10B981]" />
                <span>Article 30 Constitutional Protections & NCMEI Framework</span>
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Article 30(1) of the Constitution of India guarantees linguistic and religious minorities the fundamental right to establish and administer educational institutions of their choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#022C22]/60 border border-[#10B981]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] border border-[#34D399]/40 flex items-center justify-center text-[#A7F3D0]">
                  <ScrollText className="w-5 h-5 text-[#34D399]" />
                </div>
                <h3 className="text-base font-bold text-white">50% Minority Reservation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Supreme Court rulings affirm that Article 30 recognized minority educational institutions can reserve up to 50% seats for students belonging to their community while maintaining open merit for the remaining 50%.
                </p>
              </div>

              <div className="bg-[#022C22]/60 border border-[#10B981]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] border border-[#34D399]/40 flex items-center justify-center text-[#A7F3D0]">
                  <ShieldCheck className="w-5 h-5 text-[#34D399]" />
                </div>
                <h3 className="text-base font-bold text-white">NCMEI Certification</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The National Commission for Minority Educational Institutions (NCMEI) is the statutory body empowered under the NCMEI Act 2004 to grant Minority Status Certificates and adjudicate minority institution rights across India.
                </p>
              </div>

              <div className="bg-[#022C22]/60 border border-[#10B981]/30 rounded-lg p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] border border-[#34D399]/40 flex items-center justify-center text-[#A7F3D0]">
                  <GraduationCap className="w-5 h-5 text-[#34D399]" />
                </div>
                <h3 className="text-base font-bold text-white">Administrative Autonomy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Minority institutions enjoy autonomy in internal administration, appointment of staff, fee structures (subject to state regulatory oversight), and campus cultural atmosphere.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-3">List of Officially Recognized Minority Communities in India</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Muslim</div>
                  <div className="text-slate-400 mt-1">14.2% Population</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Christian</div>
                  <div className="text-slate-400 mt-1">2.3% Population</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Sikh</div>
                  <div className="text-slate-400 mt-1">1.7% Population</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Buddhist</div>
                  <div className="text-slate-400 mt-1">0.7% Population</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Jain</div>
                  <div className="text-slate-400 mt-1">0.4% Population</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="font-bold text-[#A7F3D0] text-sm">Parsi</div>
                  <div className="text-slate-400 mt-1">Zoroastrian</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Scholarships & RCA Coaching */}
        {activeTab === 'scholarships' && (
          <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <HeartHandshake className="w-6 h-6 text-[#10B981]" />
                <span>Government Scholarships & Residential Coaching Academies (RCA)</span>
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Central & State Government financial assistance schemes and specialized coaching academies for minority students pursuing higher education and competitive examinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#A7F3D0]">1. National Scholarship Portal (NSP) Schemes</h3>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  <li><strong className="text-white">Post-Matric Scholarship:</strong> Covers tuition fees and maintenance allowance for Class 11th up to Ph.D. students.</li>
                  <li><strong className="text-white">Merit-cum-Means (MCM) Scholarship:</strong> Financial support for professional and technical undergraduate/postgraduate degrees (MBBS, B.Tech, MBA, MCA, BDS).</li>
                  <li><strong className="text-white">Maulana Azad National Fellowship (MANF):</strong> Fellowship for M.Phil and Ph.D. scholars in humanities, sciences and social sciences.</li>
                  <li><strong className="text-white">Begum Hazrat Mahal National Scholarship:</strong> Girl student scholarship for secondary and higher secondary education.</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#A7F3D0]">2. Residential Coaching Academies (RCA)</h3>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  <li><strong className="text-white">AMU RCA:</strong> Free residential coaching for Civil Services, State PSC, Judiciary & NET/JRF.</li>
                  <li><strong className="text-white">Jamia Millia Islamia RCA:</strong> Premier UPSC IAS coaching academy consistently producing Top 10 All India Ranks.</li>
                  <li><strong className="text-white">MANUU RCA:</strong> Specialized civil service coaching for Urdu-medium background aspirants.</li>
                  <li><strong className="text-white">Jamia Hamdard Study Circle:</strong> Free coaching with air-conditioned library and hostel accommodation.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Directory View (Filters & Cards Grid) */}
        {(activeTab === 'directory' || activeTab === 'central_universities' || activeTab === 'medical_professional') && (
          <div className="mt-6 space-y-6">
            
            {/* Advance Filters Bar */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Sliders className="w-4 h-4 text-[#10B981]" />
                  <span>Search & Advance Directory Filters</span>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#A7F3D0] hover:underline flex items-center gap-1 font-medium cursor-pointer"
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                {/* Community Dropdown */}
                <div>
                  <select
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    {communitiesList.map(comm => (
                      <option key={comm} value={comm}>{comm}</option>
                    ))}
                  </select>
                </div>

                {/* State Dropdown */}
                <div>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    {statesList.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Institution Type Dropdown */}
                <div>
                  <select
                    value={selectedInstType}
                    onChange={(e) => setSelectedInstType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    {instTypesList.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Ownership, Regulatory & Sort Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Ownership Category</label>
                  <select
                    value={selectedOwnership}
                    onChange={(e) => setSelectedOwnership(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    <option value="All">All Ownership Types</option>
                    <option value="Government">Government / Central</option>
                    <option value="Private">Private Minority</option>
                    <option value="Deemed">Deemed University</option>
                    <option value="Autonomous">Autonomous Institution</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Regulatory Approvals</label>
                  <select
                    value={selectedApproval}
                    onChange={(e) => setSelectedApproval(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    {approvalsList.map(app => (
                      <option key={app} value={app}>{app}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Sort Results By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#10B981]"
                  >
                    <option value="Alphabetical">Alphabetical (A - Z)</option>
                    <option value="Establishment Year">Oldest Establishment First</option>
                    <option value="NAAC Grade">NAAC Grade</option>
                    <option value="Highest Package">Highest Placement Package</option>
                  </select>
                </div>
              </div>

              {/* Quick Checkbox Toggles */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 mt-4 text-xs">
                <label className="inline-flex items-center gap-1.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hostelOnly}
                    onChange={(e) => setHostelOnly(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-950 text-[#10B981] focus:ring-[#10B981]"
                  />
                  <span>In-Campus Hostel Facility</span>
                </label>

                <label className="inline-flex items-center gap-1.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scholarshipOnly}
                    onChange={(e) => setScholarshipOnly(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-950 text-[#10B981] focus:ring-[#10B981]"
                  />
                  <span>NSP Minority Scholarships</span>
                </label>

                <label className="inline-flex items-center gap-1.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={coachingOnly}
                    onChange={(e) => setCoachingOnly(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-950 text-[#10B981] focus:ring-[#10B981]"
                  />
                  <span>Civil Services RCA Coaching</span>
                </label>
              </div>
            </div>

            {/* Results Count & Active Filters Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <div>
                Showing <span className="text-white font-bold">{filteredColleges.length}</span> verified institutions
              </div>
              <div>
                Page {currentPage} of {totalPages || 1}
              </div>
            </div>

            {/* Directory Cards Grid */}
            {paginatedColleges.length === 0 ? (
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center space-y-4">
                <Building2 className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No Minority Institutions Found</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try adjusting your search query, selecting another minority community, or clearing active filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-[#10B981] text-slate-950 text-xs font-bold rounded-lg hover:bg-[#059669] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedColleges.map((college) => {
                  const isSaved = savedColleges.includes(college.id);
                  const isCompared = comparedColleges.some(c => c.id === college.id);

                  return (
                    <motion.div
                      key={college.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-[#10B981]/50 transition-all flex flex-col justify-between group"
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
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="bg-[#064E3B]/90 text-[#A7F3D0] px-2.5 py-1 rounded text-[10px] font-bold border border-[#10B981]/40 uppercase tracking-wide">
                              {college.minorityCommunity} Minority
                            </span>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => toggleSave(college.id)}
                                className={`p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                                  isSaved ? 'bg-amber-500 text-slate-950' : 'bg-slate-950/70 text-slate-300 hover:text-white'
                                }`}
                                title={isSaved ? 'Remove from Saved' : 'Save Institution'}
                              >
                                <Bookmark className="w-3.5 h-3.5" />
                              </button>
                              
                              <span className="bg-slate-950/90 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-500/30 flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                NAAC {college.naacGrade}
                              </span>
                            </div>
                          </div>

                          {/* Logo & Establishment Overlay */}
                          <div className="absolute bottom-3 left-3 flex items-center gap-3">
                            <img
                              src={college.logoUrl}
                              alt={`${college.name} logo`}
                              className="w-12 h-12 rounded-lg object-cover border-2 border-slate-800 shadow-md bg-slate-950"
                            />
                            <div>
                              <div className="text-xs text-white font-bold line-clamp-1">
                                Estd. {college.yearEstablished}
                              </div>
                              <div className="text-[10px] text-emerald-400 font-medium">
                                Article 30 Certified
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 space-y-3">
                          <h3 className="text-base font-bold text-white group-hover:text-[#A7F3D0] transition-colors line-clamp-2 leading-snug">
                            {college.name}
                          </h3>

                          <div className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                            <span className="truncate">{college.city}, {college.district}, {college.state}</span>
                          </div>

                          <div className="text-[11px] text-slate-300 bg-slate-950 p-2 rounded border border-slate-800 line-clamp-2">
                            <span className="font-semibold text-slate-400">Type: </span>
                            {college.institutionType} ({college.ownership})
                          </div>

                          {/* Regulatory badges */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {college.regulatoryApprovals.slice(0, 3).map((app, idx) => (
                              <span key={idx} className="bg-[#022C22] text-[#A7F3D0] text-[10px] px-2 py-0.5 rounded border border-[#10B981]/30">
                                {app}
                              </span>
                            ))}
                          </div>

                          {/* Placement Quick Stat */}
                          <div className="grid grid-cols-2 gap-2 text-center bg-slate-950/60 p-2 rounded border border-slate-800/80 text-[11px]">
                            <div>
                              <span className="text-slate-400 block text-[10px]">Avg Package</span>
                              <span className="font-bold text-white">{college.placement.averagePackage}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block text-[10px]">Highest Package</span>
                              <span className="font-bold text-[#A7F3D0]">{college.placement.highestPackage}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-slate-800/60 pt-4 mt-auto">
                        <button
                          onClick={() => {
                            setSelectedCollege(college);
                            setModalActiveSubTab('overview');
                          }}
                          className="w-full bg-[#064E3B] hover:bg-[#047857] text-[#A7F3D0] text-xs font-semibold py-2 rounded-lg border border-[#10B981]/40 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>View Profile</span>
                        </button>

                        <button
                          onClick={() => toggleCompare(college)}
                          className={`w-full text-xs font-semibold py-2 rounded-lg border flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                            isCompared
                              ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                              : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>{isCompared ? 'Compared' : 'Compare'}</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
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
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-48 sm:h-64 bg-slate-950 shrink-0">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover opacity-70"
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
                      <span className="bg-[#064E3B] text-[#A7F3D0] px-2.5 py-0.5 rounded text-[10px] font-bold border border-[#10B981]/40 uppercase tracking-wide">
                        {selectedCollege.minorityCommunity} Minority • {selectedCollege.ownership}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 line-clamp-1">
                        {selectedCollege.name}
                      </h2>
                      <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>{selectedCollege.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Navigation Tabs Inside Modal */}
              <div className="bg-slate-950 border-b border-slate-800 px-6 pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 text-xs font-semibold">
                <button
                  onClick={() => setModalActiveSubTab('overview')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'overview' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Overview & Article 30
                </button>
                <button
                  onClick={() => setModalActiveSubTab('programmes')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'programmes' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Programmes & Approvals
                </button>
                <button
                  onClick={() => setModalActiveSubTab('minority_benefits')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'minority_benefits' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Minority Benefits & Quota
                </button>
                <button
                  onClick={() => setModalActiveSubTab('admissions')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'admissions' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Admissions & Entrance
                </button>
                <button
                  onClick={() => setModalActiveSubTab('infrastructure')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'infrastructure' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Infrastructure
                </button>
                <button
                  onClick={() => setModalActiveSubTab('placements')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'placements' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Placements & RCA
                </button>
                <button
                  onClick={() => setModalActiveSubTab('scholarships')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'scholarships' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Fees & Scholarships
                </button>
                <button
                  onClick={() => setModalActiveSubTab('contact')}
                  className={`pb-3 px-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    modalActiveSubTab === 'contact' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Contact & Faculty
                </button>
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm">
                
                {/* Official Badges Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div>
                    <div className="text-[10px] text-slate-400">NCMEI / Article 30</div>
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Certified Recognized</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">NAAC Grade</div>
                    <div className="font-bold text-amber-300">{selectedCollege.naacGrade}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">NIRF Ranking</div>
                    <div className="font-bold text-[#A7F3D0]">{selectedCollege.nirfRanking}</div>
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
                    className="px-4 py-2 bg-[#10B981] text-slate-950 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-[#059669] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Official Website</span>
                  </a>

                  <a
                    href={selectedCollege.admissionPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#064E3B] text-[#A7F3D0] border border-[#10B981]/40 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-[#047857] transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#34D399]" />
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

                {/* Sub Tab: Overview */}
                {modalActiveSubTab === 'overview' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Landmark className="w-5 h-5 text-[#10B981]" />
                      <span>Institutional Profile & Constitutional Status</span>
                    </h3>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Affiliation & Status: </span>
                        <span className="text-slate-300">{selectedCollege.universityAffiliation}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Minority Community: </span>
                        <span className="text-white font-semibold">{selectedCollege.minorityCommunity} Minority Educational Institution</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Recognizing Authority: </span>
                        <span className="text-slate-300">{selectedCollege.minorityBenefits.recognizingAuthority}</span>
                      </div>
                      <div className="text-slate-300 leading-relaxed border-t border-slate-900 pt-2">
                        {selectedCollege.minorityBenefits.minorityStatus}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {selectedCollege.campusGallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="Campus view"
                          className="w-full h-28 object-cover rounded-lg border border-slate-800"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub Tab: Programmes */}
                {modalActiveSubTab === 'programmes' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <GraduationCap className="w-5 h-5 text-[#10B981]" />
                      <span>Programmes Offered & Regulatory Approvals</span>
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400">Regulatory Approvals & Accreditations</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedCollege.regulatoryApprovals.map((app, i) => (
                          <span key={i} className="bg-[#022C22] text-[#A7F3D0] px-3 py-1 rounded-full border border-[#10B981]/40 font-semibold">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-slate-400">Available Courses & Degrees</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedCollege.programmes.map((prog, i) => (
                          <div key={i} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                            <span className="font-semibold text-slate-200">{prog}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Minority Benefits */}
                {modalActiveSubTab === 'minority_benefits' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                      <span>Minority Benefits, Reservation Quota & Coaching</span>
                    </h3>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Reservation Policy: </span>
                        <span className="text-slate-300">{selectedCollege.minorityBenefits.reservationPolicy}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Scholarship Eligibility: </span>
                        <span className="text-slate-300">{selectedCollege.minorityBenefits.scholarshipEligibility}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Special Coaching & RCA: </span>
                        <span className="text-slate-300">{selectedCollege.minorityBenefits.specialCoaching}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Prayer & Cultural Facilities: </span>
                        <span className="text-slate-300">{selectedCollege.minorityBenefits.prayerFacility}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Admissions */}
                {modalActiveSubTab === 'admissions' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <FileText className="w-5 h-5 text-[#10B981]" />
                      <span>Admission Details & Entrance Requirements</span>
                    </h3>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Eligibility: </span>
                        <span className="text-slate-300">{selectedCollege.admissionDetails.eligibility}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#A7F3D0]">Entrance Exams: </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {selectedCollege.admissionDetails.entranceExams.map((exam, i) => (
                            <span key={i} className="bg-slate-800 text-white px-2 py-0.5 rounded text-[11px]">
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed border-t border-slate-900 pt-2">
                        {selectedCollege.admissionDetails.admissionProcess}
                      </p>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Infrastructure */}
                {modalActiveSubTab === 'infrastructure' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Home className="w-5 h-5 text-[#10B981]" />
                      <span>Campus Infrastructure & Student Amenities</span>
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedCollege.infrastructure.map((fac, i) => (
                        <div key={i} className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                          <span className="text-slate-300">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub Tab: Placements & RCA */}
                {modalActiveSubTab === 'placements' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Briefcase className="w-5 h-5 text-[#10B981]" />
                      <span>Career Placements & Civil Services Guidance</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                      <div>
                        <div className="text-xs text-slate-400">Average Placement Package</div>
                        <div className="text-lg font-bold text-white mt-1">{selectedCollege.placement.averagePackage}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Highest Placement Package</div>
                        <div className="text-lg font-bold text-[#A7F3D0] mt-1">{selectedCollege.placement.highestPackage}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400">Top Corporate Recruiters</label>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.placement.topRecruiters.map((rec, i) => (
                          <span key={i} className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded text-xs">
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Fees & Scholarships */}
                {modalActiveSubTab === 'scholarships' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <DollarSign className="w-5 h-5 text-[#10B981]" />
                      <span>Fee Structures & Financial Assistance</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">Tuition Fee Range</div>
                        <div className="text-base font-bold text-white mt-1">{selectedCollege.financialInfo.tuitionFees}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Hostel Fee Range</div>
                        <div className="text-base font-bold text-[#A7F3D0] mt-1">{selectedCollege.financialInfo.hostelFees}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Contact & Faculty */}
                {modalActiveSubTab === 'contact' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Phone className="w-5 h-5 text-[#10B981]" />
                      <span>Institutional Leadership & Contact Channels</span>
                    </h3>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div><strong className="text-[#A7F3D0]">Vice Chancellor / Director:</strong> {selectedCollege.faculty.viceChancellorOrDirector}</div>
                      <div><strong className="text-[#A7F3D0]">Principal / Dean:</strong> {selectedCollege.faculty.principalOrDean}</div>
                      <div><strong className="text-[#A7F3D0]">Official Phone:</strong> {selectedCollege.contact.phone}</div>
                      <div><strong className="text-[#A7F3D0]">Official Email:</strong> {selectedCollege.contact.email}</div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showCompareModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-6xl w-full p-6 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                  <Layers className="w-5 h-5 text-[#10B981]" />
                  <span>Compare Minority Institutions ({comparedColleges.length})</span>
                </div>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {comparedColleges.map((col) => (
                  <div key={col.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#A7F3D0] text-sm">{col.name}</span>
                      <button
                        onClick={() => toggleCompare(col)}
                        className="text-rose-400 hover:underline text-[10px]"
                      >
                        Remove
                      </button>
                    </div>
                    <div><strong>Community:</strong> {col.minorityCommunity}</div>
                    <div><strong>Type:</strong> {col.institutionType}</div>
                    <div><strong>State:</strong> {col.state}</div>
                    <div><strong>NAAC Grade:</strong> {col.naacGrade}</div>
                    <div><strong>Highest Package:</strong> {col.placement.highestPackage}</div>
                    <div><strong>Tuition Fees:</strong> {col.financialInfo.tuitionFees}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
