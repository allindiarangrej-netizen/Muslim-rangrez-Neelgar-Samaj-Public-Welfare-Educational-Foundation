
export interface PolytechnicCollegeProfile {
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
  affiliatedBoard: string;
  aicteApproved: boolean;
  ugcRecognised?: boolean;
  nbaAccredited: boolean;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Minority Institution';
  isWomensPolytechnic: boolean;
  
  // Programmes
  programmes: string[];
  engineeringDiplomas: string[];
  nonEngineeringDiplomas: string[];
  
  // Admission
  eligibility: string;
  admission10thPass: string;
  admission12thPass: string;
  lateralEntry: string;
  entranceExams: string[];
  admissionProcess: string;
  
  // Infrastructure
  infrastructure: string[];
  
  // Industry Training
  industrialVisits: string;
  apprenticeshipProgramme: string;
  industrialInternship: string;
  industryCollaborations: string[];
  skillDevelopmentCentre: string;
  msmeCollaboration: boolean;
  nsdcPartnership: boolean;
  startupIncubation: boolean;
  edcCell: boolean;
  
  // Careers
  placementCell: boolean;
  averagePackage: string;
  highestPackage: string;
  topRecruiters: string[];
  higherEducationPathways: string;
  entrepreneurshipSupport: string;
  
  // Financial
  tuitionFees: string;
  hostelFees: string;
  scholarships: string[];
  educationLoanAssistance: boolean;
  
  // Faculty
  principalName: string;
  hodsCount: number;
  facultyStrength: number;
  studentFacultyRatio: string;
  industryExpertsCount: number;
  visitingFacultyCount: number;
  
  // Contact
  phone: string;
  email: string;
  admissionOfficeContact: string;
  socialMediaLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  
  // Verification
  lastVerifiedDate: string;
}

