import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Bot, Send, Search, HelpCircle, Shield, Award, Heart, 
  Users, BookOpen, Briefcase, FileText, Phone, Building2, ChevronRight, 
  CheckCircle2, AlertCircle, TrendingUp, Globe, RefreshCw, Volume2, Mic, Check, ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import PremiumHero from './common/PremiumHero';

interface IqraAIPageProps {
  currentLanguage: Language;
  onNavigate: (tab: string) => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    tab: string;
  };
  followUps?: string[];
  isVerified?: boolean;
}

const KNOWLEDGE_BASE = [
  { id: '1', title: 'Family Census & Registration', category: 'Census', description: 'Official national population census to register families, dependents, and profession.', tab: 'membership-census' },
  { id: '2', title: 'Maulana Abul Kalam Azad Merit Scholarship', category: 'Scholarship', description: 'Financial grant up to ₹25,000 for Class 10th and 12th meritorious students.', tab: 'scholarships' },
  { id: '3', title: 'Standard Matrimonial & Nikah Registry', category: 'Matrimonial', description: 'Verified matchmaking registry for unmarried brides and grooms of Rangrez samaj.', tab: 'matrimonial' },
  { id: '4', title: 'Second Marriage ✨ Premium Portal', category: 'Matrimonial', description: 'Dignified, confidential remarriage registry for widows, widowers, and divorced members.', tab: 'matrimonial-second' },
  { id: '5', title: '24×7 Emergency Blood Donor Directory', category: 'Welfare', description: 'Search volunteer blood donors by blood group across 28 states.', tab: 'welfare-blood-donors' },
  { id: '6', title: 'PM Vishwakarma Artisan Loan Scheme', category: 'Government Scheme', description: 'Central government low-interest loan up to ₹3 Lakhs for traditional textile dyers.', tab: 'schemes' },
  { id: '7', title: 'Digital ID Card & Verification Badge', category: 'Membership', description: 'Generate your official QR-coded community identity card for voting and welfare benefits.', tab: 'membership-id' },
  { id: '8', title: 'Begum Hazrat Mahal Higher Education Grant', category: 'Scholarship', description: 'Special scholarship fund dedicated to girl students pursuing graduation & medical degrees.', tab: 'scholarships' },
  { id: '9', title: 'Community Constitution & Legal Rights PDF', category: 'Resources', description: 'Download official PDF of All India Rangrez Community Constitution and citizen rights.', tab: 'media-downloads' },
  { id: '10', title: 'Mahapanchayat Anti-Dowry Resolutions', category: 'Governance', description: 'Official Mahapanchayat resolutions banning dowry and capping wedding expenses.', tab: 'mahapanchayat' }
];

