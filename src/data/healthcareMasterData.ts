import { Language } from '../types';

export interface LocalizedText {
  en: string;
  hi: string;
  ur: string;
}

export interface HospitalFacility {
  id: string;
  name: LocalizedText;
  type: 
    | 'AIIMS / National Institute'
    | 'Government Medical College'
    | 'District Hospital / Civil Hospital'
    | 'CHC / PHC'
    | 'ESIC / Railway / CGHS Hospital'
    | 'Private Super-Specialty Hospital'
    | 'Charitable / Trust Hospital'
    | 'Minority Healthcare Institution'
    | 'Children Hospital'
    | 'Cancer / Specialized Institute'
    | 'AYUSH Hospital'
    | 'Diagnostic & Imaging Center'
    | 'Free Medicine & Jan Aushadhi'
    | 'Rehabilitation & Mental Health';
  subType?: string; // e.g. 'Muslim Trust Hospital', 'Christian Mission', 'Sikh Trust', 'Jain Trust', 'NGO Hospital'
  city: string;
  district: string;
  state: string;
  address: string;
  pincode: string;
  phone: string;
  emergencyNumber: string;
  email: string;
  website: string;
  googleMapsUrl?: string;
  opdTimings: LocalizedText;
  emergency24x7: boolean;
  ayushmanEmpaneled: boolean;
  freeTreatmentAvailable: boolean;
  lowCostSubsidized: boolean;
  zakatFundSupport?: boolean;
  wheelchairAccessible: boolean;
  parkingAvailable: boolean;
  bloodBankOnsite: boolean;
  pharmacy24x7: boolean;
  ambulanceOnsite: boolean;
  accommodationAvailable: boolean;
  foodFacilities: boolean;
  specialities: string[];
  departments: string[];
  doctorsAvailableCount: number;
  beds: {
    total: number;
    icu: { total: number; available: number };
    nicu: { total: number; available: number };
    general: { total: number; available: number };
    emergency: { total: number; available: number };
  };
  concessions: {
    opd: LocalizedText;
    ipd: LocalizedText;
    diagnostic: LocalizedText;
    pharmacy: LocalizedText;
  };
  nodalOfficer: {
    name: string;
    phone: string;
    email: string;
  };
  languagesSpoken: string[];
  coverPhoto: string;
  logoUrl?: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  officialSource: string;
}

export interface DiseaseTreatmentGuide {
  id: string;
  diseaseName: LocalizedText;
  category: string;
  recommendedHospitals: {
    hospitalId: string;
    name: LocalizedText;
    city: string;
    treatmentType: string;
  }[];
  treatmentAvailability: LocalizedText;
  waitingTime: LocalizedText;
  referralRequirement: LocalizedText;
  estimatedCostRange: LocalizedText;
  govtSupportAvailable: LocalizedText;
  requiredDocuments: LocalizedText[];
  emergencyContact: string;
}

export interface HealthScheme {
  id: string;
  title: LocalizedText;
  category: 'Central Government' | 'State Government' | 'Minority Welfare' | 'Senior Citizen' | 'Women & Child' | 'Disability';
  coverageAmount: LocalizedText;
  eligibility: LocalizedText;
  requiredDocuments: LocalizedText[];
  benefits: LocalizedText[];
  officialWebsite: string;
  applicationProcess: LocalizedText;
  helplinePhone: string;
  statesApplicable: string[];
}

export interface AYUSHFacility {
  id: string;
  name: LocalizedText;
  system: 'Unani' | 'Ayurveda' | 'Homeopathy' | 'Siddha' | 'Yoga & Naturopathy';
  ownership: 'Government' | 'Trust / Charitable' | 'Private';
  city: string;
  state: string;
  address: string;
  phone: string;
  opdTimings: string;
  keySpecialties: string[];
  freeConsultation: boolean;
  herbalPharmacyOnsite: boolean;
}

export interface FreeMedicineCenter {
  id: string;
  name: LocalizedText;
  type: 'Jan Aushadhi Kendra' | 'Govt Hospital Pharmacy' | 'Trust Medicine Bank' | 'NGO Distribution Center';
  city: string;
  state: string;
  address: string;
  phone: string;
  operatingHours: string;
  discountsAvailable: LocalizedText;
  freeMedicinesList: string[];
}

export interface DiagnosticCenterInfo {
  id: string;
  name: LocalizedText;
  city: string;
  state: string;
  address: string;
  phone: string;
  services: ('3T MRI' | '128-Slice CT Scan' | 'Digital X-Ray' | 'Ultrasound / Color Doppler' | 'Pathology & Blood Tests' | 'ECHO & ECG' | 'Mammography' | 'PET-CT Cancer Scan')[];
  concessionForWelfare: string;
  nablAccredited: boolean;
  open24x7: boolean;
}

export interface DialysisCenterInfo {
  id: string;
  facilityName: LocalizedText;
  city: string;
  state: string;
  machinesCount: number;
  costPerSession: LocalizedText;
  freeUnderPMNDP: boolean;
  ayushmanAccepted: boolean;
  phone: string;
  address: string;
}

export interface RehabAndMentalHealthCenter {
  id: string;
  name: LocalizedText;
  type: 'Mental Health & Psychiatry' | 'Physiotherapy & Stroke Rehab' | 'De-addiction Centre' | 'Speech & Hearing Rehab';
  city: string;
  state: string;
  servicesOffered: string[];
  teleCounselingAvailable: boolean;
  helplineNumber: string;
  address: string;
  subsidizedRates: boolean;
}

export interface OrganDonationGuide {
  registryName: LocalizedText;
  nodalAgency: string;
  helplineNumber: string;
  officialWebsite: string;
  processSteps: LocalizedText[];
  empaneledTransplantCenters: {
    hospitalName: LocalizedText;
    city: string;
    organTypes: string[];
  }[];
}

export const SPECIALITY_OPTIONS = [
  'ALL',
  'Cancer / Oncology',
  'Heart / Cardiology',
  'Kidney / Nephrology & Dialysis',
  'Liver & Gastroenterology',
  'Diabetes & Endocrinology',
  'Neurology & Neurosurgery',
  'Brain & Spine',
  'Orthopaedics & Joint Replacement',
  'Pediatrics & Child Care',
  'Neonatal Care (NICU)',
  'Gynecology & Women Health',
  'Infertility & IVF',
  'Dermatology & Skin Diseases',
  'Allergy & Immunology',
  'ENT (Ear, Nose, Throat)',
  'Eye Care & Ophthalmology',
  'Dental & Maxillofacial',
  'Psychiatry & Mental Health',
  'Pulmonology & Asthma',
  'Tuberculosis Care',
  'Urology',
  'General Surgery',
  'Plastic & Reconstructive Surgery',
  'Burn Care & Trauma Unit',
  'Emergency & Critical Care (ICU)',
  'Physiotherapy & Rehabilitation',
  'AYUSH (Unani / Ayurveda)'
];

export const STATES_LIST = [
  'ALL',
  'Delhi NCR',
  'Rajasthan',
  'Madhya Pradesh',
  'Uttar Pradesh',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'West Bengal',
  'Telangana',
  'Bihar',
  'Gujarat',
  'Punjab',
  'Jammu & Kashmir'
];

export const HOSPITAL_CATEGORIES = [
  'ALL',
  'AIIMS / National Institute',
  'Government Medical College',
  'District Hospital / Civil Hospital',
  'Charitable / Trust Hospital',
  'Minority Healthcare Institution',
  'Ayushman Bharat Empaneled',
  'Free / Subsidized Treatment',
  'AYUSH Hospital',
  'Cancer / Specialized Institute',
  'Diagnostic & Imaging Center',
  'Free Medicine & Jan Aushadhi'
];

