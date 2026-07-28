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
  Scale,
  Bell,
  Newspaper,
  FileCheck,
  ChevronDown
} from 'lucide-react';
import { Language } from '../types';
import SchoolsDirectory from './SchoolsDirectory';

interface SchoolEducationModuleProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
  initialSection?: string;
}

export interface Level1ModuleItem {
  id: string;
  nameEn: string;
  nameHi: string;
  icon: any;
  isPrimary?: boolean;
  directoryFilter?: {
    schoolType?: string;
    board?: string;
    ownership?: string;
    classLevel?: string;
    medium?: string;
    tab?: 'all' | 'govt_kv_jnv' | 'minority' | 'residential' | 'boards' | 'compare' | 'saved';
  };
}

export const LEVEL_1_MODULES: Level1ModuleItem[] = [
  { id: 'directory', nameEn: '1. School Directory ⭐', nameHi: '1. स्कूल डायरेक्टरी ⭐', icon: Building2, isPrimary: true },
  { id: 'admission_guide', nameEn: '2. School Admission Guide', nameHi: '2. स्कूल प्रवेश मार्गदर्शिका', icon: FileCheck },
  { id: 'play_schools', nameEn: '3. Play Schools', nameHi: '3. प्ले स्कूल', icon: Sparkles, directoryFilter: { classLevel: 'Pre-Nursery / Play' } },
  { id: 'primary_schools', nameEn: '4. Primary Schools', nameHi: '4. प्राथमिक स्कूल', icon: BookOpen, directoryFilter: { classLevel: 'Class 1 to 5' } },
  { id: 'middle_schools', nameEn: '5. Middle Schools', nameHi: '5. उच्च प्राथमिक स्कूल', icon: Layers, directoryFilter: { classLevel: 'Class 6 to 8' } },
  { id: 'high_schools', nameEn: '6. High Schools', nameHi: '6. माध्यमिक स्कूल', icon: GraduationCap, directoryFilter: { classLevel: 'Class 9 & 10' } },
  { id: 'sr_secondary', nameEn: '7. Senior Secondary Schools', nameHi: '7. उच्च माध्यमिक स्कूल', icon: Award, directoryFilter: { classLevel: 'Class 11 & 12' } },
  { id: 'govt_schools', nameEn: '8. Government Schools', nameHi: '8. सरकारी स्कूल', icon: ShieldCheck, directoryFilter: { ownership: 'Government' } },
  { id: 'cbse_schools', nameEn: '9. CBSE Schools', nameHi: '9. सीबीएसई स्कूल', icon: CheckCircle2, directoryFilter: { board: 'CBSE' } },
  { id: 'icse_schools', nameEn: '10. ICSE Schools', nameHi: '10. आईसीएसई स्कूल', icon: CheckCircle2, directoryFilter: { board: 'ICSE' } },
  { id: 'state_board_schools', nameEn: '11. State Board Schools', nameHi: '11. स्टेट बोर्ड स्कूल', icon: Globe, directoryFilter: { board: 'State Boards' } },
  { id: 'kv_schools', nameEn: '12. Kendriya Vidyalaya', nameHi: '12. केंद्रीय विद्यालय', icon: Building2, directoryFilter: { schoolType: 'Kendriya Vidyalaya' } },
  { id: 'jnv_schools', nameEn: '13. Jawahar Navodaya Vidyalaya', nameHi: '13. जवाहर नवोदय विद्यालय', icon: Star, directoryFilter: { schoolType: 'Jawahar Navodaya Vidyalaya (JNV)' } },
  { id: 'pm_shri_schools', nameEn: '14. PM SHRI Schools', nameHi: '14. पीएम श्री स्कूल', icon: Zap, directoryFilter: { schoolType: 'PM SHRI Schools' } },
  { id: 'sainik_schools', nameEn: '15. Sainik Schools', nameHi: '15. सैनिक स्कूल', icon: ShieldCheck, directoryFilter: { schoolType: 'Sainik Schools' } },
  { id: 'minority_schools', nameEn: '16. Minority Schools', nameHi: '16. अल्पसंख्यक स्कूल', icon: Users, directoryFilter: { tab: 'minority' } },
  { id: 'residential_schools', nameEn: '17. Residential Schools', nameHi: '17. आवासीय स्कूल', icon: Compass, directoryFilter: { tab: 'residential' } },
  { id: 'international_schools', nameEn: '18. International Schools', nameHi: '18. इंटरनेशनल स्कूल', icon: Globe, directoryFilter: { board: 'IB' } },
  { id: 'olympiads', nameEn: '19. Olympiads', nameHi: '19. ओलंपियाड', icon: Award },
  { id: 'board_hub', nameEn: '20. Board Examination Hub', nameHi: '20. बोर्ड परीक्षा हब', icon: FileText },
  { id: 'ncert', nameEn: '21. NCERT Digital Library', nameHi: '21. एनसीईआरटी डिजिटल लाइब्रेरी', icon: BookOpen },
  { id: 'scholarships', nameEn: '22. Scholarships', nameHi: '22. छात्रवृत्तियां', icon: GraduationCap },
  { id: 'career_guidance', nameEn: '23. Career Guidance', nameHi: '23. करियर मार्गदर्शन', icon: Compass },
  { id: 'learning_resources', nameEn: '24. Learning Resources', nameHi: '24. अधिगम संसाधन', icon: Sparkles },
  { id: 'educational_news', nameEn: '25. Educational News', nameHi: '25. शैक्षणिक समाचार', icon: Bell }
];

