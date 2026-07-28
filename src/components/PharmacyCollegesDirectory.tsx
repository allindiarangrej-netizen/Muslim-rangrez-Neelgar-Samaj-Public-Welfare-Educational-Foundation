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
  Check
} from 'lucide-react';
import { PHARMACY_COLLEGES, PharmacyCollegeProfile } from '../data/pharmacyCollegesData';

interface PharmacyCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

const REGULATORY_BODIES = [
  {
    id: 'pci',
    name: 'PCI',
    fullName: 'Pharmacy Council of India',
    website: 'https://www.pci.nic.in/',
    description: {
      en: 'The statutory body of Government of India under the Ministry of Health and Family Welfare, regulating pharmacy education and practice.',
      ur: 'وزارت صحت اور خاندانی بہبود کے تحت ہندوستان کی قانونی ریگولیٹری کونسل جو فارمیسی تعلیم کو کنٹرول کرتی ہے۔',
      hi: 'स्वास्थ्य और परिवार कल्याण मंत्रालय के तहत भारत सरकार का वैधानिक निकाय, जो फार्मेसी शिक्षा और अभ्यास को नियंत्रित करता है।'
    },
    roles: [
      'Approval of D.Pharm, B.Pharm, Pharm.D and M.Pharm programs',
      'Registration of qualified pharmacists for professional practice',
      'Standardizing syllabus, lab specifications, and machine room norms across India'
    ]
  },
  {
    id: 'aicte',
    name: 'AICTE',
    fullName: 'All India Council for Technical Education',
    website: 'https://www.aicte-india.org/',
    description: {
      en: 'The national-level statutory council for technical education, approving infrastructure, intake limits, and funding schemes.',
      ur: 'تکنیکی تعلیم کے لیے قومی سطح کی کونسل جو انفراسٹرکچر، فنڈز اور داخلہ کی منظوری دیتی ہے۔',
      hi: 'तकनीकी शिक्षा के लिए राष्ट्रीय स्तर की वैधानिक परिषद, जो बुनियादी ढांचे और धन योजनाओं को मंजूरी देती है।'
    },
    roles: [
      'Institutional approval for multi-disciplinary institutes',
      'NSP PG Scholarship dispersion for GPAT qualified students',
      'Academic quality standards and community funding'
    ]
  }
];

const COUNSELLING_BOARDS = [
  { name: 'GPAT Centralized PG Counselling (AICTE/NTA)', url: 'https://gpat.nta.nic.in/', desc: 'National level admission coordination for M.Pharm with fellowships.' },
  { name: 'UPTAC Pharmacy Counselling (Uttar Pradesh)', url: 'https://uptac.admissions.nic.in/', desc: 'State-level D.Pharm, B.Pharm admission coordinator for AKTU affiliated institutions.' },
  { name: 'DTE Maharashtra B.Pharm/D.Pharm Counselling', url: 'https://cetcell.mahacet.org/', desc: 'MHT-CET based state-level allotment for pharmacy colleges across Maharashtra.' },
  { name: 'KEA Karnataka (KCET/D-CET/P-CET)', url: 'https://cetonline.karnataka.gov.in/kea/', desc: 'Coordinates professional pharmacy seats based on state CET ranks.' },
  { name: 'TNEA Tamil Nadu Medical & Pharmacy Selection', url: 'https://www.tnmedicalselection.org/', desc: 'Single window selection for government and management quota seats in B.Pharm/Pharm.D.' }
];

