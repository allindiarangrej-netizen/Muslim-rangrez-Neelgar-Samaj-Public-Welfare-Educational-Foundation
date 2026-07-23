import React, { useState, useMemo } from 'react';
import { historyContent } from '../data/communityHistory';
import { initialHeritageVideos, HeritageVideo } from '../data/heritageMedia';
import { 
  BookOpen, X, Clock, MapPin, Film, Image as ImageIcon, Download, 
  Printer, Share2, Search, ChevronRight, Bookmark, CheckCircle2, 
  Calendar, Award, Sparkles, ExternalLink, Play, Eye, ThumbsUp, 
  FileText, Layers, Compass, ChevronDown, ChevronUp, ArrowRight, ShieldCheck
} from 'lucide-react';

interface HistoryDetailsProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

interface MilestoneEvent {
  year: string;
  era: string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  descEn: string;
  descHi: string;
  descUr: string;
  location: string;
  category: 'origin' | 'trade' | 'royal' | 'freedom' | 'reform' | 'modern';
}

const HISTORICAL_MILESTONES: MilestoneEvent[] = [
  {
    year: "7000 BCE - 3000 BCE",
    era: "Ancient Civilization Era",
    titleEn: "Early Textile Dyeing & Natural Pigment Discovery",
    titleHi: "प्रारंभिक वस्त्र रंगाई एवं प्राकृतिक रंगों की खोज",
    titleUr: "ابتدائی پارچہ بافی اور قدرتی رنگوں کی دریافت",
    descEn: "Evidence from Indus Valley Civilization (Mohenjo-daro & Harappa) reveals the earliest use of madder root (manjistha) and indigo for dyeing cotton garments.",
    descHi: "सिंधु घाटी सभ्यता (मोहनजोदड़ो और हड़प्पा) से सूती वस्त्रों को रंगने के लिए मजीठ और नील के उपयोग के प्राचीनतम साक्ष्य प्राप्त हुए।",
    descUr: "وادی سندھ کی تہذیب سے سوتی کپڑوں کو رنگنے کے لیے نیل اور قدرتی جڑی بوٹیوں کے استعمال کے ابتدائی شواہد ملتے ہیں۔",
    location: "Indus Valley & Ancient Bharat",
    category: "origin"
  },
  {
    year: "1500 BCE - 500 BCE",
    era: "Vedic & Classical Age",
    titleEn: "Vedic Indigo Cultivation & Sacred Dyeing Traditions",
    titleHi: "वैदिक नील की खेती एवं पवित्र रंगाई परंपराएं",
    titleUr: "ویدک دور میں نیل کی کاشت اور رنگسازی کی روایات",
    descEn: "Ancient Sanskrit texts mention 'Neela' (Indigo) and specialized guilds of dyers ('Rajaka' and 'Ranjaka'). Natural dyeing becomes a revered scientific craft.",
    descHi: "प्राचीन संस्कृत ग्रंथों में 'नील' और रंगरेजों की विशिष्ट श्रेणियों ('रजक' और 'रंजक') का उल्लेख है। प्राकृतिक रंगाई एक सम्मानित वैज्ञानिक कला बनी।",
    descUr: "قدیم سنسکرت نصوص میں 'نیل' اور رنگسازوں کے خصوصی گروہوں کا ذکر ملتا ہے۔ قدرتی رنگسازی ایک معتبر علمی اور فنی پیشہ بنی।",
    location: "Gangetic Plains & Western India",
    category: "origin"
  },
  {
    year: "300 BCE - 700 CE",
    era: "Silk Road & Global Trade",
    titleEn: "Export of Indian Indigo to Roman & Persian Empires",
    titleHi: "रोमन एवं फारसी साम्राज्यों को भारतीय नील का निर्यात",
    titleUr: "رومن اور فارسی سلطنتوں کو ہندوستانی نیل کی برآمد",
    descEn: "Indian dyed textiles and indigo cakes become prized luxury commodities along the Silk Road and Maritime spice routes, traded for Roman gold and Arabian pearls.",
    descHi: "भारतीय रंगीन वस्त्र और नील के टिकिया रेशम मार्ग और समुद्री व्यापार मार्ग के प्रमुख लक्जरी उत्पाद बने, जिनका व्यापार रोमन सोने के बदले होता था।",
    descUr: "ہندوستانی رنگین کپڑے اور نیل شاہراہ ریشم کے اہم ترین تجارتی سامان بن گئے، جنہیں رومن سونے اور عربی موتیوں کے بدلے فروخت کیا جاتا تھا۔",
    location: "Gujarat Ports, Pali & Silk Road",
    category: "trade"
  },
  {
    year: "1200 CE - 1700 CE",
    era: "Mughal & Royal Patronage Era",
    titleEn: "Royal Dyeing Karkhanas & Master Neelgar Craftsmanship",
    titleHi: "शाही रंगाई कारखाने एवं उत्कृष्ट नीलगर कारीगरी",
    titleUr: "شاہی رنگسازی کے کارخانے اور ماہر نیلگر کاریگری",
    descEn: "During Mughal rule and Rajput kingdoms, master Rangrez artisans established royal Karkhanas (workshops) in Jaipur, Lucknow, Agra, and Burhanpur, mastering tie-dye (Bandhani), Leheriya, and block printing.",
    descHi: "मुगल काल और राजपूत रियासतों में, मास्टर रंगरेज कारीगरों ने जयपुर, लखनऊ, आगरा और बुरहानपुर में शाही कारखाने स्थापित किए, और बांधनी, लहरिया और ब्लॉक प्रिंटिंग में महारत हासिल की।",
    descUr: "مغل دور اور راجپوت ریاستوں میں، ماہر رنگریز کاریگروں نے جے پور، لکھنؤ، آگرہ اور برہان پور میں شاہی کارخانے قائم کیے اور باندھنی، لہریا اور بلاک پرنٹنگ میں کمال حاصل کیا۔",
    location: "Rajasthan, Uttar Pradesh & Madhya Pradesh",
    category: "royal"
  },
  {
    year: "1857 CE - 1947 CE",
    era: "Freedom Struggle & National Awakening",
    titleEn: "Participation in Freedom Struggle & Swadeshi Movement",
    titleHi: "स्वतंत्रता संग्राम एवं स्वदेशी आंदोलन में सक्रिय योगदान",
    titleUr: "جنگ آزادی اور سودیشی تحریک میں فعال حصہ داری",
    descEn: "Rangrez community leaders and artisans actively supported the Swadeshi movement by supplying indigenous natural dyes and boycotting imported synthetic British dyes.",
    descHi: "रंगरेज समाज के नेताओं और कारीगरों ने स्वदेशी प्राकृतिक रंगों की आपूर्ति करके और विदेशी सिंथेटिक रंगों का बहिष्कार करके स्वदेशी आंदोलन का सक्रिय समर्थन किया।",
    descUr: "رنگریز برادری کے رہنماؤں اور کاریگروں نے دیسی قدرتی رنگوں کی فراہمی اور برطانوی مصنوعی رنگوں کے بائیکاٹ کے ذریعے سودیشی تحریک کی بھرپور حمایت کی۔",
    location: "Across United India",
    category: "freedom"
  },
  {
    year: "1920s - 1980s CE",
    era: "Social Reform & Educational Movements",
    titleEn: "Establishment of First Educational & Welfare Societies",
    titleHi: "प्रथम शैक्षणिक एवं कल्याणकारी समितियों की स्थापना",
    titleUr: "پہلی تعلیمی اور فلاحی سوسائٹیوں کا قیام",
    descEn: "Community elders established cooperative welfare societies, hostels for students, and skill-training centers in major cities like Bhopal, Indore, Jaipur, and Kanpur.",
    descHi: "समाज के बुजुर्गों ने भोपाल, इंदौर, जयपुर और कानपुर जैसे प्रमुख शहरों में सहकारी कल्याण समितियां, छात्र छात्रावास और कौशल प्रशिक्षण केंद्र स्थापित किए।",
    descUr: "برادری کے بزرگوں نے بھوپال، اندور، جے پور اور کانپور جیسے بڑے شہروں میں فلاحی انجمنیں، طلبہ کے ہاسٹل اور ہنر مندی کے مراکز قائم کیے۔",
    location: "Bhopal, Indore, Jaipur, Kanpur",
    category: "reform"
  },
  {
    year: "2020 CE - Present",
    era: "Modern Digital Era",
    titleEn: "All India Rangrez Samaj Trust Unification & Digital Census",
    titleHi: "अखिल भारतीय रंगरेज समाज ट्रस्ट एकीकरण एवं डिजिटल जनगणना",
    titleUr: "آل انڈیا رنگریز سماج ٹرسٹ کا اتحاد اور ڈیجیٹل مردم شماری",
    descEn: "Launch of the unified national platform, digital socio-economic census, 80G/12A tax exemption certification, and nationwide educational scholarship network connecting 100,000+ families.",
    descHi: "एकीकृत राष्ट्रीय मंच का शुभारंभ, डिजिटल सामाजिक-आर्थिक जनगणना, 80G/12A कर छूट प्रमाणन, और 1,00,000+ परिवारों को जोड़ने वाला राष्ट्रव्यापी शैक्षिक छात्रवृत्ति नेटवर्क।",
    descUr: "متحدہ قومی پلیٹ فارم کا آغاز، ڈیجیٹل سماجی و معاشی مردم شماری، 80G/12A ٹیکس استثنیٰ تصدیق، اور 1,00,000+ خاندانوں کو جوڑنے والا ملک گیر تعلیمی وظیفہ نیٹ ورک۔",
    location: "Pan-India & Global Diaspora",
    category: "modern"
  }
];

