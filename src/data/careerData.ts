import { Language } from '../types';

export interface MultilingualText {
  en: string;
  hi: string;
  ur: string;
}

export interface Exam {
  id: string;
  category: string;
  name: MultilingualText;
  authority: string;
  website: string;
  frequency: string;
  salaryLevel: string;
  salaryRange: string;
  qualification: string;
  overview: MultilingualText;
  eligibility: {
    minQualification: MultilingualText;
    ageLimit: MultilingualText;
    nationality: MultilingualText;
    reservationRules: MultilingualText;
  };
  selectionProcess: {
    stages: MultilingualText;
    syllabus: MultilingualText;
  };
  importantDates: {
    notification: string;
    applicationStart: string;
    lastDate: string;
    admitCard: string;
    examDate: string;
    resultDate: string;
  };
  lastUpdated: string;
}

export const EXAM_CATEGORIES: { id: string; name: MultilingualText; icon: string; url?: string }[] = [
  { id: 'upsc', name: { en: 'UPSC', hi: 'यूपीएससी', ur: 'یو پی ایس سی' }, icon: 'Scale', url: 'https://upsc.gov.in' },
  { id: 'ssc', name: { en: 'SSC', hi: 'एसएससी', ur: 'ایس ایس سی' }, icon: 'FileText', url: 'https://ssc.gov.in' },
  { id: 'railways', name: { en: 'Railways', hi: 'रेलवे', ur: 'ریلوے' }, icon: 'Train', url: 'https://www.rrbcdg.gov.in' },
  { id: 'banking', name: { en: 'Banking', hi: 'बैंकिंग', ur: 'بینکنگ' }, icon: 'Building2', url: 'https://www.ibps.in' },
  { id: 'insurance', name: { en: 'Insurance', hi: 'बीमा', ur: 'انشورنس' }, icon: 'Shield', url: 'https://licindia.in/bottom-links/careers' },
  { id: 'defence', name: { en: 'Defence', hi: 'रक्षा', ur: 'دفاع' }, icon: 'Shield', url: 'https://afcat.cdac.in' },
  { id: 'police', name: { en: 'Police', hi: 'पुलिस', ur: 'پولیس' }, icon: 'Shield', url: 'https://uppbpb.gov.in' },
  { id: 'teaching', name: { en: 'Teaching', hi: 'शिक्षण', ur: 'تعلیم' }, icon: 'BookOpen', url: 'https://ugcnet.nta.ac.in' },
  { id: 'medical', name: { en: 'Medical', hi: 'मेडिकल', ur: 'میڈیکل' }, icon: 'Stethoscope', url: 'https://neet.nta.nic.in' },
  { id: 'engineering', name: { en: 'Engineering', hi: 'इंजीनियरिंग', ur: 'انجینئرنگ' }, icon: 'Building2', url: 'https://jeemain.nta.nic.in' },
  { id: 'law', name: { en: 'Law', hi: 'कानून', ur: 'قانون' }, icon: 'Scale', url: 'https://consortiumofnlus.ac.in' },
  { id: 'mba', name: { en: 'MBA', hi: 'एमबीए', ur: 'ایم بی اے' }, icon: 'BookOpen', url: 'https://iimcat.ac.in' },
  { id: 'agriculture', name: { en: 'Agriculture', hi: 'कृषि', ur: 'زراعت' }, icon: 'BookOpen', url: 'https://icar.nta.nic.in' },
  { id: 'psu', name: { en: 'PSU', hi: 'पीएसयू', ur: 'پی ایس یو' }, icon: 'Building2', url: 'https://gate2026.iitr.ac.in' },
  { id: 'statepsc', name: { en: 'State PSC', hi: 'राज्य पीएससी', ur: 'اسٹیٹ پی ایس سی' }, icon: 'Scale', url: 'https://uppsc.up.nic.in' },
  { id: 'scholarships', name: { en: 'Scholarships', hi: 'छात्रवृत्ति', ur: 'اسکالرشپ' }, icon: 'Award', url: 'https://cuet.nta.nic.in' },
  { id: 'apprenticeships', name: { en: 'Apprenticeships', hi: 'प्रशिक्षुता', ur: 'اپریٹس' }, icon: 'FileText', url: 'https://www.apprenticeshipindia.gov.in' },
  { id: 'iti-diploma', name: { en: 'ITI & Diploma', hi: 'आईटीआई और डिप्लोमा', ur: 'آئی ٹی آئی اور ڈپلومہ' }, icon: 'FileText', url: 'https://admissions.nid.edu' },
  { id: 'international', name: { en: 'International', hi: 'अंतर्राष्ट्रीय', ur: 'بین الاقوامی' }, icon: 'Globe', url: 'https://www.ets.org/toefl.html' },
];

