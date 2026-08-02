import React from 'react';
import { Users, Landmark, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import Counter from './Counter';

interface SocioEconomicStatsProps {
  currentLanguage: Language;
}

export default function SocioEconomicStats({ currentLanguage }: SocioEconomicStatsProps) {
  const stats = [
    {
      id: 'stat-members',
      rawVal: 100,
      suffix: '+',
      prefix: '',
      labelEn: 'Registered Members',
      labelHi: 'पंजीकृत महासभा सदस्य',
      icon: Users,
      descEn: 'Across 14 states with unified digital ID profiles',
      descHi: '14 राज्यों में एकीकृत डिजिटल आईडी के साथ'
    },
    {
      id: 'stat-families',
      rawVal: 100,
      suffix: '+',
      prefix: '',
      labelEn: 'Families Documented',
      labelHi: 'पारिवारिक जनगणना डेटा',
      icon: Landmark,
      descEn: 'Completed socio-economic household charts',
      descHi: 'पूर्ण सामाजिक-आर्थिक पारिवारिक विवरण'
    },
    {
      id: 'stat-marriages',
      rawVal: 100,
      suffix: '+',
      prefix: '',
      labelEn: 'Successful Alliances',
      labelHi: 'सामूहिक विवाह व निकाह',
      icon: Award,
      descEn: 'Underprivileged couples supported with starter gifts',
      descHi: 'सफल सामूहिक विवाह सम्मेलनों के तहत'
    },
    {
      id: 'stat-welfare',
      rawVal: 100,
      suffix: '+',
      prefix: '₹',
      labelEn: 'Grants Disbursed',
      labelHi: 'कुल वितरित सहायता राशि',
      icon: HeartHandshake,
      descEn: 'Tuition aid, emergency medical and artisan loans',
      descHi: 'शैक्षणिक अनुदान, चिकित्सा सहायता एवं ऋण'
    }
  ];

  return (
    <section className="bg-[#0B132B] text-white py-14 sm:py-16 relative overflow-hidden" id="stats_section">
      {/* Decorative Golden Geometry Overlay */}
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20">
        <div className="w-96 h-96 rounded-full border-[20px] border-[#F4C430] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#FFD54A] text-xs font-mono font-bold tracking-widest uppercase bg-[#FFD54A]/10 border border-[#FFD54A]/30 px-3 py-1 rounded-full">
            {currentLanguage === 'en' ? 'TRANSPARENT SOCIO-ECONOMIC COUNT' : 'पारदर्शी सामाजिक-आर्थिक रिपोर्ट'}
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight mt-3 text-white">
            {currentLanguage === 'en' ? 'Rangrez Community Footprint in India' : 'भारतीय स्तर पर रंगरेज समाज का प्रभाव'}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
            {currentLanguage === 'en'
              ? 'Our real-time dashboard demonstrates community solidarity, verifiable growth, and localized institutional support.'
              : 'हमारा वास्तविक समय का डैशबोर्ड सामुदायिक एकजुटता, सत्यापित विकास और स्थानीय संस्थागत समर्थन को प्रदर्शित करता है।'}
          </p>
        </div>

        {/* Dynamic Counter Grid with Premium Glassmorphism & Gold Gradient */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="stats_counters_grid">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-gradient-to-b from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-[#FFD54A]/20 hover:border-[#FFD54A] p-5 sm:p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,213,74,0.2)] flex flex-col justify-between overflow-hidden cursor-pointer"
                id={`stat_card_${stat.id}`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">
                  <div className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-[#FFD54A]">
                    <Counter 
                      value={stat.rawVal} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                      className="bg-gradient-to-r from-[#FFF0AA] via-[#FFD54A] to-[#F4C430] bg-clip-text text-transparent group-hover:brightness-125 transition" 
                      showVerified={true}
                    />
                  </div>
                  <div className="p-2.5 bg-[#004B23]/60 rounded-xl text-[#FFD54A] border border-[#FFD54A]/30 group-hover:rotate-6 group-hover:scale-110 transition duration-300 shadow-md">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 relative z-10">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {currentLanguage === 'en' ? stat.labelEn : stat.labelHi}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {currentLanguage === 'en' ? stat.descEn : stat.descHi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badge row */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 text-xs text-gray-300 bg-white/5 py-3 px-5 rounded-xl border border-white/10 max-w-2xl mx-auto text-center" id="stats_trust_badge">
          <ShieldCheck className="h-4 w-4 text-[#FFD54A] shrink-0" />
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
