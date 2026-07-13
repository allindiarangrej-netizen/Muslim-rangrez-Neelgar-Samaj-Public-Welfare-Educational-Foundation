import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Globe, AlertTriangle, ArrowUpRight, CheckCircle2, Navigation, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface InternationalCareersProps {
  currentLanguage: Language;
}

interface InternationalPortal {
  id: string;
  name: string;
  url: string;
  initials: string;
  gradient: string;
  countries: string[]; // countries code/name list for filtering
  industries: string[]; // industries list for filtering
  regionsEn: string;
  regionsHi: string;
  regionsUr: string;
  descEn: string;
  descHi: string;
  descUr: string;
}

export default function InternationalCareers({ currentLanguage }: InternationalCareersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const countries = [
    { value: 'All', labelEn: 'All Countries', labelHi: 'सभी देश', labelUr: 'تمام ممالک' },
    { value: 'saudi_arabia', labelEn: 'Saudi Arabia', labelHi: 'सऊदी अरब', labelUr: 'سعودی عرب' },
    { value: 'uae', labelEn: 'UAE', labelHi: 'संयुक्त अरब अमीरात', labelUr: 'متحدہ عرب امارات' },
    { value: 'qatar', labelEn: 'Qatar', labelHi: 'कतर', labelUr: 'قطر' },
    { value: 'oman', labelEn: 'Oman', labelHi: 'ओमान', labelUr: 'عمان' },
    { value: 'kuwait', labelEn: 'Kuwait', labelHi: 'कुवैत', labelUr: 'کویت' },
    { value: 'bahrain', labelEn: 'Bahrain', labelHi: 'بहरीन', labelUr: 'بحرین' },
    { value: 'canada', labelEn: 'Canada', labelHi: 'कनाडा', labelUr: 'کینیڈا' },
    { value: 'australia', labelEn: 'Australia', labelHi: 'ऑस्ट्रेलिया', labelUr: 'آسٹریلیا' },
    { value: 'uk', labelEn: 'United Kingdom', labelHi: 'यूनाइटेड किंगडम', labelUr: 'برطانیہ' },
    { value: 'europe', labelEn: 'Europe', labelHi: 'यूरोप', labelUr: 'یورپ' },
  ];

  const industries = [
    { value: 'All', labelEn: 'All Fields', labelHi: 'सभी क्षेत्र', labelUr: 'تمام شعبے' },
    { value: 'Engineering', labelEn: 'Engineering', labelHi: 'इंजीनियरिंग', labelUr: 'انجینئرنگ' },
    { value: 'Construction', labelEn: 'Construction', labelHi: 'निर्माण (कन्स्ट्रक्शन)', labelUr: 'تعمیرات' },
    { value: 'Oil & Gas', labelEn: 'Oil & Gas', labelHi: 'ऑयल एंड गैस', labelUr: 'تیل اور گیس' },
    { value: 'Healthcare', labelEn: 'Healthcare', labelHi: 'स्वास्थ्य सेवा', labelUr: 'صحت کی دیکھ بھال' },
    { value: 'IT', labelEn: 'IT & Software', labelHi: 'आईटी और सॉफ्टवेयर', labelUr: 'آئی ٹی اور سافٹ ویئر' },
    { value: 'Hospitality', labelEn: 'Hospitality', labelHi: 'होटल और हॉस्पिटैलिटी', labelUr: 'مہمان نوازی' },
    { value: 'Logistics', labelEn: 'Logistics', labelHi: 'लॉजिस्टिक्स', labelUr: 'لاجسٹکس' },
    { value: 'Manufacturing', labelEn: 'Manufacturing', labelHi: 'विनिर्माण (मैन्युफैक्चरिंग)', labelUr: 'مینوفیکچرنگ' },
    { value: 'Skilled Trades', labelEn: 'Skilled Trades', labelHi: 'कुशल कारीगर (Trades)', labelUr: 'ہنرمند پیشے' },
  ];

  const portals: InternationalPortal[] = [
    {
      id: 'linkedin_global',
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs',
      initials: 'In',
      gradient: 'from-blue-600 to-indigo-800',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain', 'canada', 'australia', 'uk', 'europe', 'us'],
      industries: ['IT', 'Engineering', 'Healthcare', 'Hospitality', 'Logistics', 'Manufacturing'],
      regionsEn: 'Global (USA, UK, Europe, Gulf, Canada, Australia)',
      regionsHi: 'वैश्विक (यूएसए, यूके, यूरोप, खाड़ी देश, कनाडा, ऑस्ट्रेलिया)',
      regionsUr: 'عالمی (امریکہ، برطانیہ، یورپ، خلیج، کینیڈا، آسٹریلیا)',
      descEn: 'The world\'s premier professional network for white-collar jobs, corporate positions, management, healthcare, and software roles.',
      descHi: 'सफेदपोश नौकरियों, कॉर्पोरेट पदों, प्रबंधन, स्वास्थ्य सेवा और सॉफ्टवेयर भूमिकाओं के लिए दुनिया का प्रमुख पेशेवर नेटवर्क।',
      descUr: 'سفید پوش ملازمتوں، کارپوریٹ عہدوں، انتظام، صحت کی دیکھ بھال اور سافٹ ویئر کے کرداروں کے لیے دنیا کا سب سے بڑا پیشہ ورانہ نیٹ ورک۔'
    },
    {
      id: 'indeed_global',
      name: 'Indeed Worldwide',
      url: 'https://www.indeed.com',
      initials: 'Id',
      gradient: 'from-[#2164f3] to-[#113da2]',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain', 'canada', 'australia', 'uk', 'europe', 'us'],
      industries: ['Engineering', 'Construction', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Global (100+ Countries)',
      regionsHi: 'वैश्विक (100+ देश)',
      regionsUr: 'عالمی (100 سے زائد ممالک)',
      descEn: 'Comprehensive worldwide vacancy listings spanning all sectors from skilled labor and logistics to specialized engineering and software development.',
      descHi: 'कुशल श्रम और लॉजिस्टिक्स से लेकर विशेष इंजीनियरिंग और सॉफ्टवेयर विकास तक सभी क्षेत्रों में व्यापक वैश्विक रिक्तियां।',
      descUr: 'ہنرمند مزدوری اور لاجسٹکس سے لے کر خصوصی انجینئرنگ اور سافٹ ویئر ڈویلپمنٹ تک تمام شعبوں پر مشتمل عالمی ملازمتوں کی فہرست۔'
    },
    {
      id: 'glassdoor_global',
      name: 'Glassdoor',
      url: 'https://www.glassdoor.com',
      initials: 'Gd',
      gradient: 'from-emerald-600 to-teal-800',
      countries: ['canada', 'australia', 'uk', 'europe', 'us'],
      industries: ['IT', 'Engineering', 'Healthcare', 'Hospitality'],
      regionsEn: 'Global (USA, UK, Europe, Australia, Canada)',
      regionsHi: 'वैश्विक (यूएसए, यूके, यूरोप, ऑस्ट्रेलिया, कनाडा)',
      regionsUr: 'عالمی (امریکہ، برطانیہ، یورپ، آسٹریلیا، کینیڈا)',
      descEn: 'Combines direct corporate job listings with real employee salary data, honest reviews, and interview prep guides.',
      descHi: 'वास्तविक कर्मचारियों के वेतन डेटा, ईमानदार समीक्षाओं और साक्षात्कार तैयारी गाइडों के साथ सीधे कॉर्पोरेट जॉब लिस्टिंग को जोड़ता है।',
      descUr: 'ملازمین کی تنخواہ کے حقیقی ڈیٹا، ایماندارانہ جائزوں اور انٹرویو کی تیاری کے رہنما خطوط کے ساتھ کارپوریٹ ملازمت کی فہرستوں کو جوڑتا ہے۔'
    },
    {
      id: 'jooble_global',
      name: 'Jooble',
      url: 'https://jooble.org',
      initials: 'Jb',
      gradient: 'from-amber-500 to-orange-600',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain', 'canada', 'australia', 'uk', 'europe', 'us'],
      industries: ['Construction', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Global (70+ Countries)',
      regionsHi: 'वैश्विक (70+ देश)',
      regionsUr: 'عالمی (70 سے زائد ممالک)',
      descEn: 'A high-powered job search aggregator that crawls thousands of global vacancy sites, saving you hours of browsing.',
      descHi: 'एक उच्च शक्ति वाला जॉब सर्च एग्रीगेटर जो हजारों वैश्विक रिक्तियों वाली साइटों को क्रॉल करता है, जिससे आपके ब्राउज़िंग के घंटे बचते हैं।',
      descUr: 'ایک طاقتور جاب سرچ ایگریگیٹر جو ہزاروں عالمی ملازمت کی سائٹس کو تلاش کرتا ہے، جس سے آپ کا وقت بچتا ہے۔'
    },
    {
      id: 'bayt_gulf',
      name: 'Bayt.com',
      url: 'https://www.bayt.com',
      initials: 'By',
      gradient: 'from-emerald-500 to-green-700',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain'],
      industries: ['Engineering', 'Construction', 'Oil & Gas', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Middle East (Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain)',
      regionsHi: 'मध्य पूर्व (सऊदी अरब, यूएई, कतर, ओमान, कुवैत, बहरीन)',
      regionsUr: 'مشرق وسطی (سعودی عرب، متحدہ عرب امارات، قطر، عمان، کویت، بحرین)',
      descEn: 'The absolute largest job search engine in the Middle East. Essential for candidates seeking certified jobs in Saudi Arabia and GCC.',
      descHi: 'मध्य पूर्व में सबसे बड़ा नौकरी खोज इंजन। सऊदी अरब और जीसीसी में प्रमाणित नौकरियों की तलाश करने वाले उम्मीदवारों के लिए आवश्यक।',
      descUr: 'مشرق وسطی میں سب سے بڑا جاب سرچ انجن۔ سعودی عرب اور جی سی سی میں تصدیق شدہ ملازمتوں کے متلاشی امیدواروں کے لیے لازمی۔'
    },
    {
      id: 'gulftalent_gulf',
      name: 'GulfTalent',
      url: 'https://www.gulftalent.com',
      initials: 'Gt',
      gradient: 'from-cyan-500 to-blue-700',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain'],
      industries: ['Engineering', 'Construction', 'Oil & Gas', 'Healthcare', 'IT', 'Logistics', 'Manufacturing'],
      regionsEn: 'Gulf Region (KSA, UAE, Qatar, Kuwait, Oman, Bahrain)',
      regionsHi: 'खाड़ी क्षेत्र (सऊदी अरब, यूएई, कतर, कुवैत, ओमान, बहरीन)',
      regionsUr: 'خلیجی خطہ (سعودی عرب، متحدہ عرب امارات، قطر، کویت، عمان، بحرین)',
      descEn: 'Top portal for corporate and senior professionals in GCC countries. Strong focus on Engineering, Oil & Gas, and Healthcare sectors.',
      descHi: 'जीसीसी देशों में कॉर्पोरेट और वरिष्ठ पेशेवरों के लिए शीर्ष पोर्टल। इंजीनियरिंग, तेल और गैस और स्वास्थ्य सेवा क्षेत्रों पर मजबूत ध्यान।',
      descUr: 'جی سی سی ممالک میں کارپوریٹ اور سینئر پیشہ ور افراد کے لیے سب سے بڑا پورٹل۔ انجینئرنگ، آئل اینڈ گیس اور ہیلتھ کیئر کے شعبوں پر گہری توجہ۔'
    },
    {
      id: 'naukrigulf_gulf',
      name: 'Naukrigulf',
      url: 'https://www.naukrigulf.com',
      initials: 'Ng',
      gradient: 'from-blue-800 to-sky-700',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain'],
      industries: ['Engineering', 'Construction', 'Oil & Gas', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Middle East & Gulf Countries',
      regionsHi: 'मध्य पूर्व और खाड़ी देश',
      regionsUr: 'مشرق وسطی اور خلیجی ممالک',
      descEn: 'A specialized Middle-East channel by Naukri. Features thousands of verified jobs, simplified visa procedures, and recruiter interactions.',
      descHi: 'नौकरी डॉट कॉम का एक विशेष मध्य-पूर्व चैनल। हजारों सत्यापित नौकरियों, सरलीकृत वीजा प्रक्रियाओं और नियोक्ताओं से संपर्क की सुविधा।',
      descUr: 'نوکری ڈاٹ کام کا ایک خصوصی مشرق وسطیٰ چینل۔ ہزاروں تصدیق شدہ ملازمتیں، ویزا کے آسان طریقہ کار اور آجروں سے براہ راست رابطہ فراہم کرتا ہے۔'
    },
    {
      id: 'gulfjobsites_gulf',
      name: 'GulfJobSites',
      url: 'https://www.gulfjobsites.com',
      initials: 'Gj',
      gradient: 'from-teal-600 to-cyan-800',
      countries: ['saudi_arabia', 'uae', 'qatar', 'oman', 'kuwait', 'bahrain'],
      industries: ['Construction', 'Oil & Gas', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Gulf Countries (KSA, UAE, Qatar, Kuwait, Oman, Bahrain)',
      regionsHi: 'खाड़ी देश (सऊदी अरब, यूएई, कतर, कुवैत, ओमान, बहरीन)',
      regionsUr: 'خلیجی ممالک (سعودی عرب، متحدہ عرب امارات، قطر، کویت، عمان، بحرین)',
      descEn: 'Directory aggregator of active job search engines, staffing agencies, and company vacancy boards across the Gulf.',
      descHi: 'खाड़ी देशों में सक्रिय नौकरी खोज इंजनों, भर्ती एजेंसियों और कंपनी रिक्ति बोर्डों का निर्देशिका एग्रीगेटर।',
      descUr: 'خلیج بھر میں فعال جاب سرچ انجنوں، بھرتی کرنے والی ایجنسیوں اور کمپنی کے ملازمت کے بورڈز کا مجموعہ۔'
    },
    {
      id: 'eures_europe',
      name: 'EURES Portal',
      url: 'https://eures.europa.eu',
      initials: 'Eu',
      gradient: 'from-yellow-500 to-blue-700',
      countries: ['europe'],
      industries: ['Engineering', 'Healthcare', 'IT', 'Hospitality', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Europe (EU & EEA Member Countries)',
      regionsHi: 'यूरोप (यूरोपीय संघ और ईईए सदस्य देश)',
      regionsUr: 'یورپ (یورپی یونین اور ای ای اے کے رکن ممالک)',
      descEn: 'The official European Job Mobility Portal, connecting jobseekers with thousands of verified jobs across 31 European nations.',
      descHi: 'आधिकारिक यूरोपीय जॉब मोबिलिटी पोर्टल, जो नौकरी चाहने वालों को 31 यूरोपीय देशों में हजारों सत्यापित नौकरियों से जोड़ता है।',
      descUr: 'سرکاری یورپی جاب موبلٹی پورٹل، جو ملازمت کے متلاشیوں کو 31 یورپی ممالک میں ہزاروں تصدیق شدہ ملازمتوں سے جوڑتا ہے۔'
    },
    {
      id: 'jobbank_canada',
      name: 'Job Bank Canada',
      url: 'https://www.jobbank.gc.ca',
      initials: 'Ca',
      gradient: 'from-red-600 to-rose-800',
      countries: ['canada'],
      industries: ['Engineering', 'Construction', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Canada',
      regionsHi: 'कनाडा',
      regionsUr: 'کینیڈا',
      descEn: 'The Government of Canada\'s official job listing web service. Search thousands of positions with LMIA-approved support status.',
      descHi: 'कनाडा सरकार की आधिकारिक नौकरी लिस्टिंग वेब सेवा। LMIA-अनुमोदित सहायता स्थिति वाले हजारों पदों की खोज करें।',
      descUr: 'حکومت کینیڈا کی سرکاری نوکریوں کی فہرست۔ ایل ایم آئی اے (LMIA) سے منظور شدہ ہزاروں اسامیوں کی تلاش کریں۔'
    },
    {
      id: 'workforce_australia',
      name: 'Workforce Australia',
      url: 'https://www.workforceaustralia.gov.au',
      initials: 'Au',
      gradient: 'from-blue-900 to-amber-700',
      countries: ['australia'],
      industries: ['Engineering', 'Construction', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'Australia',
      regionsHi: 'ऑस्ट्रेलिया',
      regionsUr: 'آسٹریلیا',
      descEn: 'Official recruitment and jobs network run by the Australian Government. Find sponsorship opportunities and critical skilled migration listings.',
      descHi: 'ऑस्ट्रेलियाई सरकार द्वारा संचालित आधिकारिक भर्ती और नौकरी नेटवर्क। प्रायोजन के अवसर और महत्वपूर्ण कुशल प्रवास लिस्टिंग खोजें।',
      descUr: 'آسٹریلوی حکومت کا سرکاری بھرتی اور نوکریوں کا نیٹ ورک۔ سپانسرشپ کے مواقع اور اہم ہنر مند تارکین وطن کی فہرستیں تلاش کریں۔'
    },
    {
      id: 'findajob_uk',
      name: 'Find a Job (UK Gov)',
      url: 'https://www.gov.uk/find-a-job',
      initials: 'Uk',
      gradient: 'from-slate-700 to-purple-900',
      countries: ['uk'],
      industries: ['Engineering', 'Healthcare', 'IT', 'Hospitality', 'Logistics', 'Manufacturing', 'Skilled Trades'],
      regionsEn: 'United Kingdom',
      regionsHi: 'यूनाइटेड किंगडम (यूके)',
      regionsUr: 'برطانیہ (یو کے)',
      descEn: 'The UK Government\'s official job platform. Find full-time, part-time, and seasonal jobs with visa sponsorship sponsorship potential.',
      descHi: 'यूके सरकार का आधिकारिक नौकरी मंच। वीजा प्रायोजन क्षमता के साथ पूर्णकालिक, अंशकालिक और मौसमी नौकरियां खोजें।',
      descUr: 'برطانیہ کی حکومت کا سرکاری جاب پلیٹ فارم۔ ویزا سپانسرشپ کی گنجائش کے ساتھ کل وقتی، جزوقتی اور موسمی نوکریاں تلاش کریں۔'
    },
    {
      id: 'usajobs_usa',
      name: 'USAJOBS',
      url: 'https://www.usajobs.gov',
      initials: 'Us',
      gradient: 'from-blue-950 to-red-800',
      countries: ['us'],
      industries: ['Engineering', 'Healthcare', 'IT', 'Logistics', 'Manufacturing'],
      regionsEn: 'United States',
      regionsHi: 'संयुक्त राज्य अमेरिका (यूएसए)',
      regionsUr: 'امریکہ (یو ایس اے)',
      descEn: 'The official career portal for Federal Government agencies of the United States. Ideal for tech, scientific, and healthcare roles.',
      descHi: 'संयुक्त राज्य अमेरिका की संघीय सरकारी एजेंसियों के लिए आधिकारिक करियर पोर्टल। तकनीकी, वैज्ञानिक और स्वास्थ्य सेवा भूमिकाओं के लिए आदर्श।',
      descUr: 'ریاستہائے متحدہ امریکہ کے وفاقی سرکاری اداروں کا سرکاری کیریئر پورٹل۔ آئی ٹی، سائنسی اور صحت کی دیکھ بھال کے کرداروں کے لیے بہترین۔'
    }
  ];

  // Translation helper
  const getText = (en: string, hi: string, ur: string) => {
    if (currentLanguage === 'hi') return hi;
    if (currentLanguage === 'ur') return ur;
    return en;
  };

  const getCountryLabel = (cVal: string) => {
    const found = countries.find(c => c.value === cVal);
    return found ? getText(found.labelEn, found.labelHi, found.labelUr) : cVal;
  };

  const getIndustryLabel = (iVal: string) => {
    const found = industries.find(ind => ind.value === iVal);
    return found ? getText(found.labelEn, found.labelHi, found.labelUr) : iVal;
  };

  // Filter Portals
  const filteredPortals = useMemo(() => {
    return portals.filter((portal) => {
      const matchesCountry = selectedCountry === 'All' || portal.countries.includes(selectedCountry);
      const matchesIndustry = selectedIndustry === 'All' || portal.industries.includes(selectedIndustry);
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        portal.name.toLowerCase().includes(searchLower) ||
        portal.regionsEn.toLowerCase().includes(searchLower) ||
        portal.regionsHi.toLowerCase().includes(searchLower) ||
        portal.regionsUr.toLowerCase().includes(searchLower) ||
        portal.descEn.toLowerCase().includes(searchLower) ||
        portal.descHi.toLowerCase().includes(searchLower) ||
        portal.descUr.toLowerCase().includes(searchLower);

      return matchesCountry && matchesIndustry && matchesSearch;
    });
  }, [selectedCountry, selectedIndustry, searchQuery]);

  const scrollToPortals = () => {
    const element = document.getElementById('international_portals_content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Grid container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as any, stiffness: 100, damping: 15 } }
  };

  return (
    <div className="py-20 bg-slate-900 text-white relative overflow-hidden" id="international_careers_section">
      {/* Dynamic Grid Pattern Background representing a stylized World Map / global networks */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>
      
      {/* Decorative colored glow maps */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Styled stylized world map backdrop vectors */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg width="1200" height="600" viewBox="0 0 1200 600" className="w-full h-auto max-w-7xl mx-auto">
          {/* North America */}
          <path d="M150,150 Q220,130 280,180 T300,300 Q200,350 150,280 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* South America */}
          <path d="M280,320 Q320,380 340,480 T280,550 Q240,480 250,380 Z" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Africa */}
          <path d="M520,280 Q580,260 640,320 T620,480 Q520,450 500,350 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Europe */}
          <path d="M500,150 Q560,110 620,160 T600,260 Q520,280 480,200 Z" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Asia */}
          <path d="M640,150 Q850,120 950,220 T880,420 Q700,450 640,320 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Australia */}
          <path d="M920,420 Q1000,430 1020,480 T940,540 Q880,500 900,450 Z" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          
          {/* Network Connection Lines */}
          <path d="M250,240 L520,180" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
          <path d="M550,180 L760,280" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
          <path d="M760,280 L960,460" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
          <path d="M280,410 L560,360" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
          
          {/* Node points */}
          <circle cx="250" cy="240" r="3" fill="#10b981" />
          <circle cx="520" cy="180" r="3" fill="#3b82f6" />
          <circle cx="760" cy="280" r="4" fill="#10b981" />
          <circle cx="960" cy="460" r="3" fill="#3b82f6" />
          <circle cx="560" cy="360" r="3" fill="#10b981" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO / Header Banner with CTA */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#004B23]/45 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="h-4 w-4 text-[#F4C430] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-300">
              {getText('GLOBAL CAREERS PLATFORM', 'वैश्विक कैरियर मंच', 'عالمی کیریئر پلیٹ فارم')}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-none text-white"
          >
            {getText('International Jobs & Overseas Careers', 'अंतर्राष्ट्रीय नौकरियां और विदेशी करियर', 'بین الاقوامی ملازمتیں اور سمندر پار کیریئر')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-lg mt-5 leading-relaxed max-w-3xl mx-auto font-sans"
          >
            {getText(
              'Discover verified career opportunities in Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain, Europe, Australia, Canada, the UK, and other countries through trusted global recruitment platforms.',
              'विश्वसनीय वैश्विक भर्ती प्लेटफार्मों के माध्यम से सऊदी अरब, यूएई, कतर, ओमान, कुवैत, बहरीन, यूरोप, ऑस्ट्रेलिया, कनाडा, यूके और अन्य देशों में सत्यापित कैरियर के अवसरों की खोज करें।',
              'سعودی عرب، متحدہ عرب امارات، قطر، عمان، کویت، بحرین، یورپ، آسٹریلیا، کینیڈا، برطانیہ اور دیگر ممالک میں معتبر عالمی بھرتی پلیٹ فارمز کے ذریعے تصدیق شدہ ملازمت کے مواقع تلاش کریں۔'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button
              onClick={scrollToPortals}
              className="px-6 py-3 bg-[#004B23] hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-950/50 group"
            >
              <span>{getText('Explore International Careers', 'अंतर्राष्ट्रीय करियर खोजें', 'بین الاقوامی کیریئر دریافت کریں')}</span>
              <Navigation className="h-4 w-4 rotate-45 text-[#F4C430] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Search and Advanced Filters Panel */}
        <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700 shadow-xl mb-12" id="international_portals_content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            
            {/* Search Box */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                {getText('Search Profession / Key', 'पेशा या कीवर्ड खोजें', 'پیشہ یا مطلوبہ الفاظ تلاش کریں')}
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={getText('Search jobs or country...', 'नौकरियां या देश खोजें...', 'ملازمتیں یا ملک تلاش کریں...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-xs py-3 px-4 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition-all duration-200"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                {getText('Filter by Target Country', 'लक्षित देश से फ़िल्टर करें', 'ملک کے لحاظ سے فلٹر کریں')}
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-xs py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition-all duration-200"
              >
                {countries.map(c => (
                  <option key={c.value} value={c.value}>
                    {getText(c.labelEn, c.labelHi, c.labelUr)}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                {getText('Filter by Industry', 'उद्योग के अनुसार फ़िल्टर करें', 'صنعت کے لحاظ سے فلٹر کریں')}
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-xs py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition-all duration-200"
              >
                {industries.map(ind => (
                  <option key={ind.value} value={ind.value}>
                    {getText(ind.labelEn, ind.labelHi, ind.labelUr)}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Stats Banner inside Filter Box */}
          <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-400">
            <div>
              {getText('Active Filters: ', 'सक्रिय फ़िल्टर: ', 'فعال فلٹرز: ')}
              <span className="text-emerald-400 font-extrabold mx-1">{getCountryLabel(selectedCountry)}</span> 
              • 
              <span className="text-emerald-400 font-extrabold mx-1">{getIndustryLabel(selectedIndustry)}</span>
            </div>
            <div>
              {getText('Found: ', 'प्राप्त पोर्टल: ', 'ملے پورٹلز: ')}
              <span className="text-white font-mono font-extrabold">{filteredPortals.length}</span> {getText('Portals', 'पोर्टल', 'پورٹلز')}
            </div>
          </div>
        </div>

        {/* Portals Cards Grid */}
        {filteredPortals.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            id="international_portals_grid"
          >
            {filteredPortals.map((portal) => (
              <motion.div
                key={portal.id}
                variants={itemVariants}
                className="bg-slate-800 rounded-3xl border border-slate-700/60 p-6 shadow-sm hover:shadow-2xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* External corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-700/10 to-transparent group-hover:from-emerald-500/10 transition-all duration-300 pointer-events-none rounded-tr-3xl"></div>

                <div>
                  {/* Card Header: Brand Icon and Badges */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Brand Initials / Logo */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${portal.gradient} flex items-center justify-center shadow-lg text-white font-mono font-black text-lg tracking-wider`}>
                      {portal.initials}
                    </div>

                    {/* Badge */}
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full font-mono">
                      <Globe className="h-3 w-3 text-[#F4C430]" />
                      {getText('GLOBAL CAREER', 'वैश्विक करियर', 'عالمی کیریئر')}
                    </span>
                  </div>

                  {/* Portal details */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1.5">
                      <span>{portal.name}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-emerald-400" />
                    </h3>

                    {/* Regional / Country text */}
                    <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping"></span>
                      <span>{getText(portal.regionsEn, portal.regionsHi, portal.regionsUr)}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs mt-4 leading-relaxed font-sans min-h-[50px]">
                    {getText(portal.descEn, portal.descHi, portal.descUr)}
                  </p>

                  {/* Industry Tags */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-700/50">
                    {portal.industries.slice(0, 4).map((ind) => (
                      <span key={ind} className="text-[8px] font-black tracking-wider text-slate-300 bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded uppercase font-mono">
                        {ind}
                      </span>
                    ))}
                    {portal.industries.length > 4 && (
                      <span className="text-[8px] font-black tracking-wider text-emerald-300 bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded font-mono">
                        +{portal.industries.length - 4} MORE
                      </span>
                    )}
                  </div>
                </div>

                {/* Visit button */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-slate-900 group-hover:bg-[#004B23] text-slate-300 group-hover:text-white border border-slate-700 group-hover:border-[#004B23] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{getText('Visit Website', 'वेबसाइट पर जाएं', 'ویب سائٹ ملاحظہ کریں')}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#F4C430] transition-colors" />
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto text-amber-400 border border-slate-700">
              <Globe className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="font-extrabold text-white text-sm">
                {getText('No International Portals Match', 'कोई अंतर्राष्ट्रीय पोर्टल नहीं मिला', 'کوئی بین الاقوامی پورٹل نہیں ملا')}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {getText(
                  'Try adjusting your target country or industry criteria to view other available platforms.',
                  'अन्य उपलब्ध प्लेटफार्मों को देखने के लिए अपने लक्षित देश या उद्योग मानदंडों को बदलने का प्रयास करें।',
                  'دیگر دستیاب پلیٹ فارمز کو دیکھنے کے لیے اپنے ہدف والے ملک یا صنعت کے معیارات کو تبدیل کرنے کی کوشش کریں۔'
                )}
              </p>
            </div>
            <button
              onClick={() => { setSelectedCountry('All'); setSelectedIndustry('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#004B23] hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              {getText('Clear Filters', 'फ़िल्टर साफ़ करें', 'فلٹرز صاف کریں')}
            </button>
          </div>
        )}

        {/* Disclaimer Board */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-amber-500/5 border border-amber-500/20 rounded-3xl p-5 max-w-4xl mx-auto flex gap-4 items-start"
          id="international_careers_disclaimer"
        >
          <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0 mt-0.5">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              {getText('Important Overseas Safety & Disclaimer', 'विदेशी सुरक्षा और अस्वीकरण', 'بیرون ملک ملازمتوں کے بارے میں اہم حفاظتی معلومات')}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {getText(
                'This platform only provides links to trusted external job portals. We do not guarantee recruitment or charge any fee for job applications. Always verify recruiters before making payments or sharing passport documents.',
                'यह मंच केवल विश्वसनीय बाहरी नौकरी पोर्टलों के लिंक प्रदान करता है। हम भर्ती की गारंटी नहीं देते हैं या नौकरी के आवेदनों के लिए कोई शुल्क नहीं लेते हैं। भुगतान करने या पासपोर्ट दस्तावेज साझा करने से पहले हमेशा नियोक्ताओं की सत्यता को सत्यापित करें।',
                'یہ پلیٹ فارم صرف قابل اعتماد بیرونی جاب پورٹلز کے لنکس فراہم کرتا ہے۔ ہم بھرتی کی ضمانت نہیں دیتے ہیں یا ملازمت کے لیے کسی قسم کی فیس وصول نہیں کرتے۔ ادائیگی کرنے یا پاسپورٹ کی کاپی شیئر کرنے سے پہلے ہمیشہ آجر کی تصدیق کریں۔'
              )}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