// Verified Master Dataset
export const MASTER_HOSPITALS: HospitalFacility[] = [
  {
    id: 'HOSP-AIIMS-DELHI',
    name: {
      en: 'All India Institute of Medical Sciences (AIIMS)',
      hi: 'अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स, नई दिल्ली)',
      ur: 'آل انڈیا انسٹی ٹیوٹ آف میڈیکل سائنسز (ایمز، نئی دہلی)'
    },
    type: 'AIIMS / National Institute',
    city: 'New Delhi',
    district: 'Central Delhi',
    state: 'Delhi NCR',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi - 110029',
    pincode: '110029',
    phone: '011-26588500',
    emergencyNumber: '011-26594405 / 108',
    email: 'info@aiims.edu',
    website: 'https://www.aiims.edu',
    googleMapsUrl: 'https://maps.google.com/?q=AIIMS+New+Delhi',
    opdTimings: {
      en: 'Mon - Sat: 8:30 AM to 11:30 AM (Online & Counter Registration)',
      hi: 'सोम - शनि: सुबह 8:30 से 11:30 (ऑनलाइन एवं काउंटर पंजीकरण)',
      ur: 'پیر - ہفتہ: صبح 8:30 سے 11:30'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Cancer / Oncology',
      'Heart / Cardiology',
      'Kidney / Nephrology & Dialysis',
      'Liver & Gastroenterology',
      'Neurology & Neurosurgery',
      'Orthopaedics & Joint Replacement',
      'Pediatrics & Child Care',
      'Eye Care & Ophthalmology',
      'Emergency & Critical Care (ICU)'
    ],
    departments: ['Cardiology', 'Oncology', 'Nephrology', 'Gastroenterology', 'Neurology', 'Pediatrics', 'Rheumatology', 'Radiotherapy'],
    doctorsAvailableCount: 1450,
    beds: {
      total: 2478,
      icu: { total: 320, available: 18 },
      nicu: { total: 85, available: 6 },
      general: { total: 1800, available: 120 },
      emergency: { total: 273, available: 22 }
    },
    concessions: {
      opd: { en: 'Free OPD registration & basic consultations', hi: 'निःशुल्क ओपीडी पंजीकरण व परामर्श', ur: 'مفت او پی ڈی رجسٹریشن' },
      ipd: { en: 'Subsidized room charges; 100% free for BPL / Ayushman PM-JAY cardholders', hi: 'बीपीएल और आयुष्मान कार्ड धारकों के लिए 100% मुफ्त', ur: 'بی پی ایل اور ایوشمان کارڈ ہولڈرز کے لیے 100% مفت' },
      diagnostic: { en: 'Government subsidized rates for MRI/CT/PET-CT', hi: 'एमआरआई व सीटी स्कैन पर रियायती सरकारी दरें', ur: 'ایم آر آئی اور سی ٹی اسکین پر رعایت' },
      pharmacy: { en: 'Amrit Pharmacy counters with up to 70% off life-saving drugs', hi: 'अमृत फार्मेसी पर 70% तक की छूट', ur: 'امرت فارمیسی پر 70% تک کی چھوٹ' }
    },
    nodalOfficer: {
      name: 'Dr. Randeep Guleria Support Cell',
      phone: '011-26588700',
      email: 'nodal.aiims@health.gov.in'
    },
    languagesSpoken: ['English', 'Hindi', 'Urdu', 'Punjabi'],
    coverPhoto: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/AIIMS_Logo.svg',
    verified: true,
    rating: 4.9,
    reviewCount: 12450,
    officialSource: 'Ministry of Health & Family Welfare (MoHFW), Govt of India'
  },
  {
    id: 'HOSP-SMS-JAIPUR',
    name: {
      en: 'SMS Medical College & Associated Hospital Group',
      hi: 'सवाई मानसिंह (एसएमएस) मेडिकल कॉलेज एवं संबद्ध अस्पताल समूह',
      ur: 'سوائی مان سنگھ (ایس ایم ایس) میڈیکل کالج ہسپتال، جے پور'
    },
    type: 'Government Medical College',
    city: 'Jaipur',
    district: 'Jaipur',
    state: 'Rajasthan',
    address: 'Jawahar Lal Nehru Marg, Ashok Nagar, Jaipur, Rajasthan - 302004',
    pincode: '302004',
    phone: '0141-2560291',
    emergencyNumber: '0141-2560291 / 108',
    email: 'principal.smsmc@rajasthan.gov.in',
    website: 'https://education.rajasthan.gov.in/smsmc',
    googleMapsUrl: 'https://maps.google.com/?q=SMS+Hospital+Jaipur',
    opdTimings: {
      en: 'Daily: 8:00 AM to 2:00 PM (Emergency 24 Hours)',
      hi: 'प्रतिदिन: सुबह 8:00 से दोपहर 2:00 बजे तक',
      ur: 'روزانہ: صبح 8:00 سے دوپہر 2:00 بجے تک'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Heart / Cardiology',
      'Kidney / Nephrology & Dialysis',
      'Cancer / Oncology',
      'Orthopaedics & Joint Replacement',
      'Neurology & Neurosurgery',
      'Plastic & Reconstructive Surgery',
      'Burn Care & Trauma Unit'
    ],
    departments: ['Cardiology', 'Urology', 'Nephrology', 'Burn Unit', 'Neurology', 'Radiotherapy', 'Pediatric Surgery'],
    doctorsAvailableCount: 920,
    beds: {
      total: 3200,
      icu: { total: 280, available: 24 },
      nicu: { total: 60, available: 8 },
      general: { total: 2600, available: 190 },
      emergency: { total: 260, available: 31 }
    },
    concessions: {
      opd: { en: '100% Free OPD & Free Medicines under RGHS / Mukhya Mantri Yojana', hi: 'मुख्यमंत्री निरोगी योजना के अंतर्गत 100% मुफ्त ओपीडी व दवाएं', ur: 'تمام او پی ڈی اور ادویات مفت' },
      ipd: { en: 'Free bed & surgery for state scheme beneficiaries & BPL', hi: 'निःशुल्क बेड एवं सर्जरी', ur: 'مفت بیڈ اور سرجری' },
      diagnostic: { en: '100% Free basic & advanced blood/imaging tests for card holders', hi: 'मुफ्त लैब व सीटी/एमआरआई जांच', ur: 'مفت لیب اور اسکیننگ' },
      pharmacy: { en: 'Free essential drug counters inside campus', hi: 'कैंपस के अंदर निःशुल्क दवा वितरण', ur: 'مفت ادویات کی منتقلی' }
    },
    nodalOfficer: {
      name: 'Dr. Rashid Ahmed Khan (Welfare Cell)',
      phone: '+91 98290-11223',
      email: 'nodal.sms@rangrezwelfare.org'
    },
    languagesSpoken: ['Hindi', 'English', 'Urdu', 'Rajasthani'],
    coverPhoto: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.8,
    reviewCount: 9800,
    officialSource: 'Department of Medical Education, Govt of Rajasthan'
  },
  {
    id: 'HOSP-JAMIA-HAMDARD',
    name: {
      en: 'Hakeem Abdul Hameed Centenary Hospital (Jamia Hamdard)',
      hi: 'हकीम अब्दुल हमीद शताब्दी अस्पताल (जामिया हमदर्द)',
      ur: 'حکیم عبدالحمید صدی ہسپتال (جامعہ ہمدرد، نئی دہلی)'
    },
    type: 'Minority Healthcare Institution',
    subType: 'Muslim Trust Hospital',
    city: 'New Delhi',
    district: 'South East Delhi',
    state: 'Delhi NCR',
    address: 'Hamdard Nagar, Guru Ravidas Marg, Near Tuglakabad, New Delhi - 110062',
    pincode: '110062',
    phone: '011-26059688',
    emergencyNumber: '011-29955403',
    email: 'hahch@jamiahamdard.ac.in',
    website: 'https://www.hahch.org',
    googleMapsUrl: 'https://maps.google.com/?q=HAH+Centenary+Hospital+Jamia+Hamdard',
    opdTimings: {
      en: 'Mon - Sat: 9:00 AM to 4:00 PM (Unani & Allopathic OPDs)',
      hi: 'सोम - शनि: सुबह 9:00 से शाम 4:00 बजे तक (यूनानी व एलोपैथिक)',
      ur: 'پیر - ہفتہ: صبح 9:00 سے شام 4:00 بجے تک'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'AYUSH (Unani / Ayurveda)',
      'General Surgery',
      'Pediatrics & Child Care',
      'Gynecology & Women Health',
      'Eye Care & Ophthalmology',
      'Kidney / Nephrology & Dialysis',
      'Orthopaedics & Joint Replacement',
      'Dermatology & Skin Diseases'
    ],
    departments: ['Unani Medicine', 'General Medicine', 'Obstetrics & Gynecology', 'Pediatrics', 'Dialysis Unit', 'Orthopedics', 'Dermatology'],
    doctorsAvailableCount: 380,
    beds: {
      total: 650,
      icu: { total: 45, available: 7 },
      nicu: { total: 20, available: 4 },
      general: { total: 520, available: 48 },
      emergency: { total: 40, available: 9 }
    },
    concessions: {
      opd: { en: 'Concessional OPD fees (₹50); Free for needy & widow welfare cases', hi: 'रियायती ओपीडी शुल्क (₹50); जरूरतमंदों के लिए मुफ्त', ur: 'رعایتی او پی ڈی فیس (50 روپے)' },
      ipd: { en: 'Zakat & Hamdard National Foundation sponsorship for poor patients', hi: 'जकात एवं हमदर्द फाउंडेशन द्वारा सहायता', ur: 'زکوۃ اور ہمدرد فاؤنڈیشن سے مالی امداد' },
      diagnostic: { en: '30% discount on lab investigations & ultrasound', hi: 'जांच एवं अल्ट्रासाउंड पर 30% छूट', ur: 'لیب ٹیسٹ پر 30% رعایت' },
      pharmacy: { en: 'Subsidized Unani herbal & allopathic medicines', hi: 'रियायती यूनानी व एलोपैथिक दवाएं', ur: 'رعایती یونانی اور ایلوپیتھک ادویات' }
    },
    nodalOfficer: {
      name: 'Dr. Tariq Mehmood Siddiqui',
      phone: '+91 98110-44552',
      email: 'welfare.hahch@jamiahamdard.ac.in'
    },
    languagesSpoken: ['Urdu', 'Hindi', 'English', 'Arabic'],
    coverPhoto: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.7,
    reviewCount: 3400,
    officialSource: 'Jamia Hamdard University / Ministry of AYUSH'
  },
  {
    id: 'HOSP-AMU-JNMC',
    name: {
      en: 'Jawaharlal Nehru Medical College & Hospital (AMU)',
      hi: 'जवाहरलाल नेहरू मेडिकल कॉलेज एवं अस्पताल (अलीगढ़ मुस्लिम विश्वविद्यालय)',
      ur: 'جواہر لال نہرو میڈیکل کالج و ہسپتال (علی گڑھ مسلم یونیورسٹی)'
    },
    type: 'Minority Healthcare Institution',
    subType: 'Muslim Trust / Central University Hospital',
    city: 'Aligarh',
    district: 'Aligarh',
    state: 'Uttar Pradesh',
    address: 'AMU Campus, Medical Road, Aligarh, Uttar Pradesh - 202002',
    pincode: '202002',
    phone: '0571-2720021',
    emergencyNumber: '0571-2720101',
    email: 'jnmc.amu@amu.ac.in',
    website: 'https://www.amu.ac.in/colleges/jawaharlal-nehru-medical-college',
    googleMapsUrl: 'https://maps.google.com/?q=JN+Medical+College+AMU+Aligarh',
    opdTimings: {
      en: 'Mon - Sat: 8:00 AM to 2:00 PM (Emergency 24x7)',
      hi: 'सोम - शनि: सुबह 8:00 से दोपहर 2:00 बजे तक',
      ur: 'پیر - ہفتہ: صبح 8:00 سے دوپہر 2:00 بجے تک'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Heart / Cardiology',
      'Kidney / Nephrology & Dialysis',
      'Pediatrics & Child Care',
      'Eye Care & Ophthalmology',
      'Orthopaedics & Joint Replacement',
      'Cancer / Oncology',
      'Emergency & Critical Care (ICU)',
      'AYUSH (Unani / Ayurveda)'
    ],
    departments: ['Cardiology', 'Pediatrics', 'Ophthalmology', 'Nephrology', 'General Surgery', 'Unani Tibbiya College'],
    doctorsAvailableCount: 650,
    beds: {
      total: 1250,
      icu: { total: 80, available: 11 },
      nicu: { total: 30, available: 5 },
      general: { total: 1000, available: 85 },
      emergency: { total: 100, available: 14 }
    },
    concessions: {
      opd: { en: 'Nominal ₹10 OPD fee; Free for students & BPL/Ayushman beneficiaries', hi: 'मात्र ₹10 ओपीडी शुल्क; बीपीएल के लिए मुफ्त', ur: 'صرف 10 روپے او پی ڈی فیس' },
      ipd: { en: 'Free bed charges; Extremely low cost surgical procedures', hi: 'निःशुल्क बेड एवं न्यूनतम शल्य चिकित्सा दरें', ur: 'مفت بیڈ اور کم ترین علاج خرچ' },
      diagnostic: { en: 'Centralized government testing rates (up to 80% cheaper than private)', hi: 'निजी प्रयोगशालाओं से 80% तक सस्ता', ur: 'نجی لیب سے 80% تک سستا' },
      pharmacy: { en: 'Free essential medicines supplied by Central Pharmacy', hi: 'केंद्रीय औषधि भंडार से निःशुल्क दवाएं', ur: 'مرکزی فارمیسی سے مفت ادویات' }
    },
    nodalOfficer: {
      name: 'Prof. Harris M. Khan (Chief Medical Supt.)',
      phone: '0571-2720021',
      email: 'cms.jnmc@amu.ac.in'
    },
    languagesSpoken: ['Urdu', 'Hindi', 'English'],
    coverPhoto: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.8,
    reviewCount: 6200,
    officialSource: 'Aligarh Muslim University & Ministry of Education, Govt of India'
  },
  {
    id: 'HOSP-CMC-VELLORE',
    name: {
      en: 'Christian Medical College & Hospital (CMC Vellore)',
      hi: 'क्रिश्चियन मेडिकल कॉलेज एवं अस्पताल (सीएमसी वेल्लोर)',
      ur: 'کرسچن میڈیکل کالج و ہسپتال (سی ایم سی ویلور)'
    },
    type: 'Minority Healthcare Institution',
    subType: 'Christian Mission Hospital',
    city: 'Vellore',
    district: 'Vellore',
    state: 'Tamil Nadu',
    address: 'Ida Scudder Road, Vellore, Tamil Nadu - 632004',
    pincode: '632004',
    phone: '0416-2281000',
    emergencyNumber: '0416-2282010',
    email: 'msoffice@cmcvellore.ac.in',
    website: 'https://www.cmcvellore.ac.in',
    googleMapsUrl: 'https://maps.google.com/?q=CMC+Hospital+Vellore',
    opdTimings: {
      en: 'Mon - Sat: 7:00 AM to 5:00 PM (Prior Appointment Mandatory)',
      hi: 'सोम - शनि: सुबह 7:00 से शाम 5:00 (अग्रिम बुकिंग अनिवार्य)',
      ur: 'پیر - ہفتہ: صبح 7:00 سے شام 5:00'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: false,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Cancer / Oncology',
      'Heart / Cardiology',
      'Neurology & Neurosurgery',
      'Orthopaedics & Joint Replacement',
      'Hematology & Bone Marrow Transplant',
      'Pediatrics & Child Care',
      'Gastroenterology'
    ],
    departments: ['Hematology', 'Cardiology', 'Neurosurgery', 'Oncology', 'Gastroenterology', 'Pediatric Surgery'],
    doctorsAvailableCount: 1800,
    beds: {
      total: 3000,
      icu: { total: 350, available: 12 },
      nicu: { total: 70, available: 5 },
      general: { total: 2200, available: 110 },
      emergency: { total: 380, available: 28 }
    },
    concessions: {
      opd: { en: 'General free & subsidized ward consultations available', hi: 'सामान्य निःशुल्क व रियायती परामर्श उपलब्ध', ur: 'عام مفت اور رعایتی او پی ڈی' },
      ipd: { en: 'Person-to-person financial sponsorship via CMC Centenary Endowment Fund', hi: 'सीएमसी चैरिटी फंड से जरूरतमंद मरीजों को आर्थिक मदद', ur: 'سی ایم سی چیریٹی فنڈ سے مالی مدد' },
      diagnostic: { en: 'Subsidized rates in general ward diagnostic counters', hi: 'जनरल वार्ड में रियायती दरें', ur: 'رعایتی لیب چارجز' },
      pharmacy: { en: 'In-house concessional medicine store', hi: 'इन-हाउस रियायती दवा स्टोर', ur: 'رعایتی دوا اسٹور' }
    },
    nodalOfficer: {
      name: 'CMC Patient Social Welfare Department',
      phone: '0416-2282030',
      email: 'socialwelfare@cmcvellore.ac.in'
    },
    languagesSpoken: ['English', 'Tamil', 'Hindi', 'Bengali', 'Telugu'],
    coverPhoto: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.9,
    reviewCount: 15800,
    officialSource: 'Christian Medical College Vellore Association'
  },
  {
    id: 'HOSP-ERA-LUCKNOW',
    name: {
      en: "Era's Lucknow Medical College & Hospital",
      hi: "एराज लखनऊ मेडिकल कॉलेज एवं अस्पताल",
      ur: "ایراز لکھنؤ میڈیکل کالج و ہسپتال"
    },
    type: 'Minority Healthcare Institution',
    subType: 'Muslim Trust Hospital',
    city: 'Lucknow',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    address: 'Sarfarazganj, Hardoi Road, Lucknow, Uttar Pradesh - 226003',
    pincode: '226003',
    phone: '0522-2408122',
    emergencyNumber: '0522-2408123',
    email: 'info@erauniversity.in',
    website: 'https://www.elmc.rauniversity.in',
    googleMapsUrl: 'https://maps.google.com/?q=Era+Lucknow+Medical+College',
    opdTimings: {
      en: 'Daily: 8:30 AM to 3:00 PM (Emergency 24x7)',
      hi: 'प्रतिदिन: सुबह 8:30 से दोपहर 3:00 बजे तक',
      ur: 'روزانہ: صبح 8:30 سے دوپہر 3:00 بجے تک'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Heart / Cardiology',
      'Kidney / Nephrology & Dialysis',
      'Neurology & Neurosurgery',
      'Gynecology & Women Health',
      'Neonatal Care (NICU)',
      'Pediatrics & Child Care',
      'Dermatology & Skin Diseases'
    ],
    departments: ['Cardiology', 'Nephrology', 'General Medicine', 'Ob-Gyn', 'NICU', 'Pediatrics', 'Radiology'],
    doctorsAvailableCount: 520,
    beds: {
      total: 950,
      icu: { total: 75, available: 12 },
      nicu: { total: 35, available: 6 },
      general: { total: 750, available: 62 },
      emergency: { total: 90, available: 15 }
    },
    concessions: {
      opd: { en: 'Free OPD for underprivileged patients & widow cardholders', hi: 'गरीब व विधवा कार्डधारकों के लिए फ्री ओपीडी', ur: 'مفت او پی ڈی اور رعایت' },
      ipd: { en: 'Ayushman Bharat PM-JAY 100% cashless treatment; Welfare trust concessions', hi: 'आयुष्मान भारत कैशलेस इलाज एवं जकात फंड', ur: 'ایوشمان بھارت کیش لیس علاج اور زکوۃ فنڈ' },
      diagnostic: { en: '25% concession on CT/MRI for community welfare members', hi: 'सामुदायिक कल्याण सदस्यों के लिए 25% छूट', ur: '25% رعایت سی ٹی اسکین پر' },
      pharmacy: { en: 'Concessional pharmacy inside campus', hi: 'कैंपस में रियायती दवाखाना', ur: 'رعایती دواخانہ' }
    },
    nodalOfficer: {
      name: 'Mohd. Zaid Khan (Welfare Manager)',
      phone: '+91 99350-11224',
      email: 'welfare@elmc.edu'
    },
    languagesSpoken: ['Hindi', 'Urdu', 'English'],
    coverPhoto: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.7,
    reviewCount: 4100,
    officialSource: 'Era University Lucknow Trust'
  },
  {
    id: 'HOSP-YENEPOYA-MANGALORE',
    name: {
      en: 'Yenepoya Medical College Hospital',
      hi: 'येनेपोया मेडिकल कॉलेज अस्पताल (मंगलुरु)',
      ur: 'ینیپویا میڈیکل کالج ہسپتال (منگلورو، کرناٹک)'
    },
    type: 'Minority Healthcare Institution',
    subType: 'Muslim Trust / Deemed University Hospital',
    city: 'Mangaluru',
    district: 'Dakshina Kannada',
    state: 'Karnataka',
    address: 'Deralakatte, Mangaluru, Karnataka - 575018',
    pincode: '575018',
    phone: '0824-2206000',
    emergencyNumber: '0824-2204668',
    email: 'hospital@yenepoya.edu.in',
    website: 'https://www.yenepoya.edu.in',
    googleMapsUrl: 'https://maps.google.com/?q=Yenepoya+Hospital+Mangalore',
    opdTimings: {
      en: 'Mon - Sat: 8:00 AM to 4:00 PM',
      hi: 'सोम - शनि: सुबह 8:00 से शाम 4:00 बजे तक',
      ur: 'پیر - ہفتہ: صبح 8:00 سے شام 4:00 بجے تک'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Cancer / Oncology',
      'Kidney / Nephrology & Dialysis',
      'Heart / Cardiology',
      'Organ Transplant (Kidney/Liver)',
      'Dental & Maxillofacial',
      'AYUSH (Unani / Ayurveda)',
      'Pediatrics & Child Care'
    ],
    departments: ['Oncology', 'Nephrology', 'Organ Transplant Unit', 'Ayush Centre', 'Dental Surgery', 'Urology'],
    doctorsAvailableCount: 710,
    beds: {
      total: 1100,
      icu: { total: 95, available: 14 },
      nicu: { total: 30, available: 6 },
      general: { total: 850, available: 72 },
      emergency: { total: 125, available: 19 }
    },
    concessions: {
      opd: { en: 'Free OPD consultations in general units', hi: 'जनरल इकाइयों में मुफ्त ओपीडी परामर्श', ur: 'مفت او پی ڈی مشاورت' },
      ipd: { en: 'Free dialysis & subsidized organ transplant support via Yenepoya Foundation', hi: 'निःशुल्क डायलिसिस एवं फाउंडेशन सहायता', ur: 'مفت ڈائیلاسز اور فاؤنڈیشن امداد' },
      diagnostic: { en: 'Subsidized imaging & pathology for Ayushman & Arogyasri card holders', hi: 'आयुष्मान कार्डधारकों के लिए रियायती जांच', ur: 'رعایती ٹیسٹ' },
      pharmacy: { en: 'Discounted generic drugs store inside hospital campus', hi: 'कैंपस में डिस्काउंटेड जेनेरिक दवाएं', ur: 'ڈسکاؤنٹ ادویات' }
    },
    nodalOfficer: {
      name: 'Yenepoya Foundation Welfare Cell',
      phone: '0824-2204669',
      email: 'welfare@yenepoya.edu.in'
    },
    languagesSpoken: ['Kannada', 'Malayalam', 'Urdu', 'English', 'Hindi', 'Beary'],
    coverPhoto: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.8,
    reviewCount: 5100,
    officialSource: 'Yenepoya University Trust'
  },
  {
    id: 'HOSP-TATA-MEMORIAL',
    name: {
      en: 'Tata Memorial Hospital & Cancer Research Centre',
      hi: 'टाटा मेमोरियल अस्पताल एवं कैंसर अनुसंधान केंद्र (मुंबई)',
      ur: 'ٹاٹا میموریل کینسر ہسپتال (ممبئی)'
    },
    type: 'Cancer / Specialized Institute',
    city: 'Mumbai',
    district: 'Mumbai City',
    state: 'Maharashtra',
    address: 'Dr. Ernest Borges Road, Parel, Mumbai, Maharashtra - 400012',
    pincode: '400012',
    phone: '022-24177000',
    emergencyNumber: '022-24177000 Ext 4000',
    email: 'crs@tmc.gov.in',
    website: 'https://tmc.gov.in',
    googleMapsUrl: 'https://maps.google.com/?q=Tata+Memorial+Hospital+Parel+Mumbai',
    opdTimings: {
      en: 'Mon - Fri: 8:00 AM to 4:00 PM (Smartcard OPD Registration)',
      hi: 'सोम - शुक्र: सुबह 8:00 से शाम 4:00 (स्मार्टकार्ड पंजीकरण)',
      ur: 'پیر - جمعہ: صبح 8:00 سے شام 4:00'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: true,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Cancer / Oncology',
      'Radiation Oncology',
      'Surgical Oncology',
      'Pediatric Oncology',
      'Bone Marrow Transplant',
      'Nuclear Medicine & PET-CT Scan'
    ],
    departments: ['Medical Oncology', 'Surgical Oncology', 'Radiation Therapy', 'Bone Marrow Transplant Unit', 'Palliative Care'],
    doctorsAvailableCount: 880,
    beds: {
      total: 700,
      icu: { total: 60, available: 5 },
      nicu: { total: 15, available: 2 },
      general: { total: 550, available: 28 },
      emergency: { total: 75, available: 8 }
    },
    concessions: {
      opd: { en: 'NC Category (General) 100% free treatment for low income families', hi: 'कम आय वाले परिवारों के लिए 100% मुफ्त उपचार', ur: 'کم آمدنی والوں کے لیے 100% مفت علاج' },
      ipd: { en: 'PMNRF, Ayushman Bharat, Tata Trust & NGO financial assistance desk', hi: 'टाटा ट्रस्ट व पीएमआरएफ द्वारा वित्तीय सहायता', ur: 'ٹاٹا ٹرسٹ اور مالی امداد' },
      diagnostic: { en: 'Subsidized PET-CT & Genomic testing for NC/BPL patients', hi: 'रियायती पेट-स्कैन व बायोप्सी जांच', ur: 'رعایتی پی ای ٹی اسکین' },
      pharmacy: { en: 'Chemotherapy drugs at manufacturer wholesale rates', hi: 'कीमोथेरेपी दवाएं थोक दरों पर', ur: 'کیموتھراپی ادویات ہول سیل ریٹ پر' }
    },
    nodalOfficer: {
      name: 'Tata Memorial Medical Social Work Dept.',
      phone: '022-24177000 Ext 4150',
      email: 'msw@tmc.gov.in'
    },
    languagesSpoken: ['Hindi', 'Marathi', 'English', 'Urdu', 'Gujarati'],
    coverPhoto: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.9,
    reviewCount: 22000,
    officialSource: 'Department of Atomic Energy, Govt of India'
  },
  {
    id: 'HOSP-NIMHANS-BENGALURU',
    name: {
      en: 'National Institute of Mental Health and Neuro-Sciences (NIMHANS)',
      hi: 'राष्ट्रीय मानसिक स्वास्थ्य एवं तंत्रिका विज्ञान संस्थान (निमहांस, बेंगलुरु)',
      ur: 'نیشنل انسٹی ٹیوٹ آف مینٹل ہیلتھ اینڈ نیورو سائنسز (نمہانس، بنگلورو)'
    },
    type: 'Rehabilitation & Mental Health',
    city: 'Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    address: 'Hosur Road, Near Lakkasandra, Bengaluru, Karnataka - 560029',
    pincode: '560029',
    phone: '080-26995000',
    emergencyNumber: '080-26995555 / Tele-MANAS: 14416',
    email: 'dgo@nimhans.ac.in',
    website: 'https://nimhans.ac.in',
    googleMapsUrl: 'https://maps.google.com/?q=NIMHANS+Bengaluru',
    opdTimings: {
      en: 'Mon - Sat: 8:00 AM to 11:30 AM (Neuro & Psychiatry Screening)',
      hi: 'सोम - शनि: सुबह 8:00 से 11:30 (न्यूरो व मनोरोग स्क्रीनिंग)',
      ur: 'پیر - ہفتہ: صبح 8:00 سے 11:30'
    },
    emergency24x7: true,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: false,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: true,
    pharmacy24x7: true,
    ambulanceOnsite: true,
    accommodationAvailable: true,
    foodFacilities: true,
    specialities: [
      'Psychiatry & Mental Health',
      'Neurology & Neurosurgery',
      'Brain & Spine',
      'Pediatric Psychiatry',
      'De-addiction & Rehabilitation',
      'Physiotherapy & Rehabilitation'
    ],
    departments: ['Psychiatry', 'Neurology', 'Neurosurgery', 'Child & Adolescent Psychiatry', 'De-addiction Centre'],
    doctorsAvailableCount: 540,
    beds: {
      total: 1000,
      icu: { total: 60, available: 6 },
      nicu: { total: 0, available: 0 },
      general: { total: 850, available: 45 },
      emergency: { total: 90, available: 12 }
    },
    concessions: {
      opd: { en: 'Free OPD & Tele-MANAS (14416) round-the-clock helpline', hi: 'निःशुल्क ओपीडी व टेली-मानस हेल्पलाइन', ur: 'مفت او پی ڈی اور ٹیلی مانس ہیلپ لائن' },
      ipd: { en: 'Government subsidized psychiatric & neuro-surgery beds', hi: 'सरकारी रियायती मनोरोग व न्यूरो बेड', ur: 'رعایتی نیورو بیڈز' },
      diagnostic: { en: 'Subsidized MRI, EEG, Brain Mapping & Lab tests', hi: 'रियायती एमआरआई व ईईजी जांच', ur: 'رعایती ایم آر آئی اور ای ای جی' },
      pharmacy: { en: 'Generic psychiatric medicines at heavily subsidized prices', hi: 'सस्ती मनोरोग दवाएं', ur: 'سستی ادویات' }
    },
    nodalOfficer: {
      name: 'NIMHANS Tele-MANAS & Welfare Cell',
      phone: '14416 (Toll Free) / 080-26995100',
      email: 'telemanas@nimhans.ac.in'
    },
    languagesSpoken: ['Kannada', 'English', 'Hindi', 'Urdu', 'Tamil', 'Telugu'],
    coverPhoto: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.9,
    reviewCount: 11200,
    officialSource: 'Ministry of Health & Family Welfare, Govt of India'
  },
  {
    id: 'HOSP-JAN-AUSHADHI-CENTRAL',
    name: {
      en: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP Central Hub)',
      hi: 'प्रधानमंत्री भारतीय जनऔषधि केंद्र (केंद्रीय नेटवर्क)',
      ur: 'وزیراعظم بھارتیہ جن اوشدھی کیندر (مرکزی نیٹ ورک)'
    },
    type: 'Free Medicine & Jan Aushadhi',
    city: 'National Network (All States)',
    district: 'All Districts',
    state: 'Delhi NCR',
    address: 'Over 10,000+ Kendras Nationwide near District Hospitals & CHCs',
    pincode: '110001',
    phone: '1800-180-8080 (Toll Free)',
    emergencyNumber: '1800-180-8080',
    email: 'support@janaushadhi.gov.in',
    website: 'https://janaushadhi.gov.in',
    googleMapsUrl: 'https://maps.google.com/?q=Jan+Aushadhi+Kendra+Near+Me',
    opdTimings: {
      en: 'Daily: 8:00 AM to 9:00 PM (Medicine Distribution)',
      hi: 'प्रतिदिन: सुबह 8:00 से रात 9:00 बजे तक',
      ur: 'روزانہ: صبح 8:00 سے رات 9:00 بجے تک'
    },
    emergency24x7: false,
    ayushmanEmpaneled: true,
    freeTreatmentAvailable: true,
    lowCostSubsidized: true,
    zakatFundSupport: false,
    wheelchairAccessible: true,
    parkingAvailable: true,
    bloodBankOnsite: false,
    pharmacy24x7: false,
    ambulanceOnsite: false,
    accommodationAvailable: false,
    foodFacilities: false,
    specialities: [
      'Free Medicine & Jan Aushadhi',
      'Diabetes & Endocrinology',
      'Heart / Cardiology',
      'Pulmonology & Asthma',
      'Dermatology & Skin Diseases'
    ],
    departments: ['Generic Pharmacy', 'Surgical Implants', 'Diabetic Care Supply', 'Hygiene & Sanitary Products'],
    doctorsAvailableCount: 0,
    beds: {
      total: 0,
      icu: { total: 0, available: 0 },
      nicu: { total: 0, available: 0 },
      general: { total: 0, available: 0 },
      emergency: { total: 0, available: 0 }
    },
    concessions: {
      opd: { en: 'Free medicine list consultation & catalog guidance', hi: 'दवा सूची परामर्श निःशुल्क', ur: 'ادویات فہرست مفت' },
      ipd: { en: 'N/A (Retail Medicine Outlet)', hi: 'लागू नहीं', ur: 'لاگو نہیں' },
      diagnostic: { en: 'N/A', hi: 'लागू नहीं', ur: 'لاگو نہیں' },
      pharmacy: { en: '50% to 90% cheaper generic medicines compared to branded drugs', hi: 'ब्रांडेड दवाओं की तुलना में 50% से 90% सस्ती दवाएं', ur: '50% سے 90% سستی ادویات' }
    },
    nodalOfficer: {
      name: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)',
      phone: '1800-180-8080',
      email: 'pmbi@janaushadhi.gov.in'
    },
    languagesSpoken: ['Hindi', 'English', 'Urdu', 'All Indian Regional Languages'],
    coverPhoto: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    verified: true,
    rating: 4.8,
    reviewCount: 35000,
    officialSource: 'Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers'
  }
];

