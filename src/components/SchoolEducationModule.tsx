import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Download, 
  FileText, 
  Search, 
  Sparkles, 
  ChevronRight, 
  HelpCircle, 
  Users, 
  Calendar, 
  ExternalLink, 
  ArrowUpRight, 
  Video, 
  Star, 
  Compass, 
  Bookmark, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Printer, 
  Share2, 
  Building2, 
  Layers, 
  Filter, 
  Check, 
  X,
  Scale
} from 'lucide-react';
import { Language } from '../types';

interface SchoolEducationModuleProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function SchoolEducationModule({ currentLanguage, onNavigate }: SchoolEducationModuleProps) {
  const [activeSection, setActiveSection] = useState<'directory' | 'olympiads' | 'board_hub' | 'ncert' | 'scholarships' | 'career_guidance'>('directory');
  
  // Board Hub State
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'ICSE' | 'State Boards' | 'IB' | 'NIOS'>('CBSE');
  const [selectedClass, setSelectedClass] = useState<string>('Class 10');
  
  // NCERT State
  const [ncertClass, setNcertClass] = useState<string>('Class 10');
  const [ncertSubject, setNcertSubject] = useState<string>('Mathematics');
  
  // Olympiad State
  const [selectedOlympiad, setSelectedOlympiad] = useState<string>('Science');
  
  // Saved / Bookmarked items
  const [savedItems, setSavedItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rcb_school_saved');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleSave = (id: string) => {
    let updated: string[];
    if (savedItems.includes(id)) {
      updated = savedItems.filter(i => i !== id);
    } else {
      updated = [...savedItems, id];
    }
    setSavedItems(updated);
    localStorage.setItem('rcb_school_saved', JSON.stringify(updated));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    alert('Generating School Education PDF Guide... File will download shortly.');
  };

  // Olympiads Data
  const olympiadsList = [
    {
      id: 'nso',
      name: 'National Science Olympiad (NSO)',
      category: 'Science Olympiad',
      organizer: 'Science Olympiad Foundation (SOF)',
      classes: 'Class 1 to 12',
      date: 'November 2026',
      awards: 'Gold Medals, Cash Prizes up to ₹50,000 & International Recognition',
      syllabus: 'Physics, Chemistry, Biology & High-Order Thinking Skills (HOTS)',
      samplePaperUrl: '#'
    },
    {
      id: 'imo',
      name: 'International Mathematics Olympiad (IMO)',
      category: 'Mathematics Olympiad',
      organizer: 'SOF & Homi Bhabha Centre',
      classes: 'Class 1 to 12',
      date: 'December 2026',
      awards: 'International Rank Medals, Merit Certificates, Educational Study Visits',
      syllabus: 'Logical Reasoning, Mathematical Reasoning, Everyday Mathematics',
      samplePaperUrl: '#'
    },
    {
      id: 'ieo',
      name: 'International English Olympiad (IEO)',
      category: 'English Olympiad',
      organizer: 'SOF & British Council',
      classes: 'Class 1 to 12',
      date: 'October 2026',
      awards: 'Global Excellence Certificates & Cambridge Learning Kits',
      syllabus: 'Word & Structure Knowledge, Reading Comprehension, Spoken & Written Expression',
      samplePaperUrl: '#'
    },
    {
      id: 'nco',
      name: 'National Cyber Olympiad (NCO)',
      category: 'Cyber Olympiad',
      organizer: 'SOF Cyber Cell',
      classes: 'Class 1 to 10',
      date: 'January 2027',
      awards: 'Tech Genius Trophy, Laptop Vouchers, Coding Scholarships',
      syllabus: 'Computers & IT, Computational Thinking, Coding Logic, AI Basics',
      samplePaperUrl: '#'
    },
    {
      id: 'igko',
      name: 'International General Knowledge Olympiad (IGKO)',
      category: 'GK Olympiad',
      organizer: 'SOF',
      classes: 'Class 1 to 10',
      date: 'September 2026',
      awards: 'Merit Certificates, Encyclopedias & National Medals',
      syllabus: 'Current Affairs, World Geography, History, Science, Sports, Literature',
      samplePaperUrl: '#'
    },
    {
      id: 'ijo',
      name: 'International Junior Science Olympiad (IJSO)',
      category: 'International Olympiads',
      organizer: 'IPhO / ICHO Committee',
      classes: 'Class 8 to 10 (Age < 16)',
      date: 'August 2026 (Selection)',
      awards: 'Fully Sponsored Overseas Travel & International Medals for India Team',
      syllabus: 'Advanced Physics, Chemistry, Biology & Laboratory Practicals',
      samplePaperUrl: '#'
    }
  ];

