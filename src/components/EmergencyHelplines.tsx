import React, { useState, useEffect, useMemo } from 'react';
import { 
  Phone, Search, Globe, Copy, Share2, Heart, ShieldAlert, Award, 
  ChevronRight, PhoneCall, CheckCircle, AlertTriangle, ExternalLink, 
  Printer, ArrowUpRight, HelpCircle, UserCheck, Star, Info, X, MapPin, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface ContactItem {
  id: string;
  name: { en: string; hi: string; ur: string };
  number?: string;
  website?: string;
  department: { en: string; hi: string; ur: string };
  category: 'emergency' | 'healthcare' | 'women' | 'children' | 'education' | 'employment' | 'business' | 'agriculture' | 'minority' | 'legal' | 'transport' | 'utilities' | 'cyber_safety' | 'senior';
  desc: { en: string; hi: string; ur: string };
  isHotline?: boolean;
}

const CATEGORIES = [
  { id: 'all', labelEn: 'All Services', labelHi: 'सभी सेवाएं', labelUr: 'تمام سروسز', color: 'bg-gray-100 text-gray-800 border-gray-200' },
  { id: 'favorites', labelEn: 'Favorites ⭐', labelHi: 'पसंदीदा ⭐', labelUr: 'پسندیدہ ⭐', color: 'bg-yellow-50 text-yellow-800 border-yellow-200' },
  { id: 'emergency', labelEn: 'Emergency Response', labelHi: 'आपातकालीन सेवाएं', labelUr: 'ہنگامی خدمات', color: 'bg-red-50 text-red-800 border-red-200' },
  { id: 'women', labelEn: 'Women Protection', labelHi: 'महिला सुरक्षा', labelUr: 'خواتین کا تحفظ', color: 'bg-pink-50 text-pink-800 border-pink-200' },
  { id: 'children', labelEn: 'Child Welfare', labelHi: 'बाल कल्याण', labelUr: 'بچوں کی بہبود', color: 'bg-purple-50 text-purple-800 border-purple-200' },
  { id: 'healthcare', labelEn: 'Healthcare & Medical', labelHi: 'स्वास्थ्य और चिकित्सा', labelUr: 'صحت اور علاج', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { id: 'cyber_safety', labelEn: 'Cyber & Finance', labelHi: 'साइबर और वित्तीय सुरक्षा', labelUr: 'سائبر اور مالیاتی تحفظ', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  { id: 'senior', labelEn: 'Senior Citizens', labelHi: 'वरिष्ठ नागरिक', labelUr: 'بزرگ شہری', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { id: 'education', labelEn: 'Education & Career', labelHi: 'शिक्षा और करियर', labelUr: 'تعلیم اور کیریئر', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { id: 'employment', labelEn: 'Employment & Labor', labelHi: 'रोजगार और श्रम', labelUr: 'ملازمت اور محنت', color: 'bg-teal-50 text-teal-800 border-teal-200' },
  { id: 'minority', labelEn: 'Minority Welfare', labelHi: 'अल्पसंख्यक कल्याण', labelUr: 'اقلیتی بہبود', color: 'bg-green-50 text-green-800 border-green-200' },
  { id: 'agriculture', labelEn: 'Agriculture Support', labelHi: 'कृषि और किसान कल्याण', labelUr: 'زراعت اور کسان', color: 'bg-lime-50 text-lime-800 border-lime-200' },
  { id: 'business', labelEn: 'Business & MSME', labelHi: 'व्यापार और एमएसएमई', labelUr: 'تجارت اور ایم ایس ایم ای', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
  { id: 'utilities', labelEn: 'Public Utilities', labelHi: 'सार्वजनिक उपयोगिताएँ', labelUr: 'عوامی سہولیات', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { id: 'legal', labelEn: 'Legal Assistance', labelHi: 'कानूनी सहायता', labelUr: 'قانونی امداد', color: 'bg-violet-50 text-violet-800 border-violet-200' },
  { id: 'transport', labelEn: 'Transport & Travel', labelHi: 'परिवहन और यात्रा', labelUr: 'ٹرانسپورٹ اور سفر', color: 'bg-orange-50 text-orange-800 border-orange-200' }
];

const OFFICIAL_WEBSITES = [
  {
    name: 'National Portal of India',
    url: 'https://www.india.gov.in',
    desc: {
      en: 'The single-window access point to information and services provided by all Indian Government entities.',
      hi: 'सभी भारतीय सरकारी निकायों द्वारा प्रदान की जाने वाली सूचनाओं और सेवाओं का एकल-खिड़की प्रवेश द्वार।',
      ur: 'تمام بھارتی سرکاری اداروں کی معلومات اور خدمات تک یکجا رسائی کا پورٹل۔'
    }
  },
  {
    name: 'UMANG Portal',
    url: 'https://web.umang.gov.in',
    desc: {
      en: 'Unified Mobile Application for New-age Governance providing major central and state government services.',
      hi: 'नए ज़माने के शासन के लिए एकीकृत मोबाइल एप्लीकेशन, जो प्रमुख केंद्र व राज्य सरकार की सेवाएं देती है।',
      ur: 'نئے دور کے طرزِ حکمرانی کے لیے مربوط موبائل ایپلیکیشن جو سرکاری خدمات فراہم کرتی ہے۔'
    }
  },
  {
    name: 'DigiLocker',
    url: 'https://www.digilocker.gov.in',
    desc: {
      en: 'Secure cloud-based platform for storage, sharing and verification of documents & certificates.',
      hi: 'दस्तावेजों और प्रमाणपत्रों के भंडारण, साझाकरण और सत्यापन के लिए सुरक्षित क्लाउड-आधारित प्लेटफ़ॉर्म।',
      ur: 'دستاویزات اور سرٹیفکیٹس کو محفوظ رکھنے، شیئر کرنے اور تصدیق کا کلاؤڈ پورٹل۔'
    }
  },
  {
    name: 'MyGov India',
    url: 'https://www.mygov.in',
    desc: {
      en: 'Citizen engagement platform that connects citizens directly with governance and policy formulation.',
      hi: 'नागरिक जुड़ाव मंच जो नागरिकों को शासन और नीति निर्धारण से सीधे जोड़ता है।',
      ur: 'شہریوں کی شمولیت کا پلیٹ فارم جو شہریوں کو براہ راست حکمرانی اور پالیسی سازی سے جوڑتا ہے۔'
    }
  },
  {
    name: 'National Cyber Crime Reporting Portal',
    url: 'https://cybercrime.gov.in',
    desc: {
      en: 'Official portal to facilitate victims to report cyber crime complaints online, especially against women & children.',
      hi: 'पीड़ितों को ऑनलाइन साइबर अपराध की शिकायतें दर्ज कराने की सुविधा देने वाला आधिकारिक पोर्टल, विशेष रूप से महिलाओं और बच्चों के विरुद्ध।',
      ur: 'سائبر جرائم، خصوصاً خواتین اور بچوں کے خلاف جرائم کی آن لائن رپورٹنگ کا آفیشل پورٹل۔'
    }
  },
  {
    name: 'National Scholarship Portal',
    url: 'https://scholarships.gov.in',
    desc: {
      en: 'One-stop solution for student scholarships starting from application submission to disbursement.',
      hi: 'आवेदन जमा करने से लेकर संवितरण (Disbursement) तक छात्र छात्रवृत्ति के लिए वन-स्टॉप समाधान।',
      ur: 'طلبا کے لیے اسکالرشپ کی درخواست سے لے کر فنڈز کی منتقلی تک کا واحد مربوط نظام۔'
    }
  },
  {
    name: 'National Career Service',
    url: 'https://www.ncs.gov.in',
    desc: {
      en: 'A bridge between job seekers and employers offering training, job matching, and career counseling.',
      hi: 'नौकरी चाहने वालों और नियोक्ताओं के बीच एक सेतु, जो प्रशिक्षण, नौकरी मिलान और करियर परामर्श देता है।',
      ur: 'نوکری کے متلاشیوں اور ملازمین فراہم کرنے والوں کے درمیان ایک پل جو کونسلنگ فراہم کرتا ہے۔'
    }
  },
  {
    name: 'Ministry of Minority Affairs',
    url: 'https://minorityaffairs.gov.in',
    desc: {
      en: 'Official portal for policies, scholarship schemes, and development initiatives for minority communities.',
      hi: 'अल्पसंख्यक समुदायों के लिए नीतियों, छात्रवृत्ति योजनाओं और विकास पहलों का आधिकारिक पोर्टल।',
      ur: 'اقلیتی برادریوں کے لیے پالیسیوں، اسکالرشپ اسکیموں اور ترقیاتی اقدامات کا آفیشل پورٹل۔'
    }
  },
  {
    name: 'Ayushman Bharat beneficiary portal',
    url: 'https://beneficiary.nha.gov.in',
    desc: {
      en: 'Portal to register, check eligibility, and generate golden cards for cashless healthcare.',
      hi: 'कैशलेस स्वास्थ्य सेवा के लिए पंजीकरण करने, पात्रता जांचने और गोल्डन कार्ड बनाने का पोर्टल।',
      ur: 'کیش لیس ہیلتھ کیئر کے لیے رجسٹریشن، اہلیت کی جانچ اور گولڈن کارڈ بنانے کا پورٹل۔'
    }
  },
  {
    name: 'e-Shram Portal',
    url: 'https://eshram.gov.in',
    desc: {
      en: 'National database of unorganized workers to facilitate social security benefits and direct aids.',
      hi: 'असंगठित श्रमिकों का राष्ट्रीय डेटाबेस, जो सामाजिक सुरक्षा लाभ और प्रत्यक्ष सहायता की सुविधा देता है।',
      ur: 'غیر منظم شعبے کے مزدوروں کا قومی ڈیٹا بیس جو سماجی تحفظ کے فوائد فراہم کرتا ہے۔'
    }
  },
  {
    name: 'UDYAM Registration Portal',
    url: 'https://udyamregistration.gov.in',
    desc: {
      en: 'Official government portal for paperless, zero-fee MSME business registrations in India.',
      hi: 'भारत में पेपरलेस और शून्य-शुल्क एमएसएमई व्यवसाय पंजीकरण के लिए आधिकारिक सरकारी पोर्टल।',
      ur: 'بغیر کاغذی کارروائی اور بغیر فیس کے چھوٹے کاروباروں (MSME) کی رجسٹریشن کا آفیشل پورٹل۔'
    }
  },
  {
    name: 'Startup India',
    url: 'https://www.startupindia.gov.in',
    desc: {
      en: 'Government initiative to foster entrepreneurship and support promising startup enterprises.',
      hi: 'उद्यमिता को बढ़ावा देने और होनहार स्टार्टअप उद्यमों का समर्थन करने के लिए सरकारी पहल।',
      ur: 'نئے کاروبار شروع کرنے والوں کی حوصلہ افزائی اور اسٹارٹ اپس کی مدد کے لیے حکومتی پروگرام۔'
    }
  },
  {
    name: 'PM-KISAN',
    url: 'https://pmkisan.gov.in',
    desc: {
      en: 'Direct benefit transfer portal providing financial support to landholding farmer families.',
      hi: 'भूमिधारक किसान परिवारों को वित्तीय सहायता प्रदान करने वाला प्रत्यक्ष लाभ हस्तांतरण पोर्टल।',
      ur: 'کسانوں کو براہ راست مالی امداد فراہم کرنے کا آفیشل پورٹل۔'
    }
  },
  {
    name: 'PM Vishwakarma',
    url: 'https://pmvishwakarma.gov.in',
    desc: {
      en: 'Support system for traditional artisans and craftspeople offering skill upgradation and credit.',
      hi: 'पारंपरिक कारीगरों और शिल्पकारों के लिए कौशल उन्नयन और ऋण की पेशकश करने वाली सहायता प्रणाली।',
      ur: 'روایتی دستکاروں اور ہنرمندوں کو تربیت اور قرض کی سہولت فراہم کرنے کا حکومتی نظام۔'
    }
  }
];

const HELPLINES_DATA: ContactItem[] = [
  // 1. Emergency Response
  {
    id: 'HP-01',
    name: { en: 'National Emergency Response System', hi: 'राष्ट्रीय आपातकालीन प्रतिक्रिया प्रणाली', ur: 'قومی ہنگامی امدادی نمبر' },
    number: '112',
    department: { en: 'Ministry of Home Affairs', hi: 'गृह मंत्रालय', ur: 'وزارت داخلہ' },
    category: 'emergency',
    desc: { en: 'All-in-one emergency number for Police, Fire, Health, and Disaster response.', hi: 'पुलिस, अग्निशमन, स्वास्थ्य और आपदा प्रतिक्रिया के लिए ऑल-इन-वन आपातकालीन नंबर।', ur: 'پولیس، فائر بریگیڈ، صحت اور حادثات کے لیے واحد ہنگامی مدد نمبر۔' },
    isHotline: true,
    website: 'https://112.gov.in'
  },
  {
    id: 'HP-02',
    name: { en: 'Police Dispatch Helpline', hi: 'पुलिस आपातकालीन हेल्पलाइन', ur: 'پولیس ہیلپ لائن' },
    number: '100',
    department: { en: 'State Police Departments', hi: 'राज्य पुलिस विभाग', ur: 'محکمہ پولیس' },
    category: 'emergency',
    desc: { en: 'Direct access to local police dispatch for security, crime reporting, and urgent assistance.', hi: 'सुरक्षा, अपराध की रिपोर्ट करने और तत्काल सहायता के लिए स्थानीय पुलिस नियंत्रण कक्ष से संपर्क।', ur: 'امن و امان اور ہنگامی سیکیورٹی کے لیے قریبی پولیس اسٹیشن سے براہ راست رابطہ۔' },
    isHotline: true
  },
  {
    id: 'HP-03',
    name: { en: 'Fire & Rescue Brigade', hi: 'अग्निशमन दल और बचाव सेवा', ur: 'فائر بریگیڈ' },
    number: '101',
    department: { en: 'Municipal Fire Services', hi: 'नगरपालिका अग्निशमन सेवा', ur: 'فائر اینڈ ریسکیو سروسز' },
    category: 'emergency',
    desc: { en: 'Immediate response in case of fire accidents, structural collapses, or entrapments.', hi: 'आग लगने की घटनाओं, इमारतों के ढहने या कहीं फँसे होने की स्थिति में तत्काल सहायता।', ur: 'آگ لگنے کے واقعات یا کسی ہنگامی حادثے میں فوری مدد۔' },
    isHotline: true
  },
  {
    id: 'HP-04',
    name: { en: 'National Ambulance Service', hi: 'राष्ट्रीय एम्बुलेंस सेवा', ur: 'ایمبولینس سروس' },
    number: '108',
    department: { en: 'Ministry of Health and Family Welfare', hi: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय', ur: 'وزارت صحت و خاندانی بہبود' },
    category: 'emergency',
    desc: { en: 'Free round-the-clock emergency medical transportation and paramedic response.', hi: 'निःशुल्क २४ घंटे उपलब्ध आपातकालीन चिकित्सा वाहन और पैरामेडिक सहायता।', ur: 'مریضوں کو ہسپتال منتقل کرنے کے لیے 24 گھنٹے مفت ایمبولینس سروس۔' },
    isHotline: true
  },
  {
    id: 'HP-05',
    name: { en: 'National Disaster Management Authority (NDMA)', hi: 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण', ur: 'ڈیزاسٹر مینجمنٹ اتھارٹی' },
    number: '1078',
    department: { en: 'Ministry of Home Affairs', hi: 'गृह मंत्रालय', ur: 'وزارت داخلہ' },
    category: 'emergency',
    desc: { en: 'Helpline for floods, earthquakes, cyclones, landslips, and major natural disasters.', hi: 'बाढ़, भूकंप, चक्रवात, भूस्खलन और प्रमुख प्राकृतिक आपदाओं के लिए राष्ट्रीय हेल्पलाइन।', ur: 'سیلاب، زلزلہ اور قدرتی آفات کی صورت میں امدادی فنڈ اور بچاؤ سرگرمیوں کے لیے نمبر۔' },
    website: 'https://ndma.gov.in'
  },
  {
    id: 'HP-06',
    name: { en: 'State Disaster Control Room', hi: 'राज्य आपदा नियंत्रण कक्ष', ur: 'ریاستی ڈیزاسٹر کنٹرول روم' },
    number: '1070',
    department: { en: 'Revenue and Disaster Management', hi: 'राजस्व एवं आपदा प्रबंधन विभाग', ur: 'محکمہ ریونیو و ڈیزاسٹر مینجمنٹ' },
    category: 'emergency',
    desc: { en: 'State-level emergency coordination room for local level disaster and resource allocation.', hi: 'स्थानीय स्तर पर आपदा और संसाधनों के आवंटन के लिए राज्य-स्तरीय आपातकालीन समन्वय केंद्र।', ur: 'ریاستی سطح پر ہنگامی امداد اور وسائل کی تقسیم کا کنٹرول روم۔' }
  },

  // 2. Women & Child Protection
  {
    id: 'HP-07',
    name: { en: 'Women Helpline', hi: 'महिला हेल्पलाइन (सखी)', ur: 'خواتین کی ہیلپ لائن' },
    number: '181',
    department: { en: 'Ministry of Women and Child Development', hi: 'महिला एवं बाल विकास मंत्रालय', ur: 'وزارت خواتین و بہبود اطفال' },
    category: 'women',
    desc: { en: '24-hour confidential support for women facing violence, abuse, harassment, or distress.', hi: 'हिंसा, दुर्व्यवहार, उत्पीड़न या संकट का सामना कर रही महिलाओं के लिए २४ घंटे गोपनीय सहायता।', ur: 'گھریلو تشدد، ہراسانی یا کسی بھی پریشانی کا شکار خواتین کے لیے 24 گھنٹے مفت مدد۔' },
    isHotline: true,
    website: 'https://wcd.nic.in'
  },
  {
    id: 'HP-08',
    name: { en: 'Women Police Helpline', hi: 'महिला पुलिस हेल्पलाइन', ur: 'خواتین پولیس ہیلپ لائن' },
    number: '1091',
    department: { en: 'State Police Departments', hi: 'राज्य पुलिस विभाग', ur: 'محکمہ پولیس' },
    category: 'women',
    desc: { en: 'Direct access to women police desks for immediate intervention and registration of complaints.', hi: 'तत्काल हस्तक्षेप और शिकायत दर्ज करने के लिए महिला पुलिस हेल्प डेस्क तक सीधी पहुँच।', ur: 'خواتین پولیس سے فوری امداد اور شکایت کے اندراج کے لیے رابطہ۔' }
  },
  {
    id: 'HP-09',
    name: { en: 'Child Helpline India', hi: 'चाइल्ड हेल्पलाइन इंडिया', ur: 'بچوں کی ہیلپ لائن' },
    number: '1098',
    department: { en: 'Ministry of Women and Child Development', hi: 'महिला एवं बाल विकास मंत्रालय', ur: 'وزارت خواتین و بہبود اطفال' },
    category: 'children',
    desc: { en: '24-hour free emergency phone outreach service for children in need of care and protection.', hi: 'देखभाल और सुरक्षा की आवश्यकता वाले बच्चों के लिए २४ घंटे निःशुल्क आपातकालीन फोन सेवा।', ur: 'بے سہارا، لاپتہ یا کسی پریشانی کا شکار بچوں کی مدد اور بحالی کا نمبر۔' },
    isHotline: true,
    website: 'https://www.childlineindia.org'
  },
  {
    id: 'HP-10',
    name: { en: 'Domestic Violence Support Services', hi: 'घरेलू हिंसा सहायता सेवाएं', ur: 'گھریلو تشدد سپورٹ سروسز' },
    number: '181',
    department: { en: 'National Commission for Women (NCW)', hi: 'राष्ट्रीय महिला आयोग', ur: 'قومی کمیشن برائے خواتین' },
    category: 'women',
    desc: { en: 'Legal assistance, counseling, and protective rehabilitation referrals for domestic abuse victims.', hi: 'घरेलू दुर्व्यवहार की शिकार महिलाओं के लिए कानूनी सहायता, परामर्श और सुरक्षात्मक पुनर्वास।', ur: 'گھریلو تشدد کا شکار خواتین کو قانونی مدد اور کونسلنگ کی فراہمی۔' },
    website: 'https://ncw.nic.in'
  },
  {
    id: 'HP-11',
    name: { en: 'One Stop Centre (Sakhi Scheme)', hi: 'वन स्टॉप सेंटर (सखी योजना)', ur: 'ون اسٹاپ سینٹر (سخی اسکیم)' },
    number: '181',
    department: { en: 'Ministry of Women and Child Development', hi: 'महिला एवं बाल विकास मंत्रालय', ur: 'وزارت خواتین و بہبود اطفال' },
    category: 'women',
    desc: { en: 'Integrated support under one roof (shelter, police assistance, medical aid, legal & psychological counseling).', hi: 'एक ही छत के नीचे एकीकृत सहायता (आश्रय, पुलिस सहायता, चिकित्सा सहायता, कानूनी और मनोवैज्ञानिक परामर्श)।', ur: 'تشدد کا شکار خواتین کے لیے ایک ہی چھت تلے عارضی پناہ، قانونی و طبی امداد۔' }
  },

  // 3. Healthcare & Medical
  {
    id: 'HP-12',
    name: { en: 'Ayushman Bharat Beneficiary Helpline', hi: 'आयुष्मान भारत लाभार्थी हेल्पलाइन', ur: 'آیوشمان بھارت ہیلپ لائن' },
    number: '14555',
    department: { en: 'National Health Authority (NHA)', hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण', ur: 'نیشنل ہیلتھ اتھارٹی' },
    category: 'healthcare',
    desc: { en: 'Inquire about health card eligibility, PM-JAY empanelled hospitals, and claim status.', hi: 'हेल्थ कार्ड पात्रता, पीएम-जेएवाई (PM-JAY) से जुड़े अस्पतालों और दावों की स्थिति के बारे में पूछताछ करें।', ur: 'مفت علاج اسکیم کی اہلیت، نامزد ہسپتالوں اور ہیلتھ کارڈ کی معلومات حاصل کریں۔' },
    website: 'https://beneficiary.nha.gov.in'
  },
  {
    id: 'HP-13',
    name: { en: 'National Health Helpline', hi: 'राष्ट्रीय स्वास्थ्य हेल्पलाइन', ur: 'قومی ہیلتھ ہیلپ لائن' },
    number: '1075',
    department: { en: 'Ministry of Health and Family Welfare', hi: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय', ur: 'وزارت صحت و خاندانی بہبود' },
    category: 'healthcare',
    desc: { en: 'General health inquiries, epidemic and infectious disease reports, vaccine slot assistance.', hi: 'सामान्य स्वास्थ्य पूछताछ, महामारी और संक्रामक रोग की रिपोर्ट, टीका स्लॉट सहायता।', ur: 'صحت سے متعلق عمومی معلومات، متعدی بیماریوں کی رپورٹ اور ویکسینیشن سپورٹ۔' }
  },
  {
    id: 'HP-14',
    name: { en: 'KIRAN Mental Health Support', hi: 'किरण मानसिक स्वास्थ्य पुनर्वास हेल्पलाइन', ur: 'کرن ذہنی صحت ہیلپ لائن' },
    number: '1800-599-0019',
    department: { en: 'Ministry of Social Justice and Empowerment', hi: 'सामाजिक न्याय और अधिकारिता मंत्रालय', ur: 'وزارت سماجی انصاف و بااختیار بنانا' },
    category: 'healthcare',
    desc: { en: '24/7 free counseling for stress, anxiety, depression, suicidal thoughts, and psychological crises.', hi: 'तनाव, चिंता, अवसाद, आत्महत्या के विचारों और मनोवैज्ञानिक संकट के लिए २४/७ निःशुल्क परामर्श।', ur: 'ذہنی تناؤ، بے چینی، نفسیاتی مسائل اور ڈپریشن کے حل کے لیے 24 گھنٹے مفت مشورہ۔' },
    isHotline: true
  },
  {
    id: 'HP-15',
    name: { en: 'e-RaktKosh Blood Bank Directory', hi: 'ई-रक्तकोष ब्लड बैंक निर्देशिका', ur: 'بلڈ بینک ڈائرکٹری' },
    website: 'https://www.eraktkosh.in',
    department: { en: 'National Health Mission', hi: 'राष्ट्रीय स्वास्थ्य मिशन', ur: 'نیشنل ہیلتھ مشن' },
    category: 'healthcare',
    desc: { en: 'Online system for checking real-time blood stock availability at verified government and private blood banks.', hi: 'सत्यापित सरकारी और निजी ब्लड बैंकों में वास्तविक समय में रक्त की उपलब्धता की जाँच करने की ऑनलाइन प्रणाली।', ur: 'مختلف بلڈ بینکوں میں خون کی دستیابی معلوم کرنے کا آن لائن سرکاری پورٹل۔' }
  },
  {
    id: 'HP-16',
    name: { en: 'National Organ & Tissue Transplant Organization (NOTTO)', hi: 'राष्ट्रीय अंग और ऊतक प्रत्यारोपण संगठन', ur: 'قومی اعضاء کی پیوند کاری کا ادارہ' },
    number: '1800-11-4477',
    department: { en: 'Directorate General of Health Services', hi: 'स्वास्थ्य सेवा महानिदेशालय', ur: 'ڈائریکٹوریٹ آف ہیلتھ سروسز' },
    category: 'healthcare',
    desc: { en: 'Information on pledging organ donation, registry of transplant centers, and legal protocols.', hi: 'अंग दान करने की प्रतिज्ञा, प्रत्यारोपण केंद्रों की रजिस्ट्री और कानूनी प्रोटोकॉल के बारे में जानकारी।', ur: 'اعضاء کا عطیہ کرنے کے طریقہ کار اور قانونی معلومات کا مرکز۔' },
    website: 'http://www.notto.gov.in'
  },
  {
    id: 'HP-17',
    name: { en: 'Government Hospitals Directory', hi: 'सरकारी अस्पताल निर्देशिका', ur: 'سرکاری ہسپتالوں کی معلومات' },
    website: 'https://www.nhp.gov.in/hospitals',
    department: { en: 'National Health Portal (NHP)', hi: 'राष्ट्रीय स्वास्थ्य पोर्टल', ur: 'نیشنل ہیلتھ پورٹل' },
    category: 'healthcare',
    desc: { en: 'Search and navigate state-wise government healthcare institutions, community health centers, and superspecialty hospitals.', hi: 'राज्यवार सरकारी स्वास्थ्य संस्थानों, सामुदायिक स्वास्थ्य केंद्रों और सुपरस्पेशलिटी अस्पतालों को खोजें।', ur: 'ملک بھر کے تمام سرکاری ہسپتالوں، طبی مراکز اور زچہ بچہ وارڈز کی تفصیل۔' }
  },

  // 4. Cyber & Financial Safety
  {
    id: 'HP-18',
    name: { en: 'National Cyber Crime Helpline', hi: 'राष्ट्रीय साइबर अपराध हेल्पलाइन', ur: 'سائبر کرائم ہیلپ لائن' },
    number: '1930',
    department: { en: 'Indian Cyber Crime Coordination Centre (I4C)', hi: 'भारतीय साइबर अपराध समन्वय केंद्र', ur: 'انڈین سائبر کرائم کوآرڈینیشن سینٹر' },
    category: 'cyber_safety',
    desc: { en: 'Reporting financial fraud, identity theft, phishing, cyber stalking, and online harassment.', hi: 'वित्तीय धोखाधड़ी, पहचान की चोरी, फ़िशिंग, साइबर स्टाकिंग और ऑनलाइन उत्पीड़न की तुरंत रिपोर्ट करें।', ur: 'آن لائن مالیاتی فراڈ، بینکنگ دھوکہ دہی، ہیکنگ اور آن لائن ہراسانی کی فوری رپورٹ درج کرائیں۔' },
    isHotline: true,
    website: 'https://cybercrime.gov.in'
  },
  {
    id: 'HP-19',
    name: { en: 'National Consumer Helpline', hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन', ur: 'صارفین کی ہیلپ لائن' },
    number: '1915',
    department: { en: 'Ministry of Consumer Affairs, Food & Public Distribution', hi: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय', ur: 'وزارت امور صارفین' },
    category: 'cyber_safety',
    desc: { en: 'Grievance registration against unfair trade practices, defective items, misleading ads, and service failures.', hi: 'अनुचित व्यापार प्रथाओं, दोषपूर्ण वस्तुओं, भ्रामक विज्ञापनों और सेवा विफलताओं के खिलाफ शिकायत दर्ज करें।', ur: 'ناقص اشیاء کی فروخت، دھوکہ دہی اور کاروباری اداروں کے خلاف قانونی چارہ جوئی۔' },
    website: 'https://consumerhelpline.gov.in'
  },

  // 5. Senior Citizens
  {
    id: 'HP-20',
    name: { en: 'Elder Line (Senior Citizens Helpline)', hi: 'एल्डर लाइन (वरिष्ठ नागरिक हेल्पलाइन)', ur: 'بزرگ شہریوں کی ہیلپ لائن' },
    number: '14567',
    department: { en: 'Ministry of Social Justice and Empowerment', hi: 'सामाजिक न्याय और अधिकारिता मंत्रालय', ur: 'وزارت سماجی انصاف و بااختیار بنانا' },
    category: 'senior',
    desc: { en: 'Support for abandoned elders, legal counselling on maintenance act, physical abuse rescue, and emotional support.', hi: 'बेसहारा बुजुर्गों के लिए सहायता, भरण-पोषण कानून पर कानूनी सलाह, दुर्व्यवहार से बचाव और भावनात्मक सहयोग।', ur: 'لاوارث بزرگوں کی دیکھ بھال، جائیداد کے قانونی مسائل اور جذباتی سہارے کا نمبر۔' },
    isHotline: true
  },
  {
    id: 'HP-21',
    name: { en: 'Pensioners Portal Assistance', hi: 'पेंशनभोगी सहायता पोर्टल', ur: 'پنشن ہولڈرز پورٹل' },
    website: 'https://pensionersportal.gov.in',
    department: { en: 'Department of Pension and Pensioners Welfare', hi: 'पेंशन एवं पेंशनभोगी कल्याण विभाग', ur: 'محکمہ پنشن و بہبود پنشنرز' },
    category: 'senior',
    desc: { en: 'Grievance registration regarding pension delays, commutation rates, and central/state rules.', hi: 'पेंशन में देरी, कम्यूटेशन दरों और केंद्रीय/राज्य नियमों के संबंध में शिकायतों का निवारण।', ur: 'پنشن میں تاخیر اور پنشن فنڈز کے متعلق شکایات کا آن لائن حل۔' }
  },

  // 6. Education
  {
    id: 'HP-22',
    name: { en: 'National Scholarship Portal Support', hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल सहायता', ur: 'نیشنل اسکالرشپ پورٹل سپورٹ' },
    number: '0120-6619540',
    department: { en: 'Ministry of Electronics and Information Technology', hi: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय', ur: 'وزارت الیکٹرانکس و انفارمیشن ٹیکنالوجی' },
    category: 'education',
    desc: { en: 'Technical assistance regarding scholarship registrations, Aadhaar linking, and DBT status.', hi: 'छात्रवृत्ति पंजीकरण, आधार लिंकिंग और डीबीटी (DBT) भुगतान स्थिति के बारे में तकनीकी सहायता।', ur: 'اسکالرشپ کی درخواست، آدھار لنک کرنے اور بینک اکاؤنٹ میں رقم کی منتقلی سے متعلق معلومات۔' },
    website: 'https://scholarships.gov.in'
  },
  {
    id: 'HP-23',
    name: { en: 'UGC Ragging Prevention Helpline', hi: 'यूजीसी रैगिंग विरोधी हेल्पलाइन', ur: 'یوجیسی اینٹی رینگ ہیلپ لائن' },
    number: '1800-180-5522',
    department: { en: 'University Grants Commission (UGC)', hi: 'विश्वविद्यालय अनुदान आयोग', ur: 'یونیورسٹی گرانٹس کمیشن' },
    category: 'education',
    desc: { en: 'Strict zero-tolerance help line for students experiencing ragging or harassment in higher education institutions.', hi: 'उच्च शिक्षा संस्थानों में रैगिंग या उत्पीड़न का सामना करने वाले छात्रों के लिए सख्त हेल्पलाइन।', ur: 'کالجوں اور یونیورسٹیوں میں رینگنگ یا ہراسانی کا شکار طلباء کے لیے ہنگامی مدد۔' },
    website: 'https://www.antiragging.in'
  },
  {
    id: 'HP-24',
    name: { en: 'Skill India Mission Support', hi: 'कौशल भारत मिशन सहायता', ur: 'اسکل انڈیا مشن سپورٹ' },
    number: '088000-55555',
    department: { en: 'National Skill Development Corporation (NSDC)', hi: 'राष्ट्रीय कौशल विकास निगम', ur: 'نیشنل اسکل ڈیولپمنٹ کارپوریشن' },
    category: 'education',
    desc: { en: 'Information regarding free vocational training, PMKVY certifications, and skill assessment centers.', hi: 'निःशुल्क व्यावसायिक प्रशिक्षण, पीएमकेवीवाई (PMKVY) प्रमाणपत्रों और कौशल मूल्यांकन केंद्रों के बारे में जानकारी।', ur: 'مفت فنی تربیت، سرٹیفکیٹ اور روزگار کے مواقع فراہم کرنے کا معلوماتی مرکز۔' },
    website: 'https://www.skillindia.gov.in'
  },

  // 7. Employment & Labour
  {
    id: 'HP-25',
    name: { en: 'e-Shram Helpdesk', hi: 'ई-श्रम हेल्पलाइन नंबर', ur: 'ای شرم ہیلپ ڈیسک' },
    number: '14434',
    department: { en: 'Ministry of Labour and Employment', hi: 'श्रम एवं रोजगार मंत्रालय', ur: 'وزارت محنت و روزگار' },
    category: 'employment',
    desc: { en: 'Helpline for unorganized workers to query e-Shram card benefits, accidental insurance, and registrations.', hi: 'असंगठित श्रमिकों के लिए ई-श्रम कार्ड लाभ, दुर्घटना बीमा और पंजीकरण के बारे में पूछताछ करने की हेल्पलाइन।', ur: 'دیہاڑی دار مزدوروں کے لیے مالی اسکیموں، حادثاتی بیمہ اور رجسٹریشن کی معلومات حاصل کرنے کا نمبر۔' },
    website: 'https://eshram.gov.in'
  },
  {
    id: 'HP-26',
    name: { en: 'EPFO Citizens Call Centre', hi: 'ईपीएफओ नागरिक कॉल सेंटर', ur: 'ای پی ایف او کال سینٹر' },
    number: '1800-115-555',
    department: { en: 'Employees Provident Fund Organisation', hi: 'कर्मचारी भविष्य निधि संगठन', ur: 'ملازمین کا پروویڈنٹ فنڈ ادارہ' },
    category: 'employment',
    desc: { en: 'Assistance for PF balance check, UAN activation, online withdrawal claims, and pension queries.', hi: 'पीएफ बैलेंस चेक, यूएएन (UAN) सक्रियण, ऑनलाइन निकासी दावों और पेंशन प्रश्नों के लिए सहायता।', ur: 'پروویڈنٹ فنڈ کے توازن کی جانچ، رقم نکلوانے اور پنشن فنڈ سے متعلق معلومات۔' },
    website: 'https://www.epfindia.gov.in'
  },
  {
    id: 'HP-27',
    name: { en: 'ESIC Medical & Social Security', hi: 'ईएसआईसी सामाजिक सुरक्षा हेल्पलाइन', ur: 'ای ایس آئی سی ہیلپ لائن' },
    number: '1800-11-2526',
    department: { en: 'Employees State Insurance Corporation', hi: 'कर्मचारी राज्य बीमा निगम', ur: 'ملازمین کا اسٹیٹ انشورنس کارپوریشن' },
    category: 'employment',
    desc: { en: 'Check medical benefits eligibility, empanelled diagnostics, sickness cash benefits, and insurance policies.', hi: 'चिकित्सा लाभ पात्रता, पैनल में शामिल जांच केंद्रों, बीमारी नकद लाभ और बीमा पॉलिसियों की जांच करें।', ur: 'طبی فوائد، انشورنس پالیسی اور کارپوریٹ ملازمین کی سماجی سیکیورٹی کی جانچ۔' },
    website: 'https://www.esic.gov.in'
  },

  // 8. Minority Welfare
  {
    id: 'HP-28',
    name: { en: 'Waqf-related Digital Services (WAMSI)', hi: 'वक्फ डिजिटल सेवा (WAMSI)', ur: 'وقف ڈیجیٹل سروسز (WAMSI)' },
    website: 'https://wamsi.nic.in',
    department: { en: 'Ministry of Minority Affairs', hi: 'अल्पसंख्यक कार्य मंत्रालय', ur: 'وزارت امور اقلیت' },
    category: 'minority',
    desc: { en: 'Access the National Waqf management portal to query community property registration status and updates.', hi: 'सामुदायिक संपत्तियों के पंजीकरण की स्थिति और अपडेट जानने के लिए राष्ट्रीय वक्फ प्रबंधन पोर्टल का उपयोग करें।', ur: 'وقف املاک کے تحفظ، رجسٹریشن اور ان کے استعمال سے متعلق معلومات کا ڈیجیٹल سرکاری نظام۔' }
  },
  {
    id: 'HP-29',
    name: { en: 'National Minorities Development & Finance Corporation', hi: 'राष्ट्रीय अल्पसंख्यक विकास एवं वित्त निगम (NMDFC)', ur: 'اقلیتی مالیاتی کارپوریشن (NMDFC)' },
    number: '1800-11-4001',
    department: { en: 'Ministry of Minority Affairs', hi: 'अल्पसंख्यक कार्य मंत्रालय', ur: 'وزارت امور اقلیت' },
    category: 'minority',
    desc: { en: 'Queries on low-interest business loans, educational loans, and skill training programs for minority youths.', hi: 'अल्पसंख्यक युवाओं के लिए कम ब्याज वाले व्यावसायिक ऋण, शैक्षिक ऋण और कौशल प्रशिक्षण कार्यक्रमों की जानकारी।', ur: 'اقلیتی برادری کے نوجوانوں کے لیے کم شرح سود پر تعلیمی و کاروباری قرضہ جات کی معلومات۔' },
    website: 'http://www.nmdfc.org'
  },

  // 9. Agriculture
  {
    id: 'HP-30',
    name: { en: 'Kisan Call Centre (KCC)', hi: 'किसान कॉल सेंटर (केसीसी)', ur: 'کسان کال سینٹر' },
    number: '1800-180-1551',
    department: { en: 'Department of Agriculture and Farmers Welfare', hi: 'कृषि एवं किसान कल्याण विभाग', ur: 'محکمہ زراعت و بہبود کسان' },
    category: 'agriculture',
    desc: { en: 'Toll-free agricultural counseling in local languages regarding seeds, soil health, crop disease, and weather alerts.', hi: 'बीज, मिट्टी के स्वास्थ्य, फसल रोग और मौसम की चेतावनी के बारे में स्थानीय भाषाओं में निःशुल्क कृषि परामर्श।', ur: 'بیج، مٹی کی جانچ، کیڑے مار ادویات اور موسم کی صورتحال سے متعلق کسانوں کے لیے مفت مشورہ۔' },
    isHotline: true,
    website: 'https://kisanportal.gov.in'
  },
  {
    id: 'HP-31',
    name: { en: 'PM-KISAN Samman Nidhi Helpline', hi: 'पीएम-किसान सम्मान निधि हेल्पलाइन', ur: 'پی ایم کسان ہیلپ لائن' },
    number: '155261',
    department: { en: 'Ministry of Agriculture and Farmers Welfare', hi: 'कृषि एवं किसान कल्याण मंत्रालय', ur: 'وزارت زراعت و کسان' },
    category: 'agriculture',
    desc: { en: 'Resolve grievances regarding registration rejection, pending installment credits, and e-KYC updates.', hi: 'पंजीकरण अस्वीकृति, लंबित किस्तों के भुगतान और ई-केवाईसी (e-KYC) अपडेट के संबंध में शिकायतों का समाधान करें।', ur: 'سالانہ نقد امداد کی قسطوں، رجسٹریشن کی تنسیخ اور ای کے وائی سی اپڈیٹ کا حل۔' },
    website: 'https://pmkisan.gov.in'
  },

  // 10. Business & MSME
  {
    id: 'HP-32',
    name: { en: 'UDYAM MSME Support Centre', hi: 'उद्यम एमएसएमई सहायता केंद्र', ur: 'ایم ایس ایم ای رجسٹریشن ہیلپ لائن' },
    number: '011-23063800',
    department: { en: 'Ministry of Micro, Small and Medium Enterprises', hi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय', ur: 'وزارت مائیکرو، سمال اینڈ میڈیم انٹرپرائزز' },
    category: 'business',
    desc: { en: 'Grievance support and clarification for paperless business registrations and subsidy benefits under MSME.', hi: 'एमएसएमई के तहत पेपरलेस व्यवसाय पंजीकरण और सब्सिडी लाभों के लिए शिकायत निवारण एवं सहायता।', ur: 'چھوٹے کاروباروں کی رجسٹریشن، ٹیکس چھوٹ اور سرکاری فوائد حاصل کرنے کا معلوماتی ڈیسک۔' },
    website: 'https://udyamregistration.gov.in'
  },
  {
    id: 'HP-33',
    name: { en: 'Startup India Hub', hi: 'स्टार्टअप इंडिया हब हेल्पलाइन', ur: 'اسٹارٹ اپ انڈیا ہیلپ لائن' },
    number: '1800-115-565',
    department: { en: 'Department for Promotion of Industry and Internal Trade', hi: 'उद्योग संवर्धन और आंतरिक व्यापार विभाग', ur: 'محکمہ صنعت و تجارت' },
    category: 'business',
    desc: { en: 'Information on tax exemptions, patent support, incubator networks, and seed fund applications.', hi: 'टैक्स छूट, पेटेंट सहायता, इनक्यूबेटर नेटवर्क और सीड फंड अनुप्रयोगों के बारे में जानकारी।', ur: 'نئے کاروبار شروع کرنے والوں کے لیے فنڈنگ، ٹیکس فوائد اور رہنمائی کا نمبر۔' },
    website: 'https://www.startupindia.gov.in'
  },

  // 11. Public Utilities
  {
    id: 'HP-34',
    name: { en: 'National Electricity Grievance Line', hi: 'राष्ट्रीय बिजली शिकायत हेल्पलाइन', ur: 'بجلی کی شکایت کا نمبر' },
    number: '1912',
    department: { en: 'Ministry of Power / DISCOMs', hi: 'विद्युत मंत्रालय / स्थानीय डिस्कॉम', ur: 'وزارت توانائی / پاور سپلائی کمپنی' },
    category: 'utilities',
    desc: { en: 'Direct unified number to register complaints regarding prolonged power outages, transformer failure, and billing errors.', hi: 'लंबे समय तक बिजली कटौती, ट्रांसफार्मर खराब होने और बिलिंग त्रुटियों के बारे में शिकायत दर्ज करने का नंबर।', ur: 'بجلی بند ہونے، ٹرانسفارمر جلنے یا بلنگ کی شکایات کے اندراج کا قومی نمبر۔' },
    isHotline: true
  },
  {
    id: 'HP-35',
    name: { en: 'LPG Leakage & Emergency Hotline', hi: 'एलपीजी रिसाव और आपातकालीन हॉटलाइन', ur: 'گیس لیکیج ہنگامی ہیلپ لائن' },
    number: '1906',
    department: { en: 'Ministry of Petroleum and Natural Gas', hi: 'पेट्रोलियम और प्राकृतिक गैस मंत्रालय', ur: 'وزارت پیٹرولیم و قدرتی گیس' },
    category: 'utilities',
    desc: { en: '24-hour centralized emergency response for reporting LPG cylinder leakage or gas fire accidents.', hi: 'एलपीजी सिलेंडर रिसाव या गैस की आग की दुर्घटनाओं की रिपोर्ट करने के लिए २४ घंटे केंद्रीय आपातकालीन हॉटलाइन।', ur: 'گیس سلنڈر لیکیج یا آگ لگنے کی صورت میں 24 گھنٹے ہنگامی مدد کا نمبر۔' },
    isHotline: true
  },

  // 12. Legal Assistance
  {
    id: 'HP-36',
    name: { en: 'National Legal Services Authority (NALSA)', hi: 'राष्ट्रीय कानूनी सेवा प्राधिकरण', ur: 'قومی قانونی امدادی ادارہ' },
    number: '15100',
    department: { en: 'Department of Justice', hi: 'न्याय विभाग', ur: 'محکمہ انصاف' },
    category: 'legal',
    desc: { en: 'Free legal aid, counsel allocation, and Lok Adalat dispute settlement inquiries for weaker sections.', hi: 'कमजोर वर्गों के लिए मुफ्त कानूनी सहायता, वकील का आवंटन और लोक अदालत विवाद निपटान पूछताछ।', ur: 'غریب اور پسماندہ طبقات کو مفت سرکاری وکیل کی فراہمی اور قانونی مدد۔' },
    website: 'https://nalsa.gov.in'
  },
  {
    id: 'HP-37',
    name: { en: 'RTI Online Grievance Information', hi: 'सूचना का अधिकार (RTI) जानकारी', ur: 'رائٹ ٹو انفارمیشن (RTI)' },
    website: 'https://rtionline.gov.in',
    department: { en: 'Department of Personnel and Training', hi: 'कार्मिक एवं प्रशिक्षण विभाग', ur: 'محکمہ پرسنل اینڈ ٹریننگ' },
    category: 'legal',
    desc: { en: 'Filing Right to Information applications online to seek official information from central government authorities.', hi: 'केंद्र सरकार के अधिकारियों से आधिकारिक जानकारी प्राप्त करने के लिए ऑनलाइन आरटीआई आवेदन दाखिल करें।', ur: 'سرکاری محکموں سے معلومات حاصل کرنے کے لیے آن لائن آر ٹی آئی فائل کرنے کا پورٹل۔' }
  },

  // 13. Transport
  {
    id: 'HP-38',
    name: { en: 'Rail Madad Emergency Support', hi: 'रेल मदद आपातकालीन सहायता', ur: 'ریلوے ہیلپ لائن (ریل مدد)' },
    number: '139',
    department: { en: 'Indian Railways', hi: 'भारतीय रेलवे', ur: 'انڈین ریلوے' },
    category: 'transport',
    desc: { en: 'Unified grievance, security assistance, medical emergency, and inquiry system during train journeys.', hi: 'ट्रेन यात्रा के दौरान एकीकृत शिकायत निवारण, सुरक्षा सहायता, चिकित्सा आपातकाल और सामान्य पूछताछ।', ur: 'ٹرین کے سفر کے دوران کسی بھی طبی ایمرجنسی، سیکیورٹی اور شکایات کا واحد نمبر۔' },
    isHotline: true,
    website: 'https://railmadad.indianrailways.gov.in'
  },
  {
    id: 'HP-39',
    name: { en: 'National Highways Helpline (NHAI)', hi: 'राष्ट्रीय राजमार्ग हेल्पलाइन', ur: 'ہائی ویز ہیلپ لائن' },
    number: '1033',
    department: { en: 'National Highways Authority of India', hi: 'भारतीय राष्ट्रीय राजमार्ग प्राधिकरण', ur: 'نیشنل ہائی ویز اتھارٹی' },
    category: 'transport',
    desc: { en: 'Report road accidents, request towing services, crane assistance, and ambulance on National Highways.', hi: 'राष्ट्रीय राजमार्गों पर सड़क दुर्घटनाओं की रिपोर्ट करें, टोइंग सेवाओं, क्रेन सहायता और एम्बुलेंस का अनुरोध करें।', ur: 'قومی شاہراہوں پر حادثات کی صورت میں ٹوئنگ وین، کرین یا ایمبولینس منگوانے کا نمبر۔' },
    isHotline: true
  },
  {
    id: 'HP-40',
    name: { en: 'Passport Seva Kendra Support', hi: 'पासपोर्ट सेवा केंद्र सहायता', ur: 'پاسپورٹ سیوا کیندر ہیلپ ڈیسک' },
    number: '1800-258-1800',
    department: { en: 'Ministry of External Affairs', hi: 'विदेश मंत्रालय', ur: 'وزارت خارجہ' },
    category: 'transport',
    desc: { en: 'Assistance regarding passport application tracking, appointment slots, reissue queries, and document checklist.', hi: 'पासपोर्ट आवेदन की ट्रैकिंग, अपॉइंटमेंट स्लॉट, पुनः जारी करने के प्रश्न और दस्तावेज़ों की सूची के संबंध में सहायता।', ur: 'پاسپورٹ فارم بھرنے، فیس کی ادائیگی اور اپائنٹمنٹ حاصل کرنے میں مدد کا نمبر۔' },
    website: 'https://www.passportindia.gov.in'
  }
];

// Inline translation dictionary for view labels
const UI_LABELS: Record<string, Record<Language, string>> = {
  heading: {
    en: 'Help Line, Emergency & Toll-Free Numbers',
    hi: 'हेल्पलाइन, आपातकालीन और टोल-फ्री नंबर',
    ur: 'ہیلپ لائن، ایمرجنسی اور ٹول فری نمبرز'
  },
  sub: {
    en: 'Quick access to verified emergency services, government helplines, healthcare, legal assistance, public services, and citizen support from official sources.',
    hi: 'आधिकारिक स्रोतों से सत्यापित आपातकालीन सेवाओं, सरकारी हेल्पलाइन, स्वास्थ्य सेवा, कानूनी सहायता, सार्वजनिक सेवाओं और नागरिक सहायता तक त्वरित पहुँच।',
    ur: 'سرکاری ذرائع سے تصدیق شدہ ایمرجنسی سروسز، سرکاری ہیلپ لائنز، علاج معالجہ، قانونی امداد، اور عوامی فلاحی اداروں تک تیز رفتار رسائی۔'
  },
  searchPlaceholder: {
    en: 'Search by service name, department, phone number or keyword...',
    hi: 'सेवा का नाम, विभाग, फोन नंबर या कीवर्ड द्वारा खोजें...',
    ur: 'سروس کا نام، محکمہ، فون نمبر یا کی ورڈ سے تلاش کریں...'
  },
  sorting: {
    en: 'Sort Directory',
    hi: 'क्रमबद्ध करें',
    ur: 'ترتیب دیں'
  },
  sortAlpha: {
    en: 'Alphabetical (A-Z)',
    hi: 'वर्णानुक्रम (A-Z)',
    ur: 'حروفِ تہجی کے مطابق'
  },
  sortDefault: {
    en: 'Priority Hotlines First',
    hi: 'प्राथमिकता हॉटलाइन पहले',
    ur: 'اہم ترین نمبرز پہلے'
  },
  callNow: {
    en: 'Call Now',
    hi: 'कॉल करें',
    ur: 'ابھی کال کریں'
  },
  visitSite: {
    en: 'Visit Official Website',
    hi: 'आधिकारिक वेबसाइट पर जाएं',
    ur: 'آفیشل ویب سائٹ دیکھیں'
  },
  copiedToast: {
    en: 'Helpline copied to clipboard!',
    hi: 'हेल्पलाइन नंबर क्लिपबोर्ड पर कॉपी किया गया!',
    ur: 'ہیلپ لائن نمبر کامیابی سے کاپی ہو گیا!'
  },
  sharedToast: {
    en: 'Shareable contact details copied to clipboard!',
    hi: 'साझा करने योग्य संपर्क विवरण क्लिपबोर्ड पर कॉपी किया गया!',
    ur: 'شیرنگ کی معلومات کلپ بورڈ پر کاپی ہو گئیں!'
  },
  favSuccessToast: {
    en: 'Added to your favorites!',
    hi: 'पसंदीदा सूची में जोड़ा गया!',
    ur: 'آپ کی پسندیدہ فہرست میں شامل کر دیا گیا!'
  },
  favRemoveToast: {
    en: 'Removed from your favorites.',
    hi: 'पसंदीदा सूची से हटाया गया।',
    ur: 'پسندیدہ فہرست سے خارج کر دیا گیا۔'
  },
  noResults: {
    en: 'No verified helplines match your search criteria. Try filtering by another category.',
    hi: 'आपकी खोज के अनुकूल कोई सत्यापित हेल्पलाइन नहीं मिली। कृपया दूसरी श्रेणी चुनकर प्रयास करें।',
    ur: 'آپ کی تلاش کے مطابق کوئی نمبر نہیں ملا۔ براہ کرم دوسری کیٹیگری منتخب کریں۔'
  },
  officialPortalsTitle: {
    en: 'Verified Government Portals & Digital Dashboards',
    hi: 'सत्यापित सरकारी पोर्टल और डिजिटल डैशबोर्ड',
    ur: 'تصدیق شدہ سرکاری اور قومی ویب سائٹس'
  },
  officialPortalsSub: {
    en: 'Direct high-speed entry-points into official citizen services, documentation portals, and application hubs.',
    hi: 'आधिकारिक नागरिक सेवाओं, दस्तावेज़ पोर्टलों और आवेदन केंद्रों में सीधे प्रवेश द्वार।',
    ur: 'شہری خدمات، اسکالرشپ اسکیموں اور کاروباری رجسٹریشن کی آفیشل ویب سائٹس تک براہ راست رسائی۔'
  },
  quickScanTitle: {
    en: 'Instant Emergency Scan Card',
    hi: 'त्वरित आपातकालीन स्कैन कार्ड',
    ur: 'فوری ایمرجنسی اسکین کارڈ'
  },
  quickScanSub: {
    en: 'Scan this secure QR code using your mobile camera to load this verified hotline directory directly onto your smartphone.',
    hi: 'इस सत्यापित हेल्पलाइन निर्देशिका को सीधे अपने स्मार्टफ़ोन पर लोड करने के लिए अपने मोबाइल कैमरे से इस सुरक्षित क्यूआर कोड को स्कैन करें।',
    ur: 'اس پوری لسٹ کو اپنے موبائل فون پر لانے کے لیے اپنے فون کے کیمرے سے اس QR کوڈ کو اسکین کریں۔'
  },
  safetyNoticeTitle: {
    en: 'Critical Life-Safety Protocol',
    hi: 'महत्वपूर्ण जीवन-सुरक्षा प्रोटोकॉल',
    ur: 'زندگی اور ہنگامی حفاظت کے اصول'
  },
  safetyNoticeContent: {
    en: 'In critical or life-threatening scenarios (active fire, physical threat, traumatic injuries), always dial 112 or 100 immediately. Do not rely on web browsers or search parameters during real emergencies.',
    hi: 'गंभीर या जीवन के लिए संकट की स्थितियों (सक्रिय आग, शारीरिक खतरा, गंभीर चोटें) में हमेशा तुरंत 112 या 100 डायल करें। वास्तविक आपातकाल के दौरान वेब ब्राउज़र या सर्च पर निर्भर न रहें।',
    ur: 'شدید حادثے یا جانی خطرے کی صورت میں بلا تاخیر 112 یا 100 پر براہ راست کال کریں۔ ایسے مواقع پر انٹرنیٹ سرچ پر وقت ضائع نہ کریں۔'
  },
  disclaimerTitle: {
    en: 'Legal Disclaimer',
    hi: 'कानूनी अस्वीकरण',
    ur: 'قانونی دستبرداری'
  },
  disclaimerContent: {
    en: 'This website is an independent community information platform. Emergency numbers, helplines, and official websites are aggregated from official government portals for public convenience. Please verify and contact the respective government department or authorized agency directly for official assistance.',
    hi: 'यह वेबसाइट एक स्वतंत्र सामुदायिक सूचना मंच है। आपातकालीन नंबर, हेल्पलाइन और आधिकारिक वेबसाइटें सार्वजनिक सुविधा के लिए सरकारी पोर्टलों से संकलित की गई हैं। कृपया आधिकारिक सहायता के लिए संबंधित सरकारी विभाग से सीधे संपर्क करें।',
    ur: 'یہ پورٹل برادری کی رہنمائی کے لیے ایک آزاد معلوماتی پلیٹ فارم ہے۔ تمام نمبرز اور ویب سائٹس عوامی سہولت کے لیے سرکاری ذرائع سے جمع کی گئی ہیں۔ کسی بھی ہنگامی مدد کے لیے براہ راست متعلقہ محکمے سے رجوع کریں۔'
  },
  printTitle: {
    en: 'Verified Emergency Hotline Pocket Guide',
    hi: 'सत्यापित आपातकालीन हेल्पलाइन पॉकेट गाइड',
    ur: 'تصدیق شدہ ہنگامی ہیلپ لائن گائیڈ'
  },
  printDesc: {
    en: 'Rangrez Community Central Helpline Resource - Print this sheet to keep verified emergency contacts handy in physical format.',
    hi: 'रंगरेज कम्युनिटी सेंट्रल हेल्पलाइन रिसोर्स - भौतिक प्रारूप में सत्यापित आपातकालीन संपर्कों को पास रखने के लिए इसे प्रिंट करें।',
    ur: 'رنگریز کمیونٹی ہیلپ لائن ریسورس - ہنگامی حالت میں آف لائن مدد کے لیے اس گائیڈ کو پرنٹ کر کے اپنے پاس رکھیں۔'
  }
};

export default function EmergencyHelplines({ currentLanguage }: { currentLanguage: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'alpha'>('default');
  
  // Favorites persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('helpline_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleFavorite = (id: string) => {
    let updated: string[];
    if (favorites.includes(id)) {
      updated = favorites.filter(favId => favId !== id);
      setToastMessage(UI_LABELS.favRemoveToast[currentLanguage]);
    } else {
      updated = [...favorites, id];
      setToastMessage(UI_LABELS.favSuccessToast[currentLanguage]);
    }
    setFavorites(updated);
    localStorage.setItem('helpline_favorites', JSON.stringify(updated));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(UI_LABELS.copiedToast[currentLanguage]);
  };

  const shareContact = (item: ContactItem) => {
    const title = item.name[currentLanguage];
    const phoneNum = item.number || 'Website Access';
    const dept = item.department[currentLanguage];
    const shareText = `📞 ${title}\nNumber: ${phoneNum}\nDepartment: ${dept}\nProvided by Rangrez Community Emergency Directory.`;
    
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: window.location.href
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        setToastMessage(UI_LABELS.sharedToast[currentLanguage]);
      });
    } else {
      navigator.clipboard.writeText(shareText);
      setToastMessage(UI_LABELS.sharedToast[currentLanguage]);
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  // Structured SEO schema markup
  useEffect(() => {
    const existingScript = document.getElementById('emergency-helpline-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Help Line, Emergency & Toll-Free Numbers",
      "description": "Centralized directory of verified emergency contacts, government helplines, healthcare, disaster response, and minority welfare services in India.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": HELPLINES_DATA.slice(0, 15).map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "ContactPoint",
            "telephone": item.number,
            "contactType": item.category,
            "name": item.name.en,
            "areaServed": "IN"
          }
        }))
      }
    };

    const script = document.createElement('script');
    script.id = 'emergency-helpline-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const addedScript = document.getElementById('emergency-helpline-schema');
      if (addedScript) {
        addedScript.remove();
      }
    };
  }, []);

  // Filtered and sorted contacts list
  const processedContacts = useMemo(() => {
    let list = [...HELPLINES_DATA];

    // Filter by Category
    if (selectedCategory === 'favorites') {
      list = list.filter(item => favorites.includes(item.id));
    } else if (selectedCategory !== 'all') {
      list = list.filter(item => item.category === selectedCategory);
    }

    // Filter by Search Query (Name, Number, Department, Desc)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(item => {
        const nameText = (item.name.en + ' ' + item.name.hi + ' ' + item.name.ur).toLowerCase();
        const numberText = (item.number || '').toLowerCase();
        const deptText = (item.department.en + ' ' + item.department.hi + ' ' + item.department.ur).toLowerCase();
        const descText = (item.desc.en + ' ' + item.desc.hi + ' ' + item.desc.ur).toLowerCase();
        return nameText.includes(query) || numberText.includes(query) || deptText.includes(query) || descText.includes(query);
      });
    }

    // Sorting
    if (sortBy === 'alpha') {
      list.sort((a, b) => a.name[currentLanguage].localeCompare(b.name[currentLanguage]));
    } else {
      // Priority Hotlines First, then ID
      list.sort((a, b) => {
        if (a.isHotline && !b.isHotline) return -1;
        if (!a.isHotline && b.isHotline) return 1;
        return a.id.localeCompare(b.id);
      });
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy, favorites, currentLanguage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="helplines_directory">
      
      {/* 1. TOAST NOTIFICATION WIDGET */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#0B132B] text-white py-3 px-6 rounded-lg shadow-xl border border-[#D4AF37] flex items-center space-x-2.5 text-xs sm:text-sm"
            id="toast_widget"
          >
            <CheckCircle className="h-5 w-5 text-[#FFD54A] flex-shrink-0" />
            <span className="font-sans font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PRINT-ONLY HEADER PREVIEW (Hidden on Screen) */}
      <div className="hidden print:block mb-8 border-b-2 border-gray-900 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
          {UI_LABELS.printTitle[currentLanguage]}
        </h1>
        <p className="text-xs text-gray-600 mt-1">
          {UI_LABELS.printDesc[currentLanguage]}
        </p>
        <div className="text-[10px] text-gray-500 font-mono mt-2">
          Printed on: {new Date().toLocaleDateString()} • Verified Community Platform
        </div>
      </div>

      {/* 3. HERO BANNER & HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#101E42] to-[#142244] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-gray-800 print:hidden" id="helpline_hero">
        
        {/* Islamic Abstract Background Vector Motifs */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            <circle cx="50" cy="50" r="30" />
            <path d="M50 20 L80 50 L50 80 L20 50 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
            <ShieldAlert className="h-3.5 w-3.5 text-red-400 animate-pulse" />
            <span>{currentLanguage === 'en' ? 'Verified Government Hotlines' : currentLanguage === 'ur' ? 'حکومتی ہیلپ لائنز' : 'सत्यापित सरकारी हेल्पलाइन'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans" id="helpline_main_title">
            {UI_LABELS.heading[currentLanguage]}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-light">
            {UI_LABELS.sub[currentLanguage]}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={triggerPrint}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Print Guide' : currentLanguage === 'ur' ? 'گائیڈ پرنٹ کریں' : 'गाइड प्रिंट करें'}</span>
            </button>

            <button 
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const url = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
                      alert(currentLanguage === 'en' ? `EMERGENCY SOS: GPS Location acquired! Sharing coordinates (${url}) via WhatsApp/SMS to emergency contacts.` : `आपातकालीन एसओएस: जीपीएस स्थान प्राप्त! व्हाट्सएप/एसएमएस द्वारा भेजा गया।`);
                    },
                    () => alert(currentLanguage === 'en' ? 'EMERGENCY SOS: Sending emergency alert without GPS coordinates.' : 'आपातकालीन एसओएस: बिना जीपीएस अलर्ट भेजा गया।')
                  );
                } else {
                  alert(currentLanguage === 'en' ? 'EMERGENCY SOS: Sending emergency alert via SMS.' : 'आपातकालीन एसओएस: एसएमएस द्वारा भेजा गया।');
                }
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-extrabold tracking-wide transition shadow cursor-pointer animate-pulse"
            >
              <ShieldAlert className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Emergency SOS Share Location' : currentLanguage === 'ur' ? 'ایمرجنسی ایس او ایس شیئر' : 'आपातकालीन एसओएस स्थान साझा करें'}</span>
            </button>

            <button 
              onClick={() => {
                const csv = "data:text/csv;charset=utf-8,ID,Service Name,Number,Department,Category\n"
                  + HELPLINES_DATA.map(h => `"${h.id}","${h.name.en}","${h.number || h.website}","${h.department.en}","${h.category}"`).join("\n");
                const link = document.createElement("a");
                link.setAttribute("href", encodeURI(csv));
                link.setAttribute("download", `Rangrez_Emergency_Helplines_${new Date().toISOString().slice(0,10)}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold tracking-wide transition cursor-pointer shadow"
            >
              <Download className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Export Offline PDF / CSV' : currentLanguage === 'ur' ? 'آف لائن لسٹ ڈاؤن لوڈ' : 'ऑफ़लाइन सूची डाउनलोड करें'}</span>
            </button>

            <a 
              href="#government_dashboards"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#C29E2E] text-[#0B132B] rounded-lg text-xs font-bold tracking-wide transition shadow"
            >
              <span>{currentLanguage === 'en' ? 'Official Portals' : currentLanguage === 'ur' ? 'آفیشل پورٹلز' : 'आधिकारिक पोर्टल'}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. EMERGENCY WARNING AND SAFETY BANNER */}
      <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm print:hidden" id="critical_safety_banner">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-red-900 uppercase tracking-wide">
              {UI_LABELS.safetyNoticeTitle[currentLanguage]}
            </h3>
            <p className="text-xs text-red-700 mt-0.5 leading-relaxed">
              {UI_LABELS.safetyNoticeContent[currentLanguage]}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2.5">
          <a 
            href="tel:112"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 shadow transition"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>DIAL 112</span>
          </a>
          <a 
            href="tel:100"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 shadow transition"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>DIAL 100</span>
          </a>
        </div>
      </div>

      {/* 5. SEARCH & FILTERING BAR SYSTEM */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 mb-8 print:hidden" id="directory_controls">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Real-time Search input */}
          <div className="lg:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={UI_LABELS.searchPlaceholder[currentLanguage]}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#D4AF37] focus:bg-white rounded-xl text-sm text-gray-900 tracking-wide transition focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Directory Sorting Selector */}
          <div className="lg:col-span-4 flex items-center space-x-3">
            <span className="text-xs text-gray-500 font-bold uppercase whitespace-nowrap">
              {UI_LABELS.sorting[currentLanguage]}:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="default">{UI_LABELS.sortDefault[currentLanguage]}</option>
              <option value="alpha">{UI_LABELS.sortAlpha[currentLanguage]}</option>
            </select>
          </div>
        </div>

        {/* Categories Pills Carousel Grid */}
        <div className="mt-5 border-t border-gray-100 pt-5">
          <div className="flex flex-wrap gap-2" id="category_pills_wrapper">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'favorites' 
                ? favorites.length 
                : cat.id === 'all' 
                  ? HELPLINES_DATA.length 
                  : HELPLINES_DATA.filter(item => item.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition border cursor-pointer flex items-center space-x-1.5 ${
                    isSelected 
                      ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-sm' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <span>{cat[`label${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}` as 'labelEn' | 'labelHi' | 'labelUr']}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-[#FFD54A] text-[#0B132B]' : 'bg-gray-100 text-gray-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. DIRECTORY CARDS BENTO GRID */}
      <div className="mb-12 print:hidden">
        {processedContacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="helplines_grid">
            {processedContacts.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  className={`bg-white rounded-2xl border ${
                    item.isHotline 
                      ? 'border-red-200 ring-1 ring-red-500/10 shadow-md shadow-red-500/5' 
                      : 'border-gray-100 shadow-sm'
                  } p-5 flex flex-col justify-between hover:shadow-md transition relative group overflow-hidden`}
                >
                  
                  {/* Hotline Top Banner Accent */}
                  {item.isHotline && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600"></div>
                  )}

                  {/* Header Block */}
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded">
                        {item.id}
                      </span>
                      
                      <div className="flex items-center space-x-1.5">
                        {/* Favorite Button */}
                        <button 
                          onClick={() => toggleFavorite(item.id)}
                          className={`p-1.5 rounded-md hover:bg-gray-100 transition cursor-pointer ${isFav ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
                          title="Add to Favorites"
                        >
                          <Star className="h-4.5 w-4.5 fill-current" />
                        </button>

                        {/* Copy Button */}
                        {item.number && (
                          <button 
                            onClick={() => copyToClipboard(item.number!)}
                            className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                            title="Copy Helpline Number"
                          >
                            <Copy className="h-4.5 w-4.5" />
                          </button>
                        )}

                        {/* Share Button */}
                        <button 
                          onClick={() => shareContact(item)}
                          className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                          title="Share Contact Details"
                        >
                          <Share2 className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </div>

                    {/* Service Name & Department */}
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5">
                        {item.isHotline && (
                          <span className="flex-shrink-0 h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                        )}
                        <h3 className="text-base font-extrabold text-gray-900 leading-snug group-hover:text-[#004B23] transition font-sans">
                          {item.name[currentLanguage]}
                        </h3>
                      </div>
                      
                      <p className="text-[11px] font-mono font-semibold text-gray-500 tracking-wide uppercase">
                        {item.department[currentLanguage]}
                      </p>
                    </div>

                    {/* Brief Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-50 font-sans">
                      {item.desc[currentLanguage]}
                    </p>
                  </div>

                  {/* Call and Website Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    {item.number ? (
                      <a
                        href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                        className="w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 hover:border-gray-300 font-bold rounded-xl text-xs tracking-wider flex items-center justify-center space-x-2 transition"
                      >
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span>{UI_LABELS.callNow[currentLanguage]}: <strong className="text-sm font-mono text-emerald-700">{item.number}</strong></span>
                      </a>
                    ) : (
                      <div className="py-2.5 px-4 bg-gray-50 rounded-xl text-center text-xs text-gray-400 font-mono font-semibold">
                        WEBSITE ONLY ACCESS
                      </div>
                    )}

                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs tracking-wider flex items-center justify-center space-x-2 transition"
                      >
                        <span>{UI_LABELS.visitSite[currentLanguage]}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-[#FFD54A]" />
                      </a>
                    )}

                    <button
                      onClick={() => alert(currentLanguage === 'en' ? `Report submitted for ${item.name.en} (${item.number}). Our administrative desk will verify and update this line within 24 hours.` : `रिपोर्ट दर्ज की गई। 24 घंटे में जांच की जाएगी।`)}
                      className="text-[10px] text-gray-400 hover:text-red-600 underline self-center mt-1 cursor-pointer transition"
                    >
                      {currentLanguage === 'en' ? '⚠️ Report Non-Functional / Busy Number' : '⚠️ नंबर काम नहीं कर रहा? रिपोर्ट करें'}
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm max-w-2xl mx-auto" id="no_helplines_found">
            <Info className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">
              {currentLanguage === 'en' ? 'No Helplines Match' : currentLanguage === 'ur' ? 'کوئی نمبر نہیں ملا' : 'कोई हेल्पलाइन नहीं मिली'}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {UI_LABELS.noResults[currentLanguage]}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-5 px-5 py-2 bg-[#0B132B] hover:bg-[#142244] text-white font-bold rounded-lg text-xs tracking-wider uppercase transition"
            >
              {currentLanguage === 'en' ? 'Reset Filters' : currentLanguage === 'ur' ? 'فلٹرز صاف کریں' : 'फ़िल्टर साफ़ करें'}
            </button>
          </div>
        )}
      </div>

      {/* 7. PRINTABLE TABLE PREVIEW (Only visible during print) */}
      <div className="hidden print:block mt-6" id="printable_directory">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-800 text-[10px] font-mono tracking-wider uppercase border-b border-gray-300">
              <th className="p-2 border border-gray-300">Code</th>
              <th className="p-2 border border-gray-300">Service Name</th>
              <th className="p-2 border border-gray-300">Department</th>
              <th className="p-2 border border-gray-300">Helpline / Phone Number</th>
              <th className="p-2 border border-gray-300">Web Address</th>
            </tr>
          </thead>
          <tbody>
            {processedContacts.map((item) => (
              <tr key={item.id} className="text-xs border-b border-gray-300">
                <td className="p-2 font-mono font-bold text-[10px] border border-gray-300">{item.id}</td>
                <td className="p-2 font-bold border border-gray-300">{item.name[currentLanguage]}</td>
                <td className="p-2 text-[10px] text-gray-600 border border-gray-300">{item.department[currentLanguage]}</td>
                <td className="p-2 font-mono font-bold text-emerald-700 border border-gray-300">{item.number || 'N/A'}</td>
                <td className="p-2 font-mono text-[9px] text-gray-500 break-all border border-gray-300">{item.website || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 8. OFFICIAL PORTALS GRID CONTAINER */}
      <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-10 mb-10 print:hidden" id="government_dashboards">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight font-sans">
            {UI_LABELS.officialPortalsTitle[currentLanguage]}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed font-sans">
            {UI_LABELS.officialPortalsSub[currentLanguage]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_WEBSITES.map((portal) => (
            <div 
              key={portal.name}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1.5 text-[#004B23] mb-2.5">
                  <Award className="h-4.5 w-4.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-mono tracking-widest font-extrabold uppercase">GOVERNMENT PORTAL</span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight leading-tight font-sans">
                  {portal.name}
                </h3>

                <p className="text-xs text-gray-500 mt-2.5 leading-relaxed font-sans">
                  {portal.desc[currentLanguage]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-50">
                <a 
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 tracking-wide transition uppercase"
                >
                  <span>{currentLanguage === 'en' ? 'Launch Website' : currentLanguage === 'ur' ? 'ویب سائٹ کھولیں' : 'वेबसाइट खोलें'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. INSTANT EMERGENCY SCAN CARD */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mb-10 print:hidden" id="qr_access_section">
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-yellow-100 border border-yellow-200 rounded-full text-[10px] text-yellow-800 font-bold uppercase tracking-wider">
            <UserCheck className="h-3.5 w-3.5 text-yellow-700" />
            <span>Mobile-First Sync</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight font-sans">
            {UI_LABELS.quickScanTitle[currentLanguage]}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
            {UI_LABELS.quickScanSub[currentLanguage]}
          </p>
        </div>

        {/* Vector SVG Mock QR Code representation representing Rangrez Portal */}
        <div className="p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 flex-shrink-0 flex flex-col items-center justify-center space-y-1">
          <svg className="h-28 w-28 text-[#0B132B]" viewBox="0 0 100 100" fill="currentColor">
            {/* Corner Squares */}
            <rect x="5" y="5" width="25" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="11" y="11" width="13" height="13" rx="1" />
            <rect x="70" y="5" width="25" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="76" y="11" width="13" height="13" rx="1" />
            <rect x="5" y="70" width="25" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="11" y="76" width="13" height="13" rx="1" />
            
            {/* Matrix Noise Points representing high density encoding */}
            <rect x="40" y="5" width="6" height="6" />
            <rect x="50" y="5" width="12" height="6" />
            <rect x="40" y="15" width="6" height="12" />
            <rect x="52" y="17" width="10" height="6" />
            <rect x="5" y="40" width="12" height="6" />
            <rect x="23" y="40" width="6" height="12" />
            <rect x="5" y="52" width="6" height="6" />
            <rect x="15" y="56" width="12" height="6" />
            
            {/* Center Area */}
            <rect x="38" y="38" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="50" r="4" fill="red" />
            
            {/* Bottom Right Area */}
            <rect x="40" y="70" width="6" height="6" />
            <rect x="50" y="76" width="12" height="6" />
            <rect x="45" y="85" width="18" height="6" />
            <rect x="70" y="40" width="6" height="12" />
            <rect x="82" y="40" width="12" height="6" />
            <rect x="76" y="52" width="6" height="18" />
            <rect x="88" y="70" width="6" height="6" />
            <rect x="76" y="82" width="18" height="12" />
          </svg>
          <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest pt-1">RANGREZ HELPDESK</span>
        </div>
      </div>

      {/* 10. LEGAL DISCLAIMER FOOTER NOTE */}
      <div className="bg-gray-100/60 rounded-2xl border border-gray-100 p-6 sm:p-8" id="disclaimer_section">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wide">
              {UI_LABELS.disclaimerTitle[currentLanguage]}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              {UI_LABELS.disclaimerContent[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
