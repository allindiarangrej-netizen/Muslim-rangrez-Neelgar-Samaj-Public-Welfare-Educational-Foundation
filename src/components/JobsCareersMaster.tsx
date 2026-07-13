import React, { useState } from 'react';
import { 
  Briefcase, Globe, FileText, Award, TrendingUp, CheckCircle, 
  ExternalLink, Download, Sparkles, BookOpen, Users, DollarSign, 
  HelpCircle, ChevronRight, Layers, Star, MapPin, Calendar, CheckCircle2, ArrowRight, Compass
} from 'lucide-react';
import { Language } from '../types';
import CareerOpportunities from './CareerOpportunities';
import InternationalCareers from './InternationalCareers';

interface JobsCareersMasterProps {
  currentLanguage: Language;
  initialTab?: 'all' | 'international';
}

export default function JobsCareersMaster({ currentLanguage, initialTab = 'all' }: JobsCareersMasterProps) {
  const [activeSubTab, setActiveSubTab] = useState<'national' | 'overseas' | 'resources' | 'minority_campus' | 'roadmaps'>(
    initialTab === 'international' ? 'overseas' : 'national'
  );

  const [selectedCVTemplate, setSelectedCVTemplate] = useState<string | null>(null);

  const cvTemplates = [
    {
      id: 'fresher',
      titleEn: 'Standard Fresher Graduate CV',
      titleHi: 'मानक फ्रेशर स्नातक सीवी',
      titleUr: 'معیاری فریشر گریجویٹ سی وی',
      descEn: 'Optimized ATS-friendly format for B.Tech, B.Com, BSc, and BA graduates applying for corporate or PSU roles.',
      format: 'DOCX / PDF',
      downloads: '14,200+'
    },
    {
      id: 'medical',
      titleEn: 'Medical & Healthcare Professional Resume',
      titleHi: 'चिकित्सा एवं स्वास्थ्य सेवा पेशेवर बायोडाटा',
      titleUr: 'میڈیکل اور ہیلتھ کیئر پروفیشنل ریزیومے',
      descEn: 'Structured format highlighting clinical rotations, medical council registrations, and hospital internships.',
      format: 'DOCX / PDF',
      downloads: '8,500+'
    },
    {
      id: 'gulf',
      titleEn: 'Gulf & Middle East Technical CV Format',
      titleHi: 'खाड़ी एवं मध्य पूर्व तकनीकी सीवी प्रारूप',
      titleUr: 'خلیج اور مشرق وسطیٰ کا تکنیکی سی وی فارمیٹ',
      descEn: 'Designed specifically for UAE, Saudi Arabia, and Qatar visa compliance with passport and project summaries.',
      format: 'DOCX / PDF',
      downloads: '22,400+'
    },
    {
      id: 'executive',
      titleEn: 'Experienced Managerial & Leadership CV',
      titleHi: 'अनुभवी प्रबंधकीय एवं नेतृत्व सीवी',
      titleUr: 'تجربہ کار منیجیریل اور لیڈرشپ سی وی',
      descEn: 'Executive layout focusing on team leadership, budget management, KPIs, and corporate achievements.',
      format: 'DOCX / PDF',
      downloads: '11,100+'
    }
  ];

  const interviewTips = [
    {
      questionEn: 'How to introduce yourself effectively in 60 seconds?',
      answerEn: 'Structure your introduction using the Present-Past-Future formula: State your current education or role, summarize your core academic achievements or internships, and explain why you are passionate about this specific company.'
    },
    {
      questionEn: 'How to handle government recruitment panel interviews?',
      answerEn: 'Maintain formal composure, dress in professional Indian business attire, listen carefully before answering, and demonstrate thorough awareness of national socio-economic policies and administrative duties.'
    },
    {
      questionEn: 'What to prepare before a Gulf technical video interview?',
      answerEn: 'Ensure a high-speed wired internet connection, verify your technical certifications are ready on screen, speak clearly with international English diction, and be prepared to explain safety protocols and site management.'
    }
  ];

  const salaryBenchmarks = [
    { role: 'Software Engineer (Entry / Fresher)', govt: '₹6.5 - ₹8.5 LPA (PSU/NTPC)', pvt: '₹4.5 - ₹12 LPA', gulf: 'AED 8,000 - 14,000 / mo' },
    { role: 'Medical Officer / Staff Nurse', govt: '₹7.0 - ₹10.0 LPA (AIIMS/State)', pvt: '₹3.5 - ₹7.0 LPA', gulf: 'AED 9,000 - 18,000 / mo' },
    { role: 'Civil / Site Project Engineer', govt: '₹6.0 - ₹9.0 LPA (NHAI/CPWD)', pvt: '₹3.0 - ₹6.5 LPA', gulf: 'AED 7,000 - 15,000 / mo' },
    { role: 'Chartered Accountant / Finance Analyst', govt: '₹8.0 - ₹12.0 LPA (SBI/RBI/PSU)', pvt: '₹6.0 - ₹15.0 LPA', gulf: 'AED 12,000 - 22,000 / mo' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 animate-fadeIn font-sans" id="jobs_careers_master_portal">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#0B132B] to-[#142244] text-white p-6 sm:p-10 rounded-3xl shadow-lg border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD54A] flex items-center gap-1.5 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'NATIONAL & INTERNATIONAL EMPLOYMENT HUB' : 'राष्ट्रीय एवं अंतर्राष्ट्रीय रोजगार हब'}</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-black text-white">
              {currentLanguage === 'en' ? 'Jobs, Careers & Employment Portal' : currentLanguage === 'ur' ? 'ملازمتیں، کیریئر اور روزگار پورٹل' : 'नौकरियां, करियर एवं रोजगार पोर्टल'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {currentLanguage === 'en'
                ? 'Comprehensive gateway to verified government recruitment, private corporate openings, PSU placements, international Gulf careers, apprenticeships, and professional resume building tools.'
                : 'सत्यापित सरकारी भर्तियों, निजी कॉरपोरेट रिक्तियों, पीएसयू प्लेसमेंट, खाड़ी के अंतरराष्ट्रीय करियर, अप्रेंटिसशिप और रिज्यूमे निर्माण का संपूर्ण पोर्टल।'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveSubTab('national')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                activeSubTab === 'national'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Govt & Private Jobs' : 'सरकारी व निजी नौकरियां'}</span>
            </button>
            <button
              onClick={() => setActiveSubTab('overseas')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                activeSubTab === 'overseas'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'International Jobs' : 'अंतरराष्ट्रीय नौकरियां'}</span>
            </button>
            <button
              onClick={() => setActiveSubTab('minority_campus')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                activeSubTab === 'minority_campus'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Users className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Minority, Campus & Walk-ins' : 'अल्पसंख्यक, कैंपस व वॉक-इन'}</span>
            </button>
            <button
              onClick={() => setActiveSubTab('resources')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                activeSubTab === 'resources'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'CV Builder & Prep' : 'सीवी बिल्डर'}</span>
            </button>
            <button
              onClick={() => setActiveSubTab('roadmaps')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                activeSubTab === 'roadmaps'
                  ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>{currentLanguage === 'en' ? 'Career Roadmaps & Articles' : 'करियर रोडमैप व लेख'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODULE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeSubTab === 'national' && (
          <div className="animate-fadeIn">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6 flex items-center justify-between text-xs text-emerald-900 font-medium">
              <span>💡 Displaying all verified Government Jobs, Private Corporate Roles, PSU Openings, Internships, Apprenticeships, and Official Recruitment links.</span>
              <span className="font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-lg">Live Updates</span>
            </div>
            <CareerOpportunities currentLanguage={currentLanguage} />
          </div>
        )}

        {activeSubTab === 'overseas' && (
          <div className="animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl mb-6 flex items-center justify-between text-xs text-blue-900 font-medium">
              <span>🌍 Displaying verified International Careers, Gulf Recruitment (UAE, Saudi Arabia, Qatar, Oman), Overseas Work Permits, and Embassy Guidance.</span>
              <span className="font-bold bg-blue-600 text-white px-2.5 py-1 rounded-lg">Zero Tolerance for Fake Agents</span>
            </div>
            <InternationalCareers currentLanguage={currentLanguage} />
          </div>
        )}

        {activeSubTab === 'resources' && (
          <div className="space-y-10 animate-fadeIn">
            {/* 1. RESUME BUILDER & CV TEMPLATES */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'ATS-Optimized Resume Builder & CV Templates' : 'सीवी टेंप्लेट और रिज्यूमे बिल्डर'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Download professional, recruiter-approved formats tailored for Indian government, private MNC, and Gulf recruitment.' : 'सरकारी, निजी व खाड़ी देश की नौकरियों के लिए स्वीकृत प्रारूप डाउनलोड करें।'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvTemplates.map((tpl) => (
                  <div key={tpl.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#004B23] transition flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#004B23]">
                          {tpl.format}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{tpl.downloads} downloads</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{tpl.titleEn}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{tpl.descEn}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setSelectedCVTemplate(tpl.id);
                          alert(`Downloading ${tpl.titleEn} template package... Check your downloads folder.`);
                        }}
                        className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition shadow cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Template</span>
                      </button>
                      <span className="text-[11px] font-bold text-amber-700 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Free for Community
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. SALARY BENCHMARK & CAREER ROADMAPS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'National & Gulf Salary Benchmarks 2026' : 'वेतनमान व सैलरी बेंचमार्क 2026'}</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                {currentLanguage === 'en' ? 'Comparative starting and mid-level compensation ranges across Government PSUs, Private Corporate MNCs, and Middle East contracts.' : 'सरकारी पीएसयू, निजी एमएनसी और मध्य पूर्व में शुरुआती और मध्य-स्तर के वेतन की तुलना।'}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-3.5 rounded-l-xl">Job Role / Discipline</th>
                      <th className="p-3.5">Government / PSU Sector</th>
                      <th className="p-3.5">Private Corporate Sector</th>
                      <th className="p-3.5 rounded-r-xl">Gulf / Overseas Contracts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {salaryBenchmarks.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="p-3.5 font-bold text-[#0B132B]">{item.role}</td>
                        <td className="p-3.5 font-semibold text-emerald-700">{item.govt}</td>
                        <td className="p-3.5 text-blue-700">{item.pvt}</td>
                        <td className="p-3.5 font-bold text-amber-800 bg-amber-50/50">{item.gulf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. INTERVIEW PREPARATION & CAREER GUIDANCE Q&A */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Interview Preparation & Career Guidance' : 'साक्षात्कार की तैयारी एवं मार्गदर्शन'}</span>
              </h2>

              <div className="space-y-4">
                {interviewTips.map((tip, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                    <h3 className="text-sm font-bold text-[#0B132B] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#004B23] text-white flex items-center justify-center text-xs font-mono">Q</span>
                      <span>{tip.questionEn}</span>
                    </h3>
                    <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                      <strong>Expert Tip:</strong> {tip.answerEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'minority_campus' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-700">
              <h2 className="text-xl font-bold text-[#FFD54A] flex items-center gap-2 mb-2">
                <Users className="w-6 h-6" />
                <span>{currentLanguage === 'en' ? 'Minority Employment Opportunities & Special Drives' : 'अल्पसंख्यक रोजगार अवसर एवं विशेष अभियान'}</span>
              </h2>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {currentLanguage === 'en' ? 'Verified opportunities under NMDFC loan-linked schemes, State Minority Finance Corporations, Waqf Board institutional administrative staff, and Maulana Azad Foundation project hiring.' : 'NMDFC ऋण योजनाओं, राज्य अल्पसंख्यक वित्त निगमों और वक्फ बोर्ड संस्थाओं के तहत रोजगार के अवसर।'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-[#0B132B] uppercase">NMDFC Scheme</span>
                  <h3 className="text-sm font-bold text-white">Minority Entrepreneurship & Micro-Enterprise Support</h3>
                  <p className="text-xs text-slate-300">Direct financing and commercial space allocation for minority youth starting tech consultancies or retail businesses.</p>
                  <a href="https://nmdfc.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#FFD54A] hover:underline pt-2">
                    <span>Visit NMDFC Portal</span> <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-400 text-[#0B132B] uppercase">Institutional Hiring</span>
                  <h3 className="text-sm font-bold text-white">State Waqf Boards & Educational Trusts Administrative Roles</h3>
                  <p className="text-xs text-slate-300">Recruitment for legal advisors, civil engineers, accountants, and IT system managers across minority institutions.</p>
                  <button onClick={() => alert('Opening State Waqf & Minority Institutional Recruitment Directory...')} className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:underline pt-2 cursor-pointer">
                    <span>Check Active Vacancies</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-400 text-[#0B132B] uppercase">Skill India</span>
                  <h3 className="text-sm font-bold text-white">PM-VISHWAKARMA & Minority Artisan Digital Upskilling</h3>
                  <p className="text-xs text-slate-300">Stipend-linked training and guaranteed e-commerce marketplace placement for traditional textile and crafts artisans.</p>
                  <a href="https://pmvishwakarma.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-300 hover:underline pt-2">
                    <span>Apply for Scheme</span> <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h2 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Campus Placements, Apprenticeships, Internships & Walk-ins' : 'कैंपस प्लेसमेंट, अप्रेंटिसशिप, इंटर्नशिप एवं वॉक-इन'}</span>
                </h2>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">14 Active Drives</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border-2 border-emerald-500/30 bg-white hover:shadow-md transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-emerald-100 text-[#004B23] px-2.5 py-0.5 rounded-full uppercase">Apprenticeship (NAPS)</span>
                    <span className="text-xs font-mono font-bold text-slate-500">Stipend: ₹15,000 / Mo</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">National Apprenticeship Promotion Scheme (NAPS) - Engineering & IT</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">1-year on-the-job industrial apprenticeship across major PSUs (BHEL, ONGC, NTPC) and corporate IT firms with government certification.</p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-semibold">Eligibility: ITI / Diploma / B.Tech</span>
                    <a href="https://www.apprenticeshipindia.gov.in" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-xl shadow hover:bg-[#00381a] transition flex items-center gap-1">
                      <span>Apply on NAPS Portal</span> <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full uppercase">Campus / Walk-in</span>
                    <span className="text-xs font-mono font-bold text-slate-500">Date: 25 July 2026</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Mega Community Corporate Walk-in & Campus Placement Drive</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Joint placement drive organized by Rangrez Community Chamber of Commerce in New Delhi & Bangalore for 2025/2026 graduates.</p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-semibold">Venue: Community Convention Hall</span>
                    <button onClick={() => alert('Walk-in Interview Pass generated! SMS confirmation sent to your registered mobile number.')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1 cursor-pointer">
                      <span>Register for Walk-in</span> <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'roadmaps' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <h2 className="text-xl font-bold text-[#0B132B] flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Professional Career Roadmaps & Progression Charts' : 'पेशेवर करियर रोडमैप एवं प्रगति चार्ट'}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {currentLanguage === 'en' ? 'Step-by-step career navigation guides prepared by senior community leaders in Technology, Civil Services, Healthcare, and Law.' : 'प्रौद्योगिकी, प्रशासनिक सेवा, चिकित्सा और कानून के क्षेत्र में कदम-दर-कदम करियर मार्गदर्शन।'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Tech & AI</span>
                    <h3 className="text-base font-bold text-slate-900">Full-Stack & AI Systems Architect Roadmap</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">From Bachelor's in CS/BCA to Cloud DevOps Engineer and Principal AI Architect. Includes certifications (AWS, Kubernetes, PyTorch) and salary growth from ₹6LPA to ₹65LPA+.</p>
                  </div>
                  <button onClick={() => alert('Downloading Complete Tech & AI Career Roadmap PDF...')} className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <Download className="w-4 h-4" /> <span>Download Roadmap PDF</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Civil Services</span>
                    <h3 className="text-base font-bold text-slate-900">UPSC / State PSC Officer 5-Year Preparation Journey</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Standardized NCERT timeline, optional selection strategy, prelims revision loops, interview personality development, and community mock interview boards.</p>
                  </div>
                  <button onClick={() => alert('Downloading Civil Services 5-Year Roadmap PDF...')} className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <Download className="w-4 h-4" /> <span>Download Roadmap PDF</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">Healthcare</span>
                    <h3 className="text-base font-bold text-slate-900">Medical Super-Specialty (MBBS to MD/DM/MCh)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Roadmap covering NEET-UG preparation, clinical residency in government hospitals, USMLE/PLAB overseas pathways, and establishing community diagnostic clinics.</p>
                  </div>
                  <button onClick={() => alert('Downloading Medical Career Pathway PDF...')} className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <Download className="w-4 h-4" /> <span>Download Roadmap PDF</span>
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
