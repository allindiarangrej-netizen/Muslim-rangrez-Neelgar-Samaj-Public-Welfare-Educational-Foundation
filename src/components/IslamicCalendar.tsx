import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, Moon, Sun, Clock, MapPin, Search, Filter, Bell, BellOff, 
  Info, ChevronLeft, ChevronRight, CheckCircle, Sparkles, AlertTriangle, 
  ArrowUpRight, Bookmark, Compass, Heart, Share2, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

// Native Gregorian-to-Hijri converter using Intl or robust tabular fallback
export function getHijriFromGregorian(date: Date, adjustmentDays: number = 0) {
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + adjustmentDays);
  
  try {
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    const parts = formatter.formatToParts(adjustedDate);
    let day = 1;
    let month = 1;
    let year = 1447;
    parts.forEach(part => {
      if (part.type === 'day') day = parseInt(part.value, 10);
      if (part.type === 'month') month = parseInt(part.value, 10);
      if (part.type === 'year') year = parseInt(part.value, 10);
    });
    return { day, month, year };
  } catch (e) {
    // Tabular Islamic Calendar fallback (standard 30-year cycle algorithm)
    const jd = getJulianDay(adjustedDate);
    const l = Math.floor(jd - 1948439.5 + 0.5);
    const n = Math.floor((l - 1) / 10631);
    const lCurrentCycle = l - 10631 * n;
    const j = Math.floor((lCurrentCycle - 1) / 354);
    
    let year = 30 * n + j + 1;
    let day = lCurrentCycle - 354 * j - Math.floor((30 * j + 24) / 11) + 1;
    
    const monthLengths = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];
    const isLeap = (y: number) => {
      const cycleYear = y % 30;
      return [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29].includes(cycleYear);
    };
    
    let daysInYear = isLeap(year) ? 355 : 354;
    if (day > daysInYear) {
      day -= daysInYear;
      year++;
    }
    if (day <= 0) {
      year--;
      const prevLeap = isLeap(year);
      day += prevLeap ? 355 : 354;
    }
    
    let accumulatedDays = 0;
    let month = 1;
    for (let m = 0; m < 12; m++) {
      let len = monthLengths[m];
      if (m === 11 && isLeap(year)) len = 30;
      if (day <= accumulatedDays + len) {
        month = m + 1;
        day = day - accumulatedDays;
        break;
      }
      accumulatedDays += len;
    }
    
    return { day, month, year };
  }
}

function getJulianDay(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;
  
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

// Convert Hijri back to approximate Gregorian for the calendar builder
export function getGregorianFromHijri(hYear: number, hMonth: number, hDay: number, adjustmentDays: number = 0): Date {
  // Approximate Hijri epoch in Julian milliseconds
  const daysSinceEpoch = Math.floor((hYear - 1) * 354.367) + (hMonth - 1) * 29.5 + hDay;
  const approxGregorianTime = new Date(622, 6, 16).getTime() + daysSinceEpoch * 24 * 60 * 60 * 1000;
  
  const searchCenter = new Date(approxGregorianTime);
  const searchStart = new Date(searchCenter);
  searchStart.setDate(searchStart.getDate() - 40);
  
  // Linear scan of 80 days to find the exact match from our primary algorithm
  for (let i = 0; i < 80; i++) {
    const testDate = new Date(searchStart);
    testDate.setDate(testDate.getDate() + i);
    const h = getHijriFromGregorian(testDate, adjustmentDays);
    if (h.year === hYear && h.month === hMonth && h.day === hDay) {
      return testDate;
    }
  }
  
  // Wider fallback scanner
  const wideStart = new Date(searchCenter);
  wideStart.setDate(wideStart.getDate() - 180);
  for (let i = 0; i < 360; i++) {
    const testDate = new Date(wideStart);
    testDate.setDate(testDate.getDate() + i);
    const h = getHijriFromGregorian(testDate, adjustmentDays);
    if (h.year === hYear && h.month === hMonth && h.day === hDay) {
      return testDate;
    }
  }
  
  return searchCenter;
}

// Check days in a Hijri Month (29 or 30)
function getDaysInHijriMonth(hYear: number, hMonth: number, adjustmentDays: number = 0): number {
  const gDate30 = getGregorianFromHijri(hYear, hMonth, 30, adjustmentDays);
  const check30 = getHijriFromGregorian(gDate30, adjustmentDays);
  if (check30.year === hYear && check30.month === hMonth && check30.day === 30) {
    return 30;
  }
  return 29;
}

// Translation dictionaries
const TRANSLATIONS: Record<string, Record<Language, string>> = {
  title: {
    en: 'Islamic (Hijri) Calendar',
    hi: 'इस्लामिक (हिजरी) कैलेंडर',
    ur: 'اسلامی (ہجری) کیلنڈر'
  },
  subtitle: {
    en: 'Stay connected with the Islamic calendar, important Islamic months, festivals, fasting days, and significant religious events throughout the year.',
    hi: 'साल भर के महत्वपूर्ण इस्लामिक महीनों, त्योहारों, रोज़े के दिनों और महत्वपूर्ण धार्मिक आयोजनों व हिजरी कैलेंडर के साथ जुड़े रहें।',
    ur: 'سال بھر اہم اسلامی مہینوں، تہواروں، روزوں کے ایام اور اہم مذہبی تقریبات کے ساتھ مربوط رہیں۔'
  },
  liveDate: {
    en: 'Live Hijri Date',
    hi: 'लाइव हिजरी तारीख़',
    ur: 'لائیو ہجری تاریخ'
  },
  gregorianDate: {
    en: 'Gregorian Date',
    hi: 'ग्रेगोरियन तारीख़ (अंग्रेजी कैलेंडर)',
    ur: 'عیسوی تاریخ'
  },
  timeZone: {
    en: 'Time Zone',
    hi: 'समय क्षेत्र (Time Zone)',
    ur: 'ٹائم زون'
  },
  monthlyCalendar: {
    en: 'Monthly Hijri Calendar Grid',
    hi: 'मासिक हिजरी कैलेंडर ग्रिड',
    ur: 'ماہانہ ہجری کیلنڈر'
  },
  adjustSighting: {
    en: 'Moonsighting Adjustment (+/- Days)',
    hi: 'चाँद देखने के अनुसार तारीख़ एडजस्ट करें (+/- दिन)',
    ur: 'رؤیت ہلال مطابقت (دن ایڈجسٹ کریں)'
  },
  adjustmentNote: {
    en: 'Adjust by +/- 1 or 2 days to align with local moon sighting announcements.',
    hi: 'स्थानीय चाँद दिखने की घोषणा के साथ तालमेल बिठाने के लिए +/- 1 या 2 दिन का बदलाव करें।',
    ur: 'مقامی چاند نظر آنے کے اعلانات کے ساتھ مطابقت کے لیے +/- 1 یا 2 دن ایڈجسٹ کریں۔'
  },
  today: {
    en: 'Today',
    hi: 'आज',
    ur: 'آج'
  },
  importantMonths: {
    en: 'Directory of 12 Islamic Months',
    hi: '१२ इस्लामिक महीनों की निर्देशिका',
    ur: '۱۲ اسلامی مہینوں کی تفصیل'
  },
  monthsDesc: {
    en: 'Learn about the spiritual significance, historical events, and recommended acts of worship for each Hijri month.',
    hi: 'प्रत्येक हिजरी महीने के आध्यात्मिक महत्व, ऐतिहासिक घटनाओं और अनुशंसित इबादतों (पूजा-अर्चना) के बारे में जानें।',
    ur: 'ہر ہجری مہینے کے روحانی فضائل، تاریخی واقعات اور مستحب اعمال کے بارے میں جانیے۔'
  },
  annualEvents: {
    en: 'Annual Islamic Festivals & Events',
    hi: 'सालाना इस्लामिक त्योहार और कार्यक्रम',
    ur: 'سالانہ اسلامی تہوار اور اہم تاریخیں'
  },
  disclaimer: {
    en: 'Islamic dates are calculated according to the Hijri calendar. Actual dates of Ramadan, Eid, Hajj, and other observances may vary depending on local moon sightings and the decisions of the relevant religious authorities.',
    hi: 'इस्लामिक तारीखों की गणना हिजरी कैलेंडर के अनुसार की जाती है। रमज़ान, ईद, हज और अन्य त्योहारों की वास्तविक तारीखें स्थानीय चाँद दिखने और संबंधित धार्मिक अधिकारियों के निर्णयों के आधार पर भिन्न हो सकती हैं।',
    ur: 'اسلامی تواریخ کا حساب ہجری کیلنڈر کے مطابق لگایا جاتا ہے۔ رمضان، عید، حج اور دیگر تہواروں کی حقیقی تاریخیں مقامی چاند نظر آنے اور متعلقہ شرعی کمیٹی کے فیصلوں کے مطابق تبدیل ہو سکتی ہیں۔'
  },
  upcomingEvent: {
    en: 'Upcoming Occasion',
    hi: 'आगामी धार्मिक आयोजन',
    ur: 'اگلا اہم موقع'
  },
  countdown: {
    en: 'Countdown Tracker',
    hi: 'उल्टी गिनती (काउंटडाउन)',
    ur: 'کاؤنٹ ڈاؤن ٹریکر'
  },
  reminderCenter: {
    en: 'Reminders & Notifications Hub',
    hi: 'स्मरण-पत्र और सूचना केंद्र (Notifications)',
    ur: 'یاد دہانی اور الرٹ سینٹر'
  },
  notificationDesc: {
    en: 'Enable browser-based notifications or secure mock email alerts for major sacred milestones.',
    hi: 'पवित्र धार्मिक अवसरों के लिए ब्राउज़र-आधारित सूचनाएं या मॉक ईमेल अलर्ट सक्षम करें।',
    ur: 'مقدس تہواروں کی بروقت اطلاعات کے لیے الرٹس چالو کریں۔'
  },
  subscribeSuccess: {
    en: 'Successfully registered for alerts! Your preferences have been saved locally.',
    hi: 'अलर्ट के लिए सफलतापूर्वक पंजीकरण किया गया! आपकी प्राथमिकताएं सहेज ली गई हैं।',
    ur: 'الرٹس کامیابی کے ساتھ چالو ہو گئے! آپ کی ترجیحات محفوظ کر لی گئی ہیں۔'
  },
  jumuahAlert: {
    en: 'Friday (Jumu’ah) Reminder: Reciting Surah Al-Kahf is highly recommended today.',
    hi: 'जुमा (शुक्रवार) मुबारक: आज सूरह अल-कहफ़ की तिलावत करना बेहद फ़ज़ीलत वाला काम है।',
    ur: 'جمعہ مبارک: آج سورہ الکہف کی تلاوت بے حد بابرکت اور مستحب ہے۔'
  }
};

const WEEKDAYS = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  hi: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  ur: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ']
};

