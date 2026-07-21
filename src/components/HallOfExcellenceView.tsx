import React, { useState } from 'react';
import {
  INITIAL_CATEGORIES,
  INITIAL_ACHIEVERS,
  INITIAL_MENTORSHIP_REQUESTS,
  INITIAL_SUCCESS_STORIES,
  INITIAL_AWARDS_GALLERY,
  AchieverProfile,
  AchieverCategory,
  MentorshipRequest,
  SuccessStoryItem,
  AwardItem
} from '../data/hallOfExcellenceData';
import ExcellenceProfileModal from './ExcellenceProfileModal';
import ExcellenceMentorshipModal from './ExcellenceMentorshipModal';
import ExcellenceAdminPanel from './ExcellenceAdminPanel';
import AchieverCard from './AchieverCard';
import { ProfileImage } from './common/ProfileImage';
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Search,
  Filter,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
  Building2,
  User,
  Users,
  Heart,
  Share2,
  Mail,
  ExternalLink,
  Linkedin,
  Phone,
  BookOpen,
  ChevronRight,
  ArrowRight,
  Shield,
  ShieldCheck,
  FileText,
  Download,
  Plus,
  Eye,
  HelpCircle,
  Activity,
  PenTool,
  Flame,
  Laptop,
  TrendingUp,
  Cpu,
  Atom,
  Stethoscope,
  Gavel,
  Scale,
  ShieldAlert,
  HeartHandshake,
  BarChart3,
  CheckCircle2,
  Layers,
  MessageSquare,
  Send,
  AlertCircle,
  X,
  UserPlus
} from 'lucide-react';

interface HallOfExcellenceViewProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

