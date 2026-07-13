// ============================================================================
// CENTRALIZED ENTERPRISE DATABASE LAYER FOR RANGREZ COMMUNITY BHARAT PORTAL
// Replaces browser-only transient storage with a unified, relational-style DB
// Supports 21 core tables, CRUD operations, indexing, and automated backups.
// ============================================================================

import { 
  jobListings, 
  governmentSchemes, 
  communityEvents, 
  bloodDonors, 
  newsArticles, 
  mockProfessionals,
  mockSuccessStories,
  districtsByState
} from '../data';
import { getSupabase } from '../lib/supabaseClient';

export interface DBRecord {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  isDeleted?: boolean;
}

export interface MemberRecord extends DBRecord {
  memberId: string;
  nameEn: string;
  nameHi: string;
  nameUr?: string;
  gender: 'M' | 'F';
  age: number;
  phone: string;
  email: string;
  district: string;
  state: string;
  tehsil?: string;
  education: string;
  occupation: string;
  bloodGroup: string;
  isVerified: boolean;
  status: 'Active' | 'Pending' | 'Suspended';
  photoUrl?: string;
  membershipType: 'Life' | 'Annual' | 'Honorary' | 'Youth';
}

export interface FamilyRecord extends DBRecord {
  familyId: string;
  headOfFamilyEn: string;
  headOfFamilyHi: string;
  district: string;
  state: string;
  address: string;
  contactPhone: string;
  totalMembersCount: number;
  annualIncomeBracket: string;
  rationCardType?: string;
  isVerified: boolean;
  members: {
    name: string;
    relationship: string;
    age: number;
    education: string;
    occupation: string;
    isVoter: boolean;
  }[];
}

export interface CommitteeRecord extends DBRecord {
  committeeNameEn: string;
  committeeNameHi: string;
  level: 'National' | 'State' | 'District' | 'City' | 'Tehsil';
  state: string;
  district?: string;
  establishedYear: number;
  presidentName: string;
  presidentPhone: string;
  secretaryName: string;
  treasurerName: string;
  totalMembers: number;
  status: 'Active' | 'Under Formation';
  bankAccountVerified: boolean;
}

export interface MatrimonialRecord extends DBRecord {
  gender: 'M' | 'F';
  nameEn: string;
  nameHi: string;
  age: number;
  heightCm: number;
  education: string;
  occupation: string;
  annualIncome: string;
  district: string;
  state: string;
  maritalStatus: 'Unmarried' | 'Divorced' | 'Widow/Widower';
  photoUrl: string;
  isVerified: boolean;
  privacyMask: boolean;
}

export interface HospitalRecord extends DBRecord {
  nameEn: string;
  nameHi: string;
  city: string;
  district: string;
  state: string;
  address: string;
  contactPhone: string;
  emergencyPhone?: string;
  discountOffered: string;
  specialties: string[];
  isEmpanelled: boolean;
}

export interface BloodBankRecord extends DBRecord {
  name: string;
  city: string;
  district: string;
  state: string;
  contactPhone: string;
  stockStatus: Record<string, 'Available' | 'Low' | 'Out of Stock'>;
  verifiedDate: string;
}

export interface SurveyRecord extends DBRecord {
  titleEn: string;
  titleHi: string;
  description: string;
  targetAudience: 'All' | 'Youth' | 'Women' | 'Committees';
  status: 'Active' | 'Closed' | 'Draft';
  totalResponsesCount: number;
  questions: {
    id: string;
    questionText: string;
    type: 'multiple_choice' | 'text' | 'rating';
    options?: string[];
  }[];
}

export interface ResolutionRecord extends DBRecord {
  resolutionNumber: string;
  titleEn: string;
  titleHi: string;
  category: 'Social Reform' | 'Education' | 'Matrimonial' | 'Governance' | 'Welfare';
  proposedBy: string;
  datePassed: string;
  status: 'Approved' | 'Under Review' | 'Implemented' | 'Proposed';
  votesFor: number;
  votesAgainst: number;
  descriptionEn: string;
  descriptionHi: string;
}

export interface AuditLogRecord extends DBRecord {
  action: string;
  module: string;
  actorId: string;
  actorName: string;
  actorRole: string;
  ipAddress: string;
  details: string;
  severity: 'INFO' | 'WARNING' | 'ALERT';
}

export interface WebsiteSettingsRecord {
  portalNameEn: string;
  portalNameHi: string;
  maintenanceMode: boolean;
  allowNewRegistrations: boolean;
  requireEmailVerification: boolean;
  defaultLanguage: 'hi' | 'en' | 'ur';
  helplinePhone: string;
  helplineEmail: string;
  announcementTextEn?: string;
  announcementTextHi?: string;
  announcementActive: boolean;
  themeColor: string;
}

