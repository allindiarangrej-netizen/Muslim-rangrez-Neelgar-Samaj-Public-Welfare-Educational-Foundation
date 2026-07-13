import { Language } from '../types';

export interface MultilingualText {
  en: string;
  hi: string;
  ur: string;
}

export interface TimelineEvent {
  year: string;
  title: MultilingualText;
  desc: MultilingualText;
}

export interface QuizQuestion {
  id: string;
  scenario: MultilingualText;
  question: MultilingualText;
  answer: MultilingualText;
  lawBasis: MultilingualText;
}

export interface FundamentalRight {
  id: string;
  articles: string;
  title: MultilingualText;
  explanation: MultilingualText;
  scInterpretations: MultilingualText;
  example: MultilingualText;
  faq: {
    q: MultilingualText;
    a: MultilingualText;
  };
}

export interface LegalProtection {
  id: string;
  title: MultilingualText;
  desc: MultilingualText;
  authority: MultilingualText;
}

export interface MinorityRight {
  article: string;
  title: MultilingualText;
  desc: MultilingualText;
}

export interface IndianLaw {
  id: string;
  title: MultilingualText;
  desc: MultilingualText;
  keyBenefit: MultilingualText;
}

export interface LegalInstitution {
  id: string;
  title: MultilingualText;
  role: MultilingualText;
  approach: MultilingualText;
  complaints: MultilingualText;
}

export interface LegalGlossaryItem {
  term: MultilingualText;
  definition: MultilingualText;
}

export const CONSTITUTION_TIMELINE: TimelineEvent[] = [
  {
    year: '1946',
    title: {
      en: 'Constituent Assembly Convenes',
      hi: 'संविधान सभा की बैठक',
      ur: 'آئین ساز اسمبلی کا پہلا اجلاس'
    },
    desc: {
      en: 'The Assembly met to draft India\'s Constitution. Dr. Rajendra Prasad was elected President, and Dr. B.R. Ambedkar became Chairman of the Drafting Committee.',
      hi: 'भारत के संविधान का मसौदा तैयार करने के लिए सभा की बैठक हुई। डॉ. राजेंद्र प्रसाद अध्यक्ष चुने गए और डॉ. बी.आर. अंबेडकर मसौदा समिति के अध्यक्ष बने।',
      ur: 'آئین کا مسودہ تیار کرنے کے لیے اسمبلی کا اجلاس ہوا۔ ڈاکٹر راجیندر پرساد صدر اور ڈاکٹر بی آر امبیڈکر ڈرافٹنگ کمیٹی کے چیئرمین منتخب ہوئے۔'
    }
  },
  {
    year: '1949',
    title: {
      en: 'Constitution Adopted',
      hi: 'संविधान अपनाया गया (संविधान दिवस)',
      ur: 'آئین کی منظوری'
    },
    desc: {
      en: 'On 26th November, the Constituent Assembly formally adopted the Constitution of India, now celebrated as Constitution Day (Samvidhan Divas).',
      hi: '२६ नवंबर को संविधान सभा ने औपचारिक रूप से भारत के संविधान को अपनाया, जिसे अब संविधान दिवस (Samvidhan Divas) के रूप में मनाया जाता है।',
      ur: '26 نومبر کو آئین ساز اسمبلی نے باضابطہ طور پر بھارت کا آئین منظور کیا، جسے اب یومِ آئین کے طور پر منایا جاتا ہے۔'
    }
  },
  {
    year: '1950',
    title: {
      en: 'Commencement of Constitution',
      hi: 'संविधान का लागू होना (गणतंत्र दिवस)',
      ur: 'آئین کا نفاذ'
    },
    desc: {
      en: 'On 26th January, the Constitution came into effect, making India a Sovereign, Socialist, Secular, Democratic Republic. Celebrated as Republic Day.',
      hi: '२६ जनवरी को संविधान प्रभावी हुआ, जिससे भारत एक संप्रभु, समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक गणराज्य बना। इसे गणतंत्र दिवस के रूप में मनाया जाता है।',
      ur: '26 جنوری کو آئین نافذ ہوا، جس سے بھارت ایک خود مختار، سوشلسٹ، سیکولر، جمہوری جمہوریہ بن گیا۔ اسے یومِ جمہوریہ کے طور پر منایا جاتا ہے۔'
    }
  },
  {
    year: '1976',
    title: {
      en: 'Fundamental Duties Added',
      hi: 'मौलिक कर्तव्य जोड़े गए',
      ur: 'بنیادی فرائض کا اضافہ'
    },
    desc: {
      en: 'The 42nd Amendment added Part IV-A (Article 51A) to the Constitution, specifying the moral obligations and fundamental duties of citizens.',
      hi: '४२वें संशोधन द्वारा संविधान में भाग IV-A (अनुच्छेद 51A) जोड़ा गया, जिसमें नागरिकों के नैतिक दायित्वों और मौलिक कर्तव्यों को निर्दिष्ट किया गया।',
      ur: '42ویں ترمیم کے ذریعے آئین میں حصہ IV-A (آرٹیکل 51A) شامل کیا گیا، جس میں شہریوں کے بنیادی فرائض کا ذکر ہے۔'
    }
  },
  {
    year: '2002',
    title: {
      en: 'Right to Education (Article 21A)',
      hi: 'शिक्षा का अधिकार (अनुच्छेद 21A)',
      ur: 'حقِ تعلیم کا قانون'
    },
    desc: {
      en: 'The 86th Amendment inserted Article 21A, making free and compulsory education for children aged 6 to 14 years a Fundamental Right.',
      hi: '८६वें संशोधन ने अनुच्छेद 21A जोड़ा, जिसके तहत ६ से १४ वर्ष की आयु के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया।',
      ur: '86ویں ترمیم کے تحت آرٹیکل 21A شامل کیا گیا، جس سے 6 سے 14 سال تک کے بچوں کے لیے مفت اور لازمی تعلیم کو بنیادی حق بنایا گیا۔'
    }
  },
  {
    year: '2017',
    title: {
      en: 'Right to Privacy Declared',
      hi: 'निजता का अधिकार घोषित',
      ur: 'حقِ رازداری کا فیصلہ'
    },
    desc: {
      en: 'The Supreme Court, in the historic K.S. Puttaswamy judgment, unanimously held that the Right to Privacy is an integral part of Right to Life under Article 21.',
      hi: 'ऐतिहासिक के.एस. पुट्टास्वामी फैसले में सर्वोच्च न्यायालय ने सर्वसम्मति से माना कि निजता का अधिकार अनुच्छेद 21 के तहत जीवन के अधिकार का एक अभिन्न अंग है।',
      ur: 'سپریم کورٹ نے تاریخی کے ایس پٹاسوامی کیس میں متفقہ فیصلہ دیا کہ حقِ رازداری آرٹیکل 21 کے تحت زندگی کے حق کا اٹوٹ حصہ ہے۔'
    }
  }
];

export const KNOW_YOUR_RIGHTS_QUIZ: QuizQuestion[] = [
  {
    id: 'Q-01',
    scenario: {
      en: 'A woman is summoned to a police station for questioning in a local civil case late in the evening. She is worried about her safety.',
      hi: 'एक महिला को देर शाम स्थानीय सिविल मामले में पूछताछ के लिए थाने बुलाया जाता है। वह अपनी सुरक्षा को लेकर चिंतित हैं।',
      ur: 'ایک خاتون کو دیر شام پوچھ گچھ کے لیے تھانے بلایا جاتا ہے۔ وہ اپنی حفاظت کے بارے میں فکر مند ہیں۔'
    },
    question: {
      en: 'Can the police arrest or interrogate a woman during the night without exceptional permissions?',
      hi: 'क्या पुलिस बिना असाधारण अनुमति के रात के समय किसी महिला को गिरफ्तार या पूछताछ कर सकती है?',
      ur: 'کیا پولیس کسی غیر معمولی اجازت کے بغیر رات کے وقت کسی خاتون کو گرفتار یا تفتیش کر سکتی ہے؟'
    },
    answer: {
      en: 'No. Section 46(4) of the BNSS (formerly CrPC) states that no woman can be arrested after sunset and before sunrise except under exceptional circumstances and only with the prior written permission of a Judicial Magistrate.',
      hi: 'नहीं। बीएनएसएस (पूर्व में CrPC) की धारा 46(4) में स्पष्ट है कि सूर्यास्त के बाद और सूर्योदय से पहले किसी भी महिला को गिरफ्तार नहीं किया जा सकता, केवल असाधारण परिस्थितियों में एक न्यायिक मजिस्ट्रेट की पूर्व लिखित अनुमति से ही ऐसा किया जा सकता है।',
      ur: 'نہیں۔ بی این ایس ایس (سابقہ CrPC) کی دفعہ 46(4) کے تحت غروبِ آفتاب کے بعد اور طلوعِ آفتاب سے پہلے کسی بھی خاتون کو گرفتار نہیں کیا جا سکتا، سوائے غیر معمولی حالات کے جس کے لیے جوڈیشل مجسٹریٹ کی تحریری اجازت لازمی ہے۔'
    },
    lawBasis: {
      en: 'Section 46(4), Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      hi: 'भारतीय नागरिक सुरक्षा संहिता (BNSS) की धारा 46(4)',
      ur: 'بھارتیہ ناگرک سرکشا سنہتا (BNSS) دفعہ 46(4)'
    }
  },
  {
    id: 'Q-02',
    scenario: {
      en: 'A citizen witness or victim approaches a police station outside their home district to report a serious offense, but the duty officer says "Go to your local station, this is out of our jurisdiction."',
      hi: 'कोई नागरिक या पीड़ित गंभीर अपराध की रिपोर्ट करने के लिए अपने गृह जिले से बाहर के पुलिस स्टेशन जाता है, लेकिन ड्यूटी अधिकारी कहता है "अपने स्थानीय स्टेशन जाएं, यह हमारे अधिकार क्षेत्र से बाहर है।"',
      ur: 'ایک شہری اپنے علاقے سے باہر کسی دوسرے تھانے میں سنگین جرم کی رپورٹ درج کروانے جاتا ہے، لیکن ڈیوٹی آفیسر کہتا ہے کہ "اپنے مقامی تھانے جائیں، یہ ہمارا علاقہ نہیں ہے۔"'
    },
    question: {
      en: 'Can a police station refuse to file a complaint on the basis of territorial jurisdiction?',
      hi: 'क्या कोई पुलिस स्टेशन क्षेत्रीय अधिकार क्षेत्र के आधार पर शिकायत दर्ज करने से मना कर सकता है?',
      ur: 'کیا کوئی تھانہ علاقائی دائرہ اختیار کی بنیاد پر شکایت درج کرنے سے انکار کر سکتا ہے؟'
    },
    answer: {
      en: 'Absolutely not. The police are mandated to register a "Zero FIR" regardless of jurisdiction, provide a free copy to the complainant, and subsequently transfer it to the competent police station for investigation.',
      hi: 'बिल्कुल नहीं। पुलिस अधिकार क्षेत्र की परवाह किए बिना "शून्य प्राथमिकी" (Zero FIR) दर्ज करने, शिकायतकर्ता को एक मुफ्त प्रति प्रदान करने और बाद में जांच के लिए इसे सक्षम पुलिस स्टेशन में स्थानांतरित करने के लिए बाध्य है।',
      ur: 'بالکل نہیں! پولیس کسی بھی علاقے کا دائرہ اختیار دیکھے بغیر "زیرو ایف آئی آر" درج کرنے اور بعد میں اسے متعلقہ تھانے منتقل کرنے کی پابند ہے۔'
    },
    lawBasis: {
      en: 'Zero FIR guidelines, Supreme Court of India directives',
      hi: 'शून्य प्राथमिकी (Zero FIR) दिशा-निर्देश, भारत का सर्वोच्च न्यायालय',
      ur: 'زیرو ایف آئی آر گائیڈلائنز، سپریم کورٹ آف انڈیا'
    }
  },
  {
    id: 'Q-03',
    scenario: {
      en: 'An impoverished citizen is accused of a crime and has no money to hire an advocate for defense in court.',
      hi: 'एक गरीब नागरिक पर अपराध का आरोप है और उसके पास अदालत में बचाव के लिए वकील रखने के पैसे नहीं हैं।',
      ur: 'ایک غریب شہری پر کسی جرم کا الزام ہے اور اس کے پاس عدالت میں دفاع کے لیے وکیل کی فیس دینے کے پیسے نہیں ہیں۔'
    },
    question: {
      en: 'Is the state obligated to provide free legal defense to citizens who cannot afford a lawyer?',
      hi: 'क्या राज्य उन नागरिकों को मुफ्त कानूनी सहायता प्रदान करने के लिए बाध्य है जो वकील का खर्च वहन नहीं कर सकते?',
      ur: 'کیا حکومت ایسے شہریوں کو مفت قانونی وکیل فراہم کرنے کی پابند ہے جو فیس برداشت نہیں کر سکتے؟'
    },
    answer: {
      en: 'Yes. Article 39A of the Constitution guarantees "Equal Justice and Free Legal Aid". Under the Legal Services Authorities Act, the government provides free legal defense to women, children, low-income individuals, and marginalized communities.',
      hi: 'हाँ। संविधान का अनुच्छेद 39A "समान न्याय और मुफ्त कानूनी सहायता" की गारंटी देता है। कानूनी सेवा प्राधिकरण अधिनियम के तहत, सरकार महिलाओं, बच्चों, कम आय वाले व्यक्तियों और वंचित समुदायों को मुफ्त कानूनी वकील प्रदान करती है।',
      ur: 'جی ہاں۔ آئین کا آرٹیکل 39A "مساوی انصاف اور مفت قانونی امداد" کی ضمانت دیتا ہے۔ حکومت خواتین، بچوں اور کم آمدنی والے افراد کو سرکاری خرچ پر وکیل فراہم کرتی ہے۔'
    },
    lawBasis: {
      en: 'Article 39A, Constitution of India & Legal Services Authorities Act, 1987',
      hi: 'भारत का संविधान, अनुच्छेद 39A एवं कानूनी सेवा प्राधिकरण अधिनियम, 1987',
      ur: 'آئینِ ہند آرٹیکل 39A اور لیگل سروسز اتھارٹیز ایکٹ 1987'
    }
  },
  {
    id: 'Q-04',
    scenario: {
      en: 'A suspect in police custody is pressured, threatened, or physically coerced by officers to sign a pre-written confession statement.',
      hi: 'पुलिस हिरासत में एक संदिग्ध पर अधिकारियों द्वारा पहले से लिखे गए कबूलनामे के बयान पर हस्ताक्षर करने के लिए दबाव डाला जाता है, धमकी दी जाती है या शारीरिक रूप से मजबूर किया जाता है।',
      ur: 'پولیس حراست میں کسی ملزم پر زبردستی یا دھمکی کے ذریعے اعترافی بیان پر دستخط کرنے کے لیے دباؤ ڈالا جاتا ہے۔'
    },
    question: {
      en: 'Is a confession made in police custody admissible as evidence in a court of law?',
      hi: 'क्या पुलिस हिरासत में लिया गया कबूलनामा कानून की अदालत में सबूत के रूप में स्वीकार्य है?',
      ur: 'کیا پولیس حراست میں دیا گیا اعترافی بیان عدالت میں ثبوت کے طور پر قابل قبول ہے؟'
    },
    answer: {
      en: 'No. Confessions made in police custody are not admissible as evidence under the BSA (formerly Evidence Act) to protect individuals from forced self-incrimination, which is prohibited under Article 20(3). Confessions are valid only if made before a Magistrate.',
      hi: 'नहीं। पुलिस हिरासत में किया गया कबूलनामा भारतीय साक्ष्य अधिनियम (BSA) के तहत सबूत के रूप में स्वीकार्य नहीं है। यह अनुच्छेद 20(3) के तहत स्वयं के विरुद्ध गवाही देने की मनाही के मौलिक अधिकार की रक्षा करता है। कबूलनामा केवल तभी मान्य होता है जब वह मजिस्ट्रेट के समक्ष किया जाए।',
      ur: 'نہیں۔ پولیس حراست میں دیا گیا اعتراف جرم عدالت میں ثبوت کے طور پر قابل قبول نہیں ہے تاکہ زبردستی اعتراف کرانے سے بچایا جا سکے، جو کہ آرٹیکل 20(3) کے تحت ممنوع ہے۔ اعترافِ جرم صرف مجسٹریٹ کے سامنے ہی قابلِ قبول ہوتا ہے۔'
    },
    lawBasis: {
      en: 'Article 20(3) of Constitution & Section 23 of BSA (formerly Sec 25 Evidence Act)',
      hi: 'संविधान का अनुच्छेद 20(3) और भारतीय साक्ष्य अधिनियम (BSA) की धारा 23',
      ur: 'آئینِ ہند آرٹیکل 20(3) اور BSA کی دفعہ 23'
    }
  }
];

