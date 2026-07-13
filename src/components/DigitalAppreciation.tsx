import React, { useState } from 'react';
import { Language } from '../types';
import { Award, Star, Download, FileText, Printer, ShieldCheck, Trophy, Medal, CheckCircle, Sparkles, User, Calendar, Share2 } from 'lucide-react';

interface DigitalAppreciationProps {
  currentLanguage: Language;
  appreciation?: any;
}

export default function DigitalAppreciationView({ currentLanguage }: DigitalAppreciationProps) {
  const [volunteerName, setVolunteerName] = useState('Mohammad Shahid Rangrez');
  const [awardCategory, setAwardCategory] = useState('Excellence in Emergency Blood Coordination');
  const [committeeName, setCommitteeName] = useState('Jaipur District Khidmat Committee');
  const [selectedBadge, setSelectedBadge] = useState<'Gold' | 'Silver' | 'Bronze'>('Gold');
  const [activeTab, setActiveTab] = useState<'generator' | 'medals' | 'levels' | 'letter'>('generator');

  const printLetter = () => {
    window.print();
  };

  return (
    <div className="space-y-10">
      {/* Top Banner */}
      <div className="text-center space-y-3 bg-gradient-to-r from-[#0B132B] via-[#1c2e5e] to-[#0B132B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none" />
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#F4C430] text-[#0B132B] uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5 mr-1" />
          {currentLanguage === 'en' ? 'Automated Digital Recognition Portal' : 'स्वचालित डिजिटल सम्मान पोर्टल'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold">
          {currentLanguage === 'en' ? 'Digital Appreciation & Certificates' : 'डिजिटल सराहना और सम्मान प्रमाणपत्र'}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          {currentLanguage === 'en' 
            ? 'Celebrate verified social service with verifiable digital certificates, ceremonial badges, service stars, and official appreciation letters signed by national leadership.' 
            : 'राष्ट्रीय नेतृत्व द्वारा हस्ताक्षरित डिजिटल प्रमाणपत्रों, बैज, सेवा सितारों और आधिकारिक प्रशंसा पत्रों के साथ सत्यापित समाज सेवा का जश्न मनाएं।'}
        </p>
      </div>

      {/* Navigation Sub-tabs */}
      <div className="flex justify-center flex-wrap gap-3">
        <button
          onClick={() => setActiveTab('generator')}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm ${
            activeTab === 'generator' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Award className="h-4 w-4" />
          <span>{currentLanguage === 'en' ? 'Certificate Generator' : 'प्रमाणपत्र जेनरेटर'}</span>
        </button>
        <button
          onClick={() => setActiveTab('medals')}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm ${
            activeTab === 'medals' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Trophy className="h-4 w-4" />
          <span>{currentLanguage === 'en' ? 'Medals, Badges & Stars' : 'पदक, बैज और सितारे'}</span>
        </button>
        <button
          onClick={() => setActiveTab('levels')}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm ${
            activeTab === 'levels' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Star className="h-4 w-4" />
          <span>{currentLanguage === 'en' ? 'Achievement Levels' : 'उपलब्धि स्तर'}</span>
        </button>
        <button
          onClick={() => setActiveTab('letter')}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm ${
            activeTab === 'letter' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>{currentLanguage === 'en' ? 'Printable Appreciation Letter' : 'प्रिंट करने योग्य प्रशंसा पत्र'}</span>
        </button>
      </div>

      {/* TAB 1: CERTIFICATE GENERATOR & DOWNLOADABLE CERTIFICATES */}
      {activeTab === 'generator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Controls Panel */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
            <h3 className="font-bold text-lg text-[#0B132B] border-b pb-3 flex items-center">
              <Award className="h-5 w-5 mr-2 text-[#004B23]" />
              {currentLanguage === 'en' ? 'Customize Certificate' : 'प्रमाणपत्र अनुकूलित करें'}
            </h3>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                {currentLanguage === 'en' ? 'Volunteer Full Name' : 'स्वयंसेवक का पूरा नाम'}
              </label>
              <input
                type="text"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                {currentLanguage === 'en' ? 'Award Category / Citation' : 'पुरस्कार श्रेणी / प्रशस्ति'}
              </label>
              <select
                value={awardCategory}
                onChange={(e) => setAwardCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none font-medium"
              >
                <option value="Excellence in Emergency Blood Coordination">Excellence in Emergency Blood Coordination</option>
                <option value="Best Youth Volunteer of the Year 2026">Best Youth Volunteer of the Year 2026</option>
                <option value="Outstanding Disaster Relief & Community Welfare">Outstanding Disaster Relief & Community Welfare</option>
                <option value="100+ Verified Service Hours Champion">100+ Verified Service Hours Champion</option>
                <option value="Women Leadership & Social Empowerment Award">Women Leadership & Social Empowerment Award</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                {currentLanguage === 'en' ? 'Committee / District Wing' : 'समिति / जिला विंग'}
              </label>
              <input
                type="text"
                value={committeeName}
                onChange={(e) => setCommitteeName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none font-medium"
              />
            </div>

            <div className="pt-2">
              <button
                onClick={() => alert(currentLanguage === 'en' ? 'High-resolution PDF certificate generated and downloading!' : 'उच्च-रिज़ॉल्यूशन पीडीएफ प्रमाणपत्र तैयार और डाउनलोड हो रहा है!')}
                className="w-full bg-[#004B23] hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition shadow-md"
              >
                <Download className="h-5 w-5" />
                <span>{currentLanguage === 'en' ? 'Download Certificate (PDF)' : 'प्रमाणपत्र डाउनलोड करें (PDF)'}</span>
              </button>
            </div>
          </div>

          {/* Live Ceremonial Certificate Preview */}
          <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 via-white to-amber-50/40 p-8 sm:p-12 rounded-3xl border-4 border-[#D4AF37] shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#D4AF37]/40 pointer-events-none rounded-2xl" />
            
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0B132B] text-[#F4C430] rounded-full shadow-md">
                <ShieldCheck className="h-10 w-10" />
              </div>
            </div>

            <span className="text-xs font-bold tracking-widest text-amber-800 uppercase block mb-1">
              {currentLanguage === 'en' ? 'All India Rangrez Samaj & Welfare Board' : 'ऑल इंडिया रंगरेज़ समाज एवं कल्याण बोर्ड'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B] uppercase tracking-wide mb-6">
              {currentLanguage === 'en' ? 'Certificate of Appreciation' : 'सराहना प्रमाणपत्र'}
            </h2>

            <p className="text-sm text-gray-600 font-serif italic mb-2">
              {currentLanguage === 'en' ? 'This ceremonial honor is proudly presented to' : 'यह सम्मान गर्व के साथ प्रदान किया जाता है'}
            </p>

            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#004B23] border-b-2 border-[#D4AF37]/50 inline-block px-8 py-2 mb-4">
              {volunteerName || 'Volunteer Name'}
            </h3>

            <p className="text-xs sm:text-sm text-gray-700 max-w-lg mx-auto leading-relaxed mb-6">
              {currentLanguage === 'en' 
                ? `In recognition of outstanding dedication, verified community service, and selfless humanitarian contributions as part of the ${committeeName}. Your devotion under the category of "${awardCategory}" exemplifies true leadership and social impact.`
                : `${committeeName} के अंग के रूप में उत्कृष्ट समर्पण, सत्यापित समाज सेवा और निस्वार्थ मानवीय योगदान के सम्मान में। "${awardCategory}" श्रेणी के तहत आपका सेवा भाव सच्चे नेतृत्व का प्रतीक है।`}
            </p>

            {/* Seals & Signatures */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-end pt-6 border-t border-gray-200/60 text-xs">
              <div className="text-center">
                <div className="font-serif italic text-gray-800 font-bold border-b border-gray-400 pb-1 mb-1">Haji Abdul Rehman</div>
                <span className="text-gray-500">{currentLanguage === 'en' ? 'National President' : 'राष्ट्रीय अध्यक्ष'}</span>
              </div>

              <div className="hidden sm:flex flex-col items-center justify-center text-amber-600">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center bg-amber-50 font-bold text-[10px] uppercase text-center p-1 shadow-sm">
                  {currentLanguage === 'en' ? 'Verified Seal' : 'सत्यापित मुहर'}
                </div>
                <span className="text-[10px] text-gray-400 mt-1">ID: RS-KHIDMAT-2026</span>
              </div>

              <div className="text-center">
                <div className="font-serif italic text-gray-800 font-bold border-b border-gray-400 pb-1 mb-1">Dr. S. M. Rangrez</div>
                <span className="text-gray-500">{currentLanguage === 'en' ? 'General Secretary' : 'महासचिव'}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIGITAL MEDALS, BADGES (Gold/Silver/Bronze), & SERVICE STARS */}
      {activeTab === 'medals' && (
        <div className="space-y-8">
          {/* Digital Medals Showcase */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0B132B] flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
              {currentLanguage === 'en' ? 'Verified Digital Medals & Badges' : 'सत्यापित डिजिटल पदक और बैज'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Gold Badge */}
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-400 text-center space-y-3 relative overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="absolute top-0 right-0 bg-yellow-400 text-[#0B132B] text-[10px] font-extrabold px-3 py-0.5 rounded-bl-lg uppercase">
                  500+ Hours
                </div>
                <div className="w-16 h-16 bg-yellow-400/20 text-yellow-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-yellow-400/30">
                  <Award className="h-9 w-9" />
                </div>
                <h4 className="font-extrabold text-lg text-gray-900">{currentLanguage === 'en' ? 'Gold Khidmat Medal' : 'स्वर्ण खिदमत पदक'}</h4>
                <div className="flex justify-center text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-gray-600">
                  {currentLanguage === 'en' ? 'Awarded to elite volunteers completing over 500 verified community service hours with unanimous committee approval.' : '500 से अधिक सत्यापित समाज सेवा घंटे पूरे करने वाले उत्कृष्ट स्वयंसेवकों को प्रदान किया जाता है।'}
                </p>
                <span className="inline-block text-xs font-bold text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full">
                  {currentLanguage === 'en' ? 'Status: Unlocked by 48 Members' : 'स्थिति: 48 सदस्यों द्वारा अर्जित'}
                </span>
              </div>

              {/* Silver Badge */}
              <div className="bg-gradient-to-b from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-300 text-center space-y-3 relative overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="absolute top-0 right-0 bg-slate-400 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-bl-lg uppercase">
                  250+ Hours
                </div>
                <div className="w-16 h-16 bg-slate-300/30 text-slate-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-slate-300/40">
                  <Award className="h-9 w-9" />
                </div>
                <h4 className="font-extrabold text-lg text-gray-900">{currentLanguage === 'en' ? 'Silver Khidmat Medal' : 'रजत खिदमत पदक'}</h4>
                <div className="flex justify-center text-slate-400">
                  {[...Array(4)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-gray-600">
                  {currentLanguage === 'en' ? 'Awarded for surpassing 250 verified hours of dedicated field work, disaster relief, or educational mentoring.' : '250 से अधिक सत्यापित सेवा घंटों या शैक्षिक मार्गदर्शन के लिए प्रदान किया जाता है।'}
                </p>
                <span className="inline-block text-xs font-bold text-slate-700 bg-slate-200 px-3 py-1 rounded-full">
                  {currentLanguage === 'en' ? 'Status: Unlocked by 142 Members' : 'स्थिति: 142 सदस्यों द्वारा अर्जित'}
                </span>
              </div>

              {/* Bronze Badge */}
              <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl border-2 border-amber-600/40 text-center space-y-3 relative overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="absolute top-0 right-0 bg-amber-700 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-bl-lg uppercase">
                  100+ Hours
                </div>
                <div className="w-16 h-16 bg-amber-600/20 text-amber-700 rounded-full flex items-center justify-center mx-auto ring-4 ring-amber-600/30">
                  <Award className="h-9 w-9" />
                </div>
                <h4 className="font-extrabold text-lg text-gray-900">{currentLanguage === 'en' ? 'Bronze Khidmat Badge' : 'कांस्य खिदमत बैज'}</h4>
                <div className="flex justify-center text-amber-600">
                  {[...Array(3)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-gray-600">
                  {currentLanguage === 'en' ? 'The foundational badge honoring consistent participation in blood donation drives, medical camps, or welfare initiatives.' : 'रक्तदान शिविरों या कल्याणकारी पहल में निरंतर भागीदारी का सम्मान करने वाला बुनियादी बैज।'}
                </p>
                <span className="inline-block text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  {currentLanguage === 'en' ? 'Status: Unlocked by 380 Members' : 'स्थिति: 380 सदस्यों द्वारा अर्जित'}
                </span>
              </div>
            </div>
          </div>

          {/* Service Stars Breakdown */}
          <div className="bg-[#0B132B] text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold bg-[#F4C430] text-[#0B132B] px-2.5 py-1 rounded-full uppercase">
                {currentLanguage === 'en' ? 'Service Stars (★) Criteria' : 'सेवा सितारे (★) मानदंड'}
              </span>
              <h4 className="text-xl font-bold">
                {currentLanguage === 'en' ? 'How Service Stars Are Awarded' : 'सेवा सितारे कैसे प्रदान किए जाते हैं'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                {currentLanguage === 'en'
                  ? 'Each star represents 50 verified hours or leadership in 3 national welfare drives. Volunteers accumulate stars which are permanently displayed on their public profiles and leaderboards.'
                  : 'प्रत्येक सितारा 50 सत्यापित घंटों या 3 राष्ट्रीय कल्याण अभियानों में नेतृत्व का प्रतिनिधित्व करता है। स्वयंसेवकों के सितारे उनकी सार्वजनिक प्रोफ़ाइल पर प्रदर्शित होते हैं।'}
              </p>
            </div>
            <div className="flex space-x-2 bg-white/10 p-4 rounded-2xl">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="text-center">
                  <Star className="h-6 w-6 text-[#F4C430] fill-current mx-auto" />
                  <span className="text-[10px] text-gray-300 block mt-1">Level {num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ACHIEVEMENT LEVELS */}
      {activeTab === 'levels' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-[#0B132B]">
              {currentLanguage === 'en' ? 'Volunteer Achievement Progression' : 'स्वयंसेवक उपलब्धि प्रगति'}
            </h3>
            <p className="text-sm text-gray-600">
              {currentLanguage === 'en' 
                ? 'From newcomer to community leader, track your service journey through clear, transparent, and merit-based milestones.' 
                : 'नए स्वयंसेवक से लेकर सामाजिक नेता तक, स्पष्ट और पारदर्शी मील के पत्थरों के माध्यम से अपनी सेवा यात्रा को ट्रैक करें।'}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { level: 1, titleEn: 'Newcomer Khidmatgar', titleHi: 'नवप्रवेशी खिदमतगार', reqEn: '10 Verified Hours • 1 Event Attendance', reqHi: '10 सत्यापित घंटे • 1 कार्यक्रम में उपस्थिति', color: 'border-blue-200 bg-blue-50/40 text-blue-800' },
              { level: 2, titleEn: 'Dedicated Volunteer', titleHi: 'समर्पित स्वयंसेवक', reqEn: '50 Verified Hours • 5 Major Drives', reqHi: '50 सत्यापित घंटे • 5 प्रमुख अभियान', color: 'border-emerald-200 bg-emerald-50/40 text-emerald-800' },
              { level: 3, titleEn: 'Senior Community Mentor', titleHi: 'वरिष्ठ समाज मार्गदर्शक', reqEn: '150 Verified Hours • Committee Recommendation', reqHi: '150 सत्यापित घंटे • समिति की सिफारिश', color: 'border-amber-200 bg-amber-50/40 text-amber-800' },
              { level: 4, titleEn: 'Master of Service (Khidmat Ratan)', titleHi: 'खिदमत रत्न', reqEn: '300 Verified Hours • 50+ Beneficiaries Helped', reqHi: '300 सत्यापित घंटे • 50+ लाभार्थियों को सहायता', color: 'border-purple-200 bg-purple-50/40 text-purple-800' },
              { level: 5, titleEn: 'Legend of Khidmat (National Honor)', titleHi: 'खिदमत गौरव (राष्ट्रीय सम्मान)', reqEn: '500+ Verified Hours • Exemplary Social Impact Story', reqHi: '500+ सत्यापित घंटे • अनुकरणीय सामाजिक प्रभाव', color: 'border-yellow-300 bg-yellow-50 text-yellow-900 font-bold' },
            ].map((lvl) => (
              <div key={lvl.level} className={`p-4 rounded-xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 ${lvl.color}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-extrabold text-lg">
                    {lvl.level}
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{currentLanguage === 'en' ? lvl.titleEn : lvl.titleHi}</h4>
                    <p className="text-xs opacity-80 font-medium">{currentLanguage === 'en' ? lvl.reqEn : lvl.reqHi}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(lvl.level)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: PRINTABLE APPRECIATION LETTERS */}
      {activeTab === 'letter' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">
            <div className="text-sm text-gray-700 font-medium">
              {currentLanguage === 'en' ? 'Official letterhead format ready for formal presentation or framing.' : 'औपचारिक प्रस्तुति या फ्रेमिंग के लिए तैयार आधिकारिक लेटरहेड प्रारूप।'}
            </div>
            <button
              onClick={printLetter}
              className="bg-[#004B23] hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl flex items-center space-x-2 shadow-sm transition"
            >
              <Printer className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Print Appreciation Letter' : 'प्रशंसा पत्र प्रिंट करें'}</span>
            </button>
          </div>

          {/* Printable Letter Container */}
          <div className="bg-white p-8 sm:p-14 rounded-3xl border border-gray-200 shadow-lg max-w-3xl mx-auto space-y-8 text-gray-800 font-serif leading-relaxed">
            {/* Header Letterhead */}
            <div className="border-b-2 border-[#004B23] pb-6 text-center space-y-2">
              <div className="flex justify-center mb-2">
                <ShieldCheck className="h-10 w-10 text-[#004B23]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B132B] uppercase tracking-wide">
                ALL INDIA RANGREZ SAMAJ & WELFARE BOARD
              </h2>
              <p className="text-xs text-gray-500 font-sans">
                Central Office: Rangrez Bhawan, New Delhi | Regd. Under Societies Registration Act XXI of 1860
              </p>
            </div>

            {/* Reference & Date */}
            <div className="flex justify-between text-xs font-sans text-gray-600 font-semibold">
              <span>Ref No: AIRS/HON/2026/089</span>
              <span>Date: July 02, 2026</span>
            </div>

            {/* Salutation */}
            <div className="space-y-4">
              <p className="font-bold text-base text-gray-900">
                To,<br />
                {volunteerName || 'Mohammad Shahid Rangrez'}<br />
                {committeeName || 'Jaipur District Khidmat Committee'}
              </p>

              <h3 className="font-bold text-lg text-[#004B23] underline decoration-[#F4C430] decoration-2">
                SUBJECT: LETTER OF APPRECIATION FOR OUTSTANDING COMMUNITY SERVICE
              </h3>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                Dear Khidmat Champion,
              </p>
              <p>
                On behalf of the Central Executive Committee and the entire All India Rangrez Samaj community, we extend our heartfelt gratitude and warmest congratulations for your exemplary dedication and selfless humanitarian service.
              </p>
              <p>
                Your verified record of volunteer activities—specifically in the area of <strong className="text-gray-900">"{awardCategory}"</strong>—has made a tangible, verified difference in the lives of hundreds of beneficiaries. Through your integrity, punctuality, and unwavering compassion, you have upheld the highest principles of brotherhood and public welfare.
              </p>
              <p>
                This official Letter of Appreciation serves as a permanent record of your contribution in our national audit trail. We trust that your leadership will continue to inspire the youth and strengthen society.
              </p>
              <p>
                We wish you continued success, health, and grace in all your future endeavors.
              </p>
            </div>

            {/* Sign-off */}
            <div className="pt-10 grid grid-cols-2 gap-8 items-end text-sm font-sans border-t border-gray-100">
              <div>
                <div className="h-10 border-b border-gray-400 w-40 mb-1" />
                <strong className="block text-gray-900 font-serif">Haji Abdul Rehman Rangrez</strong>
                <span className="text-xs text-gray-500">National President</span>
              </div>
              <div className="text-right">
                <div className="h-10 border-b border-gray-400 w-40 ml-auto mb-1" />
                <strong className="block text-gray-900 font-serif">Advocate K. M. Rangrez</strong>
                <span className="text-xs text-gray-500">National Verification Officer</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
