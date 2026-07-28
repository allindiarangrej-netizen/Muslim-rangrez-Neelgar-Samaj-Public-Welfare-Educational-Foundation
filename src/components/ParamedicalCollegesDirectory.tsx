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
  Stethoscope,
  Microscope,
  Zap,
  Eye,
  Wind,
  Truck,
  Ear,
  Brain,
  Droplet,
  Syringe,
  Thermometer,
  Activity as Pulse
} from 'lucide-react';
import { PARAMEDICAL_COLLEGES, ParamedicalCollegeProfile } from '../data/paramedicalCollegesData';

interface ParamedicalCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'ncahp',
    name: 'NCAHP',
    fullName: 'National Commission for Allied and Healthcare Professions',
    website: 'https://ncahp.gov.in/',
    description: {
      en: 'The statutory body that regulates and maintains standards for allied and healthcare professions in India. It ensures quality education and professional conduct.',
      ur: 'ہندوستان میں متعلقہ اور صحت کی دیکھ بھال کے پیشوں کے معیار کو ریگولیٹ کرنے اور اسے برقرار رکھنے والا قانونی ادارہ۔ یہ معیاری تعلیم اور پیشہ ورانہ طرز عمل کو یقینی بناتا ہے۔',
      hi: 'भारत में संबद्ध और स्वास्थ्य देखभाल व्यवसायों के मानकों को विनियमित और बनाए रखने वाला वैधानिक निकाय। यह गुणवत्तापूर्ण शिक्षा और व्यावसायिक आचरण सुनिश्चित करता है।'
    },
    roles: [
      'Standardization of Curricula',
      'Maintaining Central Register of Professionals',
      'Accreditation of Paramedical Institutions',
      'Monitoring Professional Ethics'
    ]
  },
  {
    id: 'state-councils',
    name: 'State Councils',
    fullName: 'State Paramedical & Medical Faculty Councils',
    website: '#',
    description: {
      en: 'State-level bodies that manage registrations and conduct exams for diploma and certificate paramedical courses in their respective states.',
      ur: 'ریاستی سطح کے ادارے جو اپنے متعلقہ ریاستوں میں ڈپلومہ اور سرٹیفکیٹ پیرامیڈیکل کورسز کے رجسٹریشن اور امتحانات کا انتظام کرتے ہیں۔',
      hi: 'राज्य-स्तरीय निकाय जो अपने-अपने राज्यों में डिप्लोमा और सर्टिफिकेट पैरामेडिकल पाठ्यक्रमों के लिए पंजीकरण और परीक्षा आयोजित करते हैं।'
    },
    roles: [
      'Diploma Course Examination',
      'Registration of Technicians',
      'Issuing License to Practice',
      'State-level Regulatory Oversight'
    ]
  }
];

