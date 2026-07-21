import { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  Scale, 
  Users, 
  CheckCircle2, 
  Printer, 
  Download, 
  Search, 
  AlertCircle, 
  HeartHandshake, 
  ChevronDown,
  Share2,
  Sparkles,
  X,
  ArrowRight,
  ArrowLeft,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { CONSTITUTION_DATA, ConstitutionVolume, Part, Chapter, Clause } from '../data/constitutionData';

interface TrustConstitutionProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

interface ConstitutionArticle {
  id: string;
  articleNo: string;
  category: 'governance' | 'finance' | 'membership' | 'objectives' | 'disputes' | 'preamble';
  title: { en: string; hi: string; ur: string };
  summary: { en: string; hi: string; ur: string };
  clauses: {
    title: { en: string; hi: string; ur: string };
    text: { en: string; hi: string; ur: string };
  }[];
}

const SUMMARY_ARTICLES: ConstitutionArticle[] = [
  {
    id: 'art-1',
    articleNo: 'Article 1 / अनुच्छेद 1',
    category: 'preamble',
    title: {
      en: 'Preamble & Official Name of the Society Trust',
      hi: 'प्रस्तावना एवं संस्था का आधिकारिक पंजीकृत नाम',
      ur: 'تمہید اور ادارے کا سرکاری اور قانونی نام'
    },
    summary: {
      en: 'Defines the legal entity, public branding, and constitutional fidelity to the Constitution of India.',
      hi: 'कानूनी इकाई, सार्वजनिक पहचान और भारत के संविधान के प्रति निष्ठा को परिभाषित करता है।',
      ur: 'ادارے کی قانونی حیثیت، عوامی شناخت اور آئینِ ہند کے ساتھ وفاداری کی وضاحت کرتا ہے۔'
    },
    clauses: [
      {
        title: {
          en: '1.1 Official Registered Name',
          hi: '1.1 आधिकारिक पंजीकृत नाम',
          ur: '1.1 سرکاری رجسٹرڈ نام'
        },
        text: {
          en: 'The official registered name of the foundation under the Societies Registration Act / Indian Trusts Act is "Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation". This legal name shall be strictly used in all government correspondences, banking, tax exemptions (80G/12A), and judicial documentation.',
          hi: 'सोसाइटी पंजीकरण अधिनियम / भारतीय ट्रस्ट अधिनियम के तहत संस्था का आधिकारिक पंजीकृत नाम "मुस्लिम रंगरेज नीलगर समाज पब्लिक वेलफेयर एंड एजुकेशनल फाउंडेशन" है। इस कानूनी नाम का उपयोग सभी सरकारी पत्राचार, बैंकिंग, कर छूट (80G/12A) और न्यायिक दस्तावेजों में अनिवार्य रूप से किया जाएगा।',
          ur: 'سوسائٹیز رجسٹریشن ایکٹ / انڈین ٹرسٹ ایکٹ کے تحت ادارے کا سرکاری رجسٹرڈ نام "مسلم رنگریز نیلگر سماج پبلک ویلفیئر اینڈ ایجوکیشنل فاؤنڈیشن" ہے۔ یہ قانونی نام تمام سرکاری خط و کتابت، بینکنگ، ٹیکس استثنیٰ (80G/12A) اور عدالتی دستاویزات میں لازمی استعمال ہوگا۔'
        }
      },
      {
        title: {
          en: '1.2 Public Brand Identity & Community Title',
          hi: '1.2 सार्वजनिक पहचान एवं सामुदायिक नाम',
          ur: '1.2 عوامی شناخت और برادری का नाम'
        },
        text: {
          en: 'For national unity, general public branding, web portals, and social cohesion across India, the organization shall operate under the unified brand name "All India Rangrez Samaj Trust / Mahasabha" (Rangrez Community Bharat).',
          hi: 'राष्ट्रीय एकता, सामान्य जनसंपर्क, वेबसाइट पोर्टल और पूरे भारत में सामाजिक एकजुटता के लिए संगठन एकीकृत नाम "अखिल भारतीय रंगरेज समाज ट्रस्ट / महासभा" (रंगरेज कम्युनिटी भारत) के तहत कार्य करेगा।',
          ur: 'قومی اتحاد، عام عوامی رابطے، ویب پورٹلز اور پورے ہندوستان میں سماجی یکجہتی کے لیے، تنظیم متفقہ نام "آل انڈیا رنگریز سماج ٹرسٹ / مہاپنچایت" (رنگریز کمیونٹی بھارت) کے تحت کام کرے گی۔'
        }
      }
    ]
  },
  {
    id: 'art-2',
    articleNo: 'Article 2 / अनुच्छेद 2',
    category: 'preamble',
    title: {
      en: 'Registered Office & National Jurisdiction',
      hi: 'पंजीकृत कार्यालय एवं राष्ट्रीय कार्यक्षेत्र',
      ur: 'رجسٹرڈ دفتر اور قومی دائرہ کار'
    },
    summary: {
      en: 'Establishes the headquarters and nationwide operational reach across states and union territories.',
      hi: 'मुख्यालय और राज्यों व केंद्र शासित प्रदेशों में राष्ट्रव्यापी परिचालन पहुंच स्थापित करता है।',
      ur: 'مرکزی دفتر اور ریاستوں و مرکز کے زیر انتظام علاقوں میں ملک گیر دائرہ کار قائم کرتا ہے۔'
    },
    clauses: [
      {
        title: {
          en: '2.1 National Headquarters & State Chapters',
          hi: '2.1 राष्ट्रीय मुख्यालय एवं राज्य इकाइयां',
          ur: '2.1 مرکزی دفتر اور ریاستی شاخیں'
        },
        text: {
          en: 'The central administrative office of the Trust shall be maintained at New Delhi / Rajasthan, with empowered regional executive committees established across Rajasthan, Gujarat, Madhya Pradesh, Uttar Pradesh, Maharashtra, Delhi, Bihar, Karnataka, Telangana, and other states where the Rangrez (Neelgar/Chhipa) community resides.',
          hi: 'ट्रस्ट का केंद्रीय प्रशासनिक कार्यालय नई दिल्ली / राजस्थान में स्थित रहेगा, तथा राजस्थान, गुजरात, मध्य प्रदेश, उत्तर प्रदेश, महाराष्ट्र, दिल्ली, बिहार, कर्नाटक, तेलंगाना एवं अन्य राज्यों में सशक्त क्षेत्रीय कार्यकारिणी समितियां स्थापित की जाएंगी।',
          ur: 'ٹرسٹ کا مرکزی انتظامی دفتر نئی دہلی / راجستھان میں قائم رہے گا، جبکہ راجستھان، گجرات، مدھیہ پردیش، اتر پردیش، مہاراشٹر، دہلی، بہار، کرناٹک، تلنگانہ اور دیگر ریاستوں میں جہاں رنگریز برادری آباد ہے، علاقائی کمیٹیاں قائم کی جائیں گی۔'
        }
      }
    ]
  },
  {
    id: 'art-3',
    articleNo: 'Article 3 / अनुच्छेद 3',
    category: 'objectives',
    title: {
      en: 'Core Aims & Socio-Economic Objectives',
      hi: 'ट्रस्ट के मूल उद्देश्य एवं सामाजिक-आर्थिक लक्ष्य',
      ur: 'ٹرسٹ کے بنیادی مقاصد اور سماجی و معاشی اہداف'
    },
    summary: {
      en: 'Detailed parameters for Education, Medical Aid, Artisan Empowerment, Census, and Social Reform.',
      hi: 'शिक्षा, चिकित्सा सहायता, कारीगर सशक्तिकरण, जनगणना और सामाजिक सुधार के विस्तृत मापदंड।',
      ur: 'تعلیم، طبی امداد، دستکاروں کی ترقی، مردم شماری اور سماجی اصلاحات کے تفصیلی اصول।'
    },
    clauses: [
      {
        title: {
          en: '3.1 100% Literacy & Educational Endowment Fund',
          hi: '3.1 शत-प्रतिशत साक्षरता एवं शिक्षा छात्रवृत्ति कोष',
          ur: '3.1 100% خواندگی اور تعلیمی اسکالرشپ فنڈ'
        },
        text: {
          en: 'To establish a permanent educational fund to ensure zero dropouts in the community. The Trust shall provide merit scholarships, tuition fee assistance for orphans and low-income families, competitive exam coaching (UPSC, PSC, NEET, JEE), and establish modern digital libraries and coaching centers.',
          hi: 'समुदाय में स्कूल ड्रॉपआउट को शून्य करने के लिए एक स्थायी शिक्षा कोष की स्थापना करना। ट्रस्ट मेधावी छात्रवृत्ति, अनाथों और कमजोर परिवारों के लिए शिक्षण शुल्क सहायता, प्रतियोगी परीक्षा कोचिंग (UPSC, PSC, NEET, JEE) प्रदान करेगा तथा आधुनिक ई-लाइब्रेरी स्थापित करेगा।',
          ur: 'برادری میں تعلیم ادھوری چھوڑنے کے رجحان کو ختم کرنے کے لیے مستقل تعلیمی فنڈ کا قیام۔ ٹرسٹ مستحق اور یتیم بچوں کی فیس، مسابقتی امتحانات (UPSC, NEET, JEE) کی تیاری اور جدید ای-لائبریریوں کا انتظام کرے گا۔'
        }
      }
    ]
  }
];

export default function TrustConstitution({ currentLanguage }: TrustConstitutionProps) {
  // Tabs: 'volume1' | 'volume2' | ... | 'summary'
  const [activeTab, setActiveTab] = useState<string>('volume1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Expanded Chapter / Article Tracking
  const [expandedChapter, setExpandedChapter] = useState<string | null>('v1-ch-1');
  const [expandedArticle, setExpandedArticle] = useState<string | null>('art-1');
  
  // Pledge State
  const [hasPledged, setHasPledged] = useState<boolean>(false);
  const [pledgeCount, setPledgeCount] = useState<number>(4829);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  
  // Interactive Online Booklet
  const [showOnlineBooklet, setShowOnlineBooklet] = useState<boolean>(false);
  const [bookletVolume, setBookletVolume] = useState<number>(1);
  const [bookletPartIndex, setBookletPartIndex] = useState<number>(0);
  const [bookletChapterIndex, setBookletChapterIndex] = useState<number>(0);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handlePledge = () => {
    if (!hasPledged) {
      setHasPledged(true);
      setPledgeCount(prev => prev + 1);
      showToast(
        currentLanguage === 'en' 
          ? '🇮🇳 Thank you! Your pledge to uphold our community by-laws & constitutional values is registered.' 
          : currentLanguage === 'ur'
          ? '🇮🇳 شکریہ! آپ کا برادری کے قوانین اور آئینی اقدار کے ساتھ عزم درج کر لیا گیا ہے۔'
          : '🇮🇳 धन्यवाद! महासभा नियमावली एवं संवैधानिक मूल्यों के प्रति आपका संकल्प पंजीकृत कर लिया गया है।'
      );
    }
  };

  const handleDownloadPDF = () => {
    showToast(
      currentLanguage === 'en'
        ? '📥 Preparing official Trust Constitution PDF Booklet (Volumes 1-10)... Downloading now!'
        : currentLanguage === 'ur'
        ? '📥 ٹرسٹ کے سرکاری آئین کی پی ڈی ایف بکلیٹ (جلد 1 سے 10) تیار کی جا رہی ہے... ڈاؤن لوڈ شروع!'
        : '📥 महासभा नियमावली एवं संविधान की आधिकारिक पीडीएफ पुस्तिका (खंड 1 से 10) तैयार की जा रही है... डाउनलोड जारी!'
    );
  };

  const handlePrintBooklet = () => {
    window.print();
  };

  // Search Filter on Volumes 1 & 2
  const getFilteredParts = (volumeNo: number) => {
    const vol = CONSTITUTION_DATA.find(v => v.volumeNo === volumeNo);
    if (!vol) return [];
    
    const q = searchQuery.toLowerCase().trim();
    if (!q) return vol.parts;
    
    return vol.parts.map(part => {
      const filteredChapters = part.chapters.filter(ch => {
        const matchTitle = `${ch.titleEn} ${ch.titleHi} Chapter ${ch.chapterNo}`.toLowerCase().includes(q);
        const matchSummary = `${ch.summaryEn} ${ch.summaryHi}`.toLowerCase().includes(q);
        const matchClauses = ch.clauses.some(cl => 
          `${cl.titleEn} ${cl.titleHi} ${cl.textEn} ${cl.textHi}`.toLowerCase().includes(q)
        );
        return matchTitle || matchSummary || matchClauses;
      });
      return {
        ...part,
        chapters: filteredChapters
      };
    }).filter(part => part.chapters.length > 0);
  };

  // Search Filter on Summary Articles
  const filteredSummaryArticles = SUMMARY_ARTICLES.filter(art => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    
    const titleText = `${art.title.en} ${art.title.hi} ${art.title.ur} ${art.articleNo}`.toLowerCase();
    const summaryText = `${art.summary.en} ${art.summary.hi} ${art.summary.ur}`.toLowerCase();
    const clausesText = art.clauses.map(c => `${c.title.en} ${c.title.hi} ${c.title.ur} ${c.text.en} ${c.text.hi} ${c.text.ur}`).join(' ').toLowerCase();

    return titleText.includes(q) || summaryText.includes(q) || clausesText.includes(q);
  });

  // Get active volume and booklet references
  const currentBookletVol = CONSTITUTION_DATA.find(v => v.volumeNo === bookletVolume) || CONSTITUTION_DATA[0];
  const currentBookletPart = currentBookletVol.parts[bookletPartIndex] || currentBookletVol.parts[0];
  const currentBookletChapter = currentBookletPart.chapters[bookletChapterIndex] || currentBookletPart.chapters[0];

  const handleBookletNext = () => {
    if (bookletChapterIndex < currentBookletPart.chapters.length - 1) {
      setBookletChapterIndex(prev => prev + 1);
    } else if (bookletPartIndex < currentBookletVol.parts.length - 1) {
      setBookletPartIndex(prev => prev + 1);
      setBookletChapterIndex(0);
    } else if (bookletVolume < CONSTITUTION_DATA.length) {
      setBookletVolume(prev => prev + 1);
      setBookletPartIndex(0);
      setBookletChapterIndex(0);
    }
  };

  const handleBookletPrev = () => {
    if (bookletChapterIndex > 0) {
      setBookletChapterIndex(prev => prev - 1);
    } else if (bookletPartIndex > 0) {
      const prevPartIndex = bookletPartIndex - 1;
      setBookletPartIndex(prevPartIndex);
      setBookletChapterIndex(currentBookletVol.parts[prevPartIndex].chapters.length - 1);
    } else if (bookletVolume > 1) {
      const prevVolume = bookletVolume - 1;
      setBookletVolume(prevVolume);
      const prevVolData = CONSTITUTION_DATA[prevVolume - 1];
      const lastPartIdx = prevVolData.parts.length - 1;
      setBookletPartIndex(lastPartIdx);
      setBookletChapterIndex(prevVolData.parts[lastPartIdx].chapters.length - 1);
    }
  };

  const isBookletFirstPage = bookletVolume === 1 && bookletPartIndex === 0 && bookletChapterIndex === 0;
  const isBookletLastPage = bookletVolume === CONSTITUTION_DATA.length && 
    bookletPartIndex === CONSTITUTION_DATA[CONSTITUTION_DATA.length - 1].parts.length - 1 && 
    bookletChapterIndex === CONSTITUTION_DATA[CONSTITUTION_DATA.length - 1].parts[CONSTITUTION_DATA[CONSTITUTION_DATA.length - 1].parts.length - 1].chapters.length - 1;

  return (
    <div className="space-y-10 animate-fadeIn" id="trust_constitution_container">
      
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-4 rounded-xl shadow-2xl border border-[#F4C430] flex items-center gap-3 max-w-md animate-bounce">
          <Sparkles className="h-6 w-6 text-[#F4C430] flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{toastMsg}</p>
        </div>
      )}

      {/* Hero Header Card */}
      <div className="relative bg-gradient-to-br from-[#0B132B] via-[#111C3E] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden border border-emerald-500/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F4C430] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>
              {currentLanguage === 'en' 
                ? 'OFFICIAL TRUST CONSTITUTION & BYE-LAWS' 
                : currentLanguage === 'ur' 
                ? 'ٹرسٹ کا سرکاری آئین اور ضوابط' 
                : 'आधिकारिक संस्था संविधान, उपविधियाँ एवं आचार संहिता'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight leading-tight text-white">
            {currentLanguage === 'en'
              ? 'Constitution of Muslim Rangrez Samaj Public Welfare & Educational Society'
              : currentLanguage === 'ur'
              ? 'مسلم رنگریز سماج پبلک ویلفیئر اینڈ ایجوکیشنل سوسائٹی کا دستور اور ضابطہ حیات'
              : 'मुस्लिम रंगरेज़ (नीलगर) समाज पब्लिक वेलफेयर एंड एजुकेशनल सोसाइटी संविधान'}
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
            {currentLanguage === 'en'
              ? 'Our organization operates strictly on the pillars of absolute financial transparency, Zakat compliance, educational scholarships, artisan empowerment, simple marriages, and democratic administration.'
              : currentLanguage === 'ur'
              ? 'ہمارا ادارہ مکمل مالیاتی شفافیت، زکوٰۃ کی تعمیل، تعلیمی وظائف، دستکاروں کی ترقی، سادہ شادیوں اور جمہوری نظم و نسق کے ستونوں پر سختی سے کام کرتا ہے۔'
              : 'हमारी संस्था पूर्ण वित्तीय पारदर्शिता, जकात अनुपालन, शैक्षणिक छात्रवृत्ति, शिल्पकार सशक्तीकरण, दहेज मुक्त सादगी और लोकतांत्रिक प्रशासन के सिद्धांतों पर संचालित होती है।'}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2.5 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs sm:text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border-none"
            >
              <Download className="h-4 w-4" />
              <span>
                {currentLanguage === 'en' ? 'Download Full PDF (Vol 1-10)' : 'संविधान निर्देशिका डाउनलोड करें (PDF)'}
              </span>
            </button>

            <button
              onClick={() => {
                setBookletVolume(1);
                setBookletPartIndex(0);
                setBookletChapterIndex(0);
                setShowOnlineBooklet(true);
              }}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 border border-emerald-400 cursor-pointer"
            >
              <BookOpen className="h-4 w-4 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en' ? 'Read Interactive Booklet Online' : 'ऑनलाइन डिजिटल पुस्तिका पढ़ें'}
              </span>
            </button>

            <button
              onClick={handlePrintBooklet}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
            >
              <Printer className="h-4 w-4 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en' ? 'Print Document' : 'प्रिंट करें'}
              </span>
            </button>
          </div>
        </div>

        {/* Floating Verified Seal */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-emerald-300 font-semibold">
              {currentLanguage === 'en' ? 'SOCIETY REGISTRATION NO: SRA/80G/12A VERIFIED' : 'समिति पंजीकरण संख्या: SRA/80G/12A सत्यापित'}
            </span>
          </div>
          <div className="font-mono text-gray-400">
            {currentLanguage === 'en' ? 'Adopted by Founder General Body Meeting' : 'महासभा आम बैठक द्वारा विधिवत स्वीकृत एवं प्रभावी'}
          </div>
        </div>
      </div>

      {/* Interactive Member Pledge Card */}
      <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-6 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#004B23] text-[#F4C430] flex items-center justify-center flex-shrink-0 shadow-md">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-[#0B132B]">
              {currentLanguage === 'en'
                ? 'Endorse Our Constitution & Community Code'
                : 'संविधान संकल्प एवं आचार संहिता का समर्थन करें'}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
              {currentLanguage === 'en'
                ? 'By taking this pledge, you declare your allegiance to 100% literacy, simple weddings, absolute digital transparency, and social harmony.'
                : 'यह प्रतिज्ञा लेकर आप शत-प्रतिशत साक्षरता, दहेज रहित विवाह, डिजिटल वित्तीय पारदर्शिता और राष्ट्रीय सद्भाव के प्रति अपनी प्रतिबद्धता की घोषणा करते हैं।'}
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-emerald-800 font-bold">
              <Users className="h-3.5 w-3.5 text-[#004B23]" />
              <span>{pledgeCount.toLocaleString()} {currentLanguage === 'en' ? 'citizens have pledged' : 'नागरिकों ने संवैधानिक संकल्प लिया है'}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePledge}
          disabled={hasPledged}
          className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition transform flex items-center gap-2 whitespace-nowrap border-none ${
            hasPledged
              ? 'bg-emerald-700 text-white cursor-default'
              : 'bg-[#004B23] hover:bg-emerald-800 text-[#F4C430] hover:scale-105 cursor-pointer'
          }`}
        >
          <CheckCircle2 className={`h-5 w-5 ${hasPledged ? 'text-white' : 'text-[#F4C430]'}`} />
          <span>
            {hasPledged
              ? '✓ Pledged successfully'
              : (currentLanguage === 'en' ? 'Take the Constitutional Pledge' : 'संविधान संकल्प लें')}
          </span>
        </button>
      </div>

      {/* Main Constitution Content Nav Tabs */}
      <div className="space-y-6">
        
        {/* Navigation Tabs bar */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
          {CONSTITUTION_DATA.map((vol) => (
            <button
              key={`volume${vol.volumeNo}`}
              onClick={() => { setActiveTab(`volume${vol.volumeNo}`); setSearchQuery(''); }}
              className={`flex-1 min-w-[200px] px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-2 border-none cursor-pointer ${
                activeTab === `volume${vol.volumeNo}`
                  ? 'bg-white text-[#004B23] shadow-sm ring-1 ring-black/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {vol.volumeNo === 1 ? <Layers className="h-4.5 w-4.5 flex-shrink-0" /> : <FileSpreadsheet className="h-4.5 w-4.5 flex-shrink-0" />}
              <div className="text-left w-full overflow-hidden">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Volume {vol.volumeNo}</div>
                <div className="truncate w-full">{currentLanguage === 'en' ? vol.titleEn : vol.titleHi}</div>
              </div>
            </button>
          ))}

          <button
            onClick={() => { setActiveTab('summary'); setSearchQuery(''); }}
            className={`flex-1 min-w-[150px] px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-2 border-none cursor-pointer ${
              activeTab === 'summary'
                ? 'bg-white text-[#004B23] shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="h-4.5 w-4.5 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Quick View</div>
              <div>{currentLanguage === 'en' ? 'Articles Summary' : 'संक्षिप्त मुख्य अनुच्छेद'}</div>
            </div>
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLanguage === 'en'
                  ? 'Search by term, Zakat, membership, rule...'
                  : 'नियम, जकात, खंड, सदस्यता अथवा उद्देश्य खोजें...'
              }
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:bg-white outline-none font-medium transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center font-bold border-none cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          <div className="text-xs text-gray-500 font-mono">
            Status: <span className="text-emerald-700 font-bold">100% Verified Bilingual Reference</span>
          </div>
        </div>

        {/* Dynamic List Container */}
        <div className="space-y-8">
          
          {/* Dynamic Volume Content Tab */}
          {activeTab.startsWith('volume') && (
            <div className="space-y-8">
              {getFilteredParts(parseInt(activeTab.replace('volume', ''), 10)).length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
                  <AlertCircle className="h-10 w-10 text-amber-500 mx-auto" />
                  <h4 className="text-base font-bold text-gray-800">No matching content found in this Volume</h4>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">Try resetting your search query or entering a different keyword.</p>
                </div>
              ) : (
                getFilteredParts(parseInt(activeTab.replace('volume', ''), 10)).map((part) => (
                  <div key={part.partNo} className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                      <div className="bg-[#004B23] text-[#F4C430] font-mono text-xs font-black px-2.5 py-1 rounded-md">
                        {part.partNo}
                      </div>
                      <h2 className="text-lg font-serif font-black text-[#0B132B]">
                        {currentLanguage === 'en' ? part.titleEn : part.titleHi}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {part.chapters.map((chapter) => {
                        const uniqueId = `v${activeTab.replace('volume', '')}-${part.partNo}-ch-${chapter.chapterNo}`;
                        const isExpanded = expandedChapter === uniqueId;
                        return (
                          <div 
                            key={uniqueId}
                            className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs ${
                              isExpanded ? 'border-emerald-600 ring-1 ring-emerald-500/20' : 'border-gray-200'
                            }`}
                          >
                            <button
                              onClick={() => setExpandedChapter(isExpanded ? null : uniqueId)}
                              className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition border-none bg-transparent cursor-pointer rounded-2xl"
                            >
                              <div className="space-y-1">
                                <div className="text-[11px] font-mono font-extrabold text-emerald-800">
                                  CHAPTER {chapter.chapterNo} / अध्याय {chapter.chapterNo}
                                </div>
                                <h3 className="text-base font-serif font-extrabold text-[#0B132B]">
                                  {currentLanguage === 'en' ? chapter.titleEn : chapter.titleHi}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                  {currentLanguage === 'en' ? chapter.summaryEn : chapter.summaryHi}
                                </p>
                              </div>
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                                isExpanded ? 'bg-[#004B23] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                              }`}>
                                <ChevronDown className="h-4.5 w-4.5" />
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="p-5 pt-2 border-t border-gray-100 bg-gray-50/40 space-y-4 animate-fadeIn">
                                <div className="grid gap-4">
                                  {chapter.clauses.map((clause) => (
                                    <div key={clause.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
                                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                          Clause {clause.id.split('_').pop()}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Bilingual Verification</span>
                                      </div>
                                      
                                      {/* Split Layout: English and Hindi displayed clearly stacked/side-by-side */}
                                      <div className="grid md:grid-cols-2 gap-6">
                                        
                                        {/* English Column */}
                                        <div className="space-y-1.5 border-r md:border-r border-gray-100 pr-0 md:pr-4">
                                          <div className="flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#0B132B]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            <span>{clause.titleEn}</span>
                                          </div>
                                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light pl-3">
                                            {clause.textEn}
                                          </p>
                                        </div>

                                        {/* Hindi Column */}
                                        <div className="space-y-1.5">
                                          <div className="flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#004B23]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                            <span>{clause.titleHi}</span>
                                          </div>
                                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light pl-3">
                                            {clause.textHi}
                                          </p>
                                        </div>

                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Quick Summary Tab */}
          {activeTab === 'summary' && (
            <div className="space-y-6">
              {filteredSummaryArticles.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
                  <AlertCircle className="h-10 w-10 text-amber-500 mx-auto" />
                  <h4 className="text-base font-bold text-gray-800">No matching articles found</h4>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">Try clearing search parameters to display summary articles.</p>
                </div>
              ) : (
                filteredSummaryArticles.map((art) => {
                  const isExpanded = expandedArticle === art.id;
                  return (
                    <div 
                      key={art.id} 
                      className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs ${
                        isExpanded ? 'border-emerald-600 ring-1 ring-emerald-500/20' : 'border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedArticle(isExpanded ? null : art.id)}
                        className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition border-none bg-transparent cursor-pointer rounded-2xl"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#004B23] text-[#F4C430] font-mono text-[10px] font-black uppercase tracking-wider">
                              {art.articleNo}
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">
                              • {art.category}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-extrabold text-[#0B132B]">
                            {art.title[currentLanguage]}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {art.summary[currentLanguage]}
                          </p>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                          isExpanded ? 'bg-[#004B23] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <ChevronDown className="h-4.5 w-4.5" />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-5 pt-2 border-t border-gray-100 bg-gray-50/40 space-y-4 animate-fadeIn">
                          <div className="grid gap-3">
                            {art.clauses.map((clause, idx) => (
                              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2">
                                <h4 className="text-xs font-mono font-black text-[#004B23] flex items-center gap-1.5">
                                  <FileText className="h-4 w-4 text-[#F4C430]" />
                                  <span>{clause.title[currentLanguage] || clause.title.en}</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light pl-6">
                                  {clause.text[currentLanguage] || clause.text.en}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-2 text-[10px] text-gray-400 font-mono border-t border-gray-200/60">
                            <span>Society By-Law Clause</span>
                            <button 
                              onClick={() => {
                                navigator.clipboard.writeText(`${art.articleNo} - ${art.title[currentLanguage]}\n${art.clauses.map(c => c.text[currentLanguage]).join('\n')}`);
                                showToast('📋 Article text copied to clipboard!');
                              }}
                              className="text-[#004B23] hover:underline font-bold flex items-center gap-1 border-none bg-transparent cursor-pointer"
                            >
                              <Share2 className="h-3.5 w-3.5" />
                              <span>Copy Text</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

        </div>
      </div>

      {/* Footer Legal & Audit Disclaimer */}
      <div className="bg-gradient-to-r from-stone-900 to-[#0B132B] text-gray-300 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-3">
        <div className="flex items-center gap-2 text-[#F4C430] font-bold text-xs uppercase tracking-wider">
          <Scale className="h-4 w-4" />
          <span>LEGAL COMPLIANCE & CONSTITUTIONAL SUPREMACY</span>
        </div>
        <p className="text-xs leading-relaxed text-gray-400 font-light">
          This Society Constitution and Standard Operating Procedures (SOPs) are drafted in absolute conformity with the Societies Registration Act, 1860. Any modification, amendment, or replacement of these clauses must be proposed by the National Executive Committee and ratified by a 2/3rd supermajority in a General Body Session. The certified bilingual registries deposited with the Registrar of Societies shall remain conclusive and binding.
        </p>
      </div>

      {/* Interactive Booklet Online Modal */}
      {showOnlineBooklet && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
            
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center gap-4 border-b border-gray-700 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F4C430] text-[#0B132B] font-black font-mono text-xs">DIGITAL BOOKLET</div>
                <div>
                  <h3 className="text-base font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'Society Constitution, Bye-Laws & SOPs Booklet' : 'संस्था संविधान, उपविधियाँ एवं मानक प्रपत्र नियमावली'}
                  </h3>
                  <p className="text-[11px] text-gray-300 font-mono">
                    Volume {bookletVolume} • {currentBookletPart.titleEn}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowOnlineBooklet(false)} 
                className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-xl transition border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto bg-slate-100 flex-1 space-y-6">
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-300 max-w-3xl mx-auto space-y-6 text-left relative min-h-[450px] flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Part and Chapter badge header */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-[#004B23] rounded-full text-xs font-mono font-black">
                      Chapter {currentBookletChapter.chapterNo}
                    </span>
                    <span className="text-xs text-gray-400 font-mono uppercase font-bold tracking-wider">
                      {currentBookletPart.partNo}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B]">
                    {currentLanguage === 'en' ? currentBookletChapter.titleEn : currentBookletChapter.titleHi}
                  </h2>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-serif font-bold text-xs sm:text-sm">
                    {currentLanguage === 'en' ? currentBookletChapter.summaryEn : currentBookletChapter.summaryHi}
                  </div>

                  {currentBookletChapter.clauses && currentBookletChapter.clauses.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Bilingual Clauses:</h4>
                      <div className="space-y-4">
                        {currentBookletChapter.clauses.map((clause, idx) => (
                        <div key={clause.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                          <span className="text-[10px] font-mono font-black text-[#004B23] bg-emerald-100 px-2 py-0.5 rounded">
                            Clause {idx + 1}
                          </span>
                          
                          <div className="grid md:grid-cols-2 gap-4 pt-1">
                            <div className="space-y-1">
                              <div className="text-xs font-bold text-slate-800">{clause.titleEn}</div>
                              <p className="text-xs text-slate-600 leading-relaxed font-light">{clause.textEn}</p>
                            </div>
                            <div className="space-y-1 md:border-l md:border-slate-200 md:pl-4">
                              <div className="text-xs font-bold text-[#004B23]">{clause.titleHi}</div>
                              <p className="text-xs text-slate-600 leading-relaxed font-light">{clause.textHi}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>
                  )}

                </div>

                <div className="pt-6 mt-8 border-t border-gray-200 flex justify-between items-center text-xs font-mono text-gray-400">
                  <span>Muslim Rangrez Society • Volume {bookletVolume}</span>
                  <span className="text-emerald-700 font-bold">REGISTRATION EDITION ✓</span>
                </div>
              </div>
            </div>

            {/* Modal navigation bottom bar */}
            <div className="bg-white p-4 border-t border-gray-200 flex flex-wrap justify-between items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBookletPrev}
                  disabled={isBookletFirstPage}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 rounded-xl text-xs font-bold transition flex items-center gap-1 border-none cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Page</span>
                </button>
                
                <span className="text-xs font-mono font-bold text-gray-600 px-2">
                  Vol {bookletVolume} • Part Index {bookletPartIndex + 1} • Chapter {currentBookletChapter.chapterNo}
                </span>

                <button
                  onClick={handleBookletNext}
                  disabled={isBookletLastPage}
                  className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] disabled:opacity-40 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 border-none cursor-pointer"
                >
                  <span>Next Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handleDownloadPDF();
                    setShowOnlineBooklet(false);
                  }}
                  className="px-4 py-2 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] rounded-xl text-xs font-extrabold transition shadow-md flex items-center gap-1.5 border-none cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Booklet</span>
                </button>
                <button
                  onClick={() => setShowOnlineBooklet(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition border-none cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