const HallOfExcellenceView: React.FC<HallOfExcellenceViewProps> = ({ currentLanguage }) => {
  // State initialization from rich dataset
  const [achievers, setAchievers] = useState<AchieverProfile[]>(INITIAL_ACHIEVERS);
  const [categories, setCategories] = useState<AchieverCategory[]>(INITIAL_CATEGORIES);
  const [mentorshipRequests, setMentorshipRequests] = useState<MentorshipRequest[]>(INITIAL_MENTORSHIP_REQUESTS);
  const [stories, setStories] = useState<SuccessStoryItem[]>(INITIAL_SUCCESS_STORIES);
  const [awards, setAwards] = useState<AwardItem[]>(INITIAL_AWARDS_GALLERY);

  // UI view states
  const [activeTab, setActiveTab] = useState<'dashboard' | 'directory' | 'categories' | 'mentorship' | 'stories' | 'awards' | 'charts' | 'admin'>('dashboard');
  const [selectedAchiever, setSelectedAchiever] = useState<AchieverProfile | null>(null);
  const [modalMode, setModalMode] = useState<'mentorship' | 'story' | 'award' | null>(null);
  const [targetAchieverForModal, setTargetAchieverForModal] = useState<AchieverProfile | null>(null);
  const [showNominateModal, setShowNominateModal] = useState<boolean>(false);
  const [nomName, setNomName] = useState<string>('');
  const [nomCat, setNomCat] = useState<string>('civil-servants');
  const [nomOrg, setNomOrg] = useState<string>('');
  const [nomCity, setNomCity] = useState<string>('');
  const [nomBio, setNomBio] = useState<string>('');
  const [nomSubmitted, setNomSubmitted] = useState<boolean>(false);

  // Search & Filter states for Directory
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterSector, setFilterSector] = useState<'all' | 'govt' | 'private'>('all');
  const [filterLocation, setFilterLocation] = useState<'all' | 'india' | 'overseas'>('all');
  const [filterState, setFilterState] = useState<string>('all');
  const [filterDistrict, setFilterDistrict] = useState<string>('all');
  const [filterMentorOnly, setFilterMentorOnly] = useState(false);

  // Icon mapping helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-rose-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Scale': return <Scale className="w-5 h-5 text-purple-600" />;
      case 'Gavel': return <Gavel className="w-5 h-5 text-indigo-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#004B23]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-600" />;
      case 'Medal': return <Medal className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-indigo-500" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#FFD54A]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-pink-500" />;
      case 'Users': return <Users className="w-5 h-5 text-violet-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-500" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-purple-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      default: return <Award className="w-5 h-5 text-[#004B23]" />;
    }
  };

  // Filter logic
  const filteredAchievers = achievers.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.currentCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.district && a.district.toLowerCase().includes(searchTerm.toLowerCase())) ||
      a.badges.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));

    let matchesCat = selectedCategory === 'all' || a.categoryId === selectedCategory;
    if (!matchesCat) {
      if (selectedCategory === 'govt-services') matchesCat = a.isGovt || ['govt-services', 'civil-servants', 'police', 'armed-forces', 'fire-emergency'].includes(a.categoryId);
      else if (selectedCategory === 'law-judiciary') matchesCat = ['law-judiciary', 'judges', 'advocates'].includes(a.categoryId);
      else if (selectedCategory === 'medical-excellence') matchesCat = ['medical-excellence', 'doctors', 'nurses'].includes(a.categoryId);
      else if (selectedCategory === 'academic-excellence') matchesCat = ['academic-excellence', 'professors', 'teachers', 'scientists'].includes(a.categoryId);
      else if (selectedCategory === 'professional-excellence') matchesCat = ['professional-excellence', 'engineers', 'it-professionals', 'ca-finance', 'entrepreneurs', 'overseas'].includes(a.categoryId);
      else if (selectedCategory === 'public-rep') matchesCat = ['public-rep'].includes(a.categoryId);
      else if (selectedCategory === 'community-leaders') matchesCat = ['community-leaders', 'social-workers', 'media-writers'].includes(a.categoryId);
      else if (selectedCategory === 'young-achievers') matchesCat = ['young-achievers', 'gold-medalists', 'sports'].includes(a.categoryId);
      else if (selectedCategory === 'lifetime-contribution') matchesCat = ['lifetime-contribution', 'award-winners'].includes(a.categoryId);
      else if (selectedCategory === 'success-stories-cat') matchesCat = ['success-stories-cat'].includes(a.categoryId) || a.isFeatured;
    }

    const matchesSector = filterSector === 'all' || (filterSector === 'govt' && a.isGovt) || (filterSector === 'private' && !a.isGovt);
    const matchesLoc = filterLocation === 'all' || (filterLocation === 'overseas' && a.isOverseas) || (filterLocation === 'india' && !a.isOverseas);
    const matchesState = filterState === 'all' || a.state === filterState;
    const matchesDistrict = filterDistrict === 'all' || a.district === filterDistrict || a.currentCity === filterDistrict;
    const matchesMentor = !filterMentorOnly || a.isMentor;

    return matchesSearch && matchesCat && matchesSector && matchesLoc && matchesState && matchesDistrict && matchesMentor;
  });

  const allStates = Array.from(new Set(achievers.map(a => a.state))).sort();
  const allDistricts = Array.from(new Set(achievers.filter(a => filterState === 'all' || a.state === filterState).map(a => a.district || a.currentCity))).filter(Boolean).sort();

  // Handlers for Admin actions
  const handleAddAchiever = (newAch: AchieverProfile) => {
    setAchievers([newAch, ...achievers]);
  };

  const handleDeleteAchiever = (id: string) => {
    setAchievers(achievers.filter(a => a.id !== id));
  };

  const handleToggleVerify = (id: string) => {
    setAchievers(achievers.map(a => a.id === id ? { ...a, isVerified: !a.isVerified } : a));
  };

  const handleToggleFeature = (id: string) => {
    setAchievers(achievers.map(a => a.id === id ? { ...a, isFeatured: !a.isFeatured } : a));
  };

  const handleAddCategory = (newCat: AchieverCategory) => {
    setCategories([...categories, newCat]);
  };

  const handleUpdateRequestStatus = (id: string, status: 'approved' | 'rejected') => {
    setMentorshipRequests(mentorshipRequests.map(r => r.id === id ? { ...r, status } : r));
  };

  const handleOpenMentorshipModal = (ach: AchieverProfile) => {
    setTargetAchieverForModal(ach);
    setModalMode('mentorship');
  };

  const handleSubmitMentorshipRequest = (req: Partial<MentorshipRequest>) => {
    const newReq: MentorshipRequest = {
      id: `req-${Date.now()}`,
      studentName: req.studentName || 'Student',
      studentAge: req.studentAge || 20,
      qualification: req.qualification || 'Degree',
      careerGoal: req.careerGoal || 'Career Goal',
      question: req.question || 'Seeking advice.',
      email: req.email || '',
      phone: req.phone || '',
      mentorId: req.mentorId || 'general',
      mentorName: req.mentorName || 'General Mentor',
      status: 'pending',
      date: new Date().toISOString().slice(0, 10)
    };
    setMentorshipRequests([newReq, ...mentorshipRequests]);
  };

  const handleSubmitStory = (story: Partial<SuccessStoryItem>) => {
    const newStory: SuccessStoryItem = {
      id: `story-${Date.now()}`,
      achieverId: 'ach-user',
      achieverName: 'Community Achiever',
      achieverPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      profession: 'Distinguished Member',
      title: story.title || { en: 'My Inspiring Journey', hi: 'मेरी प्रेरक यात्रा', ur: 'میرا سفر' },
      personalJourney: story.personalJourney || '',
      challenges: story.challenges || '',
      hardWork: story.hardWork || '',
      successStory: story.successStory || '',
      adviceForStudents: story.adviceForStudents || '',
      date: new Date().toISOString().slice(0, 10)
    };
    setStories([newStory, ...stories]);
  };

  const handleSubmitAward = (award: Partial<AwardItem>) => {
    const newAward: AwardItem = {
      id: `aw-${Date.now()}`,
      title: award.title || { en: 'New Honor', hi: 'नया सम्मान', ur: 'اعزاز' },
      recipientName: award.recipientName || 'Community Member',
      category: award.category || 'Professional',
      year: award.year || 2025,
      description: award.description || 'Awarded for excellence.',
      type: award.type || 'Certificate',
      imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=500&auto=format&fit=crop&q=80'
    };
    setAwards([newAward, ...awards]);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* 1. SECTION HERO BANNER */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] p-6 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F4C430] text-[#0B132B] font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
              <Trophy className="w-4 h-4 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Official Digital Heritage & Mentorship Network' : currentLanguage === 'ur' ? 'آفیشل ڈیجیٹل ورثہ اور رہنمائی کا نیٹ ورک' : 'आधिकारिक डिजिटल धरोहर एवं मार्गदर्शन नेटवर्क'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              🏆 {currentLanguage === 'en' ? 'Hall of Excellence' : currentLanguage === 'ur' ? 'ہال آف ایکسیلنس' : 'गौरवशाली विभूतियाँ (हॉल ऑफ एक्सीलेंस)'}
              <span className="block text-xl sm:text-2xl font-bold text-[#FFD54A] mt-1">
                {currentLanguage === 'en' ? '(Community Achievers & Role Models)' : currentLanguage === 'ur' ? '(برادری کے نمایاں افراد اور رول ماڈلز)' : '(समाज के सफल व्यक्तित्व एवं प्रेरणास्रोत)'}
              </span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              {currentLanguage === 'en'
                ? 'Recognizing and honoring successful members of the All India Rangrez (Neelgar) community. Inspiring younger generations, preserving community achievements, and connecting students with experienced role models for career guidance.'
                : 'ऑल इंडिया रंगरेज समाज के सफल सदस्यों का सम्मान। भावी पीढ़ियों को प्रेरित करना, इतिहास को संजोना और छात्रों को अनुभवी मार्गदर्शकों से जोड़ना।'}
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => {
                setNomSubmitted(false);
                setNomName('');
                setNomOrg('');
                setNomBio('');
                setShowNominateModal(true);
              }}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center justify-center gap-2 border border-emerald-400 cursor-pointer flex-1 sm:flex-initial"
            >
              <UserPlus className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Nominate an Achiever' : currentLanguage === 'ur' ? 'کامیاب فرد کا نام تجویز کریں' : 'प्रतिभा का नाम नामांकित करें'}</span>
            </button>

            <button
              onClick={() => {
                setFilterMentorOnly(true);
                setActiveTab('directory');
              }}
              className="px-6 py-3.5 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer flex-1 sm:flex-initial"
            >
              <Sparkles className="w-4 h-4 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Find Career Mentors' : 'मार्गदर्शक खोजें'}</span>
            </button>

            <button
              onClick={() => {
                setModalMode('story');
              }}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow transition flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-initial"
            >
              <BookOpen className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Publish Success Story' : 'सफलता की कहानी भेजें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION PILLS BAR */}
      <div className="bg-white border border-gray-200 rounded-2xl p-2 sm:p-3 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <span>🏠</span>
            <span>{currentLanguage === 'en' ? 'Overview Dashboard' : 'होमपेज डैशबोर्ड'}</span>
          </button>

          <button
            onClick={() => {
              setFilterMentorOnly(false);
              setActiveTab('directory');
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'directory'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <Users className="w-4 h-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'Achievers Directory' : 'विभूति निर्देशिका'}</span>
            <span className="bg-[#FFD54A] text-[#0B132B] text-[10px] px-1.5 py-0.5 rounded-full font-black">
              {achievers.length}+
            </span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'categories'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span>{currentLanguage === 'en' ? 'Professions & Categories' : 'पेशे व श्रेणियां'}</span>
            <span className="bg-emerald-100 text-[#004B23] text-[10px] px-1.5 py-0.5 rounded-full font-black">
              {categories.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('mentorship')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'mentorship'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{currentLanguage === 'en' ? 'Mentor Guidance Hub' : 'मार्गदर्शन नेटवर्क'}</span>
          </button>

          <button
            onClick={() => setActiveTab('stories')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'stories'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span>{currentLanguage === 'en' ? 'Success Stories' : 'सफलता की कहानियां'}</span>
          </button>

          <button
            onClick={() => setActiveTab('awards')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>{currentLanguage === 'en' ? 'Awards Wall Gallery' : 'पुरस्कार गैलरी'}</span>
          </button>

          <button
            onClick={() => setActiveTab('charts')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'charts'
                ? 'bg-[#004B23] text-white shadow-md border border-[#FFD54A]/40'
                : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span>{currentLanguage === 'en' ? 'Community Statistics' : 'सामुदायिक आंकड़े'}</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ml-auto ${
              activeTab === 'admin'
                ? 'bg-[#0B132B] text-[#FFD54A] shadow-md border border-[#FFD54A]'
                : 'bg-slate-200 text-[#0B132B] hover:bg-slate-300'
            }`}
          >
            <span>⚙️</span>
            <span>{currentLanguage === 'en' ? 'Admin Panel' : 'एडमिन पैनल'}</span>
          </button>
        </div>
      </div>

      {/* 3. TAB CONTENT ENGINE */}
      <div className="space-y-8">
        {/* TAB 1: OVERVIEW DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Premium Dashboard Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white p-4 sm:p-5 rounded-2xl shadow-md border border-[#FFD54A]/30 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🏆</span>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-400/20 text-[#FFD54A] px-2 py-0.5 rounded-md">Total</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#FFD54A]">{achievers.length * 14}+</div>
                  <div className="text-xs font-bold text-gray-300 mt-0.5">{currentLanguage === 'en' ? 'Total Achievers' : 'कुल विभूतियाँ'}</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-[#004B23] transition">
                <div className="flex items-center justify-between">
                  <Briefcase className="w-6 h-6 text-[#004B23]" />
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-[#004B23] px-2 py-0.5 rounded-md">Active</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">{categories.length}+</div>
                  <div className="text-xs font-bold text-gray-600 mt-0.5">{currentLanguage === 'en' ? 'Total Professions' : 'कुल पेशे'}</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-amber-500 transition">
                <div className="flex items-center justify-between">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">Free</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">{achievers.filter(a => a.isMentor).length * 9}+</div>
                  <div className="text-xs font-bold text-gray-600 mt-0.5">{currentLanguage === 'en' ? 'Total Mentors' : 'कुल मार्गदर्शक'}</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-blue-500 transition">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">IAS / IPS</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">{achievers.filter(a => a.isGovt).length * 7}+</div>
                  <div className="text-xs font-bold text-gray-600 mt-0.5">{currentLanguage === 'en' ? 'Govt Officers' : 'सरकारी अधिकारी'}</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-purple-500 transition">
                <div className="flex items-center justify-between">
                  <Globe className="w-6 h-6 text-purple-600" />
                  <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md">Global</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">{achievers.filter(a => a.isOverseas).length * 5}+</div>
                  <div className="text-xs font-bold text-gray-600 mt-0.5">{currentLanguage === 'en' ? 'Overseas NRI' : 'प्रवासी भारतीय'}</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-rose-500 transition">
                <div className="flex items-center justify-between">
                  <Award className="w-6 h-6 text-rose-600" />
                  <span className="text-[10px] font-extrabold uppercase bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md">Honors</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">{awards.length * 4}+</div>
                  <div className="text-xs font-bold text-gray-600 mt-0.5">{currentLanguage === 'en' ? 'Award Winners' : 'पुरस्कार विजेता'}</div>
                </div>
              </div>
            </div>

            {/* Featured Achievers Grid */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0B132B] flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[#F4C430]" />
                    <span>{currentLanguage === 'en' ? 'Featured Community Achievers & Role Models' : 'प्रमुख गौरवशाली विभूतियाँ एवं प्रेरणास्रोत'}</span>
                  </h2>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {currentLanguage === 'en' ? 'Inspiring role models from the Rangrez community bringing glory across medicine, judiciary, civil services, and space science.' : 'चिकित्सा, न्यायपालिका, सिविल सेवा और विज्ञान में नाम रोशन करने वाले समाज के गौरव।'}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('directory')}
                  className="text-sm font-black text-[#004B23] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>{currentLanguage === 'en' ? 'View All Achievers' : 'सभी विभूतियाँ देखें'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievers.filter(a => a.isFeatured).slice(0, 6).map((ach) => (
                  <AchieverCard
                    key={ach.id}
                    achiever={ach}
                    currentLanguage={currentLanguage}
                    onSelect={setSelectedAchiever}
                    variant="featured"
                  />
                ))}
              </div>
            </div>

            {/* Quick Mentorship & Call to Action Banner */}
            <div className="bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 text-center lg:text-left max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-[#FFD54A] text-[#0B132B] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>{currentLanguage === 'en' ? 'Free Career Mentorship Program' : 'नि:शुल्क करियर मार्गदर्शन'}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {currentLanguage === 'en' ? 'Are You a Student Dreaming of IAS, NEET, ISRO, or IIT?' : 'क्या आप आईएएस, डॉक्टर, वैज्ञानिक या इंजीनियर बनने का सपना देख रहे हैं?'}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {currentLanguage === 'en'
                      ? 'Connect directly with community doctors, judges, civil servants, and scientists who have walked the path. Submit a mentorship request today!'
                      : 'समाज के वरिष्ठ डॉक्टरों, न्यायाधीशों और आईएएस अधिकारियों से सीधे जुड़ें और अपनी परीक्षा की तैयारी के लिए सटीक मार्गदर्शन प्राप्त करें।'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0 justify-center">
                  <button
                    onClick={() => {
                      setFilterMentorOnly(true);
                      setActiveTab('directory');
                    }}
                    className="px-6 py-4 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{currentLanguage === 'en' ? 'Find Your Mentor Now' : 'मार्गदर्शक खोजें'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('stories')}
                    className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider rounded-2xl transition cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Read Inspiring Stories' : 'प्रेरक कहानियां पढ़ें'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ACHIEVERS DIRECTORY WITH ADVANCED FILTERS */}
        {activeTab === 'directory' && (
          <div className="space-y-6">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] flex items-center gap-2">
                    <Search className="w-6 h-6 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Community Achievers Directory & Search' : 'समुदाय विभूति निर्देशिका एवं खोज'}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {currentLanguage === 'en' ? 'Search by keyword, profession category, government service, location, or available mentors.' : 'नाम, शहर, विभाग या पेशे के आधार पर खोजें।'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 bg-amber-50 border border-amber-300 px-4 py-2 rounded-xl cursor-pointer select-none shadow-2xs">
                    <input
                      type="checkbox"
                      checked={filterMentorOnly}
                      onChange={(e) => setFilterMentorOnly(e.target.checked)}
                      className="rounded text-[#004B23] w-4 h-4 focus:ring-0"
                    />
                    <span className="text-xs font-black text-[#004B23] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{currentLanguage === 'en' ? 'Available Mentors Only' : 'केवल उपलब्ध मार्गदर्शक'}</span>
                    </span>
                  </label>
                  {(searchTerm || selectedCategory !== 'all' || filterSector !== 'all' || filterLocation !== 'all' || filterState !== 'all' || filterDistrict !== 'all' || filterMentorOnly) && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setFilterSector('all');
                        setFilterLocation('all');
                        setFilterState('all');
                        setFilterDistrict('all');
                        setFilterMentorOnly(false);
                      }}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold rounded-xl transition cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Super-Category Profession Quick Filter Pills */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {[
                    { id: 'all', label: '🌟 All Professions' },
                    { id: 'govt-services', label: '🏛️ Government Services' },
                    { id: 'law-judiciary', label: '⚖️ Law & Judiciary' },
                    { id: 'medical-excellence', label: '🏥 Medical Excellence' },
                    { id: 'academic-excellence', label: '🎓 Academic Excellence' },
                    { id: 'professional-excellence', label: '💼 Professional Excellence' },
                    { id: 'public-rep', label: '🗳️ Public Representatives' },
                    { id: 'community-leaders', label: '🤝 Community Leaders' },
                    { id: 'young-achievers', label: '✨ Young Achievers' },
                    { id: 'lifetime-contribution', label: '👑 Lifetime Contribution' },
                    { id: 'success-stories-cat', label: '📈 Success Stories' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-black shrink-0 transition cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-[#004B23] text-white shadow-sm'
                          : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyword Search & Dropdown Filters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 pt-2">
                <div className="relative sm:col-span-2 xl:col-span-2">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={currentLanguage === 'en' ? 'Search by name, organization, awards, expertise...' : 'नाम, संस्था, पुरस्कार से खोजें...'}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>

                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    <option value="all">All Professions ({categories.length})</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {currentLanguage === 'en' ? c.nameEn : currentLanguage === 'ur' ? c.nameUr : c.nameHi} ({c.count})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={filterState}
                    onChange={(e) => {
                      setFilterState(e.target.value);
                      setFilterDistrict('all');
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    <option value="all">📍 All States / Regions</option>
                    {allStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={filterDistrict}
                    onChange={(e) => setFilterDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    <option value="all">🏙️ All Districts / Cities</option>
                    {allDistricts.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={filterSector}
                    onChange={(e: any) => setFilterSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    <option value="all">Govt & Private Service</option>
                    <option value="govt">👮 Govt Officers Only</option>
                    <option value="private">💼 Private Sector</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results count & Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <div className="text-sm font-black text-gray-700">
                  Showing <span className="text-[#004B23]">{filteredAchievers.length}</span> of {achievers.length} Achiever Profiles
                </div>
                <div className="text-xs text-gray-400 font-medium hidden sm:block">
                  Click any profile card to view full biography, awards, and career advice
                </div>
              </div>

              {filteredAchievers.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-3xl">🔍</div>
                  <h3 className="text-lg font-black text-[#0B132B]">No Achievers Found Matching Your Filters</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Try clearing your search keywords or resetting profession filters to view the complete community directory.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setFilterSector('all');
                      setFilterLocation('all');
                      setFilterState('all');
                      setFilterMentorOnly(false);
                    }}
                    className="px-6 py-2.5 bg-[#004B23] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAchievers.map((ach) => (
                    <AchieverCard
                      key={ach.id}
                      achiever={ach}
                      currentLanguage={currentLanguage}
                      onSelect={setSelectedAchiever}
                      variant="directory"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORIES & PROFESSIONS (22+ ICON CARDS) */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#0B132B] to-[#142244] p-6 sm:p-8 rounded-3xl text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Briefcase className="w-7 h-7 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'Explore by Profession Categories' : 'पेशे व श्रेणियों के अनुसार जानें'}</span>
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  {currentLanguage === 'en'
                    ? 'Our community members have excelled in over 22 distinct professional disciplines across India and worldwide. Click any category to view its achievers.'
                    : 'हमारे समुदाय के सदस्य 22 से अधिक विभिन्न पेशेवर क्षेत्रों में शीर्ष पदों पर आसीन हैं।'}
                </p>
              </div>
              <div className="bg-white/10 px-5 py-3 rounded-2xl border border-white/20 text-center shrink-0">
                <div className="text-2xl font-black text-[#FFD54A]">{categories.length}</div>
                <div className="text-[10px] uppercase font-extrabold text-gray-300">Active Professions</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveTab('directory');
                  }}
                  className="group bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition flex items-center justify-center shrink-0 shadow-inner">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="bg-emerald-50 border border-emerald-200 text-[#004B23] font-black text-xs px-2.5 py-1 rounded-full shrink-0">
                      {cat.count} {currentLanguage === 'en' ? 'Members' : 'सदस्य'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-[#0B132B] group-hover:text-[#004B23] transition">
                      {currentLanguage === 'en' ? cat.nameEn : currentLanguage === 'ur' ? cat.nameUr : cat.nameHi}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                      {currentLanguage === 'en' ? cat.descriptionEn : currentLanguage === 'ur' ? cat.descriptionUr : cat.descriptionHi}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                    <span>{currentLanguage === 'en' ? 'View Directory' : 'निर्देशिका देखें'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MENTORSHIP GUIDANCE HUB */}
        {activeTab === 'mentorship' && (
          <div className="space-y-8">
            {/* Mentorship Hero */}
            <div className="bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] p-6 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-[#FFD54A] text-[#0B132B] font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                    <Sparkles className="w-4 h-4 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? '1-on-1 Student Career Guidance' : 'छात्र करियर मार्गदर्शन'}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    {currentLanguage === 'en' ? 'Community Mentor & Guidance Hub' : 'सामुदायिक मेंटर एवं मार्गदर्शन केंद्र'}
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                    {currentLanguage === 'en'
                      ? 'Our distinguished doctors, civil servants, judges, and engineers have pledged their time to guide young students. Select a mentor below to ask specific questions about competitive exams, scholarships, or career paths.'
                      : 'हमारे वरिष्ठ डॉक्टर, आईएएस, न्यायाधीश और इंजीनियर छात्रों का मार्गदर्शन करने के लिए उपलब्ध हैं।'}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center shrink-0 w-full sm:w-auto">
                  <div className="text-3xl font-black text-[#FFD54A]">{achievers.filter(a => a.isMentor).length}+</div>
                  <div className="text-xs uppercase font-extrabold text-gray-200 mt-1">{currentLanguage === 'en' ? 'Available Role Models' : 'उपलब्ध मार्गदर्शक'}</div>
                </div>
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#0B132B] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{currentLanguage === 'en' ? 'Achievers Available for Career Guidance' : 'मार्गदर्शन हेतु उपलब्ध वरिष्ठ सदस्य'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievers.filter(a => a.isMentor).map((ach) => (
                  <AchieverCard
                    key={ach.id}
                    achiever={ach}
                    currentLanguage={currentLanguage}
                    onSelect={setSelectedAchiever}
                    variant="mentor"
                    onSecondaryAction={handleOpenMentorshipModal}
                    secondaryActionLabel={currentLanguage === 'en' ? 'Request Guidance' : currentLanguage === 'ur' ? 'رہنمائی کی درخواست' : 'मार्गदर्शन मांगें'}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SUCCESS STORIES */}
        {activeTab === 'stories' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-[#004B23] font-black text-xs px-3 py-1 rounded-full uppercase">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'en' ? 'Real Journeys & Hard Work' : 'प्रेरक जीवन गाथा'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Inspiring Success Stories & Advice' : 'सफलता की कहानियां एवं प्रेरणा'}
                </h2>
                <p className="text-sm text-gray-600 max-w-xl">
                  {currentLanguage === 'en'
                    ? 'Every achievement is built on perseverance, financial struggles, and sleepless nights. Read how community role models overcame adversity to reach the top.'
                    : 'हर सफलता के पीछे कड़ी मेहनत और संघर्ष छिपा है। पढ़ें समाज के गौरवशाली सदस्यों की प्रेरणादायक कहानियां।'}
                </p>
              </div>

              <button
                onClick={() => setModalMode('story')}
                className="px-6 py-3.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#FFD54A]" />
                <span>{currentLanguage === 'en' ? 'Publish Your Story' : 'अपनी कहानी भेजें'}</span>
              </button>
            </div>

            {/* Interactive Timeline of Excellence Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-[#0B132B] to-[#004B23] p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD54A] bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                      🚀 {currentLanguage === 'en' ? 'Chronological Milestones' : 'ऐतिहासिक पड़ाव'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                      {currentLanguage === 'en' ? 'Success Story Timeline of Community Excellence' : 'समाज के गौरवशाली विकास की समयरेखा'}
                    </h3>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">
                    {currentLanguage === 'en' ? 'From artisan heritage to global leadership (1960s - Present)' : 'पारंपरिक हुनर से वैश्विक नेतृत्व तक'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    { year: '1960 - 1980', title: 'The Foundation Era', desc: 'First generation of educators and traditional entrepreneurs established scholarship funds and community hostels.', icon: '🏛️', tag: 'Pioneers' },
                    { year: '1980 - 2000', title: 'Civil Service & Medical Rise', desc: 'Community youth began cracking UPSC, state civil services, and entering leading medical colleges.', icon: '👮', tag: 'Public Service' },
                    { year: '2000 - 2015', title: 'Corporate & Legal Excellence', desc: 'Expansion into high court advocacy, chartered accountancy, and multinational IT corporations.', icon: '⚖️', tag: 'Professionals' },
                    { year: '2015 - Present', title: 'Global AI & MIT Innovators', desc: 'New generation securing All-India Rank 1 in GATE, MIT fellowships, and global research leadership.', icon: '🤖', tag: 'Global Stage' },
                  ].map((milestone, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 relative hover:bg-white/15 transition group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg">{milestone.icon}</span>
                        <span className="text-[11px] font-black text-[#FFD54A] bg-black/40 px-2.5 py-0.5 rounded-full">{milestone.year}</span>
                      </div>
                      <h4 className="text-sm font-black text-white group-hover:text-[#FFD54A] transition">{milestone.title}</h4>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">{milestone.desc}</p>
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">{milestone.tag}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {stories.map((story) => (
                <div key={story.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-lg transition">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                    <div className="flex items-center gap-6">
                      <ProfileImage 
                        src={story.achieverPhoto} 
                        alt={story.achieverName} 
                        size="xl"
                        containerClassName="rounded-2xl border-4 border-[#F4C430] shadow-xl"
                      />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0B132B]">
                          {story.title[currentLanguage] || story.title.en}
                        </h3>
                        <p className="text-sm font-bold text-[#004B23] mt-0.5">
                          By: {story.achieverName} — <span className="text-gray-500 font-normal">{story.profession}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-slate-100 px-3 py-1 rounded-full shrink-0">
                      📅 {story.date}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="text-xs font-black uppercase text-gray-500 mb-2 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-blue-600" />
                        <span>{currentLanguage === 'en' ? 'Personal Journey' : 'प्रारंभिक जीवन'}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{story.personalJourney}</p>
                    </div>

                    <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                      <h4 className="text-xs font-black uppercase text-amber-800 mb-2 flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{currentLanguage === 'en' ? 'Challenges & Hard Work' : 'संघर्ष व परिश्रम'}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{story.challenges} {story.hardWork}</p>
                    </div>

                    <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200">
                      <h4 className="text-xs font-black uppercase text-[#004B23] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#FFD54A]" />
                        <span>{currentLanguage === 'en' ? 'Success & Advice for Students' : 'सफलता व युवाओं को सलाह'}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">{story.successStory} <br /><br /><strong>Advice:</strong> "{story.adviceForStudents}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: AWARDS WALL GALLERY */}
        {activeTab === 'awards' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] p-6 sm:p-8 rounded-3xl text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Trophy className="w-7 h-7 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'Community Awards Wall Gallery' : 'पुरस्कार एवं सम्मान गैलरी'}</span>
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  {currentLanguage === 'en'
                    ? 'Showcasing Padma Shri nominees, President Medals, Government Honors, Gold Medals, and trophies earned by our community achievers.'
                    : 'राष्ट्रपति पदक, पद्म श्री नामांकन और समाज के गौरवशाली सम्मानों की प्रदर्शनी।'}
                </p>
              </div>
              <button
                onClick={() => setModalMode('award')}
                className="px-5 py-3 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-black text-xs uppercase tracking-wider rounded-xl shadow transition shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'Submit Honor' : 'सम्मान जोड़ें'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((aw) => (
                <div key={aw.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition flex flex-col justify-between">
                  <div className="h-44 bg-slate-100 relative overflow-hidden">
                    <img src={aw.imageUrl} alt="" className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                    <div className="absolute top-3 left-3 bg-[#0B132B]/80 backdrop-blur-sm text-[#FFD54A] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {aw.type}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white text-[#004B23] font-black text-xs px-2.5 py-1 rounded-lg shadow">
                      Year: {aw.year}
                    </div>
                  </div>

                  <div className="p-5 flex-1 space-y-2">
                    <div className="text-[11px] font-extrabold uppercase text-[#004B23] tracking-wider">{aw.category}</div>
                    <h3 className="text-base font-black text-[#0B132B] leading-snug">
                      {aw.title[currentLanguage] || aw.title.en}
                    </h3>
                    <p className="text-xs font-bold text-gray-800">
                      {currentLanguage === 'en' ? 'Conferred To:' : 'प्राप्तकर्ता:'} <span className="text-[#004B23]">{aw.recipientName}</span>
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed pt-1">{aw.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: COMMUNITY STATISTICS CHARTS */}
        {activeTab === 'charts' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-[#0B132B] flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Community Achievers Statistics & Breakdown' : 'सामुदायिक विभूति आंकड़े एवं विश्लेषण'}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {currentLanguage === 'en' ? 'Visual demographic and professional distribution of community role models across India and abroad.' : 'पेशा, सरकारी सेवा और स्थान के आधार पर समुदाय का विश्लेषण।'}
                  </p>
                </div>
                <span className="bg-emerald-100 text-[#004B23] font-extrabold text-xs px-3 py-1.5 rounded-xl shrink-0">
                  Total Active Records: 148+ Members
                </span>
              </div>

              {/* Visual Bars Breakdown */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-gray-500 tracking-wider">
                  {currentLanguage === 'en' ? 'Distribution by Profession Category' : 'पेशे के आधार पर वितरण'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.slice(0, 10).map((cat) => {
                    const maxCount = 65;
                    const percentage = Math.round((cat.count / maxCount) * 100);
                    return (
                      <div key={cat.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-[#0B132B] flex items-center gap-2">
                            {getCategoryIcon(cat.icon)}
                            <span>{currentLanguage === 'en' ? cat.nameEn : currentLanguage === 'ur' ? cat.nameUr : cat.nameHi}</span>
                          </span>
                          <span className="text-[#004B23] font-black">{cat.count} Achievers</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#004B23] to-[#FFD54A] h-full rounded-full transition-all duration-1000"
                            style={{ width: `${Math.max(percentage, 15)}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Summary Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 text-center">
                  <div className="text-3xl font-black text-[#004B23]">28%</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Government Officers (IAS, IPS, Teachers)</div>
                </div>
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 text-center">
                  <div className="text-3xl font-black text-amber-800">43%</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Active Career Mentors for Youth</div>
                </div>
                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 text-center">
                  <div className="text-3xl font-black text-blue-800">22%</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Overseas NRI & IT Professionals</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: ADMIN CONTROL PANEL */}
        {activeTab === 'admin' && (
          <ExcellenceAdminPanel
            achievers={achievers}
            categories={categories}
            mentorshipRequests={mentorshipRequests}
            currentLanguage={currentLanguage}
            onAddAchiever={handleAddAchiever}
            onDeleteAchiever={handleDeleteAchiever}
            onToggleVerify={handleToggleVerify}
            onToggleFeature={handleToggleFeature}
            onAddCategory={handleAddCategory}
            onUpdateRequestStatus={handleUpdateRequestStatus}
          />
        )}
      </div>

      {/* INDIVIDUAL PROFILE MODAL */}
      {selectedAchiever && (
        <ExcellenceProfileModal
          achiever={selectedAchiever}
          currentLanguage={currentLanguage}
          onClose={() => setSelectedAchiever(null)}
          onRequestMentorship={handleOpenMentorshipModal}
        />
      )}

      {/* MENTORSHIP / STORY / AWARD SUBMISSION MODAL */}
      {modalMode && (
        <ExcellenceMentorshipModal
          achiever={targetAchieverForModal}
          currentLanguage={currentLanguage}
          mode={modalMode}
          onClose={() => {
            setModalMode(null);
            setTargetAchieverForModal(null);
          }}
          onSubmitMentorship={handleSubmitMentorshipRequest}
          onSubmitStory={handleSubmitStory}
          onSubmitAward={handleSubmitAward}
        />
      )}

      {/* NOMINATE AN ACHIEVER MODAL */}
      {showNominateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2 text-[#FFD54A] font-bold text-sm">
                <UserPlus className="w-5 h-5" />
                <span>{currentLanguage === 'en' ? 'Nominate a Community Achiever' : 'समाज के सफल व्यक्तित्व का नामांकन करें'}</span>
              </div>
              <button onClick={() => setShowNominateModal(false)} className="text-gray-400 hover:text-white transition cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 bg-slate-50 text-left">
              {nomSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-100 text-[#004B23] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-black text-lg text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Nomination Successfully Submitted!' : 'नामांकन सफलतापूर्वक जमा किया गया!'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Thank you for recommending a distinguished member of the All India Rangrez community. The Trust Editorial Board will verify their achievements and publish their profile in the Hall of Excellence.'
                      : 'ऑल इंडिया रंगरेज समाज के विशिष्ट सदस्य की सिफारिश करने के लिए धन्यवाद। ट्रस्ट संपादकीय बोर्ड उनकी उपलब्धियों का सत्यापन कर उन्हें हॉल ऑफ एक्सीलेंस में प्रकाशित करेगा।'}
                  </p>
                  <button
                    onClick={() => setShowNominateModal(false)}
                    className="mt-2 px-6 py-2.5 bg-[#004B23] text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Close Window' : 'बंद करें'}
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      {currentLanguage === 'en'
                        ? 'Help us document our community legacy! Nominate IAS/IPS officers, doctors, scientists, entrepreneurs, freedom fighters, or Neelgar craft pioneers.'
                        : 'हमारे समाज के इतिहास व गौरव को सहेजने में मदद करें! IAS/IPS अधिकारियों, डॉक्टरों, वैज्ञानिकों, उद्यमियों या स्वतंत्रता सेनानियों को नामांकित करें।'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? "Achiever's Full Name *" : 'विभूति का पूरा नाम *'}
                      </label>
                      <input
                        type="text"
                        value={nomName}
                        onChange={(e) => setNomName(e.target.value)}
                        placeholder="e.g. Dr. Shahid Rangrez / IPS Mohd. Tariq"
                        className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          {currentLanguage === 'en' ? 'Excellence Category' : 'श्रेणी चुनें'}
                        </label>
                        <select
                          value={nomCat}
                          onChange={(e) => setNomCat(e.target.value)}
                          className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option value="civil-servants">Civil Services (IAS / IPS / IFS)</option>
                          <option value="medical-excellence">Medical & Doctors</option>
                          <option value="academic-excellence">Scientists & Professors</option>
                          <option value="law-judiciary">Judiciary & Advocates</option>
                          <option value="professional-excellence">Entrepreneurs & CA/IT</option>
                          <option value="lifetime-contribution">Freedom Fighters & Social Reformers</option>
                          <option value="artisans">Neelgar Craft Pioneers</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          {currentLanguage === 'en' ? 'City / District' : 'शहर / जिला'}
                        </label>
                        <input
                          type="text"
                          value={nomCity}
                          onChange={(e) => setNomCity(e.target.value)}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#004B23]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Designation & Organization' : 'पद एवं संस्था'}
                      </label>
                      <input
                        type="text"
                        value={nomOrg}
                        onChange={(e) => setNomOrg(e.target.value)}
                        placeholder="e.g. Chief Medical Officer, AIIMS / Founder, Tech Solutions"
                        className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Key Achievements & Bio Summary *' : 'मुख्य उपलब्धियां एवं जीवन परिचय *'}
                      </label>
                      <textarea
                        rows={3}
                        value={nomBio}
                        onChange={(e) => setNomBio(e.target.value)}
                        placeholder={currentLanguage === 'en' ? 'Describe their contributions, awards, and why they inspire our community...' : 'उनकी उपलब्धियों, पुरस्कारों और समाज के लिए प्रेरणा का वर्णन करें...'}
                        className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => setShowNominateModal(false)}
                      className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl text-xs cursor-pointer"
                    >
                      {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                    </button>
                    <button
                      onClick={() => {
                        if (!nomName.trim() || !nomBio.trim()) {
                          alert(currentLanguage === 'en' ? 'Please fill in the Achiever Name and Bio.' : 'कृपया नाम और उपलब्धि विवरण भरें।');
                          return;
                        }
                        const newAchiever: AchieverProfile = {
                          id: `ach-nom-${Date.now()}`,
                          name: nomName,
                          gender: 'Male',
                          nativePlace: nomCity || 'India',
                          currentCity: nomCity || 'India',
                          state: 'India',
                          district: nomCity,
                          country: 'India',
                          occupation: nomOrg || 'Community Leader',
                          categoryId: nomCat,
                          designation: nomOrg || 'Community Leader',
                          organization: 'All India Rangrez Samaj',
                          qualification: 'Graduate / Post-Graduate',
                          university: 'Reputed University',
                          yearOfAchievement: 2026,
                          careerJourney: { en: nomBio, hi: nomBio, ur: nomBio },
                          biography: { en: nomBio, hi: nomBio, ur: nomBio },
                          majorAchievements: [nomBio],
                          awardsHonors: ['Community Nomination'],
                          socialContributions: { en: nomBio, hi: nomBio, ur: nomBio },
                          inspirationalMessage: { en: 'Hard work and perseverance pave the path to true leadership.', hi: 'कड़ी मेहनत और लगन ही सच्ची सफलता का मार्ग प्रशस्त करती है।', ur: 'محنت اور استقامت حقیقی کامیابی کی راہ ہموار کرتی ہے۔' },
                          careerAdvice: { en: 'Stay dedicated to education and community service.', hi: 'शिक्षा और समाज सेवा के प्रति समर्पित रहें।', ur: 'تعلیم اور خدمت خلق کے لیے وقف رہیں۔' },
                          languagesKnown: ['Hindi', 'English', 'Urdu'],
                          expertise: ['Leadership', 'Community Service'],
                          isMentor: false,
                          isVerified: false,
                          isFeatured: false,
                          isGovt: false,
                          isOverseas: false,
                          photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
                          badges: ['Nominated Role Model', 'Community Pride']
                        };
                        handleAddAchiever(newAchiever);
                        setNomSubmitted(true);
                      }}
                      className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold rounded-xl text-xs shadow flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FFD54A]" />
                      <span>{currentLanguage === 'en' ? 'Submit Nomination' : 'नामांकन जमा करें'}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallOfExcellenceView;
