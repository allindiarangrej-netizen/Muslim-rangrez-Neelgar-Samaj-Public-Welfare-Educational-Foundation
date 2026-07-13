import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, Award, Building2, HeartHandshake, Users, Sparkles, 
  Share2, Phone, Mail, PlusCircle, QrCode, Eye, Activity, TrendingUp, 
  BarChart3, Database, Lock, Bell, ArrowRight, Check, X, AlertCircle, 
  Heart, Camera, Video, BookOpen, ChevronRight, Shield, Landmark, 
  GraduationCap, Stethoscope, Droplet, Gift, HelpCircle, FileText, 
  Download, Printer, MapPin, CheckCircle2, AlertTriangle
} from 'lucide-react';
import { Language } from '../types';

interface WelfareSupportOverviewProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function WelfareSupportOverview({ currentLanguage, onNavigate }: WelfareSupportOverviewProps) {
  const [activeTab, setActiveTab] = useState<'stats' | 'updates' | 'actions'>('stats');
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleExportPDF = () => {
    showToast(currentLanguage === 'en' ? 'Generating Welfare Impact PDF Report...' : 'कल्याणकारी प्रभाव रिपोर्ट डाउनलोड हो रही है...');
  };

  const handleExportExcel = () => {
    showToast(currentLanguage === 'en' ? 'Exporting Welfare Statistics to Excel...' : 'एक्सेल डेटा निर्यात किया जा रहा है...');
  };

  const handlePrint = () => {
    window.print();
  };

  // Dashboard Counters
  const counters = [
    {
      id: 'schemes',
      titleEn: 'Total Welfare Schemes',
      titleHi: 'कुल कल्याणकारी योजनाएं',
      titleUr: 'مجموعی فلاحی اسکیمیں',
      value: '1,420+',
      sub: 'Central & State Listed',
      icon: Landmark,
      color: 'bg-emerald-50 text-[#004B23] border-emerald-200',
      tab: 'schemes'
    },
    {
      id: 'beneficiaries',
      titleEn: 'Registered Beneficiaries',
      titleHi: 'पंजीकृत लाभार्थी',
      titleUr: 'رجسٹرڈ مستفیدین',
      value: '85,400+',
      sub: 'Verified Community Members',
      icon: Users,
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      tab: 'welfare-minority'
    },
    {
      id: 'hospitals',
      titleEn: 'Hospital Network',
      titleHi: 'अस्पताल नेटवर्क',
      titleUr: 'ہسپتال نیٹ ورک',
      value: '640+',
      sub: 'Govt, Private & Charitable',
      icon: Stethoscope,
      color: 'bg-rose-50 text-rose-800 border-rose-200',
      tab: 'welfare-hospital'
    },
    {
      id: 'bloodbanks',
      titleEn: 'Blood Banks Directory',
      titleHi: 'ब्लड बैंक डायरेक्टरी',
      titleUr: 'بلڈ بینک ڈائریکٹری',
      value: '320+',
      sub: '24/7 Emergency Units',
      icon: Droplet,
      color: 'bg-red-50 text-red-700 border-red-200',
      tab: 'welfare-blood-bank'
    },
    {
      id: 'donors',
      titleEn: 'Active Blood Donors',
      titleHi: 'सक्रिय रक्तदाता',
      titleUr: 'فعال خون عطیہ کرنے والے',
      value: '5,840+',
      sub: 'Verified Life Savers',
      icon: Heart,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      tab: 'welfare-blood-donors'
    },
    {
      id: 'helplines',
      titleEn: 'Emergency Helplines',
      titleHi: 'आपातकालीन हेल्पलाइन',
      titleUr: 'ایمرجنسی ہیلپ لائنز',
      value: '24/7',
      sub: 'National & State Support',
      icon: Phone,
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      tab: 'helplines'
    },
    {
      id: 'scholarships',
      titleEn: 'Scholarships Directory',
      titleHi: 'छात्रवृत्ति डायरेक्टरी',
      titleUr: 'اسکالرشپ ڈائریکٹری',
      value: '120+',
      sub: 'Govt, Minority & Trust Aid',
      icon: GraduationCap,
      color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      tab: 'welfare-scholarships'
    },
    {
      id: 'charity',
      titleEn: 'Charity Campaigns',
      titleHi: 'चैरिटी व राहत अभियान',
      titleUr: 'خیراتی مہمات',
      value: '45+',
      sub: 'Active Relief Projects',
      icon: Gift,
      color: 'bg-teal-50 text-teal-800 border-teal-200',
      tab: 'welfare-charity'
    }
  ];

