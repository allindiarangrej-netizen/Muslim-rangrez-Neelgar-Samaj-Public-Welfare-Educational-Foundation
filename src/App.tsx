import React, { useState } from 'react';
import { Language } from './types';
import Header from './components/Header';
import HomeView from './components/HomeView';
import AreasModule from './components/AreasModule';
import MembershipSystem from './components/MembershipSystem';
import FamilyRegistration from './components/FamilyRegistration';
import MatrimonialPlatform from './components/MatrimonialPlatform';
import EducationHub from './components/EducationHub';
import JobBoard from './components/JobBoard';
import GovernmentSchemes from './components/GovernmentSchemes';
import HelpSupport from './components/HelpSupport';
import SocialImpact from './components/SocialImpact';
import MediaCenter from './components/MediaCenter';
import ResourcesCenter from './components/ResourcesCenter';
import DonationSystem from './components/DonationSystem';
import Footer from './components/Footer';
import NationalLeadership from './components/NationalLeadership';
import { MapPin, Search, ExternalLink, Calendar, FileText, Info, HelpCircle } from 'lucide-react';
import { jobListings, governmentSchemes, communityEvents } from './data';
import { initialDistricts } from './data/nationalDirectory';

export default function App() {
  const [currentLanguage, setLanguage] = useState<Language>('hi'); // default to Hindi as requested
  const [activeTab, setActiveTab] = useState<string>('home');
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');

  // Global Search Engine
  const searchResults = [];
  if (globalSearchQuery.trim()) {
    const q = globalSearchQuery.toLowerCase();
    
    // Search Jobs
    jobListings.forEach(j => {
      if (j.titleEn.toLowerCase().includes(q) || j.titleHi.toLowerCase().includes(q) || j.locationEn.toLowerCase().includes(q)) {
        searchResults.push({
          type: currentLanguage === 'en' ? 'Job Opening' : 'रोजगार अवसर',
          title: currentLanguage === 'en' ? j.titleEn : j.titleHi,
          subtitle: j.companyEn,
          targetTab: 'education',
          detail: currentLanguage === 'en' ? `Salary: ${j.salaryEn} • Location: ${j.locationEn}` : `वेतन: ${j.salaryHi} • स्थान: ${j.locationHi}`
        });
      }
    });

    // Search Schemes
    governmentSchemes.forEach(s => {
      if (s.nameEn.toLowerCase().includes(q) || s.nameHi.toLowerCase().includes(q) || s.benefitsEn.toLowerCase().includes(q)) {
        searchResults.push({
          type: currentLanguage === 'en' ? 'Govt Scheme' : 'सरकारी योजना',
          title: currentLanguage === 'en' ? s.nameEn : s.nameHi,
          subtitle: currentLanguage === 'en' ? s.categoryEn : s.categoryHi,
          targetTab: 'schemes',
          detail: currentLanguage === 'en' ? `Benefits: ${s.benefitsEn}` : `लाभ: ${s.benefitsHi}`
        });
      }
    });

    // Search Events
    communityEvents.forEach(e => {
      if (e.titleEn.toLowerCase().includes(q) || e.titleHi.toLowerCase().includes(q) || e.venueEn.toLowerCase().includes(q)) {
        searchResults.push({
          type: currentLanguage === 'en' ? 'Community Event' : 'सामुदायिक कार्यक्रम',
          title: currentLanguage === 'en' ? e.titleEn : e.titleHi,
          subtitle: currentLanguage === 'en' ? e.venueEn : e.venueHi,
          targetTab: 'media',
          detail: currentLanguage === 'en' ? `Date: ${e.date.split('T')[0]}` : `तिथि: ${e.date.split('T')[0]}`
        });
      }
    });

    // Search Areas
    initialDistricts.forEach(d => {
      if (d.nameEn.toLowerCase().includes(q) || d.nameHi.toLowerCase().includes(q) || d.presidentEn.toLowerCase().includes(q)) {
        searchResults.push({
          type: currentLanguage === 'en' ? 'Regional Chapter' : 'क्षेत्रीय समिति',
          title: currentLanguage === 'en' ? d.nameEn : d.nameHi,
          subtitle: currentLanguage === 'en' ? `President: ${d.presidentEn}` : `अध्यक्ष: ${d.presidentHi}`,
          targetTab: 'areas',
          detail: currentLanguage === 'en' ? `Families: ${d.familiesCount} • Members: ${d.membersCount}` : `परिवार: ${d.familiesCount} • सदस्य: ${d.membersCount}`
        });
      }
    });
  }

  const handleSearchResultClick = (targetTab: string) => {
    setActiveTab(targetTab);
    setGlobalSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800" id="app_root">
      
      {/* 1. GLOBAL BILINGUAL HEADER */}
      <Header
        currentLanguage={currentLanguage}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        globalSearchQuery={globalSearchQuery}
        setGlobalSearchQuery={setGlobalSearchQuery}
      />

      {/* 2. DYNAMIC CONTENT ROUTER */}
      <main className="flex-grow">
        
        {globalSearchQuery.trim() ? (
          /* Global Search Output Visualizer Panel */
          <div className="py-12 bg-gray-50/50 min-h-[60vh]" id="global_search_results_view">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-serif font-extrabold text-[#0B132B] flex items-center space-x-2">
                  <Search className="h-5 w-5 text-[#D4AF37]" />
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
            {/* A. HOME PAGE RENDER */}
            {activeTab === 'home' && (
              <HomeView currentLanguage={currentLanguage} onNavigate={setActiveTab} />
            )}

            {/* B. ABOUT US ROUTE BLOCK */}
            {activeTab.startsWith('about') && (
              <div className="py-12 bg-gray-50/30 animate-fadeIn" id="about_us_view_wrapper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                  
                  {/* About Header */}
                  <div className="text-center space-y-2">
                    <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest">
                      {currentLanguage === 'en' ? 'KNOW OUR HERITAGE' : 'हमारी महासभा का परिचय'}
                    </span>
                    <h2 className="text-3xl font-serif font-extrabold text-[#0B132B]">
                      {currentLanguage === 'en' ? 'Rangrez Community History & Trust Constitution' : 'महासभा इतिहास, उद्देश्य एवं नियमावली'}
                    </h2>
                    <div className="h-1 w-16 bg-[#D4AF37] mx-auto rounded"></div>
                  </div>

                  {/* Dynamic sections based on selection */}
                  {(activeTab === 'about' || activeTab === 'about-history') && (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4 leading-relaxed text-gray-700 text-xs sm:text-sm" id="about_history">
                      <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                        {currentLanguage === 'en' ? 'Historical Dyeing Craft and Heritage' : 'रंगसाजी विरासत और महासभा का इतिहास'}
                      </h3>
                      <p>
                        {currentLanguage === 'en'
                          ? "The Rangrez community in India has historically been the custodians of colors, textile dyer arts, and intricate block printing heritage. Originating from skilled dye artisans, our ancestors have brought colors to royals, merchants, and standard fabrics for generations."
                          : "भारत में रंगरेज समुदाय ऐतिहासिक रूप से रंगों, कपड़ा रंगाई कला और जटिल ब्लॉक प्रिंटिंग विरासत का संरक्षक रहा है। कुशल रंगसाज कारीगरों से शुरू होकर, हमारे पूर्वजों ने पीढ़ियों से राजाओं, व्यापारियों और आम लोगों के वस्त्रों को रंगों से सराबोर किया है।"}
                      </p>
                      <p>
                        {currentLanguage === 'en'
                          ? "With the advent of chemical dyes and massive industrialization, our traditional cottage weavers have faced significant economic hardships. Thus, the National Rangrez Mahasabha Bharat was established to document our families, provide modern technical education, and assist in socio-economic transitions."
                          : "केमिकल रंगों के आगमन और बड़े पैमाने पर औद्योगिकीकरण के साथ, हमारे पारंपरिक कुटीर बुनकरों और रंगसाजों को महत्वपूर्ण आर्थिक कठिनाइयों का सामना करना पड़ा है। इसी कारण से, हमारे परिवारों का दस्तावेजीकरण करने, आधुनिक तकनीकी शिक्षा प्रदान करने और सामाजिक-आर्थिक विकास में सहायता के लिए राष्ट्रीय रंगरेज महासभा भारत की स्थापना की गई थी।"}
                      </p>
                    </div>
                  )}

                  {(activeTab === 'about' || activeTab === 'about-vision') && (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4 text-xs sm:text-sm text-gray-700" id="about_vision">
                      <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                        {currentLanguage === 'en' ? 'Mission & Vision Parameters' : 'महासभा के उद्देश्य और मिशन'}
                      </h3>
                      <ul className="space-y-3 list-disc pl-5 leading-normal">
                        <li><strong>{currentLanguage === 'en' ? '100% Literacy' : '100% साक्षरता दर'}:</strong> {currentLanguage === 'en' ? 'Aiming to support primary and university tuition fees for every child in our community.' : 'हमारे समुदाय के प्रत्येक बच्चे के लिए प्राथमिक और विश्वविद्यालय शिक्षा शुल्क का वहन करना।'}</li>
                        <li><strong>{currentLanguage === 'en' ? 'Digital Census Mapping' : 'डिजिटल परिवार जनगणना'}:</strong> {currentLanguage === 'en' ? 'Registering 100,000+ members to provide streamlined healthcare benefits.' : 'सुव्यवस्थित स्वास्थ्य लाभ प्रदान करने के लिए 100,000+ महासभा सदस्यों का पंजीकरण।'}</li>
                        <li><strong>{currentLanguage === 'en' ? 'Socio-Economic Micro-finance' : 'लघु उद्योग स्वरोजगार'}:</strong> {currentLanguage === 'en' ? 'Providing business incubator grants to traditional handblock printing shops.' : 'पारंपरिक हैंडब्लॉक प्रिंटिंग दुकानों को व्यावसायिक विकास ऋण प्रदान करना।'}</li>
                      </ul>
                    </div>
                  )}

                  {(activeTab === 'about' || activeTab === 'about-leadership') && (
                    <div id="about_leadership" className="w-full">
                      <NationalLeadership currentLanguage={currentLanguage} />
                    </div>
                  )}

                  {activeTab === 'about-faq' && (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6" id="about_faq">
                      <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                        {currentLanguage === 'en' ? 'Frequently Asked Questions' : 'सामान्य प्रश्न (FAQ)'}
                      </h3>

                      <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                        <div className="space-y-1">
                          <p className="font-bold text-[#004B23]">{currentLanguage === 'en' ? 'Q1. How can I obtain my verified digital ID card?' : 'प्रश्न 1. मैं अपना सत्यापित डिजिटल पहचान पत्र कैसे प्राप्त कर सकता हूँ?'}</p>
                          <p className="pl-4 text-gray-500">{currentLanguage === 'en' ? 'A1. Register in the Membership portal. Once your state or district secretary verifies your physical residence, the card QR turns ACTIVE.' : 'उत्तर 1. सदस्यता पोर्टल पर पंजीकरण करें। एक बार जब आपके जिला सचिव आपके निवास की भौतिक जांच कर लेंगे, तो कार्ड स्वचालित रूप से सत्यापित हो जाएगा।'}</p>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="font-bold text-[#004B23]">{currentLanguage === 'en' ? 'Q2. Are donations eligible for income tax exemptions?' : 'प्रश्न 2. क्या मेरा सहयोग आयकर में छूट के योग्य है?'}</p>
                          <p className="pl-4 text-gray-500">{currentLanguage === 'en' ? 'A2. Yes, all direct contributions are eligible for 80G tax exemptions. Ensure to supply your PAN card number during checkout.' : 'उत्तर 2. हां, सभी दान आयकर की धारा 80G के तहत छूट के योग्य हैं। भुगतान के समय अपना पैन कार्ड नंबर अवश्य दर्ज करें।'}</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* C. AREAS DIRECTORY */}
            {activeTab === 'areas' && (
              <AreasModule currentLanguage={currentLanguage} />
            )}

            {/* D. MEMBERSHIP HUB */}
            {activeTab === 'membership-register' && (
              <MembershipSystem currentLanguage={currentLanguage} />
            )}

            {/* E. FAMILY CENSUS MAPPING */}
            {activeTab === 'membership-census' && (
              <FamilyRegistration currentLanguage={currentLanguage} />
            )}

            {/* F. SECURE MATRIMONIAL PORTAL */}
            {activeTab === 'matrimonial' && (
              <MatrimonialPlatform currentLanguage={currentLanguage} />
            )}

            {/* G. EDUCATION & PROFESSIONAL NETWORKS */}
            {activeTab === 'education' && (
              <div id="education_view_wrapper">
                <EducationHub currentLanguage={currentLanguage} />
                <JobBoard currentLanguage={currentLanguage} />
              </div>
            )}

            {/* H. GOVERNMENT SCHEMES & CHECKS */}
            {activeTab === 'schemes' && (
              <div id="schemes_view_wrapper">
                <GovernmentSchemes currentLanguage={currentLanguage} />
                <HelpSupport currentLanguage={currentLanguage} />
              </div>
            )}

            {/* I. MEDIA, GALLERY & NEWS MAGAZINES */}
            {activeTab === 'media' && (
              <div id="media_view_wrapper">
                <MediaCenter currentLanguage={currentLanguage} />
                <SocialImpact currentLanguage={currentLanguage} />
                <ResourcesCenter currentLanguage={currentLanguage} />
              </div>
            )}

            {/* J. STRATEGIC GIVING FUND */}
            {activeTab === 'donate' && (
              <DonationSystem currentLanguage={currentLanguage} />
            )}
          </>
        )}

      </main>

      {/* 3. CORPORATE CONTACT FOOTER */}
      <Footer currentLanguage={currentLanguage} />

    </div>
  );
}