export const FUNDAMENTAL_RIGHTS: FundamentalRight[] = [
  {
    id: 'FR-01',
    articles: 'Articles 14–18',
    title: {
      en: 'Right to Equality',
      hi: 'समता (समानता) का अधिकार',
      ur: 'مساوات کا حق'
    },
    explanation: {
      en: 'Guarantees equality before the law and equal protection of the laws. Prohibits state discrimination on grounds of religion, race, caste, sex, or place of birth. Ensures equal opportunity in public employment and abolishes untouchability and titles.',
      hi: 'कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है। धर्म, मूलवंश, जाति, लिंग या जन्म स्थान के आधार पर राज्य के भेदभाव को रोकता है। सार्वजनिक रोजगार में समान अवसर सुनिश्चित करता है और अस्पृश्यता व उपाधियों का अंत करता है।',
      ur: 'قانون کے سامنے برابری اور یکساں تحفظ کی ضمانت دیتا ہے۔ مذہب، نسل، ذات پات، جنس یا جائے پیدائش کی بنیاد پر تفریق کو روکتا ہے اور اچھوت کے خاتمے کا حکم دیتا ہے۔'
    },
    scInterpretations: {
      en: 'Indra Sawhney v. Union of India (affirmed reservation structure subject to the creamy layer rule) & Navtej Singh Johar v. Union of India (decriminalization of homosexuality to uphold personal equality and dignity).',
      hi: 'इंद्रा साहनी बनाम भारत संघ (क्रीमी लेयर नियम के अधीन आरक्षण ढांचे की पुष्टि की) और नवतेज सिंह जौहर बनाम भारत संघ (व्यक्तिगत समानता और गरिमा को बनाए रखने के लिए समलैंगिकता को अपराध की श्रेणी से बाहर करना)।',
      ur: 'اندرا ساہنی کیس (کریم لیئر کے تحت تحفظ کی تصدیق) اور نوتیج سنگھ جوہر کیس (شہری برابری اور وقار کو برقرار رکھنے کے لیے فیصلہ)۔'
    },
    example: {
      en: 'A public hospital or public water supply source cannot deny access to any citizen based on their caste or religion.',
      hi: 'एक सरकारी अस्पताल या सार्वजनिक पेयजल स्रोत किसी भी नागरिक को उसकी जाति या धर्म के आधार पर प्रवेश या सुविधा से वंचित नहीं कर सकता।',
      ur: 'کوئی بھی سرکاری ہسپتال یا پینے کے پانی کا عوامی نظام کسی بھی شہری کو اس کی ذات یا مذہب کی بنیاد پر منع نہیں کر سکتا۔'
    },
    faq: {
      q: {
        en: 'Are reservations in educational institutions and jobs a violation of the Right to Equality?',
        hi: 'क्या शैक्षणिक संस्थानों और नौकरियों में आरक्षण समानता के अधिकार का उल्लंघन है?',
        ur: 'کیا تعلیمی اداروں اور ملازمتوں میں تحفظات (کوٹہ) مساوات کے حق کے خلاف ہیں؟'
      },
      a: {
        en: 'No. The Constitution permits "reasonable classification" and protective discrimination. Article 15(4) and 16(4) allow the State to make special provisions for the advancement of socially and educationally backward classes or SC/ST communities to bring actual level equality.',
        hi: 'नहीं। संविधान "उचित वर्गीकरण" और सुरक्षात्मक भेदभाव की अनुमति देता है। अनुच्छेद 15(4) और 16(4) राज्य को सामाजिक और शैक्षणिक रूप से पिछड़े वर्गों या एससी/एसटी समुदायों के उत्थान के लिए विशेष प्रावधान करने की अनुमति देते हैं ताकि वास्तविक स्तर पर समानता लाई जा सके।',
        ur: 'نہیں۔ آئین پسماندہ طبقوں کے لیے خصوصی مراعات کی اجازت دیتا ہے۔ آرٹیکل 15(4) اور 16(4) حکومت کو یہ حق دیتے ہیں کہ وہ کمزور طبقوں کے فروغ کے لیے خصوصی اقدامات کرے۔'
      }
    }
  },
  {
    id: 'FR-02',
    articles: 'Articles 19–22',
    title: {
      en: 'Right to Freedom',
      hi: 'स्वतंत्रता का अधिकार',
      ur: 'آزادی کا حق'
    },
    explanation: {
      en: 'Guarantees freedom of speech & expression, peaceful assembly, association, movement, residence, and profession. Article 21 protects life and personal liberty, which cannot be taken away except by fair legal procedure. Article 21A guarantees free, compulsory education for children aged 6–14.',
      hi: 'भाषण और अभिव्यक्ति, शांतिपूर्ण सभा, संघ बनाने, देश में कहीं भी घूमने, रहने और मनपसंद व्यवसाय करने की स्वतंत्रता की गारंटी देता है। अनुच्छेद 21 जीवन और व्यक्तिगत स्वतंत्रता की रक्षा करता है। अनुच्छेद 21A ६ से १४ वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा की गारंटी देता है।',
      ur: 'اظہارِ رائے، پرامن اجتماع، انجمن سازی، نقل و حرکت، رہائش اور جائز روزگار کی آزادی کی ضمانت دیتا ہے۔ آرٹیکل 21 زندگی اور ذاتی آزادی کا تحفظ کرتا ہے اور آرٹیکل 21A بچوں کے لیے مفت تعلیم لازمی قرار دیتا ہے۔'
    },
    scInterpretations: {
      en: 'Maneka Gandhi v. Union of India (held that procedure depriving life must be fair, just, and reasonable) & K.S. Puttaswamy v. Union of India (declared Right to Privacy as a fundamental right under Article 21).',
      hi: 'मेनका गांधी बनाम भारत संघ (माना कि जीवन से वंचित करने की प्रक्रिया निष्पक्ष, न्यायसंगत और उचित होनी चाहिए) और के.एस. पुट्टास्वामी बनाम भारत संघ (अनुच्छेद 21 के तहत निजता के अधिकार को मौलिक अधिकार घोषित किया)।',
      ur: 'مینکا گاندھی کیس (ذاتی آزادی کے لیے منصفانہ طریقہ کار) اور کے ایس پٹاسوامی کیس (حقِ رازداری کو آرٹیکل 21 کے تحت بنیادی حق قرار دیا گیا)۔'
    },
    example: {
      en: 'Peacefully marching on public roads to express dissent without arms, or practicing journalism without censorship.',
      hi: 'बिना हथियारों के असहमति व्यक्त करने के लिए सार्वजनिक सड़कों पर शांतिपूर्वक मार्च करना, या बिना सेंसरशिप के पत्रकारिता करना।',
      ur: 'بغیر اسلحہ کے پرامن احتجاج کرنا، یا آزادانہ طور پر صحافتی سرگرمیاں انجام دینا۔'
    },
    faq: {
      q: {
        en: 'Can the government restrict the freedom of speech and expression?',
        hi: 'क्या सरकार बोलने और अभिव्यक्ति की स्वतंत्रता पर प्रतिबंध लगा सकती है?',
        ur: 'کیا حکومت اظہار رائے کی آزادی پر پابندی لگا سکتی ہے؟'
      },
      a: {
        en: 'Yes. Freedom of speech is not absolute. Under Article 19(2), the state can impose "reasonable restrictions" in the interests of national sovereignty, integrity of India, security of the State, public order, decency, or morality.',
        hi: 'हाँ। बोलने की स्वतंत्रता पूर्ण नहीं है। अनुच्छेद 19(2) के तहत, राज्य राष्ट्रीय संप्रभुता, भारत की अखंडता, राज्य की सुरक्षा, सार्वजनिक व्यवस्था, शालीनता या नैतिकता के हित में "उचित प्रतिबंध" लगा सकता है।',
        ur: 'جی ہاں۔ یہ آزادی لا محدود نہیں ہے۔ آرٹیکل 19(2) کے تحت ملکی سلامتی، امن و امان، اخلاقیات اور دیگر اہم امور کے لیے مناسب حدود عائد کی جا سکتی ہیں۔'
      }
    }
  },
  {
    id: 'FR-03',
    articles: 'Articles 23–24',
    title: {
      en: 'Right against Exploitation',
      hi: 'शोषण के विरुद्ध अधिकार',
      ur: 'استحصال کے خلاف حق'
    },
    explanation: {
      en: 'Prohibits human trafficking, forced labour (begar), and other similar forms of forced work. Strictly bans the employment of children below the age of 14 years in factories, mines, or any other hazardous employment.',
      hi: 'मानव तस्करी, जबरन श्रम (बेगार) और इसी तरह के अन्य जबरन कामों को प्रतिबंधित करता है। १४ वर्ष से कम उम्र के बच्चों को कारखानों, खदानों या किसी अन्य खतरनाक काम में लगाने पर सख्त प्रतिबंध लगाता है।',
      ur: 'انسانوں کی خرید و فروخت، جبری مشقت (بیگار) اور غلامی کو ممنوع قرار دیتا ہے۔ کارخانوں، کانوں یا خطرناک کاموں میں 14 سال سے کم عمر بچوں کے روزگار پر مکمل پابندی لگاتا ہے۔'
    },
    scInterpretations: {
      en: 'M.C. Mehta v. State of Tamil Nadu (Supreme Court ordered the elimination of child labour in hazardous firecracker industries and established a welfare fund).',
      hi: 'एम.सी. मेहता बनाम तमिलनाडु राज्य (सर्वोच्च न्यायालय ने खतरनाक पटाखा उद्योगों में बाल श्रम को समाप्त करने का आदेश दिया और एक कल्याण कोष की स्थापना की)।',
      ur: 'ایم سی مہتا کیس (پٹاخہ فیکٹریوں میں چائلڈ لیبر کے خاتمے اور بچوں کی فلاحی بحالی کا تاریخی حکم)۔'
    },
    example: {
      en: 'Employing a 10-year-old child to work full-time in a brick kiln or chemical factory is a punishable criminal offense.',
      hi: 'ईंट भट्ठे या रसायन कारखाने में १० साल के बच्चे को पूर्णकालिक काम पर रखना एक दंडनीय आपराधिक अपराध है।',
      ur: 'کسی اینٹوں کے بھٹے یا کیمیکل فیکٹری میں 10 سال کے بچے کو کام پر رکھنا ایک سنگین جرم ہے۔'
    },
    faq: {
      q: {
        en: 'What constitutes forced labour (begar)?',
        hi: 'जबरन श्रम (बेगार) क्या होता है?',
        ur: 'جبری مشقت (بیگار) سے کیا مراد ہے؟'
      },
      a: {
        en: 'Forcing an individual to work against their will or for wages below the legally mandated minimum wage under physical, economic, or legal threat is considered forced labour and is strictly prohibited.',
        hi: 'किसी व्यक्ति को उसकी इच्छा के विरुद्ध या कानूनी रूप से निर्धारित न्यूनतम मजदूरी से कम पर शारीरिक, आर्थिक या कानूनी धमकी देकर काम करने के लिए मजबूर करना जबरन श्रम माना जाता है और यह सख्त वर्जित है।',
        ur: 'کسی شخص کو مرضی کے بغیر یا قانونی طور پر طے شدہ کم از کم اجرت سے کم رقم پر ڈرا دھمکا کر کام لینے کو جبری مشقت کہا جاتا ہے۔'
      }
    }
  },
  {
    id: 'FR-04',
    articles: 'Articles 25–28',
    title: {
      en: 'Right to Freedom of Religion',
      hi: 'धर्म की स्वतंत्रता का अधिकार',
      ur: 'مذہبی آزادی کا حق'
    },
    explanation: {
      en: 'Ensures the freedom of conscience and the right to freely profess, practice, and propagate religion. Grants religious denominations the right to manage their own religious affairs, establish institutions, and own property. Protects against forced taxation for promoting any particular religion.',
      hi: 'अंतःकरण की स्वतंत्रता और धर्म को स्वतंत्र रूप से मानने, आचरण करने और प्रचार करने का अधिकार देता है। धार्मिक संप्रदायों को अपने धार्मिक मामलों का प्रबंधन करने, संस्थाएं स्थापित करने और संपत्ति रखने का अधिकार देता है। किसी विशेष धर्म को बढ़ावा देने के लिए जबरन टैक्स वसूलने से बचाता है।',
      ur: 'ضمیر کی آزادی اور کسی بھی مذہب کو ماننے، عمل کرنے اور اس کی تبلیغ کا حق دیتا ہے۔ مذہبی اداروں کو اپنے معاملات خود سنبھالنے اور جائیداد خریدنے کی آزادی دیتا ہے۔ کسی خاص مذہب کے لیے زبردستی ٹیکس لگانے کو منع کرتا ہے۔'
    },
    scInterpretations: {
      en: 'Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt (defined the "Essential Religious Practices" test) & Bijoe Emmanuel v. State of Kerala (protected the right of pupils to stand respectfully but not sing the National Anthem due to religious beliefs).',
      hi: 'कमिश्नर, हिंदू रिलिजियस एंडोमेंट्स, मद्रास बनाम श्री लक्ष्मींद्र तीर्थ स्वामीयार (आवश्यक धार्मिक प्रथाओं की परीक्षा को परिभाषित किया) और बिजोय इमैनुएल बनाम केरल राज्य (धार्मिक मान्यताओं के कारण राष्ट्रगान खड़े होकर आदर देने पर न गाने के अधिकार की रक्षा की)।',
      ur: 'شیرور مٹھ کیس (مذہبی حقوق کے تعین کا ٹیسٹ) اور بیجوئے ایمانوئل کیس (مذہبی عقائد کی بنیاد پر قومی ترانہ گانے سے استثنا کی پرامن توثیق)۔'
    },
    example: {
      en: 'A citizen wears religious attire or symbols (such as a Sikh carrying a Kirpan, or wearing traditional prayer dress) in public places without facing state harassment.',
      hi: 'एक नागरिक सरकारी या सार्वजनिक स्थानों पर किसी राज्य के उत्पीड़न का सामना किए बिना धार्मिक पोशाक या प्रतीक (जैसे सिख द्वारा कृपाण धारण करना) पहन सकता है।',
      ur: 'عوامی مقامات پر اپنے مذہبی شعائر کا اظہار کرنا (جیسے سکھ برادری کا کرپان رکھنا یا روایتی لباس پہننا)۔'
    },
    faq: {
      q: {
        en: 'Can the state ban conversion under this right?',
        hi: 'क्या राज्य इस अधिकार के तहत धर्म परिवर्तन पर प्रतिबंध लगा सकता है?',
        ur: 'کیا حکومت تبدیلی مذہب پر پابندی لگا سکتی ہے؟'
      },
      a: {
        en: 'The Right to Propagate religion does not include the right to forcibly convert another person. The Supreme Court has held that state laws banning forced, fraudulent, or coerced conversions are constitutionally valid.',
        hi: 'धर्म का प्रचार करने के अधिकार में किसी अन्य व्यक्ति को जबरन परिवर्तित करने का अधिकार शामिल नहीं है। सर्वोच्च न्यायालय ने माना है कि बलपूर्वक, धोखाधड़ी या जबरदस्ती धर्म परिवर्तन पर प्रतिबंध लगाने वाले राज्य के कानून संवैधानिक रूप से वैध हैं।',
        ur: 'مذہب کی تبلیغ کے حق میں زبردستی مذہب تبدیل کرانے کا حق شامل نہیں ہے۔ زبردستی، لالچ یا دھوکہ دہی سے مذہب کی تبدیلی کو روکنا قانونی ہے۔'
      }
    }
  },
  {
    id: 'FR-05',
    articles: 'Articles 29–30',
    title: {
      en: 'Cultural & Educational Rights',
      hi: 'संस्कृति और शिक्षा संबंधी अधिकार',
      ur: 'ثقافتی اور تعلیمی حقوق'
    },
    explanation: {
      en: 'Protects the right of any section of citizens to conserve their distinct language, script, or culture. Grants all religious and linguistic minorities the fundamental right to establish and administer educational institutions of their choice, and guarantees no state discrimination in funding.',
      hi: 'नागरिकों के किसी भी वर्ग को अपनी विशिष्ट भाषा, लिपि या संस्कृति को संरक्षित करने का अधिकार देता है। सभी धार्मिक और भाषाई अल्पसंख्यकों को अपनी पसंद के शैक्षणिक संस्थान स्थापित करने और प्रबंधित करने का मौलिक अधिकार देता है, तथा सरकारी सहायता में भेदभाव नहीं करने की गारंटी देता है।',
      ur: 'شہریوں کو اپنی زبان، رسم الخط اور ثقافت کو محفوظ رکھنے کا حق دیتا ہے۔ تمام مذہبی اور لسانی اقلیتوں کو اپنی پسند کے تعلیمی ادارے قائم کرنے اور ان کا انتظام سنبھالنے کا حق دیتا ہے۔'
    },
    scInterpretations: {
      en: 'T.M.A. Pai Foundation v. State of Karnataka (established that the administration of minority educational institutions must have autonomy, though reasonable academic standards can be regulated by the State).',
      hi: 'टी.एम.ए. पाई फाउंडेशन बनाम कर्नाटक राज्य (स्थापित किया गया कि अल्पसंख्यक शैक्षणिक संस्थानों के प्रशासन में स्वायत्तता होनी चाहिए, हालांकि राज्य द्वारा उचित शैक्षणिक मानकों को विनियमित किया जा सकता है)।',
      ur: 'ٹی ایم اے پائی فاؤنڈیشن کیس (اقلیتی تعلیمی اداروں کو اپنے قوانین کے مطابق چلانے کی خود مختاری کی توثیق)۔'
    },
    example: {
      en: 'A linguistic minority community setting up a school where their native regional language is the primary medium of instruction.',
      hi: 'एक भाषाई अल्पसंख्यक समुदाय एक स्कूल स्थापित करता है जहां उनकी मूल क्षेत्रीय भाषा शिक्षा का प्राथमिक माध्यम है।',
      ur: 'کسی بھی لسانی اقلیت کی طرف سے ایسا اسکول قائم کرنا جہاں ان کی مادری زبان میں تدریس کا انتظام ہو۔'
    },
    faq: {
      q: {
        en: 'Are minority-run educational institutions exempt from reservation systems?',
        hi: 'क्या अल्पसंख्यक-संचालित शैक्षणिक संस्थानों को आरक्षण प्रणाली से छूट दी गई है?',
        ur: 'کیا اقلیتی تعلیمی اداروں کو کوٹہ سسٹم (ریزرویشن) سے چھوٹ حاصل ہے؟'
      },
      a: {
        en: 'Yes. Under Article 30, minority educational institutions (both aided and unaided) are exempt from general reservation guidelines for SC/ST/OBC under Article 15(5), allowing them to prioritize seats for their own community members, subject to academic transparency.',
        hi: 'हाँ। अनुच्छेद 30 के तहत, अल्पसंख्यक शैक्षणिक संस्थानों (सहायता प्राप्त और गैर-सहायता प्राप्त दोनों) को अनुच्छेद 15(5) के तहत एससी/एसटी/ओबीसी के लिए सामान्य आरक्षण दिशानिर्देशों से छूट दी गई है, जिससे वे अपने स्वयं के समुदाय के सदस्यों के लिए सीटों को प्राथमिकता दे सकते हैं।',
        ur: 'جی ہاں۔ آرٹیکل 30 کے تحت چلنے والے اقلیتی تعلیمی اداروں کو عام ریزرویشن قوانین سے مستثنیٰ رکھا گیا ہے تاکہ وہ اپنی کمیونٹی کے بچوں کو داخلے میں ترجیح دے سکیں۔'
      }
    }
  },
  {
    id: 'FR-06',
    articles: 'Article 32',
    title: {
      en: 'Right to Constitutional Remedies',
      hi: 'संवैधानिक उपचारों का अधिकार',
      ur: 'آئینی علاج کا حق'
    },
    explanation: {
      en: 'Empowers citizens to directly petition the Supreme Court (under Article 32) or High Courts (under Article 226) for the enforcement of their Fundamental Rights. Courts can issue writs including Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari. Dr. Ambedkar called this the "Heart and Soul of the Constitution".',
      hi: 'नागरिकों को अपने मौलिक अधिकारों को लागू करने के लिए सीधे सर्वोच्च न्यायालय (अनुच्छेद 32 के तहत) या उच्च न्यायालयों (अनुच्छेद 226 के तहत) में याचिका दायर करने का अधिकार देता है। अदालतें बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, अधिकार-पृच्छा और प्रेषण जैसे रिट जारी कर सकती हैं। डॉ. अंबेडकर ने इसे "संविधान का हृदय और आत्मा" कहा था।',
      ur: 'شہریوں کو بنیادی حقوق کی پامالی کی صورت میں براہ راست سپریم کورٹ (آرٹیکل 32) یا ہائی کورٹ (آرٹیکل 226) سے رجوع کرنے کا حق دیتا ہے۔ عدالت ہبیس کارپس، مینڈامس اور دیگر رٹ جاری کر سکتی ہے۔'
    },
    scInterpretations: {
      en: 'L. Chandra Kumar v. Union of India (held that the power of judicial review and writ jurisdiction is a basic, unalterable feature of the Indian Constitution).',
      hi: 'एल. चंद्र कुमार बनाम भारत संघ (माना कि न्यायिक समीक्षा की शक्ति और रिट क्षेत्राधिकार भारतीय संविधान की एक बुनियादी, अपरिवर्तनीय विशेषता है)।',
      ur: 'ایل چندر کمار کیس (عدالتی نظرثانی اور رٹ جاری کرنے کے دائرہ اختیار کو آئین کا بنیادی اور ناقابلِ تبدیلی حصہ قرار دیا)۔'
    },
    example: {
      en: 'If a citizen is arrested illegally and kept in lockup without a magistrate order, a relative can file a Habeas Corpus writ petition for their immediate release.',
      hi: 'यदि किसी नागरिक को अवैध रूप से गिरफ्तार किया जाता है और बिना मजिस्ट्रेट के आदेश के बंद रखा जाता है, तो कोई रिश्तेदार उनकी तुरंत रिहाई के लिए बंदी प्रत्यक्षीकरण (Habeas Corpus) रिट याचिका दायर कर सकता है।',
      ur: 'اگر کسی کو غیر قانونی طور پر قید رکھا جائے، تو اس کی فوری رہائی کے لیے ہبیس کارپس (Habeas Corpus) کی رٹ دائر کی جا سکتی ہے۔'
    },
    faq: {
      q: {
        en: 'Can the Right to Constitutional Remedies be suspended?',
        hi: 'क्या संवैधानिक उपचारों के अधिकार को निलंबित किया जा सकता है?',
        ur: 'کیا آئینی علاج کے اس حق کو معطل کیا جا سکتا ہے؟'
      },
      a: {
        en: 'The Right to approach the Supreme Court can be suspended only during a state of National Emergency declared by the President under Article 359. However, the rights under Article 20 and Article 21 can never be suspended even during an emergency.',
        hi: 'सर्वोच्च न्यायालय जाने का अधिकार केवल अनुच्छेद 359 के तहत राष्ट्रपति द्वारा घोषित राष्ट्रीय आपातकाल की स्थिति में ही निलंबित किया जा सकता है। हालांकि, अनुच्छेद 20 और अनुच्छेद 21 के तहत अधिकार आपातकाल के दौरान भी कभी निलंबित नहीं किए जा सकते।',
        ur: 'سپریم کورٹ جانے کا حق صرف قومی ایمرجنسی کے دوران عارضی طور پر معطل کیا جا سکتا ہے۔ البتہ، آرٹیکل 20 اور آرٹیکل 21 کے حقوق کسی بھی صورت میں معطل نہیں ہو سکتے۔'
      }
    }
  }
];

