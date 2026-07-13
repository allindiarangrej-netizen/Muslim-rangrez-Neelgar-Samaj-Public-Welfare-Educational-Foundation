import React from 'react';
import { 
  Users, 
  VolumeX, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Scale, 
  ShieldCheck, 
  Calendar, 
  MapPin,
  Sparkle,
  BookmarkCheck,
  Coins,
  BookOpen,
  HeartHandshake,
  Heart,
  Gift,
  GraduationCap,
  Building2,
  Ban,
  Utensils,
  Network
} from 'lucide-react';
import { Language } from '../types';

interface CommunitySocialReformSectionProps {
  currentLanguage: Language;
}

export default function CommunitySocialReformSection({ currentLanguage }: CommunitySocialReformSectionProps) {
  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const isUrdu = currentLanguage === 'ur';

  const resolutionsData = [
    {
      id: 'res-01',
      number: 'Resolution No. 01',
      numberHi: 'प्रस्ताव संख्या 01',
      numberUr: 'قرارداد نمبر 01',
      categoryEn: 'Education, Progress & Community Guidance',
      categoryHi: 'शिक्षा, प्रगति व सामुदायिक मार्गदर्शन',
      categoryUr: 'تعلیم، ترقی اور رہنمائی',
      icon: <Users className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-indigo-50 border-indigo-200 text-indigo-800 group-hover:bg-indigo-900 group-hover:text-indigo-100 group-hover:border-indigo-700',
      iconBg: 'bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:border-indigo-500',
      gradientBorder: 'from-indigo-500 via-purple-500 to-indigo-500',
      textEn: 'To build a better future for the community through education, progressive thinking, employment opportunities, and dedication to the nation, regular meetings shall be organized from time to time. In addition, awareness programs and camps on de-addiction, healthcare, skill development, and small-scale industries shall be conducted regularly.',
      textHi: 'शिक्षा, प्रगतिशील सोच, रोजगार के अवसरों और देश के प्रति समर्पण के माध्यम से समुदाय के लिए बेहतर भविष्य बनाने के लिए समय-समय पर नियमित बैठकें आयोजित की जाएंगी। इसके अलावा, नशा मुक्ति, स्वास्थ्य सेवा, कौशल विकास और लघु उद्योगों पर जागरूकता कार्यक्रम और शिविर नियमित रूप से आयोजित किए जाएंगे।',
      textUr: 'تعلیم، روشن خیالی، روزگار کے مواقع اور وطن سے محبت کے ذریعے برادری کے بہتر مستقبل کے لیے وقتاً فوقتاً باقاعدہ اجلاس منعقد کیے جائیں گے۔ اس کے علاوہ، نشہ مکتی، صحت، مہارت کے فروغ، اور چھوٹی صنعتوں پر بیداری پروگرام اور کیمپ باقاعدگی سے منعقد کیے جائیں گے۔'
    },
    {
      id: 'res-02',
      number: 'Resolution No. 02',
      numberHi: 'प्रस्ताव संख्या 02',
      numberUr: 'قرارداد نمبر 02',
      categoryEn: 'Simplicity in Marriage & Prohibition of Extravagance',
      categoryHi: 'विवाह में सादगी एवं फिजूलखर्ची पर प्रतिबंध',
      categoryUr: 'شادیوں میں سادگی اور فضول خرچی پر پابندی',
      icon: <VolumeX className="h-6 w-6 text-rose-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-rose-50 border-rose-200 text-rose-800 group-hover:bg-rose-900 group-hover:text-rose-100 group-hover:border-rose-700',
      iconBg: 'bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:border-rose-500',
      gradientBorder: 'from-rose-500 via-amber-500 to-rose-500',
      textEn: 'Marriage ceremonies shall be conducted with simplicity. The use of bands, DJs, fireworks, and similar extravagant practices has been completely prohibited by the unanimous decision of the community.',
      textHi: 'विवाह समारोह सादगी के साथ संपन्न किए जाएंगे। समाज के सर्वसम्मति निर्णय द्वारा बैंड, डीजे, आतिशबाजी और इसी तरह की असाधारण और खर्चीली प्रथाओं के उपयोग को पूरी तरह से प्रतिबंधित कर दिया गया है।',
      textUr: 'شادی کی تقریبات سادگی کے ساتھ منعقد کی جائیں گی۔ برادری کے متفقہ فیصلے کے تحت بینڈ، ڈی جے، آتش بازی اور اس طرح کے فضول اور مہنگے رواجوں کے استعمال پر مکمل طور پر پابندی عائد کر دی گئی ہے۔'
    },
    {
      id: 'res-03',
      number: 'Resolution No. 03',
      numberHi: 'प्रस्ताव संख्या 03',
      numberUr: 'قرارداد نمبر 03',
      categoryEn: 'Shariah Nikah Timings & Immediate Cash Mehr',
      categoryHi: 'निकाह का समय एवं नकद मेहर की तत्काल अदायगी',
      categoryUr: 'نکاح کا وقت اور نقد مہر کی فوری ادائیگی',
      icon: <Clock className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-amber-50 border-amber-200 text-amber-800 group-hover:bg-amber-900 group-hover:text-amber-100 group-hover:border-amber-700',
      iconBg: 'bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:border-amber-500',
      gradientBorder: 'from-amber-500 via-emerald-500 to-amber-500',
      textEn: 'Nikah (Islamic marriage) should be solemnized between the Asr and Maghrib prayers. If there is a genuine and unavoidable reason, it may be performed up to the Isha prayer. The amount of Mehr (dower) shall be fixed according to Islamic Shariah, and the Mehr must be paid immediately in cash at the time of Nikah.',
      textHi: 'निकाह (इस्लामी विवाह) असर और मगरिब की नमाज के बीच संपन्न होना चाहिए। यदि कोई वास्तविक और अनिवार्य कारण है, तो इसे इशा की नमाज तक किया जा सकता है। मेहर की राशि इस्लामी शरीयत के अनुसार तय की जाएगी, और मेहर का भुगतान निकाह के समय नकद रूप में तुरंत किया जाना चाहिए।',
      textUr: 'نکاح عصر اور مغرب کی نمازوں کے درمیان منعقد ہونا چاہیے۔ اگر کوئی معقول اور ناگزیر وجہ ہو تو اسے عشاء کی نماز تک کیا جا سکتا ہے۔ مہر کی رقم اسلامی شریعت کے مطابق طے کی جائے گی، اور مہر کی ادائیگی نکاح کے وقت نقد صورت میں فوری طور پر کی جانی چاہیے۔'
    },
    {
      id: 'res-04',
      number: 'Resolution No. 04',
      numberHi: 'प्रस्ताव संख्या 04',
      numberUr: 'قرارداد نمبر 04',
      categoryEn: 'Abolition of Pre-Marriage Rituals (Lagun, Teeka, Portika)',
      categoryHi: 'लगुन, टीका, पोर्तिका जैसी रस्मों की समाप्ति',
      categoryUr: 'لگن، ٹیکہ، پورتیکا جیسی رسموں کا خاتمہ',
      icon: <Sparkles className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-emerald-50 border-emerald-200 text-emerald-800 group-hover:bg-emerald-900 group-hover:text-emerald-100 group-hover:border-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-500',
      gradientBorder: 'from-emerald-500 via-teal-500 to-emerald-500',
      textEn: 'The customs of Lagun (pre-marriage ceremony), Teeka, Portika (doorstep ritual), and similar traditions are hereby abolished. Instead, only an engagement (Mangni) ceremony may be held, during which any customary exchange may be completed. Thereafter, the marriage shall proceed directly with the Nikah ceremony.',
      textHi: 'लगुन (विवाह पूर्व समारोह), टीका, पोर्तिका (द्वार रस्म) और इसी तरह की परंपराओं को एतद्द्वारा समाप्त किया जाता है। इसके स्थान पर केवल एक सगाई (मंगनी) समारोह आयोजित किया जा सकता है, जिसके दौरान कोई भी पारंपरिक आदान-प्रदान पूरा किया जा सकता है। इसके बाद, विवाह सीधे निकाह समारोह के साथ संपन्न होगा।',
      textUr: 'لگن (شادی سے پہلے کی تقریب)، ٹیکہ، پورتیکا (دروازے کی رسم)، اور اس جیسی روایات کو اس کے ذریعے ختم کیا جاتا ہے۔ اس کے بجائے صرف ایک منگنی کی تقریب منعقد کی جا سکتی ہے، جس کے دوران کوئی بھی روایتی لین دین مکمل کیا جا سکتا ہے۔ اس کے بعد شادی براہ راست نکاح کی تقریب کے ساتھ منعقد ہوگی۔'
    },
    {
      id: 'res-05',
      number: 'Resolution No. 05',
      numberHi: 'प्रस्ताव संख्या 05',
      numberUr: 'قرارداد نمبر 05',
      categoryEn: 'Fixed Honorarium for Qazi & Khidmat Services',
      categoryHi: 'काजी साहब का हदिया ₹2,100 एवं खिदमत शुल्क ₹1,100 का निर्धारण',
      categoryUr: 'قاضی صاحب کا ہدیہ 2,100 روپے اور خدمت فیس 1,100 روپے کا تعین',
      icon: <Coins className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-purple-50 border-purple-200 text-purple-800 group-hover:bg-purple-900 group-hover:text-purple-100 group-hover:border-purple-700',
      iconBg: 'bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:border-purple-500',
      gradientBorder: 'from-purple-500 via-indigo-500 to-purple-500',
      textEn: 'For every Nikah, the honorarium for the Qazi shall be fixed at ₹2,100, and a service contribution of ₹1,100 shall be provided for Khidmat (Nikah-related services).',
      textHi: 'प्रत्येक निकाह के लिए, काजी साहब का हदिया (सम्मान राशि) ₹2,100 निर्धारित किया गया है, और खिदमत (निकाह से संबंधित सेवाओं) के लिए ₹1,100 का सेवा योगदान प्रदान किया जाएगा।',
      textUr: 'ہر نکاح کے لیے، قاضی صاحب کا ہدیہ ₹2,100 مقرر کیا گیا ہے، اور خدمت (نکاح سے متعلق خدمات) کے لیے ₹1,100 کا تعاونی ہدیہ فراہم کیا جائے گا۔'
    },
    {
      id: 'res-06',
      number: 'Resolution No. 06',
      numberHi: 'प्रस्ताव संख्या 06',
      numberUr: 'قرارداد نمبر 06',
      categoryEn: 'Sanctity of Holy Quran Verses on Wedding Cards',
      categoryHi: 'विवाह आमंत्रण कार्डों पर पवित्र कुरान की आयतों के मुद्रण पर प्रतिबंध',
      categoryUr: 'شادی کے دعوتی کارڈوں پر مقدس قرآنی آیات کی چھپائی پر پابندی',
      icon: <BookOpen className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-teal-50 border-teal-200 text-teal-800 group-hover:bg-teal-900 group-hover:text-teal-100 group-hover:border-teal-700',
      iconBg: 'bg-teal-50 border-teal-100 group-hover:bg-teal-600 group-hover:border-teal-500',
      gradientBorder: 'from-teal-500 via-cyan-500 to-teal-500',
      textEn: 'No verses of the Holy Quran or any sacred Islamic text shall be printed on wedding invitation cards.',
      textHi: 'विवाह आमंत्रण कार्डों (शादी के कार्ड) पर पवित्र कुरान की आयतें या कोई भी धार्मिक इस्लामी पाठ नहीं छापा जाएगा ताकि उनकी बेअदबी न हो।',
      textUr: 'شادی کے دعوتی کارڈوں پر قرآن مجید کی آیات یا کوئی بھی مقدس اسلامی متن نہیں چھاپا جائے گا تاکہ بے ادبی سے بچا جا سکے۔'
    },
    {
      id: 'res-07',
      number: 'Resolution No. 07',
      numberHi: 'प्रस्ताव संख्या 07',
      numberUr: 'قرارداد نمبر 07',
      categoryEn: 'Community Welfare Fund via Marriage Contributions',
      categoryHi: 'विवाह योगदान के माध्यम से सामुदायिक कल्याण कोष (₹2,100 एवं ₹1,100)',
      categoryUr: 'شادی کے تعاون کے ذریعے کمیونٹی ویلفیئر فنڈ کا قیام (₹2,100 اور ₹1,100)',
      icon: <HeartHandshake className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-pink-50 border-pink-200 text-pink-800 group-hover:bg-pink-900 group-hover:text-pink-100 group-hover:border-pink-700',
      iconBg: 'bg-pink-50 border-pink-100 group-hover:bg-pink-600 group-hover:border-pink-500',
      gradientBorder: 'from-pink-500 via-rose-500 to-pink-500',
      textEn: 'A Community Welfare Fund shall be established through marriage contributions. The groom’s family shall contribute ₹2,100 and the bride’s family shall contribute ₹1,100. The collected funds shall be utilized for the education of underprivileged children and for supporting the marriages of economically weaker boys and girls within the community.',
      textHi: 'विवाह योगदान के माध्यम से एक सामुदायिक कल्याण कोष (कम्युनिटी वेलफेयर फंड) स्थापित किया जाएगा। दूल्हे का परिवार ₹2,100 और दुल्हन का परिवार ₹1,100 का योगदान देगा। एकत्र की गई राशि का उपयोग जरूरतमंद बच्चों की शिक्षा और समुदाय के आर्थिक रूप से कमजोर लड़के-लड़कियों के विवाह में सहायता के लिए किया जाएगा।',
      textUr: 'شادی کے تعاون کے ذریعے ایک کمیونٹی ویلفیئر فنڈ قائم کیا جائے گا۔ دولہا کا خاندان ₹2,100 اور دلہن کا خاندان ₹1,100 کا تعاون کرے گا۔ جمع شدہ رقم کا استعمال ضرورت مند بچوں کی تعلیم اور برادری کے معاشی طور پر کمزور لڑکے اور لڑکیوں کی شادیوں میں مدد کے لیے کیا جائے گا۔'
    },
    {
      id: 'res-08',
      number: 'Resolution No. 08',
      numberHi: 'प्रस्ताव संख्या 08',
      numberUr: 'قرارداد نمبر 08',
      categoryEn: 'Simplicity in Funerals, No Graveyard Meals & Abolition of Post-Funeral Feasts',
      categoryHi: 'अंत्येष्टि में सादगी, कब्रिस्तान में भोजन घोषणा पर रोक एवं तीजा, दसवीं व चालीसवां दावत की समाप्ति',
      categoryUr: 'تدفین میں سادگی، قبرستان میں کھانے کے اعلانات پر پابندی اور تیجا، دسویں و چالیسواں کی دعوت کا خاتمہ',
      icon: <Heart className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-cyan-50 border-cyan-200 text-cyan-800 group-hover:bg-cyan-900 group-hover:text-cyan-100 group-hover:border-cyan-700',
      iconBg: 'bg-cyan-50 border-cyan-100 group-hover:bg-cyan-600 group-hover:border-cyan-500',
      gradientBorder: 'from-cyan-500 via-sky-500 to-cyan-500',
      textEn: 'During funeral and burial ceremonies, public announcements regarding meals at the graveyard shall be completely discontinued. Meals may only be arranged discreetly for immediate family members and close relatives who have travelled from a distance of 100 kilometers or more and are staying there. Furthermore, the customs of Teeja (third day), Dasvi (tenth day), Khach (fortieth day), and similar post-funeral rituals are hereby completely discontinued.',
      textHi: 'अंत्येष्टि और दफन समारोहों के दौरान, कब्रिस्तान में भोजन के संबंध में सार्वजनिक घोषणाएं पूरी तरह से बंद कर दी जाएंगी। भोजन केवल उन परिवार के सदस्यों और करीबी रिश्तेदारों के लिए गुप्त रूप से आयोजित किया जा सकता है जो 100 किलोमीटर या उससे अधिक की दूरी से यात्रा करके आए हैं और वहीं रुके हुए हैं। इसके अलावा, तीजा (तीसरा दिन), दसवीं (दसवां दिन), खाच (चालीसवां दिन) और इसी तरह के अंत्येष्टि के बाद के रीति-रिवाजों को पूरी तरह से बंद किया जाता है।',
      textUr: 'تدفین اور جنازے کی تقریبات کے دوران، قبرستان میں کھانے سے متعلق عوامی اعلانات مکمل طور پر بند کیے جائیں گے۔ کھانا صرف ان فوری خاندانی اراکین اور قریبی رشتہ داروں کے لیے خاموشی سے ترتیب دیا جا سکتا ہے جو 100 کلومیٹر یا اس سے زیادہ فاصلے سے سفر کر کے آئے ہیں اور وہیں رکے ہوئے ہیں۔ مزید برآں، تیجا (تیسرا دن)، دسویں، چالیسویں، اور اس جیسی تدفین کے بعد کی رسموں کو مکمل طور پر ختم کیا جاتا ہے۔'
    },
    {
      id: 'res-09',
      number: 'Resolution No. 09',
      numberHi: 'प्रस्ताव संख्या 09',
      numberUr: 'قرارداد نمبر 09',
      categoryEn: 'Abolition of Ceremonial Offerings on Deceased & Encouragement of Sadaqah',
      categoryHi: 'मय्यत पर दुपट्टा, लुंगी या नेमत चढ़ाने की रस्म समाप्त एवं सदका (₹50/₹100) का प्रोत्साहन',
      categoryUr: 'میت پر دوپٹہ، لنگی یا نعمت چڑھانے کی رسم کا خاتمہ اور صدقہ (50/100 روپے) کی ترغیب',
      icon: <Gift className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-red-50 border-red-200 text-red-800 group-hover:bg-red-900 group-hover:text-red-100 group-hover:border-red-700',
      iconBg: 'bg-red-50 border-red-100 group-hover:bg-red-600 group-hover:border-red-500',
      gradientBorder: 'from-red-500 via-orange-500 to-red-500',
      textEn: 'The custom of placing Dupatta, Lungi (Nemat), or similar ceremonial offerings over the deceased is hereby abolished. Instead, individuals may contribute ₹50 or ₹100 as Sadaqah (charity) through the Imam of the local mosque or towards community welfare for the reward of the deceased.',
      textHi: 'मृतक पर दुपट्टा, लुंगी (नेमत) या इसी तरह के पारंपरिक चढ़ावे चढ़ाने की प्रथा को एतद्द्वारा समाप्त किया जाता है। इसके स्थान पर, लोग मृतक के सवाब (पुण्य) के लिए स्थानीय मस्जिद के इमाम के माध्यम से या समाज कल्याण के लिए सदका (दान) के रूप में ₹50 या ₹100 का योगदान कर सकते हैं।',
      textUr: 'میت پر دوپٹہ، لنگی (نعمت) یا اس جیسی رسمی اشیاء چڑھانے کی رسم کو اس کے ذریعے ختم کیا جاتا ہے۔ اس کے بجائے، لوگ میت کے ایصالِ ثواب کے لیے مقامی مسجد کے امام کے ذریعے یا برادری کی فلاح و بہبود کے لیے صدقہ (خیرات) کے طور پر 50 یا 100 روپے کا تعاون کر سکتے ہیں۔'
    },
    {
      id: 'res-10',
      number: 'Resolution No. 10',
      numberHi: 'प्रस्ताव संख्या 10',
      numberUr: 'قرارداد نمبر 10',
      categoryEn: 'Simplicity in Marriages of Educated & Employed Women',
      categoryHi: 'शिक्षित एवं कार्यरत युवतियों व महिलाओं के विवाह में सादगी एवं न्यूनतम खर्च',
      categoryUr: 'تعلیم یافتہ اور برسرِ روزگار لڑکیوں اور خواتین کی شادیوں میں سادگی اور کم خرچ',
      icon: <GraduationCap className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-emerald-50 border-emerald-200 text-emerald-800 group-hover:bg-emerald-900 group-hover:text-emerald-100 group-hover:border-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-500',
      gradientBorder: 'from-emerald-500 via-green-500 to-emerald-500',
      textEn: 'The marriages of educated girls and women who are employed should be conducted with simplicity and minimum expenditure.',
      textHi: 'शिक्षित युवतियों और रोजगार करने वाली महिलाओं के विवाह सादगी और न्यूनतम व्यय के साथ संपन्न किए जाने चाहिए।',
      textUr: 'تعلیم یافتہ لڑکیوں اور برسرِ روزگار خواتین کی شادیاں سادگی اور کم سے کم اخراجات کے ساتھ منعقد کی جانی چاہئیں۔'
    },
    {
      id: 'res-11',
      number: 'Resolution No. 11',
      numberHi: 'प्रस्ताव संख्या 11',
      numberUr: 'قرارداد نمبر 11',
      categoryEn: 'Registered Community Welfare Trust/NGO & ₹1,000 Household Contribution',
      categoryHi: 'पंजीकृत समुदाय कल्याण ट्रस्ट/NGO की स्थापना एवं प्रति परिवार ₹1,000 वार्षिक योगदान',
      categoryUr: 'رجسٹرڈ برادری فلاحی ٹرسٹ/این جی او کا قیام اور فی گھرانہ 1000 روپے کا تعاون',
      icon: <Building2 className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-amber-50 border-amber-200 text-amber-800 group-hover:bg-amber-900 group-hover:text-amber-100 group-hover:border-amber-700',
      iconBg: 'bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:border-amber-500',
      gradientBorder: 'from-amber-500 via-yellow-500 to-amber-500',
      textEn: 'A registered Community Welfare Trust/NGO shall be established for the welfare of poor, orphaned, and underprivileged children. Every household is encouraged to contribute ₹1,000 through online payment or community collection. The funds shall be utilized transparently for educational, social welfare, and other community development activities.',
      textHi: 'गरीब, अनाथ और वंचित बच्चों के कल्याण के लिए एक पंजीकृत समुदाय कल्याण ट्रस्ट/एनजीओ स्थापित किया जाएगा। प्रत्येक परिवार को ऑनलाइन भुगतान या सामुदायिक संग्रह के माध्यम से ₹1,000 का योगदान करने के लिए प्रोत्साहित किया जाता है। धनराशि का उपयोग शैक्षिक, सामाजिक कल्याण और अन्य सामुदायिक विकास गतिविधियों के लिए पारदर्शी रूप से किया जाएगा।',
      textUr: 'غریب، یتیم اور مستحق بچوں کی فلاح و بہبود کے لیے ایک رجسٹرڈ برادری فلاحی ٹرسٹ/این جی او قائم کیا جائے گا۔ ہر گھرانے کو آن لائن ادائیگی یا برادری کے جمع کرنے کے نظام کے ذریعے 1000 روپے کا تعاون کرنے کی ترغیب دی جاتی ہے۔ فنڈز کا استعمال تعلیمی، سماجی فلاح اور دیگر ترقیاتی کاموں کے لیے شفافیت کے ساتھ کیا جائے گا۔'
    },
    {
      id: 'res-12',
      number: 'Resolution No. 12',
      numberHi: 'प्रस्ताव संख्या 12',
      numberUr: 'قرارداد نمبر 12',
      categoryEn: 'Discontinuation of Post-Barat Entertainment Programs (Khodiya/Drama)',
      categoryHi: 'बरात जाने के बाद महिलाओं द्वारा खोड़िया एवं नाटक आदि मनोरंजन कार्यक्रमों पर प्रतिबंध',
      categoryUr: 'بارات روانہ ہونے کے بعد خواتین کی جانب سے کھوڑیا اور ڈرامہ وغیرہ تفریحی پروگراموں پر پابندی',
      icon: <Ban className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-violet-50 border-violet-200 text-violet-800 group-hover:bg-violet-900 group-hover:text-violet-100 group-hover:border-violet-700',
      iconBg: 'bg-violet-50 border-violet-100 group-hover:bg-violet-600 group-hover:border-violet-500',
      gradientBorder: 'from-violet-500 via-purple-500 to-violet-500',
      textEn: 'The practice of organizing Khodiya, drama, theatrical performances, or similar entertainment programs for women after the departure of the wedding procession (Barat) is hereby discontinued.',
      textHi: 'बरात जाने के बाद महिलाओं द्वारा खोड़िया, नाटक, रंगमंचीय कार्यक्रम या इसी तरह के मनोरंजन कार्यक्रम आयोजित करने की प्रथा को एतद्द्वारा समाप्त किया जाता है।',
      textUr: 'بارات روانہ ہونے کے بعد خواتین کی جانب سے کھوڑیا، ڈرامہ، تھیٹر یا اس جیسے دیگر تفریحی پروگرام منعقد کرنے کی رسم کو اس کے ذریعے ختم کیا جاتا ہے۔'
    },
    {
      id: 'res-13',
      number: 'Resolution No. 13',
      numberHi: 'प्रस्ताव संख्या 13',
      numberUr: 'قرارداد نمبر 13',
      categoryEn: 'No Separate Feasts in Community Marriages & Optional Simple Walima',
      categoryHi: 'सम्मेलन विवाह में घर पर अलग दावत पर रोक एवं वलीमा की सादगी व स्वेच्छा',
      categoryUr: 'اجتماعی شادیوں میں گھر پر الگ دعوت پر پابندی اور ولیمہ کا اختیاری و سادہ نظام',
      icon: <Utensils className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-orange-50 border-orange-200 text-orange-800 group-hover:bg-orange-900 group-hover:text-orange-100 group-hover:border-orange-700',
      iconBg: 'bg-orange-50 border-orange-100 group-hover:bg-orange-600 group-hover:border-orange-500',
      gradientBorder: 'from-orange-500 via-amber-500 to-orange-500',
      textEn: 'In community or conference marriages, no separate Biryani feast or meal shall be organized at home. The groom’s family may arrange a simple Walima meal according to their wishes and financial capacity; however, it shall not be considered compulsory.',
      textHi: 'सामूहिक या सम्मेलन विवाहों में, घर पर अलग से बिरयानी दावत या भोज आयोजित नहीं किया जाएगा। दूल्हे का परिवार अपनी इच्छा और वित्तीय क्षमता के अनुसार एक साधारण वलीमा भोज की व्यवस्था कर सकता है; हालाँकि, इसे अनिवार्य नहीं माना जाएगा।',
      textUr: 'اجتماعی یا کانفرنس شادیوں میں گھر پر الگ سے بریانی کی دعوت یا کھانا منعقد نہیں کیا جائے گا۔ دولہا کا خاندان اپنی مرضی اور مالی گنجائش کے مطابق سادگی کے ساتھ ولیمہ کا انتظام کر سکتا ہے؛ تاہم اسے لازمی نہیں سمجھا جائے گا۔'
    },
    {
      id: 'res-14',
      number: 'Resolution No. 14',
      numberHi: 'प्रस्ताव संख्या 14',
      numberUr: 'قرارداد نمبر 14',
      categoryEn: 'Multi-Level Monitoring Committees for Effective Implementation',
      categoryHi: 'प्रभावी कार्यान्वयन हेतु जिला, तहसील, ब्लॉक व ग्राम स्तर पर निगरानी समितियां',
      categoryUr: 'مؤثر نفاذ کے لیے ضلع، تحصیل، بلاک اور گاؤں کی سطح پر نگرانی کمیٹیاں',
      icon: <Network className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      badgeColor: 'bg-blue-50 border-blue-200 text-blue-800 group-hover:bg-blue-900 group-hover:text-blue-100 group-hover:border-blue-700',
      iconBg: 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-500',
      gradientBorder: 'from-blue-500 via-indigo-500 to-blue-500',
      textEn: 'Committees shall be constituted at the district, tehsil, block, town, and village levels to oversee the implementation of these social reform resolutions. These committees shall promote awareness, guide community members, and ensure the effective implementation of the resolutions wherever necessary.',
      textHi: 'इन समाज सुधार संकल्पों के कार्यान्वयन की निगरानी के लिए जिला, तहसील, ब्लॉक, नगर और ग्राम स्तर पर समितियों का गठन किया जाएगा। ये समितियां जागरूकता को बढ़ावा देंगी, समाज के लोगों का मार्गदर्शन करेंगी और जहां भी आवश्यक हो, संकल्पों का प्रभावी कार्यान्वयन सुनिश्चित करेंगी।',
      textUr: 'ان سماجی اصلاحاتی قراردادوں کے نفاذ کی نگرانی کے لیے ضلع، تحصیل، بلاک، قصبہ اور گاؤں کی سطح پر کمیٹیاں تشکیل دی جائیں گی۔ یہ کمیٹیاں بیداری کو فروغ دیں گی، برادری کے افراد کی رہنمائی کریں گی اور جہاں بھی ضروری ہو قراردادوں کا مؤثر نفاذ یقینی بنائیں گی۔'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-emerald-50/20 to-white rounded-2xl p-6 sm:p-10 border border-emerald-200/80 shadow-xl space-y-8 animate-fadeIn relative overflow-hidden" dir={isUrdu ? 'rtl' : 'ltr'} id="community_social_reform_resolutions_2025">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#004B23]/10 to-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B23] text-[#FFD54A] text-xs sm:text-sm font-mono font-black uppercase tracking-wider shadow-md">
          <Sparkle className="h-4 w-4 animate-spin-slow text-[#FFD54A]" />
          <span>{getText('Community Social Reform Resolutions – 2025', 'सामुदायिक समाज सुधार संकल्प – 2025', 'سماجی اصلاحاتی قراردادیں – 2025')}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#0B132B] tracking-tight">
          {getText(
            'Approved by the Grand Community Council (Joura Mahapanchayat)',
            'महासभा सर्वसम्मति द्वारा स्वीकृत (जौरा महापंचायत)',
            'گرینڈ کمیونٹی کونسل (جورا مہاپنچایت) کے ذریعہ منظور کردہ'
          )}
        </h3>

        <div className="flex items-center justify-center gap-3 pt-1 text-xs sm:text-sm font-mono font-semibold text-emerald-800">
          <span className="flex items-center gap-1.5 bg-emerald-100/80 px-3 py-1 rounded-lg border border-emerald-300/50">
            <Calendar className="h-4 w-4 text-[#004B23]" />
            <span>{getText('Passed: 27 July 2025', 'पारित: 27 जुलाई 2025', 'منظور شدہ: 27 جولائی 2025')}</span>
          </span>
          <span className="flex items-center gap-1.5 bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300/50 text-amber-900">
            <MapPin className="h-4 w-4 text-amber-700" />
            <span>{getText('Joura, Morena (M.P.)', 'जौरा, मुरैना (म.प्र.)', 'جورا، مورینا (ایم۔پی۔)')}</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5 bg-blue-100/80 px-3 py-1 rounded-lg border border-blue-300/50 text-blue-900">
            <BookmarkCheck className="h-4 w-4 text-blue-700" />
            <span>{getText('Unanimous Community Mandate', 'सर्वसम्मति से लागू', 'متفقہ برادری کا فیصلہ')}</span>
          </span>
        </div>

        <div className="h-1.5 w-24 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23] mx-auto rounded-full mt-2"></div>
      </div>

      {/* Resolutions Cards Grid (2x2 with rich hover & shimmer effects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-2">
        {resolutionsData.map((res) => (
          <div
            key={res.id}
            className={`group relative rounded-2xl p-[2px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 hover:${res.gradientBorder} transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2 cursor-default overflow-hidden`}
          >
            {/* Shimmer overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>

            <div className="bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-50/90 rounded-[15px] p-6 sm:p-7 h-full flex flex-col justify-between space-y-5 transition-colors duration-300 relative z-10">
              {/* Card Top: Number, Badge, and Icon */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:rotate-3 ${res.iconBg}`}>
                      {res.icon}
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-mono font-black text-[#004B23] group-hover:text-emerald-700 tracking-tight block">
                        {getText(res.number, res.numberHi, res.numberUr)}
                      </span>
                      <span className="text-[11px] font-mono text-gray-500 font-semibold uppercase tracking-wider block">
                        {getText('Official Resolution Mandate', 'आधिकारिक संकल्प नियम', 'سرکاری قرارداد کا ضابطہ')}
                      </span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wide border transition-all duration-300 shrink-0 ${res.badgeColor}`}>
                    {getText('Adopted ✓', 'स्वीकृत ✓', 'منظور شدہ ✓')}
                  </span>
                </div>

                {/* Category Header */}
                <h4 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition-colors leading-snug border-b border-gray-100 pb-3">
                  {getText(res.categoryEn, res.categoryHi, res.categoryUr)}
                </h4>

                {/* Resolution Body Text */}
                <div className="bg-gray-50/80 group-hover:bg-emerald-50/40 p-4 rounded-xl border border-gray-200/70 group-hover:border-emerald-200/80 transition-colors duration-300">
                  <p className="text-xs sm:text-sm text-gray-800 group-hover:text-gray-900 leading-relaxed font-sans font-medium text-justify">
                    "{getText(res.textEn, res.textHi, res.textUr)}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Status & Verification */}
              <div className="pt-3 border-t border-gray-100/80 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-emerald-800 transition-colors">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>{getText('Unanimous Mahapanchayat Decision', 'महापंचायत सर्वसम्मति निर्णय', 'مہاپنچایت کا متفقہ فیصلہ')}</span>
                </span>
                <span className="text-[10px] bg-gray-100 group-hover:bg-[#FFD54A] group-hover:text-[#004B23] px-2 py-0.5 rounded font-extrabold transition-colors">
                  {getText('2025 MANDATE', '2025 नियमावली', '2025 ضابطہ')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary Banner inside Section */}
      <div className="bg-gradient-to-r from-[#004B23] via-[#00381A] to-[#004B23] text-white p-5 sm:p-6 rounded-2xl border border-emerald-600 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#FFD54A] text-[#004B23] flex items-center justify-center shrink-0 shadow-md font-black">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <h5 className="text-base sm:text-lg font-serif font-extrabold text-[#FFD54A]">
              {getText('Commitment to Progressive Social Reform', 'प्रगतिशील समाज सुधार के प्रति अटूट प्रतिबद्धता', 'روشن خیال سماجی اصلاحات کا غیر متزلزل عزم')}
            </h5>
            <p className="text-xs sm:text-sm text-emerald-100 leading-normal max-w-2xl">
              {getText(
                'These resolutions represent the collective wisdom and determination of the Grand Community Council to eradicate social vices, promote simplicity in weddings, uphold women’s rights in Shariah, and advance educational excellence.',
                'ये संकल्प सामाजिक बुराइयों को समाप्त करने, विवाह में सादगी को बढ़ावा देने, शरीयत में महिलाओं के अधिकारों की रक्षा करने और शैक्षिक उत्कृष्टता को आगे बढ़ाने के लिए महासभा के सामूहिक संकल्प का प्रतिनिधित्व करते हैं।',
                'یہ قراردادیں سماجی برائیوں کے خاتمے، شادیوں میں سادگی کو فروغ دینے، شریعت میں خواتین کے حقوق کے تحفظ، اور تعلیمی عروج کے لیے گرینڈ کمیونٹی کونسل کے اجتماعی عزم کی نمائندگی کرتی ہیں۔'
              )}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-mono font-extrabold text-[#FFD54A]">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>{getText('Enforced by Community Trust', 'महासभा द्वारा लागू एवं सुरक्षित', 'ٹرسٹ کے ذریعہ نافذ اور محفوظ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
