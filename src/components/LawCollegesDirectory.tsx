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
  CheckSquare
} from 'lucide-react';
import { LAW_COLLEGES, LawCollegeProfile } from '../data/lawCollegesData';

interface LawCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'bci',
    name: 'BCI',
    fullName: 'Bar Council of India',
    website: 'http://www.barcouncilofindia.org/',
    description: {
      en: 'The statutory body created by Parliament under the Advocates Act, 1961, which regulates and represents the Indian bar, sets standards for legal education, and grants recognition to law universities.',
      ur: 'ایڈوکیٹس ایکٹ 1961 کے تحت پارلیمنٹ کے ذریعے قائم کردہ قانونی ادارہ جو فارمیسی تعلیم کی طرح ہندوستانی قانونی تعلیم اور وکالت کو منظم کرتا ہے۔',
      hi: 'अधिवक्ता अधिनियम, 1961 के तहत संसद द्वारा निर्मित वैधानिक निकाय, जो भारतीय बार को नियंत्रित और प्रतिनिधित्व करता है तथा कानूनी शिक्षा के मानकों को निर्धारित करता है।'
    },
    roles: [
      'Prescribes standards of professional conduct and etiquette for advocates',
      'Lays down standards of legal education in India and approves affiliations',
      'Conducts the All India Bar Examination (AIBE) for practicing licenses'
    ]
  },
  {
    id: 'consortium',
    name: 'CLAT Consortium',
    fullName: 'Consortium of National Law Universities',
    website: 'https://consortiumofnlus.ac.in/',
    description: {
      en: 'The apex body governing admissions to premium National Law Universities across India through CLAT examinations.',
      ur: 'ہندوستان بھر کی نامور نیشنل لاء یونیورسٹیوں میں داخلے کے لیے واحد مجاز کونسل۔',
      hi: 'भारत भर के प्रीमियम राष्ट्रीय विधि विश्वविद्यालयों में प्रवेश की प्रक्रिया को CLAT परीक्षा के माध्यम से संचालित करने वाला सर्वोच्च निकाय।'
    },
    roles: [
      'Administration of Common Law Admission Test (CLAT) annually',
      'Coordination of centralized online seat allocation and admissions counselling',
      'Fostering standards of high-quality administrative operations across NLUs'
    ]
  }
];

const COUNSELLING_BOARDS = [
  { name: 'CLAT Centralized Seat Allocation (Consortium of NLUs)', url: 'https://consortiumofnlus.ac.in/', desc: 'National level admission coordination for BA LL.B, BBA LL.B and LL.M. courses.' },
  { name: 'MH-CET Law Counselling (Maharashtra)', url: 'https://cetcell.mahacet.org/', desc: 'State-level centralized counselling for 5-Year and 3-Year LL.B programmes in Maharashtra.' },
  { name: 'TS LAWCET Counselling (Telangana)', url: 'https://lawcet.tsche.ac.in/', desc: 'Manages professional law seats based on state LAWCET scorecard ranks.' },
  { name: 'UPTAC Higher Education Counselling (Uttar Pradesh)', url: 'https://uptac.admissions.nic.in/', desc: 'Handles state quota law seats in various universities.' },
  { name: 'KEA Karnataka Law Admissions', url: 'https://cetonline.karnataka.gov.in/kea/', desc: 'Coordinates professional law seats inside Karnataka state government and private quotas.' }
];

