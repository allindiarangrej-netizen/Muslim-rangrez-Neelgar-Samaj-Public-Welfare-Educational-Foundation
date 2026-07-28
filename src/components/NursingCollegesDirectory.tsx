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
  Heart,
  PlusCircle,
  Thermometer,
  Syringe,
  Baby
} from 'lucide-react';
import { NURSING_COLLEGES, NursingCollegeProfile } from '../data/nursingCollegesData';

interface NursingCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'inc',
    name: 'INC',
    fullName: 'Indian Nursing Council',
    website: 'https://www.indiannursingcouncil.org/',
    description: {
      en: 'The national regulatory body for nurses and nurse education in India. It sets uniform standards of training for nurses, midwives and health visitors.',
      ur: 'ہندوستان میں نرسوں اور نرسوں کی تعلیم کے لیے قومی ریگولیٹری ادارہ۔ یہ نرسوں، دائیوں اور ہیلتھ وزیٹرز کے لیے تربیت کے یکساں معیارات مرتب کرتا ہے۔',
      hi: 'भारत में नर्सों और नर्स शिक्षा के लिए राष्ट्रीय नियामक निकाय। यह नर्सों, दाइयों और स्वास्थ्य आगंतुकों के लिए प्रशिक्षण के समान मानक निर्धारित करता है।'
    },
    roles: [
      'Prescribing syllabi and curriculum for nursing courses',
      'Recognition and inspection of nursing institutions',
      'Maintenance of Indian Nurses Register'
    ]
  },
  {
    id: 'snrc',
    name: 'SNRC',
    fullName: 'State Nursing Registration Councils',
    website: 'https://www.indiannursingcouncil.org/state-councils',
    description: {
      en: 'State-level bodies responsible for registering nursing professionals and ensuring adherence to clinical standards within the specific state.',
      ur: 'ریاستی سطح کے ادارے جو نرسنگ پروفیشنلز کو رجسٹر کرنے اور مخصوص ریاست کے اندر طبی معیارات پر عمل درآمد کو یقینی بنانے کے لیے ذمہ دار ہیں۔',
      hi: 'राज्य स्तर के निकाय जो नर्सिंग पेशेवरों को पंजीकृत करने और विशिष्ट राज्य के भीतर नैदानिक ​​मानकों का पालन सुनिश्चित करने के लिए जिम्मेदार हैं।'
    },
    roles: [
      'Registration of qualified nurses at state level',
      'Conducting examinations for GNM/ANM courses',
      'Issuing License to Practice (RN/RM)'
    ]
  }
];

const COUNSELLING_BOARDS = [
  { name: 'Directorate General of Health Services (DGHS)', url: 'https://mcc.nic.in/', desc: 'Handles All India Quota (AIQ) counselling for B.Sc Nursing in Central Institutes.' },
  { name: 'AIIMS Nursing Exams', url: 'https://aiimsexams.ac.in/', desc: 'Official portal for B.Sc (Hons), Post Basic and M.Sc Nursing admissions in AIIMS.' },
  { name: 'DMER (Various States)', url: 'https://dmer.org/', desc: 'State-level Directorate of Medical Education and Research for nursing seat allotment.' },
  { name: 'KNRUHS (Telangana)', url: 'https://knruhs.telangana.gov.in/', desc: 'Kaloji Narayana Rao University of Health Sciences - Admission portal.' },
  { name: 'RUHS (Rajasthan)', url: 'https://ruhsraj.org/', desc: 'Rajasthan University of Health Sciences - Nursing admissions node.' }
];