// Disease-wise Treatment Guide Dataset
export const DISEASE_TREATMENT_GUIDES: DiseaseTreatmentGuide[] = [
  {
    id: 'GUIDE-CANCER',
    diseaseName: {
      en: 'Cancer Care & Oncology (Chemotherapy / Radiotherapy / Surgery)',
      hi: 'कैंसर देखभाल एवं ऑनकोलॉजी (कीमोथेरेपी / रेडियोथेरेपी / सर्जरी)',
      ur: 'کینسر کا علاج اور آنکولوجی (کیموتھراپی / ریڈیوتھراپی)'
    },
    category: 'Cancer / Oncology',
    recommendedHospitals: [
      { hospitalId: 'HOSP-TATA-MEMORIAL', name: { en: 'Tata Memorial Hospital', hi: 'टाटा मेमोरियल अस्पताल, मुंबई', ur: 'ٹاٹا میموریل ہسپتال، ممبئی' }, city: 'Mumbai', treatmentType: 'Comprehensive Oncology, PET-CT, Surgery' },
      { hospitalId: 'HOSP-AIIMS-DELHI', name: { en: 'AIIMS Dr. BRA IRCH', hi: 'एम्स कैंसर संस्थान, नई दिल्ली', ur: 'ایمز کینسر انسٹی ٹیوٹ، نئی دہلی' }, city: 'New Delhi', treatmentType: 'Advanced Radiation, Immunotherapy' },
      { hospitalId: 'HOSP-SMS-JAIPUR', name: { en: 'SMS Cancer Hospital (GSD)', hi: 'एसएमएस कैंसर संस्थान, जयपुर', ur: 'ایس ایم ایس کینسر ہسپتال، جے پور' }, city: 'Jaipur', treatmentType: '100% Free under RGHS/Chiranjeevi' }
    ],
    treatmentAvailability: {
      en: '24x7 Surgical Oncology, Chemotherapy Day Care, Linear Accelerator Radiotherapy',
      hi: '24x7 शल्य ऑनकोलॉजी, कीमोथेरेपी डे केयर, रेडिएशन थेरेपी',
      ur: '24 گھنٹے کیموتھراپی اور ریڈیوتھراپی'
    },
    waitingTime: {
      en: 'Emergency Admissions: Immediate | Routine OPD Surgery: 2 - 4 Weeks',
      hi: 'आपातकालीन: तुरंत | सामान्य सर्जरी: 2-4 सप्ताह',
      ur: 'ہنگامی: فوری | عام سرجری: 2 تا 4 ہفتے'
    },
    referralRequirement: {
      en: 'Biopsy report mandatory; Referral card from Civil Hospital for state schemes',
      hi: 'बायोप्सी रिपोर्ट अनिवार्य; बीपीएल/योजना कार्ड साथ लाएं',
      ur: 'بایوپسی رپورٹ اور اسکیم کارڈ ضروری'
    },
    estimatedCostRange: {
      en: 'Free under Ayushman PM-JAY / State Scheme | Private Range: ₹1.5L - ₹6L',
      hi: 'आयुष्मान भारत के तहत निःशुल्क | निजी: ₹1.5 लाख - ₹6 लाख',
      ur: 'ایوشمان کے تحت مفت | نجی: 1.5 تا 6 لاکھ روپے'
    },
    govtSupportAvailable: {
      en: 'PM-JAY (Up to ₹5 Lakh), PMNRF (Prime Minister Relief Fund), Health Minister Discretionary Fund',
      hi: 'आयुष्मान भारत (₹5 लाख तक), प्रधानमंत्री राष्ट्रीय राहत कोष (PMNRF)',
      ur: 'ایوشمان بھارت (5 لاکھ روپے تک)، وزیر اعظم ریلیف فنڈ'
    },
    requiredDocuments: [
      { en: 'Aadhaar Card of Patient', hi: 'मरीज़ का आधार कार्ड', ur: 'مریض کا آدھار کارڈ' },
      { en: 'Ayushman Bharat Card / Ration Card', hi: 'आयुष्मान कार्ड / राशन कार्ड', ur: 'ایوشمان کارڈ / راشن کارڈ' },
      { en: 'Biopsy / Histopathology Report', hi: 'बायोप्सी जांच रिपोर्ट', ur: 'بایوپسی رپورٹ' },
      { en: 'Income Certificate (if applying for Charity/Zakat)', hi: 'आय प्रमाण पत्र (चैरिटी के लिए)', ur: 'آمدنی کا سرٹیفکیٹ' }
    ],
    emergencyContact: '022-24177000 (Tata Memorial) / 108'
  },
  {
    id: 'GUIDE-HEART',
    diseaseName: {
      en: 'Coronary Heart Disease, Angioplasty & Bypass Surgery (CABG)',
      hi: 'हृदय रोग, एंजियोप्लास्टी एवं बायपास सर्जरी (CABG)',
      ur: 'دل کی بیماریاں، انجیوپلاسٹی اور بائی پاس سرجری'
    },
    category: 'Heart / Cardiology',
    recommendedHospitals: [
      { hospitalId: 'HOSP-AIIMS-DELHI', name: { en: 'AIIMS CNC Cardiology', hi: 'एम्स कार्डियोथोरेसिक सेंटर, नई दिल्ली', ur: 'ایمز کارڈیالوجی، نئی دہلی' }, city: 'New Delhi', treatmentType: 'Complex Angioplasty, Pediatric Heart Surgery' },
      { hospitalId: 'HOSP-SMS-JAIPUR', name: { en: 'SMS Jaipur Cardiology Wing', hi: 'एसएमएस कार्डियोलॉजी विभाग, जयपुर', ur: 'ایس ایم ایس جے پور کارڈیالوجی' }, city: 'Jaipur', treatmentType: 'Free Stent & Bypass under Govt Scheme' }
    ],
    treatmentAvailability: {
      en: 'Emergency Cath Lab 24x7, Primary Angioplasty, Heart Valve Replacement',
      hi: '24x7 इमरजेंसी कैथ लैब, एंजियोप्लास्टी, वॉल्व रिप्लेसमेंट',
      ur: '24 گھنٹے ہنگامی اینجیوپلاسٹی اور کیتھ لیب'
    },
    waitingTime: {
      en: 'Heart Attack Emergency: Immediate | Elective Angioplasty: 3 - 7 Days',
      hi: 'हार्ट अटैक आपातकालीन: तुरंत | सामान्य: 3-7 दिन',
      ur: 'ہارٹ اٹیک ہنگامی: فوری | عام: 3 تا 7 دن'
    },
    referralRequirement: {
      en: 'ECG & ECHO report; Emergency walk-in accepted at Trauma/Chest Pain Unit',
      hi: 'ईसीजी व इको रिपोर्ट; चेस्ट पेन यूनिट में सीधा प्रवेश',
      ur: 'ای سی جی اور ایکو رپورٹ'
    },
    estimatedCostRange: {
      en: '100% Cashless under Ayushman Bharat | Private Range: ₹1.2L - ₹3.5L',
      hi: 'आयुष्मान भारत के तहत 100% कैशलेस | निजी: ₹1.2 - ₹3.5 लाख',
      ur: 'ایوشمان بھارت کے تحت 100% کیش لیس'
    },
    govtSupportAvailable: {
      en: 'PM-JAY Cardiac Packages, State Health Insurance Scheme, National Pediatric Heart Care',
      hi: 'आयुष्मान भारत कार्डियाक पैकेज, राज्य स्वास्थ्य बीमा',
      ur: 'ایوشمان کارڈیئک پیکیج'
    },
    requiredDocuments: [
      { en: 'Aadhaar Card', hi: 'आधार कार्ड', ur: 'آدھار کارڈ' },
      { en: 'ECG / Troponin-I Test Report', hi: 'ईसीजी रिपोर्ट', ur: 'ای سی جی رپورٹ' },
      { en: 'Ayushman Card / BPL Card', hi: 'आयुष्मान कार्ड / बीपीएल', ur: 'ایوشمان / بی پی ایل کارڈ' }
    ],
    emergencyContact: '108 Ambulance / 011-26594405'
  },
  {
    id: 'GUIDE-KIDNEY-DIALYSIS',
    diseaseName: {
      en: 'Chronic Kidney Disease (CKD), Dialysis & Kidney Transplant',
      hi: 'क्रोनिक किडनी डिजीज (गुर्दा रोग), डायलिसिस एवं गुर्दा प्रत्यारोपण',
      ur: 'گردے کا دائر بیماری، ڈائیلاسز اور کڈنی ٹرانسپلانٹ'
    },
    category: 'Kidney / Nephrology & Dialysis',
    recommendedHospitals: [
      { hospitalId: 'HOSP-YENEPOYA-MANGALORE', name: { en: 'Yenepoya Nephrology Centre', hi: 'येनेपोया नेफ्रोलॉजी सेंटर', ur: 'ینیپویا نیفرولوجی سینٹر' }, city: 'Mangaluru', treatmentType: 'Free Dialysis & Transplant Wing' },
      { hospitalId: 'HOSP-AMU-JNMC', name: { en: 'AMU JNMC Dialysis Unit', hi: 'एएमयू जेएनएमसी डायलिसिस यूनिट', ur: 'اے ایم یو ڈائیلاسز یونٹ' }, city: 'Aligarh', treatmentType: 'Subsidized Dialysis & Fistula Surgery' }
    ],
    treatmentAvailability: {
      en: 'Hemodialysis 24x7, Peritoneal Dialysis, AV Fistula Surgery, Renal Transplant',
      hi: '24x7 हीमोडायलिसिस, एवी फिस्टुला सर्जरी, किडनी ट्रांसप्लांट',
      ur: '24 گھنٹے ڈائیلاسز اور کڈنی ٹرانسپلانٹ'
    },
    waitingTime: {
      en: 'Emergency Dialysis: Immediate | Kidney Transplant: Subject to Donor Registry',
      hi: 'इमरजेंसी डायलिसिस: तुरंत | ट्रांसप्लांट: डोनर उपलब्धता अनुसार', ur: 'ڈائیلاسز: فوری | ٹرانسپلانٹ: ڈونر پر منصر'
    },
    referralRequirement: {
      en: 'Nephrologist Prescription, Serum Creatinine & Blood Urea Test Reports',
      hi: 'नेफ्रोलॉजिस्ट पर्चा, सीरम क्रिएटिनिन जांच', ur: 'نیفرولوجسٹ کی دوا کی پرچی'
    },
    estimatedCostRange: {
      en: 'Free under Pradhan Mantri National Dialysis Programme (PMNDP) & Ayushman',
      hi: 'पीएमएनडीपी व आयुष्मान के तहत 100% मुफ्त', ur: 'پی ایم این ڈی پی اور ایوشمان کے تحت مفت'
    },
    govtSupportAvailable: {
      en: 'PMNDP Free Dialysis Scheme, Ayushman PM-JAY Renal Package',
      hi: 'प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम (PMNDP)', ur: 'وزیر اعظم قومی ڈائیلاسز پروگرام'
    },
    requiredDocuments: [
      { en: 'Aadhaar Card', hi: 'आधार कार्ड', ur: 'آدھار کارڈ' },
      { en: 'Dialysis Prescription by Nephrologist', hi: 'डायलिसिस का पर्चा', ur: 'ڈائیلاسز کی پرچی' },
      { en: 'Ayushman Card / BPL Card', hi: 'आयुष्मान कार्ड', ur: 'ایوشمان کارڈ' }
    ],
    emergencyContact: '108 Ambulance'
  }
];

