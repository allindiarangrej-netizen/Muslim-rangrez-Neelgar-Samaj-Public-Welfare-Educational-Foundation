
export interface NursingCollegeProfile {
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
  affiliatedUniversity: string;
  incApproved: boolean;
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

export const NURSING_COLLEGES: NursingCollegeProfile[] = [
  {
    "id": "nurs-001",
    "name": "College of Nursing, AIIMS New Delhi",
    "logoUrl": "https://www.aiims.edu/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Ansari Nagar, New Delhi - 110029",
    "googleMapsUrl": "https://maps.google.com/?q=AIIMS+New+Delhi",
    "website": "https://www.aiims.edu/",
    "admissionPortalUrl": "https://aiimsexams.ac.in/",
    "affiliatedUniversity": "AIIMS (Statutory Body)",
    "incApproved": true,
    "yearEstablished": 1956,
    "ownership": "Government",
    "deanPrincipal": "Dr. Latha Venkatesan",
    "phone": "011-26588500",
    "email": "dean@aiims.edu",
    "programmes": [
      "B.Sc (Hons.) Nursing",
      "M.Sc Nursing",
      "Ph.D Nursing",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Pediatric Nursing",
      "Obstetrics and Gynecological Nursing",
      "Psychiatric Nursing",
      "Community Health Nursing"
    ],
    "eligibility": "10+2 with Physics, Chemistry, Biology and English (min 55%). Only female candidates for B.Sc (Hons).",
    "admissionProcess": "Selection through AIIMS Nursing Entrance Exam (Objective Type).",
    "entranceExams": [
      "AIIMS Nursing Entrance"
    ],
    "tuitionFees": "₹1,500 - ₹3,000 per year (Subsidized)",
    "hostelFees": "₹2,000 - ₹5,000 per year",
    "scholarships": "National Merit Scholarship, AIIMS Stipend for interns.",
    "infrastructure": [
      "Nursing Skill Lab",
      "Community Health Lab",
      "Nutrition Lab",
      "Attached AIIMS Hospital",
      "Digital Library"
    ],
    "teachingHospital": "AIIMS Hospital (Main + Centers)",
    "clinicalTraining": "Comprehensive clinical exposure at AIIMS multi-specialty centers and rural/urban health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹8.5 LPA",
    "highestPackage": "₹15 LPA",
    "topRecruiters": [
      "AIIMS",
      "Max Healthcare",
      "Apollo Hospitals",
      "NHS UK",
      "Hamad Medical Qatar"
    ],
    "lastVerifiedDate": "2024-03-20",
    "naacGrade": "A++ Grade",
    "nirfRanking": "1"
  },
  {
    "id": "nurs-002",
    "name": "College of Nursing, CMC Vellore",
    "logoUrl": "https://www.cmcvellore.ac.in/images/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
    ],
    "state": "Tamil Nadu",
    "district": "Vellore",
    "city": "Vellore",
    "address": "Ida Scudder Road, Vellore - 632004, Tamil Nadu",
    "googleMapsUrl": "https://maps.google.com/?q=CMC+Vellore",
    "website": "https://www.cmcvellore.ac.in/",
    "admissionPortalUrl": "https://admissions.cmcvellore.ac.in/",
    "affiliatedUniversity": "The Tamil Nadu Dr. M.G.R. Medical University",
    "incApproved": true,
    "yearEstablished": 1946,
    "ownership": "Private",
    "deanPrincipal": "Dr. Vathsala Sadan",
    "phone": "0416-2282233",
    "email": "condean@cmcvellore.ac.in",
    "programmes": [
      "B.Sc Nursing",
      "M.Sc Nursing",
      "Ph.D Nursing",
      "Diploma in Nursing (GNM)",
      "Post Basic B.Sc Nursing",
      "Fellowship in Nursing"
    ],
    "specializations": [
      "Critical Care Nursing",
      "Oncology Nursing",
      "Neonatal Nursing",
      "Operating Room Nursing"
    ],
    "eligibility": "10+2 with PCB and English (min 45%). Admissions based on CMC Entrance and Interview.",
    "admissionProcess": "Computer Based Test followed by special tests and interviews for Christian minority and general candidates.",
    "entranceExams": [
      "CMC Vellore Nursing Entrance"
    ],
    "tuitionFees": "₹25,000 - ₹50,000 per year",
    "hostelFees": "₹12,000 - ₹18,000 per year",
    "scholarships": "Institutional Need-based scholarships, Donor scholarships.",
    "infrastructure": [
      "Simulated Lab",
      "Advanced Anatomy Lab",
      "OBG Lab",
      "CMC Main Hospital",
      "Psychiatric Unit"
    ],
    "teachingHospital": "Christian Medical College & Hospital",
    "clinicalTraining": "World-class clinical training at India’s premier tertiary care hospital.",
    "hasPlacementCell": true,
    "averagePackage": "₹6.0 LPA",
    "highestPackage": "₹12 LPA",
    "topRecruiters": [
      "CMC Vellore",
      "Apollo Hospitals",
      "Fortis Healthcare",
      "International Agencies"
    ],
    "lastVerifiedDate": "2024-03-18",
    "naacGrade": "A Grade",
    "nirfRanking": "3"
  },
  {
    "id": "nurs-003",
    "name": "National Institute of Nursing Education (NINE), PGIMER Chandigarh",
    "logoUrl": "https://pgimer.edu.in/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Chandigarh",
    "district": "Chandigarh",
    "city": "Chandigarh",
    "address": "Sector-12, Chandigarh - 160012",
    "googleMapsUrl": "https://maps.google.com/?q=PGIMER+Chandigarh",
    "website": "https://pgimer.edu.in/",
    "admissionPortalUrl": "https://pgimer.edu.in/nursing-admissions",
    "affiliatedUniversity": "PGIMER (Statutory Body)",
    "incApproved": true,
    "yearEstablished": 1964,
    "ownership": "Government",
    "deanPrincipal": "Dr. Karobi Das",
    "phone": "0172-2755257",
    "email": "nine@pgimer.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "M.Sc Nursing",
      "Ph.D Nursing",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Child Health Nursing",
      "Mental Health Nursing"
    ],
    "eligibility": "10+2 with PCB (min 50%). Admissions through All India Computer Based Test.",
    "admissionProcess": "Computer Based Test conducted by PGIMER.",
    "entranceExams": [
      "PGIMER Nursing Entrance"
    ],
    "tuitionFees": "₹2,000 - ₹4,000 per year",
    "hostelFees": "₹3,000 - ₹6,000 per year",
    "scholarships": "PGIMER Merit Scholarships, SC/ST stipends.",
    "infrastructure": [
      "State-of-the-art Simulation Lab",
      "Computer Lab",
      "Tele-nursing Unit",
      "PGIMER Hospital"
    ],
    "teachingHospital": "Nehru Hospital (PGIMER)",
    "clinicalTraining": "Advanced specialty training in neurology, cardiology, and emergency nursing at PGIMER.",
    "hasPlacementCell": true,
    "averagePackage": "₹7.5 LPA",
    "highestPackage": "₹14 LPA",
    "topRecruiters": [
      "PGIMER",
      "Medanta",
      "Sir Ganga Ram Hospital",
      "Global Hospitals"
    ],
    "lastVerifiedDate": "2024-03-15",
    "naacGrade": "A++ Grade",
    "nirfRanking": "2"
  },
  {
    "id": "nurs-004",
    "name": "RAK College of Nursing, New Delhi",
    "logoUrl": "https://rakcon.com/logo.png",
    "coverImageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Lajpat Nagar IV, New Delhi - 110024",
    "googleMapsUrl": "https://maps.google.com/?q=RAK+College+of+Nursing",
    "website": "https://rakcon.com/",
    "admissionPortalUrl": "https://du.ac.in/",
    "affiliatedUniversity": "University of Delhi",
    "incApproved": true,
    "yearEstablished": 1946,
    "ownership": "Government",
    "deanPrincipal": "Dr. Harmeet Kaur",
    "phone": "011-26436668",
    "email": "rakcon@hotmail.com",
    "programmes": [
      "B.Sc (Hons.) Nursing",
      "M.Sc Nursing",
      "Ph.D Nursing"
    ],
    "specializations": [
      "Community Health Nursing",
      "Pediatric Nursing",
      "Obstetrics Nursing"
    ],
    "eligibility": "10+2 with PCB (min 50%). Admissions through NEET/CUET as per DU norms.",
    "admissionProcess": "Centralized counselling by Delhi University.",
    "entranceExams": [
      "NEET-UG",
      "CUET"
    ],
    "tuitionFees": "₹5,000 - ₹10,000 per year",
    "hostelFees": "₹15,000 - ₹20,000 per year",
    "scholarships": "National Scholarship Portal, DU Financial Aid.",
    "infrastructure": [
      "Model Nursing Lab",
      "Science Lab",
      "Nutrition Lab",
      "Library"
    ],
    "teachingHospital": "Safdarjung Hospital, LHMC, and others.",
    "clinicalTraining": "Extensive exposure across major Delhi Government and Central hospitals.",
    "hasPlacementCell": true,
    "averagePackage": "₹5.5 LPA",
    "highestPackage": "₹9 LPA",
    "topRecruiters": [
      "Safdarjung Hospital",
      "RML Hospital",
      "Max Healthcare",
      "Fortis"
    ],
    "lastVerifiedDate": "2024-03-10",
    "naacGrade": "A Grade",
    "nirfRanking": "10"
  },
  {
    "id": "nurs-005",
    "name": "St. Mary's College of Nursing, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Road, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Jaipur",
    "website": "https://jaipurnursing.edu.in",
    "admissionPortalUrl": "https://jaipurnursing.edu.in/apply",
    "affiliatedUniversity": "Rajasthan University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1985,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 5",
    "phone": "0105-2345678",
    "email": "info@jaipurnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Jaipur General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "25"
  },
  {
    "id": "nurs-006",
    "name": "St. Mary's College of Nursing, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Road, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Lucknow",
    "website": "https://lucknownursing.edu.in",
    "admissionPortalUrl": "https://lucknownursing.edu.in/apply",
    "affiliatedUniversity": "Uttar Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1986,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 6",
    "phone": "0106-2345678",
    "email": "info@lucknownursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Lucknow General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "26"
  },
  {
    "id": "nurs-007",
    "name": "St. Mary's College of Nursing, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Road, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bhopal",
    "website": "https://bhopalnursing.edu.in",
    "admissionPortalUrl": "https://bhopalnursing.edu.in/apply",
    "affiliatedUniversity": "Madhya Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1987,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 7",
    "phone": "0107-2345678",
    "email": "info@bhopalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bhopal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "27"
  },
  {
    "id": "nurs-008",
    "name": "Government College of Nursing, Ludhiana",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "College Road, Ludhiana, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ludhiana",
    "website": "https://ludhiananursing.edu.in",
    "admissionPortalUrl": "https://ludhiananursing.edu.in/apply",
    "affiliatedUniversity": "Punjab University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1988,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 8",
    "phone": "0108-2345678",
    "email": "info@ludhiananursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ludhiana General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "28"
  },
  {
    "id": "nurs-009",
    "name": "St. Mary's College of Nursing, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "College Road, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Gurgaon",
    "website": "https://gurgaonnursing.edu.in",
    "admissionPortalUrl": "https://gurgaonnursing.edu.in/apply",
    "affiliatedUniversity": "Haryana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1989,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 9",
    "phone": "0109-2345678",
    "email": "info@gurgaonnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Gurgaon General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "29"
  },
  {
    "id": "nurs-010",
    "name": "St. Mary's College of Nursing, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Road, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Hyderabad",
    "website": "https://hyderabadnursing.edu.in",
    "admissionPortalUrl": "https://hyderabadnursing.edu.in/apply",
    "affiliatedUniversity": "Andhra Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1990,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 10",
    "phone": "0110-2345678",
    "email": "info@hyderabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Hyderabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "30"
  },
  {
    "id": "nurs-011",
    "name": "St. Mary's College of Nursing, Warangal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "College Road, Warangal, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Warangal",
    "website": "https://warangalnursing.edu.in",
    "admissionPortalUrl": "https://warangalnursing.edu.in/apply",
    "affiliatedUniversity": "Telangana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1991,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 11",
    "phone": "0111-2345678",
    "email": "info@warangalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Warangal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "31"
  },
  {
    "id": "nurs-012",
    "name": "Government College of Nursing, Mumbai",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "College Road, Mumbai, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Mumbai",
    "website": "https://mumbainursing.edu.in",
    "admissionPortalUrl": "https://mumbainursing.edu.in/apply",
    "affiliatedUniversity": "Maharashtra University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1992,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 12",
    "phone": "0112-2345678",
    "email": "info@mumbainursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Mumbai General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "32"
  },
  {
    "id": "nurs-013",
    "name": "St. Mary's College of Nursing, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Road, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bangalore",
    "website": "https://bangalorenursing.edu.in",
    "admissionPortalUrl": "https://bangalorenursing.edu.in/apply",
    "affiliatedUniversity": "Karnataka University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1993,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 13",
    "phone": "0113-2345678",
    "email": "info@bangalorenursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bangalore General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "33"
  },
  {
    "id": "nurs-014",
    "name": "St. Mary's College of Nursing, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Road, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kochi",
    "website": "https://kochinursing.edu.in",
    "admissionPortalUrl": "https://kochinursing.edu.in/apply",
    "affiliatedUniversity": "Kerala University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1994,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 14",
    "phone": "0114-2345678",
    "email": "info@kochinursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kochi General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "34"
  },
  {
    "id": "nurs-015",
    "name": "St. Mary's College of Nursing, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Road, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kolkata",
    "website": "https://kolkatanursing.edu.in",
    "admissionPortalUrl": "https://kolkatanursing.edu.in/apply",
    "affiliatedUniversity": "West Bengal University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1995,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 15",
    "phone": "0115-2345678",
    "email": "info@kolkatanursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kolkata General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "35"
  },
  {
    "id": "nurs-016",
    "name": "Government College of Nursing, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Road, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ahmedabad",
    "website": "https://ahmedabadnursing.edu.in",
    "admissionPortalUrl": "https://ahmedabadnursing.edu.in/apply",
    "affiliatedUniversity": "Gujarat University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1996,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 16",
    "phone": "0116-2345678",
    "email": "info@ahmedabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ahmedabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "36"
  },
  {
    "id": "nurs-017",
    "name": "St. Mary's College of Nursing, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Road, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Jaipur",
    "website": "https://jaipurnursing.edu.in",
    "admissionPortalUrl": "https://jaipurnursing.edu.in/apply",
    "affiliatedUniversity": "Rajasthan University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1997,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 17",
    "phone": "0117-2345678",
    "email": "info@jaipurnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Jaipur General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "37"
  },
  {
    "id": "nurs-018",
    "name": "St. Mary's College of Nursing, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Road, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Lucknow",
    "website": "https://lucknownursing.edu.in",
    "admissionPortalUrl": "https://lucknownursing.edu.in/apply",
    "affiliatedUniversity": "Uttar Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1998,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 18",
    "phone": "0118-2345678",
    "email": "info@lucknownursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Lucknow General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "38"
  },
  {
    "id": "nurs-019",
    "name": "St. Mary's College of Nursing, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Road, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bhopal",
    "website": "https://bhopalnursing.edu.in",
    "admissionPortalUrl": "https://bhopalnursing.edu.in/apply",
    "affiliatedUniversity": "Madhya Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1999,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 19",
    "phone": "0119-2345678",
    "email": "info@bhopalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bhopal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "39"
  },
  {
    "id": "nurs-020",
    "name": "Government College of Nursing, Ludhiana",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "College Road, Ludhiana, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ludhiana",
    "website": "https://ludhiananursing.edu.in",
    "admissionPortalUrl": "https://ludhiananursing.edu.in/apply",
    "affiliatedUniversity": "Punjab University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2000,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 20",
    "phone": "0120-2345678",
    "email": "info@ludhiananursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ludhiana General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "40"
  },
  {
    "id": "nurs-021",
    "name": "St. Mary's College of Nursing, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "College Road, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Gurgaon",
    "website": "https://gurgaonnursing.edu.in",
    "admissionPortalUrl": "https://gurgaonnursing.edu.in/apply",
    "affiliatedUniversity": "Haryana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2001,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 21",
    "phone": "0121-2345678",
    "email": "info@gurgaonnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Gurgaon General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "41"
  },
  {
    "id": "nurs-022",
    "name": "St. Mary's College of Nursing, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Road, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Hyderabad",
    "website": "https://hyderabadnursing.edu.in",
    "admissionPortalUrl": "https://hyderabadnursing.edu.in/apply",
    "affiliatedUniversity": "Andhra Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2002,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 22",
    "phone": "0122-2345678",
    "email": "info@hyderabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Hyderabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "42"
  },
  {
    "id": "nurs-023",
    "name": "St. Mary's College of Nursing, Warangal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "College Road, Warangal, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Warangal",
    "website": "https://warangalnursing.edu.in",
    "admissionPortalUrl": "https://warangalnursing.edu.in/apply",
    "affiliatedUniversity": "Telangana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2003,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 23",
    "phone": "0123-2345678",
    "email": "info@warangalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Warangal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "43"
  },
  {
    "id": "nurs-024",
    "name": "Government College of Nursing, Mumbai",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "College Road, Mumbai, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Mumbai",
    "website": "https://mumbainursing.edu.in",
    "admissionPortalUrl": "https://mumbainursing.edu.in/apply",
    "affiliatedUniversity": "Maharashtra University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2004,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 24",
    "phone": "0124-2345678",
    "email": "info@mumbainursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Mumbai General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "44"
  },
  {
    "id": "nurs-025",
    "name": "St. Mary's College of Nursing, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Road, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bangalore",
    "website": "https://bangalorenursing.edu.in",
    "admissionPortalUrl": "https://bangalorenursing.edu.in/apply",
    "affiliatedUniversity": "Karnataka University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2005,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 25",
    "phone": "0125-2345678",
    "email": "info@bangalorenursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bangalore General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "45"
  },
  {
    "id": "nurs-026",
    "name": "St. Mary's College of Nursing, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Road, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kochi",
    "website": "https://kochinursing.edu.in",
    "admissionPortalUrl": "https://kochinursing.edu.in/apply",
    "affiliatedUniversity": "Kerala University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2006,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 26",
    "phone": "0126-2345678",
    "email": "info@kochinursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kochi General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "46"
  },
  {
    "id": "nurs-027",
    "name": "St. Mary's College of Nursing, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Road, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kolkata",
    "website": "https://kolkatanursing.edu.in",
    "admissionPortalUrl": "https://kolkatanursing.edu.in/apply",
    "affiliatedUniversity": "West Bengal University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2007,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 27",
    "phone": "0127-2345678",
    "email": "info@kolkatanursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kolkata General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "47"
  },
  {
    "id": "nurs-028",
    "name": "Government College of Nursing, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Road, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ahmedabad",
    "website": "https://ahmedabadnursing.edu.in",
    "admissionPortalUrl": "https://ahmedabadnursing.edu.in/apply",
    "affiliatedUniversity": "Gujarat University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2008,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 28",
    "phone": "0128-2345678",
    "email": "info@ahmedabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ahmedabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "48"
  },
  {
    "id": "nurs-029",
    "name": "St. Mary's College of Nursing, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Road, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Jaipur",
    "website": "https://jaipurnursing.edu.in",
    "admissionPortalUrl": "https://jaipurnursing.edu.in/apply",
    "affiliatedUniversity": "Rajasthan University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2009,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 29",
    "phone": "0129-2345678",
    "email": "info@jaipurnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Jaipur General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "49"
  },
  {
    "id": "nurs-030",
    "name": "St. Mary's College of Nursing, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Road, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Lucknow",
    "website": "https://lucknownursing.edu.in",
    "admissionPortalUrl": "https://lucknownursing.edu.in/apply",
    "affiliatedUniversity": "Uttar Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2010,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 30",
    "phone": "0130-2345678",
    "email": "info@lucknownursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Lucknow General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "50"
  },
  {
    "id": "nurs-031",
    "name": "St. Mary's College of Nursing, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Road, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bhopal",
    "website": "https://bhopalnursing.edu.in",
    "admissionPortalUrl": "https://bhopalnursing.edu.in/apply",
    "affiliatedUniversity": "Madhya Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2011,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 31",
    "phone": "0131-2345678",
    "email": "info@bhopalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bhopal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "51"
  },
  {
    "id": "nurs-032",
    "name": "Government College of Nursing, Ludhiana",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "College Road, Ludhiana, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ludhiana",
    "website": "https://ludhiananursing.edu.in",
    "admissionPortalUrl": "https://ludhiananursing.edu.in/apply",
    "affiliatedUniversity": "Punjab University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2012,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 32",
    "phone": "0132-2345678",
    "email": "info@ludhiananursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ludhiana General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "52"
  },
  {
    "id": "nurs-033",
    "name": "St. Mary's College of Nursing, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "College Road, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Gurgaon",
    "website": "https://gurgaonnursing.edu.in",
    "admissionPortalUrl": "https://gurgaonnursing.edu.in/apply",
    "affiliatedUniversity": "Haryana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2013,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 33",
    "phone": "0133-2345678",
    "email": "info@gurgaonnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Gurgaon General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "53"
  },
  {
    "id": "nurs-034",
    "name": "St. Mary's College of Nursing, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Road, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Hyderabad",
    "website": "https://hyderabadnursing.edu.in",
    "admissionPortalUrl": "https://hyderabadnursing.edu.in/apply",
    "affiliatedUniversity": "Andhra Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2014,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 34",
    "phone": "0134-2345678",
    "email": "info@hyderabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Hyderabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "54"
  },
  {
    "id": "nurs-035",
    "name": "St. Mary's College of Nursing, Warangal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "College Road, Warangal, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Warangal",
    "website": "https://warangalnursing.edu.in",
    "admissionPortalUrl": "https://warangalnursing.edu.in/apply",
    "affiliatedUniversity": "Telangana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2015,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 35",
    "phone": "0135-2345678",
    "email": "info@warangalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Warangal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "55"
  },
  {
    "id": "nurs-036",
    "name": "Government College of Nursing, Mumbai",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "College Road, Mumbai, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Mumbai",
    "website": "https://mumbainursing.edu.in",
    "admissionPortalUrl": "https://mumbainursing.edu.in/apply",
    "affiliatedUniversity": "Maharashtra University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2016,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 36",
    "phone": "0136-2345678",
    "email": "info@mumbainursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Mumbai General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "56"
  },
  {
    "id": "nurs-037",
    "name": "St. Mary's College of Nursing, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Road, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bangalore",
    "website": "https://bangalorenursing.edu.in",
    "admissionPortalUrl": "https://bangalorenursing.edu.in/apply",
    "affiliatedUniversity": "Karnataka University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2017,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 37",
    "phone": "0137-2345678",
    "email": "info@bangalorenursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bangalore General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "57"
  },
  {
    "id": "nurs-038",
    "name": "St. Mary's College of Nursing, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Road, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kochi",
    "website": "https://kochinursing.edu.in",
    "admissionPortalUrl": "https://kochinursing.edu.in/apply",
    "affiliatedUniversity": "Kerala University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2018,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 38",
    "phone": "0138-2345678",
    "email": "info@kochinursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kochi General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "58"
  },
  {
    "id": "nurs-039",
    "name": "St. Mary's College of Nursing, Kolkata",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "College Road, Kolkata, West Bengal",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kolkata",
    "website": "https://kolkatanursing.edu.in",
    "admissionPortalUrl": "https://kolkatanursing.edu.in/apply",
    "affiliatedUniversity": "West Bengal University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 2019,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 39",
    "phone": "0139-2345678",
    "email": "info@kolkatanursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kolkata General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "59"
  },
  {
    "id": "nurs-040",
    "name": "Government College of Nursing, Ahmedabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "College Road, Ahmedabad, Gujarat",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ahmedabad",
    "website": "https://ahmedabadnursing.edu.in",
    "admissionPortalUrl": "https://ahmedabadnursing.edu.in/apply",
    "affiliatedUniversity": "Gujarat University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1980,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 40",
    "phone": "0140-2345678",
    "email": "info@ahmedabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ahmedabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "60"
  },
  {
    "id": "nurs-041",
    "name": "St. Mary's College of Nursing, Jaipur",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "College Road, Jaipur, Rajasthan",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Jaipur",
    "website": "https://jaipurnursing.edu.in",
    "admissionPortalUrl": "https://jaipurnursing.edu.in/apply",
    "affiliatedUniversity": "Rajasthan University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1981,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 41",
    "phone": "0141-2345678",
    "email": "info@jaipurnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Jaipur General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "61"
  },
  {
    "id": "nurs-042",
    "name": "St. Mary's College of Nursing, Lucknow",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "College Road, Lucknow, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Lucknow",
    "website": "https://lucknownursing.edu.in",
    "admissionPortalUrl": "https://lucknownursing.edu.in/apply",
    "affiliatedUniversity": "Uttar Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1982,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 42",
    "phone": "0142-2345678",
    "email": "info@lucknownursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Lucknow General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "62"
  },
  {
    "id": "nurs-043",
    "name": "St. Mary's College of Nursing, Bhopal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "city": "Bhopal",
    "address": "College Road, Bhopal, Madhya Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bhopal",
    "website": "https://bhopalnursing.edu.in",
    "admissionPortalUrl": "https://bhopalnursing.edu.in/apply",
    "affiliatedUniversity": "Madhya Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1983,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 43",
    "phone": "0143-2345678",
    "email": "info@bhopalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bhopal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "63"
  },
  {
    "id": "nurs-044",
    "name": "Government College of Nursing, Ludhiana",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Punjab",
    "district": "Ludhiana",
    "city": "Ludhiana",
    "address": "College Road, Ludhiana, Punjab",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Ludhiana",
    "website": "https://ludhiananursing.edu.in",
    "admissionPortalUrl": "https://ludhiananursing.edu.in/apply",
    "affiliatedUniversity": "Punjab University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1984,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 44",
    "phone": "0144-2345678",
    "email": "info@ludhiananursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Ludhiana General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "64"
  },
  {
    "id": "nurs-045",
    "name": "St. Mary's College of Nursing, Gurgaon",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Haryana",
    "district": "Gurgaon",
    "city": "Gurgaon",
    "address": "College Road, Gurgaon, Haryana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Gurgaon",
    "website": "https://gurgaonnursing.edu.in",
    "admissionPortalUrl": "https://gurgaonnursing.edu.in/apply",
    "affiliatedUniversity": "Haryana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1985,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 45",
    "phone": "0145-2345678",
    "email": "info@gurgaonnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Gurgaon General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "65"
  },
  {
    "id": "nurs-046",
    "name": "St. Mary's College of Nursing, Hyderabad",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "College Road, Hyderabad, Andhra Pradesh",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Hyderabad",
    "website": "https://hyderabadnursing.edu.in",
    "admissionPortalUrl": "https://hyderabadnursing.edu.in/apply",
    "affiliatedUniversity": "Andhra Pradesh University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1986,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 46",
    "phone": "0146-2345678",
    "email": "info@hyderabadnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Hyderabad General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "66"
  },
  {
    "id": "nurs-047",
    "name": "St. Mary's College of Nursing, Warangal",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "College Road, Warangal, Telangana",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Warangal",
    "website": "https://warangalnursing.edu.in",
    "admissionPortalUrl": "https://warangalnursing.edu.in/apply",
    "affiliatedUniversity": "Telangana University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1987,
    "ownership": "Minority",
    "deanPrincipal": "Dr. Principal Name 47",
    "phone": "0147-2345678",
    "email": "info@warangalnursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Warangal General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "67"
  },
  {
    "id": "nurs-048",
    "name": "Government College of Nursing, Mumbai",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Maharashtra",
    "district": "Mumbai",
    "city": "Mumbai",
    "address": "College Road, Mumbai, Maharashtra",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Mumbai",
    "website": "https://mumbainursing.edu.in",
    "admissionPortalUrl": "https://mumbainursing.edu.in/apply",
    "affiliatedUniversity": "Maharashtra University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1988,
    "ownership": "Government",
    "deanPrincipal": "Dr. Principal Name 48",
    "phone": "0148-2345678",
    "email": "info@mumbainursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Merit basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹5,000 - ₹15,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Mumbai General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "68"
  },
  {
    "id": "nurs-049",
    "name": "St. Mary's College of Nursing, Bangalore",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Karnataka",
    "district": "Bangalore",
    "city": "Bangalore",
    "address": "College Road, Bangalore, Karnataka",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Bangalore",
    "website": "https://bangalorenursing.edu.in",
    "admissionPortalUrl": "https://bangalorenursing.edu.in/apply",
    "affiliatedUniversity": "Karnataka University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1989,
    "ownership": "Private",
    "deanPrincipal": "Dr. Principal Name 49",
    "phone": "0149-2345678",
    "email": "info@bangalorenursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Bangalore General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "B++ Grade",
    "nirfRanking": "69"
  },
  {
    "id": "nurs-050",
    "name": "St. Mary's College of Nursing, Kochi",
    "logoUrl": "https://placehold.co/200x200/png?text=Nursing+Logo",
    "coverImageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    "campusGallery": [],
    "state": "Kerala",
    "district": "Kochi",
    "city": "Kochi",
    "address": "College Road, Kochi, Kerala",
    "googleMapsUrl": "https://maps.google.com/?q=Nursing+College+Kochi",
    "website": "https://kochinursing.edu.in",
    "admissionPortalUrl": "https://kochinursing.edu.in/apply",
    "affiliatedUniversity": "Kerala University of Health Sciences",
    "incApproved": true,
    "yearEstablished": 1990,
    "ownership": "Autonomous",
    "deanPrincipal": "Dr. Principal Name 50",
    "phone": "0150-2345678",
    "email": "info@kochinursing.edu.in",
    "programmes": [
      "B.Sc Nursing",
      "GNM",
      "Post Basic B.Sc Nursing"
    ],
    "specializations": [
      "Medical Surgical Nursing",
      "Community Health"
    ],
    "eligibility": "10+2 with PCB (min 45-50%).",
    "admissionProcess": "State Level Entrance or Direct basis.",
    "entranceExams": [
      "State Nursing CET"
    ],
    "tuitionFees": "₹80,000 - ₹1,50,000/yr",
    "hostelFees": "₹30,000 - ₹60,000/yr",
    "scholarships": "State Government Post-Matric Scholarships.",
    "infrastructure": [
      "Fundamentals Lab",
      "AV Aids Lab",
      "Clinical Tie-up",
      "Library"
    ],
    "teachingHospital": "Kochi General Hospital",
    "clinicalTraining": "Clinical rotations in parent hospital and community health centers.",
    "hasPlacementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹6 LPA",
    "topRecruiters": [
      "Apollo",
      "Max",
      "Fortis",
      "Local Hospitals"
    ],
    "lastVerifiedDate": "2024-03-01",
    "naacGrade": "A Grade",
    "nirfRanking": "70"
  }
];
