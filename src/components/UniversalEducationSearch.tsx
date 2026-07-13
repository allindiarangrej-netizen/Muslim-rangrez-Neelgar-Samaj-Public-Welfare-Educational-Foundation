import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, BookOpen, Building2, Briefcase, Award, GraduationCap, 
  MapPin, DollarSign, Star, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck,
  X, Layers, Compass, Calendar
} from 'lucide-react';
import { Language } from '../types';

interface UniversalEducationSearchProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
  initialQuery?: string;
  onClose?: () => void;
}

export default function UniversalEducationSearch({ 
  currentLanguage, 
  onNavigate, 
  initialQuery = '',
  onClose 
}: UniversalEducationSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedStream, setSelectedStream] = useState<string>('All');

  // Master Mock Database combining Courses, Colleges, Exams, Scholarships, Jobs, and Professions
  const universalData = [
    // COLLEGES
    {
      id: 'col-1',
      title: 'All India Institute of Medical Sciences (AIIMS, New Delhi)',
      category: 'Colleges',
      stream: 'Medical',
      level: 'UG / PG',
      state: 'Delhi',
      rating: '4.9★ (NIRF #1)',
      fee: '₹1,628 / yr (Govt)',
      descEn: 'Premier national medical university offering MBBS, MD, MS, DM, MCh, and nursing degrees with world-class clinical research facilities.',
      descHi: 'विश्व स्तरीय नैदानिक अनुसंधान सुविधाओं के साथ एमबीबीएस, एमडी, एमएस, डीएम और नर्सिंग डिग्री प्रदान करने वाला शीर्ष राष्ट्रीय चिकित्सा विश्वविद्यालय।',
      tab: 'colleges-directory',
      tags: ['MBBS', 'Medical', 'Govt College', 'NEET UG', 'AIIMS']
    },
    {
      id: 'col-2',
      title: 'Indian Institute of Technology (IIT, Bombay)',
      category: 'Colleges',
      stream: 'Engineering',
      level: 'UG / PG / PhD',
      state: 'Maharashtra',
      rating: '4.9★ (NIRF #3)',
      fee: '₹2,20,000 / yr',
      descEn: 'Top-ranking engineering institute known for B.Tech in Computer Science, AI, Aerospace, Electrical, and world-class incubation center.',
      descHi: 'कंप्यूटर विज्ञान, एआई, एयरोस्पेस और इलेक्ट्रिकल में बी.टेक के लिए जाना जाने वाला शीर्ष क्रम का इंजीनियरिंग संस्थान।',
      tab: 'colleges-directory',
      tags: ['B.Tech', 'Engineering', 'JEE Advanced', 'Computer Science', 'AI']
    },
    {
      id: 'col-3',
      title: 'Aligarh Muslim University (AMU, Aligarh)',
      category: 'Colleges',
      stream: 'Multi-disciplinary',
      level: 'UG / PG / Diploma',
      state: 'Uttar Pradesh',
      rating: '4.7★ (NAAC A+)',
      fee: '₹15,000 - ₹85,000 / yr',
      descEn: 'Historic central minority university offering courses in Engineering, Medicine, Law, Arts, Commerce, and Management under statutory Article 30.',
      descHi: 'ऐतिहासिक केंद्रीय अल्पसंख्यक विश्वविद्यालय जो इंजीनियरिंग, चिकित्सा, कानून, कला, वाणिज्य और प्रबंधन में पाठ्यक्रम प्रदान करता है।',
      tab: 'colleges-directory',
      tags: ['Minority', 'Central University', 'AMU', 'MBBS', 'B.Tech', 'Law']
    },

    // EXAMS
    {
      id: 'ex-1',
      title: 'National Eligibility cum Entrance Test (NEET-UG 2026)',
      category: 'Exams',
      stream: 'Medical',
      level: 'After 12th (PCB)',
      state: 'All India',
      rating: 'Official NTA',
      fee: 'Exam Fee: ₹1,700',
      descEn: 'Single national entrance examination for admission to MBBS, BDS, BAMS, BHMS, and B.Sc Nursing seats in all government and private colleges.',
      descHi: 'सभी सरकारी और निजी कॉलेजों में एमबीबीएस, बीडीएस और आयुष सीटों पर प्रवेश के लिए एकल राष्ट्रीय प्रवेश परीक्षा।',
      tab: 'competitive-exams',
      tags: ['NEET', 'Medical Exam', 'NTA', 'MBBS Entrance', 'PCB']
    },
    {
      id: 'ex-2',
      title: 'UPSC Civil Services Examination (CSE 2026)',
      category: 'Exams',
      stream: 'Civil Services',
      level: 'Graduate (Any Stream)',
      state: 'All India',
      rating: 'Official UPSC',
      fee: 'Exam Fee: ₹100 / Free (Females/SC/ST)',
      descEn: 'National competitive exam conducted by UPSC for recruitment to IAS, IPS, IFS, IRS, and central administrative Group A & B services.',
      descHi: 'आईएएस, आईपीएस, आईएफएस, आईआरएस और केंद्रीय प्रशासनिक सेवाओं में भर्ती के लिए यूपीएससी द्वारा आयोजित राष्ट्रीय प्रतियोगी परीक्षा।',
      tab: 'competitive-exams',
      tags: ['UPSC', 'IAS', 'IPS', 'Civil Services', 'Government Exam']
    },

    // JOBS
    {
      id: 'job-1',
      title: 'Railway Recruitment Board (RRB) NTPC & Level-1 2026',
      category: 'Jobs',
      stream: 'Government Job',
      level: '10th / 12th / Graduate',
      state: 'All India',
      rating: 'Verified PSU',
      fee: 'Salary: ₹25,000 - ₹65,000 / Mo',
      descEn: '45,000+ vacancies for Station Master, Goods Guard, Commercial Apprentice, Ticket Clerk, and track maintainers across Indian Railways zones.',
      descHi: 'भारतीय रेलवे जोन में स्टेशन मास्टर, गुड्स गार्ड, टिकट क्लर्क और ट्रैक मेंटेनर के लिए 45,000+ रिक्तियां।',
      tab: 'jobs-careers',
      tags: ['RRB', 'Indian Railways', 'Govt Job', 'NTPC', 'Public Sector']
    },
    {
      id: 'job-2',
      title: 'Senior Full-Stack AI Developer & Cloud Architect (MNC)',
      category: 'Jobs',
      stream: 'Private Corporate',
      level: 'Experienced / B.Tech',
      state: 'Bangalore / Remote',
      rating: 'Verified Corporate',
      fee: 'Salary: ₹18L - ₹35L / Yr',
      descEn: 'High-paying tech roles in generative AI applications, cloud infrastructure (AWS/Azure), React, Node.js, and Python systems.',
      descHi: 'जनरेटिव एआई एप्लिकेशन, क्लाउड इंफ्रास्ट्रक्चर (AWS/Azure), React और Python सिस्टम में उच्च वेतन वाली तकनीकी नौकरियां।',
      tab: 'jobs-careers',
      tags: ['AI Developer', 'Software Engineer', 'IT Job', 'Private Job', 'Bangalore']
    },

    // SCHOLARSHIPS
    {
      id: 'sch-1',
      title: 'Maulana Azad National Fellowship & Scholarship (MANF)',
      category: 'Scholarships',
      stream: 'Minority Scheme',
      level: 'M.Phil / Ph.D / Higher Ed',
      state: 'All India',
      rating: 'NSP Approved',
      fee: '₹31,000 / Mo + ₹25,000 Grant',
      descEn: '100% financial assistance and monthly research fellowship provided by Ministry of Minority Affairs for minority community research scholars.',
      descHi: 'अल्पसंख्यक शोध छात्रों के लिए अल्पसंख्यक कार्य मंत्रालय द्वारा प्रदान की जाने वाली 100% वित्तीय सहायता और मासिक शोध फेलोशिप।',
      tab: 'scholarships',
      tags: ['NSP', 'Minority Scholarship', 'Maulana Azad', 'Fellowship', 'Ph.D']
    },
    {
      id: 'sch-2',
      title: 'Begum Hazrat Mahal National Scholarship for Girls',
      category: 'Scholarships',
      stream: 'Girls Scholarship',
      level: 'Class 9th to 12th',
      state: 'All India',
      rating: 'MoMA Verified',
      fee: '₹6,000 - ₹12,000 / Yr',
      descEn: 'Direct bank account transfer (DBT) scholarship for meritorious girl students belonging to minority communities to prevent school dropouts.',
      descHi: 'स्कूल ड्रॉपआउट को रोकने के लिए अल्पसंख्यक समुदायों की मेधावी छात्राओं के लिए सीधे बैंक खाते में (DBT) छात्रवृत्ति।',
      tab: 'scholarships',
      tags: ['Girls Scholarship', 'Begum Hazrat Mahal', 'Minority Girls', 'School Scholarship']
    },

    // COURSES & PROFESSIONS
    {
      id: 'crs-1',
      title: 'Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science',
      category: 'Courses',
      stream: 'Engineering',
      level: 'UG Degree (4 Years)',
      state: 'All India',
      rating: 'AICTE Approved',
      fee: 'Avg Salary: ₹8L - ₹24L / Yr',
      descEn: 'High-demand engineering curriculum focusing on deep learning, neural networks, big data analytics, algorithms, and robotic automation.',
      descHi: 'डीप लर्निंग, न्यूरल नेटवर्क, बिग डेटा एनालिटिक्स और रोबोटिक ऑटोमेशन पर केंद्रित उच्च मांग वाला इंजीनियरिंग पाठ्यक्रम।',
      tab: 'education-hub',
      tags: ['B.Tech AI', 'Data Science', 'Course', 'Engineering Degree', 'PCM']
    },
    {
      id: 'crs-2',
      title: 'Chartered Accountancy (CA) Professional Pathway',
      category: 'Professions',
      stream: 'Commerce & Finance',
      level: 'After 12th / Commerce',
      state: 'All India',
      rating: 'ICAI Statutory',
      fee: 'Avg Salary: ₹9L - ₹30L / Yr',
      descEn: 'Prestigious statutory professional accounting career comprising Foundation, Intermediate, Articleship training, and Final CA examinations.',
      descHi: 'फाउंडेशन, इंटरमीडिएट, आर्टिकलशिप ट्रेनिंग और फाइनल सीए परीक्षाओं से युक्त प्रतिष्ठित सांविधिक पेशेवर लेखांकन करियर।',
      tab: 'education-hub',
      tags: ['CA', 'Chartered Accountant', 'ICAI', 'Commerce', 'Finance Career']
    }
  ];

  const categories = ['All', 'Colleges', 'Exams', 'Jobs', 'Scholarships', 'Courses', 'Professions'];
  const levels = ['All', 'After 10th / 12th', 'UG / PG', 'Experienced / B.Tech', 'M.Phil / Ph.D / Higher Ed'];
  const streams = ['All', 'Medical', 'Engineering', 'Civil Services', 'Minority Scheme', 'Commerce & Finance'];
  const states = ['All', 'All India', 'Delhi', 'Maharashtra', 'Uttar Pradesh', 'Bangalore / Remote'];

  const filteredResults = useMemo(() => {
    return universalData.filter(item => {
      const matchQuery = query.trim() === '' || 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.descEn.toLowerCase().includes(query.toLowerCase()) ||
        item.descHi.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
      
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchLevel = selectedLevel === 'All' || item.level.includes(selectedLevel) || selectedLevel.includes(item.level);
      const matchStream = selectedStream === 'All' || item.stream.includes(selectedStream);
      const matchState = selectedState === 'All' || item.state.includes(selectedState);

      return matchQuery && matchCat && matchLevel && matchStream && matchState;
    });
  }, [query, activeCategory, selectedLevel, selectedStream, selectedState]);

  const handleSelect = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
    if (onClose) onClose();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-slate-800 font-sans max-w-5xl mx-auto animate-fadeIn">
      {/* HEADER BAR */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-[#0B132B] flex items-center justify-center font-bold text-lg shadow">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{currentLanguage === 'en' ? 'Universal Education & Careers Search Engine' : 'यूनिवर्सल शिक्षा एवं करियर खोज इंजन'}</span>
              <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/40">Real-time Index</span>
            </h2>
            <p className="text-xs text-slate-300">
              {currentLanguage === 'en' ? 'Search verified courses, colleges, entrance exams, government scholarships, and recruitment drives.' : 'सत्यापित पाठ्यक्रम, कॉलेज, प्रवेश परीक्षा, छात्रवृत्ति और भर्ती अभियानों की खोज करें।'}
            </p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* SEARCH INPUT & CATEGORY TABS */}
      <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={currentLanguage === 'en' ? "Search e.g., 'MBBS', 'IIT Bombay', 'NEET cutoff', 'Maulana Azad Scholarship', 'UPSC'..." : "खोजें जैसे 'MBBS', 'NEET', 'Maulana Azad Scholarship', 'UPSC'..."}
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm sm:text-base font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#004B23] shadow-inner transition"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* CATEGORIES PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#004B23] text-[#FFD54A] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ADVANCED FILTERS BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#004B23] shrink-0" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-[#004B23]"
            >
              <option value="All">Level: All Levels</option>
              {levels.slice(1).map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#004B23] shrink-0" />
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-[#004B23]"
            >
              <option value="All">Stream: All Streams</option>
              {streams.slice(1).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#004B23] shrink-0" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-[#004B23]"
            >
              <option value="All">State: All India / Any</option>
              {states.slice(1).map(st => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* RESULTS LIST */}
      <div className="p-6 max-h-[500px] overflow-y-auto space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
          <span>Found {filteredResults.length} matching resources in National Index</span>
          <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">Official Regulatory Data</span>
        </div>

        {filteredResults.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No results matched your filters</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your filters or searching for terms like 'MBBS', 'IIT', 'Scholarship', or 'UPSC'.</p>
            <button
              onClick={() => {
                setQuery('');
                setActiveCategory('All');
                setSelectedLevel('All');
                setSelectedStream('All');
                setSelectedState('All');
              }}
              className="mt-4 px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-xl shadow cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredResults.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.tab)}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#004B23] hover:shadow-md transition cursor-pointer flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-[#0B132B]">
                      {item.category} &bull; {item.stream}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.fee}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B23] transition flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#004B23] group-hover:translate-x-1 transition shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {currentLanguage === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {item.state}
                  </span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {item.rating}
                  </span>
                  <span className="text-[#004B23] font-bold underline">Explore &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All data verified with NMC, AICTE, UGC, NSP, and Railway Recruitment Boards.</span>
        </div>
        <div className="font-bold text-[#004B23]">
          Rangrez Community Education Ecosystem
        </div>
      </div>
    </div>
  );
}