// Verified Government Health Schemes Dataset
export const VERIFIED_HEALTH_SCHEMES: HealthScheme[] = [
  {
    id: 'SCHEME-PMJAY',
    title: {
      en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
      hi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY)',
      ur: 'ایوشمان بھارت پردھان منتری جن آروگیہ یوجنا'
    },
    category: 'Central Government',
    coverageAmount: {
      en: 'Up to ₹5,00,000 per family per year for secondary & tertiary hospitalization',
      hi: 'प्रति वर्ष प्रति परिवार ₹5,00,000 तक का कैशलेस इलाज',
      ur: 'فی خاندان فی سال 5,00,000 روپے تک کیش لیس علاج'
    },
    eligibility: {
      en: 'Families listed under SECC 2011 data, BPL card holders, Antyodaya Anna Yojana (AAY) cardholders, and registered welfare beneficiaries',
      hi: 'एसईसीसी 2011 डेटा, बीपीएल कार्ड धारक, अंत्योदय अन्ना योजना धारक',
      ur: 'ایس ای سی سی 2011، بی پی ایل راشن کارڈ ہولڈرز'
    },
    requiredDocuments: [
      { en: 'Aadhaar Card of Family Members', hi: 'परिवार के सदस्यों का आधार कार्ड', ur: 'تمام افراد کا آدھار کارڈ' },
      { en: 'Ration Card / Ayushman Family ID', hi: 'राशन कार्ड / आयुष्मान फैमिली आईडी', ur: 'راشن کارڈ / ایوشمان ائی ڈی' },
      { en: 'Registered Mobile Number', hi: 'पंजीकृत मोबाइल नंबर', ur: 'رجسٹرڈ موبائل نمبر' }
    ],
    benefits: [
      { en: 'Cashless treatment across 27,000+ public and empaneled private hospitals nationwide', hi: 'देशभर के 27,000+ सरकारी व निजी अस्पतालों में कैशलेस इलाज', ur: 'ملک بھر کے 27,000 سے زائد ہسپتالوں میں کیش لیس علاج' },
      { en: 'Includes 1,949 medical procedures, ICU, surgery, diagnostics & 15 days post-discharge medicines', hi: '1,949 चिकित्सा प्रक्रियाएं, आईसीयू, सर्जरी व दवाएं शामिल', ur: '1,949 میڈیکل پروسیجرز، آئی سی یو اور ادویات شامل' },
      { en: 'No capping on family size, age, or pre-existing conditions', hi: 'परिवार के आकार, उम्र या पुरानी बीमारी पर कोई सीमा नहीं', ur: 'خاندان کے سائز یا عمر کی کوئی قید نہیں' }
    ],
    officialWebsite: 'https://pmjay.gov.in',
    applicationProcess: {
      en: 'Visit nearest Common Service Centre (CSC), Ayushman Mitra counter at government hospital, or apply online at beneficiary.nha.gov.in',
      hi: 'निकटतम सीएससी केंद्र या सरकारी अस्पताल में आयुष्मान मित्र काउंटर पर जाएं',
      ur: 'قریب ترین سی ایس سی یا ہسپتال میں ایوشمان مترا کاؤنٹر پر جائیں'
    },
    helplinePhone: '14555 / 1800-111-555 (Toll Free)',
    statesApplicable: ['ALL']
  },
  {
    id: 'SCHEME-PMNDP',
    title: {
      en: 'Pradhan Mantri National Dialysis Programme (PMNDP)',
      hi: 'प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम (PMNDP)',
      ur: 'وزیر اعظم قومی ڈائیلاسز پروگرام'
    },
    category: 'Central Government',
    coverageAmount: {
      en: '100% Free Hemodialysis & Peritoneal Dialysis for BPL and needy patients',
      hi: 'बीपीएल व जरूरतमंदों के लिए 100% मुफ्त हीमोडायलिसिस',
      ur: 'بی پی ایل اور غریبوں کے لیے 100% مفت ڈائیلاسز'
    },
    eligibility: {
      en: 'Any patient suffering from End-Stage Renal Disease (ESRD) holding BPL/EWS status or state health scheme card',
      hi: 'गुर्दा रोग (ESRD) से पीड़ित बीपीएल/ईडब्ल्यूएस मरीज', ur: 'گردے کی بیماری کے شکار بی پی ایل مریض'
    },
    requiredDocuments: [
      { en: 'Aadhaar Card', hi: 'आधार कार्ड', ur: 'آدھار کارڈ' },
      { en: 'BPL Ration Card / Income Certificate', hi: 'बीपीएल राशन कार्ड / आय प्रमाण पत्र', ur: 'بی پی ایل راشن کارڈ' },
      { en: 'Nephrologist Dialysis Prescription', hi: 'नेफ्रोलॉजिस्ट का पर्चा', ur: 'ڈائیلاسز کا دوا پرچی' }
    ],
    benefits: [
      { en: 'Free dialysis sessions at District Hospitals & PMNDP centers', hi: 'जिला अस्पतालों में निःशुल्क डायलिसिस', ur: 'ضلعی ہسپتالوں میں مفت ڈائیلاسز' },
      { en: 'Free EPO injections & essential consumables', hi: 'इरिथ्रोपोइटिन इंजेक्शन व कंस्युमेबल्स मुफ्त', ur: 'مفت انجیکشن اور ادویات' }
    ],
    officialWebsite: 'https://nhm.gov.in',
    applicationProcess: {
      en: 'Direct walk-in to District Hospital Dialysis Unit with doctor prescription and Aadhaar/BPL card',
      hi: 'डॉक्टर के पर्चे और बीपीएल कार्ड के साथ जिला अस्पताल डायलिसिस यूनिट जाएं', ur: 'ڈاکٹر کے پرچے کے ساتھ ضلعی ہسپتال ڈائیلاسز یونٹ جائیں'
    },
    helplinePhone: '108 / 104',
    statesApplicable: ['ALL']
  },
  {
    id: 'SCHEME-RAJASTHAN-RGHS',
    title: {
      en: 'Mukhya Mantri Ayushman Swasthya Bima & RGHS (Rajasthan)',
      hi: 'मुख्यमंत्री आयुष्मान स्वास्थ्य बीमा एवं आरजीएचएस (राजस्थान)',
      ur: 'وزیر اعلیٰ ایوشمان ہیلتھ انشورنس سکیم (راجستھان)'
    },
    category: 'State Government',
    coverageAmount: {
      en: 'Up to ₹25,00,000 free treatment per family per year in Rajasthan',
      hi: 'राजस्थान में प्रति वर्ष ₹25 लाख तक का निःशुल्क कैशलेस इलाज', ur: 'راجستھان میں 25 لاکھ روپے تک کا مفت کیش لیس علاج'
    },
    eligibility: {
      en: 'All Jan Aadhaar cardholder families residing in Rajasthan',
      hi: 'राजस्थान के सभी जन आधार कार्ड धारक परिवार', ur: 'راجستھان کے تمام جن آدھار ہولڈرز'
    },
    requiredDocuments: [
      { en: 'Jan Aadhaar Card', hi: 'जन आधार कार्ड', ur: 'جن آدھار کارڈ' },
      { en: 'Aadhaar Card of Patient', hi: 'मरीज़ का आधार कार्ड', ur: 'مریض کا آدھار کارڈ' }
    ],
    benefits: [
      { en: 'Includes OPD, IPD, Organ Transplant, Cancer Therapy & Free Medicines', hi: 'ओपीडी, आईपीडी, ऑर्गन ट्रांसप्लांट, कैंसर थेरेपी शामिल', ur: 'تمام علاج اور مفت ادویات شامل' }
    ],
    officialWebsite: 'https://chiranjeevi.rajasthan.gov.in',
    applicationProcess: {
      en: 'E-Mitra kiosk or online registration via SSO Portal (sso.rajasthan.gov.in)',
      hi: 'ई-मित्र कियोस्क या एसएसओ पोर्टल द्वारा ऑनलाइन पंजीकरण', ur: 'ای مترا یا ایس ایس او پورٹل سے آن لائن اندراج'
    },
    helplinePhone: '181 (Rajasthan Helpline)',
    statesApplicable: ['Rajasthan']
  }
];