// Master Database Schema Container
export interface DatabaseSchema {
  members: MemberRecord[];
  families: FamilyRecord[];
  committees: CommitteeRecord[];
  volunteers: any[];
  matrimonialProfiles: MatrimonialRecord[];
  educationResources: any[];
  jobs: any[];
  scholarships: any[];
  hospitals: HospitalRecord[];
  bloodBanks: BloodBankRecord[];
  bloodDonors: any[];
  surveys: SurveyRecord[];
  mahapanchayatResolutions: ResolutionRecord[];
  reports: any[];
  media: any[];
  documents: any[];
  downloads: any[];
  gallery: any[];
  notifications: any[];
  auditLogs: AuditLogRecord[];
  settings: WebsiteSettingsRecord;
}

const DB_STORAGE_KEY = 'rcb_enterprise_central_db_v2_4';

export class DBService {
  private static db: DatabaseSchema | null = null;

  /**
   * Initializes or restores the central database with pre-populated seed data
   */
  static init(): DatabaseSchema {
    if (this.db) return this.db;

    // Asynchronously synchronize with Supabase in the background
    setTimeout(() => {
      this.fetchFromSupabase().catch(err => {
        console.warn('Background database synchronization warning:', err);
      });
    }, 100);

    try {
      const stored = localStorage.getItem(DB_STORAGE_KEY);
      if (stored) {
        this.db = JSON.parse(stored);
        return this.db!;
      }
    } catch (e) {
      console.error('Error loading database from storage:', e);
    }

    // Seed Initial Enterprise Database
    const now = new Date().toISOString();
    
    // Create seed members
    const initialMembers: MemberRecord[] = [
      {
        id: 'MEM-001',
        memberId: 'RCB-2026-MP-00142',
        nameEn: 'Irshad Ahmed Rangrez',
        nameHi: 'इरशाद अहमद रंगरेज',
        gender: 'M',
        age: 42,
        phone: '+91 98111 22233',
        email: 'irshad@rangrezcommunity.org',
        district: 'Morena',
        state: 'Madhya Pradesh',
        tehsil: 'Kailaras',
        education: 'Post Graduate (M.Com)',
        occupation: 'Textile Business',
        bloodGroup: 'O+',
        isVerified: true,
        status: 'Active',
        membershipType: 'Life',
        createdAt: '2025-01-10T10:00:00Z',
        updatedAt: now
      },
      {
        id: 'MEM-002',
        memberId: 'RCB-2026-MP-00189',
        nameEn: 'Waseem Khan Rangrez',
        nameHi: 'वसीम खान रंगरेज',
        gender: 'M',
        age: 38,
        phone: '+91 99887 76655',
        email: 'waseem@rangrezcommunity.org',
        district: 'Bhopal',
        state: 'Madhya Pradesh',
        education: 'B.Tech Civil Engineering',
        occupation: 'Senior Contractor',
        bloodGroup: 'B+',
        isVerified: true,
        status: 'Active',
        membershipType: 'Annual',
        createdAt: '2025-02-15T11:20:00Z',
        updatedAt: now
      },
      {
        id: 'MEM-003',
        memberId: 'RCB-2026-RJ-00321',
        nameEn: 'Dr. Rehana Begum Rangrez',
        nameHi: 'डॉ. रेहाना बेगम रंगरेज',
        gender: 'F',
        age: 45,
        phone: '+91 98444 55566',
        email: 'rehana@rangrezcommunity.org',
        district: 'Jaipur',
        state: 'Rajasthan',
        education: 'Ph.D in Urdu Literature',
        occupation: 'University Professor & HOD',
        bloodGroup: 'A+',
        isVerified: true,
        status: 'Active',
        membershipType: 'Life',
        createdAt: '2024-11-05T09:30:00Z',
        updatedAt: now
      },
      {
        id: 'MEM-004',
        memberId: 'RCB-2026-UP-00098',
        nameEn: 'Faizan Ahmed Rangrez',
        nameHi: 'फैजान अहमद रंगरेज',
        gender: 'M',
        age: 27,
        phone: '+91 98222 33344',
        email: 'faizan@rangrezcommunity.org',
        district: 'Lucknow',
        state: 'Uttar Pradesh',
        education: 'MCA Computer Applications',
        occupation: 'Software Engineer',
        bloodGroup: 'AB-',
        isVerified: true,
        status: 'Active',
        membershipType: 'Youth',
        createdAt: '2025-05-20T14:10:00Z',
        updatedAt: now
      }
    ];

    // Create seed families
    const initialFamilies: FamilyRecord[] = [
      {
        id: 'FAM-001',
        familyId: 'FAM-MP-MOR-1021',
        headOfFamilyEn: 'Haji Abdul Hamid Rangrez',
        headOfFamilyHi: 'हाजी अब्दुल हमीद रंगरेज',
        district: 'Morena',
        state: 'Madhya Pradesh',
        address: 'Rangrez Mohalla, Near Jama Masjid, Kailaras, Morena',
        contactPhone: '+91 98111 22233',
        totalMembersCount: 6,
        annualIncomeBracket: '3.5 - 5 Lakhs',
        rationCardType: 'APL Card',
        isVerified: true,
        members: [
          { name: 'Haji Abdul Hamid Rangrez', relationship: 'Self (Head)', age: 68, education: '10th Pass', occupation: 'Retired Merchant', isVoter: true },
          { name: 'Zainab Begum', relationship: 'Wife', age: 62, education: '8th Pass', occupation: 'Homemaker', isVoter: true },
          { name: 'Irshad Ahmed Rangrez', relationship: 'Son', age: 42, education: 'M.Com', occupation: 'Business', isVoter: true },
          { name: 'Shabana Begum', relationship: 'Daughter-in-law', age: 37, education: 'B.A', occupation: 'Teacher', isVoter: true },
          { name: 'Ayaan Ahmed', relationship: 'Grandson', age: 16, education: '11th Standard', occupation: 'Student', isVoter: false },
          { name: 'Sara Fatima', relationship: 'Granddaughter', age: 13, education: '8th Standard', occupation: 'Student', isVoter: false }
        ],
        createdAt: '2025-01-10T10:00:00Z',
        updatedAt: now
      },
      {
        id: 'FAM-002',
        familyId: 'FAM-RJ-JAI-2044',
        headOfFamilyEn: 'Mohammad Saleem Rangrez',
        headOfFamilyHi: 'मो. सलीम रंगरेज',
        district: 'Jaipur',
        state: 'Rajasthan',
        address: 'Bari Chaupar, Near Hawa Mahal Road, Jaipur',
        contactPhone: '+91 98333 44455',
        totalMembersCount: 4,
        annualIncomeBracket: '5 - 8 Lakhs',
        isVerified: true,
        members: [
          { name: 'Mohammad Saleem Rangrez', relationship: 'Self (Head)', age: 52, education: 'B.Com', occupation: 'Textile Exporter', isVoter: true },
          { name: 'Farzana Begum', relationship: 'Wife', age: 47, education: 'B.A', occupation: 'Homemaker', isVoter: true },
          { name: 'Danish Saleem', relationship: 'Son', age: 24, education: 'MBA Finance', occupation: 'Corporate Analyst', isVoter: true },
          { name: 'Aliza Saleem', relationship: 'Daughter', age: 21, education: 'B.Tech CS', occupation: 'Student', isVoter: true }
        ],
        createdAt: '2025-03-12T11:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed committees
    const initialCommittees: CommitteeRecord[] = [
      {
        id: 'COM-001',
        committeeNameEn: 'All India Rangrez Central Advisory Council',
        committeeNameHi: 'अखिल भारतीय रंगरेज केंद्रीय सलाहकार परिषद',
        level: 'National',
        state: 'New Delhi',
        establishedYear: 1982,
        presidentName: 'Adv. Safeer Ahmed Rangrez',
        presidentPhone: '+91 98000 11111',
        secretaryName: 'Er. Tanveer Ahmed',
        treasurerName: 'Haji Waseem Khan',
        totalMembers: 45,
        status: 'Active',
        bankAccountVerified: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: now
      },
      {
        id: 'COM-002',
        committeeNameEn: 'Madhya Pradesh State Rangrez Mahasabha',
        committeeNameHi: 'मध्य प्रदेश राज्य रंगरेज महासभा',
        level: 'State',
        state: 'Madhya Pradesh',
        establishedYear: 1995,
        presidentName: 'Dr. Imtiaz Rangrez',
        presidentPhone: '+91 98989 89898',
        secretaryName: 'Irshad Ahmed Rangrez',
        treasurerName: 'Javed Akhter',
        totalMembers: 32,
        status: 'Active',
        bankAccountVerified: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: now
      },
      {
        id: 'COM-003',
        committeeNameEn: 'Morena District Youth & Education Wing',
        committeeNameHi: 'मुरैना जिला युवा एवं शिक्षा प्रकोष्ठ',
        level: 'District',
        state: 'Madhya Pradesh',
        district: 'Morena',
        establishedYear: 2018,
        presidentName: 'Waseem Rangrez',
        presidentPhone: '+91 99887 76655',
        secretaryName: 'Faizan Ahmed',
        treasurerName: 'Sohail Khan',
        totalMembers: 18,
        status: 'Active',
        bankAccountVerified: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed matrimonial records
    const initialMatrimonial: MatrimonialRecord[] = [
      {
        id: 'MAT-001',
        gender: 'M',
        nameEn: 'Aamir Ahmed Rangrez',
        nameHi: 'आमिर अहमद रंगरेज',
        age: 28,
        heightCm: 175,
        education: 'B.Tech Computer Science, IIT Delhi',
        occupation: 'Senior Software Engineer, Google (Hyderabad)',
        annualIncome: '24 - 30 Lakhs PA',
        district: 'Bhopal',
        state: 'Madhya Pradesh',
        maritalStatus: 'Unmarried',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300',
        isVerified: true,
        privacyMask: false,
        createdAt: '2026-02-10T10:00:00Z',
        updatedAt: now
      },
      {
        id: 'MAT-002',
        gender: 'F',
        nameEn: 'Dr. Sana Fatima Rangrez',
        nameHi: 'डॉ. सना फातिमा रंगरेज',
        age: 26,
        heightCm: 162,
        education: 'MBBS, MD Pediatrics Pursuing',
        occupation: 'Resident Doctor, Government Medical College',
        annualIncome: '9 - 12 Lakhs PA',
        district: 'Jaipur',
        state: 'Rajasthan',
        maritalStatus: 'Unmarried',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
        isVerified: true,
        privacyMask: true,
        createdAt: '2026-03-01T14:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed hospitals
    const initialHospitals: HospitalRecord[] = [
      {
        id: 'HOSP-01',
        nameEn: 'Al-Shifa Multispeciality Hospital & Research Center',
        nameHi: 'अल-शिफा मल्टीस्पेशालिटी हॉस्पिटल एंड रिसर्च सेंटर',
        city: 'Bhopal',
        district: 'Bhopal',
        state: 'Madhya Pradesh',
        address: 'Hamidia Road, Near Peer Gate, Bhopal',
        contactPhone: '+91 755 2554433',
        emergencyPhone: '+91 98000 99999',
        discountOffered: '15% to 25% discount on diagnostics and IPD beds for Rangrez Card holders',
        specialties: ['Cardiology', 'Orthopedics', 'General Surgery', 'Pediatrics', 'ICU'],
        isEmpanelled: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: now
      },
      {
        id: 'HOSP-02',
        nameEn: 'Apex Healthcare & Diagnostic Institute',
        nameHi: 'एपेक्स हेल्थकेयर एंड डायग्नोस्टिक इंस्टीट्यूट',
        city: 'Jaipur',
        district: 'Jaipur',
        state: 'Rajasthan',
        address: 'Tonk Road, Near Mansarovar Metro Station, Jaipur',
        contactPhone: '+91 141 2445566',
        discountOffered: '20% flat discount on MRI, CT Scan, and Pathology lab tests',
        specialties: ['Neurology', 'Urology', 'Radiology', 'Maternity Care'],
        isEmpanelled: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed blood banks
    const initialBloodBanks: BloodBankRecord[] = [
      {
        id: 'BB-01',
        name: 'Red Cross & Community Central Blood Bank',
        city: 'Morena',
        district: 'Morena',
        state: 'Madhya Pradesh',
        contactPhone: '+91 7532 233445',
        stockStatus: { 'O+': 'Available', 'B+': 'Available', 'A+': 'Low', 'AB+': 'Available', 'O-': 'Low', 'B-': 'Out of Stock' },
        verifiedDate: '2026-07-01',
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: now
      },
      {
        id: 'BB-02',
        name: 'Hamidia Hospital Government Blood Center',
        city: 'Bhopal',
        district: 'Bhopal',
        state: 'Madhya Pradesh',
        contactPhone: '+91 755 2667788',
        stockStatus: { 'O+': 'Available', 'B+': 'Available', 'A+': 'Available', 'AB+': 'Available', 'O-': 'Available', 'B-': 'Low' },
        verifiedDate: '2026-07-02',
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed surveys
    const initialSurveys: SurveyRecord[] = [
      {
        id: 'SRV-01',
        titleEn: 'National Census 2026: Socio-Economic & Educational Status Survey',
        titleHi: 'राष्ट्रीय जनगणना 2026: सामाजिक-आर्थिक एवं शैक्षणिक स्थिति सर्वेक्षण',
        description: 'Nationwide initiative to identify educational gaps, unemployment ratios, and government scheme penetration among Rangrez families.',
        targetAudience: 'All',
        status: 'Active',
        totalResponsesCount: 1428,
        questions: [
          { id: 'q1', questionText: 'What is the primary source of livelihood for your household?', type: 'multiple_choice', options: ['Textile/Dyeing Trade', 'Government Service', 'Private Corporate Job', 'Small Business/Shop', 'Agriculture/Other'] },
          { id: 'q2', questionText: 'Are all school-going children in your family enrolled in English medium or higher education?', type: 'multiple_choice', options: ['Yes, All Enrolled', 'Partially Enrolled', 'No, Due to Financial Constraints'] }
        ],
        createdAt: '2026-01-15T00:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed resolutions
    const initialResolutions: ResolutionRecord[] = [
      {
        id: 'RES-2026-01',
        resolutionNumber: 'RES-2026-01 (Bhopal Summit)',
        titleEn: 'Strict Prohibition of Dowry & Simplification of Nikah Ceremonies',
        titleHi: 'दहेज प्रथा पर पूर्ण प्रतिबंध एवं सुन्नत के अनुसार निकाह को सरल बनाने का संकल्प',
        category: 'Social Reform',
        proposedBy: 'National Working Committee & Ulema Council',
        datePassed: '2026-03-15',
        status: 'Approved',
        votesFor: 384,
        votesAgainst: 12,
        descriptionEn: 'Unanimous resolution mandating that marriage ceremonies in the community must remain simple without extravagant feasts or dowry demands. Committees to honor families adopting simple Nikah.',
        descriptionHi: 'समुदाय में विवाह समारोहों को बिना किसी फिजूलखर्ची या दहेज की मांग के सरल बनाए रखने का सर्वसम्मति से प्रस्ताव पारित। सादगी से निकाह करने वाले परिवारों को समाज द्वारा सम्मानित किया जाएगा।',
        createdAt: '2026-03-15T00:00:00Z',
        updatedAt: now
      },
      {
        id: 'RES-2026-02',
        resolutionNumber: 'RES-2026-02 (Jaipur Session)',
        titleEn: 'Mandatory Higher Education Fund Allocation by All Area Committees',
        titleHi: 'सभी क्षेत्रीय समितियों द्वारा उच्च शिक्षा कोष का अनिवार्य आवंटन',
        category: 'Education',
        proposedBy: 'Education Wing',
        datePassed: '2026-04-10',
        status: 'Implemented',
        votesFor: 410,
        votesAgainst: 5,
        descriptionEn: 'Every registered district committee must allocate at least 25% of its annual Zakat/Charity collections specifically towards higher education tuition fees and coaching grants for deserving youth.',
        descriptionHi: 'प्रत्येक पंजीकृत जिला समिति को अपनी वार्षिक जकात/दान संग्रह का कम से कम 25% भाग विशेष रूप से योग्य युवाओं की उच्च शिक्षा शिक्षण शुल्क और कोचिंग अनुदान के लिए आवंटित करना अनिवार्य होगा।',
        createdAt: '2026-04-10T00:00:00Z',
        updatedAt: now
      }
    ];

    // Create seed audit logs
    const initialAuditLogs: AuditLogRecord[] = [
      {
        id: 'AUD-001',
        action: 'SYSTEM_BOOTSTRAP_DATABASE_INIT',
        module: 'Database Layer',
        actorId: 'SYSTEM_ENGINE',
        actorName: 'Core System Initialization Service',
        actorRole: 'System',
        ipAddress: '127.0.0.1 (Local Node)',
        details: 'Centralized database schema initialized with 21 core tables and pre-loaded with static census records.',
        severity: 'INFO',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 'AUD-002',
        action: 'MAHAPANCHAYAT_RESOLUTION_APPROVED',
        module: 'Resolutions',
        actorId: 'USR-ADM-999',
        actorName: 'All India Rangrez Central Trust Admin',
        actorRole: 'Super Administrator',
        ipAddress: '192.168.1.104',
        details: 'Approved resolution RES-2026-01: Strict Prohibition of Dowry & Simplification of Nikah Ceremonies.',
        severity: 'INFO',
        createdAt: now,
        updatedAt: now
      }
    ];

    // Create seed website settings
    const initialSettings: WebsiteSettingsRecord = {
      portalNameEn: 'Rangrez Community Bharat Portal',
      portalNameHi: 'रंगरेज समुदाय भारत पोर्टल',
      maintenanceMode: false,
      allowNewRegistrations: true,
      requireEmailVerification: true,
      defaultLanguage: 'hi',
      helplinePhone: '+91 78799 40869',
      helplineEmail: 'allindiarangrej@gmail.com',
      announcementTextEn: '📢 National Scholarship Applications 2026 are now OPEN! Apply before 31st August 2026. | National Career Seminar in Jaipur on 5th Aug.',
      announcementTextHi: '📢 राष्ट्रीय छात्रवृत्ति आवेदन 2026 अब खुले हैं! 31 अगस्त 2026 से पहले आवेदन करें। | 5 अगस्त को जयपुर में राष्ट्रीय करियर संगोष्ठी।',
      announcementActive: true,
      themeColor: '#004B23'
    };

    this.db = {
      members: initialMembers,
      families: initialFamilies,
      committees: initialCommittees,
      volunteers: [],
      matrimonialProfiles: initialMatrimonial,
      educationResources: [],
      jobs: jobListings || [],
      scholarships: governmentSchemes || [],
      hospitals: initialHospitals,
      bloodBanks: initialBloodBanks,
      bloodDonors: bloodDonors || [],
      surveys: initialSurveys,
      mahapanchayatResolutions: initialResolutions,
      reports: [],
      media: newsArticles || [],
      documents: [],
      downloads: [],
      gallery: [],
      notifications: [
        {
          id: 'NOTIF-01',
          title: 'Welcome to the Upgraded Enterprise Portal',
          message: 'The Rangrez Community Bharat Portal now runs on a centralized database with full Role-Based Access Control.',
          date: now,
          read: false,
          type: 'system'
        }
      ],
      auditLogs: initialAuditLogs,
      settings: initialSettings
    };

    this.save();
    return this.db;
  }

  /**
   * Persists database state to localStorage and triggers reactivity
   */
  static save(): void {
    if (!this.db) return;
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.db));
      window.dispatchEvent(new CustomEvent('rcb_db_updated', { detail: { timestamp: new Date().toISOString() } }));
    } catch (e) {
      console.error('Failed to save database state to local storage:', e);
    }
  }

  /**
   * Fetch and synchronize complete database from Supabase tables
   */
  static async fetchFromSupabase(): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) return;

    try {
      const [
        { data: members },
        { data: families },
        { data: committees },
        { data: matrimonialProfiles },
        { data: hospitals },
        { data: bloodBanks },
        { data: surveys },
        { data: mahapanchayatResolutions },
        { data: auditLogs },
        { data: settings }
      ] = await Promise.all([
        supabase.from('members').select('*').eq('isDeleted', false),
        supabase.from('families').select('*').eq('isDeleted', false),
        supabase.from('committees').select('*').eq('isDeleted', false),
        supabase.from('matrimonial_profiles').select('*').eq('isDeleted', false),
        supabase.from('hospitals').select('*').eq('isDeleted', false),
        supabase.from('blood_banks').select('*').eq('isDeleted', false),
        supabase.from('surveys').select('*').eq('isDeleted', false),
        supabase.from('mahapanchayat_resolutions').select('*').eq('isDeleted', false),
        supabase.from('audit_logs').select('*').order('createdAt', { ascending: false }).limit(500),
        supabase.from('website_settings').select('*').maybeSingle()
      ]);

      const db = this.getDB();
      let updated = false;

      if (members && members.length > 0) {
        db.members = members;
        updated = true;
      }
      if (families && families.length > 0) {
        db.families = families;
        updated = true;
      }
      if (committees && committees.length > 0) {
        db.committees = committees;
        updated = true;
      }
      if (matrimonialProfiles && matrimonialProfiles.length > 0) {
        db.matrimonialProfiles = matrimonialProfiles.map((p: any) => ({
          id: p.id,
          gender: p.gender,
          nameEn: p.nameEn || p.name_en || '',
          nameHi: p.nameHi || p.name_hi || '',
          age: p.age,
          heightCm: p.heightCm || p.height_cm || 165,
          education: p.education || p.education_en || 'Graduate',
          occupation: p.occupation || p.occupation_en || 'Business',
          annualIncome: p.annualIncome || p.annual_income || '₹3-5 Lakhs',
          district: p.district || p.district_en || 'Morena',
          state: p.state || p.state_en || 'Madhya Pradesh',
          maritalStatus: p.maritalStatus || 'Unmarried',
          photoUrl: p.photoUrl || p.photo_url || '',
          isVerified: p.isVerified || p.is_verified || false,
          privacyMask: p.privacyMask || p.privacy_mask || false,
          createdAt: p.createdAt || p.created_at || new Date().toISOString(),
          updatedAt: p.updatedAt || p.updated_at || new Date().toISOString(),
          createdBy: p.createdBy,
          isDeleted: p.isDeleted || false
        }));
        updated = true;
      }
      if (hospitals && hospitals.length > 0) {
        db.hospitals = hospitals;
        updated = true;
      }
      if (bloodBanks && bloodBanks.length > 0) {
        db.bloodBanks = bloodBanks;
        updated = true;
      }
      if (surveys && surveys.length > 0) {
        db.surveys = surveys;
        updated = true;
      }
      if (mahapanchayatResolutions && mahapanchayatResolutions.length > 0) {
        db.mahapanchayatResolutions = mahapanchayatResolutions;
        updated = true;
      }
      if (auditLogs && auditLogs.length > 0) {
        db.auditLogs = auditLogs;
        updated = true;
      }
      if (settings) {
        db.settings = settings;
        updated = true;
      }

      if (updated) {
        this.db = db;
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
        window.dispatchEvent(new CustomEvent('rcb_auth_changed'));
        window.dispatchEvent(new CustomEvent('rcb_db_updated'));
      }
    } catch (err) {
      console.warn("Could not sync complete DB from Supabase (this is expected if the DB is empty or disconnected):", err);
    }
  }

  /**
   * Retrieves full database snapshot
   */
  static getDB(): DatabaseSchema {
    return this.init();
  }

  /**
   * Generic get by ID helper
   */
  static getById<T extends DBRecord>(collection: keyof DatabaseSchema, id: string): T | undefined {
    const db = this.init();
    const items = db[collection] as T[];
    if (!Array.isArray(items)) return undefined;
    return items.find(i => i.id === id && !i.isDeleted);
  }

  /**
   * Insert new record into specified table
   */
  static insert<T extends DBRecord>(collection: keyof DatabaseSchema, record: Omit<T, 'id' | 'createdAt' | 'updatedAt'>, actorId: string = 'System'): T {
    const db = this.init();
    const now = new Date().toISOString();
    const prefix = collection.toString().substring(0, 3).toUpperCase();
    const newId = `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRecord = {
      ...record,
      id: newId,
      createdAt: now,
      updatedAt: now,
      createdBy: actorId,
      isDeleted: false
    } as unknown as T;

    const items = (db[collection] as T[]) || [];
    items.unshift(newRecord);
    (db[collection] as any) = items;

    // Write to Supabase if connected
    const supabase = getSupabase();
    if (supabase) {
      const tableMap: Record<string, string> = {
        'members': 'members',
        'families': 'families',
        'committees': 'committees',
        'matrimonialProfiles': 'matrimonial_profiles',
        'hospitals': 'hospitals',
        'bloodBanks': 'blood_banks',
        'surveys': 'surveys',
        'mahapanchayatResolutions': 'mahapanchayat_resolutions',
        'auditLogs': 'audit_logs',
        'settings': 'website_settings'
      };
      const tableName = tableMap[collection.toString()];
      if (tableName) {
        let payload: any = { ...newRecord };
        if (tableName === 'matrimonial_profiles') {
          payload = {
            ...payload,
            name_en: payload.nameEn,
            name_hi: payload.nameHi,
            height_cm: payload.heightCm,
            education_en: payload.education,
            education_hi: payload.education,
            occupation_en: payload.occupation,
            occupation_hi: payload.occupation,
            annual_income: payload.annualIncome,
            district_en: payload.district,
            district_hi: payload.district,
            state_en: payload.state,
            state_hi: payload.state,
            photo_url: payload.photoUrl,
            is_verified: payload.isVerified,
            privacy_mask: payload.privacyMask
          };
        }
        supabase.from(tableName).insert([payload]).then(({ error }) => {
          if (error) console.error(`Failed to write new record to Supabase table [${tableName}]:`, error);
        });
      }
    }

    // Log audit trail
    this.logAudit({
      action: `CREATE_${collection.toString().toUpperCase()}`,
      module: collection.toString(),
      actorId,
      actorName: actorId === 'System' ? 'System Process' : actorId,
      actorRole: 'User',
      ipAddress: '127.0.0.1',
      details: `Created new record [${newId}] in table ${collection.toString()}`,
      severity: 'INFO'
    });

    this.save();
    return newRecord;
  }

  /**
   * Update existing record
   */
  static update<T extends DBRecord>(collection: keyof DatabaseSchema, id: string, updates: Partial<T>, actorId: string = 'System'): boolean {
    const db = this.init();
    const items = (db[collection] as T[]) || [];
    const index = items.findIndex(i => i.id === id);
    
    if (index !== -1) {
      items[index] = {
        ...items[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      (db[collection] as any) = items;

      // Write updates to Supabase if connected
      const supabase = getSupabase();
      if (supabase) {
        const tableMap: Record<string, string> = {
          'members': 'members',
          'families': 'families',
          'committees': 'committees',
          'matrimonialProfiles': 'matrimonial_profiles',
          'hospitals': 'hospitals',
          'bloodBanks': 'blood_banks',
          'surveys': 'surveys',
          'mahapanchayatResolutions': 'mahapanchayat_resolutions',
          'auditLogs': 'audit_logs',
          'settings': 'website_settings'
        };
        const tableName = tableMap[collection.toString()];
        if (tableName) {
          let payload: any = { ...items[index] };
          if (tableName === 'matrimonial_profiles') {
            payload = {
              ...payload,
              name_en: payload.nameEn,
              name_hi: payload.nameHi,
              height_cm: payload.heightCm,
              education_en: payload.education,
              education_hi: payload.education,
              occupation_en: payload.occupation,
              occupation_hi: payload.occupation,
              annual_income: payload.annualIncome,
              district_en: payload.district,
              district_hi: payload.district,
              state_en: payload.state,
              state_hi: payload.state,
              photo_url: payload.photoUrl,
              is_verified: payload.isVerified,
              privacy_mask: payload.privacyMask
            };
          }
          supabase.from(tableName).update(payload).eq('id', id).then(({ error }) => {
            if (error) console.error(`Failed to update record in Supabase table [${tableName}]:`, error);
          });
        }
      }

      this.logAudit({
        action: `UPDATE_${collection.toString().toUpperCase()}`,
        module: collection.toString(),
        actorId,
        actorName: actorId,
        actorRole: 'User',
        ipAddress: '127.0.0.1',
        details: `Updated record [${id}] in table ${collection.toString()}`,
        severity: 'INFO'
      });

      this.save();
      return true;
    }
    return false;
  }

  /**
   * Soft delete record
   */
  static delete(collection: keyof DatabaseSchema, id: string, actorId: string = 'System'): boolean {
    return this.update(collection, id, { isDeleted: true } as any, actorId);
  }

  /**
   * Append audit log
   */
  static logAudit(log: Omit<AuditLogRecord, 'id' | 'createdAt' | 'updatedAt'>): void {
    const db = this.init();
    const now = new Date().toISOString();
    const newLog: AuditLogRecord = {
      ...log,
      id: `AUD-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: now,
      updatedAt: now
    };
    db.auditLogs.unshift(newLog);

    // Stream audit log to Supabase if connected
    const supabase = getSupabase();
    if (supabase) {
      supabase.from('audit_logs').insert([newLog]).then(({ error }) => {
        if (error) console.error("Failed to insert audit log in Supabase:", error);
      });
    }

    // Keep max 500 audit logs to prevent localStorage quota exhaustion
    if (db.auditLogs.length > 500) {
      db.auditLogs = db.auditLogs.slice(0, 500);
    }
  }

  /**
   * Execute full system database snapshot backup
   */
  static createBackupSnapshot(): { success: boolean; snapshotName: string; sizeBytes: number; data: string } {
    const db = this.init();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const snapshotName = `RCB_Enterprise_Backup_${timestamp}.json`;
    const serialized = JSON.stringify(db, null, 2);
    const sizeBytes = new Blob([serialized]).size;

    this.logAudit({
      action: 'SYSTEM_BACKUP_GENERATED',
      module: 'Backup System',
      actorId: 'SUPER_ADMIN',
      actorName: 'Administrator / Cron Job',
      actorRole: 'Super Administrator',
      ipAddress: '127.0.0.1',
      details: `Generated system backup snapshot ${snapshotName} (${Math.round(sizeBytes / 1024)} KB)`,
      severity: 'INFO'
    });

    return {
      success: true,
      snapshotName,
      sizeBytes,
      data: serialized
    };
  }

  /**
   * Restore database from snapshot JSON string
   */
  static restoreFromBackup(jsonString: string): { success: boolean; message: string } {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object' && 'members' in parsed && 'settings' in parsed) {
        this.db = parsed;
        this.save();
        this.logAudit({
          action: 'SYSTEM_RESTORED_FROM_BACKUP',
          module: 'Backup System',
          actorId: 'SUPER_ADMIN',
          actorName: 'Administrator',
          actorRole: 'Super Administrator',
          ipAddress: '127.0.0.1',
          details: 'Successfully restored full enterprise database state from external backup file.',
          severity: 'ALERT'
        });
        return { success: true, message: 'Database successfully restored and re-synchronized!' };
      }
      return { success: false, message: 'Invalid backup file format. Missing core database tables.' };
    } catch (e: any) {
      return { success: false, message: `Failed to parse backup JSON: ${e.message}` };
    }
  }
}
