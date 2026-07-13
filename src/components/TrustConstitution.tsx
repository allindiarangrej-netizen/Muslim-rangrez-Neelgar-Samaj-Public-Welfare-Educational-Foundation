import { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  Award, 
  Scale, 
  Users, 
  Landmark, 
  CheckCircle2, 
  Printer, 
  Download, 
  Search, 
  AlertCircle, 
  HeartHandshake, 
  Lock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Share2,
  Sparkles,
  X,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

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

const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
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
          ur: '1.2 عوامی شناخت اور برادری کا نام'
        },
        text: {
          en: 'For national unity, general public branding, web portals, and social cohesion across India, the organization shall operate under the unified brand name "All India Rangrez Samaj Trust / Mahasabha" (Rangrez Community Bharat).',
          hi: 'राष्ट्रीय एकता, सामान्य जनसंपर्क, वेबसाइट पोर्टल और पूरे भारत में सामाजिक एकजुटता के लिए संगठन एकीकृत नाम "अखिल भारतीय रंगरेज समाज ट्रस्ट / महासभा" (रंगरेज कम्युनिटी भारत) के तहत कार्य करेगा।',
          ur: 'قومی اتحاد، عام عوامی رابطے، ویب پورٹلز اور پورے ہندوستان میں سماجی یکجہتی کے لیے، تنظیم متفقہ نام "آل انڈیا رنگریز سماج ٹرسٹ / مہاپنچایت" (رنگریز کمیونٹی بھارت) کے تحت کام کرے گی۔'
        }
      },
      {
        title: {
          en: '1.3 Constitutional Fidelity & National Brotherhood',
          hi: '1.3 संवैधानिक निष्ठा एवं राष्ट्रीय भाईचारा',
          ur: '1.3 آئینی وفاداری اور قومی بھائی چارہ'
        },
        text: {
          en: 'The Trust reaffirms its unshakeable commitment to the Constitution of India, national integrity, secularism, and democratic values. All activities, welfare schemes, and resolutions shall strictly conform to the laws of the land and promote inter-community harmony.',
          hi: 'ट्रस्ट भारत के संविधान, राष्ट्रीय अखंडता, धर्मनिरपेक्षता और लोकतांत्रिक मूल्यों के प्रति अपनी अटूट प्रतिबद्धता की पुष्टि करता है। सभी गतिविधियां, कल्याणकारी योजनाएं और प्रस्ताव कानून के दायरे में रहकर सांप्रदायिक सौहार्द को बढ़ावा देंगे।',
          ur: 'ٹرسٹ آئینِ ہند، قومی سالمیت، سیکولرازم اور جمہوری اقدار کے ساتھ اپنے غیر متزلزل عزم کی تصدیق کرتا ہے۔ تمام سرگرمیاں، فلاحی اسکیمیں اور قراردادیں ملک کے قانون کے مکمل مطابق ہوں گی اور باہمی ہم آہنگی کو فروغ دیں گی۔'
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
      ur: 'تعلیم، طبی امداد، دستکاروں کی ترقی، مردم شماری اور سماجی اصلاحات کے تفصیلی اصول۔'
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
      },
      {
        title: {
          en: '3.2 Healthcare Assistance & Ayushman Bharat Integration',
          hi: '3.2 चिकित्सा सहायता एवं आयुष्मान भारत एकीकरण',
          ur: '3.2 طبی امداد اور آیوشمان بھارت کا نفاذ'
        },
        text: {
          en: 'To provide immediate medical financial aid for critical illnesses, organ transplants, and surgeries. The Trust shall actively assist every community family in enrolling under government schemes like Ayushman Bharat and organize free medical camps, blood donation drives, and ambulance networks.',
          hi: 'गंभीर बीमारियों, ऑपरेशन और आपातकालीन स्थिति में तुरंत चिकित्सा आर्थिक सहायता प्रदान करना। ट्रस्ट प्रत्येक परिवार को आयुष्मान भारत जैसी सरकारी योजनाओं से जोड़ने में मदद करेगा तथा मुफ्त स्वास्थ्य शिविर, रक्तदान अभियान और एम्बुलेंस नेटवर्क का संचालन करेगा।',
          ur: 'شدید بیماریوں، آپریشن اور ہنگامی صورتحال میں فوری طبی مالی امداد فراہم کرنا۔ ٹرسٹ ہر خاندان کو آیوشمان بھارت جیسی سرکاری اسکیموں سے جوڑنے میں مدد کرے گا اور مفت طبی کیمپ و بلڈ ڈونیشن مہم کا انعقاد کرے گا۔'
        }
      },
      {
        title: {
          en: '3.3 Artisan Micro-Finance & Traditional Dyeing Revival',
          hi: '3.3 कारीगर सूक्ष्म-ऋण एवं पारंपरिक रंगाई कला पुनरुद्धार',
          ur: '3.3 دستکاروں کے لیے مائیکرو فنانس اور رنگائی فن کا احیاء'
        },
        text: {
          en: 'To safeguard and modernize the ancestral heritage of natural dyeing, Bandhani, Leheriya, and Handblock printing. The Trust shall provide interest-free micro-finance (Qard-e-Hasana), technology upskilling grants, e-commerce market linkages, and copyright/GI tag protection for Rangrez artisans.',
          hi: 'प्राकृतिक रंगाई, बंधेज, लहरिया और हैंडब्लॉक प्रिंटिंग की पैतृक विरासत को संरक्षित और आधुनिक बनाना। ट्रस्ट रंगरेज कारीगरों को ब्याज मुक्त सूक्ष्म ऋण (कर्ज-ए-हसना), तकनीकी प्रशिक्षण, ई-कॉमर्स बाजार से जुड़ाव और जीआई टैग संरक्षण प्रदान करेगा।',
          ur: 'قدرتی رنگائی، بندھیج، لہریا اور ہینڈ بلاک پرنٹنگ کے آبائی ورثے کا تحفظ اور جدید کاری۔ ٹرسٹ رنگریز دستکاروں کو بلا سود قرضِ حسنہ، تکنیکی تربیت، ای کامرس مارکیٹ سے جوڑنے اور قانونی تحفظ کی سہولت دے گا۔'
        }
      },
      {
        title: {
          en: '3.4 Dowry-Free Nikah & Social Reform Mission',
          hi: '3.4 दहेज मुक्त निकाह एवं सामाजिक कुरीति उन्मूलन',
          ur: '3.4 جہیز سے پاک نکاح اور سماجی اصلاحات'
        },
        text: {
          en: 'To completely eradicate dowry demands, extravagant wedding expenditures, and un-Islamic/unnecessary social rituals. The Trust shall promote simple Sunnah marriages, organize annual mass marriages (Samuhik Nikah), and honor families who set exemplary simplicity benchmarks.',
          hi: 'दहेज की मांग, शादियों में अत्यधिक फिजूलखर्ची और अनावश्यक सामाजिक कुरीतियों को पूर्णतः समाप्त करना। ट्रस्ट सरल निकाह को बढ़ावा देगा, वार्षिक सामूहिक विवाह (सामूहिक निकाह) आयोजित करेगा और सादगी की मिसाल कायम करने वाले परिवारों को सम्मानित करेगा।',
          ur: 'جہیز کے مطالبے، شادیوں میں فضول خرچی اور غیر ضروری رسومات کا مکمل خاتمہ۔ ٹرسٹ سادہ سنت نکاح کو فروغ دے گا، سالانہ اجتماعی شادیوں کا انعقاد کرے گا اور سادگی کی مثال قائم کرنے والے خاندانوں کو اعزاز سے نوازے گا۔'
        }
      },
      {
        title: {
          en: '3.5 Digital Family Census & National Directory',
          hi: '3.5 डिजिटल परिवार जनगणना एवं राष्ट्रीय निर्देशिका',
          ur: '3.5 ڈیجیٹل خاندانی مردم شماری اور قومی ڈائریکٹری'
        },
        text: {
          en: 'To conduct and continuously update a verified digital census of all Rangrez households across India. This demographic database shall be utilized strictly for welfare distribution, scholarship allocation, employment matching, and matrimonial compatibility verification.',
          hi: 'पूरे भारत में सभी रंगरेज परिवारों की एक सत्यापित डिजिटल जनगणना आयोजित करना और उसे निरंतर अपडेट रखना। इस जनसांख्यिकीय डेटाबेस का उपयोग केवल कल्याणकारी योजनाओं के वितरण, छात्रवृत्ति आवंटन, रोजगार सहायता और वैवाहिक सत्यापन के लिए किया जाएगा।',
          ur: 'پورے ہندوستان میں تمام رنگریز گھرانوں کی تصدیق شدہ ڈیجیٹل مردم شماری کرنا اور اسے اپڈیٹ رکھنا۔ اس ڈیٹا بیس کا استعمال صرف فلاحی اسکیموں کی تقسیم، اسکالرشپ، روزگار اور شادی بیاہ کی تصدیق کے لیے کیا جائے گا۔'
        }
      }
    ]
  },
  {
    id: 'art-4',
    articleNo: 'Article 4 / अनुच्छेद 4',
    category: 'membership',
    title: {
      en: 'Membership Categories, Rights & Code of Conduct',
      hi: 'सदस्यता श्रेणियां, अधिकार एवं आचार संहिता',
      ur: 'رکنیت کے زمرے، حقوق اور ضابطہ اخلاق'
    },
    summary: {
      en: 'Defines who can join, voting entitlements, moral obligations, and disciplinary rules.',
      hi: 'सदस्यता की योग्यता, मतदान के अधिकार, नैतिक दायित्व और अनुशासनात्मक नियम निर्धारित करता है।',
      ur: 'رکنیت کی اہلیت، ووٹ کے حقوق، اخلاقی ذمہ داریاں اور انضباطی قوانین کا تعین کرتا ہے۔'
    },
    clauses: [
      {
        title: {
          en: '4.1 Eligibility & Open Fraternity',
          hi: '4.1 पात्रता एवं खुली बिरादरी',
          ur: '4.1 اہلیت اور برادری کی شمولیت'
        },
        text: {
          en: 'Any adult (18+ years) belonging to the Muslim Rangrez (Neelgar, Leelgar, Chhipa, Sabbagh, Dyer) community of good moral character, who agrees in writing to abide by the Trust Constitution, is eligible for membership upon verification by the District/State Committee.',
          hi: 'मुस्लिम रंगरेज (नीलगर, लीलगर, छीपा, सब्बाग, रंगाई कारीगर) समुदाय का कोई भी वयस्क (18+ वर्ष) नागरिक जिसका चरित्र उत्तम हो और जो लिखित रूप में ट्रस्ट के संविधान का पालन करने की सहमति दे, जिला/राज्य समिति के सत्यापन पर सदस्य बनने का पात्र है।',
          ur: 'مسلم رنگریز (نیلگر، لیلگر، چھیپا، صبّاغ، رنگائی دستکار) برادری کا کوئی بھی بالغ (18+ سال) فرد جو اچھے کردار کا حامل ہو اور تحریری طور پر ٹرسٹ کے آئین کی پابندی کا اقرار کرے، ضلعی/ریاستی کمیٹی کی تصدیق پر رکن بننے کا اہل ہے۔'
        }
      },
      {
        title: {
          en: '4.2 Membership Tiers & Voting Entitlements',
          hi: '4.2 सदस्यता श्रेणियां एवं मतदान अधिकार',
          ur: '4.2 رکنیت کے درجے اور ووٹ کا حق'
        },
        text: {
          en: 'The Society shall comprise: (a) Patron Members (Founders & major endowment donors), (b) Life Members (One-time contribution), and (c) Active Annual Members. Every verified Life and Active member who has completed 1 year of unbroken standing shall enjoy equal secret-ballot voting rights in the election of office bearers.',
          hi: 'सोसाइटी में शामिल होंगे: (क) संरक्षक सदस्य (संस्थापक एवं मुख्य दानदाता), (ख) आजीवन सदस्य (एकमुश्त सहयोग), और (ग) सक्रिय वार्षिक सदस्य। प्रत्येक सत्यापित आजीवन और सक्रिय सदस्य जिसने 1 वर्ष की निरंतर सदस्यता पूरी कर ली है, उसे पदाधिकारी चुनाव में गुप्त मतदान का समान अधिकार प्राप्त होगा।',
          ur: 'سوسائٹی پر مشتمل ہوگی: (الف) سرپرست اراکین، (ب) تاحیات اراکین، اور (ج) فعال سالانہ اراکین۔ ہر تصدیق شدہ تاحیات اور فعال رکن جس نے 1 سال کی مدت پوری کر لی ہو، اسے عہدیداروں کے انتخاب میں خفیہ بیلٹ کے ذریعے ووٹ کا مساوی حق حاصل ہوگا۔'
        }
      },
      {
        title: {
          en: '4.3 Disciplinary Actions & Termination of Membership',
          hi: '4.3 अनुशासनात्मक कार्रवाई एवं सदस्यता समाप्ति',
          ur: '4.3 انضباطی کارروائی اور رکنیت کی منسوخی'
        },
        text: {
          en: 'Membership shall be immediately terminated by the Executive Council if a member is found guilty of: (a) Misappropriation of Trust funds, (b) demanding dowry or engaging in anti-social/criminal activities, (c) spreading communal hatred, or (d) acting against the aims of the Mahasabha. A fair show-cause notice and hearing shall precede any expulsion.',
          hi: 'यदि कोई सदस्य: (क) ट्रस्ट के धन के दुरुपयोग, (ख) दहेज की मांग या असामाजिक/आपराधिक गतिविधियों, (ग) सांप्रदायिक नफरत फैलाने, या (घ) महासभा के लक्ष्यों के विरुद्ध कार्य करने का दोषी पाया जाता है, तो कार्यकारिणी द्वारा उसकी सदस्यता तुरंत समाप्त कर दी जाएगी। निष्कासन से पूर्व कारण बताओ नोटिस और निष्पक्ष सुनवाई का अवसर दिया जाएगा।',
          ur: 'اگر کوئی رکن: (الف) ٹرسٹ کے فنڈز میں غبن، (ب) جہیز کے مطالبے یا غیر قانونی سرگرمیوں، (ج) منافرت پھیلانے، یا (د) مہاپنچایت کے مقاصد کے خلاف کام کرنے کا مجرم پایا گیا، تو مجلس شوریٰ اس کی رکنیت فوراً منسوخ کر دے گی۔ برطرفی سے قبل شوکاز نوٹس اور منصفانہ سماعت کا موقع دیا جائے گا۔'
        }
      }
    ]
  },
  {
    id: 'art-5',
    articleNo: 'Article 5 / अनुच्छेद 5',
    category: 'governance',
    title: {
      en: 'Governance & Supreme Executive Council (Majlis-e-Shura)',
      hi: 'प्रशासनिक ढांचा एवं राष्ट्रीय सर्वोच्च कार्यकारिणी (मजलिस-ए-शूरा)',
      ur: 'تنظیمی ڈھانچہ اور قومی مجلسِ شوریٰ'
    },
    summary: {
      en: 'Structure of office bearers, election cycles, and division of executive responsibilities.',
      hi: 'पदाधिकारियों की संरचना, चुनाव चक्र और कार्यकारी जिम्मेदारियों का विभाजन।',
      ur: 'عہدیداروں کا ڈھانچہ، انتخابی عمل اور انتظامی ذمہ داریوں کی تقسیم۔'
    },
    clauses: [
      {
        title: {
          en: '5.1 Composition of National Executive Council',
          hi: '5.1 राष्ट्रीय कार्यकारिणी समिति का गठन',
          ur: '5.1 قومی مجلس شوریٰ کی تشکیل'
        },
        text: {
          en: 'The governance of the Trust shall vest in the National Supreme Executive Council comprising 21 elected/nominated members: 1 National President (Sadr), 4 Vice Presidents (regional representation), 1 General Secretary (Mahasachiv), 3 Joint Secretaries, 1 Treasurer (Koshadhyaksha), 1 Legal Advisor, and 10 Executive Members including mandatory representation from Youth and Women wings.',
          hi: 'ट्रस्ट का प्रशासन 21 निर्वाचित/मनोनीत सदस्यों वाली राष्ट्रीय सर्वोच्च कार्यकारिणी में निहित होगा: 1 राष्ट्रीय अध्यक्ष (सद्र), 4 उपाध्यक्ष (क्षेत्रीय प्रतिनिधित्व), 1 महासचिव, 3 संयुक्त सचिव, 1 कोषाध्यक्ष, 1 कानूनी सलाहकार, और युवा एवं महिला प्रकोष्ठ के अनिवार्य प्रतिनिधित्व सहित 10 कार्यकारी सदस्य।',
          ur: 'ٹرسٹ کا انتظام 21 منتخب/نامزد اراکین پر مشتمل قومی مجلس شوریٰ کے پاس ہوگا: 1 قومی صدر، 4 نائب صدور، 1 جنرل سکریٹری، 3 جوائنٹ سکریٹری، 1 خزانچی، 1 قانونی مشیر، اور یوتھ و ویمن ونگ کی نمائندگی سمیت 10 ایگزیکٹو ممبران۔'
        }
      },
      {
        title: {
          en: '5.2 Duties of National President & General Secretary',
          hi: '5.2 राष्ट्रीय अध्यक्ष एवं महासचिव के अधिकार व कर्तव्य',
          ur: '5.2 قومی صدر اور جنرل سکریٹری کے اختیارات اور فرائض'
        },
        text: {
          en: 'The President shall preside over all Mahapanchayat sessions, exercise emergency administrative powers, and represent the community before government authorities. The General Secretary shall manage daily administration, maintain official minutes, execute council resolutions, and supervise state branch coordinators.',
          hi: 'अध्यक्ष सभी महापंचायत अधिवेशनों की अध्यक्षता करेंगे, आपातकालीन प्रशासनिक अधिकारों का प्रयोग करेंगे और सरकारी निकायों के समक्ष समुदाय का प्रतिनिधित्व करेंगे। महासचिव दैनिक प्रशासन संभालेंगे, आधिकारिक कार्यवृत्त (मिनट्स) बनाए रखेंगे, कार्यकारिणी के प्रस्तावों को लागू करेंगे और राज्य समन्वयकों की निगरानी करेंगे।',
          ur: 'صدر تمام مہاپنچایت اجلاسوں کی صدارت کریں گے، ہنگامی انتظامی اختیارات استعمال کریں گے اور سرکاری اداروں میں برادری کی نمائندگی کریں گے۔ جنرل سکریٹری روزمرہ کے انتظامی امور، سرکاری کارروائی کا ریکارڈ اور ریاستی کوآرڈینیٹرز کی نگرانی کریں گے۔'
        }
      },
      {
        title: {
          en: '5.3 Tenure & Democratic Election Cycle',
          hi: '5.3 कार्यकाल एवं लोकतांत्रिक चुनाव प्रक्रिया',
          ur: '5.3 مدتِ کار اور جمہوری انتخابی عمل'
        },
        text: {
          en: 'The tenure of all elected office bearers shall be 3 (three) years. No individual shall hold the post of National President or General Secretary for more than 2 consecutive terms. Elections shall be conducted transparently under an independent Election Officer appointed by the Advisory Board.',
          hi: 'सभी निर्वाचित पदाधिकारियों का कार्यकाल 3 (तीन) वर्ष होगा। कोई भी व्यक्ति लगातार 2 कार्यकाल से अधिक समय तक राष्ट्रीय अध्यक्ष या महासचिव के पद पर नहीं रहेगा। चुनाव सलाहकार बोर्ड द्वारा नियुक्त एक स्वतंत्र चुनाव अधिकारी की देखरेख में पारदर्शी रूप से संपन्न होंगे।',
          ur: 'تمام منتخب عہدیداروں کی مدتِ کار 3 (تین) سال ہوگی۔ کوئی بھی فرد مسلسل 2 مرتبہ سے زیادہ قومی صدر یا جنرل سکریٹری کے عہدے پر نہیں رہ سکے گا۔ انتخابات مشاورتی بورڈ کے مقرر کردہ الیکشن آفیسر کی نگرانی میں شفاف طریقے سے ہوں گے۔'
        }
      }
    ]
  },
  {
    id: 'art-6',
    articleNo: 'Article 6 / अनुच्छेद 6',
    category: 'finance',
    title: {
      en: 'Financial Code, Bank Accounts & Zakat Management',
      hi: 'वित्तीय नियमावली, बैंक खाता एवं जकात प्रबंधन',
      ur: 'مالیاتی ضوابط، بینک اکاؤنٹس اور زکوٰۃ مینجمنٹ'
    },
    summary: {
      en: 'Mandatory digital banking, strict Zakat fund separation, and annual Chartered Accountant audits.',
      hi: 'अनिवार्य डिजिटल बैंकिंग, जकात कोष का पृथक्करण और वार्षिक चार्टर्ड अकाउंटेंट ऑडिट।',
      ur: 'لازمی ڈیجیٹل بینکنگ، زکوٰۃ فنڈ کی علیحدگی اور سالانہ چارٹرڈ اکاؤنٹنٹ آڈٹ۔'
    },
    clauses: [
      {
        title: {
          en: '6.1 100% Digital Banking & Zero Cash Collection',
          hi: '6.1 शत-प्रतिशत डिजिटल बैंकिंग एवं शून्य नकद संग्रह',
          ur: '6.1 100% ڈیجیٹل بینکنگ اور نقد جمع کرنے پر پابندی'
        },
        text: {
          en: 'To maintain absolute financial purity, all donations, membership fees, subsidies, and Zakat contributions MUST be deposited directly into official Trust bank accounts via UPI, NEFT, RTGS, or cheques. Cash collections by any individual or volunteer are strictly declared illegal and punishable under Trust rules.',
          hi: 'पूर्ण वित्तीय पारदर्शिता बनाए रखने के लिए, सभी दान, सदस्यता शुल्क और जकात सहयोग अनिवार्य रूप से केवल UPI, NEFT, RTGS या चेक के माध्यम से ट्रस्ट के आधिकारिक बैंक खातों में जमा किए जाएंगे। किसी भी व्यक्ति या स्वयंसेवक द्वारा नकद संग्रह पूर्णतः अवैध और दंडनीय घोषित किया गया है।',
          ur: 'مکمل مالیاتی شفافیت کے لیے، تمام عطیات، ممبرشپ فیس اور زکوٰۃ لازمی طور پر صرف UPI، NEFT، RTGS یا چیک کے ذریعے ٹرسٹ کے سرکاری بینک اکاؤنٹس میں جمع ہوں گے۔ کسی بھی فرد یا رضا کار کے ذریعے نقد رقم جمع کرنا مکمل طور پر غیر قانونی اور قابلِ سزا ہے۔'
        }
      },
      {
        title: {
          en: '6.2 Strict Separation of Zakat & General Funds',
          hi: '6.2 जकात एवं सामान्य कोष का सख्त पृथक्करण',
          ur: '6.2 زکوٰۃ اور عام فنڈز کی علیحدگی'
        },
        text: {
          en: 'The Treasurer shall maintain separate, audited sub-accounts for: (a) General Welfare & Infrastructure Fund, and (b) Zakat & Sadaqah Fund. Zakat funds shall never be used for administrative expenses, office rents, or events, and shall be disbursed 100% directly to verified educational tuition for orphans/poor students and critical medical relief.',
          hi: 'कोषाध्यक्ष निम्नलिखित के लिए पृथक, ऑडिटेड उप-खाते बनाए रखेंगे: (क) सामान्य कल्याण एवं प्रशासनिक कोष, और (ख) जकात एवं सदका कोष। जकात के धन का उपयोग कभी भी प्रशासनिक खर्चों, कार्यालय किराए या कार्यक्रमों के लिए नहीं किया जाएगा, बल्कि 100% राशि सीधे अनाथों/गरीब छात्रों की शिक्षा और चिकित्सा सहायता के लिए दी जाएगी।',
          ur: 'خزانچی مندرجہ ذیل کے لیے الگ، آڈٹ شدہ اکاؤنٹس رکھیں گے: (الف) عام فلاحی اور انتظامی فنڈ، اور (ب) زکوٰۃ و صدقات فنڈ۔ زکوٰۃ کی رقم کبھی بھی انتظامی اخراجات، دفتر کے کرایے یا تقریبات میں استعمال نہیں ہوگی، بلکہ 100% رقم یتیموں اور غریب طلبہ کی فیس اور طبی امداد پر خرچ ہوگی۔'
        }
      },
      {
        title: {
          en: '6.3 Annual Chartered Accountant Audit & Public Publication',
          hi: '6.3 वार्षिक चार्टर्ड अकाउंटेंट ऑडिट एवं सार्वजनिक प्रकाशन',
          ur: '6.3 سالانہ چارٹرڈ اکاؤنٹنٹ آڈٹ اور عوامی اشاعت'
        },
        text: {
          en: 'The books of accounts shall be closed on 31st March every financial year and audited by a certified external Chartered Accountant. The complete audited balance sheet and income-expenditure statement shall be published on the official website and presented in the Annual General Meeting for public scrutiny.',
          hi: 'प्रत्येक वित्तीय वर्ष 31 मार्च को खाते बंद किए जाएंगे और एक प्रमाणित बाहरी चार्टर्ड अकाउंटेंट द्वारा उनका ऑडिट किया जाएगा। पूर्ण ऑडिटेड बैलेंस शीट और आय-व्यय विवरण आधिकारिक वेबसाइट पर प्रकाशित किया जाएगा और सार्वजनिक जांच के लिए वार्षिक आम सभा में प्रस्तुत किया जाएगा।',
          ur: 'ہر مالی سال 31 مارچ کو اکاؤنٹس بند ہوں گے اور مصدقہ چارٹرڈ اکاؤنٹنٹ کے ذریعے ان کا آڈٹ کیا جائے گا۔ مکمل آڈٹ شدہ بیلنس شیٹ اور آمدنی و خرچ کی رپورٹ سرکاری ویب سائٹ پر شائع کی جائے گی اور سالانہ اجلاس میں عوامی جائزے کے لیے پیش ہوگی۔'
        }
      }
    ]
  },
  {
    id: 'art-7',
    articleNo: 'Article 7 / अनुच्छेद 7',
    category: 'disputes',
    title: {
      en: 'Dispute Resolution, Conciliation & Constitutional Amendments',
      hi: 'विवाद निवारण, सुलह समिति एवं नियमावली संशोधन',
      ur: 'تنازعات کا حل، مصالحتی کمیٹی اور ترامیم'
    },
    summary: {
      en: 'Internal community arbitration for family harmony and 2/3rd supermajority rules for by-law amendments.',
      hi: 'पारिवारिक सौहार्द के लिए आंतरिक सामुदायिक सुलह व्यवस्था और नियमावली संशोधन के लिए 2/3 बहुमत का नियम।',
      ur: 'خاندانی ہم آہنگی کے لیے داخلی مصالحتی نظام اور ترامیم کے لیے 2/3 اکثریت کا قانون۔'
    },
    clauses: [
      {
        title: {
          en: '7.1 Community Conciliation & Arbitration Panel (Sulah Samiti)',
          hi: '7.1 सामुदायिक न्याय एवं सुलह समिति (मजलिस-ए-सुलह)',
          ur: '7.1 برادری مصالحتی اور پنچایتی کمیٹی'
        },
        text: {
          en: 'To save community families from prolonged judicial litigation and heavy legal expenses, the Trust shall establish an internal Arbitration Panel comprising respected elders, retired judges, legal experts, and Islamic scholars. This panel shall offer free conciliation in matrimonial disputes, property division, and business disagreements with mutual consent.',
          hi: 'समुदाय के परिवारों को लंबे अदालती मुकदमों और भारी कानूनी खर्चों से बचाने के लिए, ट्रस्ट सम्मानित बुजुर्गों, सेवानिवृत्त न्यायाधीशों, कानूनी विशेषज्ञों और विद्वानों की एक आंतरिक सुलह समिति स्थापित करेगा। यह समिति आपसी सहमति से वैवाहिक विवादों, संपत्ति विभाजन और आपसी मतभेदों में निःशुल्क सुलह करवाएगी।',
          ur: 'برادری کے خاندانوں کو طویل عدالتی مقدمات اور بھاری قانونی اخراجات سے بچانے کے لیے، ٹرسٹ معزز بزرگوں، ریٹائرڈ ججوں، ماہرینِ قانون اور علماء پر مشتمل ایک داخلی مصالحتی کمیٹی قائم کرے گا۔ یہ کمیٹی باہمی رضامندی سے ازدواجی تنازعات اور جائیداد کی تقسیم میں مفت صلح کروائے گی۔'
        }
      },
      {
        title: {
          en: '7.2 Constitutional Amendment Procedure',
          hi: '7.2 संविधान एवं नियमावली संशोधन प्रक्रिया',
          ur: '7.2 آئین اور ضوابط میں ترمیم کا طریقہ کار'
        },
        text: {
          en: 'No article, clause, or by-law of this Constitution shall be altered, deleted, or amended unless proposed by at least 10 Executive Members and approved by a 2/3rd (two-thirds) supermajority of active voting members present in a specially convened National Mahapanchayat Session with 30 days prior notice.',
          hi: 'इस संविधान के किसी भी अनुच्छेद, खंड या नियम में तब तक कोई संशोधन, परिवर्तन या निरस्तीकरण नहीं किया जाएगा जब तक कि कम से कम 10 कार्यकारी सदस्यों द्वारा प्रस्ताव न लाया जाए और 30 दिनों की पूर्व सूचना के साथ बुलाए गए विशेष राष्ट्रीय महापंचायत अधिवेशन में उपस्थित 2/3 (दो-तिहाई) सक्रिय सदस्यों द्वारा इसे अनुमोदित न किया जाए।',
          ur: 'اس آئین کے کسی بھی آرٹیکل، شق یا قانون میں اس وقت تک کوئی ترمیم یا تبدیلی نہیں ہوگی جب تک کہ کم از کم 10 ایگزیکٹو اراکین اس کی تجویز نہ دیں اور 30 دنوں کے پیشگی نوٹس کے ساتھ منعقدہ خصوصی قومی مہاپنچایت اجلاس میں حاضر 2/3 (دو تہائی) فعال اراکین اس کی منظوری نہ دے دیں۔'
        }
      }
    ]
  }
];

