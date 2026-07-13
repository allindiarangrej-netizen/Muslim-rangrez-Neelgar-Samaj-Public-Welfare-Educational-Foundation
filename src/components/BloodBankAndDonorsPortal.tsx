import React, { useState, useEffect } from 'react';
import { getSupabase } from '../lib/supabaseClient';
import {
  Droplet, Heart, HeartPulse, Search, Filter, Phone, MapPin, Award,
  AlertTriangle, ShieldCheck, CheckCircle2, Calendar, UserCheck, Clock,
  PlusCircle, Download, Printer, Share2, Activity, Bell, Check, X,
  AlertCircle, HelpCircle, Building2, ChevronRight, Send, Flame, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface BloodBankAndDonorsPortalProps {
  currentLanguage: Language;
  defaultTab?: 'stock' | 'donors' | 'banks' | 'pledge';
  onNavigate?: (tab: string) => void;
}

interface BloodStock {
  group: string;
  units: number;
  status: 'Critical' | 'Low' | 'Adequate' | 'Surplus';
  components: {
    whole: number;
    prc: number;
    platelets: number;
    plasma: number;
    cryo: number;
  };
}

interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  unitsRequired: number;
  hospital: string;
  city: string;
  urgency: 'Extreme Emergency (Within 2 Hours)' | 'Urgent (Within 6 Hours)' | 'Planned Surgery';
  contactPerson: string;
  contactPhone: string;
  timePosted: string;
}

interface BloodDonor {
  id: string;
  name: string;
  bloodGroup: string;
  city: string;
  locality: string;
  phone: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
  status: 'Available' | 'Recently Donated' | 'Emergency Only';
  lastDonationDate: string;
  totalDonations: number;
  badge: 'Gold Donor - 10+ donations' | 'Silver Donor - 5+ donations' | 'Verified Regular Donor' | 'New Volunteer';
  verified: boolean;
}

interface BloodBankCoordinator {
  id: string;
  name: string;
  city: string;
  bankName: string;
  phone: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
  address: string;
  availability: string;
}

const INITIAL_STOCK: BloodStock[] = [
  { group: 'A+', units: 48, status: 'Adequate', components: { whole: 18, prc: 15, platelets: 8, plasma: 5, cryo: 2 } },
  { group: 'A-', units: 6, status: 'Low', components: { whole: 2, prc: 2, platelets: 1, plasma: 1, cryo: 0 } },
  { group: 'B+', units: 62, status: 'Surplus', components: { whole: 25, prc: 20, platelets: 10, plasma: 5, cryo: 2 } },
  { group: 'B-', units: 4, status: 'Critical', components: { whole: 1, prc: 2, platelets: 1, plasma: 0, cryo: 0 } },
  { group: 'O+', units: 75, status: 'Surplus', components: { whole: 30, prc: 25, platelets: 12, plasma: 6, cryo: 2 } },
  { group: 'O-', units: 3, status: 'Critical', components: { whole: 1, prc: 1, platelets: 1, plasma: 0, cryo: 0 } },
  { group: 'AB+', units: 28, status: 'Adequate', components: { whole: 10, prc: 10, platelets: 5, plasma: 2, cryo: 1 } },
  { group: 'AB-', units: 5, status: 'Low', components: { whole: 2, prc: 1, platelets: 1, plasma: 1, cryo: 0 } },
  { group: 'Bombay (Oh)', units: 1, status: 'Critical', components: { whole: 1, prc: 0, platelets: 0, plasma: 0, cryo: 0 } }
];

const INITIAL_REQUESTS: BloodRequest[] = [
  {
    id: 'REQ-881',
    patientName: 'Master Zaid Khan (7 yrs - Thalassemia)',
    bloodGroup: 'B-',
    unitsRequired: 2,
    hospital: 'SMS Hospital, ICU Ward 4',
    city: 'Jaipur',
    urgency: 'Extreme Emergency (Within 2 Hours)',
    contactPerson: 'Mr. Imran Khan (Father)',
    contactPhone: '9829011223',
    timePosted: '15 Mins Ago'
  },
  {
    id: 'REQ-882',
    patientName: 'Mrs. Shabana Bano (Maternity Surgery)',
    bloodGroup: 'O-',
    unitsRequired: 3,
    hospital: 'Hamidia Hospital, Zanana Ward',
    city: 'Bhopal',
    urgency: 'Urgent (Within 6 Hours)',
    contactPerson: 'Dr. Tariq Ahmed',
    contactPhone: '9425088776',
    timePosted: '45 Mins Ago'
  },
  {
    id: 'REQ-883',
    patientName: 'Mr. Abdul Rahman (Cardiac Bypass)',
    bloodGroup: 'A+',
    unitsRequired: 4,
    hospital: 'MY Hospital, Cardiac OT',
    city: 'Indore',
    urgency: 'Planned Surgery',
    contactPerson: 'Brother Sadiq Rangrez',
    contactPhone: '9752033445',
    timePosted: '2 Hours Ago'
  }
];

