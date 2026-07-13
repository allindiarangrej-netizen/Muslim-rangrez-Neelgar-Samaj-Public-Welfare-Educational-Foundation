import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Facebook, Instagram, Youtube, Image as ImageIcon, Linkedin, Copy, Check, Code, MapPin, Mail, Phone, Search, Users, Award, ShieldCheck, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data/mediaRegistry';

interface LeaderProfile {
  id: string;
  category?: 'founder' | 'national' | 'advisory' | 'district';
  nameEn: string;
  nameHi: string;
  designationEn: string;
  designationHi: string;
  locationEn: string;
  locationHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  tenureEn?: string;
  tenureHi?: string;
  phone?: string;
  email?: string;
  socials: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    youtube: string;
    gallery: string; // or linkedin
  };
}

interface NationalLeadershipProps {
  currentLanguage: Language;
}

export default function NationalLeadership({ currentLanguage }: NationalLeadershipProps) {
  const [showCodeHub, setShowCodeHub] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'founder' | 'national' | 'advisory' | 'district'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Leadership Profiles List - fully customizable by administrator
  const leaders: LeaderProfile[] = [
    // 1. FOUNDERS & PATRONS
    {
      id: 'leader_founder_sadr',
      category: 'national',
      nameEn: 'Al-Haaj Gulam Rasool Rangrez',
      nameHi: 'अल-हाज गुलाम रसूल रंगरेज',
      designationEn: 'National President (Sadr) & Patron-in-Chief',
      designationHi: 'राष्ट्रीय अध्यक्ष (सद्र) एवं मुख्य संरक्षक',
      locationEn: 'New Delhi & Jaipur',
      locationHi: 'नई दिल्ली एवं जयपुर',
      descriptionEn: 'Supreme leader of All India Rangrez Samaj Trust. Spearheading nationwide unity, 14 reform resolutions, 80G tax exemption, and modern educational empowerment.',
      descriptionHi: 'अखिल भारतीय रंगरेज समाज ट्रस्ट के सर्वोच्च नेता। देशव्यापी एकता, 14 सुधार प्रस्तावों, 80G कर छूट और आधुनिक शैक्षिक सशक्तिकरण का नेतृत्व कर रहे हैं।',
      image: IMAGES.leaders.president,
      tenureEn: '2010 - Present (3rd Elected Term)',
      tenureHi: '2010 - वर्तमान (तीसरा निर्वाचित कार्यकाल)',
      phone: '+91 98110 00000',
      email: 'president@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919811000000',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_founder_patron',
      category: 'founder',
      nameEn: 'Haji Abdul Rehman Rangrez',
      nameHi: 'हाजी अब्दुल रहमान रंगरेज',
      designationEn: 'National Patron & Founding Elder',
      designationHi: 'राष्ट्रीय संरक्षक एवं संस्थापक वरिष्ठ',
      locationEn: 'Central Delhi',
      locationHi: 'मध्य दिल्ली',
      descriptionEn: 'Founding pillar of the Trust with over 15 years of selfless Khidmat. Recipient of Lifetime Khidmat Ratna Award for social cohesion and legal arbitration.',
      descriptionHi: '15 से अधिक वर्षों की निःस्वार्थ खिदमत के साथ ट्रस्ट के संस्थापक स्तंभ। सामाजिक सद्भाव और कानूनी मध्यस्थता के लिए लाइफटाइम खिदमत रत्न पुरस्कार से सम्मानित।',
      image: IMAGES.avatars.placeholder,
      tenureEn: '2015 - Present',
      tenureHi: '2015 - वर्तमान',
      phone: '+91 98101 11111',
      email: 'patron@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919810111111',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_founder_legacy',
      category: 'founder',
      nameEn: 'Late Haji Shakoor Rangrez (Rahmatullah Alaih)',
      nameHi: 'स्व. हाजी शकूर रंगरेज (रहमतुल्लाह अलैह)',
      designationEn: 'Pioneer of Educational Reform & Historical Research',
      designationHi: 'शिक्षा सुधार एवं ऐतिहासिक शोध के प्रणेता',
      locationEn: 'Bhopal, Madhya Pradesh',
      locationHi: 'भोपाल, मध्य प्रदेश',
      descriptionEn: 'Legendary visionary who established the first cooperative hostels and community welfare funds in central India, laying the bedrock for our modern Trust.',
      descriptionHi: 'महान दूरदर्शी जिन्होंने मध्य भारत में पहले सहकारी छात्रावासों और सामुदायिक कल्याण कोषों की स्थापना की, जो हमारे आधुनिक ट्रस्ट की आधारशिला बने।',
      image: IMAGES.leaders.member_irfan,
      tenureEn: 'Lifetime Legacy (1960 - 2010)',
      tenureHi: 'आजीवन सेवा (1960 - 2010)',
      email: 'heritage@rangrezsamaj.bharat',
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    // 2. NATIONAL EXECUTIVE BOARD
    {
      id: 'leader_nat_vp',
      category: 'national',
      nameEn: 'Haji Mohammad Ibrahim Rangrez',
      nameHi: 'हाजी मोहम्मद इब्राहिम रंगरेज',
      designationEn: 'National Vice President (North & Central Zone)',
      designationHi: 'राष्ट्रीय उपाध्यक्ष (उत्तर एवं मध्य क्षेत्र)',
      locationEn: 'Jaipur, Rajasthan',
      locationHi: 'जयपुर, राजस्थान',
      descriptionEn: 'Directing regional coordination, textile artisan subsidies, and youth skill development programs across Rajasthan, Delhi, and Madhya Pradesh.',
      descriptionHi: 'राजस्थान, दिल्ली और मध्य प्रदेश में क्षेत्रीय समन्वय, वस्त्र कारीगर सब्सिडी और युवा कौशल विकास कार्यक्रमों का निर्देशन कर रहे हैं।',
      image: IMAGES.leaders.secretary,
      tenureEn: '2024 - 2027 Term',
      tenureHi: '2024 - 2027 कार्यकाल',
      phone: '+91 98290 22222',
      email: 'vp@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919829022222',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_nat_sec',
      category: 'national',
      nameEn: 'Maulana Qari Habibullah Isha’ati',
      nameHi: 'मौलाना कारी हबीबुल्लाह इशाती',
      designationEn: 'National General Secretary (Mahasachiv)',
      designationHi: 'राष्ट्रीय महासचिव (महामंत्री)',
      locationEn: 'Gwalior, Madhya Pradesh',
      locationHi: 'ग्वालियर, मध्य प्रदेश',
      descriptionEn: 'Managing statutory administration, census verification records, NITI Aayog compliance, and inter-state committee synchronization.',
      descriptionHi: 'वैधानिक प्रशासन, जनगणना सत्यापन रिकॉर्ड, नीति आयोग अनुपालन और अंतर-राज्य समिति समन्वय का प्रबंधन कर रहे हैं।',
      image: IMAGES.leaders.member_shakeel,
      tenureEn: '2023 - 2026 Term',
      tenureHi: '2023 - 2026 कार्यकाल',
      phone: '+91 94251 33333',
      email: 'secretary@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919425133333',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_nat_treasurer',
      category: 'national',
      nameEn: 'Haji Abdul Razzak Rangrez',
      nameHi: 'हाजी अब्दुल रज्जाक रंगरेज',
      designationEn: 'National Treasurer (Koshadhyaksha)',
      designationHi: 'राष्ट्रीय कोषाध्यक्ष (कोषाध्यक्ष)',
      locationEn: 'Indore, Madhya Pradesh',
      locationHi: 'इंदौर, मध्य प्रदेश',
      descriptionEn: 'Ensuring 100% transparent audit trails, zero-admin-fee Zakat distribution, 80G tax receipts, and automated financial disclosures.',
      descriptionHi: '100% पारदर्शी ऑडिट ट्रेल, शून्य-एडमिन-फीस जकात वितरण, 80G कर रसीदें और स्वचालित वित्तीय प्रकटीकरण सुनिश्चित कर रहे हैं।',
      image: IMAGES.avatars.placeholder,
      tenureEn: '2024 - 2027 Term',
      tenureHi: '2024 - 2027 कार्यकाल',
      phone: '+91 98260 44444',
      email: 'treasurer@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919826044444',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    // 3. ADVISORY & LEGAL COUNCIL
    {
      id: 'leader_adv_legal',
      category: 'advisory',
      nameEn: 'Advocate Imran Khan Rangrez',
      nameHi: 'एडवोकेट इमरान खान रंगरेज',
      designationEn: 'Senior Legal Advisor & Constitutional Chair',
      designationHi: 'वरिष्ठ कानूनी सलाहकार एवं संवैधानिक अध्यक्ष',
      locationEn: 'Indore High Court Bench, MP',
      locationHi: 'इंदौर हाईकोर्ट बेंच, मध्य प्रदेश',
      descriptionEn: 'Leading the Free Legal Aid Cell, RTI awareness campaigns, constitutional rights defense, and anti-dowry legal arbitration boards.',
      descriptionHi: 'निःशुल्क कानूनी सहायता प्रकोष्ठ, RTI जागरूकता अभियानों, संवैधानिक अधिकार रक्षा और दहेज विरोधी कानूनी मध्यस्थता बोर्ड का नेतृत्व कर रहे हैं।',
      image: IMAGES.leaders.secretary,
      tenureEn: 'Appointed 2023',
      tenureHi: 'नियुक्त 2023',
      phone: '+91 98261 55555',
      email: 'legal@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919826155555',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_adv_edu',
      category: 'advisory',
      nameEn: 'Dr. Shamim Ahmed Rangrez (Ph.D.)',
      nameHi: 'डॉ. शमीम अहमद रंगरेज (Ph.D.)',
      designationEn: 'Chairperson, Education & Scholarship Board',
      designationHi: 'अध्यक्ष, शिक्षा एवं छात्रवृत्ति बोर्ड',
      locationEn: 'Aligarh Muslim University, UP',
      locationHi: 'अलीगढ़ मुस्लिम विश्वविद्यालय, यूपी',
      descriptionEn: 'Supervising national scholarship allocations, IAS/NEET coaching grants, and career mentorship for students across rural and urban India.',
      descriptionHi: 'ग्रामीण और शहरी भारत में छात्रों के लिए राष्ट्रीय छात्रवृत्ति आवंटन, IAS/NEET कोचिंग अनुदान और करियर मेंटरशिप की देखरेख कर रहे हैं।',
      image: IMAGES.leaders.member_irfan,
      tenureEn: 'Appointed 2024',
      tenureHi: 'नियुक्त 2024',
      email: 'education@rangrezsamaj.bharat',
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_adv_women',
      category: 'advisory',
      nameEn: 'Mrs. Razia Sultana Rangrez',
      nameHi: 'श्रीमती रजिया सुल्ताना रंगरेज',
      designationEn: 'National Chairperson, Women Empowerment Wing',
      designationHi: 'राष्ट्रीय अध्यक्ष, महिला सशक्तिकरण प्रकोष्ठ',
      locationEn: 'Bhopal, Madhya Pradesh',
      locationHi: 'भोपाल, मध्य प्रदेश',
      descriptionEn: 'Leading women entrepreneurship micro-loans, vocational tailoring centers, domestic rights counseling, and dowry-free marriage reforms.',
      descriptionHi: 'महिला उद्यमिता माइक्रो-लोन, व्यावसायिक सिलाई केंद्रों, घरेलू अधिकार परामर्श और दहेज मुक्त विवाह सुधारों का नेतृत्व कर रही हैं।',
      image: IMAGES.avatars.placeholder,
      tenureEn: 'Appointed 2024',
      tenureHi: 'नियुक्त 2024',
      phone: '+91 97520 66666',
      email: 'women@rangrezsamaj.bharat',
      socials: {
        whatsapp: 'https://wa.me/919752066666',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    // 4. DISTRICT & REGIONAL PRESIDENTS
    {
      id: 'leader_gwalior',
      category: 'district',
      nameEn: 'Mufti Sirajuddin Isha’ati sahab',
      nameHi: 'मुफ्ती सिराजुद्दीन इशाती साहब',
      designationEn: 'President, Greater Gwalior',
      designationHi: 'अध्यक्ष, ग्रेटर ग्वालियर',
      locationEn: 'Gwalior, Madhya Pradesh',
      locationHi: 'ग्वालियर, मध्य प्रदेश',
      descriptionEn: 'Islamic scholar, Islamic Judge, Qari, Hafiz, Aalim. Dedicated to social reforms, education, and legal arbitration in Greater Gwalior.',
      descriptionHi: 'इस्लामी विद्वान, इस्लामी न्यायाधीश, कारी, हाफ़िज़, आलिम। ग्रेटर ग्वालियर में सामाजिक सुधारों, शिक्षा और कानूनी मध्यस्थता के लिए समर्पित।',
      image: IMAGES.leaders.president,
      socials: {
        whatsapp: 'https://wa.me/919617698678',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_dholpur',
      nameEn: 'Janab Raju Sir',
      nameHi: 'जनाब राजू सर',
      designationEn: 'President of Dholpur District',
      designationHi: 'अध्यक्ष, धौलपुर जिला',
      locationEn: 'Dholpur, Rajasthan',
      locationHi: 'धौलपुर, राजस्थान',
      descriptionEn: 'Actively coordinating district-level community development, education, and social welfare programs in Rajasthan.',
      descriptionHi: 'राजस्थान में जिला-स्तरीय सामुदायिक विकास, शिक्षा और सामाजिक कल्याण कार्यक्रमों का सक्रिय रूप से समन्वय कर रहे हैं।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: 'https://wa.me/919887983333',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_morena',
      nameEn: 'Janab Sahjad Khan Sikaroda',
      nameHi: 'जनाब शहजाद खान सिकरौदा',
      designationEn: 'President, Morena District',
      designationHi: 'अध्यक्ष, मुरैना जिला',
      locationEn: 'Morena, Madhya Pradesh',
      locationHi: 'मुरैना, मध्य प्रदेश',
      descriptionEn: 'Contractor by profession. Leading the Morena district committee in executing educational and social empowerment projects.',
      descriptionHi: 'पेशे से ठेकेदार। शैक्षिक और सामाजिक सशक्तिकरण परियोजनाओं को लागू करने में मुरैना जिला समिति का नेतृत्व कर रहे हैं।',
      image: IMAGES.leaders.secretary,
      socials: {
        whatsapp: 'https://wa.me/919752147004',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_bhopal',
      nameEn: 'Janab Gulam Nabi Rangrez',
      nameHi: 'जनाब गुलाम नबी रंगरेज',
      designationEn: 'President, Bhopal District',
      designationHi: 'अध्यक्ष, भोपाल जिला',
      locationEn: 'Bhopal, Madhya Pradesh',
      locationHi: 'भोपाल, मध्य प्रदेश',
      descriptionEn: 'Promoting community unity, modern education, computer literacy, and dynamic digital reforms in Bhopal.',
      descriptionHi: 'भोपाल में सामुदायिक एकता, आधुनिक शिक्षा, कंप्यूटर साक्षरता और गतिशील डिजिटल सुधारों को बढ़ावा दे रहे हैं।',
      image: IMAGES.leaders.member_irfan,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_indore',
      nameEn: 'Haji Mohammad Iqbal',
      nameHi: 'हाजी मोहम्मद इकबाल',
      designationEn: 'President, Indore District',
      designationHi: 'अध्यक्ष, इंदौर जिला',
      locationEn: 'Indore, Madhya Pradesh',
      locationHi: 'इंदौर, मध्य प्रदेश',
      descriptionEn: 'Directing public welfare initiatives, artisan micro-finance support, and social safety nets in Indore.',
      descriptionHi: 'इंदौर में जन कल्याणकारी पहलों, कारीगर लघु-वित्त सहायता और सामाजिक सुरक्षा तंत्रों का निर्देशन कर रहे हैं।',
      image: IMAGES.leaders.member_shakeel,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_sheopur',
      nameEn: 'Advocate Janab Atiq Ahmad',
      nameHi: 'एडवोकेट जनाब अतीक अहमद',
      designationEn: 'President, Sheopur District',
      designationHi: 'अध्यक्ष, श्योपुर जिला',
      locationEn: 'Sheopur, Madhya Pradesh',
      locationHi: 'श्योपुर, मध्य प्रदेश',
      descriptionEn: 'Professional Advocate. Dedicated to providing legal counsel, child education advocacy, and artisan welfare in Sheopur.',
      descriptionHi: 'पेशे से अधिवक्ता। श्योपुर में कानूनी सलाह, बाल शिक्षा वकालत और कारीगर कल्याण प्रदान करने के लिए समर्पित।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: 'https://wa.me/919754802008',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_jaipur',
      nameEn: 'Al-Haaj Gulam Rasool Rangrez',
      nameHi: 'अल-हाज गुलाम रसूल रंगरेज',
      designationEn: 'President, Jaipur District',
      designationHi: 'अध्यक्ष, जयपुर जिला',
      locationEn: 'Jaipur, Rajasthan',
      locationHi: 'जयपुर, राजस्थान',
      descriptionEn: 'Preserving traditional dyeing skills, artisan guilds, and running community-led development boards in Jaipur.',
      descriptionHi: 'जयपुर में पारंपरिक रंगाई कौशल, कारीगर संघों के संरक्षण और समुदाय के नेतृत्व वाले विकास बोर्डों का संचालन कर रहे हैं।',
      image: IMAGES.leaders.member_irfan,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_jodhpur',
      nameEn: 'Haji Mohammad Iqbal (Jodhpur)',
      nameHi: 'हाजी मोहम्मद इकबाल (जोधपुर)',
      designationEn: 'President, Jodhpur District',
      designationHi: 'अध्यक्ष, जोधपुर जिला',
      locationEn: 'Jodhpur, Rajasthan',
      locationHi: 'जोधपुर, राजस्थान',
      descriptionEn: 'Coordinating welfare, organizing mass wedding events, and strengthening traditional brotherhood in Jodhpur region.',
      descriptionHi: 'जोधपुर क्षेत्र में कल्याणकारी गतिविधियों के समन्वय, सामूहिक निकाह के आयोजन और पारंपरिक भाईचारे को मजबूत करने में संलग्न।',
      image: IMAGES.leaders.member_shakeel,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_kota',
      nameEn: 'Janab Imran Rangrez',
      nameHi: 'जनाब इमरान रंगरेज',
      designationEn: 'President, Kota District',
      designationHi: 'अध्यक्ष, कोटा जिला',
      locationEn: 'Kota, Rajasthan',
      locationHi: 'कोटा, राजस्थान',
      descriptionEn: 'Promoting higher education support, study scholarships, and student shelter setups in Kota.',
      descriptionHi: 'कोटा में उच्च शिक्षा सहायता, अध्ययन छात्रवृत्तियों और छात्र आवास व्यवस्था को बढ़ावा दे रहे हैं।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_ajmer',
      nameEn: 'Salim Rangrez',
      nameHi: 'सलीम रंगरेज',
      designationEn: 'President, Ajmer District',
      designationHi: 'अध्यक्ष, अजमेर जिला',
      locationEn: 'Ajmer, Rajasthan',
      locationHi: 'अजमेर, राजस्थान',
      descriptionEn: 'Managing local dharamshalas, community welfare initiatives, and educational awareness programs in Ajmer district.',
      descriptionHi: 'अजमेर जिले में स्थानीय धर्मशालाओं, सामुदायिक कल्याण पहलों और शैक्षिक जागरूकता कार्यक्रमों का प्रबंधन कर रहे हैं।',
      image: IMAGES.leaders.secretary,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_karauli',
      nameEn: 'Janab Alauddin Khan',
      nameHi: 'जनाब अलाउद्दीन खान',
      designationEn: 'President, Karauli District',
      designationHi: 'अध्यक्ष, करौली जिला',
      locationEn: 'Karauli, Rajasthan',
      locationHi: 'करौली, राजस्थान',
      descriptionEn: 'Mobilizing rural youth, organizing healthcare camps, and advancing standard of education in Karauli.',
      descriptionHi: 'करौली में ग्रामीण युवाओं को संगठित करने, स्वास्थ्य शिविरों के आयोजन और शिक्षा के स्तर को उन्नत करने में अग्रणी।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_lucknow',
      nameEn: 'Haji Jamil Ahmed Rangrez',
      nameHi: 'हाजी जमील अहमद रंगरेज',
      designationEn: 'President, Lucknow District',
      designationHi: 'अध्यक्ष, लखनऊ जिला',
      locationEn: 'Lucknow, Uttar Pradesh',
      locationHi: 'लखनऊ, उत्तर प्रदेश',
      descriptionEn: 'Spearheading historical research, preservation of cultural arts, and academic excellence in Uttar Pradesh.',
      descriptionHi: 'उत्तर प्रदेश में ऐतिहासिक अनुसंधान, सांस्कृतिक कलाओं के संरक्षण और शैक्षणिक उत्कृष्टता का नेतृत्व कर रहे हैं।',
      image: IMAGES.leaders.president,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_kanpur',
      nameEn: 'Yaseen Rangrez',
      nameHi: 'यासीन रंगरेज',
      designationEn: 'President, Kanpur District',
      designationHi: 'अध्यक्ष, कानपुर जिला',
      locationEn: 'Kanpur, Uttar Pradesh',
      locationHi: 'कानपुर, उत्तर प्रदेश',
      descriptionEn: 'Unifying district artisans, coordinating with state councils, and advocating for vocational training programs.',
      descriptionHi: 'जिला कारीगरों को एकजुट करने, राज्य परिषदों के साथ समन्वय करने और व्यावसायिक प्रशिक्षण कार्यक्रमों की वकालत करने में सक्रिय।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_mumbai',
      nameEn: 'Janab Abdul Kareem',
      nameHi: 'जनाब अब्दुल करीम',
      designationEn: 'President, Mumbai District',
      designationHi: 'अध्यक्ष, मुंबई जिला',
      locationEn: 'Mumbai, Maharashtra',
      locationHi: 'मुंबई, महाराष्ट्र',
      descriptionEn: 'Leading major municipal and metropolitan welfare structures, student scholarships, and business networking in Maharashtra.',
      descriptionHi: 'महाराष्ट्र में प्रमुख नगर निगम और महानगरीय कल्याण संरचनाओं, छात्र छात्रवृत्तियों और व्यावसायिक नेटवर्किंग का नेतृत्व कर रहे हैं।',
      image: IMAGES.leaders.member_irfan,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_patna',
      nameEn: 'Haji Sarfaraz Rangrez',
      nameHi: 'हाजी सरफराज रंगरेज',
      designationEn: 'President, Patna District',
      designationHi: 'अध्यक्ष, पटना जिला',
      locationEn: 'Patna, Bihar',
      locationHi: 'पटना, बिहार',
      descriptionEn: 'Active in promoting literacy among female children and organizing welfare funds for traditional artisan families in Bihar.',
      descriptionHi: 'बिहार में बालिकाओं में साक्षरता को बढ़ावा देने और पारंपरिक कारीगर परिवारों के लिए कल्याण कोष के आयोजन में सक्रिय।',
      image: IMAGES.leaders.member_shakeel,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_delhi',
      nameEn: 'Janab Akhtar Rangrez',
      nameHi: 'जनाब अख्तर रंगरेज',
      designationEn: 'President, Central Delhi',
      designationHi: 'अध्यक्ष, मध्य दिल्ली',
      locationEn: 'Central Delhi, Delhi',
      locationHi: 'मध्य दिल्ली, दिल्ली',
      descriptionEn: 'Promoting higher education initiatives, professional career guidance counseling, and citizen help desks in National Capital.',
      descriptionHi: 'राष्ट्रीय राजधानी में उच्च शिक्षा पहलों, व्यावसायिक करियर मार्गदर्शन परामर्श और नागरिक सहायता केंद्रों को बढ़ावा दे रहे हैं।',
      image: IMAGES.avatars.placeholder,
      socials: {
        whatsapp: '#',
        facebook: '#',
        instagram: '#',
        youtube: '#',
        gallery: '#gallery',
      },
    }
  ];

  const copyElementorCode = () => {
    const code = `
<!-- ======================================================= -->
<!-- ELEMENTOR PRO CUSTOM CODE BLOCK (SECTION 2)             -->
<!-- Copy this directly into an HTML Widget inside Elementor -->
<!-- ======================================================= -->

<div class="rangrez-leadership-section">
  <div class="rangrez-section-header">
    <span class="rangrez-badge">TRUSTED COUNCILS</span>
    <h2 class="rangrez-section-title">National Community Leadership</h2>
    <p class="rangrez-section-subtitle">Serving the community with dedication, transparency and vision.</p>
  </div>

  <div class="rangrez-leadership-grid">
    ${leaders
      .map(
        (leader) => `
    <div class="rangrez-leader-card">
      <div class="rangrez-avatar-wrapper">
        <div class="rangrez-avatar-circle">
          <img src="${leader.image}" alt="${leader.nameEn}" class="rangrez-leader-img">
        </div>
        <div class="rangrez-social-panel">
          <a href="${leader.socials.whatsapp}" class="rangrez-social-icon icon-wa" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="${leader.socials.facebook}" class="rangrez-social-icon icon-fb" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="${leader.socials.instagram}" class="rangrez-social-icon icon-ig" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="${leader.socials.youtube}" class="rangrez-social-icon icon-yt" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="${leader.socials.gallery}" class="rangrez-social-icon icon-gl" target="_blank" aria-label="Gallery"><i class="fas fa-images"></i></a>
        </div>
      </div>
      <div class="rangrez-leader-info">
        <h3 class="rangrez-leader-name">${leader.nameEn}</h3>
        <p class="rangrez-leader-designation">${leader.designationEn}</p>
        <p class="rangrez-leader-location">
          <span class="location-pin">📍</span> ${leader.locationEn}
        </p>
        <p class="rangrez-leader-description">${leader.descriptionEn}</p>
      </div>
    </div>`
      )
      .join('')}
  </div>
</div>

<style>
/* Include FontAwesome for icons in your WordPress/Elementor settings */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.rangrez-leadership-section {
  width: 100%;
  padding: 80px 20px;
  background: #FDFBF7;
  color: #1a2e22;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.rangrez-section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.rangrez-badge {
  display: inline-block;
  background: rgba(0, 75, 35, 0.08);
  border: 1px solid rgba(0, 75, 35, 0.2);
  color: #004B23;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 15px;
}

.rangrez-section-title {
  font-size: 38px;
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  color: #004B23;
  margin: 0 0 12px;
}

.rangrez-section-subtitle {
  font-size: 15px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.rangrez-leadership-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

@media (max-width: 1199px) {
  .rangrez-leadership-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .rangrez-leadership-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .rangrez-leadership-grid {
    grid-template-columns: 1fr;
  }
}

.rangrez-leader-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f1ece1;
  padding: 35px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  position: relative;
}

.rangrez-leader-card:hover {
  transform: translateY(-12px);
  border-color: #F4C430;
  box-shadow: 0 20px 40px rgba(0, 75, 35, 0.08);
}

.rangrez-avatar-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 24px;
}

.rangrez-avatar-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.rangrez-leader-card:hover .rangrez-avatar-circle {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  border-color: #F4C430;
}

.rangrez-leader-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

/* Social sliding icons setup */
.rangrez-social-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
  background: rgba(0, 75, 35, 0.8);
}

.rangrez-avatar-wrapper:hover .rangrez-social-panel {
  opacity: 1;
  pointer-events: auto;
}

.rangrez-social-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ffffff;
  color: #004B23;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateY(15px);
  opacity: 0;
}

.rangrez-avatar-wrapper:hover .rangrez-social-icon {
  transform: translateY(0);
  opacity: 1;
}

/* Staggered social item effects */
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(1) { transition-delay: 0.05s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(2) { transition-delay: 0.1s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(3) { transition-delay: 0.15s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(4) { transition-delay: 0.2s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(5) { transition-delay: 0.25s; }

.rangrez-social-icon:hover {
  background: #F4C430;
  color: #ffffff;
  transform: scale(1.15) translateY(-2px) !important;
}

.rangrez-leader-name {
  font-size: 18px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #1a2e22;
  margin: 0 0 4px;
  transition: color 0.3s ease;
}

.rangrez-leader-card:hover .rangrez-leader-name {
  color: #004B23;
}

.rangrez-leader-designation {
  font-size: 13px;
  font-weight: 700;
  color: #F4C430;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
  transition: color 0.3s ease;
}

.rangrez-leader-card:hover .rangrez-leader-designation {
  color: #FFDF66;
}

.rangrez-leader-location {
  font-size: 11px;
  font-weight: 500;
  color: #888;
  margin: 0 0 15px;
  font-family: 'JetBrains Mono', monospace;
}

.rangrez-leader-description {
  font-size: 12px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}
</style>

<script>
// Lightweight vanilla JS interactive effect for cursor tracking on images
document.addEventListener('DOMContentLoaded', function() {
  const avatars = document.querySelectorAll('.rangrez-avatar-circle');
  
  avatars.forEach(avatar => {
    const img = avatar.querySelector('.rangrez-leader-img');
    
    avatar.addEventListener('mousemove', function(e) {
      const rect = avatar.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      img.style.transform = "scale(1.12) translate(" + (x * 12) + "px, " + (y * 12) + "px)";
    });
    
    avatar.addEventListener('mouseleave', function() {
      img.style.transform = "scale(1) translate(0, 0)";
    });
  });
});
</script>
`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const filteredLeaders = leaders.filter(leader => {
    const leaderCat = leader.category || 'district';
    const matchesCategory = activeCategory === 'all' || leaderCat === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      leader.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.nameHi.includes(searchQuery) ||
      leader.designationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designationHi.includes(searchQuery) ||
      leader.locationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.locationHi.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#FCFAF5] border-t border-[#f1ece1]" id="national_leadership_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-1">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#004B23] tracking-widest uppercase">
              {currentLanguage === 'en' ? 'TRUSTED COUNCILS' : 'विश्वस्त राष्ट्रीय परिषद'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
            {currentLanguage === 'en' ? 'National Community Leadership' : 'राष्ट्रीय सामुदायिक नेतृत्व'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'Serving the community with dedication, transparency and vision.' 
              : 'समर्पण, पारदर्शिता और दूरदर्शिता के साथ समाज की सेवा में निरंतर तत्पर।'}
          </p>
        </div>

        {/* Leadership Search & Category Filter Bar */}
        <div className="mb-12 space-y-6 max-w-5xl mx-auto">
          {/* Keyword Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Search leaders by name, district, committee or role...' : 'नाम, जिला, पद या समिति के आधार पर नेता खोजें...'}
              className="w-full pl-12 pr-16 py-3 bg-white border-2 border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:border-[#004B23] focus:ring-4 focus:ring-[#004B23]/10 shadow-sm transition-all text-gray-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-gray-700 font-bold bg-gray-100 px-2.5 py-1 rounded-full transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'all', labelEn: '🌐 All Leadership', labelHi: '🌐 सभी पदाधिकारी', count: leaders.length },
              { id: 'founder', labelEn: '🌟 Founders & Patrons', labelHi: '🌟 संस्थापक एवं संरक्षक', count: leaders.filter(l => l.category === 'founder').length },
              { id: 'national', labelEn: '👑 National Executive Council', labelHi: '👑 राष्ट्रीय कार्यकारिणी', count: leaders.filter(l => l.category === 'national').length },
              { id: 'advisory', labelEn: '⚖️ Advisory & Legal Board', labelHi: '⚖️ सलाहकार एवं कानूनी बोर्ड', count: leaders.filter(l => l.category === 'advisory').length },
              { id: 'district', labelEn: '📍 District Presidents', labelHi: '📍 जिलाध्यक्ष (16 जिले)', count: leaders.filter(l => !l.category || l.category === 'district').length },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm flex items-center space-x-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#004B23] text-white shadow-md scale-105 border-2 border-[#F4C430]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-[#004B23]/40'
                }`}
              >
                <span>{currentLanguage === 'en' ? cat.labelEn : cat.labelHi}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeCategory === cat.id ? 'bg-[#F4C430] text-[#004B23]' : 'bg-gray-100 text-gray-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid - Desktop (4), Laptop (3), Tablet (2), Mobile (1) */}
        {filteredLeaders.length === 0 ? (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl max-w-xl mx-auto shadow-sm">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">
              {currentLanguage === 'en' ? 'No leadership profiles found matching your search' : 'खोज के अनुसार कोई पदाधिकारी नहीं मिला'}
            </h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              {currentLanguage === 'en' ? 'Try adjusting your search terms or clearing category filters.' : 'कृपया खोज शब्द बदलें या श्रेणी फ़िल्टर रीसेट करें।'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-lg hover:bg-emerald-900 transition shadow"
            >
              {currentLanguage === 'en' ? 'Reset All Filters' : 'फ़िल्टर रीसेट करें'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="leadership_cards_grid">
            {filteredLeaders.map((leader, index) => (
              <LeaderCard key={leader.id} leader={leader} currentLanguage={currentLanguage} index={index} />
            ))}
          </div>
        )}

        {/* Admin Pro Integration Center block */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowCodeHub(!showCodeHub)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-xs font-mono font-bold text-[#004B23] transition duration-300 shadow-sm"
            aria-label="Toggle Elementor Code Export"
          >
            <Code className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'ELEMENTOR PRO CODE HUB' : 'एलिमेंटोर प्रो कोड हब'}</span>
          </button>

          {showCodeHub && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl text-left space-y-4 shadow-xl"
              id="elementor_leadership_code_hub"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#004B23] font-serif">
                    Section 2: Elementor Pro Leadership Profile Cards Widget
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Includes beautiful cursor-bound avatar parallax movement, staggered social icon hover sliding, and emerald gold styling!
                  </p>
                </div>
                <button
                  onClick={copyElementorCode}
                  className="px-4 py-1.5 bg-[#004B23] text-white hover:bg-emerald-900 rounded text-xs font-mono font-bold flex items-center space-x-1.5 transition"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy HTML & CSS Code'}</span>
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-150 overflow-x-auto max-h-48 text-xs font-mono text-gray-700">
                <pre>{`<!-- Paste directly into an Elementor "HTML Code" block. 
You can edit the image URLs, Names, Designations, and description text inside the HTML blocks directly without rewriting any JS. -->`}</pre>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}

interface LeaderCardProps {
  key?: string;
  leader: LeaderProfile;
  currentLanguage: Language;
  index: number;
}

// Sub-component to manage cursor hover image parallax effect
function LeaderCard({ leader, currentLanguage, index }: LeaderCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Normalize coordinates to range [-1, 1]
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    // Limit to max 10px offset as per specifications
    setCoords({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-white border border-[#f1ece1] rounded-2xl p-6 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#004B23]/10 hover:border-[#F4C430]"
      id={`leader_card_${leader.id}`}
    >
      {/* Top golden border flare */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#F4C430] transition-all duration-500 rounded-t-2xl"></div>

      {/* Image Parallax Container */}
      <div 
        className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-[#F4C430] group-hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-gray-50 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={leader.image}
          alt={currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = '/images/committees/profile_avatar_placeholder.svg'; }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out select-none"
          style={{
            transform: isHovered 
              ? `scale(1.05) translate(${coords.x}px, ${coords.y}px)` 
              : 'scale(1) translate(0px, 0px)',
            filter: isHovered ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))' : 'none',
          }}
        />
      </div>

      {/* 5 Circular Social Icons */}
      <div className="flex items-center justify-center gap-2.5 mb-6 z-10">
        {[
          { icon: <MessageSquare className="h-3.5 w-3.5" />, url: leader.socials.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-500 hover:text-white' },
          { icon: <Facebook className="h-3.5 w-3.5" />, url: leader.socials.facebook, label: 'Facebook', color: 'hover:bg-blue-600 hover:text-white' },
          { icon: <Instagram className="h-3.5 w-3.5" />, url: leader.socials.instagram, label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
          { icon: <Youtube className="h-3.5 w-3.5" />, url: leader.socials.youtube, label: 'YouTube', color: 'hover:bg-red-600 hover:text-white' },
          { icon: <ImageIcon className="h-3.5 w-3.5" />, url: leader.socials.gallery, label: 'Gallery', color: 'hover:bg-[#F4C430] hover:text-emerald-950' }
        ].map((soc, sIdx) => {
          return (
            <a
              key={sIdx}
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${leader.nameEn} ${soc.label}`}
              className={`w-7 h-7 rounded-full bg-gray-100 text-emerald-900 flex items-center justify-center transition-all duration-300 ${soc.color} shadow-sm`}
            >
              {soc.icon}
            </a>
          );
        })}
      </div>

      {/* Leader Details */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-bold text-gray-950 group-hover:text-[#004B23] transition-colors duration-300">
            {currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          </h3>
          <p className="text-xs font-bold text-[#CC9900] group-hover:text-[#B38600] uppercase tracking-widest font-mono transition-colors duration-300">
            {currentLanguage === 'en' ? leader.designationEn : leader.designationHi}
          </p>
        </div>

        {/* Location badge */}
        <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-medium text-gray-400 bg-gray-50 border border-gray-100 rounded px-2 py-0.5 mx-auto">
          <MapPin className="h-3 w-3 text-[#F4C430]" />
          <span>{currentLanguage === 'en' ? leader.locationEn : leader.locationHi}</span>
        </div>

        {leader.tenureEn && (
          <div className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded inline-block border border-emerald-200 shadow-2xs">
            {currentLanguage === 'en' ? `Tenure: ${leader.tenureEn}` : `कार्यकाल: ${leader.tenureHi}`}
          </div>
        )}

        <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto font-light">
          {currentLanguage === 'en' ? leader.descriptionEn : leader.descriptionHi}
        </p>
      </div>

      {/* Aesthetic card foot indicator */}
      <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-center space-x-4 text-gray-400">
        {leader.email ? (
          <a href={`mailto:${leader.email}`} title={leader.email} className="flex items-center gap-1 text-xs hover:text-[#004B23] transition font-mono">
            <Mail className="h-3.5 w-3.5 text-[#004B23]" />
            <span className="text-[10px] truncate max-w-[120px]">{leader.email}</span>
          </a>
        ) : (
          <Mail className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23] transition" />
        )}
        {leader.phone ? (
          <a href={`tel:${leader.phone}`} title={leader.phone} className="flex items-center gap-1 text-xs hover:text-[#004B23] transition font-mono">
            <Phone className="h-3.5 w-3.5 text-[#004B23]" />
            <span className="text-[10px]">{leader.phone}</span>
          </a>
        ) : (
          <Phone className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23] transition" />
        )}
      </div>

    </motion.div>
  );
}
