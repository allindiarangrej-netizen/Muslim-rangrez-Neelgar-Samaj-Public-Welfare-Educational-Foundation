import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, Filter, BarChart3, ShieldCheck, Download, Share2, Printer, Eye,
  FileText, Video, Image as ImageIcon, Calendar, BookOpen, Link as LinkIcon,
  HelpCircle, Newspaper, Award, Sparkles, CheckCircle, AlertCircle, Clock,
  MapPin, User, ChevronRight, ChevronLeft, ExternalLink, SlidersHorizontal, Settings,
  Lock, RefreshCw, Layers, Bell, Check, Copy, ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import MediaCenter from './MediaCenter';
import ResourcesCenter from './ResourcesCenter';
import IslamicCalendar from './IslamicCalendar';
import HelpSupport from './HelpSupport';
import SocialImpact from './SocialImpact';
import PremiumLightbox from './common/PremiumLightbox';
import SmartImage from './common/SmartImage';
import { initialHeritageAlbums } from '../data/heritageMedia';
import { resolveDriveUrl, EVENT_FALLBACK_IMAGE } from '../lib/driveUtils';

interface MediaResourcesHubProps {
  currentLanguage: Language;
  activeSubTab?: string;
  onNavigate: (tab: string) => void;
}

export default function MediaResourcesHub({
  currentLanguage,
  activeSubTab = 'media',
  onNavigate
}: MediaResourcesHubProps) {
  // Normalize tab ID
  const currentTab = useMemo(() => {
    if (activeSubTab === 'media-news') return 'news';
    if (activeSubTab === 'media-photos') return 'photos';
    if (activeSubTab === 'media-videos') return 'videos';
    if (activeSubTab === 'media-events') return 'events';
    if (activeSubTab === 'media-regional') return 'regional';
    if (activeSubTab === 'media-islamic' || activeSubTab === 'islamic-calendar') return 'islamic';
    if (activeSubTab === 'media-downloads') return 'downloads';
    if (activeSubTab === 'media-publications') return 'publications';
    if (activeSubTab === 'media-links') return 'links';
    if (activeSubTab === 'media-faqs') return 'faqs';
    return 'overview';
  }, [activeSubTab]);

  // Global Tool States
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminTab, setAdminTab] = useState<'news' | 'gallery' | 'downloads' | 'islamic' | 'security'>('news');

  // Sub-tab specific states
  const [newsCategory, setNewsCategory] = useState('All');
  const [newsSearchQuery, setNewsSearchQuery] = useState('');
  const [eventCategory, setEventCategory] = useState('All');
  const [eventSearchQuery, setEventSearchQuery] = useState('');
  const [islamicSubTab, setIslamicSubTab] = useState<'calendar' | 'knowledge' | 'prayer'>('calendar');
  const [linkCategory, setLinkCategory] = useState('All');
  const [activePdfViewer, setActivePdfViewer] = useState<{ title: string; size: string; pages: number } | null>(null);
  const [activeNewsModal, setActiveNewsModal] = useState<any | null>(null);
  const [activeEventModal, setActiveEventModal] = useState<any | null>(null);
  const [activeIslamicModal, setActiveIslamicModal] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Responsive navigation & scroll state for subsection tabs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Auto-scroll active tab into view when selected
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    
    const activeBtn = el.querySelector('[data-active="true"]') as HTMLElement | null;
    if (activeBtn) {
      const elRect = el.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      
      if (btnRect.left < elRect.left || btnRect.right > elRect.right) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
    const timer = setTimeout(checkScroll, 350);
    return () => clearTimeout(timer);
  }, [activeSubTab, checkScroll]);

  const scrollNav = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = Math.min(350, el.clientWidth * 0.75);
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Helper text
  const getText = (en: string, hi: string, ur: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  // Sample News Data
  const newsArticles = [
    {
      id: 'news-1',
      titleEn: 'All India Rangrez Mahapanchayat 2026 Concludes with 12 Historic Resolutions',
      titleHi: 'ऑल इंडिया रंगरेज महापंचायत 2026 का 12 ऐतिहासिक प्रस्तावों के साथ समापन',
      titleUr: 'آل انڈیا رنگریز مہاپنچایت 2026 کا 12 تاریخی قراردادوں کے ساتھ اختتام',
      category: 'Mahapanchayat Updates',
      date: 'May 12, 2026',
      author: 'Central Press Cell',
      views: 14200,
      readTime: '4 min read',
      summaryEn: 'Over 5,000 delegates from 18 states assembled at New Delhi to ratify dowry-free marriage mandates and establish a national educational corpus.',
      summaryHi: '18 राज्यों से 5,000 से अधिक प्रतिनिधियों ने नई दिल्ली में एकत्रित होकर दहेज मुक्त विवाह और राष्ट्रीय शिक्षा कोष की स्थापना का संकल्प लिया।'
    },
    {
      id: 'news-2',
      titleEn: 'National Dyer Craft Modernization Fund Approved by Ministry of Textiles',
      titleHi: 'वस्त्र मंत्रालय द्वारा राष्ट्रीय रंगसाजी शिल्प आधुनिकीकरण कोष स्वीकृत',
      titleUr: 'وزارت منسوجات کی جانب سے قومی رنگسازی کرافٹ ماڈرنائزیشن فنڈ کی منظوری',
      category: 'Welfare Updates',
      date: 'April 28, 2026',
      author: 'Welfare Committee',
      views: 9850,
      readTime: '3 min read',
      summaryEn: 'Traditional Rangrez dyers will receive subsidized eco-friendly dyeing equipment and direct export market linkages under the new central scheme.',
      summaryHi: 'पारंपरिक रंगरेज शिल्पकारों को नई केंद्रीय योजना के तहत सब्सिडी वाले इको-फ्रेंडली रंगाई उपकरण और सीधा निर्यात बाजार जुड़ाव मिलेगा।'
    },
    {
      id: 'news-3',
      titleEn: '51 Couples Wed in Dowry-Free Mass Nikah Ceremony in Jaipur',
      titleHi: 'जयपुर में दहेज मुक्त सामूहिक निकाह सम्मेलन में 51 जोड़ों का विवाह संपन्न',
      titleUr: 'جے پور میں جہیز سے پاک اجتماعی نکاح کی تقریب میں 51 جوڑوں کا نکاح',
      category: 'Community News',
      date: 'April 15, 2026',
      author: 'Rajasthan Bureau',
      views: 8400,
      readTime: '2 min read',
      summaryEn: 'Setting an inspiring benchmark for social reform, the Rajasthan Rangrez Samaj organized a dignified mass marriage without any dowry exchange.',
      summaryHi: 'समाज सुधार की मिसाल पेश करते हुए, राजस्थान रंगरेज समाज ने बिना किसी दहेज लेनदेन के एक गरिमामय सामूहिक विवाह का आयोजन किया।'
    },
    {
      id: 'news-4',
      titleEn: 'Annual Scholarship Disbursement for 1,200 Meritorious Students Announced',
      titleHi: '1,200 मेधावी छात्रों के लिए वार्षिक छात्रवृत्ति वितरण की घोषणा',
      titleUr: '1,200 مستحق طلباء کے لیے سالانہ اسکالرشپ کی تقسیم کا اعلان',
      category: 'Educational Updates',
      date: 'June 01, 2026',
      author: 'Education Cell',
      views: 11500,
      readTime: '3 min read',
      summaryEn: 'The Central Education Trust will disburse ₹45 Lakhs in merit grants for students entering MBBS, Engineering, Law, and civil services coaching.',
      summaryHi: 'केंद्रीय शिक्षा ट्रस्ट एमबीबीएस, इंजीनियरिंग, कानून और सिविल सेवा कोचिंग में प्रवेश लेने वाले छात्रों के लिए ₹45 लाख अनुदान वितरित करेगा।'
    },
    {
      id: 'news-5',
      titleEn: 'Official Notification: Central Working Committee Elections Schedule 2026-29',
      titleHi: 'आधिकारिक अधिसूचना: केंद्रीय कार्यकारिणी समिति चुनाव कार्यक्रम 2026-29',
      titleUr: 'سرکاری نوٹیفکیشن: مرکزی ورکنگ کمیٹی انتخابات کا شیڈول 2026-29',
      category: 'Official Announcements',
      date: 'June 10, 2026',
      author: 'Election Commission',
      views: 7900,
      readTime: '4 min read',
      summaryEn: 'Electoral schedule released for district and state presidency terms. Voter roll verification will remain open until July 15th.',
      summaryHi: 'जिला और राज्य अध्यक्ष पदों के लिए चुनाव कार्यक्रम जारी। मतदाता सूची सत्यापन 15 जुलाई तक खुला रहेगा।'
    },
    {
      id: 'news-6',
      titleEn: 'Press Release: Rangrez Samaj Delegation Meets Union Textiles Secretary',
      titleHi: 'प्रेस विज्ञप्ति: रंगरेज समाज प्रतिनिधिमंडल ने केंद्रीय वस्त्र सचिव से की मुलाकात',
      titleUr: 'پریس ریلیز: رنگریز برادری کے وفد کی مرکزی سیکریٹری منسوجات سے ملاقات',
      category: 'Press Releases',
      date: 'May 20, 2026',
      author: 'National Spokesperson',
      views: 6300,
      readTime: '2 min read',
      summaryEn: 'Memorandum submitted demanding geographical indication (GI) protection for traditional indigo and vegetable dyeing clusters in Central India.',
      summaryHi: 'मध्य भारत में पारंपरिक नील और वनस्पति रंगाई समूहों के लिए भौगोलिक संकेत (GI) संरक्षण की मांग को लेकर ज्ञापन सौंपा गया।'
    },
    {
      id: 'news-7',
      titleEn: 'Upcoming Youth Leadership & UPSC Guidance Conclave at Bhopal',
      titleHi: 'भोपाल में आगामी युवा नेतृत्व एवं यूपीएससी मार्गदर्शन सम्मेलन',
      titleUr: 'بھوپال میں یوتھ لیڈرشپ اور یو پی ایس سی گائیڈنس کانفرنس',
      category: 'Event Announcements',
      date: 'June 25, 2026',
      author: 'Youth Wing',
      views: 8900,
      readTime: '3 min read',
      summaryEn: 'Three-day residential career boot camp featuring community civil servants, corporate leaders, and skill development workshops.',
      summaryHi: 'समुदाय के सिविल सेवकों, कॉर्पोरेट लीडर्स और कौशल विकास कार्यशालाओं के साथ तीन दिवसीय आवासीय करियर बूट कैंप।'
    },
    {
      id: 'news-8',
      titleEn: 'Featured: The Renaissance of Eco-Friendly Indigo Dyeing by Rangrez Women Guilds',
      titleHi: 'विशेष: रंगरेज महिला समूहों द्वारा पर्यावरण-अनुकूल नील रंगाई का पुनर्जागरण',
      titleUr: 'خصوصی: رنگریز خواتین گلڈز کی طرف سے ماحول دوست نیل رنگسازی کا احیاء',
      category: 'Featured News',
      date: 'March 14, 2026',
      author: 'Editorial Team',
      views: 15800,
      readTime: '5 min read',
      summaryEn: 'Special editorial feature profiling 200 women artisans exporting sustainable organic fabrics directly to European sustainable fashion houses.',
      summaryHi: 'यूरोपीय टिकाऊ फैशन हाउसों को सीधे जैविक कपड़े निर्यात करने वाली 200 महिला कारीगरों पर विशेष संपादकीय रिपोर्ट।'
    },
    {
      id: 'news-9',
      titleEn: 'Historical Archive: Retrospective on the 1985 National Rangrez Convention',
      titleHi: 'ऐतिहासिक आर्काइव: 1985 के राष्ट्रीय रंगरेज महाअधिवेशन का पुनरावलोकन',
      titleUr: 'تاریخی آرکائیو: 1985 کے قومی رنگریز کنونشن پر ایک نظر',
      category: 'News Archive',
      date: 'November 10, 2025',
      author: 'Heritage Committee',
      views: 5400,
      readTime: '4 min read',
      summaryEn: 'Digitized press clippings and resolutions from the milestone 1985 convention that established the first national educational endowment.',
      summaryHi: '1985 के ऐतिहासिक महाअधिवेशन की डिजीटल प्रेस कतरनें और संकल्प, जिसने प्रथम राष्ट्रीय शैक्षिक कोष की स्थापना की।'
    }
  ];

  const filteredNews = useMemo(() => {
    return newsArticles.filter(n => {
      const matchCat = newsCategory === 'All' || n.category === newsCategory;
      const matchQuery = !newsSearchQuery ||
        n.titleEn.toLowerCase().includes(newsSearchQuery.toLowerCase()) ||
        n.titleHi.toLowerCase().includes(newsSearchQuery.toLowerCase()) ||
        n.summaryEn.toLowerCase().includes(newsSearchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [newsArticles, newsCategory, newsSearchQuery]);

  const [activeAlbum, setActiveAlbum] = useState<any>(null);

  // Map Heritage Albums to Community Events for the Event Gallery tab
  const communityEventsList = useMemo(() => {
    return initialHeritageAlbums
      .filter(alb => alb.category === 'Event Albums' || alb.eventType === 'Community Meetings')
      .map(alb => ({
        ...alb,
        id: alb.id,
        titleEn: alb.titleEn,
        titleHi: alb.titleHi,
        category: alb.eventType,
        date: new Date(alb.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        venue: `${alb.location.village ? alb.location.village + ', ' : ''}${alb.location.tehsil ? alb.location.tehsil + ', ' : ''}${alb.location.district}`,
        descEn: alb.descriptionEn,
        descHi: alb.descriptionHi,
        photosCount: alb.images.length,
        videosCount: 0,
        reportSize: 'N/A',
        coverImage: alb.images.length > 0 ? resolveDriveUrl(alb.images[0]) : EVENT_FALLBACK_IMAGE
      }));
  }, []);

  const filteredEvents = useMemo(() => {
    return communityEventsList.filter(e => {
      const matchCat = eventCategory === 'All' || e.category === eventCategory;
      const matchQuery = !eventSearchQuery ||
        e.titleEn.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
        e.titleHi.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
        e.venue.toLowerCase().includes(eventSearchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [communityEventsList, eventCategory, eventSearchQuery]);

  // Sample Useful Links Data (All 12 Requested Categories)
  const usefulLinks = [
    { titleEn: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in', category: 'Scholarships', descEn: 'Central government portal for minority and merit-based scholarship applications.' },
    { titleEn: 'Ministry of Minority Affairs', url: 'https://minorityaffairs.gov.in', category: 'Government', descEn: 'Official government welfare schemes, USTTAD craft grants, and minority development programs.' },
    { titleEn: 'Maulana Azad Education Foundation', url: 'https://www.maef.nic.in', category: 'Education', descEn: 'Educational infrastructure grants and Begum Hazrat Mahal National Scholarships for girls.' },
    { titleEn: 'National Career Service (NCS)', url: 'https://www.ncs.gov.in', category: 'Jobs', descEn: 'Government employment portal connecting job seekers with verified employers across India.' },
    { titleEn: 'Ayushman Bharat Digital Mission', url: 'https://abdm.gov.in', category: 'Hospitals', descEn: 'Create health ID and access cashless medical coverage at empaneled hospitals.' },
    { titleEn: 'UGC - University Grants Commission', url: 'https://www.ugc.ac.in', category: 'Universities', descEn: 'Higher education guidelines, research fellowships, and recognized university directories.' },
    { titleEn: 'National Emergency Response System (112)', url: 'https://112.gov.in', category: 'Emergency Services', descEn: 'Pan-India integrated emergency helpline for police, fire, ambulance, and women safety.' },
    { titleEn: 'National Waqf Development Corporation (NAWADCO)', url: 'https://minorityaffairs.gov.in', category: 'Minority Welfare', descEn: 'Central agency facilitating development of community Waqf properties for educational institutions.' },
    { titleEn: 'National Medical Commission (NMC)', url: 'https://www.nmc.org.in', category: 'Medical Councils', descEn: 'Official medical education regulatory body, NEET UG/PG advisory, and registered doctor verification.' },
    { titleEn: 'Skill India Digital Career Hub', url: 'https://www.skillindiadigital.gov.in', category: 'Career Portals', descEn: 'Government vocational courses, AI apprenticeship certification, and artisan skill upgradation.' },
    { titleEn: 'GiveIndia Verified NGO Directory', url: 'https://www.giveindia.org', category: 'NGOs', descEn: 'Verified philanthropic portal collaborating on disaster relief and community education grants.' },
    { titleEn: 'Rangrez Samaj National Heritage Directory', url: 'https://rangrezcommunity.org', category: 'Community Resources', descEn: 'Central portal for national census registration, matrimonial matrimonial verification, and craft archives.' }
  ];

  const filteredLinks = linkCategory === 'All' ? usefulLinks : usefulLinks.filter(l => l.category === linkCategory);

  // Top navigation tabs
  const subMenuTabs = [
    { id: 'media', labelEn: 'Media & Gallery Overview', labelHi: 'मीडिया और गैलरी अवलोकन', labelUr: 'میڈیا اور گیلری کا جائزہ' },
    { id: 'media-news', labelEn: 'News & Updates', labelHi: 'समाचार एवं अपडेट', labelUr: 'خبریں اور اپڈیٹس' },
    { id: 'media-photos', labelEn: 'Photo Gallery', labelHi: 'फोटो गैलरी', labelUr: 'فوٹو گیلری' },
    { id: 'media-videos', labelEn: 'Video Gallery', labelHi: 'वीडियो गैलरी', labelUr: 'ویڈیو گیلری' },
    { id: 'media-events', labelEn: 'Event Gallery', labelHi: 'समारोह गैलरी', labelUr: 'تقریبات की गیلरी' },
    { id: 'media-regional', labelEn: 'Regional Galleries', labelHi: 'क्षेत्रीय गैलरी', labelUr: 'علاقائی گیلरी' },
    { id: 'islamic-calendar', labelEn: 'Islamic Resources', labelHi: 'इस्लामिक संसाधन एवं कैलेंडर', labelUr: 'اسلامی وسائل اور کیلنڈر' },
    { id: 'media-downloads', labelEn: 'Downloads', labelHi: 'डाउनलोड्स', labelUr: 'ڈاؤن لوڈز' },
    { id: 'media-publications', labelEn: 'Publications', labelHi: 'पत्रिकाएं एवं साहित्य', labelUr: 'مطبوعات' },
    { id: 'media-links', labelEn: 'Useful Links', labelHi: 'महत्वपूर्ण लिंक', labelUr: 'مفید لنکس' },
    { id: 'media-faqs', labelEn: 'FAQs & Help Center', labelHi: 'सामान्य प्रश्न एवं सहायता केंद्र', labelUr: 'سوالات اور مدد' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16" id="media_resources_hub_container">
      <AnimatePresence>
        {activeAlbum && (
          <PremiumLightbox
            items={activeAlbum.images.map((img: string) => ({
              src: img,
              type: 'image',
              title: getText(activeAlbum.titleEn, activeAlbum.titleHi, activeAlbum.titleUr || activeAlbum.titleEn),
              description: getText(activeAlbum.descriptionEn || activeAlbum.descEn, activeAlbum.descriptionHi || activeAlbum.descHi, activeAlbum.descriptionUr || activeAlbum.descEn),
              metadata: `${activeAlbum.date || ''} • ${activeAlbum.venue || activeAlbum.location?.district || ''}`
            }))}
            initialIndex={0}
            isOpen={!!activeAlbum}
            onClose={() => setActiveAlbum(null)}
          />
        )}
      </AnimatePresence>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#FFD54A] flex items-center space-x-3 animate-slideUp">
          <CheckCircle className="h-5 w-5 text-[#FFD54A]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Hero Header & Global Tools Banner */}
      <div className="bg-[#0B132B] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-[#FFD54A]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#004B23]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#004B23] text-[#FFD54A] border border-[#FFD54A]/30 mb-3">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                {getText('Official Community Repository', 'अधिकारिक सामुदायिक डिजिटल संग्रहालय', 'سرکاری کمیونٹی ڈیجیٹل ریپوزٹری')}
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-white">
                {getText('Media, Knowledge & Resource Management', 'मीडिया, ज्ञान एवं संसाधन प्रबंधन प्रणाली', 'میڈیا، علم اور وسائل کا انتظام')}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl">
                {getText(
                  'Explore verified press releases, historical photo archives, video documentaries, Islamic guidance, constitution documents, and downloadable community resources.',
                  'सत्यापित प्रेस विज्ञप्ति, ऐतिहासिक फोटो संग्रह, वीडियो डॉक्यूमेंट्री, इस्लामिक मार्गदर्शन, संविधान दस्तावेज और डाउनलोड करने योग्य सामुदायिक संसाधन देखें।',
                  'تصدیق شدہ پریس ریلیز، تاریخی تصاویر، ویڈیو دستاویزی فلمیں، اسلامی رہنمائی اور ڈاؤن لوڈ کے قابل کمیونٹی وسائل تلاش کریں۔'
                )}
              </p>
            </div>

            {/* Global Actions Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowGlobalSearch(true)}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition border border-white/10"
              >
                <Search className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Global Search', 'ग्लोबल सर्च', 'گلوبل تلاش')}</span>
              </button>
              <button
                onClick={() => setShowAnalyticsModal(true)}
                className="px-4 py-2.5 bg-[#004B23] hover:bg-[#003b1c] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition border border-[#FFD54A]/40 shadow-md"
              >
                <BarChart3 className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Analytics Dashboard', 'एनालिटिक्स डैशबोर्ड', 'تجزیاتی ڈیش بورڈ')}</span>
              </button>
              <button
                onClick={() => setShowAdminModal(true)}
                className="px-4 py-2.5 bg-[#FFD54A] text-[#0B132B] hover:bg-amber-400 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition shadow-lg"
              >
                <Settings className="h-4 w-4 text-[#0B132B]" />
                <span>{getText('Admin Panel', 'एडमिन पैनल', 'ایڈمن پینل')}</span>
              </button>
            </div>
          </div>

          {/* Sub-Menu Navigation Bar */}
          <div className="mt-8 pt-4 border-t border-white/10 relative w-full min-w-0 group/subnav" id="media_resources_subnav">
            {/* Left Edge Fade & Arrow */}
            {canScrollLeft && (
              <div className="absolute left-0 top-4 bottom-0 z-20 flex items-center pr-6 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-transparent pointer-events-none transition-opacity duration-300">
                <button
                  onClick={() => scrollNav('left')}
                  className="w-8 h-8 rounded-full bg-[#004B23] hover:bg-[#FFD54A] text-white hover:text-[#0B132B] border border-[#FFD54A]/40 shadow-lg flex items-center justify-center transition-all cursor-pointer pointer-events-auto shrink-0 ml-0.5 transform hover:scale-110 focus:outline-none"
                  title="Scroll Left"
                  aria-label="Scroll left navigation"
                >
                  <ChevronLeft className="h-4 w-4 shrink-0 stroke-[2.5]" />
                </button>
              </div>
            )}

            {/* Right Edge Fade & Arrow */}
            {canScrollRight && (
              <div className="absolute right-0 top-4 bottom-0 z-20 flex items-center pl-6 bg-gradient-to-l from-[#0B132B] via-[#0B132B]/90 to-transparent pointer-events-none transition-opacity duration-300">
                <button
                  onClick={() => scrollNav('right')}
                  className="w-8 h-8 rounded-full bg-[#004B23] hover:bg-[#FFD54A] text-white hover:text-[#0B132B] border border-[#FFD54A]/40 shadow-lg flex items-center justify-center transition-all cursor-pointer pointer-events-auto shrink-0 mr-0.5 transform hover:scale-110 focus:outline-none"
                  title="Scroll Right"
                  aria-label="Scroll right navigation"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                </button>
              </div>
            )}

            {/* Scrollable Tab Container */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-2 overflow-x-auto no-scrollbar w-full py-2 px-1 scroll-smooth"
              style={{
                flexWrap: 'nowrap',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              role="tablist"
              aria-label="Media & Resources Subsections"
            >
              {subMenuTabs.map((tab) => {
                const isActive = activeSubTab === tab.id || (activeSubTab === 'media' && tab.id === 'media');
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    data-active={isActive ? "true" : "false"}
                    onClick={() => onNavigate(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap h-auto select-none cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-[#FFD54A] text-[#0B132B] shadow-lg font-extrabold scale-105 z-10'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="whitespace-nowrap">{getText(tab.labelEn, tab.labelHi, tab.labelUr)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* TAB 1: MEDIA & GALLERY OVERVIEW */}
        {currentTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Quick Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { labelEn: 'News Articles', val: '142+', icon: Newspaper, color: 'text-blue-600', bg: 'bg-blue-50' },
                { labelEn: 'Photo Albums', val: '86', icon: ImageIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
                { labelEn: 'Videos', val: '48', icon: Video, color: 'text-red-600', bg: 'bg-red-50' },
                { labelEn: 'Documents', val: '64', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { labelEn: 'Publications', val: '32', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
                { labelEn: 'Downloads', val: '12.8K', icon: Download, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { labelEn: 'Useful Links', val: '95', icon: LinkIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
                { labelEn: 'Categories', val: '18', icon: Layers, color: 'text-orange-600', bg: 'bg-orange-50' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center hover:shadow-md transition">
                  <div className={`w-9 h-9 rounded-xl ${stat.bg} ${stat.color} mx-auto flex items-center justify-center mb-2`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-black text-gray-900 font-mono">{stat.val}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tight mt-0.5">{stat.labelEn}</div>
                </div>
              ))}
            </div>

            {/* Quick Jump Cards */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#004B23] mb-4 flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>{getText('Quick Navigation Cards', 'त्वरित नेविगेशन कार्ड', 'فوری نیویگیشن کارڈز')}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { id: 'media-news', title: 'News & Press Releases', desc: 'Verified announcements & media reports', icon: Newspaper, badge: 'Latest' },
                  { id: 'media-photos', title: 'Heritage Photo Gallery', desc: 'Historical dyer guilds & summit photos', icon: ImageIcon, badge: '86 Albums' },
                  { id: 'media-videos', title: 'Video Documentaries', desc: 'Interviews & educational craft videos', icon: Video, badge: '48 Videos' },
                  { id: 'media-events', title: 'Event Gallery', desc: 'Mahapanchayat, medical & blood camps', icon: Calendar, badge: '9 Types' },
                  { id: 'islamic-calendar', title: 'Islamic Resources', desc: 'Hijri calendar, Duas, Wudu & Nikah guide', icon: BookOpen, badge: 'Essential' },
                  { id: 'media-downloads', title: 'Downloads Library', desc: 'Forms, constitution & meeting minutes', icon: Download, badge: 'PDF/DOC' },
                  { id: 'media-publications', title: 'Official Publications', desc: 'Rangrez Darpan magazine & annual reports', icon: FileText, badge: 'Magazines' },
                  { id: 'media-links', title: 'Useful Link Directory', desc: 'Scholarships, portals & medical councils', icon: LinkIcon, badge: 'Verified' },
                  { id: 'media-faqs', title: 'FAQs & Help Center', desc: 'Searchable questions, grievance desk & user guide', icon: HelpCircle, badge: 'Support' }
                ].map((card) => (
                  <div
                    key={card.id}
                    onClick={() => onNavigate(card.id)}
                    className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#004B23] shadow-sm hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-[#004B23] text-gray-700 group-hover:text-white flex items-center justify-center transition">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#FFD54A]/20 text-[#0B132B]">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#004B23] transition text-sm">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{card.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                      <span>{getText('Explore Section', 'विभाग देखें', 'سیکشن دیکھیں')}</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News Spotlight & Featured Gallery Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="font-serif font-extrabold text-xl text-gray-900 flex items-center space-x-2">
                    <Newspaper className="h-6 w-6 text-[#004B23]" />
                    <span>{getText('Latest Community News & Press', 'मुख्य समाचार एवं प्रेस विज्ञप्ति', 'تازہ ترین کمیونٹی خبریں')}</span>
                  </h3>
                  <button
                    onClick={() => onNavigate('media-news')}
                    className="text-xs font-bold text-[#004B23] hover:underline flex items-center space-x-1"
                  >
                    <span>{getText('View All News →', 'सभी समाचार देखें →', 'تمام خبریں دیکھیں')}</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {newsArticles.slice(0, 3).map((art) => (
                    <div key={art.id} className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100/80 transition border border-gray-150 flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#004B23] text-white">
                            {art.category}
                          </span>
                          <span className="text-[11px] font-medium text-gray-500">{art.date}</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 hover:text-[#004B23] cursor-pointer transition" onClick={() => setActiveNewsModal(art)}>
                          {getText(art.titleEn, art.titleHi, art.titleUr)}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {getText(art.summaryEn, art.summaryHi, art.summaryEn)}
                        </p>
                      </div>
                      <div className="flex sm:flex-col justify-end items-end gap-2">
                        <button
                          onClick={() => setActiveNewsModal(art)}
                          className="px-3 py-1.5 bg-white text-gray-800 hover:bg-[#004B23] hover:text-white rounded-lg text-xs font-bold border border-gray-200 transition"
                        >
                          {getText('Read Article', 'पूरा पढ़ें', 'مزید پڑھیں')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Islamic Calendar Spotlight & Quick Stats */}
              <div className="bg-[#0B132B] text-white p-6 sm:p-8 rounded-3xl border border-[#FFD54A]/30 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif font-extrabold text-lg text-[#FFD54A] flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{getText('Islamic Hijri Summary', 'इस्लामिक हिजरी सारांश', 'اسلامی ہجری کیلنڈر')}</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-gray-300">
                    Live Moon Data
                  </span>
                </div>
                <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-extrabold text-[#FFD54A] font-mono">18 Dhu al-Hijjah 1447 AH</div>
                  <div className="text-xs text-gray-300 mt-1">Gregorian: June 2026 • Moon Phase: Waning Gibbous</div>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-white/10 text-gray-300">
                    <span>Upcoming Event:</span>
                    <span className="font-bold text-white">Islamic New Year (1448 AH)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10 text-gray-300">
                    <span>Prayer Guidance:</span>
                    <span className="font-bold text-emerald-400">Sunnah Timings Active</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('islamic-calendar')}
                  className="w-full py-3 bg-[#FFD54A] text-[#0B132B] font-extrabold rounded-xl text-xs hover:bg-amber-400 transition shadow-md flex items-center justify-center space-x-2"
                >
                  <span>{getText('Open Islamic Knowledge Center →', 'इस्लामिक ज्ञान केंद्र खोलें →', 'اسلامی مرکز کھولیں →')}</span>
                </button>
              </div>
            </div>

            {/* Featured Media Highlights & Upcoming Events Spotlight */}
            <div className="bg-gradient-to-r from-[#004B23]/10 via-emerald-50 to-[#FFD54A]/10 p-6 sm:p-8 rounded-3xl border border-[#004B23]/20 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#004B23] text-white uppercase tracking-wider">
                    Featured Highlights
                  </span>
                  <h3 className="font-serif font-extrabold text-xl text-gray-900">
                    {getText('Community Photo Albums, Video Documentaries & Upcoming Events', 'सामुदायिक फोटो एल्बम, वीडियो वृत्तचित्र एवं आगामी कार्यक्रम', 'کمیونٹی گیلری اور تقریبات')}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => onNavigate('media-photos')} className="px-3 py-1.5 bg-white hover:bg-[#004B23] hover:text-white text-gray-800 rounded-xl text-xs font-bold transition border border-gray-200">
                    {getText('Photos', 'फोटो', 'تصاویر')}
                  </button>
                  <button onClick={() => onNavigate('media-videos')} className="px-3 py-1.5 bg-white hover:bg-[#004B23] hover:text-white text-gray-800 rounded-xl text-xs font-bold transition border border-gray-200">
                    {getText('Videos', 'वीडियो', 'ویڈیوز')}
                  </button>
                  <button onClick={() => onNavigate('media-events')} className="px-3 py-1.5 bg-[#004B23] text-white hover:bg-[#003a1b] rounded-xl text-xs font-bold transition">
                    {getText('All Events', 'सभी कार्यक्रम', 'تمام تقریبات')}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">Photo Album</span>
                      <span className="text-[11px] font-mono text-gray-400">86 Photos</span>
                    </div>
                    <h4 className="font-bold text-sm text-gray-900">National Mahapanchayat New Delhi Assembly</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">Visual record of delegates, stage proceedings, and resolution signing by state chapter heads.</p>
                  </div>
                  <button onClick={() => onNavigate('media-photos')} className="mt-4 w-full py-2 bg-gray-50 hover:bg-[#004B23] hover:text-white rounded-xl text-xs font-bold text-gray-800 transition">
                    View Photo Gallery →
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Documentary Video</span>
                      <span className="text-[11px] font-mono text-gray-400">18 Mins</span>
                    </div>
                    <h4 className="font-bold text-sm text-gray-900">The Natural Dyer Heritage: From 18th Century to Modern India</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">Exclusive documentary exploring historical indigo dyeing vats and modern sustainable textile exports.</p>
                  </div>
                  <button onClick={() => onNavigate('media-videos')} className="mt-4 w-full py-2 bg-gray-50 hover:bg-[#004B23] hover:text-white rounded-xl text-xs font-bold text-gray-800 transition">
                    Watch Documentary →
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Upcoming Event</span>
                      <span className="text-[11px] font-mono text-emerald-600">June 25, 2026</span>
                    </div>
                    <h4 className="font-bold text-sm text-gray-900">National Youth Leadership & UPSC Bootcamp</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">Three-day residential guidance summit at Bhopal featuring civil servants and corporate mentors.</p>
                  </div>
                  <button onClick={() => onNavigate('media-events')} className="mt-4 w-full py-2 bg-gray-50 hover:bg-[#004B23] hover:text-white rounded-xl text-xs font-bold text-gray-800 transition">
                    Explore Event Details →
                  </button>
                </div>
              </div>
            </div>

            {/* Existing Working Components Integration for Overview */}
            <div className="space-y-12 pt-6 border-t border-gray-200">
              <MediaCenter currentLanguage={currentLanguage} defaultCategory="Photo Gallery" />
              <SocialImpact currentLanguage={currentLanguage} />
              <ResourcesCenter currentLanguage={currentLanguage} />
            </div>
          </div>
        )}

        {/* TAB 2: NEWS & UPDATES */}
        {currentTab === 'news' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative flex-1 w-full max-w-md">
                  <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={getText('Search news bulletin by keyword or location...', 'समाचार या स्थान द्वारा खोजें...', 'خبروں میں تلاش کریں...')}
                    value={newsSearchQuery}
                    onChange={(e) => setNewsSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004B23]"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
                  <span>Showing {filteredNews.length} verified news bulletins</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {['All', 'Community News', 'Official Announcements', 'Press Releases', 'Educational Updates', 'Welfare Updates', 'Mahapanchayat Updates', 'Event Announcements', 'Featured News', 'News Archive'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setNewsCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                      newsCategory === cat
                        ? 'bg-[#004B23] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredNews.map((art) => (
                <div key={art.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition">
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#004B23] text-white uppercase tracking-wider">
                        {art.category}
                      </span>
                      <span className="text-[11px] font-medium text-gray-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {art.readTime}
                      </span>
                    </div>
                    <h3
                      onClick={() => setActiveNewsModal(art)}
                      className="font-serif font-bold text-lg text-gray-900 hover:text-[#004B23] transition cursor-pointer"
                    >
                      {getText(art.titleEn, art.titleHi, art.titleUr)}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {getText(art.summaryEn, art.summaryHi, art.summaryEn)}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-500">{art.date}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveNewsModal(art)}
                        className="px-3 py-1 bg-[#004B23]/10 hover:bg-[#004B23] text-[#004B23] hover:text-white rounded-lg text-xs font-bold transition"
                      >
                        {getText('Read Full', 'पूरा पढ़ें', 'پڑھیں')}
                      </button>
                      <button
                        onClick={() => triggerToast(getText('Article shared to clipboard!', 'लिंक क्लिपबोर्ड पर कॉपी किया गया!', 'لنک کاپی ہو گیا!'))}
                        className="p-1.5 text-gray-500 hover:text-[#004B23] transition rounded-lg hover:bg-white"
                        title="Share"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => triggerToast(getText('PDF Export initiated...', 'पीडीएफ डाउनलोड शुरू...', 'پی ڈی ایف ڈاؤن لوڈ...'))}
                        className="p-1.5 text-gray-500 hover:text-[#004B23] transition rounded-lg hover:bg-white"
                        title="Download PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Also render Press & News Gallery from MediaCenter */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-serif font-extrabold text-gray-900 mb-6">
                {getText('Visual Press Archives & News Gallery', 'प्रेस एवं समाचार फोटो आर्काइव', 'پریس اور نیوز گیلری')}
              </h3>
              <MediaCenter currentLanguage={currentLanguage} defaultCategory="Press & News Gallery" />
            </div>
          </div>
        )}

        {/* TAB 3: PHOTO GALLERY */}
        {currentTab === 'photos' && (
          <div className="space-y-6 animate-fadeIn">
            <MediaCenter currentLanguage={currentLanguage} defaultCategory="Photo Gallery" />
          </div>
        )}

        {/* TAB 4: VIDEO GALLERY */}
        {currentTab === 'videos' && (
          <div className="space-y-6 animate-fadeIn">
            <MediaCenter currentLanguage={currentLanguage} defaultCategory="Video Gallery" />
          </div>
        )}

        {/* TAB 5: EVENT GALLERY */}
        {currentTab === 'events' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative flex-1 w-full max-w-md">
                  <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={getText('Search community events, camps or venues...', 'कार्यक्रम, शिविर या स्थान खोजें...', 'تقریبات تلاش کریں...')}
                    value={eventSearchQuery}
                    onChange={(e) => setEventSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004B23]"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500">Showing {filteredEvents.length} Verified Events</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {['All', 'Mahapanchayat Events', 'Community Meetings', 'Medical Camps', 'Blood Donation Camps', 'Plantation Drives', 'Education Programs', 'Welfare Activities', 'Youth Programs', 'Women’s Programs'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setEventCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                      eventCategory === cat
                        ? 'bg-[#004B23] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between overflow-hidden">
                  {evt.coverImage && (
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <SmartImage 
                        src={evt.coverImage} 
                        alt={evt.titleEn}
                        className="w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#004B23] text-white shadow-sm border border-[#F4C430]/30">
                          {evt.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    {!evt.coverImage && (
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#004B23] text-white">
                          {evt.category}
                        </span>
                        <span className="text-xs font-bold text-emerald-700">{evt.date}</span>
                      </div>
                    )}
                    {evt.coverImage && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-700">{evt.date}</span>
                      </div>
                    )}
                    <h3 className="font-serif font-bold text-lg text-gray-900">{evt.titleEn}</h3>
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-red-500 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{evt.descEn}</p>
                    <div className="flex items-center space-x-3 pt-2 text-[11px] font-bold text-gray-500">
                      <span className="flex items-center text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">
                        <ImageIcon className="h-3.5 w-3.5 mr-1" />
                        {evt.photosCount} Photos
                      </span>
                      <span className="flex items-center text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                        <Video className="h-3.5 w-3.5 mr-1" />
                        {evt.videosCount} Videos
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 w-full">
                      <button 
                        onClick={() => setActiveAlbum(evt)}
                        className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold transition"
                      >
                        <ImageIcon className="h-4 w-4" />
                        <span>{getText('View Album', 'एल्बम देखें', 'البم دیکھیں')}</span>
                      </button>
                      <button 
                        onClick={() => setActiveEventModal(evt)}
                        className="p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-xl transition"
                        title={getText('View Summary', 'सारांश देखें', 'خلاصہ دیکھیں')}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-serif font-extrabold text-gray-900 mb-6">
                {getText('User-Uploaded Event Albums Archive', 'उपयोगकर्ता द्वारा अपलोड किए गए कार्यक्रम एल्बम', 'تقریبات کے البمز')}
              </h3>
              <MediaCenter currentLanguage={currentLanguage} defaultCategory="Event Albums" />
            </div>
          </div>
        )}

        {/* TAB 5.5: REGIONAL GALLERY */}
        {currentTab === 'regional' && (
          <div className="space-y-6 animate-fadeIn">
            <MediaCenter currentLanguage={currentLanguage} defaultCategory="Regional Galleries" />
          </div>
        )}

        {/* TAB 6: ISLAMIC RESOURCES */}
        {currentTab === 'islamic' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Islamic sub-navigation */}
            <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap gap-2 justify-center">
              {[
                { id: 'calendar', label: 'Hijri Calendar & Moon Phases', icon: Calendar },
                { id: 'knowledge', label: 'Islamic Knowledge Hub (Qur\'an & Duas)', icon: BookOpen },
                { id: 'prayer', label: 'Prayer & Etiquette Guides (Wudu, Janazah, Nikah)', icon: ShieldCheck }
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setIslamicSubTab(sub.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 ${
                    islamicSubTab === sub.id
                      ? 'bg-[#004B23] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <sub.icon className="h-4 w-4" />
                  <span>{sub.label}</span>
                </button>
              ))}
            </div>

            {islamicSubTab === 'calendar' && (
              <IslamicCalendar currentLanguage={currentLanguage} />
            )}

            {islamicSubTab === 'knowledge' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Daily Duas Collection', desc: 'Verified supplications for morning, evening, travel, and hardship with Arabic text and translation.', tag: 'Duas', icon: '🤲' },
                  { title: 'Holy Qur\'an Recitation Resources', desc: 'Audio links, Tajweed guidance, and printable PDF Surah books (Yaseen, Mulk, Kahf).', tag: 'Qur\'an', icon: '📖' },
                  { title: 'Hadith on Community & Brotherhood', desc: 'Authentic Sahih Bukhari & Muslim teachings on social unity, charity, and fair trading.', tag: 'Hadith', icon: '📜' },
                  { title: 'Scholarly Islamic Articles', desc: 'Contemporary essays on youth ethics, family harmony, and balancing career with Deen.', tag: 'Articles', icon: '📝' },
                  { title: 'Classic Islamic Books Library', desc: 'Curated PDF eBooks of Seerah, Fiqh essentials, and Islamic history for family reading.', tag: 'Books', icon: '📚' },
                  { title: 'Video Lectures & Bayan Archive', desc: 'Inspiring video lectures by renowned scholars on character building and social reform.', tag: 'Videos', icon: '🎥' },
                  { title: 'Daily Islamic Quotes & Wisdom', desc: 'Shareable graphic quotes from Quran and Sunnah for daily spiritual motivation.', tag: 'Quotes', icon: '💬' },
                  { title: 'Historical Muslim Artisans & Dyers', desc: 'Scholarly articles on the historical contribution of Rangrez craft guilds to Indian textile heritage.', tag: 'History', icon: '🏛️' },
                  { title: 'Zakat & Waqf Awareness Manual', desc: 'Calculation methodologies for Zakat on trade assets and community Waqf property protection.', tag: 'Awareness', icon: '💡' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#004B23]/10 text-[#004B23]">
                          {item.tag}
                        </span>
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <h3 className="font-serif font-bold text-base text-gray-900">{item.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setActiveIslamicModal(item)}
                      className="w-full py-2 bg-gray-50 hover:bg-[#004B23] text-gray-800 hover:text-white rounded-xl text-xs font-bold transition border border-gray-200 flex items-center justify-center space-x-1"
                    >
                      <span>{getText('Explore Knowledge Base →', 'ज्ञान केंद्र खोलें →', 'مزید پڑھیں →')}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {islamicSubTab === 'prayer' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Prayer Guide (Salah & Timings)', desc: 'Complete illustrated guide to 5 daily prayers according to authenticated Sunnah traditions, plus Qasr rules for travelers.', color: 'border-emerald-200 bg-emerald-50/30', btn: 'bg-[#004B23] text-white', icon: '🕌' },
                  { title: 'Wudu Guide (Step-by-Step Ablution)', desc: 'Detailed step-by-step ablution manual with Sunnah supplications before and after Wudu, and rules for Tayammum.', color: 'border-blue-200 bg-blue-50/30', btn: 'bg-blue-800 text-white', icon: '💧' },
                  { title: 'Janazah Guide (Funeral & Burial Rites)', desc: 'Essential instructions for bathing the deceased (Ghusl), shrouding (Kafan), Salat al-Janazah, and burial etiquette.', color: 'border-amber-200 bg-amber-50/30', btn: 'bg-amber-800 text-white', icon: '⚰️' },
                  { title: 'Nikah Guide (Dowry-Free Sunnah Marriage)', desc: 'Community marriage protocols, Khutbah text, Mahr determination, and mutual pledge against dowry practices.', color: 'border-purple-200 bg-purple-50/30', btn: 'bg-purple-800 text-white', icon: '💍' },
                  { title: 'Islamic Etiquettes (Business & Social)', desc: 'Halal trading principles, honest weight standards, honoring parents, and treating neighbors with compassion.', color: 'border-teal-200 bg-teal-50/30', btn: 'bg-teal-800 text-white', icon: '🤝' }
                ].map((guide, idx) => (
                  <div key={idx} className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between space-y-4 ${guide.color}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{guide.icon}</span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-gray-700 shadow-2xs">Verified Guide</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-gray-900">{guide.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">{guide.desc}</p>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <button
                        onClick={() => setActiveIslamicModal(guide)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${guide.btn}`}
                      >
                        Read Online Guide
                      </button>
                      <button
                        onClick={() => triggerToast(getText(`Downloading ${guide.title} PDF Manual...`, 'पीडीएफ डाउनलोड हो रही है...', 'ڈاؤن لوڈ ہو رہا ہے...'))}
                        className="p-2.5 bg-white hover:bg-gray-100 text-gray-700 rounded-xl border border-gray-200"
                        title="Download Manual PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 7: DOWNLOADS */}
        {currentTab === 'downloads' && (
          <div className="space-y-8 animate-fadeIn">
            <ResourcesCenter currentLanguage={currentLanguage} />
          </div>
        )}

        {/* TAB 8: PUBLICATIONS */}
        {currentTab === 'publications' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {getText('OFFICIAL LITERARY & RESEARCH CELL', 'अधिकारिक साहित्यिक एवं शोध केंद्र', 'ادبی اور تحقیقی مرکز')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
                {getText('Community Magazines, Newsletters & Annual Reports', 'सामुदायिक पत्रिकाएं, न्यूज़लेटर एवं वार्षिक रिपोर्ट', 'کمیونٹی میگزین اور سالانہ رپورٹس')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Rangrez Darpan — Monthly Edition (May 2026)', category: 'Community Magazine', pages: 48, size: '8.4 MB', year: 2026 },
                { title: 'Annual Community Progress & Impact Report 2025-26', category: 'Annual Reports', pages: 112, size: '14.2 MB', year: 2026 },
                { title: 'Natural Dyeing Craft: Research & Modernization Handbook', category: 'Research Articles', pages: 64, size: '6.1 MB', year: 2025 },
                { title: 'Higher Education & Scholarship Career Guidebook', category: 'Educational Material', pages: 36, size: '4.5 MB', year: 2026 },
                { title: 'Dowry-Free Social Reform Awareness Booklet', category: 'Awareness Booklets', pages: 24, size: '2.8 MB', year: 2025 },
                { title: 'National Mahapanchayat Summit Souvenir 2026', category: 'Souvenirs', pages: 80, size: '18.0 MB', year: 2026 }
              ].map((pub, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#004B23] text-white">
                        {pub.category}
                      </span>
                      <span className="text-xs font-mono text-gray-400">{pub.year}</span>
                    </div>
                    <h3 className="font-serif font-bold text-base text-gray-900">{pub.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{pub.pages} Pages • Verified Printable PDF • Size: {pub.size}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => setActivePdfViewer({ title: pub.title, size: pub.size, pages: pub.pages })}
                      className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition"
                    >
                      <Eye className="h-4 w-4 text-[#004B23]" />
                      <span>{getText('View PDF', 'पीडीएफ देखें', 'پی ڈی ایف دیکھیں')}</span>
                    </button>
                    <button
                      onClick={() => triggerToast(getText(`Downloading ${pub.title}...`, `${pub.title} डाउनलोड हो रहा है...`, `${pub.title} ڈاؤن لوڈ ہو رہا ہے...`))}
                      className="px-4 py-2 bg-[#004B23] hover:bg-[#003b1c] text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                    >
                      <Download className="h-4 w-4 text-[#FFD54A]" />
                      <span>{getText('Download', 'डाउनलोड', 'ڈاؤن لوڈ')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: USEFUL LINKS */}
        {currentTab === 'links' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {['All', 'Government', 'Education', 'Scholarships', 'Jobs', 'Hospitals', 'Emergency Services', 'Minority Welfare', 'Medical Councils', 'Universities', 'Career Portals', 'NGOs', 'Community Resources'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setLinkCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                      linkCategory === cat
                        ? 'bg-[#004B23] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">Verified National & Welfare Directories</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLinks.map((link, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#004B23] transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700">
                        {link.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified URL
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-gray-900">{link.titleEn}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{link.descEn}</p>
                  </div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 py-2.5 bg-[#004B23]/10 hover:bg-[#004B23] text-[#004B23] hover:text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition"
                  >
                    <span>{getText('Open Official Website', 'अधिकारिक वेबसाइट खोलें', 'سرکاری ویب سائٹ کھولیں')}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 10: FAQs & HELP CENTER */}
        {currentTab === 'faqs' && (
          <div className="space-y-12 animate-fadeIn">
            <HelpSupport currentLanguage={currentLanguage} />
          </div>
        )}
      </div>

      {/* PDF Viewer Simulation Modal */}
      {activePdfViewer && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 bg-[#0B132B] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-[#FFD54A]" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">{activePdfViewer.title}</h3>
                  <p className="text-xs text-gray-300">{activePdfViewer.pages} Pages • Size: {activePdfViewer.size}</p>
                </div>
              </div>
              <button
                onClick={() => setActivePdfViewer(null)}
                className="p-2 text-gray-400 hover:text-white rounded-xl bg-white/10"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-8 bg-gray-100 overflow-y-auto flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
              <div className="w-24 h-32 bg-white border border-gray-300 shadow-md rounded-lg flex items-center justify-center mx-auto text-gray-400">
                <FileText className="h-10 w-10" />
              </div>
              <p className="text-sm font-bold text-gray-800">PDF Interactive Preview Mode</p>
              <p className="text-xs text-gray-500 max-w-md">
                This document is officially registered in the Rangrez Community Bharat media archive. Click below to download or print the full high-resolution version.
              </p>
            </div>
            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-end space-x-3">
              <button
                onClick={() => triggerToast(getText('Printing document...', 'दस्तावेज प्रिंट हो रहा है...', 'پرنٹ کیا جا رہا ہے...'))}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center space-x-1.5"
              >
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </button>
              <button
                onClick={() => {
                  triggerToast(getText('Download started...', 'डाउनलोड शुरू...', 'ڈاؤن لوڈ شروع...'));
                  setActivePdfViewer(null);
                }}
                className="px-5 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm"
              >
                <Download className="h-4 w-4 text-[#FFD54A]" />
                <span>Download Full PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* News & Press Article Modal */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[90vh]">
            <div className="p-6 bg-[#004B23] text-white flex items-start justify-between">
              <div className="space-y-2 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFD54A] text-[#0B132B] uppercase">
                    {activeNewsModal.category}
                  </span>
                  <span className="text-xs text-gray-200 font-mono flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {activeNewsModal.date} • {activeNewsModal.readTime}
                  </span>
                </div>
                <h3 className="font-serif font-extrabold text-xl sm:text-2xl leading-tight">
                  {getText(activeNewsModal.titleEn, activeNewsModal.titleHi, activeNewsModal.titleUr)}
                </h3>
              </div>
              <button onClick={() => setActiveNewsModal(null)} className="p-2 text-gray-300 hover:text-white rounded-xl bg-white/10 shrink-0">
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 font-serif italic text-sm text-gray-700 leading-relaxed">
                "{getText(activeNewsModal.summaryEn, activeNewsModal.summaryHi, activeNewsModal.summaryEn)}"
              </div>
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700">
                <p>
                  {getText(
                    `NEW DELHI / BHOPAL: In a landmark initiative by the All India Rangrez Mahasabha, the national leadership has issued detailed guidelines and actionable roadmaps regarding ${activeNewsModal.titleEn}. The resolution was adopted unanimously by state chapter presidents during the recent consultative summit.`,
                    `नई दिल्ली / भोपाल: ऑल इंडिया रंगरेज़ महासभा द्वारा एक ऐतिहासिक पहल में, राष्ट्रीय नेतृत्व ने ${activeNewsModal.titleHi} के संबंध में विस्तृत दिशा-निर्देश और कार्ययोजना जारी की है। हाल ही में आयोजित परामर्श शिखर सम्मेलन के दौरान राज्य अध्यक्षों द्वारा प्रस्ताव को सर्वसम्मति से अपनाया गया।`,
                    `نئی دہلی / بھوپال: آل انڈیا رنگریز مہاسبھا کے ایک تاریخی اقدام میں، قومی قیادت نے ${activeNewsModal.titleUr} کے حوالے سے تفصیلی رہنما خطوط اور لائحہ عمل جاری کیا ہے۔ حال ہی میں منعقدہ مشاورتی سمٹ کے دوران ریاستی صدور کی جانب سے اس قرارداد کو متفقہ طور پر منظور کیا گیا۔`
                  )}
                </p>
                <p>
                  {getText(
                    "Community elders and welfare coordinators emphasized the critical importance of grassroot execution. State welfare chapters have been instructed to organize regional awareness workshops, distribute educational materials, and ensure equitable access to support schemes across rural and urban districts.",
                    "सामुदायिक बुजुर्गों और कल्याण समन्वयकों ने जमीनी स्तर पर क्रियान्वयन के महत्व पर जोर दिया। राज्य कल्याण अध्यायों को क्षेत्रीय जागरूकता कार्यशालाएं आयोजित करने, शैक्षिक सामग्री वितरित करने और ग्रामीण व शहरी जिलों में सहायता योजनाओं तक समान पहुंच सुनिश्चित करने का निर्देश दिया गया है।",
                    "کمیونٹی کے بزرگوں اور فلاحی کوآرڈینیٹرز نے بنیادی سطح پر عمل درآمد کی اہمیت پر زور دیا۔ ریاستی فلاحی چیپٹرز کو ہدایت دی گئی ہے کہ وہ علاقائی آگاہی ورکشاپس کا انعقاد کریں، تعلیمی مواد تقسیم کریں، اور دیہی و شہری اضلاع میں امدادی اسکیموں تک مساوی رسائی کو یقینی بنائیں۔"
                  )}
                </p>
                <p>
                  {getText(
                    "All members are requested to share this verified bulletin within their local Jamaats and social media circles to combat misinformation and foster collective progress.",
                    "सभी सदस्यों से अनुरोध है कि वे इस सत्यापित बुलेटिन को अपनी स्थानीय जमात और सोशल मीडिया समूहों में साझा करें ताकि गलत सूचनाओं पर रोक लग सके और सामूहिक प्रगति हो सके।",
                    "تمام اراکین سے درخواست ہے کہ وہ اس تصدیق شدہ بلیٹن کو اپنی مقامی جماعتوں اور سوشل میڈیا گروپس میں شیئر کریں تاکہ غلط معلومات کا مقابلہ کیا جا سکے اور اجتماعی ترقی کو فروغ ملے۔"
                  )}
                </p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-gray-500">Official Release Bulletin</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => triggerToast(getText('Article shared to clipboard!', 'लिंक क्लिपबोर्ड पर कॉपी किया गया!', 'لنک کاپی ہو گیا!'))}
                  className="px-3 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-xl text-xs font-bold border border-gray-200 flex items-center space-x-1.5 transition"
                >
                  <Share2 className="h-3.5 w-3.5 text-[#004B23]" />
                  <span>Share</span>
                </button>
                <button
                  onClick={() => triggerToast(getText('Printing news article...', 'समाचार प्रिंट हो रहा है...', 'پرنٹ کیا جا رہا ہے...'))}
                  className="px-3 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-xl text-xs font-bold border border-gray-200 flex items-center space-x-1.5 transition"
                >
                  <Printer className="h-3.5 w-3.5 text-gray-600" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => triggerToast(getText('Downloading PDF bulletin...', 'पीडीएफ डाउनलोड हो रहा है...', 'ڈاؤن لوڈ ہو رہا ہے...'))}
                  className="px-4 py-2 bg-[#004B23] hover:bg-[#003a1b] text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                >
                  <Download className="h-3.5 w-3.5 text-[#FFD54A]" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Media & Summary Modal */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[90vh]">
            <div className="p-6 bg-gradient-to-r from-[#004B23] to-emerald-800 text-white flex items-start justify-between">
              <div className="space-y-2 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFD54A] text-[#0B132B] uppercase">
                    {activeEventModal.category}
                  </span>
                  <span className="text-xs text-emerald-200 font-bold flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {activeEventModal.date}
                  </span>
                </div>
                <h3 className="font-serif font-extrabold text-xl sm:text-2xl leading-tight">
                  {activeEventModal.titleEn}
                </h3>
                <p className="text-xs text-gray-200 flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-red-400 shrink-0" />
                  {activeEventModal.venue}
                </p>
              </div>
              <button onClick={() => setActiveEventModal(null)} className="p-2 text-gray-300 hover:text-white rounded-xl bg-white/10 shrink-0">
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800">
              <p className="text-sm leading-relaxed text-gray-700">
                {activeEventModal.descEn}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                  <div className="text-2xl font-black text-purple-800 font-mono">{activeEventModal.photosCount}</div>
                  <div className="text-xs font-bold text-purple-600">Archived Photos</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                  <div className="text-2xl font-black text-blue-800 font-mono">{activeEventModal.videosCount}</div>
                  <div className="text-xs font-bold text-blue-600">Video Recordings</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center col-span-2 sm:col-span-1">
                  <div className="text-lg font-black text-emerald-800 font-mono">{activeEventModal.reportSize}</div>
                  <div className="text-xs font-bold text-emerald-600">Official Report PDF</div>
                </div>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#004B23] flex items-center space-x-1.5">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Quick Media Navigation</span>
                </h4>
                <p className="text-xs text-gray-600">
                  To browse full high-resolution photo albums or watch full stage video recordings for this event, jump directly to our centralized Media Galleries:
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    onClick={() => {
                      setActiveEventModal(null);
                      onNavigate('media-photos');
                    }}
                    className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>Open Photo Albums ({activeEventModal.photosCount})</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveEventModal(null);
                      onNavigate('media-videos');
                    }}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <Video className="h-4 w-4" />
                    <span>Watch Videos ({activeEventModal.videosCount})</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500">Rangrez Event Archive</span>
              <button
                onClick={() => triggerToast(getText(`Downloading ${activeEventModal.titleEn} Report (${activeEventModal.reportSize})...`, 'रिपोर्ट डाउनलोड हो रही है...', 'رپورٹ ڈاؤن لوڈ ہو رہی ہے...'))}
                className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00391a] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-sm"
              >
                <Download className="h-4 w-4 text-[#FFD54A]" />
                <span>Download Complete Report PDF ({activeEventModal.reportSize})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Islamic Resource Guide Modal */}
      {activeIslamicModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[90vh]">
            <div className="p-6 bg-[#0B132B] text-white flex items-start justify-between border-b border-white/10">
              <div className="space-y-2 pr-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFD54A] text-[#0B132B] uppercase">
                  {activeIslamicModal.tag || 'Verified Guide'}
                </span>
                <h3 className="font-serif font-extrabold text-xl sm:text-2xl leading-tight text-[#FFD54A]">
                  {activeIslamicModal.title}
                </h3>
              </div>
              <button onClick={() => setActiveIslamicModal(null)} className="p-2 text-gray-300 hover:text-white rounded-xl bg-white/10 shrink-0">
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800">
              <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-200/60 font-medium text-sm text-gray-800 leading-relaxed">
                {activeIslamicModal.desc}
              </div>
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700">
                <p>
                  {getText(
                    `This educational resource has been verified and compiled by Islamic scholars and historical experts of the All India Rangrez Community. It provides clear, authentic guidance strictly in accordance with Sunnah principles and community welfare standards.`,
                    `यह शैक्षिक संसाधन ऑल इंडिया रंगरेज़ समुदाय के इस्लामी विद्वानों और ऐतिहासिक विशेषज्ञों द्वारा सत्यापित और संकलित किया गया है। यह सुन्नत सिद्धांतों और सामुदायिक कल्याण मानकों के अनुसार स्पष्ट और प्रामाणिक मार्गदर्शन प्रदान करता है।`,
                    `یہ تعلیمی مواد آل انڈیا رنگریز کمیونٹی کے اسلامی علماء اور تاریخی ماہرین کی جانب سے تصدیق شدہ اور مرتب کیا گیا ہے۔ یہ سنت کے اصولوں اور کمیونٹی کے فلاحی معیارات کے مطابق واضح اور مستند رہنمائی فراہم کرتا ہے۔`
                  )}
                </p>
                <h4 className="font-bold text-gray-900 text-sm mt-4">Key Learning Objectives & Highlights:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Comprehensive step-by-step instructions with Arabic supplications and translations.</li>
                  <li>Community protocols for conducting social affairs without extravagance or dowry.</li>
                  <li>Historical insights into the ethical trade guilds and natural indigo dyeing craftsmanship.</li>
                  <li>Printable reference sheets for easy sharing in local mosques, educational centers, and jamaats.</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 font-mono">Islamic Knowledge Center</span>
              <button
                onClick={() => {
                  triggerToast(getText(`Downloading ${activeIslamicModal.title} Handbook PDF...`, 'पीडीएफ डाउनलोड शुरू...', 'ڈاؤن لوڈ شروع...'));
                  setActiveIslamicModal(null);
                }}
                className="px-5 py-2.5 bg-[#004B23] hover:bg-[#003a1b] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-sm"
              >
                <Download className="h-4 w-4 text-[#FFD54A]" />
                <span>Download Complete Guide PDF (1.8 MB)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      {showGlobalSearch && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-20 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200">
            <div className="p-5 bg-[#0B132B] text-white flex items-center space-x-3">
              <Search className="h-5 w-5 text-[#FFD54A]" />
              <input
                type="text"
                placeholder="Search news, photos, videos, downloads, FAQs, useful links..."
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none text-white placeholder-gray-400 text-sm focus:outline-none"
                autoFocus
              />
              <button onClick={() => setShowGlobalSearch(false)} className="text-gray-400 hover:text-white text-sm font-bold">
                ESC
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              <p className="text-xs text-gray-500 font-medium">Quick search results across 8 community modules:</p>
              <div className="space-y-2">
                {[
                  { title: 'Constitution Rulebook v2026 PDF', type: 'Download', tab: 'media-downloads' },
                  { title: 'Mass Nikah Dowry-Free Guidelines', type: 'News & Press', tab: 'media-news' },
                  { title: 'Historical Dyeing Heritage Video Documentary', type: 'Video Gallery', tab: 'media-videos' },
                  { title: 'National Scholarship Portal Link', type: 'Useful Link', tab: 'media-links' },
                  { title: 'Hijri Calendar & Moon Sighting Notifications', type: 'Islamic Resource', tab: 'islamic-calendar' }
                ].map((res, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setShowGlobalSearch(false);
                      onNavigate(res.tab);
                    }}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-between cursor-pointer transition"
                  >
                    <div>
                      <span className="text-xs font-bold text-gray-900">{res.title}</span>
                      <span className="block text-[10px] font-bold text-[#004B23]">{res.type}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="font-serif font-extrabold text-xl text-[#0B132B] flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-[#004B23]" />
                <span>{getText('Media & Resources Analytics Dashboard', 'मीडिया एवं संसाधन विश्लेषण डैशबोर्ड', 'میڈیا اور وسائل کا تجزیاتی ڈیش بورڈ')}</span>
              </h3>
              <button onClick={() => setShowAnalyticsModal(false)} className="text-gray-400 hover:text-gray-700 font-bold">✕</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                <div className="text-2xl font-black text-emerald-800">142,850+</div>
                <div className="text-xs font-bold text-emerald-600">Total Media Views</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <div className="text-2xl font-black text-blue-800">34,920+</div>
                <div className="text-xs font-bold text-blue-600">Document Downloads</div>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
                <div className="text-2xl font-black text-amber-800">99.8%</div>
                <div className="text-xs font-bold text-amber-600">System Uptime</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Most Downloaded Official Files</h4>
              <div className="space-y-2 text-xs font-semibold text-gray-800">
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span>1. Constitution Rulebook v2026 PDF</span><span className="text-[#004B23]">4,120 downloads</span></div>
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span>2. Higher Education Scholarship Form 2026</span><span className="text-[#004B23]">3,890 downloads</span></div>
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span>3. Waqf & Property Dispute Guidelines</span><span className="text-[#004B23]">2,450 downloads</span></div>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setShowAnalyticsModal(false)} className="px-6 py-2.5 bg-[#0B132B] text-white rounded-xl text-xs font-bold">Close Dashboard</button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-[#004B23]" />
                <h3 className="font-serif font-extrabold text-xl text-gray-900">Media & Resources Admin Management Panel</h3>
              </div>
              <button onClick={() => setShowAdminModal(false)} className="text-gray-400 hover:text-gray-700 font-bold">✕</button>
            </div>
            <div className="flex space-x-2 border-b border-gray-100 pb-3">
              {['News Management', 'Gallery Management', 'Downloads Management', 'Security & Backups'].map((tabLabel, i) => (
                <button key={i} className={`px-4 py-2 rounded-xl text-xs font-bold ${i === 0 ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {tabLabel}
                </button>
              ))}
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4 text-center">
              <Lock className="h-8 w-8 text-[#004B23] mx-auto" />
              <h4 className="font-bold text-sm text-gray-900">Verified Admin Control Mode Active</h4>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                All uploaded assets undergo SHA-256 duplicate validation and automated cloud backups. Role-based moderation protects community press releases and legal forms.
              </p>
              <button
                onClick={() => triggerToast(getText('System backup triggered successfully!', 'सिस्टम बैकअप सफल!', 'سسٹم بیک اپ مکمل!'))}
                className="px-5 py-2.5 bg-[#004B23] text-white rounded-xl text-xs font-bold inline-flex items-center space-x-2 shadow-sm"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Trigger Manual Cloud Backup</span>
              </button>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setShowAdminModal(false)} className="px-6 py-2.5 bg-gray-800 text-white rounded-xl text-xs font-bold">Exit Admin Panel</button>
            </div>
          </div>
        </div>
      )}
      {/* Album Lightbox */}
      {activeAlbum && (
        <PremiumLightbox
          isOpen={!!activeAlbum}
          onClose={() => setActiveAlbum(null)}
          items={activeAlbum.images.map((img: string) => ({
            src: img,
            type: 'image',
            title: currentLanguage === 'en' ? activeAlbum.titleEn : activeAlbum.titleHi,
            metadata: `${activeAlbum.location.district}, ${activeAlbum.location.state} • ${activeAlbum.dateFormatted} • ${activeAlbum.eventType}`
          }))}
          initialIndex={0}
        />
      )}
    </div>
  );
}
