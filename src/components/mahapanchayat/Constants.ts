import React from 'react';
import { 
  Target, Vote, BarChart3, ScrollText, History, 
  TrendingUp, ShieldCheck, Users, UserPlus, Bell, Layout,
  RefreshCw, Zap, CheckSquare, Sparkles
} from 'lucide-react';
import { Pillar, Tab } from './types';

export const PILLARS: Pillar[] = [
  {
    num: '01',
    icon: React.createElement(RefreshCw, { className: "h-6 w-6 text-emerald-600" }),
    titleEn: 'Replace Manual Door-to-Door Surveys',
    titleHi: 'घर-घर मैनुअल सर्वे की मुक्ति',
    titleUr: 'دستی گھر گھر سروے کا خاتمہ',
    descEn: 'Eliminates physical paper sheets, cumbersome field registers, and missing family records. Every household connects instantly via digital verification.',
    descHi: 'कागजी शीटों, भारी फील्ड रजिस्टरों और छूटे हुए परिवारों की समस्या खत्म। हर घर डिजिटल सत्यापन के माध्यम से तुरंत जुड़ता है।',
    descUr: 'کاغذی شیٹوں، بھاری فیلڈ رجسٹروں اور چھوٹے ہوئے خاندانوں کا مسئلہ ختم۔ ہر گھر ڈیجیٹل تصدیق کے ذریعے فوراً جڑتا ہے۔',
    badge: 'Zero Paper Work'
  },
  {
    num: '02',
    icon: React.createElement(Zap, { className: "h-6 w-6 text-yellow-600" }),
    titleEn: 'Save Time, Money & Volunteer Effort',
    titleHi: 'समय, धन व श्रम की भारी बचत',
    titleUr: 'وقت، پیسے اور محنت کی بچت',
    descEn: 'Saves crores of rupees in printing, travel stipends, and manual compilation. Redirects thousands of volunteer hours toward youth education & healthcare.',
    descHi: 'छपाई, यात्रा खर्च और गिनती में करोड़ों रुपये की बचत। हजारों स्वयंसेवक घंटों को युवाओं की शिक्षा और स्वास्थ्य सेवा में लगाया जाता है।',
    descUr: 'چھپائی، سفری اخراجات اور گنتی میں کروڑوں روپے کی بچت۔ ہزاروں رضاکار گھنٹوں کو نوجوانوں کی تعلیم اور صحت میں لگایا جاتا ہے۔',
    badge: '₹45+ Lakhs Saved/Yr'
  },
  {
    num: '03',
    icon: React.createElement(Users, { className: "h-6 w-6 text-blue-600" }),
    titleEn: 'Increase Public Participation',
    titleHi: 'जनभागीदारी में 10 गुना वृद्धि',
    titleUr: 'عوامی شمولیت میں 10 گنا اضافہ',
    descEn: 'Achieves 10x higher turnout by empowering women, senior citizens, rural artisans, and NRIs to vote securely from their phones in 30 seconds.',
    descHi: 'महिलाओं, वरिष्ठ नागरिकों, ग्रामीण कारीगरों और अनिवासी भारतीयों को अपने फोन से 30 सेकंड में मतदान की सुविधा देकर 10 गुना अधिक भागीदारी।',
    descUr: 'خواتین، سینئر شہریوں، دیہی کاریگروں اور تارکین وطن کو اپنے فون سے 30 سیکنڈ میں ووٹ دینے کی سہولت دے کر 10 گنا زیادہ شمولیت۔',
    badge: '10x Turnout Growth'
  },
  {
    num: '04',
    icon: React.createElement(ShieldCheck, { className: "h-6 w-6 text-purple-600" }),
    titleEn: 'Ensure 100% Transparency & Trust',
    titleHi: '100% पारदर्शिता व शून्य फ्रॉड',
    titleUr: '100% شفافیت اور زیرو فراڈ',
    descEn: 'Powered by SHA-256 cryptographic ballot hashing and Membership ID verification. Prevents ballot box stuffing, duplicate voting, or server manipulation.',
    descHi: 'SHA-256 डिजिटल बैलेट हैशिंग और सदस्यता ID सत्यापन से लैस। फर्जी मतदान, दोहरी वोटिंग या सर्वर हेरफेर को रोकता है।',
    descUr: 'SHA-256 کرپٹوگرافک بیلٹ ہیشنگ اور رکنیت ID کی تصدیق سے چلتا ہے۔ بیلٹ باکس بھرنے، دوہرے ووٹنگ، یا سرور کے ہیر پھیر کو روکتا ہے۔',
    badge: 'SHA-256 Verified'
  },
  {
    num: '05',
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-pink-600" }),
    titleEn: 'Data-Driven Scientific Decisions',
    titleHi: 'डेटा-आधारित वैज्ञानिक निर्णय',
    titleUr: 'کمیونٹی کے حقائق پر مبنی فیصلے',
    descEn: 'AI sentiment analytics and district-wise consensus heatmaps provide Mahapanchayat leaders with instant, mathematically verified demographic insights.',
    descHi: 'AI जनमत विश्लेषण और जिला-वार सहमति हीटमैप नेतृत्व को तुरंत गणितीय रूप से सत्यापित जनसांख्यिकीय अंतर्दृष्टि प्रदान करते हैं।',
    descUr: 'اے آئی جذبات کے تجزیات اور ضلعی لحاظ سے اتفاق رائے کے ہیٹ میپس مہاپنچایت کے رہنماؤں کو فوری، ریاضیاتی طور پر تصدیق شدہ آبادیاتی بصیرت فراہم کرتے ہیں۔',
    badge: 'AI Sentiment Analysis'
  },
  {
    num: '06',
    icon: React.createElement(History, { className: "h-6 w-6 text-indigo-600" }),
    titleEn: 'Permanent Historical Archives',
    titleHi: 'स्थाई ऐतिहासिक अभिलेखागार',
    titleUr: 'مستقل تاریخی آرکائیوز',
    descEn: 'Preserves every survey, resolution, and voting record for future generations. No more lost paper registers or forgotten community decisions.',
    descHi: 'आने वाली पीढ़ियों के लिए हर सर्वे, प्रस्ताव और मतदान रिकॉर्ड सुरक्षित। अब कोई कागजी रजिस्टर नहीं खोएगा और न ही कोई सामाजिक निर्णय भुलाया जाएगा।',
    descUr: 'آنے والی نسلوں کے لیے ہر سروے، قرارداد اور ووٹنگ کا ریکارڈ محفوظ۔ اب کوئی کاغذی رجسٹر نہیں کھوئے گا اور نہ ہی برادری کا کوئی فیصلہ بھلایا جائے گا۔',
    badge: 'Immutable Records'
  },
  {
    num: '07',
    icon: React.createElement(CheckSquare, { className: "h-6 w-6 text-teal-600" }),
    titleEn: 'Efficient Implementation Tracking',
    titleHi: 'कुशल क्रियान्वयन ट्रैकिंग',
    titleUr: 'موثر عمل درآمد کی ٹریکنگ',
    descEn: 'Digital dashboards monitor the ground-level implementation of every resolution, ensuring that social reforms are not just passed but practiced.',
    descHi: 'डिजिटल डैशबोर्ड हर प्रस्ताव के जमीनी स्तर पर कार्यान्वयन की निगरानी करते हैं, यह सुनिश्चित करते हुए कि सामाजिक सुधार केवल पारित न हों बल्कि लागू भी हों।',
    descUr: 'ڈیجیٹل ڈیش بورڈز ہر قرارداد کے نچلی سطح پر عمل درآمد کی نگرانی کرتے ہیں، اس بات کو یقینی بناتی ہوئی کہ سماجی اصلاحات صرف منظور نہ ہوں بلکہ ان پر عمل بھی ہو۔',
    badge: 'Action Oriented'
  },
  {
    num: '08',
    icon: React.createElement(Sparkles, { className: "h-6 w-6 text-orange-600" }),
    titleEn: 'Youth & Women Empowerment',
    titleHi: 'युवा एवं महिला सशक्तिकरण',
    titleUr: 'نوجوانوں اور خواتین کو بااختیار بنانا',
    descEn: 'Provides a safe, accessible, and direct platform for the youth and women to shape community policies and participate in leadership decisions.',
    descHi: 'युवाओं और महिलाओं को सामुदायिक नीतियों को आकार देने और नेतृत्व के निर्णयों में भाग लेने के लिए एक सुरक्षित, सुलभ और सीधा मंच प्रदान करता है।',
    descUr: 'نوجوانوں اور خواتین کو برادری کی پالیسیوں کی تشکیل اور قیادت کے فیصلوں میں حصہ لینے کے لیے ایک محفوظ، قابل رسائی اور براہ راست پلیٹ فارم مہیا کرتا ہے۔',
    badge: 'Inclusive Growth'
  }
];