export const POLYTECHNIC_COLLEGES: PolytechnicCollegeProfile[] = [
  {
    "id": "gp-mumbai",
    "name": "Government Polytechnic, Mumbai",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Mumbai City",
    "city": "Mumbai",
    "address": "49, Kherwadi, Ali Yavar Jung Marg, Bandra East, Mumbai, Maharashtra 400051",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Polytechnic+Mumbai",
    "website": "https://gpmumbai.ac.in",
    "admissionPortalUrl": "https://poly24.dtemaharashtra.gov.in",
    "counsellingPortalUrl": "https://poly24.dtemaharashtra.gov.in",
    "affiliatedBoard": "Maharashtra State Board of Technical Education (MSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1960,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Leather Technology"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Computer Engineering",
      "Information Technology",
      "Leather Technology"
    ],
    "nonEngineeringDiplomas": [
      "Commercial Practice"
    ],
    "eligibility": "SSC / 10th Pass with at least 35% aggregate in Math & Science.",
    "admission10thPass": "CAP Round allocation based on SSC merit percentage.",
    "admission12thPass": "Eligible for direct 2nd-year admission (Lateral Entry) for Science/Technical stream.",
    "lateralEntry": "Direct Admission into 3rd Semester (2nd Year) for 12th Sci/Vocational or ITI pass-outs.",
    "entranceExams": [
      "Merit-Based (No separate entrance exam, MSBTE CAP process)"
    ],
    "admissionProcess": "Centralised Admission Process (CAP) of Directorate of Technical Education (DTE) Maharashtra.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Placement Cell",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Bi-annual industrial visits to top engineering firms like Larsen & Toubro, Siemens, and Tata Power.",
    "apprenticeshipProgramme": "Active participation in Board of Apprenticeship Training (BOAT) Western Region.",
    "industrialInternship": "Compulsory 6-week summer internship in industries after 4th semester.",
    "industryCollaborations": [
      "L&T Infotech",
      "Godrej & Boyce",
      "Tata Motors"
    ],
    "skillDevelopmentCentre": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY) Training Hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "₹3.5 LPA",
    "highestPackage": "₹7.2 LPA",
    "topRecruiters": [
      "L&T",
      "Godrej",
      "Siemens",
      "Tata Power",
      "Capgemini",
      "Wipro"
    ],
    "higherEducationPathways": "Elgible for Lateral Entry direct 2nd-year B.E. / B.Tech across all major engineering colleges in Maharashtra.",
    "entrepreneurshipSupport": "Active Entrepreneurship Development Cell conducting bootcamps and startup project displays.",
    "tuitionFees": "₹6,000 / year",
    "hostelFees": "₹1,500 / year",
    "scholarships": [
      "Rajarshi Chhatrapati Shahu Maharaj Fee Reimbursement",
      "Minority Scholarship (MahaDBT)",
      "AICTE Pragati Scholarship for Girls",
      "NSP Merit-cum-Means"
    ],
    "educationLoanAssistance": true,
    "principalName": "Dr. S. K. Mahajan",
    "hodsCount": 8,
    "facultyStrength": 75,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 12,
    "visitingFacultyCount": 15,
    "phone": "022-26474587",
    "email": "gpmumbai@gpmumbai.ac.in",
    "admissionOfficeContact": "022-26474857 Ext 201",
    "socialMediaLinks": {
      "facebook": "https://facebook.com/gpmumbaiofficial",
      "linkedin": "https://linkedin.com/school/government-polytechnic-mumbai"
    },
    "lastVerifiedDate": "2026-04-15"
  },
  {
    "id": "gp-pune",
    "name": "Government Polytechnic, Pune",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Pune",
    "city": "Pune",
    "address": "Ganeshkhind, University Road, Shivaji Nagar, Pune, Maharashtra 411016",
    "googleMapsUrl": "https://maps.google.com/?q=Government+Polytechnic+Pune",
    "website": "https://gppune.ac.in",
    "admissionPortalUrl": "https://poly24.dtemaharashtra.gov.in",
    "counsellingPortalUrl": "https://poly24.dtemaharashtra.gov.in",
    "affiliatedBoard": "Maharashtra State Board of Technical Education (MSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1957,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Telecommunication",
      "Diploma in Computer Engineering",
      "Diploma in Dress Designing & Garment Manufacturing"
    ],
    "engineeringDiplomas": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Fashion Design"
    ],
    "eligibility": "SSC / 10th Pass with Science & Mathematics as compulsory subjects.",
    "admission10thPass": "Direct admission based on merit in SSC/10th standards via CAP portal.",
    "admission12thPass": "Eligible for direct second-year lateral entry admissions.",
    "lateralEntry": "Direct second year B.Tech/Diploma admission for ITI & HSC Science students.",
    "entranceExams": [
      "Merit-Based (CAP Portal)"
    ],
    "admissionProcess": "Online application and choices submission on DTE Maharashtra CAP portal.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Conference Hall",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Regular tours to Tata Motors (Akurdi), Cummins India, and MIDC Bhosari plants.",
    "apprenticeshipProgramme": "BOAT Western Region registered training hub.",
    "industrialInternship": "6-week industrial internship with local manufacturing & IT industries.",
    "industryCollaborations": [
      "Cummins India Foundation",
      "Tata Motors Ltd",
      "Thermax India"
    ],
    "skillDevelopmentCentre": "Authorized MSBTE Center for Advanced Skill Development.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "₹3.8 LPA",
    "highestPackage": "₹8.0 LPA",
    "topRecruiters": [
      "Cummins",
      "Tata Motors",
      "Thermax",
      "Bajaj Auto",
      "Cognizant",
      "L&T Infotech"
    ],
    "higherEducationPathways": "Lateral entry in Engineering Degrees (B.Tech/B.E.) with 10% reserved seats in top tier institutes.",
    "entrepreneurshipSupport": "Well-established EDC coordinating with MCED (Maharashtra Centre for Entrepreneurship Development).",
    "tuitionFees": "₹8,000 / year",
    "hostelFees": "₹1,200 / year",
    "scholarships": [
      "MahaDBT post-matric scholarships",
      "Dr. Panjabrao Deshmukh Hostel Allowance",
      "AICTE Pragati",
      "Swanath Scholarship"
    ],
    "educationLoanAssistance": true,
    "principalName": "Dr. V. S. Bandal",
    "hodsCount": 9,
    "facultyStrength": 82,
    "studentFacultyRatio": "19:1",
    "industryExpertsCount": 15,
    "visitingFacultyCount": 18,
    "phone": "020-25676818",
    "email": "gppune@gppune.ac.in",
    "admissionOfficeContact": "020-25676818 Ext 105",
    "socialMediaLinks": {
      "facebook": "https://facebook.com/gppuneofficial",
      "linkedin": "https://linkedin.com/school/government-polytechnic-pune"
    },
    "lastVerifiedDate": "2026-05-10"
  },
  {
    "id": "pusa-polytechnic",
    "name": "Pusa Polytechnic",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "New Delhi",
    "city": "New Delhi",
    "address": "Pusa Hill Forest, Pusa Road, New Delhi, Delhi 110012",
    "googleMapsUrl": "https://maps.google.com/?q=Pusa+Polytechnic+Delhi",
    "website": "https://dseu.ac.in",
    "admissionPortalUrl": "https://dseu.ac.in/admissions",
    "counsellingPortalUrl": "https://dseu.ac.in/counselling",
    "affiliatedBoard": "Delhi Skill and Entrepreneurship University (DSEU)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1962,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication",
      "Diploma in Automobile Engineering",
      "Diploma in Printing Technology"
    ],
    "engineeringDiplomas": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Automobile Engineering",
      "Printing Technology"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "10th Class pass with minimum 35% in Mathematics and Science.",
    "admission10thPass": "Merit list compiled by Delhi Skill and Entrepreneurship University (DSEU) based on class 10th marks or CET.",
    "admission12thPass": "Lateral entry in 2nd year for 12th Vocational/Science streams.",
    "lateralEntry": "Direct admissions to second year of three-year diploma for qualified candidates.",
    "entranceExams": [
      "DSEU CET (Common Entrance Test)"
    ],
    "admissionProcess": "Through online admission test (CET) followed by centralized choice-filling with DSEU.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Transport",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Regular factory visits to Maruti Suzuki, Honda Cars, and Delhi Metro workshops.",
    "apprenticeshipProgramme": "Active tie-ups with BOAT Northern Region and National Apprenticeship Promotion Scheme (NAPS).",
    "industrialInternship": "Mandatory 6-8 week summer training with top companies in NCR.",
    "industryCollaborations": [
      "Maruti Suzuki India",
      "DMRC",
      "Escorts Ltd"
    ],
    "skillDevelopmentCentre": "State-of-the-art Center of Excellence in Printing and Automotive.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "₹3.6 LPA",
    "highestPackage": "₹6.8 LPA",
    "topRecruiters": [
      "Maruti Suzuki",
      "DMRC",
      "Tata Power DDL",
      "Escorts",
      "Samsung",
      "L&T Construction"
    ],
    "higherEducationPathways": "Lateral entry options to DSEU B.Tech programs or other engineering institutions in Delhi.",
    "entrepreneurshipSupport": "Dedicated DSEU Innovation & Incubation Center on campus supporting student business models.",
    "tuitionFees": "₹15,000 / year",
    "hostelFees": "No hostel facility",
    "scholarships": [
      "DSEU Merit-cum-Means",
      "NSP post-matric scholarships for SC/ST/OBC",
      "Pragati AICTE Scholarship"
    ],
    "educationLoanAssistance": true,
    "principalName": "Dr. Rita Kar",
    "hodsCount": 6,
    "facultyStrength": 60,
    "studentFacultyRatio": "22:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 12,
    "phone": "011-25841021",
    "email": "pusapoly@dseu.ac.in",
    "admissionOfficeContact": "011-25841021 Ext 12",
    "socialMediaLinks": {
      "facebook": "https://facebook.com/pusapolytechnicofficial",
      "linkedin": "https://linkedin.com/school/pusa-polytechnic"
    },
    "lastVerifiedDate": "2026-03-20"
  },
  {
    "id": "amu-polytechnic",
    "name": "University Polytechnic, Aligarh Muslim University (AMU)",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "city": "Aligarh",
    "address": "Aligarh Muslim University Campus, Aligarh, Uttar Pradesh 202002",
    "googleMapsUrl": "https://maps.google.com/?q=University+Polytechnic+AMU+Aligarh",
    "website": "https://www.amu.ac.in",
    "admissionPortalUrl": "https://www.amucontrollerexams.com",
    "counsellingPortalUrl": "https://www.amucontrollerexams.com",
    "affiliatedBoard": "Aligarh Muslim University (AMU - Central University)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1937,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Architecture Assistantship",
      "Diploma in Costume Design & Garment Technology"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Fashion Design",
      "Architecture Assistantship"
    ],
    "eligibility": "Secondary School Certificate (Class 10th) with 45% marks in English, Maths and Science.",
    "admission10thPass": "Admission through AMU National Level Combined Entrance Exam.",
    "admission12thPass": "No direct lateral entry to 2nd year, all candidates start from first year.",
    "lateralEntry": "Not available (follows central university guidelines for 3-year curriculum).",
    "entranceExams": [
      "AMU Diploma Entrance Exam"
    ],
    "admissionProcess": "Written examination of 100 marks (Science, Maths, and GK) conducted by Controller of Exams, AMU.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Medical Facility",
      "Sports Complex",
      "Transport",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Annual visits to BHEL Haridwar, NTPC Dadri, and manufacturing hubs in Noida/Gurugram.",
    "apprenticeshipProgramme": "BOAT Northern Region placement cell.",
    "industrialInternship": "Compulsory 4 weeks summer training program with top enterprises.",
    "industryCollaborations": [
      "BHEL",
      "NTPC",
      "L&T Construction",
      "Siemens India"
    ],
    "skillDevelopmentCentre": "AMU Community College & Skill Enhancement Centre.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "₹4.2 LPA",
    "highestPackage": "₹9.6 LPA",
    "topRecruiters": [
      "L&T Construction",
      "Tata Power",
      "Voltas",
      "Maruti Suzuki",
      "Siemens",
      "Wipro",
      "Blue Star"
    ],
    "higherEducationPathways": "Lateral entry into B.E. (Evening) at AMU or direct admission to 2nd year of B.Tech programs in other colleges.",
    "entrepreneurshipSupport": "Incubation support via AMU Startup and Innovation Cell.",
    "tuitionFees": "₹18,000 / year",
    "hostelFees": "₹3,000 / year (Standard AMU Dining charges extra)",
    "scholarships": [
      "AMU Alumni Association scholarships",
      "NSP Minority scholarships",
      "UP State Scholarships",
      "Sir Syed Global Scholarship"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Arshad Umar",
    "hodsCount": 7,
    "facultyStrength": 90,
    "studentFacultyRatio": "15:1",
    "industryExpertsCount": 10,
    "visitingFacultyCount": 14,
    "phone": "0571-2700920",
    "email": "principal.poly@amu.ac.in",
    "admissionOfficeContact": "0571-2700920 Ext 12",
    "socialMediaLinks": {
      "facebook": "https://facebook.com/amualigarh",
      "linkedin": "https://linkedin.com/school/aligarh-muslim-university"
    },
    "lastVerifiedDate": "2026-05-15"
  },
  {
    "id": "jmi-polytechnic",
    "name": "University Polytechnic, Jamia Millia Islamia (JMI)",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "South Delhi",
    "city": "New Delhi",
    "address": "Jamia Millia Islamia, Maulana Mohammad Ali Jauhar Marg, Jamia Nagar, Okhla, New Delhi 110025",
    "googleMapsUrl": "https://maps.google.com/?q=University+Polytechnic+Jamia+Millia+Islamia",
    "website": "https://jmi.ac.in",
    "admissionPortalUrl": "https://jmicoe.in",
    "counsellingPortalUrl": "https://jmicoe.in",
    "affiliatedBoard": "Jamia Millia Islamia (JMI - Central University)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1957,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Computer Engineering"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "10th class pass with minimum 45% in Math, Science and English.",
    "admission10thPass": "Admission based strictly on score in Jamia Entrance Exam.",
    "admission12thPass": "No lateral entry, standard 3-year curriculum applies.",
    "lateralEntry": "Not offered at Jamia Central University.",
    "entranceExams": [
      "JMI Diploma Entrance Test"
    ],
    "admissionProcess": "Written examination covering Physics, Chemistry, and Mathematics.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Conference Hall",
      "Medical Facility",
      "Sports Complex",
      "Transport",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Visits to NTPC Badarpur, Okhla MSME units, and Delhi Water Board plants.",
    "apprenticeshipProgramme": "NAPS and BOAT registered center.",
    "industrialInternship": "6-week winter/summer vocational training in leading PSU/private sectors.",
    "industryCollaborations": [
      "NTPC",
      "SGS India",
      "Schneider Electric"
    ],
    "skillDevelopmentCentre": "JMI Skill Development Training Centre.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "₹4.0 LPA",
    "highestPackage": "₹9.0 LPA",
    "topRecruiters": [
      "L&T",
      "Voltas",
      "Siemens",
      "ABB",
      "Schneider Electric",
      "Havells",
      "Anchor"
    ],
    "higherEducationPathways": "Lateral entry in standard university B.Tech program (JMI offers Evening/Regular programs for Diploma holders).",
    "entrepreneurshipSupport": "Support from Jamia Centre for Innovation and Entrepreneurship (CIE).",
    "tuitionFees": "₹9,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "JMI Merit scholarships",
      "NSP Minority Scholarships",
      "Jamia Alumni Scholarships"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Mumtaz Ahmad",
    "hodsCount": 5,
    "facultyStrength": 55,
    "studentFacultyRatio": "16:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 10,
    "phone": "011-26980665",
    "email": "polytechnic@jmi.ac.in",
    "admissionOfficeContact": "011-26980665 Ext 23",
    "socialMediaLinks": {
      "facebook": "https://facebook.com/jmiofficial",
      "linkedin": "https://linkedin.com/school/jamia-millia-islamia"
    },
    "lastVerifiedDate": "2026-04-10"
  },
  {
    "id": "poly-college-5",
    "name": "Kharagpur Institute of Technology & Diploma Engineering 5",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kharagpur District",
    "city": "Kharagpur",
    "address": "Opposite Science Park, Sector 5, Kharagpur, West Bengal Pin-400145",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCTVESD)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1955,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Library Science",
      "Diploma in Commercial Practice"
    ],
    "engineeringDiplomas": [
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Library Science",
      "Commercial Practice"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Suzuki Motors",
      "Capgemini"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.0 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Suzuki Motors",
      "Capgemini",
      "Wipro"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 5",
    "hodsCount": 6,
    "facultyStrength": 40,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 10,
    "phone": "099-12345675",
    "email": "admission@institute5.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-6",
    "name": "Arrah Institute of Technology & Diploma Engineering 6",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Arrah District",
    "city": "Arrah",
    "address": "Opposite Science Park, Sector 6, Arrah, Bihar Pin-400174",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education, Bihar (SBTE Bihar)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1956,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics"
    ],
    "engineeringDiplomas": [
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Capgemini",
      "Wipro"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.1 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Capgemini",
      "Wipro",
      "Tech Mahindra"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 6",
    "hodsCount": 4,
    "facultyStrength": 41,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 11,
    "phone": "099-12345676",
    "email": "admission@institute6.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-7",
    "name": "Government Women's Polytechnic 7",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Ahmedabad District",
    "city": "Ahmedabad",
    "address": "Opposite Science Park, Sector 7, Ahmedabad, Gujarat Pin-400203",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Gujarat Technological University (GTU) / TEB Gujarat",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1957,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Modern Office Management"
    ],
    "engineeringDiplomas": [
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Modern Office Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Wipro",
      "Tech Mahindra"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.3 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Wipro",
      "Tech Mahindra",
      "Cognizant"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 7",
    "hodsCount": 5,
    "facultyStrength": 42,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 12,
    "phone": "099-12345677",
    "email": "admission@institute7.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-8",
    "name": "Government Polytechnic 8",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Jodhpur District",
    "city": "Jodhpur",
    "address": "Opposite Science Park, Sector 8, Jodhpur, Rajasthan Pin-400232",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Rajasthan (BTER)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1958,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Travel & Tourism",
      "Diploma in Beauty & Wellness"
    ],
    "engineeringDiplomas": [
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [
      "Travel & Tourism",
      "Beauty & Wellness"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tech Mahindra",
      "Cognizant"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.4 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Tech Mahindra",
      "Cognizant",
      "Escorts"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 8",
    "hodsCount": 6,
    "facultyStrength": 43,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 5,
    "phone": "099-12345678",
    "email": "admission@institute8.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-9",
    "name": "Gwalior Institute of Technology & Diploma Engineering 9",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Gwalior District",
    "city": "Gwalior",
    "address": "Opposite Science Park, Sector 9, Gwalior, Madhya Pradesh Pin-400261",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1959,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering"
    ],
    "engineeringDiplomas": [
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Cognizant",
      "Escorts"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.5 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Cognizant",
      "Escorts",
      "Tata Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 9",
    "hodsCount": 4,
    "facultyStrength": 44,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 6,
    "phone": "099-12345679",
    "email": "admission@institute9.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-10",
    "name": "Thrissur Institute of Technology & Diploma Engineering 10",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Thrissur District",
    "city": "Thrissur",
    "address": "Opposite Science Park, Sector 0, Thrissur, Kerala Pin-400290",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Kerala (BTE Kerala)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1960,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Pharmacy"
    ],
    "engineeringDiplomas": [
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Pharmacy"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Escorts",
      "Tata Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.7 LPA",
    "highestPackage": "4.5 LPA",
    "topRecruiters": [
      "Escorts",
      "Tata Power",
      "Havells"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 10",
    "hodsCount": 5,
    "facultyStrength": 45,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 7,
    "phone": "099-12345670",
    "email": "admission@institute10.edu",
    "admissionOfficeContact": "099-12345670 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-11",
    "name": "Tirupati Institute of Technology & Diploma Engineering 11",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Tirupati District",
    "city": "Tirupati",
    "address": "Opposite Science Park, Sector 1, Tirupati, Andhra Pradesh Pin-400319",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Andhra Pradesh (SBTET AP)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1961,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Hotel Management",
      "Diploma in Fashion Design"
    ],
    "engineeringDiplomas": [
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Hotel Management",
      "Fashion Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tata Power",
      "Havells"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.9 LPA",
    "highestPackage": "5.0 LPA",
    "topRecruiters": [
      "Tata Power",
      "Havells",
      "Thermax"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 11",
    "hodsCount": 6,
    "facultyStrength": 46,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 8,
    "phone": "099-12345671",
    "email": "admission@institute11.edu",
    "admissionOfficeContact": "099-12345671 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-12",
    "name": "Government Polytechnic 12",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad District",
    "city": "Hyderabad",
    "address": "Opposite Science Park, Sector 2, Hyderabad, Telangana Pin-400348",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Telangana (SBTET TS)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1962,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering"
    ],
    "engineeringDiplomas": [
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Havells",
      "Thermax"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.0 LPA",
    "highestPackage": "5.5 LPA",
    "topRecruiters": [
      "Havells",
      "Thermax",
      "Honda Motorcycles"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 12",
    "hodsCount": 4,
    "facultyStrength": 47,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 9,
    "phone": "099-12345672",
    "email": "admission@institute12.edu",
    "admissionOfficeContact": "099-12345672 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-13",
    "name": "Karnal Institute of Technology & Diploma Engineering 13",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Haryana",
    "district": "Karnal District",
    "city": "Karnal",
    "address": "Opposite Science Park, Sector 3, Karnal, Haryana Pin-400377",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Haryana State Board of Technical Education (HSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1963,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Interior Design"
    ],
    "engineeringDiplomas": [
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Interior Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Thermax",
      "Honda Motorcycles"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.2 LPA",
    "highestPackage": "6.0 LPA",
    "topRecruiters": [
      "Thermax",
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 13",
    "hodsCount": 5,
    "facultyStrength": 48,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 10,
    "phone": "099-12345673",
    "email": "admission@institute13.edu",
    "admissionOfficeContact": "099-12345673 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-14",
    "name": "Government Women's Polytechnic 14",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Punjab",
    "district": "Jalandhar District",
    "city": "Jalandhar",
    "address": "Opposite Science Park, Sector 4, Jalandhar, Punjab Pin-400406",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Punjab State Board of Technical Education and Industrial Training (PSBTE&IT)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1964,
    "ownership": "Autonomous",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Architecture Assistantship",
      "Diploma in Library Science"
    ],
    "engineeringDiplomas": [
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Architecture Assistantship",
      "Library Science"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.3 LPA",
    "highestPackage": "6.5 LPA",
    "topRecruiters": [
      "Honda Motorcycles",
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 14",
    "hodsCount": 6,
    "facultyStrength": 49,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 11,
    "phone": "099-12345674",
    "email": "admission@institute14.edu",
    "admissionOfficeContact": "099-12345674 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-15",
    "name": "Bareilly Institute of Technology & Diploma Engineering 15",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Bareilly District",
    "city": "Bareilly",
    "address": "Opposite Science Park, Sector 5, Bareilly, Uttar Pradesh Pin-400435",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Uttar Pradesh (BTEUP)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1965,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology"
    ],
    "engineeringDiplomas": [
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.2 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Reliance Industries",
      "Ambuja Cement",
      "Adani Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 15",
    "hodsCount": 4,
    "facultyStrength": 50,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 12,
    "phone": "099-12345675",
    "email": "admission@institute15.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-16",
    "name": "Government Polytechnic 16",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Nagpur District",
    "city": "Nagpur",
    "address": "Opposite Science Park, Sector 6, Nagpur, Maharashtra Pin-400464",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Maharashtra State Board of Technical Education (MSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1966,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Commercial Practice"
    ],
    "engineeringDiplomas": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Commercial Practice"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Ambuja Cement",
      "Adani Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.4 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Ambuja Cement",
      "Adani Power",
      "Maruti Suzuki"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 16",
    "hodsCount": 5,
    "facultyStrength": 51,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 5,
    "phone": "099-12345676",
    "email": "admission@institute16.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-17",
    "name": "Mangalore Institute of Technology & Diploma Engineering 17",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Mangalore District",
    "city": "Mangalore",
    "address": "Opposite Science Park, Sector 7, Mangalore, Karnataka Pin-400493",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Karnataka (BTEK)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1967,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Modern Office Management",
      "Diploma in Travel & Tourism"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [
      "Modern Office Management",
      "Travel & Tourism"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Adani Power",
      "Maruti Suzuki"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Adani Power",
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 17",
    "hodsCount": 6,
    "facultyStrength": 52,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 6,
    "phone": "099-12345677",
    "email": "admission@institute17.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-18",
    "name": "Salem Institute of Technology & Diploma Engineering 18",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Salem District",
    "city": "Salem",
    "address": "Opposite Science Park, Sector 8, Salem, Tamil Nadu Pin-400522",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Directorate of Technical Education, Tamil Nadu (DoTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1968,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science"
    ],
    "engineeringDiplomas": [
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.7 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Maruti Suzuki",
      "Schneider Electric",
      "L&T Construction"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 18",
    "hodsCount": 4,
    "facultyStrength": 53,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 7,
    "phone": "099-12345678",
    "email": "admission@institute18.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-19",
    "name": "Okhla Institute of Technology & Diploma Engineering 19",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Okhla District",
    "city": "Okhla",
    "address": "Opposite Science Park, Sector 9, Okhla, Delhi Pin-400551",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Delhi Skill and Entrepreneurship University (DSEU)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1969,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Beauty & Wellness"
    ],
    "engineeringDiplomas": [
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Beauty & Wellness"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Schneider Electric",
      "L&T Construction"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.8 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Schneider Electric",
      "L&T Construction",
      "Tata Motors"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 19",
    "hodsCount": 5,
    "facultyStrength": 54,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 8,
    "phone": "099-12345679",
    "email": "admission@institute19.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-20",
    "name": "Government Polytechnic 20",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Haldia District",
    "city": "Haldia",
    "address": "Opposite Science Park, Sector 0, Haldia, West Bengal Pin-400580",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCTVESD)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1970,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Pharmacy",
      "Diploma in Hotel Management"
    ],
    "engineeringDiplomas": [
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [
      "Pharmacy",
      "Hotel Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "L&T Construction",
      "Tata Motors"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.0 LPA",
    "highestPackage": "4.5 LPA",
    "topRecruiters": [
      "L&T Construction",
      "Tata Motors",
      "Bajaj Auto"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 20",
    "hodsCount": 6,
    "facultyStrength": 55,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 9,
    "phone": "099-12345670",
    "email": "admission@institute20.edu",
    "admissionOfficeContact": "099-12345670 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-21",
    "name": "Government Women's Polytechnic 21",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Patna District",
    "city": "Patna",
    "address": "Opposite Science Park, Sector 1, Patna, Bihar Pin-400609",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education, Bihar (SBTE Bihar)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1971,
    "ownership": "Private",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering"
    ],
    "engineeringDiplomas": [
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tata Motors",
      "Bajaj Auto"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.1 LPA",
    "highestPackage": "5.0 LPA",
    "topRecruiters": [
      "Tata Motors",
      "Bajaj Auto",
      "Siemens"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 21",
    "hodsCount": 4,
    "facultyStrength": 56,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 10,
    "phone": "099-12345671",
    "email": "admission@institute21.edu",
    "admissionOfficeContact": "099-12345671 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-22",
    "name": "Surat Institute of Technology & Diploma Engineering 22",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Surat District",
    "city": "Surat",
    "address": "Opposite Science Park, Sector 2, Surat, Gujarat Pin-400638",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Gujarat Technological University (GTU) / TEB Gujarat",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1972,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Fashion Design"
    ],
    "engineeringDiplomas": [
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [
      "Fashion Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Bajaj Auto",
      "Siemens"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.3 LPA",
    "highestPackage": "5.5 LPA",
    "topRecruiters": [
      "Bajaj Auto",
      "Siemens",
      "ABB Group"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 22",
    "hodsCount": 5,
    "facultyStrength": 57,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 11,
    "phone": "099-12345672",
    "email": "admission@institute22.edu",
    "admissionOfficeContact": "099-12345672 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-23",
    "name": "Udaipur Institute of Technology & Diploma Engineering 23",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Udaipur District",
    "city": "Udaipur",
    "address": "Opposite Science Park, Sector 3, Udaipur, Rajasthan Pin-400667",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Rajasthan (BTER)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1973,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Interior Design",
      "Diploma in Architecture Assistantship"
    ],
    "engineeringDiplomas": [
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Interior Design",
      "Architecture Assistantship"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Siemens",
      "ABB Group"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.4 LPA",
    "highestPackage": "6.0 LPA",
    "topRecruiters": [
      "Siemens",
      "ABB Group",
      "Suzuki Motors"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 23",
    "hodsCount": 6,
    "facultyStrength": 58,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 12,
    "phone": "099-12345673",
    "email": "admission@institute23.edu",
    "admissionOfficeContact": "099-12345673 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-24",
    "name": "Government Polytechnic 24",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Jabalpur District",
    "city": "Jabalpur",
    "address": "Opposite Science Park, Sector 4, Jabalpur, Madhya Pradesh Pin-400696",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1974,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics"
    ],
    "engineeringDiplomas": [
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "ABB Group",
      "Suzuki Motors"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.5 LPA",
    "highestPackage": "6.5 LPA",
    "topRecruiters": [
      "ABB Group",
      "Suzuki Motors",
      "Capgemini"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 24",
    "hodsCount": 4,
    "facultyStrength": 59,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 5,
    "phone": "099-12345674",
    "email": "admission@institute24.edu",
    "admissionOfficeContact": "099-12345674 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-25",
    "name": "Kollam Institute of Technology & Diploma Engineering 25",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kollam District",
    "city": "Kollam",
    "address": "Opposite Science Park, Sector 5, Kollam, Kerala Pin-400725",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Kerala (BTE Kerala)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1975,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Library Science"
    ],
    "engineeringDiplomas": [
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Library Science"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Suzuki Motors",
      "Capgemini"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.7 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Suzuki Motors",
      "Capgemini",
      "Wipro"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 25",
    "hodsCount": 5,
    "facultyStrength": 35,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 6,
    "phone": "099-12345675",
    "email": "admission@institute25.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-26",
    "name": "Kakinada Institute of Technology & Diploma Engineering 26",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Kakinada District",
    "city": "Kakinada",
    "address": "Opposite Science Park, Sector 6, Kakinada, Andhra Pradesh Pin-400754",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Andhra Pradesh (SBTET AP)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1976,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Commercial Practice",
      "Diploma in Modern Office Management"
    ],
    "engineeringDiplomas": [
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Commercial Practice",
      "Modern Office Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Capgemini",
      "Wipro"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.9 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Capgemini",
      "Wipro",
      "Tech Mahindra"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 26",
    "hodsCount": 6,
    "facultyStrength": 36,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 7,
    "phone": "099-12345676",
    "email": "admission@institute26.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-27",
    "name": "Karimnagar Institute of Technology & Diploma Engineering 27",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar District",
    "city": "Karimnagar",
    "address": "Opposite Science Park, Sector 7, Karimnagar, Telangana Pin-400783",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Telangana (SBTET TS)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1977,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering"
    ],
    "engineeringDiplomas": [
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Wipro",
      "Tech Mahindra"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.0 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Wipro",
      "Tech Mahindra",
      "Cognizant"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 27",
    "hodsCount": 4,
    "facultyStrength": 37,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 8,
    "phone": "099-12345677",
    "email": "admission@institute27.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-28",
    "name": "Government Women's Polytechnic 28",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Haryana",
    "district": "Faridabad District",
    "city": "Faridabad",
    "address": "Opposite Science Park, Sector 8, Faridabad, Haryana Pin-400812",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Haryana State Board of Technical Education (HSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1978,
    "ownership": "Government",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Travel & Tourism"
    ],
    "engineeringDiplomas": [
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Travel & Tourism"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tech Mahindra",
      "Cognizant"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.2 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Tech Mahindra",
      "Cognizant",
      "Escorts"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 28",
    "hodsCount": 5,
    "facultyStrength": 38,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 9,
    "phone": "099-12345678",
    "email": "admission@institute28.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-29",
    "name": "Mohali Institute of Technology & Diploma Engineering 29",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Punjab",
    "district": "Mohali District",
    "city": "Mohali",
    "address": "Opposite Science Park, Sector 9, Mohali, Punjab Pin-400841",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Punjab State Board of Technical Education and Industrial Training (PSBTE&IT)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1979,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Beauty & Wellness",
      "Diploma in Pharmacy"
    ],
    "engineeringDiplomas": [
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Beauty & Wellness",
      "Pharmacy"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Cognizant",
      "Escorts"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.3 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Cognizant",
      "Escorts",
      "Tata Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 29",
    "hodsCount": 6,
    "facultyStrength": 39,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 10,
    "phone": "099-12345679",
    "email": "admission@institute29.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-30",
    "name": "Varanasi Institute of Technology & Diploma Engineering 30",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Varanasi District",
    "city": "Varanasi",
    "address": "Opposite Science Park, Sector 0, Varanasi, Uttar Pradesh Pin-400870",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Uttar Pradesh (BTEUP)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1980,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering"
    ],
    "engineeringDiplomas": [
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Escorts",
      "Tata Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.2 LPA",
    "highestPackage": "4.5 LPA",
    "topRecruiters": [
      "Escorts",
      "Tata Power",
      "Havells"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 30",
    "hodsCount": 4,
    "facultyStrength": 40,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 11,
    "phone": "099-12345670",
    "email": "admission@institute30.edu",
    "admissionOfficeContact": "099-12345670 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-31",
    "name": "Amravati Institute of Technology & Diploma Engineering 31",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Amravati District",
    "city": "Amravati",
    "address": "Opposite Science Park, Sector 1, Amravati, Maharashtra Pin-400899",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Maharashtra State Board of Technical Education (MSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1981,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Hotel Management"
    ],
    "engineeringDiplomas": [
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [
      "Hotel Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tata Power",
      "Havells"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.4 LPA",
    "highestPackage": "5.0 LPA",
    "topRecruiters": [
      "Tata Power",
      "Havells",
      "Thermax"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 31",
    "hodsCount": 5,
    "facultyStrength": 41,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 12,
    "phone": "099-12345671",
    "email": "admission@institute31.edu",
    "admissionOfficeContact": "099-12345671 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-32",
    "name": "Government Polytechnic 32",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Belgaum District",
    "city": "Belgaum",
    "address": "Opposite Science Park, Sector 2, Belgaum, Karnataka Pin-400928",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Karnataka (BTEK)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1982,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Fashion Design",
      "Diploma in Interior Design"
    ],
    "engineeringDiplomas": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Fashion Design",
      "Interior Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Havells",
      "Thermax"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.5 LPA",
    "highestPackage": "5.5 LPA",
    "topRecruiters": [
      "Havells",
      "Thermax",
      "Honda Motorcycles"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 32",
    "hodsCount": 6,
    "facultyStrength": 42,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 5,
    "phone": "099-12345672",
    "email": "admission@institute32.edu",
    "admissionOfficeContact": "099-12345672 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-33",
    "name": "Tirunelveli Institute of Technology & Diploma Engineering 33",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Tirunelveli District",
    "city": "Tirunelveli",
    "address": "Opposite Science Park, Sector 3, Tirunelveli, Tamil Nadu Pin-400957",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Directorate of Technical Education, Tamil Nadu (DoTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1983,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Thermax",
      "Honda Motorcycles"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.7 LPA",
    "highestPackage": "6.0 LPA",
    "topRecruiters": [
      "Thermax",
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 33",
    "hodsCount": 4,
    "facultyStrength": 43,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 6,
    "phone": "099-12345673",
    "email": "admission@institute33.edu",
    "admissionOfficeContact": "099-12345673 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-34",
    "name": "Mayur Vihar Institute of Technology & Diploma Engineering 34",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Mayur Vihar District",
    "city": "Mayur Vihar",
    "address": "Opposite Science Park, Sector 4, Mayur Vihar, Delhi Pin-400986",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Delhi Skill and Entrepreneurship University (DSEU)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1984,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Architecture Assistantship"
    ],
    "engineeringDiplomas": [
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [
      "Architecture Assistantship"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.8 LPA",
    "highestPackage": "6.5 LPA",
    "topRecruiters": [
      "Honda Motorcycles",
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 34",
    "hodsCount": 5,
    "facultyStrength": 44,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 7,
    "phone": "099-12345674",
    "email": "admission@institute34.edu",
    "admissionOfficeContact": "099-12345674 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-35",
    "name": "Government Women's Polytechnic 35",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Kolkata District",
    "city": "Kolkata",
    "address": "Opposite Science Park, Sector 5, Kolkata, West Bengal Pin-401015",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCTVESD)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1985,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Library Science",
      "Diploma in Commercial Practice"
    ],
    "engineeringDiplomas": [
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Library Science",
      "Commercial Practice"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.0 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Reliance Industries",
      "Ambuja Cement",
      "Adani Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 35",
    "hodsCount": 6,
    "facultyStrength": 45,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 8,
    "phone": "099-12345675",
    "email": "admission@institute35.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-36",
    "name": "Government Polytechnic 36",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Muzaffarpur District",
    "city": "Muzaffarpur",
    "address": "Opposite Science Park, Sector 6, Muzaffarpur, Bihar Pin-401044",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education, Bihar (SBTE Bihar)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1986,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science"
    ],
    "engineeringDiplomas": [
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Ambuja Cement",
      "Adani Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.1 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Ambuja Cement",
      "Adani Power",
      "Maruti Suzuki"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 36",
    "hodsCount": 4,
    "facultyStrength": 46,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 9,
    "phone": "099-12345676",
    "email": "admission@institute36.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-37",
    "name": "Vadodara Institute of Technology & Diploma Engineering 37",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Vadodara District",
    "city": "Vadodara",
    "address": "Opposite Science Park, Sector 7, Vadodara, Gujarat Pin-401073",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Gujarat Technological University (GTU) / TEB Gujarat",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1987,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Modern Office Management"
    ],
    "engineeringDiplomas": [
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Modern Office Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Adani Power",
      "Maruti Suzuki"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.3 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Adani Power",
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 37",
    "hodsCount": 5,
    "facultyStrength": 47,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 10,
    "phone": "099-12345677",
    "email": "admission@institute37.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-38",
    "name": "Kota Institute of Technology & Diploma Engineering 38",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Kota District",
    "city": "Kota",
    "address": "Opposite Science Park, Sector 8, Kota, Rajasthan Pin-401102",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Rajasthan (BTER)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1988,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Travel & Tourism",
      "Diploma in Beauty & Wellness"
    ],
    "engineeringDiplomas": [
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [
      "Travel & Tourism",
      "Beauty & Wellness"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.4 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Maruti Suzuki",
      "Schneider Electric",
      "L&T Construction"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 38",
    "hodsCount": 6,
    "facultyStrength": 48,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 11,
    "phone": "099-12345678",
    "email": "admission@institute38.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-39",
    "name": "Ujjain Institute of Technology & Diploma Engineering 39",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Ujjain District",
    "city": "Ujjain",
    "address": "Opposite Science Park, Sector 9, Ujjain, Madhya Pradesh Pin-401131",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1989,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering"
    ],
    "engineeringDiplomas": [
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Schneider Electric",
      "L&T Construction"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.5 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Schneider Electric",
      "L&T Construction",
      "Tata Motors"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 39",
    "hodsCount": 4,
    "facultyStrength": 49,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 12,
    "phone": "099-12345679",
    "email": "admission@institute39.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-40",
    "name": "Government Polytechnic 40",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Palakkad District",
    "city": "Palakkad",
    "address": "Opposite Science Park, Sector 0, Palakkad, Kerala Pin-401160",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Kerala (BTE Kerala)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 1990,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Pharmacy"
    ],
    "engineeringDiplomas": [
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [
      "Pharmacy"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "L&T Construction",
      "Tata Motors"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.7 LPA",
    "highestPackage": "4.5 LPA",
    "topRecruiters": [
      "L&T Construction",
      "Tata Motors",
      "Bajaj Auto"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 40",
    "hodsCount": 5,
    "facultyStrength": 50,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 5,
    "phone": "099-12345670",
    "email": "admission@institute40.edu",
    "admissionOfficeContact": "099-12345670 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-41",
    "name": "Anantapur Institute of Technology & Diploma Engineering 41",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Anantapur District",
    "city": "Anantapur",
    "address": "Opposite Science Park, Sector 1, Anantapur, Andhra Pradesh Pin-401189",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Andhra Pradesh (SBTET AP)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1991,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Hotel Management",
      "Diploma in Fashion Design"
    ],
    "engineeringDiplomas": [
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Hotel Management",
      "Fashion Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tata Motors",
      "Bajaj Auto"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.9 LPA",
    "highestPackage": "5.0 LPA",
    "topRecruiters": [
      "Tata Motors",
      "Bajaj Auto",
      "Siemens"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 41",
    "hodsCount": 6,
    "facultyStrength": 51,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 6,
    "phone": "099-12345671",
    "email": "admission@institute41.edu",
    "admissionOfficeContact": "099-12345671 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-42",
    "name": "Government Women's Polytechnic 42",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Hyderabad District",
    "city": "Hyderabad",
    "address": "Opposite Science Park, Sector 2, Hyderabad, Telangana Pin-401218",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Telangana (SBTET TS)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1992,
    "ownership": "Autonomous",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering"
    ],
    "engineeringDiplomas": [
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Bajaj Auto",
      "Siemens"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.0 LPA",
    "highestPackage": "5.5 LPA",
    "topRecruiters": [
      "Bajaj Auto",
      "Siemens",
      "ABB Group"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 42",
    "hodsCount": 4,
    "facultyStrength": 52,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 7,
    "phone": "099-12345672",
    "email": "admission@institute42.edu",
    "admissionOfficeContact": "099-12345672 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-43",
    "name": "Gurugram Institute of Technology & Diploma Engineering 43",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Haryana",
    "district": "Gurugram District",
    "city": "Gurugram",
    "address": "Opposite Science Park, Sector 3, Gurugram, Haryana Pin-401247",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Haryana State Board of Technical Education (HSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1993,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Interior Design"
    ],
    "engineeringDiplomas": [
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Interior Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Siemens",
      "ABB Group"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.2 LPA",
    "highestPackage": "6.0 LPA",
    "topRecruiters": [
      "Siemens",
      "ABB Group",
      "Suzuki Motors"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 43",
    "hodsCount": 5,
    "facultyStrength": 53,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 8,
    "phone": "099-12345673",
    "email": "admission@institute43.edu",
    "admissionOfficeContact": "099-12345673 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-44",
    "name": "Government Polytechnic 44",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Punjab",
    "district": "Jalandhar District",
    "city": "Jalandhar",
    "address": "Opposite Science Park, Sector 4, Jalandhar, Punjab Pin-401276",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Punjab State Board of Technical Education and Industrial Training (PSBTE&IT)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1994,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Architecture Assistantship",
      "Diploma in Library Science"
    ],
    "engineeringDiplomas": [
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Architecture Assistantship",
      "Library Science"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "ABB Group",
      "Suzuki Motors"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.3 LPA",
    "highestPackage": "6.5 LPA",
    "topRecruiters": [
      "ABB Group",
      "Suzuki Motors",
      "Capgemini"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 44",
    "hodsCount": 6,
    "facultyStrength": 54,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 9,
    "phone": "099-12345674",
    "email": "admission@institute44.edu",
    "admissionOfficeContact": "099-12345674 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-45",
    "name": "Gorakhpur Institute of Technology & Diploma Engineering 45",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Uttar Pradesh",
    "district": "Gorakhpur District",
    "city": "Gorakhpur",
    "address": "Opposite Science Park, Sector 5, Gorakhpur, Uttar Pradesh Pin-401305",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Uttar Pradesh (BTEUP)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": true,
    "yearEstablished": 1995,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering"
    ],
    "engineeringDiplomas": [
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Suzuki Motors",
      "Capgemini"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.2 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Suzuki Motors",
      "Capgemini",
      "Wipro"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 45",
    "hodsCount": 4,
    "facultyStrength": 55,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 10,
    "phone": "099-12345675",
    "email": "admission@institute45.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-46",
    "name": "Kolhapur Institute of Technology & Diploma Engineering 46",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Maharashtra",
    "district": "Kolhapur District",
    "city": "Kolhapur",
    "address": "Opposite Science Park, Sector 6, Kolhapur, Maharashtra Pin-401334",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Maharashtra State Board of Technical Education (MSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1996,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Commercial Practice"
    ],
    "engineeringDiplomas": [
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Commercial Practice"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Capgemini",
      "Wipro"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.4 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Capgemini",
      "Wipro",
      "Tech Mahindra"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 46",
    "hodsCount": 5,
    "facultyStrength": 56,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 11,
    "phone": "099-12345676",
    "email": "admission@institute46.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-47",
    "name": "Gulbarga Institute of Technology & Diploma Engineering 47",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Karnataka",
    "district": "Gulbarga District",
    "city": "Gulbarga",
    "address": "Opposite Science Park, Sector 7, Gulbarga, Karnataka Pin-401363",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Karnataka (BTEK)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1997,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Modern Office Management",
      "Diploma in Travel & Tourism"
    ],
    "engineeringDiplomas": [
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [
      "Modern Office Management",
      "Travel & Tourism"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Wipro",
      "Tech Mahindra"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.5 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Wipro",
      "Tech Mahindra",
      "Cognizant"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 47",
    "hodsCount": 6,
    "facultyStrength": 57,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 12,
    "phone": "099-12345677",
    "email": "admission@institute47.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-48",
    "name": "Government Polytechnic 48",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Tamil Nadu",
    "district": "Vellore District",
    "city": "Vellore",
    "address": "Opposite Science Park, Sector 8, Vellore, Tamil Nadu Pin-401392",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Directorate of Technical Education, Tamil Nadu (DoTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 1998,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering"
    ],
    "engineeringDiplomas": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tech Mahindra",
      "Cognizant"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.7 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Tech Mahindra",
      "Cognizant",
      "Escorts"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 48",
    "hodsCount": 4,
    "facultyStrength": 58,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 5,
    "phone": "099-12345678",
    "email": "admission@institute48.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-49",
    "name": "Government Women's Polytechnic 49",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Delhi",
    "district": "Okhla District",
    "city": "Okhla",
    "address": "Opposite Science Park, Sector 9, Okhla, Delhi Pin-401421",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Delhi Skill and Entrepreneurship University (DSEU)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 1999,
    "ownership": "Private",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Civil Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Beauty & Wellness"
    ],
    "engineeringDiplomas": [
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology"
    ],
    "nonEngineeringDiplomas": [
      "Beauty & Wellness"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Cognizant",
      "Escorts"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "2.8 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Cognizant",
      "Escorts",
      "Tata Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 49",
    "hodsCount": 5,
    "facultyStrength": 59,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 6,
    "phone": "099-12345679",
    "email": "admission@institute49.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-50",
    "name": "Howrah Institute of Technology & Diploma Engineering 50",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "West Bengal",
    "district": "Howrah District",
    "city": "Howrah",
    "address": "Opposite Science Park, Sector 0, Howrah, West Bengal Pin-401450",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCTVESD)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 2000,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Electrical Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Pharmacy",
      "Diploma in Hotel Management"
    ],
    "engineeringDiplomas": [
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [
      "Pharmacy",
      "Hotel Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Escorts",
      "Tata Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.0 LPA",
    "highestPackage": "4.5 LPA",
    "topRecruiters": [
      "Escorts",
      "Tata Power",
      "Havells"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 50",
    "hodsCount": 6,
    "facultyStrength": 35,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 7,
    "phone": "099-12345670",
    "email": "admission@institute50.edu",
    "admissionOfficeContact": "099-12345670 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-51",
    "name": "Gaya Institute of Technology & Diploma Engineering 51",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Bihar",
    "district": "Gaya District",
    "city": "Gaya",
    "address": "Opposite Science Park, Sector 1, Gaya, Bihar Pin-401479",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education, Bihar (SBTE Bihar)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 2001,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering"
    ],
    "engineeringDiplomas": [
      "Electronics & Communication Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Tata Power",
      "Havells"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.1 LPA",
    "highestPackage": "5.0 LPA",
    "topRecruiters": [
      "Tata Power",
      "Havells",
      "Thermax"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 51",
    "hodsCount": 4,
    "facultyStrength": 36,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 8,
    "phone": "099-12345671",
    "email": "admission@institute51.edu",
    "admissionOfficeContact": "099-12345671 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-52",
    "name": "Government Polytechnic 52",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Gujarat",
    "district": "Rajkot District",
    "city": "Rajkot",
    "address": "Opposite Science Park, Sector 2, Rajkot, Gujarat Pin-401508",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Gujarat Technological University (GTU) / TEB Gujarat",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 2002,
    "ownership": "Government",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Computer Engineering",
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Fashion Design"
    ],
    "engineeringDiplomas": [
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ],
    "nonEngineeringDiplomas": [
      "Fashion Design"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Havells",
      "Thermax"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.3 LPA",
    "highestPackage": "5.5 LPA",
    "topRecruiters": [
      "Havells",
      "Thermax",
      "Honda Motorcycles"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 52",
    "hodsCount": 5,
    "facultyStrength": 37,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 9,
    "phone": "099-12345672",
    "email": "admission@institute52.edu",
    "admissionOfficeContact": "099-12345672 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-53",
    "name": "Ajmer Institute of Technology & Diploma Engineering 53",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Rajasthan",
    "district": "Ajmer District",
    "city": "Ajmer",
    "address": "Opposite Science Park, Sector 3, Ajmer, Rajasthan Pin-401537",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Education, Rajasthan (BTER)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 2003,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Information Technology",
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Interior Design",
      "Diploma in Architecture Assistantship"
    ],
    "engineeringDiplomas": [
      "Information Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Interior Design",
      "Architecture Assistantship"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Thermax",
      "Honda Motorcycles"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.4 LPA",
    "highestPackage": "6.0 LPA",
    "topRecruiters": [
      "Thermax",
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 53",
    "hodsCount": 6,
    "facultyStrength": 38,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 10,
    "phone": "099-12345673",
    "email": "admission@institute53.edu",
    "admissionOfficeContact": "099-12345673 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-54",
    "name": "Sagar Institute of Technology & Diploma Engineering 54",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Madhya Pradesh",
    "district": "Sagar District",
    "city": "Sagar",
    "address": "Opposite Science Park, Sector 4, Sagar, Madhya Pradesh Pin-401566",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 2004,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Artificial Intelligence",
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics"
    ],
    "engineeringDiplomas": [
      "Artificial Intelligence",
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Honda Motorcycles",
      "Reliance Industries"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.5 LPA",
    "highestPackage": "6.5 LPA",
    "topRecruiters": [
      "Honda Motorcycles",
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 54",
    "hodsCount": 4,
    "facultyStrength": 39,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 11,
    "phone": "099-12345674",
    "email": "admission@institute54.edu",
    "admissionOfficeContact": "099-12345674 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-55",
    "name": "Kottayam Institute of Technology & Diploma Engineering 55",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Kerala",
    "district": "Kottayam District",
    "city": "Kottayam",
    "address": "Opposite Science Park, Sector 5, Kottayam, Kerala Pin-401595",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Board of Technical Examinations, Kerala (BTE Kerala)",
    "aicteApproved": true,
    "ugcRecognised": true,
    "nbaAccredited": false,
    "yearEstablished": 2005,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Data Science",
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Library Science"
    ],
    "engineeringDiplomas": [
      "Data Science",
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Library Science"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Reliance Industries",
      "Ambuja Cement"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.7 LPA",
    "highestPackage": "7.0 LPA",
    "topRecruiters": [
      "Reliance Industries",
      "Ambuja Cement",
      "Adani Power"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 55",
    "hodsCount": 5,
    "facultyStrength": 40,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 4,
    "visitingFacultyCount": 12,
    "phone": "099-12345675",
    "email": "admission@institute55.edu",
    "admissionOfficeContact": "099-12345675 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-56",
    "name": "Government Women's Polytechnic 56",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Andhra Pradesh",
    "district": "Vijayawada District",
    "city": "Vijayawada",
    "address": "Opposite Science Park, Sector 6, Vijayawada, Andhra Pradesh Pin-401624",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Andhra Pradesh (SBTET AP)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 2006,
    "ownership": "Government",
    "isWomensPolytechnic": true,
    "programmes": [
      "Diploma in Automobile Engineering",
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Commercial Practice",
      "Diploma in Modern Office Management"
    ],
    "engineeringDiplomas": [
      "Automobile Engineering",
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics"
    ],
    "nonEngineeringDiplomas": [
      "Commercial Practice",
      "Modern Office Management"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Ambuja Cement",
      "Adani Power"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": true,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "3.9 LPA",
    "highestPackage": "7.5 LPA",
    "topRecruiters": [
      "Ambuja Cement",
      "Adani Power",
      "Maruti Suzuki"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹8,000 - ₹12,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 56",
    "hodsCount": 6,
    "facultyStrength": 41,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 5,
    "visitingFacultyCount": 5,
    "phone": "099-12345676",
    "email": "admission@institute56.edu",
    "admissionOfficeContact": "099-12345676 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-57",
    "name": "Karimnagar Institute of Technology & Diploma Engineering 57",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Telangana",
    "district": "Karimnagar District",
    "city": "Karimnagar",
    "address": "Opposite Science Park, Sector 7, Karimnagar, Telangana Pin-401653",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "State Board of Technical Education and Training, Telangana (SBTET TS)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": true,
    "yearEstablished": 2007,
    "ownership": "Private",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Production Engineering",
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering"
    ],
    "engineeringDiplomas": [
      "Production Engineering",
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering"
    ],
    "nonEngineeringDiplomas": [],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Adani Power",
      "Maruti Suzuki"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": true,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.0 LPA",
    "highestPackage": "8.0 LPA",
    "topRecruiters": [
      "Adani Power",
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹12,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 57",
    "hodsCount": 4,
    "facultyStrength": 42,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 6,
    "visitingFacultyCount": 6,
    "phone": "099-12345677",
    "email": "admission@institute57.edu",
    "admissionOfficeContact": "099-12345677 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-58",
    "name": "Ambala Institute of Technology & Diploma Engineering 58",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Haryana",
    "district": "Ambala District",
    "city": "Ambala",
    "address": "Opposite Science Park, Sector 8, Ambala, Haryana Pin-401682",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Haryana State Board of Technical Education (HSBTE)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 2008,
    "ownership": "Autonomous",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Mechatronics Engineering",
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Travel & Tourism"
    ],
    "engineeringDiplomas": [
      "Mechatronics Engineering",
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Travel & Tourism"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "State Polytechnic Joint Entrance Examination"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Maruti Suzuki",
      "Schneider Electric"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": true,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.2 LPA",
    "highestPackage": "8.5 LPA",
    "topRecruiters": [
      "Maruti Suzuki",
      "Schneider Electric",
      "L&T Construction"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 58",
    "hodsCount": 5,
    "facultyStrength": 43,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 7,
    "visitingFacultyCount": 7,
    "phone": "099-12345678",
    "email": "admission@institute58.edu",
    "admissionOfficeContact": "099-12345678 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  },
  {
    "id": "poly-college-59",
    "name": "Mohali Institute of Technology & Diploma Engineering 59",
    "logoUrl": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&h=200&auto=format&fit=crop",
    "coverImageUrl": "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&h=600&auto=format&fit=crop",
    "campusGallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop"
    ],
    "state": "Punjab",
    "district": "Mohali District",
    "city": "Mohali",
    "address": "Opposite Science Park, Sector 9, Mohali, Punjab Pin-401711",
    "googleMapsUrl": "https://maps.google.com",
    "website": "https://example.edu",
    "admissionPortalUrl": "https://example.edu/admission",
    "counsellingPortalUrl": "https://example.edu/counseling",
    "affiliatedBoard": "Punjab State Board of Technical Education and Industrial Training (PSBTE&IT)",
    "aicteApproved": true,
    "ugcRecognised": false,
    "nbaAccredited": false,
    "yearEstablished": 2009,
    "ownership": "Minority Institution",
    "isWomensPolytechnic": false,
    "programmes": [
      "Diploma in Robotics",
      "Diploma in Chemical Engineering",
      "Diploma in Textile Engineering",
      "Diploma in Agricultural Engineering",
      "Diploma in Biomedical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Beauty & Wellness",
      "Diploma in Pharmacy"
    ],
    "engineeringDiplomas": [
      "Robotics",
      "Chemical Engineering",
      "Textile Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "nonEngineeringDiplomas": [
      "Beauty & Wellness",
      "Pharmacy"
    ],
    "eligibility": "Pass in 10th Standard / Matriculation with Science and Mathematics with minimum 35% marks.",
    "admission10thPass": "Admission via Centralised Merit counselling or state level Polytechnic entrance test.",
    "admission12thPass": "Direct 2nd Year admission for 12th Vocational, Science or 2-year ITI Certificate holders.",
    "lateralEntry": "lateral entry direct admission in 3rd semester for ITI and HSC candidates.",
    "entranceExams": [
      "Merit-Based Centralized Counselling"
    ],
    "admissionProcess": "Register on state admission board portal, lock choices, participate in document verification, and check CAP rounds results.",
    "infrastructure": [
      "Mechanical Workshop",
      "Civil Engineering Lab",
      "Electrical Lab",
      "Electronics Lab",
      "Computer Centre",
      "CAD/CAM Lab",
      "Digital Library",
      "Central Library",
      "Hostel",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Placement Cell",
      "Medical Facility",
      "Sports Complex",
      "Automation Lab",
      "Robotics Lab",
      "AI Laboratory"
    ],
    "industrialVisits": "Conducted annually to localized industrial areas, steel plants, electricity substations, and production units.",
    "apprenticeshipProgramme": "Facilitated under NATS (National Apprenticeship Training Scheme) with stipend support.",
    "industrialInternship": "Mandatory 4-6 weeks summer internship programs with associated industries.",
    "industryCollaborations": [
      "Schneider Electric",
      "L&T Construction"
    ],
    "skillDevelopmentCentre": "Authorized Pradhan Mantri Kaushal Kendra or state-level technical skill hub.",
    "msmeCollaboration": false,
    "nsdcPartnership": false,
    "startupIncubation": false,
    "edcCell": true,
    "placementCell": true,
    "averagePackage": "4.3 LPA",
    "highestPackage": "9.0 LPA",
    "topRecruiters": [
      "Schneider Electric",
      "L&T Construction",
      "Tata Motors"
    ],
    "higherEducationPathways": "Lateral entry scheme allows direct admission into 2nd year of standard B.Tech/B.E. degree programs.",
    "entrepreneurshipSupport": "Supports student startups through specialized ED Cells, holding ideation workshops and providing MSME loan assistance guidance.",
    "tuitionFees": "₹35,000 - ₹65,000 / year",
    "hostelFees": "₹4,000 / year",
    "scholarships": [
      "State Government Post-Matric Scholarship",
      "Minority Scholarship (MOMA)",
      "AICTE Pragati and Swanath Scholarships",
      "National Scholarship Portal (NSP)"
    ],
    "educationLoanAssistance": true,
    "principalName": "Prof. Amit Sharma 59",
    "hodsCount": 6,
    "facultyStrength": 44,
    "studentFacultyRatio": "20:1",
    "industryExpertsCount": 8,
    "visitingFacultyCount": 8,
    "phone": "099-12345679",
    "email": "admission@institute59.edu",
    "admissionOfficeContact": "099-12345679 Ext 5",
    "socialMediaLinks": {
      "facebook": "https://facebook.com",
      "linkedin": "https://linkedin.com"
    },
    "lastVerifiedDate": "2026-05-24"
  }
];
