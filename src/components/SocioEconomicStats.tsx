import React from 'react';
import { Users, Landmark, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface SocioEconomicStatsProps {
  currentLanguage: Language;
}

export default function SocioEconomicStats({ currentLanguage }: SocioEconomicStatsProps) {
  const stats = [
    {
      id: 'stat-members',
      value: '100k+',
      labelEn: 'Registered Members',
      labelHi: 'पंजीकृत महासभा सदस्य',
      icon: Users,
      descEn: 'Across 14 states with unified digital ID profiles',
      descHi: '14 राज्यों में एकीकृत डिजिटल आईडी के साथ'
    },
    {
      id: 'stat-families',
      value: '12,500+',
      labelEn: 'Families Documented',
      labelHi: 'पारिवारिक जनगणना डेटा',
      icon: Landmark,
      descEn: 'Completed socio-economic household charts',
      descHi: 'पूर्ण सामाजिक-आर्थिक पारिवारिक विवरण'
    },
    {
      id: 'stat-marriages',
      value: '450+',
      labelEn: 'Successful Alliances',
      labelHi: 'सामूहिक विवाह व निकाह',
      icon: Award,
      descEn: 'Underprivileged couples supported with starter gifts',
      descHi: 'सफल सामूहिक विवाह सम्मेलनों के तहत'
    },
    {
      id: 'stat-welfare',
      value: '₹35 Lakhs+',
      labelEn: 'Grants Disbursed',
      labelHi: 'कुल वितरित सहायता राशि',
      icon: HeartHandshake,
      descEn: 'Tuition aid, emergency medical and artisan loans',
      descHi: 'शैक्षणिक अनुदान, चिकित्सा सहायता एवं ऋण'
    }
  ];

  return (
    <section className="bg-[#0B132B] text-white py-16 relative overflow-hidden" id="stats_section">
      {/* Decorative Golden Islamic Geometry Overlay */}
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none transform translate-x-20 -translate-y-20">
        <div className="w-96 h-96 rounded-full border-[20px] border-[#F4C430] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#F4C430] text-xs font-mono font-bold tracking-widest uppercase">
            {currentLanguage === 'en' ? 'TRANSPARENT SOCIO-ECONOMIC COUNT' : 'पारदर्शी सामाजिक-आर्थिक रिपोर्ट'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight mt-2 text-white">
            {currentLanguage === 'en' ? 'Rangrez Community Footprint in India' : 'भारतीय स्तर पर रंगरेज समाज का प्रभाव'}
          </h3>
          <p className="text-gray-400 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Our real-time dashboard demonstrates community solidarity, verifiable growth, and localized institutional support.'
              : 'हमारा वास्तविक समय का डैशबोर्ड सामुदायिक एकजुटता, सत्यापित विकास और स्थानीय संस्थागत समर्थन को प्रदर्शित करता है।'}
          </p>
        </div>

        {/* Dynamic Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="stats_counters_grid">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 transition duration-300 flex flex-col justify-between"
                id={`stat_card_${stat.id}`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F4C430] font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="p-2 bg-[#004B23]/40 rounded-lg text-[#F4C430] border border-[#F4C430]/20">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {currentLanguage === 'en' ? stat.labelEn : stat.labelHi}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {currentLanguage === 'en' ? stat.descEn : stat.descHi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* trust badge row */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-300 bg-white/5 py-4 px-6 rounded-lg border border-white/5" id="stats_trust_badge">
          <ShieldCheck className="h-4 w-4 text-[#F4C430]" />
          <span>
            {currentLanguage === 'en'
              ? 'Database encrypted with AES-256 standard and fully compliant with India’s DPDP Act.'
              : 'डेटाबेस AES-256 मानक के साथ एन्क्रिप्टेड है और भारत के DPDP अधिनियम का पूरी तरह से पालन करता है।'}
          </span>
        </div>
      </div>
    </section>
  );
}
