import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Building2, HelpCircle, Heart, TrendingUp, Copy, Check, Code } from 'lucide-react';
import { Language } from '../types';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  target: number;
  suffix: string;
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

  // States to hold the current animated numbers
  const [counts, setCounts] = useState<Record<string, number>>({
    families: 0,
    students: 0,
    districts: 0,
    services: 0,
    matrimonial: 0,
    success: 0,
  });

  const statsList: StatItem[] = [
    {
      id: 'families',
      icon: <Users className="h-6 w-6" />,
      emoji: '👨‍👩‍👧‍👦',
      target: 25000,
      suffix: '+',
      labelEn: 'Verified Families',
      labelHi: 'सत्यापित परिवार',
    },
    {
      id: 'students',
      icon: <GraduationCap className="h-6 w-6" />,
      emoji: '🎓',
      target: 12500,
      suffix: '+',
      labelEn: 'Students Supported',
      labelHi: 'लाभान्वित छात्र',
    },
    {
      id: 'districts',
      icon: <Building2 className="h-6 w-6" />,
      emoji: '🏢',
      target: 220,
      suffix: '+',
      labelEn: 'District Committees',
      labelHi: 'जिला कमेटियां',
    },
    {
      id: 'services',
      icon: <HelpCircle className="h-6 w-6" />,
      emoji: '🤝',
      target: 18,
      suffix: '+',
      labelEn: 'Community Services',
      labelHi: 'सामुदायिक सेवाएं',
    },
    {
      id: 'matrimonial',
      icon: <Heart className="h-6 w-6" />,
      emoji: '💍',
      target: 5000,
      suffix: '+',
      labelEn: 'Verified Matrimonial Profiles',
      labelHi: 'सत्यापित वैवाहिक प्रोफाइल',
    },
    {
      id: 'success',
      icon: <TrendingUp className="h-6 w-6" />,
      emoji: '📈',
      target: 96,
      suffix: '%',
      labelEn: 'Success Rate',
      labelHi: 'सफलता दर',
    },
  ];

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
    const duration = 2800; // 2.8 seconds duration
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: outQuad
      const ease = progress * (2 - progress);

      const nextCounts: Record<string, number> = {};
      statsList.forEach((stat) => {
        nextCounts[stat.id] = Math.floor(ease * stat.target);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        // Ensure final precise target values are met
        const finalCounts: Record<string, number> = {};
        statsList.forEach((stat) => {
          finalCounts[stat.id] = stat.target;
        });
        setCounts(finalCounts);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const copyElementorCode = () => {
    const code = `
<!-- ======================================================= -->
<!-- ELEMENTOR PRO CUSTOM CODE BLOCK                         -->
<!-- Copy this directly into an HTML Widget inside Elementor -->
<!-- ======================================================= -->

<div class="rangrez-stats-section">
  <div class="rangrez-stats-grid">
    ${statsList
      .map(
        (s) => `
    <div class="rangrez-stat-card" data-target="${s.target}" data-suffix="${s.suffix}">
      <div class="rangrez-stat-emoji">${s.emoji}</div>
      <div class="rangrez-stat-number-wrapper">
        <span class="rangrez-stat-count">0</span><span class="rangrez-stat-suffix">${s.suffix}</span>
      </div>
      <div class="rangrez-stat-label">
        ${currentLanguage === 'en' ? s.labelEn : s.labelHi}
      </div>
    </div>`
      )
      .join('')}
  </div>
</div>

<style>
.rangrez-stats-section {
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(135deg, #041A0E 0%, #0A3A20 50%, #041A0E 100%);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.rangrez-stats-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#D4AF37 1.2px, transparent 1.2px);
  background-size: 24px 24px;
  opacity: 0.08;
  pointer-events: none;
}

.rangrez-stats-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}

@media (max-width: 1024px) {
  .rangrez-stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .rangrez-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .rangrez-stats-grid {
    grid-template-columns: 1fr;
  }
}

.rangrez-stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 16px;
  padding: 40px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.rangrez-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  opacity: 0.5;
}

.rangrez-stat-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.7);
  background: rgba(255, 255, 255, 0.07);
}

.rangrez-stat-emoji {
  font-size: 32px;
  margin-bottom: 16px;
  transition: transform 0.4s ease;
}

.rangrez-stat-card:hover .rangrez-stat-emoji {
  transform: rotate(8deg) scale(1.1);
}

.rangrez-stat-number-wrapper {
  font-size: 40px;
  font-weight: 800;
  color: #D4AF37;
  font-family: 'Playfair Display', serif;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.rangrez-stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const statCards = document.querySelectorAll('.rangrez-stat-card');
  
  const animateStats = (card) => {
    const countEl = card.querySelector('.rangrez-stat-count');
    const target = parseInt(card.getAttribute('data-target'), 10);
    const duration = 2800;
    const startTime = performance.now();
    
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress * (2 - progress);
      
      const current = Math.floor(ease * target);
      countEl.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        countEl.textContent = target.toLocaleString();
      }
    };
    
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  statCards.forEach(card => observer.observe(card));
});
</script>
`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#03150b] via-[#052615] to-[#03150b] border-y border-[#D4AF37]/10"
      id="growing_together_section"
    >
      {/* Background Decorative Islamic Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>
      
      {/* Soft Gold Glowing Dust Particles in background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-[#D4AF37]/40 blur-sm animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-[#D4AF37]/30 blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 blur-[1px] animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-1">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
              {currentLanguage === 'en' ? 'NATIONAL MILESTONES' : 'राष्ट्रीय मील के पत्थर'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight drop-shadow-md">
            {currentLanguage === 'en' ? 'Growing Together, Building the Future' : 'एक साथ बढ़ते हुए, भविष्य का निर्माण'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'Our community continues to grow through education, unity, digital transformation, social welfare and collective progress.' 
              : 'हमारा समुदाय शिक्षा, एकता, डिजिटल परिवर्तन, सामाजिक कल्याण और सामूहिक प्रगति के माध्यम से लगातार बढ़ रहा है।'}
          </p>
        </div>

        {/* 6 Premium Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="statistics_animation_grid">
          {statsList.map((stat) => {
            return (
              <div
                key={stat.id}
                id={`stat_card_${stat.id}`}
                className="group relative bg-[#041d0f]/60 backdrop-blur-md rounded-2xl p-8 text-center border border-[#D4AF37]/15 hover:border-[#D4AF37]/70 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-400 ease-out hover:-translate-y-3.5 flex flex-col justify-between"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Thin gold gradient line at top of card */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-t-2xl"></div>

                <div className="space-y-6">
                  {/* Floating Animated Icon / Emoji Container */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#07351B] border border-[#D4AF37]/20 flex items-center justify-center text-3xl group-hover:rotate-8 group-hover:scale-110 transition-all duration-400 text-[#D4AF37]">
                    <span className="hidden group-hover:block transition-all duration-300">
                      {stat.emoji}
                    </span>
                    <span className="block group-hover:hidden transition-all duration-300">
                      {stat.icon}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {/* Number text with requestAnimationFrame */}
                    <div className="text-4xl sm:text-5xl font-serif font-extrabold text-[#D4AF37] tracking-tight flex items-center justify-center drop-shadow">
                      <span className="font-sans font-extrabold tabular-nums">
                        {counts[stat.id as keyof typeof counts].toLocaleString()}
                      </span>
                      <span className="text-2xl sm:text-3xl ml-1 text-[#D4AF37]/80">{stat.suffix}</span>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase font-mono">
                      {currentLanguage === 'en' ? stat.labelEn : stat.labelHi}
                    </h3>
                  </div>
                </div>

                {/* Glassy reflection glow accent */}
                <div className="absolute bottom-2 right-2 w-16 h-16 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip/Elementor Integration Widget for Admins */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowCodeHub(!showCodeHub)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-mono font-bold text-[#D4AF37] transition duration-300 shadow-md"
            aria-label="Toggle Elementor Code Export"
          >
            <Code className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'ELEMENTOR PRO INTEGRATION CENTRE' : 'एलिमेंटोर प्रो एकीकरण केंद्र'}</span>
          </button>

          {showCodeHub && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 max-w-4xl mx-auto bg-[#041a0e] border border-[#D4AF37]/20 rounded-xl text-left space-y-4 shadow-2xl"
              id="elementor_code_hub"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#D4AF37] font-serif">
                    Elementor Pro Compatible Copy-Paste Widget
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    No programming required. Supports vanilla IntersectionObserver and high-performance requestAnimationFrame counters.
                  </p>
                </div>
                <button
                  onClick={copyElementorCode}
                  className="px-4 py-1.5 bg-[#D4AF37] text-emerald-950 hover:bg-[#C59B27] rounded text-xs font-mono font-bold flex items-center space-x-1.5 transition"
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
