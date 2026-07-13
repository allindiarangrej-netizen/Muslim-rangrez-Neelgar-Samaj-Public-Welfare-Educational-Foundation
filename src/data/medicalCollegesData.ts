export type MedicalCourse = 
  | 'MBBS'
  | 'BDS'
  | 'BAMS'
  | 'BHMS'
  | 'BUMS'
  | 'BSMS'
  | 'BNYS'
  | 'BVSc & AH'
  | 'BPT'
  | 'B.Sc Nursing'
  | 'Pharmacy'
  | 'Allied Health Sciences'
  | 'Paramedical Courses';

export type InstitutionType = 
  | 'Government'
  | 'Private'
  | 'Minority'
  | 'Deemed University'
  | 'Autonomous';

export type MinorityType = 
  | 'None'
  | 'Muslim Minority'
  | 'Christian Minority'
  | 'Jain Minority'
  | 'Sikh Minority'
  | 'Linguistic Minority';

export type RegulatoryAuthority = 
  | 'NMC' 
  | 'DCI' 
  | 'NCISM' 
  | 'NCH' 
  | 'VCI' 
  | 'INC' 
  | 'PCI' 
  | 'NCAHP' 
  | 'State Board';

export interface OfficialRegulatoryBody {
  id: string;
  name: string;
  fullName: string;
  courses: MedicalCourse[];
  website: string;
  collegeListUrl: string;
  searchUrl: string;
  seatMatrixUrl?: string;
  counsellingPortal: string;
  counsellingName: string;
  description: {
    en: string;
    hi: string;
    ur: string;
  };
}

export interface CollegeProfile {
  id: string;
  name: string;
  course: MedicalCourse;
  type: InstitutionType;
  minorityType: MinorityType;
  state: string;
  district: string;
  address: string;
  affiliatedUniversity: string;
  regulatoryApproval: string;
  regulatoryAuthority: RegulatoryAuthority;
  yearEstablished: number;
  annualIntake: number;
  feeStructure: {
    category: string;
    annualFeeRange: string;
    notes?: string;
  };
  hostelAvailability: {
    available: boolean;
    details: string;
  };
  scholarshipInfo: string;
  neetRequired: boolean;
  admissionProcess: string;
  counsellingLink: string;
  counsellingAuthority: string;
  googleMapsUrl: string;
  contactNumber: string;
  email: string;
  website: string;
  officialRegistrySearchUrl: string;
}

export const ALL_INDIAN_STATES_AND_UTS = [
  'All States & UTs',
  'Madhya Pradesh',
  'Rajasthan',
  'Gujarat',
  'Uttar Pradesh',
  'Delhi',
  'Maharashtra',
  'Haryana',
  'Punjab',
  'Bihar',
  'Chhattisgarh',
  'Uttarakhand',
  'Jammu & Kashmir',
  'Himachal Pradesh',
  'Odisha',
  'West Bengal',
  'Karnataka',
  'Kerala',
  'Tamil Nadu',
  'Telangana',
  'Andhra Pradesh',
  'Assam',
  'Goa',
  'Jharkhand',
  'Sikkim',
  'Tripura',
  'Meghalaya',
  'Manipur',
  'Nagaland',
  'Arunachal Pradesh',
  'Mizoram',
  'Chandigarh',
  'Puducherry',
  'Andaman & Nicobar Islands',
  'Ladakh',
  'Lakshadweep',
  'Dadra & Nagar Haveli and Daman & Diu'
];

export const ALL_MEDICAL_COURSES: MedicalCourse[] = [
  'MBBS',
  'BDS',
  'BAMS',
  'BHMS',
  'BUMS',
  'BSMS',
  'BNYS',
  'BVSc & AH',
  'BPT',
  'B.Sc Nursing',
  'Pharmacy',
  'Allied Health Sciences',
  'Paramedical Courses'
];

export const OFFICIAL_REGULATORY_BODIES: OfficialRegulatoryBody[] = [
  {
    id: 'nmc',
    name: 'NMC',
    fullName: 'National Medical Commission of India',
    courses: ['MBBS'],
    website: 'https://www.nmc.org.in/',
    collegeListUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/',
    searchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/',
    seatMatrixUrl: 'https://www.nmc.org.in/information-desk/for-colleges/ug-curriculum/',
    counsellingPortal: 'https://mcc.nic.in',
    counsellingName: 'Medical Counselling Committee (MCC - DGHS)',
    description: {
      en: 'The statutory apex body regulating medical education and practice of modern medicine (MBBS/MD/MS) in India.',
      hi: 'भारत में आधुनिक चिकित्सा (MBBS/MD/MS) की शिक्षा और अभ्यास को विनियमित करने वाला सर्वोच्च वैधानिक निकाय।',
      ur: 'ہندوستان میں جدید طب (MBBS) کی تعلیم اور پریکٹس کو ریگولیٹ کرنے والا سب سے اعلیٰ قانونی ادارہ۔'
    }
  },
  {
    id: 'dci',
    name: 'DCI',
    fullName: 'Dental Council of India',
    courses: ['BDS'],
    website: 'https://dciindia.gov.in/',
    collegeListUrl: 'https://dciindia.gov.in/CollegeList.aspx',
    searchUrl: 'https://dciindia.gov.in/CollegeList.aspx',
    counsellingPortal: 'https://mcc.nic.in',
    counsellingName: 'Medical Counselling Committee (MCC - DGHS)',
    description: {
      en: 'Statutory body incorporated under the Dentists Act, 1948 to regulate dental education (BDS/MDS) and profession across India.',
      hi: 'भारत भर में दंत चिकित्सा शिक्षा (BDS/MDS) और पेशे को विनियमित करने के लिए दंत चिकित्सक अधिनियम, 1948 के तहत गठित वैधानिक निकाय।',
      ur: 'ہندوستان بھر میں ڈینٹل ایجوکیشن (BDS) اور پیشے کو منظم کرنے والا قانونی کونسل۔'
    }
  },
  {
    id: 'ncism',
    name: 'NCISM',
    fullName: 'National Commission for Indian System of Medicine',
    courses: ['BAMS', 'BUMS', 'BSMS'],
    website: 'https://ncismindia.org/',
    collegeListUrl: 'https://ncismindia.org/college-list.php',
    searchUrl: 'https://ncismindia.org/college-list.php',
    counsellingPortal: 'https://aaccc.gov.in',
    counsellingName: 'AYUSH Admissions Central Counseling Committee (AACCC)',
    description: {
      en: 'Apex statutory regulatory authority for Indian Systems of Medicine including Ayurveda (BAMS), Unani (BUMS), and Siddha (BSMS).',
      hi: 'आयुर्वेद (BAMS), यूनानी (BUMS) और सिद्ध (BSMS) सहित भारतीय चिकित्सा प्रणालियों के लिए सर्वोच्च वैधानिक नियामक प्राधिकरण।',
      ur: 'آیوروید (BAMS)، یونانی (BUMS) اور سدھا (BSMS) سمیت ہندوستانی نظام طب کے لیے اعلیٰ ریگولیٹری کمیشن۔'
    }
  },
  {
    id: 'nch',
    name: 'NCH',
    fullName: 'National Commission for Homoeopathy',
    courses: ['BHMS'],
    website: 'https://nch.org.in/',
    collegeListUrl: 'https://nch.org.in/colleges',
    searchUrl: 'https://nch.org.in/colleges',
    counsellingPortal: 'https://aaccc.gov.in',
    counsellingName: 'AYUSH Admissions Central Counseling Committee (AACCC)',
    description: {
      en: 'Statutory regulator regulating homoeopathic medical education (BHMS/MD Homoeopathy) and practice in India.',
      hi: 'भारत में होम्योपैथिक चिकित्सा शिक्षा (BHMS) और अभ्यास को विनियमित करने वाला वैधानिक प्राधिकरण।',
      ur: 'ہندوستان میں ہومیوپیتھک میڈیکل ایجوکیشن (BHMS) اور پریکٹس کو ریگولیٹ کرنے والا ادارہ۔'
    }
  },
  {
    id: 'vci',
    name: 'VCI',
    fullName: 'Veterinary Council of India',
    courses: ['BVSc & AH'],
    website: 'https://vci.statutorybody.gov.in/',
    collegeListUrl: 'https://vci.statutorybody.gov.in/colleges',
    searchUrl: 'https://vci.statutorybody.gov.in/colleges',
    counsellingPortal: 'https://vci.statutorybody.gov.in/',
    counsellingName: 'VCI 15% All India Quota Counselling Portal',
    description: {
      en: 'Statutory body established under the Indian Veterinary Council Act, 1984 to regulate veterinary practice and education (BVSc & AH).',
      hi: 'पशु चिकित्सा अभ्यास और शिक्षा (BVSc & AH) को विनियमित करने के लिए भारतीय पशु चिकित्सा परिषद अधिनियम, 1984 के तहत स्थापित निकाय।',
      ur: 'ویٹرنری پریکٹس اور ایجوکیشن (BVSc & AH) کو منظم کرنے کے لیے قائم قانونی ادارہ۔'
    }
  },
  {
    id: 'inc',
    name: 'INC',
    fullName: 'Indian Nursing Council',
    courses: ['B.Sc Nursing'],
    website: 'https://indiannursingcouncil.org/',
    collegeListUrl: 'https://indiannursingcouncil.org/recognized-institutions',
    searchUrl: 'https://indiannursingcouncil.org/recognized-institutions',
    counsellingPortal: 'https://mcc.nic.in',
    counsellingName: 'State Nursing Councils / MCC (for AIIMS/Central Institutions)',
    description: {
      en: 'National regulatory body for nurses and nurse education in India under the Indian Nursing Council Act, 1947.',
      hi: 'भारतीय नर्सिंग परिषद अधिनियम, 1947 के तहत भारत में नर्सों और नर्सिंग शिक्षा के लिए राष्ट्रीय नियामक निकाय।',
      ur: 'ہندوستان میں نرسنگ تعلیم اور تربیت کی نگرانی کرنے والا قومی ریگولیٹری ادارہ۔'
    }
  },
  {
    id: 'pci',
    name: 'PCI',
    fullName: 'Pharmacy Council of India',
    courses: ['Pharmacy'],
    website: 'https://www.pci.nic.in/',
    collegeListUrl: 'https://www.pci.nic.in/ApprovedColleges.aspx',
    searchUrl: 'https://www.pci.nic.in/ApprovedColleges.aspx',
    counsellingPortal: 'https://www.pci.nic.in/',
    counsellingName: 'State Technical / Medical Counselling Boards',
    description: {
      en: 'Statutory body governing pharmacy education and profession in India under the Pharmacy Act, 1948.',
      hi: 'फार्मेसी अधिनियम, 1948 के तहत भारत में फार्मेसी शिक्षा और पेशे को नियंत्रित करने वाला वैधानिक निकाय।',
      ur: 'فارمیسی ایجوکیشن اور پیشے کو منظم کرنے والا قومی کونسل۔'
    }
  },
  {
    id: 'ncahp',
    name: 'NCAHP',
    fullName: 'National Commission for Allied and Healthcare Professions',
    courses: ['BPT', 'Allied Health Sciences', 'Paramedical Courses', 'BNYS'],
    website: 'https://mohfw.gov.in/',
    collegeListUrl: 'https://mohfw.gov.in/ncahp',
    searchUrl: 'https://mohfw.gov.in/ncahp',
    counsellingPortal: 'https://mohfw.gov.in/',
    counsellingName: 'State Allied & Paramedical Medical Boards',
    description: {
      en: 'Statutory body regulating standards of education and practice for allied and healthcare professionals including Physiotherapy (BPT) & Paramedical.',
      hi: 'फिजियोथेरेपी (BPT) और पैरामेडिकल सहित संबद्ध और स्वास्थ्य सेवा पेशेवरों के लिए शिक्षा और अभ्यास के मानकों को विनियमित करने वाला निकाय।',
      ur: 'فزیوتھراپی (BPT) اور پیرا میڈیکل سمیت الائیڈ ہیلتھ کیئر پروفیشنز کی ریگولیشن کا قومی کمیشن۔'
    }
  }
];