export default function SchoolEducationModule({ currentLanguage, onNavigate, initialSection }: SchoolEducationModuleProps) {
  const [activeSection, setActiveSection] = useState<string>(initialSection || 'directory');
  const [showAllModulesGrid, setShowAllModulesGrid] = useState<boolean>(false);
  
  // Board Hub State
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'ICSE' | 'State Boards' | 'IB' | 'NIOS'>('CBSE');
  const [selectedClass, setSelectedClass] = useState<string>('Class 10');
  
  // NCERT State
  const [ncertClass, setNcertClass] = useState<string>('Class 10');
  const [ncertSubject, setNcertSubject] = useState<string>('Mathematics');

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    alert('Generating Level 1 – School Education PDF Guide... File download will commence shortly.');
  };

  // Find active module config
  const activeModuleItem = LEVEL_1_MODULES.find(m => m.id === activeSection) || LEVEL_1_MODULES[0];
  const isDirectoryView = activeSection === 'directory' || Boolean(activeModuleItem.directoryFilter);

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

  // Educational News Data
  const educationalNewsItems = [
    {
      title: 'CBSE Class 10 & 12 Board Exam 2026 Date Sheet & Marking Pattern Released',
      category: 'CBSE Official Circular',
      date: '28 July 2026',
      summary: 'Central Board of Secondary Education announces two-tier board exam guidelines with increased competency-based question weightage.'
    },
    {
      title: 'NCERT Introduces Revised Class 6 - 12 Textbooks Aligned with NEP 2020',
      category: 'Curriculum Update',
      date: '25 July 2026',
      summary: 'National Council of Educational Research and Training uploads new digital eBooks featuring interactive QR codes and multi-lingual audio summaries.'
    },
    {
      title: 'RTE 25% Free Seat Admission Lottery Schedule Announced for 2026-27 Session',
      category: 'Admission Updates',
      date: '22 July 2026',
      summary: 'State Education Departments open online portal for economically weaker section (EWS) free admissions in private accredited schools.'
    },
    {
      title: 'PM SHRI Schools Expansion: 2,500 Additional Govt Schools Upgraded to Smart Campuses',
      category: 'Govt Policy',
      date: '18 July 2026',
      summary: 'Ministry of Education allocates funds for green energy, digital labs, and modern sports infrastructure across rural districts.'
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
                {currentLanguage === 'en' ? 'Level 1 – School Education' : 'स्तर 1 - स्कूली शिक्षा'}
              </h1>
              <p className="mt-2 text-sm text-slate-200 max-w-2xl leading-relaxed">
                National education portal featuring 25 core modules: 200+ Verified School Directories, Admission Guides, Board Examination Hubs, NCERT Libraries, Olympiads, Scholarships & Career Guidance.
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

          {/* Quick Primary Level 1 Modules Switcher */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-bold">
            {LEVEL_1_MODULES.slice(0, 6).map((m) => {
              const Icon = m.icon;
              const isActive = activeSection === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveSection(m.id)}
                  className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFD54A] text-[#004B23] shadow-md font-black scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{currentLanguage === 'hi' ? m.nameHi : m.nameEn}</span>
                </button>
              );
            })}

            <button
              onClick={() => setShowAllModulesGrid(!showAllModulesGrid)}
              className="px-3.5 py-2 rounded-xl bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] border border-[#FFD54A]/40 transition flex items-center gap-1.5 cursor-pointer ml-auto font-black"
            >
              <span>{showAllModulesGrid ? 'Hide All 25 Modules' : 'View All 25 Level 1 Modules'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllModulesGrid ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* EXPANDABLE 25 LEVEL 1 MODULES GRID */}
        {showAllModulesGrid && (
          <div className="bg-white rounded-3xl p-6 border-2 border-[#004B23]/20 shadow-xl mb-8 animate-fadeIn">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#004B23]"></span>
                <h3 className="text-base font-extrabold text-[#0B132B]">
                  Level 1 – School Education Structure (All 25 Modules)
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-bold">Select any module to view details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {LEVEL_1_MODULES.map((m) => {
                const Icon = m.icon;
                const isActive = activeSection === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveSection(m.id);
                      setShowAllModulesGrid(false);
                    }}
                    className={`p-3 rounded-2xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#004B23] text-[#FFD54A] border-[#004B23] shadow-md font-extrabold'
                        : 'bg-slate-50 hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${isActive ? 'bg-[#FFD54A] text-[#004B23]' : 'bg-emerald-100 text-[#004B23]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs leading-tight line-clamp-2">
                      {currentLanguage === 'hi' ? m.nameHi : m.nameEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PRIMARY MODULE #1: SCHOOL DIRECTORY (AND DIRECTORY SUB-FILTERS) */}
        {isDirectoryView && (
          <div className="mb-8">
            {/* Active Sub-Filter Title Bar if a specific directory sub-module is selected */}
            {activeSection !== 'directory' && (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#004B23] font-bold">
                  <Filter className="w-4 h-4" />
                  <span>Filtered View: <strong>{activeModuleItem.nameEn}</strong> (Module #{activeSection})</span>
                </div>
                <button 
                  onClick={() => setActiveSection('directory')}
                  className="text-xs text-emerald-800 hover:underline font-bold"
                >
                  Clear Sub-Filter (Show All Schools)
                </button>
              </div>
            )}

            <SchoolsDirectory 
              currentLanguage={currentLanguage} 
              onNavigate={onNavigate}
              initialSchoolType={activeModuleItem.directoryFilter?.schoolType}
              initialBoard={activeModuleItem.directoryFilter?.board}
              initialOwnership={activeModuleItem.directoryFilter?.ownership}
              initialClassLevel={activeModuleItem.directoryFilter?.classLevel}
              initialTab={activeModuleItem.directoryFilter?.tab}
            />
          </div>
        )}

        {/* MODULE 2: SCHOOL ADMISSION GUIDE */}
        {activeSection === 'admission_guide' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-6 h-6 text-[#004B23]" />
                  <span>School Admission Guide & RTE 25% Free Seat Quota</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Step-by-step admission procedures, entry-level age criteria (NEP 2020), document checklists, and Right to Education (RTE) free seats application portal.
                </p>
              </div>

              <button
                onClick={() => setActiveSection('directory')}
                className="px-4 py-2 bg-[#004B23] text-[#FFD54A] font-extrabold text-xs rounded-xl hover:bg-[#00381a] transition cursor-pointer"
              >
                Find Admissions Open Schools
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="bg-emerald-100 text-[#004B23] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  NEP 2020 Age Limits
                </span>
                <h4 className="font-extrabold text-slate-900 text-sm">Age Criteria for Entry Classes</h4>
                <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-200 pt-2 font-medium">
                  <li>• <strong>Nursery / Pre-K:</strong> 3 Years+ as of April 1st</li>
                  <li>• <strong>LKG / KG-1:</strong> 4 Years+ as of April 1st</li>
                  <li>• <strong>UKG / KG-2:</strong> 5 Years+ as of April 1st</li>
                  <li>• <strong>Class 1:</strong> Mandatory 6 Years+ as per National Education Policy</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="bg-blue-100 text-blue-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  Mandatory Documents
                </span>
                <h4 className="font-extrabold text-slate-900 text-sm">Admission Document Checklist</h4>
                <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-200 pt-2 font-medium">
                  <li>• Official Birth Certificate (Municipal Authority)</li>
                  <li>• Aadhaar Card of Student & Parents</li>
                  <li>• Residence Proof (Electricity Bill / Passport / Rent Agreement)</li>
                  <li>• Transfer Certificate (TC) & Previous Progress Report</li>
                  <li>• Immunization & Medical Fitness Certificate</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  RTE Act Section 12(1)(c)
                </span>
                <h4 className="font-extrabold text-slate-900 text-sm">25% Free Seat Admission Quota</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All privateunaided schools must reserve 25% of entry-level seats for children from Economically Weaker Sections (EWS) and Disadvantaged Groups with 100% fee waiver.
                </p>
                <a
                  href="https://rte.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#004B23] hover:underline"
                >
                  <span>Apply via National RTE Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 19: OLYMPIADS */}
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

        {/* MODULE 20: BOARD EXAMINATION HUB */}
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

        {/* MODULE 21: NCERT DIGITAL LIBRARY */}
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

        {/* MODULE 22: STUDENT SCHOLARSHIPS */}
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

        {/* MODULE 23: CAREER GUIDANCE & STREAM SELECTION */}
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

        {/* MODULE 24: LEARNING RESOURCES */}
        {activeSection === 'learning_resources' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#004B23]" />
                  <span>Learning Resources & Digital Study Materials</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Comprehensive repository of video lectures, interactive lab simulations, mindmaps, solved exemplars, and study toolkits for school students.
                </p>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('learning-resources')}
                className="px-4 py-2 bg-[#004B23] text-[#FFD54A] font-extrabold text-xs rounded-xl hover:bg-[#00381a] transition cursor-pointer"
              >
                Open Full Learning Resources Hub
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">Digital Mind Maps</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Visual Chapter Summaries</h4>
                <p className="text-xs text-slate-600">Revision mind maps for Physics, Chemistry, Biology, Math and Social Sciences.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">Virtual Science Labs</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Interactive STEM Simulations</h4>
                <p className="text-xs text-slate-600">Conduct virtual chemistry experiments, physics optics, and biology microscope dissections.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded">Language Labs</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Grammar & Vocabulary Kits</h4>
                <p className="text-xs text-slate-600">Interactive English, Hindi, Urdu and regional language learning audio modules.</p>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 25: EDUCATIONAL NEWS */}
        {activeSection === 'educational_news' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-[#004B23]" />
                  <span>Educational News, Circulars & Exam Notifications</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Live updates from Ministry of Education, CBSE, CISCE, State Boards, NCERT, NTA, and National Policy announcements.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {educationalNewsItems.map((news, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#004B23] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                        {news.category}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{news.date}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{news.title}</h4>
                    <p className="text-xs text-slate-600">{news.summary}</p>
                  </div>

                  <button className="px-4 py-2 bg-slate-200 hover:bg-[#004B23] text-slate-800 hover:text-white text-xs font-bold rounded-xl transition cursor-pointer shrink-0 self-start md:self-center">
                    Read Official Circular
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