// AYUSH Directory Dataset
export const AYUSH_DIRECTORY: AYUSHFacility[] = [
  {
    id: 'AYUSH-UNANI-DELHI',
    name: {
      en: 'Central Council for Research in Unani Medicine (CCRUM HQ & Clinic)',
      hi: 'केंद्रीय यूनानी चिकित्सा अनुसंधान परिषद (सीसीआरयूएम)',
      ur: 'سینٹرل کونسل فار ریسرچ ان یونانی میڈیسن (سی سی آر یو ایم)'
    },
    system: 'Unani',
    ownership: 'Government',
    city: 'New Delhi',
    state: 'Delhi NCR',
    address: '61-65, Institutional Area, Opp. D-Block, Janakpuri, New Delhi - 110058',
    phone: '011-28521981',
    opdTimings: 'Mon - Fri: 9:00 AM to 4:00 PM',
    keySpecialties: ['Skin Diseases (Leucoderma/Vitiligo)', 'Rheumatoid Arthritis', 'Sinusitis', 'Digestive Disorders', 'Liver Care'],
    freeConsultation: true,
    herbalPharmacyOnsite: true
  },
  {
    id: 'AYUSH-AYURVEDA-JAIPUR',
    name: {
      en: 'National Institute of Ayurveda (Deemed University NIA Jaipur)',
      hi: 'राष्ट्रीय आयुर्वेद संस्थान (एनआईए जयपुर)',
      ur: 'نیشنل انسٹی ٹیوٹ آف آیو وید (این آئی اے جے پور)'
    },
    system: 'Ayurveda',
    ownership: 'Government',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Jorawar Singh Gate, Amer Road, Jaipur, Rajasthan - 302002',
    phone: '0141-2635816',
    opdTimings: 'Mon - Sat: 8:00 AM to 2:00 PM',
    keySpecialties: ['Panchakarma Therapy', 'Joint Pain & Arthritis', 'Spine Disorders', 'Skin Diseases', 'Rejuvenation Care'],
    freeConsultation: true,
    herbalPharmacyOnsite: true
  },
  {
    id: 'AYUSH-UNANI-LUCKNOW',
    name: {
      en: 'State Takmil-ut-Tib College & Hospital (Unani Lucknow)',
      hi: 'राजकीय तक्मील-उत-तिब कॉलेज एवं अस्पताल (यूनानी लखनऊ)',
      ur: 'اسٹیٹ تکمیل الطب کالج و ہسپتال (یونانی لکھنؤ)'
    },
    system: 'Unani',
    ownership: 'Government',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    address: 'Abdul Aziz Road, Chowk, Lucknow, Uttar Pradesh - 226003',
    phone: '0522-2258920',
    opdTimings: 'Daily: 8:00 AM to 2:00 PM',
    keySpecialties: ['Ilaj-bit-Tadbeer (Regimenal Therapy)', 'Cupping / Hijama Therapy', 'Liver Disorders', 'Paralysis Care'],
    freeConsultation: true,
    herbalPharmacyOnsite: true
  }
];