export const TABS: Tab[] = [
  { id: 'objectives', labelEn: 'Objectives', labelHi: 'मुख्य उद्देश्य', labelUr: 'مقاصد', icon: React.createElement(Target, { className: "h-4 w-4" }) },
  { id: 'surveys', labelEn: 'Active Surveys', labelHi: 'सक्रिय सर्वे', labelUr: 'فعال سروے', icon: React.createElement(Vote, { className: "h-4 w-4" }) },
  { id: 'polls', labelEn: 'Opinion Polls', labelHi: 'जनमत संग्रह', labelUr: 'رائے شماری', icon: React.createElement(BarChart3, { className: "h-4 w-4" }) },
  { id: 'agendas', labelEn: 'Reform Agendas', labelHi: 'सुधार एजेंडे', labelUr: 'اصلاحاتی ایجنڈے', icon: React.createElement(ScrollText, { className: "h-4 w-4" }) },
  { id: 'archive', labelEn: 'Decisions Archive', labelHi: 'निर्णय अभिलेखागार', labelUr: 'فیصلوں کا آرکائیو', icon: React.createElement(History, { className: "h-4 w-4" }) },
  { id: 'implementation', labelEn: 'Implementation', labelHi: 'क्रियान्वयन', labelUr: 'عمل درآمد', icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
  { id: 'security', labelEn: 'Security & Audit', labelHi: 'सुरक्षा एवं ऑडिट', labelUr: 'سیکیورٹی اور آڈٹ', icon: React.createElement(ShieldCheck, { className: "h-4 w-4" }) },
  { id: 'committees', labelEn: 'Committees', labelHi: 'समितियाँ', labelUr: 'کمیٹیاں', icon: React.createElement(Users, { className: "h-4 w-4" }) },
  { id: 'volunteers', labelEn: 'Volunteers', labelHi: 'स्वयंसेवक', labelUr: 'رضاکار', icon: React.createElement(UserPlus, { className: "h-4 w-4" }) },
  { id: 'reports_notif', labelEn: 'Reports', labelHi: 'रिपोर्ट्स', labelUr: 'رپورٹس', icon: React.createElement(Bell, { className: "h-4 w-4" }) },
  { id: 'admin_builder', labelEn: 'Builder (Admin)', labelHi: 'बिल्डर (एडमिन)', labelUr: 'بلڈر (ایڈمن)', icon: React.createElement(Layout, { className: "h-4 w-4" }) },
];
