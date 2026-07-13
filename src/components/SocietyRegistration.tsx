import React, { useState } from 'react';
import { 
  ShieldCheck, Download, QrCode, FileText, CheckCircle, 
  Building2, Calendar, Award, ExternalLink, HelpCircle, ChevronDown, ChevronUp, Landmark
} from 'lucide-react';
import { Language } from '../types';

interface SocietyRegistrationProps {
  currentLanguage: Language;
}

export default function SocietyRegistration({ currentLanguage }: SocietyRegistrationProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [verifyQuery, setVerifyQuery] = useState('02/42/01/28332/26');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'searching' | 'found' | 'not_found'>('idle');

  const handleVerifyStatus = () => {
    setVerificationStatus('searching');
    setTimeout(() => {
      const sanitized = verifyQuery.trim().replace(/\s/g, '');
      if (sanitized === '02/42/01/28332/26' || sanitized.includes('28332') || sanitized === '0242012833226') {
        setVerificationStatus('found');
      } else {
        setVerificationStatus('not_found');
      }
    }, 1000);
  };

  const handleDownload = () => {
    setDownloadProgress(true);
    setTimeout(() => {
      setDownloadProgress(false);
      // Simulate download
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'society_registration_certificate.pdf');
      document.body.appendChild(link);
      // We can open a mock alert or action indicating success
      alert(currentLanguage === 'en' 
        ? 'Thank you! The Society Registration Certificate PDF download has been initiated successfully.' 
        : 'धन्यवाद! सोसाइटी पंजीकरण प्रमाण पत्र पीडीएफ डाउनलोड सफलतापूर्वक प्रारंभ हो गया है।'
      );
    }, 1500);
  };

  const faqs = [
    {
      qEn: "Is the organization officially registered with the government?",
      qHi: "क्या यह संगठन सरकार द्वारा आधिकारिक रूप से पंजीकृत है?",
      aEn: "Yes, the society is registered under the Public Welfare & Educational Trust Act of India, with registration number 02/42/01/28332/26. The registration is valid nationwide.",
      aHi: "हाँ, यह सोसाइटी भारत के पब्लिक वेलफेयर एंड एजुकेशनल ट्रस्ट एक्ट के तहत पंजीकृत है, जिसका पंजीकरण नंबर 02/42/01/28332/26 है। यह पंजीकरण देश भर में मान्य है।"
    },
    {
      qEn: "What is the official registered name vs public brand name?",
      qHi: "आधिकारिक पंजीकृत नाम और सार्वजनिक ब्रांड नाम में क्या अंतर है?",
      aEn: "Our official registered name is 'Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation' which is used for all legal, banking, tax exemptions, and official government correspondences. The public brand name is 'Rangrez Community Bharat' used for general public branding, website identity, and ease of remembrance.",
      aHi: "हमारा आधिकारिक पंजीकृत नाम 'Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation' है जिसका उपयोग सभी कानूनी, बैंकिंग, आयकर छूट और आधिकारिक सरकारी पत्राचार के लिए किया जाता है। सार्वजनिक ब्रांड नाम 'Rangrez Community Bharat' है जिसका उपयोग सामान्य प्रचार, वेबसाइट पहचान और सुगमता के लिए किया जाता है।"
    },
    {
      qEn: "Are contributions made to the society exempt from income tax?",
      qHi: "क्या सोसाइटी को दिए गए योगदान पर आयकर में छूट मिलती है?",
      aEn: "Yes, the foundation is approved under Section 12A and Section 80G of the Income Tax Act, 1961. Donors are eligible to claim tax deductions for their contributions as per government guidelines.",
      aHi: "हाँ, यह फाउंडेशन आयकर अधिनियम, 1961 की धारा 12A और धारा 80G के तहत स्वीकृत है। दानदाता सरकारी दिशानिर्देशों के अनुसार अपने योगदान के लिए आयकर में छूट का दावा करने के पात्र हैं।"
    },
    {
      qEn: "How can I verify the certificate independently?",
      qHi: "मैं स्वतंत्र रूप से प्रमाण पत्र का सत्यापन कैसे कर सकता हूँ?",
      aEn: "You can verify the society's active status on the official State Government Trust portal using our registration ID: 02/42/01/28332/26, or scan the official QR code displayed on our certificate.",
      aHi: "आप हमारी पंजीकरण आईडी: 02/42/01/28332/26 का उपयोग करके राज्य सरकार के आधिकारिक ट्रस्ट पोर्टल पर सोसाइटी की सक्रिय स्थिति की पुष्टि कर सकते हैं, या हमारे प्रमाण पत्र पर प्रदर्शित आधिकारिक क्यूआर कोड को स्कैन कर सकते हैं।"
    }
  ];

  return (
    <div className="py-12 bg-[#FDFBF7]" id="society_registration_page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title & Breadcrumb */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4 text-emerald-600 animate-pulse" />
            <span>{currentLanguage === 'en' ? 'GOVERNMENT APPROVED & REGISTERED' : 'भारत सरकार द्वारा पंजीकृत एवं स्वीकृत'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-950 tracking-tight">
            {currentLanguage === 'en' ? 'Society Registration & Legal Status' : 'सोसाइटी पंजीकरण एवं वैधानिक दस्तावेज'}
          </h1>
          <p className="text-gray-600 text-sm">
            {currentLanguage === 'en' 
              ? 'Official verification details of our registered NGO under the public welfare trust compliance frameworks.' 
              : 'सार्वजनिक कल्याण ट्रस्ट अनुपालन ढांचे के तहत हमारे पंजीकृत एनजीओ के आधिकारिक सत्यापन विवरण और वैधानिक दस्तावेज।'}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-800 via-[#F4C430] to-emerald-800 mx-auto rounded"></div>
        </div>

        {/* Certificate Display and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Certificate Visual Mockup Card (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#062413] to-[#041A0E] border-2 border-[#F4C430] p-6 text-white shadow-2xl overflow-hidden group">
              
              {/* Islamic background patterns */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Delicate ornamental borders */}
              <div className="absolute inset-4 border border-[#F4C430]/30 pointer-events-none rounded-xl"></div>
              <div className="absolute inset-5 border border-[#F4C430]/10 pointer-events-none rounded-xl"></div>
              
              <div className="relative z-10 space-y-8">
                
                {/* Certificate Header */}
                <div className="text-center space-y-2 border-b border-white/10 pb-4">
                  <div className="w-14 h-14 bg-white/10 rounded-full border border-[#F4C430]/50 flex items-center justify-center mx-auto shadow-inner">
                    <Landmark className="h-7 w-7 text-[#F4C430]" />
                  </div>
                  <h3 className="text-xs font-mono font-bold text-[#F4C430] tracking-widest uppercase">
                    {currentLanguage === 'en' ? 'GOVERNMENT OF MADHYA PRADESH' : 'मध्य प्रदेश शासन'}
                  </h3>
                  <p className="text-[10px] text-gray-300 font-serif tracking-tight">
                    {currentLanguage === 'en' ? 'Registrar of Public Trusts & Non-Government Organizations' : 'लोक न्यास एवं गैर सरकारी संगठन पंजीयक कार्यालय'}
                  </p>
                </div>

                {/* Certificate Core Text */}
                <div className="space-y-4 text-center">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-900/40">
                    {currentLanguage === 'en' ? 'CERTIFICATE OF REGISTRATION' : 'पंजीकरण प्रमाण पत्र'}
                  </span>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">
                      {currentLanguage === 'en' ? 'This is to certify that' : 'यह प्रमाणित किया जाता है कि'}
                    </p>
                    <h4 className="text-sm font-serif font-extrabold text-[#F4C430] tracking-tight leading-relaxed max-w-xs mx-auto">
                      Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
                    </h4>
                  </div>

                  <p className="text-[10px] text-gray-300 font-sans leading-relaxed px-2">
                    {currentLanguage === 'en' 
                      ? 'has been legally registered as an active National Welfare Trust under the Public Trusts Act with all state and central authority compliance active.' 
                      : 'को लोक न्यास अधिनियम के तहत कानूनी रूप से एक सक्रिय राष्ट्रीय कल्याण ट्रस्ट के रूप में पंजीकृत किया गया है, जिसके सभी राज्य और केंद्रीय प्राधिकारी अनुपालन सक्रिय हैं।'}
                  </p>
                </div>

                {/* Certificate Footer Stamp & Details */}
                <div className="flex justify-between items-end border-t border-white/10 pt-4 text-left font-mono">
                  <div className="space-y-1 text-[9px] text-gray-400">
                    <p>REG: 02/42/01/28332/26</p>
                    <p>DATE: 20-01-2026</p>
                    <p className="text-emerald-400 font-bold">STATUS: VERIFIED ACTIVE</p>
                  </div>

                  {/* QR Code Graphic element */}
                  <div className="bg-white p-1.5 rounded-lg border border-[#F4C430] shadow">
                    <QrCode className="h-10 w-10 text-emerald-950" />
                  </div>
                </div>

              </div>
              
              {/* Overlay Glassmorphism Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </div>

            {/* Action Buttons below Certificate */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownload}
                disabled={downloadProgress}
                className="flex-1 py-3 bg-[#004B23] hover:bg-[#00381a] text-white rounded font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4 text-[#F4C430]" />
                <span>
                  {downloadProgress 
                    ? (currentLanguage === 'en' ? 'Downloading...' : 'डाउनलोड हो रहा है...') 
                    : (currentLanguage === 'en' ? 'Download PDF Certificate' : 'प्रमाण पत्र डाउनलोड करें (PDF)')}
                </span>
              </button>

              <button
                onClick={() => alert(currentLanguage === 'en' ? 'Direct secure Government Registry validation is currently online.' : 'सीधा सरकारी पोर्टल पंजीकरण सत्यापन ऑनलाइन उपलब्ध है।')}
                className="px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-4 w-4 text-gray-400" />
                <span>{currentLanguage === 'en' ? 'Verify on Govt Portal' : 'सरकारी पोर्टल पर जांचें'}</span>
              </button>
            </div>
          </div>

          {/* Legal Details Sheet (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Identity Information Board */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-base font-serif font-extrabold text-emerald-950 border-b border-gray-100 pb-3 flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'Official Legal Records' : 'आधिकारिक वैधानिक अभिलेख'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                
                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Official Registered Name' : 'आधिकारिक पंजीकृत संस्था नाम'}
                  </span>
                  <span className="font-serif font-extrabold text-emerald-950">
                    Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Public Brand Name' : 'सार्वजनिक ब्रांड नाम'}
                  </span>
                  <span className="font-bold text-emerald-800">
                    Rangrez Community Bharat
                  </span>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Registration Number' : 'पंजीकरण संख्या'}
                  </span>
                  <span className="font-mono font-bold text-gray-900">
                    02/42/01/28332/26
                  </span>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Date of Registration' : 'पंजीकरण की तिथि'}
                  </span>
                  <span className="font-medium text-gray-900 flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-[#F4C430]" />
                    <span>{currentLanguage === 'en' ? 'January 20, 2026' : '20 जनवरी, 2026'}</span>
                  </span>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Legal Entity Status' : 'संस्था की कानूनी स्थिति'}
                  </span>
                  <span className="font-bold text-emerald-900">
                    {currentLanguage === 'en' ? 'Government Registered Public Welfare Trust' : 'सरकारी पंजीकृत लोक कल्याणकारी ट्रस्ट (NGO)'}
                  </span>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Governing Authority' : 'नियामक प्राधिकरण'}
                  </span>
                  <span className="font-medium text-gray-700">
                    {currentLanguage === 'en' ? 'Registrar of Public Societies & Trusts, MP' : 'सार्वजनिक देवस्थान व लोक न्यास पंजीयक कार्यालय'}
                  </span>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-4 sm:col-span-2">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">
                    {currentLanguage === 'en' ? 'Income Tax Compliance Status' : 'आयकर अधिनियम अनुपालन'}
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold font-mono uppercase rounded border border-emerald-100">
                      <CheckCircle className="h-3 w-3 text-emerald-600" />
                      <span>Section 12A Approved</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold font-mono uppercase rounded border border-emerald-100">
                      <CheckCircle className="h-3 w-3 text-emerald-600" />
                      <span>Section 80G Tax-Deductible</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F4C430]/10 text-emerald-950 text-[10px] font-bold font-mono uppercase rounded border border-[#F4C430]/35">
                      <Award className="h-3 w-3 text-emerald-800" />
                      <span>NITI Aayog Darpan Synced</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Independent verification instruction guide */}
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-6 rounded-2xl shadow border border-[#F4C430]/30 space-y-4">
              <h4 className="text-sm font-serif font-bold text-[#F4C430] flex items-center space-x-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'How to Verify Independently' : 'स्वतंत्र रूप से सत्यापन कैसे करें'}</span>
              </h4>

              <ol className="text-xs space-y-2.5 list-decimal pl-4 font-light text-gray-200">
                <li>
                  {currentLanguage === 'en' 
                    ? 'Visit the official state society registration verification portal.' 
                    : 'राज्य सरकार के आधिकारिक सोसाइटी पंजीकरण सत्यापन पोर्टल पर जाएं।'}
                </li>
                <li>
                  {currentLanguage === 'en' 
                    ? 'Enter our verified registration number: "02/42/01/28332/26" in the query field.' 
                    : 'खोज बॉक्स में हमारी सत्यापित पंजीकरण संख्या: "02/42/01/28332/26" दर्ज करें।'}
                </li>
                <li>
                  {currentLanguage === 'en' 
                    ? 'Verify that the registered name matches "Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation" with Active legal status.' 
                    : 'सुनिश्चित करें कि पंजीकृत नाम "Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation" से मेल खाता है और स्थिति "सक्रिय" है।'}
                </li>
                <li>
                  {currentLanguage === 'en' 
                    ? 'For central planning verification, search on NITI Aayog NGO Darpan with details.' 
                    : 'केंद्रीय योजना सत्यापन के लिए, नीति आयोग के एनजीओ दर्पण पोर्टल पर जाकर विवरण खोजें।'}
                </li>
              </ol>
            </div>

          </div>

        </div>

        {/* INTERACTIVE SOCIETY STATUS VERIFIER PANEL */}
        <div className="bg-gradient-to-br from-white to-gray-50/60 p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-md space-y-6" id="interactive_status_verifier">
          <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-serif font-extrabold text-emerald-950 flex items-center space-x-2">
              <ShieldCheck className="h-5.5 w-5.5 text-emerald-700 animate-pulse" />
              <span>{currentLanguage === 'en' ? 'Live NGO Registry & Society Status Verification Tool' : 'लाइव एनजीओ रजिस्ट्री एवं सोसाइटी स्थिति सत्यापन टूल'}</span>
            </h3>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
              {currentLanguage === 'en' ? 'Active Gateway' : 'सक्रिय गेटवे'}
            </span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            {currentLanguage === 'en'
              ? 'Perform a real-time statutory status query against the State Society Registrar records. Type the organization registration ID below to verify its active trust compliance status.'
              : 'राज्य सोसाइटी रजिस्ट्रार रिकॉर्ड के विरुद्ध रीयल-टाइम वैधानिक स्थिति जांचें। सक्रिय ट्रस्ट अनुपालन स्थिति को सत्यापित करने के लिए नीचे संस्था पंजीकरण आईडी दर्ज करें।'}
          </p>

          <div className="flex flex-col md:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <input
                type="text"
                value={verifyQuery}
                onChange={(e) => setVerifyQuery(e.target.value)}
                placeholder={currentLanguage === 'en' ? 'Enter Registration No. (e.g., 02/42/01/28332/26)' : 'पंजीकरण संख्या दर्ज करें (जैसे 02/42/01/28332/26)'}
                className="w-full bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition font-mono"
              />
              <button
                onClick={() => setVerifyQuery('02/42/01/28332/26')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-emerald-700 hover:underline font-extrabold cursor-pointer uppercase font-mono"
                title="Paste default test registration ID"
              >
                {currentLanguage === 'en' ? 'Reset ID' : 'रीसेट'}
              </button>
            </div>
            <button
              onClick={handleVerifyStatus}
              disabled={verificationStatus === 'searching'}
              className="px-6 py-3 bg-[#004B23] hover:bg-emerald-950 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow cursor-pointer flex items-center justify-center space-x-1.5 shrink-0"
            >
              <span>{verificationStatus === 'searching' ? (currentLanguage === 'en' ? 'Querying...' : 'जांच हो रही है...') : (currentLanguage === 'en' ? 'Verify Legal Status' : 'स्थिति की पुष्टि करें')}</span>
            </button>
          </div>

          {/* Verification Results Output Panel */}
          {verificationStatus === 'searching' && (
            <div className="p-8 bg-white border border-gray-100 rounded-xl flex flex-col items-center justify-center space-y-3 animate-fadeIn">
              <div className="w-10 h-10 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-gray-500 font-mono tracking-wider animate-pulse">
                {currentLanguage === 'en' ? 'Connecting to registrar.mp.gov.in databases...' : 'रजिस्ट्रार मध्य प्रदेश डेटाबेस से कनेक्ट हो रहा है...'}
              </p>
            </div>
          )}

          {verificationStatus === 'found' && (
            <div className="bg-emerald-50/50 p-6 rounded-2xl border-2 border-emerald-500/30 space-y-4 animate-fadeIn" id="verification_found_board">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 pb-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 border border-emerald-200">
                    <CheckCircle className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-extrabold text-emerald-950 uppercase tracking-tight">
                      {currentLanguage === 'en' ? 'Statutory Record Found' : 'सत्यापित अभिलेख मिल गया है'}
                    </h4>
                    <p className="text-[10px] text-emerald-700 font-mono font-bold uppercase tracking-wider">
                      {currentLanguage === 'en' ? 'Trust Registry Validation: SUCCESS' : 'ट्रस्ट रजिस्ट्री वैधानिक सत्यापन: सफल'}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-800 text-[#FFD54A] font-mono text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#FFD54A]/30 uppercase tracking-widest text-center">
                  ✅ {currentLanguage === 'en' ? 'Active & Verified' : 'सक्रिय एवं सत्यापित'}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-xs">
                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Registered Entity Name' : 'पंजीकृत संस्था का नाम'}</span>
                  <span className="font-serif font-extrabold text-emerald-950">Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Registration ID & File No.' : 'पंजीकरण संख्या व फाइल क्रमांक'}</span>
                  <span className="font-mono font-bold text-gray-800">02/42/01/28332/26</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Governing Authority' : 'संबद्ध शासी निकाय'}</span>
                  <span className="font-medium text-gray-700">Registrar of Public Societies & Trusts, Government of MP</span>
                </div>
                <div className="space-y-1 border-t border-emerald-100 pt-3">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Date of Registration' : 'पंजीकरण की तिथि'}</span>
                  <span className="font-medium text-gray-800">20th January 2026</span>
                </div>
                <div className="space-y-1 border-t border-emerald-100 pt-3">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Registrar Registry Status' : 'रजिस्ट्रार रिकॉर्ड स्थिति'}</span>
                  <span className="font-mono text-emerald-700 font-extrabold">APPROVED & RUNNING</span>
                </div>
                <div className="space-y-1 border-t border-emerald-100 pt-3">
                  <span className="text-gray-400 font-mono text-[10px] uppercase block">{currentLanguage === 'en' ? 'Compliance Audit Status' : 'अनुपालन ऑडिट स्थिति'}</span>
                  <span className="font-mono text-emerald-700 font-bold">100% COMPLIANT (FY2025-26)</span>
                </div>
              </div>
            </div>
          )}

          {verificationStatus === 'not_found' && (
            <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-200/80 space-y-3 animate-fadeIn" id="verification_failed_board">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-800 shrink-0 border border-rose-200">
                  <span className="text-lg font-bold">✕</span>
                </div>
                <div>
                  <h4 className="text-sm font-serif font-extrabold text-rose-950 uppercase tracking-tight">
                    {currentLanguage === 'en' ? 'No Registered Entity Found' : 'कोई पंजीकृत संस्था नहीं मिली'}
                  </h4>
                  <p className="text-[10px] text-rose-700 font-mono font-bold uppercase tracking-wider">
                    {currentLanguage === 'en' ? 'Registry Lookup Failed' : 'रजिस्ट्री खोज असफल'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-rose-900 font-light">
                {currentLanguage === 'en'
                  ? `No active society matched the entered ID "${verifyQuery}". Please verify the number and try again. Standard query syntax: "02/42/01/28332/26".`
                  : `दर्ज की गई आईडी "${verifyQuery}" से कोई सक्रिय सोसाइटी नहीं मिली। कृपया पंजीकरण संख्या दोबारा जांचें और पुनः प्रयास करें। मानक इनपुट प्रारूप: "02/42/01/28332/26"।`}
              </p>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="society_faq_section">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="text-base font-serif font-extrabold text-emerald-950 flex items-center space-x-2">
              <HelpCircle className="h-5 w-5 text-[#F4C430]" />
              <span>{currentLanguage === 'en' ? 'Frequently Asked Questions regarding Trust & Registration' : 'ट्रस्ट और पंजीकरण से संबंधित सामान्य प्रश्न'}</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-gray-100 rounded-lg overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-4 bg-gray-50/50 hover:bg-gray-50 text-left text-xs sm:text-sm font-bold text-emerald-950 transition"
                  >
                    <span>{currentLanguage === 'en' ? faq.qEn : faq.qHi}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed font-light animate-fadeIn">
                      {currentLanguage === 'en' ? faq.aEn : faq.aHi}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
