import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Briefcase, 
  Globe, 
  Info, 
  AlertTriangle, 
  ArrowUpRight, 
  Building2, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Users, 
  Filter,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface CareerOpportunitiesProps {
  currentLanguage: Language;
}

export interface JobPortalItem {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: 'Government' | 'Private' | 'Freshers' | 'Gulf';
  categoryLabelEn: string;
  categoryLabelHi: string;
  categoryLabelUr: string;
  initials: string;
  gradient: string;
  tags: string[];
  descEn: string;
  descHi: string;
  descUr: string;
  recommendedNoteEn?: string;
  recommendedNoteHi?: string;
  recommendedNoteUr?: string;
}

// Component to handle Logo Image with seamless Fallback to Gradient Initials
function PortalLogo({ 
  domain, 
  name, 
  initials, 
  gradient,
  category
}: { 
  domain: string; 
  name: string; 
  initials: string; 
  gradient: string;
  category: string;
}) {
  const [imgError, setImgError] = useState(false);

  const getCategoryIcon = () => {
    switch (category) {
      case 'Government': return <Building2 className="w-3.5 h-3.5 text-amber-300" />;
      case 'Private': return <Briefcase className="w-3.5 h-3.5 text-blue-300" />;
      case 'Freshers': return <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />;
      case 'Gulf': return <Globe className="w-3.5 h-3.5 text-emerald-300" />;
      default: return <Briefcase className="w-3.5 h-3.5 text-white" />;
    }
  };

  return (
    <div className="relative flex-shrink-0">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md shadow-gray-200/60 text-white font-mono font-extrabold text-base sm:text-lg tracking-wider overflow-hidden border border-white/20 relative group-hover:shadow-lg transition-all duration-300`}>
        {!imgError ? (
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={`${name} logo`}
            className="w-10 h-10 object-contain bg-white/95 rounded-xl p-1 shadow-sm transition-transform duration-300 group-hover:scale-110"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="drop-shadow-sm select-none">{initials}</span>
        )}
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#0B132B] border-2 border-white flex items-center justify-center shadow-sm">
        {getCategoryIcon()}
      </div>
    </div>
  );
}

export default function CareerOpportunities({ currentLanguage }: CareerOpportunitiesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'All', labelEn: 'All Portals (25)', labelHi: 'सभी पोर्टल (25)', labelUr: 'تمام پورٹلز (25)' },
    { id: 'Government', labelEn: 'Government Jobs & Exam Alerts', labelHi: 'सरकारी नौकरियां और परीक्षा अलर्ट', labelUr: 'سرکاری نوکریاں اور امتحانات کے الرٹس' },
    { id: 'Private', labelEn: 'Private Jobs & Experienced', labelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर', labelUr: 'پرائیویٹ نوکریاں اور تجربہ کار' },
    { id: 'Freshers', labelEn: 'Freshers & Campus Hiring', labelHi: 'फ्रेशर्स और कैंपस हायरिंग', labelUr: 'فریشرز اور کیمپس ہائرنگ' },
    { id: 'Gulf', labelEn: 'Gulf & International (QA/QC)', labelHi: 'खाड़ी और अंतर्राष्ट्रीय (QA/QC)', labelUr: 'خلیجی اور بین الاقوامی (QA/QC)' },
  ];

  const portals: JobPortalItem[] = [
    // --- GOVERNMENT JOBS & EXAM ALERTS ---
    {
      id: 'freejobalert',
      name: 'FreeJobAlert',
      url: 'https://www.freejobalert.com',
      domain: 'freejobalert.com',
      category: 'Government',
      categoryLabelEn: 'Government Jobs & Exam Alerts',
      categoryLabelHi: 'सरकारी नौकरियां और परीक्षा अलर्ट',
      categoryLabelUr: 'سرکاری نوکریاں اور امتحانات کے الرٹس',
      initials: 'FJA',
      gradient: 'from-amber-500 to-orange-600',
      tags: ['Government Jobs', 'PSU & Railways', 'Banking & SSC', 'UPSC & Defence'],
      descEn: 'Comprehensive portal for government jobs, PSU, Railways, Banking, SSC, UPSC, Defence vacancies, exam results, and admit cards.',
      descHi: 'सरकारी नौकरियों, पीएसयू, रेलवे, बैंकिंग, एसएससी, यूपीएससी, रक्षा रिक्तियों, परीक्षा परिणाम और एडमिट कार्ड के लिए व्यापक पोर्टल।',
      descUr: 'سرکاری نوکریوں، پی ایس یو، ریلوے، بینکنگ، ایس ایس سی، یو پی ایس سی، دفاعی آسامیوں، امتحانات کے نتائج اور ایڈمٹ کارڈز کے لیے جامع پورٹل۔'
    },
    {
      id: 'sarkariresult',
      name: 'Sarkari Result',
      url: 'https://www.sarkariresult.com',
      domain: 'sarkariresult.com',
      category: 'Government',
      categoryLabelEn: 'Government Jobs & Exam Alerts',
      categoryLabelHi: 'सरकारी नौकरियां और परीक्षा अलर्ट',
      categoryLabelUr: 'سرکاری نوکریاں اور امتحانات کے الرٹس',
      initials: 'SR',
      gradient: 'from-red-600 to-rose-700',
      tags: ['Sarkari Jobs', 'Exam Results', 'Admit Cards', 'Answer Keys'],
      descEn: 'India’s most trusted destination for instant updates on Sarkari jobs, latest exam results, admit cards, answer keys, and syllabus.',
      descHi: 'सरकारी नौकरियों, नवीनतम परीक्षा परिणामों, एडमिट कार्ड, उत्तर कुंजी (Answer Keys) और पाठ्यक्रम पर तत्काल अपडेट के लिए भारत का सबसे भरोसेमंद मंच।',
      descUr: 'سرکاری نوکریوں، امتحانات کے تازہ ترین نتائج، ایڈمٹ کارڈز، جوابات کی کلیدوں اور نصاب کے فوری اپ ڈیٹس کے لیے ہندوستان کا سب سے قابل اعتماد پلیٹ فارم۔'
    },
    {
      id: 'employmentnews',
      name: 'Employment News',
      url: 'https://www.employmentnews.gov.in',
      domain: 'employmentnews.gov.in',
      category: 'Government',
      categoryLabelEn: 'Government Jobs & Exam Alerts',
      categoryLabelHi: 'सरकारी नौकरियां और परीक्षा अलर्ट',
      categoryLabelUr: 'سرکاری نوکریاں اور امتحانات کے الرٹس',
      initials: 'EN',
      gradient: 'from-blue-700 to-indigo-900',
      tags: ['Official Govt Portal', 'Weekly Gazette', 'Central Govt', 'Public Sector'],
      descEn: 'Official Government of India employment news gazette providing weekly recruitment notices for Central and State government jobs.',
      descHi: 'भारत सरकार का आधिकारिक रोजगार समाचार पत्र जो केंद्र और राज्य सरकार की नौकरियों के लिए साप्ताहिक भर्ती सूचनाएं प्रदान करता है।',
      descUr: 'حکومت ہند کا سرکاری روزگار اخبار جو مرکزی اور ریاستی حکومت کی نوکریوں کے لیے ہفتہ وار بھرتی کے نوٹس فراہم کرتا ہے۔'
    },
    {
      id: 'jobhuntindia',
      name: 'JobHuntIndia',
      url: 'https://www.jobhuntindia.com',
      domain: 'jobhuntindia.com',
      category: 'Government',
      categoryLabelEn: 'Government Jobs & Exam Alerts',
      categoryLabelHi: 'सरकारी नौकरियां और परीक्षा अलर्ट',
      categoryLabelUr: 'سرکاری نوکریاں اور امتحانات کے الرٹس',
      initials: 'JHI',
      gradient: 'from-emerald-600 to-teal-800',
      tags: ['Daily Alerts', 'State Govt', 'Police & Defence', 'Teaching Exams'],
      descEn: 'Daily government job alerts, state-level recruitment notifications, police/defence rallies, and teaching examination updates.',
      descHi: 'दैनिक सरकारी नौकरी अलर्ट, राज्य स्तरीय भर्ती सूचनाएं, पुलिस/रक्षा रैलियां और शिक्षण परीक्षा अपडेट।',
      descUr: 'روزانہ سرکاری نوکری کے الرٹس، ریاستی سطح کی بھرتی کے نوٹیفکیشنز، پولیس/دفاعی ریلیاں اور تدریسی امتحانات کے اپ ڈیٹس۔'
    },

    // --- PRIVATE JOBS & EXPERIENCED PROFESSIONALS ---
    {
      id: 'naukri',
      name: 'Naukri.com',
      url: 'https://www.naukri.com',
      domain: 'naukri.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'N',
      gradient: 'from-blue-600 to-blue-900',
      tags: ['Corporate Jobs', 'IT & Engineering', 'Senior Management', 'All India'],
      descEn: 'The largest corporate job network in India, offering millions of private-sector openings, executive listings, and engineering roles.',
      descHi: 'भारत का सबसे बड़ा कॉर्पोरेट जॉब नेटवर्क, जो लाखों निजी क्षेत्र के पदों, कार्यकारी लिस्टिंग और इंजीनियरिंग भूमिकाओं की पेशकश करता है।',
      descUr: 'ہندوستان کا سب سے بڑا کارپوریٹ جاب نیٹ ورک، جو لاکھوں نجی شعبے کی آسامیاں، ایگزیکٹو لسٹنگ اور انجینئرنگ کے کردار پیش کرتا ہے۔'
    },
    {
      id: 'indeed',
      name: 'Indeed India',
      url: 'https://in.indeed.com',
      domain: 'indeed.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'Id',
      gradient: 'from-blue-500 to-cyan-600',
      tags: ['Global Search Engine', 'Company Reviews', 'Salary Compare', 'Private Sector'],
      descEn: 'A comprehensive job search engine featuring millions of local private vacancies, honest company reviews, and salary benchmarks.',
      descHi: 'लाखों स्थानीय निजी रिक्तियों, ईमानदार कंपनी समीक्षाओं और वेतन मानदंडों की विशेषता वाला एक व्यापक नौकरी खोज इंजन।',
      descUr: 'لاکھوں مقامی نجی آسامیوں، کمپنی کے جائزوں اور تنخواہ کے معیارات پر مشتمل ایک جامع جاب سرچ انجن۔'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs',
      domain: 'linkedin.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'In',
      gradient: 'from-sky-600 to-blue-800',
      tags: ['Professional Network', 'Direct Recruiters', 'Executive Hiring', 'Remote & Hybrid'],
      descEn: 'Connect directly with global recruiters, build professional networking, and find high-paying corporate and leadership positions.',
      descHi: 'वैश्विक नियोक्ताओं से सीधे जुड़ें, पेशेवर नेटवर्किंग बनाएं, और उच्च-भुगतान वाले कॉर्पोरेट और नेतृत्व पदों की खोज करें।',
      descUr: 'براہ راست عالمی آجروں سے جڑیں، پیشہ ورانہ نیٹ ورکنگ بنائیں، اور اعلی تنخواہ والے کارپوریٹ اور قیادتی عہدے تلاش کریں۔'
    },
    {
      id: 'foundit',
      name: 'Foundit (formerly Monster India)',
      url: 'https://www.foundit.in',
      domain: 'foundit.in',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'Fi',
      gradient: 'from-purple-600 to-indigo-800',
      tags: ['Formerly Monster', 'Smart Matching', 'Middle Management', 'IT & Non-IT'],
      descEn: 'Premium career platform offering AI-driven job recommendations, customized skill matching, and executive roles across industries.',
      descHi: 'एआई-संचालित नौकरी सिफारिशें, अनुकूलित कौशल मिलान और उद्योगों भर में कार्यकारी भूमिकाएं प्रदान करने वाला प्रीमियम करियर मंच।',
      descUr: 'AI سے چلنے والی ملازمت کی سفارشات، تخصیص کردہ مہارت کی ملاپ، اور مختلف صنعتوں میں ایگزیکٹو کردار پیش کرنے والا پریمیم کیریئر پلیٹ فارم۔'
    },
    {
      id: 'shine',
      name: 'Shine.com',
      url: 'https://www.shine.com',
      domain: 'shine.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'Sh',
      gradient: 'from-teal-500 to-emerald-700',
      tags: ['Career Counseling', 'Resume Services', 'Corporate Vacancies', 'Skill Growth'],
      descEn: 'Innovative job portal offering career counseling, resume enhancement services, and thousands of verified private corporate listings.',
      descHi: 'करियर परामर्श, बायोडाटा संवर्धन सेवाएं और हजारों सत्यापित निजी कॉर्पोरेट लिस्टिंग की पेशकश करने वाला अभिनव जॉब पोर्टल।',
      descUr: 'کیریئر کی مشاورت، ریزیومے کو بہتر بنانے کی خدمات اور ہزاروں تصدیق شدہ نجی کارپوریٹ لسٹنگ پیش کرنے والا جدید جاب پورٹل۔'
    },
    {
      id: 'timesjobs',
      name: 'TimesJobs',
      url: 'https://www.timesjobs.com',
      domain: 'timesjobs.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'TJ',
      gradient: 'from-rose-500 to-red-700',
      tags: ['Times Group', 'Senior Management', 'Tech & BFSI', 'Executive Search'],
      descEn: 'Times Group’s specialized portal focusing on executive placements, senior corporate management, BFSI, and technical roles.',
      descHi: 'कार्यकारी प्लेसमेंट, वरिष्ठ कॉर्पोरेट प्रबंधन, बीएफएसआई और तकनीकी भूमिकाओं पर ध्यान केंद्रित करने वाला टाइम्स ग्रुप का विशेष पोर्टल।',
      descUr: 'ایگزیکٹو پلیسمنٹ، سینئر کارپوریٹ مینجمنٹ، BFSI اور تکنیکی کرداروں پر توجہ مرکوز کرنے والا ٹائمز گروپ کا خصوصی پورٹل۔'
    },
    {
      id: 'glassdoor',
      name: 'Glassdoor Jobs',
      url: 'https://www.glassdoor.co.in/Job/index.htm',
      domain: 'glassdoor.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'Gd',
      gradient: 'from-emerald-600 to-green-800',
      tags: ['Employee Reviews', 'Salary Insights', 'Company Culture', 'Interview Prep'],
      descEn: 'Search jobs while viewing anonymous employee reviews, interview questions, company culture ratings, and transparent salary insights.',
      descHi: 'गुमनाम कर्मचारी समीक्षाओं, साक्षात्कार प्रश्नों, कंपनी संस्कृति रेटिंग और पारदर्शी वेतन जानकारी को देखते हुए नौकरियां खोजें।',
      descUr: 'گمنام ملازمین کے جائزے، انٹرویو کے سوالات، کمپنی کے کلچر کی ریٹنگز اور شفاف تنخواہ کی بصیرت دیکھتے ہوئے نوکریاں تلاش کریں۔'
    },
    {
      id: 'cutshort',
      name: 'Cutshort',
      url: 'https://cutshort.io',
      domain: 'cutshort.io',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'CS',
      gradient: 'from-indigo-500 to-purple-700',
      tags: ['AI Tech Hiring', 'No Spams', 'Direct Match', 'Product & Engineering'],
      descEn: 'AI-powered tech hiring platform connecting software engineers, product managers, and digital marketers directly with top companies.',
      descHi: 'सॉफ्टवेयर इंजीनियरों, प्रोडक्ट मैनेजर्स और डिजिटल विपणनकर्ताओं को सीधे शीर्ष कंपनियों से जोड़ने वाला एआई-संचालित टेक हायरिंग प्लेटफॉर्म।',
      descUr: 'سافٹ ویئر انجینئرز، پروڈکٹ مینیجرز اور ڈیجیٹل مارکیٹرز کو براہ راست اعلی کمپنیوں سے جوڑنے والا AI سے چلنے والا ٹیک ہائرنگ پلیٹ فارم۔'
    },
    {
      id: 'wellfound',
      name: 'Wellfound (startup jobs)',
      url: 'https://wellfound.com',
      domain: 'wellfound.com',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'WF',
      gradient: 'from-neutral-800 to-black',
      tags: ['Startup Jobs', 'Formerly AngelList', 'Equity Shares', 'Remote Tech'],
      descEn: 'Formerly AngelList Talent; the #1 global platform to discover exciting startup jobs, equity options, and remote tech opportunities.',
      descHi: 'पूर्व में एंजेलिस्ट टैलेंट; रोमांचक स्टार्टअप नौकरियों, इक्विटी विकल्पों और रिमोट टेक अवसरों की खोज करने के लिए नंबर 1 वैश्विक मंच।',
      descUr: 'سابقہ AngelList Talent؛ دلچسپ اسٹارٹ اپ نوکریاں، ایکویٹی اختیارات اور ریموٹ ٹیک مواقع دریافت کرنے کے لیے نمبر 1 عالمی پلیٹ فارم۔'
    },
    {
      id: 'jooble',
      name: 'Jooble',
      url: 'https://in.jooble.org',
      domain: 'jooble.org',
      category: 'Private',
      categoryLabelEn: 'Private Jobs & Experienced Professionals',
      categoryLabelHi: 'प्राइवेट नौकरियां और अनुभवी पेशेवर',
      categoryLabelUr: 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور',
      initials: 'Jb',
      gradient: 'from-blue-400 to-indigo-600',
      tags: ['Job Aggregator', 'Multi-Source', 'All Industries', 'Quick Apply'],
      descEn: 'A powerful job aggregator that compiles vacancies from thousands of job boards, company career pages, and recruitment agencies.',
      descHi: 'एक शक्तिशाली जॉब एग्रीगेटर जो हजारों जॉब बोर्डों, कंपनी करियर पेजों और भर्ती एजेंसियों से रिक्तियों को संकलित करता है।',
      descUr: 'ایک طاقتور جاب ایگریگیٹر جو ہزاروں جاب بورڈز، کمپنی کے کیریئر صفحات اور بھرتی ایجنسیوں سے آسامیوں کو یکجا کرتا ہے۔'
    },

    // --- FRESHERS & CAMPUS HIRING ---
    {
      id: 'freshersworld',
      name: 'Freshersworld',
      url: 'https://www.freshersworld.com',
      domain: 'freshersworld.com',
      category: 'Freshers',
      categoryLabelEn: 'Freshers & Campus Hiring',
      categoryLabelHi: 'फ्रेशर्स और कैंपस हायरिंग',
      categoryLabelUr: 'فریشرز اور کیمپس ہائرنگ',
      initials: 'FW',
      gradient: 'from-blue-500 to-indigo-700',
      tags: ['Freshers Jobs', 'Campus Hiring', 'Internships', 'Entry Level'],
      descEn: 'India’s #1 job portal dedicated to fresh graduates, campus recruitment drives, internships, and first-time job seekers.',
      descHi: 'नए स्नातकों, कैंपस भर्ती अभियान, इंटर्नशिप और पहली बार नौकरी चाहने वालों के लिए समर्पित भारत का नंबर 1 जॉब पोर्टल।',
      descUr: 'نئے گریجویٹس، کیمپس بھرتی مہم، انٹرنشپ اور پہلی بار نوکری کے متلاشیوں کے لیے وقف ہندوستان کا نمبر 1 جاب پورٹل۔'
    },
    {
      id: 'internshala',
      name: 'Internshala Jobs',
      url: 'https://internshala.com/jobs/',
      domain: 'internshala.com',
      category: 'Freshers',
      categoryLabelEn: 'Freshers & Campus Hiring',
      categoryLabelHi: 'फ्रेशर्स और कैंपस हायरिंग',
      categoryLabelUr: 'فریشرز اور کیمپس ہائرنگ',
      initials: 'IS',
      gradient: 'from-sky-400 to-blue-600',
      tags: ['Paid Internships', 'Entry Level Jobs', 'College Students', 'Verified Roles'],
      descEn: 'Trusted platform for college students and recent graduates seeking verified paid internships and entry-level corporate jobs.',
      descHi: 'सत्यापित सशुल्क इंटर्नशिप और शुरुआती स्तर की कॉर्पोरेट नौकरियों की तलाश कर रहे कॉलेज के छात्रों और नए स्नातकों के लिए विश्वसनीय मंच।',
      descUr: 'تصدیق شدہ معاوضہ والی انٹرنشپ اور انٹری لیول کارپوریٹ نوکریوں کے متلاشی کالج کے طلباء اور نئے گریجویٹس کے لیے قابل اعتماد پلیٹ فارم۔'
    },
    {
      id: 'firstnaukri',
      name: 'FirstNaukri',
      url: 'https://www.firstnaukri.com',
      domain: 'firstnaukri.com',
      category: 'Freshers',
      categoryLabelEn: 'Freshers & Campus Hiring',
      categoryLabelHi: 'फ्रेशर्स और कैंपस हायरिंग',
      categoryLabelUr: 'فریشرز اور کیمپس ہائرنگ',
      initials: 'FN',
      gradient: 'from-amber-500 to-yellow-600',
      tags: ['Naukri Freshers', 'Campus Placements', 'Graduates', 'Post-Graduates'],
      descEn: 'Naukri’s specialized portal connecting fresh undergraduates and post-graduates directly with top campus recruiters and IT firms.',
      descHi: 'नए स्नातकों और पोस्ट-ग्रेजुएट्स को सीधे शीर्ष कैंपस नियोक्ताओं और आईटी कंपनियों से जोड़ने वाला नौकरी का विशेष पोर्टल।',
      descUr: 'نئے گریجویٹس اور پوسٹ گریجویٹس کو براہ راست اعلی کیمپس بھرتی کرنے والوں اور آئی ٹی کمپنیوں سے جوڑنے والا نوکری کا خصوصی پورٹل۔'
    },
    {
      id: 'apnajobs',
      name: 'Apna Jobs',
      url: 'https://apna.co/jobs',
      domain: 'apna.co',
      category: 'Freshers',
      categoryLabelEn: 'Freshers & Campus Hiring',
      categoryLabelHi: 'फ्रेशर्स और कैंपस हायरिंग',
      categoryLabelUr: 'فریشرز اور کیمپس ہائرنگ',
      initials: 'AP',
      gradient: 'from-green-500 to-emerald-700',
      tags: ['Fast Growing App', 'Frontline Jobs', 'Local Hiring', 'Technical Roles'],
      descEn: 'India’s fastest-growing professional networking app for frontline, technical, retail, and entry-level job opportunities.',
      descHi: 'फ्रंटलाइन, तकनीकी, खुदरा और शुरुआती स्तर की नौकरी के अवसरों के लिए भारत का सबसे तेजी से बढ़ता पेशेवर नेटवर्किंग ऐप।',
      descUr: 'فرنٹ لائن، تکنیکی، ریٹیل اور انٹری لیول کی نوکری کے مواقع کے لیے ہندوستان کی سب سے تیزی سے بڑھتی ہوئی پیشہ ورانہ نیٹ ورکنگ ایپ۔'
    },
    {
      id: 'workindia',
      name: 'WorkIndia',
      url: 'https://www.workindia.in',
      domain: 'workindia.in',
      category: 'Freshers',
      categoryLabelEn: 'Freshers & Campus Hiring',
      categoryLabelHi: 'फ्रेशर्स और कैंपस हायरिंग',
      categoryLabelUr: 'فریشرز اور کیمپس ہائرنگ',
      initials: 'WI',
      gradient: 'from-cyan-500 to-teal-700',
      tags: ['Direct HR Contact', 'Blue & Grey Collar', 'Retail & Field', 'City Jobs'],
      descEn: 'Direct contact job portal for blue/grey-collar roles, retail, sales, field operations, and entry-level staff across Indian cities.',
      descHi: 'भारतीय शहरों में ब्लू/ग्रे-कॉलर भूमिकाओं, खुदरा, बिक्री, फील्ड ऑपरेशंस और शुरुआती स्तर के कर्मचारियों के लिए सीधा संपर्क जॉब पोर्टल।',
      descUr: 'ہندوستانی شہروں میں بلیو/گرے کالر کرداروں، ریٹیل، سیلز، فیلڈ آپریشنز اور انٹری لیول کے عملے کے لیے براہ راست رابطے کا جاب پورٹل۔'
    },

    // --- GULF & INTERNATIONAL JOBS (QA/QC MECHANICAL HIGHLIGHT) ---
    {
      id: 'bayt',
      name: 'Bayt',
      url: 'https://www.bayt.com',
      domain: 'bayt.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'B',
      gradient: 'from-emerald-600 to-teal-800',
      tags: ['Middle East #1', 'QA/QC Mechanical', 'Engineering', 'GCC Employers'],
      descEn: 'The Middle East’s leading job site connecting engineering, QA/QC mechanical, inspection, and technical professionals with GCC employers.',
      descHi: 'इंजीनियरिंग, क्यूए/क्यूसी मैकेनिकल, निरीक्षण और तकनीकी पेशेवरों को जीसीसी नियोक्ताओं से जोड़ने वाली मध्य पूर्व की नंबर 1 जॉब साइट।',
      descUr: 'انجینئرنگ، QA/QC میکینیکل، معائنہ اور تکنیکی پیشہ ور افراد کو GCC آجروں سے جوڑنے والی مشرق وسطی کی نمبر 1 جاب سائٹ۔',
      recommendedNoteEn: 'Recommended for your QA/QC Mechanical & Engineering background',
      recommendedNoteHi: 'आपकी QA/QC मैकेनिकल और इंजीनियरिंग पृष्ठभूमि के लिए विशेष रूप से अनुशंसित',
      recommendedNoteUr: 'آپ کے QA/QC میکینیکل اور انجینئرنگ پس منظر کے لیے خصوصی طور پر تجویز کردہ'
    },
    {
      id: 'gulftalent',
      name: 'GulfTalent',
      url: 'https://www.gulftalent.com',
      domain: 'gulftalent.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'GT',
      gradient: 'from-sky-500 to-blue-700',
      tags: ['Oil & Gas', 'Construction QA/QC', 'Mechanical Roles', 'Verified UAE/KSA'],
      descEn: 'Preferred portal for professionals seeking verified oil & gas, construction, QA/QC mechanical, and infrastructure careers in the Gulf.',
      descHi: 'खाड़ी देशों में सत्यापित तेल और गैस, निर्माण, क्यूए/क्यूसी मैकेनिकल और बुनियादी ढांचे के करियर की तलाश कर रहे पेशेवरों के लिए पसंदीदा पोर्टल।',
      descUr: 'خلیج میں تصدیق شدہ تیل اور گیس، تعمیرات، QA/QC میکینیکل اور انفراسٹرکچر کیریئر کے متلاشی پیشہ ور افراد کے لیے پسندیدہ پورٹل۔',
      recommendedNoteEn: 'Recommended for QA/QC Mechanical & Oil/Gas Projects',
      recommendedNoteHi: 'QA/QC मैकेनिकल और तेल/गैस परियोजनाओं के लिए अनुशंसित',
      recommendedNoteUr: 'QA/QC میکینیکل اور تیل/گیس پروجیکٹس کے لیے تجویز کردہ'
    },
    {
      id: 'naukrigulf',
      name: 'Naukrigulf',
      url: 'https://www.naukrigulf.com',
      domain: 'naukrigulf.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'NG',
      gradient: 'from-cyan-600 to-blue-800',
      tags: ['GCC Placements', 'Mechanical Inspection', 'QA/QC Engineers', 'Middle East'],
      descEn: 'Specialized Middle East recruitment platform from Naukri with extensive vacancies in mechanical inspection, QA/QC, and plant operations.',
      descHi: 'नौकरी डॉट कॉम का विशेष मध्य पूर्व भर्ती मंच जिसमें मैकेनिकल निरीक्षण, क्यूए/क्यूसी और प्लांट ऑपरेशंस में व्यापक रिक्तियां हैं।',
      descUr: 'نوکری ڈاٹ کام کا خصوصی مشرق وسطیٰ بھرتی پلیٹ فارم جس میں میکینیکل معائنہ، QA/QC اور پلانٹ آپریشنز میں وسیع آسامیاں ہیں۔',
      recommendedNoteEn: 'Recommended for Mechanical QA/QC & Inspection Roles',
      recommendedNoteHi: 'मैकेनिकल QA/QC और निरीक्षण भूमिकाओं के लिए अनुशंसित',
      recommendedNoteUr: 'میکینیکل QA/QC اور معائنے کے کرداروں کے لیے تجویز کردہ'
    },
    {
      id: 'gulfjobsites',
      name: 'GulfJobSites',
      url: 'https://www.gulfjobsites.com',
      domain: 'gulfjobsites.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'GJS',
      gradient: 'from-amber-600 to-orange-700',
      tags: ['Directory Hub', 'Placement Agencies', 'Technical Projects', 'Gulf Wide'],
      descEn: 'Comprehensive directory and search portal for Middle Eastern placement agencies, engineering contractors, and technical project jobs.',
      descHi: 'मध्य पूर्वी प्लेसमेंट एजेंसियों, इंजीनियरिंग ठेकेदारों और तकनीकी परियोजना नौकरियों के लिए व्यापक निर्देशिका और खोज पोर्टल।',
      descUr: 'مشرق وسطی کی پلیسمنٹ ایجنسیوں، انجینئرنگ ٹھیکیداروں اور تکنیکی پروجیکٹ کی نوکریوں کے لیے جامع ڈائریکٹری اور سرچ پورٹل۔',
      recommendedNoteEn: 'Recommended for finding Gulf Placement Agencies & Contractors',
      recommendedNoteHi: 'खाड़ी प्लेसमेंट एजेंसियों और ठेकेदारों को खोजने के लिए अनुशंसित',
      recommendedNoteUr: 'خلیجی پلیسمنٹ ایجنسیوں اور ٹھیکیداروں کو تلاش کرنے کے لیے تجویز کردہ'
    },
    {
      id: 'indeed_uae',
      name: 'Indeed UAE',
      url: 'https://ae.indeed.com',
      domain: 'indeed.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'Id-AE',
      gradient: 'from-red-500 to-rose-700',
      tags: ['UAE & Dubai', 'QA/QC Mechanical', 'Engineering Projects', 'Salary Benchmarks'],
      descEn: 'Dedicated UAE portal for finding QA/QC mechanical jobs, engineering project roles, Dubai/Abu Dhabi vacancies, and salary benchmarks.',
      descHi: 'क्यूए/क्यूसी मैकेनिकल नौकरियां, इंजीनियरिंग परियोजना भूमिकाएं, दुबई/अबू धाबी रिक्तियां और वेतन मानदंड खोजने के लिए समर्पित यूएई पोर्टल।',
      descUr: 'QA/QC میکینیکل نوکریاں، انجینئرنگ پروجیکٹ رولز، دبئی/ابوظہبی کی آسامیاں اور تنخواہ کے معیارات تلاش کرنے کے لیے مختص متحدہ عرب امارات کا پورٹل۔',
      recommendedNoteEn: 'Recommended for UAE & Dubai Engineering / QA-QC roles',
      recommendedNoteHi: 'यूएई और दुबई में इंजीनियरिंग / QA-QC भूमिकाओं के लिए अनुशंसित',
      recommendedNoteUr: 'متحدہ عرب امارات اور دبئی میں انجینئرنگ / QA-QC کرداروں کے لیے تجویز کردہ'
    },
    {
      id: 'indeed_saudi',
      name: 'Indeed Saudi Arabia',
      url: 'https://sa.indeed.com',
      domain: 'indeed.com',
      category: 'Gulf',
      categoryLabelEn: 'Gulf & International Jobs',
      categoryLabelHi: 'खाड़ी और अंतर्राष्ट्रीय नौकरियां',
      categoryLabelUr: 'خلیجی اور بین الاقوامی نوکریاں',
      initials: 'Id-SA',
      gradient: 'from-green-600 to-emerald-800',
      tags: ['Saudi Vision 2030', 'KSA Engineering', 'QA/QC Mechanical', 'Oil & Gas'],
      descEn: 'Explore major Saudi Vision 2030 projects, oil & gas engineering roles, QA/QC mechanical openings, and construction vacancies in KSA.',
      descHi: 'सऊदी अरब में विजन 2030 परियोजनाओं, तेल और गैस इंजीनियरिंग भूमिकाओं, क्यूए/क्यूसी मैकेनिकल पदों और निर्माण रिक्तियों का पता लगाएं।',
      descUr: 'سعودی عرب میں وژن 2030 کے بڑے منصوبے، تیل اور گیس انجینئرنگ کے کردار، QA/QC میکینیکل آسامیاں اور تعمیراتی نوکریاں دریافت کریں۔',
      recommendedNoteEn: 'Recommended for KSA Vision 2030 & Oil/Gas QA/QC roles',
      recommendedNoteHi: 'सऊदी अरब विजन 2030 और तेल/गैस QA/QC भूमिकाओं के लिए अनुशंसित',
      recommendedNoteUr: 'سعودی عرب وژن 2030 اور تیل/گیس QA/QC کرداروں کے لیے تجویز کردہ'
    }
  ];

  // Translation Helper
  const getText = (en: string, hi: string, ur: string) => {
    if (currentLanguage === 'hi') return hi;
    if (currentLanguage === 'ur') return ur;
    return en;
  };

  // Filter Portals
  const filteredPortals = useMemo(() => {
    return portals.filter((portal) => {
      const matchesCategory = activeCategory === 'All' || portal.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        portal.name.toLowerCase().includes(searchLower) ||
        portal.descEn.toLowerCase().includes(searchLower) ||
        portal.descHi.toLowerCase().includes(searchLower) ||
        portal.descUr.toLowerCase().includes(searchLower) ||
        portal.tags.some(t => t.toLowerCase().includes(searchLower));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Grouped Portals when "All" is active
  const groupedPortals = useMemo(() => {
    return {
      Government: filteredPortals.filter(p => p.category === 'Government'),
      Private: filteredPortals.filter(p => p.category === 'Private'),
      Freshers: filteredPortals.filter(p => p.category === 'Freshers'),
      Gulf: filteredPortals.filter(p => p.category === 'Gulf'),
    };
  }, [filteredPortals]);

  // Smooth entrance scroll animation variants
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as any }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" as any } 
    }
  };

  return (
    <div className="py-16 bg-[#F8FAFC] relative overflow-hidden" id="career_opportunities_section">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Introduction Callout Banner */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#004B23] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{getText('25+ VERIFIED JOB PORTALS DIRECTORY', '25+ सत्यापित जॉब पोर्टल निर्देशिका', '25+ تصدیق شدہ جاب پورٹلز ڈائریکٹری')}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight"
          >
            {getText('Job Portals & Career Opportunities', 'नौकरी के पोर्टल और करियर के अवसर', 'جاب پورٹلز اور ملازمت کے مواقع')}
          </motion.h2>

          {/* User Request Intro Callout Box */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm text-left sm:text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#004B23] to-[#D4AF37]"></div>
            <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
              {getText(
                '“If you’re looking for websites similar to FreeJobAlert and Freshersworld, here are some of the best job portals for both private and government jobs.”',
                '“यदि आप FreeJobAlert और Freshersworld जैसी वेबसाइटों की तलाश कर रहे हैं, तो यहां निजी और सरकारी दोनों प्रकार की नौकरियों के लिए सर्वश्रेष्ठ जॉब पोर्टल दिए गए हैं।”',
                '“اگر آپ FreeJobAlert اور Freshersworld جیسی ویب سائٹس تلاش کر رہے ہیں، تو یہاں پرائیویٹ اور سرکاری دونوں نوکریوں کے لیے بہترین جاب پورٹلز پیش ہیں—”'
              )}
            </p>
          </motion.div>
        </div>

        {/* Mandatory Top Disclaimer Alert */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 bg-amber-50 border border-amber-200/80 rounded-xl p-4 max-w-4xl mx-auto flex items-start gap-3 shadow-sm"
        >
          <div className="p-1.5 bg-amber-100 rounded-lg text-amber-700 flex-shrink-0 mt-0.5">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <div className="text-xs text-amber-900 leading-relaxed font-sans">
            <span className="font-bold mr-1">
              {getText('Disclaimer:', 'अस्वीकरण (Disclaimer):', 'ڈس کلیمر:')}
            </span>
            {getText(
              'This website does not directly recruit candidates. Clicking a portal will take you to the respective official website for job listings and applications.',
              'यह वेबसाइट सीधे उम्मीदवारों की भर्ती नहीं करती है। किसी भी पोर्टल पर क्लिक करने से आप नौकरी लिस्टिंग और आवेदनों के लिए संबंधित आधिकारिक वेबसाइट पर पहुंच जाएंगे।',
              'یہ ویب سائٹ براہ راست امیدواروں کو بھرتی نہیں کرتی ہے۔ کسی بھی پورٹل پر کلک کرنے سے آپ نوکری کے اشتہارات اور درخواستوں کے لیے متعلقہ سرکاری ویب سائٹ پر پہنچ جائیں گے۔'
            )}
          </div>
        </motion.div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 flex flex-col lg:flex-row gap-4 items-center justify-between mb-10 sticky top-16 z-20 backdrop-blur-lg bg-white/95" id="portal_search_filter_bar">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full lg:w-auto justify-start overflow-x-auto pb-1 lg:pb-0" dir={currentLanguage === 'ur' ? 'rtl' : 'ltr'}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#004B23] text-white shadow-md ring-2 ring-emerald-200 scale-[1.02]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat.id === 'Government' && <Building2 className="w-3.5 h-3.5" />}
                {cat.id === 'Private' && <Briefcase className="w-3.5 h-3.5" />}
                {cat.id === 'Freshers' && <GraduationCap className="w-3.5 h-3.5" />}
                {cat.id === 'Gulf' && <Globe className="w-3.5 h-3.5 text-[#F4C430]" />}
                <span>{getText(cat.labelEn, cat.labelHi, cat.labelUr)}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:max-w-xs flex items-center">
            <input
              type="text"
              placeholder={getText('Search portal name, keyword or skill...', 'पोर्टल का नाम, कीवर्ड या कौशल खोजें...', 'پورٹل کا نام، مطلوبہ الفاظ یا مہارت تلاش کریں...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-xs py-2.5 px-4 rounded-xl pl-9 pr-8 focus:outline-none focus:ring-2 focus:ring-[#004B23] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 p-0.5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* PORTALS LIST DISPLAY */}
        {filteredPortals.length > 0 ? (
          <div className="space-y-14">
            
            {/* SECTION 1: GOVERNMENT JOBS & EXAM ALERTS */}
            {(activeCategory === 'All' || activeCategory === 'Government') && groupedPortals.Government.length > 0 && (
              <motion.div 
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#004B23] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004B23] text-white flex items-center justify-center shadow-sm">
                      <Building2 className="w-5 h-5 text-[#FFD54A]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
                        {getText('Government Jobs & Exam Alerts', 'सरकारी नौकरियां और परीक्षा अलर्ट', 'سرکاری نوکریاں اور امتحانات کے الرٹس')}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        {getText(
                          'Official alerts for PSU, Railways, Banking, SSC, UPSC, Defence, results, and admit cards.',
                          'पीएसयू, रेलवे, बैंकिंग, एसएससी, यूपीएससी, रक्षा, परिणाम और एडमिट कार्ड के लिए आधिकारिक अलर्ट।',
                          'پی ایس یو، ریلوے، بینکنگ، ایس ایس سی، یو پی ایس سی، دفاع، نتائج اور ایڈمٹ کارڈز کے لیے سرکاری الرٹس۔'
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 bg-emerald-100 text-[#004B23] rounded-full w-fit">
                    {groupedPortals.Government.length} {getText('Portals', 'पोर्टल', 'پورٹلز')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {groupedPortals.Government.map((portal) => (
                    <PortalCard key={portal.id} portal={portal} currentLanguage={currentLanguage} getText={getText} cardVariants={cardVariants} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* SECTION 2: PRIVATE JOBS & EXPERIENCED PROFESSIONALS */}
            {(activeCategory === 'All' || activeCategory === 'Private') && groupedPortals.Private.length > 0 && (
              <motion.div 
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-blue-600 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm">
                      <Briefcase className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
                        {getText('Private Jobs & Experienced Professionals', 'प्राइवेट नौकरियां और अनुभवी पेशेवर', 'پرائیویٹ نوکریاں اور تجربہ کار پیشہ ور')}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        {getText(
                          'Top corporate job portals, executive listings, startup equity shares, and IT roles.',
                          'शीर्ष कॉर्पोरेट जॉब पोर्टल, कार्यकारी लिस्टिंग, स्टार्टअप इक्विटी शेयर और आईटी भूमिकाएं।',
                          'اعلی کارپوریٹ جاب پورٹلز، ایگزیکٹو لسٹنگ، اسٹارٹ اپ ایکویٹی شیئرز، اور آئی ٹی کردار۔'
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 bg-blue-100 text-blue-800 rounded-full w-fit">
                    {groupedPortals.Private.length} {getText('Portals', 'पोर्टल', 'پورٹلز')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedPortals.Private.map((portal) => (
                    <PortalCard key={portal.id} portal={portal} currentLanguage={currentLanguage} getText={getText} cardVariants={cardVariants} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* SECTION 3: FRESHERS & CAMPUS HIRING */}
            {(activeCategory === 'All' || activeCategory === 'Freshers') && groupedPortals.Freshers.length > 0 && (
              <motion.div 
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-indigo-600 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
                        {getText('Freshers & Campus Hiring', 'फ्रेशर्स और कैंपस हायरिंग', 'فریشرز اور کیمپس ہائرنگ')}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        {getText(
                          'Dedicated platforms for entry-level jobs, internships, campus recruitment drives, and front-line roles.',
                          'शुरुआती स्तर की नौकरियों, इंटर्नशिप, कैंपस भर्ती अभियान और फ्रंट-लाइन भूमिकाओं के लिए समर्पित मंच।',
                          'انٹری لیول کی نوکریوں، انٹرنشپ، کیمپس بھرتی مہم اور فرنٹ لائن کرداروں کے لیے وقف پلیٹ فارمز۔'
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full w-fit">
                    {groupedPortals.Freshers.length} {getText('Portals', 'पोर्टल', 'پورٹلز')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedPortals.Freshers.map((portal) => (
                    <PortalCard key={portal.id} portal={portal} currentLanguage={currentLanguage} getText={getText} cardVariants={cardVariants} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* SECTION 4: GULF & INTERNATIONAL JOBS */}
            {(activeCategory === 'All' || activeCategory === 'Gulf') && groupedPortals.Gulf.length > 0 && (
              <motion.div 
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-3 bg-gradient-to-r from-amber-50/50 to-transparent p-3 rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-white flex items-center justify-center shadow-sm border border-[#D4AF37]/40">
                      <Globe className="w-5 h-5 text-[#F4C430]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
                          {getText('Gulf & International Jobs', 'खाड़ी और अंतर्राष्ट्रीय नौकरियां', 'خلیجی اور بین الاقوامی نوکریاں')}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#D4AF37] text-[#0B132B] uppercase tracking-wider font-mono">
                          {getText('QA/QC Highlight', 'QA/QC विशेष', 'QA/QC خصوصی')}
                        </span>
                      </div>
                      <p className="text-xs text-amber-900 font-medium font-sans">
                        {getText(
                          'Recommended for your QA/QC Mechanical background, engineering inspections, and GCC placements.',
                          'आपकी QA/QC मैकेनिकल पृष्ठभूमि, इंजीनियरिंग निरीक्षण और खाड़ी प्लेसमेंट के लिए विशेष रूप से अनुशंसित।',
                          'آپ کے QA/QC میکینیکل پس منظر، انجینئرنگ معائنے اور خلیجی پلیسمنٹ کے لیے خصوصی طور پر تجویز کردہ۔'
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 bg-amber-100 text-amber-900 rounded-full w-fit">
                    {groupedPortals.Gulf.length} {getText('Portals', 'पोर्टल', 'پورٹلز')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedPortals.Gulf.map((portal) => (
                    <PortalCard key={portal.id} portal={portal} currentLanguage={currentLanguage} getText={getText} cardVariants={cardVariants} isGulf={true} />
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        ) : (
          /* NO RESULTS STATE */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="bg-white p-12 rounded-2xl border border-gray-200 shadow-sm text-center max-w-md mx-auto space-y-4"
          >
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600">
              <Info className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="font-extrabold text-gray-800 text-sm">
                {getText('No Job Portals Found', 'कोई जॉब पोर्टल नहीं मिला', 'کوئی جاب پورٹل نہیں ملا')}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {getText(
                  'Try adjusting your category filter or keyword search to view available job resources.',
                  'उपलब्ध संसाधनों को देखने के लिए अपनी श्रेणी फ़िल्टर या कीवर्ड खोज को बदलने का प्रयास करें।',
                  'دستیاب وسائل کو دیکھنے کے لیے اپنے زمرے کے فلٹر یا مطلوبہ الفاظ کی تلاش کو تبدیل کرنے کی کوشش کریں۔'
                )}
              </p>
            </div>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              {getText('Reset All Filters', 'सभी फ़िल्टर रीसेट करें', 'تمام فلٹرز ری سیٹ کریں')}
            </button>
          </motion.div>
        )}

        {/* BOTTOM MANDATORY DISCLAIMER BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-amber-50 via-amber-100/40 to-amber-50 border-2 border-amber-300/80 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center sm:items-start shadow-sm relative overflow-hidden"
          id="career_portal_bottom_disclaimer"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/30 rounded-full blur-xl pointer-events-none"></div>
          <div className="p-3 bg-amber-500 text-white rounded-2xl flex-shrink-0 shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-extrabold text-amber-950 uppercase tracking-wider font-mono flex items-center justify-center sm:justify-start gap-1.5">
              <span>⚠️</span>
              <span>{getText('Official Recruitment Disclaimer', 'आधिकारिक भर्ती अस्वीकरण (Disclaimer)', 'سرکاری بھرتی کا ڈس کلیمر')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-sans font-medium">
              {getText(
                '“This website does not directly recruit candidates. Clicking a portal will take you to the respective official website for job listings and applications.”',
                '“यह वेबसाइट सीधे उम्मीदवारों की भर्ती नहीं करती है। किसी भी पोर्टल पर क्लिक करने से आप नौकरी लिस्टिंग और आवेदनों के लिए संबंधित आधिकारिक वेबसाइट पर पहुंच जाएंगे।”',
                '“یہ ویب سائٹ براہ راست امیدواروں کو بھرتی نہیں کرتی ہے۔ کسی بھی پورٹل پر کلک کرنے سے آپ نوکری کے اشتہارات اور درخواستوں کے لیے متعلقہ سرکاری ویب سائٹ پر پہنچ جائیں گے—”'
              )}
            </p>
            <p className="text-[11px] text-amber-800/80 pt-1">
              {getText(
                'Please always verify recruiter identity and avoid paying any upfront money for job interviews or offers.',
                'कृपया सदैव नियोक्ता की पहचान सत्यापित करें और नौकरी के साक्षात्कारों या प्रस्तावों के लिए कभी भी अग्रिम धनराशि न दें।',
                'برائے مہربانی ہمیشہ آجر کی شناخت کی تصدیق کریں اور نوکری کے انٹرویو یا پیشکش کے لیے کبھی بھی پیشگی رقم ادا نہ کریں۔'
              )}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// Subcomponent for individual portal cards
function PortalCard({
  portal,
  currentLanguage,
  getText,
  cardVariants,
  isGulf = false
}: {
  key?: React.Key;
  portal: JobPortalItem;
  currentLanguage: Language;
  getText: (en: string, hi: string, ur: string) => string;
  cardVariants: any;
  isGulf?: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`bg-white rounded-2xl border ${
        isGulf ? 'border-amber-200/80 hover:border-amber-400' : 'border-gray-200/80 hover:border-emerald-500/50'
      } p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
    >
      {/* Top ambient glow on hover */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${
        isGulf ? 'from-amber-100/60' : 'from-emerald-50/80'
      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-tr-2xl`}></div>

      <div>
        {/* Top Header: Logo Image + Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <PortalLogo 
            domain={portal.domain} 
            name={portal.name} 
            initials={portal.initials} 
            gradient={portal.gradient} 
            category={portal.category} 
          />

          <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200 font-mono tracking-wide group-hover:bg-emerald-50 group-hover:text-[#004B23] group-hover:border-emerald-200 transition-colors">
            <Globe className="h-3 w-3 text-[#004B23]" />
            {getText('OFFICIAL SITE', 'आधिकारिक साइट', 'سرکاری سائٹ')}
          </span>
        </div>

        {/* Portal Name & QA/QC Recommendation Banner */}
        <div className="space-y-2">
          <h4 className="text-base sm:text-lg font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition-colors duration-200 flex items-center justify-between">
            <span>{portal.name}</span>
            <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-[#004B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
          </h4>

          {/* Special QA/QC Note if available */}
          {portal.recommendedNoteEn && (
            <div className="bg-amber-50 border border-amber-200/80 rounded-lg p-2 text-[10px] font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 animate-pulse" />
              <span>{getText(portal.recommendedNoteEn, portal.recommendedNoteHi!, portal.recommendedNoteUr!)}</span>
            </div>
          )}

          {/* Tags Pills */}
          <div className="flex flex-wrap gap-1 pt-1">
            {portal.tags.map((t) => (
              <span 
                key={t} 
                className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                  isGulf ? 'bg-amber-50 text-amber-900 border border-amber-200/60' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs mt-3.5 leading-relaxed font-sans line-clamp-3">
          {getText(portal.descEn, portal.descHi, portal.descUr)}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-3.5 border-t border-gray-100">
        <a
          href={portal.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
            isGulf 
              ? 'bg-[#0B132B] text-white hover:bg-[#D4AF37] hover:text-[#0B132B] shadow-sm'
              : 'bg-gray-100 text-gray-800 hover:bg-[#004B23] hover:text-white hover:shadow-md'
          }`}
        >
          <span>{getText('Visit Official Website', 'आधिकारिक वेबसाइट पर जाएं', 'سرکاری ویب سائٹ پر جائیں')}</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}
