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
  Dog,
  Cat,
  Bird,
  Snail,
  PawPrint,
  HeartPulse,
  Syringe,
  Microscope,
  Stethoscope,
  Wind
} from 'lucide-react';
import { VETERINARY_COLLEGES, VeterinaryCollegeProfile } from '../data/veterinaryCollegesData';

interface VeterinaryCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'vci',
    name: 'VCI',
    fullName: 'Veterinary Council of India',
    website: 'http://www.vci.dadf.gov.in/',
    description: {
      en: 'The statutory body which regulates veterinary practice and monitors veterinary education in India. It maintains the Indian Veterinary Practitioner Register.',
      ur: 'ہندوستان میں ویٹرنری پریکٹس کو ریگولیٹ کرنے اور ویٹرنری تعلیم کی نگرانی کرنے والا قانونی ادارہ۔ یہ انڈین ویٹرنری پریکٹیشنر رجسٹر کو برقرار رکھتا ہے۔',
      hi: 'भारत में पशु चिकित्सा पद्धति को विनियमित करने और पशु चिकित्सा शिक्षा की निगरानी करने वाला वैधानिक निकाय। यह भारतीय पशु चिकित्सा व्यवसायी रजिस्टर का रखरखाव करता है।'
    },
    roles: [
      'Standardization of Veterinary Education (BVSc & AH)',
      'Registration of Veterinary Practitioners',
      'Advisory role to the Central Government on veterinary issues'
    ]
  },
  {
    id: 'icar',
    name: 'ICAR',
    fullName: 'Indian Council of Agricultural Research',
    website: 'https://icar.org.in/',
    description: {
      en: 'The apex body for coordinating research and education in agriculture and animal sciences. It provides accreditation to veterinary universities and colleges.',
      ur: 'زراعت اور حیوانی علوم میں تحقیق اور تعلیم کو مربوط کرنے والا اعلیٰ ادارہ۔ یہ ویٹرنری یونیورسٹیوں اور کالجوں کو ایکریڈیشن فراہم کرتا ہے۔',
      hi: 'कृषि और पशु विज्ञान में अनुसंधान और शिक्षा के समन्वय के लिए सर्वोच्च निकाय। यह पशु चिकित्सा विश्वविद्यालयों और कॉलेजों को मान्यता प्रदान करता है।'
    },
    roles: [
      'Accreditation of Veterinary Institutions',
      'Conducting AIEEA (PG/PhD) for higher studies',
      'Funding and monitoring Animal Science research'
    ]
  }
];

const COUNSELLING_BOARDS = [
  { name: 'VCI All India Quota Counselling', url: 'https://vci.admissions.nic.in/', desc: 'Centralized counselling for 15% All India Quota seats in BVSc & AH.' },
  { name: 'ICAR AIEEA (PG/PhD) Counselling', url: 'https://icar.org.in/', desc: 'National level admission for Masters and Doctoral programs in Animal Sciences.' },
  { name: 'MAFSU (Maharashtra)', url: 'https://www.mafsu.ac.in/', desc: 'Directorate of Admissions for Veterinary colleges in Maharashtra.' },
  { name: 'TANUVAS Admissions (Tamil Nadu)', url: 'https://adm.tanuvas.ac.in/', desc: 'Single window admission portal for veterinary courses in TN.' },
  { name: 'RAJUVAS (Rajasthan)', url: 'https://rajuvas.org/', desc: 'Rajasthan University of Veterinary and Animal Sciences admission portal.' }
];