const HISTORIC_DYEING_CENTERS = [
  {
    id: "jaipur",
    state: "Rajasthan",
    city: "Jaipur, Sanganer & Pali",
    specialtyEn: "Royal Bandhani (Tie & Dye), Leheriya & Bagru Natural Block Printing",
    specialtyHi: "शाही बांधनी, लहरिया और बगरू प्राकृतिक ब्लॉक प्रिंटिंग",
    specialtyUr: "شاہی باندھنی، لہریا اور بگرو قدرتی بلاک پرنٹنگ",
    historyEn: "Patronized by Maharaja Sawai Jai Singh II, Sanganer and Pali became world-renowned capitals of natural vegetable dyes and intricate indigo block patterns.",
    historyHi: "महाराजा सवाई जय सिंह द्वितीय के संरक्षण में, सांगानेर और पाली प्राकृतिक वनस्पति रंगों और जटिल नील ब्लॉक पैटर्न की विश्व प्रसिद्ध राजधानियां बने।",
    historyUr: "مہاراجہ سوائی جے سنگھ دوم کی سرپرستی میں، سانگانیر اور پالی قدرتی نباتاتی رنگوں اور نفیس نیل بلاک پیٹرن کے عالمی شہرت یافتہ مراکز بنے।",
    artisans: "2,500+ Active Traditional Families",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    id: "lucknow",
    state: "Uttar Pradesh",
    city: "Lucknow, Varanasi & Agra",
    specialtyEn: "Chikankari Dyeing, Zari Brocade Coloring & Royal Persian Indigo",
    specialtyHi: "चिककारी रंगाई, ज़री ब्रोकेड रंगसाजी और शाही फारसी नील",
    specialtyUr: "چکن کاری رنگسازی، زری بروکیڈ اور شاہی فارسی نیل",
    historyEn: "The Nawabs of Awadh and Mughal emperors established grand dyeing workshops along the Gomti and Ganga rivers, perfecting pastel and royal crimson hues.",
    historyHi: "अवध के नवाबों और मुगल सम्राटों ने गोमती और गंगा नदी के तट पर भव्य रंगाई कारखाने स्थापित किए, जिन्होंने पेस्टल और शाही गहरे लाल रंगों में महारत हासिल की।",
    historyUr: "نوابانِ اودھ اور مغل شہنشاہوں نے دریائے گومتی اور گنگا کے کنارے عظیم الشان رنگسازی کے کارخانے قائم کیے، جنہوں نے شاہی سرخ اور نرم رنگوں میں کمال حاصل کیا۔",
    artisans: "3,200+ Active Traditional Families",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300"
  },
  {
    id: "bhopal",
    state: "Madhya Pradesh",
    city: "Bhopal, Chanderi, Ujjain & Indore",
    specialtyEn: "Chanderi Silk Dyeing, Bagh Print & Malwa Indigo Vat Processing",
    specialtyHi: "चंदेरी सिल्क रंगाई, बाघ प्रिंट और मालवा नील भट्टी प्रक्रिया",
    specialtyUr: "چندیری سلک رنگسازی، باغ پرنٹ اور مالوہ نیل پروسیسنگ",
    historyEn: "The Begums of Bhopal patronized specialized Rangrez guilds to dye exquisite Zari-woven Chanderi sarees and turbans for royal court assemblies.",
    historyHi: "भोपाल की बेगमों ने शाही दरबारी सभाओं के लिए ज़री-बुनी चंदेरी साड़ियों और पगड़ियों को रंगने के लिए विशेष रंगरेज श्रेणियों को संरक्षण दिया।",
    historyUr: "بھوپال کی بیگمات نے شاہی دربار کے لیے زری سے بنی چندیری ساڑھیوں اور پگڑیوں کو رنگنے کے لیے خصوصی رنگریز انجمنوں کی سرپرستی کی۔",
    artisans: "4,100+ Active Traditional Families",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
  },
  {
    id: "ahmedabad",
    state: "Gujarat",
    city: "Ahmedabad, Surat & Bhuj",
    specialtyEn: "Ajrakh Block Printing, Saudagiri Exports & Indigo Cake Refining",
    specialtyHi: "अजरख ब्लॉक प्रिंटिंग, सौदागिरी निर्यात और नील टिकिया शोधन",
    specialtyUr: "اجرک بلاک پرنٹنگ، سوداگری برآمدات اور نیل کی ٹکیاں",
    historyEn: "For centuries, Gujarati Neelgar guilds supplied the Indian Ocean maritime trade routes with indigo cakes and color-fast Ajrakh textiles exported to Arabia and East Africa.",
    historyHi: "सदियों से, गुजराती नीलगर श्रेणियों ने हिंद महासागर समुद्री व्यापार मार्गों के माध्यम से अरब और पूर्वी अफ्रीका को नील की टिकिया और पक्के रंग के अजरख वस्त्र निर्यात किए।",
    historyUr: "صدیوں تک، گجراتی نیلگر انجمنوں نے بحر ہند کے تجارتی راستوں کے ذریعے عرب اور مشرقی افریقہ کو نیل اور پکے رنگ کے اجرک کپڑے برآمد کیے۔",
    artisans: "1,800+ Active Traditional Families",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300"
  },
  {
    id: "patna",
    state: "Bihar & Delhi",
    city: "Patna, Gaya & Central Delhi",
    specialtyEn: "Gangetic Indigo Extraction & Mughal Imperial Court Dyeing",
    specialtyHi: "गांगेय नील निष्कर्षण एवं मुगल दरबारी रंगाई",
    specialtyUr: "گنگا نیل کشید اور مغل شاہی دربار رنگسازی",
    historyEn: "Bihar was the historic cradle of world indigo cultivation. Rangrez families in Old Delhi (Chandni Chowk & Ballimaran) maintained the secret herbal recipes for imperial silk banners.",
    historyHi: "बिहार विश्व में नील की खेती का ऐतिहासिक पालना था। पुरानी दिल्ली (चांदनी चौक और बल्लीमारान) के रंगरेज परिवारों ने शाही रेशमी झंडों के लिए गुप्त जड़ी-बूटी के नुस्खे संरक्षित रखे।",
    historyUr: "بہار دنیا میں نیل کی کاشت کا تاریخی مرکز تھا۔ پرانی دہلی کے رنگریز خاندانوں نے شاہی ریشمی پرچموں کے لیے روایتی جڑی بوٹیوں کے نسخے محفوظ رکھے۔",
    artisans: "1,500+ Active Traditional Families",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
  }
];

