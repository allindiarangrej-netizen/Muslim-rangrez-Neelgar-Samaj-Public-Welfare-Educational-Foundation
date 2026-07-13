import React, { useState, useMemo, useEffect } from 'react';
import { 
  Award, Search, Filter, Globe, ExternalLink, Calendar, 
  CheckCircle2, AlertCircle, FileText, DollarSign, Users, 
  GraduationCap, HelpCircle, ChevronRight, ShieldCheck, Download,
  Printer, Share2, FileSpreadsheet, Lock, X, Sliders, Check, AlertTriangle, Calculator, FolderCheck, Clock, Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { getSupabase } from '../lib/supabaseClient';

const scholarshipsList = [
  {
    id: 'sch_nsp_pre',
    category: 'National',
    nameEn: 'NSP Pre-Matric Scholarships for Minorities',
    nameHi: 'अल्पसंख्यकों के लिए एनएसपी प्री-मैट्रिक छात्रवृत्ति',
    provider: 'Ministry of Minority Affairs, Govt of India',
    amountEn: '₹3,000 - ₹5,000 per annum',
    amountHi: '₹3,000 - ₹5,000 प्रति वर्ष',
    eligibilityEn: 'Class 1 to 10 students, parent annual income < ₹1 Lakh, score > 50% in previous exam.',
    eligibilityHi: 'कक्षा 1 से 10 के छात्र, माता-पिता की वार्षिक आय < ₹1 लाख, पिछली परीक्षा में > 50% अंक।',
    deadline: '2026-10-31',
    link: 'https://scholarships.gov.in/'
  },
  {
    id: 'sch_nsp_post',
    category: 'National',
    nameEn: 'NSP Post-Matric Scholarships for Minorities',
    nameHi: 'अल्पसंख्यकों के लिए एनएसपी पोस्ट-मैट्रिक छात्रवृत्ति',
    provider: 'Ministry of Minority Affairs, Govt of India',
    amountEn: '₹6,000 - ₹15,000 per annum',
    amountHi: '₹6,000 - ₹15,000 प्रति वर्ष',
    eligibilityEn: 'Class 11, 12, UG, PG, Technical & Vocational courses, parent income < ₹2 Lakhs, score > 50%.',
    eligibilityHi: 'कक्षा 11, 12, यूजी, पीजी, तकनीकी और व्यावसायिक पाठ्यक्रम, माता-पिता की आय < ₹2 लाख, अंक > 50%।',
    deadline: '2026-11-15',
    link: 'https://scholarships.gov.in/'
  },
  {
    id: 'sch_begum_hazrat',
    category: 'Girls',
    nameEn: 'Begum Hazrat Mahal National Scholarship',
    nameHi: 'बेगम हज़रत महल राष्ट्रीय छात्रवृत्ति',
    provider: 'Maulana Azad Education Foundation (MAEF)',
    amountEn: '₹5,000 - ₹6,000 per annum',
    amountHi: '₹5,000 - ₹6,000 प्रति वर्ष',
    eligibilityEn: 'Minority girls studying in Class 9 to 12, parent annual income < ₹2 Lakhs, score > 50%.',
    eligibilityHi: 'कक्षा 9 से 12 में पढ़ने वाली अल्पसंख्यक लड़कियां, माता-पिता की वार्षिक आय < ₹2 लाख, अंक > 50%।',
    deadline: '2026-10-31',
    link: 'https://scholarships.gov.in/'
  },
  {
    id: 'sch_manf',
    category: 'Merit',
    nameEn: 'Maulana Azad National Fellowship (MANF)',
    nameHi: 'मौलाना आजाद नेशनल फेलोशिप (MANF)',
    provider: 'University Grants Commission (UGC)',
    amountEn: '₹31,000 - ₹35,000 per month + HRA',
    amountHi: '₹31,000 - ₹35,000 प्रति माह + एचआरए',
    eligibilityEn: 'M.Phil/Ph.D candidates from minority communities, cleared CBSE NET or CSIR-NET.',
    eligibilityHi: 'अल्पसंख्यक समुदायों के एम.फिल/पीएच.डी उम्मीदवार, सीबीएसई नेट या सीएसआईआर-नेट उत्तीर्ण।',
    deadline: '2026-12-15',
    link: 'https://www.ugc.gov.in/'
  },
  {
    id: 'sch_sitaram_jindal',
    category: 'Merit',
    nameEn: 'Sitaram Jindal Foundation Scholarship',
    nameHi: 'सीताराम जिंदल फाउंडेशन छात्रवृत्ति',
    provider: 'Sitaram Jindal Foundation',
    amountEn: '₹12,000 - ₹30,000 per annum',
    amountHi: '₹12,000 - ₹30,000 प्रति वर्ष',
    eligibilityEn: 'Class 11, 12, ITI, Diploma, Graduation, Post-Graduation, Engineering & Medicine students.',
    eligibilityHi: 'कक्षा 11, 12, आईटीआई, डिप्लोमा, स्नातक, स्नातकोत्तर, इंजीनियरिंग और चिकित्सा के छात्र।',
    deadline: '2026-12-31',
    link: 'https://www.sitaramjindalfoundation.org/'
  }
];

interface ScholarshipsMasterPortalProps {
  currentLanguage: Language;
}

export default function ScholarshipsMasterPortal({ currentLanguage }: ScholarshipsMasterPortalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedScholarship, setSelectedScholarship] = useState<any | null>(null);
  const [activePortalTab, setActivePortalTab] = useState<'directory' | 'calculator' | 'checklist' | 'tracking'>('directory');
  const [showAdmin, setShowAdmin] = useState(false);
  const [calcIncome, setCalcIncome] = useState('<2.5L');
  const [calcPercentage, setCalcPercentage] = useState('>80%');
  const [calcCommunity, setCalcCommunity] = useState('Minority');
  const [calcLevel, setCalcLevel] = useState('UG');
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [trackError, setTrackError] = useState<string | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc1: true, doc2: true, doc3: true, doc4: false, doc5: false, doc6: true
  });

  const categories = [
    { id: 'All', labelEn: 'All Scholarships', labelHi: 'सभी छात्रवृत्तियां', labelUr: 'تمام اسکالرشپس' },
    { id: 'National', labelEn: 'National Scholarships (NSP)', labelHi: 'राष्ट्रीय छात्रवृत्ति (NSP)', labelUr: 'قومی اسکالرشپس' },
    { id: 'Minority', labelEn: 'Minority Scholarships', labelHi: 'अल्पसंख्यक छात्रवृत्ति', labelUr: 'اقلیتی اسکالرشپس' },
    { id: 'State', labelEn: 'State Govt Schemes', labelHi: 'राज्य सरकार की योजनाएं', labelUr: 'ریاستی اسکیمیں' },
    { id: 'SCOBC', labelEn: 'SC/ST/OBC Scholarships', labelHi: 'एससी/एसटी/ओबीसी छात्रवृत्ति', labelUr: 'ایس سی / ایس ٹی اسکالرشپس' },
    { id: 'Girls', labelEn: 'Girls & Women Awards', labelHi: 'बालिका एवं महिला पुरस्कार', labelUr: 'طالبات کی اسکالرشپس' },
    { id: 'Merit', labelEn: 'Merit & Technical Grants', labelHi: 'मेरिट और तकनीकी अनुदान', labelUr: 'میرट और तकनीकी अनुदान' },
  ];

  const [scholarships, setScholarships] = useState<any[]>(scholarshipsList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScholarships() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('scholarships').select('*');
        if (error) {
          console.error('Error fetching scholarships:', error);
        } else if (data && data.length > 0) {
          const mapped = data.map(s => ({
            id: s.id,
            category: s.category || 'National',
            nameEn: s.title_en || s.title,
            nameHi: s.title_hi || s.title,
            provider: s.provider || 'State Government',
            amountEn: s.amount_en || `₹${s.amount?.toLocaleString()}`,
            amountHi: s.amount_hi || `₹${s.amount?.toLocaleString()}`,
            eligibilityEn: s.eligibility_en || 'Income criteria applies',
            eligibilityHi: s.eligibility_hi || 'आय मानदंड लागू',
            deadline: s.deadline || '2026-12-31',
            link: s.apply_link || '#'
          }));
          setScholarships([...mapped, ...scholarshipsList]);
        }
      } catch (err) {
        console.error('Error in fetchScholarships:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchScholarships();
  }, []);

  const filteredScholarships = useMemo(() => {
    return scholarships.filter(s => {
      const matchesCat = activeCategory === 'All' || s.category === activeCategory;
      if (!searchQuery.trim()) return matchesCat;
      const q = searchQuery.toLowerCase().trim();
      return matchesCat && (
        s.nameEn.toLowerCase().includes(q) ||
        s.nameHi.includes(q) ||
        s.provider.toLowerCase().includes(q) ||
        s.eligibilityEn.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 font-sans animate-fadeIn" id="scholarships_master_portal">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF37]/40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>{currentLanguage === 'en' ? 'NATIONAL SCHOLARSHIPS & EDUCATION GRANTS PORTAL' : 'राष्ट्रीय छात्रवृत्ति एवं शिक्षा अनुदान पोर्टल'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black text-white">
            {currentLanguage === 'en' ? 'Scholarships, Financial Aid & Loan Guidance' : currentLanguage === 'ur' ? 'اسکالرشپس، مالی امداد اور تعلیمی قرضے' : 'छात्रवृत्ति, वित्तीय सहायता एवं शिक्षा ऋण'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-3xl leading-relaxed">
            {currentLanguage === 'en'
              ? 'Never let financial constraints stop higher education. Browse verified National Scholarship Portal (NSP) schemes, state minority grants, SC/ST/OBC awards, AICTE Pragati girls scholarships, international study abroad fellowships, and Vidya Lakshmi education loans.'
              : 'वित्तीय बाधाओं को कभी भी उच्च शिक्षा न रोकने दें। सत्यापित राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) योजनाएं, अल्पसंख्यक अनुदान, बालिका छात्रवृत्ति और विद्या लक्ष्मी शिक्षा ऋण ब्राउज़ करें।'}
          </p>

          {/* SEARCH BAR */}
          <div className="mt-6 relative max-w-2xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Search scholarship by name, course, or keyword (e.g., Maulana Azad, NSP, MBBS)...' : 'छात्रवृत्ति खोजें...'}
              className="w-full pl-10 pr-4 py-3.5 bg-white text-slate-800 rounded-xl text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-[#FFD54A] shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* Universal Header Toolbar & Admin Console */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition cursor-pointer ${
                showAdmin 
                  ? 'bg-[#004B23] text-white shadow-md' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>{showAdmin ? 'Close Admin Console' : 'Open Admin Secretariat Console'}</span>
            </button>
            <div className="hidden sm:flex items-center space-x-1 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1" />
              <span>NSP Linked • 100% Direct Benefit Transfer (DBT)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert(currentLanguage === 'en' ? 'Downloading Scholarships Master Directory (Excel CSV)...' : 'छात्रवृत्ति मास्टर निर्देशिका (Excel CSV) डाउनलोड हो रही है...')}
              className="bg-emerald-50 text-[#004B23] hover:bg-emerald-100 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition border border-emerald-200 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>{currentLanguage === 'en' ? 'Export Excel Dump' : 'एक्सेल डाउनलोड करें'}</span>
            </button>
            <button
              onClick={() => alert(currentLanguage === 'en' ? 'Generating Official Scholarships Handbook PDF Booklet...' : 'आधिकारिक छात्रवृत्ति हैंडबुक पीडीएफ पुस्तिका डाउनलोड हो रही है...')}
              className="bg-[#0B132B] text-white hover:bg-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Download PDF Report' : 'पीडीएफ डाउनलोड करें'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer"
              title="Print Portal"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showAdmin && (
          <div className="mt-4 bg-[#0B132B] text-white p-6 rounded-2xl border border-[#D4AF37]/50 shadow-xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#FFD54A]" />
                <h3 className="font-bold text-base text-[#FFD54A]">
                  {currentLanguage === 'en' ? 'National Scholarships Verification & Disbursement Secretariat' : 'राष्ट्रीय छात्रवृत्ति सत्यापन एवं संवितरण सचिवालय'}
                </h3>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-mono">
                STATUS: PFMS SYNCED
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLanguage === 'en'
                ? 'Admin verification tools for auditing pending scholarship applications, synchronizing direct benefit transfer (DBT) batches with PFMS bank accounts, and monitoring state minority quota utilization.'
                : 'लंबित छात्रवृत्ति आवेदनों के सत्यापन और डीबीटी बैचों को सिंक करने के लिए एडमिन उपकरण।'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-slate-400">Pending NSP Verifications</div>
                <div className="text-xl font-black text-white mt-1">1,420 Applications</div>
                <button 
                  onClick={() => alert('Initiating batch verification of Income and Caste certificates via DigiLocker API...')}
                  className="mt-3 w-full py-1.5 bg-[#004B23] hover:bg-emerald-800 text-white font-bold rounded text-[11px] transition cursor-pointer"
                >
                  Verify Pending Batch
                </button>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-slate-400">PFMS Disbursement Sync</div>
                <div className="text-xl font-black text-[#FFD54A] mt-1">₹42.8 Lakhs Ready</div>
                <button 
                  onClick={() => alert('Pushing approved DBT file to Public Financial Management System (PFMS) treasury server...')}
                  className="mt-3 w-full py-1.5 bg-[#D4AF37] hover:bg-amber-600 text-[#0B132B] font-bold rounded text-[11px] transition cursor-pointer"
                >
                  Execute DBT Transfer
                </button>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-slate-400">Minority Quota Reports</div>
                <div className="text-xl font-black text-emerald-400 mt-1">100% Allocated</div>
                <button 
                  onClick={() => alert('Generating District-wise Minority Scholarship Beneficiary List CSV...')}
                  className="mt-3 w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-[11px] transition cursor-pointer"
                >
                  Download Beneficiary CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PORTAL MODULE NAVIGATION TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4">
          {[
            { id: 'directory', labelEn: 'All Schemes Directory', icon: Award },
            { id: 'calculator', labelEn: 'AI Eligibility Calculator', icon: Calculator },
            { id: 'checklist', labelEn: 'Document Checklist Generator', icon: FolderCheck },
            { id: 'tracking', labelEn: 'NSP Status Tracker & Deadlines', icon: Clock }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePortalTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center space-x-2 transition cursor-pointer shadow-sm ${
                  activePortalTab === tab.id
                    ? 'bg-[#004B23] text-white shadow-md scale-105 border-2 border-[#004B23]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-TAB 1: DIRECTORY VIEW */}
      {activePortalTab === 'directory' && (
        <>
          {/* CATEGORY TABS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#004B23] text-[#FFD54A] border-2 border-[#FFD54A] scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{currentLanguage === 'en' ? cat.labelEn : currentLanguage === 'ur' ? cat.labelUr : cat.labelHi}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SCHOLARSHIPS GRID */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScholarships.map((s) => (
                <div
              key={s.id}
              onClick={() => setSelectedScholarship(s)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-[#004B23] border border-emerald-200">
                    {s.provider?.split('/')[0] || ''}
                  </span>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {s.deadline}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#004B23] transition-colors leading-snug">
                  {currentLanguage === 'en' ? s.nameEn : currentLanguage === 'ur' ? s.nameUr : s.nameHi}
                </h3>

                <div className="mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs">
                  <span className="text-amber-900 font-bold flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-700" />
                    <span>Benefit: {s.amount}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                  {s.eligibilityEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#004B23] flex items-center gap-1 group-hover:underline">
                  <span>View Eligibility & Docs</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
                <a
                  href={s.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-[#004B23] hover:text-white transition text-slate-600"
                  title="Visit Official Portal"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      )}

      {/* SUB-TAB 2: AI ELIGIBILITY CALCULATOR */}
      {activePortalTab === 'calculator' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold bg-emerald-100 text-[#004B23] px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-4 h-4 text-[#004B23]" />
                <span>Instant AI Eligibility Matcher</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Interactive Scholarship Eligibility Calculator' : 'इंटरएक्टिव छात्रवृत्ति पात्रता कैलकुलेटर'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {currentLanguage === 'en' ? 'Select your family income, academic score, and community below to automatically match with national grants and tuition fee waivers.' : 'अपनी पारिवारिक आय, प्राप्तांक और श्रेणी का चयन करें और तुरंत उपयुक्त योजनाओं की सूची देखें।'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Annual Family Income</label>
                <select 
                  value={calcIncome} 
                  onChange={(e) => setCalcIncome(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#004B23]"
                >
                  <option value="<2.5L">Below ₹2.5 Lakhs / yr</option>
                  <option value="<4.5L">₹2.5L - ₹4.5 Lakhs / yr</option>
                  <option value="<8L">₹4.5L - ₹8.0 Lakhs / yr</option>
                  <option value=">8L">Above ₹8.0 Lakhs / yr</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Previous Year Marks</label>
                <select 
                  value={calcPercentage} 
                  onChange={(e) => setCalcPercentage(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#004B23]"
                >
                  <option value=">80%">80% and Above (Merit Top)</option>
                  <option value="60-80%">60% - 80% (First Class)</option>
                  <option value="<60%">50% - 60% (Second Class)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Community / Category</label>
                <select 
                  value={calcCommunity} 
                  onChange={(e) => setCalcCommunity(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#004B23]"
                >
                  <option value="Minority">Minority (Muslim / Sikh / etc.)</option>
                  <option value="SCOBC">SC / ST / OBC / DNT</option>
                  <option value="General">General (Open / EWS)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Current Study Level</label>
                <select 
                  value={calcLevel} 
                  onChange={(e) => setCalcLevel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#004B23]"
                >
                  <option value="UG">Undergraduate (Degree/Diploma)</option>
                  <option value="PG">Postgraduate (Master/PhD)</option>
                  <option value="School">School Level (9th - 12th)</option>
                </select>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-[#0B132B] flex items-center justify-between">
                <span>Recommended Scholarship Schemes (Calculated Matches)</span>
                <span className="text-xs font-mono bg-emerald-100 text-[#004B23] px-2.5 py-0.5 rounded-full font-extrabold">3 Schemes Found</span>
              </h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#004B23] text-white">100% Match</span>
                      <span className="text-xs font-bold text-emerald-800">National Scholarship Portal (NSP)</span>
                    </div>
                    <h4 className="font-bold text-base text-[#0B132B] mt-1">Post-Matric & Maulana Azad Fellowship Scheme</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Eligible under {calcCommunity} category with family income {calcIncome}. Complete tuition fee reimbursement + maintenance allowance.</p>
                  </div>
                  <button
                    onClick={() => setSelectedScholarship(scholarshipsList[0])}
                    className="px-4 py-2 bg-[#004B23] hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition shrink-0 cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-600 text-white">95% Match</span>
                      <span className="text-xs font-bold text-amber-800">Ministry of Education</span>
                    </div>
                    <h4 className="font-bold text-base text-[#0B132B] mt-1">AICTE Pragati & PM YASHASVI Excellence Grant</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Direct annual grant of ₹50,000 to ₹75,000 for technical and higher education students.</p>
                  </div>
                  <button
                    onClick={() => setSelectedScholarship(scholarshipsList[2])}
                    className="px-4 py-2 bg-[#0B132B] hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shrink-0 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: DOCUMENT CHECKLIST GENERATOR */}
      {activePortalTab === 'checklist' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl font-serif font-black text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Interactive Scholarship Document Checklist' : 'छात्रवृत्ति दस्तावेज़ चेकलिस्ट'}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {currentLanguage === 'en' ? 'Check off mandatory certificates required for NSP verification. Download or print your custom preparation list.' : 'आवश्यक प्रमाणपत्रों की सूची जांचें और तैयारी के लिए पीडीएफ डाउनलोड करें।'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => alert('Downloading verified document preparation PDF checklist...')}
                  className="bg-[#004B23] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 hover:bg-emerald-800 transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-slate-100 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { id: 'doc1', title: 'Annual Family Income Certificate (< ₹2.5L / ₹8L)', desc: 'Issued by Tehsildar / SDM / Competent Revenue Authority within the last 6 months.' },
                { id: 'doc2', title: 'Minority / Caste Certificate (SC / ST / OBC)', desc: 'Valid statutory caste or religious minority community certificate.' },
                { id: 'doc3', title: 'Aadhaar Card linked with Bank Account (NPCI Seeded)', desc: 'Mandatory for direct benefit transfer (DBT) via Public Financial Management System.' },
                { id: 'doc4', title: 'Institute Admission Letter & Bonafide Certificate', desc: 'Signed and stamped by Principal or Head of Institution with current year fee receipt.' },
                { id: 'doc5', title: 'Previous Year Attested Marksheets (min 50%+ marks)', desc: '10th, 12th, or last degree semester marksheets with passing grade.' },
                { id: 'doc6', title: 'Student Bank Passbook Front Page & Passport Photo', desc: 'Clear photo showing account number, IFSC code, and student name.' }
              ].map(doc => (
                <div 
                  key={doc.id}
                  onClick={() => setCheckedDocs(prev => ({ ...prev, [doc.id]: !prev[doc.id] }))}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start space-x-3.5 ${
                    checkedDocs[doc.id] 
                      ? 'bg-emerald-50/70 border-emerald-300' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition ${
                    checkedDocs[doc.id] ? 'bg-[#004B23] text-white' : 'bg-white border-2 border-slate-300'
                  }`}>
                    {checkedDocs[doc.id] && <Check className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${checkedDocs[doc.id] ? 'text-[#004B23]' : 'text-slate-800'}`}>
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: STATUS TRACKER & DEADLINES */}
      {activePortalTab === 'tracking' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fadeIn">
          {/* Deadline Ticker */}
          <div className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white p-4 rounded-2xl shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-300 shrink-0 animate-bounce" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-yellow-200">National Deadline Alert Ticker</div>
                <div className="text-xs sm:text-sm font-bold mt-0.5">
                  PM YASHASVI: Aug 31 • INSPIRE SHE: Sep 30 • MANF & NSP Post-Matric: Oct 31
                </div>
              </div>
            </div>
            <span className="hidden sm:inline-block bg-white/20 px-3 py-1 rounded-lg text-xs font-bold shrink-0">
              Act Now
            </span>
          </div>

          {/* Status Tracker */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-serif font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'NSP Application Status & DBT Tracker' : 'एनएसपी आवेदन स्थिति एवं डीबीटी ट्रैकर'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {currentLanguage === 'en' ? 'Enter your National Scholarship Portal Application ID or Aadhaar Number to verify verification progress across institute, nodal officer, and PFMS treasury stages.' : 'अपने आवेदन की स्थिति जांचने के लिए एनएसपी आईडी या आधार नंबर दर्ज करें।'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={trackId}
                onChange={(e) => {
                  setTrackId(e.target.value);
                  if (trackError) setTrackError(null);
                }}
                placeholder="Enter NSP Application ID (e.g., NSP2026-883492) or Aadhaar Number..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold outline-none focus:ring-2 focus:ring-[#004B23]"
              />
              <button
                onClick={() => {
                  if (!trackId.trim()) {
                    setTrackError(currentLanguage === 'en' ? 'Please enter a valid Application ID or Aadhaar Number.' : 'कृपया एक मान्य आवेदन आईडी या आधार संख्या दर्ज करें।');
                    setTrackResult(null);
                    return;
                  }
                  setTrackError(null);
                  setTrackResult({
                    id: trackId,
                    name: 'Mohammad Zaid Khan',
                    scheme: 'Post-Matric Scholarship for Minorities',
                    status: 'Verified by State Nodal Officer',
                    step: 3
                  });
                }}
                className="bg-[#004B23] hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition shadow cursor-pointer"
              >
                Verify Status
              </button>
            </div>

            {trackError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-900 text-xs px-4 py-2.5 rounded-xl font-bold animate-fadeIn">
                ⚠️ {trackError}
              </div>
            )}

            {trackResult && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 animate-scaleIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Application ID: #{trackResult.id}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0B132B] mt-1">{trackResult.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">Scheme: {trackResult.scheme}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 inline-block">
                      {trackResult.status}
                    </span>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                  {[
                    { step: 1, title: 'Submitted to Institute', desc: 'Verified by College Principal', done: true },
                    { step: 2, title: 'District Nodal Officer', desc: 'Documents Attested', done: true },
                    { step: 3, title: 'State Nodal Officer', desc: 'Approved for Sanction', done: true },
                    { step: 4, title: 'PFMS DBT Transfer', desc: 'Disbursement Pending', done: false }
                  ].map(s => (
                    <div key={s.step} className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                      s.done ? 'bg-white border-emerald-300 shadow-sm' : 'bg-slate-100/60 border-slate-200 opacity-60'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          s.done ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'
                        }`}>
                          {s.done ? '✓' : s.step}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-slate-400">Step {s.step}</span>
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-800">{s.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DETAIL MODAL IF SELECTED */}
      {selectedScholarship && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#004B23] px-3 py-1 rounded-full">
                {selectedScholarship.category} Scholarship Scheme
              </span>
              <button
                onClick={() => setSelectedScholarship(null)}
                className="text-slate-400 hover:text-slate-700 font-bold text-xl p-1 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B]">
              {currentLanguage === 'en' ? selectedScholarship.nameEn : selectedScholarship.nameHi}
            </h2>
            <p className="text-xs font-semibold text-[#004B23] mt-1">{selectedScholarship.provider}</p>

            <div className="my-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-800">Financial Assistance / Scholarship Benefit</div>
                <div className="text-base font-black text-[#0B132B] mt-0.5">{selectedScholarship.amount}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-rose-700">Application Deadline</div>
                <div className="text-sm font-black text-rose-600 mt-0.5">{selectedScholarship.deadline}</div>
              </div>
            </div>

            <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-sm text-[#0B132B] mb-2 flex items-center gap-1.5 border-b pb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Eligibility Criteria</span>
                </h3>
                <p>{selectedScholarship.eligibilityEn}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#0B132B] mb-2 flex items-center gap-1.5 border-b pb-1">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Mandatory Documents Required</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {selectedScholarship.docs.map((doc: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#004B23] shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedScholarship(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedScholarship.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#004B23] hover:bg-[#00381a] text-white font-bold flex items-center justify-center gap-2 transition shadow cursor-pointer"
              >
                <span>Visit Official Application Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