// Free Medicine Centers
export const FREE_MEDICINE_CENTERS: FreeMedicineCenter[] = [
  {
    id: 'MED-JAN-01',
    name: {
      en: 'Jan Aushadhi Kendra - SMS Hospital Gate No. 2',
      hi: 'जन औषधि केंद्र - एसएमएस अस्पताल गेट नं 2, जयपुर',
      ur: 'جن اوشدھی کیندر - ایس ایم ایس ہسپتال گیٹ 2'
    },
    type: 'Jan Aushadhi Kendra',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Gate No. 2 Campus, SMS Hospital, JLN Marg, Jaipur, Rajasthan - 302004',
    phone: '+91 98281-44556',
    operatingHours: '7:00 AM - 11:00 PM',
    discountsAvailable: {
      en: 'Up to 80% discount on generic anti-diabetic, cardiac & antibiotic drugs',
      hi: 'डायबिटीज, हृदय रोग व एंटीबायोटिक दवाओं पर 80% तक छूट',
      ur: 'ذیابیطس اور دل کی ادویات پر 80% تک رعایت'
    },
    freeMedicinesList: ['Metformin', 'Amlodipine', 'Atorvastatin', 'Paracetamol', 'Omeprazole', 'Azithromycin']
  },
  {
    id: 'MED-TRUST-02',
    name: {
      en: 'Khidmat Free Medicine Counter - Chowk Lucknow',
      hi: 'खिदमत मुफ्त दवा काउंटर - चौक लखनऊ',
      ur: 'خدمت مفت دوا کاؤنٹر - چوک لکھنؤ'
    },
    type: 'Trust Medicine Bank',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    address: 'Near Akbari Gate, Victoria Street, Chowk, Lucknow - 226003',
    phone: '+91 99350-66778',
    operatingHours: '9:00 AM - 8:00 PM',
    discountsAvailable: {
      en: '100% Free life-saving drugs for BPL & Zakat eligible families',
      hi: 'बीपीएल व जकात पात्र परिवारों के लिए 100% मुफ्त जीवन रक्षक दवाएं',
      ur: 'بی پی ایل اور مستحقین کے لیے 100% مفت ادویات'
    },
    freeMedicinesList: ['Insulin Vials', 'Hypertension Drugs', 'Asthma Inhalers', 'Chemotherapy Supportive Drugs']
  }
];

