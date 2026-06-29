import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award, Search, Users, ShieldCheck, Mail, Phone, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { mockProfessionals } from '../data';

interface EducationHubProps {
  currentLanguage: Language;
}

export default function EducationHub({ currentLanguage }: EducationHubProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [professionSearch, setProfessionSearch] = useState('');

  const categories = ['All', 'Doctors', 'Engineers', 'Lawyers', 'Teachers'];

  const scholarships = [
    { nameEn: 'Rangrez Higher Education Support Scheme 2026', nameHi: 'रंगरेज उच्च शिक्षा सहायता योजना 2026', descEn: 'Direct bank tuition fee refunds up to ₹35,000 for students clearing state college entrances.', descHi: 'राज्य कॉलेज प्रवेश परीक्षा पास करने वाले छात्रों के लिए ₹35,000 तक की सीधी बैंक शिक्षण शुल्क प्रतिपूर्ति।', deadline: '2026-08-31' },
    { nameEn: 'Janab Shakeel Ahmed Technical Scholarship', nameHi: 'जनाब शकील अहमद तकनीकी छात्रवृत्ति', descEn: 'Fully sponsored training fees for professional courses in Web Development, ITI, or Tally.', descHi: 'वेब डेवलपमेंट, आईटीआई या टैली में व्यावसायिक पाठ्यक्रमों के लिए पूरी तरह से प्रायोजित प्रशिक्षण शुल्क।', deadline: '2026-07-25' }
  ];

  return (
    <div className="py-12 bg-white" id="education_hub_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'ACADEMIC EXCELLENCE CELL' : 'शैक्षणिक विकास प्रकोष्ठ'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Education, Mentorship & Professional Network' : 'शिक्षा, मेंटरशिप और पेशेवर नेटवर्क'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Find verified community mentors, browse available scholarships, and search our national professional directory.'
              : 'समुदाय के सत्यापित मेंटर्स खोजें, उपलब्ध छात्रवृत्तियों की सूची देखें और हमारे राष्ट्रीय पेशेवर निर्देशिका को खंगालें।'}
          </p>
        </div>

        {/* 1. PROFESSIONAL DIRECTORY BLOCK */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm mb-12" id="professional_directory">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Community Professionals & Mentors' : 'सामुदायिक विशेषज्ञ और मार्गदर्शक'}</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Connect directly with leading community Doctors, Lawyers, and Engineers for support.' : 'सहायता और मार्गदर्शन के लिए समुदाय के प्रमुख चिकित्सकों, वकीलों और इंजीनियरों से सीधे जुड़ें।'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search specialty or name...' : 'विशेषज्ञता या नाम से खोजें...'}
                value={professionSearch}
                onChange={(e) => setProfessionSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded pl-8 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
              />
              <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  activeCategory === cat
                    ? 'bg-[#004B23] text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {currentLanguage === 'en' ? cat : (cat === 'All' ? 'सभी' : (cat === 'Doctors' ? 'चिकित्सक' : (cat === 'Engineers' ? 'इंजीनियर' : (cat === 'Lawyers' ? 'अधिवक्ता' : 'शिक्षक'))))}
              </button>
            ))}
          </div>

          {/* Professionals List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProfessionals
              .filter(p => activeCategory === 'All' || p.categoryEn === activeCategory)
              .filter(p => p.nameEn.toLowerCase().includes(professionSearch.toLowerCase()) || p.detailsEn.toLowerCase().includes(professionSearch.toLowerCase()))
              .map((p, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2.5 py-0.5 rounded uppercase font-mono">
                      {p.categoryEn}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? p.nameEn : p.nameHi}</h4>
                    <p className="text-[11px] text-gray-500 leading-normal">{currentLanguage === 'en' ? p.detailsEn : p.detailsHi}</p>
                    <p className="text-[11px] text-[#004B23] font-semibold">📍 {currentLanguage === 'en' ? p.locationEn : p.locationHi}</p>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mt-4 flex items-center justify-between text-[11px] font-mono">
                    <button
                      onClick={() => alert('Secure verification request dispatched to professional registry.')}
                      className="text-[#004B23] hover:text-[#D4AF37] font-bold uppercase tracking-wider text-[10px]"
                    >
                      {currentLanguage === 'en' ? 'Request Consultation' : 'सलाह अनुरोध'}
                    </button>
                    <span className="text-emerald-700 font-bold flex items-center space-x-0.5">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Active</span>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 2. SCHOLARSHIPS & EDUCATION GRANTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="education_grants_grid">
          
          {/* Open Applications */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Open Scholarship Portals' : 'सक्रिय छात्रवृत्ति पोर्टल'}</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Apply directly for central trust education welfare funds below.' : 'नीचे केंद्रीय ट्रस्ट शिक्षा कल्याण कोष के लिए सीधे आवेदन करें।'}
              </p>
            </div>

            <div className="space-y-4">
              {scholarships.map((s, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? s.nameEn : s.nameHi}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{currentLanguage === 'en' ? s.descEn : s.descHi}</p>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-red-700 font-bold uppercase">DEADLINE: {s.deadline}</span>
                    <button
                      onClick={() => alert('Scholarship multi-step application form activated in full production.')}
                      className="px-3 py-1.5 bg-[#004B23] text-white rounded hover:bg-[#00381a] transition font-bold"
                    >
                      {currentLanguage === 'en' ? 'Apply Online' : 'ऑनलाइन आवेदन'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Development Programs */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Free Skill Development Courses' : 'मुफ्त कौशल विकास पाठ्यक्रम'}</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {currentLanguage === 'en' ? 'Training programs designed for our artisan youth to succeed in modern IT sectors.' : 'आधुनिक आईटी क्षेत्रों में सफल होने के लिए हमारे शिल्पकार युवाओं के लिए डिजाइन किए गए प्रशिक्षण कार्यक्रम।'}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Web Development Bootcamp</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{currentLanguage === 'en' ? 'HTML, CSS, JavaScript, React. 12 Weeks.' : 'एचटीएमएल, सीएसएस, जावास्क्रिप्ट, रिएक्ट। 12 सप्ताह।'}</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-[#004B23] rounded font-bold text-[10px] uppercase">Kailaras Batch</span>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Modern Textile Designing & Dyeing</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{currentLanguage === 'en' ? 'Fusing ancestral block print craft with digital tools.' : 'डिजिटल उपकरणों के साथ पारंपरिक ब्लॉक प्रिंट शिल्प का संलयन।'}</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-[#004B23] rounded font-bold text-[10px] uppercase">Jaipur Center</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
