import React, { useState } from 'react';
import { 
  Eye, Scale, CheckCircle2, Users, Award, Lock, BookOpen, 
  Heart, Database, Globe, Sparkles, Landmark, FileText, 
  History, Vote, ShieldCheck, Check, ArrowRight, Zap, RefreshCw
} from 'lucide-react';
import { Language } from '../../types';

interface GuidingPrinciplesSectionProps {
  currentLanguage: Language;
}

export default function GuidingPrinciplesSection({ currentLanguage }: GuidingPrinciplesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'governance' | 'constitutional' | 'technology' | 'welfare'>('all');

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const principles = [
    {
      id: 'transparency',
      category: 'governance',
      icon: <Eye className="h-6 w-6 text-emerald-400" />,
      titleEn: 'Transparency',
      titleHi: 'पारदर्शिता (Transparency)',
      titleUr: 'شفافیت (Transparency)',
      descEn: 'Real-time visibility into survey progress, voting tallies, financial reports, and committee resolutions without secret agendas or closed-door manipulation.',
      descHi: 'सर्वेक्षण प्रगति, मतदान के आंकड़े, वित्तीय रिपोर्ट और समिति के निर्णयों में बिना किसी गुप्त एजेंडे या बंद कमरे की राजनीति के रीयल-टाइम पूर्ण पारदर्शिता।',
      descUr: 'سروے کی پیشرفت، ووٹنگ کے اعداد و شمار، مالیاتی رپورٹس، اور کمیٹی کی قراردادوں میں بغیر کسی خفیہ ایجنڈے یا بند کمرے کی ہیرا پھیری کے رئیل ٹائم مکمل شفافیت۔',
      badge: 'Open Democracy'
    },
    {
      id: 'fairness',
      category: 'governance',
      icon: <Scale className="h-6 w-6 text-blue-400" />,
      titleEn: 'Fairness',
      titleHi: 'निष्पक्षता (Fairness)',
      titleUr: 'انصاف اور غیر جانبداری (Fairness)',
      descEn: 'Unbiased voting processes, impartial matrimonial dispute resolution, and equal representation across all districts, professions, and community sub-sections.',
      descHi: 'निष्पक्ष मतदान प्रक्रिया, भेदभाव-रहित पारिवारिक विवाद समाधान, और सभी जिलों, व्यवसायों व समुदाय के सभी वर्गों को समान प्रतिनिधित्व।',
      descUr: 'غیر جانبدارانہ ووٹنگ کا عمل، غیر جانبدارانہ ازدواجی تنازعات کا حل، اور تمام اضلاع، پیشوں، اور برادری کے تمام حصوں میں مساوی نمائندگی۔',
      badge: 'Impartial Justice'
    },
    {
      id: 'accountability',
      category: 'governance',
      icon: <CheckCircle2 className="h-6 w-6 text-yellow-400" />,
      titleEn: 'Accountability',
      titleHi: 'जवाबदेही (Accountability)',
      titleUr: 'احتساب اور جوابدہی (Accountability)',
      descEn: 'Immutable audit trails for every executive decision, proposal approval, fund allocation, and reform resolution, holding leadership answerable to members.',
      descHi: 'प्रत्येक कार्यकारी निर्णय, प्रस्ताव स्वीकृति, फंड आवंटन और सुधार संकल्प के लिए अपरिवर्तनीय ऑडिट ट्रेल, जो नेतृत्व को समाज के प्रति जवाबदेह बनाता है।',
      descUr: 'ہر ایگزیکٹو فیصلے، تجویز کی منظوری، فنڈ کی تخصیص، اور اصلاحی قرارداد کے لیے ناقابل تبدیلی آڈٹ ٹریلز، جو قیادت کو اراکین کے سامنے جوابدہ بناتے ہیں۔',
      badge: 'Auditable Leadership'
    },
    {
      id: 'public_participation',
      category: 'governance',
      icon: <Users className="h-6 w-6 text-purple-400" />,
      titleEn: 'Public Participation',
      titleHi: 'जनभागीदारी (Public Participation)',
      titleUr: 'عوامی شمولیت (Public Participation)',
      descEn: 'Direct grassroots democracy enabling every household member to propose agendas, participate in debates, vote in referendums, and shape social reforms.',
      descHi: 'सीधे जमीनी स्तर का लोकतंत्र जो हर परिवार के सदस्य को एजेंडा प्रस्तावित करने, चर्चाओं में भाग लेने, जनमत संग्रह में मतदान करने और सामाजिक सुधारों को आकार देने का अधिकार देता है।',
      descUr: 'براہ راست نچلی سطح کی جمہوریت جو ہر گھر کے فرد کو ایجنڈے پیش کرنے، مباحثوں میں حصہ لینے، ریفرنڈم میں ووٹ دینے، اور سماجی اصلاحات کی تشکیل کا اختیار دیتی ہے۔',
      badge: 'Direct Democracy'
    },
    {
      id: 'equal_opportunity',
      category: 'welfare',
      icon: <Award className="h-6 w-6 text-rose-400" />,
      titleEn: 'Equal Opportunity',
      titleHi: 'समान अवसर (Equal Opportunity)',
      titleUr: 'مساوی مواقع (Equal Opportunity)',
      descEn: 'Removing geographical, gender, and socio-economic barriers so that rural artisans, women, youth, elders, and diaspora (NRI) members have an identical vote and voice.',
      descHi: 'भौगोलिक, लिंग और सामाजिक-आर्थिक बाधाओं को समाप्त करना ताकि ग्रामीण कारीगरों, महिलाओं, युवाओं, बुजुर्गों और अनिवासी भारतीय (NRI) सदस्यों को एक समान आवाज और वोट मिले।',
      descUr: 'جغرافیائی، صنف، اور سماجی و اقتصادی رکاوٹوں کو ختم کرنا تاکہ دیہی کاریگروں، خواتین، نوجوانوں، بزرگوں، اور تارکین وطن (NRI) اراکین کو ایک جیسا ووٹ اور آواز ملے۔',
      badge: 'Inclusive Voice'
    },
    {
      id: 'privacy_protection',
      category: 'technology',
      icon: <Lock className="h-6 w-6 text-teal-400" />,
      titleEn: 'Privacy Protection',
      titleHi: 'निजता की सुरक्षा (Privacy Protection)',
      titleUr: 'رازداری کا تحفظ (Privacy Protection)',
      descEn: 'Strict DPDP Act 2023 compliance, cryptographic SHA-256 ballot hashing, and zero-knowledge proof architecture ensuring secret voting without individual tracing.',
      descHi: 'सख्त DPDP अधिनियम 2023 अनुपालन, SHA-256 डिजिटल बैलेट हैशिंग, और जीरो-नॉलेज प्रूफ आर्किटेक्चर जो व्यक्तिगत पहचान को उजागर किए बिना गुप्त मतदान सुनिश्चित करता है।',
      descUr: 'سخت DPDP ایکٹ 2023 کی تعمیل، کرپٹوگرافک SHA-256 بیلٹ ہیشنگ، اور زیرو نالج پروف آرکیٹیکچر جو انفرادی ٹریسنگ کے بغیر خفیہ ووٹنگ کو یقینی بناتا ہے۔',
      badge: 'Zero-Knowledge Proof'
    },
    {
      id: 'constitution_of_india',
      category: 'constitutional',
      icon: <Landmark className="h-6 w-6 text-[#F4C430]" />,
      titleEn: 'Respect for the Constitution of India',
      titleHi: 'भारतीय संविधान का सम्मान',
      titleUr: 'آئین ہند کا احترام',
      descEn: 'Absolute devotion to fundamental democratic rights, secular values, gender equality, dignity of the individual, and constitutional fraternity enshrined by Babasaheb Ambedkar.',
      descHi: 'बाबासाहेब आंबेडकर द्वारा स्थापित मौलिक लोकतांत्रिक अधिकारों, धर्मनिरपेक्ष मूल्यों, लैंगिक समानता, व्यक्ति की गरिमा और संवैधानिक बंधुत्व के प्रति अटूट निष्ठा।',
      descUr: 'بابا صاحب امبیڈکر کے ذریعہ قائم کردہ بنیادی جمہوری حقوق، سیکولر اقدار، صنفی مساوات، فرد کا وقار، اور آئینی بھائی چارے کے تئیں مکمل عقیدت۔',
      badge: 'Constitutional Value'
    },
    {
      id: 'rule_of_law',
      category: 'constitutional',
      icon: <BookOpen className="h-6 w-6 text-orange-400" />,
      titleEn: 'Respect for the Rule of Law',
      titleHi: 'कानून के शासन का आदर (Rule of Law)',
      titleUr: 'قانون کی حکمرانی کا احترام (Rule of Law)',
      descEn: 'Ensuring all community reform proposals, dowry austerity caps, matrimonial conciliation, and organizational guidelines strictly harmonize with Indian statutory laws and judicial mandates.',
      descHi: 'यह सुनिश्चित करना कि सभी समाज सुधार प्रस्ताव, दहेज सादगी नियम, पारिवारिक सुलह और संगठनात्मक दिशानिर्देश भारतीय कानूनी प्रावधानों व अदालती आदेशों के पूरी तरह अनुरूप हैं।',
      descUr: 'اس بات کو یقینی بنانا کہ برادری کی تمام اصلاحی تجاویز، جہیز کی سادگی کے قوانین، ازدواجی صلح، اور تنظیمی رہنما خطوط ہندوستانی قانونی دفعات اور عدالتی احکامات کے مکمل مطابق ہیں۔',
      badge: 'Statutory Harmony'
    },
    {
      id: 'digital_inclusion',
      category: 'technology',
      icon: <Globe className="h-6 w-6 text-indigo-400" />,
      titleEn: 'Digital Inclusion',
      titleHi: 'समावेशी डिजिटल सुगम्यता (Digital Inclusion)',
      titleUr: 'ڈیجیٹل شمولیت (Digital Inclusion)',
      descEn: 'Trilingual accessibility (English, Hindi, Urdu), voice-assisted navigation, lightweight mobile interfaces, and field volunteer tablet support for elderly and non-tech-savvy members.',
      descHi: 'त्रिभाषी सुगम्यता (अंग्रेजी, हिंदी, उर्दू), वॉयस-असिस्टेड नेविगेशन, हल्का मोबाइल इंटरफेस और बुजुर्ग व तकनीकी रूप से कम जानकार सदस्यों के लिए स्वयंसेवक टैबलेट सहायता।',
      descUr: 'سہ ماہی رسائی (انگریزی، ہندی، اردو)، وائس اسسٹڈ نیویگیشن، ہلکا موبائل انٹرفیس، اور بزرگ اور تکنیکی طور پر کم واقف اراکین کے لیے رضاکار ٹیبلیٹ سپورٹ۔',
      badge: '100% Reachable'
    },
    {
      id: 'community_welfare',
      category: 'welfare',
      icon: <Heart className="h-6 w-6 text-pink-400" />,
      titleEn: 'Community Welfare',
      titleHi: 'समाज कल्याण व उत्थान (Community Welfare)',
      titleUr: 'برادری کی فلاح و بہبود (Community Welfare)',
      descEn: 'Channeling collective governance power and administrative savings directly into educational scholarships, healthcare emergency relief, dowry eradication, and youth employment aid.',
      descHi: 'सामूहिक निर्णय शक्ति और प्रशासनिक बचत को सीधे शिक्षा छात्रवृत्ति, स्वास्थ्य आपातकालीन सहायता, दहेज उन्मूलन और युवा रोजगार सहायता में लगाना।',
      descUr: 'مجموعی حکمرانی کی طاقت اور انتظامی بچت کو براہ راست تعلیمی وظائف، صحت کی ہنگامی امداد، جہیز کے خاتمے، اور نوجوانوں کے روزگار کی مدد میں لگانا۔',
      badge: 'Social upliftment'
    },
    {
      id: 'data_integrity',
      category: 'technology',
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      titleEn: 'Data Integrity',
      titleHi: 'डेटा अखंडता व सुरक्षा (Data Integrity)',
      titleUr: 'ڈیٹا کی سالمیت اور تحفظ (Data Integrity)',
      descEn: 'End-to-end encryption, multi-region cloud replication, automated daily snapshots, and tamper-proof historical ledgers protecting community records against loss or corruption.',
      descHi: 'एंट-टू-एंड एन्क्रिप्शन, मल्टी-रीजन क्लाउड रेप्लिकेशन, स्वचालित दैनिक बैकअप और छेड़छाड़-मुक्त अभिलेख जो सामुदायिक रिकॉर्ड को नुकसान या भ्रष्टाचार से बचाते हैं।',
      descUr: 'اینڈ ٹو اینڈ انکرپشن، ملٹی ریجن کلاؤڈ ریپلیکیشن، خودکار یومیہ بیک اپ، اور ٹمپر پروف تاریخی ریکارڈز جو برادری کے ریکارڈز کو نقصان یا کرپشن سے بچاتے ہیں۔',
      badge: 'Tamper-Proof Ledger'
    }
  ];

  const filteredPrinciples = selectedCategory === 'all' 
    ? principles 
    : principles.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-10 animate-fadeIn text-[#0B132B] my-8">
      
      {/* THE STRATEGIC GOVERNANCE VISION MANDATE BANNER */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest">
              <Landmark className="h-4 w-4 text-emerald-600" />
              <span>{getText('CORE CONSTITUTIONAL & ETHICAL MANDATE', 'संवैधानिक एवं नैतिक संकल्प', 'آئینی اور اخلاقی مینڈیٹ')}</span>
            </span>

            <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-mono text-gray-600">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{getText('Permanent Digital Community Governance System', 'स्थाई डिजिटल कम्युनिटी गवर्नेंस व्यवस्था', 'مستقل ڈیجیٹل کمیونٹی گورننس سسٹم')}</span>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#0B132B] leading-tight tracking-tight">
              {getText(
                'A Permanent Digital Community Governance System for Generations to Come',
                'आने वाली पीढ़ियों के लिए एक स्थाई और सशक्त डिजिटल सामाजिक निर्णय व्यवस्था',
                'آنے والی نسلوں کے لیے ایک مستقل اور بااختیار ڈیجیٹل برادری حکمرانی کا نظام'
              )}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm italic">
              "{getText(
                'The platform functions as a permanent Digital Community Governance System, enabling transparent, secure, democratic, and evidence-based decision-making for the community while preserving every survey, proposal, discussion, vote, resolution, implementation report, and historical record for future generations.',
                'यह प्लेटफॉर्म एक स्थाई डिजिटल कम्युनिटी गवर्नेंस सिस्टम के रूप में कार्य करता है, जो समाज के लिए पारदर्शी, सुरक्षित, लोकतांत्रिक और साक्ष्य-आधारित निर्णय लेने में सक्षम बनाता है, साथ ही आने वाली पीढ़ियों के लिए प्रत्येक सर्वेक्षण, प्रस्ताव, चर्चा, मतदान, प्रस्ताव, कार्यान्वयन रिपोर्ट और ऐतिहासिक अभिलेख को सुरक्षित रखता है।',
                'یہ پلیٹ فارم ایک مستقل ڈیجیٹل کمیونٹی گورننس سسٹم کے طور پر کام کرتا ہے، جو برادری کے لیے شفاف، محفوظ، جمہوری اور شواہد پر مبنی فیصلہ سازی کے قابل بناتا ہے، جبکہ آنے والی نسلوں کے لیے ہر سروے، تجویز، بحث، ووٹ، قرارداد، عمل درآمد کی رپورٹ اور تاریخی ریکارڈ کو محفوظ رکھتا ہے۔'
              )}"
            </p>
          </div>

          {/* Key Preservation Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
            {[
              { icon: <Vote className="h-4 w-4 text-emerald-600" />, labelEn: 'Every Survey', labelHi: 'हर सर्वेक्षण', labelUr: 'ہر سروے' },
              { icon: <FileText className="h-4 w-4 text-emerald-600" />, labelEn: 'Every Proposal', labelHi: 'हर प्रस्ताव', labelUr: 'ہر تجویز' },
              { icon: <Users className="h-4 w-4 text-blue-600" />, labelEn: 'Every Debate', labelHi: 'हर चर्चा', labelUr: 'ہر مباحثہ' },
              { icon: <CheckCircle2 className="h-4 w-4 text-purple-600" />, labelEn: 'Every Vote', labelHi: 'हर मतदान', labelUr: 'ہر ووٹ' },
              { icon: <Award className="h-4 w-4 text-rose-600" />, labelEn: 'Every Resolution', labelHi: 'हर फैसला', labelUr: 'ہر قرارداد' },
              { icon: <RefreshCw className="h-4 w-4 text-teal-600" />, labelEn: 'Every Report', labelHi: 'हर रिपोर्ट', labelUr: 'ہر رپورٹ' },
              { icon: <History className="h-4 w-4 text-cyan-600" />, labelEn: 'Permanent Archive', labelHi: 'अमर अभिलेखागार', labelUr: 'مستقل آرکائیو' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col items-center text-center space-y-1.5 hover:border-emerald-300 transition shadow-sm">
                <div className="p-2 rounded-lg bg-gray-50">{item.icon}</div>
                <span className="text-[11px] font-bold text-gray-700 font-mono leading-tight">{getText(item.labelEn, item.labelHi, item.labelUr)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11 GUIDING PRINCIPLES SECTION */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              ✨ {getText('THE 11 GUIDING PRINCIPLES', 'व्यवस्था के 11 मार्गदर्शक सिद्धांत', 'نظام کے 11 رہنمائی اصول')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
              {getText('Core Ethics & Constitutional Pillars of the Platform', 'मंच की मूल नैतिकता एवं संवैधानिक आधारस्तंभ', 'پلیٹ فارم کی بنیادی اخلاقیات اور آئینی ستون')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-3xl">
              {getText(
                'Every digital feature, voting flow, and administrative rule is anchored in these 11 immutable principles to guarantee justice, equity, and trust.',
                'प्रत्येक डिजिटल सुविधा, मतदान प्रक्रिया और प्रशासनिक नियम न्याय, समानता और विश्वास की गारंटी देने के लिए इन 11 अपरिवर्तनीय सिद्धांतों में निहित है।',
                'ہر ڈیجیٹل خصوصیت، ووٹنگ کا عمل، اور انتظامی قاعدہ انصاف، مساوات، اور اعتماد کی ضمانت دینے کے لیے ان 11 غیر متزلزل اصولوں پر مبنی ہے۔'
              )}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-2xl border border-gray-200 shrink-0 text-xs font-mono">
            {[
              { id: 'all', label: 'All (11)' },
              { id: 'governance', label: '⚖️ Governance (4)' },
              { id: 'constitutional', label: '🇮🇳 Constitutional (2)' },
              { id: 'technology', label: '🛡️ Tech & Privacy (3)' },
              { id: 'welfare', label: '🤝 Welfare (2)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-xl transition font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-[#004B23] text-[#FFD54A] shadow-md'
                    : 'text-gray-600 hover:text-[#004B23] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPrinciples.map((p, idx) => (
            <div
              key={p.id}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full -mr-12 -mt-12 group-hover:bg-emerald-50 transition"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-emerald-700">
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-300">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white transition duration-300">
                  {p.icon}
                </div>

                <h4 className="text-lg sm:text-xl font-serif font-extrabold text-gray-900 group-hover:text-emerald-800 transition leading-snug">
                  {getText(p.titleEn, p.titleHi, p.titleUr)}
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {getText(p.descEn, p.descHi, p.descUr)}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] font-mono font-bold opacity-80 relative z-10">
                <span className="flex items-center text-emerald-600">
                  <Check className="h-3.5 w-3.5 mr-1" />
                  <span>{getText('Embedded in Architecture', 'प्रणाली में समाहित', 'نظام میں شامل')}</span>
                </span>
                <span className="text-[10px] uppercase text-gray-400 tracking-wider">
                  {p.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