// Emergency Services & Helplines
export const EMERGENCY_HELPLINES_DATA = [
  { name: { en: 'National Ambulance Service', hi: 'राष्ट्रीय एम्बुलेंस सेवा', ur: 'قومی ایمبولینس سروس' }, number: '108', category: 'Ambulance', available: '24x7', desc: 'Free emergency medical transport across all states' },
  { name: { en: 'Unified Emergency Helpline', hi: 'एकीकृत आपातकालीन हेल्पलाइन', ur: 'ایکٹیڈ ہنگامی ہیلپ لائن' }, number: '112', category: 'Police / Fire / Ambulance', available: '24x7', desc: 'Pan-India single emergency response support system' },
  { name: { en: 'Tele-MANAS Mental Health Helpline', hi: 'टेली-मानस मानसिक स्वास्थ्य हेल्पलाइन', ur: 'ٹیلی مانس ذہنی صحت ہیلپ لائن' }, number: '14416', category: 'Mental Health', available: '24x7', desc: 'Free confidential counseling in 20+ Indian languages' },
  { name: { en: 'National Poison Information Centre (AIIMS)', hi: 'राष्ट्रीय विष सूचना केंद्र (एम्स)', ur: 'قومی زہر معلومات سینٹر' }, number: '1800-116-117', category: 'Poison Helpline', available: '24x7', desc: 'Emergency guidance for accidental poisoning or chemical exposure' },
  { name: { en: 'Ayushman Bharat PM-JAY Call Centre', hi: 'आयुष्मान भारत कॉल सेंटर', ur: 'ایوشمان بھارت کال سینٹر' }, number: '14555', category: 'Health Scheme', available: '24x7', desc: 'Empaneled hospital inquiry & grievance support' },
  { name: { en: 'Women Helpline', hi: 'महिला हेल्पलाइन', ur: 'خواتین ہیلپ لائن' }, number: '1091', category: 'Women Safety', available: '24x7', desc: 'Medical and safety relief for women' },
  { name: { en: 'Childline', hi: 'चाइल्डलाइन', ur: 'چائلڈ لائن' }, number: '1098', category: 'Child Emergency', available: '24x7', desc: 'Child medical, protection & rescue helpline' },
  { name: { en: 'Senior Citizen Elderline', hi: 'वरिष्ठ नागरिक एल्डरलाइन', ur: 'سینئر سٹیزن ایلڈر لائن' }, number: '14567', category: 'Senior Citizen', available: '8 AM - 8 PM', desc: 'Elderly medical aid, shelter & care guidance' }
];