  // NCERT Subjects Data
  const ncertChapters = [
    { ch: 'Chapter 1', title: 'Real Numbers / Life Processes / Chemical Reactions', pdf: 'Class_10_Ch1.pdf', solutionsCount: '15 Solutions' },
    { ch: 'Chapter 2', title: 'Polynomials / Control & Coordination / Acids & Bases', pdf: 'Class_10_Ch2.pdf', solutionsCount: '18 Solutions' },
    { ch: 'Chapter 3', title: 'Pair of Linear Equations / Metals & Non-Metals', pdf: 'Class_10_Ch3.pdf', solutionsCount: '22 Solutions' },
    { ch: 'Chapter 4', title: 'Quadratic Equations / Carbon & Its Compounds', pdf: 'Class_10_Ch4.pdf', solutionsCount: '20 Solutions' },
    { ch: 'Chapter 5', title: 'Arithmetic Progressions / Periodic Classification', pdf: 'Class_10_Ch5.pdf', solutionsCount: '16 Solutions' },
    { ch: 'Chapter 6', title: 'Triangles / How do Organisms Reproduce', pdf: 'Class_10_Ch6.pdf', solutionsCount: '25 Solutions' }
  ];

  // School Scholarships Data
  const schoolScholarships = [
    {
      id: 'sch1',
      title: 'National Means-cum-Merit Scholarship (NMMS)',
      provider: 'Ministry of Education, Govt of India',
      amount: '₹12,000 per annum (Class 9 to 12)',
      eligibility: 'Class 8 passed students with >55% marks and family income < ₹3.5 Lakhs.',
      deadline: '31 October 2026'
    },
    {
      id: 'sch2',
      title: 'Begum Hazrat Mahal National Scholarship',
      provider: 'Maulana Azad Education Foundation (MAEF)',
      amount: '₹5,000 (Class 9-10) / ₹6,000 (Class 11-12)',
      eligibility: 'Girl students belonging to minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).',
      deadline: '15 November 2026'
    },
    {
      id: 'sch3',
      title: 'CBSE Single Girl Child Merit Scholarship',
      provider: 'Central Board of Secondary Education',
      amount: '₹500 per month for 2 years',
      eligibility: 'Single girl child scoring 60%+ in CBSE Class 10 Board Exams.',
      deadline: '30 November 2026'
    },
    {
      id: 'sch4',
      title: 'KVPY & INSPIRE She Scholarship for School Scientists',
      provider: 'Department of Science and Technology (DST)',
      amount: '₹80,000 per annum + Mentorship Camp',
      eligibility: 'Top 1% rank holders in Class 10/12 Board Exams pursuing Basic & Natural Sciences.',
      deadline: '31 December 2026'
    }
  ];