const ARCHIVE_GALLERY_ITEMS = [
  {
    id: "arch-1",
    titleEn: "Ancient Royal Copper Indigo Vat (approx. 18th Century)",
    titleHi: "प्राचीन शाही तांबे की नील भट्टी (लगभग 18वीं शताब्दी)",
    titleUr: "قدیم شاہی تانبے کی نیل بھٹی (تقریباً 18ویں صدی)",
    descEn: "A traditional deep copper cauldron ('Houdi') used by Rajasthani master dyers to ferment natural plant indigo for over 30 days without synthetic chemicals.",
    descHi: "राजस्थानी मास्टर रंगरेजों द्वारा बिना सिंथेटिक रसायनों के 30 दिनों से अधिक समय तक प्राकृतिक वनस्पति नील को किण्वित करने के लिए उपयोग किया जाने वाला पारंपरिक तांबे का हौद।",
    descUr: "راجستھانی ماہر رنگسازوں کی جانب سے مصنوعی کیمیکلز کے بغیر 30 دنوں تک قدرتی پودوں کے نیل کو تیار کرنے کے لیے استعمال ہونے والا روایتی تانبے کا برتن।",
    category: "Equipment & Tools",
    year: "c. 1780 CE",
    location: "Jaipur Heritage Collection"
  },
  {
    id: "arch-2",
    titleEn: "Hand-Carved Sheesham Wood Printing Blocks (Bunta)",
    titleHi: "हाथ से नक्काशीदार शीशम की लकड़ी के ब्लॉक (बूंटा)",
    titleUr: "ہاتھ سے تراشیدہ شیشم کی لکڑی کے پرنٹنگ بلاک",
    descEn: "Intricate floral and geometrical wooden blocks carved by community artisans, passed down through five generations for natural dye stamping.",
    descHi: "समुदाय के कारीगरों द्वारा गढ़े गए जटिल पुष्प और ज्यामितीय लकड़ी के ब्लॉक, जो प्राकृतिक रंग की छपाई के लिए पाँच पीढ़ियों से संरक्षित हैं।",
    descUr: "برادری کے کاریگروں کے ہاتھ سے تراشے گئے خوبصورت پھولدار اور ہندسی لکڑی کے بلاک، جو پانچ نسلوں سے محفوظ ہیں۔",
    category: "Artisan Heritage",
    year: "c. 1850 CE",
    location: "Sanganer Artisan Archive"
  },
  {
    id: "arch-3",
    titleEn: "Mughal Court Farman on Silk & Textile Dyeing Tax Exemption",
    titleHi: "रेशम और वस्त्र रंगाई कर छूट पर मुगल दरबारी फरमान",
    titleUr: "ریشم اور پارچہ رنگسازی کے ٹیکس استثنیٰ پر مغل دربار کا فرمان",
    descEn: "An historical royal decree recognizing the scientific mastery of Neelgar guilds and granting special trade privileges across central markets.",
    descHi: "नीलगर श्रेणियों की वैज्ञानिक महारत को मान्यता देने और केंद्रीय बाजारों में विशेष व्यापारिक विशेषाधिकार प्रदान करने वाला एक ऐतिहासिक शाही आदेश।",
    descUr: "نیلگر انجمنوں کی علمی اور فنی مہارت کو تسلیم کرنے اور مرکزی بازاروں میں خصوصی تجارتی مراعات دینے والا ایک تاریخی شاہی فرمان।",
    category: "Historical Documents",
    year: "c. 1690 CE",
    location: "National Archives Preservation"
  },
  {
    id: "arch-4",
    titleEn: "First All India Rangrez Samaj Convention Charter (1928)",
    titleHi: "प्रथम अखिल भारतीय रंगरेज समाज सम्मेलन घोषणापत्र (1928)",
    titleUr: "پہلی آل انڈیا رنگریز سماج کانفرنس کا منشور (1928)",
    descEn: "The foundational record of the early community reform movement, emphasizing education for girls, abolition of wasteful feast expenses, and cooperative credit.",
    descHi: "प्रारंभिक सामुदायिक सुधार आंदोलन का बुनियादी अभिलेख, जिसमें बालिका शिक्षा, फिजूलखर्ची पर रोक और सहकारी ऋण पर जोर दिया गया था।",
    descUr: "ابتدائی برادری اصلاحی تحریک کا بنیادی ریکارڈ، جس میں لڑکیوں کی تعلیم، فضول خرچی کے خاتمے اور باہمی تعاون پر زور دیا گیا تھا۔",
    category: "Social Reform Archive",
    year: "1928 CE",
    location: "Bhopal Central Library Records"
  }
];

