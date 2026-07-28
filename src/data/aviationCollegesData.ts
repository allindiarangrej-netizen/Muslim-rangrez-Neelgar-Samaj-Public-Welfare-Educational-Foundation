export interface AviationCollegeProfile {
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
  dgcaApprovalStatus: string;
  aicteApproval: string;
  ugcRecognition: string;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Minority Institution';
  isMinorityInstitution: boolean;
  programmes: string[];
  specializations: string[];
  admissionDetails: {
    eligibility: string;
    medicalRequirements: string;
    entranceExams: string[];
    interviewProcess: string;
    flyingAptitudeTest: boolean;
    englishProficiency: string;
    admissionLink: string;
    counsellingLink: string;
  };
  trainingFacilities: string[];
  flightTraining: {
    flyingFleet: string;
    flyingHours: string;
    simulatorHours: string;
    nightFlying: string;
    crossCountryFlying: string;
    instrumentFlying: string;
    multiEngineTraining: string;
    jetOrientation: string;
    typeRatingGuidance: string;
  };
  placement: {
    hasPlacementCell: boolean;
    airlinePlacements: boolean;
    airportPlacements: boolean;
    groundStaffRecruitment: boolean;
    cabinCrewRecruitment: boolean;
    pilotPlacementSupport: boolean;
    amePlacement: boolean;
    highestPackage: string;
    averagePackage: string;
    topRecruiters: string[];
    internationalPlacementSupport: boolean;
  };
  financialInfo: {
    courseFees: string;
    flyingTrainingCost: string;
    hostelFees: string;
    govtScholarships: boolean;
    minorityScholarships: boolean;
    loanAssistance: boolean;
    installmentOptions: string;
  };
  faculty: {
    director: string;
    chiefFlightInstructor: string;
    chiefGroundInstructor: string;
    facultyStrength: number;
    industryExperts: number;
    visitingPilotsCount: number;
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
  dgcaApproved: boolean;
  ugcRecognized: boolean;
  aicteApproved: boolean;
}

export const AVIATION_COLLEGES: AviationCollegeProfile[] = [
  {
    "id": "school-of-aircraft-maintenance-engineering-same-mangalore-1",
    "name": "School of Aircraft Maintenance Engineering (SAME), Mangalore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangalore",
    "address": "Airport Road, Civil Aerodrome, Mangalore, Dakshina Kannada, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Mangalore+Mangalore",
    "website": "https://school-of-aircraft-maintenance-engineering-same-mangalore.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-mangalore.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1984,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "MBA Aviation Management",
      "Drone Technology & UAV Pilot",
      "Aviation Logistics & Cargo Management",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Drone Technology",
      "UAV Operations",
      "Aviation Finance",
      "Aviation Law",
      "Air Cargo",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-mangalore.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Sports",
      "Aircraft Hangar",
      "Wi-Fi Campus",
      "Meteorology Lab",
      "Computer Labs",
      "Medical Facility",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "14 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "GMR Airports",
        "Qatar Airways",
        "Etihad Airways",
        "Emirates",
        "Boeing India",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 27,
      "industryExperts": 7,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7547588309",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-mangalore.org",
      "admissionOfficeContact": "+91 7947662448",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-mangalore",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-mangalore",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-mangalore"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-calicut-2",
    "name": "Hindustan Institute of Aeronautics (AME), Calicut",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Calicut",
    "address": "Airport Road, Civil Aerodrome, Calicut, Kozhikode, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Calicut+Calicut",
    "website": "https://hindustan-institute-of-aeronautics-ame-calicut.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-calicut.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2015,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Air Navigation",
      "Airline Operations",
      "Air Cargo",
      "Aircraft Engineering",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-calicut.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Medical Facility",
      "Computer Labs",
      "Transport",
      "Navigation Lab",
      "Aircraft Hangar",
      "Maintenance Workshop",
      "Airport Training Facility",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "AirAsia India",
        "Airports Authority of India (AAI)",
        "Air India",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 16,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7553401197",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-calicut.org",
      "admissionOfficeContact": "+91 9403453790",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-calicut",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-calicut",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-calicut"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-dwarka-3",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Dwarka",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Dwarka",
    "address": "Airport Road, Civil Aerodrome, Dwarka, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Dwarka+Dwarka",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-dwarka.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-dwarka.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2006,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aircraft Systems",
      "International Aviation",
      "Air Navigation",
      "Air Cargo",
      "Airport Management",
      "Commercial Flying",
      "UAV Operations",
      "Airline Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-dwarka.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Flying Fleet",
      "Flight Simulators",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Navigation Lab",
      "Transport",
      "Wi-Fi Campus",
      "Maintenance Workshop",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "7 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "AirAsia India",
        "Emirates",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 15,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7355708258",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-dwarka.org",
      "admissionOfficeContact": "+91 9379135244",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-dwarka",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-dwarka",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-dwarka"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-bhopal-4",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Airport Road, Civil Aerodrome, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Bhopal+Bhopal",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1991,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Airport Management",
      "Flight Dispatcher Certificate",
      "Drone Technology & UAV Pilot",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "International Aviation",
      "Air Cargo",
      "Ground Operations",
      "UAV Operations",
      "Helicopter Flying",
      "Avionics",
      "Airport Management",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Transport",
      "Hostel",
      "Sports",
      "Navigation Lab",
      "Airport Training Facility",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Alliance Air",
        "Adani Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 18,
      "industryExperts": 15,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 7862505151",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-bhopal.org",
      "admissionOfficeContact": "+91 9033586945",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-bhopal",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-bhopal",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-bhopal"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-begumpet-5",
    "name": "School of Aircraft Maintenance Engineering (SAME), Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Begumpet+Begumpet",
    "website": "https://school-of-aircraft-maintenance-engineering-same-begumpet.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-begumpet.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1971,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aviation Logistics & Cargo Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Drone Technology",
      "Helicopter Flying",
      "Aircraft Systems",
      "UAV Operations",
      "Commercial Flying",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-begumpet.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Emergency Evacuation Trainer",
      "Cabin Mock-up",
      "Wi-Fi Campus",
      "Navigation Lab",
      "Aircraft Hangar",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Air India",
        "HAL",
        "IndiGo Airlines",
        "Adani Airports",
        "Emirates",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 31,
      "industryExperts": 14,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8398164915",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-begumpet.org",
      "admissionOfficeContact": "+91 7742859307",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-begumpet",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-begumpet",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-begumpet"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum-6",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Airport Road, Civil Aerodrome, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Trivandrum+Trivandrum",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2005,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Flight Dispatcher Certificate",
      "Drone Technology & UAV Pilot",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)"
    ],
    "specializations": [
      "Commercial Flying",
      "Aircraft Systems",
      "Air Navigation",
      "Aircraft Engineering",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Navigation Lab",
      "Hostel",
      "Flight Simulators",
      "Airport Training Facility",
      "Medical Facility",
      "Cabin Mock-up",
      "Maintenance Workshop"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Adani Airports",
        "AirAsia India",
        "Blue Dart Aviation",
        "HAL",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 11,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7948523895",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.org",
      "admissionOfficeContact": "+91 9858210543",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum-7",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Airport Road, Civil Aerodrome, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Trivandrum+Trivandrum",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2000,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "MBA Aviation Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)",
      "Private Pilot Licence (PPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "Airline Operations",
      "Aviation Law",
      "Drone Technology",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Navigation Lab",
      "Airport Training Facility",
      "Flying Fleet",
      "Computer Labs",
      "Engine Laboratory",
      "Hostel",
      "Digital Library",
      "Maintenance Workshop",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Airbus India",
        "Emirates",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 30,
      "industryExperts": 12,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9354285433",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum.org",
      "admissionOfficeContact": "+91 9595776033",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-trivandrum"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota-8",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Kota",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Kota",
    "city": "Kota",
    "address": "Airport Road, Civil Aerodrome, Kota, Kota, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Kota+Kota",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2010,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Drone Technology & UAV Pilot",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Air Navigation",
      "Aviation Finance",
      "Ground Operations",
      "Commercial Flying",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Wi-Fi Campus",
      "Central Library",
      "Sports",
      "Meteorology Lab",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Pawan Hans Helicopters",
        "GMR Airports",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 29,
      "industryExperts": 14,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7465104030",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota.org",
      "admissionOfficeContact": "+91 7270106244",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kota"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-dundigal-9",
    "name": "Al-Ameen Flying Club & Aviation Academy, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Dundigal+Dundigal",
    "website": "https://al-ameen-flying-club-and-aviation-academy-dundigal.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-dundigal.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Flight Dispatcher Certificate",
      "B.Sc. Aviation",
      "Aviation Logistics & Cargo Management",
      "Drone Technology & UAV Pilot",
      "BBA Airport Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Airport Management",
      "Ground Operations",
      "Aviation Finance",
      "Aviation Law",
      "Avionics",
      "Commercial Flying",
      "Air Navigation",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-dundigal.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Meteorology Lab",
      "Digital Library",
      "Transport",
      "Flight Simulators",
      "Medical Facility",
      "Cabin Mock-up",
      "Aircraft Hangar",
      "Flying Fleet",
      "Airport Training Facility",
      "Engine Laboratory",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "24 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Airports Authority of India (AAI)",
        "Pawan Hans Helicopters",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 37,
      "industryExperts": 16,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 9543716384",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-dundigal.org",
      "admissionOfficeContact": "+91 9582560971",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-dundigal",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-dundigal",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-dundigal"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-jakkur-10",
    "name": "School of Aircraft Maintenance Engineering (SAME), Jakkur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Jakkur",
    "address": "Airport Road, Civil Aerodrome, Jakkur, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Jakkur+Jakkur",
    "website": "https://school-of-aircraft-maintenance-engineering-same-jakkur-.gov.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-jakkur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1997,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "BBA Airport Management",
      "B.Sc. Aviation",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "UAV Operations",
      "Meteorology",
      "Aviation Law",
      "Commercial Flying",
      "Helicopter Flying",
      "Ground Operations",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-jakkur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Digital Library",
      "Avionics Laboratory",
      "Cabin Mock-up",
      "Meteorology Lab",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "19 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Emirates",
        "Akasa Air",
        "HAL",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 41,
      "industryExperts": 6,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 9990713180",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-jakkur-.org",
      "admissionOfficeContact": "+91 9716486048",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-jakkur-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-jakkur-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-jakkur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-dwarka-11",
    "name": "International School of Aviation & Airport Management, Dwarka",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Dwarka",
    "address": "Airport Road, Civil Aerodrome, Dwarka, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Dwarka+Dwarka",
    "website": "https://international-school-of-aviation-and-airport-management-dwarka-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-dwarka-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Aviation Logistics & Cargo Management",
      "Flight Dispatcher Certificate",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Meteorology",
      "UAV Operations",
      "International Aviation",
      "Aviation Law",
      "Drone Technology",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-dwarka-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Cabin Mock-up",
      "Meteorology Lab",
      "Wi-Fi Campus",
      "Computer Labs",
      "Transport",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "12 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Air India Express",
        "Boeing India",
        "HAL",
        "Alliance Air",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 7,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 8709466171",
      "email": "admissions@international-school-of-aviation-and-airport-management-dwarka-.org",
      "admissionOfficeContact": "+91 9972996477",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-dwarka-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-dwarka-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-dwarka-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-prayagraj-12",
    "name": "Government Flying Training School (GFTS), Prayagraj",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "city": "Prayagraj",
    "address": "Airport Road, Civil Aerodrome, Prayagraj, Prayagraj, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Prayagraj+Prayagraj",
    "website": "https://government-flying-training-school-gfts-prayagraj-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-prayagraj-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2017,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)",
      "MBA Aviation Management",
      "BBA Airport Management",
      "Cabin Crew & Air Hostess Diploma",
      "Drone Technology & UAV Pilot",
      "Aviation Logistics & Cargo Management"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Aviation Finance",
      "Airline Operations",
      "Ground Operations",
      "Drone Technology",
      "Commercial Flying",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-prayagraj-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Cabin Mock-up",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Computer Labs",
      "Maintenance Workshop",
      "Avionics Laboratory",
      "Transport",
      "Central Library",
      "Digital Library",
      "Sports",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "8 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Emirates",
        "Airbus India",
        "HAL",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 37,
      "industryExperts": 17,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8326528774",
      "email": "admissions@government-flying-training-school-gfts-prayagraj-.org",
      "admissionOfficeContact": "+91 7803323602",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-prayagraj-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-prayagraj-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-prayagraj-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-behala-13",
    "name": "Government Flying Training School (GFTS), Behala",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Behala",
    "address": "Airport Road, Civil Aerodrome, Behala, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Behala+Behala",
    "website": "https://government-flying-training-school-gfts-behala-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-behala-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2014,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "BBA Airport Management",
      "Student Pilot Licence (SPL)"
    ],
    "specializations": [
      "Commercial Flying",
      "Drone Technology",
      "Flight Safety",
      "Meteorology",
      "Aviation Finance",
      "International Aviation",
      "Avionics",
      "Ground Operations",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-behala-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Transport",
      "Sports",
      "Flight Simulators",
      "Flying Fleet",
      "Digital Library",
      "Navigation Lab",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Cabin Mock-up",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "23 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "GMR Airports",
        "Airports Authority of India (AAI)",
        "IndiGo Airlines",
        "Adani Airports",
        "Blue Dart Aviation",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 21,
      "industryExperts": 15,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 9536192200",
      "email": "admissions@government-flying-training-school-gfts-behala-.org",
      "admissionOfficeContact": "+91 9016491894",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-behala-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-behala-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-behala-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-14",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Airport Road, Civil Aerodrome, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Vadodara+Vadodara",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2017,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Private Pilot Licence (PPL)",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "UAV Operations",
      "International Aviation",
      "Meteorology",
      "Aviation Finance",
      "Air Navigation",
      "Aircraft Engineering",
      "Flight Safety",
      "Ground Operations",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Maintenance Workshop",
      "Navigation Lab",
      "Medical Facility",
      "Central Library",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Alliance Air",
        "Airbus India",
        "GMR Airports",
        "IndiGo Airlines",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 30,
      "industryExperts": 13,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9236720576",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-.org",
      "admissionOfficeContact": "+91 8123776579",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-vadodara-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-club-and-aviation-academy-bareilly-15",
    "name": "National Flying Club & Aviation Academy, Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Airport Road, Civil Aerodrome, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Club+&+Aviation+Academy,+Bareilly+Bareilly",
    "website": "https://national-flying-club-and-aviation-academy-bareilly-.edu.in",
    "admissionPortalUrl": "https://national-flying-club-and-aviation-academy-bareilly-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1997,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management"
    ],
    "specializations": [
      "Ground Operations",
      "Aircraft Engineering",
      "Avionics",
      "Air Cargo",
      "Commercial Flying",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-club-and-aviation-academy-bareilly-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Sports",
      "Flying Fleet",
      "Maintenance Workshop",
      "Digital Library",
      "Transport",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "GMR Airports",
        "Adani Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 37,
      "industryExperts": 12,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8915955293",
      "email": "admissions@national-flying-club-and-aviation-academy-bareilly-.org",
      "admissionOfficeContact": "+91 9635464706",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-club-and-aviation-academy-bareilly-",
        "twitter": "https://twitter.com/national-flying-club-and-aviation-academy-bareilly-",
        "linkedin": "https://linkedin.com/school/national-flying-club-and-aviation-academy-bareilly-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-rohini-16",
    "name": "Hindustan Institute of Aeronautics (AME), Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Airport Road, Civil Aerodrome, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Rohini+Rohini",
    "website": "https://hindustan-institute-of-aeronautics-ame-rohini-.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-rohini-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1996,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "International Aviation",
      "Avionics",
      "Air Cargo",
      "Meteorology",
      "Aircraft Systems",
      "Ground Operations",
      "Aviation Finance",
      "Airline Operations",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-rohini-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Cabin Mock-up",
      "Navigation Lab",
      "Transport",
      "Airport Training Facility",
      "Sports",
      "Flying Fleet",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "AirAsia India",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 17,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8525001778",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-rohini-.org",
      "admissionOfficeContact": "+91 8399187159",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-rohini-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-rohini-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-rohini-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-17",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Airport Road, Civil Aerodrome, Kolkata, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Kolkata+Kolkata",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1996,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Student Pilot Licence (SPL)",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Drone Technology",
      "Air Navigation",
      "Commercial Flying",
      "Air Cargo",
      "Avionics"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Central Library",
      "Meteorology Lab",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Computer Labs",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Cabin Mock-up",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Air India Express",
        "Airports Authority of India (AAI)",
        "IndiGo Airlines",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 15,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8816600550",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-.org",
      "admissionOfficeContact": "+91 8755693791",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-kolkata-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-neemuch-18",
    "name": "Hindustan Institute of Aeronautics (AME), Neemuch",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "city": "Neemuch",
    "address": "Airport Road, Civil Aerodrome, Neemuch, Neemuch, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Neemuch+Neemuch",
    "website": "https://hindustan-institute-of-aeronautics-ame-neemuch-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-neemuch-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2015,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "MBA Aviation Management",
      "Student Pilot Licence (SPL)",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Commercial Flying",
      "Aviation Law",
      "Ground Operations",
      "Drone Technology",
      "Helicopter Flying",
      "Aircraft Systems",
      "Airline Operations",
      "Air Cargo",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-neemuch-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Transport",
      "Airport Training Facility",
      "Medical Facility",
      "Flying Fleet",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Sports",
      "Avionics Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Qatar Airways",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 14,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9270139731",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-neemuch-.org",
      "admissionOfficeContact": "+91 7546630310",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-neemuch-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-neemuch-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-neemuch-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-trichy-19",
    "name": "Hindustan Institute of Aeronautics (AME), Trichy",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "city": "Trichy",
    "address": "Airport Road, Civil Aerodrome, Trichy, Tiruchirappalli, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Trichy+Trichy",
    "website": "https://hindustan-institute-of-aeronautics-ame-trichy-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-trichy-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1999,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Aircraft Systems",
      "Airport Management",
      "International Aviation",
      "Ground Operations",
      "Flight Safety",
      "Aircraft Engineering",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-trichy-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Engine Laboratory",
      "Computer Labs",
      "Medical Facility",
      "Flying Fleet",
      "Wi-Fi Campus",
      "Transport",
      "Central Library",
      "Digital Library",
      "Airport Training Facility",
      "Flight Simulators",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "17 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "HAL",
        "GMR Airports",
        "Alliance Air",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 13,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 8802626857",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-trichy-.org",
      "admissionOfficeContact": "+91 8482279068",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-trichy-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-trichy-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-trichy-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-durgapur-20",
    "name": "School of Aircraft Maintenance Engineering (SAME), Durgapur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "city": "Durgapur",
    "address": "Airport Road, Civil Aerodrome, Durgapur, Paschim Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Durgapur+Durgapur",
    "website": "https://school-of-aircraft-maintenance-engineering-same-durgapur-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-durgapur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1991,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate",
      "BBA Airport Management",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Commercial Flying",
      "UAV Operations",
      "Drone Technology",
      "Airline Operations",
      "Helicopter Flying",
      "Airport Management",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-durgapur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Meteorology Lab",
      "Airport Training Facility",
      "Navigation Lab",
      "Avionics Laboratory",
      "Medical Facility",
      "Engine Laboratory",
      "Maintenance Workshop",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Blue Dart Aviation",
        "Vistara",
        "Etihad Airways",
        "Air India Express",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 6,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9825018420",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-durgapur-.org",
      "admissionOfficeContact": "+91 7508756154",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-durgapur-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-durgapur-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-durgapur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-bhopal-21",
    "name": "International School of Aviation & Airport Management, Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Airport Road, Civil Aerodrome, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Bhopal+Bhopal",
    "website": "https://international-school-of-aviation-and-airport-management-bhopal-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-bhopal-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2008,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Flight Dispatcher Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "Aviation Safety & Security Certificate",
      "Student Pilot Licence (SPL)"
    ],
    "specializations": [
      "Air Cargo",
      "Helicopter Flying",
      "Aircraft Systems",
      "International Aviation",
      "Aircraft Engineering",
      "Avionics",
      "Meteorology",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-bhopal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Hostel",
      "Cabin Mock-up",
      "Emergency Evacuation Trainer",
      "Aircraft Hangar",
      "Sports",
      "Digital Library",
      "Engine Laboratory",
      "Transport",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "GMR Airports",
        "Adani Airports",
        "Blue Dart Aviation",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 17,
      "industryExperts": 13,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 8587741166",
      "email": "admissions@international-school-of-aviation-and-airport-management-bhopal-.org",
      "admissionOfficeContact": "+91 7358813630",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-bhopal-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-bhopal-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-bhopal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-22",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Muzaffarpur+Muzaffarpur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2013,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "International Aviation",
      "Ground Operations",
      "Airport Management",
      "Avionics",
      "Air Navigation",
      "Drone Technology",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Flying Fleet",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Meteorology Lab",
      "Airport Training Facility",
      "Central Library",
      "Wi-Fi Campus",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "24 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Etihad Airways",
        "GMR Airports",
        "SpiceJet",
        "Airbus India",
        "Boeing India",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 17,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7454140048",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-.org",
      "admissionOfficeContact": "+91 9131008443",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-ghaziabad-23",
    "name": "International School of Aviation & Airport Management, Ghaziabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "city": "Ghaziabad",
    "address": "Airport Road, Civil Aerodrome, Ghaziabad, Ghaziabad, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Ghaziabad+Ghaziabad",
    "website": "https://international-school-of-aviation-and-airport-management-ghaziabad-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-ghaziabad-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc. Aviation",
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "Flight Dispatcher Certificate",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "Aviation Law",
      "Aircraft Engineering",
      "Avionics",
      "Airport Management",
      "Air Navigation",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-ghaziabad-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Flight Simulators",
      "Flying Fleet",
      "Central Library",
      "Transport",
      "Medical Facility",
      "Aircraft Hangar",
      "Sports",
      "Airport Training Facility",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "IndiGo Airlines",
        "Air India Express",
        "Airbus India",
        "Etihad Airways",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 14,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9289008595",
      "email": "admissions@international-school-of-aviation-and-airport-management-ghaziabad-.org",
      "admissionOfficeContact": "+91 9891686249",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-ghaziabad-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-ghaziabad-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-ghaziabad-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-jodhpur-24",
    "name": "Government Flying Training School (GFTS), Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Airport Road, Civil Aerodrome, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Jodhpur+Jodhpur",
    "website": "https://government-flying-training-school-gfts-jodhpur-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-jodhpur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1986,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Flight Dispatcher Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Air Navigation",
      "Commercial Flying",
      "Aircraft Systems",
      "Aviation Law",
      "Helicopter Flying",
      "Avionics",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-jodhpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Computer Labs",
      "Avionics Laboratory",
      "Flying Fleet",
      "Meteorology Lab",
      "Navigation Lab",
      "Aircraft Hangar",
      "Airport Training Facility",
      "Flight Simulators",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "18 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "AirAsia India",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 16,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 7774289996",
      "email": "admissions@government-flying-training-school-gfts-jodhpur-.org",
      "admissionOfficeContact": "+91 9078473932",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-jodhpur-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-jodhpur-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-jodhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-trichy-25",
    "name": "Government Flying Training School (GFTS), Trichy",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "city": "Trichy",
    "address": "Airport Road, Civil Aerodrome, Trichy, Tiruchirappalli, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Trichy+Trichy",
    "website": "https://government-flying-training-school-gfts-trichy-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-trichy-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1989,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation"
    ],
    "specializations": [
      "Airport Management",
      "UAV Operations",
      "Ground Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-trichy-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Flying Fleet",
      "Meteorology Lab",
      "Sports",
      "Navigation Lab",
      "Cabin Mock-up",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "16 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "AirAsia India",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 43,
      "industryExperts": 15,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9436735498",
      "email": "admissions@government-flying-training-school-gfts-trichy-.org",
      "admissionOfficeContact": "+91 9984182569",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-trichy-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-trichy-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-trichy-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-siliguri-26",
    "name": "Hindustan Institute of Aeronautics (AME), Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Airport Road, Civil Aerodrome, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Siliguri+Siliguri",
    "website": "https://hindustan-institute-of-aeronautics-ame-siliguri-.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-siliguri-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1981,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Drone Technology & UAV Pilot",
      "Airline Transport Pilot Licence (ATPL)",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Air Navigation",
      "Commercial Flying",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-siliguri-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Emergency Evacuation Trainer",
      "Aircraft Hangar",
      "Sports",
      "Flying Fleet",
      "Meteorology Lab",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "28 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "IndiGo Airlines",
        "GMR Airports",
        "Air India Express",
        "Emirates",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 12,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8970389792",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-siliguri-.org",
      "admissionOfficeContact": "+91 7693283820",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-siliguri-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-siliguri-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-nashik-27",
    "name": "Hindustan Institute of Aeronautics (AME), Nashik",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nashik",
    "city": "Nashik",
    "address": "Airport Road, Civil Aerodrome, Nashik, Nashik, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Nashik+Nashik",
    "website": "https://hindustan-institute-of-aeronautics-ame-nashik-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-nashik-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1984,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "MBA Aviation Management",
      "BBA Airport Management",
      "Aviation Safety & Security Certificate",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Air Cargo",
      "Aircraft Engineering",
      "Aviation Finance",
      "Aircraft Systems",
      "Drone Technology",
      "Aviation Law",
      "Meteorology",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-nashik-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Airport Training Facility",
      "Sports",
      "Aircraft Hangar",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Transport",
      "Engine Laboratory",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Alliance Air",
        "AirAsia India",
        "Airbus India",
        "Vistara",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 27,
      "industryExperts": 13,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 8096054071",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-nashik-.org",
      "admissionOfficeContact": "+91 9288960947",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-nashik-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-nashik-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-nashik-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-28",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Begumpet+Begumpet",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1977,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Flight Dispatcher Certificate",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "International Aviation",
      "Commercial Flying",
      "Aviation Finance",
      "Avionics",
      "Flight Safety",
      "Aviation Law",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Sports",
      "Cabin Mock-up",
      "Navigation Lab",
      "Aircraft Hangar",
      "Flying Fleet",
      "Engine Laboratory",
      "Airport Training Facility",
      "Medical Facility",
      "Computer Labs",
      "Maintenance Workshop",
      "Flight Simulators"
    ],
    "flightTraining": {
      "flyingFleet": "13 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Emirates",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 17,
      "industryExperts": 13,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 8287264654",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-.org",
      "admissionOfficeContact": "+91 9994468630",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-begumpet-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-dwarka-29",
    "name": "International School of Aviation & Airport Management, Dwarka",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Dwarka",
    "address": "Airport Road, Civil Aerodrome, Dwarka, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Dwarka+Dwarka",
    "website": "https://international-school-of-aviation-and-airport-management-dwarka-.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-dwarka-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Logistics & Cargo Management",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Drone Technology & UAV Pilot"
    ],
    "specializations": [
      "Flight Safety",
      "International Aviation",
      "Helicopter Flying",
      "Airport Management",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-dwarka-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Meteorology Lab",
      "Engine Laboratory",
      "Aircraft Hangar",
      "Emergency Evacuation Trainer",
      "Transport",
      "Wi-Fi Campus",
      "Flying Fleet",
      "Avionics Laboratory",
      "Medical Facility",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Adani Airports",
        "Qatar Airways",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 24,
      "industryExperts": 13,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9190992941",
      "email": "admissions@international-school-of-aviation-and-airport-management-dwarka-.org",
      "admissionOfficeContact": "+91 7045458398",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-dwarka-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-dwarka-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-dwarka-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-dundigal-30",
    "name": "Al-Ameen Flying Club & Aviation Academy, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Dundigal+Dundigal",
    "website": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2018,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Safety & Security Certificate",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Ground Operations",
      "Aviation Law",
      "Helicopter Flying",
      "International Aviation",
      "Aircraft Engineering",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Sports",
      "Cabin Mock-up",
      "Central Library",
      "Hostel",
      "Digital Library",
      "Meteorology Lab",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Alliance Air",
        "GMR Airports",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 17,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 7066646724",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-dundigal-.org",
      "admissionOfficeContact": "+91 8706590171",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-dundigal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-nagpur-31",
    "name": "Government Flying Training School (GFTS), Nagpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nagpur",
    "city": "Nagpur",
    "address": "Airport Road, Civil Aerodrome, Nagpur, Nagpur, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Nagpur+Nagpur",
    "website": "https://government-flying-training-school-gfts-nagpur-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-nagpur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1983,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aviation Law",
      "Ground Operations",
      "Airport Management",
      "International Aviation",
      "UAV Operations",
      "Aircraft Systems",
      "Helicopter Flying",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-nagpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Avionics Laboratory",
      "Meteorology Lab",
      "Wi-Fi Campus",
      "Navigation Lab",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up",
      "Engine Laboratory",
      "Transport",
      "Flying Fleet",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "SpiceJet",
        "Air India Express",
        "HAL",
        "Akasa Air",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 14,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8746356302",
      "email": "admissions@government-flying-training-school-gfts-nagpur-.org",
      "admissionOfficeContact": "+91 7124429771",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-nagpur-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-nagpur-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-nagpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-32",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Dundigal+Dundigal",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2002,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)",
      "Student Pilot Licence (SPL)"
    ],
    "specializations": [
      "Airport Management",
      "Aircraft Engineering",
      "Meteorology",
      "Aircraft Systems",
      "Avionics",
      "International Aviation",
      "Airline Operations",
      "Air Navigation",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Transport",
      "Engine Laboratory",
      "Flying Fleet",
      "Airport Training Facility",
      "Sports",
      "Meteorology Lab",
      "Medical Facility",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "26 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Airbus India",
        "Blue Dart Aviation",
        "Emirates",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 31,
      "industryExperts": 6,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7999503678",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-.org",
      "admissionOfficeContact": "+91 9006765717",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-dundigal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-pune-33",
    "name": "Government Flying Training School (GFTS), Pune",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Airport Road, Civil Aerodrome, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Pune+Pune",
    "website": "https://government-flying-training-school-gfts-pune-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-pune-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2009,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Private Pilot Licence (PPL)",
      "MBA Aviation Management",
      "Drone Technology & UAV Pilot",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Commercial Flying",
      "Aviation Law",
      "Avionics",
      "Helicopter Flying",
      "Airport Management",
      "Meteorology",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-pune-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Avionics Laboratory",
      "Engine Laboratory",
      "Medical Facility",
      "Central Library",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "12 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "AirAsia India",
        "HAL",
        "GMR Airports",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 11,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9923245217",
      "email": "admissions@government-flying-training-school-gfts-pune-.org",
      "admissionOfficeContact": "+91 8350441487",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-pune-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-pune-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-pune-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-dwarka-34",
    "name": "Hindustan Institute of Aeronautics (AME), Dwarka",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Dwarka",
    "address": "Airport Road, Civil Aerodrome, Dwarka, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Dwarka+Dwarka",
    "website": "https://hindustan-institute-of-aeronautics-ame-dwarka-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-dwarka-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1990,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Aviation Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Flight Dispatcher Certificate",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Aircraft Engineering",
      "Aviation Law",
      "Helicopter Flying",
      "Drone Technology",
      "Avionics",
      "Ground Operations",
      "Air Cargo"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-dwarka-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Emergency Evacuation Trainer",
      "Central Library",
      "Digital Library",
      "Aircraft Hangar",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Emirates",
        "GMR Airports",
        "SpiceJet",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 15,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 8906670950",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-dwarka-.org",
      "admissionOfficeContact": "+91 9062867509",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-dwarka-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-dwarka-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-dwarka-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-mysore-35",
    "name": "Hindustan Institute of Aeronautics (AME), Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Airport Road, Civil Aerodrome, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Mysore+Mysore",
    "website": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2006,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "MBA Aviation Management",
      "Private Pilot Licence (PPL)",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "UAV Operations",
      "Aviation Law",
      "Avionics",
      "Airport Management",
      "Air Cargo",
      "Aircraft Systems",
      "Air Navigation",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Meteorology Lab",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Flying Fleet",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Alliance Air",
        "Etihad Airways",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 9,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8145216073",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-mysore-.org",
      "admissionOfficeContact": "+91 8835996900",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-mysore-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-mysore-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-36",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Neemuch",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "city": "Neemuch",
    "address": "Airport Road, Civil Aerodrome, Neemuch, Neemuch, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Neemuch+Neemuch",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1977,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Aviation Safety & Security Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Avionics",
      "Aircraft Systems",
      "Airport Management",
      "Air Cargo",
      "International Aviation",
      "Ground Operations",
      "Aviation Finance",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Medical Facility",
      "Computer Labs",
      "Maintenance Workshop",
      "Central Library",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Emirates",
        "AirAsia India",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 35,
      "industryExperts": 16,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 8431997253",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-.org",
      "admissionOfficeContact": "+91 8907653919",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-neemuch-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-neemuch-37",
    "name": "Government Flying Training School (GFTS), Neemuch",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "city": "Neemuch",
    "address": "Airport Road, Civil Aerodrome, Neemuch, Neemuch, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Neemuch+Neemuch",
    "website": "https://government-flying-training-school-gfts-neemuch-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-neemuch-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1998,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Aviation Safety & Security Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Airline Transport Pilot Licence (ATPL)",
      "Private Pilot Licence (PPL)",
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Commercial Flying",
      "Aviation Law",
      "Airport Management",
      "Helicopter Flying",
      "International Aviation",
      "UAV Operations",
      "Drone Technology",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-neemuch-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Emergency Evacuation Trainer",
      "Avionics Laboratory",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Hostel",
      "Transport",
      "Maintenance Workshop",
      "Flight Simulators",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "IndiGo Airlines",
        "SpiceJet",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 27,
      "industryExperts": 15,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 7878697261",
      "email": "admissions@government-flying-training-school-gfts-neemuch-.org",
      "admissionOfficeContact": "+91 8454896505",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-neemuch-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-neemuch-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-neemuch-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-38",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Airport Road, Civil Aerodrome, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Jaipur+Jaipur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2001,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Aviation Safety & Security Certificate",
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Flight Safety",
      "Avionics",
      "Aviation Finance",
      "International Aviation",
      "Drone Technology",
      "UAV Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Central Library",
      "Hostel",
      "Sports",
      "Engine Laboratory",
      "Flying Fleet",
      "Digital Library",
      "Meteorology Lab",
      "Cabin Mock-up",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "23 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "AirAsia India",
        "Adani Airports",
        "Vistara",
        "Qatar Airways",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 11,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 8166357607",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-.org",
      "admissionOfficeContact": "+91 7106548711",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-mysore-39",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Airport Road, Civil Aerodrome, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Mysore+Mysore",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-mysore-.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-mysore-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1981,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Student Pilot Licence (SPL)",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Helicopter Flying",
      "Aircraft Engineering",
      "Airport Management",
      "Commercial Flying",
      "Flight Safety",
      "Air Cargo",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-mysore-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Flying Fleet",
      "Transport",
      "Wi-Fi Campus",
      "Flight Simulators",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Central Library",
      "Digital Library",
      "Sports",
      "Meteorology Lab",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Adani Airports",
        "AirAsia India",
        "Pawan Hans Helicopters",
        "IndiGo Airlines",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 29,
      "industryExperts": 17,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 9312148296",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-mysore-.org",
      "admissionOfficeContact": "+91 9036342098",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-mysore-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-mysore-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-ujjain-40",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Ujjain",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "city": "Ujjain",
    "address": "Airport Road, Civil Aerodrome, Ujjain, Ujjain, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Ujjain+Ujjain",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-ujjain-.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-ujjain-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2009,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Aviation Safety & Security Certificate",
      "B.Sc. Aviation",
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Finance",
      "Airline Operations",
      "Avionics",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-ujjain-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Engine Laboratory",
      "Flying Fleet",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Adani Airports",
        "IndiGo Airlines",
        "Airports Authority of India (AAI)",
        "Alliance Air",
        "Qatar Airways",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 18,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7246200617",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-ujjain-.org",
      "admissionOfficeContact": "+91 9047504871",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-ujjain-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-ujjain-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-ujjain-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-madurai-41",
    "name": "Hindustan Institute of Aeronautics (AME), Madurai",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Madurai",
    "city": "Madurai",
    "address": "Airport Road, Civil Aerodrome, Madurai, Madurai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Madurai+Madurai",
    "website": "https://hindustan-institute-of-aeronautics-ame-madurai-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-madurai-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1994,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "MBA Aviation Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Student Pilot Licence (SPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "International Aviation",
      "Helicopter Flying",
      "Drone Technology",
      "Airline Operations",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-madurai-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Engine Laboratory",
      "Medical Facility",
      "Wi-Fi Campus",
      "Sports",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "HAL",
        "SpiceJet",
        "Vistara",
        "Boeing India",
        "Blue Dart Aviation",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 10,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 7296484519",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-madurai-.org",
      "admissionOfficeContact": "+91 9064991053",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-madurai-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-madurai-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-madurai-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-khajuraho-42",
    "name": "Al-Ameen Flying Club & Aviation Academy, Khajuraho",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "city": "Khajuraho",
    "address": "Airport Road, Civil Aerodrome, Khajuraho, Chhatarpur, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Khajuraho+Khajuraho",
    "website": "https://al-ameen-flying-club-and-aviation-academy-khajuraho-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-khajuraho-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1993,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Student Pilot Licence (SPL)",
      "B.Sc. Aviation",
      "Private Pilot Licence (PPL)",
      "Cabin Crew & Air Hostess Diploma",
      "MBA Aviation Management",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Air Navigation",
      "International Aviation",
      "Aviation Law",
      "Airport Management",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-khajuraho-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Wi-Fi Campus",
      "Flying Fleet",
      "Hostel",
      "Cabin Mock-up",
      "Flight Simulators",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "6 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Adani Airports",
        "HAL",
        "GMR Airports",
        "Qatar Airways",
        "Emirates",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 13,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8669607752",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-khajuraho-.org",
      "admissionOfficeContact": "+91 7554512942",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-khajuraho-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-khajuraho-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-khajuraho-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-dundigal-43",
    "name": "Al-Ameen Flying Club & Aviation Academy, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Dundigal+Dundigal",
    "website": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc. Aviation",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Commercial Flying",
      "Airline Operations",
      "Aircraft Systems",
      "Drone Technology",
      "Air Navigation",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Airport Training Facility",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Meteorology Lab",
      "Cabin Mock-up",
      "Wi-Fi Campus",
      "Central Library",
      "Flight Simulators"
    ],
    "flightTraining": {
      "flyingFleet": "16 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Air India",
        "Alliance Air",
        "Akasa Air",
        "Qatar Airways",
        "AirAsia India",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 24,
      "industryExperts": 8,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 8948179460",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-dundigal-.org",
      "admissionOfficeContact": "+91 8310150098",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-dundigal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-ahmedabad-44",
    "name": "Government Flying Training School (GFTS), Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Airport Road, Civil Aerodrome, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Ahmedabad+Ahmedabad",
    "website": "https://government-flying-training-school-gfts-ahmedabad-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-ahmedabad-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Private Pilot Licence (PPL)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "UAV Operations",
      "Flight Safety",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-ahmedabad-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Cabin Mock-up",
      "Flying Fleet",
      "Wi-Fi Campus",
      "Navigation Lab",
      "Hostel",
      "Digital Library",
      "Medical Facility",
      "Central Library",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "18 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Pawan Hans Helicopters",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 11,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 9867839354",
      "email": "admissions@government-flying-training-school-gfts-ahmedabad-.org",
      "admissionOfficeContact": "+91 7419870293",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-ahmedabad-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-ahmedabad-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-ahmedabad-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-udaipur-45",
    "name": "Government Flying Training School (GFTS), Udaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "address": "Airport Road, Civil Aerodrome, Udaipur, Udaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Udaipur+Udaipur",
    "website": "https://government-flying-training-school-gfts-udaipur-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-udaipur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1996,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Commercial Pilot Licence (CPL)",
      "Flight Dispatcher Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Avionics",
      "Ground Operations",
      "Commercial Flying",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-udaipur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Wi-Fi Campus",
      "Airport Training Facility",
      "Transport",
      "Avionics Laboratory",
      "Emergency Evacuation Trainer",
      "Sports",
      "Maintenance Workshop",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "10 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "AirAsia India",
        "Boeing India",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 32,
      "industryExperts": 10,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9966208921",
      "email": "admissions@government-flying-training-school-gfts-udaipur-.org",
      "admissionOfficeContact": "+91 7368207633",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-udaipur-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-udaipur-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-udaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-coimbatore-46",
    "name": "Al-Ameen Flying Club & Aviation Academy, Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Airport Road, Civil Aerodrome, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Coimbatore+Coimbatore",
    "website": "https://al-ameen-flying-club-and-aviation-academy-coimbatore-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-coimbatore-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1995,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "Helicopter Flying",
      "Commercial Flying",
      "Flight Safety",
      "Aviation Law",
      "Aircraft Systems",
      "Air Cargo",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-coimbatore-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Engine Laboratory",
      "Digital Library",
      "Sports",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Central Library",
      "Avionics Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "28 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "Pawan Hans Helicopters",
        "IndiGo Airlines",
        "Adani Airports",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 46,
      "industryExperts": 14,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7769222372",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-coimbatore-.org",
      "admissionOfficeContact": "+91 9949651344",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-coimbatore-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-coimbatore-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-coimbatore-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-47",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Airport Road, Civil Aerodrome, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Cochin+Cochin",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2009,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Flight Dispatcher Certificate",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Air Cargo",
      "Commercial Flying",
      "UAV Operations",
      "Aviation Finance",
      "Flight Safety",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Cabin Mock-up",
      "Sports",
      "Wi-Fi Campus",
      "Flying Fleet",
      "Maintenance Workshop",
      "Hostel",
      "Computer Labs",
      "Navigation Lab",
      "Central Library",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "Etihad Airways",
        "SpiceJet",
        "Boeing India",
        "GMR Airports",
        "Akasa Air",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 47,
      "industryExperts": 6,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7755575430",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-.org",
      "admissionOfficeContact": "+91 9381507227",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-cochin-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-gorakhpur-48",
    "name": "Al-Ameen Flying Club & Aviation Academy, Gorakhpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "city": "Gorakhpur",
    "address": "Airport Road, Civil Aerodrome, Gorakhpur, Gorakhpur, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Gorakhpur+Gorakhpur",
    "website": "https://al-ameen-flying-club-and-aviation-academy-gorakhpur-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-gorakhpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2014,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Aviation Logistics & Cargo Management",
      "B.Sc. Aviation",
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Law",
      "Air Navigation",
      "Meteorology",
      "Avionics",
      "Airport Management",
      "Aircraft Engineering",
      "Aviation Finance",
      "Helicopter Flying",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-gorakhpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Aircraft Hangar",
      "Computer Labs",
      "Wi-Fi Campus",
      "Digital Library",
      "Navigation Lab",
      "Medical Facility",
      "Flight Simulators",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Alliance Air",
        "Adani Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 17,
      "industryExperts": 9,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8295748363",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-gorakhpur-.org",
      "admissionOfficeContact": "+91 7929190459",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-gorakhpur-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-gorakhpur-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-gorakhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-49",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Begumpet+Begumpet",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2007,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Private Pilot Licence (PPL)",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "B.Sc. Aviation"
    ],
    "specializations": [
      "Drone Technology",
      "Air Navigation",
      "Meteorology",
      "Air Cargo",
      "Ground Operations",
      "Airline Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Central Library",
      "Medical Facility",
      "Aircraft Hangar",
      "Navigation Lab",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "IndiGo Airlines",
        "Adani Airports",
        "SpiceJet",
        "Alliance Air",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 33,
      "industryExperts": 14,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8873129510",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-.org",
      "admissionOfficeContact": "+91 7559433530",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-begumpet-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-bengaluru-50",
    "name": "Al-Ameen Flying Club & Aviation Academy, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Airport Road, Civil Aerodrome, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Bengaluru+Bengaluru",
    "website": "https://al-ameen-flying-club-and-aviation-academy-bengaluru-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-bengaluru-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2014,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Ground Operations",
      "Drone Technology",
      "Commercial Flying",
      "Flight Safety",
      "Airline Operations",
      "Avionics",
      "Aircraft Engineering",
      "Airport Management",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-bengaluru-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Engine Laboratory",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer",
      "Navigation Lab",
      "Digital Library",
      "Sports",
      "Hostel",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "23 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "HAL",
        "Vistara",
        "Akasa Air",
        "Pawan Hans Helicopters",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 43,
      "industryExperts": 15,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8996693800",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-bengaluru-.org",
      "admissionOfficeContact": "+91 9674249714",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-bengaluru-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-bengaluru-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-meerut-51",
    "name": "Hindustan Institute of Aeronautics (AME), Meerut",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "city": "Meerut",
    "address": "Airport Road, Civil Aerodrome, Meerut, Meerut, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Meerut+Meerut",
    "website": "https://hindustan-institute-of-aeronautics-ame-meerut-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-meerut-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1975,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "B.Sc. Aviation",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Air Navigation",
      "Air Cargo",
      "Drone Technology",
      "International Aviation",
      "Aviation Law",
      "Commercial Flying",
      "Helicopter Flying",
      "Avionics"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-meerut-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Wi-Fi Campus",
      "Medical Facility",
      "Hostel",
      "Central Library",
      "Cabin Mock-up",
      "Digital Library",
      "Meteorology Lab",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Adani Airports",
        "Air India",
        "HAL",
        "Alliance Air",
        "Air India Express",
        "Vistara",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 41,
      "industryExperts": 8,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 8825376383",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-meerut-.org",
      "admissionOfficeContact": "+91 8264743384",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-meerut-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-meerut-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-meerut-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-bhanpur-52",
    "name": "Government Flying Training School (GFTS), Bhanpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Bhanpur",
    "address": "Airport Road, Civil Aerodrome, Bhanpur, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Bhanpur+Bhanpur",
    "website": "https://government-flying-training-school-gfts-bhanpur-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-bhanpur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "B.Sc. Aviation",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Flight Safety",
      "Avionics",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-bhanpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Meteorology Lab",
      "Engine Laboratory",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Sports",
      "Hostel",
      "Avionics Laboratory",
      "Emergency Evacuation Trainer",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "15 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Emirates",
        "Blue Dart Aviation",
        "Qatar Airways",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 12,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9892771174",
      "email": "admissions@government-flying-training-school-gfts-bhanpur-.org",
      "admissionOfficeContact": "+91 9774301730",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-bhanpur-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-bhanpur-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-bhanpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-muzaffarpur-53",
    "name": "Al-Ameen Flying Club & Aviation Academy, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Muzaffarpur+Muzaffarpur",
    "website": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2007,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "BBA Airport Management",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Air Navigation",
      "Ground Operations",
      "Airport Management",
      "Flight Safety",
      "Aviation Law",
      "UAV Operations",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Engine Laboratory",
      "Central Library",
      "Meteorology Lab",
      "Avionics Laboratory",
      "Transport",
      "Maintenance Workshop",
      "Medical Facility",
      "Sports",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "25 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "AirAsia India",
        "Alliance Air",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 12,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8047004160",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-muzaffarpur-.org",
      "admissionOfficeContact": "+91 7928557466",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-muzaffarpur-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-muzaffarpur-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-muzaffarpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-rohini-54",
    "name": "International School of Aviation & Airport Management, Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Airport Road, Civil Aerodrome, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Rohini+Rohini",
    "website": "https://international-school-of-aviation-and-airport-management-rohini-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-rohini-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Flight Dispatcher Certificate",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Commercial Flying",
      "UAV Operations",
      "Air Navigation",
      "Meteorology",
      "Aircraft Systems",
      "Aviation Finance",
      "Drone Technology",
      "Aircraft Engineering",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-rohini-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Meteorology Lab",
      "Flying Fleet",
      "Computer Labs",
      "Medical Facility",
      "Emergency Evacuation Trainer",
      "Engine Laboratory",
      "Transport",
      "Airport Training Facility",
      "Sports",
      "Avionics Laboratory",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "24 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Air India",
        "Qatar Airways",
        "Airbus India",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 32,
      "industryExperts": 6,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7367429547",
      "email": "admissions@international-school-of-aviation-and-airport-management-rohini-.org",
      "admissionOfficeContact": "+91 7645240815",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-rohini-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-rohini-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-rohini-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-55",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Airport Road, Civil Aerodrome, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Bhopal+Bhopal",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1975,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc. Aviation",
      "Cabin Crew & Air Hostess Diploma",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Aviation Law",
      "Commercial Flying",
      "Airport Management",
      "UAV Operations",
      "International Aviation",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Computer Labs",
      "Hostel",
      "Cabin Mock-up",
      "Transport",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Airports Authority of India (AAI)",
        "Adani Airports",
        "Pawan Hans Helicopters",
        "AirAsia India",
        "Airbus India",
        "GMR Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 9,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 8202456420",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-.org",
      "admissionOfficeContact": "+91 7498107555",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhopal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-nashik-56",
    "name": "Al-Ameen Flying Club & Aviation Academy, Nashik",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nashik",
    "city": "Nashik",
    "address": "Airport Road, Civil Aerodrome, Nashik, Nashik, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Nashik+Nashik",
    "website": "https://al-ameen-flying-club-and-aviation-academy-nashik-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-nashik-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2010,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Student Pilot Licence (SPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Avionics",
      "Meteorology",
      "Air Navigation",
      "Airport Management",
      "Commercial Flying",
      "Flight Safety",
      "Ground Operations",
      "UAV Operations",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-nashik-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Avionics Laboratory",
      "Central Library",
      "Digital Library",
      "Airport Training Facility",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer",
      "Navigation Lab",
      "Meteorology Lab",
      "Aircraft Hangar",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Adani Airports",
        "IndiGo Airlines",
        "Airports Authority of India (AAI)",
        "Etihad Airways",
        "Boeing India",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 18,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 8931714281",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-nashik-.org",
      "admissionOfficeContact": "+91 9327296477",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-nashik-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-nashik-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-nashik-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-amethi-57",
    "name": "Government Flying Training School (GFTS), Amethi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "city": "Amethi",
    "address": "Airport Road, Civil Aerodrome, Amethi, Amethi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Amethi+Amethi",
    "website": "https://government-flying-training-school-gfts-amethi-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-amethi-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1990,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Flight Dispatcher Certificate",
      "B.Sc. Aviation",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Air Navigation",
      "Aircraft Engineering",
      "International Aviation",
      "Aviation Finance",
      "Airline Operations",
      "Meteorology",
      "Airport Management",
      "Helicopter Flying",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-amethi-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Flight Simulators",
      "Maintenance Workshop",
      "Transport",
      "Navigation Lab",
      "Flying Fleet",
      "Meteorology Lab",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "18 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Blue Dart Aviation",
        "Airbus India",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 9,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 7693216016",
      "email": "admissions@government-flying-training-school-gfts-amethi-.org",
      "admissionOfficeContact": "+91 8392700316",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-amethi-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-amethi-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-amethi-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-bareilly-58",
    "name": "Hindustan Institute of Aeronautics (AME), Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Airport Road, Civil Aerodrome, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Bareilly+Bareilly",
    "website": "https://hindustan-institute-of-aeronautics-ame-bareilly-.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-bareilly-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1978,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Airport Management",
      "Aviation Logistics & Cargo Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "International Aviation",
      "Aviation Finance",
      "Helicopter Flying",
      "Airport Management",
      "Drone Technology",
      "Commercial Flying",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-bareilly-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Hostel",
      "Wi-Fi Campus",
      "Flight Simulators",
      "Aircraft Hangar",
      "Flying Fleet",
      "Digital Library",
      "Navigation Lab",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Pawan Hans Helicopters",
        "IndiGo Airlines",
        "Airbus India",
        "Boeing India",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 9,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 9934304930",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-bareilly-.org",
      "admissionOfficeContact": "+91 7007321723",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-bareilly-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-bareilly-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-bareilly-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-59",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Muzaffarpur+Muzaffarpur",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2005,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Law",
      "Ground Operations",
      "Air Navigation",
      "Drone Technology",
      "UAV Operations",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Transport",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Airport Training Facility",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "11 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Airbus India",
        "Alliance Air",
        "IndiGo Airlines",
        "Emirates",
        "Adani Airports",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 32,
      "industryExperts": 17,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 7311158217",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.org",
      "admissionOfficeContact": "+91 9731875509",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-cochin-60",
    "name": "International School of Aviation & Airport Management, Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Airport Road, Civil Aerodrome, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Cochin+Cochin",
    "website": "https://international-school-of-aviation-and-airport-management-cochin-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-cochin-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1994,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Flight Dispatcher Certificate",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Airline Operations",
      "Meteorology",
      "Avionics",
      "Helicopter Flying",
      "Aircraft Systems",
      "Commercial Flying",
      "Drone Technology",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-cochin-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Cabin Mock-up",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Maintenance Workshop",
      "Computer Labs",
      "Meteorology Lab",
      "Medical Facility",
      "Transport",
      "Flying Fleet",
      "Flight Simulators",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "Blue Dart Aviation",
        "Air India",
        "Boeing India",
        "Emirates"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 35,
      "industryExperts": 17,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9159662522",
      "email": "admissions@international-school-of-aviation-and-airport-management-cochin-.org",
      "admissionOfficeContact": "+91 7989470398",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-cochin-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-cochin-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-cochin-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-61",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Behala",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Behala",
    "address": "Airport Road, Civil Aerodrome, Behala, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Behala+Behala",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1981,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Aviation Law",
      "UAV Operations",
      "Ground Operations",
      "Airport Management",
      "Meteorology",
      "Aircraft Systems",
      "Aviation Finance",
      "Avionics",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Avionics Laboratory",
      "Cabin Mock-up",
      "Meteorology Lab",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Central Library",
      "Flying Fleet",
      "Airport Training Facility",
      "Computer Labs",
      "Medical Facility",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "26 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Emirates",
        "Airports Authority of India (AAI)",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 48,
      "industryExperts": 8,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 7646644306",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-.org",
      "admissionOfficeContact": "+91 9341342586",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-behala-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-62",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Shirpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Dhule",
    "city": "Shirpur",
    "address": "Airport Road, Civil Aerodrome, Shirpur, Dhule, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Shirpur+Shirpur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "MBA Aviation Management",
      "Flight Dispatcher Certificate",
      "Aviation Logistics & Cargo Management"
    ],
    "specializations": [
      "Meteorology",
      "Aviation Law",
      "Air Navigation",
      "Aviation Finance",
      "Ground Operations",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Maintenance Workshop",
      "Transport",
      "Computer Labs",
      "Central Library",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Airport Training Facility",
      "Cabin Mock-up",
      "Wi-Fi Campus",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "GMR Airports",
        "Airports Authority of India (AAI)",
        "SpiceJet",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 47,
      "industryExperts": 18,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7805403554",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-.org",
      "admissionOfficeContact": "+91 7353944353",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-shirpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-meerut-63",
    "name": "School of Aircraft Maintenance Engineering (SAME), Meerut",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "city": "Meerut",
    "address": "Airport Road, Civil Aerodrome, Meerut, Meerut, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Meerut+Meerut",
    "website": "https://school-of-aircraft-maintenance-engineering-same-meerut-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-meerut-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1998,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Airport Management",
      "Aircraft Engineering",
      "Helicopter Flying",
      "International Aviation",
      "Air Navigation",
      "Air Cargo",
      "Avionics",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-meerut-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Hostel",
      "Sports",
      "Airport Training Facility",
      "Computer Labs",
      "Cabin Mock-up",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "23 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Qatar Airways",
        "Vistara",
        "Alliance Air",
        "GMR Airports",
        "Etihad Airways",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 44,
      "industryExperts": 18,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9453285923",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-meerut-.org",
      "admissionOfficeContact": "+91 8604621335",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-meerut-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-meerut-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-meerut-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-rajkot-64",
    "name": "Al-Ameen Flying Club & Aviation Academy, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Airport Road, Civil Aerodrome, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Rajkot+Rajkot",
    "website": "https://al-ameen-flying-club-and-aviation-academy-rajkot-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-rajkot-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1991,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Aviation Logistics & Cargo Management",
      "Cabin Crew & Air Hostess Diploma",
      "BBA Airport Management",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Law",
      "Airline Operations",
      "Air Cargo",
      "Airport Management",
      "International Aviation",
      "Aircraft Systems",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-rajkot-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Engine Laboratory",
      "Meteorology Lab",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Flight Simulators",
      "Sports",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "6 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Pawan Hans Helicopters",
        "Airports Authority of India (AAI)",
        "Qatar Airways",
        "Emirates",
        "Boeing India",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 43,
      "industryExperts": 10,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9140365517",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-rajkot-.org",
      "admissionOfficeContact": "+91 8294549238",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-rajkot-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-rajkot-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-rajkot-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-siliguri-65",
    "name": "Al-Ameen Flying Club & Aviation Academy, Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Airport Road, Civil Aerodrome, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Siliguri+Siliguri",
    "website": "https://al-ameen-flying-club-and-aviation-academy-siliguri-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-siliguri-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1995,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Drone Technology & UAV Pilot",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Airline Operations",
      "Meteorology",
      "Drone Technology",
      "Aircraft Systems",
      "International Aviation",
      "Avionics",
      "Airport Management",
      "Aircraft Engineering",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-siliguri-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Central Library",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Maintenance Workshop",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "Akasa Air",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 17,
      "industryExperts": 8,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 7005088429",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-siliguri-.org",
      "admissionOfficeContact": "+91 9134840933",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-siliguri-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-siliguri-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-club-and-aviation-academy-muzaffarpur-66",
    "name": "National Flying Club & Aviation Academy, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Club+&+Aviation+Academy,+Muzaffarpur+Muzaffarpur",
    "website": "https://national-flying-club-and-aviation-academy-muzaffarpur-.edu.in",
    "admissionPortalUrl": "https://national-flying-club-and-aviation-academy-muzaffarpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2010,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management",
      "Airline Transport Pilot Licence (ATPL)",
      "B.Sc. Aviation",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Air Cargo",
      "Drone Technology",
      "Air Navigation",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-club-and-aviation-academy-muzaffarpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Aircraft Hangar",
      "Sports",
      "Navigation Lab",
      "Flight Simulators",
      "Cabin Mock-up",
      "Maintenance Workshop",
      "Wi-Fi Campus",
      "Hostel",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "18 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Etihad Airways",
        "AirAsia India",
        "Vistara",
        "Alliance Air",
        "Adani Airports",
        "GMR Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 12,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 8649542476",
      "email": "admissions@national-flying-club-and-aviation-academy-muzaffarpur-.org",
      "admissionOfficeContact": "+91 8103928009",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-club-and-aviation-academy-muzaffarpur-",
        "twitter": "https://twitter.com/national-flying-club-and-aviation-academy-muzaffarpur-",
        "linkedin": "https://linkedin.com/school/national-flying-club-and-aviation-academy-muzaffarpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-mehsana-67",
    "name": "Al-Ameen Flying Club & Aviation Academy, Mehsana",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Mehsana",
    "city": "Mehsana",
    "address": "Airport Road, Civil Aerodrome, Mehsana, Mehsana, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Mehsana+Mehsana",
    "website": "https://al-ameen-flying-club-and-aviation-academy-mehsana-.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-mehsana-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1971,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Safety & Security Certificate",
      "Aviation Logistics & Cargo Management",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "UAV Operations",
      "Drone Technology",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-mehsana-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Digital Library",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Central Library",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Cabin Mock-up",
      "Flying Fleet",
      "Computer Labs",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "14 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "Air India",
        "Akasa Air",
        "Etihad Airways",
        "AirAsia India",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 46,
      "industryExperts": 13,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9262525071",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-mehsana-.org",
      "admissionOfficeContact": "+91 8972554787",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-mehsana-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-mehsana-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-mehsana-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-patna-68",
    "name": "Government Flying Training School (GFTS), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Airport Road, Civil Aerodrome, Patna, Patna, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Patna+Patna",
    "website": "https://government-flying-training-school-gfts-patna-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-patna-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1999,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Student Pilot Licence (SPL)",
      "B.Sc. Aviation",
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "BBA Airport Management"
    ],
    "specializations": [
      "International Aviation",
      "Flight Safety",
      "Air Navigation",
      "Ground Operations",
      "Meteorology",
      "Helicopter Flying",
      "Air Cargo"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-patna-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Navigation Lab",
      "Cabin Mock-up",
      "Medical Facility",
      "Flying Fleet",
      "Maintenance Workshop",
      "Wi-Fi Campus",
      "Meteorology Lab",
      "Flight Simulators",
      "Sports",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "28 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India",
        "Airbus India",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 16,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 9209206745",
      "email": "admissions@government-flying-training-school-gfts-patna-.org",
      "admissionOfficeContact": "+91 7970573882",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-patna-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-patna-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-patna-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-kolkata-69",
    "name": "Hindustan Institute of Aeronautics (AME), Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Airport Road, Civil Aerodrome, Kolkata, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Kolkata+Kolkata",
    "website": "https://hindustan-institute-of-aeronautics-ame-kolkata-.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-kolkata-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1994,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Logistics & Cargo Management"
    ],
    "specializations": [
      "Aviation Finance",
      "Airport Management",
      "Aircraft Systems",
      "Commercial Flying",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-kolkata-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Flying Fleet",
      "Engine Laboratory",
      "Sports",
      "Airport Training Facility",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Adani Airports",
        "Blue Dart Aviation",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 24,
      "industryExperts": 16,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 7897311742",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-kolkata-.org",
      "admissionOfficeContact": "+91 8327492167",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-kolkata-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-kolkata-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-kolkata-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-70",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Airport Road, Civil Aerodrome, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Rajkot+Rajkot",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1975,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "BBA Airport Management",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Commercial Flying",
      "UAV Operations",
      "Airline Operations",
      "Helicopter Flying",
      "Aviation Finance",
      "International Aviation",
      "Ground Operations",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Avionics Laboratory",
      "Flight Simulators",
      "Flying Fleet",
      "Transport",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Alliance Air",
        "Akasa Air",
        "Airbus India",
        "Adani Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 17,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8865054636",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-.org",
      "admissionOfficeContact": "+91 8895853891",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-rajkot-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-71",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Airport Road, Civil Aerodrome, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Trivandrum+Trivandrum",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1972,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Aviation Finance",
      "Avionics",
      "Air Navigation",
      "International Aviation",
      "Ground Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Airport Training Facility",
      "Wi-Fi Campus",
      "Computer Labs",
      "Navigation Lab",
      "Meteorology Lab",
      "Maintenance Workshop",
      "Engine Laboratory",
      "Digital Library",
      "Flying Fleet",
      "Hostel"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "Air India Express",
        "Vistara",
        "SpiceJet",
        "Boeing India",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 22,
      "industryExperts": 14,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 7113724114",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-.org",
      "admissionOfficeContact": "+91 8115667940",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-mehsana-72",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Mehsana",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Mehsana",
    "city": "Mehsana",
    "address": "Airport Road, Civil Aerodrome, Mehsana, Mehsana, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Mehsana+Mehsana",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-mehsana-.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-mehsana-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2019,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "Helicopter Flying",
      "Aircraft Systems",
      "Flight Safety",
      "Airline Operations",
      "UAV Operations",
      "Avionics",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-mehsana-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Avionics Laboratory",
      "Transport",
      "Flight Simulators",
      "Cabin Mock-up",
      "Navigation Lab",
      "Hostel",
      "Emergency Evacuation Trainer",
      "Flying Fleet",
      "Maintenance Workshop",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "17 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Pawan Hans Helicopters",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 8,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7902116835",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-mehsana-.org",
      "admissionOfficeContact": "+91 8619323927",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-mehsana-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-mehsana-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-mehsana-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-palam-73",
    "name": "School of Aircraft Maintenance Engineering (SAME), Palam",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Palam",
    "address": "Airport Road, Civil Aerodrome, Palam, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Palam+Palam",
    "website": "https://school-of-aircraft-maintenance-engineering-same-palam-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-palam-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Commercial Pilot Licence (CPL)",
      "Flight Dispatcher Certificate",
      "Drone Technology & UAV Pilot",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aviation Law",
      "Air Cargo",
      "Aircraft Systems",
      "Air Navigation",
      "Airport Management",
      "UAV Operations",
      "Airline Operations",
      "Flight Safety",
      "Avionics"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-palam-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Wi-Fi Campus",
      "Flight Simulators",
      "Navigation Lab",
      "Digital Library",
      "Hostel",
      "Computer Labs",
      "Flying Fleet",
      "Cabin Mock-up",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "14 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Alliance Air",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 15,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 8107217555",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-palam-.org",
      "admissionOfficeContact": "+91 7069002453",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-palam-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-palam-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-palam-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-amethi-74",
    "name": "Al-Ameen Flying Club & Aviation Academy, Amethi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "city": "Amethi",
    "address": "Airport Road, Civil Aerodrome, Amethi, Amethi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Amethi+Amethi",
    "website": "https://al-ameen-flying-club-and-aviation-academy-amethi-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-amethi-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2012,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "Commercial Flying",
      "Air Navigation",
      "UAV Operations",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-amethi-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Flight Simulators",
      "Hostel",
      "Navigation Lab",
      "Medical Facility",
      "Engine Laboratory",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Akasa Air",
        "Boeing India",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 14,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7146047464",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-amethi-.org",
      "admissionOfficeContact": "+91 7872670591",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-amethi-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-amethi-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-amethi-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-club-and-aviation-academy-gwalior-75",
    "name": "National Flying Club & Aviation Academy, Gwalior",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "city": "Gwalior",
    "address": "Airport Road, Civil Aerodrome, Gwalior, Gwalior, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Club+&+Aviation+Academy,+Gwalior+Gwalior",
    "website": "https://national-flying-club-and-aviation-academy-gwalior-.edu.in",
    "admissionPortalUrl": "https://national-flying-club-and-aviation-academy-gwalior-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1976,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Airport Management",
      "MBA Aviation Management",
      "Drone Technology & UAV Pilot",
      "Aviation Logistics & Cargo Management",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Finance",
      "Airline Operations",
      "Flight Safety",
      "Helicopter Flying",
      "Aircraft Systems",
      "Avionics",
      "UAV Operations",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-club-and-aviation-academy-gwalior-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Digital Library",
      "Airport Training Facility",
      "Engine Laboratory",
      "Flying Fleet",
      "Cabin Mock-up",
      "Computer Labs",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "11 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Etihad Airways",
        "AirAsia India",
        "Emirates",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 22,
      "industryExperts": 16,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7065683071",
      "email": "admissions@national-flying-club-and-aviation-academy-gwalior-.org",
      "admissionOfficeContact": "+91 9747285139",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-club-and-aviation-academy-gwalior-",
        "twitter": "https://twitter.com/national-flying-club-and-aviation-academy-gwalior-",
        "linkedin": "https://linkedin.com/school/national-flying-club-and-aviation-academy-gwalior-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-begumpet-76",
    "name": "Al-Ameen Flying Club & Aviation Academy, Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Begumpet+Begumpet",
    "website": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2021,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Logistics & Cargo Management",
      "BBA Airport Management",
      "Student Pilot Licence (SPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Airport Management",
      "Commercial Flying",
      "Meteorology",
      "Drone Technology",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Avionics Laboratory",
      "Navigation Lab",
      "Computer Labs",
      "Hostel",
      "Sports",
      "Central Library",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "22 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "AirAsia India",
        "Qatar Airways",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 32,
      "industryExperts": 16,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 7715464812",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-begumpet-.org",
      "admissionOfficeContact": "+91 9444146847",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-begumpet-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-begumpet-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-begumpet-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-belgaum-77",
    "name": "School of Aircraft Maintenance Engineering (SAME), Belgaum",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Belagavi",
    "city": "Belgaum",
    "address": "Airport Road, Civil Aerodrome, Belgaum, Belagavi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Belgaum+Belgaum",
    "website": "https://school-of-aircraft-maintenance-engineering-same-belgaum-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-belgaum-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2003,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Drone Technology & UAV Pilot",
      "Aviation Safety & Security Certificate",
      "Private Pilot Licence (PPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Flight Safety",
      "Aircraft Engineering",
      "International Aviation",
      "Ground Operations",
      "Air Cargo",
      "Air Navigation",
      "Airport Management",
      "Meteorology",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-belgaum-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Aircraft Hangar",
      "Hostel",
      "Flight Simulators",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Engine Laboratory",
      "Medical Facility",
      "Flying Fleet",
      "Sports",
      "Cabin Mock-up",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "GMR Airports",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 36,
      "industryExperts": 17,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9996092971",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-belgaum-.org",
      "admissionOfficeContact": "+91 9744728893",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-belgaum-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-belgaum-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-belgaum-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-dundigal-78",
    "name": "Al-Ameen Flying Club & Aviation Academy, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Dundigal+Dundigal",
    "website": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1999,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Private Pilot Licence (PPL)",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Meteorology",
      "Aviation Law",
      "Airport Management",
      "Airline Operations",
      "Ground Operations",
      "Aircraft Systems",
      "Air Navigation",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-dundigal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Engine Laboratory",
      "Transport",
      "Sports",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "Pawan Hans Helicopters",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 29,
      "industryExperts": 11,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 8651836880",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-dundigal-.org",
      "admissionOfficeContact": "+91 7330687790",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-dundigal-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-dundigal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-gaya-79",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Gaya",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Gaya",
    "city": "Gaya",
    "address": "Airport Road, Civil Aerodrome, Gaya, Gaya, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Gaya+Gaya",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-gaya-.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-gaya-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "B.Sc. Aviation",
      "Drone Technology & UAV Pilot"
    ],
    "specializations": [
      "Commercial Flying",
      "International Aviation",
      "Meteorology",
      "Drone Technology",
      "Avionics",
      "Air Cargo",
      "Aviation Law",
      "Aircraft Engineering",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-gaya-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Maintenance Workshop",
      "Airport Training Facility",
      "Emergency Evacuation Trainer",
      "Flight Simulators",
      "Cabin Mock-up",
      "Aircraft Hangar",
      "Avionics Laboratory",
      "Meteorology Lab",
      "Digital Library",
      "Computer Labs",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "19 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Adani Airports",
        "SpiceJet",
        "Air India Express",
        "HAL",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 14,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8142274865",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-gaya-.org",
      "admissionOfficeContact": "+91 7820862961",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-gaya-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-gaya-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-gaya-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-club-and-aviation-academy-khajuraho-80",
    "name": "National Flying Club & Aviation Academy, Khajuraho",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "city": "Khajuraho",
    "address": "Airport Road, Civil Aerodrome, Khajuraho, Chhatarpur, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Club+&+Aviation+Academy,+Khajuraho+Khajuraho",
    "website": "https://national-flying-club-and-aviation-academy-khajuraho-.edu.in",
    "admissionPortalUrl": "https://national-flying-club-and-aviation-academy-khajuraho-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1998,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Aviation Logistics & Cargo Management",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Airline Operations",
      "Ground Operations",
      "Commercial Flying",
      "Air Cargo",
      "International Aviation",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-club-and-aviation-academy-khajuraho-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Meteorology Lab",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Emergency Evacuation Trainer",
      "Transport",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "25 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Boeing India",
        "Emirates",
        "Qatar Airways",
        "Air India Express",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 15,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 8064779717",
      "email": "admissions@national-flying-club-and-aviation-academy-khajuraho-.org",
      "admissionOfficeContact": "+91 7895567444",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-club-and-aviation-academy-khajuraho-",
        "twitter": "https://twitter.com/national-flying-club-and-aviation-academy-khajuraho-",
        "linkedin": "https://linkedin.com/school/national-flying-club-and-aviation-academy-khajuraho-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-patna-81",
    "name": "School of Aircraft Maintenance Engineering (SAME), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Airport Road, Civil Aerodrome, Patna, Patna, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Patna+Patna",
    "website": "https://school-of-aircraft-maintenance-engineering-same-patna-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-patna-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2019,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "B.Sc. Aviation",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Commercial Flying",
      "Meteorology",
      "Airline Operations",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-patna-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Wi-Fi Campus",
      "Avionics Laboratory",
      "Cabin Mock-up",
      "Medical Facility",
      "Digital Library",
      "Sports",
      "Navigation Lab",
      "Hostel",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Adani Airports",
        "Pawan Hans Helicopters",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 17,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 7125289130",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-patna-.org",
      "admissionOfficeContact": "+91 9362373725",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-patna-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-patna-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-patna-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-durgapur-82",
    "name": "Al-Ameen Flying Club & Aviation Academy, Durgapur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "city": "Durgapur",
    "address": "Airport Road, Civil Aerodrome, Durgapur, Paschim Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Durgapur+Durgapur",
    "website": "https://al-ameen-flying-club-and-aviation-academy-durgapur-.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-durgapur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1976,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "Flight Dispatcher Certificate",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Air Navigation",
      "Airport Management",
      "Aviation Finance",
      "Ground Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-durgapur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Maintenance Workshop",
      "Meteorology Lab",
      "Flying Fleet",
      "Transport",
      "Aircraft Hangar",
      "Avionics Laboratory",
      "Engine Laboratory",
      "Digital Library",
      "Flight Simulators",
      "Cabin Mock-up",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Pawan Hans Helicopters",
        "GMR Airports",
        "Etihad Airways",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 15,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 9953124260",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-durgapur-.org",
      "admissionOfficeContact": "+91 8118380097",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-durgapur-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-durgapur-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-durgapur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-bhanpur-83",
    "name": "International School of Aviation & Airport Management, Bhanpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Bhanpur",
    "address": "Airport Road, Civil Aerodrome, Bhanpur, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Bhanpur+Bhanpur",
    "website": "https://international-school-of-aviation-and-airport-management-bhanpur-.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-bhanpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1990,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Flight Dispatcher Certificate",
      "Aviation Safety & Security Certificate",
      "Drone Technology & UAV Pilot"
    ],
    "specializations": [
      "Air Navigation",
      "UAV Operations",
      "Aviation Finance",
      "Avionics",
      "Air Cargo",
      "Drone Technology",
      "Commercial Flying",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-bhanpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Medical Facility",
      "Navigation Lab",
      "Sports",
      "Flying Fleet",
      "Computer Labs",
      "Avionics Laboratory",
      "Engine Laboratory",
      "Hostel",
      "Digital Library",
      "Flight Simulators",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "AirAsia India",
        "Boeing India",
        "Adani Airports",
        "Airbus India",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 8,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 8992074066",
      "email": "admissions@international-school-of-aviation-and-airport-management-bhanpur-.org",
      "admissionOfficeContact": "+91 7688590615",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-bhanpur-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-bhanpur-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-bhanpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-lucknow-84",
    "name": "School of Aircraft Maintenance Engineering (SAME), Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Airport Road, Civil Aerodrome, Lucknow, Lucknow, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Lucknow+Lucknow",
    "website": "https://school-of-aircraft-maintenance-engineering-same-lucknow-.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-lucknow-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2018,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Student Pilot Licence (SPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Flight Safety",
      "Aircraft Systems",
      "Air Navigation",
      "Helicopter Flying",
      "Aircraft Engineering",
      "Ground Operations",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-lucknow-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Sports",
      "Emergency Evacuation Trainer",
      "Airport Training Facility",
      "Navigation Lab",
      "Maintenance Workshop",
      "Flight Simulators",
      "Flying Fleet",
      "Wi-Fi Campus",
      "Medical Facility",
      "Cabin Mock-up",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Boeing India",
        "HAL",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 8,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7302032072",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-lucknow-.org",
      "admissionOfficeContact": "+91 9000761869",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-lucknow-",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-lucknow-",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-lucknow-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-cochin-85",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Airport Road, Civil Aerodrome, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Cochin+Cochin",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-cochin-.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-cochin-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2004,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "B.Sc. Aviation",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Private Pilot Licence (PPL)",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Aircraft Engineering",
      "UAV Operations",
      "Air Cargo",
      "Airline Operations",
      "Aircraft Systems",
      "Ground Operations",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-cochin-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Flying Fleet",
      "Meteorology Lab",
      "Engine Laboratory",
      "Sports",
      "Flight Simulators",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Air India Express",
        "Alliance Air",
        "AirAsia India",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 47,
      "industryExperts": 9,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 9338435431",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-cochin-.org",
      "admissionOfficeContact": "+91 8932737338",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-cochin-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-cochin-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-cochin-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-ujjain-86",
    "name": "Hindustan Institute of Aeronautics (AME), Ujjain",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "city": "Ujjain",
    "address": "Airport Road, Civil Aerodrome, Ujjain, Ujjain, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Ujjain+Ujjain",
    "website": "https://hindustan-institute-of-aeronautics-ame-ujjain-.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-ujjain-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2003,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Drone Technology & UAV Pilot",
      "MBA Aviation Management",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "International Aviation",
      "Aircraft Engineering",
      "Aviation Law",
      "Air Cargo",
      "Aircraft Systems",
      "Aviation Finance",
      "Flight Safety",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-ujjain-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Engine Laboratory",
      "Hostel",
      "Navigation Lab",
      "Medical Facility",
      "Digital Library",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "GMR Airports",
        "Pawan Hans Helicopters",
        "Etihad Airways",
        "IndiGo Airlines",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 18,
      "industryExperts": 18,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9987581731",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-ujjain-.org",
      "admissionOfficeContact": "+91 9610829344",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-ujjain-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-ujjain-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-ujjain-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-87",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Dundigal+Dundigal",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1970,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aviation Law",
      "Meteorology",
      "Air Navigation",
      "Aircraft Engineering",
      "Drone Technology",
      "Aviation Finance",
      "Airline Operations",
      "Flight Safety",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up",
      "Hostel",
      "Navigation Lab",
      "Central Library",
      "Airport Training Facility",
      "Flying Fleet",
      "Maintenance Workshop",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "IndiGo Airlines",
        "Airports Authority of India (AAI)",
        "AirAsia India",
        "Airbus India",
        "Blue Dart Aviation",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 18,
      "industryExperts": 12,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 9151274026",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-.org",
      "admissionOfficeContact": "+91 7131387866",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-dundigal-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-88",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Muzaffarpur+Muzaffarpur",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2000,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)",
      "MBA Aviation Management",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "Aviation Finance",
      "Aircraft Engineering",
      "Meteorology",
      "Ground Operations",
      "Flight Safety",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Airport Training Facility",
      "Aircraft Hangar",
      "Maintenance Workshop",
      "Transport",
      "Medical Facility",
      "Meteorology Lab",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Engine Laboratory",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "13 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "HAL",
        "SpiceJet",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 11,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9767901739",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-.org",
      "admissionOfficeContact": "+91 7418236165",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-muzaffarpur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-89",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Trivandrum",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Trivandrum",
    "address": "Airport Road, Civil Aerodrome, Trivandrum, Thiruvananthapuram, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Trivandrum+Trivandrum",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2012,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "B.Sc. Aviation"
    ],
    "specializations": [
      "Aviation Finance",
      "Airline Operations",
      "Aircraft Systems",
      "Drone Technology",
      "International Aviation",
      "Airport Management",
      "Aircraft Engineering",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Flying Fleet",
      "Computer Labs",
      "Aircraft Hangar",
      "Wi-Fi Campus",
      "Sports",
      "Central Library",
      "Engine Laboratory",
      "Maintenance Workshop"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "GMR Airports",
        "Alliance Air",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 13,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9020196424",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-.org",
      "admissionOfficeContact": "+91 8679393725",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-trivandrum-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-calicut-90",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Calicut",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Calicut",
    "address": "Airport Road, Civil Aerodrome, Calicut, Kozhikode, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Calicut+Calicut",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-calicut-.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-calicut-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1980,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "MBA Aviation Management",
      "Aviation Safety & Security Certificate",
      "B.Sc. Aviation",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Finance",
      "Helicopter Flying",
      "Avionics",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-calicut-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Emergency Evacuation Trainer",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Aircraft Hangar",
      "Cabin Mock-up",
      "Flight Simulators",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "GMR Airports",
        "AirAsia India",
        "Akasa Air",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 15,
      "industryExperts": 10,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 7675998023",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-calicut-.org",
      "admissionOfficeContact": "+91 9320111690",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-calicut-",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-calicut-",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-calicut-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-91",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Airport Road, Civil Aerodrome, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+New+Delhi+New Delhi",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1985,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management"
    ],
    "specializations": [
      "Aircraft Systems",
      "Flight Safety",
      "Airline Operations",
      "Meteorology",
      "Airport Management",
      "Commercial Flying",
      "Aviation Finance",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Digital Library",
      "Medical Facility",
      "Aircraft Hangar",
      "Wi-Fi Campus",
      "Hostel",
      "Central Library",
      "Navigation Lab",
      "Flying Fleet",
      "Avionics Laboratory",
      "Sports",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Etihad Airways",
        "Emirates",
        "Pawan Hans Helicopters",
        "Airbus India",
        "AirAsia India",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 32,
      "industryExperts": 15,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 8666724454",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-.org",
      "admissionOfficeContact": "+91 7901783467",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-ujjain-92",
    "name": "Government Flying Training School (GFTS), Ujjain",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "city": "Ujjain",
    "address": "Airport Road, Civil Aerodrome, Ujjain, Ujjain, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Ujjain+Ujjain",
    "website": "https://government-flying-training-school-gfts-ujjain-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-ujjain-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Avionics",
      "UAV Operations",
      "Airline Operations",
      "Commercial Flying",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-ujjain-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Cabin Mock-up",
      "Hostel",
      "Digital Library",
      "Engine Laboratory",
      "Transport",
      "Flying Fleet",
      "Medical Facility",
      "Sports",
      "Flight Simulators",
      "Meteorology Lab",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Blue Dart Aviation",
        "Boeing India",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 44,
      "industryExperts": 18,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 7076436098",
      "email": "admissions@government-flying-training-school-gfts-ujjain-.org",
      "admissionOfficeContact": "+91 9175653043",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-ujjain-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-ujjain-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-ujjain-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-kolkata-93",
    "name": "Government Flying Training School (GFTS), Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Airport Road, Civil Aerodrome, Kolkata, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Kolkata+Kolkata",
    "website": "https://government-flying-training-school-gfts-kolkata-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-kolkata-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aviation Finance",
      "Drone Technology",
      "Aircraft Systems",
      "Flight Safety",
      "Meteorology",
      "Air Navigation",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-kolkata-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Hostel",
      "Central Library",
      "Navigation Lab",
      "Engine Laboratory",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "27 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Etihad Airways",
        "SpiceJet",
        "Airports Authority of India (AAI)",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 27,
      "industryExperts": 9,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 8442525013",
      "email": "admissions@government-flying-training-school-gfts-kolkata-.org",
      "admissionOfficeContact": "+91 7093536642",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-kolkata-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-kolkata-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-kolkata-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-94",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Palam",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Palam",
    "address": "Airport Road, Civil Aerodrome, Palam, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Palam+Palam",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1983,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "BBA Airport Management",
      "Private Pilot Licence (PPL)",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Airline Operations",
      "Air Navigation",
      "Ground Operations",
      "Commercial Flying",
      "Aircraft Systems",
      "Meteorology",
      "Flight Safety",
      "Aviation Finance",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Meteorology Lab",
      "Central Library",
      "Medical Facility",
      "Transport",
      "Digital Library",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "7 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Vistara",
        "Air India",
        "Airbus India",
        "Boeing India",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 27,
      "industryExperts": 11,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9984767958",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-.org",
      "admissionOfficeContact": "+91 8408680146",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-palam-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-95",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Udaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "address": "Airport Road, Civil Aerodrome, Udaipur, Udaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Udaipur+Udaipur",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-.gov.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1982,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Drone Technology & UAV Pilot",
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management"
    ],
    "specializations": [
      "Air Navigation",
      "Ground Operations",
      "Flight Safety",
      "Meteorology",
      "Helicopter Flying",
      "Air Cargo",
      "UAV Operations",
      "Drone Technology",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Maintenance Workshop",
      "Computer Labs",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Medical Facility",
      "Cabin Mock-up",
      "Emergency Evacuation Trainer",
      "Avionics Laboratory",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "AirAsia India",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 18,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7428961178",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-.org",
      "admissionOfficeContact": "+91 9937158948",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-udaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-kolkata-96",
    "name": "Government Flying Training School (GFTS), Kolkata",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Airport Road, Civil Aerodrome, Kolkata, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Kolkata+Kolkata",
    "website": "https://government-flying-training-school-gfts-kolkata-.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-kolkata-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1980,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Ground Operations",
      "Aviation Law",
      "Airport Management",
      "Air Navigation",
      "Avionics",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-kolkata-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Maintenance Workshop",
      "Computer Labs",
      "Aircraft Hangar",
      "Transport",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "16 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "AirAsia India",
        "Blue Dart Aviation",
        "HAL",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 9,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9176986708",
      "email": "admissions@government-flying-training-school-gfts-kolkata-.org",
      "admissionOfficeContact": "+91 9752452942",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-kolkata-",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-kolkata-",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-kolkata-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-mysore-97",
    "name": "Hindustan Institute of Aeronautics (AME), Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Airport Road, Civil Aerodrome, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Mysore+Mysore",
    "website": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2008,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management",
      "Aviation Safety & Security Certificate",
      "B.Sc. Aviation"
    ],
    "specializations": [
      "Ground Operations",
      "Flight Safety",
      "Commercial Flying",
      "UAV Operations",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-mysore-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Digital Library",
      "Flight Simulators",
      "Maintenance Workshop",
      "Sports",
      "Central Library",
      "Meteorology Lab",
      "Cabin Mock-up",
      "Flying Fleet",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "10 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Pawan Hans Helicopters",
        "Adani Airports",
        "GMR Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 17,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9434422225",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-mysore-.org",
      "admissionOfficeContact": "+91 7438905444",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-mysore-",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-mysore-",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-begumpet-98",
    "name": "Al-Ameen Flying Club & Aviation Academy, Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Begumpet+Begumpet",
    "website": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1987,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management",
      "BBA Airport Management",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Helicopter Flying",
      "UAV Operations",
      "Drone Technology",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-begumpet-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Aircraft Hangar",
      "Maintenance Workshop",
      "Digital Library",
      "Central Library",
      "Avionics Laboratory",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Medical Facility",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "19 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "SpiceJet",
        "Qatar Airways",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 46,
      "industryExperts": 9,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9516102472",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-begumpet-.org",
      "admissionOfficeContact": "+91 8516447674",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-begumpet-",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-begumpet-",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-begumpet-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-baramati-99",
    "name": "International School of Aviation & Airport Management, Baramati",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Baramati",
    "address": "Airport Road, Civil Aerodrome, Baramati, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Baramati+Baramati",
    "website": "https://international-school-of-aviation-and-airport-management-baramati-.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-baramati-.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Aviation Logistics & Cargo Management",
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "BBA Airport Management"
    ],
    "specializations": [
      "Air Navigation",
      "Airline Operations",
      "Drone Technology",
      "Flight Safety",
      "Commercial Flying",
      "Avionics",
      "Ground Operations",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-baramati-.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Computer Labs",
      "Central Library",
      "Airport Training Facility",
      "Hostel",
      "Flight Simulators",
      "Flying Fleet",
      "Digital Library",
      "Maintenance Workshop",
      "Sports",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Etihad Airways",
        "HAL",
        "SpiceJet",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 16,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8987853437",
      "email": "admissions@international-school-of-aviation-and-airport-management-baramati-.org",
      "admissionOfficeContact": "+91 8761369620",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-baramati-",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-baramati-",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-baramati-"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-palam-100",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Palam",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Palam",
    "address": "Airport Road, Civil Aerodrome, Palam, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Palam+Palam",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2010,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "International Aviation",
      "Air Cargo",
      "Helicopter Flying",
      "UAV Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Digital Library",
      "Avionics Laboratory",
      "Hostel",
      "Computer Labs",
      "Navigation Lab",
      "Flight Simulators",
      "Meteorology Lab",
      "Central Library",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "11 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Blue Dart Aviation",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 41,
      "industryExperts": 18,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7308641314",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-palam-1.org",
      "admissionOfficeContact": "+91 9720940671",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-palam-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-palam-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-palam-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-new-delhi-101",
    "name": "International School of Aviation & Airport Management, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Airport Road, Civil Aerodrome, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+New+Delhi+New Delhi",
    "website": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1976,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Aviation Finance",
      "UAV Operations",
      "Meteorology",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Flying Fleet",
      "Transport",
      "Digital Library",
      "Cabin Mock-up",
      "Wi-Fi Campus",
      "Flight Simulators",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Airbus India",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 7,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 9979589612",
      "email": "admissions@international-school-of-aviation-and-airport-management-new-delhi-1.org",
      "admissionOfficeContact": "+91 8287454232",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-new-delhi-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-new-delhi-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-salem-102",
    "name": "Hindustan Institute of Aeronautics (AME), Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Airport Road, Civil Aerodrome, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Salem+Salem",
    "website": "https://hindustan-institute-of-aeronautics-ame-salem-1.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-salem-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management",
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Helicopter Flying",
      "Air Cargo",
      "Aviation Finance",
      "Aviation Law",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-salem-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Central Library",
      "Maintenance Workshop",
      "Aircraft Hangar",
      "Digital Library",
      "Hostel",
      "Sports",
      "Airport Training Facility",
      "Medical Facility",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "IndiGo Airlines",
        "Air India Express",
        "Pawan Hans Helicopters",
        "Boeing India",
        "Airports Authority of India (AAI)",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 37,
      "industryExperts": 7,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9637989639",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-salem-1.org",
      "admissionOfficeContact": "+91 9334713303",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-salem-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-salem-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-salem-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-rajkot-103",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Airport Road, Civil Aerodrome, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Rajkot+Rajkot",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2011,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aircraft Engineering",
      "Airline Operations",
      "Drone Technology",
      "Aviation Finance",
      "Commercial Flying",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Engine Laboratory",
      "Avionics Laboratory",
      "Computer Labs",
      "Aircraft Hangar",
      "Navigation Lab",
      "Medical Facility",
      "Digital Library",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "19 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Akasa Air",
        "HAL",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 18,
      "industryExperts": 10,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 7862777886",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.org",
      "admissionOfficeContact": "+91 9407577514",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-begumpet-104",
    "name": "Government Flying Training School (GFTS), Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Begumpet+Begumpet",
    "website": "https://government-flying-training-school-gfts-begumpet-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-begumpet-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Flight Dispatcher Certificate",
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Safety & Security Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Ground Operations",
      "Helicopter Flying",
      "Airport Management",
      "Commercial Flying",
      "Airline Operations",
      "Air Cargo",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-begumpet-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Digital Library",
      "Central Library",
      "Flying Fleet",
      "Hostel",
      "Aircraft Hangar",
      "Sports",
      "Cabin Mock-up",
      "Engine Laboratory",
      "Wi-Fi Campus",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "6 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Alliance Air",
        "GMR Airports",
        "Boeing India",
        "SpiceJet",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 12,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9053521911",
      "email": "admissions@government-flying-training-school-gfts-begumpet-1.org",
      "admissionOfficeContact": "+91 9419320577",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-begumpet-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-begumpet-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-begumpet-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-105",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Madurai",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Madurai",
    "city": "Madurai",
    "address": "Airport Road, Civil Aerodrome, Madurai, Madurai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Madurai+Madurai",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1985,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Commercial Pilot Licence (CPL)",
      "Aviation Safety & Security Certificate",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Meteorology",
      "Airport Management",
      "Flight Safety",
      "Avionics",
      "Air Navigation",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Meteorology Lab",
      "Computer Labs",
      "Avionics Laboratory",
      "Aircraft Hangar",
      "Emergency Evacuation Trainer",
      "Hostel",
      "Flying Fleet",
      "Flight Simulators",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "26 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Blue Dart Aviation",
        "GMR Airports",
        "Akasa Air",
        "Emirates"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 22,
      "industryExperts": 12,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 9815165061",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.org",
      "admissionOfficeContact": "+91 7002928370",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-106",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Jakkur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Jakkur",
    "address": "Airport Road, Civil Aerodrome, Jakkur, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Jakkur+Jakkur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "MBA Aviation Management",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "B.Sc. Aviation"
    ],
    "specializations": [
      "Commercial Flying",
      "UAV Operations",
      "Ground Operations",
      "Air Navigation",
      "Helicopter Flying",
      "Airline Operations",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Cabin Mock-up",
      "Engine Laboratory",
      "Hostel",
      "Aircraft Hangar",
      "Digital Library",
      "Medical Facility",
      "Transport",
      "Maintenance Workshop"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Airbus India",
        "Etihad Airways",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 10,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 7845789198",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1.org",
      "admissionOfficeContact": "+91 7490063085",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jakkur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-new-delhi-107",
    "name": "Hindustan Institute of Aeronautics (AME), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Airport Road, Civil Aerodrome, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+New+Delhi+New Delhi",
    "website": "https://hindustan-institute-of-aeronautics-ame-new-delhi-1.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-new-delhi-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Safety & Security Certificate",
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Commercial Flying",
      "Meteorology",
      "Airport Management",
      "International Aviation",
      "Flight Safety",
      "Aviation Law",
      "Airline Operations",
      "Air Cargo"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-new-delhi-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Flight Simulators",
      "Navigation Lab",
      "Avionics Laboratory",
      "Engine Laboratory",
      "Airport Training Facility",
      "Hostel",
      "Wi-Fi Campus",
      "Cabin Mock-up",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "Blue Dart Aviation",
        "Etihad Airways",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 10,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 9362670637",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-new-delhi-1.org",
      "admissionOfficeContact": "+91 7184436644",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-new-delhi-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-new-delhi-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-108",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Indore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Airport Road, Civil Aerodrome, Indore, Indore, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Indore+Indore",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1.gov.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2020,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management",
      "Drone Technology & UAV Pilot",
      "MBA Aviation Management",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Commercial Flying",
      "Aircraft Systems",
      "Ground Operations",
      "Flight Safety",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Airport Training Facility",
      "Navigation Lab",
      "Flight Simulators",
      "Flying Fleet",
      "Avionics Laboratory",
      "Wi-Fi Campus",
      "Computer Labs",
      "Meteorology Lab",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Air India",
        "Vistara",
        "Akasa Air",
        "SpiceJet"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 30,
      "industryExperts": 10,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7627520273",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1.org",
      "admissionOfficeContact": "+91 9687905772",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-indore-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-new-delhi-109",
    "name": "International School of Aviation & Airport Management, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Airport Road, Civil Aerodrome, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+New+Delhi+New Delhi",
    "website": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2004,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Airport Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Private Pilot Licence (PPL)"
    ],
    "specializations": [
      "Avionics",
      "Airport Management",
      "Helicopter Flying",
      "Drone Technology",
      "International Aviation",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-new-delhi-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Sports",
      "Digital Library",
      "Computer Labs",
      "Avionics Laboratory",
      "Wi-Fi Campus",
      "Emergency Evacuation Trainer",
      "Hostel",
      "Flight Simulators"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Air India",
        "IndiGo Airlines",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 21,
      "industryExperts": 13,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8358553984",
      "email": "admissions@international-school-of-aviation-and-airport-management-new-delhi-1.org",
      "admissionOfficeContact": "+91 9702943969",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-new-delhi-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-new-delhi-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-110",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Muzaffarpur+Muzaffarpur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "B.Sc. Aviation",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)"
    ],
    "specializations": [
      "International Aviation",
      "Meteorology",
      "Ground Operations",
      "Air Cargo",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Emergency Evacuation Trainer",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Sports",
      "Navigation Lab",
      "Wi-Fi Campus",
      "Central Library",
      "Transport",
      "Flight Simulators",
      "Cabin Mock-up",
      "Maintenance Workshop"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "SpiceJet",
        "Air India Express",
        "Emirates",
        "Akasa Air",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 41,
      "industryExperts": 6,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 7801748886",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1.org",
      "admissionOfficeContact": "+91 9069685279",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-muzaffarpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-trichy-111",
    "name": "International School of Aviation & Airport Management, Trichy",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "city": "Trichy",
    "address": "Airport Road, Civil Aerodrome, Trichy, Tiruchirappalli, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Trichy+Trichy",
    "website": "https://international-school-of-aviation-and-airport-management-trichy-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-trichy-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2013,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)",
      "B.Sc. Aviation",
      "Student Pilot Licence (SPL)"
    ],
    "specializations": [
      "Helicopter Flying",
      "Air Navigation",
      "Drone Technology",
      "International Aviation",
      "Aircraft Engineering",
      "Commercial Flying",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-trichy-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Medical Facility",
      "Sports",
      "Meteorology Lab",
      "Central Library",
      "Navigation Lab",
      "Avionics Laboratory",
      "Computer Labs",
      "Digital Library"
    ],
    "flightTraining": {
      "flyingFleet": "11 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "Etihad Airways",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 38,
      "industryExperts": 15,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 8968820140",
      "email": "admissions@international-school-of-aviation-and-airport-management-trichy-1.org",
      "admissionOfficeContact": "+91 7763546317",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-trichy-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-trichy-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-trichy-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-112",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Airport Road, Civil Aerodrome, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Ahmedabad+Ahmedabad",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1975,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "B.Sc. Aviation",
      "Flight Dispatcher Certificate",
      "Aviation Safety & Security Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Private Pilot Licence (PPL)",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Avionics",
      "Meteorology",
      "Airport Management",
      "Ground Operations",
      "Aircraft Engineering",
      "Commercial Flying",
      "Flight Safety",
      "Drone Technology",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Meteorology Lab",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up",
      "Navigation Lab",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "17 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Boeing India",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 15,
      "industryExperts": 14,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 9901009029",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1.org",
      "admissionOfficeContact": "+91 8419019285",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-ahmedabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-palam-113",
    "name": "Hindustan Institute of Aeronautics (AME), Palam",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Palam",
    "address": "Airport Road, Civil Aerodrome, Palam, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Palam+Palam",
    "website": "https://hindustan-institute-of-aeronautics-ame-palam-1.gov.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-palam-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1990,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Aviation Safety & Security Certificate",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "Avionics",
      "Airline Operations",
      "Helicopter Flying",
      "Aircraft Systems",
      "Ground Operations",
      "Aviation Law",
      "Meteorology",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-palam-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Digital Library",
      "Central Library",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Sports",
      "Transport",
      "Meteorology Lab",
      "Maintenance Workshop",
      "Avionics Laboratory",
      "Navigation Lab",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "9 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Airports Authority of India (AAI)",
        "SpiceJet",
        "Adani Airports",
        "Alliance Air",
        "Boeing India",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 16,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9781776409",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-palam-1.org",
      "admissionOfficeContact": "+91 9522183909",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-palam-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-palam-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-palam-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-muzaffarpur-114",
    "name": "Al-Ameen Flying Club & Aviation Academy, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Muzaffarpur+Muzaffarpur",
    "website": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-1.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1973,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Private Pilot Licence (PPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Drone Technology",
      "Aircraft Systems",
      "Avionics",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-muzaffarpur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Aircraft Hangar",
      "Digital Library",
      "Flight Simulators",
      "Hostel",
      "Airport Training Facility",
      "Maintenance Workshop",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "17 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "AirAsia India",
        "Emirates",
        "Boeing India",
        "GMR Airports",
        "Airports Authority of India (AAI)",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 22,
      "industryExperts": 12,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9568047498",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-muzaffarpur-1.org",
      "admissionOfficeContact": "+91 7767066486",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-muzaffarpur-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-muzaffarpur-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-muzaffarpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-palam-115",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Palam",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Palam",
    "address": "Airport Road, Civil Aerodrome, Palam, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Palam+Palam",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Student Pilot Licence (SPL)",
      "Aviation Safety & Security Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Airline Operations",
      "Flight Safety",
      "Aircraft Systems",
      "UAV Operations",
      "Air Navigation",
      "Aviation Law",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-palam-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Aircraft Hangar",
      "Medical Facility",
      "Computer Labs",
      "Digital Library",
      "Hostel",
      "Emergency Evacuation Trainer",
      "Flight Simulators"
    ],
    "flightTraining": {
      "flyingFleet": "9 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Etihad Airways",
        "Airbus India",
        "Boeing India",
        "Emirates"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 30,
      "industryExperts": 17,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9190076876",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-palam-1.org",
      "admissionOfficeContact": "+91 8313925820",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-palam-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-palam-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-palam-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-vadodara-116",
    "name": "Al-Ameen Flying Club & Aviation Academy, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Airport Road, Civil Aerodrome, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Vadodara+Vadodara",
    "website": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1993,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Safety & Security Certificate",
      "Flight Dispatcher Certificate",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Student Pilot Licence (SPL)",
      "Drone Technology & UAV Pilot",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Meteorology",
      "Drone Technology",
      "Aircraft Systems",
      "Flight Safety",
      "Airport Management",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Transport",
      "Flying Fleet",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "8 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Pawan Hans Helicopters",
        "IndiGo Airlines",
        "Airports Authority of India (AAI)",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 29,
      "industryExperts": 15,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 8811295579",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-vadodara-1.org",
      "admissionOfficeContact": "+91 8531759660",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-vadodara-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-vadodara-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-vadodara-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-rajkot-117",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Airport Road, Civil Aerodrome, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Rajkot+Rajkot",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1995,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Air Navigation",
      "Aviation Finance",
      "Helicopter Flying",
      "Aircraft Systems",
      "Aircraft Engineering",
      "Air Cargo",
      "Avionics"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Sports",
      "Hostel",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Computer Labs",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "SpiceJet",
        "HAL",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 15,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 8975210832",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1.org",
      "admissionOfficeContact": "+91 8593019129",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-rajkot-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-rohini-118",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Rohini",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "Rohini",
    "address": "Airport Road, Civil Aerodrome, Rohini, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Rohini+Rohini",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-rohini-1.edu.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-rohini-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1982,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc. Aviation",
      "Cabin Crew & Air Hostess Diploma",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "Aviation Finance",
      "Drone Technology",
      "Meteorology",
      "Airport Management",
      "Airline Operations",
      "Aircraft Engineering",
      "Flight Safety",
      "Avionics",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-rohini-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Emergency Evacuation Trainer",
      "Engine Laboratory",
      "Aircraft Hangar",
      "Computer Labs",
      "Flying Fleet",
      "Airport Training Facility",
      "Meteorology Lab",
      "Medical Facility",
      "Digital Library",
      "Hostel",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "17 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "GMR Airports",
        "IndiGo Airlines",
        "Adani Airports",
        "AirAsia India",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 14,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 7360143140",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-rohini-1.org",
      "admissionOfficeContact": "+91 9968125661",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-rohini-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-rohini-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-rohini-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-hyderabad-119",
    "name": "School of Aircraft Maintenance Engineering (SAME), Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Airport Road, Civil Aerodrome, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Hyderabad+Hyderabad",
    "website": "https://school-of-aircraft-maintenance-engineering-same-hyderabad-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-hyderabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2011,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Flight Dispatcher Certificate",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "UAV Operations",
      "Airline Operations",
      "Aircraft Systems",
      "Drone Technology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-hyderabad-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Cabin Mock-up",
      "Navigation Lab",
      "Engine Laboratory",
      "Hostel",
      "Transport",
      "Airport Training Facility",
      "Digital Library",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "Airbus India",
        "GMR Airports",
        "Akasa Air",
        "Boeing India",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 8,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 9110672950",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-hyderabad-1.org",
      "admissionOfficeContact": "+91 8594627398",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-hyderabad-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-hyderabad-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-hyderabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-120",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Airport Road, Civil Aerodrome, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Jaipur+Jaipur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2004,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "UAV Operations",
      "Avionics",
      "Commercial Flying",
      "Helicopter Flying",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Emergency Evacuation Trainer",
      "Digital Library",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Computer Labs",
      "Maintenance Workshop",
      "Hostel",
      "Cabin Mock-up",
      "Wi-Fi Campus",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Qatar Airways",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 29,
      "industryExperts": 10,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 8167829407",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1.org",
      "admissionOfficeContact": "+91 8450955301",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-121",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Calicut",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Calicut",
    "address": "Airport Road, Civil Aerodrome, Calicut, Kozhikode, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Calicut+Calicut",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2019,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)",
      "Private Pilot Licence (PPL)",
      "BBA Airport Management"
    ],
    "specializations": [
      "Aviation Finance",
      "Aviation Law",
      "Meteorology",
      "Flight Safety",
      "UAV Operations",
      "Air Cargo",
      "Airport Management",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Wi-Fi Campus",
      "Central Library",
      "Flying Fleet",
      "Meteorology Lab",
      "Emergency Evacuation Trainer",
      "Transport",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Maintenance Workshop",
      "Flight Simulators"
    ],
    "flightTraining": {
      "flyingFleet": "15 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "AirAsia India",
        "Air India",
        "Airports Authority of India (AAI)",
        "Blue Dart Aviation",
        "Etihad Airways",
        "Pawan Hans Helicopters",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 15,
      "industryExperts": 7,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 8059941643",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1.org",
      "admissionOfficeContact": "+91 8419056285",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-calicut-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-mysore-122",
    "name": "Government Flying Training School (GFTS), Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Airport Road, Civil Aerodrome, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Mysore+Mysore",
    "website": "https://government-flying-training-school-gfts-mysore-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-mysore-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2003,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Aircraft Systems",
      "Commercial Flying",
      "Airline Operations",
      "Flight Safety",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-mysore-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Airport Training Facility",
      "Flight Simulators",
      "Emergency Evacuation Trainer",
      "Engine Laboratory",
      "Cabin Mock-up",
      "Maintenance Workshop",
      "Flying Fleet",
      "Navigation Lab",
      "Sports"
    ],
    "flightTraining": {
      "flyingFleet": "25 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Qatar Airways",
        "Emirates",
        "Blue Dart Aviation",
        "AirAsia India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 30,
      "industryExperts": 13,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9901549497",
      "email": "admissions@government-flying-training-school-gfts-mysore-1.org",
      "admissionOfficeContact": "+91 7430434590",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-mysore-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-mysore-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-mysore-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-salem-123",
    "name": "Government Flying Training School (GFTS), Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Airport Road, Civil Aerodrome, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Salem+Salem",
    "website": "https://government-flying-training-school-gfts-salem-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-salem-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2004,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Safety & Security Certificate",
      "BBA Airport Management",
      "Private Pilot Licence (PPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Ground Operations",
      "Airport Management",
      "Air Cargo",
      "Avionics"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-salem-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Engine Laboratory",
      "Computer Labs",
      "Transport",
      "Flight Simulators",
      "Airport Training Facility",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "21 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Airbus India",
        "Alliance Air",
        "Vistara",
        "SpiceJet",
        "GMR Airports",
        "Air India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 12,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9108367094",
      "email": "admissions@government-flying-training-school-gfts-salem-1.org",
      "admissionOfficeContact": "+91 9109324839",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-salem-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-salem-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-salem-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-dundigal-124",
    "name": "Al-Ameen Flying Club & Aviation Academy, Dundigal",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Medchal-Malkajgiri",
    "city": "Dundigal",
    "address": "Airport Road, Civil Aerodrome, Dundigal, Medchal-Malkajgiri, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Dundigal+Dundigal",
    "website": "https://al-ameen-flying-club-and-aviation-academy-dundigal-1.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-dundigal-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1996,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "MBA Aviation Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Airport Management",
      "Aircraft Engineering",
      "Meteorology",
      "Aviation Law",
      "Air Cargo"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-dundigal-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Emergency Evacuation Trainer",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Airport Training Facility",
      "Hostel",
      "Digital Library",
      "Cabin Mock-up",
      "Transport",
      "Engine Laboratory",
      "Maintenance Workshop",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "12 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "Etihad Airways",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 35,
      "industryExperts": 15,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 9424358496",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-dundigal-1.org",
      "admissionOfficeContact": "+91 7075791774",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-dundigal-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-dundigal-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-dundigal-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-aligarh-125",
    "name": "Government Flying Training School (GFTS), Aligarh",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "city": "Aligarh",
    "address": "Airport Road, Civil Aerodrome, Aligarh, Aligarh, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Aligarh+Aligarh",
    "website": "https://government-flying-training-school-gfts-aligarh-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-aligarh-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Flight Dispatcher Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "BBA Airport Management",
      "Aviation Safety & Security Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Helicopter Flying",
      "Meteorology",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-aligarh-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Digital Library",
      "Computer Labs",
      "Meteorology Lab",
      "Maintenance Workshop",
      "Cabin Mock-up",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "13 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Akasa Air",
        "GMR Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 9,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 9342345420",
      "email": "admissions@government-flying-training-school-gfts-aligarh-1.org",
      "admissionOfficeContact": "+91 8087062839",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-aligarh-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-aligarh-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-aligarh-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-126",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Gaya",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Gaya",
    "city": "Gaya",
    "address": "Airport Road, Civil Aerodrome, Gaya, Gaya, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Gaya+Gaya",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1982,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Private Pilot Licence (PPL)",
      "Flight Dispatcher Certificate",
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "International Aviation",
      "Flight Safety",
      "Airline Operations",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Hostel",
      "Digital Library",
      "Avionics Laboratory",
      "Aircraft Hangar",
      "Engine Laboratory",
      "Sports",
      "Emergency Evacuation Trainer",
      "Cabin Mock-up",
      "Meteorology Lab",
      "Flying Fleet",
      "Maintenance Workshop"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "HAL",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 28,
      "industryExperts": 10,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 7945819625",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1.org",
      "admissionOfficeContact": "+91 7607150451",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-gaya-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-127",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Jodhpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur",
    "city": "Jodhpur",
    "address": "Airport Road, Civil Aerodrome, Jodhpur, Jodhpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Jodhpur+Jodhpur",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1971,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Safety & Security Certificate",
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Helicopter Flying",
      "Drone Technology",
      "Meteorology",
      "Airline Operations",
      "Aircraft Engineering",
      "Avionics",
      "Aviation Finance",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Computer Labs",
      "Emergency Evacuation Trainer",
      "Medical Facility",
      "Cabin Mock-up",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "HAL",
        "SpiceJet",
        "Vistara",
        "Alliance Air",
        "Air India",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 18,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9034647221",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1.org",
      "admissionOfficeContact": "+91 7495978703",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-jodhpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-128",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Airport Road, Civil Aerodrome, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+New+Delhi+New Delhi",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1983,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Aviation Logistics & Cargo Management",
      "Student Pilot Licence (SPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Meteorology",
      "Commercial Flying",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Medical Facility",
      "Cabin Mock-up",
      "Maintenance Workshop",
      "Emergency Evacuation Trainer",
      "Airport Training Facility",
      "Central Library",
      "Computer Labs",
      "Aircraft Hangar",
      "Meteorology Lab",
      "Flight Simulators",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Adani Airports",
        "SpiceJet",
        "Air India",
        "Akasa Air",
        "Air India Express"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 17,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 7384159896",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1.org",
      "admissionOfficeContact": "+91 7137031103",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-129",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Madurai",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Madurai",
    "city": "Madurai",
    "address": "Airport Road, Civil Aerodrome, Madurai, Madurai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Madurai+Madurai",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1982,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "BBA Airport Management",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "Aviation Finance",
      "Aviation Law",
      "Aircraft Engineering"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Avionics Laboratory",
      "Navigation Lab",
      "Digital Library",
      "Transport",
      "Wi-Fi Campus",
      "Computer Labs",
      "Engine Laboratory",
      "Central Library",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "24 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Air India",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 9,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 8683097354",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1.org",
      "admissionOfficeContact": "+91 8027105630",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-madurai-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-130",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Airport Road, Civil Aerodrome, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Bengaluru+Bengaluru",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1.edu.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1990,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "International Aviation",
      "Airport Management",
      "Aircraft Systems",
      "Aviation Law",
      "Helicopter Flying",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Aircraft Hangar",
      "Sports",
      "Navigation Lab",
      "Maintenance Workshop",
      "Engine Laboratory",
      "Central Library",
      "Computer Labs",
      "Flight Simulators",
      "Flying Fleet",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "Vistara",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 31,
      "industryExperts": 17,
      "visitingPilotsCount": 9
    },
    "contact": {
      "phone": "+91 7679965558",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1.org",
      "admissionOfficeContact": "+91 8567157785",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-bengaluru-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-131",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Airport Road, Civil Aerodrome, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Cochin+Cochin",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1972,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Cabin Crew & Air Hostess Diploma",
      "B.Sc. Aviation",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Aviation Law",
      "Aircraft Systems",
      "UAV Operations",
      "Air Navigation",
      "Flight Safety",
      "Helicopter Flying",
      "Aviation Finance",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flight Simulators",
      "Sports",
      "Airport Training Facility",
      "Wi-Fi Campus",
      "Aircraft Hangar",
      "Medical Facility",
      "Cabin Mock-up",
      "Computer Labs",
      "Navigation Lab"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "Airports Authority of India (AAI)",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 44,
      "industryExperts": 8,
      "visitingPilotsCount": 13
    },
    "contact": {
      "phone": "+91 9494467358",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1.org",
      "admissionOfficeContact": "+91 7152920162",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-cochin-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-mehsana-132",
    "name": "School of Aircraft Maintenance Engineering (SAME), Mehsana",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Mehsana",
    "city": "Mehsana",
    "address": "Airport Road, Civil Aerodrome, Mehsana, Mehsana, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Mehsana+Mehsana",
    "website": "https://school-of-aircraft-maintenance-engineering-same-mehsana-1.gov.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-mehsana-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2002,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "BBA Airport Management",
      "MBA Aviation Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aviation Law",
      "Airport Management",
      "International Aviation",
      "Airline Operations",
      "Drone Technology",
      "Aircraft Engineering",
      "Aircraft Systems",
      "Meteorology"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-mehsana-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Avionics Laboratory",
      "Digital Library",
      "Flight Simulators",
      "Cabin Mock-up",
      "Medical Facility",
      "Hostel",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "GMR Airports",
        "Etihad Airways",
        "SpiceJet",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 19,
      "industryExperts": 17,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 8616797659",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-mehsana-1.org",
      "admissionOfficeContact": "+91 8097575842",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-mehsana-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-mehsana-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-mehsana-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-bengaluru-133",
    "name": "Government Flying Training School (GFTS), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Airport Road, Civil Aerodrome, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Bengaluru+Bengaluru",
    "website": "https://government-flying-training-school-gfts-bengaluru-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-bengaluru-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1995,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Aviation Safety & Security Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "International Aviation",
      "Airline Operations",
      "Air Navigation",
      "Commercial Flying",
      "Airport Management",
      "UAV Operations",
      "Meteorology",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-bengaluru-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Cabin Mock-up",
      "Navigation Lab",
      "Maintenance Workshop",
      "Avionics Laboratory",
      "Meteorology Lab",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "20 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Air India Express",
        "Airbus India",
        "HAL",
        "Pawan Hans Helicopters",
        "Etihad Airways",
        "Boeing India",
        "GMR Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 43,
      "industryExperts": 6,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 9185073728",
      "email": "admissions@government-flying-training-school-gfts-bengaluru-1.org",
      "admissionOfficeContact": "+91 9605018638",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-bengaluru-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-bengaluru-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-bengaluru-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-club-and-aviation-academy-dwarka-134",
    "name": "National Flying Club & Aviation Academy, Dwarka",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "Dwarka",
    "address": "Airport Road, Civil Aerodrome, Dwarka, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Club+&+Aviation+Academy,+Dwarka+Dwarka",
    "website": "https://national-flying-club-and-aviation-academy-dwarka-1.edu.in",
    "admissionPortalUrl": "https://national-flying-club-and-aviation-academy-dwarka-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1979,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Student Pilot Licence (SPL)",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "B.Sc. Aviation",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Drone Technology",
      "Aircraft Engineering",
      "International Aviation",
      "UAV Operations",
      "Airline Operations",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-club-and-aviation-academy-dwarka-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Emergency Evacuation Trainer",
      "Meteorology Lab",
      "Transport",
      "Airport Training Facility",
      "Flight Simulators",
      "Flying Fleet",
      "Digital Library",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "6 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Pawan Hans Helicopters",
        "Blue Dart Aviation",
        "GMR Airports",
        "Airports Authority of India (AAI)"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 39,
      "industryExperts": 7,
      "visitingPilotsCount": 11
    },
    "contact": {
      "phone": "+91 9608665497",
      "email": "admissions@national-flying-club-and-aviation-academy-dwarka-1.org",
      "admissionOfficeContact": "+91 8177258626",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-club-and-aviation-academy-dwarka-1",
        "twitter": "https://twitter.com/national-flying-club-and-aviation-academy-dwarka-1",
        "linkedin": "https://linkedin.com/school/national-flying-club-and-aviation-academy-dwarka-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-lucknow-135",
    "name": "School of Aircraft Maintenance Engineering (SAME), Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Airport Road, Civil Aerodrome, Lucknow, Lucknow, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Lucknow+Lucknow",
    "website": "https://school-of-aircraft-maintenance-engineering-same-lucknow-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-lucknow-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1988,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aircraft Maintenance Engineering (AME - Avionics)"
    ],
    "specializations": [
      "Meteorology",
      "Ground Operations",
      "Aviation Law",
      "Helicopter Flying",
      "Aircraft Systems",
      "UAV Operations",
      "Air Navigation",
      "Drone Technology",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-lucknow-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Engine Laboratory",
      "Navigation Lab",
      "Meteorology Lab",
      "Maintenance Workshop",
      "Digital Library",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Etihad Airways",
        "Emirates",
        "Blue Dart Aviation",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 12,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 9981370659",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-lucknow-1.org",
      "admissionOfficeContact": "+91 7768115391",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-lucknow-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-lucknow-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-lucknow-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-salem-136",
    "name": "School of Aircraft Maintenance Engineering (SAME), Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Airport Road, Civil Aerodrome, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Salem+Salem",
    "website": "https://school-of-aircraft-maintenance-engineering-same-salem-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-salem-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1992,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Cabin Crew & Air Hostess Diploma",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Airport Management",
      "Meteorology",
      "Drone Technology",
      "Helicopter Flying",
      "Air Navigation",
      "Air Cargo",
      "Avionics",
      "Commercial Flying",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-salem-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Flying Fleet",
      "Emergency Evacuation Trainer",
      "Aircraft Hangar",
      "Digital Library",
      "Navigation Lab",
      "Meteorology Lab",
      "Wi-Fi Campus",
      "Computer Labs"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "SpiceJet",
        "Blue Dart Aviation",
        "Airports Authority of India (AAI)",
        "Emirates"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 46,
      "industryExperts": 14,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 7823122177",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-salem-1.org",
      "admissionOfficeContact": "+91 7600662619",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-salem-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-salem-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-salem-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-cochin-137",
    "name": "School of Aircraft Maintenance Engineering (SAME), Cochin",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Ernakulam",
    "city": "Cochin",
    "address": "Airport Road, Civil Aerodrome, Cochin, Ernakulam, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Cochin+Cochin",
    "website": "https://school-of-aircraft-maintenance-engineering-same-cochin-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-cochin-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1976,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Flight Dispatcher Certificate",
      "BBA Airport Management",
      "Aviation Logistics & Cargo Management",
      "Drone Technology & UAV Pilot",
      "Cabin Crew & Air Hostess Diploma",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Air Cargo",
      "Aircraft Systems",
      "UAV Operations",
      "Ground Operations",
      "International Aviation",
      "Aviation Finance",
      "Avionics",
      "Air Navigation",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-cochin-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Emergency Evacuation Trainer",
      "Airport Training Facility",
      "Digital Library",
      "Flying Fleet",
      "Aircraft Hangar"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Emirates",
        "AirAsia India",
        "IndiGo Airlines",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 48,
      "industryExperts": 8,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 9300313758",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-cochin-1.org",
      "admissionOfficeContact": "+91 8052667152",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-cochin-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-cochin-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-cochin-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-rajkot-138",
    "name": "International School of Aviation & Airport Management, Rajkot",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot",
    "city": "Rajkot",
    "address": "Airport Road, Civil Aerodrome, Rajkot, Rajkot, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Rajkot+Rajkot",
    "website": "https://international-school-of-aviation-and-airport-management-rajkot-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-rajkot-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1999,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Commercial Pilot Licence (CPL)",
      "Cabin Crew & Air Hostess Diploma",
      "Aviation Safety & Security Certificate",
      "B.Sc. Aviation",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Commercial Flying",
      "Aviation Law",
      "Air Cargo",
      "Avionics",
      "International Aviation",
      "Helicopter Flying",
      "Aviation Finance",
      "Drone Technology",
      "Airline Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-rajkot-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Meteorology Lab",
      "Maintenance Workshop",
      "Avionics Laboratory",
      "Sports",
      "Airport Training Facility"
    ],
    "flightTraining": {
      "flyingFleet": "28 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "Air India Express",
        "Boeing India",
        "Qatar Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 45,
      "industryExperts": 7,
      "visitingPilotsCount": 8
    },
    "contact": {
      "phone": "+91 8847993979",
      "email": "admissions@international-school-of-aviation-and-airport-management-rajkot-1.org",
      "admissionOfficeContact": "+91 9499577931",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-rajkot-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-rajkot-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-rajkot-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-baramati-139",
    "name": "Al-Ameen Flying Club & Aviation Academy, Baramati",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Baramati",
    "address": "Airport Road, Civil Aerodrome, Baramati, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Baramati+Baramati",
    "website": "https://al-ameen-flying-club-and-aviation-academy-baramati-1.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-baramati-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2005,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Aviation Finance",
      "Drone Technology",
      "Air Cargo",
      "Aircraft Engineering",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-baramati-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Wi-Fi Campus",
      "Meteorology Lab",
      "Transport",
      "Airport Training Facility",
      "Engine Laboratory",
      "Digital Library",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "26 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "Adani Airports",
        "Air India",
        "Airbus India",
        "HAL"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 13,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 7486664998",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-baramati-1.org",
      "admissionOfficeContact": "+91 9263790450",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-baramati-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-baramati-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-baramati-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-begumpet-140",
    "name": "School of Aircraft Maintenance Engineering (SAME), Begumpet",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Begumpet",
    "address": "Airport Road, Civil Aerodrome, Begumpet, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Begumpet+Begumpet",
    "website": "https://school-of-aircraft-maintenance-engineering-same-begumpet-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-begumpet-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2002,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "MBA Aviation Management",
      "B.Sc. Aviation",
      "Cabin Crew & Air Hostess Diploma",
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Airline Transport Pilot Licence (ATPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Airline Operations",
      "Helicopter Flying",
      "Air Cargo",
      "Flight Safety"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-begumpet-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Flying Fleet",
      "Emergency Evacuation Trainer",
      "Hostel",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "Etihad Airways",
        "Qatar Airways",
        "Airports Authority of India (AAI)",
        "IndiGo Airlines"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 13,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 8530383178",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-begumpet-1.org",
      "admissionOfficeContact": "+91 8100754647",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-begumpet-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-begumpet-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-begumpet-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-gaya-141",
    "name": "School of Aircraft Maintenance Engineering (SAME), Gaya",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Gaya",
    "city": "Gaya",
    "address": "Airport Road, Civil Aerodrome, Gaya, Gaya, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Gaya+Gaya",
    "website": "https://school-of-aircraft-maintenance-engineering-same-gaya-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-gaya-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2018,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Flight Safety",
      "UAV Operations",
      "Aircraft Systems",
      "Airline Operations",
      "Air Cargo",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-gaya-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Central Library",
      "Transport",
      "Cabin Mock-up",
      "Engine Laboratory",
      "Wi-Fi Campus",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "1 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Boeing India",
        "IndiGo Airlines",
        "Airbus India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 25,
      "industryExperts": 10,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 7283009029",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-gaya-1.org",
      "admissionOfficeContact": "+91 9294259113",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-gaya-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-gaya-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-gaya-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-varanasi-142",
    "name": "Al-Ameen Flying Club & Aviation Academy, Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Airport Road, Civil Aerodrome, Varanasi, Varanasi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Varanasi+Varanasi",
    "website": "https://al-ameen-flying-club-and-aviation-academy-varanasi-1.gov.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-varanasi-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1978,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Sc. Aviation",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "BBA Airport Management",
      "Drone Technology & UAV Pilot"
    ],
    "specializations": [
      "Airport Management",
      "Aviation Finance",
      "International Aviation",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-varanasi-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Computer Labs",
      "Aircraft Hangar",
      "Avionics Laboratory",
      "Medical Facility",
      "Flying Fleet",
      "Transport",
      "Engine Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "6 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Pawan Hans Helicopters",
        "Akasa Air",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 15,
      "visitingPilotsCount": 14
    },
    "contact": {
      "phone": "+91 9993143328",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-varanasi-1.org",
      "admissionOfficeContact": "+91 8915600341",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-varanasi-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-varanasi-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-varanasi-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-lucknow-143",
    "name": "Hindustan Institute of Aeronautics (AME), Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Airport Road, Civil Aerodrome, Lucknow, Lucknow, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Lucknow+Lucknow",
    "website": "https://hindustan-institute-of-aeronautics-ame-lucknow-1.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-lucknow-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1977,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Drone Technology & UAV Pilot",
      "BBA Airport Management",
      "Aviation Safety & Security Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Student Pilot Licence (SPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Drone Technology",
      "Aviation Finance",
      "UAV Operations",
      "Aviation Law",
      "Air Navigation",
      "Airport Management"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-lucknow-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Navigation Lab",
      "Avionics Laboratory",
      "Airport Training Facility",
      "Central Library",
      "Digital Library",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "0 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Airbus India",
        "Air India Express",
        "SpiceJet",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 34,
      "industryExperts": 14,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 7257243284",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-lucknow-1.org",
      "admissionOfficeContact": "+91 8452591543",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-lucknow-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-lucknow-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-lucknow-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "government-flying-training-school-gfts-calicut-144",
    "name": "Government Flying Training School (GFTS), Calicut",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kozhikode",
    "city": "Calicut",
    "address": "Airport Road, Civil Aerodrome, Calicut, Kozhikode, Kerala, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Flying+Training+School+(GFTS),+Calicut+Calicut",
    "website": "https://government-flying-training-school-gfts-calicut-1.gov.in",
    "admissionPortalUrl": "https://government-flying-training-school-gfts-calicut-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2009,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "MBA Aviation Management",
      "Aviation Logistics & Cargo Management",
      "Flight Dispatcher Certificate",
      "BBA Airport Management",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Aviation Law",
      "Commercial Flying",
      "Air Cargo",
      "Airline Operations",
      "Meteorology",
      "Airport Management",
      "Drone Technology",
      "Aircraft Engineering",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://government-flying-training-school-gfts-calicut-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Transport",
      "Central Library",
      "Computer Labs",
      "Meteorology Lab",
      "Wi-Fi Campus",
      "Airport Training Facility",
      "Cabin Mock-up",
      "Digital Library",
      "Emergency Evacuation Trainer",
      "Avionics Laboratory"
    ],
    "flightTraining": {
      "flyingFleet": "9 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "40 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Akasa Air",
        "Qatar Airways",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 20,
      "industryExperts": 9,
      "visitingPilotsCount": 12
    },
    "contact": {
      "phone": "+91 9008950412",
      "email": "admissions@government-flying-training-school-gfts-calicut-1.org",
      "admissionOfficeContact": "+91 9769043850",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-flying-training-school-gfts-calicut-1",
        "twitter": "https://twitter.com/government-flying-training-school-gfts-calicut-1",
        "linkedin": "https://linkedin.com/school/government-flying-training-school-gfts-calicut-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-145",
    "name": "Frankfinn / Skylark Cabin Crew & Aviation Institute, Belgaum",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Belagavi",
    "city": "Belgaum",
    "address": "Airport Road, Civil Aerodrome, Belgaum, Belagavi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Frankfinn+/+Skylark+Cabin+Crew+&+Aviation+Institute,+Belgaum+Belgaum",
    "website": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1.gov.in",
    "admissionPortalUrl": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc. Aviation",
      "MBA Aviation Management",
      "Drone Technology & UAV Pilot",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Airline Transport Pilot Licence (ATPL)",
      "Flight Dispatcher Certificate",
      "BBA Airport Management"
    ],
    "specializations": [
      "Commercial Flying",
      "Aviation Law",
      "Airline Operations",
      "Ground Operations",
      "International Aviation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Meteorology Lab",
      "Emergency Evacuation Trainer",
      "Hostel",
      "Central Library",
      "Wi-Fi Campus",
      "Engine Laboratory",
      "Transport"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Akasa Air",
        "Air India Express",
        "GMR Airports",
        "AirAsia India",
        "Adani Airports"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 23,
      "industryExperts": 10,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 7101718387",
      "email": "admissions@frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1.org",
      "admissionOfficeContact": "+91 8123281066",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1",
        "twitter": "https://twitter.com/frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1",
        "linkedin": "https://linkedin.com/school/frankfinn-/-skylark-cabin-crew-and-aviation-institute-belgaum-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-bareilly-146",
    "name": "Hindustan Institute of Aeronautics (AME), Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Airport Road, Civil Aerodrome, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Bareilly+Bareilly",
    "website": "https://hindustan-institute-of-aeronautics-ame-bareilly-1.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-bareilly-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2020,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Drone Technology & UAV Pilot",
      "B.Sc. Aviation",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Aviation Law",
      "Ground Operations",
      "Aircraft Systems",
      "Flight Safety",
      "Air Navigation",
      "Air Cargo"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-bareilly-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Transport",
      "Meteorology Lab",
      "Flying Fleet",
      "Central Library",
      "Engine Laboratory",
      "Emergency Evacuation Trainer",
      "Maintenance Workshop",
      "Wi-Fi Campus"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Blue Dart Aviation",
        "Air India",
        "Alliance Air",
        "Air India Express",
        "Airbus India",
        "Adani Airports",
        "Pawan Hans Helicopters"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 35,
      "industryExperts": 18,
      "visitingPilotsCount": 5
    },
    "contact": {
      "phone": "+91 7946298147",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-bareilly-1.org",
      "admissionOfficeContact": "+91 7522685000",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-bareilly-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-bareilly-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-bareilly-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "national-flying-training-academy-flying-club-and-aviation-academy-bhopal-147",
    "name": "National Flying Training Academy, Flying Club & Aviation Academy, Bhopal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Airport Road, Civil Aerodrome, Bhopal, Bhopal, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Flying+Training+Academy,+Flying+Club+&+Aviation+Academy,+Bhopal+Bhopal",
    "website": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1.gov.in",
    "admissionPortalUrl": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1991,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Commercial Pilot Licence (CPL)",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Aviation Logistics & Cargo Management",
      "B.Sc. Aviation",
      "Flight Dispatcher Certificate"
    ],
    "specializations": [
      "Meteorology",
      "Aviation Finance",
      "Flight Safety",
      "International Aviation",
      "Commercial Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Medical Facility",
      "Aircraft Hangar",
      "Maintenance Workshop",
      "Airport Training Facility",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "7 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "60 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Adani Airports",
        "Airbus India",
        "Vistara",
        "GMR Airports",
        "Etihad Airways",
        "Boeing India",
        "Akasa Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b935,000,000 - \u20b945,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Sameer Patel",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 33,
      "industryExperts": 13,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8637913756",
      "email": "admissions@national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1.org",
      "admissionOfficeContact": "+91 8696332726",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1",
        "twitter": "https://twitter.com/national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1",
        "linkedin": "https://linkedin.com/school/national-flying-training-academy-flying-club-and-aviation-academy-bhopal-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-muzaffarpur-148",
    "name": "International School of Aviation & Airport Management, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Airport Road, Civil Aerodrome, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Muzaffarpur+Muzaffarpur",
    "website": "https://international-school-of-aviation-and-airport-management-muzaffarpur-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-muzaffarpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2019,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "BBA Airport Management",
      "Private Pilot Licence (PPL)",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "Student Pilot Licence (SPL)",
      "MBA Aviation Management"
    ],
    "specializations": [
      "Aircraft Systems",
      "Aviation Finance",
      "Air Navigation",
      "UAV Operations",
      "Meteorology",
      "International Aviation",
      "Aviation Law"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-muzaffarpur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Engine Laboratory",
      "Meteorology Lab",
      "Transport",
      "Medical Facility",
      "Wi-Fi Campus",
      "Cabin Mock-up"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Vistara",
        "Qatar Airways",
        "Pawan Hans Helicopters",
        "Air India",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 11,
      "visitingPilotsCount": 6
    },
    "contact": {
      "phone": "+91 8959767685",
      "email": "admissions@international-school-of-aviation-and-airport-management-muzaffarpur-1.org",
      "admissionOfficeContact": "+91 9806955056",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-muzaffarpur-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-muzaffarpur-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-muzaffarpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-149",
    "name": "Rajiv Gandhi National Aviation University (RGNAU) Regional Centre, Bhanpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Bhanpur",
    "address": "Airport Road, Civil Aerodrome, Bhanpur, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Rajiv+Gandhi+National+Aviation+University+(RGNAU)+Regional+Centre,+Bhanpur+Bhanpur",
    "website": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1.edu.in",
    "admissionPortalUrl": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1977,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Cabin Crew & Air Hostess Diploma",
      "Student Pilot Licence (SPL)",
      "Aviation Logistics & Cargo Management",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "Flight Safety",
      "Helicopter Flying",
      "Airline Operations",
      "Commercial Flying",
      "Avionics",
      "Aircraft Systems",
      "Aviation Finance"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Wi-Fi Campus",
      "Meteorology Lab",
      "Engine Laboratory",
      "Transport",
      "Flying Fleet",
      "Avionics Laboratory",
      "Hostel",
      "Aircraft Hangar",
      "Digital Library",
      "Computer Labs",
      "Navigation Lab",
      "Medical Facility"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Pawan Hans Helicopters",
        "Emirates",
        "IndiGo Airlines",
        "Blue Dart Aviation",
        "GMR Airports",
        "Vistara"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 24,
      "industryExperts": 11,
      "visitingPilotsCount": 15
    },
    "contact": {
      "phone": "+91 9822022714",
      "email": "admissions@rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1.org",
      "admissionOfficeContact": "+91 8009859352",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1",
        "twitter": "https://twitter.com/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1",
        "linkedin": "https://linkedin.com/school/rajiv-gandhi-national-aviation-university-rgnau-regional-centre-bhanpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "hindustan-institute-of-aeronautics-ame-vadodara-150",
    "name": "Hindustan Institute of Aeronautics (AME), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Airport Road, Civil Aerodrome, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Hindustan+Institute+of+Aeronautics+(AME),+Vadodara+Vadodara",
    "website": "https://hindustan-institute-of-aeronautics-ame-vadodara-1.edu.in",
    "admissionPortalUrl": "https://hindustan-institute-of-aeronautics-ame-vadodara-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1969,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Flight Dispatcher Certificate",
      "Drone Technology & UAV Pilot",
      "B.Sc. Aviation",
      "MBA Aviation Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)"
    ],
    "specializations": [
      "Aircraft Systems",
      "Commercial Flying",
      "Drone Technology",
      "Ground Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://hindustan-institute-of-aeronautics-ame-vadodara-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Hostel",
      "Central Library",
      "Medical Facility",
      "Maintenance Workshop",
      "Meteorology Lab",
      "Computer Labs",
      "Wi-Fi Campus",
      "Aircraft Hangar",
      "Emergency Evacuation Trainer"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Air India",
        "Airports Authority of India (AAI)",
        "HAL",
        "IndiGo Airlines",
        "Blue Dart Aviation",
        "Qatar Airways",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 18,
      "industryExperts": 10,
      "visitingPilotsCount": 4
    },
    "contact": {
      "phone": "+91 8123167876",
      "email": "admissions@hindustan-institute-of-aeronautics-ame-vadodara-1.org",
      "admissionOfficeContact": "+91 8649523575",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/hindustan-institute-of-aeronautics-ame-vadodara-1",
        "twitter": "https://twitter.com/hindustan-institute-of-aeronautics-ame-vadodara-1",
        "linkedin": "https://linkedin.com/school/hindustan-institute-of-aeronautics-ame-vadodara-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-ahmedabad-151",
    "name": "International School of Aviation & Airport Management, Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Airport Road, Civil Aerodrome, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Ahmedabad+Ahmedabad",
    "website": "https://international-school-of-aviation-and-airport-management-ahmedabad-1.gov.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-ahmedabad-1.gov.in/admissions",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2017,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Flight Dispatcher Certificate",
      "Aircraft Maintenance Engineering (AME - Avionics)",
      "BBA Airport Management",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Air Cargo",
      "Aircraft Engineering",
      "Helicopter Flying",
      "Flight Safety",
      "Airport Management",
      "Airline Operations",
      "Aviation Law",
      "Drone Technology",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-ahmedabad-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Hostel",
      "Transport",
      "Engine Laboratory",
      "Airport Training Facility",
      "Cabin Mock-up",
      "Central Library",
      "Maintenance Workshop",
      "Wi-Fi Campus",
      "Sports",
      "Avionics Laboratory",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "2 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "IndiGo Airlines",
        "Air India",
        "Alliance Air",
        "Pawan Hans Helicopters",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b915,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. A. S. Randhawa",
      "chiefFlightInstructor": "Capt. Rajesh Sharma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 26,
      "industryExperts": 12,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7733873390",
      "email": "admissions@international-school-of-aviation-and-airport-management-ahmedabad-1.org",
      "admissionOfficeContact": "+91 8718344211",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-ahmedabad-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-ahmedabad-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-ahmedabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-jaipur-152",
    "name": "International School of Aviation & Airport Management, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Airport Road, Civil Aerodrome, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Jaipur+Jaipur",
    "website": "https://international-school-of-aviation-and-airport-management-jaipur-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-jaipur-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1991,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Sc. Aviation",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Cabin Crew & Air Hostess Diploma",
      "Private Pilot Licence (PPL)",
      "Aviation Safety & Security Certificate"
    ],
    "specializations": [
      "Aviation Law",
      "Meteorology",
      "UAV Operations",
      "Avionics",
      "Aircraft Systems"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-jaipur-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Navigation Lab",
      "Airport Training Facility",
      "Digital Library",
      "Aircraft Hangar",
      "Medical Facility",
      "Maintenance Workshop",
      "Sports",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Qatar Airways",
        "Emirates",
        "Blue Dart Aviation",
        "HAL",
        "Alliance Air"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. Vikramaditya Rao",
      "chiefFlightInstructor": "Capt. S. K. Verma (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 42,
      "industryExperts": 10,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 9599806379",
      "email": "admissions@international-school-of-aviation-and-airport-management-jaipur-1.org",
      "admissionOfficeContact": "+91 9247386268",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-jaipur-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-jaipur-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-jaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "al-ameen-flying-club-and-aviation-academy-vadodara-153",
    "name": "Al-Ameen Flying Club & Aviation Academy, Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Airport Road, Civil Aerodrome, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Ameen+Flying+Club+&+Aviation+Academy,+Vadodara+Vadodara",
    "website": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in",
    "admissionPortalUrl": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1995,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Drone Technology & UAV Pilot",
      "Flight Dispatcher Certificate",
      "Cabin Crew & Air Hostess Diploma",
      "BBA Airport Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Commercial Pilot Licence (CPL)"
    ],
    "specializations": [
      "Helicopter Flying",
      "Drone Technology",
      "Aviation Law",
      "Aviation Finance",
      "Air Navigation"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://al-ameen-flying-club-and-aviation-academy-vadodara-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Sports",
      "Engine Laboratory",
      "Computer Labs",
      "Flight Simulators",
      "Wi-Fi Campus",
      "Transport",
      "Central Library"
    ],
    "flightTraining": {
      "flyingFleet": "13 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "80 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Dual Engine DA42 Rating Included",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b935.0 Lakhs - \u20b960.0 Lakhs / yr",
      "averagePackage": "\u20b98.5 Lakhs - \u20b918.0 Lakhs / yr",
      "topRecruiters": [
        "Airports Authority of India (AAI)",
        "IndiGo Airlines",
        "GMR Airports",
        "SpiceJet",
        "Vistara",
        "Blue Dart Aviation"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b942,000,000 - \u20b955,000,000 Total",
      "flyingTrainingCost": "\u20b918,000 - \u20b922,000 per flying hour",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. R. K. Farooqui",
      "chiefFlightInstructor": "Capt. Mohammed Aslam (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. M. N. Roy (Retd. IAF)",
      "facultyStrength": 40,
      "industryExperts": 16,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 7768341487",
      "email": "admissions@al-ameen-flying-club-and-aviation-academy-vadodara-1.org",
      "admissionOfficeContact": "+91 9641007706",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-ameen-flying-club-and-aviation-academy-vadodara-1",
        "twitter": "https://twitter.com/al-ameen-flying-club-and-aviation-academy-vadodara-1",
        "linkedin": "https://linkedin.com/school/al-ameen-flying-club-and-aviation-academy-vadodara-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "international-school-of-aviation-and-airport-management-behala-154",
    "name": "International School of Aviation & Airport Management, Behala",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Behala",
    "address": "Airport Road, Civil Aerodrome, Behala, Kolkata, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=International+School+of+Aviation+&+Airport+Management,+Behala+Behala",
    "website": "https://international-school-of-aviation-and-airport-management-behala-1.edu.in",
    "admissionPortalUrl": "https://international-school-of-aviation-and-airport-management-behala-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "Rajiv Gandhi National Aviation University (RGNAU)",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "DGCA Statutory Approval",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 2012,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Flight Dispatcher Certificate",
      "Aviation Safety & Security Certificate",
      "BBA Airport Management",
      "Cabin Crew & Air Hostess Diploma",
      "Airline Transport Pilot Licence (ATPL)"
    ],
    "specializations": [
      "UAV Operations",
      "Aircraft Systems",
      "Airport Management",
      "Ground Operations",
      "Meteorology",
      "International Aviation",
      "Air Navigation",
      "Helicopter Flying"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://international-school-of-aviation-and-airport-management-behala-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Medical Facility",
      "Maintenance Workshop",
      "Navigation Lab",
      "Airport Training Facility",
      "Avionics Laboratory",
      "Meteorology Lab"
    ],
    "flightTraining": {
      "flyingFleet": "4 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Pawan Hans Helicopters",
        "AirAsia India",
        "Akasa Air",
        "Vistara",
        "Etihad Airways"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b91,50,000 - \u20b93,20,000 / yr",
      "flyingTrainingCost": "N/A",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. A. K. Khan (Retd. IAF)",
      "facultyStrength": 43,
      "industryExperts": 10,
      "visitingPilotsCount": 7
    },
    "contact": {
      "phone": "+91 7760026928",
      "email": "admissions@international-school-of-aviation-and-airport-management-behala-1.org",
      "admissionOfficeContact": "+91 7578007003",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/international-school-of-aviation-and-airport-management-behala-1",
        "twitter": "https://twitter.com/international-school-of-aviation-and-airport-management-behala-1",
        "linkedin": "https://linkedin.com/school/international-school-of-aviation-and-airport-management-behala-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  },
  {
    "id": "school-of-aircraft-maintenance-engineering-same-madurai-155",
    "name": "School of Aircraft Maintenance Engineering (SAME), Madurai",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4ed168332?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Madurai",
    "city": "Madurai",
    "address": "Airport Road, Civil Aerodrome, Madurai, Madurai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=School+of+Aircraft+Maintenance+Engineering+(SAME),+Madurai+Madurai",
    "website": "https://school-of-aircraft-maintenance-engineering-same-madurai-1.edu.in",
    "admissionPortalUrl": "https://school-of-aircraft-maintenance-engineering-same-madurai-1.edu.in/apply",
    "counsellingPortalUrl": "https://dgca.gov.in/digilocker/counselling",
    "universityAffiliation": "State Aviation & Skill University",
    "dgcaApprovalStatus": "Approved FTO under CAR Section 7 Series F / CAR 147",
    "aicteApproval": "AICTE Approved Technical Campus",
    "ugcRecognition": "UGC Recognized Degree Programmes",
    "yearEstablished": 1992,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Aviation Logistics & Cargo Management",
      "Aircraft Maintenance Engineering (AME - Mechanical)",
      "Flight Dispatcher Certificate",
      "Airline Transport Pilot Licence (ATPL)",
      "Cabin Crew & Air Hostess Diploma"
    ],
    "specializations": [
      "Flight Safety",
      "International Aviation",
      "Commercial Flying",
      "UAV Operations"
    ],
    "admissionDetails": {
      "eligibility": "Passed 10+2 with Physics, Chemistry & Mathematics (PCM) with min 50% aggregate (for Flying/AME)",
      "medicalRequirements": "Class I Medical Clearance from DGCA Empanelled Medical Examination Centre (Class II for SPL/PPL)",
      "entranceExams": [
        "IGRUA Entrance Exam",
        "DGCA AME CET",
        "University Aviation Aptitude Test"
      ],
      "interviewProcess": "Personal Interview + English Proficiency Assessment + Simulator Aptitude Test",
      "flyingAptitudeTest": true,
      "englishProficiency": "ICAO English Language Proficiency (ELP) Level 4 or above required",
      "admissionLink": "https://school-of-aircraft-maintenance-engineering-same-madurai-1.edu.in/admission-2026",
      "counsellingLink": "https://dgca.gov.in"
    },
    "trainingFacilities": [
      "Aircraft Hangar",
      "Meteorology Lab",
      "Avionics Laboratory",
      "Wi-Fi Campus",
      "Navigation Lab",
      "Digital Library",
      "Central Library",
      "Flying Fleet"
    ],
    "flightTraining": {
      "flyingFleet": "3 Aircraft (Cessna 172R, Diamond DA42 Twin Engine, Piper Seneca)",
      "flyingHours": "200 Hours Mandatory DGCA Approved Flying Logbook",
      "simulatorHours": "20 Hours ALSIM AL250 / Redbird FMX Simulator",
      "nightFlying": "10 Hours Night Flying Training",
      "crossCountryFlying": "50 Hours Solo & Dual Cross-Country Flight Training",
      "instrumentFlying": "20 Hours Instrument Rating Training",
      "multiEngineTraining": "Multi-Engine Optional Rating",
      "jetOrientation": "Jet Orientation Course (JOC) & Multi-Crew Cooperation (MCC) Ready",
      "typeRatingGuidance": "Airbus A320 / Boeing 737 Type Rating Placement Assistance"
    },
    "placement": {
      "hasPlacementCell": true,
      "airlinePlacements": true,
      "airportPlacements": true,
      "groundStaffRecruitment": true,
      "cabinCrewRecruitment": true,
      "pilotPlacementSupport": true,
      "amePlacement": true,
      "highestPackage": "\u20b912.0 Lakhs - \u20b922.0 Lakhs / yr",
      "averagePackage": "\u20b94.5 Lakhs - \u20b98.0 Lakhs / yr",
      "topRecruiters": [
        "Air India",
        "Air India Express",
        "Etihad Airways",
        "SpiceJet",
        "Boeing India"
      ],
      "internationalPlacementSupport": true
    },
    "financialInfo": {
      "courseFees": "\u20b94,50,000 - \u20b97,50,000 / 3 yrs",
      "flyingTrainingCost": "N/A (Technical Maintenance)",
      "hostelFees": "\u20b960,000 - \u20b91,20,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "loanAssistance": true,
      "installmentOptions": "Flexible Flying Hour / Semester Installments Available"
    },
    "faculty": {
      "director": "Capt. V. K. Singh",
      "chiefFlightInstructor": "Capt. P. S. Gill (CFI / Flight Examiner)",
      "chiefGroundInstructor": "Wdr. S. K. Mehta (Retd. IAF)",
      "facultyStrength": 21,
      "industryExperts": 9,
      "visitingPilotsCount": 10
    },
    "contact": {
      "phone": "+91 8102024213",
      "email": "admissions@school-of-aircraft-maintenance-engineering-same-madurai-1.org",
      "admissionOfficeContact": "+91 8350280625",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/school-of-aircraft-maintenance-engineering-same-madurai-1",
        "twitter": "https://twitter.com/school-of-aircraft-maintenance-engineering-same-madurai-1",
        "linkedin": "https://linkedin.com/school/school-of-aircraft-maintenance-engineering-same-madurai-1"
      }
    },
    "lastVerifiedDate": "2026-05-22",
    "dgcaApproved": true,
    "ugcRecognized": true,
    "aicteApproved": true
  }
];
