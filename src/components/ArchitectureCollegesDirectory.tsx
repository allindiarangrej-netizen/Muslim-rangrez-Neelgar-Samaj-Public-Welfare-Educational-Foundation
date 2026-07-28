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
  FileText,
  Briefcase,
  Layers2,
  Building,
  Activity,
  Share2,
  Globe,
  Sliders,
  Check,
  Building2,
  FileSpreadsheet,
  Download,
  CheckSquare,
  Zap,
  PenTool,
  Pencil,
  Compass as DraftCompass,
  Monitor,
  Box,
  Library,
  Lightbulb,
  Globe2,
  Cpu,
  Landmark,
  Trees,
  HardHat,
  Construction,
  Briefcase as JobIcon,
  Activity as Pulse
} from 'lucide-react';
import { ARCHITECTURE_COLLEGES, ArchitectureCollegeProfile } from '../data/architectureCollegesData';

interface ArchitectureCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'coa',
    name: 'CoA',
    fullName: 'Council of Architecture',
    website: 'https://www.coa.gov.in/',
    description: {
      en: 'The statutory body constituted by the Government of India under the Architects Act, 1972. It regulates the education and practice of profession throughout India besides maintaining the register of architects.',
      ur: 'ہندوستان میں آرکیٹیکٹس ایکٹ، 1972 کے تحت حکومت ہند کی طرف سے تشکیل دیا گیا قانونی ادارہ۔ یہ پورے ہندوستان میں تعلیم اور پیشے کی پریکٹس کو کنٹرول کرتا ہے۔',
      hi: 'भारत सरकार द्वारा आर्किटेक्ट्स अधिनियम, 1972 के तहत गठित वैधानिक निकाय। यह पूरे भारत में शिक्षा और पेशे के अभ्यास को विनियमित करने के साथ-साथ वास्तुकारों के रजिस्टर को बनाए रखता है।'
    },
    roles: [
      'Prescribing Standards of Education',
      'Recognizing Qualifications',
      'Registration of Architects',
      'Monitoring Professional Conduct'
    ]
  },
  {
    id: 'uai',
    name: 'IIA',
    fullName: 'The Indian Institute of Architects',
    website: 'https://indianinstituteofarchitects.com/',
    description: {
      en: 'The national body of Architects in India, established in 1917. It plays a major role in promoting the profession of architecture and provides a platform for interaction between architects and students.',
      ur: 'ہندوستان میں آرکیٹیکٹس کا قومی ادارہ، جو 1917 میں قائم ہوا۔ یہ آرکیٹیکچر کے پیشے کو فروغ دینے میں اہم کردار ادا کرتا ہے۔',
      hi: 'भारत में आर्किटेक्ट्स का राष्ट्रीय निकाय, जो 1917 में स्थापित किया गया था। यह वास्तुकला के पेशे को बढ़ावा देने में प्रमुख भूमिका निभाता है।'
    },
    roles: [
      'Professional Advocacy',
      'Continuing Education Programmes',
      'Student Chapters & Interaction',
      'National Conventions & Awards'
    ]
  }
];