  // Quick Action Cards
  const quickActions = [
    {
      id: 'schemes',
      titleEn: 'Government Schemes Portal',
      titleHi: 'सरकारी योजना पोर्टल',
      titleUr: 'سرکاری اسکیمیں پورٹل',
      descEn: 'Browse Central, State, Women, Senior Citizen, Farmers, Housing, and Employment schemes with eligibility & direct download forms.',
      icon: '🏛️',
      tab: 'schemes'
    },
    {
      id: 'minority',
      titleEn: 'Minority Welfare Hub',
      titleHi: 'अल्पसंख्यक कल्याण केंद्र',
      titleUr: 'اقلیتی بہبود مرکز',
      descEn: 'Access Central & State minority schemes, coaching programs, self-employment loans, business grants, and hostel schemes.',
      icon: '🌟',
      tab: 'welfare-minority'
    },
    {
      id: 'scholarships',
      titleEn: 'Scholarships Master Portal',
      titleHi: 'छात्रवृत्ति मास्टर पोर्टल',
      titleUr: 'اسکالرشپ پورٹل',
      descEn: 'Search 120+ government, merit, girl child, research, and educational loan programs with deadlines and application status.',
      icon: '🎓',
      tab: 'welfare-scholarships'
    },
    {
      id: 'hospital',
      titleEn: 'Hospital Network Directory',
      titleHi: 'अस्पताल नेटवर्क निर्देशिका',
      titleUr: 'ہسپتال نیٹ ورک',
      descEn: 'Search verified Government, Private, Charitable, and Specialty hospitals with OPD timings, facilities, and Google Maps location.',
      icon: '🏥',
      tab: 'welfare-hospital'
    },
    {
      id: 'bloodbank',
      titleEn: 'Blood Bank Search',
      titleHi: 'ब्लड बैंक खोज',
      titleUr: 'بلڈ بینک تلاش',
      descEn: 'Find 24/7 working government and private blood banks with real-time stock availability across states and districts.',
      icon: '🩸',
      tab: 'welfare-blood-bank'
    },
    {
      id: 'donors',
      titleEn: 'Blood Donors Roster',
      titleHi: 'रक्तदाता सूची',
      titleUr: 'خون عطیہ کرنے والے',
      descEn: 'Register as a donor, verify your profile, request urgent blood, and download recognition life-saver certificates.',
      icon: '❤️',
      tab: 'welfare-blood-donors'
    },
    {
      id: 'helplines',
      titleEn: 'Emergency Helplines',
      titleHi: 'आपातकालीन सहायता',
      titleUr: 'ایمرجنسی ہیلپ لائن',
      descEn: 'Direct call buttons for Ambulance, Police, Fire, Women & Child protection, Medical crisis, and Legal aid across India.',
      icon: '📞',
      tab: 'helplines'
    },
    {
      id: 'charity',
      titleEn: 'Charity & Relief Projects',
      titleHi: 'राहत एवं कल्याण अभियान',
      titleUr: 'خیراتی اور ریلیف پروجیکٹس',
      descEn: 'Support ration kit distribution, widow monthly pensions, orphan education, medical aid, and marriage assistance funds.',
      icon: '🤲',
      tab: 'welfare-charity'
    },
    {
      id: 'donations',
      titleEn: 'Donations & Zakat Portal',
      titleHi: 'दान एवं जकात पोर्टल',
      titleUr: 'عطیات اور زکوٰۃ پورٹل',
      descEn: 'Contribute via Zakat, Sadaqah, Education Fund, or General Welfare with 100% transparency, 80G tax receipt, and instant QR payment.',
      icon: '🎁',
      tab: 'donate'
    }
  ];

