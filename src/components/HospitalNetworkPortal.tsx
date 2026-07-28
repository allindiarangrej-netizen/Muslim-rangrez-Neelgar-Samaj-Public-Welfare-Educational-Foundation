import React, { useState } from 'react';
import {
  Hospital, Phone, MapPin, Stethoscope, Clock, HeartPulse, ShieldAlert,
  Search, Filter, Download, Printer, FileText, CheckCircle2, User,
  Calendar, AlertTriangle, ExternalLink, Activity, Award, Eye, Baby,
  Ambulance, Pill, Thermometer, ShieldCheck, Check, ChevronRight, X,
  Sparkles, Building2, Globe, Mail, Info, Heart, Layers, Cpu,
  HelpCircle, Plus, Edit, Trash2, RefreshCw, Radio, Lock, Map, Shield,
  Users, DollarSign, Share2, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import UniversalBackButton from './common/UniversalBackButton';
import { Language } from '../types';
import {
  HospitalFacility,
  DiseaseTreatmentGuide,
  HealthScheme,
  AYUSHFacility,
  FreeMedicineCenter,
  MASTER_HOSPITALS,
  DISEASE_TREATMENT_GUIDES,
  VERIFIED_HEALTH_SCHEMES,
  AYUSH_DIRECTORY,
  FREE_MEDICINE_CENTERS,
  EMERGENCY_HELPLINES_DATA,
  ORGAN_DONATION_GUIDE,
  SPECIALITY_OPTIONS,
  STATES_LIST,
  HOSPITAL_CATEGORIES
} from '../data/healthcareMasterData';

interface HospitalNetworkPortalProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function HospitalNetworkPortal({ currentLanguage, onNavigate }: HospitalNetworkPortalProps) {
  // Navigation Modules state
  const [activeSubTab, setActiveSubTab] = useState<
    | 'hospitals'
    | 'disease-guide'
    | 'schemes'
    | 'ayushman'
    | 'charitable-minority'
    | 'ayush'
    | 'free-medicine'
    | 'diagnostics'
    | 'dialysis'
    | 'mental-rehab'
    | 'organ-donation'
    | 'emergency'
    | 'ai-assistant'
    | 'admin'
  >('hospitals');

  // Master State for Hospitals & Facilities (supports runtime admin additions)
  const [hospitalsList, setHospitalsList] = useState<HospitalFacility[]>(MASTER_HOSPITALS);
  const [schemesList, setSchemesList] = useState<HealthScheme[]>(VERIFIED_HEALTH_SCHEMES);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSpeciality, setSelectedSpeciality] = useState('ALL');

  // Toggle Filters
  const [filterEmergencyOnly, setFilterEmergencyOnly] = useState(false);
  const [filterAyushmanOnly, setFilterAyushmanOnly] = useState(false);
  const [filterFreeTreatmentOnly, setFilterFreeTreatmentOnly] = useState(false);
  const [filterMinorityOnly, setFilterMinorityOnly] = useState(false);

  // Modals state
  const [selectedHospital, setSelectedHospital] = useState<HospitalFacility | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState<HospitalFacility | null>(null);
  const [showHealthCardModal, setShowHealthCardModal] = useState(false);

  // Appointment Form state
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    phone: '',
    age: '',
    gender: 'Male',
    preferredDate: '',
    department: 'General OPD',
    symptoms: '',
    welfareCardNumber: ''
  });
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // AI Assistant Quick Prompts state
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiIsLoading, setAiIsLoading] = useState(false);

  // Admin Panel State
  const [adminLoggedIn, setAdminLoggedIn] = useState(true);
  const [showAddHospitalModal, setShowAddHospitalModal] = useState(false);
  const [newHospitalForm, setNewHospitalForm] = useState<Partial<HospitalFacility>>({
    id: `HOSP-CUSTOM-${Date.now().toString().slice(-4)}`,
    name: { en: '', hi: '', ur: '' },
    type: 'Government Medical College',
    city: '',
    district: '',
    state: 'Delhi NCR',
    address: '',
    phone: '',
    emergencyNumber: '108',
    email: '',
    website: 'https://',
    opdTimings: { en: 'Mon - Sat: 9:00 AM to 2:00 PM', hi: 'सोम - शनि: सुबह 9 से 2', ur: 'پیر - ہفتہ: صبح 9 تا 2' },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    specialities: ['General Surgery', 'Pediatrics & Child Care'],
    doctorsAvailableCount: 50,
    beds: { total: 200, icu: { total: 20, available: 4 }, nicu: { total: 10, available: 2 }, general: { total: 150, available: 25 }, emergency: { total: 20, available: 5 } },
    concessions: {
      opd: { en: 'Free OPD', hi: 'मुफ्त ओपीडी', ur: 'مفت او پی ڈی' },
      ipd: { en: 'Subsidized', hi: 'रियायती', ur: 'رعایتی' },
      diagnostic: { en: '20% off', hi: '20% छूट', ur: '20% رعایت' },
      pharmacy: { en: '10% off', hi: '10% छूट', ur: '10% رعایت' }
    },
    nodalOfficer: { name: 'Dr. Officer', phone: '+91 98000-00000', email: 'nodal@hospital.org' },
    languagesSpoken: ['Hindi', 'English'],
    coverPhoto: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.8,
    reviewCount: 150,
    officialSource: 'Submitted via Admin Portal'
  });

  // Cities dynamically derived
  const cityList = ['ALL', ...Array.from(new Set(hospitalsList.map(h => h.city)))];

  // Filtering Logic
  const filteredHospitals = hospitalsList.filter(h => {
    const text = `${h.name.en} ${h.name.hi} ${h.name.ur} ${h.city} ${h.district} ${h.state} ${h.specialities.join(' ')} ${h.address} ${h.type}`.toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || text.includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'ALL' || h.state === selectedState;
    const matchesCity = selectedCity === 'ALL' || h.city === selectedCity;
    const matchesCategory =
      selectedCategory === 'ALL' ||
      (selectedCategory === 'Ayushman Bharat Empaneled' && h.ayushmanEmpaneled) ||
      (selectedCategory === 'Free / Subsidized Treatment' && h.freeTreatmentAvailable) ||
      (selectedCategory === 'Minority Healthcare Institution' && h.type === 'Minority Healthcare Institution') ||
      h.type === selectedCategory;

    const matchesSpeciality = selectedSpeciality === 'ALL' || h.specialities.some(s => s.toLowerCase().includes(selectedSpeciality.toLowerCase()));

    const matchesEmergency = !filterEmergencyOnly || h.emergency24x7;
    const matchesAyushman = !filterAyushmanOnly || h.ayushmanEmpaneled;
    const matchesFree = !filterFreeTreatmentOnly || h.freeTreatmentAvailable;
    const matchesMinority = !filterMinorityOnly || h.type === 'Minority Healthcare Institution';

    return matchesSearch && matchesState && matchesCity && matchesCategory && matchesSpeciality && matchesEmergency && matchesAyushman && matchesFree && matchesMinority;
  });

  // Handle Export
  const handleExport = (format: 'pdf' | 'excel') => {
    if (format === 'pdf') {
      window.print();
    } else {
      const csv =
        'data:text/csv;charset=utf-8,' +
        'ID,Hospital Name,City,State,Type,Ayushman,Emergency 24x7,Phone,Nodal Officer\n' +
        filteredHospitals
          .map(
            h =>
              `"${h.id}","${h.name.en}","${h.city}","${h.state}","${h.type}","${h.ayushmanEmpaneled ? 'YES' : 'NO'}","${
                h.emergency24x7 ? 'YES' : 'NO'
              }","${h.phone}","${h.nodalOfficer.name} (${h.nodalOfficer.phone})"`
          )
          .join('\n');
      const link = document.createElement('a');
      link.setAttribute('href', encodeURI(csv));
      link.setAttribute('download', `Rangrez_Healthcare_Directory_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Appointment Submission
  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `RCB-MED-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setAppointmentSuccess(true);
    setTimeout(() => {
      setAppointmentSuccess(false);
      setShowAppointmentModal(null);
      setAppointmentForm({
        patientName: '',
        phone: '',
        age: '',
        gender: 'Male',
        preferredDate: '',
        department: 'General OPD',
        symptoms: '',
        welfareCardNumber: ''
      });
    }, 4000);
  };

  // AI Healthcare Query Handler
  const handleAiAsk = (promptText: string) => {
    setAiQuery(promptText);
    setAiIsLoading(true);
    setAiResponse(null);

    setTimeout(() => {
      const queryLower = promptText.toLowerCase();
      let responseText = '';

      if (queryLower.includes('cancer')) {
        responseText = `🏥 **Recommended Cancer Hospitals:**\n1. **Tata Memorial Hospital (Mumbai)** - Comprehensive Oncology, PET-CT, Free treatment under NC/Ayushman Category.\n2. **AIIMS New Delhi (Dr. BRA IRCH)** - Advanced Radiotherapy & Surgical Oncology.\n3. **SMS Cancer Hospital (Jaipur)** - 100% Free Cancer Surgery & Chemotherapy under Rajasthan RGHS.`;
      } else if (queryLower.includes('heart') || queryLower.includes('cardiac')) {
        responseText = `❤️ **Recommended Heart Hospitals:**\n1. **AIIMS New Delhi (CNC Dept)** - Emergency Cath Lab & Pediatric Cardiac Surgery.\n2. **SMS Hospital Jaipur** - Free Stents & Bypass Surgery under Mukhya Mantri Yojana.\n3. **Fortis Escorts / Medanta** - 15-20% Concession for Welfare Card holders.`;
      } else if (queryLower.includes('kidney') || queryLower.includes('dialysis')) {
        responseText = `🩺 **Kidney & Free Dialysis Centres:**\n1. **Pradhan Mantri National Dialysis Programme (PMNDP)** - 100% Free Dialysis at all District Hospitals.\n2. **Yenepoya Medical College Hospital (Mangaluru)** - Free Dialysis & Kidney Transplant wing.\n3. **AMU JN Medical College (Aligarh)** - Subsidized Dialysis & Fistula Surgery.`;
      } else if (queryLower.includes('jan aushadhi') || queryLower.includes('medicine')) {
        responseText = `💊 **Jan Aushadhi & Free Medicine Counters:**\n1. **PMBJP Jan Aushadhi Kendras** - 50% to 90% cheaper generic medicines near every District Hospital (Helpline: 1800-180-8080).\n2. **Khidmat Free Medicine Counters** - Zakat & Trust funded free medicine distribution in Lucknow, Bhopal & Jaipur.`;
      } else if (queryLower.includes('ayushman')) {
        responseText = `🛡️ **Ayushman Bharat PM-JAY Empaneled Hospitals:**\nAll AIIMS institutes, SMS Jaipur, AMU JNMC Aligarh, Era Lucknow, Yenepoya Mangaluru, and 27,000+ government & private hospitals across India provide up to ₹5 Lakh cashless treatment per family per year (Helpline: 14555).`;
      } else if (queryLower.includes('unani') || queryLower.includes('ayush')) {
        responseText = `🌿 **Top Unani & AYUSH Hospitals:**\n1. **CCRUM HQ & Central Hospital (Janakpuri, Delhi)** - Free consultation & Unani herbal treatments.\n2. **Jamia Hamdard HAH Centenary Hospital (Delhi)** - Unani & Allopathic combined OPD.\n3. **State Takmil-ut-Tib College & Hospital (Lucknow)** - Complete Unani & Hijama therapy.`;
      } else {
        responseText = `ℹ️ Based on verified MoHFW & NHA data, we found **${filteredHospitals.length} verified hospitals** matching your query in ${selectedState === 'ALL' ? 'India' : selectedState}. You can book an OPD appointment directly or contact the 24x7 Nodal Officer listed in each hospital profile.`;
      }

      setAiResponse(responseText);
      setAiIsLoading(false);
    }, 1000);
  };

  // Add Custom Hospital by Admin
  const handleAddHospitalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHospitalForm.name?.en || !newHospitalForm.city) {
      alert('Please fill required hospital name and city.');
      return;
    }
    const fullObj = newHospitalForm as HospitalFacility;
    setHospitalsList([fullObj, ...hospitalsList]);
    setShowAddHospitalModal(false);
    alert('Hospital successfully added to master healthcare roster!');
  };

  return (
    <div className="py-10 bg-[#faf9f6] min-h-screen font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10 max-w-3xl">
            <UniversalBackButton onBack={() => onNavigate?.('home')} currentLanguage={currentLanguage} className="mb-2" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="h-4 w-4 text-[#FFD54A]" />
              <span>
                {currentLanguage === 'en'
                  ? 'NATIONAL HEALTHCARE & MEDICAL SUPPORT HUB'
                  : currentLanguage === 'ur'
                  ? 'قومى ہیلتھ کیئر اور طبی امداد پورٹل'
                  : 'राष्ट्रीय स्वास्थ्य सेवा एवं चिकित्सा सहायता केंद्र'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white leading-tight">
              {currentLanguage === 'en'
                ? 'Comprehensive Hospital Directory & Treatment Finder'
                : currentLanguage === 'ur'
                ? 'جامع ہسپتال ڈائرکٹری اور علاج گائیڈ'
                : 'भारत की व्यापक अस्पताल डायरेक्टरी एवं इलाज खोज केंद्र'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentLanguage === 'en'
                ? 'Verified AIIMS, Government Colleges, Ayushman PM-JAY Empaneled, Minority Institutions, Free Jan Aushadhi Kendras, AYUSH Unani Centres, Dialysis, Blood Banks, and 24x7 Emergency Services.'
                : 'सत्यापित एम्स, सरकारी मेडिकल कॉलेज, आयुष्मान पीएम-जय संबद्ध, अल्पसंख्यक संस्थान, जन औषधि केंद्र, यूनानी-आयुष अस्पताल, डायलिसिस, ब्लड बैंक व 24x7 इमरजेंसी सेवाएं।'}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 relative z-10">
            <button
              onClick={() => setShowHealthCardModal(true)}
              className="px-5 py-3 bg-[#FFD54A] text-[#0B132B] hover:bg-amber-400 font-extrabold rounded-xl text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Get Digital Health Card' : 'डिजिटल हेल्थ कार्ड लें'}</span>
            </button>
            <button
              onClick={() => handleExport('excel')}
              className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Export Roster' : 'रोस्टर डाउनलोड'}</span>
            </button>
          </div>
        </div>

        {/* Quick Statistics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0">
              <Hospital className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 block">{hospitalsList.length}+</span>
              <span className="text-[11px] font-semibold text-slate-500">{currentLanguage === 'en' ? 'Verified Facilities' : 'सत्यापित केंद्र'}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 block">27,000+</span>
              <span className="text-[11px] font-semibold text-slate-500">{currentLanguage === 'en' ? 'Ayushman Empaneled' : 'आयुष्मान संबद्ध'}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg shrink-0">
              <Pill className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 block">10,000+</span>
              <span className="text-[11px] font-semibold text-slate-500">{currentLanguage === 'en' ? 'Jan Aushadhi Counters' : 'जन औषधि केंद्र'}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg shrink-0">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 block">24x7</span>
              <span className="text-[11px] font-semibold text-slate-500">{currentLanguage === 'en' ? 'Emergency & ICU' : 'इमरजेंसी व आईसीयू'}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 block">108 / 112</span>
              <span className="text-[11px] font-semibold text-slate-500">{currentLanguage === 'en' ? 'Free Ambulance' : 'मुफ्त एम्बुलेंस'}</span>
            </div>
          </div>
        </div>

        {/* Main 16 Modules Navigation Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-2 shadow-xs overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            {[
              { id: 'hospitals', label: currentLanguage === 'en' ? 'Hospital Directory' : 'अस्पताल डायरेक्टरी', icon: '🏥' },
              { id: 'disease-guide', label: currentLanguage === 'en' ? 'Disease Treatment Guide' : 'बीमारी व इलाज मार्गदर्शिका', icon: '🩺' },
              { id: 'schemes', label: currentLanguage === 'en' ? 'Govt Schemes' : 'सरकारी योजनाएं', icon: '🛡️' },
              { id: 'ayushman', label: currentLanguage === 'en' ? 'Ayushman PM-JAY' : 'आयुष्मान भारत', icon: '💳' },
              { id: 'charitable-minority', label: currentLanguage === 'en' ? 'Charitable & Minority' : 'धर्मार्थ व अल्पसंख्यक', icon: '🕌' },
              { id: 'ayush', label: currentLanguage === 'en' ? 'AYUSH Directory' : 'आयुष व यूनानी', icon: '🌿' },
              { id: 'free-medicine', label: currentLanguage === 'en' ? 'Free Medicine & Jan Aushadhi' : 'मुफ्त दवा व जन औषधि', icon: '💊' },
              { id: 'diagnostics', label: currentLanguage === 'en' ? 'Diagnostics & Imaging' : 'जांच व एमआरआई', icon: '🔬' },
              { id: 'dialysis', label: currentLanguage === 'en' ? 'Dialysis Units' : 'डायलिसिस केंद्र', icon: '🧪' },
              { id: 'mental-rehab', label: currentLanguage === 'en' ? 'Mental Health & Rehab' : 'मानसिक स्वास्थ्य', icon: '🧠' },
              { id: 'organ-donation', label: currentLanguage === 'en' ? 'Organ Donation (NOTTO)' : 'अंगदान', icon: '🫀' },
              { id: 'emergency', label: currentLanguage === 'en' ? 'Emergency Helplines' : 'आपातकालीन नंबर', icon: '🚨' },
              { id: 'ai-assistant', label: currentLanguage === 'en' ? 'IQRA AI Health Assistant' : 'इकरा एआई स्वास्थ्य सहायक', icon: '✨' },
              { id: 'admin', label: currentLanguage === 'en' ? 'Admin Verification Panel' : 'एडमिन सत्यापन', icon: '⚙️' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSubTab(m.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeSubTab === m.id
                    ? 'bg-[#004B23] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SUB-TAB 1: HOSPITAL DIRECTORY & SEARCH */}
        {(activeSubTab === 'hospitals' || activeSubTab === 'ayushman' || activeSubTab === 'charitable-minority') && (
          <div className="space-y-6">
            {/* Search & Smart Filters Panel */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Search query */}
                <div className="md:col-span-4 relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {currentLanguage === 'en' ? 'Search Hospital, City, Disease or Speciality' : 'अस्पताल, बीमारी या शहर खोजें'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder={currentLanguage === 'en' ? 'Type AIIMS, Cancer, Jaipur, Dialysis...' : 'एम्स, कैंसर, जयपुर, डायलिसिस लिखें...'}
                      className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 pl-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    />
                    <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                {/* State filter */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {currentLanguage === 'en' ? 'Select State' : 'राज्य चुनें'}
                  </label>
                  <select
                    value={selectedState}
                    onChange={e => setSelectedState(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-semibold text-slate-700"
                  >
                    {STATES_LIST.map(s => (
                      <option key={s} value={s}>
                        {s === 'ALL' ? (currentLanguage === 'en' ? 'All States' : 'सभी राज्य') : s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City filter */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {currentLanguage === 'en' ? 'Select City' : 'शहर चुनें'}
                  </label>
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-semibold text-slate-700"
                  >
                    {cityList.map(c => (
                      <option key={c} value={c}>
                        {c === 'ALL' ? (currentLanguage === 'en' ? 'All Cities' : 'सभी शहर') : c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Speciality filter */}
                <div className="md:col-span-4">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {currentLanguage === 'en' ? 'Speciality / Department' : 'विशेषज्ञता चुनें'}
                  </label>
                  <select
                    value={selectedSpeciality}
                    onChange={e => setSelectedSpeciality(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-semibold text-slate-700"
                  >
                    {SPECIALITY_OPTIONS.map(sp => (
                      <option key={sp} value={sp}>
                        {sp === 'ALL' ? (currentLanguage === 'en' ? 'All Specialities' : 'सभी विशेषज्ञता') : sp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Toggle Badges Filters */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mr-2">
                  {currentLanguage === 'en' ? 'Quick Toggles:' : 'त्वरित फ़िल्टर:'}
                </span>

                <button
                  onClick={() => setFilterAyushmanOnly(!filterAyushmanOnly)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition border cursor-pointer ${
                    filterAyushmanOnly
                      ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  💳 {currentLanguage === 'en' ? 'Ayushman PM-JAY Empaneled' : 'आयुष्मान भारत संबद्ध'}
                </button>

                <button
                  onClick={() => setFilterFreeTreatmentOnly(!filterFreeTreatmentOnly)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition border cursor-pointer ${
                    filterFreeTreatmentOnly
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🎁 {currentLanguage === 'en' ? 'Free Treatment Available' : 'मुफ्त इलाज उपलब्ध'}
                </button>

                <button
                  onClick={() => setFilterEmergencyOnly(!filterEmergencyOnly)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition border cursor-pointer ${
                    filterEmergencyOnly
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🚨 {currentLanguage === 'en' ? '24x7 Emergency ICU' : '24x7 इमरजेंसी'}
                </button>

                <button
                  onClick={() => setFilterMinorityOnly(!filterMinorityOnly)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition border cursor-pointer ${
                    filterMinorityOnly
                      ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🕌 {currentLanguage === 'en' ? 'Minority Institution' : 'अल्पसंख्यक संस्था'}
                </button>

                {(searchQuery ||
                  selectedState !== 'ALL' ||
                  selectedCity !== 'ALL' ||
                  selectedSpeciality !== 'ALL' ||
                  filterAyushmanOnly ||
                  filterFreeTreatmentOnly ||
                  filterEmergencyOnly ||
                  filterMinorityOnly) && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedState('ALL');
                      setSelectedCity('ALL');
                      setSelectedSpeciality('ALL');
                      setFilterAyushmanOnly(false);
                      setFilterFreeTreatmentOnly(false);
                      setFilterEmergencyOnly(false);
                      setFilterMinorityOnly(false);
                    }}
                    className="px-2.5 py-1 text-xs text-rose-600 hover:underline font-bold ml-auto cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Hospital Roster Cards List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Hospital className="h-4 w-4 text-[#004B23]" />
                  <span>
                    {currentLanguage === 'en'
                      ? `Verified Hospitals & Medical Centers (${filteredHospitals.length})`
                      : `सत्यापित अस्पताल एवं चिकित्सा केंद्र (${filteredHospitals.length})`}
                  </span>
                </h2>
                <span className="text-xs text-slate-500 font-mono bg-white border px-2 py-0.5 rounded shadow-2xs">
                  {currentLanguage === 'en' ? 'Official Health Registry' : 'सत्यापित रजिस्ट्री'}
                </span>
              </div>

              {filteredHospitals.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
                  <AlertCircle className="h-10 w-10 text-amber-500 mx-auto" />
                  <h3 className="text-base font-bold text-slate-800">
                    {currentLanguage === 'en' ? 'No hospitals match your filter' : 'कोई अस्पताल नहीं मिला'}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Try relaxing your search query or removing specific filters to see hospitals across India.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredHospitals.map(hosp => (
                    <div
                      key={hosp.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 relative overflow-hidden"
                    >
                      {/* Top Bar Badges */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#004B23]/10 text-[#004B23] border border-[#004B23]/20">
                              {hosp.type}
                            </span>
                            {hosp.ayushmanEmpaneled && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3 text-amber-600" />
                                Ayushman PM-JAY
                              </span>
                            )}
                            {hosp.freeTreatmentAvailable && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                                🎁 Free OPD / Treatment
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                            <MapPin className="h-3 w-3 text-rose-500" />
                            {hosp.city}, {hosp.state}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-serif font-extrabold text-slate-900 leading-snug">
                          {hosp.name[currentLanguage] || hosp.name.en}
                        </h3>

                        <p className="text-xs text-slate-500 flex items-start gap-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span>{hosp.address}</span>
                        </p>
                      </div>

                      {/* Middle Stats Grid */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Beds</span>
                          <span className="font-extrabold text-slate-800">{hosp.beds.total} Beds</span>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">ICU Available</span>
                          <span className="font-extrabold text-emerald-700">
                            {hosp.beds.icu.available} / {hosp.beds.icu.total}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">24x7 Emergency</span>
                          <span className="font-extrabold text-rose-600">{hosp.emergency24x7 ? 'Active' : 'No'}</span>
                        </div>
                      </div>

                      {/* Specialities Chips */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Specialities:</span>
                        <div className="flex flex-wrap gap-1">
                          {hosp.specialities.slice(0, 4).map((sp, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700 border border-slate-200">
                              {sp}
                            </span>
                          ))}
                          {hosp.specialities.length > 4 && (
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-500">
                              +{hosp.specialities.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Concession & Buttons */}
                      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs space-y-0.5 w-full sm:w-auto">
                          <span className="text-[10px] font-bold text-[#004B23] uppercase block">Welfare Concession:</span>
                          <span className="font-bold text-slate-800 text-xs">{hosp.concessions.opd[currentLanguage] || hosp.concessions.opd.en}</span>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                          <button
                            onClick={() => setSelectedHospital(hosp)}
                            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1 w-1/2 sm:w-auto cursor-pointer"
                          >
                            <Info className="h-3.5 w-3.5 text-[#004B23]" />
                            <span>View Details</span>
                          </button>

                          <button
                            onClick={() => setShowAppointmentModal(hosp)}
                            className="px-3.5 py-2 bg-[#004B23] hover:bg-[#064E3B] text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1 w-1/2 sm:w-auto cursor-pointer shadow-xs"
                          >
                            <Calendar className="h-3.5 w-3.5 text-[#FFD54A]" />
                            <span>Book OPD</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SUB-TAB 2: DISEASE & TREATMENT GUIDE */}
        {activeSubTab === 'disease-guide' && (
          <div className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <Stethoscope className="h-6 w-6 text-[#FFD54A]" />
                <span>
                  {currentLanguage === 'en'
                    ? 'Disease-wise Treatment & Hospital Referral Guide'
                    : 'रोग-वार उपचार एवं अस्पताल रेफरल निर्देशिका'}
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Official guide providing recommended hospitals, treatment availability, waiting times, estimated costs, and government scheme documents for critical illnesses.
              </p>
            </div>

            <div className="space-y-6">
              {DISEASE_TREATMENT_GUIDES.map(guide => (
                <div key={guide.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#004B23] text-white uppercase tracking-wider">
                        {guide.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1">
                        {guide.diseaseName[currentLanguage] || guide.diseaseName.en}
                      </h3>
                    </div>
                    <a
                      href={`tel:${guide.emergencyContact}`}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Helpline: {guide.emergencyContact}</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Treatment Availability</span>
                      <p className="font-semibold text-slate-800">{guide.treatmentAvailability[currentLanguage] || guide.treatmentAvailability.en}</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Approx. Waiting Time</span>
                      <p className="font-semibold text-slate-800">{guide.waitingTime[currentLanguage] || guide.waitingTime.en}</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Estimated Cost Range</span>
                      <p className="font-semibold text-emerald-800">{guide.estimatedCostRange[currentLanguage] || guide.estimatedCostRange.en}</p>
                    </div>
                  </div>

                  {/* Recommended Hospitals list */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">Recommended AIIMS & Apex Hospitals:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {guide.recommendedHospitals.map((h, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                          <span className="font-bold text-[#004B23] block">{h.name[currentLanguage] || h.name.en}</span>
                          <span className="text-[10px] text-slate-500 block">City: {h.city}</span>
                          <span className="text-[10px] font-semibold text-emerald-700 block">{h.treatmentType}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents & Scheme Info */}
                  <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 text-xs space-y-2">
                    <span className="font-bold text-[#004B23] block">Government Scheme Support & Required Documents:</span>
                    <p className="text-slate-700">{guide.govtSupportAvailable[currentLanguage] || guide.govtSupportAvailable.en}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {guide.requiredDocuments.map((doc, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white text-slate-800 rounded-lg border border-emerald-300 font-medium text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          {doc[currentLanguage] || doc.en}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 3: GOVERNMENT HEALTH SCHEMES */}
        {activeSubTab === 'schemes' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-amber-500" />
                <span>
                  {currentLanguage === 'en' ? 'Central & State Government Health Insurance Schemes' : 'सरकारी स्वास्थ्य योजनाएं एवं आवेदन प्रक्रिया'}
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Verified guide to Ayushman Bharat PM-JAY, State Health Schemes (RGHS, Chiranjeevi, Swasthya Sathi, Karunya), BPL benefits, and Senior Citizen health coverage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schemesList.map(scheme => (
                  <div key={scheme.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          {scheme.category}
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          {scheme.coverageAmount[currentLanguage] || scheme.coverageAmount.en}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">{scheme.title[currentLanguage] || scheme.title.en}</h3>

                      <div className="space-y-1 text-xs text-slate-700">
                        <span className="font-bold text-slate-900 block">Eligibility:</span>
                        <p>{scheme.eligibility[currentLanguage] || scheme.eligibility.en}</p>
                      </div>

                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-slate-900 block">Key Benefits:</span>
                        <ul className="space-y-1 pl-1">
                          {scheme.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-1 text-slate-700">
                              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{b[currentLanguage] || b.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <a
                        href={`tel:${scheme.helplinePhone}`}
                        className="font-bold text-rose-600 flex items-center gap-1 hover:underline"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call: {scheme.helplinePhone}</span>
                      </a>

                      <a
                        href={scheme.officialWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-[#004B23] text-white font-bold rounded-xl text-xs hover:bg-[#064E3B] transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>Official Portal</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 6: AYUSH DIRECTORY (UNANI, AYURVEDA, HOMEOPATHY) */}
        {activeSubTab === 'ayush' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <span>🌿</span>
                <span>{currentLanguage === 'en' ? 'AYUSH Directory (Unani, Ayurveda, Homeopathy, Siddha & Yoga)' : 'आयुष व यूनानी अस्पताल डायरेक्टरी'}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Directory of Central Council for Research in Unani Medicine (CCRUM), National Institute of Ayurveda, Takmil-ut-Tib Lucknow, and AYUSH clinics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {AYUSH_DIRECTORY.map(ay => (
                <div key={ay.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-700 text-white uppercase">
                    {ay.system} System ({ay.ownership})
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{ay.name[currentLanguage] || ay.name.en}</h3>
                  <p className="text-xs text-slate-600 flex items-start gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{ay.address}</span>
                  </p>
                  <p className="text-xs font-semibold text-slate-700">OPD: {ay.opdTimings}</p>

                  <div className="pt-2 border-t border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-800 block">Key Treatments:</span>
                    <div className="flex flex-wrap gap-1">
                      {ay.keySpecialties.map((ks, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white text-[10px] font-medium border rounded text-slate-700">
                          {ks}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold">✓ Free Consultation</span>
                    <a href={`tel:${ay.phone}`} className="text-[#004B23] font-bold hover:underline flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{ay.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 7: FREE MEDICINE & JAN AUSHADHI KENDRAS */}
        {activeSubTab === 'free-medicine' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <Pill className="h-6 w-6 text-amber-500" />
                <span>{currentLanguage === 'en' ? 'Pradhan Mantri Jan Aushadhi Kendras & Free Medicine Banks' : 'जन औषधि केंद्र एवं मुफ्त दवा बैंक'}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Find Jan Aushadhi Kendras offering up to 90% cheaper generic drugs, and Trust/NGO medicine banks supplying free life-saving medications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FREE_MEDICINE_CENTERS.map(med => (
                <div key={med.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white uppercase">
                      {med.type}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{med.operatingHours}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{med.name[currentLanguage] || med.name.en}</h3>
                  <p className="text-xs text-slate-600 flex items-start gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{med.address}</span>
                  </p>

                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs">
                    <span className="font-bold text-amber-900 block">Concession & Savings:</span>
                    <p className="text-amber-800">{med.discountsAvailable[currentLanguage] || med.discountsAvailable.en}</p>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-800 block">Available Medicines:</span>
                    <div className="flex flex-wrap gap-1">
                      {med.freeMedicinesList.map((m, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white text-[10px] border rounded font-semibold text-slate-700">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a href={`tel:${med.phone}`} className="font-bold text-[#004B23] flex items-center gap-1 hover:underline">
                      <Phone className="h-3.5 w-3.5" />
                      <span>Call: {med.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 8: DIAGNOSTICS, MRI & LABS */}
        {activeSubTab === 'diagnostics' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <Activity className="h-6 w-6 text-blue-600" />
                <span>{currentLanguage === 'en' ? 'Concessional Diagnostic, MRI & Pathology Imaging Centres' : 'रियायती डायग्नोस्टिक, एमआरआई एवं लैब सेंटर'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-700 text-white uppercase">
                  3T MRI & 128-Slice CT Scan
                </span>
                <h3 className="text-base font-bold text-slate-900">Al-Shifa Advanced Imaging & Diagnostic Centre (Lucknow)</h3>
                <p className="text-xs text-slate-600">Victoria Street, Chowk, Lucknow. NABL Accredited | Open 24 Hours</p>
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-xs text-blue-900 font-semibold">
                  35% Concession on 3T MRI & CT Scans, 40% discount on Full Blood Profile for Community Health Card holders.
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-emerald-700">✓ Free Doctor Report Consultation</span>
                  <a href="tel:0522-2612345" className="font-bold text-[#004B23]">0522-2612345</a>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#004B23] text-white uppercase">
                  Pathology & PET-CT Scan
                </span>
                <h3 className="text-base font-bold text-slate-900">SMS Central Lab & PET-CT Imaging Hub (Jaipur)</h3>
                <p className="text-xs text-slate-600">JLN Marg, Jaipur. Government Subsidized Diagnostic Center</p>
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold">
                  100% Free diagnostic tests for Chiranjeevi / RGHS / Ayushman card holders; 80% cheaper than private labs.
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-emerald-700">✓ 24x7 Emergency Blood & Pathology</span>
                  <a href="tel:0141-2560291" className="font-bold text-[#004B23]">0141-2560291</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 9: DIALYSIS CENTRES */}
        {activeSubTab === 'dialysis' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <span>🧪</span>
                <span>{currentLanguage === 'en' ? 'Pradhan Mantri National Dialysis Programme & Centres' : 'मुफ्त डायलिसिस केंद्र निर्देशिका'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white uppercase">
                  100% Free Dialysis (PMNDP)
                </span>
                <h3 className="text-base font-bold text-slate-900">Yenepoya Nephrology & Dialysis Center (Mangaluru)</h3>
                <p className="text-xs text-slate-600">Deralakatte, Mangaluru. 30 Dialysis Machines | 24x7 Unit</p>
                <p className="text-xs font-semibold text-emerald-800">Free under PMNDP & Ayushman PM-JAY. Free Erythropoietin injections supplied.</p>
                <a href="tel:0824-2206000" className="text-xs font-bold text-[#004B23] block">Call Unit: 0824-2206000</a>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white uppercase">
                  100% Free Dialysis (PMNDP)
                </span>
                <h3 className="text-base font-bold text-slate-900">AMU JN Medical College Dialysis Unit (Aligarh)</h3>
                <p className="text-xs text-slate-600">AMU Campus, Aligarh. 18 Dialysis Beds | AV Fistula Surgery</p>
                <p className="text-xs font-semibold text-emerald-800">Nominal ₹100 registration for general cases; 100% free for BPL & Ayushman.</p>
                <a href="tel:0571-2720021" className="text-xs font-bold text-[#004B23] block">Call Unit: 0571-2720021</a>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 10: MENTAL HEALTH & REHABILITATION */}
        {activeSubTab === 'mental-rehab' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span>{currentLanguage === 'en' ? 'Mental Health, Counseling & Rehabilitation Services' : 'मानसिक स्वास्थ्य एवं पुनर्वास सेवाएं'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600 text-white uppercase">
                  24x7 Tele-MANAS Helpline: 14416
                </span>
                <h3 className="text-base font-bold text-slate-900">NIMHANS National Mental Health Hub (Bengaluru)</h3>
                <p className="text-xs text-slate-600">Hosur Road, Bengaluru. Apex Institute for Psychiatry, Neurology & De-addiction</p>
                <div className="bg-rose-50 p-3 rounded-xl border border-rose-200 text-xs text-rose-900 font-semibold">
                  Call Toll-Free 14416 for 24x7 confidential psychiatric counseling in Hindi, Urdu, English & 18 Indian languages.
                </div>
                <a href="tel:14416" className="px-4 py-2 bg-rose-600 text-white font-bold rounded-xl text-xs inline-flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Tele-MANAS (14416)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 11: ORGAN DONATION (NOTTO) */}
        {activeSubTab === 'organ-donation' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <span>🫀</span>
                <span>{currentLanguage === 'en' ? 'Organ & Tissue Donation Information (NOTTO Registry)' : 'अंगदान एवं ऊतक प्रत्यारोपण सूचना'}</span>
              </h2>
            </div>

            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3">
              <h3 className="text-base font-bold text-[#004B23]">
                {ORGAN_DONATION_GUIDE.registryName[currentLanguage] || ORGAN_DONATION_GUIDE.registryName.en}
              </h3>
              <p className="text-xs text-slate-700">Nodal Agency: {ORGAN_DONATION_GUIDE.nodalAgency}</p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${ORGAN_DONATION_GUIDE.helplineNumber}`}
                  className="px-4 py-2 bg-[#004B23] text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{ORGAN_DONATION_GUIDE.helplineNumber}</span>
                </a>
                <a
                  href={ORGAN_DONATION_GUIDE.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white text-[#004B23] border border-[#004B23] font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>NOTTO Online Pledge Portal</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">Empaneled Organ Transplant Hospitals:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ORGAN_DONATION_GUIDE.empaneledTransplantCenters.map((tc, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-[#004B23] block">{tc.hospitalName[currentLanguage] || tc.hospitalName.en}</span>
                    <span className="text-slate-500 block">City: {tc.city}</span>
                    <span className="font-semibold text-emerald-700 block">Transplants: {tc.organTypes.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 12: EMERGENCY HELPLINES & AMBULANCE */}
        {activeSubTab === 'emergency' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-rose-600 flex items-center gap-2">
                <ShieldAlert className="h-6 w-6" />
                <span>{currentLanguage === 'en' ? '24x7 National Emergency Helplines & Ambulance Services' : '24x7 राष्ट्रीय आपातकालीन हेल्पलाइन'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {EMERGENCY_HELPLINES_DATA.map((hp, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                      {hp.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">{hp.name[currentLanguage] || hp.name.en}</h3>
                    <p className="text-[11px] text-slate-500">{hp.desc}</p>
                  </div>

                  <a
                    href={`tel:${hp.number}`}
                    className="mt-2 w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-xl text-xs text-center flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call {hp.number}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 13: IQRA AI HEALTHCARE ASSISTANT */}
        {activeSubTab === 'ai-assistant' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-[#FFD54A]" />
                <span>{currentLanguage === 'en' ? 'IQRA AI Healthcare Recommendation Assistant' : 'इकरा एआई स्वास्थ्य सेवा सहायक'}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Ask IQRA AI for verified hospital recommendations, free surgery centers, Ayushman PM-JAY package lookups, and Jan Aushadhi locations.
              </p>
            </div>

            {/* Quick Prompts Chips */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Click a quick question:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Best cancer hospital near me',
                  'Free heart surgery hospitals',
                  'AIIMS for kidney treatment',
                  'Best children hospital',
                  'Jan Aushadhi near me',
                  'Hospital accepting Ayushman Bharat',
                  'Best Unani hospital'
                ].map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAiAsk(qp)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800 rounded-xl text-xs font-semibold border border-slate-200 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="h-3 w-3 text-[#004B23]" />
                    <span>"{qp}"</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={aiQuery}
                onChange={e => setAiQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAiAsk(aiQuery)}
                placeholder="Ask e.g. Best hospital for kidney dialysis in Jaipur or Delhi..."
                className="flex-1 bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
              />
              <button
                onClick={() => handleAiAsk(aiQuery)}
                disabled={!aiQuery.trim() || aiIsLoading}
                className="px-5 py-3 bg-[#004B23] hover:bg-[#064E3B] text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-xs disabled:opacity-50"
              >
                {aiIsLoading ? 'Analyzing...' : 'Ask AI'}
              </button>
            </div>

            {/* AI Response Output */}
            {aiResponse && (
              <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#004B23]">
                  <Sparkles className="h-4 w-4 text-[#FFD54A]" />
                  <span>IQRA AI Healthcare Recommendation:</span>
                </div>
                <div className="text-xs text-slate-800 leading-relaxed whitespace-pre-line font-sans">
                  {aiResponse}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 14: ADMIN VERIFICATION PANEL */}
        {activeSubTab === 'admin' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#004B23] flex items-center gap-2">
                  <Shield className="h-6 w-6 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'Healthcare Administrative & Hospital Verification Panel' : 'प्रशासनिक सत्यापन एवं अस्पताल प्रबंधन पैनल'}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Manage hospital rosters, verify nodal officers, update Ayushman status, and track portal analytics.
                </p>
              </div>

              <button
                onClick={() => setShowAddHospitalModal(true)}
                className="px-4 py-2 bg-[#004B23] hover:bg-[#064E3B] text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Hospital</span>
              </button>
            </div>

            {/* Roster Management Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 uppercase font-bold text-[10px]">
                  <tr>
                    <th className="p-3">Hospital Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">City / State</th>
                    <th className="p-3">Ayushman</th>
                    <th className="p-3">Emergency</th>
                    <th className="p-3">Nodal Contact</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {hospitalsList.map(h => (
                    <tr key={h.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">{h.name.en}</td>
                      <td className="p-3">{h.type}</td>
                      <td className="p-3">{h.city}, {h.state}</td>
                      <td className="p-3">{h.ayushmanEmpaneled ? '✓ Yes' : 'No'}</td>
                      <td className="p-3">{h.emergency24x7 ? '24x7 Active' : 'Regular'}</td>
                      <td className="p-3">{h.nodalOfficer.name} ({h.nodalOfficer.phone})</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Verified
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODAL 1: HOSPITAL DETAILED PROFILE MODAL */}
        <AnimatePresence>
          {selectedHospital && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedHospital(null)}
                  className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Banner & Cover */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100">
                  <img src={selectedHospital.coverPhoto} alt="Hospital" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFD54A] text-[#0B132B] w-fit">
                      {selectedHospital.type}
                    </span>
                    <h2 className="text-xl font-serif font-extrabold text-white">
                      {selectedHospital.name[currentLanguage] || selectedHospital.name.en}
                    </h2>
                  </div>
                </div>

                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {selectedHospital.ayushmanEmpaneled && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full font-bold">
                      💳 Ayushman PM-JAY Empaneled
                    </span>
                  )}
                  {selectedHospital.freeTreatmentAvailable && (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full font-bold">
                      🎁 Free OPD & Bed Support
                    </span>
                  )}
                  {selectedHospital.emergency24x7 && (
                    <span className="px-3 py-1 bg-rose-100 text-rose-900 border border-rose-300 rounded-full font-bold">
                      🚨 24x7 Emergency & ICU
                    </span>
                  )}
                </div>

                {/* Contact & Location Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-800 block">Address & Location:</span>
                    <p className="text-slate-600">{selectedHospital.address}</p>
                    <a
                      href={selectedHospital.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(selectedHospital.name.en + ' ' + selectedHospital.city)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#004B23] font-bold flex items-center gap-1 hover:underline pt-1"
                    >
                      <MapPin className="h-3.5 w-3.5 text-rose-500" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-800 block">Timings & Helplines:</span>
                    <p className="text-slate-600">OPD: {selectedHospital.opdTimings[currentLanguage] || selectedHospital.opdTimings.en}</p>
                    <p className="text-rose-600 font-bold">Emergency: {selectedHospital.emergencyNumber}</p>
                    <p className="text-slate-600">Phone: {selectedHospital.phone}</p>
                  </div>
                </div>

                {/* Bed Breakdown */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Live Bed Availability:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block font-bold">Total Beds</span>
                      <span className="font-black text-slate-900 text-base">{selectedHospital.beds.total}</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                      <span className="text-[10px] text-emerald-700 block font-bold">ICU Beds</span>
                      <span className="font-black text-emerald-900 text-base">{selectedHospital.beds.icu.available} Available</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                      <span className="text-[10px] text-blue-700 block font-bold">NICU Beds</span>
                      <span className="font-black text-blue-900 text-base">{selectedHospital.beds.nicu.available} Available</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                      <span className="text-[10px] text-amber-700 block font-bold">Emergency Beds</span>
                      <span className="font-black text-amber-900 text-base">{selectedHospital.beds.emergency.available} Available</span>
                    </div>
                  </div>
                </div>

                {/* Concessions */}
                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 text-xs space-y-2">
                  <span className="font-bold text-[#004B23] uppercase block">Welfare Concessions & Discounts:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <div><strong>OPD:</strong> {selectedHospital.concessions.opd[currentLanguage] || selectedHospital.concessions.opd.en}</div>
                    <div><strong>IPD:</strong> {selectedHospital.concessions.ipd[currentLanguage] || selectedHospital.concessions.ipd.en}</div>
                    <div><strong>Diagnostics:</strong> {selectedHospital.concessions.diagnostic[currentLanguage] || selectedHospital.concessions.diagnostic.en}</div>
                    <div><strong>Pharmacy:</strong> {selectedHospital.concessions.pharmacy[currentLanguage] || selectedHospital.concessions.pharmacy.en}</div>
                  </div>
                </div>

                {/* Nodal Officer Contact */}
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-800 block">24x7 Nodal Assistance Officer:</span>
                  <p className="font-semibold text-slate-900">{selectedHospital.nodalOfficer.name}</p>
                  <p className="text-slate-600">Phone: {selectedHospital.nodalOfficer.phone} | Email: {selectedHospital.nodalOfficer.email}</p>
                </div>

                {/* Disclaimer */}
                <p className="text-[10px] text-slate-400 italic">
                  * Source: {selectedHospital.officialSource}. Information provided for guidance. In medical emergencies, call 108 or proceed directly to the nearest Casualty ward.
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      const h = selectedHospital;
                      setSelectedHospital(null);
                      setShowAppointmentModal(h);
                    }}
                    className="w-full py-3 bg-[#004B23] hover:bg-[#064E3B] text-white font-extrabold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4 text-[#FFD54A]" />
                    <span>Book OPD Appointment</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL 2: OPD APPOINTMENT BOOKING MODAL */}
        <AnimatePresence>
          {showAppointmentModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative"
              >
                <button
                  onClick={() => setShowAppointmentModal(null)}
                  className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#004B23] text-white">
                    OPD Registration
                  </span>
                  <h3 className="text-lg font-serif font-extrabold text-slate-900 mt-1">
                    Book OPD Consultation - {showAppointmentModal.name[currentLanguage] || showAppointmentModal.name.en}
                  </h3>
                </div>

                {appointmentSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-extrabold text-emerald-900">OPD Booking Confirmed!</h4>
                    <p className="text-xs text-emerald-800">
                      Your OPD Appointment Reference Number is: <strong className="font-mono text-sm block mt-1">{bookingRef}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Please present this code along with your Aadhaar / Health Card at Counter 1 on your preferred date.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Patient Full Name *</label>
                      <input
                        type="text"
                        required
                        value={appointmentForm.patientName}
                        onChange={e => setAppointmentForm({ ...appointmentForm, patientName: e.target.value })}
                        placeholder="e.g. Mohd Rashid"
                        className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={appointmentForm.phone}
                          onChange={e => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                          placeholder="+91 98000-00000"
                          className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Age & Gender</label>
                        <input
                          type="text"
                          value={appointmentForm.age}
                          onChange={e => setAppointmentForm({ ...appointmentForm, age: e.target.value })}
                          placeholder="e.g. 45 M"
                          className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={appointmentForm.preferredDate}
                          onChange={e => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Department</label>
                        <select
                          value={appointmentForm.department}
                          onChange={e => setAppointmentForm({ ...appointmentForm, department: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option>General OPD</option>
                          <option>Cardiology</option>
                          <option>Nephrology & Dialysis</option>
                          <option>Oncology / Cancer</option>
                          <option>Pediatrics</option>
                          <option>Gynecology</option>
                          <option>AYUSH / Unani</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Health Card / Ayushman Card No. (Optional)</label>
                      <input
                        type="text"
                        value={appointmentForm.welfareCardNumber}
                        onChange={e => setAppointmentForm({ ...appointmentForm, welfareCardNumber: e.target.value })}
                        placeholder="e.g. RCB-HC-99212"
                        className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#004B23] hover:bg-[#064E3B] text-white font-extrabold rounded-xl text-xs transition cursor-pointer shadow-md mt-2"
                    >
                      Confirm OPD Booking
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL 3: DIGITAL HEALTH CARD PREVIEW */}
        <AnimatePresence>
          {showHealthCardModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative"
              >
                <button
                  onClick={() => setShowHealthCardModal(false)}
                  className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-base font-extrabold text-slate-900">Digital Community Health Card</h3>

                {/* Digital Card Canvas */}
                <div className="bg-gradient-to-br from-[#004B23] via-[#064E3B] to-[#0B132B] text-white p-6 rounded-2xl border-2 border-[#FFD54A] shadow-xl space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="h-6 w-6 text-[#FFD54A]" />
                      <span className="font-serif font-extrabold text-sm tracking-tight text-white">Rangrez Health Card</span>
                    </div>
                    <span className="text-[9px] font-bold bg-[#FFD54A] text-[#0B132B] px-2 py-0.5 rounded uppercase">
                      Official Card
                    </span>
                  </div>

                  <div className="space-y-1 pt-2">
                    <span className="text-[10px] text-slate-300 uppercase block font-mono">Cardholder Name</span>
                    <span className="text-lg font-bold text-white block">Community Member</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <span className="text-[9px] text-slate-300 block">Health ID No.</span>
                      <span className="font-mono font-bold text-[#FFD54A]">RCB-HC-88412</span>
                    </div>

                    <div>
                      <span className="text-[9px] text-slate-300 block">Concession Code</span>
                      <span className="font-mono font-bold text-emerald-300">OPD-30-FREE</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-slate-300">
                    <span>Valid at Empaneled Hospitals</span>
                    <span>24x7 Helpline: 108 / 14555</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="w-full py-2.5 bg-[#004B23] text-white font-bold rounded-xl text-xs hover:bg-[#064E3B] transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Printer className="h-4 w-4" />
                    <span>Print Health Card</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL 4: ADMIN ADD HOSPITAL MODAL */}
        <AnimatePresence>
          {showAddHospitalModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setShowAddHospitalModal(false)}
                  className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-base font-serif font-extrabold text-slate-900">Add New Hospital to Directory</h3>

                <form onSubmit={handleAddHospitalSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Hospital Name (English) *</label>
                    <input
                      type="text"
                      required
                      value={newHospitalForm.name?.en || ''}
                      onChange={e =>
                        setNewHospitalForm({
                          ...newHospitalForm,
                          name: { ...newHospitalForm.name, en: e.target.value, hi: e.target.value, ur: e.target.value } as any
                        })
                      }
                      placeholder="e.g. Civil Hospital Kota"
                      className="w-full bg-slate-50 border p-2.5 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Facility Type</label>
                      <select
                        value={newHospitalForm.type}
                        onChange={e => setNewHospitalForm({ ...newHospitalForm, type: e.target.value as any })}
                        className="w-full bg-slate-50 border p-2.5 rounded-xl"
                      >
                        <option>Government Medical College</option>
                        <option>District Hospital / Civil Hospital</option>
                        <option>Minority Healthcare Institution</option>
                        <option>Charitable / Trust Hospital</option>
                        <option>AYUSH Hospital</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={newHospitalForm.city || ''}
                        onChange={e => setNewHospitalForm({ ...newHospitalForm, city: e.target.value })}
                        placeholder="e.g. Kota"
                        className="w-full bg-slate-50 border p-2.5 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Address *</label>
                    <input
                      type="text"
                      required
                      value={newHospitalForm.address || ''}
                      onChange={e => setNewHospitalForm({ ...newHospitalForm, address: e.target.value })}
                      placeholder="e.g. Station Road, Kota, Rajasthan"
                      className="w-full bg-slate-50 border p-2.5 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        value={newHospitalForm.phone || ''}
                        onChange={e => setNewHospitalForm({ ...newHospitalForm, phone: e.target.value })}
                        placeholder="+91 98000-00000"
                        className="w-full bg-slate-50 border p-2.5 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nodal Officer Name</label>
                      <input
                        type="text"
                        value={newHospitalForm.nodalOfficer?.name || ''}
                        onChange={e =>
                          setNewHospitalForm({
                            ...newHospitalForm,
                            nodalOfficer: { ...newHospitalForm.nodalOfficer, name: e.target.value } as any
                          })
                        }
                        placeholder="Dr. Sharma"
                        className="w-full bg-slate-50 border p-2.5 rounded-xl"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004B23] hover:bg-[#064E3B] text-white font-extrabold rounded-xl text-xs transition cursor-pointer shadow-md mt-2"
                  >
                    Add Hospital
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Official Medical Disclaimer Footer */}
        <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-extrabold block">Official Healthcare Disclaimer:</span>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              This directory provides verified informational guidance sourced directly from official Ministry of Health & Family Welfare (MoHFW), National Health Authority (NHA PM-JAY), AIIMS, State Health Departments, and empaneled medical institutions. It is created for community welfare and is not a substitute for professional medical advice, diagnosis, or treatment. In life-threatening emergencies, call 108 / 112 immediately or visit the nearest Casualty / Emergency department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
