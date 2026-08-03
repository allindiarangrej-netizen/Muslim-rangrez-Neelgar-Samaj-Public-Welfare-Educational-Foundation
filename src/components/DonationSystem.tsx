import React, { useState, useEffect } from 'react';
import { Gift, Heart, ShieldCheck, Info, CheckCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface DonationSystemProps {
  currentLanguage: Language;
  defaultFund?: string;
}

interface FundData {
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  raised: number;
  target: number;
  percentage: number;
}

export default function DonationSystem({ currentLanguage, defaultFund = 'education' }: DonationSystemProps) {
  const [activeSection, setActiveSection] = useState<'give' | 'campaigns'>('give');
  const [activeFund, setActiveFund] = useState<string>(defaultFund);
  const [showNoticeModal, setShowNoticeModal] = useState<boolean>(false);

  useEffect(() => {
    if (defaultFund) {
      setActiveFund(defaultFund);
    }
  }, [defaultFund]);

  // Central Fund Ledger Dictionary
  const fundProgress: Record<string, FundData> = {
    education: {
      titleEn: 'National Education & Scholarship Fund',
      titleHi: 'राष्ट्रीय शिक्षा एवं छात्रवृत्ति कोष',
      descEn: 'Sponsoring higher education tuition fees and standard competitive coaching for brilliant community students.',
      descHi: 'मेधावी छात्रों के लिए उच्च शिक्षा शिक्षण शुल्क और प्रतियोगी कोचिंग का प्रायोजन।',
      raised: 350000,
      target: 500000,
      percentage: 70
    },
    medical: {
      titleEn: 'Emergency Medical & Health Aid',
      titleHi: 'आपातकालीन चिकित्सा एवं स्वास्थ्य सहायता',
      descEn: 'Direct hospital settlements, diagnostic tests, surgeries, and critical illness support for poor families.',
      descHi: 'गरीब परिवारों के लिए प्रत्यक्ष अस्पताल निपटान, नैदानिक ​​परीक्षण, सर्जरी और गंभीर बीमारी सहायता।',
      raised: 280000,
      target: 400000,
      percentage: 70
    },
    general: {
      titleEn: 'General Sadaqah & Livelihood Upliftment',
      titleHi: 'सामान्य सदक़ा एवं आजीविका उत्थान',
      descEn: 'Welfare grants, small artisan handloom setups, micro-finance and widowed family support.',
      descHi: 'कल्याणकारी अनुदान, छोटे कारीगर हथकरघा और विधवा परिवार सहायता।',
      raised: 450000,
      target: 600000,
      percentage: 75
    }
  };

  const handleDonateClick = () => {
    setShowNoticeModal(true);
  };

  return (
    <div className="py-12 bg-white" id="donation_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'SOCIALLY ACCOUNTABLE STEWARDSHIP' : 'पारदर्शी समाजी तआवुन (दान) कोष'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
            {currentLanguage === 'en' ? 'Strategic Giving Engine & Allocation Tracking' : 'फ़लाही तआवुन और पारदर्शी आवंटन ट्रैकर'}
          </h2>
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs max-w-2xl mx-auto text-emerald-950 font-serif font-bold shadow-sm">
            {currentLanguage === 'en' ? 'All community welfare initiatives are managed by:' : 'सभी सामाजिक कल्याण पहल प्रबंधन:'}
            <div className="text-sm tracking-wide text-emerald-900 mt-1 uppercase font-serif font-extrabold">
              Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
            </div>
            <div className="text-[11px] text-emerald-700 font-sans mt-1">
              {currentLanguage === 'en' ? 'Govt. Registered Society' : 'सरकारी रजिस्टर्ड सोसाइटी'}
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {currentLanguage === 'en'
              ? 'Sponsor a student, support widow healthcare, or fund block printing machinery with 100% transparent bookkeeping.'
              : 'वज़ीफ़ा (स्कॉलरशिप) जारी करवाएं, ज़रूरतमंदों के इलाज में तआवुन करें या 100% पारदर्शी बहीखाता के साथ लघु उद्योगों को बढ़ावा दें।'}
          </p>
        </div>

        {/* Notice Banner - Professional Placeholder */}
        <div className="max-w-3xl mx-auto mb-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 sm:p-6 text-amber-900 flex items-start space-x-4 shadow-sm">
          <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-extrabold text-sm sm:text-base text-amber-950">
              {currentLanguage === 'en' ? 'Donation Portal Status Notice' : 'दान पोर्टल स्थिति सूचना'}
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Donation gateway is currently under development and will be activated after verification. Online donation facilities will be available after the official launch of the portal.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-amber-800 border-t border-amber-200/60 mt-2">
              Bank Name: Baba ji ka thullu
            </div>
          </div>
        </div>

        {/* Section switcher */}
        <div className="flex justify-center border-b border-gray-200 pb-6 gap-3 mb-8">
          <button
            onClick={() => setActiveSection('give')}
            className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition flex items-center gap-2 shadow cursor-pointer ${
              activeSection === 'give'
                ? 'bg-[#004B23] text-[#FFD54A] shadow-md scale-105 border-2 border-[#FFD54A]'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Gift className="w-4 h-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Contribute (Zakat, Sadaqah & Funds)' : 'दान / सहयोग करें (ज़कात, सदक़ा व फंड)'}</span>
          </button>
          <button
            onClick={() => setActiveSection('campaigns')}
            className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition flex items-center gap-2 shadow cursor-pointer ${
              activeSection === 'campaigns'
                ? 'bg-[#004B23] text-[#FFD54A] shadow-md scale-105 border-2 border-[#FFD54A]'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Active Causes & Campaigns' : 'सक्रिय अभियान एवं योजनाएं'}</span>
          </button>
        </div>

        {activeSection === 'give' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Col: Fund Selector */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(fundProgress).map(([key, fund]) => (
                  <button
                    key={key}
                    onClick={() => setActiveFund(key)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer relative overflow-hidden ${
                      activeFund === key
                        ? 'border-[#004B23] bg-emerald-50/60 shadow-md ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold uppercase text-[#004B23]">
                        {key === 'education' ? 'Education' : key === 'medical' ? 'Healthcare' : 'General'}
                      </span>
                      {activeFund === key && <CheckCircle className="w-4 h-4 text-[#004B23]" />}
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 line-clamp-1">
                      {currentLanguage === 'en' ? fund.titleEn : fund.titleHi}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                      {currentLanguage === 'en' ? fund.descEn : fund.descHi}
                    </p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#004B23] h-1.5 rounded-full"
                        style={{ width: `${fund.percentage}%` }}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Fund Progress Card */}
              {fundProgress[activeFund] && (
                <div className="bg-gradient-to-br from-slate-900 to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <span className="text-xs font-bold text-[#FFD54A] uppercase tracking-wider block mb-1">
                        Selected Giving Fund
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {currentLanguage === 'en'
                          ? fundProgress[activeFund].titleEn
                          : fundProgress[activeFund].titleHi}
                      </h3>
                    </div>
                    <button
                      onClick={handleDonateClick}
                      className="px-6 py-3 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <Heart className="w-4 h-4 text-red-600 fill-current" />
                      <span>{currentLanguage === 'en' ? 'Donate Now' : 'दान करें'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2">
                    <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
                      <div className="text-xs text-slate-400 font-medium mb-1">Target Required</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono">₹{fundProgress[activeFund].target.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
                      <div className="text-xs text-slate-400 font-medium mb-1">Pledged So Far</div>
                      <div className="text-lg font-bold text-amber-400 font-mono">₹{fundProgress[activeFund].raised.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
                      <div className="text-xs text-slate-400 font-medium mb-1">Fund Allocation</div>
                      <div className="text-lg font-bold text-cyan-400 font-mono">{fundProgress[activeFund].percentage}% Complete</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLanguage === 'en'
                      ? fundProgress[activeFund].descEn
                      : fundProgress[activeFund].descHi}
                  </p>
                </div>
              )}
            </div>

            {/* Right Col: Donation Action Box */}
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-5 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#004B23] text-[#FFD54A] flex items-center justify-center font-bold">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {currentLanguage === 'en' ? 'Support Community Welfare' : 'सामुदायिक कल्याण सहयोग'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {currentLanguage === 'en' ? 'Official Rangrez Community Portal' : 'आधिकारिक रंगरेज कम्युनिटी पोर्टल'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="font-extrabold text-slate-800">
                    {currentLanguage === 'en' ? 'Layout & Development Field:' : 'विकास एवं लेआउट फील्ड:'}
                  </div>
                  <div className="text-emerald-950 font-mono font-bold bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                    Bank Name: Baba ji ka thullu
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs space-y-1.5 text-emerald-900">
                  <div className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>{currentLanguage === 'en' ? 'Official Portal Notice' : 'आधिकारिक पोर्टल सूचना'}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-emerald-800">
                    Online donation facilities will be available after the official launch of the portal.
                  </p>
                </div>

                <button
                  onClick={handleDonateClick}
                  className="w-full py-4 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer border border-emerald-800"
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                  <span>{currentLanguage === 'en' ? 'Proceed to Contribute' : 'योगदान हेतु आगे बढ़ें'}</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Campaigns Section */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: '1',
                title: 'Higher Education Merit Scholarships 2026',
                desc: 'Supporting top performing engineering, medical, and civil service aspirants from low-income households.',
                category: 'Education'
              },
              {
                id: '2',
                title: 'Dialysis & Emergency Hospital Aid Drive',
                desc: 'Providing financial relief for critical healthcare treatments, dialysis sessions, and emergency surgeries.',
                category: 'Healthcare'
              },
              {
                id: '3',
                title: 'Handloom Printing Artisan Empowerment',
                desc: 'Equipment grants and modern dyeing machinery for traditional Rangrez artisan families.',
                category: 'Livelihood'
              }
            ].map((camp) => (
              <div key={camp.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition space-y-4">
                <span className="px-3 py-1 bg-emerald-100 text-[#004B23] text-[10px] font-extrabold uppercase tracking-wider rounded-full inline-block">
                  {camp.category}
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base">{camp.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{camp.desc}</p>
                <button
                  onClick={handleDonateClick}
                  className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
                  <span>{currentLanguage === 'en' ? 'Support Campaign' : 'अभियान का समर्थन करें'}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* REQUIRED DONATION NOTICE MODAL */}
        {showNoticeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setShowNoticeModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full cursor-pointer transition"
              >
                ✕
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#004B23] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600 fill-current animate-pulse" />
              </div>

              <h3 className="text-xl font-serif font-extrabold text-slate-900 mb-2">
                {currentLanguage === 'en' ? 'Official Portal Notice' : 'आधिकारिक पोर्टल सूचना'}
              </h3>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
                <p className="text-sm font-bold text-emerald-950 leading-relaxed">
                  Donation services will be available after the official launch.
                </p>
                <p className="text-xs text-emerald-800 mt-2">
                  Donation gateway is currently under development and will be activated after verification.
                </p>
              </div>

              <button
                onClick={() => setShowNoticeModal(false)}
                className="w-full py-3 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer"
              >
                {currentLanguage === 'en' ? 'Close Notice' : 'सूचना बंद करें'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
