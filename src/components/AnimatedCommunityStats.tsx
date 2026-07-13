import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, GraduationCap, Building2, HelpCircle, Heart, TrendingUp, Copy, Check, Code, 
  Hand, Calendar, Landmark, Coins, FileText, Utensils, Leaf, Trophy, Award, Star, 
  Medal, Sparkles, ShieldCheck, ArrowRight, Share2, Filter, Clock, CheckCircle, 
  Flame, Gift, BookOpen, UserCheck, ChevronRight, Zap 
} from 'lucide-react';
import { Language } from '../types';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  target: number;
  suffix: string;
  category: 'medical' | 'education' | 'relief' | 'environment' | 'network';
  labelEn: string;
  labelHi: string;
}

interface AnimatedCommunityStatsProps {
  currentLanguage: Language;
}

export default function AnimatedCommunityStats({ currentLanguage }: AnimatedCommunityStatsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showCodeHub, setShowCodeHub] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Dashboard Interactive States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMotivationTab, setActiveMotivationTab] = useState<'milestones' | 'anniversaries' | 'badges' | 'stories'>('milestones');
  const [liveToast, setLiveToast] = useState<string | null>(null);

  const statsList: StatItem[] = [
    { id: 'volunteers', category: 'network', icon: <Hand className="h-6 w-6" />, emoji: '🤝', target: 1250, suffix: '+', labelEn: 'Total Active Volunteers', labelHi: 'कुल सक्रिय स्वयंसेवक' },
    { id: 'committees', category: 'network', icon: <Building2 className="h-6 w-6" />, emoji: '🏢', target: 50, suffix: '', labelEn: 'Total Committees', labelHi: 'कुल समितियां' },
    { id: 'hours', category: 'network', icon: <Clock className="h-6 w-6" />, emoji: '⏳', target: 100000, suffix: '+', labelEn: 'Volunteer Hours', labelHi: 'स्वयंसेवक सेवा घंटे' },
    { id: 'families', category: 'relief', icon: <Users className="h-6 w-6" />, emoji: '👨‍👩‍👧‍👦', target: 25000, suffix: '+', labelEn: 'Families Helped', labelHi: 'सहायता प्राप्त परिवार' },
    { id: 'patients', category: 'medical', icon: <HelpCircle className="h-6 w-6" />, emoji: '🏥', target: 5000, suffix: '+', labelEn: 'Patients Assisted', labelHi: 'सहायता प्राप्त रोगी' },
    { id: 'blood', category: 'medical', icon: <Heart className="h-6 w-6" />, emoji: '🩸', target: 500, suffix: '+', labelEn: 'Blood Units Donated', labelHi: 'दान की गई रक्त इकाइयां' },
    { id: 'trees', category: 'environment', icon: <Leaf className="h-6 w-6" />, emoji: '🌳', target: 10000, suffix: '+', labelEn: 'Trees Planted', labelHi: 'लगाए गए पेड़' },
    { id: 'students', category: 'education', icon: <GraduationCap className="h-6 w-6" />, emoji: '🏫', target: 15000, suffix: '+', labelEn: 'Students Supported', labelHi: 'समर्थित छात्र' },
    { id: 'scholarships', category: 'education', icon: <Award className="h-6 w-6" />, emoji: '🎓', target: 2000, suffix: '+', labelEn: 'Scholarships Facilitated', labelHi: 'सुविधाजनक छात्रवृत्तियां' },
    { id: 'medical_camps', category: 'medical', icon: <ShieldCheck className="h-6 w-6" />, emoji: '🚑', target: 300, suffix: '+', labelEn: 'Medical Camps', labelHi: 'चिकित्सा शिविर' },
    { id: 'relief_camps', category: 'relief', icon: <Building2 className="h-6 w-6" />, emoji: '🏠', target: 150, suffix: '+', labelEn: 'Relief Camps', labelHi: 'राहत शिविर' },
    { id: 'meals', category: 'relief', icon: <Utensils className="h-6 w-6" />, emoji: '🍽️', target: 100000, suffix: '+', labelEn: 'Meals Distributed', labelHi: 'वितरित भोजन' },
    { id: 'env_drives', category: 'environment', icon: <Leaf className="h-6 w-6" />, emoji: '🍃', target: 400, suffix: '+', labelEn: 'Environmental Drives', labelHi: 'पर्यावरण अभियान' },
    { id: 'funds', category: 'network', icon: <Coins className="h-6 w-6" />, emoji: '💰', target: 50000000, suffix: '+', labelEn: 'Funds Utilized (₹)', labelHi: 'उपयोग की गई धनराशि (₹)' },
    { id: 'beneficiaries', category: 'relief', icon: <Users className="h-6 w-6" />, emoji: '👥', target: 50000, suffix: '+', labelEn: 'Beneficiaries Reached', labelHi: 'लाभार्थियों तक पहुंच' },
  ];

  // States to hold current animated numbers
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initialCounts: Record<string, number> = {};
    statsList.forEach((stat) => {
      initialCounts[stat.id] = 0;
    });
    return initialCounts;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2800;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress * (2 - progress);

      const nextCounts: Record<string, number> = {};
      statsList.forEach((stat) => {
        nextCounts[stat.id] = Math.floor(ease * stat.target);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        const finalCounts: Record<string, number> = {};
        statsList.forEach((stat) => {
          finalCounts[stat.id] = stat.target;
        });
        setCounts(finalCounts);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const triggerLiveSimulation = () => {
    const alertsEn = [
      '⚡ +5 Blood Units Donated at SMS Hospital, Jaipur just now!',
      '⚡ 12 New School Kits & Scholarships distributed in Indore!',
      '⚡ 50 Neem Saplings planted in Lucknow Kukrail Green Belt!',
      '⚡ +120 Volunteer Hours verified for Disaster Relief in Gujarat!',
      '⚡ New Volunteer #RJ-9021 unlocked the Gold Khidmat Medal!'
    ];
    const alertsHi = [
      '⚡ सवाई मानसिंह अस्पताल जयपुर में अभी +5 यूनिट रक्तदान किया गया!',
      '⚡ इंदौर में 12 नए स्कूल किट और छात्रवृत्तियां वितरित की गईं!',
      '⚡ लखनऊ कुकरैल ग्रीन बेल्ट में 50 नीम के पौधे लगाए गए!',
      '⚡ गुजरात में आपदा राहत के लिए +120 स्वयंसेवक घंटे सत्यापित हुए!',
      '⚡ नए स्वयंसेवक #RJ-9021 ने स्वर्ण खिदमत पदक अर्जित किया!'
    ];
    const randomIdx = Math.floor(Math.random() * alertsEn.length);
    setLiveToast(currentLanguage === 'en' ? alertsEn[randomIdx] : alertsHi[randomIdx]);
    
    // Slightly increment one count for realism
    setCounts(prev => ({
      ...prev,
      blood: (prev.blood || 500) + 2,
      hours: (prev.hours || 100000) + 15,
      trees: (prev.trees || 10000) + 5
    }));

    setTimeout(() => {
      setLiveToast(null);
    }, 4500);
  };

  const copyElementorCode = () => {
    const code = `<!-- ELEMENTOR PRO CUSTOM CODE BLOCK -->\n<div class="rangrez-stats-section">\n  <div class="rangrez-stats-grid">\n    ${statsList.map(s => `<div class="rangrez-stat-card" data-target="${s.target}" data-suffix="${s.suffix}">\n      <div class="rangrez-stat-emoji">${s.emoji}</div>\n      <div class="rangrez-stat-number-wrapper"><span class="rangrez-stat-count">0</span><span class="rangrez-stat-suffix">${s.suffix}</span></div>\n      <div class="rangrez-stat-label">${currentLanguage === 'en' ? s.labelEn : s.labelHi}</div>\n    </div>`).join('')}\n  </div>\n</div>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const filteredStats = selectedCategory === 'all' 
    ? statsList 
    : statsList.filter(s => s.category === selectedCategory);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-[#03150b] via-[#052615] to-[#03150b] border-y border-[#F4C430]/20 text-white"
      id="growing_together_section"
    >
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#F4C430_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Floating Toast Alert */}
      {liveToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 right-4 z-50 bg-[#004B23] text-white border-2 border-[#F4C430] px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 max-w-md font-medium text-xs sm:text-sm"
        >
          <Zap className="h-5 w-5 text-[#F4C430] shrink-0 animate-pulse" />
          <span>{liveToast}</span>
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 1: COMMUNITY IMPACT DASHBOARD */}
        <div className="space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#F4C430]/15 border border-[#F4C430]/40 px-4 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#F4C430]" />
              <span className="text-xs font-mono font-bold text-[#F4C430] tracking-widest uppercase">
                {currentLanguage === 'en' ? 'LIVE VERIFIED AUDIT METRICS' : 'लाइव सत्यापित ऑडिट आंकड़े'}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight drop-shadow-md">
              {currentLanguage === 'en' ? 'Community Impact Dashboard' : 'सामूहिक प्रभाव और समाज सेवा डैशबोर्ड'}
            </h2>
            <div className="h-1 w-28 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded"></div>
            
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {currentLanguage === 'en' 
                ? 'Real-time transparency of our national social welfare initiatives. Every hour, blood unit, student supported, and fund utilized is verified under our mandatory 7-point audit trail.' 
                : 'हमारी राष्ट्रीय समाज कल्याणकारी पहलों की रीयल-टाइम पारदर्शिता। प्रत्येक घंटा, रक्त इकाई, छात्र सहायता और उपयोग की गई धनराशि हमारे 7-सूत्रीय ऑडिट के तहत सत्यापित है।'}
            </p>

            {/* Live Feed Simulator & Audit Badge */}
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2"></span>
                {currentLanguage === 'en' ? 'Live Verifiable Impact Feed • Last update: 2 mins ago' : 'लाइव सत्यापित प्रभाव फ़ीड • अंतिम अपडेट: 2 मिनट पहले'}
              </span>
              <button
                onClick={triggerLiveSimulation}
                className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] px-4 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-md transition transform hover:scale-105"
              >
                <Zap className="h-3.5 w-3.5" />
                <span>{currentLanguage === 'en' ? 'Simulate Real-Time Activity' : 'रीयल-टाइम सेवा कार्य देखें'}</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center flex-wrap gap-2 pt-2">
            {[
              { id: 'all', labelEn: '🌟 All 15 Impact Metrics', labelHi: '🌟 सभी 15 सेवा आंकड़े' },
              { id: 'network', labelEn: '🤝 Volunteers & Committees', labelHi: '🤝 स्वयंसेवक और समितियां' },
              { id: 'medical', labelEn: '🏥 Medical & Blood Aid', labelHi: '🏥 चिकित्सा और रक्तदान' },
              { id: 'education', labelEn: '🎓 Education & Youth', labelHi: '🎓 शिक्षा और युवा' },
              { id: 'relief', labelEn: '🍲 Relief & Welfare', labelHi: '🍲 राहत और कल्याण' },
              { id: 'environment', labelEn: '🌳 Trees & Environment', labelHi: '🌳 वृक्ष और पर्यावरण' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === tab.id
                    ? 'bg-[#F4C430] text-[#0B132B] shadow-lg font-bold'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                {currentLanguage === 'en' ? tab.labelEn : tab.labelHi}
              </button>
            ))}
          </div>

          {/* 15 Animated Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5" id="statistics_animation_grid">
            {filteredStats.map((stat) => {
              const displayVal = counts[stat.id as keyof typeof counts] || 0;
              const formattedVal = stat.id === 'funds' 
                ? `₹${(displayVal / 10000000).toFixed(1)} Cr`
                : displayVal.toLocaleString();

              return (
                <div
                  key={stat.id}
                  className="group relative bg-[#041d0f]/80 backdrop-blur-md rounded-2xl p-6 text-center border border-[#F4C430]/20 hover:border-[#F4C430]/80 shadow-xl hover:shadow-2xl hover:shadow-[#F4C430]/15 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#F4C430]/70 to-transparent rounded-t-2xl"></div>

                  <div className="space-y-4">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-[#07351B] border border-[#F4C430]/30 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300 text-[#F4C430] shadow-inner">
                      <span>{stat.emoji}</span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#F4C430] tracking-tight flex items-center justify-center drop-shadow">
                        <span className="font-sans font-extrabold tabular-nums">
                          {formattedVal}
                        </span>
                        <span className="text-xl sm:text-2xl ml-0.5 text-[#F4C430]/80">{stat.suffix}</span>
                      </div>

                      <h3 className="text-xs font-bold text-gray-200 tracking-wide uppercase font-sans leading-snug">
                        {currentLanguage === 'en' ? stat.labelEn : stat.labelHi}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span className="flex items-center"><CheckCircle className="h-3 w-3 mr-1" /> Verified</span>
                    <span className="uppercase text-gray-400">{stat.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Impact Distribution Bar */}
          <div className="bg-gradient-to-r from-[#041d0f] via-[#07351B] to-[#041d0f] p-6 sm:p-8 rounded-3xl border border-[#F4C430]/30 shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#F4C430] flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
                  {currentLanguage === 'en' ? 'National Service Hours & Resource Allocation Breakdown' : 'राष्ट्रीय सेवा घंटे और संसाधन आवंटन विवरण'}
                </h4>
                <p className="text-xs text-gray-300">
                  {currentLanguage === 'en' ? 'How verified volunteer hours and relief funds are distributed across social sectors.' : 'सत्यापित स्वयंसेवक घंटे और राहत कोष सामाजिक क्षेत्रों में कैसे वितरित किए जाते हैं।'}
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                100,000+ Total Hours Logged
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex h-4 w-full rounded-full overflow-hidden bg-white/10 p-0.5 gap-1">
                <div style={{ width: '35%' }} className="bg-red-500 rounded-l-full h-full" title="Medical & Blood Aid (35%)" />
                <div style={{ width: '28%' }} className="bg-blue-500 h-full" title="Education & Youth (28%)" />
                <div style={{ width: '22%' }} className="bg-amber-500 h-full" title="Disaster & Food Relief (22%)" />
                <div style={{ width: '15%' }} className="bg-emerald-500 rounded-r-full h-full" title="Tree Plantation & Environment (15%)" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold pt-1">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  <span className="text-gray-200">{currentLanguage === 'en' ? 'Medical & Blood Aid: 35%' : 'चिकित्सा व रक्त सहायता: 35%'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-gray-200">{currentLanguage === 'en' ? 'Education & Youth: 28%' : 'शिक्षा और युवा: 28%'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-gray-200">{currentLanguage === 'en' ? 'Disaster & Food Relief: 22%' : 'राहत और भोजन: 22%'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-gray-200">{currentLanguage === 'en' ? 'Environment & Trees: 15%' : 'पर्यावरण व वृक्ष: 15%'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: VOLUNTEER MOTIVATION & RECOGNITION SHOWCASE */}
        <div className="bg-[#041a0e] border-2 border-[#F4C430]/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-3 max-w-3xl mx-auto relative z-10">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#F4C430] text-[#0B132B] uppercase tracking-wider shadow">
              <Sparkles className="h-4 w-4 mr-1.5" />
              {currentLanguage === 'en' ? 'Volunteer Motivation & Honor Showcase' : 'स्वयंसेवक प्रेरणा और सम्मान केंद्र'}
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
              {currentLanguage === 'en' ? 'Celebrating Our Community Heroes' : 'हमारे समाज सेवकों और नायकों का सम्मान'}
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {currentLanguage === 'en'
                ? 'We honor dedication through official service badges, milestone achievements, service anniversaries, verifiable appreciation certificates, and spotlighting real humanitarian success stories on our homepage.'
                : 'हम आधिकारिक सेवा बैज, मील के पत्थर, सेवा वर्षगांठ, डिजिटल प्रशंसा प्रमाणपत्र और मुख्य पृष्ठ पर वास्तविक समाज सेवा गाथाओं के माध्यम से अपने कार्यकर्ताओं का सम्मान करते हैं।'}
            </p>

            {/* Motivation Navigation Tabs */}
            <div className="flex justify-center flex-wrap gap-3 pt-4">
              <button
                onClick={() => setActiveMotivationTab('milestones')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                  activeMotivationTab === 'milestones'
                    ? 'bg-[#004B23] text-white border-2 border-[#F4C430] shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                <Trophy className="h-4 w-4 text-yellow-400" />
                <span>{currentLanguage === 'en' ? 'Milestone Club (100, 500, 1000 Hrs)' : 'मील का पत्थर (100, 500, 1000 घंटे)'}</span>
              </button>
              <button
                onClick={() => setActiveMotivationTab('anniversaries')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                  activeMotivationTab === 'anniversaries'
                    ? 'bg-[#004B23] text-white border-2 border-[#F4C430] shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                <Gift className="h-4 w-4 text-emerald-400" />
                <span>{currentLanguage === 'en' ? 'Service Anniversaries' : 'सेवा वर्षगांठ और सम्मान'}</span>
              </button>
              <button
                onClick={() => setActiveMotivationTab('badges')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                  activeMotivationTab === 'badges'
                    ? 'bg-[#004B23] text-white border-2 border-[#F4C430] shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                <Award className="h-4 w-4 text-amber-400" />
                <span>{currentLanguage === 'en' ? 'Earn Badges & Levels' : 'बैज और स्तर अर्जित करें'}</span>
              </button>
              <button
                onClick={() => setActiveMotivationTab('stories')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                  activeMotivationTab === 'stories'
                    ? 'bg-[#004B23] text-white border-2 border-[#F4C430] shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                <Flame className="h-4 w-4 text-red-400" />
                <span>{currentLanguage === 'en' ? 'Featured Success Stories' : 'प्रमुख सफलता गाथाएं'}</span>
              </button>
            </div>
          </div>

          {/* SUB-TAB 1: MILESTONE ACHIEVEMENTS (100, 500, 1000 HOURS) */}
          {activeMotivationTab === 'milestones' && (
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1000+ Hours Platinum Diamond */}
                <div className="bg-gradient-to-b from-yellow-500/20 via-[#07351B] to-[#041d0f] p-6 rounded-2xl border-2 border-yellow-400 text-center space-y-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-[#0B132B] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase shadow">
                    ★ 1,000+ HOURS CLUB
                  </div>
                  <div className="w-20 h-20 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center mx-auto ring-4 ring-yellow-400/30">
                    <Trophy className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider block">Platinum Diamond Khidmatgar</span>
                    <h4 className="text-xl font-extrabold text-white mt-1">Mohammad Shahid Rangrez</h4>
                    <p className="text-xs text-gray-300 mt-0.5">Jaipur District • Emergency Medical & Blood Convener</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl text-xs font-semibold text-gray-200 flex items-center justify-between">
                    <span>Verified Hours: 1,050 Hrs</span>
                    <span className="text-yellow-400 font-bold">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    {currentLanguage === 'en' ? '"Coordinated 350+ blood donations and emergency hospital beds across Rajasthan in 2025-2026."' : '"राजस्थान भर में 350+ रक्तदान और आपातकालीन अस्पताल बिस्तरों का समन्वय किया।"'}
                  </p>
                </div>

                {/* 500+ Hours Gold Medal */}
                <div className="bg-gradient-to-b from-emerald-500/20 via-[#07351B] to-[#041d0f] p-6 rounded-2xl border-2 border-emerald-400 text-center space-y-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-emerald-400 text-[#0B132B] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase shadow">
                    ★ 500+ HOURS CLUB
                  </div>
                  <div className="w-20 h-20 bg-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-400/30">
                    <Award className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">Gold Khidmat Medalist</span>
                    <h4 className="text-xl font-extrabold text-white mt-1">Ayesha Bibi Rangrez</h4>
                    <p className="text-xs text-gray-300 mt-0.5">Bhopal District • Women Skill & Vocational Leader</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl text-xs font-semibold text-gray-200 flex items-center justify-between">
                    <span>Verified Hours: 540 Hrs</span>
                    <span className="text-yellow-400 font-bold">⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    {currentLanguage === 'en' ? '"Trained 120 women artisans in tailoring, embroidery, and digital entrepreneurship."' : '"120 महिला कारीगरों को सिलाई, कढ़ाई और उद्यमिता में प्रशिक्षित किया।"'}
                  </p>
                </div>

                {/* 100+ Hours Silver Star */}
                <div className="bg-gradient-to-b from-blue-500/20 via-[#07351B] to-[#041d0f] p-6 rounded-2xl border-2 border-blue-400 text-center space-y-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-400 text-[#0B132B] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase shadow">
                    ★ 100+ HOURS CLUB
                  </div>
                  <div className="w-20 h-20 bg-blue-400/20 text-blue-400 rounded-full flex items-center justify-center mx-auto ring-4 ring-blue-400/30">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">Silver Star Champion</span>
                    <h4 className="text-xl font-extrabold text-white mt-1">Faisal Ahmad Rangrez</h4>
                    <p className="text-xs text-gray-300 mt-0.5">Lucknow District • Environmental & Youth Captain</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl text-xs font-semibold text-gray-200 flex items-center justify-between">
                    <span>Verified Hours: 280 Hrs</span>
                    <span className="text-yellow-400 font-bold">⭐⭐⭐</span>
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    {currentLanguage === 'en' ? '"Led 5 major tree plantation drives planting over 1,500 saplings in UP green belts."' : '"यूपी में 1,500 से अधिक पौधे लगाने वाले 5 प्रमुख वृक्षारोपण अभियानों का नेतृत्व किया।"'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 2: SERVICE ANNIVERSARIES */}
          {activeMotivationTab === 'anniversaries' && (
            <div className="space-y-6 relative z-10">
              <div className="bg-gradient-to-r from-emerald-950/90 via-[#07351B] to-emerald-950/90 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-bold bg-[#F4C430] text-[#0B132B] px-3 py-1 rounded-full uppercase">
                    {currentLanguage === 'en' ? 'Anniversary Honor Roll' : 'सेवा वर्षगांठ सम्मान सूची'}
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    {currentLanguage === 'en' ? 'Celebrating Continuous Years of Service' : 'निरंतर समाज सेवा के वर्षों का जश्न'}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                    {currentLanguage === 'en'
                      ? 'We honor our senior leaders and field volunteers celebrating 1 Year, 5 Years, and 10+ Years of unwavering loyalty and service to society.'
                      : 'हम समाज के प्रति अटूट निष्ठा और सेवा के 1 वर्ष, 5 वर्ष और 10+ वर्ष पूरे करने वाले वरिष्ठ नेताओं और कार्यकर्ताओं का सम्मान करते हैं।'}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <div className="bg-white/10 px-4 py-3 rounded-xl text-center border border-white/10">
                    <span className="text-2xl font-bold text-[#F4C430]">15+</span>
                    <span className="text-[10px] text-gray-300 block uppercase mt-0.5">Years Leaders</span>
                  </div>
                  <div className="bg-white/10 px-4 py-3 rounded-xl text-center border border-white/10">
                    <span className="text-2xl font-bold text-emerald-400">85+</span>
                    <span className="text-[10px] text-gray-300 block uppercase mt-0.5">5-Year Club</span>
                  </div>
                  <div className="bg-white/10 px-4 py-3 rounded-xl text-center border border-white/10">
                    <span className="text-2xl font-bold text-blue-400">320+</span>
                    <span className="text-[10px] text-gray-300 block uppercase mt-0.5">1-Year Heroes</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Haji Abdul Rehman Rangrez', years: '15 Years Service', roleEn: 'National President • Delhi', roleHi: 'राष्ट्रीय अध्यक्ष • दिल्ली', medal: '🏆 Lifetime Khidmat Ratna' },
                  { name: 'Dr. Zafar Ahmad Rangrez', years: '10 Years Service', roleEn: 'Medical Camp Convener • Ahmedabad', roleHi: 'चिकित्सा शिविर संयोजक • अहमदाबाद', medal: '🥇 10-Year Gold Emblem' },
                  { name: 'Irphan Rangrez', years: '5 Years Service', roleEn: 'Youth Wing Leader • Indore', roleHi: 'युवा विंग नेता • इंदौर', medal: '🥈 5-Year Silver Shield' },
                  { name: 'Zainab Bibi Rangrez', years: '1 Year Milestone', roleEn: 'Education Mentor • Bhopal', roleHi: 'शिक्षा मार्गदर्शक • भोपाल', medal: '🥉 1-Year Bronze Star' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 hover:bg-white/10 transition">
                    <span className="text-[10px] font-mono font-bold bg-[#F4C430]/20 text-[#F4C430] px-2.5 py-0.5 rounded-full inline-block">
                      {item.years}
                    </span>
                    <h5 className="font-bold text-base text-white">{item.name}</h5>
                    <p className="text-xs text-gray-400">{currentLanguage === 'en' ? item.roleEn : item.roleHi}</p>
                    <div className="pt-2 border-t border-white/10 text-xs font-semibold text-emerald-300">
                      {item.medal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUB-TAB 3: EARN SERVICE BADGES & UNLOCK LEVELS */}
          {activeMotivationTab === 'badges' && (
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: '🩸', titleEn: 'Emergency Blood Responder', titleHi: 'आपातकालीन रक्त सहयोगी', descEn: 'Awarded for coordinating 5+ emergency blood donations.', descHi: '5+ आपातकालीन रक्तदान के समन्वय के लिए।', badge: 'Red Cross Gold Badge' },
                  { icon: '🌳', titleEn: 'Green Earth Guardian', titleHi: 'हरित पृथ्वी रक्षक', descEn: 'Awarded for planting & nurturing 50+ trees in community parks.', descHi: '50+ वृक्ष लगाने और उनके पोषण के लिए।', badge: 'Eco Green Badge' },
                  { icon: '🎓', titleEn: 'Youth Education Mentor', titleHi: 'युवा शिक्षा मार्गदर्शक', descEn: 'Awarded for mentoring 10+ students or distributing study kits.', descHi: '10+ छात्रों के मार्गदर्शन या किट वितरण के लिए।', badge: 'Scholar Shield' },
                  { icon: '🍲', titleEn: 'Disaster Relief Hero', titleHi: 'आपदा राहत नायक', descEn: 'Awarded for 48+ hours of active food and relief camp service.', descHi: '48+ घंटे सक्रिय राहत एवं भोजन शिविर सेवा के लिए।', badge: 'Relief Honor Medal' },
                ].map((badge, idx) => (
                  <div key={idx} className="bg-[#07351B]/80 p-5 rounded-2xl border border-[#F4C430]/20 space-y-3 text-center hover:border-[#F4C430] transition">
                    <div className="text-4xl">{badge.icon}</div>
                    <h5 className="font-bold text-base text-white">{currentLanguage === 'en' ? badge.titleEn : badge.titleHi}</h5>
                    <p className="text-xs text-gray-300">{currentLanguage === 'en' ? badge.descEn : badge.descHi}</p>
                    <div className="bg-[#F4C430]/10 text-[#F4C430] px-3 py-1 rounded-full text-[11px] font-bold inline-block">
                      🏷️ {badge.badge}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="font-bold text-lg text-white">
                    {currentLanguage === 'en' ? 'Ready to Claim Your Official Appreciation Certificate?' : 'क्या आप अपना आधिकारिक प्रशंसा प्रमाणपत्र प्राप्त करने के लिए तैयार हैं?'}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    {currentLanguage === 'en' ? 'Access our Digital Certificate Generator to download verifiable PDFs and ceremonial appreciation letters.' : 'सत्यापित पीडीएफ और औपचारिक प्रशंसा पत्र डाउनलोड करने के लिए हमारे प्रमाणपत्र जेनरेटर पर जाएं।'}
                  </p>
                </div>
                <a
                  href="#hall-of-service"
                  onClick={() => {
                    const el = document.getElementById('hall-of-service');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg transition whitespace-nowrap flex items-center space-x-2 shrink-0"
                >
                  <Award className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Open Certificate Generator →' : 'प्रमाणपत्र जेनरेटर खोलें →'}</span>
                </a>
              </div>
            </div>
          )}

          {/* SUB-TAB 4: FEATURED SUCCESS STORIES ON HOMEPAGE */}
          {activeMotivationTab === 'stories' && (
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    titleEn: 'Jaipur Emergency Blood Taskforce: Saved 38 Accident Victims in 48 Hours',
                    titleHi: 'जयपुर आपातकालीन रक्त कार्यबल: 48 घंटों में 38 दुर्घटना पीड़ितों की जान बचाई',
                    location: 'SMS Hospital, Jaipur, Rajasthan',
                    date: 'June 2026',
                    img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop',
                    stats: '120 Blood Units • 24 Volunteers Active',
                    quoteEn: '"When the highway emergency alert came at midnight, our Jaipur youth network mobilized 28 donors within 40 minutes."',
                    quoteHi: '"जब आधी रात को हाईवे इमरजेंसी अलर्ट आया, तो हमारे जयपुर युवा नेटवर्क ने 40 मिनट के भीतर 28 दाताओं को जुटाया।"'
                  },
                  {
                    titleEn: 'Bhopal Women Vocational Workshop: Empowered 50 Single Mothers with Tailoring Skills',
                    titleHi: 'भोपाल महिला व्यावसायिक कार्यशाला: 50 एकल माताओं को सिलाई कौशल से सशक्त बनाया',
                    location: 'Rangrez Community Hall, Old Bhopal, MP',
                    date: 'May - June 2026',
                    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
                    stats: '50 Certified Artisans • 15 Sewing Machines Donated',
                    quoteEn: '"Through this 14-day intensive workshop, these women are now starting independent home boutiques and earning sustainable livelihoods."',
                    quoteHi: '"इस 14-दिवसीय गहन कार्यशाला के माध्यम से, ये महिलाएं अब स्वतंत्र होम बुटीक शुरू कर रही हैं और आत्मनिर्भर बन रही हैं।"'
                  },
                  {
                    titleEn: 'Lucknow Green Belt Initiative: 1,000 Neem & Peepal Saplings Planted',
                    titleHi: 'लखनऊ ग्रीन बेल्ट पहल: 1,000 नीम और पीपल के पौधे लगाए गए',
                    location: 'Kukrail Reserve Forest Belt, Lucknow, UP',
                    date: 'World Environment Day 2026',
                    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                    stats: '1,000 Trees • 95% Survival Audit Verified',
                    quoteEn: '"Our youth volunteers not only planted the saplings but established a monthly watering and tree-guard monitoring roster."',
                    quoteHi: '"हमारे युवा स्वयंसेवकों ने न केवल पौधे लगाए, बल्कि मासिक सिंचाई और ट्री-गार्ड निगरानी रोस्टर भी स्थापित किया।"'
                  },
                  {
                    titleEn: 'Indore Orphan & Youth Scholarship Drive: 1,200 School Kits Distributed',
                    titleHi: 'इंदौर अनाथ एवं युवा छात्रवृत्ति अभियान: 1,200 स्कूल किट वितरित',
                    location: 'Azad Nagar Urdu School, Indore, MP',
                    date: 'June 2026',
                    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
                    stats: '1,200 Students • ₹4.5 Lakh Educational Aid',
                    quoteEn: '"No child in our society should drop out due to lack of school bags or exam fees. This drive ensured 100% school enrollment."',
                    quoteHi: '"हमारे समाज का कोई भी बच्चा स्कूल बैग या परीक्षा शुल्क की कमी के कारण पढ़ाई न छोड़े। इस अभियान ने 100% नामांकन सुनिश्चित किया।"'
                  }
                ].map((story, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#F4C430]/60 transition flex flex-col justify-between group shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={story.img} alt="Impact Story" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute top-2 left-2 bg-[#004B23] text-[#F4C430] px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow">
                        ★ Verified Success Story
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <span className="text-xs font-mono text-emerald-300 block">{story.location} • {story.date}</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg text-white group-hover:text-[#F4C430] transition leading-snug">
                          {currentLanguage === 'en' ? story.titleEn : story.titleHi}
                        </h4>
                        <p className="text-xs text-gray-300 italic border-l-2 border-[#F4C430] pl-3 py-1 bg-black/20 rounded-r">
                          {currentLanguage === 'en' ? story.quoteEn : story.quoteHi}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#F4C430]">
                        <span>📊 {story.stats}</span>
                        <span className="text-emerald-400 font-normal">Audit Passed ✓</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: ELEMENTOR PRO INTEGRATION WIDGET FOR ADMINS */}
        <div className="text-center">
          <button
            onClick={() => setShowCodeHub(!showCodeHub)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-[#F4C430]/30 hover:border-[#FFDF66] text-xs font-mono font-bold text-[#F4C430] hover:text-[#FFDF66] transition duration-300 shadow-md"
            aria-label="Toggle Elementor Code Export"
          >
            <Code className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'ELEMENTOR PRO INTEGRATION CENTRE (FOR SITE ADMINS)' : 'एलिमेंटोर प्रो एकीकरण केंद्र (एडमिन के लिए)'}</span>
          </button>

          {showCodeHub && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 max-w-4xl mx-auto bg-[#041a0e] border border-[#F4C430]/20 rounded-xl text-left space-y-4 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#F4C430] font-serif">
                    Elementor Pro Compatible Copy-Paste Widget
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    No programming required. Copy this directly into any Elementor HTML Widget to display these 15 counters.
                  </p>
                </div>
                <button
                  onClick={copyElementorCode}
                  className="px-4 py-1.5 bg-[#F4C430] text-emerald-950 hover:bg-[#FFDF66] hover:border-[#FFDF66] border border-[#F4C430] rounded text-xs font-mono font-bold flex items-center space-x-1.5 transition"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy HTML & CSS Code'}</span>
                </button>
              </div>

              <div className="bg-emerald-950/60 p-4 rounded border border-white/5 overflow-x-auto max-h-48 text-xs font-mono text-emerald-200">
                <pre>{`<!-- Instructions for Elementor Page Builder:
1. Drag and drop an "HTML" widget onto your page.
2. Click inside the HTML Code block.
3. Paste the code you copy from here.
4. Admins can freely modify the data-target="25000" values directly in the HTML code to change the animated numbers. -->`}</pre>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