export default function ParamedicalCollegesDirectory({ currentLanguage = 'en' }: ParamedicalCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'degree' | 'diploma' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [placementOnly, setPlacementOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'nirf-asc' | 'naac' | 'established-asc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<ParamedicalCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'clinical' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(PARAMEDICAL_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = PARAMEDICAL_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const universitiesList = useMemo(() => {
    const univs = new Set(PARAMEDICAL_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const coursesList = [
    'All', 
    'B.Sc Medical Laboratory Technology (MLT)', 
    'B.Sc Radiology & Imaging Technology', 
    'B.Sc Operation Theatre Technology (OTT)',
    'B.Sc Optometry',
    'BPT (Bachelor of Physiotherapy)',
    'DMLT'
  ];
  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed University', 'Minority Institution'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...PARAMEDICAL_COLLEGES];

    // Tab filtering
    if (activeTab === 'degree') {
      result = result.filter(c => c.programmes.some(p => p.startsWith('B.Sc') || p.startsWith('BPT') || p.startsWith('BOT')));
    } else if (activeTab === 'diploma') {
      result = result.filter(c => c.programmes.some(p => p.startsWith('DMLT') || p.includes('Diploma') || p.includes('Technician')));
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.affiliatedUniversity.toLowerCase().includes(q) ||
        c.programmes.some(p => p.toLowerCase().includes(q)) ||
        c.principal.toLowerCase().includes(q)
      );
    }

    if (selectedState !== 'All') result = result.filter(c => c.state === selectedState);
    if (selectedDistrict !== 'All') result = result.filter(c => c.district === selectedDistrict);
    if (selectedUniversity !== 'All') result = result.filter(c => c.affiliatedUniversity === selectedUniversity);
    if (selectedCourse !== 'All') result = result.filter(c => c.programmes.includes(selectedCourse));
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
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedUniversity, selectedCourse, selectedOwnership, selectedNaacGrade, placementOnly, hostelOnly, sortBy]);

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
    setSelectedCourse('All');
    setSelectedOwnership('All');
    setSelectedNaacGrade('All');
    setPlacementOnly(false);
    setHostelOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  const seoDetails = useMemo(() => {
    const baseTitle = "National Paramedical & Allied Health Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Comprehensive verified directory of 50+ Paramedical Colleges in India. Explore B.Sc MLT, Radiology, OTT, Optometry, and BPT institutes with clinical hospitals, fees, and admission details.";
    const slug = "paramedical-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Paramedical Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": { "@type": "Organization", "name": "Rangrez Community Bharat Portal" },
        "numberOfItems": PARAMEDICAL_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#fdfdfc] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#0077B6] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#FFD54A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Microscope className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Allied Health Sciences • NCAHP Standards'
                  : currentLanguage === 'ur'
                  ? 'الائیڈ ہیلتھ سائنسز ڈائریکٹری'
                  : 'एलाइड हेल्थ साइंसेज • NCAHP मानक'}
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
                    ? '50+ Verified Paramedical Colleges'
                    : currentLanguage === 'ur'
                    ? 'تصدیق شدہ پیرامیڈیکل کالجز'
                    : '50+ सत्यापित पैरामेडिकल कॉलेज'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Paramedical Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی پیرامیڈیکل کالجز ڈائریکٹری'
              : 'राष्ट्रीय पैरामेडिकल कॉलेज निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Find verified institutions for Allied Health & Medical Technology in India. Explore B.Sc MLT, OT Technology, Radiology, Dialysis, Optometry, and Physiotherapy programs with real clinical hospital attachments and placement data.'
              : currentLanguage === 'ur'
              ? 'ہندوستان میں الائیڈ ہیلتھ اور میڈیکل ٹیکنالوجی کے لیے تصدیق شدہ اداروں کو تلاش کریں۔'
              : 'भारत में एलाइड हेल्थ और मेडिकल टेक्नोलॉजी के लिए सत्यापित संस्थानों को खोजें।'}
          </p>

          {/* TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => { setActiveTab('directory'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory' ? 'bg-[#FFD54A] text-[#03045E] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'All Institutes' : 'تمام ادارے'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('degree'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'degree' ? 'bg-[#FFD54A] text-[#03045E] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Degree Programs' : 'ڈگری پروگرامز'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('diploma'); setCurrentPage(1); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'diploma' ? 'bg-[#FFD54A] text-[#03045E] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Diploma Courses' : 'ڈپلومہ کورسز'}</span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory' ? 'bg-[#FFD54A] text-[#03045E] scale-105 border-2 border-white' : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Regulatory Guide' : 'ریگولیٹری گائیڈ'}</span>
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
                  <h3 className="text-xs font-black text-sky-900 uppercase">Paramedical SEO Specifications</h3>
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
        {(activeTab === 'directory' || activeTab === 'degree' || activeTab === 'diploma') && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name, course (MLT, OT, Radiology), city, state..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }}
                    className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-[#03045E] cursor-pointer"
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
                <select value={selectedCourse} onChange={(e) => { setSelectedCourse(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {coursesList.map(cs => <option key={cs} value={cs}>{cs === 'All' ? 'Select Course' : cs}</option>)}
                </select>
                <select value={selectedOwnership} onChange={(e) => { setSelectedOwnership(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {ownershipTypes.map(ow => <option key={ow} value={ow}>{ow === 'All' ? 'Select Ownership' : ow}</option>)}
                </select>
                <select value={selectedNaacGrade} onChange={(e) => { setSelectedNaacGrade(e.target.value); setCurrentPage(1); }} className="bg-slate-50 border border-slate-300 rounded-xl px-2 py-2 text-xs font-bold text-slate-700">
                  {naacGradesList.map(ng => <option key={ng} value={ng}>{ng === 'All' ? 'Select NAAC' : ng}</option>)}
                </select>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-slate-700 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer bg-blue-50/50 border rounded-lg px-3 py-1.5">
                  <input type="checkbox" checked={placementOnly} onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-blue-600" />
                  <span>With Placement Cell</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-blue-50/50 border rounded-lg px-3 py-1.5">
                  <input type="checkbox" checked={hostelOnly} onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-blue-600" />
                  <span>Hostel Facilities</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNTER */}
            <div className="text-sm font-black text-slate-800">
              Showing <span className="text-blue-700 border-b-2 border-blue-600">{filteredColleges.length}</span> Verified Paramedical Institutions
            </div>

            {/* GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No matching paramedical colleges found</h3>
                <button onClick={resetFilters} className="px-6 py-2.5 bg-blue-700 text-white rounded-xl font-bold text-sm cursor-pointer transition">Reset Filters</button>
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
                      className="bg-white rounded-[2rem] p-6 border border-slate-200 hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border ${
                            college.ownership === 'Government' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}>
                            {college.ownership}
                          </span>
                          <span className="bg-slate-900 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-slate-700">
                            Estd {college.yearEstablished}
                          </span>
                        </div>

                        <h3 className="text-base font-black text-slate-900 group-hover:text-blue-700 transition leading-tight mb-2">
                          {college.name}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-4">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{college.city}, {college.state}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-slate-400 uppercase font-black leading-none mb-1">Avg Package</span>
                            <span className="text-xs font-black text-slate-900">{college.averagePackage}</span>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-slate-400 uppercase font-black leading-none mb-1">NIRF Rank</span>
                            <span className="text-xs font-black text-slate-900">#{college.nirfRanking || 'N/A'}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="text-[9px] uppercase font-black text-slate-400 block mb-1.5">Top Programs</span>
                          <div className="flex flex-wrap gap-1">
                            {college.programmes.slice(0, 3).map((prog, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-blue-100">
                                {prog.split(' (')[0].replace('B.Sc ', '')}
                              </span>
                            ))}
                            {college.programmes.length > 3 && (
                              <span className="text-[9px] text-slate-400 font-black">+{college.programmes.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => { setSelectedCollege(college); setModalTab('academics'); }}
                        className="w-full bg-slate-900 text-white text-xs font-black py-3 rounded-xl hover:bg-blue-900 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
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
                    <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 disabled:opacity-40"><ChevronRight className="w-5 h-5 rotate-180" /></button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <button key={num} onClick={() => setCurrentPage(num)} className={`w-10 h-10 rounded-xl text-xs font-black transition ${currentPage === num ? 'bg-blue-700 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{num}</button>
                    ))}
                    <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 disabled:opacity-40"><ChevronRight className="w-5 h-5" /></button>
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
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    {body.website !== '#' && (
                      <a href={body.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold text-xs flex items-center gap-1 hover:underline">
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
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 p-10 opacity-10"><Info className="w-32 h-32" /></div>
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl font-black mb-4 italic">Important Advisory</h3>
                <p className="text-sm font-medium text-blue-100 leading-relaxed mb-6">
                  Paramedical education in India is transitioning into a unified regulatory framework under the National Commission for Allied and Healthcare Professions Act, 2021. Students are advised to verify that their chosen institution is affiliated with a recognized Medical University or the State Paramedical Board.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#FFD54A]" />
                    Check University Affiliation
                  </span>
                  <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#FFD54A]" />
                    Verify Hospital Attachment
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
                        <span className="bg-[#FFD54A] text-[#03045E] text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/50">{selectedCollege.ownership}</span>
                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">Verified Institution</span>
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
                    { id: 'clinical', label: 'Clinical', icon: Stethoscope },
                    { id: 'placements', label: 'Placements', icon: Briefcase },
                    { id: 'fees', label: 'Fees', icon: DollarSign },
                    { id: 'contact', label: 'Contact', icon: Mail }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setModalTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-4 text-xs font-black transition-all border-b-2 shrink-0 cursor-pointer ${
                        modalTab === tab.id ? 'border-blue-700 text-blue-700' : 'border-transparent text-slate-400 hover:text-slate-600'
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
                            <Layers className="w-4 h-4 text-blue-600" /> Paramedical Degree Programs
                          </h4>
                          <div className="space-y-3">
                            {selectedCollege.programmes.filter(p => p.startsWith('B.')).map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-100 group">
                                <Award className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-bold text-slate-700">{prog}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border shadow-sm">
                          <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                            <FileSpreadsheet className="w-4 h-4 text-blue-600" /> Diploma & Certificate Courses
                          </h4>
                          <div className="space-y-3">
                            {selectedCollege.programmes.filter(p => !p.startsWith('B.')).map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <FileText className="w-4 h-4 text-slate-400" />
                                <span className="text-xs font-bold text-slate-700">{prog}</span>
                              </div>
                            ))}
                            {selectedCollege.programmes.filter(p => !p.startsWith('B.')).length === 0 && (
                              <p className="text-xs text-slate-400 italic font-medium">No specialized diploma courses listed.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'admissions' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm col-span-2">
                          <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Eligibility & Process</h4>
                          <p className="text-xs font-medium text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border italic">{selectedCollege.eligibility}</p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700"><Check className="w-4 h-4" /></div>
                              <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Entrance Exams</p>
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
                          <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-700 text-white p-4 rounded-2xl text-center font-black text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-200">Official Admission Portal</a>
                          <a href={selectedCollege.counsellingPortalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-blue-700 border-2 border-blue-700 p-4 rounded-2xl text-center font-black text-sm hover:bg-blue-50 transition">State Counselling Portal</a>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedCollege.infrastructure.map((item, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-2xl border text-center group hover:border-blue-500 transition shadow-sm">
                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-slate-400 group-hover:text-blue-600 transition">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 block leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {modalTab === 'clinical' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="bg-emerald-950 text-white rounded-[2rem] p-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-12 opacity-10"><Pulse className="w-32 h-32" /></div>
                        <h4 className="text-xl font-serif font-black mb-4 italic text-[#FFD54A]">Live Clinical Attachments</h4>
                        <p className="text-sm font-medium text-emerald-100 leading-relaxed mb-6 max-w-2xl">
                          Professional competency in allied health is built through hands-on practice. This institution provides rotation-based clinical training at:
                        </p>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 inline-block">
                          <div className="flex items-center gap-4">
                            <Building className="w-10 h-10 text-[#FFD54A]" />
                            <div>
                              <p className="text-[10px] uppercase font-black text-emerald-400 leading-none mb-1">Affiliated Hospital</p>
                              <p className="text-lg font-black">{selectedCollege.hospitalAttachments}</p>
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
                          <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-3" />
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
                        <h4 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-wider text-center">Key Healthcare Partners</h4>
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
                          <h4 className="text-sm font-black text-slate-900 mb-6">Fee Structure (Annual)</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="text-xs font-bold text-slate-500">Tuition Fees</span>
                              <span className="text-base font-black text-slate-900">{selectedCollege.tuitionFees}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="text-xs font-bold text-slate-500">Hostel Fees</span>
                              <span className="text-base font-black text-slate-900">{selectedCollege.hostelFees}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                          <h4 className="text-sm font-black text-blue-900 mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Available Scholarships</h4>
                          <p className="text-xs font-bold text-blue-700 leading-relaxed italic bg-white p-4 rounded-2xl border border-blue-200">{selectedCollege.scholarships}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'contact' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="bg-white p-6 rounded-3xl border shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400"><MapPin className="w-6 h-6" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 mb-0.5">Campus Address</p>
                              <p className="text-xs font-bold text-slate-700">{selectedCollege.address}</p>
                            </div>
                          </div>
                          <div className="bg-white p-6 rounded-3xl border shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400"><Phone className="w-6 h-6" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 mb-0.5">General Inquiry</p>
                              <p className="text-xs font-bold text-slate-700">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="bg-white p-6 rounded-3xl border shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400"><Mail className="w-6 h-6" /></div>
                            <div>
                              <p className="text-[10px] uppercase font-black text-slate-400 mb-0.5">Official Email</p>
                              <p className="text-xs font-bold text-slate-700">{selectedCollege.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-3xl border shadow-sm overflow-hidden h-full min-h-[300px]">
                           <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(selectedCollege.address)}`}
                            className="w-full h-full border-none grayscale opacity-80"
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER ACTION */}
              <div className="p-6 bg-white border-t flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Verified: {selectedCollege.lastVerifiedDate}</p>
                </div>
                <div className="flex gap-3">
                   <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-blue-900 transition flex items-center gap-2">Visit Official Website <Globe className="w-4 h-4" /></a>
                   <button className="px-6 py-3 bg-[#FFD54A] text-[#03045E] rounded-xl text-xs font-black hover:scale-105 transition flex items-center gap-2">Download Prospectus <Download className="w-4 h-4" /></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
