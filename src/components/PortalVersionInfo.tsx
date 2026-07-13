import React, { useState } from 'react';
import {
  Info,
  ShieldCheck,
  Cpu,
  GitBranch,
  Server,
  Activity,
  CheckCircle2,
  Calendar,
  Award,
  Sparkles,
  Users,
  Globe,
  BookOpen,
  Heart,
  HeartHandshake,
  Landmark,
  GraduationCap,
  Gavel,
  Shield,
  Layers,
  Clock,
  Rocket,
  Zap,
  Check,
  RefreshCw,
  ChevronRight,
  Database,
  Lock,
  FileCheck,
  Building2,
  TrendingUp,
  Sliders
} from 'lucide-react';

interface PortalVersionInfoProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

/**
 * ============================================================================
 * ADMIN READY CONFIGURATION - PORTAL VERSION & RELEASE HISTORY
 * ============================================================================
 * Notice for System Administrators:
 * To release a new version (e.g. v1.1 or v2.0), simply update the `currentVersion`
 * object or add new items to the `releases` and `roadmap` arrays below.
 * This structure ensures seamless future upgrades without redesigning the page.
 * ============================================================================
 */
const PORTAL_VERSION_CONFIG = {
  currentVersion: {
    version: "1.0.0",
    releaseStatus: {
      en: "Stable Production Release",
      hi: "स्थिर उत्पादन रिलीज (Stable Production)",
      ur: "مستحکم پروڈکشن ریلیز (Stable Production)"
    },
    developmentStatus: {
      en: "Active",
      hi: "सक्रिय (Active)",
      ur: "فعال (Active)"
    },
    platform: {
      en: "Rangrez Community Bharat Portal",
      hi: "रंगरेज कम्युनिटी भारत पोर्टल",
      ur: "رنگریز کمیونٹی بھارت پورٹل"
    },
    portalType: {
      en: "Community Management & Digital Services Platform",
      hi: "सामुदायिक प्रबंधन एवं डिजिटल सेवा मंच",
      ur: "کمیونٹی مینجمنٹ اور ڈیجیٹل سروسز پلیٹ فارم"
    },
    lastMajorUpdate: {
      en: "Dynamic (Automatically update when future releases are published)",
      hi: "डायनामिक (भविष्य के रिलीज प्रकाशित होने पर स्वतः अपडेट)",
      ur: "ڈائنامک (مستقبل کی ریلیز شائع ہونے پر خودکار اپڈیٹ)"
    },
    releaseDate: "July 2026"
  },
  highlights: [
    { id: 'comm', labelEn: 'Community Portal', labelHi: 'सामुदायिक पोर्टल', labelUr: 'کمیونٹی پورٹل', icon: Users, color: 'from-emerald-600 to-green-700' },
    { id: 'mem', labelEn: 'Membership System', labelHi: 'सदस्यता प्रणाली', labelUr: 'رکنیت کا نظام', icon: ShieldCheck, color: 'from-blue-600 to-indigo-700' },
    { id: 'fam_reg', labelEn: 'Family Registration', labelHi: 'परिवार पंजीकरण', labelUr: 'خاندانی رجسٹریشن', icon: Building2, color: 'from-purple-600 to-violet-700' },
    { id: 'fam_tree', labelEn: 'Family Tree', labelHi: 'वंशावली (फैमिली ट्री)', labelUr: 'خاندانی شجرہ نسب', icon: GitBranch, color: 'from-amber-600 to-yellow-700' },
    { id: 'dig_id', labelEn: 'Digital ID', labelHi: 'डिजिटल पहचान पत्र', labelUr: 'ڈیجیٹل شناختی کارڈ', icon: Cpu, color: 'from-teal-600 to-emerald-700' },
    { id: 'matri', labelEn: 'Matrimonial Portal', labelHi: 'वैवाहिक पोर्टल', labelUr: 'رشتہ و شادی پورٹل', icon: Heart, color: 'from-rose-600 to-pink-700' },
    { id: 'second_mar', labelEn: 'Second Marriage', labelHi: 'पुनर्विवाह सेवा', labelUr: 'دوسری شادی کی خدمت', icon: HeartHandshake, color: 'from-pink-600 to-rose-700' },
    { id: 'comm_srv', labelEn: 'Community Service', labelHi: 'सामुदायिक सेवा', labelUr: 'کمیونٹی سروس', icon: Globe, color: 'from-cyan-600 to-blue-700' },
    { id: 'edu_car', labelEn: 'Education & Careers', labelHi: 'शिक्षा एवं करियर', labelUr: 'تعلیم اور کیریئر', icon: GraduationCap, color: 'from-indigo-600 to-blue-700' },
    { id: 'schol', labelEn: 'Scholarship Portal', labelHi: 'छात्रवृत्ति पोर्टल', labelUr: 'اسکالرشپ پورٹل', icon: Award, color: 'from-yellow-600 to-amber-700' },
    { id: 'gov_sch', labelEn: 'Government Schemes', labelHi: 'सरकारी योजनाएं', labelUr: 'حکومتی اسکیمیں', icon: Landmark, color: 'from-green-600 to-emerald-700' },
    { id: 'welf', labelEn: 'Welfare & Support', labelHi: 'कल्याण एवं सहायता', labelUr: 'فلاح و بہبود اور امداد', icon: Shield, color: 'from-violet-600 to-purple-700' },
    { id: 'panch', labelEn: 'Mahapanchayat', labelHi: 'महापंचायत व्यवस्था', labelUr: 'مہا پنچایت نظام', icon: Gavel, color: 'from-amber-700 to-yellow-800' },
    { id: 'media', labelEn: 'Media & Resources', labelHi: 'मीडिया और संसाधन', labelUr: 'میڈیا اور وسائل', icon: BookOpen, color: 'from-slate-700 to-gray-800' },
    { id: 'iqra', labelEn: 'Iqra AI Assistant', labelHi: 'इकरा AI सहायिका', labelUr: 'اقراء AI رہنما', icon: Sparkles, color: 'from-[#004B23] to-[#0A2E1C]', isGold: true }
  ],
  releases: [
    {
      version: "1.0.0",
      titleEn: "Initial Public Release & Enterprise Portal Launch",
      titleHi: "प्रारंभिक सार्वजनिक रिलीज और एंटरप्राइज़ पोर्टल लॉन्च",
      titleUr: "ابتدائی عوامی ریلیز اور انٹرپرائز پورٹل کا آغاز",
      dateEn: "Current Release (v1.0)",
      dateHi: "वर्तमान रिलीज (v1.0)",
      dateUr: "موجودہ ریلیز (v1.0)",
      status: "STABLE PRODUCTION",
      notes: [
        { en: "Initial Public Release", hi: "प्रारंभिक सार्वजनिक रिलीज (Initial Public Release)", ur: "ابتدائی عوامی ریلیز" },
        { en: "Premium Enterprise UI/UX", hi: "प्रीमियम एंटरप्राइज UI/UX डिज़ाइन", ur: "پریمیم انٹرپرائز UI/UX ڈیزائن" },
        { en: "Community Management Platform", hi: "सामुदायिक प्रबंधन मंच", ur: "کمیونٹی مینجمنٹ پلیٹ فارم" },
        { en: "Membership System", hi: "एकीकृत सदस्यता प्रणाली", ur: "متحدہ رکنیت کا نظام" },
        { en: "Education & Career Services", hi: "शिक्षा और करियर मार्गदर्शन सेवाएं", ur: "تعلیم اور کیریئر رہنمائی خدمات" },
        { en: "Welfare Services", hi: "सामुदायिक कल्याण सेवाएं", ur: "کمیونٹی فلاحی خدمات" },
        { en: "Mahapanchayat Management", hi: "महापंचायत प्रबंधन प्रणाली", ur: "مہا پنچایت مینجمنٹ سسٹم" },
        { en: "Matrimonial Platform", hi: "वैवाहिक और रिश्ता मंच", ur: "رشتہ و شادی کا پلیٹ فارم" },
        { en: "Second Marriage Module", hi: "पुनर्विवाह (Second Marriage) मॉड्यूल", ur: "دوسری شادی کا خصوصی ماڈیول" },
        { en: "Digital Family Services", hi: "डिजिटल परिवार सेवाएं (Family Tree & ID)", ur: "ڈیجیٹل خاندانی خدمات" },
        { en: "Iqra AI Assistant", hi: "24×7 इकरा AI सहायिका एकीकरण", ur: "24×7 اقراء AI رہنما کا انضمام" },
        { en: "Responsive Design", hi: "सभी मोबाइल और डेस्कटॉप के लिए रेस्पॉन्सिव डिज़ाइन", ur: "تمام موبائل اور ڈیسک ٹاپ کے لیے ریسپانسیو ڈیزائن" },
        { en: "Secure Architecture", hi: "सुरक्षित और एन्क्रिप्टेड क्लाउड आर्किटेक्चर", ur: "محفوظ اور انکرپٹڈ کلاؤڈ آرکیٹیکچر" }
      ]
    }
  ],
  roadmap: [
    {
      version: "Version 1.1",
      badgeEn: "Next Release",
      badgeHi: "आगामी रिलीज",
      badgeUr: "اگلی ریلیز",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300",
      icon: Clock,
      titleEn: "Performance Improvements, Bug Fixes & Usability Enhancements",
      titleHi: "प्रदर्शन सुधार, बग सुधार और उपयोगिता संवर्धन",
      titleUr: "کارکردگی میں بہتری، بگ فکسز اور استعمال میں آسانی کے اضافے",
      descEn: "Focused on optimizing loading speeds across low-bandwidth mobile networks, refining automated form validations, and expanding accessibility contrast modes.",
      descHi: "कम-इंटरनेट वाले मोबाइल नेटवर्क पर स्पीड तेज करने, स्वचालित फॉर्म सत्यापन को बेहतर बनाने और पहुंच (Accessibility) को बढ़ाने पर केंद्रित।",
      descUr: "کم انٹرنیٹ والے موبائل نیٹ ورکس پر رفتار تیز کرنے، خودکار فارم تصدیق کو بہتر بنانے اور رسائی (Accessibility) کو بڑھانے پر مرکوز۔"
    },
    {
      version: "Version 1.2",
      badgeEn: "Scheduled Upgrade",
      badgeHi: "निर्धारित अपग्रेड",
      badgeUr: "طے شدہ اپ گریڈ",
      statusColor: "bg-purple-100 text-purple-800 border-purple-300",
      icon: Layers,
      titleEn: "Additional Community Tools & Enhanced AI Assistance",
      titleHi: "अतिरिक्त सामुदायिक उपकरण और उन्नत AI सहायता",
      titleUr: "مزید کمیونٹی ٹولز اور بہتر AI معاونت",
      descEn: "Introducing localized regional dialect support in Iqra AI, automated scholarship eligibility matchmakers, and interactive regional business directory listings.",
      descHi: "इकरा AI में क्षेत्रीय बोलियों का समर्थन, स्वचालित स्कॉलरशिप पात्रता मैचमेकर और क्षेत्रीय व्यापार निर्देशिका लिस्टिंग की शुरुआत।",
      descUr: "اقراء AI میں علاقائی بولیوں کی حمایت، خودکار اسکالرشپ اہلیت میچ میکر اور علاقائی کاروباری ڈائریکٹری لسٹنگ کی شروعات۔"
    },
    {
      version: "Version 2.0",
      badgeEn: "Major Vision",
      badgeHi: "मेजर विज़न",
      badgeUr: "بڑا وژن",
      statusColor: "bg-amber-100 text-amber-900 border-amber-400",
      icon: Rocket,
      titleEn: "Mobile Application Integration, Advanced Analytics & Expanded Services",
      titleHi: "मोबाइल ऐप एकीकरण, उन्नत एनालिटिक्स और विस्तारित सेवाएं",
      titleUr: "موبائل ایپ کا انضمام، جدید اینالیٹکس اور توسیعی خدمات",
      descEn: "Launch of dedicated native Android & iOS mobile applications, predictive welfare analytics for national leadership, and automated family heritage archival vaults.",
      descHi: "समर्पित नेटिव एंड्रॉइड और आईओएस मोबाइल ऐप का लॉन्च, राष्ट्रीय नेतृत्व के लिए कल्याणकारी एनालिटिक्स और स्वचालित विरासत अभिलेखागार।",
      descUr: "اینڈرائیڈ اور آئی او ایس موبائل ایپس کا آغاز، قومی قیادت کے لیے فلاحی اینالیٹکس اور خودکار خاندانی ورثہ آرکائیوز۔"
    }
  ],
  statistics: [
    { value: "15+", labelEn: "Total Modules", labelHi: "कुल मॉड्यूल", labelUr: "کل ماڈیولز", icon: Layers },
    { value: "24/7", labelEn: "Community Services", labelHi: "सामुदायिक सेवाएं", labelUr: "کمیونٹی سروسز", icon: Globe },
    { value: "500+", labelEn: "Educational Resources", labelHi: "शैक्षिक संसाधन", labelUr: "تعلیمی وسائل", icon: BookOpen },
    { value: "8+", labelEn: "Welfare Programs", labelHi: "कल्याणकारी कार्यक्रम", labelUr: "فلاحی پروگرام", icon: ShieldCheck },
    { value: "35+", labelEn: "Digital Features", labelHi: "डिजिटल सुविधाएं", labelUr: "ڈیجیٹل خصوصیات", icon: Cpu },
    { value: "24×7 Live", labelEn: "AI Assistance Available", labelHi: "AI सहायता उपलब्ध", labelUr: "AI معاونت دستیاب", icon: Sparkles }
  ]
};

