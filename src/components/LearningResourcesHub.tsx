import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Download, 
  FileText, 
  Video, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  GraduationCap, 
  Users, 
  Briefcase, 
  Sparkles, 
  ChevronRight, 
  Printer, 
  Share2, 
  Filter, 
  Layers, 
  Bookmark, 
  Clock, 
  FileSpreadsheet, 
  Calendar, 
  Globe, 
  MessageSquare, 
  Newspaper, 
  Sliders, 
  X, 
  Check, 
  Star, 
  Brain, 
  ShieldCheck, 
  FileCheck, 
  Compass, 
  BarChart2, 
  PieChart, 
  ArrowUpRight, 
  UserCheck, 
  Zap, 
  Cpu, 
  Upload, 
  Eye, 
  PlayCircle, 
  BookMarked
} from 'lucide-react';
import { Language } from '../types';

interface LearningResourcesHubProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

// Structured Types for Resources
export interface LearningResourceItem {
  id: string;
  title: string;
  category: 'School' | 'Higher Education' | 'Competitive Exam' | 'Digital Library' | 'Teacher' | 'Parent';
  subCategory: string; // e.g., 'Class 10', 'Medical - MBBS', 'UPSC CSE', 'NCERT eBooks'
  subject: string;
  contentType: 'Book' | 'PDF Notes' | 'Worksheet' | 'Sample Paper' | 'Previous Paper' | 'Video' | 'Mock Test' | 'Lesson Plan' | 'Guide';
  boardOrExam?: string; // CBSE, ICSE, NEET, JEE, UPSC, SSC, etc.
  language: 'English' | 'Hindi' | 'Urdu' | 'Multilingual';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  fileSize?: string;
  duration?: string;
  downloadsCount: number;
  rating: number;
  description: string;
  downloadUrl: string;
  publishedDate: string;
  tags: string[];
}

