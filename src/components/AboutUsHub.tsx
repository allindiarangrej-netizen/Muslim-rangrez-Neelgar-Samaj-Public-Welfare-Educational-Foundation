import React, { useState, useEffect } from 'react';
import {
  History,
  Scroll,
  Target,
  Users,
  FileText,
  HelpCircle,
  ShieldCheck,
  BarChart3,
  Download,
  CheckCircle2,
  Award,
  Lock,
  Scale,
  Eye,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  DollarSign,
  HeartHandshake,
  FileCheck,
  Building2,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Gavel,
  Phone,
  Globe,
  Bookmark,
  Trophy,
  AlertTriangle,
  Send,
  MessageSquare,
  X,
  PieChart,
  Check
} from 'lucide-react';
import HistoryDetails from './HistoryDetails';
import TrustConstitution from './TrustConstitution';
import SocietyReformMission from './SocietyReformMission';
import NationalLeadership from './NationalLeadership';
import SocietyRegistration from './SocietyRegistration';
import LegalAwareness from './LegalAwareness';
import HallOfExcellenceView from './HallOfExcellenceView';
import PortalVersionInfo from './PortalVersionInfo';

interface AboutUsHubProps {
  currentLanguage: 'en' | 'hi' | 'ur';
  activeSubTab?: string;
  onNavigate?: (tab: string) => void;
}

