import json
import os

print("Building complete verified Indian Medical Colleges dataset (110+ colleges)...")

header = """export type MedicalCourse = 
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
  city: string;
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
  }
];
"""

# Let's create python data builder
import build_data_helpers
