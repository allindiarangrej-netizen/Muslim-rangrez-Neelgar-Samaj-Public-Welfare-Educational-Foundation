export interface TeacherCollegeProfile {
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
  ncteRecognitionStatus: string;
  ugcRecognition: string;
  naacGrade: string;
  nirfRanking: string;
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
  infrastructure: string[];
  teachingPractice: {
    practiceSchools: string[];
    internshipDuration: string;
    schoolAttachment: boolean;
    microTeaching: boolean;
    lessonPlanning: boolean;
    communityOutreach: boolean;
    educationalTours: boolean;
  };
  careerInformation: {
    hasPlacementCell: boolean;
    schoolPlacements: boolean;
    govtTeacherRecruitmentGuidance: boolean;
    kvsNvsGuidance: boolean;
    ctetStateTetCoaching: boolean;
    netHigherEdGuidance: boolean;
    highestSalary: string;
    averageSalary: string;
    topRecruiters: string[];
  };
  financialInfo: {
    tuitionFees: string;
    hostelFees: string;
    govtScholarships: boolean;
    minorityScholarships: boolean;
    meritScholarships: boolean;
    loanAssistance: boolean;
  };
  faculty: {
    principal: string;
    dean: string;
    facultyStrength: number;
    studentFacultyRatio: string;
    researchFacultyCount: number;
    visitingProfessorsCount: number;
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
  ncteRecognized: boolean;
  ugcRecognized: boolean;
}

export const TEACHER_COLLEGES: TeacherCollegeProfile[] = [
  {
    "id": "institute-of-advanced-study-in-education-iase-asansol-1",
    "name": "Institute of Advanced Study in Education (IASE), Asansol",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "city": "Asansol",
    "address": "Campus Road, Near Education Hub, Asansol, Paschim Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Asansol+Asansol",
    "website": "https://institute-of-advanced-study-in-education-iase-asansol.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-asansol.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 88 (Teacher Education Category)",
    "yearEstablished": 1981,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "ECCE",
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "M.P.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Health Education",
      "Educational Technology",
      "Mathematics Education",
      "Educational Administration",
      "Early Childhood Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-asansol.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Conference Hall",
      "Mathematics Lab",
      "Playground",
      "Auditorium",
      "Science Lab",
      "Language Lab",
      "Seminar Hall",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ahlcon International",
        "Amity International School",
        "DAV Public Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 43,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8993317548",
      "email": "principal@institute-of-advanced-study-in-education-iase-asansol.org",
      "admissionOfficeContact": "+91 7930719602",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-asansol",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-asansol",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-asansol"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-coimbatore-2",
    "name": "Institute of Advanced Study in Education (IASE), Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Campus Road, Near Education Hub, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Coimbatore+Coimbatore",
    "website": "https://institute-of-advanced-study-in-education-iase-coimbatore.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-coimbatore.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1969,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "Integrated B.A. B.Ed.",
      "D.El.Ed.",
      "B.P.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Special Education",
      "ICT in Education",
      "Language Education",
      "Health Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-coimbatore.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Science Lab",
      "Wi-Fi Campus",
      "Digital Library",
      "Hostel",
      "Sports Complex",
      "Computer Lab",
      "Conference Hall",
      "Library",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 30,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7348840738",
      "email": "principal@institute-of-advanced-study-in-education-iase-coimbatore.org",
      "admissionOfficeContact": "+91 7644183872",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-coimbatore",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-coimbatore",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-coimbatore"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-east-delhi-3",
    "name": "District Institute of Education & Training (DIET), East Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "East Delhi",
    "city": "East Delhi",
    "address": "Campus Road, Near Education Hub, East Delhi, East Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+East+Delhi+East Delhi",
    "website": "https://district-institute-of-education-and-training-diet-east-delhi.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-east-delhi.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "M.P.Ed.",
      "D.El.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Mathematics Education",
      "Special Education",
      "Early Childhood Education",
      "Teacher Leadership",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-east-delhi.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Medical Facility",
      "Seminar Hall",
      "Educational Technology Lab",
      "ICT Lab",
      "Psychology Lab",
      "Transport",
      "Computer Lab",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Ahlcon International",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 53,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7079549457",
      "email": "principal@district-institute-of-education-and-training-diet-east-delhi.org",
      "admissionOfficeContact": "+91 7574458682",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-east-delhi",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-east-delhi",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-east-delhi"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-college-of-teacher-education-east-delhi-4",
    "name": "National College of Teacher Education, East Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "East Delhi",
    "city": "East Delhi",
    "address": "Campus Road, Near Education Hub, East Delhi, East Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Teacher+Education,+East+Delhi+East Delhi",
    "website": "https://national-college-of-teacher-education-east-delhi.edu.in",
    "admissionPortalUrl": "https://national-college-of-teacher-education-east-delhi.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 36 (Teacher Education Category)",
    "yearEstablished": 1958,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Integrated B.A. B.Ed.",
      "Certificate in Guidance & Counselling",
      "ECCE",
      "M.P.Ed.",
      "D.El.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Health Education",
      "Educational Administration",
      "Language Education",
      "Mathematics Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-college-of-teacher-education-east-delhi.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Mathematics Lab",
      "Psychology Lab",
      "Sports Complex",
      "Library",
      "Playground",
      "Science Lab",
      "Medical Facility",
      "Seminar Hall",
      "Conference Hall",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Delhi Public School (DPS)",
        "Amity International School",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 20,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 6,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8768742524",
      "email": "principal@national-college-of-teacher-education-east-delhi.org",
      "admissionOfficeContact": "+91 8941636486",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-teacher-education-east-delhi",
        "twitter": "https://twitter.com/national-college-of-teacher-education-east-delhi",
        "linkedin": "https://linkedin.com/school/national-college-of-teacher-education-east-delhi"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-nizamabad-5",
    "name": "College of Teacher Education (CTE), Nizamabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Nizamabad",
    "city": "Nizamabad",
    "address": "Campus Road, Near Education Hub, Nizamabad, Nizamabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Nizamabad+Nizamabad",
    "website": "https://college-of-teacher-education-cte-nizamabad.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-nizamabad.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2019,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Inclusive Education",
      "Educational Technology",
      "Health Education",
      "Social Science Education",
      "Mathematics Education",
      "Language Education",
      "Curriculum & Instruction",
      "Early Childhood Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-nizamabad.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Language Lab",
      "Library",
      "Teaching Laboratories",
      "Transport",
      "Science Lab",
      "Sports Complex",
      "Seminar Hall",
      "Medical Facility",
      "ICT Lab",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 50,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7471089009",
      "email": "principal@college-of-teacher-education-cte-nizamabad.org",
      "admissionOfficeContact": "+91 7474532904",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-nizamabad",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-nizamabad",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-nizamabad"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-bareilly-6",
    "name": "Al-Farabi College of Teacher Education, Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Campus Road, Near Education Hub, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Bareilly+Bareilly",
    "website": "https://al-farabi-college-of-teacher-education-bareilly.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-bareilly.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1994,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "D.El.Ed.",
      "B.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "M.P.Ed."
    ],
    "specializations": [
      "Science Education",
      "Teacher Leadership",
      "Guidance & Counselling",
      "ICT in Education",
      "Social Science Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-bareilly.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Seminar Hall",
      "ICT Lab",
      "Educational Technology Lab",
      "Wi-Fi Campus",
      "Mathematics Lab",
      "Language Lab",
      "Playground",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "State Department of School Education",
        "Ryan International",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 37,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8611183712",
      "email": "principal@al-farabi-college-of-teacher-education-bareilly.org",
      "admissionOfficeContact": "+91 7551793729",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-bareilly",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-bareilly",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-bareilly"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-north-west-delhi-7",
    "name": "Institute of Advanced Study in Education (IASE), North West Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "North West Delhi",
    "address": "Campus Road, Near Education Hub, North West Delhi, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+North+West+Delhi+North West Delhi",
    "website": "https://institute-of-advanced-study-in-education-iase-north-west-delhi.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-north-west-delhi.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1969,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "M.P.Ed.",
      "Diploma in Special Education",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Guidance & Counselling",
      "Educational Psychology",
      "Language Education",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-north-west-delhi.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Auditorium",
      "Wi-Fi Campus",
      "Conference Hall",
      "Teaching Laboratories",
      "Language Lab",
      "Sports Complex",
      "Mathematics Lab",
      "Computer Lab",
      "Educational Technology Lab",
      "Playground",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Modern School New Delhi",
        "Amity International School",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 37,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 7200808642",
      "email": "principal@institute-of-advanced-study-in-education-iase-north-west-delhi.org",
      "admissionOfficeContact": "+91 7231323239",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-north-west-delhi",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-north-west-delhi",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-north-west-delhi"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-coimbatore-8",
    "name": "Institute of Advanced Study in Education (IASE), Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Campus Road, Near Education Hub, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Coimbatore+Coimbatore",
    "website": "https://institute-of-advanced-study-in-education-iase-coimbatore.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-coimbatore.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1968,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "ICT in Education",
      "Inclusive Education",
      "Value Education",
      "Curriculum & Instruction",
      "Mathematics Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-coimbatore.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "Library",
      "Conference Hall",
      "Auditorium",
      "Computer Lab",
      "Playground",
      "ICT Lab",
      "Transport",
      "Language Lab",
      "Medical Facility",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International",
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 53,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7602849739",
      "email": "principal@institute-of-advanced-study-in-education-iase-coimbatore.org",
      "admissionOfficeContact": "+91 7219499667",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-coimbatore",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-coimbatore",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-coimbatore"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-trichy-9",
    "name": "Al-Farabi College of Teacher Education, Trichy",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "city": "Trichy",
    "address": "Campus Road, Near Education Hub, Trichy, Tiruchirappalli, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Trichy+Trichy",
    "website": "https://al-farabi-college-of-teacher-education-trichy.ac.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-trichy.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1980,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Value Education",
      "Curriculum & Instruction",
      "Guidance & Counselling",
      "Language Education",
      "ICT in Education",
      "Early Childhood Education",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-trichy.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Teaching Laboratories",
      "Transport",
      "Seminar Hall",
      "Medical Facility",
      "Computer Lab",
      "Psychology Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International",
        "Delhi Public School (DPS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 36,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9836416516",
      "email": "principal@al-farabi-college-of-teacher-education-trichy.org",
      "admissionOfficeContact": "+91 7625344253",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-trichy",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-trichy",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-trichy"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-10",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Visakhapatnam",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "city": "Visakhapatnam",
    "address": "Campus Road, Near Education Hub, Visakhapatnam, Visakhapatnam, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Visakhapatnam+Visakhapatnam",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-.ac.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 11 (Teacher Education Category)",
    "yearEstablished": 2019,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Physical Education",
      "ICT in Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Psychology Lab",
      "Medical Facility",
      "Auditorium",
      "Teaching Laboratories",
      "Conference Hall",
      "Digital Library",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Modern School New Delhi",
        "State Department of School Education",
        "Delhi Public School (DPS)",
        "DAV Public Schools",
        "Ahlcon International",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 32,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 9130116352",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-.org",
      "admissionOfficeContact": "+91 8996527454",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-visakhapatnam-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-11",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Mahbubnagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Mahbubnagar",
    "city": "Mahbubnagar",
    "address": "Campus Road, Near Education Hub, Mahbubnagar, Mahbubnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Mahbubnagar+Mahbubnagar",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1970,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "M.P.Ed.",
      "Ph.D. in Education",
      "D.El.Ed.",
      "ECCE",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Language Education",
      "Early Childhood Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Computer Lab",
      "Sports Complex",
      "Auditorium",
      "Psychology Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Podar International",
        "International Baccalaureate (IB) World Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 29,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9558243211",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-.org",
      "admissionOfficeContact": "+91 8213965115",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mahbubnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-purnia-12",
    "name": "National Institute of Physical Education & Sports, Purnia",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Purnia",
    "city": "Purnia",
    "address": "Campus Road, Near Education Hub, Purnia, Purnia, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Purnia+Purnia",
    "website": "https://national-institute-of-physical-education-and-sports-purnia-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-purnia-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2003,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "B.P.Ed.",
      "D.El.Ed.",
      "ECCE",
      "M.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Guidance & Counselling",
      "Educational Technology",
      "Science Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-purnia-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Library",
      "Psychology Lab",
      "Conference Hall",
      "Teaching Laboratories",
      "Playground",
      "Language Lab",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 64,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7464491514",
      "email": "principal@national-institute-of-physical-education-and-sports-purnia-.org",
      "admissionOfficeContact": "+91 8113290858",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-purnia-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-purnia-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-purnia-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-north-west-delhi-13",
    "name": "Al-Farabi College of Teacher Education, North West Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "North West Delhi",
    "address": "Campus Road, Near Education Hub, North West Delhi, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+North+West+Delhi+North West Delhi",
    "website": "https://al-farabi-college-of-teacher-education-north-west-delhi-.ac.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-north-west-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 95 (Teacher Education Category)",
    "yearEstablished": 1973,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Environmental Education",
      "Guidance & Counselling",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-north-west-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Sports Complex",
      "Computer Lab",
      "Science Lab",
      "Hostel",
      "Psychology Lab",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Delhi Public School (DPS)",
        "Ryan International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 52,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9077137208",
      "email": "principal@al-farabi-college-of-teacher-education-north-west-delhi-.org",
      "admissionOfficeContact": "+91 7364588724",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-north-west-delhi-",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-north-west-delhi-",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-north-west-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-nellore-14",
    "name": "College of Teacher Education (CTE), Nellore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "city": "Nellore",
    "address": "Campus Road, Near Education Hub, Nellore, Sri Potti Sriramulu Nellore, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Nellore+Nellore",
    "website": "https://college-of-teacher-education-cte-nellore-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-nellore-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1979,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "Nursery Teacher Training (NTT)",
      "D.El.Ed.",
      "B.P.Ed.",
      "Diploma in Special Education",
      "M.Ed."
    ],
    "specializations": [
      "Health Education",
      "Guidance & Counselling",
      "Mathematics Education",
      "Adult Education",
      "Language Education",
      "Curriculum & Instruction",
      "Educational Technology",
      "Physical Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-nellore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Mathematics Lab",
      "Educational Technology Lab",
      "ICT Lab",
      "Library",
      "Auditorium",
      "Conference Hall",
      "Seminar Hall",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "DAV Public Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 25,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 8040448934",
      "email": "principal@college-of-teacher-education-cte-nellore-.org",
      "admissionOfficeContact": "+91 8366992145",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-nellore-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-nellore-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-nellore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-new-delhi-15",
    "name": "College of Teacher Education (CTE), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Campus Road, Near Education Hub, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+New+Delhi+New Delhi",
    "website": "https://college-of-teacher-education-cte-new-delhi-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-new-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "D.El.Ed.",
      "B.Ed.",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Special Education",
      "ICT in Education",
      "Science Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-new-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Psychology Lab",
      "Language Lab",
      "Playground",
      "Mathematics Lab",
      "Seminar Hall",
      "Transport",
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Science Lab",
      "Computer Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Ryan International",
        "Modern School New Delhi",
        "Delhi Public School (DPS)",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 30,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 9059465383",
      "email": "principal@college-of-teacher-education-cte-new-delhi-.org",
      "admissionOfficeContact": "+91 8405472644",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-new-delhi-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-new-delhi-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-new-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-salem-16",
    "name": "Institute of Advanced Study in Education (IASE), Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Campus Road, Near Education Hub, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Salem+Salem",
    "website": "https://institute-of-advanced-study-in-education-iase-salem-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-salem-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 64 (Teacher Education Category)",
    "yearEstablished": 1988,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Certificate in Guidance & Counselling",
      "Ph.D. in Education",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Educational Psychology",
      "Environmental Education",
      "Guidance & Counselling",
      "Value Education",
      "Inclusive Education",
      "Curriculum & Instruction",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-salem-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Wi-Fi Campus",
      "Playground",
      "Science Lab",
      "Seminar Hall",
      "Auditorium",
      "Transport",
      "Psychology Lab",
      "Language Lab",
      "Library",
      "Teaching Laboratories",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Ahlcon International",
        "Podar International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 36,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9369987413",
      "email": "principal@institute-of-advanced-study-in-education-iase-salem-.org",
      "admissionOfficeContact": "+91 7017167509",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-salem-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-salem-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-salem-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-sikar-17",
    "name": "District Institute of Education & Training (DIET), Sikar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Sikar",
    "address": "Campus Road, Near Education Hub, Sikar, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Sikar+Sikar",
    "website": "https://district-institute-of-education-and-training-diet-sikar-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-sikar-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Rajasthan",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "Certificate in Guidance & Counselling",
      "M.P.Ed.",
      "B.Ed.",
      "Integrated B.Sc. B.Ed."
    ],
    "specializations": [
      "Health Education",
      "Physical Education",
      "Special Education",
      "Educational Administration",
      "Adult Education",
      "Environmental Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-sikar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Transport",
      "Seminar Hall",
      "Science Lab",
      "Mathematics Lab",
      "Educational Technology Lab",
      "Medical Facility",
      "ICT Lab",
      "Language Lab",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 37,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8084815402",
      "email": "principal@district-institute-of-education-and-training-diet-sikar-.org",
      "admissionOfficeContact": "+91 8316956213",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-sikar-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-sikar-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-sikar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-coimbatore-18",
    "name": "District Institute of Education & Training (DIET), Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Campus Road, Near Education Hub, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Coimbatore+Coimbatore",
    "website": "https://district-institute-of-education-and-training-diet-coimbatore-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-coimbatore-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Tamil Nadu",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1966,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "ECCE",
      "Diploma in Special Education",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Mathematics Education",
      "Adult Education",
      "Social Science Education",
      "Health Education",
      "Guidance & Counselling",
      "Language Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-coimbatore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "ICT Lab",
      "Medical Facility",
      "Conference Hall",
      "Library",
      "Digital Library",
      "Mathematics Lab",
      "Seminar Hall",
      "Computer Lab",
      "Auditorium",
      "Psychology Lab",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "Podar International",
        "Ahlcon International",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 24,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8394735702",
      "email": "principal@district-institute-of-education-and-training-diet-coimbatore-.org",
      "admissionOfficeContact": "+91 7853097479",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-coimbatore-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-coimbatore-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-coimbatore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-lucknow-19",
    "name": "College of Teacher Education (CTE), Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Campus Road, Near Education Hub, Lucknow, Lucknow, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Lucknow+Lucknow",
    "website": "https://college-of-teacher-education-cte-lucknow-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-lucknow-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1981,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "M.Ed.",
      "M.P.Ed.",
      "B.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Special Education",
      "Early Childhood Education",
      "Curriculum & Instruction",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-lucknow-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Hostel",
      "Playground",
      "Auditorium",
      "Conference Hall",
      "Medical Facility",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 44,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9713079337",
      "email": "principal@college-of-teacher-education-cte-lucknow-.org",
      "admissionOfficeContact": "+91 7644883455",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-lucknow-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-lucknow-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-lucknow-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bellary-20",
    "name": "Institute of Advanced Study in Education (IASE), Bellary",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Ballari",
    "city": "Bellary",
    "address": "Campus Road, Near Education Hub, Bellary, Ballari, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bellary+Bellary",
    "website": "https://institute-of-advanced-study-in-education-iase-bellary-.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bellary-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 7 (Teacher Education Category)",
    "yearEstablished": 1980,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Ph.D. in Education",
      "M.Ed.",
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Early Childhood Education",
      "Value Education",
      "Adult Education",
      "Environmental Education",
      "Educational Psychology",
      "Health Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bellary-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "Computer Lab",
      "Teaching Laboratories",
      "Conference Hall",
      "Hostel",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Ahlcon International",
        "Delhi Public School (DPS)",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 48,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7688020812",
      "email": "principal@institute-of-advanced-study-in-education-iase-bellary-.org",
      "admissionOfficeContact": "+91 7750035976",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bellary-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bellary-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bellary-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-jaipur-21",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Campus Road, Near Education Hub, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Jaipur+Jaipur",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-jaipur-.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-jaipur-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 62 (Teacher Education Category)",
    "yearEstablished": 1993,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "ECCE"
    ],
    "specializations": [
      "Environmental Education",
      "Guidance & Counselling",
      "Physical Education",
      "Adult Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-jaipur-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Playground",
      "Teaching Laboratories",
      "Digital Library",
      "Science Lab",
      "Conference Hall",
      "Mathematics Lab",
      "Library",
      "Hostel",
      "Transport",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Amity International School",
        "Modern School New Delhi",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Podar International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 42,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7128965602",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-jaipur-.org",
      "admissionOfficeContact": "+91 7397540294",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-jaipur-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-jaipur-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-jaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-kurnool-22",
    "name": "National Institute of Physical Education & Sports, Kurnool",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "city": "Kurnool",
    "address": "Campus Road, Near Education Hub, Kurnool, Kurnool, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Kurnool+Kurnool",
    "website": "https://national-institute-of-physical-education-and-sports-kurnool-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-kurnool-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2003,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "B.Ed.",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Teacher Leadership",
      "Physical Education",
      "Inclusive Education",
      "Environmental Education",
      "Guidance & Counselling",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-kurnool-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Seminar Hall",
      "Hostel",
      "Science Lab",
      "Computer Lab",
      "Language Lab",
      "Auditorium",
      "Teaching Laboratories",
      "Library",
      "Transport",
      "Conference Hall",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International",
        "Delhi Public School (DPS)",
        "DAV Public Schools",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 34,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7384155697",
      "email": "principal@national-institute-of-physical-education-and-sports-kurnool-.org",
      "admissionOfficeContact": "+91 9349043823",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-kurnool-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-kurnool-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-kurnool-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-physical-education-nellore-23",
    "name": "Government College of Physical Education, Nellore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "city": "Nellore",
    "address": "Campus Road, Near Education Hub, Nellore, Sri Potti Sriramulu Nellore, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Physical+Education,+Nellore+Nellore",
    "website": "https://government-college-of-physical-education-nellore-.ac.in",
    "admissionPortalUrl": "https://government-college-of-physical-education-nellore-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 35 (Teacher Education Category)",
    "yearEstablished": 1976,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Educational Technology",
      "Value Education",
      "Social Science Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-physical-education-nellore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "Library",
      "Auditorium",
      "Digital Library",
      "Science Lab",
      "Seminar Hall",
      "Transport",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 38,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9863571879",
      "email": "principal@government-college-of-physical-education-nellore-.org",
      "admissionOfficeContact": "+91 9690408466",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-physical-education-nellore-",
        "twitter": "https://twitter.com/government-college-of-physical-education-nellore-",
        "linkedin": "https://linkedin.com/school/government-college-of-physical-education-nellore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-vellore-24",
    "name": "Institute of Advanced Study in Education (IASE), Vellore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Vellore",
    "city": "Vellore",
    "address": "Campus Road, Near Education Hub, Vellore, Vellore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Vellore+Vellore",
    "website": "https://institute-of-advanced-study-in-education-iase-vellore-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-vellore-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1964,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Diploma in Special Education",
      "Integrated B.A. B.Ed.",
      "B.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Early Childhood Education",
      "ICT in Education",
      "Science Education",
      "Environmental Education",
      "Educational Technology",
      "Teacher Leadership",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-vellore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Computer Lab",
      "Medical Facility",
      "Transport",
      "Teaching Laboratories",
      "Sports Complex",
      "Science Lab",
      "Auditorium",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "State Department of School Education",
        "Modern School New Delhi",
        "Podar International",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 33,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9227931028",
      "email": "principal@institute-of-advanced-study-in-education-iase-vellore-.org",
      "admissionOfficeContact": "+91 8306637586",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-vellore-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-vellore-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-vellore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-darjeeling-25",
    "name": "District Institute of Education & Training (DIET), Darjeeling",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Campus Road, Near Education Hub, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Darjeeling+Siliguri",
    "website": "https://district-institute-of-education-and-training-diet-darjeeling-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-darjeeling-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), West Bengal",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1997,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Health Education",
      "Guidance & Counselling",
      "Physical Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-darjeeling-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Transport",
      "Library",
      "Sports Complex",
      "Wi-Fi Campus",
      "Playground",
      "ICT Lab",
      "Conference Hall",
      "Science Lab",
      "Computer Lab",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Amity International School",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 61,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9973175884",
      "email": "principal@district-institute-of-education-and-training-diet-darjeeling-.org",
      "admissionOfficeContact": "+91 8720789359",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-darjeeling-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-darjeeling-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-darjeeling-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bengaluru-26",
    "name": "College of Teacher Education (CTE), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Campus Road, Near Education Hub, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bengaluru+Bengaluru",
    "website": "https://college-of-teacher-education-cte-bengaluru-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bengaluru-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1961,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Ph.D. in Education",
      "B.Ed.",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Guidance & Counselling",
      "Educational Psychology",
      "Mathematics Education",
      "ICT in Education",
      "Social Science Education",
      "Early Childhood Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bengaluru-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Library",
      "Psychology Lab",
      "Language Lab",
      "Mathematics Lab",
      "Educational Technology Lab",
      "Medical Facility",
      "ICT Lab",
      "Hostel",
      "Seminar Hall",
      "Digital Library",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Modern School New Delhi",
        "Amity International School",
        "DAV Public Schools",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 65,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 8705736917",
      "email": "principal@college-of-teacher-education-cte-bengaluru-.org",
      "admissionOfficeContact": "+91 7101208167",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bengaluru-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bengaluru-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-moradabad-27",
    "name": "College of Teacher Education (CTE), Moradabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "city": "Moradabad",
    "address": "Campus Road, Near Education Hub, Moradabad, Moradabad, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Moradabad+Moradabad",
    "website": "https://college-of-teacher-education-cte-moradabad-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-moradabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2007,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "ECCE",
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Teacher Leadership",
      "Physical Education",
      "Social Science Education",
      "Educational Psychology",
      "Early Childhood Education",
      "ICT in Education",
      "Mathematics Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-moradabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Hostel",
      "Conference Hall",
      "Seminar Hall",
      "Library",
      "Wi-Fi Campus",
      "Transport",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International",
        "Podar International",
        "DAV Public Schools",
        "Army Public School (APS)",
        "Delhi Public School (DPS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 34,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7160446027",
      "email": "principal@college-of-teacher-education-cte-moradabad-.org",
      "admissionOfficeContact": "+91 8953064591",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-moradabad-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-moradabad-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-moradabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-gandhinagar-28",
    "name": "District Institute of Education & Training (DIET), Gandhinagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Gandhinagar",
    "city": "Gandhinagar",
    "address": "Campus Road, Near Education Hub, Gandhinagar, Gandhinagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Gandhinagar+Gandhinagar",
    "website": "https://district-institute-of-education-and-training-diet-gandhinagar-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-gandhinagar-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Gujarat",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2020,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.P.Ed.",
      "D.El.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Early Childhood Education",
      "Special Education",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-gandhinagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Teaching Laboratories",
      "Library",
      "Playground",
      "Computer Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Delhi Public School (DPS)",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 31,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 7994113352",
      "email": "principal@district-institute-of-education-and-training-diet-gandhinagar-.org",
      "admissionOfficeContact": "+91 8554337225",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-gandhinagar-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-gandhinagar-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-gandhinagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-north-west-delhi-29",
    "name": "District Institute of Education & Training (DIET), North West Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North West Delhi",
    "city": "North West Delhi",
    "address": "Campus Road, Near Education Hub, North West Delhi, North West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+North+West+Delhi+North West Delhi",
    "website": "https://district-institute-of-education-and-training-diet-north-west-delhi-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-north-west-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "D.El.Ed.",
      "B.P.Ed.",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Mathematics Education",
      "Educational Psychology",
      "Adult Education",
      "Social Science Education",
      "Inclusive Education",
      "Value Education",
      "Physical Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-north-west-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Sports Complex",
      "Seminar Hall",
      "Educational Technology Lab",
      "Psychology Lab",
      "Language Lab",
      "Science Lab",
      "Playground",
      "Mathematics Lab",
      "Conference Hall",
      "Medical Facility",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Podar International",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 44,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7388961786",
      "email": "principal@district-institute-of-education-and-training-diet-north-west-delhi-.org",
      "admissionOfficeContact": "+91 7005096176",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-north-west-delhi-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-north-west-delhi-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-north-west-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-30",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Jamnagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Jamnagar",
    "city": "Jamnagar",
    "address": "Campus Road, Near Education Hub, Jamnagar, Jamnagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Jamnagar+Jamnagar",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1961,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Special Education",
      "Educational Technology",
      "Value Education",
      "Mathematics Education",
      "Guidance & Counselling",
      "Early Childhood Education",
      "Educational Administration",
      "Environmental Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Digital Library",
      "Teaching Laboratories",
      "Transport",
      "Language Lab",
      "Library",
      "Science Lab",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Army Public School (APS)",
        "Ryan International",
        "DAV Public Schools",
        "Podar International",
        "Amity International School",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 57,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9762640337",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-.org",
      "admissionOfficeContact": "+91 7152721130",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-jamnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-belagavi-31",
    "name": "District Institute of Education & Training (DIET), Belagavi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Belagavi",
    "city": "Belgaum",
    "address": "Campus Road, Near Education Hub, Belgaum, Belagavi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Belagavi+Belgaum",
    "website": "https://district-institute-of-education-and-training-diet-belagavi-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-belagavi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Karnataka",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2014,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "B.P.Ed.",
      "B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Diploma in Special Education",
      "ECCE"
    ],
    "specializations": [
      "Science Education",
      "Language Education",
      "Inclusive Education",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-belagavi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Seminar Hall",
      "Medical Facility",
      "Hostel",
      "ICT Lab",
      "Mathematics Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Delhi Public School (DPS)",
        "Podar International",
        "Army Public School (APS)",
        "Ahlcon International",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 46,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 9532218199",
      "email": "principal@district-institute-of-education-and-training-diet-belagavi-.org",
      "admissionOfficeContact": "+91 7396146586",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-belagavi-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-belagavi-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-belagavi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-patna-32",
    "name": "District Institute of Education & Training (DIET), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Campus Road, Near Education Hub, Patna, Patna, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Patna+Patna",
    "website": "https://district-institute-of-education-and-training-diet-patna-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-patna-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Bihar",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1974,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "ECCE",
      "Integrated B.Sc. B.Ed.",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Special Education",
      "Physical Education",
      "Educational Administration",
      "Value Education",
      "Teacher Leadership",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-patna-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Library",
      "Playground",
      "Sports Complex",
      "Psychology Lab",
      "ICT Lab",
      "Mathematics Lab",
      "Conference Hall",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "Amity International School",
        "Modern School New Delhi",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Ahlcon International",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 25,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9358643216",
      "email": "principal@district-institute-of-education-and-training-diet-patna-.org",
      "admissionOfficeContact": "+91 8736702258",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-patna-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-patna-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-patna-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-bharatpur-33",
    "name": "District Institute of Education & Training (DIET), Bharatpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bharatpur",
    "city": "Bharatpur",
    "address": "Campus Road, Near Education Hub, Bharatpur, Bharatpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Bharatpur+Bharatpur",
    "website": "https://district-institute-of-education-and-training-diet-bharatpur-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-bharatpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Rajasthan",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1971,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "M.P.Ed.",
      "Ph.D. in Education",
      "Integrated B.Sc. B.Ed.",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Social Science Education",
      "Teacher Leadership",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-bharatpur-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Sports Complex",
      "Psychology Lab",
      "Hostel",
      "Mathematics Lab",
      "Medical Facility",
      "ICT Lab",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Amity International School",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 36,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8583476025",
      "email": "principal@district-institute-of-education-and-training-diet-bharatpur-.org",
      "admissionOfficeContact": "+91 7347769813",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-bharatpur-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-bharatpur-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-bharatpur-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-34",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Campus Road, Near Education Hub, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Bengaluru+Bengaluru",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 39 (Teacher Education Category)",
    "yearEstablished": 1971,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "M.Ed.",
      "B.P.Ed.",
      "Ph.D. in Education",
      "Certificate in Guidance & Counselling",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Health Education",
      "Educational Administration",
      "Early Childhood Education",
      "Educational Psychology",
      "Inclusive Education",
      "Social Science Education",
      "Special Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Psychology Lab",
      "Auditorium",
      "Sports Complex",
      "Computer Lab",
      "Playground",
      "Medical Facility",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "DAV Public Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 35,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 8722982682",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-.org",
      "admissionOfficeContact": "+91 8539836153",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-gorakhpur-35",
    "name": "National Institute of Physical Education & Sports, Gorakhpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "city": "Gorakhpur",
    "address": "Campus Road, Near Education Hub, Gorakhpur, Gorakhpur, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Gorakhpur+Gorakhpur",
    "website": "https://national-institute-of-physical-education-and-sports-gorakhpur-.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-gorakhpur-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 93 (Teacher Education Category)",
    "yearEstablished": 2005,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "B.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Certificate in Guidance & Counselling",
      "B.Ed.",
      "M.P.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Guidance & Counselling",
      "Inclusive Education",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-gorakhpur-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Psychology Lab",
      "Digital Library",
      "Sports Complex",
      "Wi-Fi Campus",
      "ICT Lab",
      "Computer Lab",
      "Conference Hall",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 63,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7906296757",
      "email": "principal@national-institute-of-physical-education-and-sports-gorakhpur-.org",
      "admissionOfficeContact": "+91 7753978670",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-gorakhpur-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-gorakhpur-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-gorakhpur-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-warangal-36",
    "name": "Al-Farabi College of Teacher Education, Warangal",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Warangal",
    "city": "Warangal",
    "address": "Campus Road, Near Education Hub, Warangal, Warangal, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Warangal+Warangal",
    "website": "https://al-farabi-college-of-teacher-education-warangal-.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-warangal-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 25 (Teacher Education Category)",
    "yearEstablished": 2003,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "D.El.Ed.",
      "ECCE",
      "M.P.Ed."
    ],
    "specializations": [
      "Value Education",
      "Language Education",
      "Special Education",
      "Inclusive Education",
      "Educational Technology",
      "Curriculum & Instruction",
      "ICT in Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-warangal-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Hostel",
      "Auditorium",
      "Teaching Laboratories",
      "Library",
      "Educational Technology Lab",
      "Psychology Lab",
      "Playground",
      "Computer Lab",
      "Seminar Hall",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "Ahlcon International",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 41,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8166013032",
      "email": "principal@al-farabi-college-of-teacher-education-warangal-.org",
      "admissionOfficeContact": "+91 9584316325",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-warangal-",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-warangal-",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-warangal-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-aurangabad-37",
    "name": "College of Teacher Education (CTE), Aurangabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Aurangabad",
    "city": "Aurangabad",
    "address": "Campus Road, Near Education Hub, Aurangabad, Aurangabad, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Aurangabad+Aurangabad",
    "website": "https://college-of-teacher-education-cte-aurangabad-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-aurangabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1960,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "Integrated B.Sc. B.Ed.",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "Inclusive Education",
      "Social Science Education",
      "Adult Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-aurangabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Educational Technology Lab",
      "Computer Lab",
      "Seminar Hall",
      "Teaching Laboratories",
      "Conference Hall",
      "Playground",
      "ICT Lab",
      "Psychology Lab",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Podar International",
        "Ryan International",
        "Delhi Public School (DPS)",
        "Modern School New Delhi",
        "State Department of School Education",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 25,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 8838705386",
      "email": "principal@college-of-teacher-education-cte-aurangabad-.org",
      "admissionOfficeContact": "+91 9365824402",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-aurangabad-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-aurangabad-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-aurangabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-sikar-38",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Sikar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Sikar",
    "address": "Campus Road, Near Education Hub, Sikar, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Sikar+Sikar",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-sikar-.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-sikar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 77 (Teacher Education Category)",
    "yearEstablished": 1983,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "M.P.Ed.",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Language Education",
      "Early Childhood Education",
      "Guidance & Counselling",
      "Health Education",
      "Physical Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-sikar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Seminar Hall",
      "Psychology Lab",
      "Transport",
      "Wi-Fi Campus",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "Ryan International",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 21,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9781819602",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-sikar-.org",
      "admissionOfficeContact": "+91 7454008855",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-sikar-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-sikar-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-sikar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-higher-education-and-b.ed.-mahbubnagar-39",
    "name": "National Institute of Higher Education & B.Ed., Mahbubnagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Mahbubnagar",
    "city": "Mahbubnagar",
    "address": "Campus Road, Near Education Hub, Mahbubnagar, Mahbubnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Higher+Education+&+B.Ed.,+Mahbubnagar+Mahbubnagar",
    "website": "https://national-institute-of-higher-education-and-b.ed.-mahbubnagar-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-higher-education-and-b.ed.-mahbubnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 10 (Teacher Education Category)",
    "yearEstablished": 1970,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "Ph.D. in Education",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Physical Education",
      "Special Education",
      "Early Childhood Education",
      "Adult Education",
      "Educational Psychology",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-higher-education-and-b.ed.-mahbubnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Hostel",
      "Seminar Hall",
      "Digital Library",
      "Mathematics Lab",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International",
        "Army Public School (APS)",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 21,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 7598513677",
      "email": "principal@national-institute-of-higher-education-and-b.ed.-mahbubnagar-.org",
      "admissionOfficeContact": "+91 9863781085",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-higher-education-and-b.ed.-mahbubnagar-",
        "twitter": "https://twitter.com/national-institute-of-higher-education-and-b.ed.-mahbubnagar-",
        "linkedin": "https://linkedin.com/school/national-institute-of-higher-education-and-b.ed.-mahbubnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-ujjain-40",
    "name": "National Institute of Physical Education & Sports, Ujjain",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "city": "Ujjain",
    "address": "Campus Road, Near Education Hub, Ujjain, Ujjain, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Ujjain+Ujjain",
    "website": "https://national-institute-of-physical-education-and-sports-ujjain-.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-ujjain-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1969,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "D.El.Ed.",
      "Integrated B.A. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed.",
      "M.P.Ed."
    ],
    "specializations": [
      "Health Education",
      "Environmental Education",
      "Adult Education",
      "Social Science Education",
      "Special Education",
      "Science Education",
      "ICT in Education",
      "Mathematics Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-ujjain-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Auditorium",
      "Sports Complex",
      "Transport",
      "Medical Facility",
      "Mathematics Lab",
      "Library",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Ryan International",
        "State Department of School Education",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 63,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8714791508",
      "email": "principal@national-institute-of-physical-education-and-sports-ujjain-.org",
      "admissionOfficeContact": "+91 8427316127",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-ujjain-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-ujjain-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-ujjain-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-satna-41",
    "name": "National Institute of Physical Education & Sports, Satna",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Satna",
    "city": "Satna",
    "address": "Campus Road, Near Education Hub, Satna, Satna, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Satna+Satna",
    "website": "https://national-institute-of-physical-education-and-sports-satna-.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-satna-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2001,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Teacher Leadership",
      "Language Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-satna-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Library",
      "ICT Lab",
      "Computer Lab",
      "Digital Library",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 32,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 9447891666",
      "email": "principal@national-institute-of-physical-education-and-sports-satna-.org",
      "admissionOfficeContact": "+91 8968241099",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-satna-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-satna-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-satna-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-central-delhi-42",
    "name": "College of Teacher Education (CTE), Central Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Central Delhi",
    "city": "Central Delhi",
    "address": "Campus Road, Near Education Hub, Central Delhi, Central Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Central+Delhi+Central Delhi",
    "website": "https://college-of-teacher-education-cte-central-delhi-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-central-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 11 (Teacher Education Category)",
    "yearEstablished": 2005,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "M.P.Ed.",
      "M.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Inclusive Education",
      "Teacher Leadership",
      "Social Science Education",
      "Curriculum & Instruction",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-central-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Science Lab",
      "Sports Complex",
      "Library",
      "Educational Technology Lab",
      "Psychology Lab",
      "Language Lab",
      "Auditorium",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "DAV Public Schools",
        "Ahlcon International",
        "Podar International",
        "Army Public School (APS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 61,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 8795023088",
      "email": "principal@college-of-teacher-education-cte-central-delhi-.org",
      "admissionOfficeContact": "+91 7703176729",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-central-delhi-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-central-delhi-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-central-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-sagar-43",
    "name": "District Institute of Education & Training (DIET), Sagar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "city": "Sagar",
    "address": "Campus Road, Near Education Hub, Sagar, Sagar, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Sagar+Sagar",
    "website": "https://district-institute-of-education-and-training-diet-sagar-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-sagar-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Madhya Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2001,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Physical Education",
      "Curriculum & Instruction",
      "Mathematics Education",
      "Inclusive Education",
      "Value Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-sagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Transport",
      "Hostel",
      "ICT Lab",
      "Educational Technology Lab",
      "Mathematics Lab",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Podar International",
        "Ahlcon International",
        "Ryan International",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 57,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 7632753558",
      "email": "principal@district-institute-of-education-and-training-diet-sagar-.org",
      "admissionOfficeContact": "+91 7835725036",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-sagar-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-sagar-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-sagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-jaipur-44",
    "name": "College of Teacher Education (CTE), Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Campus Road, Near Education Hub, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Jaipur+Jaipur",
    "website": "https://college-of-teacher-education-cte-jaipur-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-jaipur-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1988,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Teacher Leadership",
      "Educational Technology",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-jaipur-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Mathematics Lab",
      "Teaching Laboratories",
      "Wi-Fi Campus",
      "Science Lab",
      "Educational Technology Lab",
      "Hostel",
      "Auditorium",
      "ICT Lab",
      "Medical Facility",
      "Transport",
      "Digital Library",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International",
        "DAV Public Schools",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 55,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9553742728",
      "email": "principal@college-of-teacher-education-cte-jaipur-.org",
      "admissionOfficeContact": "+91 9102708447",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-jaipur-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-jaipur-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-jaipur-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-jamnagar-45",
    "name": "National Institute of Physical Education & Sports, Jamnagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Jamnagar",
    "city": "Jamnagar",
    "address": "Campus Road, Near Education Hub, Jamnagar, Jamnagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Jamnagar+Jamnagar",
    "website": "https://national-institute-of-physical-education-and-sports-jamnagar-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-jamnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2013,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "ECCE",
      "B.P.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Inclusive Education",
      "Educational Technology",
      "Science Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-jamnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "ICT Lab",
      "Teaching Laboratories",
      "Auditorium",
      "Wi-Fi Campus",
      "Conference Hall",
      "Library",
      "Transport",
      "Science Lab",
      "Digital Library",
      "Mathematics Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Ryan International",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 23,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8860235809",
      "email": "principal@national-institute-of-physical-education-and-sports-jamnagar-.org",
      "admissionOfficeContact": "+91 9174509636",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-jamnagar-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-jamnagar-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-jamnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-karimnagar-46",
    "name": "National Institute of Physical Education & Sports, Karimnagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "Campus Road, Near Education Hub, Karimnagar, Karimnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Karimnagar+Karimnagar",
    "website": "https://national-institute-of-physical-education-and-sports-karimnagar-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-karimnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 34 (Teacher Education Category)",
    "yearEstablished": 2000,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Guidance & Counselling",
      "Early Childhood Education",
      "Educational Technology",
      "Educational Administration",
      "Inclusive Education",
      "Teacher Leadership",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-karimnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Language Lab",
      "Medical Facility",
      "Hostel",
      "Science Lab",
      "Auditorium",
      "Transport",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 22,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 6,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9480323219",
      "email": "principal@national-institute-of-physical-education-and-sports-karimnagar-.org",
      "admissionOfficeContact": "+91 9501020437",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-karimnagar-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-karimnagar-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-karimnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-siliguri-47",
    "name": "College of Teacher Education (CTE), Siliguri",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Siliguri",
    "address": "Campus Road, Near Education Hub, Siliguri, Darjeeling, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Siliguri+Siliguri",
    "website": "https://college-of-teacher-education-cte-siliguri-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-siliguri-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2005,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "Ph.D. in Education",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Value Education",
      "Curriculum & Instruction",
      "Science Education",
      "Early Childhood Education",
      "Guidance & Counselling",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-siliguri-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Medical Facility",
      "Educational Technology Lab",
      "Seminar Hall",
      "Science Lab",
      "Hostel",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Ahlcon International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 60,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 9794058143",
      "email": "principal@college-of-teacher-education-cte-siliguri-.org",
      "admissionOfficeContact": "+91 8300549619",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-siliguri-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-siliguri-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-siliguri-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-physical-education-lucknow-48",
    "name": "Government College of Physical Education, Lucknow",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "city": "Lucknow",
    "address": "Campus Road, Near Education Hub, Lucknow, Lucknow, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Physical+Education,+Lucknow+Lucknow",
    "website": "https://government-college-of-physical-education-lucknow-.ac.in",
    "admissionPortalUrl": "https://government-college-of-physical-education-lucknow-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1985,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "D.El.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Educational Technology",
      "Mathematics Education",
      "Special Education",
      "Value Education",
      "Social Science Education",
      "ICT in Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-physical-education-lucknow-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Digital Library",
      "Psychology Lab",
      "Auditorium",
      "Library",
      "Mathematics Lab",
      "Science Lab",
      "Seminar Hall",
      "Educational Technology Lab",
      "Medical Facility",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Podar International",
        "Amity International School",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 35,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9958191044",
      "email": "principal@government-college-of-physical-education-lucknow-.org",
      "admissionOfficeContact": "+91 9116501887",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-physical-education-lucknow-",
        "twitter": "https://twitter.com/government-college-of-physical-education-lucknow-",
        "linkedin": "https://linkedin.com/school/government-college-of-physical-education-lucknow-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-physical-education-solapur-49",
    "name": "Government College of Physical Education, Solapur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Solapur",
    "city": "Solapur",
    "address": "Campus Road, Near Education Hub, Solapur, Solapur, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Physical+Education,+Solapur+Solapur",
    "website": "https://government-college-of-physical-education-solapur-.ac.in",
    "admissionPortalUrl": "https://government-college-of-physical-education-solapur-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1964,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Curriculum & Instruction",
      "Early Childhood Education",
      "Mathematics Education",
      "Social Science Education",
      "Language Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-physical-education-solapur-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Educational Technology Lab",
      "Hostel",
      "Transport",
      "Psychology Lab",
      "Science Lab",
      "Digital Library",
      "Computer Lab",
      "Seminar Hall",
      "Medical Facility",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International",
        "Delhi Public School (DPS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 25,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 9506200761",
      "email": "principal@government-college-of-physical-education-solapur-.org",
      "admissionOfficeContact": "+91 7366737904",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-physical-education-solapur-",
        "twitter": "https://twitter.com/government-college-of-physical-education-solapur-",
        "linkedin": "https://linkedin.com/school/government-college-of-physical-education-solapur-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-south-delhi-50",
    "name": "Al-Farabi College of Teacher Education, South Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "South Delhi",
    "address": "Campus Road, Near Education Hub, South Delhi, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+South+Delhi+South Delhi",
    "website": "https://al-farabi-college-of-teacher-education-south-delhi-.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-south-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2016,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Guidance & Counselling",
      "Educational Psychology",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-south-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Library",
      "Psychology Lab",
      "Hostel",
      "Transport",
      "ICT Lab",
      "Seminar Hall",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "DAV Public Schools",
        "Army Public School (APS)",
        "Amity International School",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 42,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 9267984320",
      "email": "principal@al-farabi-college-of-teacher-education-south-delhi-.org",
      "admissionOfficeContact": "+91 8659938394",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-south-delhi-",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-south-delhi-",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-south-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-salem-51",
    "name": "Al-Farabi College of Teacher Education, Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Campus Road, Near Education Hub, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Salem+Salem",
    "website": "https://al-farabi-college-of-teacher-education-salem-.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-salem-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1993,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "M.Ed.",
      "Nursery Teacher Training (NTT)",
      "Certificate in Guidance & Counselling",
      "M.P.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Health Education",
      "Curriculum & Instruction",
      "Educational Psychology",
      "Special Education",
      "Guidance & Counselling",
      "Science Education",
      "Language Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-salem-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Playground",
      "Hostel",
      "ICT Lab",
      "Sports Complex",
      "Conference Hall",
      "Mathematics Lab",
      "Computer Lab",
      "Wi-Fi Campus",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 60,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 8180897303",
      "email": "principal@al-farabi-college-of-teacher-education-salem-.org",
      "admissionOfficeContact": "+91 7175535945",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-salem-",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-salem-",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-salem-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-ujjain-52",
    "name": "District Institute of Education & Training (DIET), Ujjain",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "city": "Ujjain",
    "address": "Campus Road, Near Education Hub, Ujjain, Ujjain, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Ujjain+Ujjain",
    "website": "https://district-institute-of-education-and-training-diet-ujjain-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-ujjain-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Madhya Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1989,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "M.P.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Environmental Education",
      "Language Education",
      "Educational Administration",
      "Inclusive Education",
      "Guidance & Counselling",
      "Special Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-ujjain-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Language Lab",
      "Teaching Laboratories",
      "Playground",
      "Computer Lab",
      "Wi-Fi Campus",
      "Psychology Lab",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ahlcon International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 59,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8698967937",
      "email": "principal@district-institute-of-education-and-training-diet-ujjain-.org",
      "admissionOfficeContact": "+91 8725527880",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-ujjain-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-ujjain-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-ujjain-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-hubli-53",
    "name": "National Institute of Physical Education & Sports, Hubli",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Dharwad",
    "city": "Hubli",
    "address": "Campus Road, Near Education Hub, Hubli, Dharwad, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Hubli+Hubli",
    "website": "https://national-institute-of-physical-education-and-sports-hubli-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-hubli-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1974,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "B.Ed.",
      "Integrated B.Sc. B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Inclusive Education",
      "Value Education",
      "Educational Administration",
      "Educational Psychology",
      "Guidance & Counselling"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-hubli-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Seminar Hall",
      "Transport",
      "Library",
      "Conference Hall",
      "Mathematics Lab",
      "ICT Lab",
      "Wi-Fi Campus",
      "Playground",
      "Auditorium",
      "Computer Lab",
      "Psychology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 62,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 8486031884",
      "email": "principal@national-institute-of-physical-education-and-sports-hubli-.org",
      "admissionOfficeContact": "+91 9756592843",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-hubli-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-hubli-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-hubli-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-sikar-54",
    "name": "College of Teacher Education (CTE), Sikar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Sikar",
    "address": "Campus Road, Near Education Hub, Sikar, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Sikar+Sikar",
    "website": "https://college-of-teacher-education-cte-sikar-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-sikar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2012,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "Integrated B.A. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Inclusive Education",
      "Social Science Education",
      "Special Education",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-sikar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Seminar Hall",
      "ICT Lab",
      "Medical Facility",
      "Teaching Laboratories",
      "Computer Lab",
      "Sports Complex",
      "Playground",
      "Conference Hall",
      "Educational Technology Lab",
      "Language Lab",
      "Psychology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Podar International",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 32,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9751195056",
      "email": "principal@college-of-teacher-education-cte-sikar-.org",
      "admissionOfficeContact": "+91 9448422010",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-sikar-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-sikar-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-sikar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-ghaziabad-55",
    "name": "Institute of Advanced Study in Education (IASE), Ghaziabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "city": "Ghaziabad",
    "address": "Campus Road, Near Education Hub, Ghaziabad, Ghaziabad, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Ghaziabad+Ghaziabad",
    "website": "https://institute-of-advanced-study-in-education-iase-ghaziabad-.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-ghaziabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2008,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.P.Ed.",
      "M.Ed.",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Inclusive Education",
      "ICT in Education",
      "Environmental Education",
      "Language Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-ghaziabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "ICT Lab",
      "Psychology Lab",
      "Auditorium",
      "Sports Complex",
      "Digital Library",
      "Conference Hall",
      "Seminar Hall",
      "Mathematics Lab",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools",
        "Army Public School (APS)",
        "Modern School New Delhi",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 56,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8491770137",
      "email": "principal@institute-of-advanced-study-in-education-iase-ghaziabad-.org",
      "admissionOfficeContact": "+91 8700889494",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-ghaziabad-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-ghaziabad-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-ghaziabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-east-delhi-56",
    "name": "District Institute of Education & Training (DIET), East Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "East Delhi",
    "city": "East Delhi",
    "address": "Campus Road, Near Education Hub, East Delhi, East Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+East+Delhi+East Delhi",
    "website": "https://district-institute-of-education-and-training-diet-east-delhi-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-east-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "M.Ed.",
      "M.P.Ed.",
      "D.El.Ed.",
      "Integrated B.Sc. B.Ed.",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "Science Education",
      "Teacher Leadership",
      "Early Childhood Education",
      "Value Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-east-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Computer Lab",
      "Seminar Hall",
      "Conference Hall",
      "Medical Facility",
      "Science Lab",
      "Educational Technology Lab",
      "Hostel",
      "Wi-Fi Campus",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International",
        "Ryan International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 39,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 8369196535",
      "email": "principal@district-institute-of-education-and-training-diet-east-delhi-.org",
      "admissionOfficeContact": "+91 8943046340",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-east-delhi-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-east-delhi-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-east-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-khammam-57",
    "name": "College of Teacher Education (CTE), Khammam",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Khammam",
    "city": "Khammam",
    "address": "Campus Road, Near Education Hub, Khammam, Khammam, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Khammam+Khammam",
    "website": "https://college-of-teacher-education-cte-khammam-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-khammam-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 15 (Teacher Education Category)",
    "yearEstablished": 1982,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "ECCE",
      "Diploma in Special Education",
      "Ph.D. in Education",
      "D.El.Ed.",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Inclusive Education",
      "Science Education",
      "Environmental Education",
      "Social Science Education",
      "Health Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-khammam-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Digital Library",
      "Science Lab",
      "Medical Facility",
      "Playground",
      "ICT Lab",
      "Sports Complex",
      "Conference Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Modern School New Delhi",
        "Ahlcon International",
        "Army Public School (APS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 48,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8874157264",
      "email": "principal@college-of-teacher-education-cte-khammam-.org",
      "admissionOfficeContact": "+91 7858040840",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-khammam-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-khammam-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-khammam-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-karimnagar-58",
    "name": "National Institute of Physical Education & Sports, Karimnagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "Campus Road, Near Education Hub, Karimnagar, Karimnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Karimnagar+Karimnagar",
    "website": "https://national-institute-of-physical-education-and-sports-karimnagar-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-karimnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2006,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Special Education",
      "Physical Education",
      "Early Childhood Education",
      "Teacher Leadership",
      "Inclusive Education",
      "Curriculum & Instruction",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-karimnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Transport",
      "Teaching Laboratories",
      "Seminar Hall",
      "Auditorium",
      "Computer Lab",
      "Hostel",
      "Digital Library",
      "Wi-Fi Campus",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools",
        "Ryan International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 39,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9627272804",
      "email": "principal@national-institute-of-physical-education-and-sports-karimnagar-.org",
      "admissionOfficeContact": "+91 8098662707",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-karimnagar-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-karimnagar-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-karimnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-davangere-59",
    "name": "National Institute of Physical Education & Sports, Davangere",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Davangere",
    "city": "Davangere",
    "address": "Campus Road, Near Education Hub, Davangere, Davangere, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Davangere+Davangere",
    "website": "https://national-institute-of-physical-education-and-sports-davangere-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-davangere-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1993,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Environmental Education",
      "Social Science Education",
      "Physical Education",
      "Educational Psychology",
      "Inclusive Education",
      "ICT in Education",
      "Early Childhood Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-davangere-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Seminar Hall",
      "Medical Facility",
      "Library",
      "Transport",
      "Conference Hall",
      "Mathematics Lab",
      "ICT Lab",
      "Playground",
      "Teaching Laboratories",
      "Psychology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Podar International",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 33,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 7518530686",
      "email": "principal@national-institute-of-physical-education-and-sports-davangere-.org",
      "admissionOfficeContact": "+91 9574957554",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-davangere-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-davangere-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-davangere-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-ratlam-60",
    "name": "College of Teacher Education (CTE), Ratlam",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ratlam",
    "city": "Ratlam",
    "address": "Campus Road, Near Education Hub, Ratlam, Ratlam, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Ratlam+Ratlam",
    "website": "https://college-of-teacher-education-cte-ratlam-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-ratlam-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1956,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Ph.D. in Education",
      "Certificate in Guidance & Counselling",
      "Diploma in Special Education",
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Social Science Education",
      "Adult Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-ratlam-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Library",
      "Wi-Fi Campus",
      "Teaching Laboratories",
      "Mathematics Lab",
      "Educational Technology Lab",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "State Department of School Education",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 48,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 6,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9271761803",
      "email": "principal@college-of-teacher-education-cte-ratlam-.org",
      "admissionOfficeContact": "+91 7016424997",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-ratlam-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-ratlam-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-ratlam-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-college-of-teacher-education-vijayawada-61",
    "name": "National College of Teacher Education, Vijayawada",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "NTR",
    "city": "Vijayawada",
    "address": "Campus Road, Near Education Hub, Vijayawada, NTR, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Teacher+Education,+Vijayawada+Vijayawada",
    "website": "https://national-college-of-teacher-education-vijayawada-.edu.in",
    "admissionPortalUrl": "https://national-college-of-teacher-education-vijayawada-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Certificate in Guidance & Counselling",
      "D.El.Ed.",
      "B.Ed.",
      "ECCE",
      "Integrated B.Sc. B.Ed."
    ],
    "specializations": [
      "Mathematics Education",
      "Social Science Education",
      "Curriculum & Instruction",
      "Science Education",
      "Special Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-college-of-teacher-education-vijayawada-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Medical Facility",
      "Library",
      "Transport",
      "Language Lab",
      "Teaching Laboratories",
      "Psychology Lab",
      "Conference Hall",
      "ICT Lab",
      "Computer Lab",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Podar International",
        "DAV Public Schools",
        "Amity International School",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 58,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9614350559",
      "email": "principal@national-college-of-teacher-education-vijayawada-.org",
      "admissionOfficeContact": "+91 7993016798",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-teacher-education-vijayawada-",
        "twitter": "https://twitter.com/national-college-of-teacher-education-vijayawada-",
        "linkedin": "https://linkedin.com/school/national-college-of-teacher-education-vijayawada-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bellary-62",
    "name": "College of Teacher Education (CTE), Bellary",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Ballari",
    "city": "Bellary",
    "address": "Campus Road, Near Education Hub, Bellary, Ballari, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bellary+Bellary",
    "website": "https://college-of-teacher-education-cte-bellary-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bellary-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 86 (Teacher Education Category)",
    "yearEstablished": 1959,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Certificate in Guidance & Counselling",
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "M.Ed.",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Special Education",
      "Educational Administration",
      "Inclusive Education",
      "Mathematics Education",
      "Language Education",
      "Environmental Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bellary-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Wi-Fi Campus",
      "Teaching Laboratories",
      "Playground",
      "Mathematics Lab",
      "Sports Complex",
      "Computer Lab",
      "ICT Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ahlcon International",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 40,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8495482352",
      "email": "principal@college-of-teacher-education-cte-bellary-.org",
      "admissionOfficeContact": "+91 8891594182",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bellary-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bellary-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bellary-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-patna-63",
    "name": "National Institute of Physical Education & Sports, Patna",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Campus Road, Near Education Hub, Patna, Patna, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Patna+Patna",
    "website": "https://national-institute-of-physical-education-and-sports-patna-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-patna-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1958,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "Nursery Teacher Training (NTT)",
      "M.P.Ed."
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Teacher Leadership",
      "Adult Education",
      "Physical Education",
      "Guidance & Counselling",
      "Language Education",
      "Educational Administration",
      "Value Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-patna-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Library",
      "Teaching Laboratories",
      "Educational Technology Lab",
      "Science Lab",
      "Conference Hall",
      "Sports Complex",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Ahlcon International",
        "Delhi Public School (DPS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 18,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7814931009",
      "email": "principal@national-institute-of-physical-education-and-sports-patna-.org",
      "admissionOfficeContact": "+91 9366378088",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-patna-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-patna-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-patna-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-dakshina-kannada-64",
    "name": "District Institute of Education & Training (DIET), Dakshina Kannada",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "city": "Mangalore",
    "address": "Campus Road, Near Education Hub, Mangalore, Dakshina Kannada, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Dakshina+Kannada+Mangalore",
    "website": "https://district-institute-of-education-and-training-diet-dakshina-kannada-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-dakshina-kannada-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Karnataka",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1968,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Inclusive Education",
      "Social Science Education",
      "Guidance & Counselling",
      "Educational Administration",
      "Educational Psychology",
      "Language Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-dakshina-kannada-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Science Lab",
      "Psychology Lab",
      "Sports Complex",
      "Digital Library",
      "Playground",
      "Mathematics Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Ryan International",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Podar International",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 45,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8076914236",
      "email": "principal@district-institute-of-education-and-training-diet-dakshina-kannada-.org",
      "admissionOfficeContact": "+91 7791885054",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-dakshina-kannada-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-dakshina-kannada-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-dakshina-kannada-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-sangli-65",
    "name": "National Institute of Physical Education & Sports, Sangli",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Sangli",
    "city": "Sangli",
    "address": "Campus Road, Near Education Hub, Sangli, Sangli, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Sangli+Sangli",
    "website": "https://national-institute-of-physical-education-and-sports-sangli-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-sangli-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2012,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Mathematics Education",
      "Educational Psychology",
      "Adult Education",
      "Teacher Leadership",
      "Physical Education",
      "Educational Administration",
      "Curriculum & Instruction",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-sangli-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Sports Complex",
      "Hostel",
      "Language Lab",
      "Playground",
      "Auditorium",
      "Mathematics Lab",
      "ICT Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Army Public School (APS)",
        "Ahlcon International",
        "DAV Public Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 37,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7991109828",
      "email": "principal@national-institute-of-physical-education-and-sports-sangli-.org",
      "admissionOfficeContact": "+91 7338747323",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-sangli-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-sangli-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-sangli-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-malda-66",
    "name": "District Institute of Education & Training (DIET), Malda",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Malda",
    "city": "Malda",
    "address": "Campus Road, Near Education Hub, Malda, Malda, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Malda+Malda",
    "website": "https://district-institute-of-education-and-training-diet-malda-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-malda-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), West Bengal",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "ECCE",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Educational Psychology",
      "Social Science Education",
      "Environmental Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-malda-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Psychology Lab",
      "Medical Facility",
      "Digital Library",
      "Library",
      "Transport",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "State Department of School Education",
        "DAV Public Schools",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 30,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 7365316543",
      "email": "principal@district-institute-of-education-and-training-diet-malda-.org",
      "admissionOfficeContact": "+91 8009364109",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-malda-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-malda-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-malda-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-pune-67",
    "name": "College of Teacher Education (CTE), Pune",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Campus Road, Near Education Hub, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Pune+Pune",
    "website": "https://college-of-teacher-education-cte-pune-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-pune-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 27 (Teacher Education Category)",
    "yearEstablished": 1999,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "B.P.Ed."
    ],
    "specializations": [
      "Guidance & Counselling",
      "ICT in Education",
      "Educational Psychology",
      "Special Education",
      "Inclusive Education",
      "Adult Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-pune-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Mathematics Lab",
      "Playground",
      "Science Lab",
      "Teaching Laboratories",
      "Transport",
      "Sports Complex",
      "Conference Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 31,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9757111241",
      "email": "principal@college-of-teacher-education-cte-pune-.org",
      "admissionOfficeContact": "+91 9861923348",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-pune-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-pune-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-pune-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-68",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Gwalior",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "city": "Gwalior",
    "address": "Campus Road, Near Education Hub, Gwalior, Gwalior, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Gwalior+Gwalior",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1955,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "Diploma in Special Education",
      "M.P.Ed.",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "D.El.Ed.",
      "ECCE"
    ],
    "specializations": [
      "Teacher Leadership",
      "Adult Education",
      "Language Education",
      "Physical Education",
      "Curriculum & Instruction",
      "Environmental Education",
      "Special Education",
      "Early Childhood Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Seminar Hall",
      "ICT Lab",
      "Science Lab",
      "Computer Lab",
      "Medical Facility",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "International Baccalaureate (IB) World Schools",
        "Army Public School (APS)",
        "State Department of School Education",
        "Ryan International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 36,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9535349257",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-.org",
      "admissionOfficeContact": "+91 8503746350",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-gwalior-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-kurnool-69",
    "name": "District Institute of Education & Training (DIET), Kurnool",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "city": "Kurnool",
    "address": "Campus Road, Near Education Hub, Kurnool, Kurnool, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Kurnool+Kurnool",
    "website": "https://district-institute-of-education-and-training-diet-kurnool-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-kurnool-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Andhra Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1968,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "D.El.Ed.",
      "Diploma in Special Education",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Curriculum & Instruction",
      "ICT in Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-kurnool-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "Digital Library",
      "Auditorium",
      "Educational Technology Lab",
      "Science Lab",
      "Language Lab",
      "Wi-Fi Campus",
      "Mathematics Lab",
      "Teaching Laboratories",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Podar International",
        "Army Public School (APS)",
        "State Department of School Education",
        "Ryan International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 42,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8645099669",
      "email": "principal@district-institute-of-education-and-training-diet-kurnool-.org",
      "admissionOfficeContact": "+91 8125638803",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-kurnool-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-kurnool-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-kurnool-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-katihar-70",
    "name": "Institute of Advanced Study in Education (IASE), Katihar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Katihar",
    "city": "Katihar",
    "address": "Campus Road, Near Education Hub, Katihar, Katihar, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Katihar+Katihar",
    "website": "https://institute-of-advanced-study-in-education-iase-katihar-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-katihar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2012,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "B.P.Ed.",
      "M.P.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Physical Education",
      "Language Education",
      "Science Education",
      "Inclusive Education",
      "Educational Administration",
      "Special Education",
      "Mathematics Education",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-katihar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Digital Library",
      "Sports Complex",
      "Medical Facility",
      "Mathematics Lab",
      "Wi-Fi Campus",
      "ICT Lab",
      "Hostel",
      "Auditorium",
      "Computer Lab",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "DAV Public Schools",
        "Ahlcon International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 30,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 7902339357",
      "email": "principal@institute-of-advanced-study-in-education-iase-katihar-.org",
      "admissionOfficeContact": "+91 8237396878",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-katihar-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-katihar-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-katihar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bhilwara-71",
    "name": "Institute of Advanced Study in Education (IASE), Bhilwara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bhilwara",
    "city": "Bhilwara",
    "address": "Campus Road, Near Education Hub, Bhilwara, Bhilwara, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bhilwara+Bhilwara",
    "website": "https://institute-of-advanced-study-in-education-iase-bhilwara-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bhilwara-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 45 (Teacher Education Category)",
    "yearEstablished": 1990,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "D.El.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Language Education",
      "Health Education",
      "Teacher Leadership",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bhilwara-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Library",
      "Sports Complex",
      "Educational Technology Lab",
      "Conference Hall",
      "Playground",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "International Baccalaureate (IB) World Schools",
        "Ryan International",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 24,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7022884857",
      "email": "principal@institute-of-advanced-study-in-education-iase-bhilwara-.org",
      "admissionOfficeContact": "+91 7565020004",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bhilwara-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bhilwara-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bhilwara-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-72",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Aurangabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Aurangabad",
    "city": "Aurangabad",
    "address": "Campus Road, Near Education Hub, Aurangabad, Aurangabad, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Aurangabad+Aurangabad",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2006,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "Integrated B.A. B.Ed.",
      "ECCE",
      "M.Ed.",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Health Education",
      "Social Science Education",
      "Educational Technology",
      "ICT in Education",
      "Environmental Education",
      "Guidance & Counselling",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Transport",
      "Seminar Hall",
      "Playground",
      "Computer Lab",
      "Auditorium",
      "Science Lab",
      "Psychology Lab",
      "Sports Complex",
      "Conference Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ryan International",
        "Modern School New Delhi",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 56,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8964416012",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-.org",
      "admissionOfficeContact": "+91 7873399864",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-aurangabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bardhaman-73",
    "name": "College of Teacher Education (CTE), Bardhaman",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "city": "Bardhaman",
    "address": "Campus Road, Near Education Hub, Bardhaman, Purba Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bardhaman+Bardhaman",
    "website": "https://college-of-teacher-education-cte-bardhaman-.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bardhaman-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2009,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "B.P.Ed.",
      "D.El.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Educational Technology",
      "Health Education",
      "Guidance & Counselling",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bardhaman-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Medical Facility",
      "Teaching Laboratories",
      "Science Lab",
      "Computer Lab",
      "Sports Complex",
      "Mathematics Lab",
      "Library",
      "Educational Technology Lab",
      "Language Lab",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Ryan International",
        "Ahlcon International",
        "Army Public School (APS)",
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 64,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8928280096",
      "email": "principal@college-of-teacher-education-cte-bardhaman-.org",
      "admissionOfficeContact": "+91 9531276793",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bardhaman-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bardhaman-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bardhaman-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-varanasi-74",
    "name": "District Institute of Education & Training (DIET), Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Campus Road, Near Education Hub, Varanasi, Varanasi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Varanasi+Varanasi",
    "website": "https://district-institute-of-education-and-training-diet-varanasi-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-varanasi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Uttar Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1976,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Guidance & Counselling",
      "ICT in Education",
      "Language Education",
      "Special Education",
      "Curriculum & Instruction",
      "Educational Administration",
      "Social Science Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-varanasi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Library",
      "Wi-Fi Campus",
      "Digital Library",
      "Psychology Lab",
      "Mathematics Lab",
      "Playground",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Podar International",
        "Ahlcon International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 27,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9874635484",
      "email": "principal@district-institute-of-education-and-training-diet-varanasi-.org",
      "admissionOfficeContact": "+91 7992069274",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-varanasi-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-varanasi-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-varanasi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-teacher-education-bengaluru-75",
    "name": "Government College of Teacher Education, Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Campus Road, Near Education Hub, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Teacher+Education,+Bengaluru+Bengaluru",
    "website": "https://government-college-of-teacher-education-bengaluru-.ac.in",
    "admissionPortalUrl": "https://government-college-of-teacher-education-bengaluru-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Diploma in Special Education",
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "M.P.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Science Education",
      "Health Education",
      "Social Science Education",
      "Guidance & Counselling",
      "Value Education",
      "Language Education",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-teacher-education-bengaluru-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Medical Facility",
      "Mathematics Lab",
      "Computer Lab",
      "Seminar Hall",
      "Psychology Lab",
      "Wi-Fi Campus",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Ryan International",
        "Ahlcon International",
        "State Department of School Education",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 45,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7368159128",
      "email": "principal@government-college-of-teacher-education-bengaluru-.org",
      "admissionOfficeContact": "+91 9653545934",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-teacher-education-bengaluru-",
        "twitter": "https://twitter.com/government-college-of-teacher-education-bengaluru-",
        "linkedin": "https://linkedin.com/school/government-college-of-teacher-education-bengaluru-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-76",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Belgaum",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Belagavi",
    "city": "Belgaum",
    "address": "Campus Road, Near Education Hub, Belgaum, Belagavi, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Belgaum+Belgaum",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1979,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "Language Education",
      "Educational Technology",
      "Value Education",
      "Special Education",
      "Educational Administration",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Auditorium",
      "Seminar Hall",
      "Sports Complex",
      "Digital Library",
      "ICT Lab",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "DAV Public Schools",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 39,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8570244713",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-.org",
      "admissionOfficeContact": "+91 7117503219",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-belgaum-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-vijayawada-77",
    "name": "Institute of Advanced Study in Education (IASE), Vijayawada",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "NTR",
    "city": "Vijayawada",
    "address": "Campus Road, Near Education Hub, Vijayawada, NTR, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Vijayawada+Vijayawada",
    "website": "https://institute-of-advanced-study-in-education-iase-vijayawada-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-vijayawada-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1989,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "Diploma in Special Education",
      "M.Ed.",
      "B.P.Ed.",
      "D.El.Ed.",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Special Education",
      "Educational Psychology",
      "Physical Education",
      "Guidance & Counselling",
      "Inclusive Education",
      "Educational Technology",
      "Mathematics Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-vijayawada-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Computer Lab",
      "Wi-Fi Campus",
      "Teaching Laboratories",
      "Educational Technology Lab",
      "Library",
      "Auditorium",
      "Mathematics Lab",
      "Medical Facility",
      "Seminar Hall",
      "Hostel",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Podar International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 64,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9116221402",
      "email": "principal@institute-of-advanced-study-in-education-iase-vijayawada-.org",
      "admissionOfficeContact": "+91 8789946979",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-vijayawada-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-vijayawada-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-vijayawada-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-mumbai-city-78",
    "name": "District Institute of Education & Training (DIET), Mumbai City",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "Campus Road, Near Education Hub, Mumbai, Mumbai City, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Mumbai+City+Mumbai",
    "website": "https://district-institute-of-education-and-training-diet-mumbai-city-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-mumbai-city-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Maharashtra",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 54 (Teacher Education Category)",
    "yearEstablished": 1975,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Mathematics Education",
      "Language Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-mumbai-city-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Language Lab",
      "Science Lab",
      "Psychology Lab",
      "Library",
      "ICT Lab",
      "Seminar Hall",
      "Conference Hall",
      "Teaching Laboratories",
      "Playground",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "State Department of School Education",
        "Ahlcon International",
        "Ryan International",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 19,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7951399537",
      "email": "principal@district-institute-of-education-and-training-diet-mumbai-city-.org",
      "admissionOfficeContact": "+91 8872851013",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-mumbai-city-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-mumbai-city-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-mumbai-city-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-hyderabad-79",
    "name": "District Institute of Education & Training (DIET), Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Campus Road, Near Education Hub, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Hyderabad+Hyderabad",
    "website": "https://district-institute-of-education-and-training-diet-hyderabad-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-hyderabad-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Telangana",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1989,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Ph.D. in Education",
      "ECCE",
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Educational Technology",
      "Mathematics Education",
      "Value Education",
      "Educational Administration",
      "Health Education",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-hyderabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Hostel",
      "Digital Library",
      "Library",
      "Language Lab",
      "Educational Technology Lab",
      "Teaching Laboratories",
      "Computer Lab",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Amity International School",
        "Army Public School (APS)",
        "Ahlcon International",
        "Modern School New Delhi",
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 55,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9811100975",
      "email": "principal@district-institute-of-education-and-training-diet-hyderabad-.org",
      "admissionOfficeContact": "+91 7336653354",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-hyderabad-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-hyderabad-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-hyderabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-sagar-80",
    "name": "Institute of Advanced Study in Education (IASE), Sagar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "city": "Sagar",
    "address": "Campus Road, Near Education Hub, Sagar, Sagar, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Sagar+Sagar",
    "website": "https://institute-of-advanced-study-in-education-iase-sagar-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-sagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 77 (Teacher Education Category)",
    "yearEstablished": 1987,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "ECCE",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "Certificate in Guidance & Counselling",
      "Ph.D. in Education",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Educational Psychology",
      "Inclusive Education",
      "Physical Education",
      "Curriculum & Instruction",
      "ICT in Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-sagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "ICT Lab",
      "Psychology Lab",
      "Teaching Laboratories",
      "Sports Complex",
      "Playground",
      "Science Lab",
      "Transport",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "Amity International School",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 21,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 8629152519",
      "email": "principal@institute-of-advanced-study-in-education-iase-sagar-.org",
      "admissionOfficeContact": "+91 9421229911",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-sagar-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-sagar-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-sagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-pune-81",
    "name": "College of Teacher Education (CTE), Pune",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Campus Road, Near Education Hub, Pune, Pune, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Pune+Pune",
    "website": "https://college-of-teacher-education-cte-pune-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-pune-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 48 (Teacher Education Category)",
    "yearEstablished": 1973,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "B.Ed.",
      "M.Ed.",
      "D.El.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Special Education",
      "ICT in Education",
      "Value Education",
      "Physical Education",
      "Social Science Education",
      "Guidance & Counselling",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-pune-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Medical Facility",
      "Conference Hall",
      "Language Lab",
      "ICT Lab",
      "Computer Lab",
      "Educational Technology Lab",
      "Playground",
      "Seminar Hall",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "International Baccalaureate (IB) World Schools",
        "Ryan International",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 39,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 9640241478",
      "email": "principal@college-of-teacher-education-cte-pune-.org",
      "admissionOfficeContact": "+91 9289807282",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-pune-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-pune-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-pune-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-coimbatore-82",
    "name": "Institute of Advanced Study in Education (IASE), Coimbatore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "city": "Coimbatore",
    "address": "Campus Road, Near Education Hub, Coimbatore, Coimbatore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Coimbatore+Coimbatore",
    "website": "https://institute-of-advanced-study-in-education-iase-coimbatore-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-coimbatore-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 69 (Teacher Education Category)",
    "yearEstablished": 2019,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)"
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Physical Education",
      "Guidance & Counselling",
      "Adult Education",
      "Health Education",
      "Language Education",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-coimbatore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "ICT Lab",
      "Conference Hall",
      "Sports Complex",
      "Computer Lab",
      "Hostel",
      "Library",
      "Teaching Laboratories",
      "Language Lab",
      "Psychology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Army Public School (APS)",
        "Amity International School",
        "Modern School New Delhi",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 44,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8670094552",
      "email": "principal@institute-of-advanced-study-in-education-iase-coimbatore-.org",
      "admissionOfficeContact": "+91 8952825372",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-coimbatore-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-coimbatore-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-coimbatore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-bareilly-83",
    "name": "District Institute of Education & Training (DIET), Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Campus Road, Near Education Hub, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Bareilly+Bareilly",
    "website": "https://district-institute-of-education-and-training-diet-bareilly-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-bareilly-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Uttar Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2019,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "B.P.Ed.",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "ICT in Education",
      "Educational Administration",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-bareilly-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Sports Complex",
      "Seminar Hall",
      "ICT Lab",
      "Transport",
      "Conference Hall",
      "Psychology Lab",
      "Hostel",
      "Medical Facility",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 55,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 7486130804",
      "email": "principal@district-institute-of-education-and-training-diet-bareilly-.org",
      "admissionOfficeContact": "+91 7848012688",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-bareilly-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-bareilly-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-bareilly-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-arrah-84",
    "name": "National Institute of Physical Education & Sports, Arrah",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Bhojpur",
    "city": "Arrah",
    "address": "Campus Road, Near Education Hub, Arrah, Bhojpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Arrah+Arrah",
    "website": "https://national-institute-of-physical-education-and-sports-arrah-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-arrah-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1956,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "M.P.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "Ph.D. in Education",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "Educational Psychology",
      "Inclusive Education",
      "Teacher Leadership",
      "Adult Education",
      "Value Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-arrah-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Computer Lab",
      "Conference Hall",
      "Digital Library",
      "Science Lab",
      "Mathematics Lab",
      "Seminar Hall",
      "Teaching Laboratories",
      "Language Lab",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 27,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 9720476438",
      "email": "principal@national-institute-of-physical-education-and-sports-arrah-.org",
      "admissionOfficeContact": "+91 8220101080",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-arrah-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-arrah-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-arrah-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-aligarh-85",
    "name": "Mahatma Gandhi College of Teacher Education, Aligarh",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "city": "Aligarh",
    "address": "Campus Road, Near Education Hub, Aligarh, Aligarh, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Aligarh+Aligarh",
    "website": "https://mahatma-gandhi-college-of-teacher-education-aligarh-.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-aligarh-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 32 (Teacher Education Category)",
    "yearEstablished": 2000,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "D.El.Ed.",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Inclusive Education",
      "ICT in Education",
      "Value Education",
      "Physical Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-aligarh-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Science Lab",
      "ICT Lab",
      "Hostel",
      "Library",
      "Sports Complex",
      "Wi-Fi Campus",
      "Medical Facility",
      "Digital Library",
      "Seminar Hall",
      "Computer Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "State Department of School Education",
        "DAV Public Schools",
        "Modern School New Delhi",
        "Ahlcon International",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 48,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8187375985",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-aligarh-.org",
      "admissionOfficeContact": "+91 8065876130",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-aligarh-",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-aligarh-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-aligarh-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-86",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Campus Road, Near Education Hub, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Mysore+Mysore",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-.ac.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 89 (Teacher Education Category)",
    "yearEstablished": 1967,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Integrated B.Sc. B.Ed.",
      "Integrated B.A. B.Ed.",
      "B.P.Ed.",
      "B.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Inclusive Education",
      "Special Education",
      "Health Education",
      "Mathematics Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Playground",
      "Mathematics Lab",
      "Psychology Lab",
      "Medical Facility",
      "Language Lab",
      "Hostel",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Modern School New Delhi",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 61,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8550036159",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-.org",
      "admissionOfficeContact": "+91 7904940353",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-mysore-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-east-delhi-87",
    "name": "National Institute of Physical Education & Sports, East Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "East Delhi",
    "city": "East Delhi",
    "address": "Campus Road, Near Education Hub, East Delhi, East Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+East+Delhi+East Delhi",
    "website": "https://national-institute-of-physical-education-and-sports-east-delhi-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-east-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1957,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "D.El.Ed.",
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "ICT in Education",
      "Educational Technology",
      "Mathematics Education",
      "Curriculum & Instruction",
      "Inclusive Education",
      "Educational Administration",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-east-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Educational Technology Lab",
      "Psychology Lab",
      "Wi-Fi Campus",
      "Transport",
      "Auditorium",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Ryan International",
        "Modern School New Delhi",
        "Delhi Public School (DPS)",
        "Podar International",
        "Amity International School",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 54,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7870285517",
      "email": "principal@national-institute-of-physical-education-and-sports-east-delhi-.org",
      "admissionOfficeContact": "+91 9338918290",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-east-delhi-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-east-delhi-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-east-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-khammam-88",
    "name": "Mahatma Gandhi College of Teacher Education, Khammam",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Khammam",
    "city": "Khammam",
    "address": "Campus Road, Near Education Hub, Khammam, Khammam, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Khammam+Khammam",
    "website": "https://mahatma-gandhi-college-of-teacher-education-khammam-.ac.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-khammam-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2001,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Certificate in Guidance & Counselling",
      "ECCE",
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Adult Education",
      "Value Education",
      "Educational Technology",
      "Early Childhood Education",
      "ICT in Education",
      "Environmental Education",
      "Inclusive Education",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-khammam-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Conference Hall",
      "Mathematics Lab",
      "Computer Lab",
      "Playground",
      "Library",
      "Psychology Lab",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Podar International",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 52,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 7579117868",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-khammam-.org",
      "admissionOfficeContact": "+91 8116727273",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-khammam-",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-khammam-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-khammam-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-mehsana-89",
    "name": "Institute of Advanced Study in Education (IASE), Mehsana",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Mehsana",
    "city": "Mehsana",
    "address": "Campus Road, Near Education Hub, Mehsana, Mehsana, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Mehsana+Mehsana",
    "website": "https://institute-of-advanced-study-in-education-iase-mehsana-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-mehsana-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1975,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "M.P.Ed.",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Physical Education",
      "Special Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-mehsana-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Science Lab",
      "Psychology Lab",
      "Seminar Hall",
      "Digital Library",
      "Playground",
      "Wi-Fi Campus",
      "Transport",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Podar International",
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 28,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 9815522963",
      "email": "principal@institute-of-advanced-study-in-education-iase-mehsana-.org",
      "admissionOfficeContact": "+91 8435173551",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-mehsana-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-mehsana-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-mehsana-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-nizamabad-90",
    "name": "National Institute of Physical Education & Sports, Nizamabad",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Nizamabad",
    "city": "Nizamabad",
    "address": "Campus Road, Near Education Hub, Nizamabad, Nizamabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Nizamabad+Nizamabad",
    "website": "https://national-institute-of-physical-education-and-sports-nizamabad-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-nizamabad-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2013,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.P.Ed.",
      "Ph.D. in Education",
      "Integrated B.A. B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Value Education",
      "Mathematics Education",
      "Educational Technology",
      "Social Science Education",
      "ICT in Education",
      "Early Childhood Education",
      "Language Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-nizamabad-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Sports Complex",
      "Library",
      "Medical Facility",
      "Wi-Fi Campus",
      "Language Lab",
      "Mathematics Lab",
      "Computer Lab",
      "Conference Hall",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Ryan International",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 55,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7311683913",
      "email": "principal@national-institute-of-physical-education-and-sports-nizamabad-.org",
      "admissionOfficeContact": "+91 8891080980",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-nizamabad-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-nizamabad-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-nizamabad-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-darbhanga-91",
    "name": "Institute of Advanced Study in Education (IASE), Darbhanga",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Darbhanga",
    "city": "Darbhanga",
    "address": "Campus Road, Near Education Hub, Darbhanga, Darbhanga, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Darbhanga+Darbhanga",
    "website": "https://institute-of-advanced-study-in-education-iase-darbhanga-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-darbhanga-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1995,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "Diploma in Special Education",
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "Ph.D. in Education",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Health Education",
      "Inclusive Education",
      "Curriculum & Instruction",
      "Educational Administration",
      "Educational Psychology",
      "Guidance & Counselling"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-darbhanga-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Wi-Fi Campus",
      "Transport",
      "Mathematics Lab",
      "Language Lab",
      "Digital Library",
      "Hostel",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Army Public School (APS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "State Department of School Education",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 21,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 8646450304",
      "email": "principal@institute-of-advanced-study-in-education-iase-darbhanga-.org",
      "admissionOfficeContact": "+91 8865737587",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-darbhanga-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-darbhanga-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-darbhanga-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-south-west-delhi-92",
    "name": "Al-Farabi College of Teacher Education, South West Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "South West Delhi",
    "address": "Campus Road, Near Education Hub, South West Delhi, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+South+West+Delhi+South West Delhi",
    "website": "https://al-farabi-college-of-teacher-education-south-west-delhi-.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-south-west-delhi-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 8 (Teacher Education Category)",
    "yearEstablished": 1952,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "Certificate in Guidance & Counselling",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Health Education",
      "Value Education",
      "Guidance & Counselling",
      "Mathematics Education",
      "Special Education",
      "Language Education",
      "ICT in Education",
      "Social Science Education",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-south-west-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Library",
      "Computer Lab",
      "Digital Library",
      "Sports Complex",
      "Playground",
      "Mathematics Lab",
      "Wi-Fi Campus",
      "Seminar Hall",
      "Auditorium",
      "Educational Technology Lab",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "Podar International",
        "Ahlcon International",
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 40,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9132400053",
      "email": "principal@al-farabi-college-of-teacher-education-south-west-delhi-.org",
      "admissionOfficeContact": "+91 9489108215",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-south-west-delhi-",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-south-west-delhi-",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-south-west-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-sikar-93",
    "name": "College of Teacher Education (CTE), Sikar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Sikar",
    "address": "Campus Road, Near Education Hub, Sikar, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Sikar+Sikar",
    "website": "https://college-of-teacher-education-cte-sikar-.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-sikar-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1995,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.P.Ed.",
      "Diploma in Special Education",
      "D.El.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Value Education",
      "Educational Administration",
      "Mathematics Education",
      "ICT in Education",
      "Educational Psychology",
      "Physical Education",
      "Early Childhood Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-sikar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Conference Hall",
      "Playground",
      "Library",
      "Auditorium",
      "Sports Complex",
      "ICT Lab",
      "Science Lab",
      "Teaching Laboratories",
      "Transport",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Podar International",
        "Delhi Public School (DPS)",
        "Ryan International",
        "Amity International School",
        "Army Public School (APS)",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 54,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8958622027",
      "email": "principal@college-of-teacher-education-cte-sikar-.org",
      "admissionOfficeContact": "+91 9230662056",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-sikar-",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-sikar-",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-sikar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-bellary-94",
    "name": "National Institute of Physical Education & Sports, Bellary",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Ballari",
    "city": "Bellary",
    "address": "Campus Road, Near Education Hub, Bellary, Ballari, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Bellary+Bellary",
    "website": "https://national-institute-of-physical-education-and-sports-bellary-.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-bellary-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2019,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "D.El.Ed.",
      "Ph.D. in Education",
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Special Education",
      "Curriculum & Instruction",
      "Environmental Education",
      "Inclusive Education",
      "Science Education",
      "Educational Administration",
      "Guidance & Counselling"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-bellary-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Medical Facility",
      "Wi-Fi Campus",
      "Teaching Laboratories",
      "Seminar Hall",
      "Hostel",
      "Conference Hall",
      "Language Lab",
      "Digital Library",
      "Computer Lab",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 57,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7579109345",
      "email": "principal@national-institute-of-physical-education-and-sports-bellary-.org",
      "admissionOfficeContact": "+91 7313229968",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-bellary-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-bellary-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-bellary-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-arrah-95",
    "name": "National Institute of Physical Education & Sports, Arrah",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Bhojpur",
    "city": "Arrah",
    "address": "Campus Road, Near Education Hub, Arrah, Bhojpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Arrah+Arrah",
    "website": "https://national-institute-of-physical-education-and-sports-arrah-.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-arrah-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1979,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "Diploma in Special Education",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "M.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Science Education",
      "Social Science Education",
      "Educational Psychology",
      "Educational Administration",
      "Guidance & Counselling",
      "Value Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-arrah-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Library",
      "Hostel",
      "Transport",
      "Medical Facility",
      "Computer Lab",
      "Mathematics Lab",
      "Digital Library",
      "Auditorium",
      "Psychology Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 58,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 9017972944",
      "email": "principal@national-institute-of-physical-education-and-sports-arrah-.org",
      "admissionOfficeContact": "+91 8891924572",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-arrah-",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-arrah-",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-arrah-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-khammam-96",
    "name": "Institute of Advanced Study in Education (IASE), Khammam",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Khammam",
    "city": "Khammam",
    "address": "Campus Road, Near Education Hub, Khammam, Khammam, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Khammam+Khammam",
    "website": "https://institute-of-advanced-study-in-education-iase-khammam-.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-khammam-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1976,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Science Education",
      "Early Childhood Education",
      "Social Science Education",
      "Special Education",
      "Environmental Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-khammam-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Transport",
      "Science Lab",
      "ICT Lab",
      "Digital Library",
      "Seminar Hall",
      "Medical Facility",
      "Teaching Laboratories",
      "Educational Technology Lab",
      "Sports Complex",
      "Psychology Lab",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 43,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7791906507",
      "email": "principal@institute-of-advanced-study-in-education-iase-khammam-.org",
      "admissionOfficeContact": "+91 7351602850",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-khammam-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-khammam-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-khammam-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-north-delhi-97",
    "name": "District Institute of Education & Training (DIET), North Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North Delhi",
    "city": "North Delhi",
    "address": "Campus Road, Near Education Hub, North Delhi, North Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+North+Delhi+North Delhi",
    "website": "https://district-institute-of-education-and-training-diet-north-delhi-.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-north-delhi-.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Rank 34 (Teacher Education Category)",
    "yearEstablished": 1998,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "D.El.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Teacher Leadership",
      "Language Education",
      "Environmental Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-north-delhi-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Mathematics Lab",
      "ICT Lab",
      "Hostel",
      "Psychology Lab",
      "Digital Library",
      "Computer Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Podar International",
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Ahlcon International",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 32,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8066816002",
      "email": "principal@district-institute-of-education-and-training-diet-north-delhi-.org",
      "admissionOfficeContact": "+91 7428691079",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-north-delhi-",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-north-delhi-",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-north-delhi-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-karimnagar-98",
    "name": "Mahatma Gandhi College of Teacher Education, Karimnagar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "Campus Road, Near Education Hub, Karimnagar, Karimnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Karimnagar+Karimnagar",
    "website": "https://mahatma-gandhi-college-of-teacher-education-karimnagar-.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-karimnagar-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Ph.D. in Education",
      "D.El.Ed.",
      "B.P.Ed.",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Language Education",
      "Social Science Education",
      "Guidance & Counselling",
      "Early Childhood Education",
      "ICT in Education",
      "Educational Technology",
      "Physical Education",
      "Mathematics Education",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-karimnagar-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Psychology Lab",
      "Auditorium",
      "Medical Facility",
      "Hostel",
      "Conference Hall",
      "ICT Lab",
      "Seminar Hall",
      "Teaching Laboratories",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Amity International School",
        "Modern School New Delhi",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 37,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7812461493",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-karimnagar-.org",
      "admissionOfficeContact": "+91 7880000184",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-karimnagar-",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-karimnagar-",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-karimnagar-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-patna-99",
    "name": "Institute of Advanced Study in Education (IASE), Patna",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna",
    "city": "Patna",
    "address": "Campus Road, Near Education Hub, Patna, Patna, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Patna+Patna",
    "website": "https://institute-of-advanced-study-in-education-iase-patna-.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-patna-.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 27 (Teacher Education Category)",
    "yearEstablished": 1985,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "M.P.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Educational Psychology",
      "Science Education",
      "Teacher Leadership",
      "Social Science Education",
      "Inclusive Education",
      "Guidance & Counselling",
      "Physical Education",
      "Educational Administration",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-patna-.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Educational Technology Lab",
      "Digital Library",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Mathematics Lab",
      "ICT Lab",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "DAV Public Schools",
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 49,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7378461398",
      "email": "principal@institute-of-advanced-study-in-education-iase-patna-.org",
      "admissionOfficeContact": "+91 8740255021",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-patna-",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-patna-",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-patna-"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-karimnagar-100",
    "name": "Al-Farabi College of Teacher Education, Karimnagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar",
    "city": "Karimnagar",
    "address": "Campus Road, Near Education Hub, Karimnagar, Karimnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Karimnagar+Karimnagar",
    "website": "https://al-farabi-college-of-teacher-education-karimnagar-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-karimnagar-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Rank 38 (Teacher Education Category)",
    "yearEstablished": 2012,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "B.Ed.",
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)"
    ],
    "specializations": [
      "Environmental Education",
      "Social Science Education",
      "Special Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-karimnagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Computer Lab",
      "Science Lab",
      "Medical Facility",
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Mathematics Lab",
      "Seminar Hall",
      "Auditorium"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 62,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8374286012",
      "email": "principal@al-farabi-college-of-teacher-education-karimnagar-1.org",
      "admissionOfficeContact": "+91 7855250822",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-karimnagar-1",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-karimnagar-1",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-karimnagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bhilwara-101",
    "name": "College of Teacher Education (CTE), Bhilwara",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bhilwara",
    "city": "Bhilwara",
    "address": "Campus Road, Near Education Hub, Bhilwara, Bhilwara, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bhilwara+Bhilwara",
    "website": "https://college-of-teacher-education-cte-bhilwara-1.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bhilwara-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2000,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Educational Technology",
      "Guidance & Counselling",
      "Special Education",
      "Value Education",
      "Educational Psychology",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bhilwara-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Sports Complex",
      "Teaching Laboratories",
      "Psychology Lab",
      "Medical Facility",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Amity International School",
        "Ryan International",
        "Army Public School (APS)",
        "Podar International",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 19,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7579900741",
      "email": "principal@college-of-teacher-education-cte-bhilwara-1.org",
      "admissionOfficeContact": "+91 9375137504",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bhilwara-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bhilwara-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bhilwara-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-vadodara-102",
    "name": "College of Teacher Education (CTE), Vadodara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara",
    "city": "Vadodara",
    "address": "Campus Road, Near Education Hub, Vadodara, Vadodara, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Vadodara+Vadodara",
    "website": "https://college-of-teacher-education-cte-vadodara-1.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-vadodara-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1993,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.Sc. B.Ed.",
      "M.Ed.",
      "B.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "ECCE",
      "Integrated B.A. B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Educational Psychology",
      "Educational Administration",
      "Curriculum & Instruction",
      "Educational Technology",
      "Science Education",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-vadodara-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Auditorium",
      "Psychology Lab",
      "ICT Lab",
      "Library",
      "Science Lab",
      "Medical Facility",
      "Mathematics Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 64,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7904593223",
      "email": "principal@college-of-teacher-education-cte-vadodara-1.org",
      "admissionOfficeContact": "+91 9367806583",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-vadodara-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-vadodara-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-vadodara-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bareilly-103",
    "name": "College of Teacher Education (CTE), Bareilly",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "city": "Bareilly",
    "address": "Campus Road, Near Education Hub, Bareilly, Bareilly, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bareilly+Bareilly",
    "website": "https://college-of-teacher-education-cte-bareilly-1.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bareilly-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1991,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "ECCE",
      "Ph.D. in Education",
      "Certificate in Guidance & Counselling"
    ],
    "specializations": [
      "Adult Education",
      "Early Childhood Education",
      "Language Education",
      "Teacher Leadership",
      "Educational Administration",
      "Health Education",
      "Physical Education",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bareilly-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Medical Facility",
      "Wi-Fi Campus",
      "Digital Library",
      "Educational Technology Lab",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ryan International",
        "Army Public School (APS)",
        "Amity International School",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 47,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7697695324",
      "email": "principal@college-of-teacher-education-cte-bareilly-1.org",
      "admissionOfficeContact": "+91 8270898886",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bareilly-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bareilly-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bareilly-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bharatpur-104",
    "name": "Institute of Advanced Study in Education (IASE), Bharatpur",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bharatpur",
    "city": "Bharatpur",
    "address": "Campus Road, Near Education Hub, Bharatpur, Bharatpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bharatpur+Bharatpur",
    "website": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1968,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Special Education",
      "Early Childhood Education",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Language Lab",
      "Science Lab",
      "Wi-Fi Campus",
      "Digital Library",
      "Playground",
      "Sports Complex",
      "Auditorium",
      "ICT Lab",
      "Educational Technology Lab",
      "Computer Lab",
      "Conference Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Delhi Public School (DPS)",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 20,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9129747926",
      "email": "principal@institute-of-advanced-study-in-education-iase-bharatpur-1.org",
      "admissionOfficeContact": "+91 9098336958",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bharatpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-muzaffarnagar-105",
    "name": "Al-Farabi College of Teacher Education, Muzaffarnagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "city": "Muzaffarnagar",
    "address": "Campus Road, Near Education Hub, Muzaffarnagar, Muzaffarnagar, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Muzaffarnagar+Muzaffarnagar",
    "website": "https://al-farabi-college-of-teacher-education-muzaffarnagar-1.ac.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-muzaffarnagar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 20 (Teacher Education Category)",
    "yearEstablished": 1964,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "Ph.D. in Education",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "Curriculum & Instruction",
      "Inclusive Education",
      "Special Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-muzaffarnagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Mathematics Lab",
      "Wi-Fi Campus",
      "ICT Lab",
      "Teaching Laboratories",
      "Seminar Hall",
      "Sports Complex",
      "Hostel",
      "Transport",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools",
        "Amity International School",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 65,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 7949283992",
      "email": "principal@al-farabi-college-of-teacher-education-muzaffarnagar-1.org",
      "admissionOfficeContact": "+91 9782909531",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-muzaffarnagar-1",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-muzaffarnagar-1",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-muzaffarnagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-agra-106",
    "name": "District Institute of Education & Training (DIET), Agra",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Agra",
    "city": "Agra",
    "address": "Campus Road, Near Education Hub, Agra, Agra, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Agra+Agra",
    "website": "https://district-institute-of-education-and-training-diet-agra-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-agra-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Uttar Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1962,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Health Education",
      "Inclusive Education",
      "Value Education",
      "Adult Education",
      "Environmental Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-agra-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Computer Lab",
      "Language Lab",
      "Sports Complex",
      "Science Lab",
      "Hostel",
      "Digital Library",
      "Psychology Lab",
      "Medical Facility",
      "Conference Hall",
      "Auditorium",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Podar International",
        "Ryan International",
        "Delhi Public School (DPS)",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 29,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9098719961",
      "email": "principal@district-institute-of-education-and-training-diet-agra-1.org",
      "admissionOfficeContact": "+91 7656507021",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-agra-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-agra-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-agra-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-jalgaon-107",
    "name": "Al-Farabi College of Teacher Education, Jalgaon",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Jalgaon",
    "city": "Jalgaon",
    "address": "Campus Road, Near Education Hub, Jalgaon, Jalgaon, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Jalgaon+Jalgaon",
    "website": "https://al-farabi-college-of-teacher-education-jalgaon-1.ac.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-jalgaon-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1996,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "Ph.D. in Education",
      "B.P.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "Adult Education",
      "Inclusive Education",
      "Educational Administration",
      "Early Childhood Education",
      "ICT in Education",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-jalgaon-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Hostel",
      "Teaching Laboratories",
      "Computer Lab",
      "Playground",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "International Baccalaureate (IB) World Schools",
        "Army Public School (APS)",
        "Podar International",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 50,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7794511769",
      "email": "principal@al-farabi-college-of-teacher-education-jalgaon-1.org",
      "admissionOfficeContact": "+91 9020794675",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-jalgaon-1",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-jalgaon-1",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-jalgaon-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-davangere-108",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Davangere",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Davangere",
    "city": "Davangere",
    "address": "Campus Road, Near Education Hub, Davangere, Davangere, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Davangere+Davangere",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-davangere-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-davangere-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1991,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "Integrated B.A. B.Ed.",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Educational Technology",
      "Environmental Education",
      "Guidance & Counselling",
      "Curriculum & Instruction",
      "Physical Education",
      "Special Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-davangere-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Playground",
      "Language Lab",
      "Computer Lab",
      "Hostel",
      "Transport",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools",
        "International Baccalaureate (IB) World Schools",
        "State Department of School Education",
        "Delhi Public School (DPS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 23,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 8359276751",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-davangere-1.org",
      "admissionOfficeContact": "+91 7734190176",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-davangere-1",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-davangere-1",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-davangere-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-nashik-109",
    "name": "Institute of Advanced Study in Education (IASE), Nashik",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nashik",
    "city": "Nashik",
    "address": "Campus Road, Near Education Hub, Nashik, Nashik, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Nashik+Nashik",
    "website": "https://institute-of-advanced-study-in-education-iase-nashik-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-nashik-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "ECCE",
      "Certificate in Guidance & Counselling",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Educational Psychology",
      "Early Childhood Education",
      "Special Education",
      "Social Science Education",
      "Adult Education",
      "Value Education",
      "Guidance & Counselling",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-nashik-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Library",
      "Conference Hall",
      "Educational Technology Lab",
      "Auditorium",
      "Playground",
      "Sports Complex",
      "Medical Facility",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 23,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9853743543",
      "email": "principal@institute-of-advanced-study-in-education-iase-nashik-1.org",
      "admissionOfficeContact": "+91 7895824404",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-nashik-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-nashik-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-nashik-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-south-delhi-110",
    "name": "District Institute of Education & Training (DIET), South Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "South Delhi",
    "address": "Campus Road, Near Education Hub, South Delhi, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+South+Delhi+South Delhi",
    "website": "https://district-institute-of-education-and-training-diet-south-delhi-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-south-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 79 (Teacher Education Category)",
    "yearEstablished": 2012,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Ph.D. in Education",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "M.Ed.",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Educational Administration",
      "Physical Education",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-south-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Transport",
      "Library",
      "Computer Lab",
      "Wi-Fi Campus",
      "Science Lab",
      "Auditorium",
      "Language Lab",
      "Teaching Laboratories",
      "Conference Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 51,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 11,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7365766313",
      "email": "principal@district-institute-of-education-and-training-diet-south-delhi-1.org",
      "admissionOfficeContact": "+91 8875291067",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-south-delhi-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-south-delhi-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-south-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-college-of-teacher-education-muzaffarpur-111",
    "name": "Al-Farabi College of Teacher Education, Muzaffarpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur",
    "city": "Muzaffarpur",
    "address": "Campus Road, Near Education Hub, Muzaffarpur, Muzaffarpur, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+College+of+Teacher+Education,+Muzaffarpur+Muzaffarpur",
    "website": "https://al-farabi-college-of-teacher-education-muzaffarpur-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-college-of-teacher-education-muzaffarpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Banaras Hindu University (BHU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 24 (Teacher Education Category)",
    "yearEstablished": 2019,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "B.P.Ed.",
      "D.El.Ed.",
      "M.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Curriculum & Instruction",
      "Guidance & Counselling",
      "Mathematics Education",
      "Special Education",
      "Value Education",
      "Physical Education",
      "Teacher Leadership",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-college-of-teacher-education-muzaffarpur-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Psychology Lab",
      "Language Lab",
      "ICT Lab",
      "Computer Lab",
      "Wi-Fi Campus",
      "Library",
      "Medical Facility"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Modern School New Delhi",
        "Ahlcon International",
        "Amity International School",
        "International Baccalaureate (IB) World Schools",
        "Podar International",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 20,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 14,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 9646250297",
      "email": "principal@al-farabi-college-of-teacher-education-muzaffarpur-1.org",
      "admissionOfficeContact": "+91 7186506594",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-college-of-teacher-education-muzaffarpur-1",
        "twitter": "https://twitter.com/al-farabi-college-of-teacher-education-muzaffarpur-1",
        "linkedin": "https://linkedin.com/school/al-farabi-college-of-teacher-education-muzaffarpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bharatpur-112",
    "name": "Institute of Advanced Study in Education (IASE), Bharatpur",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bharatpur",
    "city": "Bharatpur",
    "address": "Campus Road, Near Education Hub, Bharatpur, Bharatpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bharatpur+Bharatpur",
    "website": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 86 (Teacher Education Category)",
    "yearEstablished": 1972,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Educational Administration",
      "Special Education",
      "Teacher Leadership",
      "Guidance & Counselling",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Digital Library",
      "Psychology Lab",
      "Teaching Laboratories",
      "Transport",
      "Auditorium",
      "Science Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Amity International School",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 65,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7939546854",
      "email": "principal@institute-of-advanced-study-in-education-iase-bharatpur-1.org",
      "admissionOfficeContact": "+91 8553608003",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bharatpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-physical-education-sikar-113",
    "name": "Government College of Physical Education, Sikar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Sikar",
    "city": "Sikar",
    "address": "Campus Road, Near Education Hub, Sikar, Sikar, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Physical+Education,+Sikar+Sikar",
    "website": "https://government-college-of-physical-education-sikar-1.ac.in",
    "admissionPortalUrl": "https://government-college-of-physical-education-sikar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1981,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "B.Ed.",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed."
    ],
    "specializations": [
      "Environmental Education",
      "Educational Psychology",
      "Early Childhood Education",
      "ICT in Education",
      "Educational Administration",
      "Value Education",
      "Special Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-physical-education-sikar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Conference Hall",
      "Wi-Fi Campus",
      "Playground",
      "Language Lab",
      "Medical Facility",
      "Digital Library",
      "Sports Complex",
      "Science Lab",
      "Educational Technology Lab",
      "Transport",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 27,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8873167617",
      "email": "principal@government-college-of-physical-education-sikar-1.org",
      "admissionOfficeContact": "+91 9315260290",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-physical-education-sikar-1",
        "twitter": "https://twitter.com/government-college-of-physical-education-sikar-1",
        "linkedin": "https://linkedin.com/school/government-college-of-physical-education-sikar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-nizamabad-114",
    "name": "National Institute of Physical Education & Sports, Nizamabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Nizamabad",
    "city": "Nizamabad",
    "address": "Campus Road, Near Education Hub, Nizamabad, Nizamabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Nizamabad+Nizamabad",
    "website": "https://national-institute-of-physical-education-and-sports-nizamabad-1.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-nizamabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2000,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Ph.D. in Education",
      "Integrated B.Sc. B.Ed.",
      "Certificate in Guidance & Counselling",
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Mathematics Education",
      "Early Childhood Education",
      "Value Education",
      "Educational Psychology",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-nizamabad-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "ICT Lab",
      "Conference Hall",
      "Computer Lab",
      "Hostel",
      "Seminar Hall",
      "Science Lab",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Army Public School (APS)",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 49,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 8954099489",
      "email": "principal@national-institute-of-physical-education-and-sports-nizamabad-1.org",
      "admissionOfficeContact": "+91 9926313761",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-nizamabad-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-nizamabad-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-nizamabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-115",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Nellore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "city": "Nellore",
    "address": "Campus Road, Near Education Hub, Nellore, Sri Potti Sriramulu Nellore, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Nellore+Nellore",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 50 (Teacher Education Category)",
    "yearEstablished": 1961,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Language Education",
      "Curriculum & Instruction",
      "Value Education",
      "Teacher Leadership",
      "Educational Psychology",
      "Early Childhood Education",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Mathematics Lab",
      "Wi-Fi Campus",
      "Digital Library",
      "Medical Facility",
      "Teaching Laboratories",
      "Seminar Hall",
      "Sports Complex",
      "Playground",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Amity International School",
        "Podar International",
        "Ahlcon International",
        "Army Public School (APS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 40,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9637653017",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1.org",
      "admissionOfficeContact": "+91 7998149972",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-nellore-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-mumbai-city-116",
    "name": "District Institute of Education & Training (DIET), Mumbai City",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "Campus Road, Near Education Hub, Mumbai, Mumbai City, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Mumbai+City+Mumbai",
    "website": "https://district-institute-of-education-and-training-diet-mumbai-city-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-mumbai-city-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Maharashtra",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "D.El.Ed.",
      "ECCE",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Language Education",
      "Science Education",
      "Curriculum & Instruction",
      "Value Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-mumbai-city-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Teaching Laboratories",
      "Science Lab",
      "Digital Library",
      "Psychology Lab",
      "Conference Hall",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Army Public School (APS)",
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Modern School New Delhi",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 32,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 9606232843",
      "email": "principal@district-institute-of-education-and-training-diet-mumbai-city-1.org",
      "admissionOfficeContact": "+91 8019751433",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-mumbai-city-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-mumbai-city-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-mumbai-city-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-aurangabad-117",
    "name": "College of Teacher Education (CTE), Aurangabad",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Aurangabad",
    "city": "Aurangabad",
    "address": "Campus Road, Near Education Hub, Aurangabad, Aurangabad, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Aurangabad+Aurangabad",
    "website": "https://college-of-teacher-education-cte-aurangabad-1.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-aurangabad-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1983,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "D.El.Ed.",
      "Diploma in Special Education",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "M.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Early Childhood Education",
      "Social Science Education",
      "Value Education",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-aurangabad-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Medical Facility",
      "Digital Library",
      "Transport",
      "Wi-Fi Campus",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ryan International",
        "Amity International School",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 54,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 9526226347",
      "email": "principal@college-of-teacher-education-cte-aurangabad-1.org",
      "admissionOfficeContact": "+91 9044482818",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-aurangabad-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-aurangabad-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-aurangabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-katihar-118",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Katihar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Katihar",
    "city": "Katihar",
    "address": "Campus Road, Near Education Hub, Katihar, Katihar, Bihar, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Katihar+Katihar",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-katihar-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-katihar-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2014,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education",
      "ECCE",
      "M.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Inclusive Education",
      "Early Childhood Education",
      "Value Education",
      "Mathematics Education",
      "Special Education",
      "ICT in Education",
      "Educational Technology",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-katihar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Conference Hall",
      "Psychology Lab",
      "Sports Complex",
      "Digital Library",
      "Wi-Fi Campus",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Podar International",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Modern School New Delhi",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 33,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8011919809",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-katihar-1.org",
      "admissionOfficeContact": "+91 9705245598",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-katihar-1",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-katihar-1",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-katihar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bengaluru-119",
    "name": "Institute of Advanced Study in Education (IASE), Bengaluru",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "city": "Bengaluru",
    "address": "Campus Road, Near Education Hub, Bengaluru, Bengaluru Urban, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bengaluru+Bengaluru",
    "website": "https://institute-of-advanced-study-in-education-iase-bengaluru-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bengaluru-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Mumbai - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1969,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "M.P.Ed."
    ],
    "specializations": [
      "Adult Education",
      "ICT in Education",
      "Educational Administration",
      "Early Childhood Education",
      "Curriculum & Instruction",
      "Mathematics Education",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bengaluru-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Digital Library",
      "Wi-Fi Campus",
      "Psychology Lab",
      "Transport",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Ahlcon International",
        "Delhi Public School (DPS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 30,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 15,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7451353552",
      "email": "principal@institute-of-advanced-study-in-education-iase-bengaluru-1.org",
      "admissionOfficeContact": "+91 8563135808",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bengaluru-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bengaluru-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bengaluru-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-bardhaman-120",
    "name": "National Institute of Physical Education & Sports, Bardhaman",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "city": "Bardhaman",
    "address": "Campus Road, Near Education Hub, Bardhaman, Purba Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Bardhaman+Bardhaman",
    "website": "https://national-institute-of-physical-education-and-sports-bardhaman-1.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-bardhaman-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 50 (Teacher Education Category)",
    "yearEstablished": 1969,
    "ownership": "Minority Institution",
    "isMinorityInstitution": true,
    "programmes": [
      "Diploma in Special Education",
      "ECCE",
      "D.El.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Inclusive Education",
      "Educational Technology",
      "Educational Psychology",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-bardhaman-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Wi-Fi Campus",
      "Transport",
      "Sports Complex",
      "Hostel",
      "Digital Library",
      "Science Lab",
      "ICT Lab",
      "Conference Hall",
      "Teaching Laboratories",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Ryan International",
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 27,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8478765124",
      "email": "principal@national-institute-of-physical-education-and-sports-bardhaman-1.org",
      "admissionOfficeContact": "+91 7905824906",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-bardhaman-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-bardhaman-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-bardhaman-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-north-delhi-121",
    "name": "National Institute of Physical Education & Sports, North Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "North Delhi",
    "city": "North Delhi",
    "address": "Campus Road, Near Education Hub, North Delhi, North Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+North+Delhi+North Delhi",
    "website": "https://national-institute-of-physical-education-and-sports-north-delhi-1.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-north-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2010,
    "ownership": "Deemed University",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Ph.D. in Education",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Value Education",
      "Teacher Leadership",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-north-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Educational Technology Lab",
      "Conference Hall",
      "Language Lab",
      "Computer Lab",
      "Science Lab",
      "Library",
      "Auditorium",
      "Transport",
      "Psychology Lab",
      "Hostel",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)",
        "Ahlcon International",
        "State Department of School Education",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 46,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7335420362",
      "email": "principal@national-institute-of-physical-education-and-sports-north-delhi-1.org",
      "admissionOfficeContact": "+91 8013483614",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-north-delhi-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-north-delhi-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-north-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-bardhaman-122",
    "name": "College of Teacher Education (CTE), Bardhaman",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "city": "Bardhaman",
    "address": "Campus Road, Near Education Hub, Bardhaman, Purba Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Bardhaman+Bardhaman",
    "website": "https://college-of-teacher-education-cte-bardhaman-1.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-bardhaman-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 40 (Teacher Education Category)",
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "ECCE",
      "M.Ed.",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education"
    ],
    "specializations": [
      "Language Education",
      "Health Education",
      "Early Childhood Education",
      "Guidance & Counselling",
      "Curriculum & Instruction",
      "Value Education",
      "Social Science Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-bardhaman-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "ICT Lab",
      "Psychology Lab",
      "Teaching Laboratories",
      "Medical Facility",
      "Educational Technology Lab",
      "Playground",
      "Transport",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 48,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 19,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 7798754728",
      "email": "principal@college-of-teacher-education-cte-bardhaman-1.org",
      "admissionOfficeContact": "+91 7552128331",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-bardhaman-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-bardhaman-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-bardhaman-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-visakhapatnam-123",
    "name": "Mahatma Gandhi College of Teacher Education, Visakhapatnam",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "city": "Visakhapatnam",
    "address": "Campus Road, Near Education Hub, Visakhapatnam, Visakhapatnam, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Visakhapatnam+Visakhapatnam",
    "website": "https://mahatma-gandhi-college-of-teacher-education-visakhapatnam-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-visakhapatnam-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1990,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "D.El.Ed.",
      "Ph.D. in Education",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Adult Education",
      "Educational Administration",
      "Educational Psychology",
      "Special Education",
      "Social Science Education",
      "Teacher Leadership",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-visakhapatnam-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Teaching Laboratories",
      "Science Lab",
      "Hostel",
      "Seminar Hall",
      "Auditorium",
      "Sports Complex",
      "Transport",
      "ICT Lab",
      "Mathematics Lab",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Amity International School",
        "Podar International",
        "DAV Public Schools",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 20,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 20,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8647538144",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-visakhapatnam-1.org",
      "admissionOfficeContact": "+91 9705837049",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-visakhapatnam-1",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-visakhapatnam-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-visakhapatnam-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-new-delhi-124",
    "name": "District Institute of Education & Training (DIET), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Campus Road, Near Education Hub, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+New+Delhi+New Delhi",
    "website": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1955,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "B.Ed.",
      "D.El.Ed.",
      "M.Ed."
    ],
    "specializations": [
      "Special Education",
      "Inclusive Education",
      "Mathematics Education",
      "Early Childhood Education",
      "Environmental Education",
      "Educational Administration",
      "Value Education",
      "Adult Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Seminar Hall",
      "Conference Hall",
      "Library",
      "Medical Facility",
      "Mathematics Lab",
      "Psychology Lab",
      "ICT Lab",
      "Digital Library",
      "Wi-Fi Campus",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Modern School New Delhi",
        "Ryan International",
        "Podar International",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 28,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8035558998",
      "email": "principal@district-institute-of-education-and-training-diet-new-delhi-1.org",
      "admissionOfficeContact": "+91 7914769382",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-new-delhi-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-new-delhi-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-bhilwara-125",
    "name": "District Institute of Education & Training (DIET), Bhilwara",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bhilwara",
    "city": "Bhilwara",
    "address": "Campus Road, Near Education Hub, Bhilwara, Bhilwara, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Bhilwara+Bhilwara",
    "website": "https://district-institute-of-education-and-training-diet-bhilwara-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-bhilwara-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Rajasthan",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Certificate in Guidance & Counselling",
      "M.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Value Education",
      "Early Childhood Education",
      "Educational Psychology",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-bhilwara-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Hostel",
      "Language Lab",
      "ICT Lab",
      "Medical Facility",
      "Digital Library",
      "Transport",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Amity International School",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools",
        "Delhi Public School (DPS)",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 39,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8065980375",
      "email": "principal@district-institute-of-education-and-training-diet-bhilwara-1.org",
      "admissionOfficeContact": "+91 8199572297",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-bhilwara-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-bhilwara-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-bhilwara-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-visakhapatnam-126",
    "name": "Institute of Advanced Study in Education (IASE), Visakhapatnam",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "city": "Visakhapatnam",
    "address": "Campus Road, Near Education Hub, Visakhapatnam, Visakhapatnam, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Visakhapatnam+Visakhapatnam",
    "website": "https://institute-of-advanced-study-in-education-iase-visakhapatnam-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-visakhapatnam-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 80 (Teacher Education Category)",
    "yearEstablished": 2006,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "D.El.Ed.",
      "M.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Mathematics Education",
      "Science Education",
      "Curriculum & Instruction",
      "Language Education",
      "Teacher Leadership",
      "Inclusive Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-visakhapatnam-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Mathematics Lab",
      "Psychology Lab",
      "Teaching Laboratories",
      "Digital Library",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Army Public School (APS)",
        "Ahlcon International",
        "Modern School New Delhi",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 62,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8393531790",
      "email": "principal@institute-of-advanced-study-in-education-iase-visakhapatnam-1.org",
      "admissionOfficeContact": "+91 7066290415",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-visakhapatnam-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-visakhapatnam-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-visakhapatnam-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-college-of-teacher-education-bhavnagar-127",
    "name": "National College of Teacher Education, Bhavnagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Bhavnagar",
    "city": "Bhavnagar",
    "address": "Campus Road, Near Education Hub, Bhavnagar, Bhavnagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+College+of+Teacher+Education,+Bhavnagar+Bhavnagar",
    "website": "https://national-college-of-teacher-education-bhavnagar-1.edu.in",
    "admissionPortalUrl": "https://national-college-of-teacher-education-bhavnagar-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2014,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "M.Ed.",
      "Certificate in Guidance & Counselling",
      "Nursery Teacher Training (NTT)",
      "B.P.Ed.",
      "D.El.Ed."
    ],
    "specializations": [
      "Science Education",
      "Special Education",
      "Social Science Education",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-college-of-teacher-education-bhavnagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "ICT Lab",
      "Seminar Hall",
      "Science Lab",
      "Medical Facility",
      "Teaching Laboratories",
      "Language Lab",
      "Digital Library",
      "Playground",
      "Transport",
      "Library",
      "Hostel"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Ahlcon International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Ryan International",
        "Delhi Public School (DPS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 60,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 13,
      "visitingProfessorsCount": 10
    },
    "contact": {
      "phone": "+91 8441002316",
      "email": "principal@national-college-of-teacher-education-bhavnagar-1.org",
      "admissionOfficeContact": "+91 9790197861",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-college-of-teacher-education-bhavnagar-1",
        "twitter": "https://twitter.com/national-college-of-teacher-education-bhavnagar-1",
        "linkedin": "https://linkedin.com/school/national-college-of-teacher-education-bhavnagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-south-west-delhi-128",
    "name": "College of Teacher Education (CTE), South West Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South West Delhi",
    "city": "South West Delhi",
    "address": "Campus Road, Near Education Hub, South West Delhi, South West Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+South+West+Delhi+South West Delhi",
    "website": "https://college-of-teacher-education-cte-south-west-delhi-1.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-south-west-delhi-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2005,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "ECCE",
      "Diploma in Special Education",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Educational Technology",
      "Educational Administration",
      "Science Education",
      "ICT in Education",
      "Social Science Education",
      "Curriculum & Instruction",
      "Health Education",
      "Language Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-south-west-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Language Lab",
      "Library",
      "Science Lab",
      "Psychology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Ryan International",
        "Army Public School (APS)",
        "Podar International",
        "State Department of School Education",
        "Navodaya Vidyalaya Samiti (NVS)",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 62,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7352105261",
      "email": "principal@college-of-teacher-education-cte-south-west-delhi-1.org",
      "admissionOfficeContact": "+91 8246853399",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-south-west-delhi-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-south-west-delhi-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-south-west-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-129",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Salem",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem",
    "city": "Salem",
    "address": "Campus Road, Near Education Hub, Salem, Salem, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Salem+Salem",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2005,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "B.P.Ed.",
      "Ph.D. in Education",
      "ECCE",
      "B.Ed."
    ],
    "specializations": [
      "Value Education",
      "Environmental Education",
      "Guidance & Counselling",
      "Physical Education",
      "Educational Administration",
      "Mathematics Education",
      "Science Education",
      "Educational Technology",
      "ICT in Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Mathematics Lab",
      "Auditorium",
      "ICT Lab",
      "Digital Library",
      "Psychology Lab",
      "Conference Hall",
      "Transport",
      "Computer Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "International Baccalaureate (IB) World Schools",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 48,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7969255115",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1.org",
      "admissionOfficeContact": "+91 8078061054",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-salem-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-east-delhi-130",
    "name": "Mahatma Gandhi College of Teacher Education, East Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "East Delhi",
    "city": "East Delhi",
    "address": "Campus Road, Near Education Hub, East Delhi, East Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+East+Delhi+East Delhi",
    "website": "https://mahatma-gandhi-college-of-teacher-education-east-delhi-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-east-delhi-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1973,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "M.Ed.",
      "M.P.Ed.",
      "Integrated B.A. B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Educational Administration",
      "Value Education",
      "Social Science Education",
      "Environmental Education",
      "Teacher Leadership",
      "Early Childhood Education",
      "Curriculum & Instruction",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-east-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Teaching Laboratories",
      "Playground",
      "Educational Technology Lab",
      "Sports Complex",
      "Mathematics Lab",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "State Department of School Education",
        "Ryan International",
        "DAV Public Schools",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 49,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 7106854250",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-east-delhi-1.org",
      "admissionOfficeContact": "+91 9066438413",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-east-delhi-1",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-east-delhi-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-east-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-sagar-131",
    "name": "Institute of Advanced Study in Education (IASE), Sagar",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "city": "Sagar",
    "address": "Campus Road, Near Education Hub, Sagar, Sagar, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Sagar+Sagar",
    "website": "https://institute-of-advanced-study-in-education-iase-sagar-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-sagar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Osmania University",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "D.El.Ed.",
      "ECCE",
      "M.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Curriculum & Instruction",
      "Mathematics Education",
      "Educational Technology",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-sagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Teaching Laboratories",
      "Transport",
      "Medical Facility",
      "Digital Library",
      "Psychology Lab",
      "Library",
      "Hostel",
      "Seminar Hall",
      "Science Lab",
      "Language Lab",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Amity International School",
        "State Department of School Education",
        "Podar International",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 41,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8029404558",
      "email": "principal@institute-of-advanced-study-in-education-iase-sagar-1.org",
      "admissionOfficeContact": "+91 7388747376",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-sagar-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-sagar-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-sagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-ahmedabad-132",
    "name": "Institute of Advanced Study in Education (IASE), Ahmedabad",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad",
    "city": "Ahmedabad",
    "address": "Campus Road, Near Education Hub, Ahmedabad, Ahmedabad, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Ahmedabad+Ahmedabad",
    "website": "https://institute-of-advanced-study-in-education-iase-ahmedabad-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-ahmedabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2012,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Guidance & Counselling",
      "Language Education",
      "Adult Education",
      "Value Education",
      "Health Education",
      "Educational Administration",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-ahmedabad-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Medical Facility",
      "Educational Technology Lab",
      "Psychology Lab",
      "Computer Lab",
      "Science Lab",
      "Library",
      "Mathematics Lab",
      "Playground",
      "Teaching Laboratories",
      "Transport",
      "Auditorium",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ryan International",
        "DAV Public Schools",
        "Ahlcon International",
        "State Department of School Education",
        "Podar International",
        "Amity International School",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 25,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 8039864668",
      "email": "principal@institute-of-advanced-study-in-education-iase-ahmedabad-1.org",
      "admissionOfficeContact": "+91 9672674940",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-ahmedabad-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-ahmedabad-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-ahmedabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-jaipur-133",
    "name": "National Institute of Physical Education & Sports, Jaipur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "address": "Campus Road, Near Education Hub, Jaipur, Jaipur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Jaipur+Jaipur",
    "website": "https://national-institute-of-physical-education-and-sports-jaipur-1.ac.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-jaipur-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 38 (Teacher Education Category)",
    "yearEstablished": 1994,
    "ownership": "Deemed University",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "B.Ed."
    ],
    "specializations": [
      "Science Education",
      "Educational Administration",
      "Guidance & Counselling",
      "Educational Technology",
      "Health Education",
      "Environmental Education",
      "Curriculum & Instruction"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-jaipur-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Psychology Lab",
      "Teaching Laboratories",
      "Mathematics Lab",
      "Conference Hall",
      "Hostel",
      "Auditorium",
      "Digital Library",
      "Seminar Hall",
      "Language Lab",
      "Medical Facility",
      "Sports Complex",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "DAV Public Schools",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Amity International School",
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)",
        "Ahlcon International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 60,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8276430677",
      "email": "principal@national-institute-of-physical-education-and-sports-jaipur-1.org",
      "admissionOfficeContact": "+91 9397605154",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-jaipur-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-jaipur-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-jaipur-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-sagar-134",
    "name": "District Institute of Education & Training (DIET), Sagar",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "city": "Sagar",
    "address": "Campus Road, Near Education Hub, Sagar, Sagar, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Sagar+Sagar",
    "website": "https://district-institute-of-education-and-training-diet-sagar-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-sagar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Madhya Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Rank 20 (Teacher Education Category)",
    "yearEstablished": 2005,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "B.Ed.",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "M.Ed.",
      "Certificate in Guidance & Counselling"
    ],
    "specializations": [
      "Early Childhood Education",
      "Science Education",
      "Physical Education",
      "Guidance & Counselling",
      "ICT in Education",
      "Inclusive Education",
      "Social Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-sagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Science Lab",
      "Teaching Laboratories",
      "Wi-Fi Campus",
      "Conference Hall",
      "Playground",
      "Medical Facility",
      "Psychology Lab",
      "ICT Lab",
      "Educational Technology Lab",
      "Computer Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Modern School New Delhi",
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 55,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7562537647",
      "email": "principal@district-institute-of-education-and-training-diet-sagar-1.org",
      "admissionOfficeContact": "+91 8579542728",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-sagar-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-sagar-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-sagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-new-delhi-135",
    "name": "District Institute of Education & Training (DIET), New Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Campus Road, Near Education Hub, New Delhi, New Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+New+Delhi+New Delhi",
    "website": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Delhi",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 23 (Teacher Education Category)",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Inclusive Education",
      "Value Education",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-new-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "ICT Lab",
      "Playground",
      "Mathematics Lab",
      "Teaching Laboratories",
      "Transport",
      "Seminar Hall"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Podar International",
        "Modern School New Delhi",
        "International Baccalaureate (IB) World Schools",
        "Ahlcon International",
        "State Department of School Education",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 18,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 6,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 8177416375",
      "email": "principal@district-institute-of-education-and-training-diet-new-delhi-1.org",
      "admissionOfficeContact": "+91 8473250422",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-new-delhi-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-new-delhi-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-new-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-indore-136",
    "name": "Institute of Advanced Study in Education (IASE), Indore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Campus Road, Near Education Hub, Indore, Indore, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Indore+Indore",
    "website": "https://institute-of-advanced-study-in-education-iase-indore-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-indore-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1994,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.Ed.",
      "Diploma in Special Education",
      "Nursery Teacher Training (NTT)",
      "Integrated B.A. B.Ed.",
      "Certificate in Guidance & Counselling",
      "D.El.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Health Education",
      "Mathematics Education",
      "Inclusive Education",
      "Educational Administration",
      "ICT in Education",
      "Value Education",
      "Curriculum & Instruction",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-indore-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Transport",
      "Teaching Laboratories",
      "Computer Lab",
      "Conference Hall",
      "Science Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "State Department of School Education",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Ryan International",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 51,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8582042139",
      "email": "principal@institute-of-advanced-study-in-education-iase-indore-1.org",
      "admissionOfficeContact": "+91 7023671704",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-indore-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-indore-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-indore-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-chennai-137",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Chennai",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Chennai",
    "city": "Chennai",
    "address": "Campus Road, Near Education Hub, Chennai, Chennai, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Chennai+Chennai",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-chennai-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-chennai-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2008,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "M.P.Ed.",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Guidance & Counselling",
      "Health Education",
      "Environmental Education",
      "Inclusive Education",
      "Adult Education",
      "Teacher Leadership",
      "Value Education",
      "Educational Psychology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-chennai-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Auditorium",
      "Language Lab",
      "Seminar Hall",
      "Educational Technology Lab",
      "Sports Complex",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ahlcon International",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 38,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 9023559987",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-chennai-1.org",
      "admissionOfficeContact": "+91 7701443636",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-chennai-1",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-chennai-1",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-chennai-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-indore-138",
    "name": "Institute of Advanced Study in Education (IASE), Indore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Indore",
    "city": "Indore",
    "address": "Campus Road, Near Education Hub, Indore, Indore, Madhya Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Indore+Indore",
    "website": "https://institute-of-advanced-study-in-education-iase-indore-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-indore-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1977,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Certificate in Guidance & Counselling",
      "Integrated B.Sc. B.Ed.",
      "Nursery Teacher Training (NTT)",
      "M.P.Ed.",
      "B.Ed.",
      "B.P.Ed."
    ],
    "specializations": [
      "Value Education",
      "Language Education",
      "Educational Technology",
      "Inclusive Education",
      "Educational Administration",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-indore-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Hostel",
      "Teaching Laboratories",
      "Library",
      "Auditorium",
      "Wi-Fi Campus",
      "Medical Facility",
      "ICT Lab",
      "Psychology Lab",
      "Mathematics Lab",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Modern School New Delhi",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 23,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 8167558202",
      "email": "principal@institute-of-advanced-study-in-education-iase-indore-1.org",
      "admissionOfficeContact": "+91 7349574986",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-indore-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-indore-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-indore-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-agra-139",
    "name": "District Institute of Education & Training (DIET), Agra",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Agra",
    "city": "Agra",
    "address": "Campus Road, Near Education Hub, Agra, Agra, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Agra+Agra",
    "website": "https://district-institute-of-education-and-training-diet-agra-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-agra-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Uttar Pradesh",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1977,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "Nursery Teacher Training (NTT)",
      "Diploma in Special Education",
      "D.El.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Inclusive Education",
      "Guidance & Counselling",
      "Educational Psychology",
      "Environmental Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-agra-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Seminar Hall",
      "Auditorium",
      "Conference Hall",
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Library",
      "Sports Complex",
      "Medical Facility",
      "Science Lab",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Ryan International",
        "Ahlcon International",
        "Modern School New Delhi",
        "DAV Public Schools",
        "Amity International School",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 21,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 8674890946",
      "email": "principal@district-institute-of-education-and-training-diet-agra-1.org",
      "admissionOfficeContact": "+91 7992638782",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-agra-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-agra-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-agra-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-visakhapatnam-140",
    "name": "National Institute of Physical Education & Sports, Visakhapatnam",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "city": "Visakhapatnam",
    "address": "Campus Road, Near Education Hub, Visakhapatnam, Visakhapatnam, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Visakhapatnam+Visakhapatnam",
    "website": "https://national-institute-of-physical-education-and-sports-visakhapatnam-1.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-visakhapatnam-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2007,
    "ownership": "Autonomous",
    "isMinorityInstitution": false,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "Ph.D. in Education",
      "B.Ed.",
      "M.Ed."
    ],
    "specializations": [
      "Science Education",
      "Mathematics Education",
      "Early Childhood Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-visakhapatnam-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Language Lab",
      "Psychology Lab",
      "Mathematics Lab",
      "Medical Facility",
      "Hostel",
      "ICT Lab",
      "Conference Hall",
      "Wi-Fi Campus",
      "Computer Lab",
      "Seminar Hall",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "Navodaya Vidyalaya Samiti (NVS)",
        "DAV Public Schools",
        "Delhi Public School (DPS)",
        "International Baccalaureate (IB) World Schools",
        "Kendriya Vidyalaya Sangathan (KVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 39,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 9,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 7328208542",
      "email": "principal@national-institute-of-physical-education-and-sports-visakhapatnam-1.org",
      "admissionOfficeContact": "+91 7500243832",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-visakhapatnam-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-visakhapatnam-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-visakhapatnam-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-institute-of-higher-education-and-b.ed.-mahbubnagar-141",
    "name": "Government Institute of Higher Education & B.Ed., Mahbubnagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Mahbubnagar",
    "city": "Mahbubnagar",
    "address": "Campus Road, Near Education Hub, Mahbubnagar, Mahbubnagar, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Institute+of+Higher+Education+&+B.Ed.,+Mahbubnagar+Mahbubnagar",
    "website": "https://government-institute-of-higher-education-and-b.ed.-mahbubnagar-1.ac.in",
    "admissionPortalUrl": "https://government-institute-of-higher-education-and-b.ed.-mahbubnagar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1963,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "B.P.Ed.",
      "Ph.D. in Education",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Adult Education",
      "Curriculum & Instruction",
      "Language Education",
      "Educational Technology",
      "Special Education",
      "Health Education",
      "Educational Psychology",
      "Value Education",
      "Inclusive Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-institute-of-higher-education-and-b.ed.-mahbubnagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Playground",
      "Conference Hall",
      "Library",
      "Teaching Laboratories",
      "Digital Library",
      "Auditorium",
      "Mathematics Lab",
      "ICT Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "DAV Public Schools",
        "Podar International",
        "Ryan International",
        "Amity International School",
        "Navodaya Vidyalaya Samiti (NVS)",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 49,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 9
    },
    "contact": {
      "phone": "+91 9992435948",
      "email": "principal@government-institute-of-higher-education-and-b.ed.-mahbubnagar-1.org",
      "admissionOfficeContact": "+91 8840870586",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-institute-of-higher-education-and-b.ed.-mahbubnagar-1",
        "twitter": "https://twitter.com/government-institute-of-higher-education-and-b.ed.-mahbubnagar-1",
        "linkedin": "https://linkedin.com/school/government-institute-of-higher-education-and-b.ed.-mahbubnagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-gandhinagar-142",
    "name": "District Institute of Education & Training (DIET), Gandhinagar",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Gandhinagar",
    "city": "Gandhinagar",
    "address": "Campus Road, Near Education Hub, Gandhinagar, Gandhinagar, Gujarat, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Gandhinagar+Gandhinagar",
    "website": "https://district-institute-of-education-and-training-diet-gandhinagar-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-gandhinagar-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Gujarat",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1952,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Technology",
      "Educational Administration",
      "Value Education",
      "Health Education",
      "Environmental Education",
      "Early Childhood Education",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-gandhinagar-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Playground",
      "Medical Facility",
      "Educational Technology Lab",
      "Auditorium",
      "Transport",
      "Wi-Fi Campus",
      "Conference Hall",
      "Language Lab",
      "Teaching Laboratories"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Modern School New Delhi",
        "Army Public School (APS)",
        "DAV Public Schools",
        "Delhi Public School (DPS)",
        "Amity International School",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 26,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 7195056826",
      "email": "principal@district-institute-of-education-and-training-diet-gandhinagar-1.org",
      "admissionOfficeContact": "+91 8778015694",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-gandhinagar-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-gandhinagar-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-gandhinagar-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-143",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Vellore",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Vellore",
    "city": "Vellore",
    "address": "Campus Road, Near Education Hub, Vellore, Vellore, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Vellore+Vellore",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2011,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "B.P.Ed.",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Health Education",
      "Educational Technology",
      "ICT in Education",
      "Educational Psychology",
      "Physical Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Science Lab",
      "Computer Lab",
      "ICT Lab",
      "Hostel",
      "Transport",
      "Seminar Hall",
      "Medical Facility",
      "Library",
      "Mathematics Lab",
      "Psychology Lab",
      "Digital Library",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Podar International",
        "Modern School New Delhi",
        "Delhi Public School (DPS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 18,
      "studentFacultyRatio": "12:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 8757851056",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1.org",
      "admissionOfficeContact": "+91 7017787345",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-vellore-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-nanded-144",
    "name": "College of Teacher Education (CTE), Nanded",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nanded",
    "city": "Nanded",
    "address": "Campus Road, Near Education Hub, Nanded, Nanded, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Nanded+Nanded",
    "website": "https://college-of-teacher-education-cte-nanded-1.ac.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-nanded-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 67 (Teacher Education Category)",
    "yearEstablished": 2013,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.P.Ed.",
      "Nursery Teacher Training (NTT)",
      "Integrated B.Sc. B.Ed.",
      "Ph.D. in Education",
      "Integrated B.A. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Guidance & Counselling",
      "Value Education",
      "Environmental Education",
      "Educational Administration",
      "Language Education",
      "Curriculum & Instruction",
      "Science Education",
      "Health Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-nanded-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Transport",
      "Conference Hall",
      "Seminar Hall",
      "Language Lab",
      "ICT Lab",
      "Wi-Fi Campus"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Podar International",
        "International Baccalaureate (IB) World Schools",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 18,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 8337880722",
      "email": "principal@college-of-teacher-education-cte-nanded-1.org",
      "admissionOfficeContact": "+91 8858889720",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-nanded-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-nanded-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-nanded-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "national-institute-of-physical-education-and-sports-kurnool-145",
    "name": "National Institute of Physical Education & Sports, Kurnool",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "city": "Kurnool",
    "address": "Campus Road, Near Education Hub, Kurnool, Kurnool, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=National+Institute+of+Physical+Education+&+Sports,+Kurnool+Kurnool",
    "website": "https://national-institute-of-physical-education-and-sports-kurnool-1.edu.in",
    "admissionPortalUrl": "https://national-institute-of-physical-education-and-sports-kurnool-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Rank 60 (Teacher Education Category)",
    "yearEstablished": 1982,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "M.P.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Educational Administration",
      "Science Education",
      "Adult Education",
      "Inclusive Education",
      "Value Education",
      "Early Childhood Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://national-institute-of-physical-education-and-sports-kurnool-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Mathematics Lab",
      "Auditorium",
      "Science Lab",
      "Wi-Fi Campus",
      "Hostel",
      "Playground",
      "Educational Technology Lab",
      "Teaching Laboratories",
      "Library",
      "Language Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Army Public School (APS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Tariq Hussain",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 42,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 3
    },
    "contact": {
      "phone": "+91 7606014904",
      "email": "principal@national-institute-of-physical-education-and-sports-kurnool-1.org",
      "admissionOfficeContact": "+91 7766368171",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/national-institute-of-physical-education-and-sports-kurnool-1",
        "twitter": "https://twitter.com/national-institute-of-physical-education-and-sports-kurnool-1",
        "linkedin": "https://linkedin.com/school/national-institute-of-physical-education-and-sports-kurnool-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-south-delhi-146",
    "name": "Institute of Advanced Study in Education (IASE), South Delhi",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "South Delhi",
    "address": "Campus Road, Near Education Hub, South Delhi, South Delhi, Delhi, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+South+Delhi+South Delhi",
    "website": "https://institute-of-advanced-study-in-education-iase-south-delhi-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-south-delhi-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State University of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1984,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "D.El.Ed.",
      "B.Ed.",
      "Certificate in Guidance & Counselling",
      "ECCE"
    ],
    "specializations": [
      "Educational Psychology",
      "Environmental Education",
      "Inclusive Education",
      "Social Science Education",
      "Value Education",
      "Curriculum & Instruction",
      "Adult Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-south-delhi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Computer Lab",
      "Hostel",
      "Psychology Lab",
      "Playground",
      "Language Lab",
      "Digital Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Army Public School (APS)",
        "Navodaya Vidyalaya Samiti (NVS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 46,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 5
    },
    "contact": {
      "phone": "+91 8411093465",
      "email": "principal@institute-of-advanced-study-in-education-iase-south-delhi-1.org",
      "admissionOfficeContact": "+91 7838278834",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-south-delhi-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-south-delhi-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-south-delhi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-mysore-147",
    "name": "Institute of Advanced Study in Education (IASE), Mysore",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mysore",
    "city": "Mysore",
    "address": "Campus Road, Near Education Hub, Mysore, Mysore, Karnataka, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Mysore+Mysore",
    "website": "https://institute-of-advanced-study-in-education-iase-mysore-1.ac.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-mysore-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Calcutta University - Department of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1992,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "Diploma in Special Education",
      "Certificate in Guidance & Counselling",
      "B.Ed."
    ],
    "specializations": [
      "Curriculum & Instruction",
      "Teacher Leadership",
      "Science Education",
      "Physical Education",
      "Social Science Education",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-mysore-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Transport",
      "Teaching Laboratories",
      "Library",
      "Conference Hall",
      "Wi-Fi Campus",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Amity International School",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "DAV Public Schools",
        "Ryan International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 27,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 5,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 7148131774",
      "email": "principal@institute-of-advanced-study-in-education-iase-mysore-1.org",
      "admissionOfficeContact": "+91 8272873620",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-mysore-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-mysore-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-mysore-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "institute-of-advanced-study-in-education-iase-bharatpur-148",
    "name": "Institute of Advanced Study in Education (IASE), Bharatpur",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Bharatpur",
    "city": "Bharatpur",
    "address": "Campus Road, Near Education Hub, Bharatpur, Bharatpur, Rajasthan, India",
    "googleMapsUrl": "https://maps.google.com/?q=Institute+of+Advanced+Study+in+Education+(IASE),+Bharatpur+Bharatpur",
    "website": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.edu.in",
    "admissionPortalUrl": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A",
    "nirfRanking": "Rank 87 (Teacher Education Category)",
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "ECCE",
      "Diploma in Special Education",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Teacher Leadership",
      "Mathematics Education",
      "Educational Technology",
      "Language Education",
      "Special Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://institute-of-advanced-study-in-education-iase-bharatpur-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "ICT Lab",
      "Language Lab",
      "Transport",
      "Educational Technology Lab",
      "Seminar Hall",
      "Psychology Lab",
      "Science Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Podar International",
        "Delhi Public School (DPS)",
        "Ahlcon International",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Sunita Sharma",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 28,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9876169896",
      "email": "principal@institute-of-advanced-study-in-education-iase-bharatpur-1.org",
      "admissionOfficeContact": "+91 7336365433",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "twitter": "https://twitter.com/institute-of-advanced-study-in-education-iase-bharatpur-1",
        "linkedin": "https://linkedin.com/school/institute-of-advanced-study-in-education-iase-bharatpur-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "college-of-teacher-education-cte-kurnool-149",
    "name": "College of Teacher Education (CTE), Kurnool",
    "logoUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "city": "Kurnool",
    "address": "Campus Road, Near Education Hub, Kurnool, Kurnool, Andhra Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=College+of+Teacher+Education+(CTE),+Kurnool+Kurnool",
    "website": "https://college-of-teacher-education-cte-kurnool-1.edu.in",
    "admissionPortalUrl": "https://college-of-teacher-education-cte-kurnool-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2013,
    "ownership": "Autonomous",
    "isMinorityInstitution": true,
    "programmes": [
      "D.El.Ed.",
      "ECCE",
      "Nursery Teacher Training (NTT)",
      "B.Ed."
    ],
    "specializations": [
      "Inclusive Education",
      "Educational Psychology",
      "ICT in Education",
      "Environmental Education",
      "Educational Technology",
      "Health Education",
      "Language Education",
      "Mathematics Education",
      "Teacher Leadership"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://college-of-teacher-education-cte-kurnool-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Mathematics Lab",
      "Hostel",
      "Medical Facility",
      "Language Lab",
      "Sports Complex",
      "Library",
      "Science Lab",
      "Auditorium",
      "Seminar Hall",
      "ICT Lab",
      "Transport",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "State Department of School Education",
        "International Baccalaureate (IB) World Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b935,000 - \u20b965,000 / yr",
      "hostelFees": "\u20b918,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 52,
      "studentFacultyRatio": "14:1",
      "researchFacultyCount": 18,
      "visitingProfessorsCount": 6
    },
    "contact": {
      "phone": "+91 8705886232",
      "email": "principal@college-of-teacher-education-cte-kurnool-1.org",
      "admissionOfficeContact": "+91 7371986198",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/college-of-teacher-education-cte-kurnool-1",
        "twitter": "https://twitter.com/college-of-teacher-education-cte-kurnool-1",
        "linkedin": "https://linkedin.com/school/college-of-teacher-education-cte-kurnool-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "district-institute-of-education-and-training-diet-tirunelveli-150",
    "name": "District Institute of Education & Training (DIET), Tirunelveli",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "city": "Tirunelveli",
    "address": "Campus Road, Near Education Hub, Tirunelveli, Tirunelveli, Tamil Nadu, India",
    "googleMapsUrl": "https://maps.google.com/?q=District+Institute+of+Education+&+Training+(DIET),+Tirunelveli+Tirunelveli",
    "website": "https://district-institute-of-education-and-training-diet-tirunelveli-1.ac.in",
    "admissionPortalUrl": "https://district-institute-of-education-and-training-diet-tirunelveli-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "State Council of Educational Research & Training (SCERT), Tamil Nadu",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1991,
    "ownership": "Government",
    "isMinorityInstitution": false,
    "programmes": [
      "M.Ed.",
      "Nursery Teacher Training (NTT)",
      "D.El.Ed.",
      "ECCE",
      "Certificate in Guidance & Counselling",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "ICT in Education",
      "Physical Education",
      "Science Education",
      "Educational Administration",
      "Special Education",
      "Language Education",
      "Early Childhood Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://district-institute-of-education-and-training-diet-tirunelveli-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Playground",
      "Computer Lab",
      "Teaching Laboratories",
      "Sports Complex",
      "ICT Lab",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Podar International",
        "Ryan International",
        "Kendriya Vidyalaya Sangathan (KVS)",
        "Amity International School",
        "State Department of School Education"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 36,
      "studentFacultyRatio": "15:1",
      "researchFacultyCount": 8,
      "visitingProfessorsCount": 11
    },
    "contact": {
      "phone": "+91 8838001017",
      "email": "principal@district-institute-of-education-and-training-diet-tirunelveli-1.org",
      "admissionOfficeContact": "+91 9575926361",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/district-institute-of-education-and-training-diet-tirunelveli-1",
        "twitter": "https://twitter.com/district-institute-of-education-and-training-diet-tirunelveli-1",
        "linkedin": "https://linkedin.com/school/district-institute-of-education-and-training-diet-tirunelveli-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-bardhaman-151",
    "name": "Mahatma Gandhi College of Teacher Education, Bardhaman",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "city": "Bardhaman",
    "address": "Campus Road, Near Education Hub, Bardhaman, Purba Bardhaman, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Bardhaman+Bardhaman",
    "website": "https://mahatma-gandhi-college-of-teacher-education-bardhaman-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-bardhaman-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Jamia Millia Islamia - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "B++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2000,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "ECCE",
      "B.P.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Teacher Leadership",
      "Early Childhood Education",
      "Curriculum & Instruction",
      "Guidance & Counselling",
      "ICT in Education",
      "Educational Administration"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-bardhaman-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Mathematics Lab",
      "Digital Library",
      "Transport",
      "Hostel",
      "Teaching Laboratories",
      "Psychology Lab",
      "Playground",
      "Language Lab",
      "Auditorium",
      "ICT Lab",
      "Library"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "State Department of School Education",
        "Army Public School (APS)",
        "Modern School New Delhi",
        "Podar International"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Meenakshi Sundaram",
      "dean": "Prof. P. K. Sengupta",
      "facultyStrength": 37,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 17,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 7211289093",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-bardhaman-1.org",
      "admissionOfficeContact": "+91 9232527618",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-bardhaman-1",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-bardhaman-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-bardhaman-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-152",
    "name": "Mahatma Gandhi Institute of Higher Education & B.Ed., Varanasi",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "address": "Campus Road, Near Education Hub, Varanasi, Varanasi, Uttar Pradesh, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+Institute+of+Higher+Education+&+B.Ed.,+Varanasi+Varanasi",
    "website": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "University of Delhi - Faculty of Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1972,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "Certificate in Guidance & Counselling",
      "Ph.D. in Education",
      "Diploma in Special Education",
      "M.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed."
    ],
    "specializations": [
      "Physical Education",
      "Social Science Education",
      "Curriculum & Instruction",
      "Environmental Education",
      "Special Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Conference Hall",
      "Psychology Lab",
      "Transport",
      "Mathematics Lab",
      "Computer Lab",
      "Language Lab",
      "Wi-Fi Campus",
      "Sports Complex",
      "Hostel",
      "Digital Library",
      "Medical Facility",
      "Playground"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Delhi Public School (DPS)",
        "Ryan International",
        "DAV Public Schools",
        "Army Public School (APS)"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": false,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. R. S. Chauhan",
      "facultyStrength": 20,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 12,
      "visitingProfessorsCount": 12
    },
    "contact": {
      "phone": "+91 9600840825",
      "email": "principal@mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1.org",
      "admissionOfficeContact": "+91 8009438517",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1",
        "twitter": "https://twitter.com/mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-institute-of-higher-education-and-b.ed.-varanasi-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "al-farabi-institute-of-higher-education-and-b.ed.-sangli-153",
    "name": "Al-Farabi Institute of Higher Education & B.Ed., Sangli",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Sangli",
    "city": "Sangli",
    "address": "Campus Road, Near Education Hub, Sangli, Sangli, Maharashtra, India",
    "googleMapsUrl": "https://maps.google.com/?q=Al-Farabi+Institute+of+Higher+Education+&+B.Ed.,+Sangli+Sangli",
    "website": "https://al-farabi-institute-of-higher-education-and-b.ed.-sangli-1.edu.in",
    "admissionPortalUrl": "https://al-farabi-institute-of-higher-education-and-b.ed.-sangli-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Aligarh Muslim University (AMU)",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Rank 82 (Teacher Education Category)",
    "yearEstablished": 1969,
    "ownership": "Private",
    "isMinorityInstitution": true,
    "programmes": [
      "Integrated B.A. B.Ed.",
      "M.Ed.",
      "Diploma in Special Education",
      "B.Ed."
    ],
    "specializations": [
      "Social Science Education",
      "Educational Administration",
      "Science Education",
      "Guidance & Counselling",
      "Language Education",
      "Inclusive Education",
      "Educational Psychology",
      "Mathematics Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://al-farabi-institute-of-higher-education-and-b.ed.-sangli-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Hostel",
      "Auditorium",
      "Conference Hall",
      "Teaching Laboratories",
      "Computer Lab",
      "Science Lab",
      "Library",
      "Medical Facility",
      "Wi-Fi Campus",
      "Educational Technology Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Modern School New Delhi",
        "International Baccalaureate (IB) World Schools",
        "DAV Public Schools"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. S. K. Mukherjee",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 51,
      "studentFacultyRatio": "13:1",
      "researchFacultyCount": 16,
      "visitingProfessorsCount": 8
    },
    "contact": {
      "phone": "+91 7514297044",
      "email": "principal@al-farabi-institute-of-higher-education-and-b.ed.-sangli-1.org",
      "admissionOfficeContact": "+91 7874477258",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/al-farabi-institute-of-higher-education-and-b.ed.-sangli-1",
        "twitter": "https://twitter.com/al-farabi-institute-of-higher-education-and-b.ed.-sangli-1",
        "linkedin": "https://linkedin.com/school/al-farabi-institute-of-higher-education-and-b.ed.-sangli-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "mahatma-gandhi-college-of-teacher-education-hyderabad-154",
    "name": "Mahatma Gandhi College of Teacher Education, Hyderabad",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad",
    "city": "Hyderabad",
    "address": "Campus Road, Near Education Hub, Hyderabad, Hyderabad, Telangana, India",
    "googleMapsUrl": "https://maps.google.com/?q=Mahatma+Gandhi+College+of+Teacher+Education,+Hyderabad+Hyderabad",
    "website": "https://mahatma-gandhi-college-of-teacher-education-hyderabad-1.edu.in",
    "admissionPortalUrl": "https://mahatma-gandhi-college-of-teacher-education-hyderabad-1.edu.in/apply",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "Central University of Teacher Education",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A++",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 1965,
    "ownership": "Private",
    "isMinorityInstitution": false,
    "programmes": [
      "ECCE",
      "B.P.Ed.",
      "Integrated B.Sc. B.Ed.",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Special Education",
      "Educational Psychology",
      "Language Education",
      "Guidance & Counselling",
      "ICT in Education",
      "Science Education"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": true,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://mahatma-gandhi-college-of-teacher-education-hyderabad-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Digital Library",
      "Seminar Hall",
      "Sports Complex",
      "Language Lab",
      "Computer Lab",
      "Hostel",
      "Playground",
      "Mathematics Lab"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Ahlcon International",
        "Army Public School (APS)",
        "Amity International School"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b945,000 - \u20b985,000 / yr",
      "hostelFees": "\u20b925,000 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Abdul Rehman",
      "dean": "Prof. Fatima Zohra",
      "facultyStrength": 26,
      "studentFacultyRatio": "10:1",
      "researchFacultyCount": 7,
      "visitingProfessorsCount": 4
    },
    "contact": {
      "phone": "+91 9902135222",
      "email": "principal@mahatma-gandhi-college-of-teacher-education-hyderabad-1.org",
      "admissionOfficeContact": "+91 8596600492",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/mahatma-gandhi-college-of-teacher-education-hyderabad-1",
        "twitter": "https://twitter.com/mahatma-gandhi-college-of-teacher-education-hyderabad-1",
        "linkedin": "https://linkedin.com/school/mahatma-gandhi-college-of-teacher-education-hyderabad-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  },
  {
    "id": "government-college-of-physical-education-howrah-155",
    "name": "Government College of Physical Education, Howrah",
    "logoUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=120&h=120&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&h=500&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Howrah",
    "city": "Howrah",
    "address": "Campus Road, Near Education Hub, Howrah, Howrah, West Bengal, India",
    "googleMapsUrl": "https://maps.google.com/?q=Government+College+of+Physical+Education,+Howrah+Howrah",
    "website": "https://government-college-of-physical-education-howrah-1.ac.in",
    "admissionPortalUrl": "https://government-college-of-physical-education-howrah-1.ac.in/admissions",
    "counsellingPortalUrl": "https://ncte.gov.in/Website/Counselling.aspx",
    "universityAffiliation": "National Institute of Educational Planning & Administration",
    "ncteRecognitionStatus": "Recognized under Section 14/15 of NCTE Act 1993",
    "ugcRecognition": "Recognized under 2(f) and 12(B) of UGC Act 1956",
    "naacGrade": "A+",
    "nirfRanking": "Top 100 Institution",
    "yearEstablished": 2000,
    "ownership": "Government",
    "isMinorityInstitution": true,
    "programmes": [
      "M.Ed.",
      "Ph.D. in Education",
      "B.Ed.",
      "Integrated B.A. B.Ed.",
      "Certificate in Guidance & Counselling",
      "Diploma in Special Education"
    ],
    "specializations": [
      "Early Childhood Education",
      "Inclusive Education",
      "Health Education",
      "Special Education",
      "Educational Psychology",
      "Educational Technology"
    ],
    "admissionDetails": {
      "eligibility": "Minimum 50% Marks in Bachelor's / Master's Degree from recognized university (45% for SC/ST/OBC/PWD)",
      "entranceExams": [
        "CUET-PG",
        "State B.Ed. Common Entrance Test (CET)",
        "University Entrance Exam"
      ],
      "meritBasedAdmission": true,
      "managementQuota": false,
      "admissionProcess": "Merit rank in State B.Ed. CET followed by centralized online counselling and document verification.",
      "admissionLink": "https://government-college-of-physical-education-howrah-1.ac.in/admission-2026",
      "counsellingLink": "https://ncte.gov.in"
    },
    "infrastructure": [
      "Teaching Laboratories",
      "Library",
      "Wi-Fi Campus",
      "Educational Technology Lab",
      "Playground",
      "Sports Complex"
    ],
    "teachingPractice": {
      "practiceSchools": [
        "Kendriya Vidyalaya",
        "Jawahar Navodaya Vidyalaya",
        "State Govt Senior Secondary School",
        "Demonstration Multipurpose School"
      ],
      "internshipDuration": "16 Weeks Mandatory Internship in Recognized Schools",
      "schoolAttachment": true,
      "microTeaching": true,
      "lessonPlanning": true,
      "communityOutreach": true,
      "educationalTours": true
    },
    "careerInformation": {
      "hasPlacementCell": true,
      "schoolPlacements": true,
      "govtTeacherRecruitmentGuidance": true,
      "kvsNvsGuidance": true,
      "ctetStateTetCoaching": true,
      "netHigherEdGuidance": true,
      "highestSalary": "\u20b97.5 Lakhs - \u20b912.0 Lakhs / yr",
      "averageSalary": "\u20b93.2 Lakhs - \u20b95.5 Lakhs / yr",
      "topRecruiters": [
        "Army Public School (APS)",
        "State Department of School Education",
        "Modern School New Delhi"
      ]
    },
    "financialInfo": {
      "tuitionFees": "\u20b98,000 - \u20b918,000 / yr",
      "hostelFees": "\u20b92,500 / yr",
      "govtScholarships": true,
      "minorityScholarships": true,
      "meritScholarships": true,
      "loanAssistance": true
    },
    "faculty": {
      "principal": "Dr. Rajeshwari Rao",
      "dean": "Prof. A. K. Verma",
      "facultyStrength": 47,
      "studentFacultyRatio": "11:1",
      "researchFacultyCount": 10,
      "visitingProfessorsCount": 7
    },
    "contact": {
      "phone": "+91 8069260456",
      "email": "principal@government-college-of-physical-education-howrah-1.org",
      "admissionOfficeContact": "+91 9557905233",
      "socialMediaLinks": {
        "facebook": "https://facebook.com/government-college-of-physical-education-howrah-1",
        "twitter": "https://twitter.com/government-college-of-physical-education-howrah-1",
        "linkedin": "https://linkedin.com/school/government-college-of-physical-education-howrah-1"
      }
    },
    "lastVerifiedDate": "2026-05-20",
    "ncteRecognized": true,
    "ugcRecognized": true
  }
];
