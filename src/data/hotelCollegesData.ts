export interface HotelCollegeProfile {
  id: string;
  name: string;
  logoUrl: string;
  coverImageUrl: string;
  campusGallery: string[];
  state: string;
  district: string;
  city: string;
  address: string;
  googleMapsUrl: string;
  website: string;
  admissionPortalUrl: string;
  counsellingPortalUrl: string;
  universityAffiliation: string;
  nchmctAffiliated: boolean;
  aicteApproved: boolean;
  ugcRecognized: boolean;
  naacGrade: string;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Deemed University' | 'Minority Institution';
  isMinorityInstitution: boolean;
  programmes: string[];
  specializations: string[];
  admissionDetails: {
    eligibility: string;
    entranceExams: string[];
    meritBasedAdmission: boolean;
    managementQuota: boolean;
    admissionProcess: string;
    admissionLink: string;
    counsellingLink: string;
  };
  trainingFacilities: string[];
  industryTraining: {
    industrialTrainingDuration: string;
    hotelInternship: string;
    restaurantInternship: boolean;
    cruiseInternship: boolean;
    internationalInternship: boolean;
    airportHospitalityTraining: boolean;
    industryCollaboration: string;
    studentExchange: boolean;
    entrepreneurshipCell: boolean;
  };
  placement: {
    hasPlacementCell: boolean;
    hotelPlacements: boolean;
    cruiseLinePlacements: boolean;
    airlineHospitalityPlacements: boolean;
    restaurantPlacements: boolean;
    eventIndustryPlacements: boolean;
    tourismIndustryPlacements: boolean;
    highestPackage: string;
    averagePackage: string;
    topRecruiters: string[];
    internationalPlacementSupport: boolean;
  };
  financialInfo: {
    tuitionFees: string;
    hostelFees: string;
    uniformCharges: string;
    trainingKitCharges: string;
    govtScholarships: boolean;
    minorityScholarships: boolean;
    meritScholarships: boolean;
    loanAssistance: boolean;
  };
  faculty: {
    principal: string;
    director: string;
    facultyStrength: number;
    studentFacultyRatio: string;
    executiveChefsCount: number;
    industryExperts: number;
    visitingFacultyCount: number;
  };
  contact: {
    phone: string;
    email: string;
    admissionOfficeContact: string;
    socialMediaLinks: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
  lastVerifiedDate: string;
}

export const HOTEL_COLLEGES: HotelCollegeProfile[] = [
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-varanasi-1",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Hospitality Zone, Tourism Highway, Varanasi, Varanasi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Varanasi+Varanasi",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-varanasi.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-varanasi.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1985,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Sc Hospitality",
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service",
      "MBA Hospitality Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Front Office",
      "MBA Tourism Management",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Revenue Management",
      "Hospitality Management",
      "Bakery & Confectionery",
      "Airline Hospitality",
      "Housekeeping",
      "Food Production"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-varanasi.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Training Kitchen",
      "Conference Hall",
      "Computer Laboratory",
      "Advanced Kitchen",
      "Restaurant Laboratory",
      "Auditorium",
      "Front Office Laboratory",
      "Bakery Laboratory",
      "Language Laboratory",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "Emirates Flight Catering",
        "The Oberoi Group",
        "Carnival Cruise Line",
        "Marriott International",
        "Leela Palaces, Hotels and Resorts",
        "Hyatt Hotels Corporation",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 28,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 12,
      "industryExperts": 8,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 9855493105",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-varanasi.org",
      "admissionOfficeContact": "+91 9755152489",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-varanasi",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-varanasi",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-varanasi"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini-2",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Hospitality Zone, Tourism Highway, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Rohini+Rohini",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Food Production",
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Food Production",
      "Tourism Management",
      "Hotel Operations",
      "Bakery & Confectionery",
      "Front Office",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Mock Hotel Rooms",
      "Training Kitchen",
      "Sports",
      "Medical Facility",
      "Housekeeping Laboratory",
      "Wi-Fi Campus",
      "Language Laboratory",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Marriott International",
        "SOTC Travel",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 44,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 7,
      "industryExperts": 14,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9879432805",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini.org",
      "admissionOfficeContact": "+91 8500569100",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rohini"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-ooty-3",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Ooty",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Nilgiris",
    "city": "Ooty",
    "address": "Hospitality Zone, Tourism Highway, Ooty, Nilgiris, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Ooty+Ooty",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-ooty.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-ooty.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1981,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Housekeeping",
      "B.Sc Hospitality & Hotel Administration",
      "M.Sc Hospitality",
      "Diploma in Front Office",
      "BBA Tourism Management",
      "MBA Hospitality Management",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Housekeeping",
      "Event Management",
      "Hospitality Marketing",
      "Front Office",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-ooty.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Wi-Fi Campus",
      "Hostel",
      "Bakery Laboratory",
      "Computer Laboratory",
      "Central Library",
      "Conference Hall",
      "Sports",
      "Seminar Hall",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "SOTC Travel",
        "Carnival Cruise Line",
        "Marriott International",
        "Radisson Hotel Group",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 53,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 9,
      "industryExperts": 10,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 9288321359",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-ooty.org",
      "admissionOfficeContact": "+91 7113165355",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-ooty",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-ooty",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-ooty"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-4",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Pusa New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Pusa New Delhi",
    "address": "Hospitality Zone, Tourism Highway, Pusa New Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Pusa+New+Delhi+Pusa New Delhi",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "MBA Hospitality Management",
      "Diploma in Culinary Arts",
      "Diploma in Front Office",
      "BBA Hospitality Management",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Front Office",
      "Restaurant Management",
      "Hospitality Marketing",
      "Sustainable Tourism",
      "Housekeeping",
      "Luxury Hotel Management",
      "Hospitality Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Computer Laboratory",
      "Sports",
      "Language Laboratory",
      "Front Office Laboratory",
      "Medical Facility",
      "Mock Hotel Rooms",
      "Wi-Fi Campus",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "The Oberoi Group",
        "Taj Hotels Palaces Resorts Safaris",
        "SOTC Travel",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 37,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 10,
      "industryExperts": 17,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 8952656107",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi.org",
      "admissionOfficeContact": "+91 9180977834",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-lajpat-nagar-5",
    "name": "Food Craft Institute (FCI), Lajpat Nagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "Lajpat Nagar",
    "address": "Hospitality Zone, Tourism Highway, Lajpat Nagar, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Lajpat+Nagar+Lajpat Nagar",
    "website": "https://food-craft-institute-fci-lajpat-nagar.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-lajpat-nagar.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2019,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Hospitality Management",
      "MBA Tourism Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Event Management",
      "Airline Hospitality",
      "Tourism Management",
      "Cruise Hospitality",
      "Hotel Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-lajpat-nagar.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Restaurant Laboratory",
      "Computer Laboratory",
      "Auditorium",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "Leela Palaces, Hotels and Resorts",
        "Royal Caribbean Cruise Line",
        "Hyatt Hotels Corporation",
        "Marriott International",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 27,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 6,
      "industryExperts": 16,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9685999901",
      "email": "ihm@food-craft-institute-fci-lajpat-nagar.org",
      "admissionOfficeContact": "+91 7924866591",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-lajpat-nagar",
        "twitter": "https://twitter.com/food-craft-institute-fci-lajpat-nagar",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-lajpat-nagar"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-panaji-6",
    "name": "International Culinary Academy & Hotel Management, Panaji",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "North Goa",
    "city": "Panaji",
    "address": "Hospitality Zone, Tourism Highway, Panaji, North Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Panaji+Panaji",
    "website": "https://international-culinary-academy-and-hotel-management-panaji.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-panaji.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2018,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "MBA Hospitality Management",
      "Certificate in Food & Beverage Service",
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "MBA Tourism Management"
    ],
    "specializations": [
      "International Cuisine",
      "Event Management",
      "Travel Management",
      "Airline Hospitality",
      "Resort Management",
      "Front Office",
      "Bakery & Confectionery",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-panaji.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Language Laboratory",
      "Auditorium",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Computer Laboratory",
      "Central Library",
      "Sports",
      "Conference Hall",
      "Seminar Hall",
      "Hostel",
      "Housekeeping Laboratory",
      "Training Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Thomas Cook",
        "Lemon Tree Hotels",
        "SOTC Travel",
        "Hilton Hotels & Resorts",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 48,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 5,
      "industryExperts": 18,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 7592339568",
      "email": "ihm@international-culinary-academy-and-hotel-management-panaji.org",
      "admissionOfficeContact": "+91 9889939777",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-panaji",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-panaji",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-panaji"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-7",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Hospitality Zone, Tourism Highway, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Jaipur+Jaipur",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2000,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "BBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Culinary Arts",
      "BBA Tourism Management",
      "MBA Hospitality Management",
      "Certificate in Food & Beverage Service",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Luxury Hotel Management",
      "Hospitality Marketing",
      "Food Production",
      "Resort Management",
      "Event Management",
      "Airline Hospitality",
      "Revenue Management",
      "Sustainable Tourism",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Mock Hotel Rooms",
      "Advanced Kitchen",
      "Central Library",
      "Seminar Hall",
      "Training Kitchen",
      "Training Restaurant",
      "Sports",
      "Housekeeping Laboratory",
      "Language Laboratory",
      "Bakery Laboratory",
      "Hostel",
      "Digital Library",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 49,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 8,
      "industryExperts": 7,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 7131164354",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur.org",
      "admissionOfficeContact": "+91 7880341598",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot-8",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Hospitality Zone, Tourism Highway, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Rajkot+Rajkot",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1995,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Hospitality Management",
      "BBA Tourism Management",
      "BBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Housekeeping",
      "Diploma in Front Office",
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Cruise Hospitality",
      "Airline Hospitality",
      "Hotel Operations",
      "Tourism Management",
      "Housekeeping",
      "Sustainable Tourism",
      "Hospitality Marketing",
      "Food Production"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Advanced Kitchen",
      "Digital Library",
      "Language Laboratory",
      "Seminar Hall",
      "Computer Laboratory",
      "Housekeeping Laboratory",
      "Medical Facility",
      "Sports",
      "Training Kitchen",
      "Front Office Laboratory",
      "Training Restaurant",
      "Conference Hall",
      "Wi-Fi Campus"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "ITC Hotels",
        "Leela Palaces, Hotels and Resorts",
        "Radisson Hotel Group",
        "Carnival Cruise Line",
        "SOTC Travel",
        "Lemon Tree Hotels",
        "Hyatt Hotels Corporation",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 18,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 9,
      "industryExperts": 19,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9825518723",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot.org",
      "admissionOfficeContact": "+91 7707080333",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-rajkot"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad-9",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hospitality Zone, Tourism Highway, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Hyderabad+Hyderabad",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1963,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "BBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "MBA Tourism Management",
      "Diploma in Front Office",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Food & Beverage Service",
      "Cruise Hospitality",
      "International Cuisine",
      "Hotel Operations",
      "Sustainable Tourism",
      "Event Management",
      "Tourism Management",
      "Hospitality Management",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Housekeeping Laboratory",
      "Wi-Fi Campus",
      "Sports",
      "Seminar Hall",
      "Bakery Laboratory",
      "Training Restaurant",
      "Conference Hall",
      "Medical Facility",
      "Advanced Kitchen",
      "Language Laboratory",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "The Oberoi Group",
        "Leela Palaces, Hotels and Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Carnival Cruise Line",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 53,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 8,
      "industryExperts": 11,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9785664492",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad.org",
      "admissionOfficeContact": "+91 7594908065",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-hyderabad"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-10",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Hospitality Zone, Tourism Highway, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Jodhpur+Jodhpur",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1977,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "B.Sc Hospitality & Hotel Administration",
      "BBA Hospitality Management",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "International Cuisine",
      "Airline Hospitality",
      "Event Management",
      "Food Production",
      "Resort Management",
      "Sustainable Tourism",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Auditorium",
      "Medical Facility",
      "Language Laboratory",
      "Mock Hotel Rooms",
      "Central Library",
      "Computer Laboratory",
      "Training Kitchen",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Hyatt Hotels Corporation",
        "Carnival Cruise Line",
        "Royal Caribbean Cruise Line",
        "Emirates Flight Catering",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 42,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 6,
      "industryExperts": 12,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 8513142893",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-.org",
      "admissionOfficeContact": "+91 8281952740",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jodhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-agra-11",
    "name": "Food Craft Institute (FCI), Agra",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Agra",
    "city": "Agra",
    "address": "Hospitality Zone, Tourism Highway, Agra, Agra, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Agra+Agra",
    "website": "https://food-craft-institute-fci-agra-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-agra-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1977,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Hospitality Management",
      "BBA Hospitality Management",
      "Diploma in Housekeeping",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Luxury Hotel Management",
      "Front Office",
      "Sustainable Tourism",
      "Revenue Management",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Hospitality Management",
      "Resort Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-agra-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Housekeeping Laboratory",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Hostel",
      "Transport",
      "Seminar Hall",
      "Digital Library",
      "Auditorium",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Radisson Hotel Group",
        "Carnival Cruise Line",
        "Emirates Flight Catering",
        "ITC Hotels",
        "SOTC Travel",
        "Thomas Cook",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 39,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 5,
      "industryExperts": 9,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 7919466215",
      "email": "ihm@food-craft-institute-fci-agra-.org",
      "admissionOfficeContact": "+91 8027277907",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-agra-",
        "twitter": "https://twitter.com/food-craft-institute-fci-agra-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-agra-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-kolkata-12",
    "name": "International Culinary Academy & Hotel Management, Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Hospitality Zone, Tourism Highway, Kolkata, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Kolkata+Kolkata",
    "website": "https://international-culinary-academy-and-hotel-management-kolkata-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-kolkata-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2013,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "Diploma in Food Production",
      "BBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Restaurant Management",
      "Revenue Management",
      "Food Production",
      "Travel Management",
      "Food & Beverage Service",
      "Resort Management",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-kolkata-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Language Laboratory",
      "Front Office Laboratory",
      "Training Restaurant",
      "Auditorium",
      "Housekeeping Laboratory",
      "Advanced Kitchen",
      "Conference Hall",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Emirates Flight Catering",
        "Marriott International",
        "Royal Caribbean Cruise Line",
        "Carnival Cruise Line",
        "Radisson Hotel Group",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 22,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 6,
      "industryExperts": 12,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 8028188916",
      "email": "ihm@international-culinary-academy-and-hotel-management-kolkata-.org",
      "admissionOfficeContact": "+91 8082487205",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-kolkata-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-kolkata-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-kolkata-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-porda-13",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Porda",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Porda",
    "address": "Hospitality Zone, Tourism Highway, Porda, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Porda+Porda",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-porda-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-porda-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1997,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Tourism Management",
      "Housekeeping",
      "Revenue Management",
      "Bakery & Confectionery",
      "Luxury Hotel Management",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-porda-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Restaurant Laboratory",
      "Central Library",
      "Bakery Laboratory",
      "Advanced Kitchen",
      "Digital Library",
      "Hostel",
      "Front Office Laboratory",
      "Training Kitchen",
      "Language Laboratory",
      "Housekeeping Laboratory",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts",
        "Lemon Tree Hotels",
        "Taj Hotels Palaces Resorts Safaris",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 52,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 8,
      "industryExperts": 15,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 9636287311",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-porda-.org",
      "admissionOfficeContact": "+91 8376256171",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-porda-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-porda-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-porda-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-14",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Hospitality Zone, Tourism Highway, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Rohini+Rohini",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1994,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Housekeeping",
      "MBA Tourism Management",
      "Diploma in Culinary Arts",
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Revenue Management",
      "Luxury Hotel Management",
      "Front Office",
      "Restaurant Management",
      "Event Management",
      "Resort Management",
      "Hospitality Marketing",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Seminar Hall",
      "Medical Facility",
      "Mock Hotel Rooms",
      "Bakery Laboratory",
      "Computer Laboratory",
      "Auditorium",
      "Restaurant Laboratory",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Carnival Cruise Line",
        "The Oberoi Group",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 19,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 6,
      "industryExperts": 13,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8761750996",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-.org",
      "admissionOfficeContact": "+91 9726484184",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rohini-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-vadodara-15",
    "name": "Food Craft Institute (FCI), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Vadodara+Vadodara",
    "website": "https://food-craft-institute-fci-vadodara-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-vadodara-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2004,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Culinary Arts",
      "MBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "Diploma in Bakery & Confectionery",
      "BBA Tourism Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Hospitality Management",
      "Luxury Hotel Management",
      "Hospitality Marketing",
      "Airline Hospitality",
      "International Cuisine",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-vadodara-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Conference Hall",
      "Training Restaurant",
      "Seminar Hall",
      "Advanced Kitchen",
      "Transport",
      "Restaurant Laboratory",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Royal Caribbean Cruise Line",
        "Thomas Cook",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 39,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 6,
      "industryExperts": 7,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 8916640162",
      "email": "ihm@food-craft-institute-fci-vadodara-.org",
      "admissionOfficeContact": "+91 7538229354",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-vadodara-",
        "twitter": "https://twitter.com/food-craft-institute-fci-vadodara-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-mysore-16",
    "name": "National College of Hotel Management & Catering Technology, Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Hospitality Zone, Tourism Highway, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Mysore+Mysore",
    "website": "https://national-college-of-hotel-management-and-catering-technology-mysore-.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-mysore-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1964,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Tourism Management",
      "MBA Tourism Management",
      "Diploma in Food Production",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Hospitality Management",
      "Diploma in Bakery & Confectionery",
      "Certificate in Food & Beverage Service",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Hospitality Management",
      "Cruise Hospitality",
      "Front Office",
      "Tourism Management",
      "Luxury Hotel Management",
      "Sustainable Tourism",
      "Bakery & Confectionery",
      "Hotel Operations",
      "Airline Hospitality",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-mysore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Bakery Laboratory",
      "Central Library",
      "Language Laboratory",
      "Seminar Hall",
      "Advanced Kitchen",
      "Front Office Laboratory",
      "Computer Laboratory",
      "Wi-Fi Campus",
      "Sports",
      "Auditorium",
      "Conference Hall",
      "Training Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Lemon Tree Hotels",
        "Taj Hotels Palaces Resorts Safaris",
        "Hyatt Hotels Corporation",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 34,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 10,
      "industryExperts": 7,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 8809331905",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-mysore-.org",
      "admissionOfficeContact": "+91 8984900133",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-mysore-",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-mysore-",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-rohini-17",
    "name": "Food Craft Institute (FCI), Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Hospitality Zone, Tourism Highway, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Rohini+Rohini",
    "website": "https://food-craft-institute-fci-rohini-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-rohini-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 2007,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Food Production",
      "MBA Hospitality Management",
      "Diploma in Front Office",
      "Diploma in Bakery & Confectionery",
      "BBA Tourism Management",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Food & Beverage Service",
      "Restaurant Management",
      "Cruise Hospitality",
      "Front Office"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-rohini-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Training Restaurant",
      "Sports",
      "Wi-Fi Campus",
      "Advanced Kitchen",
      "Restaurant Laboratory",
      "Conference Hall",
      "Central Library",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Hostel",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Radisson Hotel Group",
        "SOTC Travel",
        "MakeMyTrip",
        "Emirates Flight Catering"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 45,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 4,
      "industryExperts": 16,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 8227776080",
      "email": "ihm@food-craft-institute-fci-rohini-.org",
      "admissionOfficeContact": "+91 8210089715",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-rohini-",
        "twitter": "https://twitter.com/food-craft-institute-fci-rohini-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-rohini-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-18",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Hospitality Zone, Tourism Highway, Varanasi, Varanasi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Varanasi+Varanasi",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2004,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Front Office",
      "Diploma in Housekeeping",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Certificate in Food & Beverage Service",
      "MBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Revenue Management",
      "Airline Hospitality",
      "Luxury Hotel Management",
      "Bakery & Confectionery",
      "Housekeeping",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Language Laboratory",
      "Conference Hall",
      "Digital Library",
      "Mock Hotel Rooms",
      "Training Kitchen",
      "Auditorium",
      "Seminar Hall",
      "Front Office Laboratory",
      "Bakery Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "Leela Palaces, Hotels and Resorts",
        "ITC Hotels",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 41,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 4,
      "industryExperts": 16,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9517629093",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-.org",
      "admissionOfficeContact": "+91 9006674374",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-varanasi-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-19",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Hospitality Zone, Tourism Highway, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Warangal+Warangal",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 2006,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "MBA Tourism Management",
      "BBA Hospitality Management",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Culinary Arts",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Food & Beverage Service",
      "Luxury Hotel Management",
      "Resort Management",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Housekeeping Laboratory",
      "Hostel",
      "Auditorium",
      "Transport",
      "Bakery Laboratory",
      "Training Restaurant",
      "Conference Hall",
      "Sports",
      "Wi-Fi Campus"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Thomas Cook",
        "Hyatt Hotels Corporation",
        "Lemon Tree Hotels",
        "The Oberoi Group",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 23,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 6,
      "industryExperts": 11,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 8442951061",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.org",
      "admissionOfficeContact": "+91 9876386963",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-20",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Hospitality Zone, Tourism Highway, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Siliguri+Siliguri",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2019,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Hospitality Management",
      "MBA Tourism Management",
      "Diploma in Food Production",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "Diploma in Housekeeping",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Bakery & Confectionery",
      "Travel Management",
      "Hospitality Marketing",
      "Resort Management",
      "International Cuisine",
      "Food & Beverage Service",
      "Hospitality Management",
      "Food Production",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Training Kitchen",
      "Bakery Laboratory",
      "Seminar Hall",
      "Transport",
      "Digital Library",
      "Medical Facility",
      "Hostel",
      "Housekeeping Laboratory",
      "Advanced Kitchen",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Lemon Tree Hotels",
        "Leela Palaces, Hotels and Resorts",
        "Emirates Flight Catering",
        "Radisson Hotel Group",
        "Carnival Cruise Line",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 41,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 10,
      "industryExperts": 18,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9894215862",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-.org",
      "admissionOfficeContact": "+91 7104691493",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-hyderabad-21",
    "name": "International Culinary Academy & Hotel Management, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hospitality Zone, Tourism Highway, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Hyderabad+Hyderabad",
    "website": "https://international-culinary-academy-and-hotel-management-hyderabad-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-hyderabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Tourism Management",
      "M.Sc Hospitality",
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Hospitality Marketing",
      "Housekeeping",
      "Cruise Hospitality",
      "Bakery & Confectionery",
      "Luxury Hotel Management",
      "Resort Management",
      "Event Management",
      "Food Production",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-hyderabad-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Conference Hall",
      "Front Office Laboratory",
      "Advanced Kitchen",
      "Bakery Laboratory",
      "Sports",
      "Mock Hotel Rooms",
      "Restaurant Laboratory",
      "Computer Laboratory",
      "Language Laboratory",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "SOTC Travel",
        "ITC Hotels",
        "Carnival Cruise Line",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 53,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 9,
      "industryExperts": 13,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 8110650533",
      "email": "ihm@international-culinary-academy-and-hotel-management-hyderabad-.org",
      "admissionOfficeContact": "+91 7645791034",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-hyderabad-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-hyderabad-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-hyderabad-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-thane-22",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Thane",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Thane",
    "city": "Thane",
    "address": "Hospitality Zone, Tourism Highway, Thane, Thane, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Thane+Thane",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-thane-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-thane-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1965,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MHM (Master of Hotel Management)",
      "Diploma in Culinary Arts",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Housekeeping",
      "Hospitality Marketing",
      "Tourism Management",
      "Event Management",
      "Restaurant Management",
      "Sustainable Tourism",
      "Luxury Hotel Management",
      "Food Production",
      "Hospitality Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-thane-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Training Kitchen",
      "Sports",
      "Advanced Kitchen",
      "Housekeeping Laboratory",
      "Central Library",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Carnival Cruise Line",
        "Radisson Hotel Group",
        "Thomas Cook",
        "Hyatt Hotels Corporation",
        "ITC Hotels",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 44,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 9,
      "industryExperts": 6,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 8354524501",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-thane-.org",
      "admissionOfficeContact": "+91 7685213221",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-thane-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-thane-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-thane-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-23",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Margao",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Margao",
    "address": "Hospitality Zone, Tourism Highway, Margao, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Margao+Margao",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1991,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Housekeeping",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "International Cuisine",
      "Bakery & Confectionery",
      "Front Office",
      "Resort Management",
      "Hotel Operations",
      "Tourism Management",
      "Housekeeping",
      "Revenue Management",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Auditorium",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Language Laboratory",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Training Restaurant",
      "Restaurant Laboratory",
      "Digital Library",
      "Wi-Fi Campus",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Marriott International",
        "Carnival Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "SOTC Travel"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 52,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 11,
      "industryExperts": 14,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8886887247",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-.org",
      "admissionOfficeContact": "+91 7468818270",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-margao-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-manipal-24",
    "name": "Food Craft Institute (FCI), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Manipal+Manipal",
    "website": "https://food-craft-institute-fci-manipal-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-manipal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1988,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Culinary Arts",
      "M.Sc Hospitality",
      "Diploma in Housekeeping",
      "Diploma in Food Production",
      "Certificate in Food & Beverage Service",
      "MHM (Master of Hotel Management)",
      "BBA Hospitality Management",
      "MBA Hospitality Management"
    ],
    "specializations": [
      "Revenue Management",
      "Food & Beverage Service",
      "Cruise Hospitality",
      "International Cuisine",
      "Food Production",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Language Laboratory",
      "Wi-Fi Campus",
      "Mock Hotel Rooms",
      "Medical Facility",
      "Housekeeping Laboratory",
      "Transport",
      "Training Restaurant",
      "Restaurant Laboratory",
      "Digital Library",
      "Training Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Thomas Cook",
        "AccorHotels (Novotel, Sofitel)",
        "SOTC Travel",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 23,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 4,
      "industryExperts": 12,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8195938069",
      "email": "ihm@food-craft-institute-fci-manipal-.org",
      "admissionOfficeContact": "+91 7728673744",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-manipal-",
        "twitter": "https://twitter.com/food-craft-institute-fci-manipal-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-25",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Surat",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Surat",
    "city": "Surat",
    "address": "Hospitality Zone, Tourism Highway, Surat, Surat, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Surat+Surat",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1975,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Hospitality Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MHM (Master of Hotel Management)",
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "International Cuisine",
      "Resort Management",
      "Travel Management",
      "Airline Hospitality",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Training Kitchen",
      "Restaurant Laboratory",
      "Computer Laboratory",
      "Sports",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Medical Facility",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "MakeMyTrip",
        "Hyatt Hotels Corporation",
        "Lemon Tree Hotels",
        "AccorHotels (Novotel, Sofitel)",
        "The Oberoi Group",
        "Marriott International",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 32,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 7,
      "industryExperts": 12,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 7232815105",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-.org",
      "admissionOfficeContact": "+91 9150355839",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-surat-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-26",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Hospitality Zone, Tourism Highway, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Bengaluru+Bengaluru",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 2018,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Front Office",
      "Diploma in Culinary Arts",
      "Diploma in Housekeeping",
      "B.Sc Hospitality & Hotel Administration",
      "MBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "MBA Hospitality Management"
    ],
    "specializations": [
      "Airline Hospitality",
      "Resort Management",
      "Luxury Hotel Management",
      "Revenue Management",
      "Front Office",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Language Laboratory",
      "Wi-Fi Campus",
      "Training Restaurant",
      "Hostel",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Conference Hall",
      "Transport",
      "Auditorium",
      "Restaurant Laboratory",
      "Seminar Hall",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Marriott International",
        "The Oberoi Group",
        "Carnival Cruise Line",
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 41,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 5,
      "industryExperts": 12,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 7522133797",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.org",
      "admissionOfficeContact": "+91 9424155389",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-27",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Pusa New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Pusa New Delhi",
    "address": "Hospitality Zone, Tourism Highway, Pusa New Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Pusa+New+Delhi+Pusa New Delhi",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1975,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "Hospitality Management",
      "Food Production",
      "Hotel Operations",
      "Hospitality Marketing",
      "Resort Management",
      "Front Office",
      "Revenue Management",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Training Kitchen",
      "Hostel",
      "Wi-Fi Campus",
      "Digital Library",
      "Advanced Kitchen",
      "Bakery Laboratory",
      "Computer Laboratory",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "ITC Hotels",
        "Marriott International",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 26,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 11,
      "industryExperts": 14,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 7561998511",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.org",
      "admissionOfficeContact": "+91 8588008934",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-28",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Hospitality Zone, Tourism Highway, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Rajkot+Rajkot",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2003,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Front Office",
      "MBA Tourism Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "M.Sc Hospitality",
      "BBA Hospitality Management",
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Resort Management",
      "Housekeeping",
      "Hotel Operations",
      "Hospitality Management",
      "Revenue Management",
      "Travel Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Hostel",
      "Conference Hall",
      "Seminar Hall",
      "Bakery Laboratory",
      "Auditorium",
      "Medical Facility",
      "Training Restaurant",
      "Digital Library",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Central Library",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Carnival Cruise Line",
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts",
        "The Oberoi Group",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 55,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 4,
      "industryExperts": 18,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9366250155",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.org",
      "admissionOfficeContact": "+91 9684171937",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-durgapur-29",
    "name": "International Culinary Academy & Hotel Management, Durgapur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "city": "Durgapur",
    "address": "Hospitality Zone, Tourism Highway, Durgapur, Paschim Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Durgapur+Durgapur",
    "website": "https://international-culinary-academy-and-hotel-management-durgapur-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-durgapur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1998,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "MBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Culinary Arts"
    ],
    "specializations": [
      "Restaurant Management",
      "Front Office",
      "Food & Beverage Service",
      "Housekeeping",
      "Sustainable Tourism",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-durgapur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Mock Hotel Rooms",
      "Bakery Laboratory",
      "Transport",
      "Training Kitchen",
      "Digital Library",
      "Sports",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Marriott International",
        "Taj Hotels Palaces Resorts Safaris",
        "AccorHotels (Novotel, Sofitel)",
        "The Oberoi Group",
        "SOTC Travel",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 40,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 6,
      "industryExperts": 10,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 8264058914",
      "email": "ihm@international-culinary-academy-and-hotel-management-durgapur-.org",
      "admissionOfficeContact": "+91 7980107220",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-durgapur-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-durgapur-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-durgapur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-30",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Prayagraj",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "city": "Prayagraj",
    "address": "Hospitality Zone, Tourism Highway, Prayagraj, Prayagraj, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Prayagraj+Prayagraj",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "Certificate in Food & Beverage Service",
      "Diploma in Housekeeping",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Bakery & Confectionery",
      "Resort Management",
      "Cruise Hospitality",
      "Food Production",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Housekeeping Laboratory",
      "Conference Hall",
      "Restaurant Laboratory",
      "Central Library",
      "Hostel",
      "Front Office Laboratory",
      "Sports",
      "Wi-Fi Campus",
      "Language Laboratory",
      "Transport",
      "Medical Facility",
      "Digital Library",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "MakeMyTrip",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 43,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 12,
      "industryExperts": 11,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9688246814",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-.org",
      "admissionOfficeContact": "+91 9825939260",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-prayagraj-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-31",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Navi Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Thane",
    "city": "Navi Mumbai",
    "address": "Hospitality Zone, Tourism Highway, Navi Mumbai, Thane, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Navi+Mumbai+Navi Mumbai",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1975,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Tourism Management",
      "BBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Front Office",
      "Diploma in Culinary Arts"
    ],
    "specializations": [
      "Hospitality Management",
      "Travel Management",
      "Food & Beverage Service",
      "Tourism Management",
      "Housekeeping",
      "Front Office",
      "Hospitality Marketing",
      "Revenue Management",
      "Bakery & Confectionery",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Language Laboratory",
      "Advanced Kitchen",
      "Medical Facility",
      "Wi-Fi Campus",
      "Sports",
      "Training Kitchen",
      "Bakery Laboratory",
      "Transport",
      "Mock Hotel Rooms",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "ITC Hotels",
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "Radisson Hotel Group",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 32,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 5,
      "industryExperts": 8,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 7979390759",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-.org",
      "admissionOfficeContact": "+91 7792503432",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-navi-mumbai-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-gwalior-32",
    "name": "National College of Hotel Management & Catering Technology, Gwalior",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "city": "Gwalior",
    "address": "Hospitality Zone, Tourism Highway, Gwalior, Gwalior, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Gwalior+Gwalior",
    "website": "https://national-college-of-hotel-management-and-catering-technology-gwalior-.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-gwalior-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1984,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management (BHM)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Hotel Operations",
      "Event Management",
      "Hospitality Marketing",
      "Resort Management",
      "Housekeeping",
      "International Cuisine",
      "Front Office",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-gwalior-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Kitchen",
      "Sports",
      "Conference Hall",
      "Language Laboratory",
      "Medical Facility",
      "Wi-Fi Campus",
      "Digital Library",
      "Bakery Laboratory",
      "Front Office Laboratory",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Hyatt Hotels Corporation",
        "Taj Hotels Palaces Resorts Safaris",
        "The Oberoi Group",
        "Lemon Tree Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 49,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 11,
      "industryExperts": 19,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 9854220818",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-gwalior-.org",
      "admissionOfficeContact": "+91 7797243572",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-gwalior-",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-gwalior-",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-gwalior-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-warangal-33",
    "name": "Food Craft Institute (FCI), Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Hospitality Zone, Tourism Highway, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Warangal+Warangal",
    "website": "https://food-craft-institute-fci-warangal-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-warangal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 2018,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Housekeeping",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Food Production",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Airline Hospitality",
      "Luxury Hotel Management",
      "Travel Management",
      "Hospitality Management",
      "Sustainable Tourism",
      "Food & Beverage Service",
      "Hospitality Marketing",
      "Bakery & Confectionery",
      "Cruise Hospitality",
      "Hotel Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-warangal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Sports",
      "Training Kitchen",
      "Wi-Fi Campus",
      "Computer Laboratory",
      "Hostel",
      "Training Restaurant",
      "Transport",
      "Mock Hotel Rooms",
      "Language Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Marriott International",
        "Lemon Tree Hotels",
        "ITC Hotels",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 46,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 12,
      "industryExperts": 10,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9035816396",
      "email": "ihm@food-craft-institute-fci-warangal-.org",
      "admissionOfficeContact": "+91 7187913290",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-warangal-",
        "twitter": "https://twitter.com/food-craft-institute-fci-warangal-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-warangal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-vadodara-34",
    "name": "Food Craft Institute (FCI), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Vadodara+Vadodara",
    "website": "https://food-craft-institute-fci-vadodara-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-vadodara-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1963,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Tourism Management",
      "MBA Hospitality Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Culinary Arts",
      "Diploma in Food Production",
      "BBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Airline Hospitality",
      "Luxury Hotel Management",
      "Cruise Hospitality",
      "Bakery & Confectionery",
      "Housekeeping",
      "Front Office"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-vadodara-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Advanced Kitchen",
      "Seminar Hall",
      "Central Library",
      "Hostel",
      "Computer Laboratory",
      "Conference Hall",
      "Housekeeping Laboratory",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Auditorium",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "ITC Hotels",
        "Taj Hotels Palaces Resorts Safaris",
        "The Oberoi Group",
        "Royal Caribbean Cruise Line",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 20,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 10,
      "industryExperts": 11,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8897665567",
      "email": "ihm@food-craft-institute-fci-vadodara-.org",
      "admissionOfficeContact": "+91 8205353956",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-vadodara-",
        "twitter": "https://twitter.com/food-craft-institute-fci-vadodara-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-manipal-35",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Manipal+Manipal",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-manipal-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-manipal-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2014,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Bakery & Confectionery",
      "MBA Hospitality Management",
      "M.Sc Hospitality",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Hospitality Management",
      "Sustainable Tourism",
      "International Cuisine",
      "Event Management",
      "Cruise Hospitality",
      "Airline Hospitality",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Restaurant Laboratory",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Advanced Kitchen",
      "Sports",
      "Computer Laboratory",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "ITC Hotels",
        "Royal Caribbean Cruise Line",
        "Hilton Hotels & Resorts",
        "MakeMyTrip",
        "SOTC Travel"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 28,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 5,
      "industryExperts": 12,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 7113135303",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-manipal-.org",
      "admissionOfficeContact": "+91 8786482121",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-manipal-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-manipal-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-manipal-36",
    "name": "Food Craft Institute (FCI), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Manipal+Manipal",
    "website": "https://food-craft-institute-fci-manipal-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-manipal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1970,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "Diploma in Culinary Arts",
      "Diploma in Housekeeping",
      "MBA Hospitality Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Bakery & Confectionery",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Bakery & Confectionery",
      "Housekeeping",
      "Cruise Hospitality",
      "Hospitality Management",
      "Hotel Operations",
      "Resort Management",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Conference Hall",
      "Computer Laboratory",
      "Sports",
      "Mock Hotel Rooms",
      "Restaurant Laboratory",
      "Bakery Laboratory",
      "Transport",
      "Seminar Hall",
      "Central Library",
      "Medical Facility",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Lemon Tree Hotels",
        "The Oberoi Group",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 25,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 7,
      "industryExperts": 13,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9888512899",
      "email": "ihm@food-craft-institute-fci-manipal-.org",
      "admissionOfficeContact": "+91 9789861593",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-manipal-",
        "twitter": "https://twitter.com/food-craft-institute-fci-manipal-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-pune-37",
    "name": "International Culinary Academy & Hotel Management, Pune",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Hospitality Zone, Tourism Highway, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Pune+Pune",
    "website": "https://international-culinary-academy-and-hotel-management-pune-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-pune-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1997,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Tourism Management",
      "Diploma in Culinary Arts",
      "MBA Hospitality Management",
      "Diploma in Front Office",
      "Certificate in Food & Beverage Service",
      "MHM (Master of Hotel Management)",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "International Cuisine",
      "Travel Management",
      "Hospitality Management",
      "Airline Hospitality",
      "Food & Beverage Service",
      "Tourism Management",
      "Revenue Management",
      "Hotel Operations",
      "Luxury Hotel Management",
      "Resort Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-pune-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Auditorium",
      "Conference Hall",
      "Restaurant Laboratory",
      "Transport",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Front Office Laboratory",
      "Medical Facility",
      "Training Kitchen",
      "Hostel",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Carnival Cruise Line",
        "Leela Palaces, Hotels and Resorts",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 55,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 4,
      "industryExperts": 11,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9986254632",
      "email": "ihm@international-culinary-academy-and-hotel-management-pune-.org",
      "admissionOfficeContact": "+91 9447507746",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-pune-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-pune-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-pune-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-38",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Hospitality Zone, Tourism Highway, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Jodhpur+Jodhpur",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Front Office",
      "MHM (Master of Hotel Management)",
      "Certificate in Food & Beverage Service",
      "BBA Tourism Management",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Revenue Management",
      "Airline Hospitality",
      "Resort Management",
      "Hotel Operations",
      "Tourism Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Restaurant Laboratory",
      "Bakery Laboratory",
      "Front Office Laboratory",
      "Central Library",
      "Transport",
      "Advanced Kitchen",
      "Seminar Hall",
      "Sports",
      "Digital Library",
      "Hostel",
      "Conference Hall",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Lemon Tree Hotels",
        "The Oberoi Group",
        "Royal Caribbean Cruise Line",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 39,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 8,
      "industryExperts": 10,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 8457039673",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-.org",
      "admissionOfficeContact": "+91 9991292642",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-jodhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-chennai-39",
    "name": "Food Craft Institute (FCI), Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Hospitality Zone, Tourism Highway, Chennai, Chennai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Chennai+Chennai",
    "website": "https://food-craft-institute-fci-chennai-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-chennai-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2006,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management (BHM)",
      "Certificate in Food & Beverage Service",
      "BBA Tourism Management",
      "MBA Tourism Management",
      "M.Sc Hospitality",
      "Diploma in Culinary Arts",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Event Management",
      "Food & Beverage Service",
      "Luxury Hotel Management",
      "Hospitality Management",
      "Revenue Management",
      "Hospitality Marketing",
      "Front Office",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-chennai-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Bakery Laboratory",
      "Training Restaurant",
      "Front Office Laboratory",
      "Language Laboratory",
      "Mock Hotel Rooms",
      "Auditorium",
      "Housekeeping Laboratory",
      "Wi-Fi Campus",
      "Training Kitchen",
      "Medical Facility",
      "Digital Library",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "ITC Hotels",
        "The Oberoi Group",
        "MakeMyTrip",
        "Marriott International",
        "Taj Hotels Palaces Resorts Safaris",
        "Lemon Tree Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 20,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 12,
      "industryExperts": 19,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8159523579",
      "email": "ihm@food-craft-institute-fci-chennai-.org",
      "admissionOfficeContact": "+91 8532688086",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-chennai-",
        "twitter": "https://twitter.com/food-craft-institute-fci-chennai-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-chennai-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-40",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Vadodara+Vadodara",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1966,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "MBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "MHM (Master of Hotel Management)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Front Office",
      "Food Production",
      "Housekeeping",
      "International Cuisine",
      "Event Management",
      "Food & Beverage Service",
      "Sustainable Tourism",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Kitchen",
      "Mock Hotel Rooms",
      "Bakery Laboratory",
      "Digital Library",
      "Hostel",
      "Housekeeping Laboratory",
      "Language Laboratory",
      "Transport",
      "Advanced Kitchen",
      "Restaurant Laboratory",
      "Auditorium",
      "Wi-Fi Campus",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "AccorHotels (Novotel, Sofitel)",
        "Taj Hotels Palaces Resorts Safaris",
        "SOTC Travel",
        "MakeMyTrip",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 28,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 7,
      "industryExperts": 16,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 7086951098",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-.org",
      "admissionOfficeContact": "+91 7377724008",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-41",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Panaji",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "North Goa",
    "city": "Panaji",
    "address": "Hospitality Zone, Tourism Highway, Panaji, North Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Panaji+Panaji",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Culinary Arts",
      "BBA Hospitality Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Cruise Hospitality",
      "Hospitality Management",
      "Food & Beverage Service",
      "Restaurant Management",
      "Hospitality Marketing",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Bakery Laboratory",
      "Digital Library",
      "Language Laboratory",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Conference Hall",
      "Training Restaurant",
      "Front Office Laboratory",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Radisson Hotel Group",
        "Leela Palaces, Hotels and Resorts",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 38,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 10,
      "industryExperts": 11,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8182292894",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-.org",
      "admissionOfficeContact": "+91 7144232044",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-panaji-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-indore-42",
    "name": "International Culinary Academy & Hotel Management, Indore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Hospitality Zone, Tourism Highway, Indore, Indore, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Indore+Indore",
    "website": "https://international-culinary-academy-and-hotel-management-indore-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-indore-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1966,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "M.Sc Hospitality",
      "Diploma in Food Production",
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "International Cuisine",
      "Hospitality Management",
      "Food Production",
      "Sustainable Tourism",
      "Travel Management",
      "Housekeeping",
      "Cruise Hospitality",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-indore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Mock Hotel Rooms",
      "Conference Hall",
      "Restaurant Laboratory",
      "Training Restaurant",
      "Training Kitchen",
      "Hostel",
      "Digital Library",
      "Central Library",
      "Sports",
      "Wi-Fi Campus",
      "Medical Facility",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "SOTC Travel",
        "MakeMyTrip",
        "The Oberoi Group",
        "Radisson Hotel Group",
        "Lemon Tree Hotels",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 24,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 12,
      "industryExperts": 8,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 9399831847",
      "email": "ihm@international-culinary-academy-and-hotel-management-indore-.org",
      "admissionOfficeContact": "+91 9182297283",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-indore-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-indore-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-indore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-margao-43",
    "name": "National College of Hotel Management & Catering Technology, Margao",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Margao",
    "address": "Hospitality Zone, Tourism Highway, Margao, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Margao+Margao",
    "website": "https://national-college-of-hotel-management-and-catering-technology-margao-.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-margao-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2001,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "B.Sc Hospitality & Hotel Administration",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "Diploma in Bakery & Confectionery",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Food Production",
      "International Cuisine",
      "Cruise Hospitality",
      "Sustainable Tourism",
      "Bakery & Confectionery"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-margao-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Mock Hotel Rooms",
      "Sports",
      "Restaurant Laboratory",
      "Computer Laboratory",
      "Front Office Laboratory",
      "Training Restaurant",
      "Seminar Hall",
      "Conference Hall",
      "Hostel",
      "Housekeeping Laboratory",
      "Language Laboratory",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "ITC Hotels",
        "SOTC Travel",
        "Thomas Cook",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 26,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 5,
      "industryExperts": 17,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 9135065408",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-margao-.org",
      "admissionOfficeContact": "+91 8070209860",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-margao-",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-margao-",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-margao-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-44",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Hospitality Zone, Tourism Highway, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Coimbatore+Coimbatore",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Sc Hospitality",
      "Diploma in Culinary Arts",
      "Diploma in Front Office",
      "BBA Hospitality Management",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Event Management",
      "International Cuisine",
      "Housekeeping",
      "Sustainable Tourism",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Central Library",
      "Hostel",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Training Kitchen",
      "Computer Laboratory",
      "Medical Facility",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Marriott International",
        "Thomas Cook",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 32,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 10,
      "industryExperts": 11,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 8735171589",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-.org",
      "admissionOfficeContact": "+91 8932153452",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-coimbatore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-45",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Gwalior",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "city": "Gwalior",
    "address": "Hospitality Zone, Tourism Highway, Gwalior, Gwalior, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Gwalior+Gwalior",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1980,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Housekeeping",
      "BBA Tourism Management",
      "Diploma in Bakery & Confectionery",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Travel Management",
      "Revenue Management",
      "Hospitality Management",
      "Bakery & Confectionery",
      "Hotel Operations",
      "Hospitality Marketing",
      "Airline Hospitality",
      "Front Office",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Housekeeping Laboratory",
      "Auditorium",
      "Medical Facility",
      "Wi-Fi Campus",
      "Sports",
      "Mock Hotel Rooms",
      "Training Kitchen",
      "Computer Laboratory",
      "Training Restaurant",
      "Hostel",
      "Digital Library",
      "Conference Hall",
      "Transport"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "Radisson Hotel Group",
        "Hilton Hotels & Resorts",
        "Leela Palaces, Hotels and Resorts",
        "SOTC Travel",
        "AccorHotels (Novotel, Sofitel)",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 39,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 4,
      "industryExperts": 7,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 8847091551",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-.org",
      "admissionOfficeContact": "+91 9646403171",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-gwalior-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-bengaluru-46",
    "name": "Food Craft Institute (FCI), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Hospitality Zone, Tourism Highway, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Bengaluru+Bengaluru",
    "website": "https://food-craft-institute-fci-bengaluru-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-bengaluru-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2003,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Housekeeping",
      "Diploma in Front Office",
      "Diploma in Bakery & Confectionery",
      "M.Sc Hospitality",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Front Office",
      "Luxury Hotel Management",
      "Hospitality Marketing",
      "Cruise Hospitality",
      "Hotel Operations",
      "Restaurant Management",
      "Hospitality Management",
      "Revenue Management",
      "Event Management",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-bengaluru-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Advanced Kitchen",
      "Training Kitchen",
      "Training Restaurant",
      "Transport",
      "Mock Hotel Rooms",
      "Housekeeping Laboratory",
      "Seminar Hall",
      "Digital Library",
      "Language Laboratory",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Marriott International",
        "Emirates Flight Catering",
        "The Oberoi Group",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 45,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 8,
      "industryExperts": 19,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 9341508755",
      "email": "ihm@food-craft-institute-fci-bengaluru-.org",
      "admissionOfficeContact": "+91 9825194051",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-bengaluru-",
        "twitter": "https://twitter.com/food-craft-institute-fci-bengaluru-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-cochin-47",
    "name": "Food Craft Institute (FCI), Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Hospitality Zone, Tourism Highway, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Cochin+Cochin",
    "website": "https://food-craft-institute-fci-cochin-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-cochin-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1971,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Housekeeping",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Hotel Operations",
      "Food & Beverage Service",
      "Hospitality Management",
      "Restaurant Management",
      "Revenue Management",
      "Travel Management",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-cochin-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Advanced Kitchen",
      "Digital Library",
      "Training Kitchen",
      "Training Restaurant",
      "Medical Facility",
      "Conference Hall",
      "Wi-Fi Campus",
      "Mock Hotel Rooms",
      "Transport",
      "Restaurant Laboratory",
      "Bakery Laboratory",
      "Language Laboratory",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Marriott International",
        "Leela Palaces, Hotels and Resorts",
        "Hilton Hotels & Resorts",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 27,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 8,
      "industryExperts": 7,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 8784460476",
      "email": "ihm@food-craft-institute-fci-cochin-.org",
      "admissionOfficeContact": "+91 9794560634",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-cochin-",
        "twitter": "https://twitter.com/food-craft-institute-fci-cochin-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-cochin-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-ooty-48",
    "name": "International Culinary Academy & Hotel Management, Ooty",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Nilgiris",
    "city": "Ooty",
    "address": "Hospitality Zone, Tourism Highway, Ooty, Nilgiris, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Ooty+Ooty",
    "website": "https://international-culinary-academy-and-hotel-management-ooty-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-ooty-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1976,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Food Production",
      "BBA Tourism Management",
      "Diploma in Front Office",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Housekeeping",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "Revenue Management",
      "Food Production",
      "Tourism Management",
      "Sustainable Tourism",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-ooty-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Bakery Laboratory",
      "Digital Library",
      "Hostel",
      "Transport",
      "Advanced Kitchen",
      "Central Library",
      "Language Laboratory",
      "Auditorium",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "The Oberoi Group",
        "Hyatt Hotels Corporation",
        "Emirates Flight Catering",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 31,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 4,
      "industryExperts": 18,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9984843128",
      "email": "ihm@international-culinary-academy-and-hotel-management-ooty-.org",
      "admissionOfficeContact": "+91 9989014177",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-ooty-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-ooty-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-ooty-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-durgapur-49",
    "name": "Food Craft Institute (FCI), Durgapur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "city": "Durgapur",
    "address": "Hospitality Zone, Tourism Highway, Durgapur, Paschim Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Durgapur+Durgapur",
    "website": "https://food-craft-institute-fci-durgapur-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-durgapur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1978,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Food Production",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Luxury Hotel Management",
      "Resort Management",
      "Airline Hospitality",
      "Sustainable Tourism",
      "Restaurant Management",
      "Housekeeping",
      "Food Production",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-durgapur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Seminar Hall",
      "Training Restaurant",
      "Conference Hall",
      "Wi-Fi Campus",
      "Hostel",
      "Computer Laboratory",
      "Mock Hotel Rooms",
      "Digital Library",
      "Central Library",
      "Language Laboratory",
      "Auditorium",
      "Housekeeping Laboratory",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Thomas Cook",
        "Royal Caribbean Cruise Line",
        "SOTC Travel",
        "Taj Hotels Palaces Resorts Safaris",
        "Marriott International",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 38,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 6,
      "industryExperts": 7,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 7366011118",
      "email": "ihm@food-craft-institute-fci-durgapur-.org",
      "admissionOfficeContact": "+91 8260895672",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-durgapur-",
        "twitter": "https://twitter.com/food-craft-institute-fci-durgapur-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-durgapur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-50",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Hospitality Zone, Tourism Highway, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Warangal+Warangal",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1966,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MHM (Master of Hotel Management)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Restaurant Management",
      "Airline Hospitality",
      "Travel Management",
      "Cruise Hospitality",
      "Luxury Hotel Management",
      "Bakery & Confectionery"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Mock Hotel Rooms",
      "Front Office Laboratory",
      "Training Restaurant",
      "Hostel",
      "Restaurant Laboratory",
      "Seminar Hall",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering",
        "Thomas Cook",
        "Leela Palaces, Hotels and Resorts",
        "Hilton Hotels & Resorts",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 24,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 9,
      "industryExperts": 16,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 8156495536",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-.org",
      "admissionOfficeContact": "+91 8600459887",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-warangal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-51",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Hospitality Zone, Tourism Highway, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Bengaluru+Bengaluru",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "MBA Hospitality Management",
      "M.Sc Hospitality",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Event Management",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Travel Management",
      "Cruise Hospitality",
      "Restaurant Management",
      "Hospitality Management",
      "Tourism Management",
      "Hospitality Marketing",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Training Kitchen",
      "Transport",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Hostel",
      "Training Restaurant",
      "Sports",
      "Housekeeping Laboratory",
      "Bakery Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Royal Caribbean Cruise Line",
        "Lemon Tree Hotels",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 43,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 7,
      "industryExperts": 14,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 7566026872",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-.org",
      "admissionOfficeContact": "+91 9162848119",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-52",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Indore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Hospitality Zone, Tourism Highway, Indore, Indore, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Indore+Indore",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-.edu.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2011,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Food Production",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Hospitality Marketing",
      "Cruise Hospitality",
      "Tourism Management",
      "Hotel Operations",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Conference Hall",
      "Seminar Hall",
      "Hostel",
      "Training Restaurant",
      "Digital Library",
      "Advanced Kitchen",
      "Housekeeping Laboratory",
      "Mock Hotel Rooms",
      "Auditorium",
      "Sports",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "Radisson Hotel Group",
        "Hyatt Hotels Corporation",
        "Hilton Hotels & Resorts",
        "The Oberoi Group",
        "MakeMyTrip",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 20,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 4,
      "industryExperts": 19,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9009346837",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-.org",
      "admissionOfficeContact": "+91 9798990892",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-indore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-53",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Manipal+Manipal",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1985,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Certificate in Food & Beverage Service",
      "MHM (Master of Hotel Management)",
      "MBA Tourism Management",
      "Diploma in Culinary Arts",
      "Diploma in Bakery & Confectionery",
      "M.Sc Hospitality",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Restaurant Management",
      "Housekeeping",
      "Cruise Hospitality",
      "Food & Beverage Service",
      "Airline Hospitality",
      "Bakery & Confectionery",
      "Hotel Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Restaurant Laboratory",
      "Seminar Hall",
      "Advanced Kitchen",
      "Medical Facility",
      "Mock Hotel Rooms",
      "Wi-Fi Campus",
      "Bakery Laboratory",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Hyatt Hotels Corporation",
        "Leela Palaces, Hotels and Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Thomas Cook",
        "SOTC Travel",
        "Lemon Tree Hotels",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 54,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 7,
      "industryExperts": 16,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8152243958",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.org",
      "admissionOfficeContact": "+91 9943105887",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-54",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hospitality Zone, Tourism Highway, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Hyderabad+Hyderabad",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-.edu.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1972,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Food Production",
      "M.Sc Hospitality",
      "BBA Hospitality Management",
      "Diploma in Bakery & Confectionery",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Restaurant Management",
      "Travel Management",
      "Luxury Hotel Management",
      "Tourism Management",
      "Resort Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Conference Hall",
      "Training Kitchen",
      "Front Office Laboratory",
      "Seminar Hall",
      "Sports",
      "Hostel",
      "Mock Hotel Rooms",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "Hilton Hotels & Resorts",
        "SOTC Travel",
        "MakeMyTrip",
        "Royal Caribbean Cruise Line",
        "Hyatt Hotels Corporation",
        "Leela Palaces, Hotels and Resorts",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 51,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 10,
      "industryExperts": 8,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9948001974",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-.org",
      "admissionOfficeContact": "+91 8167512249",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-hyderabad-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-lajpat-nagar-55",
    "name": "National College of Hotel Management & Catering Technology, Lajpat Nagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "Lajpat Nagar",
    "address": "Hospitality Zone, Tourism Highway, Lajpat Nagar, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Lajpat+Nagar+Lajpat Nagar",
    "website": "https://national-college-of-hotel-management-and-catering-technology-lajpat-nagar-.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-lajpat-nagar-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1981,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Tourism Management",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "MBA Hospitality Management"
    ],
    "specializations": [
      "Airline Hospitality",
      "Hospitality Marketing",
      "Hospitality Management",
      "Travel Management",
      "Food Production",
      "Sustainable Tourism",
      "Housekeeping",
      "Event Management",
      "Food & Beverage Service",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-lajpat-nagar-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Sports",
      "Digital Library",
      "Front Office Laboratory",
      "Advanced Kitchen",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Language Laboratory",
      "Central Library",
      "Seminar Hall",
      "Transport",
      "Training Restaurant",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Lemon Tree Hotels",
        "Hyatt Hotels Corporation",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 47,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 12,
      "industryExperts": 8,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 7037452081",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-lajpat-nagar-.org",
      "admissionOfficeContact": "+91 9649875036",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-lajpat-nagar-",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-lajpat-nagar-",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-lajpat-nagar-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-jodhpur-56",
    "name": "International Culinary Academy & Hotel Management, Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Hospitality Zone, Tourism Highway, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Jodhpur+Jodhpur",
    "website": "https://international-culinary-academy-and-hotel-management-jodhpur-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-jodhpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1999,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "MBA Tourism Management",
      "Certificate in Food & Beverage Service",
      "M.Sc Hospitality",
      "Diploma in Front Office",
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management (BHM)",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Event Management",
      "Hotel Operations",
      "Housekeeping",
      "Travel Management",
      "International Cuisine",
      "Airline Hospitality",
      "Cruise Hospitality",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-jodhpur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Advanced Kitchen",
      "Housekeeping Laboratory",
      "Conference Hall",
      "Medical Facility",
      "Bakery Laboratory",
      "Language Laboratory",
      "Hostel",
      "Digital Library",
      "Training Restaurant",
      "Training Kitchen",
      "Transport",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "Hyatt Hotels Corporation",
        "Thomas Cook",
        "SOTC Travel",
        "Radisson Hotel Group",
        "Leela Palaces, Hotels and Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 53,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 10,
      "industryExperts": 17,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 7944582168",
      "email": "ihm@international-culinary-academy-and-hotel-management-jodhpur-.org",
      "admissionOfficeContact": "+91 8997977258",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-jodhpur-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-jodhpur-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-jodhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-cochin-57",
    "name": "Food Craft Institute (FCI), Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Hospitality Zone, Tourism Highway, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Cochin+Cochin",
    "website": "https://food-craft-institute-fci-cochin-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-cochin-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Food Production",
      "MHM (Master of Hotel Management)",
      "MBA Tourism Management",
      "M.Sc Hospitality",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Bakery & Confectionery",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Food Production",
      "Hospitality Management",
      "Restaurant Management",
      "Sustainable Tourism",
      "Revenue Management",
      "Hospitality Marketing",
      "Housekeeping",
      "Travel Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-cochin-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Housekeeping Laboratory",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Advanced Kitchen",
      "Auditorium",
      "Sports",
      "Conference Hall",
      "Central Library",
      "Transport",
      "Training Kitchen",
      "Wi-Fi Campus"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Carnival Cruise Line",
        "Marriott International",
        "Taj Hotels Palaces Resorts Safaris",
        "Radisson Hotel Group",
        "Leela Palaces, Hotels and Resorts",
        "Royal Caribbean Cruise Line",
        "The Oberoi Group",
        "SOTC Travel"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 53,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 9,
      "industryExperts": 13,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 8867910585",
      "email": "ihm@food-craft-institute-fci-cochin-.org",
      "admissionOfficeContact": "+91 9937940003",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-cochin-",
        "twitter": "https://twitter.com/food-craft-institute-fci-cochin-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-cochin-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-58",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Nashik",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nashik",
    "city": "Nashik",
    "address": "Hospitality Zone, Tourism Highway, Nashik, Nashik, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Nashik+Nashik",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "M.Sc Hospitality",
      "Diploma in Bakery & Confectionery",
      "MBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Airline Hospitality",
      "Hospitality Marketing",
      "Revenue Management",
      "Hotel Operations",
      "International Cuisine",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Wi-Fi Campus",
      "Conference Hall",
      "Front Office Laboratory",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Central Library",
      "Seminar Hall",
      "Restaurant Laboratory",
      "Auditorium",
      "Language Laboratory",
      "Transport",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Marriott International",
        "Hyatt Hotels Corporation",
        "AccorHotels (Novotel, Sofitel)",
        "Radisson Hotel Group",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 20,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 9,
      "industryExperts": 10,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9275182893",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-.org",
      "admissionOfficeContact": "+91 9140284501",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nashik-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-59",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Meerut",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "city": "Meerut",
    "address": "Hospitality Zone, Tourism Highway, Meerut, Meerut, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Meerut+Meerut",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1994,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "BBA Hospitality Management",
      "Bachelor of Hotel Management (BHM)",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Hospitality Marketing",
      "International Cuisine",
      "Hotel Operations",
      "Airline Hospitality",
      "Food & Beverage Service",
      "Front Office",
      "Travel Management",
      "Food Production"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Hostel",
      "Sports",
      "Central Library",
      "Digital Library",
      "Conference Hall",
      "Advanced Kitchen",
      "Seminar Hall",
      "Bakery Laboratory",
      "Housekeeping Laboratory",
      "Mock Hotel Rooms",
      "Training Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "SOTC Travel",
        "Thomas Cook",
        "Hilton Hotels & Resorts",
        "Carnival Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 37,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 5,
      "industryExperts": 18,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 7317240927",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-.org",
      "admissionOfficeContact": "+91 9369592980",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-meerut-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-vadodara-60",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Vadodara+Vadodara",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-vadodara-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-vadodara-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2013,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "M.Sc Hospitality",
      "BBA Tourism Management",
      "Diploma in Bakery & Confectionery",
      "MBA Hospitality Management",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "International Cuisine",
      "Food & Beverage Service",
      "Revenue Management",
      "Hospitality Marketing",
      "Hospitality Management",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-vadodara-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Computer Laboratory",
      "Sports",
      "Bakery Laboratory",
      "Restaurant Laboratory",
      "Medical Facility",
      "Digital Library",
      "Hostel",
      "Advanced Kitchen",
      "Front Office Laboratory",
      "Conference Hall",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "The Oberoi Group",
        "Emirates Flight Catering",
        "Royal Caribbean Cruise Line",
        "Thomas Cook",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 40,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 12,
      "industryExperts": 15,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 7902801120",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-vadodara-.org",
      "admissionOfficeContact": "+91 8662234620",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-vadodara-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-vadodara-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-trivandrum-61",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Hospitality Zone, Tourism Highway, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Trivandrum+Trivandrum",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2010,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Hospitality Management",
      "M.Sc Hospitality",
      "Diploma in Bakery & Confectionery",
      "BBA Tourism Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Housekeeping",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Hospitality Management",
      "Resort Management",
      "International Cuisine",
      "Restaurant Management",
      "Luxury Hotel Management",
      "Revenue Management",
      "Food Production",
      "Bakery & Confectionery"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Kitchen",
      "Central Library",
      "Wi-Fi Campus",
      "Conference Hall",
      "Transport",
      "Front Office Laboratory",
      "Computer Laboratory",
      "Advanced Kitchen",
      "Sports",
      "Restaurant Laboratory",
      "Bakery Laboratory",
      "Hostel",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Carnival Cruise Line",
        "Hilton Hotels & Resorts",
        "Taj Hotels Palaces Resorts Safaris",
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "Leela Palaces, Hotels and Resorts",
        "Emirates Flight Catering"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 20,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 12,
      "industryExperts": 14,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 9822371738",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-trivandrum-.org",
      "admissionOfficeContact": "+91 8241440655",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-trivandrum-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-trivandrum-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-siliguri-62",
    "name": "International Culinary Academy & Hotel Management, Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Hospitality Zone, Tourism Highway, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Siliguri+Siliguri",
    "website": "https://international-culinary-academy-and-hotel-management-siliguri-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-siliguri-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1971,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Culinary Arts",
      "Diploma in Front Office",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MBA Tourism Management",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "Cruise Hospitality",
      "Event Management",
      "Airline Hospitality",
      "Tourism Management",
      "Luxury Hotel Management",
      "Housekeeping",
      "Hotel Operations",
      "Front Office",
      "International Cuisine",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-siliguri-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Restaurant Laboratory",
      "Seminar Hall",
      "Advanced Kitchen",
      "Language Laboratory",
      "Mock Hotel Rooms",
      "Hostel",
      "Conference Hall",
      "Sports",
      "Auditorium",
      "Central Library",
      "Transport",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Lemon Tree Hotels",
        "Emirates Flight Catering",
        "Radisson Hotel Group",
        "Hyatt Hotels Corporation",
        "Marriott International",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 28,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 12,
      "industryExperts": 15,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9248648218",
      "email": "ihm@international-culinary-academy-and-hotel-management-siliguri-.org",
      "admissionOfficeContact": "+91 8924462213",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-siliguri-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-siliguri-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-panaji-63",
    "name": "National College of Hotel Management & Catering Technology, Panaji",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "North Goa",
    "city": "Panaji",
    "address": "Hospitality Zone, Tourism Highway, Panaji, North Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Panaji+Panaji",
    "website": "https://national-college-of-hotel-management-and-catering-technology-panaji-.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-panaji-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1995,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "MHM (Master of Hotel Management)",
      "B.Sc Hospitality & Hotel Administration",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Resort Management",
      "Hotel Operations",
      "Cruise Hospitality",
      "Bakery & Confectionery",
      "Sustainable Tourism",
      "Housekeeping",
      "Airline Hospitality",
      "Food Production",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-panaji-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Sports",
      "Front Office Laboratory",
      "Conference Hall",
      "Auditorium",
      "Hostel",
      "Restaurant Laboratory",
      "Medical Facility",
      "Training Restaurant",
      "Training Kitchen",
      "Language Laboratory",
      "Digital Library",
      "Bakery Laboratory",
      "Transport",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "Hilton Hotels & Resorts",
        "Royal Caribbean Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 21,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 4,
      "industryExperts": 7,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 9382704753",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-panaji-.org",
      "admissionOfficeContact": "+91 7641434728",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-panaji-",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-panaji-",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-panaji-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-64",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Hospitality Zone, Tourism Highway, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Rajkot+Rajkot",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1992,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "Bachelor of Hotel Management (BHM)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Housekeeping",
      "Diploma in Culinary Arts",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Hospitality Marketing",
      "Airline Hospitality",
      "Sustainable Tourism",
      "Hotel Operations",
      "Hospitality Management",
      "Restaurant Management",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Auditorium",
      "Mock Hotel Rooms",
      "Front Office Laboratory",
      "Medical Facility",
      "Housekeeping Laboratory",
      "Central Library",
      "Transport",
      "Hostel",
      "Sports",
      "Digital Library",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering",
        "Hyatt Hotels Corporation",
        "MakeMyTrip",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 52,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 12,
      "industryExperts": 14,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 7201008271",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-.org",
      "admissionOfficeContact": "+91 9829963260",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-rajkot-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-margao-65",
    "name": "Food Craft Institute (FCI), Margao",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Margao",
    "address": "Hospitality Zone, Tourism Highway, Margao, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Margao+Margao",
    "website": "https://food-craft-institute-fci-margao-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-margao-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1971,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Culinary Arts",
      "M.Sc Hospitality",
      "Diploma in Housekeeping",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Hotel Operations",
      "International Cuisine",
      "Hospitality Management",
      "Food Production",
      "Travel Management",
      "Bakery & Confectionery",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-margao-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Digital Library",
      "Training Kitchen",
      "Computer Laboratory",
      "Advanced Kitchen",
      "Medical Facility",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Wi-Fi Campus",
      "Conference Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Carnival Cruise Line",
        "ITC Hotels",
        "Leela Palaces, Hotels and Resorts",
        "Taj Hotels Palaces Resorts Safaris",
        "MakeMyTrip",
        "Lemon Tree Hotels",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 47,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 11,
      "industryExperts": 7,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9054320678",
      "email": "ihm@food-craft-institute-fci-margao-.org",
      "admissionOfficeContact": "+91 9235526373",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-margao-",
        "twitter": "https://twitter.com/food-craft-institute-fci-margao-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-margao-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-66",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Hospitality Zone, Tourism Highway, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Trivandrum+Trivandrum",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1990,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "BBA Tourism Management",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Housekeeping",
      "Front Office",
      "Food Production",
      "Tourism Management",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Seminar Hall",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Central Library",
      "Hostel",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Bakery Laboratory",
      "Medical Facility",
      "Digital Library",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "Marriott International",
        "MakeMyTrip",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 53,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 9,
      "industryExperts": 15,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8816338444",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.org",
      "admissionOfficeContact": "+91 7269612220",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-gwalior-67",
    "name": "International Culinary Academy & Hotel Management, Gwalior",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "city": "Gwalior",
    "address": "Hospitality Zone, Tourism Highway, Gwalior, Gwalior, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Gwalior+Gwalior",
    "website": "https://international-culinary-academy-and-hotel-management-gwalior-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-gwalior-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1993,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Housekeeping",
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration",
      "BBA Hospitality Management",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Restaurant Management",
      "Luxury Hotel Management",
      "Revenue Management",
      "Cruise Hospitality",
      "International Cuisine",
      "Airline Hospitality",
      "Resort Management",
      "Hotel Operations",
      "Food Production"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-gwalior-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Central Library",
      "Transport",
      "Computer Laboratory",
      "Front Office Laboratory",
      "Hostel",
      "Advanced Kitchen",
      "Training Restaurant",
      "Bakery Laboratory",
      "Housekeeping Laboratory",
      "Restaurant Laboratory",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Thomas Cook",
        "Taj Hotels Palaces Resorts Safaris",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 53,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 7,
      "industryExperts": 17,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 9849296809",
      "email": "ihm@international-culinary-academy-and-hotel-management-gwalior-.org",
      "admissionOfficeContact": "+91 8883850587",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-gwalior-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-gwalior-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-gwalior-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-siliguri-68",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Hospitality Zone, Tourism Highway, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Siliguri+Siliguri",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-siliguri-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-siliguri-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1980,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "Certificate in Food & Beverage Service",
      "Diploma in Culinary Arts",
      "MHM (Master of Hotel Management)",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Luxury Hotel Management",
      "Hospitality Management",
      "International Cuisine",
      "Revenue Management",
      "Restaurant Management",
      "Front Office",
      "Hotel Operations",
      "Food Production",
      "Resort Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-siliguri-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Computer Laboratory",
      "Transport",
      "Housekeeping Laboratory",
      "Hostel",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Training Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "SOTC Travel",
        "Royal Caribbean Cruise Line",
        "Taj Hotels Palaces Resorts Safaris",
        "Hilton Hotels & Resorts",
        "Radisson Hotel Group",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 25,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 6,
      "industryExperts": 15,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 7503031669",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-siliguri-.org",
      "admissionOfficeContact": "+91 7064902094",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-siliguri-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-siliguri-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-69",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Pusa New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Pusa New Delhi",
    "address": "Hospitality Zone, Tourism Highway, Pusa New Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Pusa+New+Delhi+Pusa New Delhi",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 2016,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Sc Hospitality",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Bachelor of Hotel Management (BHM)",
      "B.Sc Hospitality & Hotel Administration",
      "MBA Hospitality Management",
      "Certificate in Food & Beverage Service",
      "Diploma in Bakery & Confectionery",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "Travel Management",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Hospitality Management",
      "Food Production",
      "Cruise Hospitality",
      "Airline Hospitality",
      "Hospitality Marketing",
      "International Cuisine",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Central Library",
      "Training Kitchen",
      "Hostel",
      "Bakery Laboratory",
      "Training Restaurant",
      "Seminar Hall",
      "Computer Laboratory",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "Emirates Flight Catering",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 47,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 5,
      "industryExperts": 14,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9976290165",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-.org",
      "admissionOfficeContact": "+91 7779274674",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-pusa-new-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-70",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Manipal+Manipal",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1972,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Culinary Arts",
      "MBA Tourism Management",
      "Diploma in Bakery & Confectionery",
      "Diploma in Food Production",
      "Diploma in Housekeeping",
      "MHM (Master of Hotel Management)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Food & Beverage Service",
      "International Cuisine",
      "Cruise Hospitality",
      "Hotel Operations",
      "Food Production",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Bakery Laboratory",
      "Transport",
      "Central Library",
      "Conference Hall",
      "Digital Library",
      "Wi-Fi Campus",
      "Language Laboratory",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Marriott International",
        "Emirates Flight Catering",
        "Lemon Tree Hotels",
        "ITC Hotels",
        "Hilton Hotels & Resorts",
        "Carnival Cruise Line",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 39,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 11,
      "industryExperts": 19,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 8651182052",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-.org",
      "admissionOfficeContact": "+91 9486955060",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-kolhapur-71",
    "name": "International Culinary Academy & Hotel Management, Kolhapur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Kolhapur",
    "city": "Kolhapur",
    "address": "Hospitality Zone, Tourism Highway, Kolhapur, Kolhapur, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Kolhapur+Kolhapur",
    "website": "https://international-culinary-academy-and-hotel-management-kolhapur-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-kolhapur-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2013,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "Diploma in Food Production",
      "Diploma in Front Office",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Culinary Arts",
      "Diploma in Housekeeping",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Airline Hospitality",
      "Travel Management",
      "Tourism Management",
      "Luxury Hotel Management",
      "International Cuisine",
      "Hospitality Management",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-kolhapur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Seminar Hall",
      "Auditorium",
      "Hostel",
      "Digital Library",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Bakery Laboratory",
      "Conference Hall",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Central Library",
      "Training Restaurant",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "ITC Hotels",
        "Leela Palaces, Hotels and Resorts",
        "SOTC Travel",
        "Lemon Tree Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 40,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 4,
      "industryExperts": 15,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 8937929264",
      "email": "ihm@international-culinary-academy-and-hotel-management-kolhapur-.org",
      "admissionOfficeContact": "+91 9101261548",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-kolhapur-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-kolhapur-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-kolhapur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-72",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Hospitality Zone, Tourism Highway, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Mysore+Mysore",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1979,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Airline Hospitality",
      "Front Office",
      "Hotel Operations",
      "Hospitality Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Mock Hotel Rooms",
      "Wi-Fi Campus",
      "Seminar Hall",
      "Computer Laboratory",
      "Auditorium",
      "Housekeeping Laboratory",
      "Advanced Kitchen",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Thomas Cook",
        "The Oberoi Group",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 26,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 5,
      "industryExperts": 9,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 7818076268",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-.org",
      "admissionOfficeContact": "+91 7266228852",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-aurangabad-73",
    "name": "International Culinary Academy & Hotel Management, Aurangabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Aurangabad",
    "city": "Aurangabad",
    "address": "Hospitality Zone, Tourism Highway, Aurangabad, Aurangabad, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Aurangabad+Aurangabad",
    "website": "https://international-culinary-academy-and-hotel-management-aurangabad-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-aurangabad-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1999,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "Diploma in Front Office",
      "M.Sc Hospitality",
      "BBA Tourism Management",
      "Certificate in Food & Beverage Service",
      "Diploma in Food Production",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Hotel Operations",
      "Resort Management",
      "Hospitality Management",
      "Sustainable Tourism",
      "Hospitality Marketing",
      "Cruise Hospitality",
      "International Cuisine",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-aurangabad-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Sports",
      "Digital Library",
      "Bakery Laboratory",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Central Library",
      "Language Laboratory",
      "Hostel",
      "Auditorium",
      "Front Office Laboratory",
      "Training Kitchen",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "The Oberoi Group",
        "Royal Caribbean Cruise Line",
        "Marriott International",
        "Radisson Hotel Group",
        "MakeMyTrip",
        "Taj Hotels Palaces Resorts Safaris",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 36,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 10,
      "industryExperts": 16,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 7703556490",
      "email": "ihm@international-culinary-academy-and-hotel-management-aurangabad-.org",
      "admissionOfficeContact": "+91 8024100537",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-aurangabad-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-aurangabad-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-aurangabad-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-74",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "Hospitality Zone, Tourism Highway, Mumbai, Mumbai City, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Mumbai+Mumbai",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1989,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Airline Hospitality",
      "Travel Management",
      "Hotel Operations",
      "Housekeeping",
      "Tourism Management",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Hostel",
      "Conference Hall",
      "Restaurant Laboratory",
      "Mock Hotel Rooms",
      "Training Restaurant",
      "Digital Library",
      "Housekeeping Laboratory",
      "Transport",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "ITC Hotels",
        "Lemon Tree Hotels",
        "AccorHotels (Novotel, Sofitel)",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 34,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 8,
      "industryExperts": 9,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 7099304394",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-.org",
      "admissionOfficeContact": "+91 9193438977",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-mumbai-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-75",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Hospitality Zone, Tourism Highway, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Trivandrum+Trivandrum",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1996,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Front Office",
      "Certificate in Food & Beverage Service",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Tourism Management",
      "Hospitality Marketing",
      "Bakery & Confectionery",
      "Event Management",
      "Front Office",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Bakery Laboratory",
      "Training Kitchen",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Housekeeping Laboratory",
      "Transport",
      "Language Laboratory",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "Hyatt Hotels Corporation",
        "Radisson Hotel Group",
        "Hilton Hotels & Resorts",
        "Thomas Cook",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 22,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 6,
      "industryExperts": 19,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9323647156",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-.org",
      "admissionOfficeContact": "+91 9596709958",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-rohini-76",
    "name": "International Culinary Academy & Hotel Management, Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Hospitality Zone, Tourism Highway, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Rohini+Rohini",
    "website": "https://international-culinary-academy-and-hotel-management-rohini-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-rohini-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2000,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Housekeeping",
      "Certificate in Food & Beverage Service",
      "MBA Hospitality Management",
      "Diploma in Front Office",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Event Management",
      "Bakery & Confectionery",
      "Revenue Management",
      "Cruise Hospitality",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-rohini-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Mock Hotel Rooms",
      "Language Laboratory",
      "Central Library",
      "Hostel",
      "Sports",
      "Training Restaurant",
      "Restaurant Laboratory",
      "Auditorium",
      "Transport",
      "Bakery Laboratory",
      "Training Kitchen",
      "Front Office Laboratory",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "Marriott International",
        "Taj Hotels Palaces Resorts Safaris",
        "Leela Palaces, Hotels and Resorts",
        "Hilton Hotels & Resorts",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 25,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 7,
      "industryExperts": 16,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9606862370",
      "email": "ihm@international-culinary-academy-and-hotel-management-rohini-.org",
      "admissionOfficeContact": "+91 9295222037",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-rohini-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-rohini-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-rohini-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-77",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Hospitality Zone, Tourism Highway, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Ahmedabad+Ahmedabad",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2006,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "BBA Hospitality Management",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "Restaurant Management",
      "Food & Beverage Service",
      "Hospitality Management",
      "Travel Management",
      "Revenue Management",
      "Food Production",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Bakery Laboratory",
      "Front Office Laboratory",
      "Conference Hall",
      "Central Library",
      "Sports",
      "Training Restaurant",
      "Language Laboratory",
      "Housekeeping Laboratory",
      "Transport",
      "Training Kitchen",
      "Advanced Kitchen",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "Radisson Hotel Group",
        "Royal Caribbean Cruise Line",
        "Lemon Tree Hotels",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 20,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 12,
      "industryExperts": 12,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 7445150787",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-.org",
      "admissionOfficeContact": "+91 9899680451",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ahmedabad-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-78",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Hospitality Zone, Tourism Highway, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Mysore+Mysore",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1964,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Housekeeping",
      "M.Sc Hospitality",
      "Diploma in Food Production",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Hospitality Management",
      "Cruise Hospitality",
      "Bakery & Confectionery",
      "Airline Hospitality",
      "Front Office",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Restaurant Laboratory",
      "Seminar Hall",
      "Transport",
      "Training Kitchen",
      "Wi-Fi Campus",
      "Bakery Laboratory",
      "Sports",
      "Conference Hall",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "ITC Hotels",
        "AccorHotels (Novotel, Sofitel)",
        "SOTC Travel",
        "Marriott International",
        "Emirates Flight Catering",
        "Leela Palaces, Hotels and Resorts",
        "Lemon Tree Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 34,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 12,
      "industryExperts": 12,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 7356783738",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-.org",
      "admissionOfficeContact": "+91 9620874560",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-79",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Nagpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nagpur",
    "city": "Nagpur",
    "address": "Hospitality Zone, Tourism Highway, Nagpur, Nagpur, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Nagpur+Nagpur",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2006,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Food Production",
      "Bachelor of Hotel Management (BHM)",
      "MBA Tourism Management",
      "M.Sc Hospitality",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Revenue Management",
      "Food & Beverage Service",
      "Resort Management",
      "Hospitality Marketing",
      "Airline Hospitality",
      "Bakery & Confectionery",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Hostel",
      "Computer Laboratory",
      "Housekeeping Laboratory",
      "Transport",
      "Central Library",
      "Seminar Hall",
      "Auditorium",
      "Restaurant Laboratory",
      "Conference Hall",
      "Digital Library",
      "Bakery Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Lemon Tree Hotels",
        "Emirates Flight Catering",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 42,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 7,
      "industryExperts": 19,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 7293763801",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-.org",
      "admissionOfficeContact": "+91 8600990269",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-nagpur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-rajkot-80",
    "name": "Food Craft Institute (FCI), Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Hospitality Zone, Tourism Highway, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Rajkot+Rajkot",
    "website": "https://food-craft-institute-fci-rajkot-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-rajkot-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1988,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "MBA Hospitality Management",
      "Diploma in Food Production",
      "M.Sc Hospitality",
      "Diploma in Front Office",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Hospitality Management",
      "Food & Beverage Service",
      "Resort Management",
      "Sustainable Tourism",
      "Travel Management",
      "Cruise Hospitality",
      "Luxury Hotel Management",
      "Airline Hospitality",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-rajkot-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Seminar Hall",
      "Wi-Fi Campus",
      "Front Office Laboratory",
      "Housekeeping Laboratory",
      "Advanced Kitchen",
      "Central Library",
      "Hostel",
      "Transport",
      "Training Restaurant",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Emirates Flight Catering",
        "Marriott International",
        "Royal Caribbean Cruise Line",
        "Hilton Hotels & Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 25,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 7,
      "industryExperts": 11,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9164953849",
      "email": "ihm@food-craft-institute-fci-rajkot-.org",
      "admissionOfficeContact": "+91 8134502652",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-rajkot-",
        "twitter": "https://twitter.com/food-craft-institute-fci-rajkot-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-rajkot-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-81",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Manipal+Manipal",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1984,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Tourism Management",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Hotel Operations",
      "Hospitality Management",
      "Luxury Hotel Management",
      "International Cuisine",
      "Restaurant Management",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Language Laboratory",
      "Wi-Fi Campus",
      "Hostel",
      "Training Kitchen",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Conference Hall",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Carnival Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "Lemon Tree Hotels",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 51,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 8,
      "industryExperts": 15,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 8441512463",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-.org",
      "admissionOfficeContact": "+91 8230977258",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-manipal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-82",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Gandhinagar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Gandhinagar",
    "city": "Gandhinagar",
    "address": "Hospitality Zone, Tourism Highway, Gandhinagar, Gandhinagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Gandhinagar+Gandhinagar",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1999,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Certificate in Food & Beverage Service",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Housekeeping",
      "Sustainable Tourism",
      "Revenue Management",
      "Tourism Management",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Advanced Kitchen",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Restaurant Laboratory",
      "Digital Library",
      "Transport",
      "Front Office Laboratory",
      "Seminar Hall",
      "Mock Hotel Rooms",
      "Conference Hall",
      "Medical Facility",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Marriott International",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 39,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 7,
      "industryExperts": 9,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 7652851936",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-.org",
      "admissionOfficeContact": "+91 8455126666",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-gandhinagar-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-surat-83",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Surat",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Surat",
    "city": "Surat",
    "address": "Hospitality Zone, Tourism Highway, Surat, Surat, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Surat+Surat",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-surat-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-surat-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2019,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Bakery & Confectionery",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Housekeeping"
    ],
    "specializations": [
      "Bakery & Confectionery",
      "Luxury Hotel Management",
      "Food & Beverage Service",
      "Hospitality Management",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-surat-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Training Restaurant",
      "Hostel",
      "Computer Laboratory",
      "Training Kitchen",
      "Bakery Laboratory",
      "Seminar Hall",
      "Advanced Kitchen",
      "Central Library",
      "Housekeeping Laboratory",
      "Mock Hotel Rooms",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Taj Hotels Palaces Resorts Safaris",
        "Emirates Flight Catering",
        "The Oberoi Group",
        "Hyatt Hotels Corporation",
        "Lemon Tree Hotels",
        "Marriott International",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 29,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 10,
      "industryExperts": 11,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 8417145181",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-surat-.org",
      "admissionOfficeContact": "+91 7511563029",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-surat-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-surat-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-surat-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-hyderabad-84",
    "name": "Food Craft Institute (FCI), Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Hospitality Zone, Tourism Highway, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Hyderabad+Hyderabad",
    "website": "https://food-craft-institute-fci-hyderabad-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-hyderabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1988,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "BBA Tourism Management",
      "MBA Tourism Management",
      "MHM (Master of Hotel Management)"
    ],
    "specializations": [
      "Front Office",
      "Bakery & Confectionery",
      "Tourism Management",
      "Luxury Hotel Management",
      "Event Management",
      "Sustainable Tourism",
      "Revenue Management",
      "Resort Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-hyderabad-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Conference Hall",
      "Bakery Laboratory",
      "Seminar Hall",
      "Restaurant Laboratory",
      "Advanced Kitchen",
      "Digital Library",
      "Hostel",
      "Mock Hotel Rooms",
      "Wi-Fi Campus",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "Lemon Tree Hotels",
        "Hyatt Hotels Corporation",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 28,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 7,
      "industryExperts": 16,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 8611810893",
      "email": "ihm@food-craft-institute-fci-hyderabad-.org",
      "admissionOfficeContact": "+91 7495740600",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-hyderabad-",
        "twitter": "https://twitter.com/food-craft-institute-fci-hyderabad-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-hyderabad-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-85",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Lajpat Nagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "Lajpat Nagar",
    "address": "Hospitality Zone, Tourism Highway, Lajpat Nagar, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Lajpat+Nagar+Lajpat Nagar",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2004,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Tourism Management",
      "Certificate in Food & Beverage Service",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Front Office",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Hotel Operations",
      "Bakery & Confectionery",
      "Revenue Management",
      "Food Production",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Digital Library",
      "Auditorium",
      "Housekeeping Laboratory",
      "Conference Hall",
      "Language Laboratory",
      "Sports",
      "Wi-Fi Campus"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Emirates Flight Catering",
        "Royal Caribbean Cruise Line",
        "Taj Hotels Palaces Resorts Safaris",
        "Radisson Hotel Group",
        "Thomas Cook",
        "Hilton Hotels & Resorts",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 25,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 5,
      "industryExperts": 15,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 9801820545",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-.org",
      "admissionOfficeContact": "+91 9407354932",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-lajpat-nagar-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-86",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Vadodara+Vadodara",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1966,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "M.Sc Hospitality",
      "MBA Tourism Management",
      "Diploma in Front Office",
      "MBA Hospitality Management",
      "Diploma in Culinary Arts",
      "Diploma in Bakery & Confectionery",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Restaurant Management",
      "Travel Management",
      "Tourism Management",
      "Cruise Hospitality",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Central Library",
      "Training Kitchen",
      "Transport",
      "Sports",
      "Bakery Laboratory",
      "Housekeeping Laboratory",
      "Hostel",
      "Advanced Kitchen",
      "Training Restaurant",
      "Digital Library",
      "Seminar Hall",
      "Mock Hotel Rooms"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Royal Caribbean Cruise Line",
        "Lemon Tree Hotels",
        "Hyatt Hotels Corporation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 28,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 6,
      "industryExperts": 7,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 7529485616",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-.org",
      "admissionOfficeContact": "+91 7492979676",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-udaipur-87",
    "name": "International Culinary Academy & Hotel Management, Udaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "address": "Hospitality Zone, Tourism Highway, Udaipur, Udaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Udaipur+Udaipur",
    "website": "https://international-culinary-academy-and-hotel-management-udaipur-.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-udaipur-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2004,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Sc Hospitality",
      "Bachelor of Hotel Management (BHM)",
      "MBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Hotel Operations",
      "Housekeeping",
      "Food Production",
      "Resort Management",
      "Bakery & Confectionery",
      "International Cuisine"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-udaipur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Computer Laboratory",
      "Hostel",
      "Sports",
      "Auditorium",
      "Medical Facility",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts",
        "Royal Caribbean Cruise Line",
        "Radisson Hotel Group",
        "Carnival Cruise Line",
        "Emirates Flight Catering",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 44,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 5,
      "industryExperts": 11,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9005968573",
      "email": "ihm@international-culinary-academy-and-hotel-management-udaipur-.org",
      "admissionOfficeContact": "+91 8766844345",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-udaipur-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-udaipur-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-udaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-88",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Panaji",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "North Goa",
    "city": "Panaji",
    "address": "Hospitality Zone, Tourism Highway, Panaji, North Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Panaji+Panaji",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1986,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Housekeeping",
      "MBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Certificate in Food & Beverage Service",
      "MBA Tourism Management",
      "MHM (Master of Hotel Management)",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Hotel Operations",
      "International Cuisine",
      "Travel Management",
      "Luxury Hotel Management",
      "Hospitality Management",
      "Food Production",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Language Laboratory",
      "Transport",
      "Training Kitchen",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Front Office Laboratory",
      "Hostel",
      "Digital Library",
      "Conference Hall",
      "Restaurant Laboratory",
      "Bakery Laboratory",
      "Sports",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "SOTC Travel",
        "Carnival Cruise Line",
        "MakeMyTrip",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 38,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 11,
      "industryExperts": 14,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 8427552239",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-.org",
      "admissionOfficeContact": "+91 8001726748",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-panaji-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-pune-89",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Pune",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Hospitality Zone, Tourism Highway, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Pune+Pune",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pune-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pune-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1998,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "MBA Tourism Management",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Hotel Operations",
      "Food & Beverage Service",
      "Tourism Management",
      "Revenue Management",
      "Luxury Hotel Management",
      "Resort Management",
      "Cruise Hospitality",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-pune-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Auditorium",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Wi-Fi Campus",
      "Language Laboratory",
      "Bakery Laboratory",
      "Mock Hotel Rooms",
      "Sports",
      "Advanced Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "MakeMyTrip",
        "Hilton Hotels & Resorts",
        "The Oberoi Group",
        "Royal Caribbean Cruise Line",
        "Hyatt Hotels Corporation",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 42,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 11,
      "industryExperts": 10,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9217580177",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-pune-.org",
      "admissionOfficeContact": "+91 9868992702",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pune-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-pune-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-pune-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-bhopal-90",
    "name": "International Culinary Academy & Hotel Management, Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Hospitality Zone, Tourism Highway, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Bhopal+Bhopal",
    "website": "https://international-culinary-academy-and-hotel-management-bhopal-.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-bhopal-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 2011,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Sc Hospitality",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Housekeeping",
      "MBA Hospitality Management",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Housekeeping",
      "Hotel Operations",
      "International Cuisine",
      "Resort Management",
      "Food Production",
      "Hospitality Marketing",
      "Front Office",
      "Tourism Management",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-bhopal-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Advanced Kitchen",
      "Language Laboratory",
      "Sports",
      "Conference Hall",
      "Training Restaurant",
      "Auditorium",
      "Training Kitchen",
      "Transport",
      "Wi-Fi Campus",
      "Mock Hotel Rooms",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Royal Caribbean Cruise Line",
        "Marriott International",
        "Radisson Hotel Group",
        "ITC Hotels",
        "The Oberoi Group",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 47,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 11,
      "industryExperts": 16,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9924946373",
      "email": "ihm@international-culinary-academy-and-hotel-management-bhopal-.org",
      "admissionOfficeContact": "+91 7924073431",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-bhopal-",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-bhopal-",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-bhopal-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-91",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Pusa New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Pusa New Delhi",
    "address": "Hospitality Zone, Tourism Highway, Pusa New Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Pusa+New+Delhi+Pusa New Delhi",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1968,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Tourism Management",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Certificate in Food & Beverage Service",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Hotel Operations",
      "Restaurant Management",
      "Resort Management",
      "Hospitality Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Bakery Laboratory",
      "Hostel",
      "Digital Library",
      "Language Laboratory",
      "Training Kitchen",
      "Central Library",
      "Seminar Hall",
      "Conference Hall",
      "Training Restaurant",
      "Housekeeping Laboratory",
      "Computer Laboratory",
      "Wi-Fi Campus"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Hilton Hotels & Resorts",
        "ITC Hotels",
        "Emirates Flight Catering",
        "Marriott International",
        "MakeMyTrip",
        "Leela Palaces, Hotels and Resorts"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 39,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 12,
      "industryExperts": 10,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 7856983206",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-.org",
      "admissionOfficeContact": "+91 9237999348",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-92",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Hospitality Zone, Tourism Highway, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Jaipur+Jaipur",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 2002,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "MBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Front Office",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Hospitality Management",
      "Travel Management",
      "International Cuisine",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Front Office",
      "Event Management",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Sports",
      "Wi-Fi Campus",
      "Conference Hall",
      "Mock Hotel Rooms",
      "Bakery Laboratory",
      "Hostel",
      "Housekeeping Laboratory",
      "Advanced Kitchen",
      "Central Library",
      "Computer Laboratory",
      "Transport",
      "Training Restaurant",
      "Medical Facility",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Hyatt Hotels Corporation",
        "Emirates Flight Catering",
        "SOTC Travel",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 54,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 4,
      "industryExperts": 16,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9533785764",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-.org",
      "admissionOfficeContact": "+91 9096433647",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-trivandrum-93",
    "name": "Food Craft Institute (FCI), Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Hospitality Zone, Tourism Highway, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Trivandrum+Trivandrum",
    "website": "https://food-craft-institute-fci-trivandrum-.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-trivandrum-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1981,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Certificate in Food & Beverage Service",
      "BBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "MBA Hospitality Management",
      "Diploma in Food Production",
      "Diploma in Bakery & Confectionery",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Airline Hospitality",
      "Food Production",
      "Hotel Operations",
      "Front Office",
      "Resort Management",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-trivandrum-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Housekeeping Laboratory",
      "Conference Hall",
      "Wi-Fi Campus",
      "Central Library",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Mock Hotel Rooms",
      "Auditorium",
      "Computer Laboratory",
      "Hostel",
      "Sports",
      "Medical Facility",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Lemon Tree Hotels",
        "Hilton Hotels & Resorts",
        "Taj Hotels Palaces Resorts Safaris",
        "Carnival Cruise Line",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 31,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 4,
      "industryExperts": 18,
      "visitingFacultyCount": 6
    },
    "contact": {
      "phone": "+91 9215072310",
      "email": "ihm@food-craft-institute-fci-trivandrum-.org",
      "admissionOfficeContact": "+91 7121145995",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-trivandrum-",
        "twitter": "https://twitter.com/food-craft-institute-fci-trivandrum-",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-94",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Meerut",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "city": "Meerut",
    "address": "Hospitality Zone, Tourism Highway, Meerut, Meerut, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Meerut+Meerut",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A++",
    "yearEstablished": 1981,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Housekeeping",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Bakery & Confectionery",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Hotel Operations",
      "Luxury Hotel Management",
      "Resort Management",
      "Hospitality Management",
      "Hospitality Marketing",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Medical Facility",
      "Central Library",
      "Front Office Laboratory",
      "Sports",
      "Language Laboratory",
      "Transport",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Hostel",
      "Computer Laboratory",
      "Bakery Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Emirates Flight Catering",
        "Royal Caribbean Cruise Line",
        "Taj Hotels Palaces Resorts Safaris",
        "Lemon Tree Hotels",
        "ITC Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 46,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 9,
      "industryExperts": 18,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 7826996946",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-.org",
      "admissionOfficeContact": "+91 9927973618",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-meerut-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-porda-95",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Porda",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Porda",
    "address": "Hospitality Zone, Tourism Highway, Porda, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Porda+Porda",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-porda-.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-porda-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1979,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Tourism Management",
      "Diploma in Housekeeping",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Airline Hospitality",
      "Restaurant Management",
      "Front Office",
      "Resort Management",
      "Bakery & Confectionery",
      "Sustainable Tourism",
      "Food Production",
      "Tourism Management",
      "Food & Beverage Service",
      "Revenue Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-porda-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Mock Hotel Rooms",
      "Front Office Laboratory",
      "Bakery Laboratory",
      "Sports",
      "Restaurant Laboratory",
      "Training Restaurant",
      "Training Kitchen",
      "Digital Library",
      "Computer Laboratory",
      "Conference Hall",
      "Advanced Kitchen",
      "Transport",
      "Auditorium",
      "Language Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "ITC Hotels",
        "Royal Caribbean Cruise Line",
        "Carnival Cruise Line",
        "Radisson Hotel Group",
        "SOTC Travel",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 20,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 7,
      "industryExperts": 8,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9209357498",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-porda-.org",
      "admissionOfficeContact": "+91 7674357634",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-porda-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-porda-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-porda-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-96",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Nagpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nagpur",
    "city": "Nagpur",
    "address": "Hospitality Zone, Tourism Highway, Nagpur, Nagpur, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Nagpur+Nagpur",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-.ac.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1978,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "MBA Hospitality Management",
      "Diploma in Housekeeping",
      "Diploma in Food Production",
      "M.Sc Hospitality",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Restaurant Management",
      "Bakery & Confectionery",
      "Hotel Operations",
      "Luxury Hotel Management",
      "Travel Management",
      "Sustainable Tourism",
      "Cruise Hospitality",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Digital Library",
      "Transport",
      "Mock Hotel Rooms",
      "Medical Facility",
      "Wi-Fi Campus",
      "Training Kitchen",
      "Language Laboratory",
      "Seminar Hall",
      "Conference Hall",
      "Advanced Kitchen",
      "Bakery Laboratory",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Emirates Flight Catering",
        "Radisson Hotel Group",
        "Lemon Tree Hotels",
        "Hilton Hotels & Resorts",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 27,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 7,
      "industryExperts": 17,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 7960929406",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-.org",
      "admissionOfficeContact": "+91 8419049316",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-nagpur-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-thane-97",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Thane",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Thane",
    "city": "Thane",
    "address": "Hospitality Zone, Tourism Highway, Thane, Thane, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Thane+Thane",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-thane-.ac.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-thane-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Tourism Management",
      "Diploma in Bakery & Confectionery",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Housekeeping",
      "MBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Food Production"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Event Management",
      "Restaurant Management",
      "Luxury Hotel Management",
      "Bakery & Confectionery",
      "Hospitality Marketing",
      "International Cuisine",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-thane-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Seminar Hall",
      "Restaurant Laboratory",
      "Computer Laboratory",
      "Central Library",
      "Mock Hotel Rooms",
      "Medical Facility",
      "Hostel",
      "Training Restaurant",
      "Bakery Laboratory",
      "Language Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "SOTC Travel",
        "MakeMyTrip",
        "Emirates Flight Catering",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 46,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 10,
      "industryExperts": 14,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8157181685",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-thane-.org",
      "admissionOfficeContact": "+91 7610884348",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-thane-",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-thane-",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-thane-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-98",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Ooty",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Nilgiris",
    "city": "Ooty",
    "address": "Hospitality Zone, Tourism Highway, Ooty, Nilgiris, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Ooty+Ooty",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1996,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Food Production",
      "MBA Hospitality Management",
      "Certificate in Food & Beverage Service",
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "M.Sc Hospitality"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Airline Hospitality",
      "International Cuisine",
      "Food Production",
      "Hotel Operations",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Housekeeping Laboratory",
      "Restaurant Laboratory",
      "Transport",
      "Seminar Hall",
      "Advanced Kitchen",
      "Sports",
      "Wi-Fi Campus",
      "Conference Hall",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Lemon Tree Hotels",
        "Emirates Flight Catering",
        "ITC Hotels",
        "The Oberoi Group",
        "Hilton Hotels & Resorts",
        "Taj Hotels Palaces Resorts Safaris",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 29,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 10,
      "industryExperts": 6,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8524580039",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-.org",
      "admissionOfficeContact": "+91 8200141124",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-ooty-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-99",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Margao",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Goa",
    "district": "South Goa",
    "city": "Margao",
    "address": "Hospitality Zone, Tourism Highway, Margao, South Goa, Goa, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Margao+Margao",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-.edu.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1976,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Front Office",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Housekeeping",
      "Resort Management",
      "Hotel Operations",
      "International Cuisine",
      "Airline Hospitality",
      "Luxury Hotel Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Medical Facility",
      "Auditorium",
      "Transport",
      "Advanced Kitchen",
      "Wi-Fi Campus",
      "Digital Library",
      "Sports",
      "Conference Hall",
      "Training Restaurant",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Marriott International",
        "Thomas Cook",
        "MakeMyTrip",
        "Emirates Flight Catering",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 55,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 6,
      "industryExperts": 17,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9031572196",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-.org",
      "admissionOfficeContact": "+91 7322133455",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-margao-"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-100",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Ajmer",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Ajmer",
    "city": "Ajmer",
    "address": "Hospitality Zone, Tourism Highway, Ajmer, Ajmer, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Ajmer+Ajmer",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Food Production",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Housekeeping",
      "Diploma in Front Office",
      "Certificate in Food & Beverage Service",
      "Diploma in Culinary Arts"
    ],
    "specializations": [
      "International Cuisine",
      "Hotel Operations",
      "Housekeeping",
      "Sustainable Tourism",
      "Event Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Training Kitchen",
      "Central Library",
      "Advanced Kitchen",
      "Transport",
      "Language Laboratory",
      "Hostel",
      "Front Office Laboratory",
      "Sports",
      "Computer Laboratory",
      "Bakery Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Carnival Cruise Line",
        "MakeMyTrip",
        "Radisson Hotel Group",
        "Thomas Cook",
        "Hilton Hotels & Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 34,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 4,
      "industryExperts": 19,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 8595103758",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1.org",
      "admissionOfficeContact": "+91 9381851897",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-ajmer-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-101",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Mangalore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangalore",
    "address": "Hospitality Zone, Tourism Highway, Mangalore, Dakshina Kannada, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Mangalore+Mangalore",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1.edu.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1994,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "M.Sc Hospitality",
      "Diploma in Culinary Arts",
      "MBA Tourism Management",
      "BBA Tourism Management",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Cruise Hospitality",
      "Sustainable Tourism",
      "Tourism Management",
      "Travel Management",
      "International Cuisine",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Wi-Fi Campus",
      "Sports",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Transport",
      "Seminar Hall",
      "Conference Hall",
      "Central Library",
      "Restaurant Laboratory",
      "Advanced Kitchen",
      "Computer Laboratory",
      "Front Office Laboratory",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "ITC Hotels",
        "SOTC Travel",
        "The Oberoi Group",
        "Hilton Hotels & Resorts",
        "Leela Palaces, Hotels and Resorts",
        "MakeMyTrip",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 35,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 7,
      "industryExperts": 20,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8409638163",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1.org",
      "admissionOfficeContact": "+91 7100688129",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-mangalore-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-102",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Ajmer",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Ajmer",
    "city": "Ajmer",
    "address": "Hospitality Zone, Tourism Highway, Ajmer, Ajmer, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Ajmer+Ajmer",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 2018,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Sc Hospitality",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Food Production",
      "Certificate in Food & Beverage Service",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Hotel Operations",
      "International Cuisine",
      "Housekeeping",
      "Event Management",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Seminar Hall",
      "Training Kitchen",
      "Housekeeping Laboratory",
      "Sports",
      "Training Restaurant",
      "Wi-Fi Campus",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "SOTC Travel",
        "ITC Hotels",
        "Leela Palaces, Hotels and Resorts",
        "The Oberoi Group",
        "MakeMyTrip",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 33,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 8,
      "industryExperts": 16,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8936568990",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.org",
      "admissionOfficeContact": "+91 9526539460",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-103",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Manipal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Udupi",
    "city": "Manipal",
    "address": "Hospitality Zone, Tourism Highway, Manipal, Udupi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Manipal+Manipal",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1977,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "Diploma in Bakery & Confectionery"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Restaurant Management",
      "Hotel Operations",
      "Food & Beverage Service",
      "Food Production",
      "Tourism Management",
      "Hospitality Management",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Training Kitchen",
      "Language Laboratory",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Seminar Hall",
      "Central Library",
      "Training Restaurant",
      "Front Office Laboratory",
      "Medical Facility"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Radisson Hotel Group",
        "Leela Palaces, Hotels and Resorts",
        "SOTC Travel",
        "Marriott International",
        "Lemon Tree Hotels",
        "MakeMyTrip",
        "Carnival Cruise Line",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 31,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 4,
      "industryExperts": 15,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9523930997",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1.org",
      "admissionOfficeContact": "+91 8398338926",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-manipal-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-gorakhpur-104",
    "name": "International Culinary Academy & Hotel Management, Gorakhpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "city": "Gorakhpur",
    "address": "Hospitality Zone, Tourism Highway, Gorakhpur, Gorakhpur, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Gorakhpur+Gorakhpur",
    "website": "https://international-culinary-academy-and-hotel-management-gorakhpur-1.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-gorakhpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 2003,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "BBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "Certificate in Food & Beverage Service",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "MBA Tourism Management",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Food Production",
      "Airline Hospitality",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Resort Management",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-gorakhpur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Auditorium",
      "Language Laboratory",
      "Training Restaurant",
      "Sports",
      "Bakery Laboratory",
      "Transport",
      "Advanced Kitchen",
      "Mock Hotel Rooms",
      "Central Library",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Taj Hotels Palaces Resorts Safaris",
        "Royal Caribbean Cruise Line",
        "Lemon Tree Hotels",
        "ITC Hotels",
        "SOTC Travel",
        "AccorHotels (Novotel, Sofitel)",
        "Emirates Flight Catering",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 46,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 6,
      "industryExperts": 11,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9081386557",
      "email": "ihm@international-culinary-academy-and-hotel-management-gorakhpur-1.org",
      "admissionOfficeContact": "+91 9804084437",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-gorakhpur-1",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-gorakhpur-1",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-gorakhpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-warangal-105",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Hospitality Zone, Tourism Highway, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Warangal+Warangal",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-warangal-1.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-warangal-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1993,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Bakery & Confectionery",
      "MBA Tourism Management",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Housekeeping",
      "Travel Management",
      "Event Management",
      "International Cuisine",
      "Tourism Management",
      "Luxury Hotel Management",
      "Sustainable Tourism",
      "Revenue Management",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-warangal-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Computer Laboratory",
      "Training Kitchen",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Housekeeping Laboratory",
      "Central Library",
      "Conference Hall",
      "Bakery Laboratory",
      "Sports",
      "Medical Facility",
      "Auditorium",
      "Advanced Kitchen",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "Radisson Hotel Group",
        "Royal Caribbean Cruise Line",
        "The Oberoi Group",
        "Hilton Hotels & Resorts",
        "Lemon Tree Hotels",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 25,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 7,
      "industryExperts": 19,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 8962852923",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-warangal-1.org",
      "admissionOfficeContact": "+91 8340418938",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-warangal-1",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-warangal-1",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-warangal-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-106",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Pusa New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Pusa New Delhi",
    "address": "Hospitality Zone, Tourism Highway, Pusa New Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Pusa+New+Delhi+Pusa New Delhi",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1.ac.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1994,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management (BHM)",
      "BBA Hospitality Management",
      "Diploma in Bakery & Confectionery",
      "Diploma in Housekeeping",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Food Production",
      "Resort Management",
      "Restaurant Management",
      "Sustainable Tourism",
      "Hotel Operations",
      "Bakery & Confectionery",
      "Hospitality Management",
      "Tourism Management",
      "Food & Beverage Service",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Conference Hall",
      "Medical Facility",
      "Training Kitchen",
      "Hostel",
      "Housekeeping Laboratory",
      "Sports",
      "Bakery Laboratory",
      "Front Office Laboratory",
      "Central Library",
      "Digital Library",
      "Auditorium",
      "Training Restaurant",
      "Restaurant Laboratory",
      "Seminar Hall"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "ITC Hotels",
        "Lemon Tree Hotels",
        "Hilton Hotels & Resorts",
        "Thomas Cook",
        "Radisson Hotel Group",
        "Carnival Cruise Line",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 30,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 10,
      "industryExperts": 20,
      "visitingFacultyCount": 9
    },
    "contact": {
      "phone": "+91 8639670200",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1.org",
      "admissionOfficeContact": "+91 8655012880",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-pusa-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-cochin-107",
    "name": "Food Craft Institute (FCI), Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Hospitality Zone, Tourism Highway, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Cochin+Cochin",
    "website": "https://food-craft-institute-fci-cochin-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-cochin-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 2006,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Sc Hospitality",
      "BBA Tourism Management",
      "Diploma in Food Production",
      "Bachelor of Hotel Management (BHM)",
      "BBA Hospitality Management",
      "Diploma in Culinary Arts",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)"
    ],
    "specializations": [
      "Tourism Management",
      "Food Production",
      "Sustainable Tourism",
      "Event Management",
      "Restaurant Management",
      "Hotel Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-cochin-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Mock Hotel Rooms",
      "Auditorium",
      "Transport",
      "Bakery Laboratory",
      "Conference Hall",
      "Computer Laboratory",
      "Advanced Kitchen",
      "Seminar Hall",
      "Digital Library",
      "Hostel",
      "Training Restaurant",
      "Central Library",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Taj Hotels Palaces Resorts Safaris",
        "ITC Hotels",
        "Hilton Hotels & Resorts",
        "Carnival Cruise Line",
        "Royal Caribbean Cruise Line",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 47,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 10,
      "industryExperts": 19,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 9116006049",
      "email": "ihm@food-craft-institute-fci-cochin-1.org",
      "admissionOfficeContact": "+91 7614108565",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-cochin-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-cochin-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-cochin-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-pune-108",
    "name": "Food Craft Institute (FCI), Pune",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Hospitality Zone, Tourism Highway, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Pune+Pune",
    "website": "https://food-craft-institute-fci-pune-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-pune-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2014,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Tourism Management",
      "Diploma in Food Production",
      "BBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "MBA Hospitality Management"
    ],
    "specializations": [
      "Travel Management",
      "Restaurant Management",
      "Hospitality Marketing",
      "Hospitality Management",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-pune-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Transport",
      "Advanced Kitchen",
      "Training Kitchen",
      "Central Library",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Wi-Fi Campus",
      "Conference Hall",
      "Seminar Hall",
      "Housekeeping Laboratory",
      "Training Restaurant",
      "Sports"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "Marriott International",
        "Leela Palaces, Hotels and Resorts",
        "SOTC Travel",
        "Emirates Flight Catering"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 54,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 11,
      "industryExperts": 20,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 7956844089",
      "email": "ihm@food-craft-institute-fci-pune-1.org",
      "admissionOfficeContact": "+91 9898517430",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-pune-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-pune-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-pune-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-109",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Hospitality Zone, Tourism Highway, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Ahmedabad+Ahmedabad",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.ac.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2010,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Culinary Arts",
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "International Cuisine",
      "Bakery & Confectionery",
      "Event Management",
      "Hospitality Management",
      "Food & Beverage Service",
      "Food Production",
      "Cruise Hospitality",
      "Airline Hospitality",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Restaurant Laboratory",
      "Mock Hotel Rooms",
      "Training Restaurant",
      "Central Library",
      "Sports",
      "Front Office Laboratory",
      "Bakery Laboratory",
      "Transport",
      "Language Laboratory",
      "Training Kitchen",
      "Seminar Hall",
      "Auditorium",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "AccorHotels (Novotel, Sofitel)",
        "Lemon Tree Hotels",
        "Emirates Flight Catering",
        "MakeMyTrip",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 38,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 4,
      "industryExperts": 15,
      "visitingFacultyCount": 8
    },
    "contact": {
      "phone": "+91 9016311542",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.org",
      "admissionOfficeContact": "+91 8675337598",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-jabalpur-110",
    "name": "Food Craft Institute (FCI), Jabalpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "city": "Jabalpur",
    "address": "Hospitality Zone, Tourism Highway, Jabalpur, Jabalpur, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Jabalpur+Jabalpur",
    "website": "https://food-craft-institute-fci-jabalpur-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-jabalpur-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Food Production",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Bakery & Confectionery",
      "MBA Tourism Management",
      "Diploma in Culinary Arts",
      "MBA Hospitality Management",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Tourism Management",
      "Housekeeping",
      "Restaurant Management",
      "Hospitality Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-jabalpur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Wi-Fi Campus",
      "Housekeeping Laboratory",
      "Front Office Laboratory",
      "Seminar Hall",
      "Language Laboratory",
      "Sports",
      "Conference Hall",
      "Central Library",
      "Mock Hotel Rooms",
      "Training Restaurant",
      "Training Kitchen",
      "Medical Facility",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Marriott International",
        "Hilton Hotels & Resorts",
        "Leela Palaces, Hotels and Resorts",
        "ITC Hotels",
        "Emirates Flight Catering",
        "Royal Caribbean Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 26,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 10,
      "industryExperts": 8,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8885179780",
      "email": "ihm@food-craft-institute-fci-jabalpur-1.org",
      "admissionOfficeContact": "+91 9277272805",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-jabalpur-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-jabalpur-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-jabalpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-warangal-111",
    "name": "Food Craft Institute (FCI), Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Hospitality Zone, Tourism Highway, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Warangal+Warangal",
    "website": "https://food-craft-institute-fci-warangal-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-warangal-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Housekeeping",
      "Certificate in Food & Beverage Service",
      "MBA Tourism Management",
      "BBA Tourism Management",
      "Diploma in Food Production",
      "MHM (Master of Hotel Management)",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Hotel Operations",
      "Event Management",
      "Travel Management",
      "Hospitality Marketing",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-warangal-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Training Kitchen",
      "Seminar Hall",
      "Hostel",
      "Restaurant Laboratory",
      "Training Restaurant",
      "Bakery Laboratory",
      "Housekeeping Laboratory",
      "Front Office Laboratory",
      "Conference Hall",
      "Advanced Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hyatt Hotels Corporation",
        "SOTC Travel",
        "Emirates Flight Catering",
        "Leela Palaces, Hotels and Resorts",
        "Lemon Tree Hotels",
        "Radisson Hotel Group",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 47,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 7,
      "industryExperts": 10,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 7117064017",
      "email": "ihm@food-craft-institute-fci-warangal-1.org",
      "admissionOfficeContact": "+91 7865768587",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-warangal-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-warangal-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-warangal-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-112",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Hospitality Zone, Tourism Highway, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Ahmedabad+Ahmedabad",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.edu.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1994,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "Diploma in Culinary Arts",
      "M.Sc Hospitality",
      "BBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Housekeeping",
      "Hospitality Marketing",
      "Bakery & Confectionery",
      "Sustainable Tourism",
      "Food Production",
      "Airline Hospitality",
      "Tourism Management",
      "Hospitality Management",
      "Event Management",
      "Restaurant Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Sports",
      "Training Restaurant",
      "Central Library",
      "Housekeeping Laboratory",
      "Training Kitchen",
      "Digital Library",
      "Seminar Hall",
      "Transport",
      "Wi-Fi Campus",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Royal Caribbean Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "Marriott International",
        "Hilton Hotels & Resorts",
        "Hyatt Hotels Corporation",
        "Leela Palaces, Hotels and Resorts",
        "Emirates Flight Catering",
        "SOTC Travel"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 18,
      "studentFacultyRatio": "15:1",
      "executiveChefsCount": 12,
      "industryExperts": 6,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 9803042694",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1.org",
      "admissionOfficeContact": "+91 8547249851",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-ahmedabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-trivandrum-113",
    "name": "Food Craft Institute (FCI), Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Hospitality Zone, Tourism Highway, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Trivandrum+Trivandrum",
    "website": "https://food-craft-institute-fci-trivandrum-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-trivandrum-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Sc Hospitality",
      "Diploma in Housekeeping",
      "MBA Tourism Management",
      "Diploma in Culinary Arts",
      "MHM (Master of Hotel Management)",
      "B.Sc Hospitality & Hotel Administration"
    ],
    "specializations": [
      "Luxury Hotel Management",
      "Front Office",
      "Food & Beverage Service",
      "Hotel Operations",
      "Housekeeping",
      "Bakery & Confectionery"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-trivandrum-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Advanced Kitchen",
      "Auditorium",
      "Wi-Fi Campus",
      "Bakery Laboratory",
      "Central Library",
      "Medical Facility",
      "Hostel",
      "Restaurant Laboratory",
      "Computer Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "Hyatt Hotels Corporation",
        "Royal Caribbean Cruise Line",
        "Lemon Tree Hotels",
        "Hilton Hotels & Resorts",
        "Leela Palaces, Hotels and Resorts",
        "Thomas Cook"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 33,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 7,
      "industryExperts": 16,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9482361681",
      "email": "ihm@food-craft-institute-fci-trivandrum-1.org",
      "admissionOfficeContact": "+91 9075271615",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-trivandrum-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-trivandrum-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-trivandrum-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-114",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Hospitality Zone, Tourism Highway, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Jaipur+Jaipur",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "Diploma in Food Production",
      "BBA Tourism Management",
      "Certificate in Food & Beverage Service",
      "M.Sc Hospitality",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Hotel Operations",
      "Front Office",
      "Food & Beverage Service",
      "Food Production",
      "Airline Hospitality",
      "Sustainable Tourism",
      "Bakery & Confectionery",
      "Housekeeping"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Kitchen",
      "Advanced Kitchen",
      "Seminar Hall",
      "Bakery Laboratory",
      "Hostel",
      "Wi-Fi Campus",
      "Auditorium",
      "Central Library",
      "Housekeeping Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Emirates Flight Catering",
        "Thomas Cook",
        "Radisson Hotel Group",
        "Marriott International",
        "The Oberoi Group",
        "Taj Hotels Palaces Resorts Safaris",
        "Leela Palaces, Hotels and Resorts",
        "Royal Caribbean Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 53,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 7,
      "industryExperts": 6,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 8567743288",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1.org",
      "admissionOfficeContact": "+91 9494543578",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-jaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "national-college-of-hotel-management-and-catering-technology-udaipur-115",
    "name": "National College of Hotel Management & Catering Technology, Udaipur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "address": "Hospitality Zone, Tourism Highway, Udaipur, Udaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Hotel+Management+&+Catering+Technology,+Udaipur+Udaipur",
    "website": "https://national-college-of-hotel-management-and-catering-technology-udaipur-1.edu.in",
    "admissionPortalUrl": "https://national-college-of-hotel-management-and-catering-technology-udaipur-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 2009,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BTTM (Bachelor of Travel & Tourism Management)",
      "Diploma in Front Office",
      "Diploma in Culinary Arts",
      "MBA Hospitality Management",
      "Certificate in Food & Beverage Service",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Restaurant Management",
      "Hotel Operations",
      "Cruise Hospitality",
      "Revenue Management",
      "Food & Beverage Service"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://national-college-of-hotel-management-and-catering-technology-udaipur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Computer Laboratory",
      "Wi-Fi Campus",
      "Auditorium",
      "Bakery Laboratory",
      "Hostel",
      "Front Office Laboratory",
      "Medical Facility",
      "Central Library",
      "Training Restaurant",
      "Training Kitchen",
      "Digital Library",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Hyatt Hotels Corporation",
        "Carnival Cruise Line",
        "Radisson Hotel Group",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 39,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 12,
      "industryExperts": 6,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 7763250794",
      "email": "ihm@national-college-of-hotel-management-and-catering-technology-udaipur-1.org",
      "admissionOfficeContact": "+91 8520751817",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-hotel-management-and-catering-technology-udaipur-1",
        "twitter": "https://twitter.com/national-college-of-hotel-management-and-catering-technology-udaipur-1",
        "linkedin": "https://linkedin.com/school/national-college-of-hotel-management-and-catering-technology-udaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-116",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Ajmer",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Ajmer",
    "city": "Ajmer",
    "address": "Hospitality Zone, Tourism Highway, Ajmer, Ajmer, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Ajmer+Ajmer",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 2017,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Bakery & Confectionery",
      "Diploma in Food Production",
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Housekeeping",
      "BBA Hospitality Management",
      "MHM (Master of Hotel Management)",
      "Diploma in Front Office",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Revenue Management",
      "Luxury Hotel Management",
      "Front Office",
      "Event Management",
      "Travel Management",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Seminar Hall",
      "Wi-Fi Campus",
      "Sports",
      "Medical Facility",
      "Advanced Kitchen",
      "Training Kitchen",
      "Restaurant Laboratory",
      "Conference Hall",
      "Central Library",
      "Bakery Laboratory",
      "Auditorium"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Thomas Cook",
        "AccorHotels (Novotel, Sofitel)",
        "Leela Palaces, Hotels and Resorts",
        "Emirates Flight Catering"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. S. K. Sharma",
      "director": "Dr. A. S. Gill",
      "facultyStrength": 40,
      "studentFacultyRatio": "18:1",
      "executiveChefsCount": 11,
      "industryExperts": 9,
      "visitingFacultyCount": 11
    },
    "contact": {
      "phone": "+91 7372089584",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1.org",
      "admissionOfficeContact": "+91 7803985830",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-ajmer-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "food-craft-institute-fci-aurangabad-117",
    "name": "Food Craft Institute (FCI), Aurangabad",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Aurangabad",
    "city": "Aurangabad",
    "address": "Hospitality Zone, Tourism Highway, Aurangabad, Aurangabad, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Food+Craft+Institute+(FCI),+Aurangabad+Aurangabad",
    "website": "https://food-craft-institute-fci-aurangabad-1.ac.in",
    "admissionPortalUrl": "https://food-craft-institute-fci-aurangabad-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Department of Tourism, Govt of India & NCHMCT",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 1970,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Sc Hospitality",
      "BBA Tourism Management",
      "Diploma in Bakery & Confectionery",
      "MBA Tourism Management",
      "B.Sc Hospitality & Hotel Administration",
      "MHM (Master of Hotel Management)",
      "MBA Hospitality Management",
      "Bachelor of Hotel Management (BHM)"
    ],
    "specializations": [
      "Airline Hospitality",
      "Hospitality Management",
      "Sustainable Tourism",
      "Event Management",
      "Housekeeping",
      "International Cuisine",
      "Travel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://food-craft-institute-fci-aurangabad-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Hostel",
      "Advanced Kitchen",
      "Sports",
      "Digital Library",
      "Language Laboratory",
      "Front Office Laboratory",
      "Seminar Hall",
      "Computer Laboratory",
      "Training Kitchen",
      "Central Library",
      "Conference Hall",
      "Training Restaurant"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Carnival Cruise Line",
        "AccorHotels (Novotel, Sofitel)",
        "Radisson Hotel Group",
        "SOTC Travel"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Rajeshwari Rao",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 54,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 11,
      "industryExperts": 11,
      "visitingFacultyCount": 13
    },
    "contact": {
      "phone": "+91 7357460237",
      "email": "ihm@food-craft-institute-fci-aurangabad-1.org",
      "admissionOfficeContact": "+91 7680631342",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/food-craft-institute-fci-aurangabad-1",
        "twitter": "https://twitter.com/food-craft-institute-fci-aurangabad-1",
        "linkedin": "https://linkedin.com/school/food-craft-institute-fci-aurangabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-cochin-118",
    "name": "International Culinary Academy & Hotel Management, Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Hospitality Zone, Tourism Highway, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Cochin+Cochin",
    "website": "https://international-culinary-academy-and-hotel-management-cochin-1.ac.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-cochin-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Housekeeping",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "MBA Hospitality Management",
      "BTTM (Bachelor of Travel & Tourism Management)"
    ],
    "specializations": [
      "Tourism Management",
      "Front Office",
      "Cruise Hospitality",
      "Hotel Operations",
      "Food & Beverage Service",
      "International Cuisine",
      "Hospitality Management",
      "Event Management",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-cochin-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Restaurant Laboratory",
      "Sports",
      "Conference Hall",
      "Housekeeping Laboratory",
      "Wi-Fi Campus",
      "Front Office Laboratory",
      "Mock Hotel Rooms",
      "Central Library",
      "Computer Laboratory",
      "Language Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Marriott International",
        "Taj Hotels Palaces Resorts Safaris",
        "Radisson Hotel Group",
        "SOTC Travel",
        "Lemon Tree Hotels",
        "The Oberoi Group",
        "MakeMyTrip"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 21,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 6,
      "industryExperts": 8,
      "visitingFacultyCount": 5
    },
    "contact": {
      "phone": "+91 9011373759",
      "email": "ihm@international-culinary-academy-and-hotel-management-cochin-1.org",
      "admissionOfficeContact": "+91 9511501683",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-cochin-1",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-cochin-1",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-cochin-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-119",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Hospitality Zone, Tourism Highway, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Bhopal+Bhopal",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 2015,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "Diploma in Culinary Arts",
      "BBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Bachelor of Hotel Management (BHM)",
      "Certificate in Food & Beverage Service"
    ],
    "specializations": [
      "Bakery & Confectionery",
      "Housekeeping",
      "Resort Management",
      "Hospitality Management",
      "Airline Hospitality",
      "Hotel Operations",
      "Food Production",
      "Luxury Hotel Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Sports",
      "Conference Hall",
      "Wi-Fi Campus",
      "Restaurant Laboratory",
      "Central Library",
      "Transport",
      "Advanced Kitchen",
      "Hostel"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "AccorHotels (Novotel, Sofitel)",
        "SOTC Travel",
        "MakeMyTrip",
        "Thomas Cook",
        "Hilton Hotels & Resorts",
        "ITC Hotels",
        "Taj Hotels Palaces Resorts Safaris"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 41,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 10,
      "industryExperts": 15,
      "visitingFacultyCount": 14
    },
    "contact": {
      "phone": "+91 9243649138",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1.org",
      "admissionOfficeContact": "+91 7145172166",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-bhopal-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-120",
    "name": "Indian Institute of Tourism & Travel Management (IITTM) Campus, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Hospitality Zone, Tourism Highway, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Indian+Institute+of+Tourism+&+Travel+Management+(IITTM)+Campus,+Jaipur+Jaipur",
    "website": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1.ac.in",
    "admissionPortalUrl": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "Ministry of Tourism, Government of India",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A+",
    "yearEstablished": 1990,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Hospitality Management",
      "M.Sc Hospitality",
      "Bachelor of Hotel Management (BHM)",
      "BBA Tourism Management",
      "MBA Tourism Management",
      "Diploma in Housekeeping",
      "Diploma in Food Production",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Hospitality Management",
      "Food Production",
      "Event Management",
      "Food & Beverage Service",
      "Airline Hospitality",
      "Hotel Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Training Restaurant",
      "Computer Laboratory",
      "Bakery Laboratory",
      "Central Library",
      "Housekeeping Laboratory",
      "Medical Facility",
      "Seminar Hall",
      "Training Kitchen",
      "Restaurant Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Lemon Tree Hotels",
        "SOTC Travel",
        "ITC Hotels",
        "AccorHotels (Novotel, Sofitel)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 41,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 4,
      "industryExperts": 9,
      "visitingFacultyCount": 7
    },
    "contact": {
      "phone": "+91 9528255426",
      "email": "ihm@indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1.org",
      "admissionOfficeContact": "+91 7433827029",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1",
        "twitter": "https://twitter.com/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1",
        "linkedin": "https://linkedin.com/school/indian-institute-of-tourism-and-travel-management-iittm-campus-jaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-jodhpur-121",
    "name": "International Culinary Academy & Hotel Management, Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Hospitality Zone, Tourism Highway, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Jodhpur+Jodhpur",
    "website": "https://international-culinary-academy-and-hotel-management-jodhpur-1.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-jodhpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B",
    "yearEstablished": 1989,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Culinary Arts",
      "MBA Hospitality Management",
      "B.Sc Hospitality & Hotel Administration",
      "Certificate in Food & Beverage Service",
      "Diploma in Food Production",
      "BBA Hospitality Management"
    ],
    "specializations": [
      "Sustainable Tourism",
      "Food & Beverage Service",
      "Hospitality Marketing",
      "Hospitality Management",
      "Airline Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-jodhpur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Front Office Laboratory",
      "Restaurant Laboratory",
      "Medical Facility",
      "Language Laboratory",
      "Computer Laboratory",
      "Seminar Hall",
      "Hostel",
      "Advanced Kitchen",
      "Conference Hall",
      "Digital Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Thomas Cook",
        "Carnival Cruise Line",
        "Taj Hotels Palaces Resorts Safaris",
        "Lemon Tree Hotels",
        "Royal Caribbean Cruise Line",
        "Hilton Hotels & Resorts",
        "Radisson Hotel Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Meenakshi Sundaram",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 36,
      "studentFacultyRatio": "14:1",
      "executiveChefsCount": 11,
      "industryExperts": 11,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 8256446892",
      "email": "ihm@international-culinary-academy-and-hotel-management-jodhpur-1.org",
      "admissionOfficeContact": "+91 7701572111",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-jodhpur-1",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-jodhpur-1",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-jodhpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-122",
    "name": "Institute of Hotel Management, Catering Technology & Applied Nutrition (IHM), Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "Hospitality Zone, Tourism Highway, Mumbai, Mumbai City, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Hotel+Management,+Catering+Technology+&+Applied+Nutrition+(IHM),+Mumbai+Mumbai",
    "website": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1.edu.in",
    "admissionPortalUrl": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "National Council for Hotel Management & Catering Technology (NCHMCT)",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 2008,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Bakery & Confectionery",
      "Diploma in Culinary Arts",
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "MBA Tourism Management",
      "Diploma in Front Office"
    ],
    "specializations": [
      "Housekeeping",
      "Hospitality Marketing",
      "International Cuisine",
      "Revenue Management",
      "Event Management",
      "Bakery & Confectionery",
      "Airline Hospitality",
      "Cruise Hospitality"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Training Kitchen",
      "Language Laboratory",
      "Housekeeping Laboratory",
      "Wi-Fi Campus",
      "Digital Library",
      "Computer Laboratory",
      "Bakery Laboratory",
      "Seminar Hall",
      "Conference Hall",
      "Hostel",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Leela Palaces, Hotels and Resorts",
        "Lemon Tree Hotels",
        "Marriott International",
        "AccorHotels (Novotel, Sofitel)",
        "Carnival Cruise Line"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 41,
      "studentFacultyRatio": "13:1",
      "executiveChefsCount": 9,
      "industryExperts": 8,
      "visitingFacultyCount": 15
    },
    "contact": {
      "phone": "+91 9878027183",
      "email": "ihm@institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1.org",
      "admissionOfficeContact": "+91 7240227076",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1",
        "twitter": "https://twitter.com/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1",
        "linkedin": "https://linkedin.com/school/institute-of-hotel-management-catering-technology-and-applied-nutrition-ihm-mumbai-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "international-culinary-academy-and-hotel-management-udaipur-123",
    "name": "International Culinary Academy & Hotel Management, Udaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "address": "Hospitality Zone, Tourism Highway, Udaipur, Udaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+Culinary+Academy+&+Hotel+Management,+Udaipur+Udaipur",
    "website": "https://international-culinary-academy-and-hotel-management-udaipur-1.edu.in",
    "admissionPortalUrl": "https://international-culinary-academy-and-hotel-management-udaipur-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Recognized",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B++",
    "yearEstablished": 1989,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Front Office",
      "Diploma in Culinary Arts",
      "B.Sc Hospitality & Hotel Administration",
      "MBA Tourism Management"
    ],
    "specializations": [
      "Restaurant Management",
      "Cruise Hospitality",
      "Tourism Management",
      "Travel Management",
      "Resort Management",
      "Sustainable Tourism"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://international-culinary-academy-and-hotel-management-udaipur-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Auditorium",
      "Bakery Laboratory",
      "Training Kitchen",
      "Wi-Fi Campus",
      "Restaurant Laboratory",
      "Language Laboratory",
      "Medical Facility",
      "Central Library"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "Hilton Hotels & Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Taj Hotels Palaces Resorts Safaris",
        "The Oberoi Group"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Abdul Qadir",
      "director": "Dr. V. K. Kapoor",
      "facultyStrength": 27,
      "studentFacultyRatio": "17:1",
      "executiveChefsCount": 6,
      "industryExperts": 8,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 7165734352",
      "email": "ihm@international-culinary-academy-and-hotel-management-udaipur-1.org",
      "admissionOfficeContact": "+91 7908073970",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-culinary-academy-and-hotel-management-udaipur-1",
        "twitter": "https://twitter.com/international-culinary-academy-and-hotel-management-udaipur-1",
        "linkedin": "https://linkedin.com/school/international-culinary-academy-and-hotel-management-udaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-124",
    "name": "Oberoi & Taj Allied College of Hotel Management & Catering Technology, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Hospitality Zone, Tourism Highway, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Oberoi+&+Taj+Allied+College+of+Hotel+Management+&+Catering+Technology,+Vadodara+Vadodara",
    "website": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1.edu.in",
    "admissionPortalUrl": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1.edu.in/apply",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": false,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "B+",
    "yearEstablished": 2006,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "MHM (Master of Hotel Management)",
      "Diploma in Front Office",
      "Diploma in Food Production",
      "MBA Tourism Management",
      "Diploma in Culinary Arts"
    ],
    "specializations": [
      "Food & Beverage Service",
      "Airline Hospitality",
      "Bakery & Confectionery",
      "Housekeeping",
      "Luxury Hotel Management",
      "Cruise Hospitality",
      "Tourism Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Transport",
      "Auditorium",
      "Language Laboratory",
      "Central Library",
      "Wi-Fi Campus",
      "Bakery Laboratory",
      "Medical Facility",
      "Front Office Laboratory"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "The Oberoi Group",
        "Leela Palaces, Hotels and Resorts",
        "AccorHotels (Novotel, Sofitel)",
        "Royal Caribbean Cruise Line",
        "Emirates Flight Catering",
        "Radisson Hotel Group",
        "Hyatt Hotels Corporation",
        "Marriott International"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b91,45,000 - \u20b92,80,000 / yr",
      "hostelFees": "\u20b965,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. G. K. Oberoi",
      "director": "Dr. Farida Merchant",
      "facultyStrength": 18,
      "studentFacultyRatio": "16:1",
      "executiveChefsCount": 4,
      "industryExperts": 19,
      "visitingFacultyCount": 12
    },
    "contact": {
      "phone": "+91 9275653115",
      "email": "ihm@oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1.org",
      "admissionOfficeContact": "+91 7592114510",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1",
        "twitter": "https://twitter.com/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1",
        "linkedin": "https://linkedin.com/school/oberoi-and-taj-allied-college-of-hotel-management-and-catering-technology-vadodara-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  },
  {
    "id": "al-habib-college-of-hotel-management-and-catering-technology-mysore-125",
    "name": "Al-Habib College of Hotel Management & Catering Technology, Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Hospitality Zone, Tourism Highway, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Habib+College+of+Hotel+Management+&+Catering+Technology,+Mysore+Mysore",
    "website": "https://al-habib-college-of-hotel-management-and-catering-technology-mysore-1.ac.in",
    "admissionPortalUrl": "https://al-habib-college-of-hotel-management-and-catering-technology-mysore-1.ac.in/admissions",
    "counsellingPortalUrl": "https://nchmcounselling.nic.in",
    "universityAffiliation": "State University & NCHMCT Affiliated",
    "nchmctAffiliated": true,
    "aicteApproved": true,
    "ugcRecognized": true,
    "naacGrade": "A",
    "yearEstablished": 1978,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Front Office",
      "MBA Hospitality Management",
      "Diploma in Bakery & Confectionery",
      "B.Sc Hospitality & Hotel Administration",
      "MHM (Master of Hotel Management)",
      "Bachelor of Hotel Management & Catering Technology (BHMCT)",
      "BBA Tourism Management"
    ],
    "specializations": [
      "Tourism Management",
      "Bakery & Confectionery",
      "Food & Beverage Service",
      "Sustainable Tourism",
      "Food Production",
      "Event Management",
      "Housekeeping",
      "Luxury Hotel Management",
      "Hospitality Marketing"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with English as a compulsory subject from a recognized board",
      "entranceExams": [
        "NCHM JEE (National Council Hotel Management Joint Entrance Exam)",
        "CUET-UG",
        "University Entrance Test"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "NCHM JEE merit rank followed by centralized online seat allocation counselling and physical document verification.",
      "admissionLink": "https://al-habib-college-of-hotel-management-and-catering-technology-mysore-1.ac.in/admissions-2026",
      "counsellingLink": "https://nchmcounselling.nic.in"
    },
    "trainingFacilities": [
      "Restaurant Laboratory",
      "Hostel",
      "Digital Library",
      "Sports",
      "Training Restaurant",
      "Language Laboratory",
      "Mock Hotel Rooms",
      "Central Library",
      "Advanced Kitchen"
    ],
    "industryTraining": {
      "industrialTrainingDuration": "20 Weeks Mandatory Industrial Exposure Training in 5-Star Luxury Hotels",
      "hotelInternship": "Taj, Oberoi, Marriott, ITC 5-Star Properties",
      "restaurantInternship": true,
      "cruiseInternship": true,
      "internationalInternship": true,
      "airportHospitalityTraining": true,
      "industryCollaboration": "MoU with leading global hotel chains and cruise lines",
      "studentExchange": true,
      "entrepreneurshipCell": true
    },
    "placement": {
      "hasPlacementCell": true,
      "hotelPlacements": true,
      "cruiseLinePlacements": true,
      "airlineHospitalityPlacements": true,
      "restaurantPlacements": true,
      "eventIndustryPlacements": true,
      "tourismIndustryPlacements": true,
      "highestPackage": "\u20b99.5 Lakhs - \u20b918.0 Lakhs / yr",
      "averagePackage": "\u20b93.8 Lakhs - \u20b96.5 Lakhs / yr",
      "topRecruiters": [
        "MakeMyTrip",
        "SOTC Travel",
        "Taj Hotels Palaces Resorts Safaris",
        "Lemon Tree Hotels"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "tuitionFees": "\u20b985,000 - \u20b91,35,000 / yr",
      "hostelFees": "\u20b935,000 / yr",
      "uniformCharges": "\u20b912,000 One-time (Executive Suit & Kitchen Chef Coat)",
      "trainingKitCharges": "\u20b98,000 One-time (Professional Chef Knife Kit & Toolkit)",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Chef / Prof. Tariq Hussain",
      "director": "Dr. P. K. Sengupta",
      "facultyStrength": 27,
      "studentFacultyRatio": "12:1",
      "executiveChefsCount": 10,
      "industryExperts": 11,
      "visitingFacultyCount": 10
    },
    "contact": {
      "phone": "+91 9860766066",
      "email": "ihm@al-habib-college-of-hotel-management-and-catering-technology-mysore-1.org",
      "admissionOfficeContact": "+91 8188835192",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-habib-college-of-hotel-management-and-catering-technology-mysore-1",
        "twitter": "https://twitter.com/al-habib-college-of-hotel-management-and-catering-technology-mysore-1",
        "linkedin": "https://linkedin.com/school/al-habib-college-of-hotel-management-and-catering-technology-mysore-1"
      }
    },
    "lastVerifiedDate": "2026-05-25"
  }
];
