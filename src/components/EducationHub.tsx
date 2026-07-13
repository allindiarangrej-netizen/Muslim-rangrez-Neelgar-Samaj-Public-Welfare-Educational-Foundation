import React, { useState, useEffect } from 'react';
import { 
  BookOpen, GraduationCap, Award, Search, Users, ShieldCheck, 
  Mail, Phone, Briefcase, Video, FileText, Download, Star, 
  Layers, CheckCircle2, ChevronRight, Sparkles, HelpCircle,
  MessageSquare, Calendar, Send, Clock, UserCheck
} from 'lucide-react';
import { Language } from '../types';
import { getSupabase } from '../lib/supabaseClient';

interface EducationHubProps {
  currentLanguage: Language;
}

export default function EducationHub({ currentLanguage }: EducationHubProps) {
  const [activeTab, setActiveTab] = useState<'mentorship' | 'levels' | 'library' | 'stories' | 'webinars' | 'forum'>('mentorship');
  const [activeCategory, setActiveCategory] = useState('All');
  const [professionSearch, setProfessionSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('school');
  
  const [professionals, setProfessionals] = useState<any[]>([]);
  const supabase = getSupabase();

  useEffect(() => {
    async function fetchProfessionals() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from('professionals').select('*');
        if (data && !error) {
          setProfessionals(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfessionals();
  }, [supabase]);

  const categories = ['All', 'Teachers', 'Career Mentors', 'Subject Experts', 'Doctors', 'Engineers', 'IAS / IPS & Govt Officers', 'Industry Experts', 'Lawyers'];

  const scholarships = [
    { nameEn: 'Rangrez Higher Education Support Scheme 2026', nameHi: 'रंगरेज उच्च शिक्षा सहायता योजना 2026', descEn: 'Direct bank tuition fee refunds up to ₹35,000 for students clearing state college entrances.', descHi: 'राज्य कॉलेज प्रवेश परीक्षा पास करने वाले छात्रों के लिए ₹35,000 तक की सीधी बैंक शिक्षण शुल्क प्रतिपूर्ति।', deadline: '2026-08-31' },
    { nameEn: 'Janab Shakeel Ahmed Technical Scholarship', nameHi: 'जनाब शकील अहमद तकनीकी छात्रवृत्ति', descEn: 'Fully sponsored training fees for professional courses in Web Development, ITI, or Tally.', descHi: 'वेब डेवलपमेंट, आईटीआई या टैली में व्यावसायिक पाठ्यक्रमों के लिए पूरी तरह से प्रायोजित प्रशिक्षण शुल्क।', deadline: '2026-07-25' }
  ];

  const academicLevels = [
    {
      id: 'school',
      titleEn: 'School Education (Class 1 to 10)',
      titleHi: 'स्कूली शिक्षा (कक्षा 1 से 10)',
      descEn: 'NCERT textbooks, state board solutions, foundation mathematics, elementary science kits, and scholarship olympiad guidance.',
      topics: ['NCERT Solutions Class 6-10', 'Vedic Mathematics Foundation', 'National Talent Search Exam (NTSE)', 'English Grammar & Vocabulary']
    },
    {
      id: 'higher-sec',
      titleEn: 'Higher Secondary (Class 11 & 12)',
      titleHi: 'उच्च माध्यमिक (कक्षा 11 व 12)',
      descEn: 'Stream specialization (Science PCM/PCB, Commerce, Arts), board exam question banks, and entrance coaching integration.',
      topics: ['Physics & Chemistry Formula Notes', 'Accountancy & Economics Question Bank', 'CUET Foundation Series', 'Board Exam Time Management']
    },
    {
      id: 'graduation',
      titleEn: 'Graduation & Degree Courses (UG)',
      titleHi: 'स्नातक (UG) पाठ्यक्रम',
      descEn: 'B.Tech, MBBS, B.Com, B.Sc, BA, LLB semester study notes, university previous year papers, and internship roadmaps.',
      topics: ['Semester Examination Notes', 'University Syllabus Guidelines', 'Research Project Mentorship', 'Campus Placement Readiness']
    },
    {
      id: 'post-grad',
      titleEn: 'Post Graduation & Research (PG / Ph.D)',
      titleHi: 'स्नातकोत्तर एवं अनुसंधान (PG / Ph.D)',
      descEn: 'Master’s degree guidance (M.Tech, MD, MBA, MA, M.Sc), UGC NET preparation, dissertation writing, and research grants.',
      topics: ['UGC NET / JRF Preparation', 'Thesis & Dissertation Formatting', 'International Journal Publication', 'Research Fellowship Grants']
    },
    {
      id: 'diploma',
      titleEn: 'Polytechnic Diploma & ITI Trades',
      titleHi: 'डिप्लोमा एवं आईटीआई ट्रेड',
      descEn: '3-year engineering diploma curriculums, NCVT ITI trade manuals, workshop safety guides, and lateral B.Tech entry preparation.',
      topics: ['Mechanical & Civil Drawing Manuals', 'Electrical Trade Theory', 'Lateral Entry Exam Papers', 'Apprentice Placement Links']
    },
    {
      id: 'certificate',
      titleEn: 'Certificate Courses & Skill Development',
      titleHi: 'सर्टिफिकेट कोर्स एवं कौशल विकास',
      descEn: 'Short-term professional certifications in Digital Marketing, Tally ERP, Web Development, Textile Dyeing, and AI tools.',
      topics: ['Full-Stack Web Development', 'Textile Block Printing & Dyeing', 'Tally Prime with GST', 'Spoken English & Professional Diction']
    }
  ];

  const libraryMaterials = [
    { title: 'NCERT Complete Mathematics & Science Set (Class 6-12)', type: 'eBook PDF', size: '45 MB', downloads: '18,500+' },
    { title: 'UPSC Civil Services General Studies Solved Papers (10 Years)', type: 'Question Bank', size: '28 MB', downloads: '12,100+' },
    { title: 'Engineering Mathematics & Calculus Foundation Video Series', type: 'Video Lectures', size: '12 Hours', downloads: '9,400+' },
    { title: 'Medical NEET Biology High-Yield Memory Charts & Diagrams', type: 'Revision Notes', size: '15 MB', downloads: '24,300+' },
    { title: 'Modern Textile Block Printing & Ancestral Dyeing Formulas', type: 'Craft Manual', size: '18 MB', downloads: '6,200+' },
    { title: 'Corporate Interview Etiquette & Spoken English Mastery', type: 'Audiobook / PDF', size: '32 MB', downloads: '14,800+' }
  ];

  const successStories = [
    {
      name: 'Dr. Ayesha Siddiqui',
      role: 'Lead Pediatrician, Gwalior Civil Hospital',
      story: 'Raised in Kailaras, Ayesha cleared NEET with a top state rank utilizing community scholarship funds and peer mentorship from senior doctors.',
      quote: 'The community mentorship network guided me through every step of medical counseling. Today I mentor 15 young girls aspiring to join healthcare.'
    },
    {
      name: 'Er. Imran Khan',
      role: 'Senior Cloud Architect, Bengaluru',
      story: 'Started from a government ITI diploma in Mhow, Imran completed his lateral B.Tech and mastered AWS cloud computing through our free online skill library.',
      quote: 'Never underestimate vocational diplomas. Continuous skill development and technical certifications transformed my career path.'
    },
    {
      name: 'Adv. Shabana Anjum',
      role: 'High Court Advocate & Legal Aid Volunteer',
      story: 'Completed her LLB from Aligarh Muslim University with the Maulana Azad Fellowship. She now heads our community legal awareness programs in Bhopal.',
      quote: 'Education is the most powerful tool for social reform. My goal is to ensure every household understands their constitutional rights.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white font-sans animate-fadeIn" id="education_hub_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'ACADEMIC EXCELLENCE & MENTORSHIP CELL' : 'शैक्षणिक विकास एवं मार्गदर्शन प्रकोष्ठ'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Education & Mentorship Hub' : currentLanguage === 'ur' ? 'تعلیم اور رہنمائی ہب' : 'शिक्षा और मेंटरशिप हब'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            {currentLanguage === 'en'
              ? 'Complete academic progression from School Education to Post Graduation, digital library study materials, free skill development courses, and 1-on-1 community mentorship.'
              : 'स्कूली शिक्षा से लेकर स्नातकोत्तर तक संपूर्ण शैक्षणिक मार्गदर्शन, डिजिटल लाइब्रेरी अध्ययन सामग्री, मुफ्त कौशल विकास पाठ्यक्रम और वन-ऑन-वन मेंटरशिप।'}
          </p>

          {/* Sub-Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('mentorship')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'mentorship'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Mentors & Directory' : 'विशेषज्ञ व निर्देशिका'}</span>
            </button>
            <button
              onClick={() => setActiveTab('levels')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'levels'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'School to PG Courses' : 'स्कूल से पीजी पाठ्यक्रम'}</span>
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'library'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Digital Library & Notes' : 'डिजिटल लाइब्रेरी व नोट्स'}</span>
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'stories'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Award className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Success Stories & Articles' : 'सफलता की कहानियां'}</span>
            </button>
            <button
              onClick={() => setActiveTab('webinars')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'webinars'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Video className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Video Sessions & Webinars' : 'वीडियो सत्र एवं वेबिनार'}</span>
            </button>
            <button
              onClick={() => setActiveTab('forum')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                activeTab === 'forum'
                  ? 'bg-[#004B23] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Discussion Forum & Q&A' : 'चर्चा मंच व प्रश्नोत्तर'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MENTORSHIP & PROFESSIONAL DIRECTORY (ZERO DATA LOSS) */}
        {activeTab === 'mentorship' && (
          <div className="animate-fadeIn space-y-12">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm" id="professional_directory">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Community Professionals & Student Mentors' : 'सामुदायिक विशेषज्ञ और मार्गदर्शक'}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Connect directly with leading community Doctors, Lawyers, and Engineers for academic and career support.' : 'सहायता और मार्गदर्शन के लिए समुदाय के प्रमुख चिकित्सकों, वकीलों और इंजीनियरों से सीधे जुड़ें।'}
                  </p>
                </div>

                {/* Search Input */}
                <div className="relative max-w-xs w-full">
                  <input
                    type="text"
                    placeholder={currentLanguage === 'en' ? 'Search specialty or name...' : 'विशेषज्ञता या नाम से खोजें...'}
                    value={professionSearch}
                    onChange={(e) => setProfessionSearch(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-xs p-2.5 rounded-xl pl-8 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  />
                  <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#004B23] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {currentLanguage === 'en' ? cat : (cat === 'All' ? 'सभी' : (cat === 'Doctors' ? 'चिकित्सक' : (cat === 'Engineers' ? 'इंजीनियर' : (cat === 'Lawyers' ? 'अधिवक्ता' : 'शिक्षक'))))}
                  </button>
                ))}
              </div>

              {/* Professionals List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {professionals
                  .filter(p => activeCategory === 'All' || (p.categoryEn || p.category) === activeCategory)
                  .filter(p => (p.nameEn || p.name || '').toLowerCase().includes(professionSearch.toLowerCase()) || (p.detailsEn || p.details || '').toLowerCase().includes(professionSearch.toLowerCase()))
                  .map((p, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2.5 py-0.5 rounded uppercase font-mono">
                          {p.categoryEn || p.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{currentLanguage === 'en' ? (p.nameEn || p.name) : (p.nameHi || p.name)}</h4>
                        <p className="text-[11px] text-slate-500 leading-normal">{currentLanguage === 'en' ? (p.detailsEn || p.details) : (p.detailsHi || p.details)}</p>
                        <p className="text-[11px] text-[#004B23] font-semibold">📍 {currentLanguage === 'en' ? (p.locationEn || p.location) : (p.locationHi || p.location)}</p>
                      </div>

                      <div className="border-t border-slate-100 pt-3 mt-4 space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                          <button
                            onClick={() => alert(currentLanguage === 'en' ? `Guidance appointment requested with ${p.nameEn}. Our coordinator will confirm via SMS/WhatsApp within 24 hours.` : `${p.nameHi} के साथ मार्गदर्शन समय का अनुरोध किया गया है। 24 घंटे में पुष्टि की जाएगी।`)}
                            className="bg-[#004B23] hover:bg-[#00381a] text-white py-1.5 px-2 rounded-lg transition flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Calendar className="w-3 h-3" />
                            <span>{currentLanguage === 'en' ? 'Book Guidance' : 'समय बुक करें'}</span>
                          </button>
                          <button
                            onClick={() => alert(currentLanguage === 'en' ? `Question box opened for ${p.nameEn}. Please submit your academic query.` : `${p.nameHi} के लिए प्रश्न बॉक्स खोला गया है।`)}
                            className="bg-emerald-50 hover:bg-emerald-100 text-[#004B23] border border-emerald-200 py-1.5 px-2 rounded-lg transition flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>{currentLanguage === 'en' ? 'Ask Question' : 'प्रश्न पूछें'}</span>
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400">
                          <span>Verified Community Mentor</span>
                          <span className="text-emerald-700 font-bold flex items-center space-x-0.5">
                            <ShieldCheck className="h-3 w-3" />
                            <span>Active</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 2. SCHOLARSHIPS & EDUCATION GRANTS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="education_grants_grid">
              {/* Open Applications */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Open Scholarship Portals' : 'सक्रिय छात्रवृत्ति पोर्टल'}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Apply directly for central trust education welfare funds below.' : 'नीचे केंद्रीय ट्रस्ट शिक्षा कल्याण कोष के लिए सीधे आवेदन करें।'}
                  </p>
                </div>

                <div className="space-y-4">
                  {scholarships.map((s, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <h4 className="text-xs font-bold text-slate-900">{currentLanguage === 'en' ? s.nameEn : s.nameHi}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{currentLanguage === 'en' ? s.descEn : s.descHi}</p>
                      
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-red-700 font-bold uppercase">DEADLINE: {s.deadline}</span>
                        <button
                          onClick={() => alert('Scholarship multi-step application form activated in full production.')}
                          className="px-3 py-1.5 bg-[#004B23] text-white rounded-xl hover:bg-[#00381a] transition font-bold cursor-pointer"
                        >
                          {currentLanguage === 'en' ? 'Apply Online' : 'ऑनलाइन आवेदन'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Development Programs */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Free Skill Development Courses' : 'मुफ्त कौशल विकास पाठ्यक्रम'}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Training programs designed for our artisan youth to succeed in modern IT sectors.' : 'आधुनिक आईटी क्षेत्रों में सफल होने के लिए हमारे शिल्पकार युवाओं के लिए डिजाइन किए गए प्रशिक्षण कार्यक्रम।'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Web Development Bootcamp</h4>
                      <p className="text-[10px] text-slate-500 mt-1">{currentLanguage === 'en' ? 'HTML, CSS, JavaScript, React. 12 Weeks.' : 'एचटीएमएल, सीएसएस, जावास्क्रिप्ट, रिएक्ट। 12 सप्ताह।'}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-[#004B23] rounded-lg font-bold text-[10px] uppercase border border-emerald-200">Kailaras Batch</span>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Modern Textile Designing & Dyeing</h4>
                      <p className="text-[10px] text-slate-500 mt-1">{currentLanguage === 'en' ? 'Fusing ancestral block print craft with digital tools.' : 'डिजिटल उपकरणों के साथ पारंपरिक ब्लॉक प्रिंट शिल्प का संलयन।'}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-[#004B23] rounded-lg font-bold text-[10px] uppercase border border-emerald-200">Jaipur Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SCHOOL TO PG COURSES & ACADEMIC LEVELS */}
        {activeTab === 'levels' && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B132B] mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Complete Academic Progression Framework' : 'संपूर्ण शैक्षणिक प्रगति ढांचा'}</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                {currentLanguage === 'en' ? 'Explore curated study guides, syllabus frameworks, and career integration for all 6 core educational tiers.' : 'सभी 6 प्रमुख शैक्षणिक स्तरों के लिए अध्ययन गाइड, पाठ्यक्रम और करियर मार्गदर्शन का अन्वेषण करें।'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicLevels.map((lvl) => (
                  <div key={lvl.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#004B23] transition flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">{lvl.titleEn}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{lvl.descEn}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-2">Included Resources</div>
                      <ul className="space-y-1.5 text-xs">
                        {lvl.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DIGITAL LIBRARY, BOOKS & VIDEO LEARNING */}
        {activeTab === 'library' && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Open Digital Library & Video Study Materials' : 'मुक्त डिजिटल लाइब्रेरी व अध्ययन सामग्री'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Download free NCERT eBooks, competitive question banks, revision memory charts, and lecture series.' : 'मुफ्त एनसीईआरटी ई-बुक्स, प्रश्न बैंक, रिवीजन चार्ट और वीडियो लेक्चर डाउनलोड करें।'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {libraryMaterials.map((mat, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#004B23] transition flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
                          {mat.type}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{mat.size}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">{mat.title}</h3>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">{mat.downloads} downloads</span>
                      <button
                        onClick={() => alert(`Initiating download for "${mat.title}"...`)}
                        className="px-3.5 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl flex items-center gap-1 transition shadow-xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SUCCESS STORIES & EDUCATIONAL ARTICLES */}
        {activeTab === 'stories' && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B132B] mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Community Educational Success Stories & Articles' : 'सामुदायिक सफलता की कहानियां एवं लेख'}</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                {currentLanguage === 'en' ? 'Real-life journeys of achievers who overcame obstacles through education, hard work, and community guidance.' : 'शिक्षा, कड़ी मेहनत और मार्गदर्शन के माध्यम से सफलता पाने वाले लोगों की वास्तविक कहानियां।'}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {successStories.map((story, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#004B23] flex items-center justify-center font-bold text-sm">
                          {(story.name || '').split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">{story.name}</h3>
                          <p className="text-[11px] font-semibold text-emerald-700">{story.role}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{story.story}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-[#D4AF37] text-[11px] italic text-slate-700">
                      "{story.quote}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: VIDEO SESSIONS & WEBINARS */}
        {activeTab === 'webinars' && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <h2 className="text-lg font-bold text-[#0B132B] flex items-center gap-2">
                    <Video className="w-5 h-5 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Live Video Mentorship & Upcoming Webinars' : 'लाइव वीडियो मेंटरशिप एवं आगामी वेबिनार'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentLanguage === 'en' ? 'Join interactive video sessions conducted by IAS officers, senior doctors, and tech leaders of the community.' : 'समुदाय के प्रशासनिक अधिकारियों, डॉक्टरों और टेक लीडर्स द्वारा आयोजित लाइव वीडियो सत्रों से जुड़ें।'}
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-[#004B23] font-bold text-xs flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>{currentLanguage === 'en' ? '2 Upcoming Live Broadcasts' : '2 आगामी लाइव सत्र'}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500/30 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Video className="w-3 h-3" /> Live Webinar
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">12 July 2026 • 11:00 AM IST</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">UPSC CSE 2026/27: Prelims Strategy & Ethics Answer Writing</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Conducted by Janab Suhail Rangrez (IAS Officer, AIR 84) and Prof. Tariq Masood. Learn answer structuring and NCERT mapping.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#004B23]" />
                      <span>340+ Registered</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => alert('Added to Calendar! SMS reminders enabled.')} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Remind Me
                      </button>
                      <button onClick={() => alert('Webinar registration confirmed. Zoom access link sent to WhatsApp.')} className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl shadow transition cursor-pointer flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-[#FFD54A]" /> Register Free
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Video className="w-3 h-3" /> Tech Guidance
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">18 July 2026 • 04:00 PM IST</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">AI Engineering & Dubai Corporate Placement Roadmap</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Host: Er. Aadils K. Rangrez (VP Engineering, Dubai). Learn cloud architecture, AI prompts, and Gulf remote job applications.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>215+ Registered</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => alert('Added to Calendar! SMS reminders enabled.')} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Remind Me
                      </button>
                      <button onClick={() => alert('Webinar registration confirmed. Access link sent to your phone.')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5" /> Register Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Past Recordings */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Past Masterclass Video Recordings & Lecture Notes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase">Medical Admission</span>
                      <h4 className="text-xs font-bold text-slate-900">NEET Counselling 2025 Complete Guide</h4>
                      <p className="text-[10px] text-slate-500">By Dr. Fatima Rangrez • 1 hr 15 min</p>
                    </div>
                    <button onClick={() => alert('Downloading masterclass lecture notes and video link...')} className="p-2.5 bg-slate-100 hover:bg-[#004B23] hover:text-white rounded-xl transition cursor-pointer shrink-0">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-blue-700 uppercase">Legal Rights</span>
                      <h4 className="text-xs font-bold text-slate-900">Constitutional Rights & Minority Scholarships</h4>
                      <p className="text-[10px] text-slate-500">By Adv. Safeer Ahmed • 55 min</p>
                    </div>
                    <button onClick={() => alert('Downloading legal rights booklet and video link...')} className="p-2.5 bg-slate-100 hover:bg-[#004B23] hover:text-white rounded-xl transition cursor-pointer shrink-0">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-purple-700 uppercase">IT & Cloud</span>
                      <h4 className="text-xs font-bold text-slate-900">AWS Cloud Computing & DevOps Mastery</h4>
                      <p className="text-[10px] text-slate-500">By Er. Tanveer Ahmed • 1 hr 30 min</p>
                    </div>
                    <button onClick={() => alert('Downloading AWS cloud roadmap notes...')} className="p-2.5 bg-slate-100 hover:bg-[#004B23] hover:text-white rounded-xl transition cursor-pointer shrink-0">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DISCUSSION FORUM & Q&A */}
        {activeTab === 'forum' && (
          <div className="animate-fadeIn space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Ask Question Box */}
              <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] p-6 sm:p-8 rounded-3xl text-white shadow-md space-y-4">
                <div className="flex items-center gap-2 text-[#FFD54A]">
                  <MessageSquare className="w-6 h-6" />
                  <h3 className="text-base font-bold font-serif">{currentLanguage === 'en' ? 'Ask a Mentor / Community Forum' : 'मेंटर्स से सवाल पूछें / चर्चा मंच'}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLanguage === 'en' ? 'Post your academic, admission, or career query. Verified subject experts and senior mentors reply within 24 hours.' : 'अपनी शैक्षणिक या करियर संबंधी शंका यहाँ पूछें। विषय विशेषज्ञ 24 घंटे में उत्तर देंगे।'}
                </p>
                
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Select Domain</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFD54A]">
                      <option className="bg-[#0B132B]">UPSC & Civil Services Guidance</option>
                      <option className="bg-[#0B132B]">NEET / Medical Admission</option>
                      <option className="bg-[#0B132B]">JEE / Engineering & IT Careers</option>
                      <option className="bg-[#0B132B]">NSP Scholarships & Fee Waivers</option>
                      <option className="bg-[#0B132B]">General School / Board Counseling</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Your Query / Question</label>
                    <textarea rows={4} placeholder="Type your question in English or Hindi..." className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#FFD54A]"></textarea>
                  </div>
                  <button onClick={() => alert('Your question has been posted to the Community Discussion Forum! An SMS will notify you when a mentor replies.')} className="w-full py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-extrabold text-xs rounded-xl shadow transition cursor-pointer flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Post Question to Forum</span>
                  </button>
                </div>
              </div>

              {/* Active Discussion Threads */}
              <div className="lg:col-span-2 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h3 className="text-base font-bold text-[#0B132B] uppercase tracking-wide flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Recently Solved Community Questions' : 'हाल ही में सुलझाए गए प्रश्न'}</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-500 font-mono">1,420+ Discussions</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">UPSC / Civil Services</span>
                      <span className="text-[10px] text-slate-400 font-mono">2 hours ago</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">What is the exact strategy for Urdu literature optional paper in UPSC Mains?</h4>
                    <div className="bg-slate-50 p-3 rounded-xl border-l-4 border-[#004B23] text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#004B23] text-[11px]">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Answered by Janab Suhail Rangrez (IAS, AIR 84):</span>
                      </div>
                      <p className="text-[11px] text-slate-600">"Focus heavily on classical poets (Mir Taqi Mir, Ghalib) and syntax analysis. We have uploaded standard Urdu optional notes in the Digital Library tab."</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-bold">
                      <span className="text-emerald-700">✓ Verified Expert Answer</span>
                      <button onClick={() => alert('Thank you for feedback!')} className="hover:text-[#004B23] cursor-pointer">👍 45 Upvotes • Reply</button>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Engineering & AI</span>
                      <span className="text-[10px] text-slate-400 font-mono">Yesterday</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">How can a rural ITI / Diploma student apply for cloud computing jobs in Bangalore/Gulf?</h4>
                    <div className="bg-slate-50 p-3 rounded-xl border-l-4 border-blue-600 text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-blue-700 text-[11px]">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Answered by Er. Tanveer Ahmed (Senior Architect):</span>
                      </div>
                      <p className="text-[11px] text-slate-600">"Build practical Linux and Docker skills using free tier AWS accounts. Get the AWS Cloud Practitioner certification first; our community technical fund sponsors the exam fee."</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-bold">
                      <span className="text-emerald-700">✓ Verified Expert Answer</span>
                      <button onClick={() => alert('Thank you for feedback!')} className="hover:text-[#004B23] cursor-pointer">👍 38 Upvotes • Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