export default function LawCollegesDirectory({ currentLanguage = 'en' }: LawCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'minority' | 'regulatory' | 'counselling'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [selectedFeeRange, setSelectedFeeRange] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [bciOnly, setBciOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [placementOnly, setPlacementOnly] = useState(false);
  const [scholarshipOnly, setScholarshipOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'nirf-asc' | 'naac' | 'established-asc' | 'established-desc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<LawCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer / Widget
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(LAW_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = LAW_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const citiesList = useMemo(() => {
    const filtered = LAW_COLLEGES.filter(c => 
      (selectedState === 'All' || c.state === selectedState) &&
      (selectedDistrict === 'All' || c.district === selectedDistrict)
    );
    const cities = new Set(filtered.map(c => c.city).filter(Boolean) as string[]);
    return ['All', ...Array.from(cities).sort()];
  }, [selectedState, selectedDistrict]);

  const universitiesList = useMemo(() => {
    const univs = new Set(LAW_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const coursesList = [
    'All', 'LL.B.', 'Integrated BA LL.B.', 'BBA LL.B.', 'B.Com LL.B.', 'B.Sc. LL.B.', 
    'BSW LL.B.', 'LL.M.', 'Ph.D. in Law', 'Diploma Courses', 'Certificate Courses'
  ];
  
  const specializationsList = [
    'All', 'Constitutional Law', 'Criminal Law', 'Civil Law', 'Corporate Law', 'Business Law', 
    'International Law', 'Human Rights Law', 'Cyber Law', 'Intellectual Property Rights', 
    'Taxation Law', 'Labour Law', 'Environmental Law', 'Family Law', 'Arbitration & Mediation'
  ];

  const feeRanges = ['All', 'Under ₹1.0 Lakh/yr', '₹1.0 Lakh - ₹2.0 Lakhs/yr', '₹2.0 Lakhs - ₹3.0 Lakhs/yr', 'Above ₹3.0 Lakhs/yr'];
  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed', 'Minority'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+', 'B'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...LAW_COLLEGES];

    // Minority Segment Tab filter
    if (activeTab === 'minority') {
      result = result.filter(c => c.ownership === 'Minority');
    }

    // Search Query (Name, District, State, City, University, Specializations, Dean)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        (c.city && c.city.toLowerCase().includes(q)) ||
        c.affiliatedUniversity.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.specializations.some(s => s.toLowerCase().includes(q)) ||
        c.deanPrincipal.toLowerCase().includes(q)
      );
    }

    // State filter
    if (selectedState !== 'All') {
      result = result.filter(c => c.state === selectedState);
    }

    // District filter
    if (selectedDistrict !== 'All') {
      result = result.filter(c => c.district === selectedDistrict);
    }

    // City filter
    if (selectedCity !== 'All') {
      result = result.filter(c => c.city === selectedCity);
    }

    // University filter
    if (selectedUniversity !== 'All') {
      result = result.filter(c => c.affiliatedUniversity === selectedUniversity);
    }

    // Course filter
    if (selectedCourse !== 'All') {
      result = result.filter(c => c.programmes.includes(selectedCourse));
    }

    // Specialization filter
    if (selectedSpecialization !== 'All') {
      result = result.filter(c => c.specializations.includes(selectedSpecialization));
    }

    // Ownership filter
    if (selectedOwnership !== 'All') {
      result = result.filter(c => c.ownership === selectedOwnership);
    }

    // NAAC Grade filter
    if (selectedNaacGrade !== 'All') {
      result = result.filter(c => c.naacGrade && c.naacGrade.includes(selectedNaacGrade));
    }

    // BCI approval filter
    if (bciOnly) {
      result = result.filter(c => c.bciApproved);
    }

    // Hostel filter
    if (hostelOnly) {
      result = result.filter(c => c.infrastructure.includes('Hostel'));
    }

    // Placements filter
    if (placementOnly) {
      result = result.filter(c => c.hasPlacementCell);
    }

    // Scholarship filter
    if (scholarshipOnly) {
      result = result.filter(c => c.scholarships !== 'Not applicable' && c.scholarships !== 'None');
    }

    // Fee range filter
    if (selectedFeeRange !== 'All') {
      result = result.filter(c => {
        const feeNum = parseInt(c.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        if (selectedFeeRange === 'Under ₹1.0 Lakh/yr') return feeNum < 100000;
        if (selectedFeeRange === '₹1.0 Lakh - ₹2.0 Lakhs/yr') return feeNum >= 100000 && feeNum <= 200000;
        if (selectedFeeRange === '₹2.0 Lakhs - ₹3.0 Lakhs/yr') return feeNum > 200000 && feeNum <= 300000;
        if (selectedFeeRange === 'Above ₹3.0 Lakhs/yr') return feeNum > 300000;
        return true;
      });
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'state':
          return a.state.localeCompare(b.state);
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
        case 'established-asc':
          return a.yearEstablished - b.yearEstablished;
        case 'established-desc':
          return b.yearEstablished - a.yearEstablished;
        default:
          return 0;
      }
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedCity, selectedUniversity, selectedCourse, selectedSpecialization, selectedFeeRange, selectedOwnership, selectedNaacGrade, bciOnly, hostelOnly, placementOnly, scholarshipOnly, sortBy]);

  // Paginated Results
  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All');
    setSelectedDistrict('All');
    setSelectedCity('All');
    setSelectedUniversity('All');
    setSelectedCourse('All');
    setSelectedSpecialization('All');
    setSelectedFeeRange('All');
    setSelectedOwnership('All');
    setSelectedNaacGrade('All');
    setBciOnly(false);
    setHostelOnly(false);
    setPlacementOnly(false);
    setScholarshipOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  // SEO Info Generation for college or list
  const seoDetails = useMemo(() => {
    const baseTitle = "National Law Colleges Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Discover over 50+ verified NLUs, Government, Private, and Minority law colleges in India. Includes complete fee structures, BCI recognition status, eligibility criteria, and direct admission routes.";
    const slug = "law-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Law Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": {
          "@type": "Organization",
          "name": "Rangrez Community Educational Trust",
          "alternateName": "RCET"
        },
        "numberOfItems": LAW_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#03071E] via-[#370617] to-[#14213D] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#370617] border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <GraduationCap className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Law Education Portal • BCI Standards'
                  : currentLanguage === 'ur'
                  ? 'لاء ایجوکیشن پورٹل • بار کونسل آف انڈیا'
                  : 'विधि शिक्षा पोर्टल • BCI मानक निर्देशिका'}
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
                    ? '50+ Verified BCI Approved Institutes'
                    : currentLanguage === 'ur'
                    ? 'بی سی آئی سے منظور شدہ لاء کالجز'
                    : '50+ सत्यापित BCI स्वीकृत संस्थान'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Law Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی قانون کالجز ڈائریکٹری'
              : 'राष्ट्रीय विधि महाविद्यालय निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'A complete verified index of National Law Universities (NLUs), Government and private law schools across India. Access official eligibility matrix, fees, and state-level counselling nodes. Empowering legal aspirants with direct primary sources.'
              : currentLanguage === 'ur'
              ? 'ہندوستان کے نامور نیشنل لاء یونیورسٹیز، سرکاری اور پرائیویٹ لاء اسکولوں کا مکمل اور تصدیق شدہ انڈیکس۔ قانونی تعلیم کے خواہشمند طلباء کے لیے ایک جامع گائیڈ۔'
              : 'भारत भर के राष्ट्रीय विधि विश्वविद्यालयों (NLUs), सरकारी और निजी विधि महाविद्यालयों का पूर्ण सत्यापित सूचकांक। आधिकारिक प्रवेश प्रक्रिया, शिक्षण शुल्क और काउंसलिंग विवरण तक सीधी पहुंच।'}
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
                {currentLanguage === 'en'
                  ? 'All Law Institutions'
                  : currentLanguage === 'ur'
                  ? 'تمام قانون کے ادارے'
                  : 'सभी कानून संस्थान'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('minority');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'minority'
                  ? 'bg-[#370617] text-[#FFD54A] scale-105 border-2 border-[#FFD54A]'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en'
                  ? 'Minority Law Schools'
                  : currentLanguage === 'ur'
                  ? 'اقلیتی لاء کالجز'
                  : 'अल्पसंख्यक विधि संस्थान'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory'
                  ? 'bg-[#D4AF37] text-[#03071E] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'Bar Council of India (BCI)'
                  : currentLanguage === 'ur'
                  ? 'بار کونسل آف انڈیا (BCI)'
                  : 'भारतीय विधिज्ञ परिषद् (BCI)'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('counselling')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'counselling'
                  ? 'bg-[#D4AF37] text-[#03071E] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'CLAT & State Counselling'
                  : currentLanguage === 'ur'
                  ? 'کونسلنگ اور داخلے'
                  : 'CLAT एवं राज्य काउंसलिंग'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. REGULATORY GUARANTEE BANNER */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900 font-medium">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>BCI Registration Compliance:</strong> In accordance with Advocates Act Section 24, candidates must graduate from a BCI-recognized college to enroll as advocates with State Bar Councils. Every law profile listed here is fully recognized and approved under BCI statutory lists.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>BCI Registration Status</span>
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
                    <h3 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active Law SEO JSON-LD & Crawler Specifications</h3>
                  </div>
                  <button onClick={() => setShowSeoInspector(false)} className="text-stone-400 hover:text-stone-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                  <div className="space-y-2.5">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Title Tag (Google Optimized)</span>
                      <p className="text-slate-800 font-bold p-2 bg-slate-50 border rounded-lg mt-1">{seoDetails.title}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Description</span>
                      <p className="text-slate-700 p-2 bg-slate-50 border rounded-lg mt-1 leading-relaxed">{seoDetails.description}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Canonical OpenGraph URL</span>
                      <code className="block p-2 bg-stone-50 border rounded-lg mt-1 text-indigo-700 select-all font-mono text-[10px]">{seoDetails.url}</code>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-black">JSON-LD Law Schema (Google Rich Snippets)</span>
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
        {(activeTab === 'directory' || activeTab === 'minority') && (
          <div className="space-y-6">
            
            {/* MINORITY SEGMENT BANNER */}
            {activeTab === 'minority' && (
              <div className="bg-gradient-to-r from-[#2c0411] via-[#14213D] to-[#03071E] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#FFD54A]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-48 h-48 text-[#FFD54A]" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFD54A] text-[#03071E] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>Constitutional Article 30(1) Law segment</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A] mb-2">
                    Minority Law Institutions of India
                  </h2>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    Explore fully recognized Law Schools offering up to 50% reservation quotas for minority candidates under constitutional guidelines. Access verified profiles like Jamia Millia Islamia Faculty of Law, Aligarh Muslim University (AMU), and various premium autonomous institutions.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">⚖️ Faculty of Law, Jamia Millia Islamia (New Delhi)</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">⚖️ Department of Law, AMU (Aligarh)</span>
                  </div>
                </div>
              </div>
            )}

            {/* FILTERS & SEARCH CONTROL PANEL */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search 50+ law colleges by name, city, state, branch, entrance exams or specializations...'
                        : currentLanguage === 'ur'
                        ? 'نام، شہر، ریاست، برانچ، امتحانات یا اسپیشلائزیشن سے تلاش کریں...'
                        : '50+ विधि कॉलेजों को नाम, शहर, राज्य, प्रवेश परीक्षाओं या विशिष्टताओं द्वारा खोजें...'
                    }
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#370617] text-sm font-medium transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as any);
                      setCurrentPage(1);
                    }}
                    className="bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-[#03071E] focus:outline-none focus:ring-2 focus:ring-[#370617] cursor-pointer"
                  >
                    <option value="alphabetical">Sort: Alphabetical</option>
                    <option value="state">Sort: State</option>
                    <option value="fee-asc">Sort: Tuition Fee (Low to High)</option>
                    <option value="fee-desc">Sort: Tuition Fee (High to Low)</option>
                    <option value="placement-desc">Sort: Highest Package</option>
                    <option value="nirf-asc">Sort: NIRF Ranking (Best First)</option>
                    <option value="naac">Sort: NAAC Accreditation</option>
                    <option value="established-asc">Sort: Established (Oldest)</option>
                    <option value="established-desc">Sort: Established (Newest)</option>
                  </select>

                  <button
                    onClick={resetFilters}
                    className="bg-stone-100 hover:bg-stone-200 text-stone-600 px-4 py-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-stone-200"
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Advanced Multi-Criteria Filter Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-4 border-t border-stone-100">
                {/* State */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedDistrict('All');
                      setSelectedCity('All');
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {statesList.map(st => (
                      <option key={st} value={st}>{st === 'All' ? 'All States' : st}</option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">District</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      setSelectedCity('All');
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                    disabled={selectedState === 'All'}
                  >
                    {districtsList.map(dt => (
                      <option key={dt} value={dt}>{dt === 'All' ? 'All Districts' : dt}</option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                    disabled={selectedDistrict === 'All'}
                  >
                    {citiesList.map(ct => (
                      <option key={ct} value={ct}>{ct === 'All' ? 'All Cities' : ct}</option>
                    ))}
                  </select>
                </div>

                {/* Course */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Programme</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => {
                      setSelectedCourse(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {coursesList.map(cs => (
                      <option key={cs} value={cs}>{cs === 'All' ? 'All Programs' : cs}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Specialization</label>
                  <select
                    value={selectedSpecialization}
                    onChange={(e) => {
                      setSelectedSpecialization(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {specializationsList.map(sp => (
                      <option key={sp} value={sp}>{sp === 'All' ? 'All Branches' : sp}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Fees */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Annual Tuition Fees</label>
                  <select
                    value={selectedFeeRange}
                    onChange={(e) => {
                      setSelectedFeeRange(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {feeRanges.map(fr => (
                      <option key={fr} value={fr}>{fr === 'All' ? 'All Tuition Fees' : fr}</option>
                    ))}
                  </select>
                </div>

                {/* Ownership */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Ownership Type</label>
                  <select
                    value={selectedOwnership}
                    onChange={(e) => {
                      setSelectedOwnership(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {ownershipTypes.map(ow => (
                      <option key={ow} value={ow}>{ow === 'All' ? 'All Ownerships' : ow}</option>
                    ))}
                  </select>
                </div>

                {/* NAAC Grade */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">NAAC Grade</label>
                  <select
                    value={selectedNaacGrade}
                    onChange={(e) => {
                      setSelectedNaacGrade(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
                  >
                    {naacGradesList.map(nc => (
                      <option key={nc} value={nc}>{nc === 'All' ? 'All NAAC Grades' : `${nc} Accredited`}</option>
                    ))}
                  </select>
                </div>

                {/* Affiliated University */}
                <div className="md:col-span-2 lg:col-span-4">
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Affiliated University</label>
                  <select
                    value={selectedUniversity}
                    onChange={(e) => {
                      setSelectedUniversity(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none truncate cursor-pointer"
                  >
                    {universitiesList.map(un => (
                      <option key={un} value={un}>{un === 'All' ? 'All Affiliations' : un}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Checkbox Quick Filters */}
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-stone-700 items-center justify-start border-t border-stone-100">
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={bciOnly}
                    onChange={(e) => { setBciOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#370617] focus:ring-[#370617]"
                  />
                  <span className="text-[11px]">BCI Approved Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hostelOnly}
                    onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#370617] focus:ring-[#370617]"
                  />
                  <span className="text-[11px]">Hostel Facility Available</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={placementOnly}
                    onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#370617] focus:ring-[#370617]"
                  />
                  <span className="text-[11px]">Active Placement Cell</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={scholarshipOnly}
                    onChange={(e) => { setScholarshipOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#370617] focus:ring-[#370617]"
                  />
                  <span className="text-[11px]">Scholarships Offered</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNTER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="text-sm font-black text-stone-800">
                Showing <span className="text-stone-900 border-b-2 border-amber-500 pb-0.5">{filteredColleges.length}</span> Verified Law Institutions in India
              </div>

              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>All profiles matched against Bar Council of India official registers.</span>
              </div>
            </div>

            {/* COLLEGES GRID & PAGINATION */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No law colleges match your filter selections</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try resetting the filter controls, changing state regions, or clearing search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#370617] text-white rounded-xl font-bold text-sm shadow-md hover:bg-stone-900 transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {paginatedColleges.map((college) => (
                      <motion.div
                        key={college.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#370617]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                      >
                        {/* Top Color Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                          college.ownership === 'Government' || college.ownership === 'Autonomous'
                            ? 'bg-[#370617]'
                            : college.ownership === 'Minority'
                            ? 'bg-[#D4AF37]'
                            : 'bg-indigo-600'
                        }`} />

                        <div>
                          {/* Upper Badges */}
                          <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                            <span className="inline-flex items-center gap-1 bg-[#14213D] text-[#FFD54A] text-[10px] font-black uppercase px-2 py-0.5 rounded-lg shadow-xs">
                              <BookOpen className="w-3.5 h-3.5 text-[#FFD54A]" />
                              <span>BCI Approved</span>
                            </span>

                            <div className="flex items-center gap-1">
                              {college.ownership === 'Minority' && (
                                <span className="bg-amber-100 text-amber-900 text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-amber-300">
                                  Minority
                                </span>
                              )}
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border ${
                                college.ownership === 'Government' || college.ownership === 'Autonomous'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : 'bg-purple-50 text-purple-800 border-purple-300'
                              }`}>
                                {college.ownership}
                              </span>
                            </div>
                          </div>

                          {/* Name & Affiliation */}
                          <h3 className="text-base font-black text-stone-900 group-hover:text-[#370617] transition line-clamp-2 mb-1">
                            {college.name}
                          </h3>
                          <p className="text-[11px] text-stone-500 font-medium line-clamp-1 mb-3">
                            🎓 {college.affiliatedUniversity}
                          </p>

                          {/* Location */}
                          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                            <span className="truncate">{college.district}, {college.state}</span>
                          </div>

                          {/* Academic Programs */}
                          <div className="mb-3.5">
                            <span className="text-[10px] uppercase font-black text-stone-400 block mb-1">Offered Programmes</span>
                            <div className="flex flex-wrap gap-1">
                              {college.programmes.map((prog, pIdx) => (
                                <span key={pIdx} className="bg-slate-100 text-slate-800 text-[9px] font-bold px-1.5 py-0.5 rounded">
                                  {prog}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Accreditation */}
                          <div className="flex flex-col gap-1 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/80 mb-3 text-[11px] font-bold text-stone-700">
                            <div className="flex items-center justify-between text-emerald-800">
                              <span className="flex items-center gap-1">
                                <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                                <span>BCI Recognition Approved</span>
                              </span>
                              <span className="bg-emerald-100 text-emerald-950 px-1 rounded text-[9px]">Verified</span>
                            </div>
                            {college.naacGrade && (
                              <div className="flex items-center justify-between text-blue-800">
                                <span className="flex items-center gap-1">
                                  <Award className="w-3.5 h-3.5 text-blue-600" />
                                  <span>NAAC Grade Status</span>
                                </span>
                                <span className="text-[10px] text-blue-900 font-black">{college.naacGrade}</span>
                              </div>
                            )}
                          </div>

                          {/* Key Stats Grid */}
                          <div className="grid grid-cols-2 gap-2 text-xs bg-[#faf9f6] p-2 rounded-2xl border border-stone-200/60 mb-4">
                            <div>
                              <span className="text-[9px] uppercase font-black text-stone-400 block">Est. Year</span>
                              <span className="font-bold text-stone-900 flex items-center gap-1 text-[11px]">
                                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                                {college.yearEstablished}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] uppercase font-black text-stone-400 block">NIRF Rank</span>
                              <span className="font-extrabold text-indigo-900 flex items-center gap-1 text-[11px]">
                                <Award className="w-3.5 h-3.5 text-indigo-600" />
                                {college.nirfRanking && college.nirfRanking !== '999' ? `#${college.nirfRanking}` : 'N/A'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                          <div className="text-left">
                            <span className="text-[9px] text-stone-400 uppercase font-black block">Annual Fee</span>
                            <span className="text-xs font-extrabold text-stone-800">{college.tuitionFees.split(' ')[0]} / yr</span>
                          </div>

                          <div className="flex gap-1.5">
                            <a
                              href={college.website}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-xl border border-stone-300 transition shrink-0"
                              title="Visit Website"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => {
                                setSelectedCollege(college);
                                setModalTab('academics');
                              }}
                              className="px-3 py-2 bg-[#370617] hover:bg-stone-900 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1 transition cursor-pointer"
                            >
                              <span>Full Profile</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-white border rounded-xl text-xs font-bold shadow-xs hover:bg-stone-50 disabled:opacity-50 cursor-pointer"
                    >
                      &larr; Previous Page
                    </button>
                    <span className="text-xs font-bold text-stone-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-white border rounded-xl text-xs font-bold shadow-xs hover:bg-stone-50 disabled:opacity-50 cursor-pointer"
                    >
                      Next Page &rarr;
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 5. REGULATORY BODIES INTERFACE TAB */}
        {activeTab === 'regulatory' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200">
              <h2 className="text-2xl font-serif font-extrabold text-stone-900 mb-2">
                Indian Law Education Regulatory Infrastructure
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Understand the statutory framework that governs legal studies in India. Before taking admission in any 5-year integrated law or 3-year LL.B program, verify the college has been granted an active approval of affiliation by the Bar Council of India (BCI).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {REGULATORY_BODIES.map(rb => (
                  <div key={rb.id} className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-black text-amber-600">Statutory Apex Body</span>
                        <h3 className="text-lg font-black text-stone-900">{rb.fullName} ({rb.name})</h3>
                      </div>
                      <a
                        href={rb.website}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white rounded-xl border hover:bg-stone-100 text-stone-700 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-semibold">
                      {rb.description[currentLanguage] || rb.description.en}
                    </p>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-stone-400 block">Core Jurisdictions</span>
                      <ul className="space-y-1.5 text-xs text-stone-700 font-bold">
                        {rb.roles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 font-medium">
              <Info className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <strong className="block mb-1">AIBE Advocacy Licensing:</strong>
                <span>All law graduates from 2009-2010 onwards must clear the All India Bar Examination (AIBE) conducted by the BCI within 2 years of local State Bar Council enrolment to receive a permanent Certificate of Practice (COP). Completing your degree from an approved college is the mandatory prerequisite.</span>
              </div>
            </div>
          </div>
        )}

        {/* 6. COUNSELLING AND ADMISSIONS INTERFACE TAB */}
        {activeTab === 'counselling' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-serif font-extrabold text-stone-900 mb-2">
                  Official Centralized Law Admission Counselling
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  Admissions to National Law Universities and state professional departments are executed strictly through centralized, transparent single-window counseling matrix systems based on national/state level entrance scorecards. Avoid middle-men and apply only through these official channels.
                </p>
              </div>

              <div className="space-y-4">
                {COUNSELLING_BOARDS.map((cb, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-amber-500/40 transition">
                    <div>
                      <h3 className="text-sm font-black text-stone-900 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{cb.name}</span>
                      </h3>
                      <p className="text-xs text-stone-500 font-bold mt-1 max-w-2xl leading-relaxed">
                        {cb.desc}
                      </p>
                    </div>

                    <a
                      href={cb.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1 shrink-0 transition"
                    >
                      <span>Counseling Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 7. LAW COLLEGE DEDICATED DETAIL MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-stone-200"
            >
              
              {/* Modal Top Bar */}
              <div className="bg-[#370617] text-white p-4 flex items-center justify-between border-b-2 border-amber-400">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-white/10 rounded-lg text-amber-400">⚖️</span>
                  <div>
                    <h3 className="text-sm font-serif font-black tracking-tight max-w-md truncate">{selectedCollege.name}</h3>
                    <p className="text-[10px] text-gray-300 font-bold">BCI Approved • {selectedCollege.affiliatedUniversity}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Banner Area */}
              <div className="relative h-44 bg-stone-100 shrink-0">
                <img
                  src={selectedCollege.coverImageUrl}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="bg-amber-500 text-stone-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-lg mb-1 inline-block">
                      {selectedCollege.ownership} Institution
                    </span>
                    <h2 className="text-lg sm:text-2xl font-serif font-extrabold leading-tight">{selectedCollege.name}</h2>
                    <p className="text-xs text-gray-200 font-bold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{selectedCollege.address}</span>
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={selectedCollege.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 backdrop-blur-xs flex items-center gap-1 transition"
                    >
                      <Map className="w-3.5 h-3.5 text-red-400" />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Navigation Tabs */}
              <div className="bg-stone-50 border-b overflow-x-auto flex items-center gap-1 px-4 py-2 shrink-0 scrollbar-none">
                <button
                  onClick={() => setModalTab('academics')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'academics' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Academics & Specializations
                </button>
                <button
                  onClick={() => setModalTab('admissions')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'admissions' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Admissions & Eligibility
                </button>
                <button
                  onClick={() => setModalTab('infrastructure')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'infrastructure' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Campus Infrastructure
                </button>
                <button
                  onClick={() => setModalTab('placements')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'placements' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Careers & Placements
                </button>
                <button
                  onClick={() => setModalTab('fees')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'fees' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Fees & Scholarships
                </button>
                <button
                  onClick={() => setModalTab('contact')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black shrink-0 transition cursor-pointer ${
                    modalTab === 'contact' ? 'bg-[#370617] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Contact & Faculty
                </button>
              </div>

              {/* Modal Body Area */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                
                {/* A. ACADEMICS TAB */}
                {modalTab === 'academics' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider mb-2">Available Academic Programmes</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {selectedCollege.programmes.map((p, pIdx) => (
                          <div key={pIdx} className="bg-slate-50 p-3 rounded-xl border border-stone-200 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="font-bold text-stone-800 text-xs">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider mb-2">Major Legal Specializations</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.specializations.map((s, sIdx) => (
                          <span key={sIdx} className="bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1.5 rounded-lg border">
                            ⚖️ {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                      <div>
                        <strong className="text-emerald-900 font-extrabold text-xs block uppercase">Bar Council of India (BCI) Affiliation</strong>
                        <p className="text-emerald-800 text-xs mt-0.5 font-semibold">
                          This institution is fully approved by the Bar Council of India under statutory regulations, granting appropriate seat intake matrices and legal credentials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* B. ADMISSIONS TAB */}
                {modalTab === 'admissions' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                        <span className="text-[10px] font-black uppercase text-stone-400">Accepted Entrance Exams</span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedCollege.entranceExams.map((ex, exIdx) => (
                            <span key={exIdx} className="bg-[#370617] text-[#FFD54A] px-3 py-1 rounded-xl text-xs font-black">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                        <span className="text-[10px] font-black uppercase text-stone-400 block mb-1">Counselling & Seat Allocation Authority</span>
                        <p className="text-stone-800 font-bold text-xs">
                          {selectedCollege.counsellingAuthority}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider">Eligibility Conditions</h4>
                      <p className="p-3 bg-stone-50 border rounded-xl text-xs font-bold text-stone-700 leading-relaxed">
                        {selectedCollege.eligibility}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider">Admission Process Overview</h4>
                      <p className="p-3 bg-stone-50 border rounded-xl text-xs font-bold text-stone-700 leading-relaxed">
                        {selectedCollege.admissionProcess}
                      </p>
                    </div>
                  </div>
                )}

                {/* C. INFRASTRUCTURE TAB */}
                {modalTab === 'infrastructure' && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider">On-Campus Academic & Legal Facilities</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedCollege.infrastructure.map((inf, idx) => (
                        <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200/80 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-bold text-stone-700 text-xs">{inf}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex gap-3 text-indigo-900">
                      <Info className="w-6 h-6 text-indigo-600 shrink-0" />
                      <div>
                        <strong className="text-indigo-950 font-black text-xs block uppercase">State-Of-The-Art Moot Court Room</strong>
                        <p className="text-indigo-800 text-xs mt-0.5 font-bold">
                          The institute features a fully furnished, air-conditioned Moot Court Hall modeled exactly like High Courts to conduct clinical legal practical classes and mock trial sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* D. PLACEMENTS TAB */}
                {modalTab === 'placements' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#faf9f6] p-4 rounded-2xl border border-stone-200">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Placement Package Stats</span>
                        <div className="space-y-1 mt-2 text-stone-800 font-extrabold">
                          <p className="text-xs">Highest Domestic Offer: <span className="text-emerald-700 text-sm font-black">{selectedCollege.highestPackage}</span></p>
                          <p className="text-xs">Average Batch Placement: <span className="text-[#370617] font-black">{selectedCollege.averagePackage}</span></p>
                        </div>
                      </div>

                      <div className="bg-[#faf9f6] p-4 rounded-2xl border border-stone-200">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Alumni Networks</span>
                        <p className="text-xs font-bold text-stone-700 mt-2 leading-relaxed">
                          {selectedCollege.alumniNetwork}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-wider">Top Recruiter Law Firms & Corporate Giants</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCollege.topRecruiters.map((rec, idx) => (
                          <span key={idx} className="bg-indigo-50 text-indigo-950 text-xs font-bold px-3 py-1.5 rounded-lg border border-indigo-200">
                            💼 {rec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                        <strong className="text-[10px] font-black uppercase text-stone-400 block mb-1">Internship Opportunities</strong>
                        <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                          {selectedCollege.internshipOpportunities}
                        </p>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                        <strong className="text-[10px] font-black uppercase text-stone-400 block mb-1">Legal Aid Clinic Programs</strong>
                        <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                          {selectedCollege.legalAidProgramme}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* E. FEES TAB */}
                {modalTab === 'fees' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Annual Tuition Structure</span>
                        <span className="text-2xl font-black text-stone-900 mt-1 block">{selectedCollege.tuitionFees}</span>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Annual Hostel / Accommodations</span>
                        <span className="text-2xl font-black text-stone-900 mt-1 block">{selectedCollege.hostelFees}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2.5">
                      <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Scholarships & Financial Aid Modules</span>
                      </h4>

                      <div className="space-y-2 text-xs text-amber-950 font-bold">
                        <p><strong>General Merit-cum-Means:</strong> {selectedCollege.scholarships}</p>
                        <p><strong>Minority Quota Scholarships:</strong> {selectedCollege.minorityScholarships}</p>
                        <p><strong>Government Post-Matric:</strong> {selectedCollege.governmentScholarships}</p>
                        <p><strong>Education Loan Assistance:</strong> {selectedCollege.educationLoanAssistance}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* F. CONTACT TAB */}
                {modalTab === 'contact' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Dean & Faculty Strengths</span>
                        <div className="space-y-1 text-stone-800 font-extrabold text-xs">
                          <p>Dean / Principal: <span className="text-indigo-900">{selectedCollege.deanPrincipal}</span></p>
                          <p>Core Full-Time Faculty: <span className="text-stone-900">{selectedCollege.facultyStrength} Members</span></p>
                          <p>Student-Faculty Ratio: <span className="text-stone-900">{selectedCollege.studentFacultyRatio}</span></p>
                          <p>Visiting Advocates: <span className="text-stone-900">{selectedCollege.visitingFaculty}</span></p>
                        </div>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3">
                        <span className="text-[10px] font-black uppercase text-stone-400 block">Admission Office</span>
                        <p className="text-xs font-bold text-stone-700 leading-relaxed">
                          {selectedCollege.admissionOffice}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#faf9f6] p-4 rounded-2xl border border-stone-200 space-y-2.5 text-xs font-bold text-stone-700">
                      <h4 className="text-[10px] uppercase font-black text-stone-400 block">Verified Communication Channels</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#370617]" />
                          <span>Phone Contact: {selectedCollege.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#370617]" />
                          <span>Official Email: <a href={`mailto:${selectedCollege.email}`} className="text-indigo-600 hover:underline">{selectedCollege.email}</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="bg-stone-50 border-t p-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-stone-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Last Profile Audit: {selectedCollege.lastVerifiedDate || 'July 2026'}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={selectedCollege.website}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white border border-stone-300 hover:bg-stone-100 rounded-xl text-xs font-black text-stone-700 shadow-xs flex items-center gap-1 transition"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCollege.admissionPortalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-[#370617] hover:bg-stone-900 rounded-xl text-xs font-black text-[#FFD54A] shadow-xs flex items-center gap-1 transition"
                  >
                    <span>Apply Now (Official)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD54A]" />
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