interface MonthInfo {
  id: number;
  name: { en: string; hi: string; ur: string };
  arabic: string;
  isSacred: boolean;
  intro: { en: string; hi: string; ur: string };
  importance: { en: string; hi: string; ur: string };
  worship: { en: string; hi: string; ur: string };
  events: { en: string; hi: string; ur: string };
}

const ISLAMIC_MONTHS_DATA: MonthInfo[] = [
  {
    id: 1,
    name: { en: 'Muharram', hi: 'मुहर्रम', ur: 'محرم الحرام' },
    arabic: 'المحرّم',
    isSacred: true,
    intro: {
      en: 'The first month of the Islamic calendar and one of the four sacred months ordained by Allah.',
      hi: 'इस्लामी साल का पहला महीना और अल्लाह द्वारा तय किए गए चार पवित्र (हरम) महीनों में से एक।',
      ur: 'اسلامی تقویم کا پہلا مہینہ اور اللہ تعالی کے نزدیک حرمت والے چار مہینوں میں سے ایک۔'
    },
    importance: {
      en: 'Great historical significance. It contains the Day of Ashura, commemorating the liberation of Prophet Musa (Moses) and the martyrdom of Imam Hussain (R.A.) at Karbala.',
      hi: 'महान ऐतिहासिक महत्व। इसमें आशूरा का दिन शामिल है, जो हज़रत मूसा की मुक्ति और कर्बला में इमाम हुसैन (र.अ.) की शहादत की याद दिलाता है।',
      ur: 'عظیم تاریخی اہمیت۔ اس میں یوم عاشورہ ہے، جو فرعون سے حضرت موسیٰؑ کی نجات اور کربلا میں نواسہ رسول حضرت امام حسینؑ کی عظیم شہادت کی یادگار ہے۔'
    },
    worship: {
      en: 'Fasting on the 9th and 10th (or 10th and 11th) of Muharram is highly recommended and expiates the sins of the preceding year.',
      hi: 'मुहर्रम की ९वीं और १०वीं (या १०वीं और ११वीं) तारीख़ को रोज़ा रखना सुन्नत है, जिससे पिछले एक साल के गुनाह माफ़ होते हैं।',
      ur: 'محرم الحرام کی 9 اور 10 (یا 10 اور 11) کا روزہ رکھنا مسنون اور پچھلے ایک سال کے گناہوں کا کفارہ ہے۔'
    },
    events: {
      en: 'Islamic New Year (1st), Day of Ashura (10th), Martyrdom of Hazrat Umar (R.A.) (1st).',
      hi: 'इस्लामिक नया साल (१), आशूरा का दिन (१०), हज़रत उमर (र.अ.) की शहादत (१)।',
      ur: 'اسلامی نیا سال (1)، یوم عاشورہ (10)، شہادت حضرت عمر فاروقؓ (1)۔'
    }
  },
  {
    id: 2,
    name: { en: 'Safar', hi: 'सफर', ur: 'صفر المظفر' },
    arabic: 'صفر',
    isSacred: false,
    intro: {
      en: 'The second month of the Islamic year. Historically, it is a month of preparation and journey.',
      hi: 'इस्लामी साल का दूसरा महीना। ऐतिहासिक रूप से, यह तैयारी और यात्रा का महीना माना जाता है।',
      ur: 'اسلامی سال کا دوسرا مہینہ۔ تاریخی طور پر یہ تیاری اور ہجرت کے آغاز کا مہینہ ہے۔'
    },
    importance: {
      en: 'Dispels pre-Islamic superstitions. Prophet Muhammad (PBUH) emphasized that Safar carries no ill-omens.',
      hi: 'इस्लाम से पहले के अंधविश्वासों को खारिज करता है। पैगंबर मुहम्मद (स.अ.व.) ने ज़ोर देकर कहा कि इस महीने में कोई अमंगल या मनहूसियत नहीं है।',
      ur: 'زمانہ جاہلیت کی توہم پرستی کا خاتمہ کرتا ہے۔ رسول اللہ صلی اللہ علیہ وسلم نے واضح فرمایا کہ صفر کا مہینہ منحوس نہیں ہے۔'
    },
    worship: {
      en: 'Engage in continuous daily supplications, optional (Nafl) prayers, and increase charity.',
      hi: 'दैनिक दुआएं करें, नफ़्ल नमाज़ें पढ़ें और दान-पुण्य (सदक़ा) में वृद्धि करें।',
      ur: 'روزمرہ کے ذکر و اذکار، نفل نمازوں اور کثرت سے صدقہ و خیرات کا اہتمام کریں۔'
    },
    events: {
      en: 'Migration journey of the Holy Prophet (PBUH) from Makkah to Madinah initiated in Cave Thawr.',
      hi: 'मक्का से मदीना के लिए पैगंबर साहब (स.अ.व.) की हिजरत (प्रस्थान) की शुरुआत ग़ार-ए-सौर से हुई।',
      ur: 'رسول اللہ ﷺ کی مکہ سے مدینہ ہجرت کا آغاز اور غار ثور میں قیام۔'
    }
  },
  {
    id: 3,
    name: { en: 'Rabi’ al-Awwal', hi: 'रबी अल-अव्वल', ur: 'ربیع الاول' },
    arabic: 'ربيع الأوّل',
    isSacred: false,
    intro: {
      en: 'The third month of the Islamic calendar, highly revered globally.',
      hi: 'इस्लामी कैलेंडर का तीसरा महीना, जिसे दुनिया भर में बहुत आदर के साथ देखा जाता है।',
      ur: 'اسلامی تقویم کا تیسرا مہینہ، جو پوری مسلم امہ کے لیے انتہائی بابرکت اور پسندیدہ ہے۔'
    },
    importance: {
      en: 'The blessed month in which the Prophet Muhammad (PBUH), the mercy to all creations, was born.',
      hi: 'वह धन्य महीना जिसमें पूरी मानवता के लिए रहमत बनकर आए पैगंबर मुहम्मद (स.अ.व.) का जन्म हुआ था।',
      ur: 'وہ مبارک مہینہ جس میں کائنات کے محسن، رحمت اللعالمین حضرت محمد مصطفیٰ ﷺ کی ولادت باسعادت ہوئی۔'
    },
    worship: {
      en: 'Increase sending Durood (salutations) upon the Prophet, study his life (Seerah), and host educational lectures.',
      hi: 'पैगंबर साहब पर कसरत से दरूद शरीफ़ भेजें, उनके जीवन चरित्र (सीरत) का अध्ययन करें और तक़रीरें आयोजित करें।',
      ur: 'حضور ﷺ پر کثرت سے درود و سلام بھیجیں، سیرت طیبہ کا مطالعہ کریں اور تعلیمی سیمینار منعقد کریں۔'
    },
    events: {
      en: 'Birth of Prophet Muhammad (PBUH) on the 12th of Rabi’ al-Awwal.',
      hi: '१२ रबी अल-अव्वल को पैगंबर मुहम्मद (स.अ.व.) की विलादत (जन्म)।',
      ur: '12 ربیع الاول کو رسول اکرم ﷺ کی ولادت باسعادت (عید میلاد النبی)۔'
    }
  },
  {
    id: 4,
    name: { en: 'Rabi’ al-Thani', hi: 'रबी अल-थानी', ur: 'ربیع الثانی' },
    arabic: 'ربيع الثاني',
    isSacred: false,
    intro: {
      en: 'The fourth month of the Islamic calendar, also known as Rabi’ al-Akhir.',
      hi: 'इस्लामी साल का चौथा महीना, जिसे रबी अल-आख़िर भी कहा जाता है।',
      ur: 'اسلامی تقویم کا چوتھا مہینہ، جسے ربیع الآخر بھی کہا جاتا ہے۔'
    },
    importance: {
      en: 'An opportunity to reflect on the teachings of the early Islamic scholars and companions.',
      hi: 'शुरुआती इस्लामी विद्वानों और पैगंबर के साथियों (सहाबा) की शिक्षाओं पर चिंतन करने का अवसर।',
      ur: 'ابتدائی دور کے صحابہ کرام اور جلیل القدر ائمہ کے نقوش زندگی کی پیروی کا مہینہ۔'
    },
    worship: {
      en: 'Reciting the Holy Quran regularly and feeding the poor are highly encouraged acts.',
      hi: 'नियमित रूप से पवित्र क़ुरआन की तिलावत करना और गरीबों को खाना खिलाना अत्यधिक प्रशंसनीय कार्य हैं।',
      ur: 'قرآن کریم کی باقاعدہ تلاوت اور غرباء و مساکین کو کھانا کھلانے کا خصوصی اہتمام۔'
    },
    events: {
      en: 'Establishment of early compilation structures of Hadith and theological schools.',
      hi: 'हदीस और इस्लामी ज्ञानपीठों के शुरुआती संकलन की नींव रखी गई।',
      ur: 'احادیث مبارکہ کی تدوین اور علم فقہ کے ابتدائی کاموں کا تسلسل۔'
    }
  },
  {
    id: 5,
    name: { en: 'Jumada al-Ula', hi: 'जुमादा अल-उला', ur: 'جمادی الاولیٰ' },
    arabic: 'جمادى الأولى',
    isSacred: false,
    intro: {
      en: 'The fifth month of the lunar calendar, representing stability and reflection.',
      hi: 'चाँद के कैलेंडर का पांचवां महीना, जो स्थिरता और आत्म-मंथन का प्रतीक है।',
      ur: 'قمری تقویم کا پانچواں مہینہ، جو ایمان کی پختگی اور خود احتسابی کا پیغام دیتا ہے۔'
    },
    importance: {
      en: 'Contains important battles and treaties that helped stabilize the early Muslim state.',
      hi: 'इसमें महत्वपूर्ण युद्ध और संधियाँ हुईं जिन्होंने शुरुआती मुस्लिम समुदाय को मजबूती दी।',
      ur: 'اس میں اہم غزوات اور معاہدے ہوئے جنہوں نے اسلامی ریاست کو سیاسی استحکام بخشا۔'
    },
    worship: {
      en: 'Perform optional night prayers (Tahajjud) and maintain strong family ties (Silat al-Rahm).',
      hi: 'नफ़्ल रात की नमाज़ (तहज्जुद) पढ़ें और रिश्तेदारों के साथ अच्छे संबंध (सिला-ए-रहमी) बनाए रखें।',
      ur: 'تہجد کی نمازوں کا التزام کریں اور رشتہ داروں کے ساتھ حسن سلوک (صلہ رحمی) کو یقینی بنائیں۔'
    },
    events: {
      en: 'The Battle of Mu’tah in Jordan took place under the leadership of Hazrat Khalid bin Walid (R.A.).',
      hi: 'हज़रत ख़ालिद बिन वलीद (र.अ.) के नेतृत्व में जॉर्डन में मूता का प्रसिद्ध युद्ध हुआ।',
      ur: 'حضرت خالد بن ولیدؓ کی قیادت میں غزوہ موتہ پیش آیا۔'
    }
  },
  {
    id: 6,
    name: { en: 'Jumada al-Akhirah', hi: 'जुमादा अल-आखिरा', ur: 'جمادی الاخریٰ' },
    arabic: 'جمادى الآخرة',
    isSacred: false,
    intro: {
      en: 'The sixth month of the Islamic year, leading up to the highly spiritual months of Rajab and Shaban.',
      hi: 'इस्लामी साल का छठा महीना, जो रजब और शाबान के आध्यात्मिक महीनों का मार्ग प्रशस्त करता है।',
      ur: 'اسلامی سال کا چھٹا مہینہ، جو رجب اور شعبان کے پرنور مہینوں کی آمد کا پیش خیمہ ہے۔'
    },
    importance: {
      en: 'Associated with the passing of key figures of early Islam, fostering deep legacy appreciation.',
      hi: 'शुरुआती इस्लाम की महान शख्सियतों के रुख़सती काल से जुड़ा हुआ, जो उनके योगदान की याद दिलाता है।',
      ur: 'عہد رسالت کی عظیم شخصیات کی یادگاروں اور ان کی خدمات کے اعتراف کا مہینہ۔'
    },
    worship: {
      en: 'Keep optional Monday and Thursday fasts and seek forgiveness (Istighfar) intensely.',
      hi: 'सोमवार और गुरुवार के नफ़्ल रोज़े रखें और सच्चे दिल से तौबा व इस्तिग़फ़ार करें।',
      ur: 'پیر اور جمعرات کے نفلی روزوں کا اہتمام کریں اور کثرت سے استغفار کریں۔'
    },
    events: {
      en: 'The passing of Hazrat Abu Bakr al-Siddiq (R.A.), the first Caliph of Islam.',
      hi: 'इस्लाम के पहले ख़लीफ़ा हज़रत अबू बक्र सिद्दीक़ (र.अ.) का विसाल (देहावसान)।',
      ur: 'یارِ غار رسول، خلیفہ اول حضرت ابو بکر صدیقؓ کا یوم وفات۔'
    }
  },
  {
    id: 7,
    name: { en: 'Rajab', hi: 'रजब', ur: 'رجب المرجب' },
    arabic: 'رجب',
    isSacred: true,
    intro: {
      en: 'The seventh month and one of the four sacred months. It is known as the month of sowing seeds of good deeds.',
      hi: 'सातवां महीना और चार पवित्र महीनों में से एक। इसे नेकियों के बीज बोने का महीना माना जाता है।',
      ur: 'ساتواں قمری مہینہ اور چار حرمت والے مہینوں میں سے ایک۔ اسے نیکیوں کے بیج بونے کا مہینہ کہا جاتا ہے۔'
    },
    importance: {
      en: 'Highly sacred. Allah established prayer (Salah) as a direct gift during the Night of Journey.',
      hi: 'बेहद मुक़द्दस। मेराज की रात इसी महीने में हुई, जिसमें उम्मत को पांच वक़्त की नमाज़ का उपहार मिला।',
      ur: 'نہایت محترم مہینہ۔ اسی مہینے میں سفرِ معراج پیش آیا جس میں پانچ وقت کی نماز کا تحفہ عطا ہوا۔'
    },
    worship: {
      en: 'Increase prayers, fast optionally, and prepare mentally for the arrival of Ramadan.',
      hi: 'इबादत बढ़ाएं, नफ़्ल रोज़े रखें और रमज़ान के पवित्र महीने के लिए मानसिक तैयारी शुरू करें।',
      ur: 'عبادات میں اضافہ کریں، نفلی روزے رکھیں اور رمضان المبارک کی آمد کی تیاری شروع کریں۔'
    },
    events: {
      en: 'Al-Isra’ wal-Mi’raj (27th Rajab) - Night Journey and Ascension of the Holy Prophet.',
      hi: 'इसरा और मेराज (२७ रजब) - नबी करीम (स.अ.व.) का रात का सफर और आसमानों की सैर।',
      ur: 'واقعہ معراج النبی ﷺ (27 رجب)۔'
    }
  },
  {
    id: 8,
    name: { en: 'Sha’ban', hi: 'शाबान', ur: 'شعبان المعظم' },
    arabic: 'شعبان',
    isSacred: false,
    intro: {
      en: 'The eighth month of the Islamic year, full of blessings and spiritual training.',
      hi: 'इस्लामी साल का आठवां महीना, जो बरकतों और आध्यात्मिक ट्रेनिंग से भरा है।',
      ur: 'اسلامی سال کا آٹھواں مہینہ، جو برکتوں اور رمضان المبارک کے استقبال کا خاص وقت ہے۔'
    },
    importance: {
      en: 'The actions of servants are raised to the Lord of the worlds in this month. Changing of the Qibla occurred here.',
      hi: 'इस महीने में बंदों के कर्म अल्लाह के दरबार में पेश किए जाते हैं। इसी महीने में क़िबला बदलने का हुक्म आया था।',
      ur: 'اس مہینے میں بندوں کے اعمال رب العالمین کے حضور پیش کیے جاتے ہیں۔ تحویلِ قبلہ کا واقعہ بھی اسی میں ہوا۔'
    },
    worship: {
      en: 'Prophet Muhammad (PBUH) used to fast most of this month. Shab-e-Barat (15th) is spent in night-long worship.',
      hi: 'पैगंबर मुहम्मद (स.अ.व.) इस महीने में सबसे ज़्यादा रोज़े रखते थे। १५वीं रात (शब-ए-बारात) इबादत में गुज़ारें।',
      ur: 'رسول اللہ ﷺ اس مہینے میں سب سے زیادہ روزے رکھتے تھے۔ 15 شعبان کی شب (شب برات) مغفرت اور نفل عبادات کی رات ہے۔'
    },
    events: {
      en: 'Shab-e-Barat (15th Sha’ban) - The Night of Salvation and change of Qibla direction.',
      hi: 'शब-ए-बारात (१५ शाबान) - मग़फ़िरत (मुक्ति) की रात और क़िबला बदलने की घटना।',
      ur: 'شب برات (15 شعبان) اور قبلہ اول بیت المقدس سے خانہ کعبہ کی طرف تبدیلی۔'
    }
  },
  {
    id: 9,
    name: { en: 'Ramadan', hi: 'रमजान', ur: 'رمضان المبارک' },
    arabic: 'رمضان',
    isSacred: false,
    intro: {
      en: 'The holiest and most anticipated month of the year, wherein the Holy Quran was revealed.',
      hi: 'साल का सबसे पवित्र और प्रतीक्षित महीना, जिसमें पवित्र क़ुरआन नाज़िल (अवतरित) हुआ था।',
      ur: 'سال کا سب سے مقدس اور بابرکت مہینہ، جس میں قرآن مجید کا نزول ہوا۔'
    },
    importance: {
      en: 'Fasting is obligatory (Fardh). It features Laylat al-Qadr (Night of Power), better than a thousand months.',
      hi: 'रोज़ा रखना हर बालिग़ मुसलमान पर फ़र्ज़ है। इसमें शब-ए-क़द्र (Laylat al-Qadr) आती है, जो हज़ार महीनों से बेहतर है।',
      ur: 'اس مہینے کے روزے فرض ہیں۔ اس میں لیلۃ القدر ہے جو ہزار مہینوں سے افضل و بہتر ہے۔'
    },
    worship: {
      en: 'Observe the daily fasts, offer Taraweeh prayers nightly, increase charity (Zakat/Sadaqah), perform Itikaf (seclusion).',
      hi: 'दैनिक रोज़े रखें, रात में तरावीह की नमाज़ पढ़ें, ज़कात और सदक़ा दें, और आख़िरी १० दिनों में एतिकाफ़ करें।',
      ur: 'فرض روزے رکھیں، تراویح کا اہتمام کریں، بکثرت صدقہ و زکوٰۃ دیں اور آخری عشرے کا اعتکاف کریں۔'
    },
    events: {
      en: 'Beginning of Ramadan (1st), Revelation of Quran (Laylat al-Qadr), Battle of Badr (17th), Conquest of Makkah (20th).',
      hi: 'रमज़ान की शुरुआत (१), शब-ए-क़द्र (आख़िरी १० रातें), बद्र का युद्ध (१७), मक्का फतह (२०)।',
      ur: 'آغازِ رمضان، نزول قرآن، غزوہ بدر (17 رمضان)، فتح مکہ (20 رمضان)۔'
    }
  },
  {
    id: 10,
    name: { en: 'Shawwal', hi: 'शव्वाल', ur: 'شوال المکرم' },
    arabic: 'شوّال',
    isSacred: false,
    intro: {
      en: 'The tenth month of the lunar calendar, starting with celebration and gratitude.',
      hi: 'चाँद के कैलेंडर का दसवां महीना, जो जश्न और शुक्रगुज़ारी के साथ शुरू होता है।',
      ur: 'قمری سال کا دسواں مہینہ، جس کا آغاز شکر گزاری اور عید کی خوشیوں سے ہوتا ہے۔'
    },
    importance: {
      en: 'Contains Eid al-Fitr, a gift from Allah to celebrate completion of fasting in Ramadan.',
      hi: 'इसमें ईद-उल-फ़ित्र शामिल है, जो अल्लाह की ओर से रमज़ान के रोज़ों की पूर्णता का उपहार है।',
      ur: 'اس میں عید الفطر ہے، جو رمضان المبارک کی عبادات کی تکمیل پر اللہ کی طرف سے انعام ہے۔'
    },
    worship: {
      en: 'Fasting six days of Shawwal is highly rewarded, equivalent to fasting the entire year.',
      hi: 'शव्वाल के ६ नफ़्ल रोज़े रखना बहुत बड़े पुण्य का काम है, जो पूरे साल रोज़े रखने के बराबर माना जाता है।',
      ur: 'شوال کے چھ نفلی روزے رکھنا بے حد فضیلت کا باعث ہے اور پورے سال کے روزوں کے برابر ثواب رکھتا ہے۔'
    },
    events: {
      en: 'Eid al-Fitr (1st Shawwal), Battle of Uhud (15th Shawwal).',
      hi: 'ईद-उल-फ़ित्र (१ शव्वाल), उहुद का प्रसिद्ध युद्ध (१५ शव्वाल)।',
      ur: 'عید الفطر (1 شوال) اور غزوہ احد (15 شوال)۔'
    }
  },
  {
    id: 11,
    name: { en: 'Dhu al-Qi’dah', hi: 'ज़ु अल-क़ादा', ur: 'ذو القعدہ' },
    arabic: 'ذو القعدة',
    isSacred: true,
    intro: {
      en: 'The eleventh month and one of the four sacred months, signifying peace.',
      hi: 'ग्यारहवां महीना और चार पवित्र महीनों में से एक, जो शांति और संयम का प्रतीक है।',
      ur: 'اسلامی سال کا گیارہواں مہینہ اور چار حرمت والے مہینوں میں سے ایک، جو امن اور سکون کا پیغام دیتا ہے۔'
    },
    importance: {
      en: 'A month of ceasefire where fighting was prohibited in Arabia, facilitating safe travel.',
      hi: 'अरब में युद्धविराम का महीना जहां लड़ाई वर्जित थी, ताकि लोग हज के लिए सुरक्षित यात्रा कर सकें।',
      ur: 'جنگ بندی کا مہینہ جس میں زمانہ قدیم سے لڑائی حرام تھی تاکہ حجاج کرام پرامن سفر کر سکیں۔'
    },
    worship: {
      en: 'Seek religious knowledge, perform optional prayers, and make intentions for the upcoming Hajj pilgrimage.',
      hi: 'धार्मिक ज्ञान प्राप्त करें, नफ़्ल नमाज़ें पढ़ें और हज यात्रा की तैयारी व इरादा करें।',
      ur: 'دینی علوم حاصل کریں، نفلی عبادات کریں اور حج بیت اللہ کا ارادہ اور نیت کریں۔'
    },
    events: {
      en: 'The signing of the historic Treaty of Hudaybiyyah.',
      hi: 'ऐतिहासिक हुदैबिया की संधि (Treaty of Hudaybiyyah) इसी महीने में हुई थी।',
      ur: 'صلح حدیبیہ کا تاریخی معاہدہ۔'
    }
  },
  {
    id: 12,
    name: { en: 'Dhu al-Hijjah', hi: 'ज़ु अल-हिज्जा', ur: 'ذو الحجّہ' },
    arabic: 'ذو الحجة',
    isSacred: true,
    intro: {
      en: 'The final month of the lunar year, containing the sacred rituals of Hajj and sacrifice.',
      hi: 'चाँद के साल का आख़िरी महीना, जिसमें हज और क़ुर्बानी की महत्वपूर्ण इबादतें शामिल हैं।',
      ur: 'اسلامی سال کا آخری مہینہ، جس میں حج بیت اللہ کے مناسک اور قربانی جیسی عظیم عبادات انجام دی جاتی ہیں۔'
    },
    importance: {
      en: 'Extremely sacred. The first ten days of Dhu al-Hijjah are the best days of the entire year.',
      hi: 'बेहद पवित्र। ज़ु अल-हिज्जा के शुरुआती १० दिन पूरे साल के सबसे बेहतरीन दिन माने जाते हैं।',
      ur: 'نہایت برگزیدہ مہینہ۔ ذوالحجہ کے پہلے دس دن سال کے تمام دنوں میں سب سے زیادہ فضیلت والے ہیں۔'
    },
    worship: {
      en: 'Fast during the first nine days, especially on the Day of Arafah. Perform Udhiyah (Qurbani), make excessive Dhikr.',
      hi: 'शुरुआती ९ दिनों में रोज़ा रखें, विशेष रूप से अराफ़ात के दिन। पशु की क़ुर्बानी (उदहिया) करें और ज़िक्र-इलाही बढ़ाएं।',
      ur: 'پہلے نو دنوں کے روزے رکھیں، خاص طور پر یوم عرفہ کا روزہ۔ قربانی (اضحیہ) کریں اور تکبیراتِ تشریق پڑھیں۔'
    },
    events: {
      en: 'Beginning of Hajj (8th), Day of Arafah (9th), Eid al-Adha (10th), Days of Tashreeq (11th-13th).',
      hi: 'हज की शुरुआत (८), अराफ़ात का दिन (९), ईद-उल-अज़हा (१०), तशरीक़ के दिन (११ से १३)।',
      ur: 'آغازِ حج (8 ذوالحجہ)، یومِ عرفہ (9 ذوالحجہ)، عید الاضحیٰ (10 ذوالحجہ)۔'
    }
  }
];

