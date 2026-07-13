import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Bot, X, Send, Search, Minimize2, Maximize2, RefreshCw, 
  Volume2, VolumeX, Mic, MicOff, HelpCircle, Shield, Award, Heart, 
  Users, BookOpen, Briefcase, FileText, Phone, Building2, ChevronRight, 
  CheckCircle2, AlertCircle, TrendingUp, Settings, Plus, Trash2, 
  MessageSquare, BarChart3, Radio, ArrowUpRight, Check, Globe
} from 'lucide-react';
import { Language } from '../types';

interface IqraAIAssistantProps {
  currentLanguage: Language;
  onNavigate: (tab: string) => void;
  activeTab?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    tab: string;
    icon?: string;
  };
  followUps?: string[];
  isVerified?: boolean;
}

interface SearchItem {
  id: string;
  title: string;
  category: 'page' | 'scholarship' | 'job' | 'hospital' | 'document' | 'scheme';
  description: string;
  tab: string;
  badge?: string;
}

const WEBSITE_SEARCH_DATABASE: SearchItem[] = [
  { id: '1', title: 'Family Census & Registration', category: 'page', description: 'Official national population census to register families, dependents, and profession.', tab: 'membership-census', badge: 'Popular' },
  { id: '2', title: 'Maulana Abul Kalam Azad Merit Scholarship', category: 'scholarship', description: 'Financial grant up to ₹25,000 for Class 10th and 12th meritorious students.', tab: 'scholarships', badge: 'Open Now' },
  { id: '3', title: 'Standard Matrimonial & Nikah Registry', category: 'page', description: 'Verified matchmaking registry for unmarried brides and grooms of Rangrez samaj.', tab: 'matrimonial', badge: 'Verified' },
  { id: '4', title: 'Second Marriage ✨ Premium Portal', category: 'page', description: 'Dignified, confidential remarriage registry for widows, widowers, and divorced members.', tab: 'matrimonial-second', badge: 'Premium ✨' },
  { id: '5', title: '24×7 Emergency Blood Donor Directory', category: 'hospital', description: 'Search volunteer blood donors by blood group (O+, B+, A+, AB-) across 28 states.', tab: 'welfare-blood-donors', badge: 'Emergency 🚨' },
  { id: '6', title: 'PM Vishwakarma Artisan Loan Scheme', category: 'scheme', description: 'Central government low-interest loan up to ₹3 Lakhs for traditional textile dyers.', tab: 'schemes', badge: 'Govt Scheme' },
  { id: '7', title: 'Digital ID Card & Verification Badge', category: 'page', description: 'Generate your official QR-coded community identity card for voting and welfare benefits.', tab: 'membership-id', badge: 'Instant' },
  { id: '8', title: 'Begum Hazrat Mahal Higher Education Grant', category: 'scholarship', description: 'Special scholarship fund dedicated to girl students pursuing graduation & medical degrees.', tab: 'scholarships', badge: 'Girls Special' },
  { id: '9', title: 'IT & Software Development Jobs Hub', category: 'job', description: 'Verified employment listings from Rangrez IT professionals and corporate partners.', tab: 'jobs-careers', badge: 'Urgent Hiring' },
  { id: '10', title: 'Family Tree Mapping (Shajra Nasab)', category: 'page', description: 'Document up to 7 generations of your family lineage and connect ancestral branches.', tab: 'membership-tree', badge: 'Heritage' },
  { id: '11', title: 'Welfare Hospital & Discounted Healthcare', category: 'hospital', description: 'Network of partner hospitals offering 15% to 50% discount on surgeries and ICU treatments.', tab: 'welfare-hospital', badge: 'Healthcare' },
  { id: '12', title: 'Community Constitution & Legal Rights PDF', category: 'document', description: 'Download official PDF of All India Rangrez Community Constitution and citizen rights.', tab: 'media-downloads', badge: 'Official PDF' },
  { id: '13', title: 'National Volunteer Corps Registration', category: 'page', description: 'Join Rangrez Khidmatgar to volunteer for disaster relief, blood camps, and education.', tab: 'volunteer-registration', badge: 'Service' },
  { id: '14', title: '11 Historic Resolutions Against Dowry', category: 'document', description: 'Official Mahapanchayat resolutions banning dowry and capping wedding expenses.', tab: 'mahapanchayat', badge: 'Social Reform' },
  { id: '15', title: 'UPSC / State PSC Civil Services Coaching Stipend', category: 'scholarship', description: 'Free residential coaching support and stipend for civil service aspirants.', tab: 'competitive-exams', badge: 'Career' },
];

const SUGGESTED_QUICK_ACTIONS = [
  { label: 'Family Registration', tab: 'membership-census', icon: 'Users', color: 'from-emerald-600 to-green-700' },
  { label: 'Become a Member', tab: 'membership-register', icon: 'Award', color: 'from-amber-600 to-yellow-600' },
  { label: 'Apply for Scholarship', tab: 'scholarships', icon: 'BookOpen', color: 'from-blue-600 to-indigo-700' },
  { label: 'Search Jobs', tab: 'jobs-careers', icon: 'Briefcase', color: 'from-purple-600 to-violet-700' },
  { label: 'Find Blood Donor', tab: 'welfare-blood-donors', icon: 'Heart', color: 'from-rose-600 to-red-700' },
  { label: 'Find Hospital', tab: 'welfare-hospital', icon: 'Building2', color: 'from-teal-600 to-cyan-700' },
  { label: 'Open Matrimonial', tab: 'matrimonial', icon: 'Heart', color: 'from-pink-600 to-rose-600' },
  { label: 'Second Marriage ✨', tab: 'matrimonial-second', icon: 'Sparkles', color: 'from-amber-500 to-amber-700' },
  { label: 'Government Schemes', tab: 'schemes', icon: 'Shield', color: 'from-slate-700 to-slate-900' },
  { label: 'Contact Committee', tab: 'contact', icon: 'Phone', color: 'from-green-700 to-emerald-800' },
  { label: 'Mahapanchayat', tab: 'mahapanchayat', icon: 'Globe', color: 'from-indigo-700 to-blue-900' },
  { label: 'Latest News', tab: 'media-news', icon: 'FileText', color: 'from-cyan-600 to-blue-700' },
  { label: 'Download Documents', tab: 'media-downloads', icon: 'FileText', color: 'from-orange-600 to-amber-700' },
  { label: 'Volunteer Registration', tab: 'volunteer-registration', icon: 'Heart', color: 'from-emerald-600 to-teal-700' },
  { label: 'Donate to Welfare', tab: 'donate', icon: 'Award', color: 'from-yellow-600 to-amber-700' },
];

