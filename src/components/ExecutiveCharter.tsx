import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { BookOpen, ShieldCheck, Scale, Users, ArrowRight, CheckCircle, Award, BookText, Share2, ChevronUp } from 'lucide-react';
import { EXECUTIVE_CHARTER_DATA } from '../data/executiveCharterData';

export default function ExecutiveCharter() {
  const [activePart, setActivePart] = useState(EXECUTIVE_CHARTER_DATA[0].partNo);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const partRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      let currentPart = activePart;
      
      // Find the part currently in view
      const scrollPosition = window.scrollY + 200; // Offset for sticky header
      
      for (const part of EXECUTIVE_CHARTER_DATA) {
        const element = partRefs.current[part.partNo];
        if (element && element.offsetTop <= scrollPosition) {
          currentPart = part.partNo;
        }
      }
      
      if (currentPart !== activePart) {
        setActivePart(currentPart);
      }
      
      // Check if user reached bottom
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100) {
        setHasCompleted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePart]);

  const scrollToPart = (partNo: string) => {
    const element = partRefs.current[partNo];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="relative bg-[#004B23] text-white overflow-hidden pb-16 pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-emerald-800/40 border border-emerald-700/50 rounded-full px-4 py-1.5 mb-8 text-sm font-medium tracking-wide backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-50">Officially Approved & Ratified</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            संक्षिप्त संविधान एवं मूल घोषणापत्र
            <span className="block mt-2 text-2xl md:text-3xl text-emerald-200 font-sans font-light tracking-wide">Executive Constitution & Charter</span>
          </h1>

          <p className="text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Muslim Rangrez (Neelgar) Samaj Public Welfare & Educational Society
          </p>

          <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto backdrop-blur-md mb-12 shadow-xl">
            <p className="text-lg md:text-xl italic font-serif text-emerald-50 leading-relaxed">
              "बुराइयों और बेबुनियाद रस्मों से नज़ात, तालीम और इल्म की ओर रुख़, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।"
            </p>
            <p className="text-sm font-medium text-emerald-300 uppercase tracking-widest mt-4">
              एकता (इत्तिहाद) • तालीम • इस्लाही सोच
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-emerald-100">
            <div className="flex items-center"><BookOpen className="w-4 h-4 mr-2 opacity-70" /> 15 Min Read</div>
            <div className="flex items-center"><BookText className="w-4 h-4 mr-2 opacity-70" /> {EXECUTIVE_CHARTER_DATA.length} Parts</div>
            <div className="flex items-center"><Scale className="w-4 h-4 mr-2 opacity-70" /> 40 Articles</div>
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => scrollToPart(EXECUTIVE_CHARTER_DATA[0].partNo)}
            className="mt-12 group inline-flex items-center bg-white text-[#004B23] px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Start Reading
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-start gap-12 relative">
        
        {/* Sticky Sidebar Navigation (Desktop) */}
        <div className="hidden lg:block w-72 shrink-0 sticky top-24">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Contents</h3>
            <nav className="space-y-1">
              {EXECUTIVE_CHARTER_DATA.map((part) => (
                <button
                  key={part.partNo}
                  onClick={() => scrollToPart(part.partNo)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activePart === part.partNo 
                    ? 'bg-emerald-50 text-[#004B23] border border-emerald-100 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="block text-xs font-bold opacity-60 mb-0.5">{part.partNo}</span>
                  {part.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl w-full">
          {EXECUTIVE_CHARTER_DATA.map((part, pIdx) => (
            <div 
              key={part.partNo} 
              id={part.partNo} 
              ref={(el) => { partRefs.current[part.partNo] = el; }}
              className="mb-20 scroll-mt-24"
            >
              <div className="mb-10 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-[#004B23] text-xs font-black uppercase tracking-widest rounded-md mb-3">
                  {part.partNo}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-snug">
                  {part.title}
                </h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto md:mx-0"></div>
              </div>

              <div className="space-y-8">
                {part.articles.map((art, aIdx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    key={art.id} 
                    className={`rounded-2xl p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md ${
                      art.isCritical 
                        ? 'bg-emerald-50/50 border border-emerald-200/60' 
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center">
                        {art.isCritical && <ShieldCheck className="w-5 h-5 text-emerald-600 mr-3" />}
                        {art.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed font-light">
                      {art.content.map((paragraph, i) => {
                        // Check if it's a list item (starts with a number or bullet)
                        const isListItem = /^[0-9]+\.|^•/.test(paragraph.trim());
                        if (isListItem) {
                          return (
                            <p key={i} className="pl-4 md:pl-6 relative">
                              {paragraph}
                            </p>
                          );
                        }
                        return <p key={i}>{paragraph}</p>;
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Completion Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 mb-16 bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-[#004B23]"></div>
            <Award className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">You have reached the end.</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Thank you for reading the Executive Constitution & Charter of the Muslim Rangrez (Neelgar) Samaj. By understanding these principles, you contribute to a stronger, more united, and transparent community.
            </p>
            
            <label className="flex items-start justify-center gap-4 cursor-pointer mb-8 max-w-xl mx-auto group">
              <div className="relative flex items-center justify-center mt-1">
                <input 
                  type="checkbox" 
                  className="peer sr-only" 
                  checked={acknowledged}
                  onChange={() => setAcknowledged(!acknowledged)}
                />
                <div className="w-6 h-6 rounded-md border-2 border-slate-300 peer-checked:bg-[#004B23] peer-checked:border-[#004B23] transition-colors flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-slate-700 font-medium text-left select-none group-hover:text-slate-900 transition-colors">
                I acknowledge that I have read and understood the provisions of the Executive Constitution & Charter, and I commit to upholding its principles.
              </span>
            </label>

            <button 
              disabled={!acknowledged}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm ${
                acknowledged 
                ? 'bg-[#004B23] text-white hover:bg-emerald-800 hover:shadow-md active:scale-95' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Complete Acknowledgement
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-white border border-slate-200 text-slate-600 rounded-full shadow-lg hover:bg-slate-50 hover:text-slate-900 transition-all z-40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
