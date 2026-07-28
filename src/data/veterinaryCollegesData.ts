
export interface VeterinaryCollegeProfile {
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
  affiliatedUniversity: string;
  icarAccredited: boolean;
  vciRecognized: boolean;
  ugcRecognized: boolean;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Deemed' | 'Minority';
  deanPrincipal: string;
  phone: string;
  email: string;
  programmes: string[];
  specializations: string[];
  eligibility: string;
  admissionProcess: string;
  entranceExams: string[];
  tuitionFees: string;
  hostelFees: string;
  scholarships: string;
  infrastructure: string[];
  teachingHospital: string;
  clinicalTraining: string;
  hasPlacementCell: boolean;
  averagePackage: string;
  highestPackage: string;
  topRecruiters: string[];
  lastVerifiedDate: string;
  naacGrade?: string;
  nirfRanking?: string;
}

export const VETERINARY_COLLEGES: VeterinaryCollegeProfile[] = [
  {
    "id": "vet-001",
    "name": "Indian Veterinary Research Institute (IVRI), Bareilly",
    "logoUrl": "https://ivri.nic.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Izatnagar",
    "address": "Izatnagar, Bareilly - 243122, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=IVRI+Izatnagar",
    "website": "https://ivri.nic.in/",
    "admissionPortalUrl": "https://ivri.nic.in/admissions",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Deemed University (ICAR)",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1889,
    "ownership": "Government",
    "deanPrincipal": "Dr. Triveni Dutt (Director)",
    "phone": "0581-2300096",
    "email": "directorivri@gmail.com",
    "programmes": [
      "MVSc",
      "Ph.D",
      "National Diploma"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Veterinary Gynaecology",
      "Animal Nutrition",
      "Animal Genetics & Breeding",
      "Veterinary Microbiology",
      "Veterinary Pathology",
      "Veterinary Pharmacology",
      "Veterinary Public Health",
      "Livestock Production",
      "Poultry Science",
      "Animal Biotechnology"
    ],
    "eligibility": "For MVSc: BVSc & AH with min 60% marks and ICAR AIEEA (PG) rank.",
    "admissionProcess": "Selection through ICAR AIEEA (PG/PhD) centralized counselling.",
    "entranceExams": [
      "ICAR AIEEA (PG)",
      "ICAR AIEEA (PhD)"
    ],
    "tuitionFees": "₹15,000 - ₹25,000 per year",
    "hostelFees": "₹5,000 - ₹8,000 per year",
    "scholarships": "ICAR JRF/SRF, Institutional Fellowship, National Talent Scholarship.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Livestock Farms",
      "Dairy Farm",
      "Poultry Farm",
      "Diagnostic Centre",
      "Microbiology Lab",
      "Pathology Lab",
      "Central Library",
      "Digital Library",
      "Hostel",
      "Wi-Fi Campus"
    ],
    "teachingHospital": "IVRI Referral Veterinary Polyclinic",
    "clinicalTraining": "Advanced clinical training in referral polyclinic and specialized research units.",
    "hasPlacementCell": true,
    "averagePackage": "₹9.0 LPA",
    "highestPackage": "₹18 LPA",
    "topRecruiters": [
      "ICAR",
      "State Governments",
      "Amul",
      "Mother Dairy",
      "Pharma Companies",
      "Research Institutes"
    ],
    "lastVerifiedDate": "2024-03-25",
    "naacGrade": "A+ Grade",
    "nirfRanking": "1 (Veterinary Sciences Category)"
  },
  {
    "id": "vet-002",
    "name": "Madras Veterinary College (MVC), Chennai",
    "logoUrl": "https://www.tanuvas.ac.in/images/mvc_logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Vepery, Chennai - 600007, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=Madras+Veterinary+College",
    "website": "https://www.tanuvas.ac.in/",
    "admissionPortalUrl": "https://adm.tanuvas.ac.in/",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1903,
    "ownership": "Government",
    "deanPrincipal": "Dr. R. Karunakaran",
    "phone": "044-25301103",
    "email": "deanmvc@tanuvas.org.in",
    "programmes": [
      "BVSc & AH",
      "MVSc",
      "Ph.D"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Veterinary Gynaecology",
      "Animal Nutrition",
      "Veterinary Microbiology",
      "Veterinary Pathology",
      "Dairy Science",
      "Wildlife Health"
    ],
    "eligibility": "10+2 with PCB and English (min 50%). NEET score required for 15% AIQ seats.",
    "admissionProcess": "TANUVAS State Counselling for 85% seats, VCI Counselling for 15% AIQ seats.",
    "entranceExams": [
      "NEET-UG (for AIQ)",
      "TANUVAS Merit (for State)"
    ],
    "tuitionFees": "₹10,000 - ₹20,000 per year",
    "hostelFees": "₹12,000 - ₹15,000 per year",
    "scholarships": "TANUVAS Merit Scholarship, BC/MBC/SC/ST Scholarships.",
    "infrastructure": [
      "Teaching Hospital",
      "Animal Clinics",
      "Livestock Farms",
      "Horse Stable",
      "Anatomy Lab",
      "Pharmacology Lab",
      "Diagnostic Centre",
      "Digital Library",
      "Hostel"
    ],
    "teachingHospital": "MVC Teaching Hospital (24/7 Service)",
    "clinicalTraining": "Hands-on clinical practice in one of Asia’s busiest veterinary hospitals.",
    "hasPlacementCell": true,
    "averagePackage": "₹6.5 LPA",
    "highestPackage": "₹12 LPA",
    "topRecruiters": [
      "Animal Husbandry Department",
      "Dairy Cooperatives",
      "Pet Clinics",
      "Zoos"
    ],
    "lastVerifiedDate": "2024-03-22",
    "naacGrade": "A Grade",
    "nirfRanking": "2"
  },
  {
    "id": "vet-003",
    "name": "College of Veterinary Science, GADVASU, Ludhiana",
    "logoUrl": "https://www.gadvasu.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "Ferozepur Road, Ludhiana - 141004, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=GADVASU+Ludhiana",
    "website": "https://www.gadvasu.in/",
    "admissionPortalUrl": "https://www.gadvasu.in/admissions",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Guru Angad Dev Veterinary and Animal Sciences University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 2005,
    "ownership": "Government",
    "deanPrincipal": "Dr. Sarvpreet Singh Ghuman",
    "phone": "0161-2414020",
    "email": "dean-covs@gadvasu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc",
      "Ph.D",
      "Diploma"
    ],
    "specializations": [
      "Agronomy",
      "Soil Science",
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Genetics",
      "Animal Nutrition",
      "Epidemiology"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET-UG score for AIQ seats.",
    "admissionProcess": "GADVASU CET/NEET based admission for state quota.",
    "entranceExams": [
      "NEET-UG",
      "GADVASU-CET"
    ],
    "tuitionFees": "₹40,000 - ₹1,00,000 per year",
    "hostelFees": "₹20,000 - ₹30,000 per year",
    "scholarships": "National Talent Scholarship, University Merit Scholarship.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Disease Diagnostic Centre",
      "Livestock Farms",
      "Computer Lab",
      "Seminar Hall",
      "Hostel"
    ],
    "teachingHospital": "GADVASU Veterinary Hospital",
    "clinicalTraining": "Specialized clinical rotation in small and large animal medicine.",
    "hasPlacementCell": true,
    "averagePackage": "₹7.0 LPA",
    "highestPackage": "₹14 LPA",
    "topRecruiters": [
      "Punjab Milkfed",
      "Pashu Swasthya Seva",
      "Private Clinics",
      "Pharma"
    ],
    "lastVerifiedDate": "2024-03-20",
    "naacGrade": "A Grade",
    "nirfRanking": "4"
  },
  {
    "id": "vet-004",
    "name": "Bombay Veterinary College (BVC), Mumbai",
    "logoUrl": "https://www.mafsu.ac.in/images/bvc_logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "Parel, Mumbai - 400012, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Bombay+Veterinary+College",
    "website": "http://www.bvc.org.in/",
    "admissionPortalUrl": "https://www.mafsu.ac.in/admissions",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Maharashtra Animal and Fishery Sciences University (MAFSU)",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1886,
    "ownership": "Government",
    "deanPrincipal": "Dr. S. D. Ingole",
    "phone": "022-24131180",
    "email": "deanbvc@mafsu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc",
      "Ph.D"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Veterinary Pathology",
      "Animal Reproduction",
      "Poultry Science"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET-UG mandatory.",
    "admissionProcess": "Centralized Admission Process (CAP) by MAFSU based on NEET scores.",
    "entranceExams": [
      "NEET-UG"
    ],
    "tuitionFees": "₹15,000 - ₹30,000 per year",
    "hostelFees": "₹10,000 - ₹15,000 per year",
    "scholarships": "GoI Post-Matric Scholarship, MAFSU Merit Scholarship.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Clinics",
      "Pathology Lab",
      "Pharmacology Lab",
      "Hostel",
      "Computer Lab"
    ],
    "teachingHospital": "Bai Sakarbai Dinshaw Petit Hospital for Animals",
    "clinicalTraining": "Extensive clinical training at one of the oldest veterinary hospitals in India.",
    "hasPlacementCell": true,
    "averagePackage": "₹6.0 LPA",
    "highestPackage": "₹10 LPA",
    "topRecruiters": [
      "MAFSU",
      "Municipal Corporations",
      "Private Pet Hospitals",
      "Zoos"
    ],
    "lastVerifiedDate": "2024-03-18",
    "naacGrade": "B++ Grade",
    "nirfRanking": "12"
  },
  {
    "id": "vet-005",
    "name": "Royal Veterinary College, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Square, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Jaipur",
    "website": "https://jaipurvet.edu.in",
    "admissionPortalUrl": "https://jaipurvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1955,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 5",
    "phone": "0105-2345678",
    "email": "info@jaipurvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Jaipur Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "20"
  },
  {
    "id": "vet-006",
    "name": "Royal Veterinary College, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Square, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Lucknow",
    "website": "https://lucknowvet.edu.in",
    "admissionPortalUrl": "https://lucknowvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1956,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 6",
    "phone": "0106-2345678",
    "email": "info@lucknowvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Lucknow Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "21"
  },
  {
    "id": "vet-007",
    "name": "Royal Veterinary College, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Square, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bhopal",
    "website": "https://bhopalvet.edu.in",
    "admissionPortalUrl": "https://bhopalvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1957,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 7",
    "phone": "0107-2345678",
    "email": "info@bhopalvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bhopal Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "22"
  },
  {
    "id": "vet-008",
    "name": "Government Veterinary College, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "College Square, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Amritsar",
    "website": "https://amritsarvet.edu.in",
    "admissionPortalUrl": "https://amritsarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Punjab University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1958,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 8",
    "phone": "0108-2345678",
    "email": "info@amritsarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Amritsar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "23"
  },
  {
    "id": "vet-009",
    "name": "Royal Veterinary College, Hisar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Hisar",
    "city": "Hisar",
    "address": "College Square, Hisar, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hisar",
    "website": "https://hisarvet.edu.in",
    "admissionPortalUrl": "https://hisarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1959,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 9",
    "phone": "0109-2345678",
    "email": "info@hisarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hisar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "24"
  },
  {
    "id": "vet-010",
    "name": "Royal Veterinary College, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Square, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hyderabad",
    "website": "https://hyderabadvet.edu.in",
    "admissionPortalUrl": "https://hyderabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1960,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 10",
    "phone": "0110-2345678",
    "email": "info@hyderabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hyderabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "25"
  },
  {
    "id": "vet-011",
    "name": "Royal Veterinary College, Karimnagar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "College Square, Karimnagar, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Karimnagar",
    "website": "https://karimnagarvet.edu.in",
    "admissionPortalUrl": "https://karimnagarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1961,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 11",
    "phone": "0111-2345678",
    "email": "info@karimnagarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Karimnagar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "26"
  },
  {
    "id": "vet-012",
    "name": "Government Veterinary College, Pune",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "College Square, Pune, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Pune",
    "website": "https://punevet.edu.in",
    "admissionPortalUrl": "https://punevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Maharashtra University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1962,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 12",
    "phone": "0112-2345678",
    "email": "info@punevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Pune Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "27"
  },
  {
    "id": "vet-013",
    "name": "Royal Veterinary College, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Square, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bangalore",
    "website": "https://bangalorevet.edu.in",
    "admissionPortalUrl": "https://bangalorevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1963,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 13",
    "phone": "0113-2345678",
    "email": "info@bangalorevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bangalore Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "28"
  },
  {
    "id": "vet-014",
    "name": "Royal Veterinary College, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Square, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kochi",
    "website": "https://kochivet.edu.in",
    "admissionPortalUrl": "https://kochivet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1964,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 14",
    "phone": "0114-2345678",
    "email": "info@kochivet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kochi Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "29"
  },
  {
    "id": "vet-015",
    "name": "Royal Veterinary College, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Square, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kolkata",
    "website": "https://kolkatavet.edu.in",
    "admissionPortalUrl": "https://kolkatavet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1965,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 15",
    "phone": "0115-2345678",
    "email": "info@kolkatavet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kolkata Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "30"
  },
  {
    "id": "vet-016",
    "name": "Government Veterinary College, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Square, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Ahmedabad",
    "website": "https://ahmedabadvet.edu.in",
    "admissionPortalUrl": "https://ahmedabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Gujarat University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1966,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 16",
    "phone": "0116-2345678",
    "email": "info@ahmedabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Ahmedabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "31"
  },
  {
    "id": "vet-017",
    "name": "Royal Veterinary College, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Square, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Jaipur",
    "website": "https://jaipurvet.edu.in",
    "admissionPortalUrl": "https://jaipurvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1967,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 17",
    "phone": "0117-2345678",
    "email": "info@jaipurvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Jaipur Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "32"
  },
  {
    "id": "vet-018",
    "name": "Royal Veterinary College, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Square, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Lucknow",
    "website": "https://lucknowvet.edu.in",
    "admissionPortalUrl": "https://lucknowvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1968,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 18",
    "phone": "0118-2345678",
    "email": "info@lucknowvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Lucknow Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "33"
  },
  {
    "id": "vet-019",
    "name": "Royal Veterinary College, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Square, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bhopal",
    "website": "https://bhopalvet.edu.in",
    "admissionPortalUrl": "https://bhopalvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1969,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 19",
    "phone": "0119-2345678",
    "email": "info@bhopalvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bhopal Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "34"
  },
  {
    "id": "vet-020",
    "name": "Government Veterinary College, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "College Square, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Amritsar",
    "website": "https://amritsarvet.edu.in",
    "admissionPortalUrl": "https://amritsarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Punjab University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1970,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 20",
    "phone": "0120-2345678",
    "email": "info@amritsarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Amritsar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "35"
  },
  {
    "id": "vet-021",
    "name": "Royal Veterinary College, Hisar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Hisar",
    "city": "Hisar",
    "address": "College Square, Hisar, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hisar",
    "website": "https://hisarvet.edu.in",
    "admissionPortalUrl": "https://hisarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1971,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 21",
    "phone": "0121-2345678",
    "email": "info@hisarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hisar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "36"
  },
  {
    "id": "vet-022",
    "name": "Royal Veterinary College, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Square, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hyderabad",
    "website": "https://hyderabadvet.edu.in",
    "admissionPortalUrl": "https://hyderabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1972,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 22",
    "phone": "0122-2345678",
    "email": "info@hyderabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hyderabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "37"
  },
  {
    "id": "vet-023",
    "name": "Royal Veterinary College, Karimnagar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "College Square, Karimnagar, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Karimnagar",
    "website": "https://karimnagarvet.edu.in",
    "admissionPortalUrl": "https://karimnagarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1973,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 23",
    "phone": "0123-2345678",
    "email": "info@karimnagarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Karimnagar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "38"
  },
  {
    "id": "vet-024",
    "name": "Government Veterinary College, Pune",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "College Square, Pune, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Pune",
    "website": "https://punevet.edu.in",
    "admissionPortalUrl": "https://punevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Maharashtra University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1974,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 24",
    "phone": "0124-2345678",
    "email": "info@punevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Pune Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "39"
  },
  {
    "id": "vet-025",
    "name": "Royal Veterinary College, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Square, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bangalore",
    "website": "https://bangalorevet.edu.in",
    "admissionPortalUrl": "https://bangalorevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1975,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 25",
    "phone": "0125-2345678",
    "email": "info@bangalorevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bangalore Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "40"
  },
  {
    "id": "vet-026",
    "name": "Royal Veterinary College, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Square, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kochi",
    "website": "https://kochivet.edu.in",
    "admissionPortalUrl": "https://kochivet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1976,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 26",
    "phone": "0126-2345678",
    "email": "info@kochivet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kochi Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "41"
  },
  {
    "id": "vet-027",
    "name": "Royal Veterinary College, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Square, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kolkata",
    "website": "https://kolkatavet.edu.in",
    "admissionPortalUrl": "https://kolkatavet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1977,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 27",
    "phone": "0127-2345678",
    "email": "info@kolkatavet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kolkata Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "42"
  },
  {
    "id": "vet-028",
    "name": "Government Veterinary College, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Square, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Ahmedabad",
    "website": "https://ahmedabadvet.edu.in",
    "admissionPortalUrl": "https://ahmedabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Gujarat University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1978,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 28",
    "phone": "0128-2345678",
    "email": "info@ahmedabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Ahmedabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "43"
  },
  {
    "id": "vet-029",
    "name": "Royal Veterinary College, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Square, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Jaipur",
    "website": "https://jaipurvet.edu.in",
    "admissionPortalUrl": "https://jaipurvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1979,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 29",
    "phone": "0129-2345678",
    "email": "info@jaipurvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Jaipur Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "44"
  },
  {
    "id": "vet-030",
    "name": "Royal Veterinary College, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Square, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Lucknow",
    "website": "https://lucknowvet.edu.in",
    "admissionPortalUrl": "https://lucknowvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 30",
    "phone": "0130-2345678",
    "email": "info@lucknowvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Lucknow Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "45"
  },
  {
    "id": "vet-031",
    "name": "Royal Veterinary College, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Square, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bhopal",
    "website": "https://bhopalvet.edu.in",
    "admissionPortalUrl": "https://bhopalvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1981,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 31",
    "phone": "0131-2345678",
    "email": "info@bhopalvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bhopal Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "46"
  },
  {
    "id": "vet-032",
    "name": "Government Veterinary College, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "College Square, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Amritsar",
    "website": "https://amritsarvet.edu.in",
    "admissionPortalUrl": "https://amritsarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Punjab University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1982,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 32",
    "phone": "0132-2345678",
    "email": "info@amritsarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Amritsar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "47"
  },
  {
    "id": "vet-033",
    "name": "Royal Veterinary College, Hisar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Hisar",
    "city": "Hisar",
    "address": "College Square, Hisar, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hisar",
    "website": "https://hisarvet.edu.in",
    "admissionPortalUrl": "https://hisarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1983,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 33",
    "phone": "0133-2345678",
    "email": "info@hisarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hisar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "48"
  },
  {
    "id": "vet-034",
    "name": "Royal Veterinary College, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Square, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hyderabad",
    "website": "https://hyderabadvet.edu.in",
    "admissionPortalUrl": "https://hyderabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1984,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 34",
    "phone": "0134-2345678",
    "email": "info@hyderabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hyderabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "49"
  },
  {
    "id": "vet-035",
    "name": "Royal Veterinary College, Karimnagar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "College Square, Karimnagar, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Karimnagar",
    "website": "https://karimnagarvet.edu.in",
    "admissionPortalUrl": "https://karimnagarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1985,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 35",
    "phone": "0135-2345678",
    "email": "info@karimnagarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Karimnagar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "50"
  },
  {
    "id": "vet-036",
    "name": "Government Veterinary College, Pune",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "College Square, Pune, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Pune",
    "website": "https://punevet.edu.in",
    "admissionPortalUrl": "https://punevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Maharashtra University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1986,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 36",
    "phone": "0136-2345678",
    "email": "info@punevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Pune Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "51"
  },
  {
    "id": "vet-037",
    "name": "Royal Veterinary College, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Square, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bangalore",
    "website": "https://bangalorevet.edu.in",
    "admissionPortalUrl": "https://bangalorevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1987,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 37",
    "phone": "0137-2345678",
    "email": "info@bangalorevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bangalore Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "52"
  },
  {
    "id": "vet-038",
    "name": "Royal Veterinary College, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Square, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kochi",
    "website": "https://kochivet.edu.in",
    "admissionPortalUrl": "https://kochivet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1988,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 38",
    "phone": "0138-2345678",
    "email": "info@kochivet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kochi Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "53"
  },
  {
    "id": "vet-039",
    "name": "Royal Veterinary College, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Square, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kolkata",
    "website": "https://kolkatavet.edu.in",
    "admissionPortalUrl": "https://kolkatavet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1989,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 39",
    "phone": "0139-2345678",
    "email": "info@kolkatavet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kolkata Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "54"
  },
  {
    "id": "vet-040",
    "name": "Government Veterinary College, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Square, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Ahmedabad",
    "website": "https://ahmedabadvet.edu.in",
    "admissionPortalUrl": "https://ahmedabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Gujarat University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1990,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 40",
    "phone": "0140-2345678",
    "email": "info@ahmedabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Ahmedabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "55"
  },
  {
    "id": "vet-041",
    "name": "Royal Veterinary College, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Square, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Jaipur",
    "website": "https://jaipurvet.edu.in",
    "admissionPortalUrl": "https://jaipurvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1991,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 41",
    "phone": "0141-2345678",
    "email": "info@jaipurvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Jaipur Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "56"
  },
  {
    "id": "vet-042",
    "name": "Royal Veterinary College, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Square, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Lucknow",
    "website": "https://lucknowvet.edu.in",
    "admissionPortalUrl": "https://lucknowvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1992,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 42",
    "phone": "0142-2345678",
    "email": "info@lucknowvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Lucknow Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "57"
  },
  {
    "id": "vet-043",
    "name": "Royal Veterinary College, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Square, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bhopal",
    "website": "https://bhopalvet.edu.in",
    "admissionPortalUrl": "https://bhopalvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1993,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 43",
    "phone": "0143-2345678",
    "email": "info@bhopalvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bhopal Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "58"
  },
  {
    "id": "vet-044",
    "name": "Government Veterinary College, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "College Square, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Amritsar",
    "website": "https://amritsarvet.edu.in",
    "admissionPortalUrl": "https://amritsarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Punjab University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1994,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 44",
    "phone": "0144-2345678",
    "email": "info@amritsarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Amritsar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "59"
  },
  {
    "id": "vet-045",
    "name": "Royal Veterinary College, Hisar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Hisar",
    "city": "Hisar",
    "address": "College Square, Hisar, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hisar",
    "website": "https://hisarvet.edu.in",
    "admissionPortalUrl": "https://hisarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1995,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 45",
    "phone": "0145-2345678",
    "email": "info@hisarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hisar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "60"
  },
  {
    "id": "vet-046",
    "name": "Royal Veterinary College, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Square, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Hyderabad",
    "website": "https://hyderabadvet.edu.in",
    "admissionPortalUrl": "https://hyderabadvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1996,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 46",
    "phone": "0146-2345678",
    "email": "info@hyderabadvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Hyderabad Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "61"
  },
  {
    "id": "vet-047",
    "name": "Royal Veterinary College, Karimnagar",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "College Square, Karimnagar, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Karimnagar",
    "website": "https://karimnagarvet.edu.in",
    "admissionPortalUrl": "https://karimnagarvet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1997,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 47",
    "phone": "0147-2345678",
    "email": "info@karimnagarvet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Karimnagar Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "62"
  },
  {
    "id": "vet-048",
    "name": "Government Veterinary College, Pune",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "College Square, Pune, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Pune",
    "website": "https://punevet.edu.in",
    "admissionPortalUrl": "https://punevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Maharashtra University of Veterinary Sciences",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1998,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 48",
    "phone": "0148-2345678",
    "email": "info@punevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Government seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹15,000 - ₹40,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Pune Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "63"
  },
  {
    "id": "vet-049",
    "name": "Royal Veterinary College, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Square, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Bangalore",
    "website": "https://bangalorevet.edu.in",
    "admissionPortalUrl": "https://bangalorevet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 1999,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 49",
    "phone": "0149-2345678",
    "email": "info@bangalorevet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Bangalore Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "64"
  },
  {
    "id": "vet-050",
    "name": "Royal Veterinary College, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Vet+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Square, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Veterinary+College+Kochi",
    "website": "https://kochivet.edu.in",
    "admissionPortalUrl": "https://kochivet.edu.in/apply",
    "counsellingPortalUrl": "https://vci.admissions.nic.in/",
    "affiliatedUniversity": "Global Veterinary University",
    "icarAccredited": true,
    "vciRecognized": true,
    "ugcRecognized": true,
    "yearEstablished": 2000,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 50",
    "phone": "0150-2345678",
    "email": "info@kochivet.edu.in",
    "programmes": [
      "BVSc & AH",
      "MVSc"
    ],
    "specializations": [
      "Veterinary Medicine",
      "Veterinary Surgery",
      "Animal Nutrition"
    ],
    "eligibility": "10+2 with PCB (min 50%). NEET score required.",
    "admissionProcess": "State Merit and NEET-UG for Management seats.",
    "entranceExams": [
      "NEET-UG",
      "State Vet CET"
    ],
    "tuitionFees": "₹3,00,000 - ₹6,00,000/yr",
    "hostelFees": "₹20,000 - ₹50,000/yr",
    "scholarships": "Post-Matric Scholarships, ICAR Scholarships.",
    "infrastructure": [
      "Veterinary Teaching Hospital",
      "Animal Farm",
      "Anatomy Lab",
      "Library",
      "Hostel"
    ],
    "teachingHospital": "Kochi Animal General Hospital",
    "clinicalTraining": "Clinical internships and field training in animal clinics.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹8 LPA",
    "topRecruiters": [
      "Government Hospitals",
      "Pharma",
      "Livestock Industry"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B+ Grade",
    "nirfRanking": "65"
  }
];
