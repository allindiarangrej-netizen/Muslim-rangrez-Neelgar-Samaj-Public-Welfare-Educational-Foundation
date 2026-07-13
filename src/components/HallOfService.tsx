import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Trophy, Award, Sparkles, Medal } from 'lucide-react';
import Leaderboard from './Leaderboard';
import VolunteerProfileView from './VolunteerProfileView';
import CommitteeProfileView from './CommitteeProfileView';
import DigitalAppreciationView from './DigitalAppreciation';
import CorePrinciples from './CorePrinciples';
import MonthlyRecognitionView from './MonthlyRecognitionView';

interface HallOfServiceProps {
  currentLanguage: Language;
  defaultTab?: 'awards' | 'leaderboard' | 'monthly' | 'digital' | string;
}

export default function HallOfService({ currentLanguage, defaultTab = 'awards' }: HallOfServiceProps) {
  const [activeTab, setActiveTab] = useState<any>(defaultTab || 'awards');
  const [showNominateModal, setShowNominateModal] = useState(false);
  const [nomForm, setNomForm] = useState({ nomineeName: '', nomineeId: '', category: 'Khidmat-e-Qaum', justification: '', nominatorPhone: '' });

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);
  const awards = [
    { titleEn: 'Volunteer of the Year (Khidmat-e-Qaum)', titleHi: 'वर्ष का स्वयंसेवक (खिदमत-ए-कौम)', badge: 'Diamond Tier Trophy', icon: Trophy, color: 'from-amber-500 to-yellow-600', hours: '1,000+ Hrs' },
    { titleEn: 'Khidmat-e-Insaniyat Humanitarian Award', titleHi: 'खिदमत-ए-इंसानियत मानवीय पुरस्कार', badge: 'Gold Leadership Trophy', icon: Medal, color: 'from-amber-600 to-yellow-700', hours: '500+ Hrs' },
    { titleEn: 'Community Champion of the Quarter', titleHi: 'तिमाही के सामुदायिक चैंपियन', badge: 'Silver Excellence Trophy', icon: Award, color: 'from-slate-600 to-slate-700', hours: '250+ Hrs' },
    { titleEn: 'Green Warrior Eco Leadership Award', titleHi: 'हरित योद्धा पर्यावरण नेतृत्व पुरस्कार', badge: 'Green Brigade Medal', icon: Sparkles, color: 'from-[#004B23] to-emerald-800', hours: '150+ Hrs' },
    { titleEn: 'Emergency SOS Life Saver Award', titleHi: 'आपातकालीन जीवन रक्षक सम्मान', badge: 'Blood Bank Star', icon: Trophy, color: 'from-red-600 to-rose-700', hours: '10+ Donations' },
    { titleEn: 'Senior Citizen Care & Pension Mentor', titleHi: 'वरिष्ठ नागरिक सेवा एवं मार्गदर्शन सम्मान', badge: 'Seva Ratna', icon: Medal, color: 'from-blue-600 to-indigo-700', hours: '100+ Hrs' },
    { titleEn: 'Committee of the Year (District Hub)', titleHi: 'वर्ष की सर्वश्रेष्ठ जिला समिति', badge: 'National Shield', icon: Award, color: 'from-purple-600 to-indigo-800', hours: '5,000+ Hub Hrs' },
    { titleEn: 'Youth Volunteer of the Year (Under 25)', titleHi: 'वर्ष का युवा स्वयंसेवक (25 वर्ष से कम)', badge: 'Youth Star', icon: Sparkles, color: 'from-teal-600 to-emerald-700', hours: '300+ Hrs' },
    { titleEn: 'Women Volunteer of the Year (Nari Shakti)', titleHi: 'वर्ष की सर्वश्रेष्ठ महिला स्वयंसेवक', badge: 'Khidmat-e-Nari', icon: Trophy, color: 'from-pink-600 to-rose-700', hours: '400+ Hrs' },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif font-extrabold text-[#0B132B]">
            {currentLanguage === 'en' ? 'Hall of Service (Khidmat Honour Board)' : 'खिदमत ऑनर बोर्ड (सेवा सम्मान)'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'en' 
              ? 'Every act of service matters. This platform proudly recognizes individuals and committees whose dedication has improved lives and strengthened society through selfless service.' 
              : 'हर सेवा मायने रखती है। यह मंच गर्व से उन व्यक्तियों और समितियों को सम्मानित करता है जिन्होंने निस्वार्थ सेवा के माध्यम से जीवन को बेहतर बनाया है।'}
          </p>
        </div>

        <CorePrinciples currentLanguage={currentLanguage} />

        <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
          <button 
            onClick={() => setActiveTab('awards')}
            className={`px-6 py-2.5 rounded-full font-semibold transition flex items-center space-x-2 ${activeTab === 'awards' ? 'bg-[#004B23] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span>{currentLanguage === 'en' ? 'Annual Awards' : 'वार्षिक पुरस्कार'}</span>
          </button>
          <button 
            onClick={() => setActiveTab('leaderboard')}
            className={`px-6 py-2.5 rounded-full font-semibold transition flex items-center space-x-2 ${activeTab === 'leaderboard' ? 'bg-[#004B23] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <Medal className="h-4 w-4 text-emerald-400" />
            <span>{currentLanguage === 'en' ? 'Leaderboard & Verification' : 'लीडरबोर्ड और सत्यापन'}</span>
          </button>
          <button 
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-2.5 rounded-full font-semibold transition flex items-center space-x-2 ${activeTab === 'monthly' ? 'bg-[#004B23] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>{currentLanguage === 'en' ? 'Monthly Recognition' : 'मासिक सम्मान'}</span>
          </button>
          <button 
            onClick={() => setActiveTab('digital')}
            className={`px-6 py-2.5 rounded-full font-semibold transition flex items-center space-x-2 ${activeTab === 'digital' ? 'bg-[#004B23] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <Award className="h-4 w-4 text-amber-400" />
            <span>{currentLanguage === 'en' ? 'Digital Appreciation & Certificates' : 'डिजिटल सराहना और प्रमाणपत्र'}</span>
          </button>
        </div>

        {activeTab === 'awards' && (
          <div className="space-y-10">
            {/* Top Verification & Nomination Banner */}
            <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#004B23] shadow-sm">
              <div className="flex items-center space-x-3.5">
                <span className="p-3 bg-[#004B23] text-[#F4C430] rounded-2xl font-bold text-lg">✓</span>
                <div>
                  <span className="font-bold text-base block text-[#004B23]">
                    {currentLanguage === 'en' ? 'Protected by the 7-Point Mandatory Verification System' : '7-सूत्रीय अनिवार्य सत्यापन प्रणाली द्वारा संरक्षित'}
                  </span>
                  <span className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en' ? 'Every award candidate undergoes strict audit of geotagged photos, attendance rosters, and beneficiary confirmation.' : 'प्रत्येक पुरस्कार उम्मीदवार की जियोटैग तस्वीरों, उपस्थिति रजिस्टर और लाभार्थी पुष्टि की कड़ी जांच होती है।'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setShowNominateModal(true)}
                  className="bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? '+ Nominate Volunteer' : '+ समाज सेवक को नामांकित करें'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className="bg-[#004B23] text-white hover:bg-emerald-800 text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap shadow-sm cursor-pointer"
                >
                  {currentLanguage === 'en' ? 'Inspect Audit Desk →' : 'ऑडिट डेस्क जांचें →'}
                </button>
              </div>
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, i) => {
                const IconComp = award.icon || Trophy;
                return (
                  <div key={i} className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#004B23] transition flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-bold text-white uppercase tracking-wider bg-gradient-to-r ${award.color || 'from-amber-500 to-yellow-600'} px-2.5 py-1 rounded-md shadow-xs`}>
                          {award.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400 font-mono">{award.hours}</span>
                      </div>
                      <div className="flex items-center space-x-3.5 my-3">
                        <div className="p-3.5 bg-amber-50 text-amber-600 rounded-2xl border border-amber-200/60 shadow-xs">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 leading-snug">
                          {currentLanguage === 'en' ? award.titleEn : award.titleHi}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {currentLanguage === 'en' ? 'Recognizing outstanding dedication, verified humanitarian leadership, and measurable community upliftment.' : 'वर्ष भर में उत्कृष्ट समर्पण और सत्यापित मानवीय नेतृत्व को सम्मानित करते हुए।'}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                      <span className="flex items-center gap-1">✓ 100% Audit Verified</span>
                      <button onClick={() => setShowNominateModal(true)} className="hover:underline text-[#0B132B] cursor-pointer">
                        {currentLanguage === 'en' ? 'Nominate →' : 'नामांकन →'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Volunteer Badge & Tier Progression System Showcase */}
            <div className="bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4C430] bg-[#F4C430]/10 px-3 py-1 rounded-full border border-[#F4C430]/20 inline-block">
                    {currentLanguage === 'en' ? 'National Khidmat Tier Architecture' : 'राष्ट्रीय खिदमत श्रेणी संरचना'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {currentLanguage === 'en' ? 'Volunteer Badge & Recognition Tier Progression' : 'स्वयंसेवक बैज एवं सम्मान स्तर प्रगति'}
                  </h3>
                </div>
                <span className="text-xs text-emerald-300 font-semibold">
                  {currentLanguage === 'en' ? 'Auto-awarded based on cryptographic Seva Ledger hours' : 'सत्यापित सेवा लेजर घंटों के आधार पर स्वचालित रूप से प्रदान किया गया'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { tier: 'Bronze Seva Badge 🥉', hours: '50+ Verified Hours', req: 'Completion of 3 Community Drives', color: 'from-amber-700 to-amber-900 border-amber-600/40', title: 'Khidmat Volunteer' },
                  { tier: 'Silver Khidmat Badge 🥈', hours: '150+ Verified Hours', req: 'Led 1 Local Medical/Blood Camp', color: 'from-slate-600 to-slate-800 border-slate-500/40', title: 'Senior Sevadar' },
                  { tier: 'Gold Leadership Badge 🥇', hours: '300+ Verified Hours', req: 'District Coordinator & Roster Management', color: 'from-amber-500 to-yellow-600 border-amber-400/50', title: 'Brigade Commander' },
                  { tier: 'Diamond Champion 💎', hours: '1,000+ Verified Hours', req: 'National Honour Board Hall of Fame', color: 'from-purple-700 to-indigo-900 border-purple-500/40', title: 'Khidmat-e-Qaum Star' },
                ].map((badge, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${badge.color} p-5 rounded-2xl border shadow-lg space-y-3 flex flex-col justify-between`}>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full inline-block">
                        {badge.hours}
                      </span>
                      <h4 className="font-extrabold text-base sm:text-lg mt-2 text-white">{badge.tier}</h4>
                      <p className="text-xs text-slate-200 mt-1 leading-snug">{badge.req}</p>
                    </div>
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-[#F4C430]">
                      <span>Title: {badge.title}</span>
                      <span>★</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nomination Popup Modal */}
            {showNominateModal && (
              <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl font-bold"><Trophy className="h-5 w-5" /></span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{currentLanguage === 'en' ? 'Nominate for National Khidmat Award' : 'राष्ट्रीय खिदमत सम्मान के लिए नामांकन'}</h3>
                        <span className="text-[11px] text-slate-500 block">Khidmat Honour Board Verification Committee</span>
                      </div>
                    </div>
                    <button onClick={() => setShowNominateModal(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-xl cursor-pointer">✕</button>
                  </div>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(currentLanguage === 'en' ? `🎉 Nomination Submitted Successfully for "${nomForm.nomineeName}"!\nThe Central Audit Desk will review the nominee's geotagged seva hours and contact you.` : `🎉 नामांकन सफलतापूर्वक जमा किया गया: "${nomForm.nomineeName}"!`);
                    setShowNominateModal(false);
                  }} className="space-y-4 text-xs font-medium text-slate-700">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Nominee Full Name & Volunteer ID' : 'उम्मीदवार का नाम और स्वयंसेवक आईडी'} *</label>
                      <input required type="text" value={nomForm.nomineeName} onChange={(e) => setNomForm({...nomForm, nomineeName: e.target.value})} placeholder="e.g. Janab Mohd. Zaid (VOL-2026-8890)" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#004B23]" />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Award Category' : 'पुरस्कार श्रेणी'} *</label>
                      <select value={nomForm.category} onChange={(e) => setNomForm({...nomForm, category: e.target.value})} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-[#004B23]">
                        <option value="Khidmat-e-Qaum">Volunteer of the Year (Khidmat-e-Qaum)</option>
                        <option value="Khidmat-e-Insaniyat">Khidmat-e-Insaniyat Humanitarian Award</option>
                        <option value="Community Champion">Community Champion of the Quarter</option>
                        <option value="Green Warrior">Green Warrior Eco Leadership Award</option>
                        <option value="Emergency SOS">Emergency SOS Life Saver Award</option>
                        <option value="Senior Care">Senior Citizen Care & Pension Mentor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Justification & Summary of Impact' : 'प्रभाव और सेवा कार्यों का विवरण'} *</label>
                      <textarea required rows={3} value={nomForm.justification} onChange={(e) => setNomForm({...nomForm, justification: e.target.value})} placeholder="Describe the nominee's specific contributions, emergency rescues, or leadership in medical/tree camps..." className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#004B23]"></textarea>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{currentLanguage === 'en' ? 'Your Name & Contact Number (Nominator)' : 'आपका नाम और फोन नंबर (नामांकनकर्ता)'} *</label>
                      <input required type="text" value={nomForm.nominatorPhone} onChange={(e) => setNomForm({...nomForm, nominatorPhone: e.target.value})} placeholder="e.g. Janab Saleem Ahmad - +91 94150XXXXX" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#004B23]" />
                    </div>
                    <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                      <button type="button" onClick={() => setShowNominateModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition cursor-pointer">Cancel</button>
                      <button type="submit" className="px-5 py-2 bg-[#004B23] hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition shadow cursor-pointer">Submit Official Nomination</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'leaderboard' && <Leaderboard currentLanguage={currentLanguage} />}

        {activeTab === 'monthly' && <MonthlyRecognitionView currentLanguage={currentLanguage} />}

        {activeTab === 'digital' && <DigitalAppreciationView currentLanguage={currentLanguage} />}
      </div>
    </div>
  );
}
