import React from 'react';
import { Award, CheckCircle, Flame, Heart, FileText, Download } from 'lucide-react';
import { Language } from '../types';

interface SocialImpactProps {
  currentLanguage: Language;
}

export default function SocialImpact({ currentLanguage }: SocialImpactProps) {
  const impacts = [
    { titleEn: 'Collective Marriages (Sammelan)', titleHi: 'सामूहिक विवाह सम्मेलन योजना', value: '450+', descEn: 'We support underprivileged couples with complete household kits and standard Islamic Nikah fees.', descHi: 'हम जरूरतमंद जोड़ों को पूर्ण घरेलू किट और सुन्नत के अनुसार निकाह खर्च की सुविधा प्रदान करते हैं।' },
    { titleEn: 'Artisan Business Seed Incubator', titleHi: 'शिल्पकार लघु उद्योग प्रोत्साहन', value: '120+', descEn: 'Direct support grants for dyer shops and modern block printing machinery.', descHi: 'रंगसाज दुकानों और आधुनिक ब्लॉक प्रिंटिंग मशीनों के लिए सीधी प्रोत्साहन सहायता राशि।' },
    { titleEn: 'Free Diagnostic Camps Organized', titleHi: 'निःशुल्क स्वास्थ्य एवं निदान शिविर', value: '35+', descEn: 'Providing free eye checkups, glasses, diabetes screening, and medicines.', descHi: 'निःशुल्क नेत्र जांच, चश्मा वितरण, मधुमेह स्क्रीनिंग और दवाएं प्रदान करना।' }
  ];

  return (
    <div className="py-12 bg-white" id="social_impact_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'MEASURED OUTCOMES' : 'सामाजिक प्रभाव एवं उपलब्धियां'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Social Impact & Achievements Portfolio' : 'सामाजिक कार्य एवं वार्षिक ऑडिट रिपोर्ट'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Review real socio-economic deliverables, annual welfare targets, and dynamic social work award winners.'
              : 'वास्तविक सामाजिक-आर्थिक परिणामों, वार्षिक कल्याणकारी लक्ष्यों और सामाजिक कार्यकर्ता पुरस्कार विजेताओं की समीक्षा करें।'}
          </p>
        </div>

        {/* Dynamic Impact Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" id="social_impact_cards">
          {impacts.map((imp, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] font-mono">{imp.value}</span>
                  <div className="p-2 bg-[#004B23]/10 text-[#004B23] rounded-full">
                    <Heart className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? imp.titleEn : imp.titleHi}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{currentLanguage === 'en' ? imp.descEn : imp.descHi}</p>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-4 flex items-center space-x-1.5 text-[10px] font-mono text-emerald-700">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>VERIFIED METRIC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Best Area Awards & Annual Audits Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Awards Spotlights */}
          <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider flex items-center space-x-2">
              <Award className="h-5 w-5 text-[#D4AF37]" />
              <span>{currentLanguage === 'en' ? 'Welfare & Leadership Awards 2026' : 'नेतृत्व एवं उत्कृष्ट कार्यकर्ता पुरस्कार 2026'}</span>
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">BEST AREA COMMITTEE</span>
                  <h4 className="text-xs font-bold text-gray-900 mt-1">{currentLanguage === 'en' ? 'Kailaras Committee Team' : 'कैलारस क्षेत्रीय समिति दल'}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">{currentLanguage === 'en' ? 'Recognized for achieving 94% census registration coverage.' : '94% परिवार जनगणना पंजीकरण कवरेज प्राप्त करने के लिए विशेष पुरस्कार।'}</p>
                </div>
                <Flame className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">BEST SOCIAL WORKER</span>
                  <h4 className="text-xs font-bold text-gray-900 mt-1">Mohammed Jamil Rangrez (Morena)</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">{currentLanguage === 'en' ? 'Supported verification logistics of 800+ family units.' : '800+ परिवारों के सत्यापन एवं डेटा प्रविष्टि में अथक सहयोग।'}</p>
                </div>
                <Award className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Audit downloads */}
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#0B132B] uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-3 mb-4">
                <FileText className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Transparent Financial Audits' : 'पारदर्शी वित्तीय ऑडिट एवं रिपोर्ट्स'}</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {currentLanguage === 'en'
                  ? 'We maintain absolute transparent bookkeeping. Download verified annual social audit reports below.'
                  : 'हम पूर्ण पारदर्शी बहीखाता प्रणाली बनाए रखते हैं। नीचे सत्यापित वार्षिक सामाजिक ऑडिट रिपोर्ट डाउनलोड करें।'}
              </p>

              <div className="space-y-2.5">
                <button
                  onClick={() => alert('Social Audit Annual Report dispatches to download pool successfully!')}
                  className="w-full bg-white border border-gray-200 text-xs text-gray-700 font-bold p-3 rounded hover:bg-gray-100 transition flex items-center justify-between"
                >
                  <span>{currentLanguage === 'en' ? 'Social Welfare Audit Report 2025' : 'सामाजिक कल्याण ऑडिट रिपोर्ट 2025'}</span>
                  <Download className="h-4 w-4 text-[#004B23]" />
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-[#004B23]/10 text-[10px] text-gray-500 font-mono">
              * Society Registration No: 02/42/01/28332/26
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