export default function LearningResourcesHub({ currentLanguage, onNavigate }: LearningResourcesHubProps) {
  // Main Section Navigation Tab
  const [activeMainTab, setActiveMainTab] = useState<
    'school' | 'higher' | 'exams' | 'library' | 'pyq' | 'mock_tests' | 'videos' | 'ai_assistant' | 'teacher' | 'parent' | 'downloads' | 'news' | 'dashboard' | 'admin'
  >('school');

  // Search & Global Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedBoardExam, setSelectedBoardExam] = useState('All Boards/Exams');
  const [selectedContentType, setSelectedContentType] = useState('All Types');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');

  // Mock Test State
  const [activeMockTestId, setActiveMockTestId] = useState<string | null>(null);
  const [mockUserAnswers, setMockUserAnswers] = useState<Record<number, number>>({});
  const [mockSubmitted, setMockSubmitted] = useState(false);
  const [testTimer, setTestTimer] = useState(600); // 10 mins

  // Bookmarks & Saved items
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rcb_learning_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    let updated: string[];
    if (bookmarkedIds.includes(id)) {
      updated = bookmarkedIds.filter(item => item !== id);
    } else {
      updated = [...bookmarkedIds, id];
    }
    setBookmarkedIds(updated);
    localStorage.setItem('rcb_learning_bookmarks', JSON.stringify(updated));
  };

  // Mock Learning Resources Dataset
  const resourcesData: LearningResourceItem[] = useMemo(() => [
    {
      id: 'res-1',
      title: 'NCERT Class 10 Mathematics Complete Solutions & Mind Maps 2026',
      category: 'School',
      subCategory: 'Class 10',
      subject: 'Mathematics',
      contentType: 'PDF Notes',
      boardOrExam: 'CBSE',
      language: 'English',
      difficulty: 'Intermediate',
      fileSize: '14.2 MB',
      downloadsCount: 18450,
      rating: 4.9,
      description: 'Comprehensive chapter-wise solved formulas, step-by-step NCERT solutions, and high-yield mind maps for Class 10 Board exams.',
      downloadUrl: '#',
      publishedDate: '2026-06-15',
      tags: ['Class 10', 'CBSE', 'Maths', 'NCERT']
    },
    {
      id: 'res-2',
      title: 'CBSE Class 12 Physics Solved 10-Year Board Papers (2015-2025)',
      category: 'School',
      subCategory: 'Class 12',
      subject: 'Physics',
      contentType: 'Previous Paper',
      boardOrExam: 'CBSE',
      language: 'English',
      difficulty: 'Advanced',
      fileSize: '28.5 MB',
      downloadsCount: 24100,
      rating: 4.95,
      description: 'All India and Delhi set question papers with official marking scheme and topper handwritten copy analysis.',
      downloadUrl: '#',
      publishedDate: '2026-05-10',
      tags: ['Class 12', 'Physics', 'CBSE', 'PYQ']
    },
    {
      id: 'res-3',
      title: 'NEET UG Biology 3,500+ NCERT-Based MCQ Practice Bank',
      category: 'Competitive Exam',
      subCategory: 'Medical Entrance',
      subject: 'Biology / Zoology / Botany',
      contentType: 'Book',
      boardOrExam: 'NEET',
      language: 'Multilingual',
      difficulty: 'Advanced',
      fileSize: '32.0 MB',
      downloadsCount: 38900,
      rating: 4.98,
      description: 'Line-by-line NCERT extract MCQs with detailed explanations, assertion-reason questions, and diagram-based problems.',
      downloadUrl: '#',
      publishedDate: '2026-07-01',
      tags: ['NEET', 'Biology', 'Medical', 'MCQs']
    },
    {
      id: 'res-4',
      title: 'UPSC Civil Services General Studies Paper I Mastery Guide',
      category: 'Competitive Exam',
      subCategory: 'Civil Services',
      subject: 'History, Geography, Polity & Economy',
      contentType: 'Book',
      boardOrExam: 'UPSC CSE',
      language: 'English',
      difficulty: 'Advanced',
      fileSize: '45.8 MB',
      downloadsCount: 19200,
      rating: 4.88,
      description: 'Essential reference notes covering Indian Constitution, Ancient/Modern History, Environment & Current Affairs.',
      downloadUrl: '#',
      publishedDate: '2026-04-20',
      tags: ['UPSC', 'IAS', 'General Studies', 'Govt Exam']
    },
    {
      id: 'res-5',
      title: 'MBSS Pathology & Pharmacology Lecture Notes (Prof Level)',
      category: 'Higher Education',
      subCategory: 'Medical - MBBS',
      subject: 'Pathology & Pharmacology',
      contentType: 'PDF Notes',
      boardOrExam: 'NMC / Medical Universities',
      language: 'English',
      difficulty: 'Advanced',
      fileSize: '18.4 MB',
      downloadsCount: 8400,
      rating: 4.85,
      description: 'High-definition clinical histology diagrams, drug action charts, and university examination question banks.',
      downloadUrl: '#',
      publishedDate: '2026-03-12',
      tags: ['MBBS', 'Medical', 'Pathology', 'Pharmacology']
    },
    {
      id: 'res-6',
      title: 'Data Structures & Algorithms in Python & C++ Handbook',
      category: 'Higher Education',
      subCategory: 'Engineering - B.Tech CS',
      subject: 'Computer Science',
      contentType: 'Book',
      boardOrExam: 'AICTE / Engineering Universities',
      language: 'English',
      difficulty: 'Intermediate',
      fileSize: '22.1 MB',
      downloadsCount: 31200,
      rating: 4.92,
      description: 'Complete coding algorithms, time complexity breakdowns, LeetCode patterns, and technical interview prep.',
      downloadUrl: '#',
      publishedDate: '2026-06-01',
      tags: ['Engineering', 'B.Tech', 'CS', 'Algorithms']
    },
    {
      id: 'res-7',
      title: 'UPSC / SSC General Awareness Daily Current Affairs Digest 2026',
      category: 'Competitive Exam',
      subCategory: 'SSC & Banking',
      subject: 'Current Affairs & GK',
      contentType: 'Sample Paper',
      boardOrExam: 'SSC / Bank PO / Railways',
      language: 'Hindi',
      difficulty: 'Intermediate',
      fileSize: '8.5 MB',
      downloadsCount: 15600,
      rating: 4.79,
      description: 'Monthly compilation of national policies, economic indices, sports achievements, and government schemes in Hindi.',
      downloadUrl: '#',
      publishedDate: '2026-07-20',
      tags: ['Current Affairs', 'SSC', 'Hindi', 'Govt Exam']
    },
    {
      id: 'res-8',
      title: 'Teacher’s AI Lesson Plan Generator & Classroom Rubrics',
      category: 'Teacher',
      subCategory: 'Pedagogy & Classroom Management',
      subject: 'Teaching Methods',
      contentType: 'Lesson Plan',
      boardOrExam: 'CBSE / NCERT Standards',
      language: 'Multilingual',
      difficulty: 'Beginner',
      fileSize: '5.2 MB',
      downloadsCount: 7800,
      rating: 4.91,
      description: 'Activity-based lesson plans aligned with NEP 2020, learning outcome matrices, and student evaluation rubrics.',
      downloadUrl: '#',
      publishedDate: '2026-06-28',
      tags: ['Teacher', 'NEP 2020', 'Lesson Plan', 'CBSE']
    },
    {
      id: 'res-9',
      title: 'Parent Guide: Child Mental Health & Stream Selection After Class 10',
      category: 'Parent',
      subCategory: 'Parenting & Career Counselling',
      subject: 'Child Psychology & Guidance',
      contentType: 'Guide',
      boardOrExam: 'National Career Framework',
      language: 'Hindi',
      difficulty: 'Beginner',
      fileSize: '4.8 MB',
      downloadsCount: 11200,
      rating: 4.96,
      description: 'Practical advice for parents to support children during board exams, managing stress, and choosing suitable career streams.',
      downloadUrl: '#',
      publishedDate: '2026-05-18',
      tags: ['Parents', 'Career', 'Stress Relief', 'Hindi']
    }
  ], []);

  // Filtered resources calculation
  const filteredResources = useMemo(() => {
    return resourcesData.filter(item => {
      // Main Tab Category constraint
      if (activeMainTab === 'school' && item.category !== 'School') return false;
      if (activeMainTab === 'higher' && item.category !== 'Higher Education') return false;
      if (activeMainTab === 'exams' && item.category !== 'Competitive Exam') return false;
      if (activeMainTab === 'teacher' && item.category !== 'Teacher') return false;
      if (activeMainTab === 'parent' && item.category !== 'Parent') return false;

      // Class Filter
      if (selectedClass !== 'All Classes' && !item.subCategory.includes(selectedClass)) return false;

      // Subject Filter
      if (selectedSubject !== 'All Subjects' && !item.subject.toLowerCase().includes(selectedSubject.toLowerCase())) return false;

      // Board/Exam Filter
      if (selectedBoardExam !== 'All Boards/Exams' && item.boardOrExam && !item.boardOrExam.toLowerCase().includes(selectedBoardExam.toLowerCase())) return false;

      // Content Type Filter
      if (selectedContentType !== 'All Types' && item.contentType !== selectedContentType) return false;

      // Language Filter
      if (selectedLanguage !== 'All Languages' && item.language !== selectedLanguage) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSub = item.subCategory.toLowerCase().includes(q);
        const matchesSubject = item.subject.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSub && !matchesSubject && !matchesTags) return false;
      }

      return true;
    });
  }, [
    resourcesData, activeMainTab, selectedClass, selectedSubject, selectedBoardExam,
    selectedContentType, selectedLanguage, searchQuery
  ]);

  // Sample Mock Test Questions Data
  const sampleMockQuestions = [
    {
      id: 1,
      question: 'Which fundamental particle was discovered by J.J. Thomson in 1897 using a cathode ray tube experiment?',
      options: ['Proton', 'Neutron', 'Electron', 'Positron'],
      correctIndex: 2,
      explanation: 'J.J. Thomson discovered the electron in 1897 through his cathode ray tube experiments, establishing that atoms consist of negatively charged subatomic particles.'
    },
    {
      id: 2,
      question: 'Under Article 32 of the Indian Constitution, which authority has the power to issue Writs for the enforcement of Fundamental Rights?',
      options: ['High Courts Only', 'Supreme Court of India', 'District Courts', 'Ministry of Law'],
      correctIndex: 1,
      explanation: 'Article 32 gives the Supreme Court the right to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari) for enforcing Fundamental Rights. Dr. B.R. Ambedkar termed Article 32 the "Heart and Soul" of the Constitution.'
    },
    {
      id: 3,
      question: 'What is the SI unit of Electrical Resistance?',
      options: ['Joule', 'Ampere', 'Ohm (Ω)', 'Volt'],
      correctIndex: 2,
      explanation: 'The SI unit of electrical resistance is the Ohm (Ω), named after German physicist Georg Simon Ohm.'
    },
    {
      id: 4,
      question: 'Which process in plants is responsible for transporting water and dissolved minerals from roots to leaves?',
      options: ['Phloem Translocation', 'Xylem Transpiration Pull', 'Photosynthesis', 'Glycolysis'],
      correctIndex: 1,
      explanation: 'Xylem tissue carries water and mineral nutrients upward through transpiration pull from the roots to all parts of the plant.'
    }
  ];

  // Schema.org Structured Data
  useEffect(() => {
    const scriptId = 'learning-resources-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaObj = {
      "@context": "https://schema.org",
      "@type": "DataCatalog",
      "name": "Rangrez Learning Resources Hub - Pre-Nursery to PhD",
      "description": "Centralized digital library offering free NCERT books, board paper solutions, competitive exam prep, lecture notes, video lessons, and mock tests across India.",
      "keywords": "NCERT Books, CBSE Sample Papers, NEET Biology MCQs, UPSC Notes, Mock Tests, Teacher Resources, Parent Guidance",
      "url": window.location.href
    };

    script.text = JSON.stringify(schemaObj);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans pb-16">
      
      {/* 1. HERO HEADER BANNER */}
      <div className="bg-gradient-to-b from-[#0B132B] via-[#004B23] to-[#0B132B] text-white py-10 px-4 sm:px-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFD54A_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFD54A]/20 border border-[#FFD54A]/40 text-[#FFD54A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-4 h-4" />
                <span>Centralized Digital Learning Ecosystem • Pre-Nursery to PhD</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                <span>Learning Resources Hub</span>
                <span className="text-xs bg-[#004B23] text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-md font-mono">
                  100% Free Study Access
                </span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                Access over 50,000+ verified study materials: NCERT & SCERT eBooks, solved board exam papers (CBSE, ICSE, State Boards), competitive exam guides (UPSC, NEET, JEE, SSC, Banking), interactive mock tests, video lectures, teacher lesson plans, and parent guidance.
              </p>
            </div>

            {/* Quick Actions / Stats */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg shrink-0">
              <div className="text-center px-3 border-r border-white/20">
                <span className="block text-2xl font-black text-[#FFD54A]">12+</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Modules</span>
              </div>
              <div className="text-center px-3 border-r border-white/20">
                <span className="block text-2xl font-black text-emerald-400">50K+</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">PDF Downloads</span>
              </div>
              <div className="text-center px-3">
                <span className="block text-2xl font-black text-cyan-300">IQRA AI</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Study Assistant</span>
              </div>
            </div>
          </div>

          {/* Main Module Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-white/10 text-xs font-bold">
            <button
              onClick={() => setActiveMainTab('school')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'school'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏫 School Resources</span>
            </button>
            <button
              onClick={() => setActiveMainTab('higher')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'higher'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🎓 Higher Education</span>
            </button>
            <button
              onClick={() => setActiveMainTab('exams')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'exams'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🏆 Competitive Exams</span>
            </button>
            <button
              onClick={() => setActiveMainTab('library')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'library'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>📚 Digital Library</span>
            </button>
            <button
              onClick={() => setActiveMainTab('pyq')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'pyq'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>📑 Previous Year Papers</span>
            </button>
            <button
              onClick={() => setActiveMainTab('mock_tests')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'mock_tests'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>⏱️ Mock Tests</span>
            </button>
            <button
              onClick={() => setActiveMainTab('videos')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'videos'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🎥 Video Learning</span>
            </button>
            <button
              onClick={() => setActiveMainTab('ai_assistant')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'ai_assistant'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🤖 AI Study Assistant</span>
            </button>
            <button
              onClick={() => setActiveMainTab('teacher')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'teacher'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>👩‍🏫 Teacher Corner</span>
            </button>
            <button
              onClick={() => setActiveMainTab('parent')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'parent'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>👪 Parent Corner</span>
            </button>
            <button
              onClick={() => setActiveMainTab('news')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'news'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>📰 Educational News</span>
            </button>
            <button
              onClick={() => setActiveMainTab('dashboard')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
                activeMainTab === 'dashboard'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow-md scale-105 font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>🔖 My Saved & Stats</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. ADVANCED SEARCH & SMART FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/80">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Books, Notes, Question Papers, Mock Tests, Video Lessons, Exams or Keywords..."
              className="w-full pl-12 pr-10 py-3.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#004B23] focus:border-transparent transition outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Class / Level</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="All Classes">All Classes / Levels</option>
                <option value="Pre-Nursery">Pre-Nursery & KG</option>
                <option value="Class 5">Class 1 to 5</option>
                <option value="Class 8">Class 6 to 8</option>
                <option value="Class 10">Class 9 & 10</option>
                <option value="Class 12">Class 11 & 12</option>
                <option value="Medical">MBBS / Paramedical</option>
                <option value="Engineering">B.Tech / M.Tech</option>
                <option value="Civil Services">UPSC / State PSC</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="All Subjects">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="General Studies">General Studies & History</option>
                <option value="Computer Science">Computer Science & AI</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Board / Exam</label>
              <select
                value={selectedBoardExam}
                onChange={(e) => setSelectedBoardExam(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="All Boards/Exams">All Boards & Exams</option>
                <option value="CBSE">CBSE Board</option>
                <option value="ICSE">ICSE / ISC</option>
                <option value="NEET">NEET UG</option>
                <option value="UPSC">UPSC Civil Services</option>
                <option value="SSC">SSC / Banking</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Resource Type</label>
              <select
                value={selectedContentType}
                onChange={(e) => setSelectedContentType(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="All Types">All Resource Types</option>
                <option value="Book">Complete eBook</option>
                <option value="PDF Notes">PDF Chapter Notes</option>
                <option value="Previous Paper">Previous Year Paper</option>
                <option value="Sample Paper">Sample Paper</option>
                <option value="Lesson Plan">Teacher Lesson Plan</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full py-2 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004B23] outline-none font-medium text-slate-700"
              >
                <option value="All Languages">All Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Urdu">Urdu (اردو)</option>
                <option value="Multilingual">Multilingual</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedClass('All Classes');
                  setSelectedSubject('All Subjects');
                  setSelectedBoardExam('All Boards/Exams');
                  setSelectedContentType('All Types');
                  setSelectedLanguage('All Languages');
                }}
                className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN SECTION CONTENT SWITCHING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* RESOURCE CARDS GRID FOR SCHOOL, HIGHER, EXAMS, TEACHER, PARENT */}
        {['school', 'higher', 'exams', 'teacher', 'parent'].includes(activeMainTab) && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B132B] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#004B23]" />
                <span className="capitalize">{activeMainTab} Learning Resources</span>
                <span className="text-xs bg-emerald-100 text-[#004B23] px-2.5 py-0.5 rounded-full font-mono font-bold">
                  {filteredResources.length} Items Found
                </span>
              </h2>
            </div>

            {filteredResources.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto my-6">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No Learning Material Found</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting your search query or dropdown filter selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((res) => {
                  const isBookmarked = bookmarkedIds.includes(res.id);
                  return (
                    <motion.div
                      key={res.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-5 flex flex-col justify-between group hover:border-emerald-500/50"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="bg-[#004B23] text-[#FFD54A] text-[10px] font-black px-2.5 py-0.5 rounded uppercase">
                            {res.contentType}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-amber-600 flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-current" /> {res.rating}
                            </span>
                            <button
                              onClick={(e) => toggleBookmark(res.id, e)}
                              className={`p-1.5 rounded-lg transition cursor-pointer ${
                                isBookmarked ? 'bg-[#FFD54A] text-[#004B23]' : 'bg-slate-100 text-slate-500 hover:text-slate-800'
                              }`}
                              title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                            >
                              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>

                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#004B23] transition-colors mb-1">
                          {res.title}
                        </h3>

                        <p className="text-xs text-slate-500 font-medium mb-3">
                          Subject: <strong>{res.subject}</strong> • {res.subCategory}
                        </p>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                          {res.description}
                        </p>

                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1 mb-4">
                          <div><strong>Board / Exam:</strong> {res.boardOrExam || 'General Standard'}</div>
                          <div><strong>Language:</strong> {res.language} • <strong>File Size:</strong> {res.fileSize || 'N/A'}</div>
                          <div><strong>Downloads:</strong> {res.downloadsCount.toLocaleString()} downloads</div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => alert(`Downloading ${res.title}... File size: ${res.fileSize}`)}
                          className="flex-1 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] py-2 px-3 rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Free PDF Download</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* MOCK TESTS MODULE */}
        {activeMainTab === 'mock_tests' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#004B23]" />
                  <span>Interactive Timed Mock Test Engine</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Test your real-time speed, accuracy, and subject knowledge with instant score calculation and solution explanations.
                </p>
              </div>

              {!activeMockTestId && (
                <button
                  onClick={() => {
                    setActiveMockTestId('mock-demo-1');
                    setMockUserAnswers({});
                    setMockSubmitted(false);
                  }}
                  className="px-5 py-2.5 bg-[#004B23] text-[#FFD54A] text-xs font-extrabold rounded-xl hover:bg-[#00381a] transition cursor-pointer shadow"
                >
                  Start Sample 10-Min Mock Test
                </button>
              )}
            </div>

            {activeMockTestId ? (
              <div className="space-y-6">
                <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between text-xs font-bold">
                  <span>General Science & Polity Mock Test • 4 Questions</span>
                  <span className="text-[#FFD54A] bg-white/10 px-3 py-1 rounded-lg">
                    Time Remaining: 09:45
                  </span>
                </div>

                <div className="space-y-6">
                  {sampleMockQuestions.map((q, qIndex) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm">
                        Q{qIndex + 1}. {q.question}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = mockUserAnswers[q.id] === oIdx;
                          return (
                            <button
                              key={oIdx}
                              disabled={mockSubmitted}
                              onClick={() => setMockUserAnswers({ ...mockUserAnswers, [q.id]: oIdx })}
                              className={`p-3 rounded-xl text-xs text-left font-semibold border transition cursor-pointer ${
                                isSelected
                                  ? 'bg-[#004B23] text-white border-[#004B23]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}. {opt}
                            </button>
                          );
                        })}
                      </div>

                      {mockSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                          <strong>Correct Option: {String.fromCharCode(65 + q.correctIndex)}.</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setActiveMockTestId(null)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Exit Test
                  </button>

                  {!mockSubmitted ? (
                    <button
                      onClick={() => setMockSubmitted(true)}
                      className="px-6 py-2.5 bg-[#004B23] text-[#FFD54A] font-extrabold text-xs rounded-xl cursor-pointer shadow"
                    >
                      Submit Mock Test & View Score
                    </button>
                  ) : (
                    <div className="text-sm font-extrabold text-[#004B23]">
                      Test Submitted! Total Score: {
                        sampleMockQuestions.filter(q => mockUserAnswers[q.id] === q.correctIndex).length
                      } / {sampleMockQuestions.length}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">CBSE Board Series</span>
                  <h4 className="font-extrabold text-slate-900 text-sm">Class 10 Science Full Mock Exam</h4>
                  <p className="text-xs text-slate-600">80 Marks • 3 Hours • Complete Board Pattern</p>
                  <button 
                    onClick={() => {
                      setActiveMockTestId('mock-demo-1');
                      setMockUserAnswers({});
                      setMockSubmitted(false);
                    }}
                    className="mt-2 text-xs font-bold text-[#004B23] hover:underline block cursor-pointer"
                  >
                    Start Online Test &rarr;
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-black uppercase text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Medical Entrance</span>
                  <h4 className="font-extrabold text-slate-900 text-sm">NEET UG Biology Speed Test</h4>
                  <p className="text-xs text-slate-600">90 Questions • 45 Mins • Negative Marking</p>
                  <button 
                    onClick={() => {
                      setActiveMockTestId('mock-demo-1');
                      setMockUserAnswers({});
                      setMockSubmitted(false);
                    }}
                    className="mt-2 text-xs font-bold text-blue-800 hover:underline block cursor-pointer"
                  >
                    Start Online Test &rarr;
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-black uppercase text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Govt Job Prep</span>
                  <h4 className="font-extrabold text-slate-900 text-sm">SSC CGL Tier-1 Reasoning & Quant</h4>
                  <p className="text-xs text-slate-600">50 Questions • 60 Mins • Speed Analysis</p>
                  <button 
                    onClick={() => {
                      setActiveMockTestId('mock-demo-1');
                      setMockUserAnswers({});
                      setMockSubmitted(false);
                    }}
                    className="mt-2 text-xs font-bold text-purple-800 hover:underline block cursor-pointer"
                  >
                    Start Online Test &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* AI STUDY ASSISTANT MODULE */}
        {activeMainTab === 'ai_assistant' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-[#004B23]" />
                  <span>IQRA AI Study Assistant Integration</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Connect directly with the IQRA AI Assistant to clarify complex concepts, generate custom quiz questions, summarize chapter notes, or request study advice.
                </p>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('iqra-ai')}
                className="px-5 py-2.5 bg-[#004B23] text-[#FFD54A] font-extrabold text-xs rounded-xl shadow cursor-pointer hover:bg-[#00381a] transition"
              >
                Launch IQRA AI Assistant Page
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#004B23] uppercase">Feature 1</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Instant Concept Explanations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Ask IQRA AI to explain organic chemistry mechanisms, calculus theorems, or constitutional articles in simple terms.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#004B23] uppercase">Feature 2</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Automated MCQ & Quiz Generator</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Generate 10 custom multiple-choice questions on any topic or chapter for personal self-assessment.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#004B23] uppercase">Feature 3</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Custom Time-Table Planner</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Receive a personalized 30-day exam preparation routine tailored to your weak topics and daily available hours.</p>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATIONAL NEWS MODULE */}
        {activeMainTab === 'news' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-[#004B23]" />
                <span>Verified National Educational News & Circulars</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Official notifications from Ministry of Education, NTA, CBSE, State Boards, UGC, and University admission dates.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'CBSE Releases Class 10 & 12 Board Exam 2027 Sample Papers & Marking Scheme', date: 'July 25, 2026', source: 'CBSE Official Circular' },
                { title: 'NEET UG Counselling Schedule Announced for 100,000+ All India Quota MBBS Seats', date: 'July 22, 2026', source: 'Medical Counselling Committee (MCC)' },
                { title: 'UPSC Civil Services Mains Examination e-Admit Cards Available for Download', date: 'July 20, 2026', source: 'Union Public Service Commission' }
              ].map((news, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-1">
                      <span className="bg-emerald-100 text-[#004B23] px-2 py-0.5 rounded">{news.source}</span>
                      <span>{news.date}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{news.title}</h4>
                  </div>
                  <button className="text-xs font-bold text-[#004B23] hover:underline shrink-0 cursor-pointer">Read Circular &rarr;</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