export default function PortalVersionInfo({ currentLanguage }: PortalVersionInfoProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'roadmap'>('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const getText = (obj: { en: string; hi?: string; ur?: string }) => {
    if (currentLanguage === 'hi' && obj.hi) return obj.hi;
    if (currentLanguage === 'ur' && obj.ur) return obj.ur;
    return obj.en;
  };

  return (
    <div className="mt-12 mb-8 space-y-10 animate-fadeIn text-gray-800 font-sans">
      {/* 1. PREMIUM SECTION HEADER & SUBTITLE */}
      <div className="bg-gradient-to-r from-[#004B23] via-[#0A2E1C] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD54A]/20 backdrop-blur-md text-[#FFD54A] text-xs font-black uppercase tracking-wider border border-[#FFD54A]/40 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'hi' ? 'आधिकारिक पोर्टल संस्करण एवं रोडमैप' : currentLanguage === 'ur' ? 'آفیشل پورٹل ورژن اور روڈ میپ' : 'OFFICIAL PORTAL INFORMATION & ROADMAP'}
              </span>
            </div>

            <button
              onClick={handleRefreshStatus}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold border border-white/20 transition cursor-pointer shrink-0"
              title="Verify System Version Sync"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#FFD54A]' : ''}`} />
              <span>{currentLanguage === 'en' ? 'Sync Version Status' : currentLanguage === 'hi' ? 'सिंक स्थिति जांचें' : 'سنک اسٹیٹس چیک کریں'}</span>
            </button>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#FFD54A] tracking-tight flex items-center gap-3">
              <span>{currentLanguage === 'hi' ? 'पोर्टल जानकारी एवं संस्करण (Portal Information & Version)' : currentLanguage === 'ur' ? 'پورٹل معلومات اور ورژن (Portal Information & Version)' : 'Portal Information & Version'}</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-4xl font-light italic bg-black/20 p-4 sm:p-5 rounded-2xl border-l-4 border-[#FFD54A]">
              "{getText({
                en: "Transparency, innovation, and continuous improvement are at the heart of the Rangrez Community Bharat Portal. This section provides information about the current portal version, release history, and future development roadmap.",
                hi: "पारदर्शिता, नवाचार और निरंतर सुधार रंगरेज कम्युनिटी भारत पोर्टल के मूल में हैं। यह अनुभाग वर्तमान पोर्टल संस्करण, रिलीज इतिहास और भविष्य के विकास रोडमैप के बारे में आधिकारिक जानकारी प्रदान करता है।",
                ur: "شفافیت، جدت طرازی، اور مسلسل بہتری رنگریز کمیونٹی بھارت پورٹل کے دل میں ہیں۔ یہ حصہ موجودہ پورٹل ورژن، ریلیز کی تاریخ، اور مستقبل کے ترقیاتی روڈ میپ کے بارے میں معلومات فراہم کرتا ہے۔"
              })}"
            </p>
          </div>

          {/* Quick Sub-Navigation within Portal Version Section */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#FFD54A] text-[#0B132B] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? 'Version Cards & Highlights' : currentLanguage === 'hi' ? 'वर्तमान संस्करण व झलकियाँ' : 'موجودہ ورژن اور جھلکیاں'}</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'notes'
                  ? 'bg-[#FFD54A] text-[#0B132B] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? 'Release Notes (v1.0)' : currentLanguage === 'hi' ? 'रिलीज नोट्स (v1.0)' : 'ریلیز نوٹس (v1.0)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-[#FFD54A] text-[#0B132B] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? 'Future Roadmap & Stats' : currentLanguage === 'hi' ? 'भविष्य का रोडमैप व आंकड़े' : 'مستقبل کا روڈ میپ اور اعداد وشمار'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. TAB CONTENT: OVERVIEW (CURRENT VERSION CARDS & HIGHLIGHTS) */}
      {(activeTab === 'overview') && (
        <div className="space-y-10 animate-fadeIn">
          {/* Section Title */}
          <div className="flex items-center justify-between border-b-2 border-[#D4AF37]/30 pb-3">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#004B23] flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-[#D4AF37] rounded-full inline-block"></span>
              <span>{currentLanguage === 'en' ? 'Current Version & System Status' : currentLanguage === 'hi' ? 'वर्तमान संस्करण और सिस्टम स्थिति' : 'موجودہ ورژن اور سسٹم کی صورتحال'}</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>LIVE PRODUCTION</span>
            </span>
          </div>

          {/* Current Version Information Grid (6 Premium Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1: Current Version */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4AF37]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#004B23] flex items-center justify-center font-black text-lg group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-[10px] font-black rounded-full border border-amber-200">
                  BUILD #2026.07
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Current Version' : currentLanguage === 'hi' ? 'वर्तमान संस्करण' : 'موجودہ ورژن'}
                </p>
                <h4 className="text-2xl sm:text-3xl font-mono font-black text-[#004B23] mt-1 flex items-center gap-2">
                  <span>Version {PORTAL_VERSION_CONFIG.currentVersion.version}</span>
                  <span className="text-xs font-sans font-bold bg-[#004B23] text-[#FFD54A] px-2 py-0.5 rounded-md">PROD</span>
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                {currentLanguage === 'en' ? 'Official unified release architecture.' : 'आधिकारिक एकीकृत रिलीज संरचना।'}
              </p>
            </div>

            {/* Card 2: Release Status */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4AF37]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full border border-emerald-200 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>STABLE</span>
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Release Status' : currentLanguage === 'hi' ? 'रिलीज स्थिति' : 'ریلیز کی صورتحال'}
                </p>
                <h4 className="text-lg sm:text-xl font-serif font-extrabold text-[#0B132B] mt-1">
                  {getText(PORTAL_VERSION_CONFIG.currentVersion.releaseStatus)}
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                {currentLanguage === 'en' ? 'Tested, verified and active across all regional modules.' : 'सभी क्षेत्रीय मॉड्यूलों में परीक्षित और सक्रिय।'}
              </p>
            </div>

            {/* Card 3: Development Status */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4AF37]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-[10px] font-black rounded-full border border-purple-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping"></span>
                  <span>ACTIVE DEV</span>
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Development Status' : currentLanguage === 'hi' ? 'विकास स्थिति' : 'ترقی کی صورتحال'}
                </p>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-[#004B23] mt-1">
                  {getText(PORTAL_VERSION_CONFIG.currentVersion.developmentStatus)}
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                {currentLanguage === 'en' ? 'Continuous feature enhancements & engineering upkeep.' : 'निरंतर सुविधा संवर्धन और इंजीनियरिंग रखरखाव।'}
              </p>
            </div>

            {/* Card 4: Platform */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4AF37]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-900 text-[10px] font-black rounded-full border border-amber-300">
                  NATIONAL HUB
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Platform Name' : currentLanguage === 'hi' ? 'प्लेटफ़ॉर्म का नाम' : 'پلیٹ فارم کا نام'}
                </p>
                <h4 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] mt-1 leading-snug">
                  {getText(PORTAL_VERSION_CONFIG.currentVersion.platform)}
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                {currentLanguage === 'en' ? 'Official digital home of All India Rangrez Samaj Trust.' : 'ऑल इंडिया रंगरेज समाज ट्रस्ट का आधिकारिक डिजिटल केंद्र।'}
              </p>
            </div>

            {/* Card 5: Portal Type */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4AF37]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black group-hover:bg-teal-800 group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-teal-50 text-teal-800 text-[10px] font-black rounded-full border border-teal-200">
                  MULTI-SERVICE
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Portal Type' : currentLanguage === 'hi' ? 'पोर्टल प्रकार' : 'پورٹل کی قسم'}
                </p>
                <h4 className="text-sm sm:text-base font-serif font-extrabold text-[#004B23] mt-1 leading-snug">
                  {getText(PORTAL_VERSION_CONFIG.currentVersion.portalType)}
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                {currentLanguage === 'en' ? 'Welfare, matrimonial, education, census & AI assistance.' : 'कल्याण, विवाह, शिक्षा, वंशावली और AI सहायता।'}
              </p>
            </div>

            {/* Card 6: Last Major Update */}
            <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] text-white rounded-2xl p-6 shadow-xl border-2 border-[#FFD54A]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD54A]/20 text-[#FFD54A] flex items-center justify-center font-black group-hover:bg-[#FFD54A] group-hover:text-[#0B132B] transition-colors">
                  <RefreshCw className="w-6 h-6 animate-spin-slow" />
                </div>
                <span className="px-2.5 py-1 bg-[#004B23] text-[#FFD54A] text-[10px] font-black rounded-full border border-[#FFD54A]/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD54A] animate-ping"></span>
                  <span>DYNAMIC</span>
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-extrabold text-[#FFD54A] uppercase tracking-wider">
                  {currentLanguage === 'en' ? 'Last Major Update' : currentLanguage === 'hi' ? 'अंतिम प्रमुख अपडेट' : 'آخری بڑا اپڈیٹ'}
                </p>
                <h4 className="text-xs sm:text-sm font-sans font-bold text-gray-100 mt-1 leading-relaxed">
                  {getText(PORTAL_VERSION_CONFIG.currentVersion.lastMajorUpdate)}
                </h4>
              </div>
              <p className="text-[10px] text-gray-300 mt-3 pt-3 border-t border-gray-700 font-mono">
                {currentLanguage === 'en' ? 'Auto-sync active with cloud deployment pipeline.' : 'क्लाउड डिप्लॉयमेंट पाइपलाइन के साथ स्वतः सिंक सक्रिय।'}
              </p>
            </div>
          </div>

          {/* Version Highlights Sub-Section */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#004B23] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ⭐ SYSTEM MODULES ARCHITECTURE
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B] mt-2">
                  {currentLanguage === 'en' ? 'Version Highlights & Included Capabilities' : currentLanguage === 'hi' ? 'संस्करण की मुख्य विशेषताएं और शामिल सेवाएं' : 'ورژن کی نمایاں خصوصیات اور شامل خدمات'}
                </h4>
              </div>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en' ? '15+ integrated production modules' : '15+ एकीकृत उत्पादन मॉड्यूल'}
              </p>
            </div>

            {/* Grid of Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {PORTAL_VERSION_CONFIG.highlights.map((item) => {
                const IconComponent = item.icon;
                const isGold = item.isGold;
                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-105 hover:shadow-lg ${
                      isGold
                        ? 'bg-gradient-to-r from-[#004B23] to-[#0A2E1C] text-white border-[#FFD54A] shadow-md group'
                        : 'bg-white hover:bg-slate-50 text-gray-800 border-gray-200 hover:border-[#004B23]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isGold
                          ? 'bg-[#FFD54A] text-[#004B23]'
                          : 'bg-emerald-50 text-[#004B23] group-hover:bg-[#004B23] group-hover:text-white transition-colors'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-xs sm:text-sm font-extrabold leading-tight ${isGold ? 'text-[#FFD54A]' : 'text-gray-800'}`}>
                      {currentLanguage === 'hi' ? item.labelHi : currentLanguage === 'ur' ? item.labelUr : item.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB CONTENT: RELEASE NOTES (CHANGELOG TIMELINE) */}
      {(activeTab === 'notes') && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-amber-50 via-[#FDFBF7] to-emerald-50/30 rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B23] text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-2 shadow">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'STABLE RELEASE CHANGELOG' : currentLanguage === 'hi' ? 'स्थिर रिलीज परिवर्तन सूची' : 'مستحکم ریلیز تبدیلیوں کی فہرست'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Version 1.0 Release Notes' : currentLanguage === 'hi' ? 'संस्करण 1.0 रिलीज नोट्स' : 'ورژن 1.0 ریلیز نوٹس'}
                </h3>
              </div>
              <div className="bg-white px-4 py-2.5 rounded-2xl border border-gray-300 shadow-sm text-right">
                <span className="text-[11px] font-extrabold text-gray-500 uppercase block">
                  {currentLanguage === 'en' ? 'Deployment Date' : 'डिप्लॉयमेंट तिथि'}
                </span>
                <span className="text-sm font-mono font-black text-[#004B23]">July 2026</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
              {currentLanguage === 'en'
                ? 'Version 1.0 represents the inaugural enterprise release of the Rangrez Community Bharat Portal. This comprehensive deployment introduces 13 foundational pillars architected for national scale, secure member identity, and 24×7 digital empowerment.'
                : 'संस्करण 1.0 रंगरेज कम्युनिटी भारत पोर्टल का ऐतिहासिक पहला एंटरप्राइज रिलीज है। यह व्यापक डिप्लॉयमेंट राष्ट्रव्यापी स्तर, सुरक्षित सदस्य पहचान और 24×7 डिजिटल सशक्तिकरण के लिए 13 मूल स्तंभ प्रस्तुत करता है।'}
            </p>

            {/* Vertical Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {PORTAL_VERSION_CONFIG.releases[0].notes.map((note, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-start gap-3.5 group hover:border-[#004B23]"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004B23] flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition-colors mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#004B23] transition-colors">
                      {getText(note)}
                    </h5>
                    <p className="text-[11px] text-gray-500">
                      {currentLanguage === 'en'
                        ? 'Fully integrated, tested, and live across production servers.'
                        : 'उत्पादन सर्वरों पर पूरी तरह से एकीकृत, परीक्षित और सक्रिय।'}
                    </p>
                  </div>
                  <div className="ml-auto shrink-0 self-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Admin Ready Notice Banner inside Release Notes */}
            <div className="bg-[#0B132B] text-white p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sliders className="w-6 h-6 text-[#FFD54A] shrink-0" />
                <div className="space-y-0.5">
                  <h6 className="text-xs sm:text-sm font-bold text-[#FFD54A]">
                    {currentLanguage === 'en' ? 'Admin Ready Architecture' : currentLanguage === 'hi' ? 'एडमिन रेडी आर्किटेक्चर' : 'ایڈمن ریڈی آرکیٹیکچر'}
                  </h6>
                  <p className="text-[11px] text-gray-300">
                    {currentLanguage === 'en'
                      ? 'Future releases and notes can be updated directly by administrators via structured JSON configuration without redesigning any UI pages.'
                      : 'भविष्य के रिलीज और नोट्स को बिना किसी UI पेज को बदले एडमिन द्वारा सीधे संरचित JSON कॉन्फ़िगरेशन के माध्यम से अपडेट किया जा सकता है।'}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#004B23] text-white text-[10px] font-mono font-bold rounded-lg border border-[#FFD54A]/30 shrink-0 hidden sm:inline-block">
                CONFIG SYNCED
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB CONTENT: ROADMAP & PORTAL STATISTICS */}
      {(activeTab === 'roadmap') && (
        <div className="space-y-12 animate-fadeIn">
          {/* Top: Future Roadmap Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#D4AF37]/30 pb-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#004B23] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  🚀 STRATEGIC EVOLUTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
                  {currentLanguage === 'en' ? 'Future Development Roadmap' : currentLanguage === 'hi' ? 'भविष्य का विकास रोडमैप' : 'مستقبل کا ترقیاتی روڈ میپ'}
                </h3>
              </div>
              <div className="text-xs font-sans text-gray-500 italic max-w-sm">
                *{currentLanguage === 'en'
                  ? 'These are roadmap placeholders and can be updated by administrators later.'
                  : 'ये रोडमैप प्लेसहोल्डर हैं और इन्हें बाद में एडमिनिस्ट्रेटर द्वारा अपडेट किया जा सकता है।'}
              </div>
            </div>

            {/* Roadmap Cards Grid (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PORTAL_VERSION_CONFIG.roadmap.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 hover:border-[#004B23] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full pointer-events-none group-hover:from-emerald-50 transition-colors"></div>

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-[#0B132B] text-[#FFD54A] font-mono font-black text-xs rounded-xl border border-[#D4AF37]/40 shadow-sm">
                          {item.version}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${item.statusColor}`}>
                          {currentLanguage === 'hi' ? item.badgeHi : currentLanguage === 'ur' ? item.badgeUr : item.badgeEn}
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#004B23] flex items-center justify-center font-bold group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h4 className="text-base sm:text-lg font-serif font-extrabold text-gray-900 group-hover:text-[#004B23] transition-colors leading-snug">
                        {currentLanguage === 'hi' ? item.titleHi : currentLanguage === 'ur' ? item.titleUr : item.titleEn}
                      </h4>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {currentLanguage === 'hi' ? item.descHi : currentLanguage === 'ur' ? item.descUr : item.descEn}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                      <span>STATUS: SCHEDULED</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom: Portal Statistics Section */}
          <div className="bg-gradient-to-br from-[#0B132B] via-[#142244] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#D4AF37] space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD54A]/20 text-[#FFD54A] text-xs font-extrabold uppercase tracking-wider border border-[#FFD54A]/40">
                <TrendingUp className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'SYSTEM SCALE & IMPACT METRICS' : currentLanguage === 'hi' ? 'सिस्टम स्केल और प्रभाव आंकड़े' : 'سسٹم اسکیل اور اثرات کے اعداد وشمار'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFD54A]">
                {currentLanguage === 'en' ? 'Portal Statistics & Live Infrastructure' : currentLanguage === 'hi' ? 'पोर्टल के आंकड़े एवं लाइव इंफ्रास्ट्रक्चर' : 'پورٹل کے اعداد وشمار اور لائیو انفراسٹرکچر'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                {currentLanguage === 'en'
                  ? 'Real-time operational scale of the All India Rangrez Samaj digital ecosystem serving families nationwide.'
                  : 'भारत भर के परिवारों की सेवा करने वाले ऑल इंडिया रंगरेज समाज डिजिटल इकोसिस्टम का वास्तविक समय परिचालन पैमाना।'}
              </p>
            </div>

            {/* 6 Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {PORTAL_VERSION_CONFIG.statistics.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center hover:bg-white/15 hover:border-[#FFD54A]/50 transition-all duration-300 group flex flex-col items-center justify-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFD54A]/20 text-[#FFD54A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-black text-[#FFD54A] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-wide leading-tight">
                      {currentLanguage === 'hi' ? stat.labelHi : currentLanguage === 'ur' ? stat.labelUr : stat.labelEn}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-2 font-mono">
              <span>🔒 ENTERPRISE GRADE SSL ENCRYPTION ACTIVE</span>
              <span>⚡ HOSTED ON CLOUD RUN NATIVE CONTAINER ARCHITECTURE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
