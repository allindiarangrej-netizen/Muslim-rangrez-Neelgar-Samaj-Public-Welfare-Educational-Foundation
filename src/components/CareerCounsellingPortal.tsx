import React, { useState } from 'react';
import { 
  Compass, Sparkles, BookOpen, Users, HelpCircle, Award, 
  TrendingUp, MessageSquare, CheckCircle2, ChevronRight, 
  Heart, Star, Send, ShieldCheck, Zap, Layers, Briefcase
} from 'lucide-react';
import { Language } from '../types';

interface CareerCounsellingPortalProps {
  currentLanguage: Language;
}

export default function CareerCounsellingPortal({ currentLanguage }: CareerCounsellingPortalProps) {
  const [activeTab, setActiveTab] = useState<'stream-guide' | 'ai-assistant' | 'parents-faq' | 'soft-skills' | 'roadmaps'>('stream-guide');
  const [aiInput, setAiInput] = useState('');
  const [aiChat, setAiChat] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: 'Hello! I am your AI Career Assistant. Whether you are confused between PCB vs PCM after 10th, wondering how to prepare for UPSC, or need salary trends for Data Science, ask me anything!'
    }
  ]);

  const handleSendAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userText = aiInput;
    setAiInput('');
    setAiChat(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      let aiResponse = 'Thank you for your query. To excel in this path, we recommend focusing on NCERT fundamentals, maintaining consistent daily study habits, and utilizing our verified scholarship & mentorship schemes.';
      if (userText.toLowerCase().includes('mbbs') || userText.toLowerCase().includes('neet') || userText.toLowerCase().includes('doctor')) {
        aiResponse = 'For NEET & MBBS: Focus 50% of your time on NCERT Biology. Physics numerical practice is usually the deciding factor for government seat cut-offs (~640+ marks). Our Medical Directory provides statutory NMC counseling links and fee waivers.';
      } else if (userText.toLowerCase().includes('engineer') || userText.toLowerCase().includes('jee') || userText.toLowerCase().includes('btech')) {
        aiResponse = 'For Engineering & JEE: Master calculus and algebra in Mathematics, along with rotational mechanics in Physics. Aim for 98+ percentile in JEE Main for top NITs or IITs. Check out our AICTE Pragati scholarships if eligible.';
      } else if (userText.toLowerCase().includes('upsc') || userText.toLowerCase().includes('ias') || userText.toLowerCase().includes('police')) {
        aiResponse = 'For UPSC Civil Services: Start by reading class 6 to 12 NCERTs for History, Geography, and Polity. Read a national daily newspaper consistently. Dedicate at least 1 year to integrated Prelims + Mains answer writing.';
      }
      setAiChat(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 800);
  };

  const streamGuides = [
    {
      titleEn: 'After 10th: Science (PCM / PCB / PCMB)',
      titleHi: '10वीं के बाद: विज्ञान (PCM / PCB)',
      descEn: 'Ideal for students interested in engineering, medicine, research, biotechnology, architecture, or commercial aviation.',
      careers: ['Doctor (MBBS)', 'Software Engineer', 'Pilot', 'Data Scientist', 'Architect']
    },
    {
      titleEn: 'After 10th: Commerce with / without Math',
      titleHi: '10वीं के बाद: कॉमर्स (गणित के साथ/बिना)',
      descEn: 'Best suited for careers in chartered accountancy, corporate banking, financial analytics, business management, and economics.',
      careers: ['Chartered Accountant (CA)', 'Investment Banker', 'Company Secretary', 'MBA Executive', 'Tax Consultant']
    },
    {
      titleEn: 'After 10th: Arts, Humanities & Legal Studies',
      titleHi: '10वीं के बाद: कला एवं मानविकी (Arts)',
      descEn: 'The powerhouse stream for civil services (UPSC), corporate law, journalism, public administration, international relations, and design.',
      careers: ['IAS / IPS Officer', 'Corporate Lawyer', 'Journalist / Editor', 'Fashion Designer', 'Professor / Author']
    },
    {
      titleEn: 'After 10th: Polytechnic Diploma & ITI Skill Streams',
      titleHi: '10वीं के बाद: पॉलिटेक्निक एवं आईटीआई',
      descEn: 'Early professional entry offering direct 2nd-year B.Tech lateral entry or immediate technical employment in PSUs and railways.',
      careers: ['Junior Engineer (Railways/PWD)', 'Certified Electrician', 'CAD Draughtsman', 'CNC Machinist']
    }
  ];

  const parentsFaqs = [
    {
      q: 'How do I choose the right college without falling for marketing traps?',
      a: 'Always check statutory regulatory approvals first. Use our Master Colleges Directory to verify if a medical college is NMC approved or an engineering college is AICTE accredited. Do not rely solely on private advertisements.'
    },
    {
      q: 'What if we cannot afford private college tuition fees?',
      a: 'Never let money stop education. 1) Check if the student qualifies for government seats through entrance exams. 2) Apply for National Scholarship Portal (NSP) and trust merit grants. 3) Utilize the Vidya Lakshmi portal for subsidized educational loans without collateral up to ₹7.5 Lakhs.'
    },
    {
      q: 'Is hostel safety guaranteed for girls in outstation colleges?',
      a: 'When selecting colleges in our directory, filter by institutions offering on-campus secure women’s hostels with CCTV and resident wardens. Additionally, our Community Mentorship network connects parents with local community families in education hubs like Kota, Delhi, and Bhopal.'
    }
  ];

  const softSkillsModules = [
    { title: 'Communication & Diction', desc: 'Mastering clear English & Hindi speaking for corporate and UPSC interviews.' },
    { title: 'Leadership & Emotional Intelligence', desc: 'Managing stress during competitive exam preparation and leading team projects.' },
    { title: 'Group Discussion (GD) Tactics', desc: 'How to initiate, structure, and summarize discussions in MBA and PSU selection boards.' },
    { title: 'Time Management & Focus', desc: 'Scientific revision techniques, Pomodoro cycles, and overcoming digital distraction.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 font-sans animate-fadeIn" id="career_counselling_master_portal">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF37]/40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4" />
            <span>{currentLanguage === 'en' ? 'EXPERT CAREER COUNSELLING & AI GUIDANCE' : 'विशेषज्ञ करियर काउंसलिंग एवं एआई मार्गदर्शन'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black text-white">
            {currentLanguage === 'en' ? 'Career Counselling, Assessment & Mentorship' : currentLanguage === 'ur' ? 'کیریئر کونسلنگ، تشخیص اور رہنمائی' : 'करियर काउंसलिंग, आकलन एवं मार्गदर्शन'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-3xl leading-relaxed">
            {currentLanguage === 'en'
              ? 'Empowering students and parents to make scientific career decisions. Access stream assessment guides, future career trend roadmaps, parent FAQs, soft skills development, and our 24/7 AI Career Assistant.'
              : 'छात्रों और अभिभावकों को सही करियर निर्णय लेने के लिए सशक्त बनाना। स्ट्रीम चयन गाइड, भविष्य के करियर रोडमैप, अभिभावक प्रश्नोत्तर और हमारे 24/7 एआई करियर असिस्टेंट तक पहुंचें।'}
          </p>

          {/* SUB TABS */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('stream-guide')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                activeTab === 'stream-guide'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Choose Stream & College' : 'स्ट्रीम व कॉलेज चयन'}</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                activeTab === 'ai-assistant'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'AI Career Assistant (Live)' : 'एआई करियर असिस्टेंट'}</span>
            </button>
            <button
              onClick={() => setActiveTab('parents-faq')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                activeTab === 'parents-faq'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Parents Guidance & FAQs' : 'अभिभावक मार्गदर्शन'}</span>
            </button>
            <button
              onClick={() => setActiveTab('soft-skills')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                activeTab === 'soft-skills'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Soft Skills & Interview Prep' : 'सॉफ्ट स्किल्स एवं इंटरव्यू'}</span>
            </button>
            <button
              onClick={() => setActiveTab('roadmaps')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow cursor-pointer ${
                activeTab === 'roadmaps'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>{currentLanguage === 'en' ? 'Assessment & Consultation Booking' : 'करियर मूल्यांकन व बुकिंग'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'stream-guide' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B132B] mb-2 flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Scientific Stream Selection Guide (After 10th & 12th)' : 'वैज्ञानिक स्ट्रीम चयन गाइड'}</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                {currentLanguage === 'en' ? 'Understand the core competencies, higher education trajectories, and top career outcomes for every academic stream.' : 'प्रत्येक शैक्षणिक स्ट्रीम की प्रमुख दक्षताओं और करियर विकल्पों को समझें।'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {streamGuides.map((guide, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#004B23] transition shadow-xs flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{guide.titleEn}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{guide.descEn}</p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-200">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1.5">Top Career Trajectories</div>
                      <div className="flex flex-wrap gap-1.5">
                        {guide.careers.map((c, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-emerald-100 text-[#004B23] font-semibold text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FUTURE CAREER TRENDS */}
            <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#D4AF37]/30">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-[#FFD54A]" />
                <h3 className="text-lg font-bold text-white">Future Career Trends 2026 - 2035</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-[#FFD54A] text-sm mb-1">🤖 Artificial Intelligence & Data Science</div>
                  <p>High demand for machine learning engineers, AI ethicists, and cloud architects across Indian corporate and defense sectors.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-emerald-400 text-sm mb-1">🌱 Green Energy & Sustainable Tech</div>
                  <p>Massive job creation in solar PV installation, EV battery manufacturing, environmental law, and ESG auditing.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-rose-400 text-sm mb-1">🧬 Medical Biotechnology & Genetics</div>
                  <p>Rapid growth in clinical research, genomic medicine, robotic surgery technicians, and biomedical engineering.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-assistant' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-fadeIn max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#004B23] text-[#FFD54A] flex items-center justify-center font-bold text-lg shadow">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#0B132B]">AI Career Guidance Assistant (Future-Ready)</h3>
                  <p className="text-xs text-slate-500">Ask any question about entrance exams, colleges, salary ranges, or study strategies.</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live & Online
              </span>
            </div>

            {/* CHAT BOX */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 h-96 overflow-y-auto space-y-4 border border-slate-200 mb-4">
              {aiChat.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#004B23] text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-200 shadow-xs'
                  }`}>
                    {msg.sender === 'ai' && (
                      <div className="font-bold text-[10px] text-[#004B23] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Mentor
                      </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}
            <form onSubmit={handleSendAi} className="flex gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask e.g.: 'What is the cutoff for NEET in UP?' or 'How to become a CA?'"
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#004B23]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0B132B] hover:bg-[#004B23] text-[#FFD54A] font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {activeTab === 'parents-faq' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-fadeIn space-y-6">
            <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Parents Guidance & Frequently Asked Questions' : 'अभिभावक मार्गदर्शन एवं प्रश्नोत्तर'}</span>
            </h2>

            <div className="space-y-4">
              {parentsFaqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                  <h3 className="text-sm font-bold text-[#0B132B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#004B23] shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'soft-skills' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-fadeIn">
            <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2 mb-2">
              <Award className="w-6 h-6 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Soft Skills, Leadership & Interview Mastery' : 'सॉफ्ट स्किल्स एवं नेतृत्व विकास'}</span>
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              {currentLanguage === 'en' ? 'Technical degrees open doors, but communication and personality determine long-term career growth.' : 'तकनीकी डिग्री दरवाजे खोलती है, लेकिन संचार और व्यक्तित्व दीर्घकालिक विकास तय करते हैं।'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkillsModules.map((mod, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#004B23] transition space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                    <span>{mod.title}</span>
                    <span className="text-[10px] uppercase font-bold bg-emerald-100 text-[#004B23] px-2.5 py-0.5 rounded">Module {idx + 1}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roadmaps' && (
          <div className="space-y-10 animate-fadeIn">
            {/* 1. CAREER ASSESSMENT & INTEREST MAPPING QUIZ */}
            <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-700">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD54A] bg-amber-400/20 px-2.5 py-1 rounded">AI Psychometric Tool</span>
                  <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
                    <Compass className="w-6 h-6 text-[#FFD54A]" />
                    <span>{currentLanguage === 'en' ? 'Career Assessment & Interest Mapping Quiz' : 'करियर रुचि एवं कौशल मूल्यांकन टेस्ट'}</span>
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentLanguage === 'en' ? 'Discover your ideal profession based on your analytical reasoning, creative aptitude, personality type, and subject preferences.' : 'अपनी बौद्धिक और रचनात्मक क्षमता के आधार पर आदर्श करियर जानें।'}
                  </p>
                </div>
                <button onClick={() => alert('Starting 15-Minute Psychometric Career Assessment... Please ensure a quiet environment.')} className="px-5 py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] border border-[#FFD54A]/40 font-extrabold text-xs rounded-xl shadow transition flex items-center gap-2 cursor-pointer shrink-0">
                  <Zap className="w-4 h-4" /> <span>Start AI Quiz Now</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5"><Heart className="w-4 h-4" /> 1. Interest & Passion Mapping</div>
                  <p className="text-xs text-slate-300">Identifies whether you thrive in analytical engineering, clinical patient care, artistic design, or corporate leadership.</p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-blue-300 font-bold text-sm flex items-center gap-1.5"><Layers className="w-4 h-4" /> 2. Aptitude & Skill Analysis</div>
                  <p className="text-xs text-slate-300">Evaluates numerical ability, verbal comprehension, spatial reasoning, and logical problem-solving speed.</p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-amber-300 font-bold text-sm flex items-center gap-1.5"><Star className="w-4 h-4" /> 3. 10-Year Growth Prediction</div>
                  <p className="text-xs text-slate-300">Matches your profile with high-paying future industries like AI, Green Energy, Genomics, and Corporate Law.</p>
                </div>
              </div>
            </div>

            {/* 2. BOOK 1-ON-1 EXPERT CONSULTATION & MENTORSHIP SESSION */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Book 1-on-1 Expert Consultation & Guidance Session' : 'विशेषज्ञ परामर्श एवं अपॉइंटमेंट बुकिंग'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Schedule a personalized 45-minute video or in-person consultation with senior educators, IAS/IPS officers, and career psychologists.' : 'वरिष्ठ शिक्षकों, अधिकारियों और करियर काउंसलर के साथ 45 मिनट का सत्र बुक करें।'}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Free for Community</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
                  <h3 className="text-base font-bold text-slate-900">Select Consultation Category</h3>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#004B23] transition">
                      <input type="radio" name="counsel_type" defaultChecked className="text-[#004B23] focus:ring-[#004B23]" />
                      <span className="text-xs font-bold text-slate-800">Stream & College Selection (After 10th / 12th)</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#004B23] transition">
                      <input type="radio" name="counsel_type" className="text-[#004B23] focus:ring-[#004B23]" />
                      <span className="text-xs font-bold text-slate-800">UPSC / Civil Services Strategy & Mentorship</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#004B23] transition">
                      <input type="radio" name="counsel_type" className="text-[#004B23] focus:ring-[#004B23]" />
                      <span className="text-xs font-bold text-slate-800">Overseas Study Abroad & Scholarship Guidance</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#004B23] transition">
                      <input type="radio" name="counsel_type" className="text-[#004B23] focus:ring-[#004B23]" />
                      <span className="text-xs font-bold text-slate-800">Job Switch, Resume Review & Mock Interview Prep</span>
                    </label>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900">Applicant Details & Timing</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Student Full Name" className="p-2.5 bg-white border border-slate-300 rounded-xl text-xs outline-none focus:border-[#004B23]" />
                      <input type="text" placeholder="Mobile Number (WhatsApp)" className="p-2.5 bg-white border border-slate-300 rounded-xl text-xs outline-none focus:border-[#004B23]" />
                    </div>
                    <select className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 outline-none focus:border-[#004B23]">
                      <option>Preferred Date: This Saturday (Morning Slot 10 AM - 1 PM)</option>
                      <option>Preferred Date: This Saturday (Evening Slot 4 PM - 7 PM)</option>
                      <option>Preferred Date: Next Sunday (Morning Slot 10 AM - 1 PM)</option>
                    </select>
                    <textarea rows={2} placeholder="Briefly describe your career doubt or confusion..." className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs outline-none focus:border-[#004B23] resize-none"></textarea>
                  </div>
                  <button onClick={() => alert('Appointment Request submitted successfully! A verified counselor will contact you via WhatsApp within 24 hours to confirm your video meeting link.')} className="w-full py-3 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition flex items-center justify-center gap-2 cursor-pointer">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD54A]" /> <span>Confirm & Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