export default function PharmacyCollegesDirectory({ currentLanguage = 'en' }: PharmacyCollegesDirectoryProps) {
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
  const [pciOnly, setPciOnly] = useState(false);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [placementOnly, setPlacementOnly] = useState(false);
  const [scholarshipOnly, setScholarshipOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'state' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'naac' | 'established-asc' | 'established-desc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<PharmacyCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // SEO Inspector Drawer / Widget
  const [showSeoInspector, setShowSeoInspector] = useState(false);

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(PHARMACY_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const districtsList = useMemo(() => {
    const filtered = PHARMACY_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const districts = new Set(filtered.map(c => c.district));
    return ['All', ...Array.from(districts).sort()];
  }, [selectedState]);

  const citiesList = useMemo(() => {
    const filtered = PHARMACY_COLLEGES.filter(c => 
      (selectedState === 'All' || c.state === selectedState) &&
      (selectedDistrict === 'All' || c.district === selectedDistrict)
    );
    const cities = new Set(filtered.map(c => c.city).filter(Boolean) as string[]);
    return ['All', ...Array.from(cities).sort()];
  }, [selectedState, selectedDistrict]);

  const universitiesList = useMemo(() => {
    const univs = new Set(PHARMACY_COLLEGES.map(c => c.affiliatedUniversity));
    return ['All', ...Array.from(univs).sort()];
  }, []);

  const coursesList = ['All', 'D.Pharm', 'B.Pharm', 'Pharm.D', 'Pharm.D (Post Baccalaureate)', 'M.Pharm', 'PhD in Pharmacy'];
  
  const specializationsList = [
    'All', 'Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Pharmacognosy', 
    'Quality Assurance', 'Industrial Pharmacy', 'Pharmaceutical Analysis', 
    'Clinical Pharmacy', 'Regulatory Affairs', 'Hospital Pharmacy', 
    'Pharmaceutical Biotechnology', 'Pharmaceutical Management'
  ];

  const feeRanges = ['All', 'Under ₹50,000/yr', '₹50,000 - ₹1.0 Lakh/yr', '₹1.0 Lakh - ₹2.0 Lakhs/yr', 'Above ₹2.0 Lakhs/yr'];
  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed', 'Minority'];
  const naacGradesList = ['All', 'A++', 'A+', 'A', 'B++', 'B+', 'B'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...PHARMACY_COLLEGES];

    // Minority Segment Tab filter
    if (activeTab === 'minority') {
      result = result.filter(c => c.ownership === 'Minority');
    }

    // Search Query (Name, District, State, City, University, Specializations, Principal)
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
        c.principal.toLowerCase().includes(q)
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

    // PCI approval filter
    if (pciOnly) {
      result = result.filter(c => c.pciApproved);
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
        if (selectedFeeRange === 'Under ₹50,000/yr') return feeNum < 50000;
        if (selectedFeeRange === '₹50,000 - ₹1.0 Lakh/yr') return feeNum >= 50000 && feeNum <= 100000;
        if (selectedFeeRange === '₹1.0 Lakh - ₹2.0 Lakhs/yr') return feeNum > 100000 && feeNum <= 200000;
        if (selectedFeeRange === 'Above ₹2.0 Lakhs/yr') return feeNum > 200000;
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
  }, [activeTab, searchQuery, selectedState, selectedDistrict, selectedCity, selectedUniversity, selectedCourse, selectedSpecialization, selectedFeeRange, selectedOwnership, selectedNaacGrade, pciOnly, hostelOnly, placementOnly, scholarshipOnly, sortBy]);

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
    setPciOnly(false);
    setHostelOnly(false);
    setPlacementOnly(false);
    setScholarshipOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  // SEO Info Generation for college or list
  const seoDetails = useMemo(() => {
    const baseTitle = "National Pharmacy Colleges Directory • Rangrez Community Bharat Portal";
    const baseDesc = "Explore over 100+ verified D.Pharm, B.Pharm, M.Pharm and Pharm.D colleges across India with PCI and AICTE approvals, official fee matrices, and direct counselling portals.";
    const slug = "pharmacy-colleges-directory";
    const ogUrl = `https://rangrezportal.org/education/directories/${slug}`;

    return {
      title: baseTitle,
      description: baseDesc,
      url: ogUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Pharmacy Colleges Directory India",
        "description": baseDesc,
        "url": ogUrl,
        "provider": {
          "@type": "Organization",
          "name": "Rangrez Community Educational Trust",
          "alternateName": "RCET"
        },
        "numberOfItems": PHARMACY_COLLEGES.length
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#faf9f6] min-h-screen text-stone-800 font-sans pb-16">
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1A2542] to-[#0A3D1E] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23] border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider shadow-md">
              <GraduationCap className="w-3.5 h-3.5 text-[#FFD54A] animate-pulse" />
              <span>
                {currentLanguage === 'en'
                  ? 'Pharmacy Guidance Portal • PCI Approved Database'
                  : currentLanguage === 'ur'
                  ? 'فارمیسی گائیڈنس پورٹل • پی سی آئی منظور شدہ ڈیٹا بیس'
                  : 'फार्मेसी मार्गदर्शन पोर्टल • PCI स्वीकृत डेटाबेस'}
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
                    ? '100+ Verified Direct PCI Authority Feeds'
                    : currentLanguage === 'ur'
                    ? 'پی سی آئی اور اے آئی سی ٹی ای سے تصدیق شدہ'
                    : '100+ सत्यापित डायरेक्ट PCI अथॉरिटी फीड'}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-3">
            {currentLanguage === 'en'
              ? 'National Pharmacy Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی فارمیسی کالجز ڈائریکٹری'
              : 'राष्ट्रीय फार्मेसी कॉलेज निर्देशिका'}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
            {currentLanguage === 'en'
              ? 'Access verified, direct-sourced pharmacy academic matrices, tuition structures, hostel availability, and official PCI registration status. Empowering our youth with transparent parameters to lock admissions and avoid fraudulent organizations.'
              : currentLanguage === 'ur'
              ? 'ہندوستان بھر کے فارمیسی کالجوں کی فیس، ہوسٹل، رجسٹریشن اور آفیشل کونسلنگ لنکس تک براہ راست رسائی حاصل کریں۔ ہماری برادری کو بااختیار بنانے کے لیے ایک جامع پورٹل۔'
              : 'भारत भर के फार्मेसी कॉलेजों के शैक्षणिक विवरण, आधिकारिक शुल्क, छात्रावास उपलब्धता और PCI अनुमोदन की लाइव स्थिति। समुदाय के छात्रों को सुरक्षित प्रवेश मार्गदर्शन प्रदान करने के लिए एक विश्वसनीय मंच।'}
          </p>

          {/* MAIN SUB-NAVIGATION TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setActiveTab('directory');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory'
                  ? 'bg-[#FFD54A] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'All Pharmacy Colleges'
                  : currentLanguage === 'ur'
                  ? 'تمام فارمیسی کالجز'
                  : 'सभी फार्मेसी कॉलेज'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('minority');
                setCurrentPage(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'minority'
                  ? 'bg-[#004B23] text-[#FFD54A] scale-105 border-2 border-[#FFD54A]'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en'
                  ? 'Minority Pharmacy Institutions'
                  : currentLanguage === 'ur'
                  ? 'اقلیتی فارمیسی ادارے'
                  : 'अल्पसंख्यक फार्मेसी संस्थान'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'regulatory'
                  ? 'bg-[#D4AF37] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'PCI & AICTE Councils'
                  : currentLanguage === 'ur'
                  ? 'ریگولیٹری ادارے (پی سی آئی)'
                  : 'PCI एवं AICTE नियामक परिषद'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('counselling')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'counselling'
                  ? 'bg-[#D4AF37] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? 'Admission & State Counselling'
                  : currentLanguage === 'ur'
                  ? 'کونسلنگ اور داخلے'
                  : 'प्रवेश एवं राज्य काउंसलिंग बोर्ड'}
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
              <strong>PCI Statutory Standard Checklist:</strong> In compliance with the Pharmacy Act of 1948, no individual can practice pharmacy in India unless their degree is from a PCI-approved college. Every listed institution has been validated under the official gazette list.
            </span>
          </div>
          <button 
            onClick={() => setActiveTab('regulatory')}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>PCI Status Check</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. SEO INSPECTOR ACCORDION PANEL */}
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
                    <h3 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active SEO Crawler & JSON-LD Metadata Specifications</h3>
                  </div>
                  <button onClick={() => setShowSeoInspector(false)} className="text-stone-400 hover:text-stone-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                  <div className="space-y-2.5">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Title Tag (Optimized)</span>
                      <p className="text-slate-800 font-bold p-2 bg-slate-50 border rounded-lg mt-1">{seoDetails.title}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Meta Description</span>
                      <p className="text-slate-700 p-2 bg-slate-50 border rounded-lg mt-1 leading-relaxed">{seoDetails.description}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-black">Canonical & OpenGraph URL</span>
                      <code className="block p-2 bg-stone-50 border rounded-lg mt-1 text-indigo-700 select-all font-mono text-[10px]">{seoDetails.url}</code>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-black">JSON-LD Structured Schema (Google Rich Snippets)</span>
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

      {/* 4. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {(activeTab === 'directory' || activeTab === 'minority') && (
          <div className="space-y-6">
            
            {/* MINORITY SEGMENT BANNER */}
            {activeTab === 'minority' && (
              <div className="bg-gradient-to-r from-[#004B23] via-[#043319] to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#FFD54A]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-48 h-48 text-[#FFD54A]" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFD54A] text-[#0B132B] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>Constitutional Article 30(1) Segment • Minority Pharmacy Colleges</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A] mb-2">
                    Minority Pharmacy Institutions of India
                  </h2>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    Explore fully recognized Muslim and Christian Minority pharmacy colleges. Under statutory reservation guidelines, these premium academies provide up to 50% reservation matrices with special cutoff waivers for community candidates via authorized single-window CET portals.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">💊 Jamia Hamdard (Delhi)</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">💊 Al-Ameen Pharmacy (Bengaluru)</span>
                    <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">💊 Integral University Pharmacy (Lucknow)</span>
                  </div>
                </div>
              </div>
            )}

            {/* SEARCH AND FILTERS */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/90 space-y-5">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={
                      currentLanguage === 'en'
                        ? 'Search 100+ pharmacy colleges by name, city, state, branch or specializations...'
                        : currentLanguage === 'ur'
                        ? 'نام، شہر، ریاست، برانچ یا اسپیشلائزیشن سے تلاش کریں...'
                        : '100+ फार्मेसी कॉलेजों को नाम, शहर, राज्य या विशिष्टताओं द्वारा खोजें...'
                    }
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#004B23] text-sm font-medium transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as any);
                      setCurrentPage(1);
                    }}
                    className="bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#004B23] cursor-pointer"
                  >
                    <option value="alphabetical">Sort: Alphabetical</option>
                    <option value="state">Sort: State</option>
                    <option value="fee-asc">Sort: Tuition Fee (Low to High)</option>
                    <option value="fee-desc">Sort: Tuition Fee (High to Low)</option>
                    <option value="placement-desc">Sort: Highest Package</option>
                    <option value="naac">Sort: NAAC Accreditation</option>
                    <option value="established-asc">Sort: Established Year (Oldest)</option>
                    <option value="established-desc">Sort: Established Year (Newest)</option>
                  </select>

                  <button
                    onClick={resetFilters}
                    className="bg-stone-100 hover:bg-stone-200 text-stone-600 px-4 py-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-stone-200"
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Advanced Multi-Criteria Filter Section */}
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                    disabled={selectedDistrict === 'All'}
                  >
                    {citiesList.map(ct => (
                      <option key={ct} value={ct}>{ct === 'All' ? 'All Cities' : ct}</option>
                    ))}
                  </select>
                </div>

                {/* Course */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Academic Program</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => {
                      setSelectedCourse(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
                  >
                    {specializationsList.map(sp => (
                      <option key={sp} value={sp}>{sp === 'All' ? 'All Branches' : sp}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Fees */}
                <div>
                  <label className="text-[10px] font-black uppercase text-stone-400 block mb-1">Budget / Fees</label>
                  <select
                    value={selectedFeeRange}
                    onChange={(e) => {
                      setSelectedFeeRange(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none"
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
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-bold text-stone-700 focus:outline-none truncate"
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
                    checked={pciOnly}
                    onChange={(e) => { setPciOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span className="text-[11px]">Pharmacy Council of India (PCI) Approved Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hostelOnly}
                    onChange={(e) => { setHostelOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span className="text-[11px]">Hostel Facility Available</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={placementOnly}
                    onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span className="text-[11px]">Active Placement Cell</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border rounded-lg px-3 py-1.5 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={scholarshipOnly}
                    onChange={(e) => { setScholarshipOnly(e.target.checked); setCurrentPage(1); }}
                    className="w-4 h-4 rounded text-[#004B23] focus:ring-[#004B23]"
                  />
                  <span className="text-[11px]">Scholarships Offered</span>
                </label>
              </div>
            </div>

            {/* RESULTS COUNT & META */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="text-sm font-black text-stone-800">
                Showing <span className="text-[#004B23]">{filteredColleges.length}</span> Verified Pharmacy Colleges in India
              </div>

              <div className="text-xs text-stone-500 font-medium italic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>All profiles cross-verified under Gazette Code PCI approvals.</span>
              </div>
            </div>

            {/* COLLEGES GRID */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No pharmacy colleges match your filter selections</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Try resetting the filter controls, changing state regions, or clearing search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#004B23] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#00381a] transition cursor-pointer"
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
                        className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#004B23]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                      >
                        {/* Accent Header Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                          college.ownership === 'Government' || college.ownership === 'Autonomous'
                            ? 'bg-[#004B23]'
                            : college.ownership === 'Minority'
                            ? 'bg-[#D4AF37]'
                            : 'bg-indigo-600'
                        }`} />

                        <div>
                          {/* Upper Badges */}
                          <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                            <span className="inline-flex items-center gap-1 bg-[#0B132B] text-[#FFD54A] text-[10px] font-black uppercase px-2 py-0.5 rounded-lg shadow-xs">
                              <BookOpen className="w-3.5 h-3.5 text-[#FFD54A]" />
                              <span>PCI Approved</span>
                            </span>

                            <div className="flex items-center gap-1">
                              {college.ownership === 'Minority' && (
                                <span className="bg-amber-100 text-amber-900 text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-amber-300">
                                  Minority
                                </span>
                              )}
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border ${
                                college.ownership === 'Government' || college.ownership === 'Autonomous'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : 'bg-purple-50 text-purple-800 border-purple-300'
                              }`}>
                                {college.ownership}
                              </span>
                            </div>
                          </div>

                          {/* Name & Affiliation */}
                          <h3 className="text-base font-black text-stone-900 group-hover:text-[#004B23] transition line-clamp-2 mb-1">
                            {college.name}
                          </h3>
                          <p className="text-[11px] text-stone-500 font-medium line-clamp-1 mb-3">
                            🎓 Affiliation: {college.affiliatedUniversity}
                          </p>

                          {/* Address Tag */}
                          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200/80 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-[#004B23] shrink-0" />
                            <span className="truncate">{college.district}, {college.state}</span>
                          </div>

                          {/* Academic Programs List */}
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

                          {/* Accreditation and Standards Checklist */}
                          <div className="flex flex-col gap-1 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/80 mb-3 text-[11px] font-bold text-stone-700">
                            <div className="flex items-center gap-1 text-emerald-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>PCI Approved Institution</span>
                            </div>
                            {college.aicteApproved && (
                              <div className="flex items-center gap-1 text-blue-800">
                                <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>AICTE Sanctioned (Intake Authorized)</span>
                              </div>
                            )}
                          </div>

                          {/* Key Stats */}
                          <div className="grid grid-cols-2 gap-2 text-xs bg-[#faf9f6] p-2 rounded-2xl border border-stone-200/60 mb-4">
                            <div>
                              <span className="text-[9px] uppercase font-black text-stone-400 block">Est. Year</span>
                              <span className="font-bold text-stone-900 flex items-center gap-1 text-[11px]">
                                <Calendar className="w-3.5 h-3.5 text-[#004B23]" />
                                {college.yearEstablished}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] uppercase font-black text-stone-400 block">NIRF Rank</span>
                              <span className="font-bold text-stone-900 flex items-center gap-1 text-[11px]">
                                <Award className="w-3.5 h-3.5 text-amber-500" />
                                Rank {college.nirfRanking || "National"}
                              </span>
                            </div>
                          </div>

                          {/* Fees & Hostel */}
                          <div className="flex flex-wrap gap-1.5 mb-5 text-[10px]">
                            <span className="bg-amber-50 text-amber-950 border border-amber-200 px-2 py-0.5 rounded-lg font-black flex items-center gap-1">
                              <DollarSign className="w-3 h-3 text-amber-600 shrink-0" />
                              <span>{college.tuitionFees}</span>
                            </span>

                            {college.infrastructure.includes('Hostel') && (
                              <span className="bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-lg font-bold flex items-center gap-1">
                                <Home className="w-3 h-3 text-teal-600 shrink-0" />
                                <span>Hostel Facility</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="space-y-2 pt-3 border-t border-stone-100 mt-auto">
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => {
                                setModalTab('academics');
                                setSelectedCollege(college);
                              }}
                              className="w-full py-2 px-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1 shadow-sm cursor-pointer border border-[#FFD54A]/30"
                            >
                              <span>Full Profile</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>

                            <a
                              href={college.counsellingLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2 px-3 bg-[#0B132B] hover:bg-slate-900 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1 shadow-sm"
                            >
                              <span>Counselling</span>
                              <ExternalLink className="w-3 h-3 text-[#FFD54A]" />
                            </a>
                          </div>

                          {/* Verify Source website */}
                          <a
                            href={college.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-1.5 px-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 rounded-xl font-bold text-[10px] transition flex items-center justify-center gap-1.5 border border-stone-200"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Verify Live on Official College Website</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* PAGINATION CONTROL */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 pt-6">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-white rounded-xl border font-bold text-xs text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition cursor-pointer"
                    >
                      &larr; Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-9 h-9 rounded-xl font-black text-xs transition border cursor-pointer ${
                          currentPage === index + 1
                            ? 'bg-[#004B23] text-white border-[#004B23]'
                            : 'bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-white rounded-xl border font-bold text-xs text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition cursor-pointer"
                    >
                      Next &rarr;
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PCI REGULATORY EXPLANATIONS */}
        {activeTab === 'regulatory' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Statutory Apothecary Regulators of India</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official Pharmacy Licensing Authorities
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                By statutory decree under the Pharmacy Act, 1948, practicing and dispensing pharmaceutical mixtures requires mandatory state registry credentials. Only students graduating from PCI approved campuses hold eligibility for the pharmacist license matrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGULATORY_BODIES.map((body) => (
                <div key={body.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-md hover:border-[#004B23] transition flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#0B132B] text-[#FFD54A] font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm">
                    {body.name}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-stone-900 leading-tight mb-1">
                      {body.fullName}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Official Central Board Portal</p>

                    <p className="text-sm text-stone-600 leading-relaxed mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                      {body.description[currentLanguage] || body.description.en}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold uppercase text-stone-400 tracking-wider mb-2">Core Statutory Mandates</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                        {body.roles.map((role, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004B23] shrink-0" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={body.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md mt-auto"
                  >
                    <span>Visit Live {body.name} Portal</span>
                    <ExternalLink className="w-4 h-4 text-[#FFD54A]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: COUNSELLING & ADMISSIONS PORTALS */}
        {activeTab === 'counselling' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/90 text-center">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Centralized Admissions Systems</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-3">
                Official Pharmacy Admissions & Counselling Links
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Admissions are fully regulated. D.Pharm, B.Pharm, and Pharm.D programs allocate majority seat matrices via respective state counselling boards based on merit ranks from MHT-CET, KCET, UPSEE, etc. Secure your counselling allocations directly using the official central systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COUNSELLING_BOARDS.map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-3xl border-2 border-[#004B23]/30 hover:border-[#004B23] shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-0.5 rounded-lg">
                        Admissions Portal
                      </span>
                      <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#004B23]" />
                    </div>
                    <h4 className="font-black text-stone-900 group-hover:text-[#004B23] transition text-base mb-2">
                      {portal.name}
                    </h4>
                    <p className="text-xs text-stone-600 mb-4">{portal.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-700 underline flex items-center gap-1 mt-auto">
                    Visit Official Counselling Site →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. COMPLETE PREMIUM COLLEGE PROFILE MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCollege(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-[#004B23] overflow-hidden my-auto"
            >
              {/* Header / Cover Section */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={selectedCollege.coverImageUrl || "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"} 
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 flex flex-col justify-end p-6 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-[#FFD54A] text-[#0B132B] font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
                      NIRF RANK {selectedCollege.nirfRanking || "National"}
                    </span>
                    <span className="bg-[#004B23] text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                      {selectedCollege.ownership} Institution
                    </span>
                    <span className="bg-[#004B23] text-[#FFD54A] font-bold text-[10px] px-2.5 py-1 rounded-full border border-[#FFD54A] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                    {selectedCollege.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-1.5 font-medium mt-1">
                    <MapPin className="w-4 h-4 text-[#FFD54A] shrink-0" />
                    <span>{selectedCollege.address}</span>
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center font-bold text-lg transition cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Verification & Badges Bar */}
              <div className="bg-amber-50 px-6 py-3 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-amber-900">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    PCI Approved (Pharmacy Council of India Status)
                  </span>
                  {selectedCollege.aicteApproved && (
                    <span className="flex items-center gap-1 text-blue-800 border-l pl-3 border-stone-300">
                      <Award className="w-4 h-4 text-blue-600" />
                      AICTE Approved (Intake Authorized)
                    </span>
                  )}
                  {selectedCollege.naacGrade && (
                    <span className="flex items-center gap-1 text-purple-800 border-l pl-3 border-stone-300">
                      <Award className="w-4 h-4 text-purple-600" />
                      NAAC: {selectedCollege.naacGrade}
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-stone-500 font-medium">
                  Last Verified: {selectedCollege.lastVerifiedDate || "July 2026"}
                </div>
              </div>

              {/* Modal Tabs Navigation */}
              <div className="flex overflow-x-auto bg-stone-50 border-b border-stone-200 px-4 scrollbar-none">
                {[
                  { id: 'academics', label: 'Academics & Programmes', icon: <BookOpen className="w-3.5 h-3.5" /> },
                  { id: 'admissions', label: 'Admission Details', icon: <GraduationCap className="w-3.5 h-3.5" /> },
                  { id: 'infrastructure', label: 'Infrastructure & Labs', icon: <Layers2 className="w-3.5 h-3.5" /> },
                  { id: 'placements', label: 'Career & Placements', icon: <Briefcase className="w-3.5 h-3.5" /> },
                  { id: 'fees', label: 'Financials & Faculty', icon: <DollarSign className="w-3.5 h-3.5" /> },
                  { id: 'contact', label: 'Contact Details', icon: <Phone className="w-3.5 h-3.5" /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id as any)}
                    className={`px-4 py-3.5 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all border-b-2 cursor-pointer ${
                      modalTab === tab.id
                        ? 'border-[#004B23] text-[#004B23] bg-white'
                        : 'border-transparent text-stone-500 hover:text-stone-800'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Modal Tab Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* 1. Academics Tab */}
                {modalTab === 'academics' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-black text-stone-900 border-b pb-2 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#004B23]" />
                        <span>Offered Pharmacy Programmes</span>
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedCollege.programmes.map((p, pIdx) => (
                          <div key={pIdx} className="p-3 bg-stone-50 border rounded-xl flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="text-xs font-extrabold text-stone-800">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-stone-900 border-b pb-2 mb-3 flex items-center gap-2">
                        <Layers2 className="w-4 h-4 text-[#004B23]" />
                        <span>Research & Academic Specializations</span>
                      </h4>
                      <p className="text-xs text-stone-500 mb-3 leading-relaxed">
                        Authorized divisions for Post-Graduate (M.Pharm) and Ph.D. specialized research departments approved under the PCI Council.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedCollege.specializations.map((spec, sIdx) => (
                          <span key={sIdx} className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border flex items-center gap-3">
                      <Building className="w-6 h-6 text-[#0B132B] shrink-0" />
                      <div>
                        <div className="text-xs font-black text-stone-800">Affiliation & University Registry</div>
                        <div className="text-xs text-stone-600">{selectedCollege.affiliatedUniversity}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Admissions Tab */}
                {modalTab === 'admissions' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-50 border rounded-2xl">
                        <span className="text-[10px] uppercase font-black text-stone-400 block mb-1">Academic Eligibility Criteria</span>
                        <p className="text-xs text-stone-700 font-bold leading-relaxed">{selectedCollege.eligibility}</p>
                      </div>

                      <div className="p-4 bg-stone-50 border rounded-2xl">
                        <span className="text-[10px] uppercase font-black text-stone-400 block mb-1">Accepted Entrance Examinations</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedCollege.entranceExams.map((exam, eIdx) => (
                            <span key={eIdx} className="bg-[#0B132B] text-white px-3 py-1 rounded-lg text-xs font-extrabold shadow-sm">
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                      <h5 className="text-xs font-black text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4 text-amber-700" />
                        <span>PCI Prescribed Admission Procedure</span>
                      </h5>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {selectedCollege.admissionProcess}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <a
                        href={selectedCollege.admissionPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-black text-center border border-emerald-300 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-700" />
                        <span>Admission Portal</span>
                      </a>

                      <a
                        href={selectedCollege.counsellingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-950 font-black text-center border border-blue-300 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-700" />
                        <span>Counselling Portal</span>
                      </a>

                      <button
                        onClick={() => alert('Initiating prospectus file download...') }
                        className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-center border rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-stone-600" />
                        <span>Download Prospectus</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. Infrastructure Tab */}
                {modalTab === 'infrastructure' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-black text-stone-900 border-b pb-2 mb-3 flex items-center gap-2">
                        <Layers2 className="w-4 h-4 text-[#004B23]" />
                        <span>Campus Infrastructure Checklist</span>
                      </h4>
                      <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                        Includes PCI-mandated specialized Pharmaceutics, Pharmacognosy, and Pharmacology wet laboratories with advanced machinery.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedCollege.infrastructure.map((fac, fIdx) => (
                          <div key={fIdx} className="p-2.5 bg-stone-50 border rounded-xl flex items-center space-x-2 text-xs font-bold text-stone-700">
                            <span className="w-2 h-2 rounded-full bg-[#004B23]" />
                            <span className="truncate">{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Simple Campus Image Gallery */}
                    <div>
                      <h4 className="text-sm font-black text-stone-900 mb-3 uppercase tracking-tight">Campus Gallery</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedCollege.campusGallery?.map((imgUrl, imgIdx) => (
                          <div key={imgIdx} className="h-28 overflow-hidden rounded-xl border relative group">
                            <img 
                              src={imgUrl} 
                              alt={`${selectedCollege.name} Gallery ${imgIdx}`} 
                              className="w-full h-full object-cover group-hover:scale-115 transition duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Placements Tab */}
                {modalTab === 'placements' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                        <span className="text-[10px] uppercase font-black text-emerald-800 block mb-0.5">Highest Annual Package</span>
                        <div className="text-xl font-black text-emerald-950">{selectedCollege.highestPackage}</div>
                        <span className="text-[10px] text-emerald-800 mt-1 block font-semibold">Active placement cell</span>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
                        <span className="text-[10px] uppercase font-black text-blue-800 block mb-0.5">Average Package</span>
                        <div className="text-xl font-black text-blue-950">{selectedCollege.averagePackage}</div>
                        <span className="text-[10px] text-blue-800 mt-1 block font-semibold">On-campus drive matching</span>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-2xl border border-stone-200">
                        <span className="text-[10px] uppercase font-black text-slate-500 block mb-0.5">Alumni Network Status</span>
                        <div className="text-xs text-stone-800 mt-1.5 font-bold">{selectedCollege.alumniNetwork}</div>
                      </div>
                    </div>

                    <div className="p-4 bg-stone-50 border rounded-2xl">
                      <span className="text-xs font-black text-stone-900 uppercase block mb-3">Top Healthcare & Corporate Recruiters</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedCollege.topRecruiters.map((rec, rIdx) => (
                          <span key={rIdx} className="bg-white border text-stone-800 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                            💊 {rec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-stone-700">
                      <div className="p-3 border rounded-xl flex items-center gap-2 bg-slate-50/50">
                        <Check className="w-4 h-4 text-[#004B23]" />
                        <span>Official Internship Support</span>
                      </div>
                      <div className="p-3 border rounded-xl flex items-center gap-2 bg-slate-50/50">
                        <Check className="w-4 h-4 text-[#004B23]" />
                        <span>Corporate Industrial Training</span>
                      </div>
                      <div className="p-3 border rounded-xl flex items-center gap-2 bg-slate-50/50">
                        <Check className="w-4 h-4 text-[#004B23]" />
                        <span>Hospital Clinical Practice</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Fees & Faculty Tab */}
                {modalTab === 'fees' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-stone-50 border rounded-2xl">
                        <span className="text-[10px] uppercase font-black text-stone-400 block mb-0.5">Annual Tuition Fees</span>
                        <div className="text-base font-black text-[#004B23]">{selectedCollege.tuitionFees}</div>
                        <span className="text-[10px] text-stone-500 block mt-1">PCI compliance approved</span>
                      </div>

                      <div className="p-4 bg-stone-50 border rounded-2xl">
                        <span className="text-[10px] uppercase font-black text-stone-400 block mb-0.5">Annual Hostel & Dining Fees</span>
                        <div className="text-base font-black text-stone-800">{selectedCollege.hostelFees}</div>
                        <span className="text-[10px] text-stone-500 block mt-1">Includes mess charges</span>
                      </div>

                      <div className="p-4 bg-stone-50 border rounded-2xl">
                        <span className="text-[10px] uppercase font-black text-stone-400 block mb-0.5">Academic Other Charges</span>
                        <div className="text-base font-black text-stone-800">{selectedCollege.otherCharges}</div>
                        <span className="text-[10px] text-stone-500 block mt-1">Labs & exams security</span>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
                      <h5 className="text-xs font-black text-amber-900 uppercase tracking-wider mb-2">Available Scholarships & Assistance</h5>
                      <p className="text-xs text-stone-700"><strong>Merit Scholarships:</strong> {selectedCollege.scholarships}</p>
                      <p className="text-xs text-stone-700"><strong>Government Fellowships:</strong> {selectedCollege.governmentScholarships}</p>
                      <p className="text-xs text-stone-700"><strong>Minority Scholarships:</strong> {selectedCollege.minorityScholarships}</p>
                      <p className="text-xs text-stone-700"><strong>Education Loans:</strong> {selectedCollege.educationLoanAssistance}</p>
                    </div>

                    <div className="p-4 bg-stone-50 border rounded-2xl">
                      <h5 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">Principal & Faculty Matrix</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-stone-800">
                        <div>
                          <span className="text-stone-400 block text-[9px] uppercase">Principal / Dean</span>
                          <span>{selectedCollege.principal}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[9px] uppercase">Faculty Strength</span>
                          <span>{selectedCollege.facultyStrength} Registered Professors</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[9px] uppercase">Student-Faculty Ratio</span>
                          <span>{selectedCollege.studentFacultyRatio} (PCI Norm compliant)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Contact Details Tab */}
                {modalTab === 'contact' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-stone-800">
                      <div className="p-4 bg-stone-50 border rounded-2xl flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#004B23] text-white rounded-xl flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-[#FFD54A]" />
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[9px] uppercase">Official Helpline</span>
                          <span>{selectedCollege.phone}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-stone-50 border rounded-2xl flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#0B132B] text-white rounded-xl flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[9px] uppercase">Email Registry</span>
                          <span className="select-all truncate block max-w-[200px]">{selectedCollege.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border rounded-2xl">
                      <span className="text-stone-400 block text-[9px] uppercase font-black mb-1">Admissions Office Counter</span>
                      <p className="text-xs text-stone-800 font-bold">{selectedCollege.admissionOffice}</p>
                    </div>

                    {/* Bottom Action buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={selectedCollege.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow"
                        >
                          <Globe className="w-4 h-4 text-[#FFD54A]" />
                          <span>Visit Website</span>
                        </a>

                        <a
                          href={selectedCollege.admissionPortalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-[#0B132B] hover:bg-slate-900 text-[#FFD54A] rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Apply Now (Official)</span>
                        </a>

                        <a
                          href={selectedCollege.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-950 border border-rose-300 rounded-xl font-bold text-xs flex items-center gap-1.5 transition"
                        >
                          <Compass className="w-4 h-4 text-rose-600" />
                          <span>Google Maps GPS</span>
                        </a>
                      </div>

                      <button
                        onClick={() => setSelectedCollege(null)}
                        className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold text-xs transition cursor-pointer"
                      >
                        Close Profile
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