export default function HistoryDetails({ currentLanguage }: HistoryDetailsProps) {
  const [activeSubTab, setActiveSubTab] = useState<'chapters' | 'timeline' | 'maps' | 'archive' | 'videos'>('chapters');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTimelineEra, setExpandedTimelineEra] = useState<number | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<HeritageVideo | null>(null);
  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleBookmark = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedChapters.includes(idx)) {
      setBookmarkedChapters(bookmarkedChapters.filter(i => i !== idx));
      showToast(currentLanguage === 'en' ? 'Removed from saved reading list' : 'पसंदीदा सूची से हटाया गया');
    } else {
      setBookmarkedChapters([...bookmarkedChapters, idx]);
      showToast(currentLanguage === 'en' ? '⭐ Saved to reading bookmark list!' : '⭐ पसंदीदा सूची में जोड़ा गया!');
    }
  };

  const handleDownloadMonograph = () => {
    showToast(currentLanguage === 'en' ? '📥 Downloading 50-Page Community History Monograph (PDF)...' : '📥 50-पेज इतिहास मोनोग्राफ (PDF) डाउनलोड हो रहा है...');
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'Rangrez_Community_Complete_History_Monograph.pdf');
      document.body.appendChild(link);
      setShowPdfViewer(true);
    }, 1000);
  };

  const handlePrintHistory = () => {
    window.print();
  };

  // Filtered chapters for the Encyclopedia tab
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return historyContent;
    const q = searchQuery.toLowerCase();
    return historyContent.filter(ch => {
      const title = ch.title[currentLanguage].toLowerCase();
      const subtitle = ch.subtitle[currentLanguage].toLowerCase();
      const content = ch.content[currentLanguage].toLowerCase();
      const chapterNum = ch.chapter.toLowerCase();
      return title.includes(q) || subtitle.includes(q) || content.includes(q) || chapterNum.includes(q);
    });
  }, [searchQuery, currentLanguage]);

  return (
    <div className="space-y-10 animate-fadeIn" id="history_details_content">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFD54A] flex items-center gap-3 max-w-md animate-bounce">
          <Sparkles className="w-5 h-5 text-[#FFD54A] shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Breadcrumb Navigation & Top Actions */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 flex-wrap">
          <span className="text-[#004B23] font-bold">{currentLanguage === 'en' ? 'About Us' : 'हमारे बारे में'}</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">{currentLanguage === 'en' ? 'Community History & Heritage' : 'बिरादरी का इतिहास एवं विरासत'}</span>
          <span className="bg-emerald-100 text-[#004B23] px-2 py-0.5 rounded font-black ml-1">15 CHAPTERS</span>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap w-full md:w-auto justify-end">
          <button
            onClick={() => setShowPdfViewer(true)}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-2 border border-slate-300 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#004B23]" />
            <span>{currentLanguage === 'en' ? 'View PDF Monograph' : 'PDF मोनोग्राफ देखें'}</span>
          </button>

          <button
            onClick={handleDownloadMonograph}
            className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl text-xs font-extrabold transition shadow-md flex items-center gap-2 border border-[#FFD54A]/30 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{currentLanguage === 'en' ? 'Download Monograph' : 'इतिहास डाउनलोड करें'}</span>
          </button>

          <button
            onClick={handlePrintHistory}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition cursor-pointer"
            title={currentLanguage === 'en' ? 'Print History Records' : 'रिकॉर्ड प्रिंट करें'}
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              showToast(currentLanguage === 'en' ? '🔗 Link copied to share history page!' : '🔗 लिंक कॉपी किया गया!');
            }}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition cursor-pointer"
            title={currentLanguage === 'en' ? 'Share History Page' : 'पेज शेयर करें'}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0B132B] via-[#142244] to-[#004B23] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden border border-[#FFD54A]/30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>
              {currentLanguage === 'en' ? 'COMPLETE HISTORICAL ARCHIVE & TIMELINE' : currentLanguage === 'ur' ? 'مکمل تاریخی آرکائیو اور ٹائم لائن' : 'संपूर्ण ऐतिहासिक संग्रह एवं समयरेखा'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
            {currentLanguage === 'en'
              ? 'Heritage of the Rangrez (Neelgar) Community'
              : currentLanguage === 'ur'
              ? 'رنگریز (نیلگر) برادری کی تاریخی اور علمی وراثت'
              : 'रंगरेज (नीलगर) समुदाय का गौरवशाली इतिहास एवं विरासत'}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-light max-w-3xl">
            {currentLanguage === 'en'
              ? 'Tracing a 5,000-year scientific journey from the natural indigo vats of the Vedic and Mughal eras to global silk road trade and modern socio-economic unification. Discover our ancestors\' mastery of natural colors and their enduring contributions to Indian civilization.'
              : currentLanguage === 'ur'
              ? 'ویدک اور مغل دور کی قدرتی نیل بھٹیوں سے لے کر شاہراہ ریشم کی عالمی تجارت اور جدید سماجی اتحاد تک 5000 سالہ علمی سفر۔ قدرتی رنگوں میں ہمارے اسلاف کی مہارت اور ہندوستانی تہذیب میں ان کی بے مثال خدمات کو جانیے۔'
              : 'वैदिक और मुगल काल की प्राकृतिक नील भट्टियों से लेकर रेशम मार्ग के वैश्विक व्यापार और आधुनिक सामाजिक एकीकरण तक की 5,000 वर्षों की वैज्ञानिक यात्रा। प्राकृतिक रंगों में हमारे पूर्वजों की महारत और भारतीय सभ्यता में उनके अमूल्य योगदान को जानें।'}
          </p>

          {/* Quick Stats Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="text-lg sm:text-xl font-black text-[#FFD54A] font-mono">5,000+</div>
              <div className="text-[10px] sm:text-xs text-gray-300 uppercase">{currentLanguage === 'en' ? 'Years of Heritage' : 'वर्षों की विरासत'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono">15</div>
              <div className="text-[10px] sm:text-xs text-gray-300 uppercase">{currentLanguage === 'en' ? 'Detailed Chapters' : 'विस्तृत अध्याय'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="text-lg sm:text-xl font-black text-blue-400 font-mono">5+</div>
              <div className="text-[10px] sm:text-xs text-gray-300 uppercase">{currentLanguage === 'en' ? 'Historic Dyeing Hubs' : 'ऐतिहासिक रंगाई केंद्र'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="text-lg sm:text-xl font-black text-purple-300 font-mono">100%</div>
              <div className="text-[10px] sm:text-xs text-gray-300 uppercase">{currentLanguage === 'en' ? 'Documented Records' : 'प्रमाणित दस्तावेज'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs inside History */}
      <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap items-center justify-start sm:justify-center gap-1.5 overflow-x-auto">
        {[
          { id: 'chapters', labelEn: 'Complete History (15 Chapters)', labelHi: 'संपूर्ण इतिहास (15 अध्याय)', labelUr: 'مکمل تاریخ (15 باب)', icon: BookOpen },
          { id: 'timeline', labelEn: 'Historical Timeline & Milestones', labelHi: 'ऐतिहासिक समयरेखा एवं पड़ाव', labelUr: 'تاریخی ٹائم لائن', icon: Clock },
          { id: 'maps', labelEn: 'Heritage Maps & Dyeing Hubs', labelHi: 'विरासत मानचित्र एवं रंगाई केंद्र', labelUr: 'ورثہ کے نقشے اور مراکز', icon: MapPin },
          { id: 'archive', labelEn: 'Historic Photo & Tool Archive', labelHi: 'ऐतिहासिक फोटो एवं उपकरण संग्रह', labelUr: 'تاریخی تصاویر اور اوزار', icon: ImageIcon },
          { id: 'videos', labelEn: 'Documentary Videos', labelHi: 'वृत्तचित्र वीडियो (Documentaries)', labelUr: 'ڈاکومنٹری ویڈیوز', icon: Film },
        ].map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#004B23] text-[#FFD54A] shadow-md border border-[#FFD54A]/40'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#FFD54A]' : 'text-gray-400'}`} />
              <span>{currentLanguage === 'en' ? tab.labelEn : currentLanguage === 'ur' ? tab.labelUr : tab.labelHi}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* TAB 1: COMPLETE HISTORY CHAPTERS ENCYCLOPEDIA */}
      {/* ========================================================= */}
      {activeSubTab === 'chapters' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Search Bar for Chapters */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search history chapters, eras, keywords...' : 'इतिहास के अध्याय, काल, कीवर्ड खोजें...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#004B23] focus:bg-white transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <span>{currentLanguage === 'en' ? 'Showing:' : 'दिखा रहे हैं:'}</span>
              <span className="bg-emerald-100 text-[#004B23] px-2.5 py-1 rounded-lg font-black">{filteredChapters.length} / {historyContent.length} Chapters</span>
              {bookmarkedChapters.length > 0 && (
                <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-lg font-black flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>{bookmarkedChapters.length} Saved</span>
                </span>
              )}
            </div>
          </div>

          {filteredChapters.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-base font-bold text-gray-800">{currentLanguage === 'en' ? 'No chapters found matching your search' : 'खोज के अनुसार कोई अध्याय नहीं मिला'}</h3>
              <button onClick={() => setSearchQuery('')} className="px-4 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold">
                {currentLanguage === 'en' ? 'Reset Search' : 'खोज रीसेट करें'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredChapters.map((chapter) => {
                const originalIndex = historyContent.findIndex(c => c.chapter === chapter.chapter);
                const isBookmarked = bookmarkedChapters.includes(originalIndex);
                const wordCount = (chapter.content?.[currentLanguage] || '').split(/\s+/).length;
                const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 180));

                return (
                  <div
                    key={originalIndex}
                    onClick={() => setSelectedChapter(originalIndex)}
                    className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-[#004B23] font-mono text-xs font-black uppercase tracking-wider group-hover:bg-[#004B23] group-hover:text-[#FFD54A] transition">
                          {chapter.chapter}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-500" />
                            <span>{readTimeMinutes} min read</span>
                          </span>
                          <button
                            onClick={(e) => toggleBookmark(originalIndex, e)}
                            className="text-gray-300 hover:text-amber-500 transition p-1"
                            title="Bookmark Chapter"
                          >
                            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition line-clamp-2">
                        {chapter.title[currentLanguage]}
                      </h3>

                      <p className="text-xs text-emerald-800 font-semibold line-clamp-1 bg-emerald-50/60 px-2 py-1 rounded">
                        {chapter.subtitle[currentLanguage]}
                      </p>

                      <p className="text-xs text-gray-600 leading-relaxed font-normal line-clamp-3">
                        {chapter.content[currentLanguage]}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23] group-hover:text-emerald-700">
                      <span className="flex items-center gap-1">
                        <span>{currentLanguage === 'en' ? 'Read Complete Chapter' : 'पूरा अध्याय पढ़ें'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono font-normal">Ch. {originalIndex + 1} of 15</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: HISTORICAL TIMELINE & MILESTONES */}
      {/* ========================================================= */}
      {activeSubTab === 'timeline' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-emerald-900 to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 bg-[#FFD54A] text-[#0B132B] rounded-full text-xs font-black font-mono uppercase">
                {currentLanguage === 'en' ? 'CHRONOLOGICAL JOURNEY' : 'कालक्रम अनुसार ऐतिहासिक यात्रा'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                {currentLanguage === 'en' ? '5,000 Years of Craftsmanship & Evolution' : '5,000 वर्षों का शिल्पकला एवं सामाजिक विकास'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 font-light">
                {currentLanguage === 'en'
                  ? 'From ancient Indus Valley indigo vats to royal Mughal karkhanas, freedom struggle participation, and modern national unification.'
                  : 'सिंधु घाटी सभ्यता की नील भट्टियों से लेकर मुगल काल के कारखानों, स्वतंत्रता संग्राम और आधुनिक राष्ट्रीय एकीकरण तक का स्वर्णिम इतिहास।'}
              </p>
            </div>
            <div className="w-full md:w-auto text-center bg-white/10 p-4 rounded-2xl border border-white/20 shrink-0">
              <Clock className="w-8 h-8 text-[#FFD54A] mx-auto mb-1 animate-spin-slow" />
              <div className="text-xs font-bold text-white uppercase">{currentLanguage === 'en' ? '7 Major Historical Eras' : '7 प्रमुख ऐतिहासिक काल'}</div>
            </div>
          </div>

          {/* Timeline Cards List */}
          <div className="relative border-l-4 border-[#004B23] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 py-2">
            {HISTORICAL_MILESTONES.map((item, idx) => {
              const isExpanded = expandedTimelineEra === idx;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#004B23] border-4 border-white shadow-md flex items-center justify-center text-[#FFD54A] font-black text-xs group-hover:scale-125 transition">
                    ✓
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#004B23] transition space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#004B23] text-[#FFD54A] font-mono text-xs font-black rounded-lg">
                          {item.year}
                        </span>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          {item.era}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-extrabold text-[#0B132B]">
                      {currentLanguage === 'en' ? item.titleEn : currentLanguage === 'ur' ? item.titleUr : item.titleHi}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      {currentLanguage === 'en' ? item.descEn : currentLanguage === 'ur' ? item.descUr : item.descHi}
                    </p>

                    {/* Expandable historical context button */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => setExpandedTimelineEra(isExpanded ? null : idx)}
                        className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? (currentLanguage === 'en' ? 'Hide Archival Notes' : 'पुरालेख विवरण छिपाएं') : (currentLanguage === 'en' ? 'Read Archival Context & Significance' : 'ऐतिहासिक संदर्भ एवं महत्व पढ़ें')}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      <span className="text-[10px] text-gray-400 font-mono uppercase">Era Milestone #{idx + 1}</span>
                    </div>

                    {isExpanded && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-gray-700 space-y-2 animate-fadeIn">
                        <div className="font-bold text-[#004B23] flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span>{currentLanguage === 'en' ? 'Historical Significance & Community Legacy:' : 'ऐतिहासिक महत्व एवं सामाजिक विरासत:'}</span>
                        </div>
                        <p className="leading-relaxed font-light">
                          {currentLanguage === 'en'
                            ? `During the ${item.era}, the Neelgar craftsmanship not only sustained local economies but also preserved ancient botanical chemistry. Master dyers developed over 120 shades using natural alum, indigo, pomegranate rinds, and iron rust, laying the foundation for India's global textile supremacy.`
                            : `इस काल में रंगरेज कारीगरों ने न केवल स्थानीय अर्थव्यवस्था को बल दिया बल्कि प्राचीन वनस्पति रसायन शास्त्र को भी जीवित रखा। कारीगरों ने प्राकृतिक फिटकरी, नील, अनार के छिलके और लोहे के रस से 120 से अधिक रंगों का आविष्कार किया, जिसने भारतीय वस्त्र उद्योग को विश्व में सर्वोच्च स्थान दिलाया।`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: HERITAGE MAPS & DYEING HUBS */}
      {/* ========================================================= */}
      {activeSubTab === 'maps' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-[#004B23] to-[#003318] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#FFD54A]/30 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFD54A] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'GEOGRAPHICAL HERITAGE CENTERS' : 'भौगोलिक विरासत एवं रंगाई क्लस्टर'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Historic Natural Indigo & Textile Hubs of Bharat' : 'भारत के ऐतिहासिक प्राकृतिक नील एवं वस्त्र कला केंद्र'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light max-w-3xl">
              {currentLanguage === 'en'
                ? 'For centuries, specific regions across India became world-renowned centers of excellence for natural vegetable dyeing, tie-and-dye (Bandhani), Leheriya, and block printing. Explore our vibrant geographical roots.'
                : 'सदियों से, भारत के विभिन्न क्षेत्र प्राकृतिक वनस्पति रंगाई, बांधनी, लहरिया और ब्लॉक प्रिंटिंग के लिए विश्व प्रसिद्ध केंद्र रहे हैं। हमारी समृद्ध भौगोलिक जड़ों को जानें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HISTORIC_DYEING_CENTERS.map((hub) => (
              <div key={hub.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#004B23] transition flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono uppercase border ${hub.badgeColor}`}>
                      📍 {hub.state}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {hub.artisans}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-extrabold text-[#0B132B]">
                    {hub.city}
                  </h3>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-[#004B23] font-semibold">
                    🎨 {currentLanguage === 'en' ? hub.specialtyEn : currentLanguage === 'ur' ? hub.specialtyUr : hub.specialtyHi}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {currentLanguage === 'en' ? hub.historyEn : currentLanguage === 'ur' ? hub.historyUr : hub.historyHi}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>{currentLanguage === 'en' ? 'Verified Heritage Cluster' : 'प्रमाणित विरासत क्लस्टर'}</span>
                  </span>
                  <button
                    onClick={() => alert(currentLanguage === 'en' ? `Connecting to ${hub.state} District Heritage Council...` : `${hub.state} जिला विरासत समिति से संपर्क किया जा रहा है...`)}
                    className="text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-[#004B23] px-2.5 py-1 rounded-lg transition cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Explore Cluster' : 'क्लस्टर देखें'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: HISTORIC PHOTO & TOOL ARCHIVE */}
      {/* ========================================================= */}
      {activeSubTab === 'archive' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-stone-900 via-[#0B132B] to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-stone-800 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-[#FFD54A] text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <ImageIcon className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'MUSEUM & ARCHIVAL GALLERY' : 'संग्रहालय एवं ऐतिहासिक उपकरण दीर्घा'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Archival Artifacts, Copper Vats & Royal Deeds' : 'ऐतिहासिक उपकरण, तांबे की नील भट्टियां एवं शाही दस्तावेज'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-3xl">
              {currentLanguage === 'en'
                ? 'Preserving rare physical artifacts of our ancestors: centuries-old copper fermentation cauldrons, hand-carved Sheesham printing blocks, and imperial Mughal farmans recognizing our guilds.'
                : 'हमारे पूर्वजों के दुर्लभ ऐतिहासिक अवशेषों का संरक्षण: सदियों पुराने तांबे के हौद, हाथ से नक्काशीदार शीशम के ब्लॉक, और श्रेणियों को मान्यता देने वाले शाही मुगल फरमान।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARCHIVE_GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="px-3 py-1 bg-amber-50 text-amber-800 font-mono text-xs font-black rounded-lg border border-amber-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? item.titleEn : currentLanguage === 'ur' ? item.titleUr : item.titleHi}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {currentLanguage === 'en' ? item.descEn : currentLanguage === 'ur' ? item.descUr : item.descHi}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.location}</span>
                  </span>
                  <button
                    onClick={() => alert(currentLanguage === 'en' ? `Requesting high-resolution archive scan for ${item.titleEn}...` : `उच्च संकल्प अभिलेख प्रति का अनुरोध किया जा रहा है...`)}
                    className="text-[#004B23] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentLanguage === 'en' ? 'Request Archival Copy' : 'अभिलेख प्रति मांगें'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: DOCUMENTARY VIDEOS & MEDIA LIBRARY */}
      {/* ========================================================= */}
      {activeSubTab === 'videos' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-[#142244] to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-blue-500/30 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Film className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'DOCUMENTARY & VIDEO LIBRARY' : 'ऐतिहासिक वृत्तचित्र एवं वीडियो गैलरी'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {currentLanguage === 'en' ? 'Documentaries & Heritage Video Records' : 'रंगरेजों के इतिहास पर निर्मित वृत्तचित्र एवं वीडियो'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-3xl">
              {currentLanguage === 'en'
                ? 'Watch documented interviews with senior artisans, historical journeys of natural dyeing, and highlights of national Mahapanchayats.'
                : 'वरिष्ठ कारीगरों के साथ ऐतिहासिक साक्षात्कार, प्राकृतिक रंगाई की ऐतिहासिक यात्रा और राष्ट्रीय महापंचायतों के प्रमुख वीडियो देखें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialHeritageVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
                <div>
                  <div 
                    onClick={() => setSelectedVideo(video)}
                    className="relative aspect-video bg-slate-900 cursor-pointer group overflow-hidden"
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FFD54A] text-[#0B132B] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur text-white font-mono text-xs rounded font-bold">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#004B23] text-[#FFD54A] font-mono text-[10px] uppercase font-black rounded shadow">
                      {video.platform}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] line-clamp-2">
                      {currentLanguage === 'en' ? video.titleEn : video.titleHi}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>{video.views.toLocaleString()} {currentLanguage === 'en' ? 'views' : 'व्यूज़'}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{video.likes} {currentLanguage === 'en' ? 'likes' : 'लाइक'}</span>
                      </span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">📍 {video.location.state}</span>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{currentLanguage === 'en' ? 'Watch Video' : 'वीडियो देखें'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* CHAPTER READING MODAL (ENHANCED) */}
      {/* ========================================================= */}
      {selectedChapter !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white p-6 flex justify-between items-center gap-4 border-b border-gray-700 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#FFD54A] text-[#0B132B] font-mono text-xs font-black uppercase">
                    {historyContent[selectedChapter].chapter}
                  </span>
                  <span className="text-xs text-gray-300 font-mono">
                    • Ch. {selectedChapter + 1} of 15
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-serif font-black text-white">
                  {historyContent[selectedChapter].title[currentLanguage]}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${historyContent[selectedChapter].chapter}: ${historyContent[selectedChapter].title[currentLanguage]}\n\n${historyContent[selectedChapter].content[currentLanguage]}`);
                    showToast(currentLanguage === 'en' ? '📋 Chapter text copied to clipboard!' : '📋 अध्याय पाठ कॉपी किया गया!');
                  }}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition cursor-pointer"
                  title="Copy Text"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedChapter(null)}
                  className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-xl transition cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#FCFAF5]">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-serif font-extrabold text-base sm:text-lg">
                {historyContent[selectedChapter].subtitle[currentLanguage]}
              </div>

              <div className="prose max-w-none text-gray-800 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-wrap font-sans">
                {historyContent[selectedChapter].content[currentLanguage]}
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
                <span>📚 {currentLanguage === 'en' ? 'Verified Historical Archive of All India Rangrez Samaj Trust' : 'अखिल भारतीय रंगरेज समाज ट्रस्ट का प्रमाणित ऐतिहासिक अभिलेख'}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (selectedChapter > 0) setSelectedChapter(selectedChapter - 1);
                    }}
                    disabled={selectedChapter === 0}
                    className="px-3 py-1.5 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
                  >
                    ← {currentLanguage === 'en' ? 'Prev Chapter' : 'पिछला अध्याय'}
                  </button>
                  <button
                    onClick={() => {
                      if (selectedChapter < historyContent.length - 1) setSelectedChapter(selectedChapter + 1);
                    }}
                    disabled={selectedChapter === historyContent.length - 1}
                    className="px-3 py-1.5 bg-[#004B23] text-white rounded-lg hover:bg-[#00381a] disabled:opacity-50 cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Next Chapter' : 'अगला अध्याय'} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIDEO PLAYER MODAL */}
      {/* ========================================================= */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col border border-slate-700 text-white">
            <div className="p-4 sm:p-6 flex justify-between items-center border-b border-slate-800 bg-slate-950">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase">
                  {selectedVideo.platform} • {selectedVideo.duration}
                </span>
                <h3 className="text-base sm:text-xl font-serif font-extrabold text-white mt-1">
                  {currentLanguage === 'en' ? selectedVideo.titleEn : selectedVideo.titleHi}
                </h3>
              </div>
              <button onClick={() => setSelectedVideo(null)} className="p-2 bg-slate-800 hover:bg-rose-600 text-gray-300 rounded-xl transition cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-video bg-black flex items-center justify-center relative">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 rounded-full bg-[#004B23] text-[#FFD54A] flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">{currentLanguage === 'en' ? 'Simulated Video Stream Active' : 'वीडियो स्ट्रीम चालू है'}</h4>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    {currentLanguage === 'en' 
                      ? `Playing "${selectedVideo.titleEn}" from official ${selectedVideo.platform} archive channel.`
                      : `आधिकारिक ${selectedVideo.platform} चैनल से वीडियो चलाया जा रहा है।`}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono border-t border-slate-800">
              <div>📍 {selectedVideo.location.state}, {selectedVideo.location.district}</div>
              <div className="flex items-center gap-4">
                <span>👁️ {selectedVideo.views.toLocaleString()} views</span>
                <span>👍 {selectedVideo.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* PDF MONOGRAPH VIEWER MODAL */}
      {/* ========================================================= */}
      {showPdfViewer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center gap-4 border-b border-gray-700 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FFD54A] text-[#0B132B] font-black font-mono text-xs">PDF</div>
                <div>
                  <h3 className="text-base font-serif font-extrabold text-white">
                    {currentLanguage === 'en' ? 'Complete Community History Monograph (2026 Edition)' : 'संपूर्ण इतिहास मोनोग्राफ (2026 संस्करण)'}
                  </h3>
                  <p className="text-[11px] text-gray-300 font-mono">50 Pages • Approved by All India Rangrez Samaj Trust</p>
                </div>
              </div>
              <button onClick={() => setShowPdfViewer(false)} className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-xl transition cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto bg-slate-100 flex-1 space-y-6 text-center">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-300 max-w-2xl mx-auto space-y-6 text-left">
                <div className="text-center border-b border-gray-200 pb-6 space-y-2">
                  <span className="px-3 py-1 bg-emerald-100 text-[#004B23] rounded-full text-xs font-mono font-black">OFFICIAL MONOGRAPH</span>
                  <h2 className="text-2xl font-serif font-black text-[#0B132B]">THE HERITAGE OF BHARAT'S NEELGARS</h2>
                  <p className="text-xs text-gray-500 font-mono">A Comprehensive History of the Rangrez Community (7000 BCE - 2026 CE)</p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <p>
                    <strong>Abstract:</strong> This monograph compiles historical evidence from Vedic texts, Mughal royal karkhana registers, British colonial gazetteers, and modern census records to document the scientific and social evolution of the Rangrez (Neelgar) community.
                  </p>
                  <p>
                    <strong>Table of Contents:</strong><br />
                    1. The Dawn of Textile Dyeing in the Indus Valley<br />
                    2. Vedic Indigo Extraction and Sacred Guilds<br />
                    3. Silk Road Maritime Trade & Global Exports<br />
                    4. Mughal Karkhanas and Master Bandhani Craftsmanship<br />
                    5. Participation in India's Freedom Struggle & Swadeshi Movement<br />
                    6. The 2026 Socio-Economic Census and Digital Unification
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs font-mono text-gray-400">
                  <span>Published by National Heritage Council</span>
                  <span className="text-emerald-700 font-bold">VERIFIED RECORD ✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 border-t border-gray-200 flex justify-end items-center gap-3 shrink-0">
              <button onClick={() => setShowPdfViewer(false)} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer">
                {currentLanguage === 'en' ? 'Close Viewer' : 'बंद करें'}
              </button>
              <button
                onClick={() => {
                  handleDownloadMonograph();
                  setShowPdfViewer(false);
                }}
                className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-xl text-xs font-extrabold transition shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'Download Full PDF (4.8 MB)' : 'पूर्ण PDF डाउनलोड करें (4.8 MB)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Related Pages & Cross-Navigation Footer */}
      <div className="bg-gradient-to-r from-slate-900 to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-[#FFD54A] font-mono text-xs font-bold uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>{currentLanguage === 'en' ? 'EXPLORE MORE IN ABOUT US' : 'हमारे बारे में अन्य अनुभाग देखें'}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            onClick={() => {
              const btn = document.querySelector('[data-subtab="about-constitution"]') as HTMLButtonElement;
              if (btn) btn.click();
            }}
            className="bg-slate-800/80 hover:bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition cursor-pointer space-y-1"
          >
            <div className="font-bold text-sm text-white flex items-center justify-between">
              <span>{currentLanguage === 'en' ? 'Trust Constitution & By-Laws' : 'ट्रस्ट संविधान एवं नियमावली'}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD54A]" />
            </div>
            <p className="text-xs text-gray-400">{currentLanguage === 'en' ? 'Read 8 official governing articles & take the pledge' : '8 आधिकारिक अनुच्छेद एवं संकल्प'}</p>
          </div>

          <div
            onClick={() => {
              const btn = document.querySelector('[data-subtab="about-vision"]') as HTMLButtonElement;
              if (btn) btn.click();
            }}
            className="bg-slate-800/80 hover:bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-amber-500 transition cursor-pointer space-y-1"
          >
            <div className="font-bold text-sm text-white flex items-center justify-between">
              <span>{currentLanguage === 'en' ? 'Mission, Vision & Resolutions' : 'लक्ष्य, दृष्टि एवं सामाजिक संकल्प'}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD54A]" />
            </div>
            <p className="text-xs text-gray-400">{currentLanguage === 'en' ? 'Explore 14 social reform resolutions & roadmap' : '14 सामाजिक सुधार संकल्प एवं रोडमैप'}</p>
          </div>

          <div
            onClick={() => {
              const btn = document.querySelector('[data-subtab="about-leadership"]') as HTMLButtonElement;
              if (btn) btn.click();
            }}
            className="bg-slate-800/80 hover:bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition cursor-pointer space-y-1"
          >
            <div className="font-bold text-sm text-white flex items-center justify-between">
              <span>{currentLanguage === 'en' ? 'Founders & Leadership Council' : 'संस्थापक एवं राष्ट्रीय कार्यकारिणी'}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD54A]" />
            </div>
            <p className="text-xs text-gray-400">{currentLanguage === 'en' ? 'Meet national and state committee presidents' : 'राष्ट्रीय और राज्य अध्यक्षों से मिलें'}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