const DONOR_ROSTER: BloodDonor[] = [
  { id: 'DON-101', name: 'Mohd. Irfan Rangrez', bloodGroup: 'O+', city: 'Jaipur', locality: 'Ramganj Bazar', phone: '+91 98280-11223', status: 'Available', lastDonationDate: '2025-11-10', totalDonations: 14, badge: 'Gold Donor - 10+ donations', verified: true },
  { id: 'DON-102', name: 'Brother Sadiq Ali', bloodGroup: 'B-', city: 'Bhopal', locality: 'Ibrahimpura', phone: '+91 94250-33445', status: 'Available', lastDonationDate: '2025-10-15', totalDonations: 12, badge: 'Gold Donor - 10+ donations', verified: true },
  { id: 'DON-103', name: 'Sister Saima Bano', bloodGroup: 'AB+', city: 'Indore', locality: 'Bombay Bazar', phone: '+91 97520-55667', status: 'Available', lastDonationDate: '2025-12-01', totalDonations: 8, badge: 'Silver Donor - 5+ donations', verified: true },
  { id: 'DON-104', name: 'Mr. Tariq Mehmood', bloodGroup: 'O-', city: 'Jaipur', locality: 'Moti Doongri', phone: '+91 99290-88990', status: 'Emergency Only', lastDonationDate: '2026-01-10', totalDonations: 6, badge: 'Silver Donor - 5+ donations', verified: true },
  { id: 'DON-105', name: 'Dr. Rashid Khan', bloodGroup: 'A+', city: 'Lucknow', locality: 'Chowk', phone: '+91 99350-11223', status: 'Recently Donated', lastDonationDate: '2026-06-15', totalDonations: 19, badge: 'Gold Donor - 10+ donations', verified: true },
  { id: 'DON-106', name: 'Mr. Adnan Ahmed', bloodGroup: 'B+', city: 'New Delhi', locality: 'Okhla Vihar', phone: '+91 98100-44556', status: 'Available', lastDonationDate: '2025-08-20', totalDonations: 4, badge: 'Verified Regular Donor', verified: true },
  { id: 'DON-107', name: 'Mr. Zeeshan Rangrez', bloodGroup: 'Bombay (Oh)', city: 'Jaipur', locality: 'Ghat Gate', phone: '+91 98281-99000', status: 'Available', lastDonationDate: '2025-09-01', totalDonations: 7, badge: 'Silver Donor - 5+ donations', verified: true }
];

const COORDINATORS: BloodBankCoordinator[] = [
  { id: 'COORD-1', name: 'Haji Abdul Qadir (State Head)', city: 'Jaipur', bankName: 'SMS Hospital Red Cross Blood Bank', phone: '+91 98281-44556', address: 'JLN Marg, Jaipur, Rajasthan 302004', availability: '24x7 Emergency Line' },
  { id: 'COORD-2', name: 'Dr. Tariq Mehmood', city: 'Bhopal', bankName: 'Hamidia Hospital Blood Centre', phone: '+91 94250-88776', address: 'Royal Market Road, Bhopal, MP 462001', availability: 'Mon - Sat (8 AM - 8 PM)' },
  { id: 'COORD-3', name: 'Sister Saima Rangrez', city: 'Indore', bankName: 'MY Hospital Rotary Blood Bank', phone: '+91 97520-33445', address: 'MY Hospital Campus, Indore, MP 452001', availability: '24x7 Emergency Line' },
  { id: 'COORD-4', name: 'Mr. Imran Siddiqui', city: 'Lucknow', bankName: 'KGMU Transfusion Medicine Dept.', phone: '+91 99350-66778', address: 'Chowk, Lucknow, UP 226003', availability: '24x7 Emergency Line' }
];