interface IslamicEvent {
  id: string;
  name: { en: string; hi: string; ur: string };
  hMonth: number;
  hDay: number;
  type: 'festival' | 'fasting' | 'sacred_night' | 'hajj';
  desc: { en: string; hi: string; ur: string };
}

const ANNUAL_EVENTS: IslamicEvent[] = [
  {
    id: 'EV-01',
    name: { en: 'Islamic New Year', hi: 'इस्लामिक नया साल (१ मुहर्रम)', ur: 'اسلامی نیا سال' },
    hMonth: 1,
    hDay: 1,
    type: 'festival',
    desc: { en: 'Marks the migration (Hijrah) of Prophet Muhammad (PBUH) and the start of Hijri year.', hi: 'पैगंबर साहब की मक्का से मदीना हिजरत (प्रस्थान) की याद और हिजरी वर्ष की शुरुआत।', ur: 'رسول اکرم ﷺ کی ہجرت مدینہ کی یاد اور ہجری تقویم کا آغاز۔' }
  },
  {
    id: 'EV-02',
    name: { en: 'Day of Ashura', hi: 'आशूरा का दिन (१० मुहर्रम)', ur: 'یوم عاشورہ' },
    hMonth: 1,
    hDay: 10,
    type: 'fasting',
    desc: { en: 'Commemorates the crossing of the Red Sea by Prophet Musa (A.S.) and martyrdom of Imam Hussain (R.A.) at Karbala.', hi: 'हज़रत मूसा की फिरौन से मुक्ति और कर्बला में इमाम हुसैन (र.अ.) की शहादत की याद।', ur: 'حضرت موسیٰؑ کی فرعون سے نجات اور میدان کربلا میں نواسہ رسول حضرت امام حسینؑ کی شہادت کی یاد۔' }
  },
  {
    id: 'EV-03',
    name: { en: 'Mawlid al-Nabi (Prophet’s Birthday)', hi: 'मिलाद-उन-नबी (१२ रबी अल-अव्वल)', ur: 'عید میلاد النبی' },
    hMonth: 3,
    hDay: 12,
    type: 'festival',
    desc: { en: 'Birth anniversary of the Prophet Muhammad (PBUH), celebrated with Seerah lectures and charity.', hi: 'पैगंबर साहब मुहम्मद (स.अ.व.) की विलादत (जन्म दिवस) का पवित्र अवसर।', ur: 'سرورِ کائنات، حضرت محمد مصطفیٰ ﷺ کا یوم ولادت باسعادت۔' }
  },
  {
    id: 'EV-04',
    name: { en: 'Al-Isra’ wal-Mi’raj (Ascension Night)', hi: 'इसरा और मेराज (२७ रजब)', ur: 'شبِ معراج' },
    hMonth: 7,
    hDay: 27,
    type: 'sacred_night',
    desc: { en: 'Commemorates the miraculous night journey and ascension of the Prophet to heaven, where Salah was gifted.', hi: 'नबी करीम का मक्का से येरुशलम और वहां से सात आसमानों का सफर, जिसमें ५ वक़्त की नमाज़ का तोहफ़ा मिला।', ur: 'سفر معراج النبی ﷺ جس میں امت کو تحفہ نماز ملا۔' }
  },
  {
    id: 'EV-05',
    name: { en: 'Shab-e-Barat (Night of Salvation)', hi: 'शब-ए-बारात (१५ शाबान)', ur: 'شبِ برات' },
    hMonth: 8,
    hDay: 15,
    type: 'sacred_night',
    desc: { en: 'Night of forgiveness, destiny, and salvation spent in prayer, fasting the following day.', hi: 'मग़फ़िरत (माफ़ी) और तक़दीर की मुबारक रात, जिसमें इबादत की जाती है।', ur: 'مغفرت اور توبہ کی رات جس میں نفل عبادات کا اہتمام کیا جاتا ہے۔' }
  },
  {
    id: 'EV-06',
    name: { en: 'Beginning of Ramadan', hi: 'रमज़ान का पहला रोज़ा (१ रमज़ान)', ur: 'رمضان المبارک کا آغاز' },
    hMonth: 9,
    hDay: 1,
    type: 'fasting',
    desc: { en: 'The start of the holy month of fasting, self-discipline, and intense devotion.', hi: 'रोज़े और आत्म-संयम के पवित्र महीने की शुरुआत।', ur: 'روزے اور تقویٰ کے بابرکت مہینے کا آغاز۔' }
  },
  {
    id: 'EV-07',
    name: { en: 'Laylat al-Qadr (Night of Power)', hi: 'लैलातुल-क़द्र (शब-ए-क़द्र)', ur: 'لیلۃ القدر' },
    hMonth: 9,
    hDay: 27,
    type: 'sacred_night',
    desc: { en: 'The night the Quran was first revealed, observed on odd nights of the last 10 days of Ramadan.', hi: 'क़ुरआन के अवतरण की रात, जो रमज़ान के आख़िरी १० दिनों की विषम (ताक़) रातों में खोजी जाती है।', ur: 'قرآن کریم کے نزول کی رات، جو رمضان کے آخری عشرے کی طاق راتوں میں تلاش کی جاتی ہے۔' }
  },
  {
    id: 'EV-08',
    name: { en: 'Eid al-Fitr', hi: 'ईद-उल-फ़ित्र (१ शव्वाल)', ur: 'عید الفطر' },
    hMonth: 10,
    hDay: 1,
    type: 'festival',
    desc: { en: 'Festival of breaking the fast, celebrating the successful completion of Ramadan.', hi: 'रमज़ान के रोज़ों की समाप्ति पर खुशी और शुक्रगुज़ारी का त्योहार।', ur: 'رمضان المبارک کی تکمیل پر شکرانے اور خوشی کا تہوار۔' }
  },
  {
    id: 'EV-09',
    name: { en: 'Beginning of Hajj', hi: 'हज की शुरुआत (८ ज़ु अल-हिज्जा)', ur: 'مناسکِ حج کا آغاز' },
    hMonth: 12,
    hDay: 8,
    type: 'hajj',
    desc: { en: 'Pilgrims wear Ihram and proceed to the valley of Mina to start Hajj rituals.', hi: 'दुनिया भर से आए हाजी एहराम बांधकर मीना प्रस्थान करते हैं।', ur: 'حجاج کرام احرام باندھ کر منسکِ حج کے لیے منیٰ روانہ ہوتے ہیں۔' }
  },
  {
    id: 'EV-10',
    name: { en: 'Day of Arafah', hi: 'अराफ़ात का दिन (९ ज़ु अल-हिज्जा)', ur: 'یومِ عرفہ' },
    hMonth: 12,
    hDay: 9,
    type: 'hajj',
    desc: { en: 'The pinnacle day of Hajj where pilgrims stand in supplication at Mount Arafat. Fasting is recommended for non-pilgrims.', hi: 'हज का सबसे महत्वपूर्ण दिन। मैदान-ए-अराफ़ात में हाजियों का जमा होना। गैर-हाजियों के लिए रोज़ा सुन्नत है।', ur: 'حج کا رکنِ اعظم۔ عرفات کے میدان میں حجاج کا وقوف۔ غیر حجاج کے لیے اس دن کا روزہ انتہائی فضیلت رکھتا ہے۔' }
  },
  {
    id: 'EV-11',
    name: { en: 'Eid al-Adha', hi: 'ईद-उल-अज़हा (१० ज़ु अल-हिज्जा)', ur: 'عید الاضحیٰ' },
    hMonth: 12,
    hDay: 10,
    type: 'festival',
    desc: { en: 'The festival of sacrifice, commemorating the absolute obedience of Prophet Ibrahim (A.S.).', hi: 'क़ुर्बानी का त्योहार, जो हज़रत इब्राहिम अलैहिस्सलाम की आज्ञाकारिता की याद दिलाता है।', ur: 'حضرت ابراہیمؑ کی قربانی کی یاد میں عید قربان اور فریضہ ذبح کا دن۔' }
  },
  {
    id: 'EV-12',
    name: { en: 'Days of Tashreeq', hi: 'तशरीक़ के दिन (११, १२, १३ ज़ु अल-हिज्जा)', ur: 'ایامِ تشریق' },
    hMonth: 12,
    hDay: 11,
    type: 'festival',
    desc: { en: 'Days of eating, drinking, and remembrance (Dhikr) of Allah following Eid al-Adha.', hi: 'ईद के बाद अल्लाह का ज़िक्र करने और खुशियां मनाने के तीन मुबारक दिन।', ur: 'عید الاضحیٰ کے بعد اللہ کے ذکر، تکبیرات تشریق اور قربانی کے بقیہ ایام۔' }
  }
];