export default function ArchitectureCollegesDirectory({ currentLanguage = 'en' }: ArchitectureCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'barch' | 'march' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [placementOnly, setPlacementOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'nirf-asc' | 'naac' | 'established-asc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<ArchitectureCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'research' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(ARCHITECTURE_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = ARCHITECTURE_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const universitiesList = useMemo(() => {
    const univs = new Set(ARCHITECTURE_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed University', 'Minority Institution'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...ARCHITECTURE_COLLEGES];

    // Tab filtering
    if (activeTab === 'barch') {
      result = result.filter(c => c.programmes.includes('B.Arch'));
    } else if (activeTab === 'march') {
      result = result.filter(c => c.programmes.includes('M.Arch'));
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.affiliatedUniversity.toLowerCase().includes(q) ||
        c.specializations.some(s => s.toLowerCase().includes(q)) ||
        c.deanPrincipal.toLowerCase().includes(q)
      );
    }

    if (selectedState !== 'All') result = result.filter(c => c.state === selectedState);
    if (selectedDistrict !== 'All') result = result.filter(c => c.district === selectedDistrict);
    if (selectedUniversity !== 'All') result = result.filter(c => c.affiliatedUniversity === selectedUniversity);
    if (selectedOwnership !== 'All') result = result.filter(c => c.ownership === selectedOwnership);
    if (selectedNaacGrade !== 'All') result = result.filter(c => c.naacGrade && c.naacGrade.includes(selectedNaacGrade));
    if (placementOnly) result = result.filter(c => c.hasPlacementCell);
    if (hostelOnly) result = result.filter(c => c.infrastructure.some(i => i.toLowerCase().includes('hostel')));

    result.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical': return a.name.localeCompare(b.name);
        case 'state': return a.state.localeCompare(b.state);
        case 'fee-asc': {
          const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          return feeA - feeB;
        }
        case 'fee-desc': {
          const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          return feeB - feeA;
        }
        case 'placement-desc': {
          const packA = parseFloat(a.highestPackage.replace(/[^0-9.]/g, '')) || 0;
          const packB = parseFloat(b.highestPackage.replace(/[^0-9.]/g, '')) || 0;
          return packB - packA;
        }
        case 'nirf-asc': {
          const rA = parseInt(a.nirfRanking || '999') || 999;
          const rB = parseInt(b.nirfRanking || '999') || 999;
          return rA - rB;
        }
        case 'naac': {
          const rankMap: Record<string, number> = { 'A++ Grade': 6, 'A+ Grade': 5, 'A Grade': 4, 'B++ Grade': 3, 'B+ Grade': 2, 'B Grade': 1 };
          const gradeA = rankMap[a.naacGrade || ''] || 0;
          const gradeB = rankMap[b.naacGrade || ''] || 0;
          return gradeB - gradeA;
        }
        case 'established-asc': return a.yearEstablished - b.yearEstablished;
        default: return 0;
      }
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedUniversity, selectedOwnership, selectedNaacGrade, placementOnly, hostelOnly, sortBy]);

  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All');
    setSelectedDistrict('All');
    setSelectedUniversity('All');
    setSelectedOwnership('All');
    setSelectedNaacGrade('All');
    setPlacementOnly(false);
    setHostelOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  const seoDetails = useMemo(() => {
    const baseTitle = "National Architecture & Built Environment Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Verified directory of 50+ Architecture Colleges in India. Explore B.Arch, M.Arch, and Planning institutes with CoA approval status, design studios, fees, and admission details.";
    const slug = "architecture-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Architecture Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": { "@type": "Organization", "name": "Rangrez Community Bharat Portal" },
        "numberOfItems": ARCHITECTURE_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#fdfdfc] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-[#1A2E35] via-[#2D4A53] to-[#406771] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#FFD54A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Landmark className="w-3.5 h-3.5 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en'
                  ? 'Built Environment • CoA Approved'
                  : currentLanguage === 'ur'
                  ? 'آرکیٹیکچر کالجز ڈائریکٹری'
                  : 'वास्तुकला • CoA स्वीकृत'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowSeoInspector(!showSeoInspector)}
                className="flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-950/80 border border-sky-500/40 px-3 py-1.5 rounded-xl hover:bg-sky-900/60 transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>SEO Specification</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {currentLanguage === 'en'
                    ? '50+ Verified Architecture Colleges'
                    : currentLanguage === 'ur'
                    ? 'تصدیق شدہ آرکیٹیکچر کالجز'
                    : '50+ सत्यापित आर्किटेक्चर कॉलेज'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Architecture Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی آرکیٹیکچر کالجز ڈائریکٹری'
              : 'राष्ट्रीय वास्तुकला कॉलेज निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-slate-100 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Explore India\'s premier institutions for Architecture and Planning. Find B.Arch, M.Arch, and Sustainable Design programs with Council of Architecture (CoA) approval, state-of-the-art design studios, and industry placements.'
              : currentLanguage === 'ur'
              ? 'ہندوستان میں آرکیٹیکچر اور پلاننگ کے اہم اداروں کو تلاش کریں۔'
              : 'भारत के प्रमुख वास्तुकला और योजना संस्थानों का अन्वेषण करें।'}
          </p>

          {/* TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => { setActiveTab('directory'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory' ? 'bg-[#FFD54A] text-[#1A2E35] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'All Schools' : 'تمام اسکولز'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('barch'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'barch' ? 'bg-[#FFD54A] text-[#1A2E35] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Pencil className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'B.Arch Programs' : 'بی آرک پروگرامز'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('march'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'march' ? 'bg-[#FFD54A] text-[#1A2E35] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <DraftCompass className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'M.Arch Programs' : 'ایم آرک پروگرامز'}</span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory' ? 'bg-[#FFD54A] text-[#1A2E35] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'CoA & IIA Guide' : 'ریگولیٹری گائیڈ'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SEO INSPECTOR */}
      <AnimatePresence>
        {showSeoInspector && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="bg-sky-50 border-b border-sky-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
              <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-inner">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black text-sky-900 uppercase">Architecture SEO Specifications</h3>
                  <button onClick={() => setShowSeoInspector(false)}><X className="w-4 h-4 text-sky-400" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">Meta Title</span>
                    <p className="font-bold p-2 bg-slate-50 border rounded-lg">{seoDetails.title}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">Structured Data</span>
                    <pre className="p-2 bg-stone-900 text-amber-400 rounded-lg overflow-x-auto max-h-32 text-[10px]">
                      {JSON.stringify(seoDetails.structuredData, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {(activeTab === 'directory' || activeTab === 'barch' || activeTab === 'march') && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by school name, city, state, or specialization (Urban, Sustainable)..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-600 text-sm font-medium"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }}
                    className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-[#1A2E35] cursor-pointer"
                  >
                    <option value="alphabetical">Sort: A-Z</option>
                    <option value="state">Sort: State</option>
                    <option value="fee-asc">Sort: Fee (Low-High)</option>
                    <option value="fee-desc">Sort: Fee (High-Low)</option>
                    <option value="placement-desc">Sort: Top Placement</option>
                    <option value="nirf-asc">Sort: NIRF Ranking</option>
                    <option value="naac">Sort: NAAC Grade</option>
                    <option value="established-asc">Sort: Oldest first</option>
                  </select>

                  <button onClick={resetFilters} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-3 rounded-xl text-xs font-bold border border-slate-200 cursor-pointer transition">
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-4 border-t border-slate-100">
                <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict('All'); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {statesList.map(st => <option key={st} value={st}>{st === 'All' ? 'Select State' : st}</option>)}
                </select>
                <select value={selectedDistrict} onChange={(e) => { setSelectedDistrict(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700" disabled={selectedState === 'All'}>
                  {districtsList.map(dt => <option key={dt} value={dt}>{dt === 'All' ? 'Select District' : dt}</option>)}
                </select>
                <select value={selectedUniversity} onChange={(e) => { setSelectedUniversity(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {universitiesList.map(univ => <option key={univ} value={univ}>{univ === 'All' ? 'Select University' : univ}</option>)}
                </select>
                <select value={selectedOwnership} onChange={(e) => { setSelectedOwnership(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {ownershipTypes.map(ow => <option key={ow} value={ow}>{ow === 'All' ? 'Select Ownership' : ow}</option>)}
                </select>
                <select value={selectedNaacGrade} onChange={(e) => { setSelectedNaacGrade(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {naacGradesList.map(ng => <option key={ng} value={ng}>{ng === 'All' ? 'Select NAAC' : ng}</option>)}
                </select>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-slate-700 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50/50 border rounded-lg px-3 py-1.5">
                  <input type="checkbox" checked={placementOnly} onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-slate-800" />
                  <span>With Placement Cell</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50/50 border rounded-lg px-3 py-1.5">
                  <input type="checkbox" checked={hostelOnly} onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-slate-800" />
                  <span>Hostel Facilities</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNTER */}
            <div className="text-sm font-black text-slate-800">
              Showing <span className="text-slate-700 border-b-2 border-slate-600">{filteredColleges.length}</span> Verified Architecture Institutions
            </div>

            {/* GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No matching architecture colleges found</h3>
                <button onClick={resetFilters} className="px-6 py-2.5 bg-slate-700 text-white rounded-xl font-bold text-sm cursor-pointer transition">Reset Filters</button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedColleges.map((college) => (
                    <motion.div
                      key={college.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-[2rem] p-6 border border-slate-200 hover:shadow-xl hover:border-slate-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border ${
                            college.ownership === 'Government' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}>
                            {college.ownership}
                          </span>
                          <span className="bg-slate-900 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-slate-700">
                            Estd {college.yearEstablished}
                          </span>
                        </div>

                        <h3 className="text-base font-black text-slate-900 group-hover:text-slate-700 transition leading-tight mb-2">
                          {college.name}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-4">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{college.city}, {college.state}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-slate-400 uppercase font-black leading-none mb-1">NIRF Rank</span>
                            <span className="text-xs font-black text-slate-900">#{college.nirfRanking || 'N/A'}</span>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-slate-400 uppercase font-black leading-none mb-1">CoA Status</span>
                            <span className="text-xs font-black text-emerald-600">Approved</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="text-[9px] uppercase font-black text-slate-400 block mb-1.5">Specializations</span>
                          <div className="flex flex-wrap gap-1">
                            {college.specializations.slice(0, 3).map((spec, idx) => (
                              <span key={idx} className="bg-slate-50 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-slate-100">
                                {spec}
                              </span>
                            ))}
                            {college.specializations.length > 3 && (
                              <span className="text-[9px] text-slate-400 font-black">+{college.specializations.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => { setSelectedCollege(college); setModalTab('academics'); }}
                        className="w-full bg-slate-900 text-white text-xs font-black py-3 rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        View Full Profile
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 disabled:opacity-40"><ChevronRight className="w-5 h-5 rotate-180" /></button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <button key={num} onClick={() => setCurrentPage(num)} className={`w-10 h-10 rounded-xl text-xs font-black transition ${currentPage === num ? 'bg-slate-700 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{num}</button>
                    ))}
                    <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 disabled:opacity-40"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* REGULATORY TAB */}
        {activeTab === 'regulatory' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGULATORY_BODIES.map((body) => (
                <div key={body.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    {body.website !== '#' && (
                      <a href={body.website} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-bold text-xs flex items-center gap-1 hover:underline">
                        Official Site <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{body.fullName}</h3>
                  <p className="text-xs font-medium text-slate-500 mb-6 leading-relaxed">
                    {body.description[currentLanguage] || body.description.en}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Primary Roles</h4>
                    {body.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 p-10 opacity-10"><Info className="w-32 h-32" /></div>
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl font-black mb-4 italic text-[#FFD54A]">Architectural Education Guide</h3>
                <p className="text-sm font-medium text-slate-100 leading-relaxed mb-6">
                  Architecture is a licensed profession in India. Only candidates registered with the Council of Architecture (CoA) are legally entitled to use the title and style of "Architect". Admission to B.Arch is mandatory via NATA or JEE Main Paper 2.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#FFD54A]" />
                    NATA / JEE Qualification Required
                  </span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#FFD54A]" />
                    Verify CoA Approval Letter
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCollege(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-48 sm:h-64 shrink-0">
                <img src={selectedCollege.coverImageUrl} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button onClick={() => setSelectedCollege(null)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition border border-white/30 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl p-4 shadow-xl border-4 border-white/20 shrink-0">
                      <img src={selectedCollege.logoUrl} className="w-full h-full object-contain" alt="Logo" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-[#FFD54A] text-slate-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/50">{selectedCollege.ownership}</span>
                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">CoA Approved School</span>
                      </div>
                      <h2 className="text-xl sm:text-3xl font-black text-white leading-tight drop-shadow-lg">{selectedCollege.name}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-slate-50">
                <div className="flex border-b bg-white px-6 sticky top-0 z-10 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'academics', label: 'Academics', icon: BookOpen },
                    { id: 'admissions', label: 'Admissions', icon: GraduationCap },
                    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
                    { id: 'research', label: 'Research & Industry', icon: Lightbulb },
                    { id: 'placements', label: 'Placements', icon: JobIcon },
                    { id: 'fees', label: 'Fees', icon: DollarSign },
                    { id: 'contact', label: 'Contact', icon: Mail }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setModalTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-4 text-xs font-black transition-all border-b-2 shrink-0 cursor-pointer ${
                        modalTab === tab.id ? 'border-slate-800 text-slate-800' : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {modalTab === 'academics' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm">
                          <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-slate-600" /> Degrees Offered
                          </h4>
                          <div className="space-y-3">
                            {selectedCollege.programmes.map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 group">
                                <Award className="w-4 h-4 text-slate-600" />
                                <span className="text-xs font-bold text-slate-700">{prog}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border shadow-sm">
                          <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                            <PenTool className="w-4 h-4 text-slate-600" /> Specializations
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCollege.specializations.map((spec, idx) => (
                              <span key={idx} className="bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-2">
                                <Box className="w-3 h-3 text-slate-400" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'admissions' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm col-span-2">
                          <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Eligibility & Process</h4>
                          <p className="text-xs font-medium text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border italic">{selectedCollege.eligibility}</p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700"><Check className="w-4 h-4" /></div>
                              <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Entrance Exams Accepted</p>
                                <p className="text-xs font-black text-slate-900">{selectedCollege.entranceExams.join(', ')}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700"><Users className="w-4 h-4" /></div>
                              <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Admission Process</p>
                                <p className="text-xs font-black text-slate-900">{selectedCollege.admissionProcess}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-900 text-white p-4 rounded-2xl text-center font-black text-sm hover:bg-slate-800 transition shadow-lg">Official Admission Portal</a>
                          <a href={selectedCollege.counsellingPortalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-slate-800 border-2 border-slate-800 p-4 rounded-2xl text-center font-black text-sm hover:bg-slate-50 transition">Centralized Counselling</a>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedCollege.infrastructure.map((item, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-2xl border text-center group hover:border-slate-500 transition shadow-sm">
                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-slate-400 group-hover:text-slate-600 transition">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 block leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {modalTab === 'research' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-12 opacity-10"><Lightbulb className="w-32 h-32" /></div>
                        <h4 className="text-xl font-serif font-black mb-4 italic text-[#FFD54A]">Research & Industry Consultancy</h4>
                        <p className="text-sm font-medium text-slate-300 leading-relaxed mb-6 max-w-2xl">
                          Building the future requires a balance of theory and professional practice. Our students engage in:
                        </p>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 inline-block">
                          <div className="flex items-center gap-4">
                            <Construction className="w-10 h-10 text-[#FFD54A]" />
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Key Domain Expertise</p>
                              <p className="text-lg font-black">{selectedCollege.researchIndustry}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'placements' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm text-center">
                          <JobIcon className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                          <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Average Package</p>
                          <p className="text-2xl font-black text-slate-900">{selectedCollege.averagePackage}</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border shadow-sm text-center">
                          <Award className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                          <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Highest Package</p>
                          <p className="text-2xl font-black text-emerald-700">{selectedCollege.highestPackage}</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border shadow-sm flex items-center justify-center">
                          <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${selectedCollege.hasPlacementCell ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-400 border'}`}>
                            {selectedCollege.hasPlacementCell ? 'Active Placement Cell' : 'No Direct Placement Cell'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border shadow-sm">
                        <h4 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-wider text-center">Top Hiring Firms</h4>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                          {selectedCollege.topRecruiters.map((r, i) => (
                            <span key={i} className="text-sm font-black text-slate-400">{r}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'fees' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-3xl border shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5"><DollarSign className="w-24 h-24" /></div>
                          <h4 className="text-sm font-black text-slate-900 mb-6">Estimated Annual Fees</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="text-xs font-bold text-slate-500">Tuition Fees</span>
                              <span className="text-base font-black text-slate-900">{selectedCollege.tuitionFees}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="text-xs font-bold text-slate-500">Hostel & Living</span>
                              <span className="text-base font-black text-slate-900">{selectedCollege.hostelFees}</span>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
                              <Sparkles className="w-5 h-5 text-emerald-600" />
                              <p className="text-[11px] font-bold text-emerald-800 leading-tight">Scholarships: {selectedCollege.scholarships}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-slate-900 text-white p-8 rounded-3xl border shadow-sm flex flex-col justify-center">
                          <h4 className="text-sm font-black mb-4">Financial Assistance</h4>
                          <p className="text-xs font-medium text-slate-400 leading-relaxed mb-6">
                            Most Architecture schools provide support for Minority and Merit-based scholarships. Educational loans are available from major nationalized banks for professional courses.
                          </p>
                          <button className="w-full bg-[#FFD54A] text-slate-900 py-3 rounded-xl font-black text-xs uppercase cursor-pointer hover:bg-white transition">Get Loan Assistance Info</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'contact' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600"><Phone className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Official Number</p>
                              <p className="text-sm font-bold text-slate-900">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600"><Mail className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Official Email</p>
                              <p className="text-sm font-bold text-slate-900">{selectedCollege.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600"><User className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Dean / Principal</p>
                              <p className="text-sm font-bold text-slate-900">{selectedCollege.deanPrincipal}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border shadow-sm flex flex-col items-center justify-center text-center">
                          <MapPin className="w-8 h-8 text-slate-400 mb-3" />
                          <p className="text-xs font-bold text-slate-700 leading-relaxed mb-4">{selectedCollege.address}</p>
                          <a href={selectedCollege.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded-xl text-xs font-black border border-slate-200 hover:bg-slate-200 transition flex items-center gap-2">
                            <Map className="w-4 h-4" /> Open in Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="shrink-0 bg-white border-t p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] font-black text-slate-600 uppercase">CoA Source Verified</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Last Modified: {selectedCollege.lastVerifiedDate}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedCollege(null)} className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-200 transition cursor-pointer">Close</button>
                  <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-black transition cursor-pointer flex items-center gap-2 shadow-lg">
                    Official Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER ADVISORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0 border-2 border-slate-100 border-dashed">
            <AlertCircle className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">Student Admission Advisory</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
              All students seeking admission to First Year of 5-year B.Arch. Degree Course must appear for National Aptitude Test in Architecture (NATA) conducted by CoA or JEE Main Paper 2. Direct admission or admission without qualifying these tests is strictly prohibited as per CoA regulations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.nata.in/" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-bold text-xs flex items-center gap-1.5 hover:text-slate-600 underline underline-offset-4 decoration-2 decoration-slate-200">
                Official NATA Website <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://jeemain.nta.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-bold text-xs flex items-center gap-1.5 hover:text-slate-600 underline underline-offset-4 decoration-2 decoration-slate-200">
                Official JEE Main <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