export default function BloodBankAndDonorsPortal({ currentLanguage, defaultTab = 'stock', onNavigate }: BloodBankAndDonorsPortalProps) {
  const [activeTab, setActiveTab] = useState<'stock' | 'donors' | 'banks' | 'pledge'>(defaultTab);

  const [donors, setDonors] = useState<BloodDonor[]>(DONOR_ROSTER);
  const [loading, setLoading] = useState(true);
  
  const [donorSearch, setDonorSearch] = useState('');
  const [donorGroupFilter, setDonorGroupFilter] = useState('ALL');
  const [donorCityFilter, setDonorCityFilter] = useState('ALL');
  const [donorStatusFilter, setDonorStatusFilter] = useState('ALL');

  useEffect(() => {
    async function fetchDonors() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('blood_donors').select('*');
        if (error) {
          console.error('Error fetching donors:', error);
        } else if (data && data.length > 0) {
          const dbDonors = data.map(d => ({
            id: d.id,
            name: d.name,
            bloodGroup: d.blood_group || d.bloodGroup,
            city: d.city,
            locality: d.locality || '',
            phone: d.phone,
            status: d.status || 'Available',
            lastDonationDate: d.last_donation_date || d.lastDonationDate || '',
            totalDonations: d.total_donations || d.totalDonations || 0,
            badge: d.badge || 'Verified Regular Donor',
            verified: d.verified ?? true,
            whatsapp: d.whatsapp,
            showWhatsAppPublicly: d.show_whatsapp_publicly
          }));
          setDonors([...dbDonors, ...DONOR_ROSTER]);
        }
      } catch (err) {
        console.error('Error fetching donors:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDonors();
  }, []);

  // Modal states
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showSosModal, setShowSosModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Forms state
  const [requestForm, setRequestForm] = useState({
    patientName: '',
    bloodGroup: 'B-',
    unitsRequired: 2,
    hospital: '',
    city: 'Jaipur',
    urgency: 'Extreme Emergency (Within 2 Hours)' as any,
    contactPerson: '',
    contactPhone: ''
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Pledge form & Eligibility state
  const [eligibilityCheck, setEligibilityCheck] = useState({
    age: 25,
    weight: 65,
    lastDonatedMonthsAgo: 6,
    healthy: true,
    noInfection: true
  });
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const [pledgeForm, setPledgeForm] = useState({
    fullName: '',
    phone: '',
    bloodGroup: 'O+',
    city: 'Jaipur',
    locality: '',
    agreeTerms: false
  });
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);

  // Filter donors logic
  const filteredDonors = donors.filter(d => {
    const text = `${d.name} ${d.city} ${d.locality} ${d.bloodGroup}`.toLowerCase();
    const matchesSearch = donorSearch.trim() === '' || text.includes(donorSearch.toLowerCase());
    const matchesGroup = donorGroupFilter === 'ALL' || d.bloodGroup === donorGroupFilter;
    const matchesCity = donorCityFilter === 'ALL' || d.city === donorCityFilter;
    const matchesStatus = donorStatusFilter === 'ALL' || d.status === donorStatusFilter;
    return matchesSearch && matchesGroup && matchesCity && matchesStatus;
  });

  const bloodGroups = ['ALL', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Bombay (Oh)'];
  const cities = ['ALL', 'Jaipur', 'Bhopal', 'Indore', 'Lucknow', 'New Delhi'];

  const handleExport = (format: 'pdf' | 'excel') => {
    if (format === 'pdf') {
      window.print();
    } else {
      const csv = "data:text/csv;charset=utf-8,"
        + "ID,Name,Blood Group,City,Locality,Phone,Status,Total Donations,Badge\n"
        + filteredDonors.map(d => `"${d.id}","${d.name}","${d.bloodGroup}","${d.city}","${d.locality}","${d.phone}","${d.status}",${d.totalDonations},"${d.badge}"`).join("\n");
      const link = document.createElement("a");
      link.setAttribute("href", encodeURI(csv));
      link.setAttribute("download", `Rangrez_Blood_Donors_Directory_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const eligible =
      eligibilityCheck.age >= 18 &&
      eligibilityCheck.age <= 65 &&
      eligibilityCheck.weight >= 45 &&
      eligibilityCheck.lastDonatedMonthsAgo >= 3 &&
      eligibilityCheck.healthy &&
      eligibilityCheck.noInfection;
    setIsEligible(eligible);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setShowRequestModal(false);
    }, 2500);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSubmitted(true);
    setTimeout(() => {
      setPledgeSubmitted(false);
      setShowCertificateModal(true);
    }, 1500);
  };

  return (
    <div className="py-12 bg-[#faf9f6] min-h-screen font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#780000] via-[#9e0000] to-[#5a0000] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-red-400/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-3 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-400/40 text-red-200 text-xs font-bold uppercase tracking-wider">
              <Droplet className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" />
              <span>{currentLanguage === 'en' ? 'LIFE-SAVING BLOOD BANK & DONOR BRIGADE' : currentLanguage === 'ur' ? 'زندگی بچانے والا بلڈ بینک اور عطیہ دہندگان کا نیٹ ورک' : 'जीवनरक्षक ब्लड बैंक एवं रक्तदाता नेटवर्क'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white leading-tight">
              {currentLanguage === 'en' ? 'Community Blood Bank, Live Stock & Verified Donor Directory' : currentLanguage === 'ur' ? 'کمیونٹی بلڈ بینک، لائیو اسٹاک اور تصدیق شدہ ڈونر ڈائریکٹری' : 'सामुदायिक ब्लड बैंक, लाइव स्टॉक एवं सत्यापित रक्तदाता निर्देशिका'}
            </h1>
            <p className="text-red-100 text-xs sm:text-sm leading-relaxed">
              {currentLanguage === 'en'
                ? 'Check real-time blood stock across 8 groups + rare Bombay Blood group, issue emergency SOS broadcasts to registered volunteers, connect with district blood coordinators, and pledge to save lives.'
                : '8 ब्लड ग्रुप + दुर्लभ बॉम्बे ब्लड ग्रुप के रियल-टाइम स्टॉक की जांच करें, आपातकालीन एसओएस अलर्ट भेजें, जिला ब्लड कोऑर्डिनेटर से जुड़ें और जीवन बचाने का संकल्प लें।'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10">
            <button
              onClick={() => setShowRequestModal(true)}
              className="px-5 py-3 bg-[#FFD54A] text-[#0B132B] hover:bg-amber-400 font-extrabold rounded-xl text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <AlertTriangle className="h-4 w-4 text-red-700" />
              <span>{currentLanguage === 'en' ? 'Post Emergency Blood Request' : currentLanguage === 'ur' ? 'ہنگامی خون کی درخواست' : 'आपातकालीन रक्त अनुरोध करें'}</span>
            </button>
            <button
              onClick={() => setShowSosModal(true)}
              className="px-4 py-3 bg-red-950/80 hover:bg-red-900 text-white font-extrabold rounded-xl text-xs border border-red-400/40 transition flex items-center justify-center gap-2 cursor-pointer animate-pulse"
            >
              <Bell className="h-4 w-4 text-red-300" />
              <span>{currentLanguage === 'en' ? 'SOS Broadcast Alert' : 'एसओएस ब्रॉडकास्ट अलर्ट'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('stock')}
            className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'stock'
                ? 'bg-[#780000] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Droplet className="h-4 w-4 fill-current" />
            <span>{currentLanguage === 'en' ? '1. Live Blood Stock & Requests' : currentLanguage === 'ur' ? 'لائیو بلڈ اسٹاک اور درخواستیں' : '1. लाइव ब्लड स्टॉक एवं अनुरोध'}</span>
          </button>

          <button
            onClick={() => setActiveTab('donors')}
            className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'donors'
                ? 'bg-[#780000] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <UserCheck className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? `2. Verified Donors Directory (${DONOR_ROSTER.length})` : currentLanguage === 'ur' ? 'تصدیق شدہ ڈونرز ڈائریکٹری' : `2. सत्यापित रक्तदाता निर्देशिका (${DONOR_ROSTER.length})`}</span>
          </button>

          <button
            onClick={() => setActiveTab('banks')}
            className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'banks'
                ? 'bg-[#780000] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? '3. Blood Banks & Coordinators' : currentLanguage === 'ur' ? 'بلڈ بینک اور کوآرڈینیٹرز' : '3. ब्लड बैंक एवं जिला समन्वयक'}</span>
          </button>

          <button
            onClick={() => setActiveTab('pledge')}
            className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'pledge'
                ? 'bg-[#780000] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="h-4 w-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? '4. Pledge & Eligibility Checker' : currentLanguage === 'ur' ? 'عطیہ کا عہد اور اہلیت' : '4. रक्तदान संकल्प एवं पात्रता'}</span>
          </button>
        </div>

        {/* TAB 1: LIVE BLOOD STOCK & REQUEST FEED */}
        {activeTab === 'stock' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            
            {/* Stock Dashboard */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#780000]" />
                    <span>{currentLanguage === 'en' ? 'Real-Time Blood Group & Component Stock Grid' : 'रीयल-टाइम ब्लड ग्रुप एवं कंपोनेंट स्टॉक ग्रिड'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">{currentLanguage === 'en' ? 'Updated continuously across empaneled blood banks and community blood reserves.' : 'संबद्ध ब्लड बैंकों और सामुदायिक रक्त भंडार से लगातार अपडेट किया जाता है।'}</p>
                </div>
                <button
                  onClick={() => handleExport('excel')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Export Stock Dump' : 'स्टॉक डाउनलोड'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {INITIAL_STOCK.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                      item.status === 'Critical'
                        ? 'bg-red-50/80 border-red-300 shadow-xs'
                        : item.status === 'Low'
                        ? 'bg-amber-50/80 border-amber-300'
                        : 'bg-white border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-2xl font-black text-[#780000] font-serif">{item.group}</span>
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        item.status === 'Critical' ? 'bg-red-600 text-white animate-pulse' :
                        item.status === 'Low' ? 'bg-amber-500 text-white' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="my-3">
                      <span className="text-3xl font-black text-slate-900">{item.units}</span>
                      <span className="text-xs text-slate-500 ml-1 font-semibold">Units</span>
                    </div>

                    {/* Components dropdown / breakdown */}
                    <div className="pt-3 border-t border-slate-200/60 text-[10px] space-y-1 text-slate-600 font-medium">
                      <div className="flex justify-between"><span>Whole Blood:</span><span className="font-bold">{item.components.whole}</span></div>
                      <div className="flex justify-between"><span>Platelets:</span><span className="font-bold text-red-700">{item.components.platelets}</span></div>
                      <div className="flex justify-between"><span>Plasma / Cryo:</span><span className="font-bold">{item.components.plasma + item.components.cryo}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Emergency Requests Feed */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
                  <h3 className="text-lg font-bold text-slate-900">{currentLanguage === 'en' ? 'Live Emergency Blood Request Feed (Urgent)' : 'लाइव आपातकालीन रक्त अनुरोध फ़ीड (अति आवश्यक)'}</h3>
                </div>
                <span className="text-xs font-semibold text-slate-400">{currentLanguage === 'en' ? 'Showing 3 active critical alerts' : '3 सक्रिय अलर्ट'}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INITIAL_REQUESTS.map(req => (
                  <div key={req.id} className="bg-red-50/40 border-2 border-red-200 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="bg-red-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Droplet className="h-3 w-3 fill-current" />
                          <span>{req.bloodGroup}</span>
                        </span>
                        <span className="text-[10px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded uppercase">
                          {req.urgency?.split(' ')[0] || ''} {req.urgency?.split(' ')[1] || ''}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{req.patientName}</h4>
                      <p className="text-xs text-slate-600 flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <span>{req.hospital}, {req.city}</span>
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-red-100 text-xs space-y-1">
                      <div className="flex justify-between text-slate-600">
                        <span>Units Needed:</span>
                        <span className="font-black text-red-700 text-sm">{req.unitsRequired} Units</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Contact Person:</span>
                        <span className="font-bold text-slate-800">{req.contactPerson}</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-[10px] pt-1 border-t border-slate-100">
                        <span>Posted: {req.timePosted}</span>
                        <span>ID: {req.id}</span>
                      </div>
                    </div>

                    <a
                      href={`tel:${req.contactPhone}`}
                      className="w-full py-3 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{currentLanguage === 'en' ? `Call Contact (${req.contactPhone})` : `कॉल करें (${req.contactPhone})`}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* TAB 2: VERIFIED DONORS DIRECTORY */}
        {activeTab === 'donors' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{currentLanguage === 'en' ? 'Search Donor Name / Locality' : 'रक्तदाता का नाम / मोहल्ला खोजें'}</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={donorSearch}
                      onChange={e => setDonorSearch(e.target.value)}
                      placeholder={currentLanguage === 'en' ? 'Type name, locality e.g., Ramganj, Chowk...' : 'नाम, मोहल्ला लिखें...'}
                      className="w-full bg-slate-50 border border-slate-200 text-xs p-3 pl-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#780000]"
                    />
                    <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{currentLanguage === 'en' ? 'Blood Group' : 'ब्लड ग्रुप'}</label>
                  <select
                    value={donorGroupFilter}
                    onChange={e => setDonorGroupFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#780000] font-extrabold text-[#780000]"
                  >
                    {bloodGroups.map(g => <option key={g} value={g}>{g === 'ALL' ? (currentLanguage === 'en' ? 'All Groups' : 'सभी ग्रुप') : g}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{currentLanguage === 'en' ? 'City' : 'शहर'}</label>
                  <select
                    value={donorCityFilter}
                    onChange={e => setDonorCityFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#780000] font-semibold"
                  >
                    {cities.map(c => <option key={c} value={c}>{c === 'ALL' ? (currentLanguage === 'en' ? 'All Cities' : 'सभी शहर') : c}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{currentLanguage === 'en' ? 'Availability' : 'उपलब्धता'}</label>
                  <select
                    value={donorStatusFilter}
                    onChange={e => setDonorStatusFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#780000] font-semibold"
                  >
                    <option value="ALL">{currentLanguage === 'en' ? 'All Status' : 'सभी स्थिति'}</option>
                    <option value="Available">{currentLanguage === 'en' ? 'Available Now' : 'अभी उपलब्ध'}</option>
                    <option value="Recently Donated">{currentLanguage === 'en' ? 'Recently Donated' : 'हाल ही में दिया'}</option>
                    <option value="Emergency Only">{currentLanguage === 'en' ? 'Emergency Only' : 'केवल आपातकाल'}</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-xs">
                <span className="text-slate-500 font-semibold">{currentLanguage === 'en' ? `Showing ${filteredDonors.length} verified community donors` : `${filteredDonors.length} सत्यापित रक्तदाता`}</span>
                <div className="flex gap-2">
                  <button onClick={() => handleExport('excel')} className="text-emerald-700 font-bold flex items-center gap-1 hover:underline">
                    <Download className="h-3.5 w-3.5" /> Export Excel
                  </button>
                  <button onClick={() => handleExport('pdf')} className="text-slate-600 font-bold flex items-center gap-1 hover:underline ml-3">
                    <Printer className="h-3.5 w-3.5" /> Print List
                  </button>
                </div>
              </div>
            </div>

            {/* Donors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDonors.map(donor => (
                <div key={donor.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#780000] flex items-center justify-center font-black text-lg shadow-inner shrink-0 font-serif">
                          {donor.bloodGroup}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base leading-snug flex items-center gap-1.5">
                            <span>{donor.name}</span>
                            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                          </h3>
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="h-3 w-3 text-red-500" />
                            <span>{donor.locality}, {donor.city}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">{currentLanguage === 'en' ? 'Donor Status:' : 'स्थिति:'}</span>
                        <span className={`font-extrabold px-2 py-0.5 rounded text-[10px] uppercase ${
                          donor.status === 'Available' ? 'bg-emerald-100 text-emerald-800' :
                          donor.status === 'Recently Donated' ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {donor.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>{currentLanguage === 'en' ? 'Last Donated:' : 'अंतिम रक्तदान:'}</span>
                        <span className="font-mono font-bold text-slate-800">{donor.lastDonationDate}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>{currentLanguage === 'en' ? 'Total Donations:' : 'कुल रक्तदान:'}</span>
                        <span className="font-bold text-[#780000]">{donor.totalDonations} Times ({donor.badge?.split(' - ')[0] || 'N/A'})</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 border-t border-slate-100 pt-1.5 mt-1">
                        <span>{currentLanguage === 'en' ? 'Mobile:' : 'मोबाइल:'}</span>
                        <span className="font-mono font-bold text-slate-800">{donor.phone ? donor.phone.replace(/(\d{5})\d{5}/, '$1XXXXX') : 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                    <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <a
                          href={`tel:${donor.phone}`}
                          className="flex-1 py-2.5 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>{currentLanguage === 'en' ? 'Call Donor' : 'कॉल करें'}</span>
                        </a>
                        <button
                          onClick={() => alert(`Sending automated SMS & WhatsApp notification to ${donor.name} (${donor.phone}) regarding urgent requirement.`)}
                          className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1"
                          title="Send WhatsApp Alert"
                        >
                          <Send className="h-3.5 w-3.5 text-emerald-600" />
                          <span>Alert</span>
                        </button>
                      </div>

                      {/* WhatsApp Button */}
                      {donor.showWhatsAppPublicly && donor.whatsapp && (
                        <a
                          href={`https://wa.me/${donor.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
                        </a>
                      )}
                    </div>
                </div>
              ))}
            </div>

            {/* Privacy Safeguard Note */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-center gap-3 text-xs text-amber-900">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0" />
              <span>{currentLanguage === 'en' ? 'Privacy Safeguard: All donor numbers are verified by district coordinators. Please do not spam donors. Contact only during medical emergencies or check eligibility window before calling.' : 'गोपनीयता सुरक्षा: सभी रक्तदाता नंबर जिला समन्वयकों द्वारा सत्यापित हैं। कृपया अनावश्यक कॉल न करें और केवल चिकित्सा आपात स्थिति में संपर्क करें।'}</span>
            </div>

          </motion.div>
        )}

        {/* TAB 3: BLOOD BANKS & DISTRICT COORDINATORS */}
        {activeTab === 'banks' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#780000]" />
                  <span>{currentLanguage === 'en' ? 'Empaneled Blood Banks & District Volunteer Coordinators' : 'संबद्ध ब्लड बैंक एवं जिला स्वयंसेवक समन्वयक'}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">{currentLanguage === 'en' ? 'Direct contact numbers for 24x7 blood component arrangements and camp planning.' : '24x7 रक्त घटक व्यवस्था और शिविर योजना के लिए सीधे संपर्क नंबर।'}</p>
              </div>
              <button onClick={() => handleExport('excel')} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" /> Export List
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COORDINATORS.map(c => (
                <div key={c.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-red-100 text-[#780000]">
                        {c.city} District Coordinator
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {c.availability}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                    <p className="text-xs font-semibold text-[#780000]">{c.bankName}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{c.address}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                    <a href={`tel:${c.phone}`} className="w-full py-2.5 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{currentLanguage === 'en' ? `Call Coordinator (${c.phone.replace(/(\d{5})\d{5}/, '$1XXXXX')})` : `कॉल करें (${c.phone.replace(/(\d{5})\d{5}/, '$1XXXXX')})`}</span>
                    </a>
                    
                    {/* WhatsApp Button */}
                    {c.showWhatsAppPublicly && c.whatsapp && (
                      <a
                        href={`https://wa.me/${c.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 4: PLEDGE FORM & ELIGIBILITY CHECKER */}
        {activeTab === 'pledge' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Eligibility Checker Tool */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#780000]" />
                  <span>{currentLanguage === 'en' ? 'Blood Donation Eligibility Checker' : 'रक्तदान पात्रता जांच उपकरण'}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">{currentLanguage === 'en' ? 'Verify if you meet standard medical parameters to donate safely.' : 'जांचें कि क्या आप सुरक्षित रूप से रक्तदान करने के लिए मानक मापदंडों को पूरा करते हैं।'}</p>
              </div>

              <form onSubmit={handleCheckEligibility} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Your Age (Years)' : 'आपकी आयु (वर्ष)'}</label>
                    <input
                      type="number"
                      required
                      value={eligibilityCheck.age}
                      onChange={e => setEligibilityCheck({ ...eligibilityCheck, age: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Weight (KG)' : 'वजन (किलो)'}</label>
                    <input
                      type="number"
                      required
                      value={eligibilityCheck.weight}
                      onChange={e => setEligibilityCheck({ ...eligibilityCheck, weight: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Months since last blood donation' : 'अंतिम रक्तदान के बाद कितने महीने हुए'}</label>
                  <input
                    type="number"
                    required
                    value={eligibilityCheck.lastDonatedMonthsAgo}
                    onChange={e => setEligibilityCheck({ ...eligibilityCheck, lastDonatedMonthsAgo: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-2 text-slate-700 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={eligibilityCheck.healthy}
                      onChange={e => setEligibilityCheck({ ...eligibilityCheck, healthy: e.target.checked })}
                      className="rounded text-[#780000] focus:ring-[#780000] w-4 h-4"
                    />
                    <span>{currentLanguage === 'en' ? 'I feel healthy and well today (No fever/cold)' : 'मैं आज स्वस्थ महसूस कर रहा हूँ (कोई बुखार/जुकाम नहीं)'}</span>
                  </label>
                  <label className="flex items-center gap-2 text-slate-700 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={eligibilityCheck.noInfection}
                      onChange={e => setEligibilityCheck({ ...eligibilityCheck, noInfection: e.target.checked })}
                      className="rounded text-[#780000] focus:ring-[#780000] w-4 h-4"
                    />
                    <span>{currentLanguage === 'en' ? 'No recent tattoos, major surgery, or antibiotics in last 3 months' : 'पिछले 3 महीनों में कोई टैटू, बड़ी सर्जरी या एंटीबायोटिक नहीं'}</span>
                  </label>
                </div>

                <button type="submit" className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-extrabold rounded-xl transition">
                  {currentLanguage === 'en' ? 'Check Eligibility Status' : 'पात्रता स्थिति जांचें'}
                </button>
              </form>

              {isEligible !== null && (
                <div className={`p-4 rounded-2xl border flex items-center gap-3 text-xs ${
                  isEligible ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold' : 'bg-red-50 border-red-300 text-red-900 font-bold'
                }`}>
                  {isEligible ? <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" /> : <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />}
                  <div>
                    {isEligible ? (
                      currentLanguage === 'en' ? 'You are 100% Eligible! Please proceed to fill out the pledge form on the right.' : 'आप 100% पात्र हैं! कृपया दाईं ओर संकल्प फॉर्म भरें।'
                    ) : (
                      currentLanguage === 'en' ? 'You do not meet standard criteria right now (Must be 18-65 yrs, >45kg, and 3+ months gap since last donation).' : 'आप वर्तमान में मानक मानदंडों को पूरा नहीं करते हैं (आयु 18-65 वर्ष, वजन >45 किलो और 3 महीने का अंतर होना चाहिए)।'
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Register as New Donor Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-[#780000]" />
                  <span>{currentLanguage === 'en' ? 'Register in Rangrez Blood Donor Brigade' : 'रंगरेज रक्तदाता दल में पंजीकरण करें'}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">{currentLanguage === 'en' ? 'Your details will be verified by the district coordinator. You will be awarded a digital volunteer badge and certificate upon confirmation.' : 'आपके विवरण का जिला समन्वयक द्वारा सत्यापन किया जाएगा। पुष्टि होने पर आपको डिजिटल वालंटियर बैज और प्रमाण पत्र प्रदान किया जाएगा।'}</p>
              </div>

              {pledgeSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">{currentLanguage === 'en' ? 'Welcome to the Life-Saving Brigade!' : 'जीवनरक्षक दल में आपका स्वागत है!'}</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">{currentLanguage === 'en' ? 'Your pledge is registered. Generating your digital appreciation certificate...' : 'आपका संकल्प पंजीकृत हो गया है। आपका प्रमाण पत्र तैयार किया जा रहा है...'}</p>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Full Name *' : 'पूरा नाम *'}</label>
                      <input
                        type="text"
                        required
                        value={pledgeForm.fullName}
                        onChange={e => setPledgeForm({ ...pledgeForm, fullName: e.target.value })}
                        placeholder="e.g., Brother Imran Rangrez"
                        className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Mobile Number (WhatsApp) *' : 'मोबाइल नंबर *'}</label>
                      <input
                        type="tel"
                        required
                        value={pledgeForm.phone}
                        onChange={e => setPledgeForm({ ...pledgeForm, phone: e.target.value })}
                        placeholder="98XXXXXX21"
                        className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Blood Group *' : 'ब्लड ग्रुप *'}</label>
                      <select
                        value={pledgeForm.bloodGroup}
                        onChange={e => setPledgeForm({ ...pledgeForm, bloodGroup: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-extrabold text-[#780000]"
                      >
                        {bloodGroups.filter(g => g !== 'ALL').map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'City / District *' : 'शहर / जिला *'}</label>
                      <select
                        value={pledgeForm.city}
                        onChange={e => setPledgeForm({ ...pledgeForm, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                      >
                        {cities.filter(c => c !== 'ALL').map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Area / Locality *' : 'मोहल्ला / क्षेत्र *'}</label>
                    <input
                      type="text"
                      required
                      value={pledgeForm.locality}
                      onChange={e => setPledgeForm({ ...pledgeForm, locality: e.target.value })}
                      placeholder="e.g., Ramganj Bazar, Moti Doongri Road..."
                      className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                    />
                  </div>

                  <label className="flex items-start gap-2 text-slate-600 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={pledgeForm.agreeTerms}
                      onChange={e => setPledgeForm({ ...pledgeForm, agreeTerms: e.target.checked })}
                      className="rounded text-[#780000] focus:ring-[#780000] w-4 h-4 mt-0.5"
                    />
                    <span>{currentLanguage === 'en' ? 'I voluntarily pledge to donate blood for community emergencies and authorize coordinators to contact me when urgent need arises.' : 'मैं स्वेच्छा से सामुदायिक आपात स्थिति के लिए रक्तदान करने का संकल्प लेता हूँ और समन्वयकों को संपर्क करने की अनुमति देता हूँ।'}</span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                    <span>{currentLanguage === 'en' ? 'Submit Pledge & Get Certificate' : 'संकल्प जमा करें एवं प्रमाण पत्र प्राप्त करें'}</span>
                  </button>
                </form>
              )}
            </div>

          </motion.div>
        )}

        {/* Modal 1: Post Emergency Blood Request */}
        <AnimatePresence>
          {showRequestModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
              >
                <div className="bg-[#780000] text-white p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-[#FFD54A]" />
                    <h3 className="text-lg font-bold">{currentLanguage === 'en' ? 'Post Emergency Blood Request' : 'आपातकालीन रक्त अनुरोध करें'}</h3>
                  </div>
                  <button onClick={() => setShowRequestModal(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  {requestSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-8 w-8 stroke-[3]" />
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900">{currentLanguage === 'en' ? 'Emergency Alert Broadcasted!' : 'आपातकालीन अलर्ट प्रसारित!'}</h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">{currentLanguage === 'en' ? 'All verified donors and district coordinators in your city have received immediate SMS & WhatsApp alerts.' : 'आपके शहर के सभी सत्यापित रक्तदाताओं और समन्वयकों को तुरंत एसएमएस और व्हाट्सएप अलर्ट भेज दिया गया है।'}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleRequestSubmit} className="space-y-4 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Patient Name & Condition *' : 'रोगी का नाम एवं स्थिति *'}</label>
                        <input
                          type="text"
                          required
                          value={requestForm.patientName}
                          onChange={e => setRequestForm({ ...requestForm, patientName: e.target.value })}
                          placeholder="e.g., Master Zaid Khan (Thalassemia)"
                          className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Blood Group Required *' : 'रक्त समूह *'}</label>
                          <select
                            value={requestForm.bloodGroup}
                            onChange={e => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-extrabold text-[#780000]"
                          >
                            {bloodGroups.filter(g => g !== 'ALL').map(g => <option key={g} value={g}>{g}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Units Needed *' : 'कितने यूनिट *'}</label>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            required
                            value={requestForm.unitsRequired}
                            onChange={e => setRequestForm({ ...requestForm, unitsRequired: Number(e.target.value) })}
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-extrabold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Hospital & Ward *' : 'अस्पताल एवं वार्ड *'}</label>
                          <input
                            type="text"
                            required
                            value={requestForm.hospital}
                            onChange={e => setRequestForm({ ...requestForm, hospital: e.target.value })}
                            placeholder="e.g., SMS Hospital, ICU Ward 4"
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'City *' : 'शहर *'}</label>
                          <select
                            value={requestForm.city}
                            onChange={e => setRequestForm({ ...requestForm, city: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                          >
                            {cities.filter(c => c !== 'ALL').map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Urgency Level *' : 'आवश्यकता का स्तर *'}</label>
                        <select
                          value={requestForm.urgency}
                          onChange={e => setRequestForm({ ...requestForm, urgency: e.target.value as any })}
                          className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-bold text-red-700"
                        >
                          <option>Extreme Emergency (Within 2 Hours)</option>
                          <option>Urgent (Within 6 Hours)</option>
                          <option>Planned Surgery</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Contact Person *' : 'संपर्क व्यक्ति *'}</label>
                          <input
                            type="text"
                            required
                            value={requestForm.contactPerson}
                            onChange={e => setRequestForm({ ...requestForm, contactPerson: e.target.value })}
                            placeholder="e.g., Mr. Imran Khan"
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Mobile / WhatsApp *' : 'मोबाइल नंबर *'}</label>
                          <input
                            type="tel"
                            required
                            value={requestForm.contactPhone}
                            onChange={e => setRequestForm({ ...requestForm, contactPhone: e.target.value })}
                            placeholder="98XXXXXX21"
                            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-[#780000] font-semibold"
                          />
                        </div>
                      </div>

                      <div className="pt-3 flex gap-3">
                        <button type="button" onClick={() => setShowRequestModal(false)} className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 font-extrabold rounded-xl text-slate-700">
                          {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                        </button>
                        <button type="submit" className="flex-1 py-3 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl shadow-md">
                          {currentLanguage === 'en' ? 'Broadcast SOS & Post Request' : 'एसओएस प्रसारित करें'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal 2: SOS Broadcast Alert */}
        <AnimatePresence>
          {showSosModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-red-300 p-6 space-y-6 text-center relative"
              >
                <button onClick={() => setShowSosModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
                  <X className="h-5 w-5 text-slate-600" />
                </button>

                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto animate-bounce">
                  <Bell className="h-8 w-8 fill-current" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-red-900">{currentLanguage === 'en' ? 'Emergency SOS Broadcast System' : 'आपातकालीन एसओएस ब्रॉडकास्ट सिस्टम'}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{currentLanguage === 'en' ? 'Clicking the button below will immediately trigger SMS & automated WhatsApp notifications to all 840+ registered blood donors and district coordinators in your city.' : 'नीचे दिए गए बटन पर क्लिक करने से आपके शहर के सभी 840+ पंजीकृत रक्तदाताओं और समन्वयकों को तुरंत एसएमएस और व्हाट्सएप नोटिफिकेशन भेज दिया जाएगा।'}</p>
                </div>

                <button
                  onClick={() => {
                    alert(currentLanguage === 'en' ? 'EMERGENCY SOS SENT: All coordinators and matching donors in Jaipur district have been notified via SMS & WhatsApp.' : 'आपातकालीन एसओएस भेजा गया: जयपुर जिले के सभी समन्वयकों और दाताओं को सूचित किया गया है।');
                    setShowSosModal(false);
                  }}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-2xl shadow-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <Flame className="h-5 w-5 fill-current text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'CONFIRM EMERGENCY BROADCAST' : 'आपातकालीन ब्रॉडकास्ट की पुष्टि करें'}</span>
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal 3: Download Donor Certificate */}
        <AnimatePresence>
          {showCertificateModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 p-6 space-y-6 text-center relative"
              >
                <button onClick={() => setShowCertificateModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
                  <X className="h-5 w-5 text-slate-600" />
                </button>

                <div className="w-16 h-16 rounded-2xl bg-red-100 text-[#780000] flex items-center justify-center mx-auto shadow-inner">
                  <Award className="h-8 w-8 text-[#780000]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{currentLanguage === 'en' ? 'Digital Donor Appreciation Certificate' : 'डिजिटल रक्तदाता सम्मान प्रमाण पत्र'}</h3>
                  <p className="text-xs text-slate-600">{currentLanguage === 'en' ? 'Thank you for pledging to save lives. You can print or download your official volunteer certificate below.' : 'जीवन बचाने का संकल्प लेने के लिए धन्यवाद। अपना आधिकारिक प्रमाण पत्र नीचे डाउनलोड करें।'}</p>
                </div>

                {/* Certificate Preview Box */}
                <div className="bg-gradient-to-br from-[#780000] via-[#5a0000] to-[#0B132B] text-white p-6 rounded-2xl text-left space-y-4 shadow-xl border border-amber-400/40 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#FFD54A] block">RANGREZ WELFARE BHARAT</span>
                      <h4 className="text-base font-serif font-bold text-white">Life-Saving Donor Brigade</h4>
                    </div>
                    <Award className="h-6 w-6 text-[#FFD54A]" />
                  </div>

                  <div className="space-y-1 py-2 border-y border-white/10">
                    <span className="text-[10px] text-red-200 block">Pledged Volunteer:</span>
                    <h5 className="text-lg font-bold text-[#FFD54A] font-serif">{pledgeForm.fullName || 'Brother Imran Rangrez'}</h5>
                    <span className="text-xs text-white font-mono">Blood Group: <b>{pledgeForm.bloodGroup}</b> | {pledgeForm.city}</span>
                  </div>

                  <div className="flex justify-between items-end text-[10px]">
                    <div>
                      <span className="text-slate-400 block">Status</span>
                      <span className="font-bold text-emerald-300">Verified Emergency Volunteer</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block">Issued On</span>
                      <span className="font-bold text-white">{new Date().toISOString().slice(0,10)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      window.print();
                      setShowCertificateModal(false);
                    }}
                    className="w-full py-3 bg-[#780000] hover:bg-[#5a0000] text-white font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer text-xs"
                  >
                    <Printer className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'Print / Download Certificate' : 'प्रमाण पत्र डाउनलोड करें'}</span>
                  </button>
                  <button onClick={() => setShowCertificateModal(false)} className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold rounded-xl transition text-xs">
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
