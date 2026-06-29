import { AreaNode, MatrimonialProfile, JobListing, GovernmentScheme, BloodDonor, NewsItem, CommunityEvent } from './types';

export const statesList = [
  { id: 'mp', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश' },
  { id: 'rj', nameEn: 'Rajasthan', nameHi: 'राजस्थान' },
  { id: 'up', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश' },
  { id: 'mh', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र' }
];

export const districtsByState: Record<string, { id: string; nameEn: string; nameHi: string }[]> = {
  mp: [
    { id: 'morena', nameEn: 'Morena', nameHi: 'मुरैना' },
    { id: 'bhopal', nameEn: 'Bhopal', nameHi: 'भोपाल' },
    { id: 'indore', nameEn: 'Indore', nameHi: 'इंदौर' }
  ],
  rj: [
    { id: 'jaipur', nameEn: 'Jaipur', nameHi: 'जयपुर' },
    { id: 'jodhpur', nameEn: 'Jodhpur', nameHi: 'जोधपुर' }
  ],
  up: [
    { id: 'lucknow', nameEn: 'Lucknow', nameHi: 'लखनऊ' },
    { id: 'kanpur', nameEn: 'Kanpur', nameHi: 'कानपुर' }
  ],
  mh: [
    { id: 'mumbai', nameEn: 'Mumbai', nameHi: 'मुंबई' }
  ]
};

export const tehsilsByDistrict: Record<string, { id: string; nameEn: string; nameHi: string }[]> = {
  morena: [
    { id: 'kailaras', nameEn: 'Kailaras', nameHi: 'कैलारस' },
    { id: 'joura', nameEn: 'Joura', nameHi: 'जौरा' },
    { id: 'ambah', nameEn: 'Ambah', nameHi: 'अम्बाह' },
    { id: 'sabalgarh', nameEn: 'Sabalgarh', nameHi: 'सबलगढ़' },
    { id: 'banmore', nameEn: 'Banmore', nameHi: 'बानमोर' }
  ],
  bhopal: [
    { id: 'huzur', nameEn: 'Huzur', nameHi: 'हुजूर' }
  ],
  jaipur: [
    { id: 'sanganer', nameEn: 'Sanganer', nameHi: 'सांगानेर' },
    { id: 'amber', nameEn: 'Amer', nameHi: 'आमेर' }
  ]
};

export const areasData: Record<string, AreaNode> = {
  kailaras: {
    id: 'kailaras',
    nameEn: 'Kailaras Area',
    nameHi: 'कैलारस क्षेत्र',
    presidentEn: 'Janab Shakeel Ahmed Rangrez',
    presidentHi: 'जनाब शकील अहमद रंगरेज',
    presidentPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    presidentMessageEn: 'Welcome to the Kailaras regional community hub. We are committed to social empowerment, education of our daughters, and sustainable financial growth of our artisan brothers.',
    presidentMessageHi: 'कैलारस क्षेत्रीय सामुदायिक केंद्र में आपका स्वागत है। हम सामाजिक सशक्तिकरण, हमारी बेटियों की शिक्षा और हमारे शिल्पकार भाइयों के सतत वित्तीय विकास के लिए प्रतिबद्ध हैं।',
    stats: {
      population: 4500,
      families: 820,
      literacyRate: '86%',
      verifiedPercentage: 94
    },
    committee: [
      { roleEn: 'President', roleHi: 'अध्यक्ष', nameEn: 'Janab Shakeel Ahmed Rangrez', nameHi: 'जनाब शकील अहमद रंगरेज', phone: '+91 98765 43210' },
      { roleEn: 'Vice President', roleHi: 'उपाध्यक्ष', nameEn: 'Haji Mohammed Iqbal', nameHi: 'हाजी मोहम्मद इकबाल', phone: '+91 98765 43211' },
      { roleEn: 'Secretary', roleHi: 'सचिव', nameEn: 'Mohammed Aslam Rangrez', nameHi: 'मोहम्मद असलम रंगरेज', phone: '+91 98765 43212' },
      { roleEn: 'Treasurer', roleHi: 'कोषाध्यक्ष', nameEn: 'Janab Abdul Sattar', nameHi: 'जनाब अब्दुल सत्तार', phone: '+91 98765 43213' }
    ]
  },
  joura: {
    id: 'joura',
    nameEn: 'Joura Area',
    nameHi: 'जौरा क्षेत्र',
    presidentEn: 'Janab Gulam Nabi Rangrez',
    presidentHi: 'जनाब गुलाम नबी रंगरेज',
    presidentPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    presidentMessageEn: 'Joura district committee is actively working to bridge educational resources for our community youth and promoting self-employment opportunities.',
    presidentMessageHi: 'जौरा जिला समिति हमारे सामुदायिक युवाओं के लिए शैक्षिक संसाधनों को जोड़ने और स्वरोजगार के अवसरों को बढ़ावा देने के लिए सक्रिय रूप से काम कर रही है।',
    stats: {
      population: 3800,
      families: 650,
      literacyRate: '82%',
      verifiedPercentage: 88
    },
    committee: [
      { roleEn: 'President', roleHi: 'अध्यक्ष', nameEn: 'Janab Gulam Nabi Rangrez', nameHi: 'जनाब गुलाम नबी रंगरेज', phone: '+91 98234 56789' },
      { roleEn: 'Secretary', roleHi: 'सचिव', nameEn: 'Mohammed Jamil Rangrez', nameHi: 'मोहम्मद जमील रंगरेज', phone: '+91 98234 56790' }
    ]
  }
};

export const matrimonialProfiles: MatrimonialProfile[] = [
  {
    id: 'MAT-2026-001',
    gender: 'F',
    nameEn: 'Fatima Rangrez',
    nameHi: 'फातिमा रंगरेज',
    age: 24,
    heightCm: 162,
    educationEn: 'M.Tech in Computer Science',
    educationHi: 'एम.टेक कंप्यूटर साइंस',
    occupationEn: 'Software Engineer at MNC',
    occupationHi: 'एमएनसी में सॉफ्टवेयर इंजीनियर',
    districtEn: 'Morena',
    districtHi: 'मुरैना',
    stateEn: 'Madhya Pradesh',
    stateHi: 'मध्य प्रदेश',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    isVerified: true,
    privacyMask: true
  },
  {
    id: 'MAT-2026-002',
    gender: 'M',
    nameEn: 'Mohammed Adil Rangrez',
    nameHi: 'मोहम्मद आदिल रंगरेज',
    age: 27,
    heightCm: 178,
    educationEn: 'MBBS, MD (Pediatrics)',
    educationHi: 'एमबीबीएस, एमडी (बाल रोग विशेषज्ञ)',
    occupationEn: 'Government Pediatrician',
    occupationHi: 'सरकारी बाल रोग विशेषज्ञ',
    districtEn: 'Jaipur',
    districtHi: 'जयपुर',
    stateEn: 'Rajasthan',
    stateHi: 'राजस्थान',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop',
    isVerified: true,
    privacyMask: false
  },
  {
    id: 'MAT-2026-003',
    gender: 'F',
    nameEn: 'Zainab Bano',
    nameHi: 'जैनब बानो',
    age: 23,
    heightCm: 157,
    educationEn: 'B.Ed, M.A. in English',
    educationHi: 'बी.एड, एम.ए. अंग्रेजी',
    occupationEn: 'High School Teacher',
    occupationHi: 'हाई स्कूल शिक्षिका',
    districtEn: 'Bhopal',
    districtHi: 'भोपाल',
    stateEn: 'Madhya Pradesh',
    stateHi: 'मध्य प्रदेश',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop',
    isVerified: true,
    privacyMask: true
  },
  {
    id: 'MAT-2026-004',
    gender: 'M',
    nameEn: 'Er. Irfan Rangrez',
    nameHi: 'इंजीनियर इरफान रंगरेज',
    age: 29,
    heightCm: 175,
    educationEn: 'B.Tech Mechanical & MBA',
    educationHi: 'बी.टेक मैकेनिकल एवं एमबीए',
    occupationEn: 'Project Manager in Gulf',
    occupationHi: 'खाड़ी देश में प्रोजेक्ट मैनेजर',
    districtEn: 'Lucknow',
    districtHi: 'लखनऊ',
    stateEn: 'Uttar Pradesh',
    stateHi: 'उत्तर प्रदेश',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    isVerified: true,
    privacyMask: false
  }
];

export const jobListings: JobListing[] = [
  {
    id: 'JOB-101',
    titleEn: 'Senior Software Engineer',
    titleHi: 'वरिष्ठ सॉफ्टवेयर इंजीनियर',
    companyEn: 'Vibrant Tech Systems',
    companyHi: 'वाइब्रेंट टेक सिस्टम्स',
    type: 'Private',
    locationEn: 'Bhopal, MP',
    locationHi: 'भोपाल, मध्य प्रदेश',
    salaryEn: '₹12,00,000 - ₹18,00,000 PA',
    salaryHi: '₹12,00,000 - ₹18,00,000 सालाना',
    eligibilityEn: 'B.Tech/MCA, 4+ Years Experience',
    eligibilityHi: 'बी.टेक/एमसीए, 4+ वर्ष का अनुभव',
    postedDate: '2026-06-25'
  },
  {
    id: 'JOB-102',
    titleEn: 'Mechanical Maintenance Engineer',
    titleHi: 'मैकेनिकल मेंटेनेंस इंजीनियर',
    companyEn: 'Al-Khobar Petrochemicals Co.',
    companyHi: 'अल-खोबार पेट्रोकेमिकल्स कंपनी',
    type: 'Gulf',
    locationEn: 'Dammam, Saudi Arabia',
    locationHi: 'दम्माम, सऊदी अरब',
    salaryEn: 'SAR 6,000 - 8,000 Per Month',
    salaryHi: '6,000 - 8,000 सऊदी रियाल प्रति माह',
    eligibilityEn: 'B.E./B.Tech Mechanical, 3+ Years in Oil & Gas',
    eligibilityHi: 'बी.ई./बी.टेक मैकेनिकल, तेल व गैस क्षेत्र में 3+ वर्ष',
    postedDate: '2026-06-28'
  },
  {
    id: 'JOB-103',
    titleEn: 'Primary School Teacher (Government Contract)',
    titleHi: 'प्राथमिक विद्यालय शिक्षक (सरकारी अनुबंध)',
    companyEn: 'MP Department of School Education',
    companyHi: 'मध्य प्रदेश स्कूल शिक्षा विभाग',
    type: 'Government',
    locationEn: 'Morena District, MP',
    locationHi: 'मुरैना जिला, मध्य प्रदेश',
    salaryEn: '₹22,000 - ₹28,000 PM',
    salaryHi: '₹22,000 - ₹28,000 प्रति माह',
    eligibilityEn: 'D.El.Ed/B.Ed, MP-TET Qualified',
    eligibilityHi: 'डी.एल.एड/बी.एड, एमपी-टीईटी उत्तीर्ण',
    postedDate: '2026-06-20'
  }
];

export const governmentSchemes: GovernmentScheme[] = [
  {
    id: 'SCH-01',
    nameEn: 'Post-Matric Scholarship for Minorities',
    nameHi: 'अल्पसंख्यकों के लिए पोस्ट-मैट्रिक छात्रवृत्ति',
    categoryEn: 'Education & Scholarship',
    categoryHi: 'शिक्षा और छात्रवृत्ति',
    benefitsEn: 'Full tuition fee reimbursement + monthly maintenance allowance',
    benefitsHi: 'पूर्ण शिक्षण शुल्क प्रतिपूर्ति + मासिक रखरखाव भत्ता',
    eligibilityEn: 'Minority students scoring >50% in previous exam. Family income < ₹2.0 Lakh/annum.',
    eligibilityHi: 'पिछली परीक्षा में >50% अंक प्राप्त करने वाले अल्पसंख्यक छात्र। पारिवारिक आय < ₹2.0 लाख/सालाना।',
    minAge: 15,
    maxIncome: 200000,
    targetGroup: 'Students'
  },
  {
    id: 'SCH-02',
    nameEn: 'Nai Roshni Leadership Development Scheme',
    nameHi: 'नई रोशनी नेतृत्व विकास योजना',
    categoryEn: 'Women Empowerment',
    categoryHi: 'महिला सशक्तिकरण',
    benefitsEn: 'Free training on leadership, digital literacy, banking, and life skills with stipend',
    benefitsHi: 'स्टाइपेंड के साथ नेतृत्व, डिजिटल साक्षरता, बैंकिंग और जीवन कौशल पर मुफ्त प्रशिक्षण',
    eligibilityEn: 'Minority women aged 18 to 65 years. Family income < ₹2.5 Lakh/annum.',
    eligibilityHi: '18 से 65 वर्ष की आयु की अल्पसंख्यक महिलाएं। पारिवारिक आय < ₹2.5 लाख/सालाना।',
    minAge: 18,
    maxIncome: 250000,
    targetGroup: 'Women'
  },
  {
    id: 'SCH-03',
    nameEn: 'Seekho Aur Kamao (Learn & Earn) Scheme',
    nameHi: 'सीखो और कमाओ योजना',
    categoryEn: 'Skill Development & Jobs',
    categoryHi: 'कौशल विकास और नौकरियां',
    benefitsEn: 'Placement-linked skill training in emerging trades with monthly stipend and certificate',
    benefitsHi: 'मासिक स्टाइपेंड और प्रमाण पत्र के साथ उभरते व्यवसायों में प्लेसमेंट-लिंक्ड कौशल प्रशिक्षण',
    eligibilityEn: 'Minority youth aged between 14 to 35 years. Standard 5th pass minimum.',
    eligibilityHi: '14 से 35 वर्ष के बीच के अल्पसंख्यक युवा। न्यूनतम 5वीं कक्षा उत्तीर्ण।',
    minAge: 14,
    maxIncome: 300000,
    targetGroup: 'Minority'
  }
];

export const bloodDonors: BloodDonor[] = [
  { id: 'BD-01', nameEn: 'Waseem Rangrez', nameHi: 'वसीम रंगरेज', bloodGroup: 'O+', districtEn: 'Morena', districtHi: 'मुरैना', phone: '+91 99887 76655', isAvailable: true },
  { id: 'BD-02', nameEn: 'Javed Akhter', nameHi: 'जावेद अख्तर', bloodGroup: 'B+', districtEn: 'Bhopal', districtHi: 'भोपाल', phone: '+91 98989 89898', isAvailable: true },
  { id: 'BD-03', nameEn: 'Rukhsar Begum', nameHi: 'रुखसार बेगम', bloodGroup: 'AB-', districtEn: 'Morena', districtHi: 'मुरैना', phone: '+91 91234 56789', isAvailable: false },
  { id: 'BD-04', nameEn: 'Farhan Rangrez', nameHi: 'फरहान रंगरेज', bloodGroup: 'A+', districtEn: 'Jaipur', districtHi: 'जयपुर', phone: '+91 90112 23344', isAvailable: true }
];

export const newsArticles: NewsItem[] = [
  {
    id: 'N-201',
    titleEn: 'National Working Committee Meeting Concludes in Bhopal',
    titleHi: 'भोपाल में राष्ट्रीय कार्यसमिति की बैठक संपन्न',
    excerptEn: 'The Central Advisory Board gathered in Bhopal to review nationwide census mapping progress and pass the new welfare resolution for 2026.',
    excerptHi: 'देशव्यापी जनगणना मानचित्रण प्रगति की समीक्षा करने और 2026 के नए कल्याणकारी प्रस्ताव को पारित करने के लिए भोपाल में केंद्रीय सलाहकार बोर्ड की बैठक हुई।',
    contentEn: 'Delegates from 14 states discussed primary priorities including digitized education grants, central matrimonial vetting protocols, and creating regional legal defense desks.',
    contentHi: '14 राज्यों के प्रतिनिधियों ने प्राथमिक प्राथमिकताओं पर चर्चा की, जिसमें डिजिटल शिक्षा अनुदान, केंद्रीय वैवाहिक सत्यापन प्रोटोकॉल और क्षेत्रीय कानूनी सहायता डेस्क का निर्माण शामिल है।',
    date: '2026-06-24',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    categoryEn: 'National News',
    categoryHi: 'राष्ट्रीय समाचार'
  },
  {
    id: 'N-202',
    titleEn: 'Rangrez Youth Skill Program Initiates Training Batches',
    titleHi: 'रंगरेज युवा कौशल कार्यक्रम के तहत प्रशिक्षण बैच शुरू',
    excerptEn: 'Free training courses in Web Development, Tally Accounting, and Mobile Repair commenced in Kailaras and Morena.',
    excerptHi: 'कैलारस और मुरैना में वेब डेवलपमेंट, टैली अकाउंटिंग और मोबाइल रिपेयरिंग के मुफ्त प्रशिक्षण पाठ्यक्रम शुरू हुए।',
    contentEn: 'Supported by the national education fund, over 120 students have enrolled in the first phase. High-performing students will receive job placement assistance.',
    contentHi: 'राष्ट्रीय शिक्षा कोष के सहयोग से पहले चरण में 120 से अधिक छात्रों ने पंजीकरण कराया है। उत्कृष्ट प्रदर्शन करने वाले छात्रों को नौकरी प्लेसमेंट सहायता प्रदान की जाएगी।',
    date: '2026-06-28',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    categoryEn: 'Education',
    categoryHi: 'शिक्षा'
  }
];

export const communityEvents: CommunityEvent[] = [
  {
    id: 'EV-301',
    titleEn: 'Mass Collective Marriages Ceremony (Sammelan)',
    titleHi: 'सामूहिक विवाह सम्मेलन (मुरैना)',
    date: '2026-07-15T09:00:00',
    venueEn: 'Rangrez Shadi Mahal, Bypass Road, Morena, MP',
    venueHi: 'रंगरेज शादी महल, बाईपास रोड, मुरैना, मध्य प्रदेश',
    descriptionEn: 'An elegant mass marriage sammelan organizing standard Islamic Nikah for 21 underprivileged couples. Full household startup gifts and catering supported by the central trust.',
    descriptionHi: '21 जरूरतमंद जोड़ों के लिए सुन्नत के अनुसार निकाह का आयोजन। पूर्ण घरेलू स्टार्टअप उपहार और भोजन की व्यवस्था केंद्रीय ट्रस्ट द्वारा समर्थित है।'
  },
  {
    id: 'EV-302',
    titleEn: 'National Career Fair & Guidance Seminar 2026',
    titleHi: 'राष्ट्रीय करियर मेला एवं मार्गदर्शन संगोष्ठी 2026',
    date: '2026-08-05T10:00:00',
    venueEn: 'Town Hall Auditorium, Near Gandhi Square, Jaipur, RJ',
    venueHi: 'टाउन हॉल ऑडिटोरियम, गांधी चौराहे के पास, जयपुर, राजस्थान',
    descriptionEn: 'Interactive career guidance from administrative experts, corporate leaders, and prominent doctors of the Rangrez community. On-the-spot interviews by 15+ private recruiters.',
    descriptionHi: 'रंगरेज समुदाय के प्रशासनिक विशेषज्ञों, कॉर्पोरेट जगत के लीडर्स और प्रमुख डॉक्टरों द्वारा इंटरैक्टिव करियर मार्गदर्शन। 15+ निजी नियोक्ताओं द्वारा ऑन-द-स्पॉट साक्षात्कार।'
  }
];

export const mockProfessionals = [
  { nameEn: 'Dr. Imtiaz Rangrez', nameHi: 'डॉ. इम्तियाज रंगरेज', categoryEn: 'Doctors', categoryHi: 'चिकित्सक', detailsEn: 'MD (Cardiology), Apollo Hospitals', detailsHi: 'एमडी (कार्डियोलॉजी), अपोलो अस्पताल', locationEn: 'Bhopal, MP', locationHi: 'भोपाल, मध्य प्रदेश' },
  { nameEn: 'Er. Tanveer Ahmed', nameHi: 'इंजीनियर तनवीर अहमद', categoryEn: 'Engineers', categoryHi: 'इंजीनियर', detailsEn: 'Senior Cloud Architect, AWS Certified', detailsHi: 'सीनियर क्लाउड आर्किटेक्ट, AWS प्रमाणित', locationEn: 'Pune, MH', locationHi: 'पुणे, महाराष्ट्र' },
  { nameEn: 'Advocate Safeer Ahmed', nameHi: 'अधिवक्ता सफीर अहमद', categoryEn: 'Lawyers', categoryHi: 'अधिवक्ता', detailsEn: 'High Court Senior Counsel', detailsHi: 'उच्च न्यायालय के वरिष्ठ वकील', locationEn: 'Jabalpur, MP', locationHi: 'जबलपुर, मध्य प्रदेश' },
  { nameEn: 'Prof. Rehana Begum', nameHi: 'प्रो. रेहाना बेगम', categoryEn: 'Teachers', categoryHi: 'शिक्षक', detailsEn: 'HOD, Urdu & Persian Literature, State Univ', detailsHi: 'विभागाध्यक्ष, उर्दू और फारसी साहित्य, राज्य विवि', locationEn: 'Jaipur, RJ', locationHi: 'जयपुर, राजस्थान' }
];

export const mockSuccessStories = [
  { nameEn: 'Aisha Rangrez', nameHi: 'आयशा रंगरेज', titleEn: 'Cleared UPSC Civil Services', titleHi: 'यूपीएससी सिविल सेवा परीक्षा उत्तीर्ण की', textEn: 'With the assistance of the National Scholarship Fund and mentorship, Aisha successfully cleared the UPSC exam with Rank 312.', textHi: 'राष्ट्रीय छात्रवृत्ति कोष और मेंटरशिप की सहायता से, आयशा ने रैंक 312 के साथ यूपीएससी परीक्षा सफलतापूर्वक उत्तीर्ण की।' },
  { nameEn: 'Mohammed Rehan', nameHi: 'मोहम्मद रेहान', titleEn: 'Established Textile Export Unit', titleHi: 'कपड़ा निर्यात इकाई की स्थापना', textEn: 'Transitioned from a local cottage dyer to an exporter employing 40 families, enabled by Rangrez Business Incubator Loans.', textHi: 'रंगरेज बिजनेस इनक्यूबेटर लोन की मदद से एक स्थानीय कुटीर रंगसाज से 40 परिवारों को रोजगार देने वाले निर्यातक के रूप में तब्दील हुए।' }
];
