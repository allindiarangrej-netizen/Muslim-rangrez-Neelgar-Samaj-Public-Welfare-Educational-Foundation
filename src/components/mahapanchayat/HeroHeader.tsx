import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language } from './types';
import { getText } from './utils';

interface HeroHeaderProps {
  currentLanguage: Language;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ currentLanguage }) => {
  return (
    <div className="text-center space-y-5 max-w-4xl mx-auto">
      <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#004B23]/20 px-5 py-2 rounded-full shadow-lg">
        <ShieldCheck className="h-5 w-5 text-[#004B23] shrink-0" />
        <span className="text-xs sm:text-sm font-mono font-extrabold text-[#004B23] tracking-widest uppercase">
          {getText(
            'E-GOVERNANCE 2.0 • DIGITAL TRUST & VERIFIED VOTING',
            'ई-गवर्नेंस 2.0 • डिजिटल सुरक्षा व पारदर्शी मतदान',
            'ای گورننس 2.0 • ڈیجیٹل تصدیق اور ووٹنگ',
            currentLanguage
          )}
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
        {getText(
          'Digital Community Survey, Voting & Mahapanchayat Decisions',
          'डिजिटल सामुदायिक सर्वे, जनमत संग्रह एवं महापंचायत निर्णय व्यवस्था',
          'ڈیجیٹل کمیونٹی سروے، رائے شماری اور مہاپنچایت فیصلہ نظام',
          currentLanguage
        )}
      </h1>
      <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#004B23] to-transparent mx-auto rounded-full"></div>

      <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
        {getText(
          'Replaced traditional paper ballots with an immutable, transparent, and intelligent digital platform. lakhs of verified members participate in social reforms (Maujoo), vote on community expenditures, propose new bylaws, and track 100% verifiable implementation of All India Mahapanchayat resolutions.',
          'पारंपरिक कागजी सर्वेक्षणों को एक अपरिवर्तनीय, पारदर्शी और आधुनिक डिजिटल प्लेटफॉर्म द्वारा बदला गया है। लाखों सत्यापित सदस्य सामाजिक सुधारों (मौजूं) में भाग लेते हैं, सामुदायिक निर्णयों पर मतदान करते हैं, नए प्रस्ताव प्रस्तुत करते हैं और अखिल भारतीय महापंचायत प्रस्तावों के 100% क्रियान्वयन की निगरानी करते हैं।',
          'روایتی کاغذی سروے کو ایک ناقابلِ تبدیلی، شفاف اور جدید ڈیجیٹل پلیٹ فارم سے بدل دیا گیا ہے۔ لاکھوں تصدیق شدہ اراکین سماجی اصلاحات (موضوع) میں حصہ لیتے ہیں، برادری کے فیصلوں پر ووٹ دیتے ہیں، نئی تجاویز پیش کرتے ہیں اور آل انڈیا مہاپنچایت کی قراردادوں پر عمل درآمد کی نگرانی کرتے ہیں۔',
          currentLanguage
        )}
      </p>

      {/* Real-time National Impact Ticker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {[
          { labelEn: 'Verified Voters', labelHi: 'सत्यापित मतदाता', labelUr: 'تصدیق شدہ ووٹرز', value: '1,42,850+', color: 'text-[#004B23]' },
          { labelEn: 'Active Surveys', labelHi: 'सक्रिय सर्वे', labelUr: 'فعال سروے', value: '842+', color: 'text-blue-700' },
          { labelEn: 'Reform Approval', labelHi: 'सुधार सहमति', labelUr: 'اصلاحی منظوری', value: '94%', color: 'text-emerald-600' },
          { labelEn: 'Resolutions', labelHi: 'कुल संकल्प', labelUr: 'قراردادیں', value: '12,500+', color: 'text-amber-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-md text-center">
            <span className={`text-2xl sm:text-3xl font-extrabold ${stat.color} font-serif block`}>{stat.value}</span>
            <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest block mt-1">
              {getText(stat.labelEn, stat.labelHi, stat.labelUr, currentLanguage)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