export const FUNDAMENTAL_DUTIES = {
  article: 'Article 51A',
  explanation: {
    en: 'Part IV-A containing Article 51A outlines 11 moral obligations of every citizen. These promote patriotism, national solidarity, environmental protection, scientific temper, and social harmony.',
    hi: 'भाग IV-A जिसमें अनुच्छेद 51A शामिल है, प्रत्येक नागरिक के ११ नैतिक कर्तव्यों को रेखांकित करता है। ये देशभक्ति, राष्ट्रीय एकजुटता, पर्यावरण संरक्षण, वैज्ञानिक दृष्टिकोण और सामाजिक सद्भाव को बढ़ावा देते हैं।',
    ur: 'حصہ IV-A جس میں آرٹیکل 51A شامل ہے، ہر شہری کے لیے 11 بنیادی فرائض بیان کرتا ہے۔ یہ فرائض حب الوطنی، قومی یکجہتی، تحفظِ ماحول اور سائنسی سوچ کو فروغ دیتے ہیں۔'
  },
  duties: [
    {
      en: 'Abide by the Constitution and respect its ideals, institutions, National Flag, and National Anthem.',
      hi: 'संविधान का पालन करें और उसके आदर्शों, संस्थानों, राष्ट्रीय ध्वज और राष्ट्रगान का आदर करें।',
      ur: 'آئین پر عمل کرنا اور اس کے اداروں، قومی پرچم اور قومی ترانے کا احترام کرنا۔'
    },
    {
      en: 'Cherish and follow the noble ideals which inspired our national struggle for freedom.',
      hi: 'स्वतंत्रता के लिए हमारे राष्ट्रीय संघर्ष को प्रेरित करने वाले महान आदर्शों को संजोएं और उनका पालन करें।',
      ur: 'ان عظیم نظریات کی پاسداری کرنا جنہوں نے ہماری آزادی کی جنگ کو حوصلہ دیا۔'
    },
    {
      en: 'Uphold and protect the sovereignty, unity, and integrity of India.',
      hi: 'भारत की संप्रभुता, एकता और अखंडता को अक्षुण्ण रखें और उसकी रक्षा करें।',
      ur: 'بھارت کی سالمیت، یکجہتی اور خود مختاری کا تحفظ کرنا۔'
    },
    {
      en: 'Defend the country and render national service when called upon to do so.',
      hi: 'देश की रक्षा करें और आह्वान किए जाने पर राष्ट्रीय सेवा प्रदान करें।',
      ur: 'ملک کی حفاظت کرنا اور پکارے جانے پر قومی خدمات پیش کرنا۔'
    },
    {
      en: 'Promote harmony and the spirit of common brotherhood among all the people of India transcending religious, linguistic, and regional or sectional diversities; to renounce practices derogatory to the dignity of women.',
      hi: 'धार्मिक, भाषाई और क्षेत्रीय विविधताओं से परे भारत के सभी लोगों के बीच सद्भाव और भाईचारे की भावना को बढ़ावा देना; महिलाओं की गरिमा को ठेस पहुंचाने वाली प्रथाओं का त्याग करना।',
      ur: 'مذہبی، لسانی اور علاقائی تفریق سے بالاتر ہو کر بھائی چارے کو فروغ دینا اور خواتین کے وقار کے خلاف رسم و رواج سے گریز کرنا۔'
    },
    {
      en: 'Value and preserve the rich heritage of our composite culture.',
      hi: 'हमारी मिश्रित संस्कृति की समृद्ध विरासत को महत्व दें और उसका संरक्षण करें।',
      ur: 'ہماری مشترکہ گنگا جمنی تہذیب کے شاندار ورثے کی قدر اور تحفظ کرنا۔'
    },
    {
      en: 'Protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.',
      hi: 'वनों, झीलों, नदियों और वन्यजीवों सहित प्राकृतिक पर्यावरण की रक्षा और सुधार करना, तथा जीवित प्राणियों के प्रति दयाभाव रखना।',
      ur: 'جنگلات، جھیلوں، دریاؤں اور جنگلی حیات سمیت قدرتی ماحول کا تحفظ اور جانداروں پر رحم کرنا۔'
    },
    {
      en: 'Develop scientific temper, humanism, and the spirit of inquiry and reform.',
      hi: 'वैज्ञानिक दृष्टिकोण, मानवतावाद और ज्ञानार्जन तथा सुधार की भावना का विकास करना।',
      ur: 'سائنسی سوچ، انسانیت اور کھوج و اصلاح کے جذبے کو پروان چڑھانا۔'
    },
    {
      en: 'Safeguard public property and to abjure violence.',
      hi: 'सार्वजनिक संपत्ति को सुरक्षित रखना और हिंसा से दूर रहना।',
      ur: 'عوامی املاک کی حفاظت کرنا اور تشدد سے دور رہنا۔'
    },
    {
      en: 'Strive towards excellence in all spheres of individual and collective activity.',
      hi: 'व्यक्तिगत और सामूहिक गतिविधि के सभी क्षेत्रों में उत्कृष्टता की ओर बढ़ने का प्रयास करना।',
      ur: 'انفرادی اور اجتماعی طور پر ترقی کے تمام شعبوں میں کمال حاصل کرنے کی کوشش کرنا۔'
    },
    {
      en: 'Provide opportunities for education to his child or ward between the age of six and fourteen years (added by the 86th Amendment).',
      hi: '६ से १४ वर्ष की आयु के अपने बच्चे या आश्रित को शिक्षा के अवसर प्रदान करना (८६वें संशोधन द्वारा जोड़ा गया)।',
      ur: '6 سے 14 سال کے اپنے بچوں کو تعلیم کے مساوی مواقع فراہم کرنا (86ویں ترمیم کے تحت اضافہ)۔'
    }
  ],
  examples: [
    {
      en: 'Throwing garbage in dedicated municipal bins instead of littering tourist spots preserves the natural environment.',
      hi: 'पर्यटन स्थलों पर कचरा फेंकने के बजाय उसे निर्धारित कचरे के डिब्बे में डालना प्राकृतिक पर्यावरण को सुरक्षित रखता है।',
      ur: 'سیاحتی مقامات پر گندگی پھیلانے کے بجائے کوڑا دان کا استعمال کرنا ماحول دوستی کی مثال ہے۔'
    },
    {
      en: 'Standing respectfully in silence during the national anthem in official public events.',
      hi: 'आधिकारिक सार्वजनिक कार्यक्रमों में राष्ट्रगान के दौरान मौन रहकर सम्मानपूर्वक खड़े रहना।',
      ur: 'سرکاری تقاریب کے دوران قومی ترانے کے احترام میں پرسکون کھڑے رہنا۔'
    },
    {
      en: 'Refraining from spreading false rumours on social media that could incite religious or communal disharmony.',
      hi: 'सोशल मीडिया पर ऐसी झूठी अफवाहें फैलाने से बचना जो धार्मिक या सांप्रदायिक सौहार्द को बिगाड़ सकती हैं।',
      ur: 'سوشل میڈیا پر ایسی افواہیں پھیلانے سے گریز کرنا جو مذہبی یا فرقہ وارانہ منافرت کا باعث بنیں۔'
    }
  ]
};

