import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, X, Users, Heart, BookOpen, FileText, PhoneCall, Gift, HelpCircle, Home, Info, GraduationCap, Landmark, Newspaper, HeartHandshake } from 'lucide-react';
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
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        { id: 'about-leadership', labelEn: 'Founders & Leadership', labelHi: 'बानी और क़ियादत', labelUr: 'قائدین اور قیادت' },
        { id: 'about-certificate', labelEn: 'Society Registration', labelHi: 'सोसाइटी रजिस्ट्रेशन', labelUr: 'سوسائٹی رجسٹریشن' },
        { id: 'about-faq', labelEn: 'FAQ', labelHi: 'अक्सर पूछे जाने वाले सवाल', labelUr: 'عام سوالات (FAQ)' },
        { id: 'about-transparency-section', labelEn: 'Transparency & Governance', labelHi: 'पारदर्शिता और शासन', labelUr: 'شفافیت और حکمرانی', isHeader: true },
        { id: 'about-transparency', labelEn: 'Transparency Charter & Pledge', labelHi: 'पारदर्शिता चार्टर एवं प्रतिज्ञा', labelUr: 'شفافیت کا چارٹر اور عہد', indent: true },
        { id: 'about-legal-governance', labelEn: 'Governance Overview', labelHi: 'शासन अवलोकन', labelUr: 'انتظامی جائزہ', indent: true },
        { id: 'executive-charter', labelEn: 'Executive Charter (Premium)', labelHi: 'संक्षिप्त संविधान', labelUr: 'مختصر آئین', indent: true },
        { id: 'legal-constitution', labelEn: 'Constitution Rights', labelHi: 'संवैधानिक अधिकार', labelUr: 'آئینی حقوق', indent: true },
        { id: 'legal-awareness', labelEn: 'Legal Awareness', labelHi: 'कानूनी जागरूकता', labelUr: 'قانونی بیداری', indent: true },
        { id: 'legal-rti', labelEn: 'RTI (Right to Information)', labelHi: 'सूचना का अधिकार (RTI)', labelUr: 'حق معلومات (RTI)', indent: true },
        { id: 'legal-citizen-rights', labelEn: 'Citizen Rights', labelHi: 'नागरिक अधिकार', labelUr: 'شہری حقوق', indent: true },
        { id: 'about-reports', labelEn: 'Annual Reports', labelHi: 'वार्षिक रिपोर्ट', labelUr: 'سالانہ رپورٹس' },
        { id: 'about-excellence', labelEn: '🏆 Hall of Excellence (Achievers)', labelHi: '🏆 गौरवशाली विभूतियाँ', labelUr: '🏆 ہال آف ایکسیلنس' },
      ],
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
      id: 'volunteer-service',
      labelEn: 'Community Service',
      labelHi: 'सामुदायिक सेवा',
      labelUr: 'کمیونٹی سروس',
      icon: HeartHandshake,
      subItems: [
        { id: 'volunteer-service', labelEn: 'Overview', labelHi: 'अवलोकन', labelUr: 'جائزہ' },
        { id: 'volunteer-community', labelEn: 'Volunteer & Service Hub', labelHi: 'स्वयंसेवा एवं सेवा हब', labelUr: 'رضاکاری اور خدمت ہب' },
        { id: 'volunteer-registration', labelEn: 'Volunteer Registration', labelHi: 'स्वयंसेवक पंजीकरण', labelUr: 'رضاکار کا اندراج' },
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
      labelEn: 'Education & Careers',
      labelHi: 'तालीम और करियर',
      labelUr: 'تعلیم اور روزگار',
      icon: GraduationCap,
      subItems: [
        { id: 'education', labelEn: '1. Education & Careers Overview', labelHi: '1. तालीम और करियर अवलोकन', labelUr: '1. تعلیم اور روزگار کا جائزہ' },
        { id: 'education-hub', labelEn: '2. Education & Mentorship Hub', labelHi: '2. शिक्षा और मेंटरशिप हब', labelUr: '2. تعلیم اور رہنمائی ہب' },
        { id: 'competitive-exams', labelEn: '3. Competitive Exams', labelHi: '3. प्रतियोगी परीक्षाएं', labelUr: '3. مسابقتی امتحانات' },
        { id: 'jobs-careers', labelEn: '4. Jobs & Careers', labelHi: '4. नौकरियां और करियर', labelUr: '4. ملازمتیں اور کیریئر' },
        { id: 'colleges-directory', labelEn: '5. Colleges Directory', labelHi: '5. कॉलेज निर्देशिका', labelUr: '5. کالجز ڈائریکٹری' },
        { id: 'scholarships', labelEn: '6. Scholarships', labelHi: '6. छात्रवृत्ति (स्कॉलरशिप)', labelUr: '6. اسکالرشپس' },
        { id: 'career-counselling', labelEn: '7. Career Counselling', labelHi: '7. करियर काउंसलिंग', labelUr: '7. کیریئر کونسلنگ' },
      ]
    },
    {
      id: 'welfare-support',
      labelEn: 'Welfare & Support',
      labelHi: 'कल्याण एवं सहायता',
      labelUr: 'فلاح و بہبود اور مدد',
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
      id: 'mahapanchayat',
      labelEn: 'Mahapanchayat',
      labelHi: 'महापंचायत',
      labelUr: 'مہاپنچایت',
      icon: Landmark,
      subItems: [
        { id: 'mahapanchayat-intro-header', labelEn: '🏛 Introduction', labelHi: '🏛 परिचय', labelUr: '🏛 تعارف', isHeader: true },
        { id: 'mahapanchayat-about', labelEn: 'About Mahapanchayat', labelHi: 'महापंचायत के बारे में', labelUr: 'مہاپنچایت के बारे में' },
        { id: 'mahapanchayat-mission', labelEn: 'Society Reform Mission', labelHi: 'समाज सुधार मिशन', labelUr: 'سماجی اصلاح کا مشن' },
        { id: 'mahapanchayat-history', labelEn: 'Mahapanchayat History', labelHi: 'महापंचायत का इतिहास', labelUr: 'مہاپنچایت की तारीख' },
        { id: 'mahapanchayat-participation-header', labelEn: '🗳 Participation', labelHi: '🗳 भागीदारी', labelUr: '🗳 شرکت', isHeader: true },
        { id: 'mahapanchayat-surveys', labelEn: 'Digital Surveys', labelHi: 'डिजिटल सर्वेक्षण', labelUr: 'ڈیجیٹل سروے' },
        { id: 'mahapanchayat-polls', labelEn: 'Community Opinion Polls', labelHi: 'सामुदायिक जनमत संग्रह', labelUr: 'کمیونٹی رائے عامہ' },
        { id: 'mahapanchayat-agenda', labelEn: 'Current Agenda', labelHi: 'वर्तमान एजेंडा', labelUr: 'موجودہ एजेंडा' },
        { id: 'mahapanchayat-resolutions', labelEn: 'Historic Resolutions', labelHi: 'ऐतिहासिक प्रस्ताव', labelUr: 'تاریخی قراردادیں' },
        { id: 'mahapanchayat-reports', labelEn: 'Official Reports', labelHi: 'आधिकारिक रिपोर्ट', labelUr: 'سرکاری رپورٹیں' },
        { id: 'mahapanchayat-committees', labelEn: 'Committees & Members', labelHi: 'समितियां और सदस्य', labelUr: 'کمیٹیاں اور اراکین' },
        { id: 'mahapanchayat-archive', labelEn: 'Historical Archives', labelHi: 'ऐतिहासिक अभिलेखागार', labelUr: 'تاریخی دستاویزات' },
        { id: 'mahapanchayat-implementation', labelEn: 'Ground Implementation', labelHi: 'धरातल कार्यान्वयन', labelUr: 'زمینی عملدرآمد' },
      ],
    },
    {
      id: 'media',
      labelEn: 'Media & Resources',
      labelHi: 'मीडिया और संसाधन',
      labelUr: 'میڈیا और وسائل',
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

  return (
    <header className="w-full relative z-[9999] overflow-visible" id="site_header">
      {/* Top Bar Container */}
      <div className="bg-[#0B132B] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 flex justify-between items-center select-none border-b border-[#D4AF37]/20" id="top_bar">
        {/* Left Side: Domain & Verified Status Badge */}
        <div className="flex items-center space-x-2 sm:space-x-3 truncate">
          <span className="text-[#D4AF37] font-black">★</span>
          <a
            href="https://rangrezcommunity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD54A] font-bold font-mono tracking-wide hover:underline cursor-pointer flex items-center gap-1 shrink-0"
          >
            rangrezcommunity.org
          </a>
          <span className="text-[#D4AF37]/40">|</span>
          <button
            onClick={() => handleTabClick('membership-matrimonial')}
            title="Verified, Active & Digitally Authenticated Society"
            className="group relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#D4AF37]/60 hover:border-[#FFD54A] backdrop-blur-md shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(255,213,74,0.4)] transition-all duration-300 cursor-pointer select-none truncate"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-gray-100 group-hover:text-[#FFD54A] transition-colors truncate">
              {currentLanguage === 'en'
                ? 'Verified Society Status Active'
                : currentLanguage === 'ur'
                ? 'تصدیق شدہ سوسائٹی کا فعال درجہ'
                : 'सत्यापित समाज स्थिति सक्रिय'}
            </span>
          </button>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5 shrink-0">

          {/* Quick Social Media Header Icons */}
          <div className="hidden lg:flex items-center space-x-1.5 border-r border-white/20 pr-2" id="header_social_icons">
            <SocialButton platform="facebook" url={COMMUNITY_SOCIAL_URLS.facebook} title="Facebook Group" size="sm" variant="ghost" className="text-gray-300 hover:text-[#1877F2] p-1" />
            <SocialButton platform="youtube" url={COMMUNITY_SOCIAL_URLS.youtube} title="YouTube Channel" size="sm" variant="ghost" className="text-gray-300 hover:text-[#FF0000] p-1" />
            <SocialButton platform="whatsapp" url={COMMUNITY_SOCIAL_URLS.whatsappChannel} title="WhatsApp Channel" size="sm" variant="ghost" className="text-gray-300 hover:text-[#25D366] p-1" />
            <SocialButton platform="telegram" url={COMMUNITY_SOCIAL_URLS.telegram} title="Telegram Circle" size="sm" variant="ghost" className="text-gray-300 hover:text-[#229ED9] p-1" />
            <SocialButton platform="instagram" url={COMMUNITY_SOCIAL_URLS.instagram} title="Instagram Page" size="sm" variant="ghost" className="text-gray-300 hover:text-[#E4405F] p-1" />
          </div>

          {/* Language Selector Dropdown Widget */}
          <div className="relative z-[10000] overflow-visible" id="language_switcher_wrapper">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#0B132B] hover:bg-[#142244] border border-[#D4AF37] text-[#D4AF37] rounded-md text-[11px] sm:text-xs font-semibold tracking-wide transition shadow cursor-pointer focus:outline-none"
              id="lang_switch_trigger"
            >
              <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-sans">
                {currentLanguage === 'hi' && '🇮🇳 हिन्दी'}
                {currentLanguage === 'en' && '🇬🇧 English'}
                {currentLanguage === 'ur' && '🇸🇦 اردو'}
              </span>
              <span className="text-[10px] text-[#D4AF37] ml-0.5">▼</span>
            </button>

            {langDropdownOpen && (
              <>
                <div className="fixed inset-0 z-[9999]" onClick={() => setLangDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-36 bg-[#0B132B] border border-[#D4AF37] rounded shadow-xl py-1 z-[10000] text-xs animate-fadeIn overflow-visible" id="lang_dropdown_menu">
                  <button
                    onClick={() => {
                      setLanguage('hi');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 sm:py-2.5 flex items-center space-x-2 transition cursor-pointer ${
                      currentLanguage === 'hi' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                    }`}
                  >
                    <span>🇮🇳</span>
                    <span>हिन्दी</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 sm:py-2.5 flex items-center space-x-2 transition cursor-pointer ${
                      currentLanguage === 'en' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ur');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 sm:py-2.5 flex items-center space-x-2 transition cursor-pointer ${
                      currentLanguage === 'ur' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                    }`}
                  >
                    <span>🇸🇦</span>
                    <span>اردو</span>
                  </button>
                </div>
              </>
            )}
          </div>
          <span className="text-gray-300 font-medium hidden md:inline pl-2 border-l border-white/20 text-[11px] sm:text-xs whitespace-nowrap">
            {currentLanguage === 'en' ? 'Helpline: +91 78799 40869' : currentLanguage === 'ur' ? 'ہیلپ لائن: 40869 78799 91+' : 'हेल्पलाइन: +91 78799 40869'}
          </span>
        </div>
      </div>

      {/* Main Bar Container */}
      <div className="bg-white w-full sticky top-0 z-[9998] overflow-visible shadow-xs transition-shadow duration-300">
        <div className="w-full max-w-[1600px] mx-auto pl-2 pr-2 md:pl-3 md:pr-3 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 2xl:pl-6 2xl:pr-6 h-[64px] flex justify-between items-center gap-0.5 xl:gap-1" id="middle_bar">
          {/* Logo and Branding */}
          <div 
            className="flex items-center cursor-pointer shrink-0 max-w-[165px] lg:max-w-[170px] xl:max-w-[195px] 2xl:max-w-[215px] group py-1 mr-1 lg:mr-1 xl:mr-1.5 2xl:mr-2 relative" 
            onClick={() => handleTabClick('home')}
            id="branding_logo"
          >
            {/* Logo */}
            <img src="/images/logo/logo.svg" alt="Logo" className="w-9 h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 object-contain shrink-0 transition transform group-hover:scale-105" />
            <div className="flex flex-col ml-1 lg:ml-1.5 justify-center overflow-hidden min-w-0">
              <h1 className="text-[13px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] font-serif font-extrabold text-[#004B23] tracking-tight leading-[1.15] whitespace-nowrap truncate">
                Rangrez Community
              </h1>
              <span className="text-[9px] lg:text-[8.5px] xl:text-[10px] 2xl:text-[11.5px] font-serif font-bold text-[#004B23]/90 tracking-tight leading-none mt-0.5 whitespace-nowrap truncate">
                Bharat Portal
              </span>
            </div>
          </div>

          {/* Global Search - Mobile/Tablet (Always visible input) */}
          <div className="flex lg:hidden items-center relative flex-grow mx-2 max-w-xs sm:max-w-sm md:max-w-md" id="global_search_mobile">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search members, jobs, schemes...' : currentLanguage === 'ur' ? 'رکن، नोकरियाँ और اسکیمیں تلاش کریں...' : 'तलाश करें: मेम्बर, नौकरी, स्कीमें...'}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              className="w-full bg-gray-50 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-3 py-2 sm:py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23] transition"
            />
            <Search className="absolute left-2.5 top-2.5 sm:top-3 h-3.5 w-3.5 text-gray-400" />
          </div>

          {/* Navigation - Desktop (Occupies all remaining horizontal space) */}
          <nav className="hidden lg:flex items-center justify-between flex-1 min-w-0 gap-0 lg:gap-0.5 xl:gap-1 2xl:gap-2 flex-nowrap mx-0.5 lg:mx-1 xl:mx-1.5 2xl:mx-2 px-0.5" id="desktop_nav_links">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id || activeTab.startsWith(item.id + '-') || 
                (item.id === 'about' && (activeTab === 'about' || activeTab.startsWith('about-') || activeTab === 'hall-of-excellence' || activeTab === 'excellence' || activeTab === 'legal-governance' || activeTab === 'governance-overview' || activeTab === 'executive-charter' || activeTab === 'legal-constitution' || activeTab === 'legal-awareness' || activeTab === 'legal-rti' || activeTab === 'legal-citizen-rights')) || 
                (item.id === 'education' && (activeTab === 'education' || activeTab === 'education-overview' || activeTab === 'education-hub' || activeTab === 'competitive-exams' || activeTab === 'jobs-careers' || activeTab === 'colleges-directory' || activeTab === 'scholarships' || activeTab === 'career-counselling' || activeTab === 'professional-colleges' || activeTab === 'medical-colleges' || activeTab === 'career-portal' || activeTab === 'career-opportunities' || activeTab === 'international-careers')) || 
                (item.id === 'membership-matrimonial' && (activeTab === 'membership-matrimonial' || activeTab === 'areas' || activeTab === 'portal' || activeTab === 'membership-register' || activeTab === 'membership-census' || activeTab === 'membership-tree' || activeTab === 'membership-id' || activeTab === 'matrimonial' || activeTab === 'matrimonial-second')) || 
                (item.id === 'welfare-support' && (activeTab === 'welfare-support' || activeTab === 'schemes' || activeTab === 'welfare-minority' || activeTab === 'welfare-scholarships' || activeTab === 'welfare-hospital' || activeTab === 'welfare-blood-bank' || activeTab === 'welfare-blood-donors' || activeTab === 'helplines' || activeTab === 'welfare-charity' || activeTab === 'welfare-volunteer' || activeTab === 'donate' || activeTab === 'welfare-disaster' || activeTab === 'community-portal' || activeTab === 'community-service')) || 
                (item.id === 'mahapanchayat' && (activeTab === 'mahapanchayat' || activeTab.startsWith('mahapanchayat-') || activeTab === 'governance-surveys' || activeTab === 'governance-opinion-poll' || activeTab === 'governance-mahapanchayat' || activeTab === 'governance-resolutions' || activeTab === 'governance-reports' || activeTab === 'agendas' || activeTab === 'archive' || activeTab === 'implementation' || activeTab === 'committees' || activeTab === 'reports_notif')) || 
                (item.id === 'volunteer-service' && (activeTab === 'volunteer-service' || activeTab === 'volunteer-community' || activeTab === 'volunteer-registration' || activeTab === 'volunteer-opportunities' || activeTab === 'volunteer-passport' || activeTab === 'volunteer-hall' || activeTab === 'volunteer-awards' || activeTab === 'volunteer-projects' || activeTab === 'volunteer-medical' || activeTab === 'volunteer-blood' || activeTab === 'volunteer-tree' || activeTab === 'volunteer-disaster' || activeTab === 'hall-of-service' || activeTab === 'welfare-volunteer' || activeTab === 'welfare-disaster' || activeTab === 'community-portal' || activeTab === 'community-service')) ||
                (item.id === 'media' && (activeTab === 'media' || activeTab.startsWith('media-') || activeTab === 'islamic-calendar'));

              return (
                <div
                  key={item.id}
                  className="relative shrink min-w-0"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    item.subItems && setDropdownOpen(item.id);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(null), 300);
                  }}
                >
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className={`text-[11.5px] lg:text-[10.5px] xl:text-[11.5px] 2xl:text-[13.5px] tracking-tight xl:tracking-normal flex items-center justify-center gap-1 2xl:gap-1.5 whitespace-nowrap px-1 lg:px-1 xl:px-1.5 2xl:px-2.5 py-1.5 transition-all duration-300 relative group/nav cursor-pointer min-w-0 ${
                      isActive
                        ? 'text-[#b8972a] font-bold'
                        : 'text-gray-700 hover:text-[#004B23] font-semibold'
                    }`}
                  >
                    {item.icon && <item.icon className={`w-3.5 h-3.5 lg:hidden 2xl:block 2xl:w-4 2xl:h-4 shrink-0 stroke-[1.75] transition-colors duration-300 ${isActive ? 'text-[#b8972a]' : 'opacity-80 group-hover/nav:text-[#004B23]'}`} />}
                    <span className="truncate">{getLabel(item)}</span>
                    {item.subItems && (
                      <span className="text-[8px] xl:text-[8.5px] text-gray-400 group-hover/nav:text-[#004B23] shrink-0 ml-0.5">▼</span>
                    )}
                    {/* Thin animated gold underline */}
                    <span className={`absolute bottom-0 left-1 right-1 h-[2px] bg-[#D4AF37] transition-all duration-300 origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100'
                    }`} />
                  </button>

                  {/* Submenu Dropdown */}
                  {item.subItems && dropdownOpen === item.id && (
                    <div className="absolute top-full left-0 pt-2 bg-white border border-gray-100/80 rounded-2xl shadow-2xl p-2 w-[270px] z-[99999] animate-fadeIn text-left backdrop-blur-sm bg-white/95 space-y-0.5 max-h-[calc(100vh-110px)] overflow-y-auto custom-scrollbar overflow-x-visible">
                      {item.subItems.map((sub: any, idx: number) =>
                        sub.isHeader ? (
                          <div
                            key={sub.id}
                            className={`px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#004B23] bg-emerald-50/70 border-y border-emerald-100/60 rounded-md ${idx > 0 ? 'mt-1.5 mb-1' : 'mb-1'}`}
                          >
                            {getLabel(sub)}
                          </div>
                        ) : (
                          <button
                            key={sub.id}
                            onClick={() => handleTabClick(sub.id)}
                            className={`block w-full text-left px-4 py-2 text-xs text-gray-600 hover:bg-emerald-50/50 hover:text-[#004B23] hover:pl-5 transition-all duration-200 rounded-xl font-medium cursor-pointer ${sub.indent ? 'pl-6 hover:pl-7 border-l-2 border-emerald-500/30 ml-2' : ''}`}
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
          </nav>

          {/* Global Search - Desktop Expandable (36px width when closed) */}
          <div className="hidden lg:flex items-center shrink-0 relative ml-0.5" id="global_search_desktop">
            <div className={`flex items-center relative transition-all duration-300 ease-in-out ${searchExpanded ? 'w-40 xl:w-48' : 'w-8 xl:w-9 2xl:w-10'}`}>
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search...' : 'तलाश करें...'}
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                onFocus={() => setSearchExpanded(true)}
                onBlur={() => {
                  if (!globalSearchQuery.trim()) setSearchExpanded(false);
                }}
                className={`w-full bg-gray-50 text-xs text-gray-800 placeholder-gray-400 h-9 xl:h-10 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#004B23] transition-all duration-300 ${
                  searchExpanded ? 'pl-9 pr-8 opacity-100 border-gray-300 shadow-inner' : 'pl-0 pr-0 opacity-0 cursor-pointer pointer-events-none'
                }`}
              />
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className={`absolute top-0 left-0 w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-[#004B23] transition-all duration-300 ${
                  searchExpanded ? 'bg-transparent' : 'bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 shadow-xs cursor-pointer'
                }`}
                title={currentLanguage === 'en' ? 'Search portal...' : 'तलाश करें...'}
              >
                <Search className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0" />
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
          
          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 ml-1 xl:ml-2 shrink-0" id="header_right_actions">
            {/* Scrolled Language Selector */}
            {isScrolled && (
              <div className="relative z-[10000] overflow-visible animate-fadeIn shrink-0" id="scrolled_language_switcher">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 px-1.5 xl:px-2 py-1 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#004B23] text-gray-700 hover:text-[#004B23] rounded-md text-[11px] font-semibold tracking-wide transition shadow-xs cursor-pointer focus:outline-none"
                  id="scrolled_lang_switch_trigger"
                >
                  <Globe className="h-3 w-3 xl:h-3.5 xl:w-3.5 text-gray-500 hover:text-[#004B23] shrink-0" />
                  <span className="font-sans text-[11px] whitespace-nowrap">
                    {currentLanguage === 'hi' && '🇮🇳 HI'}
                    {currentLanguage === 'en' && '🇬🇧 EN'}
                    {currentLanguage === 'ur' && '🇸🇦 UR'}
                  </span>
                  <span className="text-[8px] text-gray-400 ml-0.5 shrink-0">▼</span>
                </button>

                {langDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-[9999]" onClick={() => setLangDropdownOpen(false)} />
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-[10000] text-xs animate-fadeIn overflow-visible" id="scrolled_lang_dropdown">
                      <button
                        onClick={() => {
                          setLanguage('hi');
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center space-x-2 transition cursor-pointer hover:bg-emerald-50 hover:text-[#004B23] ${
                          currentLanguage === 'hi' ? 'text-[#004B23] font-bold bg-emerald-50/50' : 'text-gray-700'
                        }`}
                      >
                        <span>🇮🇳</span>
                        <span>हिन्दी</span>
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center space-x-2 transition cursor-pointer hover:bg-emerald-50 hover:text-[#004B23] ${
                          currentLanguage === 'en' ? 'text-[#004B23] font-bold bg-emerald-50/50' : 'text-gray-700'
                        }`}
                      >
                        <span>🇬🇧</span>
                        <span>English</span>
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('ur');
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center space-x-2 transition cursor-pointer hover:bg-emerald-50 hover:text-[#004B23] ${
                          currentLanguage === 'ur' ? 'text-[#004B23] font-bold bg-[#004B23]/10' : 'text-gray-700'
                        }`}
                      >
                        <span>🇸🇦</span>
                        <span>اردو</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Special Donate Button */}
            <button
              onClick={() => handleTabClick('donate')}
              className="min-w-[80px] xl:min-w-[90px] 2xl:min-w-[100px] px-2.5 xl:px-3 2xl:px-4 py-1.5 xl:py-1.5 2xl:py-2 rounded-full text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1 xl:gap-1.5 transform hover:-translate-y-0.5 bg-[#004B23] text-white hover:bg-[#F4C430] hover:text-[#0B132B] whitespace-nowrap shadow-sm cursor-pointer shrink-0"
              id="donate_btn_nav"
            >
              <Heart className="w-3.5 h-3.5 text-red-400 fill-current shrink-0" />
              <span>{currentLanguage === 'en' ? 'Donate' : currentLanguage === 'ur' ? 'عطیہ' : 'सहयोग'}</span>
            </button>
          </div>

          {/* Mobile Burger Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-700 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-4" id="mobile_nav_panel">
          {/* Mobile Language Switcher Widget */}
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 space-y-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              {currentLanguage === 'en' ? 'Choose Language' : currentLanguage === 'ur' ? 'زبان منتخب کریں' : 'भाषा चुनें'}
            </span>
            
            <div className="relative">
              <button
                onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 bg-[#0B132B] border border-[#D4AF37] text-[#D4AF37] rounded-md text-xs font-semibold tracking-wide transition shadow"
              >
                <span className="flex items-center space-x-2">
                  <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>
                    {currentLanguage === 'hi' && '🇮🇳 हिन्दी'}
                    {currentLanguage === 'en' && '🇬🇧 English'}
                    {currentLanguage === 'ur' && '🇸🇦 اردو'}
                  </span>
                </span>
                <span className="text-[10px]">▼</span>
              </button>

              {mobileLangDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-[#0B132B] border border-[#D4AF37] rounded-md shadow-xl py-1 z-50 text-xs text-left">
                  <button
                    onClick={() => {
                      setLanguage('hi');
                      setMobileLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 flex items-center space-x-2 transition ${
                      currentLanguage === 'hi' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200'
                    }`}
                  >
                    <span>🇮🇳</span>
                    <span>हिन्दी</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setMobileLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 flex items-center space-x-2 transition ${
                      currentLanguage === 'en' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200'
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ur');
                      setMobileLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 flex items-center space-x-2 transition ${
                      currentLanguage === 'ur' ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold' : 'text-gray-200'
                    }`}
                  >
                    <span>🇸🇦</span>
                    <span>اردو</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search anything...' : currentLanguage === 'ur' ? 'تلاش کریں...' : 'तलाश करें...'}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              className="w-full bg-gray-50 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
          </div>

          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id} className="border-b border-gray-50 pb-1">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => handleTabClick(item.id)}
                      className="w-full px-3 py-2 text-xs font-bold text-[#004B23] uppercase tracking-wider text-left hover:bg-emerald-50 rounded flex items-center space-x-2"
                    >
                      {item.icon && <item.icon className="w-4 h-4 shrink-0 stroke-[1.75] text-[#004B23]" />}
                      <span>{getLabel(item)}</span>
                    </button>
                    <div className="pl-4 space-y-1 text-left">
                      {item.subItems.map((sub: any, idx: number) =>
                        sub.isHeader ? (
                          <div
                            key={sub.id}
                            className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#004B23] bg-emerald-50/70 rounded ${idx > 0 ? 'mt-2 mb-1' : 'mb-1'}`}
                          >
                            {getLabel(sub)}
                          </div>
                        ) : (
                          <button
                            key={sub.id}
                            onClick={() => handleTabClick(sub.id)}
                            className={`w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:text-[#004B23] hover:bg-emerald-50 rounded ${sub.indent ? 'pl-6 font-medium text-[#004B23]/90' : ''}`}
                          >
                            • {getLabel(sub)}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className="w-full text-left px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#004B23] hover:bg-emerald-50 rounded flex items-center space-x-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4 shrink-0 stroke-[1.75] opacity-80" />}
                    <span>{getLabel(item)}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
