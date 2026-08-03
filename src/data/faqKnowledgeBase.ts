import { Language } from '../types';

export interface FAQItem {
  id: string;
  slug: string;
  categoryId: string;
  qEn: string;
  qHi: string;
  qUr: string;
  aEn: string;
  aHi: string;
  aUr: string;
  keywords: string[];
  relatedIds?: string[];
  lastUpdated: string;
  featured?: boolean;
  viewCount?: number;
  helpfulCount?: number;
  tabLink?: string; // App tab navigation link if relevant
}

export interface FAQCategory {
  id: string;
  nameEn: string;
  nameHi: string;
  nameUr: string;
  iconName: string;
  descriptionEn: string;
  descriptionHi: string;
  descriptionUr: string;
  color: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'society-registration',
    nameEn: 'About Society & Registration',
    nameHi: 'सोसाइटी एवं पंजीकरण विवरण',
    nameUr: 'سوسائٹی اور رجسٹریشن کی تفصیلات',
    iconName: 'Building2',
    descriptionEn: 'Official government registration, registration number, legal status, and society aims.',
    descriptionHi: 'सरकारी पंजीकरण, पंजीकरण संख्या, कानूनी स्थिति और समाज के मुख्य उद्देश्य।',
    descriptionUr: 'سرکاری رجسٹریشن، رجسٹریشن نمبر، قانونی حیثیت اور مقاصد۔',
    color: 'emerald'
  },
  {
    id: 'history-heritage',
    nameEn: 'Community History & Heritage',
    nameHi: 'समुदाय इतिहास एवं विरासत',
    nameUr: 'برادری کی تاریخ اور ورثہ',
    iconName: 'BookOpen',
    descriptionEn: 'Historical roots, Neelgar artisan legacy, dye-master history, and cultural heritage.',
    descriptionHi: 'ऐतिहासिक जड़ें, नीलगर शिल्प विरासत, रंगरेज़ इतिहास और सांस्कृतिक पहचान।',
    descriptionUr: 'تاریخی جڑیں، نیل گر کا فنکارانہ ورثہ اور ثقافتی پہچان۔',
    color: 'amber'
  },
  {
    id: 'mahapanchayat-reforms',
    nameEn: 'Mahapanchayat & Social Reforms',
    nameHi: 'महापंचायत एवं सामाजिक सुधार',
    nameUr: 'مہاپنچایت اور سماجی اصلاحات',
    iconName: 'Gavel',
    descriptionEn: 'Dowry-free Nikah guidelines, fixed Qazi honorarium, dispute mediation, and resolutions.',
    descriptionHi: 'दहेज-मुक्त निकाह नियम, काजी हेतु तय मानदेय, विवाद निपटारा एवं समाज सुधार संकल्प।',
    descriptionUr: 'جہیز سے پاک نکاح کی رہنمائی، قاضی کا مقررہ ہدیہ، تنازعات کا تصفیہ اور قراردادیں۔',
    color: 'emerald'
  },
  {
    id: 'membership-id',
    nameEn: 'Membership, Census & Digital ID',
    nameHi: 'सदस्यता, जनगणना एवं डिजिटल आईडी',
    nameUr: 'رکنیت، مردم شماری اور ڈیجیٹل آئی ڈی',
    iconName: 'UserCheck',
    descriptionEn: 'Universal registration, digital identity card with QR verification, family tree, and census.',
    descriptionHi: 'सार्वभौमिक सदस्यता, क्यूआर-सत्यापित डिजिटल आईडी कार्ड, पारिवारिक वंशावली और जनगणना।',
    descriptionUr: 'عوامی رکنیت، کیو آر ڈیجیٹل آئی ڈی کارڈ، خاندانی شجرہ اور مردم شماری۔',
    color: 'blue'
  },
  {
    id: 'education-scholarships',
    nameEn: 'Education & Merit Scholarships',
    nameHi: 'शिक्षा एवं मेधावी छात्रवृत्ति',
    nameUr: 'تعلیم اور میرٹ اسکالرشپس',
    iconName: 'GraduationCap',
    descriptionEn: 'School directory, higher education scholarships, NEET/JEE coaching, and orphan support.',
    descriptionHi: 'स्कूल निर्देशिका, उच्च शिक्षा छात्रवृत्ति, NEET/JEE कोचिंग और अनाथ सहायता कार्यक्रम।',
    descriptionUr: 'اسکول ڈائریکٹری، اعلیٰ تعلیم کے وظائف، نیٹ/جے ای ای کوچنگ اور یتیموں کی مدد۔',
    color: 'amber'
  },
  {
    id: 'govt-schemes-welfare',
    nameEn: 'Government Schemes & Welfare',
    nameHi: 'सरकारी योजनाएं एवं अल्पसंख्यक कल्याण',
    nameUr: 'سرکاری اسکیمیں اور اقلیتی فلاح',
    iconName: 'Landmark',
    descriptionEn: 'Minority schemes, PM-Vikas, Mudra loans, PM-JAY, and scholarship portals.',
    descriptionHi: 'अल्पसंख्यक योजनाएं, पीएम विकास, मुद्रा ऋण, आयुष्मान भारत और छात्रवृत्ति पोर्टल।',
    descriptionUr: 'اقلیتی اسکیمیں، پی ایم وکاس، مدرا لون، اور تعلیمی سہولیات۔',
    color: 'emerald'
  },
  {
    id: 'employment-skills',
    nameEn: 'Employment & Artisan Skill Portal',
    nameHi: 'रोजगार एवं कारीगर कौशल पोर्टल',
    nameUr: 'روزگار اور ہنر مندی پورٹل',
    iconName: 'Briefcase',
    descriptionEn: 'Job listings, artisan marketplace, skill development centers, and business directory.',
    descriptionHi: 'नौकरी के अवसर, कारीगर बाज़ार, कौशल विकास केंद्र और व्यावसायिक निर्देशिका।',
    descriptionUr: 'ملازمت کے مواقع، کاریگر مارکیٹ، ہنر مندی کے مراکز اور کاروباری فہرست۔',
    color: 'blue'
  },
  {
    id: 'health-emergency',
    nameEn: 'Health, Hospital & Blood Donation',
    nameHi: 'स्वास्थ्य, अस्पताल नेटवर्क एवं रक्तदान',
    nameUr: 'صحت، ہسپتال اور عطیہ خون',
    iconName: 'HeartHandshake',
    descriptionEn: 'Emergency blood donor directory, empanelled hospitals, medical aid, and helplines.',
    descriptionHi: 'आपातकालीन रक्तदाता निर्देशिका, संबद्ध अस्पताल नेटवर्क, चिकित्सा सहायता और हेल्पलाइन।',
    descriptionUr: 'ہنگامی عطیہ دہندگان، ہسپتال نیٹ ورک، طبی امداد اور ہیلپ لائنز۔',
    color: 'red'
  },
  {
    id: 'charity-transparency',
    nameEn: 'Donations & Financial Transparency',
    nameHi: 'दान, दान-रसीद एवं वित्तीय पारदर्शिता',
    nameUr: 'عطیات، زکوۃ اور مالیاتی شفافیت',
    iconName: 'ShieldCheck',
    descriptionEn: '100% audited accounts, digital receipts, Zakat & Sadaqah distribution, 80G tax exemption.',
    descriptionHi: '100% ऑडिट किए गए खाते, तत्काल डिजिटल रसीद, जकात व सदका वितरण और 80G आयकर छूट।',
    descriptionUr: '100٪ آڈٹ شدہ کھاتے، فوری ڈیجیٹل رسیدیں، زکوۃ و صدقات اور ٹیکس کی چھوٹ۔',
    color: 'emerald'
  },
  {
    id: 'governance-legal',
    nameEn: 'Governance, Constitution & Legal Aid',
    nameHi: 'शासन, संविधान एवं नि:शुल्क कानूनी सहायता',
    nameUr: 'حکمرانی، آئین اور قانونی امداد',
    iconName: 'FileText',
    descriptionEn: 'Trust constitution, executive charter, RTI process, free legal aid, and dispute resolution.',
    descriptionHi: 'ट्रस्ट संविधान, कार्यकारिणी चार्टर, आरटीआई प्रक्रिया, नि:शुल्क कानूनी सहायता व मध्यस्थता।',
    descriptionUr: 'ٹرسٹ کا آئین، انتظامیہ، آر ٹی آئی اور مفت قانونی امداد۔',
    color: 'indigo'
  },
  {
    id: 'iqra-ai-technical',
    nameEn: 'IQRA AI, Security & Website Usage',
    nameHi: 'इक्रा एआई, सुरक्षा एवं वेबसाइट उपयोग',
    nameUr: 'اقرا اے آئی، سیکیورٹی اور پورٹل کا استعمال',
    iconName: 'Sparkles',
    descriptionEn: '24/7 AI guidance assistant, data privacy (DPDP Act), mobile responsiveness, and technical support.',
    descriptionHi: '24/7 एआई मार्गदर्शन सहायक, डेटा गोपनीयता (DPDP अधिनियम), सुरक्षा और तकनीकी सहायता।',
    descriptionUr: '24/7 اے آئی اسسٹنٹ، ڈیٹا پرائیویسی اور تکنیکی رہنمائی۔',
    color: 'purple'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  // --- 1. ABOUT SOCIETY & REGISTRATION ---
  {
    id: 'faq-soc-1',
    slug: 'society-official-registration-number-date',
    categoryId: 'society-registration',
    qEn: 'What is the official society registration number and date of incorporation?',
    qHi: 'सोसाइटी का आधिकारिक पंजीकरण नंबर और निगमन की तिथि क्या है?',
    qUr: 'سوسائٹی کا سرکاری رجسٹریشن نمبر اور رجسٹریشن کی تاریخ کیا ہے؟',
    aEn: 'The Muslim Rangrez (Neelgar) Samaj Public Welfare & Educational Society is officially registered under the Societies Registration Act / Public Welfare Trust Act of India with Registration No: 02/42/01/28332/26. The official registration certificate date is 30 April 2026.',
    aHi: 'मुस्लिम रंगरेज (नीलगर) समाज लोक कल्याण एवं शैक्षणिक सोसाइटी भारत के सोसाइटी पंजीकरण अधिनियम / पब्लिक वेलफेयर ट्रस्ट एक्ट के तहत आधिकारिक रूप से पंजीकृत है। पंजीकरण संख्या: 02/42/01/28332/26 है तथा पंजीकरण प्रमाण पत्र जारी होने की तिथि 30 अप्रैल 2026 है।',
    aUr: 'مسلم رنگریز (نیل گر) سماج پبلک ویلفیئر اینڈ ایجوکیشنل سوسائٹی کا سرکاری رجسٹریشن نمبر 02/42/01/28332/26 ہے۔ رجسٹریشن کی تاریخ 30 اپریل 2026 ہے۔',
    keywords: ['registration number', 'reg no', '28332', '30 April 2026', 'society registration', 'certificate', 'legal status', 'trust act'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'society-registration',
    viewCount: 1420,
    helpfulCount: 380
  },
  {
    id: 'faq-soc-2',
    slug: 'society-primary-objectives-mission',
    categoryId: 'society-registration',
    qEn: 'What are the primary aims and objectives of the All India Rangrez Welfare Society?',
    qHi: 'अखिल भारतीय रंगरेज कल्याण सोसाइटी के प्राथमिक लक्ष्य और उद्देश्य क्या हैं?',
    qUr: 'آل انڈیا رنگریز ویلفیئر سوسائٹی کے بنیادی مقاصد کیا ہیں؟',
    aEn: 'The Society works across five core pillars: (1) Educational Empowerment (Scholarships, Coaching & Hostel Facilities), (2) Social Reform (Dowry-free Nikah & Dispute Resolution), (3) Economic Upliftment (Artisan Skill Development & Business Networking), (4) Healthcare & Emergency Aid (Blood Bank & Empanelled Hospitals), and (5) Unified Census & Digital Identity for every household.',
    aHi: 'सोसाइटी पांच मुख्य स्तंभों पर कार्य करती है: (1) शैक्षणिक सशक्तिकरण (छात्रवृत्ति, कोचिंग व हॉस्टल), (2) सामाजिक सुधार (दहेज-मुक्त निकाह व विवाद समाधान), (3) आर्थिक उन्नति (कारीगर कौशल व व्यावसायिक नेटवर्किंग), (4) स्वास्थ्य सेवा एवं आपातकालीन सहायता (रक्तदाता नेटवर्क व अस्पताल), और (5) प्रत्येक परिवार के लिए एकीकृत जनगणना व डिजिटल पहचान।',
    aUr: 'سوسائٹی کے بنیادی مقاصد تعلیم، سماجی اصلاح، اقتصادی ترقی، صحت کی دیکھ بھال اور ڈیجیٹل مردم شماری کا قیام ہیں۔',
    keywords: ['aims', 'objectives', 'mission', 'pillars', 'goals', 'welfare', 'upliftment'],
    lastUpdated: '2026-07-28',
    featured: true,
    tabLink: 'about',
    viewCount: 980,
    helpfulCount: 260
  },
  {
    id: 'faq-soc-3',
    slug: 'how-to-verify-society-registration-online',
    categoryId: 'society-registration',
    qEn: 'How can I independently verify the society registration on the state government trust portal?',
    qHi: 'मैं राज्य सरकार के ट्रस्ट पोर्टल पर सोसाइटी पंजीकरण का स्वतंत्र रूप से सत्यापन कैसे कर सकता हूँ?',
    qUr: 'میں سرکاری پورٹل پر سوسائٹی کی رجسٹریشن کی تصدیق کیسے کر سکتا ہوں؟',
    aEn: 'You can verify our active status by visiting the Society Registration section on our website or the official State Government Public Trust Portal. Enter our Registration Query Number "02/42/01/28332/26" in the search box to view our live government record, active board members, and annual compliance status.',
    aHi: 'आप हमारी वेबसाइट पर "सोसाइटी पंजीकरण" अनुभाग या आधिकारिक राज्य सरकार के पब्लिक ट्रस्ट पोर्टल पर जाकर हमारी सक्रिय स्थिति की पुष्टि कर सकते हैं। हमारी सरकारी लाइव रिकॉर्ड देखने के लिए खोज बॉक्स में हमारी पंजीकरण संख्या "02/42/01/28332/26" दर्ज करें।',
    aUr: 'آپ ہماری ویب سائٹ کے "سوسائٹی رجسٹریشن" سیکشن میں رجسٹریشن نمبر 02/42/01/28332/26 درج کر کے آن لائن تصدیق کر سکتے ہیں۔',
    keywords: ['verify registration', 'trust portal', 'online verification', 'gov portal', 'query number'],
    lastUpdated: '2026-08-01',
    tabLink: 'society-registration',
    viewCount: 750,
    helpfulCount: 195
  },

  // --- 2. COMMUNITY HISTORY & HERITAGE ---
  {
    id: 'faq-hist-1',
    slug: 'historical-origins-of-rangrez-neelgar-samaj',
    categoryId: 'history-heritage',
    qEn: 'What is the historical heritage and origin of the Rangrez (Neelgar) community in India?',
    qHi: 'भारत में रंगरेज (नीलगर) समुदाय की ऐतिहासिक विरासत और उत्पत्ति क्या है?',
    qUr: 'ہندوستان میں رنگریز (نیل گر) برادری کا تاریخی ورثہ اور ابتدا کیا ہے؟',
    aEn: 'The Rangrez (also historically known as Neelgar, Sabahi, or Master Dyers) have a glorious history spanning over 800 years in India. Master craftsmen of natural indigo extraction, royal textile dyeing, and intricate block printing, the community played an indispensable role in India’s historic textile boom across Rajasthan, Gujarat, Uttar Pradesh, Madhya Pradesh, and Bihar.',
    aHi: 'रंगरेज (जिन्हें ऐतिहासिक रूप से नीलगर, सबाही या रंग-शिल्पी भी कहा जाता है) का भारत में 800 से अधिक वर्षों का गौरवशाली इतिहास है। प्राकृतिक नील निष्कर्षण, शाही कपड़ा रंगाई और जटिल ब्लॉक प्रिंटिंग के उस्ताद कारीगरों के रूप में, समुदाय ने राजस्थान, गुजरात, उत्तर प्रदेश, मध्य प्रदेश और बिहार में भारत के वस्त्र उद्योग में एक अपरिहार्य भूमिका निभाई।',
    aUr: 'رنگریز (نیل گر) کا ہندوستان میں 800 سال سے زائد کا شاندار تاریخ ہے۔ یہ قدرتی نیل اور اینڈیگو سے شاہی کپڑوں کو رنگنے کے ماہر کاریگر رہے ہیں۔',
    keywords: ['history', 'heritage', 'neelgar', 'dye master', 'indigo', 'textile history', 'origins'],
    lastUpdated: '2026-07-20',
    featured: true,
    tabLink: 'history',
    viewCount: 1250,
    helpfulCount: 340
  },
  {
    id: 'faq-hist-2',
    slug: 'historical-mahapanchayat-tradition-and-preservation',
    categoryId: 'history-heritage',
    qEn: 'What is the tradition of the Historical Mahapanchayat and how is it preserved today?',
    qHi: 'ऐतिहासिक महापंचायत की परंपरा क्या है और आज इसे कैसे संरक्षित किया जा रहा है?',
    qUr: 'تاریخی مہاپنچایت کی روایت کیا ہے اور اسے آج کیسے برقرار رکھا جا رہا ہے؟',
    aEn: 'The Mahapanchayat is an ancient democratic council tradition where village elders, intellectuals, and religious scholars convene to enact social reforms, resolve family disputes without costly litigation, and establish welfare codes. Today, our portal digitizes these historic resolutions into an online transparent ledger.',
    aHi: 'महापंचायत एक प्राचीन लोकतांत्रिक परिषद परंपरा है जहाँ गाँव के बुजुर्ग, बुद्धिजीवी और विद्वान सामाजिक सुधार लागू करने, बिना महंगे मुकदमों के पारिवारिक विवादों को सुलझाने और कल्याणकारी संहिताएँ बनाने के लिए एकत्रित होते हैं। आज, हमारा पोर्टल इन ऐतिहासिक संकल्पों को एक पारदर्शी डिजिटल बहीखाते में बदलता है।',
    aUr: 'مہاپنچایت ایک قدیم جمہوری کونسل کی روایت ہے جہاں سماجی اصلاحات اور خاندانی تنازعات کے حل کے لیے فیصلے کیے جاتے ہیں۔',
    keywords: ['mahapanchayat history', 'tradition', 'resolutions', 'democratic council', 'village elders'],
    lastUpdated: '2026-07-15',
    tabLink: 'mahapanchayat',
    viewCount: 620,
    helpfulCount: 180
  },

  // --- 3. MAHAPANCHAYAT & SOCIAL REFORMS ---
  {
    id: 'faq-maha-1',
    slug: 'dowry-free-nikah-resolutions-guidelines',
    categoryId: 'mahapanchayat-reforms',
    qEn: 'What are the official Mahapanchayat guidelines regarding Dowry-Free Nikah and wedding expenses?',
    qHi: 'दहेज-मुक्त निकाह और विवाह खर्चों के संबंध में महापंचायत के आधिकारिक नियम क्या हैं?',
    qUr: 'جہیز سے پاک نکاح اور شادی کے اخراجات سے متعلق مہاپنچایت کے سرکاری قوانین کیا ہیں؟',
    aEn: 'The Mahapanchayat strictly forbids dowry demands, elaborate pre-wedding processions, DJ music, and wasteful feasts. Recommended guidelines include: (1) Nikah solemnization between Asr and Maghrib prayers, (2) Immediate cash payment of fixed Shariah Mehr, (3) Simple catering limited to immediate relatives, and (4) Zero acceptance of electronic or vehicular dowry gifts.',
    aHi: 'महापंचायत दहेज की मांग, भव्य डीजे संगीत और फिजूलखर्ची वाले भोज पर सख्त प्रतिबंध लगाती है। स्वीकृत दिशानिर्देशों में शामिल हैं: (1) असर और मगरिब की नमाज़ के बीच निकाह, (2) शरीअत मेहर का तुरंत नकद भुगतान, (3) केवल करीबी रिश्तेदारों तक सीमित सादा भोजन, और (4) इलेक्ट्रॉनिक/वाहन दहेज का पूर्ण बहिष्कार।',
    aUr: 'مہاپنचایت نے جہیز کی مانگ، ڈی جے میوزک اور فضول خرچی پر مکمل پابندی عائد کی ہے۔ سادہ نکاح اور شریعت کے مطابق مہر کی ادائیگی لازم ہے۔',
    keywords: ['dowry free', 'nikah guidelines', 'simple wedding', 'samuhik vivah', 'mahapanchayat resolutions'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'mahapanchayat',
    viewCount: 2100,
    helpfulCount: 610
  },
  {
    id: 'faq-maha-2',
    slug: 'fixed-qazi-honorarium-and-nikah-registration',
    categoryId: 'mahapanchayat-reforms',
    qEn: 'What is the fixed Qazi honorarium and service contribution for solemnizing Nikah?',
    qHi: 'निकाह पढ़ाने के लिए तय काजी मानदेय और सेवा अंशदान क्या है?',
    qUr: 'نکاح پڑھانے کے لیے قاضی کا طے شدہ ہدیہ اور سروس کنٹریبیوشن کیا ہے؟',
    aEn: 'To prevent extortion during marriages, the Mahapanchayat resolution fixes the official Qazi honorarium at exactly ₹2,100, plus a service contribution of ₹1,100 for Khidmat (official Nikahnama certificate recording and central database archiving). No excess demands are permitted.',
    aHi: 'विवाह के दौरान शोषण को रोकने के लिए, महापंचायत के संकल्प के अनुसार काजी का मानदेय ₹2,100 तय किया गया है, तथा खिदमत (आधिकारिक निकाहनामा प्रमाण पत्र दर्ज करने और केंद्रीय डेटाबेस आर्काइविंग) के लिए ₹1,100 का सेवा योगदान निर्धारित है। कोई अतिरिक्त मांग की अनुमति नहीं है।',
    aUr: 'نکاح پڑھانے کے لیے قاضی کا ہدیہ بالکل ₹2,100 اور مرکزی اندراج کے لیے ₹1,100 مقرر کیا گیا ہے۔',
    keywords: ['qazi honorarium', 'nikah fee', 'nikahnama', 'fixed rate', 'qazi panel'],
    lastUpdated: '2026-07-29',
    tabLink: 'mahapanchayat',
    viewCount: 1150,
    helpfulCount: 310
  },
  {
    id: 'faq-maha-3',
    slug: 'out-of-court-family-dispute-mediation-cell',
    categoryId: 'mahapanchayat-reforms',
    qEn: 'How can families seek free mediation for marital or inheritance disputes through the Mahapanchayat?',
    qHi: 'परिवार महापंचायत के माध्यम से वैवाहिक या संपत्ति विवादों के लिए नि:शुल्क मध्यस्थता कैसे प्राप्त कर सकते हैं?',
    qUr: 'خاندان مہاپنچایت کے ذریعے خاندانی اور جائیداد کے تنازعات کا مفت حل کیسے حاصل کر سکتے ہیں؟',
    aEn: 'Families can submit a confidential application via the "Raise Query & Ticket" portal or through their Tehsil President. A panel consisting of retired judges, experienced Qazis, and community elders convenes within 7 days to mediate out-of-court settlements with 94% recorded success.',
    aHi: 'परिवार "याचिका दर्ज करें" पोर्टल के माध्यम से या अपने तहसील अध्यक्ष के माध्यम से एक गोपनीय आवेदन जमा कर सकते हैं। सेवानिवृत्त जजों, अनुभवी काजियों और समाज के बुजुर्गों का एक पैनल 7 दिनों के भीतर अदालत के बाहर विवादों को सुलझाने के लिए बैठक करता है।',
    aUr: 'خاندان ہماری ویب سائٹ کے ذریعے خفیہ درخواست دے سکتے ہیں۔ ایک پینل 7 دن کے اندر عدالت سے باہر دوستانہ تصفیہ کرواتا ہے۔',
    keywords: ['mediation cell', 'dispute resolution', 'family court', 'out of court', 'marital counseling'],
    lastUpdated: '2026-07-25',
    tabLink: 'mahapanchayat',
    viewCount: 890,
    helpfulCount: 230
  },

  // --- 4. MEMBERSHIP, CENSUS & DIGITAL ID ---
  {
    id: 'faq-mem-1',
    slug: 'how-to-register-family-in-community-census',
    categoryId: 'membership-id',
    qEn: 'How can I register my household in the National Rangrez Community Census & Digital ID system?',
    qHi: 'मैं राष्ट्रीय रंगरेज समाज जनगणना और डिजिटल आईडी सिस्टम में अपने परिवार का पंजीकरण कैसे करा सकता हूँ?',
    qUr: 'میں قومی رنگریز مردم شماری اور ڈیجیٹल آئی ڈی سسٹم میں اپنے خاندان کا اندراج کیسے کروا سکتا ہوں؟',
    aEn: 'Click on the "Family Registration" or "Membership" tab on the top menu. Fill in the family head details, add family members (spouse, children, parents), upload a valid ID proof (Aadhaar or Voter ID), and submit. Upon verification within 48 hours, a unique Digital ID card with a QR code will be generated for each member.',
    aHi: 'शीर्ष मेनू पर "परिवार पंजीकरण" या "सदस्यता" टैब पर क्लिक करें। परिवार के मुखिया का विवरण भरें, सदस्यों को जोड़ें, वैध पहचान प्रमाण अपलोड करें और सबमिट करें। 48 घंटे के भीतर सत्यापन के बाद, प्रत्येक सदस्य के लिए एक क्यूआर कोड वाला डिजिटल आईडी कार्ड जेनरेट किया जाएगा।',
    aUr: 'ویب سائٹ کے "فیملی رجسٹریشن" یا "رکنیت" ٹیب پر کلک کریں۔ فارم پر کریں اور آدھار کارڈ اپ لوڈ کریں۔ 48 گھنٹوں میں کیو آر آئی ڈی کارڈ جاری ہو جائے گا۔',
    keywords: ['register family', 'census', 'digital id', 'membership card', 'qr verification', 'aadhaar'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'family-registration',
    viewCount: 2850,
    helpfulCount: 890
  },
  {
    id: 'faq-mem-2',
    slug: 'digital-id-card-verification-and-benefits',
    categoryId: 'membership-id',
    qEn: 'What are the benefits of holding a verified Rangrez Digital Identity Card?',
    qHi: 'सत्यापित रंगरेज डिजिटल पहचान पत्र रखने के क्या लाभ हैं?',
    qUr: 'تصدیق شدہ رنگریز ڈیجیٹل شناختی کارڈ رکھنے کے کیا فوائد ہیں؟',
    aEn: 'The Digital ID card grants instant access to: (1) Priority scholarship applications, (2) Medical bill concessions at empanelled hospital networks, (3) Free Matrimonial token access, (4) Voting rights in Tehsil/District committee elections, and (5) Emergency blood donor matching.',
    aHi: 'डिजिटल आईडी कार्ड निम्नलिखित लाभ प्रदान करता है: (1) प्राथमिकता छात्रवृत्ति आवेदन, (2) एम्पेनल्ड अस्पतालों में रियायत, (3) मुफ्त वैवाहिक टोकन, (4) तहसील/जिला चुनावों में मतदान का अधिकार, और (5) आपातकालीन रक्तदाता मिलान।',
    aUr: 'ڈیجیٹل آئی ڈی کارڈ کے فوائد: اسکالرشپ میں ترجیح، ہسپتالوں میں رعایت، آن لائن رشتہ پورٹل تک رسائی، اور الیکشن میں ووٹ کا حق۔',
    keywords: ['digital id card', 'benefits', 'qr code', 'voting rights', 'empanelled hospital discount'],
    lastUpdated: '2026-07-30',
    tabLink: 'membership-system',
    viewCount: 1650,
    helpfulCount: 510
  },
  {
    id: 'faq-mem-3',
    slug: 'family-tree-shajra-lineage-recording',
    categoryId: 'membership-id',
    qEn: 'How does the Family Tree (Shajra) digital lineage builder work?',
    qHi: 'फैमिली ट्री (शजरा) डिजिटल वंशावली बिल्डर कैसे काम करता है?',
    qUr: 'خاندانی شجرہ (فیملی ٹری) بلڈر کیسے کام کرتا ہے؟',
    aEn: 'The Family Tree feature allows verified heads of household to map 3 to 7 generations of ancestry. It helps preserve ancestral roots, connects distant relatives residing in different states, and aids in verified matrimonial background checks.',
    aHi: 'फैमिली ट्री सुविधा सत्यापित परिवार के मुखिया को वंश की 3 से 7 पीढ़ियों का नक्शा बनाने की अनुमति देती है। यह पैतृक जड़ों को संरक्षित करने, विभिन्न राज्यों में रहने वाले दूर के रिश्तेदारों को जोड़ने और वैवाहिक पृष्ठभूमि की जांच में मदद करती है।',
    aUr: 'فیملی ٹری کا فیچر خاندان کی 3 سے 7 نسلوں کے شجرہ کو آن لائن محفوظ کرنے اور رشتہ داریوں کو جوڑنے کا موقع فراہم کرتا ہے۔',
    keywords: ['family tree', 'shajra', 'lineage', 'ancestors', 'genealogy', 'matrimonial check'],
    lastUpdated: '2026-07-22',
    tabLink: 'family-registration',
    viewCount: 1100,
    helpfulCount: 290
  },

  // --- 5. EDUCATION & SCHOLARSHIPS ---
  {
    id: 'faq-edu-1',
    slug: 'higher-education-merit-scholarship-eligibility',
    categoryId: 'education-scholarships',
    qEn: 'What is the eligibility criteria for the Higher Education Merit Scholarship?',
    qHi: 'उच्च शिक्षा मेधावी छात्रवृत्ति के लिए पात्रता मानदंड क्या है?',
    qUr: 'اعلیٰ تعلیم میرट اسکالرشپ کے لیے اہلیت کا معیار کیا ہے؟',
    aEn: 'Students belonging to the Rangrez / Neelgar community who have scored 75% or above in class 10th/12th or are pursuing professional degrees (MBBS, B.Tech, CA, Law, UPSC coaching) with an annual family income under ₹4.5 Lakhs are eligible for full or partial tuition grants.',
    aHi: 'रंगरेज / नीलगर समाज के छात्र जिन्होंने 10वीं/12वीं कक्षा में 75% या उससे अधिक अंक प्राप्त किए हैं या पेशेवर डिग्री (MBBS, B.Tech, CA, Law, UPSC कोचिंग) कर रहे हैं और जिनकी वार्षिक पारिवारिक आय ₹4.5 लाख से कम है, वे पूर्ण या आंशिक छात्रवृत्ति के पात्र हैं।',
    aUr: 'رنگریز برادری کے وہ طلباء جنہوں نے 10ویں/12ویں میں 75% یا اس سے زیادہ نمبر حاصل کیے ہیں اور خاندانی آمدنی 4.5 لاکھ سے کم ہے، وہ اہل ہیں۔',
    keywords: ['scholarship', 'eligibility', 'merit scholarship', 'higher education', '75 percent', 'income limit'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'scholarships',
    viewCount: 2400,
    helpfulCount: 720
  },
  {
    id: 'faq-edu-2',
    slug: 'free-upsc-neet-jee-coaching-foundation-program',
    categoryId: 'education-scholarships',
    qEn: 'Does the society provide free coaching or residential hostel facilities for UPSC, NEET, or JEE aspirants?',
    qHi: 'क्या सोसाइटी संघ लोक सेवा आयोग (UPSC), NEET या JEE के अभ्यर्थियों के लिए मुफ्त कोचिंग या हॉस्टल सुविधा प्रदान करती है?',
    qUr: 'کیا سوسائٹی یو پی ایس سی، نیٹ یا جے ای ای کے امیدواروں کے لیے مفت کوچنگ یا ہاسٹل فراہم کرتی ہے؟',
    aEn: 'Yes. Through our "Iqra IAS & Medical Coaching Bureau", we sponsor 50 high-performing students annually with full residential coaching grants at partner academies in Delhi, Kota, Lucknow, and Indore. Selection is based on our National Talent Entrance Exam conducted every May.',
    aHi: 'हाँ। हमारे "इक्रा आईएएस एंड मेडिकल कोचिंग ब्यूरो" के माध्यम से, हम दिल्ली, कोटा, लखनऊ और इंदौर में भागीदार अकादमियों में पूर्ण आवासीय कोचिंग अनुदान के साथ प्रतिवर्ष 50 उत्कृष्ट छात्रों को प्रायोजित करते हैं। चयन प्रति वर्ष मई में आयोजित राष्ट्रीय प्रतिभा प्रवेश परीक्षा पर आधारित होता है।',
    aUr: 'جی ہاں، "اقرا آئی اے ایس اور میڈیکل بیورو" کے ذریعے سالانہ 50 ہونہار طلباء کو دہلی، کوٹہ اور لکھنؤ میں مفت کوچنگ دی جاتی ہے۔',
    keywords: ['upsc coaching', 'neet jee', 'free hostel', 'talent exam', 'iqra IAS', 'coaching grant'],
    lastUpdated: '2026-07-28',
    featured: true,
    tabLink: 'education-hub',
    viewCount: 1890,
    helpfulCount: 540
  },
  {
    id: 'faq-edu-3',
    slug: 'orphan-and-single-mother-child-education-grant',
    categoryId: 'education-scholarships',
    qEn: 'How are orphan students or children of single mothers supported by the Education Cell?',
    qHi: 'शिक्षा सेल द्वारा अनाथ छात्रों या एकल माताओं के बच्चों को कैसे सहायता प्रदान की जाती है?',
    qUr: 'یتیم بچوں اور بیوہ خواتین کے بچوں کی تعلیم کے لیے کیا سہولت ہے؟',
    aEn: '100% of school tuition fees, books, uniforms, and hostel costs for orphan children (Yateem) are directly borne by the Central Welfare Fund. Applications can be submitted directly by guardians with zero income restrictions.',
    aHi: 'अनाथ बच्चों (यतीम) के स्कूल की 100% फीस, किताबें, वर्दी और हॉस्टल का खर्च सीधे केंद्रीय कल्याण कोष द्वारा वहन किया जाता है। अभिभावक बिना किसी आय सीमा के सीधे आवेदन जमा कर सकते हैं।',
    aUr: 'یتیم بچوں کی 100٪ ٹیوشن فیس، کتابیں اور ہاسٹل کے اخراجات سوسائٹی کے فنڈ سے برداشت کیے جاتے ہیں۔',
    keywords: ['orphan education', 'single mother grant', 'yateem support', '100 percent fee waiver', 'school books'],
    lastUpdated: '2026-07-25',
    tabLink: 'scholarships',
    viewCount: 940,
    helpfulCount: 280
  },

  // --- 6. GOVERNMENT SCHEMES & WELFARE ---
  {
    id: 'faq-gov-1',
    slug: 'top-minority-government-schemes-guide',
    categoryId: 'govt-schemes-welfare',
    qEn: 'Which government minority welfare schemes can I apply for through this portal?',
    qHi: 'मैं इस पोर्टल के माध्यम से किन प्रमुख सरकारी अल्पसंख्यक कल्याण योजनाओं के लिए आवेदन कर सकता हूँ?',
    qUr: 'ہم اس پورٹل کے ذریعے کن سرکاری اقلیتی اسکیموں کے لیے درخواست دے سکتے ہیں؟',
    aEn: 'Our Government Schemes Desk assists community members with 20+ central and state schemes including: (1) PM-Vikas (Artisan Skill & Loan), (2) Pre-Matric & Post-Matric Minority Scholarships, (3) Maulana Azad National Fellowship, (4) PM Mudra Business Loan, (5) Ayushman Bharat PM-JAY Card, and (6) PM Awas Yojana housing subsidies.',
    aHi: 'हमारा सरकारी योजना डेस्क 20 से अधिक केंद्रीय और राज्य योजनाओं में सहायता करता है: (1) पीएम-विकास (कारीगर ऋण), (2) प्री/पोस्ट-मैट्रिक अल्पसंख्यक छात्रवृत्ति, (3) मौलाना आजाद नेशनल फेलोशिप, (4) पीएम मुद्रा लोन, (5) आयुष्मान भारत कार्ड, और (6) पीएम आवास योजना सब्सिडी।',
    aUr: 'ہماری ڈیسک پی ایم وکاس، اقلیتی اسکالرشپ، مولانا آزاد فیلوشپ، مدرا لون اور ایوشمان بھارت کارڈز میں مدد کرتی ہے۔',
    keywords: ['government schemes', 'pm vikas', 'mudra loan', 'minority scholarship', 'ayushman bharat', 'pm awas'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'government-schemes',
    viewCount: 3100,
    helpfulCount: 940
  },
  {
    id: 'faq-gov-2',
    slug: 'how-to-get-obc-minority-caste-certificate',
    categoryId: 'govt-schemes-welfare',
    qEn: 'How can I get assistance for issuing an OBC / Central Minority Caste Certificate for Rangrez/Neelgar?',
    qHi: 'रंगरेज/नीलगर के लिए ओबीसी/केंद्रीय अल्पसंख्यक जाति प्रमाण पत्र जारी करवाने में कैसे सहायता मिलेगी?',
    qUr: 'رنگریز / نیل گر کے لیے او بی سی / اقلیتی ذات کا سرٹیفکیٹ بنوانے میں کیسے مدد ملے گی؟',
    aEn: 'Rangrez / Neelgar is recognized under the Central OBC list as well as state Backward Classes lists across MP, UP, Rajasthan, Bihar, Gujarat, Maharashtra, and Delhi. Our Legal Cell provides pre-verified affidavits and family gazette records to smooth application processing at Tehsil offices.',
    aHi: 'रंगरेज/नीलगर को मध्य प्रदेश, उत्तर प्रदेश, राजस्थान, बिहार, गुजरात, महाराष्ट्र और दिल्ली में केंद्रीय ओबीसी सूची और राज्य पिछड़ा वर्ग सूची के तहत मान्यता प्राप्त है। हमारा कानूनी सेल तहसील कार्यालयों में प्रक्रिया को आसान बनाने के लिए पूर्व-सत्यापित हलफनामे प्रदान करता है।',
    aUr: 'رنگریز کو مرکزی OBC فہرست اور ریاستی فہرستوں میں تسلیم کیا گیا ہے۔ ہماری ٹیم حلف نامے کی تیاری میں مدد کرتی ہے۔',
    keywords: ['obc certificate', 'caste certificate', 'neelgar obc', 'minority certificate', 'tehsil legal help'],
    lastUpdated: '2026-07-27',
    tabLink: 'government-schemes',
    viewCount: 1420,
    helpfulCount: 410
  },

  // --- 7. EMPLOYMENT & ARTISAN SKILL PORTAL ---
  {
    id: 'faq-emp-1',
    slug: 'artisan-marketplace-and-textile-skill-development',
    categoryId: 'employment-skills',
    qEn: 'How does the Artisan Marketplace support traditional Rangrez dyer & textile businesses?',
    qHi: 'कारीगर बाज़ार पारंपरिक रंगरेज रंगाई और कपड़ा व्यवसाय का समर्थन कैसे करता है?',
    qUr: 'آرٹیزن مارکیٹ روایتی کپڑا رنگنے والے اور ٹیکسٹائل کے کاروبار میں کیسے مدد کرتی ہے؟',
    aEn: 'The Artisan Marketplace connects traditional dyers, block printers, tailors, and textile entrepreneurs directly with bulk buyers, fashion designers, and exporters without middlemen. Artisans get free e-commerce listing, GI tag guidance, and zero-commission order management.',
    aHi: 'कारीगर बाज़ार पारंपरिक रंगरेज़ों, ब्लॉक प्रिंटर, दर्जी और कपड़ा उद्यमियों को बिना बिचौलियों के सीधे थोक खरीदारों, फैशन डिजाइनरों और निर्यातकों से जोड़ता है। कारीगरों को मुफ्त ई-कॉमर्स लिस्टिंग और शून्य-कमीशन ऑर्डर प्रबंधन मिलता है।',
    aUr: 'یہ پورٹل مقامی کاریگروں اور کپڑا بننے والوں کو بغیر کسی کمیشن کے براہ راست تاجروں اور خریداروں سے جوڑتا ہے۔',
    keywords: ['artisan marketplace', 'textile business', 'block printing', 'indigo dye', 'zero commission', 'e-commerce'],
    lastUpdated: '2026-07-29',
    featured: true,
    tabLink: 'employment-skills',
    viewCount: 1120,
    helpfulCount: 350
  },
  {
    id: 'faq-emp-2',
    slug: 'community-job-portal-registration-for-youth',
    categoryId: 'employment-skills',
    qEn: 'How can educated youth register for private and government job openings on the Employment Portal?',
    qHi: 'शिक्षित युवा रोजगार पोर्टल पर निजी और सरकारी नौकरी के अवसरों के लिए पंजीकरण कैसे कर सकते हैं?',
    qUr: 'تعلیم یافتہ نوجوان جاب پورٹل پر ملازمتوں کے لیے کیسے رجسٹریشن کر سکتے ہیں؟',
    aEn: 'Job seekers can visit the "Careers & Employment Portal", upload their updated resume, select their qualification (ITI, Diploma, B.Tech, Graduate, CA, MBA), and receive instant notifications for hiring drives organized by community business mentors.',
    aHi: 'नौकरी चाहने वाले "करियर एवं रोजगार पोर्टल" पर जा सकते हैं, अपना रिज्यूमे अपलोड कर सकते हैं, अपनी योग्यता चुन सकते हैं, और सामुदायिक व्यावसायिक मेंटर्स द्वारा आयोजित भर्ती अभियानों के लिए त्वरित सूचनाएं प्राप्त कर सकते हैं।',
    aUr: 'نوجوان اپنا سی وی جاب پورٹل پر اپ لوڈ کر سکتے ہیں اور کمیونٹی بزنس رہنماؤں کے ذریعے آن کیمپس نوکریاں حاصل کر سکتے ہیں۔',
    keywords: ['job portal', 'youth employment', 'resume upload', 'hiring drives', 'private jobs', 'skills training'],
    lastUpdated: '2026-07-24',
    tabLink: 'career-opportunities',
    viewCount: 1530,
    helpfulCount: 420
  },

  // --- 8. HEALTH, HOSPITAL & BLOOD DONATION ---
  {
    id: 'faq-hea-1',
    slug: 'emergency-blood-donor-network-how-to-request',
    categoryId: 'health-emergency',
    qEn: 'How do I request emergency blood donors in my city or district during medical emergencies?',
    qHi: 'चिकित्सा आपात स्थिति के दौरान मैं अपने शहर या जिले में आपातकालीन रक्तदाताओं का अनुरोध कैसे करूं?',
    qUr: 'طبی ہنگامی صورت حال میں ہم اپنے شہر میں خون عطیہ کرنے والوں سے کیسے رابطہ کریں؟',
    aEn: 'Navigate to the "Blood Bank & Donors" tab or click "Emergency Blood Request" on the top header. Select your city and required blood group (O+, A+, B+, AB-, O-). You will see verified community donors with direct "Call Now" emergency dial buttons.',
    aHi: '"रक्त बैंक और दाता" टैब पर जाएं या शीर्ष हेडर पर "आपातकालीन रक्त अनुरोध" पर क्लिक करें। अपने शहर और आवश्यक रक्त समूह चुनें। आपको सीधे "कॉल नाउ" आपातकालीन डायल बटन के साथ सत्यापित सामुदायिक दाता दिखाई देंगे।',
    aUr: 'بلڈ بینک ڈائریکٹری پر جائیں، اپنا شہر اور بلڈ گروپ منتخب کریں۔ آپ کو فوراً عطیہ دہندگان کے فون نمبر مل جائیں گے۔',
    keywords: ['blood donor', 'emergency blood', 'blood bank', 'call donor', 'rare blood group', 'platelets'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'welfare-blood-donors',
    viewCount: 3420,
    helpfulCount: 1080
  },
  {
    id: 'faq-hea-2',
    slug: 'empanelled-hospitals-discount-and-cashless-aid',
    categoryId: 'health-emergency',
    qEn: 'How can community members get medical concessions at empanelled hospital networks?',
    qHi: 'समुदाय के सदस्य संबद्ध अस्पताल नेटवर्क में चिकित्सा रियायत कैसे प्राप्त कर सकते हैं?',
    qUr: 'منسلک ہسپتالوں میں برادری کے لوگوں کو کس طرح رعایت ملتی ہے؟',
    aEn: 'Show your verified Rangrez Digital ID Card at the administrative desk of any of our 120+ Empanelled Multispecialty Hospitals across India to receive 15% to 30% discounts on diagnostics, ICU room charges, and surgery packages.',
    aHi: 'निदान, आईसीयू कमरे के शुल्क और सर्जरी पैकेजों पर 15% से 30% की छूट प्राप्त करने के लिए भारत भर में हमारे 120+ एम्पेनल्ड मल्टीस्पेशलिटी अस्पतालों में से किसी के भी प्रशासनिक डेस्क पर अपना सत्यापित रंगरेज डिजिटल आईडी कार्ड दिखाएं।',
    aUr: 'اپنا کیو آر ڈیجیٹل آئی ڈی کارڈ دکھا کر 120 سے زائد منسلک ہسپتالوں میں 15٪ سے 30٪ تک کی رعایت حاصل کریں۔',
    keywords: ['empanelled hospitals', 'medical discount', 'hospital network', 'digital id discount', 'surgery concession'],
    lastUpdated: '2026-07-26',
    tabLink: 'welfare-hospital',
    viewCount: 1780,
    helpfulCount: 520
  },

  // --- 9. DONATIONS & FINANCIAL TRANSPARENCY ---
  {
    id: 'faq-don-1',
    slug: 'online-donation-receipt-and-tax-exemption-80g',
    categoryId: 'charity-transparency',
    qEn: 'Are online donations secure, audited, and eligible for instant digital receipts?',
    qHi: 'क्या ऑनलाइन दान सुरक्षित, ऑडिट किए गए और त्वरित डिजिटल रसीदों के लिए पात्र हैं?',
    qUr: 'کیا آن لائن عطیات محفوظ اور فوری ڈیجیٹل رسید کے اہل ہیں؟',
    aEn: 'Donation gateway is currently under development and will be activated after verification. Online donation facilities will be available after the official launch of the portal.',
    aHi: 'हाँ। योगदान किया गया प्रत्येक रुपया सीधे केंद्रीय ट्रस्ट बैंक खाते (सोसाइटी पंजीकरण संख्या 02/42/01/28332/26) में पहुंचता है। एक विशिष्ट लेनदेन आईडी और क्यूआर कोड के साथ एक स्वचालित डिजिटल रसीद तुरंत ईमेल की जाती है।',
    aUr: 'جی ہاں، ہر عطیہ کی فوری ڈیجیٹل رسید بنتی ہے اور سوسائٹی کے تمام اکاؤنٹس آڈٹ شدہ ہیں۔',
    keywords: ['donation receipt', 'online donation', 'zakat', 'sadaqah', 'audited account', '80g tax exemption'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'donate',
    viewCount: 2150,
    helpfulCount: 680
  },
  {
    id: 'faq-don-2',
    slug: 'zakat-and-sadaqah-shariah-compliant-distribution',
    categoryId: 'charity-transparency',
    qEn: 'How does the Central Trust ensure 100% Shariah compliance for Zakat distribution?',
    qHi: 'केंद्रीय ट्रस्ट जकात वितरण के लिए 100% शरीअत अनुपालन कैसे सुनिश्चित करता है?',
    qUr: 'مرکزی ٹرسٹ زکوۃ کی تقسیم کے لیے شرعی ضوابط کو کیسے یقینی بناتا ہے؟',
    aEn: 'Zakat funds are strictly segregated and managed under a Shariah Audit Board comprising respected Ulema and Qazis. 100% of Zakat is directly disbursed to eligible Mustahiq beneficiaries (orphans, destitute widows, emergency medical surgeries, and needy students). zero administrative overheads are charged on Zakat.',
    aHi: 'जकात निधियों को उलेमाओं और काजियों के शरीअत ऑडिट बोर्ड द्वारा प्रबंधित एक समर्पित खाते में अलग रखा जाता है। जकात का 100% हिस्सा सीधे पात्र मुस्तहिक लाभार्थियों (अनाथों, बेसहारा विधवाओं, आपातकालीन चिकित्सा सर्जरी और जरूरतमंद छात्रों) को दिया जाता है।',
    aUr: 'زکوۃ کا فنڈ الگ رکھا جاتا ہے اور علماء کی نگرانی میں 100٪ مستحقین (یتیموں، بیواؤں اور نادار طلباء) میں تقسیم کیا جاتا ہے۔',
    keywords: ['zakat distribution', 'shariah compliant', 'mustahiq', 'sadaqah', 'no admin fee on zakat'],
    lastUpdated: '2026-07-29',
    tabLink: 'donate',
    viewCount: 1620,
    helpfulCount: 490
  },

  // --- 10. GOVERNANCE, CONSTITUTION & LEGAL AID ---
  {
    id: 'faq-gov-law-1',
    slug: 'trust-constitution-and-executive-charter',
    categoryId: 'governance-legal',
    qEn: 'Where can I read or download the official Society Constitution and Executive Charter?',
    qHi: 'मैं आधिकारिक सोसाइटी संविधान और कार्यकारिणी चार्टर कहां पढ़ या डाउनलोड कर सकता हूँ?',
    qUr: 'میں سوسائٹی کا آئین اور منشور کہاں دیکھ سکتا ہوں؟',
    aEn: 'You can read the complete Constitution under the "Trust Constitution" or "Executive Charter" section on our main navigation. It outlines democratic election protocols, 3-tier committee structures, financial audit rules, and code of conduct for office bearers.',
    aHi: 'आप हमारे मुख्य नेविगेशन पर "ट्रस्ट संविधान" या "कार्यकारिणी चार्टर" अनुभाग के तहत पूरा संविधान पढ़ सकते हैं। यह लोकतांत्रिक चुनाव प्रोटोकॉल, 3-स्तरीय समिति संरचनाओं और वित्तीय ऑडिट नियमों की रूपरेखा देता है।',
    aUr: 'آپ ویب سائٹ کے "ٹرسٹ آئین" ٹیب پر جا کر سوسائٹی کا مکمل آئین آن لائن پڑھ سکتے ہیں اور پی ڈی ایف ڈاؤن لوڈ کر سکتے ہیں۔',
    keywords: ['trust constitution', 'executive charter', 'rules regulations', 'bylaws', 'election protocol'],
    lastUpdated: '2026-07-21',
    tabLink: 'legal-constitution',
    viewCount: 880,
    helpfulCount: 240
  },
  {
    id: 'faq-gov-law-2',
    slug: 'free-legal-aid-and-rti-assistance-cell',
    categoryId: 'governance-legal',
    qEn: 'Does the Legal Cell provide free advocacy assistance for property or RTI matters?',
    qHi: 'क्या कानूनी सेल संपत्ति या आरटीआई मामलों के लिए मुफ्त वकालत सहायता प्रदान करता है?',
    qUr: 'کیا لیگل سیل جائیداد یا آر ٹی آئی کے معاملات کے لیے مفت قانونی مدد فراہم کرتا ہے؟',
    aEn: 'Yes. Our panel of senior High Court advocates provides pro-bono (free) legal guidance, draft templates for Right to Information (RTI) queries, and document verification for land or commercial property deeds.',
    aHi: 'हाँ। उच्च न्यायालय के वरिष्ठ अधिवक्ताओं का हमारा पैनल मुफ्त कानूनी मार्गदर्शन, सूचना का अधिकार (RTI) के लिए ड्राफ्ट और संपत्ति विलेखों के लिए दस्तावेज सत्यापन प्रदान करता है।',
    aUr: 'جی ہاں، ہمارے وکلاء کا پینل مفت قانونی مشورہ اور آر ٹی آئی (RTI) کی درخواستیں تیار کرنے میں مدد فراہم کرتا ہے۔',
    keywords: ['free legal aid', 'rti help', 'advocate panel', 'property dispute', 'pro bono legal'],
    lastUpdated: '2026-07-28',
    tabLink: 'legal-awareness',
    viewCount: 1040,
    helpfulCount: 310
  },

  // --- 11. IQRA AI, SECURITY & WEBSITE USAGE ---
  {
    id: 'faq-ai-1',
    slug: 'how-iqra-ai-assistant-helps-visitors',
    categoryId: 'iqra-ai-technical',
    qEn: 'What can the IQRA AI Assistant do to help me navigate the portal?',
    qHi: 'पोर्टल नेविगेट करने में मेरी मदद के लिए इक्रा एआई सहायक क्या कर सकता है?',
    qUr: 'اقرا اے آئی اسسٹنٹ پورٹل کا استعمال کرنے میں میری کیا مدد کر سکتا ہے؟',
    aEn: 'IQRA AI is our 24/7 intelligent guide. It can: (1) Instantly answer queries about society rules and scholarships, (2) Help search nearest blood donors or schools, (3) Guide form submissions in Hindi, English, or Urdu, and (4) Analyze uploaded document PDFs for scheme eligibility.',
    aHi: 'इक्रा एआई हमारा 24/7 बुद्धिमान सहायक है। यह: (1) नियमों और छात्रवृत्ति के बारे में प्रश्नों का तुरंत उत्तर देता है, (2) निकटतम रक्तदाताओं या स्कूलों को खोजने में मदद करता है, (3) हिंदी, अंग्रेजी या उर्दू में फॉर्म जमा करने में मार्गदर्शन करता है, और (4) योजना पात्रता के लिए अपलोड किए गए दस्तावेजों का विश्लेषण करता है।',
    aUr: 'اقرا اے آئی 24 گھنٹے دستیاب اسسٹنٹ ہے جو اسکالرشپس، بلڈ ڈونرز اور سوسائٹی کے قوانین کے بارے میں فوری معلومات فراہم کرتا ہے۔',
    keywords: ['iqra ai', 'ai assistant', 'rag search', 'document analysis', '24x7 help', 'voice search'],
    lastUpdated: '2026-08-01',
    featured: true,
    tabLink: 'iqra-ai',
    viewCount: 3890,
    helpfulCount: 1240
  },
  {
    id: 'faq-ai-2',
    slug: 'user-data-privacy-security-dpdp-act',
    categoryId: 'iqra-ai-technical',
    qEn: 'Is my personal and family census data secure on this platform?',
    qHi: 'क्या मेरा व्यक्तिगत और पारिवारिक जनगणना डेटा इस प्लेटफॉर्म पर सुरक्षित है?',
    qUr: 'کیا میرا ذاتی اور خاندانی ڈیٹا اس پلیٹ فارم پر محفوظ ہے؟',
    aEn: 'Absolute security is guaranteed. All household census data and phone numbers are encrypted with bank-grade AES-256 standards in accordance with India’s Digital Personal Data Protection (DPDP) Act. Personal numbers are never shared publicly or sold to third parties.',
    aHi: 'पूर्ण सुरक्षा की गारंटी है। भारत के डिजिटल पर्सनल डेटा प्रोटेक्शन (DPDP) अधिनियम के अनुसार सभी पारिवारिक जनगणना डेटा और फोन नंबर बैंक-ग्रेड AES-256 मानकों के साथ एन्क्रिप्टेड हैं। व्यक्तिगत नंबर कभी भी सार्वजनिक रूप से साझा नहीं किए जाते हैं।',
    aUr: 'آپ کا تمام ڈیٹا بنک گریڈ اینکرپشن (AES-256) کے ساتھ محفوظ ہے اور کسی تیسرے فریق کو فراہم نہیں کیا جاتا۔',
    keywords: ['data privacy', 'security', 'dpdp act', 'aes 256 encryption', 'safe data', 'confidential'],
    lastUpdated: '2026-07-31',
    tabLink: 'about',
    viewCount: 1450,
    helpfulCount: 460
  }
];

// Helper to filter FAQs by query & category
export function filterFAQs(
  faqs: FAQItem[],
  query: string,
  categoryId: string = 'all',
  lang: Language = 'hi'
): FAQItem[] {
  const cleanQuery = query.trim().toLowerCase();

  return faqs.filter((faq) => {
    // 1. Category check
    const matchesCat = categoryId === 'all' || faq.categoryId === categoryId;
    if (!matchesCat) return false;

    if (!cleanQuery) return true;

    // 2. Multilingual Search Matching
    const qMatchEn = faq.qEn.toLowerCase().includes(cleanQuery);
    const qMatchHi = faq.qHi.toLowerCase().includes(cleanQuery);
    const qMatchUr = faq.qUr.toLowerCase().includes(cleanQuery);

    const aMatchEn = faq.aEn.toLowerCase().includes(cleanQuery);
    const aMatchHi = faq.aHi.toLowerCase().includes(cleanQuery);
    const aMatchUr = faq.aUr.toLowerCase().includes(cleanQuery);

    const keywordMatch = faq.keywords.some((kw) => kw.toLowerCase().includes(cleanQuery));

    return qMatchEn || qMatchHi || qMatchUr || aMatchEn || aMatchHi || aMatchUr || keywordMatch;
  });
}

// Generate FAQPage JSON-LD Structured Data Schema for SEO
export function generateFAQSchemaJson(faqs: FAQItem[], lang: Language = 'hi') {
  const mainEntities = faqs.map((f) => {
    const question = lang === 'en' ? f.qEn : lang === 'ur' ? f.qUr : f.qHi;
    const answer = lang === 'en' ? f.aEn : lang === 'ur' ? f.aUr : f.aHi;

    return {
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    };
  });

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntities
  });
}