export const DIRECTIVE_PRINCIPLES = {
  purpose: {
    en: 'Directive Principles of State Policy (DPSP) in Part IV (Articles 36–51) are non-justiciable guidelines directed to the Central and State governments to establish a social welfare state, economic justice, and progressive governance.',
    hi: 'भाग IV (अनुच्छेद 36-51) में राज्य के नीति निदेशक तत्व (DPSP) गैर-वादयोग्य (Non-justiciable) दिशा-निर्देश हैं, जो केंद्र और राज्य सरकारों को एक सामाजिक कल्याणकारी राज्य, आर्थिक न्याय और प्रगतिशील शासन स्थापित करने का निर्देश देते हैं।',
    ur: 'حصہ IV (آرٹیکل 36-51) میں درج ریاستی پالیسی کے رہنما اصول (DPSP) ایسی ہدایات ہیں جن پر عمل کر کے حکومتیں عوامی فلاح و بہبود، معاشی انصاف اور ایک مثالی فلاحی ریاست قائم کر سکتی ہیں۔'
  },
  importantArticles: [
    {
      article: 'Article 39A',
      title: { en: 'Equal Justice and Free Legal Aid', hi: 'समान न्याय और मुफ्त कानूनी सहायता', ur: 'مساوی انصاف اور مفت قانونی امداد' },
      desc: { en: 'Ensures the state provides free legal aid to underprivileged individuals.', hi: 'सुनिश्चित करता है कि राज्य वंचित व्यक्तियों को मुफ्त कानूनी सहायता प्रदान करे।', ur: 'غریب اور مستحق شہریوں کو مفت وکیل کی فراہمی یقینی بناتا ہے۔' }
    },
    {
      article: 'Article 40',
      title: { en: 'Organization of Village Panchayats', hi: 'ग्राम पंचायतों का संगठन', ur: 'گرام پنچایتوں کا قیام' },
      desc: { en: 'Directed the state to establish local self-government units, leading to the Panchayati Raj system.', hi: 'राज्य को स्थानीय स्वशासन इकाइयों की स्थापना का निर्देश दिया, जिससे पंचायती राज व्यवस्था बनी।', ur: 'مقامی حکومتوں اور پنچایتی راج کے قیام کی ہدایت۔' }
    },
    {
      article: 'Article 45',
      title: { en: 'Provision for Early Childhood Care & Education', hi: 'प्रारंभिक बाल्यावस्था देखभाल और शिक्षा का प्रावधान', ur: 'بچوں کی دیکھ بھال اور تعلیم' },
      desc: { en: 'Education for children until they complete the age of six years (which later extended to Article 21A).', hi: 'छह वर्ष की आयु पूरी करने तक बच्चों की देखभाल और शिक्षा (जो बाद में अनुच्छेद 21A में विस्तारित हुई)।', ur: 'چھ سال سے کم عمر بچوں کی دیکھ بھال اور پرورش سے متعلق رہنمائی۔' }
    },
    {
      article: 'Article 48A',
      title: { en: 'Protection of Environment and Wildlife', hi: 'पर्यावरण और वन्यजीवों का संरक्षण', ur: 'ماحول اور جنگلی حیات کا تحفظ' },
      desc: { en: 'Directs governments to protect forests, lakes, and wild animals.', hi: 'सरकारों को जंगलों, झीलों और जंगली जानवरों की रक्षा करने का निर्देश देता है।', ur: 'جنگلات، جھیلوں اور نایاب جنگلی حیات کو بچانے کی حکومتی ذمہ داری۔' }
    }
  ],
  benefits: {
    en: 'DPSP acts as the foundation of historic laws: the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), Maternity Benefit Act, Right to Information (RTI) Act, and Ayushman Bharat healthcare schemes.',
    hi: 'DPSP ऐतिहासिक कानूनों की नींव के रूप में कार्य करता है: महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा), मातृत्व लाभ अधिनियम, सूचना का अधिकार (RTI) अधिनियम, और आयुष्मान भारत स्वास्थ्य योजनाएं।',
    ur: 'یہ رہنما اصول تاریخی فلاحی اسکیموں کی بنیاد ہیں جیسے: منریگا (روزگار اسکیم)، میٹرنٹی بینیفٹ ایکٹ، حق معلومات (RTI) اور مفت علاج کی اسکیمیں۔'
  },
  differences: [
    {
      feature: { en: 'Justiciability', hi: 'वादयोग्यता', ur: 'قابلِ نفاذ ہونا' },
      fr: { en: 'Justiciable. Enforceable in court immediately if violated.', hi: 'वादयोग्य। उल्लंघन होने पर तुरंत अदालत में लागू करने योग्य।', ur: 'عدالت کے ذریعے فوری نفاذ ممکن ہے۔' },
      dpsp: { en: 'Non-justiciable. Cannot be challenged in court if not implemented.', hi: 'गैर-वादयोग्य। लागू न होने पर अदालत में चुनौती नहीं दी जा सकती।', ur: 'عدالت میں چیلنج نہیں کیا جا سکتا۔' }
    },
    {
      feature: { en: 'Nature', hi: 'प्रकृति', ur: 'نوعیت' },
      fr: { en: 'Negative injunctions prohibiting the State from doing certain things.', hi: 'नकारात्मक निषेध जो राज्य को कुछ चीजें करने से रोकते हैं।', ur: 'حکومت پر کچھ پابندیاں عائد کرتے ہیں۔' },
      dpsp: { en: 'Positive instructions directing the State to achieve specific goals.', hi: 'सकारात्मक निर्देश जो राज्य को विशिष्ट लक्ष्यों को प्राप्त करने का निर्देश देते हैं।', ur: 'حکومت کو فلاحی کام کرنے کی ترغیب دیتے ہیں۔' }
    },
    {
      feature: { en: 'Scope', hi: 'क्षेत्र', ur: 'دائرہ کار' },
      fr: { en: 'Individual-centric; protects personal civil liberties.', hi: 'व्यक्ति-केंद्रित; व्यक्तिगत नागरिक स्वतंत्रता की रक्षा करता है।', ur: 'انفرادی آزادی اور شہری حقوق کے متعلق ہے۔' },
      dpsp: { en: 'Society-centric; aims for collective social and economic welfare.', hi: 'समाज-केंद्रित; सामूहिक सामाजिक और आर्थिक कल्याण का लक्ष्य रखता है।', ur: 'اجتماعی سماجی و معاشی فلاح سے متعلق ہے۔' }
    }
  ]
};

