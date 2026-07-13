import React, { useState, useEffect } from 'react';
import { Gift, CreditCard, Landmark, CheckCircle, ShieldCheck, Download, Award, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { getSupabase } from '../lib/supabaseClient';

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

  useEffect(() => {
    if (defaultFund) {
      setActiveFund(defaultFund);
    }
  }, [defaultFund]);

  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Core missing states for production donation flows
  const [donationTier, setDonationTier] = useState<'Monthly' | 'One-Time'>('Monthly');
  const [donationAmount, setDonationAmount] = useState<number>(1100);
  const [checkoutModal, setCheckoutModal] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  const [donorDetails, setDonorDetails] = useState({ name: '', phone: '', email: '', pan: '' });
  const [showReliefModal, setShowReliefModal] = useState<boolean>(false);
  const [reliefForm, setReliefForm] = useState({ name: '', phone: '', city: '', aidType: 'medical', amountNeeded: '', details: '' });

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
      descEn: 'Welfare grants, small artisan handloom setup setups, micro-finance and widowed family support.',
      descHi: 'कल्याणकारी अनुदान, छोटे कारीगर हथकरघा ...',
      raised: 450000,
      target: 600000,
      percentage: 75
    }
  };

  useEffect(() => {
    async function fetchCampaigns() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('donation_campaigns').select('*');
        if (error) {
          console.error('Error fetching campaigns:', error);
        } else {
          setCampaigns(data || []);
        }
      } catch (err) {
        console.error('Exception fetching campaigns:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCampaigns();
  }, []);

  // Effect to auto-hide the toast after 5 seconds
  useEffect(() => {
    if (successToast) {
      const timer = setTimeout(() => {
        setSuccessToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successToast]);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorDetails.name || !donorDetails.phone) return;

    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        await supabase.from('donations').insert({
          donor_name: donorDetails.name,
          donor_phone: donorDetails.phone,
          donor_email: donorDetails.email || null,
          donor_pan: donorDetails.pan || null,
          amount: donationAmount,
          fund_type: activeFund,
          user_id: user?.id || null
        });
      } catch (err) {
        console.error('Supabase donation record failed:', err);
      }
    }
    setCheckoutStep('success');
  };

  return (
    <div className="py-12 bg-white" id="donation_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'SOCIALLY ACCOUNTABLE STEWARDSHIP' : 'पारदर्शी समाजी तआवुन (दान) कोष'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Strategic Giving Engine & Allocation Tracking' : 'फ़लाही तआवुन और पारदर्शी आवंटन ट्रैकर'}
          </h2>
          <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-xs max-w-2xl mx-auto text-emerald-950 font-serif font-bold">
            {currentLanguage === 'en' ? 'All contributions are received by:' : 'सभी तआवुन (सहयोग) निम्न संस्था द्वारा प्राप्त किए जाते हैं:'}
            <div className="text-sm tracking-wide text-emerald-900 mt-1 uppercase font-serif">
              Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
            </div>
            <div className="text-[10px] text-gray-500 font-sans mt-1">
              {currentLanguage === 'en' ? 'Govt. Registered Society • Section 80G Tax Deductions Active' : 'सरकारी रजिस्टर्ड सोसाइटी • धारा 80G टैक्स छूट सक्रिय'}
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Sponsor a student, support widow healthcare, or fund block printing machinery with 100% transparent bookkeeping.'
              : 'वज़ीफ़ा (स्कॉलरशिप) जारी करवाएं, ज़रूरतमंदों के इलाज में तआवुन करें या 100% पारदर्शी बहीखाता के साथ लघु उद्योगों को बढ़ावा दें।'}
          </p>
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
            <Award className="w-4 h-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Charity Campaigns & Beneficiary Stories' : 'राहत अभियान एवं लाभार्थी कहानियां'}</span>
          </button>
        </div>

        {activeSection === 'campaigns' ? (
          <div className="space-y-8 animate-fadeIn" id="charity_campaigns_panel">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { titleEn: 'Ramzan Ration & Food Distribution Drive', titleHi: 'रमजान राशन एवं खाद्य वितरण अभियान', descEn: 'Monthly ration kits distributed to 500+ needy widow and daily wager households across 12 districts.', descHi: '12 जिलों में 500+ जरूरतमंद विधवा और मजदूर परिवारों को मासिक राशन किट का वितरण।', raised: 420000, target: 500000, category: 'Food Distribution', donors: 184 },
                { titleEn: 'Collective Marriage Starter Kits (Ijtima)', titleHi: 'सामूहिक विवाह स्टार्टर किट (इज्तिमा)', descEn: 'Providing essential household items, utensils, sewing machines, and financial grants for 25 orphaned girls.', descHi: '25 यतीम बेटियों के निकाह हेतु आवश्यक घरेलू सामान, सिलाई मशीन और आर्थिक अनुदान।', raised: 610000, target: 800000, category: 'Marriage Assistance', donors: 240 },
                { titleEn: 'Emergency Dialysis & Surgery Grant', titleHi: 'आपातकालीन डायलिसिस एवं सर्जरी अनुदान', descEn: 'Direct hospital fee settlement for critical kidney transplant and pediatric heart surgery patients.', descHi: 'गंभीर किडनी प्रत्यारोपण और बाल हृदय सर्जरी रोगियों के लिए अस्पताल शुल्क का सीधा भुगतान।', raised: 210000, target: 300000, category: 'Medical Assistance', donors: 128 },
                { titleEn: 'Orphan Child Complete Care & Education', titleHi: 'यतीम बाल संपूर्ण देखभाल एवं शिक्षा', descEn: 'Sponsoring school fees, uniform, books, and monthly nutrition stipends for 120 community orphans.', descHi: '120 यतीम बच्चों के स्कूल शुल्क, यूनिफॉर्म, किताबें और मासिक पोषण वज़ीफ़ा।', raised: 290000, target: 400000, category: 'Orphan Support', donors: 195 },
                { titleEn: 'Widow Monthly Pension & Livelihood Aid', titleHi: 'विधवा मासिक पेंशन एवं स्वरोजगार सहायता', descEn: 'Monthly cash transfers of ₹1,500 and handloom/block printing setup grants for self-reliance.', descHi: 'आत्मनिर्भरता के लिए ₹1,500 का मासिक नकद हस्तांतरण और ब्लॉक प्रिंटिंग सेटअप अनुदान।', raised: 380000, target: 500000, category: 'Widow Assistance', donors: 210 },
                { titleEn: 'Divyang (Disability) Assistive Tools & Aid', titleHi: 'दिव्यांग सहायक उपकरण एवं पुनर्वास', descEn: 'Distribution of motorized wheelchairs, hearing aids, artificial limbs, and monthly rehabilitation care.', descHi: 'मोटराइज्ड व्हीलचेयर, श्रवण यंत्र, कृत्रिम अंग और मासिक पुनर्वास देखभाल का वितरण।', raised: 180000, target: 250000, category: 'Disability Support', donors: 92 },
              ].map((camp, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 bg-emerald-100 text-[#004B23] font-bold text-[10px] uppercase rounded-full tracking-wider">{camp.category}</span>
                      <span className="text-xs font-mono text-gray-500">{camp.donors} Donors</span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#0B132B]">{currentLanguage === 'en' ? camp.titleEn : camp.titleHi}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{currentLanguage === 'en' ? camp.descEn : camp.descHi}</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <div className="flex justify-between text-xs font-bold font-mono">
                      <span className="text-[#004B23]">₹{camp.raised.toLocaleString()} Raised</span>
                      <span className="text-gray-400">Target: ₹{camp.target.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#004B23] to-[#FFD54A] rounded-full" style={{ width: `${Math.round((camp.raised / camp.target) * 100)}%` }} />
                    </div>
                    <button
                      onClick={() => { setActiveSection('give'); setActiveFund('general'); }}
                      className="w-full mt-3 py-2 bg-[#0B132B] hover:bg-[#142244] text-[#FFD54A] font-bold text-xs uppercase tracking-wider rounded transition cursor-pointer"
                    >
                      {currentLanguage === 'en' ? 'Contribute to Campaign' : 'इस अभियान में सहयोग करें'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Beneficiary Stories & Reports Banner */}
            <div className="bg-gradient-to-r from-[#004B23] to-[#0B132B] rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-[#FFD54A] flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#FFD54A]" />
                    <span>{currentLanguage === 'en' ? 'Transparent Beneficiary Impact & Annual Reports' : 'पारदर्शी लाभार्थी प्रभाव एवं वार्षिक प्रगति रिपोर्ट'}</span>
                  </h3>
                  <p className="text-xs text-gray-300 max-w-2xl">
                    {currentLanguage === 'en' ? 'Read verified field reports from our social audit teams. Over ₹45 Lakhs disbursed across 1,840 families in the last fiscal year with zero administrative overhead.' : 'हमारी सामाजिक ऑडिट टीमों की सत्यापित क्षेत्र रिपोर्ट पढ़ें। पिछले वित्तीय वर्ष में 1,840 परिवारों में ₹45 लाख से अधिक की सहायता राशि वितरित की गई।'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const csv = "data:text/csv;charset=utf-8,Campaign Name,Category,Beneficiaries,Amount Disbursed,Audit Status\nRamzan Food Drive,Food Distribution,520 Families,₹4,20,000,Verified & Disbursed\nCollective Marriage Kit,Marriage Assistance,25 Girls,₹6,10,000,Verified & Disbursed\nOrphan Complete Care,Orphan Support,120 Children,₹2,90,000,Verified & Disbursed\nWidow Monthly Pension,Widow Assistance,210 Widows,₹3,80,000,Verified & Disbursed";
                    const link = document.createElement("a");
                    link.setAttribute("href", encodeURI(csv));
                    link.setAttribute("download", `Rangrez_Campaign_Impact_Report_${new Date().toISOString().slice(0,10)}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-5 py-2.5 bg-[#FFD54A] hover:bg-yellow-400 text-[#0B132B] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Download Full Audit Report' : 'संपूर्ण ऑडिट रिपोर्ट डाउनलोड करें'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
          
          {/* Column Left: Giving Form Panel */}
          <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6" id="donation_form_panel">
            
            {/* Toggle Tier */}
            <div className="flex justify-center border-b border-gray-200 pb-4 gap-4" id="donation_tiers">
              <button
                onClick={() => setDonationTier('Monthly')}
                className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                  donationTier === 'Monthly'
                    ? 'bg-[#004B23] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {currentLanguage === 'en' ? 'Sustain Monthly Support' : 'माहवारी (मासिक) तआवुन'}
              </button>

              <button
                onClick={() => setDonationTier('One-Time')}
                className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                  donationTier === 'One-Time'
                    ? 'bg-[#004B23] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {currentLanguage === 'en' ? 'One-Time Solidarity Giving' : 'एक-बारगी (एक-मुश्त) तआवुन'}
              </button>
            </div>

            {/* Fund Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="donation_funds">
              {Object.entries(fundProgress).map(([key, data]) => (
                <div
                  key={key}
                  onClick={() => setActiveFund(key)}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition text-center space-y-1.5 ${
                    activeFund === key
                      ? 'border-[#004B23] bg-emerald-50/50 shadow-md scale-[1.02]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <h4 className="text-xs font-extrabold text-gray-900 leading-tight">{currentLanguage === 'en' ? data.titleEn : data.titleHi}</h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2 leading-normal">{currentLanguage === 'en' ? data.descEn : data.descHi}</p>
                </div>
              ))}
            </div>

            {/* Custom Amount Slider Selector */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Select Contribution Amount (रू)' : 'तआवुन (सहयोग) राशि का चयन करें'}
              </label>
              
              <div className="grid grid-cols-4 gap-3 text-center font-mono">
                {[1100, 2100, 5100, 11000].map((amt) => (
                  <div
                    key={amt}
                    onClick={() => setDonationAmount(amt)}
                    className={`p-3 rounded-lg border cursor-pointer font-bold text-sm transition ${
                      donationAmount === amt
                        ? 'bg-[#004B23] text-white border-transparent'
                        : 'bg-white border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    ₹{amt.toLocaleString()}
                  </div>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-gray-400 font-bold text-sm">₹</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                  className="w-full bg-white border border-gray-200 text-xs p-3.5 pl-8 rounded font-mono font-bold focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>
            </div>

            <button
              onClick={() => { setCheckoutStep('form'); setCheckoutModal(true); }}
              className="w-full py-4 bg-[#004B23] hover:bg-[#00381a] text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg transition flex items-center justify-center space-x-2"
            >
              <Gift className="h-5 w-5 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en'
                  ? `Proceed to Contribute ₹${donationAmount.toLocaleString()}`
                  : `₹${donationAmount.toLocaleString()} तआवुन (सहयोग) राशि अदा करें`}
              </span>
            </button>

          </div>

          {/* Column Right: Allocation transparency trackers */}
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6" id="donation_transparency_panel">
            
            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Landmark className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Live Transparent Fund Ledger' : 'सक्रिय फंड लाइव बहीखाता (खाता विवरण)'}</span>
              </h3>
            </div>

            <div className="space-y-6">
              {Object.entries(fundProgress).map(([key, data]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-900">{currentLanguage === 'en' ? data.titleEn : data.titleHi}</span>
                    <span className="font-mono font-bold text-[#004B23]">{data.percentage}%</span>
                  </div>

                  {/* Progressive Bar track */}
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#004B23] to-[#F4C430] rounded-full transition-all duration-1000"
                      style={{ width: `${data.percentage}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <span>Raised: ₹{data.raised.toLocaleString()}</span>
                    <span>Target: ₹{data.target.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-start space-x-3 text-xs text-gray-500 bg-white p-4 rounded border border-gray-100">
              <ShieldCheck className="h-5 w-5 text-[#004B23] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {currentLanguage === 'en'
                  ? 'All funds are tax-exempt under Section 80G of the Income Tax Act. Instant receipts with PAN mapping are printed upon completion.'
                  : 'इनकम टैक्स एक्ट की धारा 80जी के तहत सभी दान (तआवुन) टैक्स-फ़्री हैं। तआवुन मुकम्मल होने पर तुरंत 80G रसीद डाउनलोड करने का लिंक मिलता है।'}
              </p>
            </div>

            {/* Beneficiary Assistance & Transparent Utilization Banner */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-between items-center bg-[#0B132B] text-white p-5 rounded-xl shadow-md border border-gray-800">
              <div className="space-y-1">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'Need Financial Assistance or Relief Aid?' : 'क्या आपको या किसी परिवार को आर्थिक सहायता की आवश्यकता है?'}</span>
                </h4>
                <p className="text-xs text-gray-300">
                  {currentLanguage === 'en' ? 'Apply for medical grants, educational scholarships, or emergency livelihood relief from our Zakat & Charity funds.' : 'ज़कात व सदक़ा कोष से तिब्बी (चिकित्सा), तालीमी या आपातकालीन सहायता के लिए आवेदन करें।'}
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowReliefModal(true)}
                  className="px-4 py-2 bg-[#FFD54A] hover:bg-yellow-400 text-[#0B132B] font-extrabold text-xs rounded-lg shadow transition whitespace-nowrap cursor-pointer"
                >
                  {currentLanguage === 'en' ? 'Apply for Aid' : 'सहायता हेतु आवेदन'}
                </button>
                <button
                  onClick={() => {
                    const csv = "data:text/csv;charset=utf-8,Month,Fund Category,Amount Allocated,Beneficiaries Benefited,Status\nJune 2026,Medical Crisis Fund,₹1,45,000,12 Patients,Disbursed\nMay 2026,Education Scholarships,₹2,10,000,28 Students,Disbursed\nApril 2026,Widow Pension & Ration,₹95,000,35 Families,Disbursed";
                    const link = document.createElement("a");
                    link.setAttribute("href", encodeURI(csv));
                    link.setAttribute("download", `Rangrez_Charity_Utilization_Report_${new Date().toISOString().slice(0,10)}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs rounded-lg transition whitespace-nowrap cursor-pointer flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Audit Report' : 'ऑडिट रिपोर्ट'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
        )}

      </div>

      {/* Checkout Modal with 80G Exemption Receipt PDF simulator */}
      {checkoutModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex justify-center items-center p-4 animate-fadeIn" id="checkout_modal_container">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border-t-8 border-[#004B23]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide">
                {currentLanguage === 'en' ? 'Solidarity Checkout Portal' : 'महफ़ूज़ भुगतान पोर्टल'}
              </h3>
              <button onClick={() => setCheckoutModal(false)} className="text-gray-400 hover:text-gray-600 font-extrabold text-sm">✕</button>
            </div>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Contributor Name' : 'तआवुनकर्ता (सहयोगकर्ता) का नाम'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Salim Rangrez"
                      value={donorDetails.name}
                      onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      value={donorDetails.phone}
                      onChange={(e) => setDonorDetails({ ...donorDetails, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Email Address' : 'ईमेल पता'}
                    </label>
                    <input
                      type="email"
                      placeholder="salim@example.com"
                      value={donorDetails.email}
                      onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'PAN Card Number (For 80G Exemption)' : 'पैन कार्ड नंबर (80G आयकर छूट हेतु)'}
                    </label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      value={donorDetails.pan}
                      onChange={(e) => setDonorDetails({ ...donorDetails, pan: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none uppercase font-mono font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition"
                >
                  {currentLanguage === 'en' ? 'Simulate Razorpay payment' : 'पेमेंट गेटवे सिमुलेशन शुरू करें'}
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-6" id="checkout_success_panel">
                <CheckCircle className="h-12 w-12 text-[#004B23] mx-auto animate-bounce" />
                
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Solidarity Contribution Confirmed!' : 'तआवुन (सहयोग) राशि सफलतापूर्वक हासिल हुई!'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'en' ? 'We have compiled your 80G tax receipt successfully.' : 'हमने आपकी 80G आयकर टैक्स छूट रसीद मुकम्मल कर ली है।'}
                  </p>
                </div>

                {/* Simulated 80G Tax Exemption Receipt visual mockup */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-left font-mono text-[10px] leading-relaxed max-w-xs mx-auto text-gray-600">
                  <div className="text-center border-b border-gray-200 pb-2 mb-2 font-bold text-gray-800">
                    <p>RANGREZ COMMUNITY BHARAT TRUST</p>
                    <p className="text-[8px] text-[#004B23]">SEC. 80G TAX INVOICE RECEIPT</p>
                  </div>
                  <p><strong>DONOR:</strong> {donorDetails.name.toUpperCase()}</p>
                  <p><strong>AMOUNT:</strong> ₹{donationAmount.toLocaleString()}</p>
                  <p><strong>FUND TYPE:</strong> {activeFund.toUpperCase()}_WELF</p>
                  <p><strong>PAN CODE:</strong> {donorDetails.pan.toUpperCase() || 'NOT_PROVIDED'}</p>
                  <p><strong>TXN CODE:</strong> TXN_RCB_2026_{Math.floor(100000 + Math.random() * 900000)}</p>
                  <div className="text-center border-t border-gray-200 pt-2 mt-2 font-bold text-[8px] text-[#004B23]">
                    ~ COMPLIANT DIGITAL RECEIPT ~
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => alert('Tax Exemption PDF printed in download pool!')}
                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold uppercase rounded flex items-center justify-center space-x-1"
                  >
                    <Download className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'Download 80G PDF' : 'रसीद डाउनलोड करें'}</span>
                  </button>
                  <button
                    onClick={() => setCheckoutModal(false)}
                    className="flex-1 py-2.5 bg-[#004B23] text-white text-xs font-bold uppercase rounded hover:bg-[#00381a] transition"
                  >
                    {currentLanguage === 'en' ? 'Close Window' : 'बंद करें'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Beneficiary Relief Application Modal */}
      {showReliefModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex justify-center items-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border-t-8 border-[#D4AF37]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Relief Aid Application Form' : 'आर्थिक सहायता एवं राहत आवेदन'}
                </h3>
              </div>
              <button onClick={() => setShowReliefModal(false)} className="text-gray-400 hover:text-gray-600 font-extrabold text-sm">✕</button>
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const supabase = getSupabase();
              if (supabase) {
                try {
                  const { data: { user } } = await supabase.auth.getUser();
                  await supabase.from('relief_requests').insert({
                    applicant_name: reliefForm.name,
                    applicant_phone: reliefForm.phone,
                    city_district: reliefForm.city,
                    aid_type: reliefForm.aidType,
                    amount_needed: parseFloat(reliefForm.amountNeeded) || 0,
                    details: reliefForm.details,
                    user_id: user?.id || null
                  });
                } catch (err) {
                  console.error('Supabase relief application failed:', err);
                }
              }
              const msg = currentLanguage === 'en' ? `Application received for ${reliefForm.name}. Our Zakat & Welfare Verification Committee will contact you at ${reliefForm.phone} within 48 hours after background verification.` : `आवेदन प्राप्त हुआ। हमारी कल्याण समिति 48 घंटे के भीतर आपसे संपर्क करेगी।`;
              setSuccessToast(msg);
              setShowReliefModal(false);
            }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Applicant Name' : 'आवेदक का नाम'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={reliefForm.name}
                    onChange={(e) => setReliefForm({ ...reliefForm, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91"
                    value={reliefForm.phone}
                    onChange={(e) => setReliefForm({ ...reliefForm, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'City / District' : 'शहर / जिला'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={reliefForm.city}
                    onChange={(e) => setReliefForm({ ...reliefForm, city: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Category of Aid' : 'सहायता की श्रेणी'} *
                  </label>
                  <select
                    value={reliefForm.aidType}
                    onChange={(e) => setReliefForm({ ...reliefForm, aidType: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37] font-semibold"
                  >
                    <option value="medical">{currentLanguage === 'en' ? 'Emergency Medical Crisis' : 'आपातकालीन चिकित्सा'}</option>
                    <option value="education">{currentLanguage === 'en' ? 'Higher Education Scholarship' : 'उच्च शिक्षा छात्रवृत्ति'}</option>
                    <option value="widow">{currentLanguage === 'en' ? 'Widow / Pension Support' : 'विधवा / पेंशन सहायता'}</option>
                    <option value="livelihood">{currentLanguage === 'en' ? 'Livelihood & Business Aid' : 'रोजगार एवं व्यापार सहायता'}</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Estimated Amount Needed (₹)' : 'अनुमानित आवश्यक राशि (₹)'} *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 50000"
                    value={reliefForm.amountNeeded}
                    onChange={(e) => setReliefForm({ ...reliefForm, amountNeeded: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Brief Circumstance / Details' : 'संक्षिप्त विवरण / परिस्थिति'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={currentLanguage === 'en' ? "Describe the emergency, hospital details, or educational institution requirements..." : "स्थिति, अस्पताल विवरण या शैक्षणिक संस्थान की आवश्यकता का वर्णन करें..."}
                    value={reliefForm.details}
                    onChange={(e) => setReliefForm({ ...reliefForm, details: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-[11px] text-amber-900 leading-relaxed">
                ℹ️ {currentLanguage === 'en' ? 'All requests are subject to strict scrutiny by the District Nodal Verification Team before funds are sanctioned directly to hospitals/colleges or verified accounts.' : 'सभी अनुरोधों की जिला नोडल सत्यापन टीम द्वारा जांच की जाती है, जिसके बाद ही अस्पताल/कॉलेज या सत्यापित खाते में राशि जारी की जाती है।'}
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReliefModal(false)}
                  className="px-5 py-2.5 border border-gray-200 text-gray-600 font-bold text-xs rounded-xl hover:bg-gray-50"
                >
                  {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0B132B] hover:bg-[#142244] text-[#FFD54A] font-extrabold text-xs rounded-xl shadow transition"
                >
                  {currentLanguage === 'en' ? 'Submit Aid Request' : 'आवेदन जमा करें'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Visual Success Toast */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#004B23] text-white border border-[#D4AF37] px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn max-w-sm" id="donation_toast">
          <span className="text-xl">✨</span>
          <div className="flex-1 text-xs font-bold leading-normal">
            {successToast}
          </div>
          <button onClick={() => setSuccessToast(null)} className="text-white/70 hover:text-white font-extrabold text-sm shrink-0">✕</button>
        </div>
      )}

    </div>
  );
}