// Organ Donation Guidance
export const ORGAN_DONATION_GUIDE: OrganDonationGuide = {
  registryName: {
    en: 'National Organ and Tissue Transplant Organisation (NOTTO)',
    hi: 'राष्ट्रीय अंग एवं ऊतक प्रत्यारोपण संगठन (NOTTO)',
    ur: 'نیشنل آرگن اینڈ ٹشو ٹرانسپلانٹ آرگنائزیشن'
  },
  nodalAgency: 'Directorate General of Health Services, MoHFW, Govt of India',
  helplineNumber: '1800-11-4770 (Toll Free 24x7 Organ Pledge Helpline)',
  officialWebsite: 'https://notto.mohfw.gov.in',
  processSteps: [
    { en: '1. Register online pledge on NOTTO portal or via Aadhaar linked form', hi: '1. NOTTO पोर्टल पर ऑनलाइन ऑर्गन प्लेज रजिस्टर करें', ur: '1. ناٹو پورٹل پر آن لائن عزم رجسٹر کریں' },
    { en: '2. Obtain official NOTTO Organ Donor Card', hi: '2. आधिकारिक ऑर्गन डोनर कार्ड प्राप्त करें', ur: '2. آفیشل آرگن ڈونر کارڈ حاصل کریں' },
    { en: '3. Inform family members about your organ donation wish', hi: '3. अपने परिवार को अपनी अंगदान इच्छा के बारे में सूचित करें', ur: '3. اپنے اہل خانہ کو آگاہ کریں' }
  ],
  empaneledTransplantCenters: [
    { hospitalName: { en: 'AIIMS New Delhi', hi: 'एम्स नई दिल्ली', ur: 'ایمز نئی دہلی' }, city: 'New Delhi', organTypes: ['Kidney', 'Liver', 'Heart', 'Cornea', 'Bone Marrow'] },
    { hospitalName: { en: 'Yenepoya Medical College Hospital', hi: 'येनेपोया अस्पताल', ur: 'ینیپویا ہسپتال' }, city: 'Mangaluru', organTypes: ['Kidney', 'Liver'] },
    { hospitalName: { en: 'SMS Medical College Hospital', hi: 'एसएमएस अस्पताल जयपुर', ur: 'ایس ایم ایس جے پور' }, city: 'Jaipur', organTypes: ['Kidney', 'Heart', 'Cornea'] }
  ]
};
