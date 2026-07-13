import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  HeartHandshake, Users, Shield, Award, Trophy, Heart, Stethoscope, 
  Droplet, Trees, AlertTriangle, FileText, CheckCircle2, ArrowRight, 
  Search, MapPin, Calendar, Sparkles, UserCheck, Download, Share2, 
  Globe, Building2, ExternalLink, QrCode, BadgeCheck, Clock, Activity, Home 
} from 'lucide-react';
import CommunityPortal from './CommunityPortal';
import HallOfService from './HallOfService';

interface VolunteerServiceHubProps {
  currentLanguage: Language;
  activeSubTab: string;
  onNavigate: (tabId: string) => void;
}

export default function VolunteerServiceHub({
  currentLanguage,
  activeSubTab,
  onNavigate
}: VolunteerServiceHubProps) {
  const [internalTab, setInternalTab] = useState<string>(activeSubTab || 'volunteer-service');
  const [passportName, setPassportName] = useState('Mohammad Imran Rangrej');
  const [passportCity, setPassportCity] = useState('Jaipur, Rajasthan');
  const [passportRole, setPassportRole] = useState('Senior Community Responder & Blood Donor');
  const [passportHours, setPassportHours] = useState('142');
  const [passportId, setPassportId] = useState('RS-VOL-2026-8842');

  useEffect(() => {
    if (activeSubTab) {
      setInternalTab(activeSubTab);
    }
  }, [activeSubTab]);

  const handleTabChange = (tabId: string) => {
    setInternalTab(tabId);
    onNavigate(tabId);
  };

  const menuItems = [
    { id: 'volunteer-service', labelEn: 'Overview', labelHi: 'अवलोकन', labelUr: 'جائزہ', icon: Home, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'volunteer-community', labelEn: 'Volunteer & Service Hub', labelHi: 'स्वयंसेवा एवं सेवा हब', labelUr: 'رضاکاری اور خدمت ہب', icon: HeartHandshake, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'volunteer-registration', labelEn: 'Volunteer Registration', labelHi: 'स्वयंसेवक पंजीकरण', labelUr: 'رضاکار کا اندراج', icon: UserCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'volunteer-opportunities', labelEn: 'Opportunities', labelHi: 'सेवा अवसर', labelUr: 'خدمت کے مواقع', icon: Search, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'volunteer-awards', labelEn: 'Awards & Recognition', labelHi: 'पुरस्कार एवं सम्मान', labelUr: 'ایوارڈز اور اعتراف', icon: Award, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'volunteer-projects', labelEn: 'Social Projects', labelHi: 'सामाजिक परियोजनाएं', labelUr: 'سماجی منصوبے', icon: Building2, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { id: 'volunteer-medical', labelEn: 'Medical Camps', labelHi: 'चिकित्सा शिविर', labelUr: 'میڈیکل کیمپس', icon: Stethoscope, color: 'text-teal-600', bg: 'bg-teal-50' },
    { id: 'volunteer-blood', labelEn: 'Blood Donation', labelHi: 'रक्तदान शिविर', labelUr: 'خون عطیہ کیمپس', icon: Droplet, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 'volunteer-tree', labelEn: 'Tree Plantation', labelHi: 'वृक्षारोपण', labelUr: 'شجرکاری', icon: Trees, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'volunteer-disaster', labelEn: 'Disaster Relief', labelHi: 'आपदा राहत', labelUr: 'آفات میں ریلیف', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const normalizeTab = (t: string) => {
    if (t === 'welfare-volunteer') return 'volunteer-registration';
    if (t === 'welfare-disaster' || t === 'disaster-relief') return 'volunteer-disaster';
    if (t === 'community-portal' || t === 'community-service') return 'volunteer-community';
    if (t === 'hall-of-service') return 'volunteer-hall';
    if (t === 'awards-recognition') return 'volunteer-awards';
    if (t === 'social-projects') return 'volunteer-projects';
    if (t === 'medical-camps') return 'volunteer-medical';
    if (t === 'blood-camps') return 'volunteer-blood';
    if (t === 'tree-plantation') return 'volunteer-tree';
    if (t === 'volunteer-passport') return 'volunteer-passport';
    if (t === 'volunteer-opportunities') return 'volunteer-opportunities';
    return t;
  };

  const currentTab = normalizeTab(internalTab);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10">
            <HeartHandshake className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-white/20">
              <Sparkles className="h-4 w-4 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en' ? 'All-India Rangrej Seva & Khidmat Hub' : currentLanguage === 'ur' ? 'آل انڈیا رنگریز خدمت اور رضاکاری ہب' : 'ऑल इंडिया रंगरेज सेवा एवं वॉलिंटियर हब'}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Community Service Portal' : currentLanguage === 'ur' ? 'کمیونٹی سروس پورٹل' : 'सामुदायिक सेवा पोर्टल'}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {currentLanguage === 'en'
                ? 'Uniting hands for social welfare, humanitarian disaster response, medical camps, blood donation, environmental protection, and community recognition.'
                : currentLanguage === 'ur'
                ? 'سماجی بہبود، آفات میں ریلیف، میڈیکل کیمپ، خون کا عطیہ، ماحولیاتی تحفظ، اور خدمت گزاروں کے اعتراف کے لیے ہاتھوں کو ملانا۔'
                : 'सामाजिक कल्याण, आपदा राहत, चिकित्सा शिविर, रक्तदान, पर्यावरण संरक्षण और समाज सेवकों के सम्मान के लिए एकजुट प्रयास।'}
            </p>
          </div>

          {/* Quick Sub-nav Pills */}
          <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10 relative z-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    isActive
                      ? 'bg-[#F4C430] text-[#0B132B] shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[#0B132B]' : 'text-[#F4C430]'}`} />
                  <span>{currentLanguage === 'en' ? item.labelEn : currentLanguage === 'ur' ? item.labelUr : item.labelHi}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {currentTab === 'volunteer-service' && (
          <div className="space-y-10">
            {/* Action Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Explore 9 Pillars of Community Service' : 'सामुदायिक सेवा के 9 प्रमुख स्तंभ'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {menuItems.slice(1).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#004B23] transition cursor-pointer flex flex-col justify-between group group-hover:-translate-y-1"
                    >
                      <div>
                        <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                          <Icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#004B23] transition">
                          {currentLanguage === 'en' ? item.labelEn : currentLanguage === 'ur' ? item.labelUr : item.labelHi}
                        </h3>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          {item.id === 'volunteer-community' && (currentLanguage === 'en' ? 'Public service, community harmony, and localized humanitarian assistance.' : 'सार्वजनिक सेवा, सामाजिक सौहार्द और स्थानीय मानवीय सहायता।')}
                          {item.id === 'volunteer-registration' && (currentLanguage === 'en' ? 'Register as an official volunteer, receive ID cards, and join area teams.' : 'आधिकारिक स्वयंसेवक के रूप में पंजीकरण करें, आईडी कार्ड प्राप्त करें और टीमों से जुड़ें।')}
                          {item.id === 'volunteer-opportunities' && (currentLanguage === 'en' ? 'Browse active duty rosters, event shifts, and urgent community callouts.' : 'सक्रिय ड्यूटी रोस्टर, इवेंट शिफ्ट और तत्काल सेवा कार्यों को देखें।')}
                          {item.id === 'volunteer-passport' && (currentLanguage === 'en' ? 'Verified digital service hours, QR-enabled ID badge, and seva transcript.' : 'सत्यापित डिजिटल सेवा घंटे, QR युक्त आईडी बैज और सेवा प्रमाण।')}
                          {item.id === 'volunteer-hall' && (currentLanguage === 'en' ? 'Khidmat Honour Board celebrating outstanding volunteers and committees.' : 'उत्कृष्ट स्वयंसेवकों और समितियों को सम्मानित करने वाला खिदमत ऑनर बोर्ड।')}
                          {item.id === 'volunteer-awards' && (currentLanguage === 'en' ? 'Annual excellence awards, Rising Volunteer medals, and recognition.' : 'वार्षिक उत्कृष्टता पुरस्कार, राइजिंग वालंटियर पदक और सम्मान।')}
                          {item.id === 'volunteer-projects' && (currentLanguage === 'en' ? 'Ongoing social development initiatives, water counters, and public support.' : 'निरंतर चल रही सामाजिक विकास पहल, जल सेवा और सार्वजनिक सहायता।')}
                          {item.id === 'volunteer-medical' && (currentLanguage === 'en' ? 'Free health checkup camps, eye checkups, and medical volunteer network.' : 'निःशुल्क स्वास्थ्य जांच शिविर, नेत्र जांच और चिकित्सा वालंटियर नेटवर्क।')}
                          {item.id === 'volunteer-blood' && (currentLanguage === 'en' ? 'Emergency blood donor registry, rare blood group alerts, and camp drives.' : 'आपातकालीन रक्तदाता रजिस्ट्री, दुर्लभ ब्लड ग्रुप अलर्ट और रक्तदान शिविर।')}
                          {item.id === 'volunteer-tree' && (currentLanguage === 'en' ? 'Environmental protection, tree planting drives, and green neighborhood care.' : 'पर्यावरण संरक्षण, वृक्षारोपण अभियान और हरित समाज पहल।')}
                          {item.id === 'volunteer-disaster' && (currentLanguage === 'en' ? 'Rapid emergency response, flood/earthquake relief, and ration distribution.' : 'त्वरित आपातकालीन प्रतिक्रिया, बाढ़/भूकंप राहत और राशन वितरण।')}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                        <span>{currentLanguage === 'en' ? 'Open Module' : 'पोर्टल खोलें'}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Embedded General Community Portal Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-emerald-600" />
                <span>{currentLanguage === 'en' ? 'Live Community Activities & Projects' : 'सक्रिय सामाजिक गतिविधियां एवं परियोजनाएं'}</span>
              </h3>
              <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="overview" />
            </div>
          </div>
        )}

        {/* TAB 2: VOLUNTEER & SERVICE HUB */}
        {currentTab === 'volunteer-community' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Volunteer & Service Hub' : currentLanguage === 'ur' ? 'رضاکاری اور خدمت ہب' : 'स्वयंसेवा एवं सेवा हब'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Engage in localized welfare projects, public harmony drives, and social assistance across districts.' : 'विभिन्न जिलों में स्थानीय कल्याण परियोजनाओं, सामाजिक सौहार्द और सहायता अभियानों में भाग लें।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="modules" />
          </div>
        )}

        {/* TAB 3: VOLUNTEER REGISTRATION */}
        {currentTab === 'volunteer-registration' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Volunteer Registration & Onboarding' : 'स्वयंसेवक पंजीकरण और ऑनबोर्डिंग'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Join our national volunteer brigade. Fill out your details, choose your specialization, and get assigned to your local area team.' : 'हमारे राष्ट्रीय स्वयंसेवक दल से जुड़ें। विवरण भरें, अपनी विशेषज्ञता चुनें और स्थानीय टीम में शामिल हों।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="volunteer-mgmt" defaultActivityId="registration" />
          </div>
        )}

        {/* TAB 4: VOLUNTEER OPPORTUNITIES */}
        {currentTab === 'volunteer-opportunities' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Active Volunteer Opportunities & Duty Roster' : 'सक्रिय स्वयंसेवा अवसर एवं ड्यूटी रोस्टर'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Browse upcoming events, duty rosters, community awareness camps, and sign up for volunteer shifts.' : 'आगामी कार्यक्रमों, ड्यूटी रोस्टर और जागरूकता शिविरों को देखें और अपनी सेवा शिफ्ट के लिए नामांकन करें।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="volunteer-mgmt" defaultActivityId="duty-roster" />
          </div>
        )}

        {/* TAB 5: DIGITAL SERVICE PASSPORT */}
        {currentTab === 'volunteer-passport' && (
          <div className="space-y-8">
            {/* Interactive Digital Passport Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mb-2">
                    <BadgeCheck className="h-4 w-4 text-indigo-600" />
                    <span>{currentLanguage === 'en' ? 'Verified Seva Passport' : 'सत्यापित सेवा पासपोर्ट'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Digital Service Passport & ID Badge' : 'डिजिटल सेवा पासपोर्ट और पहचान पत्र'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {currentLanguage === 'en' ? 'Your official cryptographic record of humanitarian volunteer hours, badges, and recognition.' : 'मानवीय सेवा घंटों, पदकों और सम्मान का आपका आधिकारिक डिजिटल रिकॉर्ड।'}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => alert(currentLanguage === 'en' ? 'Downloading verifiable PDF Service Passport...' : 'सत्यापित पीडीएफ पासपोर्ट डाउनलोड हो रहा है...')}
                    className="bg-[#004B23] text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md hover:bg-emerald-800 transition flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'Download PDF Card' : 'पीडीएफ कार्ड डाउनलोड करें'}</span>
                  </button>
                  <button 
                    onClick={() => alert(currentLanguage === 'en' ? 'Passport link copied to clipboard!' : 'लिंक क्लिपबोर्ड पर कॉपी किया गया!')}
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold px-4 py-2.5 rounded-xl text-sm transition flex items-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'Share' : 'शेयर करें'}</span>
                  </button>
                </div>
              </div>

              {/* Passport Customize Form + Preview Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Input Simulator */}
                <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {currentLanguage === 'en' ? 'Customize & Preview Your Passport' : 'अपना पासपोर्ट विवरण जांचें'}
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {currentLanguage === 'en' ? 'Volunteer Name' : 'स्वयंसेवक का नाम'}
                    </label>
                    <input
                      type="text"
                      value={passportName}
                      onChange={(e) => setPassportName(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#004B23] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {currentLanguage === 'en' ? 'City / District' : 'शहर / जिला'}
                    </label>
                    <input
                      type="text"
                      value={passportCity}
                      onChange={(e) => setPassportCity(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#004B23] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {currentLanguage === 'en' ? 'Primary Role / Specialization' : 'मुख्य भूमिका / विशेषज्ञता'}
                    </label>
                    <input
                      type="text"
                      value={passportRole}
                      onChange={(e) => setPassportRole(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#004B23] outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Seva Hours' : 'सेवा घंटे'}
                      </label>
                      <input
                        type="text"
                        value={passportHours}
                        onChange={(e) => setPassportHours(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#004B23] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Volunteer ID' : 'स्वयंसेवक आईडी'}
                      </label>
                      <input
                        type="text"
                        value={passportId}
                        onChange={(e) => setPassportId(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#004B23] outline-none font-mono"
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 text-xs text-indigo-800">
                    💡 {currentLanguage === 'en' ? 'This passport is linked to your community ID and automatically updates whenever you complete shift hours or donate blood.' : 'यह पासपोर्ट आपकी सामुदायिक आईडी से जुड़ा है और सेवा घंटे या रक्तदान करने पर स्वतः अपडेट होता है।'}
                  </div>
                </div>

                {/* Right: ID Card Preview */}
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#004B23] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border-2 border-[#F4C430]/30">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    {/* Top Header */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F4C430] flex items-center justify-center text-[#0B132B] font-extrabold text-lg shadow-md">
                          RS
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-base leading-tight text-white">
                            All-India Rangrej Samaj
                          </h4>
                          <span className="text-[11px] text-[#F4C430] font-semibold tracking-wider uppercase block">
                            Digital Service Passport
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Verified Active
                        </span>
                      </div>
                    </div>

                    {/* Middle Info */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="space-y-3 flex-1">
                        <div>
                          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Volunteer Name</span>
                          <h5 className="font-bold text-lg sm:text-xl text-white font-serif">{passportName || 'Volunteer Name'}</h5>
                        </div>
                        <div>
                          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Role / Specialization</span>
                          <span className="text-sm font-semibold text-emerald-300 block">{passportRole || 'Community Responder'}</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">District / Chapter</span>
                          <span className="text-sm text-gray-200 block flex items-center gap-1 mt-0.5">
                            <MapPin className="h-3.5 w-3.5 text-[#F4C430]" />
                            {passportCity || 'India'}
                          </span>
                        </div>
                      </div>

                      {/* QR Box */}
                      <div className="bg-white p-3 rounded-2xl text-[#0B132B] flex flex-col items-center justify-center shadow-lg shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <QrCode className="h-16 w-16 text-[#0B132B]" />
                        <span className="text-[9px] font-mono font-bold mt-1 text-gray-700">{passportId}</span>
                      </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center bg-white/5 rounded-2xl p-3">
                      <div>
                        <span className="text-[10px] text-gray-300 block uppercase font-medium">Seva Hours</span>
                        <span className="text-lg font-extrabold text-[#F4C430] flex items-center justify-center gap-1">
                          <Clock className="h-4 w-4" />
                          {passportHours}+
                        </span>
                      </div>
                      <div className="border-x border-white/10">
                        <span className="text-[10px] text-gray-300 block uppercase font-medium">Badges</span>
                        <span className="text-lg font-extrabold text-white flex items-center justify-center gap-1">
                          <Award className="h-4 w-4 text-emerald-400" />
                          8
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-300 block uppercase font-medium">Level</span>
                        <span className="text-lg font-extrabold text-emerald-300">Gold</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ID Card Management Module */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Volunteer ID Card Management & Batch Printing' : 'स्वयंसेवक पहचान पत्र प्रबंधन एवं प्रिंटिंग'}
              </h3>
              <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="volunteer-mgmt" defaultActivityId="id-cards" />
            </div>
          </div>
        )}

        {/* TAB 6: HALL OF SERVICE */}
        {currentTab === 'volunteer-hall' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Hall of Service (Khidmat Honour Board)' : 'खिदमत ऑनर बोर्ड (सेवा सम्मान)'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Celebrating selfless community servants, volunteer leaderboards, and verified social work records.' : 'निस्वार्थ समाज सेवकों, वालंटियर लीडरबोर्ड और सत्यापित सेवा कार्यों का सम्मान।'}
              </p>
            </div>
            <HallOfService currentLanguage={currentLanguage} defaultTab="leaderboard" />
          </div>
        )}

        {/* TAB 7: AWARDS & RECOGNITION */}
        {currentTab === 'volunteer-awards' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Annual Awards & Community Recognition' : 'वार्षिक पुरस्कार एवं सामाजिक सम्मान'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'National awards for Best Volunteer, Blood Donor, Medical Responder, Youth Leader, and Lifetime Achievement.' : 'सर्वश्रेष्ठ स्वयंसेवक, रक्तदाता, चिकित्सा सेवक, युवा नेता और आजीवन सेवा के लिए राष्ट्रीय पुरस्कार।'}
              </p>
            </div>
            <HallOfService currentLanguage={currentLanguage} defaultTab="awards" />
          </div>
        )}

        {/* TAB 8: SOCIAL PROJECTS */}
        {currentTab === 'volunteer-projects' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentLanguage === 'en' ? 'Social Development Projects' : 'सामाजिक विकास परियोजनाएं'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Ongoing public welfare projects, clean drinking water counters, orphan support, and neighborhood betterment.' : 'सार्वजनिक कल्याण परियोजनाएं, पेयजल व्यवस्था, अनाथ सहायता और समाज सुधार कार्य।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="public" />
          </div>
        )}

        {/* TAB 9: MEDICAL CAMPS */}
        {currentTab === 'volunteer-medical' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-teal-600" />
                <span>{currentLanguage === 'en' ? 'Free Medical & Health Checkup Camps' : 'निःशुल्क चिकित्सा एवं स्वास्थ्य जांच शिविर'}</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Organized healthcare camps by medical volunteers, free diagnosis, eye test camps, and medicine distribution.' : 'चिकित्सा वालंटियर्स द्वारा आयोजित स्वास्थ्य शिविर, निःशुल्क जांच, नेत्र परीक्षण शिविर और दवा वितरण।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="hospital" />
          </div>
        )}

        {/* TAB 10: BLOOD DONATION CAMPS */}
        {currentTab === 'volunteer-blood' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Droplet className="h-6 w-6 text-red-600" />
                <span>{currentLanguage === 'en' ? 'Blood Donation Camps & Emergency Donor Network' : 'रक्तदान शिविर एवं आपातकालीन रक्तदाता नेटवर्क'}</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Live blood donor registry, rare blood group search, and upcoming blood donation drive locations.' : 'सक्रिय रक्तदाता निर्देशिका, दुर्लभ ब्लड ग्रुप की खोज और आगामी रक्तदान शिविरों के स्थान।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="emergency" defaultActivityId="blood" />
          </div>
        )}

        {/* TAB 11: TREE PLANTATION */}
        {currentTab === 'volunteer-tree' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Trees className="h-6 w-6 text-green-600" />
                <span>{currentLanguage === 'en' ? 'Tree Plantation & Green Environment Drives' : 'वृक्षारोपण एवं हरित पर्यावरण अभियान'}</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Planting native trees, clean neighborhood initiatives, plastic-free campaigns, and environmental stewardship.' : 'वृक्षारोपण, स्वच्छ समाज पहल, प्लास्टिक मुक्त अभियान और पर्यावरण संरक्षण।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="environment" />
          </div>
        )}

        {/* TAB 12: DISASTER RELIEF */}
        {currentTab === 'volunteer-disaster' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <span>{currentLanguage === 'en' ? 'Disaster Relief & Emergency Humanitarian Aid' : 'आपदा राहत एवं आपातकालीन मानवीय सहायता'}</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Rapid response during floods, earthquakes, fires, food package distribution, and temporary shelter assistance.' : 'बाढ़, भूकंप, आग लगने पर त्वरित सहायता, राहत सामग्री वितरण और अस्थायी आश्रय सेवा।'}
              </p>
            </div>
            <CommunityPortal currentLanguage={currentLanguage} defaultModuleId="emergency" defaultActivityId="disaster" />
          </div>
        )}

      </div>
    </div>
  );
}
