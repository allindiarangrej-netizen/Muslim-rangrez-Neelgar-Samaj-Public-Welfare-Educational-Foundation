import React, { useState } from 'react';
import {
  Hospital, Phone, MapPin, Stethoscope, Clock, HeartPulse, ShieldAlert,
  Search, Filter, Download, Printer, FileText, CheckCircle2, User,
  Calendar, AlertTriangle, ExternalLink, Activity, Award, Eye, Baby,
  Ambulance, Pill, Thermometer, ShieldCheck, Check, ChevronRight, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface HospitalNetworkPortalProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

interface HospitalData {
  id: string;
  name: { en: string; hi: string; ur: string };
  city: string;
  type: 'Partner Hospital' | 'Community Clinic' | 'Diagnostic Center' | 'Pharmacy Network';
  specialty: string[];
  concession: {
    opd: string;
    ipd: string;
    diagnostic: string;
    pharmacy: string;
  };
  beds: {
    icu: { total: number; available: number };
    general: { total: number; available: number };
    emergency: { total: number; available: number };
  };
  nodalOfficer: {
    name: string;
    phone: string;
    email: string;
  };
  emergencyHelpline: string;
  freeOpdSchedule: string;
  address: string;
  verified: boolean;
}

const HOSPITAL_ROSTER: HospitalData[] = [
  {
    id: 'HOSP-01',
    name: { en: 'SMS Medical College & Associated Hospital Network', hi: 'एसएमएस मेडिकल कॉलेज एवं संबद्ध अस्पताल नेटवर्क', ur: 'ایس ایم ایس میڈیکل کالج ہسپتال' },
    city: 'Jaipur',
    type: 'Partner Hospital',
    specialty: ['Cardiology', 'ICU Support', 'Dialysis Support', 'Emergency Admission', 'Maternity Care', 'Child Care'],
    concession: { opd: '100% Free (Community Card)', ipd: '25% Discount on Billing', diagnostic: '30% Discount (MRI/CT)', pharmacy: '15% Off on Medicines' },
    beds: {
      icu: { total: 40, available: 6 },
      general: { total: 250, available: 42 },
      emergency: { total: 30, available: 8 }
    },
    nodalOfficer: { name: 'Dr. Rashid Ahmed Khan', phone: '+91 98290-11223', email: 'nodal.sms@rangrezwelfare.org' },
    emergencyHelpline: '0141-2560291 (24x7 Direct Line)',
    freeOpdSchedule: 'Mon - Sat: 9:00 AM to 2:00 PM (Room 104)',
    address: 'JLN Marg, Ashok Nagar, Jaipur, Rajasthan 302004',
    verified: true
  },
  {
    id: 'HOSP-02',
    name: { en: 'Hamidia Specialist Hospital & Research Centre', hi: 'हमीदिया स्पेशलिस्ट अस्पताल एवं रिसर्च सेंटर', ur: 'حمیدیہ اسپیشلسٹ ہسپتال' },
    city: 'Bhopal',
    type: 'Partner Hospital',
    specialty: ['Neurology', 'Eye Care', 'Dental Care', 'ICU Support', 'Maternity Care', 'Dialysis Support'],
    concession: { opd: 'Free OPD Consultation', ipd: '20% Off Bed Charges', diagnostic: '25% Off Lab & Imaging', pharmacy: '10% Off Surgical Items' },
    beds: {
      icu: { total: 30, available: 4 },
      general: { total: 180, available: 29 },
      emergency: { total: 20, available: 5 }
    },
    nodalOfficer: { name: 'Dr. Tariq Mehmood', phone: '+91 94250-88776', email: 'hamidia.welfare@rangrez.org' },
    emergencyHelpline: '0755-4050600 (Emergency Desk)',
    freeOpdSchedule: 'Tues, Thurs, Sat: 10:00 AM to 1:30 PM',
    address: 'Royal Market Road, Sultania Zanana Hospital Campus, Bhopal, MP 462001',
    verified: true
  },
  {
    id: 'HOSP-03',
    name: { en: 'Rangrez Community Charitable Health Clinic', hi: 'रंगरेज सामुदायिक धर्मार्थ स्वास्थ्य क्लिनिक', ur: 'رنگریز خیراتی ہیلتھ کلینک' },
    city: 'Indore',
    type: 'Community Clinic',
    specialty: ['General OPD', 'Child Care', 'Maternity Care', 'Dental Care', 'Free OPD Services'],
    concession: { opd: '100% Free for All Members', ipd: 'N/A (Day Care Only)', diagnostic: '50% Off Blood Tests', pharmacy: 'Free Essential Medicines' },
    beds: {
      icu: { total: 0, available: 0 },
      general: { total: 15, available: 11 },
      emergency: { total: 5, available: 3 }
    },
    nodalOfficer: { name: 'Sister Saima Rangrez', phone: '+91 97520-33445', email: 'indore.clinic@rangrezwelfare.org' },
    emergencyHelpline: '+91 97520-33445 (Day Care Helpline)',
    freeOpdSchedule: 'Daily: 8:00 AM to 8:00 PM (No Appointment Needed)',
    address: 'Bombay Bazar Main Road, Near Jama Masjid, Indore, MP 452002',
    verified: true
  },
  {
    id: 'HOSP-04',
    name: { en: 'Al-Shifa Advanced Diagnostic & MRI Imaging Center', hi: 'अल-शिफा एडवांस्ड डायग्नोस्टिक एवं एमआरआई इमेजिंग सेंटर', ur: 'الشفاء ڈائیگناسٹک سینٹر' },
    city: 'Lucknow',
    type: 'Diagnostic Center',
    specialty: ['Diagnostic Centers', 'MRI & CT Scan', 'Pathology Lab', 'Digital X-Ray', 'Ultrasound'],
    concession: { opd: 'Free Report Consultation', ipd: 'N/A', diagnostic: '35% Discount on 3T MRI & CT Scans, 40% off Blood Profiles', pharmacy: 'N/A' },
    beds: {
      icu: { total: 0, available: 0 },
      general: { total: 0, available: 0 },
      emergency: { total: 2, available: 2 }
    },
    nodalOfficer: { name: 'Mr. Imran Siddiqui (Director)', phone: '+91 99350-66778', email: 'alshifa.dia@rangrezwelfare.org' },
    emergencyHelpline: '0522-2612345 (Booking Desk)',
    freeOpdSchedule: 'Open 24 Hours (Prior Appointment Recommended for MRI)',
    address: 'Victoria Street, Chowk, Lucknow, Uttar Pradesh 226003',
    verified: true
  },
  {
    id: 'HOSP-05',
    name: { en: 'Khidmat Jan Aushadhi & Concessional Pharmacy Network', hi: 'खिदमत जन औषधि एवं रियायती फ़ार्मेसी नेटवर्क', ur: 'خدمت جن اوشدھی فارمیسی' },
    city: 'Jaipur',
    type: 'Pharmacy Network',
    specialty: ['Pharmacy Discounts', 'Generic Medicines', 'Life Saving Drugs', 'Surgical Supplies'],
    concession: { opd: 'Free BP & Sugar Testing', ipd: 'N/A', diagnostic: '10% Off Home Sample Collection', pharmacy: 'Up to 50% Off Generic Drugs, 18% Off Branded Medicines' },
    beds: {
      icu: { total: 0, available: 0 },
      general: { total: 0, available: 0 },
      emergency: { total: 0, available: 0 }
    },
    nodalOfficer: { name: 'Haji Abdul Qadir', phone: '+91 98281-44556', email: 'rx.jaipur@rangrezwelfare.org' },
    emergencyHelpline: '+91 98281-44556 (Home Delivery Line)',
    freeOpdSchedule: 'Daily: 7:00 AM to 11:00 PM (Free Doorstep Delivery for Senior Citizens)',
    address: 'Near Ghat Gate, Moti Doongri Road, Jaipur, Rajasthan 302003',
    verified: true
  },
  {
    id: 'HOSP-06',
    name: { en: 'Fortis Escorts Heart Institute (Community Welfare Tie-Up)', hi: 'फोर्टिस एस्कॉर्ट्स हार्ट इंस्टीट्यूट (सामुदायिक कल्याण अनुबंध)', ur: 'فورٹس ہارٹ انسٹی ٹیوٹ' },
    city: 'New Delhi',
    type: 'Partner Hospital',
    specialty: ['Cardiology', 'ICU Support', 'Emergency Admission', 'Dialysis Support'],
    concession: { opd: '15% Off Specialist OPD', ipd: '15% Off Total Hospital Bill (Excluding Implants)', diagnostic: '20% Off Cardiac Investigations', pharmacy: '10% Off Hospital Pharmacy' },
    beds: {
      icu: { total: 60, available: 9 },
      general: { total: 310, available: 55 },
      emergency: { total: 40, available: 12 }
    },
    nodalOfficer: { name: 'Dr. Sameer Shrivastava', phone: '+91 98100-22334', email: 'welfare.delhi@forties-tieup.org' },
    emergencyHelpline: '011-47135000 (24x7 Cardiac Emergency)',
    freeOpdSchedule: 'Wednesdays: 2:00 PM to 5:00 PM (For Welfare Card Holders)',
    address: 'Okhla Road, Sukhdev Vihar, New Delhi 110025',
    verified: true
  }
];

export default function HospitalNetworkPortal({ currentLanguage, onNavigate }: HospitalNetworkPortalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('ALL');
  const [selectedHospital, setSelectedHospital] = useState<HospitalData | null>(null);

  // Modal states
  const [showAppointmentModal, setShowAppointmentModal] = useState<HospitalData | null>(null);
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

  // Filter logic
  const filteredHospitals = HOSPITAL_ROSTER.filter(item => {
    const text = `${item.name.en} ${item.name.hi} ${item.name.ur} ${item.city} ${item.specialty.join(' ')} ${item.address}`.toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || text.includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'ALL' || item.city === selectedCity;
    const matchesType = selectedType === 'ALL' || item.type === selectedType;
    const matchesSpec = selectedSpecialty === 'ALL' || item.specialty.includes(selectedSpecialty);
    return matchesSearch && matchesCity && matchesType && matchesSpec;
  });

  const cities = ['ALL', 'Jaipur', 'Bhopal', 'Indore', 'Lucknow', 'New Delhi'];
  const types = ['ALL', 'Partner Hospital', 'Community Clinic', 'Diagnostic Center', 'Pharmacy Network'];
  const specialties = ['ALL', 'Cardiology', 'ICU Support', 'Dialysis Support', 'Emergency Admission', 'Maternity Care', 'Child Care', 'Eye Care', 'Dental Care', 'Diagnostic Centers', 'Pharmacy Discounts'];

  const handleExport = (format: 'pdf' | 'excel') => {
    if (format === 'pdf') {
      window.print();
    } else {
      const csv = "data:text/csv;charset=utf-8,"
        + "ID,Hospital Name,City,Type,OPD Concession,IPD Concession,Emergency Helpline,Nodal Officer\n"
        + filteredHospitals.map(h => `"${h.id}","${h.name.en}","${h.city}","${h.type}","${h.concession.opd}","${h.concession.ipd}","${h.emergencyHelpline}","${h.nodalOfficer.name} (${h.nodalOfficer.phone})"`).join("\n");
      const link = document.createElement("a");
      link.setAttribute("href", encodeURI(csv));
      link.setAttribute("download", `Rangrez_Hospital_Network_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    }, 2500);
  };

  return (
    <div className="py-12 bg-[#faf9f6] min-h-screen font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-3 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="h-4 w-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'PARTNER HOSPITAL & HEALTHCARE NETWORK' : currentLanguage === 'ur' ? 'پارٹنر ہسپتال اور ہیلتھ کیئر نیٹ ورک' : 'पार्टनर अस्पताल एवं स्वास्थ्य सेवा नेटवर्क'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white leading-tight">
              {currentLanguage === 'en' ? 'Empaneled Hospital Network & Concessional Treatments' : currentLanguage === 'ur' ? 'رجسٹرڈ ہسپتال نیٹ ورک اور رعایتی علاج' : 'संबद्ध अस्पताल नेटवर्क एवं रियायती चिकित्सा सेवा'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentLanguage === 'en'
                ? 'Access up to 30% discount on IPD/OPD treatments, free doctor consultations, emergency ICU & dialysis bed availability tracking, diagnostic center waivers, and 24x7 nodal officer assistance.'
                : 'आईपीडी/ओपीडी उपचारों पर 30% तक की छूट, मुफ्त डॉक्टर परामर्श, आपातकालीन आईसीयू और डायलिसिस बेड उपलब्धता ट्रैकिंग और 24x7 नोडल अधिकारी सहायता प्राप्त करें।'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10">
            <button
              onClick={() => setShowHealthCardModal(true)}
              className="px-5 py-3 bg-[#FFD54A] text-[#0B132B] hover:bg-amber-400 font-extrabold rounded-xl text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Download Health Card' : currentLanguage === 'ur' ? 'ہیلتھ کارڈ ڈاؤن لوڈ' : 'हेल्थ कार्ड डाउनलोड करें'}</span>
            </button>
            <button
              onClick={() => handleExport('excel')}
              className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Export Roster' : 'रोस्टर निर्यात'}</span>
            </button>
          </div>
        </div>

        {/* Quick Statistics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl shrink-0">
              <Hospital className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 block">{HOSPITAL_ROSTER.length}+</span>
              <span className="text-xs font-semibold text-slate-500">{currentLanguage === 'en' ? 'Empaneled Hospitals' : 'संबद्ध अस्पताल'}</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl shrink-0">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 block">10 - 30%</span>
              <span className="text-xs font-semibold text-slate-500">{currentLanguage === 'en' ? 'Guaranteed Concession' : 'गारंटीड छूट'}</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl shrink-0">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 block">24x7</span>
              <span className="text-xs font-semibold text-slate-500">{currentLanguage === 'en' ? 'Emergency Helpline' : 'आपातकालीन हेल्पलाइन'}</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl shrink-0">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 block">Free OPD</span>
              <span className="text-xs font-semibold text-slate-500">{currentLanguage === 'en' ? 'Scheduled Clinics' : 'निर्धारित क्लिनिक'}</span>
            </div>
          </div>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Box */}
            <div className="md:col-span-5 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                {currentLanguage === 'en' ? 'Search Hospital / City / Specialty' : 'अस्पताल / शहर / विशेषज्ञता खोजें'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentLanguage === 'en' ? 'Type hospital name, city, ICU, Dialysis...' : 'अस्पताल का नाम, शहर, आईसीयू लिखें...'}
                  className="w-full bg-slate-50 border border-slate-200 text-xs p-3 pl-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] transition"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* City Filter */}
            <div className="md:col-span-3">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                {currentLanguage === 'en' ? 'Select City' : 'शहर चुनें'}
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-semibold text-slate-700"
              >
                {cities.map(c => <option key={c} value={c}>{c === 'ALL' ? (currentLanguage === 'en' ? 'All Cities' : 'सभी शहर') : c}</option>)}
              </select>
            </div>

            {/* Type Filter */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                {currentLanguage === 'en' ? 'Facility Type' : 'सुविधा का प्रकार'}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-semibold text-slate-700"
              >
                {types.map(t => <option key={t} value={t}>{t === 'ALL' ? (currentLanguage === 'en' ? 'All Facility Types' : 'सभी सुविधाएं') : t}</option>)}
              </select>
            </div>
          </div>

          {/* Specialty Pills */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mr-2">
              {currentLanguage === 'en' ? 'Specialties:' : 'विशेषज्ञता:'}
            </span>
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition border ${
                  selectedSpecialty === spec
                    ? 'bg-[#004B23] text-white border-[#004B23] shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {spec === 'ALL' ? (currentLanguage === 'en' ? 'All Specialties' : 'सभी विशेषज्ञता') : spec}
              </button>
            ))}
          </div>
        </div>

        {/* Hospital Network Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Hospital className="h-5 w-5 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? `Empaneled Facilities Directory (${filteredHospitals.length})` : `संबद्ध चिकित्सा केंद्र (${filteredHospitals.length})`}</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono bg-white border px-2.5 py-1 rounded-md shadow-xs">
              {currentLanguage === 'en' ? 'Real-time Nodal Roster' : 'रीयल-टाइम नोडल रोस्टर'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredHospitals.map(hosp => (
              <div key={hosp.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-5">
                
                {/* Top Section */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004B23]">
                          {hosp.type}
                        </span>
                        <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-red-500" />
                          {hosp.city}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {hosp.name[currentLanguage]}
                      </h3>
                    </div>

                    <span className="shrink-0 text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border">
                      {hosp.id}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{hosp.address}</span>
                  </p>
                </div>

                {/* Concessions Table Card */}
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 space-y-2.5">
                  <h4 className="text-[10px] font-extrabold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Welfare Card Holder Concessions & Tariffs:' : 'कल्याण कार्ड धारक रियायतें:'}</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-emerald-200/60">
                      <span className="text-[10px] text-slate-400 block font-bold">OPD Consultation:</span>
                      <span className="font-extrabold text-[#004B23]">{hosp.concession.opd}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-emerald-200/60">
                      <span className="text-[10px] text-slate-400 block font-bold">IPD / Bed Charges:</span>
                      <span className="font-extrabold text-[#004B23]">{hosp.concession.ipd}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-emerald-200/60">
                      <span className="text-[10px] text-slate-400 block font-bold">Diagnostics (MRI/CT):</span>
                      <span className="font-bold text-slate-800">{hosp.concession.diagnostic}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-emerald-200/60">
                      <span className="text-[10px] text-slate-400 block font-bold">Pharmacy & Medicines:</span>
                      <span className="font-bold text-slate-800">{hosp.concession.pharmacy}</span>
                    </div>
                  </div>
                </div>

                {/* Bed Availability Status (if applicable) */}
                {(hosp.beds.icu.total > 0 || hosp.beds.general.total > 0) && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <span>{currentLanguage === 'en' ? 'Live Bed Availability:' : 'बेड उपलब्धता स्थिति:'}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs font-extrabold">
                      <span className="text-red-700 bg-red-100 px-2 py-0.5 rounded">ICU: {hosp.beds.icu.available}/{hosp.beds.icu.total}</span>
                      <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Gen: {hosp.beds.general.available}/{hosp.beds.general.total}</span>
                      <span className="text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Emg: {hosp.beds.emergency.available}/{hosp.beds.emergency.total}</span>
                    </div>
                  </div>
                )}

                {/* Nodal Officer & Free OPD Schedule */}
                <div className="space-y-2 text-xs pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span>{currentLanguage === 'en' ? 'Nodal Officer:' : 'नोडल अधिकारी:'} <b>{hosp.nodalOfficer.name}</b></span>
                    </span>
                    <a href={`tel:${hosp.nodalOfficer.phone}`} className="font-mono text-[#004B23] font-extrabold hover:underline flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      <span>{hosp.nodalOfficer.phone}</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-slate-600 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-amber-600" />
                      <span>{currentLanguage === 'en' ? 'Free OPD Schedule:' : 'मुफ्त ओपीडी समय:'}</span>
                    </span>
                    <span className="font-bold text-amber-900">{hosp.freeOpdSchedule}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${hosp.emergencyHelpline?.split(' ')[0] || ''}`}
                    className="flex-1 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-1.5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{currentLanguage === 'en' ? 'Emergency Helpline' : 'आपातकालीन हेल्पलाइन'}</span>
                  </a>

                  <button
                    onClick={() => setShowAppointmentModal(hosp)}
                    className="flex-1 px-4 py-2.5 bg-[#004B23] hover:bg-[#003c1c] text-white rounded-xl text-xs font-extrabold transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="h-3.5 w-3.5 text-[#FFD54A]" />
                    <span>{currentLanguage === 'en' ? 'Request Appointment' : 'अपॉइंटमेंट अनुरोध'}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Modal 1: Online Appointment Request Form */}
        <AnimatePresence>
          {showAppointmentModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
              >
                <div className="bg-[#004B23] text-white p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFD54A] block mb-1">
                      {showAppointmentModal.type} — {showAppointmentModal.city}
                    </span>
                    <h3 className="text-lg font-bold leading-snug">
                      {showAppointmentModal.name[currentLanguage]}
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowAppointmentModal(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  {appointmentSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-8 w-8 stroke-[3]" />
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900">
                        {currentLanguage === 'en' ? 'Appointment Request Submitted!' : 'अपॉइंटमेंट अनुरोध भेजा गया!'}
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        {currentLanguage === 'en'
                          ? `Nodal Officer (${showAppointmentModal.nodalOfficer.name}) has received your request. You will receive SMS confirmation with OPD Token on ${appointmentForm.phone}.`
                          : `नोडल अधिकारी ने आपका अनुरोध प्राप्त कर लिया है। आपको जल्द ही एसएमएस द्वारा टोकन नंबर प्राप्त होगा।`}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-4 text-xs">
                      <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center gap-2.5 text-amber-900">
                        <Award className="h-5 w-5 text-amber-600 shrink-0" />
                        <span>{currentLanguage === 'en' ? 'Welfare Card holders get priority booking and 100% OPD consultation fee waiver.' : 'कल्याण कार्ड धारकों को प्राथमिकता एवं ओपीडी परामर्श शुल्क में 100% छूट मिलती है।'}</span>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Patient Full Name *' : 'रोगी का पूरा नाम *'}</label>
                        <input
                          type="text"
                          required
                          value={appointmentForm.patientName}
                          onChange={e => setAppointmentForm({ ...appointmentForm, patientName: e.target.value })}
                          placeholder="e.g., Mohd. Arif Rangrez"
                          className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Mobile Number (WhatsApp) *' : 'मोबाइल नंबर *'}</label>
                          <input
                            type="tel"
                            required
                            value={appointmentForm.phone}
                            onChange={e => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                            placeholder="98XXXXXX21"
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Age & Gender *' : 'आयु एवं लिंग *'}</label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              required
                              value={appointmentForm.age}
                              onChange={e => setAppointmentForm({ ...appointmentForm, age: e.target.value })}
                              placeholder="Age"
                              className="w-20 bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                            />
                            <select
                              value={appointmentForm.gender}
                              onChange={e => setAppointmentForm({ ...appointmentForm, gender: e.target.value })}
                              className="flex-1 bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                            >
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Preferred Department *' : 'विभाग *'}</label>
                          <select
                            value={appointmentForm.department}
                            onChange={e => setAppointmentForm({ ...appointmentForm, department: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                          >
                            <option>General OPD</option>
                            <option>Cardiology</option>
                            <option>Maternity & Child Care</option>
                            <option>Eye & Dental Care</option>
                            <option>Orthopedic / Surgery</option>
                            <option>Diagnostic / MRI / CT</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Preferred Date *' : 'तारीख *'}</label>
                          <input
                            type="date"
                            required
                            value={appointmentForm.preferredDate}
                            onChange={e => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Welfare Card Number (Optional for discount)' : 'कल्याण कार्ड नंबर (छूट के लिए ऐच्छिक)'}</label>
                        <input
                          type="text"
                          value={appointmentForm.welfareCardNumber}
                          onChange={e => setAppointmentForm({ ...appointmentForm, welfareCardNumber: e.target.value })}
                          placeholder="e.g., RNG-WLF-2026-8811"
                          className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-mono font-semibold text-emerald-800 uppercase"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Brief Symptoms / Notes' : 'लक्षण / विवरण'}</label>
                        <textarea
                          rows={2}
                          value={appointmentForm.symptoms}
                          onChange={e => setAppointmentForm({ ...appointmentForm, symptoms: e.target.value })}
                          placeholder="Briefly explain the health concern..."
                          className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#004B23] outline-none font-semibold"
                        />
                      </div>

                      <div className="pt-3 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowAppointmentModal(null)}
                          className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 font-extrabold rounded-xl text-slate-700 transition"
                        >
                          {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 bg-[#004B23] hover:bg-[#003c1c] text-white font-extrabold rounded-xl shadow-md transition"
                        >
                          {currentLanguage === 'en' ? 'Confirm Appointment & Send SMS' : 'अपॉइंटमेंट पुष्टि करें'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal 2: Download Health Discount Card */}
        <AnimatePresence>
          {showHealthCardModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 p-6 space-y-6 text-center relative"
              >
                <button
                  onClick={() => setShowHealthCardModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>

                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#004B23] flex items-center justify-center mx-auto shadow-inner">
                  <Award className="h-8 w-8 text-[#004B23]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {currentLanguage === 'en' ? 'Community Health Concession Card' : 'सामुदायिक स्वास्थ्य रियायत कार्ड'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Present this digital health card at any empaneled hospital, diagnostic center, or pharmacy in our network to claim 10% to 30% discount immediately.'
                      : 'नेटवर्क के किसी भी अस्पताल या पैथोलॉजी लैब में इस डिजिटल कार्ड को दिखाकर तुरंत 10% से 30% तक की छूट प्राप्त करें।'}
                  </p>
                </div>

                {/* Card preview box */}
                <div className="bg-gradient-to-br from-[#0B132B] to-[#004B23] text-white p-5 rounded-2xl text-left space-y-4 shadow-xl border border-amber-400/40 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#FFD54A] block">RANGREZ WELFARE BHARAT</span>
                      <h4 className="text-base font-serif font-bold text-white">Swasthya Khidmat Card</h4>
                    </div>
                    <Award className="h-6 w-6 text-[#FFD54A]" />
                  </div>

                  <div className="font-mono text-xs text-slate-200 tracking-wider">
                    ID: RNG-HLTH-2026-9908
                  </div>

                  <div className="flex justify-between items-end pt-2 border-t border-white/10 text-[10px]">
                    <div>
                      <span className="text-slate-400 block">Holder Status</span>
                      <span className="font-bold text-emerald-300">Verified Community Member</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block">Validity</span>
                      <span className="font-bold text-white">Lifetime (Pan-India)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      window.print();
                      setShowHealthCardModal(false);
                    }}
                    className="w-full py-3 bg-[#004B23] hover:bg-[#003c1c] text-white font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer text-xs"
                  >
                    <Printer className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'Print / Download PDF Card' : 'पीडीएफ कार्ड डाउनलोड करें'}</span>
                  </button>
                  <button
                    onClick={() => setShowHealthCardModal(false)}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold rounded-xl transition text-xs"
                  >
                    {currentLanguage === 'en' ? 'Close' : 'बंद करें'}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
