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
  | 'Autonomous'
  | 'AIIMS'
  | 'AYUSH'
  | 'Dental'
  | 'Medical University';

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
  logoUrl?: string;
  coverImageUrl?: string;
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
  logoUrl?: string;
  coverImageUrl?: string;
  course: MedicalCourse;
  offeredCourses?: MedicalCourse[];
  type: InstitutionType;
  minorityType: MinorityType;
  state: string;
  district: string;
  city?: string;
  address: string;
  affiliatedUniversity: string;
  regulatoryApproval: string;
  regulatoryAuthority: RegulatoryAuthority;
  accreditation?: string;
  nirfRanking?: string;
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
  placementInformation?: string;
  entranceExam?: string;
  neetRequired: boolean;
  admissionProcess: string;
  admissionPortalUrl?: string;
  counsellingLink: string;
  counsellingAuthority: string;
  googleMapsUrl: string;
  contactNumber: string;
  email: string;
  website: string;
  officialRegistrySearchUrl: string;
  campusGallery?: string[];
  prospectusUrl?: string;
  lastVerifiedDate?: string;
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
  {
    "id": "col-aiims-1",
    "name": "All India Institute of Medical Sciences (AIIMS), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing",
      "BPT",
      "MD/MS"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029",
    "affiliatedUniversity": "Autonomous Institute of National Importance",
    "regulatoryApproval": "NMC Recognized Apex Institute",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH & INI Accredited",
    "nirfRanking": "NIRF Rank #1 (Medical 2025)",
    "yearEstablished": 1956,
    "annualIntake": 132,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal statutory academic fees."
    },
    "hostelAvailability": {
      "available": false,
      "details": "Mandatory AC/Non-AC hostels with 24x7 security & mess."
    },
    "scholarshipInfo": "Institute Merit Stipends & NSP Central Fellowships.",
    "placementInformation": "100% Paid Internship with \u20b930,000/mo stipend.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC 100% All India Online Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Medical Counselling Committee (MCC)",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+New+Delhi",
    "contactNumber": "+91-11-26588500",
    "email": "director@aiims.edu",
    "website": "https://www.aiims.edu/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.aiims.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-2",
    "name": "All India Institute of Medical Sciences (AIIMS), Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing",
      "MD/MS"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Saket Nagar, AIIMS Campus, Bhopal, MP 462020",
    "affiliatedUniversity": "Autonomous INI under PMSSY",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #38 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Central government fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Modern multi-story residential hostels with cafeteria."
    },
    "scholarshipInfo": "MMVY MP Domicile & Central Minority Scholarships.",
    "placementInformation": "100% paid internship + INI-CET PG pathway.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC (DGHS) New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Bhopal",
    "contactNumber": "+91-755-2672317",
    "email": "info@aiimsbhopal.edu.in",
    "website": "https://aiimsbhopal.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimsbhopal.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-3",
    "name": "All India Institute of Medical Sciences (AIIMS), Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing",
      "MD/MS"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Basni Industrial Area Phase-2, Jodhpur, Rajasthan 342005",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #13 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal government fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Spacious campus hostels with internet & sports courts."
    },
    "scholarshipInfo": "Rajasthan State Merit Grants & NSP Fellowships.",
    "placementInformation": "100% paid house surgeonship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Online Portal.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Jodhpur",
    "contactNumber": "+91-291-2740741",
    "email": "director@aiimsjodhpur.edu.in",
    "website": "https://www.aiimsjodhpur.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.aiimsjodhpur.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-4",
    "name": "All India Institute of Medical Sciences (AIIMS), Rishikesh",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing",
      "BPT"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Uttarakhand",
    "district": "Dehradun",
    "city": "Rishikesh",
    "address": "Virbhadra Road, Rishikesh, Uttarakhand 249203",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Approved",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #14 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Hills campus hostels with wifi & green dining halls."
    },
    "scholarshipInfo": "Uttarakhand Domicile & NSP Fellowships.",
    "placementInformation": "100% paid internship with trauma exposure.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC DGHS",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Rishikesh",
    "contactNumber": "+91-135-2462941",
    "email": "info@aiimsrishikesh.edu.in",
    "website": "https://aiimsrishikesh.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimsrishikesh.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-5",
    "name": "All India Institute of Medical Sciences (AIIMS), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Phulwari Sharif, Patna, Bihar 801507",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #27 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated hostels with 24x7 power & student mess."
    },
    "scholarshipInfo": "Bihar Post Matric Scholarship & Central Grants.",
    "placementInformation": "100% paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC (DGHS) New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Patna",
    "contactNumber": "+91-612-2451006",
    "email": "admin@aiimspatna.org",
    "website": "https://aiimspatna.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimspatna.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-6",
    "name": "All India Institute of Medical Sciences (AIIMS), Bhubaneswar",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Odisha",
    "district": "Khurda",
    "city": "Bhubaneswar",
    "address": "Sijua, Patrapada, Bhubaneswar, Odisha 751019",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #15 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Full student hostels with gym & mess."
    },
    "scholarshipInfo": "Odisha Medhabruti & NSP Fellowships.",
    "placementInformation": "100% paid house surgeonship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Quota.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC (DGHS)",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Bhubaneswar",
    "contactNumber": "+91-674-2476789",
    "email": "info@aiimsbhubaneswar.edu.in",
    "website": "https://aiimsbhubaneswar.nic.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimsbhubaneswar.nic.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-7",
    "name": "All India Institute of Medical Sciences (AIIMS), Raipur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Chhattisgarh",
    "district": "Raipur",
    "city": "Raipur",
    "address": "Great Eastern Rd, Tatibandh, Raipur, Chhattisgarh 492099",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Approved",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #39 (Medical 2025)",
    "yearEstablished": 2012,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with sports & dining."
    },
    "scholarshipInfo": "Chhattisgarh State Scholarships & NSP Grants.",
    "placementInformation": "100% paid compulsory internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC (DGHS) New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Raipur",
    "contactNumber": "+91-771-2577201",
    "email": "director@aiimsraipur.edu.in",
    "website": "https://www.aiimsraipur.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.aiimsraipur.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-8",
    "name": "All India Institute of Medical Sciences (AIIMS), Nagpur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Nagpur",
    "city": "Nagpur",
    "address": "MIHAN, Nagpur, Maharashtra 441108",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Approved",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "Top 50 Medical Institutions",
    "yearEstablished": 2018,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Smart student hostels with cafeteria."
    },
    "scholarshipInfo": "Mahadbt Maharashtra & NSP Fellowships.",
    "placementInformation": "100% paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India Quota.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC DGHS",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Nagpur",
    "contactNumber": "+91-712-2980112",
    "email": "director@aiimsnagpur.edu.in",
    "website": "https://aiimsnagpur.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimsnagpur.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-9",
    "name": "All India Institute of Medical Sciences (AIIMS), Gorakhpur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "city": "Gorakhpur",
    "address": "Kunraghat, Gorakhpur, Uttar Pradesh 273008",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Approved",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "Top INI Center",
    "yearEstablished": 2019,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b91,628 / Year",
      "notes": "Nominal fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Newly built hostels for undergraduate students."
    },
    "scholarshipInfo": "UP Post-Matric & Central Minority Grants.",
    "placementInformation": "100% paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC DGHS",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+Gorakhpur",
    "contactNumber": "+91-551-2205501",
    "email": "info@aiimsgorakhpur.edu.in",
    "website": "https://aiimsgorakhpur.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiimsgorakhpur.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-10",
    "name": "All India Institute of Medical Sciences (AIIMS), Kalyani",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing"
    ],
    "type": "AIIMS",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "Nadia",
    "city": "Kalyani",
    "address": "NH-34 Connector, Basantapur, Kalyani, West Bengal 741245",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier Eastern India INI",
    "nirfRanking": 2019,
    "yearEstablished": 125,
    "annualIntake": "Central Govt Subsidized",
    "feeStructure": {
      "category": "\u20b91,628 / Year",
      "annualFeeRange": "Nominal fees.",
      "notes": "Eco-friendly campus hostels with dining hall."
    },
    "hostelAvailability": {
      "available": true,
      "details": "West Bengal Aikyashree & NSP Scholarships."
    },
    "scholarshipInfo": "100% paid internship.",
    "placementInformation": "NEET-UG",
    "entranceExam": true,
    "neetRequired": "NEET-UG -> MCC All India Quota.",
    "admissionProcess": "https://mcc.nic.in/",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "MCC (DGHS)",
    "counsellingAuthority": "https://maps.google.com/?q=AIIMS+Kalyani",
    "googleMapsUrl": "+91-33-25820011",
    "contactNumber": "office@aiimskalyani.edu.in",
    "email": "https://aiimskalyani.edu.in/",
    "website": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-11",
    "name": "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "B.Sc Nursing",
      "BPT",
      "MD/MS"
    ],
    "type": "Autonomous",
    "minorityType": "None",
    "state": "Puducherry",
    "district": "Puducherry",
    "city": "Puducherry",
    "address": "Dhanvantari Nagar, Gorimedu, Puducherry UT 605006",
    "affiliatedUniversity": "Autonomous Institute of National Importance under MoHFW",
    "regulatoryApproval": "NMC Approved (INI)",
    "regulatoryAuthority": "NMC",
    "accreditation": "INI & NABH Accredited",
    "nirfRanking": "NIRF Rank #5 (Medical 2025)",
    "yearEstablished": 1823,
    "annualIntake": 200,
    "feeStructure": {
      "category": "Central Govt Quota",
      "annualFeeRange": "\u20b914,920 / Year",
      "notes": "Traces roots to French medical school 1823."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Green 192-acre campus hostels with athletic grounds."
    },
    "scholarshipInfo": "JIPMER Merit Stipends & NSP Central Fellowships.",
    "placementInformation": "100% paid house surgeonship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> 100% seats via MCC All India Counselling.",
    "admissionPortalUrl": "https://mcc.nic.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "MCC (DGHS) New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=JIPMER+Puducherry",
    "contactNumber": "+91-413-2296000",
    "email": "director@jipmer.edu.in",
    "website": "https://jipmer.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://jipmer.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-aiims-12",
    "name": "Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "Allied Health Sciences",
    "offeredCourses": [
      "B.Sc Medical Technology",
      "B.Sc Nursing",
      "BPT",
      "MD/MS"
    ],
    "type": "Autonomous",
    "minorityType": "None",
    "state": "Chandigarh",
    "district": "Chandigarh",
    "city": "Chandigarh",
    "address": "Sector 12, Chandigarh UT 160012",
    "affiliatedUniversity": "Autonomous INI under MoHFW",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Institute of National Importance",
    "nirfRanking": "NIRF Rank #2 (Medical 2025)",
    "yearEstablished": 1962,
    "annualIntake": 180,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b93,500 / Year",
      "notes": "Premier research and training institute."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Resident doctor and student hostels in Sector 12."
    },
    "scholarshipInfo": "PGIMER Fellowships & ICMR Research Grants.",
    "placementInformation": "100% clinical research & hospital placement.",
    "entranceExam": "INI-CET",
    "neetRequired": false,
    "admissionProcess": "INI-CET -> PGIMER Counseling Board.",
    "admissionPortalUrl": "https://www.pgimer.edu.in/",
    "counsellingLink": "https://www.pgimer.edu.in/",
    "counsellingAuthority": "PGIMER Chandigarh",
    "googleMapsUrl": "https://maps.google.com/?q=PGIMER+Chandigarh",
    "contactNumber": "+91-172-2755555",
    "email": "pgimer-chd@nic.in",
    "website": "https://pgimer.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/information-desk/college-and-course-search/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://pgimer.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-1",
    "name": "Maulana Azad Medical College (MAMC), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "New Delhi",
    "address": "Central Delhi, Delhi",
    "affiliatedUniversity": "University of Delhi",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1958,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b94,445 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.mamc.ac.in/",
    "counsellingLink": "https://www.mamc.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Maulana+Azad+Medical+College+(MAMC),+New+Delhi",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.mamc.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.mamc.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-2",
    "name": "Vardhman Mahavir Medical College (VMMC), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "New Delhi",
    "address": "South West Delhi, Delhi",
    "affiliatedUniversity": "GGSIPU Delhi",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 2001,
    "annualIntake": 170,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b950,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.vmmc-sjh.nic.in/",
    "counsellingLink": "http://www.vmmc-sjh.nic.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Vardhman+Mahavir+Medical+College+(VMMC),+New+Delhi",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.vmmc-sjh.nic.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.vmmc-sjh.nic.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-3",
    "name": "Lady Hardinge Medical College (LHMC), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "New Delhi",
    "address": "Central Delhi, Delhi",
    "affiliatedUniversity": "University of Delhi",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1916,
    "annualIntake": 240,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,500 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://lhmc-hosp.gov.in/",
    "counsellingLink": "http://lhmc-hosp.gov.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Lady+Hardinge+Medical+College+(LHMC),+New+Delhi",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://lhmc-hosp.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://lhmc-hosp.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-4",
    "name": "King George's Medical University (KGMU), Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Lucknow, Uttar Pradesh",
    "affiliatedUniversity": "State Medical University",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1911,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b954,900 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.kgmu.org/",
    "counsellingLink": "https://www.kgmu.org/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=King+George's+Medical+University+(KGMU),+Lucknow",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.kgmu.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.kgmu.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-5",
    "name": "Institute of Medical Sciences (IMS BHU), Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Varanasi, Uttar Pradesh",
    "affiliatedUniversity": "Banaras Hindu University",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1960,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b929,800 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.bhu.ac.in/ims/",
    "counsellingLink": "https://www.bhu.ac.in/ims/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Medical+Sciences+(IMS+BHU),+Varanasi",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.bhu.ac.in/ims/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.bhu.ac.in/ims/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-6",
    "name": "Jawaharlal Nehru Medical College (JNMC AMU), Aligarh",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "city": "Aligarh",
    "address": "Aligarh, Uttar Pradesh",
    "affiliatedUniversity": "Aligarh Muslim University",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1962,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b942,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.amu.ac.in/",
    "counsellingLink": "https://www.amu.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Jawaharlal+Nehru+Medical+College+(JNMC+AMU),+Aligarh",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.amu.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.amu.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-7",
    "name": "Grant Medical College & Sir JJ Hospital, Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "Mumbai, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1845,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,15,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://ggmcjjh.com/",
    "counsellingLink": "https://ggmcjjh.com/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Grant+Medical+College+&+Sir+JJ+Hospital,+Mumbai",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://ggmcjjh.com/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://ggmcjjh.com/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-8",
    "name": "Seth GS Medical College & KEM Hospital, Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "Mumbai, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1926,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,18,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.kem.edu/",
    "counsellingLink": "https://www.kem.edu/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Seth+GS+Medical+College+&+KEM+Hospital,+Mumbai",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.kem.edu/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.kem.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-9",
    "name": "BJ Government Medical College (BJMC), Pune",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Pune, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1946,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,12,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.bjmcpune.org/",
    "counsellingLink": "https://www.bjmcpune.org/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=BJ+Government+Medical+College+(BJMC),+Pune",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.bjmcpune.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.bjmcpune.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-10",
    "name": "Madras Medical College (MMC), Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Med Univ",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1835,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b913,610 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.mmc.ac.in/",
    "counsellingLink": "https://www.mmc.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Madras+Medical+College+(MMC),+Chennai",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.mmc.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.mmc.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-11",
    "name": "Stanley Medical College (SMC), Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Med Univ",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1938,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b913,610 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.stanleymedicalcollege.in/",
    "counsellingLink": "http://www.stanleymedicalcollege.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Stanley+Medical+College+(SMC),+Chennai",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.stanleymedicalcollege.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.stanleymedicalcollege.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-12",
    "name": "Medical College Kolkata, Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Kolkata, West Bengal",
    "affiliatedUniversity": "WBUHS Kolkata",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1835,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b99,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.medicalcollegekolkata.in/",
    "counsellingLink": "https://www.medicalcollegekolkata.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Medical+College+Kolkata,+Kolkata",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.medicalcollegekolkata.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.medicalcollegekolkata.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-13",
    "name": "Nil Ratan Sircar Medical College (NRS), Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Kolkata, West Bengal",
    "affiliatedUniversity": "WBUHS Kolkata",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1873,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b99,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.nrsmc.edu.in/",
    "counsellingLink": "http://www.nrsmc.edu.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Nil+Ratan+Sircar+Medical+College+(NRS),+Kolkata",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.nrsmc.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.nrsmc.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-14",
    "name": "Bangalore Medical College & Research Institute (BMCRI)",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Bengaluru Urban, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1955,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b960,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://bmcri.karnataka.gov.in/",
    "counsellingLink": "https://bmcri.karnataka.gov.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Bangalore+Medical+College+&+Research+Institute+(BMCRI)",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://bmcri.karnataka.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://bmcri.karnataka.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-15",
    "name": "Mysore Medical College & Research Institute (MMCRI)",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Mysuru",
    "city": "Mysuru",
    "address": "Mysuru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1924,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b960,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://mmcri.karnataka.gov.in/",
    "counsellingLink": "https://mmcri.karnataka.gov.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Mysore+Medical+College+&+Research+Institute+(MMCRI)",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://mmcri.karnataka.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://mmcri.karnataka.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-16",
    "name": "Government Medical College (GMC), Kozhikode",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Kozhikode",
    "address": "Kozhikode, Kerala",
    "affiliatedUniversity": "KUHS Thrissur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1957,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b927,580 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.govtmedicalcollegecalicut.ac.in/",
    "counsellingLink": "https://www.govtmedicalcollegecalicut.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Medical+College+(GMC),+Kozhikode",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.govtmedicalcollegecalicut.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.govtmedicalcollegecalicut.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-17",
    "name": "Government Medical College, Thiruvananthapuram",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "address": "Thiruvananthapuram, Kerala",
    "affiliatedUniversity": "KUHS Thrissur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1951,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b927,580 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.tmc.kerala.gov.in/",
    "counsellingLink": "https://www.tmc.kerala.gov.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Medical+College,+Thiruvananthapuram",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.tmc.kerala.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.tmc.kerala.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-18",
    "name": "BJ Medical College (BJMC), Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Ahmedabad, Gujarat",
    "affiliatedUniversity": "Gujarat University",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1871,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b925,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://www.bjmcahmedabad.edu.in/",
    "counsellingLink": "https://www.bjmcahmedabad.edu.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=BJ+Medical+College+(BJMC),+Ahmedabad",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://www.bjmcahmedabad.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.bjmcahmedabad.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-19",
    "name": "Medical College Baroda (MCB), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Vadodara, Gujarat",
    "affiliatedUniversity": "MSU Baroda",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1949,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b925,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.mcbaroda.ac.in/",
    "counsellingLink": "http://www.mcbaroda.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Medical+College+Baroda+(MCB),+Vadodara",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.mcbaroda.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.mcbaroda.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-20",
    "name": "Sawai Man Singh (SMS) Medical College, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Jaipur, Rajasthan",
    "affiliatedUniversity": "RUHS Jaipur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1947,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b950,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://transport.rajasthan.gov.in/smsmcjaipur/",
    "counsellingLink": "https://transport.rajasthan.gov.in/smsmcjaipur/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Sawai+Man+Singh+(SMS)+Medical+College,+Jaipur",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://transport.rajasthan.gov.in/smsmcjaipur/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://transport.rajasthan.gov.in/smsmcjaipur/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-21",
    "name": "Dr. Sampurnanand Medical College (SNMC), Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Jodhpur, Rajasthan",
    "affiliatedUniversity": "RUHS Jaipur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1965,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b950,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://snmcjodhpur.ac.in/",
    "counsellingLink": "http://snmcjodhpur.ac.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Dr.+Sampurnanand+Medical+College+(SNMC),+Jodhpur",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://snmcjodhpur.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://snmcjodhpur.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-22",
    "name": "Gandhi Medical College (GMC), Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Bhopal, Madhya Pradesh",
    "affiliatedUniversity": "MPMSU Jabalpur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1955,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,14,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://gmcbhopal.net/",
    "counsellingLink": "https://gmcbhopal.net/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Gandhi+Medical+College+(GMC),+Bhopal",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://gmcbhopal.net/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://gmcbhopal.net/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-23",
    "name": "Mahatma Gandhi Memorial Medical College (MGMMC), Indore",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Indore, Madhya Pradesh",
    "affiliatedUniversity": "MPMSU Jabalpur",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1948,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b91,14,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://mgmmcindore.in/",
    "counsellingLink": "http://mgmmcindore.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Memorial+Medical+College+(MGMMC),+Indore",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://mgmmcindore.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://mgmmcindore.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-24",
    "name": "Government Medical College (GMC), Amritsar",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Amritsar, Punjab",
    "affiliatedUniversity": "BFUHS Faridkot",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1943,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b990,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.gmc.edu.in/",
    "counsellingLink": "http://www.gmc.edu.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Medical+College+(GMC),+Amritsar",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.gmc.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.gmc.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-25",
    "name": "SCB Medical College, Cuttack",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Odisha",
    "district": "Cuttack",
    "city": "Cuttack",
    "address": "Cuttack, Odisha",
    "affiliatedUniversity": "Utkal University",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1944,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b935,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "https://scbmch.in/",
    "counsellingLink": "https://scbmch.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=SCB+Medical+College,+Cuttack",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "https://scbmch.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://scbmch.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-26",
    "name": "Osmania Medical College, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hyderabad, Telangana",
    "affiliatedUniversity": "KNRUHS Warangal",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1846,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b920,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.osmaniamedicalcollege.edu.in/",
    "counsellingLink": "http://www.osmaniamedicalcollege.edu.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Osmania+Medical+College,+Hyderabad",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.osmaniamedicalcollege.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.osmaniamedicalcollege.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-27",
    "name": "Gandhi Medical College, Secunderabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hyderabad, Telangana",
    "affiliatedUniversity": "KNRUHS Warangal",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1954,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b920,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://gandhimedicalcollege.mobi/",
    "counsellingLink": "http://gandhimedicalcollege.mobi/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Gandhi+Medical+College,+Secunderabad",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://gandhimedicalcollege.mobi/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gandhimedicalcollege.mobi/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-28",
    "name": "Andhra Medical College (AMC), Visakhapatnam",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "city": "Visakhapatnam",
    "address": "Visakhapatnam, Andhra Pradesh",
    "affiliatedUniversity": "YSRUHS Vijayawada",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1923,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b915,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://amc.edu.in/",
    "counsellingLink": "http://amc.edu.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Andhra+Medical+College+(AMC),+Visakhapatnam",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://amc.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://amc.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-29",
    "name": "Patna Medical College and Hospital (PMCH), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Patna, Bihar",
    "affiliatedUniversity": "AKU Patna",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1925,
    "annualIntake": 200,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b921,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.patnamedicalcollege.com/",
    "counsellingLink": "http://www.patnamedicalcollege.com/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Patna+Medical+College+and+Hospital+(PMCH),+Patna",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.patnamedicalcollege.com/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.patnamedicalcollege.com/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-gov-30",
    "name": "Gauhati Medical College and Hospital (GMCH), Guwahati",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Government",
    "minorityType": "None",
    "state": "Assam",
    "district": "Guwahati",
    "city": "Guwahati",
    "address": "Guwahati, Assam",
    "affiliatedUniversity": "SSUHS Assam",
    "regulatoryApproval": "NMC Recognized",
    "regulatoryAuthority": "NMC",
    "accreditation": "Premier State Govt College",
    "nirfRanking": "Top Government Medical Institute",
    "yearEstablished": 1960,
    "annualIntake": 200,
    "feeStructure": {
      "category": "Government Merit Quota",
      "annualFeeRange": "\u20b930,000 / Year",
      "notes": "State government merit fee."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Available hostels on campus."
    },
    "scholarshipInfo": "State Post Matric Scholarships.",
    "placementInformation": "100% compulsory paid internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Medical Counselling & MCC AIQ.",
    "admissionPortalUrl": "http://www.gmchassam.gov.in/",
    "counsellingLink": "http://www.gmchassam.gov.in/",
    "counsellingAuthority": "State DME & MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Gauhati+Medical+College+and+Hospital+(GMCH),+Guwahati",
    "contactNumber": "+91-11-23000000",
    "email": "info@medcollege.gov.in",
    "website": "http://www.gmchassam.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.gmchassam.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-1",
    "name": "Kasturba Medical College (KMC), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Manipal, Karnataka",
    "affiliatedUniversity": "Manipal Academy of Higher Education (MAHE)",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1981,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b917,80,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://manipal.edu/kmc-manipal.html",
    "counsellingLink": "https://manipal.edu/kmc-manipal.html",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Kasturba+Medical+College+(KMC),+Manipal",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://manipal.edu/kmc-manipal.html",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://manipal.edu/kmc-manipal.html/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-2",
    "name": "Kasturba Medical College (KMC), Mangalore",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangaluru",
    "address": "Mangaluru, Karnataka",
    "affiliatedUniversity": "Manipal Academy of Higher Education (MAHE)",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1982,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b917,80,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://manipal.edu/kmc-mangalore.html",
    "counsellingLink": "https://manipal.edu/kmc-mangalore.html",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Kasturba+Medical+College+(KMC),+Mangalore",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://manipal.edu/kmc-mangalore.html",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://manipal.edu/kmc-mangalore.html/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-3",
    "name": "Hamdard Institute of Medical Sciences & Research (HIMSR), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Delhi",
    "district": "South East Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "Jamia Hamdard Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1983,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b914,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.himsr.co.in/",
    "counsellingLink": "https://www.himsr.co.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Hamdard+Institute+of+Medical+Sciences+&+Research+(HIMSR),+New+Delhi",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.himsr.co.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.himsr.co.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-4",
    "name": "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "Sri Ramachandra Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1984,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b925,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.sriramachandra.edu.in/",
    "counsellingLink": "https://www.sriramachandra.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Sri+Ramachandra+Institute+of+Higher+Education+and+Research,+Chennai",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.sriramachandra.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.sriramachandra.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-5",
    "name": "JSS Medical College, Mysuru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Mysuru",
    "city": "Mysuru",
    "address": "Mysuru, Karnataka",
    "affiliatedUniversity": "JSS Academy of Higher Education & Research",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1985,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b919,80,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://jssuni.edu.in/",
    "counsellingLink": "https://jssuni.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=JSS+Medical+College,+Mysuru",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://jssuni.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://jssuni.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-6",
    "name": "Dr. D.Y. Patil Medical College, Hospital & Research Centre, Pune",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Pune, Maharashtra",
    "affiliatedUniversity": "Dr. D.Y. Patil Vidyapeeth Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1986,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b925,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://medical.dpu.edu.in/",
    "counsellingLink": "https://medical.dpu.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Dr.+D.Y.+Patil+Medical+College,+Hospital+&+Research+Centre,+Pune",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://medical.dpu.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://medical.dpu.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-7",
    "name": "MGM Medical College, Navi Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Thane",
    "city": "Navi Mumbai",
    "address": "Navi Mumbai, Maharashtra",
    "affiliatedUniversity": "MGM Institute of Health Sciences",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1987,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b920,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.mgmmcnm.edu.in/",
    "counsellingLink": "https://www.mgmmcnm.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=MGM+Medical+College,+Navi+Mumbai",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.mgmmcnm.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.mgmmcnm.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-8",
    "name": "KS Hegde Medical Academy (KSHEMA), Mangaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangaluru",
    "address": "Mangaluru, Karnataka",
    "affiliatedUniversity": "Nitte Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1988,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b916,80,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://kshema.nitte.edu.in/",
    "counsellingLink": "https://kshema.nitte.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=KS+Hegde+Medical+Academy+(KSHEMA),+Mangaluru",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://kshema.nitte.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://kshema.nitte.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-9",
    "name": "Bharati Vidyapeeth Deemed University Medical College, Pune",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Pune, Maharashtra",
    "affiliatedUniversity": "Bharati Vidyapeeth Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1989,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b921,15,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "http://mcpune.bharatividyapeeth.edu/",
    "counsellingLink": "http://mcpune.bharatividyapeeth.edu/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Bharati+Vidyapeeth+Deemed+University+Medical+College,+Pune",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "http://mcpune.bharatividyapeeth.edu/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://mcpune.bharatividyapeeth.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-10",
    "name": "Amrita School of Medicine, Kochi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Kochi",
    "address": "Kochi, Kerala",
    "affiliatedUniversity": "Amrita Vishwa Vidyapeetham",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1990,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b918,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.amrita.edu/school/medicine/kochi/",
    "counsellingLink": "https://www.amrita.edu/school/medicine/kochi/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Amrita+School+of+Medicine,+Kochi",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.amrita.edu/school/medicine/kochi/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.amrita.edu/school/medicine/kochi/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-11",
    "name": "SRM Medical College Hospital and Research Centre, Kanchipuram",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "city": "Kanchipuram",
    "address": "Kanchipuram, Tamil Nadu",
    "affiliatedUniversity": "SRM Institute of Science and Technology",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1991,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b922,50,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.srmist.edu.in/",
    "counsellingLink": "https://www.srmist.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=SRM+Medical+College+Hospital+and+Research+Centre,+Kanchipuram",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.srmist.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.srmist.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-12",
    "name": "Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Odisha",
    "district": "Khurda",
    "city": "Bhubaneswar",
    "address": "Bhubaneswar, Odisha",
    "affiliatedUniversity": "KIIT Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1992,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b918,50,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://kims.kiit.ac.in/",
    "counsellingLink": "https://kims.kiit.ac.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Kalinga+Institute+of+Medical+Sciences+(KIMS),+Bhubaneswar",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://kims.kiit.ac.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://kims.kiit.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-13",
    "name": "Institute of Medical Sciences and SUM Hospital, Bhubaneswar",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Odisha",
    "district": "Khurda",
    "city": "Bhubaneswar",
    "address": "Bhubaneswar, Odisha",
    "affiliatedUniversity": "Siksha 'O' Anusandhan Deemed University",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1993,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b917,90,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.soa.ac.in/ims-sum-hospital",
    "counsellingLink": "https://www.soa.ac.in/ims-sum-hospital",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Medical+Sciences+and+SUM+Hospital,+Bhubaneswar",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.soa.ac.in/ims-sum-hospital",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.soa.ac.in/ims-sum-hospital/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-14",
    "name": "Saveetha Medical College and Hospital, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Tiruvallur",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "Saveetha Institute of Medical Sciences",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1994,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b924,75,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.saveethamedicalcollege.com/",
    "counsellingLink": "https://www.saveethamedicalcollege.com/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Saveetha+Medical+College+and+Hospital,+Chennai",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.saveethamedicalcollege.com/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.saveethamedicalcollege.com/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-deemed-15",
    "name": "Chettinad Hospital and Research Institute, Kanchipuram",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Deemed University",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "city": "Kanchipuram",
    "address": "Kanchipuram, Tamil Nadu",
    "affiliatedUniversity": "Chettinad Academy of Research and Education",
    "regulatoryApproval": "NMC Recognized Deemed University",
    "regulatoryAuthority": "NMC",
    "accreditation": "NAAC A++ Grade",
    "nirfRanking": "NIRF Top Ranked Deemed Uni",
    "yearEstablished": 1995,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Deemed Management Quota",
      "annualFeeRange": "\u20b922,00,000 / Year",
      "notes": "Annual tuition fee via MCC Deemed Quota."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Air-conditioned multi-bed hostels with mess."
    },
    "scholarshipInfo": "University Merit Scholarships for Top NEET Scores.",
    "placementInformation": "100% internship placement in super-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC Deemed University All India Counselling.",
    "admissionPortalUrl": "https://www.chettinaddental.edu.in/",
    "counsellingLink": "https://www.chettinaddental.edu.in/",
    "counsellingAuthority": "MCC DGHS New Delhi",
    "googleMapsUrl": "https://maps.google.com/?q=Chettinad+Hospital+and+Research+Institute,+Kanchipuram",
    "contactNumber": "+91-80-22221111",
    "email": "admissions@deemedmed.edu.in",
    "website": "https://www.chettinaddental.edu.in/",
    "officialRegistrySearchUrl": "https://mcc.nic.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.chettinaddental.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-1",
    "name": "Christian Medical College (CMC), Vellore",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Christian Minority",
    "state": "Tamil Nadu",
    "district": "Vellore",
    "city": "Vellore",
    "address": "Vellore, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Med Univ",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1905,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b952,830 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.cmch-vellore.edu/",
    "counsellingLink": "https://www.cmch-vellore.edu/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Christian+Medical+College+(CMC),+Vellore",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.cmch-vellore.edu/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.cmch-vellore.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-2",
    "name": "St. John's Medical College, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Christian Minority",
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Bengaluru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1910,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b97,20,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.stjohns.in/",
    "counsellingLink": "https://www.stjohns.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=St.+John's+Medical+College,+Bengaluru",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.stjohns.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.stjohns.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-3",
    "name": "Jamia Hamdard HIMSR, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Delhi",
    "district": "South East Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "Jamia Hamdard Deemed Uni",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1915,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b914,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.himsr.co.in/",
    "counsellingLink": "https://www.himsr.co.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Jamia+Hamdard+HIMSR,+New+Delhi",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.himsr.co.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.himsr.co.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-4",
    "name": "Era's Lucknow Medical College and Hospital, Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Lucknow, Uttar Pradesh",
    "affiliatedUniversity": "Era University Lucknow",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1920,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b916,60,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.elmc.ac.in/",
    "counsellingLink": "https://www.elmc.ac.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Era's+Lucknow+Medical+College+and+Hospital,+Lucknow",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.elmc.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.elmc.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-5",
    "name": "Integral Institute of Medical Sciences & Research, Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Lucknow, Uttar Pradesh",
    "affiliatedUniversity": "Integral University Lucknow",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1925,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b917,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.iul.ac.in/",
    "counsellingLink": "https://www.iul.ac.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Integral+Institute+of+Medical+Sciences+&+Research,+Lucknow",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.iul.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.iul.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-6",
    "name": "Christian Medical College (CMC), Ludhiana",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Christian Minority",
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "Ludhiana, Punjab",
    "affiliatedUniversity": "BFUHS Faridkot",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1930,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b96,60,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://cmcludhiana.in/",
    "counsellingLink": "https://cmcludhiana.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Christian+Medical+College+(CMC),+Ludhiana",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://cmcludhiana.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://cmcludhiana.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-7",
    "name": "Father Muller Medical College, Mangaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Christian Minority",
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangaluru",
    "address": "Mangaluru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1935,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b910,50,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://www.fathermuller.edu.in/",
    "counsellingLink": "https://www.fathermuller.edu.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Father+Muller+Medical+College,+Mangaluru",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://www.fathermuller.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.fathermuller.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-8",
    "name": "SBMN Medical College & Hospital, Rohtak",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Jain Minority",
    "state": "Haryana",
    "district": "Rohtak",
    "city": "Rohtak",
    "address": "Rohtak, Haryana",
    "affiliatedUniversity": "Pt BD Sharma UHS Rohtak",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1940,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b912,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "http://sbmn.ac.in/",
    "counsellingLink": "http://sbmn.ac.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=SBMN+Medical+College+&+Hospital,+Rohtak",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "http://sbmn.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://sbmn.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-9",
    "name": "Mahavir Institute of Medical Sciences, Vikarabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Jain Minority",
    "state": "Telangana",
    "district": "Vikarabad",
    "city": "Hyderabad",
    "address": "Hyderabad, Telangana",
    "affiliatedUniversity": "KNRUHS Warangal",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1945,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b913,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "http://www.mahavirmedical.ac.in/",
    "counsellingLink": "http://www.mahavirmedical.ac.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Mahavir+Institute+of+Medical+Sciences,+Vikarabad",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "http://www.mahavirmedical.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.mahavirmedical.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-10",
    "name": "SGT University Faculty of Medicine, Gurugram",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Linguistic Minority",
    "state": "Haryana",
    "district": "Gurugram",
    "city": "Gurugram",
    "address": "Gurugram, Haryana",
    "affiliatedUniversity": "SGT University",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1950,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b918,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://sgtuniversity.ac.in/",
    "counsellingLink": "https://sgtuniversity.ac.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=SGT+University+Faculty+of+Medicine,+Gurugram",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://sgtuniversity.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://sgtuniversity.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-11",
    "name": "Al-Ameen Medical College, Vijayapura",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Karnataka",
    "district": "Vijayapura",
    "city": "Vijayapura",
    "address": "Vijayapura, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1955,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b910,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "http://alameenmedical.org/",
    "counsellingLink": "http://alameenmedical.org/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Medical+College,+Vijayapura",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "http://alameenmedical.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://alameenmedical.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-12",
    "name": "Khaja Banda Nawaz Institute of Medical Sciences, Kalaburagi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Karnataka",
    "district": "Kalaburagi",
    "city": "Kalaburagi",
    "address": "Kalaburagi, Karnataka",
    "affiliatedUniversity": "KBN University",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1960,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b916,30,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "http://www.kbn.university/",
    "counsellingLink": "http://www.kbn.university/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Khaja+Banda+Nawaz+Institute+of+Medical+Sciences,+Kalaburagi",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "http://www.kbn.university/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.kbn.university/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-13",
    "name": "KMC Manipal Lingual Pool, Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Linguistic Minority",
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Manipal, Karnataka",
    "affiliatedUniversity": "MAHE Deemed Uni",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1965,
    "annualIntake": 250,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b917,80,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://manipal.edu/",
    "counsellingLink": "https://manipal.edu/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=KMC+Manipal+Lingual+Pool,+Manipal",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://manipal.edu/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://manipal.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-14",
    "name": "Terna Medical College, Navi Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Linguistic Minority",
    "state": "Maharashtra",
    "district": "Thane",
    "city": "Navi Mumbai",
    "address": "Navi Mumbai, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1970,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b98,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "https://ternamedical.org/",
    "counsellingLink": "https://ternamedical.org/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Terna+Medical+College,+Navi+Mumbai",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "https://ternamedical.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://ternamedical.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-minority-15",
    "name": "Shadan Institute of Medical Sciences, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "MD/MS"
    ],
    "type": "Minority",
    "minorityType": "Muslim Minority",
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hyderabad, Telangana",
    "affiliatedUniversity": "KNRUHS Warangal",
    "regulatoryApproval": "NMC Approved Minority Medical Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "NABH Accredited & Minority Recognized",
    "nirfRanking": "NIRF Top Minority College",
    "yearEstablished": 1975,
    "annualIntake": 150,
    "feeStructure": {
      "category": "Minority Quota & Open Merit",
      "annualFeeRange": "\u20b914,00,000 / Year",
      "notes": "Subsidized minority seats & management seats."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Dedicated campus hostels with modern cafeteria."
    },
    "scholarshipInfo": "Minority Affairs Scholarships & NSP Grants.",
    "placementInformation": "100% internship in attached multi-specialty hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State Minority & MCC Online Counselling.",
    "admissionPortalUrl": "http://www.shadan.in/",
    "counsellingLink": "http://www.shadan.in/",
    "counsellingAuthority": "State Medical Counselling Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Shadan+Institute+of+Medical+Sciences,+Hyderabad",
    "contactNumber": "+91-44-22110000",
    "email": "info@minoritymed.edu.in",
    "website": "http://www.shadan.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.shadan.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-1",
    "name": "National Institute of Ayurveda (NIA), Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BAMS",
    "offeredCourses": [
      "BAMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Jaipur, Rajasthan",
    "affiliatedUniversity": "Deemed University under Ministry of AYUSH",
    "regulatoryApproval": "NCISM Approved Apex National Institute",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1976,
    "annualIntake": 125,
    "feeStructure": {
      "category": "Central AYUSH Subsidized",
      "annualFeeRange": "\u20b942,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Ayurveda+(NIA),+Jaipur",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "https://nia.nic.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://nia.nic.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-2",
    "name": "All India Institute of Ayurveda (AIIA), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BAMS",
    "offeredCourses": [
      "BAMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Delhi",
    "district": "South East Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "Apex Autonomous Institute under Ministry of AYUSH",
    "regulatoryApproval": "NCISM Approved Apex Center",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 2015,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Central Subsidized",
      "annualFeeRange": "\u20b935,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=All+India+Institute+of+Ayurveda+(AIIA),+New+Delhi",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "https://aiia.gov.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://aiia.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-3",
    "name": "State Ayurvedic College & Hospital, Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BAMS",
    "offeredCourses": [
      "BAMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Lucknow, Uttar Pradesh",
    "affiliatedUniversity": "Mahayogi Guru Gorakhnath AYUSH University",
    "regulatoryApproval": "NCISM Approved Government College",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1954,
    "annualIntake": 75,
    "feeStructure": {
      "category": "State Govt Subsidized",
      "annualFeeRange": "\u20b915,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=State+Ayurvedic+College+&+Hospital,+Lucknow",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://ayush.up.gov.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://ayush.up.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-4",
    "name": "Government Ayurvedic College, Guwahati",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BAMS",
    "offeredCourses": [
      "BAMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Assam",
    "district": "Kamrup Metropolitan",
    "city": "Guwahati",
    "address": "Guwahati, Assam",
    "affiliatedUniversity": "Srimanta Sankaradeva University of Health Sciences",
    "regulatoryApproval": "NCISM Recognized Govt College",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1948,
    "annualIntake": 63,
    "feeStructure": {
      "category": "State Govt Subsidized",
      "annualFeeRange": "\u20b912,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Ayurvedic+College,+Guwahati",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://gacassam.org/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gacassam.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-5",
    "name": "National Institute of Homoeopathy (NIH), Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BHMS",
    "offeredCourses": [
      "BHMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "city": "Kolkata",
    "address": "Kolkata, West Bengal",
    "affiliatedUniversity": "WBUHS Kolkata (Apex NIH under Ministry of AYUSH)",
    "regulatoryApproval": "NCH Approved National Apex Institute",
    "regulatoryAuthority": "NCH",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1975,
    "annualIntake": 126,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b935,500 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Homoeopathy+(NIH),+Kolkata",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://www.nih.nic.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.nih.nic.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-6",
    "name": "Nehru Homoeopathic Medical College & Hospital, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BHMS",
    "offeredCourses": [
      "BHMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Delhi",
    "district": "South Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "University of Delhi",
    "regulatoryApproval": "NCH Recognized Premier Govt College",
    "regulatoryAuthority": "NCH",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1967,
    "annualIntake": 100,
    "feeStructure": {
      "category": "Govt Subsidized",
      "annualFeeRange": "\u20b93,200 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Nehru+Homoeopathic+Medical+College+&+Hospital,+New+Delhi",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://nhmc.delhi.gov.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://nhmc.delhi.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-7",
    "name": "Government Homoeopathic Medical College, Kozhikode",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BHMS",
    "offeredCourses": [
      "BHMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Kozhikode",
    "address": "Kozhikode, Kerala",
    "affiliatedUniversity": "Kerala University of Health Sciences",
    "regulatoryApproval": "NCH Recognized Govt College",
    "regulatoryAuthority": "NCH",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1975,
    "annualIntake": 63,
    "feeStructure": {
      "category": "State Govt Subsidized",
      "annualFeeRange": "\u20b910,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Homoeopathic+Medical+College,+Kozhikode",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://ghmckozhikode.org/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://ghmckozhikode.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-8",
    "name": "National Research Institute of Unani Medicine for Skin Disorders, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BUMS",
    "offeredCourses": [
      "BUMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hyderabad, Telangana",
    "affiliatedUniversity": "KNRUHS & Central Council for Research in Unani Medicine",
    "regulatoryApproval": "NCISM Recognized Apex Unani Center",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1971,
    "annualIntake": 60,
    "feeStructure": {
      "category": "Central Govt Subsidized",
      "annualFeeRange": "\u20b918,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=National+Research+Institute+of+Unani+Medicine+for+Skin+Disorders,+Hyderabad",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://nriumsd.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://nriumsd.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-9",
    "name": "Ayurvedic & Unani Tibbia College, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BUMS",
    "offeredCourses": [
      "BUMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "University of Delhi",
    "regulatoryApproval": "NCISM Recognized Historic College (1916)",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1916,
    "annualIntake": 75,
    "feeStructure": {
      "category": "Govt Subsidized",
      "annualFeeRange": "\u20b92,800 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Ayurvedic+&+Unani+Tibbia+College,+New+Delhi",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://autc.delhigovt.nic.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://autc.delhigovt.nic.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-10",
    "name": "Government Unani Medical College, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BUMS",
    "offeredCourses": [
      "BUMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Medical University",
    "regulatoryApproval": "NCISM Recognized State Govt College",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1979,
    "annualIntake": 60,
    "feeStructure": {
      "category": "State Govt Subsidized",
      "annualFeeRange": "\u20b98,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Unani+Medical+College,+Chennai",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://www.gumc.edu.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://www.gumc.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-11",
    "name": "Government Siddha Medical College, Palayamkottai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BSMS",
    "offeredCourses": [
      "BSMS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "city": "Palayamkottai",
    "address": "Palayamkottai, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Medical University",
    "regulatoryApproval": "NCISM Recognized Apex Siddha College",
    "regulatoryAuthority": "NCISM",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 1964,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt Subsidized",
      "annualFeeRange": "\u20b97,500 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Siddha+Medical+College,+Palayamkottai",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://gsmcpalayamkottai.edu.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gsmcpalayamkottai.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-ayush-12",
    "name": "Government Nature Cure and Yoga Medical College, Mysuru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BNYS",
    "offeredCourses": [
      "BNYS"
    ],
    "type": "AYUSH",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Mysuru",
    "city": "Mysuru",
    "address": "Mysuru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "State AYUSH Board Approved",
    "regulatoryAuthority": "State Board",
    "accreditation": "Ministry of AYUSH Apex College",
    "nirfRanking": "Premier AYUSH Institute",
    "yearEstablished": 2006,
    "annualIntake": 60,
    "feeStructure": {
      "category": "Govt Subsidized",
      "annualFeeRange": "\u20b918,000 / Year",
      "notes": "Central / State AYUSH AACCC counselling fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels for BAMS/BHMS/BUMS scholars."
    },
    "scholarshipInfo": "Central AYUSH Stipends & State Grants.",
    "placementInformation": "100% internship in 300-bed attached AYUSH hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> AACCC AYUSH Online Counselling.",
    "admissionPortalUrl": "https://aaccc.gov.in/",
    "counsellingLink": "https://aaccc.gov.in/",
    "counsellingAuthority": "AYUSH Admissions Central Counseling Committee (AACCC)",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Nature+Cure+and+Yoga+Medical+College,+Mysuru",
    "contactNumber": "+91-11-29990000",
    "email": "info@ayushmed.gov.in",
    "website": "http://gncymc.karnataka.gov.in/",
    "officialRegistrySearchUrl": "https://aaccc.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gncymc.karnataka.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-1",
    "name": "Maulana Azad Institute of Dental Sciences (MAIDS), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "New Delhi",
    "address": "New Delhi, Delhi",
    "affiliatedUniversity": "University of Delhi",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1983,
    "annualIntake": 50,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b93,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Maulana+Azad+Institute+of+Dental+Sciences+(MAIDS),+New+Delhi",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "https://maids.ac.in/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://maids.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-2",
    "name": "King George's Medical University Faculty of Dental Sciences, Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Lucknow, Uttar Pradesh",
    "affiliatedUniversity": "KGMU Lucknow",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1949,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b948,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=King+George's+Medical+University+Faculty+of+Dental+Sciences,+Lucknow",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "https://www.kgmu.org/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.kgmu.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-3",
    "name": "Government Dental College and Hospital, Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "Mumbai, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1938,
    "annualIntake": 125,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b980,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Dental+College+and+Hospital,+Mumbai",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "http://gdchmumbai.edu.in/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gdchmumbai.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-4",
    "name": "Government Dental College and Research Institute, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Bengaluru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1958,
    "annualIntake": 60,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b950,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Dental+College+and+Research+Institute,+Bengaluru",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "http://gdcribangalore.org/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gdcribangalore.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-5",
    "name": "Tamil Nadu Government Dental College and Hospital, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Medical University",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1953,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b912,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Tamil+Nadu+Government+Dental+College+and+Hospital,+Chennai",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "http://tngdc.edu.in/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://tngdc.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-6",
    "name": "Dr. R. Ahmed Dental College and Hospital, Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Kolkata, West Bengal",
    "affiliatedUniversity": "WBUHS Kolkata",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1920,
    "annualIntake": 125,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b96,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Dr.+R.+Ahmed+Dental+College+and+Hospital,+Kolkata",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "http://radch.ac.in/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://radch.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-7",
    "name": "Government Dental College and Hospital, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Ahmedabad, Gujarat",
    "affiliatedUniversity": "Gujarat University",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1963,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b920,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Dental+College+and+Hospital,+Ahmedabad",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "http://gdchahmedabad.org/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://gdchahmedabad.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-8",
    "name": "Manipal College of Dental Sciences (MCODS), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Manipal, Karnataka",
    "affiliatedUniversity": "MAHE Deemed University",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1965,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b98,50,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=Manipal+College+of+Dental+Sciences+(MCODS),+Manipal",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "https://manipal.edu/mcods-manipal.html",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://manipal.edu/mcods-manipal.html/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-9",
    "name": "SDM College of Dental Sciences and Hospital, Dharwad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Dharwad",
    "city": "Dharwad",
    "address": "Dharwad, Karnataka",
    "affiliatedUniversity": "Shri Dharmasthala Manjunatheshwara University",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1986,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b96,00,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=SDM+College+of+Dental+Sciences+and+Hospital,+Dharwad",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "https://sdmcds.edu/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://sdmcds.edu/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-dental-10",
    "name": "AB Shetty Memorial Institute of Dental Sciences, Mangaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "BDS",
    "offeredCourses": [
      "BDS",
      "MDS"
    ],
    "type": "Dental",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangaluru",
    "address": "Mangaluru, Karnataka",
    "affiliatedUniversity": "Nitte Deemed University",
    "regulatoryApproval": "Dental Council of India (DCI) Approved",
    "regulatoryAuthority": "DCI",
    "accreditation": "NIRF Top Ranked Dental College",
    "nirfRanking": "NIRF Rank Dental Category",
    "yearEstablished": 1985,
    "annualIntake": 100,
    "feeStructure": {
      "category": "State Govt / Deemed Quota",
      "annualFeeRange": "\u20b97,50,000 / Year",
      "notes": "Subsidized government & deemed dental fees."
    },
    "hostelAvailability": {
      "available": true,
      "details": "In-campus hostels with dental labs."
    },
    "scholarshipInfo": "State & National Dental Scholarships.",
    "placementInformation": "100% paid dental internship in super-specialty dental hospital.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> MCC All India & State Dental Counselling.",
    "admissionPortalUrl": "https://dciindia.gov.in/",
    "counsellingLink": "https://mcc.nic.in/",
    "counsellingAuthority": "Dental Council of India / MCC",
    "googleMapsUrl": "https://maps.google.com/?q=AB+Shetty+Memorial+Institute+of+Dental+Sciences,+Mangaluru",
    "contactNumber": "+91-11-23230000",
    "email": "info@dentalcollege.edu.in",
    "website": "https://absmids.nitte.edu.in/",
    "officialRegistrySearchUrl": "https://dciindia.gov.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://absmids.nitte.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-1",
    "name": "Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "State Medical University Authority",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1987,
    "annualIntake": 500,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b920,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.tnmgrmu.ac.in/",
    "counsellingLink": "https://www.tnmgrmu.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Tamil+Nadu+Dr.+M.G.R.+Medical+University,+Chennai",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.tnmgrmu.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.tnmgrmu.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-2",
    "name": "Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Bengaluru, Karnataka",
    "affiliatedUniversity": "State Health Sciences University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1996,
    "annualIntake": 600,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b920,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.rguhs.ac.in/",
    "counsellingLink": "https://www.rguhs.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+University+of+Health+Sciences+(RGUHS),+Bengaluru",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.rguhs.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.rguhs.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-3",
    "name": "Kerala University of Health Sciences (KUHS), Thrissur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Kerala",
    "district": "Thrissur",
    "city": "Thrissur",
    "address": "Thrissur, Kerala",
    "affiliatedUniversity": "State Health Sciences University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 2010,
    "annualIntake": 450,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b918,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "http://kuhs.ac.in/",
    "counsellingLink": "http://kuhs.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Kerala+University+of+Health+Sciences+(KUHS),+Thrissur",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "http://kuhs.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://kuhs.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-4",
    "name": "Maharashtra University of Health Sciences (MUHS), Nashik",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Nashik",
    "city": "Nashik",
    "address": "Nashik, Maharashtra",
    "affiliatedUniversity": "State Health Sciences University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1998,
    "annualIntake": 550,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b922,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.muhs.ac.in/",
    "counsellingLink": "https://www.muhs.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Maharashtra+University+of+Health+Sciences+(MUHS),+Nashik",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.muhs.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.muhs.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-5",
    "name": "Kaloji Narayana Rao University of Health Sciences (KNRUHS), Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Warangal, Telangana",
    "affiliatedUniversity": "State Health Sciences University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 2014,
    "annualIntake": 400,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b915,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://knruhs.telangana.gov.in/",
    "counsellingLink": "https://knruhs.telangana.gov.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Kaloji+Narayana+Rao+University+of+Health+Sciences+(KNRUHS),+Warangal",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://knruhs.telangana.gov.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://knruhs.telangana.gov.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-6",
    "name": "Dr. YSR University of Health Sciences, Vijayawada",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Medical University",
    "minorityType": "None",
    "state": "Andhra Pradesh",
    "district": "NTR District",
    "city": "Vijayawada",
    "address": "Vijayawada, Andhra Pradesh",
    "affiliatedUniversity": "State Health Sciences University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1986,
    "annualIntake": 500,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b915,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://drysruhs.edu.in/",
    "counsellingLink": "https://drysruhs.edu.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Dr.+YSR+University+of+Health+Sciences,+Vijayawada",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://drysruhs.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://drysruhs.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-7",
    "name": "MS Ramaiah Medical College, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Bengaluru, Karnataka",
    "affiliatedUniversity": "RGUHS Bengaluru",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1979,
    "annualIntake": 150,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b910,92,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://msrmc.ac.in/",
    "counsellingLink": "https://msrmc.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=MS+Ramaiah+Medical+College,+Bengaluru",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://msrmc.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://msrmc.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-8",
    "name": "KIMS Karad - Krishna Institute of Medical Sciences, Karad",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Satara",
    "city": "Karad",
    "address": "Karad, Maharashtra",
    "affiliatedUniversity": "Deemed University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1984,
    "annualIntake": 200,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b915,00,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.kimskarad.in/",
    "counsellingLink": "https://www.kimskarad.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=KIMS+Karad+-+Krishna+Institute+of+Medical+Sciences,+Karad",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.kimskarad.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.kimskarad.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-9",
    "name": "SRM Medical College, Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "city": "Chennai",
    "address": "Chennai, Tamil Nadu",
    "affiliatedUniversity": "SRM Institute",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 2005,
    "annualIntake": 250,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b922,50,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.srmist.edu.in/",
    "counsellingLink": "https://www.srmist.edu.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=SRM+Medical+College,+Chennai",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.srmist.edu.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.srmist.edu.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-10",
    "name": "PSG Institute of Medical Sciences and Research, Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Coimbatore, Tamil Nadu",
    "affiliatedUniversity": "TN Dr MGR Medical Univ",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1985,
    "annualIntake": 150,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b94,50,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://psgimsr.ac.in/",
    "counsellingLink": "https://psgimsr.ac.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=PSG+Institute+of+Medical+Sciences+and+Research,+Coimbatore",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://psgimsr.ac.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://psgimsr.ac.in/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-11",
    "name": "KPC Medical College and Hospital, Jadavpur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Kolkata, West Bengal",
    "affiliatedUniversity": "WBUHS Kolkata",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 2006,
    "annualIntake": 150,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b98,00,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://kpcmedicalcollege.org/",
    "counsellingLink": "https://kpcmedicalcollege.org/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=KPC+Medical+College+and+Hospital,+Jadavpur",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://kpcmedicalcollege.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://kpcmedicalcollege.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-12",
    "name": "MIMER Medical College, Talegaon Pune",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Pune, Maharashtra",
    "affiliatedUniversity": "MUHS Nashik",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1995,
    "annualIntake": 150,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b99,50,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://mitmimer.com/",
    "counsellingLink": "https://mitmimer.com/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=MIMER+Medical+College,+Talegaon+Pune",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://mitmimer.com/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://mitmimer.com/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-13",
    "name": "Dr. DY Patil Medical College, Kolhapur",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Kolhapur",
    "city": "Kolhapur",
    "address": "Kolhapur, Maharashtra",
    "affiliatedUniversity": "Deemed University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1989,
    "annualIntake": 150,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b914,00,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "http://dypatilmedicalkop.org/",
    "counsellingLink": "http://dypatilmedicalkop.org/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=Dr.+DY+Patil+Medical+College,+Kolhapur",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "http://dypatilmedicalkop.org/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "http://dypatilmedicalkop.org/prospectus",
    "lastVerifiedDate": "June 2026"
  },
  {
    "id": "col-univ-14",
    "name": "KIMSDU Karad Faculty of Medicine",
    "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
    "course": "MBBS",
    "offeredCourses": [
      "MBBS",
      "BDS",
      "BAMS",
      "MD/MS"
    ],
    "type": "Private",
    "minorityType": "None",
    "state": "Maharashtra",
    "district": "Satara",
    "city": "Karad",
    "address": "Karad, Maharashtra",
    "affiliatedUniversity": "KIMSDU Deemed University",
    "regulatoryApproval": "NMC Recognized Institution",
    "regulatoryAuthority": "NMC",
    "accreditation": "Apex Medical University / Private College",
    "nirfRanking": "NIRF Ranked",
    "yearEstablished": 1984,
    "annualIntake": 200,
    "feeStructure": {
      "category": "State & Management Quota",
      "annualFeeRange": "\u20b915,50,000 / Year",
      "notes": "Regulated tuition fee structure."
    },
    "hostelAvailability": {
      "available": true,
      "details": "Comprehensive residential hostel facilities."
    },
    "scholarshipInfo": "State & Institutional Merit Scholarships.",
    "placementInformation": "100% compulsory paid rotating internship.",
    "entranceExam": "NEET-UG",
    "neetRequired": true,
    "admissionProcess": "NEET-UG -> State & Central Medical Counselling.",
    "admissionPortalUrl": "https://www.kimskarad.in/",
    "counsellingLink": "https://www.kimskarad.in/",
    "counsellingAuthority": "State Medical Authority",
    "googleMapsUrl": "https://maps.google.com/?q=KIMSDU+Karad+Faculty+of+Medicine",
    "contactNumber": "+91-44-24000000",
    "email": "info@meduniv.edu.in",
    "website": "https://www.kimskarad.in/",
    "officialRegistrySearchUrl": "https://www.nmc.org.in/",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
    ],
    "prospectusUrl": "https://www.kimskarad.in/prospectus",
    "lastVerifiedDate": "June 2026"
  }
];