interface IslamicCalendarProps {
  currentLanguage: Language;
}

export default function IslamicCalendar({ currentLanguage }: IslamicCalendarProps) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [adjustmentDays, setAdjustmentDays] = useState<number>(() => {
    const saved = localStorage.getItem('hijri_adjustment');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [currentDate, setCurrentDate] = useState(() => new Date());
  
  // States for interactive monthly calendar navigation
  const [selectedHijriYear, setSelectedHijriYear] = useState<number>(1448);
  const [selectedHijriMonth, setSelectedHijriMonth] = useState<number>(1);
  const [selectedMonthTab, setSelectedMonthTab] = useState<number>(1);

  // States for notification subscription
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<boolean>(false);
  const [subscribedEvents, setSubscribedEvents] = useState<string[]>(() => {
    const saved = localStorage.getItem('hijri_reminders');
    return saved ? JSON.parse(saved) : ['ramadan', 'eid-fitr', 'eid-adha'];
  });
  const [subscriberEmail, setSubscriberEmail] = useState<string>('');

  // States for Search & Filtering
  const [monthSearchQuery, setMonthSearchQuery] = useState('');
  const [monthFilterSacred, setMonthFilterSacred] = useState<'all' | 'sacred' | 'regular'>('all');
  
  const [eventSearchQuery, setEventSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState<'all' | 'festival' | 'fasting' | 'sacred_night' | 'hajj'>('all');

  // Selected calendar cell for detail modal
  const [selectedDayDetails, setSelectedDayDetails] = useState<{
    hijriDay: number;
    gDate: Date;
    events: IslamicEvent[];
  } | null>(null);

  // Auto ticking clock to keep live widget fresh
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // refresh every minute
    return () => clearInterval(timer);
  }, []);

  // Sync today's Hijri year & month on initial mount
  useEffect(() => {
    const todayHijri = getHijriFromGregorian(new Date(), adjustmentDays);
    setSelectedHijriYear(todayHijri.year);
    setSelectedHijriMonth(todayHijri.month);
  }, [adjustmentDays]);

  // Handle local adjustment storage
  const handleAdjustmentChange = (val: number) => {
    setAdjustmentDays(val);
    localStorage.setItem('hijri_adjustment', val.toString());
  };

  const t = (key: string) => {
    return TRANSLATIONS[key]?.[currentLanguage] || TRANSLATIONS[key]?.['en'] || key;
  };

  // Live Hijri Date structures
  const todayHijri = useMemo(() => {
    return getHijriFromGregorian(currentDate, adjustmentDays);
  }, [currentDate, adjustmentDays]);

  const liveMonthName = useMemo(() => {
    const monthObj = ISLAMIC_MONTHS_DATA.find(m => m.id === todayHijri.month);
    return monthObj ? monthObj.name[currentLanguage] || monthObj.name.en : 'Unknown';
  }, [todayHijri.month, currentLanguage]);

  const liveMonthArabic = useMemo(() => {
    const monthObj = ISLAMIC_MONTHS_DATA.find(m => m.id === todayHijri.month);
    return monthObj ? monthObj.arabic : '';
  }, [todayHijri.month]);

  const todayGregorianStr = useMemo(() => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return currentDate.toLocaleDateString(currentLanguage === 'ur' ? 'ur-PK' : currentLanguage === 'hi' ? 'hi-IN' : 'en-US', options);
  }, [currentDate, currentLanguage]);

  const formattedTimeZone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      return 'UTC';
    }
  }, []);

  // 1. Calculates the Moon Phase percentage for current day of lunar cycle (1 to 29.5)
  const moonPhasePercent = useMemo(() => {
    // 1 to 29 or 30 days
    return Math.min(100, Math.max(0, ((todayHijri.day - 1) / 29.53) * 100));
  }, [todayHijri.day]);

  // Determine description of current moon phase
  const moonPhaseLabel = useMemo(() => {
    const d = todayHijri.day;
    if (d === 1) return currentLanguage === 'ur' ? 'ہلال (نیا چاند)' : currentLanguage === 'hi' ? 'बाल चंद्र (नया चाँद)' : 'New Crescent (Hilal)';
    if (d > 1 && d < 7) return currentLanguage === 'ur' ? 'بڑھتا ہوا ہلال' : currentLanguage === 'hi' ? 'बढ़ता हुआ बाल चंद्र' : 'Waxing Crescent';
    if (d === 7 || d === 8) return currentLanguage === 'ur' ? 'پہلی چوتھائی چاند' : currentLanguage === 'hi' ? 'प्रथम चतुर्थांश (आधा चाँद)' : 'First Quarter';
    if (d > 8 && d < 14) return currentLanguage === 'ur' ? 'بڑھتا ہوا گبوس چاند' : currentLanguage === 'hi' ? 'बढ़ता हुआ कुबड़ा चाँद' : 'Waxing Gibbous';
    if (d === 14 || d === 15) return currentLanguage === 'ur' ? 'بدر (چودھویں کا چاند)' : currentLanguage === 'hi' ? 'पूर्ण चंद्र (पूर्णिमा का चाँद)' : 'Full Moon (Badr)';
    if (d > 15 && d < 22) return currentLanguage === 'ur' ? 'گھٹتا ہوا گبوس چاند' : currentLanguage === 'hi' ? 'घटता हुआ कुबड़ा चाँद' : 'Waning Gibbous';
    if (d === 22 || d === 23) return currentLanguage === 'ur' ? 'آخری چوتھائی چاند' : currentLanguage === 'hi' ? 'अंतिम चतुर्थांश (आधा चाँद)' : 'Third Quarter';
    if (d > 23 && d < 29) return currentLanguage === 'ur' ? 'گھٹتا ہوا ہلال' : currentLanguage === 'hi' ? 'घटता हुआ बाल चंद्र' : 'Waning Crescent';
    return currentLanguage === 'ur' ? 'محاق (تاریک چاند)' : currentLanguage === 'hi' ? 'अमावस्या (नया चाँद)' : 'Dark Moon / New Moon';
  }, [todayHijri.day, currentLanguage]);

  // Map the moon phase to an SVG shadow offset
  const moonSvgOffset = useMemo(() => {
    const day = todayHijri.day;
    if (day <= 15) {
      // Waxing phases: Shadow retreats from right to left
      return 50 - (day / 15) * 50;
    } else {
      // Waning phases: Shadow grows from left to right
      return ((day - 15) / 15) * 50;
    }
  }, [todayHijri.day]);

  // 2. Monthly Hijri Calendar Grid construction
  const calendarGrid = useMemo(() => {
    const daysInMonth = getDaysInHijriMonth(selectedHijriYear, selectedHijriMonth, adjustmentDays);
    const firstGDate = getGregorianFromHijri(selectedHijriYear, selectedHijriMonth, 1, adjustmentDays);
    const startDayOfWeek = firstGDate.getDay(); // 0 is Sunday, 6 is Saturday
    
    const cells = [];
    
    // Fill leading blank cells from previous days
    for (let i = 0; i < startDayOfWeek; i++) {
      cells.push({ isEmpty: true, dayNum: 0, gDate: null, events: [] });
    }
    
    // Fill days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const gDate = getGregorianFromHijri(selectedHijriYear, selectedHijriMonth, day, adjustmentDays);
      
      // Check for any matching annual events on this specific day
      const dayEvents = ANNUAL_EVENTS.filter(ev => ev.hMonth === selectedHijriMonth && ev.hDay === day);
      
      cells.push({
        isEmpty: false,
        dayNum: day,
        gDate,
        events: dayEvents
      });
    }
    
    return cells;
  }, [selectedHijriYear, selectedHijriMonth, adjustmentDays]);

  // Check if a cell in grid is "today"
  const isToday = (cellGDate: Date | null) => {
    if (!cellGDate) return false;
    const today = new Date();
    return cellGDate.getDate() === today.getDate() &&
           cellGDate.getMonth() === today.getMonth() &&
           cellGDate.getFullYear() === today.getFullYear();
  };

  // 3. Compute Greg dates of All Islamic events for the selected Hijri Year
  const computedAnnualEvents = useMemo(() => {
    return ANNUAL_EVENTS.map(event => {
      const gDate = getGregorianFromHijri(selectedHijriYear, event.hMonth, event.hDay, adjustmentDays);
      return {
        ...event,
        gDate,
        formattedGDate: gDate.toLocaleDateString(currentLanguage === 'ur' ? 'ur-PK' : currentLanguage === 'hi' ? 'hi-IN' : 'en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };
    }).sort((a, b) => a.gDate.getTime() - b.gDate.getTime());
  }, [selectedHijriYear, adjustmentDays, currentLanguage]);

  // 4. Find the NEXT major Islamic occasion and countdown to it
  const nextOccasion = useMemo(() => {
    const now = new Date();
    // Find first event with Gregorian date >= today
    let nextEv = computedAnnualEvents.find(e => {
      // Normalize dates to midnight to compare accurately
      const evMid = new Date(e.gDate.getFullYear(), e.gDate.getMonth(), e.gDate.getDate());
      const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      return evMid >= nowMid;
    });

    // If all events in selected year are past, look at next year's first event
    if (!nextEv) {
      const nextY = selectedHijriYear + 1;
      const nextYearEvents = ANNUAL_EVENTS.map(event => {
        const gDate = getGregorianFromHijri(nextY, event.hMonth, event.hDay, adjustmentDays);
        return { 
          ...event, 
          gDate,
          formattedGDate: gDate.toLocaleDateString(currentLanguage === 'ur' ? 'ur-PK' : currentLanguage === 'hi' ? 'hi-IN' : 'en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        };
      }).sort((a, b) => a.gDate.getTime() - b.gDate.getTime());
      
      nextEv = nextYearEvents[0];
    }

    if (nextEv) {
      const evDate = new Date(nextEv.gDate.getFullYear(), nextEv.gDate.getMonth(), nextEv.gDate.getDate());
      const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const diffTime = evDate.getTime() - nowMid.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      return {
        event: nextEv,
        daysRemaining: diffDays
      };
    }
    
    return null;
  }, [computedAnnualEvents, selectedHijriYear, adjustmentDays]);

  // Search & Filters for months
  const filteredMonths = useMemo(() => {
    return ISLAMIC_MONTHS_DATA.filter(m => {
      const nameMatch = m.name.en.toLowerCase().includes(monthSearchQuery.toLowerCase()) || 
                        m.name.hi.includes(monthSearchQuery) || 
                        m.name.ur.includes(monthSearchQuery);
      const isSacredMatch = monthFilterSacred === 'all' || 
                            (monthFilterSacred === 'sacred' && m.isSacred) || 
                            (monthFilterSacred === 'regular' && !m.isSacred);
      return nameMatch && isSacredMatch;
    });
  }, [monthSearchQuery, monthFilterSacred]);

  // Search & Filters for festivals
  const filteredEvents = useMemo(() => {
    return computedAnnualEvents.filter(e => {
      const text = `${e.name.en} ${e.name.hi} ${e.name.ur} ${e.desc.en} ${e.desc.hi} ${e.desc.ur}`.toLowerCase();
      const matchSearch = text.includes(eventSearchQuery.toLowerCase());
      const matchType = eventTypeFilter === 'all' || e.type === eventTypeFilter;
      return matchSearch && matchType;
    });
  }, [computedAnnualEvents, eventSearchQuery, eventTypeFilter]);

  // Notification Preferences
  const toggleReminderPreference = (id: string) => {
    let updated;
    if (subscribedEvents.includes(id)) {
      updated = subscribedEvents.filter(item => item !== id);
    } else {
      updated = [...subscribedEvents, id];
    }
    setSubscribedEvents(updated);
    localStorage.setItem('hijri_reminders', JSON.stringify(updated));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim()) return;
    setSubscriptionSuccess(true);
    setSubscriberEmail('');
    setTimeout(() => {
      setSubscriptionSuccess(false);
    }, 5000);
  };

  // Structured SEO Schema Markup
  useEffect(() => {
    const scriptId = 'islamic-calendar-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "Islamic Lunar Hijri Calendar & Holy Festivals",
      "description": "High-precision Hijri and Gregorian calendar tracker displaying prayer intervals, sacred lunar months, fasting periods, and Islamic religious festivals.",
      "startDate": "2026-01-01",
      "endDate": "2030-12-31",
      "location": {
        "@type": "Place",
        "name": "Global / Rangrez Society Platforms"
      }
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const isFriday = currentDate.getDay() === 5;

  return (
    <div 
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        themeMode === 'dark' ? 'bg-[#0F1E16] text-[#E4ECE7]' : 'bg-gray-50/60 text-gray-800'
      }`} 
      id="hijri_calendar_section"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TOP COMPONENT PRESETS CONTROL */}
        <div className="flex justify-between items-center gap-4 flex-wrap" id="hijri_controls">
          <div className="flex items-center space-x-2 bg-emerald-950/10 border border-emerald-900/10 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-800">
            <Compass className="h-4 w-4 text-[#F4C430] animate-spin-slow" />
            <span>Islamic Digital Heritage</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Light / Dark Mode Toggle within component */}
            <button
              onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
              className={`p-2.5 rounded-lg border flex items-center space-x-1.5 text-xs font-semibold tracking-wide transition cursor-pointer shadow-sm ${
                themeMode === 'dark' 
                  ? 'bg-[#1C3227] border-emerald-800/80 text-[#F4C430] hover:bg-[#254234]' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
              title="Toggle theme for Calendar"
            >
              {themeMode === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 text-[#F4C430]" />
                  <span>Light Calendar</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-emerald-800" />
                  <span>Dark Calendar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* HERO TITLE HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-emerald-900 to-emerald-800 px-4 py-1.5 rounded-full border border-[#F4C430]/40 text-white font-mono text-[10px] tracking-widest uppercase">
            <Moon className="h-3.5 w-3.5 text-[#F4C430] fill-[#F4C430]" />
            <span>Lunar Hijri Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-[#004B23] flex items-center justify-center gap-3">
            <span className={themeMode === 'dark' ? 'text-emerald-100' : 'text-gray-900'}>
              {t('title')}
            </span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-gray-500">
            {t('subtitle')}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded"></div>
        </div>

        {/* FRIDAY BANNER NOTICE */}
        {isFriday && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#004B23] to-[#072F18] border border-[#F4C430] p-4 rounded-xl shadow-lg flex items-center space-x-3 text-white text-xs"
            id="jumuah_alert_bar"
          >
            <div className="w-8 h-8 rounded-full bg-[#F4C430] flex items-center justify-center text-[#0B132B]">
              <Sparkles className="h-4 w-4" />
            </div>
            <p className="font-serif leading-relaxed font-bold tracking-wide">
              {t('jumuahAlert')}
            </p>
          </motion.div>
        )}

        {/* GRID LAYOUT FOR LIVE WIDGET AND MONTHLY CALENDAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="hijri_dashboard_grid">
          
          {/* LEFT PANEL: LIVE CLOCK & MOON PHASE (4 COLS) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Live Hijri Date Card */}
            <div 
              className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-md ${
                themeMode === 'dark' 
                  ? 'bg-gradient-to-br from-[#12281D] to-[#1C3227] border-emerald-800' 
                  : 'bg-white border-gray-200'
              }`}
              id="live_hijri_widget"
            >
              {/* Elegant geometric absolute backdrop circles */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
                <div className="w-32 h-32 rounded-full border-4 border-[#F4C430]"></div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100/10">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#F4C430] uppercase flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#F4C430]" />
                    <span>{t('liveDate')}</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    themeMode === 'dark' ? 'bg-[#1C3227] text-emerald-400' : 'bg-emerald-50/80 text-emerald-800'
                  }`}>
                    Live Active
                  </span>
                </div>

                {/* Big Display Date */}
                <div className="text-center py-4 space-y-2 relative z-10">
                  <span className="text-5xl font-serif font-extrabold text-[#F4C430] tracking-tight block">
                    {todayHijri.day}
                  </span>
                  <div className="space-y-1">
                    <h3 className={`text-xl font-bold tracking-wide ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {liveMonthName}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono tracking-widest block">
                      {liveMonthArabic} • {todayHijri.year} AH
                    </span>
                  </div>
                </div>

                {/* Sub Gregorian Date Info */}
                <div className="pt-3 border-t border-gray-100/10 space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t('gregorianDate')}</span>
                    <span className={`font-bold ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {todayGregorianStr}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t('timeZone')}</span>
                    <span className="font-mono text-gray-500 font-semibold">{formattedTimeZone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Moon Phase Visualizer Card */}
            <div 
              className={`p-6 rounded-2xl border transition-all duration-300 shadow-md ${
                themeMode === 'dark' 
                  ? 'bg-gradient-to-br from-[#12281D] to-[#1C3227] border-emerald-800' 
                  : 'bg-white border-gray-200'
              }`}
              id="moon_phase_widget"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100/10">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#F4C430] uppercase">
                    Lunar Phase Tracker
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    Day {todayHijri.day} of Lunar Cycle
                  </span>
                </div>

                {/* Moon Render */}
                <div className="flex flex-col items-center justify-center space-y-3 py-2">
                  <div className="relative w-24 h-24 rounded-full bg-emerald-950/20 overflow-hidden flex items-center justify-center border border-emerald-800/30">
                    {/* Background starry dots */}
                    <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-30"></div>
                    <div className="absolute bottom-5 right-6 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
                    <div className="absolute top-10 right-3 w-1 h-1 bg-white rounded-full opacity-20"></div>

                    {/* SVG Interactive Moon Crescent */}
                    <svg width="80" height="80" viewBox="0 0 100 100" className="transform rotate-12">
                      <defs>
                        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FFFDEC" />
                          <stop offset="70%" stopColor="#FDE68A" />
                          <stop offset="100%" stopColor="#D97706" />
                        </radialGradient>
                      </defs>
                      {/* Fully lit moon circle */}
                      <circle cx="50" cy="50" r="45" fill="url(#moonGlow)" />
                      
                      {/* Interactive dark shadow path to morph phase based on day */}
                      {todayHijri.day <= 15 ? (
                        // Waxing Moon shadow covers left side
                        <path 
                          d={`M 50 5 Q ${50 + moonSvgOffset} 50 50 95 A 45 45 0 0 1 50 5 Z`} 
                          fill="#061A0E" 
                          opacity="0.9"
                        />
                      ) : (
                        // Waning Moon shadow covers right side
                        <path 
                          d={`M 50 5 Q ${50 - moonSvgOffset} 50 50 95 A 45 45 0 0 0 50 5 Z`} 
                          fill="#061A0E" 
                          opacity="0.9"
                        />
                      )}
                    </svg>
                  </div>
                  <div className="text-center">
                    <span className={`text-sm font-bold block ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {moonPhaseLabel}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      Illumination: {Math.round(todayHijri.day <= 15 ? (todayHijri.day / 15) * 100 : (1 - (todayHijri.day - 15) / 15) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Countdown Tracker to Next Major Occasion */}
            {nextOccasion && (
              <div 
                className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-md ${
                  themeMode === 'dark' 
                    ? 'bg-gradient-to-br from-[#12281D] to-[#1C3227] border-emerald-800' 
                    : 'bg-white border-gray-200'
                }`}
                id="countdown_widget"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100/10">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#F4C430] uppercase">
                      {t('upcomingEvent')}
                    </span>
                    <span className="text-[10px] font-bold text-amber-500 animate-pulse font-mono">
                      Upcoming
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className={`text-base font-serif font-extrabold tracking-tight ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {nextOccasion.event.name[currentLanguage] || nextOccasion.event.name.en}
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal line-clamp-2">
                      {nextOccasion.event.desc[currentLanguage] || nextOccasion.event.desc.en}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl text-center border ${
                    themeMode === 'dark' ? 'bg-[#1C3227] border-emerald-800/60' : 'bg-emerald-50/50 border-emerald-100'
                  }`}>
                    <span className="text-3xl font-mono font-bold text-emerald-600 block">
                      {nextOccasion.daysRemaining}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Days Remaining
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span>Hijri Target: {nextOccasion.event.hDay} {ISLAMIC_MONTHS_DATA.find(m => m.id === nextOccasion.event.hMonth)?.name[currentLanguage]}</span>
                    <span>Gregorian: {nextOccasion.event.formattedGDate}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT PANEL: DYNAMIC MONTHLY CALENDAR GRID (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
            
            <div 
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-md ${
                themeMode === 'dark' ? 'bg-[#12281D]/80 border-emerald-800/80' : 'bg-white border-gray-200'
              }`}
              id="monthly_calendar_grid_container"
            >
              
              <div className="flex flex-col space-y-6">
                
                {/* Header controls for Month Selector */}
                <div className="flex justify-between items-center flex-wrap gap-4 pb-4 border-b border-gray-100/10">
                  <div className="space-y-1">
                    <h3 className={`text-lg font-serif font-extrabold ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {t('monthlyCalendar')}
                    </h3>
                    <p className="text-xs text-gray-400">
                      View Gregorian equivalents mapped directly to lunar cycles
                    </p>
                  </div>

                  {/* Moonsighting Adjustment Slider Control */}
                  <div className="space-y-1 text-right max-w-xs w-full sm:w-auto">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      {t('adjustSighting')}
                    </label>
                    <div className="flex items-center space-x-2">
                      {[-2, -1, 0, 1, 2].map((adj) => (
                        <button
                          key={adj}
                          onClick={() => handleAdjustmentChange(adj)}
                          className={`w-10 h-8 text-xs font-mono font-bold rounded transition cursor-pointer ${
                            adjustmentDays === adj 
                              ? 'bg-[#F4C430] text-[#0B132B]' 
                              : themeMode === 'dark' 
                                ? 'bg-[#1C3227] hover:bg-emerald-800/50 text-[#E4ECE7]' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {adj >= 0 ? `+${adj}` : adj}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigations & Selector Dropdowns */}
                <div className="flex justify-between items-center gap-4 flex-wrap" id="month_navigator_row">
                  
                  {/* Dropdowns */}
                  <div className="flex items-center space-x-2">
                    {/* Month selector */}
                    <select
                      value={selectedHijriMonth}
                      onChange={(e) => setSelectedHijriMonth(parseInt(e.target.value, 10))}
                      className={`text-xs p-2.5 rounded-lg border font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                        themeMode === 'dark' 
                          ? 'bg-[#1C3227] border-emerald-800 text-white' 
                          : 'bg-white border-gray-200 text-gray-700'
                      }`}
                    >
                      {ISLAMIC_MONTHS_DATA.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.id}. {m.name[currentLanguage] || m.name.en} ({m.arabic})
                        </option>
                      ))}
                    </select>

                    {/* Year selector */}
                    <select
                      value={selectedHijriYear}
                      onChange={(e) => setSelectedHijriYear(parseInt(e.target.value, 10))}
                      className={`text-xs p-2.5 rounded-lg border font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                        themeMode === 'dark' 
                          ? 'bg-[#1C3227] border-emerald-800 text-white' 
                          : 'bg-white border-gray-200 text-gray-700'
                      }`}
                    >
                      {Array.from({ length: 21 }, (_, i) => 1440 + i).map((yr) => (
                        <option key={yr} value={yr}>
                          {yr} AH
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nav Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (selectedHijriMonth === 1) {
                          setSelectedHijriMonth(12);
                          setSelectedHijriYear(selectedHijriYear - 1);
                        } else {
                          setSelectedHijriMonth(selectedHijriMonth - 1);
                        }
                      }}
                      className={`p-2 rounded-lg border transition cursor-pointer ${
                        themeMode === 'dark' ? 'bg-[#1C3227] border-emerald-800 text-white hover:bg-[#254234]' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                      }`}
                      title="Previous Islamic Month"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => {
                        const todayH = getHijriFromGregorian(new Date(), adjustmentDays);
                        setSelectedHijriYear(todayH.year);
                        setSelectedHijriMonth(todayH.month);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                        themeMode === 'dark' ? 'bg-[#1C3227] border-emerald-800 text-white hover:bg-[#254234]' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {t('today')}
                    </button>

                    <button
                      onClick={() => {
                        if (selectedHijriMonth === 12) {
                          setSelectedHijriMonth(1);
                          setSelectedHijriYear(selectedHijriYear + 1);
                        } else {
                          setSelectedHijriMonth(selectedHijriMonth + 1);
                        }
                      }}
                      className={`p-2 rounded-lg border transition cursor-pointer ${
                        themeMode === 'dark' ? 'bg-[#1C3227] border-emerald-800 text-white hover:bg-[#254234]' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                      }`}
                      title="Next Islamic Month"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                </div>

                {/* Calendar Core Grid */}
                <div className="space-y-4" id="calendar_grid_wrapper">
                  
                  {/* Grid Headers (Weekday Names) */}
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {WEEKDAYS[currentLanguage].map((dayName, idx) => (
                      <div key={idx} className="py-2">{dayName}</div>
                    ))}
                  </div>

                  {/* Grid Days */}
                  <div className="grid grid-cols-7 gap-2" id="grid_day_cells">
                    {calendarGrid.map((cell, idx) => {
                      if (cell.isEmpty) {
                        return <div key={idx} className="aspect-square opacity-0"></div>;
                      }

                      const cellIsToday = isToday(cell.gDate);
                      const hasEvents = cell.events.length > 0;

                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            if (cell.gDate) {
                              setSelectedDayDetails({
                                hijriDay: cell.dayNum,
                                gDate: cell.gDate,
                                events: cell.events
                              });
                            }
                          }}
                          className={`aspect-square p-2 rounded-xl border flex flex-col justify-between items-center transition cursor-pointer hover:shadow-md relative ${
                            cellIsToday
                              ? 'bg-gradient-to-br from-emerald-900 to-[#004B23] border-[#F4C430] text-white shadow-lg'
                              : hasEvents
                                ? themeMode === 'dark'
                                  ? 'bg-amber-950/20 border-amber-600 text-white hover:bg-amber-950/30'
                                  : 'bg-amber-50/50 border-[#F4C430] text-gray-900 hover:bg-amber-50'
                                : themeMode === 'dark'
                                  ? 'bg-[#1C3227]/40 border-emerald-800/30 text-gray-200 hover:bg-emerald-800/30'
                                  : 'bg-white border-gray-100 text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {/* Gregorian mini number representation */}
                          <span className={`text-[9px] font-mono font-bold self-start ${
                            cellIsToday ? 'text-emerald-100' : 'text-gray-400'
                          }`}>
                            {cell.gDate?.getDate()}
                          </span>

                          {/* Hijri day number */}
                          <span className="text-base font-serif font-extrabold tracking-wide">
                            {cell.dayNum}
                          </span>

                          {/* Event indicator dot */}
                          {hasEvents ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse absolute bottom-1.5"></span>
                          ) : (
                            <span className="h-1.5 w-1.5 opacity-0"></span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Quick note on adjustments */}
                <div className="flex items-start space-x-2 text-xs text-gray-400 pt-2 border-t border-gray-100/10">
                  <Info className="h-4 w-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <p>{t('adjustmentNote')}</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* DETAILS POPUP MODAL */}
        <AnimatePresence>
          {selectedDayDetails && (
            <div className="fixed inset-0 bg-[#061A0E]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" id="calendar_detail_modal">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className={`max-w-md w-full rounded-2xl p-6 border shadow-2xl space-y-6 ${
                  themeMode === 'dark' ? 'bg-[#12281D] border-emerald-800 text-white' : 'bg-white border-gray-200 text-gray-800'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#F4C430] uppercase">
                      Selected Hijri Date Details
                    </span>
                    <h3 className="text-xl font-serif font-extrabold text-emerald-600">
                      {selectedDayDetails.hijriDay} {ISLAMIC_MONTHS_DATA.find(m => m.id === selectedHijriMonth)?.name[currentLanguage]} {selectedHijriYear} AH
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedDayDetails(null)}
                    className="p-1 rounded-full hover:bg-gray-100/10 text-gray-400 font-extrabold"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-xs text-left">
                  <div className="p-3 bg-emerald-950/20 border border-emerald-900/10 rounded-xl space-y-1">
                    <span className="text-gray-400 font-mono text-[9px] uppercase tracking-wider block">Corresponding Gregorian Date</span>
                    <p className="font-bold">
                      {selectedDayDetails.gDate.toLocaleDateString(currentLanguage === 'ur' ? 'ur-PK' : currentLanguage === 'hi' ? 'hi-IN' : 'en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-gray-400 font-mono text-[9px] uppercase tracking-wider block">Spiritual Importance & Significance</span>
                    
                    {selectedDayDetails.events.length > 0 ? (
                      <div className="space-y-3">
                        {selectedDayDetails.events.map((ev, i) => (
                          <div key={i} className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-1">
                            <h4 className="font-bold text-[#F4C430] flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>{ev.name[currentLanguage] || ev.name.en}</span>
                            </h4>
                            <p className="text-gray-300 leading-normal">
                              {ev.desc[currentLanguage] || ev.desc.en}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 leading-relaxed italic">
                        No major annual events fall on this specific Hijri day. Daily optional fasts, prayers, and acts of charity remain highly beneficial and rewarded by Allah.
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100/10 flex justify-end">
                  <button
                    onClick={() => setSelectedDayDetails(null)}
                    className="px-4 py-2 bg-gradient-to-r from-[#004B23] to-[#072F18] hover:bg-emerald-800 text-white font-bold rounded-lg text-xs transition"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* SECTION 2: ANNUAL EVENTS DIRECTORY CARD GRID */}
        <div className="space-y-6" id="annual_events_catalogue">
          <div className="flex justify-between items-center gap-4 flex-wrap pb-4 border-b border-gray-200/10">
            <div className="space-y-1 text-left">
              <h3 className={`text-xl font-serif font-extrabold ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('annualEvents')} ({selectedHijriYear} AH)
              </h3>
              <p className="text-xs text-gray-400">
                A structured reference timeline of verified lunar festivals and fasts
              </p>
            </div>

            {/* Event Search & Filter Input block */}
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={eventSearchQuery}
                  onChange={(e) => setEventSearchQuery(e.target.value)}
                  className={`text-xs p-2.5 pl-8 rounded-lg border focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                    themeMode === 'dark' 
                      ? 'bg-[#1C3227] border-emerald-800 text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'
                  }`}
                />
                <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-400" />
              </div>

              <select
                value={eventTypeFilter}
                onChange={(e: any) => setEventTypeFilter(e.target.value)}
                className={`text-xs p-2.5 rounded-lg border font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                  themeMode === 'dark' 
                    ? 'bg-[#1C3227] border-emerald-800 text-white' 
                    : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <option value="all">All Events</option>
                <option value="festival">Festivals</option>
                <option value="fasting">Fasting Days</option>
                <option value="sacred_night">Sacred Nights</option>
                <option value="hajj">Hajj & Pilgrimage</option>
              </select>
            </div>
          </div>

          {/* Events Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="annual_events_cards">
            {filteredEvents.map((ev) => {
              const monthObj = ISLAMIC_MONTHS_DATA.find(m => m.id === ev.hMonth);
              const badgeColors = {
                festival: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900',
                fasting: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900',
                sacred_night: 'bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900',
                hajj: 'bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900'
              };

              return (
                <div
                  key={ev.id}
                  className={`p-5 rounded-2xl border transition hover:shadow-lg flex flex-col justify-between space-y-4 ${
                    themeMode === 'dark' 
                      ? 'bg-[#12281D] border-emerald-800/40' 
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${badgeColors[ev.type]}`}>
                        {ev.type.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 font-bold">
                        {ev.hDay} {monthObj?.name[currentLanguage] || monthObj?.name.en}
                      </span>
                    </div>

                    <h4 className={`text-base font-serif font-extrabold ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {ev.name[currentLanguage] || ev.name.en}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {ev.desc[currentLanguage] || ev.desc.en}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100/10 flex justify-between items-center text-[10px]">
                    <span className="text-gray-500 font-bold">Gregorian Equivalent:</span>
                    <span className="font-mono font-bold text-amber-500">{ev.formattedGDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: 12 ISLAMIC MONTHS KNOWLEDGE DIRECTORY */}
        <div className="space-y-6" id="months_knowledge_directory">
          <div className="flex justify-between items-center gap-4 flex-wrap pb-4 border-b border-gray-200/10">
            <div className="space-y-1 text-left">
              <h3 className={`text-xl font-serif font-extrabold ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('importantMonths')}
              </h3>
              <p className="text-xs text-gray-400">
                {t('monthsDesc')}
              </p>
            </div>

            {/* Month search query box */}
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search months..."
                  value={monthSearchQuery}
                  onChange={(e) => setMonthSearchQuery(e.target.value)}
                  className={`text-xs p-2.5 pl-8 rounded-lg border focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                    themeMode === 'dark' 
                      ? 'bg-[#1C3227] border-emerald-800 text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'
                  }`}
                />
                <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-400" />
              </div>

              <select
                value={monthFilterSacred}
                onChange={(e: any) => setMonthFilterSacred(e.target.value)}
                className={`text-xs p-2.5 rounded-lg border font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#F4C430] ${
                  themeMode === 'dark' 
                    ? 'bg-[#1C3227] border-emerald-800 text-white' 
                    : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <option value="all">All Months</option>
                <option value="sacred">Sacred Months (हुरमत वाले महीने)</option>
                <option value="regular">Regular Months</option>
              </select>
            </div>
          </div>

          {/* Months cards directory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="months_cards_directory">
            {filteredMonths.map((m) => (
              <div
                key={m.id}
                className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-4 shadow-sm hover:shadow-md ${
                  themeMode === 'dark' 
                    ? 'bg-[#12281D] border-emerald-800/40' 
                    : 'bg-white border-gray-100'
                }`}
              >
                {/* Micro Arabic absolute calligraphies in card corner */}
                <span className="absolute right-4 top-4 text-3xl font-serif text-[#F4C430]/15 pointer-events-none select-none font-bold">
                  {m.arabic}
                </span>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center font-serif text-sm font-bold border border-[#F4C430]">
                      {m.id}
                    </div>
                    <div>
                      <h4 className={`text-lg font-serif font-extrabold ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {m.name[currentLanguage] || m.name.en}
                      </h4>
                      <div className="flex items-center space-x-1.5 mt-0.5">
                        <span className="text-[10px] text-[#F4C430] font-bold font-mono uppercase">
                          {m.arabic}
                        </span>
                        {m.isSacred && (
                          <span className="text-[8px] bg-red-950/30 text-rose-500 border border-rose-900/20 px-1.5 py-0.2 rounded font-mono font-bold uppercase">
                            Sacred Month
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-light italic">
                    {m.intro[currentLanguage] || m.intro.en}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-gray-100/10 text-xs">
                    <div>
                      <span className="text-[#F4C430] font-bold block">Spiritual Importance:</span>
                      <p className="text-gray-400 leading-normal mt-0.5">{m.importance[currentLanguage] || m.importance.en}</p>
                    </div>

                    <div>
                      <span className="text-emerald-500 font-bold block">Recommended Worship / Deeds:</span>
                      <p className="text-gray-400 leading-normal mt-0.5">{m.worship[currentLanguage] || m.worship.en}</p>
                    </div>

                    <div>
                      <span className="text-amber-500 font-bold block">Key Historic Events:</span>
                      <p className="text-gray-400 leading-normal mt-0.5">{m.events[currentLanguage] || m.events.en}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: NOTIFICATION REMINDER CONSENT BLOCK */}
        <div 
          className="p-8 rounded-2xl bg-gradient-to-br from-[#061A0E] to-[#12281D] border border-emerald-800 shadow-xl relative overflow-hidden"
          id="reminder_hub_container"
        >
          {/* Subtle star patterns absolute */}
          <div className="absolute left-4 bottom-4 opacity-5 text-white">
            <Sparkles className="h-20 w-20" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center space-x-1 bg-[#1C3227] px-3 py-1 rounded-full border border-emerald-800 text-xs font-mono text-emerald-400">
                <Bell className="h-3.5 w-3.5 text-emerald-400" />
                <span>Stay Synced Offline</span>
              </div>
              <h3 className="text-2xl font-serif font-extrabold text-white">
                {t('reminderCenter')}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t('notificationDesc')}
              </p>

              {/* Notification Preferences Checkbox List */}
              <div className="flex flex-wrap gap-2.5 pt-2" id="notification_preferences_toggles">
                {[
                  { id: 'ramadan', label: 'Ramadan fasts' },
                  { id: 'eid-fitr', label: 'Eid al-Fitr' },
                  { id: 'eid-adha', label: 'Eid al-Adha' },
                  { id: 'ashura', label: 'Day of Ashura' },
                  { id: 'hajj', label: 'Beginning of Hajj' }
                ].map((pref) => {
                  const active = subscribedEvents.includes(pref.id);
                  return (
                    <button
                      key={pref.id}
                      onClick={() => toggleReminderPreference(pref.id)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition flex items-center space-x-1.5 cursor-pointer ${
                        active 
                          ? 'bg-emerald-800/40 border-emerald-500 text-[#F4C430] font-extrabold shadow-sm' 
                          : 'bg-transparent border-emerald-900/60 text-gray-400 hover:border-emerald-700 hover:text-gray-200'
                      }`}
                    >
                      {active ? <Bell className="h-3 w-3 text-[#F4C430]" /> : <BellOff className="h-3 w-3 text-gray-400" />}
                      <span>{pref.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-emerald-950/40 border border-emerald-900 p-6 rounded-xl space-y-4">
                
                <h4 className="text-xs font-bold text-[#F4C430] uppercase tracking-wider text-left">
                  Subscribe to Digital Alerts
                </h4>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="w-full bg-emerald-900/20 text-white placeholder-emerald-600 text-xs p-3.5 pr-12 rounded-lg border border-emerald-800 focus:outline-none focus:ring-1 focus:ring-[#F4C430] transition"
                    />
                    <button
                      type="submit"
                      className="absolute right-2.5 top-2 py-1.5 px-3 bg-[#F4C430] hover:bg-amber-500 text-[#061A0E] rounded-md text-[10px] font-bold tracking-wider transition cursor-pointer"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </form>

                {subscriptionSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-900/40 border border-emerald-800 rounded-lg flex items-center space-x-2 text-white text-[11px]"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>{t('subscribeSuccess')}</span>
                  </motion.div>
                )}

                <p className="text-[10px] text-gray-500 leading-normal text-left">
                  We respect your privacy. No spam. Unsubscribe at any time. Preferences are securely cached on your client device browser storage.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* DISCLAIMER FOOTER NOTE */}
        <div 
          className={`p-4 sm:p-5 rounded-2xl border text-xs leading-relaxed flex items-start space-x-3 shadow-inner ${
            themeMode === 'dark' ? 'bg-[#0E2015] border-emerald-900/60 text-gray-400' : 'bg-gray-100/50 border-gray-200 text-gray-500'
          }`}
          id="disclaimer_bar"
        >
          <AlertTriangle className="h-5 w-5 text-[#F4C430] flex-shrink-0 mt-0.5 animate-pulse" />
          <p className="text-left font-light">
            <strong>Moonsighting Disclaimer:</strong> {t('disclaimer')}
          </p>
        </div>

      </div>
    </div>
  );
}
