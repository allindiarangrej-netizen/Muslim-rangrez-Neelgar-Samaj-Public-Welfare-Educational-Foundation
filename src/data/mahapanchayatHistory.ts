export interface HistoryChapter {
  chapter: string;
  title: {
    en: string;
    hi: string;
    ur: string;
  };
  subtitle: {
    en: string;
    hi: string;
    ur: string;
  };
  content: {
    en: string;
    hi: string;
    ur: string;
  };
  image?: {
    url: string;
    captionEn: string;
    captionHi: string;
    captionUr: string;
  };
  timelineDate?: string;
  milestoneEn?: string;
  milestoneHi?: string;
  milestoneUr?: string;
}

export const mahapanchayatHistoryContent: HistoryChapter[] = [
  {
    chapter: "Chapter 1",
    title: {
      en: "Foundation Consultation (June 2025)",
      hi: "स्थापना परामर्श एवं प्रारंभिक विमर्श (जून 2025)",
      ur: "بنیادی مشاورت اور ابتدائی اجلاس (جون 2025)"
    },
    subtitle: {
      en: "The Awakening of Collective Will and Pre-Assembly Deliberations",
      hi: "सामूहिक इच्छाशक्ति का उदय और महापंचायत से पूर्व की प्रारंभिक बैठकें",
      ur: "اجتماعی ارادے بیداری اور مہاپنچایت سے پہلے کے مشاورتی اجلاس"
    },
    content: {
      en: "The modern digital transformation and systematic organization of the All India Rangrez Samaj did not happen in a vacuum. It began with an intense realization among community elders, youth activists, and scholars that the age-old manual systems of communication, dispute resolution, and fragmented welfare efforts were no longer sufficient to meet the challenges of the 21st century.\n\nOn 22 June 2025, a historic foundation meeting was convened. Delegates from over fifteen states gathered to address critical issues of social reform, high marriage expenses, lack of organized higher education support, and the necessity of a unified national database.\n\nKey Resolutions of the Foundation Consultation:\n1. Establishing a National Apex Committee to oversee the restructuring.\n2. Drafting the initial charter for the Grand Mahapanchayat.\n3. Mobilizing regional volunteers for a nationwide family survey.\n\nThis consultation laid the bedrock of trust upon which the entire democratic structure of the Mahapanchayat was built.",
      hi: "ऑल इंडिया रंगरेज़ समाज का आधुनिक डिजिटल रूपांतरण और व्यवस्थित संगठन अचानक नहीं हुआ। इसकी शुरुआत समाज के बुद्धिजीवियों, युवा कार्यकर्ताओं और वरिष्ठ संरक्षकों के बीच इस तीव्र अहसास के साथ हुई कि संचार, विवाद समाधान और बिखरे हुए कल्याणकारी कार्यों की पुरानी प्रणालियां 21वीं सदी की चुनौतियों का सामना करने के लिए पर्याप्त नहीं थीं।\n\n22 जून 2025 को एक ऐतिहासिक स्थापना बैठक बुलाई गई। समाज सुधार, विवाह के अत्यधिक खर्चों, उच्च शिक्षा सहायता की कमी और एक एकीकृत राष्ट्रीय डेटाबेस की आवश्यकता जैसे गंभीर मुद्दों पर चर्चा करने के लिए पंद्रह से अधिक राज्यों के प्रतिनिधि एकत्र हुए।\n\nस्थापना बैठक के मुख्य निर्णय:\n1. पुनर्गठन की निगरानी के लिए एक राष्ट्रीय शीर्ष समिति की स्थापना।\n2. भव्य महापंचायत के लिए प्रारंभिक चार्टर का प्रारूप तैयार करना।\n3. राष्ट्रव्यापी पारिवारिक सर्वेक्षण के लिए क्षेत्रीय स्वयंसेवकों को सक्रिय करना।\n\nइस प्रारंभिक परामर्श ने विश्वास की वह ठोस नींव रखी जिस पर महापंचायत का पूरा लोकतांत्रिक ढांचा खड़ा हुआ है।",
      ur: "آل انڈیا رنگریز سماج کی جدید ڈیجیٹل تبدیلی اور منظم ڈھانچہ اچانک وجود میں نہیں آیا۔ اس کا آغاز برادری کے دانشوروں، نوجوان کارکنوں اور سرپرستوں کے اس شدید احساس سے ہوا کہ ابلاغ، تنازعات کے حل اور بکھری ہوئی فلاحی سرگرمیوں کے پرانے طریقے 21ویں صدی کے چیلنجوں کا مقابلہ کرنے کے لیے کافی نہیں تھے۔\n\n22 جون 2025 کو ایک تاریخی بنیادی مشاورتی اجلاس منعقد کیا گیا۔ سماجی اصلاحات، شادی بیاہ کے بے جا اخراجات، اعلیٰ تعلیم کے لیے منظم امداد کی کمی اور ایک متحد قومی ڈیٹا بیس کی ضرورت جیسے اہم موضوعات پر غور کرنے کے لیے پندرہ سے زیادہ ریاستوں کے مندوبین جمع ہوئے۔\n\nبنیادی مشاورتی اجلاس کے اہم فیصلے:\n1. تنظیم نو کی نگرانی کے لیے ایک قومی سپریم کمیٹی کا قیام۔\n2. عظیم مہاپنچایت کے لیے ابتدائی چارٹر کا مسودہ تیار کرنا۔\n3. ملک گیر خاندانی سروے کے لیے علاقائی رضاکاروں کو متحرک کرنا۔\n\nاس بنیادی مشاورت نے اعتماد کی وہ مضبوط بنیاد رکھی جس پر مہاپنچایت کا پورا جمہوری نظام کھڑا ہے۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop",
      captionEn: "Delegates discussing community reform framework during the initial June 2025 consultation.",
      captionHi: "जून 2025 के प्रारंभिक परामर्श के दौरान समाज सुधार ढांचे पर चर्चा करते प्रतिनिधि।",
      captionUr: "جون 2025 کے ابتدائی اجلاس کے دوران سماجی اصلاحات کے فریم ورک پر تبادلہ خیال کرتے ہوئے مندوبین۔"
    },
    timelineDate: "22 June 2025",
    milestoneEn: "Foundation Meeting",
    milestoneHi: "स्थापना बैठक",
    milestoneUr: "بنیادی اجلاس"
  },
  {
    chapter: "Chapter 2",
    title: {
      en: "Planning the First Mahapanchayat (Early July 2025)",
      hi: "प्रथम महापंचायत का नियोजन एवं तैयारी (जुलाई 2025 का पूर्वार्ध)",
      ur: "پہلی مہاپنچایت کی منصوبہ بندی اور تیاریاں (ابتدائی جولائی 2025)"
    },
    subtitle: {
      en: "Logistical Mobilization and Agenda Formalization Across India",
      hi: "देशभर में साजो-सामान की लामबंदी और एजेंडा का अंतिम निर्धारण",
      ur: "پورے ملک میں تنظیمی رابطے اور ایجنڈے کو حتمی شکل دینا"
    },
    content: {
      en: "Following the successful foundation consultation, the next monumental task was planning the logistics and formalizing the agenda for the first formal Mahapanchayat. This phase was characterized by tireless coordination between district heads, travel coordinators, and regional councils.\n\nCommunication desks were established in Uttar Pradesh, Madhya Pradesh, Rajasthan, Gujarat, and Bihar. To ensure that the voice of every household was heard, over 1,200 local meetings were held in villages and towns to collect grassroot opinions.\n\nKey planning focus areas included:\n- Finalizing the code of conduct for delegates.\n- Coordinating travel and lodging for thousands of representatives.\n- Structuring the voting mechanism for the resolutions.\n\nThe dedication shown during this planning period ensured that the upcoming assembly would be not just a meeting, but a turning point in history.",
      hi: "सफल स्थापना परामर्श के बाद, अगला बड़ा काम पहली औपचारिक महापंचायत के आयोजन और एजेंडे को अंतिम रूप देना था। यह चरण जिला प्रमुखों, यात्रा समन्वयकों और क्षेत्रीय परिषदों के बीच अथक समन्वय का गवाह बना।\n\nउत्तर प्रदेश, मध्य प्रदेश, राजस्थान, गुजरात और बिहार में संपर्क डेस्क स्थापित किए गए। यह सुनिश्चित करने के लिए कि प्रत्येक परिवार की आवाज़ सुनी जाए, गांवों और कस्बों में 1,200 से अधिक स्थानीय बैठकें आयोजित की गईं ताकि जमीनी स्तर की राय एकत्र की जा सके।\n\nनियोजन के मुख्य क्षेत्र:\n- प्रतिनिधियों के लिए आचार संहिता को अंतिम रूप देना।\n- हजारों प्रतिनिधियों के लिए यात्रा और आवास का समन्वय।\n- सामाजिक प्रस्तावों पर मतदान की प्रक्रिया तैयार करना।\n\nइस नियोजन अवधि के दौरान दिखाए गए समर्पण ने यह सुनिश्चित किया कि आने वाली सभा केवल एक बैठक नहीं, बल्कि इतिहास का एक नया अध्याय होगी।",
      ur: "کامیاب بنیادی مشاورت کے بعد، اگلا بڑا کام پہلی باضابطہ مہاپنچایت کے انتظامات اور ایجنڈے کو حتمی شکل دینا تھا۔ یہ مرحلہ ضلعی سربراہوں، سفری کوآرڈینیٹرز اور علاقائی کونسلوں کے درمیان انتھک تال میل کا گواہ بنا۔\n\nاتر پردیش، مدھیہ پردیش، راجستھان، گجرات اور بہار میں رابطہ ڈیسک قائم کیے گئے۔ اس بات کو یقینی بنانے کے لیے کہ ہر خاندان کی آواز سنی جائے، دیہاتوں اور قصبوں میں 1,200 سے زائد مقامی اجلاس منعقد کیے گئے تاکہ زمینی سطح کی رائے جمع کی جا سکے۔\n\nمنصوبہ بندی کے اہم شعبے:\n- مندوبین کے لیے ضابطہ اخلاق کو حتمی شکل دینا۔\n- ہزاروں نمائندوں کے لیے سفر اور رہائش کا انتظام کرنا۔\n- سماجی قراردادوں پر ووٹنگ کا طریقہ کار وضع کرنا۔\n\nمنصوبہ بندی کے اس دور میں دکھائی گئی لگن نے یہ یقینی بنایا کہ آنے والا اجتماع محض ایک اجلاس نہیں بلکہ تاریخ کا ایک اہم موڑ ثابت ہوگا۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      captionEn: "Planning committee members drafting the delegate handbook and agenda list.",
      captionHi: "प्रतिनिधि पुस्तिका और एजेंडा सूची का मसौदा तैयार करते नियोजन समिति के सदस्य।",
      captionUr: "منصوبہ بندی کمیٹی کے ارکان مندوب ہینڈ بک اور ایجنڈے کی فہرست تیار کرتے ہوئے"
    },
    timelineDate: "10 July 2025",
    milestoneEn: "Logistical Mobilization & Draft Agenda",
    milestoneHi: "साजो-सामान लामबंदी और ड्राफ्ट एजेंडा",
    milestoneUr: "انتظامات اور ایجنڈے کا مسودہ"
  },
  {
    chapter: "Chapter 3",
    title: {
      en: "The Historic Joura Mahapanchayat (27 July 2025)",
      hi: "ऐतिहासिक जौरा महापंचायत (27 जुलाई 2025)",
      ur: "تاریخی جورا مہاپنچایت (27 جولائی 2025)"
    },
    subtitle: {
      en: "The Gathering of Five Lakh Citizens and Declaration of Reform",
      hi: "पांच लाख समाज बंधुओं का विशाल समागम और सुधारों का ऐतिहासिक शंखनाद",
      ur: "پانچ لاکھ برادری کے افراد کا تاریخی اجتماع اور اصلاحات کا اعلان"
    },
    content: {
      en: "On 27 July 2025, the town of Joura witnessed a sight never seen before in the history of the community. More than five lakh (500,000) Rangrez citizens assembled under a massive canopy of unity. This was the Grand National Mahapanchayat.\n\nThe energy was electric. Elders in traditional white turbans sat alongside jeans-wearing college students, all bound by a single desire for progress. Religious scholars, business owners, and social activists shared the stage, sending a powerful message of complete solidarity.\n\nThe atmosphere of Joura represented a community rising as one. Voices of reform that had been quiet for decades were suddenly amplified. The Joura declaration would instantly alter the socio-economic landscape of the community across India.",
      hi: "27 जुलाई 2025 को जौरा शहर ने एक ऐसा नजारा देखा जो समाज के इतिहास में पहले कभी नहीं देखा गया था। पांच लाख (500,000) से अधिक रंगरेज़ समाज बंधु एकता के एक विशाल शामियाने के नीचे एकत्र हुए। यह भव्य राष्ट्रीय महापंचायत थी।\n\nवहां की ऊर्जा अद्भुत थी। पारंपरिक सफेद पगड़ी पहने बुजुर्ग और जींस पहने कॉलेज के छात्र, सभी प्रगति की एक ही इच्छा से बंधे थे। धार्मिक विद्वानों, व्यापारिक दिग्गजों और सामाजिक कार्यकर्ताओं ने मंच साझा किया, जिससे पूर्ण एकजुटता का एक शक्तिशाली संदेश गया।\n\nजौरा का माहौल एकता में उभरते समाज का प्रतीक था। सुधार की जो आवाजें दशकों से दबी हुई थीं, वे अचानक गूंज उठीं। जौरा घोषणापत्र ने तुरंत भारत भर में समाज के सामाजिक-आर्थिक परिदृश्य को बदल दिया।",
      ur: "27 جولائی 2025 کو قصبہ جورا نے ایک ایسا منظر دیکھا جو برادری کی تاریخ میں پہلے کبھی نہیں دیکھا گیا تھا۔ پانچ لاکھ (500,000) سے زائد رنگریز برادری کے افراد اتحاد کے ایک بہت بڑے پنڈال کے نیچے جمع ہوئے۔ یہ عظیم قومی مہاپنچایت تھی۔\n\nوہاں کا جوش و خروش بے مثال تھا۔ روایتی سفید پگڑی پہنے بزرگ اور جینز پہنے کالج کے طلباء، سبھی ترقی کی ایک ہی خواہش سے جڑے ہوئے تھے۔ مذہبی علماء، کاروباری شخصیات اور سماجی کارکنوں نے ایک ہی اسٹیج سے خطاب کیا، جس سے مکمل یکجہتی کا ایک طاقتور پیغام ملا۔\n\nجورا کا ماحول ایک متحد ہوتی ہوئی برادری کی علامت تھا۔ اصلاحات کی وہ آوازیں جو دہائیوں سے دبی ہوئی تھیں، اچانک گونج اٹھیں۔ جورا کے اعلان نے فوری طور پر ہندوستان بھر میں برادری کے سماجی و اقتصادی منظر نامے کو بدل کر رکھ دیا۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
      captionEn: "A view of the historic gathering where five lakh community members assembled.",
      captionHi: "ऐतिहासिक समागम का एक दृश्य जहां पांच लाख समाज बंधु एकत्र हुए।",
      captionUr: "تاریخی اجتماع کا ایک منظر جہاں پانچ لاکھ برادری کے ارکان جمع ہوئے تھے۔"
    },
    timelineDate: "27 July 2025",
    milestoneEn: "Historic Joura Mahapanchayat Summit",
    milestoneHi: "ऐतिहासिक जौरा महापंचायत सम्मेलन",
    milestoneUr: "تاریخی جورا مہاپنچایت سمٹ"
  },
  {
    chapter: "Chapter 4",
    title: {
      en: "The Fourteen Historic Resolutions",
      hi: "चौदह ऐतिहासिक प्रस्ताव (Fourteen Historic Resolutions)",
      ur: "چودہ تاریخی قراردادیں"
    },
    subtitle: {
      en: "A Comprehensive Constitutional Framework for Social Reformation",
      hi: "समाज सुधार के लिए एक व्यापक संवैधानिक और सामाजिक रूपरेखा",
      ur: "سماجی اصلاحات کے لیے ایک جامع آئینی اور سماجی فریم ورک"
    },
    content: {
      en: "The high point of the Joura Mahapanchayat was the unanimous passing of the Fourteen Historic Resolutions. These resolutions were not mere suggestions; they were designed as a binding code of conduct to eradicate social evils and promote progress.\n\nKey resolutions included:\n1. Strict limits on wedding expenses, capping wedding gifts (Salami) to a symbolic ₹1,100.\n2. Ban on dowry demands and expensive multi-cuisine wedding feasts.\n3. Making secondary and girl child education compulsory for every household.\n4. Allocation of a voluntary 2% community business cess to fund higher education scholarships.\n5. Establishing local dispute mediation committees to settle family issues out of courts.\n\nEach resolution was met with resounding applause and formal signatures from state presidents, representing a collective oath of compliance.",
      hi: "जौरा महापंचायत का सबसे महत्वपूर्ण क्षण चौदह ऐतिहासिक प्रस्तावों को सर्वसम्मति से पारित करना था। ये प्रस्ताव केवल सुझाव नहीं थे; इन्हें सामाजिक कुरीतियों को समाप्त करने और प्रगति को बढ़ावा देने के लिए एक अनिवार्य आचार संहिता के रूप में तैयार किया गया था।\n\nमुख्य प्रस्तावों में शामिल थे:\n1. विवाह के खर्चों पर सख्त नियंत्रण, विवाह उपहार (सलामी) को प्रतीकात्मक ₹1,100 तक सीमित करना।\n2. दहेज की मांग और महंगी शादियों की दावतों पर पूर्ण प्रतिबंध।\n3. प्रत्येक परिवार के लिए माध्यमिक और बालिकाओं की शिक्षा अनिवार्य करना।\n4. उच्च शिक्षा छात्रवृत्ति के लिए स्वैच्छिक 2% व्यावसायिक कर का निर्धारण।\n5. अदालतों के बाहर पारिवारिक विवादों को हल करने के लिए स्थानीय सुलह समितियों की स्थापना।\n\nप्रत्येक प्रस्ताव का स्वागत तालियों की गड़गड़ाहट और प्रदेश अध्यक्षों के औपचारिक हस्ताक्षरों के साथ किया गया, जो अनुपालन की एक सामूहिक शपथ का प्रतीक था।",
      ur: "جورا مہاپنچایت کا سب سے اہم لمحہ متفقہ طور پر چودہ تاریخی قراردادوں کی منظوری تھی۔ یہ قراردادیں محض تجاویز نہیں تھیں؛ انہیں سماجی برائیوں کے خاتمے اور ترقی کے فروغ کے لیے ایک لازمی ضابطہ اخلاق کے طور پر ڈیزائن کیا گیا تھا۔\n\nاہم قراردادوں میں شامل تھے:\n1. شادی کے اخراجات پر سخت پابندی، شادی کے تحائف (سلامی) کو علامتی 1,100 روپے تک محدود کرنا۔\n2. جہیز کے مطالبات اور شادی کی مہنگی دعوتوں پر مکمل پابندی۔\n3. ہر خاندان کے لیے ثانوی اور بچیوں کی تعلیم کو لازمی بنانا۔\n4. اعلیٰ تعلیم کے وظائف کے لیے کاروباری منافع پر رضاکارانہ 2 فیصد سیس کا تعین۔\n5. عدالتوں سے باہر خاندانی مسائل کو حل کرنے کے لیے مقامی مصالحتی کمیٹیوں کا قیام۔\n\nہر قرارداد کا استقبال تالیوں کی گونج اور صوبائی صدور کے باضابطہ دستخطوں کے ساتھ کیا گیا، جو کہ عمل درآمد کے اجتماعی عہد کی علامت تھا۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
      captionEn: "Signing of the historic fourteen resolutions charter by state council presidents.",
      captionHi: "राज्य परिषद के अध्यक्षों द्वारा चौदह ऐतिहासिक प्रस्तावों के चार्टर पर हस्ताक्षर।",
      captionUr: "صوبائی کونسل کے صدور کی جانب سے چودہ تاریخی قراردادوں کے چارٹر پر دستخط"
    },
    timelineDate: "28 July 2025",
    milestoneEn: "Unanimous Adoption of Resolutions",
    milestoneHi: "प्रस्तावों को सर्वसम्मति से स्वीकार किया गया",
    milestoneUr: "قراردادوں کی متفقہ منظوری"
  },
  {
    chapter: "Chapter 5",
    title: {
      en: "Formation of Regional Committees",
      hi: "क्षेत्रीय समितियों का गठन और कार्यभार (Regional Committees)",
      ur: "علاقائی کمیٹیوں کا قیام"
    },
    subtitle: {
      en: "Decentralizing Power and Establishing Ground-Level Monitoring Units",
      hi: "सत्ता का विकेंद्रीकरण और जमीनी स्तर पर निगरानी इकाइयों की स्थापना",
      ur: "طاقت کی وکندریقرت اور نچلی سطح پر نگرانی کے یونٹوں کا قیام"
    },
    content: {
      en: "To prevent the resolutions from remaining only on paper, the Mahapanchayat moved swiftly to establish a decentralized implementation network. Within weeks of the Joura summit, Regional, District, and Tehsil-level committees were formed across India.\n\nThese committees were tasked with active monitoring of wedding ceremonies, checking compliance of dowry rules, counseling families, and verifying that every child of school-going age was indeed enrolled.\n\nKey administrative bodies formed:\n- **Dispute Settlement Councils (Sulah Samitis):** Providing local arbitration.\n- **Education Vigilance Squads:** Streamlining scholarships and tracking dropouts.\n- **Socio-Economic Survey Wings:** Facilitating digital census data entry.\n\nThis grassroots structure brought administration closer to the people, ensuring daily compliance and support.",
      hi: "प्रस्तावों को केवल कागजों पर रहने से बचाने के लिए, महापंचायत ने तेजी से एक विकेंद्रीकृत कार्यान्वयन नेटवर्क स्थापित किया। जौरा शिखर सम्मेलन के कुछ ही हफ्तों के भीतर, पूरे भारत में क्षेत्रीय, जिला और तहसील स्तर की समितियों का गठन किया गया।\n\nइन समितियों को विवाह समारोहों की सक्रिय निगरानी करने, दहेज नियमों के अनुपालन की जांच करने, परिवारों की काउंसलिंग करने और यह सत्यापित करने का काम सौंपा गया था कि स्कूल जाने की उम्र के प्रत्येक बच्चे का नामांकन हुआ है या नहीं।\n\nगठित मुख्य प्रशासनिक निकाय:\n- **सुलह समितियां (Dispute Settlement Councils):** स्थानीय स्तर पर मध्यस्थता प्रदान करना।\n- **शिक्षा निगरानी दल:** छात्रवृत्ति को व्यवस्थित करना और स्कूल छोड़ने वाले बच्चों को ट्रैक करना।\n- **सामाजिक-आर्थिक सर्वेक्षण विंग:** डिजिटल जनगणना डेटा प्रविष्टि को सुगम बनाना।\n\nइस जमीनी स्तर के ढांचे ने प्रशासन को लोगों के करीब लाया, जिससे दैनिक अनुपालन और सहायता सुनिश्चित हुई।",
      ur: "قراردادوں کو صرف کاغذ تک محدود رہنے سے بچانے کے لیے، مہاپنچایت نے تیزی سے ایک غیر مرکزی عمل درآمد کا نیٹ ورک قائم کیا۔ جورا سربراہی اجلاس کے چند ہی ہفتوں کے اندر، پورے ہندوستان میں علاقائی، ضلعی اور تحصیل سطح کی کمیٹیاں تشکیل دی گئیں۔\n\nان کمیٹیوں کو شادی بیاہ کی تقریبات کی فعال نگرانی، جہیز کے قوانین پر عمل درآمد کی جانچ، خاندانوں کی کونسلنگ اور یہ تصدیق کرنے کا کام سونپا گیا تھا کہ آیا اسکول جانے کی عمر کے ہر بچے کا داخلہ ہوا ہے یا نہیں۔\n\nقائم کردہ اہم انتظامی ادارے:\n- **مصالحتی کمیٹیاں (سلوہ کمیٹی):** مقامی سطح پر ثالثی فراہم کرنا۔\n- **تعلیمی نگرانی کے دستے:** اسکالرشپ کو منظم کرنا اور اسکول چھوڑنے والے بچوں کو ٹریک کرنا۔\n- **سماجی و اقتصادی سروے ونگ:** ڈیجیٹल مردم شماری ڈیٹا انٹری میں مدد فراہم کرنا۔\n\nاس نچلی سطح کے ڈھانچے نے انتظامیہ کو لوگوں کے قریب لایا، جس سے روزمرہ کے قوانین پر عمل درآمد اور مدد یقینی ہوئی۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
      captionEn: "District volunteers receiving implementation guidelines during a training seminar.",
      captionHi: "एक प्रशिक्षण सेमिनार के दौरान कार्यान्वयन दिशानिर्देश प्राप्त करते जिला स्वयंसेवक।",
      captionUr: "تربیتی سیمینار کے دوران عمل درآمد کی ہدایات حاصل کرتے ہوئے ضلعی رضاکار۔"
    },
    timelineDate: "15 August 2025",
    milestoneEn: "Formation of District Committees",
    milestoneHi: "जिला समितियों का गठन",
    milestoneUr: "ضلعی کمیٹیوں کا قیام"
  },
  {
    chapter: "Chapter 6",
    title: {
      en: "Community Reform Movement",
      hi: "समुदाय सुधार आंदोलन एवं जन-जागरण (Reform Movement)",
      ur: "برادری کی اصلاحی تحریک"
    },
    subtitle: {
      en: "Sustained Campaigns, Counseling Seminars, and Educational Drives",
      hi: "निरंतर अभियान, परामर्श सेमिनार और व्यापक शैक्षिक जागरूकता आंदोलन",
      ur: "مستقل مہمات، معلوماتی سیمینار اور تعلیमी بیداری کے پروگرام"
    },
    content: {
      en: "The passing of resolutions was followed by a dynamic social mobilization campaign. The Community Reform Movement traveled to the doorsteps of the most remote settlements, holding workshops on financial prudence, Islamic guidelines on simple marriage, and career pathways for women.\n\nLegal awareness cells were set up to educate citizens on their rights, constitutional remedies, and government welfare programs. Street plays, pamphlets, and local radio broadcasts were utilized to counter archaic traditions and promote logical progress.\n\nThe movement witnessed an active involvement of women and youth, who became the primary torchbearers of change. Their enthusiasm turned the resolutions from administrative mandates into a celebrated social revolution.",
      hi: "प्रस्तावों के पारित होने के बाद एक गतिशील सामाजिक एकजुटता अभियान चलाया गया। समाज सुधार आंदोलन दूरदराज की बस्तियों के दरवाजों तक पहुंचा, जिसमें वित्तीय समझदारी, सादगीपूर्ण विवाह पर इस्लामी मार्गदर्शन और महिलाओं के लिए करियर के अवसरों पर कार्यशालाएं आयोजित की गईं।\n\nनागरिकों को उनके अधिकारों, संवैधानिक उपचारों और सरकारी कल्याणकारी कार्यक्रमों के बारे में शिक्षित करने के लिए कानूनी जागरूकता सेल स्थापित किए गए। पुरानी कुप्रथाओं का मुकाबला करने और तार्किक प्रगति को बढ़ावा देने के लिए नुक्कड़ नाटकों, पर्चों और स्थानीय रेडियो प्रसारणों का उपयोग किया गया।\n\nइस आंदोलन में महिलाओं और युवाओं की सक्रिय भागीदारी देखी गई, जो परिवर्तन के प्राथमिक ध्वजवाहक बने। उनके उत्साह ने प्रस्तावों को प्रशासनिक आदेशों से एक उत्सवपूर्ण सामाजिक क्रांति में बदल दिया।",
      ur: "قراردادوں کی منظوری کے بعد ایک متحرک سماجی بیداری مہم چلائی گئی۔ برادری کی اصلاحی تحریک دور دراز کی بستیوں کے دروازوں تک پہنچی، جس میں مالیاتی سمجھداری، سادہ نکاح پر اسلامی رہنمائی اور خواتین کے لیے کیریئر کے مواقع پر ورکشاپس کا انعقاد کیا گیا۔\n\nشہریوں کو ان کے حقوق، آئینی علاج اور حکومتی فلاحی پروگراموں کے بارے میں آگاہ کرنے کے لیے قانونی بیداری سیل قائم کیے گئے۔ پرانی رسومات کا مقابلہ کرنے اور عقلی ترقی کو فروغ دینے کے لیے نکڑ ناٹکوں، پمفلٹس اور مقامی ریڈیو نشریات کا استعمال کیا گیا۔\n\nتحریک میں خواتین اور نوجوانوں کی بھرپور شرکت دیکھی گئی، جو تبدیلی کے علمبردار بنے۔ ان کے جوش و خروش نے قراردادوں کو محض انتظامی احکامات کے بجائے ایک خوبصورت سماجی انقلاب میں بدل دیا۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
      captionEn: "A community career and social counseling session specifically designed for college students.",
      captionHi: "विशेष रूप से कॉलेज के छात्रों के लिए आयोजित एक करियर और सामाजिक परामर्श सत्र।",
      captionUr: "کالج کے طلباء کے لیے خصوصی طور پر منعقدہ ایک تعلیمی اور سماجی رہنمائی سیشن۔"
    },
    timelineDate: "05 September 2025",
    milestoneEn: "Launch of Nationwide Reform Campaign",
    milestoneHi: "राष्ट्रव्यापी सुधार अभियान का शुभारंभ",
    milestoneUr: "ملک گیر اصلاحی مہم کا آغاز"
  },
  {
    chapter: "Chapter 7",
    title: {
      en: "Growth of the Organisation",
      hi: "संगठन का निरंतर विस्तार एवं डिजिटल सशक्तिकरण (Growth of Organisation)",
      ur: "تنظیم کی ترقی اور ڈیجیٹل توسیع"
    },
    subtitle: {
      en: "Expanding to E-Governance, Transparent Audits, and Global Connectivity",
      hi: "ई-गवर्नेंस, पारदर्शी ऑडिट और वैश्विक कनेक्टिविटी की ओर कदम",
      ur: "ای گورننس، شفاف آڈٹ اور عالمی روابط کی طرف پیش قدمی"
    },
    content: {
      en: "As the movement entered the latter half of 2025, the focus expanded towards structural durability and institutional scale. The Mahapanchayat adopted advanced e-governance principles, launching the secure digital portal, transparency trackers, and open audit reports.\n\nToday, All India Rangrez Samaj stands as a model community organization. With fully functional medical networks, a digital blood directory, job counseling cells, and real-time opinion polls, the structure provides a comprehensive safety net for every registered member.\n\nFrom a localized assembly, the organization has blossomed into a global connected network of millions of families, preserving ancestral pride while confidently leading the path of modern educational and financial excellence.",
      hi: "जैसे ही यह आंदोलन 2025 की दूसरी छमाही में पहुँचा, ध्यान संरचनात्मक स्थायित्व और संस्थागत स्तर पर विस्तार की ओर केंद्रित हो गया। महापंचायत ने उन्नत ई-गवर्नेंस सिद्धांतों को अपनाया, सुरक्षित डिजिटल पोर्टल, पारदर्शिता ट्रैकर और खुले ऑडिट रिपोर्ट जारी किए।\n\nआज, ऑल इंडिया रंगरेज़ समाज एक आदर्श सामाजिक संगठन के रूप में खड़ा है। पूरी तरह से क्रियाशील चिकित्सा नेटवर्क, एक डिजिटल ब्लड डायरेक्टरी, रोजगार परामर्श सेल और वास्तविक समय के जनमत सर्वेक्षणों के साथ, यह ढांचा प्रत्येक पंजीकृत सदस्य के लिए एक व्यापक सुरक्षा कवच प्रदान करता है।\n\nएक स्थानीय सभा से शुरू होकर, यह संगठन आज लाखों परिवारों के एक वैश्विक जुड़े हुए नेटवर्क में विकसित हो चुका है, जो अपनी प्राचीन पहचान को सुरक्षित रखते हुए आधुनिक शैक्षणिक और व्यावसायिक उत्कृष्टता की राह पर गर्व से आगे बढ़ रहा है।",
      ur: "جیسے ہی یہ تحریک 2025 کے آخری مہینوں میں داخل ہوئی، توجہ تنظیمی پائیداری اور ادارہ جاتی توسیع پر مرکوز ہو گئی۔ مہاپنچایت نے جدید ای گورننس اصولوں کو اپنایا، جس کے تحت محفوظ ڈیجیٹل پورٹل، شفافیت ٹریکرز اور کھلی آڈٹ رپورٹس متعارف کروائی گئیں۔\n\nآج، آل انڈیا رنگریز سماج ایک مثالی کمیونٹی تنظیم کے طور پر کھڑا ہے۔ مکمل طور پر فعال میڈیکل نیٹ ورکس، ایک ڈیجیٹل بلڈ ڈائریکٹری، جاب کونسلنگ سیل اور حقیقی وقت کی رائے شماری کے ساتھ، یہ نظام ہر رجسٹرڈ رکن کے لیے ایک جامع تحفظ فراہم کرتا ہے۔\n\nایک مقامی اجتماع سے شروع ہو کر، یہ تنظیم آج لاکھوں خاندانوں کے ایک عالمی مربوط نیٹ ورک میں تبدیل ہو چکی ہے، جو اپنی آباؤ اجداد کی شناخت کو برقرار رکھتے ہوئے جدید تعلیमी اور تجارتی میدان میں اعتماد کے ساتھ آگے بڑھ رہی ہے۔"
    },
    image: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      captionEn: "Launch of the unified digital portal connecting regional offices with the central dashboard.",
      captionHi: "क्षेत्रीय कार्यालयों को केंद्रीय डैशबोर्ड से जोड़ने वाले एकीकृत डिजिटल पोर्टल का शुभारंभ।",
      captionUr: "علاقائی دفاتر کو مرکزی ڈیش بورڈ سے منسلک کرنے والے متحدہ ڈیجیٹل پورٹل کا آغاز۔"
    },
    timelineDate: "12 October 2025",
    milestoneEn: "Launch of E-Governance Portal",
    milestoneHi: "ई-गवर्नेंस पोर्टल का शुभारंभ",
    milestoneUr: "ای گورننس پورٹل کا آغاز"
  }
];
