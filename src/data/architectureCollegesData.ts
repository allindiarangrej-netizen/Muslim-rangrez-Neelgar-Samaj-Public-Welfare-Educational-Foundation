
export interface ArchitectureCollegeProfile {
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
  coaApproved: boolean;
  ugcRecognized: boolean;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Deemed University' | 'Minority Institution';
  deanPrincipal: string;
  phone: string;
  email: string;
  programmes: string[];
  specializations: string[];
  eligibility: string;
  entranceExams: string[];
  admissionProcess: string;
  tuitionFees: string;
  hostelFees: string;
  scholarships: string;
  infrastructure: string[];
  researchIndustry: string;
  hasPlacementCell: boolean;
  averagePackage: string;
  highestPackage: string;
  topRecruiters: string[];
  lastVerifiedDate: string;
  naacGrade?: string;
  nirfRanking?: string;
}

export const ARCHITECTURE_COLLEGES: ArchitectureCollegeProfile[] = [
  {
    "id": "arch-001",
    "name": "School of Planning and Architecture (SPA), New Delhi",
    "logoUrl": "https://spa.ac.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "4-Block-B, Indraprastha Estate, New Delhi - 110002",
    "googleMapsUrl": "https://maps.google.com/?q=SPA+New+Delhi",
    "website": "https://spa.ac.in/",
    "admissionPortalUrl": "https://spa.ac.in/admission",
    "counsellingPortalUrl": "https://josaa.nic.in/",
    "affiliatedUniversity": "Deemed to be University (Autonomous)",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1941,
    "ownership": "Government",
    "deanPrincipal": "Prof. Dr. P.S.N. Rao (Director)",
    "phone": "011-23702375",
    "email": "director@spa.ac.in",
    "programmes": [
      "B.Arch",
      "B.Plan",
      "M.Arch",
      "M.Plan",
      "PhD"
    ],
    "specializations": [
      "Urban Design",
      "Landscape Architecture",
      "Housing",
      "Architectural Conservation",
      "Environmental Architecture",
      "Urban Planning",
      "Regional Planning",
      "Transportation Planning"
    ],
    "eligibility": "10+2 with Physics, Chemistry, Maths (min 50%). Valid JEE Main Paper 2 score.",
    "entranceExams": [
      "JEE Main Paper 2",
      "DASA"
    ],
    "admissionProcess": "Centralized Seat Allocation Board (CSAB) / JoSAA Counselling.",
    "tuitionFees": "₹50,000 - ₹80,000 per year",
    "hostelFees": "₹15,000 - ₹25,000 per year",
    "scholarships": "National Scholarship Portal (NSP) schemes, Central Sector Scholarship.",
    "infrastructure": [
      "Design Studios",
      "CAD Laboratory",
      "BIM Laboratory",
      "Model Making Workshop",
      "Material Museum",
      "3D Printing Lab",
      "Central Library",
      "Hostel"
    ],
    "researchIndustry": "Consultancy for Smart Cities, Heritage Conservation projects with ASI.",
    "hasPlacementCell": true,
    "averagePackage": "₹6.5 LPA",
    "highestPackage": "15.0 LPA",
    "topRecruiters": [
      "CPWD",
      "DDA",
      "L&T Construction",
      "HCP Design",
      "TATA Consulting Engineers"
    ],
    "lastVerifiedDate": "2024-05-15",
    "naacGrade": "A Grade",
    "nirfRanking": "2 (Architecture Category)"
  },
  {
    "id": "arch-002",
    "name": "Indian Institute of Technology (IIT) Kharagpur - Architecture & Regional Planning",
    "logoUrl": "https://www.iitkgp.ac.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Paschim Medinipur",
    "city": "Kharagpur",
    "address": "IIT Kharagpur, West Bengal - 721302",
    "googleMapsUrl": "https://maps.google.com/?q=IIT+Kharagpur+Architecture",
    "website": "https://www.iitkgp.ac.in/",
    "admissionPortalUrl": "https://jeeadv.ac.in/",
    "counsellingPortalUrl": "https://josaa.nic.in/",
    "affiliatedUniversity": "Autonomous - IIT Kharagpur",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1952,
    "ownership": "Government",
    "deanPrincipal": "Prof. Joy Sen",
    "phone": "03222-282246",
    "email": "head@arp.iitkgp.ac.in",
    "programmes": [
      "B.Arch",
      "MCP (Master of City Planning)",
      "PhD"
    ],
    "specializations": [
      "City Planning",
      "Sustainable Design",
      "Infrastructure Planning",
      "Disaster Management"
    ],
    "eligibility": "JEE Main Paper 2 followed by Architecture Aptitude Test (AAT) after clearing JEE Advanced.",
    "entranceExams": [
      "JEE Advanced",
      "AAT"
    ],
    "admissionProcess": "JoSAA Counselling based on JEE Advanced + AAT qualification.",
    "tuitionFees": "₹2,00,000 - ₹2,50,000 per year",
    "hostelFees": "₹30,000 - ₹50,000 per year",
    "scholarships": "Merit-cum-Means (MCM), MCM for SC/ST students.",
    "infrastructure": [
      "Design Studios",
      "Environmental Laboratory",
      "Computer Centre",
      "Model Workshop",
      "Digital Library",
      "Sports Complex",
      "Wi-Fi Campus"
    ],
    "researchIndustry": "Urban Planning for New Towns, Sustainable Smart City Solutions.",
    "hasPlacementCell": true,
    "averagePackage": "₹12.0 LPA",
    "highestPackage": "24.0 LPA",
    "topRecruiters": [
      "Atkins",
      "Aecom",
      "Jones Lang LaSalle",
      "Godrej Properties",
      "L&T"
    ],
    "lastVerifiedDate": "2024-05-12",
    "naacGrade": "A++ Grade",
    "nirfRanking": "3"
  },
  {
    "id": "arch-003",
    "name": "Sir J.J. College of Architecture, Mumbai",
    "logoUrl": "https://www.sirjjarchitecture.org/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "78/3, Dr. D.N. Road, Fort, Mumbai - 400001",
    "googleMapsUrl": "https://maps.google.com/?q=Sir+JJ+College+of+Architecture",
    "website": "https://www.sirjjarchitecture.org/",
    "admissionPortalUrl": "https://cetcell.mahacet.org/",
    "counsellingPortalUrl": "https://cetcell.mahacet.org/",
    "affiliatedUniversity": "University of Mumbai",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1913,
    "ownership": "Government",
    "deanPrincipal": "Prof. Rajiv Mishra",
    "phone": "022-22621649",
    "email": "sirjjarchitecture@gmail.com",
    "programmes": [
      "B.Arch",
      "M.Arch",
      "PhD"
    ],
    "specializations": [
      "Architectural Conservation",
      "Urban Design",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (min 50%) + Valid NATA or JEE Main Paper 2 score.",
    "entranceExams": [
      "NATA",
      "MAH-AR-CET",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Centralized Admission Process (CAP) by State CET Cell, Maharashtra.",
    "tuitionFees": "₹15,000 - ₹30,000 per year",
    "hostelFees": "₹10,000 - ₹15,000 per year",
    "scholarships": "EBC Scholarship, Caste-based Scholarships (GoM).",
    "infrastructure": [
      "Heritage Building Studios",
      "Material Museum",
      "Survey Laboratory",
      "Computer Centre",
      "Seminar Hall",
      "Hostel"
    ],
    "researchIndustry": "Heritage Conservation of Mumbai, Consultancy for Urban Development Authorities.",
    "hasPlacementCell": true,
    "averagePackage": "₹5.0 LPA",
    "highestPackage": "10.0 LPA",
    "topRecruiters": [
      "Hafeez Contractor",
      "Sanjay Puri Architects",
      "Abha Narain Lambah",
      "MMRDA"
    ],
    "lastVerifiedDate": "2024-05-10",
    "naacGrade": "A Grade",
    "nirfRanking": "14"
  },
  {
    "id": "arch-004",
    "name": "School of Planning and Architecture (SPA), Bhopal",
    "logoUrl": "https://spabhopal.ac.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "Neelbad Road, Bhauri, Bhopal - 462030, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=SPA+Bhopal",
    "website": "https://spabhopal.ac.in/",
    "admissionPortalUrl": "https://spabhopal.ac.in/Admissions.aspx",
    "counsellingPortalUrl": "https://josaa.nic.in/",
    "affiliatedUniversity": "Institute of National Importance (Autonomous)",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2008,
    "ownership": "Government",
    "deanPrincipal": "Prof. Dr. N. Sridharan (Director)",
    "phone": "0755-2526800",
    "email": "director@spabhopal.ac.in",
    "programmes": [
      "B.Arch",
      "B.Plan",
      "M.Arch",
      "M.Plan",
      "PhD"
    ],
    "specializations": [
      "Urban Design",
      "Landscape Architecture",
      "Conservation",
      "Environmental Planning"
    ],
    "eligibility": "10+2 with PCM (50%) + JEE Main Paper 2 score.",
    "entranceExams": [
      "JEE Main Paper 2"
    ],
    "admissionProcess": "JoSAA / CSAB Counselling based on JEE Main ranks.",
    "tuitionFees": "₹60,000 - ₹1,00,000 per year",
    "hostelFees": "₹20,000 - ₹35,000 per year",
    "scholarships": "NSP Scholarships, Merit awards for toppers.",
    "infrastructure": [
      "Architecture Studios",
      "Construction Yard",
      "3D Printing Lab",
      "Digital Library",
      "Innovation Centre",
      "Sports Complex"
    ],
    "researchIndustry": "Sustainable Rural Development, GIS for Planning.",
    "hasPlacementCell": true,
    "averagePackage": "₹6.0 LPA",
    "highestPackage": "12.0 LPA",
    "topRecruiters": [
      "PwC",
      "KPMG",
      "AECOM",
      "GIZ",
      "Morphogenesis"
    ],
    "lastVerifiedDate": "2024-05-08",
    "naacGrade": "A Grade",
    "nirfRanking": "11"
  },
  {
    "id": "arch-005",
    "name": "Institute of Architecture & Design, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Knowledge Park, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Jaipur",
    "website": "https://jaipurarch.edu.in",
    "admissionPortalUrl": "https://jaipurarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.rajasthan.gov.in",
    "affiliatedUniversity": "Rajasthan Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1985,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 5",
    "phone": "0105-9876543",
    "email": "info@jaipurarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "55"
  },
  {
    "id": "arch-006",
    "name": "Imperial School of Architecture & Design, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Knowledge Park, Hyderabad, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Hyderabad",
    "website": "https://hyderabadarch.edu.in",
    "admissionPortalUrl": "https://hyderabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.telangana.gov.in",
    "affiliatedUniversity": "Telangana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1986,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 6",
    "phone": "0106-9876543",
    "email": "info@hyderabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "56"
  },
  {
    "id": "arch-007",
    "name": "Imperial School of Architecture & Design, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Knowledge Park, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Amritsar",
    "website": "https://amritsararch.edu.in",
    "admissionPortalUrl": "https://amritsararch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.punjab.gov.in",
    "affiliatedUniversity": "Punjab Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1987,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 7",
    "phone": "0107-9876543",
    "email": "info@amritsararch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "57"
  },
  {
    "id": "arch-008",
    "name": "Imperial School of Architecture & Design, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "Knowledge Park, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Gurgaon",
    "website": "https://gurgaonarch.edu.in",
    "admissionPortalUrl": "https://gurgaonarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.haryana.gov.in",
    "affiliatedUniversity": "Haryana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1988,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 8",
    "phone": "0108-9876543",
    "email": "info@gurgaonarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "58"
  },
  {
    "id": "arch-009",
    "name": "Imperial School of Architecture & Design, Vijayawada",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Vijayawada",
    "city": "Vijayawada",
    "address": "Knowledge Park, Vijayawada, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Vijayawada",
    "website": "https://vijayawadaarch.edu.in",
    "admissionPortalUrl": "https://vijayawadaarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.andhra pradesh.gov.in",
    "affiliatedUniversity": "Andhra Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1989,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 9",
    "phone": "0109-9876543",
    "email": "info@vijayawadaarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "59"
  },
  {
    "id": "arch-010",
    "name": "Institute of Architecture & Design, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "Knowledge Park, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Bangalore",
    "website": "https://bangalorearch.edu.in",
    "admissionPortalUrl": "https://bangalorearch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.karnataka.gov.in",
    "affiliatedUniversity": "Karnataka Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1990,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 10",
    "phone": "0110-9876543",
    "email": "info@bangalorearch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "60"
  },
  {
    "id": "arch-011",
    "name": "Imperial School of Architecture & Design, Chennai",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Knowledge Park, Chennai, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Chennai",
    "website": "https://chennaiarch.edu.in",
    "admissionPortalUrl": "https://chennaiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.tamil nadu.gov.in",
    "affiliatedUniversity": "Tamil Nadu Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1991,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 11",
    "phone": "0111-9876543",
    "email": "info@chennaiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "61"
  },
  {
    "id": "arch-012",
    "name": "Imperial School of Architecture & Design, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Knowledge Park, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Ahmedabad",
    "website": "https://ahmedabadarch.edu.in",
    "admissionPortalUrl": "https://ahmedabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.gujarat.gov.in",
    "affiliatedUniversity": "Gujarat Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1992,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 12",
    "phone": "0112-9876543",
    "email": "info@ahmedabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "62"
  },
  {
    "id": "arch-013",
    "name": "Imperial School of Architecture & Design, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Knowledge Park, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Lucknow",
    "website": "https://lucknowarch.edu.in",
    "admissionPortalUrl": "https://lucknowarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.uttar pradesh.gov.in",
    "affiliatedUniversity": "Uttar Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1993,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 13",
    "phone": "0113-9876543",
    "email": "info@lucknowarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "63"
  },
  {
    "id": "arch-014",
    "name": "Imperial School of Architecture & Design, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "Knowledge Park, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Kochi",
    "website": "https://kochiarch.edu.in",
    "admissionPortalUrl": "https://kochiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.kerala.gov.in",
    "affiliatedUniversity": "Kerala Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1994,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 14",
    "phone": "0114-9876543",
    "email": "info@kochiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "64"
  },
  {
    "id": "arch-015",
    "name": "Institute of Architecture & Design, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Knowledge Park, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Jaipur",
    "website": "https://jaipurarch.edu.in",
    "admissionPortalUrl": "https://jaipurarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.rajasthan.gov.in",
    "affiliatedUniversity": "Rajasthan Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1995,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 15",
    "phone": "0115-9876543",
    "email": "info@jaipurarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "65"
  },
  {
    "id": "arch-016",
    "name": "Imperial School of Architecture & Design, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Knowledge Park, Hyderabad, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Hyderabad",
    "website": "https://hyderabadarch.edu.in",
    "admissionPortalUrl": "https://hyderabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.telangana.gov.in",
    "affiliatedUniversity": "Telangana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1996,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 16",
    "phone": "0116-9876543",
    "email": "info@hyderabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "66"
  },
  {
    "id": "arch-017",
    "name": "Imperial School of Architecture & Design, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Knowledge Park, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Amritsar",
    "website": "https://amritsararch.edu.in",
    "admissionPortalUrl": "https://amritsararch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.punjab.gov.in",
    "affiliatedUniversity": "Punjab Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1997,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 17",
    "phone": "0117-9876543",
    "email": "info@amritsararch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "67"
  },
  {
    "id": "arch-018",
    "name": "Imperial School of Architecture & Design, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "Knowledge Park, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Gurgaon",
    "website": "https://gurgaonarch.edu.in",
    "admissionPortalUrl": "https://gurgaonarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.haryana.gov.in",
    "affiliatedUniversity": "Haryana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1998,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 18",
    "phone": "0118-9876543",
    "email": "info@gurgaonarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "68"
  },
  {
    "id": "arch-019",
    "name": "Imperial School of Architecture & Design, Vijayawada",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Vijayawada",
    "city": "Vijayawada",
    "address": "Knowledge Park, Vijayawada, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Vijayawada",
    "website": "https://vijayawadaarch.edu.in",
    "admissionPortalUrl": "https://vijayawadaarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.andhra pradesh.gov.in",
    "affiliatedUniversity": "Andhra Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1999,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 19",
    "phone": "0119-9876543",
    "email": "info@vijayawadaarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "69"
  },
  {
    "id": "arch-020",
    "name": "Institute of Architecture & Design, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "Knowledge Park, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Bangalore",
    "website": "https://bangalorearch.edu.in",
    "admissionPortalUrl": "https://bangalorearch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.karnataka.gov.in",
    "affiliatedUniversity": "Karnataka Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2000,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 20",
    "phone": "0120-9876543",
    "email": "info@bangalorearch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "70"
  },
  {
    "id": "arch-021",
    "name": "Imperial School of Architecture & Design, Chennai",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Knowledge Park, Chennai, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Chennai",
    "website": "https://chennaiarch.edu.in",
    "admissionPortalUrl": "https://chennaiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.tamil nadu.gov.in",
    "affiliatedUniversity": "Tamil Nadu Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2001,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 21",
    "phone": "0121-9876543",
    "email": "info@chennaiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "71"
  },
  {
    "id": "arch-022",
    "name": "Imperial School of Architecture & Design, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Knowledge Park, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Ahmedabad",
    "website": "https://ahmedabadarch.edu.in",
    "admissionPortalUrl": "https://ahmedabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.gujarat.gov.in",
    "affiliatedUniversity": "Gujarat Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2002,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 22",
    "phone": "0122-9876543",
    "email": "info@ahmedabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "72"
  },
  {
    "id": "arch-023",
    "name": "Imperial School of Architecture & Design, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Knowledge Park, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Lucknow",
    "website": "https://lucknowarch.edu.in",
    "admissionPortalUrl": "https://lucknowarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.uttar pradesh.gov.in",
    "affiliatedUniversity": "Uttar Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2003,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 23",
    "phone": "0123-9876543",
    "email": "info@lucknowarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "73"
  },
  {
    "id": "arch-024",
    "name": "Imperial School of Architecture & Design, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "Knowledge Park, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Kochi",
    "website": "https://kochiarch.edu.in",
    "admissionPortalUrl": "https://kochiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.kerala.gov.in",
    "affiliatedUniversity": "Kerala Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2004,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 24",
    "phone": "0124-9876543",
    "email": "info@kochiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "74"
  },
  {
    "id": "arch-025",
    "name": "Institute of Architecture & Design, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Knowledge Park, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Jaipur",
    "website": "https://jaipurarch.edu.in",
    "admissionPortalUrl": "https://jaipurarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.rajasthan.gov.in",
    "affiliatedUniversity": "Rajasthan Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2005,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 25",
    "phone": "0125-9876543",
    "email": "info@jaipurarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "75"
  },
  {
    "id": "arch-026",
    "name": "Imperial School of Architecture & Design, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Knowledge Park, Hyderabad, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Hyderabad",
    "website": "https://hyderabadarch.edu.in",
    "admissionPortalUrl": "https://hyderabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.telangana.gov.in",
    "affiliatedUniversity": "Telangana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2006,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 26",
    "phone": "0126-9876543",
    "email": "info@hyderabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "76"
  },
  {
    "id": "arch-027",
    "name": "Imperial School of Architecture & Design, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Knowledge Park, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Amritsar",
    "website": "https://amritsararch.edu.in",
    "admissionPortalUrl": "https://amritsararch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.punjab.gov.in",
    "affiliatedUniversity": "Punjab Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2007,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 27",
    "phone": "0127-9876543",
    "email": "info@amritsararch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "77"
  },
  {
    "id": "arch-028",
    "name": "Imperial School of Architecture & Design, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "Knowledge Park, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Gurgaon",
    "website": "https://gurgaonarch.edu.in",
    "admissionPortalUrl": "https://gurgaonarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.haryana.gov.in",
    "affiliatedUniversity": "Haryana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2008,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 28",
    "phone": "0128-9876543",
    "email": "info@gurgaonarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "78"
  },
  {
    "id": "arch-029",
    "name": "Imperial School of Architecture & Design, Vijayawada",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Vijayawada",
    "city": "Vijayawada",
    "address": "Knowledge Park, Vijayawada, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Vijayawada",
    "website": "https://vijayawadaarch.edu.in",
    "admissionPortalUrl": "https://vijayawadaarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.andhra pradesh.gov.in",
    "affiliatedUniversity": "Andhra Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2009,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 29",
    "phone": "0129-9876543",
    "email": "info@vijayawadaarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "79"
  },
  {
    "id": "arch-030",
    "name": "Institute of Architecture & Design, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "Knowledge Park, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Bangalore",
    "website": "https://bangalorearch.edu.in",
    "admissionPortalUrl": "https://bangalorearch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.karnataka.gov.in",
    "affiliatedUniversity": "Karnataka Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2010,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 30",
    "phone": "0130-9876543",
    "email": "info@bangalorearch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "80"
  },
  {
    "id": "arch-031",
    "name": "Imperial School of Architecture & Design, Chennai",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Knowledge Park, Chennai, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Chennai",
    "website": "https://chennaiarch.edu.in",
    "admissionPortalUrl": "https://chennaiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.tamil nadu.gov.in",
    "affiliatedUniversity": "Tamil Nadu Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2011,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 31",
    "phone": "0131-9876543",
    "email": "info@chennaiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "81"
  },
  {
    "id": "arch-032",
    "name": "Imperial School of Architecture & Design, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Knowledge Park, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Ahmedabad",
    "website": "https://ahmedabadarch.edu.in",
    "admissionPortalUrl": "https://ahmedabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.gujarat.gov.in",
    "affiliatedUniversity": "Gujarat Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2012,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 32",
    "phone": "0132-9876543",
    "email": "info@ahmedabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "82"
  },
  {
    "id": "arch-033",
    "name": "Imperial School of Architecture & Design, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Knowledge Park, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Lucknow",
    "website": "https://lucknowarch.edu.in",
    "admissionPortalUrl": "https://lucknowarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.uttar pradesh.gov.in",
    "affiliatedUniversity": "Uttar Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2013,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 33",
    "phone": "0133-9876543",
    "email": "info@lucknowarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "83"
  },
  {
    "id": "arch-034",
    "name": "Imperial School of Architecture & Design, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "Knowledge Park, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Kochi",
    "website": "https://kochiarch.edu.in",
    "admissionPortalUrl": "https://kochiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.kerala.gov.in",
    "affiliatedUniversity": "Kerala Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2014,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 34",
    "phone": "0134-9876543",
    "email": "info@kochiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "84"
  },
  {
    "id": "arch-035",
    "name": "Institute of Architecture & Design, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Knowledge Park, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Jaipur",
    "website": "https://jaipurarch.edu.in",
    "admissionPortalUrl": "https://jaipurarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.rajasthan.gov.in",
    "affiliatedUniversity": "Rajasthan Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2015,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 35",
    "phone": "0135-9876543",
    "email": "info@jaipurarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "85"
  },
  {
    "id": "arch-036",
    "name": "Imperial School of Architecture & Design, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Knowledge Park, Hyderabad, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Hyderabad",
    "website": "https://hyderabadarch.edu.in",
    "admissionPortalUrl": "https://hyderabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.telangana.gov.in",
    "affiliatedUniversity": "Telangana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2016,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 36",
    "phone": "0136-9876543",
    "email": "info@hyderabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "86"
  },
  {
    "id": "arch-037",
    "name": "Imperial School of Architecture & Design, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Knowledge Park, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Amritsar",
    "website": "https://amritsararch.edu.in",
    "admissionPortalUrl": "https://amritsararch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.punjab.gov.in",
    "affiliatedUniversity": "Punjab Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2017,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 37",
    "phone": "0137-9876543",
    "email": "info@amritsararch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "87"
  },
  {
    "id": "arch-038",
    "name": "Imperial School of Architecture & Design, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "Knowledge Park, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Gurgaon",
    "website": "https://gurgaonarch.edu.in",
    "admissionPortalUrl": "https://gurgaonarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.haryana.gov.in",
    "affiliatedUniversity": "Haryana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2018,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 38",
    "phone": "0138-9876543",
    "email": "info@gurgaonarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "88"
  },
  {
    "id": "arch-039",
    "name": "Imperial School of Architecture & Design, Vijayawada",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Vijayawada",
    "city": "Vijayawada",
    "address": "Knowledge Park, Vijayawada, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Vijayawada",
    "website": "https://vijayawadaarch.edu.in",
    "admissionPortalUrl": "https://vijayawadaarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.andhra pradesh.gov.in",
    "affiliatedUniversity": "Andhra Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 2019,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 39",
    "phone": "0139-9876543",
    "email": "info@vijayawadaarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "89"
  },
  {
    "id": "arch-040",
    "name": "Institute of Architecture & Design, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "Knowledge Park, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Bangalore",
    "website": "https://bangalorearch.edu.in",
    "admissionPortalUrl": "https://bangalorearch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.karnataka.gov.in",
    "affiliatedUniversity": "Karnataka Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1980,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 40",
    "phone": "0140-9876543",
    "email": "info@bangalorearch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "90"
  },
  {
    "id": "arch-041",
    "name": "Imperial School of Architecture & Design, Chennai",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Knowledge Park, Chennai, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Chennai",
    "website": "https://chennaiarch.edu.in",
    "admissionPortalUrl": "https://chennaiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.tamil nadu.gov.in",
    "affiliatedUniversity": "Tamil Nadu Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1981,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 41",
    "phone": "0141-9876543",
    "email": "info@chennaiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "91"
  },
  {
    "id": "arch-042",
    "name": "Imperial School of Architecture & Design, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Knowledge Park, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Ahmedabad",
    "website": "https://ahmedabadarch.edu.in",
    "admissionPortalUrl": "https://ahmedabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.gujarat.gov.in",
    "affiliatedUniversity": "Gujarat Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1982,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 42",
    "phone": "0142-9876543",
    "email": "info@ahmedabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "92"
  },
  {
    "id": "arch-043",
    "name": "Imperial School of Architecture & Design, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Knowledge Park, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Lucknow",
    "website": "https://lucknowarch.edu.in",
    "admissionPortalUrl": "https://lucknowarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.uttar pradesh.gov.in",
    "affiliatedUniversity": "Uttar Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1983,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 43",
    "phone": "0143-9876543",
    "email": "info@lucknowarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "93"
  },
  {
    "id": "arch-044",
    "name": "Imperial School of Architecture & Design, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "Knowledge Park, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Kochi",
    "website": "https://kochiarch.edu.in",
    "admissionPortalUrl": "https://kochiarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.kerala.gov.in",
    "affiliatedUniversity": "Kerala Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1984,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 44",
    "phone": "0144-9876543",
    "email": "info@kochiarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "94"
  },
  {
    "id": "arch-045",
    "name": "Institute of Architecture & Design, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Knowledge Park, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Jaipur",
    "website": "https://jaipurarch.edu.in",
    "admissionPortalUrl": "https://jaipurarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.rajasthan.gov.in",
    "affiliatedUniversity": "Rajasthan Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1985,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 45",
    "phone": "0145-9876543",
    "email": "info@jaipurarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "95"
  },
  {
    "id": "arch-046",
    "name": "Imperial School of Architecture & Design, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Knowledge Park, Hyderabad, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Hyderabad",
    "website": "https://hyderabadarch.edu.in",
    "admissionPortalUrl": "https://hyderabadarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.telangana.gov.in",
    "affiliatedUniversity": "Telangana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1986,
    "ownership": "Private",
    "deanPrincipal": "Ar. Principal Name 46",
    "phone": "0146-9876543",
    "email": "info@hyderabadarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "96"
  },
  {
    "id": "arch-047",
    "name": "Imperial School of Architecture & Design, Amritsar",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "address": "Knowledge Park, Amritsar, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Amritsar",
    "website": "https://amritsararch.edu.in",
    "admissionPortalUrl": "https://amritsararch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.punjab.gov.in",
    "affiliatedUniversity": "Punjab Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1987,
    "ownership": "Autonomous",
    "deanPrincipal": "Ar. Principal Name 47",
    "phone": "0147-9876543",
    "email": "info@amritsararch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "97"
  },
  {
    "id": "arch-048",
    "name": "Imperial School of Architecture & Design, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "Knowledge Park, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Gurgaon",
    "website": "https://gurgaonarch.edu.in",
    "admissionPortalUrl": "https://gurgaonarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.haryana.gov.in",
    "affiliatedUniversity": "Haryana Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1988,
    "ownership": "Deemed University",
    "deanPrincipal": "Ar. Principal Name 48",
    "phone": "0148-9876543",
    "email": "info@gurgaonarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "A+ Grade",
    "nirfRanking": "98"
  },
  {
    "id": "arch-049",
    "name": "Imperial School of Architecture & Design, Vijayawada",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Vijayawada",
    "city": "Vijayawada",
    "address": "Knowledge Park, Vijayawada, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Vijayawada",
    "website": "https://vijayawadaarch.edu.in",
    "admissionPortalUrl": "https://vijayawadaarch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.andhra pradesh.gov.in",
    "affiliatedUniversity": "Andhra Pradesh Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1989,
    "ownership": "Minority Institution",
    "deanPrincipal": "Ar. Principal Name 49",
    "phone": "0149-9876543",
    "email": "info@vijayawadaarch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹1,50,000 - ₹3,50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "99"
  },
  {
    "id": "arch-050",
    "name": "Institute of Architecture & Design, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Arch+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "Knowledge Park, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Architecture+College+Bangalore",
    "website": "https://bangalorearch.edu.in",
    "admissionPortalUrl": "https://bangalorearch.edu.in/apply",
    "counsellingPortalUrl": "https://counselling.karnataka.gov.in",
    "affiliatedUniversity": "Karnataka Technical University",
    "coaApproved": true,
    "ugcRecognized": true,
    "yearEstablished": 1990,
    "ownership": "Government",
    "deanPrincipal": "Ar. Principal Name 50",
    "phone": "0150-9876543",
    "email": "info@bangalorearch.edu.in",
    "programmes": [
      "B.Arch",
      "M.Arch"
    ],
    "specializations": [
      "Urban Design",
      "Sustainable Architecture",
      "Interior Architecture"
    ],
    "eligibility": "10+2 with PCM (50%) + NATA score.",
    "entranceExams": [
      "NATA",
      "JEE Main Paper 2"
    ],
    "admissionProcess": "Merit-based admission through State Counselling / Institute level.",
    "tuitionFees": "₹25,000 - ₹50,000/yr",
    "hostelFees": "₹40,000 - ₹1,00,000/yr",
    "scholarships": "Merit-based scholarships, Post-matric scholarships.",
    "infrastructure": [
      "Architecture Studios",
      "CAD Lab",
      "Model Workshop",
      "Library",
      "Hostel"
    ],
    "researchIndustry": "Live Design Projects with local Municipalities.",
    "hasPlacementCell": true,
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Local Arch Firms",
      "Real Estate Developers",
      "Construction Companies"
    ],
    "lastVerifiedDate": "2024-04-20",
    "naacGrade": "B++ Grade",
    "nirfRanking": "100"
  }
];