export const EXAMS: Exam[] = [
  {
    id: 'upsc-cse',
    category: 'upsc',
    name: { en: 'UPSC Civil Services', hi: 'यूपीएससी सिविल सेवा', ur: 'یو پی ایس سی سول سروسز' },
    authority: 'Union Public Service Commission',
    website: 'https://upsc.gov.in',
    frequency: 'Annual',
    salaryLevel: 'Pay Level 10',
    salaryRange: '60000+',
    qualification: 'Graduate',
    overview: {
      en: 'Premier competitive exam for recruitment to the Indian Administrative Service (IAS), Indian Police Service (IPS), etc.',
      hi: 'भारतीय प्रशासनिक सेवा (IAS), भारतीय पुलिस सेवा (IPS) आदि में भर्ती के लिए प्रमुख प्रतियोगी परीक्षा।',
      ur: 'انڈین ایڈمنسٹریٹو سروس (IAS) اور انڈین پولیس سروس (IPS) وغیرہ میں بھرتی کے لیے سب سے بڑا مسابقتی امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate', hi: 'स्नातक', ur: 'گریجویٹ' },
      ageLimit: { en: '21-32 years', hi: '21-32 वर्ष', ur: '21-32 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Govt rules', hi: 'सरकारी नियमों के अनुसार', ur: 'سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Prelims, Mains, Interview', hi: 'प्रारंभिक, मुख्य, साक्षात्कार', ur: 'پریلیمس، مینز، انٹرویو' },
      syllabus: { en: 'Extensive coverage of GS, Optional subjects', hi: 'जीएस, वैकल्पिक विषयों का व्यापक कवरेज', ur: 'جی ایس، اختیاری مضامین' }
    },
    importantDates: {
      notification: 'Feb 2026',
      applicationStart: 'Feb 2026',
      lastDate: 'Mar 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'ssc-cgl',
    category: 'ssc',
    name: { en: 'SSC CGL & CHSL', hi: 'एसएससी सीजीएल और सीएचएसएल', ur: 'ایس ایس سی سی جی ایل' },
    authority: 'Staff Selection Commission',
    website: 'https://ssc.gov.in',
    frequency: 'Annual',
    salaryLevel: 'Pay Level 4-8',
    salaryRange: '40000+',
    qualification: 'Graduate / 10+2',
    overview: {
      en: 'Combined Graduate Level & CHSL Examination for various Group B and C posts in ministries and departments.',
      hi: 'मंत्रालयों और विभागों में विभिन्न समूह बी और सी पदों के लिए संयुक्त स्नातक व 10+2 स्तरीय परीक्षा।',
      ur: 'مختلف وزارتوں اور محکموں میں گروپ بی اور سی کے عہدوں کے لیے مشترکہ گریجویٹ لیول کا امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate / 10+2', hi: 'स्नातक / 10+2', ur: 'گریجویٹ / 10+2' },
      ageLimit: { en: '18-32 years', hi: '18-32 वर्ष', ur: '18-32 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Govt rules', hi: 'सरकारी नियमों के अनुसार', ur: 'سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Tier I, Tier II', hi: 'टियर I, टियर II', ur: 'ٹیئر I، ٹیئر II' },
      syllabus: { en: 'Quantitative Aptitude, Reasoning, English, General Awareness', hi: 'मात्रात्मक योग्यता, तर्क, अंग्रेजी, सामान्य जागरूकता', ur: 'کوانٹیٹیٹو ایپٹیٹیوڈ، ریزننگ، انگلش، جنرل اویئرنس' }
    },
    importantDates: {
      notification: 'Jun 2026',
      applicationStart: 'Jun 2026',
      lastDate: 'Jul 2026',
      admitCard: 'Sep 2026',
      examDate: 'Oct 2026',
      resultDate: 'Dec 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'railway-rrb',
    category: 'railways',
    name: { en: 'Railway (RRB) NTPC & Group D', hi: 'रेलवे (आरआरबी) एनटीपीसी व ग्रुप डी', ur: 'ریلوے آر آر بی این ٹی پی سی' },
    authority: 'Railway Recruitment Boards',
    website: 'https://www.rrbcdg.gov.in',
    frequency: 'Annual / Periodic',
    salaryLevel: 'Pay Level 2-6',
    salaryRange: '35000+',
    qualification: '10th / 12th / Graduate',
    overview: {
      en: 'Official recruitment exam for non-technical popular categories (NTPC), Station Master, Goods Guard, and Group D railway staff.',
      hi: 'गैर-तकनीकी लोकप्रिय श्रेणियों (NTPC), स्टेशन मास्टर, गुड्स गार्ड और ग्रुप डी रेलवे कर्मचारियों के लिए आधिकारिक भर्ती परीक्षा।',
      ur: 'ریلوے میں نان ٹیکنیکل اور گروپ ڈی عملے کی بھرتی کے لیے سرکاری مسابقتی امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10th / 12th / Graduate', hi: '10वीं / 12वीं / स्नातक', ur: '10ویں / 12ویں / گریجویٹ' },
      ageLimit: { en: '18-33 years', hi: '18-33 वर्ष', ur: '18-33 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Govt rules', hi: 'सरकारी नियमों के अनुसार', ur: 'سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'CBT 1, CBT 2, Skill Test / PET, DV', hi: 'सीबीटी 1, सीबीटी 2, कौशल परीक्षण, डीवी', ur: 'سی بی ٹی 1، سی بی ٹی 2، اسکل ٹیسٹ' },
      syllabus: { en: 'General Awareness, Mathematics, General Intelligence and Reasoning', hi: 'सामान्य जागरूकता, गणित, सामान्य बुद्धि और तर्क', ur: 'جنرل اویئرنس، ریاضی، جنرل انٹیلی جنس' }
    },
    importantDates: {
      notification: 'Apr 2026',
      applicationStart: 'Apr 2026',
      lastDate: 'May 2026',
      admitCard: 'Jul 2026',
      examDate: 'Aug 2026',
      resultDate: 'Nov 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'banking-ibps',
    category: 'banking',
    name: { en: 'Banking (IBPS PO & Clerk)', hi: 'बैंकिंग (आईबीपीएस पीओ व क्लर्क)', ur: 'بینکنگ (آئی بی پی ایس پی او)' },
    authority: 'Institute of Banking Personnel Selection',
    website: 'https://www.ibps.in',
    frequency: 'Annual',
    salaryLevel: 'Pay Level 7 / Bank Scale I',
    salaryRange: '55000+',
    qualification: 'Graduate',
    overview: {
      en: 'Common recruitment process for probationary officers (PO) and clerical cadre across nationalized public sector banks in India.',
      hi: 'भारत में राष्ट्रीयकृत सार्वजनिक क्षेत्र के बैंकों में प्रोबेशनरी ऑफिसर (PO) और क्लर्क संवर्ग के लिए संयुक्त भर्ती प्रक्रिया।',
      ur: 'بھارت کے سرکاری بینکوں میں پروبیشنری آفیسرز (PO) اور کلرکوں کی بھرتی کے لیے مشترکہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate in any discipline', hi: 'किसी भी विषय में स्नातक', ur: 'کسی بھی مضمون میں گریجویٹ' },
      ageLimit: { en: '20-30 years', hi: '20-30 वर्ष', ur: '20-30 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Govt rules', hi: 'सरकारी नियमों के अनुसार', ur: 'سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Prelims, Mains, Interview (for PO)', hi: 'प्रारंभिक, मुख्य, साक्षात्कार (पीओ के लिए)', ur: 'پریلیمس، مینز، انٹرویو' },
      syllabus: { en: 'English Language, Quantitative Aptitude, Reasoning Ability, Banking Awareness', hi: 'अंग्रेजी भाषा, मात्रात्मक योग्यता, तर्क क्षमता, बैंकिंग जागरूकता', ur: 'انگلش، ریاضی، ریزننگ، بینکنگ اویئرنس' }
    },
    importantDates: {
      notification: 'Aug 2026',
      applicationStart: 'Aug 2026',
      lastDate: 'Sep 2026',
      admitCard: 'Oct 2026',
      examDate: 'Oct 2026',
      resultDate: 'Jan 2027'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'banking-sbi',
    category: 'banking',
    name: { en: 'SBI Careers (PO & Clerk)', hi: 'एसबीआई करियर (पीओ व क्लर्क)', ur: 'ایس بی آئی کیریئر' },
    authority: 'State Bank of India',
    website: 'https://sbi.co.in/careers',
    frequency: 'Annual',
    salaryLevel: 'SBI Officer Scale I',
    salaryRange: '65000+',
    qualification: 'Graduate',
    overview: {
      en: 'Direct recruitment exam conducted by the State Bank of India for Probationary Officers (PO) and Junior Associates (Clerical).',
      hi: 'प्रोबेशनरी ऑफिसर (PO) और जूनियर एसोसिएट्स (क्लर्क) के लिए भारतीय स्टेट बैंक द्वारा आयोजित सीधी भर्ती परीक्षा।',
      ur: 'اسٹیٹ بینک آف انڈیا کے ذریعے پروبیشنری آفیسرز اور کلرکوں کے لیے براہ راست بھرتی کا امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate in any discipline', hi: 'किसी भी विषय में स्नातक', ur: 'کسی بھی مضمون میں گریجویٹ' },
      ageLimit: { en: '21-30 years', hi: '21-30 वर्ष', ur: '21-30 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Govt rules', hi: 'सरकारी नियमों के अनुसार', ur: 'سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Prelims, Mains, Psychometric Test, Group Exercise & Interview', hi: 'प्रारंभिक, मुख्य, साइकोमेट्रिक टेस्ट, समूह अभ्यास और साक्षात्कार', ur: 'پریلیمس، مینز، سائیکومیٹرک ٹیسٹ، انٹرویو' },
      syllabus: { en: 'Data Analysis & Interpretation, General/Economy/Banking Awareness, Reasoning & Computer Aptitude', hi: 'डेटा विश्लेषण और व्याख्या, सामान्य/अर्थव्यवस्था/बैंकिंग जागरूकता, तर्क और कंप्यूटर योग्यता', ur: 'ڈیٹا تجزیہ، بینکنگ اویئرنس، ریزننگ' }
    },
    importantDates: {
      notification: 'Sep 2026',
      applicationStart: 'Sep 2026',
      lastDate: 'Oct 2026',
      admitCard: 'Nov 2026',
      examDate: 'Nov 2026',
      resultDate: 'Feb 2027'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'state-psc',
    category: 'statepsc',
    name: { en: 'State PSC Civil Services', hi: 'राज्य पीएससी सिविल सेवा (UPPSC/MPPSC)', ur: 'اسٹیٹ پی ایس سی سول سروسز' },
    authority: 'State Public Service Commissions',
    website: 'https://uppsc.up.nic.in',
    frequency: 'Annual',
    salaryLevel: 'Pay Level 10 / State Group A & B',
    salaryRange: '55000+',
    qualification: 'Graduate',
    overview: {
      en: 'State-level administrative services exam (UPPSC, MPPSC, BPSC, RPSC) for SDM, DSP, Tehsildar, and Block Development Officer posts.',
      hi: 'एसडीएम, डीएसपी, तहसीलदार और खंड विकास अधिकारी पदों के लिए राज्य स्तरीय प्रशासनिक सेवा परीक्षा (UPPSC, MPPSC, BPSC, RPSC)।',
      ur: 'ایس ڈی ایم، ڈی ایس پی، اور تحصیلدار وغیرہ کے عہدوں کے لیے ریاستی سطح کے سول سروسز امتحانات۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate', hi: 'स्नातक', ur: 'گریجویٹ' },
      ageLimit: { en: '21-40 years (varies by state)', hi: '21-40 वर्ष (राज्यनुसार)', ur: '21-40 سال (ریاست کے لحاظ سے)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per state government rules', hi: 'राज्य सरकार के नियमों के अनुसार', ur: 'ریاستی حکومت کے قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Preliminary Exam, Main Exam, Personality Test / Interview', hi: 'प्रारंभिक परीक्षा, मुख्य परीक्षा, व्यक्तित्व परीक्षण / साक्षात्कार', ur: 'پریلیمس، مینز، انٹرویو' },
      syllabus: { en: 'General Studies, State-specific history/geography, CSAT, Essay', hi: 'सामान्य अध्ययन, राज्य विशिष्ट इतिहास/भूगोल, सीसैट, निबंध', ur: 'جنرل اسٹڈیز، ریاستی تاریخ اور جغرافیہ، مضمون' }
    },
    importantDates: {
      notification: 'Mar 2026',
      applicationStart: 'Mar 2026',
      lastDate: 'Apr 2026',
      admitCard: 'Jun 2026',
      examDate: 'Jun 2026',
      resultDate: 'Sep 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'defence-nda',
    category: 'defence',
    name: { en: 'Defence (NDA & CDS Exam)', hi: 'रक्षा (एनडीए और सीडीएस परीक्षा)', ur: 'دفاع (این ڈی اے اور سی ڈی ایس)' },
    authority: 'Union Public Service Commission',
    website: 'https://upsc.gov.in',
    frequency: 'Twice a Year',
    salaryLevel: 'Pay Level 10 (Lieutenant / Sub-Lieutenant)',
    salaryRange: '56100+',
    qualification: '10+2 / Graduate',
    overview: {
      en: 'National Defence Academy & Combined Defence Services examinations for officer-grade entry into Army, Navy, and Air Force.',
      hi: 'थल सेना, नौसेना और वायु सेना में अधिकारी स्तर के प्रवेश के लिए राष्ट्रीय रक्षा अकादमी और सम्मिलित रक्षा सेवा परीक्षा।',
      ur: 'آرمی، نیوی اور ایئر فورس میں بطور آفیسر شمولیت کے لیے این ڈی اے اور سی ڈی ایس امتحانات۔'
    },
    eligibility: {
      minQualification: { en: '10+2 (for NDA) / Graduate (for CDS)', hi: '10+2 (NDA के लिए) / स्नातक (CDS के लिए)', ur: '10+2 (NDA کے لیے) / گریجویٹ (CDS کے لیے)' },
      ageLimit: { en: '16.5-19.5 yrs (NDA) / 19-24 yrs (CDS)', hi: '16.5-19.5 वर्ष (NDA) / 19-24 वर्ष (CDS)', ur: '16.5-19.5 سال (NDA) / 19-24 سال (CDS)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per UPSC Defence norms', hi: 'यूपीएससी रक्षा मानदंडों के अनुसार', ur: 'یو پی ایس سی ڈیفنس اصولوں کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Written Exam, 5-Day SSB Interview, Strict Medical Fitness', hi: 'लिखित परीक्षा, 5-दिवसीय एसएसबी साक्षात्कार, सख्त चिकित्सा फिटनेस', ur: 'تحریری امتحان، 5 روزہ ایس ایس بی انٹرویو، میڈیکل' },
      syllabus: { en: 'Mathematics, General Ability Test (English & General Knowledge)', hi: 'गणित, सामान्य योग्यता परीक्षा (अंग्रेजी और सामान्य ज्ञान)', ur: 'ریاضی، جنرل ایبلٹی ٹیسٹ' }
    },
    importantDates: {
      notification: 'Dec 2025 / May 2026',
      applicationStart: 'Jan 2026 / Jun 2026',
      lastDate: 'Jan 2026 / Jun 2026',
      admitCard: 'Apr 2026 / Sep 2026',
      examDate: 'Apr 2026 / Sep 2026',
      resultDate: 'Jun 2026 / Nov 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'defence-afcat',
    category: 'defence',
    name: { en: 'Defence (AFCAT Air Force)', hi: 'रक्षा (एएफसीएटी वायु सेना)', ur: 'دفاع (ایف کیٹ ایئر فورس)' },
    authority: 'Indian Air Force / C-DAC',
    website: 'https://afcat.cdac.in',
    frequency: 'Twice a Year',
    salaryLevel: 'Pay Level 10 (Flying Officer)',
    salaryRange: '56100+',
    qualification: 'Graduate in Engineering/Science/Art',
    overview: {
      en: 'Air Force Common Admission Test for recruitment of Class-I Gazetted Officers in Flying and Ground Duty (Technical and Non-Technical) branches.',
      hi: 'फ्लाइंग और ग्राउंड ड्यूटी (तकनीकी और गैर-तकनीकी) शाखाओं में क्लास-I राजपत्रित अधिकारियों की भर्ती के लिए वायु सेना प्रवेश परीक्षा।',
      ur: 'فلاِئنگ اور گراؤنڈ ڈیوٹی برانچز میں آفیسر بننے کے لیے انڈین ایئر فورس کا مشترکہ داخلہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Graduate with 60% marks & Math/Physics at 10+2', hi: '60% अंकों के साथ स्नातक व 10+2 में गणित/भौतिकी', ur: 'گریجویٹ 60% نمبروں کے ساتھ' },
      ageLimit: { en: '20-24 yrs (Flying) / 20-26 yrs (Ground)', hi: '20-24 वर्ष (फ्लाइंग) / 20-26 वर्ष (ग्राउंड)', ur: '20-24 سال (فلائنگ) / 20-26 سال (گراؤنڈ)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per IAF rules', hi: 'आईएएफ नियमों के अनुसार', ur: 'انڈین ایئر فورس کے قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Online AFCAT CBT, AFSB Interview, Medicals', hi: 'ऑनलाइन AFCAT सीबीटी, एएफएसबी साक्षात्कार, मेडिकल', ur: 'آن لائن ٹیسٹ، اے ایف ایس بی انٹرویو، میڈیکل' },
      syllabus: { en: 'General Awareness, Verbal Ability in English, Numerical Ability and Reasoning and Military Aptitude', hi: 'सामान्य जागरूकता, अंग्रेजी, संख्यात्मक क्षमता और सैन्य अभिरुचि', ur: 'جنرل اویئرنس، انگلش، ریاضی اور ملٹری ایپٹیٹیوڈ' }
    },
    importantDates: {
      notification: 'Dec 2025 / Jun 2026',
      applicationStart: 'Dec 2025 / Jun 2026',
      lastDate: 'Jan 2026 / Jul 2026',
      admitCard: 'Feb 2026 / Aug 2026',
      examDate: 'Feb 2026 / Aug 2026',
      resultDate: 'Mar 2026 / Sep 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'police-recruitment',
    category: 'police',
    name: { en: 'Police Recruitment (SI & Constable)', hi: 'पुलिस भर्ती (एसआई व कांस्टेबल)', ur: 'پولیس بھرتی (ایس آئی اور کانسٹیبل)' },
    authority: 'State Police Recruitment Boards',
    website: 'https://uppbpb.gov.in',
    frequency: 'Periodic',
    salaryLevel: 'Pay Level 3-6',
    salaryRange: '30000+',
    qualification: '10+2 / Graduate',
    overview: {
      en: 'Recruitment portal for Sub-Inspector (SI), Assistant Sub-Inspector (ASI), and Police Constable positions in State Police departments.',
      hi: 'राज्य पुलिस विभागों में उप-निरीक्षक (SI), सहायक उप-निरीक्षक (ASI) और पुलिस कांस्टेबल पदों के लिए आधिकारिक भर्ती पोर्टल।',
      ur: 'ریاستی پولیس محکموں میں سب انسپکٹر (SI) اور کانسٹیبل کے عہدوں پر بھرتی کا سرکاری پورٹل۔'
    },
    eligibility: {
      minQualification: { en: '10+2 (Constable) / Graduate (SI)', hi: '10+2 (कांस्टेबल) / स्नातक (एसआई)', ur: '10+2 (کانسٹیبل) / گریجویٹ (ایس آئی)' },
      ageLimit: { en: '18-28 years (varies by post)', hi: '18-28 वर्ष (पदानुसार)', ur: '18-28 سال (عہدے کے لحاظ سے)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per State Police quota rules', hi: 'राज्य पुलिस कोटा नियमों के अनुसार', ur: 'ریاستی پولیس کوٹہ کے قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Written Exam, Physical Efficiency Test (PET), Physical Measurement Test (PMT), Medical', hi: 'लिखित परीक्षा, शारीरिक दक्षता परीक्षा (PET), शारीरिक मापदंड (PMT), मेडिकल', ur: 'تحریری امتحان، جسمانی ٹیسٹ (PET/PMT)، میڈیکل' },
      syllabus: { en: 'General Hindi/English, General Knowledge, Numerical & Mental Ability, Reasoning', hi: 'सामान्य हिंदी/अंग्रेजी, सामान्य ज्ञान, संख्यात्मक व मानसिक योग्यता, तर्क', ur: 'جنرل نالج، ریاضی، ریزننگ اور زبان' }
    },
    importantDates: {
      notification: 'Mar 2026',
      applicationStart: 'Apr 2026',
      lastDate: 'May 2026',
      admitCard: 'Jul 2026',
      examDate: 'Aug 2026',
      resultDate: 'Nov 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'jee-main',
    category: 'engineering',
    name: { en: 'JEE Main (Engineering Entrance)', hi: 'जेईई मेन (इंजीनियरिंग प्रवेश)', ur: 'جے ای ای مین (انجینئرنگ داخلہ)' },
    authority: 'National Testing Agency (NTA)',
    website: 'https://jeemain.nta.nic.in',
    frequency: 'Twice a Year (Jan & Apr)',
    salaryLevel: 'Admission to NITs, IIITs, CFTIs',
    salaryRange: 'B.Tech / B.E. Degree',
    qualification: '10+2 with PCM',
    overview: {
      en: 'National screening test for admission to undergraduate engineering programs at NITs, IIITs, and Centrally Funded Technical Institutions.',
      hi: 'एनआईटी, आईआईआईटी और केंद्रीय रूप से वित्त पोषित तकनीकी संस्थानों में स्नातक इंजीनियरिंग कार्यक्रमों में प्रवेश के लिए राष्ट्रीय परीक्षा।',
      ur: 'این آئی ٹی اور آئی آئی آئی ٹی وغیرہ میں انجینئرنگ ڈگری کے لیے قومی سطح کا داخلہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10+2 with Physics, Chemistry, Mathematics', hi: 'भौतिकी, रसायन विज्ञान, गणित के साथ 10+2', ur: 'فزکس، کیمسٹری اور ریاضی کے ساتھ 10+2' },
      ageLimit: { en: 'No age limit (must have passed 10+2 in 2024, 2025, or appearing in 2026)', hi: 'कोई आयु सीमा नहीं (2024, 2025 में 10+2 उत्तीर्ण या 2026 में उपस्थित)', ur: 'کوئی عمر کی حد نہیں (2024، 2025 یا 2026 میں 10+2 پاس کی ہو)' },
      nationality: { en: 'Indian / NRI / OCI', hi: 'भारतीय / एनआरआई / ओसीआई', ur: 'بھارتی / این آر آئی' },
      reservationRules: { en: 'Gen-EWS 10%, OBC-NCL 27%, SC 15%, ST 7.5%, PwD 5%', hi: 'सामान्य-ईडब्ल्यूएस 10%, ओबीसी 27%, एससी 15%, एसटी 7.5%, दिव्यांग 5%', ur: 'سرکاری قواعد کے مطابق کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'Computer Based Test (CBT), JoSAA / CSAB Counselling', hi: 'कंप्यूटर आधारित परीक्षा (CBT), जोसा / सीएसएबी काउंसलिंग', ur: 'آن لائن ٹیسٹ اور جوکسا کونسلنگ' },
      syllabus: { en: '11th & 12th CBSE/State Board Physics, Chemistry, and Mathematics', hi: '11वीं और 12वीं सीबीएसई/राज्य बोर्ड भौतिकी, रसायन विज्ञान और गणित', ur: 'گیارہویں اور بارہویں کی فزکس، کیمسٹری اور ریاضی' }
    },
    importantDates: {
      notification: 'Nov 2025 / Feb 2026',
      applicationStart: 'Nov 2025 / Mar 2026',
      lastDate: 'Dec 2025 / Mar 2026',
      admitCard: 'Jan 2026 / Apr 2026',
      examDate: 'Jan 2026 / Apr 2026',
      resultDate: 'Feb 2026 / May 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'jee-adv',
    category: 'engineering',
    name: { en: 'JEE Advanced (IIT Entrance)', hi: 'जेईई एडवांस्ड (आईआईटी प्रवेश)', ur: 'جے ای ای ایڈوانسڈ (آئی آئی ٹی داخلہ)' },
    authority: 'IIT Joint Admission Board (JAB)',
    website: 'https://jeeadv.ac.in',
    frequency: 'Annual',
    salaryLevel: 'Admission to IITs',
    salaryRange: 'B.Tech / Integrated M.Tech',
    qualification: 'JEE Main Top 2,50,000 Rankers',
    overview: {
      en: 'The second stage of Joint Entrance Examination for exclusive admission to prestigious Indian Institutes of Technology (IITs).',
      hi: 'प्रतिष्ठित भारतीय प्रौद्योगिकी संस्थानों (IIT) में विशेष प्रवेश के लिए संयुक्त प्रवेश परीक्षा का दूसरा चरण।',
      ur: 'بھارت کے ممتاز آئی آئی ٹی اداروں میں داخلے کے لیے مسابقتی امتحان کا دوسرا اور اعلیٰ مرحلہ۔'
    },
    eligibility: {
      minQualification: { en: 'Must be among Top 2.5 Lakh rank holders in JEE Main B.E./B.Tech', hi: 'जेईई मेन में शीर्ष 2.5 लाख रैंक धारकों में होना अनिवार्य', ur: 'جے ای ای مین میں ٹاپ 2.5 لاکھ امیدواروں میں شامل ہونا ضروری ہے' },
      ageLimit: { en: 'Born on or after Oct 1, 2001 (5 yr relaxation for SC/ST/PwD)', hi: '1 अक्टूबर 2001 को या उसके बाद जन्म (SC/ST/PwD के लिए 5 वर्ष की छूट)', ur: '1 اکتوبر 2001 کے بعد پیدائش (SC/ST کے لیے 5 سال کی چھوٹ)' },
      nationality: { en: 'Indian / OCI / PIO / Foreign Nationals', hi: 'भारतीय / ओसीआई / पीआईओ / विदेशी नागरिक', ur: 'بھارتی اور او سی آئی شہری' },
      reservationRules: { en: 'As per Central Government norms for IITs', hi: 'आईआईटी के लिए केंद्र सरकार के मानदंडों के अनुसार', ur: 'آئی آئی ٹی کے سرکاری قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Paper 1 & Paper 2 (Both Compulsory CBT), JoSAA Counselling', hi: 'पेपर 1 और पेपर 2 (दोनों अनिवार्य CBT), जोसा काउंसलिंग', ur: 'پیپر 1 اور پیپر 2 (دونوں لازمی آن لائن ٹیسٹ)' },
      syllabus: { en: 'Advanced Physics, Chemistry, and Mathematics concepts with analytical problem-solving', hi: 'विश्लेषणात्मक समस्या समाधान के साथ उन्नत भौतिकी, रसायन विज्ञान और गणित', ur: 'ایڈوانسڈ فزکس، کیمسٹری اور ریاضی' }
    },
    importantDates: {
      notification: 'Apr 2026',
      applicationStart: 'Apr 2026',
      lastDate: 'May 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'neet-ug',
    category: 'medical',
    name: { en: 'NEET UG (Medical Entrance)', hi: 'नीट यूजी (मेडिकल प्रवेश)', ur: 'نیٹ یو جی (میڈیکل داخلہ)' },
    authority: 'National Testing Agency (NTA)',
    website: 'https://neet.nta.nic.in',
    frequency: 'Annual',
    salaryLevel: 'Admission to MBBS, BDS, BAMS, BHMS',
    salaryRange: 'Medical Degree Course',
    qualification: '10+2 with PCB & English',
    overview: {
      en: 'Single uniform national entrance exam for admission to MBBS, BDS, BAMS, BHMS, and nursing courses across all Indian medical colleges.',
      hi: 'सभी भारतीय मेडिकल कॉलेजों में एमबीबीएस, बीडीएस, बीएएमएस, बीएचएमएस और नर्सिंग पाठ्यक्रमों में प्रवेश के लिए एकल समान राष्ट्रीय परीक्षा।',
      ur: 'بھارت کے تمام میڈیکل اور ڈینٹل کالجوں میں ایم بی بی ایس اور بی ڈی ایس وغیرہ میں داخلے کے لیے واحد قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10+2 with Physics, Chemistry, Biology/Biotech, and English (min 50% for Gen)', hi: 'भौतिकी, रसायन, जीव विज्ञान/बायोटेक और अंग्रेजी के साथ 10+2 (सामान्य के लिए न्यूनतम 50%)', ur: 'فزکس، کیمسٹری اور بیالوجی کے ساتھ 10+2' },
      ageLimit: { en: 'Minimum 17 years as on Dec 31 of admission year (No upper age limit)', hi: 'प्रवेश वर्ष के 31 दिसंबर को न्यूनतम 17 वर्ष (कोई ऊपरी आयु सीमा नहीं)', ur: 'کم از کم 17 سال (کوئی بالائی عمر کی حد نہیں)' },
      nationality: { en: 'Indian / NRI / OCI / Foreign Nationals', hi: 'भारतीय / एनआरआई / ओसीआई / विदेशी नागरिक', ur: 'بھارتی اور این آر آئی شہری' },
      reservationRules: { en: '15% All India Quota, 85% State Quota with standard constitutional reservation', hi: '15% अखिल भारतीय कोटा, मानक आरक्षण के साथ 85% राज्य कोटा', ur: '15% آل انڈیا کوٹہ، 85% ریاستی کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'Pen & Paper OMR Based Test, MCC / State NEET Counselling', hi: 'पेन और पेपर ओएमआर आधारित परीक्षा, एमसीसी / राज्य नीट काउंसलिंग', ur: 'پین اور پیپر ٹیسٹ اور ایم سی سی کونسلنگ' },
      syllabus: { en: '11th and 12th NCERT Biology (Botany & Zoology), Physics, and Chemistry', hi: '11वीं और 12वीं एनसीईआरटी जीव विज्ञान (वनस्पति व प्राणी विज्ञान), भौतिकी और रसायन विज्ञान', ur: 'این سی ای آر ٹی گیارہویں اور بارہویں کی بیالوجی، فزکس اور کیمسٹری' }
    },
    importantDates: {
      notification: 'Feb 2026',
      applicationStart: 'Feb 2026',
      lastDate: 'Mar 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'aiims-ug',
    category: 'medical',
    name: { en: 'AIIMS (UG Admissions)', hi: 'एम्स (स्नातक प्रवेश)', ur: 'ایمز (یو جی داخلہ)' },
    authority: 'All India Institute of Medical Sciences / NTA',
    website: 'https://www.aiimsexams.ac.in',
    frequency: 'Annual (through NEET UG)',
    salaryLevel: 'MBBS / BSc Nursing at AIIMS',
    salaryRange: 'Premier Medical Degree',
    qualification: '10+2 with PCB (min 60% marks)',
    overview: {
      en: 'Official admission portal for MBBS and BSc Nursing programs at AIIMS New Delhi and all regional AIIMS institutions across India.',
      hi: 'एम्स नई दिल्ली और पूरे भारत में सभी क्षेत्रीय एम्स संस्थानों में एमबीबीएस और बीएससी नर्सिंग कार्यक्रमों के लिए आधिकारिक प्रवेश पोर्टल।',
      ur: 'ایمز دہلی اور بھارت کے دیگر تمام ایمز اداروں میں ایم بی بی ایس اور نرسنگ میں داخلے کا سرکاری پورٹل۔'
    },
    eligibility: {
      minQualification: { en: '10+2 with Physics, Chemistry, Biology & English with at least 60% aggregate (50% for SC/ST)', hi: 'भौतिकी, रसायन, जीव विज्ञान और अंग्रेजी में कम से कम 60% अंकों के साथ 10+2', ur: 'فزکس، کیمسٹری اور بیالوجی کے ساتھ 10+2 میں کم از کم 60% نمبر' },
      ageLimit: { en: 'Minimum 17 years of age', hi: 'न्यूनतम 17 वर्ष की आयु', ur: 'کم از کم 17 سال' },
      nationality: { en: 'Indian Citizen / OCI', hi: 'भारतीय नागरिक / ओसीआई', ur: 'بھارتی شہری / او سی آئی' },
      reservationRules: { en: 'As per Central Govt reservation policies for AIIMS institutions', hi: 'एम्स संस्थानों के लिए केंद्र सरकार की आरक्षण नीतियों के अनुसार', ur: 'مرکزی حکومت کے قواعد کے مطابق کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'NEET UG Exam score for MBBS; AIIMS Nursing entrance CBT for B.Sc courses, followed by MCC counselling', hi: 'एमबीबीएस के लिए नीट यूजी स्कोर; बीएससी के लिए एम्स नर्सिंग सीबीटी, फिर एमसीसी काउंसलिंग', ur: 'نیٹ یو جی اسکور اور ایم سی سی کونسلنگ' },
      syllabus: { en: 'NCERT Physics, Chemistry, Biology, plus General Knowledge & Aptitude for nursing tests', hi: 'एनसीईआरटी भौतिकी, रसायन, जीव विज्ञान, साथ ही नर्सिंग परीक्षणों के लिए सामान्य ज्ञान', ur: 'فزکس، کیمسٹری، بیالوجی اور جنرل نالج' }
    },
    importantDates: {
      notification: 'Mar 2026',
      applicationStart: 'Mar 2026',
      lastDate: 'Apr 2026',
      admitCard: 'May 2026',
      examDate: 'May / Jun 2026',
      resultDate: 'Jun / Jul 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'cuet-ug',
    category: 'scholarships',
    name: { en: 'CUET UG (University Entrance)', hi: 'सीयूईटी यूजी (विश्वविद्यालय प्रवेश)', ur: 'سی یو ای ٹی یو جی' },
    authority: 'National Testing Agency (NTA)',
    website: 'https://cuet.nta.nic.in',
    frequency: 'Annual',
    salaryLevel: 'Admission to Central & State Universities',
    salaryRange: 'Undergraduate Degree',
    qualification: '10+2 Passed or Appearing',
    overview: {
      en: 'Common University Entrance Test for admission to undergraduate programs in Central Universities, State, Deemed, and Private universities.',
      hi: 'केंद्रीय विश्वविद्यालयों, राज्य, मानद और निजी विश्वविद्यालयों में स्नातक कार्यक्रमों में प्रवेश के लिए संयुक्त विश्वविद्यालय प्रवेश परीक्षा।',
      ur: 'بھارت کی تمام مرکزی، ریاستی اور نجی یونیورسٹیوں میں گریجویشن کے داخلے کے لیے مشترکہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10+2 or equivalent examination from a recognized board', hi: 'किसी मान्यता प्राप्त बोर्ड से 10+2 या समकक्ष परीक्षा', ur: 'تسلیم شدہ بورڈ سے 10+2 یا مساوی امتحان' },
      ageLimit: { en: 'No age limit for candidates appearing in CUET UG', hi: 'सीयूईटी यूजी में उपस्थित होने वाले उम्मीदवारों के लिए कोई आयु सीमा नहीं', ur: 'کوئی عمر کی حد نہیں' },
      nationality: { en: 'Indian / Foreign Nationals', hi: 'भारतीय / विदेशी नागरिक', ur: 'بھارتی اور غیر ملکی طلباء' },
      reservationRules: { en: 'As per respective participating university regulations', hi: 'संबंधित भाग लेने वाले विश्वविद्यालय के नियमों के अनुसार', ur: 'متعلقہ یونیورسٹی کے قواعد کے مطابق' }
    },
    selectionProcess: {
      stages: { en: 'Computer Based Test (CBT), followed by individual university counseling portals', hi: 'कंप्यूटर आधारित परीक्षा (CBT), इसके बाद व्यक्तिगत विश्वविद्यालय काउंसलिंग पोर्टल', ur: 'آن لائن ٹیسٹ اور متعلقہ یونیورسٹی کونسلنگ' },
      syllabus: { en: 'Section IA/IB Languages, Section II Domain Specific Subjects (12th NCERT), Section III General Test', hi: 'खंड IA/IB भाषाएं, खंड II विषय विशिष्ट (12वीं एनसीईआरटी), खंड III सामान्य परीक्षण', ur: 'زبان، 12ویں کے مضامین اور جنرل ٹیسٹ' }
    },
    importantDates: {
      notification: 'Feb 2026',
      applicationStart: 'Feb 2026',
      lastDate: 'Mar 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'ugc-net',
    category: 'teaching',
    name: { en: 'UGC NET (Teaching & Fellowship)', hi: 'यूजीसी नेट (शिक्षण व फेलोशिप)', ur: 'یو جی سی نیٹ' },
    authority: 'National Testing Agency / UGC',
    website: 'https://ugcnet.nta.ac.in',
    frequency: 'Twice a Year (Jun & Dec)',
    salaryLevel: 'JRF Stipend ₹37,000/mo / Assistant Prof Pay Level 10',
    salaryRange: '₹37,000+ Stipend / Salary',
    qualification: 'Master Degree (Min 55%)',
    overview: {
      en: 'National Eligibility Test to determine eligibility for Assistant Professorship and Junior Research Fellowship (JRF) in Indian universities.',
      hi: 'भारतीय विश्वविद्यालयों में सहायक प्रोफेसर और जूनियर रिसर्च फेलोशिप (JRF) के लिए पात्रता निर्धारित करने हेतु राष्ट्रीय पात्रता परीक्षा।',
      ur: 'یونیورسٹیوں میں اسسٹنٹ پروفیسر اور جونیئر ریسرچ فیلوشپ (JRF) کی اہلیت کے لیے قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Master Degree or equivalent with at least 55% marks (50% for reserved categories)', hi: 'कम से कम 55% अंकों के साथ स्नातकोत्तर (आरक्षित वर्गों के लिए 50%)', ur: 'ماسٹر ڈگری کم از کم 55% نمبروں کے ساتھ' },
      ageLimit: { en: 'JRF: Max 30 years; Assistant Professor: No upper age limit', hi: 'जेआरएफ: अधिकतम 30 वर्ष; सहायक प्रोफेसर: कोई ऊपरी आयु सीमा नहीं', ur: 'جے آر ایف کے لیے 30 سال؛ اسسٹنٹ پروفیسر کے لیے کوئی حد نہیں' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'Government of India reservation policies apply', hi: 'भारत सरकार की आरक्षण नीतियां लागू', ur: 'سرکاری کوٹہ کے قواعد' }
    },
    selectionProcess: {
      stages: { en: 'Computer Based Test (Paper 1: General Teaching Aptitude, Paper 2: Subject Specific)', hi: 'कंप्यूटर आधारित परीक्षा (पेपर 1: सामान्य शिक्षण योग्यता, पेपर 2: विषय विशिष्ट)', ur: 'آن لائن ٹیسٹ (پیپر 1: جنرل ٹیچنگ، پیپر 2: متعلقہ مضمون)' },
      syllabus: { en: 'Teaching/Research Aptitude, Reasoning, Reading Comprehension, plus 83 specialization subjects', hi: 'शिक्षण/अनुसंधान योग्यता, तर्क, गद्यांश, साथ ही 83 विशेषज्ञता विषय', ur: 'ٹیچنگ اور ریسرچ ایپٹیٹیوڈ اور 83 خصوصی مضامین' }
    },
    importantDates: {
      notification: 'Apr / Oct 2026',
      applicationStart: 'Apr / Oct 2026',
      lastDate: 'May / Nov 2026',
      admitCard: 'Jun / Dec 2026',
      examDate: 'Jun / Dec 2026',
      resultDate: 'Jul / Jan 2027'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'csir-net',
    category: 'teaching',
    name: { en: 'CSIR NET (Science Fellowship)', hi: 'सीएसआईआर नेट (विज्ञान फेलोशिप)', ur: 'سی ایس آئی آر نیٹ' },
    authority: 'National Testing Agency / CSIR',
    website: 'https://csirnet.nta.ac.in',
    frequency: 'Twice a Year',
    salaryLevel: 'JRF ₹37,000/mo + HRA / Lecturer Pay Level 10',
    salaryRange: '₹37,000+ Stipend / Salary',
    qualification: 'M.Sc / B.Tech / MBBS / Integrated BS-MS',
    overview: {
      en: 'National level test for Junior Research Fellowship and Lectureship in Science streams (Chemical, Earth, Life, Mathematical, Physical Sciences).',
      hi: 'विज्ञान धाराओं (रासायनिक, पृथ्वी, जीवन, गणितीय, भौतिक विज्ञान) में जेआरएफ और व्याख्याता के लिए राष्ट्रीय स्तर की परीक्षा।',
      ur: 'سائنس کے شعبوں (کیمسٹری، فزکس، لائف سائنسز وغیرہ) میں جونیئر ریسرچ فیلوشپ اور لیکچررشپ کے لیے قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'M.Sc or equivalent degree/Integrated BS-MS/BS-4 yr/B.E/B.Tech/B.Pharma/MBBS with 55% marks', hi: '55% अंकों के साथ एमएससी या समकक्ष / बीटेक / एमबीबीएस', ur: 'ایم ایس سی یا بی ٹیک / ایم بی بی ایس 55% نمبروں کے ساتھ' },
      ageLimit: { en: 'JRF: Max 30 years (Relaxation for SC/ST/OBC/Women); Lectureship: No upper limit', hi: 'जेआरएफ: अधिकतम 30 वर्ष (छूट लागू); व्याख्याता: कोई ऊपरी सीमा नहीं', ur: 'جے آر ایف کے لیے 30 سال؛ لیکچررشپ کے لیے کوئی حد نہیں' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'Standard Central Govt quota rules apply', hi: 'मानक केंद्र सरकार कोटा नियम लागू', ur: 'مرکزی حکومت کے کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'Single CBT Exam with Part A (General Science), Part B (Subject Basic), Part C (Advanced Analytical)', hi: 'भाग ए (सामान्य विज्ञान), भाग बी (विषय मूल), भाग सी (उन्नत विश्लेषणात्मक) के साथ एकल सीबीटी परीक्षा', ur: 'آن لائن ٹیسٹ (پارٹ اے: جنرل سائنس، پارٹ بی اور سی: متعلقہ مضمون)' },
      syllabus: { en: 'Chemical Sciences, Earth Sciences, Life Sciences, Mathematical Sciences, Physical Sciences', hi: 'रासायनिक विज्ञान, पृथ्वी विज्ञान, जीवन विज्ञान, गणितीय विज्ञान, भौतिक विज्ञान', ur: 'کیمیکل، ارتھ، لائف، میتھمیٹیکل اور فزیکل سائنسز' }
    },
    importantDates: {
      notification: 'Mar / Sep 2026',
      applicationStart: 'Mar / Sep 2026',
      lastDate: 'Apr / Oct 2026',
      admitCard: 'May / Nov 2026',
      examDate: 'Jun / Dec 2026',
      resultDate: 'Jul / Jan 2027'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'gate-exam',
    category: 'engineering',
    name: { en: 'GATE (Engineering & PSU Careers)', hi: 'गेट (इंजीनियरिंग व पीएसयू करियर)', ur: 'گیٹ (انجینئرنگ اور پی ایس یو)' },
    authority: 'IITs & IISc Bangalore',
    website: 'https://gate2026.iitr.ac.in',
    frequency: 'Annual (Feb)',
    salaryLevel: 'M.Tech Stipend ₹12,400/mo / PSU Pay Level 10 (₹60,000+)',
    salaryRange: '₹60,000+ in PSUs / PG Stipend',
    qualification: 'B.E. / B.Tech / B.Arch / Master Degree',
    overview: {
      en: 'Graduate Aptitude Test in Engineering for M.Tech/Ph.D admissions at IITs/IISc and executive recruitment in top PSUs (ONGC, NTPC, IOCL, BHEL).',
      hi: 'आईआईटी/आईआईएससी में एम.टेक/पीएचडी प्रवेश और शीर्ष पीएसयू (ONGC, NTPC, IOCL, BHEL) में अधिकारी भर्ती के लिए गेट परीक्षा।',
      ur: 'آئی آئی ٹی اداروں میں ایم ٹیک اور اعلیٰ سرکاری کمپنیوں (PSUs) جیسے ONGC اور NTPC میں آفیسر بھرتی کے لیے امتحان۔'
    },
    eligibility: {
      minQualification: { en: '3rd or higher year of any undergraduate degree program in Engineering/Technology/Architecture/Science/Commerce/Arts', hi: 'इंजीनियरिंग/प्रौद्योगिकी/विज्ञान/वाणिज्य/कला में स्नातक डिग्री कार्यक्रम का तीसरा या उच्चतर वर्ष', ur: 'انجینئرنگ، سائنس یا متعلقہ شعبے میں ڈگری کا تیسرا سال یا گریجویٹ' },
      ageLimit: { en: 'No age limit for GATE appearance (PSUs have separate age limits like 28-30 yrs)', hi: 'गेट के लिए कोई आयु सीमा नहीं (पीएसयू में अलग आयु सीमा जैसे 28-30 वर्ष होती है)', ur: 'گیٹ کے लिए کوئی عمر کی حد نہیں (پی ایس یو کے لیے 28-30 سال)' },
      nationality: { en: 'Indian / Foreign Nationals', hi: 'भारतीय / विदेशी नागरिक', ur: 'بھارتی اور غیر ملکی امیدوار' },
      reservationRules: { en: 'As per Govt norms for educational institutes and PSU hiring', hi: 'शैक्षणिक संस्थानों और पीएसयू भर्ती के लिए सरकारी मानदंडों के अनुसार', ur: 'سرکاری کوٹہ کے قواعد' }
    },
    selectionProcess: {
      stages: { en: '3-Hour Computer Based Test (30 test papers), followed by COAP/CCMT counselling or PSU interview', hi: '3-घंटे की सीबीटी परीक्षा, उसके बाद COAP/CCMT काउंसलिंग या पीएसयू साक्षात्कार', ur: '3 گھنٹے کا آن لائن ٹیسٹ اور پی ایس یو انٹرویو' },
      syllabus: { en: 'General Aptitude (15 marks), Engineering Mathematics, and core technical discipline subjects (85 marks)', hi: 'सामान्य योग्यता (15 अंक), इंजीनियरिंग गणित, और मुख्य तकनीकी विषय (85 अंक)', ur: 'جنرل ایپٹیٹیوڈ، ریاضی اور متعلقہ انجینئرنگ مضمون' }
    },
    importantDates: {
      notification: 'Aug 2025',
      applicationStart: 'Aug 2025',
      lastDate: 'Oct 2025',
      admitCard: 'Jan 2026',
      examDate: 'Feb 2026',
      resultDate: 'Mar 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'cat-exam',
    category: 'mba',
    name: { en: 'CAT (IIM MBA Entrance)', hi: 'कैट (आईआईएम एमबीए प्रवेश)', ur: 'کیٹ (آئی آئی ایم ایم بی اے)' },
    authority: 'Indian Institutes of Management (IIMs)',
    website: 'https://iimcat.ac.in',
    frequency: 'Annual (Nov)',
    salaryLevel: 'Admission to Top IIMs & B-Schools',
    salaryRange: 'MBA / PGDM Degree',
    qualification: 'Graduate (Min 50%)',
    overview: {
      en: 'Common Admission Test conducted by IIMs for admission to premier management programs (MBA/PGDM) across India.',
      hi: 'भारत भर में प्रमुख प्रबंधन कार्यक्रमों (MBA/PGDM) में प्रवेश के लिए आईआईएम द्वारा आयोजित कॉमन एडमिशन टेस्ट।',
      ur: 'بھارت کے بہترین مینجمنٹ اداروں (IIMs) میں ایم بی اے اور پی جی ڈی ایم میں داخلے کے لیے مشترکہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Bachelor Degree with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD)', hi: 'कम से कम 50% अंकों या समकक्ष सीजीपीए के साथ स्नातक डिग्री (एससी/एसटी/दिव्यांग के लिए 45%)', ur: 'کم از کم 50% نمبروں کے ساتھ گریجویشن ڈگری' },
      ageLimit: { en: 'No age limit for appearing in CAT', hi: 'कैट में उपस्थित होने के लिए कोई आयु सीमा नहीं', ur: 'کوئی عمر کی حد نہیں' },
      nationality: { en: 'Indian / Foreign Nationals', hi: 'भारतीय / विदेशी नागरिक', ur: 'بھارتی اور غیر ملکی امیدوار' },
      reservationRules: { en: '15% SC, 7.5% ST, 27% OBC-NCL, 10% EWS, 5% PwD across IIM seats', hi: 'आईआईएम सीटों में 15% एससी, 7.5% एसटी, 27% ओबीसी, 10% ईडब्ल्यूएस, 5% दिव्यांग', ur: 'آئی آئی ایم کی نشستوں میں سرکاری کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'Computer Based Test (CBT), followed by Written Ability Test (WAT), Group Discussion (GD), & Personal Interview (PI)', hi: 'सीबीटी परीक्षा, उसके बाद लिखित क्षमता परीक्षण (WAT), समूह चर्चा (GD) और साक्षात्कार (PI)', ur: 'آن لائن ٹیسٹ، گروپ ڈسکشن اور پرسنل انٹرویو' },
      syllabus: { en: 'Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA)', hi: 'मौखिक योग्यता व गद्यांश (VARC), डेटा व्याख्या व तार्किक क्षमता (DILR), मात्रात्मक योग्यता (QA)', ur: 'وربل ایبلٹی، ڈیٹا انٹرپریٹیشن، لاجیکل ریزننگ، اور ریاضی' }
    },
    importantDates: {
      notification: 'Jul 2026',
      applicationStart: 'Aug 2026',
      lastDate: 'Sep 2026',
      admitCard: 'Oct 2026',
      examDate: 'Nov 2026',
      resultDate: 'Jan 2027'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'clat-exam',
    category: 'law',
    name: { en: 'CLAT (National Law Entrance)', hi: 'क्लैट (राष्ट्रीय कानून प्रवेश)', ur: 'کلیٹ (نیشنل لاء داخلہ)' },
    authority: 'Consortium of National Law Universities',
    website: 'https://consortiumofnlus.ac.in',
    frequency: 'Annual (Dec)',
    salaryLevel: 'Admission to 24 NLUs',
    salaryRange: 'BA LLB / LLM Degree',
    qualification: '10+2 (for UG) / LLB (for PG)',
    overview: {
      en: 'Common Law Admission Test for admission to undergraduate (5-year integrated BA LLB) and postgraduate (LLM) law programs at 24 National Law Universities.',
      hi: '24 राष्ट्रीय कानून विश्वविद्यालयों में स्नातक (5-वर्षीय एकीकृत बीए एलएलबी) और स्नातकोत्तर (एलएलएम) कानून कार्यक्रमों में प्रवेश के लिए परीक्षा।',
      ur: 'بھارت کی 24 ممتاز نیشنل لاء یونیورسٹیوں میں 5 سالہ ایل ایل بی اور ایل ایل ایم میں داخلے کا مشترکہ امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'UG: 10+2 with min 45% marks (40% for SC/ST); PG: LLB with min 50% marks', hi: 'यूजी: न्यूनतम 45% अंकों के साथ 10+2; पीजी: न्यूनतम 50% अंकों के साथ एलएलबी', ur: 'یو جی: 45% نمبروں کے साथ 10+2؛ پی جی: 50% نمبروں کے ساتھ ایل ایل بی' },
      ageLimit: { en: 'No upper age limit for UG or PG CLAT', hi: 'यूजी या पीजी क्लैट के लिए कोई ऊपरी आयु सीमा नहीं', ur: 'کوئی بالائی عمر کی حد نہیں' },
      nationality: { en: 'Indian Nationals / NRI / OCI / PIO', hi: 'भारतीय नागरिक / एनआरआई / ओसीआई / पीआईओ', ur: 'بھارتی اور این آر آئی شہری' },
      reservationRules: { en: 'As per individual NLU statutes and state domicile reservations', hi: 'व्यक्तिगत एनएलयू विधियों और राज्य अधिवास आरक्षण के अनुसार', ur: 'متعلقہ لاء یونیورسٹی کے کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'Offline Pen & Paper Test (120 questions), Centralized Online Counselling', hi: 'ऑफलाइन पेन और पेपर परीक्षा (120 प्रश्न), केंद्रीकृत ऑनलाइन काउंसलिंग', ur: 'آف لائن پین اور پیپر ٹیسٹ اور مرکزی کونسلنگ' },
      syllabus: { en: 'English Language, Current Affairs & General Knowledge, Legal Reasoning, Logical Reasoning, Quantitative Techniques', hi: 'अंग्रेजी भाषा, समसामयिक मामले व सामान्य ज्ञान, कानूनी तर्क, तार्किक क्षमता, मात्रात्मक तकनीक', ur: 'انگلش، کرنٹ افیئرز، لیگل ریزننگ، لاجیکل ریزننگ اور بنیادی ریاضی' }
    },
    importantDates: {
      notification: 'Jul 2026',
      applicationStart: 'Jul 2026',
      lastDate: 'Nov 2026',
      admitCard: 'Nov 2026',
      examDate: 'Dec 2026',
      resultDate: 'Dec 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'nift-exam',
    category: 'iti-diploma',
    name: { en: 'NIFT (Fashion Design Entrance)', hi: 'निफ्ट (फैशन डिजाइन प्रवेश)', ur: 'نِفٹ (فیشن ڈیزائن داخلہ)' },
    authority: 'National Institute of Fashion Technology / NTA',
    website: 'https://www.nift.ac.in',
    frequency: 'Annual',
    salaryLevel: 'Admission to 18 NIFT Campuses',
    salaryRange: 'B.Des / M.Des / B.F.Tech Degree',
    qualification: '10+2 (any stream for B.Des; PCM for BFTech)',
    overview: {
      en: 'National entrance examination for design, management, and fashion technology degree programs across all 18 NIFT campuses in India.',
      hi: 'भारत में सभी 18 निफ्ट परिसरों में डिजाइन, प्रबंधन और फैशन प्रौद्योगिकी डिग्री कार्यक्रमों के लिए राष्ट्रीय प्रवेश परीक्षा।',
      ur: 'بھارت کے 18 نِفٹ کیمپس میں فیشن ڈیزائن اور ٹیکنالوجی ڈگری پروگراموں میں داخلے کا قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10+2 from any recognized board (PCM required for B.F.Tech)', hi: 'किसी भी मान्यता प्राप्त बोर्ड से 10+2 (बी.एफ.टेक के लिए पीसीएम आवश्यक)', ur: 'کسی بھی تسلیم شدہ بورڈ से 10+2' },
      ageLimit: { en: 'Maximum 24 years as on August 1 of admission year (5 years relaxation for SC/ST/PwD)', hi: 'प्रवेश वर्ष के 1 अगस्त को अधिकतम 24 वर्ष (छूट लागू)', ur: 'زیادہ سے زیادہ 24 سال (SC/ST کے لیے 5 سال کی چھوٹ)' },
      nationality: { en: 'Indian Citizen / NRI / Foreign Nationals', hi: 'भारतीय नागरिक / एनआरआई / विदेशी नागरिक', ur: 'بھارتی اور غیر ملکی طلباء' },
      reservationRules: { en: 'Standard Central Govt reservation (SC 15%, ST 7.5%, OBC 27%, EWS 10%)', hi: 'मानक केंद्र सरकार आरक्षण नियम लागू', ur: 'مرکزی حکومت کے کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'Creative Ability Test (CAT), General Ability Test (GAT), Situation Test / Personal Interview', hi: 'क्रिएटिव एबिलिटी टेस्ट (CAT), जनरल एबिलिटी टेस्ट (GAT), सिचुएशन टेस्ट / साक्षात्कार', ur: 'کریئیٹو ٹیسٹ، جنرل ٹیسٹ اور انٹرویو' },
      syllabus: { en: 'Quantitative Ability, Communication Ability, English Comprehension, Analytical Reasoning, Design & Drawing Creativity', hi: 'मात्रात्मक क्षमता, संचार क्षमता, अंग्रेजी समझ, विश्लेषणात्मक तर्क, डिजाइन और ड्राइंग रचनात्मकता', ur: 'انگلش، ریزننگ، ریاضی، اور ڈیزائن و ڈرائنگ صلاحیت' }
    },
    importantDates: {
      notification: 'Nov 2025',
      applicationStart: 'Dec 2025',
      lastDate: 'Jan 2026',
      admitCard: 'Jan 2026',
      examDate: 'Feb 2026',
      resultDate: 'Mar / Apr 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'nid-exam',
    category: 'iti-diploma',
    name: { en: 'NID (Design Aptitude Test DAT)', hi: 'एनआईडी (डिजाइन योग्यता परीक्षा)', ur: 'این آئی ڈی (ڈیزائن ایپٹیٹیوڈ ٹیسٹ)' },
    authority: 'National Institute of Design (NID)',
    website: 'https://admissions.nid.edu',
    frequency: 'Annual',
    salaryLevel: 'Admission to NID Ahmedabad & Campuses',
    salaryRange: 'B.Des / M.Des Premier Design Degree',
    qualification: '10+2 passed or appearing in any stream',
    overview: {
      en: 'Design Aptitude Test (DAT) Prelims and Mains for admission to B.Des and M.Des courses at NID Ahmedabad, Gandhinagar, Bengaluru, and new NIDs.',
      hi: 'एनआईडी अहमदाबाद, गांधीनगर, बेंगलुरु और नए एनआईडी में बी.डेस और एम.डेस पाठ्यक्रमों में प्रवेश के लिए डिजाइन योग्यता परीक्षा (DAT)।',
      ur: 'نیشنل انسٹی ٹیوٹ آف ڈیزائن (NID) کے ممتاز کیمپس میں بی ڈیزائن اور ایم ڈیزائن میں داخلے کا امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Passed or appearing in 10+2 from any recognized board (Science, Commerce, Arts)', hi: 'किसी भी मान्यता प्राप्त बोर्ड से 10+2 उत्तीर्ण या उपस्थित', ur: 'کسی بھی تسلیم شدہ بورڈ से 10+2 پاس یا زیر تعلیم' },
      ageLimit: { en: 'Max 20 years for General category (3 yr relaxation for OBC-NCL/SC/ST)', hi: 'सामान्य वर्ग के लिए अधिकतम 20 वर्ष (आरक्षित वर्गों के लिए 3 वर्ष की छूट)', ur: 'جنرل امیدواروں کے لیے زیادہ سے زیادہ 20 سال' },
      nationality: { en: 'Indian / Overseas Candidates', hi: 'भारतीय / विदेशी उम्मीदवार', ur: 'بھارتی और غیر ملکی امیدوار' },
      reservationRules: { en: 'Standard Government of India reservation norms apply', hi: 'मानक भारत सरकार आरक्षण मानदंड लागू', ur: 'سرکاری کوٹہ کے قوانین' }
    },
    selectionProcess: {
      stages: { en: 'DAT Prelims (Pen & paper design test), DAT Mains (Studio Test, Hands-on model making, & Interview)', hi: 'डैट प्रीलिम्स (पेन व पेपर टेस्ट), डैट मेन्स (स्टूडियो टेस्ट, मॉडल मेकिंग व साक्षात्कार)', ur: 'ڈیزائن ٹیسٹ پریلیمس اور اسٹوڈیو ٹیسٹ و انٹرویو' },
      syllabus: { en: 'Visual Design, Spatial Ability, Observation & Environment Sensitivity, Drawing & Sketching, Creativity & Innovation', hi: 'दृश्य डिजाइन, स्थानिक क्षमता, अवलोकन व संवेदनशीलता, ड्राइंग व स्केचिंग, रचनात्मकता व नवाचार', ur: 'ویژول ڈیزائن، ڈرائنگ، اسکیچنگ اور تخلیقی صلاحیت' }
    },
    importantDates: {
      notification: 'Sep 2025',
      applicationStart: 'Oct 2025',
      lastDate: 'Dec 2025',
      admitCard: 'Dec 2025',
      examDate: 'Jan 2026',
      resultDate: 'Mar / Apr 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'xat-exam',
    category: 'mba',
    name: { en: 'XAT (XLRI MBA Entrance)', hi: 'जैट (एक्सएलआरआई एमबीए प्रवेश)', ur: 'زیٹ (XLRI ایم بی اے داخلہ)' },
    authority: 'XLRI Jamshedpur / XAMI',
    website: 'https://xatonline.in',
    frequency: 'Annual (Jan)',
    salaryLevel: 'Admission to XLRI & 160+ B-Schools',
    salaryRange: 'MBA / PGDM Degree',
    qualification: '3-Year Bachelor Degree in any discipline',
    overview: {
      en: 'Xavier Aptitude Test conducted by XLRI Jamshedpur for admission to MBA/PGDM courses at XLRI and over 160 top management institutes.',
      hi: 'एक्सएलआरआई और 160 से अधिक शीर्ष प्रबंधन संस्थानों में एमबीए/पीजीडीएम पाठ्यक्रमों में प्रवेश के लिए जेवियर योग्यता परीक्षा।',
      ur: 'XLRI جمشید پور اور بھارت کے 160 سے زائد مینجمنٹ اداروں میں ایم بی اے کے داخلے کے لیے امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Recognized Bachelor Degree of minimum 3 years duration in any discipline', hi: 'किसी भी विषय में न्यूनतम 3 वर्ष की मान्यता प्राप्त स्नातक डिग्री', ur: 'کسی بھی مضمون میں کم از کم 3 سالہ گریجویشن ڈگری' },
      ageLimit: { en: 'No age limit for XAT examination', hi: 'जैट परीक्षा के लिए कोई आयु सीमा नहीं', ur: 'کوئی عمر کی حد नहीं' },
      nationality: { en: 'Indian / Foreign Nationals (GMAT allowed for foreign/NRI)', hi: 'भारतीय / विदेशी नागरिक', ur: 'بھارتی اور غیر ملکی امیدوار' },
      reservationRules: { en: 'As per XLRI admission policy and minority institution guidelines', hi: 'एक्सएलआरआई प्रवेश नीति और अल्पसंख्यक संस्थान दिशानिर्देशों के अनुसार', ur: 'ادارے کے قوانین کے مطابق کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'Computer Based Test (CBT), followed by Group Discussion (GD), Essay Evaluation, & Personal Interview (PI)', hi: 'सीबीटी परीक्षा, उसके बाद समूह चर्चा (GD), निबंध मूल्यांकन और साक्षात्कार (PI)', ur: 'آن لائن ٹیسٹ، مضمون کا جائزہ اور پرسنل انٹرویو' },
      syllabus: { en: 'Verbal & Logical Ability (VALA), Decision Making (DM), Quantitative Ability & Data Interpretation (QADI), General Knowledge (GK)', hi: 'मौखिक व तार्किक क्षमता, निर्णय लेना (DM), मात्रात्मक क्षमता व डेटा व्याख्या, सामान्य ज्ञान', ur: 'وربل ایبلٹی، فیصلہ سازی (Decision Making)، ریاضی اور جنرل نالج' }
    },
    importantDates: {
      notification: 'Jul 2025',
      applicationStart: 'Jul 2025',
      lastDate: 'Dec 2025',
      admitCard: 'Dec 2025',
      examDate: 'Jan 2026',
      resultDate: 'Jan 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'cmat-exam',
    category: 'mba',
    name: { en: 'CMAT (Common Management Admission Test)', hi: 'सीमैट (कॉमन मैनेजमेंट एडमिशन टेस्ट)', ur: 'سی میٹ (مینجمنٹ داخلہ ٹیسٹ)' },
    authority: 'National Testing Agency (NTA)',
    website: 'https://cmat.nta.nic.in',
    frequency: 'Annual (Apr/May)',
    salaryLevel: 'Admission to AICTE Approved B-Schools',
    salaryRange: 'MBA / PGDM / PGCM Degree',
    qualification: 'Bachelor Degree in any discipline',
    overview: {
      en: 'National level management entrance examination conducted by NTA for admission to AICTE-approved MBA and PGDM programs across India.',
      hi: 'भारत भर में एआईसीटीई-अनुमोदित एमबीए और पीजीडीएम कार्यक्रमों में प्रवेश के लिए एनटीए द्वारा आयोजित राष्ट्रीय स्तर की प्रवेश परीक्षा।',
      ur: 'بھارت کے AICTE منظور شدہ مینجمنٹ اداروں میں ایم بی اے اور پی جی ڈی ایم میں داخلے کا قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Bachelor Degree in any discipline (final year students can also apply)', hi: 'किसी भी विषय में स्नातक डिग्री (अंतिम वर्ष के छात्र भी आवेदन कर सकते हैं)', ur: 'کسی भी مضمون میں گریجویشن (آخری سال کے طلباء भी اہل ہیں)' },
      ageLimit: { en: 'No age restriction for appearing in CMAT', hi: 'सीमैट में उपस्थित होने के लिए कोई आयु प्रतिबंध नहीं', ur: 'کوئی عمر की حد नहीं' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'Standard Central Govt reservation policies apply', hi: 'मानक केंद्र सरकार आरक्षण नीतियां लागू', ur: 'مرکزی حکومت کے کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: '3-Hour Computer Based Test (CBT), followed by GD/PI at participating institutes', hi: '3-घंटे की सीबीटी परीक्षा, इसके बाद भाग लेने वाले संस्थानों में जीडी/पीआई', ur: '3 گھنٹے کا آن لائن ٹیسٹ اور متعلقہ ادارے میں انٹرویو' },
      syllabus: { en: 'Quantitative Techniques & Data Interpretation, Logical Reasoning, Language Comprehension, General Awareness, Innovation & Entrepreneurship', hi: 'मात्रात्मक तकनीक व डेटा व्याख्या, तार्किक क्षमता, भाषा समझ, सामान्य जागरूकता, नवाचार व उद्यमिता', ur: 'ریاضی، لاجیکل ریزننگ، انگلش، جنرل اویئرنس اور انوویشن' }
    },
    importantDates: {
      notification: 'Mar 2026',
      applicationStart: 'Mar 2026',
      lastDate: 'Apr 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'psu-gate',
    category: 'psu',
    name: { en: 'PSU Executive Recruitment (via GATE)', hi: 'पीएसयू अधिकारी भर्ती (गेट के माध्यम से)', ur: 'پی ایس یو آفیسر بھرتی' },
    authority: 'ONGC / NTPC / IOCL / BHEL / GAIL / PGCIL',
    website: 'https://gate2026.iitr.ac.in',
    frequency: 'Annual (Post GATE Results)',
    salaryLevel: 'Pay Level 10 / E-1 Executive Grade',
    salaryRange: '₹60,000 - ₹1,80,000 / month',
    qualification: 'B.E. / B.Tech + Valid GATE Score',
    overview: {
      en: 'Direct executive trainee and engineering officer recruitment by India Maharatna and Navratna Public Sector Undertakings based on GATE score.',
      hi: 'गेट स्कोर के आधार पर भारत के महारत्न और नवरत्न सार्वजनिक क्षेत्र के उपक्रमों (PSUs) द्वारा सीधी अधिकारी ट्रेनी भर्ती।',
      ur: 'گیٹ اسکور کی بنیاد پر بھارت کی بڑی سرکاری کمپنیوں (جیسے ONGC, NTPC, IOCL) میں بطور ایگزیکٹو آفیسر بھرتی۔'
    },
    eligibility: {
      minQualification: { en: 'Full-time B.E./B.Tech with minimum 60% marks in relevant engineering branch', hi: 'संबंधित इंजीनियरिंग शाखा में न्यूनतम 60% अंकों के साथ पूर्णकालिक बीई/बीटेक', ur: 'متعلقہ انجینئرنگ میں کم از کم 60% نمبروں کے ساتھ بی ای / بی ٹیک' },
      ageLimit: { en: 'Usually 28 to 30 years (3 yr relaxation for OBC, 5 yr for SC/ST)', hi: 'आमतौर पर 28 से 30 वर्ष (ओबीसी के लिए 3 वर्ष, एससी/एसटी के लिए 5 वर्ष की छूट)', ur: 'عموماً 28 سے 30 سال (او بی سی اور ایس سی کے لیے چھوٹ)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'Strict observance of Central Government quota rules in PSUs', hi: 'पीएसयू में केंद्र सरकार के कोटा नियमों का सख्त पालन', ur: 'سرکاری کمپنیوں کے کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'Shortlisting based on GATE Score, Group Discussion / Group Task, & Personal Interview', hi: 'गेट स्कोर के आधार पर शॉर्टलिस्टिंग, समूह चर्चा और व्यक्तिगत साक्षात्कार', ur: 'گیٹ اسکور پر شارٹ لسٹنگ، گروپ ڈسکشن اور انٹرویو' },
      syllabus: { en: 'Core technical discipline syllabus of GATE exam + General Awareness & Leadership traits in interview', hi: 'गेट परीक्षा का मुख्य तकनीकी पाठ्यक्रम + साक्षात्कार में सामान्य जागरूकता और नेतृत्व गुण', ur: 'متعلقہ انجینئرنگ مضمون، جنرل اویئرنس اور انٹرویو' }
    },
    importantDates: {
      notification: 'Jan - Mar 2026',
      applicationStart: 'Mar - Apr 2026',
      lastDate: 'Apr - May 2026',
      admitCard: 'Jun 2026',
      examDate: 'Through GATE 2026 Score',
      resultDate: 'Jul - Aug 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'icar-aieea',
    category: 'agriculture',
    name: { en: 'ICAR AIEEA (Agriculture Entrance)', hi: 'आईसीएआर एआईईईए (कृषि प्रवेश)', ur: 'آئی سی اے آر (زراعت داخلہ)' },
    authority: 'Indian Council of Agricultural Research / NTA',
    website: 'https://icar.nta.nic.in',
    frequency: 'Annual (via CUET UG for UG / NTA for PG)',
    salaryLevel: 'Admission to Top Agricultural Universities',
    salaryRange: 'B.Sc (Hons) Agriculture / M.Sc / Fellowship',
    qualification: '10+2 with PCB/PCM/Agriculture (for UG)',
    overview: {
      en: 'All India Entrance Examination for Admission to 15% seats in UG agriculture programs and 25% in PG programs across State Agricultural Universities.',
      hi: 'राज्य कृषि विश्वविद्यालयों में स्नातक कृषि कार्यक्रमों की 15% और पीजी कार्यक्रमों की 25% सीटों में प्रवेश के लिए अखिल भारतीय परीक्षा।',
      ur: 'بھارت کی زرعی یونیورسٹیوں میں بی ایس سی ایگریکلچر اور ایم ایس سی میں داخلے اور اسکالرشپ کا قومی امتحان۔'
    },
    eligibility: {
      minQualification: { en: '10+2 with Physics, Chemistry, Biology/Maths/Agriculture with 50% marks (40% for SC/ST)', hi: '50% अंकों के साथ 10+2 में भौतिकी, रसायन, जीव विज्ञान/गणित/कृषि (एससी/एसटी के लिए 40%)', ur: 'فزکس، کیمسٹری اور بیالوجی یا زراعت کے ساتھ 10+2' },
      ageLimit: { en: 'Minimum 16 years of age as on August 31 of the year of admission', hi: 'प्रवेश के वर्ष के 31 अगस्त को न्यूनतम 16 वर्ष की आयु', ur: 'کم از کم 16 سال' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'ICAR national quota reservations apply across participating institutes', hi: 'भाग लेने वाले संस्थानों में आईसीएआर राष्ट्रीय कोटा आरक्षण लागू', ur: 'آئی سی اے آر کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'CBT Exam (now merged with CUET UG for Bachelor degrees), ICAR Online Counselling', hi: 'सीबीटी परीक्षा (अब स्नातक के लिए सीयूईटी यूजी में विलय), आईसीएआर ऑनलाइन काउंसलिंग', ur: 'آن لائن ٹیسٹ اور آئی سی اے آر کونسلنگ' },
      syllabus: { en: 'Physics, Chemistry, Mathematics, Biology, and Agriculture (11th & 12th level)', hi: 'भौतिकी, रसायन विज्ञान, गणित, जीव विज्ञान और कृषि (11वीं और 12वीं स्तर)', ur: 'فزکس، کیمسٹری، بیالوجی اور ایگریکلچر' }
    },
    importantDates: {
      notification: 'Feb 2026',
      applicationStart: 'Feb 2026',
      lastDate: 'Mar 2026',
      admitCard: 'May 2026',
      examDate: 'May 2026',
      resultDate: 'Jun / Jul 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'insurance-lic',
    category: 'insurance',
    name: { en: 'Insurance Careers (LIC AAO & NIACL)', hi: 'बीमा करियर (एलआईसी एएओ व एनआईएसीएल)', ur: 'انشورنس کیریئر (ایل آئی سی اے اے او)' },
    authority: 'Life Insurance Corporation / NIACL / GIC',
    website: 'https://licindia.in/bottom-links/careers',
    frequency: 'Periodic / Annual',
    salaryLevel: 'Pay Scale E-1 / Officer Class I',
    salaryRange: '₹60,000+ / month',
    qualification: 'Graduate / Post Graduate',
    overview: {
      en: 'Recruitment examination for Assistant Administrative Officers (AAO) in LIC and Administrative Officers (AO) in NIACL, UIIC, and OICL.',
      hi: 'एलआईसी में सहायक प्रशासनिक अधिकारी (AAO) और एनआईएसीएल, यूआईआईसी व ओआईसीएल में प्रशासनिक अधिकारी (AO) के लिए भर्ती परीक्षा।',
      ur: 'ایل آئی سی اور دیگر سرکاری انشورنس کمپنیوں میں اسسٹنٹ ایڈمنسٹریٹو آفیسر (AAO) کی بھرتی کا امتحان۔'
    },
    eligibility: {
      minQualification: { en: 'Bachelor Degree in any discipline (specialized degrees required for CA, Actuarial, IT posts)', hi: 'किसी भी विषय में स्नातक डिग्री (सीए, एक्चुरियल, आईटी पदों के लिए विशेष डिग्री आवश्यक)', ur: 'کسی भी مضمون میں گریجویشن' },
      ageLimit: { en: '21 to 30 years (Relaxation: 3 yrs for OBC, 5 yrs for SC/ST)', hi: '21 से 30 वर्ष (छूट: ओबीसी के लिए 3 वर्ष, एससी/एसटी के लिए 5 वर्ष)', ur: '21 سے 30 سال (او بی سی اور ایس سی کے لیے چھوٹ)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'Standard Public Sector Insurance quota policies apply', hi: 'मानक सार्वजनिक क्षेत्र बीमा कोटा नीतियां लागू', ur: 'سرکاری انشورنس کمپنیوں के کوٹہ قوانین' }
    },
    selectionProcess: {
      stages: { en: 'Preliminary Examination (CBT), Main Examination (Objective + Descriptive), & Personal Interview', hi: 'प्रारंभिक परीक्षा (CBT), मुख्य परीक्षा (वस्तुनिष्ठ + वर्णनात्मक) और व्यक्तिगत साक्षात्कार', ur: 'پریلیمس، مینز (معروضی और تحریری) اور انٹرویو' },
      syllabus: { en: 'Reasoning Ability, Quantitative Aptitude, English Language with special emphasis on Insurance and Financial Market Awareness', hi: 'तार्किक क्षमता, मात्रात्मक योग्यता, अंग्रेजी भाषा व बीमा और वित्तीय बाजार जागरूकता', ur: 'ریزننگ، ریاضی، انگلش اور انشورنس و فنانشل اویئرنس' }
    },
    importantDates: {
      notification: 'Jan - Mar 2026',
      applicationStart: 'Feb - Mar 2026',
      lastDate: 'Mar - Apr 2026',
      admitCard: 'Apr 2026',
      examDate: 'May 2026',
      resultDate: 'Jul 2026'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'naps-apprenticeship',
    category: 'apprenticeships',
    name: { en: 'National Apprenticeship Training (NAPS)', hi: 'राष्ट्रीय प्रशिक्षुता प्रशिक्षण (एनईएपीएस)', ur: 'نیشنل اپریٹس شپ ٹریننگ' },
    authority: 'Ministry of Skill Development & Entrepreneurship',
    website: 'https://www.apprenticeshipindia.gov.in',
    frequency: 'Round the Year (Continuous)',
    salaryLevel: 'Monthly Stipend ₹8,000 - ₹15,000',
    salaryRange: '₹8,000 - ₹15,000 Stipend + Certification',
    qualification: '8th / 10th / 12th / ITI / Diploma / Degree',
    overview: {
      en: 'Government portal for industry apprenticeships across PSUs, Railways, Defence establishments, and top private sector corporate giants.',
      hi: 'पीएसयू, रेलवे, रक्षा प्रतिष्ठानों और शीर्ष निजी कंपनियों में औद्योगिक प्रशिक्षुता के लिए आधिकारिक सरकारी पोर्टल।',
      ur: 'ریلوے، پی ایس یو اور بڑی نجی کمپنیوں میں تربیت اور ماہانہ وظیفہ حاصل کرنے کا سرکاری پورٹل۔'
    },
    eligibility: {
      minQualification: { en: '8th pass, 10th pass, ITI certificate holders, Diploma holders, or Graduates depending on trade', hi: 'ट्रेड के आधार पर 8वीं पास, 10वीं पास, आईटीआई प्रमाण पत्र धारक, डिप्लोमा या स्नातक', ur: '8ویں، 10ویں پاس، آئی ٹی آئی، ڈپلومہ یا گریجویٹ' },
      ageLimit: { en: 'Minimum 14 years (18 years for hazardous industries)', hi: 'न्यूनतम 14 वर्ष (खतरनाक उद्योगों के लिए 18 वर्ष)', ur: 'کم از کم 14 سال (خطرناک صنعتوں کے لیے 18 سال)' },
      nationality: { en: 'Indian Citizen', hi: 'भारतीय नागरिक', ur: 'بھارتی شہری' },
      reservationRules: { en: 'As per Apprenticeship Act 1961 reservation norms', hi: 'प्रशिक्षुता अधिनियम 1961 के आरक्षण मानदंडों के अनुसार', ur: 'اپریٹس شپ ایکٹ 1961 کے مطابق کوٹہ' }
    },
    selectionProcess: {
      stages: { en: 'Direct merit-based selection on academic/ITI percentage, document verification, & trade medical check', hi: 'शैक्षणिक/आईटीआई प्रतिशत पर सीधी मेरिट आधारित चयन, दस्तावेज़ सत्यापन व मेडिकल', ur: 'میرٹ اور سند کی تصدیق پر براہ راست انتخاب' },
      syllabus: { en: 'Practical on-the-job industrial training combined with basic classroom technical instruction', hi: 'बुनियादी कक्षा तकनीकी निर्देश के साथ व्यावहारिक ऑन-द-जॉब औद्योगिक प्रशिक्षण', ur: 'عملی صنعتی تربیت اور تکنیکی تعلیم' }
    },
    importantDates: {
      notification: 'Available Daily',
      applicationStart: 'Continuous Openings',
      lastDate: 'Varies by Establishment',
      admitCard: 'Direct Merit Call',
      examDate: 'On the Job Training',
      resultDate: 'National Trade Cert at end'
    },
    lastUpdated: '2026-07-02'
  },
  {
    id: 'toefl-ielts',
    category: 'international',
    name: { en: 'TOEFL / IELTS / GRE (Overseas Exams)', hi: 'TOEFL / IELTS / GRE (विदेशी परीक्षाएं)', ur: 'ٹوفل / آئی ایل ٹی ایس (بیرونی امتحانات)' },
    authority: 'ETS / British Council / IDP',
    website: 'https://www.ets.org/toefl.html',
    frequency: 'Multiple Times Every Month',
    salaryLevel: 'Admission to Global Universities in USA/UK/Canada',
    salaryRange: 'Global Higher Education & Scholarships',
    qualification: '10+2 / Bachelor Degree',
    overview: {
      en: 'International standardized proficiency and aptitude exams required for studying abroad, overseas fellowships, and global career migration.',
      hi: 'विदेश में पढ़ाई, विदेशी फेलोशिप और वैश्विक करियर प्रवास के लिए आवश्यक अंतर्राष्ट्रीय मानकीकृत दक्षता और योग्यता परीक्षाएं।',
      ur: 'امریکہ، برطانیہ، کینیڈا وغیرہ میں اعلیٰ تعلیم، اسکالرشپ اور روزگار کے لیے لازمی بین الاقوامی امتحانات۔'
    },
    eligibility: {
      minQualification: { en: 'Valid Passport + 10+2 for undergraduate study abroad or Bachelor Degree for Master/PhD programs', hi: 'वैध पासपोर्ट + स्नातक अध्ययन के लिए 10+2 या परास्नातक/पीएचडी के लिए स्नातक डिग्री', ur: 'قانوناً درست پاسپورٹ اور متعلقہ تعلیمی قابلیت' },
      ageLimit: { en: 'No strict age limit for taking IELTS, TOEFL, or GRE tests', hi: 'IELTS, TOEFL या GRE परीक्षा देने के लिए कोई सख्त आयु सीमा नहीं', ur: 'کوئی عمر کی حد नहीं' },
      nationality: { en: 'Global Aspirants / Indian Citizens', hi: 'वैश्विक आकांक्षी / भारतीय नागरिक', ur: 'بھارتی और عالمی امیدوار' },
      reservationRules: { en: 'Merit-based international university admission & scholarship waivers available', hi: 'मेरिट आधारित अंतर्राष्ट्रीय विश्वविद्यालय प्रवेश व छात्रवृत्ति छूट उपलब्ध', ur: 'میرٹ کی بنیاد پر عالمی داخلے اور اسکالرشپ' }
    },
    selectionProcess: {
      stages: { en: 'Online / Center-based test covering Listening, Reading, Writing, & Speaking skills (Analytical reasoning for GRE)', hi: 'सुनने, पढ़ने, लिखने और बोलने के कौशल (जीआरई के लिए विश्लेषणात्मक तर्क) को कवर करने वाला परीक्षण', ur: 'لسننگ، ریڈنگ، رائٹنگ، اور اسپیکنگ کا ٹیسٹ' },
      syllabus: { en: 'English language fluency, academic vocabulary, critical reading comprehension, and analytical writing', hi: 'अंग्रेजी भाषा प्रवाह, शैक्षणिक शब्दावली, आलोचनात्मक पठन समझ और विश्लेषणात्मक लेखन', ur: 'انگلش زبان کی مہارت، ذخیرہ الفاظ، اور تحریری صلاحیت' }
    },
    importantDates: {
      notification: 'Open All Year',
      applicationStart: 'Flexible Booking',
      lastDate: '48 Hours Prior to Slot',
      admitCard: 'Instant Booking Confirmation',
      examDate: 'User Selected Date & Slot',
      resultDate: 'Within 3 - 5 Days'
    },
    lastUpdated: '2026-07-02'
  }
];

export const TRANSLATIONS = {
  title: { en: 'Career & Competitive Exams Portal', hi: 'करियर और प्रतियोगी परीक्षा पोर्टल', ur: 'کیریئر اور مسابقتی امتحانات پورٹل' },
  subtitle: { en: 'Official guidance, accurate resources, and trend analysis for aspirants.', hi: 'आकांक्षियों के लिए आधिकारिक मार्गदर्शन, सटीक संसाधन और प्रवृत्ति विश्लेषण।', ur: 'امیدواروں کے لیے سرکاری رہنمائی، درست وسائل اور رحجان کا تجزیہ۔' },
  searchPlaceholder: { en: 'Search for exams, departments...', hi: 'परीक्षा, विभाग खोजें...', ur: 'امتحانات، محکمے تلاش کریں...' },
  dashboardTitle: { en: 'Exam Categories', hi: 'परीक्षा श्रेणियां', ur: 'امتحان کے زمرے' },
  qualFilterTitle: { en: 'Filter by Qualification', hi: 'योग्यता के आधार पर फ़िल्टर करें', ur: 'قابلیت کے لحاظ से فلٹر करें' },
  salaryFilterTitle: { en: 'Filter by Salary', hi: 'वेतन के आधार पर फ़िल्टर करें', ur: 'تنخواہ کے لحاظ से فلٹر करें' },
  disclaimer: { en: 'This portal is an independent educational guidance platform. Always verify details with official authorities.', hi: 'यह पोर्टल एक स्वतंत्र शैक्षिक मार्गदर्शन मंच है। हमेशा आधिकारिक अधिकारियों के साथ विवरण सत्यापित करें।', ur: 'یہ پورٹل एक آزاد تعلیمی رہنمائی کا پلیٹ فارم ہے۔ ہمیشہ سرکاری حکام کے ساتھ تفصیلات کی تصدیق کریں۔' },
  officialPortalsTitle: { en: 'Official Portals', hi: 'आधिकारिक पोर्टल', ur: 'سرکاری پورٹل' }
};

export const OFFICIAL_PORTALS = [
  { name: 'UPSC', url: 'https://upsc.gov.in' },
  { name: 'SSC', url: 'https://ssc.gov.in' },
  { name: 'IBPS Banking', url: 'https://www.ibps.in' },
  { name: 'SBI Careers', url: 'https://sbi.co.in/careers' },
  { name: 'RBI Opportunities', url: 'https://opportunities.rbi.org.in' },
  { name: 'Railway Recruitment Boards', url: 'https://www.rrbcdg.gov.in' },
  { name: 'NTA', url: 'https://www.nta.ac.in' },
  { name: 'JEE Main', url: 'https://jeemain.nta.nic.in' },
  { name: 'JEE Advanced', url: 'https://jeeadv.ac.in' },
  { name: 'NEET UG', url: 'https://neet.nta.nic.in' },
  { name: 'AIIMS Admissions', url: 'https://www.aiimsexams.ac.in' },
  { name: 'CUET UG', url: 'https://cuet.nta.nic.in' },
  { name: 'UGC NET', url: 'https://ugcnet.nta.ac.in' },
  { name: 'CSIR NET', url: 'https://csirnet.nta.ac.in' },
  { name: 'GATE Official', url: 'https://gate2026.iitr.ac.in' },
  { name: 'CAT Entrance', url: 'https://iimcat.ac.in' },
  { name: 'CLAT Consortium', url: 'https://consortiumofnlus.ac.in' },
  { name: 'NIFT Admissions', url: 'https://www.nift.ac.in' },
  { name: 'NID Admissions', url: 'https://admissions.nid.edu' },
  { name: 'XAT Online', url: 'https://xatonline.in' },
  { name: 'CMAT Entrance', url: 'https://cmat.nta.nic.in' },
  { name: 'ICAR Agriculture', url: 'https://icar.nta.nic.in' },
  { name: 'NAPS Apprenticeship', url: 'https://www.apprenticeshipindia.gov.in' }
];