export const CURATED_MEDICAL_COLLEGES: CollegeProfile[] = [
  // MADHYA PRADESH
  {
    id: 'col-mp-1',
    name: 'Gandhi Medical College (GMC), Bhopal',
    course: 'MBBS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    address: 'Sultania Road, Royal Market, Bhopal, Madhya Pradesh 462001',
    affiliatedUniversity: 'Madhya Pradesh Medical Science University (MPMSU), Jabalpur',
    regulatoryApproval: 'NMC Recognized & Approved',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1955,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Merit Quota',
      annualFeeRange: '₹1,14,000 / Year',
      notes: 'Post-Matric & MMVY Scholarships applicable for MP Domicile students.'
    },
    hostelAvailability: {
      available: true,
      details: 'Separate Boys & Girls AC/Non-AC Hostels within hospital campus with hygienic mess facility.'
    },
    scholarshipInfo: 'Mukhyamantri Medhavi Vidyarthi Yojana (MMVY), Post-Matric Scholarship, National Scholarship Portal (NSP).',
    neetRequired: true,
    admissionProcess: 'NEET UG Score -> MCC All India Quota (15%) & MP State DME Counselling (85%).',
    counsellingLink: 'https://dme.mponline.gov.in/',
    counsellingAuthority: 'Directorate of Medical Education (DME), Madhya Pradesh',
    googleMapsUrl: 'https://maps.google.com/?q=Gandhi+Medical+College+Bhopal',
    contactNumber: '+91-755-2540590',
    email: 'deangmcbhopal@gmail.com',
    website: 'https://www.gmcbhopal.net/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-mp-2',
    name: 'Mahatma Gandhi Memorial (MGM) Medical College, Indore',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Madhya Pradesh',
    district: 'Indore',
    address: 'AB Road, Near MY Hospital, Indore, Madhya Pradesh 452001',
    affiliatedUniversity: 'Madhya Pradesh Medical Science University (MPMSU), Jabalpur',
    regulatoryApproval: 'NMC Recognized',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1948,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹1,14,000 / Year',
      notes: 'Subsidized government fee structure with scholarship eligibility.'
    },
    hostelAvailability: {
      available: true,
      details: '5 Boys Hostels and 4 Girls Hostels with 24x7 security and library access.'
    },
    scholarshipInfo: 'MMVY Fee Reimbursement, SC/ST/OBC Post Matric State Scholarship.',
    neetRequired: true,
    admissionProcess: '15% AIQ via MCC and 85% State Quota via MP Online DME.',
    counsellingLink: 'https://dme.mponline.gov.in/',
    counsellingAuthority: 'Directorate of Medical Education (DME), MP',
    googleMapsUrl: 'https://maps.google.com/?q=MGM+Medical+College+Indore',
    contactNumber: '+91-731-2527383',
    email: 'deanmgmcol-mp@nic.in',
    website: 'https://www.mgmmcindore.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-mp-3',
    name: 'Hakim Syed Ziaul Hasan Government Unani Medical College, Bhopal',
    course: 'BUMS',
    type: 'Government',
    minorityType: 'None',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    address: 'AYUSH Campus, Near Kaliasot Dam, Chuna Bhatti, Bhopal, MP 462003',
    affiliatedUniversity: 'Madhya Pradesh Medical Science University (MPMSU), Jabalpur',
    regulatoryApproval: 'NCISM (AYUSH) Recognized',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1998,
    annualIntake: 75,
    feeStructure: {
      category: 'Government AYUSH Fee',
      annualFeeRange: '₹45,000 / Year',
      notes: 'Highly subsidized fee for Kamil-e-Tibb-o-Jarahat (BUMS).'
    },
    hostelAvailability: {
      available: true,
      details: 'Separate hostel facilities for boys and girls on AYUSH campus.'
    },
    scholarshipInfo: 'MoMA National Minority Scholarship, MP Post-Matric Scholarship.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC All India Quota (15%) & MP AYUSH State Counselling (85%).',
    counsellingLink: 'https://ayush.mponline.gov.in/',
    counsellingAuthority: 'Directorate of AYUSH, Madhya Pradesh',
    googleMapsUrl: 'https://maps.google.com/?q=Govt+Unani+Medical+College+Bhopal',
    contactNumber: '+91-755-2792508',
    email: 'gumcbhopal@mp.gov.in',
    website: 'https://www.ayush.mp.gov.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },
  {
    id: 'col-mp-4',
    name: 'Pt. Khushilal Sharma Government (Autonomous) Ayurveda College & Institute, Bhopal',
    course: 'BAMS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    address: 'Science Hills, Kaliasot Dam Road, Bhopal, MP 462003',
    affiliatedUniversity: 'MPMSU Jabalpur',
    regulatoryApproval: 'NCISM Approved',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1995,
    annualIntake: 100,
    feeStructure: {
      category: 'Government Autonomous',
      annualFeeRange: '₹55,000 / Year',
      notes: 'Includes tuition, hospital clinical training, and herbarium lab access.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus boys and girls hostel with herbal garden environment.'
    },
    scholarshipInfo: 'National Scholarship Portal (NSP) & MP State AYUSH Scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC AIQ & MP State AYUSH Counselling.',
    counsellingLink: 'https://ayush.mponline.gov.in/',
    counsellingAuthority: 'MP State AYUSH Directorate',
    googleMapsUrl: 'https://maps.google.com/?q=Pt+Khushilal+Sharma+Ayurveda+College+Bhopal',
    contactNumber: '+91-755-2792106',
    email: 'klsayurved@mp.gov.in',
    website: 'https://www.klsayurveda.mp.gov.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },
  {
    id: 'col-mp-5',
    name: 'College of Veterinary Science & Animal Husbandry, Mhow (Indore)',
    course: 'BVSc & AH',
    type: 'Government',
    minorityType: 'None',
    state: 'Madhya Pradesh',
    district: 'Indore',
    address: 'Rasulpur, Mhow, Indore District, Madhya Pradesh 453446',
    affiliatedUniversity: 'Nanaji Deshmukh Veterinary Science University (NDVSU), Jabalpur',
    regulatoryApproval: 'VCI Recognized',
    regulatoryAuthority: 'VCI',
    yearEstablished: 1955,
    annualIntake: 100,
    feeStructure: {
      category: 'Government Veterinary Quota',
      annualFeeRange: '₹48,000 / Year',
      notes: 'Standard VCI & NDVSU fee norms.'
    },
    hostelAvailability: {
      available: true,
      details: 'Complete residential campus with livestock farm and veterinary hospital.'
    },
    scholarshipInfo: 'ICAR National Talent Scholarship & State Veterinary Stipends.',
    neetRequired: true,
    admissionProcess: 'NEET UG / MP PV&FT -> VCI All India Counselling (15%) & NDVSU State Quota.',
    counsellingLink: 'https://ndvsu.org/',
    counsellingAuthority: 'Nanaji Deshmukh Veterinary Science University / VCI',
    googleMapsUrl: 'https://maps.google.com/?q=Veterinary+College+Mhow+Indore',
    contactNumber: '+91-7324-272023',
    email: 'deanvetmhow@ndvsu.org',
    website: 'https://ndvsu.org/',
    officialRegistrySearchUrl: 'https://vci.statutorybody.gov.in/'
  },

  // UTTAR PRADESH & MINORITY COLLEGES IN UP
  {
    id: 'col-up-1',
    name: "King George's Medical University (KGMU), Lucknow",
    course: 'MBBS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    address: 'Shah Mina Road, Chowk, Lucknow, Uttar Pradesh 226003',
    affiliatedUniversity: 'King Georges Medical University (State University)',
    regulatoryApproval: 'NMC Recognized',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1911,
    annualIntake: 250,
    feeStructure: {
      category: 'Government University Quota',
      annualFeeRange: '₹54,900 / Year',
      notes: 'One of the most prestigious and affordable medical universities in India.'
    },
    hostelAvailability: {
      available: true,
      details: '14 Hostels across campus (Spacious heritage & modern residential halls).'
    },
    scholarshipInfo: 'UP State Dashmottar Scholarship, NSP Merit-cum-Means, KGMU Alumni Trust aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC All India Quota (15%) & UP NEET State Counselling (85%).',
    counsellingLink: 'https://upneet.gov.in/',
    counsellingAuthority: 'Directorate General of Medical Education (DGME), UP',
    googleMapsUrl: 'https://maps.google.com/?q=KGMU+Lucknow',
    contactNumber: '+91-522-2257540',
    email: 'info@kgmcindia.edu',
    website: 'https://www.kgmu.org/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-up-2',
    name: 'F.H. Medical College & Hospital, Agra',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Uttar Pradesh',
    district: 'Agra',
    address: 'NH-19, Near Etmadpur Railway Overbridge, Agra, Uttar Pradesh 283202',
    affiliatedUniversity: 'Dr. B.R. Ambedkar University, Agra',
    regulatoryApproval: 'NMC Recognized (Muslim Minority Status)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2014,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority Private Quota',
      annualFeeRange: '₹16,50,000 / Year',
      notes: '50% seats reserved for Muslim minority candidates via UP NEET Counselling.'
    },
    hostelAvailability: {
      available: true,
      details: 'Air-conditioned boys and girls hostels with halal mess and mosque on campus.'
    },
    scholarshipInfo: 'Minority Merit Scholarships & UP State Fee Reimbursement for eligible categories.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> UP NEET State Counselling (Minority Quota & General Management Quota).',
    counsellingLink: 'https://upneet.gov.in/',
    counsellingAuthority: 'DGME UP NEET Counselling Board',
    googleMapsUrl: 'https://maps.google.com/?q=FH+Medical+College+Agra',
    contactNumber: '+91-562-2420100',
    email: 'fhmcagra@gmail.com',
    website: 'https://www.fhmc.co.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-up-3',
    name: "Era's Lucknow Medical College & Hospital, Lucknow",
    course: 'MBBS',
    type: 'Deemed University',
    minorityType: 'Muslim Minority',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    address: 'Sarfarazganj, Hardoi Road, Lucknow, Uttar Pradesh 226003',
    affiliatedUniversity: 'Era University (Deemed to be University)',
    regulatoryApproval: 'NMC Recognized (Muslim Deemed Minority)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1997,
    annualIntake: 150,
    feeStructure: {
      category: 'Deemed Minority / Management',
      annualFeeRange: '₹16,60,000 / Year',
      notes: 'World-class hospital infrastructure and clinical exposure.'
    },
    hostelAvailability: {
      available: true,
      details: 'Luxury & standard AC hostels with modern recreational facilities.'
    },
    scholarshipInfo: 'Era University Merit Scholarships & MoMA Minority schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC Deemed Counselling / UP NEET State Minority Portal.',
    counsellingLink: 'https://upneet.gov.in/',
    counsellingAuthority: 'DGME UP & MCC Deemed Board',
    googleMapsUrl: 'https://maps.google.com/?q=Eras+Lucknow+Medical+College',
    contactNumber: '+91-522-6600777',
    email: 'info@elmcindia.org',
    website: 'https://elmcindia.org/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-up-4',
    name: 'Career Institute of Medical Sciences & Hospital, Lucknow',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    address: 'IIM Road, Ghaila, Lucknow, Uttar Pradesh 226020',
    affiliatedUniversity: 'Dr. Ram Manohar Lohia Avadh University / State Board',
    regulatoryApproval: 'NMC Recognized (Muslim Minority Institution)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2011,
    annualIntake: 100,
    feeStructure: {
      category: 'Minority Quota / General',
      annualFeeRange: '₹15,80,000 / Year',
      notes: 'Dedicated clinical hospital serving rural and suburban Lucknow.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus boys and girls hostels with strict security and dining.'
    },
    scholarshipInfo: 'National Minority Scholarship Portal & Institutional aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> UP NEET State Counselling Portal.',
    counsellingLink: 'https://upneet.gov.in/',
    counsellingAuthority: 'DGME UP',
    googleMapsUrl: 'https://maps.google.com/?q=Career+Institute+of+Medical+Sciences+Lucknow',
    contactNumber: '+91-522-2851001',
    email: 'careermedical@gmail.com',
    website: 'https://www.careermedical.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-up-5',
    name: 'State Takmiel-ut-Tib College & Hospital, Lucknow',
    course: 'BUMS',
    type: 'Government',
    minorityType: 'None',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    address: 'Hakeem Abdul Aziz Road, Jhaulal Bridge, Lucknow, UP 226003',
    affiliatedUniversity: 'Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur',
    regulatoryApproval: 'NCISM Recognized (Historic Govt Unani College)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1902,
    annualIntake: 75,
    feeStructure: {
      category: 'Government AYUSH Quota',
      annualFeeRange: '₹19,000 / Year',
      notes: 'One of the oldest and most renowned Unani medical colleges in Asia.'
    },
    hostelAvailability: {
      available: true,
      details: 'Historic and newly constructed hostel blocks in central Lucknow.'
    },
    scholarshipInfo: 'UP Dashmottar Scholarship (100% tuition reimbursement for eligible incomes).',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC AIQ & UP AYUSH Counselling.',
    counsellingLink: 'https://upayushcounseling.upsdc.gov.in/',
    counsellingAuthority: 'UP State AYUSH Counselling Board',
    googleMapsUrl: 'https://maps.google.com/?q=Takmiel+ut+Tib+College+Lucknow',
    contactNumber: '+91-522-2265934',
    email: 'takmieluttib@gmail.com',
    website: 'https://www.upayushcounseling.upsdc.gov.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },
  {
    id: 'col-up-6',
    name: 'Jamia Tibbiya Deoband, Saharanpur',
    course: 'BUMS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Uttar Pradesh',
    district: 'Saharanpur',
    address: 'GT Road, Deoband, Saharanpur District, Uttar Pradesh 247554',
    affiliatedUniversity: 'Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur',
    regulatoryApproval: 'NCISM Recognized (Muslim Minority Unani College)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1987,
    annualIntake: 60,
    feeStructure: {
      category: 'Minority Private AYUSH',
      annualFeeRange: '₹2,04,000 / Year',
      notes: 'Specializing in traditional Greek-Arab (Unani) medicine and research.'
    },
    hostelAvailability: {
      available: true,
      details: 'Separate hostels for male and female students with Islamic cultural ethos.'
    },
    scholarshipInfo: 'MoMA Merit-cum-Means Scholarship & UP State Scholarship.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> UP AYUSH Counselling (Minority Quota).',
    counsellingLink: 'https://upayushcounseling.upsdc.gov.in/',
    counsellingAuthority: 'UP AYUSH Admissions Committee',
    googleMapsUrl: 'https://maps.google.com/?q=Jamia+Tibbiya+Deoband',
    contactNumber: '+91-1336-222851',
    email: 'jamiatibbiya@gmail.com',
    website: 'http://www.jamiatibbiya.com/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // DELHI (NCT)
  {
    id: 'col-dl-1',
    name: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    course: 'MBBS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Delhi',
    district: 'New Delhi',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029',
    affiliatedUniversity: 'Autonomous Institution of National Importance (Act of Parliament)',
    regulatoryApproval: 'NMC Approved (Institute of National Importance)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1956,
    annualIntake: 132,
    feeStructure: {
      category: 'Government Central',
      annualFeeRange: '₹1,628 / Year (Total Course Fee ~₹5,856)',
      notes: 'Ranked #1 Medical College in India (NIRF). Almost free tuition & lodging.'
    },
    hostelAvailability: {
      available: true,
      details: 'Guaranteed hostel accommodation for all undergraduate MBBS students.'
    },
    scholarshipInfo: 'AIIMS Merit Scholarships, NCERT KVPY, NSP Central schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> All India AIIMS Counselling via MCC Portal.',
    counsellingLink: 'https://mcc.nic.in/',
    counsellingAuthority: 'Medical Counselling Committee (MCC), DGHS New Delhi',
    googleMapsUrl: 'https://maps.google.com/?q=AIIMS+New+Delhi',
    contactNumber: '+91-11-26588500',
    email: 'director@aiims.edu',
    website: 'https://www.aiims.edu/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-dl-2',
    name: 'Hamdard Institute of Medical Sciences & Research (HIMSR), New Delhi',
    course: 'MBBS',
    type: 'Deemed University',
    minorityType: 'Muslim Minority',
    state: 'Delhi',
    district: 'South East Delhi',
    address: 'Guru Ravidas Marg, Hamdard Nagar, New Delhi 110062',
    affiliatedUniversity: 'Jamia Hamdard (Deemed to be University)',
    regulatoryApproval: 'NMC Recognized (Deemed Muslim Minority)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2012,
    annualIntake: 150,
    feeStructure: {
      category: 'Deemed Muslim Minority Quota / Management',
      annualFeeRange: '₹14,00,000 / Year',
      notes: 'Ranked among top private/deemed medical institutions in NCT Delhi.'
    },
    hostelAvailability: {
      available: true,
      details: 'Modern AC and Non-AC hostels with 24x7 power backup, sports, and library.'
    },
    scholarshipInfo: 'Hakim Abdul Hameed Scholarship Trust & Central Minority Scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC All India Deemed Counselling (Minority & General seats).',
    counsellingLink: 'https://mcc.nic.in/',
    counsellingAuthority: 'MCC DGHS New Delhi',
    googleMapsUrl: 'https://maps.google.com/?q=HIMSR+Jamia+Hamdard+Delhi',
    contactNumber: '+91-11-26059688',
    email: 'deanhimsr@jamiahamdard.ac.in',
    website: 'https://www.himsr.co.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-dl-3',
    name: 'Maulana Azad Institute of Dental Sciences (MAIDS), New Delhi',
    course: 'BDS',
    type: 'Government',
    minorityType: 'None',
    state: 'Delhi',
    district: 'Central Delhi',
    address: 'MAMC Campus, Bahadur Shah Zafar Marg, New Delhi 110002',
    affiliatedUniversity: 'Delhi University (Faculty of Medical Sciences)',
    regulatoryApproval: 'DCI Recognized (Ranked #1 Dental College in India)',
    regulatoryAuthority: 'DCI',
    yearEstablished: 1983,
    annualIntake: 50,
    feeStructure: {
      category: 'Government DU Quota',
      annualFeeRange: '₹4,120 / Year',
      notes: 'Premier dental research and clinical excellence center of India.'
    },
    hostelAvailability: {
      available: true,
      details: 'Shared campus hostel facilities with Maulana Azad Medical College (MAMC).'
    },
    scholarshipInfo: 'Delhi E-District Scholarship, NSP Merit Scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC 15% All India & DU 85% Delhi State Counselling.',
    counsellingLink: 'https://mcc.nic.in/',
    counsellingAuthority: 'MCC / Faculty of Medical Sciences DU',
    googleMapsUrl: 'https://maps.google.com/?q=MAIDS+New+Delhi',
    contactNumber: '+91-11-23233925',
    email: 'principalmaids@gmail.com',
    website: 'https://maids.ac.in/',
    officialRegistrySearchUrl: 'https://dciindia.gov.in/CollegeList.aspx'
  },
  {
    id: 'col-dl-4',
    name: 'Ayurvedic & Unani Tibbia College & Hospital, Karol Bagh, Delhi',
    course: 'BUMS',
    type: 'Government',
    minorityType: 'None',
    state: 'Delhi',
    district: 'Central Delhi',
    address: 'Ajmal Khan Road, Karol Bagh, New Delhi 110005',
    affiliatedUniversity: 'University of Delhi (DU)',
    regulatoryApproval: 'NCISM Approved (Historic Heritage Govt Institution)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1916,
    annualIntake: 60,
    feeStructure: {
      category: 'Government Delhi University',
      annualFeeRange: '₹3,500 / Year',
      notes: 'Inaugurated by Mahatma Gandhi and Hakim Ajmal Khan; landmark center for BAMS & BUMS.'
    },
    hostelAvailability: {
      available: true,
      details: 'Historic residential halls within Karol Bagh campus.'
    },
    scholarshipInfo: 'Delhi State Merit Scholarship & MoMA schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC AIQ & FMSC DU State AYUSH Counselling.',
    counsellingLink: 'https://aaccc.gov.in/',
    counsellingAuthority: 'AACCC / Faculty of Ayurvedic & Unani Medicine DU',
    googleMapsUrl: 'https://maps.google.com/?q=Tibbia+College+Karol+Bagh',
    contactNumber: '+91-11-23524180',
    email: 'autc@nic.in',
    website: 'https://autc.delhi.gov.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },
  {
    id: 'col-dl-5',
    name: 'School of Nursing & Allied Health Sciences, Jamia Hamdard, New Delhi',
    course: 'B.Sc Nursing',
    type: 'Deemed University',
    minorityType: 'Muslim Minority',
    state: 'Delhi',
    district: 'South East Delhi',
    address: 'Hamdard Nagar, Mehrauli - Badarpur Road, New Delhi 110062',
    affiliatedUniversity: 'Jamia Hamdard (Deemed University)',
    regulatoryApproval: 'INC & Delhi Nursing Council Recognized',
    regulatoryAuthority: 'INC',
    yearEstablished: 1994,
    annualIntake: 60,
    feeStructure: {
      category: 'Deemed Minority / General',
      annualFeeRange: '₹1,45,000 / Year',
      notes: 'Includes intensive clinical rotation at Majeedia Hospital & HIMSR.'
    },
    hostelAvailability: {
      available: true,
      details: 'Dedicated safe girls hostel and boys hostel with full security.'
    },
    scholarshipInfo: 'Hamdard National Foundation Scholarships & NSP Minority Grants.',
    neetRequired: true,
    admissionProcess: 'NEET UG Score / Jamia Hamdard Entrance -> Institutional Counselling.',
    counsellingLink: 'https://jamiahamdard.edu/',
    counsellingAuthority: 'Jamia Hamdard Admissions Office',
    googleMapsUrl: 'https://maps.google.com/?q=Jamia+Hamdard+Nursing+College',
    contactNumber: '+91-11-26059688',
    email: 'snahs@jamiahamdard.ac.in',
    website: 'https://jamiahamdard.edu/Department/School-of-Nursing-and-Allied-Health-Sciences',
    officialRegistrySearchUrl: 'https://indiannursingcouncil.org/recognized-institutions'
  },

  // RAJASTHAN
  {
    id: 'col-rj-1',
    name: 'Sawai Man Singh (SMS) Medical College, Jaipur',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Rajasthan',
    district: 'Jaipur',
    address: 'JLN Marg, Near Ram Niwas Garden, Jaipur, Rajasthan 302004',
    affiliatedUniversity: 'Rajasthan University of Health Sciences (RUHS), Jaipur',
    regulatoryApproval: 'NMC Recognized (Largest Hospital in North India)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1947,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹51,100 / Year',
      notes: 'Super-specialty medical training hub with 6000+ bed hospital network.'
    },
    hostelAvailability: {
      available: true,
      details: '7 Boys Hostels & 3 Girls Hostels located along JLN Marg campus.'
    },
    scholarshipInfo: 'Rajasthan Samaj Kalyan Vibhag Scholarship & Chief Minister Higher Education scheme.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC 15% AIQ & Rajasthan State NEET UG Counselling Board (85%).',
    counsellingLink: 'https://rajugneet2026.com/',
    counsellingAuthority: 'Rajasthan NEET UG Medical & Dental Counselling Board',
    googleMapsUrl: 'https://maps.google.com/?q=SMS+Medical+College+Jaipur',
    contactNumber: '+91-141-2560291',
    email: 'principal@smsmedicalcollege.com',
    website: 'https://www.education.rajasthan.gov.in/smsmcjaipur',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-rj-2',
    name: 'National Institute of Ayurveda (NIA), Jaipur',
    course: 'BAMS',
    type: 'Deemed University',
    minorityType: 'None',
    state: 'Rajasthan',
    district: 'Jaipur',
    address: 'Madhav Vilas Palace, Jorawar Singh Gate, Amer Road, Jaipur, Rajasthan 302002',
    affiliatedUniversity: 'Deemed to be University (Ministry of AYUSH, Govt of India)',
    regulatoryApproval: 'NCISM Approved (Apex National Ayurveda Institute)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1976,
    annualIntake: 125,
    feeStructure: {
      category: 'Central Government Deemed',
      annualFeeRange: '₹42,000 / Year',
      notes: 'Premier national institute with stipend support during clinical internship.'
    },
    hostelAvailability: {
      available: true,
      details: 'Excellent heritage & modern hostel blocks for undergraduate & PG scholars.'
    },
    scholarshipInfo: 'Central AYUSH Scholarships & State Merit Stipends.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> 100% Seats filled through AACCC National AYUSH Counselling.',
    counsellingLink: 'https://aaccc.gov.in/',
    counsellingAuthority: 'AYUSH Admissions Central Counseling Committee (AACCC)',
    googleMapsUrl: 'https://maps.google.com/?q=National+Institute+of+Ayurveda+Jaipur',
    contactNumber: '+91-141-2635816',
    email: 'nia-rj@nic.in',
    website: 'https://nia.nic.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },
  {
    id: 'col-rj-3',
    name: 'Post Graduate Institute of Veterinary Education & Research (PGIVER), Jaipur',
    course: 'BVSc & AH',
    type: 'Government',
    minorityType: 'None',
    state: 'Rajasthan',
    district: 'Jaipur',
    address: 'Jamdoli, Agra Road, Jaipur, Rajasthan 302031',
    affiliatedUniversity: 'Rajasthan University of Veterinary and Animal Sciences (RAJUVAS), Bikaner',
    regulatoryApproval: 'VCI Recognized',
    regulatoryAuthority: 'VCI',
    yearEstablished: 2014,
    annualIntake: 80,
    feeStructure: {
      category: 'Government Veterinary Quota',
      annualFeeRange: '₹45,500 / Year',
      notes: 'State-of-the-art animal hospital and diagnostic laboratories.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus residential hostel with veterinary farm facilities.'
    },
    scholarshipInfo: 'ICAR scholarship & Rajasthan State Livestock Development aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG / RPVT -> VCI 15% AIQ & RAJUVAS Bikaner State Counselling.',
    counsellingLink: 'https://rajuvas.org/',
    counsellingAuthority: 'RAJUVAS Bikaner / VCI',
    googleMapsUrl: 'https://maps.google.com/?q=PGIVER+Jaipur+Veterinary+College',
    contactNumber: '+91-141-2680680',
    email: 'deanpgiverjaipur@rajuvas.org',
    website: 'https://rajuvas.org/pgiver-jaipur/',
    officialRegistrySearchUrl: 'https://vci.statutorybody.gov.in/'
  },

  // GUJARAT
  {
    id: 'col-gj-1',
    name: 'B.J. Medical College (BJMC), Ahmedabad',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Gujarat',
    district: 'Ahmedabad',
    address: 'Asarwa, Civil Hospital Campus, Ahmedabad, Gujarat 380016',
    affiliatedUniversity: 'Gujarat University, Ahmedabad',
    regulatoryApproval: 'NMC Recognized (Attached to Asia Largest Civil Hospital)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1871,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹30,000 / Year',
      notes: 'Incredible clinical volume with 4000+ bed Ahmedabad Civil Hospital.'
    },
    hostelAvailability: {
      available: true,
      details: 'Multiple boys and girls undergraduate hostels within Asarwa campus.'
    },
    scholarshipInfo: 'MYSY (Mukhyamantri Yuva Swavalamban Yojana) & Digital Gujarat Scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & ACPUGMEC Gujarat State Counselling (85%).',
    counsellingLink: 'https://www.medadmgujarat.org/',
    counsellingAuthority: 'Admission Committee for Professional UG Medical Courses (ACPUGMEC)',
    googleMapsUrl: 'https://maps.google.com/?q=BJ+Medical+College+Ahmedabad',
    contactNumber: '+91-79-22680074',
    email: 'dean-bjmc-ahm@gujarat.gov.in',
    website: 'https://www.bjmcahmedabad.edu.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-gj-2',
    name: 'Sumandeep Vidyapeeth (K.M. Shah Dental College), Vadodara',
    course: 'BDS',
    type: 'Deemed University',
    minorityType: 'Jain Minority',
    state: 'Gujarat',
    district: 'Vadodara',
    address: 'Piparia, Waghodia Road, Vadodara, Gujarat 391760',
    affiliatedUniversity: 'Sumandeep Vidyapeeth (Deemed to be University NAAC A++)',
    regulatoryApproval: 'DCI Recognized (Jain Minority Deemed University)',
    regulatoryAuthority: 'DCI',
    yearEstablished: 1999,
    annualIntake: 100,
    feeStructure: {
      category: 'Deemed Jain Minority / Management Quota',
      annualFeeRange: '₹8,50,000 / Year',
      notes: '50% seats reserved for Jain minority candidates with special clinical grants.'
    },
    hostelAvailability: {
      available: true,
      details: 'Ultra-modern international standard hostels with pure vegetarian dining.'
    },
    scholarshipInfo: 'Sumandeep Vidyapeeth Jain Minority Scholarship & Merit Fee Waiver.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC DGHS Deemed University Counselling Portal.',
    counsellingLink: 'https://mcc.nic.in/',
    counsellingAuthority: 'Medical Counselling Committee (MCC), DGHS',
    googleMapsUrl: 'https://maps.google.com/?q=Sumandeep+Vidyapeeth+Vadodara',
    contactNumber: '+91-2668-245262',
    email: 'info@sumandeepvidyapeethdu.edu.in',
    website: 'https://sumandeepvidyapeethdu.edu.in/',
    officialRegistrySearchUrl: 'https://dciindia.gov.in/CollegeList.aspx'
  },

  // MAHARASHTRA
  {
    id: 'col-mh-1',
    name: 'Grant Government Medical College & Sir J.J. Group of Hospitals, Mumbai',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Maharashtra',
    district: 'Mumbai City',
    address: 'Byculla, Near Sandhurst Road Railway Station, Mumbai, Maharashtra 400008',
    affiliatedUniversity: 'Maharashtra University of Health Sciences (MUHS), Nashik',
    regulatoryApproval: 'NMC Recognized (Historic 1845 Heritage Institution)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1845,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹1,25,000 / Year',
      notes: 'Eminent alumni network and unmatched clinical exposure in South Mumbai.'
    },
    hostelAvailability: {
      available: true,
      details: 'RM Bhatt Hostel & campus residential halls for medical scholars.'
    },
    scholarshipInfo: 'Rajarshi Chhatrapati Shahu Maharaj Fee Scholarship & MahaDBT schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ (15%) & State CET Cell Maharashtra Counselling (85%).',
    counsellingLink: 'https://cetcell.mahacet.org/',
    counsellingAuthority: 'State Common Entrance Test Cell, Maharashtra',
    googleMapsUrl: 'https://maps.google.com/?q=Grant+Medical+College+JJ+Hospital+Mumbai',
    contactNumber: '+91-22-23735555',
    email: 'deangmcjjh@gmail.com',
    website: 'https://ggmcjjh.com/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-mh-2',
    name: "Anjuman-I-Islam's Karsekar Medical College & Hospital, Thane / Mumbai",
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Maharashtra',
    district: 'Thane',
    address: 'Panvel-Mumbra Highway, New Panvel, MMR, Maharashtra 410206',
    affiliatedUniversity: 'Maharashtra University of Health Sciences (MUHS), Nashik',
    regulatoryApproval: 'NMC Approved (Muslim Minority Status)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2020,
    annualIntake: 100,
    feeStructure: {
      category: 'Minority Private Quota',
      annualFeeRange: '₹14,50,000 / Year',
      notes: 'Managed by premier 150-year-old Anjuman-I-Islam Educational Trust.'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious modern boys and girls hostels with halal mess and prayer hall.'
    },
    scholarshipInfo: 'Anjuman-I-Islam Trust Aid, MoMA Minority Scholarship & MahaDBT.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> Maharashtra State CET Cell (Minority & General Quotas).',
    counsellingLink: 'https://cetcell.mahacet.org/',
    counsellingAuthority: 'State CET Cell Maharashtra',
    googleMapsUrl: 'https://maps.google.com/?q=Anjuman+I+Islam+Medical+College+Panvel',
    contactNumber: '+91-22-27481234',
    email: 'aimc@anjumanislam.org',
    website: 'https://www.anjumanislam.org/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },

  // BIHAR
  {
    id: 'col-br-1',
    name: 'Patna Medical College & Hospital (PMCH), Patna',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Bihar',
    district: 'Patna',
    address: 'Ashok Rajpath, Patna, Bihar 800004',
    affiliatedUniversity: 'Aryabhatta Knowledge University (AKU), Patna',
    regulatoryApproval: 'NMC Recognized (Historic 1925 Prince of Wales Medical College)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1925,
    annualIntake: 200,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹20,000 / Year',
      notes: 'Currently undergoing expansion into world’s largest 5462-bed hospital complex.'
    },
    hostelAvailability: {
      available: true,
      details: 'Multiple boys and girls hostels on the banks of River Ganga.'
    },
    scholarshipInfo: 'Bihar Student Credit Card, Post Matric Scholarship & Chief Minister Medhavriti.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & BCECEB Bihar NEET Counselling (85%).',
    counsellingLink: 'https://bceceboard.bihar.gov.in/',
    counsellingAuthority: 'Bihar Combined Entrance Competitive Examination Board (BCECEB)',
    googleMapsUrl: 'https://maps.google.com/?q=Patna+Medical+College+Hospital',
    contactNumber: '+91-612-2370131',
    email: 'principalpmch@gmail.com',
    website: 'http://patnamedicalcollege.com/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-br-2',
    name: 'Katihar Medical College & Hospital, Katihar',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Bihar',
    district: 'Katihar',
    address: 'Karim Bagh, Near Railway Station, Katihar, Bihar 854105',
    affiliatedUniversity: 'Al-Karim University, Katihar',
    regulatoryApproval: 'NMC Recognized (Muslim Minority Private University)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1987,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority Quota / Management',
      annualFeeRange: '₹15,50,000 / Year',
      notes: '50% seats reserved for Muslim minority students across India.'
    },
    hostelAvailability: {
      available: true,
      details: 'Complete residential medical campus with secure AC/Non-AC hostels.'
    },
    scholarshipInfo: 'Al-Karim Trust Scholarships & Bihar State Student Credit Card eligibility.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> BCECEB Bihar UGMAC Counselling (Minority & General seats).',
    counsellingLink: 'https://bceceboard.bihar.gov.in/',
    counsellingAuthority: 'BCECEB Patna',
    googleMapsUrl: 'https://maps.google.com/?q=Katihar+Medical+College',
    contactNumber: '+91-6452-242510',
    email: 'kmckatihar@gmail.com',
    website: 'https://kmckatihar.org/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-br-3',
    name: 'Government Tibbiya College & Hospital, Patna',
    course: 'BUMS',
    type: 'Government',
    minorityType: 'None',
    state: 'Bihar',
    district: 'Patna',
    address: 'Kadamkuan, Patna, Bihar 800003',
    affiliatedUniversity: 'Aryabhatta Knowledge University (AKU), Patna',
    regulatoryApproval: 'NCISM Recognized (Historic Government Unani College)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1926,
    annualIntake: 60,
    feeStructure: {
      category: 'Government AYUSH Quota',
      annualFeeRange: '₹15,000 / Year',
      notes: 'Subsidized clinical training in Kamil-e-Tibb-o-Jarahat.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus boys and girls hostel in central Patna.'
    },
    scholarshipInfo: 'Bihar Post-Matric Scholarship & MoMA National Minority Aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC AIQ & BCECEB Bihar AYUSH Counselling.',
    counsellingLink: 'https://bceceboard.bihar.gov.in/',
    counsellingAuthority: 'BCECEB Bihar',
    googleMapsUrl: 'https://maps.google.com/?q=Govt+Tibbiya+College+Patna',
    contactNumber: '+91-612-2686866',
    email: 'govttibbiya@gmail.com',
    website: 'https://state.bihar.gov.in/health/CitizenHome.html',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // KARNATAKA
  {
    id: 'col-ka-1',
    name: 'Bangalore Medical College and Research Institute (BMCRI), Bengaluru',
    course: 'MBBS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Fort, K.R. Road, Near Victoria Hospital, Bengaluru, Karnataka 560002',
    affiliatedUniversity: 'Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru',
    regulatoryApproval: 'NMC Recognized (Premier Autonomous Govt Medical College)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1955,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹59,850 / Year',
      notes: 'Attached to Victoria, Bowring, Vani Vilas, and Minto Ophthalmic Hospitals.'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious undergraduate boys and girls hostels near KR Market campus.'
    },
    scholarshipInfo: 'SSP (State Scholarship Portal) & Vidyasiri Scholarship for Karnataka domiciles.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & KEA (Karnataka Examinations Authority) State Counselling.',
    counsellingLink: 'https://cetonline.karnataka.gov.in/kea/',
    counsellingAuthority: 'Karnataka Examinations Authority (KEA), Bengaluru',
    googleMapsUrl: 'https://maps.google.com/?q=Bangalore+Medical+College+BMCRI',
    contactNumber: '+91-80-26701150',
    email: 'director_bmcri@yahoo.com',
    website: 'https://bmcri.karnataka.gov.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-ka-2',
    name: "St. John's Medical College, Bengaluru",
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Christian Minority',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Sarjapur Road, John Nagar, Koramangala, Bengaluru, Karnataka 560034',
    affiliatedUniversity: 'Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru',
    regulatoryApproval: 'NMC Recognized (Ranked among Top 10 Medical Colleges in India)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1963,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority & General Merit Quota',
      annualFeeRange: '₹7,50,000 / Year',
      notes: 'Renowned for value-based medical ethics, rural service bond, and excellence.'
    },
    hostelAvailability: {
      available: true,
      details: 'Lush green 132-acre campus with pristine hostels and sports complex.'
    },
    scholarshipInfo: 'St. Johns Trust Rural Service Scholarships & State Minority Aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> Registration on KEA Portal (No Direct/Management Capitation).',
    counsellingLink: 'https://cetonline.karnataka.gov.in/kea/',
    counsellingAuthority: 'Karnataka Examinations Authority (KEA)',
    googleMapsUrl: 'https://maps.google.com/?q=St+Johns+Medical+College+Bangalore',
    contactNumber: '+91-80-22065000',
    email: 'sjmc.admission@stjohns.in',
    website: 'https://www.stjohns.in/medicalcollege/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-ka-3',
    name: 'Al-Ameen Medical College & Hospital, Vijayapura (Bijapur)',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Karnataka',
    district: 'Vijayapura',
    address: 'Athani Road, Vijayapura (Bijapur), Karnataka 586108',
    affiliatedUniversity: 'Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru',
    regulatoryApproval: 'NMC Recognized (Historic Muslim Minority Medical Institution)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1984,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority Private / KEA Quota',
      annualFeeRange: '₹10,90,000 / Year',
      notes: 'Pioneering minority medical institution established by Dr. Mumtaz Ahmed Khan.'
    },
    hostelAvailability: {
      available: true,
      details: 'Separate boys and girls hostels on campus with hygienic dining.'
    },
    scholarshipInfo: 'Al-Ameen Trust Aid & Karnataka State Minority Commission scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> KEA Karnataka Medical Counselling (Minority & General seats).',
    counsellingLink: 'https://cetonline.karnataka.gov.in/kea/',
    counsellingAuthority: 'KEA Bengaluru',
    googleMapsUrl: 'https://maps.google.com/?q=Al+Ameen+Medical+College+Bijapur',
    contactNumber: '+91-8352-270067',
    email: 'alameenmedical@gmail.com',
    website: 'https://alameenmedical.org/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-ka-4',
    name: 'National Institute of Unani Medicine (NIUM), Bengaluru',
    course: 'BUMS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Kottigepalya, Magadi Main Road, Bengaluru, Karnataka 560091',
    affiliatedUniversity: 'Rajiv Gandhi University of Health Sciences (RGUHS) / Ministry of AYUSH',
    regulatoryApproval: 'NCISM Approved (National Apex Autonomous Institute of Unani Medicine)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1984,
    annualIntake: 60,
    feeStructure: {
      category: 'Central Government Autonomous',
      annualFeeRange: '₹35,000 / Year',
      notes: 'Premier research institute under Ministry of AYUSH with national herbal garden.'
    },
    hostelAvailability: {
      available: true,
      details: 'Modern residential campus with library, research labs, and herbal pharmacy.'
    },
    scholarshipInfo: 'Central AYUSH Stipends & National Scholarship Portal grants.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC National AYUSH Counselling Portal.',
    counsellingLink: 'https://aaccc.gov.in/',
    counsellingAuthority: 'AACCC Ministry of AYUSH',
    googleMapsUrl: 'https://maps.google.com/?q=National+Institute+of+Unani+Medicine+Bangalore',
    contactNumber: '+91-80-23584260',
    email: 'nium.bangalore@yahoo.com',
    website: 'https://nium.nic.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // TELANGANA & HYDERABAD MINORITY COLLEGES
  {
    id: 'col-tg-1',
    name: 'Deccan College of Medical Sciences (DCMS), Hyderabad',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Telangana',
    district: 'Hyderabad',
    address: 'DMRL X Roads, Kanchanbagh, Santosh Nagar, Hyderabad, Telangana 500058',
    affiliatedUniversity: 'Kaloji Narayana Rao University of Health Sciences (KNRUHS), Warangal',
    regulatoryApproval: 'NMC Recognized (Premier Muslim Minority Medical College of India)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1984,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority Quota (Cat A / B / C NRI)',
      annualFeeRange: '₹60,000 (Cat A Govt) / ₹13,00,000 (Cat B Minority)',
      notes: 'Attached to historic Owaisi Hospital & Research Centre.'
    },
    hostelAvailability: {
      available: true,
      details: 'Complete secure campus residential facilities for male and female doctors.'
    },
    scholarshipInfo: 'Telangana ePASS Fee Reimbursement & Dar-us-Salam Trust Aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> KNRUHS Telangana State Counselling (Minority Quota).',
    counsellingLink: 'https://knruhs.telangana.gov.in/',
    counsellingAuthority: 'Kaloji Narayana Rao University of Health Sciences (KNRUHS)',
    googleMapsUrl: 'https://maps.google.com/?q=Deccan+College+of+Medical+Sciences+Hyderabad',
    contactNumber: '+91-40-24340232',
    email: 'principal@deccancollegeofmedicalsciences.com',
    website: 'https://www.deccancollegeofmedicalsciences.com/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-tg-2',
    name: 'Shadan Institute of Medical Sciences (SIMS), Hyderabad',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Telangana',
    district: 'Rangareddy / Hyderabad',
    address: 'Himayat Sagar Road, Peerancheru, Hyderabad, Telangana 500008',
    affiliatedUniversity: 'KNRUHS Warangal',
    regulatoryApproval: 'NMC Recognized (Muslim Minority Institution)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2005,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority Quota / Management',
      annualFeeRange: '₹12,50,000 / Year',
      notes: 'Extensive 750-bed teaching hospital with high patient influx.'
    },
    hostelAvailability: {
      available: true,
      details: 'Separate hostels for boys and girls with halal dining and campus mosque.'
    },
    scholarshipInfo: 'Telangana Minority Welfare ePASS Scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> KNRUHS Telangana Medical Counselling.',
    counsellingLink: 'https://knruhs.telangana.gov.in/',
    counsellingAuthority: 'KNRUHS Telangana',
    googleMapsUrl: 'https://maps.google.com/?q=Shadan+Institute+of+Medical+Sciences+Hyderabad',
    contactNumber: '+91-40-29883301',
    email: 'info@shadan.in',
    website: 'http://www.shadan.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-tg-3',
    name: 'Government Nizamia Tibbiya College & Hospital, Hyderabad',
    course: 'BUMS',
    type: 'Government',
    minorityType: 'None',
    state: 'Telangana',
    district: 'Hyderabad',
    address: 'Near Charminar, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002',
    affiliatedUniversity: 'KNRUHS Warangal',
    regulatoryApproval: 'NCISM Recognized (Historic 1938 Nizam Heritage Unani Hospital)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1938,
    annualIntake: 75,
    feeStructure: {
      category: 'Government AYUSH Quota',
      annualFeeRange: '₹12,000 / Year',
      notes: 'Built during the reign of Mir Osman Ali Khan VII Nizam; architectural & medical marvel.'
    },
    hostelAvailability: {
      available: true,
      details: 'Historic residential rooms nearby for outstation scholars.'
    },
    scholarshipInfo: 'Telangana ePASS 100% Fee Reimbursement for eligible categories.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC AIQ & KNRUHS AYUSH State Counselling.',
    counsellingLink: 'https://knruhs.telangana.gov.in/',
    counsellingAuthority: 'KNRUHS Warangal',
    googleMapsUrl: 'https://maps.google.com/?q=Nizamia+Tibbiya+College+Charminar',
    contactNumber: '+91-40-24521088',
    email: 'nizamiatibbia@gmail.com',
    website: 'https://ayush.telangana.gov.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // KERALA
  {
    id: 'col-kl-1',
    name: 'M.E.S. Medical College & Hospital, Perinthalmanna',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Kerala',
    district: 'Malappuram',
    address: 'Palachode P.O., Perinthalmanna, Malappuram District, Kerala 679338',
    affiliatedUniversity: 'Kerala University of Health Sciences (KUHS), Thrissur',
    regulatoryApproval: 'NMC Recognized (Muslim Educational Society)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2004,
    annualIntake: 150,
    feeStructure: {
      category: 'Kerala State Quota / Minority Management',
      annualFeeRange: '₹7,65,000 / Year',
      notes: 'Managed by MES (Muslim Educational Society), premier educational movement of Kerala.'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious hostels with scenic greenery, reading rooms, and gym.'
    },
    scholarshipInfo: 'MES Scholarship Fund & e-Grantz Kerala State Aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> CEE Kerala (Commissioner for Entrance Examinations) Portal.',
    counsellingLink: 'https://cee.kerala.gov.in/',
    counsellingAuthority: 'CEE Kerala',
    googleMapsUrl: 'https://maps.google.com/?q=MES+Medical+College+Perinthalmanna',
    contactNumber: '+91-4933-298300',
    email: 'mesmedicalcollege@yahoo.com',
    website: 'https://mesmedicalcollege.com/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-kl-2',
    name: 'Government Medical College, Thiruvananthapuram',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    address: 'Medical College P.O., Chalakkuzhi, Thiruvananthapuram, Kerala 695011',
    affiliatedUniversity: 'Kerala University of Health Sciences (KUHS), Thrissur',
    regulatoryApproval: 'NMC Recognized (Oldest Medical College in Kerala)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1951,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Merit Quota',
      annualFeeRange: '₹27,580 / Year',
      notes: 'Premier healthcare hub with Regional Cancer Centre & Sree Chitra Tirunal nearby.'
    },
    hostelAvailability: {
      available: true,
      details: 'Extensive undergraduate hostels within sprawling Chalakkuzhi campus.'
    },
    scholarshipInfo: 'Kerala State Higher Education Scholarship & e-Grantz.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & CEE Kerala State Counselling (85%).',
    counsellingLink: 'https://cee.kerala.gov.in/',
    counsellingAuthority: 'Commissioner for Entrance Examinations (CEE), Kerala',
    googleMapsUrl: 'https://maps.google.com/?q=Govt+Medical+College+Thiruvananthapuram',
    contactNumber: '+91-471-2528300',
    email: 'principalgmctvm@gmail.com',
    website: 'https://www.gmctvm.gov.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },

  // TAMIL NADU
  {
    id: 'col-tn-1',
    name: 'Christian Medical College (CMC), Vellore',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Christian Minority',
    state: 'Tamil Nadu',
    district: 'Vellore',
    address: 'IDA Scudder Road, Vellore, Tamil Nadu 632004',
    affiliatedUniversity: 'The Tamil Nadu Dr. M.G.R. Medical University, Chennai',
    regulatoryApproval: 'NMC Recognized (Ranked #2 Medical College in India after AIIMS Delhi)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1900,
    annualIntake: 100,
    feeStructure: {
      category: 'Subsidized Missionary / General Quota',
      annualFeeRange: '₹53,000 / Year',
      notes: 'World-renowned for pioneering medical milestones and missionary healthcare ethos.'
    },
    hostelAvailability: {
      available: true,
      details: 'Bagayam residential campus with community living, athletics, and fellowship.'
    },
    scholarshipInfo: 'CMC Financial Aid Program (Up to 100% fee waiver for deserving scholars).',
    neetRequired: true,
    admissionProcess: 'NEET UG -> TN Medical Selection Counselling Portal (No Capitation Fee).',
    counsellingLink: 'https://tnmedicalselection.net/',
    counsellingAuthority: 'Directorate of Medical Education & Research (DMER), Tamil Nadu',
    googleMapsUrl: 'https://maps.google.com/?q=CMC+Vellore',
    contactNumber: '+91-416-2281000',
    email: 'registrar@cmcvellore.ac.in',
    website: 'https://www.cmch-vellore.edu/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-tn-2',
    name: 'Madras Medical College (MMC), Chennai',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Tamil Nadu',
    district: 'Chennai',
    address: 'E.V.R. Periyar Salai, Park Town, Near Chennai Central, Chennai, TN 600003',
    affiliatedUniversity: 'The Tamil Nadu Dr. M.G.R. Medical University, Chennai',
    regulatoryApproval: 'NMC Recognized (Established 1835 - One of Oldest Medical Colleges in Asia)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1835,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹13,610 / Year',
      notes: 'Attached to Rajiv Gandhi Government General Hospital (3000+ beds).'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious undergraduate hostels with modern library and sports ground.'
    },
    scholarshipInfo: 'TN State First Graduate Fee Concession & Post-Matric schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & TN DMER Medical Selection (85%).',
    counsellingLink: 'https://tnmedicalselection.net/',
    counsellingAuthority: 'DMER Tamil Nadu',
    googleMapsUrl: 'https://maps.google.com/?q=Madras+Medical+College+Chennai',
    contactNumber: '+91-44-25305000',
    email: 'deanmmc@tn.gov.in',
    website: 'http://www.mmc.ac.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-tn-3',
    name: 'National Institute of Siddha (NIS), Chennai',
    course: 'BSMS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Tamil Nadu',
    district: 'Chennai',
    address: 'Grand Southern Trunk (GST) Road, Tambaram Sanatoruim, Chennai, TN 600047',
    affiliatedUniversity: 'The Tamil Nadu Dr. M.G.R. Medical University / Ministry of AYUSH',
    regulatoryApproval: 'NCISM Approved (National Apex Institute for Siddha System of Medicine)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 2005,
    annualIntake: 60,
    feeStructure: {
      category: 'Central Government Autonomous',
      annualFeeRange: '₹32,000 / Year',
      notes: 'Premier national center specializing in traditional Tamil Siddha medicine.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus boys and girls hostels with herbal garden and research labs.'
    },
    scholarshipInfo: 'Central AYUSH Stipends & National Scholarship Portal.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> AACCC National AYUSH Counselling Portal.',
    counsellingLink: 'https://aaccc.gov.in/',
    counsellingAuthority: 'AACCC Ministry of AYUSH',
    googleMapsUrl: 'https://maps.google.com/?q=National+Institute+of+Siddha+Tambaram',
    contactNumber: '+91-44-22411611',
    email: 'nischennaisiddha@yahoo.co.in',
    website: 'https://nischennai.org/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // WEST BENGAL
  {
    id: 'col-wb-1',
    name: 'Medical College Kolkata (Calcutta Medical College)',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'West Bengal',
    district: 'Kolkata',
    address: '88, College Street, Kolkata, West Bengal 700073',
    affiliatedUniversity: 'West Bengal University of Health Sciences (WBUHS), Kolkata',
    regulatoryApproval: 'NMC Recognized (Established 1835 - Oldest Medical College in Asia teaching Allopathic medicine)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1835,
    annualIntake: 250,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹9,000 / Year',
      notes: 'Historic medical institution with legendary faculty and heritage hospitals.'
    },
    hostelAvailability: {
      available: true,
      details: 'Main Boys Hostel & Eden Girls Hostel on College Street.'
    },
    scholarshipInfo: 'Swami Vivekananda Merit Cum Means Scholarship & Kanyashree Prakalpa.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & WBMCC West Bengal State Counselling (85%).',
    counsellingLink: 'https://wbmcc.nic.in/',
    counsellingAuthority: 'West Bengal Medical Counselling Committee (WBMCC)',
    googleMapsUrl: 'https://maps.google.com/?q=Medical+College+Kolkata',
    contactNumber: '+91-33-22551601',
    email: 'principalmck@gmail.com',
    website: 'https://www.medicalcollegekolkata.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-wb-2',
    name: 'Calcutta Unani Medical College & Hospital, Kolkata',
    course: 'BUMS',
    type: 'Private',
    minorityType: 'Muslim Minority',
    state: 'West Bengal',
    district: 'Kolkata',
    address: '8/1, Abdul Halim Lane, Taltala, Kolkata, West Bengal 700016',
    affiliatedUniversity: 'West Bengal University of Health Sciences (WBUHS), Kolkata',
    regulatoryApproval: 'NCISM Recognized (Premier Unani Medical College of East India)',
    regulatoryAuthority: 'NCISM',
    yearEstablished: 1994,
    annualIntake: 60,
    feeStructure: {
      category: 'Minority & State AYUSH Quota',
      annualFeeRange: '₹1,50,000 / Year',
      notes: 'Dedicated hospital serving diverse urban communities in central Kolkata.'
    },
    hostelAvailability: {
      available: true,
      details: 'Hostel facilities for outstation students in Taltala area.'
    },
    scholarshipInfo: 'Aikyashree West Bengal Minority Scholarship & WBMDFC Aid.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> WBMCC West Bengal AYUSH Counselling.',
    counsellingLink: 'https://wbmcc.nic.in/',
    counsellingAuthority: 'WBMCC AYUSH Board Kolkata',
    googleMapsUrl: 'https://maps.google.com/?q=Calcutta+Unani+Medical+College',
    contactNumber: '+91-33-24641234',
    email: 'cumckolkata@gmail.com',
    website: 'https://cumc.in/',
    officialRegistrySearchUrl: 'https://ncismindia.org/college-list.php'
  },

  // HARYANA
  {
    id: 'col-hr-1',
    name: 'Al-Falah School of Medical Sciences & Research Centre, Faridabad',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Muslim Minority',
    state: 'Haryana',
    district: 'Faridabad',
    address: 'Dhauj, Faridabad, NCR Delhi, Haryana 121004',
    affiliatedUniversity: 'Al-Falah University (Recognized by UGC & Govt of Haryana)',
    regulatoryApproval: 'NMC Recognized (Muslim Minority Private Medical College)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 2019,
    annualIntake: 150,
    feeStructure: {
      category: 'Minority & General Quota',
      annualFeeRange: '₹14,25,000 / Year',
      notes: 'Sprawling green 70-acre campus in NCR with 750-bed multi-specialty hospital.'
    },
    hostelAvailability: {
      available: true,
      details: 'Air-conditioned and standard hostels with sports grounds and campus mosque.'
    },
    scholarshipInfo: 'Al-Falah Trust Aid & Haryana State Minority Scholarship schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> DMER Haryana NEET Counselling Portal (Minority & General seats).',
    counsellingLink: 'https://dmer.haryana.gov.in/',
    counsellingAuthority: 'Directorate of Medical Education & Research (DMER), Haryana',
    googleMapsUrl: 'https://maps.google.com/?q=Al+Falah+Medical+College+Faridabad',
    contactNumber: '+91-[0129]-2400601',
    email: 'info@alfalahuniversity.edu.in',
    website: 'https://alfalahuniversity.edu.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },

  // PUNJAB
  {
    id: 'col-pb-1',
    name: 'Christian Medical College (CMC), Ludhiana',
    course: 'MBBS',
    type: 'Minority',
    minorityType: 'Christian Minority',
    state: 'Punjab',
    district: 'Ludhiana',
    address: 'Brown Road, Near Railway Station, Ludhiana, Punjab 141008',
    affiliatedUniversity: 'Baba Farid University of Health Sciences (BFUHS), Faridkot',
    regulatoryApproval: 'NMC Recognized (Historic 1894 Medical School & Hospital)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1894,
    annualIntake: 75,
    feeStructure: {
      category: 'Christian Minority & General Merit Quota',
      annualFeeRange: '₹6,60,000 / Year',
      notes: 'First medical school for women in Asia; exceptional clinical legacy.'
    },
    hostelAvailability: {
      available: true,
      details: 'Secure on-campus hostels with community dining and athletic facilities.'
    },
    scholarshipInfo: 'CMC Ludhiana Institutional Scholarships & Church sponsorship stipends.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> BFUHS Faridkot State Medical Counselling.',
    counsellingLink: 'https://bfuhs.ac.in/',
    counsellingAuthority: 'Baba Farid University of Health Sciences (BFUHS)',
    googleMapsUrl: 'https://maps.google.com/?q=CMC+Ludhiana',
    contactNumber: '+91-161-2115376',
    email: 'principal@cmcludhiana.in',
    website: 'https://www.cmcludhiana.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },

  // ASSAM
  {
    id: 'col-as-1',
    name: 'Gauhati Medical College and Hospital (GMCH), Guwahati',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Assam',
    district: 'Kamrup Metropolitan',
    address: 'Bhangagarh, Guwahati, Assam 781032',
    affiliatedUniversity: 'Srimanta Sankaradeva University of Health Sciences (SSUHS), Guwahati',
    regulatoryApproval: 'NMC Recognized (Premier Healthcare Institution of Northeast India)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1960,
    annualIntake: 200,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹28,000 / Year',
      notes: 'Tertiary referral center serving entire North-Eastern region.'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious undergraduate hostels with modern amenities.'
    },
    scholarshipInfo: 'Assam State Merit Scholarship & NEC (North Eastern Council) stipend.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & DME Assam State Counselling (85%).',
    counsellingLink: 'https://dme.assam.gov.in/',
    counsellingAuthority: 'Directorate of Medical Education (DME), Assam',
    googleMapsUrl: 'https://maps.google.com/?q=Gauhati+Medical+College+Guwahati',
    contactNumber: '+91-[0361]-2529457',
    email: 'gmch-asm@nic.in',
    website: 'https://gmch.assam.gov.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },

  // REMAINING STATES & UTS SAMPLES
  {
    id: 'col-ut-jk-1',
    name: 'Government Medical College (GMC), Srinagar',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Jammu & Kashmir',
    district: 'Srinagar',
    address: 'Karan Nagar, Srinagar, J&K UT 190010',
    affiliatedUniversity: 'University of Kashmir, Srinagar',
    regulatoryApproval: 'NMC Recognized (Oldest Medical College in J&K)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1959,
    annualIntake: 180,
    feeStructure: {
      category: 'Government Quota',
      annualFeeRange: '₹26,000 / Year',
      notes: 'Attached to SMHS Hospital, Lal Ded Hospital, and Bone & Joint Hospital.'
    },
    hostelAvailability: {
      available: true,
      details: 'Campus hostels for male and female medical students in Karan Nagar and Bemina.'
    },
    scholarshipInfo: 'J&K UT Merit Scholarship & Post-Matric Minority schemes.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ (15%) & J&K BOPEE State Counselling (85%).',
    counsellingLink: 'https://jkbopee.gov.in/',
    counsellingAuthority: 'J&K Board of Professional Entrance Examinations (BOPEE)',
    googleMapsUrl: 'https://maps.google.com/?q=GMC+Srinagar+Karan+Nagar',
    contactNumber: '+91-194-2477324',
    email: 'principalgmcsrinagar@gmail.com',
    website: 'https://gmcs.edu.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-ut-py-1',
    name: 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry',
    course: 'MBBS',
    type: 'Autonomous',
    minorityType: 'None',
    state: 'Puducherry',
    district: 'Puducherry',
    address: 'Dhanvantari Nagar, Gorimedu, Puducherry UT 605006',
    affiliatedUniversity: 'Autonomous Institution of National Importance under Ministry of Health & Family Welfare',
    regulatoryApproval: 'NMC Approved (Institute of National Importance)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1823,
    annualIntake: 200,
    feeStructure: {
      category: 'Central Government Quota',
      annualFeeRange: '₹14,920 / Year',
      notes: 'Traces roots to Ecole de Medecine de Pondichery established by French in 1823.'
    },
    hostelAvailability: {
      available: true,
      details: 'Spacious international standard hostels within green 192-acre campus.'
    },
    scholarshipInfo: 'JIPMER Merit Stipends & NSP Central Government scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> 100% seats filled through MCC All India Counselling Portal.',
    counsellingLink: 'https://mcc.nic.in/',
    counsellingAuthority: 'Medical Counselling Committee (MCC), DGHS New Delhi',
    googleMapsUrl: 'https://maps.google.com/?q=JIPMER+Puducherry',
    contactNumber: '+91-413-2296000',
    email: 'director@jipmer.edu.in',
    website: 'https://jipmer.edu.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  },
  {
    id: 'col-ut-goa-1',
    name: 'Goa Medical College (GMC), Bambolim',
    course: 'MBBS',
    type: 'Government',
    minorityType: 'None',
    state: 'Goa',
    district: 'North Goa',
    address: 'NH-66, Bambolim, Goa 403202',
    affiliatedUniversity: 'Goa University, Taleigao Plateau',
    regulatoryApproval: 'NMC Recognized (Oldest Medical School in Asia - Established 1691 as Escola Medico-Cirurgica de Goa)',
    regulatoryAuthority: 'NMC',
    yearEstablished: 1691,
    annualIntake: 180,
    feeStructure: {
      category: 'Government Goa State Quota',
      annualFeeRange: '₹40,000 / Year',
      notes: 'Historic medical heritage combined with modern multi-specialty hospital complex.'
    },
    hostelAvailability: {
      available: true,
      details: 'In-campus boys and girls hostels overlooking scenic Bambolim plateau.'
    },
    scholarshipInfo: 'Goa State Bursary Scheme & Post-Matric scholarships.',
    neetRequired: true,
    admissionProcess: 'NEET UG -> MCC AIQ & DTE Goa State Counselling (85%).',
    counsellingLink: 'https://dte.goa.gov.in/',
    counsellingAuthority: 'Directorate of Technical Education (DTE), Goa',
    googleMapsUrl: 'https://maps.google.com/?q=Goa+Medical+College+Bambolim',
    contactNumber: '+91-832-2458700',
    email: 'dean-gmc.goa@nic.in',
    website: 'https://gmc.goa.gov.in/',
    officialRegistrySearchUrl: 'https://www.nmc.org.in/information-desk/college-and-course-search/'
  }
];
