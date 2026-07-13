import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import { EnterpriseArchitectureHub } from './components/architecture';
import { SearchEngine, NotificationService, AnalyticsService, DBService, MediaService } from './services';
import HomeView from './components/HomeView';
import AreasModule from './components/AreasModule';
import MembershipSystem from './components/MembershipSystem';
import FamilyRegistration from './components/FamilyRegistration';
import MatrimonialPlatform from './components/MatrimonialPlatform';
import EducationHub from './components/EducationHub';
import CareerOpportunities from './components/CareerOpportunities';
import InternationalCareers from './components/InternationalCareers';
import GovernmentSchemes from './components/GovernmentSchemes';
import HelpSupport from './components/HelpSupport';
import SocialImpact from './components/SocialImpact';
import MediaCenter from './components/MediaCenter';
import ResourcesCenter from './components/ResourcesCenter';
import MediaResourcesHub from './components/MediaResourcesHub';
import HistoryDetails from './components/HistoryDetails';
import TrustConstitution from './components/TrustConstitution';
import DonationSystem from './components/DonationSystem';
import SocietyRegistration from './components/SocietyRegistration';
import Footer from './components/Footer';
import NationalLeadership from './components/NationalLeadership';
import IslamicCalendar from './components/IslamicCalendar';
import EmergencyHelplines from './components/EmergencyHelplines';
import LegalAwareness from './components/LegalAwareness';
import BetaNotice from './components/BetaNotice';
import CareerPortal from './components/CareerPortal';
import MedicalCollegesDirectory from './components/MedicalCollegesDirectory';
import ProfessionalCollegesDirectory from './components/ProfessionalCollegesDirectory';
import EducationOverview from './components/EducationOverview';
import JobsCareersMaster from './components/JobsCareersMaster';
import CollegesMasterDirectory from './components/CollegesMasterDirectory';
import ScholarshipsMasterPortal from './components/ScholarshipsMasterPortal';
import IqraAIAssistant from './components/IqraAIAssistant';
import CareerCounsellingPortal from './components/CareerCounsellingPortal';
import CommunityPortal from './components/CommunityPortal';
import HallOfService from './components/HallOfService';
import MahapanchayatSystem from './components/MahapanchayatSystem';
import MahapanchayatHub from './components/MahapanchayatHub';
import AboutUsHub from './components/AboutUsHub';
import SocietyReformMission from './components/SocietyReformMission';
import CommunitySocialReformSection from './components/CommunitySocialReformSection';
import VolunteerServiceHub from './components/VolunteerServiceHub';
import WelfareSupportOverview from './components/WelfareSupportOverview';
import HospitalNetworkPortal from './components/HospitalNetworkPortal';
import BloodBankAndDonorsPortal from './components/BloodBankAndDonorsPortal';
import AuthCallback from './components/AuthCallback';
import { MapPin, Search, ExternalLink, Calendar, FileText, Info, HelpCircle } from 'lucide-react';
import { jobListings, governmentSchemes, communityEvents } from './data';
import { EXAMS } from './data/careerData';
import { initialDistricts } from './data/nationalDirectory';

