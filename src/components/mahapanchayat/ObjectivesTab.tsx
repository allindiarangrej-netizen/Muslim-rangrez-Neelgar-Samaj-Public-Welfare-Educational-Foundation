import React from 'react';
import { Sparkles, Vote } from 'lucide-react';
import { Language } from './types';
import { getText } from './utils';
import { PILLARS } from './Constants';

interface ObjectivesTabProps {
  currentLanguage: Language;
  setActiveTab: (tab: any) => void;
}

export const ObjectivesTab: React.FC<ObjectivesTabProps> = ({ currentLanguage, setActiveTab }) => {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Hero Title Banner - Redesigned with premium golden-top card design */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-lg text-center space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23]"></div>
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <span className="inline-flex items-center space-x-2 bg-emerald-50/80 text-emerald-800 border border-emerald-100/60 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest">
          <Sparkles className="h-4 w-4 text-emerald-700 mr-1 animate-pulse" />
          <span>{getText('E-GOVERNANCE 2.0 STRATEGIC MANDATE', 'ई-गवर्नेंस 2.0 रणनीतिक संकल्प', 'ای گورننس 2.0 اسٹریٹجک مینڈیٹ', currentLanguage)}</span>
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-emerald-950 leading-tight tracking-tight">
          {getText(
            'Why We Transitioned to Digital Community Surveys & Voting',
            'हमने मैनुअल घर-घर सर्वे को डिजिटल महापंचायत व्यवस्था से क्यों बदला?',
            'ہم نے دستی گھر گھر سروے کو ڈیجیٹل مہاپنچایت نظام سے کیوں بدلا؟',
            currentLanguage
          )}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
          {getText(
            'For over 100 years, manual door-to-door surveys suffered from lost paper registers, massive financial waste, delayed tallying, and excluded rural families. Our E-Governance 2.0 platform accomplishes 8 core objectives to empower every verified member with an equal, transparent, and instant digital voice.',
            '100 से अधिक वर्षों तक, मैनुअल घर-घर सर्वेक्षणों में कागजी रजिस्टर खो जाने, भारी धन की बर्बादी, गिनती में देरी और दूरस्थ ग्रामीण परिवारों के छूटने की समस्या रही। हमारा ई-गवर्नेंस 2.0 प्लेटफॉर्म प्रत्येक सत्यापित सदस्य को एक समान, पारदर्शी और त्वरित आवाज देने के लिए 8 मूल उद्देश्यों को पूरा करता है।',
            '100 سے زیادہ سالوں تک، دستی گھر گھر سروے میں کاغذی رجسٹر کھو جانے، بھاری مالیاتی ضیاع، گنتی میں تاخیر اور دور دراز دیہی خاندانوں کے چھوٹ جانے کا مسئلہ رہا۔ ہمارا ای گورننس 2.0 پلیٹ فارم ہر تصدیق شدہ ممبر کو ایک مساوی، شفاف اور فوری آواز دینے کے لیے 8 بنیادی مقاصد کو پورا کرتا ہے۔',
            currentLanguage
          )}
        </p>
      </div>

      {/* THE 8 CORE OBJECTIVE PILLARS GRID */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">
            {getText('THE 8 PILLARS OF OUR SYSTEM', 'हमारी व्यवस्था के 8 प्रमुख स्तंभ', 'ہمارے نظام کے 8 بنیادی ستون', currentLanguage)}
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-black text-emerald-950">
            {getText('How This Platform Revolutionizes Community Governance', 'यह प्लेटफॉर्म समाज सुधार व निर्णय व्यवस्था में कैसे क्रांति लाता है', 'یہ پلیٹ فارم برادری کی حکمرانی میں کیسے انقلاب لاتا ہے', currentLanguage)}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#F4C430]/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#F4C430] opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-emerald-50/50 rounded-full blur-xl group-hover:bg-emerald-100/60 transition"></div>
              
              <div className="relative z-10 space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition shadow-sm text-emerald-800">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-black text-gray-300 group-hover:text-emerald-500 transition">#{pillar.num}</span>
                </div>
                
                <div className="space-y-1.5 flex-grow">
                  <h4 className="text-base sm:text-lg font-serif font-extrabold text-emerald-950 group-hover:text-emerald-800 transition">
                    {getText(pillar.titleEn, pillar.titleHi, pillar.titleUr, currentLanguage)}
                  </h4>
                  <span className="inline-block text-[10px] font-mono font-bold bg-[#004B23]/10 text-[#004B23] px-2.5 py-0.5 rounded border border-[#004B23]/20 uppercase tracking-wide">
                    {pillar.badge}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed font-light mt-2">
                    {getText(pillar.descEn, pillar.descHi, pillar.descUr, currentLanguage)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table: Manual vs Digital */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden relative group">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23]"></div>
        <div className="bg-[#004B23]/5 p-6 sm:p-8 border-b border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-black text-emerald-950">
            {getText('Efficiency Audit: Manual Survey vs. Digital Mahapanchayat', 'कार्यक्षमता ऑडिट: मैनुअल सर्वे बनाम डिजिटल महापंचायत', 'کارکردگی کا آڈٹ: دستی سروے بمقابلہ ڈیجیٹل مہاپنچایت', currentLanguage)}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {getText('An objective analysis of traditional paper-bound administration versus e-governance metrics.', 'पारंपरिक कागजी प्रशासन बनाम ई-गवर्नेंस पैमानों का एक निष्पक्ष विश्लेषण।', 'روایتی کاغذی نظم و نسق بمقابلہ ای گورننس میٹرکس کا ایک معروضی تجزیہ۔', currentLanguage)}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-extrabold text-gray-900">{getText('Metric', 'पैमाना', 'میٹرک', currentLanguage)}</th>
                <th className="p-4 font-extrabold text-red-700">{getText('Traditional Manual System', 'पारंपरिक मैनुअल व्यवस्था', 'روایتی دستی نظام', currentLanguage)}</th>
                <th className="p-4 font-extrabold text-emerald-800">{getText('Digital E-Governance 2.0', 'डिजिटल ई-गवर्नेंस 2.0', 'ڈیجیٹل ای گورننس 2.0', currentLanguage)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4 font-bold text-gray-900">{getText('Participation Reach', 'भागीदारी की पहुंच', 'شمولیت کی رسائی', currentLanguage)}</td>
                <td className="p-4 text-gray-600">Limited to families present at home during volunteer visit</td>
                <td className="p-4 bg-emerald-50/20 text-emerald-800 font-bold">100% Global Reach (Including Rural & NRIs)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-900">{getText('Tallying Speed', 'गणना की गति', 'گنتی کی رفتار', currentLanguage)}</td>
                <td className="p-4 text-gray-600">6–12 months of manual sorting</td>
                <td className="p-4 bg-emerald-50/20 text-emerald-800 font-bold">Instant (Real-time)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-900">{getText('Data Accuracy', 'डेटा शुद्धता', 'ڈیٹا کی درستگی', currentLanguage)}</td>
                <td className="p-4 text-gray-600">High risk of human error & duplication</td>
                <td className="p-4 bg-emerald-50/20 text-emerald-800 font-bold">100% Cryptographically Verified</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-900">{getText('Operational Cost', 'संचालन लागत', 'آپریشنل لاگت', currentLanguage)}</td>
                <td className="p-4 text-gray-600">₹45 Lakhs - ₹1.2 Crores / Year</td>
                <td className="p-4 bg-emerald-50/20 text-emerald-800 font-bold">Reduced by 98%</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-900">{getText('Historical Archiving', 'ऐतिहासिक संरक्षण', 'تاریخی تحفظ', currentLanguage)}</td>
                <td className="p-4 text-gray-600">Paper files get damaged or misplaced over years</td>
                <td className="p-4 bg-emerald-50/20 text-emerald-800 font-bold">Immortal digital gazette with QR seals</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center p-8 bg-gray-50/50 border-t border-gray-100 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('surveys')}
            className="bg-gradient-to-r from-[#004B23] to-[#00381a] hover:from-[#056633] hover:to-[#004B23] text-[#FFD54A] hover:text-white font-extrabold px-10 py-4 rounded-2xl text-sm sm:text-base shadow-lg hover:shadow-[#F4C430]/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center space-x-2 cursor-pointer border border-[#FFD54A]/30 relative group overflow-hidden"
          >
            <Vote className="h-5 w-5" />
            <span>{getText('Enter Digital Ballot Box →', 'डिजिटल मतपेटी में प्रवेश करें →', 'ڈیجیٹل بیلٹ بکس میں داخل ہوں →', currentLanguage)}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