export default function VeterinaryCollegesDirectory({ currentLanguage = 'en' }: VeterinaryCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'icar' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [icarOnly, setIcarOnly] = useState(false);
  const [vciOnly, setVciOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [placementOnly, setPlacementOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'nirf-asc' | 'naac' | 'established-asc' | 'established-desc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<VeterinaryCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'clinical' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(VETERINARY_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = VETERINARY_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const universitiesList = useMemo(() => {
    const univs = new Set(VETERINARY_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const coursesList = ['All', 'BVSc & AH', 'MVSc', 'Ph.D', 'Diploma in Veterinary Pharmacy', 'Animal Husbandry Diploma'];
  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed', 'Minority'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+', 'B'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...VETERINARY_COLLEGES];

    // Segment Tab filter
    if (activeTab === 'icar') {
      result = result.filter(c => c.icarAccredited);
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
    if (icarOnly) result = result.filter(c => c.icarAccredited);
    if (vciOnly) result = result.filter(c => c.vciRecognized);
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
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedUniversity, selectedCourse, selectedOwnership, selectedNaacGrade, icarOnly, vciOnly, hostelOnly, placementOnly, sortBy]);

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
    setIcarOnly(false);
    setVciOnly(false);
    setHostelOnly(false);
    setPlacementOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  const seoDetails = useMemo(() => {
    const baseTitle = "National Veterinary Colleges Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Comprehensive verified directory of 50+ Veterinary Colleges in India. Explore VCI recognized BVSc & AH, MVSc, and PhD institutes with clinical hospitals, livestock farms, fees, and admission details.";
    const slug = "veterinary-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Veterinary Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": { "@type": "Organization", "name": "Rangrez Community Bharat Portal" },
        "numberOfItems": VETERINARY_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#03071E] via-[#0D1B2A] to-[#1B4332] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#FFD54A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <PawPrint className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Veterinary Education Directory • VCI & ICAR Standards'
                  : currentLanguage === 'ur'
                  ? 'ویٹرنری ایجوکیشن ڈائریکٹری • وی سی آئی'
                  : 'पशु चिकित्सा शिक्षा निर्देशिका • VCI & ICAR मानक'}
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

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {currentLanguage === 'en'
                    ? '50+ Verified Veterinary Institutes'
                    : currentLanguage === 'ur'
                    ? 'تصدیق شدہ ویٹرنری کالجز'
                    : '50+ सत्यापित पशु चिकित्सा संस्थान'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Veterinary Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی ویٹرنری کالجز ڈائریکٹری'
              : 'राष्ट्रीय पशु चिकित्सा महाविद्यालय निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Your definitive guide to Veterinary Medicine & Animal Sciences in India. Explore VCI recognized BVSc & AH programs, specialized masters, and doctoral research institutes with live clinical data and official counselling nodes.'
              : currentLanguage === 'ur'
              ? 'ہندوستان میں ویٹرنری میڈیسن اور حیوانی علوم کے لیے آپ کی حتمی گائیڈ۔ وی سی آئی سے منظور شدہ پروگراموں، خصوصی ماسٹرز، اور تحقیقی اداروں کو تلاش کریں۔'
              : 'भारत में पशु चिकित्सा और पशु विज्ञान के लिए आपकी निश्चित मार्गदर्शिका। VCI मान्यता प्राप्त BVSc & AH कार्यक्रमों, विशिष्ट मास्टर्स और अनुसंधान संस्थानों की खोज करें।'}
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
                setActiveTab('icar');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'icar'
                  ? 'bg-emerald-600 text-white scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en' ? 'ICAR Accredited' : currentLanguage === 'ur' ? 'آئی سی اے آر منظور شدہ' : 'ICAR मान्यता प्राप्त'}
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
      <div className="bg-emerald-50 border-b border-emerald-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-900 font-medium">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Statutory Requirement:</strong> BVSc & AH degrees are valid for practice only if the institution is recognized by the Veterinary Council of India (VCI) and listed in the First Schedule of the IVC Act, 1984. ICAR accreditation is further required for eligibility in various central government research and academic roles.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
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
                    <h3 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active Veterinary SEO JSON-LD Specifications</h3>
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
                    <span className="text-slate-400 text-[10px] uppercase font-black">JSON-LD Veterinary Schema</span>
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
        {(activeTab === 'directory' || activeTab === 'icar') && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search 50+ veterinary colleges by name, hospital, city, course, VCI status..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-medium transition-all"
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
                  <input type="checkbox" checked={vciOnly} onChange={(e) => { setVciOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-[11px]">VCI Approved Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={icarOnly} onChange={(e) => { setIcarOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-[11px]">ICAR Accredited Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={hostelOnly} onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-[11px]">Hostel Facilities</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100 transition">
                  <input type="checkbox" checked={placementOnly} onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-[11px]">Active Placement Cell</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNTER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="text-sm font-black text-stone-800">
                Showing <span className="text-stone-900 border-b-2 border-emerald-500 pb-0.5">{filteredColleges.length}</span> Verified Veterinary Institutions
              </div>
            </div>

            {/* COLLEGES GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <Filter className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-2">No matching veterinary colleges found</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">Try adjusting your filters or search terms.</p>
                <button onClick={resetFilters} className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl font-bold text-sm hover:bg-emerald-800 cursor-pointer transition">Reset All Filters</button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {paginatedColleges.map((college) => (
                      <motion.div
                        key={college.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-600/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                      >
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${college.vciRecognized ? 'bg-emerald-600' : 'bg-amber-500'}`} />
                        
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                            {college.vciRecognized ? (
                              <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-emerald-500/30">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>VCI Recognized</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border border-amber-300">
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>Under Review</span>
                              </span>
                            )}
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border ${
                              college.ownership === 'Government' ? 'bg-blue-50 text-blue-700 border-blue-300' : 'bg-purple-50 text-purple-700 border-purple-300'
                            }`}>
                              {college.ownership}
                            </span>
                          </div>

                          <h3 className="text-base font-black text-stone-900 group-hover:text-emerald-700 transition line-clamp-2 mb-1">
                            {college.name}
                          </h3>
                          <p className="text-[11px] text-stone-500 font-medium line-clamp-1 mb-3 italic">
                            🎓 {college.affiliatedUniversity}
                          </p>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                            <span className="truncate">{college.district}, {college.state}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-4 text-[11px] font-bold">
                            <div className="bg-emerald-50/50 p-2 rounded-xl border border-emerald-100 flex items-center gap-2">
                              <PawPrint className="w-3.5 h-3.5 text-emerald-600" />
                              <div className="flex flex-col">
                                <span className="text-[9px] text-emerald-700/60 leading-none">Established</span>
                                <span className="text-emerald-950 leading-tight">{college.yearEstablished}</span>
                              </div>
                            </div>
                            <div className="bg-amber-50/50 p-2 rounded-xl border border-amber-100 flex items-center gap-2">
                              <Activity className="w-3.5 h-3.5 text-amber-600" />
                              <div className="flex flex-col">
                                <span className="text-[9px] text-amber-700/60 leading-none">NIRF Rank</span>
                                <span className="text-amber-950 leading-tight">#{college.nirfRanking || 'N/A'}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-[10px] uppercase font-black text-stone-400 block mb-1.5">Specialized Clinical Units</span>
                            <div className="flex flex-wrap gap-1">
                              {college.specializations.slice(0, 3).map((spec, idx) => (
                                <span key={idx} className="bg-stone-100 text-stone-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-stone-200 flex items-center gap-1">
                                  <HeartPulse className="w-2.5 h-2.5 text-emerald-500" />
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
                            className="flex-1 bg-stone-900 text-white text-xs font-black py-2.5 rounded-xl hover:bg-emerald-900 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
                          currentPage === num ? 'bg-emerald-700 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
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
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <a href={body.website} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold text-xs flex items-center gap-1 hover:underline">
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
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">VCI Minimum Standards (MSVE)</h3>
                <p className="text-emerald-100 text-sm leading-relaxed max-w-3xl mb-6 font-medium">
                  The Veterinary Council of India (VCI) prescribes the "Minimum Standards of Veterinary Education (MSVE)" Regulations. These regulations define the duration of BVSc & AH course, internship requirements, and physical infrastructure like Veterinary Clinical Complexes (VCC) and Livestock Farm Complexes (LFC) that every college must maintain to be recognized.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="http://www.vci.dadf.gov.in/msve-regulations" target="_blank" rel="noopener noreferrer" className="bg-[#FFD54A] text-[#03071E] px-6 py-3 rounded-xl font-black text-xs hover:scale-105 transition flex items-center gap-2">
                    View MSVE Guidelines <ExternalLink className="w-4 h-4" />
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
                  Official Veterinary Counselling Nodes
                </h3>
                <p className="text-stone-400 text-xs mt-1">Centralized & State-wise portals for BVSc & AH seat allotment and rank verification.</p>
              </div>
              <div className="divide-y divide-stone-100">
                {COUNSELLING_BOARDS.map((board, bIdx) => (
                  <div key={bIdx} className="p-6 hover:bg-stone-50 transition group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="max-w-xl">
                      <h4 className="text-base font-black text-stone-900 group-hover:text-emerald-700 transition">{board.name}</h4>
                      <p className="text-xs font-bold text-stone-500 mt-1">{board.desc}</p>
                    </div>
                    <a
                      href={board.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-xs font-black border border-stone-200 hover:bg-emerald-700 hover:text-white transition flex items-center gap-2 shrink-0"
                    >
                      Visit Counselling Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-black text-blue-900 text-sm mb-2">Required Documentation</h4>
                <ul className="text-[11px] font-bold text-blue-800/80 space-y-1.5 list-disc pl-4">
                  <li>NEET-UG Admit Card & Rank Card</li>
                  <li>10th & 12th Marks Sheets</li>
                  <li>Birth Certificate / 10th Certificate</li>
                  <li>Transfer & Migration Certificates</li>
                  <li>Category/Caste Proof (if applicable)</li>
                  <li>Domicile Certificate (for State Quota)</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-black text-purple-900 text-sm mb-2">Quotas & Eligibility</h4>
                <ul className="text-[11px] font-bold text-purple-800/80 space-y-1.5 list-disc pl-4">
                  <li>15% All India Quota (VCI)</li>
                  <li>85% State Government Quota</li>
                  <li>Age Limit: 17 to 25 years</li>
                  <li>Subject Combo: Physics, Chemistry, Biology</li>
                  <li>NEET-UG qualification is mandatory</li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-black text-emerald-900 text-sm mb-2">Admission Cycle</h4>
                <ul className="text-[11px] font-bold text-emerald-800/80 space-y-1.5 list-disc pl-4">
                  <li>May: NEET-UG Examination</li>
                  <li>August: VCI AIQ Choice Filling</li>
                  <li>September: State Level Seat Allotment</li>
                  <li>October: Reporting & Document Verification</li>
                  <li>December: Special Round / Mop-up</li>
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
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${selectedCollege.vciRecognized ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                        {selectedCollege.vciRecognized ? 'VCI Recognized' : 'Statutory Review'}
                      </span>
                      {selectedCollege.icarAccredited && (
                        <span className="px-2.5 py-0.5 rounded-lg bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider">
                          ICAR Accredited
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-lg bg-white/20 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                        Estd. {selectedCollege.yearEstablished}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">{selectedCollege.name}</h2>
                    <p className="text-white/80 text-xs sm:text-sm font-bold flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-[#FFD54A]" />
                      {selectedCollege.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Tabs */}
              <div className="bg-stone-50 border-b border-stone-200 px-8 flex overflow-x-auto no-scrollbar gap-8 shrink-0">
                {[
                  { id: 'academics', label: 'Academics', icon: BookOpen },
                  { id: 'admissions', label: 'Admissions', icon: GraduationCap },
                  { id: 'infrastructure', label: 'Clinical & Infrastructure', icon: Building2 },
                  { id: 'placements', label: 'Careers', icon: Briefcase },
                  { id: 'fees', label: 'Fees & Aid', icon: DollarSign },
                  { id: 'contact', label: 'Contact', icon: Phone },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id as any)}
                    className={`flex items-center gap-2 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition shrink-0 cursor-pointer ${
                      modalTab === tab.id
                        ? 'border-emerald-600 text-emerald-700'
                        : 'border-transparent text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 bg-white">
                <AnimatePresence mode="wait">
                  {modalTab === 'academics' && (
                    <motion.div
                      key="academics"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2">
                            <Layers2 className="w-4 h-4" /> Available Degree Programmes
                          </h4>
                          <div className="space-y-3">
                            {selectedCollege.programmes.map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200/60 font-bold text-sm">
                                <CheckSquare className="w-5 h-5 text-emerald-600" />
                                {prog}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2">
                            <PawPrint className="w-4 h-4" /> Specialized Animal Science Wings
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCollege.specializations.map((spec, idx) => (
                              <span key={idx} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-black border border-emerald-100 flex items-center gap-2">
                                <HeartPulse className="w-3.5 h-3.5" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-[#03071E] rounded-[2rem] text-white">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                              <User className="w-6 h-6 text-[#FFD54A]" />
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Academic Leadership</p>
                              <h5 className="text-base font-black">{selectedCollege.deanPrincipal}</h5>
                              <p className="text-xs text-white/70 font-bold">Dean / Principal</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Affiliation</p>
                              <p className="text-xs font-black">{selectedCollege.affiliatedUniversity}</p>
                            </div>
                            <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Verified Status</p>
                              <div className="flex items-center gap-1 justify-center">
                                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                <span className="text-xs font-black">VCI Approved</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'admissions' && (
                    <motion.div
                      key="admissions"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl">
                        <h4 className="text-sm font-black text-amber-900 mb-2 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                          Mandatory Eligibility Criteria
                        </h4>
                        <p className="text-xs font-bold text-amber-800/80 leading-relaxed">
                          {selectedCollege.eligibility}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2">
                              <FileText className="w-4 h-4" /> Entrance Requirements
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {selectedCollege.entranceExams.map((exam, idx) => (
                                <span key={idx} className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-black shadow-lg">
                                  {exam}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2">
                              <Sliders className="w-4 h-4" /> Admission Channel
                            </h5>
                            <p className="text-sm font-bold text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-200 italic">
                              "{selectedCollege.admissionProcess}"
                            </p>
                          </div>
                        </div>

                        <div className="bg-stone-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                          <Compass className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 rotate-12" />
                          <h5 className="text-base font-black mb-6 relative z-10 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#FFD54A]" />
                            Official Admission Actions
                          </h5>
                          <div className="space-y-3 relative z-10">
                            <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#FFD54A] text-[#03071E] rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-md">
                              Apply via Official Portal <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a href={selectedCollege.counsellingPortalUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white/10 text-white rounded-xl font-black text-xs border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition">
                              VCI AIQ Counselling <Compass className="w-4 h-4" />
                            </a>
                            <button className="w-full py-3 bg-white/10 text-white rounded-xl font-black text-xs border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition">
                              Download Prospectus <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <motion.div
                      key="infrastructure"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col items-center text-center">
                          <Building2 className="w-10 h-10 text-emerald-600 mb-3" />
                          <h5 className="text-xs font-black text-emerald-900 uppercase mb-1">Teaching Hospital</h5>
                          <p className="text-[11px] font-bold text-emerald-800">{selectedCollege.teachingHospital}</p>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex flex-col items-center text-center">
                          <PawPrint className="w-10 h-10 text-amber-600 mb-3" />
                          <h5 className="text-xs font-black text-amber-900 uppercase mb-1">Clinical Exposure</h5>
                          <p className="text-[11px] font-bold text-amber-800">Advanced 24/7 Diagnostics</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                          <Layers className="w-10 h-10 text-blue-600 mb-3" />
                          <h5 className="text-xs font-black text-blue-900 uppercase mb-1">Clinical Training</h5>
                          <p className="text-[11px] font-bold text-blue-800">Compulsory Internships</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest">Campus Facilities & Farms</h5>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedCollege.infrastructure.map((inf, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs font-bold text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>{inf}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest">Digital Learning Resources</h5>
                          <div className="space-y-4">
                            <div className="p-4 border-2 border-dashed border-stone-200 rounded-3xl flex items-center gap-4">
                              <BookOpen className="w-8 h-8 text-stone-400" />
                              <div>
                                <h6 className="text-xs font-black text-stone-900">Central Veterinary Library</h6>
                                <p className="text-[10px] font-bold text-stone-500 italic">Access to international journals & E-resources</p>
                              </div>
                            </div>
                            <div className="p-4 border-2 border-dashed border-stone-200 rounded-3xl flex items-center gap-4">
                              <Activity className="w-8 h-8 text-stone-400" />
                              <div>
                                <h6 className="text-xs font-black text-stone-900">Research & Innovation Cell</h6>
                                <p className="text-[10px] font-bold text-stone-500 italic">ICAR supported animal science projects</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'placements' && (
                    <motion.div
                      key="placements"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-stone-900 text-white p-6 rounded-3xl shadow-xl">
                          <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4">Highest Package</h5>
                          <p className="text-3xl font-black mb-1">{selectedCollege.highestPackage}</p>
                          <p className="text-[10px] font-bold text-white/40">International / Multi-specialty Offers</p>
                        </div>
                        <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-xl">
                          <h5 className="text-[10px] font-black text-emerald-200 uppercase tracking-widest mb-4">Average Package</h5>
                          <p className="text-3xl font-black mb-1">{selectedCollege.averagePackage}</p>
                          <p className="text-[10px] font-bold text-white/40">Clinical & Academic Placements</p>
                        </div>
                        <div className="bg-white border-2 border-stone-200 p-6 rounded-3xl flex flex-col justify-center items-center text-center">
                          <Award className="w-10 h-10 text-[#FFD54A] mb-2" />
                          <h5 className="text-xs font-black text-stone-900 uppercase">Placement Record</h5>
                          <p className="text-base font-black text-emerald-700">95%+ Annual</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest">Key Industry & Government Recruiters</h5>
                        <div className="flex flex-wrap gap-3">
                          {selectedCollege.topRecruiters.map((rec, idx) => (
                            <span key={idx} className="px-5 py-2.5 bg-stone-100 text-stone-700 rounded-2xl text-xs font-black border border-stone-200 shadow-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-600" />
                              {rec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-sky-50 rounded-3xl border border-sky-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl border-2 border-sky-200 flex items-center justify-center shrink-0">
                          <Briefcase className="w-8 h-8 text-sky-600" />
                        </div>
                        <div>
                          <h5 className="text-sm font-black text-sky-900 mb-1">Compulsory Clinical Internship</h5>
                          <p className="text-xs font-bold text-sky-800/80 leading-relaxed">
                            {selectedCollege.clinicalTraining}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'fees' && (
                    <motion.div
                      key="fees"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-xs font-black text-stone-400 uppercase tracking-widest">Tuition Fee Structue</h5>
                              <DollarSign className="w-5 h-5 text-emerald-600" />
                            </div>
                            <p className="text-2xl font-black text-stone-900">{selectedCollege.tuitionFees}</p>
                            <p className="text-[10px] font-bold text-stone-500 mt-1">*May vary based on quota and category</p>
                          </div>
                          <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-xs font-black text-stone-400 uppercase tracking-widest">Hostel & Mess</h5>
                              <Home className="w-5 h-5 text-emerald-600" />
                            </div>
                            <p className="text-2xl font-black text-stone-900">{selectedCollege.hostelFees}</p>
                            <p className="text-[10px] font-bold text-stone-500 mt-1">Includes basic accommodation and maintenance</p>
                          </div>
                        </div>

                        <div className="bg-emerald-950 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                          <Award className="absolute -top-6 -left-6 w-32 h-32 text-white/5 -rotate-12" />
                          <h5 className="text-base font-black mb-6 relative z-10 flex items-center gap-2">
                            <Star className="w-5 h-5 text-[#FFD54A]" />
                            Scholarship & Financial Aid
                          </h5>
                          <div className="space-y-4 relative z-10">
                            <p className="text-xs font-bold text-emerald-100 leading-relaxed border-l-2 border-[#FFD54A] pl-4">
                              {selectedCollege.scholarships}
                            </p>
                            <div className="pt-4 space-y-2">
                              <div className="flex items-center gap-2 text-[11px] font-black">
                                <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" />
                                <span>Post-Matric Scholarships Eligible</span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px] font-black">
                                <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" />
                                <span>Minority Welfare Grants Available</span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px] font-black">
                                <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" />
                                <span>ICAR JRF/SRF for PG Scholars</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {modalTab === 'contact' && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl flex items-center gap-4 hover:border-emerald-600/30 transition shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md">
                              <Phone className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Direct Contact</p>
                              <p className="text-sm font-black text-stone-900">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl flex items-center gap-4 hover:border-emerald-600/30 transition shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md">
                              <Mail className="w-6 h-6" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Official Email</p>
                              <p className="text-sm font-black text-stone-900 truncate">{selectedCollege.email}</p>
                            </div>
                          </div>
                          <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl flex items-center gap-4 hover:border-emerald-600/30 transition shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md">
                              <Globe className="w-6 h-6" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Official Webnode</p>
                              <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="text-sm font-black text-emerald-700 hover:underline truncate block">
                                {selectedCollege.website.replace('https://', '')}
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center">
                          <MapPin className="w-12 h-12 text-rose-500 mb-4" />
                          <h5 className="text-base font-black text-stone-900 mb-2">Locate on Maps</h5>
                          <p className="text-xs font-bold text-stone-500 mb-6 max-w-xs leading-relaxed">
                            {selectedCollege.address}
                          </p>
                          <a
                            href={selectedCollege.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-stone-900 text-white rounded-xl font-black text-xs hover:bg-emerald-900 transition shadow-lg flex items-center gap-2"
                          >
                            Open Navigation <Map className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Footer */}
              <div className="p-8 bg-stone-50 border-t border-stone-200 shrink-0 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>Last Profile Verification: {selectedCollege.lastVerifiedDate}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedCollege(null)} className="px-6 py-2.5 rounded-xl border border-stone-300 text-stone-600 font-black text-xs hover:bg-stone-100 transition cursor-pointer">
                    Close Profile
                  </button>
                  <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-stone-900 text-white rounded-xl font-black text-xs hover:bg-emerald-900 transition shadow-md flex items-center gap-2">
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
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
