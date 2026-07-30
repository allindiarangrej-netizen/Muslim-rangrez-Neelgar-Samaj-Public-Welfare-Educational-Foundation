import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Globe,
  Menu,
  X,
  Users,
  Heart,
  Gift,
  Home,
  Info,
  GraduationCap,
  Landmark,
  Newspaper,
  HeartHandshake,
  Award,
  ChevronDown,
  MoreHorizontal,
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Language } from '../types';
import { SocialButton, COMMUNITY_SOCIAL_URLS } from './common/SocialIcons';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
  onOpenArchitectureHub?: () => void;
  onOpenAI?: () => void;
}

export default function Header({
  currentLanguage,
  setLanguage,
  activeTab,
  setActiveTab,
  globalSearchQuery,
  setGlobalSearchQuery,
  onOpenArchitectureHub,
  onOpenAI,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getInitialLogoSrc = (): string => {
    try {
      const driveUrl = (import.meta as any).env.VITE_LOGO_GOOGLE_DRIVE_URL || 'https://drive.google.com/file/d/1OfD-ZUcnv0sRZyjNDCD8QMZlGI7T4vRP/view?usp=drivesdk';
      const idRegex = /(?:\/file\/d\/|id=)([\w-]+)/;
      const match = driveUrl.match(idRegex);
      if (match && match[1]) {
        return `https://lh3.googleusercontent.com/d/${match[1]}`;
      }
    } catch (e) {
      // fallback
    }
    return '/images/logo/logo.svg';
  };

  const [logoSrc, setLogoSrc] = useState<string>(getInitialLogoSrc);
  const [logoErrorCount, setLogoErrorCount] = useState<number>(0);

  const handleLogoError = () => {
    const driveUrl = (import.meta as any).env.VITE_LOGO_GOOGLE_DRIVE_URL || 'https://drive.google.com/file/d/1OfD-ZUcnv0sRZyjNDCD8QMZlGI7T4vRP/view?usp=drivesdk';
    const idRegex = /(?:\/file\/d\/|id=)([\w-]+)/;
    const match = driveUrl.match(idRegex);

    if (match && match[1]) {
      const fileId = match[1];
      if (logoErrorCount === 0) {
        setLogoSrc(`https://docs.google.com/uc?export=view&id=${fileId}`);
        setLogoErrorCount(1);
      } else {
        setLogoSrc('/images/logo/logo.svg');
        setLogoErrorCount(2);
      }
    } else {
      setLogoSrc('/images/logo/logo.svg');
    }
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick('home');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (globalSearchQuery.trim()) {
      setSearchExpanded(true);
    }
  }, [globalSearchQuery]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigationItems = [
    { id: 'home', labelEn: 'Home', labelHi: 'होम', labelUr: 'ہوم', icon: Home },
    {
      id: 'about',
      labelEn: 'About Us',
      labelHi: 'हमारे बारे में',
      labelUr: 'ہمارے بارے میں',
      icon: Info,
      subItems: [
        { id: 'about-history', labelEn: 'Community History', labelHi: 'बिरादरी की तारीख़', labelUr: 'برادری کی تاریخ' },
        { id: 'about-constitution', labelEn: 'Trust Constitution & By-Laws', labelHi: 'महासभा संविधान एवं नियमावली', labelUr: 'ٹرسٹ کا آئین اور ضوابط' },
        { id: 'about-vision', labelEn: 'Mission & Vision', labelHi: 'मक़सद और नज़रिया', labelUr: 'مشن اور مقصد' },
        { id: 'about-message', labelEn: "President's Message", labelHi: 'अध्यक्ष का संदेश', labelUr: 'صدر کا پیغام' },
        { id: 'trustees', labelEn: 'Founders & Board of Trustees', labelHi: 'संस्थापक और ट्रस्टी बोर्ड', labelUr: 'بانی اور بورڈ آف ٹرسٹیز' },
        { id: 'patrons', labelEn: 'Advisory Council & Patrons', labelHi: 'सलाहकार परिषद और संरक्षक', labelUr: 'مشاورتی کونسل اور سرپرست' },
        { id: 'executives', labelEn: 'National Executive Committee', labelHi: 'राष्ट्रीय कार्यकारी समिति', labelUr: 'قومی مجلس عاملہ' },
        { id: 'about-gallery', labelEn: '📸 Trust Office HD Image Gallery', labelHi: '📸 ट्रस्ट कार्यालय एचडी फोटो गैलरी', labelUr: '📸 ٹرسٹ آفس ایچ ڈی گیلری' },
      ]
    },
    {
      id: 'hall-of-excellence',
      labelEn: 'Hall of Excellence',
      labelHi: 'हॉल ऑफ एक्सीलेंस',
      labelUr: 'ہال آف ایکسیلنس',
      icon: Award,
      subItems: [
        { id: 'hall-of-excellence', labelEn: '🏆 Overview & Directory', labelHi: '🏆 मुख्य निर्देशिका एवं अवलोकन', labelUr: '🏆 اہم ڈائریکٹری اور جائزہ' },
        { id: 'hall-of-excellence-hajj', labelEn: '🕋 Hajiyon Ki Hall of Excellence', labelHi: '🕋 हाजियों का हॉल ऑफ एक्सीलेंस', labelUr: '🕋 حجاج کرام ہال آف ایکسیلنس' },
        { id: 'hall-of-excellence-diamond', labelEn: '💎 Diamond Tier (IAS/IPS/Judges)', labelHi: '💎 डायमंड एक्सीलेंस', labelUr: '💎 ڈائمنڈ ایکسیلنس' },
        { id: 'hall-of-excellence-platinum', labelEn: '🏆 Platinum Tier (Sr. Officers & Doctors)', labelHi: '🏆 प्लेटिनम एक्सीलेंस', labelUr: '🏆 پلاٹینم ایکسیلنس' },
        { id: 'hall-of-excellence-gold', labelEn: '🥇 Gold Tier (Engineers/Professors)', labelHi: '🥇 गोल्ड एक्सीलेंस', labelUr: '🥇 گولڈ ایکسیلنس' },
        { id: 'hall-of-excellence-silver', labelEn: '🥈 Silver Tier (Govt Staff/Emerging)', labelHi: '🥈 सिल्वर एक्सीलेंस', labelUr: '🥈 سلور ایکسیلنس' },
        { id: 'hall-of-excellence-bronze', labelEn: '🥉 Bronze Tier (Qualifiers & Recruits)', labelHi: '🥉 ब्रॉन्ज एक्सीलेंस', labelUr: '🥉 برونز ایکسیلنس' },
        { id: 'hall-of-excellence-rising', labelEn: '⭐ Rising Stars (Students & Medalists)', labelHi: '⭐ राइजिंग स्टार्स', labelUr: '⭐ رائزنگ اسٹارز' },
        { id: 'hall-of-excellence-leadership', labelEn: '🌟 Community Leadership', labelHi: '🌟 सामुदायिक नेतृत्व', labelUr: '🌟 سماجی قیادت' },
        { id: 'hall-of-excellence-lifetime', labelEn: '🎖 Lifetime Inspiration Legends', labelHi: '🎖 आजीवन प्रेरणा समाज रत्न', labelUr: '🎖 لائف ٹائم انسپیریشن' },
        { id: 'hall-of-excellence-nominate', labelEn: '📝 Nominate an Achiever / Haji', labelHi: '📝 नामांकित करें (अचीवर / हाजी)', labelUr: '📝 نامزدگی کیجئے' },
        { id: 'hall-of-excellence-stats', labelEn: '📊 Achievement Analytics & Stats', labelHi: '📊 उपलब्धि आंकड़े एवं विश्लेषण', labelUr: '📊 اعداد و شمار' },
        { id: 'hall-of-excellence-admin', labelEn: '🛡 Achiever Management Dashboard', labelHi: '🛡 अचीवर प्रबंधन डैशबोर्ड', labelUr: '🛡 انتظامیہ ڈیش بورڈ' },
      ]
    },
    {
      id: 'membership-matrimonial',
      labelEn: 'Community Portal',
      labelHi: 'सामुदायिक पोर्टल',
      labelUr: 'کمیونٹی پورٹل',
      icon: Users,
      subItems: [
        { id: 'areas', labelEn: 'Areas & Regional Directory', labelHi: 'इलाक़े और क्षेत्रीय निर्देशिका', labelUr: 'علاقے اور علاقائی ڈائریکٹری' },
        { id: 'portal', labelEn: 'Membership Dashboard & Portal', labelHi: 'सदस्यता डैशबोर्ड और पोर्टल', labelUr: 'رکنیت ڈیش بورڈ اور پورٹل' },
        { id: 'membership-register', labelEn: 'Member Registration', labelHi: 'सदस्य पंजीकरण', labelUr: 'رکن کا اندراج' },
        { id: 'membership-census', labelEn: 'Family Census & Registration', labelHi: 'खानदानी मर्दुमशुमारी और पंजीकरण', labelUr: 'خاندانی مردم شماری اور اندراج' },
        { id: 'membership-tree', labelEn: 'Family Tree Mapping', labelHi: 'पारिवारिक वंश वृक्ष (फैमिली ट्री)', labelUr: 'خاندانی شجرہ نسب' },
        { id: 'membership-id', labelEn: 'Digital ID Card & Verification', labelHi: 'डिजिटल पहचान पत्र (ID Card)', labelUr: 'ڈیجیٹل شناختی کارڈ' },
        { id: 'matrimonial', labelEn: 'Matrimonial & Nikah Platform', labelHi: 'निकाह और वैवाहिक मंच', labelUr: 'شادی بیاہ اور نکاح پلیٹ فارم' },
        { id: 'matrimonial-second', labelEn: 'Second Marriage ✨ (Widow/Divorced)', labelHi: 'द्वितीय विवाह एवं विशेष रिश्ते ✨', labelUr: 'دوسری شادی (شاندار اور باوقار) ✨' },
      ]
    },
    {
      id: 'mahapanchayat',
      labelEn: 'Mahapanchayat',
      labelHi: 'महापंचायत',
      labelUr: 'مہاپنچایت',
      icon: Landmark,
      subItems: [
        { id: 'mahapanchayat-intro-header', labelEn: '🏛 Introduction', labelHi: '🏛 परिचय', labelUr: '🏛 تعارف', isHeader: true },
        { id: 'mahapanchayat-about', labelEn: 'About Mahapanchayat', labelHi: 'महापंचायत के बारे में', labelUr: 'مہاپنچایت کے بارے میں' },
        { id: 'mahapanchayat-mission', labelEn: 'Society Reform Mission', labelHi: 'समाज सुधार मिशन', labelUr: 'سماجی اصلاح کا مشن' },
        { id: 'mahapanchayat-history', labelEn: 'Mahapanchayat History', labelHi: 'महापंचायत का इतिहास', labelUr: 'مہاپنچایت کی تاریخ' },
        { id: 'mahapanchayat-participation-header', labelEn: '🗳 Participation', labelHi: '🗳 भागीदारी', labelUr: '🗳 شرکت', isHeader: true },
        { id: 'mahapanchayat-surveys', labelEn: 'Digital Surveys', labelHi: 'डिजिटल सर्वेक्षण', labelUr: 'ڈیجیٹل سروے' },
        { id: 'mahapanchayat-polls', labelEn: 'Community Opinion Polls', labelHi: 'सामुदायिक जनमत संग्रह', labelUr: 'کمیونٹی رائے عامہ' },
        { id: 'mahapanchayat-agenda', labelEn: 'Current Agenda', labelHi: 'वर्तमान एजेंडा', labelUr: 'موجودہ ایجنڈا' },
        { id: 'mahapanchayat-resolutions', labelEn: 'Historic Resolutions', labelHi: 'ऐतिहासिक प्रस्ताव', labelUr: 'تاریخی قراردادیں' },
        { id: 'mahapanchayat-reports', labelEn: 'Official Reports', labelHi: 'आधिकारिक रिपोर्ट', labelUr: 'سرکاری رپورٹیں' },
        { id: 'mahapanchayat-committees', labelEn: 'Committees & Members', labelHi: 'समितियां और सदस्य', labelUr: 'کمیٹیاں اور اراکین' },
        { id: 'mahapanchayat-archive', labelEn: 'Historical Archives', labelHi: 'ऐतिहासिक अभिलेखागार', labelUr: 'تاریخی دستاویزات' },
        { id: 'mahapanchayat-implementation', labelEn: 'Ground Implementation', labelHi: 'धरातल कार्यान्वयन', labelUr: 'زمینی عملدرآمد' },
      ],
    },
    {
      id: 'volunteer-service',
      labelEn: 'Services',
      labelHi: 'सेवाएं',
      labelUr: 'خدمات',
      icon: HeartHandshake,
      subItems: [
        { id: 'volunteer-service', labelEn: 'Overview', labelHi: 'अवलोकन', labelUr: 'جائزہ' },
        { id: 'volunteer-community', labelEn: 'Volunteer & Service Hub', labelHi: 'स्वयंसेवा एवं सेवा हब', labelUr: 'رضاکاری اور خدمت ہب' },
        { id: 'volunteer-registration', labelEn: 'Volunteer Registration', labelHi: 'स्वयंसेवक पंजीकरण', labelUr: 'رضاکار का اندراج' },
        { id: 'volunteer-opportunities', labelEn: 'Opportunities', labelHi: 'सेवा अवसर', labelUr: 'خدمت کے مواقع' },
        { id: 'volunteer-awards', labelEn: 'Awards & Recognition', labelHi: 'पुरस्कार एवं सम्मान', labelUr: 'ایوارڈز اور اعتراف' },
        { id: 'volunteer-projects', labelEn: 'Social Projects', labelHi: 'सामाजिक परियोजनाएं', labelUr: 'سماجی منصوبے' },
        { id: 'volunteer-medical', labelEn: 'Medical Camps', labelHi: 'चिकित्सा शिविर', labelUr: 'میڈیکل کیمپس' },
        { id: 'volunteer-blood', labelEn: 'Blood Donation', labelHi: 'रक्तदान शिविर', labelUr: 'خون عطیہ کیمپس' },
        { id: 'volunteer-tree', labelEn: 'Tree Plantation', labelHi: 'वृक्षारोपण (ट्री प्लांटेशन)', labelUr: 'شجرکاری' },
        { id: 'volunteer-disaster', labelEn: 'Disaster Relief', labelHi: 'आपदा राहत', labelUr: 'آفات میں ریلیف' },
      ]
    },
    {
      id: 'education',
      labelEn: 'Careers',
      labelHi: 'करियर',
      labelUr: 'کیریئر',
      icon: GraduationCap,
      subItems: [
        { id: 'education', labelEn: '1. Education & Careers Overview', labelHi: '1. तालीम और करियर अवलोकन', labelUr: '1. تعلیم اور روزگار کا جائزہ' },
        { id: 'education-hub', labelEn: '2. Education & Mentorship Hub', labelHi: '2. शिक्षा और मेंटरशिप हब', labelUr: '2. تعلیم اور رہنمائی ہب' },
        { id: 'competitive-exams', labelEn: '3. Competitive Exams', labelHi: '3. प्रतियोगी परीक्षाएं', labelUr: '3. مسابقتی امتحانات' },
        { id: 'jobs-careers', labelEn: '4. Jobs & Careers', labelHi: '4. नौकरियां और करियर', labelUr: '4. ملازمتیں اور کیریئر' },
        { id: 'colleges-directory', labelEn: '5. Colleges Directory', labelHi: '5. कॉलेज निर्देशिका', labelUr: '5. کالجز ڈائریکٹری' },
        { id: 'scholarships', labelEn: '6. Scholarships', labelHi: '6. छात्रवृत्ति (स्कॉलरशिप)', labelUr: '6. اسکالرشپس' },
        { id: 'career-counselling', labelEn: '7. Career Counselling', labelHi: '7. करियर काउंसलिंग', labelUr: '7. کیریئر کونسلنگ' },
        { id: 'education-gallery', labelEn: '8. 📸 Education HD Image Gallery', labelHi: '8. 📸 शिक्षा एचडी फोटो गैलरी', labelUr: '8. 📸 تعلیمی ایچ ڈی گیلری' },
      ]
    },
    {
      id: 'welfare-support',
      labelEn: 'Support',
      labelHi: 'सहायता',
      labelUr: 'مدد',
      icon: Gift,
      subItems: [
        { id: 'welfare-support', labelEn: 'Welfare & Support Overview', labelHi: 'कल्याण एवं सहायता अवलोकन', labelUr: 'فلاح و بہبود اور مدد کا جائزہ' },
        { id: 'schemes', labelEn: 'Government Schemes', labelHi: 'सरकारी योजनाएं', labelUr: 'حکومتی اسکیمیں' },
        { id: 'welfare-minority', labelEn: 'Minority Welfare', labelHi: 'अल्पसंख्यक कल्याण', labelUr: 'اقلیتی فلاح و بہبود' },
        { id: 'welfare-scholarships', labelEn: 'Scholarships', labelHi: 'छात्रवृत्ति (स्कॉलरशिप)', labelUr: 'وظائف (اسکالرشپ)' },
        { id: 'welfare-hospital', labelEn: 'Hospital Network', labelHi: 'अस्पताल नेटवर्क', labelUr: 'ہسپتال نیٹ ورک' },
        { id: 'welfare-blood-bank', labelEn: 'Blood Bank', labelHi: 'ब्लड बैंक', labelUr: 'بلڈ بینک' },
        { id: 'welfare-blood-donors', labelEn: 'Blood Donors Directory', labelHi: 'रक्तदाता निर्देशिका', labelUr: 'خون عطیہ کرنے والوں کی ڈائریکٹری' },
        { id: 'helplines', labelEn: 'Emergency Helplines', labelHi: 'आपातकालीन हेल्पलाइन', labelUr: 'ایمرجنسی ہیلپ لائن' },
        { id: 'welfare-charity', labelEn: 'Charity', labelHi: 'खैरात और सदक़ा', labelUr: 'خیرات اور صدقہ' },
        { id: 'donate', labelEn: 'Donations', labelHi: 'दान और सहयोग', labelUr: 'عطیات' },
      ]
    },
    {
      id: 'media',
      labelEn: 'Media',
      labelHi: 'मीडिया',
      labelUr: 'میڈیا',
      icon: Newspaper,
      subItems: [
        { id: 'community-media-center', labelEn: 'Community Media Center', labelHi: 'सामुदायिक मीडिया केंद्र', labelUr: 'کمیونٹی میڈیا سینٹر' },
        { id: 'media', labelEn: 'Media & Resources Hub', labelHi: 'मीडिया और संसाधन हब', labelUr: 'میڈیا اور وسائل ہب' },
        { id: 'media-news', labelEn: 'Latest Community News', labelHi: 'नवीनतम समाचार', labelUr: 'تازہ ترین خبریں' },
        { id: 'media-photos', labelEn: 'Photo Gallery', labelHi: 'फोटो गैलरी', labelUr: 'تصویری گیلری' },
        { id: 'media-videos', labelEn: 'Video Broadcasts', labelHi: 'वीडियो प्रसारण', labelUr: 'वेबसाइट वीडियो' },
        { id: 'media-events', labelEn: 'Event Gallery', labelHi: 'समारोह गैलरी', labelUr: 'تقریبات کی گیلری' },
        { id: 'islamic-calendar', labelEn: 'Islamic Hijri Calendar', labelHi: 'इस्लामी हिजरी कैलेंडर', labelUr: 'اسلامی ہجری کیلنڈر' },
        { id: 'media-downloads', labelEn: 'Document Downloads', labelHi: 'दस्तावेज़ डाउनलोड', labelUr: 'دستاویزات ڈاؤن لوڈ' },
        { id: 'admin-media', labelEn: '🔒 Admin Media Management', labelHi: '🔒 एडमिन मीडिया मैनेजमेंट', labelUr: '🔒 ایڈمن میڈیا مینجمنٹ' },
        { id: 'media-publications', labelEn: 'Samaj Publications', labelHi: 'सामुदायिक प्रकाशन', labelUr: 'برادری کی مطبوعات' },
        { id: 'media-links', labelEn: 'Useful External Links', labelHi: 'उपयोगी बाहरी लिंक', labelUr: 'مفید بیرونی لنکس' },
        { id: 'media-faqs', labelEn: 'Help & FAQs', labelHi: 'सहायता और अक्सर पूछे जाने वाले प्रश्न', labelUr: 'مدد اور عام سوالات' },
      ],
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const getLabel = (item: any) => {
    if (currentLanguage === 'ur') return item.labelUr || item.labelEn;
    if (currentLanguage === 'hi') return item.labelHi || item.labelEn;
    return item.labelEn;
  };

  const checkIsItemActive = (item: any) => {
    return (
      activeTab === item.id ||
      activeTab.startsWith(item.id + '-') ||
      (item.id === 'about' && (activeTab === 'about' || activeTab.startsWith('about-') || activeTab === 'hall-of-excellence' || activeTab === 'excellence' || activeTab === 'legal-governance' || activeTab === 'governance-overview' || activeTab === 'executive-charter' || activeTab === 'legal-constitution' || activeTab === 'legal-awareness' || activeTab === 'legal-rti' || activeTab === 'legal-citizen-rights')) ||
      (item.id === 'education' && (activeTab === 'education' || activeTab === 'education-overview' || activeTab === 'education-hub' || activeTab === 'competitive-exams' || activeTab === 'jobs-careers' || activeTab === 'colleges-directory' || activeTab === 'scholarships' || activeTab === 'career-counselling' || activeTab === 'professional-colleges' || activeTab === 'medical-colleges' || activeTab === 'career-portal' || activeTab === 'career-opportunities' || activeTab === 'international-careers')) ||
      (item.id === 'membership-matrimonial' && (activeTab === 'membership-matrimonial' || activeTab === 'areas' || activeTab === 'portal' || activeTab === 'membership-register' || activeTab === 'membership-census' || activeTab === 'membership-tree' || activeTab === 'membership-id' || activeTab === 'matrimonial' || activeTab === 'matrimonial-second')) ||
      (item.id === 'welfare-support' && (activeTab === 'welfare-support' || activeTab === 'schemes' || activeTab === 'welfare-minority' || activeTab === 'welfare-scholarships' || activeTab === 'welfare-hospital' || activeTab === 'welfare-blood-bank' || activeTab === 'welfare-blood-donors' || activeTab === 'helplines' || activeTab === 'welfare-charity' || activeTab === 'welfare-volunteer' || activeTab === 'donate' || activeTab === 'welfare-disaster' || activeTab === 'community-portal' || activeTab === 'community-service')) ||
      (item.id === 'mahapanchayat' && (activeTab === 'mahapanchayat' || activeTab.startsWith('mahapanchayat-') || activeTab === 'governance-surveys' || activeTab === 'governance-opinion-poll' || activeTab === 'governance-mahapanchayat' || activeTab === 'governance-resolutions' || activeTab === 'governance-reports' || activeTab === 'agendas' || activeTab === 'archive' || activeTab === 'implementation' || activeTab === 'committees' || activeTab === 'reports_notif')) ||
      (item.id === 'volunteer-service' && (activeTab === 'volunteer-service' || activeTab === 'volunteer-community' || activeTab === 'volunteer-registration' || activeTab === 'volunteer-opportunities' || activeTab === 'volunteer-passport' || activeTab === 'volunteer-hall' || activeTab === 'volunteer-awards' || activeTab === 'volunteer-projects' || activeTab === 'volunteer-medical' || activeTab === 'volunteer-blood' || activeTab === 'volunteer-tree' || activeTab === 'volunteer-disaster' || activeTab === 'hall-of-service' || activeTab === 'welfare-volunteer' || activeTab === 'welfare-disaster' || activeTab === 'community-portal' || activeTab === 'community-service')) ||
      (item.id === 'media' && (activeTab === 'media' || activeTab.startsWith('media-') || activeTab === 'islamic-calendar'))
    );
  };

  // Primary menu items for tight laptop views (lg: 1024px to 1279px)
  const primaryLgItems = navigationItems.slice(0, 5); // Home, About, Hall of Excellence, Community Portal, Mahapanchayat
  const secondaryLgItems = navigationItems.slice(5); // Services, Careers, Support, Media

  const isMoreLgActive = secondaryLgItems.some(item => checkIsItemActive(item));

  return (
    <header className="w-full relative z-[9999] overflow-visible select-none" id="site_header">
      {/* ------------------------------------ */}
      {/* 1. TOP UTILITY BAR (Premium Dark)    */}
      {/* ------------------------------------ */}
      <div className="bg-[#0B132B] text-white text-[11px] sm:text-xs py-1.5 border-b border-[#D4AF37]/25 shadow-xs" id="top_bar">
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 flex justify-between items-center">
          
          {/* Left Side: Domain & Verified Status Badge */}
          <div className="flex items-center space-x-2 sm:space-x-3.5 truncate">
            <span className="text-[#FFD54A] font-black text-xs animate-pulse">★</span>
            <a
              href="https://rangrezcommunity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD54A] font-bold font-mono tracking-wider hover:text-white transition cursor-pointer flex items-center gap-1 shrink-0 text-[11px] sm:text-xs"
            >
              rangrezcommunity.org
            </a>
            <span className="text-[#D4AF37]/30 font-light">|</span>
            <button
              onClick={() => handleTabClick('membership-matrimonial')}
              title="Verified, Active & Digitally Authenticated Society"
              className="group relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 hover:border-[#FFD54A] backdrop-blur-md shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:shadow-[0_0_18px_rgba(255,213,74,0.35)] transition-all duration-300 cursor-pointer truncate"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-emerald-100 group-hover:text-[#FFD54A] transition-colors truncate">
                {currentLanguage === 'en'
                  ? 'Verified Society Status Active'
                  : currentLanguage === 'ur'
                  ? 'تصدیق شدہ سوسائٹی کا فعال درجہ'
                  : 'सत्यापित समाज स्थिति सक्रिय'}
              </span>
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Quick Social Media Header Icons */}
            <div className="hidden lg:flex items-center space-x-1 border-r border-white/20 pr-2.5" id="header_social_icons">
              <SocialButton platform="facebook" url={COMMUNITY_SOCIAL_URLS.facebook} title="Facebook Group" size="sm" variant="ghost" className="text-gray-300 hover:text-[#1877F2] p-1 transition" />
              <SocialButton platform="youtube" url={COMMUNITY_SOCIAL_URLS.youtube} title="YouTube Channel" size="sm" variant="ghost" className="text-gray-300 hover:text-[#FF0000] p-1 transition" />
              <SocialButton platform="whatsapp" url={COMMUNITY_SOCIAL_URLS.whatsappChannel} title="WhatsApp Channel" size="sm" variant="ghost" className="text-gray-300 hover:text-[#25D366] p-1 transition" />
              <SocialButton platform="telegram" url={COMMUNITY_SOCIAL_URLS.telegram} title="Telegram Circle" size="sm" variant="ghost" className="text-gray-300 hover:text-[#229ED9] p-1 transition" />
              <SocialButton platform="instagram" url={COMMUNITY_SOCIAL_URLS.instagram} title="Instagram Page" size="sm" variant="ghost" className="text-gray-300 hover:text-[#E4405F] p-1 transition" />
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative z-[10000]" id="language_switcher_wrapper">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#131F3A] hover:bg-[#1C2C52] border border-[#D4AF37]/80 hover:border-[#FFD54A] text-[#FFD54A] rounded-lg text-[11px] sm:text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer focus:outline-none"
                id="lang_switch_trigger"
              >
                <Globe className="h-3.5 w-3.5 text-[#FFD54A] shrink-0" />
                <span className="font-sans font-bold">
                  {currentLanguage === 'hi' && '🇮🇳 हिन्दी'}
                  {currentLanguage === 'en' && '🇬🇧 English'}
                  {currentLanguage === 'ur' && '🇸🇦 اردو'}
                </span>
                <ChevronDown className="h-3 w-3 text-[#FFD54A] transition-transform duration-200" />
              </button>

              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-[9999]" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-36 bg-[#0B132B] border border-[#D4AF37]/60 rounded-xl shadow-2xl py-1 z-[10000] text-xs overflow-hidden backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150" id="lang_dropdown_menu">
                    <button
                      onClick={() => {
                        setLanguage('hi');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 flex items-center space-x-2.5 transition cursor-pointer ${
                        currentLanguage === 'hi' ? 'bg-[#D4AF37]/20 text-[#FFD54A] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#FFD54A]'
                      }`}
                    >
                      <span className="text-base">🇮🇳</span>
                      <span>हिन्दी</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 flex items-center space-x-2.5 transition cursor-pointer ${
                        currentLanguage === 'en' ? 'bg-[#D4AF37]/20 text-[#FFD54A] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#FFD54A]'
                      }`}
                    >
                      <span className="text-base">🇬🇧</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('ur');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 flex items-center space-x-2.5 transition cursor-pointer ${
                        currentLanguage === 'ur' ? 'bg-[#D4AF37]/20 text-[#FFD54A] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#FFD54A]'
                      }`}
                    >
                      <span className="text-base">🇸🇦</span>
                      <span>اردو</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            <span className="text-gray-300 font-medium hidden md:inline pl-2.5 border-l border-white/20 text-[11px] sm:text-xs whitespace-nowrap">
              <PhoneCall className="w-3 h-3 inline-block mr-1 text-emerald-400" />
              {currentLanguage === 'en' ? 'Helpline: +91 78799 40869' : currentLanguage === 'ur' ? 'ہیلپ لائن: 40869 78799 91+' : 'हेल्पलाइन: +91 78799 40869'}
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* 2. MAIN FLOATING STICKY HEADER BAR   */}
      {/* ------------------------------------ */}
      <div
        id="sticky_header"
        className={`w-full sticky top-0 z-[9998] transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-amber-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1.5'
            : 'bg-white border-slate-200/80 shadow-xs py-2'
        }`}
      >
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 h-[62px] lg:h-[68px] flex justify-between items-center gap-2 lg:gap-3 xl:gap-4" id="middle_bar">
          
          {/* Logo & Brand Title */}
          <div
            className="flex items-center cursor-pointer shrink-0 group py-1 mr-1 lg:mr-2 relative select-none rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004B23] transition"
            onClick={() => handleTabClick('home')}
            onKeyDown={handleLogoKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Rangrez Community Bharat Portal - Home"
            title="Go to Home"
            id="branding_logo"
          >
            <img
              src={logoSrc}
              onError={handleLogoError}
              alt="Rangrez Community Bharat Portal"
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 xl:w-[48px] xl:h-[48px] object-contain shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
              loading="eager"
            />
            <div className="flex flex-col ml-2 sm:ml-2.5 justify-center overflow-hidden min-w-0">
              <h1 className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-serif font-black text-[#004B23] tracking-tight leading-none whitespace-nowrap truncate group-hover:text-[#b8972a] transition-colors">
                Rangrez Community
              </h1>
              <span className="text-[9.5px] sm:text-[10px] lg:text-[10.5px] xl:text-[11.5px] font-serif font-extrabold text-[#004B23]/90 tracking-wider uppercase leading-tight mt-0.5 whitespace-nowrap truncate">
                Bharat Portal
              </span>
            </div>
          </div>

          {/* Search bar on Mobile/Tablet */}
          <div className="flex lg:hidden items-center relative flex-grow mx-2 max-w-xs sm:max-w-sm" id="global_search_mobile">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search members, jobs...' : 'तलाश करें...'}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              className="w-full bg-slate-100/80 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-3 py-1.5 sm:py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
            />
            <Search className="absolute left-2.5 top-2 sm:top-2.5 h-3.5 w-3.5 text-gray-400" />
          </div>

          {/* ------------------------------------ */}
          {/* DESKTOP NAVIGATION BAR               */}
          {/* ------------------------------------ */}
          <nav
            className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-0.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 flex-nowrap mx-1 lg:mx-2 px-1"
            id="desktop_nav_links"
            aria-label="Main Navigation Menu"
          >
            {/* FULL LIST ON XL (1280px+), COMPACT LIST WITH 'MORE' ON LG (1024px-1279px) */}
            <div className="hidden xl:flex items-center justify-center w-full gap-1 xl:gap-1.5 2xl:gap-2">
              {navigationItems.map((item) => {
                const isActive = checkIsItemActive(item);

                return (
                  <div
                    key={item.id}
                    className="relative shrink-0"
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      item.subItems && setDropdownOpen(item.id);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(null), 250);
                    }}
                  >
                    <button
                      onClick={() => handleTabClick(item.id)}
                      aria-label={`${getLabel(item)}${item.subItems ? ' - Has dropdown menu' : ''}`}
                      className={`text-[13px] xl:text-[13.5px] 2xl:text-[14.5px] tracking-tight font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-xl transition-all duration-250 relative group/nav cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004B23] ${
                        isActive
                          ? 'text-[#004B23] font-extrabold bg-[#004B23]/5'
                          : 'text-gray-700 hover:text-[#004B23] hover:bg-slate-50'
                      }`}
                    >
                      {item.icon && (
                        <item.icon
                          className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 stroke-[2] transition-colors duration-200 ${
                            isActive ? 'text-[#004B23]' : 'text-gray-400 group-hover/nav:text-[#004B23]'
                          }`}
                        />
                      )}
                      <span className="font-sans whitespace-nowrap">{getLabel(item)}</span>
                      {item.subItems && (
                        <ChevronDown className="w-3 h-3 text-gray-400 group-hover/nav:text-[#004B23] shrink-0 transition-transform duration-200 group-hover/nav:rotate-180" />
                      )}
                      
                      {/* Premium animated gold/emerald underline */}
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#004B23] via-[#D4AF37] to-[#FFD54A] transition-all duration-300 ease-out origin-left ${
                          isActive ? 'scale-x-100 opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100'
                        }`}
                      />
                    </button>

                    {/* Submenu Dropdown */}
                    {item.subItems && dropdownOpen === item.id && (
                      <div className="absolute top-full left-0 pt-1.5 bg-white/95 backdrop-blur-xl border border-amber-200/50 rounded-2xl shadow-2xl p-2 w-[270px] z-[99999] text-left animate-in fade-in slide-in-from-top-2 duration-150 space-y-0.5 max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
                        {item.subItems.map((sub: any, idx: number) =>
                          sub.isHeader ? (
                            <div
                              key={sub.id}
                              className={`px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#004B23] bg-emerald-50/80 border-y border-emerald-100/80 rounded-md ${
                                idx > 0 ? 'mt-2 mb-1' : 'mb-1'
                              }`}
                            >
                              {getLabel(sub)}
                            </div>
                          ) : (
                            <button
                              key={sub.id}
                              onClick={() => handleTabClick(sub.id)}
                              aria-label={getLabel(sub)}
                              className="block w-full text-left px-3.5 py-2 text-xs text-gray-700 hover:bg-emerald-50/70 hover:text-[#004B23] hover:pl-5 transition-all duration-200 rounded-xl font-medium cursor-pointer focus:outline-none focus-visible:bg-emerald-50"
                            >
                              {getLabel(sub)}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* LG VIEW (1024px to 1279px) — Primary items + "More" Dropdown */}
            <div className="flex xl:hidden items-center justify-center w-full gap-1">
              {primaryLgItems.map((item) => {
                const isActive = checkIsItemActive(item);

                return (
                  <div
                    key={item.id}
                    className="relative shrink-0"
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      item.subItems && setDropdownOpen(item.id);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(null), 250);
                    }}
                  >
                    <button
                      onClick={() => handleTabClick(item.id)}
                      className={`text-[13px] font-semibold flex items-center justify-center gap-1 whitespace-nowrap px-2 py-1.5 rounded-xl transition-all relative group/nav cursor-pointer ${
                        isActive
                          ? 'text-[#004B23] font-extrabold bg-[#004B23]/5'
                          : 'text-gray-700 hover:text-[#004B23] hover:bg-slate-50'
                      }`}
                    >
                      {item.icon && (
                        <item.icon
                          className={`w-3.5 h-3.5 shrink-0 stroke-[2] ${
                            isActive ? 'text-[#004B23]' : 'text-gray-400 group-hover/nav:text-[#004B23]'
                          }`}
                        />
                      )}
                      <span className="font-sans whitespace-nowrap">{getLabel(item)}</span>
                      {item.subItems && <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" />}
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#004B23] to-[#D4AF37] transition-all duration-300 origin-left ${
                          isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100'
                        }`}
                      />
                    </button>

                    {item.subItems && dropdownOpen === item.id && (
                      <div className="absolute top-full left-0 pt-1.5 bg-white/95 backdrop-blur-xl border border-amber-200/50 rounded-2xl shadow-2xl p-2 w-[260px] z-[99999] text-left animate-in fade-in duration-150 space-y-0.5 max-h-[calc(100vh-100px)] overflow-y-auto">
                        {item.subItems.map((sub: any, idx: number) =>
                          sub.isHeader ? (
                            <div
                              key={sub.id}
                              className={`px-3 py-1 text-[10px] font-black uppercase text-[#004B23] bg-emerald-50 rounded ${
                                idx > 0 ? 'mt-2 mb-1' : 'mb-1'
                              }`}
                            >
                              {getLabel(sub)}
                            </div>
                          ) : (
                            <button
                              key={sub.id}
                              onClick={() => handleTabClick(sub.id)}
                              className="block w-full text-left px-3.5 py-2 text-xs text-gray-700 hover:bg-emerald-50 hover:text-[#004B23] hover:pl-5 transition-all rounded-xl font-medium cursor-pointer"
                            >
                              {getLabel(sub)}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* MORE DROPDOWN FOR LG */}
              <div
                className="relative shrink-0"
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  setDropdownOpen('more-menu');
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(null), 250);
                }}
              >
                <button
                  className={`text-[13px] font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 rounded-xl transition-all relative group/nav cursor-pointer ${
                    isMoreLgActive
                      ? 'text-[#004B23] font-extrabold bg-[#004B23]/10'
                      : 'text-gray-700 hover:text-[#004B23] hover:bg-slate-50'
                  }`}
                >
                  <MoreHorizontal className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{currentLanguage === 'en' ? 'More' : currentLanguage === 'ur' ? 'مزید' : 'अन्य'}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" />
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#004B23] to-[#D4AF37] transition-all duration-300 origin-left ${
                      isMoreLgActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100'
                    }`}
                  />
                </button>

                {dropdownOpen === 'more-menu' && (
                  <div className="absolute top-full right-0 pt-1.5 bg-white/95 backdrop-blur-xl border border-amber-200/50 rounded-2xl shadow-2xl p-2 w-[250px] z-[99999] text-left animate-in fade-in duration-150 space-y-1">
                    {secondaryLgItems.map((item) => (
                      <div key={item.id} className="relative group/sub">
                        <button
                          onClick={() => handleTabClick(item.id)}
                          className="w-full text-left px-3.5 py-2 text-xs font-bold text-gray-800 hover:bg-emerald-50 hover:text-[#004B23] rounded-xl flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            {item.icon && <item.icon className="w-3.5 h-3.5 text-emerald-700" />}
                            <span>{getLabel(item)}</span>
                          </span>
                          {item.subItems && <span className="text-[10px] text-gray-400">›</span>}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* ------------------------------------ */}
          {/* SEARCH & ACTION BUTTONS              */}
          {/* ------------------------------------ */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0" id="header_right_actions">
            {/* Desktop Expandable Search Input */}
            <div className="relative flex items-center" id="global_search_desktop">
              <div
                className={`flex items-center relative transition-all duration-300 ease-in-out ${
                  searchExpanded ? 'w-44 xl:w-52' : 'w-9 xl:w-10'
                }`}
              >
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search...' : 'तलाश करें...'}
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  onFocus={() => setSearchExpanded(true)}
                  onBlur={() => {
                    if (!globalSearchQuery.trim()) setSearchExpanded(false);
                  }}
                  className={`w-full bg-slate-100/90 text-xs text-gray-800 placeholder-gray-400 h-9 xl:h-10 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23] focus:bg-white transition-all duration-300 ${
                    searchExpanded
                      ? 'pl-9 pr-8 opacity-100 border-gray-300 shadow-inner'
                      : 'pl-0 pr-0 opacity-0 pointer-events-none'
                  }`}
                />
                <button
                  onClick={() => setSearchExpanded(!searchExpanded)}
                  className={`absolute top-0 left-0 w-9 h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-[#004B23] transition-all duration-200 ${
                    searchExpanded
                      ? 'bg-transparent'
                      : 'bg-slate-100/80 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 cursor-pointer'
                  }`}
                  title={currentLanguage === 'en' ? 'Search portal...' : 'तलाश करें...'}
                >
                  <Search className="h-4 w-4 shrink-0 text-gray-600" />
                </button>
                {searchExpanded && (
                  <button
                    onClick={() => {
                      setGlobalSearchQuery('');
                      setSearchExpanded(false);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold px-1"
                    title="Close search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Donate CTA Button */}
            <button
              onClick={() => handleTabClick('donate')}
              className="px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-extrabold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#004B23] to-[#00381a] hover:from-[#FFD54A] hover:to-amber-400 text-white hover:text-[#0B132B] shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 border border-emerald-800/20 hover:border-amber-300"
              id="donate_btn_nav"
            >
              <Heart className="w-3.5 h-3.5 text-red-400 fill-current shrink-0 animate-pulse" />
              <span>{currentLanguage === 'en' ? 'Donate' : currentLanguage === 'ur' ? 'عطیہ' : 'सहयोग'}</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-gray-800 hover:text-[#004B23] transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* 3. MOBILE FULL-SCREEN SLIDE DRAWER   */}
      {/* ------------------------------------ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100000] lg:hidden flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Off-Canvas Drawer Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-[100001] animate-in slide-in-from-right duration-300 overflow-hidden">
            
            {/* Mobile Drawer Header */}
            <div className="p-4 bg-[#0B132B] text-white border-b border-[#D4AF37]/40 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <img src={logoSrc} alt="Logo" className="w-9 h-9 object-contain" />
                <div>
                  <h2 className="text-sm font-serif font-black text-[#FFD54A]">Rangrez Community</h2>
                  <p className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">Bharat Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Drawer Quick Controls */}
            <div className="p-4 bg-slate-50 border-b border-gray-200 space-y-3 shrink-0">
              {/* Language Switcher */}
              <div className="flex items-center justify-between bg-white border border-gray-200 p-2 rounded-xl">
                <span className="text-xs font-extrabold text-gray-600 uppercase flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Language / भाषा:</span>
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                      currentLanguage === 'hi' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    हिन्दी
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                      currentLanguage === 'en' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('ur')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                      currentLanguage === 'ur' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    اردو
                  </button>
                </div>
              </div>

              {/* Mobile Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search members, jobs, schemes...' : 'तलाश करें...'}
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  className="w-full bg-white text-xs text-gray-800 placeholder-gray-400 pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
                <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Nav Links Accordion Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {navigationItems.map((item) => {
                const isExpanded = mobileExpandedItem === item.id;
                const isActive = checkIsItemActive(item);

                return (
                  <div key={item.id} className="border-b border-gray-100 pb-2">
                    {item.subItems ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => handleTabClick(item.id)}
                            className={`flex-1 text-left px-3 py-2.5 text-xs font-extrabold uppercase tracking-wide rounded-xl flex items-center gap-2.5 transition ${
                              isActive ? 'bg-emerald-50 text-[#004B23]' : 'text-gray-800 hover:bg-slate-50'
                            }`}
                          >
                            {item.icon && <item.icon className="w-4 h-4 text-emerald-700 shrink-0" />}
                            <span>{getLabel(item)}</span>
                          </button>
                          <button
                            onClick={() => setMobileExpandedItem(isExpanded ? null : item.id)}
                            className="p-2.5 text-gray-500 hover:text-[#004B23] cursor-pointer"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#004B23]' : ''}`} />
                          </button>
                        </div>

                        {/* SubItems Collapsible */}
                        {isExpanded && (
                          <div className="mt-1 pl-4 space-y-1 bg-slate-50/80 p-2 rounded-xl border border-slate-100">
                            {item.subItems.map((sub: any, idx: number) =>
                              sub.isHeader ? (
                                <div
                                  key={sub.id}
                                  className={`px-3 py-1 text-[10px] font-black uppercase text-[#004B23] bg-emerald-100/60 rounded ${
                                    idx > 0 ? 'mt-2 mb-1' : 'mb-1'
                                  }`}
                                >
                                  {getLabel(sub)}
                                </div>
                              ) : (
                                <button
                                  key={sub.id}
                                  onClick={() => handleTabClick(sub.id)}
                                  className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:text-[#004B23] hover:bg-emerald-50 rounded-lg transition"
                                >
                                  • {getLabel(sub)}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleTabClick(item.id)}
                        className={`w-full text-left px-3 py-2.5 text-xs font-extrabold uppercase tracking-wide rounded-xl flex items-center gap-2.5 transition ${
                          isActive ? 'bg-emerald-50 text-[#004B23]' : 'text-gray-800 hover:bg-slate-50'
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4 text-emerald-700 shrink-0" />}
                        <span>{getLabel(item)}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 bg-slate-900 text-white border-t border-slate-800 shrink-0 space-y-2">
              <button
                onClick={() => handleTabClick('donate')}
                className="w-full py-3 bg-[#FFD54A] text-[#0B132B] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-red-600 fill-current" />
                <span>{currentLanguage === 'en' ? 'Support & Donate' : 'दान एवं सहयोग'}</span>
              </button>
              <p className="text-[10px] text-gray-400 text-center font-mono">
                Official Rangrez Community Portal © 2026
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