export default function TrustConstitution({ currentLanguage }: TrustConstitutionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>('art-1');
  const [hasPledged, setHasPledged] = useState<boolean>(false);
  const [pledgeCount, setPledgeCount] = useState<number>(4829);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [showOnlineBooklet, setShowOnlineBooklet] = useState<boolean>(false);
  const [bookletPage, setBookletPage] = useState<number>(1);

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
        ? '📥 Preparing official Trust Constitution PDF booklet (12 Pages)... Downloading now!'
        : currentLanguage === 'ur'
        ? '📥 ٹرسٹ کے سرکاری آئین کی پی ڈی ایف بکلیٹ (12 صفحات) تیار کی جا رہی ہے... ڈاؤن لوڈ شروع!'
        : '📥 महासभा नियमावली एवं संविधान की आधिकारिक पीडीएफ पुस्तिका (12 पृष्ठ) तैयार की जा रही है... डाउनलोड जारी!'
    );
  };

  const handlePrintBooklet = () => {
    window.print();
  };

  // Filter articles
  const filteredArticles = CONSTITUTION_ARTICLES.filter(art => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const titleText = `${art.title.en} ${art.title.hi} ${art.title.ur} ${art.articleNo}`.toLowerCase();
    const summaryText = `${art.summary.en} ${art.summary.hi} ${art.summary.ur}`.toLowerCase();
    const clausesText = art.clauses.map(c => `${c.title.en} ${c.title.hi} ${c.title.ur} ${c.text.en} ${c.text.hi} ${c.text.ur}`).join(' ').toLowerCase();

    return matchesCategory && (titleText.includes(q) || summaryText.includes(q) || clausesText.includes(q));
  });

  const categories = [
    { id: 'all', labelEn: 'All Articles (8)', labelHi: 'सभी अनुच्छेद (8)', labelUr: 'تمام آرٹیکلز (8)' },
    { id: 'preamble', labelEn: 'Preamble & Name', labelHi: 'प्रस्तावना एवं नाम', labelUr: 'تمہید اور نام' },
    { id: 'objectives', labelEn: 'Core Objectives', labelHi: 'मूल उद्देश्य', labelUr: 'بنیادی مقاصد' },
    { id: 'membership', labelEn: 'Membership Rules', labelHi: 'सदस्यता नियम', labelUr: 'رکنیت کے قواعد' },
    { id: 'governance', labelEn: 'Executive Council', labelHi: 'कार्यकारिणी समिति', labelUr: 'مجلس شوریٰ' },
    { id: 'finance', labelEn: 'Financial Code & Zakat', labelHi: 'वित्तीय नियमावली एवं जकात', labelUr: 'مالیاتی ضوابط اور زکوٰۃ' },
    { id: 'disputes', labelEn: 'Disputes & Amendments', labelHi: 'विवाद निवारण एवं संशोधन', labelUr: 'تنازعات اور ترامیم' },
  ];

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
                ? 'OFFICIAL TRUST BY-LAWS & CONSTITUTION' 
                : currentLanguage === 'ur' 
                ? 'ٹرسٹ کا سرکاری آئین اور ضوابط' 
                : 'आधिकारिक महासभा संविधान एवं नियमावली'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight leading-tight text-white">
            {currentLanguage === 'en'
              ? 'Constitution of All India Rangrez Samaj Trust'
              : currentLanguage === 'ur'
              ? 'آل انڈیا رنگریز سماج ٹرسٹ کا دستور اور ضابطہ حیات'
              : 'अखिल भारतीय रंगरेज समाज ट्रस्ट संविधान एवं नियमावली'}
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
            {currentLanguage === 'en'
              ? 'Our organization operates on the pillars of absolute financial transparency, 100% literacy, women empowerment, dowry-free simplicity, and democratic governance under the Constitution of India.'
              : currentLanguage === 'ur'
              ? 'ہمارا ادارہ مکمل مالیاتی شفافیت، 100% خواندگی، خواتین کو بااختیار بنانے، جہیز سے پاک سادگی اور آئینِ ہند کے تحت جمہوری نظام کے ستونوں پر قائم ہے۔'
              : 'हमारा संगठन पूर्ण वित्तीय पारदर्शिता, शत-प्रतिशत साक्षरता, महिला सशक्तिकरण, दहेज मुक्त सादगी और भारतीय संविधान के तहत लोकतांत्रिक प्रशासनिक व्यवस्था के सिद्धांतों पर संचालित होता है।'}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2.5 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs sm:text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>
                {currentLanguage === 'en' ? 'Download Constitution Booklet (PDF)' : currentLanguage === 'ur' ? 'آئین کی مکمل بکلیٹ ڈاؤن لوڈ کریں' : 'नियमावली पुस्तिका डाउनलोड करें (PDF)'}
              </span>
            </button>

            <button
              onClick={() => {
                setBookletPage(1);
                setShowOnlineBooklet(true);
              }}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 border border-emerald-400 cursor-pointer"
            >
              <BookOpen className="h-4 w-4 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en' ? 'Read Interactive Booklet Online' : currentLanguage === 'ur' ? 'آن لائن آئین بکلیٹ پڑھیں' : 'ऑनलाइन नियमावली पुस्तिका पढ़ें'}
              </span>
            </button>

            <button
              onClick={handlePrintBooklet}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
            >
              <Printer className="h-4 w-4 text-[#F4C430]" />
              <span>
                {currentLanguage === 'en' ? 'Print Official Document' : currentLanguage === 'ur' ? 'دستاویز پرنٹ کریں' : 'दस्तावेज़ प्रिंट करें'}
              </span>
            </button>
          </div>
        </div>

        {/* Floating Verified Seal */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-emerald-300 font-semibold">
              {currentLanguage === 'en' ? 'Reg. No: SRA/80G/12A VERIFIED TRUST' : 'पंजीकरण संख्या: SRA/80G/12A सत्यापित ट्रस्ट'}
            </span>
          </div>
          <div className="font-mono text-gray-400">
            {currentLanguage === 'en' ? 'Adopted by National Mahapanchayat General Body' : 'राष्ट्रीय महापंचायत आम सभा द्वारा अनुमोदित'}
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
                ? 'Endorse Our Constitution & Community Code of Conduct'
                : currentLanguage === 'ur'
                ? 'ہمارے آئین اور برادری کے ضابطہ اخلاق کی توثیق کریں'
                : 'महासभा संविधान एवं सामाजिक आचार संहिता का संकल्प लें'}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
              {currentLanguage === 'en'
                ? 'By pledging, you affirm your support for 100% literacy, dowry-free marriages, digital financial transparency, and national brotherhood.'
                : currentLanguage === 'ur'
                ? 'عزم کر کے آپ 100% خواندگی، جہیز سے پاک شادیوں، مالیاتی شفافیت اور قومی بھائی چارے کی حمایت کا اعلان کرتے ہیں۔'
                : 'संकल्प लेकर आप शत-प्रतिशत साक्षरता, दहेज मुक्त विवाह, डिजिटल वित्तीय पारदर्शिता और राष्ट्रीय एकता का समर्थन करते हैं।'}
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-emerald-800 font-bold">
              <Users className="h-3.5 w-3.5 text-[#004B23]" />
              <span>{pledgeCount.toLocaleString()} {currentLanguage === 'en' ? 'community members have pledged allegiance' : 'सदस्य संकल्प ले चुके हैं'}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePledge}
          disabled={hasPledged}
          className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition transform flex items-center gap-2 whitespace-nowrap ${
            hasPledged
              ? 'bg-emerald-700 text-white cursor-default'
              : 'bg-[#004B23] hover:bg-emerald-800 text-[#F4C430] hover:scale-105'
          }`}
        >
          <CheckCircle2 className={`h-5 w-5 ${hasPledged ? 'text-white' : 'text-[#F4C430]'}`} />
          <span>
            {hasPledged
              ? (currentLanguage === 'en' ? '✓ You Have Pledged Allegiance' : currentLanguage === 'ur' ? '✓ آپ کا عزم درج ہے' : '✓ आप संकल्प ले चुके हैं')
              : (currentLanguage === 'en' ? 'Take the Constitutional Pledge' : currentLanguage === 'ur' ? 'آئینی حلف اٹھائیں' : 'संविधान संकल्प लें')}
          </span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLanguage === 'en'
                  ? 'Search by article, rule, Zakat, dowry, voting...'
                  : currentLanguage === 'ur'
                  ? 'آرٹیکل، زکوٰۃ، جہیز، الیکشن سے تلاش کریں...'
                  : 'अनुच्छेद, नियम, जकात, दहेज, चुनाव से खोजें...'
              }
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:bg-white outline-none font-medium transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-gray-500 font-mono">
            {currentLanguage === 'en' ? 'Showing' : 'प्रदर्शित'}: <strong className="text-[#004B23]">{filteredArticles.length}</strong> {currentLanguage === 'en' ? 'of 8 Constitutional Articles' : 'अनुच्छेद'}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isSel = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                  isSel
                    ? 'bg-[#004B23] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <span>
                  {currentLanguage === 'en' ? cat.labelEn : currentLanguage === 'ur' ? cat.labelUr : cat.labelHi}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Constitution Articles List */}
      <div className="space-y-6">
        {filteredArticles.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
            <AlertCircle className="h-10 w-10 text-amber-500 mx-auto animate-pulse" />
            <h4 className="text-base font-bold text-gray-800">
              {currentLanguage === 'en' ? 'No Matching Articles Found' : 'कोई प्रासंगिक अनुच्छेद नहीं मिला'}
            </h4>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              {currentLanguage === 'en'
                ? `We couldn't find any rules matching "${searchQuery}". Try searching for words like "Zakat", "Education", "President", or "Election".`
                : `"${searchQuery}" से संबंधित कोई नियम नहीं मिला। कृपया "जकात", "शिक्षा", "अध्यक्ष" या "चुनाव" जैसे शब्द खोजें।`}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 px-4 py-2 bg-emerald-50 text-[#004B23] font-bold rounded-lg text-xs hover:bg-emerald-100 transition"
            >
              {currentLanguage === 'en' ? 'Reset Filters & Search' : 'फिल्टर रीसेट करें'}
            </button>
          </div>
        ) : (
          filteredArticles.map((art) => {
            const isExpanded = expandedArticle === art.id;
            return (
              <div 
                key={art.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden ${
                  isExpanded ? 'border-emerald-600 ring-1 ring-emerald-500/20' : 'border-gray-200'
                }`}
              >
                {/* Article Header Button */}
                <button
                  onClick={() => setExpandedArticle(isExpanded ? null : art.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 bg-gradient-to-r from-white to-gray-50/50 hover:bg-gray-50 transition"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#004B23] text-[#F4C430] font-mono text-[11px] font-black uppercase tracking-wider">
                        {art.articleNo}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        • {art.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B]">
                      {art.title[currentLanguage]}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">
                      {art.summary[currentLanguage]}
                    </p>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isExpanded ? 'bg-[#004B23] text-white rotate-180' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Article Clauses Content */}
                {isExpanded && (
                  <div className="p-6 pt-2 border-t border-gray-100 bg-gray-50/40 space-y-5 animate-fadeIn">
                    <div className="space-y-4">
                      {art.clauses.map((clause, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs space-y-2 hover:border-emerald-300 transition"
                        >
                          <h4 className="text-sm font-extrabold text-[#004B23] flex items-center gap-2 font-serif">
                            <FileText className="h-4 w-4 text-[#F4C430] flex-shrink-0" />
                            <span>{clause.title[currentLanguage]}</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal pl-6 whitespace-pre-wrap">
                            {clause.text[currentLanguage]}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Footer note inside article */}
                    <div className="flex items-center justify-between pt-2 text-[11px] text-gray-400 font-mono border-t border-gray-200/60">
                      <span>{currentLanguage === 'en' ? 'Official By-Law Clause' : 'आधिकारिक नियमावली खंड'}</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(`${art.articleNo} - ${art.title[currentLanguage]}\n${art.clauses.map(c => c.text[currentLanguage]).join('\n')}`);
                          showToast(currentLanguage === 'en' ? '📋 Article text copied to clipboard!' : '📋 अनुच्छेद पाठ कॉपी किया गया!');
                        }}
                        className="text-[#004B23] hover:underline font-bold flex items-center gap-1"
                      >
                        <Share2 className="h-3 w-3" />
                        <span>{currentLanguage === 'en' ? 'Copy Article Text' : 'पाठ कॉपी करें'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Legal & Audit Disclaimer */}
      <div className="bg-gradient-to-r from-stone-900 to-[#0B132B] text-gray-300 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-3">
        <div className="flex items-center gap-2 text-[#F4C430] font-bold text-xs uppercase tracking-wider">
          <Scale className="h-4 w-4" />
          <span>
            {currentLanguage === 'en' ? 'LEGAL VALUATIONS & CONSTITUTIONAL SUPREMACY' : 'संवैधानिक सर्वोच्चता एवं कानूनी प्रावधान'}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-gray-300">
          {currentLanguage === 'en'
            ? 'This Trust Constitution has been drafted in conformity with the Constitution of India and the Societies Registration Act, 1860. In the event of any typographical or interpretation discrepancy between language versions, the official English and Hindi certified legal registry documents deposited with the Registrar of Societies shall remain conclusive and binding.'
            : currentLanguage === 'ur'
            ? 'یہ آئینِ ٹرسٹ، آئینِ ہند اور سوسائٹیز رجسٹریشن ایکٹ 1860 کی مکمل مطابقت میں تیار کیا گیا ہے۔ کسی بھی ترجمے یا تشریح کے اختلاف کی صورت میں رجسٹرار آف سوسائٹیز کے پاس جمع شدہ سرکاری انگریزی اور ہندی دستاویزی ریکارڈ حتمی تسلیم کیا جائے گا۔'
            : 'यह महासभा नियमावली भारत के संविधान और सोसाइटी पंजीकरण अधिनियम, 1860 के प्रावधानों के पूर्ण अनुकूल बनाई गई है। किसी भी भाषाई व्याख्या या टंकण भिन्नता की स्थिति में, रजिस्ट्रार ऑफ सोसाइटीज के समक्ष पंजीकृत आधिकारिक अंग्रेजी एवं हिंदी कानूनी दस्तावेज ही अंतिम एवं सर्वमान्य होंगे।'}
        </p>
      </div>

      {/* Online Booklet Viewer Modal */}
      {showOnlineBooklet && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center gap-4 border-b border-gray-700 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F4C430] text-[#0B132B] font-black font-mono text-xs">BOOKLET</div>
                <div>
                  <h3 className="text-base font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'Official Trust Constitution & By-Laws Booklet' : 'आधिकारिक ट्रस्ट संविधान एवं नियमावली पुस्तिका'}
                  </h3>
                  <p className="text-[11px] text-gray-300 font-mono">
                    {currentLanguage === 'en' ? `Page ${bookletPage} of ${CONSTITUTION_ARTICLES.length} Articles • Approved by All India Rangrez Samaj Trust` : `पृष्ठ ${bookletPage} / ${CONSTITUTION_ARTICLES.length} • अखिल भारतीय रंगरेज समाज ट्रस्ट द्वारा स्वीकृत`}
                  </p>
                </div>
              </div>
              <button onClick={() => setShowOnlineBooklet(false)} className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-xl transition cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto bg-slate-100 flex-1 space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-300 max-w-3xl mx-auto space-y-6 text-left relative min-h-[450px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-[#004B23] rounded-full text-xs font-mono font-black">
                      {CONSTITUTION_ARTICLES[bookletPage - 1].articleNo}
                    </span>
                    <span className="text-xs text-gray-400 font-mono uppercase font-bold">
                      {CONSTITUTION_ARTICLES[bookletPage - 1].category}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B]">
                    {CONSTITUTION_ARTICLES[bookletPage - 1].title[currentLanguage]}
                  </h2>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-serif font-bold text-sm">
                    {CONSTITUTION_ARTICLES[bookletPage - 1].summary[currentLanguage]}
                  </div>

                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      {currentLanguage === 'en' ? 'Official Constitutional Clauses:' : 'आधिकारिक अनुच्छेद धाराएं:'}
                    </h4>
                    <div className="space-y-4">
                      {CONSTITUTION_ARTICLES[bookletPage - 1].clauses.map((cl, cIdx) => (
                        <div key={cIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-black text-[#004B23] bg-emerald-100 px-2 py-0.5 rounded">
                              Clause {cIdx + 1}
                            </span>
                          </div>
                          <h5 className="font-bold text-sm text-gray-900">
                            {cl.title[currentLanguage]}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {cl.text[currentLanguage]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-gray-200 flex justify-between items-center text-xs font-mono text-gray-400">
                  <span>SRA/80G/12A Registered Trust</span>
                  <span className="text-emerald-700 font-bold">VERIFIED LAW ✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 border-t border-gray-200 flex flex-wrap justify-between items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBookletPage(prev => Math.max(1, prev - 1))}
                  disabled={bookletPage === 1}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'en' ? 'Previous Article' : 'पिछला अनुच्छेद'}</span>
                </button>
                <span className="text-xs font-mono font-bold text-gray-600 px-2">
                  {bookletPage} / {CONSTITUTION_ARTICLES.length}
                </span>
                <button
                  onClick={() => setBookletPage(prev => Math.min(CONSTITUTION_ARTICLES.length, prev + 1))}
                  disabled={bookletPage === CONSTITUTION_ARTICLES.length}
                  className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] disabled:opacity-40 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <span>{currentLanguage === 'en' ? 'Next Article' : 'अगला अनुच्छेद'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handleDownloadPDF();
                    setShowOnlineBooklet(false);
                  }}
                  className="px-4 py-2 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] rounded-xl text-xs font-extrabold transition shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'en' ? 'Download Full PDF' : 'PDF डाउनलोड करें'}</span>
                </button>
                <button
                  onClick={() => setShowOnlineBooklet(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  {currentLanguage === 'en' ? 'Close Viewer' : 'बंद करें'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
