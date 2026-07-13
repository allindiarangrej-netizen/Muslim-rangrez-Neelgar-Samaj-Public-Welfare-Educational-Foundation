import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Users, Vote, FileCheck, TrendingUp, 
  HelpCircle, ChevronDown, ChevronUp, Search, Award, MapPin, 
  CheckCircle2, Sparkles, Layers, ArrowRight
} from 'lucide-react';
import { Language } from '../../types';

interface OrganizationalFrameworkSectionProps {
  currentLanguage: Language;
}

export const OrganizationalFrameworkSection: React.FC<OrganizationalFrameworkSectionProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'hierarchy' | 'workflow' | 'faq'>('hierarchy');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const tiers = [
    {
      level: 'Tier 1: National Apex Assembly',
      levelHi: 'स्तर 1: सर्वोच्च राष्ट्रीय महासभा (Apex Assembly)',
      levelUr: 'درجہ 1: سپریم قومی اسمبلی',
      badge: 'Supreme Authority',
      descEn: 'Presides over constitutional amendments, national e-governance policies, binding social resolutions, and global Sharia compliance.',
      descHi: 'संविधान संशोधन, राष्ट्रीय ई-गवर्नेंस नीतियों, बाध्यकारी सामाजिक प्रस्तावों और वैश्विक शरिया अनुपालन का सर्वोच्च संचालन।',
      stats: '28 State Presidents • 50 National Delegates • Central Sharia Council',
    },
    {
      level: 'Tier 2: State Executive Boards (28 Chapters)',
      levelHi: 'स्तर 2: राज्य कार्यकारिणी बोर्ड (28 प्रदेश इकाइयां)',
      levelUr: 'درجہ 2: ریاستی ایگزیکٹو بورڈز (28 ابواب)',
      badge: 'State Leadership',
      descEn: 'Coordinates state-wide educational scholarship funds, Zakat distribution networks, matrimonial austerity audits, and regional conventions.',
      descHi: 'राज्यव्यापी छात्रवृत्ति फंड, जकात वितरण नेटवर्क, वैवाहिक सादगी ऑडिट और प्रादेशिक सम्मेलनों का समन्वय एवं पर्यवेक्षण।',
      stats: '28 State Chapters • 350+ Executive Members • Legal Aid Panels',
    },
    {
      level: 'Tier 3: District Sharia & Welfare Committees',
      levelHi: 'स्तर 3: जिला शरिया एवं कल्याण समितियां',
      levelUr: 'درجہ 3: ضلعی شریعہ اور فلاحی کمیتیاں',
      badge: 'District Implementation',
      descEn: 'Enforces dowry-free Nikah guidelines, mediates local family disputes out of court, and maintains the verified household directory.',
      descHi: 'दहेज-मुक्त निकाह नियमों को लागू करना, पारिवारिक विवादों का स्थानीय समाधान करना और सत्यापित परिवार डायरेक्टरी को अपडेट रखना।',
      stats: '350+ District Committees • 4,200+ Active Officers • Qazi Panels',
    },
    {
      level: 'Tier 4: Tehsil & Block Mentorship Boards',
      levelHi: 'स्तर 4: तहसील एवं ब्लॉक मार्गदर्शन बोर्ड',
      levelUr: 'درجہ 4: تحصیل اور بلاک رہنمائی بورڈز',
      badge: 'Taluk / Tehsil Level',
      descEn: 'Operates evening study centers, career counseling cells, anti-drug awareness workshops, and rural census verification squads.',
      descHi: 'सांध्यकालीन शिक्षा केंद्र, करियर मार्गदर्शन सेल, नशा मुक्ति कार्यशालाएं और ग्रामीण जनगणना सत्यापन दस्तों का संचालन।',
      stats: '1,200+ Tehsil Boards • 12,000+ Volunteer Teachers & Mentors',
    },
    {
      level: 'Tier 5: City & Municipal Taskforces',
      levelHi: 'स्तर 5: नगर एवं शहरी कल्याण कार्यबल',
      levelUr: 'درجہ 5: شہری اور میونسپل ٹاسک فورسز',
      badge: 'Urban Centers',
      descEn: 'Supports textile and dyeing artisans in urban markets, facilitates government schemes, and manages community halls & clinics.',
      descHi: 'शहरी बाजारों में रंगरेज़ कारीगरों की सहायता, सरकारी योजनाओं का लाभ दिलाना और सामुदायिक भवनों व क्लीनिकों का प्रबंधन।',
      stats: '450+ Urban Taskforces • Trade & Commerce Advisory Cells',
    },
    {
      level: 'Tier 6: Village Panchayats & Rural Cells',
      levelHi: 'स्तर 6: ग्राम पंचायत एवं ग्रामीण प्रकोष्ठ',
      levelUr: 'درجہ 6: گرام پنچایت اور دیہی سیلز',
      badge: 'Rural Grassroots',
      descEn: 'Ensures 100% school enrollment for children, eliminates Mrityubhoj (death feasts), and protects community graveyard properties.',
      descHi: 'बच्चों का 100% स्कूल दाखिला सुनिश्चित करना, मृत्युभोज को पूर्णतः समाप्त करना और कब्रिस्तान व वक्फ संपत्तियों की सुरक्षा।',
      stats: '5,000+ Village Cells • Grassroots Sharia & Social Elders',
    },
    {
      level: 'Tier 7: Ward & Mohalla Representative Squads',
      levelHi: 'स्तर 7: वार्ड एवं मोहल्ला प्रतिनिधि दस्ते',
      levelUr: 'درجہ 7: وارڈ اور محلہ نمائندہ اسکواڈز',
      badge: 'Household Level',
      descEn: 'Conducts regular welfare checkups for senior citizens and widows, assists with online E-KYC, and gathers grassroots feedback.',
      descHi: 'वरिष्ठ नागरिकों और विधवाओं की नियमित देखभाल, डिजिटल E-KYC में सहायता और जमीनी स्तर के सुझाव एकत्रित करना।',
      stats: '15,000+ Ward Squads • 50,000+ Youth & Women Volunteers',
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      titleEn: 'Citizen Proposal (Maujoo) Submission',
      titleHi: 'नागरिक प्रस्ताव (मौजूं) प्रस्तुति',
      descEn: 'Any verified member can submit a reform proposal regarding matrimonial customs, education, or community welfare via the online portal or district office.',
      descHi: 'कोई भी सत्यापित सदस्य वैवाहिक नियमों, शिक्षा या सामाजिक कल्याण से संबंधित सुधार प्रस्ताव ऑनलाइन या जिला कार्यालय के माध्यम से प्रस्तुत कर सकता है।',
      icon: '✍️'
    },
    {
      step: '02',
      titleEn: 'Sharia & Legal Committee Verification',
      titleHi: 'शरिया एवं कानूनी समिति द्वारा परीक्षण',
      descEn: 'The proposal is reviewed by specialized scholars and legal advisors to ensure strict alignment with Islamic principles and constitutional law.',
      descHi: 'प्रस्ताव का शरिया विद्वानों और कानूनी सलाहकारों द्वारा गहन परीक्षण किया जाता है ताकि यह इस्लामी सिद्धांतों और भारतीय कानून के पूर्ण अनुकूल हो।',
      icon: '⚖️'
    },
    {
      step: '03',
      titleEn: 'Digital E-Survey & Ballot Opening',
      titleHi: 'डिजिटल ई-सर्वे एवं मतदान शुभारंभ',
      descEn: 'Once approved, the proposal is launched as a national digital ballot open to all verified family heads across 28 states with OTP security.',
      descHi: 'स्वीकृति के बाद, प्रस्ताव को 28 राज्यों के सभी सत्यापित परिवार प्रमुखों के लिए OTP सुरक्षा के साथ डिजिटल मतदान हेतु लाइव किया जाता है।',
      icon: '🗳️'
    },
    {
      step: '04',
      titleEn: 'Cryptographic Consensus Tallying',
      titleHi: 'क्रिप्टोग्राफिक सहमति एवं गणना',
      descEn: 'Votes are tabulated transparently. A minimum 70% majority consensus is required for any proposal to become an officially binding social resolution.',
      descHi: 'वोटों की पारदर्शी गणना होती है। किसी भी प्रस्ताव को आधिकारिक बाध्यकारी निर्णय बनने के लिए न्यूनतम 70% बहुमत सहमति आवश्यक है।',
      icon: '🔐'
    },
    {
      step: '05',
      titleEn: 'Gazette Seal & Binding Notification',
      titleHi: 'राजपत्र मुहर एवं आधिकारिक अधिसूचना',
      descEn: 'The passed resolution is officially sealed in the Immortal Digital Gazette and broadcasted to all district and tehsil committees for enforcement.',
      descHi: 'पारित प्रस्ताव को अमर डिजिटल राजपत्र में आधिकारिक मुहर के साथ दर्ज किया जाता है और अनुपालन हेतु सभी जिला व तहसील समितियों को भेजा जाता है।',
      icon: '📜'
    },
    {
      step: '06',
      titleEn: 'Ground Scorecard & Compliance Tracking',
      titleHi: 'जमीनी निगरानी एवं अनुपालन ट्रैकिंग',
      descEn: 'District committees monitor compliance. Violation reports are handled confidentially, while top-performing districts receive community awards.',
      descHi: 'जिला समितियां अनुपालन की निगरानी करती हैं। उल्लंघन की रिपोर्ट गुप्त रखी जाती है और सर्वश्रेष्ठ प्रदर्शन करने वाले जिलों को सम्मानित किया जाता है।',
      icon: '📈'
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      qEn: 'Who is eligible to participate in digital Mahapanchayat surveys and elections?',
      qHi: 'डिजिटल महापंचायत सर्वे और चुनावों में भाग लेने के लिए कौन पात्र है?',
      aEn: 'Every registered adult member of the Rangrez community (aged 18 and above) who has completed basic digital E-KYC verification or has a valid Family ID is eligible to cast one secure vote per proposal.',
      aHi: 'रंगरेज़ समाज का प्रत्येक पंजीकृत वयस्क सदस्य (18 वर्ष और उससे अधिक) जिसने बुनियादी डिजिटल E-KYC सत्यापन पूरा कर लिया है या जिसके पास वैध फैमिली आईडी है, वह प्रति प्रस्ताव एक सुरक्षित वोट डालने के लिए पात्र है।'
    },
    {
      id: 'faq-2',
      qEn: 'How is the anonymity and security of my digital ballot guaranteed?',
      qHi: 'मेरे डिजिटल वोट की गोपनीयता और सुरक्षा कैसे सुनिश्चित की जाती है?',
      aEn: 'We utilize SHA-256 cryptographic hash encryption and mobile OTP verification. While your voting eligibility is verified to prevent duplicate votes, your actual ballot choice remains completely anonymous and cannot be traced back to your identity.',
      aHi: 'हम SHA-256 क्रिप्टोग्राफिक हैश एन्क्रिप्शन और मोबाइल OTP सत्यापन का उपयोग करते हैं। दोहरे मतदान को रोकने के लिए आपकी पात्रता की जांच की जाती है, लेकिन आपका वास्तविक वोट पूर्णतः गुप्त रहता है।'
    },
    {
      id: 'faq-3',
      qEn: 'Are Mahapanchayat resolutions legally and socially binding on community members?',
      qHi: 'क्या महापंचायत के प्रस्ताव समाज के सदस्यों पर कानूनी और सामाजिक रूप से बाध्यकारी हैं?',
      aEn: 'Yes, resolutions passed with over 70% consensus representing our collective moral and social charter. They serve as binding guidelines for community weddings, ceremonies, and dispute settlements across all state chapters.',
      aHi: 'हाँ, 70% से अधिक सहमति से पारित प्रस्ताव हमारे सामूहिक नैतिक और सामाजिक चार्टर का प्रतिनिधित्व करते हैं। ये सभी प्रदेश इकाइयों में सामाजिक समारोहों और विवाद समाधान के लिए बाध्यकारी दिशा-निर्देश हैं।'
    },
    {
      id: 'faq-4',
      qEn: 'How can our local village or tehsil committee register on the digital platform?',
      qHi: 'हमारी स्थानीय ग्राम या तहसील समिति डिजिटल प्लेटफॉर्म पर कैसे पंजीकरण कर सकती है?',
      aEn: 'Any local committee can apply via the "Committee Dashboard" tab by submitting their executive office bearers list, district recommendation letter, and area jurisdiction details for instant onboarding.',
      aHi: 'कोई भी स्थानीय समिति "समिति डैशबोर्ड" टैब के माध्यम से अपने पदाधिकारियों की सूची, जिला सिफारिश पत्र और अधिकार क्षेत्र का विवरण देकर तुरंत ऑनबोर्डिंग हेतु आवेदन कर सकती है।'
    },
    {
      id: 'faq-5',
      qEn: 'What happens if a member or family violates an approved austerity resolution (e.g. excessive dowry display)?',
      qHi: 'यदि कोई परिवार पारित सादगी प्रस्ताव (जैसे दहेज प्रदर्शन या मृत्युभोज) का उल्लंघन करता है तो क्या होता है?',
      aEn: 'Violations can be reported via the confidential Implementation Tracker. The local District Sharia & Welfare Committee will initiate respectful counseling, peer mediation, and corrective dialogue without harsh public shaming.',
      aHi: 'उल्लंघन की सूचना गुप्त रिपोर्टिंग चैनल के माध्यम से दी जा सकती है। स्थानीय जिला समिति बिना किसी सार्वजनिक अपमान के सम्मानजनक परामर्श, सुलाह और सुधारात्मक संवाद की प्रक्रिया शुरू करती है।'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.qEn.toLowerCase().includes(faqSearch.toLowerCase()) ||
    f.qHi.includes(faqSearch)
  );

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-8 animate-fadeIn text-[#0B132B] my-8">
      {/* Top Title Banner */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest">
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>{getText('Constitutional Governance Architecture', 'संविधानिक प्रशासनिक संरचना एवं कार्यप्रणाली', 'آئینی انتظامی ڈھانچہ اور طریقہ کار')}</span>
        </span>
        <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
          {getText(
            'Organizational Framework & Decision Workflow',
            'महापंचायत प्रशासनिक ढांचा एवं निर्णय प्रक्रिया',
            'مہاپنچایت تنظیمی ڈھانچہ اور فیصلہ سازی کا عمل'
          )}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          {getText(
            'Explore our 7-tier democratic governance pyramid extending from the National Apex Assembly down to 15,000+ ward squads, and understand how every citizen proposal becomes an immortal resolution.',
            'राष्ट्रीय सर्वोच्च महासभा से लेकर 15,000+ वार्ड दस्तों तक फैली हमारी 7-स्तरीय लोकतांत्रिक प्रशासनिक व्यवस्था को जानें, और समझें कि कैसे प्रत्येक नागरिक का प्रस्ताव एक अमर निर्णय बनता है।',
            'قومی سپریم اسمبلی سے لے کر 15,000+ وارڈ اسکواڈز تک پھیلے ہمارے 7-درجہ جمہوری انتظامی اہرام کو جانیں، اور سمجھیں کہ کس طرح ہر شہری کی تجویز ایک لازوال فیصلہ بنتی ہے۔'
          )}
        </p>
      </div>

      {/* Sub-Navigation Buttons */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 border-b border-gray-100 pb-4">
        {[
          { id: 'hierarchy', labelEn: '🏛️ 7-Tier Organizational Pyramid', labelHi: '🏛️ 7-स्तरीय प्रशासनिक ढांचा' },
          { id: 'workflow', labelEn: '🔄 6-Step Decision Making Process', labelHi: '🔄 6-चरणीय निर्णय प्रक्रिया' },
          { id: 'faq', labelEn: '❓ Governance FAQs', labelHi: '❓ सामान्य प्रश्न एवं उत्तर' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition duration-200 border ${
              activeTab === t.id
                ? 'bg-[#004B23] text-[#FFD54A] border-[#004B23] shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-[#004B23]'
            }`}
          >
            {getText(t.labelEn, t.labelHi)}
          </button>
        ))}
      </div>

      {/* TAB 1: 7-TIER HIERARCHY PYRAMID */}
      {activeTab === 'hierarchy' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-emerald-50 p-4 sm:p-6 rounded-2xl border border-emerald-100 text-center space-y-1">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider block">Democratic Grassroots Integration</span>
            <p className="text-xs sm:text-sm text-gray-700">
              {getText(
                'Our governance model ensures total decentralization: policies are drafted by grassroots ward cells and ratified by the National Assembly.',
                'हमारा प्रशासनिक मॉडल पूर्ण विकेंद्रीकरण सुनिश्चित करता है: नीतियां जमीनी वार्ड इकाइयों द्वारा सुझाई जाती हैं और राष्ट्रीय सभा द्वारा सर्वसम्मति से पारित की जाती हैं।',
                'ہمارا انتظامی ماڈل مکمل غیر مرکزیت کو یقینی بناتا ہے: پالیسیاں وارڈ سطح پر تجویز کی جاتی ہیں اور قومی اسمبلی کے ذریعے منظور کی جاتی ہیں۔'
              )}
            </p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-100 text-gray-600 font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded border border-gray-200">
                      Tier 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {tier.badge}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">
                    {getText(tier.level, tier.levelHi, tier.levelUr)}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {getText(tier.descEn, tier.descHi)}
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-500 shrink-0 self-stretch md:self-center flex items-center justify-center text-center">
                  📍 {tier.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: 6-STEP DECISION MAKING WORKFLOW */}
      {activeTab === 'workflow' && (
        <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((ws, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 relative overflow-hidden group hover:border-emerald-200 hover:shadow-md transition duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 bg-gray-50 rounded-xl border border-gray-100 shrink-0 group-hover:scale-110 group-hover:bg-white transition">
                    {ws.icon}
                  </span>
                  <span className="text-2xl font-mono font-black text-gray-100 group-hover:text-emerald-100 transition">
                    STEP {ws.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition pt-1">
                  {getText(ws.titleEn, ws.titleHi)}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {getText(ws.descEn, ws.descHi)}
                </p>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-200">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center space-y-2 shadow-inner">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">🔒 Cryptographic Integrity Guarantee</span>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto font-light">
              {getText(
                'Every step of this workflow is immutable. Once a proposal passes with 70%+ consensus, its SHA-256 hash is published in our permanent digital archives, protecting it from political interference or tampering.',
                'इस प्रक्रिया का प्रत्येक चरण अपरिवर्तनीय है। जब कोई प्रस्ताव 70%+ सहमति के साथ पारित होता है, तो उसका SHA-256 हैश हमारे स्थायी डिजिटल आर्काइव में प्रकाशित होता है, जिससे किसी भी प्रकार की छेड़छाड़ असंभव हो जाती है।',
                'اس عمل کا ہر قدم ناقابل تبدیلی ہے۔ جب کوئی تجویز 70%+ اتفاق رائے سے منظور ہوتی ہے، تو اس کا SHA-256 ہیش ہمارے مستقل ڈیجیٹل آرکائیو میں شائع ہوتا ہے، جس سے کسی بھی قسم کی مداخلت ناممکن ہو جاتی ہے۔'
              )}
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: GOVERNANCE FAQS ACCORDION */}
      {activeTab === 'faq' && (
        <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
          {/* FAQ Search Bar */}
          <div className="relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder={getText('Search governance questions...', 'प्रशासनिक प्रश्न खोजें...', 'انتظامی سوالات تلاش کریں...')}
              className="w-full bg-white text-sm text-gray-900 pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-emerald-500 shadow-sm"
            />
          </div>

          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-2xl border border-gray-100">
                <HelpCircle className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                <p>{getText('No matching questions found.', 'कोई संबंधित प्रश्न नहीं मिला।', 'کوئی متعلقہ سوال نہیں ملا۔')}</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-gray-200 transition duration-200"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                    >
                      <span className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-3">
                        <span className="text-emerald-600 font-mono shrink-0">❓</span>
                        <span>{getText(faq.qEn, faq.qHi)}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50 font-light space-y-3 animate-fadeIn">
                        <p>{getText(faq.aEn, faq.aHi)}</p>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 w-fit">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{getText('Verified Constitutional Policy Answer', 'सत्यापित संविधानिक उत्तर', 'تصدیق شدہ آئینی جواب')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
