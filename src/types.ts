export type Language = 'en' | 'hi';

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