export default function App() {
  // Initialize with browser auto-detection, local storage preference or route checks
  const [currentLanguage, setLanguageState] = useState<Language>(() => {
    // 1. Check URL path
    const path = window.location.pathname;
    if (path.includes('/en/') || path.endsWith('/en')) return 'en';
    if (path.includes('/ur/') || path.endsWith('/ur')) return 'ur';
    if (path.includes('/hi/') || path.endsWith('/hi')) return 'hi';

    // 2. Check localStorage
    const saved = localStorage.getItem('rcb_lang_pref') as Language | null;
    if (saved === 'en' || saved === 'hi' || saved === 'ur') return saved;

    // 3. Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ur')) return 'ur';
    if (browserLang.startsWith('hi')) return 'hi';
    if (browserLang.startsWith('en')) return 'en';

    return 'hi'; // Default Hindi
  });

  const [activeTab, setActiveTabState] = useState<string>('home');
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');

  // Enhanced navigation setter that ensures smooth scrolling to top for consistent UX
  const setActiveTab = (tabId: string) => {
    if (activeTab === tabId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTabState(tabId);
    }
  };

  // Ensure smooth scroll to top whenever the active tab state changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeTab]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rcb_lang_pref', lang);
    
    // Update URL path without page refresh
    const newPath = lang === 'hi' ? '/' : `/${lang}/`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  React.useEffect(() => {
    // Append dir="rtl" to <html> dynamically
    const htmlElement = document.documentElement;
    if (currentLanguage === 'ur') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ur');
      htmlElement.classList.add('rtl-active');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', currentLanguage);
      htmlElement.classList.remove('rtl-active');
    }

    // Dynamic SEO Alternate tags in head
    const languages: Language[] = ['hi', 'en', 'ur'];
    const baseUrl = 'https://rangrezcommunity.org';

    // Remove existing alternate links
    const existing = document.querySelectorAll('link[rel="alternate"]');
    existing.forEach(el => el.remove());

    // Generate alternates
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}${lang === 'hi' ? '/' : `/${lang}/`}`;
      document.head.appendChild(link);
    });

    // Generate canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${currentLanguage === 'hi' ? '/' : `/${currentLanguage}/`}`);
  }, [currentLanguage]);

  // Handle popstate for back/forward browser navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      let lang: Language = 'hi';
      if (path.includes('/en/') || path.endsWith('/en')) lang = 'en';
      else if (path.includes('/ur/') || path.endsWith('/ur')) lang = 'ur';
      else if (path.includes('/hi/') || path.endsWith('/hi')) lang = 'hi';
      setLanguageState(lang);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Enterprise Architecture Hub & Services State
  const [architectureHubOpen, setArchitectureHubOpen] = useState(false);
  const [announcementBar, setAnnouncementBar] = useState(() => NotificationService.getAnnouncementBar());

  useEffect(() => {
    DBService.init();
    MediaService.init();
    NotificationService.init();
    AnalyticsService.init();

    const handleAnnounce = (e: any) => setAnnouncementBar(e.detail);
    window.addEventListener('rcb_announcement_changed', handleAnnounce);
    return () => window.removeEventListener('rcb_announcement_changed', handleAnnounce);
  }, []);

  // Check for auth callback parameters
  useEffect(() => {
    const search = window.location.search;
    const hash = window.location.hash;
    if (search.includes('code=') || search.includes('error=') || hash.includes('access_token=') || hash.includes('error=')) {
      setActiveTabState('auth-callback');
    }
  }, []);

  // Global Enterprise Search Engine across 11 modules
  const searchResults = globalSearchQuery.trim()
    ? SearchEngine.search(globalSearchQuery, currentLanguage)
    : [];

  const handleSearchResultClick = (targetTab: string) => {
    setActiveTab(targetTab);
    setGlobalSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800" id="app_root">
      
      {/* 0. ENTERPRISE LIVE ANNOUNCEMENT BAR */}
      {announcementBar.active && (
        <div className="bg-gradient-to-r from-[#004B23] via-[#056633] to-[#004B23] text-white px-3 py-1 text-xs font-semibold flex items-center justify-between border-b border-[#FFD54A]/30 shadow-sm hover:shadow-[0_0_15px_rgba(255,213,74,0.25)] transition-all duration-300 animate-fadeIn z-50 select-none" id="live_notice_bar">
          <div className="flex items-center space-x-2.5 overflow-hidden flex-grow">
            <span className="bg-[#FFD54A] text-[#004B23] font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded shrink-0 uppercase tracking-wider shadow-xs flex items-center gap-1 border border-[#D4AF37]">
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 -ml-3"></span>
              <span>{currentLanguage === 'en' ? 'LIVE NOTICE' : currentLanguage === 'ur' ? 'لائیو نوٹس' : 'लाइव सूचना'}</span>
            </span>
            <div className="flex-grow overflow-hidden">
              <div 
                className="text-gray-100 tracking-wide font-medium cursor-pointer whitespace-nowrap animate-marquee-slow"
              >
                <div className="inline-flex items-center space-x-6 text-[11px] sm:text-xs py-0.5">
                  <button onClick={() => setActiveTab('membership-matrimonial')} className="hover:text-[#FFD54A] hover:underline cursor-pointer font-bold inline-flex items-center gap-1 transition-colors">
                    <span className="text-[#FFD54A]">★</span> {currentLanguage === 'en' ? 'SOCIETY REGISTRATION NO: 02/42/01/28332/26 (Click to View Certificate & Membership)' : 'सोसाइटी पंजीकरण संख्या: 02/42/01/28332/26 (प्रमाणपत्र और सदस्यता देखें)'}
                  </button>
                  <span className="text-gray-300/50 font-light">|</span>
                  <button onClick={() => setActiveTab('mahapanchayat')} className="hover:text-[#FFD54A] hover:underline cursor-pointer inline-flex items-center gap-1 transition-colors">
                    <span className="text-[#FFD54A]">⚡</span> {currentLanguage === 'en' ? announcementBar.textEn : announcementBar.textHi}
                  </button>
                  <span className="text-gray-300/50 font-light">|</span>
                  <button onClick={() => setActiveTab('competitive-exams')} className="hover:text-[#FFD54A] hover:underline cursor-pointer inline-flex items-center gap-1 transition-colors">
                    <span className="text-[#FFD54A]">★</span> {currentLanguage === 'en' ? 'COMPETITIVE EXAMS / MENTORSHIP: National IAS/IPS Guidance Coaching has started online (Apply Now)' : 'प्रतियोगी परीक्षाएं: आईएएस/आईपीएस मार्गदर्शन कोचिंग ऑनलाइन शुरू हो चुकी है (आवेदन करें)'}
                  </button>
                  <span className="text-gray-300/50 font-light">|</span>
                  <button onClick={() => setActiveTab('welfare-hospital')} className="hover:text-[#FFD54A] hover:underline cursor-pointer inline-flex items-center gap-1 transition-colors">
                    <span className="text-[#FFD54A]">🏥</span> {currentLanguage === 'en' ? 'HEALTH WELFARE: Hospital Network and Directory fully integrated (Find Support)' : 'स्वास्थ्य कल्याण: अस्पताल नेटवर्क और निर्देशिका पूर्ण रूप से एकीकृत (सहायता प्राप्त करें)'}
                  </button>
                  <span className="text-gray-300/50 font-light">|</span>
                  <button onClick={() => setActiveTab('scholarships')} className="hover:text-[#FFD54A] hover:underline cursor-pointer inline-flex items-center gap-1 transition-colors">
                    <span className="text-[#FFD54A]">🎓</span> {currentLanguage === 'en' ? 'SCHOLARSHIPS 2026: Merit-based educational scholarships open for registration' : 'छात्रवृत्ति 2026: योग्यता आधारित शैक्षिक छात्रवृत्ति पंजीकरण के लिए खुली है'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2.5 shrink-0 ml-3 pl-2 sm:pl-3 border-l border-white/20 text-[11px]">
            <button
              onClick={() => setActiveTab('media-news')}
              className="group relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#004B23] hover:bg-[#056633] border border-[#D4AF37] text-[#FFD54A] hover:text-white shadow-[0_0_10px_rgba(212,175,55,0.25)] hover:shadow-[0_0_15px_rgba(255,213,74,0.5)] transition-all duration-300 cursor-pointer select-none shrink-0"
              title={currentLanguage === 'en' ? 'Click to view latest community announcements & live updates' : 'नवीनतम समाचार और लाइव अपडेट देखने के लिए क्लिक करें'}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD54A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD54A]"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wide whitespace-nowrap">
                🌐 {currentLanguage === 'en' ? 'Live Community Updates' : currentLanguage === 'ur' ? 'لائیو کمیونٹی اپڈیٹس' : 'लाइव सामुदायिक अपडेट'}
              </span>
            </button>
            <button
              onClick={() => setArchitectureHubOpen(true)}
              className="text-[#FFD54A] hover:underline font-bold cursor-pointer flex items-center gap-1 transition-all shrink-0"
            >
              <span>{currentLanguage === 'en' ? 'Portal' : 'पोर्टल'}</span>
              <span>→</span>
            </button>
            <button
              onClick={() => {
                const next = { ...announcementBar, active: false };
                setAnnouncementBar(next);
                NotificationService.updateAnnouncementBar(next);
              }}
              className="text-gray-300 hover:text-white font-extrabold px-1.5 transition-colors cursor-pointer shrink-0"
              title="Close notice line"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 1. GLOBAL BILINGUAL HEADER */}
      <Header
        currentLanguage={currentLanguage}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        globalSearchQuery={globalSearchQuery}
        setGlobalSearchQuery={setGlobalSearchQuery}
        onOpenArchitectureHub={() => setArchitectureHubOpen(true)}
        onOpenAI={() => window.dispatchEvent(new CustomEvent('open-iqra-ai'))}
      />
      <BetaNotice currentLanguage={currentLanguage} />

      {/* 2. DYNAMIC CONTENT ROUTER */}
      <main className="flex-grow">
        
        {globalSearchQuery.trim() ? (
          /* Global Search Output Visualizer Panel */
          <div className="py-12 bg-gray-50/50 min-h-[60vh]" id="global_search_results_view">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-serif font-extrabold text-[#0B132B] flex items-center space-x-2">
                  <Search className="h-5 w-5 text-[#F4C430]" />
                  <span>
                    {currentLanguage === 'en'
                      ? `Global Search Results for: "${globalSearchQuery}"`
                      : `वैश्विक खोज परिणाम: "${globalSearchQuery}"`}
                  </span>
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  {currentLanguage === 'en'
                    ? `Found ${searchResults.length} verified records matching your query.`
                    : `आपके खोज शब्द के अनुकूल ${searchResults.length} सत्यापित दस्तावेज मिले।`}
                </p>
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((res, i) => (
                    <div
                      key={i}
                      onClick={() => handleSearchResultClick(res.targetTab)}
                      className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer flex justify-between items-center gap-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">
                          {res.type}
                        </span>
                        <h4 className="text-sm font-extrabold text-gray-900 mt-1">{res.title}</h4>
                        <p className="text-xs text-gray-500">{res.subtitle}</p>
                        <p className="text-xs text-gray-400 font-light italic mt-1 font-mono">{res.detail}</p>
                      </div>

                      <button className="px-3.5 py-2 bg-gray-50 text-[#004B23] hover:bg-[#004B23] hover:text-white rounded text-xs font-bold transition flex items-center space-x-1 flex-shrink-0">
                        <span>{currentLanguage === 'en' ? 'Open' : 'खोलें'}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg border border-gray-200 text-center text-xs text-gray-400 space-y-2">
                  <HelpCircle className="h-10 w-10 text-gray-300 mx-auto" />
                  <p className="font-bold text-gray-700">{currentLanguage === 'en' ? 'No records match your query' : 'कोई परिणाम नहीं मिला'}</p>
                  <p>{currentLanguage === 'en' ? 'Try checking your spelling or search another keyword.' : 'कृपया वर्तनी की जांच करें या अन्य कीवर्ड का उपयोग करें।'}</p>
                </div>
              )}

            </div>
          </div>
        ) : (
          /* Standard Sub-route Render Mapping */
          <>
            {activeTab === 'auth-callback' && (
              <AuthCallback currentLanguage={currentLanguage} setActiveTab={setActiveTab} />
            )}

            {/* A. HOME PAGE RENDER */}
            {activeTab === 'home' && (
              <HomeView currentLanguage={currentLanguage} onNavigate={setActiveTab} />
            )}

            {/* B. UNIFIED ABOUT US HUB */}
            {(activeTab === 'about' || activeTab.startsWith('about-') || activeTab === 'hall-of-excellence' || activeTab === 'excellence' || activeTab === 'legal-governance' || activeTab === 'legal-constitution' || activeTab === 'legal-awareness' || activeTab === 'legal-rti' || activeTab === 'legal-citizen-rights') && (
              <AboutUsHub
                currentLanguage={currentLanguage}
                activeSubTab={activeTab}
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}

            {/* C. COMMUNITY PORTAL MEGA PORTAL */}
            {(activeTab === 'membership-matrimonial' || activeTab === 'areas' || activeTab === 'portal' || activeTab === 'membership-register' || activeTab === 'membership-census' || activeTab === 'membership-tree' || activeTab === 'membership-id' || activeTab === 'matrimonial' || activeTab === 'matrimonial-second') && (
              <div id="community_view_wrapper" className="bg-white">
                {/* Sub-Navigation Pills for Community Portal */}
                <div className="bg-[#0B132B] text-white py-5 px-4 sm:px-6 border-b-2 border-[#D4AF37]">
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] border border-[#FFD54A]/40 text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-2">
                        <span>👥</span>
                        <span>{currentLanguage === 'en' ? 'UNIFIED COMMUNITY MEGA PORTAL' : currentLanguage === 'ur' ? 'متحدہ کمیونٹی میگا پورٹل' : 'एकीकृत सामुदायिक मेगा पोर्टल'}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-white flex items-center gap-2.5 tracking-tight">
                        <span>{currentLanguage === 'en' ? 'Community Portal Hub' : currentLanguage === 'ur' ? 'کمیونٹی پورٹل ہب' : 'सामुदायिक पोर्टल हब'}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                        {currentLanguage === 'en' ? 'Unified platform combining community welfare, regional areas directory, member registration, digital ID, family tree census, and matrimonial services.' : currentLanguage === 'ur' ? 'کمیونٹی سروس، علاقائی ڈائریکٹری، رکن کا اندراج، ڈیجیٹل آئی ڈی، خاندانی شجرہ نسب اور شادی بیاہ کی خدمات کا متحدہ پلیٹ فارم۔' : 'सामुदायिक सेवा, क्षेत्रीय निर्देशिका, सदस्य पंजीकरण, डिजिटल पहचान पत्र, वंशावली और निकाह सेवाओं का एकीकृत मंच।'}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto pt-2 md:pt-0">

                      <button
                        onClick={() => setActiveTab('areas')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'areas'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>📍</span>
                        <span>{currentLanguage === 'en' ? 'Areas Directory' : currentLanguage === 'ur' ? 'علاقے اور ڈائریکٹری' : 'क्षेत्रीय निर्देशिका'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('portal')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'portal'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>📋</span>
                        <span>{currentLanguage === 'en' ? 'Membership Dashboard' : currentLanguage === 'ur' ? 'رکنیت ڈیش بورڈ' : 'सदस्यता डैशबोर्ड'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('membership-register')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'membership-register'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>✍️</span>
                        <span>{currentLanguage === 'en' ? 'Registration' : currentLanguage === 'ur' ? 'رکن کا اندراج' : 'सदस्य पंजीकरण'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('membership-census')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'membership-census'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>👨‍👩‍👧‍👦</span>
                        <span>{currentLanguage === 'en' ? 'Family Census' : currentLanguage === 'ur' ? 'خاندانی مردم شماری' : 'पारिवारिक जनगणना'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('membership-tree')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'membership-tree'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🌳</span>
                        <span>{currentLanguage === 'en' ? 'Family Tree' : currentLanguage === 'ur' ? 'خاندانی شجرہ' : 'वंशावली वृक्ष'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('membership-id')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'membership-id'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🪪</span>
                        <span>{currentLanguage === 'en' ? 'Digital ID' : currentLanguage === 'ur' ? 'ڈیجیٹل آئی ڈی' : 'डिजिटल पहचान'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('matrimonial')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'matrimonial'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>💍</span>
                        <span>{currentLanguage === 'en' ? 'Matrimonial' : currentLanguage === 'ur' ? 'شادی بیاہ' : 'निकाह व शादी-ब्याह'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('matrimonial-second')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer relative overflow-hidden group ${
                          activeTab === 'matrimonial-second'
                            ? 'bg-gradient-to-r from-[#004B23] to-[#0D2418] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-amber-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-[#D4AF37]/50'
                        }`}
                      >
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span>✨</span>
                        <span>{currentLanguage === 'en' ? 'Second Marriage ✨' : currentLanguage === 'ur' ? 'دوسری شادی ✨' : 'द्वितीय विवाह ✨'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Module Rendering - Zero Data Loss */}
                {activeTab === 'membership-matrimonial' && (
                  <MembershipSystem 
                    currentLanguage={currentLanguage} 
                    defaultSubTab="overview"
                  />
                )}
                {activeTab === 'areas' && (
                  <AreasModule currentLanguage={currentLanguage} />
                )}
                {activeTab === 'portal' && (
                  <MembershipSystem 
                    currentLanguage={currentLanguage} 
                    defaultSubTab="dashboard"
                  />
                )}
                {activeTab === 'membership-register' && (
                  <MembershipSystem 
                    currentLanguage={currentLanguage} 
                    defaultSubTab="register"
                  />
                )}
                {activeTab === 'membership-id' && (
                  <MembershipSystem 
                    currentLanguage={currentLanguage} 
                    defaultSubTab="dashboard"
                    focusSection="id_card"
                  />
                )}
                {(activeTab === 'membership-census' || activeTab === 'membership-tree') && (
                  <FamilyRegistration 
                    currentLanguage={currentLanguage} 
                    focusSection={activeTab === 'membership-tree' ? 'tree' : 'census'} 
                  />
                )}
                {(activeTab === 'matrimonial' || activeTab === 'matrimonial-second') && (
                  <MatrimonialPlatform 
                    currentLanguage={currentLanguage} 
                    defaultSubTab={activeTab === 'matrimonial-second' ? 'second-marriage' : 'general'}
                  />
                )}
              </div>
            )}

            {/* G. EDUCATION, EXAMS & CAREERS */}
            {(activeTab === 'education' || activeTab === 'education-overview' || activeTab === 'education-hub' || activeTab === 'competitive-exams' || activeTab === 'jobs-careers' || activeTab === 'colleges-directory' || activeTab === 'scholarships' || activeTab === 'career-counselling' || activeTab === 'professional-colleges' || activeTab === 'medical-colleges' || activeTab === 'career-portal' || activeTab === 'career-opportunities' || activeTab === 'international-careers' || activeTab === 'legal-awareness') && (
              <div id="education_view_wrapper" className="bg-white">
                {/* Sub-Navigation Pills for Education, Exams & Careers */}
                <div className="bg-[#0B132B] text-white py-5 px-4 sm:px-6 border-b-2 border-[#D4AF37]">
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] border border-[#FFD54A]/40 text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-2">
                        <span>🎓</span>
                        <span>{currentLanguage === 'en' ? 'UNIFIED MEGA PORTAL' : currentLanguage === 'ur' ? 'متحدہ میگا پورٹل' : 'एकीकृत मेगा पोर्टल'}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-white flex items-center gap-2.5 tracking-tight">
                        <span>{currentLanguage === 'en' ? 'Education, Exams & Careers Hub' : currentLanguage === 'ur' ? 'تعلیم، امتحانات اور روزگار ہب' : 'तालीम, परीक्षा और करियर हब'}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                        {currentLanguage === 'en' ? 'India’s one-stop educational ecosystem. Browse through 7 organized sub-portals covering school education, entrance exams, 19 college streams, scholarships, and 24/7 AI career counseling.' : currentLanguage === 'ur' ? 'تعلیم، امتحانات، 19 کالج شعبے، وظائف اور 24/7 کیریئر کونسلنگ کا مکمل اور منظم پورٹل۔' : 'भारत का एकीकृत शैक्षणिक इकोसिस्टम। स्कूली शिक्षा, प्रतियोगी परीक्षा, 19 कॉलेज स्ट्रीम, छात्रवृत्ति और 24/7 एआई करियर काउंसलिंग से जुड़े 7 व्यवस्थित सब-पोर्टल देखें।'}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto pt-2 md:pt-0">
                      <button
                        onClick={() => setActiveTab('education')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'education' || activeTab === 'education-overview'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🌟</span>
                        <span>{currentLanguage === 'en' ? '1. Overview' : currentLanguage === 'ur' ? '1. جائزہ' : '1. अवलोकन'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('education-hub')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'education-hub'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🏫</span>
                        <span>{currentLanguage === 'en' ? '2. Education Hub' : currentLanguage === 'ur' ? '2. تعلیم ہب' : '2. शिक्षा हब'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('competitive-exams')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'competitive-exams' || activeTab === 'career-portal'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>📝</span>
                        <span>{currentLanguage === 'en' ? '3. Competitive Exams' : currentLanguage === 'ur' ? '3. امتحانات' : '3. प्रतियोगी परीक्षाएं'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('jobs-careers')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'jobs-careers' || activeTab === 'career-opportunities' || activeTab === 'international-careers'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>💼</span>
                        <span>{currentLanguage === 'en' ? '4. Jobs & Careers' : currentLanguage === 'ur' ? '4. ملازمتیں' : '4. नौकरियां व करियर'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('colleges-directory')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'colleges-directory' || activeTab === 'professional-colleges' || activeTab === 'medical-colleges'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🏛️</span>
                        <span>{currentLanguage === 'en' ? '5. Colleges Directory' : currentLanguage === 'ur' ? '5. کالجز' : '5. कॉलेज निर्देशिका'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('scholarships')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'scholarships'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>💰</span>
                        <span>{currentLanguage === 'en' ? '6. Scholarships' : currentLanguage === 'ur' ? '6. اسکالرشپس' : '6. छात्रवृत्ति'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('career-counselling')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'career-counselling'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🧭</span>
                        <span>{currentLanguage === 'en' ? '7. Counselling' : currentLanguage === 'ur' ? '7. کونسلنگ' : '7. काउंसलिंग'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('legal-awareness')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'legal-awareness'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>⚖️</span>
                        <span>{currentLanguage === 'en' ? '8. Legal Awareness' : currentLanguage === 'ur' ? '8. قانونی آگاہی' : '8. कानूनी जागरूकता'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Module Rendering - Zero Data Loss */}
                {(activeTab === 'education' || activeTab === 'education-overview') && (
                  <EducationOverview currentLanguage={currentLanguage} onNavigate={(tab) => setActiveTab(tab)} />
                )}
                {activeTab === 'education-hub' && (
                  <EducationHub currentLanguage={currentLanguage} />
                )}
                {(activeTab === 'competitive-exams' || activeTab === 'career-portal') && (
                  <CareerPortal currentLanguage={currentLanguage} />
                )}
                {(activeTab === 'jobs-careers' || activeTab === 'career-opportunities' || activeTab === 'international-careers') && (
                  <JobsCareersMaster currentLanguage={currentLanguage} />
                )}
                {(activeTab === 'colleges-directory' || activeTab === 'professional-colleges' || activeTab === 'medical-colleges') && (
                  <CollegesMasterDirectory currentLanguage={currentLanguage} />
                )}
                {activeTab === 'scholarships' && (
                  <ScholarshipsMasterPortal currentLanguage={currentLanguage} />
                )}
                {activeTab === 'career-counselling' && (
                  <CareerCounsellingPortal currentLanguage={currentLanguage} />
                )}
                {activeTab === 'legal-awareness' && (
                  <LegalAwareness currentLanguage={currentLanguage} />
                )}
              </div>
            )}

            {/* H. UNIFIED WELFARE, SCHEMES & SUPPORT MEGA PORTAL */}
            {(activeTab === 'welfare-support' || activeTab === 'schemes' || activeTab === 'welfare-minority' || activeTab === 'welfare-scholarships' || activeTab === 'welfare-hospital' || activeTab === 'welfare-blood-bank' || activeTab === 'welfare-blood-donors' || activeTab === 'helplines' || activeTab === 'welfare-charity' || activeTab === 'donate') && (
              <div id="welfare_support_mega_portal" className="bg-white">
                {/* Sub-Navigation Pills for Welfare & Support */}
                <div className="bg-[#0B132B] text-white py-5 px-4 sm:px-6 border-b-2 border-[#D4AF37]">
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] border border-[#FFD54A]/40 text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-2">
                        <span>🤲</span>
                        <span>{currentLanguage === 'en' ? 'UNIFIED WELFARE & SUPPORT PORTAL' : currentLanguage === 'ur' ? 'متحدہ فلاح و بہبود اور مدد پورٹل' : 'एकीकृत कल्याण एवं सहायता पोर्टल'}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-white flex items-center gap-2.5 tracking-tight">
                        <span>{currentLanguage === 'en' ? 'Welfare, Schemes, Helplines & Support Hub' : currentLanguage === 'ur' ? 'فلاح و بہبود، سرکاری اسکیمیں، ہیلپ لائن اور مدد ہب' : 'कल्याण, सरकारी योजनाएं, हेल्पलाइन और सहायता हब'}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                        {currentLanguage === 'en' ? 'Unified hub combining government schemes, minority aid, scholarships, emergency helplines, hospital help, blood bank, charity, volunteering, and disaster relief.' : currentLanguage === 'ur' ? 'سرکاری اسکیمیں، اقلیتی امداد، اسکالرشپ، ایمرجنسی ہیلپ لائن، ہسپتال کی مدد، بلڈ بینک، خیرات، رضاکاری اور آفات میں ریلیف کا متحدہ مرکز۔' : 'सरकारी योजनाएं, अल्पसंख्यक सहायता, छात्रवृत्ति, आपातकालीन हेल्पलाइन, अस्पताल सहायता, ब्लड बैंक, दान, स्वयंसेवा और आपदा राहत का एकीकृत केंद्र।'}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto pt-2 md:pt-0">
                      <button
                        onClick={() => setActiveTab('schemes')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-support' || activeTab === 'schemes'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🏛️</span>
                        <span>{currentLanguage === 'en' ? 'Govt Schemes' : currentLanguage === 'ur' ? 'سرکاری اسکیمیں' : 'सरकारी योजनाएं'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-minority')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-minority'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🌟</span>
                        <span>{currentLanguage === 'en' ? 'Minority Schemes' : currentLanguage === 'ur' ? 'اقلیتی اسکیمیں' : 'अल्पसंख्यक योजनाएं'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-scholarships')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-scholarships'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🎓</span>
                        <span>{currentLanguage === 'en' ? 'Scholarships' : currentLanguage === 'ur' ? 'اسکالرشپ' : 'छात्रवृत्ति'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-hospital')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-hospital'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🏥</span>
                        <span>{currentLanguage === 'en' ? 'Hospital Help' : currentLanguage === 'ur' ? 'ہسپتال کی مدد' : 'अस्पताल सहायता'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-blood-bank')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-blood-bank'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🩸</span>
                        <span>{currentLanguage === 'en' ? 'Blood Bank' : currentLanguage === 'ur' ? 'بلڈ بینک' : 'ब्लड बैंक'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-blood-donors')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-blood-donors'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>❤️</span>
                        <span>{currentLanguage === 'en' ? 'Blood Donors' : currentLanguage === 'ur' ? 'خون عطیہ کرنے والے' : 'रक्तदाता'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('helplines')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'helplines'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>📞</span>
                        <span>{currentLanguage === 'en' ? 'Emergency Helplines' : currentLanguage === 'ur' ? 'ایمرجنسی ہیلپ لائن' : 'आपातकालीन हेल्पलाइन'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('welfare-charity')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'welfare-charity'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🤲</span>
                        <span>{currentLanguage === 'en' ? 'Charity' : currentLanguage === 'ur' ? 'خیرات اور صدقہ' : 'खैरात व दान'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('donate')}
                        className={`px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                          activeTab === 'donate'
                            ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105 shadow-md'
                            : 'bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700'
                        }`}
                      >
                        <span>🎁</span>
                        <span>{currentLanguage === 'en' ? 'Donations' : currentLanguage === 'ur' ? 'عطیات' : 'दान सहयोग'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('volunteer-service')}
                        className="px-3 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer bg-[#142244] text-gray-200 hover:bg-[#1f3366] hover:text-[#FFD54A] border border-gray-700"
                      >
                        <span>🤝</span>
                        <span>{currentLanguage === 'en' ? 'Community Service →' : currentLanguage === 'ur' ? 'کمیونٹی سروس →' : 'सामुदायिक सेवा →'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Module Rendering - Zero Data Loss */}
                {activeTab === 'welfare-support' && (
                  <div>
                    <WelfareSupportOverview currentLanguage={currentLanguage} onNavigate={setActiveTab} />
                    <GovernmentSchemes currentLanguage={currentLanguage} onNavigate={setActiveTab} />
                    <HelpSupport currentLanguage={currentLanguage} />
                  </div>
                )}
                {activeTab === 'schemes' && (
                  <div>
                    <GovernmentSchemes currentLanguage={currentLanguage} onNavigate={setActiveTab} />
                    <HelpSupport currentLanguage={currentLanguage} />
                  </div>
                )}
                {activeTab === 'welfare-minority' && (
                  <div>
                    <GovernmentSchemes currentLanguage={currentLanguage} onNavigate={setActiveTab} defaultCategory="Minority Welfare" />
                    <HelpSupport currentLanguage={currentLanguage} />
                  </div>
                )}
                {activeTab === 'welfare-scholarships' && (
                  <div>
                    <GovernmentSchemes currentLanguage={currentLanguage} onNavigate={setActiveTab} defaultCategory="Education & Scholarships" />
                    <HelpSupport currentLanguage={currentLanguage} />
                  </div>
                )}
                {activeTab === 'welfare-hospital' && (
                  <HospitalNetworkPortal currentLanguage={currentLanguage} onNavigate={setActiveTab} />
                )}
                {activeTab === 'welfare-blood-bank' && (
                  <BloodBankAndDonorsPortal currentLanguage={currentLanguage} defaultTab="stock" onNavigate={setActiveTab} />
                )}
                {activeTab === 'welfare-blood-donors' && (
                  <BloodBankAndDonorsPortal currentLanguage={currentLanguage} defaultTab="donors" onNavigate={setActiveTab} />
                )}
                {activeTab === 'helplines' && (
                  <EmergencyHelplines currentLanguage={currentLanguage} />
                )}
                {activeTab === 'welfare-charity' && (
                  <DonationSystem currentLanguage={currentLanguage} defaultFund="general" />
                )}
                {activeTab === 'donate' && (
                  <DonationSystem currentLanguage={currentLanguage} defaultFund="education" />
                )}
              </div>
            )}

            {/* I. MEDIA, RESOURCES & ISLAMIC KNOWLEDGE MEGA PORTAL */}
            {(activeTab === 'media' || activeTab.startsWith('media-') || activeTab === 'islamic-calendar') && (
              <MediaResourcesHub
                currentLanguage={currentLanguage}
                activeSubTab={activeTab}
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}



            {/* N. UNIFIED MAHAPANCHAYAT MEGA PORTAL */}
            {(activeTab === 'mahapanchayat' || activeTab.startsWith('mahapanchayat-') || activeTab === 'governance-surveys' || activeTab === 'governance-opinion-poll' || activeTab === 'governance-mahapanchayat' || activeTab === 'governance-resolutions' || activeTab === 'governance-reports' || activeTab === 'agendas' || activeTab === 'archive' || activeTab === 'implementation' || activeTab === 'committees' || activeTab === 'reports_notif') && (
              <MahapanchayatHub
                currentLanguage={currentLanguage}
                activeSubTab={activeTab}
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}


            

            {/* P. UNIFIED COMMUNITY SERVICE MEGA PORTAL */}
            {(activeTab === 'volunteer-service' || activeTab === 'volunteer-community' || activeTab === 'volunteer-registration' || activeTab === 'volunteer-opportunities' || activeTab === 'volunteer-passport' || activeTab === 'volunteer-hall' || activeTab === 'volunteer-awards' || activeTab === 'volunteer-projects' || activeTab === 'volunteer-medical' || activeTab === 'volunteer-blood' || activeTab === 'volunteer-tree' || activeTab === 'volunteer-disaster' || activeTab === 'hall-of-service' || activeTab === 'welfare-volunteer' || activeTab === 'welfare-disaster' || activeTab === 'community-portal' || activeTab === 'community-service' || activeTab === 'awards-recognition' || activeTab === 'social-projects' || activeTab === 'medical-camps' || activeTab === 'blood-camps' || activeTab === 'tree-plantation' || activeTab === 'disaster-relief') && (
              <VolunteerServiceHub
                currentLanguage={currentLanguage}
                activeSubTab={activeTab}
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}


          </>
        )}

      </main>

      {/* 3. CORPORATE CONTACT FOOTER */}
      <Footer 
        currentLanguage={currentLanguage} 
        onNavigate={setActiveTab} 
        onOpenArchitectureHub={() => setArchitectureHubOpen(true)}
      />

      {/* ENTERPRISE ARCHITECTURE MASTER MODAL */}
      {architectureHubOpen && (
        <EnterpriseArchitectureHub
          currentLanguage={currentLanguage}
          onClose={() => setArchitectureHubOpen(false)}
          onNavigateTab={(tab) => {
            setActiveTab(tab);
            setArchitectureHubOpen(false);
          }}
        />
      )}

      {/* ENTERPRISE IQRA AI COMMUNITY ASSISTANT (WEBSITE-WIDE 24×7 DIGITAL GUIDE) */}
      <IqraAIAssistant
        currentLanguage={currentLanguage}
        onNavigate={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />

    </div>
  );
}
