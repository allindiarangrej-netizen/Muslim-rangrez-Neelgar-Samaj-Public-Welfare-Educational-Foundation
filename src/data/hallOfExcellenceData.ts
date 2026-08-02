export interface AchieverCategory {
  id: string;
  nameEn: string;
  nameHi: string;
  nameUr: string;
  icon: string;
  count: number;
  descriptionEn: string;
  descriptionHi: string;
  descriptionUr: string;
}

export interface AchieverProfile {
  id: string;
  name: { en: string; hi: string; ur: string } | string;
  displayName?: { en: string; hi: string; ur: string } | string;
  fatherName?: { en: string; hi: string; ur: string } | string;
  gender: 'Male' | 'Female' | 'Other';
  dob?: string;
  nativePlace: { en: string; hi: string; ur: string } | string;
  currentCity: { en: string; hi: string; ur: string } | string;
  state: { en: string; hi: string; ur: string } | string;
  district?: { en: string; hi: string; ur: string } | string;
  country: { en: string; hi: string; ur: string } | string;
  occupation: { en: string; hi: string; ur: string } | string;
  categoryId: string;
  designation: { en: string; hi: string; ur: string } | string;
  organization: { en: string; hi: string; ur: string } | string;
  employmentType?: { en: string; hi: string; ur: string } | string;
  yearsOfExperience?: string;
  qualification: { en: string; hi: string; ur: string } | string;
  university: { en: string; hi: string; ur: string } | string;
  yearOfAchievement: number;
  careerJourney: { en: string; hi: string; ur: string };
  biography: { en: string; hi: string; ur: string };
  majorAchievements: string[];
  awardsHonors: string[];
  socialContributions: { en: string; hi: string; ur: string };
  inspirationalMessage: { en: string; hi: string; ur: string };
  careerAdvice: { en: string; hi: string; ur: string };
  languagesKnown: string[];
  expertise: ({ en: string; hi: string; ur: string } | string)[];
  contactPermission?: boolean;
  email?: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  linkedin?: string;
  socialMedia?: string;
  isMentor: boolean;
  isVerified: boolean;
  isFeatured: boolean;
  isGovt: boolean;
  isOverseas: boolean;
  photoUrl: string;
  coverImageUrl?: string;
  badges: ({ en: string; hi: string; ur: string } | string)[];
  categoryTier?: 'hajj' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'rising' | 'leadership' | 'lifetime';
  politicalParty?: string;
  hajjYear?: number;
  hajjType?: 'Hajj' | 'Umrah' | 'Both';
}

export interface ExcellenceTierConfig {
  id: 'hajj' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'rising' | 'leadership' | 'lifetime';
  titleEn: string;
  titleHi: string;
  titleUr: string;
  badge: string;
  iconName: string;
  themeGradient: string;
  cardBorder: string;
  badgeBg: string;
  glowColor: string;
  descriptionEn: string;
  descriptionHi: string;
  descriptionUr: string;
}

export const EXCELLENCE_TIERS: ExcellenceTierConfig[] = [
  {
    id: 'hajj',
    titleEn: '🕋 Hajiyon Ki Hall of Excellence (Pilgrims of Honor)',
    titleHi: '🕋 हाजियों का हॉल ऑफ एक्सीलेंस (पवित्र हज यात्री)',
    titleUr: '🕋 حجاج کرام ہال آف ایکسیلنس',
    badge: '🕋 Al-Haj / Hajjah Honoree',
    iconName: 'Landmark',
    themeGradient: 'from-[#004B23] via-[#0B3C1D] to-[#041A0E]',
    cardBorder: 'border-[#FFD54A]/60',
    badgeBg: 'bg-[#FFD54A] text-[#004B23]',
    glowColor: 'rgba(255, 213, 74, 0.4)',
    descriptionEn: 'Honoring community elders, leaders and members who completed the Holy Pilgrimage of Hajj & Umrah to Makkah & Madinah.',
    descriptionHi: 'मक्का और मदीना की पवित्र हज और उमराह यात्रा पूर्ण करने वाले समाज के प्रतिष्ठित बुजुर्गों एवं मार्गदर्शकों का विशेष सम्मान।',
    descriptionUr: 'مکہ مکرمہ اور مدینہ منورہ کی مقدس ترین حجی زیارت و عمرہ مکمل کرنے والے برادری کے باوقار و متبرک افراد।'
  },
  {
    id: 'diamond',
    titleEn: '💎 Diamond Excellence',
    titleHi: '💎 डायमंड एक्सीलेंस',
    titleUr: '💎 ڈائمنڈ ایکسیلنس',
    badge: '💎 Diamond Tier',
    iconName: 'Award',
    themeGradient: 'from-[#0B132B] via-[#1C2541] to-[#3A506B]',
    cardBorder: 'border-cyan-400/60',
    badgeBg: 'bg-cyan-400 text-slate-950',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    descriptionEn: 'Highest National & International Achievers: IAS, IPS, Judges, Ministers, Vice Chancellors, Padma Awardees & Global Icons.',
    descriptionHi: 'सर्वोच्च राष्ट्रीय और अंतर्राष्ट्रीय उपलब्धि धारक: आईएएस, आईपीएस, जज, मंत्री, कुलपति, पद्म पुरस्कार विजेता।',
    descriptionUr: 'اعلیٰ ترین قومی و بین الاقوامی شخصیات: آئی اے ایس، آئی پی ایس، ججز، وزراء، وائس چانسلرز اور صدارتی اعزاز یافتہ۔'
  },
  {
    id: 'platinum',
    titleEn: '🏆 Platinum Excellence',
    titleHi: '🏆 प्लेटिनम एक्सीलेंस',
    titleUr: '🏆 پلاٹینم ایکسیلنس',
    badge: '🏆 Platinum Tier',
    iconName: 'Trophy',
    themeGradient: 'from-slate-900 via-slate-800 to-slate-900',
    cardBorder: 'border-slate-300/70',
    badgeBg: 'bg-slate-200 text-slate-950',
    glowColor: 'rgba(226, 232, 240, 0.4)',
    descriptionEn: 'Senior Govt Officers, Senior Doctors, Executive Engineers, Army Officers, Senior Bureaucrats & Top Advocates.',
    descriptionHi: 'वरिष्ठ प्रशासनिक अधिकारी, वरिष्ठ डॉक्टर, चीफ इंजीनियर, सेना के वरिष्ठ अधिकारी व वरिष्ठ अधिवक्ता।',
    descriptionUr: 'سینئر انتظامی افسران، ماہر ڈاکٹرز، چیف انجینئرز اور فوج کے اعلیٰ افسران۔'
  },
  {
    id: 'gold',
    titleEn: '🥇 Gold Excellence',
    titleHi: '🥇 गोल्ड एक्सीलेंस',
    titleUr: '🥇 گولڈ ایکسیلنس',
    badge: '🥇 Gold Tier',
    iconName: 'Medal',
    themeGradient: 'from-[#2A1B00] via-[#4A3000] to-[#1A1000]',
    cardBorder: 'border-[#FFD54A]/80',
    badgeBg: 'bg-[#FFD54A] text-[#2A1B00]',
    glowColor: 'rgba(255, 213, 74, 0.5)',
    descriptionEn: 'Doctors, Engineers, Professors, Teachers, Lawyers, Bank Managers, CAs & Corporate Leaders.',
    descriptionHi: 'डॉक्टर, इंजीनियर, प्रोफेसर, सरकारी शिक्षक, वकील, बैंक प्रबंधक, सीए एवं कॉर्पोरेट लीडर्स।',
    descriptionUr: 'ڈاکٹرز، انجینئرز، پروفیسرز، اساتذہ، وکلاء اور بینک مینیجرز۔'
  },
  {
    id: 'silver',
    titleEn: '🥈 Silver Excellence',
    titleHi: '🥈 सिल्वर एक्सीलेंस',
    titleUr: '🥈 سلور ایکسیلنس',
    badge: '🥈 Silver Tier',
    iconName: 'Shield',
    themeGradient: 'from-zinc-900 via-zinc-800 to-zinc-900',
    cardBorder: 'border-zinc-400/60',
    badgeBg: 'bg-zinc-300 text-zinc-950',
    glowColor: 'rgba(212, 212, 216, 0.4)',
    descriptionEn: 'Government Employees, Emerging Professionals, Lecturers, Young Doctors/Engineers, Sports Champions & Artists.',
    descriptionHi: 'सरकारी कर्मचारी, उभरते पेशेवर, व्याख्याता, युवा डॉक्टर व इंजीनियर, खेल चैंपियन और कलाकार।',
    descriptionUr: 'سرکاری ملازمین، ابھرتے ہوئے نوجوان ماہرین، لیکچررز اور کھلاڑی۔'
  },
  {
    id: 'bronze',
    titleEn: '🥉 Bronze Excellence',
    titleHi: '🥉 ब्रॉन्ज एक्सीलेंस',
    titleUr: '🥉 برونز एकसीलेंस',
    badge: '🥉 Bronze Tier',
    iconName: 'Sparkles',
    themeGradient: 'from-[#3A1F12] via-[#5C321E] to-[#24130A]',
    cardBorder: 'border-amber-600/70',
    badgeBg: 'bg-amber-600 text-white',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    descriptionEn: 'Newly Selected Candidates, Competitive Exam Qualifiers, Government Recruitment Success Stories & Startup Founders.',
    descriptionHi: 'नवनियुक्त अभ्यर्थी, प्रतियोगी परीक्षा विजेता, सरकारी नौकरियों में चयनित युवा व स्टार्टअप संस्थापक।',
    descriptionUr: 'نو منتخب امیدوار، مسابقتی امتحانات میں کامیاب نوجوان اور اسٹارٹ اپ بانیان۔'
  },
  {
    id: 'rising',
    titleEn: '⭐ Rising Star Excellence',
    titleHi: '⭐ राइजिंग स्टार्स',
    titleUr: '⭐ رائزنگ اسٹارز',
    badge: '⭐ Rising Star',
    iconName: 'Star',
    themeGradient: 'from-purple-950 via-indigo-950 to-slate-950',
    cardBorder: 'border-purple-400/60',
    badgeBg: 'bg-purple-400 text-purple-950',
    glowColor: 'rgba(192, 132, 252, 0.4)',
    descriptionEn: 'Outstanding Students, Scholarship Winners, Gold Medalists, Research Scholars & Young Innovators.',
    descriptionHi: 'उत्कृष्ट छात्र-छात्राएं, राष्ट्रीय छात्रवृत्ति विजेता, गोल्ड मेडलिस्ट, शोधकर्ता एवं युवा नवोन्मेषक।',
    descriptionUr: 'شاندار طالب علم، گولڈ میڈلسٹ، اسکالرشپ ہولڈرز اور ریسرچ اسکالرز۔'
  },
  {
    id: 'leadership',
    titleEn: '🌟 Community Leadership Excellence',
    titleHi: '🌟 सामुदायिक नेतृत्व',
    titleUr: '🌟 سماجی قیادت',
    badge: '🌟 Community Leader',
    iconName: 'HeartHandshake',
    themeGradient: 'from-emerald-950 via-teal-950 to-emerald-950',
    cardBorder: 'border-emerald-400/60',
    badgeBg: 'bg-emerald-400 text-emerald-950',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    descriptionEn: 'Social Reformers, Religious Scholars, Community Volunteers, Blood Donors, Education Promoters & Women Leaders.',
    descriptionHi: 'समाज सुधारक, धार्मिक विद्वान, स्वयंसेवक, रक्तदान शिरोमणि, शिक्षा प्रेरक एवं महिला नेतृत्व।',
    descriptionUr: 'سماجی مصلحین، دینی علماء، رضاکار، تعلیم کو فروغ دینے والے اور خواتین رہنما۔'
  },
  {
    id: 'lifetime',
    titleEn: '🎖 Lifetime Inspiration Excellence',
    titleHi: '🎖 आजीवन प्रेरणा एवं समाज रत्न',
    titleUr: '🎖 لائف ٹائم انسپیریشن',
    badge: '🎖 Lifetime Legend',
    iconName: 'Crown',
    themeGradient: 'from-rose-950 via-red-950 to-slate-950',
    cardBorder: 'border-rose-400/70',
    badgeBg: 'bg-rose-500 text-white',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    descriptionEn: 'Lifetime Contribution Awardees, Social Pioneers, Legendary Mentors & Community Pride Icons.',
    descriptionHi: 'आजीवन योगदान पुरस्कार विजेता, समाज रत्न, मार्गदर्शक एवं समुदाय के महान गौरव स्तंभ।',
    descriptionUr: 'لائف ٹائم اچیومنٹ ایوارڈ یافتا، عظیم رہنما اور برادری کا فخر।'
  }
];

