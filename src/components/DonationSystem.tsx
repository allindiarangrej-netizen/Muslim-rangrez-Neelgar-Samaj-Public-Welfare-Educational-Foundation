import React, { useState } from 'react';
import { Gift, CreditCard, Landmark, CheckCircle, ShieldCheck, Download, Award, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface DonationSystemProps {
  currentLanguage: Language;
}

export default function DonationSystem({ currentLanguage }: DonationSystemProps) {
  const [activeFund, setActiveFund] = useState<'education' | 'medical' | 'general'>('education');
  const [donationTier, setDonationTier] = useState<string>('Monthly'); // Monthly vs One-Time
  const [donationAmount, setDonationAmount] = useState<number>(2100);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [donorDetails, setDonorDetails] = useState({ name: '', phone: '', email: '', pan: '' });
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');

  // Fund allocation targets progress meters
  const fundProgress = {
    education: { titleEn: 'Higher Education Scholar Fund', titleHi: 'उच्च शिक्षा छात्रवृत्ति कोष', target: 500000, raised: 320000, percentage: 64 },
    medical: { titleEn: 'Emergency Medical Crisis Fund', titleHi: 'आपातकालीन चिकित्सा आपातकाल कोष', target: 300000, raised: 210000, percentage: 70 },
    general: { titleEn: 'Community Development Core Fund', titleHi: 'महासभा सामान्य विकास कोष', target: 800000, raised: 450000, percentage: 56 }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorDetails.name || !donorDetails.phone) return;
    setCheckoutStep('success');
  };

  return (
    <div className="py-12 bg-white" id="donation_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'SOCIALLY ACCOUNTABLE STEWARDSHIP' : 'पारदर्शी सामाजिक दान कोष'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Strategic Giving Engine & Allocation Tracking' : 'कल्याणकारी दान और पारदर्शी आवंटन ट्रैकर'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Sponsor a student, support widow healthcare, or fund block printing machinery with 100% transparent bookkeeping.'
              : 'छात्रवृत्ति प्रायोजित करें, जरूरतमंदों के इलाज में सहयोग करें या 100% पारदर्शी बहीखाता के साथ लघु उद्योगों को बढ़ावा दें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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
                {currentLanguage === 'en' ? 'Sustain Monthly Support' : 'मासिक सहयोग'}
              </button>

              <button
                onClick={() => setDonationTier('One-Time')}
                className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                  donationTier === 'One-Time'
                    ? 'bg-[#004B23] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {currentLanguage === 'en' ? 'One-Time Solidarity Giving' : 'एक-बारगी दान'}
              </button>
            </div>

            {/* Fund Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="donation_funds">
              <div
                onClick={() => setActiveFund('education')}
                className={`p-4 rounded-lg border-2 cursor-pointer transition text-center space-y-2 ${
                  activeFund === 'education'
                    ? 'border-[#004B23] bg-emerald-50/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h4 className="text-xs font-bold text-gray-800">{currentLanguage === 'en' ? 'Education Scholar' : 'शिक्षा छात्रवृत्ति'}</h4>
                <p className="text-[10px] text-gray-500">{currentLanguage === 'en' ? 'Support primary and higher academic costs' : 'बच्चों की पढ़ाई व कॉलेज खर्च का वहन'}</p>
              </div>

              <div
                onClick={() => setActiveFund('medical')}
                className={`p-4 rounded-lg border-2 cursor-pointer transition text-center space-y-2 ${
                  activeFund === 'medical'
                    ? 'border-[#004B23] bg-emerald-50/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h4 className="text-xs font-bold text-gray-800">{currentLanguage === 'en' ? 'Medical Emergency' : 'चिकित्सा सहायता'}</h4>
                <p className="text-[10px] text-gray-500">{currentLanguage === 'en' ? 'Cover diagnostics & operation costs' : 'गंभीर बीमारियों के इलाज में सहयोग'}</p>
              </div>

              <div
                onClick={() => setActiveFund('general')}
                className={`p-4 rounded-lg border-2 cursor-pointer transition text-center space-y-2 ${
                  activeFund === 'general'
                    ? 'border-[#004B23] bg-emerald-50/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h4 className="text-xs font-bold text-gray-800">{currentLanguage === 'en' ? 'Community Projects' : 'महासभा विकास कोष'}</h4>
                <p className="text-[10px] text-gray-500">{currentLanguage === 'en' ? 'Collective marriage starter kits' : 'सामूहिक निकाह और सहायता योजनाएं'}</p>
              </div>
            </div>

            {/* Custom Amount Slider Selector */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                {currentLanguage === 'en' ? 'Select Contribution Amount (रू)' : 'सहयोग राशि का चयन करें'}
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
              <Gift className="h-5 w-5 text-[#D4AF37]" />
              <span>
                {currentLanguage === 'en'
                  ? `Proceed to Contribute ₹${donationAmount.toLocaleString()}`
                  : `₹${donationAmount.toLocaleString()} सहयोग राशि का भुगतान करें`}
              </span>
            </button>

          </div>

          {/* Column Right: Allocation transparency trackers */}
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6" id="donation_transparency_panel">
            
            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Landmark className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Live Transparent Fund Ledger' : 'सक्रिय निधि लाइव खाता विवरण'}</span>
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
                      className="h-full bg-gradient-to-r from-[#004B23] to-[#D4AF37] rounded-full transition-all duration-1000"
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
                  : 'इनकम टैक्स एक्ट की धारा 80जी के तहत सभी दान कर-मुक्त हैं। सहयोग पूर्ण होने पर तुरंत 80G रसीद डाउनलोड करने का लिंक मिलता है।'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Checkout Modal with 80G Exemption Receipt PDF simulator */}
      {checkoutModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex justify-center items-center p-4 animate-fadeIn" id="checkout_modal_container">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border-t-8 border-[#004B23]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide">
                {currentLanguage === 'en' ? 'Solidarity Checkout Portal' : 'सुरक्षित भुगतान पोर्टल'}
              </h3>
              <button onClick={() => setCheckoutModal(false)} className="text-gray-400 hover:text-gray-600 font-extrabold text-sm">✕</button>
            </div>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Contributor Name' : 'सहयोगकर्ता का नाम'}
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
                    {currentLanguage === 'en' ? 'Solidarity Contribution Confirmed!' : 'सहयोग राशि सफलतापूर्वक प्राप्त!'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'en' ? 'We have compiled your 80G tax receipt successfully.' : 'हमने आपकी 80G आयकर कर-छूट रसीद संकलित कर ली है।'}
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
                    {currentLanguage === 'en' ? 'Close Window' : 'खिड़की बंद करें'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