  // Career Guidance Streams
  const careerGuidanceStreams = [
    {
      title: 'Science Stream - PCM (Engineering & Tech)',
      subjects: 'Physics, Chemistry, Mathematics, Computer Science / English',
      careers: ['Software Engineer / AI Architect', 'Commercial Pilot', 'Architect (B.Arch)', 'Data Scientist', 'Robotics & Automation'],
      entrances: 'JEE Main, JEE Advanced, CUET, BITSAT, State CETs'
    },
    {
      title: 'Science Stream - PCB (Medical & Healthcare)',
      subjects: 'Physics, Chemistry, Biology, Psychology / Biotechnology',
      careers: ['MBBS Doctor / Surgeon', 'BDS Dentist', 'Pharm.D & B.Pharm Specialist', 'Biotechnology Researcher', 'Veterinary Surgeon'],
      entrances: 'NEET UG, CUET Biology, Nursing Entrance'
    },
    {
      title: 'Commerce Stream (Finance & Business)',
      subjects: 'Accountancy, Business Studies, Economics, Mathematics / Informatics',
      careers: ['Chartered Accountant (CA)', 'Company Secretary (CS)', 'Financial Analyst (CFA)', 'Investment Banker', 'Business Entrepreneur'],
      entrances: 'CA Foundation, IPMAT (IIM Indore), CUET Commerce'
    },
    {
      title: 'Arts & Humanities Stream (Civil Services & Law)',
      subjects: 'Political Science, History, Sociology, Psychology, Fine Arts',
      careers: ['UPSC Civil Services (IAS/IPS)', 'Corporate Lawyer (BA LLB)', 'Journalist & Media Specialist', 'Psychologist', 'Archaeologist'],
      entrances: 'CLAT, CUET Arts, NTA NET, Civil Services'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8 border-2 border-[#FFD54A]/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFD54A]/20 border border-[#FFD54A]/40 text-[#FFD54A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>LEVEL 1 • SCHOOL EDUCATION ECOSYSTEM (PRE-NURSERY TO CLASS XII)</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                School Education Hub
              </h1>
              <p className="mt-2 text-sm text-slate-200 max-w-2xl leading-relaxed">
                Comprehensive national resources for students, parents, and teachers: 300+ Verified School Directories, Board Examination Hub (CBSE, ICSE, State Boards), NCERT Digital Library, Olympiads, Scholarships, and Career Stream Assessments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button 
                onClick={handleExportPDF}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Download PDF Guide</span>
              </button>
              <button 
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-300" />
                <span>Print Section</span>
              </button>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/10 text-xs font-bold">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('schools-directory');
                else setActiveSection('directory');
              }}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'directory'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏫 Verified Schools Directory (300+)</span>
            </button>
            <button
              onClick={() => setActiveSection('board_hub')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'board_hub'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>📋 Board Exam Hub (CBSE/ICSE/State)</span>
            </button>
            <button
              onClick={() => setActiveSection('ncert')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'ncert'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>📚 NCERT Digital Library</span>
            </button>
            <button
              onClick={() => setActiveSection('olympiads')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'olympiads'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏅 National & Int’l Olympiads</span>
            </button>
            <button
              onClick={() => setActiveSection('scholarships')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'scholarships'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🎓 Student Scholarships</span>
            </button>
            <button
              onClick={() => setActiveSection('career_guidance')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'career_guidance'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🧭 Career Stream Guidance</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: DIRECTORY LAUNCHER BANNER */}
        {activeSection === 'directory' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="bg-emerald-100 text-[#004B23] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Accredited School Search Engine
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Search & Filter Verified Schools across India
                </h3>
                <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                  Browse over 300+ verified school profiles including Government Schools, Kendriya Vidyalaya (KV), Jawahar Navodaya Vidyalaya (JNV), PM SHRI Schools, Sainik Schools, Minority Educational Institutions, Boarding Schools, and International IB/CBSE Schools across 28+ States & UTs.
                </p>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('schools-directory')}
                className="px-6 py-3.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Open Full School Directory</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Category Cards Quick Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-6 pt-6 border-t border-slate-100 text-center">
              {[
                { title: 'Kendriya Vidyalaya', count: '1,250+ KVs', icon: '🏛️' },
                { title: 'Jawahar Navodaya', count: '661 JNVs', icon: '🏫' },
                { title: 'PM SHRI Schools', count: '14,500+ PM SHRI', icon: '⭐' },
                { title: 'Minority Schools', count: 'Accredited', icon: '🕌' },
                { title: 'Sainik & Military', count: '33 Sainik', icon: '🎖️' },
                { title: 'Boarding & Hostel', count: 'Residential', icon: '🏠' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => onNavigate && onNavigate('schools-directory')}
                  className="bg-slate-50 hover:bg-emerald-50/80 p-3 rounded-2xl border border-slate-200 hover:border-emerald-400 transition cursor-pointer"
                >
                  <span className="text-2xl block mb-1">{item.icon}</span>
                  <span className="font-bold text-xs text-slate-800 block line-clamp-1">{item.title}</span>
                  <span className="text-[10px] text-slate-500">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: BOARD EXAMINATION HUB */}
        {activeSection === 'board_hub' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#004B23]" />
                  <span>National Board Examination Hub</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Access official board sample papers, model question banks, previous 10-year question papers, toppers' answer keys, and syllabus blueprints.
                </p>
              </div>

              {/* Board Selector */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                {(['CBSE', 'ICSE', 'State Boards', 'IB', 'NIOS'] as const).map(board => (
                  <button
                    key={board}
                    onClick={() => setSelectedBoard(board)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedBoard === board
                        ? 'bg-[#004B23] text-white shadow'
                        : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {board}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Tabs & Resource Cards */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['Class 10 (Secondary)', 'Class 12 (Sr. Secondary)', 'Class 8 (Middle Level)', 'Class 5 (Primary Level)'].map(cls => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                      selectedClass === cls
                        ? 'bg-[#FFD54A] text-[#004B23] font-black shadow'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase bg-[#004B23] text-white px-2.5 py-0.5 rounded">Model & Sample Papers</span>
                    <Download className="w-4 h-4 text-[#004B23]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{selectedBoard} {selectedClass} Official Sample Papers 2026</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Latest marking schemes and step-wise solution keys released by {selectedBoard} examination control cell.
                  </p>
                  <button className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">
                    <span>Download All Subject PDFs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase bg-blue-800 text-white px-2.5 py-0.5 rounded">Previous 10 Year Question Papers</span>
                    <Download className="w-4 h-4 text-blue-800" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Solved Previous Papers (2015 - 2025)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chapter-wise sorted questions with detailed step solutions for Mathematics, Science, Social Studies & English.
                  </p>
                  <button className="text-xs font-bold text-blue-800 hover:underline flex items-center gap-1 cursor-pointer">
                    <span>Access Solved Papers</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase bg-amber-700 text-white px-2.5 py-0.5 rounded">Toppers Answer Sheets</span>
                    <Star className="w-4 h-4 text-amber-700 fill-current" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">All India Rank 1 Handwritten Answer Keys</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Learn diagram representation techniques, margin spacing, and speed writing tactics from National Merit Toppers.
                  </p>
                  <button className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer">
                    <span>Inspect Topper Copies</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: NCERT DIGITAL LIBRARY */}
        {activeSection === 'ncert' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#004B23]" />
                  <span>NCERT Digital Library & Video Lessons</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  100% Free NCERT eBooks, Chapter Solutions, Summary Mindmaps, Question Banks & Animated Video Lessons from Class 1 to Class 12.
                </p>
              </div>

              {/* Class Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={ncertClass}
                  onChange={(e) => setNcertClass(e.target.value)}
                  className="py-2 px-3 text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl outline-none"
                >
                  {['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={ncertSubject}
                  onChange={(e) => setNcertSubject(e.target.value)}
                  className="py-2 px-3 text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl outline-none"
                >
                  {['Mathematics', 'Science / Physics', 'Chemistry', 'Biology', 'Social Science', 'English Literature', 'Hindi & Vernacular'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Chapters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ncertChapters.map((ch, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase text-[#004B23] bg-emerald-100 px-2 py-0.5 rounded">
                        {ch.ch} • {ncertClass}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500">{ch.solutionsCount}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{ch.title}</h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#004B23]">
                    <span className="flex items-center gap-1 hover:underline cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> PDF Book
                    </span>
                    <span className="flex items-center gap-1 hover:underline cursor-pointer text-blue-700">
                      <Video className="w-3.5 h-3.5" /> Video Lesson
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: OLYMPIADS */}
        {activeSection === 'olympiads' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#004B23]" />
                  <span>National & International School Olympiads</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Empowering school students through competitive Olympiads in Science, Mathematics, English, Cyber, General Knowledge, and International Olympiad delegations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {olympiadsList.map(ol => (
                <div key={ol.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase bg-[#FFD54A] text-[#004B23] px-2.5 py-0.5 rounded">
                        {ol.category}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500">{ol.classes}</span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">{ol.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium mb-3">Organizer: {ol.organizer}</p>

                    <div className="space-y-1.5 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80 mb-3">
                      <div><strong className="text-slate-800">Exam Window:</strong> {ol.date}</div>
                      <div><strong className="text-slate-800">Awards:</strong> {ol.awards}</div>
                      <div><strong className="text-slate-800">Syllabus Focus:</strong> {ol.syllabus}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                    <button className="text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> Download Mock Paper
                    </button>
                    <button className="bg-[#004B23] text-white px-3 py-1.5 rounded-lg hover:bg-[#00381a] transition cursor-pointer text-[11px]">
                      Registration Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: SCHOOL SCHOLARSHIPS */}
        {activeSection === 'scholarships' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#004B23]" />
                  <span>Student Scholarships & Financial Aid</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  100% Verified Government, Minority, Merit-cum-Means, Sports, Girl Child, and Private NGO Scholarships for primary and secondary students.
                </p>
              </div>

              <button 
                onClick={() => onNavigate && onNavigate('scholarships')}
                className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-xl hover:bg-[#00381a] transition cursor-pointer"
              >
                View All National Scholarships
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schoolScholarships.map(s => (
                <div key={s.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                      {s.provider}
                    </span>
                    <span className="text-[11px] font-extrabold text-rose-600">Deadline: {s.deadline}</span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-sm">{s.title}</h4>
                  
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div><strong className="text-slate-800">Financial Support:</strong> <span className="font-bold text-[#004B23]">{s.amount}</span></div>
                    <div><strong className="text-slate-800">Eligibility Criteria:</strong> {s.eligibility}</div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold">
                    <button className="text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>Check Detailed Scheme Document</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="https://scholarships.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-800 transition cursor-pointer text-[11px]"
                    >
                      Apply on NSP Portal
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6: CAREER GUIDANCE & STREAM SELECTION */}
        {activeSection === 'career_guidance' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#004B23]" />
                  <span>Stream Selection & Career Guidance (After Class 8, 10 & 12)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Scientific interest mapping, subject combination recommendations, competitive entrance alignment, and career roadmaps.
                </p>
              </div>

              <button 
                onClick={() => onNavigate && onNavigate('career-counselling')}
                className="px-4 py-2 bg-[#004B23] text-[#FFD54A] text-xs font-bold rounded-xl hover:bg-[#00381a] transition cursor-pointer"
              >
                Take AI Career Assessment Test
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerGuidanceStreams.map((st, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition space-y-3">
                  <h4 className="font-extrabold text-slate-900 text-base text-[#004B23]">{st.title}</h4>
                  
                  <div className="text-xs space-y-2 bg-white p-3 rounded-xl border border-slate-200">
                    <div>
                      <strong className="text-slate-800 block text-[10px] uppercase text-slate-400 font-bold">Key Subjects:</strong>
                      <span className="text-slate-700 font-medium">{st.subjects}</span>
                    </div>
                    <div>
                      <strong className="text-slate-800 block text-[10px] uppercase text-slate-400 font-bold">Career Opportunities:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {st.careers.map((c, j) => (
                          <span key={j} className="bg-slate-100 text-slate-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-semibold">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="text-slate-800 block text-[10px] uppercase text-slate-400 font-bold">Key Entrance Exams:</strong>
                      <span className="text-emerald-800 font-bold">{st.entrances}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
