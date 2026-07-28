
export interface ArtsCollegeProfile {
  id: string;
  name: string;
  logoUrl: string;
  coverImageUrl: string;
  state: string;
  district: string;
  city: string;
  address: string;
  googleMapsUrl: string;
  website: string;
  admissionPortalUrl: string;
  counsellingPortalUrl: string;
  affiliatedUniversity: string;
  ugcRecognised: boolean;
  naacGrade: string;
  nirfRanking: string;
  yearEstablished: number;
  ownership: string;
  programmes: string[];
  specializations: string[];
  infrastructure: string[];
  industryConnect: string;
  averagePackage: string;
  highestPackage: string;
  tuitionFees: string;
  hostelFees: string;
  scholarships: string;
  entranceExams: string[];
  admissionProcess: string;
  eligibility: string;
  phone: string;
  email: string;
  lastVerifiedDate: string;
}

export const ARTS_COLLEGES: ArtsCollegeProfile[] = [
  {
    "id": "lsr-delhi",
    "name": "Lady Shri Ram College for Women (LSR)",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Delhi",
    "district": "South Delhi",
    "city": "New Delhi",
    "address": "Lajpat Nagar IV, New Delhi, Delhi 110024",
    "googleMapsUrl": "https://maps.google.com/?q=Lady+Shri+Ram+College+New+Delhi",
    "website": "https://lsr.edu.in",
    "admissionPortalUrl": "https://admission.uod.ac.in",
    "counsellingPortalUrl": "https://admission.uod.ac.in",
    "affiliatedUniversity": "University of Delhi",
    "ugcRecognised": true,
    "naacGrade": "A++",
    "nirfRanking": "9",
    "yearEstablished": 1956,
    "ownership": "Government",
    "programmes": [
      "B.A. (Hons)",
      "B.A. Programme",
      "B.El.Ed",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "Psychology",
      "English",
      "History",
      "Political Science",
      "Journalism"
    ],
    "infrastructure": [
      "Auditorium",
      "Library",
      "Hostel",
      "Canteen",
      "Sports Ground",
      "Medical Room"
    ],
    "industryConnect": "Strong alumni network in media, civil services, and corporate sectors.",
    "averagePackage": "₹10.5 LPA",
    "highestPackage": "₹40 LPA",
    "tuitionFees": "₹20,000 - ₹35,000 / year",
    "hostelFees": "₹80,000 / year",
    "scholarships": "Merit-cum-means scholarships, Delhi University scholarships.",
    "entranceExams": [
      "CUET UG",
      "CUET PG"
    ],
    "admissionProcess": "Admission through Common University Entrance Test (CUET) followed by CSAS counselling.",
    "eligibility": "10+2 with minimum 45% aggregate in relevant subjects.",
    "phone": "011-26434459",
    "email": "principal@lsr.du.ac.in",
    "lastVerifiedDate": "2024-05-15"
  },
  {
    "id": "st-stephens-delhi",
    "name": "St. Stephen's College",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Delhi",
    "district": "North Delhi",
    "city": "New Delhi",
    "address": "University Enclave, North Campus, Delhi 110007",
    "googleMapsUrl": "https://maps.google.com/?q=St+Stephens+College+Delhi",
    "website": "https://www.ststephens.edu",
    "admissionPortalUrl": "https://admission.uod.ac.in",
    "counsellingPortalUrl": "https://admission.uod.ac.in",
    "affiliatedUniversity": "University of Delhi",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "14",
    "yearEstablished": 1881,
    "ownership": "Government Aided",
    "programmes": [
      "B.A. (Hons)",
      "B.A. Programme",
      "B.Sc. (Hons)",
      "M.A.",
      "M.Sc."
    ],
    "specializations": [
      "Economics",
      "History",
      "Philosophy",
      "English",
      "Sanskrit"
    ],
    "infrastructure": [
      "Heritage Buildings",
      "Chapel",
      "Residence Halls",
      "Library",
      "Sports Complex"
    ],
    "industryConnect": "Elite internships and global placements in consulting and public policy.",
    "averagePackage": "₹12 LPA",
    "highestPackage": "₹45 LPA",
    "tuitionFees": "₹40,000 - ₹50,000 / year",
    "hostelFees": "₹95,000 / year",
    "scholarships": "Various college-specific endowments and financial aid awards.",
    "entranceExams": [
      "CUET UG",
      "College Interview"
    ],
    "admissionProcess": "CUET score (85%) + College Interview (15%) for Christian minority and some categories.",
    "eligibility": "10+2 with high aggregate; CUET qualification mandatory.",
    "phone": "011-27667200",
    "email": "enquiries@ststephens.edu",
    "lastVerifiedDate": "2024-05-10"
  },
  {
    "id": "miranda-house-delhi",
    "name": "Miranda House",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Delhi",
    "district": "North Delhi",
    "city": "New Delhi",
    "address": "GC Narang Road, University Enclave, Delhi 110007",
    "googleMapsUrl": "https://maps.google.com/?q=Miranda+House+Delhi",
    "website": "https://www.mirandahouse.ac.in",
    "admissionPortalUrl": "https://admission.uod.ac.in",
    "counsellingPortalUrl": "https://admission.uod.ac.in",
    "affiliatedUniversity": "University of Delhi",
    "ugcRecognised": true,
    "naacGrade": "A++",
    "nirfRanking": "1",
    "yearEstablished": 1948,
    "ownership": "Government",
    "programmes": [
      "B.A. (Hons)",
      "B.A. Programme",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Geography",
      "Philosophy",
      "Political Science",
      "Sanskrit"
    ],
    "infrastructure": [
      "Modern Labs",
      "Botanical Garden",
      "Hostel",
      "Auditorium",
      "ICT Center"
    ],
    "industryConnect": "Collaborations with research institutes and cultural organisations.",
    "averagePackage": "₹9 LPA",
    "highestPackage": "₹22 LPA",
    "tuitionFees": "₹15,000 - ₹25,000 / year",
    "hostelFees": "₹65,000 / year",
    "scholarships": "NSP, State scholarships, and college merit awards.",
    "entranceExams": [
      "CUET UG"
    ],
    "admissionProcess": "Centralised admission through CUET scores.",
    "eligibility": "10+2 with 45% aggregate; subject-specific requirements apply.",
    "phone": "011-27667367",
    "email": "mhouse@ndf.vsnl.net.in",
    "lastVerifiedDate": "2024-05-12"
  },
  {
    "id": "presidency-kolkata",
    "name": "Presidency University",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "West Bengal",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "86/1, College Street, Kolkata, West Bengal 700073",
    "googleMapsUrl": "https://maps.google.com/?q=Presidency+University+Kolkata",
    "website": "https://www.presiuniv.ac.in",
    "admissionPortalUrl": "https://www.presiuniv.ac.in/web/admission.php",
    "counsellingPortalUrl": "https://wbjeeb.nic.in",
    "affiliatedUniversity": "Autonomous (State University)",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "151-200",
    "yearEstablished": 1817,
    "ownership": "Government",
    "programmes": [
      "B.A. (Hons)",
      "M.A.",
      "Ph.D."
    ],
    "specializations": [
      "Bengali",
      "History",
      "Philosophy",
      "Sociology",
      "Performing Arts"
    ],
    "infrastructure": [
      "Historic Library",
      "Research Labs",
      "Student Union Hall",
      "Hostel"
    ],
    "industryConnect": "Strong focus on academic research and heritage studies.",
    "averagePackage": "₹6 LPA",
    "highestPackage": "₹15 LPA",
    "tuitionFees": "₹5,000 - ₹10,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": "Swami Vivekananda Merit-cum-Means (SVMCM), Kanyashree.",
    "entranceExams": [
      "PUBDET",
      "PUMDET"
    ],
    "admissionProcess": "Admission through West Bengal Joint Entrance Board (WBJEEB) conducted entrance tests.",
    "eligibility": "10+2 with minimum 60% aggregate; entrance test qualification.",
    "phone": "033-22411960",
    "email": "registrar@presiuniv.ac.in",
    "lastVerifiedDate": "2024-05-20"
  },
  {
    "id": "loyola-chennai",
    "name": "Loyola College",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Sterling Road, Nungambakkam, Chennai, Tamil Nadu 600034",
    "googleMapsUrl": "https://maps.google.com/?q=Loyola+College+Chennai",
    "website": "https://www.loyolacollege.edu",
    "admissionPortalUrl": "https://www.loyolacollege.edu/admission",
    "counsellingPortalUrl": "https://www.loyolacollege.edu/admission",
    "affiliatedUniversity": "University of Madras",
    "ugcRecognised": true,
    "naacGrade": "A++",
    "nirfRanking": "7",
    "yearEstablished": 1925,
    "ownership": "Private (Autonomous)",
    "programmes": [
      "B.A.",
      "M.A.",
      "M.Phil.",
      "Ph.D."
    ],
    "specializations": [
      "Economics",
      "English",
      "French",
      "History",
      "Sociology",
      "Social Work"
    ],
    "infrastructure": [
      "Church",
      "Open Air Theatre",
      "Digital Library",
      "Hostel",
      "Sports Pavilion"
    ],
    "industryConnect": "Tie-ups with international NGOs and social research organisations.",
    "averagePackage": "₹7.5 LPA",
    "highestPackage": "₹20 LPA",
    "tuitionFees": "₹30,000 - ₹45,000 / year",
    "hostelFees": "₹70,000 / year",
    "scholarships": "Management scholarships, State government BC/MBC/SC/ST scholarships.",
    "entranceExams": [
      "Merit Based",
      "Interview"
    ],
    "admissionProcess": "Online application followed by merit list and interview for selected courses.",
    "eligibility": "10+2 pass with relevant subjects.",
    "phone": "044-28178200",
    "email": "admission@loyolacollege.edu",
    "lastVerifiedDate": "2024-05-18"
  },
  {
    "id": "arts-college-5",
    "name": "Arts & Humanities Institution 5",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 5",
    "city": "City 5",
    "address": "Street 5, City 5, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "55",
    "yearEstablished": 1955,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-6",
    "name": "Arts & Humanities Institution 6",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 6",
    "city": "City 6",
    "address": "Street 6, City 6, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "56",
    "yearEstablished": 1956,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-7",
    "name": "Arts & Humanities Institution 7",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 7",
    "city": "City 7",
    "address": "Street 7, City 7, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "57",
    "yearEstablished": 1957,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-8",
    "name": "Arts & Humanities Institution 8",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 8",
    "city": "City 8",
    "address": "Street 8, City 8, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "58",
    "yearEstablished": 1958,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-9",
    "name": "Arts & Humanities Institution 9",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 9",
    "city": "City 9",
    "address": "Street 9, City 9, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "59",
    "yearEstablished": 1959,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-10",
    "name": "Arts & Humanities Institution 10",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 10",
    "city": "City 10",
    "address": "Street 10, City 10, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "60",
    "yearEstablished": 1960,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "English",
      "Political Science"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-11",
    "name": "Arts & Humanities Institution 11",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 11",
    "city": "City 11",
    "address": "Street 11, City 11, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "61",
    "yearEstablished": 1961,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Political Science",
      "Sociology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-12",
    "name": "Arts & Humanities Institution 12",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 12",
    "city": "City 12",
    "address": "Street 12, City 12, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "62",
    "yearEstablished": 1962,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Philosophy"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-13",
    "name": "Arts & Humanities Institution 13",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 13",
    "city": "City 13",
    "address": "Street 13, City 13, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "63",
    "yearEstablished": 1963,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-14",
    "name": "Arts & Humanities Institution 14",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 14",
    "city": "City 14",
    "address": "Street 14, City 14, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "64",
    "yearEstablished": 1964,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-15",
    "name": "Arts & Humanities Institution 15",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 15",
    "city": "City 15",
    "address": "Street 15, City 15, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "65",
    "yearEstablished": 1965,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-16",
    "name": "Arts & Humanities Institution 16",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 16",
    "city": "City 16",
    "address": "Street 16, City 16, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "66",
    "yearEstablished": 1966,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-17",
    "name": "Arts & Humanities Institution 17",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 17",
    "city": "City 17",
    "address": "Street 17, City 17, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "67",
    "yearEstablished": 1967,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-18",
    "name": "Arts & Humanities Institution 18",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 18",
    "city": "City 18",
    "address": "Street 18, City 18, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "68",
    "yearEstablished": 1968,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "English",
      "Political Science"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-19",
    "name": "Arts & Humanities Institution 19",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 19",
    "city": "City 19",
    "address": "Street 19, City 19, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "69",
    "yearEstablished": 1969,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Political Science",
      "Sociology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-20",
    "name": "Arts & Humanities Institution 20",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 20",
    "city": "City 20",
    "address": "Street 20, City 20, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "70",
    "yearEstablished": 1970,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Philosophy"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-21",
    "name": "Arts & Humanities Institution 21",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 21",
    "city": "City 21",
    "address": "Street 21, City 21, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "71",
    "yearEstablished": 1971,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-22",
    "name": "Arts & Humanities Institution 22",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 22",
    "city": "City 22",
    "address": "Street 22, City 22, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "72",
    "yearEstablished": 1972,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-23",
    "name": "Arts & Humanities Institution 23",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 23",
    "city": "City 23",
    "address": "Street 23, City 23, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "73",
    "yearEstablished": 1973,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-24",
    "name": "Arts & Humanities Institution 24",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 24",
    "city": "City 24",
    "address": "Street 24, City 24, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "74",
    "yearEstablished": 1974,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-25",
    "name": "Arts & Humanities Institution 25",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 25",
    "city": "City 25",
    "address": "Street 25, City 25, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "75",
    "yearEstablished": 1975,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-26",
    "name": "Arts & Humanities Institution 26",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 26",
    "city": "City 26",
    "address": "Street 26, City 26, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "76",
    "yearEstablished": 1976,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "English",
      "Political Science"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-27",
    "name": "Arts & Humanities Institution 27",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 27",
    "city": "City 27",
    "address": "Street 27, City 27, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "77",
    "yearEstablished": 1977,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Political Science",
      "Sociology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-28",
    "name": "Arts & Humanities Institution 28",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 28",
    "city": "City 28",
    "address": "Street 28, City 28, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "78",
    "yearEstablished": 1978,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Philosophy"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-29",
    "name": "Arts & Humanities Institution 29",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 29",
    "city": "City 29",
    "address": "Street 29, City 29, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "79",
    "yearEstablished": 1979,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-30",
    "name": "Arts & Humanities Institution 30",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 30",
    "city": "City 30",
    "address": "Street 30, City 30, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "80",
    "yearEstablished": 1980,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-31",
    "name": "Arts & Humanities Institution 31",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 31",
    "city": "City 31",
    "address": "Street 31, City 31, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "81",
    "yearEstablished": 1981,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-32",
    "name": "Arts & Humanities Institution 32",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 32",
    "city": "City 32",
    "address": "Street 32, City 32, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "82",
    "yearEstablished": 1982,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-33",
    "name": "Arts & Humanities Institution 33",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 33",
    "city": "City 33",
    "address": "Street 33, City 33, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "83",
    "yearEstablished": 1983,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-34",
    "name": "Arts & Humanities Institution 34",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 34",
    "city": "City 34",
    "address": "Street 34, City 34, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "84",
    "yearEstablished": 1984,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "English",
      "Political Science"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-35",
    "name": "Arts & Humanities Institution 35",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 35",
    "city": "City 35",
    "address": "Street 35, City 35, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "85",
    "yearEstablished": 1985,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Political Science",
      "Sociology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-36",
    "name": "Arts & Humanities Institution 36",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 36",
    "city": "City 36",
    "address": "Street 36, City 36, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "86",
    "yearEstablished": 1986,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Philosophy"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-37",
    "name": "Arts & Humanities Institution 37",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 37",
    "city": "City 37",
    "address": "Street 37, City 37, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "87",
    "yearEstablished": 1987,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-38",
    "name": "Arts & Humanities Institution 38",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 38",
    "city": "City 38",
    "address": "Street 38, City 38, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "88",
    "yearEstablished": 1988,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-39",
    "name": "Arts & Humanities Institution 39",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 39",
    "city": "City 39",
    "address": "Street 39, City 39, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "89",
    "yearEstablished": 1989,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-40",
    "name": "Arts & Humanities Institution 40",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 40",
    "city": "City 40",
    "address": "Street 40, City 40, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "90",
    "yearEstablished": 1990,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-41",
    "name": "Arts & Humanities Institution 41",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 41",
    "city": "City 41",
    "address": "Street 41, City 41, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "91",
    "yearEstablished": 1991,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-42",
    "name": "Arts & Humanities Institution 42",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 42",
    "city": "City 42",
    "address": "Street 42, City 42, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "92",
    "yearEstablished": 1992,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "English",
      "Political Science"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-43",
    "name": "Arts & Humanities Institution 43",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 43",
    "city": "City 43",
    "address": "Street 43, City 43, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "93",
    "yearEstablished": 1993,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Political Science",
      "Sociology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-44",
    "name": "Arts & Humanities Institution 44",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Telangana",
    "district": "District 44",
    "city": "City 44",
    "address": "Street 44, City 44, Telangana",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Telangana",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "94",
    "yearEstablished": 1994,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Sociology",
      "Philosophy"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-45",
    "name": "Arts & Humanities Institution 45",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Uttar Pradesh",
    "district": "District 45",
    "city": "City 45",
    "address": "Street 45, City 45, Uttar Pradesh",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Uttar Pradesh",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "95",
    "yearEstablished": 1995,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Philosophy",
      "Psychology"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-46",
    "name": "Arts & Humanities Institution 46",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Kerala",
    "district": "District 46",
    "city": "City 46",
    "address": "Street 46, City 46, Kerala",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Kerala",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "96",
    "yearEstablished": 1996,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Psychology",
      "Geography"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-47",
    "name": "Arts & Humanities Institution 47",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Rajasthan",
    "district": "District 47",
    "city": "City 47",
    "address": "Street 47, City 47, Rajasthan",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Rajasthan",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "97",
    "yearEstablished": 1997,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Geography",
      "Economics"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-48",
    "name": "Arts & Humanities Institution 48",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Maharashtra",
    "district": "District 48",
    "city": "City 48",
    "address": "Street 48, City 48, Maharashtra",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Maharashtra",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "98",
    "yearEstablished": 1998,
    "ownership": "Government",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "Economics",
      "History"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  },
  {
    "id": "arts-college-49",
    "name": "Arts & Humanities Institution 49",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "state": "Karnataka",
    "district": "District 49",
    "city": "City 49",
    "address": "Street 49, City 49, Karnataka",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedUniversity": "State University of Karnataka",
    "ugcRecognised": true,
    "naacGrade": "A",
    "nirfRanking": "99",
    "yearEstablished": 1999,
    "ownership": "Private",
    "programmes": [
      "B.A.",
      "M.A."
    ],
    "specializations": [
      "History",
      "English"
    ],
    "infrastructure": [
      "Library",
      "Classrooms",
      "Hostel"
    ],
    "industryConnect": "Career guidance and placement support provided.",
    "averagePackage": "₹4.5 LPA",
    "highestPackage": "₹10 LPA",
    "tuitionFees": "₹10,000 / year",
    "hostelFees": "₹20,000 / year",
    "scholarships": "Government scholarships available.",
    "entranceExams": [
      "CUET",
      "State Entrance"
    ],
    "admissionProcess": "Merit based or through entrance test.",
    "eligibility": "10+2 pass.",
    "phone": "000-0000000",
    "email": "info@example.edu",
    "lastVerifiedDate": "2024-06-01"
  }
];
