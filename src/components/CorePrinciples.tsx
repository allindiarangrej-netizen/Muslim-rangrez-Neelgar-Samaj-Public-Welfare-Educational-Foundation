import React from 'react';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface CorePrinciplesProps {
  currentLanguage: Language;
}

export default function CorePrinciples({ currentLanguage }: CorePrinciplesProps) {
  const principles = [
    { en: 'Integrity', hi: 'सत्यनिष्ठा' },
    { en: 'Transparency', hi: 'पारदर्शिता' },
    { en: 'Fairness', hi: 'निष्पक्षता' },
    { en: 'Verified Service', hi: 'सत्यापित सेवा' },
    { en: 'Equality', hi: 'समानता' },
    { en: 'Respect', hi: 'सम्मान' },
    { en: 'Teamwork', hi: 'टीम वर्क' },
    { en: 'Humility', hi: 'विनम्रता' },
    { en: 'Accountability', hi: 'जवाबदेही' },
    { en: 'Public Trust', hi: 'जन विश्वास' },
  ];

  return (
    <div className="bg-[#0B132B] text-white p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-[#F4C430]" />
        {currentLanguage === 'en' ? 'Core Principles' : 'मूल सिद्धांत'}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {principles.map((p, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-lg text-center text-sm font-medium">
            {currentLanguage === 'en' ? p.en : p.hi}
          </div>
        ))}
      </div>
    </div>
  );
}
