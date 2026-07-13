import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Users, Briefcase, HeartPulse, Home, Sprout, CreditCard, 
  TrendingUp, FileText, Cpu, Heart, Scale, ShieldAlert, Award, 
  Search, ExternalLink, Info, AlertTriangle, ArrowUpRight, CheckCircle2, 
  Map, HardHat, ChevronRight, Sparkles, Accessibility, Landmark, Download, Printer, Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface GovernmentSchemesProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
  defaultCategory?: string;
}

interface Scheme {
  id: string;
  name: { en: string; hi: string; ur: string };
  url: string;
  category: string;
  tags: string[];
  benefits: { en: string; hi: string; ur: string };
  eligibility: { en: string; hi: string; ur: string };
  badge?: 'New' | 'Popular' | 'Recently Updated';
  type?: 'Central' | 'State' | 'Joint';
  applicationProcess?: { en: string; hi: string; ur: string };
  importantDates?: { en: string; hi: string; ur: string };
  faqs?: { q: string; a: string }[];
  downloadFormsUrl?: string;
  officialNotificationUrl?: string;
}

const CATEGORIES_TRANSLATION: Record<string, { en: string; hi: string; ur: string }> = {
  'Central Government Schemes': { en: 'Central Government Schemes', hi: 'केन्द्रीय सरकारी योजनाएं', ur: 'مرکزی حکومتی اسکیمیں' },
  'State Government Schemes': { en: 'State Government Schemes', hi: 'राज्य स्तरीय सरकारी योजनाएं', ur: 'ریاستی حکومتی اسکیمیں' },
  'Senior Citizen Schemes': { en: 'Senior Citizen Schemes', hi: 'वरिष्ठ नागरिक कल्याण योजनाएं', ur: 'بزرگ شہریوں کی اسکیمیں' },
  'Skill Development': { en: 'Skill Development & Training', hi: 'कौशल विकास एवं प्रशिक्षण', ur: 'مہارت کی ترقی اور تربیت' },
  'Startup Support': { en: 'Startup & Innovation Support', hi: 'स्टार्टअप एवं इनोवेशन सहायता', ur: 'اسٹارٹ اپ اور اختراعی مدد' },
  'Education & Scholarships': { en: 'Education & Scholarships', hi: 'शिक्षा एवं छात्रवृत्ति', ur: 'تعلیم اور اسکالرشپ' },
  'Minority Welfare': { en: 'Minority Welfare', hi: 'अल्पसंख्यक कल्याण', ur: 'اقلیتی بہبود' },
  'Employment & Career': { en: 'Employment & Career', hi: 'रोजगार एवं करियर', ur: 'ملازمت اور کیریئر' },
  'Healthcare': { en: 'Healthcare', hi: 'स्वास्थ्य सेवा', ur: 'صحت کی دیکھ بھال' },
  'Housing': { en: 'Housing', hi: 'आवास योजना', ur: 'ہاؤسنگ اسکیمیں' },
  'Farmers': { en: 'Farmers & Agriculture', hi: 'किसान एवं कृषि', ur: 'کسان اور زراعت' },
  'Financial Inclusion & Banking': { en: 'Financial Inclusion & Banking', hi: 'वित्तीय समावेशन एवं बैंकिंग', ur: 'مالیاتی شمولیت اور بینکنگ' },
  'Business & Entrepreneurship': { en: 'Business & Entrepreneurship', hi: 'व्यवसाय एवं उद्यमिता', ur: 'کاروبار اور انٹرپرینیورشپ' },
  'Pension & Insurance': { en: 'Pension & Insurance', hi: 'पेंशन एवं बीमा', ur: 'پینشن اور انشورنس' },
  'Digital Government Services': { en: 'Digital Government Services', hi: 'डिजिटल सरकारी सेवाएं', ur: 'ڈیجیٹل سرکاری خدمات' },
  'Women & Child Welfare': { en: 'Women & Child Welfare', hi: 'महिला एवं बाल विकास', ur: 'خواتین اور بچوں کی بہبود' },
  'Social Justice': { en: 'Social Justice & Empowerment', hi: 'सामाजिक न्याय एवं अधिकारिता', ur: 'سماجی انصاف' },
  'Persons with Disabilities': { en: 'Empowerment of Divyangjan', hi: 'दिव्यांगजन सशक्तिकरण', ur: 'معذور افراد کی بہبود' },
  'Rural Development': { en: 'Rural Development', hi: 'ग्रामीण विकास', ur: 'دیہی ترقی' },
  'Labour & Employment': { en: 'Labour & Employment Support', hi: 'श्रम एवं रोजगार सहायता', ur: 'لیبر اور روزگار' }
};

