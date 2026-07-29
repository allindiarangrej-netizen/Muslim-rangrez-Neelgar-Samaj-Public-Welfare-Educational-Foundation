import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AuthCallbackProps {
  currentLanguage: Language;
  setActiveTab: (tab: string) => void;
}

export default function AuthCallback({ currentLanguage, setActiveTab }: AuthCallbackProps) {
  return (
    <div className="py-20 min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center space-y-6">
        <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          <Info className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-gray-900">
            {currentLanguage === 'en' ? 'Portal in Information Mode' : currentLanguage === 'ur' ? 'پورٹل معلومات کی حالت میں ہے' : 'पोर्टल सूचना मोड में है'}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {currentLanguage === 'en'
              ? 'User registration and login features are currently paused for upgrade to our Enterprise Google Sign-In & OTP Authentication System. Please explore the public community information portal.'
              : currentLanguage === 'ur'
              ? 'صارفین کی رجسٹریشن اور لاگ ان عارضی طور پر بند ہیں۔ برائے مہربانی عوامی پورٹل پر معلومات ملاحظہ کریں۔'
              : 'उपयोगकर्ता पंजीकरण और लॉगिन सुविधाएँ वर्तमान में अपग्रेड के लिए रुकी हुई हैं। कृपया सार्वजनिक सूचना पोर्टल का अन्वेषण करें।'}
          </p>
        </div>
        <button
          onClick={() => setActiveTab('home')}
          className="w-full bg-[#004B23] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#00381a] transition flex items-center justify-center space-x-2 shadow cursor-pointer"
        >
          <span>{currentLanguage === 'en' ? 'Return to Home Page' : currentLanguage === 'ur' ? 'ہوم پیج پر واپس جائیں' : 'मुख्य पृष्ठ पर वापस जाएं'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

