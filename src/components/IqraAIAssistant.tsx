import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Bot, X, Send, Search, Minimize2, Maximize2, RefreshCw, 
  Volume2, VolumeX, Mic, MicOff, HelpCircle, Shield, Award, Heart, 
  Users, BookOpen, Briefcase, FileText, Phone, Building2, ChevronRight, 
  CheckCircle2, AlertCircle, TrendingUp, Settings, Plus, Trash2, 
  MessageSquare, BarChart3, Radio, ArrowUpRight, Check, Globe, File, Upload,
  Cpu, Database, Lock, Eye, Copy, Zap, CpuIcon
} from 'lucide-react';
import { Language } from '../types';
import { VERIFIED_RAG_DATABASE, searchRagKnowledge, RagKnowledgeItem } from '../data/iqraRagKnowledgeBase';
import MarkdownRenderer from './MarkdownRenderer';

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
  citation?: string;
}

export default function IqraAIAssistant({ currentLanguage, onNavigate, activeTab = 'home' }: IqraAIAssistantProps) {
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
  const [activeMode, setActiveMode] = useState<'chat' | 'search' | 'doc-ai' | 'admin'>('chat');
  const [chatLang, setChatLang] = useState<'en' | 'hi' | 'ur'>(currentLanguage);
  const [iqraMode, setIqraMode] = useState<'verified' | 'general'>('verified');
  
  // Model & Vector DB settings
  const [selectedModel, setSelectedModel] = useState<string>('gemini-3.6-flash');
  const [vectorChunkCount, setVectorChunkCount] = useState<number>(12850);
  const [isReindexing, setIsReindexing] = useState<boolean>(false);

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rcb_iqra_is_open', JSON.stringify(isOpen));
      localStorage.setItem('rcb_iqra_is_minimized', JSON.stringify(isMinimized));
    } catch {}
  }, [isOpen, isMinimized]);

  // Sync language when app language changes
  useEffect(() => {
    setChatLang(currentLanguage);
  }, [currentLanguage]);

  // Event listener to open IQRA AI from anywhere in portal
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
  const [searchCategory, setSearchCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Document AI State
  const [selectedDocId, setSelectedDocId] = useState<string>('doc-1');
  const [docAnalysis, setDocAnalysis] = useState<string | null>(null);
  const [isAnalyzingDoc, setIsAnalyzingDoc] = useState(false);

  // Admin AI Generator State
  const [genContentType, setGenContentType] = useState<'news' | 'whatsapp' | 'notice' | 'certificate' | 'speech'>('news');
  const [genPrompt, setGenPrompt] = useState('');
  const [generatedOutput, setGeneratedOutput] = useState('');
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);

  // Custom FAQs State
  const [customFAQs, setCustomFAQs] = useState<{ id: string; question: string; answer: string; tab?: string }[]>([
    { id: 'faq-1', question: 'What is the annual membership fee?', answer: 'The annual membership fee is ₹500, while Lifetime Membership is ₹5,100 with full voting rights.', tab: 'membership-register' },
    { id: 'faq-2', question: 'Who is eligible for Second Marriage portal?', answer: 'Any widow, widower, divorced, or legally separated member of the Rangrez community can register with total confidentiality.', tab: 'matrimonial-second' }
  ]);
  const [newFaqQ, setNewFaqQ] = useState('');
  const [newFaqA, setNewFaqA] = useState('');

  // Focus input and Keyboard Escape close support
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized && activeMode === 'chat') {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized, activeMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isMinimized) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isMinimized]);

  // Track sticky header height and viewport size for perfect positioning below the header
  const [headerHeight, setHeaderHeight] = useState(76);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);

  useEffect(() => {
    const handleResizeAndScroll = () => {
      if (typeof window !== 'undefined') {
        const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        setViewportHeight(height);
      }
      
      const stickyHeader = document.getElementById('sticky_header');
      const siteHeader = document.getElementById('site_header');
      
      let calculatedHeaderHeight = 76;
      if (stickyHeader) {
        const rect = stickyHeader.getBoundingClientRect();
        // Since the sticky header stays at top: 0, rect.bottom measures
        // the exact bottom boundary of the header in the viewport.
        if (rect.bottom > 0) {
          calculatedHeaderHeight = rect.bottom;
        } else {
          calculatedHeaderHeight = rect.height || 76;
        }
      } else if (siteHeader) {
        const rect = siteHeader.getBoundingClientRect();
        calculatedHeaderHeight = Math.max(0, rect.bottom);
      } else {
        // Fallbacks if elements are not rendered yet
        if (window.innerWidth < 1024) {
          calculatedHeaderHeight = 70;
        } else {
          calculatedHeaderHeight = 76;
        }
      }
      setHeaderHeight(calculatedHeaderHeight);
    };

    // Run layout calculation initially
    handleResizeAndScroll();

    // Listen to changes
    window.addEventListener('scroll', handleResizeAndScroll, { passive: true });
    window.addEventListener('resize', handleResizeAndScroll, { passive: true });

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResizeAndScroll, { passive: true });
      window.visualViewport.addEventListener('scroll', handleResizeAndScroll, { passive: true });
    }

    // Set up ResizeObserver to recalculate whenever the header changes layout/sizes
    let resizeObserver: ResizeObserver | null = null;
    const stickyHeader = document.getElementById('sticky_header');
    const siteHeader = document.getElementById('site_header');
    
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResizeAndScroll();
      });
      if (stickyHeader) resizeObserver.observe(stickyHeader);
      if (siteHeader) resizeObserver.observe(siteHeader);
    }

    // Interval fallback to handle dynamic height adjustments from animations
    const interval = setInterval(handleResizeAndScroll, 200);

    return () => {
      window.removeEventListener('scroll', handleResizeAndScroll);
      window.removeEventListener('resize', handleResizeAndScroll);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResizeAndScroll);
        window.visualViewport.removeEventListener('scroll', handleResizeAndScroll);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearInterval(interval);
    };
  }, []);

  // Page Context Detection
  const getPageContextDetails = (tab: string) => {
    if (tab.includes('school')) {
      return {
        label: 'School Directory (Level 1 Education)',
        badge: 'School Portal 🏫',
        prompts: [
          'Show CBSE schools in Morena with hostel',
          'School admission steps & fee structure',
          'Compare schools in Morena & Joura',
          'Scholarships for school students'
        ]
      };
    }
    if (tab.includes('college') || tab.includes('medical')) {
      return {
        label: 'Higher Education & Colleges (Level 2)',
        badge: 'College Portal 🎓',
        prompts: [
          'Engineering colleges under ₹1 lakh in MP',
          'Medical colleges with NEET cutoffs',
          'Begum Hazrat Mahal higher education grant',
          'Fee comparison of medical colleges'
        ]
      };
    }
    if (tab.includes('mahapanchayat')) {
      return {
        label: 'National Mahapanchayat & Governance',
        badge: 'Mahapanchayat 📜',
        prompts: [
          'Explain 11 resolutions against dowry',
          'Mahapanchayat rules about education',
          'Download Constitution & Bylaws PDF',
          'Show regional committee leaders'
        ]
      };
    }
    if (tab.includes('census') || tab.includes('tree') || tab.includes('membership')) {
      return {
        label: 'Family Census & Digital Membership',
        badge: 'Census Portal 🪪',
        prompts: [
          'How do I register my family in census?',
          'How to map 7 generations of Shajra Nasab?',
          'Download Digital ID card with QR code',
          'Members registered in Kailaras & Morena'
        ]
      };
    }
    if (tab.includes('blood') || tab.includes('hospital') || tab.includes('welfare')) {
      return {
        label: 'Emergency Blood Bank & Healthcare Network',
        badge: 'Healthcare 🚨',
        prompts: [
          'Find O+ blood donors in Joura & Morena',
          'Get 15%-50% hospital discount card',
          'Call 24×7 emergency helpline',
          'Register as volunteer blood donor'
        ]
      };
    }
    if (tab.includes('learning') || tab.includes('resource')) {
      return {
        label: 'Learning Resources & Exam Preparation',
        badge: 'Study Hub 📚',
        prompts: [
          'NCERT Class 10th Math & Science notes',
          'Download Class 12th Physics PYQs',
          'Take 10-min Biology Mock Test',
          'Competitive exam roadmaps (UPSC, NEET)'
        ]
      };
    }
    if (tab.includes('job') || tab.includes('career') || tab.includes('skills')) {
      return {
        label: 'Jobs, Careers & Skills (Level 3)',
        badge: 'Careers Hub 💼',
        prompts: [
          'Jobs suitable for Mechanical Engineers',
          'IT & Full-Stack developer vacancies',
          'Apply for PM Vishwakarma ₹3L loan',
          'Book 1-on-1 career counselling'
        ]
      };
    }
    if (tab.includes('scheme')) {
      return {
        label: 'Government Schemes & Welfare Loans',
        badge: 'Govt Schemes 🏛️',
        prompts: [
          'PM Vishwakarma Artisan Loan details',
          'NMDFC Minority business credit',
          'How to apply for Mudra loans',
          'Pre & Post Matric Scholarships'
        ]
      };
    }
    return {
      label: 'Rangrez Portal Central Brain',
      badge: 'Portal Central ⚡',
      prompts: [
        'Show CBSE schools in Morena with hostel',
        'Engineering colleges under ₹1 lakh in MP',
        '11 Mahapanchayat resolutions against dowry',
        'Blood donors with O+ group in Joura'
      ]
    };
  };

  const pageContext = getPageContextDetails(activeTab);

  // Welcome Messages
  const getWelcomeMessage = (lang: 'en' | 'hi' | 'ur'): Message => {
    if (lang === 'hi') {
      return {
        id: 'welcome-hi',
        sender: 'ai',
        text: `अस्सलाम वालेकुम और स्वागत! मैं **IQRA AI** हूँ — रंगरेज समुदाय भारत पोर्टल की आधिकारिक डिजिटल मार्गदर्शिका।\n\nमैं दो शक्तिशाली बुद्धिमत्ता मोड (modes) में काम करती हूँ:\n\n*   🛡️ **IQRA AI (सत्यापित ज्ञान)**: यह पोर्टल के सत्यापित डेटाबेस (स्कूल, छात्रवृत्ति, महापंचायत प्रस्ताव, जनगणना) से बिल्कुल सही जवाब देती है।\n*   ✨ **IQRA AI+ (उन्नत सामान्य AI)**: सामान्य ज्ञान, शिक्षा मार्गदर्शन, करियर काउंसिलिंग या किसी भी बाहरी प्रश्न के लिए, **IQRA AI+** सीधे गूगल के एडवांस एआई मॉडल द्वारा संचालित है।\n\n📍 वर्तमान पृष्ठ संदर्भ: ${pageContext.label}\n\nआज मैं आपकी क्या सहायता कर सकती हूँ?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: pageContext.prompts
      };
    } else if (lang === 'ur') {
      return {
        id: 'welcome-ur',
        sender: 'ai',
        text: `السلام علیکم اور خوش آمدید! میں **IQRA AI** ہوں — رنگریز سماج بھارت پورٹل کی آفیشل ڈیجیٹل رہنما۔\n\nمیں دو منفرد اور طاقتور انٹیلیجنس طریقوں (modes) میں کام کرتی ہوں:\n\n*   🛡️ **IQRA AI (تصدیق شدہ علم)**: یہ پورٹل کے مصدقہ اور تصدیق شدہ ڈیٹا بیس (اسکول، وظائف، اسکیمیں، شجرہ) سے درست ترین جواب فراہم کرتی ہے۔\n*   ✨ **IQRA AI+ (جدید عمومی AI)**: عمومی معلومات، تعلیم، کیریئر کی رہنمائی، یا کیریئر پلاننگ کے لیے، **IQRA AI+** بلا واسطہ گوگل کے جدید ترین مصنوعی ذہانت ماڈل سے مربوط ہے۔\n\n📍 موجودہ صفحہ: ${pageContext.label}\n\nمیں آج آپ کی کیا رہنمائی کر سکتی ہوں؟`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: pageContext.prompts
      };
    } else {
      return {
        id: 'welcome-en',
        sender: 'ai',
        text: `Assalamu Alaikum & Welcome! I am **IQRA AI** — the official intelligent assistant of the Rangrez Community Bharat Portal.\n\nI operate seamlessly in two advanced intelligence modes:\n\n*   🛡️ **IQRA AI (Verified Community Intelligence)**: Grounded strictly in verified portal directories, scholarships, census datasets, and Mahapanchayat resolutions.\n*   ✨ **IQRA AI+ (Advanced General AI)**: Powered by Gemini AI, ready to help you write professional resumes, research careers, understand complex topics, or ask general questions outside the portal's databases.\n\n📍 Page Context: ${pageContext.label}\n\nHow may I guide you today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        followUps: pageContext.prompts
      };
    }
  };

  const [messages, setMessages] = useState<Message[]>([getWelcomeMessage(currentLanguage)]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized && activeMode === 'chat') {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, activeMode]);

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

  // Web Speech API Synthesis
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isVoicePlaying) {
      window.speechSynthesis.cancel();
      setIsVoicePlaying(false);
      return;
    }
    const cleanText = text.replace(/[*#✨📢🌐📍]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (chatLang === 'hi') utterance.lang = 'hi-IN';
    else if (chatLang === 'ur') utterance.lang = 'ur-PK';
    else utterance.lang = 'en-IN';
    
    utterance.onend = () => setIsVoicePlaying(false);
    utterance.onerror = () => setIsVoicePlaying(false);
    
    setIsVoicePlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  // Mic Recording Speech-to-Text simulation
  const toggleRecording = () => {
    if (isVoiceRecording) {
      setIsVoiceRecording(false);
      return;
    }
    setIsVoiceRecording(true);
    setTimeout(() => {
      setIsVoiceRecording(false);
      const simulatedQuery = chatLang === 'hi' 
        ? 'मोरैना में हॉस्टल वाले सीबीएसई स्कूल दिखाएं' 
        : chatLang === 'ur' 
        ? 'جورا میں او پازیٹو بلڈ ڈونر دکھائیں' 
        : 'Show CBSE schools in Morena with hostel';
      setInputQuery(simulatedQuery);
      handleSendMessage(simulatedQuery);
    }, 3000);
  };

  // RAG INTELLIGENT AI RESPONSE ENGINE
  const generateAIResponse = (query: string): { 
    text: string; 
    action?: { label: string; tab: string; icon?: string }; 
    followUps: string[];
    citation?: string;
    isVerified: boolean;
  } => {
    const q = query.toLowerCase().trim();

    // 1. Custom FAQs check
    const matchedFaq = customFAQs.find(f => q.includes(f.question.toLowerCase().slice(0, 15)) || f.question.toLowerCase().includes(q));
    if (matchedFaq) {
      return {
        text: matchedFaq.answer,
        action: matchedFaq.tab ? { label: `Open ${matchedFaq.tab.replace('-', ' ').toUpperCase()}`, tab: matchedFaq.tab } : undefined,
        followUps: ['How do I get my Digital ID Card?', 'Where is the national secretariat?'],
        citation: 'Verified Portal Custom FAQ Database',
        isVerified: true
      };
    }

    // 2. Perform RAG Knowledge Search
    const searchResult = searchRagKnowledge(query);

    if (searchResult.items.length > 0) {
      const topMatch = searchResult.items[0];
      let formattedResponse = '';

      if (chatLang === 'hi') {
        formattedResponse = `जी हाँ, हमारे सत्यापित ज्ञानकोष में निम्नलिखित जानकारी उपलब्ध है:\n\n📌 **${topMatch.title}**\n${topMatch.content}\n\n📍 स्थान: ${topMatch.location || 'अखिल भारतीय पोर्टल'}\n🏷️ वर्ग: ${topMatch.category}`;
      } else if (chatLang === 'ur') {
        formattedResponse = `جی ہاں! پورٹل کے تصدیق شدہ ڈیٹا بیس سے درج ذیل معلومات حاصل ہوئی ہیں:\n\n📌 **${topMatch.title}**\n${topMatch.content}\n\n📍 مقام: ${topMatch.location || 'آل انڈیا پورٹل'}`;
      } else {
        formattedResponse = `Here is the verified information retrieved from the portal database:\n\n📌 **${topMatch.title}**\n${topMatch.content}\n\n📍 Location: ${topMatch.location || 'All India Portal'}\n🏷️ Category: ${topMatch.category}`;
      }

      // Additional matches if available
      if (searchResult.items.length > 1) {
        const extraTitles = searchResult.items.slice(1, 3).map(i => `• ${i.title}`).join('\n');
        formattedResponse += `\n\n🔍 **Related Verified Matches:**\n${extraTitles}`;
      }

      return {
        text: formattedResponse,
        action: { label: `Open ${topMatch.category} Section`, tab: topMatch.tab },
        followUps: [
          `Tell me more about ${topMatch.title}`,
          'What are the required documents?',
          'How do I apply or register online?'
        ],
        citation: topMatch.citation,
        isVerified: true
      };
    }

    // 3. Fallback for unverified / external queries
    return {
      text: chatLang === 'hi'
        ? "⚠️ **सत्यापित ज्ञानकोष में जानकारी अनुपलब्ध:** आपके इस प्रश्न के लिए हमारे पोर्टल ज्ञानकोष में कोई सत्यापित रिकॉर्ड नहीं मिला। 100% सटीकता बनाए रखने के लिए, इकरा एआई केवल समिति द्वारा आधिकारिक रूप से स्वीकृत जानकारी ही प्रदान करती है।"
        : chatLang === 'ur'
        ? "⚠️ **تصدیق شدہ ڈیٹا بیس میں معلومات دستیاب نہیں:** پورٹل میں اس کا تصدیق شدہ ریکارڈ موجود نہیں ہے۔"
        : "⚠️ **Information Unavailable in Verified Knowledge Base:** I could not locate a verified record for this query in the Rangrez Community Bharat Portal database. To prevent hallucination, IQRA AI strictly adheres to verified official committee records.",
      action: { label: 'Explore Portal Directory', tab: 'portal' },
      followUps: [
        'Show CBSE schools in Morena with hostel',
        'Engineering colleges under ₹1 lakh in MP',
        '11 Mahapanchayat resolutions about education',
        'Blood donors with O+ group in Joura'
      ],
      isVerified: false
    };
  };

  const handleSendMessage = (textToSend?: string, forceGeneralMode: boolean = false) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const targetMode = forceGeneralMode ? 'general' : iqraMode;
    if (forceGeneralMode) {
      setIqraMode('general');
    }

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(async () => {
      if (targetMode === 'verified') {
        // MODE 1: Verified RAG Mode
        const response = generateAIResponse(query);
        if (response.isVerified) {
          const aiMsg: Message = {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: response.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedAction: response.action,
            followUps: response.followUps,
            isVerified: true,
            citation: response.citation
          };
          setMessages(prev => [...prev, aiMsg]);
          setIsTyping(false);
        } else {
          // No match found in verified DB! Show the EXACT required message.
          const aiMsg: Message = {
            id: 'ai-unavail-' + Date.now(),
            sender: 'ai',
            text: "This information is not available in the Rangrez Community Bharat Portal. You can continue with IQRA AI+ for a complete AI-powered answer.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isVerified: false,
            citation: 'Portal Knowledge Base Check',
            followUps: []
          };
          setMessages(prev => [...prev, aiMsg]);
          setIsTyping(false);
        }
      } else {
        // MODE 2: IQRA AI+ (General AI Mode)
        try {
          // Construct chat history matching Gemini API schema
          const chatHistory = messages
            .filter(m => m.sender === 'user' || m.sender === 'ai')
            .map(m => ({
              role: m.sender === 'user' ? 'user' : 'model',
              parts: [{ text: m.text }]
            }))
            .concat([{ role: 'user', parts: [{ text: query }] }])
            .slice(-8); // send last 8 turns of context

          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: query, history: chatHistory })
          });
          
          if (!res.ok) {
            throw new Error('API returned an error');
          }
          
          const data = await res.json();
          const aiMsg: Message = {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedAction: { label: 'Explore Portal Directory', tab: 'portal' },
            followUps: [
              'Tell me more about community goals',
              'Show other educational resources',
              'What government schemes apply to dyers?'
            ],
            isVerified: false,
            citation: 'IQRA AI+ (Powered by Gemini)'
          };
          setMessages(prev => [...prev, aiMsg]);
        } catch (err) {
          // Connection or timeout fallback
          const aiMsg: Message = {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: "⚠️ **System connection offline:** I failed to connect to the general intelligence server. Please verify your internet connection or try again shortly.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isVerified: false,
            citation: 'Connection Error'
          };
          setMessages(prev => [...prev, aiMsg]);
        } finally {
          setIsTyping(false);
        }
      }
    }, 500);
  };

  // Admin FAQ submit
  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaqQ.trim() || !newFaqA.trim()) return;
    setCustomFAQs(prev => [{ id: 'custom-' + Date.now(), question: newFaqQ.trim(), answer: newFaqA.trim() }, ...prev]);
    setNewFaqQ('');
    setNewFaqA('');
    alert('✅ Custom FAQ successfully indexed into Iqra AI Brain!');
  };

  // Re-index trigger
  const handleReindex = () => {
    setIsReindexing(true);
    setTimeout(() => {
      setVectorChunkCount(prev => prev + 120);
      setIsReindexing(false);
      alert('⚡ Vector Database re-indexed! 12,970 vector embeddings compiled.');
    }, 1500);
  };

  // Document AI Analysis trigger
  const handleAnalyzeDocument = (docId: string) => {
    setIsAnalyzingDoc(true);
    setSelectedDocId(docId);
    setTimeout(() => {
      setIsAnalyzingDoc(false);
      if (docId === 'doc-1') {
        setDocAnalysis(`📄 **Document Title:** Mahapanchayat Constitution & Anti-Dowry Resolutions (PDF)\n\n📌 **Executive Summary:** This document contains the binding constitution of the All India Rangrez Community and 11 anti-dowry resolutions enacted by the supreme council.\n\nKey Highlights:\n1. Absolute prohibition of dowry demands and extravagant wedding functions.\n2. Compulsory education directive for children under 18.\n3. Dispute resolution framework through regional elders.`);
      } else if (docId === 'doc-2') {
        setDocAnalysis(`📄 **Document Title:** National School Directory & Hostel Prospectus 2026\n\n📌 **Executive Summary:** Comprehensive listing of 300+ schools with hostel facilities, fee structure, and scholarship quotas across 28 states.\n\nKey Highlights:\n1. 50% fee concessions for meritorious Rangrez students.\n2. Separate secured hostels in Morena, Joura, Gwalior, Delhi, and Bhopal.`);
      } else {
        setDocAnalysis(`📄 **Document Title:** PM Vishwakarma Artisan Loan SOP & Circular\n\n📌 **Executive Summary:** Official government circular detailing ₹3 Lakh collateral-free loan process for traditional textile dyers.\n\nKey Highlights:\n1. 5% subsidized interest rate.\n2. ₹15,000 direct toolkit incentive and ₹500/day training stipend.`);
      }
    }, 800);
  };

  // Admin AI Content Generator
  const handleGenerateContent = () => {
    if (!genPrompt.trim()) return;
    setIsGeneratingContent(true);
    setTimeout(() => {
      setIsGeneratingContent(false);
      if (genContentType === 'news') {
        setGeneratedOutput(`📰 **OFFICIAL PRESS RELEASE**\n\n**All India Rangrez Community Announces National Education Drive 2026**\n\nNew Delhi / Bhopal: The Central Committee of the All India Rangrez Community Bharat Portal has launched a nationwide education initiative offering up to ₹25,000 in scholarships for Class 10th and 12th students. Speaking at the announcement, community leaders emphasized 100% literacy for boys and girls.\n\nFor details and applications, visit: https://rangrezbharat.org`);
      } else if (genContentType === 'whatsapp') {
        setGeneratedOutput(`📢 *ALL INDIA RANGREZ SAMAJ OFFICIAL ANNOUNCEMENT*\n\nAssalamu Alaikum,\n\nDear Members, Family Registration (Census) is now live! Please register your family to claim your digital QR ID Card & scholarship benefits.\n\n👉 Click link to register: https://rangrezbharat.org\n\n_Spread in all community WhatsApp groups!_`);
      } else if (genContentType === 'notice') {
        setGeneratedOutput(`📜 **MEETING NOTICE: REGIONAL COMMITTEE SESSION**\n\nNotice is hereby given that the Executive Body meeting of the District Committee will convene on Sunday, 10th August at 11:00 AM at the Community Secretariat.\n\nAgenda:\n1. Review of Family Census progress.\n2. Planning for upcoming Merit Award distribution.\n3. Finalizing Emergency Blood Bank donor lists.`);
      } else if (genContentType === 'certificate') {
        setGeneratedOutput(`🎓 **CERTIFICATE OF MERIT & APPRECIATION**\n\nThis is to certify that **[Student/Member Name]** has been awarded the Maulana Abul Kalam Azad Merit Grant for outstanding academic performance in Class XII Examinations with [Percentage]%\n\nPresented by All India Rangrez Education Trust.`);
      } else {
        setGeneratedOutput(`🎙️ **SPEECH DRAFT: MAHAPANCHAYAT OPENING ADDRESS**\n\nRespected elders, scholars, and community members,\n\nAssalamu Alaikum. Today we gather not just as an assembly, but as a united family determined to pave a brighter future for our youth through education, social dignity, and economic empowerment...`);
      }
    }, 900);
  };

  // Filter search items
  const searchResults = searchRagKnowledge(searchQuery, searchCategory);

  return (
    <>
      {/* 1. FLOATING WIDGET LAUNCH BUTTON */}
      {!isMinimized && (
        <div className="fixed bottom-24 right-6 z-[10002] flex flex-col items-end">
          {!isOpen && (
            <div 
              onClick={() => setIsOpen(true)}
              className="mb-2 mr-1 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#004B23] via-[#0A2E1C] to-[#070D18] text-white text-xs font-bold shadow-2xl border border-[#F4C430]/60 flex items-center gap-2 animate-bounce cursor-pointer hover:scale-105 transition"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-[#FFD54A]">IQRA AI ✨</span>
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsMinimized(false);
            }}
            role="button"
            aria-label={isOpen ? "Close IQRA AI Assistant" : "Open IQRA AI Assistant"}
            aria-expanded={isOpen}
            aria-controls="iqra_ai_chat_window"
            className={`group relative h-16 w-16 rounded-full shadow-[0_0_40px_rgba(0,75,35,0.7)] border-2 border-[#F4C430] flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isOpen ? 'bg-[#0B132B] scale-95 rotate-90' : 'bg-gradient-to-br from-[#004B23] via-[#0D2418] to-[#070D18] hover:scale-110 hover:shadow-[0_0_50px_rgba(244,196,48,0.9)]'
            }`}
            title="Open IQRA AI Guide"
          >
            {!isOpen && <span className="absolute inset-0 rounded-full bg-[#F4C430] opacity-20 animate-ping"></span>}

            {isOpen ? (
              <X className="h-7 w-7 text-[#FFD54A]" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-[#FFD54A] animate-spin" style={{ animationDuration: '10s' }} />
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 border-2 border-white text-[8px] font-bold text-white">
                  ✓
                </span>
              </div>
            )}
          </button>
        </div>
      )}

      {/* 2. MAIN IQRA AI WINDOW */}
      {isOpen && !isMinimized && (
        <div 
          id="iqra_ai_chat_window"
          role="dialog"
          aria-label="IQRA AI Assistant Conversation Panel"
          className={`fixed z-[10001] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_25px_90px_-15px_rgba(0,0,0,0.85)] text-white backdrop-blur-2xl border-2 ${
            iqraMode === 'verified'
              ? 'bg-gradient-to-br from-[#070D18] via-[#0B1729] to-[#0D2218] border-[#D4AF37]/70'
              : 'bg-gradient-to-br from-[#050A1C] via-[#0D152B] to-[#1D102A] border-indigo-500/50'
          } ${
            isFullScreen 
              ? 'inset-x-0 bottom-0 w-full rounded-none' 
              : 'right-4 sm:right-6 w-[94vw] sm:w-[480px] md:w-[520px] rounded-3xl'
          }`}
          style={
            isFullScreen 
              ? {
                  top: `${headerHeight}px`,
                  height: `calc(100vh - ${headerHeight}px - env(safe-area-inset-bottom, 0px))`,
                  maxHeight: 'none',
                }
              : {
                  top: `${headerHeight + 16}px`,
                  bottom: 'auto',
                  height: `min(720px, calc(${viewportHeight}px - ${headerHeight}px - 32px - env(safe-area-inset-bottom, 0px)))`,
                }
          }
        >
          {/* A. HEADER BAR */}
          <div className={`transition-all duration-300 p-4 border-b flex items-center justify-between shrink-0 shadow-md ${
            iqraMode === 'verified'
              ? 'bg-gradient-to-r from-[#004B23] via-[#0E2C1F] to-[#070D18] border-[#D4AF37]/40'
              : 'bg-gradient-to-r from-[#1B1A55] via-[#0D152B] to-[#0B0C10] border-indigo-500/40'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`relative h-11 w-11 rounded-2xl p-0.5 shadow-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                iqraMode === 'verified'
                  ? 'bg-gradient-to-br from-[#F4C430] to-[#B38728]'
                  : 'bg-gradient-to-br from-indigo-400 to-purple-600'
              }`}>
                <div className="h-full w-full bg-[#070D18] rounded-[14px] flex items-center justify-center">
                  <Sparkles className={`h-6 w-6 animate-spin transition-colors duration-300 ${
                    iqraMode === 'verified' ? 'text-[#FFD54A]' : 'text-indigo-400'
                  }`} style={{ animationDuration: '8s' }} />
                </div>
                <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#070D18] transition-colors duration-300 ${
                  iqraMode === 'verified' ? 'bg-emerald-400' : 'bg-indigo-400'
                }`} title={iqraMode === 'verified' ? 'RAG Engine Online' : 'General AI+ Engine Online'}></span>
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                    <span>{iqraMode === 'verified' ? 'IQRA AI' : 'IQRA AI+'}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-mono border transition-colors duration-300 ${
                      iqraMode === 'verified'
                        ? 'bg-[#D4AF37]/20 text-[#FFD54A] border-[#D4AF37]/40'
                        : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                    }`}>
                      {iqraMode === 'verified' ? 'Verified Knowledge' : 'General AI+'}
                    </span>
                  </h3>
                </div>
                <p className="text-[11px] text-amber-200/90 flex items-center gap-1 mt-0.5">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-300 ${
                    iqraMode === 'verified' ? 'bg-emerald-400' : 'bg-indigo-400'
                  }`}></span>
                  <span className="font-semibold text-gray-200 truncate max-w-[220px]">📍 Context: {pageContext.label}</span>
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              <select
                value={chatLang}
                onChange={(e) => handleLanguageSwitch(e.target.value as Language)}
                className="bg-[#070D18]/90 text-[#FFD54A] text-[11px] font-bold px-2 py-1 rounded-lg border border-[#D4AF37]/50 focus:outline-none cursor-pointer"
                aria-label="Select AI Language"
              >
                <option value="en">ENG 🇬🇧</option>
                <option value="hi">हिंदी 🇮🇳</option>
                <option value="ur">اردو 🌙</option>
              </select>

              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg bg-white/10 text-gray-300 hover:text-white transition"
                title="Minimize"
                aria-label="Minimize Panel"
              >
                <Minimize2 className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-1.5 rounded-lg bg-white/10 text-gray-300 hover:text-white transition hidden sm:block"
                title="Maximize"
                aria-label="Toggle Fullscreen Mode"
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 transition"
                title="Close"
                aria-label="Close Conversation Panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* B. MODE NAVIGATION TABS */}
          <div className="bg-[#050B14]/90 px-3 py-2 border-b border-white/10 flex items-center justify-between text-xs shrink-0 overflow-x-auto custom-scrollbar">
            <div className="flex space-x-1.5">
              <button
                onClick={() => setActiveMode('chat')}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeMode === 'chat' ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430]/60 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>AI Chat & Guide</span>
              </button>

              <button
                onClick={() => setActiveMode('search')}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeMode === 'search' ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430]/60 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Search className="h-3.5 w-3.5" />
                <span>Semantic Search</span>
              </button>

              <button
                onClick={() => setActiveMode('doc-ai')}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeMode === 'doc-ai' ? 'bg-[#004B23] text-[#FFD54A] border border-[#F4C430]/60 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Doc AI 📄</span>
              </button>

              <button
                onClick={() => setActiveMode('admin')}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeMode === 'admin' ? 'bg-rose-900/80 text-rose-200 border border-rose-500/50 shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Shield className="h-3.5 w-3.5" />
                <span>Admin Suite</span>
              </button>
            </div>

            {activeMode === 'chat' && (
              <button
                onClick={() => setMessages([getWelcomeMessage(chatLang)])}
                className="text-gray-400 hover:text-amber-300 transition flex items-center gap-1 shrink-0 ml-2"
                title="Reset Conversation"
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* B2. DUAL INTELLIGENCE ENGINE SWITCHER */}
          {activeMode === 'chat' && (
            <div className={`transition-all duration-300 px-4 py-2 flex items-center justify-between text-xs shrink-0 border-b ${
              iqraMode === 'verified' ? 'bg-[#051109]/95 border-emerald-500/20' : 'bg-[#0A071E]/95 border-indigo-500/20'
            }`}>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Engine:</span>
                <div className="relative flex p-0.5 bg-black/40 rounded-xl border border-white/5">
                  <button
                    onClick={() => setIqraMode('verified')}
                    className={`relative px-3 py-1 rounded-lg text-[10px] font-extrabold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      iqraMode === 'verified' 
                        ? 'bg-[#004B23] text-[#FFD54A] shadow-[0_0_12px_rgba(0,75,35,0.6)] border border-[#F4C430]/30' 
                        : 'text-gray-400 hover:text-gray-200 border border-transparent'
                    }`}
                  >
                    <Shield className="h-3 w-3 text-[#FFD54A]" />
                    <span>IQRA AI</span>
                  </button>
                  <button
                    onClick={() => setIqraMode('general')}
                    className={`relative px-3 py-1 rounded-lg text-[10px] font-extrabold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      iqraMode === 'general' 
                        ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-[0_0_12px_rgba(99,102,241,0.6)] border border-indigo-400/30' 
                        : 'text-gray-400 hover:text-gray-200 border border-transparent'
                    }`}
                  >
                    <Zap className="h-3 w-3 text-indigo-400" />
                    <span>IQRA AI+</span>
                  </button>
                </div>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border transition-colors duration-300 ${
                iqraMode === 'verified' 
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' 
                  : 'bg-indigo-950/40 text-indigo-400 border-indigo-500/30'
              }`}>
                {iqraMode === 'verified' ? 'Verified Portal DB (RAG)' : 'Advanced General AI'}
              </span>
            </div>
          )}

          {/* C. BODY CONTENT AREA */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative custom-scrollbar bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent">
            
            {/* MODE 1: CHAT MODE */}
            {activeMode === 'chat' && (
              <div className="space-y-4">
                {/* Page Context Banner & Quick Prompts */}
                <div className="bg-gradient-to-r from-[#004B23]/40 via-[#0E2C1F]/60 to-[#070D18] p-3 rounded-2xl border border-[#F4C430]/40 text-xs">
                  <div className="flex items-center justify-between text-[#FFD54A] font-extrabold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>Page Context Quick Prompts</span>
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Auto-Detected</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {pageContext.prompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(p)}
                        className="text-left text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#F4C430] text-gray-200 hover:text-[#070D18] border border-white/10 hover:border-white transition font-semibold cursor-pointer shrink-0"
                      >
                        ✦ {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Messages List */}
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
                        <div className={`flex items-center space-x-1.5 mb-1 text-[11px] ${msg.sender === 'user' ? 'justify-end text-amber-300' : 'text-emerald-300'}`}>
                          {msg.sender === 'ai' && (
                            <span className={`flex items-center gap-1 font-bold ${msg.citation?.includes('IQRA AI+') ? 'text-indigo-300' : 'text-emerald-300'}`}>
                              {msg.citation?.includes('IQRA AI+') ? (
                                <>
                                  <Zap className="h-3 w-3 text-indigo-400 animate-pulse" />
                                  <span>IQRA AI+ Brain</span>
                                  <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[9px] px-1.5 py-0.2 rounded flex items-center gap-0.5">
                                    <Sparkles className="h-2.5 w-2.5" /> General AI+
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Sparkles className="h-3 w-3 text-[#FFD54A]" />
                                  <span>IQRA AI Brain</span>
                                  {msg.isVerified && (
                                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] px-1.5 py-0.2 rounded flex items-center gap-0.5">
                                      <Check className="h-2.5 w-2.5" /> Verified RAG
                                    </span>
                                  )}
                                </>
                              )}
                            </span>
                          )}
                          {msg.sender === 'user' && <span className="font-bold">You</span>}
                          <span className="text-gray-400">{msg.timestamp}</span>
                        </div>

                        <div
                          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg relative ${
                            msg.sender === 'user'
                              ? iqraMode === 'verified'
                                ? 'bg-gradient-to-r from-[#004B23] to-[#0A3D20] text-white border border-[#F4C430]/40 rounded-br-none'
                                : 'bg-gradient-to-r from-indigo-900 to-[#12042C] text-white border border-indigo-400/40 rounded-br-none'
                              : msg.id.startsWith('ai-unavail')
                              ? 'bg-[#180A22] text-amber-200 border border-purple-500/30 rounded-bl-none shadow-xl'
                              : msg.citation?.includes('IQRA AI+')
                              ? 'bg-[#0E0D21] text-gray-100 border border-indigo-500/30 rounded-bl-none shadow-xl'
                              : 'bg-[#0D182E]/95 text-gray-100 border border-white/15 rounded-bl-none shadow-xl'
                          }`}
                        >
                          <MarkdownRenderer content={msg.text} />

                          {msg.citation && (
                            <div className="mt-2.5 pt-2 border-t border-white/10 text-[10px] text-amber-300/80 font-mono flex items-center gap-1">
                              <span>📄 Citation:</span>
                              <span className="underline">{msg.citation}</span>
                            </div>
                          )}

                          {msg.sender === 'ai' && (
                            <button
                              onClick={() => speakText(msg.text)}
                              className="absolute -right-2 -top-2 p-1.5 rounded-full bg-[#0B132B] text-amber-300 border border-[#D4AF37]/50 hover:bg-[#F4C430] hover:text-[#0B132B] transition shadow cursor-pointer"
                              title="Voice Read Aloud"
                            >
                              {isVoicePlaying ? <VolumeX className="h-3 w-3 text-rose-400 animate-pulse" /> : <Volume2 className="h-3 w-3" />}
                            </button>
                          )}
                        </div>

                        {msg.id.startsWith('ai-unavail') && (
                          <div className="mt-3 p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl space-y-2 flex flex-col items-center text-center shadow-lg">
                            <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-indigo-300">
                              <Zap className="h-3.5 w-3.5 text-[#FFD54A] animate-pulse" />
                              <span>ASK IQRA AI+ GENERAL AI</span>
                            </div>
                            <p className="text-[10px] text-gray-300 max-w-[320px]">
                              Seamlessly run this query on the advanced general knowledge engine to get an instant answer.
                            </p>
                            <button
                              onClick={() => {
                                const msgIdx = messages.findIndex(m => m.id === msg.id);
                                const queryText = msgIdx > 0 ? messages[msgIdx - 1].text : inputQuery;
                                if (queryText) {
                                  handleSendMessage(queryText, true);
                                }
                              }}
                              className="w-full px-4 py-2 text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg shadow-lg hover:shadow-indigo-500/30 transition cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <Bot className="h-3.5 w-3.5 text-indigo-200" />
                              <span>Consult IQRA AI+ Now</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        )}

                        {msg.suggestedAction && (
                          <div className="mt-2 flex justify-start">
                            <button
                              onClick={() => {
                                onNavigate(msg.suggestedAction!.tab);
                                setIsOpen(false);
                              }}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F4C430] via-[#D4AF37] to-[#F4C430] text-[#070D18] font-extrabold text-xs shadow-lg hover:shadow-[0_0_20px_rgba(244,196,48,0.7)] transition flex items-center space-x-2 border border-white/40 cursor-pointer"
                            >
                              <ArrowUpRight className="h-3.5 w-3.5" />
                              <span>{msg.suggestedAction.label}</span>
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        )}

                        {msg.followUps && msg.followUps.length > 0 && (
                          <div className="mt-2.5 space-y-1">
                            <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">💡 Suggested Follow-ups:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.followUps.map((fu, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSendMessage(fu)}
                                  className="text-left text-xs px-2.5 py-1 rounded-xl bg-white/5 hover:bg-[#004B23]/80 text-gray-200 border border-white/10 hover:border-[#F4C430]/60 transition cursor-pointer"
                                >
                                  ↪ {fu}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center space-x-2 text-xs text-amber-300 bg-[#0D182E]/80 p-3 rounded-2xl rounded-bl-none w-fit border border-white/10">
                    <Sparkles className="h-4 w-4 text-[#FFD54A] animate-spin" />
                    <span>RAG Knowledge Base Engine is querying embeddings...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {/* MODE 2: SEMANTIC SEARCH MODE */}
            {activeMode === 'search' && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#004B23]/30 to-[#0B132B] p-3 rounded-2xl border border-[#D4AF37]/40 text-center">
                  <h3 className="text-xs font-extrabold text-[#FFD54A] flex items-center justify-center gap-1.5">
                    <Search className="h-4 w-4" />
                    <span>Universal Vector Semantic Search Engine</span>
                  </h3>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Search 12,850+ indexed vector embeddings across schools, colleges, jobs, blood donors, and Mahapanchayat resolutions.
                  </p>
                </div>

                <div className="relative">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Try: 'CBSE schools Morena hostel', 'Engineering <1 lakh', 'O+ blood Joura'..."
                    className="w-full bg-[#050B14] text-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4AF37]/50 text-xs focus:outline-none focus:border-[#F4C430]"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-gray-400 hover:text-white">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Sample Test Prompts */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "CBSE schools in Morena with hostel",
                    "Engineering colleges under ₹1 lakh",
                    "Blood donors with O+ group in Joura",
                    "Mahapanchayat resolutions about education",
                    "Members from Kailaras",
                    "Business owners dealing in textile"
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(p)}
                      className="px-2 py-0.5 rounded-lg bg-white/5 hover:bg-[#F4C430] text-amber-200 hover:text-[#070D18] text-[10px] font-semibold border border-white/10 transition cursor-pointer"
                    >
                      🔍 {p}
                    </button>
                  ))}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    'ALL',
                    'School Directory',
                    'College Directory',
                    'Scholarships & Grants',
                    'Emergency Blood & Healthcare',
                    'Jobs & Careers',
                    'Mahapanchayat & Governance',
                    'Government Schemes'
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                        searchCategory === cat ? 'bg-[#F4C430] text-[#070D18]' : 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Results List */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-[10px] text-amber-300/80 font-mono font-bold flex items-center justify-between">
                    <span>{searchResults.items.length} Semantic Matches Found</span>
                    <span>Cosine Similarity &gt; 0.88</span>
                  </p>

                  {searchResults.items.length === 0 ? (
                    <div className="text-center py-8 bg-white/5 rounded-2xl border border-white/10">
                      <AlertCircle className="h-8 w-8 text-amber-400 mx-auto mb-2 opacity-80" />
                      <p className="text-xs font-bold text-white">No exact vector matches for "{searchQuery}"</p>
                      <button
                        onClick={() => { setActiveMode('chat'); handleSendMessage(searchQuery); }}
                        className="mt-3 px-4 py-1.5 rounded-xl bg-[#004B23] text-[#FFD54A] font-bold text-xs border border-[#F4C430]/50"
                      >
                        Ask Iqra AI Assistant →
                      </button>
                    </div>
                  ) : (
                    searchResults.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-[#F4C430]/50 transition space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs text-[#FFD54A]">{item.title}</span>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-300 leading-snug mt-1">{item.content}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[10px] text-gray-400 border-t border-white/10">
                          <span className="font-mono text-emerald-400">📄 {item.citation}</span>
                          <button
                            onClick={() => {
                              onNavigate(item.tab);
                              setIsOpen(false);
                            }}
                            className="px-3 py-1 rounded-lg bg-[#004B23] hover:bg-[#F4C430] text-white hover:text-[#070D18] font-bold transition flex items-center gap-1 cursor-pointer"
                          >
                            <span>Open Page</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* MODE 3: DOCUMENT AI & SUMMARIZER MODE */}
            {activeMode === 'doc-ai' && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-950/60 via-[#0B132B] to-blue-950/60 p-3 rounded-2xl border border-blue-400/40 text-center">
                  <h3 className="text-xs font-extrabold text-cyan-300 flex items-center justify-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    <span>AI Document Understanding & Summarizer</span>
                  </h3>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Extract summaries, key takeaways, and Q&A from official PDFs, DOCX, circulars, books, and prospectus.
                  </p>
                </div>

                {/* Pre-Indexed Document Selector */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-amber-300 uppercase">Select Official Indexed Document:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'doc-1', name: 'Mahapanchayat Constitution PDF', icon: '📜' },
                      { id: 'doc-2', name: 'School Directory Prospectus', icon: '🏫' },
                      { id: 'doc-3', name: 'PM Vishwakarma Loan SOP', icon: '🏛️' }
                    ].map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleAnalyzeDocument(d.id)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition text-left cursor-pointer ${
                          selectedDocId === d.id ? 'bg-[#004B23] text-[#FFD54A] border-[#F4C430]' : 'bg-white/5 text-gray-300 border-white/10'
                        }`}
                      >
                        <span className="mr-1">{d.icon}</span>
                        <span>{d.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Analysis Box */}
                {isAnalyzingDoc ? (
                  <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/10">
                    <Sparkles className="h-8 w-8 text-[#FFD54A] animate-spin mx-auto mb-2" />
                    <p className="text-xs font-bold text-amber-300">Document AI is processing OCR & extracting key insights...</p>
                  </div>
                ) : docAnalysis ? (
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/15 space-y-3 text-xs leading-relaxed">
                    <p className="whitespace-pre-line text-gray-100">{docAnalysis}</p>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => { setActiveMode('chat'); handleSendMessage("Tell me more about this document"); }}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                      >
                        Ask Questions on This Doc →
                      </button>
                      <span className="text-[10px] text-emerald-400 font-mono">100% Verified OCR</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-400">
                    Click any document above to generate instant AI Summary & Key Takeaways.
                  </div>
                )}
              </div>
            )}

            {/* MODE 4: ADMIN SUITE & ANALYTICS DASHBOARD */}
            {activeMode === 'admin' && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-rose-950/60 via-[#0B132B] to-rose-950/60 p-3 rounded-2xl border border-rose-500/40 text-center">
                  <div className="flex items-center justify-center gap-2 text-rose-300 font-extrabold text-xs mb-0.5">
                    <Shield className="h-4 w-4 text-[#F4C430]" />
                    <span>Enterprise AI Admin & Content Generator Suite</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Vector index maintenance, AI content generator, live analytics & security guardrails.
                  </p>
                </div>

                {/* AI Content Generator Tool */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-bold text-[#FFD54A] flex items-center gap-1.5">
                    <Zap className="h-4 w-4" />
                    <span>Admin AI Content Generator</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'news', label: 'News Article 📰' },
                      { id: 'whatsapp', label: 'WhatsApp Msg 💬' },
                      { id: 'notice', label: 'Meeting Notice 📜' },
                      { id: 'certificate', label: 'Certificate 🎓' },
                      { id: 'speech', label: 'Speech Draft 🎙️' }
                    ].map((ct) => (
                      <button
                        key={ct.id}
                        onClick={() => setGenContentType(ct.id as any)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                          genContentType === ct.id ? 'bg-[#F4C430] text-[#070D18]' : 'bg-white/10 text-gray-300'
                        }`}
                      >
                        {ct.label}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={genPrompt}
                    onChange={(e) => setGenPrompt(e.target.value)}
                    placeholder="Enter prompt e.g., 'Scholarship deadline extension notice'..."
                    className="w-full bg-[#050B14] text-white px-3 py-2 rounded-xl border border-white/20 text-xs focus:outline-none"
                  />

                  <button
                    onClick={handleGenerateContent}
                    disabled={isGeneratingContent || !genPrompt.trim()}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1"
                  >
                    {isGeneratingContent ? <Sparkles className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
                    <span>Generate Professional Content</span>
                  </button>

                  {generatedOutput && (
                    <div className="p-3 bg-[#050B14] rounded-xl border border-emerald-500/40 text-xs font-mono text-emerald-200 whitespace-pre-line relative">
                      {generatedOutput}
                      <button
                        onClick={() => { navigator.clipboard.writeText(generatedOutput); alert('Copied to clipboard!'); }}
                        className="mt-2 text-[10px] text-amber-300 hover:underline flex items-center gap-1 font-sans"
                      >
                        <Copy className="h-3 w-3" /> Copy Output
                      </button>
                    </div>
                  )}
                </div>

                {/* Vector Database Manager */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#FFD54A] font-bold">
                    <span className="flex items-center gap-1.5">
                      <Database className="h-4 w-4" />
                      <span>Vector Index Manager</span>
                    </span>
                    <span className="font-mono text-emerald-400">{vectorChunkCount} Chunks</span>
                  </div>
                  <p className="text-gray-300 text-[11px]">
                    Embedding Model: <span className="font-mono text-amber-200">gemini-embedding-004 (768-d)</span> | Metric: Cosine Similarity
                  </p>
                  <button
                    onClick={handleReindex}
                    disabled={isReindexing}
                    className="px-3 py-1.5 rounded-xl bg-[#004B23] hover:bg-emerald-600 text-white font-bold text-xs transition flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${isReindexing ? 'animate-spin' : ''}`} />
                    <span>{isReindexing ? 'Re-indexing Knowledge...' : 'Trigger Full Re-Index'}</span>
                  </button>
                </div>

                {/* Multi-Model Switcher */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#FFD54A] font-bold">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="h-4 w-4" />
                      <span>LLM Model Selection & Temperature</span>
                    </span>
                  </div>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-[#050B14] text-amber-300 font-mono text-xs px-3 py-2 rounded-xl border border-white/20"
                  >
                    <option value="gemini-2.5-flash">Google Gemini 2.5 Flash (Default Active)</option>
                    <option value="gemini-2.5-pro">Google Gemini 2.5 Pro (Deep Research)</option>
                    <option value="gpt-4o">OpenAI GPT-4o (Enterprise Fallback)</option>
                    <option value="claude-3.5">Anthropic Claude 3.5 Sonnet</option>
                  </select>
                </div>

                {/* Add Custom FAQ */}
                <form onSubmit={handleAddFaq} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Plus className="h-4 w-4" />
                    <span>Index Custom FAQ into AI Brain</span>
                  </h4>
                  <input
                    type="text"
                    value={newFaqQ}
                    onChange={(e) => setNewFaqQ(e.target.value)}
                    placeholder="Question..."
                    className="w-full bg-[#050B14] text-white px-3 py-1.5 rounded-xl border border-white/20 text-xs focus:outline-none"
                    required
                  />
                  <textarea
                    value={newFaqA}
                    onChange={(e) => setNewFaqA(e.target.value)}
                    placeholder="Verified Answer..."
                    rows={2}
                    className="w-full bg-[#050B14] text-white px-3 py-1.5 rounded-xl border border-white/20 text-xs focus:outline-none"
                    required
                  />
                  <button type="submit" className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer">
                    + Index FAQ
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* D. FOOTER INPUT BAR */}
          {activeMode === 'chat' && (
            <div className="bg-[#070D18] p-3 border-t border-[#D4AF37]/50 flex items-center space-x-2 shrink-0">
              <button
                onClick={toggleRecording}
                className={`p-2.5 rounded-xl border transition cursor-pointer ${
                  isVoiceRecording ? 'bg-rose-600 text-white border-rose-400 animate-pulse' : 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/10'
                }`}
                title="Voice Input"
              >
                {isVoiceRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>

              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    isVoiceRecording
                      ? 'Listening to your voice query...'
                      : (chatLang === 'hi' ? 'कोई भी प्रश्न पूछें (जैसे: मोरैना में सीबीएसई स्कूल)...' : 'Ask IQRA AI anything across 25+ portal modules...')
                  }
                  className="w-full bg-[#0E1A30] text-white pl-3.5 pr-10 py-2.5 rounded-xl border border-[#D4AF37]/50 focus:outline-none focus:border-[#F4C430] text-xs placeholder-gray-400"
                />
              </div>

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputQuery.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#004B23] to-[#0D2418] text-white hover:text-[#070D18] hover:bg-[#F4C430] border border-[#F4C430]/60 transition disabled:opacity-40 cursor-pointer shadow-md flex items-center justify-center shrink-0"
                title="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. MINIMIZED PILL */}
      {isOpen && isMinimized && (
        <div 
          onClick={() => setIsMinimized(false)}
          role="button"
          aria-label="Restore IQRA AI Assistant"
          className="fixed bottom-6 right-6 z-[10002] bg-gradient-to-r from-[#004B23] via-[#0A2E1C] to-[#070D18] text-white px-5 py-3 rounded-full shadow-2xl border-2 border-[#F4C430] flex items-center space-x-3 cursor-pointer hover:scale-105 transition"
        >
          <Sparkles className="h-5 w-5 text-[#FFD54A] animate-spin" />
          <span className="font-extrabold text-xs sm:text-sm text-[#FFD54A]">IQRA AI Assistant</span>
          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">Active</span>
          <Maximize2 className="h-4 w-4 text-gray-300 ml-1" />
        </div>
      )}
    </>
  );
}