const SCHEMES: Scheme[] = [
  // 1. Education & Scholarships
  {
    id: 'SCH-01',
    name: { en: 'National Scholarship Portal (NSP)', hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)', ur: 'نیشنل اسکالرشپ پورٹل' },
    url: 'https://scholarships.gov.in',
    category: 'Education & Scholarships',
    tags: ['Student', 'Minority'],
    badge: 'Popular',
    benefits: { en: 'Central and state scholarships sent directly via DBT.', hi: 'डीबीटी के माध्यम से सीधे बैंक खातों में भेजी जाने वाली छात्रवृत्ति।', ur: 'ڈی بی ٹی کے ذریعے براہ راست بینک اکاؤنٹس میں اسکالرشپ۔' },
    eligibility: { en: 'Verified students enrolled in registered schools/colleges.', hi: 'पंजीकृत स्कूलों/कॉलेजों में पढ़ने वाले सत्यापित छात्र।', ur: 'رجسٹرڈ اسکولوں/کالجوں میں زیر تعلیم تصدیق شدہ طلبہ۔' }
  },
  {
    id: 'SCH-02',
    name: { en: 'SWAYAM Free Online Courses', hi: 'स्वयं (SWAYAM) मुफ्त ऑनलाइन पाठ्यक्रम', ur: 'سویم آن لائن کورسز' },
    url: 'https://swayam.gov.in',
    category: 'Education & Scholarships',
    tags: ['Student', 'Youth'],
    benefits: { en: 'Free high-quality digital courses with optional credit transfer.', hi: 'वैकल्पिक क्रेडिट ट्रांसफर के साथ मुफ्त उच्च गुणवत्ता वाले डिजिटल पाठ्यक्रम।', ur: 'اختیاری کریڈٹ ٹرانسفر کے ساتھ مفت اعلیٰ معیار کے ڈیجیٹل کورسز۔' },
    eligibility: { en: 'Open to all students, teachers, and learners nationwide.', hi: 'राष्ट्रव्यापी सभी छात्रों, शिक्षकों और शिक्षार्थियों के लिए खुला।', ur: 'ملک بھر کے تمام طلبہ، اساتذہ اور سیکھنے والوں کے لیے کھلا ہے۔' }
  },
  {
    id: 'SCH-03',
    name: { en: 'DIKSHA Digital Infrastructure', hi: 'दीक्षा (DIKSHA) डिजिटल शिक्षा मंच', ur: 'دیکشا ڈیجیٹل انفراسٹرکچر' },
    url: 'https://diksha.gov.in',
    category: 'Education & Scholarships',
    tags: ['Student', 'Youth', 'Digital Services'],
    badge: 'New',
    benefits: { en: 'Access to multilingual interactive school books and materials.', hi: 'बहुभाषी इंटरैक्टिव स्कूल पुस्तकों और सामग्रियों तक पहुंच।', ur: 'کثیر لسانی انٹرایکٹو اسکول کی کتابوں اور مواد تک رسائی۔' },
    eligibility: { en: 'CBSE, State Boards, and global school curricula.', hi: 'सीबीएसई, राज्य बोर्ड और वैश्विक स्कूल पाठ्यक्रम।', ur: 'سی بی ایس ای، اسٹیٹ بورڈز اور اسکول کے نصاب۔' }
  },
  {
    id: 'SCH-04',
    name: { en: 'AICTE Student Fellowships & Approvals', hi: 'एआईसीटीई (AICTE) छात्र फैलोशिप', ur: 'اے آئی سی ٹی ای فیلوشپ' },
    url: 'https://www.aicte-india.org',
    category: 'Education & Scholarships',
    tags: ['Student', 'Youth'],
    benefits: { en: 'Technical PG scholarships and institutional research support.', hi: 'तकनीकी पीजी छात्रवृत्ति और संस्थागत अनुसंधान सहायता।', ur: 'تکنیکی پی جی اسکالرشپ اور ادارہ جاتی تحقیقی مدد۔' },
    eligibility: { en: 'Technical, engineering, and polytechnic candidates.', hi: 'तकनीकी, इंजीनियरिंग और पॉलिटेक्निक उम्मीदवार।', ur: 'تکنیکی، انجینئرنگ اور پولی ٹیکنک امیدوار۔' }
  },
  {
    id: 'SCH-05',
    name: { en: 'Ministry of Education Portal', hi: 'शिक्षा मंत्रालय आधिकारिक पोर्टल', ur: 'وزارت تعلیم پورٹل' },
    url: 'https://www.education.gov.in',
    category: 'Education & Scholarships',
    tags: ['Student'],
    benefits: { en: 'Direct access to national education schemes, policies, and links.', hi: 'राष्ट्रीय शिक्षा योजनाओं, नीतियों और कड़ियों तक सीधी पहुंच।', ur: 'قومی تعلیمی اسکیموں، پالیسیوں اور لنکس تک براہ راست رسائی۔' },
    eligibility: { en: 'General citizens, academic researchers, and students.', hi: 'सामान्य नागरिक, शैक्षणिक शोधकर्ता और छात्र।', ur: 'عام شہری، تعلیमी محققین اور طلبہ۔' }
  },
  // 2. Minority Welfare
  {
    id: 'SCH-06',
    name: { en: 'Ministry of Minority Affairs (MoMA)', hi: 'अल्पसंख्यक कार्य मंत्रालय (MoMA)', ur: 'وزارت اقلیती امور' },
    url: 'https://minorityaffairs.gov.in',
    category: 'Minority Welfare',
    tags: ['Minority', 'Youth'],
    badge: 'Popular',
    benefits: { en: 'Coaching, leadership training, and development programs.', hi: 'कोचिंग, नेतृत्व प्रशिक्षण और समग्र विकास कार्यक्रम।', ur: 'کوچنگ، لیڈرشپ ٹریننگ اور مجموعی ترقیاتی پروگرام۔' },
    eligibility: { en: 'Candidates belonging to notified minorities (Muslim, Sikh, etc.)', hi: 'अधिसूचित अल्पसंख्यक समुदायों (मुस्लिम, सिख आदि) के उम्मीदवार।', ur: 'نوٹیفائیڈ اقلیتی برادریوں کے امیدوار (مسلمان، سکھ وغیرہ)۔' }
  },
  {
    id: 'SCH-07',
    name: { en: 'NSP Minority Pre/Post-Matric Aid', hi: 'एनएसपी अल्पसंख्यक मैट्रिक-पूर्व/मैट्रिक-उत्तर सहायता', ur: 'اقلیتی پری/پوسٹ میٹرک امداد' },
    url: 'https://scholarships.gov.in',
    category: 'Minority Welfare',
    tags: ['Minority', 'Student'],
    badge: 'Popular',
    benefits: { en: 'Tuition support and monthly maintenance stipend.', hi: 'शिक्षण सहायता और मासिक रखरखाव भत्ता।', ur: 'ٹیوشن سپورٹ اور ماہانہ دیکھ بھال کا الاؤنس۔' },
    eligibility: { en: 'Minority students with previous exam score >50% & low family income.', hi: 'अल्पसंख्यक छात्र जिनके पिछली परीक्षा में >50% अंक हैं और पारिवारिक आय कम है।', ur: 'اقلیتی طلبہ جن کے سابقہ ​​امتحان میں 50 فیصد سے زیادہ نمبر ہیں اور خاندانی آمدنی کم ہے۔' }
  },
  // 3. Employment & Career
  {
    id: 'SCH-08',
    name: { en: 'National Career Service (NCS)', hi: 'राष्ट्रीय करियर सेवा पोर्टल (NCS)', ur: 'نیشنل کیریئر سروس' },
    url: 'https://www.ncs.gov.in',
    category: 'Employment & Career',
    tags: ['Employment', 'Youth'],
    badge: 'Popular',
    benefits: { en: 'Career counseling, job matching, vocational skills.', hi: 'करियर परामर्श, नौकरी मिलान, व्यावसायिक कौशल।', ur: 'کیریئر کی مشاورت، نوکریوں کی تلاش، پیشہ ورانہ مہارتیں۔' },
    eligibility: { en: 'Registered job seekers, students, and active employers.', hi: 'पंजीकृत नौकरी चाहने वाले, छात्र और सक्रिय नियोक्ता।', ur: 'رجسٹرڈ ملازمت کے متلاشی، طلبہ اور آجر۔' }
  },
  {
    id: 'SCH-09',
    name: { en: 'Skill India Digital Hub', hi: 'स्किल इंडिया डिजिटल हब (SID)', ur: 'اسکل انڈیا ڈیجیٹل' },
    url: 'https://www.skillindiadigital.gov.in',
    category: 'Employment & Career',
    tags: ['Employment', 'Youth', 'Digital Services'],
    badge: 'New',
    benefits: { en: 'Verifiable online certifications and digital skill paths.', hi: 'सत्यापन योग्य ऑनलाइन प्रमाणपत्र और डिजिटल कौशल मार्ग।', ur: 'آن لائن سرٹیفکیٹس اور ڈیجیٹل مہارتوں کے راستے۔' },
    eligibility: { en: 'Youth, artisans, and skilled laborers of India.', hi: 'भारत के युवा, कारीगर और कुशल श्रमिक।', ur: 'بھارت کے نوجوان، کاریگر اور ہنرمند مزدور۔' }
  },
  {
    id: 'SCH-10',
    name: { en: 'e-Shram Shramik Card', hi: 'ई-श्रम (e-Shram) श्रमिक कार्ड', ur: 'ای-شرم کارڈ' },
    url: 'https://eshram.gov.in',
    category: 'Employment & Career',
    tags: ['Employment', 'Farmer'],
    badge: 'Recently Updated',
    benefits: { en: 'Accidental insurance of ₹2 Lakhs and priority state aid.', hi: '₹2 लाख का दुर्घटना बीमा और प्राथमिकता के आधार पर राज्यीय सहायता।', ur: '2 لاکھ روپے کا حادثاتی بیمہ اور ترجیحی ریاستی امداد۔' },
    eligibility: { en: 'Unorganized workers, farmers, self-employed, laborers.', hi: 'असंगठित श्रमिक, किसान, स्व-नियोजित, मजदूर।', ur: 'غیر منظم مزدور، کسان، خود روزگار۔' }
  },
  // 4. Healthcare
  {
    id: 'SCH-11',
    name: { en: 'Ayushman Bharat PM-JAY', hi: 'आयुष्मान भारत पीएम-जन आरोग्य योजना', ur: 'आयुष्मान भारत पीएम-जेएवाई' },
    url: 'https://beneficiary.nha.gov.in',
    category: 'Healthcare',
    tags: ['Healthcare', 'Senior Citizen'],
    badge: 'Popular',
    benefits: { en: 'Cashless health insurance up to ₹5 Lakhs per family annually.', hi: 'प्रति परिवार सालाना ₹5 लाख तक का कैशलेस स्वास्थ्य बीमा।', ur: 'فی خاندان سالانہ 5 لاکھ روپے تک کا کیش لیس ہیلتھ انشورنس۔' },
    eligibility: { en: 'Low-income households identified under the SECC index.', hi: 'एसईसीसी सूचकांक के तहत पहचान किए गए कम आय वाले परिवार।', ur: 'ایس ای سی سی انڈیکس کے تحت شناخت شدہ کم آمدنی والے خاندان۔' }
  },
  {
    id: 'SCH-12',
    name: { en: 'Ayushman Bharat Digital Mission (ABDM)', hi: 'आयुष्मान भारत डिजिटल मिशन (ABHA)', ur: 'ڈیجیٹل ہیلتھ مشن' },
    url: 'https://abdm.gov.in',
    category: 'Healthcare',
    tags: ['Healthcare', 'Digital Services'],
    badge: 'New',
    benefits: { en: 'Unique ABHA health ID card to securely store diagnostic reports.', hi: 'सत्यापित डिजिटल स्वास्थ्य रिपोर्ट संग्रहीत करने के लिए एबीएचए आईडी कार्ड।', ur: 'طبی رپورٹوں کو محفوظ طریقے سے اسٹور کرنے کے لیے ابھا ہیلتھ آئی ڈی کارڈ۔' },
    eligibility: { en: 'All citizens of India.', hi: 'भारत के सभी नागरिक।', ur: 'بھارت کے تمام شہری۔' }
  },
  // 5. Housing
  {
    id: 'SCH-13',
    name: { en: 'PM Awas Yojana (PMAY)', hi: 'प्रधानमंत्री आवास योजना (PMAY)', ur: 'وزیراعظم آواس یوجنا' },
    url: 'https://pmaymis.gov.in',
    category: 'Housing',
    tags: ['Housing', 'Farmer'],
    badge: 'Popular',
    benefits: { en: 'Financial subsidy for pakka home construction/loan interest.', hi: 'पक्के मकान के निर्माण या गृह ऋण ब्याज पर वित्तीय सब्सिडी।', ur: 'پکے مکان کی تعمیر یا ہوم لون کے سود پر مالی سبسڈی۔' },
    eligibility: { en: 'Families without a pakka house across urban or rural areas.', hi: 'शहरी या ग्रामीण क्षेत्रों में बिना पक्के मकान वाले परिवार।', ur: 'شہری یا دیہی علاقوں میں بغیر پکے مکان کے خاندان۔' }
  },
  // 6. Farmers
  {
    id: 'SCH-14',
    name: { en: 'PM-KISAN Samman Nidhi', hi: 'पीएम-किसान सम्मान निधि योजना', ur: 'پی ایم کسان سمّان ندھی' },
    url: 'https://pmkisan.gov.in',
    category: 'Farmers',
    tags: ['Farmer'],
    badge: 'Popular',
    benefits: { en: 'Guaranteed ₹6,000 direct income support in 3 installments.', hi: '3 किस्तों में गारंटीकृत ₹6,000 की सीधी आय सहायता।', ur: '3 قسطوں میں سالانہ 6000 روپے براہ راست مالی امداد۔' },
    eligibility: { en: 'Small and marginal landholding farmer families.', hi: 'छोटे और सीमांत भूमि धारक किसान परिवार।', ur: 'چھوٹے اور معمولی زمیندار کسان خاندان۔' }
  },
  {
    id: 'SCH-15',
    name: { en: 'Ministry of Agriculture & Farmers Welfare', hi: 'कृषि एवं किसान कल्याण मंत्रालय', ur: 'وزارت زراعت' },
    url: 'https://agriwelfare.gov.in',
    category: 'Farmers',
    tags: ['Farmer'],
    benefits: { en: 'Subsidy on seeds, fertilizers, cold-storage, and machinery.', hi: 'बीज, उर्वरक, कोल्ड-स्टोरेज और कृषि उपकरणों पर सब्सिडी।', ur: 'بیجوں، کھادوں، کولڈ اسٹوریج اور مشینری پر سبسڈی۔' },
    eligibility: { en: 'All practicing farmers and farming cooperatives.', hi: 'सभी सक्रिय किसान और कृषि सहकारी समितियां।', ur: 'تمام کاشتکار اور زرعی کوآپریٹو سوسائٹیاں۔' }
  },
  // 7. Financial Inclusion
  {
    id: 'SCH-16',
    name: { en: 'PM Jan Dhan Yojana (PMJDY)', hi: 'प्रधानमंत्री जन धन योजना (PMJDY)', ur: 'جن دھن یوجنا' },
    url: 'https://pmjdy.gov.in',
    category: 'Financial Inclusion & Banking',
    tags: ['Digital Services', 'Pension'],
    badge: 'Popular',
    benefits: { en: 'Zero-balance account, RuPay card, and overdraft facility.', hi: 'जीरो-बैलेंस बचत खाता, रुपे कार्ड और ओवरड्राफ्ट की सुविधा।', ur: 'زیرو بیلنس اکاؤنٹ، روپے کارڈ اور اوور ڈرافٹ کی سہولت۔' },
    eligibility: { en: 'Indian citizens above 10 years without previous bank accounts.', hi: '10 वर्ष से अधिक आयु के नागरिक जिनका पहले से बैंक खाता नहीं है।', ur: '10 سال سے زیادہ عمر کے شہری جن کا پہلے سے کوئی بینک اکاؤنٹ نہیں ہے۔' }
  },
  {
    id: 'SCH-17',
    name: { en: 'PM Mudra Yojana Business Loans', hi: 'प्रधानमंत्री मुद्रा योजना (PMMY) व्यापार ऋण', ur: 'مدرا یوجنا بزنس لون' },
    url: 'https://www.mudra.org.in',
    category: 'Financial Inclusion & Banking',
    tags: ['Business', 'MSME'],
    badge: 'Popular',
    benefits: { en: 'Collateral-free commercial loans up to ₹10 Lakhs.', hi: 'बिना गारंटी के ₹10 लाख तक के व्यापारिक ऋण (शिशु, किशोर, तरुण)।', ur: 'ضمانت کے بغیر 10 لاکھ روپے تک کے کاروباری قرضے۔' },
    eligibility: { en: 'Micro-enterprises, proprietary firms, and local startups.', hi: 'सूक्ष्म उद्यम, व्यक्तिगत स्वामित्व वाली फर्में और स्थानीय स्टार्टअप।', ur: 'چھوٹے کاروباری ادارے اور اسٹارٹ اپس۔' }
  },
  {
    id: 'SCH-18',
    name: { en: 'Jan Samarth Credit Portal', hi: 'जन समर्थ ऋण पोर्टल (Jan Samarth)', ur: 'جن سمرتھ پورٹل' },
    url: 'https://www.jansamarth.in',
    category: 'Financial Inclusion & Banking',
    tags: ['Business', 'MSME', 'Digital Services'],
    badge: 'New',
    benefits: { en: 'Unified window for 13+ government subsidy loan programs.', hi: '13+ सरकारी सब्सिडी ऋण कार्यक्रमों के लिए एकीकृत खिड़की।', ur: '13 سے زیادہ سرکاری سبسڈی والے قرض کے پروگراموں کے لیے واحد پورٹل۔' },
    eligibility: { en: 'Entrepreneurs, farmers, and students looking for formal loans.', hi: 'औपचारिक ऋण की तलाश कर रहे उद्यमी, किसान और छात्र।', ur: 'قرض کی تلاش میں کاروباری افراد، کسان اور طلبہ۔' }
  },
  // 8. Business & Entrepreneurship
  {
    id: 'SCH-19',
    name: { en: 'Startup India Hub', hi: 'स्टार्टअप इंडिया आधिकारिक हब', ur: 'اسٹارٹ اپ انڈیا' },
    url: 'https://www.startupindia.gov.in',
    category: 'Business & Entrepreneurship',
    tags: ['Business', 'Youth'],
    badge: 'Popular',
    benefits: { en: 'Tax holidays, seed funds, and intellectual property help.', hi: 'टैक्स छूट, सीड फंडिंग और बौद्धिक संपदा पंजीकरण में सहायता।', ur: 'ٹیکس کی چھوٹ، سیڈ فنڈنگ ​​اور پیٹنٹ سپورٹ۔' },
    eligibility: { en: 'Innovative entities incorporated for less than 10 years.', hi: '10 वर्ष से कम समय से शामिल नवोन्मेषी संस्थाएं।', ur: 'جدید کاروباری ادارے جو 10 سال سے کم عرصے سے قائم ہیں۔' }
  },
  {
    id: 'SCH-20',
    name: { en: 'Stand-Up India Venture Loans', hi: 'स्टैंड-अप इंडिया ग्रीनफील्ड ऋण योजना', ur: 'اسٹینڈ اپ انڈیا' },
    url: 'https://www.standupmitra.in',
    category: 'Business & Entrepreneurship',
    tags: ['Business', 'Women'],
    badge: 'New',
    benefits: { en: 'Venture capital of ₹10 Lakhs to ₹1 Crore for greenfield units.', hi: 'नई ग्रीनफील्ड इकाइयों के लिए ₹10 लाख से ₹1 करोड़ तक का ऋण।', ur: 'نئے گرین فیلڈ یونٹس کے لیے 10 لاکھ سے 1 کروڑ روپے تک کا قرض۔' },
    eligibility: { en: 'SC/ST or Women entrepreneurs starting fresh manufacturing/service units.', hi: 'अनुसूचित जाति/जनजाति या महिला उद्यमी जो नया विनिर्माण/सेवा उद्यम शुरू कर रही हैं।', ur: 'ایس سی/ایس ٹی یا خواتین کاروباری جو نیا مینوفیکچرنگ یا سروس یونٹ شروع کر رہی ہیں۔' }
  },
  {
    id: 'SCH-21',
    name: { en: 'UDYAM MSME Registration', hi: 'उद्यम (UDYAM) एमएसएमई पंजीकरण', ur: 'ادیم رجسٹریشن' },
    url: 'https://udyamregistration.gov.in',
    category: 'Business & Entrepreneurship',
    tags: ['Business', 'MSME', 'Digital Services'],
    badge: 'Recently Updated',
    benefits: { en: 'Official MSME recognition certificate and priority sector loans.', hi: 'आधिकारिक एमएसएमई पहचान पत्र और प्राथमिक क्षेत्र ऋण पात्रता।', ur: 'سرکاری ایم ایس ایم ای رجسٹریشن سرٹیفکیٹ اور ترجیحی قرضے۔' },
    eligibility: { en: 'Micro, small, and medium industrial or service companies.', hi: 'सूक्ष्म, लघु और मध्यम औद्योगिक या सेवा कंपनियां।', ur: 'مائیکرو، چھوٹے اور درمیانے درجے کے کاروباری ادارے۔' }
  },
  {
    id: 'SCH-22',
    name: { en: 'Ministry of MSME Portal', hi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय', ur: 'وزارت ایم ایس ایم ای' },
    url: 'https://msme.gov.in',
    category: 'Business & Entrepreneurship',
    tags: ['MSME', 'Business'],
    benefits: { en: 'Access cluster updates, credit assurances, and technology aid.', hi: 'क्लस्टर विकास, क्रेडिट गारंटी योजनाओं और तकनीकी सहायता तक पहुंच।', ur: 'کلسٹر کی ترقی، کریڈٹ گارنٹی اور تکنیکی مدد تک رسائی۔' },
    eligibility: { en: 'Registered small business owners and commercial artisans.', hi: 'पंजीकृत लघु व्यवसाय स्वामी और व्यावसायिक कारीगर।', ur: 'رجسٹرڈ چھوٹے کاروباری مالکان اور کاریگر۔' }
  },
  {
    id: 'SCH-23',
    name: { en: 'PM Vishwakarma Scheme', hi: 'पीएम विश्वकर्मा शिल्पकार योजना', ur: 'پی ایم وشوکرما اسکیم' },
    url: 'https://pmvishwakarma.gov.in',
    category: 'Business & Entrepreneurship',
    tags: ['Business', 'Minority', 'MSME'],
    badge: 'New',
    benefits: { en: '₹15,000 toolkits incentive, 5% interest loans, and skill training.', hi: '₹15,000 टूलकिट प्रोत्साहन, 5% ब्याज दर पर ऋण और कौशल प्रशिक्षण।', ur: 'وشوکرما ٹول کٹ کے لیے 15,000 روپے، 5% سود پر قرض اور تربیت۔' },
    eligibility: { en: 'Artisans practicing traditional craft trades (carpenters, cobblers, etc.)', hi: 'पारंपरिक शिल्प उद्योगों में लगे कारीगर (बढ़ई, मोची, कुम्हार आदि)।', ur: 'روایتی دستکاری کے پیشوں سے وابستہ کاریگر (بڑھئی، موچی وغیرہ)۔' }
  },
  // 9. Pension & Insurance
  {
    id: 'SCH-24',
    name: { en: 'Atal Pension Yojana (APY)', hi: 'अटल पेंशन योजना (APY)', ur: 'اٹل پینشن یوجنا' },
    url: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    category: 'Pension & Insurance',
    tags: ['Pension', 'Senior Citizen'],
    badge: 'Popular',
    benefits: { en: 'Guaranteed pension of ₹1000 - ₹5000 per month after age 60.', hi: '60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की गारंटीकृत पेंशन।', ur: '60 سال کی عمر کے بعد ماہانہ 1000 سے 5000 روپے گارنٹی شدہ پینشن۔' },
    eligibility: { en: 'Citizens aged 18 to 40 years without statutory pension benefits.', hi: '18 से 40 वर्ष की आयु के नागरिक जिन्हें कोई अन्य वैधानिक पेंशन लाभ नहीं मिलता।', ur: '18 سے 40 سال کی عمر کے شہری جنہیں کوئی دوسرا پینشن فائدہ نہیں ملتا۔' }
  },
  {
    id: 'SCH-25',
    name: { en: 'National Pension System (NPS)', hi: 'राष्ट्रीय पेंशन प्रणाली (NPS)', ur: 'نیشنل پینشن سسٹم' },
    url: 'https://www.npscra.nsdl.co.in',
    category: 'Pension & Insurance',
    tags: ['Pension', 'Senior Citizen', 'Digital Services'],
    badge: 'Popular',
    benefits: { en: 'Market-linked safe retirement corpus with regular annuity plans.', hi: 'नियमित वार्षिकी योजनाओं के साथ बाजार-आधारित सुरक्षित सेवानिवृत्ति फंड।', ur: 'مارکیٹ سے منسلک محفوظ ریٹائرمنٹ فنڈ اور پینشن۔' },
    eligibility: { en: 'All Indian citizens aged 18 to 70 years.', hi: '18 से 70 वर्ष की आयु के सभी भारतीय नागरिक।', ur: '18 سے 70 سال کی عمر کے تمام بھارتی شہری۔' }
  },
  {
    id: 'SCH-26',
    name: { en: 'PM Jeevan Jyoti Bima Yojana (PMJJBY)', hi: 'प्रधानमंत्री जीवन ज्योति बीमा योजना', ur: 'پی ایم جیون جیوتی بیمہ' },
    url: 'https://jansuraksha.gov.in',
    category: 'Pension & Insurance',
    tags: ['Pension'],
    badge: 'Recently Updated',
    benefits: { en: 'Low-cost ₹2 Lakhs life insurance coverage at ₹436/year.', hi: 'मात्र ₹436/वर्ष में ₹2 लाख का कम लागत वाला जीवन बीमा कवरेज।', ur: 'صرف 436 روپے سالانہ میں 2 لاکھ روپے کا لائف انشورنس کور۔' },
    eligibility: { en: 'Savings bank account holders aged 18 to 50 years.', hi: '18 से 50 वर्ष की आयु के बचत बैंक खाताधारक।', ur: '18 سے 50 سال کی عمر کے بچت بینک اکاؤنٹ ہولڈرز۔' }
  },
  {
    id: 'SCH-27',
    name: { en: 'PM Suraksha Bima Yojana (PMSBY)', hi: 'प्रधानमंत्री सुरक्षा बीमा योजना', ur: 'پی ایم سورکشا بیمہ' },
    url: 'https://jansuraksha.gov.in',
    category: 'Pension & Insurance',
    tags: ['Pension'],
    badge: 'Recently Updated',
    benefits: { en: 'Accidental death/disability cover of ₹2 Lakhs at ₹20/year.', hi: '₹20/वर्ष के प्रीमियम पर ₹2 लाख का आकस्मिक मृत्यु/दिव्यांगता कवर।', ur: 'صرف 20 روپے سالانہ میں 2 لاکھ روپے کا حادثاتی موت/معذوری بیمہ۔' },
    eligibility: { en: 'Savings bank account holders aged 18 to 70 years.', hi: '18 से 70 वर्ष की आयु के बचत बैंक खाताधारक।', ur: '18 سے 70 سال کی عمر کے بچت بینک اکاؤنٹ ہولڈرز۔' }
  },
  // 10. Digital Government Services
  {
    id: 'SCH-28',
    name: { en: 'DigiLocker cloud storage', hi: 'डिजिलॉकर (DigiLocker) क्लाउड स्टोरेज', ur: 'ڈیجی لاکر کلاؤڈ اسٹوریج' },
    url: 'https://www.digilocker.gov.in',
    category: 'Digital Government Services',
    tags: ['Digital Services'],
    badge: 'Popular',
    benefits: { en: 'Issued documents are legally on par with physical copies.', hi: 'जारी किए गए दस्तावेज कानूनी रूप से भौतिक प्रतियों के समकक्ष माने जाते हैं।', ur: 'جاری کردہ دستاویزات قانونی طور پر اصلی کاپیوں کے برابر مانی جاتی ہیں۔' },
    eligibility: { en: 'Citizens of India with verified Aadhaar card.', hi: 'सत्यापित आधार कार्ड वाले भारत के नागरिक।', ur: 'تصدیق شدہ آدھار کارڈ والے بھارتی شہری۔' }
  },
  {
    id: 'SCH-29',
    name: { en: 'UMANG Multi-Service App', hi: 'उमंग (UMANG) एकीकृत सेवा पोर्टल', ur: 'امنگ ملٹی سروس ایپ' },
    url: 'https://web.umang.gov.in',
    category: 'Digital Government Services',
    tags: ['Digital Services', 'Youth'],
    badge: 'Popular',
    benefits: { en: 'Access 1,200+ central & state services from a single dashboard.', hi: 'एक ही पोर्टल से 1,200+ से अधिक केंद्रीय और राज्यीय सेवाओं का उपयोग।', ur: 'ایک ہی ڈیش بورڈ سے 1200 سے زائد سرکاری خدمات تک رسائی۔' },
    eligibility: { en: 'Active internet users with smartphone or PC browsers.', hi: 'स्मार्टफोन या पीसी ब्राउज़र वाले सक्रिय इंटरनेट उपयोगकर्ता।', ur: 'اسمارٹ فون یا پی سی استعمال کرنے والے صارفین۔' }
  },
  {
    id: 'SCH-30',
    name: { en: 'National Government Services Portal', hi: 'राष्ट्रीय सरकारी सेवा निर्देशिका (NSP Portal)', ur: 'قومی سرکاری خدمات پورٹل' },
    url: 'https://services.india.gov.in',
    category: 'Digital Government Services',
    tags: ['Digital Services'],
    badge: 'New',
    benefits: { en: 'Quick metadata database linking 13,000+ public utilities.', hi: '13,000+ से अधिक सार्वजनिक उपयोगिताओं को जोड़ने वाला त्वरित डेटाबेस।', ur: '13,000 سے زیادہ عوامی یوٹیلیٹیز کو جوڑنے والا پورٹل۔' },
    eligibility: { en: 'Open to the general public.', hi: 'आम जनता के लिए खुला है।', ur: 'عام عوام کے لیے کھلا ہے۔' }
  },
  {
    id: 'SCH-31',
    name: { en: 'National Portal of India', hi: 'भारत का राष्ट्रीय पोर्टल (India.gov.in)', ur: 'بھارت کا قومی پورٹل' },
    url: 'https://www.india.gov.in',
    category: 'Digital Government Services',
    tags: ['Digital Services'],
    benefits: { en: 'Single window access to information on all administrative policies.', hi: 'सभी प्रशासनिक नीतियों और घोषणाओं की जानकारी का एकल स्रोत।', ur: 'تمام انتظامی پالیسیوں اور اعلانات کے بارے میں معلومات کا واحد ذریعہ۔' },
    eligibility: { en: 'All global users and researchers.', hi: 'सभी वैश्विक उपयोगकर्ता और शोधकर्ता।', ur: 'تمام صارفین اور محققین۔' }
  },
  {
    id: 'SCH-32',
    name: { en: 'MyGov Civic Participation', hi: 'मायगव नागरिक सहभागिता मंच', ur: 'مائی گورنمنٹ پورٹل' },
    url: 'https://www.mygov.in',
    category: 'Digital Government Services',
    tags: ['Digital Services', 'Youth'],
    badge: 'Popular',
    benefits: { en: 'Submit policy suggestions, contest prizes, and run surveys.', hi: 'नीतिगत सुझाव प्रस्तुत करें, प्रतियोगिताओं में भाग लें और सर्वेक्षणों में योगदान दें।', ur: 'پالیسی کے مشورے جمع کرائیں، مقابلوں میں حصہ لیں اور سروے مکمل کریں۔' },
    eligibility: { en: 'All citizens of India.', hi: 'भारत के सभी नागरिक।', ur: 'بھارت کے تمام شہری۔' }
  },
  // 11. Women & Child Welfare
  {
    id: 'SCH-33',
    name: { en: 'Ministry of Women & Child Development', hi: 'महिला एवं बाल विकास मंत्रालय', ur: 'وزارت ترقی خواتین و اطفال' },
    url: 'https://wcd.gov.in',
    category: 'Women & Child Welfare',
    tags: ['Women'],
    benefits: { en: 'Safety networks, nutritional support, and safety programs.', hi: 'सुरक्षात्मक नेटवर्क, पोषण संबंधी सहायता और महिला सुरक्षा कार्यक्रम।', ur: 'حفاظتی نیٹ ورک، غذائی امداد اور خواتین کے تحفظ کے پروگرام۔' },
    eligibility: { en: 'Women and children across rural/urban divisions.', hi: 'ग्रामीण/शहरी क्षेत्रों की महिलाएं और बच्चे।', ur: 'دیہی اور شہری علاقوں کی خواتین اور بچے۔' }
  },
  // 12. Social Justice
  {
    id: 'SCH-34',
    name: { en: 'Ministry of Social Justice & Empowerment', hi: 'सामाजिक न्याय एवं अधिकारिता मंत्रालय', ur: 'وزارت سماجی انصاف' },
    url: 'https://socialjustice.gov.in',
    category: 'Social Justice',
    tags: ['Senior Citizen'],
    benefits: { en: 'Aid tools for senior citizens, SC welfare, and equity rehabilitation.', hi: 'वरिष्ठ नागरिकों, अनुसूचित जाति कल्याण और पुनर्वास के लिए सहायक उपकरण।', ur: 'بزرگ شہریوں اور پسماندہ طبقات کی فلاح و بہبود کے لیے معاون ٹولز۔' },
    eligibility: { en: 'Senior citizens and marginalized community members.', hi: 'वरिष्ठ नागरिक और समाज के वंचित वर्गों के सदस्य।', ur: 'بزرگ شہری اور معاشرے کے محروم طبقات۔' }
  },
  // 13. Disabilities
  {
    id: 'SCH-35',
    name: { en: 'Empowerment of Persons with Disabilities', hi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD)', ur: 'معذور افراد کی بہبود کا محکمہ' },
    url: 'https://depwd.gov.in',
    category: 'Persons with Disabilities',
    tags: ['Healthcare'],
    benefits: { en: 'Unique Disability ID (UDID) card and assistive tools.', hi: 'यूनिक डिसेबिलिटी आईडी (UDID) कार्ड और विशेष सहायक उपकरण।', ur: 'معذور افراد کے لیے منفرد شناختی کارڈ (UDID) اور امدادی آلات۔' },
    eligibility: { en: 'Persons with certified disabilities (>40%).', hi: 'सत्यापित दिव्यांगता (40% से अधिक) वाले व्यक्ति।', ur: 'تصدیق شدہ معذوری (40 فیصد سے زیادہ) کے حامل افراد۔' }
  },
  // 14. Rural Development
  {
    id: 'SCH-36',
    name: { en: 'Ministry of Rural Development', hi: 'ग्रामीण विकास मंत्रालय भारत सरकार', ur: 'وزارت دیہی ترقی' },
    url: 'https://rural.gov.in',
    category: 'Rural Development',
    tags: ['Farmer', 'Employment'],
    benefits: { en: 'MGNREGA employment tracking and Self-Help Group microloans.', hi: 'मनरेगा रोजगार ट्रैकिंग और स्वयं सहायता समूह (SHG) ऋण सहायता।', ur: 'منریگا روزگار ٹریکنگ اور سیلف ہیلپ گروپس کے لیے قرضے۔' },
    eligibility: { en: 'Rural workers, artisans, and women micro-entrepreneurs.', hi: 'ग्रामीण मजदूर, कारीगर और महिला सूक्ष्म उद्यमी।', ur: 'دیہی مزدور، کاریگر اور خواتین کاروباری۔' }
  },
  // 15. Labour & Employment
  {
    id: 'SCH-37',
    name: { en: 'Ministry of Labour & Employment', hi: 'श्रम एवं रोजगार मंत्रालय आधिकारिक पोर्टल', ur: 'وزارت محنت و روزگار' },
    url: 'https://labour.gov.in',
    category: 'Labour & Employment',
    tags: ['Employment', 'Pension'],
    benefits: { en: 'EPFO provident accounts, ESIC health clinics, and apprentice support.', hi: 'ईपीएफओ भविष्य निधि खाते, ईएसआईसी स्वास्थ्य सेवाएं और शिक्षुता सहायता।', ur: 'ای پی ایف او پروویڈنٹ اکاؤنٹس، ای ایس آئی سی صحت کی دیکھ بھال اور اپرنٹس سپورٹ۔' },
    eligibility: { en: 'Industrial laborers, apprentices, formal and informal workers.', hi: 'औद्योगिक श्रमिक, शिक्षु, औपचारिक और अनौपचारिक क्षेत्र के मजदूर।', ur: 'صنعتی مزدور، اپرنٹس اور رسمی و غیر رسمی شعبے کے کارکن۔' }
  },
  {
    id: 'SCH-38',
    name: { en: 'Pradhan Mantri Vaya Vandana Yojana (PMVVY)', hi: 'प्रधानमंत्री वय वंदना योजना', ur: 'پی ایم ویا وندنا یوجنا' },
    url: 'https://licindia.in',
    category: 'Senior Citizen Schemes',
    tags: ['Senior Citizen', 'Pension'],
    badge: 'Popular',
    type: 'Central',
    benefits: { en: 'Guaranteed pension payout of 7.4% per annum for senior citizens aged 60+.', hi: '60 वर्ष से अधिक आयु के वरिष्ठ नागरिकों के लिए प्रति वर्ष 7.4% की गारंटीकृत पेंशन।', ur: '60 سال سے زائد عمر کے بزرگ شہریوں کے لیے سالانہ 7.4 فیصد کی گارنٹی شدہ پینشن۔' },
    eligibility: { en: 'Indian citizens aged 60 years and above.', hi: '60 वर्ष और उससे अधिक आयु के भारतीय नागरिक।', ur: '60 سال اور اس سے زیادہ عمر کے ہندوستانی شہری۔' },
    applicationProcess: { en: 'Online through LIC website or offline at any LIC branch office.', hi: 'एलआईसी वेबसाइट के माध्यम से ऑनलाइन या किसी भी एलआईसी शाखा कार्यालय में ऑफलाइन।', ur: 'ایل آئی سی ویب سائٹ کے ذریعے آن لائن یا کسی بھی ایل آئی سی برانچ آفس میں۔' },
    importantDates: { en: 'Open throughout the year for enrollment.', hi: 'नामांकन के लिए वर्ष भर खुला है।', ur: 'اندراج کے لیے سال بھر کھلا رہتا ہے۔' },
    downloadFormsUrl: 'https://licindia.in/forms',
    officialNotificationUrl: 'https://financialservices.gov.in',
    faqs: [
      { q: 'What is the maximum investment limit?', a: 'Rs. 15 Lakhs per senior citizen.' },
      { q: 'Can I withdraw money prematurely?', a: 'Yes, in case of critical illness of self or spouse.' }
    ]
  },
  {
    id: 'SCH-39',
    name: { en: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)', hi: 'प्रधानमंत्री कौशल विकास योजना 4.0', ur: 'پی ایم کوشل وکاس یوجنا 4.0' },
    url: 'https://www.pmkvyofficial.org',
    category: 'Skill Development',
    tags: ['Students', 'Employment', 'Digital Services'],
    badge: 'New',
    type: 'Central',
    benefits: { en: 'Free industry-certified industry training in AI, robotics, coding, and traditional skills plus placement aid.', hi: 'एआई, रोबोटिक्स, कोडिंग और पारंपरिक कौशल में मुफ्त उद्योग-प्रमाणित प्रशिक्षण और प्लेसमेंट सहायता।', ur: 'اے آئی، روبوٹکس، کوڈنگ اور روایتی مہارتوں میں مفت انڈسٹری سرٹیفائیڈ تربیت اور روزگار کی مدد۔' },
    eligibility: { en: 'Unemployed youth, school/college dropouts aged 15 to 45 years.', hi: '15 से 45 वर्ष की आयु के बेरोजगार युवा, स्कूल/कॉलेज छोड़ने वाले छात्र।', ur: '15 سے 45 سال کی عمر کے بے روزگار نوجوان اور اسکول/کالج کے طلباء۔' },
    applicationProcess: { en: 'Register online via Skill India Digital Portal using Aadhaar verification.', hi: 'आधार सत्यापन का उपयोग करके स्किल इंडिया डिजिटल पोर्टल के माध्यम से ऑनलाइन पंजीकरण करें।', ur: 'آدھار تصدیق کے ذریعے اسکل انڈیا ڈیجیٹل پورٹل پر آن لائن رجسٹر کریں۔' },
    importantDates: { en: 'Batch enrollments start every month on the 1st.', hi: 'बैच नामांकन हर महीने की 1 तारीख से शुरू होते हैं।', ur: 'بیچ میں داخلے ہر مہینے کی یکم تاریخ سے شروع ہوتے ہیں۔' },
    downloadFormsUrl: 'https://www.pmkvyofficial.org/forms',
    officialNotificationUrl: 'https://msde.gov.in',
    faqs: [
      { q: 'Is there any course fee?', a: 'No, training and certification are 100% free funded by Gov of India.' },
      { q: 'Do we receive a certificate?', a: 'Yes, NSDC accredited certificate valid across India and abroad.' }
    ]
  },
  {
    id: 'SCH-40',
    name: { en: 'Startup India Seed Fund Scheme (SISFS)', hi: 'स्टार्टअप इंडिया सीड फंड योजना', ur: 'اسٹارٹ اپ انڈیا سیڈ فنڈ' },
    url: 'https://seedfund.startupindia.gov.in',
    category: 'Startup Support',
    tags: ['Business', 'Digital Services'],
    badge: 'Popular',
    type: 'Central',
    benefits: { en: 'Financial assistance up to Rs. 50 Lakhs for prototype validation, trials, and market entry.', hi: 'प्रोटोटाइप सत्यापन, परीक्षण और बाजार में प्रवेश के लिए ₹50 लाख तक की वित्तीय सहायता।', ur: 'پروٹوٹائپ کی تصدیق، ٹرائلز اور مارکیٹ میں انٹری کے لیے 50 لاکھ روپے تک کی مالی مدد۔' },
    eligibility: { en: 'DPIIT recognized startups incorporated within the last 2 years.', hi: 'डीपीआईआईटी मान्यता प्राप्त स्टार्टअप जो पिछले 2 वर्षों के भीतर निगमित हुए हों।', ur: 'ڈی پی آئی آئی ٹی سے تسلیم شدہ اسٹارٹ اپ جو پچھلے 2 سالوں کے اندر قائم ہوئے ہوں۔' },
    applicationProcess: { en: 'Apply online on Startup India portal by selecting preferred incubator.', hi: 'पसंदीदा इनक्यूबेटर चुनकर स्टार्टअप इंडिया पोर्टल पर ऑनलाइन आवेदन करें।', ur: 'پسندیدہ انکیوبیٹر کو منتخب کر کے اسٹارٹ اپ انڈیا پورٹل پر آن لائن درخواست دیں۔' },
    importantDates: { en: 'Applications are accepted on a rolling basis 365 days a year.', hi: 'आवेदन वर्ष के 365 दिन रोलिंग आधार पर स्वीकार किए जाते हैं।', ur: 'درخواستیں سال کے 365 دن قبول کی جاتی ہیں۔' },
    downloadFormsUrl: 'https://startupindia.gov.in/downloads',
    officialNotificationUrl: 'https://dpiit.gov.in',
    faqs: [
      { q: 'Do I need DPIIT recognition first?', a: 'Yes, valid DPIIT certificate is mandatory.' },
      { q: 'Is it equity or grant?', a: 'Both grants (up to 20L) and debt/convertible debentures (up to 50L) are available.' }
    ]
  },
  {
    id: 'SCH-41',
    name: { en: 'Central Sector Scholarship Scheme for College Students', hi: 'महाविद्यालयीन छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना', ur: 'کالج کے طلباء کے لیے مرکزی اسکالرشپ' },
    url: 'https://scholarships.gov.in',
    category: 'Central Government Schemes',
    tags: ['Students', 'Scholarship'],
    badge: 'Recently Updated',
    type: 'Central',
    benefits: { en: 'Rs. 10,000 to Rs. 20,000 per annum for higher studies.', hi: 'उच्च अध्ययन के लिए प्रति वर्ष ₹10,000 से ₹20,000।', ur: 'اعلیٰ تعلیم کے لیے سالانہ 10,000 سے 20,000 روپے کا وظیفہ۔' },
    eligibility: { en: 'Students scoring above 80th percentile in Class 12th board exams with family income < 8 LPA.', hi: 'कक्षा 12वीं की बोर्ड परीक्षा में 80वें पर्सेंटाइल से अधिक अंक पाने वाले छात्र जिनकी पारिवारिक आय 8 लाख से कम हो।', ur: 'کلاس 12 کے بورڈ امتحانات میں 80 فیصد سے زیادہ نمبر حاصل کرنے والے طلباء جن کی خاندانی آمدنی 8 لاکھ سے کم ہو۔' },
    applicationProcess: { en: 'Apply through National Scholarship Portal (NSP) during admission season.', hi: 'प्रवेश के मौसम के दौरान राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) के माध्यम से आवेदन करें।', ur: 'داخلے کے سیزن کے دوران نیشنل اسکالرشپ پورٹل (NSP) کے ذریعے درخواست دیں۔' },
    importantDates: { en: 'Last date for submission: 31st December every academic year.', hi: 'जमा करने की अंतिम तिथि: हर शैक्षणिक वर्ष की 31 दिसंबर।', ur: 'جمع کرانے کی آخری تاریخ: ہر تعلیمی سال کی 31 دسمبر۔' },
    downloadFormsUrl: 'https://scholarships.gov.in/forms',
    officialNotificationUrl: 'https://education.gov.in'
  },
  {
    id: 'SCH-42',
    name: { en: 'Chief Minister Youth Self-Employment Scheme (State Level)', hi: 'मुख्यमंत्री युवा स्वरोजगार योजना (राज्य स्तर)', ur: 'وزیر اعلیٰ نوجوان روزگار اسکیم' },
    url: 'https://msme.gov.in',
    category: 'State Government Schemes',
    tags: ['Employment', 'Business', 'Youth'],
    badge: 'Popular',
    type: 'State',
    benefits: { en: 'Margin money subsidy up to 25% and term loan up to Rs. 25 Lakhs for setting up enterprises.', hi: 'उद्यम स्थापित करने के लिए 25% तक मार्जिन मनी सब्सिडी और ₹25 लाख तक का सावधि ऋण।', ur: 'کاروبار شروع کرنے کے لیے 25 فیصد تک کی سبسڈی اور 25 لاکھ روپے تک کا قرض۔' },
    eligibility: { en: 'State residents aged 18 to 40 years with minimum 10th pass qualification.', hi: '18 से 40 वर्ष की आयु के राज्य के निवासी जिनकी न्यूनतम योग्यता 10वीं पास हो।', ur: '18 سے 40 سال کی عمر کے ریاستی رہائشی جو کم از کم 10ویں پاس ہوں۔' },
    applicationProcess: { en: 'Apply through respective State Industries Department portal or District Industries Centre (DIC).', hi: 'संबंधित राज्य उद्योग विभाग के पोर्टल या जिला उद्योग केंद्र (DIC) के माध्यम से आवेदन करें।', ur: 'متعلقہ ریاستی محکمہ صنعت کے پورٹل یا ضلعی صنعتی مرکز کے ذریعے درخواست دیں۔' },
    importantDates: { en: 'Quarterly application review cycles in Jan, April, July, and Oct.', hi: 'जनवरी, अप्रैल, जुलाई और अक्टूबर में त्रैमासिक आवेदन समीक्षा चक्र।', ur: 'جنوری، اپریل، جولائی اور اکتوبر میں سہ ماہی درخواستوں کا جائزہ لیا جاتا ہے۔' },
    downloadFormsUrl: 'https://msme.gov.in/forms',
    officialNotificationUrl: 'https://msme.gov.in'
  }
];

interface StatePortal {
  name: string;
  url: string;
  desc: { en: string; hi: string; ur: string };
}

const STATE_PORTALS: Record<string, StatePortal[]> = {
  mp: [
    { name: 'Madhya Pradesh Government', url: 'https://mp.gov.in', desc: { en: 'Official portal for state welfare programs.', hi: 'राज्य कल्याणकारी कार्यक्रमों के लिए आधिकारिक पोर्टल।', ur: 'ریاستی فلاحی پروگراموں کے لیے سرکاری پورٹل۔' } },
    { name: 'MP e-District Services', url: 'https://mpedistrict.gov.in', desc: { en: 'Apply for residence, income, and caste certifications.', hi: 'निवास, आय और जाति प्रमाण पत्र के लिए ऑनलाइन आवेदन करें।', ur: 'رہائش، آمدنی اور ذات کے سرٹیفکیٹ کے لیے درخواست دیں۔' } },
    { name: 'MP State Scholarship Portal', url: 'https://scholarshipportal.mp.nic.in', desc: { en: 'Minority and backward classes academic stipends portal.', hi: 'अल्पसंख्यक और पिछड़ा वर्ग शैक्षणिक छात्रवृत्ति पोर्टल।', ur: 'اقلیتوں اور پسماندہ طبقات کے لیے اسکالرشپ پورٹل۔' } }
  ],
  rj: [
    { name: 'Rajasthan Government Portal', url: 'https://rajasthan.gov.in', desc: { en: 'Central gateway to administrative state directives.', hi: 'प्रशासनिक राज्य निर्देशों और योजनाओं का मुख्य द्वार।', ur: 'ریاستی انتظامی خدمات اور اسکیموں کا پورٹل۔' } },
    { name: 'Jan Soochna Portal', url: 'https://jansoochna.rajasthan.gov.in', desc: { en: 'Direct tracking of state subsidies and beneficiaries.', hi: 'राज्य की सब्सिडी और लाभार्थियों की सीधी जानकारी।', ur: 'ریاستی سبسڈیز اور فوائد کی براہ راست معلومات۔' } },
    { name: 'SSO Rajasthan Gateway', url: 'https://sso.rajasthan.gov.in', desc: { en: 'Single sign-on access to apply online for recruitment/IDs.', hi: 'सरकारी भर्तियों और आईडी के लिए आवेदन हेतु सिंगल साइन-ऑन।', ur: 'آن لائن ملازمتوں اور شناختی کارڈز کے لیے سنگل سائن آن۔' } }
  ],
  up: [
    { name: 'Uttar Pradesh Government Portal', url: 'https://up.gov.in', desc: { en: 'Official state department directory and public welfare.', hi: 'आधिकारिक राज्य विभाग निर्देशिका और जन कल्याणकारी योजनाएं।', ur: 'یو پی کے سرکاری محکموں اور فلاحی اسکیموں کا پورٹل۔' } },
    { name: 'e-District UP', url: 'https://edistrict.up.gov.in', desc: { en: 'Apply for state certificates, pensions, and documents.', hi: 'राज्य प्रमाण पत्र, पेंशन और दस्तावेजों के लिए आवेदन करें।', ur: 'ریاستی سرٹیفکیٹس، پنشن اور دستاویزات کے لیے درخواست دیں۔' } },
    { name: 'UP Scholarship & Fee Portal', url: 'https://scholarship.up.gov.in', desc: { en: 'Stipends and fee reimbursement tracker for minority youth.', hi: 'अल्पसंख्यक युवाओं के लिए छात्रवृत्ति और शुल्क प्रतिपूर्ति पोर्टल।', ur: 'اقلیتی طلبہ کے لیے اسکالرشپ اور فیس کی واپسی کا پورٹل۔' } }
  ],
  mh: [
    { name: 'Maharashtra Government', url: 'https://maharashtra.gov.in', desc: { en: 'Unified portal to public departments and updates.', hi: 'सार्वजनिक विभागों और अपडेट के लिए एकीकृत पोर्टल।', ur: 'سرکاری محکموں اور اپ ڈیٹس کا واحد پورٹل۔' } },
    { name: 'Aaple Sarkar Citizen Portal', url: 'https://aaplesarkar.mahaonline.gov.in', desc: { en: 'One-stop verification and certificate requests hub.', hi: 'सत्यापन और प्रमाणपत्र अनुरोधों का वन-स्टॉप नागरिक केंद्र।', ur: 'سرٹیفکیٹس کی درخواست اور تصدیق کا واحد مرکز۔' } },
    { name: 'MahaDBT Direct Transfer', url: 'https://mahadbt.maharashtra.gov.in', desc: { en: 'Scholarships and agriculture funds deposited via DBT.', hi: 'डीबीटी के माध्यम से छात्रवृत्ति और कृषि निधि।', ur: 'ڈی بی ٹی کے ذریعے اسکالرشپ اور زرعی فنڈز۔' } }
  ]
};

const STATES_METADATA = [
  { id: 'mp', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश', nameUr: 'مدھیہ پردیش' },
  { id: 'rj', nameEn: 'Rajasthan', nameHi: 'राजस्थान', nameUr: 'راجستھان' },
  { id: 'up', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश', nameUr: 'اتر پردیش' },
  { id: 'mh', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र', nameUr: 'مہاراشٹرا' }
];

export default function GovernmentSchemes({ currentLanguage, onNavigate, defaultCategory }: GovernmentSchemesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory || 'All');
  const [activeState, setActiveState] = useState<string>('mp');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [schemeTypeFilter, setSchemeTypeFilter] = useState<'All' | 'Central' | 'State'>('All');

  useEffect(() => {
    if (defaultCategory) {
      setSelectedCategory(defaultCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [defaultCategory]);

  // SEO Schema Markup implementation
  useEffect(() => {
    const scriptId = 'gov-schemes-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "serviceType": "Public Welfare Directory",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Government of India & State Welfare Portals"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Minorities, Students, Farmers, Women, Senior Citizens, Business Owners"
      },
      "description": "Information and directory of official welfare schemes, minority scholarships, financial aid, and public services."
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const allTags = ['All', 'Student', 'Minority', 'Women', 'Farmer', 'Youth', 'Senior Citizen', 'Business', 'MSME', 'Healthcare', 'Housing', 'Employment', 'Pension', 'Digital Services'];

  const filteredSchemes = SCHEMES.filter(scheme => {
    const textToSearch = `${scheme.name.en} ${scheme.name.hi} ${scheme.name.ur} ${scheme.benefits.en} ${scheme.benefits.hi} ${scheme.benefits.ur}`.toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || textToSearch.includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === 'All' || scheme.tags.includes(selectedTag);
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
    const matchesType = schemeTypeFilter === 'All' || scheme.type === schemeTypeFilter;

    return matchesSearch && matchesTag && matchesCategory && matchesType;
  });

  const handleExport = (format: 'pdf' | 'excel') => {
    if (format === 'pdf') {
      window.print();
    } else {
      const csvContent = "data:text/csv;charset=utf-8," 
        + "ID,Scheme Name,Category,URL,Benefits\n"
        + filteredSchemes.map(e => `"${e.id}","${e.name.en}","${e.category}","${e.url}","${e.benefits.en.replace(/"/g, '""')}"`).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Rangrez_Schemes_Export_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getLocalizedCategoryName = (cat: string) => {
    return CATEGORIES_TRANSLATION[cat]?.[currentLanguage] || cat;
  };

  const getBadgeColor = (badge?: string) => {
    if (badge === 'Popular') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (badge === 'New') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    return 'bg-indigo-100 text-indigo-800 border-indigo-200';
  };

  const textMap = {
    title: { en: 'Government Schemes & Minority Welfare', hi: 'सरकारी योजनाएं एवं अल्पसंख्यक कल्याण', ur: 'سرکاری اسکیمیں اور اقلیती بہبود' },
    sub: {
      en: 'Access official Government of India and State Government welfare schemes, scholarships, healthcare, employment, financial assistance, housing, digital services, minority welfare, and business support through trusted official portals.',
      hi: 'भरोसेमंद आधिकारिक पोर्टलों के माध्यम से भारत सरकार और राज्य सरकार की कल्याणकारी योजनाओं, छात्रवृत्ति, स्वास्थ्य सेवा, रोजगार, वित्तीय सहायता, आवास, डिजिटल सेवाओं, अल्पसंख्यक कल्याण और व्यावसायिक सहायता का उपयोग करें।',
      ur: 'قابل اعتماد سرکاری پورٹلز کے ذریعے حکومت ہند اور ریاستی حکومتوں کی فلاحی اسکیموں، اسکالرشپ، صحت کی دیکھ بھال، ملازمت، مالی امداد، رہائش، ڈیجیٹل خدمات، اقلیتی بہبود اور کاروباری مدد تک رسائی حاصل کریں۔'
    },
    searchPlaceholder: { en: 'Search scheme name or keyword...', hi: 'योजना का नाम या कीवर्ड खोजें...', ur: 'اسکیم کا نام یا مطلوبہ الفاظ تلاش کریں...' },
    disclaimerTitle: { en: 'Independent Information Desk Disclaimer', hi: 'स्वतंत्र सूचना डेस्क अस्वीकरण', ur: 'معلوماتی ڈیسک کا ڈس کلیمر' },
    disclaimerText: {
      en: 'This website is an independent community information platform. We do not process applications, collect beneficiary data, or represent any government department. All applications and registrations are completed only through the respective official government websites.',
      hi: 'यह वेबसाइट एक स्वतंत्र सामुदायिक सूचना मंच है। हम आवेदनों को संसाधित नहीं करते हैं, लाभार्थी डेटा एकत्र नहीं करते हैं, या किसी सरकारी विभाग का प्रतिनिधित्व नहीं करते हैं। सभी आवेदन और पंजीकरण केवल संबंधित आधिकारिक सरकारी वेबसाइटों के माध्यम से पूरे किए जाते हैं।',
      ur: 'یہ ویب سائٹ ایک خود مختار کمیونٹی معلوماتی پلیٹ فارم ہے۔ ہم درخواستوں پر کارروائی نہیں کرتے، مستفید ہونے والوں کا ڈیٹا اکٹھا نہیں کرتے، یا کسی بھی سرکاری محکمے کی نمائندگی نہیں کرتے۔ تمام درخواستیں اور رجسٹریشن صرف متعلقہ سرکاری ویب سائٹس کے ذریعے ہی مکمل کیے جاتے ہیں۔'
    },
    stateHeader: { en: 'State Government Services', hi: 'राज्य सरकार सेवाएं', ur: 'ریاستی حکومت کی خدمات' },
    stateSub: {
      en: 'Select your state below to find dedicated provincial portals, scholarship boards, and local digital registries.',
      hi: 'प्रांतीय पोर्टल, छात्रवृत्ति बोर्ड और स्थानीय डिजिटल रजिस्ट्रियां खोजने के लिए नीचे अपने राज्य का चयन करें।',
      ur: 'صوبائی پورٹلز، اسکالرشپ بورڈز اور مقامی ڈیجیٹل خدمات تلاش کرنے کے لیے نیچے اپنی ریاست کا انتخاب کریں۔'
    },
    visitBtn: { en: 'Visit Official Website', hi: 'आधिकारिक वेबसाइट पर जाएं', ur: 'آفیشل ویب سائٹ دیکھیں' },
    learnBtn: { en: 'Learn More', hi: 'अधिक जानें', ur: 'تفصیلات دیکھیں' },
    detailsTitle: { en: 'Scheme Detailed Information', hi: 'योजना की विस्तृत जानकारी', ur: 'اسکیم کی تفصیلی معلومات' },
    benefitsLabel: { en: 'Welfare Benefits:', hi: 'कल्याणकारी लाभ:', ur: 'فلاحی فوائد:' },
    eligibilityLabel: { en: 'Eligibility Criteria:', hi: 'पात्रता मापदंड:', ur: 'اہلیت کا معیار:' },
    docsLabel: { en: 'Required Verification Documents:', hi: 'आवश्यक सत्यापन दस्तावेज:', ur: 'مطلوبہ تصدیقی دستاویزات:' },
    docsText: {
      en: 'Aadhaar Card, Academic Marksheets (if Student), Income Certificate issued by Tahsildar, Caste/Community Certificate, Bank Passbook copy for direct DBT transfers.',
      hi: 'आधार कार्ड, शैक्षणिक मार्कशीट (यदि छात्र हैं), तहसीलदार द्वारा जारी आय प्रमाण पत्र, जाति/समुदाय प्रमाण पत्र, सीधे डीबीटी हस्तांतरण के लिए बैंक पासबुक की प्रति।',
      ur: 'آدھار کارڈ، تعلیمی مارک شیٹ (اگر طالب علم ہو)، انکم سرٹیفکیٹ، کاسٹ سرٹیفکیٹ، اور بینک پاس بک کی کاپی۔'
    },
    safetyTipTitle: { en: 'Official Verification Warning', hi: 'आधिकारिक सत्यापन चेतावनी', ur: 'سرکاری تصدیق کی وارننگ' },
    safetyTipText: {
      en: 'Always verify the URL starts with https:// and ends with .gov.in or .nic.in before typing sensitive identification or financial credentials. Government portals never charge money for submitting scholarship or scheme applications.',
      hi: 'संवेदनशील पहचान या वित्तीय क्रेडेंशियल दर्ज करने से पहले हमेशा जांचें कि यूआरएल https:// से शुरू होता है और .gov.in या .nic.in पर समाप्त होता है। सरकारी पोर्टल कभी भी छात्रवृत्ति या योजना आवेदन जमा करने के लिए पैसे नहीं मांगते हैं।',
      ur: 'حساس معلومات یا مالی تفصیلات درج کرنے سے پہلے ہمیشہ تصدیق کریں کہ URL https:// سے شروع ہوتا ہے اور .gov.in یا .nic.in پر ختم ہوتا ہے۔ سرکاری پورٹلز کبھی بھی فارم جمع کرانے کے پیسے نہیں مانگتے۔'
    },
    ctaInternationalTitle: { en: 'Looking for Opportunities Beyond Borders?', hi: 'क्या आप सीमाओं से परे अवसरों की तलाश कर रहे हैं?', ur: 'کیا آپ بیرون ملک ملازمت کے مواقع تلاش کر رہے ہیں؟' },
    ctaInternationalSub: {
      en: 'Discover certified career portals and reputable global recruitment platforms specifically vetted for overseas employment.',
      hi: 'विदेशी रोजगार के लिए विशेष रूप से जांचे गए प्रमाणित करियर पोर्टलों और प्रतिष्ठित वैश्विक भर्ती मंचों की खोज करें।',
      ur: 'بیرون ملک ملازمتوں کے لیے تصدیق شدہ کیریئر پورٹلز اور معتبر عالمی بھرتی پلیٹ فارمز کو دریافت کریں۔'
    },
    ctaInternationalBtn: { en: 'Explore International Careers', hi: 'अंतर्राष्ट्रीय करियर का अन्वेषण करें', ur: 'بین الاقوامی کیریئر دیکھیں' }
  };

  const currentText = textMap;

  const handleLearnMore = (scheme: Scheme) => {
    setSelectedScheme(scheme);
  };

  const handleCloseModal = () => {
    setSelectedScheme(null);
  };

  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('education');
      setTimeout(() => {
        const el = document.getElementById('international_careers_section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="py-12 bg-gray-50 border-t border-b border-gray-100" id="government_schemes_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-xs text-gray-400 font-medium space-x-2" aria-label="Breadcrumb">
          <span className="hover:text-emerald-800 cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
            {currentLanguage === 'en' ? 'Home' : currentLanguage === 'ur' ? 'ہوم' : 'होम'}
          </span>
          <span>/</span>
          <span className="hover:text-emerald-800 cursor-pointer" onClick={() => onNavigate && onNavigate('education')}>
            {currentLanguage === 'en' ? 'Services' : currentLanguage === 'ur' ? 'خدمات' : 'सेवाएं'}
          </span>
          <span>/</span>
          <span className="text-gray-600 font-semibold">{currentText.title[currentLanguage]}</span>
        </nav>

        {/* Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <Landmark className="h-4 w-4 text-[#004B23]" />
            <span className="text-[10px] sm:text-xs font-bold text-[#004B23] uppercase tracking-wider">
              {currentLanguage === 'en' ? 'OFFICIAL DIRECTORY DESK' : currentLanguage === 'ur' ? 'آفیشل ڈائریکٹری ڈیسک' : 'आधिकारिक निर्देशिका डेस्क'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-gray-900 leading-tight">
            {currentText.title[currentLanguage]}
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-4 leading-relaxed max-w-3xl mx-auto">
            {currentText.sub[currentLanguage]}
          </p>
        </div>

        {/* Disclaimer Board */}
        <div className="bg-amber-50/70 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10 shadow-xs flex items-start space-x-3.5">
          <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider flex items-center">
              <span>{currentText.disclaimerTitle[currentLanguage]}</span>
            </h4>
            <p className="text-amber-800 text-xs leading-relaxed font-medium">
              {currentText.disclaimerText[currentLanguage]}
            </p>
          </div>
        </div>

        {/* Admin Statistics & Export Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold text-gray-700 flex items-center space-x-1.5">
              <Filter className="h-4 w-4 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Scheme Scope:' : currentLanguage === 'ur' ? 'اسکیم کا دائرہ:' : 'योजना का दायरा:'}</span>
            </span>
            <button
              onClick={() => setSchemeTypeFilter('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                schemeTypeFilter === 'All' ? 'bg-[#004B23] text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {currentLanguage === 'en' ? 'All Schemes' : currentLanguage === 'ur' ? 'تمام اسکیمیں' : 'सभी योजनाएं'} ({SCHEMES.length})
            </button>
            <button
              onClick={() => setSchemeTypeFilter('Central')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                schemeTypeFilter === 'Central' ? 'bg-[#004B23] text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {currentLanguage === 'en' ? 'Central Govt Only' : currentLanguage === 'ur' ? 'صرف مرکزی حکومت' : 'केवल केंद्र सरकार'}
            </button>
            <button
              onClick={() => setSchemeTypeFilter('State')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                schemeTypeFilter === 'State' ? 'bg-[#004B23] text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {currentLanguage === 'en' ? 'State Govt Only' : currentLanguage === 'ur' ? 'صرف ریاستی حکومت' : 'केवल राज्य सरकार'}
            </button>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => handleExport('excel')}
              className="px-3 py-1.5 bg-emerald-50 text-[#004B23] border border-emerald-200 rounded-lg text-xs font-bold hover:bg-emerald-100 transition flex items-center space-x-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Export Excel (CSV)' : currentLanguage === 'ur' ? 'ایکسل ایکسپورٹ' : 'एक्सेल निर्यात'}</span>
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg text-xs font-bold hover:bg-gray-200 transition flex items-center space-x-1.5"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Print / PDF' : currentLanguage === 'ur' ? 'پرنٹ / پی ڈی ایف' : 'प्रिंट / पीडीएफ'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Filter Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Categories and Filters */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search input */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {currentLanguage === 'en' ? 'Search schemes' : currentLanguage === 'ur' ? 'اسکیم تلاش کریں' : 'योजनाएं खोजें'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentText.searchPlaceholder[currentLanguage]}
                  className="w-full bg-gray-50 border border-gray-200/80 text-xs p-3 pl-9 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] transition placeholder-gray-400"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Category Selector Card */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs space-y-2">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {currentLanguage === 'en' ? 'Category Filter' : currentLanguage === 'ur' ? 'کیٹیگری فلٹر' : 'श्रेणी फ़िल्टर'}
              </label>
              <button
                onClick={() => setSelectedCategory('All')}
                className={`w-full text-left px-3 py-2 rounded text-xs transition font-semibold flex justify-between items-center ${
                  selectedCategory === 'All' ? 'bg-[#004B23] text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span>{currentLanguage === 'en' ? 'All Categories' : currentLanguage === 'ur' ? 'تمام کیٹیگریز' : 'सभी श्रेणियां'}</span>
                <span className="text-[10px] opacity-60 font-mono">{SCHEMES.length}</span>
              </button>
              {Object.keys(CATEGORIES_TRANSLATION).map((cat) => {
                const count = SCHEMES.filter(s => s.category === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded text-xs transition font-semibold flex justify-between items-center ${
                      selectedCategory === cat ? 'bg-[#004B23] text-white' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="truncate mr-2">{getLocalizedCategoryName(cat)}</span>
                    <span className="text-[10px] opacity-60 font-mono">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Target Group Selector Card */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {currentLanguage === 'en' ? 'Demographic Tag' : currentLanguage === 'ur' ? 'صارف گروپ' : 'उपयोगकर्ता समूह'}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-2.5 py-1 rounded text-[10px] font-bold transition border ${
                      selectedTag === tag 
                        ? 'bg-[#004B23] text-white border-[#004B23]' 
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {tag === 'All' 
                      ? (currentLanguage === 'en' ? 'All Groups' : currentLanguage === 'ur' ? 'تمام گروپ' : 'सभी समूह')
                      : tag}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Schemes Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {currentLanguage === 'en' ? `Portal Results (${filteredSchemes.length})` : currentLanguage === 'ur' ? `نتائج (${filteredSchemes.length})` : `परिणाम (${filteredSchemes.length})`}
              </h3>
              <span className="text-[10px] text-gray-400 font-mono bg-white border border-gray-200 px-2 py-0.5 rounded shadow-xs">
                {currentLanguage === 'en' ? 'Official Public Services' : 'आधिकारिक सार्वजनिक सेवाएं'}
              </span>
            </div>

            {filteredSchemes.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 space-y-2">
                <Search className="h-8 w-8 text-gray-300 mx-auto animate-pulse" />
                <p className="font-bold text-xs uppercase text-gray-700">
                  {currentLanguage === 'en' ? 'No Welfare Schemes Found' : 'कोई कल्याणकारी योजना नहीं मिली'}
                </p>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  {currentLanguage === 'en' ? 'Try clearing your search query or choosing another category filter.' : 'कृपया अपना खोज विवरण बदलें या अन्य श्रेणी फ़िल्टर चुनें।'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredSchemes.map((scheme) => (
                  <div 
                    key={scheme.id}
                    className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge / Category Header */}
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase tracking-wider truncate max-w-[150px]">
                          {getLocalizedCategoryName(scheme.category)}
                        </span>
                        
                        {scheme.badge && (
                          <span className={`text-[8px] font-extrabold uppercase border px-2 py-0.5 rounded-full tracking-wider ${getBadgeColor(scheme.badge)}`}>
                            {scheme.badge}
                          </span>
                        )}
                      </div>

                      {/* Portal Name */}
                      <h4 className="text-sm font-serif font-bold text-gray-900 group-hover:text-[#004B23] transition-colors leading-snug">
                        {scheme.name[currentLanguage]}
                      </h4>

                      {/* Brief description */}
                      <div className="mt-3 space-y-2.5">
                        <div className="text-[11px] leading-relaxed text-gray-600">
                          <strong className="text-gray-700 block text-[10px] uppercase font-bold tracking-wider mb-0.5">
                            {currentText.benefitsLabel[currentLanguage]}
                          </strong>
                          {scheme.benefits[currentLanguage]}
                        </div>

                        <div className="text-[11px] leading-relaxed text-gray-500 font-light">
                          <strong className="text-gray-700 block text-[10px] uppercase font-bold tracking-wider mb-0.5">
                            {currentText.eligibilityLabel[currentLanguage]}
                          </strong>
                          {scheme.eligibility[currentLanguage]}
                        </div>
                      </div>
                    </div>

                    {/* Action Panel */}
                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                      <button 
                        onClick={() => handleLearnMore(scheme)}
                        className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100 px-3 py-2 rounded-lg flex items-center space-x-1 border border-emerald-100 transition"
                      >
                        <Info className="h-3.5 w-3.5" />
                        <span>{currentText.learnBtn[currentLanguage]}</span>
                      </button>

                      <a 
                        href={scheme.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#004B23] hover:bg-[#003d1c] px-3.5 py-2 rounded-lg flex items-center space-x-1 shadow-xs hover:shadow-sm transition"
                      >
                        <span>{currentText.visitBtn[currentLanguage]}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* State Government Portals Directory */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-12 shadow-xs" id="state_schemes_section">
          <div className="border-b border-gray-100 pb-5 mb-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 flex items-center space-x-2">
              <Map className="h-5 w-5 text-[#004B23]" />
              <span>{currentText.stateHeader[currentLanguage]}</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {currentText.stateSub[currentLanguage]}
            </p>
          </div>

          {/* State selectors */}
          <div className="flex flex-wrap gap-2 mb-6">
            {STATES_METADATA.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveState(st.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 border ${
                  activeState === st.id
                    ? 'bg-[#004B23] text-white border-[#004B23] shadow-xs'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className={`h-1.5 w-1.5 rounded-full ${activeState === st.id ? 'bg-[#F4C430]' : 'bg-gray-400'}`} />
                <span>{currentLanguage === 'en' ? st.nameEn : currentLanguage === 'ur' ? st.nameUr : st.nameHi}</span>
              </button>
            ))}
          </div>

          {/* State portal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STATE_PORTALS[activeState]?.map((portal, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-200 hover:shadow-xs transition duration-300"
              >
                <div>
                  <h4 className="text-xs font-bold text-gray-800 tracking-tight flex items-center justify-between">
                    <span>{portal.name}</span>
                    <span className="text-[8px] uppercase tracking-wider text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded bg-white">
                      {activeState.toUpperCase()} Portal
                    </span>
                  </h4>
                  <p className="text-[11px] leading-relaxed text-gray-500 mt-2">
                    {portal.desc[currentLanguage]}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-200/50 flex justify-end">
                  <a 
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-800 hover:text-white hover:bg-emerald-800 border border-emerald-200 px-3 py-1.5 rounded transition flex items-center space-x-1"
                  >
                    <span>{currentText.visitBtn[currentLanguage]}</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Redirect Career CTA */}
        {onNavigate && (
          <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 border border-emerald-800 rounded-2xl p-6 sm:p-8 text-center sm:text-left shadow-lg text-white flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-800/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-1 bg-emerald-800/50 border border-emerald-700/80 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-amber-300">
                <Sparkles className="h-3 w-3" />
                <span>{currentLanguage === 'en' ? 'OVERSEAS RECRUITMENTS GATEWAY' : 'ग्लोबल करियर प्रवेश द्वार'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                {currentText.ctaInternationalTitle[currentLanguage]}
              </h3>
              <p className="text-emerald-200 text-xs leading-relaxed font-light">
                {currentText.ctaInternationalSub[currentLanguage]}
              </p>
            </div>
            
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto shrink-0 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center space-x-2"
            >
              <span>{currentText.ctaInternationalBtn[currentLanguage]}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </button>
          </div>
        )}

      </div>

      {/* Learn More Interactive Modal Drawer */}
      <AnimatePresence>
        {selectedScheme && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs cursor-zoom-out"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="bg-[#004B23] text-white p-5">
                <div className="flex justify-between items-start">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest bg-emerald-800 border border-emerald-700/80 px-2 py-0.5 rounded-md">
                    Portal ID: {selectedScheme.id}
                  </span>
                  <button 
                    onClick={handleCloseModal}
                    className="text-white/70 hover:text-white font-mono text-lg font-bold p-1 leading-none rounded-md hover:bg-white/10 transition"
                  >
                    ✕
                  </button>
                </div>
                <h3 className="text-base font-serif font-bold mt-2 leading-snug">
                  {selectedScheme.name[currentLanguage]}
                </h3>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-5 overflow-y-auto text-xs text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    {currentText.benefitsLabel[currentLanguage]}
                  </h4>
                  <p className="text-gray-800 font-medium">
                    {selectedScheme.benefits[currentLanguage]}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    {currentText.eligibilityLabel[currentLanguage]}
                  </h4>
                  <p className="text-gray-700 font-light">
                    {selectedScheme.eligibility[currentLanguage]}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    {currentText.docsLabel[currentLanguage]}
                  </h4>
                  <p className="text-gray-700 font-light bg-gray-50 border border-gray-200/60 p-2.5 rounded-lg">
                    {currentText.docsText[currentLanguage]}
                  </p>
                </div>

                {selectedScheme.applicationProcess && (
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                      {currentLanguage === 'en' ? 'Application Process:' : currentLanguage === 'ur' ? 'درخواست کا طریقہ:' : 'आवेदन प्रक्रिया:'}
                    </h4>
                    <p className="text-gray-800 font-medium bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-lg">
                      {selectedScheme.applicationProcess[currentLanguage]}
                    </p>
                  </div>
                )}

                {selectedScheme.importantDates && (
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                      {currentLanguage === 'en' ? 'Important Dates & Deadlines:' : currentLanguage === 'ur' ? 'اہم تاریخیں اور آخری تاریخ:' : 'महत्वपूर्ण तिथियां एवं समय सीमा:'}
                    </h4>
                    <p className="text-amber-900 font-semibold bg-amber-50/70 border border-amber-200 p-2.5 rounded-lg">
                      {selectedScheme.importantDates[currentLanguage]}
                    </p>
                  </div>
                )}

                {selectedScheme.faqs && selectedScheme.faqs.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                      {currentLanguage === 'en' ? 'Frequently Asked Questions (FAQs):' : currentLanguage === 'ur' ? 'عام سوالات (FAQs):' : 'अक्सर पूछे जाने वाले प्रश्न:'}
                    </h4>
                    {selectedScheme.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-200/70 p-3 rounded-lg space-y-1">
                        <p className="font-bold text-gray-800 text-xs">Q: {faq.q}</p>
                        <p className="text-gray-600 text-xs">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                )}

                {(selectedScheme.downloadFormsUrl || selectedScheme.officialNotificationUrl) && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedScheme.downloadFormsUrl && (
                      <a
                        href={selectedScheme.downloadFormsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#004B23] bg-emerald-100/80 hover:bg-emerald-200 px-3 py-2 rounded-lg border border-emerald-300 transition"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>{currentLanguage === 'en' ? 'Download Forms' : currentLanguage === 'ur' ? 'فارمز ڈاؤن لوڈ کریں' : 'फ़ॉर्म डाउनलोड करें'}</span>
                      </a>
                    )}
                    {selectedScheme.officialNotificationUrl && (
                      <a
                        href={selectedScheme.officialNotificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-lg border border-indigo-200 transition"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>{currentLanguage === 'en' ? 'Official Notification' : currentLanguage === 'ur' ? 'آفیشل نوٹیفکیشن' : 'आधिकारिक अधिसूचना'}</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Safety Verification Notification */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-amber-950 flex items-center space-x-1.5">
                    <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>{currentText.safetyTipTitle[currentLanguage]}</span>
                  </h4>
                  <p className="text-amber-900 text-[10px] leading-relaxed">
                    {currentText.safetyTipText[currentLanguage]}
                  </p>
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="bg-gray-50 border-t border-gray-100 p-4 flex items-center justify-between gap-3">
                <button 
                  onClick={handleCloseModal}
                  className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 hover:text-gray-800 hover:bg-gray-150 px-4 py-2.5 rounded-lg border border-gray-200 transition"
                >
                  {currentLanguage === 'en' ? 'Close Window' : 'बंद करें'}
                </button>

                <a 
                  href={selectedScheme.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#004B23] hover:bg-[#003c1c] px-4.5 py-2.5 rounded-lg flex items-center space-x-1.5 shadow-sm transition"
                >
                  <span>{currentText.visitBtn[currentLanguage]}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
