import React, { useState } from 'react';
import { 
  Wrench, Vote, BarChart3, ScrollText, History, Users, Bell, 
  ShieldCheck, Database, FileText, Plus, Edit, Trash2, CheckCircle2, 
  AlertTriangle, RefreshCw, Download, Lock, Search, Filter, Eye, Check, X
} from 'lucide-react';
import { Language, Proposal, Resolution, Survey } from './types';
import { getText } from './utils';

interface AdminDashboardProps {
  currentLanguage: Language;
  proposals?: Proposal[];
  resolutions?: Resolution[];
  surveys?: Survey[];
  onUpdateProposalStage?: (id: string, stage: any) => void;
}

export default function AdminDashboard({
  currentLanguage,
  proposals = [],
  resolutions = [],
  surveys = [],
  onUpdateProposalStage
}: AdminDashboardProps) {
  const [activeAdminTab, setActiveAdminTab] = useState<'surveys' | 'polls' | 'agendas' | 'resolutions' | 'committees' | 'system'>('surveys');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [auditLogs, setAuditLogs] = useState([
    { id: 'log-1', time: '10 mins ago', action: 'New Survey Scheduled: Marriage Reform 2026', user: 'Sec. Haji Mohammed Idris (Jaipur)', status: 'Success' },
    { id: 'log-2', time: '1 hour ago', action: 'Resolution Gazetted: RES/2026/NAT-01', user: 'Advocate Zainab Bibi (Lucknow)', status: 'Verified' },
    { id: 'log-3', time: '3 hours ago', action: 'E-KYC Override & District Transfer', user: 'Admin System Bot (#AUTO)', status: 'Audit Trail' },
    { id: 'log-4', time: '1 day ago', action: 'Database Backup Completed (2.8 GB SHA-256 encrypted)', user: 'Cloud Governance Engine', status: 'Secured' },
  ]);

  const handleAction = (msgEn: string, msgHi: string, msgUr: string) => {
    alert(getText(msgEn, msgHi, msgUr, currentLanguage));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Admin Top Header Banner */}
      <div className="bg-gradient-to-r from-[#004B23] via-[#07351B] to-[#004B23] p-6 sm:p-8 rounded-3xl border-2 border-[#F4C430] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#F4C430] text-[#0B132B] px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase shadow">
              🔒 {getText('National Secretariat Portal', 'राष्ट्रीय सचिवालय पोर्टल', 'قومی سیکرٹریٹ پورٹل', currentLanguage)}
            </span>
            <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30">
              {getText('Admin Role: Supreme Secretary / Sharia Board Convener', 'एडमिन भूमिका: सर्वोच्च सचिव / शरिया बोर्ड संयोजक', 'ایڈمن رول: سپریم سیکرٹری / شریعہ بورڈ کنوینر', currentLanguage)}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
            {getText('Mahapanchayat E-Governance Admin Control Panel', 'महापंचायत ई-गवर्नेंस एडमिन कंट्रोल पैनल', 'مہاپنچایت ای گورننس ایڈمن کنٹرول پینل', currentLanguage)}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            {getText(
              'Manage digital surveys, moderate citizen proposals, publish official binding resolutions, assign committee tenures, and monitor cryptographic audit logs.',
              'डिजिटल सर्वेक्षणों का प्रबंधन करें, नागरिक प्रस्तावों की समीक्षा करें, आधिकारिक प्रस्ताव प्रकाशित करें, समिति कार्यकाल आवंटित करें और डिजिटल सुरक्षा लॉग की निगरानी करें।',
              'ڈیجیٹل سروے کا انتظام کریں، شہری تجاویز کا جائزہ لیں، سرکاری قراردادیں شائع کریں، کمیٹی کی مدت کار تفویض کریں اور ڈیجیٹل سیکیورٹی لاگ کی نگرانی کریں۔',
              currentLanguage
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button
            onClick={() => handleAction('Initiating full system database backup with SHA-256 encryption...', 'SHA-256 एन्क्रिप्शन के साथ पूर्ण सिस्टम डेटाबेस बैकअप शुरू हो रहा है...', 'SHA-256 انکرپشن کے ساتھ مکمل سسٹم ڈیٹا بیس بیک اپ شروع ہو رہا ہے...')}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition border border-white/20 flex items-center gap-2 shadow cursor-pointer"
          >
            <Database className="h-4 w-4 text-[#F4C430]" />
            <span>{getText('Backup Database', 'डेटाबेस बैकअप', 'ڈیٹا بیس بیک اپ', currentLanguage)}</span>
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] px-5 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-2 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" />
            <span>{getText('+ Create New Governance Item', '+ नया शासन आइटम बनाएं', '+ نیا گورننس آئٹم بنائیں', currentLanguage)}</span>
          </button>
        </div>
      </div>

      {/* Admin Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-gray-200 pb-3">
        {[
          { id: 'surveys', labelEn: 'Survey Management (4)', labelHi: 'सर्वे प्रबंधन (4)', labelUr: 'سروے مینجمنٹ (4)', icon: <Vote className="h-4 w-4 text-emerald-600" /> },
          { id: 'polls', labelEn: 'Poll Management (6)', labelHi: 'जनमत प्रबंधन (6)', labelUr: 'پول مینجمنٹ (6)', icon: <BarChart3 className="h-4 w-4 text-blue-600" /> },
          { id: 'agendas', labelEn: 'Agenda & Proposal Moderation (12)', labelHi: 'एजेंडा व प्रस्ताव समीक्षा (12)', labelUr: 'ایجنڈا اور تجویز کا جائزہ (12)', icon: <ScrollText className="h-4 w-4 text-purple-600" /> },
          { id: 'resolutions', labelEn: 'Resolution Gazette (8)', labelHi: 'प्रस्ताव गजट (8)', labelUr: 'قرارداد گزٹ (8)', icon: <History className="h-4 w-4 text-amber-600" /> },
          { id: 'committees', labelEn: 'Committee & Role Assignment', labelHi: 'समिति व पद आवंटन', labelUr: 'کمیٹی اور عہدہ کی تفویض', icon: <Users className="h-4 w-4 text-indigo-600" /> },
          { id: 'system', labelEn: 'Audit Trail & Security Logs', labelHi: 'ऑडिट ट्रेल व सुरक्षा लॉग', labelUr: 'آڈٹ ٹریل اور سیکیورٹی لاگ', icon: <ShieldCheck className="h-4 w-4 text-red-600" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeAdminTab === tab.id
                ? 'bg-[#004B23] text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#004B23]'
            }`}
          >
            {tab.icon}
            <span>{getText(tab.labelEn, tab.labelHi, tab.labelUr, currentLanguage)}</span>
          </button>
        ))}
      </div>

      {/* Admin Tab Contents */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* TAB 1: SURVEY MANAGEMENT */}
        {activeAdminTab === 'surveys' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Digital Survey Builder & Ballot Management', 'डिजिटल सर्वे बिल्डर एवं मतदान प्रबंधन', 'ڈیجیٹل سروے بلڈر اور بیلٹ مینجمنٹ', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Create, schedule, edit, duplicate or archive official Mahapanchayat surveys.', 'आधिकारिक महापंचायत सर्वेक्षण बनाएं, शेड्यूल करें, संपादित करें या अभिलेखागार में डालें।', 'سرکاری مہاپنچایت سروے بنائیں، شیڈول کریں، ترمیم کریں یا آرکائیو کریں۔', currentLanguage)}</p>
              </div>
              <button 
                onClick={() => handleAction('Opening Interactive Survey Builder Pro with 12 question types (Matrix, Rating, Video, PDF)...', '12 प्रकार के प्रश्नों के साथ इंटरएक्टिव सर्वे बिल्डर प्रो खुल रहा है...', '12 قسم کے سوالات کے ساتھ انٹرایکٹو سروے بلڈر پرو کھل رہا ہے...')}
                className="bg-[#004B23] text-[#FFD54A] px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-800 transition flex items-center gap-2 shadow cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>{getText('Launch Survey Builder Pro', 'सर्वे बिल्डर प्रो चलाएं', 'سروے بلڈر پرو چلائیں', currentLanguage)}</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { titleEn: 'Universal Community Marriage Reform & Dowry Abolition', titleHi: 'सार्वभौमिक समाज विवाह सुधार एवं दहेज उन्मूलन', votes: '42,850', status: 'active', end: '15 Nov 2026', cat: 'Social Reform' },
                { titleEn: 'Education Fund: 2% Community Cess for Higher Studies', titleHi: 'शिक्षा कोष: उच्च शिक्षा के लिए 2% सामुदायिक उपकर', votes: '31,200', status: 'active', end: '20 Nov 2026', cat: 'Education' },
                { titleEn: 'National Sharia Dispute & Family Counseling Cell Setup', titleHi: 'राष्ट्रीय शरिया विवाद एवं परिवार परामर्श प्रकोष्ठ स्थापना', votes: '18,400', status: 'scheduled', end: '01 Jan 2027', cat: 'Legal Aid' },
                { titleEn: 'Youth Entrepreneurship & ONDC E-Commerce Onboarding Survey', titleHi: 'युवा उद्यमिता एवं ONDC ई-कॉमर्स ऑनबोर्डिंग सर्वे', votes: '29,150', status: 'closed', end: '15 Aug 2025', cat: 'Economic Growth' },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-5 space-y-4 hover:border-emerald-300 transition bg-gray-50/50 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">{item.cat}</span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${item.status === 'active' ? 'bg-green-600 text-white animate-pulse' : item.status === 'scheduled' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{currentLanguage === 'en' ? item.titleEn : item.titleHi}</h4>
                    <div className="text-xs text-gray-500 font-mono">
                      📊 {item.votes} {getText('Verified Votes', 'सत्यापित वोट', 'تصدیق شدہ ووٹ', currentLanguage)} • 📅 {getText('Ends', 'समाप्त', 'ختم', currentLanguage)}: {item.end}
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-200/60">
                    <button onClick={() => handleAction(`Editing survey: ${item.titleEn}`, `सर्वे संपादित करें: ${item.titleHi}`, `سروے میں ترمیم کریں: ${item.titleEn}`)} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-xs font-bold text-gray-700 flex items-center gap-1 cursor-pointer">
                      <Edit className="h-3.5 w-3.5 text-blue-600" />
                      <span>{getText('Edit', 'संपादित करें', 'ترمیم کریں', currentLanguage)}</span>
                    </button>
                    <button onClick={() => handleAction(`Exporting survey responses CSV/PDF for: ${item.titleEn}`, `सर्वे परिणाम निर्यात हो रहे हैं: ${item.titleHi}`, `سروے کے نتائج برآمد ہو رہے ہیں: ${item.titleEn}`)} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-xs font-bold text-gray-700 flex items-center gap-1 cursor-pointer">
                      <Download className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{getText('Export CSV', 'CSV निर्यात', 'CSV برآمد', currentLanguage)}</span>
                    </button>
                    <button onClick={() => handleAction(`Archiving survey: ${item.titleEn}`, `सर्वे आर्काइव किया गया: ${item.titleHi}`, `سروے آرکائیو کیا گیا: ${item.titleEn}`)} className="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold flex items-center cursor-pointer">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: POLL MANAGEMENT */}
        {activeAdminTab === 'polls' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Community Opinion Polls Management', 'सामुदायिक जनमत प्रबंधन', 'کمیونٹی رائے عامہ کا انتظام', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Manage quick yes/no or multiple-choice community consensus polls.', 'त्वरित हां/नहीं या बहुविकल्पीय जनमत संग्रह का प्रबंधन करें।', 'فوری ہاں/نہیں یا کثیر الانتخابی رائے عامہ کا انتظام کریں۔', currentLanguage)}</p>
              </div>
              <button onClick={() => handleAction('Launching New Opinion Poll creator...', 'नया जनमत संग्रह निर्माता खुल रहा है...', 'نیا رائے عامہ خالق کھل رہا ہے...')} className="bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-800 transition flex items-center gap-2 shadow cursor-pointer">
                <Plus className="h-4 w-4" />
                <span>{getText('+ New Opinion Poll', '+ नया जनमत संग्रह', '+ نیا رائے عامہ', currentLanguage)}</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { qEn: 'Should pre-marital counseling on Islamic rights be mandatory before Nikah registration?', qHi: 'क्या निकाह पंजीकरण से पहले इस्लामी अधिकारों पर प्री-मैरिटल काउंसलिंग अनिवार्य होनी चाहिए?', votes: 8420, yes: '78%', no: '17%', status: 'Active' },
                { qEn: 'Should Dowry Prohibition violators face social boycott from national Rangrez gatherings?', qHi: 'क्या दहेज निषेध उल्लंघनकर्ताओं को राष्ट्रीय रंगरेज आयोजनों से सामाजिक बहिष्कार का सामना करना चाहिए?', votes: 12540, yes: '89%', no: '8%', status: 'Active' },
                { qEn: 'Do you support creating a centralized Zakat collection fund for UPSC/NEET scholarships?', qHi: 'क्या आप UPSC/NEET स्कॉलरशिप के लिए केंद्रीकृत जकात फंड बनाने का समर्थन करते हैं?', votes: 15300, yes: '94%', no: '4%', status: 'Closed' }
              ].map((poll, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-gray-200 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
                  <div className="space-y-1 max-w-2xl">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${poll.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>{poll.status}</span>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{currentLanguage === 'en' ? poll.qEn : poll.qHi}</h4>
                    <div className="text-xs text-gray-500 font-mono flex gap-4 pt-1">
                      <span>🗳️ {poll.votes.toLocaleString()} Votes</span>
                      <span className="text-emerald-600 font-bold">👍 Yes: {poll.yes}</span>
                      <span className="text-red-600 font-bold">👎 No: {poll.no}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleAction('Closing poll and locking digital ballot...', 'जनमत बंद किया जा रहा है और डिजिटल मतपेटी लॉक हो रही है...', 'رائے عامہ بند کی جا رہی ہے اور ڈیجیٹل بیلٹ لاک ہو رہا ہے...')} className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 cursor-pointer">
                      {getText('Lock / Close Poll', 'जनमत बंद करें', 'رائے عامہ بند کریں', currentLanguage)}
                    </button>
                    <button onClick={() => handleAction('Downloading detailed demographic Excel analysis...', 'विस्तृत जनसांख्यिकीय एक्सेल रिपोर्ट डाउनलोड हो रही है...', 'تفصیلی آبادیاتی ایکسل رپورٹ ڈاؤن لوڈ ہو رہی ہے...')} className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-800 flex items-center gap-1 cursor-pointer">
                      <Download className="h-3.5 w-3.5" />
                      <span>Excel</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: AGENDA & PROPOSAL MODERATION */}
        {activeAdminTab === 'agendas' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Agenda & Citizen Proposal Moderation', 'एजेंडा एवं नागरिक प्रस्ताव समीक्षा', 'ایجنڈا اور شہری تجویز کا جائزہ', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Review proposals submitted by verified members. Advance stage or approve for ballot.', 'सत्यापित सदस्यों द्वारा प्रस्तुत प्रस्तावों की समीक्षा करें। चरण आगे बढ़ाएं या मतदान के लिए स्वीकृत करें।', 'تصدیق شدہ اراکین کی طرف سے پیش کی گئی تجاویز کا جائزہ لیں۔ مرحلہ آگے بڑھائیں یا ووٹنگ کے لیے منظور کریں۔', currentLanguage)}</p>
              </div>
            </div>
            <div className="space-y-4">
              {proposals.map((prop) => (
                <div key={prop.id} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded mr-2">{prop.docketNo}</span>
                      <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2.5 py-0.5 rounded">{getText(prop.categoryEn, prop.categoryHi, prop.categoryUr, currentLanguage)}</span>
                      <h4 className="font-serif font-extrabold text-base sm:text-lg text-gray-900 mt-1.5">{getText(prop.titleEn, prop.titleHi, prop.titleUr, currentLanguage)}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">👤 {getText('Proposer', 'प्रस्तावक', 'تجویز کنندہ', currentLanguage)}: {getText(prop.proposerEn, prop.proposerHi, prop.proposerUr, currentLanguage)} ({getText(prop.districtEn, prop.districtHi, prop.districtUr, currentLanguage)})</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold">
                        Stage: {prop.workflowStage}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-600 font-mono">👍 {prop.upvotes} Support Upvotes • 💬 {prop.commentsCount} Comments</span>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => onUpdateProposalStage?.(prop.id, 'eligible_for_voting')} className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1 cursor-pointer shadow-sm">
                        <Check className="h-3.5 w-3.5" />
                        <span>{getText('Approve for Ballot Voting', 'मतदान के लिए स्वीकृत करें', 'ووٹنگ کے لیے منظور کریں', currentLanguage)}</span>
                      </button>
                      <button onClick={() => onUpdateProposalStage?.(prop.id, 'mahapanchayat_discussion')} className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1 cursor-pointer shadow-sm">
                        <ScrollText className="h-3.5 w-3.5" />
                        <span>{getText('Advance to Summit Discussion', 'सम्मेलन चर्चा में भेजें', 'سمٹ بحث میں بھیجیں', currentLanguage)}</span>
                      </button>
                      <button onClick={() => handleAction('Proposal sent back to proposer for clarification.', 'प्रस्ताव स्पष्टीकरण के लिए प्रस्तावक को वापस भेजा गया।', 'تجویز وضاحت کے لیے تجویز کنندہ کو واپس بھیجی گئی۔')} className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold cursor-pointer">
                        {getText('Reject / Request Revision', 'अस्वीकार / संशोधन मांगें', 'مسترد / نظر ثانی طلب کریں', currentLanguage)}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: RESOLUTION GAZETTE MANAGEMENT */}
        {activeAdminTab === 'resolutions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Official Resolution Gazette & Archive Management', 'आधिकारिक प्रस्ताव गजट एवं अभिलेखागार प्रबंधन', 'سرکاری قرارداد گزٹ اور آرکائیو مینجمنٹ', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Publish passed binding bylaws, attach signed Sharia council PDF seals, and update compliance scores.', 'पारित अनिवार्य नियम प्रकाशित करें, हस्ताक्षरित शरिया परिषद PDF मुहर जोड़ें और अनुपालन स्कोर अपडेट करें।', 'منظور شدہ لازمی قوانین شائع کریں، دستخط شدہ شریعہ کونسل پی ڈی ایف مہریں منسلک کریں اور تعمیل کے اسکور کو اپ ڈیٹ کریں۔', currentLanguage)}</p>
              </div>
              <button onClick={() => handleAction('Opening Draft Resolution Gazette Editor...', 'ड्राफ्ट प्रस्ताव गजट संपादक खुल रहा है...', 'ڈرافٹ قرارداد گزٹ ایڈیٹر کھل رہا ہے...')} className="bg-[#004B23] text-[#FFD54A] px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-800 transition flex items-center gap-2 shadow cursor-pointer">
                <Plus className="h-4 w-4" />
                <span>{getText('+ Draft New Resolution', '+ नया प्रस्ताव ड्राफ्ट करें', '+ نئی قرارداد ڈرافٹ کریں', currentLanguage)}</span>
              </button>
            </div>
            <div className="space-y-4">
              {resolutions.map((res) => (
                <div key={res.id} className="p-5 rounded-2xl border border-gray-200 bg-gray-50/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-900 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded">{res.resolutionNo}</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Year: {res.year}</span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{getText(res.titleEn, res.titleHi, res.titleUr, currentLanguage)}</h4>
                    <p className="text-xs text-gray-500 line-clamp-1">{getText(res.officialTextEn, res.officialTextHi, res.officialTextUr, currentLanguage)}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleAction(`Updating gazette seals for ${res.resolutionNo}`, `गजट मुहर अपडेट हो रही है ${res.resolutionNo}`, `${res.resolutionNo} کے لیے گزٹ مہریں اپ ڈیٹ ہو رہی ہیں`)} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-xs font-bold text-gray-700 flex items-center gap-1 cursor-pointer">
                      <Edit className="h-3.5 w-3.5" />
                      <span>{getText('Edit Gazette Text', 'गजट टेक्स्ट संपादित करें', 'گزٹ ٹیکسٹ میں ترمیم کریں', currentLanguage)}</span>
                    </button>
                    <button onClick={() => handleAction(`Uploading signed Sharia PDF for ${res.resolutionNo}`, `हस्ताक्षरित PDF अपलोड हो रहा है ${res.resolutionNo}`, `${res.resolutionNo} کے لیے دستخط شدہ پی ڈی ایف اپ لوڈ ہو رہا ہے`)} className="px-3 py-1.5 rounded-lg bg-[#004B23] text-white text-xs font-bold flex items-center gap-1 cursor-pointer">
                      <Download className="h-3.5 w-3.5" />
                      <span>{getText('Attach PDF Gazette', 'PDF गजट जोड़ें', 'پی ڈی ایف گزٹ منسلک کریں', currentLanguage)}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COMMITTEE & ROLE ASSIGNMENT */}
        {activeAdminTab === 'committees' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Committee Roles & Tenure Management', 'समिति पद एवं कार्यकाल प्रबंधन', 'کمیٹی کے عہدے اور مدت کا انتظام', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Assign President, Vice President, Secretary, Joint Secretary & Treasurer roles across National, State, District, Tehsil, City & Village levels.', 'राष्ट्रीय, राज्य, जिला, तहसील, शहर और गांव स्तर पर अध्यक्ष, उपाध्यक्ष, सचिव, संयुक्त सचिव और कोषाध्यक्ष के पद आवंटित करें।', 'قومی، ریاستی، ضلعی، تحصیل، شہر اور گاؤں کی سطح پر صدر، نائب صدر، سیکرٹری، جوائنٹ سیکرٹری اور خزانچی کے عہدے تفویض کریں۔', currentLanguage)}</p>
              </div>
              <button onClick={() => handleAction('Opening New Committee Office Bearer Appointment Form...', 'नया समिति पदाधिकारी नियुक्ति फॉर्म खुल रहा है...', 'نیا کمیٹی عہدیدار تقرری فارم کھل رہا ہے...')} className="bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-800 transition flex items-center gap-2 shadow cursor-pointer">
                <Plus className="h-4 w-4" />
                <span>{getText('+ Appoint New Office Bearer', '+ नया पदाधिकारी नियुक्त करें', '+ نیا عہدیدار مقرر کریں', currentLanguage)}</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'National Executive Secretariat', level: 'National', head: 'Haji Mohammed Idris Rangrez', role: 'National President', tenure: '2025 - 2028' },
                { name: 'Rajasthan State Sharia & Social Board', level: 'State', head: 'Advocate Zainab Bibi Rangrez', role: 'State Convenor', tenure: '2024 - 2027' },
                { name: 'Jaipur District E-Governance Cell', level: 'District', head: 'Tariq Anwar Rangrez', role: 'District Secretary', tenure: '2025 - 2028' },
              ].map((comm, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded">{comm.level} Level</span>
                    <span className="text-xs font-mono text-gray-500">{comm.tenure}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{comm.name}</h4>
                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="font-bold text-[#004B23]">👤 {comm.head}</p>
                    <p className="text-gray-500 mt-0.5">📌 Role: {comm.role}</p>
                  </div>
                  <button onClick={() => handleAction(`Editing office bearer tenure for ${comm.name}`, `पदाधिकारी कार्यकाल संपादित करें: ${comm.name}`, `عہدیدار کی مدت میں ترمیم کریں: ${comm.name}`)} className="w-full py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 transition cursor-pointer">
                    {getText('Manage Committee Bearers', 'समिति पदाधिकारी प्रबंधित करें', 'کمیٹی عہدیداروں کا انتظام کریں', currentLanguage)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: AUDIT TRAIL & SECURITY LOGS */}
        {activeAdminTab === 'system' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{getText('Cryptographic Audit Trail & Security Logs', 'क्रिप्टोग्राफिक ऑडिट ट्रेल एवं सुरक्षा लॉग', 'کرپٹوگرافک آڈٹ ٹریل اور سیکیورٹی لاگ', currentLanguage)}</h3>
                <p className="text-xs text-gray-500">{getText('Real-time immutable log of all administrative actions, ballot box hash seals, and E-KYC verification overrides.', 'सभी प्रशासनिक कार्रवाइयों, डिजिटल मतपेटी हैश मुहरों और E-KYC सत्यापन का रीयल-टाइम सुरक्षित लॉग।', 'تمام انتظامی کارروائیوں، ڈیجیٹل بیلٹ باکس ہیش مہروں اور E-KYC تصدیق کا ریئل ٹائم محفوظ لاگ۔', currentLanguage)}</p>
              </div>
              <button onClick={() => handleAction('Exporting complete SHA-256 signed audit log CSV for National Sharia Council verification...', 'राष्ट्रीय शरिया परिषद सत्यापन के लिए संपूर्ण SHA-256 हस्ताक्षरित ऑडिट लॉग CSV निर्यात हो रहा है...', 'قومی شریعہ کونسل کی تصدیق کے لیے مکمل SHA-256 دستخط شدہ آڈٹ لاگ CSV برآمد ہو رہا ہے...')} className="bg-[#004B23] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-800 transition flex items-center gap-2 shadow cursor-pointer">
                <Download className="h-4 w-4" />
                <span>{getText('Export Audit Trail (CSV/PDF)', 'ऑडिट ट्रेल निर्यात करें', 'آڈٹ ٹریل برآمد کریں', currentLanguage)}</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    <div>
                      <p className="font-bold text-gray-900 font-sans">{log.action}</p>
                      <p className="text-gray-500 text-[11px]">👤 {log.user} • ⏱️ {log.time}</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shrink-0">
                    ✓ {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