export function formatDriveUrl(url: string = ''): string {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  return url;
}

export function detectCategoryTier(designation: string = '', occupation: string = '', categoryId: string = ''): 'hajj' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'rising' | 'leadership' | 'lifetime' {
  const d = (designation + ' ' + occupation + ' ' + categoryId).toLowerCase();

  // 1. Lifetime Legend
  if (d.includes('lifetime') || d.includes('samaj ratna') || d.includes('community jewel') || d.includes('pioneer') || d.includes('legend') || d.includes('president award')) {
    return 'lifetime';
  }

  // 2. Diamond Tier
  if (
    d.includes('ias') ||
    d.includes('ips') ||
    d.includes('ifs') ||
    d.includes('irs') ||
    d.includes('collector') ||
    d.includes('commissioner') ||
    d.includes('dgp') ||
    d.includes('ig police') ||
    d.includes('dig') ||
    d.includes('sp police') ||
    d.includes('high court judge') ||
    d.includes('supreme court judge') ||
    d.includes('cabinet minister') ||
    d.includes('member of parliament') ||
    d.includes('vice chancellor') ||
    d.includes('padma') ||
    d.includes('global ceo') ||
    d.includes('international scientist')
  ) {
    return 'diamond';
  }

  // 3. Platinum Tier
  if (
    d.includes('senior doctor') ||
    d.includes('sr. doctor') ||
    d.includes('senior professor') ||
    d.includes('sr. professor') ||
    d.includes('senior advocate') ||
    d.includes('executive engineer') ||
    d.includes('superintending engineer') ||
    d.includes('colonel') ||
    d.includes('navy captain') ||
    d.includes('air force officer') ||
    d.includes('district judge') ||
    d.includes('additional sp') ||
    d.includes('addl sp') ||
    d.includes('sdm') ||
    d.includes('cmo') ||
    d.includes('chief medical officer')
  ) {
    return 'platinum';
  }

  // 8. Community Leadership & Public Governance
  if (
    d.includes('mandal president') ||
    d.includes('politician') ||
    d.includes('bjp') ||
    d.includes('inc') ||
    d.includes('party president') ||
    d.includes('public-rep') ||
    d.includes('public representative') ||
    d.includes('ngo leader') ||
    d.includes('religious scholar') ||
    d.includes('community volunteer') ||
    d.includes('education promoter') ||
    d.includes('blood donor') ||
    d.includes('social reformer') ||
    d.includes('trustee')
  ) {
    return 'leadership';
  }

  // 4. Gold Tier
  if (
    d.includes('doctor') ||
    d.includes('engineer') ||
    d.includes('chartered accountant') ||
    d.includes('ca ') ||
    d.includes('lawyer') ||
    d.includes('advocate') ||
    d.includes('lecturer') ||
    d.includes('principal') ||
    d.includes('inspector') ||
    d.includes('bank manager') ||
    d.includes('business owner') ||
    d.includes('entrepreneur') ||
    d.includes('professor')
  ) {
    return 'gold';
  }

  // 5. Silver Tier
  if (
    d.includes('teacher') ||
    d.includes('government employee') ||
    d.includes('govt employee') ||
    d.includes('junior engineer') ||
    d.includes('je ') ||
    d.includes('staff nurse') ||
    d.includes('nurse') ||
    d.includes('research scholar') ||
    d.includes('social worker') ||
    d.includes('sub inspector')
  ) {
    return 'silver';
  }

  // 6. Bronze Tier
  if (
    d.includes('newly selected') ||
    d.includes('candidate') ||
    d.includes('startup founder') ||
    d.includes('young professional') ||
    d.includes('exam qualifier') ||
    d.includes('qualifier') ||
    d.includes('recruit')
  ) {
    return 'bronze';
  }

  // 7. Rising Star
  if (
    d.includes('student topper') ||
    d.includes('topper') ||
    d.includes('gold medalist') ||
    d.includes('scholarship winner') ||
    d.includes('young innovator') ||
    d.includes('student')
  ) {
    return 'rising';
  }

  // 9. Hajj Pilgrims
  if (
    d.includes('haji') ||
    d.includes('hajj') ||
    d.includes('hajjah') ||
    d.includes('pilgrim') ||
    d.includes('mecca') ||
    d.includes('umrah') ||
    d.includes('al-haj')
  ) {
    return 'hajj';
  }

  return 'gold';
}

export function detectProfessionTag(designation: string = '', occupation: string = '', categoryId: string = ''): string {
  const d = (designation + ' ' + occupation + ' ' + categoryId).toLowerCase();

  if (d.includes('doctor') || d.includes('physician') || d.includes('surgeon') || d.includes('md') || d.includes('mbbs') || d.includes('cmo') || d.includes('dentist')) {
    return '🩺 Doctor';
  }
  if (d.includes('judge') || d.includes('justice') || d.includes('magistrate') || d.includes('judiciary')) {
    return '⚖️ Judge';
  }
  if (d.includes('ips') || d.includes('police') || d.includes('sp ') || d.includes('dsp') || d.includes('dgp') || d.includes('ig police')) {
    return '👮 Police';
  }
  if (d.includes('ias') || d.includes('collector') || d.includes('commissioner') || d.includes('ifs') || d.includes('irs')) {
    return '🏛️ IAS / Civil Services';
  }
  if (d.includes('engineer') || d.includes('architect') || d.includes('b.tech') || d.includes('m.tech')) {
    return '⚙️ Engineer';
  }
  if (d.includes('professor') || d.includes('vice chancellor') || d.includes('reader') || d.includes('phd')) {
    return '📚 Professor';
  }
  if (d.includes('teacher') || d.includes('educator') || d.includes('faculty') || d.includes('principal')) {
    return '🎓 Teacher';
  }
  if (d.includes('business') || d.includes('entrepreneur') || d.includes('founder') || d.includes('ceo') || d.includes('trader') || d.includes('merchant')) {
    return '💼 Business';
  }
  if (d.includes('bank') || d.includes('banker') || d.includes('rbi') || d.includes('manager')) {
    return '🏦 Banker';
  }
  if (d.includes('advocate') || d.includes('lawyer') || d.includes('attorney') || d.includes('legal')) {
    return '⚖️ Lawyer';
  }
  if (d.includes('scientist') || d.includes('researcher') || d.includes('isro') || d.includes('barc') || d.includes('patent')) {
    return '🧪 Scientist';
  }
  if (d.includes('hafiz') || d.includes('qari') || d.includes('mufti') || d.includes('aalim') || d.includes('maulana') || d.includes('scholar')) {
    return '🕌 Religious Scholar';
  }
  if (d.includes('social worker') || d.includes('ngo') || d.includes('volunteer') || d.includes('blood donor')) {
    return '❤️ Social Worker';
  }
  if (d.includes('sports') || d.includes('athlete') || d.includes('champion') || d.includes('cricketer')) {
    return '🏆 Athlete';
  }
  if (d.includes('artist') || d.includes('designer') || d.includes('calligrapher') || d.includes('artisan')) {
    return '🎨 Artist';
  }
  if (d.includes('mla') || d.includes('mp') || d.includes('minister') || d.includes('politician') || d.includes('mayor')) {
    return '🏛️ Politician';
  }

  return '💼 Professional';
}