export default function NursingCollegesDirectory({ currentLanguage = 'en' }: NursingCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'inc' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [incOnly, setIncOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [placementOnly, setPlacementOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'nirf-asc' | 'naac' | 'established-asc' | 'established-desc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<NursingCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'clinical' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(NURSING_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = NURSING_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const universitiesList = useMemo(() => {
    const univs = new Set(NURSING_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const coursesList = ['All', 'B.Sc Nursing', 'B.Sc (Hons.) Nursing', 'M.Sc Nursing', 'Ph.D Nursing', 'GNM', 'ANM', 'Post Basic B.Sc Nursing'];
  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed', 'Minority'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+', 'B'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...NURSING_COLLEGES];

    // Segment Tab filter
    if (activeTab === 'inc') {
      result = result.filter(c => c.incApproved);
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
        c.deanPrincipal.toLowerCase().includes(q) ||
        c.teachingHospital.toLowerCase().includes(q)
      );
    }

    if (selectedState !== 'All') result = result.filter(c => c.state === selectedState);
    if (selectedDistrict !== 'All') result = result.filter(c => c.district === selectedDistrict);
    if (selectedUniversity !== 'All') result = result.filter(c => c.affiliatedUniversity === selectedUniversity);
    if (selectedCourse !== 'All') result = result.filter(c => c.programmes.includes(selectedCourse));
    if (selectedOwnership !== 'All') result = result.filter(c => c.ownership === selectedOwnership);
    if (selectedNaacGrade !== 'All') result = result.filter(c => c.naacGrade && c.naacGrade.includes(selectedNaacGrade));
    if (incOnly) result = result.filter(c => c.incApproved);
    if (hostelOnly) result = result.filter(c => c.infrastructure.some(i => i.toLowerCase().includes('hostel')));
    if (placementOnly) result = result.filter(c => c.hasPlacementCell);

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
        case 'established-desc': return b.yearEstablished - a.yearEstablished;
        default: return 0;
      }
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedUniversity, selectedCourse, selectedOwnership, selectedNaacGrade, incOnly, hostelOnly, placementOnly, sortBy]);

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
    setIncOnly(false);
    setHostelOnly(false);
    setPlacementOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  const seoDetails = useMemo(() => {
    const baseTitle = "National Nursing Colleges Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Comprehensive verified directory of 50+ Nursing Colleges in India. Explore INC approved B.Sc, GNM, and M.Sc Nursing institutes with clinical tie-ups, fees, and admission details.";
    const slug = "nursing-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Nursing Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": { "@type": "Organization", "name": "Rangrez Community Bharat Portal" },
        "numberOfItems": NURSING_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#03071E] via-[#0D1B2A] to-[#14213D] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#FFD54A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Stethoscope className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Nursing Education Directory • INC Standards'
                  : currentLanguage === 'ur'
                  ? 'نرسنگ ایجوکیشن ڈائریکٹری • آئی این سی'
                  : 'नर्सिंग शिक्षा निर्देशिका • INC मानक पोर्टल'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowSeoInspector(!showSeoInspector)}
                className="flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-950/80 border border-sky-500/40 px-3 py-1.5 rounded-xl hover:bg-sky-900/60 transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>SEO & Metadata Inspector</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 bg-blue-950/80 border border-blue-500/40 px-3 py-1.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  {currentLanguage === 'en'
                    ? '50+ Verified Nursing Institutes'
                    : currentLanguage === 'ur'
                    ? 'تصدیق شدہ نرسنگ ادارے'
                    : '50+ सत्यापित नर्सिंग संस्थान'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Nursing Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی نرسنگ کالجز ڈائریکٹری'
              : 'राष्ट्रीय नर्सिंग कॉलेज निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Your comprehensive verified portal for Nursing Education in India. Explore INC approved B.Sc, GNM, and Post Basic courses with detailed information on clinical training hospitals, eligibility, and official admission nodes.'
              : currentLanguage === 'ur'
              ? 'ہندوستان میں نرسنگ کی تعلیم کے لیے آپ کا جامع تصدیق شدہ پورٹل۔ کلینیکل ٹریننگ ہسپتالوں، اہلیت اور داخلے کی معلومات کے ساتھ آئی این سی سے منظور شدہ کورسز تلاش کریں۔'
              : 'भारत में नर्सिंग शिक्षा के लिए आपका व्यापक सत्यापित पोर्टल। नैदानिक ​​​​प्रशिक्षण अस्पतालों, पात्रता और आधिकारिक प्रवेश विवरण के साथ INC अनुमोदित B.Sc, GNM और पोस्ट बेसिक पाठ्यक्रमों की खोज करें।'}
          </p>

          {/* MAIN NAVIGATION TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setActiveTab('directory');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory'
                  ? 'bg-[#FFD54A] text-[#03071E] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>
                {currentLanguage === 'en' ? 'All Institutions' : currentLanguage === 'ur' ? 'تمام ادارے' : 'सभी संस्थान'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('inc');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'inc'
                  ? 'bg-sky-600 text-white scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en' ? 'INC Approved' : currentLanguage === 'ur' ? 'منظور شدہ آئی این سی' : 'INC स्वीकृत'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory'
                  ? 'bg-[#FFD54A] text-[#03071E] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>
                {currentLanguage === 'en' ? 'Regulatory Bodies' : currentLanguage === 'ur' ? 'ریگولیٹری باڈیز' : 'नियामक संस्थाएं'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('counselling')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'counselling'
                  ? 'bg-[#FFD54A] text-[#03071E] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>
                {currentLanguage === 'en' ? 'Admissions & Counselling' : currentLanguage === 'ur' ? 'کونسلنگ اور داخلے' : 'प्रवेश एवं काउंसलिंग'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. REGULATORY GUARANTEE BANNER */}
      <div className="bg-sky-50 border-b border-sky-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-sky-900 font-medium">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              <strong>Statutory Requirement:</strong> Nursing institutes must be recognized by both the Indian Nursing Council (INC) and their respective State Nursing Registration Council (SNRC). Candidates are advised to check the live status of the college's INC suitability on the official INC website before taking admission.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-sky-700 hover:bg-sky-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Regulatory Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. SEO METADATA INSPECTOR */}
      <AnimatePresence>
        {showSeoInspector && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-sky-50 border-b border-sky-200 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
              <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-inner space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-sky-700" />
                    <h3 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active Nursing SEO JSON-LD Specifications</h3>
                  </div>
                  <button onClick={() => setShowSeoInspector(false)} className="text-stone-400 hover:text-stone-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                  <div className="space-y-2.5">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Title Tag</span>
                      <p className="text-slate-800 font-bold p-2 bg-slate-50 border rounded-lg mt-1">{seoDetails.title}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Description</span>
                      <p className="text-slate-700 p-2 bg-slate-50 border rounded-lg mt-1 leading-relaxed">{seoDetails.description}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-black">JSON-LD Nursing Schema</span>
                    <pre className="block p-3 bg-stone-900 text-amber-400 rounded-xl mt-1 overflow-x-auto text-[10px] font-mono leading-tight max-h-44">
                      {JSON.stringify(seoDetails.structuredData, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN CONTENT INTERFACES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {(activeTab === 'directory' || activeTab === 'inc') && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search 50+ nursing colleges by name, hospital, city, course, INC status..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-600 text-sm font-medium transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }}
                    className="bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-[#03071E] focus:outline-none cursor-pointer"
                  >
                    <option value="alphabetical">Sort: Alphabetical</option>
                    <option value="state">Sort: State</option>
                    <option value="fee-asc">Sort: Fee (Low to High)</option>
                    <option value="fee-desc">Sort: Fee (High to Low)</option>
                    <option value="placement-desc">Sort: Placement Pkg</option>
                    <option value="nirf-asc">Sort: NIRF Ranking</option>
                    <option value="naac">Sort: NAAC Grade</option>
                    <option value="established-asc">Sort: Estd (Oldest)</option>
                    <option value="established-desc">Sort: Estd (Newest)</option>
                  </select>

                  <button onClick={resetFilters} className="bg-stone-100 hover:bg-stone-200 text-stone-600 px-4 py-3 rounded-xl text-xs font-bold border border-stone-200 cursor-pointer transition">
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Filter Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-4 border-t border-stone-100">
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">State</label>
                  <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict('All'); setCurrentPage(1); }} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 cursor-pointer">
                    {statesList.map(st => <option key={st} value={st}>{st === 'All' ? 'All States' : st}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">District</label>
                  <select value={selectedDistrict} onChange={(e) => { setSelectedDistrict(e.target.value); setCurrentPage(1); }} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 cursor-pointer" disabled={selectedState === 'All'}>
                    {districtsList.map(dt => <option key={dt} value={dt}>{dt === 'All' ? 'All Districts' : dt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Programme</label>
                  <select value={selectedCourse} onChange={(e) => { setSelectedCourse(e.target.value); setCurrentPage(1); }} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 cursor-pointer">
                    {coursesList.map(cs => <option key={cs} value={cs}>{cs === 'All' ? 'All Programs' : cs}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Ownership</label>
                  <select value={selectedOwnership} onChange={(e) => { setSelectedOwnership(e.target.value); setCurrentPage(1); }} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 cursor-pointer">
                    {ownershipTypes.map(ow => <option key={ow} value={ow}>{ow === 'All' ? 'All Ownerships' : ow}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">NAAC Grade</label>
                  <select value={selectedNaacGrade} onChange={(e) => { setSelectedNaacGrade(e.target.value); setCurrentPage(1); }} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 cursor-pointer">
                    {naacGradesList.map(ng => <option key={ng} value={ng}>{ng === 'All' ? 'All Grades' : ng}</option>)}
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-stone-700 items-center justify-start border-t border-stone-100">
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={incOnly} onChange={(e) => { setIncOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500" />
                  <span className="text-[11px]">INC Recognized Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={hostelOnly} onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500" />
                  <span className="text-[11px]">Hostel Facilities</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={placementOnly} onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500" />
                  <span className="text-[11px]">Active Placement Cell</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNTER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="text-sm font-black text-stone-800">
                Showing <span className="text-stone-900 border-b-2 border-sky-500 pb-0.5">{filteredColleges.length}</span> Verified Nursing Institutions
              </div>
            </div>

            {/* COLLEGES GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <Filter className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-2">No matching nursing colleges found</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">Try adjusting your filters or search terms.</p>
                <button onClick={resetFilters} className="px-6 py-2.5 bg-sky-700 text-white rounded-xl font-bold text-sm hover:bg-sky-800 cursor-pointer transition">Reset All Filters</button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                  <AnimatePresence>
                    {paginatedColleges.map((college) => (
                      <motion.div
                        key={college.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-sky-600/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                      >
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${college.incApproved ? 'bg-sky-600' : 'bg-amber-500'}`} />
                        
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                            {college.incApproved ? (
                              <span className="inline-flex items-center gap-1 bg-sky-950 text-sky-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-sky-500/30">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>INC Recognized</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-amber-300">
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>SNRC Only</span>
                              </span>
                            )}
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border ${
                              college.ownership === 'Government' ? 'bg-blue-50 text-blue-700 border-blue-300' : 'bg-purple-50 text-purple-700 border-purple-300'
                            }`}>
                              {college.ownership}
                            </span>
                          </div>

                          <h3 className="text-base font-black text-stone-900 group-hover:text-sky-700 transition line-clamp-2 mb-1">
                            {college.name}
                          </h3>
                          <p className="text-[11px] text-stone-500 font-medium line-clamp-1 mb-3 italic">
                            🏥 {college.teachingHospital}
                          </p>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                            <span className="truncate">{college.district}, {college.state}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-4 text-[11px] font-bold">
                            <div className="bg-sky-50/50 p-2 rounded-xl border border-sky-100 flex items-center gap-2">
                              <PlusCircle className="w-3.5 h-3.5 text-sky-600" />
                              <div className="flex flex-col">
                                <span className="text-[9px] text-sky-700/60 leading-none">Established</span>
                                <span className="text-sky-950 leading-tight">{college.yearEstablished}</span>
                              </div>
                            </div>
                            <div className="bg-rose-50/50 p-2 rounded-xl border border-rose-100 flex items-center gap-2">
                              <Activity className="w-3.5 h-3.5 text-rose-600" />
                              <div className="flex flex-col">
                                <span className="text-[9px] text-rose-700/60 leading-none">NAAC</span>
                                <span className="text-rose-950 leading-tight">{college.naacGrade || 'N/A'}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-[10px] uppercase font-black text-stone-400 block mb-1.5">Specialized Care Wings</span>
                            <div className="flex flex-wrap gap-1">
                              {college.specializations.slice(0, 3).map((spec, idx) => (
                                <span key={idx} className="bg-stone-100 text-stone-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-stone-200 flex items-center gap-1">
                                  <Heart className="w-2.5 h-2.5 text-rose-500" />
                                  {spec}
                                </span>
                              ))}
                              {college.specializations.length > 3 && (
                                <span className="text-[9px] text-stone-400 font-black pl-1">+{college.specializations.length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4 border-t border-stone-100 mt-auto">
                          <button
                            onClick={() => { setSelectedCollege(college); setModalTab('academics'); }}
                            className="flex-1 bg-stone-900 text-white text-xs font-black py-2.5 rounded-xl hover:bg-sky-900 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                          >
                            <span>View Full Profile</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                          <a
                            href={college.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-stone-100 text-stone-600 rounded-xl hover:bg-stone-200 border border-stone-200 transition"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-6">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 disabled:opacity-40 cursor-pointer"
                    >
                      <X className="w-4 h-4 rotate-180" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-10 h-10 rounded-xl text-xs font-black transition ${
                          currentPage === num ? 'bg-sky-700 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
                        } cursor-pointer`}
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* REGULATORY INFO TAB */}
        {activeTab === 'regulatory' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGULATORY_BODIES.map((body) => (
                <div key={body.id} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <a href={body.website} target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold text-xs flex items-center gap-1 hover:underline">
                      Official Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-xl font-black text-stone-900 mb-1">{body.fullName} ({body.name})</h3>
                  <p className="text-xs font-medium text-stone-500 mb-6 leading-relaxed">
                    {body.description[currentLanguage] || body.description.en}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Primary Statutory Roles</h4>
                    {body.roles.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs font-bold text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Verification of INC Suitability</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-3xl mb-6 font-medium">
                  The Indian Nursing Council (INC) periodically publishes a list of nursing institutions found suitable under Section 13 and 14 of the INC Act. It is imperative that candidates verify the college name against the latest academic year list (B.Sc, GNM, ANM or M.Sc) available on the official INC downloads section before initiating payment of fees.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.indiannursingcouncil.org/suitable-institutions" target="_blank" rel="noopener noreferrer" className="bg-[#FFD54A] text-[#03071E] px-6 py-3 rounded-xl font-black text-xs hover:scale-105 transition flex items-center gap-2">
                    Verify Suitability List <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COUNSELLING TAB */}
        {activeTab === 'counselling' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="bg-stone-900 text-white p-6">
                <h3 className="text-xl font-black flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#FFD54A]" />
                  Official Nursing Counselling Nodes
                </h3>
                <p className="text-stone-400 text-xs mt-1">Centralized & State-wise portals for seat allotment and verification.</p>
              </div>
              <div className="divide-y divide-stone-100">
                {COUNSELLING_BOARDS.map((board, bIdx) => (
                  <div key={bIdx} className="p-6 hover:bg-stone-50 transition group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="max-w-xl">
                      <h4 className="text-base font-black text-stone-900 group-hover:text-sky-700 transition">{board.name}</h4>
                      <p className="text-xs font-bold text-stone-500 mt-1">{board.desc}</p>
                    </div>
                    <a
                      href={board.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-xs font-black border border-stone-200 hover:bg-sky-700 hover:text-white transition flex items-center gap-2 shrink-0"
                    >
                      Visit Counselling Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-black text-emerald-900 text-sm mb-2">Required Documentation</h4>
                <ul className="text-[11px] font-bold text-emerald-800/80 space-y-1.5 list-disc pl-4">
                  <li>Entrance Exam Admit Card & Rank Card</li>
                  <li>10th & 12th Standard Marks Sheets</li>
                  <li>Character & Transfer Certificates</li>
                  <li>Medical Fitness Certificate</li>
                  <li>Category/Reservation Proofs</li>
                  <li>Recent Passport Sized Photographs</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-black text-purple-900 text-sm mb-2">Selection & Quotas</h4>
                <ul className="text-[11px] font-bold text-purple-800/80 space-y-1.5 list-disc pl-4">
                  <li>Merit-based Selection (Entrance/Marks)</li>
                  <li>State Domicile Reservation</li>
                  <li>Minority Institutional Quota</li>
                  <li>Management Quota (Private Colleges)</li>
                  <li>Institutional Merit Scholarships</li>
                </ul>
              </div>
              <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100">
                <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-black text-sky-900 text-sm mb-2">Academic Calendar</h4>
                <ul className="text-[11px] font-bold text-sky-800/80 space-y-1.5 list-disc pl-4">
                  <li>May-July: Entrance Examinations</li>
                  <li>August: Counselling & Seat Allotment</li>
                  <li>September: Physical Reporting & Verification</li>
                  <li>October: Commencement of Session</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. COLLEGE DETAIL MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCollege(null)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header/Cover */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <img src={selectedCollege.coverImageUrl} className="w-full h-full object-cover" alt="College Cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-6 left-8 right-8 flex items-end gap-6">
                  <div className="hidden sm:block w-24 h-24 rounded-2xl bg-white p-2 shadow-xl border-4 border-white shrink-0 overflow-hidden">
                    <img src={selectedCollege.logoUrl} className="w-full h-full object-contain" alt="Logo" />
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${selectedCollege.incApproved ? 'bg-sky-500 text-white' : 'bg-amber-500 text-white'}`}>
                        {selectedCollege.incApproved ? 'INC Approved' : 'SNRC Recognized'}
                      </span>
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg border border-white/30">
                        {selectedCollege.ownership}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight drop-shadow-lg">{selectedCollege.name}</h2>
                    <div className="flex items-center gap-4 mt-2 text-white/80 text-xs font-bold">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {selectedCollege.city}, {selectedCollege.state}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Estd. {selectedCollege.yearEstablished}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Navigation */}
              <div className="bg-stone-50 border-b border-stone-200 px-8 py-1 overflow-x-auto no-scrollbar shrink-0">
                <div className="flex items-center gap-6 min-w-max">
                  {['academics', 'admissions', 'infrastructure', 'clinical', 'placements', 'fees', 'contact'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setModalTab(tab as any)}
                      className={`py-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                        modalTab === tab ? 'border-sky-600 text-sky-700 scale-105' : 'border-transparent text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <AnimatePresence mode="wait">
                  {modalTab === 'academics' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-sm font-black text-stone-900 flex items-center gap-2 border-b pb-2">
                            <BookOpen className="w-4 h-4 text-sky-600" /> Nursing Programmes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCollege.programmes.map((prog, idx) => (
                              <span key={idx} className="bg-sky-50 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-sky-100">
                                {prog}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                            <span className="text-[10px] font-black text-stone-400 uppercase block mb-1">University Affiliation</span>
                            <p className="text-xs font-black text-stone-800">{selectedCollege.affiliatedUniversity}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-sm font-black text-stone-900 flex items-center gap-2 border-b pb-2">
                            <Star className="w-4 h-4 text-amber-500" /> Specializations
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {selectedCollege.specializations.map((spec, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs font-bold text-stone-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'admissions' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                        <h4 className="text-sm font-black text-amber-900 mb-4 flex items-center gap-2">
                          <Compass className="w-5 h-5" /> Admission Eligibility
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <span className="text-[10px] font-black text-amber-700 uppercase block mb-1">Academic Criteria</span>
                            <p className="text-xs font-bold text-amber-900 leading-relaxed">{selectedCollege.eligibility}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-amber-700 uppercase block mb-1">Required Entrance</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {selectedCollege.entranceExams.map((exam, idx) => (
                                <span key={idx} className="bg-white px-2.5 py-1 rounded-lg border border-amber-300 text-[11px] font-black text-amber-800 shadow-sm">
                                  {exam}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-black text-stone-900 flex items-center gap-2 border-b pb-2">
                          <Award className="w-4 h-4 text-sky-600" /> Selection Process
                        </h4>
                        <p className="text-xs font-bold text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200">
                          {selectedCollege.admissionProcess}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {selectedCollege.infrastructure.map((item, idx) => (
                          <div key={idx} className="p-4 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col items-center text-center gap-2 hover:bg-sky-50 hover:border-sky-200 transition group">
                            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-sky-600 shadow-sm">
                              {item.includes('Lab') ? <Thermometer className="w-5 h-5" /> : 
                               item.includes('Hospital') ? <PlusCircle className="w-5 h-5" /> :
                               item.includes('Hostel') ? <Home className="w-5 h-5" /> :
                               <Building className="w-5 h-5" />}
                            </div>
                            <span className="text-[11px] font-black text-stone-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-black text-stone-900 border-b pb-2">Campus Environment</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedCollege.campusGallery?.map((img, idx) => (
                            <img key={idx} src={img} className="w-full h-32 object-cover rounded-2xl shadow-md border-2 border-white hover:scale-105 transition" alt="Campus" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'clinical' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6">
                      <div className="bg-sky-950 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><Stethoscope className="w-32 h-32" /></div>
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-sky-400">
                          <Activity className="w-6 h-6" /> Clinical Training Exposure
                        </h3>
                        <p className="text-sm font-medium leading-relaxed mb-6 text-stone-300">
                          {selectedCollege.clinicalTraining}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <span className="text-[10px] font-black text-sky-400 uppercase tracking-wider mb-1 block">Primary Teaching Hospital</span>
                            <p className="text-lg font-black">{selectedCollege.teachingHospital}</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <span className="text-[10px] font-black text-sky-400 uppercase tracking-wider mb-1 block">Specialty Wards</span>
                            <p className="text-lg font-black italic">Advanced Nursing Labs Integrated</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'placements' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 text-center">
                          <span className="text-[10px] font-black text-stone-400 uppercase block mb-1">Highest Package</span>
                          <p className="text-2xl font-black text-stone-900">{selectedCollege.highestPackage}</p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 text-center">
                          <span className="text-[10px] font-black text-stone-400 uppercase block mb-1">Average Package</span>
                          <p className="text-2xl font-black text-stone-900">{selectedCollege.averagePackage}</p>
                        </div>
                        <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100 text-center">
                          <span className="text-[10px] font-black text-sky-700 uppercase block mb-1">Placement Cell</span>
                          <p className="text-xl font-black text-sky-900">{selectedCollege.hasPlacementCell ? 'Active' : 'Assistance Provided'}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-black text-stone-900 flex items-center gap-2 border-b pb-2">
                          <Building className="w-4 h-4 text-sky-600" /> Major Recruiters (India & Abroad)
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedCollege.topRecruiters.map((rec, idx) => (
                            <span key={idx} className="px-4 py-2 bg-stone-50 rounded-xl border border-stone-200 text-xs font-black text-stone-700 shadow-sm">
                              {rec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'fees' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5"><DollarSign className="w-20 h-20" /></div>
                          <h4 className="text-sm font-black text-stone-900 mb-4">Fee Structure</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                              <span className="text-xs font-bold text-stone-500">Tuition Fees (Annual)</span>
                              <span className="text-sm font-black text-stone-900">{selectedCollege.tuitionFees}</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                              <span className="text-xs font-bold text-stone-500">Hostel & Fooding</span>
                              <span className="text-sm font-black text-stone-900">{selectedCollege.hostelFees}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100">
                          <h4 className="text-sm font-black text-sky-900 mb-4">Scholarships & Grants</h4>
                          <p className="text-xs font-bold text-sky-800 leading-relaxed italic mb-4">
                            {selectedCollege.scholarships}
                          </p>
                          <div className="flex items-center gap-2 text-xs font-black text-sky-900">
                            <CheckCircle2 className="w-4 h-4 text-sky-600" />
                            <span>Post-Matric Scholarships Assistance</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'contact' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-stone-600" /></div>
                            <div>
                              <h5 className="text-[10px] font-black text-stone-400 uppercase">Campus Address</h5>
                              <p className="text-sm font-bold text-stone-800 mt-1">{selectedCollege.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-stone-600" /></div>
                            <div>
                              <h5 className="text-[10px] font-black text-stone-400 uppercase">Registrar / Admissions</h5>
                              <p className="text-sm font-black text-stone-900 mt-1">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-stone-600" /></div>
                            <div>
                              <h5 className="text-[10px] font-black text-stone-400 uppercase">Official Email</h5>
                              <p className="text-sm font-black text-sky-700 mt-1 underline underline-offset-4">{selectedCollege.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-64 rounded-3xl overflow-hidden shadow-inner border border-stone-200">
                           <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400 flex-col gap-2">
                             <Map className="w-10 h-10 opacity-20" />
                             <span className="text-[10px] font-black uppercase">Interactive Map Module</span>
                             <a href={selectedCollege.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-1.5 bg-white border border-stone-200 rounded-lg text-[10px] font-black text-stone-800 shadow-sm hover:bg-stone-50 transition">Open in Maps</a>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-[10px] font-black text-stone-500 uppercase">Last Verified: {selectedCollege.lastVerifiedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCollege.admissionPortalUrl || selectedCollege.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-sky-700 text-white rounded-xl text-sm font-black shadow-lg hover:bg-sky-800 hover:-translate-y-0.5 transition flex items-center gap-2"
                  >
                    Admission Portal <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
