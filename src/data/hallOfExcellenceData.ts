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
  name: string;
  fatherName?: string;
  gender: 'Male' | 'Female' | 'Other';
  dob?: string;
  nativePlace: string;
  currentCity: string;
  state: string;
  district?: string;
  country: string;
  occupation: string;
  categoryId: string;
  designation: string;
  organization: string;
  qualification: string;
  university: string;
  yearOfAchievement: number;
  careerJourney: { en: string; hi: string; ur: string };
  biography: { en: string; hi: string; ur: string };
  majorAchievements: string[];
  awardsHonors: string[];
  socialContributions: { en: string; hi: string; ur: string };
  inspirationalMessage: { en: string; hi: string; ur: string };
  careerAdvice: { en: string; hi: string; ur: string };
  languagesKnown: string[];
  expertise: string[];
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
  badges: string[];
}

export interface MentorshipRequest {
  id: string;
  studentName: string;
  studentAge: number;
  qualification: string;
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
  { id: 'govt-services', nameEn: 'Government Services', nameHi: 'सरकारी सेवाएं (प्रशासन/सेना/पुलिस)', nameUr: 'سرکاری خدمات (آئی اے ایس/پولیس/فوج)', icon: 'ShieldCheck', count: 66, descriptionEn: 'IAS, IPS, Defense, Police, Revenue & administrative officers', descriptionHi: 'आईएएस, आईपीएस, रक्षा, पुलिस, राजस्व व प्रशासनिक अधिकारी', descriptionUr: 'آئی اے ایس، آئی پی ایس، فوج، پولیس اور انتظامی افسران' },
  { id: 'law-judiciary', nameEn: 'Law & Judiciary', nameHi: 'कानून एवं न्यायपालिका', nameUr: 'قانون اور عدلیہ', icon: 'Scale', count: 43, descriptionEn: 'High Court & District Judges, Supreme Court Advocates & Jurists', descriptionHi: 'उच्च न्यायालय व जिला न्यायाधीश, उच्चतम न्यायालय अधिवक्ता व कानूनविद', descriptionUr: 'ہائیکورٹ و سیشن ججز، سپریم کورٹ کے وکلاء اور قانونی ماہرین' },
  { id: 'medical-excellence', nameEn: 'Medical Excellence', nameHi: 'चिकित्सा उत्कृष्टता', nameUr: 'میڈیکل ایکسیلنس', icon: 'Stethoscope', count: 54, descriptionEn: 'AIIMS Surgeons, Specialists, Chief Medical Officers & Healthcare leaders', descriptionHi: 'एम्स सर्जन, विशेषज्ञ, मुख्य चिकित्सा अधिकारी व स्वास्थ्य नेता', descriptionUr: 'ایمز سرجنز، ماہر ڈاکٹرز اور ہیلتھ کیئر لیڈرز' },
  { id: 'academic-excellence', nameEn: 'Academic Excellence', nameHi: 'शैक्षणिक उत्कृष्टता', nameUr: 'تعلیمی قابلیت و تحقیق', icon: 'BookOpen', count: 118, descriptionEn: 'University Deans, Professors, ISRO Scientists & Government Teachers', descriptionHi: 'विश्वविद्यालय डीन, प्रोफेसर, इसरो वैज्ञानिक एवं सरकारी शिक्षक', descriptionUr: 'یونیورسٹی ڈینز، پروفیسرز، اسرو سائنسدان اور سرکاری اساتذہ' },
  { id: 'professional-excellence', nameEn: 'Professional Excellence', nameHi: 'व्यावसायिक उत्कृष्टता', nameUr: 'پیشہ ورانہ مہارت', icon: 'Briefcase', count: 114, descriptionEn: 'Engineers, IT Architects, CAs, Financial Analysts & Corporate CEOs', descriptionHi: 'इंजीनियर, आईटी आर्किटेक्ट, सीए, वित्तीय विश्लेषक एवं कॉर्पोरेट सीईओ', descriptionUr: 'انجینئرز، آئی ٹی ماہرین، سی اے، مالیاتی تجزیہ کار اور سی ای اوز' },
  { id: 'public-rep', nameEn: 'Public Representatives', nameHi: 'जनप्रतिनिधि एवं नेतृत्व', nameUr: 'عوامی نمائندے اور قائدین', icon: 'Users', count: 16, descriptionEn: 'MPs, MLAs, Mayors, Municipal Councilors & community leaders', descriptionHi: 'सांसद, विधायक, महापौर, पार्षद व जननायक', descriptionUr: 'اراکین پارلیمنٹ، ایم ایل اے، میئرز اور کونسلرز' },
  { id: 'community-leaders', nameEn: 'Community Leaders', nameHi: 'सामुदायिक नेता एवं समाज सुधारक', nameUr: 'برادری کے رہنما اور مصلح', icon: 'HeartHandshake', count: 40, descriptionEn: 'Philanthropists, NGO founders, social reformers & trust presidents', descriptionHi: 'दानवीर, एनजीओ संस्थापक, समाज सुधारक एवं ट्रस्ट अध्यक्ष', descriptionUr: 'فلاحی رہنما، این جی او بانیان اور سماجی مصلح' },
  { id: 'young-achievers', nameEn: 'Young Achievers', nameHi: 'युवा प्रतिभाएं एवं गोल्ड मेडलिस्ट', nameUr: 'نوجوان کامیاب افراد اور ستارے', icon: 'Sparkles', count: 44, descriptionEn: 'National scholars, University gold medalists, sports champions & IIT toppers', descriptionHi: 'राष्ट्रीय छात्रवृत्ति विजेता, गोल्ड मेडलिस्ट, खेल चैंपियन व आईआईटी टॉपर', descriptionUr: 'قومی اسکالرز، گولڈ میڈلسٹ، اسپورٹس چیمپئن اور ٹاپرز' },
  { id: 'lifetime-contribution', nameEn: 'Lifetime Contribution', nameHi: 'आजीवन योगदान एवं समाज रत्न', nameUr: 'لائف ٹائم اچیومنٹ اور لیجنڈز', icon: 'Trophy', count: 18, descriptionEn: 'Padma Shri nominees, President Awardees & legendary community pioneers', descriptionHi: 'पद्म श्री नामांकित, राष्ट्रपति पुरस्कार विजेता एवं महान समाज रत्न', descriptionUr: 'صدارتی ایوارڈ یافتہ اور برادری کے عظیم محسن و لیجنڈز' },
  { id: 'success-stories-cat', nameEn: 'Success Stories', nameHi: 'सफलता की कहानियां एवं प्रेरणा', nameUr: 'کامیابی کی کہانیاں اور سفر', icon: 'TrendingUp', count: 35, descriptionEn: 'Inspiring personal journeys of overcoming struggles to reach the top', descriptionHi: 'कठिनाइयों और संघर्षों को पार कर शिखर तक पहुंचने की प्रेरक जीवन गाथाएं', descriptionUr: 'مشکلات پر قابو پا کر عروج تک پہنچنے کا بے مثال اور الہامی سفر' },
  { id: 'doctors', nameEn: 'Doctors & Specialists', nameHi: 'डॉक्टर (चिकित्सक)', nameUr: 'ڈاکٹرز', icon: 'Stethoscope', count: 24, descriptionEn: 'Medical officers, surgeons, specialists & consultants', descriptionHi: 'चिकित्सा अधिकारी, सर्जन, विशेषज्ञ व परामर्शदाता', descriptionUr: 'میڈیکل آفیسرز، سرجنز اور ماہر ڈاکٹرز' },
  { id: 'civil-servants', nameEn: 'Civil Servants (IAS/IPS)', nameHi: 'सिविल सेवक (IAS/IPS/PCS)', nameUr: 'سول سرونٹس (IAS/IPS)', icon: 'Award', count: 12, descriptionEn: 'Administrative, police & foreign service officers', descriptionHi: 'प्रशासनिक, पुलिस व विदेश सेवा अधिकारी', descriptionUr: 'انتظامی اور پولیس افسران' },
  { id: 'judges', nameEn: 'Judges & Judiciary', nameHi: 'न्यायाधीश व न्यायपालिका', nameUr: 'جج اور عدلیہ', icon: 'Scale', count: 8, descriptionEn: 'High Court, District & Session Judges, Magistrates', descriptionHi: 'उच्च न्यायालय, जिला एवं सत्र न्यायाधीश, मजिस्ट्रेट', descriptionUr: 'ہائیکورٹ، سیشن ججز اور مجسٹریٹ' },
  { id: 'advocates', nameEn: 'Advocates & Legal', nameHi: 'अधिवक्ता एवं कानूनविद', nameUr: 'وکلاء اور قانونی ماہرین', icon: 'Gavel', count: 35, descriptionEn: 'Supreme Court, High Court & Corporate Lawyers', descriptionHi: 'उच्चतम न्यायालय, उच्च न्यायालय एवं कॉर्पोरेट वकील', descriptionUr: 'سپریم کورٹ اور ہائیکورٹ کے وکلاء' },
  { id: 'police', nameEn: 'Police Officers', nameHi: 'पुलिस अधिकारी', nameUr: 'پولیس آفیسرز', icon: 'Shield', count: 28, descriptionEn: 'DGP, IG, SP, DSP, Inspectors & Officers', descriptionHi: 'डीजीपी, आईजी, एसपी, डीएसपी व निरीक्षक', descriptionUr: 'پولیس کے اعلیٰ افسران' },
  { id: 'scientists', nameEn: 'Scientists & Researchers', nameHi: 'वैज्ञानिक एवं शोधकर्ता', nameUr: 'سائنسدان اور محققین', icon: 'Atom', count: 15, descriptionEn: 'ISRO, DRDO, CSIR & international research scientists', descriptionHi: 'इसरो, डीआरडीओ, सीएसआईआर व अंतर्राष्ट्रीय वैज्ञानिक', descriptionUr: 'اسرو اور ڈی آر ڈی او کے سائنسدان' },
  { id: 'engineers', nameEn: 'Engineers & Tech Leads', nameHi: 'इंजीनियर (अभियंता)', nameUr: 'انجینئرز', icon: 'Cpu', count: 42, descriptionEn: 'IITians, Software, Civil, Mechanical & Tech Leads', descriptionHi: 'आईआईटीयन, सॉफ्टवेयर, सिविल व तकनीकी विशेषज्ञ', descriptionUr: 'آئی آئی ٹی اور سافٹ ویئر انجینئرز' },
  { id: 'professors', nameEn: 'Professors & Academics', nameHi: 'प्रोफेसर एवं शिक्षाविद', nameUr: 'پروفیسرز اور ماہرین تعلیم', icon: 'BookOpen', count: 38, descriptionEn: 'University Vice Chancellors, Deans, Professors & Ph.D.s', descriptionHi: 'कुलपति, डीन, प्राध्यापक एवं शोधकर्ता', descriptionUr: 'یونیورسٹیوں کے پروفیسرز اور ریسرچرز' },
  { id: 'teachers', nameEn: 'Government Teachers', nameHi: 'सरकारी शिक्षक', nameUr: 'سرکاری اساتذہ', icon: 'GraduationCap', count: 65, descriptionEn: 'Principal, Lecturer, PGT, TGT & Headmasters', descriptionHi: 'प्रधानाचार्य, व्याख्याता, वरिष्ठ अध्यापक', descriptionUr: 'سرکاری اسکولوں کے اساتذہ' },
  { id: 'armed-forces', nameEn: 'Armed Forces', nameHi: 'सशस्त्र बल (सेना)', nameUr: 'مسلح افواج', icon: 'ShieldAlert', count: 14, descriptionEn: 'Army, Navy, Air Force & Paramilitary Officers', descriptionHi: 'थल सेना, नौसेना, वायु सेना व अर्धसैनिक अधिकारी', descriptionUr: 'آرمی، نیوی اور ایئر فورس افسران' },
  { id: 'overseas', nameEn: 'Overseas Professionals', nameHi: 'प्रवासी भारतीय विशेषज्ञ (NRI)', nameUr: 'بیرون ملک مقیم ماہرین', icon: 'Globe', count: 32, descriptionEn: 'Community professionals working in USA, UK, Gulf & Europe', descriptionHi: 'अमेरिका, ब्रिटेन, खाड़ी व यूरोप में कार्यरत विशेषज्ञ', descriptionUr: 'امریکہ، یورپ اور خلیج میں کام کرنے والے ماہرین' },
  { id: 'entrepreneurs', nameEn: 'Entrepreneurs & CEOs', nameHi: 'उद्यमी एवं उद्योगपति', nameUr: 'تاجر اور صنعت کار', icon: 'Briefcase', count: 45, descriptionEn: 'Business founders, industrial pioneers & startup mentors', descriptionHi: 'व्यवसाय संस्थापक, औद्योगिक अग्रणी व मेंटर', descriptionUr: 'کامیاب کاروباری شخصیات اور سی ای اوز' },
  { id: 'gold-medalists', nameEn: 'Gold Medalists & Toppers', nameHi: 'गोल्ड मेडलिस्ट एवं टॉपर्स', nameUr: 'گولڈ میڈلسٹ اور ٹاپرز', icon: 'Medal', count: 29, descriptionEn: 'University toppers, national scholars & excellence awardees', descriptionHi: 'विश्वविद्यालय टॉपर व राष्ट्रीय छात्रवृत्ति विजेता', descriptionUr: 'یونیورسٹی ٹاپرز اور گولڈ میڈلسٹ' },
  { id: 'ca-finance', nameEn: 'Chartered Accountants', nameHi: 'चार्टर्ड अकाउंटेंट्स (CA)', nameUr: 'چارٹرڈ اکاؤنٹنٹس', icon: 'TrendingUp', count: 22, descriptionEn: 'CAs, Financial Analysts, Banking Leaders & Economists', descriptionHi: 'सीए, वित्तीय विश्लेषक, बैंकिंग अधिकारी', descriptionUr: 'سی اے اور مالیاتی ماہرین' },
  { id: 'it-professionals', nameEn: 'IT Professionals', nameHi: 'आईटी एवं तकनीकी विशेषज्ञ', nameUr: 'آئی ٹی ماہرین', icon: 'Laptop', count: 50, descriptionEn: 'Google, Microsoft, Amazon architects & IT managers', descriptionHi: 'गूगल, माइक्रोसॉफ्ट, अमेज़न आर्किटेक्ट व आईटी प्रबंधक', descriptionUr: 'گوگل اور مائیکروسافٹ کے آئی ٹی ماہرین' },
  { id: 'award-winners', nameEn: 'National/State Awardees', nameHi: 'राष्ट्रीय/राज्य पुरस्कार विजेता', nameUr: 'قومی و ریاستی ایوارڈ یافتہ', icon: 'Trophy', count: 18, descriptionEn: 'Padma Shri, Presidential & State honor recipients', descriptionHi: 'पद्म श्री, राष्ट्रपति व राज्य सम्मान प्राप्तकर्ता', descriptionUr: 'صدارتی اور ریاستی اعزازات حاصل करने والے' },
  { id: 'nurses', nameEn: 'Nurses & Healthcare', nameHi: 'नर्सिंग एवं स्वास्थ्य कार्यकर्ता', nameUr: 'نرسیں اور ہیلتھ کیئر', icon: 'Heart', count: 30, descriptionEn: 'Chief Nursing Officers, AIIMS specialists & health leaders', descriptionHi: 'मुख्य नर्सिंग अधिकारी, एम्स विशेषज्ञ', descriptionUr: 'اعلیٰ نرسنگ آفیسرز اور صحت کے کارکن' },
  { id: 'fire-emergency', nameEn: 'Fire & Emergency', nameHi: 'अग्निशमन एवं आपातकालीन सेवा', nameUr: 'فائر اور ایمرجنسی سروسز', icon: 'Flame', count: 10, descriptionEn: 'Chief Fire Officers, Disaster Response Commandants', descriptionHi: 'मुख्य अग्निशमन अधिकारी, आपदा प्रतिक्रिया कमांडर', descriptionUr: 'فائر آفیسرز اور ایمرجنسی کمانڈر' },
  { id: 'sports', nameEn: 'Sports Persons', nameHi: 'खिलाड़ी एवं खेल रत्न', nameUr: 'کھلاڑی اور اسپورٹس مین', icon: 'Activity', count: 15, descriptionEn: 'National & international champions, Olympians & coaches', descriptionHi: 'राष्ट्रीय व अंतर्राष्ट्रीय चैंपियन, कोच व खिलाड़ी', descriptionUr: 'قومی اور بین الاقوامی کھلاڑی' },
  { id: 'media-writers', nameEn: 'Writers, Artists & Media', nameHi: 'लेखक, कलाकार एवं पत्रकार', nameUr: 'مصنفین، فنکار اور صحافی', icon: 'PenTool', count: 25, descriptionEn: 'Authors, senior journalists, poets & cultural icons', descriptionHi: 'साहित्यकार, वरिष्ठ पत्रकार, कवि व सांस्कृतिक धरोहर', descriptionUr: 'مصنفین، صحافی اور شعراء' },
  { id: 'social-workers', nameEn: 'Social Workers & Reformers', nameHi: 'समाज सेवी एवं सुधारक', nameUr: 'سماجی کارکن اور مصلح', icon: 'HeartHandshake', count: 40, descriptionEn: 'Philanthropists, NGO leaders & community reformers', descriptionHi: 'दानवीर, एनजीओ संस्थापक व समाज सुधारक', descriptionUr: 'فلاحی اور سماجی رہنما' }
];