export default function IqraAIPage({ currentLanguage, onNavigate }: IqraAIPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: currentLanguage === 'hi' 
        ? 'नमस्ते! मैं इकरा (Iqra AI Assistant) हूँ — रंगरेज़ समाज भारत पोर्टल की आपकी 24×7 डिजिटल मार्गदर्शन सहायिका। मैं पोर्टल के किसी भी फीचर, छात्रवृत्ति, निकाह रिश्ते या सदस्यता में आपकी सहायता कर सकती हूँ।' 
        : currentLanguage === 'ur' 
        ? 'سلام! میں اقراء (Iqra AI Assistant) ہوں — رنگریز کمیونٹی بھارت پورٹل کی آپ کی 24×7 ڈیجیٹل رہنما۔ میں آپ کی ہر طرح کی رہنمائی کے لیے حاضر ہوں۔'
        : 'Hello! I am Iqra, your 24×7 AI digital guide for the Rangrez Community Bharat Portal. How can I assist you today with memberships, family census, scholarships, matrimonial services, or government schemes?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isVerified: true,
      followUps: [
        currentLanguage === 'hi' ? 'परिवार का पंजीकरण कैसे करें?' : 'How to register family?',
        currentLanguage === 'hi' ? 'कौन सी छात्रवृत्तियां उपलब्ध हैं?' : 'Available scholarships?',
        currentLanguage === 'hi' ? 'दूसरा विवाह (विशेष रिश्ते) पोर्टल' : 'Second marriage portal',
        currentLanguage === 'hi' ? 'इमरजेंसी ब्लड डोनर खोजें' : 'Find blood donor'
      ]
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputQuery;
    if (!q.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = '';
      let actionTab = '';
      let actionLabel = '';

      const lower = q.toLowerCase();
      if (lower.includes('family') || lower.includes('census') || lower.includes('परिवार') || lower.includes('خاندان')) {
        aiResponseText = currentLanguage === 'hi'
          ? 'आप परिवार पंजीकरण (Family Census) अनुभाग के माध्यम से अपने परिवार के सभी सदस्यों को जोड़ सकते हैं। यह क्लाउड डेटाबेस से सुरक्षित रूप से जुड़ा हुआ है।'
          : 'You can register your family details, lineage, and members securely via our Family Census module.';
        actionTab = 'membership-census';
        actionLabel = currentLanguage === 'hi' ? 'परिवार पंजीकरण खोलें' : 'Open Family Registration';
      } else if (lower.includes('scholarship') || lower.includes('छात्रवृत्ति') || lower.includes('اسکالرشپ')) {
        aiResponseText = currentLanguage === 'hi'
          ? 'हमारे पास स्कूली छात्रों और स्नातक छात्राओं के लिए कई छात्रवृत्ति योजनाएं उपलब्ध हैं। आप स्कॉलरशिप पोर्टल पर पात्रता देख सकते हैं।'
          : 'We offer multiple merit scholarships for school and college students. Check eligibility and apply instantly.';
        actionTab = 'scholarships';
        actionLabel = currentLanguage === 'hi' ? 'छात्रवृत्ति पोर्टल देखें' : 'View Scholarships Portal';
      } else if (lower.includes('matrimonial') || lower.includes('marriage') || lower.includes('शादी') || lower.includes('रشتہ') || lower.includes('nikah')) {
        aiResponseText = currentLanguage === 'hi'
          ? 'हमारा वैवाहिक मंच (Matrimonial Portal) रंगरेज़ समाज के लिए पूरी तरह सुरक्षित और सत्यापित रिश्ता खोजने की सुविधा प्रदान करता है। दूसरा विवाह (Second Marriage) पोर्टल भी उपलब्ध है।'
          : 'Our Matrimonial Portal provides verified matchmaking for the Rangrez community with strict privacy controls.';
        actionTab = 'matrimonial';
        actionLabel = currentLanguage === 'hi' ? 'वैवाहिक पोर्टल खोलें' : 'Open Matrimonial Portal';
      } else if (lower.includes('blood') || lower.includes('donor') || lower.includes('emergency') || lower.includes('ब्लड') || lower.includes('خون')) {
        aiResponseText = currentLanguage === 'hi'
          ? 'आप हमारे 24×7 आपातकालीन ब्लड डोनर डायरेक्टरी में रक्त समूह (A+, B+, O+, AB-) के अनुसार दाताओं से संपर्क कर सकते हैं।'
          : 'Access our 24×7 Emergency Blood Donor Directory to connect with volunteer blood donors instantly.';
        actionTab = 'welfare-blood-donors';
        actionLabel = currentLanguage === 'hi' ? 'ब्लड डोनर डायरेक्टरी देखें' : 'Open Blood Donors Directory';
      } else if (lower.includes('scheme') || lower.includes('yojana') || lower.includes('योजना') || lower.includes('حکومت')) {
        aiResponseText = currentLanguage === 'hi'
          ? 'केंद्र और राज्य सरकारों की बुनकर कल्याण योजनाओं (जैसे पीएम विश्वकर्मा) की जानकारी और आवेदन लिंक हमारे सरकारी योजना अनुभाग में उपलब्ध हैं।'
          : 'Explore Central and State government welfare schemes, artisan grants, and loan subsidies in our Schemes section.';
        actionTab = 'schemes';
        actionLabel = currentLanguage === 'hi' ? 'सरकारी योजनाएं देखें' : 'View Government Schemes';
      } else {
        aiResponseText = currentLanguage === 'hi'
          ? `मैंने आपके प्रश्न "${q}" के लिए हमारे सामुदायिक ज्ञान कोष (Knowledge Base) की जांच की है। आप नीचे दिए गए अनुभाग पर जा सकते हैं या सहायता टीम से संपर्क कर सकते हैं।`
          : `I have searched the Rangrez community knowledge base for "${q}". You can explore the matching service below or ask another question.`;
        actionTab = 'membership-register';
        actionLabel = currentLanguage === 'hi' ? 'सामुदायिक पोर्टल देखें' : 'Explore Community Portal';
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerified: true,
        suggestedAction: actionTab ? { label: actionLabel, tab: actionTab } : undefined,
        followUps: [
          currentLanguage === 'hi' ? 'डिजिटल आईडी कैसे बनाएं?' : 'How to get Digital ID?',
          currentLanguage === 'hi' ? 'महापंचायत के नियम' : 'Mahapanchayat rules'
        ]
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  const filteredKnowledgeBase = KNOWLEDGE_BASE.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-[#FCFAF5] pb-16 font-sans">
      {/* SEO metadata simulator */}
      <div className="sr-only">
        <h1>Iqra AI Assistant - Rangrez Community Bharat Portal</h1>
        <p>24x7 Multilingual AI assistant, FAQs, and community knowledge base.</p>
      </div>

      <PremiumHero
        title={currentLanguage === 'en' ? 'Iqra AI Assistant' : currentLanguage === 'ur' ? 'اقراء AI رہنما' : 'इकरा AI सहायिका'}
        subtitle={currentLanguage === 'en' ? 'Your 24×7 multilingual digital companion providing instant answers, navigation, and guidance across all community modules.' : currentLanguage === 'ur' ? 'آپ کی 24×7 ڈیجیٹل رہنما جو تمام کمیونٹی ماڈیولز میں فوری جوابات اور رہنمائی فراہم کرتی ہے۔' : 'आपकी 24×7 बहुभाषी डिजिटल सहायिका जो सभी सामुदायिक मॉड्यूलों में त्वरित उत्तर और मार्गदर्शन प्रदान करती है।'}
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
        overlayColor="#004B23"
        overlayOpacity={0.85}
        breadcrumb={[
          { label: currentLanguage === 'en' ? 'Home' : 'होम', action: () => onNavigate('home') },
          { label: currentLanguage === 'en' ? 'Iqra AI Assistant' : 'इकरा AI', action: () => {} }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20 space-y-10">
        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Center: Chat Interface (2 cols on lg) */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col h-[700px] overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#004B23] to-[#0A2E1C] p-4 sm:p-5 text-white flex items-center justify-between border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFD54A] text-[#004B23] flex items-center justify-center font-black shadow-md">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#FFD54A] flex items-center gap-2">
                    <span>Iqra AI Assistant (इकरा)</span>
                    <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-mono">ONLINE 24×7</span>
                  </h3>
                  <p className="text-xs text-gray-200 font-light">
                    {currentLanguage === 'en' ? 'Multilingual Community Guide & Navigator' : 'बहुभाषी सामुदायिक मार्गदर्शक'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-xl text-[#FFD54A] border border-white/20">
                  {currentLanguage.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-[#004B23] text-white rounded-tr-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 text-[10px] opacity-75 pb-1 border-b border-current/10 font-mono">
                      <span>{msg.sender === 'user' ? 'You' : 'Iqra AI Guide'}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                      {msg.text}
                    </p>

                    {msg.suggestedAction && (
                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate(msg.suggestedAction!.tab)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004B23] text-[#FFD54A] text-xs font-extrabold hover:bg-[#0A2E1C] transition shadow cursor-pointer border border-[#FFD54A]/30"
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {msg.followUps && msg.followUps.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {msg.followUps.map((fu, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(fu)}
                            className="text-xs bg-emerald-50 hover:bg-emerald-100 text-[#004B23] px-3 py-1.5 rounded-xl font-semibold transition border border-emerald-200 cursor-pointer"
                          >
                            💬 {fu}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none text-gray-500 text-xs flex items-center gap-2 shadow-sm">
                    <Sparkles className="w-4 h-4 text-[#004B23] animate-spin" />
                    <span>Iqra is typing response...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Footer */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder={currentLanguage === 'hi' ? 'यहाँ अपना प्रश्न पूछें (जैसे: छात्रवृत्ति, परिवार पंजीकरण)...' : 'Ask Iqra a question about community services, schemes, or registration...'}
                  aria-label="Ask Iqra a question"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#004B23] text-sm bg-gray-50 font-sans"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isTyping}
                  className="px-5 py-3 rounded-xl bg-[#004B23] hover:bg-[#0A2E1C] text-[#FFD54A] font-bold transition flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-md shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Knowledge Base & Quick Shortcuts */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 space-y-4">
              <h4 className="text-base font-serif font-bold text-[#0B132B] flex items-center gap-2 border-b border-gray-100 pb-3">
                <BookOpen className="w-5 h-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Community Knowledge Base' : 'सामुदायिक ज्ञान कोष'}</span>
              </h4>

              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentLanguage === 'hi' ? 'ज्ञान कोष में खोजें...' : 'Search FAQs & modules...'}
                  aria-label="Search FAQs and modules"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#004B23] bg-gray-50"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['ALL', 'Census', 'Scholarship', 'Matrimonial', 'Welfare', 'Government Scheme'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#004B23] text-[#FFD54A]'
                        : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* KB List */}
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {filteredKnowledgeBase.length === 0 ? (
                  <div className="text-center py-8 text-xs text-gray-500">
                    No matching knowledge base articles found. Try another search query.
                  </div>
                ) : (
                  filteredKnowledgeBase.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onNavigate(item.tab)}
                      className="p-3.5 rounded-2xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-200 hover:border-[#004B23] transition cursor-pointer group space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase text-[#004B23] bg-emerald-100/60 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#004B23]">
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
