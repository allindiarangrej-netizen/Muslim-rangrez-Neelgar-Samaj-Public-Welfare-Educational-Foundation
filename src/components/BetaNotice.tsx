import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function BetaNotice({ currentLanguage }: { currentLanguage: 'en' | 'hi' | 'ur' }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const content = {
    en: {
      title: 'Soft Launch / Information Portal (Phase 1)',
      desc: 'The website is currently operating as an Information Portal. Interactive features such as account creation, login, digital membership, family registration, matrimonial, and donations are under development and will be available after official launch.'
    },
    hi: {
      title: 'सॉफ्ट लॉन्च / सूचना पोर्टल (चरण 1)',
      desc: 'वेबसाइट वर्तमान में एक सूचना पोर्टल के रूप में संचालित हो रही है। खाता निर्माण, लॉगिन, डिजिटल सदस्यता, परिवार पंजीकरण, वैवाहिक सेवाएं, और दान जैसी इंटरैक्टिव सुविधाएं अभी विकास के चरण में हैं और आधिकारिक लॉन्च के बाद उपलब्ध होंगी।'
    },
    ur: {
      title: 'سافٹ لانچ / معلوماتی پورٹل (مرحلہ 1)',
      desc: 'ویب سائٹ فی الحال ایک معلوماتی پورٹل کے طور پر کام کر رہی ہے۔ اکاؤنٹ بنانا، لاگ ان، ڈیجیٹل ممبرشپ، خاندانی رجسٹریشن، ازدواجی خدمات اور عطیات جیسی انٹرایکٹو خصوصیات ابھی تیاری کے مرحلے میں ہیں اور آفیشل لانچ کے بعد دستیاب ہوں گی۔'
    }
  };

  const text = content[currentLanguage];

  return (
    <div className="bg-[#004B23] text-[#FFD54A] border-b border-[#F4C430] py-3 px-4 shadow-md z-40 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <div>
            <h4 className="font-bold text-sm tracking-wide">{text.title}</h4>
            <p className="text-xs text-emerald-100 mt-0.5 leading-relaxed">{text.desc}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-emerald-900 rounded-full transition cursor-pointer shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
