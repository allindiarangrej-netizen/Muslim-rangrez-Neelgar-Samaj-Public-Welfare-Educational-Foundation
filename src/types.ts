export type Language = 'en' | 'hi' | 'ur';

export interface AreaNode {
  id: string;
  nameEn: string;
  nameHi: string;
  presidentEn: string;
  presidentHi: string;
  presidentPhoto: string;
  presidentMessageEn: string;
  presidentMessageHi: string;
  stats: {
    population: number;
    families: number;
    literacyRate: string;
    verifiedPercentage: number;
  };
  committee: {
    roleEn: string;
    roleHi: string;
    nameEn: string;
    nameHi: string;
    phone: string;
  }[];
}

export interface MatrimonialProfile {
  id: string;
  gender: 'M' | 'F';
  nameEn: string;
  nameHi: string;
  age: number;
  heightCm: number;
  educationEn: string;
  educationHi: string;
  occupationEn: string;
  occupationHi: string;
  districtEn: string;
  districtHi: string;
  stateEn: string;
  stateHi: string;
  photoUrl: string;
  isVerified: boolean;
  privacyMask: boolean; // True means blurred by default
  phone?: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
}

export interface JobListing {
  id: string;
  titleEn: string;
  titleHi: string;
  companyEn: string;
  companyHi: string;
  type: 'Government' | 'Private' | 'Gulf' | 'International';
  locationEn: string;
  locationHi: string;
  salaryEn: string;
  salaryHi: string;
  eligibilityEn: string;
  eligibilityHi: string;
  postedDate: string;
}

export interface GovernmentScheme {
  id: string;
  nameEn: string;
  nameHi: string;
  categoryEn: string;
  categoryHi: string;
  benefitsEn: string;
  benefitsHi: string;
  eligibilityEn: string;
  eligibilityHi: string;
  minAge: number;
  maxIncome: number; // Max annual income allowed
  targetGroup: 'All' | 'Students' | 'Women' | 'Minority' | 'Seniors';
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: 'Medical' | 'Emergency' | 'Financial' | 'Legal' | 'Women Support' | 'Senior Citizen' | 'Other';
  description: string;
  status: 'Open' | 'Area Verified' | 'Trust Assigned' | 'Resolved';
  dateCreated: string;
}

export interface BloodDonor {
  id: string;
  nameEn: string;
  nameHi: string;
  bloodGroup: string;
  districtEn: string;
  districtHi: string;
  phone: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
  isAvailable: boolean;
}

export interface NewsItem {
  id: string;
  titleEn: string;
  titleHi: string;
  excerptEn: string;
  excerptHi: string;
  contentEn: string;
  contentHi: string;
  date: string;
  image: string;
  categoryEn: string;
  categoryHi: string;
}

export interface CommunityEvent {
  id: string;
  titleEn: string;
  titleHi: string;
  date: string; // YYYY-MM-DDTHH:mm:ss format
  venueEn: string;
  venueHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface FamilyMember {
  id: string;
  nameEn: string;
  nameHi: string;
  relationship: 'Self' | 'Spouse' | 'Son' | 'Daughter' | 'Father' | 'Mother';
  gender: 'M' | 'F';
  age: number;
  educationEn: string;
  educationHi: string;
  occupationEn: string;
  occupationHi: string;
}

export interface VolunteerProfile {
  id: string;
  name: string;
  phone?: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
  photoUrl: string;
  designation: string;
  committeeName: string;
  city: string;
  state: string;
  memberSince: string;
  skills: string[];
  totalVolunteerHours: number;
  numberOfActivities: number;
  numberOfBeneficiariesServed: number;
  bloodDonations: number;
  treesPlanted: number;
  medicalCampsOrganized: number;
  educationalProgrammesConducted: number;
  awardsReceived: string[];
  certificates: string[];
  gallery: string[];
  testimonials: { name: string; text: string }[];
  socialImpactStory: string;
  // Motivation features
  badges: string[];
  achievementLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  milestones: { title: string; date: string }[];
  anniversaryDate: string;
}

export interface CommitteeProfile {
  id: string;
  committeeName: string;
  whatsapp?: string;
  showWhatsAppPublicly?: boolean;
  officeBearers: { role: string; name: string }[];
  district: string;
  state: string;
  yearEstablished: number;
  totalMembers: number;
  totalVolunteers: number;
  totalActivities: number;
  beneficiaries: number;
  annualReports: { year: number; url: string }[];
  photoGallery: string[];
  videos: string[];
  monthlyPerformance: { month: string; score: number }[];
  communityRating: number;
}

export type VerificationStatus = 'Pending' | 'Verified' | 'Rejected';

export interface VerificationDetails {
  status: VerificationStatus;
  evidencePhotos: string[];
  attendanceRecordsUrl?: string;
  beneficiaryConfirmation?: boolean;
  committeeApproval: boolean;
  activityReportUrl?: string;
  date: string;
  location: string;
  supportingDocuments?: string[];
  auditTrail: { timestamp: string; action: string; actor: string }[];
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  type: 'Volunteer' | 'Committee';
  location: { city: string; district: string; state: string; };
  points: number;
  category: string;
  timestamp: string;
  verification: VerificationDetails;
}

export interface LeaderboardFilter {
  level: 'National' | 'State' | 'District' | 'City' | 'Committee';
  locationName?: string;
  month?: string;
  year?: string;
}

export interface MonthlyRecognition {
  id: string;
  month: string;
  volunteerOfTheMonth: string;
  committeeOfTheMonth: string;
  projectOfTheMonth: string;
  inspirationalStory: string;
}

export interface DigitalAppreciation {
  id: string;
  badge: 'Gold' | 'Silver' | 'Bronze';
  stars: number;
  achievementLevel: string;
  certificateUrl: string;
}
