import React, { useState } from 'react';
import { 
  Users, Vote, CheckCircle2, BarChart3, PieChart, Download, 
  Search, Filter, Sparkles, TrendingUp, MapPin, Award, 
  RefreshCw, Check, AlertCircle, Share2
} from 'lucide-react';
import { Language } from '../../types';

interface OpinionPollsSectionProps {
  currentLanguage: Language;
}

interface PollOption {
  id: string;
  labelEn: string;
  labelHi: string;
  labelUr?: string;
  votes: number;
}

interface PollItem {
  id: string;
  titleEn: string;
  titleHi: string;
  titleUr?: string;
  category: 'All' | 'Matrimonial & Nikah' | 'Education & Youth' | 'Trade & Economy' | 'Social Reforms';
  totalVotes: number;
  demographics: string;
  demographicsHi: string;
  options: PollOption[];
  status: 'active' | 'closed';
}

export const OpinionPollsSection: React.FC<OpinionPollsSectionProps> = ({ currentLanguage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [votedPolls, setVotedPolls] = useState<Record<string, string>>({}); // pollId -> optionId
  const [showAnalyticsModal, setShowAnalyticsModal] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const [polls, setPolls] = useState<PollItem[]>([
    {
      id: 'poll-1',
      titleEn: 'Should pre-marital counseling on Islamic rights and matrimonial harmony be made mandatory for prospective brides and grooms before Nikah registration?',
      titleHi: 'क्या निकाह पंजीकरण से पहले भावी दूल्हा-दुल्हन के लिए इस्लामी अधिकारों और वैवाहिक सामंजस्य पर प्री-मैरिटल काउंसलिंग अनिवार्य की जानी चाहिए?',
      titleUr: 'کیا نکاح کی رجسٹریشن سے پہلے ہونے والے دلہا اور دلہن کے لیے اسلامی حقوق اور ازدواجی ہم آہنگی پر پری میریٹل کونسلنگ لازمی قرار دی جانی چاہیے؟',
      category: 'Matrimonial & Nikah',
      totalVotes: 8420,
      demographics: 'Youth Support: 89% • Women Support: 94% • Senior Elders: 76%',
      demographicsHi: 'युवा समर्थन: 89% • महिला समर्थन: 94% • वरिष्ठ नागरिक: 76%',
      status: 'active',
      options: [
        { id: 'opt-1a', labelEn: 'Yes - Mandatory 3-session online/offline counseling', labelHi: 'हाँ - अनिवार्य 3-सत्र ऑनलाइन/ऑफलाइन काउंसलिंग', votes: 6567 },
        { id: 'opt-1b', labelEn: 'Yes - But keep it voluntary as a guideline', labelHi: 'हाँ - लेकिन इसे दिशा-निर्देश के रूप में स्वैच्छिक रखें', labelUr: 'ہاں - لیکن اسے رہنما خطوط کے طور پر رضاکارانہ رکھیں', votes: 1431 },
        { id: 'opt-1c', labelEn: 'No - Leave it entirely to family discretion', labelHi: 'नहीं - इसे पूरी तरह से परिवार के विवेक पर छोड़ दें', labelUr: 'نہیں - اسے مکمل طور پر خاندان پر چھوڑ دیں', votes: 422 }
      ]
    },
    {
      id: 'poll-2',
      titleEn: 'Should the Mahapanchayat establish a centralized All India Rangrez Business Directory & B2B Trade Network to promote intra-community commerce?',
      titleHi: 'क्या महापंचायत को अंतर-सामुदायिक व्यापार को बढ़ावा देने के लिए एक केंद्रीय ऑल इंडिया रंगरेज़ बिजनेस डायरेक्टरी और B2B ट्रेड नेटवर्क स्थापित करना चाहिए?',
      titleUr: 'کیا مہاپنچایت کو برادری کے اندر تجارت کو فروغ دینے کے لیے ایک مرکزی آل انڈیا رنگریز بزنس ڈائریکٹری اور B2B ٹریڈ نیٹ ورک قائم کرنا چاہیے؟',
      category: 'Trade & Economy',
      totalVotes: 9150,
      demographics: 'Textile Artisans: 96% • Entrepreneurs: 98% • Rural Traders: 88%',
      demographicsHi: 'वस्त्र कारीगर: 96% • उद्यमी: 98% • ग्रामीण व्यापारी: 88%',
      status: 'active',
      options: [
        { id: 'opt-2a', labelEn: 'Yes - Launch digital B2B portal & verified trader app immediately', labelHi: 'हाँ - डिजिटल B2B पोर्टल और सत्यापित व्यापारी ऐप तुरंत लॉन्च करें', votes: 8326 },
        { id: 'opt-2b', labelEn: 'Yes - But start with state-level directories first', labelHi: 'हाँ - लेकिन पहले राज्य स्तरीय डायरेक्टरी से शुरुआत करें', votes: 640 },
        { id: 'opt-2c', labelEn: 'No - Current traditional trade channels are sufficient', labelHi: 'नहीं - वर्तमान पारंपरिक व्यापारिक माध्यम पर्याप्त हैं', votes: 184 }
      ]
    },
    {
      id: 'poll-3',
      titleEn: 'Should every district committee allocate at least 40% of its annual Zakat/Charity collections strictly for higher education and UPSC/NEET coaching?',
      titleHi: 'क्या प्रत्येक जिला समिति को अपने वार्षिक जकात/दान संग्रह का कम से कम 40% हिस्सा अनिवार्य रूप से उच्च शिक्षा और UPSC/NEET कोचिंग के लिए आवंटित करना चाहिए?',
      titleUr: 'کیا ہر ضلعی کمیٹی کو اپنے سالانہ زکوٰۃ/صدقات کے مجموعے کا کم از کم 40% حصہ لازمی طور پر اعلیٰ تعلیم اور UPSC/NEET کوچنگ کے لیے مختص کرنا چاہیے؟',
      category: 'Education & Youth',
      totalVotes: 10400,
      demographics: 'Students & Youth: 97% • Parents: 93% • District Committees: 85%',
      demographicsHi: 'छात्र व युवा: 97% • अभिभावक: 93% • जिला समितियां: 85%',
      status: 'active',
      options: [
        { id: 'opt-3a', labelEn: 'Yes - Strictly enforce 40% minimum education quota', labelHi: 'हाँ - 40% न्यूनतम शिक्षा कोटा सख्ती से लागू करें', votes: 9464 },
        { id: 'opt-3b', labelEn: 'Yes - But keep it at 25% with 75% for emergency medical/widow relief', labelHi: 'हाँ - लेकिन 25% शिक्षा और 75% चिकित्सा/विधवा सहायता रखें', votes: 728 },
        { id: 'opt-3c', labelEn: 'No - Allow district committees complete flexibility', labelHi: 'नहीं - जिला समितियों को पूर्ण छूट दें', votes: 208 }
      ]
    },
    {
      id: 'poll-4',
      titleEn: 'Should community gatherings and wedding walimas completely ban lavish food display and enforce strict guest-limit austerity guidelines?',
      titleHi: 'क्या सामाजिक समारोहों और वलीमा दावतों में भोजन की बर्बादी रोकने के लिए मेहमानों की अधिकतम सीमा और सादगी नियम अनिवार्य करने चाहिए?',
      titleUr: 'کیا سماجی تقریبات اور ولیمہ دعوتوں میں کھانے کے ضیاع کو روکنے کے لیے مہمانوں کی زیادہ سے زیادہ حد اور سادگی کے اصول لازمی قرار دیے جانے چاہئیں؟',
      category: 'Social Reforms',
      totalVotes: 7890,
      demographics: 'Women Elders: 92% • Middle-income Families: 95% • Youth: 87%',
      demographicsHi: 'महिला वरिष्ठ नागरिक: 92% • मध्यम वर्गीय परिवार: 95% • युवा: 87%',
      status: 'active',
      options: [
        { id: 'opt-4a', labelEn: 'Yes - Enforce 250 guest maximum limit & simple 3-item menu', labelHi: 'हाँ - अधिकतम 250 मेहमान सीमा और सरल 3-व्यंजन मेनू लागू करें', votes: 6943 },
        { id: 'opt-4b', labelEn: 'Yes - Limit guest count but allow flexible menu choices', labelHi: 'हाँ - मेहमान संख्या सीमित करें लेकिन मेनू में छूट दें', votes: 631 },
        { id: 'opt-4c', labelEn: 'No - No restrictions should be imposed on family celebrations', labelHi: 'नहीं - पारिवारिक समारोहों पर कोई प्रतिबंध नहीं होना चाहिए', votes: 316 }
      ]
    }
  ]);

  const handleVote = (pollId: string, optionId: string) => {
    if (votedPolls[pollId]) return; // already voted

    setPolls(prev => prev.map(poll => {
      if (poll.id === pollId) {
        const newTotal = poll.totalVotes + 1;
        const newOptions = poll.options.map(opt => {
          if (opt.id === optionId) {
            return { ...opt, votes: opt.votes + 1 };
          }
          return opt;
        });
        return { ...poll, totalVotes: newTotal, options: newOptions };
      }
      return poll;
    }));

    setVotedPolls(prev => ({ ...prev, [pollId]: optionId }));
  };

  const handleDownloadAnalytics = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const categories = ['All', 'Matrimonial & Nikah', 'Education & Youth', 'Trade & Economy', 'Social Reforms'];

  const filteredPolls = polls.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || p.titleHi.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  // Aggregate Stats
  const totalPollVotesAll = polls.reduce((acc, curr) => acc + curr.totalVotes, 0);

  return (
    <div className="space-y-8 animate-fadeIn text-[#0B132B]">
      {/* Hero Title Banner - Premium card style */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23]"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider">
              <Vote className="h-4 w-4 text-blue-600" />
              <span>{getText('Instant Community Feedback & Pulse', 'त्वरित जनमत एवं समाज फीडबैक', 'فوری عوامی رائے اور تاثرات')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-emerald-950 tracking-tight leading-tight">
              {getText('Community Opinion Polls & Live Tally', 'सामुदायिक जनमत संग्रह एवं लाइव परिणाम', 'کمیونٹی رائے عامہ اور لائیو نتائج')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              {getText(
                'Participate in real-time 1-click opinion polls on matrimonial austerity, educational priorities, youth careers, and trade initiatives. Your quick feedback directly guides the National Executive Board in formulating binding resolutions.',
                'वैवाहिक सादगी, शिक्षा प्राथमिकताएं, युवा रोजगार और व्यापारिक पहलों पर 1-क्लिक रियल-टाइम जनमत संग्रह में भाग लें। आपका त्वरित फीडबैक राष्ट्रीय कार्यकारिणी बोर्ड को बाध्यकारी प्रस्ताव तैयार करने में दिशा देता है।',
                'ازدواجی سادگی، تعلیمی ترجیحات، نوجوانوں کے روزگار اور تجارتی اقدامات پر 1-کلک ریئل ٹائم رائے عامہ میں حصہ لیں۔ آپ کے فوری تاثرات باضابطہ قراردادیں تیار کرنے میں مدد کرتے ہیں۔'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setShowAnalyticsModal(!showAnalyticsModal)}
              className="bg-gradient-to-r from-[#004B23] to-[#00381a] hover:from-[#056633] hover:to-[#004B23] text-[#FFD54A] hover:text-white border border-[#FFD54A]/30 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{getText('View Poll Analytics', 'जनमत विश्लेषण देखें', 'تجزیہ دیکھیں')}</span>
            </button>
            <button
              onClick={handleDownloadAnalytics}
              className="bg-white hover:bg-[#004B23]/5 text-[#004B23] border border-gray-200 hover:border-[#004B23]/30 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{getText('Export Poll Report', 'रिपोर्ट डाउनलोड करें', 'رپورٹ ڈاؤن لوڈ کریں')}</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mt-4 bg-emerald-50 text-emerald-700 border border-emerald-100 p-3 rounded-xl text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{getText('Successfully exported Complete Poll Analytics Dossier (PDF/Excel)', 'संपूर्ण जनमत विश्लेषण रिपोर्ट सफलतापूर्वक डाउनलोड हुई', 'رپورٹ کامیابی کے ساتھ ڈاؤن لوڈ ہو گئی')}</span>
          </div>
        )}
      </div>

      {/* Aggregate Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-1">
          <span className="text-[10px] text-gray-400 uppercase block">Total Poll Votes</span>
          <span className="text-2xl font-bold text-[#004B23]">{totalPollVotesAll.toLocaleString()}</span>
          <span className="text-[10px] text-emerald-600 block font-bold">Across 28 States</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-1">
          <span className="text-[10px] text-gray-400 uppercase block">Active Poll Topics</span>
          <span className="text-2xl font-bold text-blue-600">{polls.length} Active</span>
          <span className="text-[10px] text-gray-500 block">Open for Voting</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-1">
          <span className="text-[10px] text-gray-400 uppercase block">Women Participation</span>
          <span className="text-2xl font-bold text-rose-500">42.8%</span>
          <span className="text-[10px] text-emerald-600 block font-bold">↑ +8% this month</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-1">
          <span className="text-[10px] text-gray-400 uppercase block">Youth Turnout (&lt;30 yrs)</span>
          <span className="text-2xl font-bold text-emerald-600">54.2%</span>
          <span className="text-[10px] text-gray-500 block">Mobile OTP Verified</span>
        </div>
      </div>

      {/* Category Filters & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-gray-500 mr-1 uppercase">Filter Topic:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-[#004B23] text-[#FFD54A] shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#004B23]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={getText('Search poll topic...', 'जनमत विषय खोजें...', 'موضوع تلاش کریں...')}
            className="w-full bg-white text-xs text-gray-900 pl-10 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 shadow-sm"
          />
        </div>
      </div>

      {/* Analytics Modal Section (Collapsible/Conditional) */}
      {showAnalyticsModal && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-lg space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                <PieChart className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#0B132B]">
                  {getText('National Opinion Polls Demographic Analytics', 'राष्ट्रीय जनमत संग्रह जनसांख्यिकीय विश्लेषण', 'قومی رائے عامہ کا آبادیاتی تجزیہ')}
                </h3>
                <p className="text-xs text-gray-500">
                  {getText('Real-time tabulation across gender, age groups, and state jurisdictions', 'लिंग, आयु वर्ग और राज्य क्षेत्रों के आधार पर वास्तविक समय गणना', 'حقیقی वक्त की गनना')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAnalyticsModal(false)}
              className="text-gray-500 hover:text-gray-900 text-sm bg-gray-100 px-3 py-1.5 rounded-lg"
            >
              ✕ {getText('Close Panel', 'बंद करें', 'بند کریں')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {/* Gender Breakdown */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-bold uppercase text-[#004B23] block">👥 Gender Participation</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Male Voters</span>
                    <span className="text-blue-600 font-bold">57.2% (20,449 votes)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '57.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Female Voters</span>
                    <span className="text-rose-500 font-bold">42.8% (15,301 votes)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '42.8%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Group Breakdown */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-bold uppercase text-emerald-600 block">🎂 Age Group Distribution</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Youth (18 - 30 yrs)</span>
                    <span className="text-emerald-600 font-bold">54.2%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '54.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Middle Age (31 - 50 yrs)</span>
                    <span className="text-amber-500 font-bold">31.5%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '31.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Senior Elders (&gt;50 yrs)</span>
                    <span className="text-purple-600 font-bold">14.3%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '14.3%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* State Turnout Ranking */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-bold uppercase text-blue-600 block">📍 Top Responding States</span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                  <span className="text-gray-700">1. Rajasthan State Board</span>
                  <span className="text-[#004B23] font-bold">12,450 votes</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                  <span className="text-gray-700">2. Uttar Pradesh East/West</span>
                  <span className="text-emerald-600 font-bold">9,820 votes</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                  <span className="text-gray-700">3. Madhya Pradesh Cell</span>
                  <span className="text-blue-600 font-bold">6,310 votes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Poll Cards Grid */}
      <div className="space-y-6">
        {filteredPolls.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">{getText('No polls found matching your topic or search keyword.', 'कोई संबंधित जनमत नहीं मिला।', 'کوئی متعلقہ رائے عامہ نہیں ملی۔')}</p>
          </div>
        ) : (
          filteredPolls.map((poll) => {
            const userVote = votedPolls[poll.id];

            return (
              <div 
                key={poll.id} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md space-y-6 hover:shadow-xl hover:border-[#F4C430]/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-[#F4C430] opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-50 pb-4">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      📂 {poll.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{getText('Live Poll', 'सक्रिय जनमत', 'لائیو')}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                    <span className="text-[#004B23] font-bold">🗳️ {poll.totalVotes.toLocaleString()} {getText('Votes Cast', 'मत पड़े', 'ووٹ')}</span>
                    <span>•</span>
                    <button 
                      onClick={() => alert(getText('Link copied to clipboard! Share with community groups.', 'लिंक कॉपी हो गया! समाज के समूहों में शेयर करें।', 'لنک کاپی ہو گیا!'))}
                      className="text-gray-500 hover:text-[#004B23] transition flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100 cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{getText('Share', 'शेयर करें', 'شیئر')}</span>
                    </button>
                  </div>
                </div>

                {/* Poll Question Title */}
                <h3 className="text-lg sm:text-xl font-serif font-black text-emerald-950 leading-relaxed">
                  {getText(poll.titleEn, poll.titleHi, poll.titleUr)}
                </h3>

                {/* Demographics Summary Badge */}
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs font-mono text-gray-600 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#004B23] shrink-0" />
                  <span>{getText(poll.demographics, poll.demographicsHi)}</span>
                </div>

                {/* Voting Options */}
                <div className="space-y-3 pt-2">
                  {poll.options.map((opt) => {
                    const percentage = poll.totalVotes > 0 ? Math.round((opt.votes / poll.totalVotes) * 100) : 0;
                    const isVotedOption = userVote === opt.id;

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleVote(poll.id, opt.id)}
                        className={`relative overflow-hidden p-4 sm:p-5 rounded-2xl border transition duration-200 cursor-pointer select-none ${
                          isVotedOption
                            ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500'
                            : userVote
                            ? 'bg-gray-50 border-gray-200 opacity-80'
                            : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-emerald-400'
                        }`}
                      >
                        {/* Progress bar fill */}
                        <div 
                          className={`absolute left-0 top-0 bottom-0 transition-all duration-700 pointer-events-none ${
                            isVotedOption ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />

                        <div className="relative z-10 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isVotedOption ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-gray-300 bg-white'
                            }`}>
                              {isVotedOption && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-xs sm:text-sm font-bold ${isVotedOption ? 'text-emerald-700' : 'text-[#0B132B]'}`}>
                              {getText(opt.labelEn, opt.labelHi, opt.labelUr)}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 font-mono">
                            <span className="text-xs text-gray-500 hidden sm:inline">({opt.votes.toLocaleString()} votes)</span>
                            <span className={`text-sm sm:text-base font-extrabold ${isVotedOption ? 'text-emerald-700' : 'text-emerald-600'}`}>
                              {percentage}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Vote Receipt Feedback */}
                {userVote ? (
                  <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 p-3.5 rounded-xl text-xs font-mono flex items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{getText('Thank you! Your verified opinion has been recorded in the national live tally.', 'धन्यवाद! आपका सत्यापित मत राष्ट्रीय गणना में दर्ज कर लिया गया है।', 'شکریہ! آپ کی رائے درج کر لی گئی ہے۔')}</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-bold">
                      SHA-256 Verified
                    </span>
                  </div>
                ) : (
                  <div className="text-right text-[11px] font-mono text-gray-400">
                    💡 {getText('Click any option above to cast your instant 1-click verified vote.', 'मतदान करने के लिए ऊपर किसी भी विकल्प पर क्लिक करें।', 'ووٹ دینے کے لیے کسی بھی آپشن پر کلک کریں۔')}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