export interface MentorshipRequest {
  id: string;
  studentName: string;
  studentAge: number;
  qualification: { en: string; hi: string; ur: string } | string;
  careerGoal: string;
  question: string;
  email: string;
  phone: string;
  mentorId: string;
  mentorName: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

export interface SuccessStoryItem {
  id: string;
  achieverId: string;
  achieverName: string;
  achieverPhoto: string;
  profession: string;
  title: { en: string; hi: string; ur: string };
  personalJourney: string;
  challenges: string;
  hardWork: string;
  successStory: string;
  adviceForStudents: string;
  date: string;
}

export interface AwardItem {
  id: string;
  title: { en: string; hi: string; ur: string };
  recipientName: string;
  category: string;
  year: number;
  description: string;
  type: 'Certificate' | 'Medal' | 'Trophy' | 'Government Award' | 'Community Award';
  imageUrl: string;
}

export const INITIAL_CATEGORIES: AchieverCategory[] = [
  { id: 'hajj-pilgrims', nameEn: 'Hajiyon Ki Hall of Excellence', nameHi: 'हाजियों का हॉल ऑफ एक्सीलेंस (पवित्र हज यात्री)', nameUr: 'حجاج کرام ہال آف ایکسیلنس', icon: 'Landmark', count: 1, descriptionEn: 'Honoring community elders & members who completed the Holy Pilgrimage of Hajj to Makkah & Madinah', descriptionHi: 'मक्का-मदीना की पवित्र हज यात्रा पूर्ण करने वाले समाज के बावक़ार हाजी साहिबान', descriptionUr: 'مکہ مکرمہ اور مدینہ منورہ کا مقدس فریضہ حج ادا کرنے والے برادری کے محترم حجاج کرام' },
  { id: 'govt-services', nameEn: 'Government Services', nameHi: 'सरकारी सेवाएं (प्रशासन/सेना/पुलिस)', nameUr: 'سرکاری خدمات (آئی اے ایس/پولیس/فوج)', icon: 'ShieldCheck', count: 0, descriptionEn: 'IAS, IPS, Defense, Police, Revenue & administrative officers', descriptionHi: 'आईएएस, आईपीएस, रक्षा, पुलिस, राजस्व व प्रशासनिक अधिकारी', descriptionUr: 'آئی اے ایس، آئی پی ایس، فوج، پولیس اور انتظامی افسران' },
  { id: 'law-judiciary', nameEn: 'Law & Judiciary', nameHi: 'कानून एवं न्यायपालिका', nameUr: 'قانون اور عدلیہ', icon: 'Scale', count: 0, descriptionEn: 'High Court & District Judges, Supreme Court Advocates & Jurists', descriptionHi: 'उच्च न्यायालय व जिला न्यायाधीश, उच्चतम न्यायालय अधिवक्ता व कानूनविद', descriptionUr: 'ہائیکورٹ و سیشن ججز، سپریم کورٹ کے وکلاء اور قانونی ماہرین' },
  { id: 'medical-health', nameEn: 'Medical & Healthcare', nameHi: 'चिकित्सा एवं स्वास्थ्य सेवा', nameUr: 'طبی اور صحت کی دیکھ بھال', icon: 'Activity', count: 0, descriptionEn: 'Super specialists, senior doctors, surgeons & medical officers', descriptionHi: 'सुपर स्पेशलिस्ट, वरिष्ठ डॉक्टर, सर्जन व चिकित्सा अधिकारी', descriptionUr: 'سپر اسپیشلسٹ، سینئر ڈاکٹرز، سرجنز اور میڈیکل آفیسرز' },
  { id: 'science-tech', nameEn: 'Science & Technology', nameHi: 'विज्ञान एवं तकनीकी अनुसंधान', nameUr: 'سائنس اور ٹیکنالوجی ریسرچ', icon: 'Atom', count: 0, descriptionEn: 'ISRO/NASA scientists, tech innovators & global researchers', descriptionHi: 'इसरो/नासा वैज्ञानिक, तकनीकी अन्वेषक व वैश्विक शोधकर्ता', descriptionUr: 'اسرو اور ناسا کے سائنسدان، موجد اور محققین' },
  { id: 'public-rep', nameEn: 'Public Representatives', nameHi: 'जनप्रतिनिधि एवं राजनेता', nameUr: 'عوامی نمائندے اور سیاست دان', icon: 'Users', count: 1, descriptionEn: 'MPs, MLAs, Cabinet Ministers, Mayors & Party Presidents', descriptionHi: 'सांसद, विधायक, कैबिनेट मंत्री, महापौर एवं पार्टी अध्यक्ष', descriptionUr: 'ممبران پارلیمنٹ، اسمبلی اراکین، وزراء اور میئرز' },
  { id: 'civil-services', nameEn: 'Civil Services & UPSC', nameHi: 'सिविल सेवा (UPSC/SPSC)', nameUr: 'سول سروسز اور یو پی ایس سی', icon: 'Award', count: 0, descriptionEn: 'IAS, IPS, IFS, IRS, DySP & administrative executives', descriptionHi: 'आईएएस, आईपीएस, आईएफएस, आईआरएस, डीवाईएसपी व प्रशासनिक अधिकारी', descriptionUr: 'آئی اے ایس، آئی پی ایس، آئی ایف ایس اور انتظامی افسران' },
  { id: 'engineering-services', nameEn: 'Engineering Services', nameHi: 'अभियांत्रिकी सेवाएं (इंजीनियरिंग)', nameUr: 'انجینئرنگ خدمات', icon: 'Settings', count: 0, descriptionEn: 'Chief Engineers, Executive Engineers & IIT graduates', descriptionHi: 'मुख्य अभियंता, अधिशासी अभियंता व आईआईटी स्नातक', descriptionUr: 'چیف انجینئرز، ایگزیکٹو انجینئرز اور آئی آئی ٹی گریجویٹس' },
  { id: 'it-software', nameEn: 'IT & Software Engineers', nameHi: 'आईटी एवं सॉफ्टवेयर विशेषज्ञ', nameUr: 'آئی ٹی اور سافٹ ویئر انجینئرز', icon: 'Cpu', count: 0, descriptionEn: 'Google, Microsoft, Meta staff, tech leads & silicon valley architects', descriptionHi: 'गूगल, माइक्रोसॉफ्ट, मेटा स्टाफ, टेक लीड व सिलिकॉन वैली विशेषज्ञ', descriptionUr: 'گوگل، مائیکروسافٹ اور سلیکان ویلی کے سافٹ ویئر انجینئرز' },
  { id: 'professors', nameEn: 'Professors & Academics', nameHi: 'प्रोफेसर एवं शिक्षाविद', nameUr: 'پروفیسرز اور ماہرین تعلیم', icon: 'BookOpen', count: 0, descriptionEn: 'University Vice Chancellors, Deans, Professors & Ph.D.s', descriptionHi: 'कुलपति, डीन, प्राध्यापक एवं शोधकर्ता', descriptionUr: 'یونیورسٹیوں کے پروفیسرز اور ریسرچرز' },
  { id: 'teachers', nameEn: 'Government Teachers', nameHi: 'सरकारी शिक्षक', nameUr: 'سرکاری اساتذہ', icon: 'GraduationCap', count: 0, descriptionEn: 'Principal, Lecturer, PGT, TGT & Headmasters', descriptionHi: 'प्रधानाचार्य, व्याख्याता, वरिष्ठ अध्यापक', descriptionUr: 'سرکاری اسکولوں کے اساتذہ' },
  { id: 'armed-forces', nameEn: 'Armed Forces', nameHi: 'सशस्त्र बल (सेना)', nameUr: 'مسلح افواج', icon: 'ShieldAlert', count: 0, descriptionEn: 'Army, Navy, Air Force & Paramilitary Officers', descriptionHi: 'थल सेना, नौसेना, वायु सेना व अर्धसैनिक अधिकारी', descriptionUr: 'آرمی، نیوی اور ایئر فورس افسران' },
  { id: 'overseas', nameEn: 'Overseas Professionals', nameHi: 'प्रवासी भारतीय विशेषज्ञ (NRI)', nameUr: 'بیرون ملک مقیم ماہرین', icon: 'Globe', count: 0, descriptionEn: 'Community professionals working in USA, UK, Gulf & Europe', descriptionHi: 'अमेरिका, ब्रिटेन, खाड़ी व यूरोप में कार्यरत विशेषज्ञ', descriptionUr: 'امریکہ، یورپ اور خلیج میں کام کرنے والے ماہرین' },
  { id: 'entrepreneurs', nameEn: 'Entrepreneurs & CEOs', nameHi: 'उद्यमी एवं उद्योगपति', nameUr: 'تاجر اور صنعت کار', icon: 'Briefcase', count: 0, descriptionEn: 'Business founders, industrial pioneers & startup mentors', descriptionHi: 'व्यवसाय संस्थापक, औद्योगिक अग्रणी व मेंटर', descriptionUr: 'کامیاب کاروباری شخصیات اور سی ای اوز' },
  { id: 'gold-medalists', nameEn: 'Gold Medalists & Toppers', nameHi: 'गोल्ड मेडलिस्ट एवं टॉपर्स', nameUr: 'گولڈ میڈلسٹ اور ٹاپرز', icon: 'Medal', count: 0, descriptionEn: 'University toppers, national scholars & excellence awardees', descriptionHi: 'विश्वविद्यालय टॉपर व राष्ट्रीय छात्रवृत्ति विजेता', descriptionUr: 'یونیورسٹی ٹاپرز اور گولڈ میڈلسٹ' },
  { id: 'ca-finance', nameEn: 'Chartered Accountants', nameHi: 'चार्टर्ड अकाउंटेंट्स (CA)', nameUr: 'چارٹرڈ اکاؤنٹنٹس', icon: 'TrendingUp', count: 0, descriptionEn: 'CAs, Financial Analysts, Banking Leaders & Economists', descriptionHi: 'सीए, वित्तीय विश्लेषक, बैंकिंग अधिकारी', descriptionUr: 'سی اے اور مالیاتی ماہرین' },
  { id: 'it-professionals', nameEn: 'IT Professionals', nameHi: 'आईटी एवं तकनीकी विशेषज्ञ', nameUr: 'آئی टी विशेषज्ञ', icon: 'Laptop', count: 0, descriptionEn: 'Google, Microsoft, Amazon architects & IT managers', descriptionHi: 'गूगल, माइक्रोसॉफ्ट, अमेज़न आर्किटेक्ट व आईटी प्रबंधक', descriptionUr: 'گوگل اور مائیکروسافٹ کے آئی ٹی ماہرین' },
  { id: 'award-winners', nameEn: 'National/State Awardees', nameHi: 'राष्ट्रीय/राज्य पुरस्कार विजेता', nameUr: 'قومی و ریاستی ایوارڈ یافتہ', icon: 'Trophy', count: 3, descriptionEn: 'Padma Shri, Presidential & State honor recipients', descriptionHi: 'पद्म श्री, राष्ट्रपति व राज्य सम्मान प्राप्तकर्ता', descriptionUr: 'صدارتی اور ریاستی اعزازات حاصل کرنے والے' },
  { id: 'nurses', nameEn: 'Nurses & Healthcare', nameHi: 'नर्सिंग एवं स्वास्थ्य कार्यकर्ता', nameUr: 'نرسیں اور ہیلتھ کیئر', icon: 'Heart', count: 0, descriptionEn: 'Chief Nursing Officers, AIIMS specialists & health leaders', descriptionHi: 'मुख्य नर्सिंग अधिकारी, एम्स विशेषज्ञ', descriptionUr: 'اعلیٰ نرسنگ آفیسرز اور صحت کے کارکن' },
  { id: 'fire-emergency', nameEn: 'Fire & Emergency', nameHi: 'अग्निशमन एवं आपातकालीन सेवा', nameUr: 'فائر اور ایمرجنسی سروسز', icon: 'Flame', count: 0, descriptionEn: 'Chief Fire Officers, Disaster Response Commandants', descriptionHi: 'मुख्य अग्निशमन अधिकारी, आपदा प्रतिक्रिया कमांडर', descriptionUr: 'فائر آفیسرز اور ایمرجنسی کمانڈر' },
  { id: 'sports', nameEn: 'Sports Persons', nameHi: 'खिलाड़ी एवं खेल रत्न', nameUr: 'کھلاڑی اور اسپورٹس مین', icon: 'Activity', count: 0, descriptionEn: 'National & international champions, Olympians & coaches', descriptionHi: 'राष्ट्रीय व अंतर्राष्ट्रीय चैंपियन, कोच व खिलाड़ी', descriptionUr: 'قومی اور بین الاقوامی کھلاڑی' },
  { id: 'media-writers', nameEn: 'Writers, Artists & Media', nameHi: 'लेखक, कलाकार एवं पत्रकार', nameUr: 'مصنفین، فنکار اور صحافی', icon: 'PenTool', count: 0, descriptionEn: 'Authors, senior journalists, poets & cultural icons', descriptionHi: 'साहित्यकार, वरिष्ठ पत्रकार, कवि व सांस्कृतिक धरोहर', descriptionUr: 'مصنفिन، صحافی اور شعراء' },
  { id: 'social-workers', nameEn: 'Social Workers & Reformers', nameHi: 'समाज सेवी एवं सुधारक', nameUr: 'سماجی کارکن اور مصلح', icon: 'HeartHandshake', count: 3, descriptionEn: 'Philanthropists, NGO leaders & community reformers', descriptionHi: 'दानवीर, एनजीओ संस्थापक व समाज सुधारक', descriptionUr: 'فلاحی اور سماجی رہنما' }
];

export const INITIAL_ACHIEVERS: AchieverProfile[] = [
  {
    id: 'socialist-munshi-khan',
    name: { en: 'Munshi Khan', hi: 'मुंशी खान', ur: 'منشی خان' },
    displayName: { en: 'Senior Socialist', hi: 'वरिष्ठ समाजवादी', ur: 'سینئر سوشلسٹ' },
    gender: 'Male',
    nativePlace: { en: 'Gota Vijaypur, Sheopur, Madhya Pradesh', hi: 'गोटा विजयपुर, श्योपुर, मध्य प्रदेश', ur: 'گوٹا وجے پور، شیوپور، مدھیہ پردیش' },
    currentCity: { en: 'Gota Vijaypur', hi: 'गोटा विजयपुर', ur: 'گوٹا وجے پور' },
    district: { en: 'Sheopur', hi: 'श्योपुर', ur: 'شیوپور' },
    state: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', ur: 'مدھیہ پردیش' },
    country: { en: 'India', hi: 'भारत', ur: 'انڈیا' },
    occupation: { en: 'Senior Socialist & Marriage Relationship Specialist', hi: 'वरिष्ठ समाजवादी एवं विवाह संबंध विशेषज्ञ', ur: 'سینئر سوشلسٹ اور میرج ریلیشن شپ اسپیشلسٹ' },
    categoryId: 'social-workers',
    categoryTier: 'leadership',
    designation: { en: 'Senior Socialist', hi: 'वरिष्ठ समाजवादी', ur: 'سینئر سوشلسٹ' },
    organization: { en: 'Rangrez Community Morena', hi: 'रंगरेज़ समुदाय मुरैना', ur: 'رنگریز کمیونٹی مورینہ' },
    employmentType: { en: 'Private', hi: 'निजी', ur: 'نجی' },
    yearsOfExperience: '25+ Years',
    qualification: { en: 'Graduate', hi: 'स्नातक', ur: 'گریجویٹ' },
    university: { en: 'Recognized University', hi: 'मान्यता प्राप्त विश्वविद्यालय', ur: 'تسلیم شدہ یونیورسٹی' },
    yearOfAchievement: 2025,
    careerJourney: {
      en: 'With over two decades of dedicated community service, Shri Munshi Khan is a widely respected Senior Socialist and matrimonial relationship expert based in Gota Vijaypur, Sheopur district, Madhya Pradesh. Associated with the Rangrez Community Morena, he has devoted his life to promoting family harmony, counseling couples, mediating marital issues, and championing social upliftment in the region.',
      hi: 'दो दशकों से अधिक की समर्पित जनसेवा के साथ, श्री मुंशी खान गोता विजयपुर, श्योपुर (म.प्र.) के एक अत्यंत सम्मानित वरिष्ठ समाजसेवी और वैवाहिक परामर्श विशेषज्ञ हैं। रंगरेज समाज मुरैना से जुड़े रहकर, उन्होंने अपना जीवन पारिवारिक सौहार्द को बढ़ावा देने, युवाओं का मार्गदर्शन करने और समाज सुधार के कार्यों में समर्पित किया है।',
      ur: 'دو دہائیوں سے زائد کی بے لوث سماجی خدمت کے ساتھ, جناب منشی خان گوتا وجے پور, شوپور (ایم پی) کے ایک انتہائی محترم سینئر سماجی خادم اور ازدواجی و خاندانی مشیر ہیں۔ رنگریز برادری مورینا کے ساتھ مل کر, انہوں نے اپنی زندگی خاندانی ہم آہنگی, نوجوانوں کی رہنمائی اور سماجی اصلاحات کے لیے وقف کی ہے۔'
    },
    biography: {
      en: 'Shri Munshi Khan is a distinguished Senior Socialist and community pillar residing in Gota Vijaypur, Sheopur (Madhya Pradesh). Possessing a Graduate degree and deep practical insight into social dynamics, he is recognized across Sheopur and Morena districts as a master of marital counseling and family dispute resolution. Working through Rangrez Community Morena, he has preserved countless homes, inspired youth toward higher education, and established peaceful conflict resolution mechanisms.',
      hi: 'श्री मुंशी खान गोता विजयपुर, श्योपुर (म.प्र.) के एक प्रतिष्ठित वरिष्ठ समाजसेवी और सामाजिक धरोहर हैं। स्नातक स्तर की शिक्षा और सामाजिक व्यवहार के गहरे ज्ञान के साथ, उन्हें श्योपुर और मुरैना जिले भर में वैवाहिक विवादों के सर्वमान्य समाधान और पारिवारिक परामर्श के क्षेत्र में महारत हासिल है। रंगरेज समाज मुरैना के माध्यम से वे अनगिनत परिवारों को एकजुट रखने और युवाओं में नैतिक शिक्षा का प्रसार करने में सक्रिय हैं।',
      ur: 'جناب منشی خان گوتا وجے پور, شوپور (ایم پی) سے تعلق رکھنے والے ایک باوقار سینئر سماجی رہنما اور معاشرتی رہنما ہیں۔ وہ خاندانی تنازعات کے حل اور ازدواجی رشتوں کو جوڑنے کے ماہر تسلیم کیے جاتے ہیں۔ انہوں نے رنگریز برادری مورینا کے ذریعے ان گنت خاندانوں کو بکھرنے से بچایا ہے اور تعلیمی بیداری مہمات چلائی ہیں۔'
    },
    majorAchievements: [
      'Senior Socialist and Master Relationship Counselor, Rangrez Community Morena',
      '25+ years of distinguished public arbitration in resolving matrimonial and family disputes in Sheopur & Morena',
      'Promoted social peace and marital stability across dozens of villages in Vijaypur Tehsil',
      'Pioneered community dispute resolution and youth mentorship forums',
      'Honored with Community Leadership & Social Excellence Honor (2025)'
    ],
    awardsHonors: [
      'Rangrez Samaj Senior Socialist Leadership Award (2025)',
      'Sheopur District Social Reformer & Arbitrator Honor',
      'Matrimonial Harmony & Community Peace Excellence Award'
    ],
    socialContributions: {
      en: 'Provides free marital arbitration, supports underprivileged families in marriage ceremonies, guides youth in higher education, and fosters inter-community harmony in Sheopur.',
      hi: 'वैवाहिक परामर्श व मध्यस्थता सेवाएं निःशुल्क प्रदान करना, निर्धन परिवारों के विवाह कार्यक्रमों में सहयोग और श्योपुर में युवाओं के लिए उच्च शिक्षा मार्गदर्शन।',
      ur: 'خاندانی مصالحت کی مفت خدمات, غریب خاندانوں کی شادیوں میں تعاون اور شوپور کے نوجوانوں کی تعلیمی و اخلاقی رہنمائی।'
    },
    inspirationalMessage: {
      en: 'A peaceful home is the bedrock of a strong society. Cultivate patience, empathy, and mutual trust in every relationship.',
      hi: 'एक शांत and खुशहाल परिवार ही मजबूत समाज की नींव है। हर रिश्ते में धैर्य, सहानुभूति और आपसी विश्वास बनाए रखें।',
      ur: 'ایک پرامن اور خوشگوار گھرانہ ہی مضبوط معاشرے کی بنیاد ہے۔ ہر رشتے میں صبر, ہمدردی اور باہمی اعتماد کو فروغ دیں۔'
    },
    careerAdvice: {
      en: 'Combine quality education with moral integrity. Dialogue and humility can solve even the most complex human disputes.',
      hi: 'गुणवत्तापूर्ण शिक्षा के साथ नैतिक मूल्यों को अपनाएं। संवाद और विनम्रता से बड़े से बड़े विवाद का हल निकाला जा सकता है।',
      ur: 'اعلیٰ تعلیم کے ساتھ اخلاقی اقدار کو اپنائیں۔ بات چیت اور عاجزی سے بڑے سے بڑا تنازعہ भी हल किया जा सकता है।'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Social Service', 'Matrimonial Relationships', 'Family Counseling', 'Community Welfare'],
    contactPermission: true,
    email: 'munshi.khan@rangrezcommunity.org',
    phone: '+91 98290 66443',
    whatsapp: '+91 98290 66443',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://lh3.googleusercontent.com/d/1kVu7ZnDym9XicdHiCiut_5QZRxFNUsw6',
    coverImageUrl: 'https://lh3.googleusercontent.com/d/1YK33jedar7nky-4pHmh-lgrnxgKrCl9R',
    badges: ['🤝 Senior Socialist', 'Marriage Relationship Expert', '⭐ Community Leader', 'Sheopur MP Leader', '🤝 Family Arbitrator', '🎓 Graduate Scholar']
  },
  {
    id: 'socialist-rafiq-ahmad',
    name: { en: 'Rafiq Ahmad', hi: 'रफीक अहमद', ur: 'رفیق احمد' },
    displayName: { en: 'Senior Socialist', hi: 'वरिष्ठ समाजवादी', ur: 'سینئر سوشلسٹ' },
    gender: 'Male',
    nativePlace: { en: 'Joura, Morena, Madhya Pradesh', hi: 'जौरा, मुरैना, मध्य प्रदेश', ur: 'جورا، مورینا، مدھیہ پردیش' },
    currentCity: { en: 'Joura', hi: 'जोउरा', ur: 'جورہ' },
    district: { en: 'Morena', hi: 'मुरैना', ur: 'مورینا' },
    state: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', ur: 'مدھیہ پردیش' },
    country: { en: 'India', hi: 'भारत', ur: 'انڈیا' },
    occupation: { en: 'Senior Socialist & Matrimonial Relationship Specialist', hi: 'वरिष्ठ समाजवादी एवं वैवाहिक संबंध विशेषज्ञ', ur: 'سینئر سوشلسٹ اور ازدواجی تعلقات کے ماہر' },
    categoryId: 'social-workers',
    categoryTier: 'leadership',
    designation: { en: 'Senior Socialist', hi: 'वरिष्ठ समाजवादी', ur: 'سینئر سوشلسٹ' },
    organization: { en: 'Rangrez Community Morena', hi: 'रंगरेज़ समुदाय मुरैना', ur: 'رنگریز کمیونٹی مورینہ' },
    employmentType: { en: 'Private', hi: 'निजी', ur: 'نجی' },
    yearsOfExperience: '25+ Years',
    qualification: { en: 'Graduate', hi: 'स्नातक', ur: 'گریجویٹ' },
    university: { en: 'Recognized University', hi: 'मान्यता प्राप्त विश्वविद्यालय', ur: 'تسلیم شدہ یونیورسٹی' },
    yearOfAchievement: 2025,
    careerJourney: {
      en: 'With over two decades of selfless social service, Shri Rafiq Ahmad is a highly revered Senior Socialist and marital relationship expert in Joura, Morena district, Madhya Pradesh. Serving with distinction in the Rangrez Community Morena, he has dedicated his life to counseling families, resolving complex matrimonial disputes, fostering marital harmony, and uplifting the community through peaceful arbitration and educational advocacy.',
      hi: 'दो दशकों से अधिक के निस्वार्थ समाज सेवा के साथ, श्री रफ़ीक अहमद जौरा, मुरैना (म.प्र.) के एक अत्यंत सम्मानित वरिष्ठ समाजसेवी और वैवाहिक परामर्श विशेषज्ञ हैं। रंगरेज समाज मुरैना में अपनी विशिष्ट सेवाएं देते हुए, उन्होंने अपना जीवन परिवारों के बीच सामंजस्य स्थापित करने, वैवाहिक विवादों का शांतिपूर्ण समाधान करने और सामाजिक उत्थान के लिए समर्पित किया है।',
      ur: 'دو دہائیوں سے زائد کی بے لوث سماجی خدمت کے ساتھ, جناب رفیق احمد جوڑا, مورینا (ایم پی) کے ایک انتہائی محترم سینئر سماجی رہنما اور ازدواجی و خاندانی مشیر ہیں۔ رنگریز برادری مورینا میں اپنی نمایاں خدمات انجام دیتے ہوئے, انہوں نے اپنی زندگی خاندانی تنازعات کے حل, کامیاب ازدواجی رشتوں کی استواری اور معاشرتی فلاح کے لیے وقف کی ہے۔'
    },
    biography: {
      en: 'Shri Rafiq Ahmad is a seasoned Senior Socialist and community pillar based in Joura, Morena (M.P.). A Graduate with deep wisdom and compassionate dispute-resolution skills, he is widely celebrated across Madhya Pradesh as an expert in preserving family bonds and resolving matrimonial & relationship challenges. Through Rangrez Community Morena, he mentors young couples, leads social reforms, and actively contributes to educational and welfare initiatives.',
      hi: 'श्री रफ़ीक अहमद जौरा, मुरैना (म.प्र.) के एक वरिष्ठ समाजसेवी और समाज के मुख्य स्तंभ हैं। स्नातक की योग्यता और गहन सामाजिक समझ के साथ, उन्हें मध्य प्रदेश भर में पारिवारिक रिश्तों को सहेजने और वैवाहिक विवादों के शांतिपूर्ण समाधान में महारत हासिल है। रंगरेज समाज मुरैना के माध्यम से वे युवा जोड़ों का मार्गदर्शन करते हैं और सामाजिक सुधारों का नेतृत्व करते हैं।',
      ur: 'جناب رفیق احمد جوڑا, مورینا (ایم پی) سے تعلق رکھنے والے ایک باوقار سینئر سماجی رہنما اور معاشرتی رہنما ہیں۔ وہ خاندانی رشتوں کو جوڑنے اور ازدواجی مسائل کے پرامن اور خوشگوار حل کے ماہر تسلیم کیے جاتے ہیں۔ وہ رنگریز برادری مورینا کے ذریعے نوجوان جوڑوں کی رہنمائی اور سماجی اصلاحات کا کام انجام دے رہے ہیں۔'
    },
    majorAchievements: [
      'Senior Socialist and Trusted Family Arbitrator, Rangrez Community Morena',
      '25+ years of exemplary service in resolving matrimonial disputes and building peaceful family bonds',
      'Successfully counseled and united hundreds of families across Morena and Chambal region',
      'Pioneered community counseling and social dispute resolution forums',
      'Honored with Community Pride and Social Service Excellence Award (2025)'
    ],
    awardsHonors: [
      'Rangrez Community Social Excellence Award (2025)',
      'Morena Senior Socialist & Peace Maker Honor',
      'Chambal Social Reformer & Matrimonial Harmony Award'
    ],
    socialContributions: {
      en: 'Offers free counseling for family unity, mediates marital disputes, assists underprivileged families in marriage arrangements, and promotes youth education in Morena.',
      hi: 'पारिवारिक एकता के लिए मुफ्त परामर्श, वैवाहिक विवादों का मध्यस्थता से समाधान, गरीब परिवारों के विवाह में सहयोग और मुरैना में युवा शिक्षा का संवर्धन।',
      ur: 'خاندانی اتحاد کے لیے مفت مشاورت, ازدواجی تنازعات کی مصالحت, غریب خاندانوں کی شادیوں میں معاونت اور تعلیمی بیداری۔'
    },
    inspirationalMessage: {
      en: 'Mutual respect, patience, and understanding are the pillars of every strong family. Invest time in nurturing relationships and serving your community.',
      hi: 'आपसी सम्मान, धैर्य और समझ ही हर मजबूत परिवार का आधार है। रिश्तों को संवारने और अपने समाज की सेवा में अपना समय लगाएं।',
      ur: 'باہمی احترام, صبر اور افہام و تفہیم ہی ہر مضبوط خاندان کی بنیاد ہے۔ رشتوں کو نبھانے اور معاشرے کی خدمت میں اپنا وقت دیں۔'
    },
    careerAdvice: {
      en: 'Education combined with moral values builds a prosperous society. Always listen patiently and resolve conflicts through dialogue.',
      hi: 'नैतिक मूल्यों के साथ शिक्षा एक समृद्ध समाज का निर्माण करती है। हमेशा धैर्यपूर्वक सुनें और बातचीत से विवाद सुलझाएं।',
      ur: 'اخلاقی قدروں के साथ تعلیم ایک خوشحال معاشرہ بناتی ہے۔ ہمیشہ صبر سے سنیں اور بات چیت کے ذریعے مسائل حل کریں۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Social Reform', 'Matrimonial Counseling', 'Family Dispute Arbitration', 'Community Leadership'],
    contactPermission: true,
    email: 'rafiq.ahmad@rangrezcommunity.org',
    phone: '+91 98290 77112',
    whatsapp: '+91 98290 77112',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://lh3.googleusercontent.com/d/1kICR_JmDjP1f1IOXUfCJjVjePW5mZxwM',
    coverImageUrl: 'https://lh3.googleusercontent.com/d/1YjaXWcs0YLnAF-f3516GOh0IRf0DlMM7',
    badges: ['🤝 Senior Socialist', 'Marriage Relationship Expert', '⭐ Community Leader', '25+ Yrs Social Service', 'Morena MP Leader', '🤝 Family Arbitrator']
  },
  {
    id: 'socialist-nishar-khan',
    name: { en: 'Nishar Khan', hi: 'निशार खान', ur: 'نثار خان' },
    displayName: { en: 'Samajsevi', hi: 'समाजसेवी', ur: 'سماجسیوی' },
    fatherName: { en: 'Haji Waldar Khan', hi: 'हाजी वलदार खान', ur: 'حاجی ولدار خان' },
    gender: 'Male',
    dob: '01/01/1983',
    nativePlace: { en: 'Joura, Morena, Madhya Pradesh', hi: 'जौरा, मुरैना, मध्य प्रदेश', ur: 'جورا، مورینا، مدھیہ پردیش' },
    currentCity: { en: 'Joura', hi: 'जोउरा', ur: 'جورہ' },
    district: { en: 'Morena', hi: 'मुरैना', ur: 'مورینا' },
    state: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', ur: 'مدھیہ پردیش' },
    country: { en: 'India', hi: 'भारत', ur: 'انڈیا' },
    occupation: { en: 'Social Reformer & Community Leader', hi: 'समाज सुधारक एवं सामुदायिक नेता', ur: 'سوشل ریفارمر اور کمیونٹی لیڈر' },
    categoryId: 'social-workers',
    categoryTier: 'leadership',
    designation: { en: 'Samajsevi', hi: 'समाजसेवी', ur: 'سماجسیوی' },
    organization: { en: 'Rangrez samaj Joura', hi: 'रंगरेज समाज जौरा', ur: 'رنگریز سماج جورہ' },
    employmentType: { en: 'Private', hi: 'निजी', ur: 'نجی' },
    yearsOfExperience: '20+ Years',
    qualification: { en: 'Intermediate', hi: 'मध्यवर्ती', ur: 'انٹرمیڈیٹ' },
    university: { en: 'MP State Board', hi: 'एमपी राज्य बोर्ड', ur: 'ایم پی اسٹیٹ بورڈ' },
    yearOfAchievement: 2025,
    careerJourney: {
      en: 'Shri Nishar Khan is a committed social reformer and community leader from Joura, Madhya Pradesh. He has spent more than two decades actively working for the welfare, unity, and development of the Muslim Rangrez Community. He previously served as the President of the Joura Mass Marriage Committee (Marriage Sammelan Committee), where he played a significant role in organizing community mass marriage ceremonies and promoting social harmony. His leadership, dedication, and courage to stand against injustice have made him a highly respected figure.',
      hi: 'श्री निशार खान जौरा, मध्य प्रदेश के एक प्रतिबद्ध समाज सुधारक और समुदाय के नेता हैं। उन्होंने मुस्लिम रंगरेज समाज के कल्याण, एकता और विकास के लिए दो दशकों से अधिक का समय सक्रिय रूप से काम करते हुए बिताया है। उन्होंने पूर्व में जौरा सामूहिक विवाह समिति (सम्मेलन समिति) के अध्यक्ष के रूप में कार्य किया, जहाँ उन्होंने सामूहिक विवाह समारोहों के आयोजन और सामाजिक समरसता को बढ़ावा देने में महत्वपूर्ण भूमिका निभाई। उनका नेतृत्व, समर्पण और अन्याय के खिलाफ खड़े होने का साहस उन्हें एक अत्यंत सम्मानित व्यक्तित्व बनाता है।',
      ur: 'جناب نشار خان جورا, مدھیہ پردیش کے ایک پرعزم سماجی مصلح اور کمیونٹی لیڈر ہیں۔ انہوں نے مسلم رنگریز برادری کی فلاح و بہبود, اتحاد اور ترقی کے لیے دو دہائیوں سے زیادہ کا عرصہ سرگرمی سے کام کرتے ہوئے گزارا ہے۔ انہوں نے اس سے قبل جورا اجتماعی شادی کمیٹی (شادی سممیلن کمیٹی) کے صدر کے طور پر خدمات انجام دیں, جہاں انہوں ने اجتماعی شادیوں کی تقریبات کے انعقاد اور سماجی ہم آہنگی کو فروغ دینے میں اہم کردار ادا کیا۔ ان کی قیادت, لگن اور ناانصافی کے خلاف کھڑے ہونے کی ہمت انہیں ایک انتہائی قابل احترام شخصیت بناتی ہے۔'
    },
    biography: {
      en: 'Mr. Nishar Khan is a respected social worker from Joura, Morena (Madhya Pradesh), dedicated to the unity, progress, and welfare of the Muslim Rangrez Community. Known for his courage, honesty, and outspoken nature, he always raises his voice against injustice and stands firmly for what is right. Under his presidency of the Joura Mass Marriage Committee, he introduced reforms to simplify community marriages, successfully organizing large-scale mass weddings that supported countless underprivileged families. His fearless personality, straightforward approach, and unwavering commitment to defending the interests of the community have earned him deep respect, making him an inspiring and influential figure within the community.',
      hi: 'श्री निशार खान जौरा, मुरैना (मध्य प्रदेश) के एक सम्मानित सामाजिक कार्यकर्ता हैं, जो मुस्लिम रंगरेज समुदाय की एकता, प्रगति और कल्याण के लिए समर्पित हैं। अपने साहस, ईमानदारी और मुखर स्वभाव के लिए जाने जाने वाले, वे हमेशा अन्याय के खिलाफ अपनी आवाज उठाते हैं और जो सही है उसके लिए दृढ़ता से खड़े रहते हैं। जौरा सामूहिक विवाह समिति के अध्यक्ष के रूप में, उन्होंने सामुदायिक विवाहों को सरल बनाने के लिए सुधार पेश किए, बड़े पैमाने पर सामूहिक विवाहों का सफलतापूर्वक आयोजन किया, जिससे अनगिनत वंचित परिवारों को मदद मिली। उनकी निडर छवि, सीधा दृष्टिकोण और समुदाय के हितों की रक्षा के लिए अटूट प्रतिबद्धता ने उन्हें गहरा सम्मान दिलाया है, जिससे वे समुदाय के भीतर एक प्रेरक और प्रभावशाली व्यक्ति बन गए हैं।',
      ur: 'جناب نشار خان جورا, مورینا (مدھیہ پردیش) کے ایک معزز سماجی کارکن ہیں, جو مسلم رنگریز برادری کے اتحاد, ترقی اور فلاح و بہبود کے لیے وقف ہیں۔ اپنی ہمت, ایمانداری اور بے باک مزاج کے لیے جانے جانے والے, وہ ہمیشہ ناانصافی کے خلاف آواز اٹھاتے ہیں اور جو درست ہے اس کے لیے مضبوطی سے کھڑے رہتے ہیں۔ جورا اجتماعی شادی کمیٹی کے صدر کی حیثیت سے, انہوں نے خاندانی شادیوں کو آسان بنانے کے لیے اصلاحات متعارف کرائیں, بڑے پیمانے پر اجتماعی شادیوں کا کامیابی سے انعقاد کیا جس سے بے شمار مستحق خاندانوں کو مدد ملی۔ ان کی نڈر شخصیت, سیدھا نقطہ نظر اور برادری کے مفادات کے تحفظ کے لیے غیر متزلزل عزم نے انہیں گہرا احترام بخشا ہے, جس سے وہ برادری میں ایک متاثر کن اور بااثر شخصیت بن گئے ہیں۔'
    },
    majorAchievements: [
      'Former President of Joura Mass Marriage Committee (Marriage Sammelan Committee)',
      'Organized large-scale mass marriages, promoting social harmony and reducing financial burden on underprivileged families',
      'Actively worked for the unity, welfare, and development of the Muslim Rangrez Community in Morena district',
      'Widely recognized for courageous public advocacy and standing firmly against social injustice',
      'Established community harmony, youth guidance, and reform initiatives in Joura, MP'
    ],
    awardsHonors: [
      'Community Leadership & Social Reform Honor (Joura, MP)',
      'Outstanding Social Service Award by Rangrez Samaj Morena',
      'Marriage Sammelan Committee Leadership Excellence Award'
    ],
    socialContributions: {
      en: 'Dedicated to community welfare, promoting mass marriage to prevent financial debt, providing guidance to underprivileged youth, and raising voices for human rights.',
      hi: 'सामुदायिक कल्याण के लिए समर्पित, आर्थिक कर्ज से बचाने के लिए सामूहिक विवाह को बढ़ावा देना, वंचित युवाओं को मार्गदर्शन देना और मानवाधिकारों के लिए आवाज उठाना।',
      ur: 'معاشرتی بہبود کے لیے وقف, خاندانوں کو قرضوں سے بچانے کے لیے اجتماعی شادیوں کا فروغ, ضرورت مند نوجوانوں کی رہنمائی اور انسانی حقوق کے لیے آواز اٹھانا।'
    },
    inspirationalMessage: {
      en: 'Always have the courage to speak the truth and stand firmly against injustice. Unity and honest service are our greatest strengths.',
      hi: 'हमेशा सच बोलने का साहस रखें और अन्याय के खिलाफ दृढ़ता से खड़े रहें। एकता और ईमानदार सेवा ही हमारी सबसे बड़ी ताकत है।',
      ur: 'ہمیشہ سچ بولنے کا حوصلہ رکھیں اور ناانصافی کے خلاف مضبوطی سے کھڑے رہیں۔ اتحاد اور ایماندارانہ خدمت ہی ہماری سب سے بڑی طاقت ہے۔'
    },
    careerAdvice: {
      en: 'Acquire education and combine it with moral values. Dedicate a part of your life to uplift and unite your community.',
      hi: 'शिक्षा प्राप्त करें और इसे नैतिक मूल्यों के साथ जोड़ें। अपने जीवन का एक हिस्सा अपने समुदाय के उत्थान और एकता के लिए समर्पित करें।',
      ur: 'تعلیم حاصل کریں اور اسے اخلاقی قدروں کے ساتھ جوڑیں۔ اپنی زندگی کا ایک حصہ اپنی برادری کی ترقی اور اتحاد کے لیے وقف کریں۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Social Reform', 'Community Leadership', 'Mass Marriage Organizing', 'Conflict Resolution'],
    contactPermission: true,
    email: 'nisharkhan.joura@gmail.com',
    phone: '+91 91314 26644',
    whatsapp: '+91 91314 26644',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://lh3.googleusercontent.com/d/1vLCuH1ZXg-jNIl1yYVnQE2Pu4lycCeNu',
    coverImageUrl: 'https://lh3.googleusercontent.com/d/18yir3nthcRTt6rDoaw9VaIHgEAVTQHbg',
    badges: ['🤝 Samajsevi', '⭐ Community Leader', 'Former Marriage Sammelan President', 'Morena MP Leader', '🎓 Intermediate Scholar']
  },
  {
    id: 'politician-fakhruddin-khan',
    name: { en: 'Fakhruddin Khan', hi: 'फखरुद्दीन खान', ur: 'فخرالدین خان' },
    displayName: { en: 'Rahimbaks Khan', hi: 'रहीमबक्स खान', ur: 'رحیم بخش خان' },
    fatherName: { en: 'Elder Khan', hi: 'बड़े खान', ur: 'بزرگ خان' },
    gender: 'Male',
    dob: '1975-05-23',
    nativePlace: { en: 'Kailarash, Morena, Madhya Pradesh', hi: 'कैलाश, मुरैना, मध्य प्रदेश', ur: 'کیلارش، مورینا، مدھیہ پردیش' },
    currentCity: { en: 'Kailarash', hi: 'कैलाश', ur: 'کیلارش' },
    district: { en: 'Morena', hi: 'मुरैना', ur: 'مورینا' },
    state: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', ur: 'مدھیہ پردیش' },
    country: { en: 'India', hi: 'भारत', ur: 'انڈیا' },
    occupation: { en: 'Mandal President, BJP (Kailaras) & Politician', hi: 'मंडल अध्यक्ष, भाजपा (कैलारस) एवं राजनीतिज्ञ', ur: 'منڈل صدر، بی جے پی (کیلارس) اور سیاست دان' },
    categoryId: 'public-rep',
    categoryTier: 'leadership',
    designation: { en: 'Mandal President Of B.J.P. Kailaras', hi: 'भाजपा मंडल अध्यक्ष कैलारस', ur: 'بی جے پی کے منڈل صدر کیلارس' },
    organization: { en: 'BJP (Bharatiya Janata Party)', hi: 'बीजेपी (भारतीय जनता पार्टी)', ur: 'بی جے پی (بھارتیہ جنتا پارٹی)' },
    employmentType: { en: 'Private', hi: 'निजी', ur: 'نجی' },
    yearsOfExperience: '22 Years',
    qualification: { en: 'Graduate', hi: 'स्नातक', ur: 'گریجویٹ' },
    university: { en: 'Jiwaji University Gwalior', hi: 'जीवाजी विश्वविद्यालय ग्वालियर', ur: 'جیواجی یونیورسٹی گوالیار' },
    yearOfAchievement: 2025,
    careerJourney: {
      en: 'With over 22 years of dedicated public service and political leadership, Fakhruddin Khan (popularly known as Rahimbaks Khan) serves as the Mandal President of the Bharatiya Janata Party (B.J.P.) in Kailaras, Morena district, Madhya Pradesh. A graduate from Jiwaji University Gwalior, he has been a steadfast champion for grassroots community welfare, local development, educational upliftment, and public representation.',
      hi: '22 वर्षों से अधिक के समर्पित सार्वजनिक जीवन और राजनीतिक नेतृत्व के साथ, फ़खरुद्दीन खान (उर्फ रहीमबख्श खान) कैलाश रस, जिला मुरैना (मध्य प्रदेश) में भारतीय जनता पार्टी (बीजेपी) के मंडल अध्यक्ष के रूप में सेवारत हैं। जीवाजी विश्वविद्यालय ग्वालियर से स्नातक, वे जमीनी स्तर पर जन कल्याण, स्थानीय विकास, शैक्षणिक उत्थान और समाज के अधिकारों के लिए निरंतर प्रयासरत हैं।',
      ur: 'عوامی خدمت اور سیاسی قیادت کے 22 سال سے زائد کے تجربے کے ساتھ, فخر الدین خان (عرف رحیم بخش خان) کیلا رس, ضلع مورینا (مدھیہ پردیش) میں بھارتیہ جنتا پارٹی (بی جے پی) کے منڈل صدر کے طور پر خدمات انجام دے رہے ہیں۔ جیواجی یونیورسٹی گوالیار سے گریجویٹ, وہ نچلی سطح پر عوامی فلاح و بہبود, تعلیمی ترقی اور معاشرتی فلاح کے لیے مسلسل کوشاں ہیں۔'
    },
    biography: {
      en: 'Shri Fakhruddin Khan (Rahimbaks Khan) is a prominent public figure and respected political leader from Kailaras, Morena, Madhya Pradesh. Armed with a Bachelor\'s Degree from Jiwaji University Gwalior and over two decades of experience in organizational leadership, he has played an instrumental role in bridging government welfare schemes with rural communities, promoting youth empowerment, and fostering social harmony across the region.',
      hi: 'श्री फ़खरुद्दीन खान (रहीमबख्श खान) कैलाश रस, मुरैना (म.प्र.) से एक सम्मानित जननेता और राजनीतिक हस्ती हैं। जीवाजी विश्वविद्यालय ग्वालियर से स्नातक और संगठन नेतृत्व में दो दशकों से अधिक का अनुभव रखने वाले श्री खान ने सरकारी जनकल्याणकारी योजनाओं को ग्रामीण इलाकों तक पहुंचाने, युवा सशक्तिकरण और सामाजिक सौहार्द बनाए रखने में अग्रणी भूमिका निभाई है।',
      ur: 'جناب فخر الدین خان (رحیم بخش خان) کیلا رس, مورینا (ایم پی) سے ایک نمایاں عوامی رہنما اور محترم سیاسی شخصیت ہیں۔ جیواجی یونیورسٹی گوالیار سے گریجویٹ اور دو دہائیوں سے زیادہ کی انتظامی و سیاسی قیادت کے حامل, وہ حکومتی اسکیموں کو غریبوں تک پہنچانے اور نوجوانوں کی رہنمائی میں نمایاں کردار ادا کر رہے ہیں۔'
    },
    majorAchievements: [
      'Appointed Mandal President of Bharatiya Janata Party (B.J.P.) in Kailaras, Morena (Madhya Pradesh)',
      '22+ years of continuous grassroots public governance and community advocacy',
      'Successfully facilitated state government welfare schemes for thousands of families in Morena district',
      'Graduated with honors from Jiwaji University Gwalior',
      'Promoted youth voter awareness, skill development, and educational mentorship in Chambal region'
    ],
    awardsHonors: [
      'B.J.P. Organizational Leadership Honor (Morena, MP)',
      'Community Public Representative Excellence Award (2025)',
      'Chambal Grassroots Leadership Recognition'
    ],
    socialContributions: {
      en: 'Actively works for community cohesion, facilitates government schemes for underprivileged youth and farmers, and organizes blood donation drives and educational aid in Kailaras.',
      hi: 'सामुदायिक सौहार्द को बढ़ावा देना, वंचित युवाओं व किसानों तक सरकारी सहायता पहुंचाना तथा कैलाश रस में रक्तदान शिविरों एवं शैक्षणिक सहायता अभियानों का संचालन।',
      ur: 'سماجی ہم آہنگی کا فروغ, غریب کسانوں اور نوجوانوں کو حکومتی امداد کی فراہمی اور تعلیمی بیداری مہمات۔'
    },
    inspirationalMessage: {
      en: 'True leadership lies in humble service to the people. Dedicate your energy towards education, discipline, and building a stronger, united society.',
      hi: 'सच्चा नेतृत्व जनता की निस्वार्थ सेवा में निहित है। अपनी ऊर्जा को शिक्षा, अनुशासन और एक मजबूत, एकजुट समाज के निर्माण में लगाएं।',
      ur: 'سچی قیادت عوام کی بے لوث خدمت کا نام ہے۔ اپنی توانائی تعلیم, ڈسپلن اور ایک مضبوط معاشرے کی تعمیر میں صرف کریں۔'
    },
    careerAdvice: {
      en: 'Gain solid academic qualifications, stay connected to your roots, and actively participate in nation-building and public service.',
      hi: 'ठोस शैक्षणिक योग्यता हासिल करें, अपनी जड़ों से जुड़े रहें और राष्ट्र निर्माण व जनसेवा में सक्रिय रूप से भाग लें।',
      ur: 'اعلیٰ تعلیم حاصل کریں, اپنی جڑوں سے جڑے رہیں اور قوم کی تعمیر و ترقی میں حصہ لیں۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Political Governance', 'Public Representation', 'Community Leadership', 'Development Work'],
    contactPermission: true,
    email: 'fakhruddin.khan@rangrezcommunity.org',
    phone: '+91 98290 88221',
    whatsapp: '+91 98290 88221',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://lh3.googleusercontent.com/d/1jRBGUC1jvX1_RsMsIW101w-P4tyD2e5k',
    coverImageUrl: 'https://lh3.googleusercontent.com/d/1GB3DLriIQH_mYNtPXav_81w3SU5ZXrMC',
    badges: ['🏛️ Politician', 'BJP Mandal President', '⭐ Public Representative', '22+ Yrs Experience', 'Madhya Pradesh Leader', '🎓 Jiwaji Univ Alumni']
  },
  {
    id: 'haji-asgar-sahab',
    name: { en: 'Haji Asgar Sahab', hi: 'हाजी असगर साहब', ur: 'حاجی اصغر صاحب' },
    displayName: { en: 'Al-Haj Asgar Khan', hi: 'अल-हज असगर खान', ur: 'الحاج اصغر خان' },
    fatherName: { en: 'Chhote Khan', hi: 'छोटे खान', ur: 'چھوٹے خان' },
    gender: 'Male',
    dob: '04/06/1972',
    nativePlace: { en: 'M.S. Road, Joura, Morena, Madhya Pradesh', hi: 'एमएस। रोड, जौरा, मुरैना, मध्य प्रदेश', ur: 'MS۔ روڈ، جورا، مورینا، مدھیہ پردیش' },
    currentCity: { en: 'Joura', hi: 'जोउरा', ur: 'جورہ' },
    district: { en: 'Morena', hi: 'मुरैना', ur: 'مورینا' },
    state: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', ur: 'مدھیہ پردیش' },
    country: { en: 'India', hi: 'भारत', ur: 'انڈیا' },
    occupation: { en: 'Islamic Preacher, Volunteer & Social Worker', hi: 'इस्लामी उपदेशक, स्वयंसेवक और सामाजिक कार्यकर्ता', ur: 'اسلامی مبلغ، رضاکار اور سماجی کارکن' },
    categoryId: 'social-workers',
    categoryTier: 'hajj',
    hajjYear: 2009,
    hajjType: 'Hajj',
    designation: { en: 'Islamic Volunteer, Socialist', hi: 'इस्लामी स्वयंसेवक, समाजवादी', ur: 'اسلامی رضاکار، سوشلسٹ' },
    organization: { en: 'Dawat aur Tablig', hi: 'दावत और तबलीग', ur: 'دعوت اور تبلیغ' },
    qualification: { en: 'Intermidiat', hi: 'मध्यवर्ती', ur: 'انٹرمیڈیٹ' },
    university: { en: 'Madhya Pradesh State Board', hi: 'मध्य प्रदेश राज्य बोर्ड', ur: 'مدھیہ پردیش اسٹیٹ بورڈ' },
    yearOfAchievement: 2009,
    careerJourney: {
      en: 'Dedicated to the service of Islam and the Rangrez Community since his youth, Haji Asgar Sahab has spent decades working with Dawat aur Tablig. He has completed 23 Chillas (40-day preaching missions), 8–10 four-month Tabligh journeys, two international preaching tours to Tanzania, two family Tabligh journeys, and two special visits to the Nizamuddin Markaz. He consistently guides community elders, families, and youth to establish the five daily prayers, follow the Qur’an & Sunnah, and live according to noble values.',
      hi: 'अपनी युवावस्था से ही इस्लाम और रंगरेज समाज की सेवा में समर्पित, हाजी असगर साहब ने दावत और तबलीग के साथ दशकों तक कार्य किया है। उन्होंने 23 चिल्ले (40-दिवसीय प्रचार मिशन), 8-10 चार महीने की तबलीग यात्राएं, तंजानिया के दो अंतर्राष्ट्रीय प्रचार दौरे, दो पारिवारिक तबलीग यात्राएं और निजामुद्दीन मरकज की दो विशेष प्रचार यात्राएं पूरी की हैं। वे निरंतर लोगों—विशेषकर रंगरेज समाज के युवाओं, बुजुर्गों और परिवारों को पांच वक्त की नमाज कायम करने, कुरान और सुन्नत का पालन करने और नेक अखलाक अपनाने के लिए प्रेरित करते हैं।',
      ur: 'اپنی جوانی سے ہی اسلام اور رنگریز برادری کی خدمت کے لیے وقف, حاجی اصغر صاحب نے دعوت اور تبلیغ کے ساتھ دہائیاں گزاری ہیں۔ انہوں نے 23 چلے (40 روزہ تبلیغی مشن), 8-10 چار ماہ کے تبلیغی اسفار, تنزانیہ کے دو بین الاقوامی تبلیغی دورے, دو خاندانی تبلیغی اسفار اور نظام الدین مرکز کے دو خصوصی تبلیغی اسفار مکمل کیے ہیں۔ وہ مسلسل لوگوں—بالخصوص رنگریز برادری کے نوجوانوں, بزرگوں اور خاندانوں کو پانچ وقت کی نماز قائم کرنے, قرآن و سنت پر عمل کرنے اور عمدہ اخلاق اپنانے کی ترغیب دیتے ہیں۔'
    },
    biography: {
      en: 'Al-Haj Asgar Khan, son of Mr. Chhote Khan, is a highly respected member and elder of the Rangrez Community from Joura, Morena District, Madhya Pradesh. Having performed Hajj in 2009, he is widely known for his humility, gentle nature, and unwavering dedication to the teachings of Islam. Known for his honesty, courage, and compassionate approach, he always speaks the truth, promotes unity and kindness, and sincerely advises those around him. Through his lifelong commitment to Dawah, moral values, and community guidance, Al-Haj Asgar Khan continues to inspire others to lead lives rooted in faith, compassion, and righteousness.',
      hi: 'श्री छोटे खान के सुपुत्र अल-हाज असगर खान मध्य प्रदेश के मुरैना जिले के जौरा के रंगरेज समुदाय के एक अत्यंत सम्मानित सदस्य और बुजुर्ग हैं। वर्ष 2009 में हज करने वाले, वे अपनी विनम्रता, सौम्य स्वभाव और इस्लाम की शिक्षाओं के प्रति अटूट समर्पण के लिए व्यापक रूप से जाने जाते हैं। अपनी ईमानदारी, साहस और करुणामय दृष्टिकोण के लिए प्रसिद्ध, वे हमेशा सच बोलते हैं, एकता और दयालुता को बढ़ावा देते हैं और अपने धार्मिक कर्तव्यों के प्रति जागरूक करते हैं।',
      ur: 'الحاج اصغر خان, ولد جناب چھوٹے خان, جورا, ضلع مورینا, مدھیہ پردیش سے تعلق رکھنے والے رنگریز برادری کے ایک انتہائی معزز اور بزرگ رکن ہیں۔ 2009 میں حج کی سعادت حاصل کرنے والے, وہ اپنی عاجزی, نرم مزاجی اور اسلامی تعلیمات سے گہرے لگاؤ کے لیے مشہور ہیں۔ وہ سچ بولنے, اتحاد و بھائی چارے کو فروغ دینے اور اخلاقی اقدار کو عام کرنے میں ہمیشہ پیش پیش رہتے ہیں۔'
    },
    majorAchievements: [
      'Successfully completed the Holy Pilgrimage of Hajj in 2009 at Makkah Al-Mukarramah',
      'Completed 23 Chillas (40-day Dawah missions) & 8-10 four-month Tabligh journeys across India',
      'Conducted two international Islamic preaching tours to Tanzania, Africa for spiritual guidance',
      'Completed two Masturat (family) Tabligh journeys and two special visits to Nizamuddin Markaz',
      'Recognized as a leading Samajsevi and community guide in the historic Joura Mahapanchayat of 2025'
    ],
    awardsHonors: [
      'Islamic Volunteer & Moral Guidance Lifetime Honor (2009)',
      'Distinguished Community Samajsevi Achievement Recognition',
      'International Tabligh Service Appreciation Award (Tanzania Preaching Missions)'
    ],
    socialContributions: {
      en: 'Actively promotes moral reform, drug-free youth campaigns, establishes localized prayer assemblies, and volunteers for social dispute resolution within the Morena and Chambal regions.',
      hi: 'चंबल और मुरैना क्षेत्र में नैतिक सुधारों, नशामुक्त युवा अभियानों, स्थानीय स्तर पर सामूहिक प्रार्थना सभाओं की स्थापना और सामाजिक विवादों के निपटारे में सक्रिय भूमिका।',
      ur: 'چنبل اور مورینا کے علاقوں میں اخلاقی اصلاح, نوجوانوں کی نشہ کے خلاف مہم, مقامی اجتماعات کے انعقاد اور سماجی تنازعات کے حل کے لیے گرانکدر خدمات۔'
    },
    inspirationalMessage: {
      en: 'Dawah is not just about words; it is about living a life of absolute honesty, humility, and compassion that inspires others to turn towards righteousness.',
      hi: 'दावत सिर्फ शब्दों का नाम नहीं है; यह पूर्ण ईमानदारी, विनम्रता और दयालुता से जीवन जीने का नाम है जो दूसरों को नेकी की राह पर चलने के लिए प्रेरित करे।',
      ur: 'دعوت صرف الفاظ کا نام نہیں ہے؛ بلکہ یہ مکمل ایمانداری, عاجزی اور ہمدردی کے ساتھ زندگی گزارنے کا نام ہے جو دوسروں کو نیکی کی طرف راغب کرے۔'
    },
    careerAdvice: {
      en: 'Equip yourself with both high quality modern education and deep moral character. True success lies in serving humanity and staying true to our values.',
      hi: 'स्वयं को उच्च गुणवत्ता वाली आधुनिक शिक्षा और गहरे नैतिक चरित्र दोनों से सुसज्जित करें। सच्ची सफलता मानवता की सेवा और हमारे मूल्यों के प्रति वफादार रहने में है।',
      ur: 'اپنے آپ کو اعلیٰ معیار کی جدید تعلیم اور گہرے اخلاقی کردار دونوں سے آراستہ کریں۔ حقیقی کامیابی انسانیت کی خدمت اور اپنی اقدار پر قائم رہنا ہے۔'
    },
    languagesKnown: ['Hindi', 'Urdu', 'English'],
    expertise: ['Spiritual Mentorship', 'Moral Education', 'Social Service', 'Community Arbitration'],
    contactPermission: true,
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://lh3.googleusercontent.com/d/14--ovBXj67M740_UzPNJ0aJp5id1KKrE',
    coverImageUrl: 'https://lh3.googleusercontent.com/d/1wxCjuqdmhKKD9JiPDF39-2Dl7GDqOvBk',
    badges: ['🕋 Al-Haj', '🕌 Spiritual Guide', '🤝 Senior Samajsevi', '⭐ Community Leader', '🌍 International Dawah']
  }
];

export const INITIAL_MENTORSHIP_REQUESTS: MentorshipRequest[] = [];

export const INITIAL_SUCCESS_STORIES: SuccessStoryItem[] = [];

export const INITIAL_AWARDS_GALLERY: AwardItem[] = [
  {
    id: 'aw-fakhruddin-khan',
    title: {
      en: 'B.J.P. Organizational Leadership & Public Service Honor 2025',
      hi: 'बीजेपी संगठन नेतृत्व एवं जनसेवा सम्मान 2025',
      ur: 'بی جے پی تنظیمی قیادت اور عوامی خدمت کا اعزاز 2025'
    },
    recipientName: 'Fakhruddin Khan (Rahimbaks Khan)',
    category: 'Public Representatives',
    year: 2025,
    description: 'Conferred on Shri Fakhruddin Khan (Mandal President B.J.P. Kailaras) for 22 years of selfless public service, grassroots governance, and community leadership in Morena, MP.',
    type: 'Community Award',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GB3DLriIQH_mYNtPXav_81w3SU5ZXrMC'
  },
  {
    id: 'aw-rafiq-ahmad',
    title: {
      en: 'Rangrez Samaj Senior Socialist & Matrimonial Harmony Honor 2025',
      hi: 'रंगरेज समाज वरिष्ठ समाजसेवी एवं वैवाहिक सौहार्द सम्मान 2025',
      ur: 'رنگریز برادری سینئر سماجی خادم اور ازدواجی ہم آہنگی اعزاز 2025'
    },
    recipientName: 'Rafiq Ahmad (Senior Socialist)',
    category: 'Social Workers & Reformers',
    year: 2025,
    description: 'Conferred on Shri Rafiq Ahmad for 25+ years of exemplary dedication in family dispute resolution, matrimonial arbitration, and social reforms in Joura, Morena (MP).',
    type: 'Community Award',
    imageUrl: 'https://lh3.googleusercontent.com/d/1YjaXWcs0YLnAF-f3516GOh0IRf0DlMM7'
  },
  {
    id: 'aw-munshi-khan',
    title: {
      en: 'Rangrez Samaj Senior Socialist & Social Harmony Honor 2025',
      hi: 'रंगरेज समाज वरिष्ठ समाजसेवी एवं सामाजिक सौहार्द सम्मान 2025',
      ur: 'रंगریز برادری سینئر سماجی خادم اور سماجی ہم آہنگی اعزاز 2025'
    },
    recipientName: 'Munshi Khan (Senior Socialist)',
    category: 'Social Workers & Reformers',
    year: 2025,
    description: 'Conferred on Shri Munshi Khan for 25+ years of dedicated arbitration, matrimonial counseling, and community leadership in Gota Vijaypur, Sheopur (MP).',
    type: 'Community Award',
    imageUrl: 'https://lh3.googleusercontent.com/d/1YK33jedar7nky-4pHmh-lgrnxgKrCl9R'
  }
];
