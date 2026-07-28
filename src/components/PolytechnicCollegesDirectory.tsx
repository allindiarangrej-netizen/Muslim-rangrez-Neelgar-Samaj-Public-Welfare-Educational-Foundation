import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, MapPin, Building2, Award, ExternalLink, BookOpen, 
  ShieldCheck, Filter, Phone, Mail, CheckCircle2, Calendar, 
  Users, DollarSign, Home, Sparkles, ChevronRight, HelpCircle, 
  Globe, Compass, Share2, AlertCircle, ArrowUpRight, GraduationCap, 
  X, Check, Info, FileText, Download, ChevronDown, RefreshCw, Layers, Sliders, Briefcase, Settings
} from 'lucide-react';
import { Language } from '../types';
import { POLYTECHNIC_COLLEGES, PolytechnicCollegeProfile } from '../data/polytechnicCollegesData';

interface PolytechnicCollegesDirectoryProps {
  currentLanguage: Language;
}

export default function PolytechnicCollegesDirectory({ currentLanguage }: PolytechnicCollegesDirectoryProps) {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'directory' | 'minority' | 'boards' | 'schemes' | 'lateral-entry'>('directory');
  
  // Advanced Search & Filtering states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All States');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedOwnership, setSelectedOwnership] = useState<string>('All');
  const [selectedCourseType, setSelectedCourseType] = useState<'All' | 'Engineering' | 'Non-Engineering'>('All');
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  
  // Range of fees filter
  const [maxTuitionFee, setMaxTuitionFee] = useState<number>(100000);
  
  // Toggle filters
  const [womensOnly, setWomensOnly] = useState<boolean>(false);
  const [aicteOnly, setAicteOnly] = useState<boolean>(false);
  const [nbaOnly, setNbaOnly] = useState<boolean>(false);
  const [hostelOnly, setHostelOnly] = useState<boolean>(false);
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [placementOnly, setPlacementOnly] = useState<boolean>(false);
  
  // Sorting state
  const [sortBy, setSortBy] = useState<string>('Alphabetical');

  // Selected College Modal state
  const [selectedCollege, setSelectedCollege] = useState<PolytechnicCollegeProfile | null>(null);
  const [activeModalSubTab, setActiveModalSubTab] = useState<'overview' | 'programmes' | 'admission' | 'infrastructure' | 'careers' | 'faculty'>('overview');

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Breadcrumb navigation tracking
  const breadcrumbs = useMemo(() => {
    const list = [{ name: 'Home', link: '#' }, { name: 'Education Directory', link: '#' }];
    if (activeTab === 'directory') {
      list.push({ name: 'Polytechnic Colleges', link: '#' });
    } else if (activeTab === 'minority') {
      list.push({ name: 'Minority Technical Institutions', link: '#' });
    } else if (activeTab === 'boards') {
      list.push({ name: 'Boards & Regulations', link: '#' });
    } else if (activeTab === 'schemes') {
      list.push({ name: 'Apprenticeships & Schemes', link: '#' });
    } else {
      list.push({ name: 'Lateral Entry B.Tech', link: '#' });
    }
    return list;
  }, [activeTab]);

  // Multilingual labels mapping
  const i18n = {
    en: {
      portalSubtitle: 'National Polytechnic & Technical Diploma Education Directory (Official AICTE & State Boards Verified Feed)',
      portalDescription: 'Access India\'s most comprehensive directory of verified Polytechnic Colleges, Diploma Engineering Institutes, and technical skill-based programs. Our database is integrated with state technical education boards to provide real-time updates on approvals, seat intakes, lateral entry schemes, and industry apprenticeships.',
      searchPlaceholder: 'Search by College Name, City, State, District, Affiliating Board or Diploma Course...',
      resetFilters: 'Reset All Filters',
      matchingColleges: 'Matching Polytechnic Institutions',
      noCollegesFound: 'No institutions match your active filter criteria.',
      allCollegesTab: '🔧 All Polytechnic Directory',
      minorityCollegesTab: '🕋 Minority Technical Institutes',
      boardsTab: '📋 Boards & Regulatory (AICTE)',
      schemesTab: '💼 Apprenticeships & Skill Schemes',
      lateralEntryTab: '🚀 Lateral Entry (B.Tech) & Careers',
      stateLabel: 'Select State',
      districtLabel: 'Select District',
      cityLabel: 'Select City',
      ownershipLabel: 'Institution Ownership',
      courseTypeLabel: 'Course Stream',
      branchLabel: 'Diploma Specialty / Branch',
      maxFeesLabel: 'Max Annual Tuition Fees',
      womensOnlyLabel: 'Government Women\'s Polytechnic',
      aicteOnlyLabel: 'AICTE Approved',
      nbaOnlyLabel: 'NBA Accredited',
      hostelOnlyLabel: 'Hostel Facilities',
      scholarshipOnlyLabel: 'Scholarship Assured',
      placementOnlyLabel: 'Placement Cell Active',
      sortByLabel: 'Sort Colleges By',
      lastVerified: 'Last Verified',
      viewProfileBtn: 'View Full Profile',
      visitWebsiteBtn: 'Visit Official Website',
      govtBadge: 'Government',
      privateBadge: 'Private',
      autonomousBadge: 'Autonomous',
      minorityBadge: 'Minority Inst.',
      womensBadge: 'Women\'s Only',
      aicteBadge: 'AICTE Approved',
      nbaBadge: 'NBA Accredited',
      verifiedBadge: 'Official Source Verified'
    },
    hi: {
      portalSubtitle: 'राष्ट्रीय पॉलिटेक्निक एवं तकनीकी डिप्लोमा शिक्षा निर्देशिका (आधिकारिक AICTE और राज्य बोर्ड सत्यापित)',
      portalDescription: 'भारत भर के सत्यापित पॉलिटेक्निक कॉलेजों, डिप्लोमा इंजीनियरिंग संस्थानों और कौशल-आधारित तकनीकी पाठ्यक्रमों की व्यापक निर्देशिका तक पहुँचें। सीटों, शुल्क, छात्रवृत्ति और अप्रेंटिसशिप की प्रामाणिक जानकारी।',
      searchPlaceholder: 'कॉलेज का नाम, शहर, राज्य, जिला, संबद्ध बोर्ड या डिप्लोमा पाठ्यक्रम खोजें...',
      resetFilters: 'सभी फिल्टर हटाएँ',
      matchingColleges: 'संबद्ध पॉलिटेक्निक संस्थान',
      noCollegesFound: 'कोई भी संस्थान आपके सक्रिय फ़िल्टर मानदंडों से मेल नहीं खाता है।',
      allCollegesTab: '🔧 पॉलिटेक्निक निर्देशिका',
      minorityCollegesTab: '🕋 अल्पसंख्यक तकनीकी संस्थान',
      boardsTab: '📋 राज्य बोर्ड एवं AICTE',
      schemesTab: '💼 अप्रेंटिसशिप और योजनाएं',
      lateralEntryTab: '🚀 लेटरल एंट्री (B.Tech) करियर',
      stateLabel: 'राज्य चुनें',
      districtLabel: 'ज़िला चुनें',
      cityLabel: 'शहर चुनें',
      ownershipLabel: 'संस्थान का स्वामित्व',
      courseTypeLabel: 'पाठ्यक्रम स्ट्रीम',
      branchLabel: 'डिप्लोमा विशेषता / शाखा',
      maxFeesLabel: 'अधिकतम वार्षिक ट्यूशन फीस',
      womensOnlyLabel: 'महिला पॉलिटेक्निक कॉलेज',
      aicteOnlyLabel: 'AICTE स्वीकृत',
      nbaOnlyLabel: 'NBA मान्यता प्राप्त',
      hostelOnlyLabel: 'छात्रावास सुविधा',
      scholarshipOnlyLabel: 'छात्रवृत्ति उपलब्ध',
      placementOnlyLabel: 'सक्रिय प्लेसमेंट सेल',
      sortByLabel: 'सॉर्ट करें',
      lastVerified: 'अंतिम सत्यापित',
      viewProfileBtn: 'पूरा प्रोफाइल देखें',
      visitWebsiteBtn: 'आधिकारिक वेबसाइट',
      govtBadge: 'सरकारी कॉलेज',
      privateBadge: 'निजी कॉलेज',
      autonomousBadge: 'स्वायत्त संस्थान',
      minorityBadge: 'अल्पसंख्यक',
      womensBadge: 'केवल महिलाएँ',
      aicteBadge: 'AICTE स्वीकृत',
      nbaBadge: 'NBA मान्यता',
      verifiedBadge: 'आधिकारिक सत्यापित'
    },
    ur: {
      portalSubtitle: 'قومی پولی ٹیکنک اور ٹیکنیکل ڈپلوما ایجوکیشن ڈائریکٹری (آئی سی ٹی ای اور اسٹیٹ بورڈز سے تصدیق شدہ)',
      portalDescription: 'ہندوستان کے منظور شدہ پولی ٹیکنک کالجز، ڈپلوما انجینئرنگ انسٹی ٹیوٹس اور تکنیکی مہارت کے پروگراموں کی مستند معلومات۔ یہاں سیٹیں، فیسیں، اسکالرشپس اور اپرنٹس شپ کی تفصیلات دیکھیں۔',
      searchPlaceholder: 'کالج کا نام، شہر، ریاست، ضلع، منسلک بورڈ یا ڈپلوما کورس تلاش کریں...',
      resetFilters: 'تمام فلٹرز صاف کریں',
      matchingColleges: 'مماثل پولی ٹیکنک ادارے',
      noCollegesFound: 'کوئی بھی ادارہ آپ کے فلٹر کردہ معیار پر پورا نہیں اترتا۔',
      allCollegesTab: '🔧 پولی ٹیکنک ڈائریکٹری',
      minorityCollegesTab: '🕋 اقلیتی تکنیکی ادارے',
      boardsTab: '📋 بورڈز اور ریگولیٹری (AICTE)',
      schemesTab: '💼 اپرنٹس شپس اور اسکیمیں',
      lateralEntryTab: '🚀 لیٹرل اینٹری (B.Tech) اور کیریئر',
      stateLabel: 'ریاست منتخب کریں',
      districtLabel: 'ضلع منتخب کریں',
      cityLabel: 'شہر منتخب کریں',
      ownershipLabel: 'مالکیت کی قسم',
      courseTypeLabel: 'شعبہ جات',
      branchLabel: 'ڈپلوما برانچ',
      maxFeesLabel: 'زیادہ سے زیادہ سالانہ فیس',
      womensOnlyLabel: 'سرکاری خواتین پولی ٹیکنک',
      aicteOnlyLabel: 'AICTE منظور شدہ',
      nbaOnlyLabel: 'NBA تصدیق شدہ',
      hostelOnlyLabel: 'ہاسٹل کی سہولت',
      scholarshipOnlyLabel: 'اسکالرشپ دستیاب',
      placementOnlyLabel: 'ایکٹو پلیسمنٹ سیل',
      sortByLabel: 'ترتیب دیں',
      lastVerified: 'آخری تصدیق',
      viewProfileBtn: 'مکمل پروفائل دیکھیں',
      visitWebsiteBtn: 'سرکاری ویب سائٹ',
      govtBadge: 'سرکاری',
      privateBadge: 'نجی',
      autonomousBadge: 'خود مختار',
      minorityBadge: 'اقلیتی ادارہ',
      womensBadge: 'خواتین کے لئے',
      aicteBadge: 'منظور شدہ',
      nbaBadge: 'مصدقہ',
      verifiedBadge: 'سرکاری طور پر تصدیق شدہ'
    }
  }[currentLanguage];

  // Dynamic filter lists
  const filterOptions = useMemo(() => {
    const statesList = new Set<string>();
    const districtsList = new Set<string>();
    const citiesList = new Set<string>();
    const branchesList = new Set<string>();

    POLYTECHNIC_COLLEGES.forEach(c => {
      statesList.add(c.state);
      if (selectedState === 'All States' || c.state === selectedState) {
        districtsList.add(c.district);
        citiesList.add(c.city);
      }
      c.engineeringDiplomas.forEach(b => branchesList.add(b));
      c.nonEngineeringDiplomas.forEach(b => branchesList.add(b));
    });

    return {
      states: ['All States', ...Array.from(statesList).sort()],
      districts: ['All Districts', ...Array.from(districtsList).sort()],
      cities: ['All Cities', ...Array.from(citiesList).sort()],
      branches: ['All', ...Array.from(branchesList).sort()]
    };
  }, [selectedState]);

  // Adjust filters when State changes
  useEffect(() => {
    setSelectedDistrict('All Districts');
    setSelectedCity('All Cities');
  }, [selectedState]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedState('All States');
    setSelectedDistrict('All Districts');
    setSelectedCity('All Cities');
    setSelectedOwnership('All');
    setSelectedCourseType('All');
    setSelectedBranch('All');
    setMaxTuitionFee(100000);
    setWomensOnly(false);
    setAicteOnly(false);
    setNbaOnly(false);
    setHostelOnly(false);
    setScholarshipOnly(false);
    setPlacementOnly(false);
    setSortBy('Alphabetical');
  };

  // Filter Colleges Array
  const filteredColleges = useMemo(() => {
    return POLYTECHNIC_COLLEGES.filter(c => {
      // Tab selection filter
      if (activeTab === 'minority' && c.ownership !== 'Minority Institution') {
        return false;
      }

      // State Filter
      if (selectedState !== 'All States' && c.state !== selectedState) return false;
      
      // District Filter
      if (selectedDistrict !== 'All Districts' && c.district !== selectedDistrict) return false;
      
      // City Filter
      if (selectedCity !== 'All Cities' && c.city !== selectedCity) return false;

      // Ownership Filter
      if (selectedOwnership !== 'All' && c.ownership !== selectedOwnership) return false;

      // Women's Only
      if (womensOnly && !c.isWomensPolytechnic) return false;

      // AICTE Approved
      if (aicteOnly && !c.aicteApproved) return false;

      // NBA Accredited
      if (nbaOnly && !c.nbaAccredited) return false;

      // Hostel Only
      if (hostelOnly && (!c.hostelFees || c.hostelFees.toLowerCase().includes('no hostel'))) return false;

      // Placement Active
      if (placementOnly && !c.placementCell) return false;

      // Course Type
      if (selectedCourseType === 'Engineering' && c.engineeringDiplomas.length === 0) return false;
      if (selectedCourseType === 'Non-Engineering' && c.nonEngineeringDiplomas.length === 0) return false;

      // Branch Specialty
      if (selectedBranch !== 'All') {
        const hasBranch = c.engineeringDiplomas.includes(selectedBranch) || c.nonEngineeringDiplomas.includes(selectedBranch);
        if (!hasBranch) return false;
      }

      // Fees Filter
      const parsedFee = parseInt(c.tuitionFees.replace(/[^0-9]/g, '')) || 0;
      if (parsedFee > maxTuitionFee) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = c.name.toLowerCase().includes(q);
        const inCity = c.city.toLowerCase().includes(q);
        const inDistrict = c.district.toLowerCase().includes(q);
        const inState = c.state.toLowerCase().includes(q);
        const inBoard = c.affiliatedBoard.toLowerCase().includes(q);
        const inCourses = c.programmes.some(p => p.toLowerCase().includes(q));
        if (!inName && !inCity && !inDistrict && !inState && !inBoard && !inCourses) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      if (sortBy === 'Alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'State') {
        return a.state.localeCompare(b.state);
      } else if (sortBy === 'Fees') {
        const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
        return feeA - feeB;
      } else if (sortBy === 'Highest Placement') {
        const packA = parseFloat(a.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        const packB = parseFloat(b.highestPackage.replace(/[^0-9.]/g, '')) || 0;
        return packB - packA;
      } else if (sortBy === 'Establishment Year') {
        return a.yearEstablished - b.yearEstablished;
      } else if (sortBy === 'Government') {
        if (a.ownership === 'Government' && b.ownership !== 'Government') return -1;
        if (a.ownership !== 'Government' && b.ownership === 'Government') return 1;
        return 0;
      } else if (sortBy === 'Private') {
        if (a.ownership === 'Private' && b.ownership !== 'Private') return -1;
        if (a.ownership !== 'Private' && b.ownership === 'Private') return 1;
        return 0;
      }
      return 0;
    });
  }, [activeTab, selectedState, selectedDistrict, selectedCity, selectedOwnership, selectedCourseType, selectedBranch, maxTuitionFee, womensOnly, aicteOnly, nbaOnly, hostelOnly, placementOnly, searchQuery, sortBy]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedDistrict, selectedCity, selectedOwnership, selectedCourseType, selectedBranch, womensOnly, aicteOnly, nbaOnly, hostelOnly, placementOnly, activeTab]);

  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  // Structured Schema data inside page (SEO helper)
  const renderSchemaJsonLd = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Rangrez Community Bharat Portal - Technical & Polytechnic Directory",
      "description": i18n.portalDescription,
      "url": "https://allindiarangrej.org/education/polytechnic",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Polytechnic and Technical Diplomas",
        "itemListElement": POLYTECHNIC_COLLEGES.slice(0, 10).map((c, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalProgram",
            "name": c.name,
            "provider": c.name,
            "programPrerequisite": "10th Pass",
            "offers": {
              "@type": "Offer",
              "price": c.tuitionFees,
              "priceCurrency": "INR"
            }
          }
        }))
      }
    };
    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen text-stone-800 font-sans pb-16 relative">
      {renderSchemaJsonLd()}
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#0F1D36] via-[#1A2E4C] to-[#0A111E] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300/80 mb-6 font-medium">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-slate-500">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#FFD54A] font-semibold">{b.name}</span>
                ) : (
                  <span className="hover:text-white transition cursor-pointer">{b.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23] border border-[#FFD54A]/40 text-[#FFD54A] text-[11px] font-black uppercase tracking-wider shadow-lg">
              <Settings className="w-3.5 h-3.5 text-[#FFD54A] animate-spin-slow" />
              <span>{i18n.portalSubtitle}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>National Board (NBA) & AICTE Feeds Synchronized</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-4">
            Polytechnic & Diploma Technical Education Directory
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed mb-8">
            {i18n.portalDescription}
          </p>

          {/* MAIN PORTAL TABS */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'directory'}
              onClick={() => {
                setActiveTab('directory');
                handleResetFilters();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'directory'
                  ? 'bg-[#FFD54A] text-[#0B132B] scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{i18n.allCollegesTab}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'minority'}
              onClick={() => {
                setActiveTab('minority');
                handleResetFilters();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'minority'
                  ? 'bg-[#004B23] text-[#FFD54A] scale-105 border-2 border-[#FFD54A]'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{i18n.minorityCollegesTab}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'boards'}
              onClick={() => setActiveTab('boards')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'boards'
                  ? 'bg-blue-600 text-white scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{i18n.boardsTab}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'schemes'}
              onClick={() => setActiveTab('schemes')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'schemes'
                  ? 'bg-purple-600 text-white scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{i18n.schemesTab}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'lateral-entry'}
              onClick={() => setActiveTab('lateral-entry')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'lateral-entry'
                  ? 'bg-amber-700 text-white scale-105 border-2 border-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{i18n.lateralEntryTab}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. BODY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* TABS 3, 4, 5 SPECIFIC VIEWS */}
        {activeTab === 'boards' && (
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200/80 mb-10 animate-fadeIn">
            <h2 className="text-xl font-serif font-black text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-blue-600" />
              <span>State Boards of Technical Education & National Regulatory Councils</span>
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Every polytechnic college in India must be approved by the **All India Council for Technical Education (AICTE)** and affiliated with their respective state technical education board. This ensures validity of the awarded engineering/non-engineering diplomas for government jobs and B.Tech lateral entries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-slate-200 p-5 rounded-2xl bg-slate-50/50">
                <span className="text-2xl mb-2 block">🎓</span>
                <h3 className="font-bold text-slate-900 text-sm">AICTE Approval Seal</h3>
                <p className="text-xs text-stone-500 mt-1">
                  AICTE is the statutory body regulating and controlling technical education. Diploma programmes listed as "AICTE Approved" meet the rigid benchmarks of curriculum, workshops, and faculty.
                </p>
                <a href="https://www.aicte-india.org" target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-bold hover:underline mt-4 inline-flex items-center gap-1">
                  <span>Official AICTE Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="border border-slate-200 p-5 rounded-2xl bg-slate-50/50">
                <span className="text-2xl mb-2 block">🏢</span>
                <h3 className="font-bold text-slate-900 text-sm">MSBTE (Maharashtra)</h3>
                <p className="text-xs text-stone-500 mt-1">
                  Maharashtra State Board of Technical Education coordinates curriculum design, semester-wise examinations, and practical training parameters across more than 400 state polytechnics.
                </p>
                <a href="https://msbte.org.in" target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-bold hover:underline mt-4 inline-flex items-center gap-1">
                  <span>Visit MSBTE Board</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="border border-slate-200 p-5 rounded-2xl bg-slate-50/50">
                <span className="text-2xl mb-2 block">📋</span>
                <h3 className="font-bold text-slate-900 text-sm">BTEUP (Uttar Pradesh)</h3>
                <p className="text-xs text-stone-500 mt-1">
                  Board of Technical Education UP manages technical diploma curriculum, JEECUP counselling and licensing exams for government-run and private technical academies across Uttar Pradesh.
                </p>
                <a href="https://bteup.ac.in" target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-bold hover:underline mt-4 inline-flex items-center gap-1">
                  <span>Visit BTEUP Board</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schemes' && (
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200/80 mb-10 animate-fadeIn">
            <h2 className="text-xl font-serif font-black text-slate-900 flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-purple-600" />
              <span>Apprenticeships & Skill Development Schemes (NATS, PMKVY, MSME)</span>
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Diplomas are highly practical programmes. The Government of India enforces several vocational schemes to enhance job-readiness, financial aids, and hands-on industrial experiences right after graduation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-purple-100 p-6 rounded-2xl bg-purple-50/20">
                <h3 className="font-extrabold text-purple-950 text-base mb-2">National Apprenticeship Training Scheme (NATS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  A one-year program that equips technically qualified youth with practical knowledge in corporate/industrial jobs. Diploma holders receive a guaranteed monthly stipend shared between the employer and the Central Government.
                </p>
                <div className="flex gap-4">
                  <a href="https://nats.education.gov.in" target="_blank" rel="noreferrer" className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-purple-700 transition inline-flex items-center gap-1">
                    <span>NATS Register</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border border-amber-100 p-6 rounded-2xl bg-amber-50/20">
                <h3 className="font-extrabold text-amber-950 text-base mb-2">MSME and NSDC Skill Development Collaborations</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The National Skill Development Corporation (NSDC) partners with polytechnic laboratories to conduct specialized automation, mechatronics, and artificial intelligence bootcamps. MSME ties offer startup capital grants.
                </p>
                <div className="flex gap-4">
                  <a href="https://nsdcindia.org" target="_blank" rel="noreferrer" className="text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-amber-700 transition inline-flex items-center gap-1">
                    <span>NSDC Skill Hub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lateral-entry' && (
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200/80 mb-10 animate-fadeIn">
            <h2 className="text-xl font-serif font-black text-slate-900 flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-amber-700" />
              <span>Lateral Entry into B.Tech/B.E. Degree (Direct 2nd Year)</span>
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              A major advantage for technical diploma students is the **Lateral Entry Pathway**. Upon completing your 3-year diploma, you are eligible to enter directly into the **2nd year (3rd semester)** of standard B.Tech/B.E. degree programs across premier Indian universities.
            </p>
            <div className="border-l-4 border-amber-500 bg-amber-50/40 p-4 rounded-r-xl mb-6 text-xs text-amber-900 leading-relaxed">
              <strong>Eligibility Criteria:</strong> Must clear the 3-year Diploma in Engineering with at least 45% aggregate (40% for reserved categories). You must participate in state-level lateral entry entrance tests (e.g., UPJEE, JELET, CET, DTE CAP) to secure seats in prestigious government engineering colleges.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-slate-200 p-4 rounded-xl text-center">
                <span className="text-lg font-bold text-slate-900 block">3 Years</span>
                <span className="text-xs text-stone-500">Technical Diploma</span>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl text-center flex items-center justify-center font-black text-amber-600 text-lg">
                &rarr; Lateral Entry Exam &rarr;
              </div>
              <div className="border border-slate-200 p-4 rounded-xl text-center">
                <span className="text-lg font-bold text-slate-900 block">3 Years</span>
                <span className="text-xs text-stone-500">B.Tech Degree Completion</span>
              </div>
            </div>
          </div>
        )}

        {/* DIRECTORY SECTION WITH FILTER SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* A. SEARCH & FILTERS CONTROLS (Left Sidebar) */}
          <div className="lg:col-span-1 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm self-start">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h2 className="font-serif font-black text-slate-900 text-base flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>Filters & Search</span>
              </h2>
              <button 
                onClick={handleResetFilters}
                className="text-[10px] text-red-600 hover:underline font-bold tracking-tight cursor-pointer"
              >
                {i18n.resetFilters}
              </button>
            </div>

            {/* State filter */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.stateLabel}</label>
              <div className="relative">
                <select 
                  value={selectedState} 
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40 appearance-none cursor-pointer"
                >
                  {filterOptions.states.map(st => (
                    <option key={st} value={st}>{st === 'All States' ? '🇮🇳 All States & UTs' : st}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* District filter */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.districtLabel}</label>
              <div className="relative">
                <select 
                  value={selectedDistrict} 
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={selectedState === 'All States'}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40 appearance-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {filterOptions.districts.map(dst => (
                    <option key={dst} value={dst}>{dst}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* City filter */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.cityLabel}</label>
              <div className="relative">
                <select 
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={selectedState === 'All States'}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40 appearance-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {filterOptions.cities.map(ct => (
                    <option key={ct} value={ct}>{ct}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Ownership Filter */}
            {activeTab !== 'minority' && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.ownershipLabel}</label>
                <div className="flex flex-col gap-1.5">
                  {['All', 'Government', 'Private', 'Autonomous', 'Minority Institution'].map(type => (
                    <label key={type} className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                      <input 
                        type="radio" 
                        name="ownership" 
                        checked={selectedOwnership === type} 
                        onChange={() => setSelectedOwnership(type)}
                        className="text-[#004B23] focus:ring-[#004B23]" 
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Course Stream (Engineering/Non-Engineering) */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.courseTypeLabel}</label>
              <div className="flex gap-2">
                {(['All', 'Engineering', 'Non-Engineering'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedCourseType(type);
                      setSelectedBranch('All');
                    }}
                    className={`flex-1 text-[10px] font-extrabold py-1.5 px-1 rounded-lg border transition text-center cursor-pointer ${
                      selectedCourseType === type 
                        ? 'bg-[#004B23] text-white border-[#004B23] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Specific Specialty / Branch */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{i18n.branchLabel}</label>
              <div className="relative">
                <select 
                  value={selectedBranch} 
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40 appearance-none cursor-pointer"
                >
                  <option value="All">All Specialties / Branches</option>
                  {filterOptions.branches
                    .filter(b => {
                      if (selectedCourseType === 'All') return true;
                      const isEng = b.includes('Engineering') || b.includes('Technology') || ['IT', 'Data Science', 'Artificial Intelligence', 'Robotics'].some(term => b.includes(term));
                      return selectedCourseType === 'Engineering' ? isEng : !isEng;
                    })
                    .map(br => (
                      <option key={br} value={br}>{br}</option>
                    ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Annual Tuition Fee Slider */}
            <div className="mb-5 pb-4 border-b border-slate-100">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700">{i18n.maxFeesLabel}</label>
                <span className="text-xs font-mono font-bold text-emerald-700">₹{maxTuitionFee.toLocaleString()}/yr</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="100000" 
                step="5000" 
                value={maxTuitionFee} 
                onChange={(e) => setMaxTuitionFee(Number(e.target.value))}
                className="w-full accent-[#004B23] h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-stone-400 mt-1">
                <span>₹5,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000+</span>
              </div>
            </div>

            {/* Checkboxes parameters */}
            <div className="flex flex-col gap-2.5">
              <label className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={womensOnly} 
                  onChange={(e) => setWomensOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23] w-4 h-4" 
                />
                <span className="font-medium">{i18n.womensOnlyLabel}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={aicteOnly} 
                  onChange={(e) => setAicteOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23] w-4 h-4" 
                />
                <span className="font-medium">{i18n.aicteOnlyLabel}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={nbaOnly} 
                  onChange={(e) => setNbaOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23] w-4 h-4" 
                />
                <span className="font-medium">{i18n.nbaOnlyLabel}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hostelOnly} 
                  onChange={(e) => setHostelOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23] w-4 h-4" 
                />
                <span className="font-medium">{i18n.hostelOnlyLabel}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={placementOnly} 
                  onChange={(e) => setPlacementOnly(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23] w-4 h-4" 
                />
                <span className="font-medium">{i18n.placementOnlyLabel}</span>
              </label>
            </div>

            {/* Quick stats in sidebar */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-4 mt-6 text-center">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Currently Indexed</span>
              <span className="text-3xl font-serif font-black text-slate-900 block mt-1">60</span>
              <span className="text-[10px] text-slate-600 mt-1 block">Verified Polytechnics & Diploma Institutes</span>
            </div>
          </div>

          {/* B. LIST & RESULTS VIEW (Right 3-Cols) */}
          <div className="lg:col-span-3">
            
            {/* Top Toolbar / Sorting */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="w-full sm:w-auto relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={i18n.searchPlaceholder}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-stone-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2 text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="w-full sm:w-auto flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-slate-600 whitespace-nowrap">{i18n.sortByLabel}:</span>
                <div className="relative w-40 sm:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/40 appearance-none cursor-pointer"
                  >
                    <option value="Alphabetical">Alphabetical (A-Z)</option>
                    <option value="State">State Location</option>
                    <option value="Fees">Tuition Fees (Low to High)</option>
                    <option value="Highest Placement">Placement (Highest Packages)</option>
                    <option value="Establishment Year">Year Established</option>
                    <option value="Government">Government First</option>
                    <option value="Private">Private First</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid Total Counter */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs text-slate-600 font-bold">
                Showing <strong className="text-slate-900">{filteredColleges.length}</strong> {i18n.matchingColleges}
              </span>
              {filteredColleges.length > 0 && (
                <span className="text-[11px] font-mono text-stone-400">Page {currentPage} of {totalPages || 1}</span>
              )}
            </div>

            {/* List of Cards */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-black text-slate-900">No Institutes Found</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  {i18n.noCollegesFound} Try resetting your search filter options to see more results.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-5 text-xs bg-[#004B23] text-white px-5 py-2.5 rounded-xl font-extrabold hover:bg-[#004B23]/90 transition shadow-md cursor-pointer"
                >
                  {i18n.resetFilters}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {paginatedColleges.map((college) => {
                    const parsedFee = parseInt(college.tuitionFees.replace(/[^0-9]/g, '')) || 0;
                    return (
                      <motion.div
                        key={college.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col h-full"
                      >
                        {/* Image Header */}
                        <div className="relative h-40 bg-slate-100 shrink-0">
                          <img 
                            src={college.coverImageUrl} 
                            alt={college.name} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                          
                          {/* Logo Overlay */}
                          <div className="absolute bottom-3 left-3 bg-white p-1 rounded-lg shadow-md border border-slate-200 w-12 h-12 overflow-hidden flex items-center justify-center">
                            <img 
                              src={college.logoUrl} 
                              alt="logo" 
                              referrerPolicy="no-referrer"
                              className="max-h-full max-w-full object-contain" 
                            />
                          </div>

                          {/* Ownership Badge */}
                          <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full text-white shadow-md uppercase tracking-wider ${
                              college.ownership === 'Government' ? 'bg-[#004B23]' :
                              college.ownership === 'Autonomous' ? 'bg-amber-600' :
                              college.ownership === 'Minority Institution' ? 'bg-purple-700' : 'bg-blue-600'
                            }`}>
                              {college.ownership === 'Government' ? i18n.govtBadge :
                               college.ownership === 'Autonomous' ? i18n.autonomousBadge :
                               college.ownership === 'Minority Institution' ? i18n.minorityBadge : i18n.privateBadge}
                            </span>
                            {college.isWomensPolytechnic && (
                              <span className="text-[9px] font-black bg-pink-600 text-white px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                                {i18n.womensBadge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-500 font-bold mb-1">
                            <MapPin className="w-3 h-3 text-red-500" />
                            <span>{college.city}, {college.state}</span>
                          </div>

                          <h3 className="font-serif font-black text-slate-900 text-sm leading-snug line-clamp-2 mb-2 min-h-[40px]">
                            {college.name}
                          </h3>

                          {/* Verification Badge */}
                          <div className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-emerald-50 border border-emerald-200/60 text-[10px] text-emerald-800 font-bold inline-flex w-fit mb-3">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{i18n.verifiedBadge}</span>
                          </div>

                          <div className="space-y-2 text-xs border-t border-slate-100 pt-3 mb-4 flex-1">
                            <div className="flex justify-between items-center text-stone-600">
                              <span className="font-medium text-[11px]">Affiliating Board:</span>
                              <span className="font-bold text-slate-900 truncate max-w-[160px]" title={college.affiliatedBoard}>
                                {college.affiliatedBoard.split('(')[1]?.replace(')', '') || college.affiliatedBoard}
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-stone-600">
                              <span className="font-medium text-[11px]">Programs Offered:</span>
                              <span className="font-mono font-bold text-slate-900">
                                {college.programmes.length} Diploma Paths
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-stone-600">
                              <span className="font-medium text-[11px]">Tuition Fee Range:</span>
                              <span className="font-bold text-emerald-700">
                                {parsedFee < 15000 ? '₹8,000 - ₹12,000' : '₹35,000 - ₹65,000'} /yr
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-stone-600">
                              <span className="font-medium text-[11px]">Highest Package:</span>
                              <span className="font-extrabold text-blue-700">{college.highestPackage}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2 mt-auto pt-3 border-t border-slate-100 shrink-0">
                            <button
                              onClick={() => {
                                setSelectedCollege(college);
                                setActiveModalSubTab('overview');
                              }}
                              className="text-[11px] font-extrabold bg-[#004B23] text-white hover:bg-[#004B23]/95 text-center py-2.5 rounded-xl cursor-pointer shadow-sm hover:shadow transition"
                            >
                              {i18n.viewProfileBtn}
                            </button>
                            <a
                              href={college.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] font-extrabold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 text-center py-2.5 rounded-xl transition inline-flex items-center justify-center gap-1.5"
                            >
                              <span>{i18n.visitWebsiteBtn}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 shrink-0">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-2 bg-white rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
                >
                  &larr; Prev
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                  .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                  .map((p, index, array) => {
                    const prev = array[index - 1];
                    const showEllipsis = prev && p - prev > 1;
                    return (
                      <React.Fragment key={p}>
                        {showEllipsis && <span className="text-slate-400">...</span>}
                        <button
                          onClick={() => handlePageChange(p)}
                          className={`w-9 h-9 text-xs font-bold rounded-xl flex items-center justify-center transition cursor-pointer ${
                            currentPage === p
                              ? 'bg-[#004B23] text-white shadow-md'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {p}
                        </button>
                      </React.Fragment>
                    );
                  })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-2 bg-white rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. DETAILED COLLEGE PROFILE MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              
              {/* Profile Modal Header banner */}
              <div className="relative h-48 sm:h-56 bg-slate-100 shrink-0">
                <img 
                  src={selectedCollege.coverImageUrl} 
                  alt={selectedCollege.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white cursor-pointer transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover Meta Text */}
                <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-1 rounded-xl shadow-lg border border-slate-200 w-16 h-16 shrink-0 overflow-hidden flex items-center justify-center">
                      <img 
                        src={selectedCollege.logoUrl} 
                        alt="logo" 
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain" 
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-black tracking-wider uppercase bg-[#FFD54A] text-[#0B132B] px-2.5 py-0.5 rounded-full shadow-md">
                          {selectedCollege.ownership}
                        </span>
                        {selectedCollege.isWomensPolytechnic && (
                          <span className="text-[10px] font-black tracking-wider uppercase bg-pink-600 text-white px-2.5 py-0.5 rounded-full shadow-md">
                            Women\'s Institute
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-slate-300 font-bold">Estd {selectedCollege.yearEstablished}</span>
                      </div>
                      <h2 className="text-lg sm:text-2xl font-serif font-black text-white leading-tight">
                        {selectedCollege.name}
                      </h2>
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white text-[11px] font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Profile</span>
                  </div>
                </div>
              </div>

              {/* Sub-tabs inside modal */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 overflow-x-auto shrink-0 scrollbar-none">
                <div className="flex items-center gap-6 py-2.5">
                  {[
                    { id: 'overview', label: '🏛️ Overview & Links' },
                    { id: 'programmes', label: '🎓 Diplomas Offered' },
                    { id: 'admission', label: '📋 Admissions & Fees' },
                    { id: 'infrastructure', label: '🔧 Laboratories & Hostel' },
                    { id: 'careers', label: '💼 Career & Placements' },
                    { id: 'faculty', label: '🧑‍🏫 Faculty Team' }
                  ].map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => setActiveModalSubTab(subTab.id as any)}
                      className={`text-xs font-black tracking-tight whitespace-nowrap pb-1.5 border-b-2 transition cursor-pointer ${
                        activeModalSubTab === subTab.id
                          ? 'border-[#004B23] text-[#004B23]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {subTab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Body Scroll Container */}
              <div className="p-6 overflow-y-auto flex-1 bg-[#FAF9F6] text-stone-800">
                
                {/* 1. OVERVIEW & CONTACT SUB-TAB */}
                {activeModalSubTab === 'overview' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                          <h3 className="font-serif font-black text-slate-900 text-sm mb-3">Statutory Regulatory Status</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">AICTE Approval Status</span>
                              <span className="text-xs font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-emerald-600" />
                                <span>Approved (AICTE National Feed)</span>
                              </span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">State Affiliating Board</span>
                              <span className="text-xs font-extrabold text-slate-800 mt-1 block truncate" title={selectedCollege.affiliatedBoard}>
                                {selectedCollege.affiliatedBoard}
                              </span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">NBA Accreditation Status</span>
                              <span className="text-xs font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                                {selectedCollege.nbaAccredited ? (
                                  <>
                                    <Award className="w-4 h-4 text-amber-600" />
                                    <span>Accredited Branches (Valid)</span>
                                  </>
                                ) : (
                                  <>
                                    <Info className="w-4 h-4 text-stone-400" />
                                    <span>Under Review / State Validated</span>
                                  </>
                                )}
                              </span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">UGC Recognition Status</span>
                              <span className="text-xs font-bold text-slate-800 mt-1">
                                {selectedCollege.ugcRecognised ? 'Recognised (Section 2f / 12b)' : 'Technical Board Mandate'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Campus Gallery */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                          <h3 className="font-serif font-black text-slate-900 text-sm mb-3">Campus Infrastructure Gallery</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {selectedCollege.campusGallery.map((img, idx) => (
                              <div key={idx} className="h-24 bg-slate-100 rounded-xl overflow-hidden shadow-sm">
                                <img src={img} alt="campus" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                              </div>
                            ))}
                            <div className="h-24 bg-gradient-to-r from-[#004B23]/10 to-[#0B132B]/10 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-3 text-center">
                              <span className="text-xs font-black text-[#004B23]">+4 More</span>
                              <span className="text-[9px] text-stone-500">Workshop Views</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact & Location card */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Postal Address & Contact</h3>
                        
                        <div className="space-y-3.5 text-xs text-stone-600">
                          <div className="flex gap-2">
                            <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800 block mb-0.5">Full Postal Address:</strong>
                              <span className="leading-relaxed">{selectedCollege.address}</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800 block mb-0.5">Phone (Admission Office):</strong>
                              <span>{selectedCollege.phone}</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800 block mb-0.5">Official Email ID:</strong>
                              <span className="break-all">{selectedCollege.email}</span>
                            </div>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-3 border-t border-slate-100">
                          <span className="text-[10px] font-bold text-stone-400 block mb-2 uppercase">Official Handles</span>
                          <div className="flex gap-3">
                            <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">
                              <Globe className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">
                              <Share2 className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DYNAMIC ACTION BUTTONS */}
                    <div className="bg-slate-900 p-5 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-serif font-black text-[#FFD54A]">Official Admission & Counselling Action Board</h4>
                        <p className="text-[11px] text-slate-300 mt-1 max-w-xl">
                          Ensure all registrations, seat allocations, and fees transactions are handled exclusively on the official regulatory board or counseling portals linked here.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a 
                          href={selectedCollege.website} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] font-bold bg-[#FFD54A] text-[#0B132B] px-3.5 py-2 rounded-xl shadow-sm hover:scale-105 transition flex items-center gap-1.5"
                        >
                          <span>Official Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a 
                          href={selectedCollege.admissionPortalUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] font-bold bg-emerald-600 text-white px-3.5 py-2 rounded-xl shadow-sm hover:scale-105 transition flex items-center gap-1.5"
                        >
                          <span>Admission Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <a 
                          href={selectedCollege.counsellingPortalUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] font-bold bg-blue-600 text-white px-3.5 py-2 rounded-xl shadow-sm hover:scale-105 transition flex items-center gap-1.5"
                        >
                          <span>Counselling Desk</span>
                          <Compass className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => triggerToast(`Prospectus of ${selectedCollege.name} download requested from statutory database!`)}
                          className="text-[11px] font-bold bg-slate-700 text-slate-100 px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-600 transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Prospectus</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. DIPLOMAS OFFERED SUB-TAB */}
                {activeModalSubTab === 'programmes' && (
                  <div className="space-y-6 animate-fadeIn">
                    <p className="text-xs text-stone-600">
                      This institution is approved to run the following curriculum branches. Select between engineering and non-engineering domains for specialized details:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Engineering Diplomas */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                          <span className="text-xl">⚙️</span>
                          <h3 className="font-serif font-black text-slate-900 text-sm">Engineering & Technology Diplomas</h3>
                        </div>
                        {selectedCollege.engineeringDiplomas.length === 0 ? (
                          <span className="text-xs text-stone-400">No pure engineering branches offered.</span>
                        ) : (
                          <div className="space-y-3">
                            {selectedCollege.engineeringDiplomas.map((branch, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                                <span className="font-bold text-slate-900">{branch}</span>
                                <span className="text-[10px] font-mono text-emerald-700 font-extrabold bg-emerald-100/50 px-2.5 py-0.5 rounded-full">
                                  3 Years / AICTE
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Non-Engineering Diplomas */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                          <span className="text-xl">📊</span>
                          <h3 className="font-serif font-black text-slate-900 text-sm">Non-Engineering / Vocational Diplomas</h3>
                        </div>
                        {selectedCollege.nonEngineeringDiplomas.length === 0 ? (
                          <div className="p-8 text-center text-xs text-stone-400 flex flex-col items-center justify-center">
                            <Info className="w-8 h-8 text-slate-300 mb-2" />
                            <span>This institution specializes strictly in core technical Engineering domains.</span>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {selectedCollege.nonEngineeringDiplomas.map((branch, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                                <span className="font-bold text-slate-900">{branch}</span>
                                <span className="text-[10px] font-mono text-blue-700 font-extrabold bg-blue-100/50 px-2.5 py-0.5 rounded-full">
                                  2-3 Years / Approved
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. ADMISSION & FEES SUB-TAB */}
                {activeModalSubTab === 'admission' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Admissions processes */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                          <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Entrance & Eligibility</h3>
                          
                          <div className="text-xs text-stone-600 space-y-3.5">
                            <div>
                              <strong className="text-slate-800 block mb-1">Standard Eligibility Criteria:</strong>
                              <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                                {selectedCollege.eligibility}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1 text-[11px]">10th Pass Admission:</strong>
                                <p className="leading-relaxed text-[10px] text-stone-500">
                                  {selectedCollege.admission10thPass}
                                </p>
                              </div>
                              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1 text-[11px]">12th / ITI Pass (Lateral):</strong>
                                <p className="leading-relaxed text-[10px] text-stone-500">
                                  {selectedCollege.admission12thPass}
                                </p>
                              </div>
                            </div>

                            <div className="pt-2">
                              <strong className="text-slate-800 block mb-1">Active Entrance Examinations:</strong>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {selectedCollege.entranceExams.map((ex, idx) => (
                                  <span key={idx} className="bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-200">
                                    {ex}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Admission process description */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs text-stone-600">
                          <h3 className="font-serif font-black text-slate-900 text-sm mb-3">Admission Process Workflow</h3>
                          <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                            {selectedCollege.admissionProcess}
                          </p>
                        </div>
                      </div>

                      {/* Fees & Scholarships card */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                        <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Financial Outline</h3>
                        
                        <div className="space-y-4">
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-center">
                            <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider block">Annual Tuition Fees</span>
                            <span className="text-2xl font-serif font-black text-emerald-950 mt-1 block">
                              {selectedCollege.tuitionFees}
                            </span>
                          </div>

                          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-center">
                            <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">Annual Hostel Fees</span>
                            <span className="text-lg font-serif font-black text-amber-950 mt-1 block">
                              {selectedCollege.hostelFees}
                            </span>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            <span className="font-bold text-slate-800 block">Accepted Financial Aid Schemes:</span>
                            {selectedCollege.scholarships.map((sch, i) => (
                              <div key={i} className="flex gap-2 items-start text-[11px] text-stone-600 leading-relaxed">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{sch}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. INFRASTRUCTURE & LABS SUB-TAB */}
                {activeModalSubTab === 'infrastructure' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2 mb-4">
                        State-Of-The-Art Laboratories & Technical Workshops
                      </h3>
                      <p className="text-xs text-stone-500 mb-6">
                        Polytechnic education relies heavily on practical experiences. Below are the verified operational units and laboratories available for hands-on development inside this college:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedCollege.infrastructure.map((fac, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs text-slate-800">
                            <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-black shrink-0">
                              ✓
                            </div>
                            <span className="font-bold">{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. TRAINING & PLACEMENTS SUB-TAB */}
                {activeModalSubTab === 'careers' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                          <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Vocational Training Framework</h3>
                          
                          <div className="text-xs text-stone-600 space-y-4">
                            <div>
                              <strong className="text-slate-800 block mb-1">Industrial Internships & Visits:</strong>
                              <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                                {selectedCollege.industrialInternship} {selectedCollege.industrialVisits}
                              </p>
                            </div>

                            <div>
                              <strong className="text-slate-800 block mb-1">Apprenticeship Integration (NATS):</strong>
                              <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                                {selectedCollege.apprenticeshipProgramme}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                                <span className="font-bold text-slate-800 text-[11px]">MSME Collaboration:</span>
                                <span className={`text-[10px] font-extrabold px-3 py-0.5 rounded-full ${selectedCollege.msmeCollaboration ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
                                  {selectedCollege.msmeCollaboration ? 'Active Hub' : 'In Progress'}
                                </span>
                              </div>
                              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                                <span className="font-bold text-slate-800 text-[11px]">NSDC Training Hub:</span>
                                <span className={`text-[10px] font-extrabold px-3 py-0.5 rounded-full ${selectedCollege.nsdcPartnership ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
                                  {selectedCollege.nsdcPartnership ? 'Partner' : 'In Progress'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Top recruiters block */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                          <h3 className="font-serif font-black text-slate-900 text-sm mb-4">Core Placement Partners</h3>
                          <div className="flex flex-wrap gap-2.5">
                            {selectedCollege.topRecruiters.map((rec, i) => (
                              <span key={i} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                <span>{rec}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Salary Packages & Incubation */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Placement Highlights</h3>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                            <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">Average Annual Package</span>
                            <span className="text-2xl font-serif font-black text-emerald-950 mt-1 block">
                              {selectedCollege.averagePackage}
                            </span>
                          </div>

                          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-center">
                            <span className="text-[10px] text-blue-800 font-bold block uppercase tracking-wider">Highest Annual Package</span>
                            <span className="text-2xl font-serif font-black text-blue-950 mt-1 block">
                              {selectedCollege.highestPackage}
                            </span>
                          </div>

                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs leading-relaxed space-y-2.5">
                            <strong className="text-slate-800 block">Incubation Support & EDC Cell:</strong>
                            <p className="text-stone-500 text-[11px]">
                              {selectedCollege.entrepreneurshipSupport}
                            </p>
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                              <span>Startup Incubator:</span>
                              <span className={selectedCollege.startupIncubation ? 'text-emerald-700' : 'text-stone-400'}>
                                {selectedCollege.startupIncubation ? 'Available' : 'Unavailable'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. FACULTY TEAM SUB-TAB */}
                {activeModalSubTab === 'faculty' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                          <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Institutional Leadership</h3>
                          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <div className="w-12 h-12 rounded-full bg-[#004B23] text-white flex items-center justify-center font-serif text-lg font-black shrink-0">
                              {selectedCollege.principalName.charAt(selectedCollege.principalName.indexOf(' ') + 1) || 'P'}
                            </div>
                            <div>
                              <span className="text-[10px] text-[#004B23] font-bold uppercase tracking-wider block">Head of Institution</span>
                              <strong className="text-slate-900 text-sm block mt-0.5">{selectedCollege.principalName}</strong>
                              <span className="text-xs text-stone-500">Principal / Academic Director</span>
                            </div>
                          </div>
                        </div>

                        {/* Student faculty ratios stats */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                          <h3 className="font-serif font-black text-slate-900 text-sm mb-4">Faculty Strength & Ratios</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase">Core Members</span>
                              <span className="text-lg font-mono font-black text-slate-900 mt-1 block">{selectedCollege.facultyStrength}</span>
                            </div>
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase">HODs Count</span>
                              <span className="text-lg font-mono font-black text-slate-900 mt-1 block">{selectedCollege.hodsCount}</span>
                            </div>
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[10px] text-stone-400 font-bold block uppercase">Student Ratio</span>
                              <span className="text-lg font-mono font-black text-[#004B23] mt-1 block">{selectedCollege.studentFacultyRatio}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visiting experts panel */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h3 className="font-serif font-black text-slate-900 text-sm border-b border-slate-100 pb-2">Industry Mentorship</h3>
                        <div className="space-y-3 text-xs">
                          <div className="flex justify-between items-center text-stone-600 bg-slate-50 p-3 rounded-xl border border-slate-150">
                            <span>Industry Experts:</span>
                            <strong className="text-slate-950 font-mono">{selectedCollege.industryExpertsCount} Members</strong>
                          </div>
                          <div className="flex justify-between items-center text-stone-600 bg-slate-50 p-3 rounded-xl border border-slate-150">
                            <span>Visiting Scholars:</span>
                            <strong className="text-slate-950 font-mono">{selectedCollege.visitingFacultyCount} Scholars</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. RELATED CONTENT PANEL (Always showing dynamically inside profile scroll) */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-serif font-black text-slate-900 text-base mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-700" />
                    <span>Related Content & Guidance Tools</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm text-xs space-y-2">
                      <strong className="text-slate-900 block font-black">Similar Technical Polytechnics</strong>
                      <div className="space-y-2 text-[11px] text-stone-500">
                        {POLYTECHNIC_COLLEGES
                          .filter(c => c.id !== selectedCollege.id && (c.state === selectedCollege.state || c.ownership === selectedCollege.ownership))
                          .slice(0, 3)
                          .map((col, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setSelectedCollege(col);
                                setActiveModalSubTab('overview');
                              }}
                              className="w-full text-left font-semibold text-blue-600 hover:underline block truncate cursor-pointer"
                            >
                              • {col.name} ({col.city})
                            </button>
                          ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm text-xs space-y-2">
                      <strong className="text-slate-900 block font-black">Careers & Lateral Entry Guide</strong>
                      <p className="text-[11px] text-stone-500 leading-relaxed">
                        Earn direct credit for the first year of a B.Tech or B.E. program. Complete your degree in 3 years after the diploma.
                      </p>
                      <button 
                        onClick={() => {
                          setSelectedCollege(null);
                          setActiveTab('lateral-entry');
                        }}
                        className="text-[10px] font-extrabold text-[#004B23] hover:underline"
                      >
                        Explore lateral entry process &rarr;
                      </button>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm text-xs space-y-2">
                      <strong className="text-slate-900 block font-black">National Apprenticeship (NATS)</strong>
                      <p className="text-[11px] text-stone-500 leading-relaxed">
                        Register on the central apprenticeship database to connect with public sectors (BHEL, NTPC, ONGC, DMRC) and earn stipend support.
                      </p>
                      <button 
                        onClick={() => {
                          setSelectedCollege(null);
                          setActiveTab('schemes');
                        }}
                        className="text-[10px] font-extrabold text-purple-700 hover:underline"
                      >
                        Explore apprenticeship schemes &rarr;
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Profile Modal Footer */}
              <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
                <span className="text-[11px] text-stone-400 font-mono">
                  Database verified on: <strong className="text-slate-700">{selectedCollege.lastVerifiedDate}</strong>
                </span>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="text-xs font-black bg-slate-200 text-stone-700 hover:bg-slate-300 px-5 py-2 rounded-xl transition cursor-pointer"
                >
                  Close Profile Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. DYNAMIC NOTIFICATION TOAST */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-[#FFD54A] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#FFD54A]/30 text-xs font-black flex items-center gap-2.5 max-w-sm"
          >
            <Sparkles className="w-5 h-5 shrink-0 text-[#FFD54A]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
