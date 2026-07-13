import React, { useState } from 'react';
import { 
  FileSpreadsheet, FileText, BarChart3, PieChart, Download, 
  Send, Bell, MessageSquare, Mail, Smartphone, Globe, CheckCircle2, 
  Sparkles, RefreshCw, Layers, ShieldCheck, Clock, Check
} from 'lucide-react';
import { Language } from '../../types';

interface ReportsAndNotificationsProps {
  currentLanguage: Language;
}

export default function ReportsAndNotifications({ currentLanguage }: ReportsAndNotificationsProps) {
  const [activeTab, setActiveTab] = useState<'reports' | 'notifications'>('reports');

  // Reports state
  const [selectedReportCategory, setSelectedReportCategory] = useState<string>('district');
  const [selectedFormat, setSelectedFormat] = useState<string>('PDF');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [lastGeneratedReport, setLastGeneratedReport] = useState<string | null>(null);

  // Notifications state
  const [notifTrigger, setNotifTrigger] = useState<string>('new_survey');
  const [selectedChannels, setSelectedChannels] = useState<{ [key: string]: boolean }>({
    sms: true,
    whatsapp: true,
    email: true,
    push: true,
    web: true
  });
  const [customMessage, setCustomMessage] = useState<string>('');
  const [isBroadcasting, setIsBroadcasting] = useState<boolean>(false);
  const [broadcastSuccess, setBroadcastSuccess] = useState<boolean>(false);

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const handleGenerateReport = (repName: string, format: string) => {
    setIsGenerating(true);
    setLastGeneratedReport(null);
    setTimeout(() => {
      setIsGenerating(false);
      setLastGeneratedReport(`${repName} (${format})`);
      alert(getText(
        `Successfully generated & downloaded: ${repName} in ${format} format!`,
        `सफलतापूर्वक रिपोर्ट तैयार एवं डाउनलोड हुई: ${repName} (${format})`,
        `کامیابی کے ساتھ رپورٹ تیار اور ڈاؤن لوڈ ہوئی: ${repName} (${format})`
      ));
    }, 1500);
  };

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBroadcasting(true);
    setTimeout(() => {
      setIsBroadcasting(false);
      setBroadcastSuccess(true);
      setTimeout(() => {
        setBroadcastSuccess(false);
        setCustomMessage('');
      }, 3000);
    }, 1800);
  };

  const toggleChannel = (key: string) => {
    setSelectedChannels(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeChannelsCount = Object.values(selectedChannels).filter(Boolean).length;

  return (
    <div className="space-y-8 animate-fadeIn text-[#0B132B]">
      {/* Top Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>{getText('Enterprise Analytics & Broadcast Hub', 'एंटरप्राइज एनालिटिक्स व प्रसारण केंद्र', 'انٹرپرائز اینالیٹکس اور براڈکاسٹ ہب')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
              {getText('Instant Reports & Universal Notifications', 'इंस्टेंट रिपोर्ट एवं सार्वभौमिक नोटिफिकेशन', 'فوری رپورٹس اور یونیورسل اطلاعات')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-light">
              {getText(
                'Generate multi-format executive dossiers (PDF, Excel, CSV, Infographics, Charts) and dispatch instant automated alerts across SMS, WhatsApp, Email, and Push notifications.',
                'मल्टी-फॉर्मेट रिपोर्ट (PDF, Excel, CSV, चार्ट) जनरेट करें और SMS, WhatsApp, ईमेल व पुश नोटिफिकेशन के माध्यम से स्वचालित अलर्ट भेजें।',
                'ملٹی فارمیٹ رپورٹ (PDF, Excel, CSV, چارٹ) تیار کریں اور SMS, WhatsApp, ای میل اور پش اطلاعات کے ذریعے خودکار الرٹس بھیجیں۔'
              )}
            </p>
          </div>

          <div className="flex gap-2 shrink-0 self-start sm:self-center">
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition ${
                activeTab === 'reports'
                  ? 'bg-emerald-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <FileSpreadsheet className="h-4 w-4" />
              <span>{getText('📊 Instant Reports Engine', '📊 रिपोर्ट इंजन', '📊 رپورٹس انجن')}</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition ${
                activeTab === 'notifications'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Bell className="h-4 w-4" />
              <span>{getText('🔔 Notifications & Alerts', '🔔 नोटिफिकेशन केंद्र', '🔔 اطلاعات مرکز')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: INSTANT REPORTS ENGINE */}
      {activeTab === 'reports' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-400 px-2 uppercase font-mono">Filter Category:</span>
            {[
              { id: 'district', label: '📍 District Reports' },
              { id: 'state', label: '🏛️ State Reports' },
              { id: 'committee', label: '👥 Committee Reports' },
              { id: 'participation', label: '📈 Participation Reports' },
              { id: 'infographics', label: '🎨 Infographics & Charts' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedReportCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedReportCategory === cat.id
                    ? 'bg-[#F4C430] text-[#0B132B] shadow'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Format Selector Banner */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-gray-400">Default Export Format:</span>
              <div className="flex gap-1.5">
                {['PDF', 'Excel (.xlsx)', 'CSV', 'Infographic PNG', 'JSON Data'].map(fmt => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition ${
                      selectedFormat === fmt ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {lastGeneratedReport && (
              <span className="text-emerald-600 flex items-center gap-1 font-bold animate-fadeIn">
                <Check className="h-4 w-4" /> Last Exported: {lastGeneratedReport}
              </span>
            )}
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'rep-1',
                cat: 'district',
                titleEn: 'Jaipur District Comprehensive Household Census & Survey Ledger',
                titleHi: 'जयपुर जिला संपूर्ण पारिवारिक जनगणना एवं सर्वे रिकॉर्ड',
                titleUr: 'جے پور ضلع جامع خاندانی مردم شماری اور سروے ریکارڈ',
                desc: 'Complete household counts, ward-wise response rates, and Aadhaar verification status across 12 tehsils.',
                records: '14,850 households',
                updated: 'Live Today'
              },
              {
                id: 'rep-2',
                cat: 'state',
                titleEn: 'Rajasthan Statewide Sharia Matrimonial Compliance Audit',
                titleHi: 'राजस्थान राज्य शरिया वैवाहिक अनुपालन ऑडिट रिपोर्ट',
                titleUr: 'راجستھان ریاستی شریعہ ازدواجی تعمیل آڈٹ رپورٹ',
                desc: 'Executive summary of dowry abolition adherence, simple Nikah statistics, and savings analysis across 33 districts.',
                records: '4,200 weddings tracked',
                updated: 'Yesterday'
              },
              {
                id: 'rep-3',
                cat: 'committee',
                titleEn: 'National E-Governance & Educational Scholarship Committee Dossier',
                titleHi: 'राष्ट्रीय ई-गवर्नेंस एवं छात्रवृत्ति समिति रिपोर्ट',
                titleUr: 'قومی ای گورننس اور اسکالرشپ کمیٹی ڈوزیر',
                desc: 'Performance breakdown of 28 state committees, volunteer mobilization rates, and Zakat scholarship disbursement logs.',
                records: '28 State Committees',
                updated: '01 July 2026'
              },
              {
                id: 'rep-4',
                cat: 'participation',
                titleEn: 'Youth (18-35) & Women Voter Participation Demographics',
                titleHi: 'युवा (18-35) एवं महिला मतदाता भागीदारी जनसांख्यिकी',
                titleUr: 'نوجوانوں (18-35) اور خواتین ووٹروں کی شرکت کی آبادیاتی تفصیلات',
                desc: 'Granular breakdown of youth engagement, gender parity indices, and digital voting adoption across urban vs rural centers.',
                records: '42,110 active voters',
                updated: 'Live Today'
              },
              {
                id: 'rep-5',
                cat: 'infographics',
                titleEn: 'National Dowry Cap & Super-30 Academy Visual Charts Pack',
                titleHi: 'राष्ट्रीय दहेज सीमा एवं सुपर-30 अकादमी विजुअल चार्ट पैक',
                titleUr: 'قومی جہیز کی حد اور سپر-30 اکیڈمی بصری چارٹ پیک',
                desc: 'High-resolution pie charts, bar graphs, and geographic heatmap infographics ready for WhatsApp & social media distribution.',
                records: '15 Infographic Slides',
                updated: '30 June 2026'
              },
              {
                id: 'rep-6',
                cat: 'district',
                titleEn: 'Lucknow & UP East Artisan Dyeing Economic Rehabilitation Report',
                titleHi: 'लखनऊ एवं यूपी पूर्व कारीगर रंगाई आर्थिक पुनर्वास रिपोर्ट',
                titleUr: 'لکھنؤ اور یوپی ایسٹ کاریگر رنگائی اقتصادی بحالی رپورٹ',
                desc: 'Tehsil-level analysis of traditional dye workers, ONDC portal onboarding readiness, and financial inclusion scorecards.',
                records: '5,400 artisan families',
                updated: '28 June 2026'
              }
            ]
            .filter(r => selectedReportCategory === 'infographics' ? r.cat === 'infographics' : true)
            .map((rep) => (
              <div
                key={rep.id}
                className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-emerald-500 transition duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded font-bold uppercase border border-emerald-100">
                      {rep.cat} report
                    </span>
                    <span className="text-gray-400">{rep.updated}</span>
                  </div>

                  <h4 className="font-bold text-base text-[#0B132B] group-hover:text-emerald-700 transition">
                    {getText(rep.titleEn, rep.titleHi, rep.titleUr)}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {rep.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>Records: <strong className="text-[#0B132B]">{rep.records}</strong></span>
                    <span>Format: <strong className="text-emerald-600">{selectedFormat}</strong></span>
                  </div>

                  <button
                    onClick={() => handleGenerateReport(rep.titleEn, selectedFormat)}
                    disabled={isGenerating}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Generating Dossier...</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        <span>Generate Instantly ({selectedFormat})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: UNIVERSAL NOTIFICATIONS & ALERT CENTER */}
      {activeTab === 'notifications' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn text-[#0B132B]">
          {/* Left 2 Cols: Broadcast Configuration Form */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-mono text-emerald-700 uppercase font-bold tracking-wider block">
                🔔 MULTI-CHANNEL COMMUNITY DISPATCH
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] mt-1">
                {getText('Automated Triggers & Broadcast Management', 'स्वचालित ट्रिगर एवं प्रसारण प्रबंधन', 'خودکار ٹریگرز اور براڈکاسٹ انتظام')}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Select target event triggers and broadcast channels to instantly alert community members across India.
              </p>
            </div>

            {/* Channel Selection Checkboxes */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-600 uppercase block font-mono">
                {getText('1. Select Active Broadcast Channels (Concurrent Multi-Dispatch):', '1. सक्रिय प्रसारण चैनल चुनें:', '1. فعال براڈکاسٹ چینلز منتخب کریں:')}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  { id: 'sms', icon: <Smartphone className="h-4 w-4 text-emerald-600" />, label: 'SMS Gateway' },
                  { id: 'whatsapp', icon: <MessageSquare className="h-4 w-4 text-green-600" />, label: 'WhatsApp API' },
                  { id: 'email', icon: <Mail className="h-4 w-4 text-blue-600" />, label: 'Official Email' },
                  { id: 'push', icon: <Bell className="h-4 w-4 text-amber-600" />, label: 'Mobile Push' },
                  { id: 'web', icon: <Globe className="h-4 w-4 text-purple-600" />, label: 'Website Alert' }
                ].map(ch => (
                  <div
                    key={ch.id}
                    onClick={() => toggleChannel(ch.id)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-2 transition select-none ${
                      selectedChannels[ch.id]
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedChannels[ch.id]}
                      onChange={() => {}}
                      className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-0"
                    />
                    {ch.icon}
                    <span className="text-xs font-bold">{ch.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automated Trigger Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-600 uppercase block font-mono">
                {getText('2. Select Event Trigger Type:', '2. घटना ट्रिगर प्रकार चुनें:', '2. ایونٹ ٹریگر کی قسم منتخب کریں:')}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'new_survey', title: '🚀 New Survey Starts', desc: 'Alerts members when a ballot opens for voting' },
                  { id: 'closing_soon', title: '⏳ Survey Closing Soon', desc: '48-hour final reminder before ballot deadline' },
                  { id: 'results_published', title: '📊 Results Published', desc: 'Sends PDF summary of certified referendum results' },
                  { id: 'proposal_approved', title: '✅ Proposal Approved', desc: 'Notifies when Maujoo reform enters official ballot' },
                  { id: 'meeting_scheduled', title: '🏛️ Mahapanchayat Meeting', desc: 'Convenes physical/virtual summit delegates' }
                ].map(trg => (
                  <div
                    key={trg.id}
                    onClick={() => setNotifTrigger(trg.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition ${
                      notifTrigger === trg.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-sm'
                        : 'bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">{trg.title}</span>
                      {notifTrigger === trg.id && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">{trg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Announcement Message */}
            <form onSubmit={handleBroadcast} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase block font-mono">
                  {getText('3. Custom Announcement Note (Optional Override):', '3. कस्टम सूचना संदेश (वैकल्पिक):', '3. کسٹم اطلاعی پیغام (اختیاری):')}
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g. All India Rangrez Assembly reminds all members in Rajasthan & UP to cast their vote on Resolution #4 before Friday prayer..."
                  className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              {broadcastSuccess ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 p-4 rounded-2xl text-center space-y-1 font-mono text-xs text-emerald-700">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm text-emerald-900">Broadcast Dispatched Successfully!</p>
                  <p>Delivered across {activeChannelsCount} channels to 42,110 verified members nationwide.</p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isBroadcasting || activeChannelsCount === 0}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  {isBroadcasting ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>Dispatching Multi-Channel Alert...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Broadcast Alert via {activeChannelsCount} Channels Now →</span>
                    </>
                  )}
                </button>
              )}
            </form>
          </div>

          {/* Right Col: Live Trigger Rules & Delivery Stats */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2 border-b border-gray-50 pb-3">
              <Layers className="h-4 w-4 text-emerald-600" />
              <span>{getText('Automated Trigger Engine', 'स्वचालित ट्रिगर नियम', 'خودکار ٹریگر کے اصول')}</span>
            </h4>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2 shadow-inner">
                <span className="text-emerald-600 font-bold block">🟢 SMS Gateway Status</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Connected to DLT (Telecom Regulatory Authority of India) certified templates. Deliverability: 99.8%.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2 shadow-inner">
                <span className="text-green-600 font-bold block">🟢 WhatsApp Business API</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Official Rangrez verified green tick sender. Supports PDF report attachments and interactive vote buttons.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2 shadow-inner">
                <span className="text-blue-600 font-bold block">🟢 Push Notifications & Email</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Instant mobile vibration alerts via Firebase Cloud Messaging (FCM) and SMTP SSL mail servers.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center font-mono text-[11px] text-emerald-800 shadow-inner">
              <ShieldCheck className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
              <span>All notifications strictly obey DND (Do Not Disturb) regulations and DPDP Act 2023 consent preferences.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