export const LEGAL_PROTECTIONS: LegalProtection[] = [
  {
    id: 'LP-01',
    title: { en: 'Right to File an FIR', hi: 'प्रथम सूचना रिपोर्ट (FIR) दर्ज कराने का अधिकार', ur: 'ایف آئی آر (FIR) درج کرانے کا حق' },
    desc: {
      en: 'The officer in charge of a police station is legally bound to register an FIR when information regarding a cognizable offense is disclosed. Refusal is a serious service violation.',
      hi: 'संज्ञेय (Cognizable) अपराध के संबंध में जानकारी मिलने पर पुलिस स्टेशन के प्रभारी अधिकारी कानूनी रूप से एफआईआर दर्ज करने के लिए बाध्य हैं। इनकार करना सेवा नियमों का गंभीर उल्लंघन है।',
      ur: 'قابلِ دست اندازی جرم کی صورت میں تھانے کا انچارج ایف آئی آر (FIR) درج کرنے کا پابند ہے۔ انکار کرنے پر قانونی کارروائی کی جا سکتی ہے۔'
    },
    authority: { en: 'BNS & BNSS procedural codes', hi: 'बीएनएस एवं बीएनएसएस प्रक्रियात्मक संहिता', ur: 'بی این ایس اور بی این ایس ایس قوانین' }
  },
  {
    id: 'LP-02',
    title: { en: 'Zero FIR Facility', hi: 'शून्य प्राथमिकी (Zero FIR) की सुविधा', ur: 'زیرو ایف آئی آر (Zero FIR) کی سہولت' },
    desc: {
      en: 'A victim can file an FIR at any police station regardless of where the crime occurred. It is given the serial number "0" and later transferred to the correct jurisdictional station.',
      hi: 'कोई भी पीड़ित अपराध स्थल की परवाह किए बिना किसी भी थाने में एफआईआर दर्ज करा सकता है। इसे क्रम संख्या "०" दी जाती है और बाद में सही अधिकार क्षेत्र वाले थाने में भेज दिया जाता है।',
      ur: 'متاثرہ شخص کسی بھی تھانے میں جا کر ایف آئی آر درج کروا سکتا ہے، چاہے جرم کہیں بھی ہوا ہو۔ اسے زیرو نمبر دیا جاتا ہے اور بعد میں متعلقہ تھانے منتقل کیا جاتا ہے۔'
    },
    authority: { en: 'Ministry of Home Affairs advisories', hi: 'गृह मंत्रालय के परामर्श निर्देश', ur: 'وزارت داخلہ کی ہدایات' }
  },
  {
    id: 'LP-03',
    title: { en: 'Right to Free Legal Aid', hi: 'मुफ्त कानूनी सहायता का अधिकार', ur: 'مفت قانونی امداد کا حق' },
    desc: {
      en: 'Free legal representation and counsel by state-sponsored advocates are guaranteed to women, children, SC/ST communities, industrial workers, and low-income citizens.',
      hi: 'महिलाओं, बच्चों, एससी/एसटी समुदायों, औद्योगिक श्रमिकों और कम आय वाले नागरिकों को राज्य द्वारा मुफ्त कानूनी प्रतिनिधित्व और वकील प्रदान किया जाता है।',
      ur: 'خواتین، بچوں، دلت و پسماندہ طبقوں اور کم آمدنی والے شہریوں کو سرکاری خرچ پر مفت وکیل فراہم کیا جاتا ہے۔'
    },
    authority: { en: 'Article 39A & Legal Services Authorities Act', hi: 'अनुच्छेद 39A एवं कानूनी सेवा प्राधिकरण अधिनियम', ur: 'آرٹیکل 39A اور لیگل سروسز ایکٹ' }
  },
  {
    id: 'LP-04',
    title: { en: 'Right to Legal Representation', hi: 'कानूनी प्रतिनिधित्व का अधिकार', ur: 'قانونی نمائندگی کا حق' },
    desc: {
      en: 'Every arrested person has the fundamental right to consult and be defended by a legal practitioner of their choice from the moment of their apprehension.',
      hi: 'प्रत्येक गिरफ्तार व्यक्ति को अपनी गिरफ्तारी के क्षण से ही अपनी पसंद के वकील से परामर्श करने और अपना बचाव करने का मौलिक अधिकार है।',
      ur: 'گرفتار شدہ شخص کو اپنی پسند کے وکیل سے مشورہ کرنے اور اس کے ذریعے اپنا دفاع کرانے کا مکمل حق حاصل ہے۔'
    },
    authority: { en: 'Article 22(1), Constitution of India', hi: 'भारत का संविधान, अनुच्छेद 22(1)', ur: 'آئینِ ہند، آرٹیکل 22(1)' }
  },
  {
    id: 'LP-05',
    title: { en: 'Right to Bail', hi: 'जमानत का अधिकार', ur: 'ضمانت کا حق' },
    desc: {
      en: 'In case of bailable offenses, bail is a matter of right. The police officer must inform the arrested person of their eligibility to be released on securing a surety.',
      hi: 'जमानती अपराधों के मामलों में जमानत पाना एक अधिकार है। पुलिस अधिकारी को गिरफ्तार व्यक्ति को जमानत पर रिहा होने की उसकी पात्रता के बारे में सूचित करना होगा।',
      ur: 'قابلِ ضمانت جرائم میں ضمانت ملنا ملزم کا حق ہے۔ پولیس اہلکار ملزم کو اس کے ضمانت کے حق کے بارے में آگاہ کرنے کا پابند ہے۔'
    },
    authority: { en: 'Section 481 of BNSS (formerly CrPC)', hi: 'बीएनएसएस (पूर्व में CrPC) की धारा 481', ur: 'بی این ایس ایس قوانین' }
  },
  {
    id: 'LP-06',
    title: { en: 'Right against Arbitrary Arrest', hi: 'मनमानी गिरफ्तारी के खिलाफ अधिकार', ur: 'بغیر جواز گرفتاری کے خلاف حق' },
    desc: {
      en: 'The police must present the arrested individual before the nearest Judicial Magistrate within 24 hours of arrest, excluding travel time.',
      hi: 'पुलिस को गिरफ्तार व्यक्ति को यात्रा के समय को छोड़कर गिरफ्तारी के २४ घंटे के भीतर निकटतम न्यायिक मजिस्ट्रेट के समक्ष पेश करना होगा।',
      ur: 'پولیس گرفتاری کے 24 گھنٹے کے اندر ملزم کو قریبی مجسٹریٹ کے سامنے پیش کرنے کی پابند ہے۔ سفر کا وقت اس میں شامل نہیں ہے۔'
    },
    authority: { en: 'Article 22(2), Constitution of India', hi: 'भारत का संविधान, अनुच्छेद 22(2)', ur: 'آئینِ ہند، آرٹیکل 22(2)' }
  },
  {
    id: 'LP-07',
    title: { en: 'Rights during Police Questioning', hi: 'पुलिस पूछताछ के दौरान अधिकार', ur: 'پولیس پوچھ گچھ کے دوران حقوق' },
    desc: {
      en: 'You have the right to remain silent to avoid self-incrimination. Confessions made under police coercion are not valid in court. Interrogations must be respectful.',
      hi: 'स्वयं के विरुद्ध गवाही देने से बचने के लिए आपके पास मौन रहने का अधिकार है। पुलिस के दबाव में किया गया कबूलनामा अदालत में मान्य नहीं है।',
      ur: 'ملزم کو اپنے خلاف گواہی دینے پر مجبور نہیں کیا جا سکتا۔ پولیس دباؤ میں لیا گیا بیان عدالت میں قابلِ قبول نہیں ہوتا۔'
    },
    authority: { en: 'Article 20(3) & BSA admissibility guidelines', hi: 'अनुच्छेद 20(3) एवं बीएसए साक्ष्य दिशा-निर्देश', ur: 'آرٹیکل 20(3)' }
  },
  {
    id: 'LP-08',
    title: { en: 'Specific Protections for Women', hi: 'महिलाओं के लिए विशिष्ट सुरक्षा', ur: 'خواتین کے لیے خصوصی حقوق' },
    desc: {
      en: 'Women cannot be arrested after sunset and before sunrise except by a female officer with a magistrate order. Right to separate lockups, privacy during medical tests, and free counseling.',
      hi: 'महिला पुलिस अधिकारी और मजिस्ट्रेट के आदेश के बिना सूर्यास्त के बाद और सूर्योदय से पहले किसी भी महिला को गिरफ्तार नहीं किया जा सकता। महिलाओं के लिए अलग लॉकअप का प्रावधान है।',
      ur: 'غروب آفتاب کے بعد اور طلوع آفتاب سے پہلے کسی خاتون کو گرفتار نہیں کیا جا سکتا۔ تفتیش خاتون اہلکار کی موجودگی میں ہونی چاہیے۔'
    },
    authority: { en: 'BNSS & Police manual rules', hi: 'बीएनएसएस एवं पुलिस नियमावली', ur: 'بی این ایس ایس اور پولیس قوانین' }
  },
  {
    id: 'LP-09',
    title: { en: 'Specific Rights of Children', hi: 'बच्चों के विशिष्ट अधिकार', ur: 'بچوں کے حقوق' },
    desc: {
      en: 'Children under 18 in conflict with the law cannot be put in jail or standard police lockups. They must be handled by Juvenile Justice Boards and child-friendly police units.',
      hi: 'कानून का उल्लंघन करने वाले १८ वर्ष से कम उम्र के बच्चों को जेल या सामान्य पुलिस लॉकअप में नहीं रखा जा सकता। उन्हें किशोर न्याय बोर्ड द्वारा संभाला जाना चाहिए।',
      ur: '18 سال سے کم عمر بچوں کو عام حوالات یا جیل میں نہیں رکھا جا سکتا۔ ان کا معاملہ جووینائل جسٹس بورڈ دیکھتا ہے۔'
    },
    authority: { en: 'Juvenile Justice Act, 2015', hi: 'किशोर न्याय अधिनियम, 2015', ur: 'جووینائل جسٹس ایکٹ 2015' }
  },
  {
    id: 'LP-10',
    title: { en: 'Rights of Senior Citizens', hi: 'वरिष्ठ नागरिकों के अधिकार', ur: 'بزرگ شہریوں کے حقوق' },
    desc: {
      en: 'Right to claim maintenance from adult children or legal heirs. Speedier dispute disposal in tribunals, and preferential healthcare and transport facilities.',
      hi: 'वयस्क बच्चों या कानूनी वारिसों से भरण-पोषण का दावा करने का अधिकार। न्यायाधिकरणों में विवादों का त्वरित निपटारा, तथा स्वास्थ्य सेवा में प्राथमिकता।',
      ur: 'بزرگوں کو اپنے بچوں یا وارثین سے نان و نفقہ لینے کا قانونی حق حاصل ہے۔ ان کے مقدمات کے لیے علیحدہ ٹربیونل موجود ہیں۔'
    },
    authority: { en: 'Maintenance and Welfare of Parents Act, 2007', hi: 'माता-पिता और वरिष्ठ नागरिकों का भरण-पोषण अधिनियम', ur: 'بزرگ شہریوں کی فلاح کا قانون 2007' }
  },
  {
    id: 'LP-11',
    title: { en: 'Rights of Persons with Disabilities', hi: 'दिव्यांगजनों के अधिकार', ur: 'معذور افراد کے حقوق' },
    desc: {
      en: 'Guarantees equal opportunity, non-discrimination in public employment, accessible buildings, and reservation benefits.',
      hi: 'समान अवसर, सार्वजनिक रोजगार में गैर-भेदभाव, सुगम्य (बाधा रहित) भवनों के निर्माण और आरक्षण लाभों की गारंटी देता है।',
      ur: 'سرکاری ملازمتوں میں کوٹہ، رکاوٹ سے پاک سرکاری عمارات اور برابر کے حقوق کی ضمانत۔'
    },
    authority: { en: 'Rights of Persons with Disabilities Act, 2016', hi: 'दिव्यांगजन अधिकार अधिनियम, 2016', ur: 'معذور افراد کے حقوق کا ایکٹ 2016' }
  },
  {
    id: 'LP-12',
    title: { en: 'Consumer Rights', hi: 'उपभोक्ता अधिकार', ur: 'صارفین کے حقوق' },
    desc: {
      en: 'Protection against marketing of hazardous goods, right to be informed of quality and price, right to seek redressal against unfair trade practices.',
      hi: 'खतरनाक वस्तुओं के विपणन के खिलाफ सुरक्षा, गुणवत्ता और कीमत के बारे में सूचित होने का अधिकार, अनुचित व्यापार प्रथाओं के खिलाफ निवारण पाने का अधिकार।',
      ur: 'ناقص اشیاء کی فروخت کے خلاف تحفظ اور دھوکہ دہی کی صورت میں صارف عدالت سے معاوضہ پانے کا حق۔'
    },
    authority: { en: 'Consumer Protection Act, 2019', hi: 'उपभोक्ता संरक्षण अधिनियम, 2019', ur: 'کنزیومر پروٹیکشن ایکٹ 2019' }
  },
  {
    id: 'LP-13',
    title: { en: 'Digital Privacy & Cyber Safety', hi: 'डिजिटल निजता और साइबर सुरक्षा', ur: 'ڈیجیٹل رازداری اور سائبر تحفظ' },
    desc: {
      en: 'Protects citizens against unauthorized exposure of personal data, identity theft, and hacking. Right to file complaints on the national cyber portal.',
      hi: 'नागरिकों को व्यक्तिगत डेटा के अनधिकृत प्रकटीकरण, पहचान की चोरी और हैकिंग से बचाता है। राष्ट्रीय साइबर पोर्टल पर शिकायत दर्ज करने का अधिकार।',
      ur: 'شہریوں کے نجی ڈیٹا کی حفاظت، ہیکنگ اور آن لائن ہراسانی کے خلاف قانونی تحفظ کا حق۔'
    },
    authority: { en: 'Information Technology Act & DPDP Act', hi: 'सूचना प्रौद्योगिकी अधिनियम एवं डीपीडीपी अधिनियम', ur: 'آئی ٹی ایکٹ اور ڈی پی ڈی پی قانون' }
  },
  {
    id: 'LP-14',
    title: { en: 'Right to Information (RTI)', hi: 'सूचना का अधिकार (RTI)', ur: 'حق معلومات (RTI)' },
    desc: {
      en: 'Empowers citizens to request official records and information from public authorities. The department is mandated to reply within 30 days.',
      hi: 'नागरिकों को सार्वजनिक प्राधिकरणों से आधिकारिक रिकॉर्ड और जानकारी का अनुरोध करने का अधिकार देता है। विभाग को ३० दिनों के भीतर जवाब देना अनिवार्य है।',
      ur: 'شہریوں کو سرکاری محکموں سے معلومات حاصل کرنے کا قانونی حق دیتا ہے۔ محکمہ 30 دن کے اندر جواب دینے کا پابند ہے۔'
    },
    authority: { en: 'Right to Information Act, 2005', hi: 'सूचना का अधिकार अधिनियम, 2005', ur: 'آر ٹی آئی ایکٹ 2005' }
  },
  {
    id: 'LP-15',
    title: { en: 'Protection from Domestic Violence', hi: 'घरेलू हिंसा से सुरक्षा', ur: 'گھریلو تشدد سے تحفظ' },
    desc: {
      en: 'Provides civil remedies such as protection orders, residence orders, and monetary relief to women facing physical, mental, or economic abuse within the household.',
      hi: 'घर के भीतर शारीरिक, मानसिक या आर्थिक शोषण का सामना करने वाली महिलाओं को सुरक्षा आदेश, निवास आदेश और मौद्रिक राहत जैसे नागरिक उपचार प्रदान करता है।',
      ur: 'گھریلو تشدد کا شکار خواتین کو فوری تحفظ، رہائش اور مالی امداد فراہم کرنے کا قانون۔'
    },
    authority: { en: 'DV Act, 2005', hi: 'घरेलू हिंसा अधिनियम, 2005', ur: 'گھریلو تشدد ایکٹ 2005' }
  },
  {
    id: 'LP-16',
    title: { en: 'Protection against Human Trafficking', hi: 'मानव तस्करी के खिलाफ संरक्षण', ur: 'انسانی اسمگلنگ کے خلاف تحفظ' },
    desc: {
      en: 'Absolute constitutional and penal ban on the selling, buying, or forced prostitution of human beings and bonded labour.',
      hi: 'मनुष्यों को बेचने, खरीदने, जबरन वेश्यावृत्ति या बंधुआ मजदूरी कराने पर पूर्ण संवैधानिक और दंडात्मक प्रतिबंध।',
      ur: 'انسانوں کی خرید و فروخت، جبری جسم فروشی اور بندھوا مزدوری پر مکمل قانونی پابندی۔'
    },
    authority: { en: 'Article 23 of Constitution & BNS provisions', hi: 'संविधान का अनुच्छेद 23 एवं बीएनएस प्रावधान', ur: 'آئین کا آرٹیکل 23 اور تعزیراتی دفعات' }
  },
  {
    id: 'LP-17',
    title: { en: 'Protection against Child Labour', hi: 'बाल श्रम के खिलाफ संरक्षण', ur: 'چائلڈ لیبر کے خلاف تحفظ' },
    desc: {
      en: 'Complete ban on employing children below 14 years in commercial and hazardous occupations, and regulation of adolescent work.',
      hi: '१४ वर्ष से कम उम्र के बच्चों को व्यावसायिक और खतरनाक व्यवसायों में नियोजित करने पर पूर्ण प्रतिबंध और किशोरों के काम का विनियमन।',
      ur: '14 سال سے کم عمر بچوں سے تجارتی اداروں یا خطرناک فیکٹریوں میں کام لینے پر مکمل پابندی۔'
    },
    authority: { en: 'Child Labour Prohibition Act, 1986', hi: 'बाल श्रम निषेध अधिनियम, 1986', ur: 'چائلڈ لیبر ایکٹ 1986' }
  },
  {
    id: 'LP-18',
    title: { en: 'Right to Fair Investigation', hi: 'निष्पक्ष जांच का अधिकार', ur: 'منصفانہ تفتیش کا حق' },
    desc: {
      en: 'Guarantees that the police investigation is unbiased, objective, and completed within statutory timelines to prevent wrongful custody.',
      hi: 'गारंटी देता है कि पुलिस जांच निष्पक्ष, वस्तुनिष्ठ और गलत हिरासत को रोकने के लिए कानूनी समय सीमा के भीतर पूरी हो।',
      ur: 'شہری کو یہ حق حاصل ہے کہ پولیس تفتیش بغیر کسی جانبداری کے اور مقررہ وقت کے اندر مکمل کرے۔'
    },
    authority: { en: 'Article 21 & Supreme Court rulings', hi: 'अनुच्छेद 21 एवं सर्वोच्च न्यायालय के निर्णय', ur: 'آرٹیکل 21 اور سپریم کورٹ کے فیصلے' }
  }
];