  // Latest Updates
  const latestUpdates = [
    {
      date: '03 Jul 2026',
      title: 'MoMA Pre-Matric & Post-Matric Minority Scholarships 2026-27 Opened on National Scholarship Portal',
      type: 'Scholarship',
      tag: 'Urgent Deadline: 31 Aug'
    },
    {
      date: '01 Jul 2026',
      title: 'Ayushman Bharat PM-JAY Family Health Card Registration Drive Underway across 18 Districts',
      type: 'Healthcare',
      tag: 'Free Cashless Aid'
    },
    {
      date: '28 Jun 2026',
      title: ' Rangrez Samaj Public Welfare Foundation disbursed ₹4.5 Lakhs in Emergency Medical Grants in Q2',
      type: 'Welfare Fund',
      tag: 'Transparent Report'
    },
    {
      date: '25 Jun 2026',
      title: '1,200+ New Voluntary Blood Donors Registered in Jaipur, Indore, Bhopal & Lucknow Chapters',
      type: 'Blood Donors',
      tag: 'Community Life Savers'
    }
  ];

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-[#004B23] text-white px-5 py-3 rounded-xl shadow-xl border border-[#FFD54A] flex items-center space-x-3 animate-fadeIn">
          <CheckCircle2 className="h-5 w-5 text-[#FFD54A]" />
          <span className="text-xs font-bold">{notification}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Banner & Export Toolbar */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-[#FFD54A]/30 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#004B23] border border-[#FFD54A]/50 text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'INTEGRATED WELFARE & SUPPORT DASHBOARD' : 'एकीकृत कल्याण एवं सहायता डैशबोर्ड'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>{currentLanguage === 'en' ? 'Welfare & Support Overview' : currentLanguage === 'ur' ? 'فلاح و بہبود کا عمومی جائزہ' : 'कल्याण एवं सहायता अवलोकन'}</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl font-light">
              {currentLanguage === 'en' 
                ? 'Comprehensive national socio-economic empowerment gateway connecting the Muslim Rangrez Neelgar Samaj with central government assistance, healthcare networks, emergency aid, and transparent community philanthropy.'
                : 'मुस्लिम रंगरेज नीलगर समाज को सरकारी सहायता, स्वास्थ्य सेवा नेटवर्क, आपातकालीन सहायता और पारदर्शी सामुदायिक दान से जोड़ने वाला राष्ट्रीय सामाजिक-आर्थिक अधिकारिता पोर्टल।'}
            </p>
          </div>

          {/* Export & Action Tools */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 relative z-10 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={handleExportPDF}
              className="px-3.5 py-2.5 rounded-xl bg-[#142244] hover:bg-[#1f3366] text-white text-xs font-bold border border-gray-600 shadow transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="h-4 w-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'PDF Report' : 'पीडीएफ डाउनलोड'}</span>
            </button>
            <button
              onClick={handleExportExcel}
              className="px-3.5 py-2.5 rounded-xl bg-[#004B23] hover:bg-[#003d1c] text-white text-xs font-bold border border-emerald-500 shadow transition flex items-center space-x-1.5 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Excel Data' : 'एक्सेल शीट'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 shadow transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Print' : 'प्रिंट करें'}</span>
            </button>
          </div>
        </div>

        {/* 1. WELFARE STATISTICS COUNTERS GRID */}
        <div>
          <div className="flex items-center justify-between mb-5 border-b border-gray-200 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-extrabold text-[#0B132B] flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'National Welfare Impact Statistics' : currentLanguage === 'ur' ? 'قومی فلاحی اثرات کے اعداد و شمار' : 'राष्ट्रीय कल्याण प्रभाव आंकड़े'}</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Real-time synchronized counters from 28 states and union territories.</p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-[#004B23] px-2.5 py-1 rounded-full border border-emerald-300">
              ● LIVE UPDATED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {counters.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() => onNavigate && onNavigate(c.tab)}
                  className={`p-5 rounded-2xl border bg-white hover:shadow-md transition duration-300 flex flex-col justify-between cursor-pointer group ${c.color ? c.color.split(' ')[2] : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.color ? c.color.split(' ')[0] : ''} ${c.color ? c.color.split(' ')[1] : ''}`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-[#004B23] transition flex items-center gap-0.5">
                      <span>View</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] font-mono tracking-tight">{c.value}</h3>
                    <h4 className="text-xs font-bold text-gray-800 mt-1">
                      {currentLanguage === 'en' ? c.titleEn : currentLanguage === 'ur' ? c.titleUr : c.titleHi}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-light mt-0.5">{c.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. QUICK ACTION CARDS (DIRECT NAVIGATION TO 9 PORTALS) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-extrabold text-[#0B132B] flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Welfare & Support Service Modules' : currentLanguage === 'ur' ? 'فلاح و بہبود سروس ماڈیولز' : 'कल्याण एवं सहायता सेवा मॉड्यूल'}</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Select any module below to access directories, application forms, helplines, and transparent records.</p>
            </div>
            <span className="text-xs font-bold text-[#004B23] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              9 Core Service Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate && onNavigate(item.tab)}
                className="bg-gray-50/70 hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#004B23] transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-white shadow-xs border border-gray-100 group-hover:scale-110 transition duration-300 block">
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-md">
                      Portal Active
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition">
                    {currentLanguage === 'en' ? item.titleEn : currentLanguage === 'ur' ? item.titleUr : item.titleHi}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2 font-light">
                    {item.descEn}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#004B23]">
                  <span>{currentLanguage === 'en' ? 'Open Portal →' : 'पोर्टल खोलें →'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LATEST NOTIFICATIONS & BENEFICIARY TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Latest Official Notifications & Releases */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-base font-serif font-extrabold text-[#0B132B] flex items-center gap-2">
                <Bell className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Latest Welfare Announcements & Schemes' : 'नवीनतम कल्याणकारी घोषणाएं एवं सूचनाएं'}</span>
              </h3>
              <span className="text-[10px] font-bold text-gray-400 font-mono uppercase">Updated 24 Hrs Ago</span>
            </div>

            <div className="space-y-4">
              {latestUpdates.map((up, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-150 hover:border-emerald-300 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase font-mono px-2 py-0.5 rounded bg-[#004B23] text-white">
                        {up.type}
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {up.tag}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{up.title}</h4>
                    <p className="text-[11px] text-gray-500 font-mono">Issued Date: {up.date}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate && onNavigate(up.type === 'Scholarship' ? 'welfare-scholarships' : 'schemes')}
                    className="text-xs font-bold text-[#004B23] hover:text-emerald-800 bg-white px-3.5 py-2 rounded-lg border border-gray-200 shadow-xs hover:bg-gray-100 transition shrink-0"
                  >
                    View details &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Transparency Audits & Trust Verification */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#004B23] to-[#003619] text-white p-6 sm:p-8 rounded-3xl shadow-md border border-emerald-700 space-y-6 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#FFD54A]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="border-b border-emerald-800 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD54A] block">
                AUDITED & SECURED
              </span>
              <h3 className="text-lg font-serif font-extrabold text-white mt-1">
                {currentLanguage === 'en' ? 'Public Trust & Governance Assurance' : 'सार्वजनिक विश्वास एवं शासन आश्वासन'}
              </h3>
            </div>

            <div className="space-y-4 text-xs text-gray-200 font-light leading-relaxed">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-[#FFD54A] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-bold">100% DBT & Direct Transfer:</strong> All financial assistance from government schemes and society funds is routed directly to verified beneficiary bank accounts without intermediaries.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-[#FFD54A] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-bold">Annual Chartered Audit:</strong> The foundation's charity and donation books are audited under statutory provisions with quarterly public transparency disclosures.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-[#FFD54A] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-bold">Verified Medical & Blood Donors:</strong> Every hospital, blood bank, and donor listed in this portal undergoes initial identity verification to prevent fraud and ensure rapid emergency response.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => onNavigate && onNavigate('donate')}
                className="w-full sm:w-auto bg-[#FFD54A] hover:bg-amber-300 text-[#0B132B] px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition shadow-md text-center cursor-pointer"
              >
                {currentLanguage === 'en' ? 'Support Our Mission →' : 'सहयोग करें →'}
              </button>
              <span className="text-[11px] font-mono text-emerald-200">Reg No: RS/JAIPUR/2024</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