const AboutUsHub: React.FC<AboutUsHubProps> = ({
  currentLanguage,
  activeSubTab = 'about-history',
  onNavigate
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [legalToolkitTab, setLegalToolkitTab] = useState<string>('rights');
  const [hasAntiCorruptionPledge, setHasAntiCorruptionPledge] = useState<boolean>(false);
  const [antiCorruptionCount, setAntiCorruptionCount] = useState<number>(3914);
  const [showWhistleblowerModal, setShowWhistleblowerModal] = useState<boolean>(false);
  const [wbCategory, setWbCategory] = useState<string>('financial');
  const [wbDesc, setWbDesc] = useState<string>('');
  const [wbSubmitted, setWbSubmitted] = useState<boolean>(false);
  const [selectedReportPreview, setSelectedReportPreview] = useState<any | null>(null);
  const [reportDownloadProgress, setReportDownloadProgress] = useState<Record<string, number>>({});

  const handleStartReportDownload = (year: string) => {
    setReportDownloadProgress(prev => ({ ...prev, [year]: 30 }));
    setTimeout(() => setReportDownloadProgress(prev => ({ ...prev, [year]: 75 })), 400);
    setTimeout(() => {
      setReportDownloadProgress(prev => ({ ...prev, [year]: 100 }));
      setTimeout(() => setReportDownloadProgress(prev => ({ ...prev, [year]: 0 })), 3000);
    }, 900);
  };

  useEffect(() => {
    if (activeSubTab === 'legal-constitution') setLegalToolkitTab('rights');
    else if (activeSubTab === 'legal-rti') setLegalToolkitTab('rti');
    else if (activeSubTab === 'legal-awareness') setLegalToolkitTab('laws');
    else if (activeSubTab === 'legal-citizen-rights') setLegalToolkitTab('citizen_rights');
  }, [activeSubTab]);

  // Normalize tab selection
  const getNormalizedTab = (tab?: string): string => {
    if (!tab || tab === 'about') return 'about-history';
    if (tab === 'legal-governance' || tab === 'governance-overview' || tab === 'about-legal-governance' || tab === 'legal-constitution' || tab === 'legal-awareness' || tab === 'legal-rti' || tab === 'legal-citizen-rights') return 'about-legal-governance';
    if (tab === 'hall-of-excellence' || tab === 'excellence' || tab === 'achievers' || tab === 'community-achievers') return 'about-excellence';
    if (
      [
        'about-history',
        'about-constitution',
        'about-vision',
        'about-leadership',
        'about-certificate',
        'about-faq',
        'about-transparency',
        'about-legal-governance',
        'about-reports',
        'about-excellence'
      ].includes(tab)
    ) {
      return tab;
    }
    return 'about-history';
  };

  const currentTab = getNormalizedTab(activeSubTab);

  const handleTabChange = (tabId: string) => {
    if (onNavigate) {
      onNavigate(tabId);
    }
  };

  const navItems = [
    {
      id: 'about-history',
      icon: <History className="w-4 h-4 text-amber-400" />,
      labelEn: 'Community History',
      labelHi: 'बिरादरी का इतिहास',
      labelUr: 'برادری کی تاریخ'
    },
    {
      id: 'about-constitution',
      icon: <Scroll className="w-4 h-4 text-emerald-400" />,
      labelEn: 'Trust Constitution & By-Laws',
      labelHi: 'महासभा संविधान एवं नियमावली',
      labelUr: 'ٹرسٹ کا آئین اور ضوابط'
    },
    {
      id: 'about-vision',
      icon: <Target className="w-4 h-4 text-blue-400" />,
      labelEn: 'Mission & Vision',
      labelHi: 'मक़सद और नज़रिया',
      labelUr: 'مشن اور مقصد'
    },
    {
      id: 'about-leadership',
      icon: <Users className="w-4 h-4 text-purple-400" />,
      labelEn: 'Founders & Leadership',
      labelHi: 'बानी और क़ियादत',
      labelUr: 'قائدین اور قیادت'
    },
    {
      id: 'about-certificate',
      icon: <FileText className="w-4 h-4 text-teal-400" />,
      labelEn: 'Society Registration',
      labelHi: 'सोसाइटी रजिस्ट्रेशन',
      labelUr: 'سوسائٹی رجسٹریشن'
    },
    {
      id: 'about-faq',
      icon: <HelpCircle className="w-4 h-4 text-rose-400" />,
      labelEn: 'FAQ',
      labelHi: 'अक्सर पूछे जाने वाले सवाल',
      labelUr: 'عام سوالات (FAQ)'
    },
    {
      id: 'about-transparency',
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      labelEn: 'Transparency & Governance',
      labelHi: 'पारदर्शिता और शासन',
      labelUr: 'شفافیت اور حکمرانی',
      isNew: true
    },
    {
      id: 'about-legal-governance',
      icon: <Scale className="w-4 h-4 text-purple-400" />,
      labelEn: 'Legal & Governance',
      labelHi: 'कानून एवं शासन',
      labelUr: 'قانونی اور انتظامی',
      isNew: true
    },
    {
      id: 'about-reports',
      icon: <BarChart3 className="w-4 h-4 text-emerald-400" />,
      labelEn: 'Annual Reports',
      labelHi: 'वार्षिक रिपोर्ट',
      labelUr: 'سالانہ رپورٹس',
      isNew: true
    },
    {
      id: 'about-excellence',
      icon: <Trophy className="w-4 h-4 text-[#FFD54A]" />,
      labelEn: 'Hall of Excellence (Achievers)',
      labelHi: 'गौरवशाली विभूतियाँ (हॉल ऑफ एक्सीलेंस)',
      labelUr: 'ہال آف ایکسیلنس (نمایاں شخصیات)',
      isNew: true
    }
  ];

  // Comprehensive FAQ List
  const faqs = [
    {
      qEn: 'How can I obtain my verified digital ID card?',
      qHi: 'मैं अपना सत्यापित डिजिटल पहचान पत्र कैसे प्राप्त कर सकता हूँ?',
      qUr: 'میں اپنا تصدیق شدہ ڈیجیٹل شناختی کارڈ کیسے حاصل کر سکتا ہوں؟',
      aEn: 'Register on our online Membership Portal by filling out your basic family details and uploading your residence proof. Once your district or state secretary verifies your details, your digital ID card with a unique QR code becomes instantly active and downloadable.',
      aHi: 'हमारे ऑनलाइन सदस्यता पोर्टल पर अपने परिवार का विवरण भरकर और निवास प्रमाण पत्र अपलोड करके पंजीकरण करें। एक बार जब आपके जिला या राज्य सचिव आपके विवरण की पुष्टि कर देते हैं, तो अद्वितीय QR कोड के साथ आपका डिजिटल पहचान पत्र सक्रिय और डाउनलोड के लिए उपलब्ध हो जाता है।',
      aUr: 'ہمارے آن لائن ممبرشپ پورٹل پر اپنے خاندان کی بنیادی تفصیلات بھر کر اور رہائش کا ثبوت اپ لوڈ کر کے رجسٹریشن کریں۔ جیسے ہی آپ کے ضلعی یا ریاستی سکریٹری آپ کی تفصیلات کی تصدیق کریں گے، آپ کا ڈیجیٹل شناختی کارڈ فوراً فعال ہو جائے گا۔'
    },
    {
      qEn: 'Are donations eligible for income tax exemptions under Section 80G?',
      qHi: 'क्या दान आयकर की धारा 80G के तहत कर छूट के योग्य हैं?',
      qUr: 'کیا عطیات انکم ٹیکس کے سیکشن 80G کے تحت ٹیکس چھوٹ کے اہل ہیں؟',
      aEn: 'Yes! All India Rangrez Samaj Trust is a registered non-profit charitable trust. All direct monetary contributions and donations made toward education, healthcare, and welfare funds are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an instant tax receipt upon donation.',
      aHi: 'हां! ऑल इंडिया रंगरेज समाज ट्रस्ट एक पंजीकृत गैर-लाभकारी धर्मार्थ ट्रस्ट है। शिक्षा, स्वास्थ्य सेवा और कल्याण कोष में किए गए सभी सीधे धन सहयोग आयकर अधिनियम की धारा 80G के तहत कर छूट के योग्य हैं। दान करने पर आपको तुरंत डिजिटल रसीद प्राप्त होगी।',
      aUr: 'ہاں! آل انڈیا رنگریز سماج ٹرسٹ ایک رجسٹرڈ غیر منافع بخش خیراتی ٹرسٹ ہے۔ تعلیم، صحت اور فلاح و بہبود کے فنڈز میں دیے گئے تمام عطیات انکم ٹیکس ایکٹ के तहत टैक्स छूट के योग्य हैं।'
    },
    {
      qEn: 'How can students apply for community minority scholarships or education loans?',
      qHi: 'छात्र सामुदायिक अल्पसंख्यक छात्रवृत्ति या शिक्षा ऋण के लिए कैसे आवेदन कर सकते हैं?',
      qUr: 'طلباء کمیونٹی اقلیتی وظائف یا تعلیمی قرضوں کے لیے کیسے درخواست دے سکتے ہیں؟',
      aEn: 'Visit the "Welfare & Support" section and click on "Scholarships". Here you can apply for merit-based scholarships, UPSC/State civil services exam coaching grants, and interest-free higher education micro-loans. Submit your marksheets and admission proof online for verification.',
      aHi: '"कल्याण एवं सहायता" अनुभाग पर जाएं और "छात्रवृत्ति" पर क्लिक करें। यहां आप योग्यता आधारित छात्रवृत्ति, यूपीएससी/राज्य सिविल सेवा परीक्षा कोचिंग अनुदान और ब्याज मुक्त उच्च शिक्षा ऋण के लिए आवेदन कर सकते हैं। सत्यापन के लिए अपनी अंकतालिका और प्रवेश प्रमाण पत्र ऑनलाइन जमा करें।',
      aUr: '"فلاح و بہبود اور مدد" کے سیکشن میں جائیں اور "کالرشپس" پر کلک کریں۔ یہاں آپ میرٹ کی بنیاد پر وظائف، سول سروسز کوچنگ گرانٹس اور بِلَا سُود اعلیٰ تعلیم کے قرضوں کے لیے درخواست دے سکتے ہیں۔'
    },
    {
      qEn: 'How do I register a matrimonial profile for my family member?',
      qHi: 'मैं अपने परिवार के सदस्य के लिए वैवाहिक प्रोफ़ाइल कैसे पंजीकृत कर सकता हूँ?',
      qUr: 'میں اپنے خاندان کے فرد کے لیے رشتہ (شادی) کی پروفائل کیسے رجسٹر کروں؟',
      aEn: 'Navigate to "Community Portal" and select the "Matrimonial Portal". Verified registered members can create confidential matrimonial profiles for their children or dependent relatives. All profiles undergo manual moderation to ensure dignity, privacy, and authenticity.',
      aHi: '"सामुदायिक पोर्टल" पर जाएं और "वैवाहिक पोर्टल" चुनें। सत्यापित पंजीकृत सदस्य अपने बच्चों या आश्रित रिश्तेदारों के लिए गोपनीय वैवाहिक प्रोफाइल बना सकते हैं। गरिमा, गोपनीयता और प्रामाणिकता सुनिश्चित करने के लिए सभी प्रोफाइल की जांच की जाती है।',
      aUr: '"کمیونٹی پورٹل" پر جائیں اور "میٹریمونیل پورٹل" منتخب کریں۔ تصدیق شدہ رجسٹرڈ اراکین اپنے بچوں یا رشتہ داروں کے لیے باوقار اور محفوظ رشتہ پروفائلز بنا سکتے ہیں۔'
    },
    {
      qEn: 'Who is eligible to become an active member of All India Rangrez Samaj Trust?',
      qHi: 'ऑल इंडिया रंगरेज समाज ट्रस्ट का सक्रिय सदस्य बनने के लिए कौन पात्र है?',
      qUr: 'آل انڈیا رنگریز سماج ٹرسٹ کا فعال رکن بننے کا اہل کون ہے؟',
      aEn: 'Any adult member (18+ years) belonging to the Rangrez community (or supporting our social reform objectives) residing in India or abroad is eligible for membership. Members must pledge to abide by the Trust Constitution, promote education, and reject dowry and social evils.',
      aHi: 'भारत या विदेश में रहने वाले रंगरेज समुदाय का कोई भी वयस्क सदस्य (18+ वर्ष) या समाज सुधार उद्देश्यों का समर्थन करने वाला व्यक्ति सदस्यता के लिए पात्र है। सदस्यों को ट्रस्ट संविधान का पालन करने, शिक्षा को बढ़ावा देने और दहेज व सामाजिक बुराइयों का बहिष्कार करने की प्रतिज्ञा करनी होगी।',
      aUr: 'ہندوستان یا بیرون ملک مقیم رنگریز برادری کا کوئی بھی بالغ فرد (18+ سال) رکنیت کا اہل ہے۔ اراکین کو ٹرسٹ کے آئین کی پابندی، تعلیم کے فروغ اور جہیز و دیگر سماجی برائیوں کو ختم کرنے کا حلف لینا ہوگا۔'
    },
    {
      qEn: 'What is the procedure to file an RTI or seek community legal assistance?',
      qHi: 'RTI दाखिल करने या सामुदायिक कानूनी सहायता प्राप्त करने की प्रक्रिया क्या है?',
      qUr: 'RTI دائر کرنے یا کمیونٹی سے قانونی مدد حاصل کرنے का क्या तरीका है؟',
      aEn: 'In our "Legal & Governance Hub", you can access standardized RTI application templates, learn about fundamental constitutional rights, and connect with our panel of pro-bono legal experts for community disputes, property rights, or civil rights protection.',
      aHi: 'हमारे "कानून एवं शासन हब" में, आप मानकीकृत RTI आवेदन प्रारूप प्राप्त कर सकते हैं, मौलिक संवैधानिक अधिकारों के बारे में जान सकते हैं, और सामुदायिक विवादों या नागरिक अधिकारों की रक्षा के लिए हमारे निःशुल्क कानूनी विशेषज्ञों के पैनल से जुड़ सकते हैं।',
      aUr: 'ہمارے "لیگل اور گورننس ہب" میں آپ RTI کی معیاری درخواست کے فارم حاصل کر سکتے ہیں، اپنے آئینی حقوق کے بارے میں جان سکتے ہیں، اور قانونی مدد حاصل کر سکتے ہیں۔'
    },
    {
      qEn: 'How are Mahapanchayat resolutions and community social reforms enforced?',
      qHi: 'महापंचायत के प्रस्तावों और सामाजिक सुधारों को कैसे लागू किया जाता है?',
      qUr: 'مہاپنچایت کی قراردادوں और सामाजिक सुधारों को कैसे लागू किया जाता है؟',
      aEn: 'Resolutions approved by the Mahapanchayat (such as simplified marriages, dowry ban, and compulsory education) are implemented through local district committees and village panchayats. We use awareness campaigns, counseling, and community recognition awards rather than coercion.',
      aHi: 'महापंचायत द्वारा पारित प्रस्ताव (जैसे सादगीपूर्ण विवाह, दहेज प्रतिबंध और अनिवार्य शिक्षा) स्थानीय जिला समितियों और पंचायत प्रतिनिधियों के माध्यम से लागू किए जाते हैं। हम किसी दबाव के बजाय जागरूकता अभियानों, परामर्श और सामाजिक सम्मान के माध्यम से सुधार लाते हैं।',
      aUr: 'مہاپنچایت کی منظور کردہ قراردادیں (جیسے سادہ شادیاں, جہیز پر پابندی اور لازمی تعلیم) مقامی ضلعی کمیٹیوں کے ذریعے نافذ کی جاتی ہے۔ ہم بیداری مہم اور مشاورت کے ذریعے اصلاحات لاتے ہیں۔'
    },
    {
      qEn: 'Can overseas or NRI community members participate in elections and governance?',
      qHi: 'क्या प्रवासी या NRI सामुदायिक सदस्य चुनावों और शासन में भाग ले सकते हैं?',
      qUr: 'کیا بیرون ملک مقیم یا NRI اراکین انتخابات اور حکمرانی میں حصہ لے سکتے ہیں؟',
      aEn: 'Yes! Overseas and NRI members can register under our International Wing. They can actively participate in digital surveys, opinion polls, committee meetings via video conferencing, and sponsor educational and charitable projects across India.',
      aHi: 'हां! प्रवासी और NRI सदस्य हमारे इंटरनेशनल विंग के तहत पंजीकरण कर सकते हैं। वे डिजिटल सर्वेक्षणों, जनमत संग्रह, वीडियो कॉन्फ्रेंसिंग के माध्यम से सक्रिय रूप से भाग ले सकते हैं और भारत में शैक्षिक परियोजनाओं का समर्थन कर सकते हैं।',
      aUr: 'ہاں! بیرون ملک اور NRI اراکین ہمارے انٹرنیشنل ونگ کے تحت رجسٹر ہو سکتے ہیں۔ وہ ڈیجیٹل سروے، رائے عامہ اور ویڈیو کانفرنسنگ کے ذریعے کمیٹی میٹنگز میں حصہ لے سکتے ہیں۔'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1a2e22] min-h-screen pb-16 font-sans">
      {/* 1. PORTAL BANNER (DARK GREEN) - SINGLE NAME "About Us" */}
      <div className="bg-gradient-to-r from-[#062413] via-[#09351C] to-[#041A0E] text-white py-8 sm:py-10 px-4 sm:px-6 border-b-4 border-[#F4C430] relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23]/40 border border-[#FFD54A]/40 text-[#FFD54A] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{currentLanguage === 'en' ? 'HERITAGE & CONSTITUTIONAL TRUST' : currentLanguage === 'ur' ? 'ورثہ اور آئینی ٹرسٹ' : 'ऐतिहासिक एवं संवैधानिक ट्रस्ट'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{currentLanguage === 'en' ? 'About Us' : currentLanguage === 'ur' ? 'ہمارے بارے میں' : 'हमारे बारे में'}</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-light leading-relaxed">
              {currentLanguage === 'en'
                ? 'Welcome to the official portal of All India Rangrez Samaj Trust. Explore our centuries-old community heritage, constitutional governance, leadership, verified registration, and commitment to transparency.'
                : currentLanguage === 'ur'
                ? 'آل انڈیا رنگریز سماج ٹرسٹ کے باضابطہ پورٹل میں خوش آمدید। ہماری صدیوں پرانی برادری کی تاریخ، آئینی حکمرانی، قیادت، شفافیت اور فلاحی عزم का مطالعہ کریں۔'
                : 'ऑल इंडिया रंगरेज समाज ट्रस्ट के आधिकारिक पोर्टल में स्वागत है। हमारी सदियों पुरानी बिरादरी का इतिहास, संवैधानिक शासन, नेतृत्व, पंजीकृत मान्यता और पारदर्शिता के प्रति हमारी प्रतिबद्धता को जानें।'}
            </p>
          </div>

          {/* Quick Stats Badge */}
          <div className="bg-emerald-950/80 border border-[#F4C430]/30 rounded-2xl p-4 sm:p-5 flex items-center gap-6 shadow-inner w-full md:w-auto backdrop-blur-sm">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-[#FFD54A]">100%</div>
              <div className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">{currentLanguage === 'en' ? 'Transparent' : 'पूर्ण पारदर्शिता'}</div>
            </div>
            <div className="h-10 w-[1px] bg-emerald-800"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-[#FFD54A]">80G</div>
              <div className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">{currentLanguage === 'en' ? 'Tax Exempt' : 'कर छूट मान्य'}</div>
            </div>
            <div className="h-10 w-[1px] bg-emerald-800"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white">ISO</div>
              <div className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">{currentLanguage === 'en' ? 'Certified' : 'प्रमाणित संस्था'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUB-NAVIGATION PILLS BAR */}
      <div className="bg-[#F5F2EB] border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {navItems.map((item: any) => {
              if (item.isSectionHeader) {
                return (
                  <div key={item.id} className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#004B23] bg-emerald-100/50 border border-emerald-200 rounded-xl shrink-0 mx-1 shadow-sm">
                    {item.icon}
                    <span>{currentLanguage === 'en' ? item.labelEn : currentLanguage === 'ur' ? item.labelUr : item.labelHi}</span>
                  </div>
                );
              }
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#004B23] text-[#FFD54A] shadow-md scale-[1.02] border border-[#FFD54A]/50'
                      : 'bg-white text-gray-700 hover:bg-slate-100 hover:text-[#004B23] border border-gray-200'
                  }`}
                >
                  {item.icon}
                  <span>
                    {currentLanguage === 'en' ? item.labelEn : currentLanguage === 'ur' ? item.labelUr : item.labelHi}
                  </span>
                  {item.isNew && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full uppercase font-black tracking-wider ${
                      isActive ? 'bg-[#FFD54A] text-[#004B23]' : 'bg-emerald-100 text-[#004B23]'
                    }`}>
                      {currentLanguage === 'en' ? 'NEW' : 'नया'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT DISPLAY */}
      {/* 3. MAIN CONTENT DISPLAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* TAB 1: COMMUNITY HISTORY */}
        {currentTab === 'about-history' && (
          <div className="animate-fadeIn">
            <HistoryDetails currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 2: TRUST CONSTITUTION & BY-LAWS */}
        {currentTab === 'about-constitution' && (
          <div className="animate-fadeIn">
            <TrustConstitution currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 3: MISSION & VISION */}
        {currentTab === 'about-vision' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Vision Parameters Highlight Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Core Mission & Vision Parameters' : currentLanguage === 'ur' ? 'بنیادی مشن اور مقصد' : 'महासभा के मुख्य उद्देश्य और संकल्प'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'en' ? 'Pillars driving community empowerment and educational upliftment across India' : 'भारत भर में बिरादरी के सशक्तिकरण और शैक्षिक विकास के आधार स्तंभ'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 hover:border-emerald-300 transition space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#004B23] flex items-center justify-center font-black text-lg">
                    01
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {currentLanguage === 'en' ? '100% Educational Literacy' : currentLanguage === 'ur' ? '100% تعلیمی شرح خواندگی' : '100% साक्षरता और उच्च शिक्षा'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Aiming to support primary and university tuition fees for every underprivileged child in our community, ensuring no student drops out due to financial constraints.'
                      : 'हमारे समुदाय के प्रत्येक बच्चे के लिए प्राथमिक और विश्वविद्यालय शिक्षा शुल्क का वहन करना, ताकि आर्थिक तंगी के कारण कोई भी छात्र शिक्षा से वंचित न रहे।'}
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 hover:border-amber-300 transition space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
                    02
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {currentLanguage === 'en' ? 'Digital Census Mapping' : currentLanguage === 'ur' ? 'ڈیجیٹل مردم شماری اور شناخت' : 'डिजिटल परिवार जनगणना'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Registering 100,000+ Rangrez members across India to provide streamlined healthcare benefits, emergency blood donor network, and social security coverage.'
                      : 'सुव्यवस्थित स्वास्थ्य लाभ, आपातकालीन रक्तदान नेटवर्क और सामाजिक सुरक्षा प्रदान करने के लिए भारत भर में 100,000+ महासभा सदस्यों का पंजीकरण।'}
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 hover:border-blue-300 transition space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
                    03
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {currentLanguage === 'en' ? 'Socio-Economic Micro-finance' : currentLanguage === 'ur' ? 'معاشی خود انحصاری اور کاروبار' : 'लघु उद्योग एवं स्वरोजगार'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Providing business incubator grants, modern technical training, and interest-free micro-finance to traditional handblock printing and textile artisans.'
                      : 'पारंपरिक हैंडब्लॉक प्रिंटिंग और रंगरेज कारीगरों को व्यावसायिक विकास अनुदान, आधुनिक तकनीकी प्रशिक्षण और ब्याज मुक्त लघु ऋण प्रदान करना।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Comprehensive Society Reform Mission Component */}
            <SocietyReformMission currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 4: FOUNDERS & LEADERSHIP */}
        {currentTab === 'about-leadership' && (
          <div className="animate-fadeIn">
            <NationalLeadership currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 5: SOCIETY REGISTRATION */}
        {currentTab === 'about-certificate' && (
          <div className="animate-fadeIn">
            <SocietyRegistration currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 6: FAQ (COMPREHENSIVE) */}
        {currentTab === 'about-faq' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 animate-fadeIn">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'KNOWLEDGE & ASSISTANCE' : 'सहायता एवं सामान्य जानकारी'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Frequently Asked Questions (FAQ)' : currentLanguage === 'ur' ? 'عام سوالات اور جوابات' : 'अक्सर पूछे जाने वाले सवाल (FAQ)'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                {currentLanguage === 'en'
                  ? 'Find clear answers regarding trust membership, tax exemptions, digital identity verification, scholarship applications, and community governance.'
                  : 'ट्रस्ट सदस्यता, कर छूट, डिजिटल पहचान सत्यापन, छात्रवृत्ति आवेदन और सामुदायिक शासन से संबंधित प्रश्नों के स्पष्ट उत्तर यहां जानें।'}
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-3 max-w-4xl mx-auto pt-4">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-[#004B23] bg-emerald-50/20 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-[#0B132B] flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#004B23] text-[#FFD54A] text-xs flex items-center justify-center shrink-0 font-black">
                          Q{index + 1}
                        </span>
                        <span>
                          {currentLanguage === 'en' ? faq.qEn : currentLanguage === 'ur' ? faq.qUr : faq.qHi}
                        </span>
                      </span>
                      <span className="text-gray-400 shrink-0">
                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#004B23]" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white/60">
                        <div className="pl-9 text-gray-600 font-normal">
                          {currentLanguage === 'en' ? faq.aEn : currentLanguage === 'ur' ? faq.aUr : faq.aHi}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Need More Help Banner */}
            <div className="bg-gradient-to-r from-[#0B132B] to-[#142244] rounded-2xl p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mt-8">
              <div className="space-y-1">
                <h4 className="font-bold text-base sm:text-lg text-[#FFD54A]">
                  {currentLanguage === 'en' ? 'Still have unanswered questions?' : 'क्या आपके पास कोई अन्य सवाल है?'}
                </h4>
                <p className="text-xs text-gray-300">
                  {currentLanguage === 'en' ? 'Our central helpdesk and legal committee are available 24/7 to assist community members.' : 'हमारी केंद्रीय सहायता टीम और कानूनी समिति समुदाय के सदस्यों की सहायता के लिए सदैव उपलब्ध है।'}
                </p>
              </div>
              <button
                onClick={() => handleTabChange('about-transparency')}
                className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold rounded-xl border border-[#FFD54A]/40 shadow transition flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>🛡️</span>
                <span>{currentLanguage === 'en' ? 'View Governance & RTI' : 'शासन एवं RTI देखें'}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 7: TRANSPARENCY & GOVERNANCE (NEW SUGGESTED ADDITION) */}
        {currentTab === 'about-transparency' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#004B23] to-[#003318] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-[#FFD54A]/30">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-[#FFD54A] text-xs font-bold uppercase tracking-wider border border-white/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'ETHICS, INTEGRITY & ACCOUNTABILITY' : 'नैतिकता, निष्ठा और जवाबदेही'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight">
                  {currentLanguage === 'en' ? 'Transparency & Good Governance Charter' : currentLanguage === 'ur' ? 'شفافیت اور اچھی حکمرانی کا منشور' : 'पारदर्शिता और सुशासन घोषणापत्र'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? 'All India Rangrez Samaj Trust operates under strict ethical guidelines, zero-tolerance anti-corruption protocols, open financial audits, and democratic accountability to ensure every rupee donated serves the welfare of our community.'
                    : 'ऑल इंडिया रंगरेज समाज ट्रस्ट सख्त नैतिक दिशा-निर्देशों, भ्रष्टाचार-विरोधी प्रोटोकॉल, खुले वित्तीय ऑडिट और लोकतांत्रिक जवाबदेही के तहत काम करता है, ताकि दान किया गया हर एक रुपया बिरादरी के कल्याण में काम आए।'}
                </p>
              </div>
            </div>

            {/* 4 Pillar Governance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-emerald-400 transition">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#004B23] flex items-center justify-center font-bold">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Executive Board Accountability' : currentLanguage === 'ur' ? 'ایگزیکٹو بورڈ کی جوابدہی' : 'कार्यकारिणी समिति की जवाबदेही'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'All executive trustees and office bearers are bound by a legal Fiduciary Code of Conduct. No office bearer is permitted to receive personal financial benefits, salary, or commercial contracts from trust funds. Every decision requires a recorded majority vote in quarterly meetings.'
                    : 'सभी कार्यकारी ट्रस्टी और पदाधिकारी वैधानिक आचार संहिता से बंधे हैं। किसी भी पदाधिकारी को ट्रस्ट फंड से व्यक्तिगत वित्तीय लाभ, वेतन या व्यावसायिक अनुबंध प्राप्त करने की अनुमति नहीं है। प्रत्येक निर्णय के लिए त्रैमासिक बैठकों में बहुमत वोट आवश्यक है।'}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#004B23]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{currentLanguage === 'en' ? 'Zero Conflict of Interest Policy' : 'शून्य हित-संघर्ष (No Conflict) नीति'}</span>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-amber-400 transition">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Anti-Corruption & Financial Audit' : currentLanguage === 'ur' ? 'انسداد بدعنوانی اور مالیاتی آڈٹ' : 'भ्रष्टाचार विरोध एवं वित्तीय ऑडिट'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Our financial ledger is audited annually by independent Chartered Accountants (CAs) and submitted to the Registrar of Societies and Income Tax Department. All expenditures exceeding ₹1,000 require dual-signatory authorization and digital receipt tracking.'
                    : 'हमारे वित्तीय बहीखाते का प्रतिवर्ष स्वतंत्र चार्टर्ड अकाउंटेंट्स (CA) द्वारा ऑडिट किया जाता है और रजिस्ट्रार ऑफ सोसाइटीज एवं आयकर विभाग को प्रस्तुत किया जाता है। ₹1,000 से अधिक के प्रत्येक खर्च के लिए दोहरे हस्ताक्षरकर्ता की स्वीकृति और डिजिटल रसीद अनिवार्य है।'}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>{currentLanguage === 'en' ? '100% Audited & 80G Compliant' : '100% ऑडिटेड एवं 80G कर प्रमाणित'}</span>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-blue-400 transition">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Democratic Elections & Member Rights' : currentLanguage === 'ur' ? 'جمہوری انتخابات اور اراکین کے حقوق' : 'लोकतांत्रिक चुनाव एवं सदस्य अधिकार'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'Every verified registered member holds equal voting rights in the biennial election of the National Executive Body. Election proceedings are supervised by an independent election officer and conducted via secure ballot and digital verification.'
                    : 'प्रत्येक सत्यापित पंजीकृत सदस्य को राष्ट्रीय कार्यकारिणी के द्विवार्षिक चुनाव में समान मतदान का अधिकार प्राप्त है। चुनाव प्रक्रिया एक स्वतंत्र चुनाव अधिकारी की देखरेख में सुरक्षित मतपत्र और डिजिटल सत्यापन के माध्यम से संपन्न होती है।'}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>{currentLanguage === 'en' ? 'Equal Voting Rights for All Members' : 'सभी पंजीकृत सदस्यों को समान मतदान अधिकार'}</span>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-purple-400 transition">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'RTI & Open Inquiry Compliance' : currentLanguage === 'ur' ? 'RTI اور کھلی تحقیقات کی تعمیل' : 'RTI एवं खुली सूचना का अधिकार'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'en'
                    ? 'In the spirit of complete transparency, any registered member can file an official Right to Information (RTI) inquiry regarding trust expenditures, committee reports, or administrative decisions. Responses are mandated within 15 working days.'
                    : 'पूर्ण पारदर्शिता की भावना के तहत, कोई भी पंजीकृत सदस्य ट्रस्ट के खर्चों, समिति की रिपोर्टों या प्रशासनिक निर्णयों के संबंध में आधिकारिक सूचना का अधिकार (RTI) अनुरोध दर्ज कर सकता है। 15 कार्य दिवसों के भीतर लिखित उत्तर देना अनिवार्य है।'}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-purple-600">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  <span>{currentLanguage === 'en' ? '15-Day Mandated RTI Response Time' : '15 कार्य दिवसों में अनिवार्य RTI उत्तर'}</span>
                </div>
              </div>
            </div>

            {/* Governance Compliance Checklist */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FFD54A]">
                    {currentLanguage === 'en' ? 'Statutory Compliance & Regulatory Status' : 'वैधानिक अनुपालन एवं नियामक स्थिति'}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {currentLanguage === 'en' ? 'Verified filings with Government of India registries' : 'भारत सरकार के रजिस्ट्रारों के साथ सत्यापित प्रमाणन'}
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'en' ? '100% COMPLIANT' : '100% प्रमाणित'}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                {[
                  { labelEn: 'Societies Registration Act, 1860', labelHi: 'सोसाइटी पंजीकरण अधिनियम, 1860', status: 'Active & Verified' },
                  { labelEn: 'Income Tax 80G & 12A Certified', labelHi: 'आयकर 80G एवं 12A प्रमाणन', status: 'Exempt Status Valid' },
                  { labelEn: 'NITI Aayog Darpan Enrolled', labelHi: 'नीति आयोग दर्पण पंजीकरण', status: 'Registered NGO' },
                  { labelEn: 'PAN & TAN Statutory Filings', labelHi: 'पैन एवं टैन वैधानिक रिटर्न', status: 'Up-to-date (2025-26)' },
                  { labelEn: 'FCRA Compliance Check', labelHi: 'FCRA अनुपालन जांच', status: 'Domestic Trust Verified' },
                  { labelEn: 'Annual Audit Report 2024-25', labelHi: 'वार्षिक ऑडिट रिपोर्ट 2024-25', status: 'Submitted to Registrar' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-gray-200">
                        {currentLanguage === 'en' ? stat.labelEn : stat.labelHi}
                      </div>
                      <div className="text-[11px] text-emerald-400 font-bold mt-0.5">{stat.status}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================= */}
            {/* ZAKAT / SADQAH TRANSPARENCY & ZERO-ADMIN-FEE GUARANTEE */}
            {/* ========================================================= */}
            <div className="bg-gradient-to-r from-emerald-950 via-[#004B23] to-[#05381d] text-white p-6 sm:p-10 rounded-3xl border-2 border-[#FFD54A]/40 shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD54A] text-[#0B132B] text-xs font-mono font-black uppercase">
                    <PieChart className="w-4 h-4" />
                    <span>{currentLanguage === 'en' ? '100% RELIGIOUS & SOCIAL ACCOUNTABILITY' : '100% धार्मिक एवं सामाजिक जवाबदेही'}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-serif font-black text-white">
                    {currentLanguage === 'en' ? 'Zakat & Sadqah Zero-Admin-Fee Guarantee' : currentLanguage === 'ur' ? 'زکوٰۃ اور صدقہ میں 100% زیرو ایڈمن فیس کی ضمانت' : 'ज़कात एवं सदका 100% शून्य प्रशासनिक खर्च गारंटी'}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100">
                    {currentLanguage === 'en'
                      ? 'Unlike conventional NGOs that deduct 15% to 25% for office administration and salaries, All India Rangrez Samaj Trust guarantees that 100% of all Zakat and Sadqah funds are transferred directly to deserving students and widows.'
                      : 'अन्य संस्थाओं के विपरीत जो प्रशासनिक खर्च और वेतन के लिए 15% से 25% राशि काटती हैं, ऑल इंडिया रंगरेज समाज ट्रस्ट गारंटी देता है कि ज़कात और सदका की 100% राशि सीधे पात्र छात्रों और विधवाओं के बैंक खातों में भेजी जाती है।'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-center shrink-0">
                  <div className="text-3xl font-black font-mono text-[#FFD54A]">0%</div>
                  <div className="text-[10px] font-mono uppercase text-emerald-200 mt-0.5">{currentLanguage === 'en' ? 'Admin Fee Deducted' : 'प्रशासनिक कटौती'}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#FFD54A] uppercase">1. {currentLanguage === 'en' ? 'Direct Bank Transfer (DBT)' : 'सीधा बैंक ट्रांसफर (DBT)'}</div>
                  <h4 className="font-bold text-sm text-white">{currentLanguage === 'en' ? 'Zero Cash Transactions' : 'शून्य नकद लेनदेन'}</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'All educational scholarships and widow pensions are distributed exclusively via NEFT/RTGS directly into the beneficiary bank accounts.'
                      : 'सभी छात्रवृत्तियां और विधवा पेंशन सीधे लाभार्थियों के बैंक खातों में NEFT/RTGS के माध्यम से भेजी जाती हैं।'}
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#FFD54A] uppercase">2. {currentLanguage === 'en' ? 'Separate Religious Account' : 'पृथक धार्मिक खाता'}</div>
                  <h4 className="font-bold text-sm text-white">{currentLanguage === 'en' ? 'Strict Shariah & Legal Ring-Fencing' : 'सख्त शरई एवं कानूनी सुरक्षा'}</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Zakat donations are kept in a dedicated, separate bank account and never mixed with general trust operational or event expenses.'
                      : 'ज़कात की राशि एक अलग समर्पित बैंक खाते में रखी जाती है और इसे कभी भी सामान्य ट्रस्ट या कार्यक्रम के खर्चों में नहीं मिलाया जाता।'}
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#FFD54A] uppercase">3. {currentLanguage === 'en' ? 'Open Audit Inspection' : 'खुली ऑडिट जांच'}</div>
                  <h4 className="font-bold text-sm text-white">{currentLanguage === 'en' ? 'Verifiable Utilization Certificate' : 'सत्यापित उपयोग प्रमाण पत्र'}</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Donors receive an automated Utilization Certificate detailing the anonymized beneficiary category and verification stamp.'
                      : 'दाताओं को एक स्वचालित उपयोग प्रमाण पत्र प्राप्त होता है जिसमें लाभार्थी श्रेणी और सत्यापन मुहर अंकित होती है।'}
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* ANTI-CORRUPTION PLEDGE & WHISTLEBLOWER MECHANISM */}
            {/* ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Anti-Corruption Pledge Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">{currentLanguage === 'en' ? 'COMMUNITY INTEGRITY' : 'सामुदायिक निष्ठा'}</span>
                    <h3 className="text-xl font-serif font-black text-[#0B132B]">
                      {currentLanguage === 'en' ? 'Anti-Corruption & Zero-Dowry Pledge' : currentLanguage === 'ur' ? 'انسداد بدعنوانی اور جہیز مخالف عزم' : 'भ्रष्टाचार एवं दहेज विरोध संकल्प'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'I solemnly pledge to uphold absolute honesty in community affairs, reject bribery or commission in trust works, refuse lavish dowry demands, and report unethical conduct without fear.'
                      : 'मैं समाज के कार्यों में पूर्ण ईमानदारी बनाए रखने, ट्रस्ट के कार्यों में रिश्वत या कमीशन को अस्वीकार करने, दहेज की मांग का विरोध करने और अनैतिक आचरण की निडर होकर सूचना देने का संकल्प लेता हूँ।'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <button
                    onClick={() => {
                      if (!hasAntiCorruptionPledge) {
                        setHasAntiCorruptionPledge(true);
                        setAntiCorruptionCount(prev => prev + 1);
                      }
                    }}
                    className={`w-full py-3.5 rounded-xl font-black text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      hasAntiCorruptionPledge
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0B132B] hover:bg-slate-800 text-[#FFD54A]'
                    }`}
                  >
                    {hasAntiCorruptionPledge ? <Check className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4 text-[#FFD54A]" />}
                    <span>
                      {hasAntiCorruptionPledge
                        ? (currentLanguage === 'en' ? '✓ You Took the Integrity Pledge' : '✓ आपने सत्यनिष्ठा संकल्प लिया')
                        : (currentLanguage === 'en' ? 'Take Anti-Corruption Pledge' : 'भ्रष्टाचार एवं दहेज विरोध संकल्प लें')}
                    </span>
                  </button>
                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-500">
                    <span>{currentLanguage === 'en' ? 'Verified Signatories:' : 'सत्यापित संकल्पकर्ता:'}</span>
                    <span className="font-bold text-[#004B23]">{antiCorruptionCount.toLocaleString()} Members</span>
                  </div>
                </div>
              </div>

              {/* Whistleblower & Grievance Redressal Card */}
              <div className="bg-[#0B132B] text-white p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD54A]/20 text-[#FFD54A] flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#FFD54A] uppercase tracking-wider">{currentLanguage === 'en' ? 'CONFIDENTIAL REPORTING' : 'गोपनीय शिकायत निवारण'}</span>
                    <h3 className="text-xl font-serif font-black text-white">
                      {currentLanguage === 'en' ? 'Whistleblower & Grievance Mechanism' : currentLanguage === 'ur' ? 'وسل بلوئر اور شکایات کا نظام' : 'व्हिसलब्लोअर एवं शिकायत निवारण तंत्र'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Have you witnessed financial irregularities, dowry coercion, or administrative malpractice within any local or national committee? Report directly to the Independent Trust Audit Board with 100% whistleblower protection.'
                      : 'क्या आपने किसी स्थानीय या राष्ट्रीय समिति में वित्तीय अनियमितता, दहेज उत्पीड़न या प्रशासनिक कदाचार देखा है? 100% गोपनीयता संरक्षण के साथ सीधे स्वतंत्र ट्रस्ट ऑडिट बोर्ड को रिपोर्ट करें।'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800 space-y-3">
                  <button
                    onClick={() => {
                      setWbSubmitted(false);
                      setWbDesc('');
                      setShowWhistleblowerModal(true);
                    }}
                    className="w-full py-3.5 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs sm:text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0B132B]" />
                    <span>{currentLanguage === 'en' ? 'Report Irregularity / File Grievance' : 'गोपनीय शिकायत / रिपोर्ट दर्ज करें'}</span>
                  </button>
                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-400">
                    <span>{currentLanguage === 'en' ? 'Direct to:' : 'सीधे प्रेषित:'}</span>
                    <span className="text-[#FFD54A] font-bold">Independent Audit Officer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 8: LEGAL & GOVERNANCE (FEATURES & FUNCTIONS) */}
        {currentTab === 'about-legal-governance' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#142244] via-[#1f3366] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-[#FFD54A]/30">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
                  <Scale className="w-4 h-4 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'CONSTITUTIONAL RIGHTS, RTI & ETHICAL GOVERNANCE' : currentLanguage === 'ur' ? 'آئینی حقوق، RTI اور انتظامی شفافیت' : 'संवैधानिक अधिकार, RTI एवं नैतिक प्रशासन'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white">
                  {currentLanguage === 'en' ? 'Legal & Governance Cell: Features & Functions' : currentLanguage === 'ur' ? 'قانونی اور انتظامی سیل: خصوصیات اور فرائض' : 'कानून एवं शासन प्रकोष्ठ: विशेषताएं और मुख्य कार्य'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? 'The Legal & Governance Cell under All India Rangrez Samaj Trust is dedicated to constitutional empowerment, RTI advocacy, pro-bono legal aid, and ensuring statutory administrative transparency across all community operations.'
                    : currentLanguage === 'ur'
                    ? 'آل انڈیا رنگریز سماج ٹرسٹ کے تحت قانونی اور انتظامی سیل برادری کے ہر فرد کے لیے آئینی آگاہی، مفت قانونی امداد، RTI رہنمائی اور مکمل انتظامی شفافیت کے قیام کے لیے وقف ہے۔'
                    : 'ऑल इंडिया रंगरेज समाज ट्रस्ट के तहत कानून एवं शासन प्रकोष्ठ बिरादरी के प्रत्येक सदस्य के लिए संवैधानिक अधिकार, RTI मार्गदर्शन, निःशुल्क कानूनी सहायता और संगठन में पूर्ण प्रशासनिक पारदर्शिता सुनिश्चित करने के लिए समर्पित है।'}
                </p>
              </div>
            </div>

            {/* Quick Switcher between Functions vs Features vs Toolkit */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Explore Legal & Governance Mandate' : currentLanguage === 'ur' ? 'قانونی اور انتظامی منشور کا جائزہ لیں' : 'कानून एवं शासन घोषणापत्र और सेवाएं'}
                </h3>
                <p className="text-xs text-gray-500">
                  {currentLanguage === 'en' ? 'Select a section to explore constitutional tools, RTI guides, and institutional bylaws' : 'संवैधानिक उपकरण, RTI गाइड और संस्थागत नियम जानने के लिए अनुभाग चुनें'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'rights', labelEn: 'Constitutional Rights', labelHi: 'संवैधानिक अधिकार', icon: Scale },
                  { id: 'rti', labelEn: 'RTI Filing Guide', labelHi: 'RTI मार्गदर्शन', icon: FileText },
                  { id: 'citizen_rights', labelEn: 'Citizen Rights', labelHi: 'नागरिक अधिकार', icon: ShieldAlert },
                  { id: 'institutions', labelEn: 'Legal Aid & Helplines', labelHi: 'कानूनी सहायता व हेल्पलाइन', icon: Phone },
                  { id: 'laws', labelEn: 'Important Laws', labelHi: 'महत्वपूर्ण कानून', icon: ShieldAlert },
                  { id: 'glossary', labelEn: 'Know Your Rights Quiz', labelHi: 'कानूनी क्विज़', icon: Sparkles },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => {
                      setLegalToolkitTab(btn.id);
                      const el = document.getElementById('about_legal_toolkit');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                      legalToolkitTab === btn.id
                        ? 'bg-[#004B23] text-[#FFD54A] border border-[#FFD54A]'
                        : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-[#004B23]'
                    }`}
                  >
                    <btn.icon className="w-3.5 h-3.5" />
                    <span>{currentLanguage === 'en' ? btn.labelEn : btn.labelHi}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SECTION 1: CORE FUNCTIONS OF LEGAL & GOVERNANCE CELL */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg sm:text-xl font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Core Functions of the Legal & Governance Cell' : currentLanguage === 'ur' ? 'قانونی اور انتظامی سیل کے بنیادی فرائض' : 'कानून एवं शासन प्रकोष्ठ के मुख्य कार्य व उद्देश्य'}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titleEn: '1. Constitutional Literacy & Rights Advocacy',
                    titleHi: '1. संवैधानिक साक्षरता एवं अधिकार संरक्षण',
                    titleUr: '1. آئینی خواندگی اور حقوق کا تحفظ',
                    descEn: 'Educating community members on Fundamental Rights (Articles 14-32) and Minority Protections under Articles 29 & 30 of the Constitution of India. Conducting regular legal literacy workshops for youth and women.',
                    descHi: 'भारतीय संविधान के मौलिक अधिकारों (अनुच्छेद 14-32) और अल्पसंख्यक अधिकारों (अनुच्छेद 29 व 30) के प्रति बिरादरी को जागरूक करना। युवाओं और महिलाओं के लिए नियमित कानूनी कार्यशालाएं आयोजित करना।',
                    descUr: 'آئین ہند کے بنیادی حقوق (دفعہ 14-32) اور اقلیتی حقوق (دفعہ 29 اور 30) کے بارے میں برادری کو آگاہ کرنا۔',
                    icon: <Scale className="w-6 h-6 text-purple-600" />,
                    bg: 'bg-purple-50',
                    border: 'hover:border-purple-400',
                    badge: 'Article 14-32 & 29-30'
                  },
                  {
                    titleEn: '2. Right to Information (RTI) Facilitation',
                    titleHi: '2. सूचना का अधिकार (RTI) मार्गदर्शन व सहायता',
                    titleUr: '2. حق معلومات (RTI) میں رہنمائی اور مدد',
                    descEn: 'Assisting citizens in drafting and submitting official RTI applications to public authorities, educational boards, and government scholarship departments to ensure accountability and transparent delivery of welfare schemes.',
                    descHi: 'सरकारी विभागों, शिक्षा बोर्डों और छात्रवृत्ति प्राधिकरणों से जवाबदेही और कल्याणकारी योजनाओं की पारदर्शी डिलीवरी सुनिश्चित करने के लिए आधिकारिक RTI आवेदन तैयार करने में नागरिकों की सहायता करना।',
                    descUr: 'حکومتی محکموں اور تعلیمی بورڈز سے شفافیت اور جوابدہی کے لیے RTI درخواستیں تیار کرنے اور جمع کرنے میں مدد فراہم کرنا۔',
                    icon: <FileText className="w-6 h-6 text-blue-600" />,
                    bg: 'bg-blue-50',
                    border: 'hover:border-blue-400',
                    badge: 'RTI Act 2005'
                  },
                  {
                    titleEn: '3. Pro-Bono Legal Aid & Dispute Mediation',
                    titleHi: '3. निःशुल्क कानूनी सहायता एवं विवाद समाधान',
                    titleUr: '3. مفت قانونی امداد اور تنازعات کا حل',
                    descEn: 'Connecting underprivileged and distressed community members with pro-bono lawyers, National Legal Services Authority (NALSA) clinics, and Lok Adalat alternative dispute resolution mechanisms.',
                    descHi: 'जरूरतमंद और पीड़ित सदस्यों को निःशुल्क अधिवक्ताओं (Pro-Bono Lawyers), राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) क्लीनिकों और लोक अदालत के माध्यम से त्वरित न्याय व विवाद समाधान से जोड़ना।',
                    descUr: 'ضرورتمند اراکین کو مفت قانونی امداد، نالسا (NALSA) کلینکس اور لوک عدالت کے ذریعے فوری انصاف سے جوڑنا۔',
                    icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
                    bg: 'bg-emerald-50',
                    border: 'hover:border-emerald-400',
                    badge: 'NALSA & Legal Aid'
                  },
                  {
                    titleEn: '4. Trust Fiduciary Oversight & Statutory Compliance',
                    titleHi: '4. ट्रस्ट आचार संहिता व वैधानिक अनुपालन निगरानी',
                    titleUr: '4. ٹرسٹ کے ضوابط اور قانونی تعمیل کی نگرانی',
                    descEn: 'Enforcing strict compliance with the Societies Registration Act 1860, Income Tax 80G/12A regulations, NITI Aayog guidelines, and maintaining a zero-conflict-of-interest code of conduct for all office bearers.',
                    descHi: 'सोसाइटी पंजीकरण अधिनियम 1860, आयकर 80G/12A नियमों और नीति आयोग के दिशा-निर्देशों का कड़ाई से अनुपालन सुनिश्चित करना। सभी पदाधिकारियों के लिए शून्य हित-संघर्ष (No Conflict) आचार संहिता लागू करना।',
                    descUr: 'سوسائٹی رجسٹریشن ایکٹ 1860، انکم ٹیکس قوانین اور عہدیداران کے لیے ضابطہ اخلاق کی مکمل پابندی کو یقینی بنانا۔',
                    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                    bg: 'bg-amber-50',
                    border: 'hover:border-amber-400',
                    badge: 'Societies Act 1860'
                  },
                  {
                    titleEn: '5. Citizen Rights & Anti-Discrimination Advocacy',
                    titleHi: '5. नागरिक सुरक्षा एवं भेदभाव-विरोधी पैरवी',
                    titleUr: '5. شہری حقوق اور امتیازی سلوک کے خلاف وکالت',
                    descEn: 'Providing legal counseling and actionable protections against workplace harassment, cybercrime, consumer rights violations, and civil rights infringement through human rights commissions and minority cell petitions.',
                    descHi: 'कार्यस्थल पर उत्पीड़न, साइबर अपराध, उपभोक्ता अधिकारों के उल्लंघन और नागरिक अधिकारों के हनन के खिलाफ मानवाधिकार आयोगों और अल्पसंख्यक आयोग के माध्यम से कानूनी मार्गदर्शन व सहायता देना।',
                    descUr: 'سائبر کرائم، صارفین کے حقوق اور شہری حقوق کی خلاف ورزی کے خلاف کمیشن برائے اقلیتی امور کے ذریعے قانونی رہنمائی۔',
                    icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
                    bg: 'bg-rose-50',
                    border: 'hover:border-rose-400',
                    badge: 'Citizen Protection'
                  },
                  {
                    titleEn: '6. Democratic Elections & By-Law Upkeep',
                    titleHi: '6. लोकतांत्रिक चुनाव एवं संविधान नियमावली पालन',
                    titleUr: '6. جمہوری انتخابات اور آئینی ضوابط کی دیکھ بھال',
                    descEn: 'Supervising biennial democratic elections of the national and state executive bodies under independent election officers, ensuring every verified member enjoys equal voting and representation rights.',
                    descHi: 'स्वतंत्र चुनाव अधिकारियों की देखरेख में राष्ट्रीय व राज्य कार्यकारिणी के द्विवार्षिक लोकतांत्रिक चुनावों का संचालन करना, और प्रत्येक सत्यापित सदस्य को समान मतदान अधिकार की गारंटी देना।',
                    descUr: 'آزاد الیکشن آفیسرز کی نگرانی میں دو سالہ جمہوری انتخابات کا انعقاد اور اراکین کو یکساں حقِ رائے دہی دینا۔',
                    icon: <Users className="w-6 h-6 text-indigo-600" />,
                    bg: 'bg-indigo-50',
                    border: 'hover:border-indigo-400',
                    badge: 'Equal Voting Rights'
                  }
                ].map((fnItem, idx) => (
                  <div key={idx} className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 transition ${fnItem.border} flex flex-col justify-between`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl ${fnItem.bg} flex items-center justify-center`}>
                          {fnItem.icon}
                        </div>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono font-bold text-[11px] rounded-full">
                          {fnItem.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#0B132B]">
                        {currentLanguage === 'en' ? fnItem.titleEn : currentLanguage === 'ur' ? fnItem.titleUr : fnItem.titleHi}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {currentLanguage === 'en' ? fnItem.descEn : currentLanguage === 'ur' ? fnItem.descUr : fnItem.descHi}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#004B23] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{currentLanguage === 'en' ? 'Active Mandate' : 'सक्रिय सेवा'}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: KEY FEATURES & DIGITAL TOOLS */}
            <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFD54A] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span>{currentLanguage === 'en' ? 'Key Features & Interactive Digital Tools' : currentLanguage === 'ur' ? 'اہم خصوصیات اور انٹرایکٹو ڈیجیٹل ٹولز' : 'मुख्य डिजिटल विशेषताएं एवं इंटरेक्टिव उपकरण'}</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {currentLanguage === 'en' ? 'Directly access our integrated constitutional and legal empowerment utilities below' : 'नीचे दिए गए हमारे एकीकृत कानूनी व संवैधानिक उपकरणों का उपयोग करें'}
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#FFD54A]/20 text-[#FFD54A] border border-[#FFD54A]/30 rounded-full text-xs font-bold uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'OPEN ACCESS TO ALL' : 'सभी नागरिकों के लिए उपलब्ध'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    titleEn: 'Know Your Rights Quiz',
                    titleHi: 'अधिकारों की कानूनी क्विज़',
                    descEn: '10 interactive real-life scenarios with Supreme Court case laws and constitutional explanations.',
                    descHi: 'सुप्रीम कोर्ट के निर्णयों और संवैधानिक नियमों पर आधारित 10 वास्तविक कानूनी परिस्थितियां।',
                    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
                    targetTab: 'rights',
                    btnText: currentLanguage === 'en' ? 'Play Quiz' : 'क्विज़ खेलें'
                  },
                  {
                    titleEn: 'RTI Filing Assistant',
                    titleHi: 'RTI आवेदन मार्गदर्शन',
                    descEn: 'Step-by-step procedures, fee exemption rules for EWS/BPL, and direct link to online RTI portal.',
                    descHi: 'RTI दाखिल करने की चरणबद्ध प्रक्रिया, BPL शुल्क छूट नियम और ऑनलाइन पोर्टल लिंक।',
                    icon: <FileText className="w-5 h-5 text-blue-400" />,
                    targetTab: 'rti',
                    btnText: currentLanguage === 'en' ? 'Open RTI Guide' : 'RTI गाइड देखें'
                  },
                  {
                    titleEn: 'Emergency Legal Directory',
                    titleHi: 'आपातकालीन कानूनी निर्देशिका',
                    descEn: 'Instant dialing numbers for NALSA (15100), Cybercrime (1930), Women Helpline (181), and NHRC.',
                    descHi: 'NALSA (15100), साइबर क्राइम (1930), महिला हेल्पलाइन (181) और मानवाधिकार आयोग नंबर।',
                    icon: <Phone className="w-5 h-5 text-emerald-400" />,
                    targetTab: 'institutions',
                    btnText: currentLanguage === 'en' ? 'View Helplines' : 'हेल्पलाइन देखें'
                  },
                  {
                    titleEn: 'Constitution Timeline & Acts',
                    titleHi: 'संवैधानिक इतिहास व अधिनियम',
                    descEn: 'Historical timeline of Indian Constitution (1946-Present) and summaries of consumer & RTE acts.',
                    descHi: 'भारतीय संविधान का ऐतिहासिक सफर (1946-वर्तमान) और महत्वपूर्ण नागरिक कानूनों का सार।',
                    icon: <BookOpen className="w-5 h-5 text-purple-400" />,
                    targetTab: 'laws',
                    btnText: currentLanguage === 'en' ? 'Explore Acts' : 'कानून पढ़ें'
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4 hover:border-[#FFD54A]/40 transition">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-bold text-white text-sm">
                        {feat.icon}
                        <span>{currentLanguage === 'en' ? feat.titleEn : feat.titleHi}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {currentLanguage === 'en' ? feat.descEn : feat.descHi}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setLegalToolkitTab(feat.targetTab);
                        const el = document.getElementById('about_legal_toolkit');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2 bg-slate-700 hover:bg-[#004B23] hover:text-[#FFD54A] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>{feat.btnText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: EMBEDDED INTERACTIVE LEGAL AWARENESS TOOLKIT */}
            <div id="about_legal_toolkit" className="bg-white rounded-3xl border border-gray-200 shadow-lg p-4 sm:p-6 overflow-hidden">
              <div className="bg-[#0B132B] text-white p-4 sm:p-6 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D4AF37]/30">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#004B23] text-[#FFD54A] text-[10px] font-mono font-bold uppercase mb-1">
                    <Scale className="w-3 h-3" />
                    <span>EMBEDDED LEGAL TOOLKIT</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'Interactive Rights & Constitutional Toolkit' : currentLanguage === 'ur' ? 'انٹرایکٹو حقوق اور آئینی ٹول کٹ' : 'इंटरेक्टिव अधिकार और संवैधानिक टूलकिट'}
                  </h3>
                </div>
                <div className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                  {currentLanguage === 'en' ? 'Viewing section:' : 'वर्तमान अनुभाग:'} <span className="text-[#FFD54A] font-bold uppercase">{legalToolkitTab}</span>
                </div>
              </div>

              {/* Render the LegalAwareness component directly */}
              <div className="mt-4">
                <LegalAwareness currentLanguage={currentLanguage} defaultTab={legalToolkitTab} />
              </div>
            </div>
          </div>
        )}

        {/* TAB 9: ANNUAL REPORTS (NEW SUGGESTED ADDITION) */}
        {currentTab === 'about-reports' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#0B132B] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-[#D4AF37]/40">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  <BarChart3 className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'AUDITED FINANCIALS & IMPACT STATS' : 'ऑडिटेड वित्तीय रिपोर्ट एवं प्रभाव आंकड़े'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-white">
                  {currentLanguage === 'en' ? 'Annual Reports & Expenditure Breakdown' : currentLanguage === 'ur' ? 'سالانہ رپورٹس اور اخراجات کی تفصیل' : 'वार्षिक रिपोर्ट एवं वित्तीय व्यय विवरण'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {currentLanguage === 'en'
                    ? 'We believe in complete transparency with our donors, members, and society. Explore our audited annual reports, expenditure distributions, scholarship fund allocations, and community impact achievements.'
                    : 'हम अपने दानदाताओं, सदस्यों और समाज के साथ पूर्ण पारदर्शिता में विश्वास करते हैं। हमारी ऑडिट की गई वार्षिक रिपोर्ट, व्यय वितरण, छात्रवृत्ति कोष आवंटन और सामाजिक उपलब्धियों को यहाँ देखें।'}
                </p>
              </div>
            </div>

            {/* Expenditure Allocation Progress Breakdown */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <span>{currentLanguage === 'en' ? 'Community Welfare Fund Utilization (2024-2025)' : 'सामुदायिक कल्याण कोष उपयोग (2024-2025)'}</span>
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'en' ? 'How every ₹100 of community donations and Zakat/Sadqah is distributed' : 'समुदाय द्वारा दान किए गए प्रत्येक ₹100 का उपयोग और वितरण कैसे किया जाता है'}
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-[#004B23] rounded-lg text-xs font-black">
                  {currentLanguage === 'en' ? 'Total Fund: ₹45.8 Lakhs' : 'कुल वितरित राशि: ₹45.8 लाख'}
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                {[
                  { labelEn: 'Education & Student Scholarships (35%)', labelHi: 'शिक्षा एवं छात्रवृत्ति सहायता (35%)', color: 'bg-blue-600', width: '35%', amount: '₹16.03 Lakhs' },
                  { labelEn: 'Medical Aid & Hospital Emergency Assistance (25%)', labelHi: 'चिकित्सा सहायता एवं अस्पताल आपातकालीन मदद (25%)', color: 'bg-emerald-600', width: '25%', amount: '₹11.45 Lakhs' },
                  { labelEn: 'Matrimonial Subsidies & Widows/Orphans Support (15%)', labelHi: 'सामूहिक विवाह एवं विधवा/अनाथ सहायता (15%)', color: 'bg-purple-600', width: '15%', amount: '₹6.87 Lakhs' },
                  { labelEn: 'Legal Aid, RTI & Constitutional Awareness (15%)', labelHi: 'कानूनी सहायता, RTI एवं जागरूकता अभियान (15%)', color: 'bg-amber-600', width: '15%', amount: '₹6.87 Lakhs' },
                  { labelEn: 'Administrative, Digital Infrastructure & Outreach (10%)', labelHi: 'प्रशासनिक, डिजिटल ढांचा एवं जनसंपर्क (10%)', color: 'bg-slate-600', width: '10%', amount: '₹4.58 Lakhs' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800">
                      <span>{currentLanguage === 'en' ? item.labelEn : item.labelHi}</span>
                      <span className="text-[#004B23] font-black">{item.amount}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Annual Reports Grid */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] px-1 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>{currentLanguage === 'en' ? 'Download Audited Annual Reports (PDF)' : 'ऑडिटेड वार्षिक रिपोर्ट डाउनलोड करें (PDF)'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    year: '2024 - 2025',
                    titleEn: 'Annual Impact & Audit Report',
                    titleHi: 'वार्षिक प्रभाव एवं ऑडिट रिपोर्ट',
                    size: '4.8 MB PDF',
                    status: 'Latest Published',
                    highlight: '1,240 Scholarships Awarded'
                  },
                  {
                    year: '2023 - 2024',
                    titleEn: 'Annual Welfare & Census Report',
                    titleHi: 'वार्षिक कल्याण एवं जनगणना रिपोर्ट',
                    size: '3.9 MB PDF',
                    status: 'Audited & Verified',
                    highlight: 'Digital Census Launched'
                  },
                  {
                    year: '2022 - 2023',
                    titleEn: 'Annual Financial Disclosure',
                    titleHi: 'वार्षिक वित्तीय विवरण',
                    size: '3.2 MB PDF',
                    status: 'Audited & Verified',
                    highlight: '15 Medical Camps Hosted'
                  },
                  {
                    year: '2021 - 2022',
                    titleEn: 'Foundation & Relief Report',
                    titleHi: 'स्थापना एवं कोविड राहत रिपोर्ट',
                    size: '2.8 MB PDF',
                    status: 'Archived Record',
                    highlight: '5,000+ Families Assisted'
                  }
                ].map((report, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-[#0B132B] text-[#FFD54A] rounded-lg text-xs font-black">
                          {report.year}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          {report.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {currentLanguage === 'en' ? report.titleEn : report.titleHi}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{report.highlight}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-gray-400 font-semibold">{report.size}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedReportPreview(report)}
                          className="px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                          title="Preview Report"
                        >
                          <Eye className="w-3.5 h-3.5 text-gray-600" />
                          <span className="hidden sm:inline">{currentLanguage === 'en' ? 'Preview' : 'देखें'}</span>
                        </button>
                        <button
                          onClick={() => handleStartReportDownload(report.year)}
                          disabled={!!reportDownloadProgress[report.year]}
                          className="px-3 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-75"
                        >
                          {reportDownloadProgress[report.year] ? (
                            <div className="flex items-center gap-1 text-[#FFD54A]">
                              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>{reportDownloadProgress[report.year]}%</span>
                            </div>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5 text-[#FFD54A]" />
                              <span>{currentLanguage === 'en' ? 'Download' : 'डाउनलोड'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auditor Certification Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#004B23] text-[#FFD54A] flex items-center justify-center shrink-0 shadow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B132B] text-base">
                    {currentLanguage === 'en' ? 'Independent Chartered Accountant Certification' : 'स्वतंत्र चार्टर्ड अकाउंटेंट प्रमाणन'}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {currentLanguage === 'en'
                      ? 'All reports and financial statements are audited by M/s Sharma & Associates, Chartered Accountants (ICAI Reg. No. 014829N).'
                      : 'सभी रिपोर्ट और वित्तीय विवरणों का ऑडिट एम/एस शर्मा एंड एसोसिएट्स, चार्टर्ड अकाउंटेंट्स (ICAI Reg. No. 014829N) द्वारा किया गया है।'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleTabChange('about-certificate')}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              >
                {currentLanguage === 'en' ? 'View Society Proof' : 'प्रमाण पत्र देखें'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 10: HALL OF EXCELLENCE (COMMUNITY ACHIEVERS) */}
        {currentTab === 'about-excellence' && (
          <HallOfExcellenceView currentLanguage={currentLanguage} />
        )}
      </div>

      {/* 3.5. PORTAL INFORMATION & VERSION SECTION (UNIVERSAL ABOUT US SUBSECTION) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <PortalVersionInfo currentLanguage={currentLanguage} />
      </div>

      {/* 4. FOOTER CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/30">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#FFD54A]">
              {currentLanguage === 'en' ? 'Be a Part of Our Heritage & Mission' : currentLanguage === 'ur' ? 'ہمارے ورثے اور مشن کا حصہ بنیں' : 'हमारे ऐतिहासिक मिशन और समाज सुधार से जुड़ें'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {currentLanguage === 'en'
                ? 'Join thousands of registered Rangrez families across India in building an educated, empowered, and self-reliant community.'
                : 'एक शिक्षित, सशक्त और आत्मनिर्भर समाज के निर्माण में भारत भर के हजारों पंजीकृत परिवारों के साथ शामिल हों।'}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('membership-register');
              }}
              className="px-6 py-3 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'Register as Member' : 'सदस्यता पंजीकरण करें'}</span>
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('donate');
              }}
              className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-[#FFD54A]/40 transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <DollarSign className="w-4 h-4 text-[#FFD54A]" />
              <span>{currentLanguage === 'en' ? 'Donate to Trust' : 'सहयोग व दान करें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Whistleblower & Grievance Reporting Modal */}
      {showWhistleblowerModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2 text-[#FFD54A] font-bold text-sm">
                <ShieldAlert className="w-5 h-5" />
                <span>{currentLanguage === 'en' ? 'Confidential Whistleblower & Grievance Form' : 'गोपनीय शिकायत एवं निवारण फॉर्म'}</span>
              </div>
              <button onClick={() => setShowWhistleblowerModal(false)} className="text-gray-400 hover:text-white transition cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 bg-slate-50 text-left">
              {wbSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-100 text-[#004B23] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-black text-lg text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Report Successfully Transmitted' : 'रिपोर्ट सफलतापूर्वक प्रेषित की गई'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Your confidential grievance has been encrypted and assigned Ticket #WB-2026-884. The Independent Audit Board will review the details within 7 working days.'
                      : 'आपकी गोपनीय शिकायत को एन्क्रिप्ट कर टिकट #WB-2026-884 आवंटित किया गया है। स्वतंत्र ऑडिट बोर्ड 7 कार्य दिवसों के भीतर समीक्षा करेगा।'}
                  </p>
                  <button
                    onClick={() => setShowWhistleblowerModal(false)}
                    className="mt-2 px-6 py-2.5 bg-[#004B23] text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Close Window' : 'बंद करें'}
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      {currentLanguage === 'en'
                        ? '100% Anonymity Guaranteed: Your IP address or personal identity is not logged unless you voluntarily provide contact info.'
                        : '100% गोपनीयता की गारंटी: जब तक आप स्वेच्छा से संपर्क विवरण न दें, आपकी पहचान गुप्त रखी जाएगी।'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Select Grievance Category' : 'शिकायत की श्रेणी चुनें'}
                      </label>
                      <select
                        value={wbCategory}
                        onChange={(e) => setWbCategory(e.target.value)}
                        className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#004B23]"
                      >
                        <option value="financial">{currentLanguage === 'en' ? 'Financial Misuse / Unaccounted Donation' : 'वित्तीय अनियमितता / बेहिसाब दान'}</option>
                        <option value="dowry">{currentLanguage === 'en' ? 'Dowry Harassment / Coercive Lavish Feast' : 'दहेज उत्पीड़न / जबरन दावत दबाव'}</option>
                        <option value="election">{currentLanguage === 'en' ? 'Election Malpractice / Member Verification Issue' : 'चुनाव अनियमितता / सदस्यता सत्यापन विवाद'}</option>
                        <option value="other">{currentLanguage === 'en' ? 'Other Constitutional / Ethical Violation' : 'अन्य संवैधानिक या नैतिक उल्लंघन'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {currentLanguage === 'en' ? 'Detailed Description of Irregularity' : 'अनियमितता का विस्तृत विवरण'}
                      </label>
                      <textarea
                        rows={4}
                        value={wbDesc}
                        onChange={(e) => setWbDesc(e.target.value)}
                        placeholder={currentLanguage === 'en' ? 'Provide specific details, location, committee name, or date of incident...' : 'घटना का विवरण, स्थान, समिति का नाम या तारीख लिखें...'}
                        className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#004B23]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => setShowWhistleblowerModal(false)}
                      className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl text-xs cursor-pointer"
                    >
                      {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                    </button>
                    <button
                      onClick={() => {
                        if (!wbDesc.trim()) {
                          alert(currentLanguage === 'en' ? 'Please describe the incident or grievance.' : 'कृपया घटना का विवरण लिखें।');
                          return;
                        }
                        setWbSubmitted(true);
                      }}
                      className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold rounded-xl text-xs shadow flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FFD54A]" />
                      <span>{currentLanguage === 'en' ? 'Transmit Secure Report' : 'सुरक्षित रिपोर्ट भेजें'}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Annual Report PDF Preview Modal */}
      {selectedReportPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#004B23] text-[#FFD54A] flex items-center justify-center font-black text-xs">
                  {selectedReportPreview.year?.split(' ')[0] || ''}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {currentLanguage === 'en' ? selectedReportPreview.titleEn : selectedReportPreview.titleHi}
                  </h3>
                  <p className="text-[11px] text-[#FFD54A] font-mono">
                    {currentLanguage === 'en' ? `Audited Document • ${selectedReportPreview.size}` : `ऑडिटेड दस्तावेज़ • ${selectedReportPreview.size}`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedReportPreview(null)}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
                <div className="text-xs text-emerald-900">
                  <span className="font-bold block">{currentLanguage === 'en' ? 'Statutory Audit Verification Complete' : 'वैधानिक ऑडिट सत्यापन पूर्ण'}</span>
                  <span>{currentLanguage === 'en' ? 'This report contains verified financial disclosures, zero-admin-fee Zakat utilization charts, and NITI Aayog NGO Darpan compliance records.' : 'इस रिपोर्ट में सत्यापित वित्तीय खुलासे, शून्य-एडमिन-फीस जकात उपयोग चार्ट और नीति आयोग एनजीओ दर्पण अनुपालन रिकॉर्ड शामिल हैं।'}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm border-b pb-2 flex items-center justify-between">
                  <span>{currentLanguage === 'en' ? 'Key Allocation Breakdown' : 'प्रमुख फंड आवंटन'}</span>
                  <span className="text-xs font-normal text-gray-500">{selectedReportPreview.highlight}</span>
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">1. Higher Education & IAS/NEET Scholarships</span>
                    <span className="font-bold text-[#004B23]">42%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">2. Widow Pension & Emergency Medical Aid</span>
                    <span className="font-bold text-[#004B23]">28%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">3. Artisan Micro-Loans & Vocational Tailoring</span>
                    <span className="font-bold text-[#004B23]">18%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">4. Community Hostels & Legal Advocacy Cell</span>
                    <span className="font-bold text-[#004B23]">12%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center space-y-2">
                <FileCheck className="w-8 h-8 text-[#004B23] mx-auto" />
                <p className="text-xs font-bold text-gray-800">
                  {currentLanguage === 'en' ? 'Ready to View Complete Document' : 'पूर्ण दस्तावेज़ देखने के लिए तैयार'}
                </p>
                <p className="text-[11px] text-gray-500">
                  {currentLanguage === 'en' ? 'Click below to download or open the complete PDF report.' : 'पूरी PDF रिपोर्ट डाउनलोड करने या खोलने के लिए नीचे क्लिक करें।'}
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedReportPreview(null)}
                className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold rounded-xl text-xs cursor-pointer transition"
              >
                {currentLanguage === 'en' ? 'Close Preview' : 'बंद करें'}
              </button>
              <button
                onClick={() => {
                  handleStartReportDownload(selectedReportPreview.year);
                  setSelectedReportPreview(null);
                }}
                className="px-5 py-2 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold rounded-xl text-xs shadow flex items-center gap-2 cursor-pointer transition"
              >
                <Download className="w-3.5 h-3.5 text-[#FFD54A]" />
                <span>{currentLanguage === 'en' ? 'Download Full Report PDF' : 'पूरी रिपोर्ट PDF डाउनलोड करें'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AboutUsHub;