export const INITIAL_ACHIEVERS: AchieverProfile[] = [
  {
    id: 'ach-1',
    name: 'Dr. Zeeshan Ahmed Rangrez',
    fatherName: 'Late Haji Abdul Rahim Rangrez',
    gender: 'Male',
    dob: '1976-08-14',
    nativePlace: 'Jaipur, Rajasthan',
    currentCity: 'New Delhi',
    state: 'Delhi',
    district: 'New Delhi',
    country: 'India',
    occupation: 'Senior Cardio-Thoracic Surgeon',
    categoryId: 'doctors',
    designation: 'Director & Head of Cardiology',
    organization: 'AIIMS New Delhi',
    qualification: 'MBBS, MS, MCh (Cardio-Thoracic Surgery), FRCS (UK)',
    university: 'All India Institute of Medical Sciences (AIIMS)',
    yearOfAchievement: 2018,
    careerJourney: {
      en: 'Born into a modest traditional textile dyeing family in Jaipur, Dr. Zeeshan studied under streetlamps during power cuts. Secured All-India Rank 14 in medical entrance and later trained at Royal College of Surgeons, UK, before returning to serve the nation at AIIMS.',
      hi: 'जयपुर के एक साधारण पारंपरिक रंगरेज परिवार में जन्मे डॉ. जीशान ने बिजली जाने पर स्ट्रीटलाइट के नीचे पढ़ाई की। मेडिकल प्रवेश परीक्षा में अखिल भारतीय 14वीं रैंक हासिल की और यूके से उच्च शिक्षा प्राप्त कर एम्स दिल्ली में सेवा दी।',
      ur: 'جے پور کے ایک عام رنگریز خاندان میں پیدا ہونے والے ڈاکٹر ذیشان نے سخت محنت سے میڈیکل میں آل انڈیا 14واں مقام حاصل کیا اور برطانیہ سے اعلیٰ تعلیم مکمل کر کے ملک کی خدمت کے لیے ایمز دہلی میں خدمات انجام دے رہے ہیں۔'
    },
    biography: {
      en: 'Dr. Zeeshan Ahmed is a world-renowned heart surgeon who has performed over 8,500 complex cardiac surgeries, saving thousands of lives from underprivileged backgrounds free of cost.',
      hi: 'डॉ. जीशान अहमद एक विश्व प्रसिद्ध हृदय शल्य चिकित्सक हैं जिन्होंने 8,500 से अधिक जटिल हृदय सर्जरी की हैं और हजारों जरूरतमंद रोगियों की नि:शुल्क जान बचाई है।',
      ur: 'ڈاکٹر ذیشان احمد ایک عالمی شہرت یافتہ ہارٹ سرجن ہیں جنہوں نے 8,500 سے زائد پیچیدہ دل کے آپریشن کیے ہیں اور ہزاروں مستحق مریضوں کی مفت جان بچائی ہے۔'
    },
    majorAchievements: [
      'Performed over 8,500 successful open-heart surgeries with 99.4% success rate',
      'Pioneered minimally invasive robotic cardiac surgery in government healthcare',
      'Published 48 peer-reviewed clinical research papers in international journals'
    ],
    awardsHonors: [
      'Padma Shri Nominee & National Healthcare Excellence Award (2021)',
      'Dr. B.C. Roy National Award for Medical Innovation (2019)',
      'All India Rangrez Samaj Gaurav Award (2020)'
    ],
    socialContributions: {
      en: 'Conducts annual free pediatric heart surgery camps across Rajasthan, UP, and Bihar, providing complete financial aid to over 300 needy children every year.',
      hi: 'राजस्थान, यूपी और बिहार में प्रतिवर्ष नि:शुल्क बाल हृदय शल्य चिकित्सा शिविर लगाते हैं और हर साल 300 से अधिक जरूरतमंद बच्चों का पूरा खर्च उठाते हैं।',
      ur: 'راجستھان، یوپی اور بہار میں ہر سال مفت بچوں کے دل کے آپریشن کا کیمپ لگاتے ہیں اور سالانہ 300 سے زائد غریب بچوں کا علاج مفت کرتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'No financial barrier can stop a determined mind. If a boy from the dye-lanes of Jaipur can lead cardiology at AIIMS, our youth can achieve anything in this world!',
      hi: 'कोई भी आर्थिक बाधा दृढ़ संकल्प वाले मन को नहीं रोक सकती। अगर जयपुर की रंगाई गलियों का एक लड़का एम्स में कार्डियोलॉजी का नेतृत्व कर सकता है, तो हमारा युवा कुछ भी हासिल कर सकता है!',
      ur: 'کوئی بھی مالی مجبوری پختہ ارادے کو نہیں روک سکتی۔ اگر جے پور کا ایک عام نوجوان ایمز دہلی کا سربراہ بن سکتا ہے، تو ہمارے بچے کچھ بھی کر سکتے ہیں!'
    },
    careerAdvice: {
      en: 'Focus intensely on basic science concepts in 11th & 12th NCERT. Never hesitate to apply for government scholarships. Medicine requires compassion more than brilliance.',
      hi: '11वीं और 12वीं की एनसीईआरटी विज्ञान अवधारणाओं पर गहन ध्यान दें। सरकारी छात्रवृत्ति के लिए आवेदन करने में कभी संकोच न करें।',
      ur: 'گیارہویں اور بارہویں کے بنیادی سائنس مضامین پر گہری توجہ دیں۔ سرکاری اسکالرشپ حاصل کرنے میں کبھی ہچکچاہٹ محسوس نہ کریں۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu', 'Marwari'],
    expertise: ['Cardio-Thoracic Surgery', 'Robotic Surgery', 'Medical Research', 'Hospital Administration'],
    contactPermission: true,
    email: 'dr.zeeshan.aiims@gmail.com',
    website: 'https://aiims.edu',
    linkedin: 'https://linkedin.com/in/dr-zeeshan-rangrez',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    badges: ['👨‍⚕️ Doctor', '🏆 Award Winner', '⭐ Mentor', '🏥 AIIMS']
  },
  {
    id: 'ach-2',
    name: 'Shri Tariq Mansoor Rangrez, IAS',
    fatherName: 'Shri Mansoor Ali Rangrez',
    gender: 'Male',
    dob: '1984-11-02',
    nativePlace: 'Lucknow, Uttar Pradesh',
    currentCity: 'Lucknow',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    country: 'India',
    occupation: 'Indian Administrative Service (IAS Officer)',
    categoryId: 'civil-servants',
    designation: 'Special Secretary, Finance & Revenue',
    organization: 'Government of Uttar Pradesh',
    qualification: 'B.Tech (IIT Delhi), M.Public Admin (Harvard University)',
    university: 'IIT Delhi & Harvard Kennedy School',
    yearOfAchievement: 2011,
    careerJourney: {
      en: 'Graduated in Electrical Engineering from IIT Delhi with Gold Medal. Worked briefly in Silicon Valley before deciding to return to India and clear UPSC Civil Services Examination in his first attempt with All India Rank 18.',
      hi: 'आईआईटी दिल्ली से गोल्ड मेडल के साथ इलेक्ट्रिकल इंजीनियरिंग में स्नातक। सिलिकॉन वैली में कुछ समय कार्य करने के बाद भारत लौटकर प्रथम प्रयास में अखिल भारतीय रैंक 18 के साथ यूपीएससी सिविल सेवा परीक्षा उत्तीर्ण की।',
      ur: 'آئی آئی ٹی دہلی سے گولڈ میڈل کے ساتھ گریجویشن کیا۔ امریکہ میں کچھ وقت کام کرنے کے بعد وطن واپس آ کر پہلی ہی کوشش میں یو پی ایس سی میں آل انڈیا 18واں مقام حاصل کیا۔'
    },
    biography: {
      en: 'Shri Tariq Mansoor is a visionary IAS officer known for pioneering e-governance reforms, digitizing land records, and revolutionizing public delivery systems across Uttar Pradesh districts.',
      hi: 'श्री तारिक मंसूर एक दूरदर्शी आईएएस अधिकारी हैं, जिन्हें ई-गवर्नेंस सुधारों, भूमि रिकॉर्ड के डिजिटलीकरण और उत्तर प्रदेश के जिलों में सार्वजनिक वितरण प्रणाली में क्रांति लाने के लिए जाना जाता है।',
      ur: 'جناب طارق منصور ایک باصلاحیت آئی اے ایس آفیسر ہیں جنہوں نے ای-گورننس اور سرکاری نظام میں ڈیجیٹل اصلاحات کے ذریعے عوام کو زبردست سہولت فراہم کی ہے۔'
    },
    majorAchievements: [
      'Secured All India Rank 18 in UPSC Civil Services Examination 2011',
      'Implemented digital farmers subsidy direct-benefit transfer impacting 40 lakh farmers',
      'Recipient of Prime Minister Excellence Award in Public Administration (2022)'
    ],
    awardsHonors: [
      'Prime Minister Award for Excellence in Public Administration (2022)',
      'Chief Minister Gold Medal for Meritorious Civil Service (2018)',
      'National E-Governance Innovation Champion (2020)'
    ],
    socialContributions: {
      en: 'Has mentored over 450 community aspirants for UPSC and State PCS through online weekend webinars and established 5 free digital libraries in rural UP.',
      hi: 'सप्ताहांत ऑनलाइन वेबिनार के माध्यम से यूपीएससी और राज्य पीसीएस के लिए 450 से अधिक सामुदायिक उम्मीदवारों का मार्गदर्शन किया है और ग्रामीण यूपी में 5 नि:शुल्क डिजिटल पुस्तकालय स्थापित किए हैं।',
      ur: 'آن لائن ویبنارز کے ذریعے 450 سے زائد نوجوانوں کو یو پی ایس سی اور مسابقتی امتحانات کے لیے رہنمائی فراہم کی اور 5 مفت ڈیجیٹل لائبریریاں قائم کیں۔'
    },
    inspirationalMessage: {
      en: 'Civil services is not just a job; it is a constitutional responsibility to serve the last person standing in the queue. Believe in hard work, discipline, and regular self-assessment.',
      hi: 'सिविल सेवा केवल एक नौकरी नहीं है; यह कतार में खड़े अंतिम व्यक्ति की सेवा करने की संवैधानिक जिम्मेदारी है। कड़ी मेहनत, अनुशासन और नियमित आत्म-मूल्यांकन में विश्वास रखें।',
      ur: 'سول سروس صرف ایک نوکری نہیں بلکہ قطار میں کھڑے آخری شخص کی خدمت کرنے کی آئینی ذمہ داری ہے۔ محنت اور نظم و ضبط پر بھروسہ رکھیں۔'
    },
    careerAdvice: {
      en: 'Start reading daily newspaper (The Hindu / Indian Express) from degree 1st year. Develop analytical writing skills and choose an optional subject you truly love.',
      hi: 'डिग्री के प्रथम वर्ष से ही दैनिक समाचार पत्र पढ़ना शुरू करें। विश्लेषणात्मक लेखन कौशल विकसित करें।',
      ur: 'گریجویشن کے پہلے سال سے ہی روزانہ اخبار پڑھنے کی عادت ڈالیں اور اپنے پسندیدہ مضمون کا انتخاب کریں۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu', 'Arabic'],
    expertise: ['Public Administration', 'E-Governance', 'Public Finance', 'Policy Formulation'],
    contactPermission: true,
    email: 'tariq.ias.up@nic.in',
    linkedin: 'https://linkedin.com/in/tariq-mansoor-ias',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    badges: ['🏆 IAS', '👮 Govt Officer', '⭐ Mentor', '🎓 Gold Medalist']
  },
  {
    id: 'ach-3',
    name: 'Justice (Retd.) Farooq Ahmed Neelgar',
    fatherName: 'Late Haji Ghulam Rasool Neelgar',
    gender: 'Male',
    dob: '1955-03-21',
    nativePlace: 'Jodhpur, Rajasthan',
    currentCity: 'Jodhpur',
    state: 'Rajasthan',
    district: 'Jodhpur',
    country: 'India',
    occupation: 'Former High Court Judge & Constitutional Jurist',
    categoryId: 'judges',
    designation: 'Former Judge, High Court of Rajasthan',
    organization: 'High Court of Judicature for Rajasthan',
    qualification: 'LL.B., LL.M. (Constitutional Law)',
    university: 'Jai Narain Vyas University, Jodhpur',
    yearOfAchievement: 2008,
    careerJourney: {
      en: 'Enrolled as an Advocate in 1978. Practiced civil and constitutional law for 24 years with impeccable integrity before being elevated as District Judge and later elevated as a Permanent Judge of the Rajasthan High Court.',
      hi: '1978 में अधिवक्ता के रूप में पंजीकृत। 24 वर्षों तक सिविल और संवैधानिक कानून की बेदाग वकालत की, जिसके बाद जिला न्यायाधीश और बाद में राजस्थान उच्च न्यायालय के स्थायी न्यायाधीश के रूप में पदोन्नत हुए।',
      ur: '1978 میں بطور وکیل شروعات کی۔ 24 سال تک دیانتداری کے ساتھ آئینی قانون کی پریکٹس کی، جس کے بعد ڈسٹرکٹ جج اور پھر راجستھان ہائیکورٹ کے مستقل جج مقرر ہوئے۔'
    },
    biography: {
      en: 'Justice Farooq Ahmed Neelgar is celebrated for his landmark judicial pronouncements on civil liberties, minority educational rights, and environmental protection across his distinguished judicial tenure.',
      hi: 'जस्टिस फारूक अहमद नीलगार अपने प्रतिष्ठित न्यायिक कार्यकाल के दौरान नागरिक स्वतंत्रता, अल्पसंख्यक शैक्षिक अधिकारों और पर्यावरण संरक्षण पर ऐतिहासिक न्यायिक निर्णयों के लिए प्रसिद्ध हैं।',
      ur: 'جسٹس فاروق احمد نیلوگر کو ان کے شاندار عدالتی دور میں شہری آزادی، اقلیتی تعلیمی حقوق اور ماحولیاتی تحفظ پر تاریخی فیصلوں کے لیے یاد کیا جاتا ہے۔'
    },
    majorAchievements: [
      'Delivered over 1,200 landmark judgments during tenure at the Rajasthan High Court',
      'Appointed Chairman of State Human Rights Law Commission (2018-2021)',
      'Author of authoritative legal treatise: "Minority Rights in Indian Constitutional Jurisprudence"'
    ],
    awardsHonors: [
      'National Law Luminary Award by Bar Council of India (2017)',
      'Lifetime Achievement Award in Jurisprudence (2020)',
      'Marwar Gaurav Samman for Judicial Excellence (2015)'
    ],
    socialContributions: {
      en: 'Chairs the All India Rangrez Legal Aid Cell, providing free legal advice and constitutional awareness seminars to thousands of community members and NGOs.',
      hi: 'ऑल इंडिया रंगरेज लीगल एड सेल के अध्यक्ष हैं, जो हजारों समुदाय के सदस्यों और गैर सरकारी संगठनों को मुफ्त कानूनी सलाह और संवैधानिक जागरूकता संगोष्ठियां प्रदान करते हैं।',
      ur: 'آل انڈیا رنگریز لیگل ایڈ سیل کی سرپرستی کرتے ہوئے ہزاروں افراد اور سماجی اداروں کو مفت قانونی رہنمائی اور شعوری سیمینارز فراہم کرتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'The Rule of Law is the biggest shield of a democracy. Our youth must pursue law not just as a career, but as an instrument to uphold justice and protect the rights of the voiceless.',
      hi: 'कानून का शासन लोकतंत्र की सबसे बड़ी ढाल है। हमारे युवाओं को कानून को केवल एक करियर के रूप में नहीं, बल्कि न्याय को बनाए रखने और बेजुबानों के अधिकारों की रक्षा करने के साधन के रूप में अपनाना चाहिए।',
      ur: 'قانون کی حکمرانی جمہوریت کی سب سے بڑی ڈھال ہے۔ ہمارے نوجوان قانون کے شعبے کو مظلوموں کو انصاف دلانے کے اہم ذریعہ کے طور پر اپنائیں۔'
    },
    careerAdvice: {
      en: 'Prepare thoroughly for CLAT and Judicial Services exams. Command over English and local language, along with deep clarity on the Constitution, is key to judicial success.',
      hi: 'क्लैट और न्यायिक सेवा परीक्षाओं की गहन तैयारी करें। संविधान की गहरी स्पष्टता के साथ अंग्रेजी और स्थानीय भाषा पर अधिकार न्यायिक सफलता की कुंजी है।',
      ur: 'سی ایل اے ٹی اور جوڈیشل سروسز امتحانات کی بھرپور تیاری کریں۔ آئین کی گہری تفہیم اور زبان پر عبور کامیابی کی کنجی ہے۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Constitutional Law', 'Civil Jurisprudence', 'Human Rights', 'Arbitration'],
    contactPermission: true,
    email: 'justice.neelgar@gmail.com',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop&q=80',
    badges: ['👨‍⚖️ Judge', '⚖️ Advocate', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-4',
    name: 'Dr. Sana Fatima Rangrez, Ph.D.',
    fatherName: 'Dr. Mahmood Rangrez',
    gender: 'Female',
    dob: '1988-06-19',
    nativePlace: 'Ahmedabad, Gujarat',
    currentCity: 'San Jose, California',
    state: 'California',
    district: 'Silicon Valley',
    country: 'United States',
    occupation: 'Principal Artificial Intelligence Scientist',
    categoryId: 'engineers',
    designation: 'Director of AI & Quantum Research',
    organization: 'Google DeepMind / Silicon Valley Tech',
    qualification: 'B.E. Computer Science (BITS Pilani), Ph.D. in AI (Stanford University)',
    university: 'Stanford University, California',
    yearOfAchievement: 2021,
    careerJourney: {
      en: 'Topped Gujarat state board in 12th science. Graduated from BITS Pilani with full scholarship and completed Ph.D. in AI from Stanford University. Now leads cutting-edge neural network research in Silicon Valley.',
      hi: '12वीं विज्ञान में गुजरात राज्य बोर्ड में शीर्ष स्थान प्राप्त किया। पूर्ण छात्रवृत्ति के साथ बिट्स पिलानी से स्नातक और स्टैनफोर्ड विश्वविद्यालय से एआई में पीएचडी पूरी की। अब सिलिकॉन वैली में अत्याधुनिक न्यूरल नेटवर्क अनुसंधान का नेतृत्व करती हैं।',
      ur: 'گجرات بورڈ میں بارہویں سائنس میں ٹاپ کیا۔ مکمل اسکالرشپ کے ساتھ بٹس پلانی سے گریجویشن اور اسٹینفورڈ یونیورسٹی سے اے آئی میں پی ایچ ڈی مکمل کی اور اب امریکہ میں جدید تحقیق کی سربراہی کر رہی ہیں۔'
    },
    biography: {
      en: 'Dr. Sana Fatima is an internationally acclaimed computer scientist holding 16 US patents in AI generative algorithms and machine learning architecture for healthcare diagnostics.',
      hi: 'डॉ. सना फातिमा एक अंतरराष्ट्रीय स्तर पर प्रशंसित कंप्यूटर वैज्ञानिक हैं, जिनके पास स्वास्थ्य सेवा निदान के लिए एआई जनरेटिव एल्गोरिदम और मशीन लर्निंग आर्किटेक्चर में 16 अमेरिकी पेटेंट हैं।',
      ur: 'ڈاکٹر ثنا فاطمہ ایک بین الاقوامی شہرت یافتہ کمپیوٹر سائنسداں ہیں جن کے نام ہیلتھ کیئر اور آرٹیفیشل انٹیلی جنس میں 16 امریکی پیٹینٹ درج ہیں۔'
    },
    majorAchievements: [
      'Holder of 16 US Patents in Artificial Intelligence and Neural Architecture',
      'Named among Top 35 Innovators Under 35 by MIT Technology Review (2022)',
      'Keynote Speaker at IEEE Global Tech Summit and Stanford AI Lab'
    ],
    awardsHonors: [
      'MIT Technology Review Innovator Under 35 Award (2022)',
      'Stanford Women in Engineering Excellence Gold Medal (2018)',
      'Global NRI Rangrez Pride Award (2023)'
    ],
    socialContributions: {
      en: 'Founded the "Rangrez Girls in STEM" scholarship fund which provides annual laptops, mentorship, and US graduate school application guidance to 50 young women from India every year.',
      hi: 'रंगरेज गर्ल्स इन स्टेम छात्रवृत्ति कोष की स्थापना की, जो हर साल भारत की 50 युवा लड़कियों को लैपटॉप, मार्गदर्शन और अमेरिकी स्नातक स्कूल आवेदन मार्गदर्शन प्रदान करता है।',
      ur: 'رنگریز گرلز ان اسٹیم اسکالرشپ فنڈ قائم کیا جو ہر سال بھارت کی 50 ہونہار طالبات کو لیپ ٹاپ اور امریکہ میں اعلیٰ تعلیم کے لیے مکمل رہنمائی فراہم کرتا ہے۔'
    },
    inspirationalMessage: {
      en: 'To all young girls in our community: technology is the greatest equalizer of our era. Learn to code, master mathematics, and never let anyone tell you that big dreams are not for you!',
      hi: 'हमारे समुदाय की सभी युवा लड़कियों के लिए: प्रौद्योगिकी हमारे युग की सबसे बड़ी समानता लाने वाली शक्ति है। कोडिंग सीखें, गणित में महारत हासिल करें, और कभी किसी को यह न कहने दें कि बड़े सपने आपके लिए नहीं हैं!',
      ur: 'ہماری برادری کی تمام بیٹیوں کے نام: ٹیکنالوجی آج کے دور کی سب سے بڑی طاقت ہے۔ کوڈنگ اور ریاضی میں مہارت حاصل کریں اور اپنے خوابوں کو حقیقت کا روپ دیں۔'
    },
    careerAdvice: {
      en: 'Master Python, linear algebra, and data structures during undergraduate studies. Contribute to open-source software on GitHub and prepare diligently for GRE / TOEFL for global universities.',
      hi: 'स्नातक अध्ययन के दौरान पायथन, रैखिक बीजगणित और डेटा संरचनाओं में महारत हासिल करें। गिटहब पर ओपन-सोर्स में योगदान दें।',
      ur: 'گریجویشن کے دوران از خود پائتھن، ریاضی اور ڈیٹا اسٹرکچرز میں مہارت حاصل کریں اور عالمی یونیورسٹیوں کے لیے تیاری کریں۔'
    },
    languagesKnown: ['English', 'Urdu', 'Hindi', 'Gujarati'],
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Quantum Computing', 'Cloud Architecture'],
    contactPermission: true,
    email: 'sana.fatima.ai@gmail.com',
    linkedin: 'https://linkedin.com/in/sana-fatima-rangrez',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: true,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    badges: ['🌍 Overseas Professional', '💻 IT Professional', '⭐ Mentor', '🎓 Gold Medalist']
  },
  {
    id: 'ach-5',
    name: 'Shri Mohd. Imran Rangrez, IPS',
    fatherName: 'Shri Salim Rangrez',
    gender: 'Male',
    dob: '1986-09-15',
    nativePlace: 'Bhopal, Madhya Pradesh',
    currentCity: 'Indore',
    state: 'Madhya Pradesh',
    district: 'Indore',
    country: 'India',
    occupation: 'Indian Police Service (IPS Officer)',
    categoryId: 'police',
    designation: 'Inspector General of Police (IGP) / DIG',
    organization: 'Madhya Pradesh Police Department',
    qualification: 'B.E. Mechanical, M.Sc in Criminology & Cyber Forensics',
    university: 'Maulana Azad National Institute of Technology (MANIT Bhopal)',
    yearOfAchievement: 2013,
    careerJourney: {
      en: 'Cleared UPSC Civil Services Examination in 2013 with All India Rank 45. Known for fearless crime-fighting, community policing initiatives, and breaking cyber-crime syndicates.',
      hi: '2013 में अखिल भारतीय रैंक 45 के साथ यूपीएससी सिविल सेवा परीक्षा उत्तीर्ण की। निडर अपराध-विरोधी अभियानों, सामुदायिक पुलिसिंग और साइबर अपराध सिंडिकेट को तोड़ने के लिए जाने जाते हैं।',
      ur: '2013 میں یو پی ایس سی میں آل انڈیا 45واں مقام حاصل کیا۔ جرائم کے خلاف نڈر کارروائیوں، عوام دوست پولیسنگ اور سائبر کرائم کے خاتمے کے لیے جانے جاتے ہیں۔'
    },
    biography: {
      en: 'Shri Mohd. Imran is a decorated police officer credited with digitizing police responsiveness, modernizing forensic labs, and conducting massive drug-awareness drives across youth campuses.',
      hi: 'श्री मोहम्मद इमरान एक सम्मानित पुलिस अधिकारी हैं जिन्हें पुलिस प्रतिक्रिया को डिजिटल बनाने, फोरेंसिक लैब के आधुनिकीकरण और युवा परिसरों में व्यापक नशा-विरोधी अभियान चलाने का श्रेय जाता है।',
      ur: 'جناب محمد عمران ایک اعزاز یافتہ پولیس آفیسر ہیں جنہوں نے پولیس کے نظام کو جدید بنانے، فورینسک لیبز کی بہتری اور نوجوانوں کو نشے سے بچانے کی زبردست مہم چلائی ہے۔'
    },
    majorAchievements: [
      'Recipient of President Police Medal for Gallantry and Meritorious Service (2021)',
      'Busted interstate cyber-crime and online banking fraud syndicates recovering over ₹45 Crores',
      'Implemented "Mission Abhaya" for women safety across public transit networks'
    ],
    awardsHonors: [
      'President Police Medal for Gallantry (2021)',
      'Union Home Minister Trophy for Best Investigation Officer (2019)',
      'State Police Gold Medal for Exceptional Leadership (2018)'
    ],
    socialContributions: {
      en: 'Conducts regular physical training and written exam guidance camps for hundreds of community youth aspiring to join defense, police, and paramilitary forces.',
      hi: 'रक्षा, पुलिस और अर्धसैनिक बलों में शामिल होने के इच्छुक सैकड़ों सामुदायिक युवाओं के लिए नियमित शारीरिक प्रशिक्षण और लिखित परीक्षा मार्गदर्शन शिविर आयोजित करते हैं।',
      ur: 'فوج، پولیس اور سیکیورٹی اداروں میں جانے کے خواہشمند سینکڑوں نوجوانوں کے لیے باقاعدہ جسمانی تربیت اور تحریری امتحان کی مفت رہنمائی فراہم کرتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'Uniform earns respect only when it is worn with unshakeable honesty and empathy for the weak. Physical fitness and mental toughness will take you to the highest peaks of national service.',
      hi: 'वर्दी तभी सम्मान अर्जित करती है जब उसे अटूट ईमानदारी और कमजोरों के प्रति सहानुभूति के साथ पहना जाए। शारीरिक फिटनेस और मानसिक दृढ़ता आपको राष्ट्रीय सेवा के सर्वोच्च शिखर पर ले जाएगी।',
      ur: 'وردی کا احترام تبھی ہے جب اسے دیانت داری اور کمزوروں سے ہمدردی کے ساتھ پہنا جائے۔ جسمانی فٹنس اور ذہنی پختگی آپ کو ملک کی خدمت کے اعلیٰ ترین مقام تک لے جائے گی۔'
    },
    careerAdvice: {
      en: 'Combine daily physical run of 5 km with 6 hours of dedicated study. For IPS, physical stamina and ethical temperament in interview play a decisive role.',
      hi: 'दैनिक 5 किमी की शारीरिक दौड़ को 6 घंटे के समर्पित अध्ययन के साथ जोड़ें। आईपीएस के लिए शारीरिक सहनशक्ति और साक्षात्कार में नैतिक स्वभाव निर्णायक भूमिका निभाते हैं।',
      ur: 'روزانہ 5 کلومیٹر دوڑ کے ساتھ 6 گھنٹے کی باقاعدہ پڑھائی کو معمول بنائیں۔ آئی پی ایس کے لیے جسمانی فٹنس اور انٹرویو میں اخلاقی پختگی کلیدی حیثیت رکھتی ہے۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu'],
    expertise: ['Cyber Forensics', 'National Security', 'Crisis Management', 'Criminology'],
    contactPermission: true,
    email: 'imran.ips.mp@nic.in',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    badges: ['👮 Police', '🏆 IAS', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-6',
    name: 'Prof. Dr. Ayesha Siddiqua Rangrez',
    fatherName: 'Shri Abdul Ghaffar Rangrez',
    gender: 'Female',
    dob: '1971-12-05',
    nativePlace: 'Hyderabad, Telangana',
    currentCity: 'Hyderabad',
    state: 'Telangana',
    district: 'Hyderabad',
    country: 'India',
    occupation: 'University Dean & Professor of Organic Chemistry',
    categoryId: 'professors',
    designation: 'Dean, Faculty of Sciences',
    organization: 'Osmania University / Central University',
    qualification: 'M.Sc Gold Medalist, Ph.D. in Polymer & Textile Chemistry',
    university: 'Osmania University & IISc Bangalore',
    yearOfAchievement: 2015,
    careerJourney: {
      en: 'A pioneer in eco-friendly natural dye research, Dr. Ayesha connected her ancestral textile heritage with modern organic chemistry. Author of 12 academic textbooks and guide to over 28 Ph.D. research scholars.',
      hi: 'पर्यावरण के अनुकूल प्राकृतिक रंग अनुसंधान में अग्रणी, डॉ. आयशा ने अपनी पैतृक कपड़ा विरासत को आधुनिक कार्बनिक रसायन विज्ञान से जोड़ा। 12 शैक्षणिक पाठ्यपुस्तकों की लेखिका और 28 से अधिक पीएचडी शोध विद्वानों की मार्गदर्शक।',
      ur: 'قدرتی رنگوں کی تحقیق میں نمایاں مقام رکھنے والی ڈاکٹر عائشہ نے اپنے آبائی کپڑے کے ہنر کو جدید کیمسٹری سے جوڑا۔ 12 کتابوں کی مصنفہ اور 28 سے زائد پی ایچ ڈی اسکالرز کی نگراں ہیں۔'
    },
    biography: {
      en: 'Prof. Ayesha Siddiqua has received international recognition for developing zero-pollution herbal dyes for the textile industry, bringing pride to the traditional Rangrez lineage.',
      hi: 'प्रो. आयशा सिद्दीका को वस्त्र उद्योग के लिए शून्य-प्रदूषण हर्बल डाई विकसित करने के लिए अंतर्राष्ट्रीय मान्यता मिली है, जिससे पारंपरिक रंगरेज वंश को गौरव मिला है।',
      ur: 'پروفیسر عائشہ صدیقہ کو ٹیکسٹائل انڈسٹری کے لیے ماحول دوست اور بغیر آلودگی والے قدرتی رنگ تیار کرنے پر عالمی پذیرائی ملی ہے جس سے برادری کا نام روشن ہوا ہے۔'
    },
    majorAchievements: [
      'Developed 14 patented eco-friendly organic natural dyes adopted by global textile exporters',
      'Guided 28 Ph.D. scholars in organic synthesis and environmental chemistry',
      'Appointed Member of National Scientific Advisory Board for Green Chemistry'
    ],
    awardsHonors: [
      'UGC National Best Teacher & Researcher Award (2018)',
      'Vigyan Gaurav Puraskar by State Science Academy (2019)',
      'All India Rangrez Pride for Academic Excellence (2021)'
    ],
    socialContributions: {
      en: 'Runs free chemistry coaching and UGC-NET preparation workshops for girls from minority and economically backward families, helping over 120 girls secure assistant professorships.',
      hi: 'अल्पसंख्यक और आर्थिक रूप से पिछड़े परिवारों की लड़कियों के लिए नि:शुल्क रसायन विज्ञान कोचिंग और यूजीसी-नेट तैयारी कार्यशालाएं चलाती हैं, जिससे 120 से अधिक लड़कियों को सहायक प्रोफेसर बनने में मदद मिली है।',
      ur: 'اقلیتی اور مستحق خاندانوں کی طالبات کے لیے کیمسٹری اور یو جی سی نیٹ کی مفت کلاسز چلاتی ہیں جن کے ذریعے 120 سے زائد طالبات اسسٹنٹ پروفیسر بن چکی ہیں۔'
    },
    inspirationalMessage: {
      en: 'Our ancestors were masters of color and chemistry. When you combine our traditional hard work with modern scientific degrees, you become unstoppable. Never stop learning!',
      hi: 'हमारे पूर्वज रंग और रसायन के विशेषज्ञ थे। जब आप हमारी पारंपरिक कड़ी मेहनत को आधुनिक वैज्ञानिक डिग्री के साथ जोड़ते हैं, तो आप अजेय बन जाते हैं। सीखना कभी बंद न करें!',
      ur: 'ہمارے اسلاف رنگوں اور کیمسٹری کے ماہر تھے۔ جب آپ ہماری روایتی محنت کو جدید سائنسی تعلیم سے جوڑتے ہیں تو کوئی آپ کا مقابلہ نہیں کر سکتا۔'
    },
    careerAdvice: {
      en: 'After post-graduation, clear UGC-NET JRF exam early. Research is a rewarding career that commands immense social respect and global opportunities.',
      hi: 'स्नातकोत्तर के बाद जल्द ही यूजीसी-नेट जेआरएफ परीक्षा उत्तीर्ण करें। शोध एक संतोषजनक करियर है जो अपार सामाजिक सम्मान और वैश्विक अवसर प्रदान करता है।',
      ur: 'پوسٹ گریجویشن کے فوراً بعد یو جی سی نیٹ جے آر ایف امتحان پاس کریں۔ ریسرچ اور تدریس ایک انتہائی باعزت اور روشن مستقبل کا ضامن شعبہ ہے۔'
    },
    languagesKnown: ['Urdu', 'English', 'Hindi', 'Telugu'],
    expertise: ['Organic Chemistry', 'Textile Dyes', 'Polymer Synthesis', 'Academic Administration'],
    contactPermission: true,
    email: 'prof.ayesha.chem@osmania.ac.in',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    badges: ['👨‍🏫 Teacher', '🎓 Gold Medalist', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-7',
    name: 'Haji Mohammed Haroon Rangrez',
    fatherName: 'Late Haji Ibrahim Rangrez',
    gender: 'Male',
    dob: '1962-10-10',
    nativePlace: 'Surat, Gujarat',
    currentCity: 'Surat / Mumbai',
    state: 'Gujarat',
    district: 'Surat',
    country: 'India',
    occupation: 'Industrialist & Textile Exporter',
    categoryId: 'entrepreneurs',
    designation: 'Chairman & Managing Director (CMD)',
    organization: 'Rangrez Global Textiles & Export Conglomerate',
    qualification: 'B.Com, Diploma in Textile Engineering & Export Management',
    university: 'South Gujarat University, Surat',
    yearOfAchievement: 2010,
    careerJourney: {
      en: 'Started with a single hand-dyeing unit in Surat in 1984. Through relentless quality focus and ethical business practices, built a textile export empire employing over 3,200 workers with exports to 35 countries.',
      hi: '1984 में सूरत में एक एकल हाथ-रंगाई इकाई के साथ शुरुआत की। निरंतर गुणवत्ता ध्यान और नैतिक व्यावसायिक प्रथाओं के माध्यम से, 35 देशों में निर्यात के साथ 3,200 से अधिक श्रमिकों को रोजगार देने वाला एक कपड़ा निर्यात साम्राज्य बनाया।',
      ur: '1984 میں سورت میں ایک چھوٹی رنگائی کی دکان سے شروعات کی۔ اپنی محنت، معیار اور دیانت داری سے ایک عظیم ٹیکسٹائل ایمپائر قائم کی جو 35 ملکوں میں مال برآمد کرتی ہے اور 3,200 سے زائد افراد کو روزگار فراہم کرتی ہے۔'
    },
    biography: {
      en: 'Haji Mohammed Haroon is a pillar of community entrepreneurship and philanthropy, known for funding modern schools, hospitals, and disaster relief operations across India.',
      hi: 'हाजी मोहम्मद हारून सामुदायिक उद्यमिता और परोपकार के स्तंभ हैं, जिन्हें पूरे भारत में आधुनिक स्कूलों, अस्पतालों और आपदा राहत कार्यों के वित्तपोषण के लिए जाना जाता है।',
      ur: 'حاجی محمد ہارون برادری میں تجارت اور فلاح و بہبود کے ایک عظیم ستون ہیں جو ملک بھر میں جدید اسکولوں، ہسپتالوں اور امدادی کاموں میں فراخ دلی سے تعاون کرتے ہیں۔'
    },
    majorAchievements: [
      'Built one of India leading eco-friendly textile export houses with ₹500+ Crore annual turnover',
      'Provides direct employment to over 3,200 workers with complete health and educational benefits',
      'Recipient of Ministry of Textiles National Export Excellence Trophy (2018, 2021)'
    ],
    awardsHonors: [
      'National Textile Export Excellence Trophy by Ministry of Textiles (2021)',
      'Gujarat Udhyog Ratna Award for Green Manufacturing (2019)',
      'All India Rangrez Samaj Bhamashah & Philanthropy Award (2022)'
    ],
    socialContributions: {
      en: 'Established the Rangrez Educational Trust Surat which provides free school and college education to 1,500 community students and sponsors medical degrees for 20 needy students every year.',
      hi: 'रंगरेज एजुकेशनल ट्रस्ट सूरत की स्थापना की, जो 1,500 समुदाय के छात्रों को नि:शुल्क स्कूली और कॉलेज शिक्षा प्रदान करता है और हर साल 20 जरूरतमंद छात्रों की मेडिकल डिग्री को प्रायोजित करता है।',
      ur: 'رنگریز ایجوکیشنل ٹرسٹ سورت قائم کیا جو 1,500 طلباء کو مفت تعلیم فراہم کرتا ہے اور ہر سال 20 مستحق طلباء کے میڈیکل کی تعلیم کا مکمل خرچ اٹھاتا ہے۔'
    },
    inspirationalMessage: {
      en: 'Business is not just about making profit; it is about building trust, providing livelihoods, and using your wealth to elevate the entire community. Be honest in trade, and God will bless your efforts.',
      hi: 'व्यवसाय केवल लाभ कमाने के बारे में नहीं है; यह विश्वास बनाने, आजीविका प्रदान करने और अपने धन का उपयोग पूरे समुदाय को ऊपर उठाने के बारे में है। व्यापार में ईमानदार रहें, और ईश्वर आपके प्रयासों को आशीर्वाद देगा।',
      ur: 'کاروبار کا مقصد صرف منافع کمانا نہیں بلکہ لوگوں کا اعتماد جیتنا، روزگار فراہم کرنا اور اپنی دولت سے برادری اور انسانیت کی خدمت کرنا ہے۔ تجارت میں دیانت داری اپنائیں۔'
    },
    careerAdvice: {
      en: 'Learn modern digital marketing, export-import logistics, and corporate compliance alongside traditional business skills. Always maintain transparent accounting.',
      hi: 'पारंपरिक व्यावसायिक कौशल के साथ-साथ आधुनिक डिजिटल मार्केटिंग, निर्यात-आयात रसद और कॉर्पोरेट अनुपालन सीखें। हमेशा पारदर्शी लेखांकन बनाए रखें।',
      ur: 'روایتی کاروبار کے ساتھ ساتھ جدید ڈیجیٹل مارکیٹنگ، امپورٹ ایکسپورٹ اور کارپوریٹ قوانین سیکھیں۔ ہمیشہ حساب کتاب میں شفافیت رکھیں۔'
    },
    languagesKnown: ['Gujarati', 'Hindi', 'English', 'Urdu', 'Marwari'],
    expertise: ['Textile Manufacturing', 'Global Export', 'Corporate Strategy', 'Philanthropic Trust Management'],
    contactPermission: true,
    email: 'haroon.cmd@rangreztextiles.com',
    website: 'https://rangrezcommunity.org',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    badges: ['💼 Entrepreneur', '🤝 Community Volunteer', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-8',
    name: 'Advocate Bilquis Bano Rangrez',
    fatherName: 'Shri Rashid Rangrez',
    gender: 'Female',
    dob: '1990-04-12',
    nativePlace: 'Patna, Bihar',
    currentCity: 'New Delhi',
    state: 'Delhi',
    district: 'Supreme Court',
    country: 'India',
    occupation: 'Supreme Court Advocate & Human Rights Activist',
    categoryId: 'advocates',
    designation: 'Senior Counsel & Legal Aid Coordinator',
    organization: 'Supreme Court of India Bar Association',
    qualification: 'B.A. LL.B. (Hons) NLSIU Bangalore, LL.M. Human Rights (London School of Economics)',
    university: 'NLSIU Bangalore & LSE London',
    yearOfAchievement: 2019,
    careerJourney: {
      en: 'Gold medalist from National Law School Bangalore. Won Commonwealth Scholarship to LSE London. Returned to practice at the Supreme Court, defending women rights, minority educational institutions, and RTI transparency.',
      hi: 'नेशनल लॉ स्कूल बैंगलोर से गोल्ड मेडलिस्ट। एलएसई लंदन के लिए कॉमनवेल्थ स्कॉलरशिप जीती। सुप्रीम कोर्ट में वकालत करने लौटीं, महिलाओं के अधिकारों, अल्पसंख्यक शैक्षणिक संस्थानों और आरटीआई पारदर्शिता की रक्षा की।',
      ur: 'نیشنل لاء اسکول بنگلور سے گولڈ میڈلسٹ۔ لندن اسکول آف اکنامکس سے اسکالرشپ پر قانون کی اعلیٰ تعلیم حاصل کی اور سپریم کورٹ میں خواتین کے حقوق، اقلیتی اداروں اور انسانی حقوق کے لیے گراں قدر خدمات انجام دے رہی ہیں۔'
    },
    biography: {
      en: 'Advocate Bilquis Bano is a fierce constitutional lawyer who has successfully argued landmark pro-bono petitions securing equal educational stipends for marginalized minority students.',
      hi: 'अधिवक्ता बिल्किस बानो एक निडर संवैधानिक वकील हैं, जिन्होंने हाशिए पर पड़े अल्पसंख्यक छात्रों के लिए समान शैक्षिक छात्रवृत्ति सुनिश्चित करने वाली ऐतिहासिक प्रो-बोनो याचिकाओं पर सफलतापूर्वक बहस की है।',
      ur: 'ایڈوکیٹ بلقیس بانو ایک نڈر آئینی وکیل ہیں جنہوں نے مستحق اور اقلیتی طلباء کے تعلیمی حقوق اور وظائف کے لیے سپریم کورٹ میں کامیاب قانونی چارہ جوئی کی ہے۔'
    },
    majorAchievements: [
      'Successfully argued landmark Supreme Court cases protecting minority educational institutions',
      'Recipient of National Women Legal Luminary Award (2022)',
      'Member of Supreme Court Gender Sensitization and Legal Aid Committee'
    ],
    awardsHonors: [
      'National Women Legal Luminary Award by Bar Association (2022)',
      'Commonwealth Scholar Academic Gold Medal (2014)',
      'Bihar State Youth Icon Award for Social Justice (2020)'
    ],
    socialContributions: {
      en: 'Conducts weekly free legal aid clinics for women facing domestic violence or dowry harassment and provides free legal drafting for community trust registrations nationwide.',
      hi: 'घरेलू हिंसा या दहेज उत्पीड़न का सामना करने वाली महिलाओं के लिए साप्ताहिक नि:शुल्क कानूनी सहायता क्लिनिक चलाती हैं और देश भर में सामुदायिक ट्रस्ट पंजीकरण के लिए नि:शुल्क कानूनी ड्राफ्टिंग प्रदान करती हैं।',
      ur: 'خواتین کو قانونی تحفظ فراہم کرنے کے لیے ہفتہ وار مفت قانونی کیمپ لگاتی ہیں اور ملک بھر میں برادری کے فلاحی اداروں کے قانونی امور میں مفت رہنمائی کرتی ہیں۔'
    },
    inspirationalMessage: {
      en: 'Knowledge of law is the strongest weapon against injustice. Stand tall, speak the truth with legal courage, and use your education to empower every woman in your community.',
      hi: 'कानून का ज्ञान अन्याय के खिलाफ सबसे मजबूत हथियार है। सिर उठाकर खड़े हों, कानूनी साहस के साथ सच बोलें, और अपने समुदाय की हर महिला को सशक्त बनाने के लिए अपनी शिक्षा का उपयोग करें।',
      ur: 'قانون کا علم ناانصافی کے خلاف سب سے بڑی طاقت ہے۔ حق اور سچ کے لیے ڈٹ کر کھڑے ہوں اور اپنی تعلیم سے برادری کی ہر بیٹی کو بااختیار بنائیں۔'
    },
    careerAdvice: {
      en: 'Participate actively in moot court competitions during LLB. Mooting builds court-craft, research speed, and confidence to stand before judges.',
      hi: 'एलएलबी के दौरान मूट कोर्ट प्रतियोगिताओं में सक्रिय रूप से भाग लें। मूटिंग से अदालती कौशल, शोध की गति और न्यायाधीशों के सामने खड़े होने का आत्मविश्वास बढ़ता है।',
      ur: 'ایل ایل بی کے دوران ملوٹ کورٹ مقابلوں میں بھرپور حصہ لیں۔ اس سے قانونی تحقیق، بولنے کی صلاحیت اور عدالت میں اعتماد میں زبردست اضافہ ہوتا ہے۔'
    },
    languagesKnown: ['English', 'Urdu', 'Hindi'],
    expertise: ['Constitutional Law', 'Women & Child Rights', 'Public Interest Litigation', 'Minority Law'],
    contactPermission: true,
    email: 'adv.bilquis.rangrez@gmail.com',
    linkedin: 'https://linkedin.com/in/adv-bilquis-bano',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de7bf5?w=400&auto=format&fit=crop&q=80',
    badges: ['⚖️ Advocate', '🎓 Gold Medalist', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-9',
    name: 'Dr. Sameer Rangrez, Ph.D.',
    fatherName: 'Shri Yusuf Rangrez',
    gender: 'Male',
    dob: '1982-01-25',
    nativePlace: 'Kanpur, Uttar Pradesh',
    currentCity: 'Bengaluru',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    country: 'India',
    occupation: 'Senior Space Scientist & Rocket Engineer',
    categoryId: 'scientists',
    designation: 'Project Director, Satellite Navigation Systems',
    organization: 'Indian Space Research Organisation (ISRO)',
    qualification: 'B.Tech Aerospace (IIT Kanpur), Ph.D. in Satellite Telemetry (IIST)',
    university: 'IIT Kanpur & Indian Institute of Space Science and Technology',
    yearOfAchievement: 2019,
    careerJourney: {
      en: 'From the industrial lanes of Kanpur, Sameer cleared JEE Advanced to join IIT Kanpur Aerospace Engineering. Joined ISRO as a scientist in 2005 and played a vital role in Chandrayaan-2, Chandrayaan-3, and Aditya-L1 missions.',
      hi: 'कानपुर की औद्योगिक गलियों से निकलकर समीर ने आईआईटी कानपुर एयरोस्पेस इंजीनियरिंग में प्रवेश के लिए जेईई एडवांस्ड उत्तीर्ण किया। 2005 में वैज्ञानिक के रूप में इसरो में शामिल हुए और चंद्रयान-2, चंद्रयान-3 और आदित्य-L1 मिशनों में महत्वपूर्ण भूमिका निभाई।',
      ur: 'کانپور کی صنعتی گلیوں سے نکل کر آئی آئی ٹی کانپور سے ایرواسپیس انجینئرنگ کی اور 2005 میں اسرو میں بحیثیت سائنسداں شمولیت اختیار کی اور چندریان-3 اور آدتیہ ایل-1 جیسے تاریخی مشنز میں کلیدی کردار ادا کیا۔'
    },
    biography: {
      en: 'Dr. Sameer Rangrez is a top ISRO scientist whose satellite navigation algorithms ensured the precision landing of Chandrayaan-3 on the lunar south pole, making India proud globally.',
      hi: 'डॉ. समीर रंगरेज एक शीर्ष इसरो वैज्ञानिक हैं, जिनके सैटेलाइट नेविगेशन एल्गोरिदम ने चंद्रमा के दक्षिणी ध्रुव पर चंद्रयान-3 की सटीक लैंडिंग सुनिश्चित की, जिससे वैश्विक स्तर पर भारत को गर्व हुआ।',
      ur: 'ڈاکٹر سمیر رنگریز اسرو کے ایک مایہ ناز سائنسداں ہیں جن کی تیار کردہ سیٹلائٹ نیوی گیشن ٹیکنالوجی نے چاند کے جنوبی قطب پر چندریان-3 کی کامیاب لینڈنگ میں اہم کردار ادا کیا۔'
    },
    majorAchievements: [
      'Key Scientist in ISRO Chandrayaan-3 Lunar Landing Telemetry & Navigation Team (2023)',
      'Recipient of ISRO Team Excellence Award from the Hon. Prime Minister of India',
      'Developed indigenous GPS-NavIC telemetry modules for Indian defense and civilian aviation'
    ],
    awardsHonors: [
      'ISRO Team Excellence Award for Chandrayaan-3 Mission (2023)',
      'National Aerospace Scientist of the Year Award (2021)',
      'UP State Gaurav Puraskar for Scientific Achievement (2020)'
    ],
    socialContributions: {
      en: 'Delivers motivational science lectures in government schools across UP and Karnataka, inspiring thousands of children from humble backgrounds to dream of reaching the stars.',
      hi: 'यूपी और कर्नाटक के सरकारी स्कूलों में प्रेरक विज्ञान व्याख्यान देते हैं, जिससे साधारण पृष्ठभूमि के हजारों बच्चों को सितारों तक पहुंचने का सपना देखने की प्रेरणा मिलती है।',
      ur: 'یوپی اور کرناٹک کے سرکاری اسکولوں میں سائنس اور خلاء پر معلوماتی لیکچرز دیتے ہیں اور عام گھرانوں کے بچوں کو سائنس اور تحقیق میں آگے بڑھنے کا حوصلہ دیتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'When our spacecraft touched the moon, it proved that Indian intellect has no boundaries. Dedicate yourself to science, mathematics, and innovation. The sky is no longer the limit!',
      hi: 'जब हमारे अंतरिक्ष यान ने चंद्रमा को छुआ, तो यह साबित हो गया कि भारतीय बुद्धि की कोई सीमा नहीं है। खुद को विज्ञान, गणित और नवाचार के लिए समर्पित करें। अब आसमान भी सीमा नहीं है!',
      ur: 'جب ہمارا مشن چاند پر اترا تو ثابت ہو گیا کہ علم اور محنت کی کوئی حد نہیں ہوتی۔ اپنے آپ کو سائنس، ریاضی اور نئی تحقیق کے لیے وقف کر دیں۔'
    },
    careerAdvice: {
      en: 'Aim for IIST (Indian Institute of Space Science and Technology) after 12th through JEE Advanced for direct entry into ISRO as a scientist. Maintain strong grip on physics and calculus.',
      hi: 'इसरो में वैज्ञानिक के रूप में सीधे प्रवेश के लिए जेईई एडवांस्ड के माध्यम से 12वीं के बाद आईआईएसटी (भारतीय अंतरिक्ष विज्ञान और प्रौद्योगिकी संस्थान) का लक्ष्य रखें।',
      ur: 'بارہویں کے بعد جے ای ای ایڈوانسڈ کے ذریعے آئی آئی ایس ٹی میں داخلہ حاصل کرنے کی کوشش کریں جس سے اسرو میں براہ راست بحیثیت سائنسداں تقرری ہوتی ہے۔'
    },
    languagesKnown: ['Hindi', 'English', 'Urdu', 'Kannada'],
    expertise: ['Aerospace Engineering', 'Satellite Telemetry', 'Orbital Mechanics', 'NavIC GPS Systems'],
    contactPermission: true,
    email: 'sameer.isro.scientist@gmail.com',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    badges: ['👨‍🔬 Scientist', '👮 Govt Officer', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-10',
    name: 'Mrs. Shabana Begum Rangrez',
    fatherName: 'Shri Kasim Rangrez',
    gender: 'Female',
    dob: '1975-05-30',
    nativePlace: 'Pali, Rajasthan',
    currentCity: 'Jaipur',
    state: 'Rajasthan',
    district: 'Jaipur',
    country: 'India',
    occupation: 'Government Senior Secondary School Principal & Social Reformer',
    categoryId: 'teachers',
    designation: 'Principal & District Education Coordinator',
    organization: 'Department of Education, Government of Rajasthan',
    qualification: 'M.A. Hindi & Sociology, M.Ed., Ph.D. in Education Administration',
    university: 'University of Rajasthan, Jaipur',
    yearOfAchievement: 2017,
    careerJourney: {
      en: 'Overcoming early societal resistance against female education, she became a government teacher in 1998. Rose to become Principal and transformed 4 dilapidated village government schools into model smart-schools with 100% girls enrollment.',
      hi: 'महिला शिक्षा के खिलाफ शुरुआती सामाजिक विरोध को पार करते हुए, वह 1998 में सरकारी शिक्षिका बनीं। प्रधानाचार्या के पद तक पहुंचीं और 4 जर्जर ग्रामीण सरकारी स्कूलों को 100% बालिका नामांकन वाले मॉडल स्मार्ट स्कूलों में बदल दिया।',
      ur: 'خواتین کی تعلیم کے ابتدائی سماجی چیلنجز کا مقابلہ کرتے ہوئے 1998 میں سرکاری معلمہ بنیں۔ اپنی محنت سے پرنسپل بنیں اور 4 پسماندہ سرکاری اسکولوں کو جدید اور 100% لڑکیوں کے داخلے والے مثالی اسکولوں میں تبدیل کر دیا۔'
    },
    biography: {
      en: 'Mrs. Shabana Begum is a legendary educator and President Award winner who has dedicated 26 years of her life to eradicating girl-child dropouts and promoting modern education among artisans.',
      hi: 'श्रीमती शबाना बेगम एक महान शिक्षिका और राष्ट्रपति पुरस्कार विजेता हैं जिन्होंने अपना 26 वर्ष का जीवन बालिकाओं के स्कूल छोड़ने को रोकने और कारीगरों के बीच आधुनिक शिक्षा को बढ़ावा देने के लिए समर्पित किया है।',
      ur: 'محترمہ شبانہ بیگم صدارتی ایوارڈ یافتہ عظیم معلمہ ہیں جنہوں نے اپنی زندگی کے 26 سال بچیوں کی تعلیم اور دستکار گھرانوں میں جدید علم کے فروغ کے لیے وقف کر دیے ہیں۔'
    },
    majorAchievements: [
      'Recipient of National Award for Teachers from Hon. President of India (2020)',
      'Achieved zero girl-child dropout rate across 15 rural panchayats in Pali and Jaipur',
      'Author of government training manual on inclusive minority education'
    ],
    awardsHonors: [
      'National Award for Teachers by President of India (2020)',
      'Rajasthan State Best Principal Award (2018)',
      'All India Rangrez Samaj Shiksha Ratna Award (2021)'
    ],
    socialContributions: {
      en: 'Established 10 evening self-study centers for Rangrez children where retired government officers volunteer as teachers, resulting in 45 community students cracking state government jobs.',
      hi: 'रंगरेज बच्चों के लिए 10 शाम के स्वाध्याय केंद्र स्थापित किए जहां सेवानिवृत्त सरकारी अधिकारी शिक्षक के रूप में स्वयंसेवा करते हैं, जिसके परिणामस्वरूप 45 सामुदायिक छात्रों ने राज्य सरकारी नौकरियां प्राप्त कीं।',
      ur: 'برادری کے بچوں کے لیے 10 ایوننگ سیلف اسٹڈی سینٹرز قائم کیے جہاں ریٹائرڈ افسران بچوں کو مفت پڑھاتے ہیں جس کی بدولت 45 نوجوان سرکاری ملازمتیں حاصل کر چکے ہیں۔'
    },
    inspirationalMessage: {
      en: 'A mother who is educated transforms seven generations of her family. Send every daughter to school, support her dreams, and witness how education breaks the chains of backwardness.',
      hi: 'एक शिक्षित माँ अपने परिवार की सात पीढ़ियों को बदल देती है। हर बेटी को स्कूल भेजें, उसके सपनों का समर्थन करें, और देखें कि शिक्षा कैसे पिछड़ेपन की जंजीरों को तोड़ती है।',
      ur: 'ایک تعلیم یافتہ ماں خاندان کی سات نسلوں کو سنوار دیتی ہے۔ اپنی ہر بیٹی کو اسکول بھیجیں، اس کے خوابوں کا ساتھ دیں اور دیکھیں کہ تعلیم کیسے پسماندگی کی زنجیریں توڑتی ہے۔'
    },
    careerAdvice: {
      en: 'Teaching is the mother of all professions. Prepare for B.Ed and REET/CTET examinations with devotion. A good teacher shapes the future of the nation.',
      hi: 'शिक्षण सभी व्यवसायों की जननी है। बी.एड और रीट/सीटीईटी परीक्षाओं की लगन से तैयारी करें। एक अच्छा शिक्षक राष्ट्र के भविष्य को संवारता है।',
      ur: 'تدریس تمام شعبوں کی ماں ہے۔ بی ایڈ اور ٹیچر اہلیتی امتحانات کی دلی لگن سے تیاری کریں۔ ایک بہترین استاد قوم کا مستقبل تعمیر کرتا ہے۔'
    },
    languagesKnown: ['Hindi', 'Marwari', 'English', 'Urdu'],
    expertise: ['School Administration', 'Girl Child Education', 'Teacher Training', 'Rural Sociology'],
    contactPermission: true,
    email: 'shabana.principal.edu@raj.gov.in',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    badges: ['👨‍🏫 Teacher', '👮 Govt Officer', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-11',
    name: 'Shri Haji Abdul Ghaffar Rangrez',
    fatherName: 'Late Shri Peer Mohd. Rangrez',
    gender: 'Male',
    dob: '1945-10-15',
    nativePlace: 'Ajmer, Rajasthan',
    currentCity: 'Ajmer',
    state: 'Rajasthan',
    district: 'Ajmer',
    country: 'India',
    occupation: 'Community Legend, Philanthropist & Education Trust President',
    categoryId: 'lifetime-contribution',
    designation: 'Founder President & Patron-in-Chief',
    organization: 'All India Rangrez Samaj Educational & Charitable Trust',
    qualification: 'B.Com (1966), Honorary Doctorate in Social Literature',
    university: 'University of Rajasthan & Social Welfare Council',
    yearOfAchievement: 2015,
    careerJourney: {
      en: 'For over 50 years, Haji Abdul Ghaffar has been the guiding pillar of the community. Starting from a small traditional textile dyeing setup in Ajmer, he built an educational trust that has funded scholarships for over 5,000 students and built 3 community hostels.',
      hi: '50 से अधिक वर्षों से, हाजी अब्दुल गफ्फार समाज के मार्गदर्शक स्तंभ रहे हैं। अजमेर में एक छोटे पारंपरिक कपड़ा रंगाई उद्योग से शुरुआत करके, उन्होंने एक शैक्षिक ट्रस्ट बनाया जिसने 5,000 से अधिक छात्रों को छात्रवृत्ति दी और 3 सामुदायिक छात्रावास बनाए।',
      ur: 'گزشتہ 50 برسوں سے حاجی عبد الغفار صاحب برادری کے سرپرست اور ستون ہیں۔ اجمیر میں کپڑوں کی رنگائی کے چھوٹے کام سے شروعات کر کے ایک عظیم تعلیمی ٹرسٹ قائم کیا جس کے تحت 5000 سے زائد طلباء کو اسکالرشپ اور 3 ہاسٹلز تعمیر کیے۔'
    },
    biography: {
      en: 'Shri Haji Abdul Ghaffar Rangrez is a universally respected community pioneer whose lifetime contribution has transformed artisanal Rangrez families into modern educational achievers across Western and Northern India.',
      hi: 'श्री हाजी अब्दुल गफ्फार रंगरेज एक सर्वमान्य समाज रत्न हैं, जिनके आजीवन योगदान ने पश्चिमी और उत्तरी भारत में कारीगर रंगरेज परिवारों को आधुनिक शैक्षिक उपलब्धियों की ओर अग्रसर किया है।',
      ur: 'حاجی عبد الغفار صاحب برادری کے ایک عظیم اور قابل احترام محسن ہیں جن کی تاحیات خدمات نے محنت کش خاندانوں کے بچوں کو اعلیٰ تعلیم اور سرکاری ملازمتوں تک پہنچانے میں تاریخی کردار ادا کیا ہے۔'
    },
    majorAchievements: [
      'Founded the All India Rangrez Educational Scholarship Fund benefiting 5,000+ students',
      'Established 3 free student hostels for competitive exam aspirants in Jaipur, Ajmer, and Delhi',
      'Recipient of President Lifetime Social Service Commendation (2018)'
    ],
    awardsHonors: [
      'President Lifetime Social Service Commendation (2018)',
      'Rajasthan State Samaj Bhushan Award (2015)',
      'National Goodwill & Communal Harmony Award (2021)'
    ],
    socialContributions: {
      en: 'Dedicated his life and life savings to eradicating poverty and illiteracy in the artisan community. Personally mentors young social workers and presides over mass community weddings without dowry.',
      hi: 'कारीगर समाज से गरीबी और निरक्षरता को दूर करने के लिए अपना जीवन और जीवन भर की कमाई समर्पित कर दी। युवा सामाजिक कार्यकर्ताओं का मार्गदर्शन करते हैं और दहेज मुक्त सामूहिक विवाहों की अध्यक्षता करते हैं।',
      ur: 'اپنی پوری زندگی اور کمائی برادری سے غربت اور جہالت کے خاتمے کے لیے وقف کر دی۔ نوجوانوں کی رہنمائی کرتے ہیں اور جہیز کے بغیر اجتماعی شادیوں کا انعقاد کرواتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'True wealth is not what you keep in your bank account, but how many lives you uplift with your hands. Educate your children, remain humble, and never forget to serve the community that gave you identity.',
      hi: 'सच्चा धन वह नहीं है जो आपके बैंक खाते में है, बल्कि वह है कि आप अपने हाथों से कितने जीवन संवारते हैं। अपने बच्चों को शिक्षित करें, विनम्र रहें, और उस समाज की सेवा करना कभी न भूलें जिसने आपको पहचान दी।',
      ur: 'دولت وہ نہیں جو بینک میں جمع ہو، بلکہ وہ ہے جس سے آپ کتنے انسانوں کی زندگی سنوارتے ہیں۔ اپنے بچوں کو اعلیٰ تعلیم دیں اور اپنی برادری اور وطن کی خدمت کو اپنا ایمان بنائیں۔'
    },
    careerAdvice: {
      en: 'To all young leaders and students: Success without ethics is meaningless. Whatever height you reach in IAS, medicine, or business, always contribute 5% of your income and time back to society.',
      hi: 'सभी युवा नेताओं और छात्रों के लिए: नैतिकता के बिना सफलता अर्थहीन है। आप आईएएस, चिकित्सा या व्यवसाय में जिस भी ऊंचाई पर पहुंचें, अपनी आय और समय का 5% समाज को वापस जरूर दें।',
      ur: 'نوجوانوں اور طلباء کے لیے پیغام: اخلاق اور خدمت کے بغیر کامیابی ادھوری ہے۔ آپ جس بھی اعلیٰ مقام پر پہنچیں، اپنی آمدنی اور وقت کا کچھ حصہ برادری کی فلاح کے لیے ضرور نکالیں۔'
    },
    languagesKnown: ['Hindi', 'Urdu', 'Marwari', 'English'],
    expertise: ['Community Leadership', 'Trust Administration', 'Social Welfare', 'Educational Reform'],
    contactPermission: true,
    email: 'haji.ghaffar.trust@gmail.com',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    badges: ['👑 Lifetime Legend', '🏆 Award Winner', '⭐ Mentor', '🤝 Social Reformer']
  },
  {
    id: 'ach-12',
    name: 'Mr. Rehan Ahmed Rangrez',
    fatherName: 'Shri Irfan Ahmed Rangrez',
    gender: 'Male',
    dob: '2001-03-20',
    nativePlace: 'Indore, Madhya Pradesh',
    currentCity: 'Cambridge, MA',
    state: 'Madhya Pradesh',
    district: 'Indore',
    country: 'USA',
    occupation: 'MIT Research Fellow & Artificial Intelligence Innovator',
    categoryId: 'young-achievers',
    designation: 'Doctoral Researcher in AI & Robotics',
    organization: 'Massachusetts Institute of Technology (MIT, USA)',
    qualification: 'B.Tech Computer Science (IIT Bombay Topper), M.S. & Ph.D. Fellow (MIT)',
    university: 'IIT Bombay & MIT USA',
    yearOfAchievement: 2024,
    careerJourney: {
      en: 'At age 21, Rehan secured All-India Rank 1 in GATE Computer Science and graduated as the Gold Medalist from IIT Bombay. He received the prestigious MIT Presidential Fellowship to conduct cutting-edge research in autonomous robotics.',
      hi: '21 वर्ष की आयु में, रेहान ने गेट कंप्यूटर साइंस में ऑल-इंडिया रैंक 1 हासिल की और आईआईटी बॉम्बे से गोल्ड मेडलिस्ट के रूप में स्नातक किया। उन्हें स्वायत्त रोबोटिक्स में अनुसंधान के लिए एमआईटी प्रेसिडेंशियल फेलोशिप प्राप्त हुई।',
      ur: 'محض 21 سال کی عمر میں ریحان نے گیٹ کمپیوٹر سائنس میں پورے ہندوستان میں پہلی پوزیشن (AIR 1) حاصل کی اور آئی آئی ٹی بمبئی سے گولڈ میڈل لیا۔ فی الحال ایم آئی ٹی امریکہ میں مصنوعی ذہانت (AI) پر ریسرچ کر رہے ہیں۔'
    },
    biography: {
      en: 'Mr. Rehan Ahmed is a brilliant Young Achiever and global tech prodigy representing the new generation of the Rangrez community on the world scientific stage at MIT.',
      hi: 'श्री रेहान अहमद एक शानदार युवा प्रतिभा और वैश्विक तकनीकी चमत्कार हैं, जो एमआईटी में विश्व वैज्ञानिक मंच पर रंगरेज समाज की नई पीढ़ी का प्रतिनिधित्व कर रहे हैं।',
      ur: 'ریحان احمد ایک بے حد باصلاحیت نوجوان اور آئی ٹی کے ابھرتے ہوئے ستارے ہیں جو ایم آئی ٹی امریکہ میں پوری دنیا کے سامنے برادری اور ہندوستان کا نام روشن کر رہے ہیں۔'
    },
    majorAchievements: [
      'All-India Rank 1 in GATE Computer Science & Engineering (2023)',
      'Recipient of MIT Presidential Fellowship for Ph.D. in AI & Robotics (2023)',
      'Published 5 research papers in IEEE and ACM global robotics conferences'
    ],
    awardsHonors: [
      'President of India Gold Medal at IIT Bombay (2023)',
      'National Young Scientist Pioneer Award (2024)',
      'MP State Gaurav Youth Icon Award (2023)'
    ],
    socialContributions: {
      en: 'Runs a free online coding and AI mentorship boot camp every weekend for 500+ school and college students from the community across rural and urban India.',
      hi: 'ग्रामीण और शहरी भारत के 500 से अधिक स्कूली और कॉलेज के छात्रों के लिए हर सप्ताहांत एक नि:शुल्क ऑनलाइन कोडिंग और एआई मेंटरशिप बूट कैंप चलाते हैं।',
      ur: 'ہر ہفتے کے آخر میں ہندوستان بھر کے 500 سے زائد طلباء اور نوجوانوں کے لیے آن لائن مفت کوڈنگ اور مصنوعی ذہانت (AI) کی کلاسز اور رہنمائی کیمپ چلاتے ہیں۔'
    },
    inspirationalMessage: {
      en: 'Never let anyone tell you that coming from a traditional business or humble town limits your dreams. With consistent daily coding, strong mathematics, and self-belief, any door in the world will open for you!',
      hi: 'कभी किसी को यह न कहने दें कि एक पारंपरिक व्यवसाय या साधारण शहर से आने के कारण आपके सपने सीमित हैं। निरंतर दैनिक कोडिंग, मजबूत गणित और आत्मविश्वास के साथ, दुनिया का कोई भी दरवाजा आपके लिए खुल जाएगा!',
      ur: 'کبھی یہ نہ سوچیں کہ عام شہر یا محنت کش گھرانے سے تعلق رکھنے کی وجہ سے آپ کے خواب محدود ہیں۔ روزانہ کی محنت، ریاضی میں مہارت اور خود اعتمادی سے دنیا کا ہر دروازہ کھل سکتا ہے!'
    },
    careerAdvice: {
      en: 'For engineering aspirants: Focus deeply on Data Structures, Algorithms, and Linear Algebra. Utilize free open-source MIT OpenCourseWare and NPTEL lectures to master concepts from first principles.',
      hi: 'इंजीनियरिंग के उम्मीदवारों के लिए: डेटा स्ट्रक्चर्स, एल्गोरिदम और लीनियर अलजेब्रा पर गहराई से ध्यान दें। बुनियादी सिद्धांतों में महारत हासिल करने के लिए एनपीटीईएल और एमआईटी के नि:शुल्क लेक्चर का उपयोग करें।',
      ur: 'انجینئرنگ کے طلباء کے لیے: ڈیٹا اسٹرکچرز، الگورتھم اور ریاضی پر خاص توجہ دیں۔ انٹرنیٹ پر موجود مفت این پی ٹی ای ایل (NPTEL) اور ایم آئی ٹی کے لیکچرز سے بھرپور فائدہ اٹھائیں۔'
    },
    languagesKnown: ['English', 'Hindi', 'Urdu'],
    expertise: ['Artificial Intelligence', 'Robotics & Automation', 'Algorithm Design', 'Machine Learning'],
    contactPermission: true,
    email: 'rehan.ahmed.mit@gmail.com',
    linkedin: 'https://linkedin.com/in/rehan-ahmed-mit',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: true,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    badges: ['🌟 Young Achiever', '🎓 Gold Medalist', '💻 AI Innovator', '⭐ Mentor']
  },
  {
    id: 'ach-13',
    name: 'Shri Mohd. Shafi Neelgar',
    fatherName: 'Shri Rahim Bux Neelgar',
    gender: 'Male',
    dob: '1968-07-11',
    nativePlace: 'Jodhpur, Rajasthan',
    currentCity: 'Jodhpur',
    state: 'Rajasthan',
    district: 'Jodhpur',
    country: 'India',
    occupation: 'Senior Public Representative & Former Mayor',
    categoryId: 'public-rep',
    designation: 'Senior Municipal Councilor & Civic Development Chairman',
    organization: 'Municipal Corporation, Jodhpur',
    qualification: 'M.A. Public Administration, LL.B.',
    university: 'Jai Narain Vyas University, Jodhpur',
    yearOfAchievement: 2018,
    careerJourney: {
      en: 'Elected as Municipal Councilor for 4 consecutive terms with overwhelming majorities. He served as the Mayor of Jodhpur and spearheaded the modernization of heritage artisan quarters and city-wide clean water infrastructure.',
      hi: 'भारी बहुमत के साथ लगातार 4 बार नगर निगम पार्षद चुने गए। उन्होंने जोधपुर के महापौर के रूप में कार्य किया और ऐतिहासिक कारीगर बस्तियों के आधुनिकीकरण और पूरे शहर में स्वच्छ जल बुनियादी ढांचे का नेतृत्व किया।',
      ur: 'مسلسل 4 مرتبہ بھاری اکثریت سے میونسپل کونسلر منتخب ہوئے۔ جودھپور کے میئر کے عہدے پر فائز رہے اور شہر میں صاف پانی کی فراہمی، سڑکوں کی پختگی اور دستکار بستیوں کی تعمیر و ترقی میں بے مثال کام کیا،'
    },
    biography: {
      en: 'Shri Mohd. Shafi Neelgar is an unblemished public servant and visionary political leader who has redefined grassroots urban governance and artisan welfare in Rajasthan.',
      hi: 'श्री मोहम्मद शफी नीलगर एक बेदाग जनसेवक और दूरदर्शी राजनीतिक नेता हैं, जिन्होंने राजस्थान में जमीनी स्तर के शहरी शासन और कारीगर कल्याण को नई परिभाषा दी है।',
      ur: 'جناب محمد شفیع نیلگر ایک بے داغ اور عوام دوست سیاسی و سماجی رہنما ہیں جنہوں نے جودھپور اور راجستھان میں عوامی خدمت اور برادری کے مسائل حل کرنے میں ایک نئی مثال قائم کی ہے۔'
    },
    majorAchievements: [
      'Elected Senior Municipal Councilor for 4 consecutive terms (20 years of clean public service)',
      'Sanctioned Rs. 50 Crore special civic infrastructure fund for traditional artisan colonies',
      'Recipient of Rajasthan Best Urban Citizen & Civic Leader Award (2019)'
    ],
    awardsHonors: [
      'Rajasthan Best Civic Leader Award by Urban Ministry (2019)',
      'Marwar Bhushan Award for Public Leadership (2017)',
      'National Clean Cities Leadership Commendation (2020)'
    ],
    socialContributions: {
      en: 'Establishes help desks in municipal offices to assist widows, senior citizens, and low-income families in securing government pensions, health cards (Ayushman Bharat), and housing grants.',
      hi: 'विधवाओं, वरिष्ठ नागरिकों और कम आय वाले परिवारों को सरकारी पेंशन, स्वास्थ्य कार्ड (आयुष्मान भारत) और आवास अनुदान दिलाने में मदद के लिए नगर निगम कार्यालयों में सहायता डेस्क स्थापित करते हैं।',
      ur: 'میونسپل دفاتر میں خصوصی ہیلپ ڈیسک قائم کیے ہیں تاکہ مستحق خاندانوں، بیواؤں اور بزرگوں کو سرکاری پینشن، صحت کارڈ اور رہائشی اسکیموں کا فوری فائدہ مل سکے۔'
    },
    inspirationalMessage: {
      en: 'Politics and public representation are not for power, but a sacred trust to wipe the tears of the weak. Enter public life with a clean heart, legal knowledge, and an unwavering commitment to justice.',
      hi: 'राजनीति और जनप्रतिनिधित्व सत्ता के लिए नहीं, बल्कि कमजोरों के आंसू पोंछने का एक पवित्र दायित्व है। स्वच्छ हृदय, कानूनी ज्ञान और न्याय के प्रति अटूट प्रतिबद्धता के साथ सार्वजनिक जीवन में प्रवेश करें।',
      ur: 'سیاست اور عوامی نمائندگی طاقت کا ذریعہ نہیں بلکہ کمزوروں کی خدمت کا ایک مقدس فریضہ ہے۔ صاف نیت، علم اور انصاف کے جذبے کے ساتھ میدان عمل میں آئیں۔'
    },
    careerAdvice: {
      en: 'Youth interested in public life and leadership should first get a strong law or sociology degree. Participate in college student unions, NSS camps, and grassroots civic campaigns to build genuine people skills.',
      hi: 'सार्वजनिक जीवन और नेतृत्व में रुचि रखने वाले युवाओं को पहले कानून या समाजशास्त्र की मजबूत डिग्री लेनी चाहिए। लोगों से जुड़ने के कौशल के लिए छात्र संघों, एनएसएस शिविरों और नागरिक अभियानों में भाग लें।',
      ur: 'عوامی خدمت اور قیادت میں دلچسپی رکھنے والے نوجوان پہلے قانون یا سماجیات میں اعلیٰ تعلیم حاصل کریں۔ کالج یونینز، سماجی کیمپوں اور فلاحی کاموں کے ذریعے عوام سے جڑنا سیکھیں۔'
    },
    languagesKnown: ['Hindi', 'Marwari', 'Urdu', 'English'],
    expertise: ['Urban Governance', 'Public Policy', 'Civic Infrastructure', 'Social Welfare Schemes'],
    contactPermission: true,
    email: 'shafi.neelgar.jodhpur@gmail.com',
    isMentor: true,
    isVerified: true,
    isFeatured: false,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    badges: ['🗳️ Public Representative', '🏛️ Civic Leader', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-14',
    name: 'Mrs. Rashida Bano Rangrez',
    fatherName: 'Shri Sikandar Ali Rangrez',
    gender: 'Female',
    dob: '1979-11-05',
    nativePlace: 'Ahmedabad, Gujarat',
    currentCity: 'Ahmedabad',
    state: 'Gujarat',
    district: 'Ahmedabad',
    country: 'India',
    occupation: 'Women Empowerment Leader & NGO Founder',
    categoryId: 'community-leaders',
    designation: 'Founder Director & National Coordinator',
    organization: 'Hunar-e-Rangrez Women Self-Help Foundation',
    qualification: 'M.S.W. (Master of Social Work), Diploma in Textile Design & Micro-Finance',
    university: 'Gujarat University & IIM Ahmedabad Social Entrepreneurship Cell',
    yearOfAchievement: 2020,
    careerJourney: {
      en: 'Witnessing the financial vulnerability of traditional women artisans, Rashida organized 10 women into a micro-credit self-help group in 2008. Today, her foundation connects over 10,000 artisan women across Gujarat and Maharashtra directly to global e-commerce markets.',
      hi: 'पारंपरिक महिला कारीगरों की आर्थिक स्थिति को देखते हुए, रशीदा ने 2008 में 10 महिलाओं को एक माइक्रो-क्रेडिट स्वयं सहायता समूह में संगठित किया। आज, उनका फाउंडेशन गुजरात और महाराष्ट्र में 10,000 से अधिक कारीगर महिलाओं को वैश्विक ई-कॉमर्स बाजारों से जोड़ता है।',
      ur: 'دستکار خواتین کے معاشی مسائل کو دیکھتے ہوئے 2008 میں 10 خواتین پر مشتمل پہلا سیلف ہیلپ گروپ شروع کیا۔ آج ان کا فاؤنڈیشن گجرات اور مہاراشٹر کی 10,000 سے زائد ہنرمند خواتین کو براہ راست عالمی آن لائن مارکیٹ سے جوڑ چکا ہے۔'
    },
    biography: {
      en: 'Mrs. Rashida Bano is an acclaimed Community Leader and social entrepreneur whose tireless work has brought financial independence, digital literacy, and dignity to thousands of women.',
      hi: 'श्रीमती रशीदा बानो एक प्रशंसित सामुदायिक नेत्री और सामाजिक उद्यमी हैं, जिनके अथक प्रयासों ने हजारों महिलाओं को वित्तीय स्वतंत्रता, डिजिटल साक्षरता और सम्मान दिलाया है।',
      ur: 'محترمہ رشیدہ بانو ایک مایہ ناز سماجی رہنما اور ویمن امپاورمنٹ لیڈر ہیں جن کی انتھک محنت نے ہزاروں خواتین کو خود کفیل، باوقار اور بااختیار بنایا ہے۔'
    },
    majorAchievements: [
      'Empowered 10,000+ women artisans through 500 Self-Help Groups (SHGs) and zero-interest microloans',
      'Recipient of Nari Shakti Puraskar Nominee & Gujarat State Women Leader Award (2021)',
      'Partnered with National Institute of Design (NID) to modernize traditional tie-and-dye (Bandhej) craft'
    ],
    awardsHonors: [
      'Gujarat State Women Leadership Excellence Award (2021)',
      'National Microfinance Social Impact Award (2019)',
      'Ahilyabai Holkar Samaj Seva Puraskar (2022)'
    ],
    socialContributions: {
      en: 'Organizes free digital literacy, banking, and e-commerce seller workshops for women from conservative households, helping them open independent bank accounts and build sustainable family incomes.',
      hi: 'रूढ़िवादी परिवारों की महिलाओं के लिए नि:शुल्क डिजिटल साक्षरता, बैंकिंग और ई-कॉमर्स विक्रेता कार्यशालाएं आयोजित करती हैं, जिससे उन्हें स्वतंत्र बैंक खाते खोलने और पारिवारिक आय बढ़ाने में मदद मिलती है।',
      ur: 'خواتین کے لیے مفت ڈیجیٹل لٹریسی، بینکنگ اور آن لائن کاروبار کی ٹریننگ ورکشاپس کا انعقاد کرتی ہیں تاکہ گھر بیٹھے خواتین اپنے ہنر سے باعزت روزگار کما سکیں۔'
    },
    inspirationalMessage: {
      en: 'When a woman discovers the strength of her own hands and mind, her entire household prospers. Never underestimate your potential; every skill you possess is a step toward freedom and self-respect.',
      hi: 'जब एक महिला अपने हाथों और दिमाग की ताकत को पहचान लेती है, तो उसका पूरा परिवार समृद्ध होता है। अपनी क्षमता को कभी कम न आंकें; आपके पास जो भी हुनर है वह स्वतंत्रता और आत्मसम्मान की ओर एक कदम है।',
      ur: 'جب ایک عورت اپنے ہنر اور محنت کو پہچان لیتی ہے تو پورا گھرانہ خوشحال ہو جاتا ہے۔ کبھی اپنی صلاحیت کو کم نہ سمجھیں، آپ کا ہر ہنر خودداری اور ترقی کی ضمانت ہے۔'
    },
    careerAdvice: {
      en: 'For youth entering MSW and Social Entrepreneurship: Master digital tools like Excel, Canva, and e-commerce onboarding. Combining traditional community craftsmanship with modern digital marketing creates unstoppable businesses.',
      hi: 'एमएसडब्ल्यू और सामाजिक उद्यमिता में आने वाले युवाओं के लिए: एक्सेल, कैनवा और ई-कॉमर्स जैसे डिजिटल उपकरणों में महारत हासिल करें। पारंपरिक शिल्प को आधुनिक मार्केटिंग से जोड़ना अद्भुत सफलता देता है।',
      ur: 'سماجی خدمات اور کاروبار میں آنے والے نوجوانوں کے لیے: جدید ڈیجیٹل ٹولز، آن لائن مارکیٹنگ اور ای کامرس کو سیکھیں۔ روایتی ہنر کو جدید ٹیکنالوجی سے جوڑیں تو شاندار کامیابی ملتی ہے۔'
    },
    languagesKnown: ['Gujarati', 'Hindi', 'Urdu', 'English'],
    expertise: ['Women Empowerment', 'Micro-Finance & SHGs', 'Artisan Cluster Development', 'Social Entrepreneurship'],
    contactPermission: true,
    email: 'rashida.hunar.foundation@gmail.com',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: false,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    badges: ['🤝 Community Leader', '🌟 Social Entrepreneur', '⭐ Mentor', '🏆 Award Winner']
  },
  {
    id: 'ach-15',
    name: 'Dr. Bilal Ahmed Rangrez, IRS',
    fatherName: 'Shri Mukhtar Ahmed Rangrez',
    gender: 'Male',
    dob: '1985-09-18',
    nativePlace: 'Lucknow, Uttar Pradesh',
    currentCity: 'Mumbai',
    state: 'Maharashtra',
    district: 'Mumbai City',
    country: 'India',
    occupation: 'Senior Indian Revenue Service (IRS) Officer',
    categoryId: 'govt-services',
    designation: 'Joint Commissioner of Income Tax',
    organization: 'Ministry of Finance, Government of India',
    qualification: 'M.Sc Physics (Gold Medalist), Ph.D. in Public Economics, IRS (2012 Batch)',
    university: 'Aligarh Muslim University (AMU) & National Academy of Direct Taxes (NADT)',
    yearOfAchievement: 2012,
    careerJourney: {
      en: 'A Gold Medalist in Physics from AMU, Bilal cleared the UPSC Civil Services Examination on his first attempt in 2011 with All-India Rank 142. He joined the Indian Revenue Service (IRS) and has led major financial transparency investigations and digital taxpayer reforms.',
      hi: 'एएमयू से भौतिकी में गोल्ड मेडलिस्ट, बिलाल ने 2011 में अपने पहले ही प्रयास में ऑल-इंडिया रैंक 142 के साथ यूपीएससी सिविल सेवा परीक्षा उत्तीर्ण की। वह भारतीय राजस्व सेवा (आईआरएस) में शामिल हुए और प्रमुख वित्तीय पारदर्शिता सुधारों का नेतृत्व किया।',
      ur: 'علی گڑھ مسلم یونیورسٹی سے فزکس میں گولڈ میڈل حاصل کیا اور 2011 میں اپنی پہلی ہی کوشش میں یو پی ایس سی (UPSC) کا امتحان AIR 142 کے ساتھ شاندار کامیابی سے پاس کیا۔ فی الحال وزارت خزانہ میں جوائنٹ کمشنر آف انکم ٹیکس کے عہدے پر فائز ہیں۔'
    },
    biography: {
      en: 'Dr. Bilal Ahmed Rangrez is a high-ranking IRS civil servant, author, and anti-corruption officer who serves as a guiding light for thousands of civil service aspirants in the community.',
      hi: 'डॉ. बिलाल अहमद रंगरेज एक उच्च पदस्थ आईआरएस सिविल सेवक, लेखक और अधिकारी हैं, जो समाज में हजारों सिविल सेवा उम्मीदवारों के लिए मार्गदर्शक हैं।',
      ur: 'ڈاکٹر بلال احمد رنگریز ایک اعلیٰ سرکاری افسر (IRS)، مصنف اور ملک کے ایماندار افسران میں شمار ہوتے ہیں جو برادری کے ہزاروں نوجوانوں کے لیے مشعل راہ ہیں۔'
    },
    majorAchievements: [
      'Cleared UPSC Civil Services Examination on 1st Attempt (All-India Rank 142, 2011)',
      'Spearheaded Faceless Assessment E-Governance reforms for over 1 million taxpayers in Western region',
      'Recipient of Finance Minister Excellence in Public Service Commendation (2021)'
    ],
    awardsHonors: [
      'Finance Minister Excellence in Public Service Award (2021)',
      'President Gold Medal at NADT Training Academy (2014)',
      'UP State Shakuntala Devi Vidya Ratna Award (2015)'
    ],
    socialContributions: {
      en: 'Founded the "Al-Kalam UPSC Guidance Cell", which provides free interview mock panels, essay evaluation, and study materials to civil service aspirants from minority and economically backward communities.',
      hi: '"अल-कलाम यूपीएससी गाइडेंस सेल" की स्थापना की, जो अल्पसंख्यक और आर्थिक रूप से पिछड़े समुदायों के सिविल सेवा उम्मीदवारों को नि:शुल्क इंटरव्यू मॉक पैनल, निबंध मूल्यांकन और अध्ययन सामग्री प्रदान करता है।',
      ur: '"الکلام یو پی ایس سی گائیڈنس سیل" قائم کیا ہے جس کے تحت مستحق اور اقلیتی طلباء کو آئی اے ایس، آئی پی ایس اور آئی آر ایس کی تیاری کے لیے مفت کوچنگ، انٹرویو پینل اور کتابیں فراہم کی جاتی ہیں۔'
    },
    inspirationalMessage: {
      en: 'The doors of India\'s highest bureaucracy and administrative power are wide open for those willing to burn the midnight oil. Think big, dream of IAS/IPS/IRS, and serve the motherland with absolute honesty and patriotism.',
      hi: 'भारत की सर्वोच्च नौकरशाही और प्रशासनिक शक्ति के दरवाजे उन लोगों के लिए खुले हैं जो कड़ी मेहनत करने को तैयार हैं। बड़ा सोचें, आईएएस/आईपीएस/आईआरएस का सपना देखें, और पूर्ण ईमानदारी के साथ मातृभूमि की सेवा करें।',
      ur: 'ہندوستان کی اعلیٰ ترین انتظامی اور سرکاری ملازمتوں کے دروازے ان محنتی نوجوانوں کے لیے کھلے ہیں جو رات و دن ایک کرنے کا حوصلہ رکھتے ہیں۔ بڑا سوچیں، آئی اے ایس اور آئی پی ایس کا خواب دیکھیں اور وطن عزیز کی خدمت کریں۔'
    },
    careerAdvice: {
      en: 'For UPSC preparation: Master the Hindu/Indian Express daily editorials, practice answer writing within 7 minutes per question, and choose your optional subject based on genuine interest and revision speed.',
      hi: 'यूपीएससी की तैयारी के लिए: दैनिक समाचार पत्र के संपादकीय पर पकड़ बनाएं, प्रति प्रश्न 7 मिनट के भीतर उत्तर लिखने का अभ्यास करें, और वास्तविक रुचि के आधार पर अपने वैकल्पिक विषय का चयन करें।',
      ur: 'یو پی ایس سی (UPSC) کی تیاری کے لیے: روزانہ اخبارات کے اداریے غور سے پڑھیں، ہر سوال کا جواب 7 منٹ میں لکھنے کی مشق کریں اور اپنے اختیاری مضمون کا انتخاب دلی دلچسپی کی بنیاد پر کریں۔'
    },
    languagesKnown: ['Hindi', 'Urdu', 'English', 'Arabic'],
    expertise: ['Public Finance', 'Taxation & E-Governance', 'UPSC Mentorship', 'Administrative Law'],
    contactPermission: true,
    email: 'bilal.irs.guidance@gmail.com',
    linkedin: 'https://linkedin.com/in/dr-bilal-ahmed-irs',
    isMentor: true,
    isVerified: true,
    isFeatured: true,
    isGovt: true,
    isOverseas: false,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    badges: ['👮 Govt Officer', '🏛️ Civil Servant', '⭐ Mentor', '🎓 Gold Medalist']
  }
];

export const INITIAL_MENTORSHIP_REQUESTS: MentorshipRequest[] = [
  {
    id: 'req-1',
    studentName: 'Mohd. Danish Rangrez',
    studentAge: 21,
    qualification: 'B.Sc Biology Final Year',
    careerGoal: 'MBBS / AIIMS Medical Entrance',
    question: 'Respected Sir, I am from a modest family in Kota. How should I revise NCERT Biology and manage time during NEET drop year without losing confidence?',
    email: 'danish.rangrez.kota@gmail.com',
    phone: '+91 98234 56789',
    mentorId: 'ach-1',
    mentorName: 'Dr. Zeeshan Ahmed Rangrez',
    status: 'approved',
    date: '2026-06-25'
  },
  {
    id: 'req-2',
    studentName: 'Sufia Bano',
    studentAge: 23,
    qualification: 'B.A. Political Science',
    careerGoal: 'UPSC Civil Services (IAS)',
    question: 'Respected Sir, how should I select between Sociology and Political Science as my UPSC optional subject, and how to structure daily answer writing practice?',
    email: 'sufia.bano.ias@gmail.com',
    phone: '+91 94567 89012',
    mentorId: 'ach-2',
    mentorName: 'Shri Tariq Mansoor Rangrez, IAS',
    status: 'pending',
    date: '2026-07-01'
  },
  {
    id: 'req-3',
    studentName: 'Faizan Ali Neelgar',
    studentAge: 19,
    qualification: '12th Science Passed',
    careerGoal: 'Space Science / ISRO Scientist',
    question: 'Respected Sir, I want to join ISRO like you. What is the step-by-step preparation strategy for IIST admission through JEE Advanced?',
    email: 'faizan.space.dream@gmail.com',
    phone: '+91 97890 12345',
    mentorId: 'ach-9',
    mentorName: 'Dr. Sameer Rangrez, Ph.D.',
    status: 'approved',
    date: '2026-06-28'
  }
];

export const INITIAL_SUCCESS_STORIES: SuccessStoryItem[] = [
  {
    id: 'story-1',
    achieverId: 'ach-1',
    achieverName: 'Dr. Zeeshan Ahmed Rangrez',
    achieverPhoto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    profession: 'Senior Cardio-Thoracic Surgeon, AIIMS New Delhi',
    title: {
      en: 'From the Dyeing Lanes of Jaipur to the Operation Theatres of AIIMS',
      hi: 'जयपुर की रंगाई गलियों से लेकर एम्स के ऑपरेशन थिएटर तक का सफर',
      ur: 'جے پور کی رنگائی گلیوں سے ایمز دہلی کے آپریشن تھیٹر تک کا قابل فخر سفر'
    },
    personalJourney: 'I was born into a traditional textile dyeing family in Ghat Gate, Jaipur. My father worked 14 hours a day standing over boiling dye vats to earn meager daily wages. My childhood home had only two rooms and frequent electricity cuts. I would often sit under the municipal streetlamp at 4 AM to study my chemistry and biology books because I knew education was the only light that could change my family future.',
    challenges: 'Financial struggle was our biggest challenge. When I cleared medical entrance, we did not have enough money for medical college admission fees. My mother sold her only two gold bangles, and the local Rangrez elders collected a small donation to pay my first semester fee. I survived on one meal a day during my early MBBS years in Delhi.',
    hardWork: 'In medical college, while others went to movies or parties, I spent 16 hours every day in the anatomy lab and medical library. I read every standard medical textbook cover to cover twice. This discipline earned me the University Gold Medal and later a scholarship to train in cardiac surgery at the Royal College of Surgeons in the United Kingdom.',
    successStory: 'Today, by the grace of Almighty and my parents prayers, I am the Director & Head of Cardiology at AIIMS New Delhi. Over the last 15 years, I have performed more than 8,500 open-heart surgeries. The greatest joy of my life is when a poor Rangrez child or an underprivileged farmer comes to AIIMS with a heart defect, and we perform their life-saving surgery completely free of cost.',
    adviceForStudents: 'Never let your current financial situation dictate the size of your dreams. Hard work has no alternative, and honesty in your profession will bring blessings that no money can buy. Respect your parents, pray regularly, and dedicate at least 8 hours a day to your studies with complete focus.',
    date: '2026-06-15'
  },
  {
    id: 'story-2',
    achieverId: 'ach-2',
    achieverName: 'Shri Tariq Mansoor Rangrez, IAS',
    achieverPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    profession: 'IAS Officer, Special Secretary Finance & Revenue, UP Govt',
    title: {
      en: 'Leaving Silicon Valley Dollars to Serve Rural India as an IAS Officer',
      hi: 'सिलिकॉन वैली के डॉलर छोड़कर ग्रामीण भारत की सेवा के लिए आईएएस बनने का सफर',
      ur: 'امریکی ڈالر چھوڑ کر دیہی بھارت کی خدمت کے لیے آئی اے ایس بننے کا تاریخی سفر'
    },
    personalJourney: 'After completing B.Tech from IIT Delhi and working in Silicon Valley, California, I had everything a young engineer dreams of—a six-figure dollar salary, luxury cars, and a comfortable life. But whenever I visited my native village in Uttar Pradesh, seeing poor farmers struggle for basic government certificates and land records made me restless. I knew my real purpose was not making software algorithms for corporations, but serving the people of my country.',
    challenges: 'Leaving a lucrative US career to sit in a small room in Mukherjee Nagar, Delhi, preparing for UPSC was a mental shock. People called me crazy for resigning from a US job. In my first mock tests, my essay writing scores were very low because I had lost touch with humanities and Indian polity after years of engineering.',
    hardWork: 'I disciplined my mind completely. I woke up at 5 AM daily, read The Hindu and Indian Express word by word, and wrote two full practice essays every single day for 10 months. I practiced answer writing until my fingers swelled. I synthesized my technical engineering mindset with administrative empathy.',
    successStory: 'When the UPSC results were declared in 2011, seeing my name at All India Rank 18 was a moment of tears and gratitude. As an IAS officer in Uttar Pradesh, I led the digitization of land revenue records, eliminating middlemen for 40 lakh farmers. Receiving the Prime Minister Excellence Award for Public Administration validated my decision to return to India.',
    adviceForStudents: 'If you want to clear UPSC, stop memorizing blindly and start developing analytical thinking. Ask why and how behind every national policy. Consistency of 7 hours daily for one year is far better than studying 15 hours for two weeks and then burning out. Believe in your capability!',
    date: '2026-06-20'
  },
  {
    id: 'story-3',
    achieverId: 'ach-4',
    achieverName: 'Dr. Sana Fatima Rangrez, Ph.D.',
    achieverPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    profession: 'Principal AI Scientist, Silicon Valley California',
    title: {
      en: 'How an Ahmedabad Girl Built 16 US Patents in Artificial Intelligence',
      hi: 'अहमदाबाद की एक लड़की ने कैसे आर्टिफिशियल इंटेलिजेंस में 16 अमेरिकी पेटेंट बनाए',
      ur: 'احمد آباد کی بیٹی نے آرٹیفیشل انٹیلی جنس میں 16 امریکی پیٹینٹ کیسے حاصل کیے'
    },
    personalJourney: 'Growing up in Ahmedabad, I was fascinated by mathematics and computers from the age of 10. While many people around told my parents that higher technical education was not necessary for girls, my father stood like a rock behind my ambition. I studied day and night to clear BITS Pilani entrance and later secured a full scholarship for Ph.D. at Stanford University.',
    challenges: 'Being a woman from a traditional Indian minority background in the hyper-competitive tech corridors of Silicon Valley came with imposter syndrome. In international AI labs, I was often the only woman in a room of 50 researchers. But I let my code and mathematical rigor speak for my competence.',
    hardWork: 'During my Ph.D. at Stanford, I spent sleepless nights training neural networks for early cancer detection from medical scans. I failed hundreds of algorithm experiments before discovering the generative architecture that eventually led to my first three US patents.',
    successStory: 'Today, as Director of AI Research, my algorithms are being deployed in top hospitals globally to detect cardiac anomalies and tumors seconds faster than traditional methods. Holding 16 US patents and being recognized by MIT Technology Review is a testimony that Indian girls can lead global innovation.',
    adviceForStudents: 'Do not be afraid of mathematics and coding. In the age of AI, coding is like reading and writing. Set up a GitHub account, build real projects, participate in online hackathons, and apply boldly for international university scholarships. Your background is your strength, not a limitation!',
    date: '2026-06-28'
  }
];

export const INITIAL_AWARDS_GALLERY: AwardItem[] = [
  {
    id: 'aw-1',
    title: { en: 'Padma Shri Nominee & Dr. B.C. Roy National Healthcare Award', hi: 'पद्म श्री नामांकित एवं डॉ. बी.सी. रॉय राष्ट्रीय चिकित्सा पुरस्कार', ur: 'پدم شری نامزدگی اور ڈاکٹر بی سی رائے قومی میڈیکل ایوارڈ' },
    recipientName: 'Dr. Zeeshan Ahmed Rangrez',
    category: 'Doctors & Medical',
    year: 2019,
    description: 'Conferred for pioneering minimally invasive cardiac surgeries and performing thousands of free life-saving heart operations for underprivileged children.',
    type: 'Government Award',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-2',
    title: { en: 'Prime Minister Award for Excellence in Public Administration', hi: 'लोक प्रशासन में उत्कृष्टता के लिए प्रधानमंत्री पुरस्कार', ur: 'پبلک ایڈمنسٹریشن میں کارکردگی کا وزیراعظم ایوارڈ' },
    recipientName: 'Shri Tariq Mansoor Rangrez, IAS',
    category: 'Civil Servants',
    year: 2022,
    description: 'Awarded by the Hon. Prime Minister of India for digitizing land revenue systems and implementing seamless e-governance direct benefit transfers in Uttar Pradesh.',
    type: 'Government Award',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-3',
    title: { en: 'ISRO Team Excellence Trophy for Chandrayaan-3 Lunar Mission', hi: 'चंद्रयान-3 चंद्र मिशन के लिए इसरो टीम उत्कृष्टता ट्रॉफी', ur: 'چندریان-3 چاند مشن کے لیے اسرو ٹیم ایکسیلنس ٹرافی' },
    recipientName: 'Dr. Sameer Rangrez, Ph.D.',
    category: 'Scientists',
    year: 2023,
    description: 'Presented to Dr. Sameer and the satellite navigation telemetry team for achieving precise soft-landing on the lunar south pole.',
    type: 'Trophy',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-4',
    title: { en: 'National Award for Teachers by Hon. President of India', hi: 'माननीय भारत के राष्ट्रपति द्वारा राष्ट्रीय शिक्षक पुरस्कार', ur: 'صدر جمہوریہ ہند کی جانب سے قومی ٹیچر ایوارڈ' },
    recipientName: 'Mrs. Shabana Begum Rangrez',
    category: 'Teachers & Education',
    year: 2020,
    description: 'Honored at Rashtrapati Bhavan for achieving zero girl-child dropout rate and transforming rural village schools into smart educational hubs.',
    type: 'Government Award',
    imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-5',
    title: { en: 'National Law Luminary Award by Bar Council of India', hi: 'बार काउंसिल ऑफ इंडिया द्वारा राष्ट्रीय लॉ लुमिनरी पुरस्कार', ur: 'بار کونسل آف انڈیا کا نیشنل لاء لومینری ایوارڈ' },
    recipientName: 'Justice (Retd.) Farooq Ahmed Neelgar',
    category: 'Judiciaries & Legal',
    year: 2017,
    description: 'Recognized for lifetime contribution to constitutional jurisprudence, protection of civil rights, and legal aid leadership.',
    type: 'Trophy',
    imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-6',
    title: { en: 'MIT Technology Review Top 35 Innovators Award', hi: 'एमआईटी टेक्नोलॉजी रिव्यू टॉप 35 इनोवेटर्स अवार्ड', ur: 'ایم آئی ٹی ٹیکنالوجی ریویو ٹاپ 35 انوویٹرز ایوارڈ' },
    recipientName: 'Dr. Sana Fatima Rangrez, Ph.D.',
    category: 'Overseas Professionals & IT',
    year: 2022,
    description: 'Awarded in Silicon Valley for groundbreaking US patents in neural network architecture for early cardiac and cancer diagnostic AI systems.',
    type: 'Certificate',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-7',
    title: { en: 'National Export Excellence Trophy by Ministry of Textiles', hi: 'वस्त्र मंत्रालय द्वारा राष्ट्रीय निर्यात उत्कृष्टता ट्रॉफी', ur: 'وزارت ٹیکسٹائل کا نیشنل ایکسپورٹ ایکسیلنس ٹرافی' },
    recipientName: 'Haji Mohammed Haroon Rangrez',
    category: 'Entrepreneurs',
    year: 2021,
    description: 'Conferred by Government of India for exceptional eco-friendly textile exports to 35 countries and generating over 3,200 direct jobs.',
    type: 'Trophy',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-8',
    title: { en: 'President Police Medal for Gallantry & Meritorious Service', hi: 'वीरता और सराहनीय सेवा के लिए राष्ट्रपति पुलिस पदक', ur: 'بہادری اور شاندار خدمات کا صدارتی پولیس میڈل' },
    recipientName: 'Shri Mohd. Imran Rangrez, IPS',
    category: 'Police Officers',
    year: 2021,
    description: 'Honored for breaking interstate cyber-crime syndicates and launching community policing and youth anti-drug campaigns across Madhya Pradesh.',
    type: 'Medal',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-9',
    title: { en: 'UGC National Best Teacher & Researcher Award', hi: 'यूजीसी राष्ट्रीय सर्वश्रेष्ठ शिक्षक एवं शोधकर्ता पुरस्कार', ur: 'یو جی سی کا بہترین ٹیچر اور ریسرچر ایوارڈ' },
    recipientName: 'Prof. Dr. Ayesha Siddiqua Rangrez',
    category: 'Professors',
    year: 2018,
    description: 'Honored by University Grants Commission for developing 14 eco-friendly natural dye patents and guiding 28 doctoral research scholars.',
    type: 'Certificate',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aw-10',
    title: { en: 'All India Rangrez Samaj Gaurav Samman & Community Jewel Trophy', hi: 'ऑल इंडिया रंगरेज समाज गौरव सम्मान एवं बिरादरी रत्न ट्रॉफी', ur: 'آل انڈیا رنگریز برادری کا فخر اور برادری رتن ٹرافی' },
    recipientName: 'Advocate Bilquis Bano Rangrez',
    category: 'Advocates',
    year: 2022,
    description: 'Conferred by the National Trust for tireless pro-bono Supreme Court advocacy protecting minority educational scholarships and women rights.',
    type: 'Community Award',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=80'
  }
];