export const MINORITY_RIGHTS: MinorityRight[] = [
  {
    article: 'Article 25',
    title: {
      en: 'Freedom of Conscience & Religion',
      hi: 'अंतःकरण की और धर्म के आचरण की स्वतंत्रता',
      ur: 'مذہب کی پیروی اور تبلیغ کی آزادی'
    },
    desc: {
      en: 'Grants all persons freedom of conscience and the right to freely profess, practice, and propagate their religion, subject only to public order, morality, and health.',
      hi: 'सार्वजनिक व्यवस्था, नैतिकता और स्वास्थ्य के अधीन सभी व्यक्तियों को अंतःकरण की स्वतंत्रता और अपने धर्म को स्वतंत्र रूप से मानने, आचरण करने और प्रचार करने का अधिकार देता है।',
      ur: 'تمام شہریوں کو ضمیر کی آزادی اور مذہب کو ماننے، اس پر عمل کرنے اور اس کی تبلیغ کا حق حاصل ہے، بشرطیکہ اس سے امن عامہ اور اخلاقیات متاثر نہ ہوں۔'
    }
  },
  {
    article: 'Article 26',
    title: {
      en: 'Freedom to Manage Religious Affairs',
      hi: 'धार्मिक मामलों के प्रबंध की स्वतंत्रता',
      ur: 'مذہبی امور کی دیکھ بھال کی آزادی'
    },
    desc: {
      en: 'Allows religious denominations to establish and maintain institutions for religious and charitable purposes, manage their own affairs in matters of religion, and own and administer property.',
      hi: 'धार्मिक संप्रदायों को धार्मिक और धर्मार्थ उद्देश्यों के लिए संस्थान स्थापित करने और बनाए रखने, अपने धार्मिक मामलों का प्रबंधन करने और संपत्ति रखने व उसका प्रशासन करने की अनुमति देता है।',
      ur: 'مذہبی گروہوں کو فلاحی مقاصد کے لیے ادارے قائم کرنے، اپنے مذہبی معاملات سنبھالنے اور املاک رکھنے کا قانونی حق دیتا ہے۔'
    }
  },
  {
    article: 'Article 27',
    title: {
      en: 'Freedom as to Payment of Taxes',
      hi: 'धर्म की अभिवृद्धि के लिए करों के संदाय से स्वतंत्रता',
      ur: 'مذہبی ٹیکسوں سے استثنیٰ کا حق'
    },
    desc: {
      en: 'No citizen can be compelled to pay any taxes specifically intended or appropriated for the promotion or maintenance of any particular religion or religious denomination.',
      hi: 'किसी भी नागरिक को किसी विशेष धर्म या धार्मिक संप्रदाय को बढ़ावा देने या बनाए रखने के लिए विशेष रूप से लगाए गए करों का भुगतान करने के लिए मजबूर नहीं किया जा सकता।',
      ur: 'کسی بھی شہری کو ایسا ٹیکس دینے پر مجبور نہیں کیا جا سکتا جس کی رقم کسی خاص مذہب کی ترویج کے لیے مختص کی گئی ہو۔'
    }
  },
  {
    article: 'Article 28',
    title: {
      en: 'Freedom as to Religious Instruction',
      hi: 'धार्मिक शिक्षा में उपस्थित होने से स्वतंत्रता',
      ur: 'تعلیمی اداروں میں مذہبی تعلیم کے قوانین'
    },
    desc: {
      en: 'Bans religious instruction in educational institutions fully maintained by State funds. In state-aided or recognized institutions, religious instruction is optional and requires student/guardian consent.',
      hi: 'पूर्ण रूप से राज्य निधि से संचालित शैक्षणिक संस्थानों में धार्मिक शिक्षा देने पर प्रतिबंध लगाता है। राज्य सहायता प्राप्त संस्थानों में धार्मिक शिक्षा में भाग लेना स्वैच्छिक है।',
      ur: 'حکومتی فنڈز سے چلنے والے اسکولوں میں مذہبی تعلیم دینے پر پابندی ہے۔ امدادی اسکولوں میں یہ تعلیم اختیاری ہے اور اس کے لیے سرپرست کی اجازت لازمی ہے۔'
    }
  },
  {
    article: 'Article 29',
    title: {
      en: 'Protection of Language, Script & Culture',
      hi: 'अल्पसंख्यक वर्गों के हितों का संरक्षण',
      ur: 'زبان، رسم الخط اور ثقافت کا تحفظ'
    },
    desc: {
      en: 'Guarantees that any section of citizens residing in India having a distinct language, script, or culture of its own has the fundamental right to conserve the same.',
      hi: 'गारंटी देता है कि भारत में रहने वाले नागरिकों के किसी भी वर्ग को, जिसकी अपनी विशिष्ट भाषा, लिपि या संस्कृति है, उसे संरक्षित करने का मौलिक अधिकार है।',
      ur: 'ملک میں بسنے والے کسی بھی طبقے کو اپنی مخصوص زبان، رسم الخط یا ثقافت کو برقرار رکھنے اور اس کے تحفظ کا حق حاصل ہے۔'
    }
  },
  {
    article: 'Article 30',
    title: {
      en: 'Right to Establish Educational Institutions',
      hi: 'अल्पसंख्यक वर्गों का शिक्षा संस्थाओं की स्थापना का अधिकार',
      ur: 'تعلیمی ادارے قائم کرنے کا اقلیتی حق'
    },
    desc: {
      en: 'Grants all religious and linguistic minorities the fundamental right to establish and administer educational institutions of their choice, with non-discrimination in government grants.',
      hi: 'सभी धार्मिक और भाषाई अल्पसंख्यकों को अपनी पसंद के शैक्षणिक संस्थान स्थापित करने और प्रबंधित करने का मौलिक अधिकार देता है, तथा सरकारी अनुदान में कोई भेदभाव नहीं किया जाएगा।',
      ur: 'تمام مذہبی اور لسانی اقلیتوں کو اپنی پسند کے تعلیمی ادارے قائم کرنے، ان کا انتظام سنبھالنے اور حکومती مالی امداد یکساں حاصل کرنے کا بنیادی حق حاصل ہے۔'
    }
  }
];

