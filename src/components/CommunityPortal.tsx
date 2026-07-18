
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getSupabase } from '../lib/supabaseClient';
import { COMMUNITY_MODULES, Module as CommunityModule, Activity } from '../data/communityData';
import { 
  Search, Filter, HeartHandshake, UserCheck, Award, Building2, 
  Stethoscope, Droplet, Trees, AlertTriangle, Download, Printer, 
  FileText, CheckCircle2, ShieldCheck, Calendar, MapPin, Clock, 
  Users, Sparkles, Share2, Phone, Mail, PlusCircle, QrCode, Eye, 
  Activity as ActivityIcon, TrendingUp, BarChart3, Database, Lock, 
  Bell, ArrowRight, ArrowLeft, Check, X, AlertCircle, Heart, Camera, 
  Video, BookOpen, ChevronRight, Shield, Layers
} from 'lucide-react';

export default function CommunityPortal({ 
  currentLanguage = 'en', 
  defaultModuleId, 
  defaultActivityId 
}: { 
  currentLanguage?: any; 
  defaultModuleId?: string; 
  defaultActivityId?: string; 
}) {
  const [activeModule, setActiveModule] = useState<CommunityModule>(() => {
    return COMMUNITY_MODULES.find(m => m.id === defaultModuleId) || COMMUNITY_MODULES[0];
  });
  
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(() => {
    if (defaultModuleId && defaultActivityId) {
      const mod = COMMUNITY_MODULES.find(m => m.id === defaultModuleId);
      return mod?.activities.find(a => a.id === defaultActivityId) || null;
    }
    return null;
  });

  // Portal Mode State: determines which specialized view or general module view is displayed
  const resolvePortalMode = (modId?: string, actId?: string): 'dashboard' | 'modules' | 'registration' | 'opportunities' | 'blood' | 'medical' | 'tree' | 'disaster' | 'projects' | 'admin' => {
    if (modId === 'overview') return 'dashboard';
    if (modId === 'admin') return 'admin';
    if (modId === 'modules' || modId === 'all' || modId === 'hub') return 'modules';
    if (modId === 'volunteer-mgmt' && actId === 'registration') return 'registration';
    if (modId === 'volunteer-mgmt' && actId === 'duty-roster') return 'opportunities';
    if (modId === 'registration') return 'registration';
    if (modId === 'opportunities') return 'opportunities';
    if ((modId === 'emergency' && actId === 'blood') || modId === 'blood') return 'blood';
    if ((modId === 'emergency' && actId === 'disaster') || modId === 'disaster') return 'disaster';
    if (modId === 'hospital' || modId === 'medical') return 'medical';
    if (modId === 'environment' || modId === 'tree') return 'tree';
    if (modId === 'public' || modId === 'projects') return 'projects';
    if (modId) return 'modules';
    return 'dashboard';
  };

  const [portalMode, setPortalMode] = useState<
    'dashboard' | 'modules' | 'registration' | 'opportunities' | 'blood' | 'medical' | 'tree' | 'disaster' | 'projects' | 'admin'
  >(() => resolvePortalMode(defaultModuleId, defaultActivityId));

  useEffect(() => {
    const newMode = resolvePortalMode(defaultModuleId, defaultActivityId);
    setPortalMode(newMode);
    if (defaultModuleId) {
      const mod = COMMUNITY_MODULES.find(m => m.id === defaultModuleId);
      if (mod) {
        setActiveModule(mod);
        if (defaultActivityId) {
          const act = mod.activities.find(a => a.id === defaultActivityId);
          setSelectedActivity(act || null);
        } else {
          setSelectedActivity(null);
        }
      }
    }
  }, [defaultModuleId, defaultActivityId]);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('ALL');
  const [districtFilter, setDistrictFilter] = useState('ALL');

  // Hub & Restoration Feature Toggles
  const [showDirectory, setShowDirectory] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [selectedOppModal, setSelectedOppModal] = useState<any>(null);
  const [projectStatusFilter, setProjectStatusFilter] = useState('ALL');
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [selectedProjectGallery, setSelectedProjectGallery] = useState<any>(null);
  const [showMedicineRecords, setShowMedicineRecords] = useState(false);
  const [showCampGallery, setShowCampGallery] = useState(false);
  const [showBloodRequestForm, setShowBloodRequestForm] = useState(false);
  const [showPlantationReg, setShowPlantationReg] = useState(false);
  const [showDisasterSafety, setShowDisasterSafety] = useState(false);
  const [showHelplineDirectory, setShowHelplineDirectory] = useState(false);
  const [showReliefCollection, setShowReliefCollection] = useState(false);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [showMedVolModal, setShowMedVolModal] = useState(false);
  const [showSaplingModal, setShowSaplingModal] = useState(false);
  const [showReliefFundModal, setShowReliefFundModal] = useState(false);

  // Volunteer Registration Form State
  const [regForm, setRegForm] = useState({
    fullName: '',
    fatherName: '',
    gender: 'Male',
    dob: '',
    bloodGroup: 'O+',
    phone: '',
    email: '',
    district: 'Jaipur',
    area: '',
    qualification: 'Graduate',
    occupation: '',
    primarySkill: 'Healthcare & First Aid',
    interestAreas: ['Medical Camps', 'Blood Donation'],
    availability: 'Weekends & Emergencies'
  });
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [regId, setRegId] = useState('RNG-VOL-2026-8841');

  // Blood Donor Search State
  const [bloodSearchGroup, setBloodSearchGroup] = useState('ALL');
  const [bloodSearchDistrict, setBloodSearchDistrict] = useState('ALL');
  const [emergencyAlert, setEmergencyAlert] = useState<string | null>(null);

  // Tree Plantation Counter State
  const [treeCount, setTreeCount] = useState(54280);

  // Admin Console State
  const [adminTab, setAdminTab] = useState<'volunteers' | 'events' | 'camps' | 'blood' | 'reports' | 'backup'>('volunteers');
  const [adminRole, setAdminRole] = useState<'President' | 'Secretary' | 'Coordinator'>('President');

  // Filter all activities across COMMUNITY_MODULES for global search
  const allActivities = useMemo(() => {
    const list: Array<{ module: CommunityModule; activity: Activity }> = [];
    COMMUNITY_MODULES.forEach(mod => {
      mod.activities.forEach(act => {
        list.push({ module: mod, activity: act });
      });
    });
    return list;
  }, []);

  const filteredActivities = useMemo(() => {
    return allActivities.filter(({ module, activity }) => {
      const matchCat = selectedCategoryFilter === 'ALL' || module.id === selectedCategoryFilter;
      const matchSearch = searchQuery === '' || 
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [allActivities, selectedCategoryFilter, searchQuery]);

  const handleDownloadReport = (type: string) => {
    alert(currentLanguage === 'en' 
      ? `Generating and downloading ${type} report (PDF/Excel format)...` 
      : `${type} रिपोर्ट (PDF/Excel) डाउनलोड की जा रही है...`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen font-sans text-slate-800 rounded-3xl p-4 sm:p-6 lg:p-8 space-y-8">
      
      {/* 1. UNIVERSAL HEADER & TOOLBAR */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#004B23] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20 text-[#F4C430] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Unified Khidmat & Social Welfare Ecosystem' : 'एकीकृत खिदमत एवं समाज कल्याण इकोसिस्टम'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white">
              {currentLanguage === 'en' ? 'Rangrez Community Service Portal' : 'रंगरेज सामुदायिक सेवा पोर्टल'}
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              {currentLanguage === 'en' 
                ? 'Empowering society through structured volunteer brigades, medical relief camps, emergency blood donor networks, tree plantation drives, and disaster response.'
                : 'स्वयंसेवक दल, चिकित्सा राहत शिविर, आपातकालीन रक्तदाता नेटवर्क, वृक्षारोपण और आपदा प्रबंधन के माध्यम से समाज सशक्तिकरण।'}
            </p>
          </div>

          {/* Export & Print Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => handleDownloadReport('Community Service Excel Summary')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-md transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Export Excel Dump' : 'एक्सेल डाउनलोड'}</span>
            </button>
            <button 
              onClick={() => handleDownloadReport('Comprehensive Service PDF Booklet')}
              className="bg-[#F4C430] text-[#0B132B] hover:bg-amber-400 font-bold px-4 py-2.5 rounded-xl text-xs shadow-md transition flex items-center space-x-1.5 cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Download PDF Report' : 'पीडीएफ रिपोर्ट'}</span>
            </button>
            <button 
              onClick={handlePrint}
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-3.5 py-2.5 rounded-xl text-xs transition flex items-center space-x-1.5 border border-white/20 cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Print' : 'प्रिंट'}</span>
            </button>
          </div>
        </div>

        {/* Mode Navigation Pills */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          {[
            { id: 'dashboard', labelEn: 'Hub Dashboard', labelHi: 'हब डैशबोर्ड', icon: ActivityIcon, color: 'text-emerald-400' },
            { id: 'modules', labelEn: 'Service Modules', labelHi: 'सेवा मॉड्यूल', icon: Layers, color: 'text-blue-400' },
            { id: 'registration', labelEn: 'Volunteer Registration', labelHi: 'स्वयंसेवक पंजीकरण', icon: UserCheck, color: 'text-purple-400' },
            { id: 'opportunities', labelEn: 'Duty Roster & Shifts', labelHi: 'ड्यूटी रोस्टर', icon: Search, color: 'text-amber-400' },
            { id: 'blood', labelEn: 'Blood Donor Network', labelHi: 'रक्तदाता नेटवर्क', icon: Droplet, color: 'text-red-400' },
            { id: 'medical', labelEn: 'Medical Camps', labelHi: 'चिकित्सा शिविर', icon: Stethoscope, color: 'text-teal-400' },
            { id: 'tree', labelEn: 'Tree Plantation', labelHi: 'वृक्षारोपण', icon: Trees, color: 'text-green-400' },
            { id: 'disaster', labelEn: 'Disaster Relief', labelHi: 'आपदा राहत', icon: AlertTriangle, color: 'text-orange-400' },
            { id: 'projects', labelEn: 'Social Projects', labelHi: 'सामाजिक परियोजनाएं', icon: Building2, color: 'text-cyan-400' },
            { id: 'admin', labelEn: 'Admin Console', labelHi: 'एडमिन कंसोल', icon: ShieldCheck, color: 'text-[#F4C430]' },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = portalMode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setPortalMode(tab.id as any);
                  setSelectedActivity(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  isActive 
                    ? 'bg-[#F4C430] text-[#0B132B] shadow-lg scale-105 font-black' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-[#0B132B]' : tab.color}`} />
                <span>{currentLanguage === 'en' ? tab.labelEn : tab.labelHi}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. UNIVERSAL SEARCH & SMART FILTERS BAR */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLanguage === 'en' ? 'Search community projects, blood camps, medical shifts, or volunteer guidelines...' : 'सामाजिक परियोजनाएं, रक्त शिविर, चिकित्सा शिफ्ट या नियम खोजें...'}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#004B23] focus:border-transparent outline-none text-sm font-medium"
          />
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#004B23]"
          >
            <option value="ALL">{currentLanguage === 'en' ? 'All Service Pillars' : 'सभी सेवा स्तंभ'}</option>
            {COMMUNITY_MODULES.map(m => (
              <option key={m.id} value={m.id}>{m.title}</option>
            ))}
          </select>
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#004B23]"
          >
            <option value="ALL">{currentLanguage === 'en' ? 'All India Districts' : 'सभी जिले'}</option>
            <option value="Jaipur">Jaipur District</option>
            <option value="Indore">Indore District</option>
            <option value="Bhopal">Bhopal District</option>
            <option value="Lucknow">Lucknow District</option>
            <option value="Delhi">Delhi NCR</option>
          </select>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-rose-600 font-bold hover:underline whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3. MAIN CONTENT BASED ON PORTAL MODE */}
      <AnimatePresence mode="wait">
        
        {/* MODE A: HUB DASHBOARD & LIVE STATISTICS */}
        {portalMode === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* 1. Introduction, Vision & Objectives */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#004B23] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {currentLanguage === 'en' ? 'National Khidmat Ecosystem' : 'राष्ट्रीय खिदमत इकोसिस्टम'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
                    {currentLanguage === 'en' ? 'Introduction, Vision & Strategic Objectives' : 'परिचय, दृष्टिकोण एवं रणनीतिक उद्देश्य'}
                  </h2>
                </div>
                <div className="text-xs text-slate-500 font-semibold bg-slate-50 p-3 rounded-2xl border border-slate-200 max-w-sm">
                  {currentLanguage === 'en' ? 'Operating across 64+ districts with 4,850+ active volunteers under the 7-Point Mandatory Verification System.' : '64+ जिलों में 4,850+ सक्रिय स्वयंसेवकों के साथ 7-सूत्रीय सत्यापन प्रणाली के तहत कार्यरत।'}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4C430]/20 text-[#F4C430] flex items-center justify-center font-bold text-lg border border-[#F4C430]/30">
                    🤝
                  </div>
                  <h3 className="font-bold text-lg text-white">{currentLanguage === 'en' ? 'Our Introduction' : 'हमारा परिचय'}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'The Rangrez Community Service Portal is a structured humanitarian platform uniting thousands of dedicated volunteers. From grassroots neighborhood assistance to national disaster relief, we channel community generosity into measurable social impact.'
                      : 'रंगरेज सामुदायिक सेवा पोर्टल एक संगठित मानवीय मंच है जो हजारों समर्पित स्वयंसेवकों को जोड़ता है। स्थानीय सहायता से लेकर राष्ट्रीय आपदा राहत तक, हम समाज सेवा को प्रभावी बनाते हैं।'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#004B23] to-emerald-900 text-white p-6 rounded-2xl shadow-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-lg border border-white/30">
                    🌟
                  </div>
                  <h3 className="font-bold text-lg text-white">{currentLanguage === 'en' ? 'Our Vision' : 'हमारा दृष्टिकोण'}</h3>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'To foster a self-reliant, compassionate, and highly responsive society where no emergency goes unanswered—ensuring free medical screening, clean drinking water, legal aid, and environmental preservation for all citizens.'
                      : 'एक आत्मनिर्भर, संवेदनशील और सशक्त समाज का निर्माण करना जहां हर आपातकालीन स्थिति में तुरंत सहायता पहुंचे—निःशुल्क चिकित्सा, शुद्ध पेयजल, कानूनी सहायता और पर्यावरण संरक्षण सुनिश्चित करना।'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-600 to-orange-800 text-white p-6 rounded-2xl shadow-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-lg border border-white/30">
                    🎯
                  </div>
                  <h3 className="font-bold text-lg text-white">{currentLanguage === 'en' ? 'Core Objectives' : 'प्रमुख उद्देश्य'}</h3>
                  <ul className="text-xs text-orange-100 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>{currentLanguage === 'en' ? '24x7 emergency blood donor mobilization & SOS network.' : '24x7 आपातकालीन रक्तदाता नेटवर्क एवं SOS सेवा।'}</li>
                    <li>{currentLanguage === 'en' ? 'Organizing monthly specialist medical & cataract camps.' : 'मासिक विशेषज्ञ चिकित्सा एवं मोतियाबिंद शिविर।'}</li>
                    <li>{currentLanguage === 'en' ? 'Planting & geotagging 1,00,000+ native shade trees.' : '1,00,000+ छायादार वृक्षों का रोपण एवं जियोटैगिंग।'}</li>
                    <li>{currentLanguage === 'en' ? 'Transparent execution of widow pensions & Sabeel counters.' : 'विधवा पेंशन एवं सबील पेयजल व्यवस्था का पारदर्शी संचालन।'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Live Statistics Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-serif font-extrabold text-[#0B132B] flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <span>{currentLanguage === 'en' ? 'Live Community Impact Dashboard' : 'लाइव समाज कल्याण प्रभाव डैशबोर्ड'}</span>
                </h2>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ● Real-Time Seva Transcript
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { labelEn: 'Active Volunteers', labelHi: 'सक्रिय स्वयंसेवक', val: '4,850+', color: 'text-purple-600', bg: 'bg-purple-50', icon: Users },
                  { labelEn: 'Total Projects', labelHi: 'कुल परियोजनाएं', val: '42', color: 'text-blue-600', bg: 'bg-blue-50', icon: Building2 },
                  { labelEn: 'Medical Camps', labelHi: 'चिकित्सा शिविर', val: '118', color: 'text-teal-600', bg: 'bg-teal-50', icon: Stethoscope },
                  { labelEn: 'Blood Units Donated', labelHi: 'रक्तदान यूनिट', val: '3,210+', color: 'text-red-600', bg: 'bg-red-50', icon: Droplet },
                  { labelEn: 'Trees Planted', labelHi: 'रोपित वृक्ष', val: '54,280+', color: 'text-green-600', bg: 'bg-green-50', icon: Trees },
                  { labelEn: 'Disaster Missions', labelHi: 'आपदा राहत अभियान', val: '28', color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertTriangle },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">2026</span>
                      </div>
                      <div className={`text-2xl font-black ${stat.color}`}>{stat.val}</div>
                      <div className="text-xs font-bold text-slate-600 mt-1">{currentLanguage === 'en' ? stat.labelEn : stat.labelHi}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Cards */}
            <div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span>{currentLanguage === 'en' ? 'Quick Action Center & Emergency Help Desk' : 'त्वरित कार्रवाई केंद्र एवं आपातकालीन सहायता'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  onClick={() => setPortalMode('registration')}
                  className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <UserCheck className="h-8 w-8 text-purple-200 mb-3 group-hover:scale-110 transition" />
                    <h4 className="font-bold text-lg">{currentLanguage === 'en' ? 'Register as Volunteer' : 'स्वयंसेवक पंजीकरण करें'}</h4>
                    <p className="text-xs text-purple-100 mt-1 leading-relaxed">
                      {currentLanguage === 'en' ? 'Get verified digital ID card, join area teams, and participate in shift rosters.' : 'डिजिटल आईडी कार्ड प्राप्त करें, टीमों से जुड़ें और शिफ्ट में भाग लें।'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-[#F4C430]">
                    <span>Start Onboarding &rarr;</span>
                  </div>
                </div>

                <div 
                  onClick={() => setPortalMode('blood')}
                  className="bg-gradient-to-br from-red-600 to-rose-800 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <Droplet className="h-8 w-8 text-red-200 mb-3 group-hover:scale-110 transition" />
                    <h4 className="font-bold text-lg">{currentLanguage === 'en' ? 'Emergency Blood Request' : 'आपातकालीन रक्त अनुरोध'}</h4>
                    <p className="text-xs text-red-100 mt-1 leading-relaxed">
                      {currentLanguage === 'en' ? 'Search 3,210+ live donors by blood group, city, or dispatch immediate SOS alerts.' : 'ब्लड ग्रुप या शहर के अनुसार 3,210+ रक्तदाताओं को खोजें या SOS अलर्ट भेजें।'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white">
                    <span>Open Blood Bank &rarr;</span>
                  </div>
                </div>

                <div 
                  onClick={() => setPortalMode('medical')}
                  className="bg-gradient-to-br from-teal-600 to-emerald-800 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <Stethoscope className="h-8 w-8 text-teal-200 mb-3 group-hover:scale-110 transition" />
                    <h4 className="font-bold text-lg">{currentLanguage === 'en' ? 'Free Medical Checkups' : 'निःशुल्क स्वास्थ्य जांच'}</h4>
                    <p className="text-xs text-teal-100 mt-1 leading-relaxed">
                      {currentLanguage === 'en' ? 'Find upcoming healthcare camps, eye screening dates, and consult specialist doctors.' : 'आगामी स्वास्थ्य शिविर, नेत्र जांच और विशेषज्ञ डॉक्टरों से परामर्श लें।'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-[#F4C430]">
                    <span>Explore Medical Camps &rarr;</span>
                  </div>
                </div>

                <div 
                  onClick={() => setPortalMode('disaster')}
                  className="bg-gradient-to-br from-orange-600 to-amber-800 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <AlertTriangle className="h-8 w-8 text-orange-200 mb-3 group-hover:scale-110 transition" />
                    <h4 className="font-bold text-lg">{currentLanguage === 'en' ? 'Disaster Relief & Aid' : 'आपदा राहत एवं सहायता'}</h4>
                    <p className="text-xs text-orange-100 mt-1 leading-relaxed">
                      {currentLanguage === 'en' ? 'Rapid deployment for flood/earthquake aid, ration packets, blankets, and shelter support.' : 'बाढ़/भूकंप सहायता, राशन वितरण, कंबल और आश्रय के लिए त्वरित सेवा।'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white">
                    <span>Emergency Relief Roster &rarr;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Ongoing Social Projects Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Featured Community Service Initiatives' : 'प्रमुख सामाजिक सेवा पहल'}
                </h3>
                <button 
                  onClick={() => setPortalMode('modules')}
                  className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1"
                >
                  <span>View All 50+ Activities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.slice(0, 6).map(({ module, activity }) => (
                  <div 
                    key={activity.id}
                    onClick={() => {
                      setActiveModule(module);
                      setSelectedActivity(activity);
                      setPortalMode('modules');
                    }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#004B23] transition cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                        <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">{module.title}</span>
                        <span className="text-emerald-600 flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> Active
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#004B23] transition">
                        {activity.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {activity.objective}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                      <span>{currentLanguage === 'en' ? 'Open Activity Guidelines' : 'दिशानिर्देश देखें'}</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Interactive Statistics & Impact Growth Analytics */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4C430] bg-[#F4C430]/10 px-3 py-1 rounded-full border border-[#F4C430]/20">
                    {currentLanguage === 'en' ? 'Live Telemetry & Analytics' : 'लाइव विश्लेषण एवं आंकड़े'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? 'National Seva Growth & Category Breakdown (2026)' : 'राष्ट्रीय सेवा प्रगति एवं श्रेणी वर्गीकरण (2026)'}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleDownloadReport('Monthly Community Impact Analytics Report (PDF)')}
                    className="bg-[#004B23] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow"
                  >
                    <Download className="h-3.5 w-3.5 text-[#F4C430]" />
                    <span>{currentLanguage === 'en' ? 'Download PDF Report' : 'PDF रिपोर्ट डाउनलोड करें'}</span>
                  </button>
                  <button 
                    onClick={() => handleDownloadReport('Community Service Data Audit (Excel)')}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-2 rounded-xl transition border border-slate-700"
                  >
                    Excel
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Our verified impact metrics demonstrate consistent monthly growth across all humanitarian pillars. Every volunteer hour and donation is cryptographically recorded in the national ledger.'
                      : 'हमारे सत्यापित प्रभाव मेट्रिक्स सभी मानवीय स्तंभों में निरंतर मासिक वृद्धि दर्शाते हैं। प्रत्येक स्वयंसेवक घंटा और दान राष्ट्रीय लेजर में दर्ज है।'}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-teal-300 flex items-center gap-1.5">
                          <Stethoscope className="h-3.5 w-3.5" /> {currentLanguage === 'en' ? 'Healthcare & Medical Screening Camps' : 'स्वास्थ्य एवं चिकित्सा जांच शिविर'}
                        </span>
                        <span className="text-white">35% (118 Camps | 15,400+ Patients)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full transition-all duration-1000" style={{ width: '35%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-green-300 flex items-center gap-1.5">
                          <Trees className="h-3.5 w-3.5" /> {currentLanguage === 'en' ? 'Environmental Protection & Shade Trees' : 'पर्यावरण संरक्षण एवं वृक्षारोपण'}
                        </span>
                        <span className="text-white">25% (54,280+ Trees Planted)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-red-300 flex items-center gap-1.5">
                          <Droplet className="h-3.5 w-3.5" /> {currentLanguage === 'en' ? 'Emergency Blood Bank & SOS Network' : 'आपातकालीन रक्त बैंक एवं SOS'}
                        </span>
                        <span className="text-white">20% (3,210+ Units Donated)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full transition-all duration-1000" style={{ width: '20%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-orange-300 flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5" /> {currentLanguage === 'en' ? 'Disaster Relief & Humanitarian Aid' : 'आपदा राहत एवं मानवीय सहायता'}
                        </span>
                        <span className="text-white">20% (28 Major Missions)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full rounded-full transition-all duration-1000" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      {currentLanguage === 'en' ? 'Verified Impact Counter' : 'सत्यापित प्रभाव काउंटर'}
                    </span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                      +18.4% This Quarter
                    </span>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-4xl sm:text-5xl font-black text-[#F4C430] tracking-tight font-mono">
                      1,42,850+
                    </div>
                    <span className="text-xs font-bold text-slate-300 uppercase block mt-2 tracking-wider">
                      {currentLanguage === 'en' ? 'Total Cumulative Seva Hours Logged' : 'कुल दर्ज समाज सेवा घंटे'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700 text-center">
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      <span className="text-lg font-bold text-white block">64+</span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">{currentLanguage === 'en' ? 'Active Districts' : 'सक्रिय जिले'}</span>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      <span className="text-lg font-bold text-emerald-400 block">100%</span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">{currentLanguage === 'en' ? 'Audit Compliance' : 'ऑडिट अनुपालन'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Upcoming Events & Community Drives Schedule */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span>{currentLanguage === 'en' ? 'Upcoming Community Service Drives & Events' : 'आगामी समाज सेवा कार्यक्रम एवं अभियान'}</span>
                </h3>
                <button 
                  onClick={() => setPortalMode('opportunities')}
                  className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1"
                >
                  <span>{currentLanguage === 'en' ? 'View All Duty Rosters' : 'सभी रोस्टर देखें'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="bg-green-100 text-green-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Trees className="h-3.5 w-3.5" /> Environment
                      </span>
                      <span className="text-slate-600">Sun, 26 Jul 2026</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {currentLanguage === 'en' ? 'National Monsoon Tree Plantation Mega Drive' : 'राष्ट्रीय मानसून वृक्षारोपण महाअभियान'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {currentLanguage === 'en' ? 'Targeting 5,000 neem, banyan, and peepal saplings across Jaipur & Delhi NCR with geotagged adoption.' : 'जयपुर और दिल्ली एनसीआर में 5,000 नीम, बरगद और पीपल के पौधों का रोपण।'}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">📍 Jaipur / Delhi NCR</span>
                    <button 
                      onClick={() => setPortalMode('tree')}
                      className="bg-[#004B23] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-xs"
                    >
                      {currentLanguage === 'en' ? 'Enroll Shift' : 'नामांकन करें'}
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="bg-teal-100 text-teal-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Stethoscope className="h-3.5 w-3.5" /> Healthcare
                      </span>
                      <span className="text-slate-600">Sun, 02 Aug 2026</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {currentLanguage === 'en' ? 'Free Cataract Surgery & Eye Screening Camp' : 'निःशुल्क मोतियाबिंद शल्य चिकित्सा शिविर'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {currentLanguage === 'en' ? 'Specialist ophthalmologists screening 500+ senior citizens at Indore District Hospital with free spectacles.' : 'इंदौर जिला अस्पताल में 500+ वरिष्ठ नागरिकों की नेत्र जांच और निःशुल्क चश्मा वितरण।'}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">📍 Indore Hospital</span>
                    <button 
                      onClick={() => setPortalMode('medical')}
                      className="bg-[#004B23] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-xs"
                    >
                      {currentLanguage === 'en' ? 'Register Patient' : 'पंजीकरण करें'}
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="bg-red-100 text-red-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Droplet className="h-3.5 w-3.5" /> Blood Bank
                      </span>
                      <span className="text-slate-600">Sat, 15 Aug 2026</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {currentLanguage === 'en' ? 'Independence Day Mega Blood Donation Camp' : 'स्वतंत्रता दिवस रक्तदान शिविर'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {currentLanguage === 'en' ? 'Collection drive targeting 500 units for emergency thalassemia and accident victim blood banks in Bhopal.' : 'भोपाल में थैलेसीमिया और दुर्घटना पीड़ितों के लिए 500 यूनिट रक्त संग्रह अभियान।'}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">📍 Bhopal Center</span>
                    <button 
                      onClick={() => setPortalMode('blood')}
                      className="bg-[#004B23] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-xs"
                    >
                      {currentLanguage === 'en' ? 'Pledge Donation' : 'रक्तदान संकल्प'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Verified Community Success Stories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span>{currentLanguage === 'en' ? 'Verified Community Impact & Success Stories' : 'सत्यापित सामाजिक प्रभाव एवं सफलता की कहानियां'}</span>
                </h3>
                <span className="text-xs font-bold text-slate-500">
                  {currentLanguage === 'en' ? 'Audited by Khidmat Verification Board' : 'खिदमत सत्यापन बोर्ड द्वारा प्रमाणित'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 border border-emerald-200/80 p-6 rounded-2xl shadow-xs space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#004B23] text-white flex items-center justify-center font-bold text-xl shadow">
                        🚑
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{currentLanguage === 'en' ? 'Midnight Emergency Rescue in Indore' : 'इंदौर में मध्यरात्रि आपातकालीन जीवन रक्षा'}</h4>
                        <span className="text-xs font-semibold text-emerald-700 block">Beneficiary: Smt. Razia Begum & Family</span>
                      </div>
                    </div>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0">
                      Verified Impact
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {currentLanguage === 'en'
                      ? '"When our mother required urgent O-negative blood during emergency surgery at 2 AM, the Rangrez SOS system alerted 5 verified donors within 3 kilometers. Volunteer Mohd. Zaid reached the hospital within 18 minutes, donating lifesaving blood."'
                      : '"जब रात 2 बजे आपातकालीन सर्जरी के दौरान हमारी मां को O-रक्त की आवश्यकता थी, रंगरेज SOS प्रणाली ने 3 किमी के भीतर 5 सत्यापित दाताओं को अलर्ट किया। स्वयंसेवक मोहम्मद ज़ैद ने 18 मिनट के भीतर अस्पताल पहुंचकर रक्तदान किया।"'}
                  </p>
                  <div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>📅 Audited: July 2026</span>
                    <span className="text-[#004B23]">✓ 100% Medical Record Audited</span>
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-200/80 p-6 rounded-2xl shadow-xs space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl shadow">
                        🌳
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{currentLanguage === 'en' ? 'From Wasteland to Green Belt in Morena' : 'मुरैना में बंजर भूमि से हरित पार्क तक का सफर'}</h4>
                        <span className="text-xs font-semibold text-blue-700 block">Project: Youth Green Brigade #42</span>
                      </div>
                    </div>
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0">
                      Eco Triumph
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {currentLanguage === 'en'
                      ? '"Over 120 youth volunteers transformed 5 acres of community wasteland into a flourishing green park by planting 3,500 shade and fruit trees with drip irrigation. Today, the park serves 1,200+ local families every evening."'
                      : '"120 से अधिक युवा स्वयंसेवकों ने ड्रिप सिंचाई के साथ 3,500 छायादार और फलदार वृक्ष लगाकर 5 एकड़ बंजर भूमि को हरे-भरे पार्क में बदल दिया। आज यह पार्क रोजाना 1,200+ स्थानीय परिवारों की सेवा कर रहा है।"'}
                  </p>
                  <div className="pt-3 border-t border-blue-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>📅 Audited: June 2026</span>
                    <span className="text-blue-700">✓ 94% Sapling Survival Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* MODE B: SERVICE MODULES & ACTIVITIES DIRECTORY */}
        {portalMode === 'modules' && (
          <motion.div 
            key="modules"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* 1. Central Coordination Hub Bar & Active Volunteers Stats */}
            <div className="bg-gradient-to-r from-[#004B23] via-[#0B132B] to-[#1C2541] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-900/40 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4C430] bg-[#F4C430]/10 px-3 py-1 rounded-full border border-[#F4C430]/20 inline-block">
                    {currentLanguage === 'en' ? 'Central Service & Coordination Hub' : 'केंद्रीय सेवा एवं समन्वय हब'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'National Volunteer Coordination & Service Directory' : 'राष्ट्रीय स्वयंसेवक समन्वय एवं सेवा निर्देशिका'}
                  </h2>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Welcome to the central operational command for all Rangrez community service programs. Browse 9 specialized pillars, coordinate with local district leaders, inspect active volunteer rosters, and register for duty shifts.'
                      : 'सभी रंगरेज सामाजिक सेवा कार्यक्रमों के केंद्रीय परिचालन कमान में आपका स्वागत है। 9 विशेष स्तंभों को देखें, स्थानीय जिला प्रमुखों से समन्वय करें, और ड्यूटी शिफ्ट के लिए पंजीकरण करें।'}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center">
                    <span className="text-2xl font-black text-[#F4C430] font-mono block">4,850+</span>
                    <span className="text-[10px] text-emerald-200 uppercase font-bold">{currentLanguage === 'en' ? 'Active Volunteers' : 'सक्रिय स्वयंसेवक'}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center">
                    <span className="text-2xl font-black text-emerald-300 font-mono block">64+</span>
                    <span className="text-[10px] text-emerald-200 uppercase font-bold">{currentLanguage === 'en' ? 'District Hubs' : 'जिला हब'}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center col-span-2 sm:col-span-1">
                    <span className="text-2xl font-black text-white font-mono block">50+</span>
                    <span className="text-[10px] text-emerald-200 uppercase font-bold">{currentLanguage === 'en' ? 'Service Programs' : 'सेवा कार्यक्रम'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap gap-3">
                <button
                  onClick={() => setPortalMode('registration')}
                  className="bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <UserCheck className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? '+ Register as Volunteer' : '+ स्वयंसेवक पंजीकरण करें'}</span>
                </button>
                
                <button
                  onClick={() => { setShowDirectory(!showDirectory); setShowLeaderboardModal(false); }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border cursor-pointer ${
                    showDirectory ? 'bg-white text-[#0B132B] border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Building2 className="h-4 w-4 text-emerald-300" />
                  <span>{currentLanguage === 'en' ? 'Service Directory & Contacts' : 'सेवा निर्देशिका एवं संपर्क'}</span>
                </button>

                <button
                  onClick={() => { setShowLeaderboardModal(!showLeaderboardModal); setShowDirectory(false); }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border cursor-pointer ${
                    showLeaderboardModal ? 'bg-white text-[#0B132B] border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Award className="h-4 w-4 text-yellow-300" />
                  <span>{currentLanguage === 'en' ? 'Volunteer Leaderboard' : 'स्वयंसेवक लीडरबोर्ड'}</span>
                </button>

                <button
                  onClick={() => setPortalMode('opportunities')}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition border border-white/20 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-purple-300" />
                  <span>{currentLanguage === 'en' ? 'Duty Rosters & Shifts' : 'रोस्टर एवं शिफ्ट'}</span>
                </button>

                <button
                  onClick={() => setPortalMode('blood')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow flex items-center gap-2 ml-auto cursor-pointer"
                >
                  <Droplet className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Emergency SOS Desk' : 'आपातकालीन SOS'}</span>
                </button>
              </div>
            </div>

            {/* Project Highlights Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl flex items-center space-x-3">
                <span className="p-3 bg-[#004B23] text-white rounded-xl shadow-xs"><Trees className="h-5 w-5" /></span>
                <div>
                  <h4 className="font-bold text-xs text-[#004B23]">{currentLanguage === 'en' ? 'Monsoon Green Brigade' : 'मानसून हरित ब्रिगेड'}</h4>
                  <p className="text-[11px] text-slate-600">{currentLanguage === 'en' ? '5,000 native shade saplings being adopted.' : '5,000 छायादार पौधों को गोद लिया जा रहा है।'}</p>
                </div>
              </div>
              <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-2xl flex items-center space-x-3">
                <span className="p-3 bg-blue-600 text-white rounded-xl shadow-xs"><Stethoscope className="h-5 w-5" /></span>
                <div>
                  <h4 className="font-bold text-xs text-blue-900">{currentLanguage === 'en' ? 'Free Medical & Cataract Vans' : 'निःशुल्क चिकित्सा एवं मोतियाबिंद वैन'}</h4>
                  <p className="text-[11px] text-slate-600">{currentLanguage === 'en' ? 'Screening 1,200+ senior citizens this month.' : 'इस माह 1,200+ वरिष्ठ नागरिकों की जांच।'}</p>
                </div>
              </div>
              <div className="bg-purple-50/70 border border-purple-200 p-4 rounded-2xl flex items-center space-x-3">
                <span className="p-3 bg-purple-600 text-white rounded-xl shadow-xs"><HeartHandshake className="h-5 w-5" /></span>
                <div>
                  <h4 className="font-bold text-xs text-purple-900">{currentLanguage === 'en' ? 'Sabeel Water & Heat Relief' : 'सबील पेयजल एवं राहत सेवा'}</h4>
                  <p className="text-[11px] text-slate-600">{currentLanguage === 'en' ? '45 free drinking water counters active nationwide.' : 'देश भर में 45 निःशुल्क पेयजल काउंटर सक्रिय।'}</p>
                </div>
              </div>
            </div>

            {/* Service Directory Table Modal / View */}
            {showDirectory && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-emerald-600" />
                      <span>{currentLanguage === 'en' ? 'National Service Directory & Local District Committee Contacts' : 'राष्ट्रीय सेवा निर्देशिका एवं जिला समिति संपर्क'}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {currentLanguage === 'en' ? 'Direct contact officers for volunteer mobilization, emergency medical assistance, and community welfare inquiries.' : 'स्वयंसेवक लामबंदी, आपातकालीन चिकित्सा सहायता और समाज सेवा पूछताछ के लिए सीधे संपर्क अधिकारी।'}
                    </p>
                  </div>
                  <button onClick={() => setShowDirectory(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-xl cursor-pointer">
                    ✕ Close
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase bg-slate-50">
                        <th className="p-3">District / City Hub</th>
                        <th className="p-3">Chief Service Coordinator</th>
                        <th className="p-3">Active Volunteers</th>
                        <th className="p-3">Primary Focus Areas</th>
                        <th className="p-3 text-right">Emergency Helpline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                      {[
                        { city: 'Indore Hub (MP)', name: 'Janab Mohd. Zaid Rangrez', vols: '850+ Vols', focus: 'Medical Camps, Blood SOS, Orphan Aid', phone: '+91 98260-11223' },
                        { city: 'Jaipur Hub (Raj)', name: 'Janab Abdul Kareem Rangrez', vols: '720+ Vols', focus: 'Tree Plantation, Sabeel Water, Education', phone: '+91 94140-33445' },
                        { city: 'Bhopal Hub (MP)', name: 'Janab Rashid Ali Rangrez', vols: '640+ Vols', focus: 'Disaster Relief, Thalassemia Blood Bank', phone: '+91 98930-55667' },
                        { city: 'Delhi NCR Brigade', name: 'Janab Imran Khan Rangrez', vols: '910+ Vols', focus: 'Legal Aid, Youth Counseling, Career Mentorship', phone: '+91 98110-77889' },
                        { city: 'Lucknow Hub (UP)', name: 'Janab Saleem Ahmad Rangrez', vols: '580+ Vols', focus: 'Widow Pension Support, Medical Screening', phone: '+91 94150-99001' },
                        { city: 'Mumbai Hub (MH)', name: 'Janab Farooq Rangrez', vols: '620+ Vols', focus: 'Hospital Guidance, Cancer Patient Shelter', phone: '+91 98200-22334' },
                      ].map((hub, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition">
                          <td className="p-3 font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {hub.city}
                          </td>
                          <td className="p-3">{hub.name}</td>
                          <td className="p-3 font-semibold text-[#004B23]">{hub.vols}</td>
                          <td className="p-3 text-slate-500">{hub.focus}</td>
                          <td className="p-3 text-right font-mono font-bold text-slate-900">{hub.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Volunteer Leaderboard Toggle View */}
            {showLeaderboardModal && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span>{currentLanguage === 'en' ? 'National Volunteer Leaderboard & Month Champions' : 'राष्ट्रीय स्वयंसेवक लीडरबोर्ड एवं मासिक चैंपियन'}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {currentLanguage === 'en' ? 'Recognizing individuals logging the highest verified cryptographic seva hours this month.' : 'इस माह सर्वाधिक सत्यापित सेवा घंटे दर्ज करने वाले समाज सेवकों का सम्मान।'}
                    </p>
                  </div>
                  <button onClick={() => setShowLeaderboardModal(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-xl cursor-pointer">
                    ✕ Close
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { rank: '1st Place 🏆', name: 'Janab Mohd. Zaid', city: 'Indore', hours: '142 Hours Logged', badge: 'National Khidmat Champion', color: 'from-amber-500 to-yellow-600 text-white' },
                    { rank: '2nd Place 🥈', name: 'Smt. Fatima Begum', city: 'Bhopal', hours: '128 Hours Logged', badge: 'Blood SOS Coordinator', color: 'from-slate-700 to-slate-800 text-white' },
                    { rank: '3rd Place 🥉', name: 'Janab Abdul Kareem', city: 'Jaipur', hours: '116 Hours Logged', badge: 'Green Brigade Leader', color: 'from-[#004B23] to-emerald-800 text-white' },
                  ].map((leader, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${leader.color} p-5 rounded-2xl shadow-md space-y-2 flex flex-col justify-between`}>
                      <div className="flex justify-between items-center text-xs font-bold opacity-90">
                        <span>{leader.rank}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">{leader.city} Hub</span>
                      </div>
                      <h4 className="font-bold text-lg">{leader.name}</h4>
                      <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-semibold">
                        <span>★ {leader.hours}</span>
                        <span className="text-[10px] bg-white text-slate-900 px-2 py-0.5 rounded font-bold">{leader.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Main Content Grid: Left Sidebar + Right Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sidebar: Module List */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 px-2">
                  {currentLanguage === 'en' ? 'Select Pillar' : 'स्तंभ चुनें'}
              </h3>
              {COMMUNITY_MODULES.map(module => (
                <button
                  key={module.id}
                  onClick={() => { 
                    setActiveModule(module); 
                    setSelectedActivity(null); 
                  }}
                  className={`w-full p-4 text-left rounded-2xl font-bold transition flex items-center justify-between cursor-pointer border ${
                    activeModule.id === module.id 
                      ? 'bg-[#004B23] text-white border-[#004B23] shadow-md scale-[1.02]' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeModule.id === module.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Layers className="h-4 w-4" />
                    </div>
                    <span>{module.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeModule.id === module.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {module.activities.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Panel: Activities List OR Detailed Activity View */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              {!selectedActivity ? (
                <>
                  <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-[#0B132B]">{activeModule.title}</h2>
                      <p className="text-sm text-slate-600 mt-1">{activeModule.description}</p>
                    </div>
                    <button
                      onClick={() => handleDownloadReport(`${activeModule.title} Module Guidelines`)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center space-x-1.5 shrink-0"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>{currentLanguage === 'en' ? 'Download PDF' : 'पीडीएफ डाउनलोड'}</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {activeModule.activities.map(activity => (
                      <div 
                        key={activity.id} 
                        onClick={() => setSelectedActivity(activity)}
                        className="p-5 border border-slate-200 rounded-2xl hover:border-[#004B23] hover:shadow-md transition cursor-pointer flex items-center justify-between group bg-slate-50/50"
                      >
                        <div className="space-y-1 pr-4">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B23] transition">{activity.title}</h3>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">{activity.objective}</p>
                          <div className="flex items-center space-x-4 text-[11px] font-semibold text-slate-500 pt-1">
                            <span>👥 {activity.volunteerRequirements}</span>
                            <span>💰 {activity.estimatedBudget}</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#004B23] group-hover:text-white transition shrink-0">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <button 
                      onClick={() => setSelectedActivity(null)} 
                      className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> 
                      <span>Back to {activeModule.title}</span>
                    </button>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleDownloadReport(selectedActivity.title)}
                        className="bg-[#004B23] text-white font-bold px-3.5 py-1.5 rounded-lg text-xs hover:bg-emerald-800 transition flex items-center space-x-1"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Export Report</span>
                      </button>
                      <button 
                        onClick={() => setPortalMode('registration')}
                        className="bg-[#F4C430] text-[#0B132B] font-bold px-3.5 py-1.5 rounded-lg text-xs hover:bg-amber-400 transition flex items-center space-x-1"
                      >
                        <UserCheck className="h-3.5 w-3.5" />
                        <span>Register to Volunteer</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                      {activeModule.title}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">{selectedActivity.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-400 font-bold uppercase block mb-1">Target Beneficiaries</span>
                      <span className="font-semibold text-slate-800">{selectedActivity.whoWillBenefit}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase block mb-1">Volunteer Requirement</span>
                      <span className="font-semibold text-slate-800">{selectedActivity.volunteerRequirements}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase block mb-1">Estimated Budget</span>
                      <span className="font-semibold text-slate-800">{selectedActivity.estimatedBudget}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase block mb-1">Suggested Frequency</span>
                      <span className="font-semibold text-slate-800">{selectedActivity.suggestedAnnualFrequency}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#004B23]" />
                        <span>Core Objective & Vision</span>
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">{selectedActivity.objective}</p>
                    </div>

                    <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl">
                      <h4 className="font-bold text-amber-900 mb-1 flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-amber-600" />
                        <span>Required Permissions & Compliance</span>
                      </h4>
                      <p className="text-amber-800 text-xs sm:text-sm">{selectedActivity.requiredPermissions || 'Standard local committee notification and municipality clearance.'}</p>
                    </div>

                    <div className="p-4 bg-rose-50/60 border border-rose-200/80 rounded-xl">
                      <h4 className="font-bold text-rose-900 mb-1 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-600" />
                        <span>Safety Guidelines & Protocol</span>
                      </h4>
                      <p className="text-rose-800 text-xs sm:text-sm">{selectedActivity.safetyGuidelines}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-xl">
                        <h4 className="font-bold text-blue-900 mb-1 text-xs uppercase">Government Schemes & Subsidies</h4>
                        <p className="text-blue-800 text-xs mt-1">{selectedActivity.govtSchemes}</p>
                      </div>
                      <div className="p-4 bg-purple-50/60 border border-purple-200/80 rounded-xl">
                        <h4 className="font-bold text-purple-900 mb-1 text-xs uppercase">CSR & Funding Opportunities</h4>
                        <p className="text-purple-800 text-xs mt-1">{selectedActivity.csrOpportunities}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-2">
                      <h4 className="font-bold text-emerald-900 text-xs uppercase">Impact Measurement & Success Indicators</h4>
                      <p className="text-emerald-800 text-xs"><strong>Measurement:</strong> {selectedActivity.impactMeasurement}</p>
                      <p className="text-emerald-800 text-xs"><strong>Indicators:</strong> {selectedActivity.successIndicators}</p>
                      <p className="text-emerald-800 text-xs"><strong>Documentation:</strong> {selectedActivity.photosAndReportTemplate}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </motion.div>
        )}

        {/* MODE C: VOLUNTEER REGISTRATION WORKFLOW & ID ISSUANCE */}
        {portalMode === 'registration' && (
          <motion.div 
            key="registration"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Registration Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Official Volunteer Registration Form' : 'आधिकारिक स्वयंसेवक पंजीकरण फॉर्म'}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Join the national Khidmat Brigade. Once verified, you will receive a QR-enabled Volunteer ID badge.' : 'राष्ट्रीय खिदमत दल से जुड़ें। सत्यापन के बाद आपको QR युक्त स्वयंसेवक पहचान पत्र प्राप्त होगा।'}
                  </p>
                </div>
                <span className="p-3 bg-purple-100 text-purple-700 rounded-2xl font-bold">
                  <UserCheck className="h-6 w-6" />
                </span>
              </div>

              {!regSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setRegSubmitted(true); }} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Full Name' : 'पूरा नाम'} *</label>
                      <input 
                        required 
                        type="text" 
                        value={regForm.fullName}
                        onChange={(e) => setRegForm({...regForm, fullName: e.target.value})}
                        placeholder="e.g. Mohd. Zaid Rangrez" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]" 
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? "Father's / Guardian Name" : 'पिता का नाम'} *</label>
                      <input 
                        required 
                        type="text" 
                        value={regForm.fatherName}
                        onChange={(e) => setRegForm({...regForm, fatherName: e.target.value})}
                        placeholder="e.g. Janab Shakeel Ahmed" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Blood Group' : 'ब्लड ग्रुप'} *</label>
                      <select 
                        value={regForm.bloodGroup}
                        onChange={(e) => setRegForm({...regForm, bloodGroup: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23] font-bold text-red-600"
                      >
                        <option value="O+">O+ (Universal Donor)</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="O-">O- (Rare)</option>
                        <option value="A-">A- (Rare)</option>
                        <option value="B-">B- (Rare)</option>
                        <option value="AB-">AB- (Rare)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'District / City' : 'जिला / शहर'} *</label>
                      <input 
                        required 
                        type="text" 
                        value={regForm.district}
                        onChange={(e) => setRegForm({...regForm, district: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]" 
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'} *</label>
                      <input 
                        required 
                        type="tel" 
                        value={regForm.phone}
                        onChange={(e) => setRegForm({...regForm, phone: e.target.value})}
                        placeholder="+91 98765 43210" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Primary Skill / Specialization' : 'मुख्य कौशल'} *</label>
                      <select 
                        value={regForm.primarySkill}
                        onChange={(e) => setRegForm({...regForm, primarySkill: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]"
                      >
                        <option value="Healthcare & First Aid">Healthcare & First Aid</option>
                        <option value="Disaster Rescue & Relief">Disaster Rescue & Relief</option>
                        <option value="Teaching & Student Mentorship">Teaching & Student Mentorship</option>
                        <option value="Blood Donation Coordination">Blood Donation Coordination</option>
                        <option value="Event Crowd Control">Event Crowd Control & Security</option>
                        <option value="Tree Plantation & Green Care">Tree Plantation & Green Care</option>
                        <option value="Legal Aid & Documentation">Legal Aid & Documentation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Availability' : 'उपलब्धता'} *</label>
                      <select 
                        value={regForm.availability}
                        onChange={(e) => setRegForm({...regForm, availability: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-[#004B23]"
                      >
                        <option value="Weekends & Emergencies">Weekends & Emergencies</option>
                        <option value="Full Time during Events">Full Time during Events</option>
                        <option value="Evening Hours (Online/Phone)">Evening Hours (Online/Phone)</option>
                        <option value="Emergency SOS On-call">Emergency SOS On-call Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{currentLanguage === 'en' ? 'Service Interest Areas' : 'सेवा क्षेत्र'} (Select multiple)</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Medical Camps', 'Blood Donation', 'Tree Plantation', 'Disaster Relief', 'Education Mentorship', 'Social Harmony'].map(interest => {
                        const sel = regForm.interestAreas.includes(interest);
                        return (
                          <button
                            type="button"
                            key={interest}
                            onClick={() => {
                              if (sel) setRegForm({...regForm, interestAreas: regForm.interestAreas.filter(i => i !== interest)});
                              else setRegForm({...regForm, interestAreas: [...regForm.interestAreas, interest]});
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                              sel ? 'bg-[#004B23] text-white border-[#004B23]' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                            }`}
                          >
                            {sel ? '✓ ' : '+ '} {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      🔒 Your data is verified by the local area committee president before ID card issuance.
                    </span>
                    <button 
                      type="submit"
                      className="bg-[#004B23] hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition cursor-pointer flex items-center space-x-2"
                    >
                      <UserCheck className="h-4 w-4" />
                      <span>{currentLanguage === 'en' ? 'Submit Registration & Generate ID' : 'पंजीकरण जमा करें एवं आईडी बनाएं'}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    {currentLanguage === 'en' ? 'Registration Approved & Verified!' : 'पंजीकरण स्वीकृत एवं सत्यापित!'}
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    {currentLanguage === 'en' 
                      ? 'Congratulations! Your details have been recorded in the national volunteer database. Your official ID card badge has been generated on the right.'
                      : 'बधाई हो! आपका विवरण राष्ट्रीय स्वयंसेवक डेटाबेस में दर्ज कर लिया गया है। आपका पहचान पत्र दाईं ओर तैयार है।'}
                  </p>
                  <div className="flex justify-center space-x-3 pt-2">
                    <button 
                      onClick={() => setRegSubmitted(false)}
                      className="bg-white text-emerald-800 border border-emerald-300 font-bold px-4 py-2 rounded-xl text-xs hover:bg-emerald-100 transition"
                    >
                      Register Another Volunteer
                    </button>
                    <button 
                      onClick={() => handleDownloadReport('Volunteer ID Badge PDF Card')}
                      className="bg-[#004B23] text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md hover:bg-emerald-800 transition flex items-center space-x-1.5"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download ID Card PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Digital Volunteer ID Card Preview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#004B23] text-white rounded-3xl p-6 shadow-2xl border-2 border-[#F4C430]/40 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#F4C430]/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F4C430] text-[#0B132B] flex items-center justify-center font-black text-sm shadow">
                      RS
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">Rangrez Community Bharat</h4>
                      <span className="text-[10px] text-[#F4C430] uppercase font-semibold block">Official Volunteer Badge</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold uppercase">
                    Verified
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-extrabold text-2xl shadow shrink-0">
                    {regForm.fullName ? regForm.fullName.charAt(0).toUpperCase() : 'V'}
                  </div>
                  <div className="space-y-1 overflow-hidden">
                    <span className="text-[10px] text-gray-400 uppercase block">Volunteer Name</span>
                    <h5 className="font-serif font-bold text-lg text-white truncate">{regForm.fullName || 'Janab Mohd. Zaid'}</h5>
                    <span className="text-xs text-emerald-300 font-semibold block flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#F4C430]" />
                      {regForm.primarySkill}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-white/5 p-3 rounded-xl border border-white/10 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Volunteer ID</span>
                    <span className="font-mono font-bold text-[#F4C430]">{regId}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Blood Group</span>
                    <span className="font-bold text-red-400">{regForm.bloodGroup} (Active Donor)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">District</span>
                    <span className="font-medium text-white">{regForm.district}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Availability</span>
                    <span className="font-medium text-gray-200 truncate block">{regForm.availability}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <div className="flex items-center space-x-2">
                    <QrCode className="h-10 w-10 text-white bg-white/10 p-1 rounded-lg border border-white/20" />
                    <span className="text-[9px] text-gray-300 max-w-[120px] leading-tight">
                      Scan to verify cryptographic attendance and seva hours.
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDownloadReport('Volunteer ID Badge PDF Card')}
                    className="bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-bold px-3 py-1.5 rounded-lg text-xs transition shadow flex items-center space-x-1"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-900 space-y-2">
                <h5 className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span>7-Point Mandatory Verification System</span>
                </h5>
                <p className="leading-relaxed text-amber-800">
                  Every registered volunteer undergoes community background screening by the district secretariat. Only verified ID card holders are authorized for official relief distribution and camp management.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* MODE D: DUTY ROSTER & ACTIVE OPPORTUNITIES */}
        {portalMode === 'opportunities' && (
          <motion.div 
            key="opportunities"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Active Duty Roster & Volunteer Shifts' : 'सक्रिय ड्यूटी रोस्टर एवं स्वयंसेवा अवसर'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {currentLanguage === 'en' ? 'Sign up for immediate community shifts, upcoming event security, medical camp crowd control, or flood relief distribution.' : 'तत्काल सेवा कार्यों, आगामी आयोजनों, चिकित्सा शिविर या आपदा राहत वितरण के लिए अपनी ड्यूटी शिफ्ट चुनें।'}
                </p>
              </div>
              <button
                onClick={() => handleDownloadReport('Active Duty Roster Summary')}
                className="bg-[#004B23] text-white font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-emerald-800 transition flex items-center space-x-1.5 shrink-0 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>{currentLanguage === 'en' ? 'Download Roster (PDF)' : 'रोस्टर डाउनलोड'}</span>
              </button>
            </div>

            {/* Interactive Search & Filter Bar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentLanguage === 'en' ? 'Search shifts by title, skills required, or coordinator name...' : 'शीर्षक, कौशल या समन्वयक के नाम से खोजें...'}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-[#004B23]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 shrink-0">📍 {currentLanguage === 'en' ? 'District:' : 'जिला:'}</span>
                  <select
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                    className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#004B23]"
                  >
                    <option value="ALL">All Districts / Nationwide</option>
                    <option value="Indore">Indore Chapter</option>
                    <option value="Jaipur">Jaipur Chapter</option>
                    <option value="Bhopal">Bhopal Chapter</option>
                    <option value="Lucknow">Lucknow Chapter</option>
                    <option value="Delhi NCR">Delhi NCR Chapter</option>
                  </select>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-500 mr-1">{currentLanguage === 'en' ? 'Category:' : 'श्रेणी:'}</span>
                {['ALL', 'Healthcare', 'Disaster Aid', 'Education', 'Blood Bank', 'Environment', 'Legal Aid', 'Social Welfare'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      selectedCategoryFilter === cat
                        ? 'bg-[#004B23] text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {cat === 'ALL' ? (currentLanguage === 'en' ? 'All Categories' : 'सभी श्रेणियां') : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Opportunities List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Free Medical & Eye Camp Crowd Control', district: 'Indore', date: 'Sunday, 12 July 2026', time: '08:00 AM - 02:00 PM', reqCount: 15, filled: 12, urgent: true, category: 'Healthcare', skills: ['Crowd Control', 'Patient Guidance', 'First Aid'], coordinator: 'Dr. M.A. Rangrez' },
                { title: 'Monsoon Flood Relief Ration Packing', district: 'Jaipur', date: 'Immediate / Ongoing', time: '10:00 AM - 05:00 PM', reqCount: 25, filled: 18, urgent: true, category: 'Disaster Aid', skills: ['Heavy Lifting', 'Logistics', 'Inventory Tracking'], coordinator: 'Janab Abdul Kareem' },
                { title: 'Community Career Counselling Registration Desk', district: 'Bhopal', date: 'Saturday, 18 July 2026', time: '09:00 AM - 01:00 PM', reqCount: 8, filled: 5, urgent: false, category: 'Education', skills: ['Data Entry', 'Public Speaking', 'Mentorship'], coordinator: 'Prof. Tariq Rangrez' },
                { title: 'Mega Blood Donation Camp Coordinator', district: 'Lucknow', date: 'Sunday, 26 July 2026', time: '09:00 AM - 04:00 PM', reqCount: 10, filled: 9, urgent: false, category: 'Blood Bank', skills: ['Donor Registration', 'Refreshment Mgmt', 'Screening Aid'], coordinator: 'Janab Saleem Ahmad' },
                { title: '500-Tree Plantation Drive Geotagging Team', district: 'Delhi NCR', date: 'Sunday, 2 August 2026', time: '07:00 AM - 11:00 AM', reqCount: 20, filled: 14, urgent: false, category: 'Environment', skills: ['GPS Tagging', 'Sapling Planting', 'Water Irrigation'], coordinator: 'Janab Imran Khan' },
                { title: 'Senior Citizen Legal Aid Document Assistance', district: 'Jaipur', date: 'Every Saturday', time: '11:00 AM - 02:00 PM', reqCount: 5, filled: 3, urgent: false, category: 'Legal Aid', skills: ['Legal Literacy', 'Document Drafting', 'Senior Care'], coordinator: 'Adv. Shakir Rangrez' },
                { title: 'Sabeel Water & Summer Heat Relief Kiosk Duty', district: 'Indore', date: 'Daily Shifts', time: '12:00 PM - 04:00 PM', reqCount: 12, filled: 8, urgent: true, category: 'Social Welfare', skills: ['Hydration Service', 'Public Relations', 'Heat Relief Aid'], coordinator: 'Janab Mohd. Zaid' },
                { title: 'Community Orphanage Weekly Tutoring & Mentorship', district: 'Bhopal', date: 'Every Sunday', time: '10:00 AM - 12:30 PM', reqCount: 6, filled: 4, urgent: false, category: 'Education', skills: ['Mathematics', 'Science Tutoring', 'Child Guidance'], coordinator: 'Smt. Fatima Begum' },
              ]
                .filter(shift => selectedCategoryFilter === 'ALL' || shift.category === selectedCategoryFilter)
                .filter(shift => districtFilter === 'ALL' || shift.district === districtFilter)
                .filter(shift => 
                  searchQuery.trim() === '' || 
                  shift.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  shift.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                  shift.coordinator.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((shift, idx) => {
                  const seatsLeft = shift.reqCount - shift.filled;
                  const percentFilled = Math.round((shift.filled / shift.reqCount) * 100);
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#004B23] transition flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                            {shift.category}
                          </span>
                          {shift.urgent && (
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200 px-2.5 py-0.5 rounded-full animate-pulse">
                              🔥 URGENT NEED
                            </span>
                          )}
                        </div>

                        <h3 className="font-bold text-lg text-slate-900 leading-snug">{shift.title}</h3>

                        <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span><strong>Location:</strong> {shift.district} Chapter</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span><strong>Date:</strong> {shift.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span><strong>Shift:</strong> {shift.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 pt-0.5">
                            <UserCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span><strong>Coordinator:</strong> {shift.coordinator}</span>
                          </div>
                        </div>

                        {/* Required Skills Badges */}
                        <div className="pt-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            {currentLanguage === 'en' ? 'Required Competencies:' : 'आवश्यक योग्यता:'}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {shift.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2 py-0.5 rounded-md font-semibold">
                                ✓ {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Volunteer Capacity & Seats Remaining */}
                        <div className="pt-3">
                          <div className="flex justify-between items-center text-xs font-bold mb-1">
                            <span className="text-slate-700">Roster: {shift.filled} / {shift.reqCount} Filled</span>
                            <span className={seatsLeft <= 3 ? 'text-rose-600 font-extrabold' : 'text-emerald-600 font-bold'}>
                              {seatsLeft} {currentLanguage === 'en' ? 'Seats Left' : 'सीट शेष'}
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/60">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${shift.urgent ? 'bg-rose-500' : 'bg-[#004B23]'}`} 
                              style={{ width: `${percentFilled}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-medium">QR Shift Pass Enabled</span>
                        <button 
                          onClick={() => setSelectedOppModal(shift)}
                          className="bg-[#0B132B] hover:bg-[#004B23] text-white font-bold px-4 py-2 rounded-xl text-xs transition shadow cursor-pointer flex items-center gap-1"
                        >
                          <span>{currentLanguage === 'en' ? 'Register Shift +' : 'शिफ्ट बुक करें +'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Application / Enrollment Modal */}
            {selectedOppModal && (
              <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 bg-emerald-100 text-[#004B23] rounded-xl font-bold"><Award className="h-5 w-5" /></span>
                      <h3 className="text-lg font-bold text-slate-900">{currentLanguage === 'en' ? 'Confirm Duty Shift Enrollment' : 'ड्यूटी शिफ्ट नामांकन पुष्टि'}</h3>
                    </div>
                    <button onClick={() => setSelectedOppModal(null)} className="text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-xl">✕</button>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                    <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">{selectedOppModal.category}</span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{selectedOppModal.title}</h4>
                    <p className="text-slate-600 flex items-center gap-1">📍 <strong>Location:</strong> {selectedOppModal.district} Chapter</p>
                    <p className="text-slate-600 flex items-center gap-1">📅 <strong>Date & Time:</strong> {selectedOppModal.date} | {selectedOppModal.time}</p>
                    <p className="text-slate-600 flex items-center gap-1">👨‍✈️ <strong>Coordinator:</strong> {selectedOppModal.coordinator}</p>
                  </div>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(currentLanguage === 'en' ? `🎉 Enrollment Confirmed for "${selectedOppModal.title}"!\nYour Volunteer Duty Pass has been issued. Coordinator ${selectedOppModal.coordinator} will contact you via WhatsApp.` : `🎉 नामांकन सफल: "${selectedOppModal.title}"!\nआपका ड्यूटी पास जारी कर दिया गया है।`);
                    setSelectedOppModal(null);
                  }} className="space-y-4 text-xs font-medium text-slate-700">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Your Volunteer ID / Registered Phone Number' : 'आपका स्वयंसेवक आईडी / पंजीकृत फोन'}</label>
                      <input required type="text" placeholder="e.g. VOL-2026-8890 or +91 98260XXXXX" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#004B23]" />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Emergency Contact Person & Phone' : 'आपातकालीन संपर्क व्यक्ति और फोन'}</label>
                      <input required type="text" placeholder="e.g. Janab Shakeel (Father) - 94140XXXXX" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#004B23]" />
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <input required type="checkbox" id="guidelines_chk" className="mt-0.5 rounded text-[#004B23]" />
                      <label htmlFor="guidelines_chk" className="text-[11px] text-slate-600 leading-tight">
                        {currentLanguage === 'en'
                          ? 'I pledge to arrive 15 minutes prior to shift commencement in complete Khidmat uniform and adhere strictly to community code of conduct.'
                          : 'मैं वर्दी में शिफ्ट शुरू होने से 15 मिनट पहले पहुंचने और समाज सेवा आचार संहिता का पालन करने का संकल्प लेता हूं।'}
                      </label>
                    </div>
                    <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                      <button type="button" onClick={() => setSelectedOppModal(null)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition">Cancel</button>
                      <button type="submit" className="px-5 py-2 bg-[#004B23] hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition shadow">Confirm Enrollment & Issue Pass</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* MODE E: BLOOD DONOR NETWORK & EMERGENCY SOS */}
        {portalMode === 'blood' && (
          <motion.div 
            key="blood"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-red-900 via-rose-800 to-red-700 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-rose-200 border border-white/20">
                  <Droplet className="h-3.5 w-3.5 fill-red-500 text-red-400" />
                  <span>{currentLanguage === 'en' ? '24x7 Emergency Blood Bank & Donor Directory' : '24x7 आपातकालीन रक्त कोष एवं रक्तदाता निर्देशिका'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? 'Every Drop Saves a Life. Search 3,210+ Verified Donors.' : 'रक्तदान महादान। 3,210+ सत्यापित रक्तदाताओं में से खोजें।'}
                </h2>
                <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'Instant geolocation donor matching for emergency surgeries, dengue platelet replacement, and thalassemia support across India.' 
                    : 'आपातकालीन ऑपरेशन, डेंगू और थैलेसीमिया रोगियों के लिए तुरंत रक्तदाताओं की उपलब्धता।'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button 
                  onClick={() => alert(currentLanguage === 'en' ? 'SOS Emergency Broadcast dispatched to 140 nearby O- and AB- donors!' : 'आपातकालीन SOS संदेश 140 निकटतम रक्तदाताओं को भेजा गया!')}
                  className="w-full sm:w-auto bg-white text-red-800 hover:bg-red-50 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl transition flex items-center justify-center space-x-2 animate-pulse cursor-pointer"
                >
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>{currentLanguage === 'en' ? 'DISPATCH EMERGENCY SOS' : 'आपातकालीन SOS भेजें'}</span>
                </button>
                <button 
                  onClick={() => setPortalMode('registration')}
                  className="w-full sm:w-auto bg-red-950/60 hover:bg-red-950 text-white font-bold px-5 py-3 rounded-xl text-sm border border-red-400/40 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Register as Donor' : 'रक्तदाता बनें'}</span>
                </button>
              </div>
            </div>

            {/* Blood Group Quick Filters */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Filter className="h-4 w-4 text-red-600" />
                  <span>{currentLanguage === 'en' ? 'Filter Donors by Blood Group' : 'ब्लड ग्रुप के अनुसार खोजें'}</span>
                </h3>
                <span className="text-xs text-slate-500 font-semibold">Total Registered Donors: 3,210+</span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['ALL', 'O+', 'A+', 'B+', 'AB+', 'O-', 'A-', 'B-', 'AB-'].map(bg => {
                  const isSel = bloodSearchGroup === bg;
                  return (
                    <button
                      key={bg}
                      onClick={() => setBloodSearchGroup(bg)}
                      className={`px-5 py-2.5 rounded-2xl font-black text-sm transition cursor-pointer border ${
                        isSel 
                          ? 'bg-red-600 text-white border-red-600 shadow-md scale-105' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-red-400 hover:text-red-600'
                      }`}
                    >
                      {bg === 'ALL' ? (currentLanguage === 'en' ? 'All Groups' : 'सभी ग्रुप') : bg}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Emergency Blood Requests Board */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600 animate-bounce" />
                <span>{currentLanguage === 'en' ? 'Active Emergency Blood Requests (Needs Immediate Attention)' : 'सक्रिय आपातकालीन रक्त अनुरोध (तुरंत सहायता आवश्यक)'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { patient: 'Master Ayan (7 Yrs)', hospital: 'SMS Hospital, Jaipur', group: 'O-', units: '2 Units', reason: 'Dengue Platelet Replacement', time: 'Urgent / Within 3 Hours', contact: '+91 98290 XXXXX' },
                  { patient: 'Smt. Razia Begum (42 Yrs)', hospital: 'MY Hospital, Indore', group: 'AB-', units: '3 Units', reason: 'Emergency Surgery', time: 'Urgent / Within 5 Hours', contact: '+91 94250 XXXXX' },
                  { patient: 'Janab Feroz Khan (55 Yrs)', hospital: 'Hamidia Hospital, Bhopal', group: 'B+', units: '1 Unit', reason: 'Cardiac Bypass Surgery', time: 'Tomorrow Morning', contact: '+91 98930 XXXXX' },
                ].filter(r => bloodSearchGroup === 'ALL' || r.group === bloodSearchGroup).map((req, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-black text-lg flex items-center justify-center border border-red-200 shadow-xs">
                          {req.group}
                        </span>
                        <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full uppercase border border-rose-100">
                          {req.units} Needed
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{req.patient}</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{req.hospital}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                        <div className="flex justify-between text-slate-700">
                          <span><strong>Reason:</strong></span>
                          <span>{req.reason}</span>
                        </div>
                        <div className="flex justify-between text-rose-600 font-bold">
                          <span><strong>Timeline:</strong></span>
                          <span>{req.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-600">{req.contact}</span>
                      <button 
                        onClick={() => alert(currentLanguage === 'en' ? `Connecting you to family coordinator for patient: ${req.patient}. Please call immediately.` : `रोगी के परिवार से संपर्क जोड़ा जा रहा है: ${req.patient}`)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition shadow cursor-pointer"
                      >
                        {currentLanguage === 'en' ? 'Donate Now / Call &rarr;' : 'अभी कॉल करें &rarr;'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Donor Directory Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {currentLanguage === 'en' ? 'Verified Blood Donor Roster' : 'सत्यापित रक्तदाता निर्देशिका'}
                </h3>
                <button 
                  onClick={() => handleDownloadReport('Blood Donor Roster Excel Index')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center space-x-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Export Donor Directory' : 'सूची डाउनलोड करें'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Janab Imran Rangrez', group: 'O+', city: 'Jaipur', lastDonated: '3 months ago', status: 'Available Now', badge: 'Century Donor 💎', badgeColor: 'bg-purple-100 text-purple-800 border-purple-300' },
                  { name: 'Smt. Shazia Ahmed', group: 'A+', city: 'Indore', lastDonated: '5 months ago', status: 'Available Now', badge: 'Golden Donor 🥇', badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' },
                  { name: 'Mohd. Tariq Khan', group: 'B+', city: 'Bhopal', lastDonated: '2 months ago', status: 'Available Now', badge: 'Silver Donor 🥈', badgeColor: 'bg-slate-100 text-slate-800 border-slate-300' },
                  { name: 'Dr. Rehan Rangrez', group: 'O-', city: 'Lucknow', lastDonated: '4 months ago', status: 'Available Now (Rare)', badge: 'Life Saver Star ⭐', badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' },
                  { name: 'Janab Bilal Ahmed', group: 'AB+', city: 'Delhi', lastDonated: '6 months ago', status: 'Available Now', badge: 'Khidmat Star ★', badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
                  { name: 'Smt. Nasreen Bano', group: 'O+', city: 'Jaipur', lastDonated: '4 months ago', status: 'Available Now', badge: 'Golden Donor 🥇', badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' },
                  { name: 'Mohd. Farhan Rangrez', group: 'B-', city: 'Indore', lastDonated: '5 months ago', status: 'Available Now (Rare)', badge: 'Life Saver Star ⭐', badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' },
                  { name: 'Janab Salman Khan', group: 'A+', city: 'Bhopal', lastDonated: '3 months ago', status: 'Available Now', badge: 'Silver Donor 🥈', badgeColor: 'bg-slate-100 text-slate-800 border-slate-300' },
                ].filter(d => bloodSearchGroup === 'ALL' || d.group === bloodSearchGroup).map((donor, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-2xl hover:border-red-400 transition flex flex-col justify-between bg-slate-50/50 space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black text-xs flex items-center justify-center shadow">
                          {donor.group}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          ● {donor.status}
                        </span>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border block w-fit mb-1 ${donor.badgeColor}`}>
                        {donor.badge}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">{donor.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">📍 {donor.city} Chapter</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-600">
                      <span>Last: {donor.lastDonated}</span>
                      <button 
                        onClick={() => alert(`Connecting to verified donor: ${donor.name}`)}
                        className="text-red-600 hover:underline cursor-pointer"
                      >
                        Request &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mega Blood Donation Camps Schedule & Mobile Van Unit */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span>{currentLanguage === 'en' ? 'Upcoming Mega Blood Donation Camps & Mobile Van Roster' : 'आगामी रक्तदान शिविर एवं मोबाइल वैन शेड्यूल'}</span>
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">✓ 12 Camps Scheduled</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Annual Eid-ul-Adha Mega Blood Drive', place: 'Anjuman Community Hall, Jaipur', date: 'Sunday, 12 July 2026', time: '09:00 AM - 04:00 PM', target: '250+ Units Target', partner: 'SMS Hospital Blood Bank' },
                  { title: 'Mobile Blood Van Camp - Market Square', place: 'Rajwada Chowk, Indore', date: 'Saturday, 18 July 2026', time: '10:00 AM - 05:00 PM', target: '150+ Units Target', partner: 'Red Cross Society Indore' },
                  { title: 'Youth Wing Blood Donation Marathon', place: 'Khidmat Centre Campus, Bhopal', date: 'Sunday, 26 July 2026', time: '08:30 AM - 03:00 PM', target: '300+ Units Target', partner: 'Hamidia Medical College' },
                ].map((camp, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-red-500 transition flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 w-fit">
                        <span>🩸 {camp.target}</span>
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 leading-snug">{camp.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">📍 {camp.place}</p>
                      <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
                        <div><strong>Date & Time:</strong> {camp.date} ({camp.time})</div>
                        <div className="text-red-700"><strong>Partner Bank:</strong> {camp.partner}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400">Donor Certificate Included</span>
                      <button 
                        onClick={() => alert(`Pre-registered donor slot booked for: ${camp.title}. SMS pass dispatched.`)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition shadow cursor-pointer"
                      >
                        Register to Donate &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 24x7 District Emergency Control Room Contacts */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 inline-block">
                    {currentLanguage === 'en' ? 'National Emergency Blood Network' : 'राष्ट्रीय आपातकालीन रक्त नेटवर्क'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? '24x7 District Emergency Blood Control Rooms' : '24x7 जिला आपातकालीन रक्त नियंत्रण कक्ष'}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">Helpline: 1800-180-8890 (Toll Free)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { city: 'Jaipur Chapter Control Room', coordinator: 'Janab Abdul Kareem', phone: '+91 98290-XXXXX', alt: '0141-260XXXX' },
                  { city: 'Indore Chapter Control Room', coordinator: 'Dr. M.A. Rangrez', phone: '+91 94250-XXXXX', alt: '0731-254XXXX' },
                  { city: 'Bhopal Chapter Control Room', coordinator: 'Prof. Tariq Rangrez', phone: '+91 98930-XXXXX', alt: '0755-273XXXX' },
                  { city: 'Lucknow Chapter Control Room', coordinator: 'Janab Saleem Ahmad', phone: '+91 94150-XXXXX', alt: '0522-223XXXX' },
                ].map((ctrl, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F4C430]">🚨 {ctrl.city}</span>
                    </div>
                    <p className="text-xs text-slate-300">👨‍✈️ <strong>Incharge:</strong> {ctrl.coordinator}</p>
                    <div className="pt-2 border-t border-slate-700/60 text-xs font-mono font-bold text-rose-400 flex flex-col gap-0.5">
                      <span>📞 {ctrl.phone}</span>
                      <span className="text-slate-400 text-[11px]">☎️ Office: {ctrl.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* MODE F: MEDICAL CAMPS & HEALTHCARE BRIGADE */}
        {portalMode === 'medical' && (
          <motion.div 
            key="medical"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-teal-200 border border-white/20">
                  <Stethoscope className="h-3.5 w-3.5 text-teal-300" />
                  <span>{currentLanguage === 'en' ? 'National Free Medical Checkup & Eye Screening Brigade' : 'राष्ट्रीय निःशुल्क चिकित्सा एवं नेत्र जांच दल'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? 'Accessible Healthcare for Every Family. 118+ Camps Conducted.' : 'हर परिवार के लिए सुलभ स्वास्थ्य सेवा। 118+ शिविर आयोजित।'}
                </h2>
                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'Specialist diagnosis by community doctors, free cataract surgery coordination, diabetes/hypertension management, and medicine distribution.' 
                    : 'समाज के विशेषज्ञ डॉक्टरों द्वारा जांच, निःशुल्क मोतियाबिंद ऑपरेशन समन्वय, मधुमेह प्रबंधन और दवा वितरण।'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button 
                  onClick={() => alert(currentLanguage === 'en' ? 'Opening Camp Patient Registration Modal...' : 'शिविर रोगी पंजीकरण खुल रहा है...')}
                  className="w-full sm:w-auto bg-[#F4C430] text-[#0B132B] hover:bg-amber-400 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl transition cursor-pointer"
                >
                  <span>{currentLanguage === 'en' ? 'Register Patient for Camp' : 'रोगी का पंजीकरण करें'}</span>
                </button>
                <button 
                  onClick={() => setShowMedVolModal(true)}
                  className="w-full sm:w-auto bg-white text-teal-900 hover:bg-teal-50 font-extrabold px-5 py-3 rounded-xl text-sm shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer border border-white"
                >
                  <PlusCircle className="h-4 w-4 text-teal-700" />
                  <span>{currentLanguage === 'en' ? 'Enroll as Medical Volunteer' : 'चिकित्सा वालंटियर बनें'}</span>
                </button>
                <button 
                  onClick={() => handleDownloadReport('Medical Camp Annual Impact Report')}
                  className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3 rounded-xl text-sm border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Download Medical Report' : 'मेडिकल रिपोर्ट डाउनलोड'}</span>
                </button>
              </div>
            </div>

            {/* Upcoming Medical Camps Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-600" />
                <span>{currentLanguage === 'en' ? 'Upcoming Free Medical & Health Screening Camps' : 'आगामी निःशुल्क स्वास्थ्य एवं जांच शिविर'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Mega Eye Care & Free Cataract Screening Camp', date: 'Sunday, 12 July 2026', place: 'Rangrez Community Bhawan, Jaipur', doctors: 'Dr. Rashid Khan & Eye Team', services: 'Free Glaucoma Test, Spectacles Distribution, Cataract Surgery Reference', expected: '450+ Patients' },
                  { title: 'General Medicine, Cardiology & Diabetes Camp', date: 'Sunday, 19 July 2026', place: 'Anjuman Hall, Indore', doctors: 'Dr. Saima Rangrez & MD Team', services: 'ECG Screening, Blood Sugar Check, BP Check, Free 30-Day Medicines', expected: '600+ Patients' },
                  { title: 'Women’s Health & Pediatric Care Clinic', date: 'Sunday, 26 July 2026', place: 'Khidmat Centre, Bhopal', doctors: 'Dr. Shaheen Bano & Gynecologists', services: 'Child Nutrition Checkup, Anemia Screening, Prenatal Guidance', expected: '350+ Patients' },
                ].map((camp, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-500 transition flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 w-fit">
                        <span>🗓️ {camp.date}</span>
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 leading-snug">{camp.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">📍 {camp.place}</p>
                      <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                        <div className="text-slate-700"><strong>Specialists:</strong> {camp.doctors}</div>
                        <div className="text-teal-700"><strong>Services:</strong> {camp.services}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400">Capacity: {camp.expected}</span>
                      <button 
                        onClick={() => alert(`Patient token generated for camp: ${camp.title}`)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl transition shadow cursor-pointer"
                      >
                        Get Token &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialist Doctors Directory */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{currentLanguage === 'en' ? 'Community Medical Volunteer Directory' : 'समाज के चिकित्सा वालंटियर निर्देशिका'}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Verified doctors offering free tele-consultation and camp services to community members.</p>
                </div>
                <button 
                  onClick={() => handleDownloadReport('Specialist Doctors Directory Roster')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center space-x-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Export Doctors Roster' : 'सूची डाउनलोड'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Dr. Rashid Khan, MD', spec: 'Cardiologist & General Medicine', hospital: 'SMS Medical College', city: 'Jaipur', avail: 'Sundays (10 AM - 1 PM)' },
                  { name: 'Dr. Saima Rangrez, MS', spec: 'Ophthalmologist (Eye Surgeon)', hospital: 'MY Hospital', city: 'Indore', avail: 'Saturdays (2 PM - 5 PM)' },
                  { name: 'Dr. Tariq Ahmed, MD', spec: 'Pediatrician & Child Health', hospital: 'Hamidia Hospital', city: 'Bhopal', avail: 'Weekdays On-Call' },
                  { name: 'Dr. Shaheen Bano, MS', spec: 'Gynecologist & Women Health', hospital: 'KGMU Hospital', city: 'Lucknow', avail: 'Sundays (11 AM - 2 PM)' },
                ].map((doc, idx) => (
                  <div key={idx} className="p-5 border border-slate-200 rounded-2xl hover:border-teal-500 transition flex flex-col justify-between bg-slate-50/50">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-base mb-3">
                        👨‍⚕️
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{doc.name}</h4>
                      <span className="text-xs text-teal-700 font-semibold block mt-0.5">{doc.spec}</span>
                      <p className="text-[11px] text-slate-500 mt-1">🏥 {doc.hospital}, {doc.city}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-600">
                      <span>🕒 {doc.avail}</span>
                      <button 
                        onClick={() => alert(`Initiating tele-consultation request for ${doc.name}`)}
                        className="text-teal-700 hover:underline font-extrabold"
                      >
                        Consult &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Medicines & Diagnostics Distribution Inventory */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
                    {currentLanguage === 'en' ? 'Community Healthcare Inventory' : 'सामुदायिक स्वास्थ्य इन्वेंटरी'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? 'Free Medicines & Diagnostics Distribution Status' : 'निःशुल्क दवा एवं निदान वितरण स्थिति'}
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800">
                  ● 4 Central Dispensaries Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Monthly Diabetes & BP Kits', stock: '1,450 Units Available', dist: '3,200 Distributed This Year', dispensary: 'Jaipur Central Dispensary', icon: '💊' },
                  { name: 'Free Cataract Eye Drops & Glasses', stock: '680 Pairs Available', dist: '1,120 Distributed This Year', dispensary: 'Indore Eye Care Unit', icon: '👓' },
                  { name: 'Pediatric Anemia & Nutrition Syrup', stock: '920 Bottles Available', dist: '2,400 Distributed This Year', dispensary: 'Bhopal Khidmat Med-Hub', icon: '🧪' },
                  { name: 'Emergency First Aid & Trauma Boxes', stock: '340 Kits Available', dist: '850 Distributed This Year', dispensary: 'Lucknow Relief Dispensary', icon: '🩹' },
                ].map((med, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="text-2xl mb-2">{med.icon}</div>
                      <h4 className="font-bold text-white text-sm">{med.name}</h4>
                      <p className="text-xs text-teal-400 font-semibold mt-1">📦 {med.stock}</p>
                      <p className="text-[11px] text-slate-400 mt-1">🏥 {med.dispensary}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400 text-[11px]">{med.dist}</span>
                      <button 
                        onClick={() => alert(`Requesting prescription clearance for: ${med.name}`)}
                        className="text-teal-400 hover:underline cursor-pointer"
                      >
                        Request Kit &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Volunteer Enrollment Modal */}
            {showMedVolModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
                >
                  <button 
                    onClick={() => setShowMedVolModal(false)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xl">
                      👨‍⚕️
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {currentLanguage === 'en' ? 'Enroll as Medical Volunteer / Specialist' : 'चिकित्सा वालंटियर के रूप में पंजीकरण'}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {currentLanguage === 'en' ? 'Join our national roster of doctors, nurses, and paramedical volunteers.' : 'डॉक्टरों, नर्सों और पैरामेडिकल स्वयंसेवकों की हमारी राष्ट्रीय सूची में शामिल हों।'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={async (e) => { 
                    e.preventDefault(); 
                    const fd = new FormData(e.currentTarget);
                    const name = fd.get('fullName') as string;
                    const qual = fd.get('qualification') as string;
                    const spec = fd.get('specialization') as string;
                    const aff = fd.get('affiliation') as string;
                    const phone = fd.get('phone') as string;
                    const regNo = fd.get('regNo') as string;
                    const contr = fd.get('contribution') as string;

                    const sb = getSupabase();
                    if (sb) {
                      try {
                        const { data: userData } = await sb.auth.getUser();
                        await sb.from('volunteers').insert({
                          full_name: name,
                          phone: phone,
                          interest_areas: [spec, qual, contr],
                          bio: `Medical Registration: ${regNo}. Affiliation: ${aff}. Qualification: ${qual}.`,
                          user_id: userData?.user?.id || null,
                          status: 'Active'
                        });
                      } catch (err) {
                        console.error("Error saving medical volunteer:", err);
                      }
                    }

                    alert(currentLanguage === 'en' ? 'Medical volunteer registration submitted! Our health coordinator will verify your credentials within 24 hours.' : 'पंजीकरण जमा किया गया! 24 घंटे के भीतर सत्यापन किया जाएगा।'); 
                    setShowMedVolModal(false); 
                  }} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name with Title *</label>
                        <input type="text" name="fullName" required placeholder="e.g. Dr. Aamir Khan / Nurse Saima" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Medical Qualification *</label>
                        <input type="text" name="qualification" required placeholder="e.g. MBBS, MD, BAMS, BSc Nursing" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Specialization / Department *</label>
                        <input type="text" name="specialization" required placeholder="e.g. Ophthalmology, Pediatrics, General" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Hospital / Clinic Affiliation</label>
                        <input type="text" name="affiliation" placeholder="e.g. SMS Medical College Jaipur" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone / WhatsApp *</label>
                        <input type="tel" name="phone" required placeholder="+91 98XXX XXXXX" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Medical Registration Number *</label>
                        <input type="text" name="regNo" required placeholder="e.g. MCI / State Council Reg No." className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Available Camp Contribution *</label>
                      <select name="contribution" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 outline-none">
                        <option>Weekend Free Camp Screening (Sundays)</option>
                        <option>Online Tele-Consultation (On-Call)</option>
                        <option>Free Surgical Reference & Diagnostics</option>
                        <option>Medicine & Health Camp Organization</option>
                      </select>
                    </div>
                    <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
                      <button 
                        type="button" 
                        onClick={() => setShowMedVolModal(false)}
                        className="px-5 py-2.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg cursor-pointer"
                      >
                        Submit Medical Registration
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* MODE G: TREE PLANTATION & GREEN BHARAT DRIVES */}
        {portalMode === 'tree' && (
          <motion.div 
            key="tree"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-green-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-green-200 border border-white/20">
                  <Trees className="h-3.5 w-3.5 text-green-300" />
                  <span>{currentLanguage === 'en' ? 'Green Bharat & Environmental Stewardship Mission' : 'हरित भारत एवं पर्यावरण संरक्षण मिशन'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? '54,280+ Trees Planted across 64 Districts. Help Us Reach 1 Lakh.' : '64 जिलों में 54,280+ वृक्ष रोपित। 1 लाख वृक्षों का लक्ष्य हासिल करने में जुड़ें।'}
                </h2>
                <p className="text-xs sm:text-sm text-green-100 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'Geotagged neem, peepal, and fruit sapling drives, plastic-free neighborhood campaigns, and clean water preservation.' 
                    : 'जियोटैग किए गए नीम, पीपल और फलदार वृक्षारोपण, प्लास्टिक मुक्त समाज और जल संरक्षण अभियान।'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button 
                  onClick={() => {
                    setTreeCount(t => t + 10);
                    alert(currentLanguage === 'en' ? 'Thank you! You have pledged 10 saplings for the upcoming Sunday monsoon drive.' : 'धन्यवाद! आपने आगामी वृक्षारोपण अभियान के लिए 10 पौधों का संकल्प लिया है।');
                  }}
                  className="w-full sm:w-auto bg-[#F4C430] text-[#0B132B] hover:bg-amber-400 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Pledge 10 Trees Now' : '10 वृक्षों का संकल्प लें'}</span>
                </button>
                <button 
                  onClick={() => setShowSaplingModal(true)}
                  className="w-full sm:w-auto bg-white text-green-900 hover:bg-green-50 font-extrabold px-5 py-3 rounded-xl text-sm shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer border border-white"
                >
                  <Trees className="h-4 w-4 text-green-700" />
                  <span>{currentLanguage === 'en' ? 'Request Free Saplings' : 'निःशुल्क पौधे मांगें'}</span>
                </button>
                <button 
                  onClick={() => handleDownloadReport('Environmental Carbon Impact Report')}
                  className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3 rounded-xl text-sm border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Green Audit Report' : 'ग्रीन ऑडिट रिपोर्ट'}</span>
                </button>
              </div>
            </div>

            {/* Tree Plantation Counters & Geotagged Map Notice */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Total Live Tree Counter</span>
                  <div className="text-4xl font-black text-green-700 mt-2">{treeCount.toLocaleString()}+</div>
                  <p className="text-xs text-slate-600 mt-2">Geotagged saplings thriving across Rajasthan, MP, UP, and Delhi chapters.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-green-700">
                  <span>Survival Rate: 88.4%</span>
                  <span>🌱 Verified</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Carbon Offset Estimated</span>
                  <div className="text-4xl font-black text-emerald-600 mt-2">1,180 Tonnes</div>
                  <p className="text-xs text-slate-600 mt-2">Annual CO2 reduction generated by mature tree belts planted since 2021.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>UN SDG Goal #13 Alignment</span>
                  <span>✓</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Upcoming Drive Target</span>
                  <div className="text-4xl font-black text-amber-600 mt-2">5,000 Saplings</div>
                  <p className="text-xs text-slate-600 mt-2">Scheduled for Sunday, 2 August 2026 across 12 district highway belts.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                  <span>Volunteers Enrolled: 340/500</span>
                  <button onClick={() => setPortalMode('registration')} className="underline">Join &rarr;</button>
                </div>
              </div>
            </div>

            {/* Plantation Drive Gallery & Map Directory */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">{currentLanguage === 'en' ? 'Recent Geotagged Plantation Drives' : 'हाल ही के वृक्षारोपण अभियान'}</h3>
                <button 
                  onClick={() => handleDownloadReport('Plantation Drive Geotag Excel Dump')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center space-x-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Export Geotag Index' : 'जियोटैग सूची डाउनलोड'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { place: 'Jaipur Highway Green Belt', trees: '1,200 Neem & Peepal Saplings', date: 'June 2026', leader: 'Janab Imran Rangrez', status: 'Geotagged & Fenced' },
                  { place: 'Indore Anjuman School Campus', trees: '450 Shade & Fruit Trees', date: 'May 2026', leader: 'Smt. Shazia Ahmed', status: 'Geotagged & Thriving' },
                  { place: 'Bhopal Lake View Park Drive', trees: '800 Native Saplings', date: 'April 2026', leader: 'Mohd. Tariq Khan', status: 'Geotagged & Fenced' },
                ].map((drive, idx) => (
                  <div key={idx} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-md">
                        🌳 {drive.trees}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600">✓ {drive.status}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{drive.place}</h4>
                    <p className="text-xs text-slate-500">🗓️ Planted: {drive.date} | Led by: {drive.leader}</p>
                    <button 
                      onClick={() => alert(`Opening Google Maps coordinates for: ${drive.place}`)}
                      className="w-full mt-2 bg-white hover:bg-green-50 text-green-800 border border-green-300 font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MapPin className="h-3.5 w-3.5 text-green-600" />
                      <span>View Geotagged Map Location</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sapling Care & Maintenance Schedule & Eco-Champion Badges */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
                    {currentLanguage === 'en' ? 'Geotagged Care & Maintenance Protocol' : 'जियोटैग रखरखाव एवं देखभाल प्रोटोकॉल'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? 'Sapling Care & Eco-Champion Recognition' : 'पौधों की देखभाल एवं ईको-चैंपियन सम्मान'}
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#F4C430] bg-amber-950 px-3 py-1.5 rounded-xl border border-amber-800">
                  🏆 Top Eco-Champions Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Janab Imran Rangrez', role: 'Highway Belt Supervisor', action: 'Watered 450 Saplings This Week', badge: 'Green Guardian 🌳', badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300', score: '98% Survival Rate' },
                  { name: 'Smt. Shazia Ahmed', role: 'School Campus Coordinator', action: 'Organic Fertilizer Applied', badge: 'Eco Warrior 🌱', badgeColor: 'bg-teal-100 text-teal-800 border-teal-300', score: '95% Survival Rate' },
                  { name: 'Mohd. Tariq Khan', role: 'Lake View Park Warden', action: 'Fencing & Pruning Complete', badge: 'Sapling Protector 🛡️', badgeColor: 'bg-amber-100 text-amber-800 border-amber-300', score: '99% Survival Rate' },
                  { name: 'Janab Bilal Ahmed', role: 'NCR District Green Lead', action: 'Geotag Verification Completed', badge: 'Carbon Crusader ⚡', badgeColor: 'bg-purple-100 text-purple-800 border-purple-300', score: '92% Survival Rate' },
                ].map((champ, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border block w-fit mb-2 ${champ.badgeColor}`}>
                        {champ.badge}
                      </span>
                      <h4 className="font-bold text-white text-sm">{champ.name}</h4>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">{champ.role}</p>
                      <p className="text-[11px] text-slate-300 mt-2 bg-slate-900/60 p-2 rounded-xl border border-slate-700/60">🛠️ {champ.action}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold">
                      <span className="text-[#F4C430] text-[11px]">{champ.score}</span>
                      <button 
                        onClick={() => alert(`Sending appreciation & support badge to: ${champ.name}`)}
                        className="text-emerald-400 hover:underline cursor-pointer"
                      >
                        Applaud &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sapling Request Modal */}
            {showSaplingModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
                >
                  <button 
                    onClick={() => setShowSaplingModal(false)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center font-bold text-xl">
                      🌱
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {currentLanguage === 'en' ? 'Request Free Geotagged Saplings' : 'निःशुल्क जियोटैग किए गए पौधों का अनुरोध'}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {currentLanguage === 'en' ? 'We provide free saplings along with tree guards for schools, societies, and public spaces.' : 'हम स्कूलों, सोसायटियों और सार्वजनिक स्थानों के लिए ट्री गार्ड के साथ निःशुल्क पौधे प्रदान करते हैं।'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={async (e) => { 
                    e.preventDefault(); 
                    const fd = new FormData(e.currentTarget);
                    const orgName = fd.get('orgName') as string;
                    const phone = fd.get('phone') as string;
                    const saplingType = fd.get('saplingType') as string;
                    const count = fd.get('count') as string;
                    const address = fd.get('address') as string;

                    const sb = getSupabase();
                    if (sb) {
                      try {
                        const { data: userData } = await sb.auth.getUser();
                        await sb.from('relief_requests').insert({
                          applicant_name: orgName,
                          applicant_phone: phone,
                          city_district: address.substring(0, 50),
                          aid_type: `Saplings Request: ${saplingType} (${count} Pcs)`,
                          amount_needed: 0,
                          details: `Plantation location: ${address}. Requester agreed to water & protect for 2 years.`,
                          user_id: userData?.user?.id || null,
                          status: 'Pending'
                        });
                      } catch (err) {
                        console.error("Error saving sapling request:", err);
                      }
                    }

                    alert(currentLanguage === 'en' ? 'Sapling request submitted! Our Green Bharat chapter coordinator will dispatch the saplings within 5 business days.' : 'पौधों का अनुरोध जमा किया गया! 5 दिनों के भीतर पौधे भेजे जाएंगे।'); 
                    setShowSaplingModal(false); 
                  }} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Requester / Organization Name *</label>
                        <input type="text" name="orgName" required placeholder="e.g. Al-Falah Housing Society" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-green-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                        <input type="tel" name="phone" required placeholder="+91 98XXX XXXXX" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-green-600 outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Sapling Type Preferred *</label>
                        <select name="saplingType" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-green-600 outline-none">
                          <option>Shade Trees (Neem, Peepal, Banyan)</option>
                          <option>Fruit Trees (Mango, Guava, Jamun)</option>
                          <option>Ornamental & flowering shrubs</option>
                          <option>Mixed Assortment (10+ Varieties)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Number of Saplings *</label>
                        <input type="number" name="count" required defaultValue={25} min={5} max={500} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-green-600 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Plantation Location / Address *</label>
                      <input type="text" name="address" required placeholder="Full street address, district, and pin code" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-green-600 outline-none" />
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-600 bg-green-50 p-3 rounded-xl border border-green-200">
                      <input type="checkbox" required id="pledgeCare" className="rounded text-green-600" />
                      <label htmlFor="pledgeCare">We pledge to provide regular water, protection, and maintenance for at least 2 years.</label>
                    </div>
                    <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
                      <button 
                        type="button" 
                        onClick={() => setShowSaplingModal(false)}
                        className="px-5 py-2.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg cursor-pointer"
                      >
                        Request Saplings Now
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* MODE H: DISASTER RELIEF & HUMANITARIAN AID */}
        {portalMode === 'disaster' && (
          <motion.div 
            key="disaster"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-orange-900 via-amber-900 to-orange-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-orange-200 border border-white/20">
                  <AlertTriangle className="h-3.5 w-3.5 text-orange-400" />
                  <span>{currentLanguage === 'en' ? 'Rapid Disaster Response & Humanitarian Relief Force' : 'त्वरित आपदा प्रतिक्रिया एवं मानवीय राहत दल'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? 'When Calamity Strikes, We Respond in Hours. 28+ Relief Missions.' : 'आपदा की घड़ी में घंटों के भीतर सहायता। 28+ सफल राहत अभियान।'}
                </h2>
                <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'Organized flood relief ration packaging, winter blanket distribution, fire emergency rehabilitation, and temporary shelter camps.' 
                    : 'बाढ़ राहत राशन पैकेजिंग, शीतकालीन कंबल वितरण, अग्नि दुर्घटना सहायता और अस्थायी आश्रय शिविर।'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button 
                  onClick={() => alert(currentLanguage === 'en' ? 'Disaster Relief SOS activated! Alerting district emergency teams.' : 'आपदा राहत SOS सक्रिय! जिला टीमों को सूचित किया जा रहा है।')}
                  className="w-full sm:w-auto bg-[#F4C430] text-[#0B132B] hover:bg-amber-400 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl transition cursor-pointer"
                >
                  <span>{currentLanguage === 'en' ? 'REPORT EMERGENCY CALAMITY' : 'आपातकालीन आपदा की सूचना दें'}</span>
                </button>
                <button 
                  onClick={() => setShowReliefFundModal(true)}
                  className="w-full sm:w-auto bg-white text-orange-950 hover:bg-orange-50 font-extrabold px-5 py-3 rounded-xl text-sm shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer border border-white"
                >
                  <ActivityIcon className="h-4 w-4 text-orange-600" />
                  <span>{currentLanguage === 'en' ? 'Chief Relief Fund' : 'आपदा राहत कोष'}</span>
                </button>
                <button 
                  onClick={() => handleDownloadReport('Disaster Relief Operations Audit PDF')}
                  className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3 rounded-xl text-sm border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Relief Audit Report' : 'राहत ऑडिट रिपोर्ट'}</span>
                </button>
              </div>
            </div>

            {/* Active Relief Operations & Material Distribution */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                <ActivityIcon className="h-5 w-5 text-orange-600 animate-pulse" />
                <span>{currentLanguage === 'en' ? 'Active Relief Distribution Camps & Material Status' : 'सक्रिय राहत वितरण शिविर एवं सामग्री स्थिति'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Monsoon Flood Relief Ration Distribution', place: 'Morena & Chambal Belt, MP', packages: '1,500 Ration Packets Distributed', team: '24 Volunteers Deployed', status: 'Ongoing Distribution', urgent: true },
                  { title: 'Winter Blanket & Warm Clothing Drive', place: 'Jaipur & Sikar Slum Areas', packages: '2,200 Blankets Distributed', team: '18 Volunteers Deployed', status: 'Target Achieved', urgent: false },
                  { title: 'Slum Fire Accident Rehabilitation Support', place: 'Old Delhi NCR Chapter', packages: '35 Families Rehabilitated', team: '12 Volunteers Deployed', status: 'Relief Complete', urgent: false },
                ].map((op, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-500 transition flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2.5 py-1 rounded-md">
                          📦 {op.packages}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${op.urgent ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse' : 'bg-emerald-50 text-emerald-600'}`}>
                          ● {op.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-slate-900">{op.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">📍 {op.place}</p>
                      <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700">
                        <strong>Deployment:</strong> {op.team}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400">Verified by Secretariat</span>
                      <button 
                        onClick={() => alert(`Enrolling as relief volunteer for: ${op.title}`)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl transition shadow cursor-pointer"
                      >
                        Join Team &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disaster Training Certification & Control Room Network */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4 lg:col-span-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4C430] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                    {currentLanguage === 'en' ? 'NDRF & First Aid Training' : 'NDRF एवं प्राथमिक चिकित्सा प्रशिक्षण'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3">
                    {currentLanguage === 'en' ? 'Disaster Response & Safety Certification' : 'आपदा प्रबंधन एवं सुरक्षा प्रमाणन'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {currentLanguage === 'en' ? 'Enroll in our certified 3-day basic life support, flood rescue, and fire safety workshop conducted by former civil defense experts.' : 'नागरिक सुरक्षा विशेषज्ञों द्वारा आयोजित 3-दिवसीय जीवन रक्षा, बाढ़ बचाव और अग्नि सुरक्षा कार्यशाला में भाग लें।'}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-bold">✓ Next Batch: 25 July</span>
                  <button 
                    onClick={() => alert(currentLanguage === 'en' ? 'Registration for Disaster Training Workshop initiated!' : 'आपदा प्रशिक्षण कार्यशाला के लिए पंजीकरण शुरू!')}
                    className="bg-[#F4C430] text-slate-950 font-bold px-4 py-2 rounded-xl text-xs hover:bg-amber-400 transition cursor-pointer"
                  >
                    Enroll Now &rarr;
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 lg:col-span-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {currentLanguage === 'en' ? '24x7 District Rapid Response Task Force & Helpline' : '24x7 जिला त्वरित राहत कार्यबल एवं हेल्पलाइन'}
                  </h3>
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">SOS: 1070 / 1078</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { zone: 'North Zone (Delhi NCR, UP West)', lead: 'Commander Tariq Ahmed', team: '45 Trained Rescuers', phone: '+91 98110-XXXXX' },
                    { zone: 'Central Zone (MP, Indore, Bhopal)', lead: 'Commander Saima Rangrez', team: '60 Trained Rescuers', phone: '+91 94250-XXXXX' },
                    { zone: 'West Zone (Rajasthan, Jaipur, Jodhpur)', lead: 'Commander Imran Rangrez', team: '55 Trained Rescuers', phone: '+91 98290-XXXXX' },
                    { zone: 'South & East Zone (Hyderabad, Kolkata)', lead: 'Commander Rehan Khan', team: '30 Trained Rescuers', phone: '+91 98300-XXXXX' },
                  ].map((force, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{force.zone}</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">● Active</span>
                      </div>
                      <p className="text-xs text-slate-600">👨‍✈️ <strong>Lead:</strong> {force.lead}</p>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 mt-2">
                        <span className="text-slate-500 text-[11px]">{force.team}</span>
                        <span className="font-mono font-bold text-orange-600">{force.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chief Relief Fund Contribution Modal */}
            {showReliefFundModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
                >
                  <button 
                    onClick={() => setShowReliefFundModal(false)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xl">
                      🛡️
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {currentLanguage === 'en' ? 'Contribute to Chief Calamity Relief Fund' : 'मुख्य आपदा राहत कोष में योगदान करें'}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {currentLanguage === 'en' ? '100% of donations are utilized directly for emergency food packets, shelter tents, and medical aid.' : '100% दान राशि सीधे आपातकालीन भोजन, शिविर और चिकित्सा सहायता के लिए उपयोग की जाती है।'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={async (e) => { 
                    e.preventDefault(); 
                    const fd = new FormData(e.currentTarget);
                    const amountStr = fd.get('amount') as string;
                    const amount = parseFloat(amountStr) || 1000;
                    const donorName = fd.get('donorName') as string;
                    const pan = fd.get('pan') as string;
                    const phone = fd.get('phone') as string;
                    const paymentMethod = fd.get('paymentMethod') as string;

                    const sb = getSupabase();
                    if (sb) {
                      try {
                        const { data: userData } = await sb.auth.getUser();
                        await sb.from('donations').insert({
                          donor_name: donorName,
                          donor_phone: phone,
                          donor_pan: pan,
                          amount: amount,
                          fund_type: `Chief Calamity Relief Fund (${paymentMethod})`,
                          user_id: userData?.user?.id || null
                        });
                      } catch (err) {
                        console.error("Error saving donation pledge:", err);
                      }
                    }

                    alert(currentLanguage === 'en' ? 'Thank you for your generous pledge! Official 80G tax exemption receipt will be generated automatically upon bank clearance.' : 'आपके उदार योगदान के लिए धन्यवाद! 80G रसीद स्वतः जारी होगी।'); 
                    setShowReliefFundModal(false); 
                  }} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Select Contribution Amount *</label>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {['₹ 1,000', '₹ 2,500', '₹ 5,000', '₹ 10,000', '₹ 25,000', 'Custom'].map((amt, idx) => (
                          <button 
                            type="button" 
                            key={idx}
                            onClick={() => {
                              const input = document.getElementById('reliefAmountInput') as HTMLInputElement;
                              if (input && amt !== 'Custom') {
                                input.value = amt.replace(/[^\d]/g, '');
                              }
                            }}
                            className="py-2 rounded-xl border border-slate-300 text-xs font-bold hover:border-orange-600 hover:bg-orange-50 text-slate-700 transition cursor-pointer"
                          >
                            {amt}
                          </button>
                        ))}
                      </div>
                      <input id="reliefAmountInput" type="number" name="amount" required defaultValue={5000} min={10} placeholder="Enter custom amount in INR" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-600 outline-none" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Donor Name *</label>
                        <input type="text" name="donorName" required placeholder="Full name for tax receipt" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">PAN Number (For 80G) *</label>
                        <input type="text" name="pan" required placeholder="ABCDE1234F" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-600 outline-none uppercase" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                        <input type="tel" name="phone" required placeholder="+91 98XXX XXXXX" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Payment Method *</label>
                        <select name="paymentMethod" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-600 outline-none">
                          <option>UPI / Google Pay / PhonePe</option>
                          <option>Direct Bank NEFT / RTGS</option>
                          <option>Net Banking / Debit Card</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
                      <button 
                        type="button" 
                        onClick={() => setShowReliefFundModal(false)}
                        className="px-5 py-2.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg cursor-pointer"
                      >
                        Proceed to Payment &rarr;
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* MODE I: SOCIAL PROJECTS MANAGEMENT SYSTEM */}
        {portalMode === 'projects' && (
          <motion.div 
            key="projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Ongoing Social Development Projects' : 'निरंतर चल रही सामाजिक विकास परियोजनाएं'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {currentLanguage === 'en' ? 'Transparent tracking of 9 core project categories including clean drinking water counters, orphan support, women empowerment, and youth skill centers.' : 'पेयजल व्यवस्था, अनाथ सहायता, महिला सशक्तिकरण और कौशल केंद्रों सहित 9 प्रमुख सामाजिक परियोजनाओं की निगरानी।'}
                </p>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => setShowProposalModal(true)}
                  className="bg-[#0B132B] text-white font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-slate-800 transition flex items-center space-x-1.5 cursor-pointer border border-slate-700"
                >
                  <PlusCircle className="h-3.5 w-3.5 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Submit New Proposal' : 'नया प्रस्ताव भेजें'}</span>
                </button>
                <button
                  onClick={() => handleDownloadReport('Social Projects Master Progress Report')}
                  className="bg-[#004B23] text-white font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-emerald-800 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Export Project Audit (PDF)' : 'प्रोजेक्ट रिपोर्ट डाउनलोड'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Public Clean Drinking Water Counters (Sabeel)', cat: 'Public Welfare', progress: 85, budget: '₹4.5 Lakhs', leader: 'Jaipur District Committee', desc: 'Setting up 15 chilled water dispensers across busy market centers and bus stands.' },
                { title: 'Widow & Orphan Monthly Pension Grant', cat: 'Social Security', progress: 95, budget: '₹12.0 Lakhs / Yr', leader: 'All-India Welfare Trust', desc: 'Direct monthly financial assistance to 120 verified community widows and orphans.' },
                { title: 'Women Tailoring & Skill Empowerment Center', cat: 'Women Empowerment', progress: 70, budget: '₹6.0 Lakhs', leader: 'Indore Women Wing', desc: 'Free 6-month sewing machine training and entrepreneurship setup for 60 women.' },
                { title: 'Free Legal Aid & Document Verification Clinic', cat: 'Legal Aid', progress: 90, budget: '₹2.0 Lakhs', leader: 'Adv. Shakir Khan & Team', desc: 'Every Saturday free legal guidance for land disputes, inheritance, and identity documents.' },
                { title: 'Youth Digital Literacy & Coding Bootcamp', cat: 'Youth Development', progress: 60, budget: '₹5.0 Lakhs', leader: 'Delhi Tech Mentors', desc: 'Weekend computer coding and AI literacy classes for 150 community students.' },
                { title: 'Senior Citizen Health & Wellness Club', cat: 'Elderly Care', progress: 80, budget: '₹3.0 Lakhs', leader: 'Bhopal Khidmat Committee', desc: 'Regular physiotherapy, health monitoring, and social gatherings for senior members.' },
              ].map((proj, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#004B23] transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                        {proj.cat}
                      </span>
                      <span className="text-xs font-bold text-emerald-600">{proj.progress}% Completed</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900">{proj.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{proj.desc}</p>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-2">
                      <div className="bg-[#004B23] h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700 pt-2">
                      <div className="flex justify-between">
                        <span><strong>Budget:</strong></span>
                        <span className="font-bold text-emerald-700">{proj.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Executed by:</strong></span>
                        <span>{proj.leader}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button 
                      onClick={() => handleDownloadReport(`${proj.title} Financial Audit`)}
                      className="text-xs text-[#004B23] font-bold hover:underline flex items-center gap-1"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Audit PDF</span>
                    </button>
                    <button 
                      onClick={() => alert(`Opening project volunteer enrollment for: ${proj.title}`)}
                      className="bg-[#0B132B] hover:bg-[#004B23] text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition shadow cursor-pointer"
                    >
                      Support Project &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Project Updates & Milestone Feed */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
                    {currentLanguage === 'en' ? 'Live Progress Feed & Updates' : 'लाइव प्रगति अपडेट एवं सूचनाएं'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? 'Recent Milestones & Volunteer Enrollments' : 'हाल की उपलब्धियां एवं स्वयंसेवक जुड़ाव'}
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#F4C430] bg-amber-950 px-3 py-1.5 rounded-xl border border-amber-800">
                  ⚡ 14 Updates This Month
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { project: 'Public Clean Drinking Water Counters', update: '12th Chilled Water Dispenser operationalized at Jaipur Central Bus Stand.', time: '2 hours ago', by: 'Jaipur District Committee', tag: 'Milestone' },
                  { project: 'Widow & Orphan Monthly Pension Grant', update: 'July 2026 pension fund of ₹1,00,000 disbursed via Direct Benefit Transfer.', time: 'Yesterday', by: 'All-India Welfare Trust', tag: 'Disbursement' },
                  { project: 'Women Tailoring & Skill Center', update: '18 new sewing machines delivered. Next batch enrollment starting Monday.', time: '3 days ago', by: 'Indore Women Wing', tag: 'Equipment' },
                ].map((feed, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
                          📌 {feed.tag}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">{feed.time}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm">{feed.project}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{feed.update}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400 font-medium">
                      Reporting Chapter: <strong className="text-slate-200">{feed.by}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Proposal Submission Modal */}
            {showProposalModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
                >
                  <button 
                    onClick={() => setShowProposalModal(false)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
                      📑
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {currentLanguage === 'en' ? 'Submit New Social Project Proposal' : 'नया सामाजिक प्रोजेक्ट प्रस्ताव भेजें'}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {currentLanguage === 'en' ? 'Propose a welfare initiative for your district or neighborhood. Reviewed by Central Secretariat.' : 'अपने जिले या क्षेत्र के लिए कल्याणकारी पहल का प्रस्ताव दें।'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={async (e) => { 
                    e.preventDefault(); 
                    const fd = new FormData(e.currentTarget);
                    const title = fd.get('title') as string;
                    const category = fd.get('category') as string;
                    const budget = fd.get('budget') as string;
                    const location = fd.get('location') as string;
                    const summary = fd.get('summary') as string;
                    const proposer = fd.get('proposer') as string;
                    const phone = fd.get('phone') as string;

                    const sb = getSupabase();
                    if (sb) {
                      try {
                        const { data: userData } = await sb.auth.getUser();
                        await sb.from('relief_requests').insert({
                          applicant_name: proposer,
                          applicant_phone: phone,
                          city_district: location,
                          aid_type: `Project Proposal: ${category}`,
                          amount_needed: parseFloat(budget.replace(/[^\d.]/g, '')) || 0,
                          details: `Title: ${title}. Budget: ${budget}. Summary: ${summary}`,
                          user_id: userData?.user?.id || null,
                          status: 'Pending'
                        });
                      } catch (err) {
                        console.error("Error saving project proposal:", err);
                      }
                    }

                    alert(currentLanguage === 'en' ? 'Project proposal submitted successfully! Our audit and evaluation committee will review it within 7 working days.' : 'प्रोजेक्ट प्रस्ताव जमा किया गया! 7 कार्य दिवसों के भीतर समीक्षा की जाएगी।'); 
                    setShowProposalModal(false); 
                  }} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Project Title *</label>
                        <input type="text" name="title" required placeholder="e.g. Free Computer Center Jaipur" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                        <select name="category" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none">
                          <option>Public Welfare & Water</option>
                          <option>Healthcare & Medical Aid</option>
                          <option>Education & Scholarships</option>
                          <option>Women Skill Empowerment</option>
                          <option>Legal Aid & Human Rights</option>
                          <option>Environmental Conservation</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Proposed Budget / Cost *</label>
                        <input type="text" name="budget" required placeholder="e.g. ₹ 3.5 Lakhs / Year" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target District / City *</label>
                        <input type="text" name="location" required placeholder="e.g. Jaipur, Rajasthan" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Project Summary & Impact *</label>
                      <textarea name="summary" required rows={3} placeholder="Explain the objectives, expected beneficiaries, and execution plan..." className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Proposer Name *</label>
                        <input type="text" name="proposer" required placeholder="Your full name or Committee" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                        <input type="tel" name="phone" required placeholder="+91 98XXX XXXXX" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 outline-none" />
                      </div>
                    </div>
                    <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
                      <button 
                        type="button" 
                        onClick={() => setShowProposalModal(false)}
                        className="px-5 py-2.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg cursor-pointer"
                      >
                        Submit Proposal for Review
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* MODE J: ADMIN CONSOLE & VERIFICATION SECRETARIAT */}
        {portalMode === 'admin' && (
          <motion.div 
            key="admin"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold mb-2 border border-indigo-500/30">
                  <ShieldCheck className="h-4 w-4 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Central Khidmat Secretariat & Governance Console' : 'केन्द्रीय खिदमत सचिवालय एवं एडमिन कंसोल'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {currentLanguage === 'en' ? 'Community Service Administration & Audit Desk' : 'सामुदायिक सेवा प्रशासन एवं ऑडिट डेस्क'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {currentLanguage === 'en' 
                    ? 'Verify new volunteer registrations, dispatch SOS alerts, generate state-wise service certificates, and download database backup logs.' 
                    : 'नए स्वयंसेवकों का सत्यापन, SOS अलर्ट जारी करना, राज्यवार सेवा प्रमाणपत्र बनाना और बैकअप डाउनलोड करना।'}
                </p>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/15">
                <span className="text-xs font-bold text-slate-300">Active Role:</span>
                <select 
                  value={adminRole}
                  onChange={(e) => setAdminRole(e.target.value as any)}
                  className="bg-indigo-900 text-[#F4C430] font-black text-xs px-3 py-1.5 rounded-xl border border-indigo-400 outline-none"
                >
                  <option value="President">National President</option>
                  <option value="Secretary">General Secretary</option>
                  <option value="Coordinator">District Coordinator</option>
                </select>
              </div>
            </div>

            {/* Admin Sub-Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
              {[
                { id: 'volunteers', label: 'Volunteer Queue (14 Pending)', icon: UserCheck },
                { id: 'events', label: 'Event Shift Roster', icon: Calendar },
                { id: 'blood', label: 'Blood Bank SOS Dispatcher', icon: Droplet },
                { id: 'reports', label: 'National Audit Reports', icon: FileText },
                { id: 'backup', label: 'Database Backup & Logs', icon: Database },
              ].map(t => {
                const Icon = t.icon;
                const isSel = adminTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setAdminTab(t.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer border ${
                      isSel ? 'bg-[#004B23] text-white border-[#004B23] shadow' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Admin Tab 1: Volunteer Queue */}
            {adminTab === 'volunteers' && (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-700">Pending Volunteer Registrations (Awaiting Verification)</span>
                  <button 
                    onClick={() => alert('All 14 pending registrations batch-approved by Secretariat!')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition"
                  >
                    Batch Approve All ✓
                  </button>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  {[
                    { name: 'Mohd. Zaid Rangrez', city: 'Jaipur', skill: 'Healthcare & First Aid', blood: 'O+', date: 'Today, 10:45 AM' },
                    { name: 'Janab Rehan Ahmed', city: 'Indore', skill: 'Disaster Rescue', blood: 'B+', date: 'Today, 09:15 AM' },
                    { name: 'Smt. Shazia Bano', city: 'Bhopal', skill: 'Teaching Mentorship', blood: 'A+', date: 'Yesterday' },
                    { name: 'Mohd. Tariq Khan', city: 'Lucknow', skill: 'Blood Camp Coordination', blood: 'O-', date: '2 days ago' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                      <div className="space-y-1">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span>{item.name}</span>
                          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-black">{item.blood}</span>
                        </div>
                        <p className="text-slate-500">📍 {item.city} District | Skill: <strong>{item.skill}</strong> | Applied: {item.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => alert(`Volunteer ${item.name} verified and digital ID badge generated!`)}
                          className="bg-[#004B23] hover:bg-emerald-800 text-white font-bold px-3 py-1.5 rounded-lg transition"
                        >
                          Approve ID ✓
                        </button>
                        <button 
                          onClick={() => alert(`Application for ${item.name} put on hold for background check.`)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition"
                        >
                          Hold
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admin Tab 2: Blood SOS Dispatcher */}
            {adminTab === 'blood' && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>National Blood Bank Emergency SOS Dispatcher</span>
                </h3>
                <p className="text-xs text-slate-600">Dispatch instant SMS and WhatsApp broadcast to verified donors in any district within seconds.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Blood Group</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-red-600">
                      <option>O- (Rare Universal)</option>
                      <option>AB- (Rare)</option>
                      <option>O+ (Universal)</option>
                      <option>A+</option>
                      <option>B+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">District / Chapter</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-700">
                      <option>Jaipur District (840 Donors)</option>
                      <option>Indore District (620 Donors)</option>
                      <option>Bhopal District (510 Donors)</option>
                      <option>Lucknow District (480 Donors)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button 
                      onClick={() => alert('EMERGENCY SOS BROADCAST DISPATCHED TO 140 VERIFIED DONORS!')}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-2 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <Bell className="h-4 w-4 animate-bounce" />
                      <span>DISPATCH SOS NOW</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Tab 3: Reports & Backup */}
            {(adminTab === 'reports' || adminTab === 'backup' || adminTab === 'events') && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                  <FileText className="h-8 w-8 text-emerald-600" />
                  <h4 className="font-bold text-slate-900 text-base">Annual Service Audit Report</h4>
                  <p className="text-xs text-slate-600">Comprehensive PDF book of all 42 social projects, 118 medical camps, and financial grants.</p>
                  <button 
                    onClick={() => handleDownloadReport('Annual Service Audit Book')}
                    className="w-full bg-[#004B23] text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Audit Book PDF</span>
                  </button>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                  <Database className="h-8 w-8 text-blue-600" />
                  <h4 className="font-bold text-slate-900 text-base">Database JSON Backup Dump</h4>
                  <p className="text-xs text-slate-600">Export complete cryptographic records of 4,850+ volunteers and 3,210+ blood donors.</p>
                  <button 
                    onClick={() => {
                      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(COMMUNITY_MODULES, null, 2));
                      const downloadAnchor = document.createElement('a');
                      downloadAnchor.setAttribute("href", dataStr);
                      downloadAnchor.setAttribute("download", `rangrez_community_service_backup_${new Date().toISOString().slice(0,10)}.json`);
                      document.body.appendChild(downloadAnchor);
                      downloadAnchor.click();
                      downloadAnchor.remove();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Generate JSON Backup Dump</span>
                  </button>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                  <QrCode className="h-8 w-8 text-purple-600" />
                  <h4 className="font-bold text-slate-900 text-base">Batch Print ID Cards</h4>
                  <p className="text-xs text-slate-600">Generate printable PDF sheets of QR-enabled ID badges for newly verified district teams.</p>
                  <button 
                    onClick={() => handleDownloadReport('Batch Volunteer ID Cards Sheet')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span>Print Batch ID Cards</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

