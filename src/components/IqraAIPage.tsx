import React, { useState } from 'react';
import { 
  Sparkles, Bot, Send, Search, HelpCircle, Shield, Award, Heart, 
  Users, BookOpen, Briefcase, FileText, Phone, Building2, ChevronRight, 
  CheckCircle2, AlertCircle, TrendingUp, Globe, RefreshCw, Volume2, Mic, Check, ArrowRight,
  Database, File, Zap, Copy
} from 'lucide-react';
import { Language } from '../types';
import PremiumHero from './common/PremiumHero';
import { VERIFIED_RAG_DATABASE, searchRagKnowledge } from '../data/iqraRagKnowledgeBase';

interface IqraAIPageProps {
  currentLanguage: Language;
  onNavigate: (tab: string) => void;
}

export default function IqraAIPage({ currentLanguage, onNavigate }: IqraAIPageProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'search' | 'doc-ai' | 'admin'>('chat');
  const [chatLang, setChatLang] = useState<'en' | 'hi' | 'ur'>(currentLanguage);
  
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<{
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: string;
    tab?: string;
    citation?: string;
  }[]>([
    {
      id: '1',
      sender: 'ai',
      text: currentLanguage === 'hi' 
        ? 'नमस्ते! मैं इकरा (Iqra AI Assistant) हूँ — रंगरेज़ समाज भारत पोर्टल का बुद्धिमत्तापूर्ण एआई मस्तिष्क। मैं पोर्टल के हर पृष्ठ, स्कूल डायरेक्टरी, कॉलेज, छात्रवृत्ति, ब्लड डोनर व महापंचायत प्रस्ताव की सत्यापित जानकारी प्रदान करती हूँ।'
        : currentLanguage === 'ur'
        ? 'السلام علیکم! میں اقراء (Iqra AI Assistant) ہوں — پورٹل کا تصدیق شدہ ڈیجیٹل رہنما۔'
        : 'Assalamu Alaikum! I am Iqra AI Assistant — the intelligent AI brain of the Rangrez Community Bharat Portal. Ask me anything across 25+ portal modules!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citation: 'IQRA AI RAG Engine v3.0'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('ALL');

  // Document AI State
  const [selectedDocId, setSelectedDocId] = useState('doc-1');

  // Admin Generator
  const [genPrompt, setGenPrompt] = useState('');
  const [generatedOutput, setGeneratedOutput] = useState('');

  const handleSendMessage = (text?: string) => {
    const q = text || inputQuery;
    if (!q.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user' as const,
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!text) setInputQuery('');

    setTimeout(() => {
      const searchRes = searchRagKnowledge(q);
      let aiText = '';
      let citation = '';
      let targetTab = '';

      if (searchRes.items.length > 0) {
        const top = searchRes.items[0];
        aiText = `📌 **${top.title}**\n${top.content}\n\n📍 Location: ${top.location || 'All India Portal'}`;
        citation = top.citation;
        targetTab = top.tab;
      } else {
        aiText = "⚠️ **Information Unavailable in Verified Knowledge Base:** I could not find a verified record for this in the portal database. IQRA AI only provides answers backed by official committee documents.";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'ai' as const,
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        tab: targetTab,
        citation
      }]);
    }, 500);
  };

  const searchResults = searchRagKnowledge(searchQuery, searchCategory);

  return (
    <div className="min-h-screen bg-[#070D18] text-white">
      {/* PREMIUM HERO */}
      <PremiumHero
        title={currentLanguage === 'en' ? 'IQRA AI Assistant Hub' : currentLanguage === 'ur' ? 'اقراء اے آئی پورٹل' : 'इकरा एआई असिस्टेंट हब'}
        subtitle={currentLanguage === 'en' ? 'The intelligent AI brain of the Rangrez Community Bharat Portal. Context-aware, multilingual, verified RAG engine.' : 'अखिल भारतीय रंगरेज़ समाज पोर्टल की 24×7 बुद्धिमत्तापूर्ण एआई मार्गदर्शिका।'}
        image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop"
        overlayColor="#004B23"
        overlayOpacity={0.85}
        breadcrumb={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'IQRA AI Brain', action: () => {} }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        
        {/* TABS NAVIGATION */}
        <div className="flex justify-center border-b border-white/10 pb-4 gap-2 flex-wrap">
          {[
            { id: 'chat', label: 'AI Assistant Chat 💬' },
            { id: 'search', label: 'Semantic RAG Search 🔍' },
            { id: 'doc-ai', label: 'Document AI & Summarizer 📄' },
            { id: 'admin', label: 'Admin Generator & Vector DB ⚡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition cursor-pointer border ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-[#004B23] to-[#0D2418] text-[#FFD54A] border-[#F4C430] shadow-[0_0_20px_rgba(244,196,48,0.4)]'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: CHAT */}
        {activeTab === 'chat' && (
          <div className="bg-[#0B1729] border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-6 w-6 text-[#FFD54A] animate-spin" />
                <div>
                  <h3 className="font-extrabold text-base text-[#FFD54A]">IQRA AI RAG Conversational Guide</h3>
                  <p className="text-xs text-gray-300">Grounding model against official portal records with 0% hallucination mandate.</p>
                </div>
              </div>
              <div className="flex gap-2">
                {['en', 'hi', 'ur'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setChatLang(l as any)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase border ${
                      chatLang === l ? 'bg-[#F4C430] text-[#070D18] border-white' : 'bg-white/10 text-gray-300 border-transparent'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Prompt Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {[
                "Show CBSE schools in Morena with hostel",
                "Engineering colleges under ₹1 lakh in MP",
                "11 Mahapanchayat resolutions about education",
                "Blood donors with O+ group in Joura"
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p)}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#004B23] text-left text-xs text-gray-200 border border-white/10 transition cursor-pointer"
                >
                  ✦ {p}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto p-4 bg-[#050B14] rounded-2xl border border-white/10 custom-scrollbar">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className="max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm bg-white/5 border border-white/10 leading-relaxed whitespace-pre-line">
                    {m.text}
                    {m.citation && (
                      <div className="mt-2 text-[10px] text-amber-300 font-mono">📄 {m.citation}</div>
                    )}
                  </div>
                  {m.tab && (
                    <button
                      onClick={() => onNavigate(m.tab!)}
                      className="mt-2 px-4 py-1.5 rounded-xl bg-[#F4C430] text-[#070D18] font-extrabold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open Section</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask anything about schools, scholarships, jobs, blood donors, or census..."
                className="flex-1 bg-[#050B14] text-white px-4 py-3 rounded-xl border border-[#D4AF37]/50 text-xs focus:outline-none focus:border-[#F4C430]"
              />
              <button
                onClick={() => handleSendMessage()}
                className="px-6 py-3 rounded-xl bg-[#004B23] hover:bg-[#F4C430] text-white hover:text-[#070D18] font-extrabold text-xs transition border border-[#F4C430]/60 cursor-pointer"
              >
                Ask IQRA AI
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: SEMANTIC SEARCH */}
        {activeTab === 'search' && (
          <div className="bg-[#0B1729] border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-extrabold text-base text-[#FFD54A]">Universal Semantic AI Search</h3>
                <p className="text-xs text-gray-300">Natural language search queries matched against verified vector chunks.</p>
              </div>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g., 'Morena CBSE hostel', 'Mechanical Engineer', 'O+ blood', 'Dowry resolution'..."
              className="w-full bg-[#050B14] text-white px-4 py-3 rounded-xl border border-[#D4AF37]/50 text-xs focus:outline-none"
            />

            <div className="space-y-3">
              {searchResults.items.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#FFD54A]">{item.title}</h4>
                    <p className="text-xs text-gray-300 mt-1">{item.content}</p>
                    <span className="text-[10px] text-emerald-400 font-mono mt-1 block">📄 {item.citation}</span>
                  </div>
                  <button
                    onClick={() => onNavigate(item.tab)}
                    className="px-4 py-2 rounded-xl bg-[#004B23] hover:bg-[#F4C430] text-white hover:text-[#070D18] font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Open Page →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DOCUMENT AI */}
        {activeTab === 'doc-ai' && (
          <div className="bg-[#0B1729] border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl space-y-6">
            <h3 className="font-extrabold text-base text-cyan-300">Document AI & Summarizer Engine</h3>
            <p className="text-xs text-gray-300">Select pre-indexed document to generate instant summaries and key takeaways.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'doc-1', title: 'Mahapanchayat Constitution PDF' },
                { id: 'doc-2', title: 'School Directory & Hostel Prospectus' },
                { id: 'doc-3', title: 'PM Vishwakarma Artisan Loan SOP' }
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDocId(d.id)}
                  className={`p-4 rounded-2xl border text-xs font-bold text-left cursor-pointer ${
                    selectedDocId === d.id ? 'bg-[#004B23] text-[#FFD54A] border-[#F4C430]' : 'bg-white/5 text-gray-300 border-white/10'
                  }`}
                >
                  📄 {d.title}
                </button>
              ))}
            </div>

            <div className="p-5 bg-[#050B14] rounded-2xl border border-white/10 text-xs leading-relaxed space-y-2">
              <p className="font-bold text-[#FFD54A]">📄 Summary for Selected Document:</p>
              <p className="text-gray-300">
                {selectedDocId === 'doc-1' && "This document outlines the constitution of All India Rangrez Community and 11 resolutions banning dowry and promoting education."}
                {selectedDocId === 'doc-2' && "Comprehensive directory listing 300+ schools with hostel facilities, fee structure, and scholarship quotas across 28 states."}
                {selectedDocId === 'doc-3' && "Government SOP for PM Vishwakarma ₹3 Lakh collateral-free artisan loans for traditional textile dyers at 5% interest rate."}
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: ADMIN GENERATOR */}
        {activeTab === 'admin' && (
          <div className="bg-[#0B1729] border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl space-y-6">
            <h3 className="font-extrabold text-base text-rose-300">Admin AI Content Generator & Vector Index Manager</h3>
            
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <p className="text-xs font-bold text-[#FFD54A]">Generate News, WhatsApp Broadcasts, or Notices:</p>
              <input
                type="text"
                value={genPrompt}
                onChange={(e) => setGenPrompt(e.target.value)}
                placeholder="Enter topic e.g., 'Notice for Family Census Drive'..."
                className="w-full bg-[#050B14] text-white px-4 py-2.5 rounded-xl border border-white/20 text-xs focus:outline-none"
              />
              <button
                onClick={() => setGeneratedOutput(`📢 *OFFICIAL ANNOUNCEMENT*\n\nRegarding: ${genPrompt}\nAll members are requested to participate in the upcoming drive.`)}
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer"
              >
                Generate Draft
              </button>

              {generatedOutput && (
                <div className="p-3 bg-[#050B14] rounded-xl border border-emerald-500/40 text-xs font-mono text-emerald-200">
                  {generatedOutput}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