export const IMPORTANT_LAWS: IndianLaw[] = [
  {
    id: 'LAW-01',
    title: { en: 'Bharatiya Nyaya Sanhita (BNS)', hi: 'भारतीय न्याय संहिता (BNS)', ur: 'بھارتیہ نیاۓ سنہتا (BNS)' },
    desc: {
      en: 'The penal code of India replacing the Indian Penal Code (IPC). Defines criminal offenses, punishments, and focuses heavily on crimes against women, children, and national sovereignty.',
      hi: 'भारतीय दंड संहिता (IPC) की जगह लेने वाली भारत की आपराधिक संहिता। आपराधिक अपराधों, सजाओं को परिभाषित करती है और महिलाओं, बच्चों और राष्ट्रीय सुरक्षा के खिलाफ अपराधों पर ध्यान केंद्रित करती है।',
      ur: 'پرانے تعزیراتِ ہند (IPC) کی جگہ نافذ العمل مجموعہ قوانین۔ اس میں سنگین جرائم، سزائیں اور خواتین و بچوں کے خلاف جرائم کی سزا کے سخت قوانین درج ہیں۔'
    },
    keyBenefit: { en: 'Modernized definitions, community service alternatives for minor offenses.', hi: 'आधुनिक परिभाषाएं, छोटे अपराधों के लिए वैकल्पिक सामुदायिक सेवा की सजा।', ur: 'جدید تکنیکی تعریفیں اور چھوٹے جرائم کے لیے کمیونٹی سروس کی سزا۔' }
  },
  {
    id: 'LAW-02',
    title: { en: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', hi: 'भारतीय नागरिक सुरक्षा संहिता (BNSS)', ur: 'بھارتیہ ناگرک سرکشا سنہتا (BNSS)' },
    desc: {
      en: 'The procedural law governing criminal investigations, arrests, trials, and bail in India, replacing the Code of Criminal Procedure (CrPC).',
      hi: 'भारत में आपराधिक जांच, गिरफ्तारी, मुकदमे और जमानत को नियंत्रित करने वाला प्रक्रियात्मक कानून, जिसने दंड प्रक्रिया संहिता (CrPC) का स्थान लिया है।',
      ur: 'ملک میں فوجداری تفتیش، گرفتاریوں، مقدمات کی سماعت اور ضمانت کے طریقہ کار کا نیا مجموعہ قوانین جو پرانے CrPC کی جگہ لایا گیا ہے۔'
    },
    keyBenefit: { en: 'Mandatory timelines for investigations and judgments, audio-video recording of searches.', hi: 'जांच और फैसलों के लिए अनिवार्य समय सीमा, तलाशी की ऑडियो-वीडियो रिकॉर्डिंग।', ur: 'مقدمات کے فیصلوں کی وقت پر تکمیل اور تفتیش کی ویڈیو ریکارڈنگ کا لازمی اصول۔' }
  },
  {
    id: 'LAW-03',
    title: { en: 'Bharatiya Sakshya Adhiniyam (BSA)', hi: 'भारतीय साक्ष्य अधिनियम (BSA)', ur: 'بھارتیہ ساکشیہ ادھینیم (BSA)' },
    desc: {
      en: 'Governs the admissibility of evidence and testimonies in court trials, replacing the Indian Evidence Act.',
      hi: 'अदालती मुकदमों में साक्ष्य और गवाही की स्वीकार्यता को नियंत्रित करता है, जिसने भारतीय साक्ष्य अधिनियम का स्थान लिया है।',
      ur: 'عدالتی مقدمات میں ثبوتوں اور گواہیوں کی قبولیت کا نیا قانون جو پرانے انڈین ایویڈنس ایکٹ کی جگہ لایا گیا ہے۔'
    },
    keyBenefit: { en: 'Expanded recognition of electronic and digital records as primary evidence.', hi: 'प्राथमिक साक्ष्य के रूप में इलेक्ट्रॉनिक और डिजिटल रिकॉर्ड की मान्यता का विस्तार।', ur: 'ڈیجیٹل اور الیکٹرانک ثبوتوں کو قانونی طور پر بنیادی ثبوت کا درجہ۔' }
  },
  {
    id: 'LAW-04',
    title: { en: 'Right to Information Act, 2005', hi: 'सूचना का अधिकार अधिनियम, २००५', ur: 'حق معلومات ایکٹ 2005' },
    desc: {
      en: 'A milestone law that gives citizens the legal right to request information from government departments, ensuring transparency and accountability.',
      hi: 'एक मील का पत्थर कानून जो नागरिकों को सरकारी विभागों से जानकारी मांगने का कानूनी अधिकार देता है, जिससे पारदर्शिता सुनिश्चित होती है।',
      ur: 'سرکاری محکموں سے ریکارڈ حاصل کرنے کا تاریخی قانون جو بدعنوانی کو روکنے اور شفافیت لانے کے لیے بنایا گیا ہے۔'
    },
    keyBenefit: { en: 'Enforces answerability of public officials within 30 days of filing.', hi: 'आवेदन दाखिल करने के ३० दिनों के भीतर सरकारी अधिकारियों की जवाबदेही तय करता है।', ur: 'درخواست دائر کرنے کے 30 دن کے اندر معلومات کی فراہمی لازمی ہے۔' }
  },
  {
    id: 'LAW-05',
    title: { en: 'Consumer Protection Act, 2019', hi: 'उपभोक्ता संरक्षण अधिनियम, २०१९', ur: 'صارفین کے حقوق کا ایکٹ 2019' },
    desc: {
      en: 'Protects the rights of consumers against defective goods, deficient services, misleading ads, and unfair contract terms.',
      hi: 'दोषपूर्ण वस्तुओं, त्रुटिपूर्ण सेवाओं, भ्रामक विज्ञापनों और अनुचित अनुबंध शर्तों के खिलाफ उपभोक्ताओं के अधिकारों की रक्षा करता है।',
      ur: 'ناقص سامان کی فروخت، غلط اشتہار بازی اور دھوکہ دہی کے خلاف خریداروں کو قانونی تحفظ دیتا ہے۔'
    },
    keyBenefit: { en: 'Allows filing complaints online via e-Daakhil and establishes central regulatory authorities.', hi: 'ई-दाखिल के माध्यम से ऑनलाइन शिकायत दर्ज करने की अनुमति देता है।', ur: 'صارفین کو ای داخل پورٹل کے ذریعے آن لائن شکایت درج کرنے کی سہولت۔' }
  },
  {
    id: 'LAW-06',
    title: { en: 'Protection of Women from Domestic Violence Act, 2005', hi: 'घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, २००५', ur: 'گھریلو تشدد سے خواتین کا تحفظ ایکٹ 2005' },
    desc: {
      en: 'Provides immediate civil and legal protection to women facing physical, sexual, verbal, emotional, or economic abuse within a shared household.',
      hi: 'एक साझा घर के भीतर शारीरिक, यौन, मौखिक, भावनात्मक या आर्थिक शोषण का सामना करने वाली महिलाओं को तत्काल नागरिक और कानूनी सुरक्षा प्रदान करता है।',
      ur: 'گھر کے اندر خواتین کے ساتھ مار پیٹ، ذہنی یا مالی ہراسانی کی صورت میں فوری ریلیف اور علیحدہ رہائش و خرچے کا انتظام۔'
    },
    keyBenefit: { en: 'Enables quick court orders for protection, residence, and maintenance.', hi: 'सुरक्षा, निवास और भरण-पोषण के लिए त्वरित अदालती आदेश सक्षम बनाता है।', ur: 'عدالت کے ذریعے فوری حفاظتی احکامات اور نان و نفقہ کا بندوبست۔' }
  }
];

export const IMPORTANT_INSTITUTIONS: LegalInstitution[] = [
  {
    id: 'INS-01',
    title: { en: 'Supreme Court of India', hi: 'भारत का सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    role: {
      en: 'The highest judicial court in India and the ultimate guardian of the Constitution and Fundamental Rights.',
      hi: 'भारत की सर्वोच्च न्यायिक अदालत और संविधान व मौलिक अधिकारों की अंतिम संरक्षक।',
      ur: 'ملک کی سب سے بڑی عدالت اور آئین ہند و بنیادی حقوق کی آخری محافظ۔'
    },
    approach: {
      en: 'Any citizen can directly approach the Supreme Court under Article 32 via a Writ Petition if their fundamental rights are violated, or file appeals against High Court verdicts.',
      hi: 'यदि किसी नागरिक के मौलिक अधिकारों का उल्लंघन होता है, तो वह अनुच्छेद 32 के तहत रिट याचिका के जरिए सीधे सर्वोच्च न्यायालय जा सकता है, या उच्च न्यायालय के फैसलों के खिलाफ अपील कर सकता है।',
      ur: 'بنیادی حقوق کی خلاف ورزی پر کوئی بھی شہری آرٹیکل 32 کے تحت براہ راست سپریم کورٹ میں رٹ دائر کر سکتا ہے، یا ہائی کورٹ کے خلاف اپیل کر سکتا ہے۔'
    },
    complaints: {
      en: 'Constitutional matters, major public interest litigations (PIL), inter-state disputes, and ultimate legal appeals.',
      hi: 'संवैधानिक मामले, जनहित याचिकाएं (PIL), अंतर-राज्यीय विवाद और अंतिम कानूनी अपीलें।',
      ur: 'آئینی معاملات، مفاد عامہ کے مقدمات (PIL)، بین الصوبائی تنازعات اور آخری اپیلیں۔'
    }
  },
  {
    id: 'INS-02',
    title: { en: 'High Courts of States', hi: 'राज्यों के उच्च न्यायालय', ur: 'ریاستی ہائی کورٹس' },
    role: {
      en: 'The highest judicial institution at the state level with powers of superintendence over all district courts.',
      hi: 'राज्य स्तर पर सर्वोच्च न्यायिक संस्थान, जिसे सभी जिला अदालतों पर अधीक्षण की शक्तियां प्राप्त हैं।',
      ur: 'ریاستی سطح کی سب سے بڑی عدالت جس کے تحت ریاست کے تمام اضلاع کے جوڈیشل سسٹم کام کرتے ہیں۔'
    },
    approach: {
      en: 'Citizens can approach under Article 226 of the Constitution for the enforcement of fundamental rights or other legal rights.',
      hi: 'नागरिक मौलिक अधिकारों या अन्य कानूनी अधिकारों को लागू करने के लिए संविधान के अनुच्छेद 226 के तहत जा सकते हैं।',
      ur: 'شہری آرٹیکل 226 کے تحت بنیادی یا قانونی حقوق کی بحالی کے لیے رجوع کر سکتے ہیں۔'
    },
    complaints: {
      en: 'Civil and criminal appeals, writ petitions, tax matters, and structural legal disputes.',
      hi: 'दीवानी और आपराधिक अपीलें, रिट याचिकाएं, कर मामले और संरचनात्मक कानूनी विवाद।',
      ur: 'سول اور کرمنل اپیلیں، رٹ پٹیشنز، ٹیکس اور زمینی تنازعات۔'
    }
  },
  {
    id: 'INS-03',
    title: { en: 'National Commission for Minorities (NCM)', hi: 'राष्ट्रीय अल्पसंख्यक आयोग', ur: 'قومی کمیشن برائے اقلیت' },
    role: {
      en: 'Statutory body established to safeguard, evaluate, and monitor the progress of minorities under the Constitution and laws.',
      hi: 'संविधान और कानूनों के तहत अल्पसंख्यकों की प्रगति की रक्षा, मूल्यांकन और निगरानी के लिए स्थापित वैधानिक निकाय।',
      ur: 'اقلیتی برادریوں کے حقوق کے تحفظ، نگرانی اور ان کی ترقی کا جائزہ لینے کا ایک آئینی ادارہ۔'
    },
    approach: {
      en: 'Minority community members can submit online/offline petitions directly to the NCM regarding discrimination, deprivation of rights, or harassment.',
      hi: 'अल्पसंख्यक समुदाय के सदस्य भेदभाव, अधिकारों से वंचित किए जाने या उत्पीड़न के संबंध में सीधे आयोग को ऑनलाइन/ऑफलाइन शिकायतें भेज सकते हैं।',
      ur: 'اقلیتی برادری کا کوئی بھی فرد اپنے ساتھ ہونے والی تفریق، ہراسانی یا حق تلفی کے خلاف آن لائن یا آف لائن شکایت درج کروا سکتا ہے۔'
    },
    complaints: {
      en: 'Discrimination by authorities, denial of minority scholarship benefits, communal harassment, and safety concerns.',
      hi: 'अधिकारियों द्वारा भेदभाव, अल्पसंख्यक छात्रवृत्ति लाभों से इनकार, सांप्रदायिक उत्पीड़न और सुरक्षा चिंताएं।',
      ur: 'تفریق آمیز سلوک، اسکالرشپ نہ ملنا، فرقہ وارانہ ہراسانی اور سیکیورٹی سے متعلق شکایات۔'
    }
  },
  {
    id: 'INS-04',
    title: { en: 'State Legal Services Authorities (SLSA / DLSA)', hi: 'राज्य/जिला कानूनी सेवा प्राधिकरण', ur: 'ریاستی و ضلعی قانونی امدادی ادارے' },
    role: {
      en: 'Bodies formed to provide free legal services to eligible people, set up Lok Adalats, and spread legal literacy.',
      hi: 'पात्र लोगों को मुफ्त कानूनी सेवाएं प्रदान करने, लोक अदालतें स्थापित करने और कानूनी साक्षरता फैलाने के लिए गठित निकाय।',
      ur: 'مستحق اور غریب شہریوں کو مفت وکیل فراہم کرنے، لوک عدالتیں قائم کرنے اور قانونی بیداری پیدا کرنے کے ذمہ دار ادارے۔'
    },
    approach: {
      en: 'Eligible citizens can visit the DLSA office situated inside every District Court complex to apply for a free legal defense counsel.',
      hi: 'पात्र नागरिक मुफ्त कानूनी वकील के लिए आवेदन करने के लिए प्रत्येक जिला न्यायालय परिसर के भीतर स्थित DLSA कार्यालय जा सकते हैं।',
      ur: 'کوئی بھی اہل شہری ہر ضلعی عدالت میں موجود DLSA دفتر جا کر مفت سرکاری وکیل کے لیے درخواست دائر کر سکتا ہے۔'
    },
    complaints: {
      en: 'Filing cases, drafting petitions, defense in ongoing civil or criminal matters, and out-of-court settlements.',
      hi: 'मामले दर्ज करना, याचिकाएं तैयार करना, चल रहे दीवानी या आपराधिक मामलों में बचाव और अदालत से बाहर निपटारे।',
      ur: 'مقدمات کا اندراج، عرضی تیار کرنا، اور عدالتوں میں جاری مقدمات میں مفت دفاع فراہم کرنا۔'
    }
  },
  {
    id: 'INS-05',
    title: { en: 'Lok Adalat (People\'s Court)', hi: 'लोक अदालत (पीपुल्स कोर्ट)', ur: 'لوک عدالت (عوامی کچہری)' },
    role: {
      en: 'An alternative dispute resolution mechanism where cases pending in courts or at pre-litigation stages are settled amicably with mutual consent.',
      hi: 'एक वैकल्पिक विवाद समाधान तंत्र जहां अदालतों में लंबित या मुकदमेबाजी से पहले के मामलों को आपसी सहमति से सौहार्दपूर्ण ढंग से निपटाया जाता है।',
      ur: 'ایک ایسا متبادل نظام جہاں باہمی رضامندی سے پرانے اور جاری مقدمات کا پرامن، تیز رفتار اور مفت حل تلاش کیا جاتا ہے۔'
    },
    approach: {
      en: 'Parties can jointly apply to reference their pending case to an upcoming Lok Adalat organized periodically.',
      hi: 'पक्षकार समय-समय पर आयोजित होने वाली आगामी लोक अदालत में अपने लंबित मामले को भेजने के लिए संयुक्त रूप से आवेदन कर सकते हैं।',
      ur: 'فریقین مشترکہ طور پر اپنی درخواست متعلقہ عدالت میں دے سکتے ہیں تاکہ معاملے کو لوک عدالت میں منتقل کیا جائے۔'
    },
    complaints: {
      en: 'Family disputes, land disputes, petty offenses, compoundable criminal cases, bank recovery disputes, and electricity complaints.',
      hi: 'पारिवारिक विवाद, भूमि विवाद, छोटे अपराध, शमनीय आपराधिक मामले, बैंक वसूली विवाद और बिजली शिकायतें।',
      ur: 'خاندانی تنازعات، زمین کے لین دین، بجلی اور پانی کے بلوں کے تنازعات اور چھوٹے فوجداری مقدمات۔'
    }
  }
];

export const LEGAL_GLOSSARY: LegalGlossaryItem[] = [
  {
    term: { en: 'Writ', hi: 'रिट (Writ)', ur: 'رٹ (Writ)' },
    definition: {
      en: 'A formal written order issued by the Supreme Court or High Court commanding an authority or person to act or cease acting in a specific way.',
      hi: 'सर्वोच्च न्यायालय या उच्च न्यायालय द्वारा जारी एक औपचारिक लिखित आदेश जो किसी प्राधिकारी या व्यक्ति को एक विशिष्ट तरीके से कार्य करने या रोकने का निर्देश देता है।',
      ur: 'سپریم کورٹ یا ہائی کورٹ کی طرف سے جاری کردہ تحریری حکم نامہ جو کسی افسر یا ادارے کو مخصوص کام کرنے یا باز رہنے کا حکم دیتا ہے۔'
    }
  },
  {
    term: { en: 'Habeas Corpus', hi: 'बंदी प्रत्यक्षीकरण (Habeas Corpus)', ur: 'ہبیس کارپس (Habeas Corpus)' },
    definition: {
      en: 'Literally meaning "to have the body". A writ used to secure the release of a person who has been unlawfully detained by police or private individuals.',
      hi: 'इसका शाब्दिक अर्थ है "शरीर को प्रस्तुत करना"। पुलिस या निजी व्यक्तियों द्वारा अवैध रूप से हिरासत में लिए गए व्यक्ति को रिहा करने के लिए इस्तेमाल की जाने वाली रिट।',
      ur: 'اس کا مطلب ہے "جسم کو پیش کرنا"۔ یہ رٹ کسی بھی ایسے شخص کی رہائی کے لیے جاری کی جاتی ہے جسے پولیس یا کسی شخص نے غیر قانونی حراست میں رکھا ہو۔'
    }
  },
  {
    term: { en: 'Cognizable Offense', hi: 'संज्ञेय अपराध (Cognizable Offense)', ur: 'قابلِ دست اندازی جرم' },
    definition: {
      en: 'A category of serious crimes (like murder, theft, rape) where a police officer has the authority to make an arrest without a warrant and start an investigation without magistrate approval.',
      hi: 'गंभीर अपराधों की एक श्रेणी (जैसे हत्या, चोरी, बलात्कार) जहां एक पुलिस अधिकारी के पास वारंट के बिना गिरफ्तार करने और मजिस्ट्रेट की मंजूरी के बिना जांच शुरू करने का अधिकार होता है।',
      ur: 'ایسے سنگین جرائم (جیسے چوری، ڈکیتی، قتل) جس میں پولیس بغیر وارنٹ کے ملزم کو گرفتار کرنے اور تفتیش شروع کرنے کی مجاز ہوتی ہے۔'
    }
  },
  {
    term: { en: 'Bailable Offense', hi: 'जमानती अपराध (Bailable Offense)', ur: 'قابلِ ضمانت جرم' },
    definition: {
      en: 'An offense of a less serious nature where obtaining bail from police or court is guaranteed as a matter of right upon securing required sureties.',
      hi: 'कम गंभीर प्रकृति का अपराध जहां आवश्यक जमानतदार प्रदान करने पर पुलिस या अदालत से जमानत प्राप्त करना एक अधिकार के रूप में सुनिश्चित होता है।',
      ur: 'کم سنگین جرائم جن میں ملزم کا حقِ ضمانت تسلیم کیا جاتا ہے اور معمولی ضمانتی مچلکے پر رہائی مل جاتی ہے۔'
    }
  },
  {
    term: { en: 'RTI', hi: 'सूचना का अधिकार (RTI)', ur: 'حقِ معلومات (RTI)' },
    definition: {
      en: 'The Right to Information, enabling citizens to legally inspect government records, copy documents, and seek operational details of public projects.',
      hi: 'सूचना का अधिकार, नागरिकों को सरकारी रिकॉर्ड का निरीक्षण करने, दस्तावेजों की प्रतियां लेने और सार्वजनिक परियोजनाओं के संचालन विवरण प्राप्त करने में सक्षम बनाता है।',
      ur: 'حق معلومات جس کے تحت کوئی بھی شہری کسی بھی سرکاری ریکارڈ کا معائنہ کر سکتا ہے اور دستاویزات حاصل کر سکتا ہے۔'
    }
  }
];

export const TRANSLATIONS: Record<string, Record<Language, string>> = {
  title: {
    en: 'Fundamental Rights & Legal Awareness',
    hi: 'मौलिक अधिकार, कानूनी जागरूकता और संवैधानिक संरक्षण',
    ur: 'بنیادی حقوق، قانونی بیداری اور آئینی تحفظ'
  },
  subtitle: {
    en: 'Authentic educational directory on citizen rights, legal remedies, acts, and institutional procedures under the Constitution of India.',
    hi: 'भारत के संविधान के तहत नागरिक अधिकारों, कानूनी उपचारों, अधिनियमों और संस्थागत प्रक्रियाओं पर प्रामाणिक शैक्षणिक निर्देशिका।',
    ur: 'آئینِ ہند کے تحت شہریوں کے حقوق، قانونی چارہ جوئی، اہم قوانین اور عدالتی طریقہ کار پر مشتمل مستند معلوماتی گائیڈ۔'
  },
  disclaimerText: {
    en: 'Disclaimer: This section is intended solely for public legal awareness and education. It does not constitute formal legal advice. Users should refer to the Constitution of India, official gazettes, and consult a qualified legal professional for specific cases.',
    hi: 'अस्वीकरण: यह अनुभाग केवल सार्वजनिक कानूनी जागरूकता और शिक्षा के लिए है। यह औपचारिक कानूनी सलाह नहीं है। विशिष्ट मामलों के लिए उपयोगकर्ताओं को भारत का संविधान, आधिकारिक राजपत्र और योग्य कानूनी विशेषज्ञ से परामर्श करना चाहिए।',
    ur: 'اعلانِ لا تعلقی: یہ سیکشن صرف عوامی قانونی بیداری اور تعلیمی مقاصد کے لیے ہے۔ اسے باقاعدہ قانونی مشورہ نہ سمجھا جائے۔ کسی بھی مخصوص معاملے کے لیے آئین ہند، سرکاری دستاویزات اور مستند قانونی ماہر سے رجوع کیا جائے۔'
  },
  searchPlaceholder: {
    en: 'Search by article, act, institution, or legal topic...',
    hi: 'अनुच्छेद, अधिनियम, संस्थान या कानूनी विषय खोजें...',
    ur: 'آرٹیکل نمبر، قانون، ادارہ یا قانونی موضوع تلاش کریں...'
  },
  allCategories: {
    en: 'All Topics',
    hi: 'सभी विषय',
    ur: 'تمام موضوعات'
  },
  bookmarksTitle: {
    en: 'Bookmarked Rights',
    hi: 'बुकमार्क किए गए अधिकार',
    ur: 'محفوظ کردہ حقوق'
  },
  noBookmarks: {
    en: 'No bookmarks saved yet. Click the ⭐ button on any card to bookmark for quick access.',
    hi: 'अभी तक कोई बुकमार्क नहीं सहेज गया है। त्वरित पहुंच के लिए किसी भी कार्ड पर ⭐ बटन पर क्लिक करें।',
    ur: 'ابھی تک کوئی معلومات محفوظ نہیں کی گئی۔ کسی بھی کارڈ پر موجود ستارے ⭐ کے بٹن پر کلک کر کے اسے محفوظ کریں۔'
  },
  timelineTitle: {
    en: 'Interactive Constitution Milestone Timeline',
    hi: 'संवैधानिक मील के पत्थर की समयरेखा (Timeline)',
    ur: 'آئینِ ہند کے تاریخی مراحل کا ٹائم لائن'
  },
  quizTitle: {
    en: 'Interactive "Know Your Rights" Citizen Cases',
    hi: 'इंटरएक्टिव "अपने अधिकारों को जानें" नागरिक मामले',
    ur: 'انٹرایکٹو "اپنے حقوق جانیں" عوامی کوئز'
  },
  revealAnswer: {
    en: 'Reveal Legal Verdict & Law Basis',
    hi: 'कानूनी फैसला और कानून का आधार देखें',
    ur: 'قانونی جواب اور دفعہ کی تفصیل دیکھیں'
  },
  lawBasisLabel: {
    en: 'Governing Law:',
    hi: 'शासकीय कानून:',
    ur: 'متعلقہ قانون / دفعہ:'
  },
  articlesNum: {
    en: 'Articles',
    hi: 'अनुच्छेद',
    ur: 'آرٹیکل'
  },
  scInterpretationsLabel: {
    en: 'Supreme Court Landmark Ruling:',
    hi: 'सर्वोच्च न्यायालय का ऐतिहासिक निर्णय:',
    ur: 'سپریم کورٹ کا تاریخی فیصلہ:'
  },
  exampleLabel: {
    en: 'Real-Life Scenario:',
    hi: 'वास्तविक जीवन का उदाहरण:',
    ur: 'عملی زندگی کی مثال:'
  },
  bookmarkButtonText: {
    en: 'Bookmark',
    hi: 'बुकमार्क करें',
    ur: 'محفوظ کریں'
  },
  bookmarkedText: {
    en: 'Bookmarked',
    hi: 'बुकमार्क किया गया',
    ur: 'محفوظ شدہ'
  },
  legalGlossaryTitle: {
    en: 'Legal Terms Glossary',
    hi: 'कानूनी शब्दावली',
    ur: 'قانونی اصطلاحات کی ڈکشنری'
  },
  rightsOfMinoritiesTitle: {
    en: 'Rights & Safeguards for Religious Minorities',
    hi: 'धार्मिक अल्पसंख्यकों के लिए संवैधानिक अधिकार और सुरक्षा उपाय',
    ur: 'آئین ہند میں مذہبی اقلیتوں کے حقوق اور تحفظات'
  },
  rightsOfMinoritiesSub: {
    en: 'Factual, constitutional protections guaranteed under Articles 25-30 for minorities (including Muslims, Christians, Sikhs, Buddhists, Jains, Parsis).',
    hi: 'अनुच्छेद 25-30 के तहत अल्पसंख्यकों (मुस्लिम, ईसाई, सिख, बौद्ध, जैन, पारसी सहित) के लिए गारंटीकृत प्रामाणिक, संवैधानिक संरक्षण।',
    ur: 'آئین کے آرٹیکل 25-30 کے تحت تمام اقلیتوں (بشمول مسلم، عیسائی، سکھ، بدھسٹ، جین، پارسی) کے لیے آئینی حقوق کی تفصیل۔'
  },
  importantInstitutionsTitle: {
    en: 'Constitutional Institutions & Dispute Redressal',
    hi: 'संवैधानिक संस्थाएं और विवाद निवारण केंद्र',
    ur: 'آئینی ادارے اور عوامی شکایات کے مراکز'
  },
  institutionsRole: {
    en: 'Role & Jurisdiction:',
    hi: 'भूमिका और अधिकार क्षेत्र:',
    ur: 'کردار اور دائرہ اختیار:'
  },
  institutionsApproach: {
    en: 'How to Approach:',
    hi: 'कैसे संपर्क करें / प्रक्रिया:',
    ur: 'رجوع کرنے کا طریقہ کار:'
  },
  institutionsComplaints: {
    en: 'Types of Complaints Handled:',
    hi: 'संभाली जाने वाली शिकायतों के प्रकार:',
    ur: 'شکایات کی اقسام جن کا حل کیا جاتا ہے:'
  },
  printBtn: {
    en: 'Print Handbook',
    hi: 'हैंडबुक प्रिंट करें',
    ur: 'ہینڈ بک پرنٹ کریں'
  },
  legalHelpTitle: {
    en: 'Emergency Legal Assistance Contacts',
    hi: 'आपातकालीन कानूनी सहायता संपर्क',
    ur: 'ہنگامی قانونی مدد کے نمبرز'
  },
  callNow: {
    en: 'Call Now',
    hi: 'कॉल करें',
    ur: 'فوری رابطہ کریں'
  },
  copied: {
    en: 'Copied!',
    hi: 'कॉपी किया गया!',
    ur: 'کاپی ہو گیا!'
  },
  visitSite: {
    en: 'Official Portal',
    hi: 'आधिकारिक पोर्टल',
    ur: 'آفیشل پورٹل'
  },
  scTab: {
    en: 'Fundamental Rights',
    hi: 'मौलिक अधिकार',
    ur: 'بنیادی حقوق'
  },
  dutiesTab: {
    en: 'Fundamental Duties',
    hi: 'मौलिक कर्तव्य',
    ur: 'بنیادی فرائض'
  },
  dpspTab: {
    en: 'Directive Principles',
    hi: 'नीति निदेशक तत्व',
    ur: 'رہنما اصول (DPSP)'
  },
  protectionsTab: {
    en: 'Citizen Legal Protections',
    hi: 'नागरिक कानूनी सुरक्षा',
    ur: 'شہریوں کا قانونی تحفظ'
  },
  minoritiesTab: {
    en: 'Minority Rights',
    hi: 'अल्पसंख्यक अधिकार',
    ur: 'اقلیتی حقوق'
  },
  lawsTab: {
    en: 'Important Indian Laws',
    hi: 'महत्वपूर्ण भारतीय कानून',
    ur: 'اہم ہندوستانی قوانین'
  },
  institutionsTab: {
    en: 'Judiciary & Commissions',
    hi: 'न्यायपालिका और आयोग',
    ur: 'عدلیہ اور کمیشن'
  },
  glossaryTab: {
    en: 'Legal Glossary',
    hi: 'कानूनी शब्दावली',
    ur: 'اصطلاحات کی لغت'
  }
};