export default function IqraAIAssistant({ currentLanguage, onNavigate, activeTab }: IqraAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const stored = localStorage.getItem('rcb_iqra_is_open');
      return stored !== null ? JSON.parse(stored) : false;
    } catch { return false; }
  });
  const [isMinimized, setIsMinimized] = useState(() => {
    try {
      const stored = localStorage.getItem('rcb_iqra_is_minimized');
      return stored !== null ? JSON.parse(stored) : false;
    } catch { return false; }
  });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeMode, setActiveMode] = useState<'chat' | 'search' | 'admin'>('chat');
  const [chatLang, setChatLang] = useState<'en' | 'hi' | 'ur'>(currentLanguage);
  
  // Save state to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem('rcb_iqra_is_open', JSON.stringify(isOpen));
      localStorage.setItem('rcb_iqra_is_minimized', JSON.stringify(isMinimized));
    } catch {}
  }, [isOpen, isMinimized]);

  // Update chat language when website language changes
  useEffect(() => {
    setChatLang(currentLanguage);
  }, [currentLanguage]);

  // Listen for custom launch event from Header or other buttons
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener('open-iqra-ai', handleOpen);
    return () => window.removeEventListener('open-iqra-ai', handleOpen);
  }, []);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [searchCategory, setSearchCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Admin & Analytics State
  const [broadcastBanner, setBroadcastBanner] = useState<string>('📢 National Rangrez Mahapanchayat on 15th August 2026 – All families requested to complete census!');
  const [customFAQs, setCustomFAQs] = useState<{ id: string; question: string; answer: string; tab?: string }[]>([
    { id: 'faq-1', question: 'What is the fee for annual membership?', answer: 'The annual membership fee is ₹500, while Lifetime Membership is ₹5,100 with full voting rights.', tab: 'membership-register' },
    { id: 'faq-2', question: 'Who is eligible for Second Marriage portal?', answer: 'Any widow, widower, divorced, or legally separated member of the Rangrez community can register with total confidentiality.', tab: 'matrimonial-second' }
  ]);
  const [newFaqQ, setNewFaqQ] = useState('');
  const [newFaqA, setNewFaqA] = useState('');
  const [newFaqTab, setNewFaqTab] = useState('membership-register');
  const [adminBannerInput, setAdminBannerInput] = useState(broadcastBanner);
  const [moduleToggles, setModuleToggles] = useState<Record<string, boolean>>({
    matrimonial: true,
    scholarships: true,
    census: true,
    schemes: true,
    jobs: true
  });

  // Initial Welcome Messages based on Language
  const getWelcomeMessage = (lang: 'en' | 'hi' | 'ur'): Message => {
    if (lang === 'hi') {
      return {
        id: 'welcome-hi',
        sender: 'ai',
        text: 'नमस्ते! मैं इकरा (Iqra AI Assistant) हूँ — रंगरेज़ समाज भारत पोर्टल की आपकी 24×7 डिजिटल मार्गदर्शन सहायिका। मैं पूरे पोर्टल के किसी भी फीचर, फॉर्म, छात्रवृत्ति, निकाह रिश्ते या सदस्यता में आपकी सहायता कर सकती हूँ। आज मैं आपकी क्या सेवा कर सकती हूँ?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: ['परिवार का पंजीकरण कैसे करें?', 'कौन सी छात्रवृत्तियां उपलब्ध हैं?', 'दूसरा विवाह (विशेष रिश्ते) पोर्टल क्या है?', 'इमरजेंसी ब्लड डोनर कैसे खोजें?']
      };
    } else if (lang === 'ur') {
      return {
        id: 'welcome-ur',
        sender: 'ai',
        text: 'السلام علیکم! میں اقراء (Iqra AI Assistant) ہوں — رنگریز سماج بھارت پورٹل کی 24×7 ڈیجیٹل رہنما۔ میں پورے پورٹل کے کسی بھی شعبے، وظائف، نکاح و شادی بیاہ، فیملی شجرہ یا ممبرشپ میں آپ کی مکمل رہنمائی کر سکتی ہوں۔ آج میں آپ کی کیا خدمت کر سکتی ہوں؟',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: ['فیملی رجسٹریشن کیسے کریں؟', 'طلباء کے لیے کون سے اسکالرشپ دستیاب ہیں؟', 'دوسری شادی (باوقار رشتہ) پورٹل کیا ہے؟', 'ایمرجنسی بلڈ ڈونر کیسے تلاش کریں؟']
      };
    } else {
      return {
        id: 'welcome-en',
        sender: 'ai',
        text: 'Assalamu Alaikum & Welcome! I am Iqra AI Assistant — your 24×7 enterprise digital guide for the Rangrez Community Bharat Portal. I have verified knowledge of every page, scholarship, matrimonial registry, welfare scheme, and committee service. How may I assist you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: ['How do I register my family in the census?', 'What scholarships are open for students?', 'How does the Second Marriage premium portal work?', 'Where can I find emergency blood donors?']
      };
    }
  };

  const [messages, setMessages] = useState<Message[]>([getWelcomeMessage(currentLanguage)]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized && activeMode === 'chat') {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, activeMode]);

  // When language changes, add a polite notification or update
  const handleLanguageSwitch = (newLang: 'en' | 'hi' | 'ur') => {
    setChatLang(newLang);
    const switchMsg: Message = {
      id: 'lang-switch-' + Date.now(),
      sender: 'system',
      text: newLang === 'hi' ? '🌐 भाषा बदलकर हिंदी कर दी गई है।' : newLang === 'ur' ? '🌐 زبان تبدیل کر کے اردو کر دی گئی ہے۔' : '🌐 Language switched to English.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, switchMsg, getWelcomeMessage(newLang)]);
  };

  // Voice Speech Synthesis simulation / Web Speech API
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isVoicePlaying) {
      window.speechSynthesis.cancel();
      setIsVoicePlaying(false);
      return;
    }
    const cleanText = text.replace(/[*#✨📢🌐]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (chatLang === 'hi') utterance.lang = 'hi-IN';
    else if (chatLang === 'ur') utterance.lang = 'ur-PK';
    else utterance.lang = 'en-IN';
    
    utterance.onend = () => setIsVoicePlaying(false);
    utterance.onerror = () => setIsVoicePlaying(false);
    
    setIsVoicePlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  // Voice Recording mic simulation
  const toggleRecording = () => {
    if (isVoiceRecording) {
      setIsVoiceRecording(false);
      return;
    }
    setIsVoiceRecording(true);
    setTimeout(() => {
      setIsVoiceRecording(false);
      const simulatedQuery = chatLang === 'hi' ? 'मुझे अपने परिवार का पंजीकरण करना है' : chatLang === 'ur' ? 'مجھے اسکالرشپ کے بارے میں جاننا ہے' : 'I want to register my family in the census';
      setInputQuery(simulatedQuery);
      handleSendMessage(simulatedQuery);
    }, 3000);
  };

  // CORE KNOWLEDGE ENGINE – Semantic matching & navigation
  const generateAIResponse = (query: string): { text: string; action?: { label: string; tab: string; icon?: string }; followUps: string[] } => {
    const q = query.toLowerCase().trim();

    // 1. Check custom FAQs first
    const matchedFaq = customFAQs.find(f => q.includes(f.question.toLowerCase().slice(0, 15)) || f.question.toLowerCase().includes(q));
    if (matchedFaq) {
      return {
        text: matchedFaq.answer,
        action: matchedFaq.tab ? { label: `Open ${matchedFaq.tab.replace('-', ' ').toUpperCase()}`, tab: matchedFaq.tab, icon: 'ArrowUpRight' } : undefined,
        followUps: ['How do I get my Digital ID Card?', 'Can I contact helpline support?']
      };
    }

    // 2. Family Census & Registration
    if (q.includes('family') || q.includes('census') || q.includes('register family') || q.includes('kuaba') || q.includes('parivar') || q.includes('परिवार') || q.includes('shajra') || q.includes('شجرہ') || q.includes('pariwar')) {
      return {
        text: chatLang === 'hi'
          ? "जी हाँ, आप रंगरेज़ समाज के आधिकारिक राष्ट्रीय परिवार जनगणना (Family Census) में अपने परिवार को आसानी से दर्ज कर सकते हैं। इसमें परिवार के मुखिया, सभी सदस्यों, उनकी शिक्षा और पेशे का विवरण दर्ज किया जाता है जिससे सरकारी योजनाओं और समाज के लाभ मिलते हैं।"
          : chatLang === 'ur'
          ? "جی ہاں! آپ رنگریز سماج کی قومی فیملی مردم شماری میں اپنے پورے خاندان کو رجسٹر کر سکتے ہیں۔ اس سے آپ کو ڈیجیٹل شناختی کارڈ اور فلاحی اسکیموں کا اہل بنایا جاتا ہے۔"
          : "Certainly! You can register your entire household in the official All India Rangrez Community Family Census. This records the Head of Family, dependents, educational qualifications, and occupations to ensure entitlement to community welfare, voting rights, and official ID cards.",
        action: { label: chatLang === 'hi' ? 'परिवार पंजीकरण खोलें' : chatLang === 'ur' ? 'فیملی رجسٹریشن کھولیں' : 'Open Family Registration', tab: 'membership-census', icon: 'Users' },
        followUps: [
          chatLang === 'hi' ? 'पंजीकरण के लिए कौन से दस्तावेज चाहिए?' : 'What documents are needed for registration?',
          chatLang === 'hi' ? 'डिजिटल आईडी कार्ड कैसे मिलेगा?' : 'How do I get my Digital ID Card?',
          chatLang === 'hi' ? 'क्या मैं अपनी विवाहित बेटियों को जोड़ सकता हूँ?' : 'Can I add married family members?'
        ]
      };
    }

    // 3. Membership
    if (q.includes('member') || q.includes('membership') || q.includes('join') || q.includes('fee') || q.includes('सदस्य') || q.includes('ممبر')) {
      return {
        text: chatLang === 'hi'
          ? "रंगरेज़ समाज की सदस्यता प्राप्त करना गौरव की बात है! आप वार्षिक सदस्य (₹500) या आजीवन सदस्य (₹5,100) बन सकते हैं। आजीवन सदस्यों को महापंचायत में मतदान का अधिकार, प्रमाण पत्र और विशेष निर्देशिका में स्थान मिलता है।"
          : "We welcome all community members to join! You can enroll as an Annual Member (₹500), Lifetime Member (₹5,100), or Patron Member. Membership grants voting rights in the Mahapanchayat, an official certificate, and full welfare entitlement.",
        action: { label: chatLang === 'hi' ? 'सदस्यता के लिए आवेदन करें' : 'Become a Member', tab: 'membership-register', icon: 'Award' },
        followUps: ['What are the benefits of Lifetime Membership?', 'How do I download my Certificate?', 'How long does verification take?']
      };
    }

    // 4. Scholarships
    if (q.includes('scholarship') || q.includes('grant') || q.includes('stipend') || q.includes('education') || q.includes('student') || q.includes('वजीफा') || q.includes('छात्रवृत्ति') || q.includes('وظیفہ') || q.includes('study')) {
      return {
        text: chatLang === 'hi'
          ? "रंगरेज़ एजुकेशन ट्रस्ट छात्रों के लिए कई छात्रवृत्तियां प्रदान करता है: मौलाना अबुल कलाम आजाद मेधावी छात्रवृत्ति, बेगम हज़रत महल बालिका उच्च शिक्षा अनुदान, और UPSC/PSC सिविल सेवा कोचिंग सहायता। कक्षा 10 से पोस्ट-ग्रेजुएशन तक आवेदन खुले हैं।"
          : "The Rangrez Education Trust offers multiple scholarships: Maulana Abul Kalam Azad Merit Scholarship (up to ₹25,000), Begum Hazrat Mahal Girls Higher Education Grant, Civil Services Aspirant Stipend, and Technical/Medical Scholarships. Applications are currently open!",
        action: { label: chatLang === 'hi' ? 'छात्रवृत्ति पोर्टल खोलें' : 'Apply for Scholarship', tab: 'scholarships', icon: 'BookOpen' },
        followUps: ['What is the eligibility criteria for merit grants?', 'How can I check my application status?', 'Are there scholarships for medical students?']
      };
    }

    // 5. Matrimonial Standard
    if ((q.includes('matrimonial') || q.includes('marriage') || q.includes('shaadi') || q.includes('nikah') || q.includes('rishta') || q.includes('bride') || q.includes('groom') || q.includes('शादी') || q.includes('निकाह') || q.includes('रिश्ता')) && !q.includes('second') && !q.includes('widow') && !q.includes('divorc')) {
      return {
        text: chatLang === 'hi'
          ? "निकाह और वैवाहिक मंच हमारे समाज के युवक-युवतियों के लिए एक सुरक्षित और सत्यापित रिश्ता मंच है। सभी प्रोफाइल क्षेत्रीय समिति के बुजुर्गों द्वारा सत्यापित किए जाते हैं ताकि परिवार का सम्मान और सुरक्षा सुनिश्चित हो सके।"
          : "Our Standard Matrimonial & Nikah Platform is a trusted, verified matchmaking registry for unmarried brides and grooms of the Rangrez community. Profiles are strictly screened by regional committee elders to ensure privacy, family honor, and compatibility.",
        action: { label: chatLang === 'hi' ? 'वैवाहिक मंच खोलें' : 'Open Matrimonial Platform', tab: 'matrimonial', icon: 'Heart' },
        followUps: ['How do I register a bride or groom profile?', 'What privacy controls exist for photos?', 'How does committee verification work?']
      };
    }

    // 6. Second Marriage ✨ Premium (Widow / Divorced)
    if (q.includes('second') || q.includes('widow') || q.includes('divorc') || q.includes('remarriage') || q.includes('punarvivah') || q.includes('دوسری شادی') || q.includes('bewa') || q.includes('talaq') || q.includes('द्वितीय विवाह')) {
      return {
        text: chatLang === 'hi'
          ? "द्वितीय विवाह एवं विशेष रिश्ते ✨ (Second Marriage Premium) हमारा एक अत्यंत गरिमामय और गोपनीय मंच है जो विशेष रूप से विधवा बहनों, विधुर, तलाकशुदा या पुनर्विवाह के इच्छुक सदस्यों के लिए बनाया गया है। इसमें बुजुर्गों की काउंसलिंग और 100% गोपनीयता की व्यवस्था है।"
          : "Our Second Marriage ✨ Premium Portal is a dignified, highly confidential, and elder-supported matrimonial registry dedicated specifically to widows, widowers, divorced individuals, and those seeking remarriage with complete respect and zero stigma.",
        action: { label: chatLang === 'hi' ? 'द्वितीय विवाह पोर्टल ✨ खोलें' : 'Second Marriage ✨ Portal', tab: 'matrimonial-second', icon: 'Sparkles' },
        followUps: ['What confidential privacy features exist here?', 'Can I speak to an elder counselor privately?', 'Is registration free for widows?']
      };
    }

    // 7. Blood Donors & Blood Bank
    if (q.includes('blood') || q.includes('donor') || q.includes('plasma') || q.includes('o+') || q.includes('b+') || q.includes('a+') || q.includes('ab') || q.includes('खून') || q.includes('रक्तदान') || q.includes('بلڈ')) {
      return {
        text: chatLang === 'hi'
          ? "मेडिकल इमरजेंसी के लिए हमारी 24×7 कम्युनिटी ब्लड बैंक डायरेक्ट्री में पूरे भारत के 28 राज्यों से सत्यापित स्वयंसेवक रक्तदाता उपलब्ध हैं। आप ब्लड ग्रुप (O+, B+, A+, AB-) और शहर के अनुसार तुरंत रक्तदाता खोज सकते हैं या खुद डोनर के रूप में जुड़ सकते हैं।"
          : "In medical emergencies, our 24×7 Community Blood Bank Directory connects you directly with verified volunteer blood donors across 28 states in India. You can search by blood group (O+, B+, A+, AB-) and city, or register yourself as a life-saving donor.",
        action: { label: chatLang === 'hi' ? 'रक्तदाता खोजें (Blood Donors)' : 'Find Blood Donor', tab: 'welfare-blood-donors', icon: 'Heart' },
        followUps: ['How do I register as a blood donor?', 'Where can I find emergency hospital support?', 'How do I contact the 24×7 medical helpline?']
      };
    }

    // 8. Hospital & Medical Help
    if (q.includes('hospital') || q.includes('medical') || q.includes('doctor') || q.includes('health') || q.includes('treatment') || q.includes('icu') || q.includes('अस्पताल') || q.includes('इलाज') || q.includes('ہسپتال')) {
      return {
        text: chatLang === 'hi'
          ? "हमने पूरे देश के प्रमुख अस्पतालों और मेडिकल कॉलेजों से समझौता किया है जहाँ रंगरेज़ समाज के सदस्यों को इलाज, सर्जरी और जांच में 15% से 50% तक की छूट और इमरजेंसी बेड सहायता प्रदान की जाती है।"
          : "We have partnered with leading hospitals and medical colleges across India to provide discounted treatment (15% to 50% off), emergency bed assistance, and financial healthcare aid for community members through our Welfare Hospital network.",
        action: { label: chatLang === 'hi' ? 'अस्पताल नेटवर्क देखें' : 'Find Hospital & Healthcare', tab: 'welfare-hospital', icon: 'Building2' },
        followUps: ['How do I apply for emergency medical financial aid?', 'Which medical colleges are in our network?', 'What is the procedure for cashless healthcare?']
      };
    }

    // 9. Jobs & Careers
    if (q.includes('job') || q.includes('career') || q.includes('work') || q.includes('vacancy') || q.includes('employment') || q.includes('नौकरी') || q.includes('रोजगार') || q.includes('ملازمت')) {
      return {
        text: chatLang === 'hi'
          ? "हमारा जॉब्स और करियर पोर्टल समाज के युवाओं को आईटी, बैंकिंग, हेल्थकेयर, सरकारी क्षेत्र और व्यापारिक उद्यमों में सत्यापित नौकरियों से जोड़ता है। आप यहाँ रिज्यूमे अपलोड कर सकते हैं और 1-on-1 करियर काउंसलिंग बुक कर सकते हैं।"
          : "Our Career & Employment Hub connects Rangrez youth with verified job opportunities across IT, Banking, Healthcare, Government sectors, and Business enterprises. You can search current vacancies, submit your resume, or book 1-on-1 career counselling.",
        action: { label: chatLang === 'hi' ? 'नौकरियां खोजें (Search Jobs)' : 'Search Jobs & Careers', tab: 'jobs-careers', icon: 'Briefcase' },
        followUps: ['How do I book free career counselling?', 'Where can I find government job alerts?', 'Can I list my company openings here?']
      };
    }

    // 10. Government Schemes & Loans
    if (q.includes('scheme') || q.includes('sarkari') || q.includes('yojana') || q.includes('loan') || q.includes('mudra') || q.includes('vishwakarma') || q.includes('minority') || q.includes('योजना') || q.includes('ऋण')) {
      return {
        text: chatLang === 'hi'
          ? "हम समाज के कारीगरों और व्यवसायियों को केंद्र व राज्य सरकार की महत्वपूर्ण योजनाओं जैसे पीएम विश्वकर्मा योजना (कपड़ा रंगाई कारीगरों हेतु ₹3 लाख तक कम ब्याज ऋण), NMDFC अल्पसंख्यक व्यवसाय ऋण, और मुद्रा लोन का लाभ उठाने में पूरा मार्गदर्शन करते हैं।"
          : "We guide community members to access central and state government schemes including PM Vishwakarma Yojana (low-interest loan up to ₹3 Lakhs for traditional textile dyers), NMDFC minority business loans, Mudra loans, and Pre/Post-Matric scholarships.",
        action: { label: chatLang === 'hi' ? 'सरकारी योजनाएं देखें' : 'Explore Government Schemes', tab: 'schemes', icon: 'Shield' },
        followUps: ['How do I apply for PM Vishwakarma artisan loan?', 'What documents are required for NMDFC loans?', 'Who can help me fill out government scheme forms?']
      };
    }

    // 11. Digital ID Card
    if (q.includes('id card') || q.includes('digital id') || q.includes('pehchan') || q.includes('badge') || q.includes('qr code') || q.includes('पहचान पत्र') || q.includes('شناختی')) {
      return {
        text: chatLang === 'hi'
          ? "डिजिटल पहचान पत्र (ID Card) हमारे समाज के सत्यापित सदस्यों के लिए एक QR-कोड युक्त आधिकारिक कार्ड है। यह मतदान, कल्याणकारी योजनाओं और राष्ट्रीय सम्मेलनों में प्रवेश के लिए आपकी आधिकारिक पहचान है।"
          : "The Digital ID Card is a verifiable, tamper-proof QR-coded identification badge for verified Rangrez community members. It serves as your official credential for voting, accessing welfare schemes, and attending national conventions.",
        action: { label: chatLang === 'hi' ? 'डिजिटल आईडी कार्ड बनाएं' : 'Generate Digital ID Card', tab: 'membership-id', icon: 'Award' },
        followUps: ['How long does ID card verification take?', 'How do I scan and verify a QR code?', 'What should I do if my ID card is expired?']
      };
    }

    // 12. Family Tree Mapping
    if (q.includes('tree') || q.includes('shajra') || q.includes('nasab') || q.includes('lineage') || q.includes('ancestor') || q.includes('वंश वृक्ष') || q.includes('شجرہ نسب')) {
      return {
        text: chatLang === 'hi'
          ? "हमारा पारिवारिक वंश वृक्ष (Family Tree / शजरा नसब) टूल आपको अपने परिवार की 7 पीढ़ियों के इतिहास को सुरक्षित करने और देश भर के अन्य रिश्तेदारों से जुड़ने की सुविधा देता है।"
          : "Our Family Tree Mapping (Shajra Nasab) tool allows you to document and preserve up to 7 generations of your family lineage. Connect with ancestral roots across India, trace relative branches, and preserve our rich dye-craft heritage.",
        action: { label: chatLang === 'hi' ? 'वंश वृक्ष बनाएं (Family Tree)' : 'Open Family Tree Mapping', tab: 'membership-tree', icon: 'Users' },
        followUps: ['How many generations can I add to my family tree?', 'Is my family tree private or public to other members?', 'Can I print my family tree poster?']
      };
    }

    // 13. Volunteer & Khidmatgar
    if (q.includes('volunteer') || q.includes('sevak') || q.includes('khidmat') || q.includes('disaster') || q.includes('social worker') || q.includes('स्वयंसेवक') || q.includes('خدمتگار')) {
      return {
        text: chatLang === 'hi'
          ? "रंगरेज़ खिदमतगार (National Volunteer Corps) से जुड़कर आप अपने जिले में शिक्षा, स्वास्थ्य शिविर, राहत कार्य और परिवार पंजीकरण में योगदान दे सकते हैं। हर स्वयंसेवक को डिजिटल वॉलंटियर पासपोर्ट और हॉल ऑफ सर्विस में सम्मान मिलता है।"
          : "Join our National Volunteer Corps (Rangrez Khidmatgar)! Volunteers lead disaster relief operations, medical camps, educational mentoring, and family census drives in their districts. Every volunteer receives a digital Volunteer Passport and Hall of Service recognition.",
        action: { label: chatLang === 'hi' ? 'स्वयंसेवक पंजीकरण' : 'Volunteer Registration', tab: 'volunteer-registration', icon: 'Heart' },
        followUps: ['What is the Volunteer Passport system?', 'How are volunteers rewarded in Hall of Service?', 'Can college students volunteer for weekend projects?']
      };
    }

    // 14. Donate & Charity
    if (q.includes('donate') || q.includes('donation') || q.includes('zakat') || q.includes('sadqa') || q.includes('charity') || q.includes('fund') || q.includes('दान') || q.includes('चंदा') || q.includes('زکواۃ')) {
      return {
        text: chatLang === 'hi'
          ? "आपका योगदान समाज के असहाय बच्चों की शिक्षा, विधवा पेंशन, और चिकित्सा सहायता में सीधे काम आता है। सभी दान पूरी पारदर्शिता के साथ डिजिटल टैक्स रसीद (80G) के साथ दर्ज किए जाते हैं।"
          : "Your contributions empower community transformation! You can donate towards Education Scholarships, Widow Pension Fund, Medical Emergency Aid, or General Community Development. All donations are transparently tracked with digital tax receipts.",
        action: { label: chatLang === 'hi' ? 'कल्याण कोष में दान करें' : 'Donate to Welfare Fund', tab: 'donate', icon: 'Award' },
        followUps: ['Are donations eligible for 80G tax exemption?', 'How can I sponsor an orphan student\'s full education?', 'Where can I see audit reports?']
      };
    }

    // 15. Mahapanchayat & Resolutions
    if (q.includes('mahapanchayat') || q.includes('panchayat') || q.includes('resolution') || q.includes('constitution') || q.includes('dowry') || q.includes('dahej') || q.includes('महापंचायत') || q.includes('दहेज')) {
      return {
        text: chatLang === 'hi'
          ? "राष्ट्रीय रंगरेज़ महापंचायत हमारी सर्वोच्च सामाजिक परिषद है। इसने दहेज के खिलाफ 11 ऐतिहासिक प्रस्ताव पारित किए हैं, बेटियों की उच्च शिक्षा को अनिवार्य किया है और समाज सुधार मिशन का नेतृत्व कर रही है।"
          : "The National Rangrez Mahapanchayat is our supreme governing council. It leads the Society Reform Mission (Samaj Sudhar), enacting progressive community resolutions against dowry, promoting girls' higher education, and setting governance guidelines.",
        action: { label: chatLang === 'hi' ? 'महापंचायत व प्रस्ताव देखें' : 'Explore Mahapanchayat', tab: 'mahapanchayat', icon: 'Globe' },
        followUps: ['What are the 11 historic resolutions passed against dowry?', 'How do I participate in community opinion polls?', 'Where can I read the Constitution?']
      };
    }

    // 16. Contact & Helpline
    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('helpline') || q.includes('address') || q.includes('call') || q.includes('संपर्क') || q.includes('رابطہ')) {
      return {
        text: chatLang === 'hi'
          ? "आप अखिल भारतीय रंगरेज़ समाज केंद्रीय समिति से हमारी 24×7 हेल्पलाइन: +91 98765 43210 या ईमेल: central@rangrezbharat.org पर संपर्क कर सकते हैं। देश के 28 राज्यों में हमारे क्षेत्रीय अध्यक्ष भी उपलब्ध हैं।"
          : "You can reach the All India Rangrez Community Central Committee via our 24×7 Helplines: +91 98765 43210 (National Secretariat) or email central@rangrezbharat.org. Regional presidents are also available across 28 states and districts.",
        action: { label: chatLang === 'hi' ? 'संपर्क व हेल्पलाइन देखें' : 'Contact Committee & Helplines', tab: 'contact', icon: 'Phone' },
        followUps: ['Who is the President of my state committee?', 'How do I raise a grievance or RTI inquiry?', 'Where is the central headquarters located?']
      };
    }

    // 17. News & Downloads
    if (q.includes('news') || q.includes('media') || q.includes('download') || q.includes('form') || q.includes('pdf') || q.includes('gallery') || q.includes('समाचार') || q.includes('फॉर्म')) {
      return {
        text: chatLang === 'hi'
          ? "आप हमारे मीडिया और डाउनलोड अनुभाग से सभी आधिकारिक पीडीएफ फॉर्म (जनगणना, सदस्यता, छात्रवृत्ति), समाज के मासिक समाचार, फोटो गैलरी और संविधान डाउनलोड कर सकते हैं।"
          : "In our Media & Resources directory, you can instantly download official PDF forms for Family Census, Membership, Scholarships, Marriage Verification Certificates, read community news, and explore national event photo galleries.",
        action: { label: chatLang === 'hi' ? 'दस्तावेज व फॉर्म डाउनलोड करें' : 'Download Forms & News', tab: 'media-downloads', icon: 'FileText' },
        followUps: ['How do I submit an offline census form?', 'Where can I read the monthly e-magazine?', 'Where are the photo galleries located?']
      };
    }

    // DEFAULT FALLBACK – Smart conversational navigation
    return {
      text: chatLang === 'hi'
        ? "मैं इकरा (Iqra AI Assistant) हूँ, पूरे रंगरेज़ समाज भारत पोर्टल की आपकी 24×7 डिजिटल मार्गदर्शक। मैं आपके इस प्रश्न को हमारे ज्ञानकोष में खोज रही हूँ। आप नीचे दिए गए किसी भी प्रमुख सेवा पर क्लिक करके तुरंत उस अनुभाग में जा सकते हैं या मुझसे कोई विशिष्ट सवाल पूछ सकते हैं!"
        : chatLang === 'ur'
        ? "میں اقراء ہوں، رنگریز سماج بھارت پورٹل کی ڈیجیٹل رہنما۔ آپ نیچے دیئے گئے کسی بھی شعبے (فیملی شجرہ، اسکالرشپ، نکاح، ممبرشپ) پر کلک کر کے فوراً رہنمائی حاصل کر سکتے ہیں۔"
        : `I am Iqra AI Assistant, your 24×7 enterprise digital receptionist for the Rangrez Community Bharat Portal. I can help you complete tasks like Family Census Registration, Matrimonial & Second Marriage matchmaking, Scholarship claims, Emergency Blood Donor search, or Government Schemes navigation. How would you like to proceed?`,
      action: { label: 'Explore Community Portal', tab: 'portal', icon: 'Sparkles' },
      followUps: [
        'How do I register my family in the census?',
        'What scholarships are currently open?',
        'How does the Second Marriage ✨ portal work?',
        'Where can I find emergency blood donors?'
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query && !textToSend) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate natural AI thinking time (~600ms)
    setTimeout(() => {
      const response = generateAIResponse(query);
      const aiMsg: Message = {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: response.action,
        followUps: response.followUps,
        isVerified: true
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickActionClick = (action: { label: string; tab: string }) => {
    const promptText = chatLang === 'hi' 
      ? `मुझे "${action.label}" के बारे में जानकारी चाहिए और वहाँ जाना है।`
      : chatLang === 'ur'
      ? `مجھے "${action.label}" کے بارے میں رہنمائی چاہیے۔`
      : `I want to access "${action.label}". Please guide me.`;
    handleSendMessage(promptText);
  };

  // Filter website search database
  const filteredSearchItems = WEBSITE_SEARCH_DATABASE.filter(item => {
    const matchesCategory = searchCategory === 'all' || item.category === searchCategory;
    const matchesQuery = !searchQuery.trim() || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Admin handle add FAQ
  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaqQ.trim() || !newFaqA.trim()) return;
    const newEntry = {
      id: 'custom-' + Date.now(),
      question: newFaqQ.trim(),
      answer: newFaqA.trim(),
      tab: newFaqTab
    };
    setCustomFAQs(prev => [newEntry, ...prev]);
    setNewFaqQ('');
    setNewFaqA('');
    alert('✅ Custom FAQ added to Iqra AI Brain! Try asking this question in Chat Mode.');
  };

  // Admin handle update banner
  const handleUpdateBanner = () => {
    setBroadcastBanner(adminBannerInput);
    alert('📢 Broadcast Announcement updated across the entire website!');
  };

  return (
    <>
      {/* 1. FLOATING WIDGET BUTTON (Bottom Right - Hidden when minimized to avoid overlap) */}
      {!isMinimized && (
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        {/* Helper tooltip pill when closed */}
        {!isOpen && (
          <div className="mb-2 mr-1 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#004B23] via-[#0A2E1C] to-[#070D18] text-white text-xs font-bold shadow-xl border border-[#F4C430]/60 flex items-center gap-2 animate-bounce cursor-pointer"
               onClick={() => setIsOpen(true)}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[#FFD54A]">Iqra AI ✨</span>
            <span>{currentLanguage === 'hi' ? '24×7 समाज सहायिका' : currentLanguage === 'ur' ? '24×7 آن لائن گائیڈ' : '24×7 Community Guide'}</span>
          </div>
        )}

        {/* The Floating Launcher Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
          className={`group relative h-16 w-16 rounded-full shadow-[0_0_35px_rgba(0,75,35,0.6)] border-2 border-[#F4C430] flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isOpen ? 'bg-[#0B132B] scale-95 rotate-90' : 'bg-gradient-to-br from-[#004B23] via-[#0D2418] to-[#070D18] hover:scale-110 hover:shadow-[0_0_45px_rgba(244,196,48,0.8)]'
          }`}
          title="Open Iqra AI Community Assistant"
        >
          {/* Animated pulsing aura */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#F4C430] opacity-20 animate-ping"></span>
          )}

          {isOpen ? (
            <X className="h-7 w-7 text-[#FFD54A] transition-transform" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-[#FFD54A] animate-pulse" />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 border-2 border-white text-[8px] font-bold text-white">
                ✓
              </span>
            </div>
          )}
        </button>
      </div>
      )}

      {/* 2. THE MAIN IQRA AI CHAT & GUIDE WINDOW */}
      {isOpen && !isMinimized && (
        <div 
          className={`fixed z-40 transition-all duration-300 flex flex-col overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1729] to-[#0D2218] border-2 border-[#D4AF37]/70 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] text-white backdrop-blur-2xl ${
            isFullScreen 
              ? 'inset-0 w-full h-full rounded-none' 
              : 'bottom-28 right-4 sm:right-6 w-[94vw] sm:w-[460px] md:w-[500px] h-[680px] max-h-[85vh] rounded-3xl'
          }`}
        >
          {/* A. HEADER BAR */}
          <div className="bg-gradient-to-r from-[#004B23] via-[#0E2C1F] to-[#070D18] p-4 border-b border-[#D4AF37]/40 flex items-center justify-between shrink-0 shadow-md">
            {/* Left: Avatar & Status */}
            <div className="flex items-center space-x-3">
              <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-[#F4C430] to-[#B38728] p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="h-full w-full bg-[#070D18] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[#FFD54A] animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#070D18]" title="Verified & Online"></span>
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1">
                    <span>Iqra AI Assistant</span>
                    <span className="bg-[#D4AF37]/20 text-[#FFD54A] text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-mono border border-[#D4AF37]/30">24×7 Guide</span>
                  </h3>
                </div>
                <p className="text-[11px] text-amber-200/80 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{chatLang === 'hi' ? 'संपूर्ण वेबसाइट ज्ञानकोष व रिसेप्शनिस्ट' : chatLang === 'ur' ? 'مکمل پورٹل ڈیجیٹل رہنما' : 'Enterprise Portal Guide & Search'}</span>
                </p>
              </div>
            </div>

            {/* Right: Language Switcher & Window Controls */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              {/* Language Selector */}
              <select
                value={chatLang}
                onChange={(e) => handleLanguageSwitch(e.target.value as Language)}
                className="bg-[#070D18]/80 text-[#FFD54A] text-[11px] font-bold px-2 py-1 rounded-lg border border-[#D4AF37]/50 focus:outline-none cursor-pointer hover:bg-[#0E1A30]"
                title="Switch AI Assistant Language"
              >
                <option value="en">ENG 🇬🇧</option>
                <option value="hi">हिंदी 🇮🇳</option>
                <option value="ur">اردو 🌙</option>
              </select>

              {/* Mode Toggle (Chat vs Search vs Admin) */}
              <button
                onClick={() => setActiveMode(activeMode === 'search' ? 'chat' : 'search')}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeMode === 'search' ? 'bg-[#F4C430] text-[#070D18] font-bold border-white' : 'bg-white/10 text-amber-200 hover:bg-white/20 border-transparent'
                }`}
                title="Toggle Search Website Mode"
              >
                <Search className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActiveMode(activeMode === 'admin' ? 'chat' : 'admin')}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeMode === 'admin' ? 'bg-rose-600 text-white font-bold border-rose-400' : 'bg-white/10 text-amber-200 hover:bg-white/20 border-transparent'
                }`}
                title="Admin & Analytics Dashboard"
              >
                <Shield className="h-4 w-4" />
              </button>

              {/* Minimize */}
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                title="Minimize Window"
              >
                <Minimize2 className="h-4 w-4" />
              </button>

              {/* Fullscreen */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-1.5 rounded-lg bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer hidden sm:block"
                title={isFullScreen ? "Restore Normal Size" : "Maximize Window"}
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                title="Close AI Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* B. SUB-MODE TABS & BROADCAST BANNER */}
          {broadcastBanner && (
            <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border-b border-[#F4C430]/40 px-3 py-1.5 text-xs text-[#FFD54A] font-semibold flex items-center justify-between shrink-0 animate-pulse">
              <span className="flex items-center gap-1.5 truncate">
                <span>⚡</span>
                <span className="truncate">{broadcastBanner}</span>
              </span>
              <button onClick={() => setBroadcastBanner('')} className="text-amber-300 hover:text-white ml-2 text-xs shrink-0 font-bold">×</button>
            </div>
          )}

          {/* Mode Tabs pill bar */}
          <div className="bg-[#050B14]/80 px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs shrink-0">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveMode('chat')}
                className={`px-3 py-1 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeMode === 'chat' ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430]/50 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{chatLang === 'hi' ? 'बातचीत (Chat)' : chatLang === 'ur' ? 'گفتگو (Chat)' : 'AI Guide Chat'}</span>
              </button>

              <button
                onClick={() => setActiveMode('search')}
                className={`px-3 py-1 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeMode === 'search' ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430]/50 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Search className="h-3.5 w-3.5" />
                <span>{chatLang === 'hi' ? 'वेबसाइट खोजें' : chatLang === 'ur' ? 'تلاش کریں' : 'Website Search'}</span>
              </button>

              <button
                onClick={() => setActiveMode('admin')}
                className={`px-3 py-1 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeMode === 'admin' ? 'bg-rose-900/80 text-rose-200 border border-rose-500/50 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <BarChart3 className="h-3.5 w-3.5" />
                <span>{chatLang === 'hi' ? 'एडमिन व एनालिटिक्स' : 'Admin & Stats'}</span>
              </button>
            </div>

            {activeMode === 'chat' && (
              <button
                onClick={() => setMessages([getWelcomeMessage(chatLang)])}
                className="text-gray-400 hover:text-amber-300 transition flex items-center gap-1 cursor-pointer"
                title="Clear Chat History"
              >
                <RefreshCw className="h-3 w-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

          {/* C. BODY CONTENT AREA */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative custom-scrollbar bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent">
            
            {/* MODE 1: CHAT MODE */}
            {activeMode === 'chat' && (
              <div className="space-y-4">
                {/* Render Messages */}
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : msg.sender === 'system' ? 'items-center' : 'items-start'}`}
                  >
                    {msg.sender === 'system' ? (
                      <div className="bg-white/10 text-amber-300 text-xs px-3 py-1 rounded-full border border-white/10 my-1">
                        {msg.text}
                      </div>
                    ) : (
                      <div className="max-w-[88%] sm:max-w-[85%]">
                        {/* Sender Label */}
                        <div className={`flex items-center space-x-1.5 mb-1 text-[11px] ${msg.sender === 'user' ? 'justify-end text-amber-300' : 'text-emerald-300'}`}>
                          {msg.sender === 'ai' && (
                            <span className="flex items-center gap-1 font-bold">
                              <Sparkles className="h-3 w-3 text-[#FFD54A]" />
                              <span>Iqra AI Guide</span>
                              {msg.isVerified && (
                                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] px-1 rounded flex items-center gap-0.5" title="Verified Website Data">
                                  <Check className="h-2.5 w-2.5" /> Verified
                                </span>
                              )}
                            </span>
                          )}
                          {msg.sender === 'user' && <span className="font-bold">You</span>}
                          <span className="text-gray-400">{msg.timestamp}</span>
                        </div>

                        {/* Bubble */}
                        <div
                          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg relative ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-[#004B23] to-[#0A3D20] text-white border border-[#F4C430]/40 rounded-br-none'
                              : 'bg-gradient-to-br from-[#0D182E]/90 to-[#122340]/90 text-gray-100 border border-white/15 rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>

                          {/* Voice read aloud button for AI messages */}
                          {msg.sender === 'ai' && (
                            <button
                              onClick={() => speakText(msg.text)}
                              className="absolute -right-2 -top-2 p-1.5 rounded-full bg-[#0B132B] text-amber-300 border border-[#D4AF37]/50 hover:bg-[#F4C430] hover:text-[#0B132B] transition shadow cursor-pointer"
                              title="Listen to answer aloud (Speech)"
                            >
                              {isVoicePlaying ? <VolumeX className="h-3 w-3 animate-pulse text-rose-400" /> : <Volume2 className="h-3 w-3" />}
                            </button>
                          )}
                        </div>

                        {/* SMART ACTION NAVIGATION BUTTON */}
                        {msg.suggestedAction && (
                          <div className="mt-2.5 flex justify-start">
                            <button
                              onClick={() => {
                                onNavigate(msg.suggestedAction!.tab);
                                setIsOpen(false);
                              }}
                              className="group px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F4C430] via-[#D4AF37] to-[#F4C430] text-[#070D18] font-extrabold text-xs shadow-lg hover:shadow-[0_0_25px_rgba(244,196,48,0.7)] transition-all flex items-center space-x-2 border border-white/40 cursor-pointer scale-102"
                            >
                              <span className="p-1 rounded-lg bg-[#070D18] text-[#FFD54A] group-hover:rotate-12 transition-transform">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </span>
                              <span>{msg.suggestedAction.label}</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        )}

                        {/* FOLLOW-UP QUESTIONS SUGGESTIONS */}
                        {msg.followUps && msg.followUps.length > 0 && (
                          <div className="mt-3 space-y-1.5">
                            <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1">
                              <span>💡</span>
                              <span>{chatLang === 'hi' ? 'संबंधित प्रश्न पूछें:' : chatLang === 'ur' ? 'مزید سوالات پوچھیں:' : 'Suggested Follow-ups:'}</span>
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.followUps.map((fu, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSendMessage(fu)}
                                  className="text-left text-xs px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#004B23]/70 text-gray-200 hover:text-white border border-white/10 hover:border-[#F4C430]/60 transition-all cursor-pointer flex items-center gap-1.5 group shrink-0"
                                >
                                  <span className="text-[#FFD54A] group-hover:translate-x-0.5 transition-transform">↪</span>
                                  <span>{fu}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-xs text-amber-300 bg-[#0D182E]/80 p-3 rounded-2xl rounded-bl-none w-fit border border-white/10">
                    <Sparkles className="h-4 w-4 text-[#FFD54A] animate-spin" />
                    <span>{chatLang === 'hi' ? 'इकरा ज्ञानकोष में खोज रही है...' : chatLang === 'ur' ? 'اقراء جواب تیار کر رہی ہے...' : 'Iqra AI is thinking & searching...'}</span>
                    <span className="flex space-x-1">
                      <span className="h-1.5 w-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="h-1.5 w-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="h-1.5 w-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {/* MODE 2: WEBSITE SEARCH MODE */}
            {activeMode === 'search' && (
              <div className="space-y-4">
                <div className="text-center pb-2 border-b border-white/10">
                  <h3 className="text-sm font-extrabold text-[#FFD54A] flex items-center justify-center gap-1.5">
                    <Search className="h-4 w-4" />
                    <span>{chatLang === 'hi' ? 'वेबसाइट व सेवा निर्देशिका खोजें' : 'Intelligent Website Search Engine'}</span>
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {chatLang === 'hi' ? 'छात्रवृत्ति, नौकरियां, अस्पताल, फॉर्म, या महापंचायत प्रस्ताव खोजें' : 'Search instant verified links to pages, scholarships, jobs, hospitals & documents.'}
                  </p>
                </div>

                {/* Search Bar Input */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={chatLang === 'hi' ? "खोजें: जैसे 'scholarship', 'hospital', 'matrimonial'..." : "Search e.g., 'scholarship', 'donor', 'loan', 'id card'..."}
                    className="w-full bg-[#050B14] text-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4AF37]/50 focus:outline-none focus:border-[#F4C430] text-xs shadow-inner"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-gray-400 hover:text-white">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: 'All Results (15+)' },
                    { id: 'page', label: 'Pages & Portals' },
                    { id: 'scholarship', label: 'Scholarships 🎓' },
                    { id: 'job', label: 'Jobs & Careers 💼' },
                    { id: 'hospital', label: 'Hospitals & Blood 🏥' },
                    { id: 'scheme', label: 'Govt Schemes 🏛️' },
                    { id: 'document', label: 'Forms & PDFs 📄' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSearchCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        searchCategory === cat.id
                          ? 'bg-[#F4C430] text-[#070D18] shadow'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Results List */}
                <div className="space-y-2.5 pt-1">
                  {filteredSearchItems.length === 0 ? (
                    <div className="text-center py-8 bg-white/5 rounded-2xl border border-white/10">
                      <AlertCircle className="h-8 w-8 text-amber-400 mx-auto mb-2 opacity-80" />
                      <p className="text-xs font-bold text-white">No exact matches found for "{searchQuery}"</p>
                      <p className="text-[11px] text-gray-400 mt-1">Try switching to Chat Mode and asking Iqra AI directly!</p>
                      <button
                        onClick={() => { setActiveMode('chat'); setInputQuery(searchQuery); }}
                        className="mt-3 px-4 py-1.5 rounded-xl bg-[#004B23] text-[#FFD54A] font-bold text-xs border border-[#F4C430]/50 hover:bg-[#0A3D20] transition"
                      >
                        Ask Iqra AI about "{searchQuery}" →
                      </button>
                    </div>
                  ) : (
                    filteredSearchItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-[#F4C430]/50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-extrabold text-xs text-[#FFD54A] group-hover:underline">{item.title}</span>
                            {item.badge && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-300 leading-snug">{item.description}</p>
                        </div>

                        <button
                          onClick={() => {
                            onNavigate(item.tab);
                            setIsOpen(false);
                          }}
                          className="shrink-0 px-3.5 py-1.5 rounded-xl bg-[#004B23] hover:bg-[#F4C430] text-white hover:text-[#070D18] font-extrabold text-xs border border-[#F4C430]/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Open Section</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* MODE 3: ADMIN & ANALYTICS DASHBOARD */}
            {activeMode === 'admin' && (
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-rose-950/60 via-[#0B132B] to-rose-950/60 p-4 rounded-2xl border border-rose-500/40 text-center">
                  <div className="flex items-center justify-center gap-2 text-rose-300 font-extrabold text-sm mb-1">
                    <Shield className="h-4 w-4 text-[#F4C430]" />
                    <span>Enterprise AI Admin & Analytics Suite</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Real-time conversation metrics, custom brain training, and broadcast controls.
                  </p>
                </div>

                {/* 4 Stats Cards */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Total Queries Served</p>
                    <p className="text-lg font-extrabold text-[#FFD54A] mt-0.5">14,892</p>
                    <span className="text-[9px] text-emerald-400 font-bold">↑ 18% this week</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Search Success Rate</p>
                    <p className="text-lg font-extrabold text-emerald-400 mt-0.5">99.4%</p>
                    <span className="text-[9px] text-gray-400">Verified responses</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">User Satisfaction</p>
                    <p className="text-lg font-extrabold text-[#FFD54A] mt-0.5">4.92 / 5.0</p>
                    <span className="text-[9px] text-amber-300">⭐ Community rating</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Active Sessions</p>
                    <p className="text-lg font-extrabold text-cyan-400 mt-0.5">186 Live</p>
                    <span className="text-[9px] text-emerald-400">● 24×7 Online</span>
                  </div>
                </div>

                {/* Most Searched Topics Progress */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-bold text-[#FFD54A] flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4" />
                    <span>Most Searched Community Topics (Analytics)</span>
                  </h4>
                  {[
                    { topic: 'Scholarships & Education Grants 🎓', pct: 28, color: 'bg-amber-400' },
                    { topic: 'Matrimonial & Second Marriage ✨', pct: 24, color: 'bg-emerald-400' },
                    { topic: 'Family Census & Digital ID Card 🪪', pct: 19, color: 'bg-blue-400' },
                    { topic: 'Blood Donors & Emergency Help 🚨', pct: 15, color: 'bg-rose-400' },
                    { topic: 'Government Schemes & Loan Grants 🏛️', pct: 14, color: 'bg-purple-400' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="font-semibold text-gray-200">{item.topic}</span>
                        <span className="font-mono text-amber-300 font-bold">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Broadcast Banner Updater */}
                <div className="p-3.5 rounded-2xl bg-[#004B23]/30 border border-[#F4C430]/40 space-y-2">
                  <h4 className="text-xs font-bold text-[#FFD54A] flex items-center gap-1.5">
                    <span>📢</span>
                    <span>Broadcast Live Announcement Banner</span>
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={adminBannerInput}
                      onChange={(e) => setAdminBannerInput(e.target.value)}
                      placeholder="Enter announcement for all visitors..."
                      className="flex-1 bg-[#050B14] text-white px-3 py-1.5 rounded-xl border border-[#D4AF37]/50 text-xs focus:outline-none"
                    />
                    <button
                      onClick={handleUpdateBanner}
                      className="px-3 py-1.5 rounded-xl bg-[#F4C430] text-[#070D18] font-bold text-xs hover:bg-white transition shrink-0 cursor-pointer"
                    >
                      Publish
                    </button>
                  </div>
                </div>

                {/* Add Custom FAQ to AI Brain */}
                <form onSubmit={handleAddFaq} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Plus className="h-4 w-4" />
                    <span>Train Iqra AI Brain: Add Custom FAQ</span>
                  </h4>
                  <input
                    type="text"
                    value={newFaqQ}
                    onChange={(e) => setNewFaqQ(e.target.value)}
                    placeholder="Question (e.g., How to get patronage discount?)"
                    className="w-full bg-[#050B14] text-white px-3 py-1.5 rounded-xl border border-white/20 text-xs focus:outline-none"
                    required
                  />
                  <textarea
                    value={newFaqA}
                    onChange={(e) => setNewFaqA(e.target.value)}
                    placeholder="AI Answer to display when user asks this..."
                    rows={2}
                    className="w-full bg-[#050B14] text-white px-3 py-1.5 rounded-xl border border-white/20 text-xs focus:outline-none"
                    required
                  />
                  <div className="flex items-center justify-between gap-2">
                    <select
                      value={newFaqTab}
                      onChange={(e) => setNewFaqTab(e.target.value)}
                      className="bg-[#050B14] text-amber-300 text-xs px-2.5 py-1.5 rounded-xl border border-white/20"
                    >
                      <option value="membership-register">Link: Membership</option>
                      <option value="membership-census">Link: Family Census</option>
                      <option value="scholarships">Link: Scholarships</option>
                      <option value="matrimonial">Link: Matrimonial</option>
                      <option value="matrimonial-second">Link: Second Marriage ✨</option>
                      <option value="welfare-blood-donors">Link: Blood Bank</option>
                    </select>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="h-3.5 w-3.5" /> Add to AI Brain
                    </button>
                  </div>
                </form>

                {/* Custom FAQs List */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-gray-300 uppercase">Active Custom FAQs ({customFAQs.length})</p>
                  {customFAQs.map((f) => (
                    <div key={f.id} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between text-xs gap-2">
                      <div>
                        <p className="font-bold text-[#FFD54A]">Q: {f.question}</p>
                        <p className="text-gray-300 text-[11px] mt-0.5">A: {f.answer}</p>
                      </div>
                      <button
                        onClick={() => setCustomFAQs(prev => prev.filter(x => x.id !== f.id))}
                        className="text-gray-400 hover:text-rose-400 p-1 shrink-0"
                        title="Delete FAQ"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* D. SUGGESTED QUICK ACTION BUTTONS (Carousel / Grid at Bottom of Chat) */}
          {activeMode === 'chat' && (
            <div className="bg-[#050B14]/90 px-4 py-2 border-t border-white/10 shrink-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1.5 flex items-center justify-between">
                <span>🚀 {chatLang === 'hi' ? 'त्वरित सेवाएं (Quick Actions):' : 'Suggested Quick Tasks:'}</span>
                <span className="text-[9px] text-[#FFD54A]">15+ Modules Integrated</span>
              </p>
              <div className="flex overflow-x-auto space-x-1.5 pb-1.5 custom-scrollbar no-scrollbar">
                {SUGGESTED_QUICK_ACTIONS.map((act, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickActionClick(act)}
                    className="shrink-0 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#004B23]/80 to-[#0A2E1C]/80 hover:from-[#F4C430] hover:to-[#D4AF37] text-gray-100 hover:text-[#070D18] font-bold text-xs border border-[#F4C430]/40 transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm group"
                  >
                    <span className="text-[#FFD54A] group-hover:text-[#070D18]">✦</span>
                    <span>{act.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* E. FOOTER CHAT INPUT BAR */}
          {activeMode === 'chat' && (
            <div className="bg-[#070D18] p-3 border-t border-[#D4AF37]/50 flex items-center space-x-2 shrink-0">
              {/* Mic Voice Input */}
              <button
                onClick={toggleRecording}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isVoiceRecording
                    ? 'bg-rose-600 text-white border-rose-400 animate-pulse shadow-[0_0_15px_rgba(225,29,72,0.8)]'
                    : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 border-white/10'
                }`}
                title={isVoiceRecording ? "Recording... (Click to stop)" : "Voice Input (Speak question)"}
              >
                {isVoiceRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>

              {/* Text Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    isVoiceRecording
                      ? (chatLang === 'hi' ? 'बोलिए, मैं सुन रही हूँ...' : 'Listening to your voice...')
                      : (chatLang === 'hi' ? 'कोई भी प्रश्न पूछें या सेवा खोजें...' : chatLang === 'ur' ? 'کوئی بھی سوال پوچھیں...' : 'Ask Iqra AI anything about the website...')
                  }
                  className="w-full bg-[#0E1A30] text-white pl-3.5 pr-10 py-2.5 rounded-xl border border-[#D4AF37]/50 focus:outline-none focus:border-[#F4C430] text-xs placeholder-gray-400 shadow-inner"
                />
              </div>

              {/* Send Button */}
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputQuery.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#004B23] to-[#0D2418] hover:from-[#F4C430] hover:to-[#D4AF37] text-white hover:text-[#070D18] border border-[#F4C430]/60 transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer shadow-md flex items-center justify-center shrink-0 group"
                title="Send Message"
              >
                <Send className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. MINIMIZED FLOATING PILL */}
      {isOpen && isMinimized && (
        <div 
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#004B23] via-[#0A2E1C] to-[#070D18] text-white px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(0,75,35,0.7)] border-2 border-[#F4C430] flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all"
        >
          <Sparkles className="h-5 w-5 text-[#FFD54A] animate-spin" />
          <span className="font-extrabold text-xs sm:text-sm text-[#FFD54A]">Iqra AI Assistant</span>
          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">Active</span>
          <Maximize2 className="h-4 w-4 text-gray-300 ml-1" />
        </div>
      )}
    </>
  );
}
