import React, { useState } from 'react';
import { Search, Globe, Menu, X, Users, Heart, BookOpen, FileText, PhoneCall, Gift, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
}

export default function Header({
  currentLanguage,
  setLanguage,
  activeTab,
  setActiveTab,
  globalSearchQuery,
  setGlobalSearchQuery,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navigationItems = [
    { id: 'home', labelEn: 'Home', labelHi: 'होम' },
    {
      id: 'about',
      labelEn: 'About Us',
      labelHi: 'हमारे बारे में',
      subItems: [
        { id: 'about-history', labelEn: 'Community History', labelHi: 'समुदाय का इतिहास' },
        { id: 'about-vision', labelEn: 'Mission & Vision', labelHi: 'मिशन और दृष्टिकोण' },
        { id: 'about-leadership', labelEn: 'Founders & Leadership', labelHi: 'संस्थापक और नेतृत्व' },
        { id: 'about-faq', labelEn: 'FAQ', labelHi: 'सामान्य प्रश्न' },
      ],
    },
    { id: 'areas', labelEn: 'Areas', labelHi: 'क्षेत्र' },
    {
      id: 'portal',
      labelEn: 'Membership',
      labelHi: 'सदस्यता',
      subItems: [
        { id: 'membership-register', labelEn: 'Member Registration', labelHi: 'सदस्य पंजीकरण' },
        { id: 'membership-census', labelEn: 'Family Census', labelHi: 'पारिवारिक जनगणना' },
      ]
    },
    { id: 'matrimonial', labelEn: 'Matrimonial', labelHi: 'वैवाहिक' },
    { id: 'education', labelEn: 'Education & Careers', labelHi: 'शिक्षा और करियर' },
    { id: 'schemes', labelEn: 'Schemes & Supports', labelHi: 'योजनाएं और सहायता' },
    { id: 'media', labelEn: 'Media & Resources', labelHi: 'मीडिया और संसाधन' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" id="main_header">
      {/* Top Banner with Quick Stats, Contacts and Language Swapper */}
      <div className="bg-[#0B132B] text-white text-xs py-2 px-4 sm:px-6 flex flex-wrap justify-between items-center" id="top_bar">
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline font-mono tracking-wide text-gray-300">
            {currentLanguage === 'en' ? 'Domain: rangrezcommunity.org' : 'डोमेन: rangrezcommunity.org'}
          </span>
          <span className="flex items-center text-[#D4AF37] font-semibold">
            <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            {currentLanguage === 'en' ? 'Verified NGO Status Active' : 'सत्यापित गैर सरकारी संगठन सक्रिय'}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-2 border-r border-gray-700 pr-3">
            <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 py-0.5 rounded transition ${currentLanguage === 'hi' ? 'bg-[#004B23] text-white font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded transition ${currentLanguage === 'en' ? 'bg-[#004B23] text-white font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-gray-500 text-[10px] select-none opacity-50 cursor-not-allowed hover:none" title="Urdu translation coming soon">
              اردو (Soon)
            </span>
          </div>
          <span className="text-gray-300 font-medium">Helpline: +91 75660 12345</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center" id="middle_bar">
        {/* Logo and Branding */}
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => handleTabClick('home')}
          id="branding_logo"
        >
          {/* Custom Styled Premium Islamic Emblem */}
          <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#004B23] to-[#003118] border-2 border-[#D4AF37] flex items-center justify-center text-white shadow">
            <span className="font-serif text-lg font-bold tracking-tighter text-[#D4AF37]">R</span>
            <span className="absolute -bottom-1 -right-1 text-[8px] bg-[#D4AF37] text-[#0b132b] px-1 rounded-full font-bold uppercase tracking-widest scale-90 border border-white">NGO</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-serif font-extrabold text-[#004B23] tracking-tight flex items-center">
              <span>RANGREZ</span>
              <span className="text-[#D4AF37] ml-1.5 font-sans font-light text-xs md:text-sm tracking-widest uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">BHARAT</span>
            </h1>
            <p className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">
              {currentLanguage === 'en' ? 'National Community Platform' : 'अखिल भारतीय रंगरेज महासभा'}
            </p>
          </div>
        </div>

        {/* Global Search (Desktop Only) */}
        <div className="hidden lg:flex items-center relative max-w-xs w-full mx-4" id="global_search_container">
          <input
            type="text"
            placeholder={currentLanguage === 'en' ? 'Search members, jobs, schemes...' : 'खोजें: सदस्य, नौकरी, सरकारी योजनाएं...'}
            value={globalSearchQuery}
            onChange={(e) => setGlobalSearchQuery(e.target.value)}
            className="w-full bg-gray-50 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23] focus:border-transparent transition"
          />
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-1" id="desktop_nav_links">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.subItems && setDropdownOpen(item.id)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                onClick={() => !item.subItems && handleTabClick(item.id)}
                className={`px-3 py-2.5 text-xs font-semibold tracking-wide rounded-md transition duration-150 flex items-center space-x-1 ${
                  activeTab === item.id || activeTab.startsWith(item.id + '-')
                    ? 'text-[#004B23] bg-emerald-50/50'
                    : 'text-gray-700 hover:text-[#004B23] hover:bg-gray-50'
                }`}
              >
                <span>{currentLanguage === 'en' ? item.labelEn : item.labelHi}</span>
                {item.subItems && (
                  <span className="text-[10px] text-gray-400">▼</span>
                )}
              </button>

              {/* Submenu Dropdown */}
              {item.subItems && dropdownOpen === item.id && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-xl py-2 w-56 z-50 animate-fadeIn">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleTabClick(sub.id)}
                      className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-emerald-50 hover:text-[#004B23] transition"
                    >
                      {currentLanguage === 'en' ? sub.labelEn : sub.labelHi}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Special Donate Button */}
          <button
            onClick={() => handleTabClick('donate')}
            className={`ml-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition flex items-center space-x-1.5 ${
              activeTab === 'donate'
                ? 'bg-[#D4AF37] text-[#0B132B]'
                : 'bg-[#004B23] text-white hover:bg-[#003c1c] hover:shadow-md'
            }`}
            id="donate_btn_nav"
          >
            <Gift className="h-3.5 w-3.5 text-[#D4AF37] animate-bounce" />
            <span>{currentLanguage === 'en' ? 'DONATE NOW' : 'सहयोग करें'}</span>
          </button>
        </nav>

        {/* Mobile Burger Trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => handleTabClick('donate')}
            className="px-3 py-1.5 bg-[#004B23] text-white rounded-full text-[10px] font-bold flex items-center space-x-1"
          >
            <Gift className="h-3 w-3 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'DONATE' : 'दान करें'}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3" id="mobile_nav_panel">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search anything...' : 'खोजें...'}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              className="w-full bg-gray-50 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
          </div>

          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id} className="border-b border-gray-50 pb-1">
                {item.subItems ? (
                  <div>
                    <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {currentLanguage === 'en' ? item.labelEn : item.labelHi}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleTabClick(sub.id)}
                          className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:text-[#004B23] hover:bg-emerald-50 rounded"
                        >
                          • {currentLanguage === 'en' ? sub.labelEn : sub.labelHi}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className="w-full text-left px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#004B23] hover:bg-emerald-50 rounded"
                  >
                    {currentLanguage === 'en' ? item.labelEn : item.labelHi}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
